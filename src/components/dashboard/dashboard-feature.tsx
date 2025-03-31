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
    "4WnrZLzsjZKDaqGHgTZcDFgxoywuWWhWobufM95BoZyxveKchqXrbaW8Kes1tZYbqffAxbsb474CH7Z8VgmYHLft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZMYqjVa2DQYFsYjGwZ7heAr91cVemW3Zqr2qn99GkjSKAbGQHgB79HfdCKV1Vm96pDVyFX2GQ9o45NXbjGGFrG3",
  "key1": "5wk7D4m8tHxXmhC8qC8MPCq1wTdFhUDE8jSLSFhYYGHJJfsQzFqtn4CK36jKBdBtvBvGwaJcCmRxz4BtGLZym6G",
  "key2": "4MqNLz6bpytBaY3YPZvLykS2c8YuHpZrJVwydW7YuiCxHVN5Hg4hc4DeMoCdqFhNuDVgQFhtHusdXkeBiuuEsDDH",
  "key3": "5xa1xyjVhYqSW5CmgoQfcGoN2vXy5F2k3amdi5y7BjHYoLcrjA4GYDpgJimatxvWogwR3qvCAKLRvvRUSGC6njVZ",
  "key4": "2pDDHhZaWxTJfP2FbbAPSzmo9EazTDi1EaVKe7fpy66VZcnzB3nvQdsniCeaYZqJfjydV1vDMSnGxTeG4NkmpLHn",
  "key5": "3EpZy6vNxMfp1bWKor4eToUxbFJ5Pot5czk19xczJwF2oxCoTSPSt27V4r1Bd3msxZ9faDWBV5K2Tpnq8QN44Hnj",
  "key6": "3RWQu7Xq8qDR7M2FUMszery2cyDAUj7PSU1Cqbkao2EQNdCoAFTXTky2TBjHvNhdszHmdFmwevey6ERV8x4GqPrV",
  "key7": "3NimowR7Wdbnp2LvVmEtQpzqQUiW4wvzGRhemFfV6QTibsE9jtUwqCp3L927oh8SwTJdgbYHCG23duSbeiszFXwu",
  "key8": "4TgnoyCS96rY5A2fVURfspBCbJyMQrmdaGSDPktMQzcjXFTQs448ipZwbNuLYVJvZvjinYpm4R4HAMCtEpRusGPh",
  "key9": "4qRfVfodSKjiBNqE8kuGZxkfT2CCjcS6xa7M3vxZSD9JNbAUjCY31oD3m4prnfDJ16u3ED6DV7mmRqF6Sv4snFiG",
  "key10": "34wQAvMheqqnw4mj7ZWDbyp7B6sJ7RBsThYcRABfT5CdpWWXnZ6pUsLFqFm2MZhLiYDv9SUgPTrkWAfQSTozruWz",
  "key11": "5GZZta8ehMdFtWPhNGhHBvjRuBSp5qbqkCYsbSQBmogU2tUVMsrMBz92tRxj5qiGZRXQDmnCG1Vdrb46XTWn38Az",
  "key12": "5Y1XJg3shmN6wtspf2AHdqnKHrHBf4KHahbmtcLWvWdRgoFqxgeCSvV3LvqSMmKX472TMKSZNL3jtzBY6zhwxQ5g",
  "key13": "5YVy1mBnD7CddRPYWZB78JR1uXY11J6454TkJ2cL7AAhPQLdiPxYr3wtES4gxT3gLL4N1adp5zxpgHzcKZpSNad",
  "key14": "5ns9wo2bo9TwBzRLQb4MgnV5JnKB9sFrdswSHFZo1KZwYyGdtfVaCxfJQXyjoY6wbR48HLYV8Ta9gFeuTanBFYWs",
  "key15": "4GsSsfQEv6SSUAYmr54ZmsTRVuU6iEYtZmT271H5E7wBXuPz12VVFXDhngYb7SPMudN5rTmQgpBZf7EHFQQYLrnR",
  "key16": "4JLNsBLHvw5WYh4tzsBX4SbDt3pBqu6msV7RHPKxkgnqF9Qxe35samj8FZNLXXtxaGbKPKxx7AVVpEoLKmooAe6z",
  "key17": "3bRu2k5yXiCKq1BAmqwhTB9jQLY6Lx5UTsJ9gwDtj2RdunjiJVguCEgHuz1Peu19VCQiJLRbQ2pRHLvWPir169V2",
  "key18": "2vtZQYioFBD96466Uh822BnW8pMfQgDn1T77Wd5xGgAZaV6X3QWgL6Fuu92wStJAqSZCvPYihNTh3aZNHwovbVUt",
  "key19": "2JN67uNoSoTKG5WirkUoFjDWHYijYmHry1cuVAv8KQuadnLs1tN4TbC4YV6t3JceCcpRiNr5VmtkmWtvhEoYTokv",
  "key20": "2ADDe7VW3cYKuMdGAFyxG5pTaLJmNrEKiBUSskshMwFa19MPxeSsFCx1ZiW5HugD6uSwkfrJe8PFg7JGeAkQzeec",
  "key21": "dcetySDoN7BKUHbgRQdYMLDedWpRdGttr4yHSwwMNpuSz1TWzvzK3dJX4ThuG1ubn7i8JMCCxqxuoUEmSfLrWLv",
  "key22": "55A2FCd2QMLb37LxH5kJQ9Hr794r1iarNy2kZgL8MReSsSHe34wuMuCocvgRgW3Pix6NwjPSD1SgS3dTHVWNUNGB",
  "key23": "5RoUwKU8oTHCy5akLxnDo9wuNj9ECKcV2Df1bmJufhpoyuEkaZsk7ZwMMqv7cobcptX3rhXYTEfmJU3KKS3uAvH5",
  "key24": "5ooCReHnq5nJqgJnRYgsVH1tmPW57mvnnorF2E7JgV5Z1dgkE9R32LtivfjozHGBznV8Se8GDizLPtyRnjSjFF3o",
  "key25": "5yGYGiKMy163CuAiiahKnA9661a5d6TVXoW2xtuPdqbqTgVnh7RxrpdCzYFJAVk296GyyYaNu7b9CRzGbssGE2QJ",
  "key26": "hjM1MnY1YA3FmUoCkfzMQsjJrwPHHzLEsmmitp8VHBbbe2DSfKJZxXeXLc1Z3QYEAYBctff9XNs6Vrh2Qmhyk28",
  "key27": "5j1KkPMz85WU6S6xRRbtaVyKcchvQ8H4h2TpoMqNJd67FCFrwhrnwixaeGvnYCJt88HxTxBG8kML94nTjEHkYvs9",
  "key28": "3yRERVWr14LNBKUk6f1d2bt6JtmfWJD8KBzxwvNYZ1WWPsMjWs5gFbTNN5ARVdwkg6qBny3vcPtfW4eKAugzszLY",
  "key29": "5oXhGeMknrDQpygTWUpoHPdHTQ4BodeWV11BZTKhvSJKWNfFzQiBS5G9nG9CfAn8EMPPuB2J9ijvTTYJojBADPkK",
  "key30": "3EbrToPEc8u6moeSHAkHwHqK9GMmNZew6sN4MUEgZdChz8m6sneDF9ZpZ7XdY9zH7zBD3i41mVWrMvGw1ZhmURPn",
  "key31": "5sNoYiS49D6R9aCuLDhQsYoZzohJsFGfnAfWdaFoDhEk6hzE95cE5tMazpH77W73maejah2tGRGiGrmF6o1YQcHn",
  "key32": "24o38HJBVADnddBieTGWBHAzTZ7C82zYD6E7QSvNuBufXZoFmfhNvVwcrmzuddEMjdZqDynxAmJA5mErm2bu3xMu",
  "key33": "5npJ7SefjzuAGuJFTZ9QXN5MBt3pxvbmRtfpSsak4p2UPVSaDjLqcmThdXktfB2QzAefuKbaKH28Z3HxwUC9vN4R",
  "key34": "5prtSRxqa13M3V9WvLmCmfRJDZ73A6PwZvaEGWd6rjFgvhQGjJwAKjcTb2opjrn5dxj6tPjvizgKsitqijV5bgcm",
  "key35": "55DHXNc3MQaSisvGqJnAq7hpt7oCUZL3eWdLuXZ5mz9eEvNST2Rhwvkk9Wzr8NTFUFV4EjTKv8szLpgsY6yg6VYT",
  "key36": "rhiVu4EFwRzbqJDYkQMcZ8EAxMCZrn9zZkbTp7xmkCEezTordazoy9bTZCTYP7PbtZsntaEcUa2xAb7m7e5DtA1",
  "key37": "4PMk1mSZPaCj7kSpu5W3KAmXcn9JgG21j3oVHe11cfGjNKVyyHiT6xXxJS1VVoQGMPXKYthEKo7i7rgs7h36zMXV",
  "key38": "2Cqgy3VTB9TDLQWai6McznSv36dx3rMDwmiPEnkbtLgbgsqHTj1DzZCTXcyK1cyJWFzqCDgDhaUM7n4cLSH35Lmh",
  "key39": "38C9kweztUnYZ9qg8t66hd4zeCnJTP36fVKqXAqiyUxPH8ZnXeDbZG8BTtPE9XsN9L1wEKdxzKpuzA8LnxweT6wW",
  "key40": "5xkZbiGdPnvsyPR4ydr5Y6CQhUFrN9M9jTuJEGN38PPkmZUk8ToenNYBrhgCEyisdLr98bCqq4EeRaqqxFrzbvzj",
  "key41": "2VUbH8vp6kXVL9YrVMMAzXzeh3HUMH2rUmvaXYP5wVGPx3XhU2khfMk2pvR5kuc3HiCfURRPunzzRxfEcNtefy7p",
  "key42": "2RA6Wg9BQmgGMHQ3GUj9EHeiWDeb3dJv3C9hPdKSzexfYp8GjUWCxuzodbSub7j19f88KSHh8WWUjaQo4mp2evqp",
  "key43": "62PSZusb74r4E3b5jVuDe7zWBCvBaVSUXosSn4Wh4ULWdZYwPx1aUQ3nctDhjLWsGwdv9CqRNtaqba1pxKfZmntx",
  "key44": "4axzrGCwmwdBiBNNBbX6j32nNP1YB4VUCLCaNi599CDUEFcZ1BF5Kg6ekb4ZouQx6qpUSRbUjZ9hD7mWbsxQdtdo",
  "key45": "2HfLkfK9F9vBhvSBgxfFUE8KedUJzDxdaSwHLVCc8wFHc8pPxqQnDWR45e1kZtC9PmJaXwP6PtBvKDhTRixRUUid"
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
