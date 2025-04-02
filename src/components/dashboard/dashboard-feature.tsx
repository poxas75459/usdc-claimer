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
    "57qJyE3DBEgPhPDK9b4WnRDK9E6rz8yN9KUZp48hqjHsmkTuvctgKwQsh2auSUVyJFRLUNyTfmPneQw2Q8ZPpJdV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XCwXEEXmto1z3LVuzR2zTVaM6aBPSzgzz32sU6uMG7NdZwt6eB3iuYz3mqCSnyfD6SwNHHHn9PDGVU8XeXBVhVw",
  "key1": "5gvGcfEZUs2HrT24nEVhua5D8qdUDDTJTzPfXVpz6FeunR5eYKCmYAaDZspB5VvbrgyFrKiXRNeFWfYhtf1xpUMf",
  "key2": "3uAAXnEBVUTiBy8K9Lf7BPo8eqC8AZGr8naRUfLPkTmGZRk9qg9JDFm6taGLJRbn8DVVbA93D1hkJED7GcpyGuND",
  "key3": "5ykrDmXyxDUeaNdMWyDTawhKm39LHwn26GSg3ufbqbmiSNYjKz6LPa8AVRYhC6f6udYbEaC2564GPXSmoqc1jy7m",
  "key4": "35634wAyJF63w6LFRcjzebpHHe767kYC3Sz6MWJZAY3NP9ecZDJ3NNreEwRGnmzkbAuh4cVXutV368ZweJQ9cDu5",
  "key5": "4xS6rWsLKgxWVMkmFngZNEhNZYBr1Z5aRB534drxzjh1HxPpmbPUnaGQFDTY2hE1s6jRufAF2wx6xNhhdPbpzxfv",
  "key6": "5RVC8xbVoBndBHyAzmWV1XBqKmAUMN1KeEYEHvJS7kLQth7DbtyUmAR8gQi7dhCuKd3Z6Tqg8bCncSGfuAm351oP",
  "key7": "2dBag5CMEa6hmEfoJkWUtxJjKiB4khT1SgiaiGZvXkPrMdESrVCmdbnbHgGJkZUrAvPdYiaXAotLXCmr7tsYpiqh",
  "key8": "3TMNQxUsboSz28V9D9MHcCgAFTCRf5FqisEyt8Ymw8SNWhspRMtTzrASvhFdZCHm81TanK3MyX9iQFudAXSTNpiF",
  "key9": "5Yd2Sc33gSDC5atztn7Nctgh2td5xx86SzXz5Rdmmrij175xuuvAA17meEyXSeCBcWfGWLbi1ewAEJzqiA3zay9s",
  "key10": "fNwtrr7Q6qNC44UdKM4yGHrvkX1FYAPHfeeYfeNHAFUmb2UJbpcYZggD1LoTCdLUCTxWJZAEaiZGuTcQKE7G4Jd",
  "key11": "2Dnrvs2VT4mGEiPg5URXh4EJ5jRQiETb5Y79bwq4Lt4mjj1rYaCt99r3PAMrkBVK4DenaKdAzVFPQ2YeXxm5qRcS",
  "key12": "2d8Nz1TaQ5YJ4wk2Dqz6HwcNqqQKd9hX1cKdfwAwjaSzK4y25oXmdWeYVpHEgU8JWGayPhyikZycFaa79z81re7u",
  "key13": "3ubWie7UeujC9Y6uguGErNDay9CMwmDi2potcigZiRDifKhatqmYn6JivuraNN12EoeN5ZUsWaET4jFx5mt2Y7ha",
  "key14": "2o6EwMmW7TAPvBz6N1hGzqH44wSH3VTNwHLtFu53nrYpjqj5JuCC4sAohquemr23e6bSpFzKe3TbMa5hhZuCsBsZ",
  "key15": "4aGF4yoEgr7isrynynfqA5xQqQku6cGvJkLdVCRpo1iYoVEzKFA2EcZo56HTto1xWFPgdLNb6GXvEPdaoewz4jh1",
  "key16": "4VTAjFKFAaXmQheWZuuqfoa941d9iBhWg4CKQu6pZU9ddPaxPiDd8p4AYUV74nJ95i8auC5gq2VSesEQg1EcB1eD",
  "key17": "4S76wxjfrzucx33s915QJ2FhZ655tydU3yqCuC7Goo1TJCz5JrW4Wv6UYtS9hGdcgCERdt6Lv23Jf5X4cTX8DxrT",
  "key18": "3hhvxqicQhMjkh5itjUYFgpqhLvxczwwnxBvw53GEbmMssKWKDioPEdff3Dz5GRyMUDVH7YqsQL3GFk8t7BJGF4Z",
  "key19": "4VLxcXmTNLWhR3pNXETN8BaGgkzU7AoeqeTTY8Gk1BW1bimGT5g69gjHeEMR3YBHK6wu12a1JUBtjv6EWCzggBBY",
  "key20": "4m2UQ7bPMxvczBTBwyKJBG59dsTWfDh8keAJd2SF2dBt1zNxRfVspuoMuFdR7PvpgeG7zbFx22YbxEy3M1nwkrUq",
  "key21": "5N6Bnw84wUsx2JCpaNDqKi4FwK5aSaMgDwYgoDVpeR5gDNDdP8HnS1cPcDtcSeFaq5gJ18HZCbway9ZWoR8Az6Tq",
  "key22": "2h2M3D6YvZJwZ6QMud6CCBopaAsLmcY16LNRhG9gAHGXwhD1jpFMXpFrRH4Sw9zxhV6YKTof1gqiWMB96hssCNN3",
  "key23": "3yweBhqKk5y2iq43PaXa58VtJmihX85fs2zssK5fo6rxmLCc5EUzP8eT56VGXZkQtPMDF4415zcRcDimPWEzS5NB",
  "key24": "5ufDWkFryqy428FkuzgatTSnJVDTdHC4eocJ1oefe8oXy6vwnCxEmyuoBMfb6jEBcmcenJ1HZbMdnkjGXfZwG6SJ",
  "key25": "55zLWtzSd4QpCq5shtVcqQEy7XEmaq8FQYydjL2NPzwgqcvwnZVrjSrk3bMTnKxqUyjppKn9tH7A5sJ7Dvpi6fMY",
  "key26": "5c5snFDreg5ARJ6CGfs4Wxw8DhTUBvmJfC6au568YNzvWFPHsdbYUr3VWJTVANg5BpteeR2is1kbaUNo2Gn8PDEH",
  "key27": "QfnKErKE258jgNd6xcctsm8MAFYihGdnpUm5phxJdXp8G1mJnjhY2KWM3EdKz1N2uRen9a7CH2UHa99KEMv5tMU",
  "key28": "3t9GHwP5nZUENy1mQdviccXk54dCfTE88Q4grFjotvsYDEKMHaw1BVu2nhqxSaxB19Ceqf8CGSWuUbPg6VekMZ9U",
  "key29": "3vbCTLFgatfpU6cLzdYPjJ8vqcZDYDFFx7LWE8kn3tXboS9ipG5UgYBTBsEaXzjqJR3A3Y9jGCBjEymMMmANWmy3",
  "key30": "GWLJDDpMbEKUmGRiay7zaKqvtpDpXTQKUJEohmA5oDmknZx1728RknuroKX6XMFRbMvu1vgvxHtkWgtUtppbQQK",
  "key31": "u8yxP345uHKWjmTcXhx3GifHeejUpSeXQQ9SvEwF2jj4vC4JuBRD22CyANzQk8zcFMwxJFtnoRMwrARHWv9Ngm1",
  "key32": "KUPUjTapbXLLtu8dk7V62F8SzFr3H8PqTr796bG3L6kzS5oVnYJL9oGozebVzRk2n8oUTwNDnASWnwDtFkjLEoG",
  "key33": "5bptbveX3d4N6jb1JAKebn9RA148B3woFda3fNepBF3mnKyu7GCZspcoBGYMzktaMQseBVpvYg8aocUdx26wsTrt",
  "key34": "412ru55ANXJL8nUbFPBYE34qmiVNxQmADQF1r5aPFT74itt1ufGebF8dS2d7ToBgMXR5RBGB5mqMbZuiozQpZ3hX",
  "key35": "3U4uvxiDB4F7cgwg77mu7byJdZdeunzWP2kdnbdMDvCSThhesRk1yK5bJgLzy4YYwjihTfCZs8Vjd8eb2Md75xbr",
  "key36": "4256YpUA94azWqk4XpNsfDTin1PmPuNDaxKqwV1jeLvJtPWFZTC5Rox3uzAPqeVgjTSo2n4asQkwPgXxba1QFm5C",
  "key37": "Njmkm5ic1tciwExPnxzo68Sfj4dAQ8CRN8LeMnHe4fB99rXa9bsuEaamdiMbEnUEZZTWYSJQApPmFSxq2qfBiYm",
  "key38": "3YGzeiVnoEpLRzxBe8XSeufCSZU9pArFRw2BLcfPTrrgJX8DSgv3kij674WP56c2dFDzWPBXoBSwFHR8uDd92nQA",
  "key39": "29o4deRwFLW6GoNxKx3tLppXYca1p5KhYNmVGNupcLRk1B2QiXWdzLSjTSCy556k6DX5nHpWcr6vVqJqMADwBcC4",
  "key40": "3DjpbQmPVKJfJSJGwbLoHi4yECGmwqy9EAbmfULXw1UzbjZV97A4DYS1UNvA61WEQWxAZZG29uVThyEoFTWeuFV9",
  "key41": "5iUWk2DEA2B3gLRYj1VW8jhuhE1TmHCXaUdPvQnEZyGCxKPxiSHgY6gyZx1JymnEKsahTCjwqffb31ZvFa8rusdk",
  "key42": "khkCTfCcrvHpRAWbgn4mgaUPXWQVKpjsAf2yZAFWzot5TYmiAu4pKPwfFsyEjYKtxAvqrCAEr95hHHJdWHLausK",
  "key43": "3DaVYY8FA8nmyM8Kbik4872X4YwLubMNJvhbPXPkMLu5rJwfXgiQPy9KYWuXajKwoydjAmC9BGCHiFm5aqZvC5dn",
  "key44": "32wYXod91qyVz1o4N1PRNnUo4nVM2BcVaMfMij1cFg9V3Pnw2xscdVXrXaE4iCeLFgL71nDod8LyqiwVDhwzn5hg",
  "key45": "4AvQ5QrkTzucPFqemvBLA6bzuB5qt2TgyVcC8SXVNMfXnTpXQsSyEc1TtsdhksQMwozsPNT5jdefLy7vuUdWHwL3",
  "key46": "24VuMt4PDKTtA1JAkNztereHLSKZiDH1Hne3xhYmgwWN4niXBL2cp6K77WSLNpjmjbj7wHWJUdgEttPstqSyyoRA",
  "key47": "5hqJTLRUUhMaymaLu9XjdL8igLxnG97Z4CpGW142kNgTkodvXnDeKG2PLsZ1ebcoK33qJHDMm8VBhAkmZNcayjZ8",
  "key48": "5vjJZ2hX9WgDgF41Wu7UgRGTpCeoPQiwmtSA73rTfbcyHagQ1ZwnPVXBVuZsbJYU4ycGJ38UXefEBuV6ZeLQzGY7"
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
