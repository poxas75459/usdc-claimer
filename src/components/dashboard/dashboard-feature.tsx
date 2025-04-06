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
    "2Zb7c2FZHFZCr6MnCiCMuCzVTGmjJSbfdhFRPgTw3e8iv5uUisy8YwfP4YbGAmVzWJugb4PdJBvLgQ2zLtgtsAWG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yJtUKzSA19TaX86aPP2AnzT1htp6zNqihzoXLbEaEXULoWjruSmQu51Tsjn1t1nqvYhUCMXfpMZQ6kTvrZFpyEo",
  "key1": "67MrEFc7Bf5kU3MP5UzFRiY9HoZLkwtSxprcyKmKX1zTDgoQWn69Eq8J57wA7edhzmGhh5GFFDuTFdkx72zshQWX",
  "key2": "ZqBMXE44QfxcRbe6aXuhekJmPKrv32GRPvDcAj4dv9ve2HS6qRZYd26zqEGk9cTezqrmCg1skG5XuiVvu6PoTDC",
  "key3": "Jd9DR3i2GF4dHFn73YzLPPrCNyVkConrMaqWep698sX3G4DKx7Sos5Gt1btpZu5iTwqdNKLRJbWTGLiThMX9jks",
  "key4": "3V2XUrLsLy2XTwkyawBZwUWCjyHxwfADbeq1TFYHt2TfaCwj63RwyqApxhhq4Jz1jEGF6iSd1fJF4pZYk7HRoWKD",
  "key5": "2fiXN21114vH81GhxzCbZWYjF7EqyMVC1B168QsLGSqKJkaDTaTpWB8LzKNd2w6QRcX3EDjfuYMcvwDm1pUELPUf",
  "key6": "2aXrwR5ZjZt2Lgz5KhtPCsbUo8NHbRRu56zoTT2c65SDURWmdtZSVkoTF9ykLeH5ZZ6G3BTd1RmnxSMHDW2VVnaK",
  "key7": "559V8N5Zfx7hYPev1Ld8GsG4UUwhWhuFzBKvZpBjJTyP4aHDim1BAVXcFbw3gmKDYKiYCbJ1uL9jxaKfBuKiGzTD",
  "key8": "WsHvQmVgqPWRww77ghBP1r1a5851Nwf6zb3UCEeNRFubjy4GxfGzACPupgbJJ7r3TkWWx9WGxsL5ZBEwTESTHCt",
  "key9": "4b93GXD7XMG3ekz13hkvNiSm4DNJtU4PmUWG1iCX2EDXwaepBH4rcpHJ76kKL2Y8DD5RrfPawqU1wZ8QgZNxuauo",
  "key10": "3VnxKf5hTUPzfcoffghcHwLvc45G6xW2udx4fci3trcv1dDX6Nd6L7A5RcVBB4yFkZ9amE6Muc48JxFG3dYbMU83",
  "key11": "4b17SNEuhLJBBBBG7vWm1cRnBEXnzisaANFmkfkNzKYHdzsPkexWLcKRaqrVU8gFWV2hiiVUA2ZVYNdabJk2XC1k",
  "key12": "2svZ6C9AaU9LyndFhZqBJKVvMWKYgmV24Ufwoh9qrR8n5fbNgrUreFYGgxdmbpkSVFTxYnex7GKSrrCu6G2nEpjB",
  "key13": "5jmuv95Wu5g3D2qpgZ2TbYJ6tMJDq5pvgdoZt6aakK4GaUXVrMEjPTKU4NUHTG2dmVyQ8jxkQCsLUrmrvcGfEzwP",
  "key14": "5dL8AbpexwqY34zw5faRVb9BCcvECNGu8J164dCwiCYkiBxgWykr1rgnzun3eUkDJNH6ZQTTcbYCTZ1j8opnwnW1",
  "key15": "2bFpLjo8mjUirZRqJ3suZRNgMom6NLDDTHTzbYY4VQqmoacswnmJK16oXD9gFJ7EoSw5XMT4gSthKF2YKFuamPv5",
  "key16": "GwtJ533CafZwPeEngVfYmyssokqGx7ay1cmyTBbnsJAhJE6KCXPSpsQbg9ghPA5Pi9eeqtUKmiyBgx11ipL3zLX",
  "key17": "3ipiYaBEKpeYcN52EN1xeaxuEkUjrUySsBSUm9XeFoMQSManmGbUEaw4EYnv5j4iHbpncwM48WrHq12bbbnGqZaW",
  "key18": "3fEofnH2HxUxwZootssQdcUYp7WhixL5py8xjhbE4YJ9SFiyPhhA7a2c74GyRfwdgyz5PgoFuFh91QePVQnqYYfk",
  "key19": "jWtZ7KsctKGjkodpudxBkDdDo5DPyrZmsAdWxerLoy6jbc13xATUMZPT3DRSnRfYdHrbikFU3Jt21wMbYCdgBQi",
  "key20": "453rRMarW9KezGap9akwcEZL1DPCvYxhmQk185ogQmkM8NxDyYSwtzgLgvHhhRCAk5P2F3CkipDzZkPHRBtiWZkX",
  "key21": "dubis6Lahwi8YYJW8NiVX6c4pvJsKdt6pDNfYV8SS4R5coZZvMcMAsdsmeBj1jh7yhortCExWDb2keGoXRp9bXX",
  "key22": "qPPbc2iAJVNfy9y13otMWWN4M5miE6dJdkWiDk8e8SwFhreiEjSP5HUNELjjMLFr8tHufCzVVvSTD3aHFrJZsCf",
  "key23": "3qz2ECZtFf9FMw3VwxaeGuGnVcfwh4xmAg2RDxw5wRyUX1Yr9WBwyuckcf2RSfDrpnJyGiv3UceeZRgFM5XhziE3",
  "key24": "3cuoHGPfDv8xS896hDvAEKZJh3oLYqoksRffHkLDUGVVLjqccXqhpmytuHPe7dHEfXs26a6QoEKK5fFrPcykap32",
  "key25": "4q7ip19rcucumChNM9jA9jgQ9XemfqQtAFHGkj9u1Yg4Ec8WjMmrxAVnGr9KbkkuH7NQyazBYoUBv7qPnox33KEv",
  "key26": "3QpFqz6MjAmtR5M4sGAwWauQH6Pu3ZYfnN34BvtFr3ruyuAAy6KZNJUxUAM9G8hRWw3wcify4bD3Lqdu4g6xA5wx",
  "key27": "51SrkcMmjhZG9vkTxqFiWBXGKu4Yd6fN31PWvFy4bCHokAYp1YJZQXhipcHDhFKqfX3qAb5rExMPQgBg4qRXZZEB",
  "key28": "27QM2JdKBvExCzSxBGKrUfWowVLsjy73G13Rh8MVphEsRnJ9zbi81DDzHC1in1i3c4n33ZF8kfhLaPQ5sNtTPyrM"
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
