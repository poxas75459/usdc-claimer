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
    "3gPkyUF9VzyPtjjRGKxZkfUzDRrtCYiF7eFZUD978JRTYYKh82g8oH8WDsCTdadRzP9Y3eLApnoRt1SBKZe3nJyP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ufXsxh3kov7j3BvzieY2jjLueyQL1wZosZgRRx9fEjkpBpVsri6qKwzJbUPSrynB2x4p2S9Pt7km2gFX4SKik5Y",
  "key1": "3hBSZs6qXvhWD7DYkkBbdbqcfuC36hDKMm7N4XjGHMDYZzLN78n2QpXiAMReCfwapz34LLQ1WhcsuCN4SN2SvBJB",
  "key2": "2boTikn32kUx93QVXhKPvg7PVSnLYVdCfexuGPAFKNg7T31SQsw33GPCHGLzfYLiL8nTGJMKQhva5RWfm6BJj7fi",
  "key3": "59e6fyM5ouc54rP3ETtdwr7NAH9cDh8kAzWNjgLD68EaLKe3AcoTMEcszxNN9AtjnVoLqpe3UszeZTosudMQ7iLS",
  "key4": "4sDxG2gh7aLxyzcxMzfidse4k1Aowzn21JDUuz5fW3Ciqt9Zg1t8XAbjc51FWjJxeRBanp67tf6w13wdWYPV9auR",
  "key5": "5t49vKroKW43k8G1vKrbB6FQESy4N2rdM2buKRJPiodw2UJ9aRMGHLrqhkf2QGU4oEghMDGiDaKVNYmThfX3Ljs7",
  "key6": "4Kr63WDUsEQU7bNZEBHcCnXK2VpjK9ksSKZfXPwictcw7LkmohK2Fudod3aHjRdmj7epheRPU8t5GGDHZ9BuizWK",
  "key7": "N3uRNhdD2qhEgjskA1xJsjXKAkW8S7mAD7voVpsp8d9n9MfFoS1CmQs759hN3vDxdG7aTvN6ZdTEtZLD1AzYFxC",
  "key8": "5RUz7a4n74MxWSuZ8cvqGwDHgfaBw48TiCsoWqhoNn9EFpzoTxSQR1gEm9tH3ZPjcKbfSrCnS6SkSXUqUZtjXgq1",
  "key9": "3DMzj7BmWgJY18oeWMKCL8ntKHYNbvq1sXgCWYiCYTJpBETCRhxj2v8bNgHVZW6kTwDm6XiBtUxhxX7hJZ3APBqv",
  "key10": "2yN6CV9w1DazRWASXz8QoTqYt8xPLjGyueLJnMPBoxwpsH9HqyqdM1FqEc6831uZVXGDNKxoKs3bzNeUQYugGRJA",
  "key11": "2mgDfsymMtT1PsnLAv33js6KWLFokoSLeVYCCztM74J9vM6dZC6wqmwAHN7cPMvYGBhgLyBX43xLPFgGeBSSgBqU",
  "key12": "UbHCRSupciBnLyB2bvLzFj5M8P5vLBqCDZ7CLRfAQFQDF9yKU2QqBHZEhYPZddGy5o8gkojUtfKWYMbsayLKnZG",
  "key13": "3qNBZyrZxs6YxdcfxgA8H9qEGsJoPX6we7mByREESDum1Lto7tej53odKh1N7DGZVEvUXU1AkRFUwa9JZs4R7Uto",
  "key14": "2LGvgPcGKjtPq357KdXZ4dz2H8AcbXE8zWQt2hUU4vVsMmqHdwXXajVYJVjHDizLg3mTFCPRR7ytEsVdgjox1NGt",
  "key15": "2rY3MM4ZUQhMNRjSErTGL4s4yaS5fBEaauw6H2U9UYbhdJHzwRWm4xZSnMZYTy6i2SkTjS1prCxdBgm7u6Giswty",
  "key16": "XK27ggCK62xTXMTKADgdtNm8aLRFJaGkRAY6LNBEZG9pYaV9gAkt83AdJMcToQBx36skf9bWoaHSdifvjnCg7PN",
  "key17": "s6UQ7hFjy99STy3AVPY4UwMeWeY4ZRcfz54zEChLXPNwGjYD2kW7Vs5niG6ZexcPm81c93KMjaMb3pU8pNxf1px",
  "key18": "3kw5zzMRmMaMCPxjWp47ze72QaGxeJvdPt8oh2tZyyfhSbuebdGrSCMuxUaZXc3xPvugPkBcXZXfXF44pYAaghi9",
  "key19": "3PqYqX7kKYYTSGoaUdRztzLevyYqHKpRBHRSca8X49DAvJyoNb5AXghYvmYmdghY3NAJSGQDxUKBLGiEnhHFZBxA",
  "key20": "3iPQaXkHMEWxGnADjp4kx4HmwsEzNrwT9cacpKxEwti7JhEPf2cAVfeswUdfu3az14DdKtGkKCdzmwnzezjiQFCF",
  "key21": "3eVeHJfN9dpTFCDb1FUYZcgpSiqgLrqRtMzYDXRD9bUW5zGBRZUXwcVZR7SngNKU7pqxGU2aDUsFWHWRAEBxmCwr",
  "key22": "3bwiJgkDUvsG1mtWzNM2QoRpmn1agy2JMVKieckimPSHuKi5fUxuDfDgnphiKuptjSmpHUNPXQRGEbQs1Qo2xBpz",
  "key23": "3CcDabvVsT4TJiMzmMGZx2GKA2m5FkuR8XzVyU7hBtaMKKHrZkFuAH8gUDS8HXKGAMXitrds9s63E5d2FXeT7w78",
  "key24": "tyFPvAuxBF1eaGiHE9nCGuxX1Qrcg7uoiZtkeYdjADFLCZVMessCzenUU5Q6PoHBwSGCHadmdVYwR28xQ3ET5HY",
  "key25": "4thL2nFugn4uup2REoJfWcAgmAUgCEuUx9H1adCT8KuBr6dCTrg5pHEEBRumKcHcEvWbqKfBYjA3ByUFvaDVsHoB",
  "key26": "3f9QzEyP3qd1SzMVcysbGzfm9tKmowUqFop5sGRfcfU2WVqVt3aufw5qJ3JUeJ9ToWfKFUSuYTdpKmcdv7Xx2kDC",
  "key27": "2wx3M1vB3KLrrHdvBehGFA5qdZ1jVVY8NUfszekUYJvMXnMNFgyXHFu8PyE2HhPe8vMDicX5aW4LrNyDWcDbUizv",
  "key28": "4DMuU5m7aEesikd25kydFg19eAdxihaKhgVaymyVPzrDb4AGafPokKpg5ZtAvE96CqyXWiHFDzGsVec2aToqsQoR",
  "key29": "WtK2oCphpDcyTcRJVQYACYaytyqJYnmVMt6Jv2ayRY1FZvceBsQUeLVVuFHkzNoMnYE31L6FQ6LSPKGbBNQWsZD"
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
