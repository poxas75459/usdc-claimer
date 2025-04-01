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
    "5sNGuMnLtShAhzgHnDYsmypCpv5HFbvitdsGatUVMhzK6QN2GsMHe93jpNJ7zB8TCfpusM38JQnGWkykLeghFPxy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pdF6Gm4z7vdp9BMfwGaTuPmYUP9wAyr9swa2bdTj49CwYLeoFyZwf2fCqxWWgfXw5dHnycXvaCe6shhczqG1BtN",
  "key1": "5h6n8GDhxayhDL6aE7SguX6Cra3H12Uf2f1VYpAg2up9S7KXtTN5JvtLJxqxxUcCtATYQZ6HxjhXxbrbsb2Grznz",
  "key2": "5SB2LNuwFwh53jmFSDLE7d9VLrn4EhQREQ5XVzEpcPau2B5ZQUapNUzcFZCnUJ6UbqjZUi9voWq9ts7mos5piMUS",
  "key3": "4qqAqJVobySF4nUfvGfAWkmneQUtUJNnshLA8BHdxSX2DggTEeZ491Z3AXQM3Pan5bZj6fFTxDgKJW9DKbMV8gyA",
  "key4": "4LeZWr3eAfRU56ns9PejRf87xJuiUPCzSq8ufzZEtFAnB2Kbbbp1xwfeK5ewQvrp7CFjpEr9RzcvRFzE6T44NYtR",
  "key5": "3yMLk4fHtdct1DjseKsP6QBH1Szt4Ypg7hU2PawnVxXGMBg2CniAykwd9VokoGAZHbQQHHnATYWqGpxsEBW1amqY",
  "key6": "2onY8ij56iDHaat2r8yvzNNnhLU5qgTEkSX3A6pM4tmV8j8KscqwLFfnnafmc5m28k9SPM4JFUhnLct4XH9LkcEe",
  "key7": "2n5Kh3JKVdL24KB9g8YnkUohyhzar2ZkvnjgYve1yqnQfW1dGmhJG4MGEiNLZ1GmEMMSuhHu995r4YgaN2n48WXU",
  "key8": "4bjZ3MVdHeix1uDTiD4BqF4DB4aenUt47oevxF1gVe7wJ4AY7fRhF5XTSShNVa2TFiQkQuyiy4d7KSbwomhEFVtF",
  "key9": "47tsynNpvUs1wfyeUrx9DfM52ByouKoZAtkGA6MfcUG2qbin9V8H6GyxwXXGYtkLaKCyzJWUqrN2K35yUVyduVSe",
  "key10": "3oysy2zcx3wGyvGpN4kCkZKDpqpkot1tAHR2d71T1n5RBSfggcK55w9qGaEKUD45vKM6e3XhKqSFxWj2tzNJmvxv",
  "key11": "5WzuN6d5WU9Yv9pQzFDKriuRaHcXUT1gFGsVksBM2c6X3L5nUvL6UWAgf7Vov8LCk3M4m2Q926wyWwiwHQjavPW2",
  "key12": "NGsBR5xB56dx1mM3f7ZdsCP116ze7zfsUKan8qrV2MQW3fWcJM3ucGmx7eNVJZkwd6v7FPwRPJX6SaF7YqXHAZw",
  "key13": "3d2hK4eqwpuK5NjzKsgF5qAFrLXcb6vkN5hCknS2j5FPpbhY3LqoJu1tskX3ikDSUDz1sVfaQYkpVMCQCfDaYecw",
  "key14": "cUEfYmWovmtz35UkeR52tbzb7QLjEiD7fRk4bVfXC1PZfPYdTsS5TxqZWA8mesdaZGcSUc5za9GjoAqPRqfW2cx",
  "key15": "2w9BzrdZ9Nmp5FBjraNFPaNqW7kkmsUhHKZhmVhU1ny5eLNFmTNpsaCrKp2PefUUmtv2uHgEVx6xJdK824yUhvHe",
  "key16": "27osi4k1YmPiK1Aa4tfzgvK19FqaLFAmQdZdmShW1pUkPX7XamB7XBuyx4gRk2ArxGmjDwHU5rWosruMh2iDW1ks",
  "key17": "2thg65i8oFpngUC5vUWvaoUrXgFUd9k3bE7e6CXUPdajgBjP7ViHHVRUdHJcwwFuHXmwEnHnV3Lxc1Sr5pV2katA",
  "key18": "7LSUCaddbAuHXDLyyQZHypmdBDXmh5kHfTCqYxDbWLMsawWE3HR4VxkgLGBBDj9xhbtPX2JPew5sU3g99B2xdFe",
  "key19": "2B7SzuhMq6xwvtqds75XNQcYiyrmqdAMMvAxUHYugifWagT6xwPEm9BWSQ1azevZ8bWh6TtvXtTZPmjG9ZfpmjHF",
  "key20": "3MgFabCY7mnW7jQrCzxP1bSbZFjFfcxa4KdLcqHkfDY5muEEcpXnuD1HBQ5rRRkCJzEV5xDGKGAUaTUGNbVxm68N",
  "key21": "rwAttjYdPK9nuDVZc6sr2nPjay2ifiKRkqG7j5LVnNMMRWtckQrdve6bJxxmNHYLYsduQbupZRKT26o6xZFo4H7",
  "key22": "2fCy5CT2T6JzBnbF5sPGK3KkY3G1XKDWb26zRxb9gqXK7GpAq69S4KLDx5p2BUAFLwWYhdznUqpjpgJHoyuZbB1v",
  "key23": "3Bq5rGWHa83tzCsnr2PRkzgH6gk93KAhqKFaF6uPBgs8D6BgNcKdDuYiUWHzxVU8uGvU9arkFT81832Z7M2vQWxm",
  "key24": "4Uam1dKWgcCPTaRr9cxFrJpFsRNLK2NsLCYFJbnTqQhTASX3mjmBeScRi5tnJdVddaCxDmtUEMVFrmJ9JXRFem9h",
  "key25": "5MYZALXUG7Dqrf79sTfTKoEfn3ZcFpYZJMNFV16NhJGDz5mBUddBsq7P875KREcmj32i8vpQbgFhPxypDYHJyYxd",
  "key26": "CxseP5qrFN9PkrD2qs817tGammxMFit64BA4vb3AuQ3su46nte1otWMQaWidby4veCS81FJmeCn58B1u5BFuBSo",
  "key27": "5C4uctQ9eAauQpuyqjoJF9Ghtd7YzfpRNgmUFXo8fyJHgn1atLVkYmT8hpAnZfFasqB13tYt3RiY6A3Fh5DJ5xQ4",
  "key28": "2eqaLszUwLijVADx46pxxkitgH8YP7ghkw91xMeJmoYucVDhkix8dvq32BGBeryKfP8Pp59b3XDSMsuSLsyKRfn7",
  "key29": "6dUyXoUgB4acfWnZTVHZMWJ4GnoZy2Q4seScERsQricF33sAcfbmYMfSskQwuZHkcfvTT3AGrwGhXApzk7hMQfy",
  "key30": "3ZWXmMKCSLUkKeCAGKiXVSZ8qG9imkAs9hNWFQgqiJVoLDEYyLjnoiCUygjTmhtJvLsqAy62ZKgNAN5xYqG6Dwy",
  "key31": "MEr7qr9sMPysJQpk5XbEs95WNoW1Sia8uMsCao24hfjvfeTTRWT3NfcwGHp9n72EJ3AbirhZ7WbYVMxQP18QjWG",
  "key32": "2K61D7hYzehcgKDef1Q41jmKn5nvDYGgSZiCnkmzoLsyy7FcTUUGtLDjmt9feq4735kQYWehe4sTNeFZprUzYyFK",
  "key33": "5V6KaK2AgjMCuhktUHgxxbPtbQZwvpR7SffcpxzAVBGj1w5igH5X7r5Ns3ijyH3TkYDGYfjqst2J3uXazkP2yuZ",
  "key34": "5bGmj4ZtepLmvA9LqxyTjaQdzZPcMQV3QDuYyGr4WZqUWBwVHNiHFuDNR8cz5FZEVWG6QPm4p8Qgiaa3tiHNHtXJ",
  "key35": "PRnivRHeRCNDoBNbSQ5jmV1w2mNeLk9eDwUVxzKmWsKFewp3ftKR7huCACtgMn28KxivMGtVUBi2N6dZCAS3DVN",
  "key36": "8ky7HVzkUPVZnncQib1kPBsVDgrSa8mLtqh68xtZ8DRh2Qknox7oYtdT5zezt2a65pnXyzgGMkdmXUrZNHGHMfA",
  "key37": "2YqJTAZgB6bCNtE9Q4FNZNwsL6FjaGMW432eg2LUoWaK6uzJ5udeKJGFm1hATzWDNw1E8SDrXjQdsYBuQAdNyTgv",
  "key38": "3VtsyikRJao76EkQpSasLY7sr3Kc38HQeiKsQUWWxT1XyNaSdhkDXkgnuYZa91ksrKYuG7nSbpQY61zgZ1ECyXyz",
  "key39": "dMTEm4BdRrLW9x1eXZTLVrLEiUps4wHBMi6vYxrtrGTYubrZVza2gLkALJhfPwS7QnKCPomNSRLMmju2evfeiaZ",
  "key40": "3c3WtSD7wjJAT7EBXocwyQs2eDzhwXruJZS4DdjoUUtz1RJQnGmyXXYQ7ASGJyH6HSFk8c3Q2E5Qu97uMYA6HRTY",
  "key41": "5EYmGdeJZy1A1fcMRCNp9r5XvJMm1Z1Swjhe9NjzSTN6xg5e28M3ZxbNg3pCDmH9hPVp6L84Z24X9TJR2aUK8bWi",
  "key42": "3B2z8b1Kpa34VjSggGv7QdqgHPK7F997FkvfwQaLbD3KWq8L4pU152xATmyzMCZWLzcmwAyMTtMSS3sYA19zmp8u",
  "key43": "4ip9vFsbGmkhRihhRF6mKrXL2Pd9ShRiCZ8yrXQW9zM8eA9Ms76heUXWBLyowWKQMSB1iB72BoFE73w6hXteZ7ct",
  "key44": "66K6YMGJa3Bvj7g39XDA2k6REirWwzKhCdF6G8ezJrUgKfs7PZC6tR7zTzGrcS4zuJKT4FrjJi63u7TfTT3xuj9y",
  "key45": "65t8xVmRxD57dre4b4ueBSp6PweRfLTcNSQvnXChtNcNzFTHXq3PLUboGVzYEfs8RpR8WbuzQFRpPjHfxXAju95E"
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
