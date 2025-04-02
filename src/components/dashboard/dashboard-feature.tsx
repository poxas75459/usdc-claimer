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
    "3zSF71wKXWjYA7uRTev7Pi59g3YQdc4uuipk3oSy4YdxjGgjcE262sdds39bkfKPpLnLi7VtYqKbkp4TYWqkSGYt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21AbBbwrsaWfXmGWUzcUyHAESBXuW65ANADTtcerCdSKSEncCuDUUZavcoJe7ZUQqpnw2q4BuMi6q3GUzc876HgX",
  "key1": "23Hiw7QndeUemnptf9fqVzpEJAFZHn6qSbbj1zwbCbwox4re17eggFJkUwvU3xA2in9WEzzUUT53TW72fzdN6hYu",
  "key2": "37ZiYjLfjPJUG56Z4gkrbYot3SdbHb9fKZ8k9Yy5tZRKoXcEWQjUwGPnEQePGNAdqpzLkZXMHNyLmTpDpjCcSMfb",
  "key3": "2WyTeGxyfemgbKfNqoKcoLFEDkGiHJMAN2nk375t3eGV8j9Q7xExAva99TKA1oH7nxYNppwBQXS4951r9iHoPdx",
  "key4": "LjR5Sg7sZV7Q4YLmjDaXhCVqTSCxR2kfTnCVcGrLRpPu3NvHM1TA2Z4JjbFSrx5opiLVjCjgJ8sxhZcQ5ohfyoy",
  "key5": "2V1yiuf7RpvJHrZ6RQWBTxVgYxeeb7epXoTnmZ9kmE5mCaoVKbE68UXoVvSYYYW1N6DzmaspYqgBAy3z1NXMynqJ",
  "key6": "65NCurSVV7PfMqedpY1UMDf3xAfmRyvdX4SJBnb1oWm1955gXpfgCvLDocRLZVFnYydQsmoteGoKRTokGQTLcFz",
  "key7": "5ALiEiszRux377qgnQkD2NDaXayZkjtQg6dNTBjVJZ9qjjGFpGrr9pbvrosRrtpo55cdSC8PtnqtZjhKN1UiJT5e",
  "key8": "4676gc7hW5c8NHXzPLKz9YphYubFuTMHn9ywtNaJvb4gw5VofpqjDjxqWf66ou7QeovZgRParVj94TdMu4eCR42e",
  "key9": "3vevRVeaighjXKdGZZY5TYKv3LG4vZP4Phvgd93mTYS7vN1WfAs11sHF1Dri2c8h9vQfGtDtjonaVDzd9D3W7Php",
  "key10": "5vjysJ16SgFMyrw1MFwNLtWZ9MF4dU2tZddDJYbdp9VLBNjJEBXCWCUrbDcCwbRXNsYU7kHRkixsSSonTqdS31hu",
  "key11": "K7LuD8KWUeA6hz1yxkowXpKykZ5JgsFMdmvfNeHiEzGy3BBZ9EkSq9k3FX3LBXz3MQjk965P2bjNETYYHbKY9hf",
  "key12": "y8RYR6Kp9ynTT6XHNXumf5ATtCBx3qFLNe4tLzBQ4vxvf1nr6kTQvYCweEiRme7Kg3pBu8qmDnFgjrDvVnjBarg",
  "key13": "fH8G2WxZ52Gr7pciTNEQXn92aAwtDzHBdesq7Tpe4khQ573DhrTtr59bMh65p8xsFm72ux2mnD2o8axpjNPiV1v",
  "key14": "3qCvYppcag59pTSMMgZFce4PdvKGQfjrK4A5Yb5rtsxzkEuiDAvw2LtP4rZH7UB7eAFwqVte46eVWfumEX6hNkfP",
  "key15": "466gSGchZihQ5bmNBwWB5He2wjEr2sPZpa7KWk8PyzCTzkCTuuQd456zZyx3CguKZosJkaa7EfxDWPqQEKKU4xVG",
  "key16": "3y12xicovGgSbCMnCKuRoMgZQZvWUDUu2YrUX9Cg22T775JwkzNu1Jq68toPoWcLShpjKWjh8Wx9rZ4ieuvXWEny",
  "key17": "5fbsaF958shYoSyoe5Nwy7UUU1GoZ3kVQjikQuN5sjV6vuXA8quc4zN3bj6PeAKUMek946sDKkv6rRBXwbomcS8n",
  "key18": "4xjrWY3eX3WwZpATrfvh97umPYRftqfcZTP2hha5bJTrPs5xfAktP8Gb6Hbv4ZTW8r3SF7J12TVw4fvsQwkhHP7x",
  "key19": "5BRfKdJR7w7SQk5E8z4suizBA5nArmrUGPj735bk5p8RLiBvCDjMizLoFMiGUBdLbu9AUKvVCwFQ59cAtSAYBSfH",
  "key20": "1qz47AfpJAnvr3ESjvhwzsbFd4YJZcceDZmu7ZjW6A3HWGMsguWXhPBFdf4PyvmHTX1iWJ8oqrBA4eFHNk9WaXv",
  "key21": "9h8FSZQqi7Daqo8nAWNFAa7SsSTsHLr91BwruEQRv91QTsT2oAcBL9fz5vXDzs2hGwdSpGKHRjBemq9CPkGeifG",
  "key22": "3SggbYcHhxYuxjFHFG8gRsRSCk8Spc74emHQxEqW13hhc2x8divKroExDNToAXMnsYNTiCsHd4jDHGLaqjyqKzwT",
  "key23": "3hve5XPAXqr4y2qu1KiaU14PPKv2tcDsRyjZPQdkumnpg2yURLJzYrNPaucVzoYGw6kqf8bozZ7UPcq4MFkgbHNr",
  "key24": "56LQ8ny9GwBayEfUx9jTkVbe7uvbA3bvEWgby22QbcQQChbeRd53TztS5xbRA9qJ28cLtVF3Tdvi2sGNwm6AGDFJ",
  "key25": "4t39kZSvCWwFPTSPNZRiAwj5bkF1YEU4q5v9EYgCHgTLf5ur66UmtvkzAod5DCtmhiT7cT3cV6njDMptmKUiiZko",
  "key26": "1KDRKbVnfnuabDYd2inowQ3dpzzAe3ea1EhdnJmLLug3FFt4W9dMoh6wCgFptddm3JAcfTCYv8Z4rk6a2xRbd3q",
  "key27": "5LQ455vQWKPNeyJ5SdHwZX8eoPfZVfcrNMYr3hXcjHqZxayg5FY9goigpWHLAFc9CmCJtsfhxoUda8px7xKHgs4g",
  "key28": "5TdRHvNph3sy3za1Yqr75eup1YwUXA39Ukw3tT7ii3VxportD2UEujNbVkFKRRx6F2k7aaELExVLFKGMbUezvyiA",
  "key29": "3N3ukpggAKjG5BpH1YVSRX6EiHU1ZEDMXPoyZ2Rk8pC9UfvomDAppQHMNpktzHA1W1tHQQoXj2oDkKYG4KAjTsRM",
  "key30": "2sppNGJpzvSpFhDCWuq2BAkcGGDqpgqcyyNrrDsJbuY4aS88E46qqqRMekSSidExptaajeEe9f6Cvg1qysKPwwuc",
  "key31": "2PcS4inqjFdWRgZ9U3Mu8FZ8FBjN9NNH1ashDYFgeaj821qDdFGuPUwMAS2qDfm8T5x31PGZ5oQ1mQ2XMUNrS2zv",
  "key32": "2YCLo5YZjLj5RKb76oeb88t18N555WuCNZMJc14wAwEpJc2awbm6NkadGmxAuYD4v5BxYPzCcJjhpaCCWC8mHSdV",
  "key33": "5y13KgbqqFuR7CMPNA953oa5UmYtKtDtkkmrSKL3UTPvoh4GDi7LN6HoHKzUEBc96RtbWTCmG7L4itWMDchExx9C",
  "key34": "WwUsqPvEGEWWmBRkN4brYaejTivieKT2mTKMXRiF1wQPv67RZV7bZtkGGfrKVx6rCF3Pss61Nhu3jgeQfqNzbPq",
  "key35": "4h2zfD7xMXS9JH7ShtWiHj4Nyt1NF3WWSY3JZmmudycczXdwngjSmQo3NoKcQ8dvMhoqYWJeXS8MXSqDM8wXfwAZ",
  "key36": "5uY5jDXiKAbbVYnMZkxCfGXiEq4SevNhkfocCQQbS2Lnyuvmq6mexDM4RPQk99ZM97NKDjtakPFApsocyHXYDsxx",
  "key37": "51rsr1z7dG9RxFoc6DVkeHtVXaDtMq3QdNoD3tuJqyHmwNBzu6HBexVAL8Wd1HajzcJryqqtyLVgUQKhuc3bR1j5",
  "key38": "iguRBQqxmf7ZGYj71frkUvxeiGY9W92auiSTnwgM7TRBvdE6nycqYfnwMkHno8WfGnr31xip9JvkkhRvKRvPFsb",
  "key39": "RjXoH823KApZ4y4M55w9BzuNPY5Aj98o55guSymk9iQ9fudJfTK14i2RTL39bTNaveVbocjqFGtASpviejsJuZ7",
  "key40": "28p5UL3mHWg6fn8HLqUiBENm7tnVi6qLbiieAbsNU1tNE2Y99aNAeFoby79r2N7TEnhMmjCsKoytAc8Vk4Jg4Wka"
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
