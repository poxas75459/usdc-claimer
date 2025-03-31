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
    "3pjXxKL8qPBRjrnWJPg5UzviF1hynrm7ShWcDxdBSLymJ1F4arn6BujzWiHraPbmsWScbCyHKxvN6XkPGWpJ1t8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JHfPUBqcBTLJPTvY61uEmPhYYHjMETUjB8ZJc2kQaBv84ne6KadM4S8bPNzE3dYDwQHgPgFN8i2xV4kUwACw5zk",
  "key1": "5jyH8YPi1aMfNEbgBjxPmUXT2EEYzxfDU4s6sGvFVt5VcoJjvwfApaCp7KoNAfjXno48vWXJnSHJs8HzinuLeY2o",
  "key2": "5BJHs1aH7PewaEHXReje6pWecSkNR6aad4EFVfeCUjoK4hMKj5b5Yj5ytKie8ekSTaZ3ydQS2Uqs5ukvSsoZ6a57",
  "key3": "5gjTAcAinKg41exvwa2DAMSRBv4kWZ2mWBeq8XvMCMrPPSFDWXDxBNB8xDkgkX7hzqPtGxo5gseQ6X193ngPzYoc",
  "key4": "2eNbdd8ZozgrwtQi3aivWaUbcEaakE13M6p5Edagxh2vrdH8ZWcGzak5qqhD15wG93cXv8AVNBrAkfALqNQXGumH",
  "key5": "45j1STagCfK7EfATgoujhhSzdaz6fhnr8PmBzzZZM5t119NfQZ2QbKyGKUooSNd39xYdURE23286V7cRjxkjpSFv",
  "key6": "3X2FX8bFuAXPZrtRUi31poeHwZmrkSVQY5nPDV7jjMQNJhrgBcxbEiAGLAw2gc2RkaMXtTB5MBEYw7YLgU137wsP",
  "key7": "4pTTpyND5WcM9bobDGfS48F3hCShmVkZR75Yu1iXdBjxxGni86UdRACh4ENGRNatB3Zh4w8pjheNsDQxmSKyyFdV",
  "key8": "GfJJtWZYuh1NGf6dzC8hg5epzbsEj6PqtE129mCigfMg8baGbMxeaY5sBnzpku36RUfiC48v3i78ajG6DTc7yWL",
  "key9": "268amgyDxWgV5R1XtHay2jX1qZD29L2kMpnKHwgBS5cDt6nUf71Kvv6UZy5AWKXXXRcVCJtwtqvUa7zGCa4VQmB2",
  "key10": "5uEUQjberD2Xk3W5YHj4eixRrxbvPiJcAczAJeRPe3V8odn5xqDE1TNzhqmLef7ZVZn1VkpNZ3ggYkGBVhWGRHsZ",
  "key11": "1pzf8UzbFwuejc38Mvfr5QHjigdkDU2cZAd9VzCSpXBnr9WRtaUpNNNRcYLJqirXd6m96PspEmgMP86rtqenppm",
  "key12": "Yfrww9cepqDhQWHDzGNUfDPAAG76AoaCYZP89J6eQuy8MmXoo9G5jdx5XYFagyjdwmBNaB88N6xGw4Bykz1tqAw",
  "key13": "3jVHEeZyB4vpVeoGwFJ9JQQqWcjEe7ojsMt1tbih3FQaJszLfvxLYh5NNR8MY2dFvyR2VTd3eqB9LuAtpZGChwxB",
  "key14": "5bGxt5Jsh6LNUxGBsNJPLyp56KRvpW6pQmKY5KB18c85dpmcwJR7LmSpUtDEQyqyF9fBRV3cnbspx89Z8QDc4DsS",
  "key15": "5zdbzjtvf11Rr6M6i5cmb2PahZPz3cxguF6zSCFbgxdc11mAsyRXRHL9JLzwwB81hw9eHjZ2DKdADJQZE9fdFVRP",
  "key16": "53Xm1bHXfftqMDzXuoaKRbTg1duMevS3S2VETCMDG5KAFTCHvsbWCXmbp34rg6Ajrk8K6X5AVLvafbiQnWY3PiVS",
  "key17": "5RtuJq4jrN5wGLwCB74s7yANBE1otQ5Aviaasn2MYxjpxum2PzWXpdxNDhX7yDYz1WDPkSedfnEH2yd1WoPRpmbL",
  "key18": "ELuWtSc8BRtdgaE35Hfeki6MLomtmweVv3yt66fy5KUbk4zLNHZ2EQXakKLR2Sf7Z8gCjaAnN8yeftKoF8Co5k2",
  "key19": "4nLYPBgmptY6w6C4MX1b3qWcgqJ1vhNXa7VUEwEf6oggSkyepT4V4oDJp4SzT2Q8uHefwmZkiPMu4c2CwdTGED1G",
  "key20": "3WLu1GLK293SeGHCGLSLLN7FbMefvhAEGYuWoo9vpS7VrxqsENFfzYX8VErQF673frW1gPcB9iwhRcrmCYzNnrg6",
  "key21": "4JvHgQAtT7G3QT3V1wjEteU7z4jHP9LAoY96NpYobcy4EAKgrPgEhxeHpmevR7rmcA7HUBrnpM98maE5puE3kr8D",
  "key22": "3r3mF9JCea3N1niiJETfEwmKmsBhHLytYjQVZgqbcgNdmHcLmerVxCzFVapXLfye6MVrDofYnDmAyDPxGYmBDHXP",
  "key23": "2w3MSgwPENhxrYy58h7SMABBZcStPH635KrixBaynKiNz1EY8CQKnwns6NHm9qSPrwuqdaxcsV1sXCn647jPGWU",
  "key24": "57mfrU7CpxQo6bsYCke9QHzTHmBTcLhrmZoun5gaRcTuFYcWbTwju3KagkCiwBVqyp7Vnd6zhxBj9ec6K4pv6TDp",
  "key25": "499DERMw68LvsBCr3iGoHLjTqC9YvGFvGxXtZGKHUEW5HYXzSyxz1Nkc3FUcH4UhtCsJXvzo1ZdfkaTMACyfQ1UZ",
  "key26": "3QEsaD1CX9nCuD4cCsrCZn6WLawJYP79VR4m5CJHGgTvqAopJePnGLGvPAtsd7fFqTV64ZqcP2ccfhVpXxu7xQag",
  "key27": "2yVuFwTryN2jLy8GkrGdxxuEHHBBKpKrTpHk5XL6zKmhCkC2vkoTL2vmdQa6aR9QKe9q3SRyEmDZwwTGp7fZJiEw",
  "key28": "5uVteTY1tawZjYXBWEaxUrod1NCURGboeZbA9hBbvFb2vC8uEn5rGwmvRsLjAJHyxNTWoVpHc6PkSNaHuBGybHHo"
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
