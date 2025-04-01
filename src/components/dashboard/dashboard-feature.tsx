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
    "3ucSZA14sE6xp6gPA7rPUTb2ov5tVQUqftYbnGbmkujgacQjfJcAz4XCJVJws2XgsueAZebTTuFwSjejk6edoqWN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d7Zs8KC8FmB1CowZv4XHKomXTjVKQKpoSFPACKAUNyuXX5uzL8zuhJh1j8vmvBZD8vMWMuek21Vkv9vmbM49SVj",
  "key1": "2HypF1D8B3o8G7BXuAbBtdnQ1gDRST5rK1HTpdEVewyPdmBGTJsyDVYo91e5K3iQue7yMyCbNv45iRDuCLX8zdy7",
  "key2": "4JqnmEGkPTzA7t7pnuF56fDfdXgbzFg69kNnhAhogfiKKyFqTpWoMz4ZKR1UvyQHkmfFi3qqBku6aPtybc8NH7pM",
  "key3": "5V3MZbKtPsgD2HP8rFChcrA1BGe2uy8C5ojF4MGTeRbanLm4CXxQW2HLRfjGE2kDNBLypzdBfApG57itCcZVfWNB",
  "key4": "24AjNuufLaA6RU7NVHQxGR78DUwnBikryUKxYyz9hWpS9rezoQAuRhD8btb3j9ghDnFigsYXrnyAG9aGN37Nm1Zo",
  "key5": "5WMU4n65r6WPDqB2TZicNupoyocqgyWAbNxzjaTjUYF1zWnoHYsk9uHWJV62KsafHRgRKh9rvZWwHGjHAd7eqigk",
  "key6": "Y9KQoCjZVWQKqb2iEx4CaLzXrmsZZydTejfnmoUAnxtcAHSjzpax3Ns6vzTjVRqWdxmtu53MMe83CfC3ijYiPiJ",
  "key7": "3232AFk9y3zDqW7TfMon91jAFeHyrYq9ob8fi1eCeNJS7hw3wszm6WSFhVZ3vKPNHeUkGsbhgZADkTFZJvarNgA5",
  "key8": "4Jz3YYVCJKkx6NowrLak7fgWV4XkLUZ93NVK72K1oHdkcQ33qhGwnPcUZPkPaRBYq6xHJzZvQzKqpo7f2EBfdDrM",
  "key9": "5JYiVWm5pgpWwDAhVUbbwyfndcqya1pWYZr3ivE3pAB5ZwWd9XgC6m8DBXRmHywAUS2J9pX93jxXgXViwJghHaPV",
  "key10": "H3q6L5HAHfJ8pBNHaU4sSZYKVc7FKo9CGsFK8JQmsYYLu6yJsDYMUzMFU2hWFHARJc53dF8KRWJZtqKwazmwyD2",
  "key11": "3834w6ck8e5jecivJvTTJCvTTBYnSzasd1QpauQNeAEMUFhUhKkuk8VMYLvA73qGrybnGGbtTBWwJUt8aJw13f5h",
  "key12": "4DciHQCdQyxzjsioRrmmvFu8cysuMHoYSD4sMLaqtkLrjVzH5dmWa78DHezd6pHfdqX8pc3XpGrMnRrrnGwffUH4",
  "key13": "2ZLULZ9bMjvCjJzuhA4afffXWNKaTrx3RecR8h4jTunFtHVGXZspmxrGocDU6DJffktG6h3UWr2yXo5CtPhTASxS",
  "key14": "3KpbSbsZV2T2z1qYu6cZQUjKFpBx9sJPCpf3MTPkh3VdphVdmfMYf8YZMqwyc2oXNKHxqFmtgxFXWaMHcPkVL6Gp",
  "key15": "4Tk3KPg2dLRrTL8zTYzhegz1NDjCWFtFUha6AfSf2ZBASYtkqmGoE874gxnZFFRLjvGPL7CJ7mzqHmVaCZR7yEAs",
  "key16": "3K3AT3z1vueT5nxNHrgTqRmUbfxoomPN1QCw9i2qBc6LPZ1QKLo6gNiBtfbD5x4nWsuwEd5GtLPSZczLsqn2fjjg",
  "key17": "3PAgrcRwmsvNR57ReoMfyxL39KQDwDPJs2j7MoP8xVdAaTYcJ734kspezViRWS4E6bahPg4EzS3i2BYowY9xTTN9",
  "key18": "2MoVXkJBnD3TBNnxsH5Xa8e4ogsGnHXsP39CKjWa4UtM9dbu11dPyh5u1RiofVeck86NRdF7YGtf9GrVgThZeDYq",
  "key19": "RgD2eqkWmMxaLxuaa8Z5JDewriUd9kmdJufejU2L9nGaCWjf1AjEtNVqQfoBuZ2AATaHX861ZZwCMzndjbs8JL6",
  "key20": "5ME5MaRLS7qa37MqpibJdxfF49rx3r9du9MaHbXANk9tfoGWuGfVHrC238VvtULnT2hXdpDa1Vstvd2io2EWCyuF",
  "key21": "61JyemCggJ5pqs2Mpk74AT7s2szK2GoVkUfUCJWQwqnpACDcmwecedMxq37DVTeEocTWG2UKViZrMhUdFFnxXtRu",
  "key22": "5b37nbsGu7w66iYiX5qQ7KSPfUHgiigChaYKGkDpNAVDMmDzLQ5R1ZFHarN3CTH8KueWgt2m8ghWL4X7unRkEnUo",
  "key23": "4NC2qQ15SJYvgAdq3foB7yzzHRK2VmXUyshcEfe69ekcxZ5Sthi2b2HnocmEKoRqQHD7r6GTgcrQih3BXRxgnnyB",
  "key24": "5rFEUJ6ow2gLqDS3k8CtYMrmKsMo6XEDpY1gkjcpKnG4aHJs6SoFvq6JN8BVwoffHRgzW1fLQg5sYynReyMZaCww",
  "key25": "2TVWhSao4kLQE7vkyYYXXEGQyiNX9zzTiZqXd5a6Yj75uu6n8sZB1PfUYBivwPvTz29LHF1AGRiFgZypGDEpXnGS",
  "key26": "2W6Ju5enmWqHmpuC6QwG2kNdAMtkzdHnxipEUJirLxUwnns4dPDd2Jz7zB7LrTAkF5mrYiBd5smDZKfFuUSQAhLR",
  "key27": "311nU4eoYMiVMfwo1DKXfYFKcRYDMDsou4W5TtbZ9XTg3Bn4e7zanSRPeeSM6jpkj9ZJqMGGnBpVH7DDk2KoQ6gc",
  "key28": "sgnLcKPee4jeUgVXT9jVn5uQFCWJRoiiR6fm9uT8aw53b61QtsnsBbNKUB9ccJqgvp28NsE2jGpwJ3ESSBPX1u6",
  "key29": "3dYreoWGDM9WxAyALYj2v9rnhgXZ27F2N3XNRHVx3V2NUHHK3XJMvGHk3tvJhJisxLKC38HrGyrdpiy6kp2P7G2F",
  "key30": "ZcgT8HmAHwpVfrCkP7hnGVFdS9civWyqZFnQeSSrvzJK2uzaSPb22tzE85t6oyMWLV7o63iCCZBSVhMHWoZ6C26",
  "key31": "4n33WAzc2xyaYjEh6ASWf9Mq1bDdNNHbS85g8Uva3uKsJCGEcZcmdMi7BpLRsFJdDJVSYjyRQ621CXNXkga6VPDf",
  "key32": "f3ksz3yPXqzc1RNUcKz5a7LeFFY2iYqQe7RDNw6jGH4N3VwEDzeJxX21ezP56nc4rzQLqbtdgosPV58M9zUcA3r",
  "key33": "84pc56NdXnVaMZ9wDqvG7CkWsk6kRTVDJUj4QXu4YyrB8S7RfwFj7zW6SDgxSTKDAHmhcs3maALaCeq4MtUJj8v",
  "key34": "4SE4bD2tPZ3Ttgtc8m3yuY3LmvwowoWRye2aj8muZ8rfEEAinV8taD2abfHNMy72SCQWAEqbbXjDnGFFtKZdMSYW",
  "key35": "49Un1Dh4fnNxnbV3UtbfpR47YFLokFpT9cEHGBtWXvSfCBxBYLoPMK5EMceseismzFmfQU9EXyKg3t9jVT2R7eLv",
  "key36": "4XYGUcfavJbAAEfCHJM82au452LP883ZB1gWfGT8sdNS5sXZ16zrsRVM27aAgJR8setYKCTV4L8fEJzGqvMwhB7a",
  "key37": "5aT3UtLRKwqCajseQT5yW1oqGYxfNsyhxb2v4tPgMzWLAxj3wXUYQHVYT38cL1i4oo3MGmpa6MaixamTatbBZ1gG",
  "key38": "545fjHVmSCQsLFz9AYyPDtGFs6HtZhhbAWQqp5pArvWhALGDvpytTHcUBHbUwPLMDaLY5YjGMrYmjyUivmk8GNSW",
  "key39": "2b1vYzLGNXnmTWfdia21VduBk8toL1e2bWHMV3QxmNewJfmxwR2TkoJjv7kP7UsK8YhALXhurQTocsQeLbdDSUcn",
  "key40": "3np2Fq12VV6FwGySuu6iEJCViTdbFfLk4nbYVUhMk51EGcmP5tXbL4yvCDH9Bf78okrPJkEjosB2SHhncJP1FLa",
  "key41": "5fjHxzqVcmTn8XaN4BfSChxiHkAFcfFcCU842SeMV3qUsQWo42wKvzLe3Z64EUJto6QA9Nu1wFFR7SuxDTodHV9T",
  "key42": "2psTL7mxE5U3AfeZSWkvY8ggoNvnpwGjjv9vrBhVo5XZAoaLAc3xtEktDbBbWUerkZUD4AH3NGipr18stLfvFLBt"
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
