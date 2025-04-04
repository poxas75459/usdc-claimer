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
    "4kwrdMTakocaq5HSci4FKieqH5wg2bDn8Ep3eK6JsqumpQAoNVapRfoVYmvShmFFng2Q4Tn2KgzHKAPDk98ijVkC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mpCC8oSqBViSajh5Zd47nWHqzsh2BSgchQqgicRKU6udE5tWmQJq981S8rCYd5vq6r9hpqR5eAjhGmJuknzSLaH",
  "key1": "298V5u6zAZVFVZ6cMbkc81AffRojkax6SUxRBS4f7hUcMj28kXZVLKANgKwbz9NE41EDQfDZB2JCv2g1jhqCGmXL",
  "key2": "2hdKpUecH5itd3FN9Gx5Kss6iqptj3RWhG5G4bzxAMa9HLNvdRqprQGTDFDqr975tPFSNkphUmMkk7tEFoi1jS3B",
  "key3": "3DTqoHh1LjJdv2BV6hrUz9bFe7rrXyFU1bvDC8uGXUCtzFT8ir9S3k3MSDH8EwTHpr8vZbjnckMd4aw5j79SdJ4U",
  "key4": "52ehFAUqLxZxfScaNRwCnciBKaPJ3kCb5JwsYr7ytQTRPk8n36zKjLLYnzFooHnwxLwUmTpm7yE9jFLRVWZPE1yF",
  "key5": "3MuV16T1NT6b8RjMG3NdKsYVmD7REioDWBtVQPp4ZrdZJzZWWyQSwxRJ7zghUQRfCF5SsCRfgLAjwE9d6Y5u7J9f",
  "key6": "2LJd7uz5Ce6f3kVMTZ7E9Fg2mrM4qwnZYj7ybF3a4JrKPJzVD4t46RkgbocJ4V97bTnJoY9XuDw8oU1P1yeUvcXS",
  "key7": "2aBNZ7S7dAU5pef8ENevosqf4RWjoQgPD2G6dZF5rn9MQt7HqnFqXh6iZhEZeHQ16ncK3JhR6NEtVNrCkRUJ5Nd7",
  "key8": "pkRasA8B7DrB4dASDtxh67U7yLuEzHmMgeefA1TbwZ6FpvTYrrsqTwD3tPN1LqsU3EArgtswU7R44ME8QZgv5CF",
  "key9": "2htGdCAhekGqxQYW1BFZ2V86hhoXdj261pfSdzFpMtabXow7Ujr5rfAVr2LNorVfdB77CRBVZf4cTPQs4fkQQUX8",
  "key10": "2uyJv5JHRqTcC7o2ofTLjyrHnhZc4T8tmDrA9RS5tEzepv7mhbrFrYRfhsptEuJGPbY2FpxXVjFiHVBrSo5eR3DP",
  "key11": "FdkwdBoTHLVornHV9hE2JiV2yq6vdCvSiYeqdPCRz7RXXA1YWWxjbwd56qa2oZu7kBiWQPeTVfQX3Dc9ZFK6eWZ",
  "key12": "3XYpZyMCSJoAVwpqEfTaLayy1LM1NmWfR88Hk6bG8Yy2nFEFyemmewD4duqBGrNfsy7Ggrpy82dL8wxQZzAPi5ua",
  "key13": "52xNhvjyVHknkkd7zZ4YJSTx3tMqwXJYSvBg44M6ew8DpfR1Row13TVRDRr9g8LZyDHFvosuUxtfdF7kt7XvGjqY",
  "key14": "2SyeaA1FjU1yX6cFTJ4XYGAndFN7u1yTWHZ9UjPxmchyVpWr8Tt1bd2R3CCM78W3EZSTnpUn1CiphT6ixc3kLfkC",
  "key15": "4hArx6vmTsdfrzZpLASGwJmr3emWetTcC4yTgBvxFXfKsG8S3VZPv6eY7UVAa7UdNppqwApWKtiGLpVJAFFbLDM",
  "key16": "rh2vBrsTHymJTLB7J3ghbC8cbvCASPcmm4NFrJEaZukB4V6uKdUFBfk9QQQtS21Uqb9cwh7aEPbRcUxxyfTCkEp",
  "key17": "5rMrjFJ2pudBWNTEz1dSX5FzB3jXwneA4Mh4wr61acjyK6NhdvjUQ7qkq5uFoZoJ79NWKEGqC7YHLctBB5jUVG7V",
  "key18": "3Akn8TpNed156BgV6BkzZXCGrd9jLmegCSJSKUEMkTzYNVetijaC6Pw6npweA4T8ZkxVBVp3DNbPEWNAkzspSHHV",
  "key19": "3dn71Gt6QnFiT3Pomn5R5c8zJHpye7baZpTxu52zcMZpSRkTFJRjcxHLYjRL36C8ecqNBEkXHqpEmTgkS9rCbRdk",
  "key20": "a58S6ZaZt6z6uu3o6SD4XAXcWCRQrtYGLJT9WTQ2iDWZhLGWyb62erGyggzEedCjN44TpsLaWom6AvBynZvh1T9",
  "key21": "F8E1XeQJM96F3ckbWCJ8wi4juUVAL6tgvUwpY8JgQRWdkXBg6eBUk4emGLgXniwJB7DLirkMRQ6CvMMZy2XW6Es",
  "key22": "3newDgF6StR1eH645Fxz25H3jnLKq9bYV7xJpQFKYasp9htZgr23JR4UkC2pwDEkxyhpo23W6CiExEyfsvVWsPD3",
  "key23": "454EGkvghdEJXV9DcLw8mteft25Qnnuj9zYmFGdbgeygbSYsyT2Aio9WRMFvb8p2Se4SX2KtYdGb18EScrvo7zrA",
  "key24": "3X9FgPLfxvZNFwhEu9bxY1vVAGA6361XN4LXuogi3Af7sZTJiQcEqLBVNrmjGp3QNrr8sDUa3Kbn2VVXYDrztVwH",
  "key25": "57GGRwmxG6m2eGcZA41iCNj7LGziG7Fj9bZmGPCyo3hRCiAYtYpXigCgPtgZu2MmD6p7z8WvXdaSibaJbuRqCG1H",
  "key26": "2165nuTNK4cpfDNtmjuTEq399LMBiC1ir4BqQ531ndYXD8qzYV5oPqpxM45wKvtf3rpFcm9ipSmpQ9tiuRopUQP4",
  "key27": "3a4uhymjhHvb2wFNwjaZusNciP7aRDQz7fh7nhEBwuDceeZqCkhZCivckE7zVvmou8MDxxpxCrtfiWKFJyLCi9m7",
  "key28": "2j3YxiRQWsduYoCfvyYCKCwicYuQo2efgG8XyYPGt3tAykWK1zDciHCoNPoXt828Ykh5j2TfsCsLUiUUrFkB85LC",
  "key29": "6jvP4Ub6oYEtxp7nvKz78KTeYzYDNH5XrwCnPymTJvMWB1ow7XQTiz2vKRMydZ7HU6CemJV2Rci7pUe31TJ31js",
  "key30": "2HePoARSZrL22jx5GmNJ9KazQKiDtWyqazte51rmMcbQ6Z29389eaS6iufHRDPLX65j9C6hfkhfZX6UoX2PcrWt1",
  "key31": "S6RKJoXF3y2Y15uDPGQNfWVZEUoD4ZAi4FhnNLDmyHGCkFzyJRf48MZ46aPmFUzxgunQmfDM4pLdV3riHd94x7Z",
  "key32": "4e6gqUGsrL4pvMEUyCK2A45tHgcWqvpJN7hEpwxgfYkTREWDv1UEP7eGrrfxsJYwcJuc32CpDsj8CiGa4B6c9yte",
  "key33": "24aAvTWb7eVCwQy17ueaJJnqbJ1kShzLAGGNiTtW2AHVZVBm21Z2hD93YrB4D6u6F7PQSi4AcGavsAF2WzJwyMCs",
  "key34": "2NvQZUP1nWvAqHn1ABYBEMBoqvMyHb8h2xKrhniJMYBDQ2MDHVH6VY2mCxWPo4JQMZwxnzAeBgs3Ew5GpHcdPVtC",
  "key35": "5jSzsE8AvJYZfPnU7tBGNmXGBHZUmqboJq5jHvEmNkJT5sTXwqMyaSRUDfyc62zj4yS6b4g5mJVTAfzCdvbqymcC",
  "key36": "3czb9FM5jZY461xY2C4qyQNKCn1KY1nn2DZmUYvuVP1mm8zTCasRWeGCC1VkKY1a9Spemkr9xUoer7fpDsmuoqrK",
  "key37": "2aqbarbeq8Drb94PKkPgmGNuFrqZF3gH1ahpo3yxtZKpMc7omg3VuvnYS6Vr6wxSDyfVdvpn73A7Q1U9pgNCsHHV",
  "key38": "21fRNpKrfKtDfGswCUipm3rrNsT1LRwy9KZbJZHwWAeDKTD8JCyG25yhDvZBArFLXwUFXBnBE1sjKUwD9KipD3bD",
  "key39": "3gQwc9o1qHrst2D7YQLabV5jvZGj3NCVsj53ytgLV1AaGdr52ZQrkjoXUsDmntkkUJFTyrCwNbVGFF7m7bCaKeQA",
  "key40": "58wNgMtz3dTuSrEq9Pbm5DoPbz8sEzFir3hb2si7PEQQHd5GSktPnEYtUqXhoUet8e1DqiyrKpqbTwWLoz46xpAG",
  "key41": "59B7o7svAukhxW936vvY6ngAMGjJHnRjhvwLWANYiPqNQaJBpo7jPKDAenJB7LxDKuXMZuaDSe5Vs514Lr8jxY1s",
  "key42": "o9kBHoEyF1bsYdUkvkwZo8zx2PWEDKpi1E7DgMTz7HJDYinWLJ15NHZbr3BdGScR2NffVMdpiP8j4bgTDuxtEXd",
  "key43": "J1b78TvUnWYvyk2oVVs15vLktc5UVNJi6wsMbmEaEhSLh39i9panwAapQ46uUaP7hJp6CgZjrxGSejaUPR1w8c7",
  "key44": "5HKerKbk4FjagtsqpAzE2Du3fNc5hrHCvmAjkfY9McrQY1UHnnyEbiGWLuU5eZY7M6v2NkAMpDNRMoLTUkpsDU3m",
  "key45": "3b1HqA5269U1mYjyqfCuocmCVonQPWmEoFjcYDvCDvvKy4WPu9bvgmXmm6bBXQEPc7AKj7guLfvmGXhd4ivAeT4j",
  "key46": "3hN8VaZMaChcZEv1SHrqZDzC6HJPMVWu93Q7boNb3voZaVQFsjGmjGmor13rJuMP8cWCT7q63jPhxmCEtqXcUxiw",
  "key47": "3TsU5RfNEMu1EcwpfawGtSooFmomMkKKm15HyMQCKnGwhpnfciN8zoo3U1R82prMDDXwkUg3hNGXpryvwtQH6onX",
  "key48": "KmUPDxKvJxNryQCfvBdvPgU3enoDQiZMn2ibWN5nX6wt64gQ3KZUWiearccGo9DJXsjQzd62nUCg4pQZ9Pgh7W2",
  "key49": "3DVnpKu2RRT524CyK5eGQcVP8AiecExq8SgX8JgrVsLduwtUEJk57z4qHzfRBsUwAipoCB3Cwn8P6torsXBmoTG4"
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
