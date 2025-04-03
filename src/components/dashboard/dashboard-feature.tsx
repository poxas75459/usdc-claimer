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
    "446hFLAzP7kf6q5MaKTDTTtpFZnKTnLoDfopCFd6A4u5tZRq3kxWPKDf4S9a7NivWPkf7uj1pRPc6422nzceUdjS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e4bhW3VquTZwZdBNCm5zxuMgqZFUutNknTCER6MNxCV59P5mfiRXjQCqKBHY3JskXyZR6BVE5woGBK2MuiJH4L9",
  "key1": "2SiLjVAHT4NeW2Up8yJgYLH7sp4WiK9qCGnUcxKwZA78hfeHJHR7mPLNnaXZ81gTdMCCkah8ayq7Rj8grWhg6bhj",
  "key2": "UeHCYbyMJt7eaYjhAWgdfEhoBGRsSZRuBzHGtjieR4x8Jj8AcE5XXG2VMdhA8SGdsddtLzXMYeU1yh7TCYecE9K",
  "key3": "3yHgd8deZpwvgKur2iWojrfz2z3DVcijbNjSW9uBwQH2SgrxZqGzzPgfo2HxNWMjqWHYwF6iyFenkEgzEGz1SKob",
  "key4": "5GFXdaDqYhV3eRugLCEk3qU7MUKgUXyCkzQdQLwfgpnzJyyPp6X6vZtw8zgA8jDekPCB9P521MN3CVnzaSmzJ3oY",
  "key5": "4VUo9kdqYGH3yeHn3Rm9cCorWV94s1E9qijMfnSPaFLPsuW3qMmwyN2vcCGMSxi8dwEpA5g94E8oCzxhdpCzTf5y",
  "key6": "5rYkQK5mC9rB1HicAG3xnPEg7dhVdkS1eoLeFZkDPq2R2K4xkWvGaQKaKU79cnxWEG14934Lq14NrFQjEETk7Hr9",
  "key7": "3PYuAX9y8yLvMD89xpqgasuUhrofAhmayPV5vLT1T8SfguwvRao4wqZXS1Z7Q4PrseXCppNrQFgoCst1m2ojkfjL",
  "key8": "18h4NZ7GT5FB8A47qP7FjgWvh6BmkLHY5MAtd6MXDv8YiJYPyCweh5CKCBY6zuUsHqbSqV36mATTZ7CGuNBVQxB",
  "key9": "2S38c819f6TqthfWAWkZMf5ykBhygS6d1wmEimkJVQm1wEL1iKTkMEPphKsHT7TPTPTgWqVk1nV8JPRgAPsMRDc8",
  "key10": "NWo1BDpS3kHiN7Z9VRKgDZCLEepfemzbDoovzNZ6ZQcTg8SbqnsjfHErVBF5Do8Th63UkTm2QGfB9ZpJ8QxLXE8",
  "key11": "4UyN39YMviv2Ka6F7YA3dith1tKT2vfy2uvKgXnzz6ZUHBBvFvKaKGSVEAdXUfzXUKV8KogoEvoW6LLkRDTFq2K4",
  "key12": "2LS84dFDHhna87dAvQAexfeeZJPjZkTewUgtoXd9NRUN33gBdQsKqAEQuzkyPKxDQLASbErAS89JM9rV6BssUiZX",
  "key13": "2uqknGhe15kXc8SwfGKF2MAXTRCbWZmhNCQEPvDfVKS6QHGcBxRP13uCMjionnphmwZjUxV4bwbZyoQerfeCrytJ",
  "key14": "8e8j5ACTz7mJMgUv9V7tmEPqpUpq9Fshty4YnZ79HcMiKSeq2p4PqTgJyKoJdjw5hTx7YBZokxd2ZUsgqP6ip57",
  "key15": "4hLSTJCy2H9FZukmyKdeaRazy6VGtnVutQJA7MbfMc4EJGeY95TqszSHfP9et86348APCcuuxAktXqTmNxsfanY",
  "key16": "3v2ovu1ahCkKH1r4Wh6n5bz9PvmJ4RjPTvpNTcEqou6qQnVSHoyZ37EPNGVM3zMgkrNJ3SbUt36HRWu3XwbAJxsr",
  "key17": "2f5AgAHq4b8fvfV262VHKPWtPYwpLnsvTwD2cYxvtb1jV3XjoVuSbskWZeDdBx6sdNgBLH3iz2ihaiqEo6KBZQmA",
  "key18": "2Sk74jtC1LiuK6nXvuQXVy7YEQp4iscx9RLAKiwMM1LQhEtGkruaF1zjVjKKqh9k8mvhcEU7xrYG8otAzAgJbFh6",
  "key19": "4gT16cJyHubXMHUFjZFoFKBhYm8mPu1B1kvYay6wqR7gWEXu5ofSWdPrpkj2VLoQ9hLcR77DU9y3rTcui3sYef3s",
  "key20": "4s3Z6jTreMe1APzpnSCdhukh4dQi7w2vx47SbkU1XFFudYLRW9NRGZ2N3FjbRwEpEpwxDFD3E9G5j6Q35DKvkumu",
  "key21": "2NdFQTabRjP49WhsgCtapfMiEDkQjqGsHpNKcHJTvfif2QLu7CTZJURzWVA7fZSPRuNzPq8gk2e4bH3e89iiq5Dm",
  "key22": "j2TjBNuwxoAqSzozSVQ4EKJGL2AqP5hjJYDRRWY1SzRfkQtPJFtGp2EDEWL1PjN1dsgwwyAPVvFCe8npYCpLdrL",
  "key23": "2b6eup9Bwr1LV9Ks2Q9x2hzcaQiUU6saRws6c3zS88dtEtvSVzFJ7YDZZLAYwBHxM1iVLKiHeCp6kea95JEk7Lvk",
  "key24": "3QJYKZWynq8BshnUqf9iyerb5kvohc8aEjzN7dAquw5AMj8zVUVt1sQxELifBRBXG3oViSn9gUC6AwS8srg56TyW",
  "key25": "44SM9TX17K5PZTKbVPVnGiFsnoHVZb5iSyyt8zARKYyqFHoDxb3o9gr7C323XTCjpRhHZxgrr2nrQy99SXBfgByn",
  "key26": "2kFa4oACCzyhCQmBeF2eUEWUM5CsQ7aXHSMBfC9BPiZWwi3qfF4EH6qr1gvVebsWi7AgpiwxBNHUqDXf2yd39yZ",
  "key27": "512Mfdf5MZuToySvzGyDdGTxm5EbtDmqTWFaTirAGkZBMZP4XgWBE3xdGuvR1kwj8vCXt3xgKTfEQevTi9aYhAkY",
  "key28": "4xNiDv3Wv6wMmkeFCaaer45anH5UhxqyWdpNNubHmcqyuyLKHWS7rUefzjD2gkPfX6EoTdKMybe8pQz4mZ8eLTsq"
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
