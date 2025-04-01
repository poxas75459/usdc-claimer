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
    "2LmE59sH8ueYm1dzpMJRuQvXLMDsBxNR9Cfk5ZZ1oBbGxP3DMK1rbmeu8wFas28Pwn4DKRfw9yUHmaPEn61SUDFj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MCHUqUnEqDbQ8fWReDXeSiK2gvtUM9b6YE5gXfkCFdnL6tpvCk1uJn7HAU35NXppiR3bMdpsht1ugSVRTsPhgsL",
  "key1": "4PSknr5CY84JvGdsvAi3xk9AiFRVRUY8njPmLS1T4ynKUfW2zVZ2bTfEYgDBvD4RdPpNz54zYFEKifPZ1ihYaJob",
  "key2": "4vKNyJVp9gbJPoaJMzeDZziJ8XhSAhuz6uekXJ7jjjv5LJMdaDEf7A1pCZwZyqtZsvJmhLQ56anKGULzWdUypNrw",
  "key3": "3x5SAbBZBDe1zipm5jcRrjJdo8vLzJkjg8FxFyjDUPrQ1HhtVPwF2ztbVCh1Hh6UZZu1ACu5YYDFNHVoKVcjwWwH",
  "key4": "48K6NuvhTfmLk8yCyMjtuKVzeDtb4bYz7MpZ7iiorJyVX9R54jPx1orMFaAtxnQStAGug71JqRSi3RZWwy2FvjUQ",
  "key5": "37hVwsaL8dEGEhZxijscu2uY8Y78b9Xq2irt1TuBYPSjBHbkxKyAFoeK2hht1F65cxL7uy6PB8oCWRnWV1m3MdRy",
  "key6": "5moJqUV6UAaCCK912CAN3kV3xk9x1Q5HMbw3fgmJK3BexGh4hMGxXPcy5kSwXfUTShZGs85HRGDZ8Rbu7suxYYdA",
  "key7": "3SJvj9BByyKFhX2bgq9xtF52M4DxuC3m9fVRgCrqxBpg6aQgkKMzpVfLKZCQKTFDEzDxMJN2zwSVqh885BT1WsRc",
  "key8": "4fs3PQZrGdGFH1mcKvu4o3PqSg84pHwf2PrW1j1CtMC6emMkR87pjVKEQL5i8pkX2SpotUoo1nWxLtvN9Cn2MkGs",
  "key9": "3p3neVwoswR5V7A4syxoW9DRi2D6aFXbY11H2W6WQi9un1wptHcRFgA66eUjXXixvuuthNoEQptro4VBjYZvL1ES",
  "key10": "5KEiiJ1khi797GgZYcTbVA2xjkh9PhpnYSowU1MGnkNX7Qk7U8U8SrnpNPjdUXj7zq72nrjffE4DyqhY5L7v453n",
  "key11": "2QpmKYsUQjziUh6ZnfnmrB1SedcoD8JufhwuZsXgXPVBkHzcqghfs5YfJHS4h2aAY23kdHvyRFhnggHW5EryZuMG",
  "key12": "4HweHveZWUefLheMP7R1rEwg2aRfDrxex5kYCJNhNrvy1pB27dc3FkXckQ2tFZTLRBxrW1fuB7Vv1bVLjzJwmtTS",
  "key13": "3Bx6mtUw8z7yzJNMDcADSh4YTg8trekULVMpNyPDE7cwjRMzSC9grN77YVMGyESzsvcjcu1SjHtbkLnUS69FUriW",
  "key14": "4P3W5Z8M3hmajLaneCh3sujUAGXdoxAE356rz6hkPHnxkWaqW6pChKBoaXzDAUtd9KCiFQYk7YPsSb9h7tC3R78r",
  "key15": "3QieVoSVGnD8SiXHGPDbXtWdA9CWnhf4EdhFYooCNhKBiy5iGaHtL1GS6e6icn2iewCViCY5cNSWrwrQAR8gm2MT",
  "key16": "4wCM9YjLNokyyGdfqgNCahdL8jwsrzqxTCxfFCZDQw41mmbKBFotQCrDUnyzwqmEfUCjLRoGQVw16JgVEw7LwTRX",
  "key17": "4q52PujzyhRF3gxQbSS9matoz5YupRq777bCXU4hUz2ouEUBbuhSQBKPFNRyfckY5wAQP2BhtvqmgczRsTRq3JzH",
  "key18": "611VBcdD9Boq6PM4c2W7ZhBUEccfNwSkFwJy2XReMa4hvPPrGC7qN1m2WZ6MzFEfTjWUqDsLVxPeERY2hRmAEV4J",
  "key19": "f2SdC65uv53y1kRocXzfPDfHMHPDo3t4dnVQBcXspEyPfimXeJjhb8CZ8dWcqo3yuG2KTybeRQ8Lorv5bLsSL37",
  "key20": "3TM8DEXFWgWbGtbPbxtpx11doMjTctajP3VXoPF8eEuL7XDxFZg4J3V54hy9v63tCK5CP4khCpc3UzWgTFjcRi6A",
  "key21": "2jW6ocAWLuDTwuyCkqC6468YEHzuSe3YGwijqxkocSdy41jy1RBiurqbGUmG11AdAPVBLRFGKodH1EGix34iN7em",
  "key22": "JfpVNJdkYPW3pEus5bhaaanrRJdsKJ9aTd2JUtwkadyNE78w3NwSdKH2kYrNBsyLoM3LfH9xB5hqPe6msudfgr8",
  "key23": "55LRa2fuYjUQii5rvR4GY6vPPbjXc436xAE1AbVyuNpiiAAgZBW9UptYUJ9oSeV1xcFBhnWMS9ZfHfsKy6yHwUyV",
  "key24": "LjuzKYifub7pavj3ixGAco1WqmrxYLjXo3J6nDEm82PVWwLyBbt2ZSVZrxtG5pmYgDj7MdafhsG9ZEZ89EQGHt5",
  "key25": "3YSBhwmguQcWLD2LyZe74yE71hp6Aqb9Qgp61ZmfoRut2vsT1NNjrKgQayFtKM5aX6gP1eNfhqXUYUpZ2dcS6GF3",
  "key26": "4RBbJRu2BsGj6zrKujaweLoUWiPjU53NKTqfc31CLtKUFwmF5oHUUMdorWCMKm3LWzTeXng4rd89qwZxB2Gqzxx5",
  "key27": "J9Q8JXFNwJRZuLdMyyJ18R8drxPf8TbvsDVkYpXtJ9s8AX3HPQZ2iYSs8Lqo3mx3nQTsB3azhTerm9Jgy228qUo",
  "key28": "udJDnUcxeBgmQXg13jVZtBKi31vPj7YM9MByWM3cXj9W82jxBWaXcGFGDBpeC6sJeByg9MkhiFc3Q4CdtPZL96Z",
  "key29": "zyvQd2qDK4rR6aU9Rc4ei6TfbcgigizFMt6eVZ2J5sPpyxTNxPA5JSS6dd5oXc1QkcXpsFvr1dPgZgvJRwiJABX",
  "key30": "2vmCatYQGxgJbLmn2g1ot5bqahnTmSotme1ffXGRU8Hj3WkiigSzY9agVE7nSxFdMjM7C9CLAYUTCpAUQsw4n9As",
  "key31": "2TtQkrr5HvnExn2yUNEEZLRq2mdLzxy47D1dk8XqFESJDXjpyvQHL1mYyDPaQcQ1st5vzX6r6sqMBaDWDVHb5Xgq",
  "key32": "ni7EGuN14ySyhugv5erKxhjfwuxhyFAWJeTAT41g2X1zpHkin1RMDMFeUTci5SRgdaJY3YtSJgLB33ag1q94MXW",
  "key33": "vUbD8CY5WeJxnV3crWf9pZGYnpEDATo61NYbdnyR7vAA7WHvK7XUh9VYNfoKJSWwQwmb5PfnrTxK7qdJox4Zjcw",
  "key34": "4zeA3UjLiSA1bw8mrKaHuVeLPp5NWBruzRoKEC6adH3wShR3AAzagpiSJ2Tgy2iZM7CEd8rcf3ysYg3BkKvXqwg5"
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
