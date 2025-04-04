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
    "rLyKhhhWTmcBMYa6DqNcAu1nuvCUwFVwCGGyKrSifBtoQYbbPGHsRijQGPdquXXV1fcoUCQZ4FZFzPH4S1r2djC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36qzYFVzvkDj8RphioMtgKfCTYDZN6JnTEwsSCLsmLYmU4mgjYqS85AXAkYEVpP4875nHJc5fNUJmxmpo5bCSZSe",
  "key1": "35PSyNKR1wngxtCW6drVW7Q4Q7w7dpGuSf7KkeXchkaKBPt8vV3nUQfbJjoQhhAfas9dyZxQJ7GyWXhteMr9Utm8",
  "key2": "3C8CLCWC4mUDxufUz9WupmKcnWkJ8toAn5gegvSYH6xvyr9VKg4mv4bE4sHwUzpDcc3G23sNbHAyPKviAmGJLPrz",
  "key3": "49kLqFeF4v6ushmBCK7yobYyAu6hti3JnQVTbLW3tao24jvYidNtxjqCYVnWRMD3GsM9fdKy7iYP4NewBmUVqs5P",
  "key4": "3F3gfUi2KfUPPGpUKTxX1i5j5AAqML65NoKf9wzNDD3GfCwkk445nB52UQX4pxEpZX4vC1B5oLUn2cpP6h9X1uCa",
  "key5": "NKMQcgxDg68X3vFBtNp9oSYsh26Jk3mBAT7sdZM8ZNyTTgSFJHuNbo9PgMtAbhWqwQM6ALGNgHPPC67pTmcpMuz",
  "key6": "4szPYgofMoa6PDttY3LrsDmvkHqGK9eYBP5GYs5FkGLv8TZSP2z82FMB1toS6RAVqQy7nA4Nf6HCARqEymzWTUAR",
  "key7": "GnEfkG6wVfFHjmhW6p6qqtZMGBKvqtMPD6888NpgKgcpSWNENAmhJJdp11FsXi8ESJWPnPE42CgTxcsvU5fDHaq",
  "key8": "5YefKmTCswbXxLpj3UHnjL9xdRhVv98iTQQPewfvx5F1A1kgVHoqhQZPhR5daEFSFS64D782pHpXVVGqQLsnY92C",
  "key9": "3gar89DbjYxhicdwXfRzqgb3BZ9Z1QU4b6dsuYdSusykY2MStAmmWdSsamspv7vSALTmg6ZsSaDfsxcQbqNLNaU6",
  "key10": "TkA73DeAri8UWYx5rAPGz49GbkqwnJiseJZCDockk8SY1AfugaBfguXzn1447nmQEMXXtiGnwAwQY6qYZ9fwLdW",
  "key11": "4ViMR1h8Vn9cD1Ayqn7DR15VLQNamqquLqJGNPS8jTCBX1BcXEePrTzif2x8MiGQZZ8pVkuTsrfF9ijwYxBV7EYs",
  "key12": "4Vk3ASjrB75iwNMb4YWmmSZyyZ896dS87673V8Pg21WawxtaSg2LKnZ7gAJkZRUVWhNyd8BNw8xjBvtxCngyavxn",
  "key13": "5r5dKZ2sgT69i7QGMRRTe4ormxFq3V7PFKbR7jBzgRAZ4tTRdcyGU3dEL9q8ivLm13ZUe9qvPeXYdinTHwq38DFp",
  "key14": "rhgjZQ8pxoH6MwfZ8y3ZM9ADvmVQQmfMCaeoSnSZVD5fq5KWQqUEwSnTnmkMfxcZBfU4cam3Ds3e4iEYYkQYtE4",
  "key15": "SjeWQ5L7qPWuGgynbJ4giHEW6RhfCjNQTwyVZ3pXVvddWZv7EFt8JNNPQfdc2WXcui1YsUrfUANdtdLg3SuEQ2z",
  "key16": "4WvAYhJKtG4dyNn9xEpXLnfXH3ArZood9zVM2AM5j4zgQv2dbKZMENRtmVEBCrgeLjUoWrKe216re2Gaj79zkDEd",
  "key17": "GcwfKiDaFYb9zkpgRSyziKY9UYqLvafK24kHcTBMzkZvCSyELapqtMeYx3StyMV3KpY1rCW7x5mHoDAFAcEYpnx",
  "key18": "3Ud4URxXW23MYBEbwJwjAJY36ifekRBWn1J8Hmmz2kY8LaYmER9oh511rtG6n4uH2Y8WCMo2ZcDAkAcAMjZDMjmC",
  "key19": "2KGJeXQRgr39pWfNr38jogGDGTpMaZhZpgSRfBAVMy6K8gZvHk1i9gN5gyswnzbTeXRWtCHxtijAFwzas9gQX1mn",
  "key20": "HMaBaATDWvgU7VCfEoFTarD2fkbgwWN9AzAmCbuim7tAzuWAewbP9M1fGYJ6GQcZd6PMMo8mp2TkebVvSMPxSp5",
  "key21": "4nFa2fTD7ZujCYGJPatQ5xVD59HoWNAtfUjfE9MZ6gHqbhzbytzEMweqeLJbQZsTU1KH3xGBZMeXALXhymYranJE",
  "key22": "4Tqbb3YGDRp5EGcKeHzCf3ujn63owc1962S5mHgeETC9HqbbLvtCWHaJ24kKCubd2Q9HDmEtcvgZcTaXwUmbizrY",
  "key23": "5dqcxFcQ8Q4PBa8MMS7U5hyMTUyU3nZeaCdYkovyCiyFD9GozTgHVCPozVQ2XD2nieddmJmcvtUtT8s9dqqALQzs",
  "key24": "2r3mq6fc3prUvT7nirXsc3YMGQ82dyqwxGDB2e9eJfmnX5eSoUeFzMkU27y1tJGVychQGTGi9j35iSY7LfGzoxSb",
  "key25": "4aezFYYufa7pU3LmmjWi3wuUaKdykeWA1rCbq82sXyMAgnpmBnFi7VD8c7GpzF9ZBNG2kCEMc9gjFxY3zPLoXjfx",
  "key26": "3C7M8zjysY23oi4DVqw6g6ys5GyJTxL9vRBT5W16kh12Ed9N12enzKQJaXo3F52bpf1HcAAKqSoZExF9ANtFSBmS"
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
