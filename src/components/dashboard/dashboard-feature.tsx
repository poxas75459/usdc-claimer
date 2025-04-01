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
    "YPq8Uxhmog2MFbaFGKJU1QCUdttVXC7AaazWRWnSeENo3Y6Fsd72GfHzeZE6skHEJuWBgVmqgUGrz8BWuRkmmCQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53PdQH6u2SoX1vNTStRsNf2U56ZNxqnQ7j3a2fkbhbvqQzSdUC97BqKpHD3VTkK1oyeUyrEWDjnrUDj59aKhQ4bn",
  "key1": "2S5bw7a279LCZU7APCsqZfooUXBbRDTkiHmQ5MFTcPno6HsV7yZnVprMpp2mrMF8dfraENyRE7YvDDvm1Y1SFedt",
  "key2": "5dfKdqcAX7wbGQQ6SfRopN7nW7abfJwNe1BtqmD2smZj6temaov7phHFD4SgZhQWD7pHzw9kPQrhx6TU4EEvBV2A",
  "key3": "2ppWoWVd1vAmuwwdswWafgpMVg8cQ8EMfuiAek85ijqRDAwBBms7MtsWcW5VZ6aUm2CbfJbeQqSC5Je5KVkFFyiw",
  "key4": "nKGWrE3LoQQfrYvCg2fVhgTZm6D42bz8qP5nj65DhQV6AuDKACB9CRZdPq2PyYgnVv1awehBY7f5rLFWV8L9DCX",
  "key5": "5KVhFi8Qz7bTqAALCC18Fn2QqUorECoD5Cpgf3H7EqePmsrmFoQmKww4TBi9uhi2ihCLs7NowXQXay4iLLoQ2HE5",
  "key6": "5Ceay3YiPNxrnoMfcNUqUwbAtrj7TMudGFV8fiB8hUsr8gEbwW77tSRdZk7fqAaTzRT6iRSisQNbLDmAhZiyCZXB",
  "key7": "39HhKokUoswsREyFUuQHVe5ocyANHCoyVBFqRGkQLycx4ukT9CEBn9ZFDLYWYbsC1pATzLSWMtAkwpK12vYwZHS3",
  "key8": "2M1axCdyX7NQLZyrke6q69Ns8eg6Yns4Pi2dvjRrUSCFXz6AKkkbJJwNf2eJ8YN67b5zf8UfcnnQdaygEEeTRkW9",
  "key9": "4Mk5nysNbZKqWg3htXrNUDDArk56bo6FSEtmrLkRHH8A3bfXhLwSXCuPwLLtiC6qQiEY2vT9uT3vgYS7EVNzvLgy",
  "key10": "5YDtu5vgXCSzXDk6zD3cq7czZAGLUrXWM29K7YNCFcugiAi6tJMg3beFimPWhUc96dtN3fwPGnWZKSsAfBczJ5RF",
  "key11": "5CmpdBGghXtjLo4Txc8J9LuQwh8BZurhzjcdvcaNKxsroGGiwxconx1wmsgDQBvBQGDUkBZ7deHMHx7hZevGvhdL",
  "key12": "3jka2jMdKR8uNbbVjUYhP9QxZk35EcX7kKq6Up1wNugNWoQ1si894eTqH3UM9tSQgFq3yNp6ok8jTnxCQRUkwsYN",
  "key13": "5WDJMfY64jbWZbGsB3TMSQmDdw26rh2BSMCeuRfWHH2KGLio4npV3cys3XoBNe9FDzN4JA5xu8mgcDFahGzXW45f",
  "key14": "5WLTibh14TejmXwwD3L2AqsNfScYiJus356imHThUHq71gqWD5GMuFVWTwSdzfdXzYZQoM8Zxb11P6Siq6L9jjHp",
  "key15": "JG2adbK7Xp9g3yATDBW89PmE3b28tDmDtmQpJiWCZaRpjRBsdCu9J5cnEiwLUeLDehwkJo61dpRvY8uge8uiuWe",
  "key16": "4f3YLKV3a9Qkjgez3qK5pGdZsZk43bpu8V3iNf1Sha7HqKfxczcM2ents25oyDgRxMddwRQaUVysNU4UjybaWuvn",
  "key17": "3jXbX1Qkcawjwny87ALpoGycUJcsSdsSmmRX7CLxvzufXw9qqXJMmR1CrTvSKUK4R5L33hLcKJz5fNeAN9MzL4Ed",
  "key18": "rE6y6mUUXhmnY8zmqb1nfU7MCwfZ643gsVWQcq7hfT2YvXHr9nPXZZBTeu5xn5XTtwgyX8hE5zSNFsbdT2ebjrE",
  "key19": "8VzTXu7MFxR8JDn6JLwRJQwcQnUbN7Vvu2HiJQWzqfr6XkDqJXizLgWEcwm4Vn1qhFXEHpumiA9wbfgiwkv3wfh",
  "key20": "5tuJxp9ZQ9PA2mw1GT1X9XpcBxJqN3hkNU61ox6d4ddFuPgrC4j97iqXg65PJZdkdiBMXoLKGoEfnt4oQC2YBVdM",
  "key21": "4w95efwhHZn6B66e7RFMf4QQpx2bUkJQ3EtDRsRupDa4tv4oRtk2a8QLT6CTXaegFG3vc4qzR6jCj8s1swnNQkQm",
  "key22": "3pzbHdJDtkHX8FMp3zw7s5dzo3Hwco9sNwnV9nSzDL5pGmP88LeFPRpoXQX3yBYK9Xem97M8vUn7vW3ccAfD9RNK",
  "key23": "4mK7tEBcEybot3LGYuhNiuQB4u9mt5fMiFKYFNEX5HV9on95tWxMtGK54Fdfz3BtjcWov5y8zeGDe5aVB5Luuta2",
  "key24": "2MarPFyXkFzrU7bEwNAHNEUdE7doouBJyo5mS9oRZxHQkshRJKg7FzDFe9LLZcW8FGrLWihJC6yF3FN7GgzuMNov",
  "key25": "3Lp4ZeCF91ew1cmrcS5cb9oDqBc4Enq6dvgwxthemAaJo97gE6R2HKZyVPZ6m5Mo4FqBW1jXPYSGtvBJNyTYtdZy",
  "key26": "5kSckvjXS4huwQdFUnhuQ5UQNVJ2a7ySvxUBpBMW4KPtdQeU1GKYtfhfPwJftHUqNtGCH9GHhMedHSVcbRpd1SxY",
  "key27": "nckrVeDn8r9s1YyYETyQac4shxFkfx8sxfbkFDz2jA47u3VV9Zcqn8YEcBYnXGyd32zL2hDXYCZXG6SM1fbQPgR",
  "key28": "53cNLe4qAkHQN13vNy97s8G7qy28ajdYeSxtHGQpQTdamAi9BdcBe6W48Dzsw7sRhirHtmto458wfLRY1XSt8sK1",
  "key29": "T6Vue7HbdSG3ejemjDEbXD4vMzYrkyEwQPDdJ3JDpiFeanTX8bFoFofxiVNkr1rVcdJo9WeCnaEv5sgKAUnGwZB",
  "key30": "51dtwow137xAGRpHxSPyJLhuMGXzxFyeVx7unW1FtRMrVuqHEVjgERCumfXEpTH6xitod4cZTmg2iwB7GLCRyhq1",
  "key31": "3o8Wme7fVJj61f9dPEg1nDgfX2gdbKu3EPEz7ogvVAJHMeAQpYMokgiNcDGR3PecCKa9nkg5yojfzpBymJE6L89Z",
  "key32": "2azdWfMy1R6J3ja6KhWFivavqWeVN6znkTPm8CwkerXRJ1rravXnEmG7Eqvb1CnQmBmUYRWVCfJ1CzMW9Pcy6VEs",
  "key33": "5QNjJrT1kcW4212gDKbKfFieVDQiWQMDro54X32E4GR5FEDrUZPh2Evg1H1NPVfNYoVDXfxmModqc4eX63kwP1tZ",
  "key34": "2c87ZWjcSvhcP5PJpVL5fuqpny6rzCfBs6aoQbeuoSFk2pycB6KNfHxyGjtGiAz2HttLJyZ1xg9GFPbLkA95DEtS",
  "key35": "4qNMmKmqeYwcsCdBGN8EHjTQGPHJ8Fz68bauYFtxymaKMLn4zrtHw2iyKubQSzcrqvaoLzmBHKvRN62xHBDFcjik"
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
