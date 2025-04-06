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
    "2TLuy3XbgHkpcEZtWPNB7Q6vq8xG311NMkvTFhpZkoh95nbS6QWyFwCXHqmcuQCp89aJonJZbKyUpCW7yXrjnduD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nBMiZ5k8TucBGjC1oFDttQAjykYBoU6AGRRYMBHD8rpGrdgCnJQHGhGVKRGP3YYVDtcBXShPGpwLJr7SHoqA3eZ",
  "key1": "4qwg7BYG63to8vTiGj3gpz3r5A8bishXyiLKgaa4neuD9MJvFCyn5UcjDnE7Vb1hH3g6i5d6rdnioBKTR8rGHAs8",
  "key2": "44iqpiqaTFH5FYszVNDuRRcrFgQ7SnrG8dKmpbqmGrRmAm4WTDLmB6UzWM175Zzf12P7RCnjTRaCdqktsbXXKfrc",
  "key3": "2g5Beq6jYEwS19cmMS96UdQeqzwzrN4ZMsw2DDG3EVhqDLfFuqQZhGWFsx7KRfikvAhoV1hdQn6RvAyNwB5QQenL",
  "key4": "dgGi7y4BcpEVVewFtSdZBz9XLQFwygixhhHBdWadDXjcFarw9T2VCbJYZEtBE8XX6xTEohZNBSqvk8xy9sAmLe1",
  "key5": "2fKPzK7StXwX5moJ2QfD8JzbPUh6t1zysbjFAFJA5bN1QzpAm7MaJcKQbWQuZUurnrGUPrcG9uYJX4rY1baDvPd2",
  "key6": "48weJWfiuxEC1Ck6kvhpNa5Vy9dQeXrYGfU2u5P2anWM4MixXAsdnbbRuegyFdNNypcejucDR6BvhCf8nFTnqvYX",
  "key7": "5RCe8bZwtGM3qCW4gMw7ZsU99KnzQZLFxXTtE9XtX6xCSQmis9tZVHtdDZrib8HoZ43LKX4ULspnpJXfcaTbXN9a",
  "key8": "4XhR1c7hASK7YyxGY9aAU9tP5yCn5T7PzdyLYdYBWwfCifHCpxeWdHJ6W55QosxVyy9jCdoEyDdYgwwuFNnh4Vwk",
  "key9": "4BfL2CnbDGbeS3n6vuQn7WL87mdeXBAftvEXuPpj8TWkpKv5t1bnU7Vd19Jcr5bdhHS4GAAm4WHfQW4hqNnV2K76",
  "key10": "cEeZCz2Uih5KrLXXkRe6A1bVuiNSyuv3J9hUphPASJAJCQZzczLyPUasyNqifBgFLf49p4G29DmkqMWznrZsFuL",
  "key11": "5zrbp4UaZCePYP2qdGkbxfXPVnNEKa2DEE3udvDDvqVHBvKmYqe7JsRCgayKLueKR9dUuPGZwB9WmEJz7FdtdV73",
  "key12": "4fGivWwVTq9rNVpWuAfiu3dX3sHPJucwpd8SsuQqk9qV6fp2qWK3xrvDDCpUgUo1wWPYn1B4HtFVQYc3cxze5kqL",
  "key13": "2aB9DVLJuFMb4qzVA1A9vU3uwSMVVvojxoL42ye4Cu9dJGeKDgV57FaeB2EfNnqEbdBiqLViDgrprrb9q9iB2apH",
  "key14": "2wt7PgfTwVeo1yxHdc3NzuuXtZQhWxvFYh7Rxu21JdLAgoQo4xjfLK6N4y7aEdJeXjf4C54EUZGtzQg6dGhs3QpK",
  "key15": "dMZGNg6meVPRoooM8s17DMWkHjBZDub7VfnzPwBhQDuHf5VuCLWmqVSvDzfY8CsSqE5ttVBJg3deRhbEfM7jEtJ",
  "key16": "599jPttr45UEcqFC6YWJuzhTipAxcQSoHaayPSCLnBLfVB56ich4DZv9X7vNRCWmeVhhiMVgR3AYW1PSBVHSw2wL",
  "key17": "27AYoSoNf3JzHVjqzDh5QCVh9cWZtrerQonQkCExgyqgDGnBx5E9msja11dJR519W8Hn9UjRdkXxbcgUn7KVdLbb",
  "key18": "4rJ4Z1d6uRHuDCfmBLmV2HfuwYTHPz6xR4NEap1UU3o3uWav8WyPvuB18sboZvTabDQaWF851qmDJ7uoMc36WAqK",
  "key19": "5fq2bEwHMZvMyn4EdRT3sgkFmrWJWC6RjzrbppRMouemZWJrtZ1t7GVERGZShXr644yy8yg9zsj82v1EZgamkpRa",
  "key20": "2etDV1pc8LWzSBx6Di3sjwYNvjG7fkvRbaU2XkhGyarqcNAAfUkRsDC6cSNifQQp7qDG2psLjYMbXgepKoKH8gnE",
  "key21": "4n4Rdy2yQU8Pdwkv8jLjnJkx6DmReVjXSekEpqo61dvuJss5tbytLPLM1nSrb4mN84RYREek15Dcvdf28wyYoiGZ",
  "key22": "4jT1kworwmvKr59CJ5nC3X84V2NHt77rNy369gdGruemREMRkv9EWhXdD14gwV5NYV4pzJ6W1cM3KJNjyRV7NbW2",
  "key23": "2swAKyxpAFWABqEqUNZfg8hqxUg6r3tAqGHbGbwBXjjMbjxvSzLZxftNfDR525FVXz56HV2PtQjzrduKRqpebAEu",
  "key24": "rG3fcWbVSKRSTfN5CTjow5smVqatSeshGdmAg5s9v5ndsWRcfFew9dyNzewF8JEX9ZLe1x8yA3tt1GubdrhxJ6A",
  "key25": "36kpNicfQMnwEMsostFcVuC6zi1EJyBsxWpqUopD8j31nXzXxeyBGAhibHG52Yo8Q9t7swiXhsMYWVxSbcY7m7XB",
  "key26": "ipMjLt5pCwxGcdtCYVFQZttG7eXb9LJfa86Uah4LU3zFXzR3QNG4ViPMpMRKrsTAy1cqiZtaxwMgCTA9oAWRGEd",
  "key27": "5eAmbLxYMAW2b35D5SLJB7GoH1qCQ9jm2HRs7uXUUkuu5ZBtBzdJMNhQi5dvbH2WsrMbSBXhkCU25C35Uni4Z3Ld",
  "key28": "4gzr59HguKbyNmf3bY23ePMKFrWoPZd2f9FJsubZFpVYwgJDeux2HCeWXTvxweipvqMthPvcMERQ4S9LGo6vHqDD",
  "key29": "351t1dM2L9ghX2mF5jLS6A9ctytMFcyx6Tn1Km9rvZM7XgdD656w7s7yi4M2WfKxUbdfJim8noiMC6aGYFbAQRTq",
  "key30": "5dpRqkhFWo5sWrmXYXa6JWssfCfyj9wMxuNvmkwdMRqt57co6y2YDVWUZx8qPUunJinTk4TECuQRwrjNdJLRXj7W",
  "key31": "54rbesLrhCxNyYSRyNrwDd9CHZjQMydNFLkN1C8663PDjwXUKE7LFUrsZGCYXnrGmdkbwmFXbQZftrfpvrtvVsqo",
  "key32": "4b15GU5EmiYX252ttH718DkcijZavbzfePj7QMz6qGQx1FzZ6DhZA47tbgXsxw5UUdwKpuiizUBFR9WXd45cqZe",
  "key33": "4kryURC6B2ZJ4pPiUC8kDbhQwHC4CX7N1mEqugYza7vNkkUWeKsPVDC6rKVDextLMF2ZUtiLqzasoMGtahVmAimN",
  "key34": "5NQaACSw6YFch4kG89kSMUTFsGNxTUBCxbRvoeMpWVeuFMF8BzeYRygeUwNEbTqXSdj1HH1KojkcRkfbnfQNxSXh",
  "key35": "v5QnahzMFn8PK29a7jAZT81vpTtgt7nERyd1bQLH3UdUApdL2bYzYn9zfTkGrNPHD9r3wzxRQHdJ1A69UaBTTTd",
  "key36": "3Q6EDyeYT5eBiAemfcEuUjUVDmC71KAhwr1UwaNmgQrMioFDgYPvFT9Hkn155rVN7V81Wx8ARD4pGJ6xeDMvibw8",
  "key37": "5MFSzupyCYkNEAaZoJ4HYAmM5T593RGKkcivhxqPwreMiogU1MJ9SGv8tD7435tCVnMgvhAddms1N83k6bBM5FHL",
  "key38": "S3WzZ3Ruasejf7QfpYLfYBi57UkaaQzxYhhaL6qayTRd84RQcLB876yqgDdkV2FMJUnxNTfF6cLv9PNXJkht3Cb",
  "key39": "3vi3yJiF9T8HhbhzLpRx2K8Ao9q32sM8oR46BTC9y9nTbQM2AeAxLVJMJHNPSGxUZbWYWskoR7UfnJgt8qJy51nz",
  "key40": "31DK4T1qSRv2Y4mvXvTniNC7SbdFQyeSQ1KTsHnbv8vrkqHzZxf2XrQqwGxcfeeJs6jftDrkRNPddFViFG6rGb6R",
  "key41": "53jQhVeWmQzGnifJTrSLjkR1nNz1VymhQ6QJKbEJeFLZd6yCibRsV1MGStGzheJworqX3vxyJaSVvBZjWxr21VmW",
  "key42": "2R5kmgTMd2R12751Bgj5J5AfMn3kwZdgB6pKnHTQGrKuwfjf6GxF6xftKVNtsjkmup12RvhejWqXkhzWq4eXm2st"
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
