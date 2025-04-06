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
    "2NsDNeuB9XhqCps32vvKcjon5jU2CTVbJ8mjUccTm8pGAkV7Ne3Jvrch6Je9vnJBFoienjoeKdv6mSWU6SwGrqnv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yqcbrBDqjXcWXHB4MwoibcLoCz6qgJ3xSfvK3HJ3keA1dBPa3WDYUDVzzyWsj4p4WMUjf4o9QEWH7bZ8LAJVBhr",
  "key1": "2EpwogPxKtiwwt5YmX37KdXePAYokHowDuqGPG4Zs2tFyrhZqK8DqDyyzooDFbvzNQNN5GeuAUjhghpwvxsuRx9P",
  "key2": "3JKMJmXFxQ9NSjmHaDZTYD1rUfvUiwrtsVBTHjFeAvTfE3YBqAgybbjHZP56dP9jCRL8QUkAtMPhQUy3LkhRZZEv",
  "key3": "9eU4bLmqpnAZ1PZXTQBzECcczUJhjuCExiCDzWfsKW9zXmGU1h79wSNQbBpvDU3wA1fvY4ywz1MiKPJoLAoAtuB",
  "key4": "46RXua5sYhs7c4JsNR7Zz38CgyjmDzkzdHnoUj1BeKrCPf1tk1yhWkQQR3C6BEV9r3N4YSMMSvPETGqPPA7Y8YAF",
  "key5": "67ZuoRNMJmGvyU288Mdc3TJWhpkYdhwfnQiqxc5mWvMAwBWZvWxxDWE6L8WPiHRUe63CNp75MACEk2jaE7ttCB3L",
  "key6": "3xvHPWW7FYjQZtE1VyBmHP4TxzS6YVLgYe74LHYZi4KWRCNFERWh3tguckeLrhR47NqJq2WubyH79YiJfUSoub7R",
  "key7": "doTKzKtaeZCSCXjjkhEqQ9Mvy98tFwZf4qjucsCvpQ87nkqnobNZwLc5hvcPgwcsPfQXH7jdJjb4mU48BPGUGwz",
  "key8": "43dseM1MCPqcZRyrCMZZDTL2P1pDDmtvubKMEx6ACgQ2FHWNXGkfrd63eGxpWZi9DwSs7GJ2o4Q8KhFoDrD9iua8",
  "key9": "65DEAcECr6awMShUsWyuhnHVzRD1tAfYWoGdenFkFDvyiMCfzqX7LtgaeVsNqDXaj8BBGA4SLrpiThbmmn9P8uS1",
  "key10": "4s3Ktfo2T35y4D1cxMHT4ehJmaDSrfrrVx7PjpWngy5yXYqY2qdaSXeYG4wahDKxjMSFmape1VZphVTFbyfnvKU8",
  "key11": "4m5Ft3Y4grkUHLoJvq3oSuxQzapbBSvacSEnP4hpqA9bZnNkqhDQLBDU8ezDFGMJL61qh32sHFywL7T8ar5LS4q4",
  "key12": "2aY4X6AmkNDEf6UHibJveZ2HavKmTdRqZc5xBFxsAqgRUK7mQQZvgUmLwPJjaMUwFXUC6NAz92MvRFHzjpMSLEVA",
  "key13": "5D3NpkqqJYXMhv9mBRGMg1fM3sDyXD9woVkhoCo34zGvLTRaJkyyVcTtJdjJBmS16np3ALFndx1NKhP1tG9q66x5",
  "key14": "3pQQSp6ZAkEAfEWqLEn6ou392rvX33qE2JuMK2oomKJAzu4TPYcR2GdNBDrRaq8CrHB4ReWBcMZZkFRRUm1dLN2X",
  "key15": "38kZgzbuatjCiyeGVxdxcsWkfWVAwfvYbsUKtmcmonyaACZnT3QkThdkSSnQRV9WEMbCvkjUScLAey7sAZUvJb6G",
  "key16": "ex56D1n7RVmU6s8bTFYEPqN7BSptT78LCPGWWLzuyExKFmk3BrYymA88YpgEsxvZoQgPnzJjqerFHgHvquddSkh",
  "key17": "3YaSW1VJmaged7JbjktuMHYpJxzZxskUDE5JRh8Ti3TjpVdwT98GwFou62yrVmKUxK794GBTTycivH5aC8ZfuvcE",
  "key18": "6CnYSUDRcwMYBN1kT7nN1Bghog3HQ5iMRtoJfBJETTAos9hE8oGRkZp5ME3xyXoN7pj7eE8jJrvZnjGCLqdY551",
  "key19": "4BTuPf5taPu4utcSkkyTB4mHXpHSeXibFJAnqetAf6FNMREBqSuKFbikXfdjmKUuaqcP8WAfEHWHAYkZbmR1KLJf",
  "key20": "2jNfEdPUdfRsXxRchW2akq5xTMcwMa5gyH3PtouxFR43GZZhu9PXeqxA9ujHN8rKd8g9N4JkFEUUJRBxUjw1Dsik",
  "key21": "4AMkV1qPCkPaZAvFpTiyMYiRRWJABv2g1qiwqCqAucHZfqjCPTecwS1n1eUTBRaX1Guv59XyyFS4r6BZbsWH1ZJ2",
  "key22": "2XeZ6Pv1SBBRhmL6qd68frV1m3Y6v1KvzmPhDBM9sJx3S1c6h5H2gpb4FFUxptzghsZ4ZhN8zPRPng8jgJW7mnMC",
  "key23": "Z1PfNdjMGp3JMLRTHcY7bSpQR2AWDTaM45xeACRubsVzPgncWJ3uKQjMTcyWt9HAhXELy7VMRDs9y4yNyj7wDAa",
  "key24": "67Jhr5f9un1pJwvF9aUunMv1m9aSgd3RZVcPNkJLpfCV1JnCEjjhTKtiHMTDXwrvxU6GtF6fUdzSmhrAawiHUE8L",
  "key25": "5dQoUyV583SSvifZEki5J1hKGRNNP56Ym66ZhbarCReDNkgWPkSbNAafw8yM3KigYqfg6zKUCQPpkryt4eC4Lixp",
  "key26": "5Jcvnr1mdqEPY4KbQHn3jYaSewoxuCx65aBg4mMnNAAUU9pZFKjWRRUppWdTwS7NFDejhFjwVswTpQQNDnxUK9Zn",
  "key27": "5ppF24EcJfnmLPdscJWiTvV1JERo79bUEEWP69s14R1UHEi7tYd2rHSy4e9zvATh9drvy8LUVGUQ83kwoJKtEp6x",
  "key28": "2jr1wzEGaY8tgxZNFhFZyMaevwQXNei4x4njrA3u6QLnfan3vbYd6snWSnipExQbwVPrGZheJv7ZwWZYBaWdHngZ",
  "key29": "FYAh6QyvujL5Y1MiACSti6PkBA1zTXCQizJbYsJPCChCMammGBzbsuqgNL1ENoTbABaj5xR8ost9MKxKY6wNaX5",
  "key30": "3ki3f23Ey7FTWLThuZH9FbhUWUnRAbj3EyCv2yeyKcYA4M1mBJedCoPoefS8FGb2h42oWfbcoTmzvoAmuiKiwnd8",
  "key31": "2JSpveotsd1yQM4kRDyJmhKYgNm9Sm71e32NhZRyAoi4Z4E6Vxtvdddsz5XcAeThiUfXaydhpt4zHwNh4wWpc7Sf",
  "key32": "4wfKL7FMHZxNJ7ZUeQvDV419Y1XuhqV9PtH2HtsWygwVBigdnBgU3BfnJ45zQVnMSTj5GFfTGkqXJEM9PHtfm8p5",
  "key33": "32xBG9PA3gJDGRodT8rop7pvWrzQpbu75jB12Nkh5VZUULz6bDJpdNejRULfM7kPh8MFtL6gUhur9iChi2q9eajw",
  "key34": "5iT2X8qHN4qi2D3yx6QvnG477uD6sDHec1DwFYzt3rQdWDFgfSyR8N6v78pocjVybmAHRkFa8cNDSkxxt8e47wMb",
  "key35": "3b2UWog8Q799e4NsWc2KA3ixdNP4Y1EV65MVFr9SqdYhY6AJQoi7S4K3aCA31Na8qqiofCaisWCf7T7PgwHgmdE6",
  "key36": "q5Kf2KBL2JAzLa1FmmUJuaH9ongqLTi94Nhr2MnwE1t4gQDebmF5UDAceFxYukms8M2PebtKPZEVUgipQ98Ut5J",
  "key37": "2Vf7zB3eDmgSkPPFcQxs67WtvFJrRwmPkwDg6RxJfxCaoFhF6rAcd55pvkRVhAvhbWZT8oPyn3YkU9BrHtsRwsMB",
  "key38": "2jgTBNKsPpRSTE4kKvw6UTup63WQXK4j9ti26mA9JyLQGAXi1Ph44oKyAUdwJCDgBDLjDRHWpGBa6UeU1FpK7zrt",
  "key39": "8nL65VJXxqAx22QwZvhQyoz7x3n8aQULk3r9SPBVwtgJ3jfkTsYy7oL1AeRVBStgea8WeyJygBiMLRBk9C4e3Ju"
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
