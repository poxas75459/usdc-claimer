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
    "4DuhLFPDvmRWyiSFxjDZztidSFvmJpXkNnbwNrhMZ8w3oCU8VTfGbgxPYDbjvLSENeficnmwhbguHWRbwRFZLTkh"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "28Fr1car8MiJ5UCQp2iryBeb5JD5sqREjLGwYz9x4rW1ZwaHhwcrB7CtuEwhCKNHyLgY5kN7KAUrbPEwzPMyZvZg",
  "decoyKey1": "3naDReowJRJEHtuaR5GVFABK3Rui6BHzciHyiEotwNgUnukMRCf7TGsrtGhEhQg8hLzPjBurjY9t5qa7JKv3z65p",
  "decoyKey2": "3yJ8eSgDQZC2FS75TRp3VDHHq3nb2LSAcyz49eEG1G3WW7TwXGqB46euX8wUVsU5mQyqPoTcLHcw9ixPi3LA6vve",
  "decoyKey3": "526XwSnPH9JZG7MhTVs1MpLLya5gJqcysN8NUYZQD3UDRK6ejeCuMDky8LU9grd8uCRrGh7PBWoVwb3mJx6uwAtR",
  "decoyKey4": "5GXWe3K6XacSD1Hi6Myjam15HGKpUKKzA5GAo7PoW9wouT4JubbJZQzYVH5vzYk2ohDcnRrMb2BUGorgCDXXeBsL",
  "decoyKey5": "4CiHCsBU4JXi3STRyRnKAJQH42B167qmisPRKHzQFkBPhFnKFvuqTsSVpP92RciDTnjAcFLTVXV8eVFrbUkdcnaB",
  "decoyKey6": "3ZpDrSVwDbS2VHDaA5kA7fxe4AU5t38QKqi3DLxtxQ9mmwWLfpJmyqsAqz1td4R5gbG4f57w22R9w53PoAMeu4n",
  "decoyKey7": "5iRDvtktqduvNjPeRG7sReU33ffu4wBS3NnByq6qAmARz78GJXUKLsPZCrs5aFMdHWhWQ1HMWdddT7Yf6aer84qH",
  "decoyKey8": "5rrfrgqgPb8gWbYDh2jftmwSSxVS1uaN76o5b88QvTdYH7G8yBaySpr9CHLewaoitXdxjZZDaHPgbpiNKJkcWS8D",
  "decoyKey9": "3SRsmp3yQEjP7L1az7jYvtSbzRnwVJGD8oUiEr1om9tPMsK4oGYeYo3ZqqYm31fF6h3BYR93U16Rs6dk9Z6D3jwz",
  "decoyKey10": "3Sq5pr6rwYnwkhrg432PJAtpW21KL3oKmEmxkUiKDBKfyBBNSrPjUDjY1qep9QSsQmEdsQ9JG8U9Eoy82vkmbTef",
  "decoyKey11": "jHhNMcxmHQnXJ4xNkbqN5gMYzYBgoAFfYDwifLqxRghrspvG5hMJje7AU1DsNkjWEC4Au8Upf3ohCSYMjNBt7bD",
  "decoyKey12": "3WPzTMZCTMy9WTEwCjWczsZWrtfdLkXKPo4oRuPD5wo65TkzMNYfZDH8vbJKdczPwtwPeQgLMtDKRQgSDoLkkmCd",
  "decoyKey13": "3pAFYwgnQtWpFDSizVJ4yLjVX89MyUTEx3RNQ3qCmQZN2HFU6cL4axkieC2mg2TWz4LD44UNsuaGfC9HbPiykqG3",
  "decoyKey14": "4kAvMK3TEB7apTBTWdus4nYa2B9H1UKk8xKhU6rULgjeYc4hJWELjsEQrYWH4JSStDJdNvVFWTs4DEwKWLuJgoNq",
  "decoyKey15": "3KG4b69mnbmFbJRkz9kPAKtcVegSTgrJvQ2xQckEdX5TTz6yFkydi7k7Z9kRvFsVSPk9C5LsMhDXHzZW72qdKMAk",
  "decoyKey16": "4hfCsCUWTb2ZBox5iWjGMhDqSYS8fG8wNDoN3iPs1cAg44Qd7qhGFphGEVcHC1oHmLDpGYYzQo2EdkyvxZ8SNPse",
  "decoyKey17": "3kMXvN5pBygdG1UbxqKEqPqHAGQ6ZJt2E2tj9MZZ5ZjRWvVcHuHjcJ18JWfH6jFD35DPFWEjbv6MTKZ9CiD4moLT",
  "decoyKey18": "2CZJrzWJ6F6SeiWSTXJ2Xr97QpnFzZ6ny6JruafBGtjkzXVtNdtLmRm67zEQU6HwpXf6T63YGoGaEgWpBWWpRT7c",
  "decoyKey19": "Nhav25x4jmN6VjsCA8RH7EvUxTw1N2KAh1zD6MnkwYi9WgbdnUbf7uFFNHM1cZ89yDocmLFGV7bR7N7xgf2xYSj",
  "decoyKey20": "33N3JUcPBWdzJacViH2k8LpAouFwFyYzmgMJcYxEAVcro7FMfg8mY6CkAT2QeqqHSqniDGkH9ty9Uqt8mjMb9Kz4",
  "decoyKey21": "53wxrSKRt3EQjwuA7cZK65CySpbKHtEnBgjCEgtmr6k7hCM6zvwpJzp7uHpgpngjgRy5ugKJa5Moh1khYexjv2vw",
  "decoyKey22": "28EVM3YAuMz8mKvafShPZzDzNxiQqU88QRawLpZTZD1aeXTzFdX6wbXT2KBoXjiiKcJWfTHyiVWVx6Tn8dSpGx7U",
  "decoyKey23": "5xQfBg93DJ63ttKsTgjFrLamLHBeRK5U4Dxkz3FkELiqGDdWCiUBdNmqyxejXMtzdTd4QqxhczuJ4DhM7RWXwdfe",
  "decoyKey24": "4GxKk5wYpcmgF7yRhRZtq3PC1GsmT6bs6LCuX4akK5kveWA749G4NQCqyYSi3vQ6erMVh87NaVsJLVxsER8xiq5p",
  "decoyKey25": "ADrjoBYqPPwxCpTogRJdWHW6ut47ASU4r2rfapvD1wDJZ8UxfUj9Goe2daiyrEsYZEYC3n3uULPozMs3fkqFJkM"
};
// DECOY_KEYS_END
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