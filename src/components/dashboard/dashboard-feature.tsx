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
    "MnNmkPNeJhL2YXk16D4yPWszMnAEU2u3KTbvdFHrCRtYHpEQWVDA3vMyib7GVgdDB4Wz6mGGj6FGVDFedXkLV6S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65wotJ9Rat7rSryxRxTvL1mQSijRJPjaZHJuGHRBkCxwWcSbG2kwR4Yg3DM474ZdUvEokdVjAB9vN2uExC4AW3gj",
  "key1": "5swb6Rz3X9qNNoLDNHMFwr8E31ZzAAiUQyzCrASAiEpJqDaiWNvZKTAfUbLJ85FtGAtnAfi8qNFTFJNqJfeeQwPf",
  "key2": "3DDvpMVyxY2EXCFgraTaAwcMTBBpDJUv2svLJDsc12XRbacmjfgqq2BNdqvsTSgJgD5V4p7VqoUseRSRbxe73C46",
  "key3": "3131uZF3wPehJZCE878H3mdTNua3H8Cpro1XckpyBNY4MYa7At9p2z1Rr4mdtTH54QVKgmAPei1MfRnpXcmyTfnG",
  "key4": "5rXqNfAoBAksSoVarmbsgUTuSLnw1pmu2LCR8mhp3Hu36DBxMYzBami3q14TQigFJ12R5Wab2TRtyakr7CcBvqZs",
  "key5": "3bGMk4DLBPEv1NrkaNk2HWMS7kLkEU8FpJ4bKtagJY1NxmM4fP92y8udhxFYzviUwJ2efVgMfhtcyMzZxd3PDcfB",
  "key6": "5Qk9aCXrA8JqgL3KZRx8uu3TbJSG24S6afhoCG9aa5ENy9TqFZAb52KQxSMo59ycKdUbZDQKLnryuagpzEcgQZNF",
  "key7": "5X5kdYBhgFcv8Vy4TGnifNVHsueZtRxdPiBJcHMnFjvsWwptN2U3NnDSG18mVZMpvGgUGa2QRF2pA3SxKBx6AkQ7",
  "key8": "4ef5JmJuJKXk3qgh5vKDNjkecGkuaDozkFJVpeURDKBknqXr3XvyqpiteS3a9wsFNFz7g4W5UxqLWDKdGYfrzSHs",
  "key9": "DW9cgPnL1dYDNHHz1QeeufYwrHN9vfT4TC2TUoK47BEU12MWxhBXiWvFj5VLKT1BJy4Q647rfNTrZaSMxe8DvzY",
  "key10": "2552pxuMBEn5dfkZeSHoRrffvwfdaGuEhAryo7iRPrrZ8YwYveJC1dG97FVFKdQ3V7hbXVy595BePoJb6uzJiJUD",
  "key11": "58kAnKkiE2oQoB8JJXK4ZEPQiycTGH15wVSytmpDVC39QbD1TpNmSWBEZesubA6gVFv7ZWHMYEQreor4QbhGuCs",
  "key12": "2xDw8keTEhkHdim8N3erhGYs2MNKgbVHZAktgHsgrKWkdmXsk5dF6zagHC5DwZfwfZNwucKqmhXauN3Ch6RuUzvc",
  "key13": "2R8Snmk3tCpRFBaEyHCyTMLPYjE8mj962LLRu4HSixBBVEYw5cDy2aQVgR9SEzgD1p6vo5tbJqghkd7HG9Hx8GwM",
  "key14": "3mwuZf5VEvUySC6nbp5AxQwQcXJHbBL35msacpAGbg8rAgDJxEiQxno8oomYYC7ogE3x5hvd1m9QGkzhHYGvh21a",
  "key15": "T92vWKBXAi4tLJbMXLQs66HuK3FD19cmq454YSTxbJ2beXXqsm4p1ym6au2uHx6w16seXJXmQb574sgJgvHZ2Cs",
  "key16": "5qQcFhfLEFXAcg1ByJN6eDraaXKNG283tHNasdNR4CV8DpoYM7H7Te5WMKbGxheg9SsK1pVVCZ5z2r6BLNL7CDuX",
  "key17": "2Rpo8i9xPJ7WtFZt1TF7Ywx34KxFrTsW5Vrf8LAf2oFu8cdLu7Ty6JCRZZJLvBamhg3tJWSrC9c38iH31Bk71vsx",
  "key18": "4CTm2j9ssKYSxgAttKXgzunRdehURgr2Ht3gju1jJUVKBPBpJ8NQ2R8RGwSUeh6X9mxqR1DfbTMqmaDBorUPkyuw",
  "key19": "3HvRwAvFLPvX4r9VRJ42dBp8X6AYKjRpc2xwuCE73tHzYy5Dx4CUmyEoChfuHGghYWypuS9kR4QKdK3cqfdEwG8a",
  "key20": "2y9vbLiLVzLSubmjsj4ig9ztjfx2mSnjoketUh3zL5XpZxMMJcwXPowiuUKXfy5Yy5nLXNKLzVw5oAmQ2fkMbSUs",
  "key21": "3EZX8tmyjoUK1Y5P4B1NaxUN7NsNLf66kcqHd125r7SVcCLewg6gnErFq7gmLTyWFpmr8w3pYsMHo1tw9s92WRsx",
  "key22": "4MxZroAGmfuUKPgwX9obWou4WT8YZSGf9j34RVsf7BYTWMk3Q6sEnERccb1oEfcT3GkibhZTgP8VvF7trszsV9cx",
  "key23": "2p1L2Vstapon2EpH19VA8rCqZfxgh9vimqD9gq8zpjYSVQSjta4DVmjmq1BFff16UNyKVoUMoVukRG2TRTHw1Ha3",
  "key24": "4EmFZyrk9UzMMse8FbbzNVMgyQvmCfsLsGjwzXNb5h8wWq9BXi11NViGvwkYXMBkf93fovQtQZzbzzdPHNn2KPLc",
  "key25": "4oL8p69n19yvvGDqJMqs519NAkhF3EiZGqhD2SUKUwEitiYGZvKmXPbVicNJQosEGavP7ZKcBdEQq6uGgDDBKS7t",
  "key26": "2g8eJkKqomkvGgamUn9Z1opQP1H2CoC6ZuXHdzXyMivBbJdx4hmtx7VGPCkKwNJjyTiwrkEEyLHDQY2UZMgSqXC3",
  "key27": "6qwAPWbzLJ1nUrpVTUM7HzthaP21Dc6dgvEY4kmkPexcki2t118gLWpsmJgmGVvNthAsg9U4Voc5XShwAeTBU3Y",
  "key28": "3DBazCwBtpscp8hcn1qeCLspTvNixRsHvk9TatQPTfSo5yAyYJGARdFsAQ5uqztYyoynMaV4WCawxFgJgh9gYTUN",
  "key29": "5wFogjkUAWodyp2a4Pz9didQLTVfU4aipftwKWUQW5roxyTvg1CEeRvz6TKHdMWVXytAJFH88LqB4SGy7Xsah4so"
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
