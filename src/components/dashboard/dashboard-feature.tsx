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
    "4nHWE7inQ52PLYf65jkkcioLvPyWMGqCEYLw74bALTNtGTqCkDsD8EFSZftmBDDq7Qtpkrbuevvs6pgZ5jLDuHLF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2STkXdadbGD97tDpbRDJwnGvSWCFENYSaFJekcu2GBo9f3jxytXL1xwJmHyesDrJQN2iWUBrodn3iURr4Tu4AJqq",
  "key1": "5fNTuXRvAu8HgvDRF1Bvk4XWZji7GaxxUz31KpxiUxeo1Pp6mzg4o2ETy2x959buK9JA7h2SjtS8TNrLuw6ETGDD",
  "key2": "5DjnRBdefCBKiGZDhm4KDnwFDPagW8drrzgJS5jnrCdZBD4AUB9f4sWrmzfUMHHPxSgMmWE7TKpnLwBPAscMnecr",
  "key3": "3zeXR1njASfVbaTvnSaEEZCVr41LqfkJu9UxBjRJaBDHjvsTEGV8gHvgpCkgBi1UGbdqUMh3fSiUx3RYFzk7Bg11",
  "key4": "2Wf33uMiqHwf5rSte5FHPUFoJ6yRGWf6UpRMrPk3LfTifSgAsM98dQmazxoYjQfk6Yj78UBmAuSmiB9nve36AnpR",
  "key5": "TS4niwmqkr4jsxLKzBxz2XjJY7NLpW3zU4YPh6DCodd1j7nX8azmPFVDS868YBwc8AHDKEJ3eLvACWBDGRqq94x",
  "key6": "zridAwC7JkELaCcSMRTAQ5ajZdKtXs7PettRXhJK1pDB5V5Nnpn5c9VJz4f7Ziqsu8aovCzcUWBvYUveBH8H37Z",
  "key7": "58HKPVq3XDZ3HekzXuPWB15NqXaEPpWn6sSV6AerA1tesszc1RBqqb6LfJFkRTmUEzxFPrTHaB6hTTw1noZDX9Cu",
  "key8": "4oJZfQG7ChpXpKJ1cF6W7SaaAv1XeaCPrvuTYmdUmQdQkZ3WUpZ44H4q5gLFrsyug6WwFAmx9CzBH7mzD532bkSM",
  "key9": "4LKZEoriREuJZQ1yKu9Php4NsuvQAMd4rZZzou4s3rRGhgcLjdcC4xoa4xcNUxT4MXZQqq3ucH6PsGauDSSQoSed",
  "key10": "P4duWTpnahjSwyUpAmV1GQiahAYmTHrZG77tyC1GXVifi8vYCPtTCPeRnEofz2tABfBss1XWMTRJ73XTdL5Jggw",
  "key11": "5RLZf7npHy986rx2EqxFtAWF8JyEQBMWW1u36sXApgrnEVYfSFkJKmBEQwyastDEXRBrp2owsFfeWnKGCckDbC7z",
  "key12": "eexNZKhdeioKdUBhrboYvFYqnH6Qpz3wXzwuLSXFDPPMasMaZv6GeG6eHnN4nXnmfKFzvUSNMkuGTJdGN5nLLrW",
  "key13": "2Qode1Jw3Kk7GNSCx1ANdNbqkrbQkdSBnnSqrR56xVkyEHFNCiGN3U9LjEWuib5wEkiDjcGhriw7XsSNcMSYCkXi",
  "key14": "3PzUGm4GAWuH3nkhtfvKK4jGgwpe2zBYkQzdRaa4kXH1VbA2o1u1XCTf21mF3W29aXxPzmfd3TpbYHaB87LRsxok",
  "key15": "2U7BL97MZ1cNyWwDzBFzqjym7fhUYD18gDNx1KGJME5oMmpf4hwairhFcYNwCUzTkY9tSRTE5t8FEvikjXPECiR4",
  "key16": "2mvuQAAn2x9pT5vxDsfzviULQgyd6gPSdUeWniFk5WeQbo6os1yA3brZ79Aj8S1tTvJ5qk5tH1BLSFNZh66MZeEX",
  "key17": "4ictqtEwXmNxBKWEd4GySWbPKj4q45kD3v7tx8YzJakTtvJS9baReEwuu8irYajeHHx2YzbfLDnVwL62sf7SCw6o",
  "key18": "5vk316ZgbktX4mkfWgTtq2eH653bJukL4u2UzjRABCedoEaCvEKt2FzhaPfQUzF48ic7UaMim58fGwzb3PEHgCEb",
  "key19": "2GLNXknWWPDQkvW7oGVskoV6wM5rHEN8yasPsDtiS1XTtbnx7FVCbMWKbwbL52Pzq2wP4jYuaLo7RBzeRrZLnGfB",
  "key20": "57UUrky6VX3GZ1TXt9ixNSsRt1musQjMvYLwUpozW7pvkuHkz8bEDVFhSwZYKhFbum1mxFVP27oT5NzyGdQpn7u8",
  "key21": "92fKvwKPV7gSvqLEC82g1rX4B8C1n3aP7WcNAc1eUF7thLRgTFSQuxLZSMh5nEV7LPf9KUJxv7H8LLZFgh8YZM6",
  "key22": "2h4iFUeUaVbLtrG36FoCkG9R7v2uP8CrF3dGf3QxovtUk5yLdeej9zqdKkuCFSphiaxh8koznVruU259Lo3NASM",
  "key23": "29jezZeJXtYnKkipBV45wuy8HB9c4gUu6tSgJ8XXhEL2FmVqP8pBXWgGAJoHESciSk4gAsLXM9XjqidupdCWt4T6",
  "key24": "33EZzPWSDtdg6exajxWz46eFPkvJMdtvTY6dEZhBA4reC5FQtmF1Z8KiN6QzHptEoQifXHrwo6FqqsdAZbJwgt7U",
  "key25": "zdkbozWiQjHj18JEdVLV5cBb8f1qeYZ4xAaLsW99xp4ekhq5P3oWW8vjvy8zCVLUecKJhEyzzX34kt7M3RXdtBv",
  "key26": "29gt7gomCeyQsefyREd5h4uAwBJ99nBkefMDsRksYLFVLNZfNSW3mvhb1a6fDSPRK5MCt4MginzjRDxVLzHPNwSt",
  "key27": "3j9eto3w2ZtxAWLew4jpTbwjXEhPdhMMKcw5C55ZT9PTKTPa7EhwiyvzpzdPC1H1iRpac3Cb3MRHY72Ye24Fms8Y",
  "key28": "662J2znfYRRDymLVycLL1v9tFZtpJDcVvgim1u868gG2Agtm2XfwUi6PJmPqy8kCA3bWHAKnTFQWqJdWHg7sfjHX",
  "key29": "3X8DiYKXiQLoFV5Vuq5sCYSNYattVLcv6qA6T3yTfLRUdwQue1kDMyw5eF7fFnnJ98GXtyRH83j8k1CA6Wv7YZNa",
  "key30": "5V6dV8VEko2dBPVn1X8E6Y621X2jyPCB7t8jrnpGWLcvDwWKoJi1apjwVgx8HoLsKTdcrf953DLdw4EmRkkQz4Hr",
  "key31": "3r7TcZ3cJcUWBvUYVnhCn1YvvFuaHfjr7bXGbKwtHp4SHnSh9ubXK77ivyihadpjZ8tM8SrPf8N8G1PrPuS3Q3G8",
  "key32": "5nT87mCBqwiZYWiR5rocWtD9uwUsgz6do78UWJpzXxX2w1WMaTkBaPcCWSND4WmPsRyYg6Q1oMst8mgrTLdEqiky",
  "key33": "45raWdSvsXMSafR36zQpCPEXubmGRnWc5TFEEEQ3Ay69qEBHxJ5B9kAAHFsxGigysak3PxJt1xTxWCt3JubngdMa"
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
