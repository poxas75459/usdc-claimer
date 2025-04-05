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
    "2EhnCwQbuMGyWo9sxQxXqCuM436rBVUYG7JzqR8PiT4Vjj9W6s3zqC1TJB3uTJ8LHBDLQCck68CsSWjwBT47xd4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q9Y9vN6gxY8785HGGWTaSjRf1pUi4m6ABc8WWjBP1EDxCNvzf7zAaxHndLmdKGKBZqVniMW2JayjJPd4nNnY9Eu",
  "key1": "2n9abt6rcBkVMkfpwQPuesEz2ov41TQutAM7Sa39Htfv9mRYAy9JK4iPatCGC9f6GTP7PK55Vrg96xFnPUeVsFbc",
  "key2": "5gB5ostn3SZ67NDZT6dNtXvEfdbEAo8NpvkwSqh3d3V71yzsSKSfKSUpPJ2wzmJG13pffYT5pNKKkU2QMh9VNDo9",
  "key3": "YybkC8fVAmDnvcoj5qSLQmvkFyRpsibbeudpLN1euiCj8sDbJdAtdKLZbJKnzGkR3PRP5eeXow6Rd48MUiTN2Wo",
  "key4": "XgyqwiDrwLG1yk7Fb3CRgPCv8Lg4TGVix1GRLbr95GTedqrkMDGyjmfAZbqy6k19yNaa4JmwPksCZR2nfwwbVTX",
  "key5": "4kBQGnPtipKQEHwTUkLTBr2DXdusXDtLSL7bWBCYjrLeGmwHGXpxHorjj5UUKr58qdjnYYLMVDkCYKKdu67MAGQc",
  "key6": "2z2dtX54Mtp2wDEZju8SCtW9DkxWY9hRV8rs7CMntJuFoQqYD7GQNUH6jgGUXBHUyuMvbo9tyUVhCwRFwsYDhPSa",
  "key7": "2upjVCp2RnuCL6Qbajx7E5gwK4C4zjnqqf94eTNyAXjCeiZCqygRs7LiqBJBSW9jUV5ZZL8KC6yFfaY1LvFyk3A1",
  "key8": "agHrCYrNkSN9nej1biDJADRSabvzBgKtk2zbmY8B3BibEDeKBcYefymZm7cLBuZbjWmVDQtnWaH8X9zVNPtDKMV",
  "key9": "27HvTLbnDovdpzAoP6rJqjYFiZ3tdFP3p46yJWJ3Fvved7v7nNM3e7YU14uw7JFLL7Z5Er9zf6ogfmd2LkmKPjgC",
  "key10": "jMSutR5kAQaP8hP5ouhfTiiXr6dMTmDjqch5uTB447qkiPeuuivTBciZSuswsFyV44Hd8CY2YxrWF7hpgAVENGa",
  "key11": "WsPj9b6Dr5X3gWiT5oS9gtiW3V777zX4vj9XqykxBaULPPxjVAu8ZAjsJyENBBub66rScqqhTPzmkJnPSfUjoUq",
  "key12": "2RfCpuP149NN2gir4E5z72Jm9tzfzdwpAwQy447dQCAU17E7xQRgvzgCsjuysnJJAMKWnmMAiHAUMZ6jxHSfQaFR",
  "key13": "4w9RDR6VktwX7jfK11gTKtjg3uEhuguQjHrYFVGSS8yhiuNNBLTAxgJMuEnuf4EKNH81ghqr2E47jPVnJ4r6jTPs",
  "key14": "pY4khbqY9b2yutSy9NFu49LetzGGU7GA1xLKeBwg4oHyge78fRfdg6r15UWE8BmrxWLbkZt4Wppvn69T4V3N1mq",
  "key15": "37EgzqK63zQtaQgsvq3ugi6ih4Wi9SoshxLuK1Zx94TygSboiSyVcYfghG1f7WXTv8ZDFKFC9beYWakDKfYS562k",
  "key16": "5NCfsp6qz8axJrhSx1sWiHHYgLLJ8PiyQ3krtUUrnLNJMK722QbtWiCQvkkRkLYqKzxtR49cJ8XS4xyyxNEeNbxz",
  "key17": "5UGVQ9wbA4jJgaHiesCTXC9M2gjC9QVXEw2rMByYukGkgheRDaQtU36BUrMBHGp2i1NzkTnEG1t7SoZ6oG84sa6b",
  "key18": "2jDtDiADFQugCZMpAerkNkyPnhwDTkWnQ2q2CWmxZDdXC2NTrKkxPgjd33aEewrkKLQBZirGrHAYjDPmgXhQZ3pz",
  "key19": "24vFxiRap1tWHEEjq7GN8AJnbtMkhfQXfohcpdZuQ4s9QmGy3HekjR6fTjRAeJb3BeVE9fWCAYssepHZsS9ngr3H",
  "key20": "3RoyQFonTCumDwCtAL5dwPeppfsrv54FNq8sUK9SnjY3ue5z1E3eQMdzZe9sfrrJNjtUKTXkMsPj54s968PBGKBS",
  "key21": "5nCJo5ATzyJbTjjHrE8t93UraHCwYaR1gSfZ5iMNG9JZnt8JfpbDDPiXK3bCtsNH4cgSx5Q5AZatEZkZKdmtCj8t",
  "key22": "4onECmvCpdBNyjkhPYB3WsF4nyeYx2xjQoCtPGmBuvjExH7sPdvsGuUH84kUvXNNBVpajH9ZEyyArUV3ZnEGH2tz",
  "key23": "x3NgHR1T2jAHoQEfhyQEmuNPFvWBR9fMVkQXhHii1EDPcFs64GxeHpGxHNnrFuBGQUPhxTzixnx4kzprCfda393",
  "key24": "3ZfSyh1XWX4HuBSW27d2kJzbbymFMtUVArn7omZY48GdM3LW8srKthERv5TQ739kSnuueopB43ELE6YqAa3cWoUY",
  "key25": "3ikyJuMyf1EthATK8hXzrqPtKGDKEs2nG6zUqxYpGZjkzr93Kqjsf8GkEA7Tb8NuEJ7SfRVWY9pX3wnxMXW6tdfB",
  "key26": "2hLRAiHfZ2M6dPkgD73FrjXG9uK7EkdJN9NvJF6NpdGS5bXBQ75cNX2rpHsbFE9YPWjKjFtffgQTAkDF7a1wzLN2",
  "key27": "4M951RtHbmEyRDWABmkTq7qDTARmndJkHkpHE6C2QQEspeqeBR9n5w1To9GThZx59cV3NNm22Tansidiw2EFsuFY",
  "key28": "63m6rXvAR67KjfReoZVaR4nAaK8okz2oghV21HjCh5DkP3yJHqvWU9rX1fv5PDVaN4rvw5KvVJKHcSdAaPGfV4f5",
  "key29": "4zVULTL3kUodwm6WwXo7TqdVf8ufLNUvzrEviXrR19EKNVz5doNzTFpXVm2vEuz8AVcPTWk9mEgwBvtF3xhTPFU1",
  "key30": "XseYTfmPFVbZdp6BLUZ5hvpu9BxcEVi6km8yaxvVhRF2Wu6dBK6DQHkKSX67Xed9Y9oYnLTQw3Zp6QK576MC8ZX"
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
