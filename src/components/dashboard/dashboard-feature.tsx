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
    "2b6ujQBiCEhESKdb72siBmH2m3Ky2YA4t1a2jTMHMTRquGo5b26vie6q7ZZzzHuoEAa6M5RN11wjekZ9sgRPr6Lv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qNtq1JRo5QhB5GndVzTicpuXvJiM5NSgQKWtedivfUxz4FtawdG73sxQYA8snnxysHSVyc8nBGq4itedxWHaZf8",
  "key1": "5sVYyVzo6mmszojd57uE7tL8oEZZn6v12EHZnMnuhbCTVwY4TPQDfkd6gSDn3aNuQ6c5suLExS9EvdxX6quKUvPy",
  "key2": "3pgQBYKMjF1VjsHnGcYND3NrBvJ2JwKHPdHWAt5a6dcfLNi7Z97Hy3fVB9v8ugd3gqBQKgxD2MgXua7WmFbTupYD",
  "key3": "2cQgPnv7a2L7LYZfisHzefBo2XX4u5YqEyMeqgF3zJDcgSwYKjE51YT9JiPmT2oRT5CsPc5VWWGEgtsR9H7QQQWX",
  "key4": "41FVHz1n63Th3RopQwky7afGAbAA3VaiwUbp9M41SLFGyo9nvoBmwfF22pUhtKjDUrzPAf5FvV83z84qqQjpeNF6",
  "key5": "21sFfmDBk3BFAgaUmBjqhNJepntEB1tnxgchGsfzES83ktmynC6teGuSmtRomB6wcBLBkknBJgpqfqTAVovSPEob",
  "key6": "5Mwg6Antx5TSxpTQnzVyuCSzpVBPRwekNWSGBs1idfU4H3KQdRtUnzMKS34ArdbTwPAz8HXZpxdTHLz7uFyNdFTK",
  "key7": "2XFTCnr8Cs7nYvyrgSPPUfuTDei2nr4PJxyRefu9XZ9nQQkX5UA7mxX86ZDixBRByFdJQ1SrPFXrHwcrjYyYfxJP",
  "key8": "wpjagAjysTLM5xwVPKVjHK8WPkXWL1WLeKev2Bq2u3oBE2dix4zFkgL6b3tcPmDmpGjwkgpiKQ9pYxzosvURpP9",
  "key9": "4eZ1S6Tkfr38qMrdkrT9z26MqXUzgVUGHohHpiCqznUmkZSh7xgY6aWaN6wyYihUFtw9ETUJ8WtDrUC1bzfsESni",
  "key10": "4Wh1fur83vXyABttsmD5hPjJEgFaQdakepk38ix73Kc8GWCE4wUyjDMeUif6AhwhGL5ie2Jjw1vWfLN5aYcXXjLN",
  "key11": "2cgbfQDue8DxUTbExFTxQ97itfqPwzHaP3gMZy2nSaxjvvTf61Ra7siJgepTEaNiHSvAT851xokv3zfMFEEJpvuU",
  "key12": "5PeLyzvBzWa4AKkPhDVavEeaWFzKnWv812MGvdiyiz5QQwtzgDmpiF3R9wiD5G8UUqPobyjNBtYonR894nAEBR3X",
  "key13": "56taQvf77SD5rU7vcqL63vbe5tk5fyn7isJM3KWdnk4uThLrS1augEX4cdHZwM9xL6XKNegs3XW3AqiegFQMkmcr",
  "key14": "3JHXziKf3MqKy93F6uzRRc5fVSUCCLtg1y2oHsRv2CDKVt2kHoKCiAoyomwdRa37dZG9LVxyQF1CoHvLDd3oRymK",
  "key15": "381z4mmJqLpWVKbPEqRpUsZDGB9icVapLRu93i2GRKQ4VHzcGxVXKTJcqMBMYA27qHNyXkPiC5vC8sHEKyQgPEwo",
  "key16": "4qXhqpaUBhFCTtKa4xdYiv5yP88X8eJUz68vnTvGBnUHPJZ1QH6MbDsAti69Y1zwhyjmVgsQobSHVVCpJqgzbuGY",
  "key17": "2b4xbhqkwiKGHVomZb5fws1RoWcV5yJjkrPVwr47ZTbptTz7TCyK9zSq3TGSxdUgmGobQsMq3H3RYZXbBnnaapzf",
  "key18": "3Pnbg4RSRCkyKYhryyzWR7kiqxLjpPDAT43aihvs2xTDCCfPbKBgztxq3W17TxDwUquLD6dtNhMRHkJpEr8eamgp",
  "key19": "4DLUEufUBHpFkqYRiTwkAGBbmC9MTkWt5iYFZPrYTw4XAGdRnvsVnoWJgCQenKLb9tnA95qusSS8yamKoy3x4V8N",
  "key20": "2NBWVHY1Vu14QfAstdgdasQrjpTXfN9zP6irPLLL8GrR3WC623vSa5ReUcvVZiKHVjeq9cGmiW628M1SEQeaHav1",
  "key21": "oiw3JqrWsoox72PrrVA4pade2x9h9Q6cqpF1NLrNRAhBJCzeen7vMAhgTTwpdxSDW6MBe8R2TMyfdLt18v4XcZq",
  "key22": "AknYAqxenh4uYC4QbPUntZxVFe6uzQmawar4FmrVdjuSMaMYt2uGTViXJYsVp6wW64DLkBQ6ujArjTnqq3A93Jr",
  "key23": "49mut6xL4hGwoHopdrHbtTieFBBAYh3jCaYkDqjQmwjSnvbQU9NuDrG1w3zy698WZydK3depAxmzyu3KARoTnsUt",
  "key24": "5L4ktaDiCxcV1Lnh9VXYz96G5kKZZkKg3csSJ7537KP8Ah5kAPr8W1fbwbNVhKeyfU44mhC6677FcFLzLWv6coDL",
  "key25": "2z8tTxNf6zDdmHNhDVVhDMVbJhfdC1J2cPg1XkzRZR5q1uhLhiU5JTvJwrkqBg7kYL3QbfX2sAD7etL9JAyG7u6T",
  "key26": "4JPiJYXR54DuJPsKweFcKoUyoV9geV64pLTS3AXMLg8KWAgJLbNUauyZG1Hb2i4eoWAroE5SZscMaBnaKEV9AeyD",
  "key27": "2WVsBXz3M3aGQUqiKPi7GgFfxSoDzyk2KSGWF8pqmxYHKBVW7djG8dgCNE2hNtJWnSXxWXEpptQaEJLvx8sBeoLY",
  "key28": "563Ycd1xECZs4JxH3GTFnWxobH2CJJhW9WmGiL3oLykA8p1ZdB25Mqx2aD7gLxSkdqu6TMUcWqRLcpQNp6RNUmb3",
  "key29": "4iMTGNfNSTRW1EiPMkCz8PHEDJMtgYSzaqcpnDkU2Hdbx2dxwSGoMYmMShiSsfvT5LFHUukuJzzpZwGaD6wbUrLs",
  "key30": "64UG5SXve7ZJoyL71ULJGCJCiSqMeHm9X6MRS69tCqxQKtzfJYw7ZdoHaYHGAZjBFmJSGtQip21jD89T3SNXGNUJ",
  "key31": "8NLR3t7XREvk5AYan7VxmdzsNqaJjU3eTxV85BiqPHSPCvp9zT38uafFYNZLgEmmkzEQKADyiLY6dyiyDzd7FaU",
  "key32": "2CZscRSBMhTL9EcatLhH9HQpWgxLLt1m9d7pRngWhuRPgiVGsyMq9a9DHkwSbHEbN6iTme7xarzfcAEtD3bSEDpu",
  "key33": "94cqT9NsDoWMhKCZBDDGMduKkHZLJMwctLsBrGFCcvEbDU2cK6hWRRf97PgPVRtVWWZrUrzKayQgDaK8JFY9njn",
  "key34": "4ojVZdRrzrWF7oxiYAZbJtk3kXzxgDzg1E6DZrnwx9gm3eRMa4v5bK9PxGvbFoqP9sybUECUDGFoVTTMAA5S5dBq",
  "key35": "5y281iUF5NoQ9QBkLEfMwWev6LPF55xxM7hAGf8ZqYpziuY7pJDAuY7Fp8MTTZJsoPYZv3ogC8HP1AfZw5x2c1eF",
  "key36": "499XUX9M2CFWG1quNkNjY6Bc8LnXuHTK78bsfkYrzTD8YSg2C5DA3exHv3hJA3wkyNNyR7FTppk8Q1mKGTUSnLMe",
  "key37": "2HqQpvsS7gpDZzVoBhzPpo4CWNK91sKvcxoJmuHJpxRsXKJPdAuzoBJEaPcuAYcQQpWwCRfWVVaNhNCXpCYviTAH",
  "key38": "66arjns6V6SprGbvxRne46FBc4AL1TJBrWhLPkFoaJQJ9UPvaUzQUJbcxzwgPehj7YZeG5jx2w7BbzcVDK9ofgqs"
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
