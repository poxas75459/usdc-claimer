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
    "3gL49P87Krj49CKydDHiifsuMCRj57sFuXaQwGBUMC8fjANS5L8SmXe5WZazNtbDcjxsaQsFr7hNqx9jyha1adPs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UTXENZLi5DZoY5RLYNsWx4ocuTt4ikFtApgCu8Cyigb8GTsmeEkD83jeprXvjNRRqARWBiSXyfHE1LB76SFfFeY",
  "key1": "4NtsagRtvaypTqFpLVBXuhTuJtsHYX7j5oGJJDAPofybE4HU62VNppkU3oyGQSarRQuWFm52aV7fUy159CRtXYZM",
  "key2": "5oxmCR8CVHkPH6FXpixBivrsGpaMhKZTgjTkqPgXFaupfCU1jgVYBMjEgWjBrSwELaKtpTd3gSMV9C3nRwP89ihu",
  "key3": "55JjkBfZ33XhmAtiSom89BpYaj53JWsZsLj3dmUmU8fV7GXLFFVz7VR6tAccbctxE1FffRtZXuZ8L4SubHP6JJci",
  "key4": "3SyMEQLSv6jKNHKAaFoGLdGeEsPCgeYSFB1SgrzfCZg1bYWAjDFZpJxSu3QaZk1sUursHgBkZzj74g4tFFchjCZu",
  "key5": "27cRqGbRAzyFVkdpAbSGLWWYtzx4WmHQheHkcKV6qGbUuhdSqANGqRrhQg2x4NjuKqfJjiQv1MqSDWCYhPaRVcbA",
  "key6": "5N9UTNM7mg414niszZ74JT3QNcojnxacbihxwit355KkSSsttr7PZ3CNcfjhtqtj1hCGauckakymnAngqqUEpUS4",
  "key7": "4VDEr1iemBpVKfThoXHUpq1D83vwZofSvR2JPnFs3xuq9xw9WvC6qjcHUGcP8FxQhLoimgh5eFmeKE9ZAD3QQA7w",
  "key8": "u9wz4GotCsTVQbhai8qaYqrCKR6e5vooxCA5qWhxcGnmLQ9VA2wQr9LhA2SE8x8ZfaRVLQZzNn9c5QyBtYJZnTL",
  "key9": "3k6yJBd6eLg22xyfdJx8xbLQjew3JfE2Avv3Zpv7RptTtRqFMmRHQDtopKHdQVk31NLr8dKnKvwKSruyk83Q8oz5",
  "key10": "5XA5mb6wG7Tc9Ys4Bq2rfUjfsWbmaFgh63gAJ8DqvczquAyFNkb23xHfehMXif5wATzZ8XyQezJkyaqszSm5WJvo",
  "key11": "hA2nStYe3hibTCSfXFdZ6aPs7b8cNb12EcRJd8uTj6T3PzSkUSLvFz4opKirsTafRX1WcXc4oU7qXmvTiTZrhwn",
  "key12": "3hxxpcAufit2peGx8Tk3Gg9zvufvDNTDLXN32ZRQLLCCH3acGvHy1ThZuMn6kWbWDQ9x3jjGm2SB5wqi4tjvj88i",
  "key13": "3uE2EuAsAK7CHeG8mMZnyEUA7ff4GK3jxoAJ7bp5gkX5mCvCnzWe3Rj2s3Q3HWT45CJdCJmFPB39qUzEwnbKG5jR",
  "key14": "3FLyqFyC8DyYKZiFJMkA4AsqKfNGqFg4miC9LHE5K7ypu7CHt8iVEyuurcihCUMdSEkRdRvbLC4T7tgnvyp6pJLV",
  "key15": "5mvm4hrTNRzHax2SvWjLfRH758Xy11yGUFkKv5wUwcDoz8JrqfDDX8qoYCEqjbE3iNUufsPm9wbEqT3LgetLVEBE",
  "key16": "4jrgGE47SCLwQpG4FZ8Lnto72LUU21C1HGrg16J6VhdyEsBTVdoP196Zo7nh4sErwvXCdveUZwrmTBNBf1PTuBqj",
  "key17": "2qgf8LvsjyonBPxV5TxcY9FSnrkxwcN5swQvB1cr3L9sU28ibMB5UuKEzY6bYrrvNLeyXLJWumCi9qZ28n31znUY",
  "key18": "uqohoyQUYwrkwQaUihnRmupaf5SaYvK7FSKbdUd5wSET68iT63ei9xsGU2eG62Rv7bWS2kf9WgExkurqMU9jdJX",
  "key19": "4J3ztkMU3fo8MEyRDNcTSfDFdtGtbfg5vQfSj8KAqRUFWdcMYkR213gqeajGGAKzEkSUdRfNbcJzA9Xg65378Ha4",
  "key20": "dChMTxudoe8xmWwYNAD23uzumRbxCKzytPVLuNLvhdm6yADpiuFuZ85xsdutW68FkTCncWzGEBC4ntVUvJdN8Xs",
  "key21": "rYKNqXQnNMZQsLTfhr3FXufq9dKqWcG26JGski1CWAHryMMayV9jrfDRQwQr85LGrsRV7z7c4MxuKBTPuH2AaMb",
  "key22": "3T52hXuqEsovdC5YXGJCAjmBzrEqU2ZxK6TJEmiXM3coaNSdfi1sWjgb9fvKM92Pf9jafTZx6reHiz3njipZaBAq",
  "key23": "3WZpT23F9YBA27RQqXNYA6vaJHwNqN4t7oxwUBzn612vUdP8KAmtQMXK6HCn2gfzNEMtuhZypM8sD7a2eS1fwu44",
  "key24": "5bpH2XQJ5BLBq65tck2a4xFZn2AmM86TjMNUEqXZAwEuVpjQLkeyFczv7WuezAibozxLurwdaKTcodtyWrBMrXLm",
  "key25": "5onMkMbMth9eArz6G1Rup2fvCbD4cWm69h5FtbVoB5MQgzKSid75d1WUhPPAQdfn7dmGNRz6Z4uGYxef9cLM5kU4",
  "key26": "9tf9mjCfjcJxPazw8eddbqD37Aeb3YwXMoE7wwEZ5v42p6QAm1oXEhgeAwm9kTtnuthVUrjx5Uveja1Th5qgkzq",
  "key27": "2Rgpe582K2bX7FrjYdtEci9ZRn19dueXfB9PR37RA11Eb8gLyLLMyAAxHCGBdVW3DYipQ1Lxh8QQA8V36vgyfTDG",
  "key28": "ywCJZtPsm8qLjEawjNbJk9eVYkLbmAnkWBWrNgizGhj2XdQwCyDgtQhGV5VkoAxwmHqB9A5SvX7WAULe1JAvfu5",
  "key29": "2uDXEM4Uq9mryXfGnyDXpgXyGUwWTwUegC7dCfDJ45g3XtXLtuYJbYLMg1cdzRopyEHaxegBFGDxydDPNf7iEV8s",
  "key30": "3AoPZgiSi7pfBNgqqTjubqEYnD2ymgVv9m3aFUXNA2uCtQXLU5w3tjKLng6XPCHUGdvTSQpXZgeSSYsLC46iRXgp",
  "key31": "5cmnfNjFEpHnK6DD2hLk4RUoxoK1zA3Z57m2MqdamENtUZqaRTeVkkEwD6qiCRdnDz12cDVwKk4XMiXL81WtBv9t",
  "key32": "3f73QYML68WvMKEqbQn7erTpxKUh2uzYwECdGzcm84ENxbcreRaSx2tiwousJ57shwynSUWzpmgW3g1hLAfJmAkh"
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
