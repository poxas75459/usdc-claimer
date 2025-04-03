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
    "vmMaHqP2VxeswNxiHwBUqgiu3912kzaZUiZWoMm2HXP7a6FQsmxhSSXD3mwUgJXkUY98abhZ3RCzMrDBt61s3ed"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JpgFZvhqzQTF9Eo6hMwNnMKQe27nJ81UCHKSRsUMFTG7ZzmhMHC9PqCeRqkLvT4EyhUaThA6vMHFyurGyjGdUdo",
  "key1": "fb7ecqimwQ5u7e6W5goJa9UaEry7WQxVqXyZ9GSad9CTPMdyoYrpmUsUAJyduhCiMQUtPBtxeMBjRectH5TckPu",
  "key2": "3gfcPhhjvGzJUE5WaGhA6oLo9cc54TuPivRxLSawAZ93A6LEF6Bw6D25MS21s1rTx3cgRsMFVb4oG9PV2DoAjXfy",
  "key3": "4VR256QFbLZdYh7o1V4HqGx6XnMSckCMa9D7E6sh2JBLwjXkBtBMHwuUfnUKcrZbW2JUb6dtVoegvDjpCkvix3Jp",
  "key4": "QEGfGDYZZbm3FxbjXjqp9iDBhJUDxq115UscBtBPHHxcbGGFigKfxANRdfmntWtretgitwGLs92jZ8LwABqqtZo",
  "key5": "2BKZVWeB3dpxWciSwySnNHNapr6Y2WbtYigE78p6iftSxKg5LsgWdrsV9UozTA89WiWTVu8msX7S5RMYdpPqDHxg",
  "key6": "4Q6ycd76KM7WMgDeeZ4PuqWUXAHAGrXm3LhVoKEpzqUCerqEse2QPa5KJohNyKM3VW86byP1WkbNmjyiXxQFAyYq",
  "key7": "3nDg2zygNYJdeAmZkpvV8Z4oo7SRkGbS49difuwXnmvvAp7krFCR2zcquLviGanS4v7jaYquXv9P553eCMRnsZuU",
  "key8": "2mwe87DAc3hsCqaSZaptfW2qvagsK5hNZQgjDFh9dDe4UZUdZw4ucNZwf4QysAEqZnku86LxPP2wBE7MpHYMqbrt",
  "key9": "5aQj76WfXTq4yzCsidmX2f532fvqjcY5LVFSa8vnFqATChHGX1niFTZhqAoJatZNWg3Qgw1Mg91pHax6fw9cNPJt",
  "key10": "2f5P1Rgw3GwV8YyLtQK4HGwJ3uZrEKErE5yFtUh4fjKKZH6s9YeVZpC9f2PRQGjhsrC5NYeZgxnKPPeooG8TXXSd",
  "key11": "32iA9BX4NgGBSGPnB4Gwa8cUKnWfjvCuLVU7M7x7FJvcUXQe6vUbEzuvJzFc6RgjD185VMAV8giW7NXMLsFXM1EV",
  "key12": "5wRChDAsfYR4RE2n8oUpfAkvjUA1eAYXsNaiiP5qKxN2BVzbiZP2jxyRAq5JBR21QtZLAUWbEqVZzCzBey8a62P6",
  "key13": "cP6cRiSYby41cnMp6xWN7TNmDQzdxdrW7p1kup6sjULp9ja5E2L8jk1gVtVcVW2Zo6aUsMihLxNPVCNZHhgK5kL",
  "key14": "2goH8cdxDNs39FRP6w2foeWncU3JgjjzeEWXm51qteuVmKDz6aPpgYXr5ahQjycYKSbVsFWSNzao9ZbeCsf9roic",
  "key15": "4GHDqNkhZEDQ3kMnkVEcXqZEkvcszJ1AZzLjku2StShwruNy87MGtoUNF6afyJo2prii6jkjZM1xZojTks3aLLNF",
  "key16": "49aQ7e5EhE5gFAkffAowZSM3FmYrDSQ2CJuCGrxmTvJrurNjsdrQ3NFWhWmL98CVpZg1BwueXigNqRFsbhBYTVvr",
  "key17": "UenrH3EqxTW2ddQMsLGcTVb36vSvgaLH4haozeemqYu8JKujjbKvS4rA49DR5PjPg9XLWMCZ41tZJYRxjroUQtP",
  "key18": "63LgyfSXok8xyZiZAThsYMoFX2FWvJ8JapFbqWZY5FDDjDmQNBebhaxPdp1JCkZT3EMKXNrVz95cqGHB76K3WEBJ",
  "key19": "2MkEYSm5tpiaGFUpXcsdVXF2zGXdmuBQ4g4jcHF6yBgWDs2XwpkEz1s9B9T37J6PZWP55d3KwKpB3HxniLKxPnaJ",
  "key20": "2yUVL2sb7majpjzzWw8PdLrbRBUrm2r2hQ9wEKHXZV1GDPTFRMgw47x2os96L1sJKHa2c8u8U2pcaPS8FhhHZjiU",
  "key21": "2KQU8B4FA95oHtz75MVaZopM4fRvxzw9tbQpyCgVeXLFSUXSvuKmYNm9kQz3BaCWTTeG89vVNfeVaC5fUKhTC3mH",
  "key22": "dtnhd31LBcsUTceHaqXie1YCJF8i39s8f2hn66nYhrTdA6muEmWQmdzq8TjbUVj95585y5NyDkAmHdjGkL9Etcm",
  "key23": "2jzwnxcv7UfB97pYUPnsYPcYZZSaUDcExzQa7HmyaXz6cqi4zhLrGfgupwyf1R5vqm8J6vnAGnkJhohyv3HuPQia",
  "key24": "ZnmVGKxUwLFMsbsbgPBXQMmXqkmtTN3Y5RiFsd8ns5YXZHQStmWc2wDcA3cT6WVVui9iN9n8k6HvMvo32SRrMon",
  "key25": "5NGLiJsUJp6gGBhL9SUJX2Rc9dEfwfCyNJ1DQYCv8ZvxTaVkDYjh1NRJBqqMEjogYZeW5qNmWdJJaXvXdgjSuZuP",
  "key26": "5fvfoFnbZsV5A7EYTPWLBtkweuEf9t6kbhyJPrfgGTmzE5ux4Axj4gQXDJ4szYMCcPqMPKoFKbrZL4CtciNFKuhZ",
  "key27": "2J4VSqdcJH62WuV8SMEnocjY7Afq49iy5HnPhLgJnkPrV5UWdyDz5RBYrdswTD5bR5cmWyVwNMsw8sSGtW1fLHoS",
  "key28": "93SoqYwaByuifByUiF8sHcNnacWX3ACpgJ64u79KLdF7egBV6uP5GnHEn1gJME6pZQT9QpdGKNzkhNEcdAFvkn6",
  "key29": "5YB4UJJWatb7sW1oHoCC5mfYZ3cq7RU87st3fyFyngX4AxrDT5qmgB1aAEtw8ykB73ZadHuPj7dcTosoEktRkP1Z",
  "key30": "2AYGqFCXorNswxUJQoiYKhdMAW7BFj4g4QzZeaQnaUradyg8pCZkq7kb8HGfA6Y5yijkjpMaQocgvBW1FH8vqN9d",
  "key31": "4oJMz4RfD8fGYuwKTMcPXqCzidwyaZ1bswwwFftY6zDQzb3GhS1g7ECSArEF3JiWDqDMqfrvAteH62XVhJ1dLX1Q",
  "key32": "ZFqV24yhakiaZpJAK5EtyL5hByaLhcz8a41SucyQnQihv8DfA9CWyjbETGMs4suD6CCaGzDfGcGnSYLTEKdg9VY",
  "key33": "38hLWQ7JqgF4XVaVWDWGvPRVj8rqMGGdDigXmAaJC9snVZtp4sQ9JbnQJ6hMMZPA6iX1wSyyjr7rFffc5ps8iau1",
  "key34": "3tS8iMQpfoVCZWKbTANCm53Qnn1vJMKLRhTjQoni29jCsGNGNfUPnHHWFmhEXgxQq848wTPoQC8x8czCcmJdLZLc",
  "key35": "2bZLsvaPeWwHpTpha3yszmiQdu4EgFgb9Tob3AG45xm1dA8oXaRhEgQZKhuzYPdeDLKm6HxMkhr8yCGf1NqV2nWQ",
  "key36": "2FLZ2BTXZqVZMUEYQmdQFr7TGVJSa11TkLkZ5FhWSwMMC3ZGNg54cja8rzZxrijCPkKQFbM5by33giPWenLQjYga",
  "key37": "5EoWiZwRiHsicRPJUkf7rXbGSd1KgjLDQaNkB4h9vDDR9t3RxkauHE6SgxXbM87ingbzHR9WdW24S2doH6HaYi1S"
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
