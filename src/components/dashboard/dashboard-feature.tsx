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
    "4UjAbjiEuZxKtmdjM5hNjf5GwCHLrCdpUQ4ryNaijivAQ19UTjzdm9v6xMug3KTrTNVnixnLjM8xRgmJ5rzbpCLs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iZwKLNhVEZgv7RjKMiXKhiGnhhbFDjbYpP3KooQYNXARYBKcfNysCsV8ny18fFm49Kp4MkpE2rNw1uZHxWVdCK1",
  "key1": "2JkyC6DwE1mvVd7TSc3LBmv8aHN2r5C9HuGBTmvsj7PhAEWmF7uHjXuoYB8RALroDbdNwJLJtReuz6GS8nuY8kcJ",
  "key2": "4TdbbF5uftErtMedjc2QZvLNfztsNv2dLcmsSfCgPKwarq5YU2o1VSgp5KiyamzJbeZmJR1VcBjBwqgWQFKw452d",
  "key3": "vjRWWFv7MGBUSCDvMpaQqRrYHptBmZSMdojaTmZep1rRGypsWjYjcEJRAoyTHBGbigeMsuPpMbhUU7kKDtwqpU7",
  "key4": "4iDpJJZSKyxiFXE8pTQc3BxztvmMXujRjTjmGTZifSWTj6arSd7LFx1AcZPXed2ozzVRPg1YyZMEbRAV9tuCWa7x",
  "key5": "336J8bvxFVCdjFN6yGyV8gyKNkgaw1AEJ6gnTyfQazGmtCerXxkqd57dYECsjBEHxFbYRqnPhBtqZjGApgAEnfVC",
  "key6": "2nSzJrsq8cMGF7LjnVNf4r3gDUop9d9suxbW7DeHvadXrmjLbcmToWttwH2GLyuPzNiVgRPCejfv6d32THK9tXx8",
  "key7": "2BHLtRFZ4dpSyR2dr7aUd8nywJ47n5brWwQzguPoWfBUznJG7WqygU3VbQQ5zmcUqWhmdym77WMSmjPLcDYkymfW",
  "key8": "Qj6SjTp6a7eG6pRRnHwzef3RGCsqE78UMDbZGhaJuH2j6YrEHDmv6rw54ooZ4nD3wakH9NSaUZ4Trgjp1uBEN1r",
  "key9": "5FMc64UYwzYtwMbdoiUHDxQWUFZBC2NVxHNJfAwbgkmpS5dshtcUpwqkZw9pKHuSynz4G5oXFRFrJpzdJQu6AU7Y",
  "key10": "4W7r51JcbyR5i6mGY6dm1bCxNcJVRja59Vm9BPvMPZgntEvhg4F2Dd462oT7AE5r32JR6yjfmjNm3hGZH43bfirY",
  "key11": "se1EYbFuuvNPf33fzyZxTsbzqWvSpns17sCSpWjR37SSq3YZzNXanijFztVgfqxZHyhX3GHzga2GgFSfCLA8AsJ",
  "key12": "4GoFnQXqnBsEPENCsRDmUTtrLZLB7gggpucunEvmCPJevTeVR7KEtPwqLWpu7f4qonpfTYYaEKskwrm8EjvUPgvG",
  "key13": "5CmzzUTZR2sHCYqxLUEg3NVrfWHJ6tuLAwRhvD7NisfALsVUTh8yNTKCzRzscW7xfugXsNtsVNVeNhenCJ6gwecR",
  "key14": "4rTopn2P2DL8X9QXQ3cX5d9NNYVmrMA4E3QCrGugBMvRS7jrREKYz7igJHMkQ8mHtMmfEfDLQW1uJDAVCnsi6pAd",
  "key15": "5YXFZwP1Cd8uYiQatMCZDrVHoRDpDG1pAMoZCdctyNrEPcARm7LVuC5wvKHdL292cbcbZkgPDUuAWtiWPffWN3ej",
  "key16": "5xoF1fLDAMe4XAy6ZC11PgT8e6Udq9jEUCj9Efs1mW1zxdhQAUZQ8pKmaEY1kGd5KpxSQjWpaN4HjsCQ1rgNYDVE",
  "key17": "4vJARpvGFMoZakrfKCaSK1Ug16JXbFv5R8CtGa1iJJFjZLrE79DyqmYj731jrtBDdH1JR6E8be7yZ9fDq4X6PGDy",
  "key18": "3tsuS41i4X7EfZ5CzpaXyub23p9ARf27QNZo6Eji8QTihtk3FxuiVLMY2otEinyWTSn9UXuJYmrv1myewpgbWSha",
  "key19": "4RYiv6gEm6DBMvAXK7mUrsF4Wirz9fXffgXfn7W5g9GaiNsL6bGTXZMjsNneTgVkgLg9TG7eikLpakuofG3pGjPw",
  "key20": "itNdc3TrVzKrat2FcGK9CL9tdMEhnrcdYb5ppbhGHVCSwEkfTTkXP4Kyw7YJRKHuvU5pAp8ZJttqbWmZ1zSA2Ka",
  "key21": "5Z3yvbSkyGBcaMm3FRjVRqU1QfPe2g7Ezsy4SMBh8FdbKq2rx1e99n5R6NnQ5shJto93jQ5t7bZPNzMwvru6yhV8",
  "key22": "3o3Wu9A1Fgwn6fuZiRp6iWxtdhZVR6o3WWJ6YZGL5rhY5q8fVsB4cd552Cmw9widqaERv7YoyhDoW1dF7iRr6rPv",
  "key23": "3MQnqcVQr8YCsm3ub6XnrB11o39nqehNxZnmyGm6YB5HSRRiCQJAKDnxYkxbw3MFxAqATqQtW83dQzD3BZtLLZVg",
  "key24": "3nw6xmQPwpSTSCY5fcG56LgWUs92YBEj4AdrJ5KUcfbzYSuqKUDCgwp4qiF7kpPVS3YJoALAmKX86ZHTkhExCrRB",
  "key25": "gWvtJthRCEQcGpY2GC7r5idmtm5By9zrg33Gf1WiwNfMNTGGFFAqoHLBmioChrwGNwDheg7kMReZhedyD6xARK4",
  "key26": "2Tvyh9tYC86KcSWifbhA4z1ymAEFqNwwnuotJUJ64s7jFScmCLcRWD2NyySgjqvAFTtgJV54bsVgq9DWqcxqE5dA",
  "key27": "3bWsiwFSroG98HbQtFktLjrPv8fp57jXxXQy5SvfUHY52mSJv4F8UPvAKUZBdfCRjX86oPGaY6Sfry5tWaY7kzAv",
  "key28": "4Nkn17V11KGedcNoMMbETKr16YinXK5NJcjhA6XT9m5yxfCrgi78TRZgjg8iq7pozwrxmiiL1YEMF982uZQHhaLW",
  "key29": "5wPNSk1iHdUwp9vmTTzuSox5VpNR2DBpYjZSV7QfCeRSKwg7WTkx5ybQh5Xzan4oycT5UJG6RLJk2uZZX83EYnBk",
  "key30": "5XUWgoxX4ZFPGAKKcmmPShDuiHucZ5cC6ihEjTiDdzF5yvbLYdCneRC7Pqa2MKMjByC2n5MG37bd9qNC8BX7CtwD",
  "key31": "24jAXHb9Dszax5RNC2du4eVcEyp64EtmFXwotynFcW8U7V8Xzzm6pC317aykYaKBLGfqJHag1BRdmFYcYhR6VQPV",
  "key32": "26A9uidssYuqyYYtESHKq2T52TB1jaqs6dGu7vgubc2ruqc1o69t9qj17coVKQRzLx5oSK7naYBXXQM13aHoFBvq",
  "key33": "5MVnzLGAGQsPCy5TSBrmR1ynpCk1kUeptKCLqURuXigc6iRwRPZV3i3bBEkf6QeLiq7yVaqByHbYjtX6yDM2MEgf",
  "key34": "2Xzgt4yStLksx4qRJdhvVpZdAPWSAnmnX6EofixLsd4q4d7w6apbKHAankTjtfjWZ32gesge5wirEozSfM4dzBfs",
  "key35": "3BbEpJeJw98pJA8PhHZeRwJaSEbrCkB1w3rCwNfkWsPJMXQXSqCEXAZMnP5WVCA224Nk5JEk5ztsSTDNHY9Ag6b5",
  "key36": "5cdZy8j5ACRF93ULCqfuRXkBH7s4Vmqkp6b4qTU45BUGX7agsC82Q4YFyrjd5a5jHR2nNyAUbebAASoVzoMEsMqr",
  "key37": "iRPwxVcyFJ6cT89DYcpiG4wt92ugTEZm3PNkGhpqjyT62Fvvz2H5i7SnAB6ZqfRMTgJL7P8dwuHy2XsK2d9CNVo",
  "key38": "Y9hg96AZTeFn5BmBjuG4CBX7fgnXnDLmQyjQNkV7P2A83pidzCh9mW9RnyGWpkp6AbUCoZkB1K3y5zdZSRngSLP",
  "key39": "2GcRSXTGZa7nsDwt6w3z8mUX8FpaswR4zDG4DVpaf91zjgmGvQUpeCQycV7h6MqNhy4gjTeUqcaCjVvnTApBR8yo",
  "key40": "27ASo2tNBYu1F1TjFHVyTz52f4bEU1pLpsF9QAYDGatv8Asv11jpRC4nMn6DBh7oC4TtZxtsjZiqNNnexv7hY31b",
  "key41": "4gNX1nen4CiK5Wy8vCWXdWz59Hik84H2CYr9Bk6gGArYJJdHvRcXToBqykCyQAHBpsRLzFVi6WcmqbWVMRhcoCDh",
  "key42": "2M62TRDWkpS9UeR91M92cTyVe41NzumTjA6fyh9bSduLqVu4Dz8WLo1rhEe4aSG7wUVPz8bpUGTtv2ZGnKfiucDu",
  "key43": "AAwPtYz1ase4WyA8pwbhLP6pqHwN74nrUBi47XkB4QyAFoMrt6XixzsrXJppWqu2rP9jo8ghKU6CjL7dk2NP87w",
  "key44": "4vjPbajzgvbmp7iB59RgV6rTUSKg2C4DpLUv53HHSjLhzdb64UdDgV1PxwxJTQbQhJKKvZDy6bRFfx2me1oPZifW",
  "key45": "4Gj473XwFDnS2vNk4TACDV1Z9VyZCjk7pZT7naU6CJ43DDeRGPMBuvwz4oBup6W5dEXecZ2mLntmrV9QzweduBh9",
  "key46": "2agXNMvc6ZrnMsLxcTixdgvfF6xnR6hLt4QN6zuvAimvt9kcaFLyvk73pqFeUEir72uF9e3Q1m6PByTGcEdascHg"
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
