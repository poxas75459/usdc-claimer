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
    "4qtAqoiMtmis4pAhkCYUYqgYBvkBdhS2uyhzyfYVzVuftLzk3uLAw9F4esEqkmVt5fCbkP8zkzsUUbk3HZVNkdBd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "273NHpwSXtMZSU2X59Hv8vqeqiJknHrj3C4fo1FwC8ZNDBJZRwmfR8Fhem8tqH4T5hosBNbro4jxmDKQqUJrUfyt",
  "key1": "4pbh53kJs8DNFcBLBLaHfD4SHb2v3C2g85HanEpd5Z5XmAvZvLAbXACqMnaos9xVWik9u89ACfFJepxcav35E8b1",
  "key2": "5C3NfboJMzYa4DrjcTiLwZajxkrag5jwsNj1dzbEHXzq7185SWnRefyrL55SzQskrNM6EFjHaHy6yQL6D5ioQTPo",
  "key3": "59tDwkzgwqk2TwmNhmw8rZVQQoJv5zJZPvDGTpPmGKzkwDwqtADZwCVx6GNKcoe5UrXYfDccoZ3sDqPSaTQjFrZd",
  "key4": "3gBcXMqHjUvL5KGPSmqpzqHhDkGj8HnL6E12Ev8mNVuMktBzRuMVomyopbANZUPqk17iMmNAT9K23JDinGDymJt8",
  "key5": "5UXidRfuaWdXqR9AH2MJK9epXAcjMNfws9kyejuHunB6ghv655EbYDztxJLpE4Ph7vYMdpJB5S8TGKfrUPW73QQt",
  "key6": "2L1pGa2g89EUHTRpBy76XibZdf4Aw7CwiqFzGjVFwnY16z3VjNoXxuWKUbg1TCqGHFvwuZQysJLRcY3c3YK7S66",
  "key7": "3zVyrZgcrmew1ZXmaf2VKNpqJywqgkJCNXUj6385h16TZtZ8Kmsxbk2hcQ41oAPXjsU5eQwNGYYtc9kEN5Ms3JrF",
  "key8": "32PpwmdPAVRAyDijYhtzk64YSrVGsx7u7gX4eQUmGFY1cDeNQyh2LgFUHpvfDB33xDYbY8AWMG7qJXPojn5PhMx8",
  "key9": "4Zud5GEu9eafs1zQaMojWS3Fmj4BJwvyXbijnVtc4gGFbatPQN1AcEdQBWspszZrdtLSJ3eKbgohqLKvMHUgGvyW",
  "key10": "62Mi2g4s9ugP2gAXJoFFU6yX3Vo1JRB7P9AVNKmZLqTBtg1bibmv9QGoMVF44bpztCGnW6iXDktUysHWWSiEE9Ew",
  "key11": "CscmEj2ApLi8ahqf3y5zU4J6Jtwfi8KrB1zTqN1JwaKEh58Yau8v3musLT6jTSJrVJKzRUZJTzv42JSvXiXFuW5",
  "key12": "31y8ZRxVU7LFrjDfQSUt5MJccfzokN9G9ZuCQKB8herty6EhEFb9ed7rLs4ZFsTfC8reSeXxMkTb1fLTLjn2ionp",
  "key13": "3bFZrBHfy4YnvjUS8179NBsCAHrAbUiqQ8ngjh7YzZ7mcTpuTYqGSuuFFdLHbt7AFpCJBTvLpRUzNAnZBDNZ7mFf",
  "key14": "3XW3V4asdYqDRMinF3zcKq2cJoeemAus2hxKw9CcKo7kmDGxUzeGbMEQz1EPrSC3MzpMtofdAqt7nX12Nsj6CuVf",
  "key15": "GzyphpURZCPAa5iX9evWSALHcat1w7DuuJyryhpYQ6A9oPw6EpaVv8gRhffsLoX6ZcUdNStj4TE2qf4MPMBUhn7",
  "key16": "2NzcE7T8nFistrr5Xw6ej1v6RTZTfmscPoLwcNNxKkHX1Y1qKJ86QWWjZkNB5rbXzVxTdYUAVSGwSKrXkSj6uYu6",
  "key17": "4wSqyghrw3EnFRvcxJduJuiv3k9h4Ls7w3Ahon4m918eF4JLT7iJBX1YeURt88C3SqrxdHAcXYNPoKkExGwZoNGw",
  "key18": "2SwqZKtiAtaLZ1T8cq1XzrY2vZ6PXkwdM6LGX4cGv2GoJDDPXtmPVYXaxvfAEqyHW4mWr4Jj2B2uTJLpe37fWBW3",
  "key19": "w4NmVus9LRAMupxuhFLhKuTrDUX3ccPFhsp1KZJs1hcPv7sguovJ9LHvowfwjD5vUGGMWzAvLiGNuNmUvLXRxaW",
  "key20": "2mEUYHcMLnD99xNQK8BrGW3LFr81tPwAwcd4koyU498BeQCFYiF9ghzuLeTX6nMJMo5RX7PCiJcviYndHDooxNxA",
  "key21": "R97PPDQWcUF8SamaUg725pmXxWfnHbeTmSeaNLagYeUuu2fkZKTeeGoQztdQKT93Jm4omNKEBYARdKBqaeTFBPb",
  "key22": "47LgMmXd8DrmGkSZsBkPcBCp5ZMcneQfxu1A9g13wCVY7xoFriNu8xPKH9kX23nN4j9fp9GUd15eBENcqCsCHzf2",
  "key23": "3Np5m8T3pDjCfD2MbaiNTaAvGK2wrwstFMnCgF6Jg47rDxdMhR6WArUqWTtqA7ai5t8Pd2GbWcLoA6uVmvSzh3ZV",
  "key24": "4ZHkFPt4LbcDPxNf4tBxtmsygKDjUVNUiJxpU96mpwb5qg8R264RTwRgu41wBGXQZM3pBxFkP7Q9dB8REi8aqFyH",
  "key25": "3FXnb37JdruF1eHP5LEr4Ekpa7Xoass12kp1Q5ewLPq63ECzoz2qUvmK6zQcLfMmGmhj7nmMhYmqnaBZko5t5Gxb",
  "key26": "4ZLPqwu4Yw6pyQiyQy7i2kZzvXoKsEfoJSo2UJwyAAiNB9wip5srZJTqhpY6JSy7RYEZTLFE7TgNsrz28x5tD3UK",
  "key27": "4BcxwM47qPhGbxvZ6sPQhJdsi19KChQxTdBwN8uXViaPTWwNpB8ZojGsaVL2LyYakK1awbERdBGRDBtcvCQLu5SS",
  "key28": "5ue7RnzriGtHtBYMTyGHxKVFhAcMGdp3MBMxzSzZzm2xQKmD6CoYTGuDHd2krPvRuQaYJ1jqxDxdiMBCbWTN3DPH",
  "key29": "m5bciLLu2HTzY4pzPq1B37wuefmhCoKe4f4cDcG2BRQTCVsdWm4AvYtcVDMQcWD4XTnGYHKdWP51ug9WggiXUtj",
  "key30": "46sLJtjfj2JA4UBXUM5vn9tqdZsyxDzCjRHwt1VE34M8CPcEo4XNA3uzRwPW9APd8Y2CPK2QAd2DNdxwgaCPHW6e",
  "key31": "3ugPgwZhgZnxpdw7J54ZfLsk2AYC3k5h1mK2jLKUdSyBQz1cykB8Nf2owX92p6sLivUSj4KQUZV16zFwzxwNKmYd",
  "key32": "51pKCZHsVmnKvbnH1KudSXtRXRG3PsEzUrbt6sgo6zgozDxmihfLEPbcw1CNDj1ooAhk1kdGibsZWirSQEisu3Qm",
  "key33": "2kaAJHcRWK5cT5sgKNvadqFXajSqQX2WkSezFt2CW3cz6hygiALNPXnQnYz3gjXSL7YgpTj9PpDb62Hx9Hd3DZtQ",
  "key34": "3XUxBPAoPG5a7z2tQLMYnWrWqjEnTg8w3Qjsy1yfZpK2B5DwnyQwA9AoftYhUbiU91tBu52Vov3ywvx6kwZ263kS",
  "key35": "UfZtBZsB6RYLRdw5SG4uHVtUN8daQLNsdfCy5jpArjMLYB8rtTHy3mApsDmKRdRZqpXsH7McVHomfEqYeqTwwyF",
  "key36": "5cpDH8TRifV28qdxGa4EgKA7moHAZ4gPwukm6pTDs6bgqByERT3rtNWqyX6BktY9QFGWbPAsHDFfBDMugrB8yJdb",
  "key37": "2ZHAPin3BwFuoJ6EpMomhBR6fqH6imjJkr3Xk3nxwSRw5QGcbRkBNokmSk4WEtJFqRya3TVe28du6TKaZ9vHmVHn",
  "key38": "2p9ESbNYKAWrfhwtwtfertfVznLZUaxwHGQUjZ2KFrLg9XJUurBGxo48XqtkoAmTzSRJ5Qk5SFfjYM2E8Dz9Nqf8",
  "key39": "3FboxvDW7TLYjnu6Qbs2xokBJ5gmeSkGj5JPd7h9B1LwnzQ7y7oWFWGu1BkqzUYigaVystxXKvnEeK8owwVMTjR2",
  "key40": "RBXta1hiHMM4LYLUo5ZKd53EtmCgDScu4WEEKm5LK8txLbS2Ea3WWvTibS1SL5YsqQXHSfArM74FubW8ynmAjUX",
  "key41": "VbRHrv9z7HTepVkQfn1CLGL8CjEPMCnFXVBkxLxxEiANDHEMYjEkDdTR5gmYnfh7PzS6RKmTPqYKq9NhrRyJXa4",
  "key42": "5pjk6ZgN4yeoWCz4UbfDH9bGaoqnVdX9hqWxXFUQyWVAGkfbBVxjqXGdiKf2hYgyir3SWFk1YbVwUEJW5SUuER9c",
  "key43": "ZJnLcZRC2khRBf5t6179gMK49PdD6qK3cBj9XJS2vcGRZAt6zyKJC14EqLqnH1MfXvxU9zxRJmZ4afy7dQcd4dn",
  "key44": "3aJVJAzdFG3dUEjt54AmSqGZDFyp2jhCzh5VnWY6eUB6PcX7jdjMRhygyfqvtjnp3xePY4JuiZsQU2uuy7dxDoqe"
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
