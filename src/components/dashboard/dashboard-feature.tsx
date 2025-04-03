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
    "5CnwdVb35nQPHJayE6PZ7dtyStQQN8KhqPtbVJQ1AfWA57K36hXP7safZFk2J8UKeeS1M4ULDi9niefeAJ74udG6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ztf6XLia2EgHfoPH4f87VQpUxuTnRDaHt1GVEGi7Df5wvEVGfSKqV3CKu8fdUhGs51BnzuZqYrPLN2vk5xq2Tyz",
  "key1": "3JeTAUmtQfjWAVf8X8NGizoyuSY2ZfJPjsz4CK7FscYunUKVMBHJpp96gSyjWcnG4GsJsN2XKD2zc2qUHcxJ2eM",
  "key2": "4vKkHhfVyZQwyHgwprxh3a1e7wTeaLhrJmxL5N5H7kUWN1mwaTHPmU1WYwzfcRuwQ6JUcUEoPPqUcYrix713wNLJ",
  "key3": "4i2BQBJbDkbhQhe5vaZU3HULCrTus2aMTHKGxRuYnJ2TU9KP2kDYSf5PTsx9Uq4UciXpjJervx7Q1jPwKssGJthM",
  "key4": "2S3p2UmZbsQeVWJLQ3YrAv4jaVWppALTEmNzhj2Lq45m2pAJ3gMUeC1LYan3d3ACR56ou2u67KNY6wZKoc7kZjna",
  "key5": "3ruxRAoZ2aNvXUtwcyJjVc2dcENcYmJEUYH55ojyEsP8qY26cf1hWFrFLp7zun5Q17iFgrVKmdqsMQNwMqfT1M1j",
  "key6": "5d3kiULGLeRn417Nny1osihZT4ZTMovN6jN76DqYo9Nitny3WTkARxE48HZf5Fk7vU9k7ZddV9FT94MpQB4krfrm",
  "key7": "5UwFKtqQbFMucBfj33dw57c2p9f8LVUSv5y66iQMWMMejUT3ycc1h4MkEMVFDNwnQ5KpmMA3AcccUtv3uBobtxVF",
  "key8": "3HL8TdbE8AYNSoc1rxdGYkMivrbFbjoJx3MoqWaecBTaGeUMqKtNTBpigAotMtL1k7tYfBGfw2ZvzQxge8kTaX8B",
  "key9": "4xFJGKrVrPvk4cfS7iizS8Zd5SmpKVtyeLra2R1tv3GEXJzK26GYsq72qT5G7FcLXKY8cjQ329rEZWNvgxcKhuN9",
  "key10": "51XwjgRkwWHThfjSLg2a3E2wW6QqGVCJtkFMWkC88PmX4jL2HJDm5Yoa3zMD4e2f1VRWTpnbaagwNEN16gmKnQKZ",
  "key11": "5T43sWo7so1DexPL2pzeE2EdSMFhst4YJGfTmTKBj8NtUzb1uQZJ8meNMpKwGjAjAR36FWZ3VrHWGf1P7GAdCg4b",
  "key12": "5BHGd9vgjDd4rB48xDgeYSBgWXGnwNPU1AXeABeYpbw7PFNmqUDTG7yHirm3AnDGLHt9QQY5PpjGVmptBFmN8w9z",
  "key13": "56yo4DAMjPzmRJVxa5KnuDCdVKk2BDFjqT9Z9f77sVzuB6sr61mpc2ovxS3D1x7e6SqCZEeVu99stMZtbMNeY9CM",
  "key14": "26KeLuPxPKHtuZvfGb81PDWUNF6QE2LYe4t4rqAjvak9ieyXMwsHGkBLEEvCBEvXURWZ8i8gGQokvWEh6TdWT8EU",
  "key15": "F4hKfuPykT5u73ZCGkDLPEkVvnJRx5ygNuYUGSMXBS52oBAt414ZZ5UqHCCUXHhgvEEUtns37tAMVXjoFkKmCzG",
  "key16": "BkhXVqvFbU3spwJRZhKFcXEUeAGvwdUXU8F6yR7xMdpjAJE8Maw4zWjSr1Dmnsrk8Rap3PAg9tbiYTxBhmS7ST5",
  "key17": "4QAywQ3D2fhNFqeZekW7px8bgGFnkPo1GQdAh8q9var6KEPwD41T8cwCfj929riPggcFPF6uZ1X2eEXzq2LFX9BW",
  "key18": "6AND12BjLSzdpRLyEe7EAX7xvj3NGs5u1pDjqmj7osyAbtaZiKL8uZ5htDZucjRm9PcS7KTU1YjEKvGxUzDEJBu",
  "key19": "FJ5LPFPacvp38PuZRB5NyAjETZPNb2knKJDbMhk8yhoXwfbDppHepMGCLwsiun79Vt6tcAVKVJDYdGGaKyQ5qM4",
  "key20": "55c5sveuVT6zBoKjZ7zAX1an4USmJ5RTzScjhMUekn5QoEq24JeBCFpMDopjWwCxDvYUnwFJPBAjdDS8Ta9Gscba",
  "key21": "2SCC2Z6MZ3pSvH5tTQvCnoVynVwArPScpNKiPWs3u5HrrNxh6RrRHvcSqGf2n4XhNJwAVsCkrovUerMtxCH65K6h",
  "key22": "5bd2R1YmaZ1UQJbJQpUjVzmRcn6scYHD3vHLAjdC45HVsaeaH5aNhM1oZLv62n8KQLdNzwbEPgacnVzbsSVEDnZn",
  "key23": "R2ebM5PiGSaLckmLhyZi3cXrVL379WLRRCNMg4qDLuwLA5hmMMuDYuKXoBNKiXk11Ycr8g2h6E8qaYR4KEq6gCg",
  "key24": "4ePSd4mbxjZuPLSoL1mbZk3zhfbfeUax7qMTmhtU682TFBYJdsqiEh2djdtgmp438tCQ8A1TRBexy4V4ZQiC96ov",
  "key25": "5Tgj6yebD6ELEUp215Eqrsy9d8SBwtFnAor5qhsYURPQL1WmqHDXo2s4hvVaBvPMJhADFqwQ2aYuqTF8LKx5U3X1",
  "key26": "2PwwmSSTSipuGkojPfnNLVwxzZ1RReQDdx1W6UfYuA4QugvvaGCsVfR38pQRjija9MUMsC2C4rW6n4h6HeJSK3bg",
  "key27": "5UTiKU3s3V1faeaLojudwsZZzTq9ahkN9dHB6BNC7nSFnzdey1pgJa4rMS3z8knPf6RDfiogLwEndoN5S5pn6GmE"
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
