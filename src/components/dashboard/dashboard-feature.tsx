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
    "2VYSh5f8ojBmAkdBcvENh9SJ55Ur4DrdEMxMjCTk8PfoVfZr5Mpfes2GQG4wCxdNegfKc6dJ567anUaT9nyTCyiR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XD94b5SkEyMDDv2my24vxrrGnKZVEj5mEUUWCBUmRzdaWUAj6KVBszcXJSSU1fB2Hdr1WFDGwGYpdGXyQ8aY5pc",
  "key1": "4SjsJ5MXzXkfWN4PqCzn3TvLhorJGUMEVazUAPxWQKxtmVsLJZuKu9ebLPznQpFoZiRtJn8ES4gFTj3pptrSGY7h",
  "key2": "4MrNcVE3ij5sAQFb2UgdnPdSkk3jS1DBWAvQVjqtkiGrSAN5aKbZ9ASzXHeD6VfdA78KzXUuNMGE3exVsNeZq8bx",
  "key3": "xVgoQwNFX8ZgW9cDZRSHmYmhNXAfH8HDKb6z27R7aXBY33qcEDZ36So8tGUAG5FMNcuwix6KRzdyGNQeLxfy8vv",
  "key4": "3aBC9YagjhTEt1HNYSr83Qi5hCEEDZUKt6tx3inQCQ1zrVvbHA4SwfMaRHWTJQ8SpzS8TpPM5rL3Lqk6Cy7PTDiA",
  "key5": "3WEJTvqjbWzeFbDZh82LS3SzcKW4jpr2VJgtCmoLxx9W7fRnFubPCXX8rQpgBdYFw5s5UTHuEjGxBt4SmMMu66JP",
  "key6": "2ReuY2buXxt4Lgv62gtQUKKMhEr44eofik228vNvTzB8j7FP5wQm7HHrnpbFepsUsVedJfXALBSbLUP4bt6Xoh6e",
  "key7": "2XcCQhAvr2kSxXoo3YDRYVUYq1N5FbKLuUpahcfkQdSnERFJnxsebttvExCpabqengUBbJg2kFxyoi3b5YeNkpLL",
  "key8": "4bHhUqtSGhtqNdP6hV81e1nPt5xniAWSWHP8JtTEBVicAXTkKkbWagtJTmaeLDjtJBmHRGRTpjwCoZg5qir6dM2h",
  "key9": "7cNLFRT1781MCAxnEGj3aHxfKg6fsYruFGLvPgFbEg5FM54yHx46JMvX4UnJpBEYHNBJKEJ643xss9wnnAcT86v",
  "key10": "3Hb6U74wK9gB8s4cnhSkd3GNETVJQzfUJGNuE6ZXefeKp3V3fzogj2e4szrrJ4kebToYVYsDe4H2ZUhRHtX9XHyz",
  "key11": "3inYy1jozKaXtJqnAqo3WLEQytkDpBjdvSQc8gRDLWj76yx9PYg8NGbrJApvvaAfTJS4HFgkYKj7w39n77kKkpFi",
  "key12": "4yuSDnFHQoK5jjvCsP3vJ6z2R5B8Wvp2NcjFy4RQjuw5MxGPQoVUzwZTAADKq3jc1UYUFcA98GeHCQwsNCZPi2Wi",
  "key13": "5GGirEs5dUkcJcd9LURUBwRWfti7RtmQvfFaKVeZtmz7PELtz5JKUGrvTrdWgNppm3oKkYXswsyFWeb4bTf4sCyC",
  "key14": "474o4xJtXja2djBKeJuZkR8Yh65fQ8GSsiKshH5qXvJ9SEk7fnYdfb87DUAW9vjNzBbe5HE5xKdmuiD9288rdo2A",
  "key15": "qUtXebW4a4AEU9LRBzXiBwKdXTW6UXUPF6zozSXxtWCJqNFoV5nqZcpprk9xryX5L4m3HeofexKaU64B2EHvGZu",
  "key16": "55ypojDSsKv1S87YV4atDk8BdkT53DxK2Jvg15oiKKLtsGosq9KgjoDyVizxeurfsR2oWEjCLwW5696MKsFFjrc",
  "key17": "4EpyuUh8nAGadw5vpEZnyDyGWzh43aiacictejUqyLvfW6Kw4YAUVcB1jD3ccCwaSqAUaVm8QgURFTX75j75SnbE",
  "key18": "39YaUm57F8PnVL4oE9YdkxXkwAGmm55iocVnFe3kA5MyLhXohygg7bduhuBQRB2TfS6qjcJHpf3ojuhfoSxxecCx",
  "key19": "485r48nXBPoYL1M1NrWZJVeySU3RWDaJgvv5tEpoQR5zciuVvVcrGCaFRiuB6mYqWu7hJG8M1B7Fu4bgECCmCUCf",
  "key20": "47iyMzPsYeEH7vK4v2TZsZJbDsm9SP7XTMhFyixZy67mFuFjHRonaNrURC8JVV7NDFvPUx4fGNURdkDHeM2adHC3",
  "key21": "5NCwxdnYHbqvpmpGzsz1VzPHSHVps46LPkUAbKtP4FwC3C2LwMSxr13o4de5w3dU3sEqujh1VaZt9rxy6XpPDkue",
  "key22": "2o7ne8kzwk2Z5QJxmtL26opCd8sUJk2Ltitje9ctk9Jxff8SMBmzkumgLGijr6b59nwQ7bghmXT5pzufkGgDJGtc",
  "key23": "5RbYUmsHyvyzYDLzLUmNun5gyedMqVR4quLqgZ8Xd6RQMQ2JcDfhZdvVj6EboKtWdY5MBsyDE2uhfH14GeEzxchU",
  "key24": "2v7dua9MpYZykF39kxuChyVLrosVrWDUhXQ3w8G4QKLBXVoY1sdt2T5u81zNFWSvBXr3VgvXAsBLgKx9hjeNvWZm",
  "key25": "ks3PpR5J1gqs2LJ3VikLtgxNgS4vWW2gu3w7Fn9JPiH8xK4mn9jjGZ7z8P77uQYEGr5AcCzLAhPC8o1PJRGrLaH",
  "key26": "2WHTAVrPpcQ7gm6VMgLewFmYAgXs8Ezgm9asg5x7HqhUnbLVhDjWaSoxUD8yGP2bTuNoEJHmE2rJftCZtQwAGYBg",
  "key27": "2JybA6pzxv5r3L8DeqWbHB9yhVm9aPTXF6airPwqVBfVKkj27eAqitFpK9Sj1kEWeQuYvRMZQpM6ehR6g9Gwb9nR",
  "key28": "kZyGr3xAPYVFGU1dNb68z6eg573dhRdwC5EHdELjqpVKhruUmzr185dpBZ8aXZbLJ1vXRoonysopRJLudRn2kuv",
  "key29": "5zzGaHQH8xGo9o6zcooxnjDCFUxUnApcsTUbzv3LRKWxdWXtR6VPTzmSLnFMNt9QZzHYJbNY5J2mzUSFb3CxU8Mc",
  "key30": "3KnRu8mHMkV6qMFTaLAaDxnzEKsNxM63Vpr3VqtxAe2pyzKjUq7Kh7NnRV9hAco3PciQiJpgGudB1E76p62Q9aoP",
  "key31": "8UwJvULqtUhUu5WedK5gVycMCHfGREy3eN6ZSap6oYSm2VbowoiDMotwbABdQ8mnBQ9L3e3jE8PiSWPW1JKUnf6",
  "key32": "4wrHwFZeS5stpAPQciFtgKy6Qc4kfU1Vz4yaGRo6nRfQfaReHehXji2VsTPzuJUuiQhRob4XNUky8o3kW3xo1M7w",
  "key33": "35VT2b7uBo9nVJxK2vQJh5meuVkcuU36dDY2K1sAEzKfdASfPQ33JKuXUkz6D2kwbxW2CYhC3yvo1g5UX1gcBhUs",
  "key34": "2r5XK5csxJSPPCDtYnDiYSXGtnYYngfNYS85tcEEZfq7V8XkMqg1VHNsbJPCAfidGJH48ZTe3X2PXTjPKcNXB9X7",
  "key35": "3kFqXCoFgPU4c3fjAYpSLxzoEFenX4HUkcsbgBQj8V2xnqa9A1oDCuW7RY7YNJydiRv9nopLz94Ua77N4HP11QDE",
  "key36": "2Lgq81kDJnG7fDm9kLbdF98kohPWTXLXKxmn6RgowVuFdXLHcRfeLhZpjGGVVfd5nDGzDVanenDpSTnY3jRJDn7B",
  "key37": "HVVR3WfvZ5FLwjxYbLiuWGqEPqmm9zAci7uYjehKtqkAzJnqcbB1yUeHhpM87iSarqXA3TjFp3ZpN8edS94nd1B",
  "key38": "5oy9E7NmPrnjehkUyCAtxiUkPXCZSd9rL7gpdDzUdNfWMApQwunK2vMHkcXLo69A29T22C57tdmMaFXiaX9GxGLW",
  "key39": "8FrALBPrCob9TVbY4BdBv9CiGKDQ2t7DnZ1D3yumB4Tf3RqLWamvUbSbSZa9fAkuMW955i7Kyv7zgiDZvKaU5kF",
  "key40": "4z9nYeeRforWF1j7VnuZu5D5tBeHyAAkkTHzEeT5p6hMyViu2guuD8a8rhzKVnw12Fpsi1zMNhhuszdJxQgcdHHt",
  "key41": "W5TPfKKijmPiNPzaTgwJgNHUCCngyuadBHPUKz4tv4k9yZ1FzfjMxcCxgbuW4BQcMTAvT3rZv6ebrtFuibtNm9t",
  "key42": "8hDCnm9BGCFevshd5aynxD1W5Zud2Gp3Pv7qXg2DQyPw1BLMYN8528s1sxBGvhm2nJYVV7SZk1pehej7VuQ4snw",
  "key43": "KDzLYZTmh64Fc3B8oCktMubGyQBq1MsGzLRqGi3JouSwFFMfJx4WQHcY8MVuVSSMg1V7pnudsQYGVn3BQnZspPW",
  "key44": "3YjKLVobVUJFk6kLpF9ZKvZjk4EcXeiw4g4E5aBjK6xnYAEaT4F3mSz6SPXAspQn91MfgBdY9GUkiP41dbUwksGE",
  "key45": "vjQqfPLd5BVRBzPBeiXsMmGXTC32QScjdZznKxpggUTLcu9Nh5R4iwbuimnGte3UuqiAAsjEcwcLgZTxePamFyJ",
  "key46": "2onDTogGD3m9ACrxpERA1ugCuFnrwB12LTv9v2AzVRc3Rp52YDMzLLwScMSP2CqJbLXoUj4ur2ddyL4zoLhSbbpu",
  "key47": "3fefeNnh2QJXtD4AzHsBeuejjbGiWDZqjCSJiHN1QfKCjsAmRo7SNFcH9rEBFkt2rFdT62NFQqynMXcXpfjFuhxv",
  "key48": "51MY6i7J61d2WaKGyzZoLAeWfmy8BGeX5DTHHfriHmLGusM1M7LzuMWPBZLqVjjXJB2rieyWLk1jerk22jstQi92",
  "key49": "5rjoFwW3RxpMc3Z5sNmgyxKk2YZKGmLSVSK2vvk11VANos9BvuLXrX9TGe1VHiwqK7JMjqQGyy5y1iMDMRd51xjB"
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
