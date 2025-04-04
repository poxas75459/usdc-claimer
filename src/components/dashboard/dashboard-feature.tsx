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
    "mLxCeabxYD7t2k4o9amZUWgh42NmV5a9UD1Fq2nZGdjGs1pRboDkSceRwrd3tubw5bQGD2bxzTFzWPsnhxNiih4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xHU3zYBBrv1SMPTM3ZhQUrwSr5MXQSVR89Z5bzTPhkh3DsCQocedeYzBLEnMQUqUHeKKkr6bdK9kyNhaDpinoGP",
  "key1": "5ka5zrXC7BYPMEgJeoSKmdVN8SEYJD7BkBuE4ZCpJWmKpukbXTNr5ssct3dksuSakPw8FTqUNY59rv3ahNWw2Qpu",
  "key2": "5px5K4euTeMdiJuhUrHR6oCzcJZEhZM9fxfsP9sPggp545QRUU9fhZtkeGWTDkznzwPmER29MSx7witZxBPkXj9r",
  "key3": "5rZCK9Kxd9chnkgvQXyUiChf8xh7kGfcxMUbSWHkKCpMH1XQj2b8GRoUUhjRAij6pueCBy2vhXLXUnYgZf5ZDPtW",
  "key4": "RwMHTXUBtBs7s4ZhNABZuyy87AxTbr8hC5wW2eUDeJJ5dZAya8yEzbCjRQuTzRzn9GajJVp9xTTv6a9X5wc6b2g",
  "key5": "3BgrpQGGkmdSC29aKNXPuKy3238cmL8q1UJRGmMUpj9UhXmi8UCFqbQMowhKg7WHL14rwrC8dTcQmR7HFXgAEsWQ",
  "key6": "3oefkEb8DiizYyN5ha2nEjrVGAEJUEEwLRrewZf8QQiv7pYpv8gC3N1qthiKk3huQnMB31BN1ccMjtKxAwXJYkfX",
  "key7": "3YrYd6GQqNntF4NWvqXmrkzU6rdgbSe8kDHizwonHGcr5qQaYqQrDg1y8hPrPbBTiDxXxJ3EMFBrtLai2CzL1j3X",
  "key8": "45G6KQsXYdsHyNKALS6CMdtA83vZqJzEngbPhT2ogtdrF2zHyzsU5LrZB5AhNdy3dDtf6SWvoZSnQgJWvxX6HM3f",
  "key9": "2wBJb6xKu3mdXMqpDdf8WCSbeMkcwgMp6XYuSKMsaDrc72EZs24ZsDoSk8baL6iQvTkCqmKCCfqbwfS7nXav5DQN",
  "key10": "39MqUBHEhZkJgEpADrzf9t3qkhtKZGK6pi7ymTxFTh55XAqcaqBM8jctm3P5MXQ9AYRuyXybQP625Zk3wU1mbxn1",
  "key11": "2cUp9rzwS2thmh3XXgrXW2SqGRAS6JgGYNR21wdgzhpadGoG6DbzNKRgDgi8Mm9GiKVAeBmYxgcwxTexZPnxS1Lz",
  "key12": "5KhGc9LjuHsFLhqgWB9twy9Cvjp8xXFx2y6SKNhLmKGLeJ6pTMANL1QCeUff2FdcpmHxaUrvoYvt8TeKRBKCFKUy",
  "key13": "4yMKTYuYor4UzbKThXGBremvRXXQran9JQxeHAN3kuHX6fFz7W9y4ifveHJU34nMNNer3CEx9bHE8mVXooUFbprd",
  "key14": "KV9MfY1fnvPKLdvr7pzMns7KRBMFg6KqD4qmM17u5285UdzHNALHy7Wt3qTy3oLvyTRMDDxcsXLtzMLUH3YeTVq",
  "key15": "2675bsi3hpHYwEKxXjaqpXWJ32V3DLci5cCJWUUBbAJcLFf1Z9B4XRHNUoiYB1J3UXnNd9pRTTcoonjicqzwy91w",
  "key16": "3xZ8uq1aHBtASTLRFXZohXpDi5hijq1qW2m2zgC3AdiZefv6kmhfo2t6eerhW3HDMsdzBKpCNKiJqdQ4qg2gh1eB",
  "key17": "2Brjsvui4WkAsmcBLgRow3bBEE3H9c1YVwCRFFRkdy27xkkD265G1D3KSZYfpxPzMpUZHaGCsFUxqEJnoDCjFcPu",
  "key18": "U8btmdAiV8421MEGsrwoWbQ5PMcdKJ7VDqAZtJ6mCc7kdo5T3fhNB4Z6MJRTZjNx1YMSZKAxgvU2NwBpH1LtSsa",
  "key19": "aYznAyMv3HB1MoGfK3je5bgdf5ZhWahdtP8SzShFfwSmaRj3sBbChNygUENYF9sktiZhZAxWoGvS3nCaVCmvrXB",
  "key20": "5qbTDsEYHAXKx8Natn2YErK1Ubupth8621EFsCSBF5B2smf11Kfd9gGPCDQikFYJWtqyc9BERWBP2UKEr6uee3vh",
  "key21": "28J6KTDNRsgfzxLg4aiZuw8UMkWoZjivK4ii3xiTCGWEf4XYwpVwHkzpearKWMiGhSSQnc3Mk5TXM1Bi2tJWG8Uc",
  "key22": "4yGKiK31YjvT5NQY2eggdWvSPdEDtv5xbg5PYwnCvrca2hGmhcy24Xieqf31TWFiuJh6Fak6hkdPLPfg7DkhjUBP",
  "key23": "LTmiS1PnsTDGygz5gAMkKK3YvF81PGPd2AXcThQCydbtg4DH5aVF7rumLUv3RzUqm3jycde6ToRDsfAEMLGuPyV",
  "key24": "4XVjZzjLdaSuD4ScUk6d3oAinLVwx2MNUuuoPi7yRW9k4LS1YBQW21geHvUfUd6DdWFnGBJEwZKWD6Ng1uyWUwhF",
  "key25": "2iy8urzihwtCeEeY9RD2h5jwPvEqLK891qWxpvmELSBWcQnoxziqSaPsMn3NcbPWym6NBsK81fAEAAPYm7cuTCHB",
  "key26": "BNhZG18FYDDgdbyv2ixX1GydKVYPfz1mJ6sCKkdFBRVECVFf7GNXHCoZLRdGJTgcwfbzaSNxdQ4he2pVBdhG9RY",
  "key27": "28kyoJBAqrS2LkvcrH8DERBmeHqYfKbJwAJeWziLRtpNWfu9vcyyQZAKB4Hewr1L7yxofxYbkFt7mGQP8aFqNTtW",
  "key28": "kjZygSecJr7BBn3rYPXdHcihCaDJUDMzZfcR9c25EjWk8DpiZzhJmn1RHW6NMrt5CjEmegh2JfcgbSaxcRdzXt1"
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
