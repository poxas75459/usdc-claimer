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
    "4Yn6wxnJ9xymexRtt1eAnmGfwNFbGeBJ8jakNYQ2AyuHhc4DQjsm9oBsxuDKqQnKW7Qrw3x1QVbbmNgmwvwHAPQx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KQzkL4DQUSb34TKZXmPAVVV15j4bNrYArfECAPFieJtpoFDzqwGssKsPW8w6ze8cqc1GEZ36m1auWZZzjvVeTUZ",
  "key1": "25o1wMjsSeUATib2zz7EpWTU2Kjg8dn1ZogEBY3SxGG2Ve4DhCmWKhJKsJpok4CH1tZ2qCSt1o3hLQT5jaXTDKQT",
  "key2": "4bDwHu2NN1aQmKKGSb1iNYeUWLLDQq45G856oSGFd5aikSs2VBcu7LG6rJYD9U7vVfz43p85jWAMXEajyceuvgvB",
  "key3": "4wPsMEsxeZSGbQ7bgd3QbLQEsXdS9VbnsC6nxsnKBn24E7HZJs7o457FaGDvy4ryBoUmVq2x76grFeqGMkbwYkgv",
  "key4": "4Hcsc72zvvVuxXuntjbp6YmvsEL9avcKqo6Wfx5vMs6B9hXKbcABtQ8ZGRcxEvzEfi9kPDph5cowq7fR9yNpx3Gx",
  "key5": "21E4UsEfsxq7wZF69d4b5WXH8pHFVfj1ypQv3r7b98FSKCUP1u4eSum2MFzEAzQUVAahTG7BvW5vVABSFeXAY8XW",
  "key6": "42TLAhUPA78MAegD9fqHgg8UEj7juFfaGu8VTe3cV99bwXGp6QMyVcS5yi6AqHc7z1TKJUZvzhTqf7HtVBfzAgFA",
  "key7": "4u2MBYNXGvi21FDYmUaFkmuX23yASE3NeMEivxeFoF5SbnS6cHNfUPRuTwgdTgrw1rQgFhgvrnkNai5UydvBWbkP",
  "key8": "3NNdtcmYyg15Aa4fM6M9b7zYB7Rojugp17kYA5Y9MrUh2JbDsuzfsam3FGxHhMQYqKWmUFVQTsYXwmUwytQJW5Du",
  "key9": "4rmFEpx1RktRwDHfZSeJyda6zy1XX1EFszCt7hNsnYNqhch2jSFtwULHZQ5ePyDPTW2bYUsuaBSWkqH3vL93sXG5",
  "key10": "4ftmd75MqsKu5rEUByaLyqHdLXYn9GEc2tG5puNGFbd9es4zLjnRX1CL21DPG5PKyqpCfnzNKWo2E6NgHd2Fe6RR",
  "key11": "2HXHWZpooypnQ6DihL5BzA8C9nCWgh5UGjj1U4RwZk8id8dCUEF9Sc732cWQGSKpYiG5q36Zvm1KD3G72y1z7mJe",
  "key12": "4zCwLxmz1q68t4m2YGiz8GkhYEwVAyr86Wwcj6EAjmQ9QDvMNozLHFfS4iF2UNEq6Puh81fMUyEc2dYrb2v5aL4Y",
  "key13": "3fCcCZ3CeBThWZgW6oLCuhPnVeBwag66BHJCKNmp7W4DfyzVhHVv7V41viC7psdZxbeX8PApU6GzMQEtkdguK31m",
  "key14": "5kTSqJ3UwQR1nZXXmeWaKb7KYdpLjqgwAR3nmKax8Qirk1Ykwij4fKhUJuwM2yM8WLUeYcuNErxX7nNcxitWfE4Y",
  "key15": "3W4LjjpSGy2XCdRxsirFE3D9wzBNxDLsyuyY4uYe4BCLLnHDJVxzgQjMTo1FT6PaHeWnJvnLQdwVzDSEWQQ7KL7S",
  "key16": "i11Zi2S8jHhVd4aCLSp7T1AF8yxakAYaQticW77fXnn2YXYnC5yJ3dyze4rvrdSjz5tnv5h41JX2GAwYhjccoEK",
  "key17": "21whvTbAhv8isyhdBotfD3sbos565YECDZqkbbdgyFQiYSpdknTjSP7F6TQTgzP9G4t66vt3w8zufZzfSchWVMDg",
  "key18": "3KFVHydt8D6eXLvxEnfyCUNGJLXS1HozFkNBEtw55CSDU2ongofYe6kc4477b1DK1RhtqygnE5kwgC1xbcSbFZC6",
  "key19": "tkrNqZRB3LFXDQiUo54cjDFqGzFPdHbSFAxUoME5a19vAWy7hcqtumXLKKgjMPypB626pHioVcM9yuKEQzxBYHj",
  "key20": "2rVmiBbvAKsuMajDvaQGeFhCZ1ZoE5XdHWjQ8UYErkFiE3b9u9u2arEEbPnbRFs4aL5qStLwDMh3tRoBDrJduVPz",
  "key21": "5gHQyQ4FJeshTCEJSY5QrPYH4w2z9atKFVpaiGRLoJRj8Vb7tVoY1PgihwvbUSaWp9yUf8SoWCiJt1Aw9pqMVR5G",
  "key22": "3Fx5v2RqFxUGVuaEkgfjCFoLfVnj7d7z9xrVZ2DpoZoYGxF2y3X6iEEDrXPFyksQcaAVyh2YBaMBKHJetKkCYrpw",
  "key23": "3WVDxPugdHw2NtEwbUAe1RMjabYCwxmkQNLX4rSX5Mrm9djLx2m27ofvkKLWJnxASLjjRn8NNfPhob2p3s9rBxEf",
  "key24": "3YrMQu2HiXrkiE9cWKcXD5SyyqmKhVLhDM95y4FzifTyT7YGSwbEm3CRuqvi1uhsg5hm7wo7TSShKvLtz1Tcs3Hg",
  "key25": "5VG5fz5vLNKeq6Bsi2sWijXPZfv9wwvighLGAHiNbX211G9XNw4humcBMBV8r9S5tkjgZ63A8mUNvewE3m6kkZDW",
  "key26": "3jaUSrnwcSEoNvMus4oCxdwq2vVeYubuzChU5dnfwTQbEm1dcFfWRGxHFnD9ae8ekAG5XKKtJ6ipXn7Cca5zewo2",
  "key27": "3kKnCG923ZynF8v28SjkUan3mptEoX6mPN2KfoyxJXHCLE69i1vn3bsDWzXtt6UmT1nKi84Fc4ijiPV2A7AYoTbq",
  "key28": "4oEfcJW7zMBvcWLYZ8EFqq12Hn7oAN3PqaSDboMPgJ3Ywm6SiZiQaiCXKunmtqzMxJFPwbqnoE8wZZfjgcamUU8b",
  "key29": "622hNTp5mGg9CXjX446NvoCXsZwn9ZhxL4HZTaQErqU6S5XUcexkjndMxV8KdpvWa7KBMub5R9dfyM6bSgn5tpUa",
  "key30": "2cyve3HK57N1jubSQNp4V83BU9vq5mK7nparJRDy3sow4My8izz3D2J2LtjC8g4GpyVkye6oFwuJbq3EtygSednZ",
  "key31": "4cvgGXRsThPqzVHDDsfRDSjHR8C7cpzsdqDU6oqAsX1tzb7brmQJe76oNnkjAKB1SAQzLoosW72oGrXMs1X8QjHp",
  "key32": "2nBVLPfpfNm2UquBbsy6vygLuDD9hdkpKg1ZTJyaEPdCVcYCn4NrvnpQAP4pHggT7Xkww9UE7SxJS14bPLikDsWq",
  "key33": "2c9uup8QhRtuxN5X33Jdh6XyY8beKJJfcA84gdePRPZCUtB1G9iYWPf6E6erSxvS5GSDycwAeFDtM3SBtirYSMcn",
  "key34": "57K4GGZXgPWbbs8rrRzLCq9y2Dj9kjEhBJQTLwVuzv3EwoszRbjWVFW9jDg4AEuqfPYv8goU1jo1Qnizh4MYDJj2",
  "key35": "4GV8hjK5DKtaP4yrUS1cZPJBwvz6T2hethAmnFnpfuzMnVprRVsVcLiY8hgLHhLbCUfSaWv2UxxfFR7ExF9EUm6c",
  "key36": "ZhSqyqP5iUDhtNEK2vaMpEbFpJ4vcMjUy9e1LVdxo41XaJNbZSN76mWx7hBTQ7BStDVWov7McwpKM3CpdMwHM8H",
  "key37": "4YuL8fpVbwCF1yTe1zMnFQxrpqC69jgec6Ko6Kpw6kVrLDzbWe5mBxgEumium1nMjJG3xPWwfm3J8P1zqDTMjndm",
  "key38": "2bcmXj2ivK7W2ar3x7ApUQQK9oU796MQwWTB7evcWyUiM6qe4xcLgDAiFANddKo1hGAU3rYsb9NuyeAPLdTGyCYh",
  "key39": "234QD15W38UspMg9FmyVE68szuJN2E9t4f3ffW1ZK5cU9DrdtE1dZj6sJeT4zVzc1m9L2dSwuxFQH7vDjZSm4JsS",
  "key40": "4bLoqhaJkN16t5dYkrJR8yDHHi54547sfXiGa9s5DMN4NhcshMEHGZmdH3UShvPS2LUvdefLXL8r6VK19gQjWJEr",
  "key41": "3ALabPZzMQ9yMzzjgQdoHb6hW2Raywj9JXHrDQq4KiGz6Na69XBabGyQeXPE8dkJAhdKJCYJ97MQ1hHZ72cN8waY",
  "key42": "4VmfrdaC3CoKNpUwRYmeRPTrCPABAyvjAAJaAq5DkbBAsVF1Q1F8j3e6iECWZAepruNe1nhuaULdVCimWQvBWcaT",
  "key43": "5MwK5bZX7tqX1b3UQbEKYMy2GfNh9zHyLsSFQrrvWxjLf9pquKFYhkp8eVofkuiVGrFoEUQL8oYC5mnGwSWeeVmn",
  "key44": "48XSXPhLdmHWQiT7CR5QKGTkBaKQR8pHMeBsMKv8gtudUs7PjLBpu3wyoWY3bkf51xUJB4tm9s5UHYa1Z6yNEUft",
  "key45": "3e2GaXMHjC37Aat7YZrxahbyx15ESj11aRTA3QW8kGaBaCMMrdFytmotm7YyP6tRjHxXS48FjHupiLooKKe5izKo",
  "key46": "5AaQEcPJBDCBrAZHnFD2zSknafigRxq7dgasaYFZw3HZDvbw6dtssA4iW5XUy92gftwaXX6UfiVtJFoYc6SYPryD",
  "key47": "4ZMWyuVjxvjVAGmQTFUUPPtSSdYC8bJxBMULBrGeox5ka4dshCk2BUDWqiMdUATofyy7fj6Y4rmng4jB9EVFrFZc"
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
