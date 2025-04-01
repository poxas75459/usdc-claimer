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
    "BateQDW3PMUs97gsk5LLC2UzQ5tSBxjJ6tsWsn5RwoYy4WFyLE89vKisyX7nv1ztKpAeY9rcs1q3BpHB87L2fRo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cTjqf2KWxXkAMce2t4AosY9ERH4MTHNYa9NLzvU29BLL2p3h7y9m6XMR67xdYW26ocpWBrM1LTcGHQ7guRDaVN4",
  "key1": "2yZqZUMqEuzDHhkSrjmU7c7MHXiRzKkPjC9mMVoDeWrsw6LCch9oDa4d93Huq6ccbXBpvfXaUyx8odnPuDmpV5D",
  "key2": "8Tby9oT2jhNCwZkLmsipPjVG1G5QkmYpyezGTkGP5B12D7HU18KJktEX5DCWhRTuMd91AEBy7NfQUWAcwf3L9kZ",
  "key3": "5sVDcp2tT5QFmAhCnpbYHRcHU226Savz24SF5zKCPFQNWou4UrTTaMYtDcSTYf4LoM5kw4zPdrXcTv3bgAMVLZec",
  "key4": "32GoyyQTkTnnvBznEJGnT9YshNCCWkmexRvMrR3sVqjfF5bubT4NCZYuTAr4oVveerLESFmkexN1dioCCdm7dLPo",
  "key5": "2cevHJuFbE78j8gcf9LAxCR1RtfjMo3jRVhfAHvxtAf3jBeD8mWXD1SuJDutJQW1LXof9HJYFLxACDiCo3cEnidh",
  "key6": "5fAVDSuTETxiyMH1odbG9h6RxLv2FXxNp3u1wEwnnqig1TYoJoeoCKAhykV53rcXXhjHb9JXpRHzVpgZW1J7vPUm",
  "key7": "cCejzRygsPPLSkj1ioEhzJ1ftrFGHF5XpNsyR17NeCEAwamQezVLDiVGc4ya6ZLRQKhoQQvVJF6LsvAWok3uZH5",
  "key8": "3gdV6LAJdcbuB6HJy15iEBVG2BeDT7WZgvdvFGUbjT1C8Ct8Qd4gB8PFrBse8eJywRgRCPNuNWEcbRLQgXm5gWN5",
  "key9": "3gbpdffAjg5uRA1ESx96S4pFSDj1KFc3DusemiELSffZyRzYi3N9DboCWzdvxpSxGnaH1afZgfQMcVQqaMGKhaiN",
  "key10": "5cM2i1S23XRafGETBse15E2DARhX836az5ee6puC2XVs8hmg8aQJmqboYwdmKcb8kKNA39SWDeEPah5U3uN35n8g",
  "key11": "3ceJEXpPiFFhX1YwgHGrarMMfXMzRk8jedWjpXzCfSjxijZEo2bEdPmZrnXqBjafLeQy24FTaY3kxTk2xbgAxCty",
  "key12": "3855quRujCDP5JeYEDaTGnAgLEvoDqnaUYe5Tvc1f9StMYmuGatX7Hznar5ZtTmWiZSHRgHWkEA58uAT4xHQeB11",
  "key13": "uXMbWtzm9sMi2i3pGUnKu35DYPaFBEMuWVP196DXgfgCig3tEQEpxJ7qPhLW9BRg7KA5Bwi6a568Kd5ZhXV7Qew",
  "key14": "48AcdWTmW9guhNhRNA8CSyoGgRFQzQ4tpmQF83NcH5nsk7myevf4tQbtE9ayKkS7V25o589K7TkjZnKNwVQEBT5e",
  "key15": "2DmTfRXhLfr2w1UdB95rxYh4zhTCvRwxdJkqKAPXoocPnN9N7BfPZc51qKPMgsojP64LgLJsCx44Kt4eV6CfUJaG",
  "key16": "zxdb5r5D5fQkaMTAAoQ6VvcokJsEX51nmQCiek8AqikECYXcNvCuTjgdLcjE9NFhnpkw4NbWxhhnr3Lkt5NJ1Wb",
  "key17": "3yvhAZM7wtmnaeDhn1SwKkMsXdFh5rPPGWfqem92VsDkvFr7cjJFwQmvrqNfShyKfgjP1u3ZmCPGXTPqsXVkcQk6",
  "key18": "3VXFSDmCVqJ6tUG1LKi6pofXj9RxzuehNatQVohqL8y9L7jd8qFYmuM5GzgsqqLZxydUZxNn4J9NjsrVzNjJTB21",
  "key19": "29Mjj55YkiPiWadg43i2LR1R16JkaYHnbru3FroCEBk4FJrdsEsZmSxgA97c8pcA72CquXqGQS7zYku4YTZxy6e7",
  "key20": "HNB8zZPXJZKhYR7SiohrmGtmPRSvDpoG7TUdXuJtjiSzXBakvd7bVjJmGDuFu6DRg5BXQL274Roh56eUQvkiDnA",
  "key21": "cnEvJN28ZznUjXg5XVTvav38pq5rySkFBu39KUSztLGppvVb4YSZPzeKnHidMi9NExpXxUkEr1HTLxsjjbjssio",
  "key22": "2Frx19ZynSBPmDs945sd9n4BZu3As6m2Ttrruirm6yNaG4FCLLDeZNJn94CP9xFyBDSQGMutDvdZd7XTMy5xAzEp",
  "key23": "QjjvJjH6Yrc6yuKg5ccFEUuBukXLqiDjhg2u4nAKkyHgPKGrBGwwMoxejFtBMHrphaf2U5cuC2wgJa6UXnBMjXL",
  "key24": "2Td3MQN2kYDLz2DkdP7gTeh8xe9BCKSv5G9QmXXhepib6r9hcP1C1WBRR9UG8KdTpGSDNA91VX2XmGbEo7bvurQ9",
  "key25": "4hVeiAkYUARG3hZoNSAdSWK8cxu8CTxBXxomXzEPoM9bTBZTBG7fhENuaZx4164hMEfyTD1Zi9nVd4tw4ecwPCCB",
  "key26": "5yX7hZ6hGP49Knesv4enDdhUeqVidRNfvWUKGEtJCDg83jP6zNH4Dk8JNH9gyM4FFwZKHhyeZst9PFrkLNrjRHNK",
  "key27": "4FMfHsPZgDJuLFNfc3PdDq6Zu3mzdLnmhKr6LuXFwk54ZBTQsmfmSBLtLoeNcnG4mZuA9Pu3pRLhNQe5XUA4gpur",
  "key28": "2tKPNPa5pqNGwjN9hPEfsso4jjCKBweBHjo69bGF3e8ekwuQKacwinP2U3jHtoh5agiMhu9MqDWF7rEUP7UtR94D",
  "key29": "2LYwfE6L16SNGc3Qz1BXLghm7DaM349b69uWz3EjGK8S9fL9vvnA7qTi1msAq2QL8wBWMf6QAbpMsTrPL5UEYXJF",
  "key30": "2tfqSrrcLEVrHLgTAFjSoqbgjuWHADotYPqBRSmvGTLcTdbQJ3quyZ4hMwXRtmLhy8PdnpG3jy5cqPA6EUYLdYQQ",
  "key31": "G6g1tZXnyX739cMgdEBByJ4kqhZM9VQbihAPTTt2fRa4p5quy2AaYvpV1Kzuror5aUcNxBfg98ZWB5NvMGjvmbU",
  "key32": "4kNfvva7zeee7KEHN1KAyjdHjHNZF5n6FvYPn4L5jESLTj9HCabKMKhU4W8DzVDBeHhD6ToW9ap3BpExpgNQxNRJ",
  "key33": "4nJUvFajgQ3GVgJ8NdSvCGXBp3bTMYiHt8t4K71YAyu9eAuusvwbTSxewwmKNeixZPPTmFBLdwVsymtjuu6pB6Tf"
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
