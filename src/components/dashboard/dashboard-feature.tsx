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
    "4dZSgw36ws1HidmRqKBLWBk58ircB1pCJCET5xkuZB7DrqNsSB6d2pjBkJfbQJ9Bv8hHC79UYdX2WfdCjLiGDY5b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gKH6GA2CcPoS1Ut5zhGhZhaZzQNPhZ24FubMEq3nJZcyrL88hhNLUXgEBHbd5JSqZt3C5AMFR5p5tnzknj5sFRf",
  "key1": "h3YtyNBDL7sayQK9NBbQsKfGydkUuUiJPgzok59fYcVVJFHE7Lx5dTpwvTvH6QBC7UzDNa3gaFGkXh74R6fHoXF",
  "key2": "4omGyLzKLg96d1imZUMiVK5RMhsnmiFsF3wLmLcEHqzPxgyaky4m7MpgB8BWzCfKh3e4mAZTkc3hCcpLExCsWUaz",
  "key3": "2XbqqNczcJCSLXiR1mf3pobCWwt4tESDuSjTkZNzkXNFAW2VDd3oiMKTJBYv5nwY1eu72trstLbV7MThJKCyb9GR",
  "key4": "3CegptVL8Fg8L48xYfMvMaXWSDJS1HMgVRzrXJVnv6X3shk7T8hgoYaiaQ1nRjqypNJutigwz9ZpUmMMV5egBzwu",
  "key5": "2PVf6tfQ6DX2b11Qr9M3LveNa5W1weMGfgvojPBKvY53bLXtB4yAu89obCqnJSS5AJ4CBnN1axPHfnkbS89Z4AsM",
  "key6": "21iukwNmmEXgyzQRgimVnv9NrfA5vkTtTvP1jQvaSe5a83iCsKr4QTwPoGmZ9nWo9YqXio4cn6m4NVqHMmr9vNLC",
  "key7": "3PvfifzLZCL2LWwAM4jiyNzKWo2Qcc53YBsSnN8vvCuhJSyRPEniKxCpErHTVevVjALNuQDeJXxzii9A1s3AU6Fq",
  "key8": "4bfYzz1uRrq61qyLdh2oHwwcFEdtZ6bLBnSXZWkQdYwtANHJXfJ8wSs4gxKqKrSMKgeWySvLEEc7J1PTHV8ApGj9",
  "key9": "2yDbTnyxDQe6xTYHt9K7zdbZvPqkHQrrm1kXcQKy2dVdrhhYQi3rNPLC4ZYPbBuEi2u6KTy327gBBzzGqUD7q5Xa",
  "key10": "3k3xtZmVUrjiuoG4VkMLqJBV8H3k3F3kUwgHeFc5nmRb9Brfw3Awcq8Ge7b28tKA2LCb9qoEpT5rdvSTCVSg6mQw",
  "key11": "35XPsj1B1dTX6TRABksfboryo1vf4xcbmtfctWTEzB1DeVDVDjfnqsLjQj1odtKqPJWuQoBEyudTp4WDJHDBTH5s",
  "key12": "4qCqSfGtAyGQVKdtjJ61RT7gbPyCMpuMsGCq4pRhZKwVS78aEbhAoKE31avan188wtfzKJgF2NuFUPxHjKueXnSC",
  "key13": "2ZuGXi4CipWUZtPR7tWsoR123DV72npojK34myYq6pmKh1CsfFh1RffDFtsuEHKUFPvCMuMNC7jXWhTXGXjLd99p",
  "key14": "3G3hgRRDW4v9UGoFRN9A8K9zUzHSwMnVK2ffS11YJf9XNw76StQNap829oPN179bSjcWCjRwMU7PiVFs9hU4eRzp",
  "key15": "63SrbSH4ndS2ZsYcQaXE4UCGu4NbodindozesDgkjD5eWAYaDDW2ACrjVSJW91tzo3EyGtGKUEtzwtMCkzcGkAtA",
  "key16": "4U7TiHkBek6SYavYPKpm8c1wMUSjudSmLYTgFhqBy9UbuwT2LRf9fvAjdcwgCa5fguavSHXwTAD6dT1hrQYSx8YH",
  "key17": "3ZkaUoRHCzvc6oGpprbyjuusFXNb3r8gxS96ZKpD46UmTvSoWiPhwqy4u8JxAqHkwuZMMtS3jYV8nhxwNXhiGSgi",
  "key18": "8ZoniP5XotCsEL2JYMsNow4usxW21yCzaQ6aPnRmHhhs7TAcAPxwi1oMYgqZ3ijYukP2F2B3nJ61h5evenhKqQr",
  "key19": "3CWh8AzWbSTXZ9et4EEJGjHrdcQVuJtTpWLKnTEohVUXim7XTHaaBXFopcAULBRciSvVxvNpk4Uy7apdy8ghi3uV",
  "key20": "2hbZm4Se1XzQB8gJXDeDJmWb1BmjfWUDTaGu5gxAizfkoynmaWk3XUUpgmJcUFtWteAAfYMtVzLSXmqcD3y87Gdh",
  "key21": "3MH4Ke2syzqsPBR1UCU2Q8DY3ZZnU7Dhx7CJENw6kHWPg4rxevNS3exUk2vSqmRRLUqpWsqW3KmDciREYKwPWDBQ",
  "key22": "ocw4Yp23kKSJhaDQ9iHayfMV3LqZvSCcdvpvGzPnTfK3wQzUrNrjPs6XfJfNnPWsEWau1MEKjaPoPor41BRNxkB",
  "key23": "5YFXtQt7ZroDavmmeiKzmWBPeY84Sh78GcEwxj2JeiPMabrkTY4rzm9Cux4ZSEGt2h69M6YqegGSuo8rDDtToJ8E",
  "key24": "2kgdvoU6PbrVPhv4GdgRsDWvvAf6EJdGhxGzmVBTXDubs2Q9j5qkNS4ACnkAr1W3yyoKhE5wvrACXbdXLk21Mx86",
  "key25": "4cLTbS2ka4sc8wm15puqJbXGw156wCfGQXNYknXNrfEzMA4vBggLMC26mQRzSho5fMGwFvyp7srjimwA6L7jXB7M",
  "key26": "2m8yL5rTpMX2RJ3zSLVz4ZqbXBVsuR5L8f5GegvavSN5xcF2M2Qom7bSEnkZDZtnVPsuMbsiedFYRxZ4AdPEfssA",
  "key27": "4Rqo55u3BphqceK52pNVXR59k38BPdQcjssHiZgfnxU8xRbFBYQU6eTMeT9zVrRHbwwNC7oRMdZ3FNPdsrLB2uqJ"
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
