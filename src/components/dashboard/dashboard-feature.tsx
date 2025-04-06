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
    "3JZLZwpLsYfCDJXaAwqK35jtKQbimvNRGXi2JEMLVXuBmppwHHPu9Rkc1vnmYtU6RwFcNeLJ7tbcuiHNi97PknsS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DdBWmV9s9CQFgAo4dPbHxntHLzyTrVkomeR5TZF6WEBQafGV6FEvayBmZJupd6yoNgZV1eFJ3LvV9JzyCYAD4wy",
  "key1": "2zYmLCgsAj3UE7Sriedc1gM32aK5Lz2rwh1PEAzptZP91szAUBV2tt3FxLSnW3Dq1ji9TBF23SLgayVAvf3TTVJ2",
  "key2": "zeEudKGSPEUj5FxzHy5y1SvxTr7dWLefBpbujJor7PnVbKtDH4G9KyHnvPKXCNFcr9mJojFKBUibRDghREwmXzW",
  "key3": "5ZTUnVYCBNwAyoeZ7ZdVd5eCZeWUML2yxeyw6sSxhmVcVyurS9HCMsByvkBLMoPUNFUvkq35R1k8vmKm2gjQKv82",
  "key4": "41iBn6yUJCKdHRTSox1WLCpUkGR1qjt2zLC1WXj87ctgysfYycLiH6Mj5uFjqo7kscHtoPjssVaVBca3wYocgLmd",
  "key5": "3hpmmE1qr5ghHnkNMnBMBXdBpmYgePknyfJAT1WNu7Lni5cy63CM3WFFAqXjEiLAjLivtJwR4LmkfZgdmgrXkeSF",
  "key6": "c5SY5HTWpXa2UZGKSyV13FZTNU1vcFFY7Qn4t2AsBpF1mju1zZEZ9dTgHukANbcNgNYB9RSooD2UHDmCnJcCbuH",
  "key7": "49wjp6BvhY7t83hYaT48UKH1rEn8xeQwSPAh1iHwnJc4Ao5xXmh2QrpUrZjUqmTqA8Ji1kM2oC3ZjCUprMtxmzs1",
  "key8": "panYNRkvgVnCnBDdQWhi9grjNUiF77iePTyuUkQoLLQ6DkAHJXCP9AMGA1ZcKT9Ee7fyMFsPvKGt3RzopJEePJf",
  "key9": "5fDuNLfg36wWfDLfh7EhPdb7sNNyjKSDQxZZYV6Qy43o7537XDc9FDuyr5sR8CPHHquu637ZVcMMW7qSoXaH99Z4",
  "key10": "5tEknyuSUkdFGyYHakrVhzBsFiNEzzxUWrFu4KTPuzrMxFujXFiPRaNvj6qdijSV2EaRcByW5sP2zs1HpyFsXYQc",
  "key11": "N5rEMdNYuuB6MAF4CFccyaqfnMufZihPqK62SGUdBpQp8SScxGe3rJxsKvi1FZMbDhzXCVprUC8sNR9GFqdE8nq",
  "key12": "27d3s7NCiDUVXMmZQ5M1sN4RPgdEVBwVZrh8DPPLRU3xnquAx6nmaLpSxHeeyh7p7pxceAPm5Xyeej1EJG2dy2nL",
  "key13": "5hY2s9ZyPFP5CJ3cZJ2tAEQWwHN1qGN23ipKdUH868DxG9mU3qzDHNQd7XrE8VsciRg24THaUc6WnbuhA92CQsG3",
  "key14": "w4fWVQXeu7xJR6sEU9i3PCkAcbGpGYNKbQUSzVkPK65FqcBh5oBQFny2DCh8oFLCPYsKpiC7SNV2xc3ZG7ruPjW",
  "key15": "3nMUCeb8UqVC7CZ3DtBqqozFy1xgG24d825TRRafJgFdCqbyKhCuYwzttiDvqRdZzguL9XSL74d5ePTH566Ejsg1",
  "key16": "4sbkxxCGzNdad7kGVsjdo8VK3TV1jZAovsRSUd5k1W1fo14AuCxsahLpRekRWKzLhcRkRqqRQ634RpMxzUKwi5S",
  "key17": "4Z85U7VHCQZZsJf5W45dvEPQKg3SQtSSBAum9L3B5RmCRA8L2UuRdShKSoaWocUpq1PXWSx3kb4FyKTS6aocDhXb",
  "key18": "4LJCgadpPZun58bqdBg21w34EuBy9SDV5wg5XuHdYV4iSUdb3KfktzbB1Ds66oiD5U9zcr8hd3HBAfvSfJ1CScRL",
  "key19": "Q6n9XvHL8Ws7dqap7de5KHwxQeJauc6dPCoNZfUXScVSBfCh94DVMz6FJpGLx8yquchrtTweEV8Dv5Pijnz3Fs2",
  "key20": "3Untmh6knxPxZQsmmzDq8AsgqCD5ySG6ZYzfVN9riGoeFawMcv1Zy93vExuSj4ucXVVnxrDRbEJwUYaa1aVMhnwC",
  "key21": "2xCV5wCvzEboDCy7zWQeBmPVtdEtHtEn2BWC6NCobgkTRbkg2zD5cCXtnYXvcHhzDoUUdZN1sZgAeovqMNmeBeVD",
  "key22": "5XBE7bJv9Qzm921HFXFgTUhGggiERnoXsUd4Y6ESCmjJZmutgwyyf5TepHLG5Lh2eWSXPQLApmekxiBnLZDaMtZS",
  "key23": "3ZMfAJYXaMt5YppzwLGXmCH2Wyf23bkRVNomQ3magZZtk3SNUHq7UhcuQd3RzueHKMtUSyqQwPxqwQbCYWYBzYgY",
  "key24": "42KdUQTp7wX5wUdh3e2DCkyRmV88LMZWk9LVUUS7v4nNgr2PPfugq2rz5eJkLkC8wEi8YALaBectEJP9PnRgJVUc",
  "key25": "4Zc3gYCUGgwC6L6vGdmB8H6bggZvnR5iM3PugcEAtHGPHUFJBt6RHKsJGJLvD1eF4YjrRkJWegvbRTnTEjhwfgUj",
  "key26": "4i7GoKMxMLN8WBySTGiFbbBMDsvuRgp8WuEXra8jqq2QNtwWxVNSUnGCwrLUsTcTBLJZhZgHHK4QEp8ri6XEz6sh",
  "key27": "4vEdBjANkD7hXe9Pmes3fatHHw5VtqgiDM94xMmvYYG3xjcF1q9ynYrFgLcuSYWQHDfVKskDgvcmwW8oCXnAQJem",
  "key28": "3jNcAhsow76fLPXdEFZHqRzkiNuZYSJbhFrCgPU58A4aUhVPdmixsNrGQRbyBkCpGpTaVdxBbW7x3oLTM8CRXKKU",
  "key29": "4wkV64192qNoMw3PJ5bwn6CfpB2nc9zQppG53TfMREVCWrGiXEWDUGoLFqKntMLyThs62BdXJDcpM35dghzauADP",
  "key30": "45QYaYoACVbxLf8wHxad6GkTUKk9fRcXwUQkfEt2EetDPKFdfWLoH9u9vNJN1RWBiniJhu8VwBtDhrKwWsoTXhoA",
  "key31": "2HKjZpaYx8XdTgwE4teZeefk7fUiVWJB9gHFbUNB2krvSQGinLxmDmFmYtDcHhDt7o4uBXEfsxc6MXFzkiFquKwn",
  "key32": "4EUV7rNoAxhd2K3J5uCsSsg4j92jxz6TsS1gE4orJEAizQqC3v9K29SxAdMRhTjRRsnrKu6uvZTqEziLUfRpzbiT",
  "key33": "2e1qsQL4UNb67S7HgGyQ7g31LMXoHv4BU2dCD9oiUAXVcSuiC39Km3C4zht4posaHzZ63hdHZnQx9sMYrcBdULNC",
  "key34": "2eAnDVzpF2GwEWtNDPnWSqXyYoXfKfXR4A2oAZrtaKYsvkcSorw2vhSC48YDRMK3dWWDoncR1aSJ1J1hb6xBRvHd",
  "key35": "5GJoAReXbgwGeU94fkULGc26ZFQCWCXHLkJVkQLtku2v5L8jSxw4FiGH9JQMfUyADS8NKRXWfv7naRGLJ9F94jV4",
  "key36": "AFaQNbdfvj7vLdJ5qXnWCTmzuHrFLhpPguMpgR6vYZqbDTM3S1BvVE6eriTTziW2Po1NUA76D6LwUJNiL934BVa",
  "key37": "5dXww7fKXGfASqDc1TVXsyfMxmchHf8Q1YScmNghiAFYFS8rCLL5FCTLZ5nagnjpa2CKWzqRSPUqxFTnyYX5ZckV",
  "key38": "3vj89pjCvGY5i6hgkBx6a5QYVU6x5QKaj72nsMyfDNwK77f8qYKr4XDD9FHxoxnrSJ9U55PsE1GRMFBRTVt3Njej",
  "key39": "4BsYHKEqeWmw2HTSVLAM5G3xypgwSuyg2PYhGM25h9XEQfPrQhh2khuR6vZ67MsnSroBDRHVXEr2a6u2ZEcqEmxi",
  "key40": "3nVCgWuaMLZQyvkLmkWj8H9AKXS9VZPL1UVKh9TRfrPRkA5hjSWWtFHahPV4qu8t4kx7q3KuhKCa5iMCbN1quN37",
  "key41": "3tudhfT9iimwFCHypxHgyYACcDgcjFCAUGR3nwiGoQKiYR6xT8oQFJCsAAVjNNM6Mx45aXq6Sn1MNFcvwfd1ceEf",
  "key42": "3Hn8egw9rcjzPceQd14E6d5Bzk2pR77kNGvvroV5irtDYnV6te85RyGuHB3BGH7bUimiSYkU2Yus7ZYafgKqhjeZ",
  "key43": "4BG8rUcXdghZica3ut7geQtUZJmJ8iGBj7wyy8AYJgHWmPyBXQXMvcnyCtyLy5qGQA7kiAJ4Uy1NxBrS7WnWEDiM",
  "key44": "42fnCmKpQmwjb7AeaGCndBi2yqnxEDTFJPqbVDcTZVR8kJmr773iUGv5E7zE28ogEwcr7eGdGAW5mk2Y8wDtvgfs",
  "key45": "2EvarSFoA1EuGk2HLCQ53eWDL8tuMKspvP3uEuQCC1CKXJ9jiu2QZ8kD8M58ACW1oUuLrJiwWz16iQRXysFSErL3",
  "key46": "2LgWqCG4DBsdsf6hs1pUCe15DxWDfGNHKeKp58Q17FgZCjjbexGBfTtz9JiQ1L9qSTcuHu7NQ89YuJoS5zda3M9U",
  "key47": "4mVkQ1WJ1sov6UsAypedSYjahRe7GLtdN4Ar2JAAB9CQurcrAx1DKaHjftAgePSJJphgckGGB2hztLuGBmc5hsEk",
  "key48": "57gVYP7WK8pLLf5e1Pi55Fwakh2NRYJEESBioueYdUs93rSdr2p7NcdiS1C6QPXDx54CVzZiUf2hXHEihequCn3U",
  "key49": "5gZKNxZUJMs6h8PhsKvsqg3uNiMVV4s8w1uu9votci8Qvqwjxd3Pzu9F8enH2VVxS9458NQEa15iNyLhTwCSUNLU"
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
