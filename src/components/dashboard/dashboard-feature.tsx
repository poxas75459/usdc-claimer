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
    "3kbkpAxvEZmDeuQNjt8X9Lt85WSVPx8RJxV8XKLd7Dq2hB5vfcv5bCNyLbSZG8VkCtJFNM39ymSwMCCu9fzi6swu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4x2vC2BUoRNXa6qab9C5oRcwXwffqyoJGK6nyytEfBXEC78KP9bgEvgT8ogbKoZYsrJ2DCEUi1R3tCeyDWoG86RB",
  "key1": "3HQ2gpujCAnJZX8BgbNsZFsYwa8SCqrt4d2WZ5j3231SvThuB3ciNjo7vQbwW3u1ojSCyDwp47vXMFyXrqdSbvY2",
  "key2": "4NqVotMBc4NrWzekXUwjTPnBT6DNsSgdo9KbmW2zBTnwerX9fW68fWwuvJUDHaUmk7KpBbek5oWviKUgcoXE6hyG",
  "key3": "4bk1eaoJp8oLtHb1soQXR7XPggWzAyfshMJ78Q148bcWeykgxyrEx8rc1uuwPDhvsnYVdjRdPJhkdSxRNNk2Pttz",
  "key4": "4eXrMaKmkUeGRveGvgn6afrSY1jCcLMXLpNdNkDWNitBY4ENcSHUGE4a8Q4W3R7ESFUroWmWj1aKP59zTtd23dtJ",
  "key5": "3KXQozY3RgQxbZTb5D7iGr5wGaALdZ5HXcpuHDFv4VSKQcjJRDkkoQA8wTvatPGBuJ8JwK5LbQHuBJpjojKyyRf5",
  "key6": "3ZCUKpc4HCjMoKimRPBP6mjmkJxVtdkrEaYCMP6andz2mfW4qGn6cBaJWKmS4RitAME43Dmhw4kywDEJYttqr7Sr",
  "key7": "2Gfxbrc6Qk39B7WJ54NAbpVUHmniRNgwnuqGAQ64yCMYnTmdozg1SREwQKuLSzikTfyqqyNmgyp1Nxthwc7fKSZZ",
  "key8": "JK5E2aXAbF1UTDDMJuRv2Bxaw1ycwRtC4fZu3z6c5R9wWdcxbM1Ch12TBW2aiXLmJM7W6NStmAe9EDyjaMvsFZo",
  "key9": "2iizshpHuyE1HKhKemsyFsxKobP6FuoeZj2P9LDqfRenkNndDH8qjjgxNNwgYS38DRCyzsfW2KkPATJGc9tuWFJb",
  "key10": "4weab1LBHmLYB6wEo3MoHa4GPmfWq3xkSoTEvRGdFgT2UYMf9hDdb7U3RpU5XS4imVPpGXNim6Pxw77kRiT17mgz",
  "key11": "t7x1FVFvSdZdCmBa5VyJYgZrUwWwKUpAftRydwNVvSYLVoaSj8NnKLWjMoXDr3coFrx4UQziq72vDuxudZYxmYA",
  "key12": "45BG1y7WDeFQGdiAzmLJ8YdQwLEzXRmpX8PZNA8UUcY3fwuy8D7dyahnHQfy6KtSPQJcLaEzLxUyZBEg2Tt17edw",
  "key13": "3QjG6kxdLBtXbiHgjR5cEfiRjgWL5ATsPxGnniw3y3v7xJhz4ojei6XzeViAXaJgiQgQ9vwHQDdYDDY5kRvPqVBg",
  "key14": "2p6e8cFbKdmjt5Ad3nZFBRneHWN3pRVQLztVL4fVp7HFiAYUYfjSnSUKCBhsSwKhxqMoWigt6d9kRFDYmsdGHtiX",
  "key15": "4aQ8rGPeHBgtWW2rUPCBFMdbU44yae23mdDQdfjJgmWdZcJH2gLcwbMwZS66kM6ckvWXpNwqggKUNL9GzkBCEbeA",
  "key16": "21iPGf8RSvi7tX2dSFGsJC8Cd7BkMunQwrWykCoVHRTThWAN9euyLq7jfGqmSVJVxcvGGUdTwaajm3X2cH6tihui",
  "key17": "5iKWorK6RKKfnJqVzfcDRprYDMRGMtEsqFZ6qGvjpNufH9vhNBefWzXAfbVLcLM86jgnrLxU8NP5B1KHkCPJ2jd7",
  "key18": "2suxbZHCQ4NXWVzedYME1NBFEdz6chfpU1NgBcryd6U5bD6KabSXwWKqxeFEWjgPtLkCy1LPCpyENhHnL1suu946",
  "key19": "WBjKnHXVLeSquaoaPYEXAb79q7dTZ1EaVsCdXtaTDy3Zn84L2dZydtSx8oe1M1PopjdnoWkEzC9m1WLyZmA8ng3",
  "key20": "4G7tmD1FMtGLPDjBifbxyfD5Y5jjD62N5Ejxc5erwDNCpirj7TVPnNRsQguPhLPUsitaZeeXeLYJQ9K5wBSdLHLG",
  "key21": "2ZinoCtA4n6P2uXXEZH56YrZ5SZZBRN3KtwvRvST1CKk2i1RMXJaGsGEn32t35G9FpTVMTr5uLw4wRZNQYMdzssa",
  "key22": "62RQ1tyCmsTL9kdcVRQBcF88NWm28Qut8oAwdHh7TmPDEtgunoyk2djkipE7AuH8E9nBCdR2UjzRStABE6rXAi22",
  "key23": "33CAXLcmHyyB2X2ySnwyqcguFw9CARdutiQVbT14FLSmoHu68GdX3MubQQz8hnAmFFHC2kCuz3ijNDaRpjmH7WZf",
  "key24": "4TKfYhvoQRfgvpVZdGhFkP7ARwzTy8XPGRxximEcqvFuoYz8UubtH8uJQ9VR2ZzmBoCnHMYramJzJEAJYZMLpgFT",
  "key25": "5aLmHMC1wk8gTCYCw5d6DwifzZaKT8RCb3UaDB7PQQ8f83M1QnSu6H4q35MPm4VnaNY8cN16hKqijQbTCU7JhaEc",
  "key26": "5sUhZUNf82zxRjBfBi9ntruHQYgHxaUS6o6ACVzyZRuNNNieRNptMCkvJEYa8N2P9yC6YLkhmpxw8ypmKSHspMfe",
  "key27": "4ubrNGpefoSWVbKX7CQLf426Z8awEY3QBSpakazkixb6GT9jJpoSq1TmBBUjQFdg1MdnVTea2XoYCaWoauqgDHYV",
  "key28": "1KXzxoHm5HwkkCHhqVoT5qwq8tMUWREuUBoXnxTWfVbbCwPixCgZ3EMNowseJx7Ffv822J25mLj4i5NhWLDQetB",
  "key29": "5ySP24yWpFunPERHZWs2VhTWj8iEHuD8SYvF1qHW5CDg5bGs4yR2uDni29g9D1EYWhnpe3uaSMbi5eN5QbXUTLqg",
  "key30": "5VVVhiFAKgGSuT9uN35GndzA57kwEXK2XnawGVoRX6fWy1GcwkpyweaUkuNRRPXbWouW9Dxwjpd6jVs77DWqhecY",
  "key31": "Tq47By2dque1rxaDi2WciL39AFuwCzbuXj45PTmnGtG5vtii5BZm9i3z8SU9sA2WRxva8MWvV2MkFAoSZ1koA51",
  "key32": "3hJ19qoECckbZr5cxDBQP3iPLTrhZx6TPScAm4jJCQURWKUyR1Bt6vyXANZUWpfeemnvXk4LS3GFWg73bgUCcUzM",
  "key33": "2BRoZvTMLPAL2wZBBUdLC8R4Yymj5Etk89heMFMnVzB2HjhZBydbRDjz8dUs5AikWdCRSp8kzr1F3EsGfgAQtPVo",
  "key34": "3McSV3mnP3EmT1QnaPhXSnoz1uDsr6whagAw6m43dh7N9M3Rz8c741n1Jny9SESUZiAr5eeh2gNNXxHiHyrGTuSw",
  "key35": "3PvzktBjobEZr8MV7zpVrHvqWs1ewLnTx84TvGPpGQfvXbEzQL2vk3eE1HKYHsf6QMYGcTdQweJoJBefGY3WYvAM",
  "key36": "3dJFHC8ENrUUSkKPz9brjLW6Nr1Q6AXy8WrpveBLD4YwPvypgfCWEBNZF6ivM28CwUmY7ptNFZGxC8xBnAdXxkWo",
  "key37": "4JYiQ4VifS7h89UEWeLNMfZGuc47AtkW7Sf4MqsRhft17457qRvAwN8d7Ydd2qJGeNgHdRgLydQZi9aYUjCgoUvW",
  "key38": "2XtYyrugDVVtYD83RzbA8HCTQqd8Rk47a7B5a2KUH8HC8S9MtKFx8USnAkb4D9NbAsixc2uusfvxEciLEVaHf7Ek",
  "key39": "2JJ7sTixiDFcxHfS7mQ2EiXWphVqjTS6HUohauipyoCx4xnnDLEc83H6gLFvKaHZhLKGyKQJMrFxDyeRmVi5nETQ",
  "key40": "2Yn9HUL11tU53DKuP2s926WHysdGKBxvcMmpgX2XUYTvQ2bXqptonZgUyJvQYYLYS64mKfN2S55e1UQsUXtDGwCS",
  "key41": "4Wyew1Hci97oQWypW3mkAbAhRbYTqiDM1eXf2Hh65DHbNDhexWB9FfE65F9V89sRqBwPb2Vg2W5haWDBNhiXGFpG",
  "key42": "2UAa5TYSKmjuxFrNJmoKBCPS8wztXQU3FLYC3jLfKLnrKrFtfdj4etqnA9EcLSoo92SeKU1awjtcZysFCeNGhK39",
  "key43": "5WemXeg2SbB6EzgAc2pUE6TZZV8b4oKLMnwqRyhsZDP8umnq7u7w1oUVsbkgdRLvxvp96GspLopm1YbvsU9qJzvD",
  "key44": "2femHcdtFeBMyEX2bEYV9ZnP1VvVsoUE7aBr4LkHzmBkRSmgrYhmr8DTQueDF3Ng2k9FLXzhrYwh1dCVoaqAcmcQ",
  "key45": "4gUCo9fVN95AY6iqRdjEyeYtccqb8HG84fL1gFTK82XEzFc8RCoZGRon5ugx7or3zwZ1f1rqRBc8ANHEDuMe1cLN",
  "key46": "3GFfyT43ZtY5UrrKUXN77dbBY4jfqdYVTMErqVn1vp3BRu8XdJu4ge4hPJ6A13fBWyQDyiy6mdtXzSmWyrHPpvGv",
  "key47": "4RfrS7CDrDuHUSJGHaMQkC1i2MkR8jhtzJPa1NWQX8QkUgf3ZyMkK58yAMb1F8ALzkYi6EzmUC4aJS11wtKfePXy"
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
