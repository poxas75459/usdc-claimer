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
    "kBQKQr5Uve8yjgrybkBEyn8UjpSBdSGCYLY9RbKSt4gqpppSg4kCausTJzBcqUiNwuHyUDLyhnEouAAbH3CkDwr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sJWiGuuagiu6UknPa8QD3sSJFzpTAW4YGMTx1pUGZVMrnCvMxaLZrHN3wEP7H6VoUqx7E7BtUxYAzUF6HFtaHkj",
  "key1": "8gQxvTCnXDBi9EbPJRzVfk6Dwviqfn6U3mRJSB58pioUq3VLGikFZPDSxyKdq5hz8fFegqbmnjSZ4UjP6CBvu8S",
  "key2": "5dNkNis8HrZD4piVyGq858fvSm3pgJSxVELGi2E27jNUVCRxMKHMjMP5wzNP9bobMCPnSHAiTq111miKLmr1t3Ub",
  "key3": "UJUx9cRnWee3jtVR3eCnRY6Nb5H1y4rT7ajV4992GTR4PVT1JuqA4jmhHHpcXkVBvxgn455x5CstedYi7VS4zaY",
  "key4": "2XRk9XdQxVzvKmeFU2BAfDRza13R4m1VRTNLmvvw2y4n8Y66UX7TTpqXYf7b4vQ25uMNUcMdpE1Qrv5mydEM6M2e",
  "key5": "5UCmophNpU7VMiM98o3maHfVpNx4DSREENMpZWMnj5322bpMHYuMQFVimQVEiKQgFWM6JoKCtRX6EZEVobfAf9cw",
  "key6": "4eYTsjb7JjgskKXoCPt9xRSZMB8tf7zUyCsiWLEYvQi4Cbqo5CVagAqwzTodhYZwHQBvxUBqYForpiFREeiaWhiz",
  "key7": "5ZssWrFRJzFRaqi8ADBryK9zzTzPow5gsoYpW3RXEpKpDpnx4zoLraTCb2A8ZTV1Lih2DohPngvY8VZ9yi3bhrce",
  "key8": "5bujzJiDTkh5dLTfRMMoJn7Nqo9Nzy4e9HAwheNyaEMFkFmizpnN864Fh4ssCNNQe5cRN9eg4eVzvHhxy4EwWBcD",
  "key9": "2LmAgy6vCMtuu2TA28okSqvagVuCexNAsjwj4P5o6cahaK1Zpfm35WhKx1nnNeQ9iktRXLqMFZjzm9SftiG15XfS",
  "key10": "2fJYXy8W4FvugrPx65sNomp4Loq7mmqNVcfQAiinACnijkN12DkKpHu2pXDL8rYDTVzrhcYkfECLXzjzPVsgbDvx",
  "key11": "r7sjmMN9994i3tjGxEVHAWVuv9u8FgGijXbN7qyyRLuHLX1zJd3VefsVE9KGccSSe3NvEP77FqLf8gn4cr8g2S8",
  "key12": "3Zyn2GAKSztuqyxmdpXtc5K3dDKiFvnKqvTmPNrwuG1DZWnAUTiqwRRo9tzjjDD8K2cHYfvyKDJXBBHyMxb2NnNq",
  "key13": "3mDcdfmijXnqPnyBWVCMup4Thg3SzXcenFngcRBvxwiKSwnSwyiY76XnuTT2R2NCqiQq1a5u65gp2v8FMvshwqLn",
  "key14": "3puAfW1yPDcwKniDD9F4MPM28TMDzG99b5tcd7trDsTQdh572jMTY9LP65ievonM59uyfM7peqV8vxZwSCmCgZML",
  "key15": "3pZXf7eVMygASidb9qW7Kwz4aekm5DCMLYY55MBJAPVmxQaCG7cAJbdz2ju8zqgc7MFTMuYem5sKAgo6nZJULvwM",
  "key16": "jLud2iyxkbv9vSt66BPd7KPBo1eFMtamSQjexXjWuK2KYhMzHoXBt5mNoTfPVDASViZ5G8L63xu8nhd4xwuAnuo",
  "key17": "4Q1Hd6w3fBeQSJApkr8s5nLbPr3Gy4DLSHev1DuTrXJWcCPjCyabBLDksDR64Tb1P9HiNQq7voBYRhwCAkohHnyW",
  "key18": "c3VmTL6uSH49e2wWrDyTnczLfawe72FUdC2SjCYqiYG8HHteArKg4WVca6MRvv7kuQkcZcKnkiwSuTkdTuHZ2Bk",
  "key19": "3hXHo3HLs4jSoWXgBUbwZoR2Yg9w84QJ5CvFW3TRYyY1yRf42TmMtmUdi2EC3rgBtzcYYZYu1w6rZQFo8tDYnrsU",
  "key20": "5zTA4tHqkirg6bHDBepLJXVM6QVhaWi1SZKDLjyPxpBmqMSBFHb5UKmHUfRB6WJjjNY6cQJkvn2uT2gepaT3mjr2",
  "key21": "2cXkNXSCLnGMvHi9xZxQT8jJd3RDaaWZHgFbd2q9JWGS1eJ3yj2nwJxUK48JR94czSYtuKcH6fqqR2teepRgaRR8",
  "key22": "Kgki6YWSp4t7YKap2hW8TJLwNMkTSi54z4UnUWGm57xmDiMAFGehScuAJhAwLnfrUjYxCq1APUvJGpgcwjR85eG",
  "key23": "4bhnrDemv2uLXFAowmFMg39cowgs5973VtXDD2pn6prauKj6hFSecHNX9AogjBzmg1EKwxcotBdgAUEkzJy4TaDM",
  "key24": "HaePd2yhMaBoppQYxAUmQg6injQfCsXDtfKLzZyEJ61hbez8fq238RaUw3BZiqEWx4uWQk3qyHby4ytyoSJ8Wiv",
  "key25": "5eHz1DEtY8rkhkRPcLaV2yrsyxAm6DtxYrNv3MDS7CvcbUTtmrTF4Ynz3QXPxVZttswZTdjGRViUXHfDMxqNNqM6",
  "key26": "5FhEQdMjfbSRnRvwdqx1H3KZ6m1jXFUGDN4JQab38DkJM1xo2A2TwtZCmed4554RV3yqrgC9Nu9JzoVu9xjkYCKT",
  "key27": "4LzEYFoNbaAthKLRzrB5kHq2E3ufdgLR8RDeraEECZ7hG44S4sTK5v2DkCtshneJgU4y6ygYnWx9B5kiNVU3evY8",
  "key28": "3d9gDibmLhwAVu23nRjsmSa7ZNXydpjkGpxNZHE3dGZAdX6X6yj73rNyXHjstE6rQ2TwMaL7hpFwbvhUdeC1Bfsh"
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
