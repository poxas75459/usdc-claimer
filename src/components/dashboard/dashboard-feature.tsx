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
    "4NuVSVju3Z2BTPNLDz2G88aXcefzxGmKcwc9FRCqBD9mxU9BgbTzS8rypM6RSVhtcCMbCZ9pysbhTe5cc7MhmkNR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SBfNDH2DETTSi4xiJEQvD3fa9asKVF8bzihTLtWQezT9E5QugNX2nmmFc2PzXK26vMuiCXk73yiAFexkG3yrpJX",
  "key1": "5rng5H3mLLPuRNmZm3uJXSgzv9LYiyiRowEFodnFSR8G7GDWiwhsZjRa2Y8XmXQ96VuEFfxCfTx2syBD3W5cSq9W",
  "key2": "4Vyqv3F5DBbdnyvZfVPpFBqDgcuwH6xgM3h7zptcYeA4E2n7eb9tFru3KA1M6Kp8QWWMMsPDssH199jbhtc5zVd7",
  "key3": "2cMYo6fdDMgWRqzTNGs723MkBigM2seyaGAa8Rr7RKuzDYyRLNArvUAKgaVf3e6XDBBzj3Cu78Cnh8F3FdAShe1c",
  "key4": "2bc1PNyLZ3aihhk7umB68AgqRJugUy9HuTqEEuA5kL9Ui6hT2GA9T3pE1WJA9wVRzWL5cfQv7MHL2tMBsUSoZj86",
  "key5": "3pLuXQh2Me3vunWm4zUYu7jUzjQH8iMUZsoq3vZhvKzdNmW9eX8eLHgk7p7DD8zxD8DxNqgnTFqfng9fTjWpJ86K",
  "key6": "464SGcdcoUJzQ6TxX5svDDcqDG2z1wXDKBBjkkVcyqG923ZqBD7f6n7LRJr8DPyvH6k6L6U1yrf2Vh55qLPg4qgr",
  "key7": "3Njyt97Kv8VR5ebSCYrPpU63mbUbKSoJd9njnLuZVXohy1yt3n87eLJhSQ27UXM6N4VCykVs43pbZbJqKS6C47Bo",
  "key8": "44XsJXL3MjvTaSEBBYaJjzqv7J72qwY1JWG63UqJSSXSrLwG2TnuMSpM3odP1xGv97yGaonT3QY6EndsKeUV7fuK",
  "key9": "3xgSvJgYzTGEeQSpMouDSbSRQN1boKRunUsckHkVuwMnaSKYqy8YZVcFkCWkx74C213XnbNzBPq9R2VSbMk26kiW",
  "key10": "26AhTB4wiGGheGErzvq6xt7SiyzqWBu5PaA4avQAwy7oPYA6aBbevJvbwod318WgPR7jeu2bSJemv3eP3zSo6u2T",
  "key11": "5JYabo7yejK2KN1cVw2DmNPxhEkzJCP5CZFtk9gnbBiQyfw5DdzwuACc9a5tRm8njoCvobtbRQJtXt5Lb74ppTj8",
  "key12": "kFFaAJN8SR7zM8fFVu7SzUNuEnUmTU1BBKpBzdCZqWHDFRWey1tvA2ZPX1wn7vwTDZxmQjw2ES6ZCjPdpWDzqyn",
  "key13": "zye7hS6gXH8g8Vi1Fgemi26t85uYkvVcoJefzT9Ln3mKHoWSLwgwfxpBxEgBuwMAjjtfvBMoY2B7dxuXpmSHbot",
  "key14": "2r4A9C56GzvbxgsNzDVcUBWXQ84P1XgRFP2jtG5VSV8nMGcrgKYKKx4zk2LDsRz6ziUdsT12Pxw6qYnQ3Rzi1KBG",
  "key15": "4kjeaydV6Pk4Yh5Z2S8PYuNYBftHf4AdyMdkKmWky9uzdX5X3xdjzD1bnun1nfD3ePQ8B1nUFjMpGWAo3AL2DKqQ",
  "key16": "k7X7iFQLs7WR3fPWEhrwdv4ZcbApJEE3aopwNDPCDdqnavYFNeTRyvarbLCEemX6szrzswANQtg7xSNevePG7m9",
  "key17": "NjvgUrR45ndkXQpeTjwu6Er4oBwBYRco7CCyF1zge2eSVSuLJBD8zfxfFLUBrdLAR9bxSWt6mv3EtJKTwtTQKKa",
  "key18": "5ctn1ViVY7Kg3SsdtnwNmPQYZnenjqGbcsS9T3tuWTnDPNgSUbr55ysWxYcjKfypJ1erPUzR2TyZTnyeQF9u3AE8",
  "key19": "3tTmwPwhj5eWc6D4kGcS8HGNhaHuEYfFnud2Dy1S6TBH6Mk9XbFxrZrJDS7PqtDLdZgK7opMowrwrCg8jjrmvsH5",
  "key20": "4WWBpfxhi1FJtAp96tV5R2oSwK1PXSqgUhghxsPzfo8diGrQVXeshEmMevR66DvXbEPyQydGMehbMSttUpzu3i9b",
  "key21": "2QekAgwqzRzSNybZNDgiy1Z6UWGiJaPtPio4Ps6FvfFcQtfUxu7JrpoykvEh95BewiPzxXN6ADkPaYfu2NLRZpVE",
  "key22": "61tWh5BcBqynZLgKJDsXZfqxjLLTnMDFswFEdYB8Jv6N9k9fZviRPevKY8CZWt2WZKRerWv6djq7FvUrEQYDbqv4",
  "key23": "2AL7noX5YWXX8ovfyZjEnrFzQ2QtSuJeGYZrWumdwjbjsiRGW7qDJ2SxsFpBcUxyCg7RHNVgLUQbGfAYdXuLcBgc",
  "key24": "GG2UcpwAopGaPLiFeJAyCSJ6ipKBbzhs6TuhiSwjKVxcRS8jxgmmkhdgLKdwRcFej7JXv3iGJZhtC5tUg8w8nEc",
  "key25": "4VnBdv84k4EfUn5uqwYFspNkFjHDLXFg2GTNfxSgY9nmkQCrXkt5ihqSWM2mfHj1ggc6sQ3NJ7agCmPiBKjoAfC3",
  "key26": "59MQ6rSZfzKMZysh9iSwNP26rbAETn5XD15SwGhSar9Tn6QcPemuAYy1b4S51WBXEm5LZGXAD8PGTTgDYDZPtAx9",
  "key27": "2WZf9gPF2NjD2bCHYiEvHebBP6D1Frdo2CEGDoTSHzGKyGr5AfiQmvuBvLDWLrMPZHvJ39pkf5qCAgm8W5MA556h",
  "key28": "4KwCTWL18Hqu4s13vwFWvDHXgivLexUCRFiZaRNWRskpw7XsDMkuaY9HhAn2AN6o7M6dsZLfyzkE1wEF2wps6B26",
  "key29": "tU5zo4ZewLHvNjjAxXYwgoqdC1WBVqQTqNEHb1VwuJ9Z6cUMv4TU79iQE1PE9mNzMR8Wu4Q4QvhTrEK4qoqR3fx",
  "key30": "2FaZWd5cvb7DKWqVke1ywcbXGUwTjNVRBm7gfVakRA2X79151WZXpKooQY9Wjjyi3C8YdaefoTtU42ksUCpoXMmZ",
  "key31": "BRTFaz4cg8AKqtbtH4REb4GWWKrHmTtEP4HEUjxEgAE6EMGHMSKLGd6it3LDbLzrbn3h3XxHjWEaBWLiHKsy4Mr",
  "key32": "2Cq7LZfVwaudobeY4WtYk84PyBQfaRZbWRg6YdL3bjMFUEyqBFnxgBAhTj7fWCWyuyDMMg6AEoboYaTVCdWCibmQ",
  "key33": "2FCJoSyPwumVErU3aRyMWRdJq8v2t15ZnU1HKc4hAk2MMYpYHK81LdqeX38SKBPqTmGLiEu4aZsCY7YuvFruwXML",
  "key34": "3e3HEB2BsuDFQsU7RrmCeyek8Wc7zJKTB5w29ove1ASdUkTA6HPexfLT94QADPsDmY3ZGizS2dFUSG173pfZjwuP",
  "key35": "4cRnmbAmaSyf7KQcHkE8de9f92gxqiRhJxBDzX99cH4KtrUBmN1zkL1Mvw58HapuPKT4gwfWQrbGdewonDBDELqD",
  "key36": "2xRjHNXqbz8VvuY1ZRadfWXaFyBysTb3PQXcptH6CasFQ2Nzc5C5v6W2N2yn6TJ3FcuyMs8oj1ZEFuKeL6nDwhbi",
  "key37": "5Hr1EfyVbKxwKnQiF3vZo3chYxstvhxezcNYVvhRuQ9ZuDd6cXeB5VUWvZdPDxETtoP9TwyWM9Z14sCfuqdfsc4b",
  "key38": "5au2CsgGy3wnzVDDgexE5t1Eb5horGWQ3CrayV8yd5xEU7BFoMiNp2b9dnTL8TG2KskorrFnGMZkLNVT5kqLmaxu",
  "key39": "4tpgy81bKtnhzw5FbL5gecDjmvvmRtJy1WoxwTGcW28ypU1E8DCsMyEZekTBLmgwCYtusDvj3AXamHnzt2BcZmcS",
  "key40": "4YtQKjo3VmUMcrPELVutG9SFRsM3FTR8Z5qdKVJXzEtnatHL4Yavbg3WjeYggMpJVpeJGdETgfMtvYCvrTkKnGHU"
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
