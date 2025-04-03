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
    "2nbyiddhdcnC9WKFrQKbk2uUqM5XuT3BPrzmgUCbEQHKiVDZt7CkRLjXU8ycHTogkcRDyD546AqXf8efEyeCSzA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WbJ2MhFMSXvRfu2Ak5jbxD1pH4u17NW6Ehi4fqqjv9kdmmgtZeq6YYzP1tp3C6d2bM8PQfprbxkRSZZdYuyt1vC",
  "key1": "26WtzGbtK2iuQjgp1wjP5t87oTjE3hNpLA6uggC5r3s1Re6s8pr9m9mfwY59R3kwgQik5Exj2Y6LhMQ2LvvQDoRv",
  "key2": "EPmdUgo9ZD2jBm45FrfGm5tayXmNGsFqrSf8yavmauypzU8WxK6oLQouiEMxN5t5PWYhX1mPbzoy5FSKdgLA21N",
  "key3": "VDDtNn9Z7AecKHUepus3zE8i1gKJ3V3G3GSmFzkEYBgJkfywb8zkohH9nSTxi2uXZi1eebFpzxbv6pin4LkF6Bo",
  "key4": "4ift9QaaDM3EYkNa9Vq5xCJ6yZWgtunbCa9VmCAVqsft9vkPfgAGFMEF5qHFVwWEWFsFKvwoDwi4CyZ25JAjE2Bs",
  "key5": "fWrVCrJk4jUCNtFWiRdhidwwPjqASGAKV6mj8LgF7YjekkYCgZ7pLZgfDYwpJH6rZp1RGEjpSRV1u85gYjeHz51",
  "key6": "2AY4YGNPGEuqhGA61WhR4jcJctWbp7EwFkqq3mtqXdf6ENs3dJJvyVNKFEoroi2b8SdEjKpYcT6P8pt3LyXxxyqC",
  "key7": "5v93otM5WYYv6hjZMCj7kLTKNySozgQ2qHwB8ztkASEzJsR8ks5ioZuuvuJhNxF21DMLNJWEso7QCSSuP1Fxexhb",
  "key8": "HYMoGDgmqoRk9nvje4HjrG9RgYZ8mRK3uFhJr4eY7tH8pFkkswd9gki6ZkvSy9VtKrPViFaaThm3EXyxLd99QPv",
  "key9": "5dHTwzrKxAexCqmX3NwhswvPfFVGpumrUi47mvgef5LT98HWzCDzvCoyrxcNGAUgpJ4p5Qmqa5D57RboWK6VWU47",
  "key10": "2NayiYjyzn47aNkrreBLuw1NJFAgkasQU8FX7Wvfzigur9mwoLH2h8yAUqPFQ7xgJYFcJVsMGq8Rn7oTZzPCnrki",
  "key11": "CLYV589h8tCLsdx4WR4YGJ84CqucHKms8zE4chAJCFB3fjuxX3xk5P9w5Pax9B52p33cx1QYZa5FU1xiAnbzDr7",
  "key12": "2rL5P7iAmV6ahEVJsckc3KvH6Yi3ux1UnvWw651tU96rK6LeBoGBoT3gqte7ouWUabMUUuzH1SPF6tvmGpX2DNiH",
  "key13": "2nec67PgNiBeryALXbd1hrbNTTqSxTcx26ZeqtMyZf4B2SjyoMLQmFzpt2YEVT6u5sWwBWgyGYt4rKL8uNGPJqqG",
  "key14": "59THysns992ih39Hzunvt1rCbrcivGvExXd33uqEqdpgLEYndf3PqC3ufUnX5PrCSkXzZu3DQG9a6xXPvtG15wTz",
  "key15": "4oTXRwHxmRp39UxAhbhzKb5ztnB9tZ6SNEMY5wYZBv9g3KNEWj9Tp6Az76rzewZuwzBX3A3RpudRWn6Q7A1z48Uc",
  "key16": "64dpcgbdCEFL8PB4SQQQzkTMipJ9mi6THcvLMCcnLi3AZhdWZyqy7UzR3wN8baEFrieskncABFqaMFAvzV4F7WkC",
  "key17": "9HFG5MohK2eUrJ11YypCpmvsR5SEi4GFKA2d1A82NgPS712xAmBH9rfQhscE3ZrCDKtkZdMCnuJ8HQtnQzXREUd",
  "key18": "4XnnP1LE2TQuvKNgqJyGkzG8xqB3VgQ9UmNhs6BmDZ2AGDgTdnRqcaLCKT1Aps8sXJ5T7UTtKUy6cZJMczcpv622",
  "key19": "5r5uJi4aTKy2EsFX5ofRL9BvxfkijT923XtzjBCMPvWckKM9V55333g13V4ext39BtmMiuU1PcczP552aYYSYd8G",
  "key20": "5ksPnEyn8Mv1cc4WhpszRsvB7c7ynQm44PjmGZezJaE8xoDpzWUD2fPxXqRpixzNSaJPrwnapAD4YxAqKCBrSsJX",
  "key21": "VaKPErPDNaPP6w48D6ru1ZRLYDjUisAkD2MTC9XCSRcmJDBpHncZsfC1JrkJcgYMsqkmFVm219oQUd4gic9SKAr",
  "key22": "dZX4T4NVUd1e29UtfESi4rdA2FHCXczu2NgpEDSyvph2vrDi3UEx1qpmpd4zbuNKLD9RfXNiVSeDP64W7yJkGtx",
  "key23": "3567nCKqxKihWZYRogKzEwp95ZUdhW3yWyRdCN8RJDTY2GEEr8XtBin5KqVacZRnrw9iphxot8yR8ocrfcs4NfR1",
  "key24": "2QJVC6obfRLn7XpXCZsDzmHJWSBG7spSwumxUShrb245Gh3JbSb5Y4d36iJNiAbP5UFqdBYk38i8YQe6QAdhpaVd",
  "key25": "3A2emppYHFWwmbNkLvy2m6FryEbLSwKjVJNiAJ1aQHYSVkxx9Y58gsGBnGaE4GDHaAg9AZhcxjy6QPFr1qQhiyjQ",
  "key26": "3i2Gu3Y6KGvuR1DsShq6ERSSJJZNgsLUePNsABkMgUubWa4FnX2PVjvaHUgCErCKnPu7oq2KUj6xGWN3hNMd77gB",
  "key27": "4R8jjoeoPFKgvrcoFzQuA3TrVL3FyMwKGjgv5zn5pccK9UwbDt4gnHdR8YxeMVJevGVygr5nPF5NtpgZZmS9ugct",
  "key28": "sEMQs4M5pJ3bHpCSbwvQR1ueTFCXHhi43ztKaAK7emZRrZen22rvGF1anmhEudDEaw7aYLmWyuRE6iEfDF3ptWS",
  "key29": "DnDFg46TaTx9LMizsdrehB8MXA5bxZHSMFmjoaoAbd9ZSV3LVkMwJMNUyVbxd6pzAKvXz1rCnwyzYigpzFq663d",
  "key30": "4C1fqWXYMAKziSqsDosFfWe3kSyw4P74s7aUBQ9ry2WpWQXHtDscUnxWQWz58GzzMsgMzzqGhYYiiRCQiwCEyrY2",
  "key31": "2pCWTzgd57KahtknZaXohafWzxkzgWqSJFPCxZ1PyB6n87AjrGfVAstHqAgMFXYUdm5sV3jmYqQKqhgJuSafMdy7"
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
