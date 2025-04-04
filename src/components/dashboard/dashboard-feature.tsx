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
    "4bB4j4u1FUGkeMFyah8wuMkhCxZwma6isaLLepfXBfS4ftkBv9ynBWLHsGvdZJMHMdfjm4hB9DctmfGhYu3RaFgu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8seXzLGvv12jR9vnSecs1aTai5p2VDihvB593MtVkadLuYW7ENRaJNyd28aj3SAcik8royqLStQqhqERhLC2eNU",
  "key1": "4e8oua1QivcaR5NMYkNyrs6mZeGFkA4UvdPhTmedH26wSXSPLqBdUePWMS8N4QeV9GujTDkTaNwQbSLCYbYpTGoF",
  "key2": "5fts45yeNHa4piL94VKTDVCvsEjsCcwSLbh2ZwgtVk3La7gDMi7bKtvfbU4CAbhmYMtkC7eNUUpMWzFoefWzz91b",
  "key3": "5Ebsou48vfBdBmiyMc1Lzn2svvf19efXCpNPRyKP6FBNUNmPQuNK2fBtGTTYXvwxqakYRGuzebq2X7eq7SjFQsje",
  "key4": "5xM8Co7TvshdvicWFtxyPXrQ8pyKFyHWWh3zAzMj44d1EdwHY4FUinMkBLSb5FRvD4TbfmHEvpQ3sCuuHwaG1oP3",
  "key5": "5tqfqM66LNvBkxd2V8YQpr8siJuMYUcghNBRxQu1jzpHkFnhsEnUnQpuxuHYRKdz4Ei6SSGUvSm2SWDpSW8nQYWB",
  "key6": "5RNb1wTN4JX9BSWYcy9TUrQmG65hwnS43ZpCesAQh4S8rGXHfE7ni2Dx4WQCys19Q5g3uvKzLTf8zraBTfEX3BVS",
  "key7": "4zLzjNAkgEJgzd9fAXELZDGBZ9jjdYLZdWys5aR2UakRDiFHRYpFR2nuAHHyNSCHG6FqmqZSfCso2LzQtyRAHQpa",
  "key8": "4CbZLLQ5TRU5gZmdCKdEgRv33M2fDQLqgYJoxev1aauWb14Uhi5ya4oBVDtGecBcU2NkwEFGxd84CFLLW1bDqGsK",
  "key9": "3i14jqTUne14kahJLsnY9sXRukceRw4GuWJxwVxhTUFRY8ZyxbK7ZpDTLsVoXYXniMCBbBTsoq43LaKkcPzQkjjL",
  "key10": "4ECyKKHUCaNskCkKo5ft9EWvJod3upfM4b7XhU8UEh6MVwW5KbJQsU47FXFtUfJJDvy4trjaGktWBwnR5PRvhVaq",
  "key11": "2fSQ2h8RM3wGSVh5YjrSKM7NJz95SqvJ7rNCEVzt6H8ra3TLQyxtmiYs3Mj1sQxL5Hzwg1uHEPHsL3sYBySXbZZ",
  "key12": "jY1PP8L1TnSBq5rYeFPeTJtKuPXbWTtF58hSo7Cqqgtewb8DDgHB98SW6wimvNNfk5Wrc5z2LpBeXLhzETkPDJF",
  "key13": "4VzaD3aGtnrirtsVviAvz2t7Sgy459Z9wBKuaU3VVjWvSc4qep5oxDpvVpDqaoZmesojzU1fnKJn2b9eY5R3Uk9X",
  "key14": "3JimtYvhQuQEJ6uSokDSaY5Ae9N89BAxoJvGMiT9nA2m2mf5zMe2SKtfhw489FxML1ftR22cV9TYy7HVGcw73L7P",
  "key15": "HQ9CL7YLQjrtH99ovw1eY9noNzGWdQd5AT59CHWsDHDMTjrsdBv7BWv8nneJtdvRjKzyVUgpwF9rdpgP897QE5t",
  "key16": "2z32CPnbfaHtCMnrHW3w9Xy9zAWDKv66Qpsoojt3fyry5hNwpdGJpdEB2fJ2vv3jc2rzg8E7igwqz6Jg5AVxjWyG",
  "key17": "5VbbzXXx9qaNsh7gcsH9MC5YwWZtj8qH4XRWhP9kL5oS8569FuSdvp1Mz1gDC6sfBeqf1NLAwJVVERSXNchy4s6j",
  "key18": "jp28Dfwd9JmR6A4f9pnstMwJWayLZJ1kirsiXzj6jBrhUDMCrueLJ3CSvyFF1S77La9wEwDLtsYoWsmNJjkLxJ2",
  "key19": "pcJ68KHzVEAHZ7G4Jx1abvE4She5vDFAYQksNhCJRwqJov6o12Ep1xNiyfmFYnd3KDrMMu7a8GXgdbEUA35G5Kx",
  "key20": "5eixv8yyUxgRQPRRYCiFqU36LDh2cZz9WXZx3RoGQthkmQKpbEscjBS1U7LjsSvFHu3gnNL9baSPje7jbGQ27yqe",
  "key21": "XWN7JDaBGRcuuGRsowjmjiJcmRKnciJU3i96HPMrWfixo8aCUfokrugPHov354QrFZMMPe9U87hKk9zTip5gHxz",
  "key22": "EgGg6qjVb6LcugisMZt9Lx6au9YrVkapkSUct9wvVYWRTNPcxZdiHXrYfpotcGM3qJnEnDpBS7j48P6PxEbYV1P",
  "key23": "CfMoFB9P8eLEbvF49wbnMQGpTWFs7WPtezyCTfa4U59uSWjNhSSmMKeBdMmS5c4PQg5zPkpQv75qeCsJn68sLJ2",
  "key24": "5QkdXPMhJFcJjbyK8EpZHdkHsoa4XxC5PV5gVnQVsPssNjRXtpB37LvLMwT9yamBh6Eec6f8xeUHYNpxTCRCoXcw",
  "key25": "41CYsyMVck54qWoJ4Rh97tQ6HvVxq8dodhxAtsJTJnzxkVs1aj4ZxgjCKd4KEanPtKJr9HF2nApN5KNJVoqkJHNb",
  "key26": "3JUB8fdQH2XxVcc5f4hkumy7JeKT5oWEEicyHp8pRWSjoVxcvQg9hLoXaSrDaqqS15NrKAG3u3uEfpQyphXn1kmL",
  "key27": "efeEAbxRMWGoTuW837Uuv7vTne1Gs8hiAZovmgYfvXX1wAcDzM6gUYD3rXc7JyvMSeNi7B9g1qY5rErRu8gyYbt",
  "key28": "2zyv1Htpw2qWbHZYDMXWes5fbBJGq4JZuKw5fBVdiTaEtWt4oCAoB9fwHyMG1XSZsFa2JyFJbQWz8rWiLnoy2qrG",
  "key29": "2YQJviQArLf5WqqiH5WuYfQjFWbMmn16uHaQZbPJjDziF2zAyBoaFik51cGhuGV954j7YwLnpyvb1anCjfciLbzo",
  "key30": "4ddBrHR7eMpmZ2MuJRepvUZnMmbxNsiPha9JGMN1Vksny9WPR7o3ZqvrBMGRqQgtefS2tQhLYtozDywvTSXuGCzN",
  "key31": "56yE55RUL3aSPuch5nyyTgF3eTpGN4Dfkr2nzWNviro1dchwawuKsYLHGpb33Y3wdFgj9h4Pzjadk7FKuSTR46Rj"
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
