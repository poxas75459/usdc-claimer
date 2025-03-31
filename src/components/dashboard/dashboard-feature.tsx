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
    "44zz8xfDgQJ4ibooQwcoRP9Jvd7tSTQ67DQoWhcVoDzLiboxKEiPc42anLMmbBTteQ9wnoyimZGFH9DjToqb9JW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qbJmPw2hTYg4SMvdx1kA1LPWAtspEKjAGgt8TSHCLPYQ9QVwWxPeewWn7nP6aF8XRkdFyF1TE8VvG7rqMjsBgd9",
  "key1": "aCFfZZQh7jmhm1kLdSVCqm92UjsNYFnLVqnjtScYhv8mbBuCmaDyhFJdPzDBhUDjMFwad4b59i5pw8w6LYQYeRp",
  "key2": "4b65coL2RXzd6Xrtzb22AaiNQ9j9wS8KnSkAft2KoUYhV15GndWehuzeifiA4HtaTNfCGHeEq15EZaNQ6aigAbhH",
  "key3": "3cUqzxBuuMcBuBXYJAxFzPYAyai9Cq1vnmujQCMaF4S6nQht6PhM3c7WCouTLEeWCoy2PcRMXoqQW65heNXKZEAY",
  "key4": "57maq19PiWLmF2bsVk1ok4ZsmBKSaPKNhvnFJZFkTgcJf8JgYVs5cnwHGjwmDjKoasmcZBV8CiJT6PJUX1J6w3TA",
  "key5": "eAcQNviF7jAcHKN1144BqjPtNe7LktStM5dcnctXfAfNsm71ndFJUkznsSDs2cKAHiJC5p3Teo48USezi6gcGHb",
  "key6": "2ukyvDYcoqnUX5ayh9bnUQ3V8gMrJtp5HtG2W6a4zhpKk6KW3JwEtoqTYcJj1CqecsDMX4ozWxgbwUaPjhHGbwJg",
  "key7": "2TZXZX2PKaQLipdjSDzCeAMr5aRBZqbQk8Vz7xcJkzkthqu2HEQtheYEjuuyrnHiMB6fR45fxASjypHknmpk8Kqp",
  "key8": "4oawa1LtTAkJxpi9gKH7To9jTYCLeo9a96Jkrj7kWzXvxBkAMMRJdQfmgrMh9DCf359gVoM3DKuqWezrwUdHcNiH",
  "key9": "3dxDnWmUu7ffB5T7u24tsEZC8svHohfHoncL7CGNpKqDSHj7hFeThjv5J5Q6Lb2BcbA716kxKRyk2ML6X44XD1jR",
  "key10": "5J39Fzga3CiTsWL26n3hGG2tRcaSWXRYSm6jv5CFjEA7Jz8Sf3Qkzsru19raucyt8a6qNCfVmhc9zcq7bgtzki9Y",
  "key11": "5G9bDX4CzcGGQZGAkVv76dViHrPMY2sxjD35sGgp8dcZnwsMe8uz5rQq3B8kVZKFmkfWYGouQETLPRH5iVPCQfcp",
  "key12": "2DDBoVotY5ZesyxgfVuzs4W9Mnek3KmV7d2twmCzmtcApe4BuQwKPT7KHhmNxN77tfhZcKWXoc8G7jTRuZ1hanKo",
  "key13": "4ReiBT3A6C2j3aU6ron6Pvct71Bh4xtXET8gHXt9yLv3SRCJ7Gimsbz8SR3WffNMwGBfbaikrFMGacwc5FXSoKe",
  "key14": "5cu1N2D6Krd4iRdvKNRQaJhmba2rnLKaYCV2rXXt9gEe8Kvoyw69brmCqXhZaB3JTLNd17RBT8npChKbebxwdUmY",
  "key15": "4ousPepJEqx5ueFC7eBVx8bkV9uX36sWoKoYy2SoUkJaNX6uwF4gRutbE53bNgrR5hLufnkRWT1Yp3V7DajYeQrf",
  "key16": "4MqnnfVCHtU6JvXmwhnwgwkuAQ3y4ZyhczWWvwjVKVBfTowPG5RB7xrjqT1PxFgXRbn7eFMZF1eE5hFzaamv1P76",
  "key17": "5m5CfhHsh85Ye3aEtUUzUK8Q3iL66zG9DEGEAe9hz9Zop3UDfTnpzJxUQq86TpBXKrtjoGh4jUQZZpk2ipJKcqwJ",
  "key18": "3VMDtrHmP3PUKqpu5E1pe1ajxGGEFN7bZihk5GCFVz2AzAzLeFakPByFhM9DA9LUqGUwFEL2L55LVFiYUxcjBtTv",
  "key19": "5gNFcBAJEQjeTddTsg7thMwbR7BfCNuF5PEuK7zSptt91nhDW4BjXH9NQyPU5yeYc5zRkwX6tg4jFZr4UqwecRwy",
  "key20": "3mZSJMbUytUZMBWU6euYAbyg3V5wJrcU7TNt2pRDqycmsmdpaLwapdvsNpwgkErzoNHzVQdMCxSTCGwmrGVi5Cir",
  "key21": "5L8r1prsgRD8sqhYjM97bCVTVZuEJ51PrM7oG6zUzyB289wMB3rVWvkxtymv5aNpaLtc6PFiRUWn9rRMURRZ4dL9",
  "key22": "Zc3LWzPpaRmybHvsHeUZBtTTyRuKq96SdNXLp9NyHkX1E6avvC2GgssaZvAmCj6ahMDXVoLcbe83EYDjCYZtjfx",
  "key23": "PiYSQXFAEEWAKKhwaQ8ocTwp7Z8vFEiJy6yMrK4MUfbry8TXbUGmMmeGmnLEaC43PdWD8BrNSW3Hmk4a8DJPeAA",
  "key24": "3UeE3hDdapQ8DCxoBwERjfjKgdSASMtRhE3SrP95binEyrukd4HtLF2huZUtsEAEjtPKDDzKbaqfJHJreZFprwau",
  "key25": "5ZGv3rXvKBTiiKiBnU3qva2kAE9Xr119r12rLQbuKZprycuexXYDzsKFo3eQYRr3wiyxHGfmHdFYX3WWZ5ZUWn8B",
  "key26": "2W3YmBw5Cs7keob95w4VYwPbke3j1KsYTDA1Ue4fGzoXBNW6bTpWufqThDu858VztMcytKqAGeY7tGSNtqrQSXo7",
  "key27": "2xgtoXQQA6HoTVEyoSrQNh3wKWe9muntBkUcBmQQaBqzEW548QJY5XuMbzWRVu1n4GzToAm39yyYosVFW6YLLoJc",
  "key28": "5XCbvy48cvUD4mPGc9xJ49tMrvg15RDUmZSJfrzPzSuQS7yuyJXdtGyJvLCZXxJdHRR4G8t9G4inwWYKsZ566ZbR",
  "key29": "3wjRzQsXZUdLVsdiipEpK8hrygaaJFXWZFoSGgfH3W3w56wjAE4boUSapHStT1AzNTx3nEi4dATEYMA5y5FUVMs1",
  "key30": "2HWRtrPLDaXHyY3F517t2e4Jj2CV73n96RYKrceGFKHxkiFvpzd2VfTv3MzQAks5nURaiW37VKD2rySnjjQ3PRKT",
  "key31": "ppgZHy6niF1wFTL2L5SgZrUYtxmbV4gCaXgutxoCaqPTJzucamUgVQ9uVzh4xmbrT65mzff4GNpUGZceqnYokMm",
  "key32": "2NQUZLyRkM9gq5TCYYHnoV8LLKZhfMnaTfK1vnjVXj5vpgA4aiuDayWFejHdoFZYiGXESRBDYS93FZ7pg6d8uDgN",
  "key33": "534MuYodeLDL1evQmwKRU6MtKW5B7ddZskBPBFAAPL3iuZwnq4Us841L1UtA5bkwKLGvSYpsLMjsGzqNNTAhCi2c",
  "key34": "5uFTmJqibqe4tAnxFkqiUguAki37TnQxd4Q7dydqVSrze277YhhprULYZGcANd3pkPBtn1CEvUk1Q1LaEtuGKpzz",
  "key35": "62bgi3MYWH6qYxu4N8MgfYmTP2Hia5mjJfQPmKYqKG2TKjiZ7je79YKEBodiAXPKUwzXqCVouftzVxQyhEhs689W",
  "key36": "seGmwHG2pmQjqzYPEULFwLV12frjwwTb53GzU5JToYW1ud9kYthKVF6Kr8avV6nCk92TFurN9ar4CPvmmFs8b2V",
  "key37": "2NigPqzEBwsSJVw5D5zTKKETuAUhkYu25xhsv5ZMEw4k6CzLis7aemjd3ZWEY8MgaHp4iqjA1aAhA3ZmH1VEuqL4",
  "key38": "Muh7oNSCFdwfnec9k8BVJGLXGSHNoZpAtaWsCGjStajkFRepaZEQrmPRtMMiiEYW7KrFq6uxUrND3xUHf7WwR8A",
  "key39": "5CUURedaF9WjkmPUzuWLiRSH7y73LKxd3Puu7q2SAUV1vNtYug5xa3NFEJC9WY36GFmBhjcaj62NyR8iXSf26mUh",
  "key40": "4Xyn1LR3MVaAJ7mArXJmWf6Ji1xdvTDQ7B1sJ22wNudA89DELa3TBv4UokCzKEr7aD9J8nAd81Le8CRT5qPfSRuz",
  "key41": "5hqSwt328PVNGskiKJqQafSmow2ro6gfpQYKt3Dx7QFcU8AgcTDoT8yCbxjWrxPHo34wqKL9KCUkiymwob7JzBwB",
  "key42": "3E9wqne8JCrBGX1CvtdyXDRaQTXwn9WBwityXquf3KjPjsUCdU7vaNEUeyYJb3qSeQz6B3m2G5cNzPyGKjLpaCv6",
  "key43": "2ywq1xpwphCJyJ9soc1RwD68B7koHXoPL9ipvS58V8bZPGzjpZtvrZAN4QKqJqeQ49RcKcc14719jXrqsWBPZ7dY",
  "key44": "rytBVs46m8sfTazxBwudMqKTNmidvPiE2YdXiB226ZpmDuJDDohKfGxp27og5ja6EFGBvZFBswKYyR929gjqRWS",
  "key45": "3fVLJ4UD48PpDmMdPPXJhT1MKRrtSFXsNWHiFPe5DegQd7NBBmCMgXCa32TyAVXhTrcJm7KQppYCqd1j2iSinV5s",
  "key46": "59Eb2PyWgT9iUtuy2iT5Ben6hqcyqUTSQAuZ4pZ4rh14PzpZUaCH4udr4VM8x4jQXWjsPoqNm2PLiinNuRjQMtGv",
  "key47": "4LHtqG1ksUegfgcorcmnpUjudsPHyuErh35hCuyFo86jTtt5iiKh6mhGZEV3ba1RuaC9aR7eHWsMaCqH7dXeZDkY",
  "key48": "ZxDH9z3BoDHZbTnBiz2rGtjwLexwb33zvgypTRJvXhunbnW6m5FUsfpvs2TcUzD3yhx2VkQf7QDJuaRFUCXR697"
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
