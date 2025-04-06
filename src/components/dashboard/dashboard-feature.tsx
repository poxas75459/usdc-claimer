/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "61BxqoFiVnKsXGTsytpgxMdMi5md4NijhSprMZiSsAptJhmfqV419MeEfisiSAdMcc5Dn18GNnBUqCfZumswEuGx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WNrYLQFUGHYxdkquHhEEvVJpea3RSULhxwjhGJZY3DghhwkfhjjLtWD8vrWJQSRrwuD2oRQ2fNxFpBixV9fp1hS",
  "key1": "2rq59X7aZLffvJVuBjMDH6CAYZwkCnhFjZzJ7jYC25pUtKgkarxgp96KQB1dZ73ARYTipqMhcYZgjvDVkGazQ6Kv",
  "key2": "5UrjT6q587sryRHajJEjQmnE53sjgLsXGQZKYMGgfiUBz834Rnvi5pLoR7j7tY7bZiy6YPTV3RhyJPmYkJQVzP3",
  "key3": "2oSGvWcvycfr2fz36W4so1dfmJ19szPkgagpFDAKHzsEmyemDrbWvUWkxhJsFF3npEJYYP5rTYGxwgdAsNi2eKA5",
  "key4": "zXawQUGdRQRRBpqH68CbrqkLz4BfM9eR6czzsqmfpKVSHDWoavFwAWw1xnQxiWCEmWBrx5XsiPr7tigyt9HXAr4",
  "key5": "5dHqK4iVDSp4bSnSLrrcMhmdh4JwtmEDqEs5D8p5LgvymRSgYs4TwiTbsk9n1h91FRwX5UJtroCj2Ta8i6dVQRWv",
  "key6": "2TSQYk9N91g3TJkEbjYDnqZV5kWRWZa6rmFA3MAScWEhRP4dnZcKVnoapkCeUUHw1vXTHzzgXTB6CNGgTesb6eGz",
  "key7": "w1csxaL8h1XFdLi2Sstz5ULb7m61i6K8LjXUkghMLoJ8KzCvS1KGu3DXaMzrUbBYdN5Y3ncFBdJUqzCeHxmikHH",
  "key8": "5Th3FPFbVtnzVWtfQvpjwe6NaHoWfcf1xeJYsQcQbo8CWe5SNUkqFZNDWQCd8DXY3HHoZjfunAJJ7HLLdDf8F5X3",
  "key9": "3cLduwaEud9aR4f9C2Yoc1hJ7p1qfEnos8Zxpeow6nCKLmiHA27rrWfZmqiPxLeu8N3GtBSTtxERo5eLd9cYjnDP",
  "key10": "3ZqBiEY6HNSy3mgWdwk8g7rJ2LUVkrBpfuKcZTusRpzdZuuQrDeE7kgmW77BTDiedbXy39Fo2YbcazTQyQbfseK7",
  "key11": "3VAQxNHPH312niZ4xF9UhwqHYM3wTUqsgmqpkxRyRj53FyZmo6C47kZ8u1cmQkDKH4Pqo3VqjpzztsVzLCYoWQDe",
  "key12": "5NoYLfLy7GTzAt3VMofTkaaaeKNno5DPnk7KGj7HjcHNRxiE3vrmkVZ3dUZDHsTeZzNfxFcMNEph1URTcc9zH7x7",
  "key13": "cKnRUpRa7Lv7QyF4E7aWjJyJTCaN53MhKCHYRrwb8dH9vvqaYNUs9UVqJtz9foYv68wNPGNZsF5qtCKG3qcptiM",
  "key14": "4urBHuheHtTK2rMzBZfRzRkPFw6ezCjuH5XBBdiTJHABLtyUCGS2rWFGAP56GG6zmKMKmbGDBU1gnSFgBsffX8Uq",
  "key15": "3GQy1f9TFsxM31pib1G2J6vmmNr7VM7jXTQzME3AHGr7MFJSobt2fJvmKiMzbbPLWoh1Uf4rvDXCSouNL2gbtxTQ",
  "key16": "5SPmWps6YxMEs8r1yjkjvbjbzwGvCkNU15GgNfALZThCozT3XGf9U7QJXUpXuYMeJwbongvJjcFiukEj4Dc2Np98",
  "key17": "36MkfUtEnpuucqBhRZcKHdiwhxLdJQWnmoeaQFtzajw9g68wURkefFBCT1yJeMncajBjrVHthe5KHrhmjiySVrNP",
  "key18": "i5D2GPeHphupe37Us84CQ8HrLfkP8ztCWKxYVQgmG5jRfCdtTZtHsRouHE846MWq2UwE97doGqeLsQ9mWkbWMAK",
  "key19": "2TpmmEjJ4nv1B5iFaBxELzQ26X2Nj9qRLHr3jgnCji69pNqJreVWw4nKFh1DqMyweNTWmiRAhfbtWA5Q8sYgxfzp",
  "key20": "61ARtzBG9BqeKe3ubCyYgtHG6xmwBKyntLBxMzLc768KvjePPDWwUEzUcJVPzUk8PhSW3n5AsriDFf2yR1fvHhJJ",
  "key21": "5FY5rcaRT5eJo7bdmLZyjeukpV3XmTX32pmP7ZaahktNmfvFNcmxmLD8t1J5Eo6bwZPpnanDskYqjrnjEADWcRkv",
  "key22": "sfZVTpG19T71GyxUJWZxyzEo5A9WTZqxxrQd5bFgaDyhSYAhoXQ4YL9pqwhTvc7vnoMBmAFGW7R4pBiL2CVTARt",
  "key23": "g56tiEW4xuyqRN2EJagkY2RbEHYQGH6k9t5YoovpFRjq8xyiQHD5sN1e7DAJ2ijpTX9RqN92FnL5sDKFe1uKZAj",
  "key24": "4u9MvQgghWgpvdcGFUAxMGJF71VMP5wBnypz7wnZpuq8sq7fuEFRfkEtm1RkDcRt9sPYGuVYjmzSpiqN42PiVpM8",
  "key25": "5i7GeH3SkgzvMUmRdnK1hwXNhVEM8Y1Gvc5pEGdYS79WoqyqFTf2uCCRyBxZp3Rrqtta7yG7LDabqNZh7jxGKGNF",
  "key26": "4zds3xZL9vnq6bt2PbdeXe99XZTDx5co1TkntJtkWnXBMRw17TjEJ1GqarJJrFUmgqbL9pkDuZN73Zpf7ho133BD",
  "key27": "28GyTQHBpRKcW3aTjCtchJgR3AT9Kr2A8AGYLzhQi4t8fT8m4yqzp2fAZRip962YY8pmxfA795BesBEBGSX25F2o",
  "key28": "2vxS9NphEYZGDaUoxZTfDQi14oYDXsGbPhS27QHbFXH7QExNEHDso73T1fL9z83drTCwGX8V4exQkMTZ1UDGXo8g",
  "key29": "3n4GvXARTECKQgVfru65Wq8Sm4g7McA1MnNyVRk7VwsPeresX6d5V96KuRLuWNvMfFC3C4wTUHDr3psKJ63MooYm",
  "key30": "F8LWWzVhVCBgy3rbTpTTtAMK2nJ7Xuv9HFhBUVy4ZsitzEvhYSSdithVnLXpMr6Q6ZKAsS4ruf1CPkZj7pC5jcQ",
  "key31": "5QBJE7nEe7X4F7zzpJZcANUYikZKX4qnRY9ZS7PG1qWZZfci8zJFsEHe123H5goE41UhVGLXxf3dfX5EfW6B4B2L",
  "key32": "7F8iETSu6P1yRPfmvRj7wCAsqoFfFw9P8vVeFNcFSqgGUpG47mAqqXhfSDB7YK9o1qSDtdASCf43c5miEg9sjFu",
  "key33": "3EsrBqye55zBMQNkWXvVE6DrCqdL15QSiZ4qehujXe7PvGtnZ7AXvXNjSgeWZJD88Tb6ab95aV2M7EC5oqZ4prZg",
  "key34": "4XkE8sXmtQPE87T5U3GCEDCX5FWx66j5g38LKfYZx6EanpaKtFhKShqFzD6xN1iNHSAww5dGFtbqMhRWS9oP4Fk"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
