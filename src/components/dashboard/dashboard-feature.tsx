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
    "4Dfyn1ewwAjSDgkjnqZd7v2tnwA9zM5pvMY8eVsc16tmCGZWbNNMSGrUuBvW2hLV5dZVTyxPYzXqEvEqjtx2oTgx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7NwFh9qMDxCLRahJJse9wJNGoW4dAtUApaSRuaEHiMACS2vrL3bLqWjphmrfssf3VsyyhYY24NsSda7xR2vizn8",
  "key1": "4gPbMxXTez7CrGtdCqJGyRdKwntzh2XwFPtETn5VdVbwj9ZvhNwagwKjdaeEHLkrqrFhkh7hCunVPWkgJAdJcwTz",
  "key2": "2hgJzMoFADMGBRQcqw5BdR5VS8UvoDpyKXe1aBX6nWDNXJqPG8NZPZmiZ3D9An1meQSHHfQKHtkfTuXUzzb3nkFe",
  "key3": "2yjv7phVz31TiTf4qzphDQW1hEZxeyxJCZUR8ujKVsaU7fdqv3argSag4ynsoDqr7DQd61xNyLzPg44TrLeEZhxc",
  "key4": "vq4dkP8WeRvsAgUG576A9aWNNph15waPAMSPC5TaqgdcArdRntb1vyJ6pRV5W2521p3dTTumbYDJcGr9eeEuTaQ",
  "key5": "4QN2oK75KuxhUpb8rFuQTwniWkYwxC6162UjqNMtLR6UnReXCJaB7MWpLcUT7CZVGeiW71TiJJxZzLD2kZMokpRj",
  "key6": "67W1jMt2AnoHvubZYTH7Q1DCLv1ULJ7vGHHNBi1EFjEYhuCXrPUWUNCaKDp1HuLH5W3Tt2233ek34K2NKstH9sFE",
  "key7": "5yhbiWfJ7RgtntUNXxJsPLq6wYwLUKaiGaXeAJsSv6nVxxayM7EhghLhnVyjkdrcJHmDJAhBJ2MXLXGXHZpuiVSG",
  "key8": "3AWZhFW8c7rGLU3jABTMoTN9p5dM8E3k2aQ8FLdu6duQnYamdy2WAS4NMnwCQNwwJfSGufX4kbdDQLccve5YPgpZ",
  "key9": "3nJ57m2y3g56QyaePNfoHWb2cSwiqZtA6NsMPHXK28YZDtvEfwYccQ1M8JEaQ4SHJu9Fb7gVf55v4gSnmFmiwJK4",
  "key10": "4Ta724ZGLydqBy6EwCU9AFuGCC7CWNY6ysjau52nRPbrX54UHPorRAhvbby3fnnNhCRhgJYBprSPRRWsLZG2GSBu",
  "key11": "5o9hkjfq9zLyJgb8A7GDJ48BhAybTSUsvHxmXkhcrmCVJ8sCmPLFyfyhLaGUoMFkqTWS2WjRCadEqq1UFbcNNp6F",
  "key12": "Uch9vzZDKpcx27dg11Hcm5ttp4fge4UH4fH6pbuM2LJUtiKN1x3jNrHCD2eRqdpKHNinskEFnUBGnGsyfp4vvfo",
  "key13": "391dKsaXz9Vu7dD9ZRUswZtmaSBbRvUH7Z8zGzazfhCgFMXdcTEiW4tNggv6yYbwZaYFfd1heH4FYbgR8obgqwgJ",
  "key14": "rrAz3xnaGpNo7E7VjtSX3TAWVFPEfxRmtrofsfJLwityd3xcePyrk4rX5JxcsRsvygKqToAf5eEjozaCQxTwg24",
  "key15": "3oRtt6jZdFdGbpGf3CT3wgx7u6zDoqNUJh6Kbb66v7eSdCim7jFnkMW6tTch7LiBwa6PbSfhSrQNSxTzxoHziBb3",
  "key16": "3fg7JY9AygiMxct3BjcBJYyUnfpyaGAemDxLUDtWF7uiWyTCYAzCdTQvKpfG4ypZmiYtGog9uKaS15LE6qiAKAjo",
  "key17": "5ECFNbeiPqVFLZhs6yzeUhF97RF4i3kE628Q2Th6zqwnMMfEHtVQtQQRnE4NtQmAtjshKTUhBtyQCxwpj54F9FFJ",
  "key18": "2mPqoDdpXM6fH9TKWuNu1TnJLy8FDhU1dJjy1nnEssNVdRsk3apj9v3s2Ji4t3iKeFZsZRYMnUQPGq3CjyDQsc5c",
  "key19": "4CNdunjcZhGccvxk6ef8J9DnDuM4RExuTSyRKwdTFhLSyYr5aiL3fxMDGjJQ3gAdoBcbiHXCaemhVEDvNvu1EXTo",
  "key20": "61DfyBa5vZQhvTPoyg2cqB36VRTq4nzXVHfjphmTRkYsFtjCyDNQ6Ug63vFXEigxEHb1f3AqWJQMes65CpSAcaGj",
  "key21": "3CQ3ZEVHNBSCXmghe5SAoVSf6QeQG64XfKNPb97ELj839fx2cPMPiy8kejTxbNkbhVDa78DgmnaNJoS8iTVNqdMy",
  "key22": "2BAcbzgBQBjAn1rjxD1efnACCQ4oZwThmojSWMF3EXZJSwkufWzV24nfBN7ATU2snkAjog7Zu6Mx9ioEGS6LHZiq",
  "key23": "27KDLPLVAa9wUNo8QYyXwqTrx2rLgpBXTgRLwHeQBTSm4xvTgTgjQQ444DPn8tW2CdjdeK12by39WdoygXdsrKzs",
  "key24": "PyGAR9UvuY8GQ4cL8Jou9sevnZAafZ3HAsXak4MjNeHGrJCmHLHHEGXJttECAGbbqPuZE5GCoSG3kYeahUS51Bi",
  "key25": "xHTeBmAV35tCMNCbFfGJHzmXuBuCm9CVjqgKBWmWWLty1HMDYFnACUtRSmGz8YZaVCNvPaymzr4RdT7hWyXLZCM",
  "key26": "5PYZHg11RfMHSjsTAyya4qJWQZhkUxr9wWYu4SgKLBmdq14TPTrAsnXu3jwApQVv9mDaj2CVSEKYNwL8P6j7ZBMT",
  "key27": "2PeUYxqMLUxAA9kAV64BZVXSKzxb3JG9iABpFeizkERJ5geSTb9yFUQQBuzHQ3T6fxEcdK3odHcpMw2TtuMErpAv"
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
