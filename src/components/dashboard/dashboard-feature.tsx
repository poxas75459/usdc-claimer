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
    "2QPahBJJNEmZhXBymP9vnrjxNUiYVLGkT6ZsSzXdW3tPy7Fsc85HuJ5RiaDTxHq1f1yxbFpgQ2dgiUMPNai2w81q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27bAPugVRMi783s8SYZiAhmWrPwLEgiszf6irsgRTFo72c3JnzLAUPqCTXi8cTqXhH8KsqCTPr9hdhPuJaesxm9h",
  "key1": "4A8Moz9FHx4pGoVWbnDJiBwdyDwCcRJe4kTNwZv4Rn6a41DLYKRQm8mcQnhazQpfrpKVaEp6nGCDBAnSNLPdFQDY",
  "key2": "3wTZd3RcwxzMU3HgEtjrWWmkTUtXecTUeEkeq4hTVyQVE8pqraaGatHMgGHZ88NQSUr3sZ7bdvM1wywEh88LBpTn",
  "key3": "4xuFYQAMzuo8V4PWuukSvBC7MjQaLgAu1NdpNbD6tCTk7LGMj1XStoR8AB2xMWpf7vhPxSqRZQ1maZzic6HMRTiV",
  "key4": "5zDan6CB9ADch9pwgsgrikPMznM5tMBrcESVZtodQy1Ezm4Eah3XVqtLXih88XTce5x2KB6RLE4Qh6AxW7dNFakZ",
  "key5": "Ek4sMWGWL3sEQoCh34jTukG5u1UP7MVmdj9jU9Jef8BVoYGbdhEyw97QPhP5DXvUrFMVzMNoVXg5mu3ipdqW6Sp",
  "key6": "4Q5s35Ppb7QSiUfkBGk4XJREwPBdifyJWtKdNFW5rCPhts35PEQrGHwPjR14pFc6MzXvwtHx3kZqHvEWLCi6L1rW",
  "key7": "5vzezkLvC61rin3Wgjwwd4oAwhvJ2QSY6LSx2hTfgpXmJHvnuNG7HkeRAhbsVHpAVKJ2Uykvt9Z5zqBghWDT4yQG",
  "key8": "4nAMi1zyb9EKnCzWWf9BUhaTZVzv2f7Kukn6PGTzi2JiD2dZjV5UefMRZhkkNbHeCsExyXvjGL5isUezHvZJzV7s",
  "key9": "3KqC3gd2YPdB2m9kj7RGuvAMHepjf5jtcwT4YwfPt1R6dcen1UZWFw5td8YmEQmrfa2jfetezJFkvM4VmqebDJgc",
  "key10": "3L4Xef1SvaEwcbVevkVVu9TDT7KSrwf41LioWj1ohDstNb9rxZFvM39bwJmPuv18ymbqihDgdAUBM4Fc6ne63o1o",
  "key11": "9U7AHyDxxZ2XqXve8JNF8e4VbPg5xuLKPFCDbWhZquEcvTM4jC6SsnLRpMQP89AePKpnvb7Td5d4wb7gsGtHHq5",
  "key12": "e84M8L4aeNnkY8tA7Cy6SWmrmrS31avWjtgpHYEd4uS1s68WvQaQ1WPtVXmxyBwFLHRTr9V9w9AxsNoJRKpAJZX",
  "key13": "35LSrLmcyxk8MEc8Z1xtuoxpxzGDRdYdcMGfSi1FjCaxKEhPJjGzherdXmHViymgWWGXC7DFV3Uqj5JaeVLUJwK9",
  "key14": "5B6ehCGXuMLVfLSe5fhE138bWEXuTjCcJ1hQXns7U3RT1RFLyggWNyYG6cXpWptGLNkzWzA8f7bFVoE4YYMyJFzm",
  "key15": "2NBUqqDMwWowXYCjmAt69KYPhoyQhguv8RPXT59rv27gC8WkEVMbiodMCakJEJvDGZenT6fo8gpmZoeGssBaY67u",
  "key16": "2uo77JvX79FJdq986ZTu8K2kJFFsEBTBumf64mZuYzXLgkwCCrSg5VeeWdRZATd59oeJStVpaga6e82fyXWJWh68",
  "key17": "3FNiAhoj3cjWdytysDkutFYxAnHafBje3QRWp799bwVqHeCuVGAJVrRNcaKuYRJcHrwnkZvgKmDWMPzcxhqWDnNt",
  "key18": "2MWBxTUjFmz45TGDpNqvbLMJ8enFgzCnNfRTpJ1A5SqdzGqb27ccVtSaRp6ZGsZUfqrBDPHAhwsnJNkPTzc6QPVL",
  "key19": "4WL8mju8eqxGbMYMUqGFKD7qfnLGgsWZygTLUx2huCqB1v1DoRsvzf4vJwN8ZxEh9siSrwXtBhMi18jnyDDfvGbR",
  "key20": "2FmDfZxzJo9RKRGNSx3AxXJPz8GbNifzFeqwD1zMsnJ2dZDeLsXBA53tWZbVqAM3fVCsuJkfDjgdvhcFbEoHmZQY",
  "key21": "2AYJKUGyiX8zWWmpwcKwy8FYEhJy555tYiEkENsADufoHMKUYQCHezgLPRtgueKMuATTjBm7uKceMzU3XEiSDFud",
  "key22": "2omDDny8WWeKdwjAMQAUaLQQJa1GLsTyvKrjxTjYb1GZHfEerLxaDArSEmXAZnH6wVE6PwEVQNWiFoVpQW3putT1",
  "key23": "2LJeaWWZboAwoV6LGo3ntYwB7CEpAbreAS2ktSjTmjH8y3yTM3HNyAbK2Rjtr7e8RYZpWVdRoN1f3xqgg14ra7C9",
  "key24": "5HCSbkirvDNHgRfdiisaTDG8NHbKEFtWKiMfkftnYnfsmCaYX8XTWcKDHE48HE86rehTaHzkveygrW9HuHtvbjjy",
  "key25": "65NfRbQXvUWiXrJVQoNaAh5Dq8ijWz58QY4BroDRBYF8KsUuThn53QG4dkoyhHqMJN6RU93jDLn6vPxNqnUFMF59",
  "key26": "36FknwwnzLw4JkhwHETHzeBeF8wNsm5Wiv6cBr6gGUrghdQGg4WiiwTzyU2UK2rr1tfc4LsM3bZCkWSGcS9GkBBr",
  "key27": "H1BJajdvmhdAUMWs7HpWyqPNWdbYQysCfuuwHuhKmc8ynqiyyyP9Nq3c5RJxh8dKU7sJAsazJecX9byrZ4t7z7v",
  "key28": "YXPbxKb2dDpVahMgpJJoBmN8AiEYiXTFwkcbj14pYnDHBVCiyCiFPkVCYLTxpwCTYDoe1BwF28tS7sPZ9yP3Nof",
  "key29": "3h1vvy1X5ZTAwttCgej3oueSe6dLfmo89JnjAPWieeyuaBwsBwtXJsWgJqvG3segbHQutMG7pDZbekJABSRqW4VS",
  "key30": "7cBpbYC2cp6gT8nr2SSdpDPDvZvEuiSkkg3hsVkN5wnki1Uwafouoaxc6N4pJYgBU5bKCKyRApfnGaQ9qJ7MXvy",
  "key31": "49saj7qK37374bwg61rmiZoyCh6U4Dr4jkAMTSqSXkwQugFCGaznDcYVAjL5BzPZ1buhxmabuzY6Eujjcwx8upnb",
  "key32": "2nV45U66ZcPxmQmphPQCqA724w8wzWpBq15tXwCpkenzNLkyDDY9GeeFJ5NQJq2wMijipiSzbFNBRe6mg5VPhEVX",
  "key33": "5soGhwobekQ2iQdr5yXfiZJC15Y54TY4NKZ1oMxTuzm4zCCWmKVs2x98eJSettYTxzZsiKQdukvzdjJnfFyNLqJe",
  "key34": "52sLrXuCZPj4N9dB2gJjmprV8LeEoWkeAXb4feabSFjxj67pNLMULZMyJwvbN1D5MYPWNRBoFzHtQWZeSk2LmKjN",
  "key35": "48ZSoqvLWxovSB2deAEu8cDbdf45iVmt7ar6mwcbhEzU8x8gPVNyYHYS9C8U26ahsh5WQSa2LkZbwd9B7BdXskxY",
  "key36": "Yp3PbpJEdwiwi5dxgQN3syHDjxDFmUfBVxdWfPQXays4GHYtQeiHXD5fhRYw4kaYW9GRwkXp3PTbbKpogCkiD5Z",
  "key37": "39tqe6wtg2BstiePXZc2qW42ETaHCZe6z48qyXPHa2n9hQQGC1D2DfT174EG6tVHh7Vk7ekh8u8tX2k8XTc9JZMN",
  "key38": "MJAoATrcfgb8tzEiTb85K9jLnDBmp4exf6kpUSHZQsayiGxQ2qgtfiUCugVXjKpR7heoNBwvn5ZrPVPRWobQc9h",
  "key39": "5rNRy4zxvrCNMir7Mo9AduuWQyQh9PJ1uVbWdD4kSHdoh7JaKotfNtVwR7hKP18zfjrXeRhH4d9XYinTATENATzt",
  "key40": "3bZ41ZZFz75E93H7wtDCrwj3UyRpHmyDkWr6HA3L3KgbFqshs7XWTPKDjJDeWJMX9EPA65Et5JRigko7fatPSD38",
  "key41": "5g5dH6ytGDQCAd3gJrm7GGbgrtzpPymZ3S1YudRekhYgyH9Hmw9vsAqg3kFv8E9fgxbVBXvVADsoj4y9iLstdsb",
  "key42": "TUHTtkSK77fv2c7mB3y2Dk2uT7Qz1XZApWGXa2coSWhW8E8JSQ7qaAmE6TwkKevwEQnVGbHhpBC5e9PfGNSD7Va"
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
