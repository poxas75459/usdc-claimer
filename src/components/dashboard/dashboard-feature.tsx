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
    "4fVtzx1QgSxissFxnaSrQZCmMBCyenERky4F5pGe4GeDWDz85TsnEsei8NojxK8kCyuogBzWVTKAAWWWcQzJ7Mpb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RsFTUebjRBuwPzrHi4XYa5bPXzfvcxTZYX8vRNuHKG44jF9kGT2E4LCgZbfVXHd5eoo3sAnyyaAmnAdbf2xf4zk",
  "key1": "yXMkhDb5bcqaEJJpkwVqTxaWcC67SVkT8rAFMbwBUETV7SudptL6rck7VZdeYTNeVQpQeQTrRtWiDcM3fqHMmxT",
  "key2": "67NJ68Lu9sVKs8tjFU1z3KGfsZVNkmbYgb5Cja6iocdKNQ5wEJ1V5xq4hPP1dbcUWHyVcfoCH8X4oH5fwSVg7Rwf",
  "key3": "2eE2RdZWkr8AwKQJtupFwMbXnMZPKozSBVCM9DXEBWMDzRpwwuHGXfr8LzZSZMYPtebVgLWFQDHJsbfNxrf6zEDZ",
  "key4": "3Uft4iBXEF3BvAVLruM3ENMGcP2QPAr418Ph8Y2UAbx4N3eBjAvn4vGTfvwg2kX2TeoNrqfVLWuqKbzgyEQhwrMs",
  "key5": "2YcjHoPr3zf113FPa9iWNTJhEvxYFXKuwuz4ohbvmqh3eU4XKSyMgK15fGFfv8RjCReNN6Z453Di26Ht8VV5VTMN",
  "key6": "3Xu1QjQWvs5gYTeFXD6oHTapUkQSfHPTwykUs2rF2gEjb4ZJ4nWFXUiRnLhPQ3jfA2Pk58VNpsbQJKRmuTdM8RZp",
  "key7": "4WXoNP5X9voTXhtDmrGTJndu2Y5MuR36Go8MuanJzGXAoH9mkz5VzzH7ai46TR6DNQRhmCzXxiAPVYQRsJYwr8uQ",
  "key8": "pzTw8afSj8LWf1Lnd1xER8ggzEgQdYTEJC1necw5kTVXqvQPuW24ccznF1RHqBQVubPa7sVRb1neB9ENZTuVxS9",
  "key9": "4xc5CZ2Q66icA37pY9DcjXEXNmrUafH9wJ1Atxp69MCJDMeK6v8UgD5DMRumKdQN7KPNt1Z4jyarGgH2AJBMG1jF",
  "key10": "3e8LQXz6GA5dxRrxGneCdF3BTHy2kdBAgQbRPhgKuiE3ATQCjBirKF2afsYWJLfvuciodnyLymdz69RFm3xivvY5",
  "key11": "2gsNTiGiQsq5yEhCvg9SRCfQFUxRzkHs864DEXGtkS8TYWoB82nbYmuVZmWo6T8gphTirP5wsYXn37xDSDWdA5h6",
  "key12": "ywEP5w435ZB188nHgfHFbajsS1RN1yGcNBE179852b7zXcbZc44gBurMd9o4Spskiwq6yfxs3FrGraahvERf4tZ",
  "key13": "43LtMS3uUESm8fifkHLxKrZJ9YoJT9jQSAHy6h7byQDgweacsR1wVDKWutMWpVTwduPKuskBP9Am4RpdKm8gAsqe",
  "key14": "3Lnp1aACsipCGDQa8Farq4GSQppFp687zMPAfKLSFP1HWxCDHKRG7vo4Aj1oDcexmogg8WSpcr37ue24CqWXDFdc",
  "key15": "3mGFxLnAo6myHCgY9EEhGMNNFPyEJrxgNuGGXvJEb5YvCitHh1bkatW45wmRPcW5Tx9hEgifsAbEYULG3oyf4KQo",
  "key16": "3pHj36Z9CfrbkZoekyNx6P7txHcfemukmiMwDFvPRZPXjpuAioouEdPjcu21DSW5J8GGL2tk44yEqYK4FtbCeiP9",
  "key17": "5sXzG7JjvEjmZadk4vFFiHbqnEuRKc8EAKa6NMFhvHSTPMhwhVv745hier6M5w3vchNLJzYRwyxHV6AmP6GSHko2",
  "key18": "3ZgXVKXpQfXSgAQQDM1P3SdcZ7CcgPuakLPxvUpy7AaRYddwLQmsCZhU5eu8zkc7xZU7WpPSGDzMWfojp9gUzuF6",
  "key19": "47iqgTifJTjtnp78f3ypGrEMyRE7mwfo1YgSf9b6NReYHbPuKqe7WUi4URLNq9BNBj1wsTitiZfgWc3bqbtFdgps",
  "key20": "5g3wQ8njn31ydJuYiYMrKd7N7J4Gkskjb5ngbUM4bmohr5rws1ZEgvExP4sQFdp4czHj38xZxyZqCAKzzyLQNH5w",
  "key21": "4NacwYVaDhMdAUJ7XYiAffq7cFzrtE9YcsZUshmNFCT4Lm6K6bMAJ3b73zgK7JpiqfCDo4jeJppU5ShTSePgkNZs",
  "key22": "6otwkCwVDUJorzHN46NWZwmA9232sUdzou4ZJamy5Lkam1qY7R5PREFsh5tX5qHyN3FBgKbZiyaLs14ECZrVm3w",
  "key23": "33kEfb2DKTFjQYTXCyRXDH7FECuxGKyrSJbMWH7A5dBFQ93MnVJRibqssDmso4qiNP1zXVim2CyvTTDBK74FHv35",
  "key24": "2EpwLWeK6GK18YVQBYrwCNrjkEmr7HyQbtLRsgF53yuJtYhPVqTijVuqccE95po31g8Ht4No78nMRXJkeMK9tJZH",
  "key25": "2txDwpwM3ogkr1jcYhr6JBSkNZu33sqgJZtiCBbWe74BRDWFhGeZKYcNfwPaa8gVSYarxnRER21D2LYFoxzCGMhz",
  "key26": "2NA8oqxSUrZnwAW1ApVc6fducTU8eQ4Bd84krKzUMb8ELHnsq9cjnbxfb1Yo8VUY5B1YDiH5gsrrLVAS7D3kobJD",
  "key27": "1uYRsntLFtg8t2yhsaTh1WkWD5yYDuPYpGtNXKXidSLJGZwfmeWJpVSUD3NDdHEeu5JCBwujKH2eu1Fqt29nPb3",
  "key28": "3kNGKkNT91u6QaLaoUNF53uR4kkCCAj5UXvZabs2cMQZvRxEW9rzcamGAoXHQMLwvh4arKfeByWkjxUn6CpGddPH",
  "key29": "2H1FsQ6zLwDYR6RnAgbgXT8ELYEUgzW8eCaYHrQizPLHWU9cgM7uEJvZ2iz1ffhWKNDxNQuybhvadkEicRvv2mYo",
  "key30": "2TWw4Cph3wpqJmpYheRAuyKCzF8f8Pz5GQnuSkuCBABGiqZeE5UU3B7TuagsKntZXe7de2n4AA9kXw3Ugfe1jk9n",
  "key31": "39sxro4h7JXXcanwgY4VH877jWK7Xc7CUWCwkr9ZWk8LXYmFnhmdFQgBFJZq38PKvNxwZjcjPokDo8bedcw3A6zU",
  "key32": "4FmW47nRzoqWsYarbm78aFyJGu6pgBGX8jmmnoii3keMXvsVJBXD7GNquwpCHZ8a8pxLtYuHp3gc6ZZQhfDwYL8V",
  "key33": "kk82UMeSZ21N1ApZ9ddBwC2GAEun5b5a7bGF3HHLmNVFrcRnb4skuxRv98qdFXwqFnq6SbdXSrydsLfHDcceDyS",
  "key34": "2v26qxBch5F4VGT4zHbrbxWXZufctAebRaNsye33R38w92LaRcdJkGg7zudGWE9XhuuFmTYTVD4MYepoxcAGUC4r"
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
