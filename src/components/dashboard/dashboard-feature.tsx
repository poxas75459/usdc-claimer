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
    "rSmK2pYbFkdvxGu9YJmY38Nh1Xmw54koNtbSYRR5StpWSn8MzXwmEPC4bnpiJ2iFxbbkyJ1SxEmAbP8VQTweyBE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "321bwEooEkq1MsYUGuL8v3bRRqK3SFAvytEkNFCuuaCJincd4bkUusXPJ1v8WhTeRYUMdvZn6jEC7dJ4m2ZJzccU",
  "key1": "9jg7N112pX37Mjy7wpgTYsUD9hF8yt4BqLzY5t3MGHuz6ry4k4buQMEtde9fRxErUoAwH3wbxtWxWG15EXFxvFY",
  "key2": "24eUfAXJMRuNVs4gLm7PRwkZ8cW4nvH1fqKkzjGKpSktgJKQ5GD7upFTDeds3hGuDSwmFmG5kT3r39vLTv83V2Zq",
  "key3": "5MZzNgoPvAUyCgoKeo1YuraMQnSsU2RrRk7kY3gwyE1wqDVNbH6ooTeomy4Wrotzmwj8xzG8GiwHJ5Phjxhr8Y6b",
  "key4": "4oK8EkQNxvUBzbhvUkK5JECujLkKpYf7UHK5oz34HN2ApAeV4Lt95e431P5m6JjcTUEfMCpeak2q95sdEL4xRF4q",
  "key5": "T53KGo2YUkLWmc8dKES6s1AjWaKEins4vhm248pRPyb6zpZx7LY57AQZ7NuTffkPHWiccbN8EgACVk5z3VetRKz",
  "key6": "9U5tJDzUn6Hn9mvv8AS2TRTRf1Cvor9JzEj3WpTzN7ChqzdkKq4orGFyhkMSyndxkwUn1Ws9HSHComtv9DKjacF",
  "key7": "4Bn8zyMHp18m9D8qv6q7dvz3vDSaEfwcLvam8Noj27aacd3HXH9Yo6tyhwKSoXAiU9bXmCRTf1rweU7xFuFoyNwd",
  "key8": "mmtZoJ1QdEpEzmxzbwMMJ56iArvHB5byyWVh42xw7C2Z8WTHAg5mfWDaLjzrLGhm7sFCqKmZRNi6R43tGq8sohm",
  "key9": "is6K6VJ21hAQ1DSkE2i22oyk2kmUrk86wUM6dzRQddYJwjGZkhedU5zH3UGfBxeUTnFZbmbzYJsJiz7DNTtKBKL",
  "key10": "3CLbVauvpXR6XXYWeafFcWEd6um1BfJ1Gi1KQm5JLHZX5AL51zDyCJ4Lnpp3Tvk5J4ATCi7Gv3JnPE6HPDfzW6FG",
  "key11": "ju3oKKG2nAEfQh5Uvgx9UnFxktBgPguQGK8s2NEQFL3G3vj3oA76EcTtFVNPMgtWqb8S76SrEQgBRYiXJdShRff",
  "key12": "3iqWiapsEqRGpSUC84gzLhaum3i1SkU4BLxKYHyMJ3Ly8vXA3Lbmj7RsJgFDw1uXAZmEV1AvUMfaHv9fAJMgYdvn",
  "key13": "4ECF5PUu8hrzVLB3YhZjePN3phb2opCBB5jRBRwGfkSpwcfQEtnqFMCppaxyXRrkzwtVgyrcsZNXmiYMPBswBvgP",
  "key14": "jUF6HPoXfW9de4NizxNUYYSifh1g8Ed7VPPaeXs5RY6h2qmZyYxQ4v41RXgzS5GC9c978kHedRb7UiZWXaDvQSZ",
  "key15": "66MA2w8Z9m5Y4YvwnUFww8su3XWJtZS4513JkhwVh2XGgejY5wcAjTQTHXDuYFM2kdU17YybtYJ727pRrnxhvk8m",
  "key16": "3Kt21RydBkgrtAGRvjZ85iHjQSK6othR6gNFz1o6kRZdfNevDVHL5wHkyjan2jYWmxvCftmFDw8nMTXVDSuc26ej",
  "key17": "3RnY4s2q5K3hZR5AQWbk6cPytsZLMY8SQNtUbLMK8hGwXFFxmN5hsyT6gjzsyWH9PPqnmsLJBXYRqo3zqGcyBs9n",
  "key18": "2MLtyLXqmuQV9g3ibdrwoQTVsgMfGa3oTJTdKtcmmj9JPYocNKmxcgWPv6ZKYgreYiFreRy7Aw8FyW9pz71r5z6B",
  "key19": "2QSC4GezzYYoi8QdfzbKemmTd4RwEbUey982SbTGVsCrTwnyULuUK5K9aowmaq1LpxgbfpdFSf2rXPi92ghyEzuk",
  "key20": "5mCjDj66b3pdW7TYnxEUq6nzHFWwdQakEzTSz1LvTA3x8KHPEENkpYJE5bpTr3ggmxdnZnjfpKELVV5eFN1jpAuE",
  "key21": "gB2sxhzdW4ggDZuZYNsf4nCmeubRgY4WSP8FtgGniBPk65L2zQeFo6mNcAwHCcFiDegddk6gEnrt3daLYwJQtjd",
  "key22": "5cNyy5EfpM7JE5Yq9LMdENAY2C2AUbqfL1Jpik4yqQpXS9asnJZnBHjqRWcyN1XwwymYvoq4VQER2uDb531XWUUc",
  "key23": "3fzC7h152GPzxPcBTUhaEbrgKf2bWrWikjH8FiwqGVb6TUAR76949JVAQpj1v14UaCKfeUqsyYz4tyFZNxAkw1SL",
  "key24": "4PijvvsYPcPg7dRA2DLw24Ba2yU2Pe2PEeffXh9i5KSSrkTXNvpq7eVYci5Es8WivGw9wE7i7PfRc5dSUrKBYJ6g",
  "key25": "3N2DTjX975XxDbjm4q7kTCdLpX5JJMEsWay8fTA1m4xHfpnvs6zAPSmscT2AV13rvYdCDSGZoRUjqvce4zPqx78c",
  "key26": "56X8Nn6CvpWE2KbwNgEPePzQ3Pp3rymyVXwzoCz5hVSAprxV3nK9VXUZu8LVm4j7fyHVAL8hwjq4JQF49FKKkLgD",
  "key27": "4qxWBJHnLofCoCtJmXdcTC8Yanjhcf9vKsLb2NmukTmrePG4Sjc6h8zNZNYt2MEWbeiwbCMEPaJsR88v9D3taDp1",
  "key28": "2jpg6GNE21CJgGy9VNFbWcaa7Zhdb2YiTtVDUX2dMD555z3h7jPVb4C48rdu8sk7pVw9gsszp8suFwxPxrjZmCss"
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
