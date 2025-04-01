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
    "4hVvgHtjnWVKsHxs7ZYu5pMrREmBSDdBTvFxg3xWgpKvEwYkkxf9REoMsjXZfZWqjBSYpdAAzxLMKbhtMdoZAXWn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tXK4TSjwmtCscRxcEr9ZoTYfcfgDiY9Dj5CoEMC2x4gTkeR566zFuujJN1jFWvBMQSFPvipEUkjWjzMh2f8yHom",
  "key1": "35RQJcyDkG8HbcbF8xuEBx8VkdtDH6GbfFyzfRy41zh7u9Mi5b4bukvg4yuxY6MhhUQGBbZvSUTYv3RquVsEHZzE",
  "key2": "3MbxuwSndLQydQX1ArCk3PToxQCUGTL7skKFvD7pLuwx3PPqEG5sKC7pEu2Tjxc9V3dEsV21XAPZ2Gip7NRzoEKe",
  "key3": "66s4fUpyEwMk9XB6ehgkyY225FkfU7BaJzpS5TUZdguUTP7MmUL7dPTBE2bq3Fc7zqAUTi5XNceq1UC1oFLVkLXf",
  "key4": "44QsauTSnWdJf394N9MqhGwKvjhH3tDA5Zqq7RpnHuPTXqYFYiR4oHi9c1YsxeUkriPg3Kx8LUuHeTVrCiWuHnrm",
  "key5": "3NqydVhGXdGhnA6UW2Aojju4udw58LzqCh4PwrsFm3b8BpN1f5K9R2hhU6Nx2VR958oj8ATk9XKD6um1waFrgd2Z",
  "key6": "5yRL3qJ2UnJcbQXxkTam6d48UEcKZG7zzwYXMAjz8yeXJprRvgYCS2fZn3icRezayt6wajSTWSkPedyyh2dqAM35",
  "key7": "5iRbR8JujFU5ruQBa9tNNwCtSQkAHER4SaUP6Xv9rqG42ekLHkcsfu1chbLjqcbyoHZtkWus5oDSuYGDDcq48DA2",
  "key8": "3xg4nHk1Ue5Wxto5rgbWhrW77feKmj7g3dbRKcAe1KDP8wGLCysvCBVy7DP1wF97Z3mfHNQUEq7y6HMAKYU5Km9u",
  "key9": "2q15JLCmmHQUPeJmH6QaV59ZQhb4DgpNGPKLCWQJP6cWANhRMPdZVhzZoRqux9YkUUBdCVqVEHTe8SsMCmdgj7wJ",
  "key10": "4kKumZSeYnWP99wCQi559EPX5y9FNuivJbBRTcUuoBaLfTEH4uVEdXALcLEN2A4pY81hjnNEFGgvq6QoCZt9482V",
  "key11": "3tn1SrwyD27CXbeTpWBtyTtTNL1MzPw9nm7qsKMjXcWdgUQj6wgbe9ReK5TfPwB8ifEjeg6vR4TyRCAncWa9GuwA",
  "key12": "4ULTqoRHi38z8uXD4Zwp1187zTzCUafYYcy3D3pTFmkSYugfHXuFobtwWGsWk4UbuYwia35ifKDNA6AxYZzun7C9",
  "key13": "seek98ZQWNGEKKRsRi2E9e58MvXDSQQZ3RbFEz7jPtVfveqaW3j3bX8cN7qTcKBgGVcjGA9QbX5BGJTPsNGyfmN",
  "key14": "28Ed3iVAcDuSVQqM3ycvwpJyDom7EZX999a8WJy6r7cSfZqF5acKdY1RAehmAQaJcDJc6XS3wpLMYzZnSraUYLzL",
  "key15": "5g98t5tNTaZaC7TcQuCJgoixGN9Q13Bv2Fk5Xpr4yr3GEUserjgTFDisxhUCeHK3qUdFaXJ1JCe33k6rPLQESTt5",
  "key16": "2z3vQv7nxtBhuvyj4cJ4QuJtcfBtW8mC4Rjcnw9fvVM4bd478yfyN7ySXAVFpZ1rDoSsSZ2ZPUt4rZMdApzcKxeK",
  "key17": "24bF6eQ3BzTJ6ceKeAxTrdhAUzvyP2fgvALiHZ9gmNVhNhXD7GfwwefQEVwbhc1JGGywpFN1iRpayQiWtnGv3H7p",
  "key18": "3Aq6QEMnAn65D3tRhU4f5hV5DAphsQYiProHod7AwXkbMETCzVqzcnq6PZEF6kxPbi7reZXNWCg6jmCya7Wzuywe",
  "key19": "2qrZTbouA5NGwiA1dwcqUWcVhbv167tCAC35KqL4zx3WoqAtpTthe6PPt1YAXzWth49fo45JM6e74TvrKdEawSbk",
  "key20": "QQXnaQJZYJytajFLh4uKm2hJmUvY7a2DUgCA8DQFAFNEiiPVXRcvDM26bogcWLkRjci3ZFDMuwCmfeLHg4dUwuJ",
  "key21": "234ncV2LXzKcnzmz2A6qsP6vfPz6EGe6bQSbAU5rBuq1Km5E1gZu87mQ1BaxGQ2aR8ntL2Vo2aaHKdnY6ZGmkhPu",
  "key22": "5Dcco53qb6X6VicLKkKF4Pnzf4w2SiG2aJ73BRJir4PBP4XZASLBauykdscykgskH91BvoUUkiswivjtrLHDknRu",
  "key23": "dvG3dVocC6UgL1hp99QR8JiVohn5rgo7NuJ2ccAWzemnY1CakREpBJJF1VpJRzZ97Ko4peu7P14txvJNR3Kufin",
  "key24": "9SEiWuvgz28ZEN6nCcgruuiLRw1wBieBRthG4LeXmiz8C3KkeZ9djMvKmsR1j1mUi3W1STLKyN93SfNuf5zZMWQ",
  "key25": "3gSx9WxdbbLjxE6qtKy4Pkujua7ZB6x5fvq23WAXCoChAMc6fX2EyZkN6Z7HyteMaWeKyV5EJcczT681sAbNTuSm",
  "key26": "afJYa65CZAsQBLZFPyueChvswSWkNaWkZWUJRFgzWtYvesYr8hsJQSLvk7AoL6D28QoDhRtRCwD54updt1qtiJL",
  "key27": "2HUASceNQNqKic7ytNkRocgrq62mfqpBhrJPFjVZ7L6kKCRCUUYC7W3UF6tNAeSJkR3TmSxZAL56sCMqHknR7WEC",
  "key28": "5xEcxc6Gm1WfePFtbq6fz7wWLUmnioAr9Q3g5wo5a3LLxu5aVeDBN8G6PRRyNzEtRAmQGp6pCG7NaacGg8CuYGPu",
  "key29": "49p39Yaybp7t4PCuA6NxZwXsZ5vAiHptjcRwkYtHT7RHh7uASoBySGnJhbqzwg2rvBVkNPttVYEififjagJbkAV9",
  "key30": "8HKmTyvvhEJrAwbgDNAm2EKyRk9wYJTMqqQg9adhxQ4UZACzFQ7DxNVDqv8QWzXHkukKHs1NMisUdqFm2So3JLw",
  "key31": "oY5DSCfMKU4dBjrP8kvyKdH9HX465YoCcTLb1EA3y4P1pVUxqxoUiBhhixa3gDdwvR7ek42vSfNwaEyKgcb9Wgv",
  "key32": "5iTR2yF4mGKUkUfWvAK7NtPpWta4n8jxGjMALg197U1E3Ue3ueGk6EQBLtrnA4ZW3LB216YcJAcN2AYadxhYTtBw",
  "key33": "2ZsxgyBs4ht2C4jcMNVGMVpwxssnmW1M5jvrHF6VTkT9JThBUH4kLM4MXXnLNhxx6X4dvPB8EUXZQ8jB6NAMtryF",
  "key34": "5vBPwTLvGqbiEA9ymcYFCvMKcSqzxtVmXxyCRS1cfHUus2HhgkhVgztMZXGeNZ5QcSKsPQ1MicL2zCwYweD9KWjb",
  "key35": "2QMWwcoMrwyfTbGAMXuYsswbCLxAAK2MoC6d1AtXootCYo1pRBjur1Q5KiDcb7jbPVXA833UVufbm8Jx8Jc7wEAs",
  "key36": "3PCnCbxVHLtXVw25rBhfVpBnbthCb7nx5Fyt7Ap2PWFxonS8ctxfCdfJDzRnVdLju5ipxPggvCg4vWBv5asU2nCP",
  "key37": "KjRN9TjmXmDC5hkWAQ2WjbiqQCwAH1cWYS8oz4AYBVUj7qw3cMLwkosv8cUXAdFf6wRu8LAL9p39aUPwzjP5AeP",
  "key38": "h43ufKTeQ2MyNnfMsj4fsz17GwRjnvLBRjCKXrt2411v72XxQWo6VuGnroiPTyxyjY6ke3R2DS5uMSf2pm1Nsra",
  "key39": "4XEVPwHTS4bRsJop42kB9QFWRgWdpTbRqGa4K6JQyfPnVTuiBfdH6qDBxpp98XqEZTkujCPfz4KxBPX5NCnJVjre",
  "key40": "21yCNXnNmrwYXwGqmx672ao1RdNpiUDiPwW3oCZzUhRB6SXE5g3pFVK353S8DZh5MxHFhnt1u7LY4BfWPKzmtgK2",
  "key41": "QJRFDVtZGZdfemWKARB7ohztgk2Tden6py4yPxsozUtoVs2ykZkbzzns4jkpetxHF1yFz4BrKHfjmhL5tgKs1Rf",
  "key42": "2S3AjEKETx1aDaCUTCjf7XSYUc1sqHagtMrB376fHA7S3vcWj2iiRETGm3ha9k6L9Sxar3HJy9gRfBdASdriL3yx",
  "key43": "5yCLyZphviWY4v77GVsazzxbXM6f8u1vmaNkTEZkevmGQuaqJ6RnPP6adyz4C1ApdJdVxsQYDCci3VyUFreqSrg2",
  "key44": "5bxz4ufYaPSyHYWMQhGumw4UDhpVjARZinfWKoreguKrvh83BPki2CiDwf9BvS8BimYBffK5MCug8KwaCBNotemd",
  "key45": "4a3GFjFUa12NvYMXYDyhTXB48tPNbXj2tqA1Uc7NJ4k4FjbqEkNopAgUEsoGbzMJzmF22V6CUPz1xKBdxAiai2eB",
  "key46": "5oqQMr2gM2qU2pz4ih9NHat4NUkGbDTsyDzvR6LZCaiMLFKVZXsJe6w2fHnsgpegvLEzbHgYuLUNuD66tzxCnGqx",
  "key47": "66DFequsDAV6tZRL83drCicb755N3yPnHrRKEngi7moy2hhxuX19FMMfUL4DKfNgrf4QA7PGtFpK5J4KQdEZP4JN",
  "key48": "38MRmgQNVYR3YYdDBg8LsSLCyTkDsmjBAjbad3Sch26MWhgEAfHDWPxscjdMTPBFBQ8d9KTqwDpqQppsWqhXG5y5",
  "key49": "kF8LDi94oLyPHxN6WfztHRrf2EMHDtcGVoT9cm2FuYVFwzcFvsjNH2NuyTDpBrncAhEEXpfXkumZ5n2VtB2oyg7"
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
