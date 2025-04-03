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
    "jXpySLP5aVTcKxc93KVJGLtjfoCrnixFXDg4sPk5rZxxZpyv4CsP786PGBAR7NmwFaDhnD87uqzJdC5UG24PpeT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dTAdQE69LQwiMGMsmvuq1N9eDNK4HLLaKiQeHv74eU7a66xgj9VY6xSayyq1ogCFshVFXGNhTQWZ5sxiEvq81u7",
  "key1": "5J3WeV7Nwrk99v5YKaqoSf5XRvCNA6zY4uwaH5Eg84AkS1eA82LnHRUpNm3Bda7jdcbqidpxA3fVkRk2tjg57u6z",
  "key2": "4Uw7q9gKqTtK9oMMuDbH8NjNEPNWSDSH1JVxA2dCnDUiq3PRfVCS4X4vjoUR1sfyNLMv7mrM1MmYUTAXgFmtSgfp",
  "key3": "4BmwUbSR6eudX3o8ZCbWP9FAbWVECAdykkVVqtqSvo6vycLyqN3n8vSVpVwfUgWBfphDHPnoY6k1F9mMu61YUBAE",
  "key4": "5QVB3rg9f3yTZqUdhYocUxE4S6jzyhNEspu72amLGvZqyHKd7jkb8cyhwgWHTKuNcScWArfayxSURZUYYMJD61cW",
  "key5": "3ALiexbzQoxfXr9qU6tPumRvqmEddazeNHFSzogsSsuPWHzSxgf4rrNCXhWfjw7X7uUMZbcMkr4iSVayuHNMjdxL",
  "key6": "4r4g7m1oZKAXS7rSz7y34djNfygBc1oG9r6susKjhS6CXegzNt6e9xr83CsK8vATRaaUvezKWhBkT7ZCgTGLtF3D",
  "key7": "JYeBD631WYGy1ziQXtffgrwbu8ixDxKKFLYRiSCADWe5a2TZpDfcmFkRkgiSyFMJVgdzEwYwZZYNeFL3jTXGup6",
  "key8": "3PnVGhLET7yodfzw2FZ2FHRPao2tXTtR3rQgxbmi9uTPKrXDjq9JUsAgr7PxknTa9xqm6XcNaUYtvec5fH2a124f",
  "key9": "2B1KKBvFrkTM9n9NnAuhJjdP6cPkdaZV9hbdkLJLyUKQ2uFKp2c43an9UF8f4MjFSRH434VGdVwzrS7ADkrDoD1W",
  "key10": "JXkLNZxZCT3FZ56GK6JnFTjdf8gjH6ZnvEB98friw5yth5iGfbbFHccxsqQRRgvmxXMCEQNALArkBQfKhL4coPh",
  "key11": "5JmZXwU7Jfdjr8DznicYSRJTBF1SdwKPaBu6MbiS8Mwn1o8E1MhEvLYUrW7tXStk2DtFxmgk1ARs84KqB8YcALwx",
  "key12": "5CitCMeqVwjmq46bKDdiJ7fHnuW8ANiKm9bj5ce8ckYkhTxU5MfPA6k5dXkkcbBJL74ZFj9d75ScSD6maafKpjKF",
  "key13": "2WU6CfVJq66khoUQpeFEtXFjr5LmjB8uEUhbxrHeQ63bAj7oTrPF78GA8aiTbmShaaqEWuNqUjZh5axjX56rhSPv",
  "key14": "2KJ3yVTX4SrpRH6b5JJJFMUnhR9TCsHARcYAgC6P3kyhjgd3xxDQ4H7ShkNv7E24vtK9LnpnibBiadEHQtBNBoo8",
  "key15": "3PKYm8RV9D7GwmhKkp5QXSGVMfKVjo8jrgjpnBBnxqTACvFyxZW3vtMVTAcEgUju5YALUFPnbEsVed8gjnF77fz9",
  "key16": "4Ut2X6casV8N8w2fjsiKuWBKAQ17MkfsykN2m3G3SfpLtVzJFt75MjPA3LZpj3vMQgDmd2MU5KwJnNEaoHEotKLg",
  "key17": "2GBTvtCyMjtAkZF6fajGL5EA8MfhrL9Pmkok8W17FTJdNdmfkmGoDugtCkhavueBdf7Bke76ZsnX7BSdMSmQxnuN",
  "key18": "2arb91Y1xrngSGUVBsmkjWYmU2wZ2fXeePGCowURxeKsN7oyVe64dLRAJgA17KhEb4Fss3zbqD5F7r1gnFkD3wDN",
  "key19": "26fcCafY8BG6KnyMr4bgBrSE8Hymo6EvHSAr77DrA7xqJy3es35st44wcEjMqXqbpMnGn5WuocKaW57boxeyK1Lg",
  "key20": "2YoLXwF7QmTK3uMQRM4vrVPC47ijQ5iPDiZVoXVcdMsZC23AZjUx4bq3FqScA74bavZcuvJzAuZesYniUSBiEL2Z",
  "key21": "2FHi7fgsGyKjeCqhPXro2u27W23qS2rnDmMbAaLkwJRrxzaxTexWViTunDzsacJVVnk2hgXxcHLcThHGZezoXcof",
  "key22": "4vwMuSYJLaPUgTKi2gqnkX8YUZTztG5rbq59gdpnGupaZ3PbQe9JdPWEfMzZjJhYVNVzcmh5vqMQtuwUsT8xZQ4F",
  "key23": "327WYhu9wiaAZmDiJjJZf4prfUaNSqxna98cNCXPRB2gbggJLAgjKn4qkT5yrbN4DRGmLJgqLH72TZkgk6VJyNtn",
  "key24": "5MYy5epy3jw66nWhq7HCJ2Z6bmmBfotfphmRrtag2uj4ArqXQGMxkaRRKyVxomiH5m6JsJpersq6XZPQERkRGTTb",
  "key25": "3JyPY5YzzW3vfbqXBiKFrR5XGfydAMDdncJt6p6roo3xahTCcgzLNX5JGcJD6S2ZLV1Ac61CjSBv3wynLAaqpnk9",
  "key26": "34gPzNwwVV32FEDdVQGvp4RYMRRVTtGpBmVHKMDuyxahaPSYjNSuzvSh32pgTyXXgUyupFveUignf7UqCozxhqv5",
  "key27": "5hc85gRLQChMV8oPGBoDfhmybqRKbesur9AAez2LMDkQc5LWDcDykBMKRZjN2i3FHvRk2Hs7KesiS8VjTSRDEtDm",
  "key28": "xTcYkWR1ccGzAiseUNBJCQ6MzzYLBUZczNby2e82ZR8HS85u4ikBitSmmpUw51id1MSr6TnsrFB1c9rrhDfQrDU",
  "key29": "5mbRk27Nk57kd5SY8BY7ih2tiQfYcaohbXu25Hft8rFcaKV1QsjaA14kzyC1tgtgPAZq59wZZ6u9CyeHBCykDLm2",
  "key30": "4YwSDV35uxQMhDNhwcCi9FZpBXHj6WXcHibVQkY1zHEBwSmbLq5ZZoBRvM4FabBHxZUY9EqHPokXZBt2gzn1wgQ9",
  "key31": "SkngtjrH2r6Ae3j5t7PSTsGh9HkVWwFFfS1SQqwfyfXeApVu2TPbe4BK6fhHJaeeZqngetPtVjJZNEvCESBovaM",
  "key32": "5Y4yzriGwaZ2tSsadRekPw8ntBjUkp1ofiaKMCXo7ZWTvcda6bgboj1huidsp5gaBmDEM92By4RSt3Sog2YNXwff",
  "key33": "3FvYy9sumk4dBTMkqHDMAmFZxrBNccGbBcjR5ag1DcWsvmQpXptRTpEgqgy8n1RWArhgAz4EsJPMme4DubpXfJFh",
  "key34": "4kzGHWtcJPuj4DgZakYuKf5DcRS9K67nEcsRf5r2LtSsWoA3Ffznij7Y13de3w5C2KZ7Y9shFL9JWZGVndr2wrK2",
  "key35": "2k6hQki5DheqkFnWD2hSRUUxJ8WquDbiZCFUE4GnuRKgDjxgaDTbtu8tMuLZSbMERLhtGwUrZT2XevS6U7o1gv1u",
  "key36": "7J3oYEudtd5VvKnn24gqpdgkUeCBTVNmWZi1nJCZmV9cpmRRC3MX3YHsba9kgj56LbD294bDKvqdEGf6XQ4tc4S",
  "key37": "3P63XXh3hx7VXB2mxy45xZLHrQcchXmLvNpefKdEQBFc99FiiFMGjBKYazfJZKsWfH6eDfEj6CLhVRw7pHB1cYdt",
  "key38": "2yCYxCgmQR189TJuYyZYMrfX8b11EWKqrhGMUc39LejXHSeJJLcWgA8ua1cYUnu179zzsdxEiNuqaZ17Czy6Dk9G"
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
