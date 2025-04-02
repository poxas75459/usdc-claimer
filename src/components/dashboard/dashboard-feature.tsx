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
    "5Gb2XXLvf3stYKf96mfAdxhVsEqN5wzaZYZVupb82bA482bubkTARFP6ec9TVmndyjTun4NP88XmrYd8hjwNUqH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Dy4Q8Ar4pReX23g8ShiSj3rfRcWawwG3VAKU5ayXZwe65eTw5pSSh6D85iKs6eTvb9RMq2R2VE2mCzJkpq6H43w",
  "key1": "66WYgpvzq1NX3gG58LudLZokCU32vDHxwnC9aD8GSCVfBo5vmzCSkPCXSUjezr7ZKsXBnpDmpbUSeDhPRmySsXyR",
  "key2": "rUqWMi4bxwWndErLCw8id2d8nHKTND5D57xyzzJK7YphuPTv7XyaMxdqAQ3WaW5M95QJ8UdC1Pbd9Y8pV2tsKpK",
  "key3": "3bHhEgWGvEGGWW3krw8frjeGnG6PFXZxQPv7sxKyUXjzbkJNZcjtsAnUjdQ8HqkQn85cDX4kmVVU6FUHC1HQJmJq",
  "key4": "Pabm7TsCANbms2FQ3GkzvnKfgkn7d8rzM5Z6vsvSvXqEzSefz6oNy1SUnWzgjCZp3Mku2qt1M7DAexut9NKDwhY",
  "key5": "32CeDJVmmjdqwWVr8XqpWJpTFjQeanAUaVdWHAg298S1KdbxsjatXEYj53GzwD3Ppp2qxGEcMq95EwnXmsgnGbNi",
  "key6": "TdPUDgcV2V89webgMS5VRjswHgZAQcZE3yuTvTz6wcPCMmBn6SvStD75wcwMQgbideRsB6B7T3AKfDwXwyQvE1f",
  "key7": "5qSuFg8Ue2ViSgzCwh1n7E8AyhoXoRqL1uHXWA5WwRWzN1mCytpm3wAbf74E7Zt9LHrEXhDZusKq7NmhA7vfsiX1",
  "key8": "3SdtRPLHuZPGvAPdZfdP34TwSNv9bsAMUimUKgN8kq7uNKNdaq3t5ZDsvAEtTgNFCfEiq3Ej2MFRryfeXCxmuuTh",
  "key9": "23KnqprM64Wa9dyngHqLZpsXJXXzuaaNM5KMRfTXtEP6zVV1EUVRfZZKFCS1RKaDqMRdwJpf8b2PsX8EA7TVVvhj",
  "key10": "2v6P3VZ7WeSmYmtAJVtR5GDzWR42MyqQxDoTK5knHfxWTgKrutvjrmt2TfaSsfisDtM8dmQF8XMrfejnZDQFNXaq",
  "key11": "2z1JdaPmE189jVn2EcHjnuDbUMQ6oKYJ8t7c3XnLG6ssy5yirc1sz68t4DnHkgVMW7t68fUmJofYbDWKu8Gooumr",
  "key12": "2Qt17qo9r7Hg94K6KZjPes81GyyM5X8TLwfKv56x6PKRSkHc2UieYNUgWLHeAV31ifUAS6Bu4greG3nJqymP3wXE",
  "key13": "3jjNKoQoPzUFLG1w5TNoHugZgFr7rxHTzzBU3db5p4TEhSCNKGp448aqwE1xhNGSW2qVQPFwvPwYLMbeWoMHGBEB",
  "key14": "5niwL5SpAaYx6Sobf1rAoNFFbZAcYd3LZ1NzCJSff8mECjfsHz1Psypx6K95nbiWHBiRXAHAdiuSYDmXmN9zbLfn",
  "key15": "4vN9YefZAiddLqEszfgCRwgyo4oQ2FdpURtcgoTsH7RpTfwkBof9C93zZUTw4qTBUFSnnuWc7rNfwDRP8ZqoeSih",
  "key16": "BxL2MLX6TLsX2WQMUSh5nYAi31QJznFZ6ZPPToA6eZUr59Go21uFoH1J9C41qSWr4N8xuDuz11nF1eGqhXTEXeH",
  "key17": "EmPuwsWBEAJfUwdLWB1dUp5csgV3gXffBJSJfrytUwriu9bbVadeZkzn7xxy6KjLdrPwt7gnV7XsWuSzokJjsuV",
  "key18": "3TtwFa7eFPFYx3va4Mq9VcqkkJTR9qWKdDMZ5ForpEsWWk4aufFEq23WtDHwoqaj2SagRF9MEf4GhDrU6fnff9zD",
  "key19": "2xrNkQUumcXxUR6Hkpb4HpKkJYrTPpBHF7XKz7WYwE75DwSdNRDNVux5C89ebMCLybzp1bV4eZoQNVxmxeF4SYm",
  "key20": "BWmHJLcytuzEoYHMEVeYN7rsVbFGoFhTzvEnDir26k9QnEoiLWR3vLrCR734mkeUXLRLZHQCJzvLxG9LS23Xaoq",
  "key21": "2ESkzpksLmBP5dn9PutEfdd48X29SYqmtgEiZ8s2xcdJPrYjFcEefkbMbUNL6TiUFhb7taMGRLhFPSPXsvKeAPHr",
  "key22": "4MkDBPyyWes9jjBbgzCtH6uQ9HWTjkrYVLkkJSENjs4mxnKnbvkXjm6EJnD6dATS4BJgLimVQSpdAZ3o7p7wQ4Ew",
  "key23": "49CD4auepsP6DHMz5Qj35XnSgqYZ6HK3FRVzDnimiNkcavrY48BC46bXFXX6Ap94zuHnNZe7ghF9JgESjDdkCH9V",
  "key24": "66Ws56EZb4HysmzUn6hw2SctFNAe2RfZV4mjGcZ4uiLa3ah9MU3vr9X928efBWmjNB6ZVFa4MGM1SoiXfXeDTbSL",
  "key25": "359AfH5yEvTzNMxgvTSUgT2MfBdZZLnLmEa1KRU23aqv13bqnhrg9oqVbDzPEHA6aSPKYkGqLCUQH66eGTy2BMS9",
  "key26": "3n3Vph6GpJiB6h4qt5HVUuZCWq3XYPxT3tT3Lkur1CPK1i9K73khQG2XRsGLsGB8iKchi9GrEZPfuxq6NCbBCEjK",
  "key27": "4Ac1T16DWSwk3XpqbjDcRJoY667XCTfgWikF9TnRgK24ZvYxvuPZNR9BpWPWsJoYXcpbTqhVo3K8KP1E1wNAek6N",
  "key28": "4dP2YAg17d47iP939mbXT1M8BzVcNPLtqeyz43ZFnzbWbju7mHRsGBkWijbuZocZSG3pLnNpQLvvthZFboFEFnhJ",
  "key29": "2rCK6XoaN1HPFmXWcSuiS6DYXoJewBEwJaD59hDKXFthiMjTuZXAtb2K4ph6HtnREFYxuBqWsZKzUZFGWcdSZMdm",
  "key30": "xiqLpcGzK1h2ummgHQZvfruo716dNnKMxGTLeSZ36hEcg7N44x9hztceKbLpmXFqcEwzyvBgnxHCdP4g84nYp2Q",
  "key31": "5Jtm7vM38yXXXFwjQk7F2HW9SyKhATwjW3VUJxeeRdP8u3S2JRfENuFRQeUTgC8NZxtg6dRZo4YuMbN3VPrtycCY",
  "key32": "33zqrPsQMfBPXgQECRTJebm4u3Sj19Kaj97AKJTCDp8rRNB2RQqNmWJ4fL3uQwDREX7UbwaMoGCeqbQWHuwhxMmk",
  "key33": "59R6S7gQCPiDJr8tJMtPJLSpKd9kQaMjbiMxkEBWS1rU6VxzyECkXNWF53uWnMXHeAnt8D1XXcq55Zk9famd4P9n",
  "key34": "4WudWjW3cMQ8TdsqhxA9trqTnamaogRJv1Tn7nZk8keGtQuJKYjJVWcPkCr1uCapStdJZ14vhcZ84TnFdyusY6TN",
  "key35": "4iiswacZXUYzV1XQNWHiipWQ3KLVjhP6qvnW3iECdz7XB8SuvucZE5hMfBaq4BQmrSptDrDgzeUWuQNLjxpNzv8t",
  "key36": "28qFkzs1sg4UgdM5yB7BwegAsQrUuwe5vdS7PM2Dyf93Pa59x5xoep93DK8PXHm2QR12QxaPJ3ogWSTwRTDYqEGS",
  "key37": "5goW4rQWvriC1fJHZqAmnhvvCp5X7f8WgTFTY5K9i3ot6ixa6X2ok6zwTg6DhFDqBFBxKiwXhQ1EtLhbkPTSSpUR",
  "key38": "3Ff5keTZiD1AnspdbWWekS4TC8hG91nktBNf2D4bJsiSZkrtn3BgmDgizDqE2iuJGqYYPdkDWhZPKD3ZKSorFDhd"
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
