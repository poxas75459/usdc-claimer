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
    "2JYBCZDQQ7JrifCifSXV8oCqVw3edeYM4sNCPb6UkfaTS7fVK22CuFWEX1qMBrvXhdXVdSCFyuTHtuL6xN9XA3Bb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ctkd8rShsE2SgjY9wGUopofqbeLHR8pwQdS3CWZ2Vxr1pzCNdzCR7rcfR7zhFp1EW7aR8ugZSwgfibdxCiELpM",
  "key1": "37SVeLHR7R4NNutFcJQefZ1Y5ZardSc6qrgWPm7NmKBQUW6yJ29PQWMHDBkwzg3WnGwFwVb2RXx2tE5Jz2YJTxQ5",
  "key2": "5tNnbopCGgSXcWfjqHUsoKBtT1pqySni48kNHsws4CyDtCNBRqLVrGgdm5p3JB4tTG9KyBa8wFW937Vzynzu3Z52",
  "key3": "4cGTCGTi2vmDUdv9KxtBiUPuJ6tzMpmk2C8XAtQcTJkQTKQVH83HJNKZu1w8FLed1G6za4aN1Bey5rwYtewpV3c3",
  "key4": "5wGRSerSzn9hK29kTuCudfWWrXfugXNLQwTrqq2D8Mm5NTkqUGddAwDfdzxgfGY9jorxeCqGc1uh1LLoXo5ZhhR6",
  "key5": "5xBEH6AJx3qExqEXWptNxG6xCneHS9UANBiUyqQ1kuevuesbQocRxYZiRa9qt5CsAqUtkKppVff9jG7U3EamKF6h",
  "key6": "3bxqLpzDZFUxuw1NmbU77vVFNZuQ6aWCt54aMrRuCggxsVpCSb2Zf8w6jToAEduudSnrR3zRtmKZtCb3Qke4BgUW",
  "key7": "47pKEL6h3gHE2qb2P9pHn2A6fLH3rLNrAqemG9EKfGyiaKQ1owywip554HbwJQGZM5YR2K4cM6sNRBaHCfxXpszc",
  "key8": "8K5f2p7zk2kyCxP4qXA5vawus8NZb729zpd6d5GXP76U9REFsNb3qEnB32DkHHn28mE1X1qJRDVUvTZjLdFQbt3",
  "key9": "4uzADJoyFJgbsEpNqRCe3etnHUByG2UjDgyCUaqs2BWoo2cz7h8kmhPD2gjxxydtu7MLzm5HJ9KF7icRjsi5AAdc",
  "key10": "SqShmANdBkLbBLXLfVVUwj4X9eeqnYdefagFCsNN94Rzzb3LvfZhyRLErY1yXXgiYDHXkPBtceTu7XwvtzDPzxV",
  "key11": "2UBdcrSpgMEnmnzsk4MTidwdBdrJmt2eJMdHsBXJ7coMJYoCq3FAZQMPQorvpUgK5y2mNxnZCCU37JytJkza7kfQ",
  "key12": "31VtaY8jhaXe1MXiaC6Lu3jTUNsQor5gYbTR1bg58tswgWuVmUpKz434qibJDmg5kahVMEMtHLdQpE5vG9mqoHvj",
  "key13": "2Y3MgMEFNLuotaJAbYB1oPi59ZUhFcFxwBYL9yi9EVZ3rpfUts676nuCfAGMQAnZo4eJkrg8JzLMWSBhiAUjczG7",
  "key14": "2ksDSprMPVCLtJ59u4dwQFR8kWyLcCbo4uUaiY6THVc2252Mjr6r3nZmQCWb1wG4hGb8njF6ydU8eZY59BYW8Ao4",
  "key15": "urN7WKBMS8azdy2tZBXuL7UPtJCpXZjjrVcQfQAu8AwW6acdDhYgLdhkMHt4zjBYCdDaQfHdz8vdf8xrrbehdtu",
  "key16": "2QpF9GqhCGdNeusk7SXbRFJVUkhC3rp3DLw2ZoCXrVXt62UfVM5RTHkzxxLubNyTZbPdpkMeMWWQzxMDwExKAWhF",
  "key17": "2yGt9VWRy7yqFThUskNazvUQTP1vmxua31Mv6njbaRBhw4FjZB1xq4qDdx1d7Rahs5yDvHCiAV4cF1nMnq763m2n",
  "key18": "3FjzjR6qQzSDRTCaRMNMUn3w1VSoWw7wyvK8HJaJCiH1hT8ez1NsQrgjiSs4xy9mddJDLURun1MsJktvMnnMCQPH",
  "key19": "48GwFYVnvFscUoLoJdjrymokNNqxJQDE5n2JUyw16kciJVhVcdWWxnxoKHH2p5ioBsTGRVnjFADtGeejS2fiLiFu",
  "key20": "34cJF1UxN6gUWzxJb29ALCmunE3nHqu9oNqYcjiKjXGnEf3WFiDsyLeBo1ZSeJ6SdB9WKF7ibCeahnXGkSjdvti9",
  "key21": "4tLwYKRCxAv24UKRkuMZ4jkvDR6GU5aamEifPD5iMesHM1pi9aCfamkU5pnPdMyCTP2YZrrFQQmSftamcHjp1wL1",
  "key22": "2EB1BdHsBizMCG6pu4YcZr83VYqnrUAfzCW9f4aGzYCjwFDLWgZpSLpDPJZZmjuNCmAkLYxh918zDk4UJJNyyqdn",
  "key23": "5D8oa8z7HmcHiGUBTcQUpHjNcchoPfA1yTLKMAoesKoxvq9eGRSN7z79gxdjaS5CbXA6J3MQpWH4Tqc6LgEKPVPB",
  "key24": "3ZvE6vLHsBzT9mhwXQZo9P5YHNFdp9TaHXveK9ARBvZmpQQgRJAMQ37QTChqZGT7seL6NcSaGfqTkEZ7EAtgLQen",
  "key25": "5Ladf6VjM92tnDkjbSwrbZMY7Va4Yg7pDMeePzrtHQvdeDwbDZjrkH27oxqKtPzeCvXyMpxkvqhnSaVyDeDsJefX",
  "key26": "4nBCXLLPqoffcuzQkFSdQ3QvvYWumL6W9XNfMCS1buvnejWuFKEmeD94Mj4CAZZRvfr8BBM6THdCjPKa9vepiB6G"
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
