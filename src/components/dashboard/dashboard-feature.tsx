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
    "4xp1nfJjcSrKJPecG6i9USSPepxngQtH578EzTjEsAsAHWBaRScYEsXN4xqvxvXF1ippczDv7Cx4ox9sKDH1Zru3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wwNAaWPLwCaeCMhYzcbFtWGUTo3URNj32gfbvwnCvoe12a9MvwMPnRt2vFPiUu3zm1Dtvvrj1pgUTQxCXLvM72d",
  "key1": "2GuLcGvo8dtHfhSGEPbgpzSwFA1hT3tpydvZAjfWQzjyUiq1VqKquogGM4E2V8kiXoDYan8zDgHeWwoZ6tvrWhrH",
  "key2": "2Mdm7AT2BgrhGiBdFf463wiFFeSBYNwaGqhKD5v63WJV8eJyhzcAkdx67ievtp8vgMKBtxVejaVaA86EFv2C7xfp",
  "key3": "5zxfuJQnUjhJqYjG2QHHZ2BZu3bUDZe99EPZWNC17UqmCRWvnVH7QRCD2UMohmFFVFWDCdRWTsgzkbP96jpzi1GU",
  "key4": "5aXamSvWddAvh6p5Euk7D9JZR7RLbktGg2NTAyp7vqZswDJAHRL5npPzDjdyVPdi9Q3NPBbasLJJZoa5NnGqiURf",
  "key5": "adQsN1CZppmtqeqPdWvoLFsKtNcXqaFLrU8uNt3ATE2WY3pv5QaphS5fnGEXT2Knm8MCspPF9GVVp9sTaErrebd",
  "key6": "DNBEaY7dvarwsJiKDHdj13RuJ4ZndsrkZQNyjGtg5at5MXs5SUeZf8Tzr5gES1YNXkoweAg5X1UugmeLw6TKEt7",
  "key7": "4fUrhz5iXbU4hPCMKrUVMBSW9sq4yUjdaNYLYYQrojUn3qWz8bzo1WsZMGcw1S8YEr9vgce2MCBBa4UDdhsqC95Y",
  "key8": "5EBqVYYKkXqr2buXmsQF2j83TnxZ5EV2mZB4PRJEvJMkf2SkpA7oaGAdsQmRC2weeXfhvhg6yjbAtHUuUJHbRK5i",
  "key9": "3pFH3wfkDVWQt2jPgEGoUTKEN29CEophDjd9GWvxzhenyigkTZzcRH1P3bGiqscBsVNGpyGJfD3siA6scg7G32d8",
  "key10": "2fKQahUesjabrG3h5SvAyQxkFcMxNbtnsY9ArmYrEtUfKhX3qkRU8PgdJGfDwqUs56aMLdHq4ZHVWdhHPKzbbTVU",
  "key11": "4JcNq9NZzjKzJrZCQEGTCZcZaEBJKhrpVMPrKpdXarmR43BzwGXJAPR6WeiXp7ivoHzTGYC7ptfaasSVLeXspVru",
  "key12": "4MMErjSe3S5X5Th2a2xWzn47EVVSAejB8oV2pXPPmUVWXuPEFSAtcX3yVNjGLjt2zUdx7gZJb9VmdfL8pZuRHeQQ",
  "key13": "AfQoW7iCiqwj4DrrEoy6JGgMwWH6dJRZkfNPqtvxxfFpVo9cyCPHFsxuCyhcDJMYupKuKVwhSdLc8fqcQXF9cLo",
  "key14": "5ivvxby2yP7kTsNsxykgegNnPtwTH15e4HUY9azz9Xscd9FZf7k68Qob71w1Qf3SKXGxRwRoy7arS5hJNjMCvuMp",
  "key15": "5SGcvcBqk6eAZovYTEkgNsSxmcTHRmuZmPKmT8szYxz6h4c1jVVfCepU5coBRrVEM4w1AF4hpkPk6ytUMyEAapcD",
  "key16": "5AHHTe38pd1JeBg4bPSuX88thkhPmUVoLNMyabK8gGEYpGLQpC447fzRDotQNqKjhx85nCJL7MzzPqS9bM4ZNNkK",
  "key17": "2Uujqt9anMfb8PrLZ8nBmKEuvmJ6hr1potuTAKSpcv6jzFt3yAp3nsUktRvco6FkUHM3k1NG5uCnfHrDRTZDXtfS",
  "key18": "5mFaSwhV3MjriKkXmHdYoSqW2SnQtrQuZz89nJxzx4KRUQ3YAmTqQsd4kaQJVmMXpvsS2jUtqiKPE3Kz2NXraW85",
  "key19": "MkQyDEE7VJ15SgZ1WZY7ZwzcZ4veDcWFzQ384BbYn97zUyymeERriaEg3pu8pCsFV8VUEjZQwk1RBDTD83LKLGi",
  "key20": "6354L1hxG1dY8PyGtYXo3h6Wq72cQooRZw6zR4jaKHB4BVMjbfJfEUha9vDrd7TFXi9yVG1mNX7f5nexCiW9VVsw",
  "key21": "3K5EPe1eSkFDh5Ky7ukEyRpyriWWYVSN8PqCVzC4uX8P2jQwHUu4m4eKYYDT7M3C2PAj1K3ufW6y9LJmd8KhYZRd",
  "key22": "4sD4vEf8meVevfkLGkW5j5YYKo8Wv4xtZLVno1sqvrzis8GX46vva3TA7CQ8KyvWpwN7pzTD6m5tQgsWV5hk5M7y",
  "key23": "65pdNTRcUywrsRtcB1c2viUvp1sJ1R4uJgpp3m6ysHq4P2tQkeM1Fy5PpUmMVJ5kCJSQ7rE3mnYAAkQcYcjSiHgL",
  "key24": "3Jj5kLayCQvGBqqcXA3WHuM9YyzAbxcrWkZiDqEpCqeJzDsxptEsX8uDnGLDEiBvZdU58HoSndDnHpZDZ8eBr4pE",
  "key25": "2CWex5bmy59AurUvWXHCfV1v5d2EWxE6g7dQ4MxCRPfa9kJf5tvZ96nV1Ljb7BNU63QBCKRyiGdBDdKZLmbsQstZ",
  "key26": "5SpD3EbjZvGY2sLfxSogh1KL2mAFG2f5LRX9PJUeFmqU7gmEBz1H6uSVE6rmX8zHqCnxeirSt3pbnYPrFgBq2RvG",
  "key27": "51sdZ7wbUdH1kdCBqeRQLWJ6SeASf2c5Gvpnms1XhKtGdVbWHckHn7ZygpryG2iYr1BvtAeqeRrij8E2rfwutTk9",
  "key28": "4WVVthMXdbFjaLK4xdBC7EbUnJRbe1U982sBy8PUfS3wunZt81cavxT6oHoHJv6yEU7aNZQmJ2Jk3ZmqtkkzNhuX",
  "key29": "KFTgm2CiJvtDFrr38yvj4sA6KZBqXxATHEJMkahCnn6w3R7ihV9Hw95GaDsFTWbgSGG3ipqkrJf5ncxZreU9vx3",
  "key30": "4VJbLKukoySNavTYNniqhsCekoJ3gCUgTbGRc7ejGMaDZ18pwdXstRzdCavcGULoJgH6tXF1J96sa5ZPDteqbHuV",
  "key31": "EjQy7pYgrpWGD2vEPovLBFbDNrqie4iYeQtj1yGta1noHMhHjCUqLx3NBTaXZ9gX7B8KoDyoG6qr7jZjjraqbEe",
  "key32": "4mhLcSJi5bz6MSSrjsRTWaQAoAifaxyvxUHEq8VHFtasnx1LL4SL8cvKModoqkVxkaMKzqs56thMNXsjrWyFpfYP",
  "key33": "3gCPq6rwBFDRTVWhRLFpcUmbk49keeAaUyokKEkuVa4iELBq69eVoVQiQNyH73DttixWDCkPK3fe8zp9ACeXoFJo",
  "key34": "4m3N5C4Gv4hiowLRY1KGxUK3SCUVnqK5UXPTCqkiaBQVDvEZuWVxisFL7avehY2ewYgRNyfij8bhSmSXjvtGL1bJ",
  "key35": "2GUMZZqiuCGQXpgwTF8m2Z8b2Ztn2X6tWNXR1Ye1fKhU8bLKh7Q9KApzJfA3jzTcSTDmhMz28VNaqf6R1jQMzDXK",
  "key36": "2ssVmZYpeNxYjPM4LWzuq7zYY3ZSS8bduhPRSzKw16MN8ssEjPpMZUiVTA5xrv7hSRkUercYDVRki1TbVCWpUFUj",
  "key37": "pi9NCwngbzobgzi7Dk2krXKJffR1Te9kq6vwk1tKMxnERU4x6CGC5AficcocCVZM7u2d3ffcojFTgWMgQC7PY4P",
  "key38": "5XDy1qXyQ7Xpr1R5B8rUzANCncJqsjwGS8gsWHaibgP9kd7pCYE6TbbHZJoxqvudkNGYigwjWBBANzTMtpZP15hU",
  "key39": "5B27ocmS2HbwVduxKhtNhwyiDQpAJME1pFdyaUrHeCJZ53x6DkYEryrCopABoE546wDJLgXjsws1CVkggXMQjYCA",
  "key40": "542GohiLVW7e3fXf7msuLeMQ3pVP5GDPSHUKkfEsu3jgR4LJsJeVsreBb6wEsk2b7yvc58JxZUHnw5cB7L2gDEvm",
  "key41": "2VLUzMVN35VWnnSxJjchfDtRMgKooeJsp1xzDWJcUNqcnVqgmrjtaoybH3HgBz5qeV7Rcpsds7sD1KZNVNbgsBCe",
  "key42": "5hVDSZNsBJHwsQYRBmYgyd3tUBwSyrZ4jvuqNYvvbUbLY1a14b67GMmpj1wv3q5JFBzGBUxEdrR5H8HvE5m2APTL",
  "key43": "4GgurQKoezfLnSm39A5PfXVwX8qiJYrHwxGDWffp68hR3pkhwGE7b3o5RficvuJB6qP2MoaBh7JQkkqRbLaRrEYF",
  "key44": "5g2h1U6JiWP8sXVYnyC6E9sbfNGvL7YsUSZ7fxM1FxfygLEMF3KaeGVf3Njsec25X5MYRNDByhd4vdpejJQKvzuu",
  "key45": "3D9kuPowk9H2dF21TnqSdtYNhZ5hCfXjDL8n73JGwz99piFSGnfqw8bjHp4Gb2o1HQQQASx9EfM7HJdJva5W3EFA"
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
