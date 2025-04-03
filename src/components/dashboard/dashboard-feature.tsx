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
    "5rXxBS3mynHRiNApoQDQEEjT54dYtG9KqTuW4ic6tAxhJaGbDE9r3bZNuCoHAMpc5YXuddrSHgt52ZoRAWeXcgwX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uRdjiqd2MKve8RY9X8B7ENfMsiPA56WAQSJJpkBM74XoNegUFmBTCdzdxEQon2o2nwnSqJ6RXXb3HHUk4ijgiwF",
  "key1": "5KV4fdGPdifqshyNEsPDKZgtE8Szb8Sx8dmZDVQQevwjM8Hxm4nYRZZkb4eUNqCzsvyT1hibc5Tyeq1Q3qfC8k39",
  "key2": "5YNbJSaX1wxBJ31YkptTS98TBWNedRMJD8xKynQABUWpiz88a4oDbkxX7N5DBRh7mWtgTofKgVcPY6s8pT11dVXX",
  "key3": "3M9Yi9A77oUMZGnxym7MB5Eths2gGjrqMaa5Y4cY3SEfdrRMZ7PpG6v75GbYPqqKFZh2NrN4S72grfFu11LSV2px",
  "key4": "44NrzrxR5oybFKY7vF92df8Vp4UDQZGguXvVKStTGvEsYK6RbMgYmJrunSr9HKqn8fqePyTUWqJS2twifdpMQMFk",
  "key5": "Bouq1Ky6VLh3arq2pjztatvdvCRorBPZoeMwhXFRuxgkbT9APciTFM4vR41rdF3k9ochbxB6D7MYEktnCXj6g3W",
  "key6": "NEtXRJDmzzkW2u3CNDwwp3CvRS644RWmU1cufX9ZcuYwKCDVLuznVL2fSBaJA49Yp9rmTCahVRWZ3eBMMkJxHAG",
  "key7": "5jVxHA8wA4BB5UwGgC5p97h9UgSqk71vee3ToX6SHXfKYhvb6FWRmYepLPYJWoFXGiYMfrvBaR4NTYHDuTW5y5tv",
  "key8": "2k59h7dBBiDF75qopTbrB3hb51W4R7hoU8zEg9DfVVwUNwmoGGCzhCihQ3JznBjS73z4LDshDThEw5W2G5xXVZmP",
  "key9": "4r9R5vBsvTJobYdfS6NbWzVbD4VgUsXUVGYhSmwJqMScK4tHCjQfGFPaop2VBPeJxnt2CeTdzkksnqV4EiGxjmKr",
  "key10": "4Ui6aabHyMgCCHpdUvRjwyFyJQWq95tAi9iuSLizSNKKLDxa4vH9uHAMS4Bo78HPH3KURdC84pd6oFPsXoRVpNJG",
  "key11": "38hnKj1VqMuJ75bcnw8cLYPV3AZrMsWHKADKZVzGy1KmVf3qFZtvR2ChUd3TNykMdYhxSEbzxPzfKoTB2YPYAf2K",
  "key12": "3JGps6NVzAhsoNSmXsbzxR1qKYtXhBruPNDDXTw9pQjz7fk1dbuUpwUPyaEYmUNprQDUoUG9TVYteXgRhtCGuoiM",
  "key13": "BcVZCEpsUQiPFeZ9EmrUAXHXgjCrm3bVEcHV67ByLFVfBTYustppM22DR9fjkf2AeWVXT6dbwf3ozMucjvNmkLh",
  "key14": "3RbaPCnd4G2yafQznAyTtDgoM3BzwTAfdX5fRXttnjEBnSxWVTogSBSsELD7QRFrJmswn4YPrGsAV8W8erjLM1rZ",
  "key15": "cfDdNQKMY1P2Vtt5WLNBGxgKiRajFeztWxP9Ge8uCqQGvvaNog9wAwdaftHXBYJBRSnSRToU7Dmu7hN31VNzC8W",
  "key16": "2uHJfaRKHHgPdqp3AaKPg58v7MvTXzAjXDwixAoSWsTLJGFXTUFjL4fXfmLJm27AkiawiY3sXwQ4QtBto7xxGciP",
  "key17": "djYyDjqs1jD6xurSmhZEqNUch6dgTiRhPoDcL3YkxsaLkbxe1hJCowBSZi9VRCXzQ3zsdDnqkDAzvmWoGYQeEDN",
  "key18": "311y7QD8TTHjBQUWj1x7vBwHXLRF2gU9uw28svvf3HqjXQpCwJf8xfJJTt5zFWQj1PbLkrWbvpFpGdTCEcCPaB1s",
  "key19": "5toCCU3VVch984XPPZyfys363oUvqbsnXw8BkS2Cupf8BkdFVmcqKuvxjUcxoSZW5sNh24ymCuLfi4j6ZkcUhoyd",
  "key20": "5uVoq11Std4xgoBurMnrzVu3n7NH8tqbbbCYHSwyZ2PR1hX1ds64w8hbKkCQ6aNasQLDfVgCmRDHNtQtkCNwAUNF",
  "key21": "5dx56tPVa4SHuqaP4iKPTtcR4VWRQykjLmp6cdHoDSctNzfixMBhiZmLLhxP1fTiUwp33QYgqEjsBaQJRf5seKB3",
  "key22": "2hg7RV9yTdcdc8n31S23dPGBmDn11jh3qHKmYDTFAM2MKcc9BcLBXa8ikrAq8X6NKYe9F3kAjm3kgF3Te48XR2Pv",
  "key23": "43czKvaaUuT4acbHuofAH4eNpa1R7crdHKien8S2Ppmmy1KJPjhXSfDHFSkX1QE9DvakYumUa9hs4umwsw3Umo5J",
  "key24": "5vfx7DvZuB9DusTX71tXy1Eaui1Y8KyJkJ1BrBsj8mse9NnzPHXe3mGJQiahX6DZcwX1hgBf8ZGKqard6Wy8HSaJ",
  "key25": "2MNizzAz2czHsDVEYVZszJuUdNifcWE25rEbvpRbs5NbADL6yyempp8rwEyTRktKLmvHwXrmoYpUMBCjKVjUX1ik",
  "key26": "2S2LTr9rd54NSg6GMCSsV2ZCcYYKQernXWyRVBG5vxrHmaNnZ65X2PSMDnAi5RR7ma7zWkKpACiENuhD7ryfRo4Q",
  "key27": "2UwgUuE8wzkZtKjLyGEubkb9ra6GTCy5wRWz3Do45CnkfjBAqXRgFB3mxgefZkuMdE8Lkp9B8PLppJNnRLarF39r",
  "key28": "3Lm3FTn86vP4RN1d61RnzhgmEdvMEM89PwKq85JiWrVGfwdQ65KhNJquhtrgQtabHeGKmohZMfTSPgKT36fTq3J3"
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
