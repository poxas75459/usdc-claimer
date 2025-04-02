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
    "3qy2TiQuSCZN3XkpXfHPcREZ4QQ58PT59DBm3UaDKw71xiebr74SBADtSwaBKowvXzCws1tCPsDJ6Aijh4DJFZh4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QY6LFSz5LEugqsMWr5FkQiC3bww7fGZm7HT9tUhfWQym2jAPyXm9jqbYCwn9woMQDrNumbcwLTRE4zUswgap6To",
  "key1": "4v9wUByrj9bBZ2L2aw4fSNAUZixhjZCwBhmVE4zNP7vW9xkG7LXdMge7Z58fuHSwX2TFrK7SU4YqkanYLuzjkUjr",
  "key2": "5aW4nvxc5Yc7APepTre1HaDZiv8fxSA8acW6MyebkmQ5mcRZu3u64pvNo6wuG3EHWXmWztAcWxhuKhBwQDTShcXr",
  "key3": "5hoXL4asQvbvnuh1gNRUCWUXjU4bEkpwVAMT5M5FiyMjiMpcYiiQmBqte9GyBBfZYxzjUwBJodKEBaVdR8WUaiha",
  "key4": "57qzH2GWhcazsfgoZBX4ZyXEZ1n8cY5Hz1DpqryYhM4XXE2WR4dRjaz81CsgfUynjwvdCTSzfMSAdvyp2DjfBoDj",
  "key5": "4jFb7byiCazoC7iji2B2U5J3FRvaq9kBfgHTvoRYTrocaCNbqhh7Jjr4z1YYpaC2AfpzUTM2AjrYtR8gpqKe4Xf8",
  "key6": "2QiqLrcpHuWhiZ7sLF2gNpp558CS7KrLjPXtz8WLdXwjjmXVAnhXkt6Ghkr2wiTMcsn7fJ9TtUuDvc94DbSkGwzy",
  "key7": "4DKFhUxsrUJVbNR5TUN7vfzuzriH1aJk6Zvf4MZm287H1PvjBi5kdxPuTSS8LFWWmG3yckhXNDceqm9VwuS7iTKp",
  "key8": "TyCRKXsGbqLtxjqYtTyxtqwMqurQxNuyibbqWAYE3yrjamEHoZ2fZaVmoxdbrofE2wyaVDUsWsKnoqQUsLdKojj",
  "key9": "5rt3WhsqDwf9hJkdRtNP18QtGvSUo5Wq4Fu7SmgNPLFr7QREXTpkwhJW7aojRMLRiYtnoFEgEzbFWQwqcSj457nn",
  "key10": "59GrWgCaHLqZBxLPgHt57zQ8bRLupcojFVrkGNMJE3vwnmNzooabLNXUZjVEWfQiUGrZDmR5GTTu4fxgmFp5Fqkb",
  "key11": "3CLn4JMjtxyahbbisdnPTpBN9na2rzeN2fe1srPiwhRrdnJjaNJwGveFQodguUn55USsViPDeteHMNBpK7g44sgP",
  "key12": "Q8degaoBfxWxV9XkohVSkwWchnM8A4KiTi9UUo2BkJNKZrPJ4bqahhs9JwTanUjJMxrNfd6yeZC7NwsDW2Lq1Wk",
  "key13": "2PfQtwRULxcoStkUGSuwuNnKvcbCxA1r9ERkwYC7fjpZynugLbGVao7qU97NBKCtiDb9U3ac6XaB7TzEbtWSezHt",
  "key14": "5CKCWeMuWmTmTCpzsGBmV3i8D7aGVuMrKvcrmG9BVT5cKRQjJzm4Hy72fVxsEydcjp86T4sxt2bvwVmF1a7LoziH",
  "key15": "FpjcJSWYij1SurwFDHhcyaRXEAjRQbVqSHEnjqQKBNdJdSbvaPGqW8xBQoFN3JvgrMMfzNCo1izrjeox4qRrMs7",
  "key16": "3R5PsViqJfWDfxQjbfAYg7sQkakxGuLxTV8eMRRBhqyDzrw2PD4ivCehcQT1CeQbK1zG56xS9zoVxirSugkXUzRS",
  "key17": "5Ly6usuXKZ82pyKs9kYuuqA54a6q8yWcd8htVeZEMGyNmqsAAjs2NDsD1VppWhHo8Pxg5kS57quwTJdddfKgpzFa",
  "key18": "m4nnx11SSGzEPwnMnVWpAudV4ihQ2MtYmsxZaekAgwN6cQpbjy2aBrxvHPFFdqDfQBFVbFuSsvHneiDndeYaJ4i",
  "key19": "4cv6JuT4PgAtVW57TLeat2QiGCnvoxHVfP1i2u1pR5PhD8gjsHtPW9VzEVRsDMWauLUy32dZUkfkiXU2BotQjrap",
  "key20": "5EpesJbFPXrbNtZ6GzGuGDQ7PXQ6TN4KXTNReCWaa771YAAMXr3prrxLPVi3CP5WmHoEt66bxRQYEm2jHUtuoT7g",
  "key21": "wmigXaXqDh1nZ6DghrL2hECgSmAvHRzuECBhKjvAYBKMLCWCWtivZ87KsvzhB52mc9qkuhDEuGJWnszXmmvZF63",
  "key22": "2UKf8rQpEub4ZpU3k8u7o2D3B6PgJ9BMSGoAU6Qusv8Z84Lo2SWin3EVayYLzfSAENpGe3ncqUfaifv5RisUiKUP",
  "key23": "39QSvXkwJQNFUwgMyYYZdJn4dMPZh2uWja1Xn7dvHckKk9iHVEmsbRV4rjPuy8wfzwdToFU4GWm1bMmZ5VobgFP4",
  "key24": "4mncLx592qXjRr5znoAaumXshyveLJnaDi8Q4F7fAsrfjaTecbHrR9GrXr2LzSYPg9y2Cqp67Pj8vkhDHGv7rsi2",
  "key25": "4qcFHKBQQE2A8BDt7vhqCeRGcRvHUbzKUfjjbuzwWFYwQRnZAfMmyc5WZ4sB9MygePE2tJggKwhLDTCW54pBpMak",
  "key26": "XvjXug1igEWFtvB9mtiHEkDwkX9JraDr62FuTLCLbGQUMFNe7UJy8Bqr5T9mEUkRCWgNN77PbuiNhfw37YBq2fT",
  "key27": "3pUe63ucLTUKeMAEpeqGpQcGYVUavK3jLbHktybQ6a5JuWr1GmyjBRSV9dJP2Wu16qLWWQ7SCTNtdFQifXdVr2Bo",
  "key28": "gEwvMtYzYNaB5pwtRZNA5vipzhFpJ4UNHZsdRHQfuofXYjwQ1bWokVAbCNZdyyrgPHHe28BPypvL3ZNkS9QCvtQ",
  "key29": "2mjy7esNdg9HnfG594DCvjDuoyUahvq8sbH9FTQC732hEqenCbVTTbHBHMJRC6VS4cz4g3Fk6A7dSr2MSwJfGL4d",
  "key30": "rJiTLuJRc4QMmxYQYbSj1KKAPiYFVQfk5vKRQqPsAFQ5WDw4bgrgvf5WEykSixKbKrv5rpGgSe3SzVETUddsvsQ",
  "key31": "614a9Jpzs4uMsrSK5yDiPv1gJWu9MHiZoScLVcmpbvmWEUJnyzSwSjJw9vSFYii8HjbMdwE2mQdwZBNXkDbtN18R",
  "key32": "2oLy69ssmeGWZ8XPVEQfeBVchawrJr8ZUdiokutgxBMN2G49ZCKgLDbZXzozK3bVFuUxqfyRko8UnrgYYt5CvQHN",
  "key33": "5jTVTESZLkdATukrVrXBuNAr7a5kwnJYd89TSCJx911fUpWsizpgCbG2nmtzYNb4bhhjASfkcLJXtdcfZvno9Rnj",
  "key34": "1trm7JcXJr3Z7Z9wsZbHgMLzvaghNYfHmTY3qPCjegrhXuEP3vBD1GdzxGkyLM18nZA5NeWKREE1XeuAtk5pzR9",
  "key35": "FAwvyj6sSerpK3cSHBzqZ4E3MbxKnJh2QGD6DJBvT36S4HzPvxgL6Qhi8dRqkNkALiphvLixfjK7nuT9jAcaPW4",
  "key36": "3bntVFj9CF2W29emE3XTemGUjN2sChFdF73kh9wsu9u6MvJ4RL5uCPKmiNGn9BoowF7Thnoo9ySnCf73RhCn9KaJ",
  "key37": "pPjvAyo8YMJ57R5s7QwUH7iJEs2N62e3J3MwdW1S1PUdVHRh1ngkBNwBS8MDLXerfz5VyGsVqFrFkUhDmqG6w99",
  "key38": "4DG99cE9peNe3X7MnPkzEc73QsUVuMy3CWWFvNH9tHaRNV278Uh3bfcoMpfPjHQEZ5r6yYEvsqrjSzmozxrNRwZm",
  "key39": "2idAi6fHnkq4BTmNjdo4SkupZRruaYzyqpV9VnSw9ivyuYsTWvjnisdxBjgS8zZyPGtiztwAW8QsqGJbrLJDBhXR",
  "key40": "3YHo9uMRNjnCHPoausLDsP15qfG8MPWt8jHGqGrwquUmaJosnYrV25e9mRDbZWURGyp5tYtbn6Kn81VD1jr67ZMy"
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
