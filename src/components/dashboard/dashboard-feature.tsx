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
    "LzTSgB4ZKqaMKG4zfGCByXzcxFa9Zc61aLmKxGCT1eUct4mTmZ8RtA1ydNyHqWdpGHLYUCMsJ4E756n5fioL7VJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YobMdf3jNypTGBbaJ1DnvigUJn5X9jPizLrxbWsqeHiQveeRE5tCHkh9k4LiYobHNrE8HKY7ZC2s7ABzZ6vTRHm",
  "key1": "ZAcDGfkKyqoGKaiU8goC3DtP5Gj7mPY2bwrPvYMBFLeN4YCkFHFZzJNS1uDqhgEU6NLiL9yPBHuT5Ven2fidVdX",
  "key2": "4hPWfwyuaFrMBdsgX5taXidHcHssY2cc8pfNidcsY3buNYfkkdairAQZoLx2h2DawuHZDeDwgoRbXerFjYgYM3HL",
  "key3": "4qLXsu4dbTWZ3yNXR2NLUFKrJ6gkX6a26JwSWSd2ZmhSc3CdawLod57VqgKxMCpzRPDXbHCvMd7QXEqmjnuQR6J5",
  "key4": "3XCTaic6pPumXjy3A1pk5bRcJUtmNw8i6AR19DUSirxyHKToxQJDba3oZheeijAcMjZL1UDs8sKnSVvFoL6oP51j",
  "key5": "54nvfX7pdEfpS6t2aaWZfSNHLS1Ppf5hAoCLgN8UZfHrn9sU1XsaK8cHAmyotTxZWEtiEt3GDVg31gbcPCQcTZuA",
  "key6": "2bwy5EcPSHAXBZXMa3cdh42wuBBnU5JmcdRho5UWNPAWAdZc3bajCyvpSiqvK5rY8Fimuegxdj3LvXqjVhrXKmox",
  "key7": "28HEPEDLm5cjs7EaHj8RTcYHkJRmRpFJBYbQsp9bxEz1HsMLabA5aNdREnBia6SYqdeQHQg8SvLJE8rRnJtDDNjr",
  "key8": "283CYrruyeCERkaaANk8KDpW1xjtsQMPonoh8cQBuscNXxaAv3g8dohUWWTkYXnxJB3EgW6XaKDqshvHb32CjMd5",
  "key9": "2wbnghKQnh29bGPjb8sBZuC7i8R2SVoH1pGE4De9LuFWHW1Gh6zP7Y7xtGXaSbox7GGvozjsZYhWswNNmaRSuLMN",
  "key10": "5Pbfgw51GVttuAA9szAi6gZZKbKZQ4FLTGZa1QmmQvhSi1qdadpfLtiWv8QBqpy75gKqJVRU5bWkJNLGuVN8QVWX",
  "key11": "2fx6x2ny177Qq5gTfsMAjpRGMZ9QGa75NG8EnVJWbACmWE3sjGJC9CiwLqij2fMCRdbgjsRcuwA5hZXvkYxHwbcs",
  "key12": "3NeuVRjR4ux2f42jb6sj1EwgzREntd8c8piTfkV9TWZwqDqdszUo6Wrc7ynNfSH7CrkNduYjEaooWbW2okpYPvah",
  "key13": "2MCSXhYGeowquVBiq39rcZ5jGnNcrGnZoEjLiZ9AmUSnm8AMSuvKyiw7TxtUT4G3ytZZfDgaK95CHaUC722aS6Fk",
  "key14": "2MvXPL3EBnTVPAeqSAk7Z15PDAatDXMMQNECRYAygvEYKyWG8SaSeUGbzgshWcQ2EEz1uMQtcnhEHx4efn9gqQkZ",
  "key15": "4S8kVNyFbh4WKPLvyKtJAMaNk3VesBQKv1mQEWz8q4ZfnbnkoQHKcv7KECALiAEDReLbp3SaRAzikGxmL7vm7Dga",
  "key16": "4TD6hPJbYJmubwwkQWYd64PjcpZXxPCDEhBtqR6HDu95BJKU3W9r3pFjaTdRBjXbwRjsHQKFwsKsBY63PRn8UxjB",
  "key17": "cXvkAdTMRWuGefQKTi8QhzJR3yVPzvTvUW93nPB2r1ivz8DjDSy2jNuAsmCQupMMJxNSwiEYmXAa5fcFaMk2hUE",
  "key18": "3Lx1FWLLorxNp8bN5GYLXGekZ26onWsekWdQbz1cJwaUMT6prDoMBMnJSPpUkAGRUdPZrRXVzCn2ZodEtPF7mgG9",
  "key19": "5ocBKajrKsqXvG67vS7s6fPSSbc78nNgZ2AYa3kvNpFvX5szq21SUY4Y19GQjX5qRD2DBZ6U1n7MZUXbiwo6QKVf",
  "key20": "4F2ppLsycq2jB58NdMTG5u3AvnLEy1K7voLpfrH36ZxvpoZYzpadpvh1AJBqYYUZAGTR6ER6jJVokZFFnfFgvFWN",
  "key21": "5wzdASMwVZJHZAUC9AMsvnZb8eQ11hzsRM9AV4CCEsewW8hyyUoMc5K7STXZThEN4ygfyLQACk8v7RvMjHLXVoyw",
  "key22": "5fJNxdKxbZpnhVjjTVm2b7zbKhmMfeAzqepNk5oPZ4dRTzF28cCboHCLLdbYxwheHcHqYyTsHPudtm5GG3mUhoJ",
  "key23": "2Lkz2HNv2ich5tX6NnuJLkSfkB2B18XejHyVVnBh7Sq3AjJSLirBp9Z9EtJYJJZQyzF1V38DyH4USje4YeY9EwrU",
  "key24": "2H5Z6LunHziBTEnGsooUpqHDpTyG6K7kw9nvARDt7KAMs5jDwkcjPAR7Q8syq12PFXNVCsdywxFfcWRhqFbFMkpm",
  "key25": "5wQMnYPA4X81BuEauaYAhoe6gYJp7FmrVM6AYDyomwsLWQZGBkFELibit6JqZhAn536G5ttFeLNfZ4GCsSkN8m7H",
  "key26": "2iRJEcC1HJWHzoa4141WwtMTRjHk454uKYugxzYZmtD7wotVFBduvbko1uqtBJ8JFLGDZw6SsTextZUTyTcdjua5",
  "key27": "hJ8ffapR8TP62bhnEtND4LDF8viEYaQjbg14hriFQ8dN5uxtqzJAssf1yiWEZRQFsxmSUagyjG6E2A2i3t8J3sA",
  "key28": "5oBkqUnVcc6TNq47DqWrNfqRNAXsWQEcbTxbPLGSVdxQayBHKijJJP6zptTPh4ZWhsddE1LP3f5FYZ2wYEyW1qRR",
  "key29": "4PQ3NnACCkY7nk434qar7NEiRGNnJ9dMihcw9DwQRJ5WRJ2c5ToQe27db19LQHJpsdzBQ58AZWYiuRdVWhZ7zvhk",
  "key30": "2Vg4cXgkmur494qgcBRSLHcsAXXFhyRwcJ2Kg2FovRvijCSMWgrupmQ9AzUY9LDMFWnRiKJwKemmbhLUTc97n45b",
  "key31": "236JhPJRuxPqejjPDBnNsmZ7M81BofKuMe9xxgWDcJBCzRRK7edjvz818gYdmrk9mKYZgnLiCgoNojzsxykd4Pop",
  "key32": "3bEkDzBHv7pzT7tXqdPERXFQBWiUVKVPgYQWsWACCASXsrU56ujh2rceaXKJBt76MBbdDy3eKtpnq8reV2Bn81DS",
  "key33": "LzhXfNVVn629c96fGaRiMLSz38J8cCbuL3cYqeaEkwusvfrNs4obAkzJ2GTahtFJtuGLNexqgySUgLpkapvnzu9",
  "key34": "2E7V6Ju6zPba3u5QC7L7LjdKbkyKXj5iZJNSKTLrtbtzbxzXkkKu9VuGNLbKwa4QoJmmbLFkBMvJEYsiRAiG5baq",
  "key35": "2WbUAM8rUAvaSXbQGP4KMSeHuJotFNFkDcKLYWbhQZrxv8tYuAqzVbj6q3vDNb8m358fdKay5WTaakDwea6tKaPk",
  "key36": "5qD83HN5Y8xWERyWk5KXGZpv6tN3Rk5hEEW1NEcCVDjYCocvVW7MzCAmW3FTfXkLp52K7C7wwunM9ukmCRuEkQ4a",
  "key37": "KcxMYrkVN9jGLcwPsVPNT2WkPEV2EySciK3uJKunSXVfBzCDooBEvjeeiA4uxbSbRH3nGkvhLxXWd7dTjPaRzRT",
  "key38": "3m66w3QTzqXEdfcsKk5KimzLzJybCapU5pULEJEcoeLYhZcf9YjiuFV2hiWmtVzhhAvUj4Prap3Cj36hUDdm3y5d",
  "key39": "5ytrKA87SY9MDXSKkX462FvjdXxusirZxPpFGGzPgu4Wqi5sxHrnd4zQ5Tb2GAszyPeeXuUntD5ZnxykqumpGkSh",
  "key40": "2K3UcUKM9NjbefJtZbF1YpF2BCn6gRnywqGBiX5pkpg3DqUtge49XEYCSkGDQWnZjMCE2mkJUooDzyhJZzUsadxf",
  "key41": "5tzwFuNExUXm9h9waizEvV9mh5ZFHcoyXdrzQ53cowN6xQWGHGXs8DZy2CUzdsjrjSW43tCJR7Y5H49MgvDy9bq6",
  "key42": "5xnAS8CZX7ikYSms92FaXfW5GacfJX9ouqkgx1DK95nPuEtGwh3wg4rXFujdDRk8rLnEvjmrZobq8BteQXk8SDhn",
  "key43": "5iipxFbuogci2YSXVP7nCsynWbzoiXcUFw4814zahc8zm1fzHFCQFcW1MRt6Httjhw2wnRd6FDuYK5Ld8LT2Bc4y",
  "key44": "3g9cK1vVqAV1MUEg8NXv1u4zj4dHsDXbdkRUw7J7Sjw9VucqHMSrvv9TbJ7TpJPJGZEig1mRjR8WXDcoMLWY1iDa",
  "key45": "43YFrkScMweZW48R3NHx3tJyL3bc8h75gdbGKDPawHe2HnKmyK1eWw9x9XFut8hdiCjW2L4mu5uvbSieV6MwGzxf"
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
