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
    "2j9qMHUfdG5uRZfb1Jqstc21QtFJXx5JvWabFVDtYEK1Lrr9x374b1LDRbuCk1czjYskadWz3mNhtZcn1GkoVP4C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j7ZccPt2ZcMRQD5BCfsn7pxgS7rWFCtqQxmctqu1dFJFTDJjWpuPnYpFygKfzQFUuChiJYw5YszKV71gRwr7p4w",
  "key1": "8xwK2UX99nWUAsJRjehLrpGywrTubZSjoqXXXx7UZ2ddTk1F72mkDATvyFCXcZFGCFMtNGQLgjwfjvTpeZec9J5",
  "key2": "zkXurYqGW2BsLViu7GV6qMgb5RCBK6RKSxmQqKHJLrvXAQmwffTwFnmfwRr2LbrCgukTTZmdcLPQUo3MyWAtisK",
  "key3": "ae6kZYQMHoWQzFTssipuwtuePeidZVY1rou7kSq7xdXq2Mm45JjmE54ppALLfzawT8p2rTr5CDdK6B5Rzfm3q3t",
  "key4": "28NEChR5APYweu3WmZxEXVwAkMWHKaA3yfBfsLffNo9JEaDYVuBGkwRXPGGP4HsndQSbnKQX43NdkRanrUtg43tr",
  "key5": "3iVKV3KpAdeBAnJKHJMrmtNFm8ZeoD9bmdU4Gz4fb2fSQsg7jpKuoFJ6WeczzDE7ZerJSeccusTBBr49xrNJvJce",
  "key6": "3fG1XuXuymoyJvsGFsLh3sMnLjoQMRDR6dvaPNVpdRb3Harng35J2EdpxPXxZrMWcFoStwD661sStryYNub6Mo1g",
  "key7": "2yjwdf5uu8QXLfmzAbechR7nByRJs9VEneBBtpDjm89Zynne7hZC69N7w5FB65mPWAV7wRszwDyUCLXNb29vz5rc",
  "key8": "4a3j3RTo585APqYkbuPrGpDa73tEpZtTS8fYu6RFKs4G9De1gcewnfCsY9pGiRcWQPrNunhzk4X2BA5Lt1tmdbLB",
  "key9": "4MPT4gh78HbgYwAu8mPD2PJ7Qrz7iv9fR5CyiR5rj5f62aK4vA89TSKbdHyrpPBPDm8iYfnd3Be5rHwKarwbLo4x",
  "key10": "pF2WdgLJKvXrw5izptTBcUyq6w8bFSqDhX8W3fT2bjbVKnUsmbqtN14VrhoJubxjaroAy9QbK8vSoUv1cH4be4a",
  "key11": "4QieRte1SoAtg6qZvZW16EAmS3oo51itXpD9VTLuvrFnq8kFc5aqnSMKSt9aMVNdjT83A7YbVJToZxZNVPV3wPpb",
  "key12": "5mDesWXCeTT7jpZmfU8mF21aV7PHVy8QxB9cwYjHEpodYhhSLJ1n4gNecHy7CR1mfCeTRFBCZRQATtLuxCYCbCxC",
  "key13": "5kG8daZxFk6WD8pWoEjcnQJ49Ld7Yd4Q7Rz32HnGVvZtZmJHWyuD61UE9v3dUGiFTpbdzbi6Kbv9fQUEpRYACsLg",
  "key14": "63dcHx8A81d2MyReNj59SBMrAT1vNdqYWX3GUbpSskr2iroeAWgAvTduyBSF12fZdXY1ZeVsYpakELPQMZK4kWJ5",
  "key15": "5qppioeevpn56E9WRR5VV7LcCdQJesG8sJBWWCDVJvnVyxPp4eZokRYFLdQ7XMszU97mPLLThqbL6i8TBUJ2DTHW",
  "key16": "4P587Xr7vk5fJxj4LSPjPy7nKGzV7Cp6pyCWZRvBtUBL7qcN54dFy1a7aT4aJqM77aGhBY8EavbW993XnhToNwAA",
  "key17": "VFSvWBEC5jdoEHwULtH5XetY5XfKsGT64unhi2uND5UHfo1MkTwsSRfuFv4EurnVUAMRCANxS3Uv5UGYAt3wn6e",
  "key18": "U4ne2WepfQLdk7fVNTVDtm4FxdiZ7eF25HFLaMVCEVEMhHdGZvBuhGbRNhVCRtiNCXk3Phau131heRj5NqLPvjr",
  "key19": "4Dc75QqUPwe16u3vE9kqf9vrQSb3pCe4kKWuXPKfCaZszBkwdmi2s6M1gX2J6fe8gGEzSjydZTrHYYGQDknPhP5c",
  "key20": "3fAt7QY8F6r4NRBXu5cWALJKCdhnXkRBK6Ea8SL7yEnqefG7wGPT3rsMUFouqBYZDogcNxSgwHgXrrerApCfUMGb",
  "key21": "3PzHJnvVba1bqC8SLF2uQYJDjbhJ8ouZntrY6V1GrN6MQxLGRGTkwVPd3wGeodx8zqBgbQvwWCzowZZZpEied6YM",
  "key22": "nBjs3WLHUe2yWMgTqLDBfSBZFrnPWYiyo3GZtPu4A4nMaeBBNKWCLDKEXFeYzZam7wrTmPoguoF1QUVWRkkmgyj",
  "key23": "3UGZaCKLKkrVxXRzqxcFuDWLCtMjNBgV9W3gbgZdzd5RCTpBtQa87nDNUy6quAFYibPuycGKqRWMV6pF6nXKM46k",
  "key24": "3tWnGHQG8A41WaqoGtdPZwSbA6gUQZZ8ExhHo2UNBFHUZnUff6WExzQ1WDX4tu2rfctA6qJ9M6WJmMVeYnHtuUZZ",
  "key25": "5cBg72AiiEa7bEuBPGUiCXsZz3MUNC2FmShZ52rvd3G7XzVBTDA2Ga5cVr5RqcH51iCziLYECx5evctwU7dHELmQ",
  "key26": "4eqHACDVGoVQqoEw4yHkVkafL4PKXCi5mbacUpYzNfKjMpUjVqBcKd5m6L8ia1oWPtyiXJGDsfT22bTjrgyoKZ6A",
  "key27": "4tAEubJ6eWJKmdyHrBA6dwxui8nk3fH4tAhE2Bx7rGFprA2j8JTQzBiM429P3wxTDdyfSseidBXRjsPEXVRro4zd",
  "key28": "2KmXb2JVy6uu8hu8XVQXJzgCAiepFnNXRZGm4GpjRPbbhR9N9iFfyjBuvR1usq2Tw3nsayg8nK1TF9D9QybS7sP7",
  "key29": "2NaKSp5iW7jwjg1miQSNFJ7rHj4Y9CwGvfTZxV78zNZcDJHoTMHgaS7sJEhw1ToSPUz2ZaPwCJYAeDgZh9Dr2wD8",
  "key30": "46pKEJbkaRLZFpf8vDY2C8eUCSY4PQVaAK6C6Z3NbAKge6dYv4788thj8k8uyzkUW62zDC2N8EWDHTTxqGfZ3FwK"
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
