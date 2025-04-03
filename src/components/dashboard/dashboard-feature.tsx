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
    "3ejRYxSpRAWXBDpU7fnpcgJkack3g1YtPKoDKyeyQiRCvCGEKuSjSbWFit9Y4poM3dmmT4zjoxhiqdodYjoxyBFJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KoQFLaRzjou9DYQqtvQLin3ZU5PiGUTNckm1LMST8r2QGmbNxTYJQw8m445ogSX6UtuenQRVWcrbd5KidexQ4qm",
  "key1": "5HPJn7SNzdQyfB7ndqz7UbhJUNh6kjQoRDtns1YgboUPn2VchpqCyoYgoqEmhqJHA1CdfgoE3inqJj1iVEv6URjo",
  "key2": "4duF6N1aJJQuH1SukVWVfT9AmBa3pXcr1Gn7gDxDzstX6sMtV8Y4PuFd7sEZNTF3EfaDfaWmbRJ7gWyZwFZqs1UL",
  "key3": "36ACdymSWLEDUJaBWBrGefnLz7vhTbXk7KQ44sKrd4jU1WpYKhvH2y7T5nny3VKTFwXUUerbb56xEumhtion46SH",
  "key4": "2SoCuNfLLLhcZ6FSFn6hSxjHqhpEQ2nzL4ZTqEY54V9tWQm9LvjJ9gojuASfTEv7yXWfqQyyAY3mCh3Uwe9urmpg",
  "key5": "3EXZXCbkEv6pGQ2eqHpvUf9XuzRBE3rEFRCUABKJCvczcv2ZwoMDgepEeD5mvW6mH6redMa1NEtZKCub529bKRDE",
  "key6": "4eBcNY5j9V86ngMbGWJWXeP8Exyqv2VqMf4AxJQhUnN1w4U4o4MSGcGzeCBNjnvyPSmpvuhPPMP6z54bfYNduFEt",
  "key7": "3qDrJWaRqFVXmtrMhjEYZ3ypTB17FtEL6QQohATDBvT3Ji8YcSKtaMXATAacNDLb9SD5n79GsVJ8VM3Mb7cQ9pkF",
  "key8": "zG4avkE1c1uRcCdqo3hB2fWdu3YvHuV5QPzvyj7q6Svm69n5avrprxZ1n9k1dCGyh158TafzfUhuzjHm9wUZ3rN",
  "key9": "21rgRc8ntzzJY38o76FujPwYqo6SU9Crqn9QS4dypEmJeN8ajJb1GyeWkcAi47o4y5b6K8X7iCA5eCxzgj8J7ksQ",
  "key10": "5Sk1A5g6W8wbiXGG5B35vcNK7UYUgEpJxysWss1o4t6tXkJCGyKkgjjgcprgqgV1XXP6n3QDz8RrB5L1XqxHqNhi",
  "key11": "4gjyWSbWmNBXmvG6JZR77BHe3yNsPQPY6T8FRLxD8n7vvcR44fXchkjZGsVDdnegDVYSDgEXv1zNNaKPMRFbeKEf",
  "key12": "sqiFimVCCXvRHFhsevAKNdhero9AU8abttAfp88qdRozrk3k5e9GYC2Qp3qwfzYD3TBW6sfYmbLyb39J3BTvLMe",
  "key13": "5Jg5rMscvErLUeR3oH1Vy2FQW1MT8knzDJf2FKAQoisWjxRZAaqvjCbAMLK6FukSdcB9kGKZLBvxfgZGZtyitXGy",
  "key14": "5nmrbABMtTdv55KoYeb9nJo97zk3W2Qz5zpuEXTD6Vawe5gq4tR7YJ23AHRRBQS2gudUzqSYDbpny4jk7UAt7Dzf",
  "key15": "5jEy6xrwg8bbZhWLzJrS3vFpEMjHicRPBEfX8xhQVRhNzEip29D5J397jAsdSTR3euB4xjHynyMfWoLrHWPUKtPi",
  "key16": "3scufQ1bZXH6B9ZXF5YRtLiP47qEh65FPTzx9u8yQLLkeoBQmnsW7TRjG87dsykKvCfu6h9BgKEjnpghTbBqhEjN",
  "key17": "2GCH9woih4sxFkbFyhaSr4AtQZFC4jLXqDwQkas9Suk41if4tSCMkyLqt2ZzuukytTE6MRCTnEGgCBT3LxiMiXva",
  "key18": "2UhDwzFBvoBuerbPQpGTGMnw1XmB2jkp6WXpEXVHrPKc3qPGRvGdPhBJrPedpD6pfKK3FwJ8pLoG9NT8gb4eh6EU",
  "key19": "ZPu4TPCNnpR19xT1awjvr2MGrhJwsRLVZyVMjkgufw43Ri6jmvHPAvGLq4o78gLZefwTKGvcUzEvNHsFGUdA5HU",
  "key20": "5T7RQDgzDmEtAHCbQf4ucnzMWD8vTq8i3JcVRRxnGJKM5pj5zfc9c2uzELgucdyC97rqbVUwHHGdLUW96s52JJ31",
  "key21": "3x9vdThb6ceR21QtZrhrVmUdRvDEGxXvKTzhWp4RyCRYFi3bXNKUQfQaWm6WTKeQnPiZRtPt9eRKhdJiSqV3wEKH",
  "key22": "5cDgWFS1P4gwAN3BxpuThkSM2u4j2DsG5fpZzxBTC4mH6w9tQX3g15PvFEL8x9CAtPN4ZXiCgHZLTRawTC6C6CQc",
  "key23": "4XtwFSiG6ZLCAGZTePEFiH4svbGoHaYNRizHu7pD5bJsTssmywNZAKU7YjLbKe7fagMdoav8TmBUgbZfn7iYm4ir",
  "key24": "HBPF5XZtTNrU67cb6Jazp4pG41h95w7U5Vcqywr7wD5pYSkgunTkrhkWivApiEDeHK589NUChbkVCZ9GCK9hdR5",
  "key25": "5RP4frYxPbMfrgJGWNGiTa9SWckwyHUs7yjCKjeLyzPLi1gHVexL2Fv5K5YmkjA5pcCfJZSLqgGPEDePd9cNk1Ep",
  "key26": "3d2hoKeLpEL4ohMuXv443Yq7PdKhhXnuSJdiFqVSCDYt4N934sGtZbUytHE2NixtgQZGto9fTAftMtNPBsRC3tGy",
  "key27": "3Ezna3eZj7Bmj2vMVFfsRQd156zJWg4SiBBPzto8djWqGe6mpZv4SAxS5W6YMuXa9dCfLaGoNSGjUKKUiLVYH3EZ",
  "key28": "4THNxJtxNCTisjR1upkDZuYoWAAyZ5uRqRCmcqtekGHstBXY7dYmSztPw21QN7wRhdyzEkpGXGtHDfo6c9BvdC2s",
  "key29": "5B6wwXM2d1Phd11YsK5KTRCoTypvkemV2PrJBCgJXuR1stNCcLjALwmJbNg6zk2fNteHFVRsFhr81SLL4ubGM6bv",
  "key30": "5JUKwPhPPQVeyTn5LHz3MGfXFG7U7CkGcX6PtDC7C4W9rU9YCaJw5oDx5cBrxRm2TyPNcFmAQ6cxAGzdGx6LXfuM",
  "key31": "4e319s7Eu4NwnAoRM7TcJxUQvFZGz9xV4tg9PGoqBFj9gWbyriPiYcRHm7dsbQf7ewQZTS3Tn6ebcPLbKwRL321P",
  "key32": "wZFHnqjUhzuJ1gSKyy4bZnHM1nKduocUTtYZyMXgxEPUisotmZTC3dZYQg9AZsWU9fnmmF1hQMfxoozSySev6o5",
  "key33": "3Enka6BAPjod1NBJeeW3Wdbu6anXKPgVn51EARNMkHNCdzJv9VTbEkb3mgkXood18x7MuAAhjrYvUnbKY7NRttjX",
  "key34": "2q1XvSmtsGq9i5Pzq1eu1HzEBjcYWBpt2DJy1vVjaUNN5WJD7fUA6RDjW9mV6k6tdBDJUfMbpinSqV5B13sYaXwq",
  "key35": "VWSbmJoQc7zHT1xkhKtUmc32FUf8pgQFFP6wxCoeJ3RR9d3rA2pTmfvMmez33sSACu2n7UL5SmALhdZUpMLGP9Q",
  "key36": "j47JgNDutbKYmHB7y1CBKswvAUjFDcxBiAQkyUQU5dgXmqFdeq2ssSAun46u6M65TS3Ws4ovG3XYSY1sWCBDb11",
  "key37": "FvMvAqUnyWmYpvdM9Qvfy6uq9n6C1age4MWDWP6tXg396FwfqBeJDyzJ3ujx9Af6mMNAoJVcNeLMiTgSnzbjoFe",
  "key38": "2ERmpEmdt4HgvhEVRvkMFy2BvdmggFMqqN4j4CV5gqJw4i3QHKhrNQphyNqGLuXNLvG5gj1n54foFUaGYE7XVVxH",
  "key39": "3rUhf8vgxS9wFZ4oR167UASojLB8SHJE5pd36s9zae1LyyCYDUf7DUxYvWAKiBchrMTZtEC5QciskFkYRkXpPAW6",
  "key40": "YZywdMpLrEmeGJ4Mi7TUrydPxtMNyhSuBFKxLfzXid7uCjx68F7kbCBQKUiaMEZ81mvGxS9VBw3RVsMWA3TeGd3",
  "key41": "WsZVk8mFgCmBhuUpyhEumNfuXBBCZa4QPTCquq9oQg1erDRm1ni2QxrnCSmRRoZU315gpttZEybWGEj7gt3z7DG",
  "key42": "4h8ybnLfLfZ9yfJE6TLkDAmjzsaNFpWyRu1KepAAXBrMuLwGcYuwS7JPuxBE1hnZ87WExW5VbHd3js1zwkq7ip5V"
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
