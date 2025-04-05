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
    "4zrsneSXtBhcHK3m4yi1xBmuQHmkqw2oNK5d3yWHruccAMmFm9fMjVXLXKajd4zJCNZXECiFAWz1ckkdUcosYcw3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YcHxagbcVf3i2kUNXffN4xX7Qeh898mVerHXuafzBh1LdGrhf7KNxVLrLmz2MzGfZEo4mNDTjLyvRcYgbfgLUav",
  "key1": "5z6F5zHhZRkxaPSf59CeEh6aN7rMpHooA7p9YXSY6S5H9YRZkyztTcA8YLXzqMbJfX4GUkLqGtXsoHrbhdvb2QFn",
  "key2": "4U6Jmh2GVNfYARnwZngutioLko5ydAKZ7Bdrg2Xy83uBjmmAe6S7srBuGExxJRUzP7ZPtSSir4CRMLzFLKPWkERV",
  "key3": "5fvKU2tiQwtndW8pt8njMrD8tjCd5NKw3JrLnzGaRxcpPFHNc2zn7skHF8pAxrvBo8xD136zjy9fP9c1TgTGWHgS",
  "key4": "2RnqGYGJXkv9dH5soqfRPnd5QxPqLEPyjBGw8Am6yAupE6RgZGQY7rJ99kothk6iVPBphPR8SAoUqMQQoMWbUmgT",
  "key5": "4uZZpUTAjmoeEZeLWGNXCLQmmH2J8iGsUL9LUaa5SEDSBiLNNUYdPDXGtYqKmHfagKGyFLrS9EsoWf3fNebPXyuB",
  "key6": "2PZyjauaL1rSNtJ497J567scfjfHuFatNZVckVnCC4tqYVTnoojBKRrKJF2GCU3tL3uoGVorSXZTrhsmJf4wXCY6",
  "key7": "QmNXEYVDqVc7EgYah3VDk6kNyp8dqg9xcLFgfW7sNSVisP9FidqzS7mHWffDuqDh8mZrRFHvER8hQxB18zLYuCz",
  "key8": "5Gm1ovBMAoyoNnyWsyz1eWDeYUEosiyaUogzAM5n96uUNS8FQfpcivFbDCww9UnATbi9ATpvvq6Av2q6CgaKkaGN",
  "key9": "63sGe19ErpsfTPJvsoP5GmJFxPQ8DChRp5APC1ue2exTWrznVC8iapc5f5KCEfGTak77fz5zG4TCBsPRQnUBffZV",
  "key10": "2PUkuyj5Jm3urgej8N6U8x8bGfr2i6JjBYzbPWdXmT6yQf2s6tHh25KX1Zg18UWWaWP3iCF7XhndrU2imDFg2dJV",
  "key11": "3cCcnQMVhwHThZZdvorYLiGTEuZbv3M6WQ632sxCRxDNVsNqpeTji9pBGiXVBEYttvF8hsnkmvAyN7oJgLCZvN7m",
  "key12": "3BLakPAXmScjxgYZZBRW2MAnfMEXkmMEHRrfWN76RMX4Ax9JuBv9paQPFFWRPykrxDqtbCNF2a6YHR8bxpuNKPgL",
  "key13": "3eY16GQW8R6JaebhcyYMbAPxkr796ELTTsvJP1CEBMG1y4tndwawx1zeXHTcqQieFJ5iApQW9QELSTiHBnFPJq84",
  "key14": "4vdfAHvC9ShrrZfhv9ev6qHsBYj9a35aJUGBUkEhUz9AWHa2M3rM6meQkvXEMGkfH7sXCXq4fAJURGdS57Y3WEUh",
  "key15": "57UVkFTBvjkmnREMJwWT2cUjxMnLfC6wqpKtj2b2gaN5TKZ8jn4JX3aZeAwQ2ZdixkZX7WvBbCBGC5M1FWtF1XHc",
  "key16": "3j93mpTPgEkeVR1ujZACVASjoWEYN4sy8B6Jkq7w2CgnxvuEKp7HkQ11GQFdjVBMEktJRh4WRyuJowM3puQHokzk",
  "key17": "5PuVkwQCKjKm5s2JNGSACG3HRuAR5XKJkUFNutbn7SJgZnsu3H1cGAv1aofppVAi2hPcAp43nEhiJnpKqksCdBPp",
  "key18": "dqobXtCz5r2syQe7TKJSNyzVWQMfkum1XPzvwTcUTRn88CsFgWreSqygEKiU9deJ8e8WgSwShXqNpQ1JbxNwhtL",
  "key19": "3iX9WPTNkKFQxPk2sG49acAcuhPcv4V5Z9io8WgEYGCNjan2WurXkCdPkwxHrK14rvTPDfP6CHK79o8guduE3Mo8",
  "key20": "5FUXkv9h6XK6u3CVWPAn9wP3xbDUqCR96wQpM8QZSczDwszfJiV9k9TomF6vkdBKP1pASdRnhEiobzmgsJfjxmzt",
  "key21": "UA93X55HRi5Ksj7efMDfhGMQnUTW6uh7Lvr8gHvxTDm4YWLGiCjUyuQaEifzPSB7tdyVqzcxSEnTVBXvzvAHdTb",
  "key22": "4Jk86WgA297YuZcLPHXnojXCpQEtHpjHQiRV5jNn7uHu2ccwDWnDeRBBfqJycqTXgfpAZGrFsxVGdDBoykbFT3nT",
  "key23": "3coH8hEHCLFuYtsxvEoWE23syM7ng3gFLy47UFrDxBo8hNJcpTpe7bgPiLFpbFUADVKp9FGUNxJPxk9ghLRPh1Kk",
  "key24": "3nY6qyokzfknCfX4bK2ZVhjKz3HJokDdwGXWWXHMGWdKgderKMP2bk3T4oUpkkWTDh4skLrRcxoQfve3g1Y4PE2",
  "key25": "5qsWqswCpyfsZdWX8pfqqu191idaVNR2eKp8gQdp1FEa2H4hmcUzPhdha7ui5kw5igs7eZeTeXXccpNTQ3YwRNzq",
  "key26": "3LHpbzDjWu7JUSNqE2hJ7ibCHP2arNkKVCS5VXNL22ZcNqF1TjA6FBjAWMEkJstgbukohmvsTCdZbNCoRyCP4AMa",
  "key27": "3Rubr65VmR9qDu3nYXtcC6y5wJQYeZmPP7gtZ6yJ1bvSvLZifEFyzoQDLvfPXt9uoYQZXhmyTs4iY4joTb9gcxC3",
  "key28": "LbwbZGG5gWvHdveCm2ZChwDPFDvGfN8o8q8TeBXu6HTvHVZcRL6AehYQmzLJgzKsqV9xmiuMAgL7NyUP6rs4N5u",
  "key29": "2EREZqqn4YD9PwdD94zMyfTqAqm3R13K96VM8itFdLjoihLeoELaR1qMSAdASEBd5XSPFwGCzxYRDjJd8VXwUFKX",
  "key30": "2gwTrg2ASaCX5v16kxBc45rngpZ52knvZTDXJAnF2WLbd6yKT8RqKZqsWoC1KVGCH5uCW6BExLw5nJShdfYJC82i",
  "key31": "3TtHixBYrDEFL3XubKBmaEdCEFvPoEziqacfEwJZZGABsoTQdSs5rRQX7Ld4WcCYh3HkbcfMchUPyaSxE1dD6w5C",
  "key32": "2Y3XHbf3AREt1GuEYa9AVudJPWERzk3Mz3ew5p6kJHREgdkBLrDNKq6HvzDvkHwiQxowyHNhfokTMxqwbbnQrg9f",
  "key33": "452Qy6xg73tEFQVw38nSm6PczBmezYw4RASqQv9ih6v68chEfVktXzqWgrSGqD7j3d9NeA3dS8wpVoKQvydfnqe3",
  "key34": "4yok2CpxH9e3apze9gbQx6u9XbBC82mTV2bvhCFCbGexVcGS2MeoqW739hVrm2VEnmUzMt2cCyN75NJrFtDL6dk5",
  "key35": "3f7pVzV3PbdrqUkxfbYq1oNdC53dVqvM5LtejW9GJKzjWyLacbgUPZukdDekxZczQuAQoEwiviDQnmRi9YVQNFf6",
  "key36": "3UNCparr4SZc4nSssMkXSoZn6uiJw1rrUWA9ypBTcvQZwLLZrreiGrCrYcV9LYUVDXzHWfAzheRjCv9xBn22ezcW",
  "key37": "MntabuEogS2rn8VBAiJdjHEYCRFajABZnUvNe1HNsXurcdrUp2hUYYhECao3gEhiDfXKGVuWpdDGC54NoQqa1YJ",
  "key38": "4H7F5hVYPSS7KHEpS9S73tDqFPxBRLy7jcpqgR3mozspbWxtedk6Qh6iaJvQNJEj147bRUTEheEWxGDrQ2DSKhS9",
  "key39": "2LQuSESFZJNVwVi1eqfZDwKpCMvP289JmZwE1Qo4Hn6hTV5MfxJzQEZzghpB8enYcTLEzHjrEzihxBKagvbQhdco"
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
