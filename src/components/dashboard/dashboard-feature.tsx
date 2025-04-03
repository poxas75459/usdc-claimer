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
    "TKpE4yNus4TwvtH1UzFtDHvStbAifeXfrukjaxKxbGzMEhq1TaRs62LRkUp9n13sdkdnk6imcAqtQgB2oqoX5Eu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CsCk4CP5fYqDDPumBmY5tSZo1wSJoHdy9BKnS1z2JCpHa8ycHhC816aHznWYyf1AU8gWdjerh28oA88E2QwajbY",
  "key1": "4rjwSpSMaz2fHewhBYG6FcMWbLiunPYkNu5gYUT4Nr7vT5tmC4Tep2ygLrD5wCypi1QxJMBTFx3STtWt6ongJu2e",
  "key2": "4wu55uHvzoMbpeUHUC8ZJdHKsMGUJ8L795NXgPfzA7vCro4crG5rkhqakfUrmLnthnVdnRuESUUtsTtuckaz4iuE",
  "key3": "4njBJsCkNgQax5QrcVcUWr852kL7nQk2K35K9wAYifaXqMBBznVFPtKKP9uGij3Gb4rmyqWHswqZ6Fht4yPBDy2R",
  "key4": "3zSYygVTvpMpRtGEYkJT143dS3j8zHXVSSuNuGsH2jweAt7eYEJpxbT65u1XertTLoDUui54wMziDMftMVBfWPKo",
  "key5": "5jf7FGGdcJVKbq9BFjfTNWM9Ss8NiDyi9mF6RWzXd9rcW2x3vnRNmLCuyDhijrNdawQm3rW3JZrQ5Tmg8gMTbueD",
  "key6": "3J9JFGcgdyWpmn4YrJDY7yi3Kkz1fX5oANeQgXetP8Srm3fpDGBH6JCxXFz8iF4tyBWq6Z6DfmXSvdVmXKXJLrcr",
  "key7": "51mJEAk8av2e43VHqPKuYSymVVj2gxjsLswuUAGVt37R11iuBjnSHoLNV8qYc16NF6fFQoVm9PSqboArWrMHmWP7",
  "key8": "2Q8gGCJrpcpUxn2km2p7Gnhg98y6JTLMZqEpxGJk5BLpuZpADTf1D6uaQRKudTvRBHYMmM2ABWL1ZnHM46t166Mf",
  "key9": "2noXY57w8NJTWon5nLbb4cTAtpjE3tM1AgHX8NaSvbfBZDLnSTYn9qftpAi8SpYea4XHBKVWermBdPkx3nDhL2cs",
  "key10": "2gkS5fZRiLNMFY6tJ9JArdjL3XMvveQbmCqecRgcc6hRTuUV1AW2eofddHgsVL3Mj4CWGz3LAagEDfKweuF67aYN",
  "key11": "3NVmoPd3CxhGm8gMWnopFvM7BZLFjBP2Wf7Ho1wZpDL1k5AD2wctZSfSWNGyd7GszXteF6hDBQvHVTECehEQhuoD",
  "key12": "2ign1Wgdmm45g2XW3fMPj8rutbzxNgcry173ZixhvdVNtWQ5HmtHoMjpzSQmR4C2RRHGuvFiyZSa5VbyyhrfmKKX",
  "key13": "3GKZQXcqX7syrC3P85JPBeiE5s92z1tYTujsQbT9zhZcu1TnsWaXgmU5QVoRUBL4AjF5SY5pf9iwGeEpewQ6gRZr",
  "key14": "F7web5GvUcUvG6pg4VE5evZQCLAdjrRQshoTt3ZPST9SrQmkSfsLVwyWea4h8e73RBHuebWv1bjNYXeZu5JCWYC",
  "key15": "4EATHs5Dv9MdDQrTUPb5JDSP9h6QvpTz2Hk8Qk8iMwyu6r1hcRQ8HyzpLPyEJE1hA5cyAFf39keHLyWFNf8fnY56",
  "key16": "4vcftpBfHFAoF8JDjFfrdDa8277hNyM3etzPt1iqtjoMoeDSGsAPo9tYFdvaCbvrx9LhP8iBu35yLqMnCCX6ypWW",
  "key17": "28EMYhWfofu82YbWHoJjHgAi97WqiJrCDRmE13Wh6FCt8LBqyBmFgmZqQdXAPsy9kVtW4SWhY52F5vGdiV6QJ2aE",
  "key18": "9CSx2o4kM6njwmgJbTLM9Xr9D5W52YL87SE8NyThQT9NHoGcPEt8pqr1pNG29CvuyvBEs49tYNuwsBmNUu5Fexr",
  "key19": "5xp8TuhrxhDWP6RdRCh5geLUVj2JKzF8SRyUhodVxFstykA5MB455omYQyRktePs632R9wBiCrH4Fgg2C4uYEUT2",
  "key20": "5nBftCnqZyvdggook6rkanemBDBZrPpENQAmc7eyu6435Cf3EcLFnEqH8CQchjzTfE3Rbx52kJzypCavuUr8PZa6",
  "key21": "aiysX2dwKxB1kEGPrCrD5VNqPvt5ZyY8bpU8LVzxGMjPbSjs6upsaDEbusJRizLZCsC64p89MsZNuhKv9BLxxG9",
  "key22": "5qDjdgjJqx5dFd5zRPQgbaWfmqCutPEHCX2yMEv1usmF8nqdLS3JZenw9X97GxNMjMa3JR6dQAV1VmPBRuKSh5k7",
  "key23": "JcBFyyvKaSiL53MfDLpMwmm4AnTAqieDCQvnuBXQTrGWGxdvX4tUBHwLL2idDQLmEz28jFt9GGjWxJtXrpaTTX5",
  "key24": "5ibZeT8PrsDNR9JBUVuQy14YLMvRfqB1a8Sxjq2HdQZj4Fd8y4hUWV5uJ9muKndi3uN9Yt1e6CMiVRbEJRowM2NZ",
  "key25": "5ZZUtRBJSeQWC6JySrVUovvyY6aCzrcav5B4FUSrUdCY58E2y672xLnSxc3uLbUwioCXGw5bLgiER4QehbyDFLNE",
  "key26": "4yNjdA1KMnnCop7FHJDrY1Tv9SzRcQewTsm2L3Af2HjjuXokarFETBB4WzYYhNby4BYpmHqKx7vq49o3MReb5KEo",
  "key27": "38sURNzn6LRKMEdstAtJxz1UfEVyZR1BVJUwK2BeK1eH1YdJVgQw614K8XKf5dxKNczCJgBKN9qZTnAZ1JEt7Syx",
  "key28": "4gJTgKZkeswL1cNupQWD7TkZGQLKWj96DW2C87zynA7DTudGgpqa9Nha3W7XuRqcbqMGhMVrGsnWQKwntoKZrcgi",
  "key29": "4RpZ96efLiZKYKFD7XNanhdWRTeYbnAYGojhpaoRie1nkra6RsLA4w9dsKs4CqqZmCtpvSKMrEV9MFUGXrnuMkSE",
  "key30": "3G9xiweqfPfbWiT6JKNUsXa3bNgzyPJ3beeMY2yTVtBA67bbb2yfAsDQR2Bd4ZtmE66YjaUeLvKSdU9z28psGqxm",
  "key31": "4HztuF8XECvFJuwXKYUK6yN2YXEcqqspU7ir2uCDFULVyEb3eBB8YCLZhJ8xRZLCCZrxjyuMDfY9t8R7siMjUokY",
  "key32": "4aWU1sqzmSBvYxiABocBToQuzmof11jmr1bcXevGhJf6m6R7KdgtYMA3NLHWympYckM4mhXjHqiVnZT1yjQUpnzM",
  "key33": "4oP6fAtBFGHLWnnzYZtJ5sJ2wsjck1qpcSYf3hb6YEteYFq61MTSXGvfVTrS5tUsHFRatfCa4JrtUvKb8wS5aztW",
  "key34": "eLaWYrZcCwWK1Mp4wx9TYoiv64r78i3ZoKePVcSvTXs25Cet3yZBVFfeaoGikehqK4afsVE5TnCCRdhgWkVGsWM",
  "key35": "4GKB5jKWfuzSLfHmYuN4AbYTnZJxSKrnSoe6uiuKx8EeqLy1zjpqKuDNze2b8meZNwhH6S8MCBsBG6CYHjmc4oFK",
  "key36": "3Q8JyqFWGMRVoKrs193whXFB3YmSBVt2qQXNNuk9KroUA2dosHJqBUCo8UhwfPr3CrquZ7g1bjegFwpC3gE8E6db",
  "key37": "4bUgMaWvn47tp6EURWh6uY2GPXgKyZEGTpwccVWcQhts4mpss4e1M2zc7cnACdggA7UkCgvMGk5VTC8sKMrnfBd8",
  "key38": "5Uh49htMxV6gEm44FCvxqAFQBtLbRLbHchU7dR2PJwtsiBba9dzGQujBXsEqan73zKB1bJVNNXGWStc9t8S5tnCo",
  "key39": "3q5daf5xrZXhAXKQzcWZZJ9b5zZzqLzwYRx6HgVpfXTht6V9ewPqMVWv6N8DJHr7jHfT6ajtvpeisa7Q3KagifAd",
  "key40": "2A88fw2gCLt8Yc2yisoha6BUWXbZ4qRrh4xwDawn4TsyHvRC8mhHxcrsVLazRqpnfRF5RjxPHFwQLhdwk3JC6oeb"
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
