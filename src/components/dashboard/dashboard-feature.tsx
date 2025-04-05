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
    "4Vjv8KmX5RVdpj5w3qXSW2zR7LwUh7sGJSkNPUd8vwpe62x5yEXjZrTMeRbxFhHDvtgfBLEw9aZcp7E6Vg5h6aNN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YvKcFTMYeJrN3v5Rk399kALM17HQUKxAwfjxDNB6gMWHahG7WnSVCWP6xDW8zZWX33cV6z1cW7HVKEhLH3k14g1",
  "key1": "2aJSYrmHuix3PgMFR9nNpR7WZ958UN4LA9CXTsCpUNPjewWwe2bgximoGQyBFez6tG6sRXdqE5fHPgRJsv6G8JVc",
  "key2": "CmE1Zr4zVuGdMoL5iWZ15iAw58eCKvFkYaR1PEZbrzJp9BeXRsyJFSSnJqFKsggFcn7YwXo2XMa7undY3xrkpnG",
  "key3": "4KzoafWkrJTBus4F3e2zqFtEAvgVQ2cUQpctZ4aMbtumXeJNWcNQjCS6E5Hz8bsV24i3YSxnJmdwiKweunuhcYNr",
  "key4": "4a1RDWYsVkw7hiRzjQHJGtGXK9S4CCXeSJTyQiwUaCmr9zieMrpnFamav5t9jnUvF4Xyt77DJNz5GDv6yZ2Y12zC",
  "key5": "2dNRUUvK5SdXA9ZHQwDET4esDDgPYzhQWnh1jqw7fmXqBr4MDP4sUMMqwLmAzoMRFKGB9rdfgMGHCsGHoeeZihp9",
  "key6": "4wWg5g8NRE4EP9MAAQip8ftEhf3zVXn3Ekzu15k1ZJwfJmVStFNYUqkAHFUkAMXhqi9T899qjTkz6qDXBMD7Zz5T",
  "key7": "58zfFjNKAxUv35fr4Sk7uJuiBGMDvChEV6BUAwJEk7ab1zEDqauyhYnhzzTZg7JkKM1BvzmPs7YTgZUv6TJ2YFqq",
  "key8": "3BrcPyYGfL7TXLuAZbrPj776kJJhngKd6Esrcxxuw8pFKjC1GRajnj7ZtBdwLAnXiHi4z7JEEw8ES3mwuEy2jtnW",
  "key9": "4HyQs7spoWs97wUeM7BBPbWYodvhPxTffTuU3ubKD4JJ5mwaxgYhESHfYce7gPmqR328EDoT6qPuUxQz1vGtUqGH",
  "key10": "K8mMfZcXVn1BCr6xs4P3NczUJe5DQ3NpngdJpyQmSCG2MW2MquEudM7GVSWf8y4GpUTVjoJXUukhGEQEQGDicqp",
  "key11": "4eXDL77rSz9HJG4yjGCqFCN3wddbHNvcJ1ZimbFYJPjAt49g1TRujsLujB6eJN8noHALXwXVFibXPAsnYY5cH4zm",
  "key12": "4BMtzGfTLQr8E3hmdYGgeKVWp5QsWYG9P3xZMD2oN6CGhW6MTAtm9HXgz4Ewn2iqFqJTMatAAUqqZqgE6Vfs7mrm",
  "key13": "4HTQ7VB7yYBdDAgdexS5GDzr62xxApwengJjkYZ9au8SkNFFe7RpBfQM3bd1cmn118DAEArfLzk12SsEE2JFMav",
  "key14": "4Kpi3RabB8dorzb9gm4MRgDjsDtH2im19VXLtF2zfNbyk29QYjXU8tnV21HaMaGXm9QLqrCeFTVXCLxyuYVtGr4j",
  "key15": "ZUmFnPr4pS933pBR595Ef154fGfAr94be8a9jTLpMbQRy7xKT8xvE8TtS4wjyfbHsyPYLS8CAZq4DN3YfhWEW8A",
  "key16": "2v9DEN9aDJCXnqynjYAnjhVqom5pqrvoXWB6DEf2nNhz8MizEZggArLFkhZ7yhvGMnKBZJHqGXdTqCW1bSFzq3BF",
  "key17": "41VqqA4gFksB8PXdgynzDpsUYrj4Bb2X4zbGFNqZ3s1R8qMABUuoZ234fJWGeQuZoiFrhATHC4ZBGrwX8axCb5Hx",
  "key18": "3W14wjNjLKrqw2S9hgFd3NkD7sTvWzg2eYnWXfGS1CJciYAXAUfxkWWB58ZWaufwyH9BnXeT3Dh1CoTXZSQuNsQJ",
  "key19": "2K9QcVjzjpsh2dqqY98aPmCXFREa6wLZniLS76BrqFvCT1TmL5h3AnXtgFbuK4FMyytV1cReDGqRZ4VLVRZizFV",
  "key20": "eGEKMi2BcNQ1gfC6MhmmCoE4Eu4dMZjTAex6TYUucwF1g367LHvjXDffVb6WFRhXLx79NCYgZhw9HEiXiZ2kMue",
  "key21": "4JaGsWt9Bxg16NgNHW31VEYJBWP5PVd8N7K6rWLDX5cRJQap5smPHyh13uVaLXV56ziyyA5f6esXYr9XfJxQQazx",
  "key22": "5bxuH8SLupmAudyQyPSKoo25pAY2rvm2a6k88EKhEWfHVbjNBoXPWod6djBBoRpCHEys8KtoEPhu8rBrhq5qUbeP",
  "key23": "ZabmpVZKEGVvZ4cw7nDfdwgK1kSU4Vow92iJ2JmZzi5SYcYQgyw1Pj9RQ1tLreJxB6K9Fwi9VN1cYpsy9k4Y2cQ",
  "key24": "3vqJpEZN2pmeNZkt4Nb5EkmBDeZEvr5RTQb6t8RLVmpKex3ZBEtU2nbAyDJW2GJ8xsMVc1Swk1P65PjN6KaLpiPt",
  "key25": "4yfYSxQBfk8X6c1BWAYMLhTMm5HeEgGhCVxVyJszCpmr1E7DLyc4FinXbVEC24Jof3puEy6UcoLvMRaqkbdZ9oq8",
  "key26": "8BpcUnMm6Qt2VWPxft9MDN2J13TAAATUcfVHo1PnxoSTdLoPrG894YK6hqh2zY7BZCFV2aBFzccYEFcyCvnthLN",
  "key27": "4vAsycthq2ebpBTRT9WreKKCs6SpL6ohfRh4yqzizycdHN81VEuWHDAurG6XLw5KXdcQQaK7Z5LC4DAuHZc1XhZw",
  "key28": "9T4Rsz12iPauqgqpMbDcqVPta5VUimv4iBBzNEotDeiocLL4KFvSGU8w7mDWanHwUmg6MkcQfaECckHa4n8dk7a",
  "key29": "4gSq5y7YWhAmPUjjWd2QV3jefYTUvAbs7BYv6go4Zxi1ah6TSfFHeTrGA225Gec1tSQ6gFmfm3V8YRJNq1PDcjbu",
  "key30": "4CuPdkbErhnWjsMtt4B3G89rJXB4JnEbmgRTpsF4hThqwoV8UNMyDzPwkxgpAJukPrqsMVZnfzrRJ8rLS1WUVdh9",
  "key31": "2K27PyMFU281JL2XREhmVtqCrbMecBY5gmsQfYDKCiEoaPo9bNzfpDNCaxnatoGtsEAEo8HvfdCGL5yuPw5UPY5x",
  "key32": "5U8SrLKSMuGe3U2fBSEuiRktFG66LhPzYEr7EemDjPFLkUMFchVgcQWRktr7hrtkW6X1vimwJVFPS886fAraikDG",
  "key33": "26d5fNs4M4RxSkL17e7AmbC64pQYBYh566dxEBar9U1j9ftLrtyhr1zpgo8wD7WL4AD25bPJbfrAyBvcuNKmvfXa"
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
