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
    "5AKLMWLydVejXjDJ8kSM1Kd5cur5oR9EDUTDcWnip7XHWQSSigvKg8piawFAfA43PBh8RCmTq5jTSxGmNWHNKgXx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "At93ohkJy1ungSK2JWLGBUgm7qbQ8QWnMm3vopQ1qtR8wuzffgwraQo28q9GZNeYKa9gAwR193gJAoS2DGVtuGe",
  "key1": "48wNkJEtrseUMefinXfUsjm58PMXKBUmW6LbVdq6weMpgNWknXSTaGRBYzyjhZfgac1zxejkT3K1EWkzpURopKMg",
  "key2": "3dBm9aJXJFFzipaExMiMvChcCaovTNigaEsYFTD9ZVrg6AsyCiDM8jUZN2NqsKny552GmZTYYQsi6rump5LVW29Z",
  "key3": "4uGxp5WB6grbaZuPR1rRuh6CdWodN9v6mzaZ3E47EJubh1bqMNdo1h3oWB7KxRDvLqHupSB5sdoSbn2A1EXZRVup",
  "key4": "4VLcNMKUF9GCS9smWz5wnckMA5mhY7trct3h3jqBKtgtDQmsDJg8hiMzfyHj4DYUCsokkHrQDXnxrnDaYyiyTTLL",
  "key5": "3sCRMRgqr9wvgHx1QXY73nVHbsBTd81Veh7DvJThkUSKTNugMv7CACMzw6WH8KKGtyXDKEMWx7S9ub7xMba2SpG8",
  "key6": "4Bidfxrz2um7BLzhouma6WHLFeXPkpsqcWsjjZAYZtNDqoKhoqr6Nfw5A7JZa7SrGaJnpXnV8eM7aPJ1cSJL9wy8",
  "key7": "2UNGAzdSUtKX7LoxCK3cjGZR8iwraTo6Mat9Xd82sC4v16KxYP5xMmPPYB1VJgMXtf2Lb7XmSB8t7RWTBdRNuX8D",
  "key8": "3QHzPGWfkVSDQ7WeifqWtu44gxkgkUhHRxgKATTaedsVj3sL3VxJEm9GZjxTafU2wEF5d6oyYQehxpijJSWYtzXm",
  "key9": "354HdoQiFG46LzaT6T6i2TPBPSXsN1pvwzrwag8NfbQ3ncs8b6WbBwiq1hHxBAHymNcTb8hd1v1gk7tde7XmXZGG",
  "key10": "SLYEVPAGUaPW14tpe5BHdL8FPY54Panj4ERDwJkEiGAxWqZ1b2uR87Edjgsk9gWgZ8mKi3CawfuUTXHxXtj6EH5",
  "key11": "2Po6rvrzEJyNEmBzqLypAAzk6Gfdb3gsVWicKS7R7KRtKpX4tuaR6KsZSSNGAQ7WsmgzboqGficEhvzapQj6nyiL",
  "key12": "56qo55QYBB5t6XD849PF7fm7vSpvbwocjba9xFNjXAsLko199np4viEYeavorLXkXW2FpB5aV4yqCJUmkxDu5nzu",
  "key13": "4qpDp4oMqqVzkv8cds8f7BfZjnxrj138CGkUwwkGXxWxfWYswaF7CgwpuB6Uh9Ta24BF5zk2GSjXG8yNqjVC8FZB",
  "key14": "5YmMVL5V5PbWUF5dNtZewX46FyJHwe538MC6Edcfb3S1YRkh1k3HYe2G8HwQgS38Nx2vP4GJ7LwLJ9woYXoD1nCh",
  "key15": "1AfYZHYKGjxCKZgLDZw4iHMMBVW9kFtfMParizQAgob2hzpohbtNRqHBJ3uX9Xxoduq4ztrUEVKWq46njcQz3Pj",
  "key16": "4ZJdHVzCUx6sDgAu5AHB6vAzThhHDAB8xZVpLMCAi8bnZSHmBYWAfjBiYvcVRQCMF513spv6AM76DqXDzQaSbmim",
  "key17": "2eCLKWsLsVeS5gceKxteKHPrPSh4sDZ7WqXDZvDwiCEJs4AMszej4ebwfpcPNytENS27HBv9DCVfbNb4m6orzLW2",
  "key18": "2af1b8kFAQGARcn1yNtYBTbqwjwj6BAZ4aMSMyPxoX2VT5fBQrYxaiYtozdxseMvgqYt6rP2rVJa9scW4T66GS6M",
  "key19": "3kURG2RCbDhrJoeGi5E9vXmNs9Jej3Lk4EBonhgRjSSbvBGQwNTHcU48FC2kpY6yJKkK4BbkibxsAbsr9qqDbeTX",
  "key20": "5TFqHqgGMXUjRi3kyEqu3n5JQ6ykRgdBNPc5Rr2D96RHJVUF5M373hgxcEzbaCaFsHwbv47pRwqSNhvwa3MYDq69",
  "key21": "5RgsHCD7nRF5MaVSscc7xuCNQnidJ4wvnerFotbRAMd6SVRm1Qveu8N69BKTDfRUPKnkvmsVs1eyR1PNU7QZ4ggH",
  "key22": "3FQ1r9aPVWHm1g699PDzweQe677jjvmZ223kynrBvCMjjFUmotZygpKMeaE5FQnnT6dXpjJ8f9CzjLAKcsfAU9kT",
  "key23": "2MA8LjAPkmPPwq4ns8dEkqdLZM4bJqwSRJfVFpsHqvzG7Cny2ca9gZFkAJoyYMsEy6sggy2fDSBofV4F9fuB8ttT",
  "key24": "E3DkDwknPK4PWYjPGTuwbbJhgoP5cLdWbxdFDx5mUx79KRxGFnnQLcUNMeY4w4CcgExiKpAvHvn7megPJ8Ym1V7",
  "key25": "5fN8YQCtFd6LrBxq53mgiX5Z6FcZsbjXYxNkn4NkgqHALe2aTsz6Fcf6eJFe7KFRC3R5JScoS6coeWFa5e6CA14R",
  "key26": "bqDUiWrxVjBfDyVZdAdibygYZCtDqU1qzABHRm33ZsGCWcjYPqUyezfZYY4V5zLSZqVpCiAfXVVyGjJtVXixWYv",
  "key27": "5Pc2Z5sWKPuiFinMhPvjSvFAHZoBha8RTb1PDFyFzYAUehoFXzFzzd5UGk6BY2PqToseNxgGvFksj5AJyFhWPmLn",
  "key28": "4LbDgzsmAfjNGWh6hUAXQ8kmtqWVtyWNNy7qHVR3cqDBvDhWLfGc31X9y8GuAf51XsgMaYjQLfG6bDEHBUDfmkp5",
  "key29": "2ah3BUzmqHP56qZXAU64Mdr84CwQ5rQYqRLuTit2GmKHs8RCiS5Hydr7yfc9bz2dHVZLYtGru5oWwvnPC6GzncP2",
  "key30": "65udYEpHAgsG1PWgMm5xdUj6d1tkTCdTa4U7Zg6PGTtQo77e21sSW9SWtmEXCh434z3sRTo3vfh1yzBPP3RJCCuo",
  "key31": "4XwahXSJ3nwmN989FamqBK8GEnHEmpULdqruN2tVVNKRY8Rvz6aeWxETMnm96d2Nr4jGWPfg6jLtTnGg2LqAD6Yy",
  "key32": "4xAYnmbL1wY1iNnCkPecYLEufjMKVZFFRx2oZh3tLLAciVQn2QC2GgX1h4b9YbybAc24DDDbKDhj3CXGuhhShZ5k",
  "key33": "5pVom4KCaHr4LzV4sBGgFQo8gWfAi9nhWxpaSYGBTwkT1aihd3pRWb3Sg6gpvjKzFSS8XL6Gdv3x3ZeiRLoJTzm5",
  "key34": "qR3V2U1dUA2g2YETLhVWELqM2aiMkF2P4hdqXE2fDBjMPpirsNaYzgwPPVymiEZrF4utzfoCi8uNXuq8eJat2Zx",
  "key35": "4uS4MkLcWzRYbjMcKNShDgYuJAmp7FHtiHXqMKb29MuBukWAZFCPaRojzgrXDBGaRFZX8JgGy3wY4ghfZtes2kJK",
  "key36": "UC6HcSferqbjVEzWvDSLS7ogZQzaNAcPRSHVxsTjjM8c9R5momUBBaxQdtTztmWezc4zYgW6rq8Y8ucjknPpfnS",
  "key37": "5EuhANgv8JaAjVa9dfkDhCtHnXjtUnDtQfTHTN2xesLvwjj5NjjMP78WMGDvKfJXVu2EyX9HPjYZm3ACAUuoBF9e",
  "key38": "5rA4HknaheCLy9Gmn2ydVTis6bnimLSTwmMr7Y7mjCBquxRHDVJZxjX6zMrXK6BmLXKmnNJixV99zhuk76zeeFAw",
  "key39": "5M9Qk9ehepZs9QprFu51bqedG2JCT5GJ846gsoYcTvFLQiGr2hMvhE2vNeev8MsHLvrGixaujvDm794aqEoBsgXA",
  "key40": "2R3AxDYoN87Hygt7QC7HcecqxS5ynhxzxZGD5eBv7XmboyQe4GX3A3jZSqZQ99uVt6oKEoXimKjz5Xf3Az6NXg1Q",
  "key41": "4Rcxx9CjzgemZdtQ1bAUPPj5pqeb2dNigo5Q7VWNHqLc1dcyeYvJCXQN8FXMydKj55WauRwzszAuKMhKi4Ey7pcF",
  "key42": "d2Bq39menSkcbAqgtjt62oLMJDppy8vKVhkLWvhxVBoBxLkfw71mDRuEsrFRbu9NMXQx87bK27MnQLtiKUQWEHW",
  "key43": "F17WztAxSGXeA7GoBdcoRi6haRq315kJZvuB4SftmrUNN7zaAfmzegG1zZCNbukFxSvvgxp3duqE8vvQyqkYXs9",
  "key44": "4vUGeNaD8yHVBKLmUqZp9rxENo9mRWfGhZjSCxWjQMU9SoMbx3o23ERypcmJn6mjLzjNaxGA9RkMfUZiW1qCDh8A",
  "key45": "293m1GaHhpvfnYK1h8ZRLskCwj2wRBW1QqDJCJzvCrGw2VVfZC2g33SjpwoxLfDChqRprRhweLVdvE7dxZvovC5b",
  "key46": "4j47PKpDCsCKwV9q3oa134Zc5czz4eAKPNYnTdWzTYFys1thAkQuFUp8WAJKGu6C3CfjRFLEVaTjwRE4HjFxZDqA",
  "key47": "3911M6fme5bD1avSSzhSMFx38pPh9iVeTTguhN7MUNpLeU1UULtbCCLw4rhcoNDyHg8H9DK5sJCn4stonoFxhMyd",
  "key48": "2Kms8JTgYGNdrzb4E8jMLTZKQrEwiM4bzJGQ2md8x2qaAAfMtQZmKgWLLgCkmJwNzcLRXbD4M4HxPmesqVjFNbVE",
  "key49": "85p2UYcoMkhJaYrSVLPpy4nhHW8QAVWGA2SW2eGunFH82oBN3oARvY8DJaE4MwktRasJ9mBFKSvLKNfDo6zVMdX"
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
