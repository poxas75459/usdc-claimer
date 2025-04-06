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
    "5ZXiu95SupuNurJMdXWc6AWRziPiRaZDTgAjo5bRbU192b8aZXXnqyPqH3QKaTC9jW5oYEsuKkAvZHiKjirPXPiY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kGeXDYHHX2Vi2oGgCAj3NhFHraeUd8BthxTVNrHn22pU8WdxZRXAHZR96Q3pgaqU3WnCUH3GWBnkV2drrdLdKzy",
  "key1": "27VXroXDu7SP5TMpkK9Jg1Q1tCgJN5Pxg7e4wqgxXFxjf2VrX2oq641ZkpFh2j9zyZHSe2Mtpq8rnVZHKCJCJHRj",
  "key2": "2A8QAqLxrzCtmahYqjGAkfKtmtpPufjmR93tm9CsM1Fu3yCSARHjNpey6KThski4KGVHiGBsBMeqHTnG5RZme7yT",
  "key3": "dnMupTZA3pRmUnRLi39gvzfxW5pQxoma4TQFV2hQwnr9wHUkEN3coCJz9PzReUzxKMjdGvBPqKB4nDeaQPpf4p7",
  "key4": "2q2w84SVfb1PMVg4coSH8Wcb9tgJVRZuKfiJY1BThmgWyPtJG5sYz6rx61tM2zLR4XuR6aQCrepCoGLNaJgzcfVu",
  "key5": "QMqHbCFQmsKuo4cPMPPHX1Hn4hZXbgdp5ZzPSaoEYQfsExVFBid2TMa7kh6BKGzKjv5MiDxfRjQ8mBYEWvDqdur",
  "key6": "3yPwYjY7NzCTo4gZVUmcRiWLgZCK9tKRxyeFYQP7gmnWoqNYR3UZPM3uZbMP98BqGFX4wZKzjjVNLFgGJjtwYkZd",
  "key7": "4w1b3dcpq3TghxpgVzKrBMdkm6GJ6DhcH1gpuc9GDXCLi4Suw46kjG5BfZ4BWGQnbtejb5XzptWj9B5GK5UvfTAE",
  "key8": "5R3QECTxVM4efeajSDQseZPc4pFnYS6PNXxqzrrMGydoFS6X1sPZVsYaoqBzX5bNAx7G5z9H1GipVLdxwWJKLs1y",
  "key9": "1oPFPKSKust7kfbzrBTpjSxon85BphmC3LVBwcWu27pxHsiqJvJhFFLfeT8zvwKfkzQse6Qhi4LDPDkg9vzBaED",
  "key10": "63ca9aXaR8pk1K6mQ3Lp6sPSK1Pnvvm9nYTXmbqDoCbztK1FxQGviTt2r6gmzEmMxPHk2rpE45SZQxE3wwgZ7muf",
  "key11": "275pLmrJVejs2RgPHgqLrT9YVwWFKacUDMnqQZNzHDQdKHT4b1BMdVFqTPur92y2kZdyQbA3ANufFdbKTEi6AQWz",
  "key12": "2V729emVtyVXEQZiN8Be3fWeWGYm7LeJrDJb3eaduDuBym4vjckcVbxUMio4KpRX4T1V1tLnwTDJatQSXpQ3ZkPf",
  "key13": "2Mb6A9RB2m6H5nzxhUGT2iJibYbqQGcnPwp5UCRPxHRCcBHj4ag3RKZceEQd3p5SBFgF6JfQBgBzVhij9jY9U7PE",
  "key14": "38GQ2Ao2U4PFSkyrj3eVC2wKXj3Ni2oTuo7XNZWjvhgqukz4KtMAhdunshsWZBdkpxLJHS9MMhbEju5PQCrngBgt",
  "key15": "5BHqvZe8G3vp9XPQJwjZKDtryBRBDpUwv6EkvdhUb6BqYKKHsG3fV9GejDhqMdYuNtiYS4asbUm71Wv1qbU4EVr9",
  "key16": "667noGi7XurBncvehmPBrRFJEUnCceXchxRgkrL2j3PwZimQVpDeP2tYTtxbXkN4Ndc55bvudo5ik3JEvU38T2hb",
  "key17": "3UhNCCux3jSJGNub6ZC3F9wuKiGYxoVyCeFsDvt8GJMA22W6c8HTgVkNN8GZxxhxoxhVB86KrrCCBBG61VrPPJUf",
  "key18": "411aHk7EmYmf8PFiBqGgYZJN9bNuHjHN9wr98X99S2iyhxZapPN4KnTBzahfdKtNvqcTdgGEGZqYMSed7hbqBmmZ",
  "key19": "5VhTwKX2hKy5WE1J6qurKNV3YQQ9dByTknUDngkNhuCVuHcTQ2a8ayebu8zsDfMCCeKzRMcz8H1tbxm1KfAqFC18",
  "key20": "2XPMRaxwpMGxuXi3ALedaYVAjwkFQRY9Dsn18chyWwayHAp4R4bjeyjUqbM5PFrHNB7pu6oG2kzEjt3BbWu5eAHm",
  "key21": "665LB6NDwiJzgL41eHKm7NxhVdDHmVRu3Yy7DBurK91oXd7EYLrhQ6gTwWwta5Jg9EQcKMYN45voSJ3Ck7ZfnmUL",
  "key22": "5uAoYuegtgvheCXsyeG1FmKXvtuxAGwtS7eqj8q6LdtmBVieRKJbquiME8iwjefrpgdpd72BXXjM9M12K46Fe3iF",
  "key23": "4KSuNASVsG1Lwvtce9jY6Gjgxr5ymLgvPK3bwDzBTnzFxUgGsVHinBDssrcJhVmLzD9bREkDvHNfLYJXJF5woWns",
  "key24": "3iieGpa9csh5BfCX9uXHS7Zze4LuNzSbJeXdESiSaELDyGs8tXMV4PRXMbh3WC2syKDa4vHZAvXHvJBFDBYTDVL8",
  "key25": "5k6p3xmDUbRL26mEqK2B6HH3wpNuP7AKKmsnMGPXfagS9piTmez5ZKe39JRBknmR41jdRmQM3VLqE8Q83m5Yuo38",
  "key26": "46APrYfZHj78f3kG8XX2S1fgC8xfuW81Wuz2DegV5EktFg44RXEc54PXwjpiErZ3n2jGAwcZnAwAAtmhqB1toxpY",
  "key27": "3MGD1Wj3Aidyf14F2NwXhUPtxTJsEVaW9sfCCBG2jd84Q4VnjaKrwv5aNtnMP7sLMcBeffo4jJ4zwo3giU2Cg1Ry",
  "key28": "3adpGtH4fHcZQuMDscmGNDJhtpRtYpHWPdwsnStwaJijEgTuMqraQ8rtjQADyC7unGaNVq2RSsy2JwKic713iny8",
  "key29": "SovJfRZmd8qUvzsmjNe7WPduM4hBTke4nJAjetC5xDecDGpUosPUvRfdwTst6nQcXkDxF2NXGAiDz4QKKeiienW",
  "key30": "3Y6XDtAXGWaKgPJzTBU5pDudWjnxi6yrzQoGBdKomobTWXMyre9ZjS5vCFdKCLcW2DWRwoxwq1qN8qhYKiDW8cuE",
  "key31": "tXDt7e2ytWg2iVrWBg6gyn5Pxs8sZvh1j2hE2gtDjMANrmjYdJPZz4dsj1j25ZC4PW9hLCJbQjB8jKZvCPk1RhZ",
  "key32": "4WgCg3AGpDUBgFn7kj2sxxA2rWRXoDvHuZywAnVuFqnfJHag9zh1kCQq5kogGWpAhuheFNTY6sss8H6P8CDEnkvZ",
  "key33": "m646stHiCaS8BNSbxbeLTXtL44BYZf1XgWdUfzKqSQjTZQ98C3jU7PJRb2ucoSudwVjfXgLqF5ATsuWEocUhX3q",
  "key34": "5ftfjTvB5gBdy3KpgunALBqqMzn1vt85dxHhH5B3my9sGtkwz4FEni55kKZtH5QjWFKG4MtWs395meHQqduX9gvW",
  "key35": "3VHPhgTLkXT47v774jseftYqFVxSC7zoxvfZkqRyvTY3vk6s6qK4CjqHRwuC7NwhSs2F9xgQTuMbWkZYw2AqEs5d",
  "key36": "39rrzs4aNpAJPhUvn2aYVJUkmyY6sSxzuTGZmqwoxZEKsUPAcUNahyqscuSKUZeou4izuyDK2ivD2D7frU993ifY",
  "key37": "3ygvFf65LKy4f7thCeeVGYos2tj1JCEQ5LtL57xaTFAH5d2vxj7JS6CB41X1dxPEzPzmR65UfCpHmouDgj2okFA2",
  "key38": "5FDJ63dx4uFwkLnivDvAh1gmoXia48wfXPF4GT2CYUZugL62baQx1WZ5jBAyKz2qUY5YK7D9VeWdGJZfCFtS9yja",
  "key39": "3DTtEtg3D7zM1ZMoJLSbeRZ46EX1EWdxsmf96j9woXfCZr5AQxGx9jTxoEbVx5TYgq2ZzQHGhXK3p5Qx6kcYocZs",
  "key40": "63qFCtk8kBaR97Rt7bY7Y48i9wmJgfiosYMVcPBASJjRWZvmgRmKBJZAVBYoWfRjuU2NHhDYx2ToqkVdb6Lz4UFS",
  "key41": "2Jr9FPwB7UdR9KGp1MxCxSpEyjfMbYyRJDBaVs2PMQwUbRabPnEVLc4f1rPcdJnCLK8bDRwy98HQo9PH7uhDz5j3",
  "key42": "td7YCVQLAbUpozh22a6soAkzR84unMy1TW7Sf11PJfPveuL1EEZLi6HPCJhC7P1JBSK2DKAkskWVUidDcoWgdZJ",
  "key43": "6yPyy4kKpk3QGEq6D8ACex5fZbyEkNYZdyXuJ3w4NxKajJhYjszG7WYMtV66xXvGLrpWXhgJ2PwoefHt2ZeGWT9",
  "key44": "63dDxa9zmy7uJXW1oDgf7YMTn6eY8Cw1pU3hFFzHGMYFTDL8ZjuNNvbKNb9wn2i73gCaY2mHozfU1JhLHHYot2Ju",
  "key45": "5unBPP8igN3ocNMxP793WAc2KKth1cm4uKyNegh3GZz8waotHawFpkCkdd9P2gBqQpQkEgTnVDhkq6MTmhM2S8ru"
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
