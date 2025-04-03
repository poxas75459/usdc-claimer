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
    "67k7QLdbgpei2cy9oV8j6vJ4j6AKTVguiiLyLX33ibRnXN6uy9H4RiGvb7xjvAmHq2gziDXz6awjg4CBiWJhM1dD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MCcvXDY5wBxgVfVtuyM9Ko5SrHbDrMKkWrWEDpWhNYNWXpLVPGEcfF9kaKvzASsc4G8XVTUgxkNkSP16xXATEKY",
  "key1": "3n9YEM15cLVFgVSdMuMRMZM9vc3yfTcmGn6HpmdwuiKRigYScJVj54BziJW84reqgku4qkFDSxgkHmjeFSRiZgHc",
  "key2": "4rENdFeg5k6Enm86VKJwi9ojW8FYDpiH663tkjZix2nKrMty2E4VrG9QFiPVurKFhSYmLVeqrT6VmmQvtJhpKjob",
  "key3": "42zCAXHJBDN6sgWUVEzVb8Z9Q11yVjL6TMkCvnJmHgaQEW64rEC8xviVqK5AYSZJzZUoCUjgmimEadfSWV7f2vS6",
  "key4": "fV2gby4WycY69cYPvHky3qBzjyfiUMqS1SAvW5Bqb5AXbx28iHEE8cy8sTng4LbJxr2dm11FyCDCGoEax6szcJx",
  "key5": "jzdroimYvrpVr1ALzmu8iyBe36h1o2QBN3CCftWzt2nSXqLRNXfgE9NtRc8RsWYtkYFj3kJKVc7DcemK3JASdWu",
  "key6": "5f2NkeRMS52QTQhSTEVV3mfnWexEaQaTVqMAY8guQLNighEmzHz7oqBcdag1fqVP7zs98TD61bEf9pXYHGd5EmCu",
  "key7": "4rvHXGAqe24E9MzKQPf5FKkMKTVGDv95MGtgA4xipdzAQ6QPT45ZeXVFt3hpzeYaDb3nKumhFY8S7RwqpZNsMdCL",
  "key8": "KrGCLDhrKGn7UasRSZN2Zf7Myj8qGb2pMSNK1732PQtePR2YibQwyUEsnvGk96n1NH1YzbyAP9FepCvrMEvU1V3",
  "key9": "3usbJGyFUcgPURHkCCFqKq983VYBuczJgQPEiqyVuEheSHJjP1wGpM2WsG3bWQdCRtebH314JMFt4MLVWwcUPoZY",
  "key10": "239eyGSjkt15bFUnMBn4uxuq81bx22DY2sn2HuPzcnhXhubKfUgwXRPeW5xpbWemZ76f33E49fkwcEza6ZFLhJc9",
  "key11": "46XKcqxUYQtUdvPrHwyzbuvPeQR14kmbB4yV78YxC2up8sdEfQtDXRGRtFGDggEFTjD4jEtuxoJFuXQxHXshu6Kf",
  "key12": "5tscYDzmmXq7Uny6UCwgKLYnLYRUeNDCk3ptrPoN8uR9uAhyfqLwUh8ufakLD4iDU61NpDbo9TfoMjif3ZoCyrBk",
  "key13": "5U5bdU4HupszMcSJGMS3VtdLk8EzLgd6sqyyjmV39BgTT2tHQmJiEX6q6QQRxibqEP6GTuxjF1o7jrmzCmwoUhfZ",
  "key14": "5aNW33VbqpF48SW6gQQg9qHnKF65yKxF7hDpWHxjhG4y5Kwma47J37pBG1NVwdrraV21Zn4GonmpNBiFEt9hBHLx",
  "key15": "5UuFWBKYu259aadoFfiw52FqesKPYBYfpoYTW3rHbhGsFaEs8T33r2NRxTRsKioQAg97McaKhuSwQXF7Qn84aqzZ",
  "key16": "2M7WzwDy8vWAy4Jca2ZQ6D5NLZnaQXwJ76PN2LHgFZ8j4Fj23mM2jMBFRD6W3zoL5dBvvYUDtDk4cYmji9sSpczp",
  "key17": "2erqLjvbMas7YdvqEWPcuGMN9EJLwscECvVY3HvJFTsLnV97Vn54J6o2nvG5iqjJZ9EPG5Tttbx9meLgvnAvRy1r",
  "key18": "27mYa7vmhpVLz19V9rBubbwDDXCFYvtMcKtsjFaTokMtsNqn9qohCWPLoYA7Leaba3HAQGMmbLrktPfD2rpkur4v",
  "key19": "NYpNFmxzdkeCxBgzd4CyummeCp3zLHN7k3hcED4UyfDASwxrX5SS7ebgnsec87iTzZt4udGoPsXcUguQ3aiVZBJ",
  "key20": "HNb5VHbaiMEWh65czAWG7XEmQmSs4mFt9sXnUtwbbNvMikBVFA37U8mpQDL6NQP35vNUwNWKkkxAYfBiX9mkXjY",
  "key21": "KKxUyur5Ut5aG2KMEwYp8JzbJHj8uxesmWLq9kT5hDJgetV4jEcVhy6TkxeNTDt8hDUaACqbzXAzUTEnWA3STXF",
  "key22": "5wuTBjSxJZsXNrQPsh4fhVJNb7fG1DQhMXPFpofeAihWMt6VocixCUiQkS9vzU7pRiXohGzrSTgjwLmjaDL31sZT",
  "key23": "fqpEnEwangV4KGz7gkNKCKT2A8HTZ9ShjzcML2YJeHcdBR9S7MkH7H3w8GWNyxNbAAsHNagmHwEfN1dUKA4StCB",
  "key24": "57VhCima6W5WCBphEGJd4TG5H99z2wiV8qJ7sek1CXy67hcyBc1dDhsVbfU9jnrK2D8TXMBaaSkXnM3osxLWV1vg",
  "key25": "4vjiy8P1cLg3Nv17AhyVGCgRppCH4sF87aTGjsjK8S3Pu7YRqH6NAVNunV2rPpxBaaDa9CUkyiqd4s4qCpqyNwpj",
  "key26": "j7qgPpTzQQUXLLwKXWUCqc4hgxPpBnuZAL9EmcKLEaPmXkydeq9hrvtDufFqDp7iRt9Vnw8eaJraXvG8Kdn2dqq",
  "key27": "5jXifNX5Pmg9Jtry654TNcwkH8nRTAYU6kzJ5pefVeGmmfmikVnWHKmiP5TBqYRcbZ6YnbQuVzzHWnTxGcEuD2D",
  "key28": "4aCv9whN8Ec47mcCWEA4PK6SwKnGwZUS91iuytJLzRkfyrAr2LAkEC9DCwWyz5pDqyJ4hiTGBLaXNBX5KaQEeUCX",
  "key29": "5G4iz4Jgn2SR5LK5sFNtroE5PKT37zTSDmH8apLaWGpczQfH6baGnvZeg3p3j5kEK9cdarRKxfmfZvJddoNSr3Qb",
  "key30": "5TYbyjuBThpDR6NREx9TU9e3u199NE8jxnbPf5soskpUAUiAA3mg7S5oB8Uxfk7U5WYU18Ykcnq2FzBCyDqDKKTt",
  "key31": "4FFR2EWtfKGtKxC2oTg8U3j6Z5MqqVWp3Ls2pLwdoJP2yRg1Vxx9mYx7MWvh18pCEcBT9pS21CGTTRaQBCQpUAS1",
  "key32": "2ptQ9SFnS9ccnsAxsVtKzcimLAEuYSMRQT8e9oPLCU6ShDrZDLuvj53D24FMyVPw41hi6bfBA9Th578p5Vjd8QA7",
  "key33": "53YWaDz6n4o5aqkmrUesDL4yfAVhkWDLFjoyqE3FAyZPRAeX1Ei2qxvfqTk7shwVbh1MPSrZKWSnFvCLmpHykBcR",
  "key34": "4WiqGRw8ss9AmWBs7vw5mmhhSAJYGi3skUYMixa22WvtArXudk2BRa3XuLWeKwvKcutro2iWSKNKLwTS4uL7K92j",
  "key35": "5pbkCDHg6zBawbupjZKwQqf4QvJCtBo2MQVYZDVRh1wex1MRAvKGeqUGwvKJzKYxWVv5b3fMWggoTfwwgxgmmv3v"
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
