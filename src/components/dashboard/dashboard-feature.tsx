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
    "3SXtuvoFL4iKBdngUsbALq5qMcxeKDnT6Wyjek4pRziLYYa3K2LsTKb1bMFiSfqrWQhkijp7vNM3gVuJ1Et6qFe1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C9ScSkBBjzJbLfpqNJUYm26Jx5eugEtRBnLHZnKgnncuHekSuXPHweCXq3M72ouMRc2xwnnpKnGpJTChGM6PEB6",
  "key1": "nHFrSMiKcdLLFUXmUebN1KKofELGVNVtsSwhPPTqYDPraBX2Nryccyhz1nzsTfA6Z2b68ytLo5Z2BQQsxBj7sWK",
  "key2": "Qrb5qaM3jmE8ppUwoBEoddp76p1DLrwpVuHHeFPa5taa3KZg1Bw4iCFgUiGFTUJFrfX24oiCVmtNJ4iprSND7as",
  "key3": "4SN5B53t15Qiff4Hgq5K7qvteRbdWiQQqtzTzdMXZxVpkDVavxzkmDQScteMsQ8ranpQuM4xDWvzrQ8zwbtZ1wkG",
  "key4": "5oJUFuTkKVZsVFEVBZHwp3XQehBkFAn1RHbK8KVtCdJFUpXdfX12e4iGUs3wM13ThsF7LWRqTCWcC6fUXGCkKa31",
  "key5": "3jQVfvxipKyySEBFZts9dz3t51AFNsorLZp2XiF9xRX8wGYmPtaUWph3VfVw8XKVKEAxSEY3NzMexaLGz47pDPTe",
  "key6": "3qQKEHGtUTr4Ejfq3Qrkbrrfv8LZoQ5Zug1krPqw85mUuutiSpsqY4Ttv6UC1DGWCADsbAwx7tgXvwpAV4LCxQKk",
  "key7": "2gzjZfcCD2fvNwRY8VkF1ExJiPShWTgD2YbvhsEcckoFLvKUHXz3gKoqnjELHhbgnknJZGQfAzdirDit2ZJ6ZwfF",
  "key8": "3AT3VtSCtQQqcmhTCrqmrWMb2BsWE6h2MbHmJmoaDkmtYtFvZCtWFci2Ccf3Q5QAex6mNwcyAvtUy2XUvdoT9MbK",
  "key9": "s3iTaR7gSbHebvvoGHzGRsygawYZGgVNjL3aXn1TbybzQC2GNKCFnEfp8Z2gLqFXuErgop41ymHFMeYhumoZnrt",
  "key10": "64gjzC9dBNSP8GK3iDbRnkjpBJWpCidF798xfxvywD4FCUn55zRt5tbptDRqB9mL5msnE8wr4yZUpdQYa7EnFx1z",
  "key11": "4boGr6MnPcGJgMr9q2EMxwd9w35tHAFSmsGvzNenUEgWjdALcbZGZNpmtGu35LVRS5Ha2ypHDmmonVXQJL2ii2gD",
  "key12": "5h4A6g9bkbF7FCf6q4MfmB1HySkYNL65SDMdSwPP5fpHMyxs5Z9FsoLTC5NvokF5jZ2cW8SR1MUr8pntwTQEP9Vb",
  "key13": "39uRYwWA3K49GX4PFZNjL8TUQGtAxLt61R8Vk9MNEvw6ivbW1fUWTgZuTvsipy1pMpKXv5kVwwPqx1Fazk6qnKpR",
  "key14": "4pJ5p7kHG2HqdL7tSrqaZVkbCGUVXCJ8uKRrxSw2r1auyjvANQ76ngoaFWmUMtqA7YuxVA4sbP8voC46Fkw11YHL",
  "key15": "5sHezgc92HAaoK5qbQAS3pW28VPsdE7gg4krDdvdFFSmLME6cai6VvphC4aZ43CQzprasErWUosD1CkVrQrVBRYp",
  "key16": "3ZHNusFd1Rdn948rjqpeMeYmML6X4FCdoZQJVkna8F9nJN4QMk8f8cN2wMJUZFfKP5AtLGJzQjny3GnD3zwAfUfo",
  "key17": "2kJw5YFpvG2goYKCDUAzPP9xJZPeLguk35frFDKVjqq5kTCsrud2SNweNnwxpaB6YCsgpv3Zocx7fgVuPwW9zdnd",
  "key18": "2Xg3cs5ScmTZZceKqqPdroXH1dsRCh3vjiJZJhZJXUk3ZUCE5mgHf8jtLRCmixHdXmDFemaW4QAdywhBZxnie6md",
  "key19": "34WejmGZfZ6VAiQ3LRvvvvo9wNSXxKvbfmwecBMwfThp614rRcLSwALKwEAkuTY5pXCtDmV419Fyy1DFDazARRkH",
  "key20": "2PRyUbCb1tjijwcyUWonJrjCqYyePLtvLXEyAADt6EkAkMLp5rDJAAPQrCGprxiPfbhGmQbvSg6TnkjpBvFnj8gC",
  "key21": "2hVLNRPdhedDrsrzWyzXVKiAEG4QZ1Sd6nudmzacYKHrm2BGJfL1TgFUTwCqNMUCBi8oz1v35mzazRoZV4q6Ky1o",
  "key22": "41kKnkj6uLtwnHWozhf1B54qTd94r6zw8BVCRRemBLSScUsrrHW8zypupSmoyPzL5KjfWhtzVJECNBkYxXDxqeV1",
  "key23": "fh3m2XTJ6CX1TKyzz41gaLSfH9UJLw2LKzcW3DuXLshAs9auxUn6CpEoomNzy2jn5G5dh57fJ7ZW5nmEzuEJBFw",
  "key24": "3Gj459J8n9y5PvgAndmjBkCapEaWxCgHAbCCZ7kcjg3aS6tAZW8Zy5Qp58qbcvDtbacCngBwdRNw11bUFcNmExmv",
  "key25": "42kwx9SWArSCjYX2E1wRRD4jK4MBr8GS6q63beGRApe8V9Wc5wVHSE4tE265wDHQXvVQjH2jBSaNnrJB46eQGDVH",
  "key26": "3EFfqWcGkHjRaz7iE35Ym7pyAmLJVmdNCmtz3bvh7in9J9VjyUNhWZgmrhrudbAE97ci3ancD6iVb1UZNkXggMpM",
  "key27": "4ct3zNns6zZ79TVvovuB1cyo9TzP5wVxipvRSLR7zQrtn6wtRun7aP2aRmfT8c9gAiRiRFB1jSddg3Nh7XrC61ZJ",
  "key28": "42DZc3JV5y6iD2KqUE3TpsvzFpNVYzE2bA9NfPwXXKtR6P1NQBb3eZx4xh5jKqbWpdCqwhRBk6Ra4awv7t36oBJc",
  "key29": "B2vcK5DQDeb8wrpU5MWUv5iUEoRbi9kPpXEv3CVAzECecjG7K13ZxH2EF9BUH9n3XL6cCX2VbSEtXGhF3L3kTAs",
  "key30": "RpEKv7kXx4UVrmtaukGDoiGeM8GX5KCtSrn7GJHk4hZAAmrfCEtEm4V6GtWAtn9mYYAXMLZfygmpzP1xysf9Wby",
  "key31": "8PzafyzcoKkmFhg2TEsMoR7QRHbCew6Nvmg6RwiezCmFtrrGuZAuJ4MtH6MPUgHigbkimYu1KyY96ahnLsoG9bC",
  "key32": "Sm1PM3U3X2uzYFeHDsPqLJ1pmTa5dx4Tuv17DgqoRfstfU5hnqoyoR2jiQGMSMee9pMzbgi4L1R8N2z7iCizgFp",
  "key33": "3LzY2VD9vokKvZXRCVXoem7L4VwsVCMe3QHB49UZw94pjsiLX8twdJ7c2cjTcDpPEyJPndG7j4rfM4dj45vYxpVo",
  "key34": "3tu6j7DwetrJY2Nhu3aV6d7ykNQuDsn6X6bJx5jfuGNJFHsF1NUmK4eUAJnsUTfsuouu79K5QyiMG7xtay2Y57yG",
  "key35": "3bWJ7pHKiZZSfTQ27VLcthnC951nd7b6SCMZBqVSeCC2yyB9Nciez43m9dvfxWKK9EvMWAqxRVSK5Z9M5c3TTqZ2"
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
