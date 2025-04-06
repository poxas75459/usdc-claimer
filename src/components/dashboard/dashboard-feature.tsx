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
    "4xNa6wucN2Hq6L84Zcqm4VrwJFPYXk9VUZvzxDVn99b6SuDSGmJd4Hewsb84x3cpyi2oV3JP4PiirDtLBs5CRvoL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EJDV8FvFdzXYAWkHMAVyJ7YuRaUa5f4pZG3ChEG2B9Mc8KKztRGXRQNbLL4Sh4gLVTqbevQfc4ZjXVqEb2R7w21",
  "key1": "gbxSkRQSVcdL7m5hjJG78bA6SUEPNTpwXJ5GiwpuRTqREszKKPRUHfU23WpjXe74TzXCnMzgoVWUYgBW3RPMqkr",
  "key2": "2CqV4rHqAdBFPWN9b1f7b9r1YPKga7JRazHrCCwPtZQLC4JSbzSe3ueqktaNbfdhZemNzg1AsFZgB23vbwvzUPFD",
  "key3": "2CGZw5M2FLpXjyvpoXXhaPe5Fsbcr42MbqiHJeQ7KYdEuWhrT4kJmMdmwRjmT8ZpArhdW4vB9Hbx89w3Dk67FXaH",
  "key4": "3eYumyv3n1LrwbLYa16KuhPNNS3T4dyR9xA2AcRxHsVwHjzLNh3c1rDpUmQMBrNSMu6Qa1Nvv1WYSM3PMWia2ofY",
  "key5": "3Gn97f1ZnJXpQf8vMufEGjozQmMf2YQBwdr31eodHmDu8aCBCeeoiStvgnknbZYBZLsm55Tb8Ws7EETjTuNjo7Lc",
  "key6": "wKaKKMgTFmSL2haWDcaVwRAa7anohhXU5FzNvzQaHqmXZhs2Sm6ouGLgPxebATxJLqEo3niFDufEqJkE9Eo8CbA",
  "key7": "zEKrCd45VXyGPBUnE2iq6p9x4CeSBWwcSzQar7ZhEjgAYm5ex9XpV2v7vmoLMoE2mjEQhAfgwnBdHbc9GzYGSsY",
  "key8": "4yNvM5zqzEKVr67XdSn2TGqWhDHfwpY9banQ1aqLUzJ6xfXJk9EkbHgB6Rb8Js3cqDCYqrnC3qfJa8WV1LRyQJcU",
  "key9": "44HyhYYkqjbF9FW6tdRH87VQ3Ve8r8DNww35xriVPpLE1x5HS3sxXiRq6dvfehCu5mPyZnAfedtk9H9yAUosMFy4",
  "key10": "39FZsYo9QNiDNfM3LshDj6BVBacxfczt5ArdpgQ4dJt7xEKbYYXcDpK5uT2A29ARPw5w78HnkTq8XUoGnQHV4nbj",
  "key11": "5GiuRRY4Ck7DBs5t7gmxEaxGcBLGnPooLkaPkvQAdf5RVVk8DW7KhkrEagU4MLic6xcyUffg5DZ9ZGkxZiadP5z7",
  "key12": "5FuMNj5bq7grwmBS5bm4QgRMtsCR8EuNMdm9FAyKsMmqJhqjjYqFC5LqsuNrUSoMVmK2xFR2AGywtNUDhqoeSRoE",
  "key13": "2yxoNhstfK9LS41yBYaxkuf3oporC1uY5ZPbPTNtdfGoUaJw9EHv8PreL2sw7hxPzHYrcfpkHGb865Xs976nna6f",
  "key14": "4J3p3xLmrBiMPYJoVeWsQULT8gJqMCpyRkCRLU9eEbGgeNui3QGdsheQTgVk7jTxNYsjWU3fu7vc9V1BHJDfeDba",
  "key15": "TG9TR67X84M25eQRGTSFtB6SNoZAYtk1NoQ3JNKQuFjuLkAhbPqXtyvP2sHypyEbKYAjK9TY4cudBXEWx4swgJd",
  "key16": "5yq3gFRuzJbCAy1FSdQiZj5VDyuTSsPeutZTvWPPPkAWdAZQm7tCCkoKhXP5cHqcMSasqR2VhogHXGZjUyRifB4z",
  "key17": "5WhyU7kT1mmSWy9tdwzvnRJTGGCfF6ZsRHHj3wzUf4v7rtLFRGTixuiVvee9YQYDNjSckGC21d1gihRLHzemHtd7",
  "key18": "NC6HxqjyezLm29wPccfy44nwVmYJ5zYoTqZCSWaqDPze53ucNSDck2dBjqs8cjw3BU4ktySjKx2XgS5MjL6GMFe",
  "key19": "AWfuoYLy1Hc3aRQkogE8WmoPcZyXwJKyLR8JDdejnemk6WtojCkr3qeN2WVmXfyXYiuwDeYCb4a6x5bENjptuEY",
  "key20": "oGsQ25KKVbNtR1x5Kf7ZLUWkzWUQFvtEWBc5XVTsY2NsjBfU7S4iWYeQfZ9FN7r897VDL4386FynTUT6pediPX3",
  "key21": "w1KSK2dTnHFpEA4pp57d6yyzXnFvoBJn9UUoKUkdhJCyKxod277BrvMMygtseLUgSFMrph9q7QN4WD1BZBhncte",
  "key22": "oZ3XuhhB3UTpht9E3HQzFYomvczrfHnJSqBZBBqa6VwZyZnsE2L6H8jp7h1smJruydC8z9rUev1YYfq26ivoF3f",
  "key23": "2uSQY5CVAYWf5ubwswAmHgM9NhLKbUtRzra4PPH7aPJRfYxTJDRZxDnrjngybrkDTfvuonaiB6Ab6bv1ao3tc5iz",
  "key24": "2ppbomCBWT697HgYfhpTxrS2S7SySgbvKwxYu3rD8GUxGbwv4EoU1DmhkwtSMqH1zDfofb9nP4vnbdjWrkPAXgiV",
  "key25": "27SjUaP33AnVrSWi2MVZB1T5Z7oXSNWfNV221KkEaSsR8uwvMNd9GgDLgvpmXdmYiAKkArKMYi2MNbLNMX6ALVR2",
  "key26": "5HT529iBTBReAuvs4UCfokcDnzBLdWr91xSXA5xqX2AquwQAK11CDeQ2kdW7Pnez2Rf5zxVQxwTtTeqkZqrjCX8Q",
  "key27": "4C5rPVcYa63gDa2ukkfgj9fspfJjNDXMCbiczD16sBJuX1nkYjjW7XtCccqhUkxEanyKViYQ69Sp78Qt51CLmAfE",
  "key28": "3ydeYQfpvcLe6TsXGZioZsY9KAd9aHgoWCzFeofxzC4Bm45NBUW7vb9BbBLJyobwdrbKLTg57FKMGDCK88UXxgzT",
  "key29": "j87JDLBjhyYzYUEqivTnbazfuuiaMCgLGAyLzwhQzyZi45TNGncAv1qd892YiAp37HUWLTjzyyucPLRQkgP2iun",
  "key30": "XuTPD6BRYoocj9p7q9WSPybqBpuDKoT6xyW1fq1oosVdEAaJBY8TwTbqwpZkKdwdYYoTSHNMAmCknJiVTL1vXam",
  "key31": "5B8bc3LFCb3iMBgdLY1bC8vpupqv1HbwdNnutkG3ZMjXwKB2kdawBAhgyq3LePvcUN9Z2F9xnTvePi3K6Da8Kz6",
  "key32": "3uC7RY7L7RVk5vsf1TAyZP7YLtsZnDfaUd91a9rM9HwFJ6kwQBwLYKCg9GAH6WsiB9pzHQuHqgqv2ybfr8uYQiUx",
  "key33": "2xbmxv3FzGdQWQyD86RRtun5nZuR9PjBaFxeqbBzEqVMvSjV2JV6giJTzQcXa7GQrsy9jpJNGgusRRKDVtae7pVG",
  "key34": "LzhK9E2NESSqr375mSPeqPJkfnPz6Uk5Zbw6DgNZ94QzvBZzWEoZpAatgwSJuwowkdjkBKF1fHr5RiYZK4Cqfht",
  "key35": "4TA1dxLoPjgXTCeDq2vuqtZEyJRwUpDY6A4jVjRTfm2rKbnSs7vh6qDLjoMEqob4t5oHS3WWbvrEig6gcM2xXk8X",
  "key36": "a1nvicZCwnztQEpzdRc5teMHbbf5c5M2wCNkSnhtAJTkPRNvzj1NYA4DiqmgAVz9fvjchViHYtNdBTxR9DVWCyq",
  "key37": "4HcGhNnoVtBbPrLSJ9Zs6au3o7dQdFGv7QoFq84kNpYbgH6jC5tHRvNSgb8kFkZRvQpTYn8hHAfpTXa44XnBtRMi",
  "key38": "5RaMNi2z88wwyUUKYXE2LxxkyJ6ym9qwdqCtWhad9u7bgRciV7xb8VLrxi1djBnNDk2CsA3HitjvcwFqBG9VMhc8",
  "key39": "62AwTmVoVvMvdxBQAdxpnqbSSTT1w5khEQqx3Axu7jqcNwTMPHVRy1xMVnvPQZEULQdGtJMTUNZ4SJMHk5mexzdE",
  "key40": "2WXBkM6DearW5X33b8TZtHiXDAk31N1XtTd7eYpAjkmDuZGYVnot5qkPMKGtmnoAZFCZieU5n8ZS83HCCvrQwpu2",
  "key41": "53pEyrw4hGfWjNoJaJ3pg8SSu1s7zNng9h6KSS65vTzsk5phSpQmD7vXw4tgM81BydD7SrRP6zG8YAWjnoKj2Sxk",
  "key42": "2ZX2sdQc7ikE6BjfAYsU3iwgQCNjjECmzRTBJLgcnsPXTeoHTKyPY8w1Bbka3yX84FX1yANYifkhJMjXaWge51Ar",
  "key43": "5LL74CFzsrNXmszCXBGLRVQiYQ6b53CKYL9j4Ptq7X4fn9ceQLpj2idth7eoeJCnDbLwNeHgWySpML4USdH58a9j",
  "key44": "4kw5ZsB2E8Fkc3aF7atN5vczjQ6CETE8y9bNzJYnrEtVVzDJ2Fj3gNbUBUoRv8GeiQ92xhtR2P4v38gAkfs4QZfY",
  "key45": "5SNZdPDynzRJht1zJtiFrHJa2MiQxtNfK9F664xuSPLiqfSHc3k1GafFMDwhSvYuF3qeuvV2R4TXGpMCNgGeDB3j"
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
