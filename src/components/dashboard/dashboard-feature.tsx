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
    "3W3QFAj8ydNNHHiNvuntwVstY5ydzZdPrwtNKVbYshErgVSoqDNn7PzHxzftETzjA8tpvvPvmepiJ9APkZWmKvDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "423x4BLjrRXDprXKB4XRhBt4K3GvXF4bxQwkPCfXYpYPnyBaZ2JstCRsk3jZmy8QVTXgdBGrjbqbjT8L4SevTPAp",
  "key1": "5bDip8kG36RjrUuXpyPqxUHjwWqGrzCuvSZ2K7VAeiPT5feFG4g3i3teFyt8BKoVxLVwAkJ1VbUman3agg7LrWmf",
  "key2": "5o6yRFcQpMcneWzorABqMjZAegS3tvMcY9E5oGDfXX2FqQChGK2VC17A7N4tR2aCvyQbcUoVjYjdKDjNdJJSXu3y",
  "key3": "3pBGT9hfgTvLVzjxURx3J5fsAHDfcYuCA9bKrtfzS6KoibzqjdYrHsF73Mo8KSrsteLfbVv2vkBcNKhoNVWKyCGH",
  "key4": "3KBj41Y9SW9Mve75ozuAtD8Nh1GDVpsWMDys5Vcpkhcpw3BN2AL3RxjofnjfpH3NSmU4HcwXGYb6FM4gAnLE25dL",
  "key5": "3wDNf3aR1DsHGtN9JV5AzpQRp4extgFhYJDwtU3tmhERW1e59TkqVwUvP6HizALw9NrpczswjNFP3naJ2uUbaN91",
  "key6": "5LzHLGU2Cp5V3jCN8AiLZtit68SVFV8Pcv3ikqBAuLbAkWMXMW14AhQxFoBEitn2VZjhUvABDnsHBuBj6YSegF3W",
  "key7": "3dwMVWLiaVNtfa9PXfZXYbCgyqHic7bbUmvhBnaKSVpNERDxRBdMtF6Cw9SjkTgCEXsF83BgPS4XY5Siovg8CWPE",
  "key8": "3Es6a5aJPp2ophoSyGc3bY4ywPRmCh9ev5EtDZrnqQryXPJTRqcJyGtDm8nqbmU2BC2tPbxbdvPdsRYwZFrHHdWw",
  "key9": "4pa3eoguMqUCk6ga1eGCLzmtzJcKrxAT8K3Wfjsq9uwrtb286idVEeoBjy4bpG2J3Z7hDjT2rMhSV38A9K9KRxEi",
  "key10": "53LcZ1y3Yss8LuQLgxx5cVtCAshMYiwgiGdm6GAByx9abcAiEkrSdV3hEGifzQe3ERirmyLxUhNfRTQ841xGLaYm",
  "key11": "3pWRMd5TGSEC4EQ23sEdybsEoJp1qbDPFx8yjRKXbUv5S28Q7YeoqtrioGcB2sXgYgeHajfzJhDopAfv7oNFDSR3",
  "key12": "f4yeZCDGu2dmiF77pm52CucDvVgu27du9vUKN8M1BRaoXYaKBCKCizBpH2GCh8o2Hbf5PcTW11qzET8BKpWAZ3X",
  "key13": "2CbTVPZabwyXLNfkFpxsHbdzqavTY6tTh3nhtR3iSSKBAaqvgNCDUL7KmD9Wxhg2nqVzm2h44xuogAr56otmaodT",
  "key14": "AcsHvvxrdyD3ogKMgKARRevxRzEKdUSxgn6Rdn2rw1xEtyeYbdiCgseqaLtMixhbTSiTZMxt2pHTKiZ9wLzEw8s",
  "key15": "2xK982mhTe3ckaY2azsePbvLWLzWXMzkbnL8M4YsAqdnLL95rSUVKNsddNNez6wA2yhEjNcPqsE23Na96PqmnWVN",
  "key16": "3KFCEhaXqV8QWmWDwCXK3Cff7gpVrWbwX3SowwvuP8exL3ipcjYkoS1Rp9HFkfEXsTa75mBLXpadZdyu2XadW4nA",
  "key17": "Z1kcc9wbZ3pnEQzNJaCuk9uKFyS4FF3BUvZffZmgYtnJXudsotuYpBmZ5kykmQdbkuyKYYWTcU817eVnbPG8BBC",
  "key18": "2sGj4uUtkZfRA1PULCSPq2qGEg7qFQ1QctBoprKXP6aQY6f82TX8hd8joANpMAR8M1XeDw4NBjStkvHorcDruBXe",
  "key19": "5pEhwcLS1vgaPsk4UHtwgY2DTozVGTnrYQHgWcSCyJhkDfQnvgX82JKxJqCV9Y35r568QYWqeyZtR9n3P5sXYfR9",
  "key20": "33k4wovFnSt9JsNWB91Z7X54oNJbB3tj5Bnbf3topeEmbrGsLQ8xY3FPGF8NSPBK7oPWNBcpXf3GarL9H1PG8CDL",
  "key21": "246SA8rrMZ23Hk9hX7cLPBbMDcJ37sXNQ74xCZfG5axLhimJKhWdSaMQNEPNuUrHteQUGyu4RsHLiDG1KvcanV5R",
  "key22": "2qV5aUMkUDqK3wJ4b7p9A9ycr3gWAaPoKTnbG9wVon5obgx5tHF48gDd9RGmPYTvR8pQy6uWwwfszAfn2AeLPqPa",
  "key23": "3waBsHwhKgZDZuir3K7z6NLnJCnjtue5QguRfvkTSF4g8MXUAkzEANQBZ245R7VukBadTra1AAMpN8ufTZt1hGjo",
  "key24": "SndzX6bcdcDRBs14FqNfcnGoVRsTRcCcgJf6Qsmx8JtuEL6sfyLyhGxpmPeVXBBJPxKF7ar9CWtxzaHzc5Xu8LL",
  "key25": "62JPbjrWTTcHSgiKUbVwsXiJpqoUuANiLcrGy168hrwUbS4UakeenJG3KNAUbchq1xE5EddbDTCJ8cfHB9Yxbv1W",
  "key26": "2U2cdf7VWxpjZ3bZy2maZ1mSPMW3W1gcbCUi4P7SrVAaWmsqbncQYdQCrx5pEzXMyBCyDCEaxi2N2KErVJCPdd7J",
  "key27": "3RDhqVrzmPAWbt3nQEyBggQpA62qKV7t8xJx9oZrsbtju6MERWWTuhkci9wSuh5qUGXrWVstdeTmNbWSTJGgmZGp",
  "key28": "5JNJhEM6CvtaFkvZ1zaCz7syfFSgoLHHkgTDcnKjrgRAPhT6ySiRKKsLHc8gWxWJ3NxJM92aMhDopQ8AqzFUYDaL",
  "key29": "4VqxDEFaYdTVW3HTGbFEAPNcUEzCsq5ujBrpW7oTxtzimdxbh6157s3yqo6HikjD6aBSuRrCCeumKMpHQ3jJ5VfK",
  "key30": "3BdYvrGGHTx8q4Y6ghwzW3V1jan6xLmH2CRprcgXPt5td7N78R5ouYG7iUDEo1biXzgCbjDp3ucbsaHHYM2snFDR",
  "key31": "J9MevnN5XmEkmP9MXSJBpfyy1ppKsGruut9DjYgnTpYTWoBVnWaWbXTp5xDoxUDNmN1s4KPg8KXbBio8SLe3vXL",
  "key32": "67pePDsF5BLpgSQ8zL6BUhbZDyuahJjumjg4u8J6Ah5Ray6sYKq3AZA1fbg5BAVFerpe77132h6DeiHurtXZQ95Z",
  "key33": "2KzcVPj3ncmZny6Zi1wN9cRVSqm3dAHonczLh5NGTJ5LCkJbthxoyN95fzWzLN94sCdyedjRQkCDLwC7vbvPmReX",
  "key34": "3MsMzRMz8vtakBMFF3pYq2ouc7nsAcKybnpkUkNjgWTeBi9EyF4Z7GUC9pWHRNPFceYArwjRvyfRx4it9X4cEbKZ",
  "key35": "5L3fmcySksVwWV1tXa4ke5HmvGZQwwMZq73pywZ4ZrtpJDoex1AmmjE3zPPjpGCLiEzLFZXYaUKJE1U5mMeq67SN",
  "key36": "5BQyJ6JbUMGk5zoNQpnriFraGgq8SiBuvYESMEk2uCC9b8qWEXDGxWMsqCaMmRc38eyZGFgxgbJWRRWUL86YNiib",
  "key37": "4ae3Y4pu4ejv4yzc7EvnfRB9d7x8taWKVF6vE9H1fjLCakeR986oZxRqKmRQb7Y23qKr31V5gMS2WerRS75KEccp"
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
