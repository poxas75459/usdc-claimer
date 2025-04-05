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
    "44Y2v5LC7yv4fh9PHskbMqMGfSLaT27MQYPmWm6esp3QCAzXm3ukjsJs43cq6jpLiuqjCNBKmuFKTwyoDMTWpK5C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dhHZuwx9EAA8zWfSjDbeBQYkBDEPPNeLWG1kHgfXjXSDH99ucE3xQBfXXKCujWhYdNm5Ee1Rry54BT6Vr9QhbF3",
  "key1": "4ggycod99MPSFDKKwcWTSCyJeR2xDzSh5RUmuWvYBPaKCb11N7VXcJo6BXXBjwb49ccnvG2GJ5m2mL49taWnVBds",
  "key2": "3iQY5xJ9tYDKkS2jLPj8krYHzRe2SAiiRyQiEc7LU3o275oy8LhNQSR1iRYaJpG6kpFx5S3m9vkF7ax5XZM1xgUs",
  "key3": "MsiUbiwHRAt3cfy7KK5YEWLEevYr45JeexcqWALDwUoHaZiT79By9XbUBeiTJTGvnhBsZgg3XbGH3sjo7WfNMKu",
  "key4": "2Nq3DzM3GzHAmD7gVDTBQ9Ex8PHd3GZP25Vj6J8KTewfebcMUKUAx9J2H36dRVz56Qho3D3eAhwcLYa3TrZadQAe",
  "key5": "5Een6NCogSg6BqhvmoRoinKTJzAU4VN6XizzfAqb2h91NWkn7xykXrzBqmrhYnCMTPWrSHUq4rENHXq2z3HBFgYy",
  "key6": "3ME3A9sATvMZa7tL7Am1cQgvXoFVgPyRbrfomNBB9dpPmm4CUwwkqRmHZnvXfZJqqArr9Ywi9j2isewVL6Bk5Bdv",
  "key7": "5Aizz7yu1oSfgJdZ1jc1qVzrCtTUK1tmSXk1sRhTY4E4mE2BGz5DJce8kP77BDugqfWYguTFkxGsis7wPrhqBzrC",
  "key8": "mHLBu8FLSwzVXFFgF7AFuQ5GewoLtPJMALvdGmt9zC5jw5VPbG4wJMn1x7EwQPt2yniVLv3V8dUh54zbFLbJBYG",
  "key9": "vSPruUQyqvLdPJdkVedQn1QmH5QxQfEadjPmZLUGxDtyAH79q6CsH5zEzHPAnGo1UKsoJ6yRjnLNJB2hwQh9PGn",
  "key10": "WtmpAP6n7piMu1MVB61efzKFU2AyUbLvSogN6uxoogqauCRJT3X2gPeEoLMjmbVJzZojKDwhQoX2XPweU7LSWSG",
  "key11": "gW6rENJp9H1ZMaA9bKEdQ21K7pN87jdN46yGfWySa3TzgNKZGghpcXdNTQ6c5MdrmWcX17VmydRb3fRTb2HsHer",
  "key12": "5WQVSF17FzYUvcrr9oUqU4gXtX7q8rtkSey7ZK1KaheWG3zBaLCSfbHsScr9MPF9U2zGcj2gcoYEmqrkuTeRjNX4",
  "key13": "9Br4KtFKWYEb8gjEk7DoTDBmDxvEsdYzRpDc9eAvjZSKsA41gHBwSLhViD2tchxk4X2UdzgyWVkqC7HjZWPLAhi",
  "key14": "3Mhnxqxq1BYKxHi8zuDfkta4EFhbfa54WTLGiR1bL9S5wm9LbU4oS2BsRtkzgGVTnfUqbV2q5DthUVyoCQFKVyeJ",
  "key15": "2HtQJwtevFoid9iLVFCQvSTY5H3YLGq8TkuetMcSbnWF9uaqctevdFyFp8eH9Suqo7m8sH5cPZL4sdwxQvQ5LHCy",
  "key16": "9ojZ9EFBvrP4XWe8sbsWc8tX2RfR9GAEXGg7p81umq4uuWuuHBY4YdpHJDGi8z8Cm6Yrgpz8oEpyoCLoyswaSiw",
  "key17": "55hk3dmNjkgbEpzj6RzKWbjByytrC47aaUUxV5Bz65DSHAd8u9QcAGXXMsFsAymJfuuL4uzj7B9WPKf1TpfDrhdN",
  "key18": "dtUzNNTRwbYUmzdnC5r2hQxcWQcEn1VQhu8DSNR2AhKzPbdMAnDXqcQTtG4jLC6fYTJky9Yy8CBDfrxYHBmLxb1",
  "key19": "2FQhxy1AwEz7xq8NK5pDk7DhUVh5HwRbb7Z94mA9dtMgtnJbesimt6yS57MyfNyod7pm6qrWEpEfWAFPvfjJRgKj",
  "key20": "5uPtUjfe5SRzdnt97jLcELpWfh5EXmqwD7XkZPmkRtdSHxK2pCQP6eottmHRBPTVEJyjHuABkXyK5KXLFUxS9ur8",
  "key21": "4gUbPqXPS9Gob5MhGGgy8ZM7xUNv5aTbuv3y3NZHFVFzm1dedkTropYegu65rm8Fhhch1Zyx7xU5oNSQKyeB4USj",
  "key22": "h5RdYtEcSGRek9ALEgueyHMMjxyWFe7zhusiKR2TeUmh2SjdoEqebaDna3S5NygFNrd7B3q1NikvYGwDy1uyQt2",
  "key23": "5XQvWAHCeGnpMQN2MseFyw6Eabp24tp9gioDVT4nkUgfCFCHoxTdR8z2uySCpAKk5T8EPggtP6hpwBMP4Q5G9wGJ",
  "key24": "47EHj1pyTvNeUjE3aZd5VJV8E3aP5xRjWJUePu3iwNzF9Rb5LnQAwGfpu2zZsg5Pt7MoKrRKJcfnfJtPrxNVtDFZ",
  "key25": "5TaM7MspEZE4J7PDuoj88FYwx9kwUgFw5Hd5JYCir7HKxFRBDGgqADvTw8QXUzz7ztgk3qxgmZncrUhx1GLrxgG2",
  "key26": "5SBVt5u7GvWgtWs6SbqD37hUVoBYBBbwEC3X3T9h2X6JHMnTdM23qge8t6ARsr8ex4zdqobRrEpR5XGi9Et5YEcu",
  "key27": "5fbYJiEVTVLA1ygB4BdCAK2knyPq1FFqYaiGPgKVYUskWG2hLsstUErn1i37rRLtmuq4mE1D3Xvica91Zq2SmkDW",
  "key28": "3GCcSV9cr4Uhf1V4mx8SwAqbrAMcnvDUeCRNtjod4ohHW2nfPWcpT7Qa4hgPGcByTL1TbzfHmyo9Gboga7SSZWM9",
  "key29": "5oC5kgk9iNEGJuhhprETdEmCmc5e2sQnjq2Fio3Ed3kb4gWPKTYVvGfdUzAPvbU5gY8kWyxPnEi74ueiVh72eLRk",
  "key30": "SYvzjt55vUDowoJez6eGFCxtVT6RhvsweiXRTBjfY4MwQRCKqmtUxWdXe9Gp1Qvybh7s3qDHkhwuaCNBYF5vxG4",
  "key31": "5uNYwugsMLF1Bx4VtzP78KWiiZDTA6a3iDeUs14bFP1EdbP4DH4WuX1VL6fjK9Y19Yaa78izQoi8V2HtoK8MHAmS",
  "key32": "5LNCPuDU4QT239Kn3giYop9spZjqGeKkaXLQve6eufMewiY7Gy6T4uq4iMd1gycKZCfrKNEhV715bxAesaarbXbx",
  "key33": "342W6enoFyr35SynjEmb27NgFs1p96WuZAWuHBcSzm6GpLNjDbQnabTodEy8YVT26c2Nw4sX5TN8GHFsAAXELkck",
  "key34": "SViWe32CwJ892AKVHFASfJhsi8bgxsKkpdJpx45jRMGeztsbLEMimf1hmdHrCxSYv8SdECAN4mU1cWcDQCKpfYr",
  "key35": "3EC9y8HQjwYgDa5958iRmJZv3SUtbXH6Uysb5wX4gz3fQkU92cfoHE2Z3zzwUNZGivRDitBguiDgrUnriPCvk6AA",
  "key36": "3wmPS8tjH4nrT8aTU4QxrMysjXY9oLjEY1UDp3eqkikBNAFJ5w16RV6da3WpfdqKcvyTxtnZAWhViZEdtG4qL4HG",
  "key37": "5w25iM24X2KurKwvjUeXb6XUVgr7mXyvkZY1oemrLKCXCgDRFZjWWGTS8HNvy19VZoQiodszcnybA3is7Jqy5zDA",
  "key38": "2WkWogHLyC246NPfoK2zCD3Fdt7KnARCrnqR4nHGng6twzsF4EMP2YnJZtkkAbZYkM8HPvLmRwxuTiZVaCd7AU1y",
  "key39": "zXYuM7xCFkgqyxt1kPAXEyJEU6EaQVxE67ZomtpuhWgqgWWq8kRrhfvgikRBQPhp56awazpLF9CwP2egQjSwgZJ"
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
