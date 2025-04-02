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
    "4EsM2ioHBe3C6GYAD2yP5Mht8pqbP8ZVCEViwX7bVfJv15Kk6utTkDpv7sSVwvnWZiiJpTK9faBgGWvJgCTfMyQe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UfK8FVyD4xRmgPVLoX3jwi6M6w7sCKi2aT4gvDdgTwrza4prfGk7ez2N9WFNVZDnkNuaTN6LFb9y4BCeKFvTTGR",
  "key1": "27Bwe8o4ymHo8YkCtZF5Tb2tZ7rE4BzDAjp3LYqhhpeB2nkofxgcm81QFtjVcNRVWfMd3JYDngZxYhaffT1RSMkf",
  "key2": "5Zvyb5vkqbVhpsWURpPfcBVqy8F43PLvRJcojmj2TQoBpR1Cux4XCHK7qFWpXoFSUgYVN48knKABsni6iJqvKq2X",
  "key3": "4DAgRW1C7NtJzt7dNthhxtYesRp8ZrQKGuqpGTJ3Sg9MbiiuCS2SDSDgLN9aFwuXXSEZ6dbFrrSwwjeVEGbzS9Ya",
  "key4": "39tn2inogpGLyZGLTLaagCCTrdgYb5SuvcmbL3hVGL4xeZwYHgDGpmHRkmYzpSZVBw7x3JZg4wo5mxC6onwMyh8V",
  "key5": "X8CWEQxM6JTw5m4KqiKuzZKWHj9wHZ88X6Hkh5Ggt3bCsnkaHXe3cFLnfhQ2FrDLuy5tMH3YZu4cfWA2Kd2wppz",
  "key6": "3eJmf9A54Lx7K5TsdoukQk84x1o4T6CjUk5ehKWCJ97fVJnQww6KYEYQJbW823QAKCjPtTdTckcSQoxAwQV15ztY",
  "key7": "iVS24cCm2uPDJJTQXcdXo6db1P5CrqqJAiA6VLsyAk3aGLCfBXJXyMbje8QbvGsssKCsepE3uRSmEz4PhnFYLro",
  "key8": "4p3QH7CV8HzJqwxsbQ7kuZAgzJeooBbUqmC2huJog3cv7HRTrnFmMP3YTPBJgCMwdEaBMZhsBMskaxcbyxcNiN7Y",
  "key9": "51wpQ9imhVrXVD9Azzt34Nr8F7382Fd563z121GUWLQr4QzUXkHLz6nH7yG3MuRk3cJcpdB3Rtem5Q3bzQQmQqP2",
  "key10": "4VG5XZMeHkfrchSoR6WnQGhHdqSWHZktvabjmWq5NT61puHQ6wEknpZMy3bDGDrbd6uAcBQJ4fuJDyg7UtNP32xF",
  "key11": "3Zkqx2eGvGM3twHSawdJ6UAyXXmJ82RUddGtanZQWgNoCUgDVmZRxt5Sy635ihzG7enaqfMNP6jj1gm6uWGcR25w",
  "key12": "HUZpqNdbVHdYWkgNkLi1dZjzx6r9r6SdwXkrhnS5h45LNe1NHmqP17sDer3cPABw5qK3RFCo88a4L6ZQ4qCCjBn",
  "key13": "4vmaRKySMuKaVQ62soGm2NtXWnKhMLeztFjwEr3D1bMXP6ijyiVQcKLPd7iCHHTFMdPvjNew5EcoZZYiczqLwHXN",
  "key14": "5vQ5JK8LWdkAtb9fzM4iaijAmM2agapLa2brJxH8q4ZWjEgdqx2wgNRz2u4DRBCfaSXAmLeJww96C8LZz58MSQ7W",
  "key15": "2exUTfQSaow7ouv8KGKTLJ9ZXjzLsCbqiEQiCkfog3yJ42tCrb4vKxBh3vxggL14x4RkcTfzEU6eEbhYM2bZF6Lg",
  "key16": "2pKwoSww4wTFTgSW63ycLpHQBkA8yeaLrajuN91Wq6zcEFbnY4JWnJTadpcZZzN39tz3NHqDgg6kuB22j6ZhciVg",
  "key17": "5Q6743RfSeL23Tt2b4vdDPTS9SsDVkyidctkvmKeWB36usK3waqeppZYZUjrivNhopZKxe2ubv8rh5DoUVWJcCMw",
  "key18": "67nfRePp6vjY2RJazYMx6nVJqkYv4NpLhuKwHgBViWpXvAGksUXAh1Tn2FZsVNA4P3nFzoPmsTqekAuz9NW6TGZP",
  "key19": "5FyNX12zU7mRNBhPVhEUPsazQD8U2Q7NYEx9GYm1Mpfr4qQ4aHkoQ6uNmo1hMZetQ2v2nD4undvygKYvGExNtxbP",
  "key20": "5GK3cuJhQXyh8NQqnBUo6DLsXCxGiLS16zVm8RZnm6KvmXr8CjMKGG9BFD3efEnHKAcuhYMmmdJY6gg91LkRtRMN",
  "key21": "7dLQMRKZAjjbWLFNKWsWX8FK8cZhqzFnXUjZjjEE8ExNbStJTZM5u3LkTfSQsvZwyQo6rVxpJfhL8v52nwrhCKh",
  "key22": "2SaJWoXfUjGJNrS3uPtqTt2FtdG8gszy1V5gPRc5DVajeX9nRsawbxqXdgt9Mhg9Q6ErFPTPeHCyJ6iajbBYU6af",
  "key23": "nDAChGoVhUqnR78aQkbk1kXK49rXCwgcHPK6Fs8QDSPz7iqwfXbgdgDTXvj68qPz3H1L3mfHiQKPzvZED6m2jed",
  "key24": "5kmiYSNMqU2fnbVLZcQYdMbThh4rvp2o4j4hg43sGTJCm4p7C2LhTT456xcMr3jRUvWDCjMucXf4A8yVTH8wo5CA",
  "key25": "cPVsnNcgruYotn24kNNK2N6W4pT6YzMxFsqeqGdFKT2ZkRxxqPv5gskgjqfmJaSBR7KkPbcwdvzqHQctfmc9hxN",
  "key26": "22gDTnReucE83mDvndxJC5CTBBte2XAbzufBYjpcMPghxmC2PLujxNs9ezjV1jUkgEW4vyqSPrpHutybnAm3Jpf5",
  "key27": "4FsWoVjuVvtGXH7qE7n1F4jBZXAWpy8VFbLWDK7U83KF99XwmwDXZdCrK1KmdujngeSE1LH2t9LnhEE1MkcF9ZoN",
  "key28": "BRaxbBL9enLAZb5DsG3ivdA3HbF8yPKMhw6G9JfATAzBLbR8vtt34uyisYCTcVhUVHU4DEuUKN97PJy5DNEk3aJ",
  "key29": "iPJJ1HsBeWRAyPPKtkZJW5jTpctSKy9KSC6PcSdJXry97WYAJzAmdEQ1koyc97u1YhBTzut8ZHrEanAA72VQpRX",
  "key30": "5CjodXmmyTSfHudPdDA5ontwakMo2tCuePiRPSGXTrRhsXJstQizDJoyXzXJTdHHqVHgAD4iGq8iH9Gmas1CFzK9",
  "key31": "qutqNnpUgtEX51GcTjocgxxX5fjFgXtiWWuBf9m4HGCfhqmb2pLVJ5SPhXU2zC8JvRgRtE3toNJcwNsbNcVPceo",
  "key32": "55649eCU3QvCKq31LRwe9StdRPrnn9LobQmAbRGAAAjL8jVyBjV6oSmdocUAb97NazfCVYBroec5gH3sjoAiUhp4",
  "key33": "5WDaJuGRjfMRQ4hp4SHTMZex5vpCGcTeNod9WdSF549TwU5ELtwUy2xkFQki6fFVkzpc2sFToWryX5xsZnPewVqQ",
  "key34": "5kx55HuqYe9ASq3Eq1bnE4XGPVm7BMotjQT7Swx9EqKXpauVAcvSZCmmW9qVvAUXEoCcP5rcwMaVvhyBMScvDRw9",
  "key35": "3MiDG7972ZpU512nEaEcKn7VAHar8QbcoGbkjtoFczaXY8XSWxhpVXWpN3AfuWRLcBs3Xa6F598sdn6HSNxyuq3f",
  "key36": "aMU6PqPx6naBEebGMzMNRsp25KBEt56bX5AxoyFckimtyV3AGndEcnbQiZPKwNCyw58K94mYzD8WUi7iovGeUdY",
  "key37": "mLEMGJd5nrr4cq9wprgd79KFhRJv2KwiLpPrmeCuAARtJKswawok236DRkVifE7Tsy4APjjRAJTTtCMnuSDaf7P",
  "key38": "3YFvUhmpdCm6JUEiX3kch1C332Yi5YETvtRjiWXTPhuFEDcWC3gJqk8Mr1UzP96YL7Tnacqa3JchdL1TjezYmKi7",
  "key39": "5DnDX7xZkqzbsV8fH29U1D6ZbTopSb3Wcfz9aHFEYNCCHs386bf89DQZUNbanP82nDFHZaFim7qrBMonr35QvThS",
  "key40": "4Ydf8uRnshFUg3RK97JtzKrXawxEsetKMGNBGeNP78iPwa361AeQKLE92GgGS6j5gf6E59BZWHjdiFXAYySxmQnA",
  "key41": "4BEnobdACHc7UYfX6ZjdjkE4onLH9WXQwv1fZnSrQQd6uA8yyYhRa7LLwR7zoWBGszxuUB8SWpmH4KhJiQHYYhiu",
  "key42": "2uqSqjNvLNxq4fJK1iQyY2ZJnVvkVw7himiHo1BxCxbnXKgyA5AMrwFf1AsoHHRNt5wMGMP38oGf2iB4P2ZfW2FH",
  "key43": "h4JywayUEXf2Jisd5Tr6Gjj1iJeJUB2hj4BHfP7WNTAn29V6W8nejaC4ioNc4tETLwMDcHyyvqr37FaHryNQBfF",
  "key44": "4QTbbdcg88oU4hmMs5bhk8sM5VWJWYfxjPbxZ9EWer6uSfLPCMM93UJVrreqJ9FrTzsM8Aj16TdvoVuWX9a1LARb",
  "key45": "2QMU6GDHMkobMmByN1pkGvPyvzmVsCF55F15GVDaTV4P1cy2nN3Y3M5zqjBSXXEWxcXqa8AevWQKuexjW75kAFd3",
  "key46": "4jYrYaPF1E3MZ17sRM3kUpWdQWSkoyuo169Vs3PMXkfSzTDhbWTTEDgBPSURb6C9ZhTs2r4phykWEftQnrBhEpFE",
  "key47": "4zV77pcyyhiqSMdaesmYjWyM12WNcYWjCsPCdWjX9eGXTs7oqnibj312vcKQFGKwcGGFoWsq6p8jnhTmpj3n1sah",
  "key48": "5pNsBNLUpS65yUGzgJAAd8JS6YrYZjsEZo32sfXXxyZWd22mRaC4jiNFBtyiiYfeHs2ouNjmKpcHQVqwbCxd4FA2",
  "key49": "cGhfrehQrauhkRtN4hoNdpkM96nTSjDDmQrrW8puCJiXZXLhTDGHCAFiLytJtd2bmrLDBrH4rsEiTnottLK99dk"
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
