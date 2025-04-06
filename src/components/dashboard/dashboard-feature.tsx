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
    "4PBo8bBKFBiwJC9ceQKYpNREhQy19maw6Cj9Rmgy9mwr1ZrGjRSLcDzCoTry8yKwwmJf87oViCo1K3YJETFF4BgF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XtkH7ExdNrofeezeb55m3CgPirMRNYNueBMi1tvFqw5ztUUJPE7Rs6P7Y5RrAqHWdjNGqNK9G79Hs5ecwo5hNpJ",
  "key1": "51ZnpCX8DyhpUBfMVUzUJYmW9CTgwhJoJe1W13MtzsFpWuvPaupwkyGNbQFWGJrBQpjXYZ93nkx5pS4LZpshqysH",
  "key2": "5JZUbkjkgQ8UZ8TUjmmSBA5JWg2y4xeEYGMCipV5EsXaRvJge23LGJEnuaHv8Pk1dcMXUsa4jXyEz5Vm1f6tquW7",
  "key3": "HmcTFq9GmfseMsScJpYzqwq2MD2MoH4NpjqP5qnVhbgBzcaEUgfoCvTzDvCymqerhAjGJD1KRFis5GQAeU25vVh",
  "key4": "2bdRfnNDohbN1u6Cfyzfya1zxTUT28UDmiRghPcYndXv9DooCwWUGASygxWbMAbnESF1iF9su5HAz3De6GXPmZWb",
  "key5": "2TxfySQ3gCephbAT4hB9RfhgjwswVJ796wbM2zKyXhqYqhcBqpPbFvn56cm6BLxANoYUHENMTvBunfEJz5TscYAv",
  "key6": "2t4XfBs8nuWG2hbKiLaxedn5LuQmZogDzHCX68JhpMfEAtxfzHukULAMBqC1huaVEaUw2w9cFCriwkdP8Rx3FPqE",
  "key7": "2evqZk4EdAcNhPJgFQ9Rh7gpG4KZHQe1jQbP5aodN71r6YRysBgbf51RZpM1jMTRA8Cx4qjN3dVRcX2V5Zdauwzp",
  "key8": "4GRwgGmCEaMHJN3zzj6bngkfKhyAGQwj6jKuu331CHuc4erhQmvQpgwQtZz1nCkv17af7LZqqLd4xxkbtXrqpTiB",
  "key9": "4fB5e7LRJwXUZpPZAxQ4Zf6dNq4EJyQPcDk6GXq4ybj9hCrqkpqSDkd7cKrrWeoohkptLawBgGDHN3oBRXMxEvR1",
  "key10": "2bAnzKYuv4eqY7uWWywMFAzkvLjf6eXjTZfV2foKdJFLWobmVU8LRGEyrt2bnM2sCnxntzzE749iyoqspH1hU85S",
  "key11": "2VXh5Cj263LYZB1ucC7GJtFKVb5ryJcocFayDDtGsDv7aguqMaGJLPo6YmKtj2xXAyFkey3SW1bx9rEkivvm4XwM",
  "key12": "5i5Mrq1numSXUk3scGHwmhdXHHBWnNQ5poPN6NAKz6bGbKYidvAmmZ7o73tPGGLhk1f3ZiWJ7QWG9nF79cZA6trj",
  "key13": "63UzZaw1L7zHi9UBrhUbrS2sAY7ucvicqei8htaeVLCx8gHeMLVSLCisrBQX12NsMze5NDn8hmFnEaMG5GM2diWM",
  "key14": "4G3CYaoTVupAuz8DjGzTr6xFeLoqPLuma9w7xogXLbupsUW35LiVvJ3KAmuQebZDtraSSrmhNTPVXyTAsW1fQbyL",
  "key15": "5g4P6BQRjf8UKfnFwHcyBKgwsr2uYXrBLza1dGi1sKF4qKcSKnB6GyRqrjLMz59HcjGW8BZVWV9E3hYwhkQCLX1S",
  "key16": "2tybc6mP65rsLXjqPvco9azxuAq4aYEwcR4vk31ASPLsqg3Xrf9bvLtE41SM3QkTaKMvBL1TBkpEG7etBy2EMB2a",
  "key17": "4f7gF5gGoBWDJ92fhvTayFcdViFeYLJLjGnYNVfp377KCSwQB5VJnoJSxxnsGXAfdUAexR7Hag19JQBhVV9GH2Co",
  "key18": "4gQcJfAftHDfZJ7n5MiQsDedK1gMgkuEqt76mcsH7RnCgdanRg6amjA82YRDQtjFRmKCsEsD99NRFGj2h96HJwcC",
  "key19": "4sRDdn3B2iUAw1rD2c6NYRR1mDcjbcwqhEUMxHMxRireTzdbVM9yRe1ZBnfVSnqhA1b8Gnyw4yHHmpsWCfN3A74Q",
  "key20": "2gvRe4hpooUKgvCA5L7uwiVxPDWbARng7o5nt3xcKSuG9r6YEJ7rTiihSr8bU5iuu2mX48s1Dtpzo4hrfkYQdJZT",
  "key21": "3D7e7LTGDMX7zFudFn1r81JAcJzW68Tk1ZZcWoYQBzZQGu7hnNV5KdPwzmWQ9Pfxa9QjXuAQpx7LuBKjBhG2tVtG",
  "key22": "4GocNU9qvDxUC26VfH3kZgLhoWnnyXbC5qYHmK6SjuycbSKt1Pc1SstBGa5w6751wjdivGsYBws2aEZs6rPnkXFP",
  "key23": "pyYEM4ZFt2vFk7RYRKRGU2duAxNhtS1461tEsM9Ktaek2LHafQAgDoFCyAUkB1k1QrcvDVHpM9awRUh1S3UnN9h",
  "key24": "vwQfNfgsJjej5k8VgzGiFzueSi7HyoJhnff7HN4ivMTmpeecUXQ5nhdDNVgJAp4pM11ZdhA7CciFShmEBQ2yxKR"
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
