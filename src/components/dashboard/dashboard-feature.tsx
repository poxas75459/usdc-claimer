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
    "39yPdyTDXgef2berRVWiT4hNuFkYVm4bHdFgVeY7ArbMqGtpcZqVbF8sC7W6L1XPqsn6A4SMxsiDvfbQkH3njTYF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qgkfqQtvpj4ysiDSeZeNNMCgZ9hghZ2u2Sr5zTrmT5wtuGApfBJsnMD78qWeXVYp497b4QAjmm5qVLTu3bRcQb8",
  "key1": "4Uu6L1VKRjDsK9rLiDV7qwSF9eMQxNsJ3uEABdEUe2Zs9xVj1kuC2dLWvQVTXxsCNUCuwSXme8CijNDCwo2hAxxq",
  "key2": "448jwMF1iVVFVzWBNmC1XB3M2Jk33UVqYpszK17pfFKveHYZpRAd9CX755mpNBLbpWTHV2S64LGsZCB48ivuL3RE",
  "key3": "3fsHtFdy4YNscxrpDSr8fMdBH1fow4Pr941TU1fTFNcLtwgBA8hyyUjJWN5nCtkSfakvijFMoLCa24xPFrgoFDdG",
  "key4": "3H36nxG4fSbLogS1bFyqKdfRjdwPgm8ALcUHjcFHwbEcUpcYXpMNtsHwaTJdP9jeUHk9dzFozTvAnJVbJKDumRxQ",
  "key5": "24jLqcZUBWyg5Sg7YtAq6E37jnqgvRPiXzwRFasLKjDKYwujfC2CT46g3xMhJcZhnC3wCf92m2p62Au9rbVV2336",
  "key6": "5jp1jWZteTx16bdWUwKpxHmDu9KrZQKnJ4VUYd9VzbpHGNNvYN3QSYchoZzNMyamuryfPqRigukYXmzpfKut1PeK",
  "key7": "31yyd4ixFFbKLNeD3P4fxE4fT5pxc8a3QJDLk7Qhtn9tUXKYBQRzU4Hdrx3kutZFkQzLYeX9EZpMGdF9R38nk8Cf",
  "key8": "3Q1T2888K9t7vkwSPDbtG4Hjn8sHJeVtg6oqjMAx35Qkdu8hTnZu4fQJv85E1PtfpeUbUUnaGTsuZbWo6rGJPWzA",
  "key9": "4NfwWfuQkqLhyVERvP6qvRLR3qTXwYENFjdtJgbEWS8pcD7fZZjkVvNWaBsosKsD2Q1172uDwcJchgBbJyJmo93o",
  "key10": "Lec95MrGrfgdcdorzwGzMzGkWW2t5Rs92d6fQoaXSSBMH97vZwAb4ETsDtz8GPuhJzU7uZKQu5TLneVTiN1ugmv",
  "key11": "bTa21NcCyj2Sac69d2sy4dWZPdyqhHUswiWgx6JurWcmZD9L5omyNRaARTRohg8cMuToiGMxDsUqurpXDN5PxgP",
  "key12": "5WKW113Dy8j1ccG4g3Mbw4w2D7b8pVXMJzFxZDuN3BdF995q2CC7dfk2bfsTTUBUhh8nYoy1hSDmQCAJ6Ao6hk9g",
  "key13": "377RuZNXDzb9346M8vPHTLnuWtySgitPMDYjtvqQrpM1MQUzUTG5QUVfJwtTKdKxBGgnJpQPkbHkfcP6fJa5tGcu",
  "key14": "5DnVVxxKeEJvZobwzyEnARtWE3tKu3jtXM2NokcUkrFjKgpL4QcjrifbtWs1ypqxHL5VBwaCFDtLmnCtUC9uHLiV",
  "key15": "5mNgrgeK9H2Th7hXqeWqLonPik5oxnCzWjsj3yd54MKTvUkjGMx6RXvNNi2cQXj6W4BFhm113fNDQawpnq95NSNJ",
  "key16": "2o5ZqVDGYdbLjAwa88PjKmWGdURFRrwxLTUwUJh8Wb83NqCHFN6cGaGyxcfJHYZZSHP1vBjgtEK5juoJPBfSkMgU",
  "key17": "59Tk9kWqRzKBgxcLAKWhnLoT3d8ptNtJAwv1B99yY4onTqwA5YcCKizre7FVgRksRPPe1x9hBbBwiUaqfTAgeg7o",
  "key18": "3UpMsv1iY6wJC5bVJkVvFsHKE9S43aV3hLnSzG7WVMwKzp9AwTsmYZDCjqwX1hFkPaCRnHMM51QYE7bxprMLQLi9",
  "key19": "5RMPGsd3CmspDgXpozoJ6hJgez9QP1P22HjTAG9tafAw4UvGEmvG62bkeTHNNoivw79TRXiqkdfKKh9h3m9VX3cU",
  "key20": "56sf9BxcMnpthrqVnRdHiasR1PXFk1gh9K2Uag8rZNCwW8U1Ju15UJW4XJ1gXHPt5qFx3vi6XJsYLy1ZiyA5saTu",
  "key21": "2pGQ8NgEEW17kabcz6ftX9sxkEiRt1axYLD8j7myY5zNTDpQ1ZZWWbbR2GcH3EizvAk9RpDVqfPXuEChC1ac2KcV",
  "key22": "4qCnNvWFsiHVDrV6QsLukJ8T9sBY6BRBhLkstdviDtWKs5LHEBAyDTP8m4FTPApiGK2k5MbfT5iCns16Q9Nb2E5t",
  "key23": "3T3AfwHWZE7KR6vTeV27EBWX4sGe1ivcY2KiAGVrGKgb1SAZ7YSak4C64BxqPwrTQbBVeoTJ1Xzb4W2bbWioH7JB",
  "key24": "3N2qEdtNoySCECR8HWx6t8p2L3LQwiC4eXd6NggVHJzkPKgceBgKtwqhEC9PvWMrzEaAjaMVhWirGQUNa8PHC3ET",
  "key25": "48v9enBxxVpdMK6tPmx6s83tMS8UWdVhhKvKEddnyADHLES4KvfF6STYYRQLKKfJKpV9CRBXpVQncKSLmMurQZHN",
  "key26": "HL1AeJSNE2tLRbeAP1V37cmV7rbPjVzdWys5hKVKmWqAwULA5hxCtTXp2v9nbG9bBnvtjw9zSmRyNA61fBuxVpB",
  "key27": "5MvvVQrSdzBVMEwUGDNtbkofvrkt9rkGcXzcCausDPRt9ytqhURWRxvKk3iUyWK4RZMQrbSAju2PYtASbFRWYSNF",
  "key28": "zokpCRAhvnWCiNGGBsxPVwrJKJxqWJZbZfFNE2EoX9F5kK57RokAowpyEtfjjfvadmjiBK6wa3B8MTEpL7h84sH",
  "key29": "5qixbasG9Lo49wLMRP39jqdj2oCXXxuuED8d9zyYnf4v1oDEestRBzyYnq7NyD93beuTY5aDACVk8KJQXoTq1rVN",
  "key30": "4NRZs8d5xM6uie93B5E2bNww3uZo3WXvv22bz6sKHVZeoZxApkcLV9zCEKXxWCfFUJtztKnH9UfF2eCPQ8qDHu86",
  "key31": "23BsLFFAYSfBXZMB7qbQua1XaxiXaXBKWNYhSi4VRUcNRuc72y8vn1xFV7ame3jdwaQXSFfGxDnEVvCHVvtdtuSX",
  "key32": "4ezJegYe6LQHDr3aDUsoXLU3Gd1LEnXdTHsVArDnkrJvgtbnwZC2bHRxPsnaL5tZYyXjywhTqJXaMQrFaUb6XUBD",
  "key33": "ZGNT9rCmi52zkC3vgLwDC2KSG6VQ3Rczr3zhqDUyx9ZVRpzQQrgrueuW9U7zBUsn7HcsiNDN8SDZf2NWfxb8H4F"
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
