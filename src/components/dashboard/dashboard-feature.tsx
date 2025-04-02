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
    "2W1bUNoQcjpHbsLwX1md5qxz46bezMdQTaWQVyfvLxkiQpvJv9RWYPLLVcgn4XZMu7QyQmgW9ezknLefrZBJa2Xi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JsG93tBeN3o6bRpefLLHpVykoxhbJaRJY3vbno9Sn2TKvndL32Q3jisdfqZPKNNfCU9rVvKUKMh8p5kWUJZRaT3",
  "key1": "3iKXdFioTNNw8o5DQC7VYckk8G18UnU3M684Xe7aKDFpFxvbpuHhcsQEFJnVo61apmiE46C1dDgLvNp9qtxKNsUo",
  "key2": "3tT8tGD69e9v7bvgH2CH3jNkLyhPhrniEnz7U4FFigdttBt1ryTxG7SLqi9yLxqVMRypLmR8CzEj3PopaXBfY6Z5",
  "key3": "44t1GTvw7ceDrAvmrsHLWR1vHDeGkRYdEtJc39wf42ZsoPQ7TH1fwjtrAwFCit2gRqzi8zpB84juFgZZnrbsnKnU",
  "key4": "3CjwNPQMhm8tRhafykxTzhdXqAqqFZQnX8gDa77Q3VoVVqPM54L1UDzgSN9j2UU2eoTn9u1qLjbWYFuy172VHgqd",
  "key5": "5avo25qSxiAk1WCvYNanvqYoLHxLxFWnXeDJLU4DMP7c4nsSa2oRG4QscXEYgYznrs4aKeoaQRg4DDoFf8uV8HJL",
  "key6": "41ZCpemsdUGQEmJPNmxtqZuxP1Ez1SoUQrxFWRhdEcswPK5eT6vHwDZV7piTJYxKEZKbLuV4YfdMqLmZYj7W8Yjr",
  "key7": "63D2VQ3FXvoUJSHCvekSgXhpwigTg9VLGvWveMurzDQDqXgeeBZkn661eDj2QF4ZD3joobj3wvNp8cX9HBEFfJb5",
  "key8": "4q1rFTHwVQDWvGB1fwQA2ikxSC9uT33yu6NYr2ChPJw2c9B7987wnGWG4o5jufVhWk1KQNdcG1r86SCFYSLPzpoV",
  "key9": "3qzmDykQ2g3xJTLs5wmUQ524xPCHTE5ruvAVfmGqg8rtpr6Rpk3QJHwCpaYhSoRHBrLddB2agCzG9vADhtbTEAw",
  "key10": "2PcisiF9haAGKNSTSKkZEio69rjMqrvT8fwgzWGTge34bPpQLk5m6pikMK88ZrAXftuzBnLAwSG8eBoGR9Fyy41o",
  "key11": "AtzRxoUriRNbszFPAiXHRC5FqysSRDqm3evYDYmkDd5KQuZUtWuaMBPUJsFw3RnnfoXcs42cq18K5dYfJHk4xVN",
  "key12": "2tQtkQFenpnhXTPFf32jQgxfwTuEj7tPvdzaL81eRthhfYPBoh7KxmEx3TGUy6bYWdQBn8FNjhhptfWMK7WppKog",
  "key13": "5Ck6tVM1bHSXBF1QCHXDtJg6ZcdjXW2frnd9t8e5tsZvszAioV641G1FfNPzngEEBUntS2iToVdoPzHvjuat2GC",
  "key14": "2mGd6StHQPvXrZazV2o2XUXpfc2d1rHEL5EgbanLGJe2mUeqKwF4rWvy6dUAuBqa85z2csK3Fb8tAaaGTo57cavn",
  "key15": "3MVLpnNgjFxeP8yMGpprDkU7Q64aqYAFNvfYkqXc3rxoMJsEkakxVjAtNM5Lzv3FyQVXBEuk1y6hsBqvqVGDg1aq",
  "key16": "3EBrKh1pWWFKNFM7giLtd5CcBagmnQSEK1JWdU2Y7MrhEA4LcdkaVNGfZdLQfXxCN4eqBdWcYtv9Rr7Jcuw7UiVB",
  "key17": "5QEpQDbkgAUbwMEy61a37zNwYd2RhdLmbvFsfymiNYySqs2uaeJV859Jrs7LrXYFHpsM5bLBrDMbq5Gm64oH679V",
  "key18": "2wn2ZW5gnhwesAGBP6r6qkHmWYMx8hnepKy5oFrX3jXqeKwVSVQzGHFH3XEfZrT7MmyR24GHcY8fGRxFyTAdZQMN",
  "key19": "VgWnpoye7JXrijExDKmtDQwjMwSCMstmexXHKWhefM4q6aMWACAA8dySjUxxQmKpkEbwWDvL7LRqvp9NkSoEwx4",
  "key20": "5BNQhYyi5d7jzmLk7A2iFxzbVwtTF9uiBzGaqBjPZbaGc96fsZfy7kryVMh47VRfrUgXqgBSoyL7GEVB9Hf279gx",
  "key21": "2iSRroHucieUR7sAu5dBmnNVUDordsaiNibrBasNfZ5jrdvPLy5kRgsf3itaiZGE6PEYYXATJbs5eRwM8sUk4UDa",
  "key22": "5tnq8vZL1EtCgLT79t7NVXTU677wCD8toLRddL5Vfn6ZjBX1WkhwNiTeopyansAXXi3aoqDtkvAoRxfbGsHqS9bp",
  "key23": "67aA9YvmgQF1mVBGf739Fi8oYeBEBVik1oX4AibRxEJLXa5CEWLHZcN5P2ZSoE7zGt47tspwZQyfRc9NLauP34Aj",
  "key24": "5crwFceYhdT7kjXT1EbM4yEeHwLjET4FzJbF79YoNf2pViZNyPvU3EoAvkKJG33exwVMaZq4F6ixw5ADsKq213Q5",
  "key25": "59Vrsv1jMz7uJg9NYbUxe6n7JKWdnutWAr8x3dkhkGi4XdvQQje2FRMTrfpH2Q9whhjGeTXEDwZYeocA477KQK4T",
  "key26": "64LVWdykYC5kjy67L8ykSAL1w41A4UMsz1aYdiFMduE9dNY3RfxdyMce3UrwZKP7XC11BFgZQ5JcktGc6UrLNTUf",
  "key27": "3Jwo6cqys3ZAtoxx4RmDvxBDgHGHHkB8LY88AC5suN45YHoPQJTpRLy6R2mWjy1jiuKx2AUUz8jBmmESDyrtCyoj",
  "key28": "2Dg9UjuU9FJmwbjTr7ZSFE3jMWNGH8Gmtok4QWLNExYuxNNRNJp43UzN4dr4tGmsxWtnejJ4NJEkfiy9AFXzxS5F",
  "key29": "2haRfJBdHKD3gRsanKe3AfTqtrpcFVkW4h6Gm5iYbhZ4TNq6ecAffMvcWmT7nwgX4M8CfFonSYbjxnQz9VK4E2tU",
  "key30": "4hbv1NxCGNj7JhUSRQCvPG6VgsFvPRjM542ZtBeXddpoE6B3S9HzUawkFRfbQG56AZuDPEfbsYpegwE9fA1M2Khv"
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
