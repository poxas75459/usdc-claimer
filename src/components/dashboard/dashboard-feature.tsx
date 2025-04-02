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
    "ECULDm6jHApGwVdoRZQiAoDS8vntB7drH7rgXP9Z6mTvXgzw7ddoLwbXy6WCLWVCPmJXMdw2vvUPNCyRkTU1iFL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s8BQYrCUqkL93mjdvTh9Pi5RvRwHxxvb3UhwefeAQcUjHNqJ3h5TYkBNMbtGfpbtQXh7EBQBvibNHLdwifFBH9t",
  "key1": "2vPUW3nBds5Ng6teNDFgqXe2MqzcYV15d41EouJxd3GHzqcVLKMxyUfLxKMy8oTtfi7itdn7M5pXhsW9pL6uqsmo",
  "key2": "2EbBaG8fj9U3Ycb5MzEUN6v4G7vftxvmvuR3EnEZgMBKjRxN9xEy9meU58Z4VwF1DFiSP8w5ox7gxiJDUadRMJ5N",
  "key3": "79VKigcQgvzVUtRLiAnCBJioDTXwHbfFexC1A1AzxifbVDJxRZ9gTL7Cj6NADkBXwN23fmmFDLiVrvXADdsJBq7",
  "key4": "6h7uEkKScPEn93cZiEXKK3TZrN2TMXrMQsb7mLUJBPiNQawtezPL4sHjC5juAsvkWFqyVebgmFkBxrgLqxzhHee",
  "key5": "66MXBfX7jTk5sXQYLx3aCdeNzP7yAiqMivhLQiq3wKkqyf2wJmSEdXQmvqtkV95s5tUwozYtwu4V6pRQ7BLcfXjf",
  "key6": "2B4oMDYCpHteFCfLAP7X3dtbVCHcR4m6wdFUFgwdWKz81Ej5wzv2NPjQYHeiepnrobJePy48RUYJjL4L7dL5vQM6",
  "key7": "5bEfgW5BU3P5AM7H1LHpbFrhSGAoca6MBtaHkiATidyKm1sZy7KHd9BKWdcNtRXRzE5HEU216vBNwhgoiQL762pj",
  "key8": "2XiVepHYcnzqgtWQpmQpFxMZZMbv1FPPg9LF67GysTwdUnJtVK42RgzbseYLqu5etkMghi4CH52864r2ktwNt2K4",
  "key9": "RpoQFFSwddFQ7HuQV7ADdR7vjwogxV7aXPENZFPTp8Ezhj7sb8Uc5z9URXTZCkZrCTekZ1Yhq6gsZY1Xb9sDLDk",
  "key10": "1PPTmgsrpTkX9BvQbY26iMBsYRpeBSNNc3mqZGhERw2bJaKkTs99enEcpgE4hxkErCcRuXfUTnLYYAWNZgXAryW",
  "key11": "2VeS7Zq1qxqz9DgA24U1MSoJh1grpqK48LprvMDH51wvic2ezatVZUe7jYwY3jurTCvDRR39caB7Luizi1cKTGxw",
  "key12": "4WJfVnUQ4MVGYFoKVABDonFY3NdVZrzHpDXHQtSVhYdLVggduV8FnEnW7qPBH2Y9QJYP1HTH5C5PuzrNjE2rXeLn",
  "key13": "3JCF7982TQifqUkGzsoUBKtcXYQzRbTxA6FrP5g7G1EkPAoGH3hr4mhZegGtDQwfh1ARmYeAo42puJLoo4cjGsSV",
  "key14": "5S2bYJxtcYxA8cZTiPao9zxjHwv5yDCPzivsT4RJdPTrZaMv4KTjqqKr265jgL3SwJmbKkHnqM5kcTpA6QetwuKr",
  "key15": "aCm3CwZdsxSo8UjLoEUTvAy6T26JwZrpRuhQmX3fVEtbryqGLPNXeReH5i5UcPn81srcXM14oMHmckvUeVBqmJL",
  "key16": "5jrv8qNpnoGBk3vX5e3DXu32WgF2P1yNWNPUq7BpAukJKy9p6LYjHJZ8dftx3ry6jUJqAZ4ST72F9emGEnuQU87x",
  "key17": "nP6byUJVUuSxDXLh4V1DKyUuQHh2uqkPb9iarxHwHXx22nktMD9JsXajbaw3ovqnpP2KL58tTNmyH11ZdreVkQw",
  "key18": "3nAEsc9WjRB6yaucXKWPt9h5YsP68vzzo1T8ezMgsGeXfNsjoi1bcxEMpRUuYRAMEQTdoijSN2mTSAM61FCTcame",
  "key19": "36wg3d1dHe8YrmT8whhv2gRgFwf4Y8uK3schaRwSMTyofdmQf47S9sTbDoqmJJd5d6eQAtdUkSLXT4nbDgQredS8",
  "key20": "yikf6mqbP4r6Mut7Y2aEj2UyJ8aywohxFJSkQFjF7HZqXEitJotLKBFNcCjutvNTojmzToJTC2jtJUfkkjpWW4x",
  "key21": "Ar7ktKVdDbza4E6TySsqjJSZgpM3dKUWDnfANG9X3YN42n4apXX8zaKahd3x7NY6QkRxyupzzSJeb5V2Tjwmw54",
  "key22": "48AHytp5QHarRJTCo42hbVjDbzXF5gWVhKcjamsCBeW1Pf8WQbLjZtoFVc1K8kfhKd69HWnfbrNgEFQXdGN55vmf",
  "key23": "4rizodvsKxuiPfqVM4hfzoxtaBj2MUpSfrgr8zfGnSLDJLAtAkN1j2GofCELYHhA1HcMyxn4LxnihMEJ3hSkjKoZ",
  "key24": "4hEtGGCowv6LpH3AN8kd5Ms3db8CwSoDR3jYFvFdZPiNgXS4T6oZ9v5ZUop91vyBmRVWuMsy5FLQAG22QnzGngDJ",
  "key25": "3A7RuxzSTeq6zSg7MFsqvryV8r3sCfzGH82phomQf9fjvYriATaqLxngTt7zQwHy3mQf81Hq4ivvka7H8dPWQAwa",
  "key26": "KqAfhwF1hhkCc5nDuPeGCgngEyFmiEBaofVrQBxSaeHNYDaXrbvDQM7F5FuXTefe5hyJXMSFj26jTHHC7ActmUd",
  "key27": "WY7qDVtZ1CMPPm6Rnfxb4fhZzpP1Y6gjgnnGxHfGyygg81rgXMfSbSSk8hNVdHzZhDGaBa3WhYTzakHmN9U6g6w"
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
