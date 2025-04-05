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
    "511pu3eqFJrd2NkwbnJJ5K6vo93d85cGn6mojGm8wkCC5zVRhJLLbmXpNYqoUHt1YrPfEGZC2Arko5UYuukWpNT9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5F1i5XdyFCovrQjrTyutN8SnGu5NGBAtUBqrHfdP9mZGkMjnyrgYarcGr9ATx5MkPd92SEb1N3GgNpqz5xUJ2PnP",
  "key1": "3GBMx7Z483EycdNxaT5joPcij8c3dtyzc5DQz4wERYE8gYtwhcyPrrSZJeCFNaqTqWqwVmsAcAGQ9fC1vKK6vVA5",
  "key2": "2cBXCzPx2dxniEGsWvYXrwTeuQLpK9ND9Y4kcdVnSPKxstGeSxEcBABgn4WHGHxncvqg84KqHnAsm4qNwezufWGW",
  "key3": "GNvqWQXzZEdTDUDp2x6995qEx8yz1cwpFRPtsnjYNRzB1D2bMLXsM4L5Y1AJ8mAqWukhUYYfK3bLPkqCFgV7tq2",
  "key4": "4KdwCKL1CtU8SaaT31UDoY2VWnfh88ZXmDS7uyV9Pduse2V1rgZvoSSYVq1M3Aravf9seirWTUnQjFhBrcLXJawi",
  "key5": "4rJFQHGdZg9U7R15mzucKjY7XW4Xv7Krm5u3WNkU5mSBxSSiCG1vvQJ4ngABXoh7j25qebNE9Bn4PvZeJu2e2kD9",
  "key6": "4wPLoGJkHSQULdkzohpeRHmBQKzmYsochwoWnMEB8C17sdqUgHKR7UcnYbYWZ3PbgyA391Zm5RNEvqFnv7uUnJ31",
  "key7": "5GYMcVCk5qsYaVmeWtRLpdDDGRMtpD3bGH1J9JnZGfNbtWH4cZCN3iQt92d2YuWvx8gT6yzSHp3YUeYVxgDUT7nP",
  "key8": "5zDERv3ayZ66GtRWA8RBkp78fRkudQAe8FEf1g3FGw9AzzDp6gKdYSnzgaiJrXKMbERfdGs7zqFnmQ8Z3EnrLtK4",
  "key9": "2EEfkiNmUqSdTbFBvuSRS8YYA2u25r8Kpd7zVoLN8VutUmdDyeF8JuyBisYLPQCZmztY6Lbg45RPKz1CC18qLUG",
  "key10": "3ekumDMdM5CiXssgmfbKs29o44Xpm1KopqEx9oswRrJADr4c3Bz45zxgCVsbA1rUMtm1rqQQo7ek18h3KsrAu3Vb",
  "key11": "2wfoUEhSDwnspuo7fQoH6fKzJRhS4R9ZB5ykMLjJ1SjeBZyWQz4DXQHZuQoH7DqNLPMTcwsBRvGUJiUVUJVkqswr",
  "key12": "4mwefMN3jDmngbNXHBfgRbtmavQT3ZjiXBwDWjRgjSWUE652LeS9o2rz4fFtCXST6TvSTRhoRgWR4LdsBF3CA4J7",
  "key13": "4GwWdXzpSeM8S4xeXJThfh4kbGa9MTrKbVWBSM1D44TehDsnfQZSgxzMTPXqKKnQ6KWQjLKX3aW1gNoJvNei1XLK",
  "key14": "465RnKTz7YF5QNYnyvqfVYgKJyG4P2FGxDX2TKpKaUvqxzR1ycJvpVt8SNkBvKnmqrd1pzMdzbXPYvy2mRkr6NRB",
  "key15": "42dG7Dpw3d13wD9Vdds38PsqeqsZQQFsyo5AgtWWEmrvSJFsv1oYWwS4PkhL8EJ1vMrrkCSEXPjNq1XHiuhqMwqk",
  "key16": "ifipZHo7ndmd37NRpLRDHoLuHgbAtmSN1aEbMB3NhCsUuZE5JBb1k9S4cPG7wvfS4qQAMAUmtZtBUHXDJabC1bm",
  "key17": "2T81qKuy27qifcpsLYEhxgyoUMBuHxMAaqQYsSxywJSo1zRA8xLJCtQcU4CCCS34NVJqeHZduRYd1qbHVbVDn849",
  "key18": "5RbjJhDdgAyZcYgHFSUQiSiAphGDxyrddU6bHscEX6FkkcBYuZaR6fabVbivoctDdWXxDEBupAQoYoBcN11F7Mnk",
  "key19": "3D4BZGSniqZFtJ1TD2vivGGrGJnri8RAHiZUzbTC2jgM56Eu96f3Dq3rAQapCxce241YD6HH7v9sZep6dcQCYKvT",
  "key20": "4RfTAyfJyYX8mDtcNbMpRF8hJCJ8Rpm1UmNMSWeuXC7KGn7d27Uf3WQ7gWiQYyTF45mMV8YjFPzCQkP5xqqEqJaL",
  "key21": "26xMsJDC3aTSzdcqMZPNmZY1dsPNDcxN7JFfMi1mtS3uEseXKwHaUQmpGUkPturSkpiwGWq9Wt7yJ1KxNJ9sufDA",
  "key22": "2WPsHM9TBydi31pGais3uCkvc8XQBuFK4tahD4Zv8GZugvgdEEbSUGLodgV9bymuTXkcPMauBVdNLNdxzEydqtvS",
  "key23": "EiZvnFRCwVmPKAkKjS2QPpuYCsrFoEcQxBpnxxw96WkVVjiVQ6yYQB5bkNAzEop7cMCAJCsjU88cdi245KPcM4T",
  "key24": "2egt6VGbe2KeaAHQPPUuAiSSSGBBowPxNpHGCnTdn3AusSrJscnfyc9ruNuFDTzhBR7duW3o9Kj4K8V6pML1kU22",
  "key25": "3S98JeQ5nHBDdQ65a1RWk7ijqnjyJpiNCKY6PA18tJDvCGjTSk4UGykoEYVmaPpkRnZdFZMuq1r5q1p1x61X6MW4",
  "key26": "239X3DXJctdysCyYoJG2gYqbq4nWQ3A38dwokU5mWVswPEyApa7oQk7s7HuZbcDr6SrfSr9XS6NgYvK2x7aen8wR",
  "key27": "5viv9pyd5Np8ktphqpMvjRgzRY7QjjmTfheXf97pZXvAy7YuDNJDpb8yTw6T7QMug1UsE3xVYkqo1Gd2iTLFVKrK",
  "key28": "s5uYoajTLwTwiefda1U1F65f254nsxYCJ1szJ11cMeDTuWBUkndosTFoQRJ1pfgebMVGPf65SsWJ5jTTk9iMLte",
  "key29": "2bL7oCnYgBvskd6nUyc1uzwCPekjCbGYqodpBAcu657Mv5Vp2u4asqEpsSNsGte3vAVKZ8Zba3gFdacN4Xj386De",
  "key30": "2CsG6yvBqF7dooahQiVbWNVUbeBgHHwahC6ECGVbTqyB8shb4TQ4Sg82qD5yrecLHe7ymvSPGg9Tv1HmEvwqRLi8",
  "key31": "3UTB31WVgNH9ajqDgJ6eoydAj1i2Jc1PqAA66uroejCK5HcMaHWUDA54CormbCTcMjvS1DjWqkX4h1SCDR5FvZ4d",
  "key32": "4tgoxs7Ep9FBLRVPMtELGYTVvatPe4w9tjbuYmAsAWW1GViDfeBW8ZZM4sFRxi4jBBVAiXNQhdw54tZ7sw6xVAiH"
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
