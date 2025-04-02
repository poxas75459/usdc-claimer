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
    "36jdKYmAbW6qfvkdweRWV7p9m6jE9U7fNebrJPNwH92puEA7PLQ87884j7Zj79tYgpT13fTXSCkZ4JLYkC6hy76P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cfqG6D2r6AHznuY2xK6KT7KSmDmqoe9xagq63bo7y2iLcwcZXGGrGKWCuiVfkBCKc3zgbtfmSvwuppPt326DEu9",
  "key1": "62ZonVmFzsFW4TvkcMSFSBg6tw9TKVu1SjCHj3Wp5hG1PEP7PFMypL4H7z4uyqdBQJBTGACdRUCWZfZQtX2gqYE2",
  "key2": "43npjkHvQtn3uAPEtEyfi6Ng4jehCYphXzjUEgnVCtLKjYZaMBkdQg63t2f71ahNEmYwPeVYTPpdByoV13drenMZ",
  "key3": "4XxPNbZoNPRTW1w7W6kctttp2s518Q3oohGTkXXtaMCafvtvtrx8BvYrs4DFQVx7LYgqs4btoJ9hLYWJdm5Jv2Wf",
  "key4": "49A8uigFReUEfmj2MLoSj2TrohddARefUnzuCjAtEYuBrwjQuMDEsiMwJq7Zm465ogZqumNarYnjrBhDz4dzFMtL",
  "key5": "58Fqh2WnX9rBz1MpspNwSXuvkx9xzpk6GXhLQHDYKZzWSVMJnVHPgYm91d4cmVWjoR8WXB5L6k27PJA4p3Xmvf7c",
  "key6": "35dvHABvt7SPcaVauy4xmt3CrdLvHuUAQmExFGPBPaKHxDP9aRxLPAnE1VbMZgteQ7mjFQGFFV6rw1MNqkHXuahu",
  "key7": "5aUi93iKB4UEvM7mQ244CRoCaz4hNKgLx8udMNax8ZPLNbs8CFecL1ta7vVQBdBij2TwAkJo1LYQVEGsWfoQ3LvB",
  "key8": "4Ew8Mzm8RbygziioAr6LV79DjoA6FFdhj8YqebQQrHqFfUqZQPPua11fQ3pApM96RYxWLDjYQKY1ZLpQCdq4iDx4",
  "key9": "5sHDRxwMYZKipbivQX9M6hYCQCA5CDVDzb2zuTAqAEU2AZa1t91D96n79ea37e3nQgyAoiVCVa52Pe8pNmu8zi2G",
  "key10": "3NQ3nZo6TGQjkghihMHnN2ysW6PoWGdyGA1z29Dbcnpg3qTuDrK5bVTFcoxZnTgEhsoZPpPfFS7vxZo9C6zKLpHD",
  "key11": "3HMP8dHDb4goJ8jYHV1bDAiQxZt4Jr5awM9hYk6wbTAp7MqoByZmQhrkAkTvzVryyqrwu8kK2eGF19KEKCNSLVji",
  "key12": "j4XvSHauvn53tuAsQ7DH6WYpbYVrwPvvTnzJUjengPw4N2iZwXJKGcDVSM43qty7A8zJgB8GPh2fGwke9UBQYee",
  "key13": "3nG7aYEFjWtY3XP7MZzAhBos68gAu1NNaaFwKyekiRT468J6iivqRQBHTThaSYrk4yczK5mHaszSuDY4Z7tMAuFw",
  "key14": "53WQhA6x6vZdm8VE3uMcu6cndaFQNzjUKu2qd6mXTwTvA7vJmmffhoptib5U92Mm5H8jUakmy3UTfiSkDRTtGXAJ",
  "key15": "5cnsnZNu7ji59HXcNhdV95FbffcJKRMaHE34KZ4e8JeJ29GsFZw4frPGroSr4ZTkwPEVSQExSyZJWjd9vm18jUjK",
  "key16": "3dxx5iiAJGfuMvXRqVLDfSjQPJf8R9PuLCbJx4UnnJTy9SbYj9hWm7XJXdmXnqo7d1bRKYu1S8bYrzr2xhVe7ymp",
  "key17": "3WLSffp3ZSPUyket54VQomsNqTH295S9d9GAaxPdZMC53zRE65o3U9JFcbR7SyG7Q4Xh3dYZHboWb1TM5fevuMWH",
  "key18": "wKeVQNKMKQTmmLAWMxoesauBFckSqtnhqFe9pMXjbirabJspkazDM1p6ub71PxmSrCk3M1MVMXPjJfCtMBD47Ek",
  "key19": "3tHbvxMEoeG96vqfNYmqdCmTrAU6Z6rQX7iXDrstx8Q7QJ2nuLzqSj5RCX1Fs8yf2Zs4MeAL1bDVWWnNAHHmr1M7",
  "key20": "5js7dimFVbWzw17xBNzULcujXWMy25JL5wHwTNAADmXJD7TWVvJyfXxxd3xm2mcMqPVs3pE94zKyzgfYY9sPrapM",
  "key21": "3wicQTnqxFoQgigcAWRwESM72imRNLZkf6DjJ7ofauE3GH6RvZmorJUdUf3b94fJG1SoaMZciDCDjDr1xiJtGgT",
  "key22": "3hDqG47951bGhuZNpptDz7uebcHXz6Nt7zK34MQEHyDuRYsNPeGqvggdVYD4YD8pwad5YoAfUNMpJ3NZBQgz2gKw",
  "key23": "iGWMMi8Ycs5u9me1TDSnsK4uoe4AuaLkDarJ8NarKuP5A979gXbPMEsV5UCVCcWFxdoA4tH1JPBLviyKmDmkSWH",
  "key24": "errmn1GzeKTMWf2dZujpzkq8d7uSGxzuC4bt8D2BraHy2T2FuiFyn1cDaaHX9B95iLbdZKKZgpm3fm43X9JbXy8",
  "key25": "4WwNzgLJbpRfE8tmgzuLJAbRUc1qZSkKqoPuJ3UjM22aMzZfbqV1f7iesEwzHfBhZ6gQownk4rtDfai8u9BZLgWN",
  "key26": "4r9jLpqp22ED5Ss2esppuuyeduLwoWWVwFGMw946Woo3g7RTFkwxKr8Ua1pm2LZkrMKJzmYmaesnqqo6Ahh13Vp2",
  "key27": "2QwcnVJs2XfKZwDHDmVuqwfFRp1smaWKX5eJs267CnyDkkQtjyvwGhSExE3NCXTvznTKURbmMSfroUXCV2rvW3ko",
  "key28": "4t8WHECAGucKuDCty64oLr2Y2P5LDW1XkCo2BgWFZxcKCqHUmRwdtZFvHDhs7454A2ZyjPB72tugBdJtfLhxd3Pw",
  "key29": "JdFqonjSnYwtmeLY8pG9mrRdRWZ46Bn5NgWC5N9krjbjvVTpqigtoVXV629y42t3j5GeHMD1APpu6d52mu4gpmU"
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
