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
    "3UrTDrMFA1U7iwENLFfg8bK8c7LDs11jDbxPmb8iM6fQMizo5G47tNXDN1A8qRT2BW1ozABxYLT2uHdjhyogaW3p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AzDcBkMBnVtBzavqAMQoRGg2276x4rjPJEYpJzojC8t9Bp6YGseWXdKWwUNVPxPj9CrUvoD9zp92rSfnhN9PUEj",
  "key1": "5bVcMQ6BzXYLFqpTfBSzqihNFWVitVbmX9fb9NmN14EKGbAUEtVhi6Q2L1YiTLiWPCbKxfse36XTD2gvjukjMCiV",
  "key2": "5REsta76VCWF2Qi3zJSP1ZCvQKG7GKgzFBNAaKAR9J1BbdwovCKB1kUPKr2qKUngd3RziNfz1JDbYAys2HyxUU8j",
  "key3": "5jw2HGfyAk11GzZYF6DBTDu8w4sc1kcxpecqtnivEvghsjzv6rx95WGecp8XKkGjdqufFdXZ6XBTnsN4B2YDFR1n",
  "key4": "3d1PzJkfJNgoQEkpNdi22VLmQF3SpfavyFuRBLwBvC57jArrfMAAT3tK1zBPP7CAAuHN5FeLwDaxnWtqBYRw1PYx",
  "key5": "2MNTEDXaJSJTXvBNPu24oVTJh5h4YRh3kEUuz6VrkRh2zD2iomcgTw2mRvmmf1qdYuA7ghfSeZNJwU87PK9KaH7A",
  "key6": "5pASqVz5T5eonnf8nU7m8rV22fQq8mniPcNB1RxcFDxcWQEERxhPviruc3sdyW9Aj4oFM9Ly7gUdzADcKvgGzhhi",
  "key7": "2vD7RkvDT7jAzzNA7VU9V24hg4rCjygZ8b6e7JycNaWSqfxUTN9iuTttSS963Lx42V65Pa9QurN9qBz7pCkSEJay",
  "key8": "2zg7kvgHH6mrErWVU2A313CGTdFpnZEFTv67NNpx2TRC2wiYahZSL4j83g2imiWCee3JGCgaedyCpMkgLLiuJggo",
  "key9": "3fmaxHCW9MyWPEpqnTg7Ey3QEpBxg4eQ6pGX1VdMR4Frudt7X77DSdoTAcNA2DU8LtX1rUyH7mYJoxtpJJEY8PM1",
  "key10": "67fKadUgNsBVnkvgpmR2vvdbLbCSg1U8kaHFFXPY4J98RYkyafxrD4T7vkcAePHXXVqiPvgpPpNjzparcYSmDGxj",
  "key11": "23y6JS7spfhoLWZqeyz8cfYpHXHzDLNfh28YzBg3SCM7dVwFc2uTk4fHsdHDQsZ5gYBv6vtTeQkD486gktNiftbh",
  "key12": "39r23kNvSsGKzZfUDdrzn1hEbbPJpUzNubc84NWzrpqQynqrAcnCnHNtR6VsNywhLSwWNoBRfULhaAadeRJTx5EE",
  "key13": "vXrxPZhTZBWMaxKgmMfkJg9QNhFudtXvHakY4K7kG6Yp488tsw9TP4a6qnkqErHv8avGXzZsYVqdEbq59YNAF9g",
  "key14": "5VqgyBt6eyhKyRpXt1wqWi8TJ48ujzMUuHwTQUVRovvQtLt5DzaffTxbReBE5C5wEpmgia7ZrxkL8BStnUVx4Hca",
  "key15": "56HqbkTrcKBmzrE9SEdQ6niMUXJ12FMiHnSmckzZzGHjQAARrkmBxMZgSPJXTpY35SR6FmCZsvrn6fq8nrJwN75T",
  "key16": "RLidgCfjjDFGNMRt8wBkxEpzeyAM7bEuAFoqFfRhTeP3b7csUB3PJYMB6cu7DBe7wg6au3npU9UibvwFLs49ugH",
  "key17": "3H3WtFg5W2FJaHzNX5sPkTjdiWtvbM5SkU17YZJ1yot9Ktvr53UWipkf2kuRk8bBMhc2DH8CvVmLMGsC3x6RjvGW",
  "key18": "4gnbaUGmhZnH7BQE8tsBx52Dwfcwv9GihpTzpcDwBd1QA5zGg4by9XXPTcGCR3kQxQewZxVQTE966hFMLLsPAHvw",
  "key19": "KX8LvJJmVZgS1QBt7qxjzi7691LhDQcFiMmEpg2mj2w8ioTq5b1Q8j4cFiaAdRygCtgkrqTjTmTFrHmb6myZep1",
  "key20": "5Ju51EH6C6LBQgKQBq4R5Jv45Mw9xJoY32FTfomig6YLDTN5fuRBptFwm3ChouaVae6kyaMsAsV8juCtgbmBoApt",
  "key21": "2ZtQe9W2KW3NUWMm7bjKVKiAdrP7Z6xhmRbU83UEUjoDa1FGunRaTBMMuU1eqP649FXWzv9SKaSHSJsHUtveKrPx",
  "key22": "R7ZuNpuZrGtttuw2PS8L4Dj2idiJZMpdiQyFtVqFabBNDRSedBYypF4EmMLt544ZsLdxGDR7Xd4fkFJT2Ed8kCi",
  "key23": "2hXFWDrhQpuvtH2jaMCjeZQ8sDNybTDGtPPrJQPVr8NTrGgEpcAUNHLRyJt1zyD5NfTj7xJLXzJ3iL8mToppYww4",
  "key24": "3EU3amfFiZeAAnE3gRfzhjvYeTZRnhhDkmFDfpNFS3ZhAeCPeDgXkJ1jf2fjD3i46L8Kc4rGdoNX34hDBrEfKniH",
  "key25": "48ThUDkMoNDSwY5zGiz4MNGEHj6USbVaD2EToj5KWadnfDdDdP16chcho97odcJz3Fd7PnQay8fdTwj76sDQ8xQT",
  "key26": "26AvVZj7RbAE1jE3He9LmEFXrDGQtbsiRcqjSoADC5cDRYLzi6FY2WtFDNCbPL2nUXeJqQEZU8UUQDYvZckHi1Kt",
  "key27": "Q929bfVTyXdU59M8y73MYmThkyVtAizQc6SCLTTGCemKNzjbA5jkuGYzgnjZjaNjhupsT7xxEsuxHnuvozneFGY",
  "key28": "mjC5kDxDeWt81PbNw46yQm6XWtCPaCg4WvaoNCgSC3MzKxj61GD1bTbdSsQVJGdyHt1rJb5LAFoD3DscpnQrxfB",
  "key29": "5DbfBSoQxVEhbfsJt2FT2grTKXeBNao7Geumbx7oyUyq4am7Gr1BGXQ5uNXq9Xp3bkJffQHf9eG8DdhjfS9SinBS",
  "key30": "3tf4MS7gk6KyUTmfiD1CZLmaJEMDvnDbRcjA69cjBJTvEzzCZ9pgPxM5mxaanGTbaU36JmfHD2d78amVWDFEihu9",
  "key31": "3vacWEQg61t9cbogLCAVyEKmHYACZTxQjCaK6KyBUzwUmUisrM25uJ8Zfe6kyVP5VmJbsnY33hUd4cjVcmpp71tv",
  "key32": "5EYWKgSqKS2C8rHJP6EMoSUDmStReaKUVEW3QpQdyBherh5Ku34ypzeYNeZ7aogyku52p8x51MaGt3LQDrxPTszA"
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
