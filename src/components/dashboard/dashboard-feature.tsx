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
    "ruEHFwKnj7jSrXdfFU14PSvTMgT8Ve5NQBjWM5TRHH5AQsDH6CiGxt7HfmxNQjAFAyShAA18MMdX1vkNA1AEVPr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jvQBM2Mq2DYvK2wms66anbS4T81iKiC5FE5BDwAa3GGLJ7AB8djbmWwS9V3Aq5qbwQnAx4R7RiNbAEkTKF3Frzw",
  "key1": "3twYVuase4XBBX9etgw1tkQiyfL5ZE8PXw16F6fCa8BWyr2HDDpmCyktFWsgnhK1qSQPYMxDwUQ9bL6u3B1HfZM2",
  "key2": "4y6YXTSESJQcX32PzsVq6K4mdCx71PzEo5WYfsVScHeFzLk6ZdQ98q1hxz8hjj77hhUcDhvtb8ZEyiC8fbcQyCy5",
  "key3": "5peFVYDppqLRQxRp1favTCPX1t6ZBGqSxkKtmyzStrR12qkx3VHVaEWNgCLKMoXyD6kjB4sFhLZ9FMLGZSbV9Tua",
  "key4": "Ju8WZrUDKmJara2utDhFrtz7zgEXWjvBrrzQVSSfojp2kXdR739vxGyxz7kQYqaZiQTyCnCJ6Z6EXP1xBnbFWnp",
  "key5": "2Cosqm5EFmxRPdk48Qeq6pq8oxV6w7UDmjsy9zzHh5oxf8ie2sVjuU2otudr9YKsDjL4d9rvLVnk2Y6k4s7QdR6g",
  "key6": "2JhkVpAhb4tTTT6xsXMRKp4aNAy2oMsydHUEQw4WJfFvnMLHiWqHJCrhvsHbqeaShSC2fm8Jit83WP4rTTC1Rd6h",
  "key7": "2nFd1iHk1qy3CqMfXuWvri4Ha8utBaKJB6AykWSaPdUmcvDARs1nJhMGv1aGHkxRciv3o4kkcHMtjVqF2YvUyifK",
  "key8": "5pSQ46J3NeSQsBBTGYYUGscooDTwee7jdBxz2NVcdpDbbXrvxKxZN9RPwPifUugwPNG8RkpbqFbMLV4GGFwYVypX",
  "key9": "3K8fPcpfbmSmWnPSEYXkZBAmx8Q2H3tho15MSiuLhoHEtE7uCtGyX3RvWHk8WQQrcQPkeJdFfmTquxg1CWBjwG1W",
  "key10": "3EKPFr6kvs7X89dU81Yyd1X3boXKHkQ64WvBmSH7z4GK53xvpQVrGVVSTUK4WraJaa4htsGSdTT2xNXuHPq9bDko",
  "key11": "5beXqa5rLU2edntwRjntmSB2hya9UcLbXLbhR1xfzFrChAbdgLaCHR6qHaqokov5j6pFwBvZNfsyspN2Ji6tvHni",
  "key12": "24tvw9vun5BAboE5uW3pxuH4wk8bX1KMCXfKagqH3FcPKm6sKXKwJr8cP3onar6f3aYwjXKCwGjxtBX95j26Djdz",
  "key13": "67dAxmPu7d6cd6JsNtLEU6xjeNFPJyFKXh5qUiX19fRpFUvHJRYEXmcASVEhU6hk3fDBVy7U8fN6iEsfvnQL77HV",
  "key14": "65uaQ1YFtF9YqBbL25CJiSHMMNuSkpya8R4Fp1vtz5uAgcDhaQdf5bcX8eNKQKRp43HaDi5HN4ZbUuRF3EM2ijnY",
  "key15": "3hfJhzVz5SqvVLwsrYy8MPfDakmJFq4RNQeneHf2NFscEHMUUezxcd6Zg7YVsn3HbKMTkGunqUFCZHhDWYLNXf6K",
  "key16": "21r63YmfS9B99dC2XyVDztPUyTxkrYyqzJDWjuo2qrdryTjeYwiVrrzSCc7bhQGoAcm9ehgE9UUnfSm7BpDJ9NTB",
  "key17": "3j3ecFvNZcgTvZkKkuHmQJNJudGgVbXhEmdtWxwumxHyJZQz64fW5rsivHxpshkmh2G4wuYfiDhYgBGikXMey5JV",
  "key18": "24rxGWDLu2Er7cnvQWmDCUDJbiSgPKhQoNjudLfC8HnJv1qF1smhUqd7rES9Gk8UmkAWDTybHbwdVxPpLu8YAEqW",
  "key19": "1dBMoXqjpAoyycyDUw25LBrECcYHrudS1jGqJqqfdmTiodBxYENbCcQg5nrDdxofkwx7Cx6PEbPwuSJtjHnk1Dy",
  "key20": "5iafGE6VFBENyrmNuC7pykR7W3L9qHnmcKLDnVULQCgXfbjv3XYrpY2YG9ErEqj9KaUyg1Deykujzh9VdfGQXzu6",
  "key21": "2F6NHbMsGUW5s9jCNJPk24mcv4hvVKp3r4X3BfZf379eJnRGDfSckbXimj4xLNMKVoDcv9ASCbMW9ginGQfb5aAT",
  "key22": "6315KNRAQ9nKca1tE1kAf9wkEW5DLWPrrwo2AgQmg8bRW13pdHaxJBg4xDuDg8rXFJdvLzKCdbUbGJ2z61cHsnNJ",
  "key23": "3s7nRxcktjuH2CDZk5zmfY15NJ4XHL5XZazGoQsoNNsKbd47FkHzhdMGrK5R7qXTzhNV4bvpYY7vsgPZbjzuqfPE",
  "key24": "2FQkC6uxBP23zFZeA6tbpxGgp932qsH4WX39YR4Lb8dbrtqaFRQ1UHQJgbFKj8SKicvP1ge9FF5ngh3FqgUdzYdi",
  "key25": "2whBWKV1Xrswao1xwkXGxCDR67Gpz24vAbraSD8VW6PcKuLgB1dRXzK6Y1h7addfcHGiXaxUoWykMN3yXsjYTYaB",
  "key26": "2HmLCfajhz36NSWdmTy3w7aC8EnspsY6tQwVJFa9fPADNQkfvczdHhBgzrixnkJFP8MtaPB3ZFc88SHvuuew3vko",
  "key27": "2T1E3hrYYoZWWQjbzLhNHZnz9FhBnoBxenDpRMmWF3JWt96BPQVpJwav4u2MAf3hJhWtBbFzGmYEnXDEJUVibVJg",
  "key28": "4Fydb6y9jziXkDopZG1AUzN4PvhAgGu9DcEWvE7RzNK9FTg4J4MJ5dvJpEK1kvT5N7aU4oWrvnsX5DpLD16yVrDJ",
  "key29": "2j9tXmKtHuZCba6u2mUTTU4EiFWWgBjW3CxX6adh9ijqNmRubJRkjYzNzoW1i8imU72YHMfMLtBKcqy6N8dhuwZ7",
  "key30": "41t9mnpW5XJwZBx63BvugjtmyaSUhdJNjzSGhmHfncm5AWsHjvaBQDfFnMmUpWFm97JgkjHhzBKxj6A9WxkP3b2P",
  "key31": "27jjeNmG8bjmKpCHGuwyr2XhX93LE4hQuBiPeCFa9Q2myVsvxHa78eXmH8c92gv66FjxC4N1Gx6yc1zt2sH3JNz4",
  "key32": "4SJCNuYhEsruyWCMNDht5vDHJ9jskrfFrkEGmRzJtQsvdcRCa9gxx2gAoJkMox3YmskXwUsnFjCGxU8ygCNMjibs",
  "key33": "Teg2Ljcu5QZAVKU1Udq3GXS1LMSau3uwzF4oBxTTLYgJiKDw2JbKE6kb5tBbHM1F9seKgdkykuuLDG5Lf9NiRqZ",
  "key34": "LZyF31Ci6TgmPznnVQDUcunu7gMwxL9T7PnqLKD2PsTjNejRqSu6t4Nmmtw3ZCcEQFzuMhoZgztS5jpFwSWnoV9",
  "key35": "VB4RtcTUdagmB8jBLGQXP5Rqy761XY3srHnuMfQGEzv9WTYo4aejGtr1QqWQpDHkR215KKpsJes2yWvFERJdJP8",
  "key36": "D1f9sjZaTFne4XsBmViHruPtWXxYgn5JdpwZZ54s6qSdA3udXQZrgLEpa39Cs27qPKT2j6Hbm8cNtKkQugFRK5y",
  "key37": "2DNqf8KsKyMmiTxSLmuaJqctDFVyDXxqMEJAagGEXXApJere5si49yRR7gHTumt4ykrgTRxKNq14b8Rf9ff6UtM4",
  "key38": "41DVfhztvB3wNeLs8znjprte3aK4if1fWe8twh1CyKieUV3cyHeSy3W3CqpEGRRUJr2jkHoNjQcyc8PNsUvFdUBt",
  "key39": "2e64mSyqHCKZ2wJsRSrppFwqi97Uq2i1KJUe9rcDCA5rFYfTvDShUAEp8tyqwExrhEgvYTR9LwGVVtJ63tDYyvYz",
  "key40": "3D6hCE6aymKeksL1UuNBr4tzEqLRuYo5XuaCAJVJGDrApE3yjtVz6PU6ojsJ2Uo8ENo448B6J7C7hSLWjaJa4ffa",
  "key41": "27GqDRrxUwgKi9RcnejWsgj1ddbPhDPUNm5kEPoUGHC5mzndUE2Afb3shK4p8cSig2kTKjXeAjZHjciNXx2APcoq",
  "key42": "3PzAESkzTePhmuew2FiYEcaBDhqb3c24LN2tfnbqTVrGRPtnCMds1ih7PnH2vhNYeAzRnwmJUfDrpFQt7GCAfpdD",
  "key43": "2fWLtZCCt26qYKjsjubHrQ7wjY1wrWiyxaVRpdVss4QVivp8eX5EQ9mb7tLAAXhsEcnW2wHAkLubhXK1WZc3wPEV"
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
