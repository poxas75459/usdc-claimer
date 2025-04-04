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
    "2unayajDBVVy67LHipFrcJ1Y5vnekuqi6FJi1j87YVcEDk815pp745P8JBDbuby2N5fkwSCQFFVdVs74qXsoTyMf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jk6eyc19HKhMVnM9SenMpZdXHjYTBzLATuiAodQKHSPrquuRt7tkbk59XZ4KUKpViQxjpB7wQ4ya9yZL1uM9fK4",
  "key1": "5oBLLZ9aGbyFHYAB1TnqG3mJHZpkWXe4611nz63pZ9jGHH5T5A8brXEky2kknQaML35v6u2oQ1ekMuxjhNAj8toJ",
  "key2": "4E1gp9d5QRCKis4SKj7HhrG4quXcYezFmuTjJxyHuS3buFP9QXUdjnBpmXBZ7e2r2mQLY9oWgUc4FyuFB8wovYE2",
  "key3": "42J97dVMRLHVPwabkHcHv5v2S5cZiNeqJnVSmX5znrjPZNwurS2yG2u5ZRDkzF5kQwZPbKRVq8yhAnZYkLw724wC",
  "key4": "AadfPuPrMoMDmDPKn5Cdh7g6NiAgPSM9gau25Fdd9cSB3RxASwUMY8kLosRYvSUBYpFzVB5av8jDpbFUwuURCeQ",
  "key5": "2tpiz3nF9gT6Wng6x6f68fLnHBVKENDKLUfMSwFfKTiFbcDXjvcBoLd6PAwDqLRKuhNoqpMPT1hzVPxRJQ7W2uMM",
  "key6": "KiAG9HSEzWahU71Dov44VN1B9o3GY2qqrkRqwvhC7YZ72rYnVmLhhWkhZk3YbaLAwQhu2qiS9ukbL6mTftYgZt3",
  "key7": "weAD1N1kUTSaoZdQX7Gn3kTsfaYuuJhCzxj5rtb9vRRBSnr2oqXMKznrWi1MHiR7riRbNnRwEfqPeqQqLHng7Su",
  "key8": "58Lc5QTzkaXW5rTmxAXfWp2Gw2m9Rp1ooQquTiQbLDFDyY8pLgNGYLQyR54uLMy5wUnkW5aJcTPoQk7za1bmHzky",
  "key9": "5X2N24BtjWo6J8SUGGf1rxFUJqdSunx55a3Dmt7HecC7MZ49bRfwjPektPTGj9RWAWMxNzqhYvzUvZtoVs2PCTaT",
  "key10": "4y5KPyfposwKhAa8eGiozeUyNsgsCbm577J6rmpcWMgLcQMgq81B9QmNZBmiEAoCVFSxXx2ZyArVg5bSJqe8iqWU",
  "key11": "5CVXk6UMiqGyhSmwZrWXn8nnisKzQYxzsq2zvQYrBce8xCgdNWo3goTCWsRFqqNxkJ94GACtJ8wWs26AKdKHVXSQ",
  "key12": "4aNz9aKXqXoqb1dsFqwdN8SqbSmhzcEcdnZez7JNkVdGRvPehFGFPJX5ChQA7hxkAnrpVe5V7dFrGxP2XzbBKCQ5",
  "key13": "31uDsANqbtNWGk3dGnfLnCTHMzXNnMNWgmrZzUk6SgxU9PHef8DNvnZyDng6xTeSTae3aZhjJM8wHpzhbG2MXqS7",
  "key14": "5fGFis9twsex2nHouEPUsrJScMfsuraWR95KDDopLVW6CSzoHio5oJaQmpTtwhudkBfscQjJQM8aMPnNDxCLEztU",
  "key15": "2bfEMJEcTdiZSUwZtGGPJj3rveCY7phrZ3Xua8vhxG7D2sVUF5uY6L8TAPcLH24VQYZysPAiBDZBCspJcS28kYjb",
  "key16": "3wRns57GWLkXNVbcznYfsh92makxwTfncehm2ELqTbimQVhJEQfA7DtzkuknrGCybhvz1wwnLzazBwzpdRmE8Fjo",
  "key17": "2ukUETwxmz8GytnaM4BY9hzBGn1PcSJ3PUms9DrhGgxvBYEdBNgp6z32SvMT2sAZTNAbKBj6NCUtxkuZG8RmX4s4",
  "key18": "53aLMmD3b7ywHocTQ5wbgAotKPzpGpK49dw8B4W9Bx39jJKCrX23cjqkbvNTqAaabV3sPxhXHDNyD8duoE3VGq8E",
  "key19": "2bQfJrLVxfs6Z81LrcQGe5x9t6KRug8Xz2ZcZ27yZDoHVdkorZ1XqGc52Mi95rMBobtBoBKb1n9Zq7e7TgHVkSf3",
  "key20": "3aiJ9FWpgSMomLErY4GAx2futLvGYuuSw5HjZcPEU2UkX8ANM7Ch1sjDo5GPcZm3eAG4wAX43X2irNsDEXdNLgpi",
  "key21": "4juRAM4YdQ7BEQaRCYzFwXrg8UY57p41MdMnrJwjpT6HjSTp1hM4KNZdsjT4XkHvjywm3cj1scL2NbhhMd2FKgQC",
  "key22": "jxu1TFZH77BQQiKZKxgRHrA88AvtdzsW9HtfMdtMvuQi5nyJbxmakMF3pDqyauUBPbwDFD1EhGb5gJn8SFQaoo2",
  "key23": "3eTek3W9KEsNfLEn5Ts7XKTtYwHPMj6UBj1rifjxTbyqWLHMB7dZgmrK2LTZ3WJn5bQeHT7GZuZBMsYeAqAKKLST",
  "key24": "oyoHeC8ewhHudEhNyr3KSeppZygxGuLWMmNob9S64KrYgCbLBnUTXTRrR7yHFjjbcbMrN7rE9c1FK8AqiHEoUSS",
  "key25": "45aMrcvyx1ybj9SFK26emDZGybdJULuKA2njwLREfH24PdzXyyWaopiez2aUMT2RonhznjzUeQvGeGqadjSHKPdQ",
  "key26": "581KKoK4UTDPULU4omES4vFgdSsPBHjxYi4uyDmHcV1KNtyM5GPEEjDSSTTgetRLCyxoHNdJUTcrxcuxMHuLJRFd",
  "key27": "QeeXkrZAffrgec7nU2SQ4KoGrWVxCeydKJoNgCLsC3uwV8wxJ8gxM6439XSfsksJpaa285VmDLSGZuCoj2z2gjH",
  "key28": "4QRV4i16Hx4TU2oYVfJ2zGVMoSC4CCwfcz6vXSUcXA5bLLqS5QgEznJESfyfJm2pV1U8qbmgorySZycZtWFE7eR5",
  "key29": "4Nys4cPM8MPtGtXjci47HFwhJ4JLr5JuviaGBSPTbfreYcDyLAbCgVj1vb8t2VuZ7n3JF44mm1kqV4ccmhy32f6m",
  "key30": "3ZKXANSGoGuzzHcU1Jk81f4H5VHQ7DQU6J1rbumPFZZWpz94T5RnzpU6AiqMT8stYEDxmBLVHCZ6G68bU2xsv7PC",
  "key31": "3TRXLUxuAYqxKLbZ9p4m3PXXwbhomKdjzaX69HDYie17o8jQ2uEjjHyJyDo8LSRYMrFozJeY96fGNsAHCJgCBA2A",
  "key32": "2RikqmAEFBaxavE2jbfq5a5iSeJasQEAnqgzisMiTGS5uX7TYxxFLVn3H1dNbdx63ygbZKEF2BYy2teji7n6WfDw",
  "key33": "2NaAAqggw1bFmnYyXtzxBLee4Zs8FivUPfLCX6531P3H9Zsd35P17wmBkCtX2XGSg9zXndqm3xd6VtakuChUys1y",
  "key34": "4pRD45FDN6VUJDyKSEzCPskccyJRLwt1Z53QsjGxEibLtjGxj17ZaZdJiBsKULkGiJERwtVoCnLbP2mEX2H1o5M5",
  "key35": "4fih1hLWmqu7gSDgqx6KioDbkRNDTH3PjBhyJV4nWUVujjFRhXa2oMyNaiGgKgHdE2zxvCtKARimKWjzGWpUS8Fe",
  "key36": "4rve5fSnr1dpPjLPWQ685BaULR17SNVnKcgdh9d8t6dqVDuSJ8UTQ1um41FVNZiJWdkKwTYucL2YkmA9hsQdk7s6",
  "key37": "4TRvRcxGBLdA2qZx13cmwniqYMccpERufLsnYiEdLYXhi2i15utbiNaGMHW81jfUQdytWABuEzbydBcQWbZLR33E",
  "key38": "5sB1WCuwExiQEDCoRbuqn2EPwV9DDLroxj7g2rNipbzvLSV9q2hnQhUdaD9a9dUUwtUzY1tATeBrr72cA9WRaAUh",
  "key39": "2gjY276XLCoq27yUmDqHf7QAAgLKSWJs2idBV6vrUCjZhrhTuEAmDxNJ8w52huYGWUPyDVEsYYW12Q69YDN3boW4",
  "key40": "wUuwCLX3G712WChAU1tKreZGT9xaecHpXqPy16DPFmNMyDe5u2MMBDKBWSMkMC4MS8kPLyupRjVcQ6PXRnoacVa",
  "key41": "25K4rmbqtpKmouGUJggdHzBndo1jbRAwDfiQ89H92Gjn8povGbRhUwGZKM2woaMDfSKiZX88YD5CkwVGisg1r4BG",
  "key42": "5drGFkn1ng9yxkn9bm1za4FNN8uf7vSbpyCxAmAaBDZ6Ri42vfAC2mBLPK9CygAkCGu4iWMzXcjhqA7K6zGZcJ6v",
  "key43": "24ov4rEVrarBPCcgaGoZwEkAEifqovk5LWuVhqimhKXCHKkKfNgfQeLyBNxUBoc1TbnnB1GTV98ZPXrRjZiKwSCi",
  "key44": "2i4qYGxMFjwBTp5r6UYggFkxea2Qp73d2y6a3qKhj7B8inHHHRWoScHeTdJUQaQ3bm73HmvRuR1XWv1R6uN7W6PP",
  "key45": "2pYvDec2Fc8y6QpvyNNkER9X1rp63Z3dc1dDSAj9E6nXNvNehdkUncAZcq9BDapgZDKkc44mCZnKhyEGziWd7vss",
  "key46": "2hDoi2icTATyzT6kJvWKyjTpNpFCTwdvv1wUA6TTPgnBnhSEnTzuzf7x4oUWgN4p2X41VF9GNPvm2hishAnhsr3v",
  "key47": "5yoLvDtmxSzWCf4okfJyTyr57iUGAAxC2pt4WQxnR1wgrgSksdMG6S3YvFJUUJejbDg2hWhKX5C6248xMqoeKfxi",
  "key48": "55zQANG8gibum5BwoEc1qoA3Y9FAY7aEoucYLFJ4KqAVa5UtJ33SdkKL94mV4UQJoHsCtGm6Cd6shg2b448F7HyF",
  "key49": "59dvz8nfFiHEeRH1HTpVeKzLSbEniVESJVE5emmTPzhtZPKztUZDL6Krghs4ACHSkwtjWSU1684x1TiF6crF9h5N"
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
