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
    "3aNVtD7UTui6odNKXk6KhfW2aJ54iU9m752y2MXDUBnESrEUedLM8hjDySjZtjUYaKmsHrbyzHBKFqnnSHmtzmWe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PnLdiNPi8ddSSvUaQ17uhMr2eQgwU6qttN6N6Hd2ZrrFP6vDSEiHyz1g1msGFK1wPYJaWbTiKVWxmnmX62cGwHq",
  "key1": "fN5JFrkigjNYvNUqYcQrUgtK96Cg56wxrRPvukqE1ipfpnwbF3ARUMzA85WTfmkhLhMxJRKbnETAZ3ChDeqMfCx",
  "key2": "4DnJ1L14PjjFo2vGRPGsFDBkhDhA8WC4TQTkxVpm3XewkWicSuGwLpGvAY6jdtF5VB4UzLR5ny32aKB8YstYQBFM",
  "key3": "5ft3Bqk6rEb9ZN5ePUXXS934BLBKsuRLnbMmmzr974pxXfX3NGRN7VzQpFBq8S6xqmQEGfKzbeV6oomzq3xqcKV9",
  "key4": "2M1NuT6EnzRxMNaZuGqNKbpsUpJyUcJS5AYreHw6FhgqxYLVNSCPHBJNEpZxMjHCusLSrowNHKxh3aZ1udYkmh4k",
  "key5": "2V8wf5KQ6x6tsG2gSePNdzAoemSZtAMV9NX7zb8rvkVsQnEPEPuPJPWghKt7oFL33LL6hCUNNsELe85PMqQ2mw3Z",
  "key6": "4U9e7yGFZbsdSvDiXbQkBPzVU8ZfWnuJhYm91KVjRfebvN4rWbRgbP7vyrqDG23CMx1K6QgJk5fPKSeVXDtefs4c",
  "key7": "4dspg7YcnPKDj551kQRHEJwGbZX8DVuCwCTE5vo8Nw7T7bE5xtdA8dMV3EBUqQrW925BHasFFjt4dFuuS8hPjL3c",
  "key8": "4uRD13jW7abmG3BmJijDsS3aSMxMpq66tXJCveuFkDjqdQWqbu7Up1C7XhzG4SodLaC2aK9P2qCNaeXq8sbkUpQH",
  "key9": "2pqtpvBKzUHZg1JxU3LbTXNoseTqcpTPMMieMvdVq3F4fce1e42y4cDGKwGfMBHp4fRUPPC77W1VYYYbrHpyQFXp",
  "key10": "5tk1dWNACjY2Q76p7V5KcVbcFvLcx22dN6EaNMvzCcjRQtvuWXq2goJEPnXHtEAbfRfV2qCA5jYumGKCtbYnHkSW",
  "key11": "5wRcjRebxMMZ2AUvrLKaSqCgCNz4TxaBayVT82mSXSVA27W5akhwMm1xa9ErgDXJeNyZztR1VYecFs3aaSVXzp5d",
  "key12": "3WdZDeCPmHAtoX3dRuvsBuMENPt6uFZfgbLtMLhKX7hH7dCvv9NXP6RuxDQhTtxSVJN3iwde8L18zpQjqjuy3AFc",
  "key13": "2BJKUxYK7eFdp2pBE1BvMrVtCpPJrLWZ7PT1cAoNPRV2TbwmCefGci1j2LB271wVi1dDikev5ZxdNTouwgiWvJpt",
  "key14": "4QV4Q4t2Jn2LmTDgvosB4NSSRitJtosSTduwGj5pGJiDiuwzT2Ld8jA7XSeytafRmz9vQ7nb2i4Yff2oAjLVLeGN",
  "key15": "5U6Ldv7QqQGWTx1qenACekYJ5hAh1wFcEf2gnk3HBBRr7EeFBu5pNsGcxprLLGfgB6CJpEYSBaYdFJkCe4wFd8bf",
  "key16": "aoKQ6RMhMi1wtQkbgfERMtyibRprHDm2UpFVgRrKLbxHBe9TV5SjVs4fHBG5WNBdtxKnQhdyGUJzE3Y2XNcCqEN",
  "key17": "42SDzhz1a3AGRdvXhTAmBonH8abVvQfTiLpFGL2m9SCrkvGv2BdXeMhxVYTrVFaNHvQjF6v1z5z3uP8dz38MJ74B",
  "key18": "2TnKEoDQrSZc71ErPCzquKv5GfY6q8U9pVnnZFNFwkgBjiAi9VNELXpzFvyZ4caXtJKorjmJT66j7z3z5eynpA47",
  "key19": "2evB5hNCZ4mDwqd5JjSWrqVbEtuPwEVQwBeZAk3FBKmS98ew3J4rWj6ARR6fbsDjy81AMmV9vyiHoW5LjWenjHdt",
  "key20": "BdajibmjqBp1fHRoTyEFs2et9W7yUgeKv5WGY8Z7vhaxAYkLnHVCvVtKQiNEnizAYfjbtS6fwFwi7tKethce16m",
  "key21": "3iH9nqMjjD11zJAVKQskk8LE94vBVZHabw4ma3nzsRcv1ynyRBYMTD4XV2SewbXZAsfDni3AX9QaUugzhfSjqHRj",
  "key22": "3WegPw2XE4P7TwZBpMMBzMNgfgE8VSTQ5ZeJwTDyaRtJWrS6JqHfB2ThbDkm8v9HdoPDDc155uomBqnEomsrdhVj",
  "key23": "2yeby1ft5zoN7rNMkaRfgYyUrkLDMV7pDwX3Vvq7Rm3VJCDnuySWoCVFBnif3FvCfNo5fqHGWodTksxBvkHDTR18",
  "key24": "4bmncaRHtW2wq8tLyXPr2zb9aTsUBLeBiiYUKVdp647AFuQcBqVzmpzpSX759QFyVQAT41hfKXb5pJMABVk3xaJS",
  "key25": "2iy71amJw6NF4foKHwpdbL6rFtWg5ri7kJ8sDFTGpWyFEZhiSVPFSYPdAa6k3T7irPo1Z3FSW58mwmaoZ79BYNJE",
  "key26": "34nD5gE6eJXwYKXTBCnrxPBVmWNBTkhxt6xDEwT4Ue66UgzYZwpajjjpX7shYLNFgamDyKYvjDxyYrBEAWGLLJZd",
  "key27": "3BDSK8dcg6unsHE3MwYEunXX3PsPU7k8mjyyLaC5ePPxyKQ94fZDsVyQ5YD5gsnzZ84vHKsF8b6pkBFG1VVNPtHA",
  "key28": "4JktWoZRiaUpvLsB6GN32ezQNqzxzzibw4GW4iTdzs6ehoS1q2CDZyLWhLAeQqVnfGW8fsSmoCMrpHECrZSv4oHw"
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
