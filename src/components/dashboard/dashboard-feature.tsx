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
    "21jLbBBKnpxZ9qwtTibCNtHtL1x9aCkNKHvcW7Zfqd3SZoigRTzTP7vsqZCVtyJfX3hubdfu3MMJYi7Bi7bn2Tqq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yWZj5du3i8i2d4x2KkykZAHdF4Mo1xwzrhhmNJ6bNDHDjDKvaZpwtWN4FDTHF45LBiD8Ux3QuTdubrG8mcvUhix",
  "key1": "5XDXYu2Tq2e2b9SK38iCtkD41FSk4Q8R2UryjxsRUSd2WimkbWiYHaQorS6QZTt93v35G1KunpQoagEcApvKgpxa",
  "key2": "5985tVZQ8kXRhKdDikkTh3bjbgscs9yMW6bvs6Ta8LBY8eLpujymq8u5c3G8TrcoeDfUtzkX7TD3kUDFPC4hTEf6",
  "key3": "63TWbG2JVxHR4Zu265cPmUQfPNwKrGhoTkeX3C5FoTotXWbXqb6PL43A9Lx7KtKb78wVebHgMhtMvF8J8qKBcPFG",
  "key4": "A3CXQJZQdUX3h99re9gDwP3c83feYNtftECjitFStmXzAQZBt4BZwBTQZ4ZGAyt2HzhjxKQ2m4uTYQ7F21yYHsj",
  "key5": "3187zkamumUeNCPi3Z8H6YC1Jsfq7TwgscWg7FNgYqEAcLDCWD54Q5Kkz7w7nkTupqW4qyeRTd2qKbH2YSNQRow2",
  "key6": "55vgLuQpYYi25t8y8wbMdLTtUprxByyxJmhodY3NgMBwpRV54kAXsofiiSZjvtZii2dqNMNMTfM2ix4EZyvhsBuZ",
  "key7": "uePZwcPEfsjcBoVnvWu7aFtfhoBiyJY1FtuadruDaNSXCG8wvfgJkAJ4WvZazpoa7NNuNjuqg3dSMZ4Vq41PeUr",
  "key8": "3yXuns4VN2ffmzTAG2PiViitp8SHDhaGfRDtDk3iy4MSnLQQFspSQNH25mxvNy8saC3ZXjNaqS3PtjDRkGUT33ZG",
  "key9": "33qcr22rELLWSU9DSMZZ7hCNWKav984TiVFxdK6KWKvCneYvZJADeC1GCG3zMYqt3jUmFgQSsYqgPvMn2tK4zbf1",
  "key10": "oEkAPMzJTADtq7oW1pkKLHshgbVxynqwBhkZZ3xzu39N8jdjZ1SW9BHRM5JQ9YU9EkV62qf7i5gHeX5uYT7LHih",
  "key11": "wZThi3juQTw8fGX3CwfY3SfYBW4wEo1qdfVxMVsUvpr4nqQZf5ug5BvdzkCmzV8EPeoHA6ipU1br7v1Dv2rih4H",
  "key12": "5UpFG9jSoZZA3SCXeUgg1AdSJtcyRhng86LAAYRbCiM5Z6Euj6P8x1F6WzPyBDXJvSN6THAPXqdr2GVzG3jSVBbz",
  "key13": "3qeLhgMdGD9PzSakgcoDVbYoTdBiDfvnUcLbtDPSSa7t53jjezefdzaC8bWr64qu7JPC1oWcagmuyL6UBmsJPnxc",
  "key14": "YB7Rbwk5w2TaDv5kbEAGQYMfinuw5RvVBpuQWdgvsgR7kHmrYviHb6K8FcNgFbswyhMTh886PxCA79D8FB57e6E",
  "key15": "5vEVSYHMSqM6gy9A2MAKPgc17JmK38tvaoWAL5yEw7HTSiitYiHkiLqhDBBat5g8NuzAXFDscCL4i8GQQbZK1gf1",
  "key16": "4FAB4UToFjhaLYNowT7wqzssA96NNMzu55FZh3YpFRiWcbRNSDGum1wmTxT1TqyBB6i2u62WATer6iqx9iMSLEWo",
  "key17": "dCmmwxXxXsu2RmWvotewPRyAkGzt8aYTNVsrdYiA5qmFUsepE98xW88fi9N61De83qzbFXqwBHGosKgPPwWwF1j",
  "key18": "4BkKguqG337wxuJLaLvPBHXkmEQgfSEwNuwW4HMwJcYkmHUS3FUsZyAZ7Ch7XBcyNq3oBHLrMUDMefgbxbHdZXVh",
  "key19": "bjiFprFH2DcXUtqmBr9TG8MvP4Cg86qnWZyUMNRFujmrVQsAnBkWtui7qHNFoH9MeVxYr6KqgqpfXjoKCQwXcVU",
  "key20": "3HQUq35SvEPpinWZ5BXwmKTRrysBxsr924v5YkhdYmZSMhmrJqcKpGfCpLQQdNqiZ7cvE533tRFyZB7wRLNcYjQy",
  "key21": "MEdyJEMNLXtrMasBmYttimiTZvR4d8GNgHYJ7Q7drye9VnHBGecezs2WQUJ2UxzgAThANTTXR9pRy8uLsBT1VBc",
  "key22": "4Abj86DGVCx5jNk7KFzDe5Wjx7QBAmcg6VBzf5LMMTngKDfN4SnwQvLgTHR8TkDPh78SREQwunWyfmxUjfGZgFQk",
  "key23": "CTx1Fge7Mdmnh6gz35apg828zCkQiS6wjcBy9dLJuJdniPTCmkNxpJb3KN3xwDNheRWir2ZXgeY4GTMUcgYtwid",
  "key24": "4fgb2x7TYpKjowZ9Jh5CnJCiimNxuUbWU6YCDA3houCZoihFjmduRkdBVdVyn5mDhsdALdchJrTQYf3bpjzBTESP",
  "key25": "2VQyXDQH5Qg8ebgF2DSmsJToQeugkrcRuuvELiv42QQibEe3BDGoLeLkGgYZZiB54iaWg1sbjAL86Xo2D2SeXJ1k",
  "key26": "3VYw1KFJ8W6zTGuWAFwmYpbHaA8D6kV2EGwLDbUqGzVyPTBMPkiL7cKrVkuVehyaWPCU6TW6FKKG33vxshnbgYaL",
  "key27": "3VNR2zGz2KGEWuzRNTyWAj4rgzSgcmqtoES752fihBwNd7nttr6itCy8utqHKPLVheUQ4FwRxHenAmFPeEJ3perk",
  "key28": "eRXQMp1EkZudNe6ut4jWFn2Cmis1oU4coYp6QRfhY1DsR1LjDmUJ1TAUbXmXAtj7SfEdNX7bXYnqTCs4BGXwkEf",
  "key29": "BznA5QndFDVzn7KfHkoMuW4jvp8cHsGUJn4Cxke4Hzyrgr8t42aTYmrL9XihfKjgaydnXPBXvb3BU9qHVpS2uDM",
  "key30": "3hsRa3zwyEr3BHZp5exAbP52UC5qSGvEad3L8HTVmTGWz2RmZ3x7RxxVqsorxaYTcrccUCqa9jASDXJe25GzGvei",
  "key31": "2jmss6mYPokvYGbUNZUGh5qRkDoL2j4z1891NEtTfDmwPimhpuBohkrj9mJwcJ9ADnxxkn1R1fpYHxCiynGeU7fy",
  "key32": "5mrPK8m4BM29XfAMiEtEWAswAKfX1HT2N3Brfczr6BPDJTgp3mY3STUevejP8Y2J3RFtCqWCFm3bcX26ZDbdTF8G",
  "key33": "4iiWMqPbRAQxABxaHVYS58GapxF6xD1HPkAN2i76jsUffet25MHVRjyB68aDNyNCsDWUanHozFbpg7V48P8udkhD",
  "key34": "55bYHSRm5LCoUJaYVCC1ti2gs2F5RFLK11jUEFR984NFHc1pEirKNpnpPcF2cRNyLY4EptgNRPKsUqG4GEawymrj",
  "key35": "5Y7u4xUuJdzMinJu4bZrHS8YzcwYYbmSh5V3qoLuEvdg5JbMe1fQknRpRwu92nfgdmPZ245jvr2KxsE1EGyAnGiW"
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
