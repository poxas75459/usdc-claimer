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
    "53Sjf7i9qrVYGDtG9VveyxqKC9zy1LoxPjpnibR3AzGDZiD937Xg2Fm4zsKQ21h6h3o8CvLkWusfMqvSi4KFqPDR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u1BdgoqPKLauvy6Lh4i3sgL1Lxij8cAge3hTTK8N66MMmiSCb8ZbPBFsA5Y5f94wPympF5UXHfKsfXsertfw1Qd",
  "key1": "4S7Bedvf3qV6qaEokWwnj4PP6ky6wzfjLeTnR2DdcmZHfQtupvY5z7EsGWkHSFdsmWfuchxhdjVK3djRy1Pu1eQc",
  "key2": "4qGiP7RvpkeCAoSyYc6C782FozdkJ83CBRPskErpuwarMqV2ssmDcyZTPMt1ny4CxdfpKmnfzn6XkaGxbQVPkwtr",
  "key3": "2gA9TLRYzuabutw2VUeY9i195MT8zyYd1j7nGWmtTs2qPMcTbmJFA95Eo7KRh6XZdf5v5fqE4BFWBsXUT52PLZRG",
  "key4": "i5KZSNCyL8edDJVZvEuuANtvym4oXJLkN7XgnNnZPayvXeCKhL3uLnfn28siqybMR3jVwqAq4cXyHzZe8riUJWL",
  "key5": "3po7TdHa4YxY26ji11QfW4Qf6DE1cqcL5o2U2rGLWP3bR1pXbdHDRUZZwv6qhoNzctYv7FpfxmpsQBmv3PpwcUo4",
  "key6": "5Ge1BLmvAh3f8wjz8iM16ExCP4aTkCNdT7CYQfKDuKtEzgQurqgTZhxAZknHEGnzd7Gz82qFWuECZPhRe4Bxvt7i",
  "key7": "fEgRWaG3AXvGoEmBjKdHtgqDhicoA3PDsuTajzXTpNdyP32Pj6Bm8JxK6GYE5J8EGuGWMbS88TnPGTe6DomoL72",
  "key8": "3pQgZ3uFF97w1r4gArTqjq2JzSHVYycvjmJkhwrqLBMoQFobG1jCz5jjTfKYt1f8a2xUnKGUay23BQYUEAmuQQZB",
  "key9": "LwCbAJUcQyHs1Q5YSLASZDwd7q9Eyr6Hmmab7FqmbFHf1xHKMboSoBt9NVhRqcNSoD7bic3BFACFCErtkax1KAD",
  "key10": "36FZt8Y4YCpvcUxbAgk7bNzMDtTHYdxikjae9cRD9dsVYj3R6X1SYfCEdURmGMj6Df4Bv4gNJf6HYj4rj9gUiLcW",
  "key11": "2bBLSA7imr3qFnPbECSgQN6dcjkGV4WAZZsjr4Vie3Suup5PELENtAHcFFAXv5fVrivb7c3vJKexCbxm1axJrRP1",
  "key12": "3xpCawUqyzzPhzkQAwDTpiJzRkCmj2YbpuNTgdNkmx9CCgDHti64tz2nEAazJMt7XkWhon2B4nJGHUWYL75pj8T9",
  "key13": "4XV4oCG8JNbkrJtbucGvMFKaj39R85zPMGf9YBJnXJ7pG3ZjHFJs4j6aiYPSinFcutQxsn4pVj7GXipr8oiswp3V",
  "key14": "JaW8VXQGByg5yYZxMjt6RPPFigJcLLaweDx7gdRdVn4Ecgn8pMwQjU9FkPPgPTZTrchcu1FG98vaETaotvksSn7",
  "key15": "3mDU5st1orQozZt43rRFU4ck6yRF1m2QvuSD3ge5Tc9cJs4ai7Rn63JxRKKoau9XwBoMiwtdaDGy4aPwDBfiqoKe",
  "key16": "fTAvg1GqBPpocSFva2qNsViGyMeCy1gephVXt8PQnQ4MsK8bDTTY1DTmdTozeFxpm74G4i6aMCkZRSS3Nj1rFxD",
  "key17": "4nFJj6vP5F68uk8AWuMCyBPrYphjN6ZRT2fKpXQnBuofkSmxspu9zgdW7eRoC9n9BRgLEyZYMMPiTac8shzTDwWp",
  "key18": "4atoEhe1qTBHPmvtn9MkiUkCrJpca4AfBF9q4ygoPjyi1Ay7TATwPDJ1khcn6WH7eW73TzWDXNPvmtFNf5Hk4YRp",
  "key19": "phwtUgGZnua9HueQATA52m9KzfzVv2AACvQd3sNRAVaH9y15L9uAUgmy1HzBwauvKCA5o9EBQkwkcRyD6Xpf3ph",
  "key20": "2SbPJNoADat4c7mRHQDCeodxpSzkYZEpBjn7SYZHJYEXRUaFwZBxkw1RhzCg9uHLV3ysgyL23uJhsuE9n2LTmk8K",
  "key21": "6kbgXBqHVtyKtX2GUK1RdsDdafx4tWQ8fELaDReL5DdANGj4WP676W1NKszxspZXjt8zA6bvWLYuWYg7hYQoNw4",
  "key22": "5GjcoFTq1Fsh4fCjCbe8houC6d1djUJ9cviRcYtGoqsXZ5X3FukWm81vhWSvuV41NYyErTcfD4P4RXm1LpnNzibd",
  "key23": "4fSMGjPQb9db69KD9WzdvrJDH1syLLNNXMAkmzn2oFa5f4ocz9DriVWYwVy3uRoqVQeZSJLvcWGDQSPNPGCMgHWF",
  "key24": "56156u9X69JgSwaCn8NhqNvrQwuZkggVACFPrPJK1nan8AbEjpEEL1YyKchmJ2udB9um56EbXUrq1kPPhZLvcHsf",
  "key25": "4utyavhqzioiC7eTDrD3YRDzRytwSoqVJduM9zfgFgoocHBrQMKRvUeepvvdmv4Yaag4LKNRuWkUMgNqTqxLUaF7",
  "key26": "2iGuBusZdrxdHsM6iGmuukNxVc8jtoPYpn9hDrWghgHoeHRsdjphDQapwQRYTMqMRFN3AgZVu1NtyAgMiczzyutY",
  "key27": "5SSk1jdZ3UMBmiT1tBrCZaAae6UkjnPgiKLDMWnoDdeiJvBNLjdhQR3aYthES4mAaHBzHMQZHSXFmQWyZHdat3qk",
  "key28": "YqZbAoJfiHu2NTh91cP2S8FWdqsTktK5fyan6PWHqjztT5Hk3ZyJNWhAGGHDmxNCGkXqxzB7bAjGSWwqvkD66m6",
  "key29": "4sdSXHUMabCVihZUDMoPRSbDSKa9LxLMXMrdrQcmceU8aXeAxagqLh8mwtiXXSV9CuHnrR4QsLM6xNAMYwPiHokM",
  "key30": "2CoyrJ2gPtwjWZHtofZEQmJoEfhYmRyrKmTrPAftJaK8wHfaTBjNPgU5e8srciSmfnLgepJE8qxNYu2GTzrwJ5qR",
  "key31": "S91odEgfHY4VGL3Unvww21WKPKrQAJRzqDfZ2KAtfVnnu6Vp8TxNS9vLYuLfJiZ5Trs3tZxhs2kRtnLYLdbcPd3",
  "key32": "3Hk3vzXDqrjSZUVm4vGMNyQwohTVwDu4K7c4dRHBvsYsvUc4sFcEkYgGjVJFfd8pQ877cUbNQwTVqi9X4peH6jbt",
  "key33": "61SCtu35vw2x9TyLbP1uLJwSPUT5vkDSgvob98RcMbbqSjh5oSJkcDEE6HfwynupTwft6AnCGfSB77jeCzwJ3yAm",
  "key34": "5YVYdPaAaqJszzTAH113kv63WxwvaG9ZNKDTmX9fb3ZBqXDZD2DJn2XnH3BNQtV4a27eM1VQx3MkwUkmjmsS4hf9",
  "key35": "3fZsPdJVkyNDg52fJpTpf9AqNY2KtV1Qo1fyWaDqfYrPJt2QNVVvLLB6yaH1KPcUG6KaiaeYTge9guzNfG842LM5",
  "key36": "4aeXfxy3s37cm8VyiVYKBCU4h1CdKcKWJCcC1VHKWJSxwJLNrwcaSCKLGq2XP3yDbRoVcSa4PvurYvhogoup7W6n",
  "key37": "25PPssav6zzzFUs85aicMZNgBSGzfBfDXqWpPDaMFa9WGfZDUTLyevmFoMaM9Tt12ztVcsHHHafcsaBmdApgAKQ9",
  "key38": "4mooDeQg5zkfNhUUqeX3U7XeWVq1b8dbobRWuaCaDtAekQw4iqdH613sfPAywWDPeRgHz4dyuoYjZqs9MJ4QmBuR",
  "key39": "3Qj8q78ti11iq7SckA88uVRM951WQvdgCDHQnWtCd7CuUTtv1hrnKprYNN6QJFnJqoRwPcPvRJoJbnmyD4SDPSr8",
  "key40": "S3Yh3uzXeEhtBbEjn5AXX3uyddQgCmH3uYjNGqBCHLtrj5e3SXrXC5a95saLw2SLQzp7QXSsGKwCL5cmA43jfuL",
  "key41": "JFCYUuirz5FFpED6dYCQFwJEh2zAjgD1WEifEkAYja8TTkjSMe8TbrvgmWKsHoNTckZwttynMa1cMkBNntS3zNM",
  "key42": "5FBfCLT9pvXcgVGrr2PC5YmMvutsJaLHANCxW3jJ2pQjKojm45H4hfoWiTtFpyTgtSuoS5QrvaehZCaJCNxZhdEG",
  "key43": "WL8azjkeGH1U1YimNVg1tVXN5G3FuRCSdx2jGi7DdoxdTWVM12fMRDyrKig4igUdo4fxBAwH6ixsEAzaPS6R2oG",
  "key44": "2gce1hU3EuCJ9HcEfakETsH8PC43dcb6EWfQpbJ5EcFERd8u3EdHBY4C49VE394rhJfdVtQQkCZgXUz269or42b8",
  "key45": "xXzwXCvhPgLLnopSC3eD4eGa7ZtZD73sWW58wwbmbXfmjqdNeGjPdZAL58KVGcFUWY1AbXfXXefeHSvLPYpnU3X",
  "key46": "4nsXqRErefCLZnz1nG9dhzrV5ypLQ5z8SN5tuK3WMqroXhJNfXZRZW9NREAvQao2FQuifiY5eriDbMQSBUgxUm8e",
  "key47": "JM4Bt3fyELtEKFvw6mo8CHWobJ5qzdeeYP7qYPDEjqZ7KGzP7qWXT7FtEVCZrE6H8ZEfq2F9MtvrnmckvSoskkE",
  "key48": "sPYM32Hkbyp8qnTY7rP6JC96aky1kvFoXzKGNHgasQwzKTPuc9upmgZroccyjwW1wBMA3j4r1veJDEkXfpTCCqT"
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
