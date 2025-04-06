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
    "2i1moA349SWTNBRHKLRNgu31QDzeeb6G3HSua1CYZcBAHdWJtusj9Pq2FK3NWUFnTHG5Kpq8Y3xvAqM9GARL1j8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YNEoWwvxnts5vKYfZhV3JqJq1HqctmVzfPNePV9En2WeCwu6KN4csFsXzzpBSdxg2U5FZhXTfBjALJ9nTFAarVV",
  "key1": "58Wenj1MNUV9ZQ6YfjWa55PZ4HAUBsogeWfJeUno6ysbCCU5ci8zZNzTNGdYKiLnEsswtfCPU4cKWEsA248gJ1Bo",
  "key2": "4iiHiXto6gScHbULKR3zCtuxoLkXcRtpZh1LdBNHokUDi7fSGV5xfUqiL5muDWYHNTJZpjaWjz32U1EvPhDRd3rv",
  "key3": "4D4jtuuSVFRqAYbJW7y7S2kHgQiiWk8wq4oN3vFFMNQtveGjDMWMFYxG7Q7gtZiEWkEV5jSiezoy4hePop9vTkCh",
  "key4": "3rsfT1Lm6WTJhvfWz2XV3BF7J5AZgzsSoXzm13Yas4HXnN3g3dSNKzKqX78QSy2NkwrM1SPDJzxeFYCmdxH5mPvn",
  "key5": "4EtMsuYbVknGxdygrjLYV9rRjZCa8eWGmqGEMaUmuGgB2MkeibKZfVEtahRmJbQk1LCdNSwHregUxXEkghs42Fq9",
  "key6": "9vgwLXmANT44em3ddF1Z5iLCd3XNLNFygHdzV4ctBBubkNtyXZL5kmYWhjaYo2L4dt51ggKNk3UTZ4acH1BVasr",
  "key7": "4Cho7gvscorTDMu7qKTETzUYRY7zT6tYnVweCKdAALP6jwvQKAozk2Mnn1oB9QodfSZztvgDpTkvrmHvyN2z9fLQ",
  "key8": "5eJ3VbxDBEZa8C6pEfqr6EaMEb9w2r2U4zZ5HnKENbjeSfpJ1KWMJ8o6xJ6XDvNKd9imx7wnHZ9RnLCLuDnsQXfs",
  "key9": "3CeE4YC1W8zcG24HSMPUW3JqXe7qYiCJr9SGBzkM4H4Y9YRs48bTwkjkTaNr36BJb59LfTPd2YRqqmP7jiritJqZ",
  "key10": "5dYiFa1MTLdFiM3oUpE8Mk1Qv6vLfw13KzUzmRgLB11SH7M1BmFy9Li37XHaNfntCdFHXBDJ8RTaEoRGj57VaumW",
  "key11": "25FQWZTMcAPMmxH4ztwM6fCZgoxfRM7PkbBv1vfoB7syY7KaJMJ78H818G5aqRucUEZB9L6QaQRuNCqcaqMaqFaw",
  "key12": "2UkoNASPEkA4weqdCEd43qo1BKBkBksdcnRtaJ8q15gszAM749TZf3LyU8ZwGhhxpheizMAdqGXxGAQAuxxVz3Tp",
  "key13": "2tcFWNRb4FPfeLdPgx7GYR2kMF6MQBaGgX4cdeAVz5ZvuB2QrRera8vGSJzfPy5deafJi9X9PZzdwQH4B2PtDHy7",
  "key14": "ZBDTpmTdV2ctjgFY7B7FxBKy28JybcqjJgW5Ze9wiarfxkXxpNhEZtSQ8gzJMNV1jfk3jnQSTCMqeEWgxXbjY4w",
  "key15": "5oAPAtSy53DaJj1AN5vykuK7q44isEsf4oAesd73wFGUkmP7rwR93KQvZFXFDeRgS8mauo5XKiVoxnASnhRmFDbg",
  "key16": "3ckGY3sT3cwjCsLygG2FW7Hz5U3QVAaQixL34iTUpV937KUJ7sMhQmnEwK49687MwfkPpXSkLNMst28LQ89JsGrk",
  "key17": "5L9Mj3CQfbNki8AQedeVt6H8dsFK9vSAf5vvEj31WE1HfZuXF6PAm7YQNoJSG4GZoW6SSreTxqCa4gVUYs1zX67X",
  "key18": "2ucNkPrWdS3YwQj86kbabZ2sgsDPPVYjHw127cUiepTQ6ufGcwe1CnkGQUf2AawHrJ8XdWKgphYdtbnYuyn1rGA2",
  "key19": "5iAg3BUbSXc7M4e1hfxxMh4otWPykiKvWy2P5EmvK2oYqhQL6USzEJhKmdjn62Z1Bh3dZniY3j7fCu7P8mQ6bc9T",
  "key20": "2y7z4uu95Z1YHok4h6FKDQSB97KxXvQqJsJqAJuDFqCD9fQ9znb1nXf46MXD9CLYLRR9DoNYh5BUrHnnVakBFnhu",
  "key21": "4W4MKG4Sytv7EzpCQCsCPsy1iXtbkDdCgrSwVfbYfAzgraDjVGc4GzcY79ZZrU5ZKUHk7ctHiy5Qz6XW2YabcrWP",
  "key22": "2cMkTcQnuEymtS5uatAewKgaN5VrCSMAFzraWxup1V7SHVmZyGoRYpb4LfNgaD9F8s6R3bWJZeJHSet3qcDzmL7t",
  "key23": "31mCrQAkvFXqV9pw5Hd8kJYJsJJ767HRs1yeEPBdKGpuR4ag7toR6WcRa5mRdZ9vBgqXQjhF7CDMQG8cruTfiQnw",
  "key24": "5HRYDeN5j1cGNRJsz3tqcTSVpgxtxvQTeGuPziPTc5rL8ZJm7PcNKXEv2GydTnZMLdQdV18oWCvzwEKcEgPEwLoo",
  "key25": "5Y2t1M2B1YmwjhjW1yJu2HkkrPVNcQhosiAEnKPrF2oL3sNoTdKBHSkVkh1A2vggWuK3XYDymzbjM1MKaqZPcDe4",
  "key26": "4hLjPcp1DZyMtpGgRFrSXCfcoLvEAWLQrTPmyFjUGKKNiBjLzqCqAkYk1wiTsXKT8tmm8cMWnKQ3d5SBb2x8fAgH"
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
