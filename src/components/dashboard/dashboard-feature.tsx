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
    "4EritMqHpffVNFZcEvig7gQcphv49XHtjv8EntdD3vHN2wmehcnJnTnTPR2s7PGqJyAcx1pKxov1feDaYLQYEpNR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uALJwq42qrFzhxc1s5c35tX6M5UZx1gSvufpKzLGBgeXB6xrEjdNGWB2GiXanVn6sKHhvExnHbTjupZk3Pz2jrJ",
  "key1": "2nmrGvxfLqmG71MidKr8s99A42BZ1Q1FjgZrtBHjowsNUXhuPpuxrtMuss4C8gkuMzbDgeTeGGTazUtYXY8dR68Q",
  "key2": "mZXnT24ccbCNzzs4pbpKyWv9rwtLRK3SDJDWP3BPjN6WLe1m3K8YQDQvUe9afvJ9RGE45U8ooicj1Uwgrq6YMtf",
  "key3": "51qYYzHCaMDTAZZa213ynkcNhrRwXSSfynrQ4iogSysqCozfZUKBq3gSsCB5hDgGKYZKr6Cm8Fe93QATCfc4Sr1R",
  "key4": "3F5xhUTqK6D2ZAruJrSr7qu8urc46nF38fkRgkfotSbTEnfG5y3VJHUWRuZsefEZdZiEx2GDgtXazbCfgJyXLnyo",
  "key5": "58keaAGAnygEEioxESG6AVSZfKB6Bfcf3XdmWWVJUJatLi3RCu8N6AYWCFkind9bxuq8a7wEwAxbDCezsoWiZvio",
  "key6": "5Sy3bBa9hBiaKDtdzb3bc9RLP4zaE5JaZHUchckZDjunoMzzgL2V49qT3vDEjQGcBEQLXbQMR3nGCZ1nR8TaXrEu",
  "key7": "4CtNvkhHUjBJ3U75VYdtxBK1s75HdDmGipVenAJJaKt5ZqoUuQ1SHymo9Hh7wYU5Mgk9CD5AVj1MrbZA3KoqZJYV",
  "key8": "wdCRDpKvt53LUvJcQJP7oGQf7xkJinZkVMD3e76kfKrtnWJEUic5MMvF1yZFpnbHy1ZuCiL7yCrHyUtPVdmgJxu",
  "key9": "4MZ7rm26N8zzkEicA8MtXGSzXJHvLyjgXD4yfBKRDNf17YdtBqRr796H9iFiJV8RZmqXwcB1iaNEFpwJc2tj1PoF",
  "key10": "2WfKRivihMf5xqkcFRjNHnDXCgnmenBkFf1Vb1VSU6xjpiaE5SG2nhRnWaReSCbfdnRcChNAc6YzpknRcJVcj2Er",
  "key11": "3mxN1pHXu4Muv2C3gBXTHJG4noAWQM4UF8LDggQoMTeiotGAwavJKXS2hkYHdm25C6qtedXwHtudzFW4AuVF5CX8",
  "key12": "3PevVmWgBqdmbsWXVXuFxXzq2cMB3qMwyvZiSbMjigDhUkxrTyhe43ZkdW27wmzgydV8XyyeDPypkigbtbGU5H19",
  "key13": "2gZmtNBwyLNydPbdxzmABgUhiBS4jnKLrQ9VXFYHWmxRWJM5BNv93bHwYVsXK8ZUSrBxn8VwxuStCGtjxfhx35UN",
  "key14": "2shJo1dXyQjPtDpgoJrnn4kyfNZAiodvDVB3iA3S319HmtvcGmKFd4yCpBjDR6AJswreY6aUXUaUJCtp1L266q2V",
  "key15": "2uCvoMnUFojbzfPCMXxGpnVXXLoxgNMNBgiWGvZ6XhGYCt3tR3aESUcbanCUZN47sQtLTZ4m3HnrFZAbE4uo6wHW",
  "key16": "3PFyFipHMN2KKvGEdAx9dhYVrafxbibRfiFvVVTpmmSHoJX1D7HdF3MyJr1RpeoUuyppaRrdfd3snZ94BV8kGioc",
  "key17": "2GoKVGBvtPFWc4u7x6YN6VoWxEPWwFkDjFEsgvn9iFDuL2uPLF6NZvvR6hwUbMzw7m7mFQXC1mcafeyMVLbCYFB4",
  "key18": "5cSRDWkiWikBPb6NQVoBY3MAj7reXMsreApNHVSemTj4R4dRowTRqNo9S2XbVfXz3dZfeuzgd373PMJkzkM61zFM",
  "key19": "54oDZ5kLd8dAZow4j2R1bfSC1u7oKyL9nEZnGbKtsteSy9LmK1TqZSE1MvYBEhysq6ReGeZXhEpJyH8KY9WJVrCZ",
  "key20": "2QfEhkN1EZLrXaZGKLHWGLVqCn4keBQv4oRRPnkv8LzEo54MdxkEiBHtHSNgxG81TU17fc59XmwgGU4R5mbVQrR7",
  "key21": "5P5MKVLxPmiWBsTuqfMKdec5USkF167JYiZeWjugGp6shhYDkdqacFVZ2pYDSSSxqFKmwRYAfo6DgtwWMyJNtdPH",
  "key22": "5PGe5VKNrK75nU6gQtZXZChagazmfVPVzhXoNGruuvE4GoLLqfC3mt4Juou1gHqmeo8Sc7SrPkKRfGQqqRvzmgFG",
  "key23": "3uwxED2RbkRfszJR9ETY7DMhNRnyHtyDuWLvYpXHLo27qMtyETvBd5qxjWTzDd8LjBEXGvMKga5RBkm8RMTXQ1yQ",
  "key24": "4ZuTJvtd5tsWt728RgXo9uqfmHqXFQpqXzG53gjY5TvAeQcMqmzpZbUx3rP2K55yfo16f6At4g83fcAv5zJxgFRX",
  "key25": "4fiNnB1jfpnAewtpyqbFyXHzo15jHarB5wqcUgSNTtjHsTFJ93Xa2vDkekPBV5RmYPmb6tRfYUjFmZmFNc8gj5pv",
  "key26": "4knVAvNRMCA4ZsyWzhZnam8Ziovg3xuesfKkTyGrsDfWLnGJ8ZzUbjLAckAhCSzpLGmhBUFa5hcPv8wFR3PRRoaJ",
  "key27": "3zqQLVrikiYZyy4nqbNHWdsrS9hEstmQS39JNUYhwXTzzLd7tiDVm6BD29YEyz5CBx1sb6kvYvftwXMATMJm9nC3",
  "key28": "2ViaUMrXidpctissE9WGqddZBdQ6pydN3A552AU6StfK9iecLByc7qFpGzee8SnUxa5GgENhdPjvtV5Lv4c4g8oR",
  "key29": "UBjHNEY2vXZDdoubEm9yxE4Yiu5YMV6akaKXuKSVKvMB3aMEC2HN88JLd9wauQ3BgLxp54hWTMeqHgh1MNxR3ck",
  "key30": "3wGWRDgD3dJR2SnEnVCZPC2fEFzbhjpX2mbcHWky1MsjQ4asGMyzrjwqrttCqt2nN9vDBpY7n7oDTDo49yw4Vhny",
  "key31": "5sqYnzQgXTYv25qwDvW5yt116t7S4VyFkwL3PRJ5AUGRooZZHx78cMV8FQikLYnqyw3FTxCT3pzPBZ6ZZhPnGD7K",
  "key32": "2LnAgzhar2xVodj1aPr35g49Xynbv1J9jTrhrfBQZHdnqEbfuaQa4K8iLFyrowTWtY95RHKzmJNCnnGdeUT4d1fi",
  "key33": "2ZQjb7iz5myjjTEjkfDbFQWJaGF91SbEjHbPAn4BrkkzXsF9my59ygAXgwSk2pjktvDxZQQSGvmWQC6LDjAQRtnp",
  "key34": "2US7U3NUBTet6z8CCp5CWivLePFRbwJvpfJf3GW66U7EkYUGZrUqexkX5wRnQhZNKK22bPPkzHD6YQ7RJfZBMini",
  "key35": "2naSqJ9y2j5dXEezR1swnQcwsBEvSUgz6MdcJrdWfiRAoLC1VE8joJnLJhX4dMYoVLYYcUamjLVBeW8kP9RZbjjh",
  "key36": "34TChP3NPmmar7Jko7G4FHS1cVZLGYLADfZ9EBvnzat43r2GgkW7BhB2LgPNH4ctRYzWYEGs9oMFtq7aThngG9sV",
  "key37": "5FZh2F71UNAWTa2L1XoUFYBKYU2jHbM1VYu5RSK6aS24SvxTkXmgbznWsNgJ8cm7c43ybiNPzyyuuuLkNPy4Qjk",
  "key38": "366qHSLNUkn7w47DCAgXPfBngyfHA3cXzQwv8LbGnhMnV9Xd7sbgsGjfgxUXjY7hZEj7GbZi88fTkCtUS1FzZyta",
  "key39": "2s3G3yesXBVhQgm3qwkyCQAFaWU7vnoUPbJUnZTcD8n1FfgM7Msn8pCZwF5D7TQrgyWtKtZjeKc6L2Yz3L7FabGs",
  "key40": "5B3oYZ9ix3b3fDYc6BBDyg42QTeGfBbThsYdyx5iqmXdtmpnUBJWirzvfRaacnQUMfxv64GqdBU7VeCqtTYEcuas",
  "key41": "5Xxmjeu6tEEapbrYrAhmZ86srpAp1xBRFhRAMiXJhR277w3qfXA4Q1a3Bpu3eKJUo7APiRbFfT3epRB8MFfTbEQA",
  "key42": "5x8mVkmHqp77usPrjJHRQQGQXeDR6YQcQFiyWdvzdgHuHRE9h9av2X6TNVaLwFxNM9NHjVhe3QePi8Mzy9PFRU3z",
  "key43": "FztVUpBrciVZmy44qBQ5f28Qp8XNtGPNfpzvKGp2D4ZRpFphkDN2bA7tfx8kvU6N6MDbwv36XVA3PhniwmvFtGy",
  "key44": "4sFpGQYDYXox3tX8CGwdEArn7TAPQh9xnutxkhL6xVs5CEWA3y2cKCetij1ZAkjmTJBBB6cxHMKEZtaEnkMUyyU2",
  "key45": "3PoGNHQDfcrszoVx8fiZJ6AdPhgbUx8Ywax8nm6bATNKgFMmbt7fXeYGv1Lvf4HfawEkpBNyR8UynWY7EcJmb2e9"
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
