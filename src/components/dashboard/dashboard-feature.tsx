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
    "39HP4gPZ9jpmZpwN27H7YVgCVznzLUNUqeRPe9AeMRwp3Ba7qgivRoxG5EUe89X1PQY6WtaZfNpH9XXEfUZX1Wtj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VcYocyykDsSZz1FDApcFSQyecETtu8khhHYeTy3wxDzfSVeapDYeQBQfowzThw2D8pUUABwFdNU5QzZC2ozXpry",
  "key1": "4maBDJCDstYdEzZ2VoVSpH74ZJHomw8Lr2K1hJBJjx8LT6u9j5DiDxmSVhQtpAjkD7eLspJiFy6omFi2gp2c3Kpg",
  "key2": "4D1afQWQD1C1zMsphCmY4dHkhKRyUfM6cV8Xz7g1Vz7RNnZzCKDB1G4iipd3qxRfToEyo7QDZQYwbz9GVVoKvNxL",
  "key3": "4h1LzNzFjWtbBEmq4qcTFNJ7ACbZ8jRdxPpTkZS2KE7PmQMrfrPeu2J7ewPaQ6TTH8dh762DY5HNgNG2pJuDkBBJ",
  "key4": "5fjL6CqPJXfFFmGiqV5yExNiazMBnRB9UakTTSDPxd6bDfWduCKkoX98cS8spWggPswjq1UmGV2fLdchuDBWC13v",
  "key5": "K6ihQeBsSwipZRZYi2ueB8PvDedz31EHYkmn9unZbdx5S9K4cb4sKQ42EYCF56e575qvLNRUX9bYR1jKzUZPDHE",
  "key6": "5wNndoUFyF12WFmpWjkAhZsC67udL2QfDSUz8mf2xguzZZ1nJZt9hhyFHayqmJUJNkpZFyGeBkY97yUitAc96yGn",
  "key7": "4NJMtBioCJ76v7AKAti8tuxP326xyspx2fWFepysnQssvUevjpiPMG5NNVSfrVoKNZEfCXYpxXomgBejkfqKZpgw",
  "key8": "4uUd9ZXc6ADmnwfxD5P5BypFDmsjxWtLRQpzH4S8DSLZ1CWSUnyRGViWmdLbNFLZ84e1pCShi94WEXiLB5QA8EeC",
  "key9": "4oyQDh4VKvMTeedegdE1SX6kdv15fFybYRt3byF2SStyMqRz38HNgFBRA2fWAayzphJKHCNBjCQCKsKtFhLpryhM",
  "key10": "i3Smz4KTajrfMPEnHxVemNYbK6doeU61if2sMycqWPnf77HW45F6Tda4fNq31DRXDiXZXCiyav2dy5TGhvhKz2A",
  "key11": "5hvA36dFDwFnKPrbciDddsjWJvSM2Uky9TUtYhfkHvHkFMsYe8yDUgFKiadJCxN2esEgA4ar6KciJoryhUr2adbn",
  "key12": "3aEK8eupErgLWQPDhka41BMqRWtZwrc6W9NQ5CjcVLquMf2s41SDD5d3AZ8yqCpaGAAAwcFfYQuSZJQmb1gdrQNB",
  "key13": "2goZA8SBakVRQBqZr8qix58fZdRtoZ9WgQXkUmFkzcSKcN6FdyYrQpMN3CLR4bxghQ3Np38ZE8XB3Fryz6R5DNjg",
  "key14": "2cXboUCfWAEpDovuHJ2TcgKLzby11u5tz5NVjyfod6oMVthR2JnW7khJTwB57Yj8LEd93p5wGpVnfqS3w6e8P5dP",
  "key15": "63RbfoN2Xii3yh7Bc4Dzpwse44qAKXxVQD2uYxUQSZt79dfa3nXEcLdc36RxrSjLPzyUbFJjR4rYLj2djDazrAnG",
  "key16": "3WZhJfFAdog8JnCTK7rg7unZpcTrrBECb7et7n6Genmkzsjin3J9J74M1YFx9UpE3qu1PyJd3CJ82ZFxhL3jbvTG",
  "key17": "4K5zfbo5xjEe21ipxcu9AaHHvccPf8YmsiCNJax7nVqDyDVVC5kAwDjF26fU3VwYMYHAnq7thcycJnLMrETDxnsH",
  "key18": "5ixKzMkNUYb7b8RNAEvfnvb5RaGW2GfMJBbwQdYtam1RY6yWzWdS33TUuxrkvKENLmeH7T1yWPe21kk4w6RBcJti",
  "key19": "3g3Usf7g9inbvwbrEPqWgNmNtpUtnpXjeddyGf7r1FjKc9X3nyXfsUMSerT1zHE7KWm34Q4vcudowpRpvxtTJZwD",
  "key20": "5MvRQnrKM8pCKKkzY8d922Qv7cMLGX5VMvbW7mgZ6rgtnzf6qriTjS8ScJakBnkhGKaBVubKxxjDauy1QzEwyzH",
  "key21": "5URCHkPoh79FKLPKLRyhFepkDTDPpxyZEPa95UYA2h2bDxoBGFoexcLN1XNWmkiKxXgyTy5Yit9uW58WNevceGEp",
  "key22": "3QDRLWU4CP2u8XeMWov5LeprFpqLr9ur3Wtg9aAh2waVpAq6uhWv7FkiLEFaFyg6SYfceBSWvhY5C3tKShA9FDZT",
  "key23": "3h72BzkUk26KpiUZVqSzuzpsRUBrQAeRdVj2wdQnd8AkaKeCAu7qM95ZdUfetkBWfw9hEbmTb5ckKz4JpmTZMZXn",
  "key24": "DtibMmMqBQDLHuypAZrN5UVFtU5dQnqr2Cd14M3a2yBfuQXcaHqkJy9H5rf2uT5uaYxGVXUeFDyHRYqmNvReV1X",
  "key25": "4Ax3q5GPyqpXq4bX9kRYiQKPtm9FXKgy6nNFv34dZmpcCu4xx8ju5JZ6crxVeAnPYydMkyaUohXwLMrdXLFuYTSx",
  "key26": "2JAHpVLmFuGyhdi9n54eadtiHdCnrzuBMMStjqj4rnF9baDm8eaLECe7U7VME3maiWiicjHtf5DMdXEjB8S1uvXa",
  "key27": "2SWnrZRjZY33VBcXQgQuuTigJJtBtptfUUetKkRYbWfmSuc1ReKpxe6BeaUpcoKH5uMtoBX4cNnEW3Yefev1grmW",
  "key28": "4YBkcpYTqhd9KRHzveWLj8vnfisp4vpf2oufzDABRFCmf6GM9Dvavq9NN5FceNypLPvs93zrrUVRJoxknSmkEo5A",
  "key29": "53PmrUbAXAjotXymGsNiNVDYknF1FGyHGA4atV2mvo9mvCmeGsPeM8oxQbG8eNSva1LTdZHSYC54ZuM5B1oqg6rj",
  "key30": "3vWZbuVVJoapmLKXNqnEUT5HJsvPn4b74jiAigMea1nU1sVLWYdVtA5nas3vSQZKkb6qeWoVSwgZHsdjRUZRmy8W",
  "key31": "3H392GFW5RKRpqH9pn9FLcxVcQ39xWPMfeLk5SxEAxankfDb9pktkFqDrpnBUxZ2QwkCyJFbfdEywE977z3dcN5M",
  "key32": "2oGQmJnH1jgkYHdhEyzGKR3zFmUEvjaeF87whmQiitegk1BBwoi3GkF1mMtjzqAfgrVSzeRNbzLUjN4qLTAHV4F9",
  "key33": "4SjHhZis2SyJRj3j9MtNMZqSWXSFfvRweHTNpk4Bk5KS2G6PzGCvNRjTYuxKcUgm2HLL4pku6xXHNd5ADZmLAdmF",
  "key34": "UpEUmioamiXcRgEUWDc8xHZqPiuqaj5oq9JwbB62ajkLMXpxSPAC76GmvbmFPgtAcLG644M2VM4wupdL9nudjwk"
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
