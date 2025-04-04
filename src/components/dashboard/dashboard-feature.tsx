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
    "3qKUkhSsCVKWG1RKqUJ47DtGcPmVFFsnEBKL4x89ByJDAJeDkZ9Amvzd8hxPrJAZcb2ERJUoaZ5dE9EjNmV22ZSo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fdN14FuMQa6hHwuThU1kcqtSQGJucCTvrQMX7yvG95h1TeNB9tV9Bze3VyxQkhybtrq4hUqw4ejcyx6ZqjHq6pM",
  "key1": "4Uuk8C268Cw3pjeoe9UeZxTBUa55gbu4ZS4AY8ao9unFLsemZicdsojhSUerNEn6E54XNamwW37HmzZtQYSUvz1N",
  "key2": "3H4Yw7wZo5Df9pjbGRRFJi2YSDvzphmpd4BAYGAQYMfNCP3UVsp8hq9EQwiCwMrhqXaBMjndpqvj6mkx6Wwwqj9M",
  "key3": "3tBBSHdkJzsp4caHcEEwJYRENJGPgZhpxFs5j821zPDd51BGfaH7Z5pThWRVba2ABwM16WGNxPqhY5DQDXhkj5aw",
  "key4": "3bGLZ1H3XmnBZpnFp31dr89bAopCzSfmGKaAwEbXsSRMzTLGKyv3dQVXdyUDKZciySjBHfnKML27n882XtdLF64R",
  "key5": "3itjJCnwSR2Hre7tBvq8cumYLqXJLZNGKUWmQQsMxW8avhS1qj2RuWYp7vaRgP5S9oHxP3dQBUpFKcF2mcM8CxMv",
  "key6": "2wkdRkGtATGxnaAWq63osUbM98NcA7efwuu9vgp8mQMQRJfJtxkT9f7v6EkycAru16QsJJ4pUPifqCQSnZNJysZ8",
  "key7": "2WR5C5Az3UJfHckuA7wMAuWAjevpm4d5TSS7sPMjKposbiZc8fEECwKNterNucRfSTdFbe4RfE5sZsvWxnFFQPSb",
  "key8": "iaZ89FnY5ufjLURUGtP1JqNTTk7En4EdMFt1Z2q8v2iGq2GheYpHxXiK7X4zVVZxTVJvRCLmWPUucCrTrBVE2TF",
  "key9": "4F5zSYtoP4rA3YWw6gaNmpZ9u5JCYNTdGJH2nokvnCo3gBWJ8yrQycjnEUyWDaYdBLuaznTZ7YfHRXiXbPPYr322",
  "key10": "dVW3MGCD3KQyBDkyVP4FR4MmZD4uKU7dKPByAhbn9jMA9YabmwvGLxGf9dYsSwTRSwxBzjTH4HJTL17gpkwYxHh",
  "key11": "3vQpCTh4PUmdYBxaYF1H8C8Z24Jci8VMx8gGVVCDSpCQiR74moaSQ5sqHNrjyCZNN4YjZPmUxjRmiY2kgP2PXcYa",
  "key12": "TUDruMvkmwCJWcE6QtQF6AVCvrdZwV7nqgKnrurqnQ8miSMzY9fuHbCU8rQaLqSMdwe9TxNZCWmy4v8yWhcDDWa",
  "key13": "rWE4eav5dCc3A25oWdfbhZX2e5dybFWBDqEQHVqAeyVs7euku4ykqdoN3kxK6VqTF2CEvKdTzzm3uB7cEAjuJ42",
  "key14": "QLDzQCAiCHus4gPFzmuMVr7UewAJUstuH6dXzT2nMePFS1AB8iEfgGz3JBvRCeL5qxmasx24Yv6oNwLcPsss7Uy",
  "key15": "2RT2NgW6BkDoBgXnJuoYedqXyV3vP3CgK7TRkViD4cpMuogqpGUCkZv7EbE1d8g2tdf6M9Ar5BR4484bWmCozUfY",
  "key16": "5aCqZGTEmt9sk7QDK5V5jX8mW5cvSy5wH8eTBkMSgpbYwXEme1pb5ohnvt9PTmuLCdtEFWMz5tpsPcbXxCrCZKEu",
  "key17": "23iTuoUcKYCFKq9ywBcXvtU8pJKbSMkw6Kwztp9r8e2nbgcYysMJu8EonYy46SLQXPdRPPaLvkCTfTL7oxSLSoB1",
  "key18": "5Z1BQxtPp56WF3RJVfcMbmwBD5kwh1MiSJo84Q7kDLvZGcf5XTLEN8NLc7w3pmRhmFgXDhRoLbVTCMiexRXm36nF",
  "key19": "2c3gTrkcXLM8n4LaZrd7NBMrwqkTMT511FgQTUKimsJSDmRHT5osNYQTA2zR5RdQjBaCpm6HCPUXiaHe5dzRqMBp",
  "key20": "4DpKq48nkf9vFtWWAdPEcNjSxfLnKK321PU6yWB7SkadxcoywYPd9DnHZ8HvR65kfWFNET9h75wKWUxvtu7dkcih",
  "key21": "WEfjn3kpJDyAmcUibmBy2pn9LvJeNDTTYMLougYcBA71YjZdL3oMkpR41a9yDdiW5sPZzvy6RwHWXu6fdx9A77D",
  "key22": "qvmV8BF2SzUNGmrF6RJt238twgueEjWnq4mXJX3UJnFZTVMwBcEYEMweU8A5qXg3i1sF6YHMUaePMFoAutKeGT8",
  "key23": "5oxnrXnupSzje9NJ4mmE6vrN4VfLyw1VD2h1oqpUw4G2uXq3R33TbPqMLPurKSLd66x5gpPD4kH1msj88Ph62fdP",
  "key24": "3ChYtXCgRjBPLUap57PLEu4AaWBti5kGMqYxycGv2Hcbu1zeo9gU2uJwu5MfPvdkc8MRgB3Pox2VhFUVsWNYWo2f",
  "key25": "5GSVMvYFBuAwwVEBzvm7j8BEYFraUDM42dBpDYWu43VQtM2ARAr1xvAGVzPMrRLfwY8ogC3qHkPUyHLwHCr75R22",
  "key26": "5cXoR12SHJWDXJnYy4PmUMmhGcU2xZTK5da6S3JZ1YcmegGynqTpBdRWYJLQukxYgLkNyM3bG1gaCkrvDoYXYLVi",
  "key27": "2r7Vg72W4A5GHyKtV5KTMwUhnxeGCCQaKG3th3h7p3UH4vcYAcboJZQL8BzT61oZ5JqrsmGb56kCfZEFGmRJPU5j",
  "key28": "52fqUZA6usrTuga3rYHJuubDsxtBn8bdoxgAzyewi5xp2kiJ7mVdydLXNBGLbKHfi2ky4rHN2Q1GibUjQAaAbbDG"
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
