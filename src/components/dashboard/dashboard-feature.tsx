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
    "2BritaxDrht9N8KzmkT6qEkw62dUHQMYoovigrfqTEEY2jhcngtF9tAjrwiuVfEQCPF1WoJsbWrxDE5oP5vhijB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v84Xjh4y3riDyMD9Hti4qYxjC1p7qrtDJefbfSJxTLGtZkxG8caZvdAitNcYTo2qGXsC9oUrASyQfKyXXwd1i96",
  "key1": "4HVCEPo5wrrD97iTfYFAgvdedpc1RTg1KtLvVj72JTaPq5P3uMFmN37uqakE7pp1CkktABVTdDaexckyA7yc7JK3",
  "key2": "2DodpUSyi7RpGnGiqdszXCGS97NhkZvtrVabjSC9V4c5gK1UC9VyVPQHw45mq4QW8p685XUU96tFCVpNWR5GJSAv",
  "key3": "4h2aH9hxDPKHf5WFFPaH2pQF2YBgybpKuGy8jtQbMqdYKbchdxKUuXq2V851aVewoR3JPaynLL4tQ7dnBVQ6f2BZ",
  "key4": "4FnsVJHJRq9Ri66qctcKchEXWQiVWwzq8HXQKzuzfD8GJmDHB3RqyYDvPtgircpQCmk3yZ2yVYwABfVrwuxStFQ8",
  "key5": "2hSrQWLb9poNFJtkexJbPGtTGwaoyEVBbXwCokrPgF2ZLskNdKUS71d6pZ3Eni1v7TmG8Ttg7XnmPbBCaMnkTqSC",
  "key6": "3k9PQeHw61GUxBfre9YmT7pZXjgXMGKay99rgCESWS8TdzS3ML4xX9ui4W82eXM8RaZj3G8yo4nDgKJFvvgr5zYF",
  "key7": "E7N6us5nBdvakjKjSZxFZecbGvop4vVgUgexQrCCjj8RUX4A1nKgDmDsy381Drvv1fuhSAYgPZ8ptLaW9kmRiGg",
  "key8": "5GVZJFjzwTCgokyVAv4qqA8Z2P631EsiQfNjokn3EYJTyL77KtannqpeZQxXUcXnoa8dawGsQm8hZKtpX3YQDQpK",
  "key9": "5L3DdyXsUrmtUh5mkDyMSDwJsuSnUJBSgpx3BHbufxtN7yp75eAuaAUYPKZPjjwZEzy7sqPtPcJQKKrLP12THeyP",
  "key10": "3RegHzDgkFivQTNdQMAATqXRHZDNb59gGZZTmfGQ51HAj2evTtaRyBNVAPRT73NrTtLFJ8s5QPoxxM15a1KwBT2n",
  "key11": "YQ6VHyn72GCHxCfwpMih7RNBZFW4KE2UwccrdbNYZdY1yDk4VTytKqTfUpVbrab53Mdh2CnqKWLs2azzE6LiTeD",
  "key12": "4s9H9TnaRmEcorVjdPXJSFffGKF7mVze6paPR6Ep1BsURuryN154pDfpJN9QibH8WWDv6KSepEB3Mj2r1xye5AaT",
  "key13": "5VVUtMXD1GdPiAdjxdGTrXBsLQU8K2wbWbepYFyJcm7rkTvhzAo4gSETfKFjFRoJF37ejNMzz2FTPRtfBkgcijxA",
  "key14": "5eUkLU1deTdVfoh7Lxu8XLWxLvRdrQXPfkQJW1TnFFWPpvVb7m1pom2Xp52U6TyV3giL5RxPoqCh3ntGTnFTmsNH",
  "key15": "KFCnQAoFwFKu3uZr2WEFKRt4Cw4CcVXQ8B2bKk2HBnhRgdinLzWuR3orvD7Bieyji2qbTLhXyEg7AXXU4GuetQW",
  "key16": "2obaMPZ8n2KGt2mTQfgxEG9tg9Z7Ka9AamADQXmfiS6r8AKTqT8iM4uHKSuDuda4FHytRW8AufaGaWW5VKRGfHzx",
  "key17": "2gygzBW9vWAmrHKTvq3gXDHhzAiwoYn7a5qNDEAJuTKX7aJ8G3u8exzLukQaFP82YgqZYsbF33ii5Ts3vV5wTHZS",
  "key18": "4rNjqKytrfyrgq9KBh74FrVqMRGAetxUAhhdX3TVdw8FgA12Ke1pvKjsszb2VR9336X3P4kmAs2WEarGWEqYaEvA",
  "key19": "2k8EF3QTXUie5DRK1F6cvW5TzP9ouJMYKsGtxJqTggQQeeHWZnNbdFaTW5MrdT4haktFF4RDVHhvcZNYxYW4J51a",
  "key20": "3dZQ3bwpmFz1VzyTuCE14xvkbuVqWsCN5BdTqyTbgbhs3FM5oW2oWmxxUR37T1RxhG7izsof1EpKSqko45G7GeDP",
  "key21": "3U3KPKsSZMEeFa3mo4Y4c8WWFC7dk97MQtJyucfEbGZQc5Tj5rxBX7oTPUUgRCWiA3oDrGMrBoUHU22f1PBjzySA",
  "key22": "KGF2LysqoiUn5u7Nkb1wHAuqtD2P8Nqoebw64dKStmubLNAmZXPBCoXM4FBkpGTjdWFCtBuYrbu9TQn6xso3D8n",
  "key23": "2XHHgMqNnNJBasTFJ1vZLUmVMnDQVrjT4QgHcZo638SBdfNmV8ETxQg9Xob9DDdrLxnax3AvAyvVo3wwLWT2YmFw",
  "key24": "32FyuAo1c9zRrCMmFzvLZ6TkUyaTiR7NCy9xY1G2zrQ2CPrKn7n3rDdmx8EyDVNuhwmWwmmJjHNVgZRC4saHqP3H",
  "key25": "TEv16JVA3J6574R9fX7NadjQXMzuhRHf9b5S85EmkY6u2AqSsjXzHu5zq98JEim4Bfg99ZEzAn9Fu3F1ZXDCnLZ",
  "key26": "2jHLF7XXcdeoj7BbJbitfF6SEadyaf1sDygaKQDwGvLHNVngQKVACPtf2offy8pAFcxQQvkSEUN8mZLEk9YZxaWe",
  "key27": "apj7yeLnDPLcvLfsbPjRhNFHFaEaeGzUcwQig6VoYyTqDFRUNqTBJ7DjKZZiVsGE7K49HENbAV8ACKFAsosTLBj",
  "key28": "56qb6CadGAMEcKoybTzZiPbxKtZGkqgijqfePTFaefqDVzEBpfN1R9DUrrvNqfvr9WHJPudochhKZJokw4CmJH8q",
  "key29": "2gqwoQkQ8ejKVyGitK1rPwBXadPwaDy79XhQTWZ5PcAQ7ndU6nH8L6ZYdBpHtYj1WKoGKScViYgBPrSnzXB1AADT",
  "key30": "2o8SVVK215SQQqWaByPd6qe2ynbUFkUqvBqq1kcESqJwWxu1S9gWa2xYfPLLhVRRDH9uHdA45LePLmCn4582k7Ti",
  "key31": "2A7ZGEc9X67uv8K7SiEGA3WnAPPE2pFpGZBopHmehrnXkNoEedVgMw5ED1GytErkB8vZZuEJyDPKphR1YnPHbw5E",
  "key32": "45i1mwPb4yeuGNR3Xsapi9xHasMdznjNN5EFiZUqFJzYT7v4VHUYbfJtZ3KHnJ6UhPZHYTeyrH7VXYaq3DFcD9QJ",
  "key33": "4Vz3q3MidwbJdWTNuhJT9uEQQ4whmk3yVSpHsHgvN1uYDzyLqxq3CjFRVExnmG7h9xxufvKBKYeJbTF5L8MtQHq1",
  "key34": "pCYgRDjTZJ1VWb5tfuTbJqxZPx2vTBS7jxgGDr6ANcXeQmq26KmEdtxNFEnHFvF3tpLAxQhjqPqWr5DwTzKqXzf",
  "key35": "5w3sLQ3qcDq7bdHYPsCt6kuRrFwXPry1RTQXETuLQNAn3F2PGkpdMTaguUn9so1G9Ha7nMwpbibZZbkKVxzeVMiX",
  "key36": "KepiLpWCD7eZx6SpHzkEjtJArZdTtgKV7uifRSRChvpa53LAdxGqRp1xZ7zTV1yhUyjdG3kdFb9ScbJKqnmcUD2",
  "key37": "5HtdtboHTwuZbhNe4ZVkzUQKDGfgEM6BhmsPbihu9gKddvd2aPh8a91JCsi1esR4rLhVX2hkj4tTe54Kxus93sPA"
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
