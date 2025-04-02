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
    "4QNys584QUhFG6Wv18fAMVGjPn86J8G5kgC4uNGEMXU4RU3McXUMsxMcCHvo2TPuiFftj8NTpKunhBxsRoZjeHjn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KfFnBvxjeFFUanmmWYyFAgCa6JaerAkScpFPYEjzDaxeUPXiw3Zx8B9gCYTZv5KoDTH592r8pyjpTePr8MXxgDS",
  "key1": "2aQDMyQq45P4HBn8okcb1BYT9haGtJ8rjNaSikk9p4ihJZYpqbBqAeaZA5fbD6X8yUV9SscDkEFKESjxYR8vgPFh",
  "key2": "3NyzkUjef3hy85qpoSQe3HiB5KVmsnvbRoKoy9NGZ6uH7BUx4TNLhAf7UHk6Ci3KnWF9hfCFAHsg9EX65Ri3vFke",
  "key3": "5htaEEH6mkHAT4ghT23RxgXCwycMBTprvwVxMWm4zX53CTHLg5MtLcpjfEZ15dyZReMybMmP1Wv48apZ4G1QPT21",
  "key4": "3mX3b3QBkE9B2yiFXhqzb1HMMSeA4nrKfvvT4wQLN4qaMmK2bdg9LNuEcrERguUBeo9euALwdyPPnLRuKuTHp48L",
  "key5": "4Xtr3oQ8PpfRzesyXjXm8RwqBHZYdB3nkZ1v5Jn7rfxv2euoFaX8v2SpuyodezxBsQtEnAa6g82XcmJHTV1XgvJX",
  "key6": "kW1xyY5CG74jyoL9bNKZ1wZ9edbQJGZJhP4quZC9X9PqieRL33hGsaFdnCEYZaWCLMt8gt9qqgrS8gHwrfhPeZL",
  "key7": "4c1jwvUCt6Ektnzy3dGuF1PwdZzGgRZ6Zn9Epb12asQfrFkp5Y2sv43GhM2wEbrSw6G2UkSHcwHFoSHbwD5Pnkxx",
  "key8": "4GGcn6z5kjiqGjvZr1QG2eJYNNA76biqyDKNrjWv3TYTqnvVpWCiULzyFbBjZbhpy55YFVdZaQUdmcqE6mHbCjAm",
  "key9": "5546BR8z9e6yxHFfrQUqLK3nKDhvsgUmPdawjXQKC5gj5T6HoNNhurJ8QwatznurHB8n3oJWMx1wE7aEVki17YcS",
  "key10": "2mEACRSkG1vVXYjwXi6odL1jFodhgGkGPBpqQaFLp2HessgUj87em4pofhnfxd36us4nfGL8DcytLSMJuETUhstH",
  "key11": "25xThoFviTybcqkzhse7ifyY6HEKPQ52qcSjhNDaEq71RbjE3enoxFtNxH63fX7h7sy7JqMaanYhBd4kepuqPkPR",
  "key12": "5o6PDZFujBkv3uBCvqRjJGM9hkRefWFcwrBFZz6hT8EKDybouZz8YqvP8BJaZijHYK9E4kBnLKefeoFzJCMNLX2t",
  "key13": "3qHVAzD2Su9tQb9g81sf3APFoBZaj9kTm42u9D9M6qbUVL6z3LQ68Y4n2jcxojpr1sYRP1jjzgG1UWWJy9pgQWXP",
  "key14": "4VxrMLVekF4YzGAYWZ8J3ovu4SPGHQPwj7Hi5dMJdRTkt1Jgbve5XRJDtttr9vWRUeZUW6wTmsqjZuGJzfj58Ubk",
  "key15": "4LnFL8aQDdH3VcZk1KrELyaX1h9jzgrWhhvmBDa6bSq7KHBuSZVkgR8ASc2u4RKJv8My6s63vvSy3FZbWcZ3xZuU",
  "key16": "2NWc1KmJcoxr7iQ9zvxVfr8y7yQiRTY2tB6GLYKh9EPbzi8uSXxhCRAhUxhs5CWpK4UpDekux1Zo6FZ56Kif6soj",
  "key17": "5No2RnuVpvJMVdD7DG5fKarutpZs523oKc8cs2GQi99a8zHzLAQdVuHggR2ACPrHkRCN8ABp2tWq7krMETwwhf18",
  "key18": "2qmrAYGyYGcm26fNVdTvR45tfTcv7pJH88BoDj3BLT1Nz5JVxr2wqNjBwmE5UJrCeLB7BxntgkTMgoKdrgNeapeV",
  "key19": "kfe5qvCb2XQCVrKbD5wtoqJnBpmPJmJQmDXAHAb4L1Hu5Lnq9tV2AYkTzssvgLki4AebwBN5RabziNAh2Q6Cn33",
  "key20": "5QyyMMximpyEDQrkym313ukAnh3TpeYjV8b38YSftQsHKM1Hdtqoh7DwS53b7egi8FdETBRWL1tKoYKED6A5DUxW",
  "key21": "51fxtWvYagdcp1Ugh7cMaaj5FLVDxoT9npW2AKvmvxyaVnjmLvaibWHZEx45rFHv6LUw8T1RzMUQF7oSFdWW1Aay",
  "key22": "3Dp5YweGDPdhdgeRsCCpbcSH5bBw5knprE6rsCi5yzqYAKmuGNnjtPtAH6BK5FQ78nGC9ijq7q6njB8iL2GUzHUQ",
  "key23": "2e8Q23VNUDueaGa8deau3Z9ARn2VqtigprMmFXFCBk4Sd2mjGawvdnZsazw62XpoVPb9DLJU7n62nQYb75yHQd2v",
  "key24": "hJmma3YJUa9Gav1iH4vRBq8gSoPyrhftg5tyaXnfB5HuoMd9SYnijVo6ggcYdQbPdCmuJzqfC3Jtwu2gsRARv3q",
  "key25": "28xdrdHuCs1Xzy6NLXPfU4DPto13rGTFGnpiqMUsbM553zkHvYKRvWKZ88nR7E2Z1go1ZSif65uoWybzZS9rXwg6",
  "key26": "5MnQzXCLuL1WgS5g1uTkFcMgtmbHupb1Fk5U5wBsMQkLksMvFuFRZdQXJpFaUKao7qYZhUWQmo94YoaN1xF25DSL",
  "key27": "AU5XCewsE121tsy4xsbXbNvx9mTiZDZ3sJBt7KNRw7x4NCsFyCfDTGRQqPti3KjpwnGxX5Rq9X5cKyornN7MBAB",
  "key28": "33cnsTrSWQugEwcxccr6nE325WCs3hj21NLqEALo52tdQwpfyAJ5zucHz7z696ub2dEXMBkvQDdQfBTRZruuskME",
  "key29": "RPzBgdxTiTkyEipnTU5CSvbZzdd9tGVWBGGutc8h6Bzxto1hcC4EApv3cuUXNbCEFYoRkaq8wAFgJ41g8QwdURP",
  "key30": "9s5DaPySiTHcgNQnF6cq4R4VrxD1Na5igun1JxvQSa2StpPS73iivA4RuvHPbtFxUYqumRu5LcmU2eUUff4zrAE",
  "key31": "4bnG12sq1PceXGay4JWVqoKTKZdot8pgPPQQ3CkgxjKXRgGZXzDm6jUitFArG7EY2F5N5MCkLCBuHHjKqvZr6vzh",
  "key32": "3VoykQ4KksrtFKkWS9bfNC5XWrkNKkG1LMth3aNEfUayuNvy4ir3UHAHhdFaZ8t3XfEWKZMzUJBTxsxUpFQwfgSY",
  "key33": "5DbrQxe2MaUuq61Vn2HvUEgsjHzXDjY5GfpB31LmhBfSGLoNZ8QUJrk9u59oB5tyYfAUKMriyQ2hgjcDjpi4HsLx",
  "key34": "67n4sT89sCULbNLbjVFfbpV4UCyNUJjQL895CFTzCqBAwYaYtCd2o9t9gMD1rBkmmQWBqcb6aFdt6HBsvfdmKK7F",
  "key35": "3thZeVWddYHNgfMSCzye6VNMewBZ3HvxcnmohegKuauPZiZ2LpRsnBJXQxDuenRWYdaLs477CAVFSp8pms3rTYyu",
  "key36": "JittsgqDqYZMA9fap6ZC3SySw6cmx5hpGDBb14gJtFFbtwAySJwsvK382vfMcxYBiVwJDyM3kHcFWSDogKDJ1y4",
  "key37": "2ta9EQmrL6M3cM33brm8x9vtpjBagqV5Vvwp87DGBmSeMeXnoZNuP1Lh4cG3HahHkjQia8Fv2JjEA9UPoxbHHVw"
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
