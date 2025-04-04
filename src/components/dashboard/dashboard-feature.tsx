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
    "vDhPf62oUZ2HjsUos2KBj3q36crabsNgFHvHiRp93jVCEJrHhURJ1CTmv6qRv32GGyoLUVPzWnthUrS81vuVbER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S9BBqssZdct4G1GN1XyKhhxznBzPCnR8qjnyD9BaosCU3XHavoMUTxRcJMXPXJWJUZgR7JWNvc1zVcWZUBV2hF4",
  "key1": "5o2GaMSqndKEe5pH5FRXEpNNTfNMBuwwChyxRh8sXkqJZabqEQhf5iAawMtdL8peETuX9kerKcR249STLsqPyqn7",
  "key2": "3orJynvQxzM2UrHHbmrdj5Ac5YQrUYA1vsJFV3r8UziLFnPheoT7PDNjD36jzi2ZfBhd2jY46ga5zQQ8m5w5KjF3",
  "key3": "4va7eEaKi7BzJxGySSNKeG22WpF4kWzGaNjVBNdWDnFEZBnQD9LuXrXcYVbiYanWi3sQFL3PkGUYRFMy2KeDf9zs",
  "key4": "3D2mJc5jWvoRVb1KaJxQxu15jAYuy3muhy7j3Ld5uEsDh6wCmrwcuMJJUwWQCWHTyXRCqk9ie1cXvDLHhmn81V62",
  "key5": "5tb3yzBLmwU2aVsHEB97GkTSkh153JetSkmXp8u2Nch2418WrQsRfzt9goJP11V43CPFm5eqWaJ1ZLFobFgchwT1",
  "key6": "59kf9sbVzhXMuupbqwmpMGgE9hSq7jNUos6a9iHN3ZMHQFDMg9Hg2WVbgs6AeLLjfhDF5boaaK2A9h2EiUKjaFEB",
  "key7": "2XuqkSQvX7M4j8r9ASQ9f1CMxs29eRqyFdvrSyRmhpdNWxWdv1TRVWTCKckZwD7mS2YhBiA54SLkBswu6RGmmwyg",
  "key8": "3Mhud8YEedtPFsXnr8Mw1JyS1k7SYrFsqGjA7Kp3GCUn8W3bPXzfgQA9WyZEQpJrddoLzvGLmTnteMKHt7p17J94",
  "key9": "5RY4jZKjBMJQmncpj7FsKkcoBQdBbbzwntk2YYwAP5kwig7o6tJaT8DE81mSh6nWufYVD1dGTEWnm9ZR6VG1ZZ49",
  "key10": "45eKA2nzpRT44Vm8kdxYZHiThtLT1MdpxZ4Dk4vRBFZyuycBMhtmifvdndJHYNtWJ9J3eRnY9FNx2fKsAdrsZ8ME",
  "key11": "66EkB2KEsJa43gYrcWEBTjpzpfMBAksdyUM1DFyvSt48MdA7goq31bBLQiYNt5LvZWAmT9Y8nSEA668hGdXnncJT",
  "key12": "2QsMibhf89MCAWGFCyHLYPuziQ9KbEqigNd2NcEcRgAxT671cnnP9awJ4RwCknZWXj2U3EcCWzd4hNBxNgLEqpB",
  "key13": "3UtmakbhefxKcAMFxAfL3vYtrqBYdYC41h8tPVmUu3d5aMtzKBJ93ZekZJqrNvtmbTDZ5LKbVX15zxnxd8LyP3u",
  "key14": "63FvqFajWTZvGfKQTDn4yRcCGoc1k8Kx5bhSSAPR63ZGBxtQBe84P17jMKLpvAPmKriSd3bWuBMggnpE5JN9qdQB",
  "key15": "4onpPZbWEN7oBKYapn3e6tKGnUjaseiMq2YRA3BCZmrHJ8SVV9eEZCqEHz44LjUft1tKSsEVFx8ygyqaWVLDKKz3",
  "key16": "4ChAExNt7nCaUGijJpwAubihvqXnPAcgW5itSZg9i8qNBmmv7yA2snDRrjX4weQh7xjohQuas4bq3FfjR3daqSBQ",
  "key17": "35eU3Z3NDiaTMu8kYH87pC2MSrtXQtBSXCtwXwu8jzeKZ5SoDF63T61uTbzXE8q1X2Cb1n8r2nVJjjundnMwm3QM",
  "key18": "2x3XuKB4LZN1yEsM7DxNnhm7eW9zBWtjD8G9y4xZkpUFdmxomvzvWzSFtSN2pCYLTukHQYRLo4Uk73xMJCtSXLPY",
  "key19": "3EhKjuRUsEKLH4Fi9HJPNJ6zziY2m9Vrb3e6NS4Ef91cpCeGnNE4bFgNc9JPPUVtjC58k4u3Ze25KNNQrDyMVk8P",
  "key20": "67QMRjybtU5zr9PfsV8BK72oxyJrYhTPCcuwqN1iE2xm4RsMhZF8RKmrmyiVNTHnztsBP6uZqxkMbxzHxaEwzGn7",
  "key21": "2MRphESNybQYa1uCapM6J6v3VrAyE81X2kreLzb1Ydb6Hmo1m3nAKri3ncU2u7SZXRPRLRLPdKJuK2C3LEqiE9LQ",
  "key22": "4BbWc6KaHM6f6VtVYLF24trVvpNZMCPRVQFRXbrqUWESS3uBSF4K68zRPsbWz5DTNUxLDW2CtwkxzBVGEZzPSSY5",
  "key23": "5jgdPPJpiCocswrGrCswSC2DzsZh45pk54X793Yif6aYkY23yoiUrCA972JfBDQwt3B9cTH4AomX1Tac6mhACdwH",
  "key24": "tQgch6jP7eGHvNEbF2cLMkBBjRh6kx9y6UpnTJ9C5kU4uLGx3uCcLTWxnJ2ZS7S2WyqVGaVZNp3tURx2MMqP3B2",
  "key25": "4csiY8kdjiFKtiTzM4mvUVMgYTLdCFJwSZY7tmpx5QYxhifhsttbaaqEtvMBtcZ6C7YGYnBqfFwFKTYVQnU5PaUT",
  "key26": "4K7phXC3JuKFcCjprYMo5TtkFV9ajbegYZbSCPA5S3kTwAaMod9Vgu4vuWSuYBC78bJbSuA48ism3H2SD7fTCYRD",
  "key27": "5SYYaqo2QgJNKnjNVD7iyqgjXNB19f9SKpFvpGVbUAAdvGhewKaiUHq3R2ZzMR3Q7XLNXTPDTjrEDt6D1dHPaxXe",
  "key28": "27U6fTsQv46kqRE5eMWhwwgu8VuNKBnbhHMApBsH1cZz5ohajjcbFhYeR8Nkp3QZxzibTMvpSZWj52uVe4dPwvd8"
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
