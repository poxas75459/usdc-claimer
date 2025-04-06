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
    "4hU5KdSpavVjRuLxoL81hyphr8pu8Q6tUw2rfxMr36yZsuNmzTbw9xZ65KwURS818M1t9skerYRUBQGTA5vz3KoL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SvjcNKEBw5YoAMTjA8wjLPUVz1k5eEHT34LYS844z8PGFrN2FVf9s1LNHjGNkj32tJw1xgeUCDXbW2XB5vjUeg6",
  "key1": "4KZ9wG2q67xaULYVjCPe8A3hEtB67vLaezxtjJFssj4rt3JMmbPFvwzEt2haxM6cMWS9m5DHJqbhDDgmQHc5zrMa",
  "key2": "2vaURa4RvfHqpRXmC84pDmyFG3GDzgSenTarb4NzzEPu7EfVBaAqYTzj4aMpKhbpJsix9nbpMQXUSjnJtyEVANCE",
  "key3": "pE9F46D4kEXA7Css9sUJJBSHYemrdr9eUFNcVJgcoGNbA9ABbsDZaLoYsgn2NBoChfwsw1XpSgZTRh76UtZTpAw",
  "key4": "2vb27WoCaRdqRqyNuLeWQpmNaPr9BoAPQ9nqagSXB7LxBhBj2GVwMEM1QunZEdgUyK3nrTTQ3kpLK9kZ7dArj1Ay",
  "key5": "5E9aHDobyg2KQU5w2pdTuMhp14oT538cCYKWUEgLrZjPT5FCvcWH16LSf5rY78ntbwUSBDQACphjNFqCwRhmj6gb",
  "key6": "53rui2ZZxYiywEdWymUdXyooksHvkNzMt3TsgxU4NBuDB2kzEnh5ao29MHnp2vw19Pg6nrhHCGJjGhDt3dzPAYbM",
  "key7": "2QY5JsR6KY4WCLPPwhxFvhRboSA4mppYej9w5PebjmmdoBvN8qszNuqzVgAkCXzcvgkFEAKygnBfqEFnTYuihzsL",
  "key8": "5KD41JVGo3rPraUseGpo9kPME2bx9wSoXt1si5NF4zL2UsmNn3Kya67smyB6PQHSPGMdekY999c27vHj3Kukg2jj",
  "key9": "5L3jAFU44qNWkCjDaiczfqsCB4gPyFzLzEcgWJDAcryrbjQYoFcyuSn4cYVZy69XksKsYrvZDsjy9DutJouwMM1j",
  "key10": "4My8UYoZ6oMTPwBKtbkPHZPn62J4sCgWULkwxQtP2c4JUxCvwDbTUCAsd2nkvpieJZVrGKVSN1SNMwG96FVxUmhM",
  "key11": "5mDJqjNZHJ19FwQunACcntGmyom1PdBwBg8apKDF4ykBfPM4sXP29qV8LiwrKJRXXD2Tfe9Cziu3LSs3R8gjKtdY",
  "key12": "5VBa3HGjWeGQo3JXBsDRD69xZhhA98TKZkN793VA22zFhJwGafPzY6u1ar2ua3RcCg3skU6vDmfb4up5hRWCBitX",
  "key13": "DPG5CYbo46cbWNUxcepUdP4kbqJukPhA4HvbTBUSA588GAFS2MtDX52F4N6j4ePfSBrBjYPD3smsfBoPr7q3kBN",
  "key14": "3DRyH4PVpRc95HKhd777SSiiUzLNtaG4usowSfjmqC9vEHWF8DxgSWGP5YtBahJgopFze3LZQ6MLWjsadH2aF9vv",
  "key15": "2UFqbe59PRS6to4jNAtNCLS2pNP4qvhckDZE1Y55vs4yUUiNa219GJ6wZ1meQaWPE2W4zRgVu64mMUUspDXpZTVN",
  "key16": "5LjgATTgx66Lt78VwePQR3WbBcx5MetjDNgr2U6LNEQ7jnd7sq7FsJkJchW2iUr7ziKUDAwmQGQPb4PmCTTjkB3P",
  "key17": "3c6jM6NVa2oA8JK9KDAdXq4NQs2L6eBnnfJtm8twgqYnFdpKobs7Bz4V3jS2NQQnLVbSt4wkCjMdgR2U9zhKKk2v",
  "key18": "T3fCcQAY7Nwbh11VmBXib4e9qxMrA5S5yjSSXrnADCsu8inPHpLN2875jnwTg9wUWuJvTeeDGSgdGvdLHZbhbEC",
  "key19": "28Xba7ZXd6ou8YvJwg2WXFaCKkqtM3nyR2Gadg6Lrn2WGBHiioByz2qcSF77GiAKbk764W7yFfD5eNvijfG88CXM",
  "key20": "3fYU4VnMxDpGY6Qj6YJV9g2YgDiW7vN2euDcWDgbNNyYkRBFZphbxQRECxVitd41S9LquuxESn5KksFTEuv68eAe",
  "key21": "3FBF6BB4yina2mArwHYPsptXFexL1ADCwkcAXoMedgCZxUvu5GEFQfPyGoWR68AxbJzskracGsesUUVsufX1u1cC",
  "key22": "2vhW53prpm2dSuHXFabYar9V1de4FE4L82nd17u5HECrrhB3tpX3foqT4b1P8y2S3MuyybM5ESwdYeRondaaE2Cc",
  "key23": "3xSD15MFzi2yFxNrhDeFK5Dj32y7G6pGnFi9KtLPHt7cNQoPtP6kyLVwtewXcW31ph3ckME4MCZZpaeGAUftqf36",
  "key24": "2njSykzSDaoRXFJ6m8BR6iD9njrxt3GiFoVcECP9qDDh3rkJx4XkDNXfwNFTsdGAd76GBSbodJooAufQj9YLQXV6",
  "key25": "6a8CFq3EAJCnsKF5U3yWjDhR9JsyoQkyuZ5oWc8sW9rwnmaRf1kpbaBeaCHREAeL6wDKKcmX1m6p79j2qou6TFX",
  "key26": "CktGzVDsZ8gBiE2bUBhTAq1ZkhCpS87kfqeS25sHd3xZc5SurAPYLdippKquaSKWrDDyt8GGhQrshLJGHWhqadz",
  "key27": "3cXefYLJYJ1bon9TFfGQyDdRLHhkx7Xq4jFGTz2Yfho1WFHC9vNsYLrDwqar69iiXavgYjak8HznGHSW3Fo3Z1w1",
  "key28": "3PhneKvB2D4aqrLvFzfyTJidSXZgzoipMfRQzFQxU2BUTg8h19G2pBP3xsXmwfJWdJuzSvwRG9FU1rateByhjba6",
  "key29": "3mCSyUCEhPXVGK91d79E4Mr8KAe4kSVdCdF5P3ueCd4KKfD33bnBY94Kh2eRjWBxBR83AcSqj5BDRdB2PESyMevw",
  "key30": "Y948W19v8RCsTq6k5wktQAZRBpes7AY7MQd1GgSJqi4PyzrjCX6TBJqRBPXRg9oNj5j492YzcxL4bXDtDLvq8u2",
  "key31": "26Nh7R8N1qY5z9pnBVsiMkWcTdu5r22GKSxpsvPKs2rMgutSwkHj2h8J5jnie6nJswq4Y9nfVaqwUf6e68YvrYdS",
  "key32": "2Z7nWj6KLdHvS2WyVkDLWChPNjm4S3JiY2yVX1o47h4F8L62MJMW12E8bVXHVee3T3ShxvRakM4PCtCqr1uLuKe7",
  "key33": "agcwxkPBMw56rqTvNTHuMefKbH6BpMU7gegsqMTQAhFix49W6cDo2E1sUZzSLV6vMxeN7Q3RemAjL19FRbuDcYN",
  "key34": "5kGNBUjybjR59coYKyzr1Jo4KMsvqcL6SKtuLSfkfH9pwTpYWKNTYUcQnS5bcnaMb9a4A6vPRrJj1UPT2CUpcv3t",
  "key35": "4RH8DLZoRjEYiXsFh4o39fKfKRK3hQFX9pYayYfZQ1A7ZZJFsNkrtsyiTaLB3kK2k2koaa5N9P53q31pumEA1HTd",
  "key36": "3qU9xxrhTvP2Q9uQmAJdXo9QzQXBjvgbwEEKxqtSQdM6MuNh222UYZejH4VYhN2mCfGAPwBPDgphuiAeWWoDHgaS",
  "key37": "3qe97JkiF5KBLUVLKTjF782tkqUDsvj4Gd8qWZBow3s8QscQwvanzUzB3V3MWkRQjGAHxRJVuMPKNT6Y7Scrq6po",
  "key38": "4Ae2grAdDkN1frhUq63iznp1w1SdLxv4RGUszUox8755NE8pXP3yHzY2qwyHW5YNVjxvRh5DbJ333bAUE94HyYDX"
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
