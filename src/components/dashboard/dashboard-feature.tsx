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
    "4HiPmUAu69zuEdCZsX1yFK5sba1HLkRsLTt7GQz1gqrdtzGRRhnDbT2P6wp6Ur9Rpnyo7sqBSh4znfY8coeaargo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WFu3jENTHmqL3hjRNNrpYmJTLcbiCZVumgdU5DLzKtxmXE7uU41u5aiVPG8g8zvGEGJXHVkB2XGQqgNHkDvmUQh",
  "key1": "5xG1D1iT7Ao2QBkvhejL2JNjb6Pdx9UaRtxJdQQ6MeSoaoTZbEbda7ZhxLd5z4VZK78FMtRzt9R1t1PsbREJHsJa",
  "key2": "5gGTzFAyWtgUt2NTxHKeKZPMUzFCS8oy3of6j4vcc9SdkAQMJTHRE2ZMUWYrWb25YS6iPGs6vdCuXBDg4w5ev1KA",
  "key3": "4nCVQ3MPKyLpjVCav4HodD8gTAjhfZMmqcZfuysbd1Doguc8RhZBTwRwdbSMUy9dvGTqV6caqPx2jepagJYaZh9J",
  "key4": "BmwNrrHabQkwKt6CBtEMpwiToUqYKgxShqcR4LuZ5hmGeHgUzM6LtggXWCwGHZUmS6FR3Km3anLukyxWwQpcZZR",
  "key5": "4xconN1FMqG2ahAu6zrxDEDWdFXJxxna2KwjnBE4BLPhkGmySmcj9Qkeq3tmd98ffd5M4HXHo6ve5zRa7jb5oK8c",
  "key6": "2DWzX7M2KbSWod8McJhKpMB1wBYFp88syTihw2QKCsmRWRZm2cajZQUUMZPnzbakGvT1JXPcMwXe5M62JoYdxyr7",
  "key7": "5xqVCd6twcb1wUz9dBGfrDVKjgTcus5KsArSMynQW21TJoMKAZnWSVvmGtNa6tFvcHfkXkFdpawLQdsC1bEsYkDA",
  "key8": "2oKf5VhmVGCAav436ULKewTnzNzXXkfmE1p3dpwii1ADWMMuBiCbB6YTBZBs2gPdvbT3RPcTgQuioi3Syk2fAPbE",
  "key9": "2GYHmU19yH4LotAV9EeNFMGpe5U57wjesaXw372rL2nacCzz8i6YHGcKGHER2VttYc9VNCPUCi2ASX6o1krWXV9a",
  "key10": "Rn3rMH9TfG2k7Bov9U1xP2HFgqFj5z8EvjKhYBNzraQV1amQVsQQsbBRtkTG1pnGzt6HsAQxf6mtm7afDD4v9aS",
  "key11": "5Q4FpT69pEiEg97mvDnCc42nEqHqxfH6PtCmPUnosFCeEeQQCsoKEhXBuRqDU4asvh53FzmRo4ZD2bKqBgAKkHNb",
  "key12": "5UctP7ALWGFrtwttCPosjDA2PoVBco4w8MCWKH6xXam9hqov4UdHXMegv24nxfx7SP8oTephEq4rSZN4oZQQSxUD",
  "key13": "3psZpkc9sdp3bELCQ4amzM1MfrmFHvqrZyVvqGKrLt1an7Gug9yv7xuQxr8v54NuZkHfXu1Dmd8ijk9dStJh8YDY",
  "key14": "t2PuTcioMoaR3skP7EwFexPd8T9DdeyG8RVKeQegWFitnwukhemwN2Tx8ZStBjvXBwCwjJK53YkzcJY1a5bzDXc",
  "key15": "4o8QE7LH8bq4aQmENrsFJaoLT3kMi8N6D3tj5Pkjk71aKExXFT5EJKZZvVBCvsVRWFurUx9iFgTNJS4g7LqqTdU6",
  "key16": "2eT7qsrdGwU1DDs4giqjthtkvUThv57SiSPrxgnTqi1njvx18bvfNGv25a9NUUoNunRtxXvm4RiCFmksfPzfGtDV",
  "key17": "2EL31JMc5mZEsVicXeykDCikf7KmGvjarvJbufDY3PDuPVV6khjyb56wYN2ihHDjZBKuaFykh3za5tZ5ZX2p2y7k",
  "key18": "5WY6FM8aARgpMcF6sTqM2xcjdTvTcLfLFD8uesM58qQ7itevP9nQ1fjQN3UotZR7WHsm7sNu9yZL5LxqXJpJFyS2",
  "key19": "5k6erQyeX3ZZMRSa4QZBaP1eeoZmW5RJmHBEDXh6BuePLNpdhLntpUmrA13tnPzVZy6Kbi3Z5YiZtY3yKmKwEzgS",
  "key20": "39mQuDDqwaDwWpTX7VTorH7tpVZSiqjSUZSDndLp9pr97egJVMPZHoTy766an9CAdxAjuPH8LFMn11scfySMRASZ",
  "key21": "5yUo6WWnDb71S6iyZRcfA5xM7n6E9L864pXmWEay1tdM9TUnSG9WaLa72Y19sP5H56CKZwFHGPsZAj5FRywdTHh5",
  "key22": "47TyGg38uAwrku7aCAeB3M8ETWEyythFB48RNbMTZu951H6aAf4qf3KiN7ioBeYWaoqx381hKM2BWJTCspUVshG",
  "key23": "3m2jeKJ76oE63HFwkQZCRJBB3MaGAC5NGA9pTQTsu2iTJvt4tAs1F7AXzU2ff9qCjaBAfmn1QzvEV44scaXQkGy4",
  "key24": "oxpA7Znur2YXk7y1zLyQuazP4ARXB5DADpkhLTDP6b5iuFn9f8xcDJwpQ7xoiUg8tPsG8XqDEo8n1cPQs2Kj5k5",
  "key25": "5pacsdJQ67iP24Dgu3GwEceo2pAieL511Lb7C7KVnRmseELPujz1JREnkNUjoAkVvYzF1gBBk92UgpWtNRfD7waN"
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
