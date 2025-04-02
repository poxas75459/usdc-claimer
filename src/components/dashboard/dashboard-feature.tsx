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
    "61TFQ26aGrVd7GTWacfE5Tb5GVB4YFbeH5ghGH7rp4YhY3Db7UUPL7xcAXpsHHRBM7g6xsHGZ128UJBhMYDuEzm4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yEDepQ2qT9S9LLuqEML4qxTyd9ezejd4N2paNiV3nn5iR8v1r7jaLRGWeJrU1Bupg2gpUKNgJMZaVFy7HY3LpiW",
  "key1": "2f1V9B5GztVDnUvDTKMBiCLrWHbVCQdcwQd5sMpg6t2bXCWiZXaB5Khmq1FM6gHXzXR6rC5iTsEVpuRnWhbC2dND",
  "key2": "4kRoLEjWaosCshiH5AmabUMQMNUDu4PPJ5H9eYfJaxJtrMHpzaa1A6nN9V11RjeeMr6qXPkVpqZQ5ryBF66Jsuec",
  "key3": "5rHmG84oawHdUpWvYbAdxm2CwJt8rXzEryDp1y9yeSGWNxTFXBGQMP15JrTRmgmVFsGj56Xm7wKRihhDwLAoZXDT",
  "key4": "WAKKUADLRQWJtm7S4UFJnojRUqJE9BMpLo4FQt1jpuDcB6ZqaLNmwfYYSNVTnaS9GiJ3REuCXfc1DCe5qWdfKL3",
  "key5": "5egVyHck5peUt5VxTs9vogqCPUtmN91HBqn7rmo5hPn5K1Zbukv2ReNjKq4jRmmzqLFRqAizEKE9nEvTNS3M3w9H",
  "key6": "4qAtZL3XzufB1DRTifr8jTpjXQSqbzNYb8vKVjaDqaUHqxnzKpW7P9xAfQ5i62cLKLzHHgBPbXfhHCtbUJ9mHeYd",
  "key7": "2b6CVdYxZVUs66CSAzM2GPhd3z6S4Bmwewi5kMfHx1VuZur1sYKNDbCkuqiaayj7BkTJU3zeA2cFsp3zW3UpRZLn",
  "key8": "2tz3aQaGFLepE4JTtKTHsF9E8uLEZ9DMGQbcT1uW2ZUUTARv5mEegrxnSdPTRAWRuoTeqhywK4XhiQJr23zadHcK",
  "key9": "2uNrqJP4sKbap2Zwh6J6fE5Qr4moxhJ36oeRJkGhKLtL5GmLTTR1Ph9MdK2L5KoWfZEZ2y8cUa33W4Fm2NRXxXKV",
  "key10": "g5aMhM4gfGXP3Pjbd9iETAjPLQVmZNf4B2V74osF2cPkbKiEn6VjYMypEpuXu4ZagZXW1H1EnKNUt5VpCjtX6M9",
  "key11": "3W3XWditUDeB6uqWRm94HWorfRsFqjgbPdgHgRyr7XA321cDzXvMJRzQQHKbRCdQSUXZE9utLLUNeEdBoY4Pyh7p",
  "key12": "26deuSkw5mZ4aNPjuy1CNPaVzV688nXjHZER41yCqHuffeLfe7RrK38ba4BfFEur2dcLeTRWARrftuaqL3m5esiv",
  "key13": "3Qs1zrbyqJdwWtD52mJEkSjJW4YaJP6khv21ZLTHb6h4cHWncbSuhnKky65cUdfzx3CetM2m96iASvgqegorwLxh",
  "key14": "5VdvTU6yy6RmfBDhzovPDH9AkvWBuHCHZtryXuc6XnF2rXsTfaEYdYkAsGoeebZxCXVD8S7YUpU4A7RaFUdmpzQu",
  "key15": "3VM5pyDC6mQdB4tMJrCxDj4nRFVQvyrK66jinBr9UcodppZLPKPV1SyV7wxn84YetqfWxU1TnfJGbmWcQ5Wp9Jgk",
  "key16": "5CJFwF2HXLhsU36YqnPRtw3Yyp3No2hTBCQN4Pu6UB8uq8QtudPrVReuQNGahWUSQUxwYbVfP9qiLNH6SDCzYKnK",
  "key17": "2eeNTNhHPMArpiuYt45A812R8xNKYSymq5rvKUJSAL3h8xefyq1scWYetKHJhfeHZDqqvnGYNmsE7px99avjsB5A",
  "key18": "2xGQKMu6GZQKciY2i757EXwx9kU2YzT1DmwmDmWLwDfagUFS7f2Mw41k3Hw876t8mBLqUYZ27hp6wYsEQPv9YANL",
  "key19": "4HSrchbJmirJtJYQwryqgWwS9S7xwfRZGA9D7LiYKEqJiWYpC2T3YLn79Ap6VK3gqjwHtPig2rDmHjEiANk4iZJD",
  "key20": "3zDpEhvkaiGkSTjonmgY1ppCquxwbiZnMUNw1KSYxwE3RTBJgBzoC2fgAd9Vb1CapJREm6kJcK74kLzynV9WPmm4",
  "key21": "hnL9jieAkH1SAr75PDKr49FFTHZ8S3FmgHzjX1n7ww2g14iLVR9ScBZCdaP6tP8NJgRUoS6yYnfWAggoQoDYjjf",
  "key22": "5Jv9q2GNVxqL48JJwdjcVLf4p75tnWpfKepjHKhUBie49eA8zgsFncU4PhNzbB7tkw2fcumXCZLPoKTEDrCGVqhi",
  "key23": "hJ1zSuoyZZkgzpvPyiH3Yh2judg6TirU97ka6FHrCSxLLCpsh2NLyDD1rcuBu3CYXtVgqBAn6sbRmq1Yi1xy24g",
  "key24": "26da75yD1tsQgwkaWh9WKhhumzzyd2z969WCh4E4Sc7x73dyGERWggaxah1tjJWXQReJpDLWcKBEZSortEJGDL9A",
  "key25": "5yNFDjiBgTkwvcaNjpSMA9aa7zgF6bjAzGa3re6nWofVeryNLb3u4pxFsHceSJeMmcEw1nFNKRcFEPvnypo44uUf",
  "key26": "2g5PMUobRLndU25nyuySwAMqX6wPN6RxkbtewNdJxkx6uoT1E4wXPsSw5F8zwL3rCWkRXsXaP5tJgs66NXdHAuxF",
  "key27": "2CcU7HfCLW2FGRscTwhXh8e7qJ6HQtfo3QyBrXMuyJTmC5DZorhedLtfnKMWG6ugqHYG9q9QfEsdeKmHkma4MCsE",
  "key28": "61baSZv4bmvDmk18raJRKkfppk1kk6gczsMCsmnV4iDNbjfEWBfuMc38HHeKUPoVjQHxGBjMgdQava7Uco2134s5",
  "key29": "3BypW29WUs6uP3TxbSs93JGP9tkHywu9vSCswpmesQfkrLxYM1t3GpgT6c4AsJsqSZBTQKiaXCGVD66hAv4JFFpe",
  "key30": "GcGkGpc2XSydopQFtko6QSe6wnSzNfwnQ98Qer292hnRf8rTdxehFxVESzA8MpqFtUBb71okdLtUsinMoAixKfm",
  "key31": "2bzE3oPtWrmLeLvhbncYkjh9GZ8Y8HtET4MewgQiHfE9efK3fHnfCN7UzF1umbrgniooih2zvp2qLZNasf8EaDYD",
  "key32": "9SHPQsbBDLDR49KwQS1sKDGrqZjoAogkKtNDbgvFD4vaDiQMj3hZMVwp9zkQT1CTmXDHSTSTaAiZfbry4fUQrVj",
  "key33": "5bkgXio7aAZGqbnX9Yg6jJTsD4fDa1u33QjzMjMWCfcZiaoiGVp882rdD67eQGXNgLCLwHvfeN5fXb7yFCiK2PWP",
  "key34": "61sS9iXJhiyyvhWmimzQVRQq3i6YoeWRZwu3NoeFjmNb5k7L4swTFZbh41Xq8ePyRBDgELH35zquyVDvRhAME4Wm",
  "key35": "5vzyoynUcwvzrWt2nTh2SRFWiUfr19JozDKcCQsgJ1fAcn7DDorFrKLJjgo5HZb5gt5f2wiV7LcDQg15jrA4mRyV",
  "key36": "3EC8pVxbGBrwji4CVjGtBrFo5U5FWNJudDC1f9XiaaDnr9cCPitieLBk2dPSAPJw14PaSoPgHifKet7rmzPWpZJY",
  "key37": "2qyiA9qUCvE2AwPW7dZJzPXvCE66QZGu3hRbv19Uz9UTCD4h32F3MYLFAAFeJGEBcGsmHNzgcWq1FiDFLTqM3Hiy",
  "key38": "hyRfnpnSi4Vx4HskRSh8xBuDh5JcquCcrHuAunL7t8Y5xssWWSZYLkXGdsBKq2G2EibqATGYvsv8pJM6iRok7TL",
  "key39": "3hPRQ55eFv5iqN3meQSrpfGANDEbVnJCcbTfcukh4oA6DB2S7e4iJSjEAupGbKEtinmfty7FLe79QAqexCuE7B13",
  "key40": "67SBPZpKHey7i6GLaPU35xRBwQ1PZFU2R43P7XCGh6r1Ua3gnPEMJHQVRwLFLXqFVRAKaLtcb4sQPfGAMRP8tUvp",
  "key41": "BpEGmNFcPSoSLwkYdr6MahSXAD7Ahcd8n9MRzg75UHcTioHhpW7oDXf39DoJa5uCGVhdm7hXTyKHenudKVbYd5F",
  "key42": "3EVyhTVCptaFegChx7eSU3CnDGsbhhkYVcUiRtB3jpgp1SEDBDauDEenCgjCKnU4abcaXtoAVp4ue8w3vBYp45XU",
  "key43": "4LRTC3p6eftXsiQJXoGJWeJPGiNajZcdJkkgsNUPwGxRQia3Xv2rXq1SC8gSTXfM4AN2VkW832K7XRqVuU7YTkUm",
  "key44": "5kW3krZTA1HXvUHYSJiYqCk2ei8GxzCsyk1NFyWWaEhXTPukKarmp7PwxnQ29Na6ar2kdknSCMrezW24noz1aHK4",
  "key45": "34vc9HRJgh7jFuQkPBkT1dtH7sgHomzC5yiDMqPoeob2DHpBc1CCP4tTPzXn1TgdwKrBzk2GwYVYJwd4dY6JpuAH",
  "key46": "5irMq7vt8B9vWRBdNwE8KnQMsPzdXH6445iK2zzkbCBARTwNFZ6eCX34x8wHsbWyCe4tfJfY1cTwf2HuLEKeZb4R",
  "key47": "3i6znMjbhbfRoyKV4ukKyhAcGwN8KeLDUkmvKhNLsA8cLxDvHd9Nnpj8GsomHPHAGeuiWNaeETeerqsbfBevZwVx",
  "key48": "4mUJQgkk8poqNNevBQoVAgZFi7WsNf1nhjzTuDMDyzhCXn444kbKPLUz8jeEkypi5vnEFoQ3pEyezjEZrrmyTLen"
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
