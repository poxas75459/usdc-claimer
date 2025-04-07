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
    "4dgt16t6xoK3CrAVU7ggEEYxmhZW5qXrbAtY4pvkgKaHfdC5W48gZLr5ADKdnTKYAG2ufRaNndv5ZmVmY43XHnXt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S6sTqqzAemxknxBMNPMpdfG6ibAzJGCootawV7SAjZZ9cCdpV88yCib616r91wsuL1L5VE8Z8gf8LdupxtKYDZB",
  "key1": "3cg19e1LcSAZ2Vy3QcBMYPLVyvcG3EcU4xqWf7RqHHt2XFFyE5fY7j55dLqSCCtqs8ZMNkDhhqK2hnupBiAruf3f",
  "key2": "2PdHhBPM9PwxbN154EhjcpVyvBNBg1mZAJrBMevdxjN2bPeeoWq76Sh5cYG8YVvx9MXJAFxxa5VPMLNw9Ap7ff4F",
  "key3": "2f486vjRNzTxkdvRffrvv5jQbKJYPBVkGneScc2ehj12CMjAzEDa8yFVUJGnBsemAsBg3ZRFQXGbZrVWpu8zLHA3",
  "key4": "3Rczbt4nbuxTAg6ZkXwFhHvJD2Y8TGVGZrRBFPhQmEzkezoqhzMRYUiw99WTgL6LbBCoHvvcsdFSsxXYLmr9zkSS",
  "key5": "3kF9kEZJKgGGGE8KYQQCnyPRGxCwnMivzBkHexXYvCbo95ErLNBrpCxZ9R2Jke61pqSdwAWCnuVZBz5TNJECmPkf",
  "key6": "73nebpwtRdqwUfFLm2f7VpL5MZbX5gNkEfijiwXkEmErL9ZjYvXhspmsCxG1VxxKPePTrsUJGFPQUk8ySHWcAWE",
  "key7": "54BVkkBCZem9b8CivnTcfhBHLavHZZFFq5Qe6HfSrKpYArbaagxgGVjgYCrN9XTb22uHJdVwWKeAjZBXxc8rkTRJ",
  "key8": "2H2fEvvs4GGXv18s8scUBX9zaWpyKGjSRM8iW4fxWv7YUPcqpm24rccJQhuEiAcxPmVrj1qbpALw7m1i2TnauFAa",
  "key9": "4wtTg2WN84VzeELWYUb9xWD6aDKvjvWkrZnCbjW5nYnFk8RjBr4a1Seeubym8rKpNVcs8LJEhAA37PrFuoAU8G2W",
  "key10": "3sraFXqom1FF4iNwrCpdFfhaPi6wVf9vsheNTdxTb1jbE9ekr8WRQv3S1CkWoF8ihKhXJBoELWWYx39qUUTDmjWs",
  "key11": "2TLumj6TeynWUGW5cCZAAEKYK5P2kSbyU3Lpp7FUwpRYBvmXdxu6xh2o25M9srytCfgYr35ut61aDFKKQPETrFLr",
  "key12": "2b94pPneftgA4qoZEX4nJq5Cbi3c9jMGMfYVtrzfFad2SZ3k1LkRMhGRL6S8rfLWey8QRyyw9YB263rzfGh7GZ1H",
  "key13": "4bYTh2MGThK8kDRFb77gSV2HjXcJkdU1sHmi4aJp2bYz1NFd7iCJEH37BcJryFEcXvRStow9HedeAaT2DEAPLvD5",
  "key14": "5kqiMPQLbRQDKDyzgZj9pvpuUEWc3uo1Bvd4AZ4TcsHMrupDFXJcnRsV2KVDfX7zyvfTj123m27Q6Wq56yJN9guK",
  "key15": "36DfKp17fYseryBBeNF4dTWPB9aJXN7JFLebqANZmetNtMLshhgj7X9Xt2Lz3yYLWAEqSqU8ARsPRDwdNMAmbGsG",
  "key16": "3V35pKGQRgavy36MC2Y4gmewAU8towGS1F5iaMLirEkz7h62XZ1VemoganEhi6kqFVXckcgxSqybaquVNzJGoWyH",
  "key17": "45zBxLdGMrqbCZy9N8x4LqBpxhBgr18qTKYQ8NFNYaTzuUeD9DXBQWhXpyNNSBxkfSpjKVHS2eDT3wNYt1TKyLnM",
  "key18": "Pi5Sbi5Dqg98gv4AashwoVmcU97hkpg39Ruc8wTeEviwrdm38uHj6G5BM4Yk22tyyRoM1jbtSMQ7mr7AgdLkPom",
  "key19": "3ZdHZdVwYMRNQ4EesbmmTWXRY935P1rf5y44s7kxf3JWsTeW9mwY7xUi7zdYAjtvARMFNd8Kx6rTjoUSDUEdym9Z",
  "key20": "3Kt5xSL7X4Q4yWds1wYs319FCxz3TqBjd866YY7RiGgBVjHDQjKsc7u5fENQELKePtZkddjoirHh1MpQSrFFWhWY",
  "key21": "5RKmS2Yg8q5FnqCozuuorEkhEjR6og4UBrmsiJ1BNg8eN7yUuKu5JLrP7GC2c6qMLtqh8iagmHMB2E2KT5sFKS2D",
  "key22": "WhGQX1yAKzpeAVyYnytknJ4mn8ouHXWwtgKUMsXT4UcWmRk3BfZuPhXQJg3ETqN7aee7cVs7VeWFY2eG1vonAor",
  "key23": "61oAQhtz3s5gcaRv4HaU6fMWEVAAZnqaK4kaWUFtmxGightuPvaYv2WgciebBSo9D8AgsURV4KBTgwsCqVBnAY1D",
  "key24": "5HQcvDWipudhCu9LDaFnwu7rhyQj9aoBRQ1VHCavmrMZvA4Dc6ng9QsPzr98DM5Bv21e5FHvVCjVrJCYCtYL7NqB",
  "key25": "66TDCn4pFpRNgVDmdgboiqoM47oF7Mg7tWjCMdJcQvEqRr4VVApifu72SXG72nMbsy2J28TG52E9htTVRo9irTh3"
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
