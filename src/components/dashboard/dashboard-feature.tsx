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
    "2kUxhbH8Y8sifyXKHwtGnUjnKbP2daHsbRMrV2VqrSBbL9LRJTqCrFG8VQTgjS2oaahhXcYrpgQtEEWRBEGpnz1u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35ZQAEqceYyQX2H6TcvC8diNFucp8jKVof9sTwMdzXRYHtuor8QFW4UF7qA1zHns8hqkShNyPgdievaBGQMpzdSF",
  "key1": "2922L2UeyGQv39knFr9fDEhVR7NWhdRbfG2paZzxJ1wBa9WMoPC6ZKJRrg3qMxSe8GntRsEWj4UnFvpoahnFiksw",
  "key2": "613di4JB1efkSBALFY5hnyYtQqiiMxEqzLLo8paAY9mtQZSiVPRD5ueDy9AJ3RXGQQ3Ss17LL7EwkneiKyHBU9Dk",
  "key3": "38LBM8hkWE3XEJdW8QS3Y5nHvNQg3x2ujNDQKPiWY2kfS4CXEudTAHp1PDgZebDf5E8HYcutG2WrQyQjTkHRX6ni",
  "key4": "4udu7RwHSt1y7k8WvHD7rd9ERSTQsiYuSUjR53NkTTrUJEbBZT6wid7w57pSDuA5BaeyUNpyp64cbnVwhpbbudQm",
  "key5": "4v7qs1rYzHNEo5Jqbs66Ktyih7AejSLabLwf7XzVpzQtmecgE8HLxZ6qeLsBQFka46kk6yYoSAzawXeosHuMfY6q",
  "key6": "yqCpHKaZy78eHv63WTFfzWozwBd2vZfWbu2VHu4F1ynJEdteagebXMcJt1niZeyxQzSzmkaRsJrHraSMMsQ5Yp5",
  "key7": "tYfknD8pdL7QpLt4JFZ5PGhqn4u9DgNFYUa1KsZDVfjCD4B8dbdjfbGmBToMJZe4HX5wsXGSDUWZoc9HSnfNaFL",
  "key8": "2fCKsnJU3fZuFLwhc7LoLQpBFnrh5U4hBPV4JsUefzXL4pUxoeBhEhMARDHxqNMMkiwShNqrRYQSjP5wL3FWTb6n",
  "key9": "ZV4hqnfHHVz2wV1n3s7TXGRF7PSG2PFNKBZmvghn65kTGcCq3KdZnnV8h6zh8fFmrj2DGJtNkPSU6H7LJW55cd4",
  "key10": "27S2qLcAfpJCYphPF6CvGuDMy19eKVkChb2JLAjZ8LCM2XRJNSZThhDnpZ93UA5ZoigXEA35nECg8eiCmzQXD8ab",
  "key11": "4Xev4EeBerj93tAdSLVkRrEjajEQoUC4ERY7BZeAGMSNxMoLwZLG3sUE6tPJMrhgB4fQ7TsG7n4goyJ9Wnh5D9DG",
  "key12": "2EFCYALqMNpwxDSrheQ1LPS2z1J9rTAbmGfFTqfCS3hEEYxKrHqMXpWLFsa8vgLumPqsfJY7SZ1sbWVsMzc9DVz2",
  "key13": "8i1JZGH8rjevAYdC7jsT7mvuY5SUaD33ELjwrvsD3qiXwfkqDS6QkSSyQU8SQu1243z4R9dfgcsS69GMtV976VZ",
  "key14": "32AFYzojg1koZw4JK6Rg5boRaPcnbuJxYHEnpfoNuC92WsNVvwF2gLnfjd6mVNTdjDZKGtKT4YpkfyajezsjYvYR",
  "key15": "4ZV1Ub37ATNdw6QUpxW3jKkkszQHZVCdWNX4vhUzUzw2CTZxA413Jqg2u2eToZRW84eHXZVmUotFupecv9Ks6QPi",
  "key16": "3BjpR42tHj5G1qiLgB1ZTo44a2CmmqHmKqJLSfRJEBbEaKgyMAwgXoBVW2r4yGvq5DujsAYazbt7jWaReLTqvy9M",
  "key17": "4KcCwNH6QMjWg34ZWSfid9ifnrnhEVvviK1bxq58uM6vKshSgLjqKtjAg1imGc9fGggSqThCW7UE7hfSuBANyZ92",
  "key18": "5qKX4hsYrGm7wfVymZuxiJMToGXDmdpJ3rGPZHSdKVwJ4Diiorx5a4EvtyiaMsMzmz3Z9a8SuPtrNq8K3yfN72Vy",
  "key19": "5kFB6gZPVPfyyyVDrDw3ftHAgTE4yMN1HzHRaMpqqr3PoGeQVQBXjC1nMg76g9PYzmUA2A9DcEqpmMiRbvvYucix",
  "key20": "YieWaeE69AWPaDhYjFBJxp4Zz4t2DbjXsUicexRSyPMnHov1rNFA7vbD5sZyvtvfwUhKjjnp5S4jCduWtygrdP4",
  "key21": "2uMJ78Dbq42B7HrfrQ8VbDhwzFDtCJkYfKq4EmtZSqAGyFwc1sP5ddcKtfYtaCuXUcKGf7sGcVatCnkhiWrcCVVm",
  "key22": "2ZXqV9eatx4q5rZYxr2UgnkfuUM1nRFhiPMJjCrv1TKXWU86LrwxzYHq3BAk2hgEX2CacDqX2f4fZj9ArTUdqRBk",
  "key23": "5yXkETPvjbJpenRj7w9EaptThkZHAJrxce7PucJ3YCx2aPbW1eYBmhfFipyCRJ9mvYdYK8Khvp1xkfUtyrv2jCMS",
  "key24": "rqT8Yx6JCQiGT344ohRMC8YWmJ1CkNiryYLPwiqDV7XJ4MhKygFbdpCURmcagdrWJfdPfgq7pQQtgRqpWACsdSn",
  "key25": "4ECkysxMRr7L3htE2Fctq9FWkTz2VrA95fTBjKu6VojJn4RUhLAV3SPLxWDGfQmRu58zYuJjrL2hgjeAZbKjLB2f",
  "key26": "58r95bkdPP4pYAhHAgmTick6D3sfcuqAD3bwSjSVpiRBAAejoHyRRF84ZjxeLLL9VCTTUgsFhgRZ1WgpdMACfYdh",
  "key27": "65ygoAyQRHhediV9A2i4xmzo4zkpzvRW92hicNZNb4gDJwwndrnxvnGw2fFWTingfFZKfG9eSSJ5wo4NQ8YwZ59x"
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
