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
    "51KjXZW4E3QRc7PakJksoLPcKVBBaTncuvKSYaVX9GJQ5f3Fk6SMQaZHhLFG6mSxzNhv1FdF1NKjQK2wwZHuAqyY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R4csSZQVmwEEXGHQ6KSjikfGfZa96m5MjrRqTtVLVd49apXbmdTBeDnjhGDQ3mzfkzLsJVFJf36CYcQfeVpKeWK",
  "key1": "3fCL5pgQvkAaaRgsKnNgKAMgJQaq5YaAwiEfSthUgqQr2DEvLRhSZE2ZXKzG4EtWYrnpaxTQsxSmqGKJSb5iB8hJ",
  "key2": "3ceezdN3cMoKb3DBUM4t5hzVGaoN4AXCWwKfurRS3BLZzsMqa9B5qoS3gs8ddnH8bQu98VKYe6UWrC7Zo29RCVsA",
  "key3": "33mG3Ydx9miGA4SnmcaUrCDPNKvnu1bpQNx8np3V1wMjxsTqSrYwXbDhwfomWhMF9fc9q9YUM6pqtewWsqivFjgk",
  "key4": "caf4ACGuueZFkcZQAD9FGYJDVcBtxfeLgxQFMC8yFHFUeUKHfL2ZnRruSrsdidSJToxzjDPuCRFmnK4AKEv84Fm",
  "key5": "21C2x2C15o36sdp2Zxu7V5Y386TEzCmaWvN63rm7ARPFqs5wt5CLMvPv3QXo2MzN92c28w89W9Zq746BwzQKbE1H",
  "key6": "4A23qy86PPG1bsSdMYvvw2vkvgkuvPQy5TVu1AiG5Z5TfYvaQZj1AZTo8cWp7J9H3AXjitwHLoAss5rs7eS4jwuF",
  "key7": "4TGmDNcSfQtVMJu69YPQbKpUpwubudTDusqgucRt5iqJZ2whTXPuUhyGRSfiR94i1z1aiQvb9SVs8JGoVXZiocMy",
  "key8": "2U9rZ1FeFvft72wek1ur34xyR8dJ1m3Xt5fYjYXihetWSZzuhobx2qk4AF8Ck5vMK2YE95vTNdq3Hb4TVkzed4fS",
  "key9": "46XwUHHn6xHRNPrnqUWAJorgX96Pc3rfJgYfTnp34jfbsGRP4coNGuwknWhpbrK28azfewsj9dZPkR9w2YTRhGmH",
  "key10": "Yn9PXcs9DU6sg52LBFaAqYjW7Cbj4MNWHzJZXnyLXYsYezxedCBBETasoxUiDoa8iVHQA4SBpJTfzgtb7SmgYab",
  "key11": "5rUvmAHH3LSVx7PyRsgBs2NmkSWNDk1xzpxTHVq2g2v37Sh5aE53CUncZX7hvXpkmy2VzeSoyvGoZRxvqE6ksnE6",
  "key12": "NJ8BAFBpYwBMzz7Seqy8iSHoCFvSD5kUuPRzmWJKLsJntdayC7CMgZmY5d26JsGHkCxpZazqm6aQdG4ykKTT7yr",
  "key13": "3cAqqPkvDS7hCQzpkMz2K2V8Fx3kMvzzSxcTMbcoD5ScXr9sag8AyLWjM3Eq8drQGHe5z8iwjhUHnkcoMpmUNYwr",
  "key14": "3kaYFS9dfnVrsdLf7Ahyq22kqLMPMMqLop19xcXLGeRi5RtTqMi34YKgihGiBkEmyhYGihcYqfjEBrDa1GNdi5cS",
  "key15": "Y4K4veDsevgABF3ya7WFjQbEd1De9QZ74wx9j9AShLAha4WC69bez7rgbNouoDmhmyBzWHwkEHpb2r9nbEqn7ms",
  "key16": "5nSeMLNNWHMuYX5vwTq4m1pyd5cDf9KoySMzxvsK3Cq2aZRee3ybYaPjHxezm6mkYbMTk3ufMRFxsr9s3hmqFdbP",
  "key17": "3wSEoSzVFxjUCwtszGJQopaBe7XErpzUCTqTLLHZFsGWGC4ZCFhVFMEHVyYSGtbQWD3yAyQtCSuWZ8Tjg8v73XjD",
  "key18": "5ogbinP65ncVsLJhNZrYuFt5A4VHZkmYVyXkcsjtdDVjbstqFpxrAJiY3jTvBKo9SaQ185TXXM318fNAPYR8MR8V",
  "key19": "264Da94cMZdiRfSZuoS3od4EHRGZRZHL1pHDwzRuAwSjU5wwP7j1Gwg3UvYHkYZdEaSfXxRmYPu6Jz3fY28VpNkp",
  "key20": "4J2VgDRFw8BmPDoVDT7PFbvnoJtDMS67RP5pStoPkuRM9Rg49cHtycmNriuEQntFfHJApTHZeVofnVY8MWNbpZD3",
  "key21": "4orrzxFcokgJwxqy76YLbEYjLcSJj6Sz4MxBGh1xPwokdJxyGrdH4B4LbmaPC9Rptj3fAqaV5TEx4foGmXPdsqo1",
  "key22": "m9tnJ93N6hV2pGSVK1MMiDLCXkqhoYz8GSdoaHFo5o8tVZSocDrJRfT6gjASNCq14NW8NvCspoT6wajqK9ZqYcZ",
  "key23": "3WMXizR5M9pS67RoYJ2CV5PFcntHG1mFQbzBp4jfiYDCfJWtWBcuYh8yWzqsfVuWQVoLWYUy8b3NBx66fgJzZEos",
  "key24": "3EhWmzVGvQwANdLZVCq7Gne7aBFgR8iQHQTN7AB9mykyhwHiXqViEEPtEB3dzkngZwLcYYevmjezktkJs8Kw2HJU",
  "key25": "3uU3DqTyYxi1fEqmUDySPwTNiWnS2Q6y84Za9XLpZYicm9D2WmZqs8kW5t96GZstLrZ9iFHxZ5TyjtNjYycsD5gq",
  "key26": "3EEYS33sqzWYknLRJrLh1CwyeqsjmQpm3xeFYK25SF6jVWCgS72Qboznfd3VVegiUyKZBytYCLeqNvdsWPXqA7F9",
  "key27": "5TSFWZUoZYFL3zk5vJRYnRSLHVDkDSfXiiGWPPTkxuGRWCeomyQ6Ftxo4tJA3zxutUAzba4YPbd7qMu31fPMunE1",
  "key28": "4sdT9z6sLJjkuezm11eFPEDFbBk87RweyS1MFLBzGE9caJ4ohkC6FekTZD6HFCLLyUhVtZRcZYmewf39F3mNTeDe",
  "key29": "n8E87SxNLXYURr9d8MeXvG4DPpVoxBEYmRibc5f6vkc3R1FQpD762nEndgufvUad6tQ2r1pfanEhrqeFf2MNT5B",
  "key30": "3Tj4aEdnc6kvmyzK8LcC6Lx762o33hgXbYJ4aXYY81HY57awbqQHhd3qrSUsbKwENwaMd5fTWC6DXUo1TY4XJsUK"
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
