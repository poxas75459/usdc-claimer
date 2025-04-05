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
    "3GAn2gYdKLVcgW5svUWiiMsdf3ALknvjNizL3Xjh9DFCftNMJUn1bfmtWnbvCF29tm2ahi5Dn2a8paoGkcy2nHoB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hhdaGBJrzQh4sAXLvkD1jznpTpn7NfsnyRvxViZsRcQup4vgqFpJSo53fmkvntyZ1nA8JPCzUfPXgmXLiHLczyH",
  "key1": "5VgjFU6YvDTFjYpW63yHbbiaJHV4Cg1tAMbUws5AHNugbdFbDqHPuuqqm9kxAMyGXm6yZCxTzoeXH1w2PKxcKxwv",
  "key2": "VyP1ZxRtkxEWSHydnBmcQJKEXQrxDy1kMFfLEGXsABDwCmewySZtqvhDjdPrJSCs5XMmVQqWiACxk65gvhCvFvw",
  "key3": "5kTthKhhu4YsB3rtgJSmyQBksgnDiezXmHaGkyDxUWjK93bReaFo8oc5GaZF9wfRkkTC3wUM82nziAMDxbppMSPB",
  "key4": "251L4P1EUMitgHp5i22NYFYPyznMSiiDQW92soV7FVnG9LgBYCMe4ViR2U3DY94ueas8WkqxXkh89hUnskWrrwgH",
  "key5": "3Vt2aH1GcQi43yZbTsYDYL4M8EWkUNVhmXWDpAH14YeL7rWTtPRoW9wi72sbZafLKwB3FUH2JFaSPCAbp2NtkkVR",
  "key6": "44HaDbF2hQYpCNPnhYwPaBAmcYxAUYPKQrGRmtwsbCVMjR3DoE1Rrzh47323QgVVPD8gqu6y7s9LjLHDkwAYdFmZ",
  "key7": "2QenMgqKtuM2ceMPogak53DHhMyD8Q22ExfGQ6VqivucPu8BayjkA536nvrZPMXww2FxyMpProxAqVDC33n4WNBN",
  "key8": "3YHqetrqamq5mKnrfq4m9Ze2upwvEtcgnvuoptwLfgdnoWzVK2AzLdb25ibZXgAFaKtkTC1ua5MY5q9mG3HrH6Xg",
  "key9": "21eNXNMEjr7sp6nCnymNnmiqH16ypk9PQxoQ5hAd9KjwVDzkmbTjw8BAYYtWWKySyMNfi4fGSZLzp2PWUDfKZqFC",
  "key10": "2bEZf31BMEX47FKBjeRWKreZLpAQH6GAAtkX31HkcTNS8WDVtTVCcrvgSm6v3te6dYefQa7amc1MhhKHQrDqj5A1",
  "key11": "YLJt1PRpoVpYB3xYP8NztYmo6VXH4YgvzSBkRwGJdrDAQfsEQt16JST43raWfedR4o4LfQRKqnh83T4wWdtLj2b",
  "key12": "3B51VaRugEg36cMAzAJL9Stq1asJWdhvRZCBswZBgVPhRXMWVycG18dfdwQhpyqsrgRT9vmCf5y1y8JLX5MFWFEC",
  "key13": "q67ifmpaMVMD2SgxaCBT67dNUEwEZBJVcvM75r4rKg1dfpzug75qDCECWo9GBnQf7Vep6RZcogE923AabfUBYYZ",
  "key14": "57sAVANuAdko76VxzgTCFPvPgFtB7Ei7Ap6WAWyaVW61uah1ET7tJVpsSyA3tFLHH3MRUCEDJvcfJcKSMVDHxWhK",
  "key15": "1nDaUEpt3hukGPfkcAf23AhG41UUjFfVueeSbEbPiLzEL7kVdMkbT5CLin2btNYawJSxmaTBi7skDwRBu9wKf4i",
  "key16": "5yP6US5rDcmiyNtqJk776cByZo2fBpG7HeSs9uDyWncB8vrqmxF4JbFFPua6473Z9VgFUxhfBR1s6r6HnXy5escE",
  "key17": "DzZpGVhvkQjBEH57BEprw9363AgW8yvVaHNP97hWKiEqzYu7xkVLA6EvtgCK96mtbRnV3ErthqgiN47928MnePk",
  "key18": "5e4XtDZbzgXB2zoruTC6Kxm42xoYVhaxzWn5Cc4KJrdhVQQZAy43pZGabX1QnGxdL6nJoDgE52wQ6rK9oPCToHDG",
  "key19": "2aTcSf6EnwneXV6yBxUxECvVoZzELQ5ggr5y1pw6Hg2hA2mgG7yYaoWA9uwAZxVWyo4ejGPBUQgqZ5Qv6iSKf5B9",
  "key20": "3sb3zk7CF3vVhkbQ3VxbPw5pPLo3HkKfvha8cx3VHGLSXW9V2vhRKCTF2wrrRpUNvgJBYWP5e799zdFD44Zpo245",
  "key21": "2nngTxHa3LpXvjjWcnRQ4ZHP2WYoZZ51kWTFaoMQHHsF1dqpxbzmeJ8iqzwN2cgtabr4sf2G5ZkdoH3KYZScdnum",
  "key22": "5ofnWfGTsauMho599kJsLakwCFW8SzJKAKkdg5Kiv2xSUbA8xe1JyC2oofJk9RfbzAnSC6HaDJJxfCp8kWDoc3jG",
  "key23": "ormuqrRwBmaW2rQ3cuH9sTnrsLkYK9aQmUBcR4hL9cQAre9UZQSFYCam8jnUy9Ah8qhAjea7ngQvwPbPNHqZ44W",
  "key24": "x6sKm5qRS93D77822FJgEAYNwDvVeBBdaPZoDVwubPiGYjfgKRiVNpco2m799DyTAB8tXKSuh9hgE7geEYPghBh",
  "key25": "3BsKJ7QwQLvt6Pbr9ggqE6b2ttxkLkjwej2gj71VztG1ERMUcwaY8SCswcWiSRgWKnn26i3irmPVRmBrMoUbwNtu",
  "key26": "5ZEe5NNnovSdT46rqGTcQ6LSEsgmAJUJhzsXy4TwyhnEmdWkDoi6QXoKSgR4vxGvZmYD7SGCXA2PoXKMmaG1w9i8",
  "key27": "4WJtwbz4skehLWkTd3fgBib74zwjeNEkVUPqgbPNHE2vPauEZxyL7DNAGyDapmLzxTuRpxq6YSi4pRNxZCB9zNnj",
  "key28": "2xAuT3MTQq277HESsYbAAEy4qRz65rfoeMjrWBw4Dj4ByZJqydanw1oYezA1JxGJnRXshcDuBQofQrfkAo8Ash8G",
  "key29": "4qj9gUBgtJhAftxWr2kGcGaJfK5hHbFpEsh69j5d9rExwPUsJUywe7ibdU1MEvoQGcz4c9Vij8KjNKrLxM9ekbSK",
  "key30": "iyX8SZyxHTZYfDoJ9mm8SKsCyARwoEggnc7L3xiEqPNrV6EpArtcrsSsJ3MrVN3xsyyD9wgsJN7umYBuysLcEEi",
  "key31": "2TAy9JQa7gSrSbKr2aeW4KEAPSwVhXUvdYmLWSJvkQABPzQjL4b2F2GH7BGYyTMHMxamq4fSfrod2xdc2wUtvbpZ"
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
