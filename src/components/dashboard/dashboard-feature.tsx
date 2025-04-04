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
    "dTVsxZ7SA2qMHgfT1zXKG38TDz9TvEHzwp4Qo7dXmWnNR631t298bZNbYMjW65hySF8JJzBQTr9NY36YYo46mDf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38tWv9SfBCSSCcdnv7JUuu5SncxMZSHisjzQ8xpJK9UnAEpSopHAQxtWzc6qfY1v7tVeHzePLTnMaHoEm74JHf2w",
  "key1": "3jKzHcDa7sKQxqn9VT98KpLNEBxrn8kXVYdqcdCmAyX94LuudwGQRyLokNHShFgdcHUxqeK3bt5bWg355oH1jfAp",
  "key2": "3sr6Bz96B5w8CRQBE3Up8qdjdszaQ4hYkYHeTfoagGZmaFqW2m1s7eucG9yDTaonNQs8hW6hKnjsLHRHqvBPyc3h",
  "key3": "2WFDrprwK2ns4ns3fCpbTQhMXABDAUgdq8xmi3MmSgjcyWzgHps3LdP4nWGq3FYXMrz622535Td8Wh5xN1Tpy8vX",
  "key4": "4RT7KkmUASrvsG2gf2rVsyvgNRGpRvHcNZCibpJgd4kXErwtQQxqH9WcJdUnYqTSRQnDoKxyDKTqQRcigP3KH3a8",
  "key5": "3cwsWgnvJHa8At31TboprZdGWsWuJ3DYbfL6AwoMzDUU2CipqijBfZM2v51KZf7w5ptw6kWGbVDfeNnvwLNL1rxc",
  "key6": "3Ka71Zo7U1q3rD75MTz9TcKv4endHwFML4b9MUNu8EEQQXfZcYQz1j6BZkX9Ayk5uw1L2UaBHj3GnBNB1oTZAhbk",
  "key7": "2vZBMVVDcuy4AxyeWKLYeT7j5u4djpvUzA9Q7sCzHbzYkEBPv5UMesXp1XrPNCSCUxTsAh32yuuiXvyVmHLePm3J",
  "key8": "3zS22wDATdMu6R2kqBCVPT6nHi2Ho7v3gtxZRc5wqrEGDZN1n8gWNwJpGynUSbDfRSSzuaFksDTxoZni3tpHDz2X",
  "key9": "3ms1vmZJE3QUHR5BMxSBofTw6gUFKhUM76LeLEVkyiVC7Pbn6FmpzkJt36FvjXWyoS7tNodpA5ndEKwUypgXToun",
  "key10": "4bwMJqb8k8fi6sUVTwtZfyzuvgMUV4yjYTsBWnSvW4KocSUurERbVZGFHAjrGgdE5dyWSYr7mZgeXZ9sg1g85UT5",
  "key11": "4oQHASZozDg7ELGCVKqjd1UYBvkPgvmXTC1sxvcUzwuEF8BQBALRqyThL2jXHtqeVQgJ42wZqwuW469LCVGtrQJk",
  "key12": "zChkkezMDHcsu38kejqRMFynkRkdbL2KkmQz2dqYbyAP9GZMJTdo7PrJs33afU4KGbztnstxeYCiyBNX7zkC6Fe",
  "key13": "wK243k89uFXcv2g1AjPj9MiWCQ1f24Qff75tTxGHjLjgERdyv5g6TyNmudyaousafRUzunMHAxgGKnjCuQuk28o",
  "key14": "DjaGmkaAMfCTXnXgusPoT688EeASHL34EMBN6DMWq87JRwnJq6YyZuHpAYbnjDMdf2xbfmJwApkmqPxMi2maYdF",
  "key15": "5MyqjmtStmpCVcqnscfG1ms37hVmaTfpyEJX4riJ7XyVpMWYMAqbnK9V2axMRSPTCXutS77cqE4zDJAastkzb6Y7",
  "key16": "4bA9VoLXdWzDYteehcyLTkvaGCgC7rurCty1QmEghXpxfwcCATNsLSawwK8jAHDzSKF7yTdPQN45SEM1NuC9bvzv",
  "key17": "4ETVh5fRV2PYs8i3GGVs3hfa9DLtRqWVKyAjfxTiYkW7Sb3JT8wYciCDfQ6Z35Fwz32YzNCh83JFk55MwRuPY2cM",
  "key18": "4mjzq2UrtAPmPUM1M2AQFazs3se8E5S4De8o7TQYHYGTMgGe93o6haDBxgC1rvUakSobnrDa4XWhB7N71yZXsecB",
  "key19": "4HpAp5yJ4S6NEjhz5qLeCRxUasqhUsuaMCFC5D3GUUrWaFjxd1JixZdB8bQ6a46cU8hYiJ8nuqPmG4FFLgBa5XGC",
  "key20": "3k3AM9mSVNCDsVwGnAFK5maThX2xpzuucqX5igEGSqinYwThPj3Wdb16jVMS4qTHUrAC8rDskBkaWKfk8yYf6NND",
  "key21": "3Zr5FPUVStRDtKRf6FJA7nWLnjBJKu74AuvLzurFtvQXLNfABUeCtFwTd8aGub94vkZWumSbhE4eDhWyc13XR8it",
  "key22": "5oygfEkCXTNePELmEmLTgWqa2hzkUFnofhDQ3qbMb5udPMhTys2GF4tc3u7V1LJ2LjKrZnEYHgbiJpHG3BGVZVhx",
  "key23": "27751JgY4Bp3hHRtorvkwm7SKiXPKyg464XcjxLnLJgfGBCkmwnRna2BRU7StH9EYALxqQyDRYAasA9ryVn9GyYD",
  "key24": "4QMKnGaTHee6LBB6tinieGz5FBU15axmQBLYsPcYhZ7JEraixYYm2f8mRmF77JhSAMjGVjjg9jKNwxUxEYpRvhvh",
  "key25": "T5XuSvvE9bhZDoeLbUsTr1aoC9q2sUNhR31yphpiD6x9FByDgEStoGg8RVKfPzyHV2bXSynwtDkK6Tuvqwfsuah",
  "key26": "3AGVaMFh4ugNM8YpK14GsLrvM3vioreh5gLK7HVxs8GL82g76p3oQMQidaJw34iX4cfhP95KcEZ3aR3HM7uAYhSr",
  "key27": "42KJBFBDZ2rzCMe8wfwFxPAKznaEE8tu4fFjmauHJxYN3A4dKHgJmnuV7mjkrvBKMyNmxDkfC7dKEerZvPdMERu5",
  "key28": "45L2sfuQEfNMQoqrCS5ziSmtaGj4AAHy8wgjDC84Pr4MAiuzj4VegpXWYcUWxDciHdkHaDrtBuHkiuHyQ41tUqzH",
  "key29": "4ib8AqsDievj5BgGqN29noLcuJ2JnnsxDYD6yhxCASD1p82MPWZ6E3JzyMdh7yvpeKXwKijPmTAHXtAp1EFpu4eK",
  "key30": "5NHJ2sdx89R7BV8AM32RZTjhPpBbTYcUNqhYgEPAJJLZRUahzV7zjoWQfkfTsGjxSqLMiuTMy5dPuJfXUqFKdF1Z",
  "key31": "HQrB6EUzqTEWm31LUuZM7vEcyKv5GbZV9fAowBf73qwvDBybhMgmBd1FGcnTn8ie8jnJUKtv1t9PhpfF4N8KDWM",
  "key32": "CVmihKJJZd45t8e95brcaT7GqQwCY11PztTgtFvy8knj9WAYRAySvBFxdm7QdLYuETX9ucZkewBWU9TymfD6Fgg",
  "key33": "5zaG2TmkfmWqq3e3MWbMpHvWfgcG5zXgnLwRqvTiAtY7Loh9egnzQJXXFYZ8BSACsfVYbhTV4LCEfmEkjvFeEz3o",
  "key34": "4ZKDnFRdvWPmFU1gv21Vfs3tPBwqnfskEUCpudnbgG7f9rJP46AP96WsoVtwAzQFLGyJVs8rc2MbJnf5ePKcY7Ju",
  "key35": "4NenJkpRbyYS6ykmREvLV6nYiy9MLb4y2bV9geSUnnN4tTtibnXqUpZjxx6P1i1TNRekeF5uGst3GoPGvUx18ZaT",
  "key36": "2gFLteAd6AjjwqYSGSNbmaovVEqDr4SMWd5d9CLGndDgBSgaK7T1FfeDKN4wtrPVQ53jr4Cr8HowtzJc5NLrEEfJ"
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
