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
    "2MRAuPRFDLJLtoMeYU5zbDiMBMHZBzFXSgRBgWQdVPkFevATaxL9sDB1s56u1W4L4QFavVxxMaX4Nvo2FFzAu5GG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NfGMYeGVk1nrX4GT7CSVjphrBsRcHoV8LGRYNPDMiBFboDQTKzje54XHGSXxNKQf1vkymq9cNLhwJn4TTCm4Xfy",
  "key1": "4JvQ7EXxMH1gn4nbcgSvKKjof94U7hQwwmgHsu9KNmDwUScTan5bA5T1tYqPFV3rHgw49xybmTXpejU5pNypQWv8",
  "key2": "2WXjXN6ZstfCMR4VCuvHL8VrPNdvCiZfj1Emq9TuKRUPmE2ZFt3hbTiNYKQfYBWZUqoKyX2JovNpC4ejzQkYdQFL",
  "key3": "5iGYncmxG891iPW4h423gXKM1A1wQBJc3dioiMDEDJam3eQSmPRnnvJodq4BZ48qW79tbfu2PES3S3nBVSZBbas2",
  "key4": "4ecuPcqWapMQH16eGSYMxpyzwg2xf82fH2GdpZ5RqVDTF1XP4yAcFfaNvbeNnihp7xW8J6D35pcN5uXxGZjNCjDx",
  "key5": "3zGYTu9ce6sCznv6XCMTzUSg5yvT1CyZXvdFn9Ra1yKrauZyqsuMrVgBuKAKWKqK8H34ZaZitf6jTq1GLyPEJgoG",
  "key6": "4EjW6MR3BQG421P7tAJEAuLGfnx1rbrR7HHdkYxCxVC9RX7vMRmdGogEQX2gobyEqmXCG8hnoHc2efCmoSMD3Nuv",
  "key7": "3KqnGKWiiyP9athZcp7WotsYui8TcNSJdMRETaNjqJa1tcBkK1rrg6ajKPhFEXmwrJM15EkuiuvnaUJtVS5jUwov",
  "key8": "2prUa2G6xS1wiekgmxqm5WBBhEazEKyTkMngHf8MppMrQATEnLw1AfMF5FwkYJQqd8RXHP3yKfC5Q9a6zPNK7W63",
  "key9": "9WkEQM116ntmjeRdcumBEj9bXKk5JP5r5igfPYPryRSkSJSmhqodQjHG9vjmkFwTyvGdh8dV76yUDY4wh49ELUJ",
  "key10": "MXHBwzbJpymBHe3ij2BBv9TqPXKYxRG7YEruMbTYutBMmLzyjrqaEJPGggYBzKHS8X6kgbUmiQCJDvNJxcEDcKt",
  "key11": "5qDX16ZFfQuoSYYGYAtJz7bJETsLbEz81tQV12UtKNPmGnWHSjNCsL7z9k8RrKE1x2gFAJ9pLy9bHYHLsRGryW6z",
  "key12": "4k6wb7tS3QEeA3N9CHymUU2ra7jogq5gBCNT8QnGuyq75z2rdQv91sQu4NbDoZf18Uw9ACqpSbKkWtniYGbm67eu",
  "key13": "2isaqDKTcmW8ZSFN1KgWssBkQ5vmzFn8ixELTcNwUg91aXrFZy6sVbvMHRGfVCTLdB656T5mxW7RbWAVt9tpgDzU",
  "key14": "2G37swFyfKdR1AsdXdG8CA2mhRAodFwoj57Z2GyQXXWnRocbJuz2vvKer75eJ8nJBQLnTcWhJFKfu6CAaRPzMVb7",
  "key15": "4Y4E6pa9kGLLbMApZM9eamxZ2mqKa2UKSbDFeb95AAGwwpKLj13HdJK5oaNdrXwKFFQB5rBijsR1dicQzwqUi1mu",
  "key16": "4dUPUfzF1e5p97waMYYcNyzsZVsBvuQwPS9wFSy6dUybYngZ5hC7JtVzu9HYK2w2R9cm1jXLV9Ywj3Q95cq8VpQU",
  "key17": "5xWuLzv1B8DV3GF6EQuWL5LsGV3ber2yHprRR4W64sy2W3XXhHdhatC6qDTski45DztfwgQ3Kw6FuFHz5XEHMfCW",
  "key18": "44eg9QSiGf9mnjiKcJ9TJsfaSKJCuR549yp3kRnmDpcVoAsYWeX1Ay7n7mJ3vxTBVoXcTCR7mfJAYcBo2SSc1DqQ",
  "key19": "3k9B1S85eeoRQqdPhoNTVbXnrzaNDaRXzyYijHaZ4WT19jpP8HwhR8qQ9XdpdsDVa8nC4Ao19W7pugq7ZCAhfhVf",
  "key20": "KSybKxzEc5JgWZVMpoZHKNp6BQ7BdBe11DYZ92CPpUJYUu1RZnxB1mo8xHYZDMJnTn3oALa1yUDDh2akjnTwutR",
  "key21": "4efyWiUDwgL1tigr3bZTymdiH78BZCZM2agth8Uj3J3L4Kf8zCKuURHVedA6xHfgtunhkWp2VB11XP6rpTRiStwA",
  "key22": "JSx78zdhGW9GzoGaEsJRosGjxBmBQvkLf8cCfGtJ7nPUj1iJG8Yez18BQPvg8nwfDobpwmmvaw61i5dKf1PybG9",
  "key23": "MJxMDBgqRhS2ZXUYtwAnTYz9cvqTQiAC4ndM3wLsYtSS1G5zfRzZbonNTxjhvcgJ8YyHvcywaNj1iB5EVPmaJUg",
  "key24": "3C95M8aydCVgc3XtTF6STTMsCSaEvL2My9FjnFGRGbQQ92McoZoUUTU94iNb76wyUPkVsHz1acSfpsxgbrdoWEe3",
  "key25": "KCiauUwrrX1qfUWgx7pJo8n86youPM5jk6UGByh3D17vzRBXRZ6RTPhvnQR1wQwC6YGXoa956gjtFFBqLVJvVh3",
  "key26": "4RjKdMrVVkbBCnT1SmfcwfuzHGCjQ1bzKPe6XzkujcGVWeRTCXPppJiyQuzVPxxQchBwkt8fGeEvr48M6dQuuDS5",
  "key27": "3f1oqA1KaEnMVe6XjEHM3hCZaBSjZ5pHpHhYG64jsVqqCUy3z4KoPgrurndh9F37cRJJomTDQXxevhL8AVZKYCc6",
  "key28": "2NPV8BJDjK48tBQtT4wjFJQd9YGfi35MDe6Xy8FdQwAZgHG8WS2j7d6FmF3Ex6q3skgcW5CEUmAdcgsPGoiVFgzd",
  "key29": "2qcGC6rR8swV4u9hPjfZqZbJ5otMCp9RXHGHSmrU9tuj1htmKf1d8FPNU1sBqJvqQSHDrKEMcftqEG9vkjMao3WG",
  "key30": "2vDsUByvH9v5bg5veBsnkEZgjW6np1u5rXwL6sN3vqjzxsDzp8k5CxvJxFEWQWVheP1VJ7awN7gc1sNFXDtMBfxU",
  "key31": "4GwyzFnTUqCSnpdWPG6QwxfEYyN7VJ2ScBJ7BHs835ybDeMCN4uxToa3Jg5cKffFurrsAosP3BhYFzB1vzuJVHT7",
  "key32": "3ETU673ogHT96HFEUQGtcEbGGbt6bwhJgbeTR4zUK8A1hXhhvPKod5265cncKQ6FfpetaVbGRguSz3o6i9KuGWGe"
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
