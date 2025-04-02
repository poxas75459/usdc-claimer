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
    "rfRCKzJymz24CF8mToUpLToeJWze1c5SGXr6hAsPLduxJB8bciFjLkykKnwYABJFatbWJor76BLaoREvpqih39e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nbv6fgmgJZTxVxWtj37Dci1P8kcXLdkRw8PjChtJgvWbX6jBcVh6M1dbjAtcXEnJUmXuPMEwDY7CgNWqu6NUQGn",
  "key1": "h41sGJx9Q61GRHFgz2YCCwrZ6rVS1e2HUNQm3GLcDu3v5F1dVQt61LGCCqYErsTTUpjja7qMNXN3e1dMtz8FVDf",
  "key2": "39UkvEEEG4C4zuKo1vzJe97HS3R64SorcLaMXLjgNwHfNbeEbZjeFBB3orWeS4dg5PGgHt5XE5Spfej5yPtg6YD2",
  "key3": "2Vd7CxcU8PAFWh6ox2LK8pNgt9L29AzjVBfN4fiiaDbTSARTSYXwLctup7DgDBaWionGAG1SJfVgBTf8711iddQF",
  "key4": "2j1cEqzxmGZfSibZjqGpK6F5Lpq9Q2kbWCY4Wja1TMvoPRUJawuZYmSVFeJ4uitpPr5ED5Zru8wvrqiDR7yBgiY7",
  "key5": "3EjQB4pxf67RDwRsruvXeshGpcZb5rKjouuMdWKNMki4T3Fow44jVRFcChjFuwKCLnSKdfYyGmeoic8nGuH9mSGh",
  "key6": "4pyptx84Uj5pGaTSBsPFXyjZ9URmFggxm1XhkySghP8Rax9dzd6HFobmAeKvCaWQLHWqLoYTyX3sBKocGssJrRHV",
  "key7": "5Wf5NQy7nMXNXBscsmzFTwUjbLYUM9133qiuhigrcWpLkyJRY2B5tVpedGQ1BsSRDuLVdZ3zmhrTjWrZZaMRMZEe",
  "key8": "3QtVQLrE7vki31HvHUGSYwUjZVuEk1aw7raknwkDfKnVfmbn82jtBgDnGGHjadhGz9mfMoQJCaFMXaZDH4DustLq",
  "key9": "2MVwrL4rtLHqcEq6uYhyHoSF3j8S4tMQ19r4WjVbePG3CDFU2QtX1hTC7w6T5A3Qv9KJpH8xU9zQFw3SiPGQVM51",
  "key10": "48Fjc5BT6aLye8qsF6u8CiozEVofQcPqV6R6pYQdRAxJaWws9UDHA16gpRHh6PrWk6RhpmWXKWA6WLCXixqkPjaZ",
  "key11": "2znrMr2dsNL4T1WYeUEdqp2n2jwvRMQBE7fmLzUkJrbpLAPPxob5Ap8PCfwDU1i9vzepJfAP87y3hiBQZN6tDZ9G",
  "key12": "3m79BugcuijvLxWMXDkbJzkUS3K2BZfCkAkjQoyUAGo7UwzZ3jSGMHsPtxgrwH2Jeau3L4f357TBiPvgcfoCvzTx",
  "key13": "3BAAKVugdVnTSeNFknvG2op6R7Q9qE2UjSqBqt9XmV6nxMqpTMXLxZNi5o3S7LZGMG7Swcg9UxwLzNfiPoCSRv7m",
  "key14": "bRSKxH86S9hgX9vzQBvK9nwK36QL7Hyg9wQYp3ATQieg5fnWfNxSY3XF3BwD1t677QPxnqXeJb5z88njFvvSnL3",
  "key15": "2DNxNMzDD128eiQQ4so3Xwm63Mfq94nUSm3XAzCfjhPXdXPyaucxtU8wrAx3asyMkhRvctyfy4baxfAw8Tj7aApY",
  "key16": "5dwGz5wp4QcrpBr9LgDxgVANwhJGhaDm4VzAMdpnckBVeeBVMe4refAWjq4GDF2dVjpLt9pvc1CBBPFcwX9RMuu1",
  "key17": "3FARtARu2aL5vLhDBb9CW8dy8VFFxwFDLLCA8L434oiucheVu1iG6Zch5cFiXQK35XrypJ3Pu86pHA5T6JZQUYud",
  "key18": "5ox8tbc1YXokyNPxUejFJyZviTYUnSA7i5CrMqQfz397vEGGfP8RsGNavDGLo6AxQjiA2DGJPAQ4oUKvxYrsCta7",
  "key19": "2ciPHDFu38UPEZxTJwRvt3Be2iggNJz7YaiZ8SxMmiRhvCPvkbn7D4SbGKauadt9ycAE8EKW8VdKA2bjxkJR8KmN",
  "key20": "2Nd4GZ3hiGqdEP5Dqz9BrjoeWnGdxQu8t95h1bwgS2LiaGt1QQfbnPDtAxnmFTafTFs8ErvcCQY7J3rL5aXSMaTW",
  "key21": "4YWjuQMC9ERdP2u2HoZ4TzdEP4YGUwS2TrkYz2NKMyRrPe5dsvkDzWG6KCsNLGdQYwLBoyFzWsZtmJPNtUtXNhWH",
  "key22": "5FcoayA8aEUbm6jSZtCrCsXVgc45Cy5unaY15QTSFiVzwesZnPzVNrUKWxAKbKDPS6QU2ABRaG1WJCtU6UipZCF5",
  "key23": "588k29A26F2JFpm53etWcP276rKwKSHtp3Mc8qiJQuKktjLTKBp27gVgMvHrPxgk6dQRQUsRogSfVutuNjSmR5nr",
  "key24": "3B6Zx57XhgR2YjsedJza44fPxJLpbEsG6oidbA3n7Lvudw4TurRDEmC16LpakY77enaBHjDEC3avrfX3mLs93hTg",
  "key25": "wtn2rdggvdqA5mdG7TADj62kZ2R8uRevPcSuJu625CsEDtoZyRXUyHaJVfJCwfnAHLK6h38me4WeSgVNkTDfcXL",
  "key26": "2vpfaae1oexTPjUQPxeWH1aazLvRmRLtSaYsJ6KbFLQLsedeyj7qSdQJ8a42kK2uQsGSdMzpm8vFy5evzfmurQpa",
  "key27": "31ySJMtmZoxzbzcYrJJnWF1pk8urSqjVeSpngLvtwyaXnVv1Z8BnWALqjftxDLGv7C2gjJQN8PjSgVnwCnaoX1M2",
  "key28": "25TNEhBdC7SWAXufZycFCxuHgCCaeg1LrkemX6UJTqNjxto8jsBpyz5QE23FCnZXC91gtCbrvSvP2vRnoY2mQYPM",
  "key29": "3AemBQ2c1oMvER37mUtAq4vchxbe3xPYdwUo2wey6vgbEdorfwni23SFkcFbAnDznQTrANzdyTp2PoTM9fe2uw8h",
  "key30": "3HemJfGfcQZsfNCsYHoAcCyDPwnyETesamtxfM1fpnL16nUfqqD16Qi9X3fJKi3FfCrdSd98vCsGYtUWi8bTp2ve",
  "key31": "313HRH1yC4i8Q4mfCYwhtBsab9TXhyaPn7WHjc4ZWYZqzXxN2phCujuU4G1XfUJiEMes1KNMq4LrjcbcZRiE9qfK",
  "key32": "B3ntAhsReA4CKC6qAPiSNY4C19VTEVfXMBNZc4YnTfDm3XeRDCAtD7hcDg9XVSdr7K4UMELyoBnT5c3sBtBZt3x",
  "key33": "3P5VqykwMHTqUFB8fytAmFBJWJqLaUE9n8K3Pq9p82f4MPg8M3LnjtrcvpfH7rqso7KdLr1Sx8gyoCRodcotaaM4",
  "key34": "5GmnumaE9R2FhVkGTyZKUZgB8pHqhaGxHY6yGURXwo6CaCBij7h1mcgR64sCjfMMdf1gWDF7XajEXm3Sc5QGxDjD",
  "key35": "45XeyQHukXVrjxumHXWdnjhhQRXnH5VFbbGPP8r3KixxH5rVpvfZxetJbvDvRUvdSSTGpZCGNeYukd7VQSQhAELY"
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
