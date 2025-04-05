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
    "3DP2eg1Jj8Ak3ePnyBog2NfcuEddBeFFF2bp4oqHM1sWCYLJxtH29x4bGinL6xFz7ud4fCn7jBTdhCPCY6dEQBEt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KYZtqeobHfDFiYBZtpBLFuCNRSa96nPqzoL3DT2MT2QayWvAPoox1D8vHr9ehiLEtkKsAU5zrnMdMj8dG8vusSQ",
  "key1": "3DLagcoDvuiyUewk9DXBMtZCX57UoYAbBZdW1Q97Lf5RquApW1zZRhyx9oxU7L5qEzQ9dtC34jrg3bL5R5H6ug3e",
  "key2": "5JqhCZxe58FnPKssAMxkKhdNwj5pxRvJNHmFx341iYXb3yiD1uUKpP2TdTrMrq1ekBhmtz1McRsAEnsCdHM9FrtZ",
  "key3": "Rm151KZfHKN4DvEM3UzhHvme4AagxUszMmLt1RDKLWoSjVXW8ox7Dn3xjgzGAZjXj6s9owgZgiAhCLwHRBGZzfA",
  "key4": "4i49rbzzyfoxZNnP29QLtBVurrXycBA8zbMiLjyTWvxToX4h436RKSikfhSeDJ2QaMY8aNxqHt2iUaEBJTLGtAuo",
  "key5": "2F67ca4zWeYjoQ64G4vBWAzLsYVmmHuxxQ8aJNsYzkGcdvWp7hhMWThRwRJo9xiixrGJQnLsFqFnJZe5FbjLWxJt",
  "key6": "NaJKFoZDDk3Drrq7R4VdV292k2M4TNyPCMP9RYrKZgdDCiim3f8CPQkLmFQuCY4SbaZvD7WM7VqgowRYGzcFgLz",
  "key7": "5qB7xbX1jqaWbrTEz9ru7vcSbcU6aS8DSV6UA2RHc52gb8GLMTvFPHB1wbXEJ4nE3vGwJnGx9VjX4ZjVhnHJdq1p",
  "key8": "39vtxNhgRzNPN75LdvuZiysapvxbqHCGNsHo3AMQye4RRPjmiYStuVjRV4EUSjBcTunjvFKMJwGpbgGRFzJQnKRn",
  "key9": "2PjNyrEgbwpfgqHfm6nULhQJox6sKVJs1YPsG9tVywdkaFFhB9uTjKB3pNU51zn5aTfJNuVrhi3pYgoFR8sNEzmT",
  "key10": "65w6sZczFTSjZq1pGHEWfKVpCr8z9PQKsxgnujw9WbM7bqhFHgDfphgeqG7B8pHd9a5rc9d4QP6cNBvrr31BLTuH",
  "key11": "44GuLqwJsMwFaSsUS5HvXPsrPv8fxRTtnXsVBgspHJgDiBdPbvH4BMqxNjUZXGREjo6di9xm6V5dPj41LMfA1dA5",
  "key12": "3nDMBHvuyxHgEwMPLxxNsUpwGDafYwJy1dDdg6Ft3CtT4TnBRmAkWh389eMgFJZSmsDHawE4dvWMSAtAqjBeQRNy",
  "key13": "4CYfTZvWeEKQwX58DE3VDURgzHaGHBRaKSSdj5GQ3J7oHsGCEQGRDSf4Hfv3b1vCimmkVnaWpajqXcMYf6BZd69z",
  "key14": "3aGmEJb7yGoLNeEg7macazRRMEPn64TKctNgA53ZdT8r1WaUjGVt6h74Af238UqebPn3enFDMyCG4aJ518EtXQX6",
  "key15": "2N8pTp4uuX3MpPArmXqWSDTb41Fmr1fJpehpvwarWskbFc38FpS2BXLqHzHYjFYDZaBtLoFjLzKpBp2MGqcAW1b2",
  "key16": "s2KdKyRgdHiHLG3LSc5UQZwQwYQtZQTVKNdz9u3sKPq48FBQRw4e5E9GSeiia7BpsGUZEt6SRG9B3WLW96b9Kte",
  "key17": "3FgvhyuGDKSdCkf7oCF9ztwypiPwXq2C5kfoNwpuWAAWGrzsGmqKBWhhrPHbj3pQrZXECLwghmPJxiTzg43Bdeo9",
  "key18": "22SPV8iEwb6gcyMz3vLPduJtG5z4vM7N1sBNBfTCbu56XAzGNhkDeEkXBPmQuCL2p8pDBjU9H85FGc9CwrGd1Dfu",
  "key19": "2B8Bz8Mg1Y5MiYG5V2WTsbsKbKYYGQcqYVbToVapC1mb3C5tf7QSZ35tj1XxDqiUbzP89kqrfhSBZrt6PrCwicpd",
  "key20": "4UikXcm6nSmHbKy11epAKVb3wSbGSN2AJ113rQFSdaf6oeTHQkB72Ko6KJvLVFh2a5Z5NZicH4FxN6eTYNyVdhMC",
  "key21": "2pwy3Pep7ogTrU3BJKT28YfwKo7sjsPFz3gasreyDeGTNPtR1FCXuWPkSZg865tv2Gvg1ZtHAW352WMvaFVLNHFw",
  "key22": "5Kdrveu2izLCzowEtL7XST9BNPZGysgLZ1XzKGbGK8n2z8hr15vA9Qu1yGu4iupjszbcuWbtZUHxA3URyTvDFNkd",
  "key23": "5rBJmJhGbZ42E5Am2jF19N3d57isiP9PfHmcDQa2b4Vz5xg7y9F5F9V3xb6SjeHtQyp5qjrUxeo6iMSYdPseqzet",
  "key24": "4pFeAUf63bZT7KfALELifhBLKq7yW9cVBMb3jRaVuqhoJmvNjbYaNNeJMSszQKy2Kkfzijodr4YeeHq8rQq4XmbQ",
  "key25": "39rxiVQGpjX6KWx5drE2D2JAbVAc4UuM7RHrk7bSyewAigY1rgmUtczs65NYTQHH5LCg3cUVsv85AQWiUdifrguA",
  "key26": "aYPjY52Uhug6rtyD3QSwmmcpzzhWvdB67u4T98ph4ByUwnaAAbkLxA4H3scvkx1G2cPRENVYHiPq5sr56Pfq6Hc",
  "key27": "4NPYQYUS1qWDvBofwxNymNraCso2vpkQjtnhwnSipLSr1pxHQik51nQbgGPmqH24jVJE2dDaBSpzGxyb8eFnF2gd",
  "key28": "3v4Soadkp9i7i9PoxktK36J13MTLoLrhB9N2hEwVR3ru3PSRZipYA7G9yqZfPDELi9jA2xawxgnhBcVtzD8vBN8D",
  "key29": "3KwZaMNwTB9LToJLdZsFUPSSxuLpgnWVXnouz7eMMYtbGdBpqJd6q2ntZ9mycyGVqBwW2Bqf9W31XcqhAarsrEtx",
  "key30": "3jBEYbqe5W6cjgFVkVtYH9nYwssNXF2CQ4EU77qCeMWi17jYe9pYPLbBu8EA4Pe6rG3jtHt2DyxQ5t7P4nK853pg"
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
