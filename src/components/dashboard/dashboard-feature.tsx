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
    "4gVv3Nrmv8zqX2yyFN7X6E3ayHbfpqjiN8sAWqAsLeooZfU5dSFkHVShMSBEumseGUq6G9yn474bUQ9P6qLCSenR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Dfdy8J2nzGS6UxkTd1dDbhfimHK8dF9pE7s2WSGxTLmjKD3j5mE1omhVNQBWwRqsZMzUbhRyCXc37gAHCAzuJGY",
  "key1": "3UuAiPuL9crNfKDuGFgtLdw7otwGJeCBB89xkUNDEutP6mxSZVQ1RRMpcc7gMUy752LW9oTDy3NnjYDHKyMJtNws",
  "key2": "31ijQV3YEnPcnpZCx2X6GkDP9m7p2q5MvLaGBfebN8PBunbjKFyF5DbfAdg4g4VkEHdhrNv8sJ2JzTLGhszMzQeK",
  "key3": "2aWE7QbqEprbFRcDucoGmxpg1nNTpvFAcFxYwWNphTGewNMysj7rJ8FdqixWChJcY5oCJrUNt6mhq1VSk8Y2poet",
  "key4": "56AHJ1y4vkrnqzKzjmFqVMYQdEeViv9yb517qbkUk6Vb8HDdgooYUycn7P3LG834idydeDDpNz4mNaLzzuTX7o9c",
  "key5": "5Tvb2kAZduaFpSSRt7kZVhRT8onVJF9DotHDMte2RCvWSuKjuT18QEmy44LwXPLWiyheaaQr45ehw9ZR9SUvkA8D",
  "key6": "3sAcofYUTKo4QjhdSS5BN6jY7MWPmG9BVUMB88VtmFxmimss7x5wrmpwQ6rV6z6yzTSyn6GNUQdeSMfFRjKavYmS",
  "key7": "3eu3ronoUw3YBVZbA11k6qZsP5gHim8zpP1ZpaQPWv5SvK3DG8N6REjnaZwqKa1X25kerjdP26Pkiv3e2unvkKGC",
  "key8": "3vFVWZHgkZWV5MqA3fFMbCnw6t1Bd6pnRpzDo7aHSizVoLqz9KEK3oHgJfSKLGcZGL4HSn6DtPAj9XTN4XZWNrDQ",
  "key9": "4akHMHHBKdtod4iVbMDX7M4CCgdX2UNjVBjwzMZYAJoWadyJTrD5Yhj5iryXDKLBXFFehX9BsKJKRoJk3KgLsaZZ",
  "key10": "2HykWtbhTQepFfZqi6ggrpTXYmpAKugQKWQx5tRonpzJkUA9L6QnCYnR5S4P11j6cfcj3bLYRK1FJAN3miSJ2nd2",
  "key11": "4D3azrzKFNVeWV9veGRj4pkmQVzvVm6mUDTq1AHn7veAGpEwxuCfsSzTMTwtYtuK4j8fM3zMPiqHmyXjARXnmX8m",
  "key12": "4cuzkN8dBtJD3m5jHtwW3MaJR57fyo61fo9rn4d7fRfscyNo19zNWypwuHs9wJXNa75a6PoPhoadxFeAco93ydZt",
  "key13": "5efBjXxvVFF7m4poujQr2UVVecW2qHDkQi4G6C4keXnXGPJY23MihPZJuuugcQ31pFoo33dduzLkjhCiqL1WuKCn",
  "key14": "4PNu3Bzwz94oYaUrZwcWKiGdR2eoJCvEbBfCEunRT7iYSEhxi4mUKzPeY8CWMjqfjctABcFEjH3FwffZthC4Feb7",
  "key15": "5qx2ZwEcQTXcRUDNB6T3Va8p243P4ffzu6PeZh8zzzaNBxf8fRGSrnSfmF8VWdZYMz7StQirtrdh15p8HVP4NbHn",
  "key16": "4j4a9WFrkvn15MjbXukqVPAKzwmF1JVeF9Uw7Li39Phr6ef9XNQp4M5FTayGfhu7U5Zec67PhyT5Q9qD8qn3SRrw",
  "key17": "nvGNam8CECJgqyGk5ycpciewke1zLijHALzSBUsxUXtFpNbTmBNzwniedbJXEA56WGE4yoy52AGzF8qncRHLbng",
  "key18": "SyRqkCdizQbg9Nm8fFFnaykq53Z5tYYgMHCxZFiefEQB9E56vUQF5wxKWC6zdSFfz2BKh323kRfs6MRRRKA3J8F",
  "key19": "3ZNSYU9VxtwfAMQ5HjPQu47TXFTtN1fZyBnCi9KKU3pShVGNcbfXc81EJmAXBZKhYQeMHiNpcRuVsbSFUYPCU8Gd",
  "key20": "5X2XVSZAVvdzSoXipsFXRxr4uHovuuUWem79fYRgozLN4VB6iL64uwbA7mynYUH45QJnGsy6PmC1kziJ9MpCanT1",
  "key21": "4MZudbcZRv625ZPPpP7gCeMoLMyLg4scZLQiiBSyXHTN8B2HhCyCRXJaFoLDQ7mWuakLf7DCgE6ePYi1N9gqcX7d",
  "key22": "2xNEPckTdsDieFN1DeBvPXb32YbfEGJQPMaLyHpvLs2kuP5nBBtLQPJM4C4nKKzp3Ddpeybo7ZhhdMqxKUNrxh9M",
  "key23": "2jssojPN3SAqWs6wmKSkkRGDqJC5H15NGz6XR2tnVCQthEfJuvMvJ2wMyytMFMZTAsBnd6f5LwWy8YgARDmZft4S",
  "key24": "4hRd3hTdBdzkK9K8w6XNaBK48ZL5QMZUo4GD3vHmsoqdRQhuw3yhommduMvZ7BEy9xpfZf5TXGRL4Hn4atu4Gcdk",
  "key25": "32LKRLC2q1rogrtzM2m3edySpQMPWRGfqhXi2B9hxXyuxigz2QPG2bzGCASBbQEKd2CMn7mR8ZVLMkfvPWkFv2Nb",
  "key26": "4umJSciGmCMHxvD1YzxbiB47RmJjR1CcC9VZDWLZ2DfQrPccHayjhkcJ35SbsaQbNQDeH6CTWGpe3E2iNSxGoEL1",
  "key27": "29yyJ5MuoMpHRDQtpDdYNcNiQsTxmnpAv8dJk8Y1BxA69u2JoiKGn63NxdTX811r57yQc7xmZCzbBvDMaG7J2WFw",
  "key28": "5WG4jpBu2mU5mGrX8ZR67ehDjkLHZFDWHi5Cmg8H34FhysJ8AtWeYXKS9ghestjKmSbaQGNnPXTapTgWQST9qHYS",
  "key29": "3cmtAhkbRGTMrz1SGapURxo3cs3eEYf5F5iKqzvhHopp9rAaEQrwBSFpy96m8HdASTshGvoXfxwEaLQrfAUBjRKw",
  "key30": "4FpD5TxfjmWNGmmMMYsghsSDKiTDeCc2VooA58ioAue6YPtdmvTsP6yh3FbREoKsqf19cBRh3nsMM9sQ33u63dbE",
  "key31": "4pzKq5yH687SgybrzdPrjbhqv96ppLbgZmgbu3DUDNWfHf9qXC9ryozUKbFQGDo1s5ohrG7jkhACtYJddVGn4DK9",
  "key32": "4xFMCZMsr3aFRpJuBPZKC27jmJbVzw5CKEKqpkZyBKy2TbDGmRyzahmMNa4CcpmwTESiJ8gGazixYYyqoTsFMrjW"
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
