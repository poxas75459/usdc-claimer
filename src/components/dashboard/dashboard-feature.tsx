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
    "4u4rFPXDFeBbNoYgUZFmqg2AhtfWYthA4QJCeuTjVwRudANzVvXn5ZdFBdKQUfpFvawLgjqjtAErXNB9E6RrWtqH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47yYAyoawSxZPxJQm9YVLh7p9cG81zCi3wJij4KHpsNc3djdioWUmcGQWb4Vru4Z56gDhYxouugGxFRD5ExRfFrZ",
  "key1": "5VYfRRNxaZqM2xYLkSo4KfPuUgdr49k91TJfD9Zs9SSY39NTeD1kXD8MTkGmub3RXzy1MTymZw4BtDAQTCLLyRyZ",
  "key2": "2Q3Vao73BqftmgHYuHctHCeP7nBvc4W4kJKSyiRo53JqYTRkDN1f1SGSaQ8L6ri1yjpHhgUYhomofpprnn9GJt7N",
  "key3": "4NU2YF1nKXQaGorzQNER6ri5DBHx4mQxEQMQA4Hnbzkm7QudmfD7x1CmdXCyAeoH1oyY8MVt4WE4URfo9S14WcKw",
  "key4": "27abBesDAEfTLUeGgg7a5QQcVCmH5APS8Nm878yS81wx1MRYbjm9pihyyv79bREGtaL9NvdB758JTNyYYfMWGdcK",
  "key5": "YkQJNRsYVgSYUNbMLqNhUvRDWMnCH1tE7ASv6hBZGCGxBUJNLyE7gae4HFnr3JdtDgru4XQc3yP1BkqBX7Wx5Pt",
  "key6": "4ZNa9umsDLTP1W9ex5majNko2aWWcVPoaWYiJ3H9sFjuJ1Hs4yaSNqYHEYKesAK866eeMfrwXctczgAN82hMYhbB",
  "key7": "2sEa9nXX5kUpLPrvqDay3nZ8CjMbTwMx6sUt1J7SxtxxsqwNbhehgFj16B3FuKLgvhBvgynMdGwBku8hkZmuZN9E",
  "key8": "2kKbRLYFSVrNoz5w5Kgo51ver5MUUm5g1Z3wEWvBm8N4hS5kBKga8F3aNNdwcThn672DSitVp4urzRSvCg6YcrPV",
  "key9": "4ksFkJMjBEoQzEPMVTvjK9GrrC6YGo1qML7jfL5wPQvMW9sW2JJpWK8gVVwg98xm3skeu2Pj2PSYxFjgqxHZNRsp",
  "key10": "jKfPLK5x9A7H75o7HTDHoQzzkVKivgQBN1e5UoGLiyEeZRcp9o3PTRVnTPGEF5BfAVT5mkE5NKPNQkrBnBXUUvg",
  "key11": "4KTokqYsoG7q5x58fktqErWnGHV7VnZktxaQ9rygnNusQfPGEHGfGgjfNETTyRrjg6Y35qaoV71h66dc8XeRQ8fE",
  "key12": "3wJPodwLibyk6hXwssQckjQWGHn42gapW2R7eMfEpsufsmdeDjoCTJH7FxN9qzMjrQy2jatHhooLnDtg6a1tW6ED",
  "key13": "4LqE3bkMCmCXr5tn769GEuFpWEKrukrjkuy3UyDTRTcovWKvHiM81gNkWpcXpRrrhhD9XCvbmcbPWnJGt2uV3HQs",
  "key14": "joaHNczZJcCBS3cNpUdhAL2Z83ZkrBSUpwccHTbG7AMsS8N5mrhdg8wWZeV56opoUvHqW2VW128qVB7mrT5ivda",
  "key15": "2yXzoLnSmPfUFgsZWdmxu4zVd3jZowQHyWx6KfbFWkdssortc3aGkpHNgR2PgDqmEzvfMvftSBtkrhErmEzMa44b",
  "key16": "49TEdW1FnNvUb443VREWJt3cr1PEuP4FAp9UmxHJimrPX3Jv8R8dWCmRSrUye5EkQcZ6meugGWdH14n2T9Tuo1Hy",
  "key17": "4h9tnwRvBCYu9D1TA5BwBXsojdrFwYMT5wthJ8UEqys4TQYqH3adS3EBHebBgR8fBD5BMeKnJAZSp8snxrzAzEWm",
  "key18": "64gEijQGPBdecR8BdpJ7GoxgLxb13PjsnRCzfjzmnFQAVvFXL5CNaZQGE5kj7eSebE6ukTUXQGcBzoTH9sxvKZ1F",
  "key19": "3WoypPETk8bRFBBSTygoyicGXH67qRNyTEDkV1BwBhdz47p41ZTHSNjgkDq5eVpGb9PyFDUATccz3eSMFadx8zJh",
  "key20": "gkZP3Z2nCq5YwV9XXZxBrB6b24CgWiBDKE4NHrVPQo2tht84qJGe5k8wrgxghcdt6QUnPameRede5PiqT3Lhhei",
  "key21": "41u7JKTdKhCk8sy9sw1UUSYjopoy7AzLKqKfyYxj5zXFA8DaNCQ7rbk8E1Ct49XX1uUdPcj9XgKGvyysFTYpHEnR",
  "key22": "3zoSC9XLrXFTMp62LLXPkkzaMLtwPu1CqKcpL81K49QiwYygjbbdRsY1fLjTBjokZq5g4DozRwkmpRwqPywf31kF",
  "key23": "3pzUXixgWtT8koeruK3pRqkkBKbpVuKd16ZanSh8RXwYsoE8FDuRzsEY7gsJVb5gDR7hZfpGhD6eUEZjbLwPZ7pZ",
  "key24": "4LgaxQU5VFBbwtyDr9WwUFAmn8J2W651K6c2kXz1meETY1gveu9h8YgMtizL67gULAq6siUHYQgWpv3RmM7cNZFY",
  "key25": "aYRuMvhgmuA62Vpj71eqFBPMEMhEnZ1A9Pi29CYPb88xumNdNUG3cTRMsfzk5AmgEDqjS6zadQz9eDqjiM3zdJB",
  "key26": "3Y74remGY6td7uFZLH58iUYjgeGXzgndKcR9BBYjR8WKqSj332r8WVhaLwk9124C2bUsMX8ZzxV6PkxYqQzEKTsi",
  "key27": "5DyK4ZrZcCpvYkndYVSW81a3QaMRp5RN4Sq2ScHnh9VNuv4NxLoeAi2z32znxK58bgd1yb47D6haZ8yC3LSEWmy2",
  "key28": "2Rfgjsx8h8HTLhZ5kLtxz3BNVr45xHysLqtg37fEcWFSazCdvsoFKtvms23EHaZDLj3NFpiPLQ1UxqoDFXzffNnf",
  "key29": "2g7D77nKySH8MTt1D8SeHESVi25kGDfvVsrnz8vYJ2u9mzvTyki39BiYvpgdKSPahdDRH3B3JrCdWYNca7nCENfC",
  "key30": "2cxG1uS986JhYY2PELNJhg81mGeRMfYH7AbKsf6QdtnWNM1xUD6RJPoJ5jTkSNveNPncBSuEKj8pwXfkpRbKf8Sm",
  "key31": "4kiGEuEVC9eSd72TTzKs7bEdKuvQPyXWfDebhSTink5M6i41JaTCHvJ1x36d39dNmxXSkbpD15fyLzp3XAQraSH9",
  "key32": "4QN9jhr9zyS2uXtsQigDQGkZHHUeuBN84azTbapUafAEviPFGaCgEB8ubn3qtaQwRazFQaUNiGUxXMzovWB9FbCn",
  "key33": "5M3NgvrL1MGghs8ENKnEXHXbbo8Wxa7PqeCASgcs7cuP4EAvn7AJiBBaQ5tdirfLkoz3jtPj16eVR6Sfk1CU3RZj",
  "key34": "4kcuGW5xrNnrcw7H7gqvjngGwZN5txaPedAvBEWGjAVuTQ3W76mELND8KqwZVeJpMoppV2SGJRqzcWvU4vjGCaAH",
  "key35": "62dHjrkSzbasdcenH4izrjq7HXXGmGLaGRo1JSFQyY46YbkkhFM4wsq8Mg1gKygXBrQqhNtv3g13RTRYTqfGDCc",
  "key36": "2JSAtX4FoAzydDYq4yMMYTi9fYvJGaQNQMZ94hKRsG3WCqKxFSzHBLJao7514Laf6froCcWmDL9xvbBwMSXMtveJ",
  "key37": "44t9UuVvrxR4SF1tW8NLHmCkZbgftDoQctEgiexnac9rofRy2Q1ZdfWKkWGrKDMtbLeAK8ud78S84sdZhyzG6tXj",
  "key38": "4cY4tGvekn55ED2FBBZfaDh1SRSTDckPG9qzLZPNTHLEadzChMmGq3QCYiLV2xhHkfKGU4be24thumJQ1N4nyqUy",
  "key39": "3XhDM1HXEsSCK6ZS1CwHPthzAN3k2pReh7WiYy25evHCvNzd23Fm1KKGQQtZSVQ2pDTxFxGD3t2gwFcqMadsYUwJ",
  "key40": "3csAs7HexGA4Zg3dnEQMRUV5SVKthLufrHgDfXd57diTekj6aWgRje9cXmaAVf8MVEUwWNCPNrZCWztCLBZnQmEF",
  "key41": "4C26ZKrKWkQB6GhNFQvLmZcGPnL13Yj2XmNtdv84FfCvWQhFwwYYw47BZs7inRrDZD5UbTXUooVi2L2mTqWrRTLe",
  "key42": "2e43H2AVMk2mVbrxrbyZYC9A9vFx661TWs8wrKJiDaJSHtWX8EL3mPsZQ7i8ygBSdTryc8VvV9HAPFqfdZRZH4Hz",
  "key43": "3po5gP4hti5dtsz8qohU8VzdykCyEv9F6MdefHJ4sUkrQnYRqWT2uxmrXGZfovZZXGGTC2sTRQ1UinjEDoyJ5uko",
  "key44": "4GW7e8zvhot7xm5G2pah7bhcztN1qvaLhdNPnAWs4Y2boKLG2CMWovuMNeh2YN78vxHCLM93H4mymfQ443XZR5JY",
  "key45": "5iDsdRURLHEvFdksYqGBKZxPbxpmqpKzn1YkNVt8uf6YZTbaoYm4dZmWkDk7qWQbvBaae2pta7Gab6JgFjM9WPK1",
  "key46": "2dtWXea4rxNTPWKCitDQgLXzhyJcyb7nB7oZ5Ts5sT9q6QFzBSq3GPFoPr8o554FkEXQHrXcSGsxW2obysk6Qo1F",
  "key47": "3KpJd4ZXumaEgynSzQ7fVZxUHSD9tpn5scAp8UTfSd5M4ELEckQ5RqrzLUs6bmxz4RLFZ4rFNWSGgUE2tHAZLSSR",
  "key48": "3e2dioAEmmnchRLtEYzosW97UstQbvr7Sb2EtheTgZv1w79n17wEKFwojXmfULjaVLWiwMZhSSiguQe3tgTiNR4s",
  "key49": "4QM9Scsu4fydrNPbmz1753jn2HYDvu9pfh2SAq9KuLXznjba5CKNhG6TK6PM1BgUbgrLtyvX1Jna3LUzYXoBSRmr"
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
