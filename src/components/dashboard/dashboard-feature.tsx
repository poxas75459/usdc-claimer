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
    "3R3hZoAnrb1NDuUhnAuEpHdhYe5xQrfYnbqs98m5UBV7s8KRJMsa5Lp2vyad5ntQtbk7Usx5eELETnaV3G9NGYhE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "smxXWNzvbR9QNt56VLQbCCv14j9xZ3M87Ko9Z3LnXC5foXuUGc14aRgCsaGZzQ1X5YGTjw7D3dWLjeXNtTGrGyL",
  "key1": "4eCXmPrRJNZRW7b75yX1zQ36sjuRveAHDeX57Dh7pWBasYG43b4M9jzTod1jJJzMMXUUUmuyfCahwiHkULtPrEwA",
  "key2": "56ov77K7gLVsPcBHPVdsXcBRhthAwNcTzoCVWpkLhtM8XBtxsmzaKepSxsBBSFLZNGQjLpubRswq8Kby94ubt5fE",
  "key3": "3zpC3tC3WDBMiVCaXDAkZfZRmwhUCAsKaiHzc614ySaYRZ8Q6yayPrunqU4BEjmb8tPa98AQD6GDgJSqHuFVEBa",
  "key4": "3zSKy8MYAGykvwDQwMAG8ASwoq3JiDXoAhCWMZhnHwoNKEjgEJ8jhU8fs9kLmAWJH4G8pyn9xScTJzBT2cS74w8V",
  "key5": "5gnVqQL8y8rBHRxRpAZ5NvCk7J13CDFNva74eM6X7hXRB8JyX8jZnBLZYv9K6hpcbWXxTkXozSe7hewryVdy4Ljo",
  "key6": "ktfkpHZPXeudcNuVScT7BZY3Wt8vPoJmrLB6a942wkMxrqjSMhpTtS6czkMb3YmkXwPiseUv6FRyVCKMn51HWqk",
  "key7": "3a1g44YnQXpk5pxSMLseK2jgLThojqPVUATZ66wyS67yEXkS2ZmQVjKzeiP9A7RkuBYLgbQSaQcZqpt4KCA4JgeE",
  "key8": "5x5KUDBaGFMB57AcvnMrEeR2zygB1Yn5B8JnfJfLu3E46juYK2J4JZYUGoCdq6Mb1fZiCEqZWkb7UwZX66aiDV4y",
  "key9": "3vvincBBj3t3Ufj4brdSJQfjAykj3oAxeTRxMQSpMwKHhhyhoDnfqdsyYF9CDaKM3wnQE5iDoVrBUCpix7okDJwh",
  "key10": "55sEjMRhhdZAWMLpDux9fWVT77frxZQgXD9PTpY5DW7TjbmpggimngToW9zh11G7mq2zUgrCogpCyWyDcCihB8tR",
  "key11": "44zkSnGuRnfXy9zH4x19RXvbTrRb5Gaj2AbZuJmJq4cY9pHC4o6Vunt77LwV8F2S7geAZ33PTHcrQ5cQ7RRfRaUJ",
  "key12": "2jFqnBWojYs9Nw9KrVQbYnWfJAfymrHNQJK6yD3jAqeY1akTyRMUc15YpwPDpa3GsmDaw5pJ7S1e8K4H62TJVtPA",
  "key13": "23RFYmP1NpKZQHzo6UVB5Lb5GKvcgTtMneRyBmsCyQ78EpbbXEBn2aJZVjfoBv6pM9crbSi6wAEcdhcBatmvBX8q",
  "key14": "3yQuMNcSRd1yC5PZmuBvQm6EA8FmtDLyrwikCnc9kLui5rBxq5bo4YH8bUeeox4DHchEumEBE3h7QRSpnKh3g9qf",
  "key15": "2xCFyYJy8HPXncsrwGhzbdUozvYoAPmWqriMz71d55aqsRc8b84MtFuqc1Ar6kGrqSfn63RXLBSaypAdznCHcvpZ",
  "key16": "3aZQA433s6Yjsvyz58GRn4fhgsxkkhTQCJBh9s7866LigEaEzgpCq82E3bwmUzDGgfhBkDpMfJdMWbtJrfW2Zmp8",
  "key17": "54shwQFbMFKfpFvmc36EkEohQ6E4R38JYzypkZQ16KGLvoQnwucco2wpAAp7chP7D5wLWvCxthf6DtvqVoHcrzYv",
  "key18": "29XexKugdPN4LG6SyA18VxUiHAHida45zPthPoAdXjTJvHicW78aHusNoiT83XPncHwC1UMgbNGrb69gRNKVaLsw",
  "key19": "5zeVFet25DJoo888yeeeFTDb5SQUCNpkzkPV6nrboGnVhBQWP2n5wntgKjEt2aVMnPnXKtYjHgyYx72c2GqCcBCu",
  "key20": "ZKDw69tFMGC8eFjfk5zNh6sU3Ld9Jgc8n8fokyMZ4D4m7uhvpnnKVNv2GjzfptwGWLe7PXp9DpzxHK8E8Wgp53N",
  "key21": "24Y2m78HMy5xbZAsmGnEbQxVQZzDcqjnZnwfcUTMWJicSTZxXvFZyvAusLnK3YjranPxAq7LFzYeYuAMLNcbgbLA",
  "key22": "671nVfcSs1yEuyj5WuRjL8crRNbtu1r1kHSbdXGaDG1qhm59p5FCkdQ71qZEvQMfyhRNevfTTFZ44MzVHpcxkLiK",
  "key23": "2VZSZpyRMr4K76kV9ssTFLrZWoYNjxe3SBwk8Yxx9wGTs248kBCAQTGiN9Y6bZxr477WdaEHa1ybQQdUWxjVZV3f",
  "key24": "3taLycukHbjgRy4xcfhG6rRbH4NQ93dn8S3ChzjiyrPYAAaU9ToFG1knaZfng9oh516o5fiBsB8cX7mcVmqLXssF",
  "key25": "2T2TiYdfxbeuM5YZApQQ5yzbrosqxcEbAetXVetn2uzmTMZSYH5yyrMUpYfvbRxpPdAJRdFY55ue6EEnVbzZs1cr",
  "key26": "JPtLrJpLXU7MER7aSbtHUQ6fvLu7dLZyTvVJoPaXMH7Nfxqr68r6542W1AEJFhLFh1Lk4MvvFZ4f7h2P9B1BXdu"
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
