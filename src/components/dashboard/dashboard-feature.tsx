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
    "3nkqpya5jMfvfB1tVVoETcvFijYCj7Aymxr6x2awxqsuE4dy7eF7sPbs69XWvJTFPGAPF65eH5jFnxbf4dpUxkWW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZEaoxg6TjLRsTnKtZ7HSyCXJyDtuE48bW3ksTutYqoB2eDSmLPoaW95FmdWMiwWX533Fif92FVbDmKEQv6z9ALp",
  "key1": "5AuufJr62i8iRswryu6RaBgDsvqztjCR81cXDynDCHry8yF1yJRm6E2FbMzq5chAsn3iu7B7nB3aSZpDGrwbPqRp",
  "key2": "44sEcpW1APYMquZiYZ7ynJ9HeThAg1ttYDvSshFoM9wJ51HWzjp1dUKaHxL5fv6qCxqn77jEmPTpqBtrV7Z5k4Wn",
  "key3": "qCByfntEWcaT7XJvQN9RjU6zPokX2AMffL1v8F7hTxAfn6ukezDWE5nezhNPkYZVkiAaQLbJEDtGyasnECwNXZ4",
  "key4": "3JArYJpd3NUHv9d6bf6SdX5KUY44JQuBAmU3rdu291HHGbnQWatgVHi2NYT78zJgkFaxKA14cJwuQu2FN8BStNE4",
  "key5": "25w3GcDsRaL9a3c22zaB1L37LhHFyeTuoyQDtgY5BzoFEKTKqhgEZRKxX2zTD8SCzbo7S6UtsPhmZREUmdjSmswx",
  "key6": "2VFHNqwZRP6gAHtBiGZhb1RtBnCXcMApRTGquUCSAAzymiRSeLeKe6HTtAaUCYtnfBJboVnCUTdynEccEsJrbDzG",
  "key7": "ZVVPUyHF9AAFS3fDmKch31YrLiTLzX7ogJJt2YJcsQ7tiPv9DDJjCsbLE54oN5Ea5U4Da3Mk3VB1JptyFNxTUia",
  "key8": "21ELV2aEv7WM3YupQnVeAi13Qw5cVKnvpjSSE9vae3CeLrRjT274x1Cx5ZmCrRZ3aqSQerPPNjyiH5RNARrHLyHQ",
  "key9": "2duKDxTAA9SCqkQttwMSX84Af5pCzLbVGQf5QXUp3dw2kJBTavQrdB4ufUxw1gb97Lnt6ePtECXNfUAp8eaUeZda",
  "key10": "2AAnhAuqESJWfzGoz6X3kVGLjhjTP57AnnDseY4QU1VGoraSfQJFX6fyoAdMNTiEpPDY1FCfqYfqgPEvvV3iPeGU",
  "key11": "PFHWjDRA9oatYbifmtjA5QVZmEh4uyBQnw4t9TSvV82ffyUbQqAf7vG1GVn3DQphHhYLYDvBXgTUavvmZ2Krgaz",
  "key12": "d24S2PUXPWSRjuapczxizsi3jJjWgBunmssp4bXLEN1JhDzDKyVRGHGng3Jw16RJSFJTZnTjKNhFKiPG1qQRDaB",
  "key13": "2HHD4Kjb5FkiYYEDcnNXLhid1Zwb9fdJK2Urx6XDtzvZjs2abaeJ9XoqU25G2u1VTRXjGAr9Te87yQFgZrrtfFRb",
  "key14": "NAKTnZat3SX7pG39KEfifmfwfaUmd6PpcC7ecUVW6SxqBFb2pyu7JZjLq7EySkeQQX7QY7rv2VBxFjWo2YBj4T5",
  "key15": "5zCCrNVfoDJ3VB9EbBd2YmFq4po8EP8WCm76PrhYcN9AUypGvYgioaXcs26droFGae3zWiJxyLH6jRMkLsmZHxhH",
  "key16": "42nnc3sfdEP3cu2vqMdta7DmdaRneZcUFV4wG9MHwPvuwmEeiZp86Vr6TN6x4av9H4WPC9SUTHJEybhL9uzx4Nup",
  "key17": "4MdL2PNZUCte151hBiXnVdE42LaZchaRboYC3zo4xMHQvRuwVmKLYDGAy5oqt5iTh2i9RU5gsJyJDedR5tHfdz2S",
  "key18": "416YpsXJHBegrjqMstgkLXdLotHDu3YzRyu9pcttS6WekMiaPoQZ6PxEqKQAiM3oiVFmpnQ4T91Mq2tnRwDWuBxY",
  "key19": "ppTmL3RVoAvJorb9BsMw8b5RYCYB9hHF4J83VsCHvoQj434Y6Sxtu6NbKSwmmfwSLac4D9FnrPVyEPuibY4kf1u",
  "key20": "23HBgaM559ikXowoeP3XnyFpcCgrk8SaMKPvte6LB5gkSwKA8vYNaFZqYVBmQ3Z2piQoti1XaHepbS66f1MkbEs4",
  "key21": "KHNSVBVxBPwyiGNZ7U6hGLm69fFwaLdPLU1s5NkvJtQatuMgBfYu9ZH1caY1eiMCpJxYVNJMW3syjmu9eSmfmej",
  "key22": "33oA4DyPvUowiwD4GwbVzwuTNim7q2e6J83jSw5m2yVyzpsj6tch68qLCxEQ6LhuzmzZDk2GKeux1yNX5gfnBMd",
  "key23": "4i2Qxvcm2Vu4CU1dyEJaBFCFpaBthUZuoSE6hhPKsq1KXwHj2YNmx9aVccz7FQMrSkqC7LduGrXLEydfjib7QF9o",
  "key24": "673ZmKFRtacJFfA2WwsAMkJCY8wA8musuBnFgLJJrmpeNpJ4Gy9bMQu4LVMTyv6yPUSLmbQ3AhzMwRe8xjeu2wpU",
  "key25": "58NjuSFRBhjZ2VtJSvsEXEvLsMCogm5oynac6bLXUjBCx2SaaSyWiPE8PfwWENPYhPAgxGSF6wExg87ceSFQBeKC",
  "key26": "3Ldhwn6T99mMSJNFgFB2UNvGyLy4Fc7uuW9bBjkx6Mvzzy1W6BNEMdaRcdKdTYFn23AmJXAF7wWYUVuunzHYp1og",
  "key27": "37Tw8LPQCXuYBHi1biLAR5NwcsaJpjjABYet4SXi9JUib4nh39DbwPHsX24nHtD3gSDbzYAKxCfsf4LApboUpZqD",
  "key28": "kV9PmtfiBM23mjPBfV7hPXdot3Uxj7g8VLa8TBHuXQoZtAFmQ3BYQncKzCSiKQJXt5MjNpTdxsd4Gpk5yJVfupU",
  "key29": "4cpSMozWNquw4hr4D2V9DaHiHQpb8kQTskDK1bhADzCrsTjZGKRz9S4HtY67Y4UU8GCjQs15gWuX8pykXzVT8o8A",
  "key30": "39T2fhwaaxiK6iHxeen2mV1BomjEuz7ziWbcZTYrhFfVewGR4JtcbMFx8qVrfmuW6LTACf6ReiudFPChcegXX7f2",
  "key31": "2N9phPEeqZWGEc6Af9w3eUREw2Dg667pP3fky9nemvQ4QKnwGnL5HyoivdBuAYkHDW82visxi6HP9nyfAq8gGubW",
  "key32": "sDaBKz8XyfKtuGw9AD9WcDMTc2ZJPnieK2DbfW2jfbjx2rnhcGnBb3SeEWg4a4En4tVCvScB98usvY6rZWcTE1X"
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
