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
    "5zyev2s92SN422hnWWB6ENJP1Qg4MY8ymKeGVFapqrZojDmNMJz2BhrvNEGSVeNCcWZXRiHjvt9LxzYTR1Jw9vtZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55pGx5992gQDYha6vTzrYdgE7by3BscHzGkXvg6oEGABPB21GVwZrqM43kn7MisTSmqFADv8pjMDF9UtPCkvAt74",
  "key1": "5HULCU6W3hj1BafmeiJwHQa6A4QL9USJegRGtPnTg5KKNNhe1GCGFfcEHS1az6AwGbTyabZShQiR5n9TXq9zFfm2",
  "key2": "4wxgFzScT1B6GHoQzzNrprtnfGhwJp87uQ1k3yVw5PRz8XyiTo2BapbKznHCYbT9DTbatsTWwtNC3CvP93PG9kEY",
  "key3": "3ECkh8VpCtemgU9bv4wseRJdS5oGkRTsYYesXJPTC7b9VBK5Qk4Z6wWcPrQ1i9KPG24gyMF7W12ZRramwkviDuKv",
  "key4": "4BmkNZbsj9vx5vzTVGCYtzLnahPWBDpoJaEPsQvtjZ5LHKo5zvTJfqtEWtgSHvbGnD4p2uhpNdV3LH1wmLymwASQ",
  "key5": "347UdS2cbnFZ98tzS95xPcqky7NcAGhFLBbcqaUYryg5ddUZS98eRHJkvA16n9jZimWP4ZzQhXPTbQWeWA2SvPFB",
  "key6": "3tdQ7rw2d8XmfAiEoNVoSWukZG1y3YtUE7hoCL3fLxcK58tSm3gbznKn2n2zM1bQyGozfU1ZCCUbcJ4ThJgP5ZQx",
  "key7": "3McmLf7F5mdsxAsgzakNpbiCj8jUz5rwDaZFYLvSd8tjCT4mMJdTx5nKyCniCJTeuYakfwzRbL9trDZcLVsMcHU9",
  "key8": "36TABKtD84EhX6tgr9L1TH6x2N7dwShEEjzRmtTj4ZPCdxBE3kGn7LgyKCLn1e4qsniZnwZTBZtWnV2EQqYsQPQY",
  "key9": "RzSg6LuMVAkionFBZePXNawh4P12YPzMBXVxENuj1hsUyPEtuC84TUUm45GNJh8WfJoiGTZHDKAu5Ttaropk28D",
  "key10": "347fKegVC2b469LK1m4F927SCYJyUoUGpwdfQZSxEo2jxEk2LkCCUDi6CmQtYqfEcfXiq4LFUnEuYV8PEyRihb6p",
  "key11": "3mkfKwkkuE2tbc8Bjs2E32bFXb7q4ogHJCxAaRe3UMi4D7RiMV2U415rC7EopfkAhEVSHDZEJ5eNms11JeyAJbGu",
  "key12": "3qfZGDFkr7HS4dZHBN2gAjugpjA4uuFnvfXxMLwwhWFDqSNkyvzkxsGhQ69B1C6pm1HC2D8PtRQce4XqNGiVJxjY",
  "key13": "4TsTfWn7Bd6uSTuzPbtHDxBNKTNwtywJyBLEHynchf6q6bgjGED96Fda9pSK3Cgur1bWs9ibzqHW6SL9XByqVgDa",
  "key14": "3dsSkV5cbQnKrU5SAWt4329DPb5YSq3K4WnS32zRUbsLpevRevjqGZCkGGcCdKyEe2GPQTXa4AvuuHhHvRu1UMBC",
  "key15": "4YMTG3XacRCBduupEFbq8qYPjwxighoJb4a64YdxFs2asYA3KgpEYhGfrSgPk6wf9GRPHTGpxck5JkYFSkHPvgzy",
  "key16": "2eoyXnN3yWReH78YGjkLRgarz3bL1NoPtjmyYN2dX7HxPzGhffXY4rsUJwKxwVd4rmXkP5QDqdVDoW7XbdTjUd2D",
  "key17": "2kZWgxQzfAd9hT8n54fKT6P9fjjHPNkAcCoCRshVm4X5MPUYXyDHWZYvrypXPUdbMT75a16xMQBjzDBYfdy3CJ6m",
  "key18": "2VBXXjp7vX6iYuVwW9QeymQwZdpmSDrHNoj91EPntp4NoyrkUVzPwH2jirTgK5ZS9nszgeqX1W3x4ELMwUAhRE8c",
  "key19": "2p1Rb8fsYisFft5gZ6yzmhqHmMiLUXmJeNwH5G4LrUeJrqMjWm9AHHb8to4h8gPa4tiM4SYU88Fuvo58V7rNihBz",
  "key20": "4Kdndne2SmMkaTMr2X2NqJpvWMSHbdLGMRxWsdZ1nVXiK1HpvxanfbrnCeyC5J2kDMG2Jkd4J5Vx26CKBgmyEeuS",
  "key21": "2o9xbSYVi6MrLH6xUGzpt4R7VXSgJoqreDRFDV8AqNKAngsAiUUAHvvsNhEDiDPH3AcrRSZCHqSHunKGrhTwcXZs",
  "key22": "4rJfCUGp8fWxBrZb1v8j2X8zRukPB85wFq6XczKPkSy3teKHYrYDk53ZLgMrpvjC4wV6pAvwzbTWr6CxewPgqZGT",
  "key23": "5MHZWwwcZonL8qoiS1MUdeWAa5GFeKB2DgP53BtXRHvTfp4SV5wc4PU9YQui1sMRwPisVRvitgP8STjiTMs2VLQr",
  "key24": "2Sx4owhczedbNFSmeLc33ZVmym8yZC9r6fjrUC4nE5UpcH8f1heMjsgC5mT18KN2ZcQfThTUAMA2YPpPox2276HM",
  "key25": "5qyzZQWzQnd4YZLWDtj4upVAy4gkJXXTcWjoPndmfPCdReeq76Bd9EvpFKHLnQbgXX6ag5prRXTHdPzx3pDcW7Uk",
  "key26": "29Bg6M8Cg5YazCP9ZVdbAwXVMZvE3X7ufEm6zWbExU3Ti6JCLp8ky73LBLYMbUBoMNXzUVvNSyfbY1BsHFfrKH3E",
  "key27": "5uT9c79pHn9CNmB9eo5RZk9odwPiNp4n1pj3iQReUkLa5yexCzN9ZS6eYXLNKHn6DNbiY2th8xfostFkksNSvVhf",
  "key28": "5XDgEFus7NK62WvjjK72ACLEeXqb3ztPFtXBmqiUntRqrw5mehpycuupeqhDu5ic3gtRXGUjGK1bXafk1VGisGYr",
  "key29": "5hzBwWbgcaWGmCaxL3Mshw18d5s97QujtH34VZWBTy8Gv5H9r8gHGpj7MGQfKS1eUJU1XhzP9FZSFDNFTQGRZvrk",
  "key30": "nW79ib3Y1R4hA8JkFcF9a9t5Kg6pEE8eKszEmJZahwtm9mxA6eAsdwjQHNZLCmbaKmzh7rwFHRBdvsmM4aVjo7h",
  "key31": "5UhG1QLaWxEKiedycT6seX2fnmrkgcQU4dsUDerVcVUj65ADvXqg5cK85j8szu1smeha2LAsG8eUAEbVjBaQSq27",
  "key32": "2yWSYi5dgzM9b5YWRiuiNoxcDE5eVEq4WQSNbPnPY3RS91GtcytkkuPdDum1qfqyBxTQXRPXQTSdy4491pD1zxZr",
  "key33": "5J8fNykfxCZ9UjbzBnHCe2YKkg2T8n6E3hC26JiwLttX8eCAiSXYcUvffzfDFVsv6DoW9wwBXQZaa3dnrd9pwwYz",
  "key34": "5K8vuRoDuwrEAUhkA6oXdqVPfUaGNrYpi1stmpjfyhUr9BPpEoVAUA3nLgCpzEB56EwWqqt3mFKPnbQegou8EZn6",
  "key35": "2tx2fV98gFc8AyP5vFHsKFQ4SgFeZv5gLe7u1dpAmLufd9Cu1dUbqssKzcxaobDTwUwP4x84b6vf7AaaWhKs5KWx",
  "key36": "26m8LwUYfoD28VzH44AnZK6oMhzq6YmZXv39Dg3ccVFD3QvnTgixp1srnEJvrEeQt7fJQoXcpbHrLLBUAq8Ntze7",
  "key37": "5zVkEV1SU66ywxmujCB423BE7h4N8fqC759BooHL7fBHjMwe6WuextXVs2q8GHA66xmnbEBQK1zBTbjtfGuNQBo2",
  "key38": "31kLFUTR8NJadV3J4iHkgxuAxfKEauZpFzVaosSSubZb5icnv8Z8iLFmKjfkc6qfakyLoTqYeeiQVAYZoAqZYYDo",
  "key39": "3hK9FFq7VzLacz6kEVEmSQ6GGukmDMdr8mrhcRBQgKskUkYeHp7RFayhVUQS1TZV5K43jZ7TK2D9VoWwqkMRB5MM"
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
