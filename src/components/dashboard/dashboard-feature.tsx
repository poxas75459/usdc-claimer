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
    "Dk7r9G6kDKsEjiCKcBp3Qttx4VwYEK8JE1KTTQghnX6748FQbWCyuBPAKuAxLgxbS4geZ11V7MNZwhpzMdtRuag"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yGw1KqigXqhAy8jpwHsjjf7h6io6KPZHVjmzwYNucNRnpSV5mYHc6ygQNcVsLVs3KXGSFHVFZGa7FzzwQHMvpGv",
  "key1": "3UnrsAgtLyAS7Z5qww4QsaDgYVfpbq83EyXYLA4ftdhsCspSaJETjAtgvbkXt4oT8SiV9vJoyXdim1CzCoWvathF",
  "key2": "3CWDpnaFJDa8maxjieBA4TTmgZapJd85QfrsMyMNokPT5A3UM8h1gXQNGoH7cjdbJDHAyi7ikbz9ULb6DBxGT3pE",
  "key3": "31KEW5YTSQi7KNugEDc3zUqy128wxuhy6qQZr8H8e1Fmd6K3oMd6VdYGrHb3cmdgS9Dn8EBQMocQKBvtNKuVPonr",
  "key4": "VWWyed4QrCXy2QhrujWFyozgJZ6CyMJE76QbUYVj2zzk7XWgikzJqnieZPESW7KbL2HxdmT9rRuxoLMJmJGgP3F",
  "key5": "5PwPzNQdC2jPLxms8UgxcjyQiJ8GBhn1b7nR1MWeZzyPSLS8e84d3CXLe64BoAs2h7KnzPVFGwsHTWWQ6ciWCzyC",
  "key6": "MjsA2W9o2EbSjASQkhTu1zwH1SRTugjvHWCp7JMUSMHpRwCb7N5zC9aP7ambbtWoTjVpx2AG9Fi9Gks3R7TbKHq",
  "key7": "2yq2PsKSLY3uyihik2Ks4V87QHHFkGicKCBkKnHmBbjQL7vQn65QM8Ak1sGkCKLQwY2R2iPxQqC1pr4XPwZQueLH",
  "key8": "4ZUGDZHK8FJjk1tpSpP21JbKNbF3j9EkcVmBX4CakEkT8CEP6K8buSHACRVYR12NqcBFUUeScieS7Pf3BFKEY2gt",
  "key9": "7qhNAJ5LH4bzRgeZQXRcPUyMJ2rbFiCyNBkdxvgC7XcwpFinjG54zqXQGyujkBxtc3LrpJmEZVGMmv1LmPNHW8a",
  "key10": "ynMyUx5HVTPzn5T4vxqvcA3Y2RLZ17hXvD5CgBLdqazNVWpM2vkWZpPhgbKjWocD26pLo17vekaTtm7vWzDgQuY",
  "key11": "4zKhHHAW22mDYnLcHTLEc4HhEjSFk3vFz1kpbC2TpjoophHysXxnhyzykmgk14qkgGo3MyLdjyBdw2JDcAV7rnVH",
  "key12": "4tXuzAKxc6AUPDqujSmTvtUqicQdZfmtn7DFyajGPUYrgmFjcGE6mLpsoRGd1SjpJv9iXSt8MMmRhY4zDbe9SPbQ",
  "key13": "4iSbG3C7iWX6GEjmf7oCm5HD7Mr8p3zUdrof3PRD8Ura6KEAo5cAV8xsi1Dew7qqW2hDdutzwdtrHxwTUyeMuULx",
  "key14": "4jBJ3e3Nhyg6M8Yo4xL6WRNSzKjN27sqo25EJF9adTvwgeTx2noi32V8RbhHwouh2A9916q5uSRPDAQkEWgjbGLW",
  "key15": "5m53f5JXhRpzX8Hu8SpcC7RSGaY5LFifuJJ1k176YvHboTyfSz56S5GNpuyXyYoKfeBxdzYA6FACMq1YEcbusXDi",
  "key16": "3hq7Pzynyd6aLKiMvjmStGNUED4igE7TMuVKQvYCWvKQBEdMXqkrLDX2FjjiMf8hYD8jW5HCF8oC5154rNhQrMhp",
  "key17": "2vfoqvqfu5DnNp6KbNKRoedAM2T4Se2reyByvj9Az7JkJqWExGvrNuagLPcvM3uSwLbrVzuxEm9peCWxQz45JDmT",
  "key18": "599jm7pwzjpySj746dyZBp5rkAWAVgs7qKyjvvFsNfoeoLJ7JBEvvSBPA4sURFGD9PAp39ebX9ofd1WrN1Ctx6WU",
  "key19": "5MceFcfDyNEBenVRr7KZL2Uhnps8HxVgCXnsTgdAA9nPo1sszUvsKn5h4Az3vEfkFXACx5tKJsY3PQKvb8KfqYQD",
  "key20": "39s7QTPBXSyuQbPcGVbRX2po4FtAB2Bb4JyoHkcEd6gMPo7FFCG1pj6oTT23SNPe2wxuCg5FHZihdxBvHUBFHX5s",
  "key21": "31VcaoMznf6QKxBfp9nQSJVBHAY6A4fgZDZndE5ZNmjMyAKkQd6iRLkoj2moTAQeY2SYmfmhC626RRgPAz4Nkk8d",
  "key22": "2T2YMNbQgFDZoVksKsyaw62DCTwLGQfHZgULfkM34VQxskmmMduzTKT12yKp3ZJyKFSbqfUusd62vFJc4oGoyKwh",
  "key23": "4u5YnoX72hLK44HcFHwyrArPLcQFKKSgakqGSSVekVcowWTwP8HCdtj46TjBLUTsaLN6JvY3pvsd4TSiMsSKTnn",
  "key24": "2sghYBBkky5ANTFimZZS8RXcEbco722fDbzgYj8vG242DVHJ3A5XRqh9qLGpjAdyzdRcyha9sjQyZSfYDrMHi5Nd",
  "key25": "4y7YWKbRjLp6joDnWmvdhkhetYLzWswSrqqTVbPmALhe8ZuepU8sbxsujCvT4EbRERUUWYoik9kbaDyKNAnBXXC5",
  "key26": "5JwL5r6DLHaqYcUuh2ZyKMd33EK9wj1AkAyVLytCvrRU9dohmjVkN58ENq6hNGimzzSxiRGFtrjNnJ9grnVKfT5M",
  "key27": "3AYSvJzmT9BVMVA3XdFcY5RT2Wn5C6hd8N7ffq4vxdMvySTdtrpa6J718AeCnkTfmnAwnnfLkCBU8BvadJnUpht1",
  "key28": "5q8a7yRaSAywjZc65u7HGF7d5SyUbeLtMM2RqWZacrU7B6YDn5mh7jsyo1jsEi6mBF13LVWE85JvVm7acBEjezJf",
  "key29": "351bEBfKUEy1veH4jhbnHPuHexF5KDuwzMe2tX7VPbbYFuNdcoQ3dkEgM9KvzBBaUkRFDwtsAN5kRLYCdBiyWVTk"
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
