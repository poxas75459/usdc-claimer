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
    "3EVY25NgpzmhBgBsuysx8mHFuxA1dR1VxhrB8iFwxBixhzbRm6re3cyYCc32E3vrU5UCjXpQzt8feAi3ENPZPNss"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iQ32KYXoFNeZiTdk44z6fsuCzDgPdPqBfuhoiMFdKrrYEq7nE7GTUHPUxGHEFeUxtxxCWdp92ooyWtCH3GF8FZY",
  "key1": "Mxy7gNpTmGGxbbnisWckatUVmSzLKD1LC6V7sHXJrTurNiUFci3ikTGJtY58HvMeSGckzrgyNKqDWQM2MJyjQ5F",
  "key2": "4X8JguMnvKSPZFsMQeG1Tq3rDB45tnENhmWwTyeMQGNmRuU8fFax3b94um8nBWizximaaRkmhwnaV35BL7zL917P",
  "key3": "CLEKFtmk8dzyWMSynKJVRzHTF3NCVpi4ahJ143xdVQd1jbvuDUfVemBkB3qrrQqeGVkmJ6ionMrNZNZWFy6mVEE",
  "key4": "3XemdMjfNAFNwKDfhPAVE1QT7xeyiyAvJagkqTPJNBRf758RDvFMMegrSsw5aEWVHVwzFUxksBL56A4opm9Pr3G4",
  "key5": "5P6JK6wraHZgJ3DZQu6h6WGLaJSwHuMShmpqseBKZqPYtp5tyR176FefRbJai4SX27CnvXYx9FAN4Kc34CxsB5xP",
  "key6": "422z7Bd8cTKybEEMPnHRp99x6jkvogHq2eofARSWHoseFGTphqWS32McTwdfG1vUSRnTw3uV5LNatq6iPEH8mjFG",
  "key7": "3qucEW25oNqxkMXMqmfGXZ5vLELAwLTpKDkWN7P2XWJpihQR8GSQvszAhG96Qm53FSUdogpACLHT4qvAgpTwfWd2",
  "key8": "2JZQg2T1einwit7kEFDLmoNPy8majG7mKvT1BoxP98KhXpFo1XhiTdmzB7Vw92ntSnT7vU1JQYyw68g5yvK5vgMN",
  "key9": "3Na4btet6wXUWcjkVEfaCY3UCniNQy7s5h73UtGayAPbem4FHb74watcLcx1Tc2MLDNsiSg7RLNEzSYxTkyzFXf7",
  "key10": "5zy8qTsXTyCbBxYHAmowWDQZ1X71zEjR1TG9KwfNYmZ4MwHtxQFF5r5UAYFf7rHTKbXNRpCdsh4S8bjNpzFg4ZhG",
  "key11": "2pCufvo1r7vA25XcrDtqmnpQBzzM88LQ4UJfiCR7ugPWq4roEvanu1MuVcSqqwKpeKrZMtx8vVKF1WeJLmaNsLwK",
  "key12": "4c728LBsmUEZS6eJT1DvaGDnzQ6GuJ9QzxRT8jC3NwkKoJWPzSUhwVNua8cbk6VBbUiAuHs4yvvb37w1VRELvged",
  "key13": "3NKKKsSR2q3FpLum3gQoBEqgAMR3Sxg2GWdVe4VSzCBMzVLy8exJCZrZDsEP6cuzvpUWgii2LUJHGLSLAduhTbqQ",
  "key14": "66EVVTvtyvyjzMdHrwNZUtXBcVnvK5kGrmHnKdMBi4N98FKh9FeJPjJTGCT55zGqwpkhr3JeVtJcXj9coFbhjSXh",
  "key15": "b1DUxyTxRffbDvDzvjyJ4hGyYeow4EYB4nEzDFDyqydX9zPDEgYWa8QtxLu1nM9LVSQaQoaNxwreav1Wx5VpLS2",
  "key16": "2278kHtoL2Bk6TVVs2wTTQjiPJzCjyVc8ACxWJpR3jb9jXRBZd2c3XeDKSjbc1o76MbKLssCLwVuRWYsLRbYBspD",
  "key17": "4kVCaQ2FbRawVNvtfT75i3hHcaUmDKaZBKfoUBvRsSyiyeC4Uxg6xm8wpRHdie2xBYkXtZmStGFgKPhooRDLQc2F",
  "key18": "aJiXTp1ezmf5LD7XhE1RzACbHcCoAhw4ZHCUzyQPjqSjyc1VH3wCBiktGX34Xhp1LmcN3RjizDiuSZMkX8hctsu",
  "key19": "5a291uCqdqspF2Sn1kYdXLiXetLF9gY2SUGpVAg5FYYSzVmpwYV8UwJ8LkuKwD9sh1SgrcHAqnSrniLkKBnEAoMJ",
  "key20": "56VxKny72xpjeBNR3ZYCDdnxrTt7LTGLnVgYzdFv8MYWAUFmjt7wZEFXuVKYJHn8uvo1o1e3npasZNavb14igAPq",
  "key21": "5w7MBgGmtk6Lw9s5eevA5qPXkhCrgD8BhMw4EeBXKz3PfEVCtL4bBXqdZsrUNpiqw5JTEGSFj5TSWVgPPnHQsUCv",
  "key22": "3RgwmHXihoGY6THsng9d8LAG7zXZNmemVLLArRvCPxpQDGNqJuoUcXfTyVTvpcNbdembdzPHh6JHFYRrKrjGPVcG",
  "key23": "37Padz6PEsEocbb7E91tkx3JMxF87otpuJgiqKKJxSFFCuq8FMvFYZU2tjfnaViUgHDSayAMRSXxZPc5nn3GRF8A",
  "key24": "5moqh4LMxr8xr7nxe67xZghL8viMLAGM8Q3doswCoCpmRorTGXq5aKqWVYLSHUUv9MyQU6cuwwwpJVKW5eyKsfVm",
  "key25": "4qD5DA9hxT8DAMEifVGnmWDNmXG1ngELKEQxD38Zs2Xs9anFtE8soxKfCN4UmQP2kHjUVj3r99yxEFkcyXYpPVed",
  "key26": "4VcBQ3CwajSXQ6qdqM941PVbRThuLthBWh1aQKgLn4sEMZz284Wv4g7tZmPw8rvWxYq5xNEsrHmM34PJ5U7wUHpe",
  "key27": "336vFqtmzGN8heLFbUmrnHwQQKfXQTQeCBEYJG6iu85tsR6RMuivtXsuB41TNFtQS3gAh8iCnm1XGzMH7wWVyLkF",
  "key28": "5M6AbVDYthiZbgi5FBoEMRjHhAtr9QdmnkwbWWSrYctDKjZPGJetnzYGvQksBKND4QkTsWzTYyf71YHNz7BTA1zQ",
  "key29": "2gLnCmSL1Ayg4ztT4CXiLahpdGK4Q2oPkSzES84VYZ7SkuhDyDpp8Vev6fSvGPx9C5okATFVjApfrHK2ZTimiDm7",
  "key30": "3VsyoLdubdzMmYC5Trstf77xb3fhATeqscTie2cXqB4x5yWBDr2xmRMAiC5wDX5QhfuWjPU5BZR6Dd2W4QF6TJd1",
  "key31": "5b64THPupEhg75GnZTbS7k5Y6ULGiijpnDQwfUemEgX8ikWtyE2J8z1s2u8A8JJX2o2aq8tSMc7YdNm5FBV4wEKq"
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
