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
    "Fgt4NCYFPM2pgfssZSdYip8JEg1LxJZkrQXtKVqkWPZH5nKUgtsBP5royUKk2XVcdfgh5e6SkKVgEzCkjGNAqgU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fVxVMYLbqnSALDkYd351J7v7hJ1kgfNBmbvs64ZUxx9nGuVKj2ps6SizDgyMMAVb3gajy76Wsr1FQB1RxdHHxRe",
  "key1": "481RY6XkRDQZ7jst7m1zd4uCr3UuUMoQApc94gQCgvpuyzixR3g1UoXcQKWHzLWK4LgWSHYipvC4fFSEz4ue9Kxt",
  "key2": "4C9s6Gac5gyBYvWUQWYFAPymoPeCTJkVQJB3PURb9ZbV9fVLRk3yaFyBzqQnQbyFBGULRiqDHrzsQABKUHUrRPg4",
  "key3": "5D4cR71yEAzPiBSevnbDXc3mDvidiZNvtrdvYkuupde7FRdtxTund3wxGtAZTjFTX1W8fm9AUYgT1uZQMMs9GTM1",
  "key4": "2vTfFH3CiYGcGG31rCoXwSgi9tjxS97cHc34hNTrWFQUAxqErc9Fj2egRD8u6sjpQiMgj29ZcuVx3HmoaCAfkwFt",
  "key5": "2ipQ3DC9JLuxrF6CmxDToYUgXXoK43w82bDQguWGqwKUqGmPGCrcgg46WGZgG3eq6URfizyrjW3BGNwLWvhW5uRB",
  "key6": "2YgCPCTDY22mGzi4JP5EpaSWZa1PotxbnJzQokgSyZwToAa2CbPdeQrAbrAHoMQEeZgyRbHYfrj56gxht7rNKKgc",
  "key7": "5d7CmeFuoJGTJhsrabzq9jc6NSacwPKWXUByobbfuGw7seiX2DzASgW4mgLoZzEMfzmEi46gMC6SPd19iQ6GUrot",
  "key8": "5DaeEhcUDDxcngDbDrMUczTGkbR4zWHgGzMSW8K4q4fTquaZnzUhDZFJDFetNGZqfrWpSgSPUBWDzsT7qmYQxCA8",
  "key9": "27VxzreeaVt2noxH1N5FkPFPeFmAhL5XUjy3fpETtnUW8EFoswG3sBWsegMqNYffBnRZuGpQ4firhUmgfmKkk2oU",
  "key10": "266HymaeAJbAgeSWCtqusx9mykrMY8QhDceWzmbbKhiA7s9fxLHB9Jfi9adERK4JTdUpSwpNmm71QgeEKcAHsvjh",
  "key11": "2kd5jvmFnvvmC5JKfMncPi7QVLeSZswR9QnpHKp9XQ8MnRTW1zwJKL8rBdXLyyVXM1nB3c9qcNv9UZzS5bxbAJch",
  "key12": "oBZ8LaWwQCAavtcKYoQqwR9ScDJCwHBEL7XRutKq8JPHhUZxcbeNy4SZK5VEvMD6p3z9uwKEr3ZGQKv6P8Ld3Tk",
  "key13": "4o9886LL2bBLceQRDiBt7csfFCHDgUuHbLGp6VEtyMZEtAPxCFqZcg4g93EiaEh6xTUNk9ss9MUXeaSdQ3S4dW2A",
  "key14": "4x6CpDTL5bPF9ZpZUdVP5bKwxT3aJq2K6H2bDfiHM1RJXNPUBCfq2fLnSz6eYpfV4eGKZUwCy9iNxRRvTCsieqaV",
  "key15": "2YcgLJxzcaQEDwfAov3LBUtE9Ftkpy3MJye45qYWghB6QHB69TaKBaese19UE6NvQcRshEaFQTS7uEJYZWo16kEu",
  "key16": "3pC6fVsx3zMhiGPNHMZzF59URx9JQZiH6uG9CTS4tCQWu1Nv3ZKWLdMBVRWzcvpgoXAXdUuVq5Hh26mhGHcw8S7j",
  "key17": "DNyTyaDRqKxbcVZ5fJ8PyimFnowwCxK3SsF7igsx1a6jLajRWRt7i5J6vdbCq1LSAHCXYYmoAyaSS9QXKTw4yVd",
  "key18": "2tDx5cSsDphqaw5i5PkJS5JsnBBiE8mihiuj1ugAKMqcow7bKu1rfm8zRLG43tG5E6z9e6XgzeWxDtvvg2B85dqW",
  "key19": "jr9o5RjdL9StJn2vX6AF7htCWifm2BmcL78aoJp4vpbvQURqK4nyhTH24RV7RchWveN8amZiXk4TtqoGcxK7iJp",
  "key20": "4oo4eQeXUNBt51rCCuqxH33xhQmYirKTPiWJjFHk8X9Da4chVqQcxEZqpBJKifTFPdbzJy6ZzEcZhGNaaEfr6pY1",
  "key21": "27xpd7LhKRF8nmqE5k3vzEn2pwAxAjYPEN9h4ZUGjf6BbRpp6os9ZBmAXKGjsUhSaHo3i5j6Cpt5Xsk4VzemYZjG",
  "key22": "4dPSnd5BcNNhud7pBCZC13jCACj457BnYYDLhCAv9MZvT6m4d4qhg9QQsuMEUADyHZJUxA8byq281ZKfzyuZndf4",
  "key23": "2QVL2LYLddZ6yjNr3ufQaqfEDJg6CCKouCy6m1jSPnzj6RuuZNQo7Mj5Uz9dkErEPgeiLPGFVSofRYReXfm6buWe",
  "key24": "5xBaCNaEW43hBiz14kg9NepSzdBZduDJSLRdobUSxhS9gfQmwU4KgyBb6dopbiy95BeC2BbPm7d4RbyxCP5dnV71",
  "key25": "3TrEcmkXdmZX1n84Sn2q6obu4cHtndBcXYL57wSPasz225dW7Eq9e6cS1Fw3xXEj4DQaupNNqFGxvRQFnzzBQTq4",
  "key26": "5jfmQ1nyoByJUPRpu3jYUWCd5tMDGSpT2dADFABk83Yxq6HBW9T5y1KaZ1tWc3WCYLz6TeexCYoiqfvDbz7dYLEW",
  "key27": "344fjvFNe7yz3WtDNncZPFshVkSFFozdEFbD8KPEewaAyXhydvdStS8UMTK4u5KGhKvB3kwc4VnWyZ6pGuxQXP2w",
  "key28": "617pmz97C1n4ihNqZ7t6V74KTvbyrvyBNDoLBQFW6CSoej7Rxrh8BEBXvaYRpPkcZBfwhSfJ2ZQoFx7mSmNbTNoa",
  "key29": "5mw6KKbGM96FPqbDSJGg8Z3CZN9TtCNBf5xYq9DhhJNwfm7XTPopDdvUrphm1Z5YfLfGNESpN4f3tzPhmtDCznRC",
  "key30": "5eoDn5dFVyzWDdLt3Az99yiu9DUFa6ewr9h4Uf1a9cEEmJANbtQFbCdaSjDR3E8gzBzTkj2PmbgRMb3zjhpdgTnF",
  "key31": "3HXLf5HvoxgBsECNzQZ9XZ7XhPEu5vu9hD78s3AGaesPiM7hRn4E9Ksw12ybrBmLvh3UZoLF42kW5uLt8DJQykBJ",
  "key32": "2DCsp3rXN49tMhMfUetJYWj2crD2wH3wKcLkNKK8hYiBJCK2i4eRjHdaVfubYpePuSwxKHZb1GEFGCuqYaNoAAqi",
  "key33": "4NYDSin5ubbTbvhstVsCAja1HZrPx4WZV7aT4BBoqhKpfG78DhzJNGBsiEpBMFj1D7WRTNeqkbwQTBPeSQqXZoNH",
  "key34": "2EPCR9eg5eHbuPa8iCErRTr5cQaivgGkMcfNSCBzUNMrTX6ERyBse92KrHyrH725K7sDyHfBVhKRUZtyvEJFRcJj",
  "key35": "49dZdX76wKmdh6BwHn9fr7Q7yRWBij3FGP8rJV3kk1qaS1uRPyHvThuMuAokKJTF67gLYiHkowphSuFihMmBUjsN",
  "key36": "2uTmbfSgxxX9dKP3fJKLSTX1T7LkyTVXmRHToQ4r2SJwRu8R1chPHaCJctnBb5AGLLqjXvAZWVcQRvsuS3AM5zrA",
  "key37": "3kTPtq57fkJ13WkQ9PLGwGvirrjTyXbBsrjZ2NJFQfrwC6vPTNQrgSzHZwZhqxtydoUEDRdXPR98MbuCz1RPBwiR",
  "key38": "UVb8duveGVWLbcXWjSgAE4J62Nhhc9aZW9JBjaxrDFZfogTna5AuEJGehfsVrvGU5ZKu8APf1mqPC1S9yNsBRCx",
  "key39": "3DuAbTbM4qWNQDkbarGLqggjQX2s9sbZrrU5uq9mJBGew3hDjePwz3acLtZXZQw939dzfoRpKuhcc5jGvB1wrv2J",
  "key40": "2sa8gzybJ4ptT85AjK391LJ6y5USLP4LVf5wv6vNyTdcTuZd6CW8SsWV5XYVALbzpC9NLLNenyf4kCgkU9M1TM7v",
  "key41": "2g5U8aJJcane35NnqSKW6DfhbTCbkRo9BUfmNEY89SBhegwAr6qh7cjKJ25LTdqmqerfPfpb9TYQNaAtuEyFw79h",
  "key42": "4VJprRZh4ds7ERGpXqd94TZRJnTiS3ApvYtzhztAxXfTZP6s7tXm1W6BrfbsUrtfG9b5QxmfDbAtwpRsPVxKbckJ",
  "key43": "5hty6REwniXBz9BNQUVi5nkGyWa5q9gKQdQsPu3qLEWWZNKicWmVxrZyZe9tWLWpXp6PEuZkZERhKDw79dYYaDZW",
  "key44": "3VQM6Pw4xT5tD6SabGp4GPMQBHcxnQMarMmT5gRSSGxSRUGZtay7esVG1rQwgfGrzpCxk3t7Mipgi3YuzanVzCun",
  "key45": "5U6akQ6nYAhV9bJNo35eD7naEWz3JZBZqMs8htVcCfdQPf88Wi8svMrJKumNXY6u54svb8XLbRReQqoGGmNCRKUW",
  "key46": "4tD12Wv1YMVk1fCt1hSiy6VJ8KLBdShevVwA3Jr549j2rNFqP4eQrTpzwwVRx7ArtQjjSon2C7dPZdC7nUof7aSw",
  "key47": "DQm96ryJAQGD52sxWx99y2jY8oSKsdH4KhtBhPaXwvzy7XLZRkTQoEZxVp9527VDQt1j1xG4swDkqu5r3365rQ4",
  "key48": "4V6LSq95r33sZk3gSKUnqWEQuHSZHAM73addSMDPhnShMvdw3xagFpqdobtMyDQFWiF892paA4ktX92gptPVNGf"
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
