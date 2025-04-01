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
    "51wuHDyok6T14wUsvy2dhy1p8MUC56CeCjKijxpd6WLjhXnPx4dWwAksAcnbiGbsAD8uMbEvUdKbMdJuNTZCZAvz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "835AUuakpk4ocqNtj79bEj8ygz68rCeZ297MFkMRtkLq5ty8TdPYsCn8YJFcHLhJMXotHpunYBiYyM7m3rVT5yN",
  "key1": "L2nXbboCyvsvQhxYR9RELxm3Fymh4dsaisdoBwxdiHeW3iYUoBrCVd44tjvMsrsCcNs96mWdbbcG2rvRVuwmG8S",
  "key2": "5Cs5d1qEyfm6rFNqvo4NNMZHNm1VfDTgg6retwUhP1r8dA9ZdK86P93UKn9r7d9nnCpnfrjcw4vCkXxo3A66ygJ3",
  "key3": "3Jkug65r68qEQMCGB7XpQy168UkQqpboQjK4MrydVVMFE1vLskq4VFDHfuAFV8T1ppEQjuuSLycq2WJX7e6yD862",
  "key4": "kSC5qQajrJdckJTVFa9gMC2DxhvbwtikikeV7Z3KZ2VmmWUsXs6s1mo5ArXT8ivW36UpxHLcWLKBv8kqhH61mjk",
  "key5": "2XBdjJvq7csV2t64QQCbhT6MKS6pqpXSnEBPNGneHfPCvXnovNzmffDaA8q9uUGRxPgEPz3MBJSa6zSXsQpJRjQk",
  "key6": "3Dd51rNeYxbhAtbFuCpR4kwweYoDKhs5uzQPvca1fGqUCoMqKBReDgNZ9g9K37uCBpvSgRJjBpru7knyzLR8z9ap",
  "key7": "5tFGCzuPHynkUcK2guYPH9U37udcST8Dm9peYniteqZt2WhLugUztyD2Q3tdup43VAWMMExcfUkz3vWXU1tyhbaV",
  "key8": "4B2ARDFuPgzoWL7aeQ9XQ9XuEevS43YUM1DA15QhxjBesmgKvcWTiM9UAq7K7E6wWwhsYbnS9FudEoKdhKdmiCfC",
  "key9": "z5HgsrwhLJRPJHBjLsnBAC2zB2B7B8kUWg5T7WJWmU1RKUxRyPuLnoJ8uhqK26Wywd2mKrtusDk8teU2qWc9K3j",
  "key10": "2qGoVEEtvA2iWxBcz6aj7NNH2vasJs8SHBCXZStsfXQmCBaY3xVoFRrxmDRmeYsRr1GUEkC2M3fk1caLHMnVeyPP",
  "key11": "By5nrSYThEwfWWKS8u6srk2WnAnpZxG7Xw5eHaV6EncN6rToHns8TTGVhAipn44YqrdR6uJKSRDhRryE7enhpWD",
  "key12": "4UjYUaYv3GaHAiWL5jPKJYX3uEQT3Bdk6GJaYPcXZX175jAWaUpjRG6kFcmH326iXpUXc7uuVusQNGvGGxHd7TMc",
  "key13": "3H9aeE2upZEfeQVTKrHyRs2sR2P1MmSYKkiMQQ9QUTN2RWp6hzNVVub2LEYKNrz7wJMz7kGBDk6AkZDH9XXyN7yR",
  "key14": "4TtdHShSJa1DbxTVZn4yzxF4edGbszzBWwmmRCPJDKsaLW39Pgh8FNoLcTHnbMPXVTC1VGNZE9qKTWcBNCBEj3Xz",
  "key15": "3o1NhPVpUcALfz6RPYHL7WxKFvrxYKU7LPspsZ2dzUNAfUwBXXQZAt3RzyQbyLYLWapEwnecKLZ9ktktRBsEkFQx",
  "key16": "2ZaeqwPBr9fGPX4MZ5n4J7NpUnm7gWWmzTAfEDtmCnXPTvpp3gWmvAj4JAzTYuNR1DTmfYx7QgdRygh5Y3vH5A5z",
  "key17": "5oHKNRBFFtnn4xmRn42xaKu3x8WNgr6FzWi7xgXCCqsYiANkk54G1EUmfxN4oKLUgCh7xEEQ5HT9NcxZMgDv1qtm",
  "key18": "5R1PCjkrpnRL3CaYYAXfKvpjCRGPaGT3y6XhCRR1re3t8sY1FfqSrh4nk2SMoPtNryktCk4gkrdVJwzV3u3rCxdR",
  "key19": "2qY8T3S2Pn9vkkcgBqq1JH8y2T8bVxu8gWj1aJQp9ZcgLocwEkBG9eTTHd2QfhY9TpwfNi5nTYdrjKpuZydmyQBZ",
  "key20": "25QgzWztUYLFL3Xd9tBKsBa8h3TQb1FndHWkdxMo2uuMUDQt8mTnJ5hvfsaoL9dr82TEbxbGv7sWRthdVt2wa5Y2",
  "key21": "3GE5V2eteqmYSt3gPMCfqM3KZPLqZjY75dcqm7RWf6t9N5tMkfL3qYqqPFMfk5qTb2A2Sw1eyvL8bZTfrrQSgFgx",
  "key22": "5hzDwyKM2RQEZpesDWBkQRcLkNHRJuLrNNCidpFRwKjNgfEmKtxGbBP54yzxWdFjjhtqaStbcJFnNatYoh172fPC",
  "key23": "N8LFgLDWi2uX1rmwB1keW9HAkkqugFYx8euSvqp9DoexNhiXRAkojbjYqe3ZjYJC6Zk4v2A75kAm1LBEPdKPXVn",
  "key24": "4qjs6eJ4bvTaDeuRrpduwFau2DVqVRyvC2nsjxP4oyW1qXkcuFTkzoXdmAtXNCADeoEF7hQrowyyMdzHiRqYCdEr",
  "key25": "2HCMgX2HNSzCvY3vJYHKNx2jZs45VQxnHp1guGHUWhFNNuFtmYa5uLDFAYhvQxUM3DgiZiEXohnFLf3CYAouTc55",
  "key26": "Dr6ieSuXtMAkzp3T4ScJfwpj3hBbmVxJBJZL67RRMyd5bfhWPzV6VmLLNC6V8SSpB5Q7pfPGdj3ZBHGginPfivZ",
  "key27": "2DbGBoJZ6iJMvdby86z8pN3asFCeUgfBSb7byVJxvUfDvoZkKheVzSgn6u6X8cTKccH7qbQb9CTG1LZqbD9wpBXy",
  "key28": "4BLU1swK3hg43uguZ5wkYrJDz2umqieK1TBmiMxBZrNhtQznX2NuCa3HTW1Hrt9rkJPddYfg3oyFYsNM1fmTjAVw",
  "key29": "3V4vU74yTBcHH3epQc8svmtRdbUCgQF7xkbx5U3x8mWDH7zL2wmqRKZGsg1PfdgmE3bBZRUk8mer3h9qrv9vEdZ3",
  "key30": "N8f875YneEMxtgjVTPypW9xAiwRB18YTJr9QBS3F9cmTKr1iCtXwh8j3tmMjjbTyYTQ6mUbpVA8bT3mdrEEK2vj",
  "key31": "GBkYVTBB7EZE9GoVKvrUCU99BoFCXKnZahNCiMLT7K4q35SuWBYEVzas2W3piuqSGUmtkHenxPi855xDXHbf3hi",
  "key32": "2smvf44FQ4wQXxNWnwdbYtxpG3nTKRaDQYjzKRz5envkM6nWvnSSyagmnjgmosyJHCGko5VkLzncYh8Jn2ohSqbY",
  "key33": "4Abf6G6UPCkaYURj5BsvYfueSkSErqcsTethKnQrH1Xp15NHWJisP3jKvKQE9rUZrpwqde3SosoCPRVuf5R96SMf",
  "key34": "5uQzzYyRLmppfuRh6TyzM8KKe9A4YQyxvDRVM5KLHfzJ7ETLZiMe9yppWbjorwCWdRdjgAVou3aECJjkGD5PBB6g"
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
