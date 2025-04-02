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
    "2njBwuckp4e1WCF6rqm5icJ1U47TW3otuf1n1Ba9T1BFoUVsUPD3qu4yMxwZQhRZqeJyVwt1WP3quCzMke3HC5n9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K7mH6MWYQedPaYQd9qiikTDMKd1uApmj8b62FoVndrCXpsv2P8R5iLeYNvBTLUshkpX7rjnhtZWjshGq4opcCTg",
  "key1": "49y3ae3x6rgMddc4fTCTUFbTL1DqXNj96KaLvS5jFMzzX7uSRw4ouV6Z5PHaM8Qorbu1b4YaBVerivhiqgzborwx",
  "key2": "2EBC6ZYQ4J9nk8Wroxkt6VuNpdibR7K9damjYvkFv4XmZt9zhfn7DF5GGbms7gAsm734WGfLUyQyT53SAiLTqMUX",
  "key3": "2T4F7oWrzQwFKKaKx44FYB7mNsNvMSNTeQa1R6TjkNLeZFaKTGBB7RtaeoVZ7g4aoSesBnBsKMKNQ7LwD6SytdXE",
  "key4": "4SJaLZ76hEVAcxHF6PDwssDfj4kCohqZbEvXiyoZyxaXRz4QMr8LYHQW7BNNEGSGDGEf4VfErxrhYQkcLvZHHPeq",
  "key5": "3ymgPQorpY8zipG51iDqfKzsVhpNKEfGXZW68dmZPssAjVbXRSnhCpfRE5Gq3zGjzSFPcXCTW234MhnLBoS66w6Y",
  "key6": "5kyNX4b1G3NfQKWMHJrAG5rYNg8pXkb7XrMepyko2sNWhLMNjJ1NzbjC2sT1jS4tT1wqK8gQXthQWPSg3cqXYR3M",
  "key7": "3ZtUESGLPX5hJ65Cbk2snVGagL2QYVZj64gM8jrwrVoF1DDT1s81xgM6dq5jWj8cqNtd43VWywnwsWg7Eb5FF8T4",
  "key8": "5ToRPNVRfNU3ZmWAetEuoy4WB4Xia8GKpb8yvyNHkm88Tmk7iDnY1co3U9qVzNXHs8zNX1ytARkAiLjmeXTZhqsu",
  "key9": "44SeqfXnjpH4Fd5CziAXaeCPSFJRKXszJgEz3N5qhjA1KQcpmqM8dmkgd7gghRwdTT5soHWRbFs4ii5Xr4hz6dAN",
  "key10": "2hj3aBNw8cpVo5npczB6Jjqx3yBMhZMx7WbYf8PyJtwuVypfcUH2MbkYLj9UNqj8SJUXWr39qmLNFEJ6Kdpg2psr",
  "key11": "omUApDNqign911UK5KgBR4wfPZi9gnBdTtBbb56eDgjaPfNrftM7uy1H8hKKyN3NyzZa1i2pf8DFEer9siprm2N",
  "key12": "3BLTey3ic66bHL4QM9bRuAZTLrwpUsAB9hrMoVfTp99wTqP7aS8UWMF72c85ZfURcEP3ybZvMXzKJCmap2nu7Pcu",
  "key13": "3C5kJSQzvTXfbLMdeyxuB5miii48WhgSNyYZuSMwGZ1Pd38ypn3aQdP6Gvhr287xgRQkC5BADjxcM7EXNdSrw25G",
  "key14": "2DN9ux4Zc2ibfA2LSpY3rwSRdmUaWkBckfhXMon8RGwddUuysyVF6KGEhAq46YvpYJcxfKmPZDame4tUQNZbS8Q7",
  "key15": "3Ab5VhrhMXrU4mqVJa9PA96yqnhbjY1VRPEuyFuReLVNu8iTXxR7kmSbSjMRTCWvwXKJAfgcPZCTgtDQxRh6nFSm",
  "key16": "w97gVtxm68LRRvrX18Ww21Ba59o79XkzQrZT131Tws3vGfHZZY68hvYVbLNtk1n8pGDS1cWfZZRxC2js79rzbRE",
  "key17": "2usVu8saXNvwWMk4mtYvxKGfVjjTb8BRokaPgPe3U7prJCShEN1iswRH2D8X5TFrATQ8eAPSqL6X9fj9MBpgSzSo",
  "key18": "5vLiDCjHS3X9UvkLJnvxF1MoadVg1v9n1tppfRkL8htdbZyfxuzwqADC9YPhxCNTDztrPJYhj9TX1b3n3dMPRG7E",
  "key19": "ZpQkeHhg3EZiRMZ3A8ixz7rXvrXmdHJ6UYmLN3koFikkswLpNcG3ayCX5n6sCoA3J21Zs86ecpckSFrj9joUiTn",
  "key20": "122TMM6929LJLABxFad3gdE2XNMU9N73YETSKwMvp5nhh4xVMbvAayA4GNEyoydgsGRTXsA5x9qG4QAu3Zq8Ub9d",
  "key21": "5xavEpNqu7XBTCx1u78qfSsQWjanPS8VfuuDVAuDwTE4bWgR9kubkENQgN92ggQKhmF7aTXyfzhjuucVVHuN8sWA",
  "key22": "4jQ3uDrXCsDQ18JoCrwhTFc77GDSakDu7v3i9W1UbRqwDtbHP76EQC6mN9XxziBF6cUkdCdCAoYyk5AaLMWY6cJB",
  "key23": "5mzNXQ7gqtQPG7wPHgRErpQL5PejBbhmSZazqm54JDgp9L99mNaceM2ZFjF5fds2duabaDtitbz9LriDBun5ScPA",
  "key24": "5nFAzy6H6aEuq1j7fHJyw8fMacDjHY7wgXWTjfqFF7eyMLuXX6fc3WpXVx7ox2nbXJdyH2K2duQjhfw79ZHYobop",
  "key25": "5W3nNGu1vPxENqU2Sf6GG6mvSxAKXuSF6z8gGa1dZAvyW4KpnsD4scrgUdosdoGjLvtoUr5hgwpV8TYpfxLhsZgB",
  "key26": "48dpo3TaXBDmMYnJ5F4cNaJAT5Womo3uErSeJVNRiCkMTsvFFDWugspZts94w7PsZhQqVUU3c6Kwn8hY2efkexMW",
  "key27": "FqsyWNVG5YMbZ8d8JRfuJjsK5koZhVQduuWz7NCH29ftmYYHPWcuRMzUxbWYnw47hzcwzJsBRDXhyZNWrYfzijE",
  "key28": "JtiDVEtvrxvuSegnTReFHdum5nSuHg5JxBXFVDLrmgwt9D7Xuj4KC4L6GFMmHmGE4sUzea3F75CFJR6kpEQpwMb",
  "key29": "2Fe5DwHYFwtUsKvZFQP8VBLERJcuBnRzDY9r1gb9dyANwEBTytTf7KzLEy5em9WZoRhDzBJ4tzLyGwLi6S74SjWp",
  "key30": "3TtKCLk8nVtYsfZdtcwUHdug3mpLN8FRn27UM4xLPZEyYoeXqX2sqLVkYzwHC8BXKax2YBz2UofHgiZFNeCJ2iwm",
  "key31": "5XnQkaTw6zs2xSsAX78dvDARZk8eJrtG7pKfUB47shBNRZfpEWbYQLWaQwJAahyUu7hKZPaTLmupMGWpV96bGYoB",
  "key32": "3XMjpizXa5FxtgmxPFRNFS4jtCiso9ooWwoEB6NyQLNm3c8yMp7fnvXc5tfwGG2iYVhUnDKtXnWTpNHkQj47EJHN",
  "key33": "xTT9uLZgXwykj1f7xLcEQUjrAFfRGDLwXH8esRorpXjDypTgRAK7hJMhjjkSNJWQqud4NPMMZWZoG3hNukaAATh",
  "key34": "3KomW8rSDnL6YbDnCKVjv5YsmN4CTVZNyRk8ZhtiiPVcUC2vwQExM6zfcVtCs2uQUGahAV86fKsYVo3gS2967G6b",
  "key35": "cPiFc8imxoGHqwyLkqW3s2vGfeuFvynoiQ7VswUWptgzTMp14MAEwAssrGE15SH9bdACLF2iuEYuVrXrfa2bj4i",
  "key36": "mbhe8vHzAhnFneY37JTHGYuHFMZSdUkEWP51wbLYbXMqy88cmnipPpCfuJZu5FZt9VcCsNQtqL9QSB95bHQxyTA",
  "key37": "3Vi2uMf6gjn7Q5pr2hF6tsu5cRiV9siKvYzp5aF5e6pyQuBv5Za38p6KBtdDQ6db4yNNanGL8aD3aWEdAjkKq5ph",
  "key38": "4sJid6yvVL3NUJHyXrVusaJcacgSV8Amca1kfXh9x14xc8vFfxTrzJpLpekAoMFhcu1Pc1zh3QwzinENDkHdG3up",
  "key39": "Bmtj57vBSyx9rdCnA331CoEBRU9XYGQW5hxvsdq9xFtanhorukFXaEjPtEFdEA5mWQobaoKPp5Q3buLsjFQXMZ8",
  "key40": "5Zr8KpGCKNUzdZBG4WKsYiAaza3fSLAsxzGxkbcoiHxZHkVfQ6TrAGZVLPdynDcwGmE8gRnm42cmKGSjFJ2WQ86c",
  "key41": "5kdvxY2UcHoq6EY2YRydHjWfu5pR2Nh2WNyZDsWGVs8EVHyUBBuYhW7vCGgMLHnwpnufs7tDY8KrFsMppBdZQw31"
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
