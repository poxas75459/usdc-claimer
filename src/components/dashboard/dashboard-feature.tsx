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
    "5apeM4QbcfwjU31LXFwXVKxCASaEdFowtWtDFuUbKztNX2kZMfVCWFQruDCxj5e38TCiEhVQTzBzGy8Vkb2DTzbt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oY29dMmytw4gFbDg2bDKvvsQAdYB5v6ornzkUdkdZ99fAWHGgshjtMHRNKCBw5HDj3FpqTR2zdy4BNhFbucSyfp",
  "key1": "V5Z4JzunZZcZzp5mGJuwKpWiNgHgaq5Eohn9XYqU4E9QPBYzxHdvWpHDxq88qVHEJihEEK1KjN9W7ZfJHCXJeRM",
  "key2": "mFWMNS37R62yiaGoWZ6B7JVGcstVmdeJz3Z1WvmmRBuFcRxEoSmaSC4AesVVQKbrwwvm8AJh5vhgbZfRnHT25T7",
  "key3": "2vjubXx9nTYczwgEZCJmBzTQH234RfxCzTG2iyvkVz49B1QthxWJnKmK6tcQF5Jhawo4tBtVyhqXA5QzpmPpuLsz",
  "key4": "5MkE3dFgUqgeFbfr7UY2Zj5fr8obdHHydxPNiisd8JHyhQcGxnzEQcofKPeeLqwTsbsJ34nUdTjRG2a84DgfLyCH",
  "key5": "3CNEb8dsNXzqite16cQt8vXeiQYLTjrnSWJfAZZ5tSu7n1wdK7ACKA8wyv5fGm6ynE4MyeDHUDUz3BJEaaYDp64x",
  "key6": "3MTzGgXqrkgT9rfxHVxpVwdDtSkMANU5TBMCy9hhGGBiJUzmmuaKh1EKFZgnYbKodhwFK5FhPvdwpt6PBX6EsPQ9",
  "key7": "5HwW9N9LsmziPfQ5kELYYHXsbgy25yuMn3FX8RjfN27dkRgVpY2R8y5ptFxgiYhGRZAnrNNaUYiuksR1kXx3D4Vo",
  "key8": "osbDdpStNWrNSZAp5SDbaYZiSq3qTUpUWaWxMZ3kDox7gLVCThfNbn5zkA56Qk9q8DoRcdXoaaLp3f7nwLPgp8m",
  "key9": "41gjWYpf6yn7sjLeK5Mon3naZeGwENvVE2TxAmB87Tv9pxJu8WcdqfTgBvhcCJc9pJoNjkMWWFe6UfhSPbQNkenx",
  "key10": "3ZM99ighdch8gfnHuNUgY41JG4vgiBHDhaKtMCFCD8fkNVamMRHA7ebkdN3BtLqeYdzQsQy5eWRm5zREnPkJkEN6",
  "key11": "2uQPiK8ZPRfFXQ3tMwxFkr8U3Nv9rwQKzxPbkEw5pWwycXK5fezmAr8uZtio7qiVd7TQ2itPhU4wfE5CCzGKkBp5",
  "key12": "5rTXNfbWEbr6suQRoRkxopqRrPfpM1yHD2mGyyqKiasqJHieWkXzr2KKm66ey7Kyg3JBvcuVfLkwtFi2yBg8V6Ah",
  "key13": "56Fpmpszd7hMVDTRJERbwLh6sCVPCPNoMD4H9WTVfhNbV8oGqcAkrvqX1rhmkLGyqnieAfn2cPZG4Uc4bWxEkjA8",
  "key14": "5E88tGVFbYWCWsu9JA88umSuC9ePBHr4PoQkC6QkVjKtFG7uMp7XmKecg3bkRWTGwB4VhkgeauriVCbPqaidkjCH",
  "key15": "55UmLZQVzkG9ijRwRtcSTQUiyJnLuYgGM8n7fpdrZ2S9qLod7prpZW718abAmgtA13ZmkKk3ACVadHjFnNTp2u6p",
  "key16": "4rH1Lhsq2U4iWukon9HNRow28g7shNbbB1SUinvZJyosKpXiaWk68HpJtD3fXfixSKeafhJF5J91f7UBWH7EMboR",
  "key17": "jWcpa6wS4AHaXZWL1aBsjFXUrtjxRF839e8AaeHkvsSxtpsxbgYRAeh98VHAzyWHrE7aDn4MDcAe3DCBVUhze3C",
  "key18": "3824wBTyJRr2B6QSB7DkBFymof8fco8EeXoo7oZ7BsjmJorg1VSzGfAj6arCodP8dRZU3tippF3NfTSkVKDowhhy",
  "key19": "3XV3JSjxWr8eWxHG8WjRDoXkWCPZmyrWQStZLAE4s5XhKeiTzXyZVKywrnKXAo9DMW77AvE6nGzGfnGJFEhNMiTd",
  "key20": "3a4KZ6kN1mC3AN8ZFZ5mKkpd6EjBRMkq2JuEVbq5YqUbN8JPtjbP4V7LcaEwuceEBBBEMRvHyaWdvLU5Ra5SW8Xt",
  "key21": "5nRP7iK3QQHriaPC2B2sQma4PywEBh94Fktzczh2h6yLsAVYF8sCQ9RmACfU32GW4A4qP2EzUifoH6cQ3oWfzmpU",
  "key22": "24Ws9tfpjU8BYgeWSdKE6kGCBzhaG7sPVbtGnciQCwXmHUEemVc65tCrmHm1D9Vpihc33WaD3NNzJ6Y2QPcitqGs",
  "key23": "3ENnXGsubCsUq3qjaxxXCosn6xm9HhMxYd3YeM6W9yxkYxHL6vYFAc1dEDU7QXu2jMgwRZJ1HDa4yc2M6dgkzwyk",
  "key24": "2735yigqGRCz6yi5wncwkd4Vujx9H3nD1kTBUwSAwdR1TcMnGutr1r8GfEqLHkFQTjot8rkACn3Pwxakj8W6juR4",
  "key25": "4A5LmvH7Vtve5WTNGxcFsfPcmUqPPzmMqnYY7yfufdUPEVBvjnb5bw2DgYE58GqZeGFoatc1z39UzMYrG8u7uT83",
  "key26": "5Kio8vZE2PvP4n62JmTii2fgJ7FCEwrNg97oQ1XsXmiAzNREax6ooDTqBb4aSDDfD48TfEmkNSBnzw7ah3mALH4w",
  "key27": "WcU5yvizkLjBL2XgSwzxGjS1rDnV6R89tG72eDqJbko3NvXKfDyWNPS9t6YCPNkuF4NQpkCWT133ijQS1QP9QKH",
  "key28": "8MYvirrUWZTajxS6rjpZa2Fm1PpgetkVX5wBYcBCrrzqoZ1WDxSrTHuxWLJGXkUgt547AaQDsaH2ShmDZtKhDiq",
  "key29": "3Ewj3AVzATavY6XurpDXpoe3RZndnAjKQSwqpwCrfgVC7PR8TreLmjTRw5VEk8pR9xz7c8J9yPcpPkx6dWVuHzNb",
  "key30": "3kb5uu4Ekvd1CMT8Yrd9AQ7qpp2ozUWD6xe5y6W5rmq1N3oT8saUzKqxS7pjhCpz8bgMgPxmEMYtBHabuFuX5f71",
  "key31": "5xCo3VZtcgG5U23XwTKU1CzrNaxLL3vWXFBswTWzTd89yc8kVUvCULcP639QUNvXRHZjLAYGRXAhrDmFfNMXvSWD",
  "key32": "5UsxoBwWUwj75ZAbTRT9549GMHxRfRaV9NKF8AWHexsezhqFCNsyaHDLVGHAnE1NPDToDy7eA9ZsR2s2YW485Skb",
  "key33": "MjdYU5BSXoy5KdKQViSXc7aqaNrDnT2aZ3aW9BiLTJ8aCFwuQyQQEUB2kdZ1PbQcybfHFQq3LgiCHA4F66GyF4X",
  "key34": "2rpF2GCaVX2rYFJ4LSeG3XAD2N5fcDLhGr1iZFCv3UZRgUak1Bs6YTMcqXNEunuu51GTX61CSXxZpZo4vd4Vq896",
  "key35": "4iUAhJEorMUHhJwZfodHgRs3x5EztHnM1rGys2FGENacr2PZ497w3veCrbCNoqTXribmRCHYrWgw6bkMoGYRrsfB",
  "key36": "4xFSisZcbGVK7FyYToJvy3dAEWdWVcRSQjMJ4BjJvNp6DaPGJas4zJGCAPtXMupqvWEbmj8KBmWoKk2dHvnLdfuZ",
  "key37": "2XAEWjFWuS5a7vXdCRy37qqAnAgJQuZJpuNUoN6K2cXrcH6ZLjRy8dxTbtYLWVF1CqggDwbTpAnJYyz59vDAq8H2",
  "key38": "3XgsUZo78PHX6APNh4pbjiR8ZUi7DiSrY5Rr3QFJf4CzDKBikPEtSR3ZAJPpyeW1jAPvUVgzxSz1wX6rDqT3ymtA",
  "key39": "3EwmKZ32M1oR4oNxVE9jUpnaGvUBttEFBdLH7A2vs7mTA1wXWDuHWmA1jVhGaPhYLWPHHtxVYSnQTUtG5UGu7XFr",
  "key40": "3G3dpQu7FQspdBjTSMcEg54Wg5A6iGUgSvRt2sqRZ1dnVfuPUtWrASXyfRTgUFWXCk4XoxU1PN6Ce3HAUL84GDnd",
  "key41": "3UWBuQsrVP2oe9562o681eajzn1YMAnjKgk7CUGPuf9hnaHvjzbRzQ7igqwvpC3vvRYjYiXmqkPw8NbWcm1ZKj9C",
  "key42": "3ETNJX8boYTQ693Au1W8H15ULnZE3AeebfbyRFuAVFvmPMHL39ZrH7hMKGJ5whisTa9WDhaHieLswozAo8Fe4Dq2",
  "key43": "27oZvXpMph8suinKHJ3rUmpq1HYP5oUGRShLjxheNLqZzv2J1x5YbMKjhMveR1monEgRee7V4LVFqDwBpjPPS58V",
  "key44": "fr6j5izXre4XnAmanFnvXWkyjtLAKmHpkJ8jTVUEWHQQmB9e2NUReooe6jepSg3SuB7HhiJ9gWadcDj7S4PQ56w",
  "key45": "3Sepd4WasUcE7zDnsLTrf4k7kvwYLwityQbcerc1z7NSduXkCmgPi9pLekoXSaswoGuMyr5PB2aTtZyYg5XcUFr1",
  "key46": "5mKdnz9J9Cq1g5wC3tM5TMWNC3h9jgdtJXgR6jrJT2nuAiwk52tWE3AgAnXMihAWhxxi8U2xKE7iEA1U8BwyyWRh"
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
