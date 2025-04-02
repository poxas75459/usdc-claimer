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
    "2VWv9JzL9z8PrdDy3j488jaG9PSiK1roQNRgf1sPm7uLsHRb4B3ysq4j7WCZ71BSZJdeCi8voH4YPwztHT1ztBLL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f3JJ4xGA39jfGxHB2Hr2Y9JmH7C2uzBNBmXLGKvUFSCP5obtPrUcuGjjW2NKSzBJd1fgEfTJquSkQNDchEwrYF3",
  "key1": "3rq5brPBzqard2iaDn61UDyxz2QSoPNLgj6w4iLeZFcKjaKRcjRcS78Luycsck7kcWFEdjRSnaQR566u3Ehb4gs1",
  "key2": "59f4TvJsQ36qRQXHaNoDumv4VzQU1oxN2yRQZEGcPcVqccivYgccewww7Hfy1o9WVckmcvdVCFBH6Lwb6Pnvf4pp",
  "key3": "45G5dkzx7oQGRzvzmVwyn6wzupZzXBd7t3ta8PLpsshkHigsTmVfvdsggknSW15nKQJrMLFgjraxiF2wfMEzc8CJ",
  "key4": "GMYWq5PrQDsjpekFqvHAMMq1n52V1n6iTQJ2hxwdQ9R2An9fbkrcRdujNDU7gbvnt95ZPTLpZ9SHRQMSxFxLppe",
  "key5": "5fjQyTRBU4J2vnzYewgBwWQhpq5rDEsqMj8jrZ3P5xtHSKDBBJs1t4Xz9UsT8FpfBCnZHEZ7xZXX3ECMVPxEWttc",
  "key6": "88FjJYWPALe3Dx7WN1s5siz6XvCMCjhrW3Dfd1MYCaQqdMLFU2dk67gNKj2XVQxLTMJooC7jqu63UzAmFR4o45h",
  "key7": "4ysFqVPPhd24JmQo6p7F7EjGJ4K2LbQiXZqjqU28ZWpKzF29Y3u1APHrLvfenmpegeG6bRcT48ZHrZ3yAfzWwusP",
  "key8": "4mFaJdfu2XRZ5NwXbECrkMAeM1vduE1LBamP6ukPjKX8ZvrgwSepyt3KsF2HVdNPfWjEdJKSSo7LsTDBHUqJYNdv",
  "key9": "4PQzMnnxCmA2LcwchBEfBRnoD4aiGmGTj42edJwCr57kwCXT5cjehw472w2pv5o7WW6CRaRfTzCzpeAyJZcgxmYW",
  "key10": "56EHUJ4Ny7FKgMVGSDKdXgvy5TALeCZepRxT196pomTMS7aNv8fCc1p21j14JdstSUD4d6kMC8PvrsK37bjSDUvg",
  "key11": "5nVKJR5ZhyTVb486ZM3tQ69ncjKcx3iXTDdgaDywai2NRg2HNgoqPBusH3uZi5gBofWm7iaGuBQ1rjJ1gNTenrpJ",
  "key12": "Czw1qtsjunSXmtGzKZig1epmb3CkFE3SEm8kw7PVkUgCdTYHuScMrQs4beSTHY8MRjNX3ng7161NXRFCsMMsqRp",
  "key13": "27GH8qzXSf3gUhzEK4r5tzTLx6j6jdRAYGKaWZ7KnoPPDjCiTPmGnRt6mx8Frz8dxvw2YsH8G44CgS6Yzci9EvgR",
  "key14": "4jCDqWfGhr9HsbyXGicxpdBpRksgFPFqGAs1XT8ae8qD3tPCJwpQxVZuKqiX38aWnUQ1S9xmxsPa2SX4e33B4Z4c",
  "key15": "3jkqmjv7Hzn4zKvXAFtCe3kQmDNZkyx1UDsq3qbqCu2ULZ4TYjHP9h3tnauiy7EhDntiTjYWB4qoSeEq7shgmtRR",
  "key16": "32oBzXeSsrVW7Q5YkXZ1MiK5cwuVNY5rbN7PkuqiCyp6ZpJE7UnKAvDZ1uYtUAaH8NFUCimGmNxPZWXY4gLozXkC",
  "key17": "4xQUoJ4khgac9ENLbD6Wn7MYrqJPE5k3pAV86kszZNL8YDf8gjtczSVrihpifYs45fvEjYvRBoSEobuWjYgkFpYu",
  "key18": "5q97ymZ2rxTP2yqCi8DJaJBGzKMz66p53z7V25QAmPLJPzdfoZjdTzsCKEuQ8tKx2CYgtmRHUb3WY2V6Z5FVkXkx",
  "key19": "3U1Ytm5zMgQVQy2DvPKYYJGA2Z2J7utoNr2BX1eg8uNTh4hnzvAmbeLEUNnQKhqphYTj5tqehJdwYnBwEy4LXrrQ",
  "key20": "b2uELm6L1CgKGcJj2Bg9HLxL5ZP45RaCXVKDEdFw4kTqDmyLh1EPGBRmSG4KTPLhrSL84dwAzLp1NCnNzMiB8bQ",
  "key21": "2kLCNAN546tUg9YN1K5KBMtpiXPS3LccmxVufK1k9DWLSXoWZ854CAKNkDs2zEyFkRYeXbKnnuFmt2acrSxpjTbb",
  "key22": "2jkxjrgLth9wwHVwzmAL8KiE8kUwPfvkYDi7Rxd9iku6ppstZgXsfSrM1qfVLvrb7TbWFtSLZm17qvfu4gcjiZGH",
  "key23": "2KgmM1G55eBw631s1y3zNUStdnUqsnx2TAqhUjDoujV9YoPs2Enjp8P9oGTEdQhkSXGaB9s386ixX3n3TwcGTjg",
  "key24": "2tf4Jq2Y7r2F2TCfbNtjGEZ6LQXQa71k7T3EFJfXoauPfegXpzS87b6aV5S2xFfNC5xr6WtgL8RBGapyd48ZaJLx",
  "key25": "5mdS2UT6HrHmukWv2N2jAmPXCuUjYNAFWSwW9St1D7ogSBW1NnvLEGnqkPZS5SudCWF3FS9LHbfvavtg22TXETst",
  "key26": "5Yxefp7aiy8ihxgKRvx77ErtGhVkMkymFB6SCyy1dMCZewLEVrLnot3v1a83zWQm9bWT8e6nHbUmm5AJvfgSxWrw"
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
