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
    "2r6psWH4cErvBrPJeuuk5XJE4yuwBgZHPTJc5TaUeTG7UZfPekPJWjSYW6jQUpgpUEhCJ8U5PxXNwn9L1apQWEth"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6DFhk7G4rrmwaKTux8228FYovRTFbzybTwVW2uf5sTQuGfVjkiq3gJy84fAcyDYkFzD5d29VZLTHNz8KwHzMU5X",
  "key1": "3EhVRfaQWYh2Evtcw1JMr2GvmfyYMWGW61bSv3WYkBPwytaBvSAgsynJDTddJ1FCVhmiUUUEBaatbn77JKP4p8J9",
  "key2": "5FJHfbfjAtzZi1Z15MPseaaPGZrrehQ7zECoCmYRQ23e5ZyAH9aENcGvNi96YiHvqjcbNYQjrHcmJaZ5t7GVyAV6",
  "key3": "AR7sWALwgrKbUnNtBDWJV9xKrQanNfcyMk6EBgWSWQ44nKcFW8t786KEMLiZPyjPxqyKeyjSJiHPUHcRpeJyLGA",
  "key4": "545696M7urEGw9A6iMUMT9y3P2VpzAvpuxrZhZx1vQfrAFhgPNzEqXKdZLfhtM5nNVMMNNuUCHouSFMT7GKTD7pP",
  "key5": "5ehgdsD3i9QDZhghcCyM2WdFCb6SGsRhoRjAYB83FkqXMzH8vSaH2M4o4nk1NEKUtFCDcwYv3t826Yxj4gg67znd",
  "key6": "2BMi2TStYSmRBo4TPAJV2r18oL9NZKWcpnLxPANWLhzirmJqL5tnE8vGx77QaxpmEFuBNCfUDgdPLRGAKWRcYAcN",
  "key7": "5eLHNN8LVfKcQWj5NBivV3ArrwhZFNEbC7tYfE38uhXTDQ3NtiwhGfmB1v1prLNy6eBEPLva5gDAAFgj1iNqG62S",
  "key8": "3E7qjRDyuJJ5XwQ6jkohi9Rg5iJ97tMnPRR1DHKkhZq79tUkGuHdVAYuBe8iK7HFjd5LgGsqMRHdbAJuw8qtVfT4",
  "key9": "3g6QzVAbXjkBggcz5oA1dgobxYN8jnZy4b5E6Nb6G3ytbHyWf1Xuq6bWSyJYkEpX6PZMwCWQuLcFPxyQLxMRk2Eh",
  "key10": "2jZaMdDRQS8idivRETYvJWRHoicwE5vR3VqQCrmXWGJuQzmq3mZqNXgDuhZG4WeUrU6ch3sagXZUVALggKaSBuJV",
  "key11": "2AkfNLDnYmFuK7AB2cYL77ABpsfRuHPptoGordwGZ7zWCqwffJLGBpoPXn5me8HbvM9DAtdaW3Gyso6X5PFnLYJQ",
  "key12": "413WBfxtHTAr1deDGyTNFSo6F28Whe24fKAMbMQGGSdfUavXXLy3grWRES94JhT2sNckuKNSAjWPzqWQfust98nV",
  "key13": "LLKRLWaFFctWRVN8j7c6gCZEwnCsoHoW3zha2Z95WUYizRqZ1hjSapCLfxZiZvSPm2eMtUcvDksDdTipQEtQero",
  "key14": "2uRxEKLbT8obXjwsv77SG98fXA18TnR2Ko8jxRQuHqpnVqd2fhni4Vhi63GABxCaAfaGFDjGxiTLGmMpRLvA4u9Q",
  "key15": "29kYJfN3uFCtpDDWYK9RhMDnSPPhkKV9mD7p37b6rzGPWwYvacNz2P1aeLqYWcsgkcyDtGkEnSesSvaQFswezWqV",
  "key16": "34DvTacZkxQGJrzDxTD5YNDiNsrkwPEAE94hpABDQSPwebzicxpQWbSdM6HNczdoskiyWSDwwGJ8ZTu7jDBy8u5X",
  "key17": "2h6XEBwpSkwEVH7fAiVC2B8Ki3D7Kf8cVJuZW4e49Ham2tyk78PmWcPgcqv4L3XSH2bSiPFaYPcnyTZfPM7zhx21",
  "key18": "44T6ANmeY4EFrJKncQvEpPyts6wEyH936bWFNMDY3KTM86qTxoxZq8aQtDDskAZWw7u15uuxjLBcVgvn8JN3cNg6",
  "key19": "4cXLnGnsgkvBwyYf2iP2FyT4i1XWTfeN18svU1Fzovsbvu8ptXpBSaMWqCaxSNnUVkgGq6qhVTgWz8Tma67oyFDy",
  "key20": "5Jow8c3uvYxLUJuELzYVPeH4zBrGnXdK3Z5o3zB1yXcDPZWRMQDkt6SmxSzAAuidBz2pAVSjyymRtqbNj6b8wDVe",
  "key21": "58LRqP8Jr75amjTdaE2ccs9p8S52sEebKtrxfiqoKstQypC3f5pQ1zgN6K1XGFheN7ctgnqQYUemoRkYwwFCcEGx",
  "key22": "3fAhn2M9n36N9XwgLKuDM5ZDhDUCYbQXrxidT88FthZ1ww3LB7Ueu7AK27agZBiSR9EhdFJR7oyNhxtsy8qfNzrd",
  "key23": "5SgBn2fwzL1abywefBgnzjim3sTTsf9qxDzu6Q9wmWBzw1fhBLDHLi7HWWxScyguCqaX2nKpFVUvwUKR3HEh5FLJ",
  "key24": "46VRPUrmg9BgGoJQWFVKW8vZpyV951zjUvi1gWhGeU9g3846xh82xpp2LEFTVfJqhTDLWjJ6QDQq8sF228mczuJM"
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
