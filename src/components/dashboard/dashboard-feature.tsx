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
    "4rfRkQncagnvuzbo9ztDJ3WCWFWM8sJWDCPSyb7aeNPiEb1yTLt44p6JBRHsZEBvz965TWpbkkhmszZ4xNT7jTAd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Unt1JDXtT835XqFWFNdtJgDYdEuhDzcGPpAJRR8nD2AzFgr2Rv8GdDXX1mAoYrUgguuaRfNAW5d5b4rr48qSjAk",
  "key1": "4bgt6VHfDvBX362utebnRLmQaGYg6yYdAKSUhjNJxErjsqhzRowuodvvDi87X2BUL1kaGWJei21GNe8mziua1tAY",
  "key2": "GTYp1umqPQuvH8sR9eyqUt2dKFHYw1ibNx25Mf9PXxtfVSdJf4qfyZmdTdJU3Q2mJ861ss7eiXq3sYMe1NBj2Cv",
  "key3": "58eHr4V8ja3YmVqtZoAxBsqAiN1d8m9aYe1E2khoaFXGvsNHdRDRyMmssb662kHMw1v54NT3PJvwPpkMrEGAYusF",
  "key4": "5QKkWTvxxnohHn3gNiTPVXhBWmDF2zDSB6sJJD7XKQb2Z5LYSC96HLWY4TMFKPjW9wP35GtJHmdJ5fQ2PJxpWtoA",
  "key5": "pZffzieCS98nv8FzJdFxSawU16ojmVKpeMmPWj3WYyjuf53dTscSePBcU3ze3FMko1YPwEvRKjRx1deeroknXCc",
  "key6": "5K9vfCKbLCpnW5D7Mb1VdS2GvsW1rzmZSecaTNpawXoWrZyepwM4RHYAttHHD3fm4q8brbLCmJhpgXs2SAZuTHmS",
  "key7": "4nyDhhz4gPnSkKhYBner7L26N5gj68Qw8jPdE7ebmwK8gcZRroJ21DR5JSVsXVhHkAoDvABZ7eiZmuLY3o6kipK9",
  "key8": "4Nst2DDz8HNDaaeQ4jeBcKb8NgP5V3bTUtfsZHVLkDw7BeR1ZKATZM5qYQS6pH3a6NS8i9WRWV5z13LHyWijvSRB",
  "key9": "5RRak1KsRez5EMAJAZzhrs5MRghd6o8g7Wq7bBkMKu2bXUZ36WLfzQGXXfKLg41r1G23uMnCNrwAxbrzPZPNFa7w",
  "key10": "4yY9ULqc5ih14SRTcidHD7cqDP3KQXyWPh5oV7avPGd8pHDcHnki89bPM81uFCfrqsuhgmxmK2EZKHcbmUrMNqCG",
  "key11": "3fbnhtDv4uKsmGGbqhFYUbZnmv1W8qV6he6CrMZvu8ofE3g55nxFYr16Pyxhpnj8Kz31kaWwn6mG7PuRPyAGFejV",
  "key12": "Cbxw9AJ4PdEEBNw7nK5LfgUYSYJYv3ttCpcKmdRcaMK9cU3HanNJwAaBqq9mt1tD1aytTLmd4wdDfXYLSZb6mbE",
  "key13": "3C7rGgXo1sSv7yppYj7VqEZCwsMqLgBRs5XW2QUHnWosDSEZkfvLR6teHT7GtPGHRfb3gd2zbeyFvxBiNshJ5xC2",
  "key14": "4JgzQCLYfbAYW3uYPbrPw8MDehjybkVotCjtzFLFbcAXQLej9Ay6wiUHMDNsRV3fSWLqfLo9YAoLj7bmKskoeWxg",
  "key15": "3yZX9mvxDvDcVH4dGuiu4AsMwREtZYXmsLBSBQhFaRChG2qxXPucaaM7FQkARcnMZFE5xATV9EyTAxzaSH7xhgat",
  "key16": "3MoAzCaF6NzyCKAJ3yfVmsNj4uK93WRRW9v6XGp85GWPSihZ8ouSJZFuYxhRcBu5dxi8rgMwNSgt1rF4qS9wMgPj",
  "key17": "5Cijo6vbJi7fspMGgu6xarCjNAVsK3eHJ2NyGyBuAWnJoFWTvQN4XSoJZigkNbMqZtzLiaBfNTx9W1ZucmLZUPxP",
  "key18": "3tjA5WYpatjPxA8hd1PZoj5ChGBatwkVcUH468TfEmXRp1njTTKTnq1BxbwtiRuxwvrWb26ZVwuAwHvZWo9dzoqj",
  "key19": "2rW6m79qsHGD5rQQmbo8CFVrMVrs5sPcy8dP2EtHe5KshFrke3ALiWH6MNFW47fTchURYU4ucSomPwtzfQq4G8PA",
  "key20": "m9VpEMryNKbgdhHLSXTMNg7pKmXVtMRuxuHNs2nRkABxyywEQD1cEhapKuKwdasxrA53CVgnQ1LonNZ9wj1i7ec",
  "key21": "3G5E32YPMvZ6PfTkCQHvyxUazXRf4Mco8nYXbg37fn68wsWqG4YvHH49Ju5D6W6uHaNdruxTxcqFx7iAMuzQLMTN",
  "key22": "3gRj2yQAEzEoE6W8tBgnbA2xKr6uFjjq1SJtduegeFVUpHz7HdLiX1N38DbyQDXyu6ALnBDkNoKs3SzoJpFJk6CF",
  "key23": "5CgSGq4TfUX7YBWowAaBVb7M8CXMdQZpLHpoE8ZDTMpMbpPQBsLHoMm88BY8p4PrtK22zZMuV2SfxqqCtRzmZPus",
  "key24": "59PZaxrVL5HUC2zsDiL9sKZBwiPkBC7JTazASpYZF6VHCueWYpzkjG79FXtc9Gz73kWrc2YYaEyuAGfT6s38Bidy",
  "key25": "3FRdzVbVUgNjsZA5M2aeBjsMP27vVrGKKCWvSf17tdZhtsqjmiwUMsrjR8tfCP6LsJCjRZeFaqPYEbPnFdHViuUT",
  "key26": "5VKjkxpCoN9ChnQdvHQkPs615vgtoY3mFHu5SUXQF7LgxHbSeBoBMr9Bfr8qimrNTaMzHtKKXGUePhSgdVxQ36FA",
  "key27": "iSFxno7JGJLsTs2fFRsaJA7yc5BDaWwS5QQav4Ssd9PJ6ane1FjMqY75Ro3TruhiALcvP4wgifBcB4Ed1bbZzZr"
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
