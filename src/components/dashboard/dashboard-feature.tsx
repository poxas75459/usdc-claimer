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
    "LKTaqzEM2khuuc4HLRJ4cQ5BLfJve5Jv7SFJPtzNnKnTUt2Rfv3ooYCzGafU5GaPE8q7nZzRqsuVBGx1brtNdYX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BzFeUk31QHyDqxC15EBRYoq4kEocX4vPDZ66nwEGDMLUZuCCGUtogJ1jZFRcuSQ8LrZ9TAwG6qYH9CEkwdNp2BA",
  "key1": "5y1oqRy5LyejmbYy5RLFH1Tu3Az7B8mUx2QWkUnqesZSSKTMTYQ9uxabR9LaUGFCCvFmus2sa367J5ccwarZD6oZ",
  "key2": "3ZCfKEFxN4c3dX8SWwMAk7GY9oL7WPndFqwuiXBqPWCy6QP1oyJm4Mrjj4Ef51Eb1CTcdL8J7DpUDGZXh1aXkPPk",
  "key3": "4YtDfaJWDpjU44yCDKnsJLskvUbon5ahQ9B2mNfdmYtzpn7vokgoVVxSfzAJaBHW7pzH3tfDLpkZC5wNqa1GAMrn",
  "key4": "2d54ZbwGAFsz9rc4v1NyCwyXuAcdpdvZDKxHPYq94DTW1FMh1kVtKNgJhBusaWEkrKuzYiDRreHSJ3hY41wigZPq",
  "key5": "52HP4L2sBQVLhaMiCEZSKZCQ3zrmyu8WvvQgBfrT77rPmDS99Yarkx5yEe9hp389nwysHDAZjmtjcxX5EvqEu7Hy",
  "key6": "25i7Z9qsfjE9ZXPGA7QBaXQZ9adPq8V9zetSYbNYVKRNGdvJGFEYqKSR4XHx5QSSmPYv995px2VSmCrC9HPsk7AM",
  "key7": "4sNmtpFBsRy82oepZM6Eknbg1gsB77YnByqtMGRdsktnkt1neSo5JCn3dEAWCnoPcsfAMcwdK4FjaMD4tHJgcARp",
  "key8": "3KfXEopYYx77JXLEGeJfnE3LbhDP6q5MtPBjRjFzyJUEhGhCSRVoSHWuF8oFpeEN5m3R3c3TpFEvZ3dFpeXwNJq1",
  "key9": "kaiSaoo34iH8fjd3TUZqeV7ESzk9dKzBxnV65CcvnENMZww5KNPS4tjK5j7fzCMPLBFB4vJjKEjpEwoEdn4oSAW",
  "key10": "4svqZhMakeypPDveHFGG4E2PcoQWZs4mvsLFhSxa1z3hrBD8BTdwp7CGPzbDfwUURa6CMYyuiyVuPykxGWKDxZmc",
  "key11": "QZHEcNEnhtoxYMGJ5q1PFUVecvoswBEufpP49Wyt2dSFLhnY66uhcXzKhmTc3ULegLarjqQhCEhmuDvH4XrZRUY",
  "key12": "3tFJwXUrq5P7EdAmw1cCXQvgz2CCwVoXgUYvv7JxQZrrng7AdAS2UgvZw6QSSwQRHMzWJ5MgigKu7QNetKWiMHwe",
  "key13": "Pi8tEzP2r6XrjesR7AdezCJ8MZ2KJ6LSvoqtVGmYR7DNRhKcH89JyAsuyQ2w9z5wtVpt3Bc4piWwr6Th3Ymnz6D",
  "key14": "2h13Gs6m2Yc11FpZBA7wJHdpL6qXpUpGUzCmVxhFnRGZQnxjJ27gtPvXewte7EdeJpwHMCFm1241598MMmn5w1kp",
  "key15": "2L9DHHAnTPymAhBmeLro9MC9TGvoTrUUN56tZxoTyoj6MWMn6agePnLQ3s7rZME2v7DRUE2SbYh5wxFoARaDxFPw",
  "key16": "CDwFw8E5vKv2fidrKCTnmkS3hPsxbEEyKYo8KUXBddbopPxzGybEcEfnM3ajwhDPjL4G6qiQTE8MBZx6P3tynz3",
  "key17": "2CAQmTB4KSh83ni6sgtCBdkGgWZp1YgM5SgQym6MVYEnew9WudZ6ufyhLNTBbAugbBN2xEuohoKNgiNwRafownSr",
  "key18": "DishAKSFBMLqYZFsEMPKrRJu4BYS71WaX1zrAK6EcfV3DPjXBnUrXzQ3YQUsxd87U23ugyxUewEnZYWNjzzvEuY",
  "key19": "2sPyPyLcSMiWQ8naBTs3k8P2fw62d3ohdfUP59PiiLwYscYx5riENhdHayRHcWqpmTPF2T1c1YSiT7M2JbwF5ndh",
  "key20": "4xKaqgaQXEoqxFKQP4rghwYezm3ttK879EAni7Ksw6hNiUyjnGVNFrWuRV55BVdZ2d3q8YXn4G9SuRW9CdDSXArU",
  "key21": "2KCUXQ64hnSofuU5nAxio2WVEZTBBkUWgYLa7ZvP2Adn7dnsTmhxz7KrZcYX7UVFT16ypSLY6m9mhEEuhrg18oo2",
  "key22": "44AJLcnC9pwWyoRsNwMuA3RVeMpMcnhcRE8dmWtUdnvznF8supxmL4bQJKBsz9U26Bg84zbQpw4rU1d2zmK8JS29",
  "key23": "5e76NSpK932oh5hA6go8xLwwHhyo1i9MPJrV6yYnmzrWoLER5zgXEPQPKCpJ7gSaw2k2WTabxkTuhZCm5iv2sGQK",
  "key24": "2qYeUicJUVQtbei9oqYCWuGxZiYabx6Hj4iYzi2DpeDXujr9M8BTdU77SbuSMuk6wAKFCShgJ1inf6nYQh83fsfV",
  "key25": "NEHZnXdqpLc8k884s1Bcq3ozCmBxa9uLNBJozHmNjcWC17KFNCH4j4exbkWErMxEzZJru14gtKF3x2LfgHo68ve",
  "key26": "3rEmgunZGXjfwR3KGcyq2UTSe3a2uqppdfLhJN4jLTsFKfx9zRtHSg1cty7ZE1zdDVLbEwB9DmHpkZMCB1rqvRgj",
  "key27": "42tJ7f4gSg9PaLYc3KLT1aD8RiYkoZRp6uR4J3RFB7STWBPozgGVe8WsJw1eEHc7v3o8kF4EdWq6c6mPVWA56NZW",
  "key28": "4vVpAzUjCbwJPgvgTwczBYRuTgsFnTrMyhgAMUMX5YGuw9XxXqMpU46XYdsNmZ3MWYRuv973kzYuBVHya7ZGqy8S",
  "key29": "4hBNqpDGyu6v4WWwrCeybLJzGxExaUBHWUDwgxyJR8LGFmwMiXvjgqVfYvU5RyTkRUdsDj5xQcwGDof6s2qJkd51",
  "key30": "4FmVsvnnc4mEe7HvkHca7pnbB6Ys8HGhJPYhAmY3YthnjDoLeGczhGzu4xXHsDeUKuof3qsQN3oUNpYiprqj1Z2W",
  "key31": "S4xLUoLXDvHgfK9423zynPmSkgeV8SWLuAaQGmWjfzZ4jLezQVZwkutiwnmfPJDakWP5DUHPwACenzfoQ1UBXSS",
  "key32": "8GobSdK8asagz8BUzM9JcCGFgwPV48SNy7qNuQp9HvWjB1j8MzGJGMTpp9YFiPUPaDMSmz4EwBfoh36zmcWVFsG",
  "key33": "BELDvv1YChCgiZofnhFghZQj8BAmMXXHM1NbfvsiLxVwy8vThXh1TkqGzKx1reVG3ikMEEes5iz279sruv3zCWd",
  "key34": "2AT4GWWrVe8H5jHHoKB5EFjc9y6PMBSyncouDqowxEVMHq3b4ip2Co3Yidqq7jow1DhDVufy7tFu6cbu2dcDW5Gm",
  "key35": "WQ97UviVgE96x5qkUG7AFKZin31pNWHWYpNaA9wijf9GBKsgW3iEAxKKaewWPRdwXJ8N9c6cMcgcDvsZH6qqwEM",
  "key36": "27tsJ9ac2UZD1ELGeiCLjqpXR7uhMRy4gc5xnn2wLbARJ4A89CJJpkcQtRXbeKEp8yQ1VrdFqQjKmHVmp65Mc6e6",
  "key37": "4AbzzxKV5vu1AUifFEtuQXKcQprkZ83eanamPVDBtV8cPootRM9YKQ6FQhfJbjp1JAhZjiTRgtTGWSTb2rMDFXgJ",
  "key38": "bC23Ta8XnJuy7W2GFFS586GP7XTJTFuvcbVXKnKaGKAPK2UPGV25CYM1qF8CMoMtTbdSPErtyMCKEBRMFo9Ho2z",
  "key39": "3QjEHG8YYn8YLdpqAHXKqk86Rhhi27c45DiQcYE4jGwHCLh8vQwd75evVntqRXSz9bwWohxWf7gRNdhAfcNDBxD9",
  "key40": "uLiv3McgA1FoReSHzmwfXbvAX2738VPEL1fEF4GdnYHUXvEfsQqzxruJd3NeYw9r1aYFiPotqcSXWy3ZGRZooSW",
  "key41": "3sQK1G57eWQn2vAUnk2HMgQXnipH2Jc5YKCheUadrps6idNjpsmF3cLXceQBNroLoqZQszXAYcyUnrz6kGE3Mjaz",
  "key42": "PXeinmmtzQPU1M3y6eH2LbpzXcdm7E7oGejjF2UdcAJy7dThhRGTgWxJ7zvjLtEeMwCeoNoMUgnwVrXXLtknMk1",
  "key43": "Lwm4ZvWqmvXecCjngmUiWqPQCaSnjyLyWDVKKu1vMEP398ZUU67ojFeYgcr6JMy1Z5sJAXAdSmpTpGJFC83CGFZ",
  "key44": "3f42sMGPB8MtjcvzrqvwiBbBSY8woEHjGr4YD3R6de5Ysq2aCFs5qZHsu6QQAYhgKes2wfJaSHY749UPL5mjT2W4",
  "key45": "57HDsLqpVHkPA4prU8vd13YjExuW1sgZESepn1gsir8AHp1a56aMtbSERLaBwyLRFesYaeBbwsHGVtC9NrnSQrE9",
  "key46": "3tRraCtYUBt8RKWeZoegpKaUhjhcaWrAPbTmNoDW872q6e3rpEV6hB6Ay3X9ETbLkETPDN3uHqZjahhHTEyN19hH",
  "key47": "3inKjfiK5CFwPpuH5kmbh1jPr9dtMVv9ngjf7qc7tMGquwCwtCCsJXkKM8k62RPVnEcHaTEUe6eH88ncS6UYvABo",
  "key48": "4o9wiijLHaMDqsoS2MDixgDKGaZY6TiXCh9Vne2SArsVxZz93LZtA94fyycy8ZEMW3AEbbC71dH2AWCyb3YC89bj",
  "key49": "2LXjWFBuhWn33nwKX8L5iKxVbAz2WAxSQ8Z3qTuf6hBbsWGeFZaJrzrv7F8UQXBMh8oDokrf8teJzRhRMbZU2Qd9"
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
