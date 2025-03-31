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
    "8odQnUJtHbgvDX2EkVrpUWrt7qJG6foVzUuWR41zAacv3RXwdm7UKTdkkckpaFaFP5JxyqnU8TqeBRZtgp1wuXP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g7NgAeCm2T6rzyoSYNdv7TXB4sMukeJsLcJyuvoABFMPuRWKW5XrBALWpL6SEogn897i8QfmCcsGA83fbt49tCq",
  "key1": "3aFgMuGUjL5pgMqTGWXzkmWg2jkVcimx9LuvDzGLMNXCBEmrq7EFnS95jUcycgVUv5HYQg1ukRefwbam42zuBztj",
  "key2": "2LZqtaDFnDW31HCFKb1UC3azsSz52iER1YrRgFG6AqYQ2Ro5kQNcwQbt4Pt3C1KqX2iEHzWtmzQ8V2HEqa9jEnXC",
  "key3": "2T1GD5CJnsYSnt1bpqMFFxorvMynwM5LkK3sxLWvd3uGsJQFGqiMrH9ytH9twBEo9HAzHNgf2EV1h72W8xNeiCGQ",
  "key4": "2eo6qsWG4b1XUtne8o2Yt6ZLXp9P4eXdy6YrrkCpxbYb9ZXFPfZgXoguQQYmbHabdHdVYwnwMMAE9dM3ofCicpCe",
  "key5": "2kESVfoBpjuHRkBiyXfXq9nCDNKJ3GaVqAscn78FS39Y5gUn3U2BsPq3sfLsth8KmGXxJMnT2nX5pDxnrw3oV8bP",
  "key6": "3f8tE4kCCnWn9c9VVx4S8bgPxYsS58WpV5CFqDvtwcvMJGH6gvMSRY5jjn3zdTLGhutKJsRiEvzj5DArwYene54g",
  "key7": "3vYZwWZvWk4pE8AizWmW1wB8tBjc7e8LFDbGgRmWjFWEzRUoATWKBVVr5wNv1v9wwvdSZdgrNqot2yNpN5AZ8T94",
  "key8": "3nfk3Y96bzXkV9xiwQ59kifzzKwJNgGNdVSbym3Pi9qgQjrcWX4tCerZGavg9tCGsMa6HvTWtQMYw1z8uw18tCeL",
  "key9": "2DJbJkdQM75HHy6G2E3htYja8XccXPXu4wfouqSnadj9NBJ5YfXsnWKzEGsvSVXJnMovNcnCBRPpPvBgsteAE1Sk",
  "key10": "3hbEamNjYge7UkjwP9RHwvne7FvUE2roWQ7PcftVhQFd4sdL4tnwdnJ3zpnWhvygWQ8b1k4wwrKV4ABDAP6CgMTf",
  "key11": "2PYzyV1849YR2zepCJxVGh5efHBXrguRXNwq2E2WZvpsYjhZMvbzvQqQn6jSLUdR5weVkPFrnbfZ4VXCz7mK8ot1",
  "key12": "2zhV6ttukSC42MZPn9mAjkGxQUs69HsWXxeAd8Zwjxf7a54j17nryKvqSUJTkizvuiyjDb9ubP5ar3MToVb3h7H3",
  "key13": "63tniEUhRZJumrnRcKkn9GjmZp3bfSu5x4msTT7vm3JuntQVEPAz65ToacVEpkvC31VPQXpyuwY9U8CnPYtjKaL",
  "key14": "5azeJHfG4DAHx8kDuKnPrHTKi9EJAdKbuVHH5hYpzrndSGzd23sVuJnEMmSGm1S2c5ytSqRB9VkqtmqGQY7T1LJM",
  "key15": "4pdTa8V61zdiphQPPHFKNp3TRnwFKJgt6bKxYRYT91gH7cZ9runp3YAyMHHnNpBbFwr8JbvZHHG5atBqQMWDqmEk",
  "key16": "3H22hq7fUzZgnWkC9JzStG6t4ZZKvwtofEy36fSGdY1AnNDwfWXjaKM7mZfhCpa6bgR5GzXg2WgGLt23NGhtwzma",
  "key17": "3VM6rEmYVgmCJor7hyhcDytteT5nrwSXb95efdJBzY3yUrGBtsZdfM8AtqjnpvVS3F64fdQaMvfDnH8mTWPUSemE",
  "key18": "2CWcEvJR8kSYDWNVdqjyRdCcywmunBRjwC95HPMCt6itY52dvK4wr56L2ZQZyRMZkCZ5LZZNdK8uGDGtBjeU62r7",
  "key19": "2ELU3r8VxZ4FePbDvoFnoT5zc5YZaHwtBzk8rNh6dkMn4YFFF4XeST5JvGuQmVSG4SetM5AqgjsgukFxEVZCqF3F",
  "key20": "3Wy8WhfviWfXyMyd4DqP9yzP1oTuSReZKrXCo3XYasFRmXPrb957pozapQszeDzpLqyh8yZ86F7xckoaXCbU5BK4",
  "key21": "BnP15C1DTFejkkwAtCbDpCEYhMmbgsj5C6xAq8tHJRPBpu7CPRx7PwUPiWDnhh9jvFS5odhNo5pfRRwhtVuHBjW",
  "key22": "uKQQrJyWpgTEdvQwXffVz5Kvay3F9y1rd1AYtHYzBBxUayPdNVowEQ4L267ZtJnj7wanAYLwAw5ofYcwCztuhAv",
  "key23": "449btSV8YnwvNG2J28avRh1zP91QiBPM9GL6MycSfZAfj7Q8V4vRhKCsCoKQbSbfp9zx7Q5PNgeu6Tdff54AGFJG",
  "key24": "2QGAhLNR1Q4PdZTbqvGRi9DHK3ktmGfz7rU1xyUCTpoqWJLXozZ2RTAhKUBsrnUHggHyxHbEoxD7GsdX8LfoTvQE",
  "key25": "sLnUPgsVoxkgFRg9uxgkY1mT1o58vod9RcxGELd5NoYvgnLYfrXeHZ2XbUWxbn9Gx9kAV6SPFdrs4JhitM8FvuK",
  "key26": "4rJbE98aPwykCRkJVcKwXZR5Jv9CFtimchvXy2BNQE9a1WKM8VdFxiFqXtqVbV4eERyR5RRMvw6yk9uYgVCHXmLj",
  "key27": "3AVBQgjiQFk9UfKrL3KmMDbC35Lb7zhk3MV2houVs4YodETYYsvUSU2SsLYC9j4MGHySUZs9EfTgYs8zb529GptZ",
  "key28": "2ZN2am9cjUwuywsP8tjihWPo5uPAWMuhfrNn1jCMgLV1z4Chug9L31nGNBJvrNeaSTDQMmEYv6SHy2xhNK28bu4v",
  "key29": "neyAvaigvN82wnXa86EzaCHogQeknNzJz7uet8SW2CVUheKq4UkNxaaJEY4xFUwu9zGs5FydxnQk46aTWbefDor"
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
