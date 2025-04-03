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
    "1rv8Fh69AfCCzvxf99jExKS5NUbJG4MTT8J94ZaD6F9WDAWjKFdKp27jFanmeviU484vxJP5pEPUib25UnGAtrq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y53U2kdRZezg8HPL52cK5A79aKh83WLJ8mDXgqzcV1aMDC1rP6pTgHZynBghi348tXNBF9sX3QYSrVsbwqzinaC",
  "key1": "5iUAwihuZX62vkbbkmzaj5JDCmXHf2rSvEN1dxUPPjBMmNzPR7kscjYyggKi6jAVzpoQX5Bypi7873vKK5rWgDyS",
  "key2": "39r7SMkgfF1wnyVqCQNoeuazjc7J4SqhSoUBysuvKgNSwvaD7uveayDnLTyCvwp6hk22Rh4ms2W3FsQRLHtbHB7J",
  "key3": "5iChSLNSeSji9cn835yRhVvD5UUTigbrgYgEq6m7CxABB5b3Uw5JLkwLY8aqGcwubrqZS73uqKtaSyQAS2HqeaYu",
  "key4": "RravQndbdNFSed558WbueyNjsVV82VD2wbrWqXmMDQ3QV3p6jpi67SMmryQFfv6wDaW2o67QS3L5qbjKZ23jTdo",
  "key5": "3XkSeaW5ivESRqi3ZMGj2WGrEcYJFN6X6grkLsXffhJG2ywcrtv2KHDKBypnDuSc1dg7nQvg6UWcGAFZzuLfF72W",
  "key6": "4eAt6YuRQE8Dz3VZHTX8txY6sq4ynbpdoiUbjLpLXF4GBNEuYnXwzRHyuw2ff5YXfK4Kaeero1Hd6GqD315wGmJm",
  "key7": "5W6M75q164keUFsh5R54A2JQDqjiW4h6vsdjCgREPB5AM7bpVLJF3yvr7NfqvYU6eyedzXwkHcZfgnbZELmTbAj9",
  "key8": "55dTv9FzNRAopkcsLbioG9DicTe9SFBV6WKkp74Ps3RwujUgvhgWjPrM9p6NoME1mhoryTK7rvUdpq1Cuv4PJCwm",
  "key9": "331qfQmuXN6JmPhMuUz63tJ8T62Ubp4M4MRC4Ji29rptuxqUQFK1ycpwaLXa2AiKgJuzHLBGShbBogTiiaHe1NqS",
  "key10": "JKJvXu3jKuQ9zq8gk8Aj8VLBvmNAF4YLzzgQLPmGVNoNpiNJ5YJPv5zy9R8whpFBfTbAx3heNaPQa3TL5yo427y",
  "key11": "4ygyqr51yW5JjHw7CEv65Pja9rFP7A8GyroDHFQ8WYqek3yKuFuWRC7ETv39j9ErvodJrvD3qxW9SqpyyZiRKyQT",
  "key12": "3xtut6g9mocho5drW54zfBgJcJqPoUHtAkrkymV4jrEVSFs61pq6pKReyKTa8dqUHBCW9Pe7AMR6Fi7rm4eLNrbz",
  "key13": "31sj1jGmYcLDDKobAjTbuK1UkTPHkGCdLBR9RGP6V6RGZnHBGyXJkNiXrx87bqUWU3Pf9nRxEhgkLtnbtsvc24vb",
  "key14": "3iazazUcfmu1DVG14ZNuY2J4pE4yqZPVJYsijYSeHBD8V5JZt7fZz4qdu9fNvbuGCF4wtrC2wNUZWfRWJFyiFbgJ",
  "key15": "3yzAFAPm13k3jXUD3JL9Dz1mdMcH3TB4iGM2XRNkavuvtxP8SNrNe2qqGg6NZfrYHCZPpsKtFpNe7fj6nX8m7ZEo",
  "key16": "2erapgjCUmxd85Z6Y16nhdzSCKu8BDfdtviToGYiLEc6FHNz6udTtMynufXqufYfNhFRCLYEfj48emiKNCLuAkGe",
  "key17": "NjsVaFxesa7PzxMV3PV82xSpL5xYKbDpTMkbZnsWHm8D6DwKKRFCzyMr2wxGhvmtufaQHNKKtrKUarCgR9apG2H",
  "key18": "43rWdwebRn6FGRu7V5tdk4MT67pCjWuPdr3z54M6FtcspvVuR1ubehf3Aatnezd5Bknxvg5VMfKKL5W7GQungC8p",
  "key19": "2ugprbFcAmTGSTWEniaWaKmP3NptnGWg8iyvEK5aRS8JXfviEaEjWhMQrWDaormZwuUmPiokqtz1bmpyyEEUf86t",
  "key20": "3KDgDCCSkvHHqsM5WsfehFyftkxYwrwHCuETpWweAurPbr7JRZ8pkAmbv2utRKPMK7VGCu3UbuvTBUFgBciQ5fFt",
  "key21": "51wXMbqcWyLMfCjZGqparvYtgVhPmbQtosTu8zufXQKu8p2wcEp6SqeTGQF4R4uyAyMqSNdNae9GxtJTFsF6Wc8f",
  "key22": "4cHmHjz8iBLd2v6xS8JACPQacGncUDRvvz7kbQ7ncEEHQZnhEbCd6JJFGS73ry9gB6cqEVCZ2AJNsAEDUkZZWKYC",
  "key23": "CNL7PnJF1uiyEJ6BQoicPQBNo6L4hQN32zyzXjPTrZz216QS1Vn1VMZZ8n9wirKfuXb7Dqek6AZ41bX8RYrk7qG",
  "key24": "4jzatQm4MNejQrdy1ciRmTTBN7bdCTywtzavK32rWK5bjWEBiBokdRqzjF1xAxY6UV7Kg6TgEU6X6Zv8AFgPQCW9",
  "key25": "2zSB6ThjcWNp9NMvzHevVTeJut6VQYKZcJZo2CtgA3cDPDXq1137cuoRoksrj5XSnvk5SPKpUBrerZSgXBdJkoCp",
  "key26": "4Pr77EXQ62Y2TpUbyFyAmn33JUUp4HJndaeSvKrsB7ZAVeZEWnaaDLjV1hhEEzHh2MMbhH7mo9MkbkELUAGbhExW",
  "key27": "2RD1X12J27WoeoddFaebgyCziN8EitkrnqVTqUZ7hGPsMw8CCT73f7rBBMBt423GXuC7MZdLiWY5ofK8nDa12k4T",
  "key28": "3GLLT3WhNDUAe9kac4EsCy9igpjyow3FAhMDq3AFuKzg1oAgHBF2w3nXyryX8maPYWQ1MdTaT73g7BDAQrQbRbQu",
  "key29": "2muvqnJvYzcUY4Ggza3rjv14G1pY7vF8w5KKwsYUaCHbsV72PfcHpP6Ebpr2qixtZ9xVXk8AJe3AFWhLySMhiw9Y",
  "key30": "uAd3S4hsBh1cD8SUtxuzmeux4b3KpiKh2jjWjN1iDP7o2TSgv1EhDELhrTrRAXuZXwSCYpsGmWR9mPY7XZbQQLv",
  "key31": "MatggyNBEVEB1hwiqfVszTYKuqXDPDZUFuMELhM6k4V38YjhYJ4QySfFcBaiRdgrnvAN5eEm6iESWdhHs14a8he",
  "key32": "nRxbUzbNiMrbgWBnZdT61V69CvpAmpkuYXPqRB3AA37gQFn61Q1FWWJVr7dDu3xAAgYEzZLeuYyq7MiKabXWcvM",
  "key33": "3qvRuipatF1zGAmESJ7KK5nC1nFPAEUWNedTgbicnwAgUs7jhyF9YraXL7tZQSBLdpeeV6x7LN5AJQnitnidrUC4",
  "key34": "4upjRWHDbNVod55uT4p2mKjWB8foCn3tkLdGdGqD4fYVcqtYVV3eC4F3Asxi4qmARLvkhEmxWtZrWiTBZYCQYM2c",
  "key35": "2Cj15DVofMAAERhhSgS8M9F6JkxcScVneZrZLZpYg5SVbEkd5oVdNgxhjHbu4MyRBTfwA67HUr57c5tzpHj5cxt7",
  "key36": "5xi6Duw31kGSZj6VamLWpHpq3wGevJKPNoZw9T4SoTgEna7owAUnJEw6JAWZuofmeGCGsYdVSGngrZ7KPRY8FtS5",
  "key37": "3faXky8CHwv6athwjHjYaXvyMtY915dT7MAREcGkoXnVSHhWA9cTuE9GFeCPVaFDJYNrgEFvKXJyqRuqNoDLh91q",
  "key38": "4D2eP4JbsXxhyUZbycPJJ4Ws3sgXJS8AXaSSfyanWJzNcLt45PirKSyK13EFs4SZEMKY7DqqHMSV4X2h7kzgkLq5",
  "key39": "44Sfkhqj9TKSxn7CQgpNeZHJGLLkVYneStn7MGX3SdM8wkDBKQ8PqEHPDDQnCcRkvETm5zGeHTWSzNLpdhaXue6K",
  "key40": "5X5onG19JChHWyE8xBDt7CTnAZV3K2RUTfLHyQC5395RWNf3VDQpaPsV1upKTwR3cLgDeNSNUnRzT7cRZNhfPXaR",
  "key41": "5HB5wV1EZ6ZCgM5qSfEGw8pkXfYrUVEcfSSKhpmUhn1d67bhmFhb9thXEGgxBFyrJZg8Mgi7Sk74wzaSgyXkrnRZ",
  "key42": "QaZmVHxst5JYFy9iYYBhMBbfjGmqcdXi7nW4S43PSkVoR8U1a1TR1WNoBf4EP65ea69yw8Rz9wM6TEqJa6LgyBq",
  "key43": "2RpgZiBe4PT3eZwiAE3Vte286TrbG6FXxxHq86zLqMAxygupFAXQ6tSpKeoDx6FPLg9sbye6qr5t9TJzq1QoFqRH",
  "key44": "2QrTt4EtZniuVz3HE2MiE3w6dZF8gQ8wa283X6HNdRaUCgz9HyCgyqy6Uks4NdyQz4rJ8uuCkQKufBDseUTvcjoW",
  "key45": "4xGUEVeUQye6J2BpioQ419bf2qmG4gXzx6e4XNRDMRncrHyVxP12NvXQvCu3qG718zJew7so9ubsevHY8PNPHvcP",
  "key46": "2Gatxenh9hFqMC8T8PhuHAbxfTUPWGgab3HMcUvGPFyAJmQjtQqbQPx433X8A8x5wEiniguNdhXX2y1NtmA7w2RH",
  "key47": "4CHvDUCN6HVR72CTqSXin7Li9u2sxHuvq4FUapD7QhLzKW6Pe6cQe2dWKUUdRyob3Zz3FFG5Q9d5cx46cUiG1gk9"
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
