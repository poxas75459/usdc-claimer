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
    "upeKaa5RWjcHhzTDPDp515AmHLW16p9bh9KbxVXk5ZgYEukiSyjVnM5d3zRaocuJpQqaj5Dv1hdv42ZsfiDfBY2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q9APT2iDYvRQYfJ6M6SKhkKSV8qEFyh7JahiQ3NP6Sd4KTotF7P2q16ReUVC7wMASWLZcAreUrePuAjqbYYYZc9",
  "key1": "5GKsSSEToGVrxFWCXKa7PGeJYXK4uHhKzvEFYb1jXDCyUkmgMT1EwhGJuGdrueU1AYDxfyTY35Yr8B1i3hxjZ6Yw",
  "key2": "2gikgHPF5xcvwGUSptue25QcckjC76QYKznXQex5isrFBEm4r6XxUpxCmYywkrKePbbHkdui2m2GniZxaH9NtGVy",
  "key3": "5vdLXQEePwFLCuHKFsbMSEgCNYbPMyxYvgEUqi37HvtixK1e5wjNPAYWd4Z2o13WbpPsNyTQsm9GHVEdFzbZ9rbX",
  "key4": "24VaASkcXW8Cmex3jPSi6JCdY1m7UHuwZmbEPyQL4B6CEqq3p6eNL9uG9KVBtB4xVrdH61dGBpgdgcFgX8RKn6C7",
  "key5": "5hE1ep6KK4SMqWkCYzktKkk7DzcAvc1ZvRb9Tw2BV4Tk8XFCziyHAH8XaViejzSvCxvLLSgcZtZAJdgCKRtdtzU6",
  "key6": "2riABQEVjnQkUKqp3LyCcam6YGw8ockm9nTcr7kmKVh3UvYs9LXbAmXuSpH4Wmv9FPR7i7qyEjZo9yxa6AJNccFp",
  "key7": "2Ud5xVkJSPDm85vhH4p5DSgLfMMPRDJaufL9P2Mp1Vp4DEZZLNmkwLABqMxsgEWQ8MJRToezK47VmA3qKTMoTC8H",
  "key8": "4seJYxiG9yFkcJQToLL3LZts3Y5zSrYLetGyhe5eaBnBKE5ZW5H4rWJisrWn4wW9ugKHT9ZEopUp4wnguqFKqvea",
  "key9": "58nQKtD7V6bLmR7dkXG5nar2EjdSfC6YYonYunTihwinng1hrSP2mvriBxZG7CdZnXMWKiiMmv9r9TGGwDDtCcW",
  "key10": "3o3Pyrk4o8joeiaCJ9g3BokwsLHv6feQNLL5eracBfJXMCdjibCmmEVZ9qy39kqjzrkghYLf4mqAkeQjeedSHv4i",
  "key11": "4SYc4Cmptx5fA9SxUmiFiLhUrqxSHBG27zrTEDN9Jyau1gnZ3dQoRdLK5dzio2jUKJZKeNFremuhQYzVLX1ZhoZS",
  "key12": "58ZnWJQbooe4h44XyagnfduAoQ8u3cZeVxAZG7rDjpwSoHEej2dJhq2HBsLd1PF6DBs2w5TEfVT2G8iLsmtVY8x9",
  "key13": "5gN9pkDLhMbBfUKkLejjw2F9TcWnTQuBYHi1kFgKXsCgcf5jw1cwGfZN8opiy4yJgQCtrZbToRWcVpaAZBqJiUtf",
  "key14": "ggQVNo79st1knXA8cEqZwkHqiS46LneGibWA9HtkNmpeENFeQ6sHM9w95LrtFYQ9HspFQLdZQHx8kD3vAgBw8eY",
  "key15": "7MwTS1fR9AgVcTJpji3M2WyTrKaqRinkwCHGoTDbBj4R8kCDux3zFkg4KNfggxwJK1h8hbFsGL2G1DJmzvWpoFZ",
  "key16": "5oB8vAkLQxZ93EAw9nW81MFjm58GYBntxqro7fa5rRfTsw9in5dhG1Z8WbhVmGoAXqJQTFVBmFTtPiWV8q7YEjZW",
  "key17": "21jKP6xzcuRUDhhyuEmwECyFKkfVHm1RhdFrb2gk6Y2LXtcXsuUiq8dSpZdHScCau3yEnyXs5xe2Zj4f7i9XgZ3t",
  "key18": "XzGipgyCwVpP85GG4SX4ic9bnpDVyNCtqzVF837ahTEsqnKzznhJqBo3eNfPHu2LRYwBwYD5fPp1yNo67wMhQJc",
  "key19": "61abzcmRp3NBB53JZr2UZohyJusAamSVu8EKBa5P7GnypvbLDAgbLDauJhCi2yhxaxitVSEGuYav5oWu6WM5W5Lo",
  "key20": "4LjdbgrBdxVeMp2W2FJpusbMgyVemXNLihtVYVgXnkQ5CUK9XTmeQqB7Duxhbk3spGuStgzgYxGev9ahL8orSmbG",
  "key21": "4cbJMn4QxcyhGAfaukqve97vJGusrwWz2RLRsX2o8kFFfryduu6kkaZpwU6MpHUN7QvRc3vZX7Dxc5cmN1p7mydU",
  "key22": "4PC5GhtwG2j2CLK5WEYLgp4GQv8cQt82cEsxuwHs9AxowGs6muuMFLtDRszYTfhywgG8kLvjAT5NJHwh6P7W2Khe",
  "key23": "2yZdXRynXSPkmuP9einKoHYk3wmhagbpod8pizS3x24JinrYVPJoRFWkHfGctXh5bUSoEHzFkeXJL8YvaNVGGacn",
  "key24": "67hgkDGvJDzjeEebjrFtsZPpzL6C5oE8SSn28w5g6SaGtGjvRt6CfFDLHTt9Nn8XB1K2gtYkVQqZj1DD52pyBTdh",
  "key25": "3kxRGQJjEYZMR7byBnm7o8nVfejNuefAWUrNMQ6QHiL1uHC1zV9fpcv1soiyNa6fei2McFQzv8NM5vZ4W2PGLgfY",
  "key26": "5zVzVe4F3iUTuJZUBfhzcHmxt8Zz3ZXBHGbLbX5MMS56pprcuw2xXczjUorVq5dAU3Ug67ECPewAZSez3VwvNjGq",
  "key27": "2DQVivSD6fcoA42ucnHHrLghYcGHqz6KySguTV4Cn9Mq3iQw3Et3b8haY4581bfZLUguhi8STB34RUU6feJq9wgh",
  "key28": "5uRcmbvwttB216D7FoiQiAe1qV4LMJA5QssrCbDAVhm3Fm2vPM3rBe95LaKN3hj5jr1V3L7rg7eRGfMUqWbVq53N",
  "key29": "3aRh3EiSajBUiH9X5myuW6bt5SkxR13fbLYq5JyRFz235DfNFQDJwDNVmFp8UYyVSVHVtxBCzPX59wMZaqgBZWdZ",
  "key30": "3cmPtE79ivQXJ2B2mjwsfdUsbx9nvDQfTJVDnFbtEdHpjfW9kgwnaNn1bANf4cjUvM4Rf7WJkTH3HVRCHaAHARXg",
  "key31": "3pCZpMdSFE9LuqKbc8Lw1FecseyL48HzjNSGSM39GNupSCUxyKondi8AvcqieQatUS3FNAm8n185FxXcmbahGezV",
  "key32": "2m8umidc7wx9J9JubcQa3nmHneLdjcqHng7iQZ4XRDcSg8TKmownpKSfesDMCLjfeAVVZsTMPepW9c2a9nm5BGza",
  "key33": "2swM1C37fH7EVX4G2V3NgnuLfkjLqTkF8pQoz6oULRv72MfpxMRy1twvx1cRZEC3RDUe7xNomdL7SdygXae7f8XV",
  "key34": "moa4WiieEtKCndffqE7HvBZS59QuZZrvVcW8wXPJ9D1hhioPCvgZKmt7eXAo4TRZ3dm5CRNaWG3xojr6NsomxEf",
  "key35": "3hmy1nFd5EuaxmvRmgr7LcGYxmuCiadWjV1ZNGnCas2Sox6e3QvbhWVGPu3vLkztkmDEgAyd4tb7Bd7ziV9N7ePP",
  "key36": "58YAHNBZqexhA4dPp2ycitGHDviFo5nu9TDfCNwpRVt5tveEjWWLtHPgyWLX4p6keHNCrCjiS4Mj2edJhhfSQNap",
  "key37": "RTrrvAbWqpdci7bCBqHkpk1NoHpFon4tKeZ8HDKAodsR4QxyTHvrGUP9xoKCKFxB4XVW8pF6axRh2Z2jU5u26Fz",
  "key38": "49QhcPRgBtNc2yN4c9Y8dRVmfrBjTkwWRnsmK6Y1f7zQS1YZbjjzyZkoV9oPGaCitZzVZy2utcw1gHA1yV6XmEAq",
  "key39": "44hm4CMKMZceTorAww1Wmo3UrDdWuosbG8z4kvXzhBSmwAGigEZZJaPZCLLGeV8v7BGcjgUMn3ZWqzbpcm56XN7o",
  "key40": "3coHufgTATCGPQcYqDdAPLK6FpwuFn8doeXY37emJ7SaKGkUwe5yqRoL9fw9QALoQcFB7BLe8N7cVE5VHpRZi9Dk",
  "key41": "P46yFP9Wbm1H1hPWhDomwD5EMovQzqurJgjmZNV2eq4FdtrKZvzaqhVmMx85jPBz2QnaAHJSahPc6sDmXoCcbxg",
  "key42": "2U173286JPv7Qxud2ous4cD4JiEqPmofE8Rh1NxAvybQitG4RPgxbxsRSTJYHbDJaECygCWBJ3Nb3kpwWKRV8mDo",
  "key43": "QF8wtkkLfVtkHCSCo4A26TYuvsvqSuceG9z6Bm8RKybuHZBnYShTrZHPHe8tzWv1LmTKRdz9Ui2Rc9ZQgXCxvBp",
  "key44": "3jpGWeNRvSXZFbbozXKf9jwCSVZRAUTfW49wD8d4Ewmxpe2sTup1kERi9cCGkmtVMhpL9Cc1izZtkYSF8c17bz3k",
  "key45": "2FsRRdQte1SyJmVKx2MqPszP85GdxmwA23QbZDrMXAHoUrp23Wk8JHzw2dAo7hAtXJwfWCVYMVhNVrtnJtqSc4iH",
  "key46": "21yngNBtfesXrE4qduvJz9g6gJ67kPQ1vRLXR5e1DMWSJaCdFKNMZiV4T8auBKo7SNdjRPtH7XAJMrScXQNfDzL8",
  "key47": "3YeTcZbYtTWnG6WvC3avTFLRGdwQsb3WTVWCCe3iwttauhftaG2EXe7zdUeU3uLFK2kQxy6eu2Y8FzmcKxKu7nFF"
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
