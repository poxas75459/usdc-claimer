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
    "3FZC8ZLb2uL7C7mMFVEzD6yPRoudZf49o8Xf63rz1PYBLNWQL291Y4XTR27dqoLb6ekueeDnmKhx7NgqdYwRDkUJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U1AEUnjLvuG8RV5TqHtayBsi1tfmAyEfF1XrEPYT8hgQQjJ4kEX9s8GSA5Vc2jqdBH68jwVz4sEA5tNxTmmmKWn",
  "key1": "2PrV6ZET9pVHCg7v1vMMq5Tq2AVbZp9QJRquu2vfFix6Uduqcz1ZDJ5J5uRoN48FivWLHny8FFmMpc1zw6m37wPh",
  "key2": "34ksh6bLrcvtm11emgV8rNcqRAXYDrgbCZ7DonQk1aL7NkeTJjEATiGSfS6yTyGFTyv4QKwv4Fu98rwn1xEKgS1L",
  "key3": "5UYEk3NgUgyA4KH3S8stREEY6MCQBPTZjJ2jBxjujjpAUnF4C9WK4RTL2xYLkPwdM5RENrszLLtBNhnpRENuE87G",
  "key4": "4qp1Wdw4JuNDFzKASnX1bXWQJFPSmcriPin8HviZxrpAxmVrs73EwXwpq5xFTXM5EBmasx9CYtBgVWyEvJywW1LN",
  "key5": "2BzM7AELWBbZp5FaEsR7KLCzgF71wxHmkL9g61C1uByZD1pDjds6uK79gLeSs6Jqa837GRPiAqVCz9xUzvPAAV2B",
  "key6": "5qQhNNsDHkWcoM751EbbyjFuZJVHWi2mXczEnWbUdTNpsvq8jtk4BwYQSUTF73sVFHmCdZmq4qzQzamybDDLAD8S",
  "key7": "4NzvwGUNivyYRRXVrzsXd9BsDy4vHMgzSrjU691YdP2BSb1SnKEHz6aigDCgYKCSp1vgLvR4PLYhPCmb3xmb2LcS",
  "key8": "62diBCDFHGErwBT5XbDXTSW4qybmhtBLNzNmgs6XRX9xmE2c6moGwwHc3yCZ1t8jTLh98ptqGe4F7x9HxoJPt9ci",
  "key9": "4Jsoey7NRKp8eHrzPudsvrJqriVyyfF4a7EdsnMqvyfbJnVKVgjMDPdHPWBimgdRxpVchjYCEDUp2s3bDxaofMjS",
  "key10": "246ECMisWMxP9kaFvXVwEqN9kqaVX6LZPmegjxee4dNS9WWzKEbJMJfTVYySyuBioEsCGX7b2RtcqPPPkq1zfByN",
  "key11": "4dGHwg6PE6uXKKaEkuNJM5szvEcnPJFxeFgwcQy6gYRkBAZXq1xtCaRKgsFiq36AGhVSiRZGShmcBQPhnjYjCz1",
  "key12": "2xBjpkB6KSSV2CHgPipf6wzPFSqXrkn7GAGcRiimFpwUR7V2GkbZv2WFiuCQsNyqAuz1Cvp1S1dBSDM48aGhYuAP",
  "key13": "69FmLqzcSkgG2jWvsFfCBivjgvPJFHzwXvhjC6Svg1eSSwaRGfbLT15X6C8yz75tmhPJ76PiZDZvpTT5TVhyVa7",
  "key14": "4NdzYZ9gBKWkToyvZB1aiaSfqmpryyNs1RebJhEJAJcskjNRGC5ZVa6EnHZ6k5akTLFmDNsM8q2qpL9UcWLUGF85",
  "key15": "27TnK4Dz4G5Aa6zSHMhLgBPdXCtsxF4ughGcgqrTSkkZSd68zkYupB4sUs1sSsbShBXYqipfPFUnHA4MUDx3QnYT",
  "key16": "5AsM7kr4k6z4k3a1oLWMppnAfBakis5KWhtHHstYzx14192n6jYNbfmsnZMd1nPf3jKPR6msBASZNLXPcDydRnVS",
  "key17": "3DhpKhwFgaeDDv9j4qx2ggoSVPWoptTXB9ZUuay6wsYGdrzEEHE9VMGjZoXciGqj1T26GYdxkQcqXPuQgx39Htf7",
  "key18": "3oZBQiwhhhPgh1wzhy91hoJctfBhVQAQUPZpnHHehNH5z6kXtA59TFAopriAhw1iC4K9VjCcrCVhgM1aM3Y948x8",
  "key19": "JVCSvWSNZ2iQ4vD4A7mNDMY6EmKgLbCNTY2G8WRcybBsJqhvuAp6c97AKeaEnoBGgzj7E6QAc86pLxS9JoxXJg7",
  "key20": "3Cx5o95KasZeogHeH18Mh7o6sUXi6NVGFsLzpnT6eUbyrpqE7s5VEsyy39UzsNAz5H58s2GPfUqPGk8mnig6bNro",
  "key21": "437NWcnaoSWZGTkbQqyEJuJVzKanS7FGNzwRSEocY4TRUSFHbywvX6N5dSRhzBCxz7NwDMzjXs5TDPNreud18Rb5",
  "key22": "62DnztcZS3hyLTqdfL7PE4h9ctgB8bJBr6Ffo5cDjTB5U9oWy2m7R4JpN1srmGeunaR7ADt33NbYmHbmtKWmwic8",
  "key23": "3mM1PAonXUMV3ozKZ6tUJhHsS3MV23fHQMYMgXoc7SRjzG5q4pLSSTAqx1hFAf4ddPQ6WbnxTk9Q8f4rnPu7CsyH",
  "key24": "4XcqPQ1eLAjAG4kEbVeYeNqyGDNZauejAMJatTxdfQYyEzGHtaGk8f96bPdfwKwzy4rirQDYWXr3by4AYLRJgeA4",
  "key25": "4swfZd6it8Pkx12qJ36ti8p5aRxhAkj8HXcAx557RJK8M55x7BCtnqWjD4r9ZRHiBXjff7JKH9Fnk5q6fH9eEayN"
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
