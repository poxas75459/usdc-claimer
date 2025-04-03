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
    "ZXMnEyBRLKJpB4J3uL5yPtQS2ZfSJeunfgQosEQNfb8GBMduD9dCdfuVqGBAvXiZwpDBrx5gh258vKuqJdKSzwt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CdzxqzCse8z2knf8qVXAUrN8BPyQQ6WAwBcwRy1awxfptsq9orQo3QkteVtwLMDcf54QmDPL5y5Wfitb9J4QqxD",
  "key1": "Q2K4Gx2KyyQs2U3EGcDD1nf8MWscy4wiDQ65P9D1VrWRoTqkTKkFEYfTeTiEgRuzprULThPeMnYoe8nkocjeEuJ",
  "key2": "srUH7zpEwALSwYPKAhRp6DQjK7eYHVNYsSWcF4zrtNHJb6ThYKVDo5HPgjz3Bnq1PSsYHfM25kBRNCcAcTsJQhe",
  "key3": "533ipAv61ApDUoELXyBc8zz2cGgu9JLYAvzDoUKpCXv641aRLqS1N9SCrctuB6t8xy6sx5YRiz9KxnuZ6nfyjsXt",
  "key4": "4REXwFhdoRKGyhK5ndVmEwWccZ77EcbsnyStvabsZvG2Joj7EA6M3rYfZn2xAYZA9JPeA4MDDEjXeM3nqRZEvmak",
  "key5": "9bHYibo9Qr6xGLiFYews3oefkQi4M3pgiimQVfhUxzJWC2RBADzsyCp7bE6CWyJGp3pzT93j2rbwdSuYQoiq4Sh",
  "key6": "3YeRGUmRrzjcqFBPCg5Pqmcnx4AeQ84tizpuYGKL1yQXjaNA4pJES7tPeJAH8wVJBKecNgAD5wWkAB6kPERQTWY",
  "key7": "5X2vo2rgNrcAXKgYiNBrmGeRmdCnyb44xTGiqczUtUimp7F9vf64hRLNmi79KpZM7gpQ6TF7rE83nbR42LNWWABG",
  "key8": "5eVgo3Y491SfxT6JEfAtLUuruHPFd2xYdKmw1V2U5WnbRxV5HitpoKyqJvmFjB2W7iht6JBYhgMDH4kcbv5C5bZu",
  "key9": "3mGccQN5kMVkSJaCTvJpBY39WFnCgUkRh8ZVt9JtysTcNL16X35EMdk2xNQfbZMYWLrpsVv6M5dpYJ8DJTzhkWr1",
  "key10": "LYyvNQz1Dn5ntUSmuVr9sbscJHHfVnqRiZiXzedrQMkhjgBG7j8D2QQZkr2L2eDPvYh6eo7nSaUAbE5hbca72YQ",
  "key11": "65pudHyCgf7A3BE8St4U8KaCDoKDjSJfHhN4HDnfC45mc58SZxXkMBUM6wAqppFaykACvgbuPxPTC7mwDx7LVbh6",
  "key12": "3UKcreXAvuWqQa864fncC5oSYXthkYKcUdznCQYiwp9x2gVfsQBZmNS4FQxPe3z97xku6AKTbrJcbsX221w9vscW",
  "key13": "3GWybhVukjYVfGwFitCJvvFAaWRycWjkFAc74d2mtqMCHGQFLviSXExDjngHQCEUaPtPvrFxTHmXBNy9KRJbwPP9",
  "key14": "5V28A7gNQ1gLTeDtH3xPfGCjGbeNDpgqqeBDdLzP1ihwpePbTk74vZjHFneAfX94mrn7KrJbURhcphdHoiNcVSUH",
  "key15": "3WENKyxfDA6m9ZYDuGnPD6Rk7UXgKqn3cnRZGkzgVNjsRb547KsWaoCJJthC65ML6NVqEnwYLJWf1yBawobEMDvx",
  "key16": "2LH1y9DTZ1D863Z7GfJXAgGDb8hXbjfpkzAH3fxDcoFdjh2bRrbKM4994gJ18pTp9mbgqpSirJipEk5ayvrrB124",
  "key17": "43aSSQnbsmZ2eYvp4t58YVPFXhHFbjbmJyNbnbNMev8SiUxxSQR3q2qwar9DP7fy4Ty6z2vvD66etPBAkm3vzk3G",
  "key18": "2fuz9U4vKYMuwCtCaTvEpowmhpitDuPZ7rLrv6gSyxwYcEopbaoYDxy2rHDEp6psH28xagz3KvVdVj6N4BoJCGBf",
  "key19": "2vGiVSwYmHdyhfW4KDJ9fPkiuxDkprxrvRQznVPpNNQTuHZ8nrHWr1omcemTqL8AdBgf8w3BBHvYhn4KK61jyRKN",
  "key20": "4D4FaCxWSw59aFY2u78oc3Sj3h57W1vnMSJ54Nqe8QcWM5ft6XPfNhuAypHiUf87JUVDp8kTois9JjpSLzC2EJmA",
  "key21": "5V3UXoEmZozESYJvikWg7C64CNe9BXE1rh1e7QvCQJ7AxZe5mWXm3z6XfjpfdPUKQqb3XXfWr2zvGaYiRd3HHvkH",
  "key22": "31yUaXMaaGFkKdcST2KiT3fpHsguh4cP167Hvrj9ffcn6BzdB1ZMD7cFX7FqJ1nRoGr4pJJTw1zi7vmMjAeQCUVV",
  "key23": "4iVR92tvS9iqtmewsarQ3wUJEHfBf2x2T2owNnzEsRUdkkLURzCTQHvNjvgBnvs1CLHQW1YmWek1VBxT3CNf9kuo",
  "key24": "5pEb7dm4EPgUp1x9Gi4J3pAxm1fHYaHavZCdBq3KCXnQYALYPkfHo4jZRjgA9shyEi62VoF4nTZX4eUGzX1uBkf",
  "key25": "2rpX31WeE2s6FY2e4Rqq31bMEyAJjYovMTn4QkmCEBp4HgnMz3LC6DTcZUfMGqgAPLhKxMYL1DVEJ5beHFzGH5gy",
  "key26": "52n5UbbQ8nFD6d5zGHpcFVrqcop5KgPsrbrUHijLbxLJwrzrw3sUkWjdsT12k1sc18ozpxb4KA6aUKVUm6cQRNBa",
  "key27": "3vLg2K1ZaB8ovFnyy6df1W9kbZJ5Fjg1HtX6bQ9DBSt7VSUbRohoxWyz8iedMRcKwiSBnMC2F1167zhCwH5N8jDi",
  "key28": "3drnVJza2SrD9kn4eeC56Bt5X6DujLYasZFgCsvzWC2Qix7XuLnjcUV1ifGAyRQqvjTxtin6VFBwG4xXLCMymDg7",
  "key29": "3rixbXx3E6Pg8zWK8e9dvUASop7V5X77nyvRrDV42GkgBeh2kQFsZATA8hn7DaUmgVsVSyb9kuPLYBUyNuAVBsee",
  "key30": "LbSHPj9badfo15mo1pRprvZAVn7MVfuwxJrPgCkKkjtetzS7GaXMBazF7ntNUktUVjDtZdYXyDhaPvSxa34PeDZ",
  "key31": "4Q9w5PouRDqT6EP7KjLFCpKu9dcWv9Uvzx8CGTU963bvsDD2tUWgnhR4MvTGyAtr6oZMzgo31gcwphkgmkrZyE85",
  "key32": "2n87HBQHeKje6AszdKSKHcbPTGPgZ5HA3jA2hMefJR5Q3PbMsv6ZrVEQ2AsbDDzeB8FwqZ4UGi7GSNmXqJ1AtU8o",
  "key33": "2CKPxAPARrHH8NbSvgLTW99Zkrsn1mXSbK9HJfrEFSq5pHCSCSaewqzFi18DVJi4iayJhLCm72VzCthm6WUuQ57W"
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
