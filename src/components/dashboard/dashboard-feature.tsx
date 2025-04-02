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
    "4KDMrAWosquqPLrNuHc8TYMigHyoUDX3EKxvVRSqU5n8MufQVmSgmBK7UgZ9BksqLxpXw8dCMyF7eg6NiBB5d1K8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A4if6FfGjTgg4KfzVEYZH37MA4TVF5zUzVdahRaGzzJrr7A3hfrD4z5ujMPmmrPsvTjBQH4tbWZU8fLxGL3WQqx",
  "key1": "3oqJFJGCURpK64mRgJxrntaURBHN6W4AAx9ieijb1iqkdMxVQXVJX6qCdgRRZLUM7Wa11enB6ZVErpgfyZ2SErfh",
  "key2": "5TjVgUB1JDeV8zYEFgZPF6Lgh3Rdbcp1k6FSVGJifV7YZEz967kCcxViuwjubuPhtoQJ3Fon1uJ8NrmsgUYbA5Pk",
  "key3": "4dCeggyrwWDEXhbTBtaHNUuNoRaEYSS1j5Hakb5hRaDWn7pY9QDtvf93914LYxWjxymKPVqfU71B9HZjqoQ2KpXy",
  "key4": "3Mc9ZWsD8iSHfbMmE9KzpQ9akAtwuFfXaSExrkbHyQzdyPP4nE9Y6zBtesZLJN6y5GaUoiKUr62igHWEAi357zX4",
  "key5": "5Q4aEkz3yiWGQQakEc5AKsUzdRzaHUiTxV4TNpfznmDf3Q8bfrqKr51aTjj4kNNhrAjMnJMjnbU2dpNm8VnE9DQv",
  "key6": "2HXSzScWLtJZ8f7NB3pS3xt3B1bKTYknQmxzoWLicLDy6sYJrtCNhbj1FeF1o25MyQCrMAWkghH1vjXxtE7cALhg",
  "key7": "2ixoD87MKKhJuxFC4xZokkz7i1Kaq4PEwiiXGmJoxacJWkbLRm1QSJ52CxFjyYH6ZeGNvuf145Vn2xvt7GsVogMm",
  "key8": "4AqPWGLH6LZcMoKSZsy5kTKNFNucsPKDcUPdi6j8fw1CMBYVn1M3P53gFaaEv7dKGVWi71eVaRXnFLBtWMZChpPr",
  "key9": "4HsqEHUnWj7AWbcDVGp5k71nGiANdJQYA5D8cfcEa8xfoevH4U9kTwpsaG61yTkiueX5aphMpiYKAbpXQsvb48xv",
  "key10": "5C2ogX23F96rjgQjTpVVzdZYUrmSLLMaoLBsGb2chCW92dRLFZSKE2YLsZm3DKozK5WPurHadNGTaPnY4143Lz8s",
  "key11": "4pfc4LJ65ZJgZwxT3D7Su8bZekqbfXdY2UkUeM9onJLzdCZGmqxgBFgigr5rYBq5KngefecgnLoPgS9zMV2stLfW",
  "key12": "2To3fNZmnMPPyM3z2DzRnPwbH1gzt1L9wrzd3tXp6Cv225pZv6Znmv2zQsPANVyLv8RNzKhST7jr9qv1MZAFQ9Kx",
  "key13": "3edZjPKtQPm1qbPLEzkANrhTkywnwvhfkFi45hA85rRiXcAh2wr4xVt9k9PtATwoHhAe2RyzVbbag6STv67Zbh3R",
  "key14": "i83mJs9ycTGJZhLR76jpXHAJMRbcjabziS5zmbzv5MbVDC1LXoPQ6TXUA52XAnejWFtCdDXYUndyoyhGFjeKUem",
  "key15": "2aQ1PZUjpX8CSNV8ofJywLjPvFEg5DqmtqbX5qFSNSgSDZD8Mp88SiLSA8feLoLGaiYygMiUZvePFv4f9vphAtwu",
  "key16": "F1rrBFrsjxj97t75LaQMU8yUrUYvvGVoy6JdxvxnrgbkyhNGpBTefuEp5Ux2qkotPAhE6e7hMzhRBL7tJzi3iyJ",
  "key17": "4qXW3vm2y1vAxn1xmHrp4NTCYEkdvy2Wnn8CYP9VbFM8hLqrSeusTD6RbHb1u61W5Qs3oXc5vJTXVvPxz1v3CJEY",
  "key18": "2DN5YuuBQPJhssUSDzmqVVoKSANsX8AUx6qSZSrjnu3H769VSu3fLuEyzgWCHHSBESFzZam85bZcDbMNpWmB6kWx",
  "key19": "2kYhDEZekY3UWvJ3bq2bH9KLKGUH5tdGTkqYzzJCYc18H39CjD5VroaXX2eACJ9c4kUi9w3hUw4ma2VTMJNWCsCg",
  "key20": "38AcN38pXVAUUJuinzhA7wEn4fRk7PFrh1N74xrsHGC7y6iqGEhSxkJw2xjy78pGYtNJfBevXHDeqEafozDi6QZR",
  "key21": "4KvqrKLFthc2LAYxnvKv84oT4St5UsaR32tmNH82fHpXq1LitXn9f4b7CRz2c1DF3thUFX2gKGgFYUmxBnpg2gmK",
  "key22": "53xhDi1WQVrHqdVnQYXe4GqVcuqq4kHGoyZKAt5aqce8A7hJA8mUVCi9dTFeu7FEUHdyhwPgeg67unFzHVywb6Sj",
  "key23": "2yCuxU88Q9VtcFFFsw1UXFftUaWdbfhQKFCUu1gG3TnA6yHStVLirRXaxqkGhM89ccB9mpCMb821LGqEBH1sJSQx",
  "key24": "4pVH9e4BNQmZZcdD84BQJ9v7DtvHKPGSfoRg5fbeoQS4bGWwmBosUfXS21jVq33TNQL2NaN2R5BA8AnBoqvPVLR5",
  "key25": "2pznPJ2s6ULfDwfThi2T3mtW3Ppof5iaCFF8f2uhkXWBd45tEXw4bqNVLJ2KEpBfhR7pMZNfEoHzEU6ej8vfsQsH",
  "key26": "G5ZcFdqFL4iqkgEfxV56MZHaDQSLPC4QGXhDN9hMuqVTJEE8uQJBgiwP3ydsscdDCjY7QzLvqGsNbBrnhkGKGef",
  "key27": "5hmUwTXpe4ZD6FL3VGiDm3WZ98ihqDqgSDn3shK13KGn59WzCaDpaA1R4e7eVevy2hnReH7b1AStQYRFYJsYBExU",
  "key28": "5Z1K1RkQNKqXigsEEUwi4Q3soGxPgfpM4sMmE4xvFbXbSy383mNgrFtuCJRY7XJ7nH4j68dqqyocv5Pas3oPC88Z",
  "key29": "4CHBK6GMtBQAxZqPUsCDvad7aXEvzo1Xn6XS7LwkUrLnVpsgSiGWzWcZQK4NK36VWrASbYaBXfHVxWFAaj6X2rWh",
  "key30": "2cLPYtHTp1F1NvtrAoDwi95J9Trg14fgL9JM1o3Tb9AGtwzbyqG5YxszB8hQ66hArTg5todxnocwsngkcyVrVLhL",
  "key31": "21DiE4ekJiRWyQF7V3AsvMpyU72bMrAmjPtAMhnQ1f9xoxqaosVAm3qFgkTHxY38VDWVhb8mSybyGkNdxEBvBStU",
  "key32": "3ePa7c6SQGXBPodA9m3PopAHQBDPCkMxSjf3GCNPzQPi5tquaWdSBoJp3pKAijpkVaeb35ZJv4akDhS5KYAQC8Wq",
  "key33": "5WP2rQRAGwF5qUzBLHxmXsJFCrJ6enckF8skqo3eYsKNFogmPz1ZbbGwE9iwbenVPvT4qKbLrb4xckYzRKrvYsTr",
  "key34": "4TbrVxxiLgWKLra1SH6eiajM35W1TfrJL7U5R1MNKwiCin4fqT6yPycCDkAfVV4bmEDBPvjusWKgsTgAFLzpSSPd",
  "key35": "4YEFddvpefTiYNYGv4xcJ3ouWGjDBurroEYFaBFiD6p2GpdD4K6TY7g5VkAQVzTQVUfxRtCPXDxh7GYs7NEd96AM",
  "key36": "3gr7E6F1rtphK9xqyLVZLCqjD5VS2tgpLgp7GjNhkQZPXeFYPdwHwBxkGxrh1eNu66APKnFMqdoB5eYxpXP9k1FS",
  "key37": "ssSXUjGn1g8AbPua3jNwa1eSy35ov6RVFZDyjFky25S7T1qPzdWoY1U27pa5XKXh4R7xGHdraQTncgoDJANDRgK",
  "key38": "66mXHQMgE7AUftjf53Pqj3qPtstjm7sJA9edLhd9ZvZmSmQKKkUKswCmPDcZa4jvQ21HbCoNH7WJ7f5FEQmqH7TV",
  "key39": "4kRV3XZQA3B1HY8p73NHWVwCjWsvwsDqtowRcMr2mE6aY2Fi5eE8bsYjiBfu6EUt9gWFk1aEH1NSHYuAZExEAbWF",
  "key40": "4WWsbiLzrpVg3A4AVXK1MHStpJ3rYuvUZfm38phBdy9G7q6CaWD5KtZvQuQHpbRJU9Lxtxsf66SUrVETU9zeDtyk",
  "key41": "sNEA2KPSHEiBzcaKJU4Y5a8YETz44cx7XTCY51M8aKUD4dxHD3oHnnD26m1cgjX86piCZpRBoZeSUhJ9dyF7HVB",
  "key42": "3S23gAKDNtfNzvsXUAZhWHjs7Xhk2x4VdaZELuhx4ANe3VRFaUa9qoRdeQ7SWdFPdyKhrg3fHe6iP3KYnfZRnfAi",
  "key43": "2vgeuH5t93ioCUkivLFVaxNMxMHPgjJJgXwUfyAmQZmYFLB4QjWWott8qFoL8newq22LkDZF95GJXAiNRMH5juJo",
  "key44": "2Jcdwn1fjZk1DCzhbTdnukDPQu6s5ATD75McqCnNNANyDWeakvrbTMJzk1xr2BVjHEji9HykVMftb6wXsVD5G22H"
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
