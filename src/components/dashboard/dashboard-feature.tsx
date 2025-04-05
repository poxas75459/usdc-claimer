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
    "c7s6X3cRSu1kgfAeSVHFTchyVSGGB3AXWXWofrxgDANHrtKpWaJHVPqH256YaBQ3eNoCU63LoeXTS8LuCGao9Pi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TgTke8NGNpv7mjwsJVdZWtTeQyi11ounaw5koLTZs1LDLDpZoNwE7kAg1VAqXpMHmRQPk931ake4p67w68CjgZF",
  "key1": "wFrtpwwUFMSXwPNX8wtHm2GT2EgG57A2ycsbdHbmq7jVhWUq7j8P3XJSK9NU3wUUWtdzHzQ59pENMJxZMJnhFM9",
  "key2": "23c19YkWzXYPGcbky21GuWNExuG2WxfChTm6CSHYbzkXa9JUsSj6Gz9XKGZeQxhy9YEsEFRixiByKxPzsKCbR4wg",
  "key3": "uWpSxPnByZLBy6ms9hcBJUif5Kf8AeRRT67kSVWFBC2KKXKXa4b9kyPbsZtxVgmqvFngPco7MDEdT9AEWSTTNYr",
  "key4": "5CJ9HtHP1cuhUxyxhNkWwD77RKN2hUA1pUo1kZMBuYxvr47rN3W9C7r6zmnkCj5JwtA7L1XcdHZ8QeYxWyVAjvE",
  "key5": "X1epxfjtefiqVTSm51uAHQBZztgUebFn7NwWGc6vatj6fdvh34MKaCYnKJ7csHFzLwc5frtaupRRitMBpqGbmZj",
  "key6": "64iWr1sgo3sBsKJpYYnnP4yaWUFtjLTSrLotTcJmScfZLLyRhsHMGj1rK4bi3UyjFizhDcrqmzjAvVCDuhMx4SL7",
  "key7": "2fzpKgJdecXRqJPk1rpmGcefTzu9QafZWAeoARbhGPuR4ZbgTJyD8p14SuYpL5MUtSqnqwVpzpQ7G9HWBzzTweva",
  "key8": "63J24qSoHrsFLb6gMehgvGDYEQ7dyRKtaRCPwUJ7xMzsm6W5dkPTrmWQUkrbMSV2JubPdXsm1gANw1UpG1k35xJX",
  "key9": "38S2TWf1oWzZEpfXBs58iNCD6T9ezRBU7B1oUWC2mAQYbkSjeMB3qRkbaNEEYtDynPFZhxwe6Zeq4DMKaVUasPyx",
  "key10": "4jpELvijm7PDGa1PqZtHPszuyzBCgBn2FFnaujdW45YycsacuK9AKu9fYW5dS4wDwFXYgxcQ8zokVEK8TyVGZzpF",
  "key11": "54JmVLSTzzTo5uRZ6dTpw5v3Gx4oLn7zi8zBRGDz1Nmn4654nLrW9oCfkQk7giFyaHatUNc5aLAz1S2CkCBW7tH8",
  "key12": "3X46ApB8WTmJxUFhAdRmjF6bEg4FjnMHaa7LFxU6UW9moApXcBZymgK6VUhgVQGeUdeMi7hjp2Kgy97SqzSTx8jj",
  "key13": "53rWujZ4nTjmhTycM1DNMUQRnLDE9UDWu4Y5faMosKLjszDhcwFE92MPgA52ni8rS3xJ7HuPotgqEo7EvcSYVL1K",
  "key14": "kn3J53fXoBiBk9sbX2tYs6e2ERRDoG8F4PQkqYPUNg8CvwD9SXzhD7Qwjdm6z3Xi1cwyKyLaT42b1ayjHdFemJC",
  "key15": "2GEXdJfQTbSr4yERzZ6HzcAd6fkG8GeYkpJGPRfn6VG76fBpsjzapWesMN9SzP7Z7VYAAayGuBA3df2U2NyUTrYZ",
  "key16": "2VsMDoB5qhWyY4tDn1Exsm25o4ufjE5ZYbDJQ85dTWUwy9vw4zazi6pC1izDYsT2C2tpMmwrFWsdLYA9nnZY6FH4",
  "key17": "65DyVWqj7ay8Na1LS5wALvHzzjyxfPidav7e7TavpnvqNk5xzgin7Ptjcb6tBihHXTMLGj976m8kenp5JtWmj2Tw",
  "key18": "watQHnfwvKZaA5gBBrKXJ7de97SBXLvpxXbFwfX4KVbEbf9CFcfJCrvA74iVHLy2KXRuQtUCahW5ebLeDWeqQWa",
  "key19": "KzMGUEfEbTLMDPwbEwemzYGP9PLkvcWy2314ARNijVCGkVXRAqGDPWGcVKVHcHJpYXAS7hs6sDimQSjtvJCfsLo",
  "key20": "4iZtWMyLsfAPnHCfmJsPHAJAqK4yZ3JovpszicKmCm7CKJktLK6YLSjKULMA1H7Djfdi5UzdRxxmjjneCuzf6aby",
  "key21": "3cRF2eXQeyfp7hpDRcm8bg6sCrgUocVGBFDik5asAkWgLcS8y3Z3TBPfzndRRAKdkPgCkbYSkHjZych8YAg515sT",
  "key22": "589xPEVPswvyFbYgjNYXsXQsNAyTtsjaaBxCZrsbdpgRpUJngQGjac1w7sH1adngpQKL7aSjDjfBqHNZHXHHeAsC",
  "key23": "5gXWLAWL6eECKAEGQ4wpD2hvCE5oEeVqHYyaopNG7RXWaBcJWtXevmhTmf5p4GTMMsKgcJB6ehRBHa5qCbMrJwpL",
  "key24": "B115xxiqYxGVwaqKFQK1jnwmP5L7LeC2yeh5vkXdZQpXF1xb7XHLDqBKSDjU7daVpphm3wtEEfbFw5kEQ6LBubb",
  "key25": "61K3AfTEiHNxWS3KNKJoCUCaTEd4iNp7VcErrxKPXo3mUipfnikzV8eaAxsC7K3HzGzbVvdXg8mJf5yh7RXWweGb",
  "key26": "5A3vuEhbne1XSkJUTYTbsTiERuZYgFKwyuFQSoQgJgGo4YDiNfrRsLSaXgfJxSiY8Pwu235ZBzVK2HzWUWmdweYc",
  "key27": "NCwZyt4RWJkYspa6zYQbAuYnrLH5a6pHBibZR7nZv9XKEj673HFg5Am55TPkU9pA2BDpY1LKcvAy5rpAsAPaNDm",
  "key28": "sGVrj25zkZvwmo3LEV3X4DEXrqYQ1fTWLKDAAFgYMzLAhojf1emRiS2vMkXHYTE2oKc43gx5aka6sbVoyho8o9o",
  "key29": "5bFYuGtY6hJq4hbvAwkzvgYiMAXSJKQ4NayLBPaHntLKM7nvR4Q7xWdH9T85Nyhm5naLvW81Vqrwcu7L12w2Kz5H",
  "key30": "5vz12tSP6dcFy3SdH1wDBq3r4dDScRkuW9d96b5rxrwN5YWu3DAfztQBaZfsNGdD4U3Dd8tvQHD8Nxu7E2zpVJQW",
  "key31": "7WpCztPiyrzSYhcPeuto1Ljm6zAMFkFUTYFE76jFYrLWVKDGo4mgYEuGNVz6Foeeunk2gTGLx6LN7mUgpsMuEUf",
  "key32": "2PXvevTFmcrfmZ2SPkq9pjunemzdYhgbLc3wSnVvqYR5BzawhgBjBYqw22Zyy6ttAdXw86Ehcy7EL8Sw6cRqoD2h"
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
