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
    "4pkRu1GVRc78oRK3LSaFtvLdiRo8YSsTWffLZeCDqnnGXfau9BwkCVa7kpcy4mGqhYJvx4uVUFQCPTtAQuQaJDoQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FrmUnKDyqVgSa48e6mKXXyYQox6mVveHS5M9Xyv6PuFuyjs12WV4JaJvGPPvnUcmAUKmPWaZQbxy2Bxe7qA6xEa",
  "key1": "25wbFnsmFRLC3Jae1ZRQQrpsmsFS2KfXjQ4sTH7CR5ZQ8LCQMkjksS2ksMowp6vSXYj7etPFw3T8oq2wQ8bYNy79",
  "key2": "Mv4h7ppwrJbwmXLQ4hERthwwHxoohKvifvy8GYsK6LRXHNG8kdQNizsndsf1xbUzBHkHPKPJrMnXgHAzKpHQZUb",
  "key3": "382uFxBh1e1Z6iEqrpjXmewPSHKqtRYK1d9nwsBm5kkKVaw1KV2hKudVrjubyUzaVYMJ9Jn1riV47NQyrirCodhw",
  "key4": "37xeBH5WxfazJ7TKSRUZ14asKjrvE5PzJJ1ZuXTmo4vUc5Dpo7oPy3qzLumfqVjZZVyGaTLQhbN3hiaHEnhtYvp7",
  "key5": "53UA8N94cDBjvEDYLt7WWAmW3tVvTCtqgg2Wh714PWLpNyXSNKHunpPG5v7a5dPhjpehXXeoWeDSkEVeBakQJrKU",
  "key6": "4Cm7AkvtdCWcTCrnbWYPeXmAYMoA7BiSND8DPfkYypm7uwGAPbCNTUoh8Gd4DEVyHXpKYyZHNqzkp5GkDemnxesm",
  "key7": "5ubPV9TvqEDETuQRvGvYTVffyPVuCUV8GS7PPP2awQXWCTXoDpEGoiia3cKTbZ8y6mwqP6sUU5DzPwMxV2uJwtfg",
  "key8": "N9g7UphrGohsLKJ4SWzsQKRMQRtFP2cwSF7pGNXdXN5v1Ms91SFG9RWcgGUCBCqrCdZw99gR8GLbkKYW7NJLe1b",
  "key9": "33oYdwFd3cz52s5qJs5Yox8KkE8xaM1yYicvqNkUG6TJpSZP4NVboZuUNw9g7QKzGLxCeLtm59pser4B7unxXm2b",
  "key10": "316dtAos8ShpNaEFeKsqPxobXNTt5NWj2rUXKVcCsTKxEE1trytqnrAQGYthzwMJoCz5Tc5jkTsvqhRkEH5mBvA1",
  "key11": "2n8kfPttMsbH1h7NY4SLpirMHYf7XqRurUpSXjZVMPMiBrHwbD2XAGSabGAJGNki53oxaRSYmyG8kqHkbeoho5Mn",
  "key12": "5y2379eH2izA5GQ96mmFMy8naQiEK5ZNGYcjDakvA9hLAyhSKbzzFbBZZrZd8d77h7ybY2DB775yQexom7FZUQ1F",
  "key13": "5iTRwwUjov5DKJhVcejoxQBUy4ig5yiH4LfUykq4YCwGEyqW4xmUgWwAU6SVgApAw4DcyTkUNnEn65VF898mhTz3",
  "key14": "4r6HPmLXfWBhnGmvQJ2dzCjrFvYes7uz8h8MgTSo1SgK5vdsifb7ypDuyAy7CyHBG2f8dcwJCf5TN1BJ78T8myf4",
  "key15": "4ddCuC1BSgnCpKbCnpYL1nTuHAv5RGkUww94zZ38vh24oHMYkMHZ5JB47UxoFJqr59kioXupqWL2xTEGZ3zFvvVZ",
  "key16": "3szCdmvLLBtRiqUadUjg7y5zE9xKR71mBscsXGXwqFuq42ZuUVCUfoceNsuUqrd43C4ZpH4rJjg4TNXJLbnC2HT",
  "key17": "2yoLZi59bSgEcD8SdniH7KKkh9bbu6eJZigJkUwXbNZ2dh7SrojPPyYUvy4Fqn5mJ3BYRvRCnXJ45QNYTk2jUY5q",
  "key18": "61AT1UD1BMTgX4QLpPP9QBynxgtqPaRUfNpp7QBjVGLpP1gpi5cSTKdXaN6eBmua6jpUFDK795vXWV8LPtF7WxUj",
  "key19": "2gsBwHyVRoAjtPi9spkH9xY32NKt778RuhTWhVgTzSj3zrrQgvEWJpRepYZfrezBd4xHfaaR8KgiKCi4KHPxz5VM",
  "key20": "4VxmjY9dB2PbvAGQsC6aLuF1V1dwmdNP7uATeicVFoFqryp31GJ5FfPtt9uyeQ3rhTjBRZY3a8ji4NkxvseJmJm3",
  "key21": "nHRvNovHYSMx94Fpopd466ggs8XuxmtoFUMbzMwTSF4JgbHRckpv4YDbakewcbS7BwLoozDMB4uBvhzZD4jAmbm",
  "key22": "3JNqd5S3CNFMP9nMKTHS4zh9FhRPWzvUKwuy3P3hTigZF2G4RQRXTynSzRWzLeAA4To22RsJeWrT9S1LxL8xHPcv",
  "key23": "2eQ4f3dGQxvozNuoAqGnJcbcRP69JoHwd98MhF6WtBzg9mpQaf4pmE7cVuJ4SYn2ViopDQp6LziDnAQjLJj7nXmP",
  "key24": "Jc6dzvojtX41m7dx2AKH9aq5Q1ApQq7y1cDqjSZ3wbC9vbk6JXfMeLcqpn4v8BX6y8kLTYCDtiGd73cWMsjgYZS",
  "key25": "4n4ZVXhY2eSjYaffkD9JY8KzWyPhkfU5CQSrao2JF2G7vhE8Po3KuK1pVaZQTU4FaUhDg5BZCfNE7SMJepQc53wr",
  "key26": "5awfieBQ9fetRKiKPbrgjKmoPGGVAvK35ysepEqoktHHFuJjNAWQ4D9bbC64iisLweWPreAJeHFTPoFvCoRTaQST",
  "key27": "5ZUeXUmmRmxn9U1qzrJP6ZvGSLLriSCu2HABEG7347G7ZcDwsN83Df8dt94y3KDKwyFf1ZDcx5JrCm3L9Fu13cyQ",
  "key28": "yuFQutRAowR4E3vmd8mkxstNkAARHrfHxo19YmpGaT1PzA5jTeyMnKQkjMQUBFF52L6x7DNA14efkD6jHtJPHMj",
  "key29": "2uDzGrTL8sJMyguu19iqxNb7BQxFNE5ko5s7gWiXABYFp19w6Q9RMySwhvfNw7p69doMGAbGni6EofQNxDcGYKg6",
  "key30": "41Rn1CKGmGf8YPRaAsXZ5RxKThZC7VsA8W6GyLAWcsLakqedqL4ZwQxtPVnPm5njhuxaZLYAcXPygKNixTKiaSX8",
  "key31": "Rw3F4LkZZTPaLdGrh6h2E9zrhgzGBo2ARMAX6BnVMApUoVbAMjGYyfcEoC9A3tqsSDFyaDbXktysVsRp9Yge13k",
  "key32": "5mJsf6rcWQ3K9eeNLF1tvmxnhskqxjURvSSYXvyYuX9FNaSceBSh8rDCox84SMjKZYcCv478Gs8LAiH4UgXsiher",
  "key33": "46nxcKWnmbBy32SDT92rmQUNiF2gCRSbmjT7gKDwWKbycdxeocPtVGrheze2adg43f5meqsXVG1LVMzipiqqALHZ",
  "key34": "3A7QPr7SDfE8oZKvGrzXTbeDVWCDTfWmKGuogShjasKvgoBkUGNk5r9nQ6T13wTNpMA6upm7uguCpdxoCDqrjhtb",
  "key35": "5yQHcTTAJgQKDMyXrHmyLrsvvFThnnhCdftgwcNo5V3XxXvCmfb7dJ6q4EAL9dxfSTw4juDubodPAefVas13M7ZP",
  "key36": "3mLd9G3PpZMwB2Aub1LP6BfduLzgTGnT1GnmXwp43j2Ar4ZJwCboDpQPFBtJXpk5TgQBDmfpoYswaj4phet8ckM7",
  "key37": "4V7KWwvVhyHAjgGRJUsM5zP1JRPvNhkzNRpPv6jxrZFRWWm85McDLrJM5Vz9gi1FGjQ8JGK7m9HQNXH5x5DTWaCK"
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
