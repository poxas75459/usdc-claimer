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
    "373yaPnyxeiaaYuCBSPsTTzNcAbtDWCfLaBDwMWr6TFfztd3mSzHnxd9qCxn8Usm92mx2due8wZ8oe3Y9YkcCHNZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xWYqBi3735Pzy9jwhAhE1ogKpHDb7V78YMgmNsnPc1JXuXpcgXqukpV2xmmyuQkZdb9UZD4TnuWBiJo8K9FKVbm",
  "key1": "4FdCh9DBRtQyMyEs5K989kSLpnSh7AFMsvEM3pmCZVRjEkUDRFBDPxdPPopDQ9sNJJU1gLTYPw4dRgzPz5k53wLR",
  "key2": "5XKYGmXG25uADFXsLnNigUkTFXiJQA89y2BzBEPkCaxcWcbD5b5L3nKzg46Nwhdqf1s8FkodWV1dwhGy85HGUSTZ",
  "key3": "2TVGwzBZGKcvNbFT5WMMtoYL1UrtjDSZDto5ViDdVptvQDTDLdsieVJKHB6M8oVYKbT7zQbrTxa5st4kfVpCLYXB",
  "key4": "55gWTkKktTspJsVk9BwEDz9CPt3sJ5m4SK1b44CwKjawY8SvN6aJzRFAXVLCcmMNj9MMcThRYau62dHNZyaUfbhN",
  "key5": "bWYwbvhpRUNsc7JeAm5qVB3XpzqQkrpD3VtWjToqScrNhCzcN7JC2XBRQL1w5sqC4HsP1Q5JX9nTRFEeW2byEe4",
  "key6": "4KwLDWRTZYZWKvzhA6pwsGcoue5CN9LFwTf167x1YD34AyB7TthXK9ixpFJgXVa2rrvjuvKrZUX92FhmHQ1spvQ3",
  "key7": "4xk4uNGFGsphfp4eg4u7GsKW8G6zNoGhBkr9knTTaP5DP8LADpneMgA7a2Hg5SYmp9oeuRenT7Ayqzb66ZxZTbsy",
  "key8": "3ys3814CxcYDsHrxor2Cz5wxobnKAz38rSGxY94Q88YR8X35Fj6C9bxJ1oMtrpGpsuwsWjEgYaagTXDD6xW2tLoQ",
  "key9": "5kunBgHyHcrEhyWYhtxWpKss2deyw1HQN3QFeqZAXnmTeMNxyv4DX9acmJyy9a4GYb6uXWvcgT7sY27Nn8hgwW78",
  "key10": "54fvsrGPkYK5RBJLtoKVe2agh9tVJqsMpXEcuTP9oSPLvwWv9Yh3sMNjfbEwXMpC64AN5ewapMTQQBPZyoTXv19z",
  "key11": "2GUofPAtXfcVHPi4pyN2Z8n21cKyhzVGocUXQ2wK53Z1uv3p8d4Aq67jdk7BVrcBjR5vaKX2Je9D11WTmorzbwQo",
  "key12": "yrndrjvSQcsPYFoEjgr2hdZMrqpNc1MaSKG7w7FiLow3aXni9YUf2kSfVH4qsdsPJBGT1rAn1CkkeqbBNSmkf6V",
  "key13": "4JwrrcvaMYkmWUSuQwmVTt64iV29rGVvifMJtFSufF4drrjmy7yo1UV1kWg8Gmmqtaj5V7BXYjzv2h94H4f7QFv4",
  "key14": "34Ak94btx64HyV2RBoa3WkaNJWj6mTtxRdwAhejxswUwRGPvK2wkdojHWF5RBPgPB6mesUL2Spm5Hrtmhw3SfeeG",
  "key15": "41nHtkTezx8LHwN284t4aVji5WLvoQiTE5R2973AShBseoT6yQXsVQS2cReXXR6z5jG6Rk7FdL1tBHyW79RsXoiz",
  "key16": "nKXraXKTjDUQqwSh3zaaZLSzBXsuMJeXjBd6vuKpFpYHiYhVUc3aBAb6UQvBPJq2mJ2Zded6Y4vZPMRRiLrzCda",
  "key17": "56dQ3Y9ZS1TrE4seRjenrFmaHuMSzSzaH2ydLY2J3zpcDBdiXLoWatWCK6GmaZSD6PK2kcVj9M4e2n7YgzHrm4TM",
  "key18": "2CgcWMg69J2Y958KN1BjMeK4GzL8XZAmHredxdRGTajX2TcbPauqofnny6cdVQ41Kh6xnK3tGJ47AThJyiK8QKRo",
  "key19": "4Aq8QYzYnAnH7dnTtufhZKWuyBUizuaT8B6n8W2p4PjhFSLbPBXtmhmHYgBxoJt3L6dvYf9Ffsgmm24J4PsYzQEX",
  "key20": "5Ef9hA2KaSU9hhzyniGSRrLgbct4FJjfEfEXSPgBk7y1rLB1iabmaaFX5gWpGSve37RMCcWSHYeLuuv9WQKszPyR",
  "key21": "2AKcL2Tv2eMEWz7RqR2xUHqxoHyjZw7mRWGevxF7ocA5YwYPoZkK8tY47d8SyMCEZCSxkpB5b6dn1Fgvb1CkLBdD",
  "key22": "3C8uKwspEhdHKF6ynWkW2NHc87y6N2NHGNfoUtDo7JZcCNmokNTYKc4qQoKsBeyBkQTWjTXaKuxvzo6YhVM7LnEY",
  "key23": "YTdtMi3zL7pb14m7eQeR8hC5jP2XM4pQ8Rf3Cd3G9Ws6KbsWy91BfKvbQVyinVcV1BsWbUxZgf6VwdJTHZrNjcx",
  "key24": "3fdC7oKvfjnzTogeRe6LiMGaLpG7NZqjZq81CudLMCNkXxprfXZmqhHbnuErvp3soi5SWnMk1auED9D7fGPTZpBp",
  "key25": "3rnFjdsY6qnEHQphb49iw1QWqG1mp25GPW4AryH6iYHEPsGN7QYrt2wMi6PUpc5M8NSUMLrVrW5UegojVndBXqoB",
  "key26": "1pbgp8iC6eMqchyvYjY3maFeEuU5fd2p5a3JSbsfm6SQ6S8255PpvJid2bKUje4KsVWBFxK43WLrXbcUdJak4XF",
  "key27": "5jB6bfvexxZTg1DqaECy5PfGy2RPmSrHVWzzmRjZ7aw4vChhApCN3tmg7NfH9pkFYbJtrzmykctMjzigYj2Bacp5",
  "key28": "2Kyr9zuEUncuwDuPFgcgfb5KfZkKt27UP3H2M9CzQPXYBxvTqhbU8oQ6LqbTiWXrv8HbZs1wC2Qgo5MGSGpyD8tQ",
  "key29": "47x1R34BKcXgXhatUuyG98hUPSCAzvuuwoxJQeHogVdJRbinyBrKz92SWfk53yqnzvyy6MT2nUT4g143GpioqLWM",
  "key30": "1AoUDB9fJsvudz2AhfYvE3yVE5Cfh3bSBmYCT7A1jBjnjCbrDzKEM6a6aL4xWbtWeH5wWAPQYv5V6Hc9s9FEUKa",
  "key31": "4L5fUukgZAZUR7TjAqeM8NUAet85yEDb3JjL6SZX6hvdPVbYmCJ5h1yShMDsdAC8NvKPB2Eer3ewX2xfbD9h2Gfk",
  "key32": "5SFiCRLL6883Vz47ct89oWRgPyDK9SRr3BLBbwAC3kehz7DW7puVF6efZjJ7WF5p46Rd12WhutR8zpbYraLEKtvw",
  "key33": "2CFKiMcNpDtV8pqc54JJHBJUqmzEEwoBwFyv8dJ2qEUoy1XjMYvo9JQpMH3Gay3UjZkzwff9VSM9nyJ8NBx86yig",
  "key34": "28PCXnJryjUGXsny2qNyB4tqcetvy6Gqcw66mCYZnhcPxC2snXjr4Ki3gACwFtu1YG71PfzzQuVXDeBk1ZmHMY3M",
  "key35": "4HieDqqozonu6kdHZVsVae592tX97ZbtJt8sBSGm8vWpxQfCLu1QH2tYh5dvYG1eznxjzPw9DkGBavg7LCMTsW7S",
  "key36": "2EftQp7J4nwLhf97bMQMBB4DmnByPnbX9aKVQzkwSpYVtoYd2zmxXPDFi92A3bQYsZzuMD8DXFMMtv9tFgL7nVXX",
  "key37": "URzYATMoYTAdhBXS1BnC1F7Sa9o7TV7dir5qNaadefAVQkPnXaeWigrptXMNm5fSVMeeZNLMXERX4ZV6XDvNrrG",
  "key38": "5GMVnjAhVE7Ni4UF7ZCsgWn9gKoc5sSPKFVodT5ebGnAYi5sEKFGFxAhHkHsfnPu2K7SEqe5AEGjoAEfk2tjTq32",
  "key39": "hYKX2AvMvj95mBZXrwUghX6fY4NGTosNjo2EWYyQTNfhH14A8CjKHuETbujSgo2ak7M6nb6nQBU9Vmwr6vnXJvi",
  "key40": "4R1YawNbMnAUhrGXsT9TjVRRgxkm4bwtRtzxjsSRukASerfo14phRUXMrBprVJaJJkWdMdF6FNMboBTk1sbdfq7H",
  "key41": "49eh43KBiDZsfY273W5PgYg7nKz6sebwGWa6Vn5mJbHDFKUgJtpEME59wfohaGQTdRJVJhFFfeY6hbi1SKk2ajfY",
  "key42": "5iM7kwS5dHfT25tNLcYUKe8nmRbVyw9EedfHiMp8PRu5GAcrcPMgYPrD2qLgaii3KaW58ZRtd6Cx9iddRTgAq9ZC",
  "key43": "Kxx1TsPXxKtV3WfSSRmu1ozvpTaUvJQS4kyG66K1zgzC4ZBSZFg9NsnYKpY8B5xe7BAQHhwLoqd6Vot3GuAc74T",
  "key44": "2Eab4rVEXMiMRgeyMhhGungjmHctDTg5uo44refbUzEchKmwabHHRkSvATV1QYhRoaHSP9ZgPemqWqcvVASbyZLB",
  "key45": "BM8i8nx3maWsqgnkaV55pn3qtSVUNr2bkZaHkKN4Mp7zK6AAKvMJDKq2joCWn8JddjEc65Jr6zGLqJMuQd6Yw8Y",
  "key46": "2HQfLbSA8Nt7EQiC6hwnbWAdtvmuAhd1BCKq68v4w7M99C7kySm5HDKBYUf1tKzwgAUSYHpnbYJwjrPC86TqBZZr"
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
