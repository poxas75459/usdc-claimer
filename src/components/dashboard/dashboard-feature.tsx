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
    "2sLdbZ3VarNeiAWiDQzRtwqeWs3EmSfzKf498u42BzwxoWnmDscYjgLMTxDTwyt4Lzh6MAU7QcmzHqnVbyEQZopV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gGrsWFRuXPfinwiVSsB8aaFcjbFCxXBHP9C9GjrU8jmjM8KCNMFJLq4iUtxFmTsBVJP3dHMEdHqvaeWSQXJ9NEG",
  "key1": "678Sm4W2gna4babDyLzj8AwAGQnHmUMadERwgQTzwz3xaXPQvu9rwr1zkiYNQo6JRzGRpA5TWykXRvRUxqy2smqr",
  "key2": "4NgRbFcQBD7xgqbGQMyeNGyoCi5ZUrGtqzdBcXDoHKivPesga2wn2kiXgpsQkHNM5nJrKznW83dxjKwrwCCiXUNr",
  "key3": "2mFb6ygk5tdRmN4s75ByM7yUFz5UiaxMcMQ2oVqaQXBRSYR9u9KnHYGRPsKJmUdT2B66mdYD8D4nQ87SycUqM72N",
  "key4": "2E8biCVkoTTHGYHNj96KnTMEkSEM1K5mqFjNNUP4QmYZrcKkitBcBGh3NbDE95UKLz5ZsBQFJpFQ91x8YcCuCkH9",
  "key5": "3W81szFAyERDBLBETJYBEqTne2koWNTXFhPzev6CdZD8C4ZQNBhiVLJhgh5Gm1uqkwG9fgijp4ZN7owbysTfe4Zm",
  "key6": "5rV7angXr9LcrZcmvgMVZ6NkKqkUDhoUzy2KhpRMzviL5YFvpGaLs8CGGN12x9Zp72x3L5H1tzYiZ5nzpUxYusNE",
  "key7": "5rCZpJG3qnjefsk13ewRFks1VZbSvNRefBL5AUShNuce1EL6kA65VX5kjABezcYW8C6r35M5GGLkzBUoESof8sfx",
  "key8": "2Li1U7oM529k6j2HHCurHeaf79sptdpKn3xWFjqqTkzEurbKiPh2etKzeZ6KGgmcEzXeaSBmczcMarVrboWM3sij",
  "key9": "3JX8p3iN7pnroGC5WDoY1d8HGdZrh1Y8T8QBtiYCcqnFic6EZ2LKkc23DQxUArttAu4ax6r3Si2gWH4wDWzAkVdA",
  "key10": "4DGYfFHuzM66QHoqzUbaTphZeTDqXmRWNqx3vsGjNzBfw4iaCXNno3WcG1McjVzntzQCd2YRsQ3FM8zFEwby3nyn",
  "key11": "h73gn52p1rKyV8Ve7onAkcTV2HTtGgZMPDBLBQroxMudYDHez11GbSC5q7cXxgiSX86DiCEsaK347pNyKQj4LBt",
  "key12": "2gxwbU8dGLULEyLbKSk7nepuZAbH8WGMXuoUKGgZNzvkuCMrRQcfZWPapkNcL8Qzaa12zPJnzj2iUCSitoMdy46g",
  "key13": "5EiDjdLUyrmy3Yb8JA7uwJeTS9zg149nQrn5L62Jvcet8SUu4CKVLeQThRSsywLYf1T9ME6vi666WTHAUb5MTZG7",
  "key14": "3hjvjKubpTPhBtoKkP2QXwUek7vKPcPXEPmnV4fTdmKZLCyJwnJA85yHcfTfBDwJbCmeQT1c53zLpG25zbxjU272",
  "key15": "3X8f3CxoeoqoG6sF31BjTN13ModGNhoUpN7NktaN3riLUuhLnZwzGVNSB6eZp7Pk7efUDZbVqfb4TUfnNWDgZRSr",
  "key16": "ue48V2gxTzaiu6oTEHzaBdPA5dqwKdM5qvDgSXCu6exRN2KRUpG5dCieCwJZjsZr6RdHPBz7xusgU1GAHCgRVc2",
  "key17": "5gBzkDCkqLHmJ6weQc3v5xnaRDk7dqiz7XiovqQT3ijmM1p5pvh87KroPgfmW6RMFdzhKgYxVmNxctkej2gBq5Vk",
  "key18": "5BmZuoCdDyvAwrbaZPuXfudgmxASqW4Wto3g4muc9edRQt6qCGQu9UEAXR7geKbTMRKmsUvPb38M5cBSLC2Zz2D2",
  "key19": "4n284MUjFGSyJ5rcYBnxePGQW6RCHMf6qzYP9hYMnhdq7MCvm9rJ5NHwTa1U2Vk1eiF47iauRcy4YarvAKccVSiF",
  "key20": "2vnkEqkbFzKBV9J4Bg43CuYfCQ79aQM9Q2aUjHWm1dSfnDnXTn348aUVRKXhVa15H66hzKCDAb7P8xdnteh2tn6c",
  "key21": "3HppGfTddYyjEnbHa2LfcZgyT3ubNg54dLSep7iQPA3KBt9TK48QZiP9rRcNwCAuN2zUXYngagqLxqHGWEyY5xnD",
  "key22": "5dhYzhoXjJ6K9WCiyvdERpKe32aRxkPYjfMi3WWxRYdS1mUkJvG5JqWE15ArLc4YmuMcb7TcdVsTw5o6S29bzWYH",
  "key23": "3XWHwMs6gaabuxytayVS59F2KCh1GubV9CFDbqcgq3LQb9cP2chpMs75iiGacuYbdww2Jftz75g8uqC7YRFJVLG8",
  "key24": "GHEAii1r6mJHMf1spz6R4G1NeRgaBTUKCbtvnYwk4FJu3UvmpbvHhvR3hiT2mpSv9bAQZpdPfxfjZZKzhtZ9sgZ",
  "key25": "2P1phnaGJGKbfwP4Nq6xpZ9LNJ8kDZBsZ9CVQAuYaNFjEzraV82pBP7JSPbTV5yB8VShUSy791uRTXAgQrMp8Dfx",
  "key26": "5ykpiWpGLASwHzhVkkrJC8Pjs3fHX2eCLA45n2fcQ7HjnK5Znb1ePp3Lcq1fDKZ1QSyzxAjt6mGUHPkFoPWobqxx",
  "key27": "4kjJbgpZDkKLis79HYQjX6znJMRAQBc9pz9abJAy9Nb2zQabXnaQ6iw8DTPU1waFd2TioLLXPdnf4Ht9DSepD8hi",
  "key28": "4MGLr72JpWu1DYXRbhMsF4QZyqi1Z9FwemLNKSKf6AA6hUXDhUPy7gngnLBLdmra95s24AYJy5kM2fKJGjuz7Afn",
  "key29": "3ZhGjQb1Cnmsu4sd2k2K863ZpmiqpFohjc1aFeyzQdXZHofSb9yq3GUAi7rue7BTHiZaNrH2p8opWcqooVea7iy2",
  "key30": "3iBqgEXSCnVv2nuWoVkZgsmUmNGA8fDNsVLpWDxKx93oueqeciowVHckY7kXwfkZiMJmahajvH7PwNoayQKM5T5u",
  "key31": "2zboNMUeKWNer76NauyH4k7Qd8VzB7eiGhinzykNya3j6d8SP8oVcn6tZh1jC3ThJkYt48H4tXML8koi3wEfMQV6",
  "key32": "4JHMWvrbtgshixokCcJCzj9Xm3xGkpSWHJiMmTkwL39op6gFJzj1ATYErSsEPXhk18XnnXpY4S3ZK7yX33yHtnQ6"
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
