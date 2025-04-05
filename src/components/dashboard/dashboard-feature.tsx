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
    "3JBq4qNiNhjf1To5HnsXAE9J1DqiH3KvHDH3mgJEXJDeDKBwcoFMBr7duZ7vdGZHA67AsvmNkrRpwiMpczGVmwWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g5xMWJgHUPCDjj8FDbhL5eh4EvoZC4KFc11q878x6hJXppTzbKHpdJ9HHVbSWFqXeUrSuPYeBiXZb6j8v9NjS58",
  "key1": "4MS5fLDTgu2ByPXhNdxF9Bk7RTMVs8SqZEtU9c5bpkipixgAPe4nPSD6hzZDoHQvmyATPooRZ5HSbCmaC13WdRVL",
  "key2": "3wJXx6s1zXicUCJJbVdx5jqoJdXG1zF8rN83VHgSwB7iGBNKXvcJ6BqxniXyQbMoRoAMkLh9kzKSVHhg3Wu5mV3M",
  "key3": "DJgG2tCz6bMS3foKAufECPsHhumL8BAK4H8n5TteyodjYwBFFKc58sKAAoZnqa2obdPKo4m5Q8ESWCRgKbuKkCa",
  "key4": "2GH3Dq7vzHomCoHNJq5HghXX1vRPqCT8NqiJpCSCc9VheMg7qErgNpVtdUDVhkCFkWHwGtA2a5tX1bm32AZXMeUm",
  "key5": "22oxskCvyKpLygifAhbXZeSZ53RfLiR9GmpHJ5f6ASAoyp5GjXUmmkjGHdtx3hbX9gTx8WBgNPpEpqHEmE6kmS1x",
  "key6": "6caTNmVFjPfsNynKFNu1Y328KjAWp8TzJEK8ZG1vUZvmVJ6KafSeGWgUhma82EctAhCuNP2nypN8cDdouhtY2Ew",
  "key7": "2UyhvyUHnWVwhURezKKZSPDjNm6t7JUg35vQCV3ATPTYS63xQhPMMW93JhaFca44tbabzG6givJwxNgnZRReoTWp",
  "key8": "2VnnLSAE6EskqqpqfadUa1wxLctXH9AfrRZyiaHowNtYoFMKjozQQV3U9PQtxrSFjtuyzpQEwaUJtsYi4asE3GSM",
  "key9": "4AiSPEnTk2zuW5ZSnT2JeTkSZkBFx1J7KLxcy2CX5HRhw5BvcK7QxepUwdDfDP2pvDzRxbEzNWoBPL3DrTjqGeZn",
  "key10": "35GCzKPZHMmBaMRLVvRG5XkhHTbZVr1Gnypyqi9UHKpW4uoMde3ymrvQJ8SFyR4ZSTSvVWrvZbDypCHQ8gQS75VB",
  "key11": "51tHKh9cKGHPUNy9AQ8ZPewoqVUHep7C36UhUftcq6fXQBUmNS2kNjUMZH3SWfCCBHFsWaamBhCBBhPFsb262RPD",
  "key12": "3h2xN1kk7Ep2nYsqPu9FWutxcyN5ZchdPuHCxrn8LyRhp8Qmf4MHFSDtY6xYMwJoUDqtG8BmwZhBB827eTvcCbUY",
  "key13": "4R3aa36fJQp61qysJJuCDA6fjYEvft1CbSbEk5jDRJJCAqF2gFJFj5NV4SVDfnT7WqnEUYyh5Byc4J2kBRUabYLd",
  "key14": "5WsYupS8pL9Evx4DptKCsmxrXdCYoQHz6WjuJWwhTGPoCWY3zAYafTNGRozhMoL9MGYMQEWbM5ATbnbYgLpQpEmC",
  "key15": "QqZUkk51LhYX4eRK3jsL5TJe1f3MePGHZj1gpAyJ7zbZFXykBMLM4PG1x1Z9kyoVGsAtDotb21oefHFnk9HRFLk",
  "key16": "5FzcSirXsXQWjVuLg8e8wPgG82UMdZFvoFofuvUDxe7qTowYvDhutkAKqwyjVJZPgPBybczSq4sggdP6BxEdyZDW",
  "key17": "4hXibPQToALihrqiShRSjPmTXiNtmWKbFgfQwxwpE9zvLEt63uKNmC6T3czc96s5QAK63JmZUV1BHD1ouaHakSFB",
  "key18": "5YBwHjnEtbcTPQrHgAsEVgSmi59bKJK8RUX4wfZ7dNnB2czdqq9MYE1iaYndFAvr9ooEkXoBhZ1z56BDA3SfEq7Z",
  "key19": "5jGfLJqp1wDcBZh19kdrnKEgVst6iJ1yrhNogzC9K7cHcDGKtWBVpxGwEDt5PvPeZgejrkHb8Jb1xUzxF6fWVVgx",
  "key20": "2nLzpt8kUwT3kFeJ5aDympVCeXLhVZwbyQywAtYWo6BoKavphQ64MMpPDCizrcjB1sadYEpABHun7VGC5JjEEYeJ",
  "key21": "2snVozfamE8cEqSFoXJ89gzZJKQDUznVmJ6edXvMMrMx3hpsRxuoUkc2wjADqrYeXiGi76HLWTWiYTd4nY8SZeva",
  "key22": "4WFRcQePGn713dh3kHkTs5qN3jgrJaxW52EMzDYRWD5eaJnKmhaiqngpPsKbJeudKBthCwhjFuTZuomjSeKq2RpE",
  "key23": "2kW92HYDzWgYRvmJSiLmn1VKxydxvLPh31aEND1QYNVuXKqioE6aSo5on3XRKf9ZA9wFrXr1UL5howKq48Xu6mHj",
  "key24": "3dtNMQeUeHfPXH6MjUCwcnuNjb7PYcYAuzfnPfHTXdwNUpBuy1mw3kQwVvhfUWVYWdqowduG8dSEHxPfj7NNNrtC",
  "key25": "b3GcMFG9homDvDaom7MPTBjdf2JxM3je6HjVZZuPaYwh66gsX271T59J65vCEASrc1oQuxcSUXCnP7mNnomSE2q",
  "key26": "31vPNTBwkHWTa28VJ7siM1Lx2e6Pc2BLK6BvZGodLXLNRgZbKzLPxaFtVyq8LZPTZYWvyuqqdGVtjgNgMcD2sp5Y",
  "key27": "3ryQwax2cThWz2GpeHD6oynEeUZBDYULU1VkN5MiRzuHF4EFWXijCMiNby4YcpVRfrtPioVsVYQipP3hGHD39GCt",
  "key28": "5suxodEhEu5ew2fV2zCF95zWDxgZCXZg8TTQxYLtMNcqXKriZs2p41iBVQ6pfdpk1YQ17VMemAJJMbo5rcBZva8N",
  "key29": "64YLhr7ippUcyVVz1ey7819DFtUeWneuTzExxheiiVHmwKdLfMzbMdMGJUMKRFaB8tCsGDKNiRHzVhwqa9eHjeNA",
  "key30": "2wrKsPdj2KqAVLET96wysUkxfQPuNw5GAkjJYXnDKJuaQMcmRSyfdAMVw4mkyYYrMfCiJaZPqp6NiKiKP7JnPDbJ",
  "key31": "4JjxxTBDjiFTvy2MZ8RuKxxNwCAxETsoQLBku2wEGgrjS1rFJi3WRhk2GspS6k6EbVaXGKFN49tsVC2QaZbPHiaP",
  "key32": "56RAygg9qeZoPLL11PYQq9zK9uSbYYKjyaXAR4jYvxFfHrD6dP13CE3STnEh56jy9bUoanJq9hgxoGZ1vHBXS5zd",
  "key33": "d7y1Yip7KJ8AcyVXjETmPQhkjKXrh2jrYDQMSnrCcX43HmJnsnazKRuehi66p3mr6NzJE5hGsyvafjUXD7SVq11",
  "key34": "3tnpoRee5JF8gUFozpdF1b3W5AzNA7wYJGQCo5JDjmw7rKRa4NzujHcd9wodfteBHnnaiKu6DZkisQJZ1xPrbPxW",
  "key35": "57G6GjAJzG7zDGsgrZGVcXJtdZrPNqiXaTNWcNv68kj8tSm421u4WJvEBk2nKq8gHfSNSbJiRT1AjC9DzMTr7XsD",
  "key36": "3XLnyFYsde1TGa7dcG8RiW6dKV8dNX9vJmUypKMzdqo4ttpC5PL74esFUPgJrMbnv2knBVwuQ8bwnz7RBUd8ukT4",
  "key37": "47VdeXJLfKaDGoVxGQwZgPRWVMNcbwh5y5UVRUMkhTw6R5BymSHsdxFtvvqduotRYVNCvKjDpEboH8qQtp7dkpji",
  "key38": "3MSFqsvpkyF8DPq1BTSQSD94XvogTQAe64BnRBvfjbRMC9Q1UkM7qJXpY8gLJXWSpVE9pF4XHk8bxpK3kN6nBuQS",
  "key39": "4wJyowUSCNS7VAgxjEsnYy1MRQi4A9hpPHNLyWyM7KhKAxE34U5e1Vp6YSw7FUwDZWe81t8GJrrrxkuUdZjY272J",
  "key40": "3p5oJ1KF3NiLLBibYXREzLQTDnkBh7FRmLUN6hXe2JdoiRKjBsU8NrBXKDWoLCSda87Jx7XvvEpQQR6sdHeSzif",
  "key41": "66qz8o2HdvZ8QJKFcMtUm1XhxrRygKFuS4825k8VBXL8XUv3ZVeE7Uk9WnEG8FtzxGKbdZTqTDNnReyTkfASPCmB",
  "key42": "2VgP2CYXadsBK7wcVwKPRQ6PLHHbNaJosj4AMVCiALG4d919P5ryLVLbA8TRcgnhRr2TsJDkcGRqREnXY796gNBR",
  "key43": "4AgrMTEySZXNeEWqv7fxfv4vNQfqoiuFJAEHsDtvtmKDUdS7HMscVmGgoh2LC4pMUCPVB7u4GKNj35bJ6oRDWAjj",
  "key44": "kAYo3SKPN1ieR6JsK2m8zutqrMErWkCwdRiCeuhFCvqMrXJrBiiEf6DqaNNdY3EzfcbmptjdpS4mPPFgAfeBARt",
  "key45": "518h62yK6E6QgrmDZspibJRnqhMNqqvQb1ifKYwwdKtYAXoCMxizbMK1mdvwuY4RgrpQZasR5wzCugsvJygKj1nG",
  "key46": "kpnzBu6W6rZantnLkqB1MJQRqzw6pF3EdFAi9nNwWWe1uSSyGuzyFtTpjuEbGHM53QgK2pxkkC5vbcR3thXSPAk"
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
