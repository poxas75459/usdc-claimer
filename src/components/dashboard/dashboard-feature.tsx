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
    "51k6nK9jS6jvuysjK6vcW17oRn48S4vxAiNMuniZJQSKSwepytksXztN2oWHo6kDTrtfu58JcyS6Z8mGS369FhFB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LxwFY7PSg5PzweBe82uN7kWmcEWTkmdrLfpi4SRRctHwTJaB6dwZHawTVayonBdVW1pPsRsYpBe3Jygon6FCBkr",
  "key1": "zh27kaKeBcSc53nZbgv7nrayquqRpB42hEgGgdRbUAXXArV67TY7Y5oYmzaBwsaRYYL1AW9JNPM333DNMprU27V",
  "key2": "7aSexS6PQnL5cvTtyfgEB16n4Wfs1nrHnGvy9VnYdwErZhjrr81sy19WL6iEJ6oaxYcF5yLaFfAyVfRd2o8h9oR",
  "key3": "59Mhth6vodrKhdEEjZSgPx4PhabaNJHmJJbW1zYq5J7YQkFJuABpLLRG2PFP1b8uLsP3cVTbNzcSJuM8FKK9DrLv",
  "key4": "9cmTdAobpx5FYUAVSffEBXjwK1ifaToVbyDdap3UgyWfaBbVUF3N4PqMyvXvhLFxTH3SCDedDMXS6384FfnPPho",
  "key5": "4SZtfsDBuxBfBJDHeL286AqLtwDPxrAqWyon4q1MXWmXVcoAYKsNSQ7AJD9wneL3YgxrXMvRUvTDqdMfbxHoFKmH",
  "key6": "3hhZ4Su8nNbaSTkepJjAShEwUZaLpabQQkw1jTiaoJLNb8vGpScokmg4GPSCywKDipex92QDa8eaCuNQiHvj8E5d",
  "key7": "C6gmShMZzsyeGUGFJhF8vfpXzGJhL4vRk2sGZDxfWaFrK7Ao34jh8qWY98kqXq4mWWtYBnUE53AvhU83eMt9uDy",
  "key8": "5ZGWeziqqLF2EfDMefQwGQdAGruyo8tL9TMvHB4QoVXAi7xrztHZ1p6XByWA9BoDcYNaeH8c7zXgTbibyToD58mx",
  "key9": "3Aw8SUpgxd8mYrQuKL6MfmNYCBiwSWDoQovqKN8RuqfsaJQDTuXCRwvH2NcfXeyjs77eL89EqXzpnYRXYU43uJZM",
  "key10": "4FC4VsqLwVLXRFH4Zw9e8tHNgi3opaD2mrnRhRDFfzwQgNN81h4j7czS3AqaCMpkF3HNzBLTJ2T5yZgBJ9GeU7eb",
  "key11": "2eNoKAmssvW7Z8koCweRsFGJaYhmB63pYCJxTA3JcN4SsDeipqpUQEPCWBkkTWYM4xovW2s3xaDxxSUhxzKBLDBC",
  "key12": "3kmYBqRkPFazd7N7mhcEudjF2DhHFcXwaDcpfaTMxzwsAzBFhPWfi6SxY1tf8UYitFV1ju6df8dqKu7HNxqs123A",
  "key13": "pHQo7dnoyijwJTg6M4KcPeQ2eeQC5SSK4F3XeZH37yZ6MXpkvtqLXH33Aj9aioCpbbTDg3rs6DkKW9XSmtSiNvY",
  "key14": "5BsigMXJX8yUZJBe4vLLJAj69szbUyTvGSEBLpouq6wKsQWLHiDAGzGAThoEzCV9uFJV19XqrH8MJF1M1e4pRfUs",
  "key15": "2F8Dhes7ZUYUgaPAa4JFAH17QvxPTCJHjDhhK3shLrBL35DvM9X1tcxmYDZicYnX8KFduQMo2otsuWU535FSKC1h",
  "key16": "4pR5QMwdxp5mF7VBQpdwEH7HAHHuNe6diSrz72dzwAecDRFezsaUShnwdZTvJpQ1evM2pdePJPk4gUcFu2AE5MrA",
  "key17": "z6ife1nsEbKvWwRZEvHaoNzYgdFv4nCAYmqvm58e5LhXVuLUExPWLrYs2PALteZgmRdXUnTd5uvAS4wmMC1dtNt",
  "key18": "2DbsLDufV3NfLcYUkW9N9qpRCDLavujCCCxnqBATQ9oxvHTMHsiu4eiiLEuRGQDrAME2NqkdD2wjRiSiDoBMPfvS",
  "key19": "2ENihKHTo4VeVmk3kDHSmkE6bvEvLFnLkRFwBQeddKuZPJ63WQYUD8gdhcC9WBdG3EaH4zSTQaCJ5m5YPDPKwJrX",
  "key20": "2SBdKteMaA5LKStNzjSRcorZsR5ug5EFiVKGFK8QcyNxZU5p4DDNej6wQd4yFtkV9NFyBB1VWoKWBL5KmBJkunV3",
  "key21": "3fiqF229fJ9WsTRRDF9KXErzyAtD6XGwm94TQwcyG2zLieumajvU2xh6ufqYbYjvGqVns7sQw6XDSie4BK5vq5sS",
  "key22": "5392dnsZyvnSsRBwiCfzPB3fNhpfghV7fmc19oCbN6MVEQxwbJeSLazscUSLeSXkbJQ3ZJ2nF1yQWVk9yHdfyVrg",
  "key23": "4RRcXDazS5B7JTovRrKsSXWPpA14USWrbF7S26d9dNP9NUi41auBKqhJygHqdFWoj8AQC673NRDUaoFGknzkpwxK",
  "key24": "5cH6QCgahX9KhJRDxpfFSbuDdj79tnewpxjWPDKSZaJvgSMRZbbxXghB5VZVELQyWk1EyXhYrPiFvjcNBtZbvpAu",
  "key25": "LmuCfx4qX3HFWWLA46Jb22ij6KB3sFCa4FS8QUWe6JWDC8dbWrV5XagvfvwGcagyBVPZLvQbcEjrvmnpwMjhzRd",
  "key26": "gNTQQytwwT73RVxuBJbK7b2ScAz7kkWz2VSmdEUsREqfd69hmYbgDaA6aBnZ7je584EBSnYgEj9aC2AfAs7p9kT",
  "key27": "2XEFoifGA69wytR4x1ouYSvPEhzqe7FdXiSaxuWRbUF4oPCUngFS7zLkNKvbqXD1WUj27FntS8i8e4TbKMzdReXE",
  "key28": "vhuRJZX2SMntzn1dxZ2FfJLheUy4Wc6BcnBVG23dARvyAXTWa85rNCxEaNe4NNCtebwPEwNfF8hGQeyyeARq83d",
  "key29": "2SrkqTNQ6bvgfc6zYjW2DkjNTnGjCCjfbarbrpQtsuycqsM4wHWS4g4pdXZvqHwzeQu11favDec7842EWfDX21eT",
  "key30": "5JeeGUyECUu5DTeEuQwK93LjuPQcC35t8ywkW8sQL4sbqcfrP18bQYKr9xCCkFQBzN9JfAtvTkrnvBKm7Bsfs4wp",
  "key31": "5Gdd9DymDuDniLVhFKbiUXyVgqwRsvN54ymPwUE5RKnRrbWU8s3pjmi3XSjPni7D9CKPPy24Fd8nfscKTW9Ao1pj",
  "key32": "5HDz8hkq6qmhCMUXHAVrywSbDDcowxznKdpZeRrAifmNTPv3mHDEDrZu5JRFngv83QLCmVBNLTJwzbtiGpAgysY3",
  "key33": "5dpLjffszGfT2jfoCqCorF5JnJXzDQAWjxaaAXZMpmM5mhQLmZcALBHHQxhetTqLYQcG9KC5A1xz1AgYRTyvvpa8",
  "key34": "os2sZZiNGbd8Y3mntES75H528Rd2zTGumcHyz5CsVRQ8QkFH769yMUWxaah5DuP6mH97n6MAyGryWTTdo4jtKCQ",
  "key35": "2adeMFGpVoLZUjn12j95VEyhQ4xibzvypnrnxUnNAEmiDxdMePpeaG3D6B7atpwJRPTP7ideyoShGBzZxiS65eyC",
  "key36": "GV96FJ6gct5wFSdqdfgT9hR3HJdRkTHPp6yQbfT1QXxqC5EDSdKibybhpsAMCrsgbKWvzbW8aHqnnWWdzHA446a",
  "key37": "2VSMRDhGXvkLiEzGyW87juRhVBbX89ujbn78qQkhkJSLaTLG8693VarLErto1u6SxibpCYFZiXqf8z9ERE2X3xRX",
  "key38": "3rBnKcvArsfXu2CNeiQGvxxiA5ZCudYTtxRwdfH4NHr16uMeK8s1vLxe8XvNNYefs8VkFQLULBjaFHG7w86W4WQz",
  "key39": "4qpakG7ru9wGawr6PT4QzY1P9uiXxu1mcsYggnBdtRPCU2tV7RumQXDpwRvEmiVQRHXS6jwGE6bCTvsoKTmPYjr1",
  "key40": "4rYhXsNbBvoR22gkkX8BeQ28PZ9XRLezX8L9AivtVSHceJs83bXsz3iCSLLwc8HMTCMKRpgc7GGtXoK5iRncahKw"
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
