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
    "3neBxJrdpka7i8aQeB4FVQZFYn73CrFSk4fHcCay18DdRVWaXu1N5JrunkrN1uUoM98ZuQw4q7siSJ6SZ4SVSwsK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W1NwUjgqktHFvVjZCkLh3GkKqE6FdwKKpyudp7AY369DRePUHorXLdQZXAf8AehdtQvaYq3QqDpwV52UusCdZgx",
  "key1": "2HDHupNV83GKbbjBichGko6kKpMyDgQeWf3LKfawK4WY6gVJT3wZziBy4tHsTXXmaXhUskKdnqYGQb64qRCCUSA",
  "key2": "34BqczfyiqoNwqo2DcbPCS5s6dxyNk65dpA7MkATvowBaGUAhEfgxjck4ZDcgy7VnotoazCWcXsJWBmZevtnKSWm",
  "key3": "3Gex3Pd98kMcEUL953qtV49ynJT9NYxHRjo5KFic6NygGCTzhnTSbr6ZwKWE9qfcapyEjaJqCLMDkzenK4kq2K5F",
  "key4": "2YXRxMR5Bmx6p5AjFq4w77CTm6gtmoNGaGJQnfZJJxMzphUNPv8DskdtBrvweNyXtBBbHsxr48sxLgCUGUhZjLjL",
  "key5": "4JSgQzY8g9XHgHRUcsXJpggLWK41pB4fZNYsnpvLczbTJgBRaNsdremU6mvzjJu1rC3i2g2yGuexHAmyUGJYTaco",
  "key6": "aQgTm9gD5676rPk12qLGGi7ZznnbnpQXBaWQwB3irzP7Yd9AmQ2WZUHw9SNz2DJo7xaWrCNv2tVzBVyYwed7QqU",
  "key7": "5QVSguiKRcx9JS9Hoy7PHeCmt8xzTSRyMZcAWEKEtURfS5mQcE7SZAHLMBh9uxeQiwBmzEtnV8DXW7oXz3vnnvKc",
  "key8": "5YD8BKnvhcf46WZs44KDRrpsht5FkWELGpjAUoeMejLNPncCDMS5sgtfrZhLprQsuWka7TkoF4RkxbxV39YL42p8",
  "key9": "2BbMz9kNetzjZz2xeY9uDq3jYGW2Cqj9uzZJSoqcwgdqojkkcAbdgJtkovsAvgXmUB76yBum7PSaxPZJ48XAEA95",
  "key10": "5W8MguQBksBqTsuui4UJwDpkCU7WRjW1tTTAqVVDqDHLoTEBc8VCTGNyFL7ikr1fe7TgPTj59dFvZuzhGemt19uP",
  "key11": "NXH94xMTn8sNWFxJF6HEK1o2quuixbeLmSVRPd2fbMKLyGHYfxdxht6pyhTqvVzgDyxjnWp6VTgmpMpabhQkuL2",
  "key12": "5rDs94UF4zbzbyWhKNdxJn6rJcg4wQ1b29oKwXjqAL5BG1eRdTKSqMqk6SdbAk1RJEqohjStqDxHvkV7vWJzBXRW",
  "key13": "22xnwgKSuRws3z7PFmjGBk9snigrWmrPq78ncYhHtDgoZqatHKT3WvKdn7kcxTW7GsDAVR1JXsX2qDKXqD5Fd4ZK",
  "key14": "3V7kUJT7Z7EFXtwibfUy1Ryf85kn1Pqq7WNDiU6Z75tRK4rLmGtY2GkSmA9WQNLsDeTv1esvjEJvXUFXZxVLn3fw",
  "key15": "58MyMgUwnx3eE4zAdrKZxH7Ne5DtX6ejdXkH8FyUGHYfQiRstg62rYuzz2kJnJ8dU7iFjhHnTr55vHErtVuaCjmG",
  "key16": "3RT77JfWLnqEAhaN5yxKmotcp1wGfcTdpenU7HcBySfREjGAtNNE4mqAhQqn51RhRvLwSDAvm2bz3S1QFC3Vsrcd",
  "key17": "5g3NyXQE8Vp28wcbcMa4Cu17SDHvd1UUwzEeH6J4XWPaja1m7qkrP1qvGDhvhRZk8LWd7nTvByQPWLydTFy3JNjd",
  "key18": "5kZg2PeBSq3ivixxze5WkT7LmCz38So7nd3B1bJkwQeMdNg68Eh55AeTeGRQYZD1c4PAYsYME1AvqNEd3Dg6yavQ",
  "key19": "4RDetwTwGkWiudwVQwu1kFa5DKs6T9EfYCoMAsyhDNa7G36VSYWCgRfjAPJL4zUtRyQChUBzagcUXDHMYBRU7otw",
  "key20": "2TmaG6SCXZRGGUdwcAxZ8tbhg24G3TuiKAiCjfu8NMLtn8cJxz7zAQqGyavVhH3KQvJAaY3vMegxKBRC3xG22yBz",
  "key21": "54fu7xru2ku5pXKgTHCrR7LSGLnPX1JNx9KcGALWwoBK98yagNatgB6yHU5sp9oiDDAxwJuu19HQDej3g78xxMtH",
  "key22": "4tao6Z8YLrr4ETPWkY1SXHoNPTxGH5J2rwJT3NRWy3RF1P65BGt2mQFCE7NnBxVhEYALKF3pjQi31g6QXTnnuvWT",
  "key23": "2TgrzKuE8WsfjzkKCVhUWhtpYMwNSsoWaQ9cBCAAtLT77CVTiicPH2DRXjeeEsECyZJGaLT341eEWMWGHfk1Pmd8",
  "key24": "eaA7SkeYuNFG9KcHoBcWwecaVMYBA1Lj6Pbtp1cerUGtdz1mjiRz7f5SosUq7CJAqvXfkSGWfPNYrhiTSLCsNvn",
  "key25": "4Hz6yWqMp42y4n1QewEuQgM4FfrKW8MhGLtBout4QSQwemgEJa7GwcWeukvBdNQdBJABvcwArAXownjqizm82HNb",
  "key26": "4B8JAM3CsjtWhS6meEaJcDcUQ7XhETMk5HkiTcPerPM26vNHz6DFuZhtGQp83G8AiE563LcskKq65NsueaZ7eLbV",
  "key27": "5was7tNPPZb2f5rhoCuno8c2aYhfFTme1SVRumoMjaECGe5ECs5VjhYr9gCi7M3EnsckLtxivwCP85XBxV8cCyfM",
  "key28": "47WK4N5A8LGKAu6gyZGRs62ZwDWh4Pwemuh4kdj2QBFBRbHNEMtNpsjgzhPFK5JbTEjtarVHu4CsYWbdtnH7xnmA",
  "key29": "5twj2VFLetPZ9YtdQxDqQsHkhU5wBjbiAKP4HKHqBPajAGjHBF5tTKkdD1PxqN96Cek5xvPTuZEkyxxf5ZsA2Nmk",
  "key30": "5TRpZ3QZcM1X4cdbJj81LjuYD62xvvPij4cV7izz41bx44ihh1CvJc1w4PXG3KH2gb2h1FHs576kUgao1XXyHc7d",
  "key31": "5FKX6N744foniGCzrTA7Ny7YtxA87ZABXmmch4g5Wb27JcCyfLXxZnks33vJyymhZxjgGjXBPbeoB3PBDaVCc6uo",
  "key32": "5p1qadqQPdZd3xhn783v2obpawErWsVuRQZEwQL1wcVSHpsESb65cKT2rUvNzQiXMHFTFUCrfKKLUvgaUJTyTYCg",
  "key33": "2kGzoUSuzm4UMwPmHnZ11NZD6NXKpBcKQ9n6Yfn3E2mGyhS6FFGFBtJSevZoKUosq8LADPVGSgyxEmAp8CynqGwu",
  "key34": "49h7XMV6koeyVpqhd7sz5jT6AZUkz3mc2PsZezMQ8xbhRG4QtiTijUjgXCTxLgiTuxKZ7ANpbMavBTUc5bGHhjp8",
  "key35": "4qwZwLcTxgAfUio2WfQW5jaKA71dz679ove2AHDCHAPJiD3KWDj6ZsjtsykiNRmJ9JK3rcgPdCE6WhJ2Q3vPidEx",
  "key36": "5ki2zudk688c1vMBWn1rSmVVk1oPHm1dcQtdb9ahpQyqak5AiVszQqPoisAjUbhNbTf3bshRteDR2Cg5TfN9Y5tx",
  "key37": "2g6ehaL9qGFT5CEVAr8qHUFZv8gmizNjrYW7jCLPpqXLx88GTA3XbKt4FQdQt4bCHGzrhAfrkYdCSvUG2fVVjTZ1",
  "key38": "2YJfyyeSGDfFUkyMJXX7ux884TSbPko71JwCgq7pDwSJJWGp2aDaM32m1KjARAPV9trmpN979Uz1ZDj3A57tXMPD",
  "key39": "5fCJowJSzSJZbu42rvGhhCDqggNNKGEdwCrCMmrpuDZjUpcGVFCD4DY5teQhtJ8PqgK26yHA6peG4jcnhdjSU133",
  "key40": "HrjXswjtU5azf1ymdntu4gC9xvJVADBzFkUxzvdLtYUpy3AojMYhs8baxQxuP5WwSmo7GFYRk8tKEChRrw5CHFu",
  "key41": "5dzXZoMA15F48CfypyUByPjNgvCAqMcPbroGZJs481zT3h68p7SSdeKBovmozV7yLgQv72hTGYo9PAfYGyAgYBBg"
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
