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
    "4AgLApcsbavUcw3nTe3s5WRw387ok9TwZwhEDDKDYVdQc8ifPLw464ZHaLuzmsjTbnyKKatkLoVbCrvFaFe94Pmz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k6ZdZR9aoxh4sJpk9ogu8qUSJF4pLJiTwXvjBoVwxaxs5MMo9WB7o9Bdukx6W2koGCYAntsoWKAWkYXn4kpMC8P",
  "key1": "3Co8fwkX6pNS5JaoVzPDiZfX2ZAyzxvRdNrKdcNKWmend2qo1Eno3H89pyFbfJPFT46tQ9aY5rAkg1s4tvW6AZUB",
  "key2": "28RW9PAnpNqiZxDJBNnJ1H7RUg8Bo5v2eo9wQakEhRwxJ4TLqjHSGaqpYcGHnz4FuVhaBEaU9YciMwd7gb9GvGaH",
  "key3": "3MuB23f91unzM7b5dEerQar9JunQyRRwaSxS4EqxXTb7qUyadMjUEvKCPuAJz74Q6X9N3jQzCbeEjRWMpcn3VCaf",
  "key4": "3V3CYxCEes5aXmAWfRu12DVNgBg88pUajPP1w1XgWirhuPwCLnfZYB5KMkprRmgbJYjF987uds3uApgZvdji3K8H",
  "key5": "D4NhusWanN7wCoMANq3CD3KomBuew2cAFeiCBkCv12jndEQCdUm75ZK71s7UF1Uq7FxLaS3VRBLaR3o5i7FboK8",
  "key6": "4LTtMcwQoDj3XT6kfHX5meo1end7gcmHPgrn7YVptAUgjfcvfKwKVeBb5MU74CcGozu2p8VFt4dFBUdvAfkzgNnj",
  "key7": "4TUQLZfJEsGBX7Es3XsNFFP5BdQDcsAKrT4vL8iStCdWSr1pmnyC5nNWA1gasuUbv8rDAzzvpeGsCVnfVDeHGczg",
  "key8": "2UjnYkt4M7zJN19CXP4uKKAPsmUHkvhQbr5juF1zcvwwx23Jo3CiMDN52Zd3RZyo6xg35JjvQkDLXLVjFCuPjbet",
  "key9": "5pu3WAs5VYky9BDGnX6NDpuMVdJ6XxboKes1z6soPByM56EQUKuAuuRSSMjQ45YVXKqL8mF753rJW3CCyzNqKZdz",
  "key10": "g3zcYTp8x5RVrw68Qo8r3PMJ8juLYAU8bikMpDhw5XcModUhWrJKKyywPb3bmNpnwFxrtjrvkPVaun8NWzAPQnK",
  "key11": "3UPeYGoERj9HiN5pgMgNdfy2bEZk8aNWEqXnNRvdF6EodxZDKdsnaLY5Cimiu2PU5h7LnjHuuoyouYfPhx979q8x",
  "key12": "3qetvUA6jMv7RCtBidYAqhYRsXtp2ujcTm6rYnrUGhJKEppELW4iygkf4XcBYEmbkqHjRe1tgwsvEoGS1WqH5yDz",
  "key13": "3PpC7xtSQSjJQTveyWogTHAWPrAJpQaDdBd8EEhW8QpT7pzRKKyHfLsAQSKbDijqi7e3tcmUCyr9Z5pDNGtq1c83",
  "key14": "3EzA53ayuU4govdfwjC1opUFjAMaFCwoZHFLinHnz6cXZ361T9DrybY4C9skJAU1u61apmEGhMf4847fowZX6SJP",
  "key15": "2J631Gjfi3RbBGo6SD2GZqc44aabLtmNc7yxjiB15azuFbqQjqvc5Jr86jbaqemuwiMGxCJ7PU6rMd2EGvxb8Gg3",
  "key16": "38bPdds3FiessX3ttw9TgnjhnSmYVagz4EybA4XE6AM6D8jjeU6C12wcDU5NLethwsvUwppb6G6zF9L8aALk15nr",
  "key17": "3ZTUGH3XY3SA47A46967CtpCitAK33a8nbJHoQjwdZQDiYJBhaGiyA819KS2JgGbH7CzziGALMbDkLbxctmMGyT2",
  "key18": "4pxXU58fHx8HnUgWjbsAwsp31RFujmEMfnTTUYUAjQe4iAtqfRa3VN7HW2K2tHJbCQNXTYro1nety4xf8Y4Kiquw",
  "key19": "p6nuEDGsPMJoDMjxFrMFXJDeU1pHnYeXZrPWZY46aLw3YnnUjD8osCnfqvfvNv9sbEkrQzjeRqZ68fT88obwQYo",
  "key20": "5XMp6WpsJiGov8q38WPjkfEduVTbAh4qwqHXyYvRFg5386rh6oWaN2pE7te7AKWJiEeu1cKt8LbBBnYtXcBQLh7s",
  "key21": "3p2bpmnXsrWrx84XbbbahpQc1qoBRnz2ZjxEqrdJ9HLTBEqVYeQr33u3MskhredNuH2xgXRgMwJAG8BYYBnx6FYw",
  "key22": "4JPdKUZVBZMonmLXUDcaMKULJYhCLBHsvjQdRMTNJVneU7opwGuKLFfyNbh4x3QWcuWM5xdc8mVgJkJcRuyDebGH",
  "key23": "5dN6GHrzgJnxJpcAQnCWz9hXozsAvzsyvbi7SxhR7PVbCr7AiFdaMfMTrUhNEa8M5eZTmuncaaXWC31Jc8DDf2yq",
  "key24": "322rBRjbZPzmntgdvYs2ts2X2fjEM1477m79obcXmEQgM3XHMCrsHWvEmoyfaCTfBmei2PSACUJeVBKS3C2A1H4C",
  "key25": "2QcLGCRipboRqEwFBgytUecAQr1JJYCt5N5XKURjeaCsEWgvjzE9kGBGPYRAQYKBA3KEP9omXZ1sAPRqtCQ9sYMx",
  "key26": "VhQ5BmBQv47gZkAB6rCPZ9ZZZMycAsHi1DmRQ1HePmY4A9VcWQyufFSP1a3PJaNc5BZq5ySkeJCGYXFnB93zZsP",
  "key27": "5XZ83xStYkqfrXHES5iXexrUHnPTm4VLnGSX3vxj8MVNyY3PssEKX2YRqR8w2v9BmkYUHBP8F2EiVoFopTnwHGF2",
  "key28": "62nyn9YrPffTbVMk4JfwefZXudwzpoWTSnnSgUiyRqP2TBwoHi2UiXahQ3WzTQgnVtzJbCiCLMkQtry9BHb7XR4S",
  "key29": "3zZZGo5YMYBKcWeztwijeRYZj6hTmAZWQzdbAYp5RaAXKmtAMNT3mW1QTBZkCVtrfLVV1YBxGS3uovZvQkorqghz",
  "key30": "4QNdivyT385zXyAyrcjeMieJ8JKD32BdkD6kAcB93v67YXETkLpxLqevJG3qhPqkXzDYwygsTEbh6E8yUztGiYFS",
  "key31": "5AC5zFQCr6ZBACPxCoZ5spqs9xyNg67K3CWT8oc8JxK92n2LiEZMXCoGTASJ2ypC2mCJk3eQZGyQdaqisjHtiivf",
  "key32": "5DK1eEj2hBX7TJY3rwdQbFZZK1DQsz14hYTMgyLaBo2dBYpAet2e6YMH7s4H7pa2QgZcA4nr65zju18z9r786UwF",
  "key33": "WMVk63GNd2t9Ej9h6jmfZXKyFHAhRnstY9UGhkHanryXET3YyJSmTNtFPrhaqXR5sfGdETHyeHP868DdVimB1Mn",
  "key34": "2mc3rqDHTLWsn7jPJokoT1dfVGohoFxJNSv8TBHG7todfJuGjbniBpXhtpCNpP2Spd1Hw7gky3wEnSwWtrYPiRQo",
  "key35": "2XFhJSQ3Ujs3emDjFgdAWdU4UXjTuwX1YkNpvC2Zkq6G1Mrrfthvkj5nFm98Hz4Cgjzx3wG5AuBKQPtb3qUnfTYw",
  "key36": "2kYY9rYqeaDkgmLMebDjWETPWhkVSFFNwCELo4vDYKFhLVe44M76hj6ZWxMevKrbbohBZGtge9Ykou3SHqYGUz2C",
  "key37": "4rHwNqiyB8NjjFtmHVJwGd3GXAUbornNK2eG19K6uVG5khx3QT9Mb69nKXJAa4fDDPrTqYH4MPrpVD2KQaYZRnuk",
  "key38": "3SEYziajosKn8HAu44iFwMdRZpVzxAdXKmdSEmFZrju1rpDUe2p3NTmFE9TaKC655GvAM7A4GsS6hFocyhMgkyPw",
  "key39": "4VU5ns4FSFgxe9QSfPDQTS2kRRMUfaQ15xMR6WxXmfRYJUBbFCykapU25fkhCyekaNq9EdwcBgMVnn2a4kWmmuir",
  "key40": "5p31PUYoeAzArx8Do5YzGyQa8A5aK1Y3bx65pMh7LzdzaWGXP6p6PMvv8mVzeZ3CpiMFxttJ2fhu73XNkjp1SbEE",
  "key41": "5vkV1k88xPhfXRfVS9oPQkr71CStoTa4GAd3Z2FnpHzuPsKqGEysTQk4khHowyFW2nxBqxnbgJQYQBGPZEdiV5jJ"
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
