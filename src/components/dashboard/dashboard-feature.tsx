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
    "4rDtYwVYtrWckJ7p3CjknK1w6wEZqpyaoJzuj9QsCZc1hiA4aHKvqhrmpSnwg2UM7wy4R3pWrz39pQvPo9paMqp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62A76LQmxcx6ozoE8359ZVMjhyA72fEMwnUYK9Jf7FtnKseCodMz6HNGpNzqNGxohzaGn7pQAhRCyM9Gjvv5nbNK",
  "key1": "4WjHhuWsJyWea8LBse7Ea8gP8kDWsiUEgjkkmuQKMqP93tzToeWeDoCtZ2ehGoornKkfoZbYSN1kJZDBYewNtvmt",
  "key2": "5zSdzMsdsjoZpHJzHBUk8kX7vLqJqK3uiNaaXvFa5oofh3eQQA8N7jpWYKwLEUhTG8vZLsBsjHb1PdLW75ZgxYK4",
  "key3": "3jfkz5Ua4vey7PMp5wTHZFEkQEa8SsrkrDn4odEv77uk652LMbi9uJd1nxfqtSg5jPV9g2hyKAAbC2F9WdApWrak",
  "key4": "62FXtXQpyaNxwgXoGWPorhwFYMMKFbyPUKG4jkMsutW3orSMp4a7XUrkYcH1KcZ3vvV2dpUmhT2HwiGGsBwpKdX4",
  "key5": "4fiRcwuCpvJM9UiKMkhxU5s7A5aDRLVZK7FPBy8CSP68mwp6BkpgGjJ3emhnqcJtGrSJnH7sxgLTrU3PGcVvrit2",
  "key6": "4Wj5fJPwSkxEUUZrQa7yXodMDLgjQDXLcD8FaEK4E546qmzHw4Pv5QD4VqM3EmVL6N26pcFkkyNq5Yc4eea9TvzA",
  "key7": "EJaDZGuDCL4fdh2TNsyrTHqEDY4ui9eNc33bNoyfEWAcLg2weJpf9gHK8sLfKDLDxitQaMvG1JNR15o6bHydR8H",
  "key8": "2C3vyri1yEBT6Dz8xbwTHLffkora2dpZcgPQzpJeXDAYgve6dfHt5o4tsHNDvVUFgxiuy2ewDSSKFU9ig9oe1yim",
  "key9": "4PadeggT9pQpmGRQDKaCgErhTMYmnPiWrzXrrKKXTypUNgPHEaNkuuVh89AnnmUepuY1WX5ngj7yqaEjJgRHb6DA",
  "key10": "4qe91tEEC5DD3kJXf2WYVWFgVPxFmiy9tJE3QSmdATNTGg4L4kiyZEbkYNhJMr2wrSdKGaij7KMiUwzthVRQvm2F",
  "key11": "3oiTucLjcyS5X3RF1CLK4bcCEMdcovJqq6YdWPCbEgEycnsoBFYkLDqDqP6mViB954qAmuaZtLyt8tVTX4PR8KnL",
  "key12": "inhrFcrdTnV9HfHh4LpKL56zDyALYcMxewJfVDfU1si2ALY3ygWtmfeTboyuCEdPasCnCHZb1QsMNGXSPgsrgZ8",
  "key13": "2rhFBa3NjfXakeM3C7vyk15CQwjG9qCK9QW5F6Bx3U1fUHejNhWtvP4UoDabuZiia8D8GL9wdyqRyvga9Bv9hvH4",
  "key14": "2tJhuR2uTUhAyDR4zzEDUbd97DvVVSNxNMnsR1gTdANa39L41pj9mFR37zLdwZ4uRJk49Jw6Cj2LGgDEzL78CSkm",
  "key15": "5u7TTxaGAW6mntGzqmech9GXEBQeSjjesTr9jPKL3tvWjEYozwoHXmiESzFAS73786FXkPhDKGMTdFnFvQWoe3ar",
  "key16": "dzwYf8V8b332qenjhb7DL1zRZiBPaVz3o38iXTYqZsEBDtdKPTkYAGp28vK2qnxFJ8knHQv951LuvVrMJ6BRxkY",
  "key17": "4nEm1UBNmf7qPbC2zY5waJwj9RcE1S2yi5KkTPjj71FYo21dPx25981r5rHryyWk5EbXg4RTNUwb6mr8UdD8VihV",
  "key18": "4P2tP7Eojc1ZRKg9GbDpzR6aeukornXBSpYLeJadQP8VK5dhRtaf3XCKTBeyJmiL4R2AeY66ibEfuFLUA6WAaod2",
  "key19": "4JL3131Ar4cUQiUyYHPdexvx5cJ8RLSiWykkCeYTy4EgqJ6rgY28BgQmQZpd9sWYjrN51sasdet5pnRxX264yx6a",
  "key20": "MpKBv6jg75pu7foEKmQW4xVvrkzG84LrAbhgfiufYJf91KRGXpMDSb9DMN6rQGRvai77UsxmLYj92mbXqVVDyNn",
  "key21": "vzrNS7mnXJAB26d9XiQadxQV9RbVctFKLLqDzzgdXtoU3UYwwXXGn47mHemmJRHmngnr1CzwnnCuzTacuzRvuqM",
  "key22": "3ZSa6dUiiCKKKepzyHLbiiwstnQGUpN5bA7hVbXo8aLAUWxAtkBmP8D2u2pg8U48uErWj9ScMvQ6k7h1NU4XNgE7",
  "key23": "QZQps87KZYy4aUAq6yK8mNUTLRdd8k9pQPK2HmniEzXLMHpajwusLvzWF1JWdZjd8A5FJFUgYLcwUsY2qmv6Mvz",
  "key24": "3mBSiD9g1wM1N5zQNcDpmtwjk41LTA8ykaDoJFcnUSwk7iHPMbshSHXLCz73ipMgkiTQErhuvkataamJZq9ad79B",
  "key25": "PoY5vVtiLUwfrN4AybLW2jMujwHXKujmKwVzKqaN73Bfv68ATHMpDS4FARMiNVR44gc5b9yJLrYsBBdzGPdV7eY",
  "key26": "3SjNcSDrqSbgtWGQet1N9GzBCttnYPHT1Caz8Zq1adDruuJdh739vdZwj3RiTXMP83DqFqSJCJGXMERynfRqSoyK",
  "key27": "6tiUAex8pRpXhvas2pPBsTAdYMrtWEpSP7jooey2dSxKTeUWUiEwN1PnKD683prgCWQ6MfxSymqydw5BEd37z2L",
  "key28": "2RacV3c6Zb2b2JVUqbrv3hQpPdJvLbKntTuKdfabr9hZdS8piM67aTzoXWgBdDfC6LTVXsNNLzs2BTqKh5coEmAa",
  "key29": "4jrKP7eUvxgNp2Hnff6srQ6D8SsEvJihiCbdd31u13wMKsCh9yWy64C61v81rfm76AmQvpzKHgeWgdS4hJmq63WH",
  "key30": "5NPfRy95Kp7burXd8k3XCFKHmQMg37mwDtXmsfEQSiAZGFcZ2Pq2pZZpaV4BgFb6T1K4b9EW7ZzLYzeJs9XqhBsJ",
  "key31": "3tLQafbEiV6GA5uHRAJaHyW5krTbTPSWdkRJd6HGVNqkEdeqPSpT1EZGbabWxTBjaMywPmTcpNTGJr21DzJYGt1V",
  "key32": "Njmdw6Kutn9DCKMW27QTmhmhREpfPFdgNKFxSxpdrnMdwU5BQzsxYrHwy2kbJQj48LN84oBGKRKpVkdFxxkShNs",
  "key33": "pDVxEbM5u7pu2PL4HkYtX8fn5homgVYLYZNcyVus4pvuyyWvL4o9dn974M8XybK14RBnBF1oekpgKqS9c7h1W6z",
  "key34": "X2wcy8ELzsCwKFcLpVgJ1fsVmkWoJnSs79RRGaGrh7Qo1xJpj4cWyZYCTXtKJdsB59D5LB9ULFzME67GUYPTqbH",
  "key35": "5T1poU2EmXgyBsBN5zjpCRUJiaPPic68j75PCwBaJhAxswiiGo5TJXTujXSw9UfQbPEVTxZu3wfXBM763cM5aw4e",
  "key36": "3QZZt7P2y2652ef5bqRfNSE2NWwRovFAy4Wksgwtszu761XhVULxRwbSxdqNDB8zSfmm35XKr9nTKxoPdRs5p6iw",
  "key37": "21BkZBWghL1RAtH5rQhxpp1m8izhtgECp9yYenXP7pARKa36nr2zmuwuaAiCwutDgoigTbxDyng4wzx5FBc6TGPr",
  "key38": "4YUu1gv2UdotAyYn2PXbdbVUQMFT6vN4McdaBvGLhCzz3zmLRBoQhnuwY9wckrMB8KSEJ48igyn2Ywo4M6weKnrA",
  "key39": "3LnFeSVcxhrGa6FfiqA5bcbByPjwTd9HWXQZXSA374qex6ckrddHVovu9zdSFJmkrTeEm9YLL162e73rwisj5wz5",
  "key40": "LFTWsmfuu4EfdSQdNA8ZPkZBGx8H9VumPbnaKinwSzMJAtbXv4hL6E7vfNL5ZwdTNX6bhSfQ4kqqUBePussxD6d",
  "key41": "47SjnoyuKPPTXDvTvfNtj9hYVLmABFtcrLELXcDxkzgJeKWFAguKqB3AVW4ssZrpF2GthDPmiHZLQUpmo5KJTHtn",
  "key42": "qeNFRyaXpJMZ971zYNFvaYQBqqFgpRftV9bioy8Bkm4HLCKS8ZZngojYBhH3nn6GFZ68krUf9bcBdjzoPGaTMMe",
  "key43": "LjwubAJ3AUWRcLiCpTLWrp6ZiMLXceZwJViTuEDbDVyJAZs8ub9ShS5WFy7uSLCqMXCZ4VqaMm9C78d8rBN9DG9",
  "key44": "5cMVD1Ujoeb95uKZoTYhnEZN969vMatAZaeQKUzEDp9EDQj8rVAqQRA3Zj43veCChaBXNVQGHFcH5qYMaNhjVDk4",
  "key45": "2HG9L6jkcicgRnYG7bKZRxiNa7gK2YxHajP5BaXDLj9dUGMUK9mcSvzZBD8FBN4iMFSUaEhpP8TVUmZeLRJD3Xon",
  "key46": "2qvpkk3gv5xLdjeEwhKbhB6kxNDK4Kjrj7HdskyvFGn1GRoM3WBWaKXdUUeQAtShDGT4ArmWGUVLoRJP4Nv8n7mn"
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
