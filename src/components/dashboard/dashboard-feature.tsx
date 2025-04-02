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
    "3GPpErf8c1zfG47jbmeZK3QGCS57z2KusLy1QHnowrheRK6wUovReaTQAHKL1Yqnhc2rCM5XCA8ERJsyA24ThZQ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66CTxmQb9Nex5hX63C1P5H8ujsvc9y9fK2QuoMPTvpJbPCYVBpgzUeaww225fc5eeDe2PpXic6ub5B8MB27sxAbv",
  "key1": "NdRv16PDXPh7NEjwKYbeo4qhS7MP4U234mGeRQWvFxHmj9iNGo3Gues5AzG1rwXochj5pTRM8JRBG2S8DnEZZjV",
  "key2": "4QJZi7VL4h4omP6pwtg1oYqpfPTEqh7WYjE15Vb3LJux4uRbsxmeHrxpSnMhgpNM4VAxQ481Z1MPE5A778nWj5Ld",
  "key3": "3nJG7SpSfKLKD5AVUbbCXEjhLWPCyprXJnwK1jNNyaeS1vQx3Mju6VcNWA3rxG4AYqj27RaBF8Q2sgfTchR1Rf3T",
  "key4": "66ucYCNfZU1hrXn4FMVPS1ZvAsvfASw72dFWMhqwpHPnyx7VYLyXU2j2wmeDdMUXPr8YSrtDMMZjNXcswEosXQKU",
  "key5": "4ZD41UPNzCrDB7C7LuWB5E9eyhn78FHabFP12wYWVN2xydXZ9f27DqkpebvUcgCXBDnLj79kjLhgDGbSKXnZ1bD3",
  "key6": "5cuBLCb9aoW3QxmexiH16ms4MvMWStiJypRqRKyhu9njDJ5jUqY8hPL71dT1uwL5soNZphhWUCy2y4txMpHDgqwG",
  "key7": "3MNtpRYV61VWAZM6EjH89u5PL68Y9ccUVWfDDNg9RsKmHF2MRwGBaxg9d5p7oYvEK2vKSiM6cwVVcoAsP8ckct8w",
  "key8": "xeFrDrNXbaxFXELbHiUFeJRUWo6bACpLbgk3nRNG34zFCSiyfkpPjXeC8YNLaEfXQGfLCMbdVpEer1iQgE5eGH6",
  "key9": "3S2YhPepAdKTkScLnSQMWjN7umPaZkB7syxct2Vaqs9WoXD7hWAfPRWzAXVQCcqy6MvFrDo2kSdUYzaZ4PTP3Z6Q",
  "key10": "3KwvptpjrJp9571trJPW7pAtXxAhN22AuC5zg6LuXKC3QpSXUihzsHe8ZiumB3UwrcQSxdci6HvdV85Nu15Fr1y5",
  "key11": "66sM1jqnva1DZCoUvauFswQNni6jPPCmApeWd8GxeiUN648cK7YrEZ7dkqksSB8tpcVfbZM7QmzMifcRxtewoVgP",
  "key12": "4QGtrQzbDpH5CbosvmcbRjRyVHiJaoeC3m92XrhfRHf7qamYuSbF4dhwkRJg8EMYDk5YyK5snvjc53qbjyQxsXAx",
  "key13": "2AmASBpFFdX7ibmavuHZc41DNeHtKr4YVinxTY86BPvxnC5CPeZ34TUT3h1vGsDrKvpSqdQCgkDh35Pys9fAae3C",
  "key14": "2KDYn9wQeG7LtSUkNhygq9LV7oveXB7tfYbGAhn453qbJBc6bnJRBhXL96HDNpQPtKWpjhZ4WE8zFihytU2xJG1q",
  "key15": "65nPj5vthcnMQnZdNyXEGcm3dNM2EPVPRBjGjNExcBuEKvU6ZRtPWVMGy6Pc5aiL5LbPkcC6QqLrjUQibcU5itGi",
  "key16": "4N4eG2SGjKiUaFu6aPahd9mC6AUvYQbCFDTcWXgFaQAKBMg7zn1kRsRqaS137Zoq2cxuUJ4XzRnbJLDkwjfMcrj9",
  "key17": "2qxYuLwEUaoB4otFtaXHTacZJwVScFwcDrntZu1ppyfJUDqS5Zy8X4uyBQCxCb876kPyRawmhT7EX5UtMvVvBi5g",
  "key18": "5ZzjpGYSBApVXZUEABfuDHnGHkwebjzEJFoUT66at9j535iffRdhJwryuXA4cwrYHhEYVn7XjSCYzmaPudMHqTmZ",
  "key19": "RotAjr9b8cwKsgGo7ggZGxmmddgQ2u1SuqiuhLnE3VzS1ukywhrZxfdRB5CaWPP4qmDCWUmUbHswsH7YUjhjDhQ",
  "key20": "3BMhXRU6VAZJjXCUHPiX7J5JshckdiHEZSta5ZRx1aEUYSsFSZvtWa36voL6J5K8vEFG4Lix9JxpG8sEuJqCeF4s",
  "key21": "3dMYXh8HoUTZYrznEdfJ2vSSDQiwfMuEHRcRCMF69Yqw4pHG5zzTKnAvjjt2B2vsa9ki1oEdGvc75L4xbkthP4iJ",
  "key22": "4E33n5BLNE45EbfbmexU62DKu7KcGsfnpkV9dGbUMFwHP3VRoeBk838a3UJdjYnhFsgFm3wGmgiMYX6bfT3wHmy7",
  "key23": "4CzYNyQgjNHP7oGm5m4CjGKb71QHtSAx1Fwomq66WMM4h6ydDN8bsCyBjAEdZ9KsbNCtDyFKDo2f4rQ3Z8sKrQNS",
  "key24": "2qvRhLsmqW6KqTn7yYJPSj7xb6xn2Vit7PKHV7KKVtWgxKdbMP6gQHVUxPbSdd9Xcu6h8FWGrKRQGD2Lhkd6bGHu",
  "key25": "2w2sSUPUqpGUDAJAEwDC8SrQd3ChNVy1Ndr3jo2G4YKvdUThq4Fw1XJRkMHsbednLy1DGsAdEmyCcEoTjfrz3evs",
  "key26": "2RJSdcHPYm19qZY8t6jPLz7FpMs4eza67kmYYTcf2VECpHL3QB2VBqpJHRv7Xz9GeUs42NG64JURqzYfRhR3A5MD",
  "key27": "3hiKcragW4h4orNCYc9od9fbnYe8joWviqTXPQoY3mopJ2QbAxxug7RLgcEsdE8x38rCux9SkDzuk1soexjqhLZv",
  "key28": "XkXvDwCJNTkvZwxArhy6z4iLQ5619xjLxNd9fmrHV3CeJxLDFaw9rvBhsFZ1d6tEoUQ6ZPPPhyd9EQt1kMP89YL",
  "key29": "3Tzi17fYEtzGBXP5Dj8zyudPPDbxdACMwKT8UqRDdyRMRK2xcFci7Jb97DiYSWjQmPRifff1Cmryg2HtYi3chhSD"
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
