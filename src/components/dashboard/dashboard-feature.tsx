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
    "1zmcuq1jEhSiiwmN1feSXapj8eDaDQx6gn2toRoyvJArg7PvDg6eGr8Xq3dmbGr3DLJZuV5KLcXTitnqVr3jDxU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65LsfDV5JCr2og2FT4N6n7CEMpSqKD8NmXoHLiUHsE8QmdxgRSuT473dxiMLR7S7tptaFRUDyChfaBd6rJgyjCyP",
  "key1": "3D4NtJogdNx539U3cMgBqUohEv3BBS4e1ZmXQB4Gsh38xdyZTLuvmFs6Uc9heEGhP4dpQoNKhAcCqJTzwNpChHnF",
  "key2": "49Qk45Qxg3mEefD8tAsfUYL5NEFhdBA66GfwDgdjeGfM5JEJCBTNXkMTWiTEFDRZTBy8uyjGHspXMfNtvax1K6Kz",
  "key3": "5gbrkScxrtJotyFoamTm1aY9Ap6XrsNJyJGwgAmv3b91RbPSbkX2fsF2gd4wE4QY59pRfkrYsdB3jeLzEXrA4oJv",
  "key4": "oLmWkhSFg1oN7XDt2CPUooGZFa22Y9v6ru6UtDQTtiZkGuPeVgRrXRii6mjwiEsrHiX2Zf2oHfaiTb4YyPSsmYy",
  "key5": "3w5bhtdB6CkukWcVJ4JgP2SVNfrVvSFkt7PsY116JNLFmUKPbhsCQAHJmnTq7dH2Ra15PupRdtVr4za5ZXEAKXbc",
  "key6": "37LGUCDYkgzSzQPfG2kdZFVryATTj4q5zkGoiCA7VsVhMaSok1KaBydk2SETbMZqA6Xw8t8T8dbPsFkWedFbSRRz",
  "key7": "4PXpLs4bT64JUPFVEPpkEvFK29TK6rxS2UQUUHsdrxW9oaztdjWHRjsBQv1XSfSVxVDPZX1PH6ovYrD31RnVkN7W",
  "key8": "43MEbDNvD1LCGbrsigE2aiWNyaXHAD8JbBBQwCS6MBtDDJmc663b1tWehKNx52iTawVNTesNsN5KVPojtMtGTiRi",
  "key9": "4SN1otvZT7LkvAUkobmDtzsWGdXcVeMptF23Ftd4iEaxEx8LNPAbks7VkhZC8bov1qPPXb4kVQjtv4hDaA999Q1p",
  "key10": "5YQaR1sS494fcRQ8SFWjWA8vD3yzyVyrwtcAVrebktKQpBEkSwhGUtLiX1ayfLn9yXuQXiLyJZFBDMTncrJxFe5B",
  "key11": "2HhwdeWCZsrAmuaGF3bNFGbdy6XfRD76H8t8JwVE2LVsYxLibx6zQeU1TdshtSqeXVFBSq3i16GnXsL3A8huw6BU",
  "key12": "3qrHSayF1j6VK3gq467pb96yfQ4g2Nij9kEUcXu76RvArZ9s2ezjxxYvGqoSvg6RZwwAJ6sfKKVFt9kHrxpLZpV5",
  "key13": "Cx4QEvG5NPLdniy5FNDhBXcSvxJySSu3FY8wCaaxP7N1vQ8vATjnhAQDNeHKvMMnbnSytNfY7SYZNfSfKV8UDxt",
  "key14": "4qQGDajEmbunzeGdyp1JLCigPTbwdRYev1WX2BBu7Ycts1Vh3sHBtDJCvneWLvQw8eEi4vYwDB9it7C4WtvyrKNL",
  "key15": "5kJ2YhpbHxU1eg1Hgp11i7mKST97WTvKQp6bRZHWnQB4CFZ7xwAAnLwknFBUQcfCUbtxWDswofVxt3NCH1hAb6gZ",
  "key16": "7okjyQYXXQJsXXSCpBqvjdDqLgYTKkcUFGWdSeJEN4Hpwp1yTHdLLjo2sQ5TKGvZEVzZ1xWSoY9rSgcv8Ba6gN5",
  "key17": "52r5kSuj57TCEisFxvekjwg62JZTkvrR9PrYo7h4CjSxptm4b8X5TNVg6TKnYBdfzGaZR1FKVkh5MiHGKWsB4bvT",
  "key18": "2YJi1498iVgEMZwBNUx8H1JWUdMwERhLg6Jc1N8WAd35vDSse53ZP3UHy1nTYM16WcpKhgSMi5x7UnxSHXn2oYrg",
  "key19": "2H71WNmUR656KB8EJVvvBp1aLjCTMy5U8va2xUJQ9GhaDX9BoG15p17vWmzG2SXiF8FMSxMQZYJxreLzsrsR59sY",
  "key20": "4Y82vc9RazyZGfKcWX5RqSmsvm1cEtwb2uyNU8dE6yurJNmAu6NgZ9sQmbkTVX6D7bqZsq9QLdRCzFDEkFsFNTbK",
  "key21": "KhfBcTd5dXry5jXRhgbfRp3hb97dJCAADjMET4y8K616KpV1bGAwDtYKkGB212zXMHtciWrKAtecEmPCwq67TbC",
  "key22": "29o3gWKa94HaRj7WGpNYfrMyBgHWQEmZ7LxvF7RV1FG6gxtVwTGGFiU4mQzZh8muWPu1Ycb93hHRj2NjRKeVwwD8",
  "key23": "67Kv7w6yEwwCrPNHfwAfUrYzb79tSV8V5x79KcHB2HCckP3eh6gmwA2EhnyTnXSeGZUC5ZLJGDXQTqbYTUaTqGG4",
  "key24": "5wcrLdqHkvJ8eY7BZJzvzzjx716ziY3CjyaJQ6EvhpREkDtrgEufVh1fPc6vm8Rz36cbFixc9RjRYtihKSktxo33",
  "key25": "Xzb8AwBMAHBfp66Xg8QVyxJ5xnKM7nSGSFDtmi53wZhg157rx1bgJoj6JzaE13TCYcUqnEzGmFMiCXbQZ4CkLey",
  "key26": "4q8pG13jbL6Jo1eHmgdgJ5AxsvCjq556hETpT1nBHJj3Tv1MpVeXJqVjq7fsMr9gmqNKvBSjCxXYjiUpS3SASn8Z",
  "key27": "saUiwPPJEa4fqYtA67X6PUbFyZvUr9NNmMTj4rT6GiNCJ5zgF5ELp9NGHreESijezC38LFVFrtWdq2MSERRXmaf",
  "key28": "2zWjmDJqGbWrFNYxwPmQyPC12PC9FUBE9TLctQhf2bH3KMwZmPDxomtZ6ctehREvGucoRZKxtdv1U7WftrcDsri5",
  "key29": "5Max7QSGcJtE8wpzLL3NiW6xTuqbpCVYhsRGS88NDRZhaeqGStcACXxCnEZ3virGXuHxn29Mimu7Cu8QXWn7SMi9",
  "key30": "56rQvzKCMAnRGfzGxyHYsP22jCAVUUR7mGPavE3LQB863eG6wazDbcQ9bCJERofXN8htujY6VQscob4zzXMGHXqV",
  "key31": "UwgfUdE5Ewgo64q15TnehzaNMRzDe5DzY3of7txtB1LqWn8X2c8XswShpUqcLp2AKG76YpV7HKA8pHDA5pANLVG",
  "key32": "4i2rLogrcJV55xCC7f3j1qakL8WyiG3LTircAJkh5omKr4Uk34aeokNuaXUy3ArCRASwLSPXmCc3GA4B36wevm8j",
  "key33": "4txLoUuCXqjqu5yiiXQyVFFSQavC5eJ8zFEfcQF1FCgU67jxS5uHM7APRKqPWRVwqSewv2GdDAFGXM6gtER6866E",
  "key34": "4Gg56ToMAmh3wuzyzkZMdrt7CzYMG6sXWs7ac9jEqcs1GgGjLH2BbGS3n3MeWPJFSc7XiesKRg4VTA3MGsTSGi2b",
  "key35": "4UgcA3qKx3MjfqwgNC6HzqkCX1wKWFWTbwJJ2VnXbHqyHq2PAQQrf32427HWE8ktvmUreQpJqUQ3NkGBGEYxXJYh",
  "key36": "128uVxynaGfDgsLfM7eg9jCfBwbw85Wm8QXVb5KXnhzgvufkhhJyaEiTKBKPq2MTXt3PevspET1noeCbdTBBqq3j",
  "key37": "4mqh23MSNrugjxRPopv5zJxtu9Hq8KjvkatFoqzEjfV8fkCurPzFLacMXhQVcHVoSugEiyKwoyZcJfg8Qi3B9upo",
  "key38": "2bpJb5hBBcrVEf6nPS45D4WQzRxJXNUsU7xoR5fV4T1QsZj18kTHQpFG6mBaWxAq3A7GjYTqxJ7WjnuaFa7ovtCJ",
  "key39": "2QtPz2nyAvk6vTwRs7b4FSSSiL1Qb3C8XtqWsurFmxgAA6ZwZgAbSts6WbYugzHUSp2z8XkD4XCKZVKqx76Wrv4Q",
  "key40": "3raCpBanHsAuBW64gFtHqdYMZLy3iMfpN7LWsAnY5QyXNWr2nNYrPqMiYYCMLvoaLQuTtFno5Bz4PQyp5WC6NtsB",
  "key41": "4gzVmdEogJwYoVBMLT1AVQSihWA8NtE34fVCAAiLQe2Z7AbMoE2Q5iHd4nTxUSVGT7UDU8Zx4ryFct2wGjKK2Fkw",
  "key42": "3buQUDec6fTFqF2K1YvQ85wn3VDHqTdzegFDMB1xz76fEfoJq11BKd4bzaa3t3uWRJinhc1UNP4MsGvzzGM8EpEu",
  "key43": "2LE8HaV69fJv4HaUG2AWdj5LgsPuC1hthXXShc8Q5191E1Ma2bK57HzRSGS48dqfutJnRQ4CZhb3ibgdDAtpTMZk"
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
