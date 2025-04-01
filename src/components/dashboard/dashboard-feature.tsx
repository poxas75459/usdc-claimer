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
    "3LbWjVPwNwhKL5HTKLHKoYQrkZAGuPE2pTh8JZcLLoGQp5mt8ynJAa4FDrFnLS9sW9G27QhNXznFVyQDeKLTbxCr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y5RRaVDcc9h6hWiSwLerCKC7WH2CCMUDV9ydeuvu2ZEcZGEDywUjTwrRdyBioZPDUzAyBYB7DAq9jdBeP4XbUpX",
  "key1": "4Pyj9suoeBcTPb2xg1L2t4g6D4vwCxf5GXoWvykyyjHRJDjPuCAp2yDgzZy6hLt3oe7F3XRMKV5F2AhVVaNfeyts",
  "key2": "3e4gP1zZHc3nb6tM8qxaiPHASzuegHBDgzF5wbT2b38yaQNt1FLop5oYdLt7XB5eXzQNN3hTCFD1upRwSdB2bexE",
  "key3": "2LtnoPebcUxLWp9wxhsfHQWT7MeqgX1eWxXbRQ33KMnUGVpwS1RunW7pAQjzgtWwcD4A6GVsJvN8uw7XUEBVioCP",
  "key4": "34eP6LQXuydrThVjUS93oABn3DMbHz3n6hCyttXwJuo2EJSNeRGUTgwbS7cwmf4AQh5gpyR3knJoR9EAHxToDk7c",
  "key5": "4xkpxnb2di5zos3ervH4hDgETse24apTESB8muEZqZ6Ad6eHuMwzBdm5V7BsiFKDMkXd8ykL3tbKqNXSbQa8d6qp",
  "key6": "5f5uf6anPhYfdDGaH9YQPzg2YTfFa45kFUNMjYiJaykjApq82FbTbbSv7EeomJyBENr4xvWTjy5LxttvjVUaEsSQ",
  "key7": "njfkNvL11rFeC7qTYob3dvpJoTkr5ep2bwx6LZQjPU8xbPyxnrDbu5sDQde5BrY66i55Qy368KdY4n7HRxzMd58",
  "key8": "5YmHtysBQSFPaKnB1J4gU1aZUsDGQ3727XSSo2EciPsFJtmy79UU9ym7VAjf8tYMX5evx7j8ckWNYtHUp6jt2Ft6",
  "key9": "5HUMHmF7nZLEmHvFp7PCFuEygvb4uYU5S69VJ4RW7JBhmurqNz96nezAg2jXapEhWq7FwZ2F5E5TU1SXt4CZZvVM",
  "key10": "36WKja3NQFYTp5uWh1jEvdkgUKJWJFNdJoH8NnnxewCrJWcUnt3CSWU9BqKq5G95Fz4kCi75YNF7Q7qCvEtRNysx",
  "key11": "asJXHjLhPmX9KKp8NDnt6G2xj57G8D4Gd4ParAN8pD92fDrxjaNt4RicXuDceCFoXx22XejR4Uz4voW7yR4W6oD",
  "key12": "3pqSXyGL3XWMbfWbadvUMD2oVsZE1u1WPDQ58drCLLkUVQ4YsCyv83fVsgPegKnzTpZKxbGYXH7G4Hd4PkbtNou",
  "key13": "4wanFaBHjDB3XKPasC1CxqCXHJpjZiZpyHSavXsLpwgt68VpEkzKSeqbEnhRobMHaD4BF4Kc8FNsQ49SyMiaTBek",
  "key14": "58Rgjg28ScW6aBmUby8vdyA3cBrc5FQh9wTRpkcNLWZbxLRWptjsBGsuBT1riTnNmhwr6yVDZwKbkxFv5kqkDinV",
  "key15": "3WTLbTv1SeCKjvUCWkuWLreTXBPQBpvaYymvBBfTbTnPMUm4DNirUntqE3W5DAxSHHXd2L1T41EubnwzqpnCnXKG",
  "key16": "8rSALRJiH9zvGC78wsnrN4J33TtcCNePNfuVVfTHBCZeSirr55vG6GDCeChnjppUnAH4iARCtXQP47YZnTD8oTk",
  "key17": "5nf5z7ogXd7rES7syvQWxDWpi7xCBkstztm5vhCWC8GmzX2PdXQjDTBzptc7op4am6WWvi8QkzDaPvPxiV88WyJi",
  "key18": "4sw3487NCBYQXmpCMBPgMahiu37W3NjmbefKZ6zMQxaWGHm4zf73G5m1jHAnA3TR1qqTH7c2dmW4S5oPDMpELUyz",
  "key19": "5QdAJUBc9NKTsVznmJeusQyb487NbjxEhXE3hKkhgcuEhFrCsVLCfEM1jf8dN5vdYPUmcmFCDiwPgszdEAJC4kof",
  "key20": "3WQMte7bp2NDqGmJkCXiivB6EX2L5ujJDKXunxKucqLFHY4NigToAEMZTnpofEr6AGePtfDMayTCamFjSoMjUSzR",
  "key21": "3CXUy95qSnHv8HTV8xFz4DAPkUAMAqkGFEZ3Jf4Jksk9Lz8ti6ZdaWCUBNxR5Em2qTFVm89GdNrBMczUs5NriQNG",
  "key22": "4dDx9YcpDZvkEH9FxrYNYs36kZcCdFFquEBbNcuJoUsphhNV9Pz9z3p23o4gnGZbrsQJSR5hoRaxjdPkbkekVw8F",
  "key23": "5sK1tpPBue9rBR6sCnFCwRi2qQFCaecC5XWaq4BuYZDNtsiZJyHiR2Pw3TegPNnYGJgtT13QQtS1tZDAHhBr6aTP",
  "key24": "5psedQ795MU9o9a1jnobE6okzroopMBhXH7YfRT51PdWL2PX6bgzf94ijGjvG1DRU58w1pWW2oqeha2DUgDJX7oC",
  "key25": "4FXNx33Du3KZhLYoGXWxzywCPqfJnTLXhDWYqjoTvGB6hYoqgdVRwXnz2a6sPxtzv4VppTqyWc9KQrpnMDugKbyK",
  "key26": "3eCbZWpbUjiTJ7nqypq8Jss4QMAdSsUjHwiv9t9QVXKyM11b1TUVaUcFGFehHUk4RmaDPGvEDt7gF5W4e4vHdgLG",
  "key27": "3iRRhtjGZiJ9AKsYHhrX4hihA4kechZUsG7sJShFgEaYyDaxkdjJ6xmQpxQjeVwmVzrHXoA8mrszPshEnh19a2sn",
  "key28": "5Nu85Az4JBSiGqYsBzUCdMt2zDMV424G3gFxrogFXH7vWAS6CbG1YYUU8pGymk6mhKjDHmvvixnnL7GJQMdkmML1",
  "key29": "5NEJ7zYUweMyvZSL8uafvFLkuSS8cyTbAyWz7ZSinMJm6xBeRB8yV6UNHTbfvfhZ7QWFrjpNQqBdsX6P3edSnMNu",
  "key30": "2vfRtfpHvSxxkLguKdmadDshxYTGc7MfdRJRuFqptva2uNBNGeFK8LbXuHTAuqR9EPDfZ9n5sNyCpNY8Sd3SfQND",
  "key31": "32Bjny2itfESqqRjCos1Mkirh7ZMqGn2nLsRAnPTmM26sEeUtCooPVVRXSAcZfnucBuwYJVzyaHiTyzmfz3BMZMr",
  "key32": "48cxRKSaQwqrwfmPkp1K3ADgfLf4eRgYtKCgSNddvECs2xJA9KHESVSzRg5xgZYQwtorfLNyGSdNxFpz74JHZM5Z"
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
