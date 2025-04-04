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
    "2kq3No7ZgBLP5wuHfCa1d2bjybgVz6fs5WTtEVdgBZsgV93v9fMcNfkfqRHjstD4KF4JtybU67TEdyUWPTjWfzPh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NhFmdemo6Yt2u6Mwi5atkyukotBSrxeyqJsL4aPWsFV1AumACHXm2Bd3ARNFVuoYGH88y67iVJWp7tkEq34a4Go",
  "key1": "545UTFiZLCPq5vSN3hiv5CfscdzJVzpTcvtMcMD1ggrkBm3m8NnD27kCyLF9iZa2iKsscrmvvcdgkC2JoxfdnywQ",
  "key2": "GPo29srTzRp1Vr3AaPiqrN41WVi6c2E9RC8catYqeusUW4hFhc4wzwCQ6c1F8UmCt7q9UfQ8RSLLJKzfU4exQax",
  "key3": "2pC7krEjXZoE23RcsaYjn7SwvtPVWjiJVACU334xNrQbXWWu66Kf36iVURHVhr2HiRf8JF4qXAqCJnomWQv8qRRV",
  "key4": "4CPjeKiTBCWtrhTcuKiqHPkVmr8BpRRGpnZ1o9LyS85Kama1AkgCYRuMcVnny1aezwwcmANoMWj7DTjD72f2FQoE",
  "key5": "ZaZ9f13QCVzeBRa6RSXXdzjw4z7si4MYtiuS4rJGwoEV4kCmgzuVubwDAYjD3VcDkp1SMp8F1voBLCfjx5GW7tu",
  "key6": "3WR7r52Dav2AHsysaf2peyNepab61AUKa7gyMsr9i3DBvJboM6GowS19pV9vVqHsh7ha6TXm559oAUoaHyngnxpH",
  "key7": "4E1Bk9nmmagJdpxARTJegJQ5iSXYWfjiQDPtH8rcCjyVcmikvdeutxSfRVZJLKSkTUGPLFQBm4sLXyCABT6nox7L",
  "key8": "PbJrkPfhDUMtxhLdD1Vf4RVkv2Ku6ubm4UgtixAmhmXyYMsBmdk8QvqJTnWRZEtfVEfz4oL8h749jTfYsdUdabR",
  "key9": "2jRutiDj9HEU554p5NP4u4oRfPayQ3MuAznXiyBacBh4pKFbTm22ZZtafC9GpfA495fqEBsTfzRGAmeJ3MFjTrbN",
  "key10": "1nvfMtBdjDQtgV3m57kJc9mmqiZ1T27oPXPErEeoeZRDzMnCcuhS48K3k64VCuNTHQqY2i3m1TNnTtFfQSDgddg",
  "key11": "2siqt76firGYQeGaTfaNJq1mDfuKoKpsVUnXovZ3sysiJENzCYR6Y62rSykTHRkpvELmqUyg9YhgR4Y31qYLz3bW",
  "key12": "4jPQww25SjUXTbCQSkSw8C6sVh9pdeGP6rPEVkA48Moc5uP6Eb9QfF1XRDCpFSBdosYKcYZuWbfNDBhFfFTCT9eb",
  "key13": "aGex3fafSYEqxeANZgA2YoFfJ2ZWRc711Se6zYsNDrdGfzCJUgBLGUFFXXR45L9RW1rTopUqNDzd2ktiq21B33S",
  "key14": "45dYy8deXwVkrZEovnqVWFvSLbGorz8qQYZQnHSJiCXTmLbkk2Nqr3ptBc3YSwp468wQY8apWSxLEJkXQhUcHdmm",
  "key15": "29L7nZGu8MvJZTWqcSAod13bkfQxYg8regwH9hZ54QKwU2a8XoivrftERHAhQmokv1h5jNa6nh8fHcQ3qCttTnae",
  "key16": "4sk3npoibhWoampxttgSQVZLaL5A4Le4nRWjWikdfWMHaUfnZLUyHA5xKPshFPiEyUi1xLP3Ck9A7CY32HtYQ6hu",
  "key17": "284NiUqa9nzibiC7PQ1fwiYpuZ9vzTtk75dAzQKitLkpjPqfWNSVcSNcSGxfaX1Vv1jfCj9M7YLxRMddNNBoQ917",
  "key18": "5cVGerGbYnRXdHb7hebrh9zkHa13aKH1VVwba1RzCXbQrtxnNPoW9QHANCGxRB98r37eEy2utSpMvcfCRjwQm3cF",
  "key19": "32usCSqKY6dBTPqNRp3wVwVF4R2JdCMn6s4sh7BT1UxJiAZj1EidJ7hBfS7V4KYF1Hc9XSBQ5dyJExE4aMx6Mz1H",
  "key20": "4cZbGb2iEbnsdJaMwD4MH5MsjBRtWec3w2HYJazab5H8RWNrEjYqBiFMVdpZ9M4ZVvgczB73fCV1Nn9vYHKsN4Xs",
  "key21": "4hZWgWcCpa2AoyzxET6wZUnBXf66VnssEjRrEWpLB9sxUbxwEs2GassLESoyZZkRRZeZkDFs8J2oVGHxXc9N4xUV",
  "key22": "5zzzXtJ2SPXoh9tv6tGJdzrHoASdtkes5sHWqijP92F7CoJJ2wxtawFr8xpQC3e3S6zZqoFXU2tBx2w1TkKz7v5S",
  "key23": "5ntYnxffgXPkqv9VfWtMWYQq9tr9mBzufFAE2ySS2grLFcTnZoHHF4xJttD7Y3bULbZmRCsBqXdgLBApFRUD89At",
  "key24": "4kAmDDJuNRHumyirnu1SgBYDpprEhdUd5DT3hnJmrQ7M2LzQo8EtZJWNgZXLxWFskQNA85EKFXoVK61zstKUC2yN",
  "key25": "45sUaYE8D4q1jQ6QrQJF82CLAWwV3FMRri2WvFDx3rVNBU5pmWM9uMGeV6KwCwSmFGURwPwdgTjcZP1W9mYnSA55",
  "key26": "3B6uSMAGjGwAw41vs52Ga6GFniRHUf9R4iKpdnsyuUVrsUQ1LDVpurn3ZvVpRREJjAJ3xTSXpyE49EwtFEDvQSAz",
  "key27": "32tHJfPf2R3YFKxAtjhQXLvBweK73PV1pCYFKV5uD5296HTPZZMji7LbXGa2gfuxrUjrE8hCxnS1W2L83MyzHYAC",
  "key28": "L1QYQi6jGRJYowhNhjLyZb2fD4ReZo7v5b6Ge6ZvmJUp9r96XAhNiz71SYUihF9ptz7c1vqcUEN6GB9XpaWrE7p",
  "key29": "2TerDSAcSsEMxsXXUgM8W6jEPzW2tpr9CRqBtmZdm3jizS16i1xdNB6iviCyahqJ1Hw8uvAtbAytdtpVGP6K9kWS",
  "key30": "2jD7JSzWzY8zsqdexMJNAwUsFqetHPUKMEEgsRWFRQKLH5TEHAWfzcLkn8h8PwWRGVpk1cDrWNLXsRVbvGSkiBF9"
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
