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
    "22q1RmfyJPotHScitJwWY6hGBQb3bRRkMhj23UkpcPMJ5n9ZawVdwEBUCfPxytgoy2beT832z4EUFDTQYJEFbqce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iNR1kXZamXhEA4tLwauNr5XGbVPfz5BxgUtChd7HqmJVPiH98RCpsBSgpEvnPVsb3xRsF4r9TCZR9Zz3RB3xbbd",
  "key1": "5XNeRhU26JC4pmwMB28zEtx7RdAQSkVpkZcpLTvTZmgY4YNxRAzfiuetf4RUXqu8aivDf1oGQYYDvwcyG3fDFCkh",
  "key2": "KpgVJBABbiVFPfa7riMUZkhQVeGgG5YJ99TweXNQNHXkzysDitcMqV75fwZ6oUGWafViRdQGG7NFbE3omWiSFor",
  "key3": "VtDZRGyKeWs1CjqkUfrCPGnY2Jkoihh18QsE595BeGvx754AUZXJCBHJRzRLX1sAzPYjaxBgkzgqUG6Sdk8NmoB",
  "key4": "5D9FArNDjRVziZJPHEbiWrtrKVKxvSQVPBKVhEM8AqxDnHZ5NwLhUbHxkthdpXpL8JuMCteENPrB2i9jFrw4Umna",
  "key5": "48jnTwDRpBrRe6Jwy7Yp6Ks1i1JrtXAkzBpoiLPtrvC95faBJbdYi6KFCPSHYXLmW9w6DPfrgejiCLrtrbPZutFu",
  "key6": "5JY4XP9zcscorYWtjbvdoyV62TpQn3w3rPed3dPZV9S5BHAK1X8ia3D6iYTo5po2PQcRbeQ6u2ZiAXRhA3wgajpN",
  "key7": "52s4QAVgueQzZ4dyja5xSGMtFE5wPMTSDgPjEtPB2i5SiWdoWKNKjibmPVSneaiFv6Df6CiPLiZyMwAiNEcxQ8EA",
  "key8": "Gr9BtZLgQU2cdwgiY1egLjwoGeqSNPT2pZYWEJhyS1Lyf7n3R5yRVgPc5mGH31BJ2iTZAHN8dtEE9pppXxRiW96",
  "key9": "4XEReJUiAtoX9Wui9EZrfU2fHVRsT7uy1vPs4VR5qoaCaGHDk87fMLvHbCQ4opEiQapT5tQsDKtdgvy8GQ9jtrdN",
  "key10": "47kSn4311QreVju7Mb72gsRNkaQQJGj2YWpKttv4Hk41gNKwDhhVw3VDqbmma1n5HuZMxKUe5XE8xpsUoN1sYrJd",
  "key11": "33V6Axqh6hfjE3LCffhPN2B3nRwtiXtMKBKVis7VBMi2DhYYyKoRx8zCdN7hyu2nDYRnNAnH4Hhtg97gPHD4WNS7",
  "key12": "3CuA477PHLHD3qXgRG2DAaXyPPCFDUCVwbpLroefjRHV5ZxsdCUBCTFBALoMHDeVHzWpeMpAQmiDf5YaNKEuBHcn",
  "key13": "5d6U6K7faP3arL4YTtjD3SyEkJ7mbmcAQ8Z9XRFeP55ZxYDsB7kzoyBxzh5q877XbVGPvgYMGjFTfPoR1NjVCMmQ",
  "key14": "5bBm5ZjtUAmSfC1MmAgtSgrn6KBVQuChAG4BHRu6NopS4SU3W54t7Q5wNEEAR6yCzMwBiwKfZVW9PzD6AL6aaCiP",
  "key15": "n8Tw1bkTqhNXeTAFMkFEF9Rg6HsbmWbhgekdwxQV5qQbTffNo6jA3Lt84Wr7UNTjCk4AFWMtq3nGNCtNksMxG48",
  "key16": "A2aCEww8o87YCwxb4nUPoB4Y7ufBBLS57ViWawyo2QALT75NMBNNZapisdVZ92nbjAfivs3w4LgcqhRkGCvcQ4i",
  "key17": "2QnGgLsGGjbKDg6acXnKSqSgdGvbp8pGZgMDbwwRbD7kurCQwNeD28Sz473bahRrVqhEnza7NxNoLZG395DKfm8D",
  "key18": "3114TohZJ4yAj2wuKeWcwtV6cuTGGPjZNjCvuHnNTvuSDq1FSf8k1z52fGmy5dy2kjnVSsn6ctrPQ4sPMFJQsXUx",
  "key19": "4PirQXXLV4PvZxiTmEgVhK7uKZv5uWC8DrPeKxtRhmgPuowJ46XMUNgh5wH5s687CqoQgSashV5eKMVWSiRfuZft",
  "key20": "5PYqZTNDp8rZM5YEtKncLZAryBBiRTjzkc6MYMt8Fo6rLnTrTuV57ewDDc3kpSBG4QpFiNWN2Z31kEcyrXjLoagY",
  "key21": "2QGQk6XJtB7EepDjvRg2Y7NsRPDe9if5aBb7RaJh7MLyH4cVWcH1LVkvWWBWXdDq2NVzYD9K1rywNRyedU3LHsRg",
  "key22": "5GsgA7TeLVbZ8DYzxKLEgcdsxAVKzBuQ5rdmNVT9MiASbZEGvoGu3pnruumuhRgWsQhnVHvnKFo8g5jy6fZneGVZ",
  "key23": "5MPh4rewBN6ytodVMsFbh92MFVm1MofUssfSx15kQfBZf3PHW7vYC9mpoyUNLiJukqHWqiYGoc3iho8E73AvLx6D",
  "key24": "3ELEYq2xGjnrJXKVZGh423uWQbWvismFfCM5ot6Xqjag5NzEGALyzZ58jU6nPgpvV9eqHaUrXfKHXoSH6so22Qzp",
  "key25": "45ZPy6xwCqruZ8RL1bAgonsApeiy98nU1Q6N4oSVrgDV4FeXuLv6vxS4pmNhEG5C6cUr9GJKruEUEe7fSq9k9sT1",
  "key26": "5YwLvWi8FHEHXJBnZFttMFBSfjy9JmZ1cVTxPqwjKP2Q9tUBS2bg2bXUYhnBHv7ocijQAJz8pZptJxWvBJixsqt4",
  "key27": "4gYhT19FDoCBzWEbiooHs86FhjPvS4qgjQWKEsBAFdHKU7rQoz9WKc4EAZVUvZgqqWtEXiT199VqMrG6TWpEkkAq",
  "key28": "2C5fUEaWXHd55kBdLQZJm2Jtb1RyMqeZnVsqyq6rwXQ7h2u8DWXrrXz8P2ZLSnKEXMfiD9kXeefG97Q27XMPok6D",
  "key29": "Xn77QfgXVspuzgruz26cmXiPeWaicsNB35f1B7TszSiKSQ3Sv3wVPodmWMwJisfyyLJxgtAfdaWuJztoqeHPSRE",
  "key30": "2c29TziWV1T6wxBXYe6d4ukSNWQ5A5XJXUG7C9gcedXxqXeG8iuBJPcGpRmrRrxgW9VpfbMifNZcfi3UPaYCxdNv",
  "key31": "57udQFSaVvKKR7zvCFNvzck9BHHUpepgLsEafSCwS78y31XqdXkQaVKRNocVhqc4krGTQHqZ3VZoyFz2t3JgNM6u",
  "key32": "4nMmu77BrpWzdLK2XiTdgxJJ7sBke4s7nQnCrn8pHkbsmSDmta7K5o1HeFYBdRn48qT79djdofyW9GMKrKRiYwJB",
  "key33": "4QThCFwBjMAjYp1TchRRj3CtUNGR2yT3FnaREhFPCYXHFFhnkzDcyyA7HcQnbmdbNsxqLESciGmhLhKdvYKzYE41",
  "key34": "KcRhHjhCBf6GJzUhhYf9U5nL58cX3RDYrq3WxhqQs3boeDt3f1ohWnXG1pwwnrRP5mVzCre7ZrbcFdcSCqyneTd",
  "key35": "3eEvz9qe6JYTccrV5es9P5amLRjuVXQpMEaAoc2GVa8gkniRt8AS9Zbofrfnb5jrWYYXBiHxDFRrHraS77ZBx7tt",
  "key36": "2r9wJ6Nsedr9xk7owbHQyx5WkSZcLEPbmquGqDc1bDQfjAqKf7F8ZFiwbHXqSMfbpumeL5FjuaCjwhjRioNM5hRt",
  "key37": "4kEm5jLoBoPeYZQk2x872SnWaw3sBhNYmwEzy4KuVaTT2jbhkoZquKTwttwo3pkBabzeoDXwnudZjTMe4CqvAwNU",
  "key38": "3oqPAAw3aKKA2cXHQEZuvq2CZriZTsUAhR6mSYhWvKxQGtaesuz7MCqZ3L46uNGLzWYPagWnGNVL9mw5Kh4NvTtb",
  "key39": "44jfG1uiJE7nEpCYEWf3BUQKVks3icakM7vPjmhquf9CjfvtaHsPAdjgwRurjCMEt3k8HQyHPZ3kV6pgHLeZoHem",
  "key40": "349YuaodUAAfsipXfJYxCZqaipuTmLMmJYfyzETyL4vytuNZqp5wmE5hS9et1ENPjTufqKrpn79xemRfyUBCfGJv",
  "key41": "458RvwhbJXR2FREdsZCLa3XR1isJw6uKwWpLk8KMcztCcGqGSXQfT1CsKEdutSXheQ2sPFuEBjyu7MGcCm7t7azm",
  "key42": "2mpviRCwGBUQrStaRBsXxcRwXWagTyiEx2Lf8xgQVvvnyAqf9PFgGMX4ETDxXbLa65E6cALNambcqQdee5eoTGxH",
  "key43": "5UCGc7rRWHAfbtkdLypJgDCdoDGjRLCtpJ2YLJhkqFdFiVCgFDUKHDpEkCm24iPJMPgkCqvo75y9WAG9toJSsu5W",
  "key44": "3U2DPGMRF573DPP8DXHJYSGzJEpEQyhs5S8hQKmtjG6hugtGEnLYvGojh828Kp7uq1gcDyc9azZdQ4DLapoBJavq",
  "key45": "a2kYCBPzpMbkTFEXa5xVYpWLpeSSd9MZzzGYGj2Hd15sQ7A71GzuQf3oynHdxWFZTN3apFngqUDVx3baPL5VJHz",
  "key46": "5imUfXqfexE884ADwcJxwvFV3ymeYJBphRPN44cnB2tt8XDGTtHtQGkMoWTnarW2yop3QHGzTpYWzKbv8zqniSio",
  "key47": "5o9VXq3cmfgSSSbtay9y5JxmEWsyabbMqYgzsVfaxMjyHqARe46Q2aeWt47Ads7iLD4fumsa6VSU9YCa29HyucbQ"
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
