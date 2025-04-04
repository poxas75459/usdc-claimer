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
    "2GNBsSTz5nBtThHjTjqbhiJfWpnYAGzmZu2n1szaHCUZWp57Pmc5NGK5dJejJYtkw6c1NAZfSPtiWY6tXL42aRAC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rgz8smSnQvtxBBhoenifLFmHKnZQJ6Fsza3xrEkfdV2fJSxqzj8EHpyLJxknyehCrUTXG8MhyYfMQcSnGccWsjF",
  "key1": "4zUnfDpJqtRSD7ttsLA2fPfvheF1ZMubZgBWXNMDCLSrBU27WDBhXjEdmiUs9CcgBaQC12rA7o7sRJrrDr7iBn5X",
  "key2": "4ksJcSToY5nLEcnimNZ9tFk1m8isM7YUsbKKUHiuhk5b5gmadLqYfUgBPaqQZ8aMB3W4sqjpLkq2jpMgWE61Vkqt",
  "key3": "2wksH7JYGFNcWhYVb8wunjR9EavyRnXFVdGjj6X32Bae8njGugGznmDSDZqhAJDtAw2UnrsxhTSeacxdJPMJKCp4",
  "key4": "5FSSoKvtYpbXYNAq7XCZ1XwzpR9rHqbN16fnxVdhK2Hy4eUCmqjP5HMg7mVCkvVjidCqmPHWy4SHgV8CqGMT9LiZ",
  "key5": "3c1WG8itN3FLgpG7ZtTWpDYuy6a4WKWQxbd18Vk7UUmmLBkEFaHVRvgFWGxfPaoutLGBBBMwkDL3fucLh88tADTR",
  "key6": "Q5mWm6yLVXpDDp53GXVUV6adoGkKSoNduQmybSTybiYydxsY5hEVdPepptm8Z2qF8tCcGeAUBwSDfK6ytfx1e8M",
  "key7": "3t7EVhadw5ANjBJVzFk62ZGmENkh8XARZeibqrWv4surV2krxMaTRkQ6VZAkcjSAnDkHxCTXLQ5r73AApP6jyuFG",
  "key8": "3BkoQ3ChqEL6R9Bjwa8jK2vW7ZJCYJxbeREt1BJeJJSW85YgyfSm6pJLUT6DMyGgnCw3dBuxwUDHDJS3Q6bs7SBk",
  "key9": "2mZsiSiutjZqNokWKqRgDQxmPz8DrsXQW4gKzUrQwrbX27ugZUCbMKCumh7h8FWF4htwKSiMR8Bsww8rdHpbviZa",
  "key10": "4uk8rRFiFxeqXq3MsWU5oPBjrSWTHBxxfAqeYwyqkkbZXmBrUN3JqXzv8Mieqtdeud2TXTPMRnr89NfXwo7tcp45",
  "key11": "4rufHetGytLZQtsCZ2Q3wQE8xmfvpmLwfSCzJoU6JKbmscroraaaPvP92hr2wN8W4xY3PSKoznWLRU5FnMR4gP3h",
  "key12": "5XjHHdRE5VtZFoxymuwpmz9T7YR3tKa7X8QSbKwehe2p7wGkaECjs7RevupVBuEBGqUexUgz6gDqjm661SnDrHmN",
  "key13": "2KeoYuSrDeLAt8ogu3oSurPj5tbzGk2xCteKZfh3T2apDGmjua4DWCwBGWNwQwe9uEuYQugL96qY5BU5xrVXBSTX",
  "key14": "2zFrJ4EUnCqdEqrRP4ksWmeGHZzGL6DwG52NdXPijcL2Eyyixcg5k8zLbij9UUGhdQnApewW37Eaw4tZYNNccE6R",
  "key15": "5WFMfmZ43TggXShuyqwxieXMcMKWyUCG4VvjEYjMJifkVCyMJAEqHGBxjEbymgmEB5b6yN46fT5d32rowoyEZ4U9",
  "key16": "2sWtykYrmDhKRJVe6cmGv5HeLHVTjPiQqgiBXeb91gXr8ENagN1kVsV1ZwJQyUvHWjfDPZGn1CoKHgjgNnsPPbRB",
  "key17": "3cSYyZFG7TQEgzDHCw9jY6KYXdo54WLkcQaxT4vkoC5RGo8ykf8L4wnTeLgizPgCAgLqdo3d8WXwP6rFwWV1f4KM",
  "key18": "57abjP7DESvgC23KJuGTKjnQ2uzyqk6UdM45CCs8dZBLbf6qp6YGeHqGZMGiXEZS11ns3dKhQWyiS2DEKBg5bWda",
  "key19": "Dv2hneNyL1yH9ByXHUoUk17Smed6T4P8GXi6yCf5XtGMaf74qMtDrPXSqjqWqs3CQPhJDxoDuZ5Q3hZ4mzHfrW2",
  "key20": "5FBsmMnF9sYtcvUWn2Nb2kzBufW7YyN4CYZ7RLPAN1UEHbKnPUc9up9zLtxkhCCwyBN4J2PsscQFzTBM8jtZLLWe",
  "key21": "wsnepHEUEW8B1yiTD8SpCL6ieUMbYy9UEY5MJfvWVSLUYRdMZbEbbRM97tSHrRX8yzont1zUCYgfQAzd9BDvHJM",
  "key22": "24p9hcRj2Zn54va2uCNuPNXMey4LsNR2y7BAi5RybnLeMjhmms7DGpv9GCXd3RBat98uZcXeiCTUynijdFuY362F",
  "key23": "4J42iT457zVqK83wDeG4ZCjjJxrSEpwpMQGiubCHNaHz7ZX4mnbxhf76dBLPVa7fPvk2kP3Az9Ufj35ic6on8Usw",
  "key24": "HTiLTMMuuztYFwyZHTZysgNdCjB1mCwXZ9FzwBo61zLTRZEW76PNonBvWaeWAscd7TQZoEiApjoVe4zbZ7Ai6GH",
  "key25": "4c6ZnKWJBhf1RfShwREf1KjJiwsHLj19weDwuPZS6FpLPXq6Zqs1n7JX41YFv7C6zY1VEdWGsUiXcFMnqPTxdrV6",
  "key26": "3XSwCdjwfyZz2qshfBx1oRjksrusE3ujDiS9baQf17c4srXcDfccS26BZpbN7ES9E6X4Y1r6CaHNEGULParHYDVb",
  "key27": "PTjgHM6mH2gfATKE1U9enbJZj1CyHK6d9ZQ2oAxEp4wKniEN1pGkP6NtfuPDhUW49X8VNbtU2TuuBFd4SqqLKTW",
  "key28": "5mjAvU5EPQ7k9u6AE5jfkdBEzTwxEMemVG1QZkaC15bBf7ViGc3psbFcQZpJabW5HtCjNZmTV4sUSGuMshDnXkpp",
  "key29": "2SXkdKzZvEmWbsoNkwsLdMLXqcuZk6WPWbaPfHJgEdsz9zHvEaPhxmGvHr3gYtyZSBNSgcV5jpdG3kbWsZ6EhjXW",
  "key30": "Vz3c5fkqXTMeSFsMFASnzY9pkPijAPh2cLPKUa3yKTX45Uxo8fsMhTtszGYr5KjmfJ4pUVULxALuVfQHmaSeaXj",
  "key31": "4AvhngkYn1Zr4QjK7rP6NWFhTwriUguroEHzZdzDtj615xRZ8RoFByqvtJxANSHkYGe6mK8qjPh68tN3VrHFPCJk",
  "key32": "2jUWSNkxHX7FEMqwG3y1DWoqZPX8PTvMWjBPYHUJCjmeT5ArYo1kYNGR3TJv8QrbKGR2XpD3SSBxkC2v7uaW8NT9",
  "key33": "HgAEfJndZm77zY4xsmM2dqtUZkzRHYFkPG8MqDx24GBu7Do2Vcergoqn11qsM3ZDwMNrLQ1jqzaNghwFMZdrw4q",
  "key34": "4LakDHutxirSaDDUy2VQ7m37DjGRWJSRt4L1SLwjP3YZJiJZc9eYtYWx2vc3yG2Eb9jnsGvK1jm7pMXrUDfwvHCM",
  "key35": "2EfhtwEh16Fx4EHqXfJdxjkvCxFosuo3LoQFpyKCQGtHjjWpipySQg8wYKoXyF1jh42Q7DmRVAyMju4J2g2d1cDC",
  "key36": "YKLqP57VLVsdMmcnpuQPmcsuNQDqX4x7nkx2t4FY12xmwxmweThbgMBFek1CZYhiFMsq3FoQMyZKbTM2KUvxLby",
  "key37": "zuxN65vMR84GkcknS2qvaegyvjTtsuSRLQ4VuEU97RGRLT8bkkXAzg5mhPw2nqvh21CV2i2HJ8xggQzoRMzSzuj",
  "key38": "3R3oWUMVnF979CSjEtVvFYwHdFevjrS8x3FVeR7bwd3C67yag1N3XkR9zAFmFjq19HsQcQQayDKmEgnjDKK1zMU9",
  "key39": "4iDZgUBFLgGYeMKzrMsqoaScKwQM7GQvZeHBQc9Uvxfuod89TjYcpRox12XPva7wD2wCAbEgXYjVYmUUxsrj3Uij",
  "key40": "3axEwKMGhFvJx4gkg5BA8xUQcwGk2DUfs1hSJzbDUzEbeBveMpdS7oYda3TTjvzpCLVvDHhf5LTa8RWvkcNn7ET4",
  "key41": "2f5KMEka4Abn8RfHbx5yv5HKgD1fEaCVJewakUSW4UHrZDrd1kh2dJfijmDgtiQud994MkVZoQBVLxC218m4R9Y6"
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
