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
    "3keiWEgFJyNF5YWiaXx2u2VRaECYDgmUsMz929iCMg8BsDXRDFpcWrq2L3ZMqp3Mdwg88KzdXh6wpSfKVnT9Sbje"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YW4pSjn5Zzvok8CESeMDy2kBPQGDncmZ8ZZH1YTfG1Pyh6hiApkJLa3JLYyP4RArCjJS7yKNFvav8v6p7bYgz3B",
  "key1": "5iGEYSjSyQhHAYUWGKo5jVcgCtPcXky3swvD4DaEEhHsaAHq22Hc4nwoaU9G7T2HRtLoZDAgTARjeuL7PBvf4fYW",
  "key2": "3pZNJZRCUxDiKsgNgc5PUJuyMdWAo5L7Gf2p3ogm2DTF2GMV5tc3QECmp6uvSBtLjNnXPDNTiSLdLAmiyy98SFNe",
  "key3": "isKsVNF1PGuDLmeUB5i3oSQthqFJKRYARXcCUrX3UKwWv6ejU7iz6rgNMh5nTg7oE45BNmV12zJfYN2w8uBeNHv",
  "key4": "3Jx4MqaaGfgnFhxcnx1RWFGMH4n4MNzMheAkdaLayRfHDMZP19ivoLuHV7jeEncQRN3LHxtPodxZrzeyjgkCQoXT",
  "key5": "Kp9ViaFBSWorwvVWEay32J8GQNgMjo8NN7CJjcpup9uUggcAL9xowxhDdKVWBJ3Asr9UpWEBQJ5pXvzViz8XP7V",
  "key6": "3HMUbJzrgyFJmpPd8Gg8tzwuuavJWRYXRmWmpy5GqwqE2HVT7wBs4o7FXKbESS4xMZk6vGTqCqHtim3zARtmpNHE",
  "key7": "2Nz9de9wLH2haSjU3RTWZdyxSLLv7ZLMD2v1dz6Gr67nN4QBWsmH8xAFZ6tCVSSX4EjuwLT5nryVgtKqbRCUfS5p",
  "key8": "2vGBL4FN2D9ad6ZgFDupdeXgtaibHVu4ehtMnJps9rTkBVEv4YKBr2VzVp44snaxr9WH9PupAJkHk6vXJLrdPqDB",
  "key9": "4Ns5zz1of6pdY6ekP9Q8uN5k5AV9ePfvbD21paxuVjSmHZyeQYtnS6eicRSHF61Cw7ZWxHGQ5qBPQoheCnx3YkHF",
  "key10": "4LQkfcFwX447gusKVMnVM7sWiMYxGWombR2gdS1NenRkCBqyXkqH1DmagGRhPfB9xSzWLDS9XKeB86YFnDgjMwf5",
  "key11": "5ZUBDjxHGToEvjJUjPUy7F7PSz3aRBquggEFySrMkiVhHW5rag8SWEraMHuaLJEivLLr4Sr18Xsqk2qxaP9wL6Xb",
  "key12": "rS7gsQGqk9pM13EQYnqUaS2HJ8gD2KfvaMqekP4VDNZxMCocfmCQf8g35SffUcT1Bo18jbY21cxTNmyzn4GWwWq",
  "key13": "4mxZHuSjeC6ARdyBUSxx2a1McT5UYVdBQ162UfLo9QdDpHCjMRWDJJvvKYPcuLP4WxGo8fiDwTHYWbQZ4xXaTgTj",
  "key14": "ZASPyECacMcoNXYTP41fyXDcNWzPYwN8JZ3KAdTBgBugY7wbzmRcfgVEV9xL48vsGqHwWKwNTVMW2nHSgETnggT",
  "key15": "41PJdDcEwDwteDnQArhVjfqaBE7UrB5j4fkXFjfSaGaHgnvGpFzpqxxL1xYohRQmFFNrBTAcaqbsrFzvhzHBPNr5",
  "key16": "5Q8x2k7M6sQqSqmb3uHSY1YoQxHW59p3rybHkiCYryyNVbwQAwawAruTrBnE7vyzyWDJcou8kCvbaBrh25ZWsFW8",
  "key17": "i9mTwUq33LpoTQLArGwjq1PjwEKx42GggKLaFptxoENX4UBSMiJjFME3WHo7UfBcXaWxDKYdGo6zjoWz7pzvxG3",
  "key18": "352RRo7kJMxfdcHA9etvUApYqJ1crri9DLosSZ3JWWbKCFkUZETrSgJ9CuFzEeUL9ytaKPKvBwt6MPmA9jaeh6V8",
  "key19": "3BsAHa9rwiTtuUzPgzeQTwdXU4Psfk2ndkTjPtfPYft3iNEuwERT4Rx2mhxMEmewyjBNCVvayco31YtUykvFh7s2",
  "key20": "R4c992t6qHoo2dzFmYUCc4xJ31aniqt9x3skacE3F5n8LnWL72SpoHwVWcYnwkUa5HWBX1ymkYqpY12govBY4yL",
  "key21": "4LmSmpUg3gbygBtzVf5KLUhPdur9DQv4wepqAKTZGEi31vcFbkGAi4mtSiWzFYUxx7hsbaTLJziTsuJSpoFrkdkY",
  "key22": "5VGVDHtz4LXAPgbm39DxLRob12XXef44dpHZogmSrfB4G6qwEbU5LiGd5h91KP5MMdh7Tn37ee7myPpSQXes51cP",
  "key23": "4e3okzWrkhWnmLae3jEEVUqY8TUMUYuryqd2ySUcb54gvcyLXftgTiDkMZHx8hvmfZe5aqq9JEZg9QU7u9oYTZxD",
  "key24": "ET2ZH7jyTnyEZoQNwTezveLBP7gVSyFFgiUBT2fyPmgv8X36qYBEpwBADTTWhaseX63oaFa3rrD2vmvs3zDyRo7",
  "key25": "khNzxawqw14Cv5rERWYEZVneLeXJUVm6nr4pfa4ESDE5bpAewtqcuimoaTXR2px1HqpSZ8TsBEVxo8Q4T6xeqyX",
  "key26": "4qxitxb2k9hc1oCPCpV7wSzJUvDotZeyfP67FZmXM2bqxs5CSrN3RwBQuGWvn79tLarY11LJtV1MspHcGgFWFcAx",
  "key27": "uoWqxe6U2s16oQQgjGaYZAQ43P5x95inKt5oxaANc42rf5GJXUo998ksEhYzwj3BDwjgYG5CFfaJFRNwmfxhPYL",
  "key28": "2fhB8a6gQyVvuM2MfdR7oCB1mNHGULJwxuLdUbSvGj2e4phtM3mUVjeyxcKbng2hfwiNxVvqLxpjS7S4YMfU8TBK",
  "key29": "3dEtaPsdkNFhUgSwcu33yAhzsfffY33sG4VS566gWHUPiHr6GqqpEMXUYLyUdwaqnBZp5JSxMeqtZ1GqnRz3CWgA",
  "key30": "2v2siLXy9yZ1UXyrXzYhceWDnk5uFfbzPpuDjoiFLFiaZe7Uk8qzFDTBQqpHpP7dSd8GUfosF2BvyoGcS27AHxv7",
  "key31": "4KW6sape5A5m1zfYGPSbJ1oiRjQuTmGFPK4g8EnD1xuxnEGauLW1UyzQf9f82QAcCuJk6Ntxx42UVAfBvD7BmDSU",
  "key32": "4FnWnmXWb6o9h4jsbofwTPRygBrb1TaUv5e8QBYzyzX1VHNGUgLqL82noFLnuLSNxLsCpwGSUWgudw1rBvJYf8cd",
  "key33": "4QU7K1Zmjz8AVfE3di4d7FfHPa6GfaZTVhJCqEJbJRMJ6bNBcfnTRtaGowZk5MeC7xnsvMSrXtmLmNRcCpwZnVzK",
  "key34": "2HwYBS2sjoXhLN75PUMnJm5K2yYW3J6857tp2Tr8v8pGJ9BccBs8kVRJk5sBoVkxeMuz15oEBEcPVdB4yYvLKmFJ",
  "key35": "2e3jvqseb9EWPxjCWJ4vbr4T2NoSs3EZ4aCY2rsSkvk8uo4bRuNfFcsoF6ZauXs9eZjGooYddsMNFZ2pwS36N5U",
  "key36": "5SmoZSDuxTeqJd6Kbme8GjUDeyy2sgoWqb1yUVjeGMppZm733XvLP2KVU27VEafAKWgC3RGoVNSLJcNncm4k8CF",
  "key37": "5zEfgvNd2KrLaXXh5trBHe7Ye1sp799V8wF5ZxW63Ap3v62EuMEfLNctCLuGUL8crYCgUzErbkQS3gVDuqQRUMyF",
  "key38": "5XRsVHMSV5DWSM4iWHBxgHW2UsHmiVkF8N7zE6PpRoVHUkEJmDWRZFSEe5dW5XhJCKsiAXbm5dFbLRHTFBFyPt2Q",
  "key39": "3q4jQx4bUsgUJn5tY8DuMG16yAj6XrMjMgmUChtnKZ5pSNfd1TxWhm4Q12ZfXUENeGm4VTDhLjvWncx57kaef2JR",
  "key40": "29FDoeg48SPQrUjrxNKC9gHqJCFeLxfKyJ1ow7u1hCBLNdT21EDyzguWKui8HVmmY8meKkRjDqiNqiteHnpRUUuX",
  "key41": "66gBDZCyqpu7cosVftKwM6J48ifBNJdF8i1G5TYaAqijtqmGWgfTqt1o6XGrB1NoafqYH4cUJBpHGSsZWWmUmxhY",
  "key42": "2abppDTuBYaVX15ZgtQL9TKru93GRo4L3gFR7SzacutkLaWfSoXKJFtukdopuvSAhryQuKrpkSUi8AwhPj4MM9VJ",
  "key43": "3X4Q1k2ncUXoK3NMG2UjrZ1zRosS4bB2Hjw6GCg1L4T4ucBe7aTdQwmE7Um9Tpp5rpk5PHFscnnDcLVGoCvsFaCV",
  "key44": "39PHGYaEf26odfPx5fmZishSVMSCnFyn6kU3PanSYFyTe6D6jrJ52vyUSF4bXfqDBWLjDbnmYLTUudwjnDCszKjG",
  "key45": "4RdPG94mjP6YcFSdSvskSpLKPKoDeCnHAbR67QY4BCNWVEHyB5dddaUvqZ1mPVEDRrpv8jZCLH9ydbA3d4m4pSE"
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
