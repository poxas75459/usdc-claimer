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
    "5CTsF65tx2g9hcyEQFPZLfz5B5TN7WrvwEY1xvpxza9dXu41w8cdfBJLkjSzJwjLqfK2MsH4wmGZnACk8GLa4hxS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UtnU9xTa6QpkLZ6ARMYKziUKPNHBfXCp2Xmq17LcSGL9PLUAKuBkVkRiXiXSCqX2smYAgW63x2DAmHdu7ETr2Tu",
  "key1": "2Nhe4QANiq4EZ2jN2B2aHEbQtsjmoSYe2x76fPJ5YR8qkkpkxb1usy4NzYUqasbkE4EwkvnPJc5R1AgCVtamvb9J",
  "key2": "2ExkwZGhrdRTZ4dGc7LgHaTYpGYFCPHrXDkEFcgzGQQJfDprt1aNsvkSdRYepmzrVP9HmR6ChJG7qSRCxyYWFjFW",
  "key3": "3xrGn7oPBevvVGLZF7VEPbD3Uvn6KgvHSdK69xMPyazoxaHycpdMe9ynhsfvKAjnuQJVHcCbBSoeBNNnXgQPtjF",
  "key4": "3Cnc89xJAwDw8NxX8kkhu2UiahgrW1bngj3mSxiNtwANtArrdzHSDs76VGg8FiYGGJspe9pcSrVbZgZChuNH5R48",
  "key5": "Hg3knpnfMFWLaM9eV9U6LPVWsiqvEhyKJ1AVstGVnwkNsXHZREznrnLWbudzZNyQC4yumYVkmbee6aRLRVm8pSx",
  "key6": "3wpKM2Lz6fSVR8ACPJW4xNTpVcH8UHfGdWuxz9WQ2So5H2gBJVbmegwn8kESgeA6KS3Szoee5ru3K3G8C8WeeWv6",
  "key7": "2n1gfdMJkpdupkqQbRbfa5kUnFXcumdHqUrVYssVn7kJ39Pv7Hv6vJjgLD7hucZP1W4KfcaoyAtjrUYZphUVtFhU",
  "key8": "5BBijZ7p3Q7rA7CrexmZdtd1tK8e2xfrQoghSu2c11yhYRHwMy9fHmC1x7wgBNUSbj9vhyQcD2Q24GBPZjKqfAiW",
  "key9": "4FmTjSJ6qrvae8RUdgNT8bYb6xiiqVVpXroNL1jn2FCdWo2QoXYQbkbiHJebjVJ5XsgkpnWDuCLHALG5NnrrKSY7",
  "key10": "24cUTPpwHAJyyq1mSeGb47zcNE4hdeu9y2CkJMR37FeEFDWhQib9xe2aHh7R8x8hdsyt5ABrSfENmuMwdaszaTsE",
  "key11": "5sSUAN6FbFB7H22VuN8PMPDeZggPLAUfhGzzMRBt6mLCrXg55DJ76czFQ1ze3NJzQXPov7gbZByZFHXhHcRrANFz",
  "key12": "59WGuPedUeU8zfWxUM3gcrMj6awiYznaLsvY8MwAdRhWHwN87Smynk4PspUdjKPpeUJ1HTrC3dVumeCxXFJoQ2Mr",
  "key13": "3gFfmm6VR5rGZLoxVfPeYqKZUUgPgjqF9Gn8Dn4rB2wNajGWBcNYFg6venpLVEdGms67G3fwq93icCe4wFcxSENc",
  "key14": "33TAeRw8PEtoioVTKzfw9uKAcTCcTEd6mm5Boxb68Xihk6tuapFWXZ96DFK1r3N557VnR2dYNSPqr3LueFWxBvPs",
  "key15": "5ugVA22SiduqpqxNC195apJKiP4dZqrXheUzY3JrFS4nBhW3eeWq2JJD83i7ibGmhBkTvu3dbcHfUupCrWF9UUei",
  "key16": "4oHb9WYExCoJqjJpd33DYVstP2y5FYZLLHQNNgLf8DM9deKLZZKHSciWbCVXZsmPtrFezLdnCJmphBu8m97ZpdYT",
  "key17": "25RNHRmYQb4NpoNPvQ2D11P8CGiDb2FnCLXxtWCGqeyXR9hpxT3SCXA4vCMFhh3FgfkNHzQGy37WZyotbUCnA9VK",
  "key18": "3HiMkoSk7Abf1BWe4x2bXeosKPZDeSXH6RjiHe1TrfasMwUvkJ53CvNow3AyTsSG4PkVVB8MPsSaErSQHF4NFHR3",
  "key19": "2ZyLSksdB39iHwGSASVdMLgnXt9rfnprJJzwqkD8Y3k4Wedo6c61Nwt5L88pbYoX35YtTCQW1MyDKjHUgaQ9s2Z",
  "key20": "4nmHxBEiSbXSNW5xpxGusSBgGzPS8tEDaGu4QkQLKKETHu295cJdyj9VUE9R1BYAZ13RdHyAw7KeYC63QXgCzutf",
  "key21": "36hPo9cbZp6t2Hgmj1tDqNJmpyjGu9EyBbgLUFUpgjb7gCoM5bb5L7sRGmAVnncccXf2Q5T4FRD9JuJspQT9Zoe8",
  "key22": "4z2DGhmhRWCABq7BGPFGBaeYCcXHHbTiCB3uUiY6XUuF78TBGSrtobKSug1aeErakiHqK2ERisf94wV5PbaSi4YF",
  "key23": "2C26dyiQK3bFkav1Ge98G13CLoNQTgdrxwvSCBSepqAiKeqSSxTwMh3y8FdwPzx3eNiSEFsWodYHc6niMh2KLB7G",
  "key24": "cp4S2n6peRsiJGMeDw2SSDWAcocHwZDk7gM4DzLmfvvccNAkgCoRedc4AB4R2qc89SDWhXQrxNvpzvSPm9sD2Sf",
  "key25": "5mu1LzqFWqsg25tkDUQnT9ZzgaAetgUQBNjF4gjsoiqaM4R9SgYwBCgnFBQZkw49r8ymhhLXBVYFjBqbJAQDj5hH",
  "key26": "MPKNzNsnPfohHHFLZM4hWBkrVusbtfRnNxzxFGg4TMss8oy2HDyYiWfSQx2j7EaKaTqKoEDwy6jYdXwRG2Z3m2J",
  "key27": "1up88LjjkLj1SKHYkgPWL9S8Y5mZxpg2V6bN3Dpz9P4nQB2TBH1UKPj88eG3KTzkvqGwdCg2GE5qHSTs6ScDbhN",
  "key28": "3TysPS1jTdTKS8tuKHmfsrQywgg1RPGMC9qYAc3BYpH6cK5bMsTqUeMhU2MxtcMp6tz2WSczJzNFKeuLXYZQ9YZy",
  "key29": "NFCjc8UbGLiy7aAKoM1CjwH79CYXWkBjekYP85JiQWDp6euCug8uqgp5hhB9nt7uCo6chM2K3oRfutqNCpHHnbY",
  "key30": "BLSCwN2z3KNE5gkrbcWWx25idKdxC756xhjFA4CNV9U97YvXvH5ozWdAjTPKmKfDRiRU8EV9dSbX5zfBLdAxpz2"
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
