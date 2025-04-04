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
    "3XCgHauq1VThGpim4bXPrhUcvJNmYfM4x1GZR1hHNtDGeHpVKe7cYayWCchyqpnfMaYW76fK9LwUtRhRHURw6XgG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jLWGrBKK75c7p3WbfxGVPca7UFJ6adkZK4nNhAbCXBexVo4efECtbx4MUmUERdXasaMR5QoRgyVynzrNh7UJL98",
  "key1": "22CiJcg1zRXrZ88kQ3Dr4XpSmAmBM7ER8GEibjQtvcGHcHxJCTKJuBstmJrHhcHHc5DF7fdbqKq7tdQvrCN3TCAH",
  "key2": "4nkiWTUtC33cEnYfJiyRn7q6kJLp8H6L1jkENP5932DVVA1WFrf76n9vFga4kQrNrqqQ5XmAhevhw9zeRdavNz66",
  "key3": "45LUzfTnF8SvVjRPZFiJWyYJtuqvxA66wZcji7B4qoJUN3KyT3N4q32FaCWeShRegW3aSDrZfZ2pJDiakBShw8Hb",
  "key4": "51ZXL2sA6Q21zR3kToARKiNMNrgZhXTz3F5GWh9BWuNUzwUyjJyy2tBbP3S3cijCHwjmhx796LJQwBh38vXVFjDV",
  "key5": "3kyTk6N9y1YxsSa4x8W1nR7EXP9nS8QfLt7hoHSDPMRMyw5bTKeL1FwgCPQkey2Ts7zFLJjPeFPBc3fhp9FJ7zqn",
  "key6": "5j11WvsUqwGxyL4HUBiC6drU97ZDGmYTAPaGpJ9WiuCp52w8js6YSt5HdNKe1anjtnSAE233fmTGPTKv5DpEo4Y1",
  "key7": "3SFeMnjAWmMszV2ApnbGEppSF2iDPbSXkeXe81wfc4uU9oZkXnjomjsMSLyYEZyAyxgubaZhoFtvCLtADfaYj7Na",
  "key8": "3f41FbNWJLgNeB8TYpGiwoqEe79XA4Tt1wGu39npvmnYi3JuLQr9ADKwRaDbiRyjmorqGqCLAE9uEzjjxyyUHLos",
  "key9": "3rbSNPJjVh5ZXMoLdCzT1geVjFYhBBHTeYBJsJRycVecLaK6jHEmji1197DGajh8Ca7uQuz5Jjuxdsez6KUMshkX",
  "key10": "5eJE9jFgkiJBTubGwtB9X7kSEBByztVMsSQr2XMWc2TMdcLh1BtsqbfLyfHnXmhSGWnCcxJ3GWcewWi4WYeTHpY5",
  "key11": "5ZTKVWLifmaRMmP9CY62EwjfLMh8Sz5wsdY6mHvTeKdwXDYKfWQSWt3EQECtzXe6PXRHx1zgTsWDCtUetosqeriQ",
  "key12": "21JbUJoVCeRkfpyS8Fundc4A5Nejxj16CzhSDuixa83q91TrmNofq7BfC3AjQkBeAGLVjRkSE8BMcPH1c5NTzq7y",
  "key13": "3E65kHZ8KNQMuTdQHYBerDZxTsnVDNHbkAKRh2SakK266jRkAT9CohWSBXpeLyackKa9NB8mrF83uqmsTitAscW5",
  "key14": "4SmZ8927jSWMXKsWqZFDTathN8cc9AK2XRqQrkR1qwQbgxBnpUDxNgp8ryXBme5P1xNLndnacivXDkoSLrsLNwGy",
  "key15": "3hkf1mUaEDEm9y14WnDFDPwZy747SriZLTMvbx2hAcRvNgYjdC76HqJun2x9HbWPwNW8Wcu722U5m8uNdtm1rpJZ",
  "key16": "2iEVbgqK5RcSssSTozisL2YqFckRKHU6qrjaa3LZ8nK4MNGYmx8AafQM9aWzPwD1a7BrfDNdMyv1J2CDpNnVrLQK",
  "key17": "2SFpZjmof8kLwLDubhRTXLCQeprvvgjuLbgB9mUquGHiTb6Cgp7wtFDXHUo3UuXBYdPGXR23n6zmUhHP9JGnpgUJ",
  "key18": "VxmG6vQTnKiyDgg6VbhkiqSGsgcoqxSHoUKYRLtXNGoLHwqfQ5h3cCwYufYgWS9LDT6Bsz8vWTr1mePn8zkPyfp",
  "key19": "4zGmth6biUdVBKzPoMF15cjzuxfkk2Q7H6DBBpV8ZZtDiFMRfb2tDs7XmauTFamPvAZBShRZREbpjqZ1rP8W5m4c",
  "key20": "3jQUwJ9PhRNqndz9UXjjvdqdeCxNo28trjGGs6nYvP2VeHsfKgNqorqNxqULKC8qhztAeJDza84c3DZDbexbatZV",
  "key21": "5zg8gbPzR7neFATkd2XUQfHpji4fWvQu1C1dHW4UDNkeAFyDNBye3Wx9FbhXhgkFPKQqdVHJZJCk8ZBKbHkp2v1o",
  "key22": "4Ph1gGwWbtXumViKm2uWZsVEWpTLjpwmj5NbncvfAVyxyiN1ypunzMaFGPPH5Bz8AdDXsX53G3i1vsHxDv6JHgG4",
  "key23": "4BXSd3sJThjJiTKh1jUyim3MfKTKomjCMK4tRAnmkjFABRmb4Az7ZSJEXi7f4MFzWWC4cE78Y3npBvu36ZpHB6cP",
  "key24": "54QBCRY6c2vHPyemydK8XJrB9cx5cLM18pGyf3XrmexwgEFamFSQhESrZcEwKB6kFxxu5G6GMEbaRFwh9uaWb7BJ",
  "key25": "56FJw1Am1NbCPjeKKRkd1vb3DpqeqcbB7mR9Pc4d3xzE331H2uVZFZHntHMYnH57CUq5xwJMPtf997zvFuSS2DD6",
  "key26": "5CjVgWonj7eur8Qrhz5NdVuVeZ5xFRNEXZm5VzuBWPErqqKZnwQYQJ5Y7mrbaFHE6XieFYGuBYvJpHFbCCTYoHZv"
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
