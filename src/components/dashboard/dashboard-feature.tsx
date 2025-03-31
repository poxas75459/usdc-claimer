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
    "5C1yNRMtpVUdsYqkW5rQBy3QpoQBgvXLcPqFeAYmMpnjUPipqytYb538wWm5o91K4Msx9uB22QMNkeQWsqZVaS2R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aRNweU9jkHJLwPjcsvnnXbFbvJ28wn99y6HiNgeaZ1cfuPiWLZ8At9y51GEaUVqz473sgADmGNbuivASB4zuvNJ",
  "key1": "2APsW6TwyFe6XVtvciLNe7AjRFiXhAiLrcbbBD8qZvvkgLPA5c9HcC9hepUcMiKwRN95Dv15CN1Ubr4tw5czXfSD",
  "key2": "4vmxq5nDzntSQad12KzeANeL5tQneYiS7TJ3hnR8WACXzs7NtmDMzLpSLxjH1ZHCUE1EtaJFeoTU1BrYniC6bmhQ",
  "key3": "3svdMZPNPkBKSS4nkziHtJk6eE24qVq5rT4nhxV2AuTkHQPq39acZVnivKsf57EwuNfM4kPJERu7PJmSm34NRPde",
  "key4": "psaqPZ8ms5qHeAFiUCGi7ZhnLLniZG5bx6jUhEiHrGK5XRyFjyRCtxUu3JuN3eAX7svMnwPzR6HLgeVpuFcd2M5",
  "key5": "4BBdewQkj8KaUBYh1i6tFxRgSqXoSzj4beDoxe2v6ctoRmzkmdnUzxFzdtfWFJaetQGkLVoPgYMgfMZpXEDydwvi",
  "key6": "41vAeakBCQy1oCsyyfEJZ71zk6iUrsHX9kKkv7cLV4yNwqacDsabzM7VXkdQ7oME3wAXTseqXbGtbXJSeuSuuivy",
  "key7": "yQcrAiKFuC5sr4qbpdvUPCP9ee1hgUsxUnSjbuZcHQc7HuGuFmvmEWtmPibCfCrr83qRj21tCqbvkmnqM4uHVkC",
  "key8": "5VxEF4du3T5sXVc2N7jPXY67Sv3o4BeTcS7kLtcoLnaWezbt3buTgBTNS6aFzja6kmRtuF82HZx5UMPmEMT6a6KW",
  "key9": "2K4cSCMvZDBNMj8x2MBsPY7PL7du7RLvW5foKNgAo98dniPwqJrE2bxD5PPBnUxsM77oGDRxox3osCEcWKjjW4V5",
  "key10": "4akA91DUmBw1V89iPiA9DorfkJDMBbbXRXiAj1hopZuCmuxmdHGkHmmyoCGEQGja6xhfuBSMW1NRHLfJivYY1QVb",
  "key11": "5U3BwPL3qkW2UqQLrK4xfDWtRATRtkrcVZrvkARkN69EkYoZidkyAL3pF2y1ZokQx6GeW399M2ojDZwTc3oNMLLU",
  "key12": "24pR4MvFj1zh2rWVZaZX6mYKsmcdsEi9UANnpUv293U3kkWMgYTv2BFtJofBsFWfV1RFhyFPEEC2TaRuWYadPAHy",
  "key13": "4xrh4UnngzUAuvF4n1fXARi5sk5jqF9WvtpaoWGfA73VUGfjZKBFJZLUrzZ2AJReLcxowHbbdd94jrXsUdKPa6mu",
  "key14": "5HxYoZBEgj9sXbVj9eoAAL2oriQ7RwL9FBrjx8gfuFVg3wLt9Yoh7mvSN8HNnn4XJMgRAs7LqXapqiAZFDEG2qJA",
  "key15": "2vboUQaSQLvxvSbE4Z7UUtQbXCE2D2rix7B7qdDE1E5WEPmV2sboqwXFzp8fAWcucHQ4WDsD3K88n8WJinLH5QoZ",
  "key16": "3djmTbJCso3RxsFHE6KgtGg2MeS1YjN4xyrmqHRwkMwwYzjaKLQYTyB4BQ9rQyvNajdaj97y3dASYwQhzeSVMdiU",
  "key17": "2WF6c6Emz5HrZcFE5cDooYRyBGrjdc6hDraz8ncTRLE6Lx6FywSKMQWS8uYnN4w6zPxzzXdmJtWi6rj3NXXyeuhA",
  "key18": "3pzsi9ct25Gk8SpFUdWJrJnFA3RSRDWrHz3fiHvRiGB5gX2aWpWmoDGm3RpWm5VtgKJ4ViZoPvbeRMqCSLnhRb9a",
  "key19": "5mcQGagwxbEeoxbpr5zcAGBuodyebH4HW4cypSSbjstFHfhRHthj9tr3LSx3CHBQBJeUirbWDq7TEN6DVoaEQmUt",
  "key20": "2SS5gTRMrRXDqvNVGQZAJDUmv8eeQ4eBeK2SdyBdmA9rsLfMtBErAJcX3h4H8WCQ9KNqsioQTPded8ZaNXayPP7v",
  "key21": "5rwKrh1NvADJhwpJe3FH9gZRVqKh5josCs1LbbaiBTn64pjcWDBBK21DksZii866KpsK8t7kXcpj7GxzHJBSkrQh",
  "key22": "3WunNjpScKCXgZH1oUHi9XsHawT77byKymajBzLSp5ub1hYDtzFc89UX6KAFUNWi37dHsYgLPMJzXdzgrVbgz6af",
  "key23": "34uwdnsNEidzhiT3mR4p9dRUFkzKmVEQz2DgxJQavYrFCUPqb6DMVLgqMLgnHGxB96J91nkmEnVj2dUogtz1j5wt",
  "key24": "5EiY8SrBYnqN28eMpyDAax1vcwvMBmuwK82KhQ4mexV2xawRgehff6byxjPB2obE5KyguvG1ysgaWgsxoBZ3c7wC",
  "key25": "zLeZcVvG7UH8yYcDZ3JCPKWNtYNzGpiqTDwBCm2EwfY3w9oZX2Dy4yT1dYUA9XTHNHatoG4FZWgrbHYECiFN3GW",
  "key26": "4CMuU6KSnbqSbnLZhAvedZF3yJFmLdtZMw6GyJWkPWJnp3nEvfiSp3FhYFCNRSFA4XKRoxMySRpRNdyniU43jeqM",
  "key27": "sWSHdi9cGDLg1J2ucDRcH9RGsy8aiJxstdny5uMzUh7r2bKH4Km3GT6jPxBZqe6e4dr5jDxDunE1iyvF9BogEcM",
  "key28": "5NgKLmhRRQ1g3p339jwgJ762CDGLYp1TMkBSJAK3qF3UyaZyzN6eHsesN25UtB2oH8GRBJcTaoY8b9S1WhKFP5M3",
  "key29": "qz6VWx691741csRuUNzGYM6VQLXyCdvTFJaTT98ZDJoG4gC4T9PjVYRuKxJ9mGaRp9JptZ7D4jfBAD2NAkmSvf4",
  "key30": "4v8PWaZafoPWNd9hiSrZXpmuSBXX6bYdaUCDPkbQjJeQMhPbJHUDWsjLKriMVEAqp8fvMfGrzC5hreg9nCzyqHzr",
  "key31": "2L32k8ib9wvYB5dQA2wvuU79kENe6gfrzomGaa7JvFphDrbe158pXhX49vKoxHmXhmmjUWxEuGigVWqhoZjwSDpG",
  "key32": "2zvh2Jh4VbsYwMe6TTQGQgCcwfya12MUqFzZEvcUB1vYKULCjnL6Md9XqgntbLLrE9DBSJpjRz7cZ6CdZkSkfuAA",
  "key33": "4kH9u2zj6w45DMV8YrbttsVYAZoCxqztB1cJ95D3tVXfCn4izbnA3yYcBXgwMZ4P7k4r3yeoYKTR3WMAfDy9TMBy",
  "key34": "5mwUdAgbAmtyHKvE1kgKrJ8zMdRynyQLYiUcR9UybGbLbRmXQP9y1jMb2qB79YtCsZeeLG9Buh7Gc7Wgrg7FSAva",
  "key35": "25yE1u1ii2mCbzDc6v6HdXzatiE47TYh1bYvF6axA649FUPU2tupxYgqmZ4k4ks6dpJFgLmXvxe8hEaqpUJpdXfu",
  "key36": "4cvjipggKHhrbvAoBKZgKXgig3iBeFXejoxK7Rw4xREgk3P6M24UKLXQBkoVypY7h38L2KQMRwXsgvP6TPH7A545",
  "key37": "3SEBZag3GeQBvHjxVCkmeRrgUmngm8t6LMBYwaHbstF8NK5vneiYq2D7qgjUKJ7Bve343A238Uec8GmzQgaTHb7A",
  "key38": "35Z4JKLGPN2auUqJo1wuAwVtSbMSkiYqnDPyC7i17KrHSfprcySbWtp3qHewrjMFaSs6Pu2WTnJSHzstJT3ZZet4",
  "key39": "sEqWZigQPvYtNpyWGLWHSfjC4UrXdSXYqVH58tRpawBr1Xm3DiCWWZEofUyCQqDGXVy3LMsetC9BvV8JDK3D2zC",
  "key40": "45zipWwLyrSeT3HcXEuZUJMYkcaAPV61UuZXQhJqNxo4yihW9pQVkPZAb9VzXAR865mx2ERUBG6UKh5rPY25gXod",
  "key41": "2kwcYrY3SrR2YMFGKYmJNQYDvT3bZPMWdUq9gLv7wj4fRYGJxeWWEnX3xhzFnEiMGykoHD4oGygJBFwL2xMBC6eT",
  "key42": "46Rwdx6qBgpGeckvVb7CS4KSGt3PSUTKGPpRRrD4Sp5zbU3LJ4CZwHuxmKGwt3LkVbiJWt8LdKr4kfNwG6D6nJuZ",
  "key43": "54BjkHu6CS9CGD2g8P5s7NoN6ViTZ8G7yyJpxbty3S4LSKMt94aVzzPvSwKDXuenQeqGUsp6k8eudkPTvvVsrPcX",
  "key44": "5pBAToVzE8TCNkKvJkyoR9xu6jPV8jvqj1ApprXzvvkvLVB6vzMSEahgsViBj5Ne1SWXfUbWbQvVhmdfA1XMrurQ",
  "key45": "ARgBoDpELipuLBsoZKqoMB8xvcnP2MnG2Bst14Yjq2ELXTANZW3Wyrci1fAS4zNcerr8DyUXSreoCYwArtfuFqd",
  "key46": "369wiBaK6KoRubE6eKgp7EQWxXnwC8RNP6g3AFBVqKBZ4vGY3iUSsUQ7W1ox6u9rALEfaKLe8ttNBr5YwADjHt7s"
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
