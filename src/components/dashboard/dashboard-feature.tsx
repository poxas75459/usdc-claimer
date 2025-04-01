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
    "2bMrcUrcA5gR5rPjAPfRQdesnwAyrGPYb39EM8Ged3Q7vxYEghV34475oZu3LxJKeoAEMrWezKcFA6K4NSK4gUwu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CFVLgq6KqJsT3gQrye3VTEiCPXLSCRfwKrPW4q1uHvuB8xRwVjoxwQemBqpH2txT3GTkNDjpAUkMzJjB5Fpi4XQ",
  "key1": "28st6ATe1ZG4M6pPKMXexoWh1Z9Utzc3iYEX5CWvjh4h97TcZpwVegWjf8t66rpaoJczG71taC4xCTDVv2mMwTZV",
  "key2": "3YBkqznovT6uPTcsVTqgdgrTZ85uVubWpA7wrUk2voa8Vd95uQeQBSSzwsWukwMjQxzVT8c37ArZHHoMQk9qAajC",
  "key3": "36CBFA7okKbEFn1myTTYdMhe5yiK9vRC2ChykaTLaUuwd87sX6zZFcsG2Tb3We3KbBhdj74T77f8xvEr9ZTUyD3n",
  "key4": "5SBpc4TV6Wxjtsxp8b4qLWvfNKXqwG4rwERk5Tj8HZTGw7GEtQujD4hJZgfCZNvv5CYGkwjDw2vvuPv1pm1F5oQm",
  "key5": "Nw4qoeSQqQsjcQYh4oL25JUG8SFkLjSD1J3qgEjpePya4dVYwp3bZHanr94rGxgxBuxhjQSR37Pib3kDqPct62i",
  "key6": "2mAWzV4sKjE4sCRxwDneBhXxyFXiUa2gmu7qMCikjLsHb2uq2Zp5uCB4F5D2VtKwtgwug5nDY5hWmytWBdNTx7GM",
  "key7": "4s5EUEKudewZJH8caPUE8szXPRSvbv3xzTPfq1GZhZciHF19ohkpYzqbPXU1BH8d3UeqiNzgqiUmQuT6KZxu5Mh4",
  "key8": "3ucayHV6kXa94w2DZqUMXJwYatKt4xfSDnSpYmF3YiyPxpyv9ZjYTF2pTHXnUMiSwE5F93wCb9SUtbHpzevMXd9c",
  "key9": "39dGbzi3ZudL1MDygGF6R2Vo8GcbGqtDGwyY8qeJ4rC5zRCDFwpaLfWTYQnmzp72Pa4pivt5PZEAUPuR7cBfVL9",
  "key10": "DpZRtVEKXn4zEa9j8nTReMKPKxRLBoD9HFeDTLaLqmd2nU37JsqEuLyB1GGnQAt8E7QXeJx2U376nZqHxu9LcNM",
  "key11": "5P9JenNhMhjuSusR1eQfQWVzkyWJfMjTkUTcp1TbioAjfDGcZAL1MQAqdo2oCnELu7kRoCiPdZGZ4jQ6weukHeCn",
  "key12": "3SgiVzg8kLEaphHcqTSYMEVBb3mMZH6m6q8DFR1VEbBkAiSo3A7uNduFenYbfAVPfX6rtY6M8z9omRk2wKVEQv3u",
  "key13": "5jdz4DMvHFekcYcRr5Ue4a9W8AFTLuFQ4fPDbiUdprEGgiFVXhunDt3bMFqYWNdTg3W55uz1ZnSA297f9JYVCNny",
  "key14": "nWrJh2gVoyyht2vRNwx5cfhi7tRXSbdMPbbTJK8DUQFNjACoHdLJEfmFgyLwjGLvNaxF7zFbrAskCTxWvwTPK1T",
  "key15": "3GsuLYj9oQXx15ZjNuMt6w9PxcCeX1n5Meap2UPPcCXvbTei5JfGa32TJEy1YzdEiVRHot3gjzmcXjo1YryaG3ZB",
  "key16": "44gcFDfjEDJFuatNCNvG1JiYhhUi9gfevsrgMVuYNjLyZbgVf8efjDDQcYwHzJyyuRg3QhQpLGZxaRga2ZKyrVeP",
  "key17": "n8NXv7oPnb6XibKgpiNWDqrkU8Cnocfk6bwz3aDv11DbkVQ244aDdxMjN1J15s5GC1Jf3PMsTxfmEbYnhysH4VM",
  "key18": "2mHVRyrXALg2GEkxjDSiangTuuMcprYyGJN5K5X5JBB9kdLZX6bfZcVXChhCAnYgt6mERfCRwwhMS8FmzE9SMdFq",
  "key19": "2aoEb2pVjBqKZMMWrEde3q41PRtKcaLTtFFzqNdbWwakFknDKdLws2ifvDF51hRMqTU2yGb5wzBiv9GFUwHJ8yNa",
  "key20": "4dvPYAAQui3YzoA1d6gkAtXhoD78oe4Q5SgtNNGTHit1yEN9zuJYg7cw9QD3DFpqTK36aLNpsbLPGWHzmQPmGX2F",
  "key21": "osP2Ky6hVPhEswTxHcaUcu5qZY9nNsRAUsatymkhoFizRSCyz61WBkm7FHmZeACv5x69UrSm8v9gRsUoTxDuzz3",
  "key22": "5VLEdgazoMbneqQEhE4iEYqF7ME1j7UXbyazKEqRM8a2WBCQpcAGFe672HUo4NLj3RdG2NppcNDiU672BRmVn5pU",
  "key23": "TSWpriGEPyumCJsFUFxccs2Kp9sFvzNYgHqMPFxAU6VeCeWRpJEvKNcPk6daHnJsApJj5U3RnwxUKH9rxvd8sL3",
  "key24": "ub5cWy8Yo6wYLRguzadaijV7T7o2icPTcrZ3mCyWqvu58fDMqN9BQHjeG7bJ5tHo3XPsi1n1ZAfUqwFQPLdvPuN",
  "key25": "3WhY8ZKtNQ31jx7GgziqR8GLjZvHCrMZPP1ZiHfVP5Tuz4rJLvuigUGSMDTAsUK3UDBU5YyxkFogfysob3jMB3ow",
  "key26": "3qwQ66GLWvG336yTAQaxdX1RtmXHJwNvBB4oVXmNu3ca2TzNWEtvERGtGK8ENVEU2gMFSHUgGAstb5MmQiJX6fHN",
  "key27": "2rjJx4jCnRMEUasjjSBzPm1hfh2iuAmP9xMAhNxM7PTjFbDi3WzpuGfAzsDVV8i9yFWJVZiYy8QQ5DGmUaT8c5HV",
  "key28": "2kXNzNBCK3uKG7sg6AoKMWXRPAVEzfe5JeMFVyVik5kSNSqNamsqsYvg3WyHovLYs2w9BpYoMvF3LVnzL7HYb62g",
  "key29": "3PtJD3gN3sZns54N7QVgdvEcSfht9bxCTNyqa1wbNc728n3MQSotUigKK6ccM3qkpdKim3ayLn2rmcdtGvErA1vu",
  "key30": "3GW9cE2WwHJfGMjUTJgcCk1kQtWZrVd1WGy4rH8znUfKdjGihqTaskz7e2PMBHPfLMwL7yDwbJnRYoKAVjxBc98n",
  "key31": "5DNoXeboT4hjUtfgpqvUzTUz368U6taZSwdbd4PLFpiimGXEk3eDLJm7WTCydhQhzXLmcB8MC85ezqvEKUDLyDM8",
  "key32": "3wtZkrg6WyYzt9U4E5xwvA9SC1t9sUfEYmRw7biQAYqJMF2rFhV5yVhLy3g3en5HCXZAG5qHHXosPu1sjCs5ZkAF",
  "key33": "GetqwJwH3EKCT7255Nv9VB6NtbJSXPsNFJ5GzkgvNJpFJerxPPcgiyzvn5a8XgGnxC6Dhqhbk9YhwT6Dp7di5c5",
  "key34": "2YyfZ683PTHFapR5S8Qvt3edXMZXpY2AGgmqhGio4Em1UaAfnbRkRWfeWeGrRX9A2taAUofPSZPNCQxSzCgL41X",
  "key35": "2yJ3EwMfrZXtQ7ed8TzAkFVGpmCZx4MWzPFrv727g2VZUN4Hxyp5mwetdvCv1315DNS9kTzUQ3HwdH5g3M6doja6",
  "key36": "2eABp7W7utxjutGuzBeS4gjuG2PYAdKfnjVDunGrnsTDyceFM638cWuK3HdHjM2EHzAcEJ4msRfG2HnQcquVXG2i",
  "key37": "2gMScY51jPPZv2XdW8tEoBQU7eUT9iE2SS22pXJy4x5FpPq6b4GesaXodj9Huy24XZ5Ks5bEoLGJmJvC2oNSwogL",
  "key38": "2QcCKo8WkSZ6te44Yz6m5VVCGhLRzuPNFetxtP7yem7KRm654go6wtJmMZ1NEXFGbdMpA9QzWaEkZTvcA6wLehnK",
  "key39": "5NQsord9DKodTBQVBtg56zJx7gQMPKghASstbdRGmVWAtHhsxpru4mMK8CdyAA8ZQCgAHViFeHEjpFcqE8F39JDm",
  "key40": "9K1xmUDmdJciEV18ZxiGe8hMcYULW6svMnN15Wdj1qAWtWXZj2goSKL8aVrfDH5tDAnRut8VTedThz213Nhdzbn",
  "key41": "4rbXbVnyU2X7RWJjByjfKdsieGhQJvqeEypEu4Cj8GaNZXSJN8SQSBupzj6LYpQxXGMfiCtcxm5GtCH3pVqpmFH6",
  "key42": "58gzYosJvC5Q9RrN3HpqqQJ3PEDtJ3KahApntPwJgnhd3fLJy8srwf1kR3jF4xk9Q355b2XAwRDf3P4HHoQ9r5Yp",
  "key43": "3sTmDG2KY19X7L1Q4tPbCfdQ1TktQ2HrYs57pkBTd5E2MjYw2RY7Yh8JZ56bwmutghcLyjUJCYQgLyUkGNHWp49B",
  "key44": "4R5QFPQ8xXPyxqku2By6wGH3wkgL9FrT3B2SAErgrGKHpHDPo5it9oX3qnsyFxtwN3pK8ZMK87SF6Vb2nStxhm7Y",
  "key45": "4HBkBio8kuzzaFLi9edUQy7nZMw7LtYa9CPbZ5PE1iQRtDstrNtMWiPUQgqqQyGfeza6oMaKgJW6EMKMfoj9uuF1",
  "key46": "5DkKKN3VYiDUkK5j98TMnUodnHkHb6futuuiKVNiqvYTTRkMuKY1JBhH6QhzE1MKonDGp5wkgUgNANULnovRZFP",
  "key47": "49iQnynGjyXh4sMS4mRxceVJSNwNk1mkGPJtLqEea3R5hwcBLD2sbNyuoyvxNAXN773Q3MRDL4qRYqxdrrjMNeXQ",
  "key48": "3GgJkqvgHUjsri5wy4CVwRuWZSbzsS9H69vWuAjiz3wSHJtzDV31HSNDorHYDwmBWA9kqczo8yqaSr9MvMGxmUA",
  "key49": "4dCzJ7uybP7m6T5tiZid6rnhMyp7knPgRWcQU5S6TW22nSeQLDayyGxEhnzTngj8s8HZJRz61D9Pbkm3DnP3hvRW"
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
