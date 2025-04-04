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
    "4bbY6eiiZWt6JGS7KWUQwD17zSMHz9gC2C2pGiYDPBYsEjpGUfRLppCbEsvci4Gq6u1NaygMW1GevqcNZQLTVFFW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BsaCmsaY7YDDAMqr9ACuZAsF1dKH3UEfJ95iBVM1dgV61a3WofhdU1ZA5gvxxcDF5b6d9Mpe4psPiRs8o5KAHsP",
  "key1": "cbG9misrEFrjTdUgUKzzJ6vffB87nUaFjH8jDkx7PTzBVPkCjSSDoj9pNTBqgBEDQB4mrGAztfiGQhoYgMPJAKY",
  "key2": "5au3jd2gvDqX8zJVVQ35soks9rsmMSj9YMFng4a8hNzG9wn7JFjb7h99stNbTngXw3HE2riRciFadZY3BfcCABht",
  "key3": "u7whdjYzAMTsZNPfKsPvB5uhEgKbfP2iWqfCrLoQHA9BFR24xP2S9LUaXGcEwUTF5WqNGSoNaKFckzSnbNVqHk7",
  "key4": "3CaFD5zLsk5apGja83oZoUYhmYNX6nqNPc9nojTmBFRybZciE4abPqaWXX19kK5E9e33hRq26FF8RcXk8jKXsiyR",
  "key5": "BNEY8fryhEMt9vVvR3uqwuVaLUxHLyMy88J3sAFid3kj8Lkc1UUPgJMKRGFw7ihC9SxP5tUfyXLKdmHqofNe2Ds",
  "key6": "3Ht9H3Sd6RE8LDKyv25g5bSCozbCWMdBNamUvXrM9Xq9LpJDVoCTVfzQ71Kq2sDKGLBguysE4uK153u7x7QnLk3F",
  "key7": "3GmgK9WhqWJ47zvjdsq2PrfTFdeAwsGwrqQBw6x1bLUK6fGsJU2qwi9ACAMQBCwBQb5qkcCYENumWvqFUcTtraTN",
  "key8": "5WSugnGN8r5JHREZPiPXYGbQs7Brt4DSfh8yMNxMFk6vR4L4wyFBQXwuDXBtsjH5xYnsm84oLUNqF4sTB8gqpH4T",
  "key9": "JaiyerHvqfc2gJkAymH3J5GQpm7YNZpWEYzytTCse46AxrisbqbBJfpu69HzDeFKbTvQ1cWwiTgbnSBm8K1LcnS",
  "key10": "56vLs55CnmG4GqDt2F5L2tcuiaNpNGcQeLtkbi87Gqx2TrZQAFhmzX5tKxi3T3iFYPkxwfzritSjsPbNLzC7pnXF",
  "key11": "31AhfokAdE16FD7J5bkgFYURTQSNhYjKP7HUzuxStaBHNzRbQh47pE6vv4msA7nmtCmhfbjmAUHCfUhmB1A6BGz6",
  "key12": "5RmNyyNXMTpvtVzicDnxBcnWhxRe6WmUacvdTP248HWHgqLRiyT4Ei6EAmW3GcjsCudo2TEfLS4K1A468CV5j5en",
  "key13": "PJaUy6uNu6PAzzEfDr7yEzi9CEhknXsq3DoWK4hd9jBU5AGomUSud8NTvJLeHpW5gNw1BAm29sticugbhRsByi1",
  "key14": "4sjRn2tf6vSkJrVhtirE9WsEpfr4htAAzikJLWj5jDaSVvDZqhXk3Bdqm7R16zaangu2XPgtz1gD8CQLWrdPX3C4",
  "key15": "4aUvrPHYGdx4tvb5J7NbcfpEpoAxXgzkoRZbyLxzArm7fhE9owBwdt4mDxJtLq3psYhhWJxGNcWJyznuPE5yzbvq",
  "key16": "3Re247mC9W8wcehdU9CLL94E1irSRYscpHapUgqrjAXMgksbgGnDNPmmVdAiKRe5cevb6z8N4yxoLLYZtL7CRzS1",
  "key17": "CP2J6RQpSk9NsAiXK6pvXNzXfrgpng3osDMRuK8FfGv6f9B4PCR2KnVCQbnYQ6mUqjzBPW2rtCtN6aEtycfnuBk",
  "key18": "5VDTmiuhEj9CATJHvDLDqH27xCTEDE9sQPeSQCYxLDVybunzk5HWqdF8ECmmeJ9ZbW4iWnaufjNG8xrwTTuwarpg",
  "key19": "34v8oJK6cJjrAE2KaPAvvVzstxNR46F27iexPeGx876DHvq9u5g1FJiimeuZr8SzSYsJvmY5XBFbqstNQNmpvU4S",
  "key20": "2C6DPSQKYdjYbfT7imVmXp8PM5D4V5XBdgjmmmnypyX6WpgCcVGbTgvURoJgqKQPP9ru1m55NV5Ci9TvyevL2UZS",
  "key21": "2cE4X7nX9c5hK2XK8d3UG3RsT295L3aJZGP59mb2N2a52PWhsBp9kjenGWjsauSaQWvdCqNxU5yZgqGJ3J2GS6Es",
  "key22": "3PpTeE86k7ZH2JCZGVzshdak1moguZMSe3uFctX82Tyf6AdP6kr7vJXiKh7g1ZYukByz9TxeScmxkzAS3FzdD6WR",
  "key23": "564QFEiucx11V4Xu8WGnHKbsYtnR9f5BNs2hbp1THBYF4TH7dsV3XTPdMMoYaJnuQGRGhNLpbGvCXBkX4oUSkpti",
  "key24": "3AxxBs7tsmF7D6JgqYQu7DY4dfRfXv7KNLg8yFia8jzNzYSAgb3F1UnKWgFP4pu97oUuYU7sfA2LjsaqUViwsrV4",
  "key25": "4fgd9FbhR5a9vkQ2SU5kDA8XC6ggPPq91Pk1wR6kQAmNRJXKnkp23sxVYDdfvQmYYcoNimw9RQJnX6X2YdCELY2G",
  "key26": "SLgFC89NQoP6JXN7BbkZDK7KcPW2EVTxETbcx5zJcMUBUqZCzACr45bzc7iDm435CYRAVzDGZBJZJCkN6P4vbia",
  "key27": "56fQArey2DAMqx1TL7eDNyZWqR9aG16DCRYqggy31vw8SUDNctTAaQhnqGi8sGvkH8Hk2LK3KwWGCQP5fzRjP47B",
  "key28": "28JRrJ3i4N8eP3XpBd1PVjiw3JFVY22nBdzD5vQqatDPpqSc6d8HGZxtwEvNpoGnCLbvXQbDFefXbG8Uxt4M8xXn",
  "key29": "3ZvpetgqSSmPhcbc7YxsTQyE5s1iXqtR7zHXm47atRWEGPJoQZirg9XjMfmoUnJNNNCp7L6qa8WQq31baYviVCQ4",
  "key30": "3m36ru1Zv2tdAUodViWgEgVBZumyDeTQ7UayfPQr8bY556MEHofTfzw4xoj5sFq6QFDeuLzzApHBP7Twn8Bewibm",
  "key31": "3GnS5T7o319tvDwT56X77vADSsw6Vrx14FEyrfKjPviGRTCVoRYZSBVFSgjYp4E8WZ6Qm4ajhpmpjQWsNoSkYBE5",
  "key32": "2EYCkvpyumKghMdFUmanLCWAUwExVz2JADMVKvVXTFKzRPWebD7qsAiAfcQwoqL41pd6p5AbfWMXizF2Wn4ZRy3y",
  "key33": "2R2etoqxp3kJ7sPHZfquE9nfWFePRqDBkAZPB2SprwZbj1bhmL1k7CrBgaTLRWvf7oNP11mdma8L1npqk4LSXB2Y",
  "key34": "gjup7AiQvtmCMJ78ik3GoD5jcH2uo1gG8rfVKStrEq6gUY4WuscU5xzkSSx33fTJGx5K5Y4BHZXxNs6jqJFV1uq",
  "key35": "4tCHQ8Bv21oHV4ersr7NMGdJ5w1LUPwS5uHP3ctLxo81Fgv44JbqbvJivKnvMHKWfMb5wcJA3sW8fuXesQKMJGmf",
  "key36": "4Tpzup24sL8B7BQ32MF4TnpELtMcCC3AFiQstJBjjHmoZ13xmuKoZwuTJv86FmUM9E5aDg3N3WtayQ4nxQxtJ5oo"
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
