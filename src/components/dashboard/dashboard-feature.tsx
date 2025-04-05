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
    "3BwSygDLrxUc5mZYPDDn8yLsEHEMbpJugKDrZYuT69wmg6v8yLjdu9VMgZ7dxyKocti7PDuUzmPyTbwUU7t4oYrw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U6NzNt4YtvJqJ651dPfUC2TGX9Y1sTBjQ5MDXwdurAuxYKnk6EyvNNvqhxA3fKJTDMpMk1cVoe9NBAFuaw1nixy",
  "key1": "FYNrpNQQ7i3B2bv4hPdQ1MgxxMBX6uNAzEmKe9Srx3Fe45Wd1z3h6WHWvVpbqUcKTx74MhhTgsjusLFTT6F34SR",
  "key2": "SvAX86nMHWwqqsXj7DsVPuq1MRcFhrXKmpr8zFgtgN4F2KbtZKYmDnogroyzPxaGCfmTNzMxW57K32k2R75w43T",
  "key3": "257e2C7dDggsDsyYbpJ6nYvBtzXEyamfwhHGUBJrWs4Nk2Y172LrtdpdCBarF9Y5EWfy6Y9Tc9Ke9u3ocL7dWafL",
  "key4": "3HeSemPmkjqyYVdLnswjW57e9hUsfMrgy5Gu1okEqW2XCUUVAnQ4edn4Hf84vwLWP1qqPeWg4f76fYf4en16XU21",
  "key5": "2Sitit86wziymu9hd4otEUyTC5TccW8QN9wQrfqKba55g2ueQL1wPsp5eLfDU8cP3ZxQuGkjGw5WqBvhnZNZAiQu",
  "key6": "2Mk5NP7wLj851qbJCrH8oaSU7S5DJYkk2scLVR9DjavsNmFFPfpxJe4tE3MY7C3fJNg7QWpFpCEQTLwiKyF8KS8f",
  "key7": "66jSukDGTrtCGo5kNdkVBY5g7mc9RHFZrQT2DgifcRGNULwdo95i4UwNnjFjegZY3kv4B5VUuQS6gqWqKdwJe8hK",
  "key8": "4KCN8hPqPAhQ4ZkNRELp8zMmpxeHxBHuCoCVTatkN6MnfMW7LJjwdHb7okZjbyzTvUEUqcgzv6oTo8VqDqy43HXm",
  "key9": "5W6M96JZX6D9TgrtWH8EpnuCqPeg24dCDXwFaRm9hEqmJUpg1LF7NMaix9fzTcQ1PPfxeM1JXPcZHkup1PKtkYF8",
  "key10": "3L1FpVfeVYrRW44Gf3iQ2UeMjgAxqAWftMhVgL1ZFFf58ZwgXCejn9VcJUfLrpc56VjGw4JJvgiwboEELPGEYjSF",
  "key11": "3BX5Qy6qNopoRioNUUpDns1L7CbHTv9iWv2sbcCjcEpcijPT5Ca8ZggBdazPg5i52umFXuZjsmAgd5FubCcusWLA",
  "key12": "5tp6NpkSnuCxTtKy5BMYk4jidqfJuAJr7Y8gizJi9aJ4rSmGpdPeUjbwSXq4RDdEwiyJy4MzGMYhKs3zmjshiqK6",
  "key13": "2fuWzqufjngHUGFDiigMkT5R2nDT6qSGe3K88Ahgtb1BNcSeA6EuoNhyrNWeFtEjVhfnapHBrdap6YHboakJZhvQ",
  "key14": "2CwTfmHaW9TdN6ohpQop7B3hvH9gRgnQpq9Toj12oq3asXKY249Rp9hus1BRZL6Lzsa2SBhSHAQzFMmiazRtzzAL",
  "key15": "34j5HecsdaM2rxtTAykYFaneXCXrw7bRjjZcCn2GPQzrmLCUxjChpBbS7Yc4j3LYbmTbHunkmZzV3Z4oybacNv6F",
  "key16": "4Y7peNU5QFMDJRYiDp1u68jz5Vs8CeL3a2BiAnGDETY3t94aDFKAJ1gbLCtRE6ijfrSXrNt2qXUKtZocuzUVErnG",
  "key17": "3KnsfGMQ4ocijYjB1FLRJUTkwjaUm6DF3QRSZ7NS8wUgYR1p4ZdgfHxtRfZx6J4Vjd8kpMia56rgackw2QaFRgyV",
  "key18": "5rhbr8UyYDEFjja4Z2KkyeNf3R3UCCB1W87DHBhvYpwgCmJ5HFY7KbHKqEBxDH9rwuBrsC9rrqcpBxsFwdDbiMvF",
  "key19": "3KQkAvFNUY5RRW9qdjuyk5L58vzctaThJMiHqYb3pG7YZ3eD8E3gkownQigsDoj9L7w4oRUSm3VNZ3upzL79LEPr",
  "key20": "26aWXe7EcqrWAVWbTFTdy4dhF9YHw8VdUTQRSbbkU623om6KbS1nb6zkDjHsZJsTANcYqjZ32RYRu7DDRKDzQDru",
  "key21": "JMPxehKqysWq95qrSzvZGC64qS7Ez7FTEUsMTJ1RB53FYpikvcBR9WbejFcDQ9rgp8J8qkEHRwmLp3nhBFVJvfs",
  "key22": "3g48EehWP4fhakTfosmEPE29qP6KbJf2pbgDMUEvEBqfvKsQsXZWBu5AT2Xjr5j2sBTRVDjKdmqYJQ5n5RgksvuN",
  "key23": "4p3khsjsn5Q1od8dG4uqdurTyTDzggftWE4tyRAdxuTJsfq17rW1jpks7c8KQjRVQL4rXtCMNwsNKpq4J7qUASxd",
  "key24": "618bpFBsekiqtnjGNQy4rRPg3kEsKb9DSQcFvXCrmyshTQrF1McSi9A24rRwcnZm6XBv7nDdTtboDhAkSQNpFyyC",
  "key25": "5zREbthfmn5wfpfrqMiVpqGXhtZKJxF3QJw7ncDv9g7Sod2b82ZPbMB6uEMh3sE6ukNgwnaD7BhV7RudnwRPEwGK",
  "key26": "2a3tEJhos9rdCmn1US7CgVwf9Eot67ScQir1wDMgPaTRQoDwt2vyd4wiJcZ4QD3iDP2ZmkfjUPaQeGMf8JMHXgX8",
  "key27": "FfEEj79t2MBT4Nx5XGp6KWBesukqzx9dfqQUNFM4s4QfMWGFAFyfnRTkoFgjU91aLayQF2A82Y7AK13vtBSEgPu",
  "key28": "5K1e25nFifuYmBcrzHnTivsUmBycsAiBK135HpYBZJpTn6NeXhMoTzD8zCcctaNFsn8E9w1BGtpeBZvRsd2w8SpN",
  "key29": "4Y6dcRL4C6rLT7bpYXbDoBswWDbs4LHzJESeBqPon3mJV6Uxmy2GzjKbmDsCuKevEyWh1Dhv1zNzLc323757HNj2",
  "key30": "22eC3BvKdixCLhxB7pooPwLDdKBwAaFJa785SPbJXs4G3HgchM8iDaWSxHeHNZhxscGHopYHLe59tmj6irXFFWBF",
  "key31": "5QjeCdY1baPbJJSXzhGFmvwka2iRUyWrAGEjf4bQRZwV9eGhYfyRGKrVn98NRHhsaiMF1J4VyaBJHpFhnEs6s8BH",
  "key32": "a7Cva9o2mpwQbWikUUjnXDw8iQv1vA7ifih2EYFJCEumWtDRVuayu19phgwsgxix8mGKTNJscEk3rmgZNqPrTvM",
  "key33": "LawBS1Pub9qYjLDZVHmMrZKbMGGMQWXaM7rAVLZBrxBTGhzx8RoDHz9Sbg7tFeBnepTqEGDwuyu4rtgXavwa5Ze",
  "key34": "56KozaAH5WHyPyboLMLnW4r3EvHbSacVsHfwY3iCSMcxnyugSfPaNU2sWDg2SUU1v9q41nMyP8y2CdHzVPJdeqC",
  "key35": "5YXAuPdvNrU5bJsmBh1sm6X2oDRhNKJG2QPYov9CbeyjwGCp1XcDWmfa3XZ3RLSsvewvPzzAm7Pty1nFU372SoMz",
  "key36": "PSn1peFL9J8TXpZH6rKJt9oa9DEoA88ftXNPnuNtoCspNEHahyXKj3HSU8hBu9X7NSCj2YDBiiKMVnHBFHBv11A"
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
