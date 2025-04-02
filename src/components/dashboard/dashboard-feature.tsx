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
    "2obgjJcv4fDajVG94mxBJkws7FJCQsUFZ67jb8bipf5d1zy8YHCMqTYaoHaVF7eKMvPZ1yBZohPLP65nwBLwdJFm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GM1DU35x4q1Q5ksaW9KKtCWVs89wCvtYm5LivMt64di4BTjCvfEowdgZHzxkb3WGiVVL6NhQyFaKMJxiysbZXyZ",
  "key1": "R7SZ34jKE9nrbs1sHJHG51HiWWfqBes7Z7mWMgNQ81v1SyfUGzZZP47Kq6wdppLczoGXTvxP9ZCovPrFdtKjSfZ",
  "key2": "87sFCTNb12u3ZcNLLEZKTDDn1i7KBeVhmPA7ooSb89h7EJhUtnoQ9ENvnNzqqfbPLUZbXVhyTtpMPDXpn9wi8WR",
  "key3": "9eWYmaQ9upatwRYKWq25kJr2oVHGywAek26YLHVKkAZe5FrdUGPTDkhJ1m8KdWD2fV3r6zL5dWK9L7nUyLCbYqj",
  "key4": "2tXad4ZDqH9mQZtatN4MgwAjzwkGknKMysJUkzg8d3ahj2ah5a8ZELBSPoLEnF4Pfho6wFujKgn8a2B5NncFTgmr",
  "key5": "4rUc6a5S5r8t9EGdPoaVuRaCrSChAePZ6wERgoVXYhssc2amrRuTrtXQ3bMKq47sTHcgq3Kg5n2YcWmcDDBLz6Ko",
  "key6": "4khTjmaWdhG7cBgPkdzmgssz1CVaGBbxa3dfqqoUw8bWwo4PNaAKbXi33HoUKcDRAg2ziZaTUVH9NbC5iTQdrbmh",
  "key7": "4f2QTYhR8hwUR5smqQqGVRveu4XYkki6gxwYptrncjF4ZRbD8STmz14r6nD3zsPFxDEMw9oN17GimowzG5Nm7YdA",
  "key8": "2Sd7D8j3xEwiL3y9L3gP17h3y4L5MHAQEzw9xCxj8bt2qCUnWefTHLUmjzyRGrb5gLrzRmgUFFD1wiEWU91GmKTU",
  "key9": "21sX2RuCrBvf6Wn6VWTPRpaZMBPq1uyyMzLtDd8mka67ePS7C1QKUrHdqgNQFvgxi5Gf6Gr4dRDkjipuYM2EEUZ6",
  "key10": "3XJgmqftiNBMFL3Kedmnsc8UWc8E1tm7v5kZRaxcoNMehMHp21n8uhtsfZpwvxpvciypGr9x4tPLkN8MmYdq9zYH",
  "key11": "Lw1CKJfzytqNwf4dAP3hvys5GSanQsyV6iFM7k2WZof6PGBJqwysZTLTBPhHNTwqVWs36GvBPKEKaoSZbizEwF3",
  "key12": "5JCGXXgqWsSGAHNvU3s8MYKMEyRV9Ej5ZFUd5fUMVsje2w4ycrKFfFubc7of4qCP7qenrccFz6DPxfV2FNHd2Snt",
  "key13": "5Mg3JC6hLKueuQfosN1o6faaQtCSCaEbi7PCwkLMZE9sUyeZ68uXxZJeUoYNQ8zsiWD8jx7qUTK6JiN3C36ZAJaM",
  "key14": "pukKDD5MvBHxDqJW95FA5AoiFVrGUULnE6SDqUR1aMs6AWGV4Gp4iTk61VLJxrxw6MeMdZC4v7Eur8zZ3km3Aah",
  "key15": "38DsiV3Fpsc9Qz9tnAftzfh7wnEspDfY5ie4nuvhETzouzCWKzRZjyRwBH55VFi3whoeY5mGjzAd2dY18JcwhXSX",
  "key16": "3rW6Af1fzBcpKVYMAiV5afdm64tHkxmBUnWi4QkK76BsaQpJM9UQPdu8fnpvjgt99hE8VLvEfDCkTeTBKG96CaSE",
  "key17": "4UpSoyxKk85DtdkBK2PNDzP4TaPfFHkZwWvbSPUtN1g3sGt9aLZm2BQJuaTzYJsxk81famYtwaja8dub9JDRozNk",
  "key18": "48mSpx9jenGqmc6K7RyNKciB6oWLLxN5hEXepuwLayBzh7Ww76UaGJ7TQwBqigiVjsL68Yc4DhF6fZ6EyBR88WP4",
  "key19": "3JDKNCgPUieUoHrYcrjsvTuP91wey2yZ85hB9JV7EYEDz1UP4tVcKMvtKDkMse62H9u14kTrfRqFJVnC1pktggvG",
  "key20": "4his4x8zy11cCRsnSxnNvW6BnAZjuYw9v9LY7aQe6zwKP6PsH2umdRsggSqVCUeeQWyDAz24Mj1ewR5XcpzcKPEV",
  "key21": "4tYdP2631qgwfjT5tY5rBUqoAH82rckSoRkDRvaEJqmUVUxPc5Hq73dagUic5UMz4CeEieR6E3jmRhMsE319cvuu",
  "key22": "2hErK2gvt4euK8srv8STmFKajjpf72oKcR6NSAUnLDz6vgSwVGf1FCP5PXRavmDQprTXaHoHEGE9R7JGW5ymLDd1",
  "key23": "41PNfGMQPStZs6Z1ZztFRpieqTnD6mePzd3sx8m5te8kiaW6bp5WNyjWc9zd4nzyjxHWePMtrUXSv14ert7BikpT",
  "key24": "4UXtpghSsbo2nNc7B4t64KiiVJKCxb1RohCcLon5WeoWP1Ye9F2su8DBGiwnKTACXREH1d2KbwLRprVY3KFBZVJc",
  "key25": "NSyfmWL5rAYDWWStVvES39USvu5btTvGaYPpNmSg8VcUptk8LaWxUnaEjhLV2yFK1gVZ1bi48s22S1kRXb3XjeW",
  "key26": "2wgz6o2ABCqox6mQE2DxaHVeH4PbtFnRWiddFqE5LwM4jXhBJ2mrwQ3S23hURAgbkwFs364qzBdrkDDgkW4AHd6n",
  "key27": "4zddMRCDq2QXgBXMsB2A6RY8FnpmxXKrLGMNcwtTKB6iGssGhs25E9CZPMdcaoveahNJwe5Z5TXztry7Q2Afpd9v",
  "key28": "3jFWNe9Bebz7GgfGqeCYvezChpMJXPrS5czZVBucwmy7AQLuou1veyzQyA3PDyn9YByhfNwLf59RTQC3rnJ74EPe",
  "key29": "45t5WkM9vAMTATdbYuSiEu1WfhRW3QRJT2T7jgyvzv5B9bcGLg4GNx42Jk4npMdLQm2SZp1h2igSWEG327fKjDpF",
  "key30": "5PehGmTbLbRUa8fZYHv8wdFBPepsnaJTjygYywCSk5riAC8Sas9Z7tBXhZ6FWGBvFLe6byYRevGRxMg46C1Y4GPC",
  "key31": "4CgL7wt3nDMe4zCbJdUgyfUVq2AoaPBSd5Jq4qoWPjXAsk5uTN45g46YmEf3V3bpiYB6nwvmkCm6Wmf34nQ6h2f7",
  "key32": "5bYTt1wsm91eZim6WAYKidpcVAhV7DSFjzzoZe9AkYTbAhfPvmYwVDWaNhVESc9JNpRNoteEFU2ob158bVEXXGXV",
  "key33": "4ENUihM9Bf8CobJCGfBv48mFDB1W1vpTs4qpDaa9tzHoQ2tDLxpqSzE6g58mCZ2vBdH1GfY5bt5frpZJvsK3Zamk",
  "key34": "49VhhBYTdfV48sqSedAnjsioLHLi9C7xkjQPiBTiY6ifNv2QpUrshssiEpYmdKnjBnvjvaq4VSFMooDA9jNahMMa",
  "key35": "5XRbGsGVBKwoMeTQVyb1Z5QmHCD2CT4ntFRHKBQ8qhuRvVM8ZdDqYcexSCWhxhJvatRejae3wuAkipow7G5BGDND",
  "key36": "2GLL8Dz8JS2VzBwpFStuCZQLAUwiohoA2biq77LqQ3U2otDC8jX7hm3F6ScnoQryQbo9i4t93XGrRRoGdjz6NTeN",
  "key37": "5bvuVR3pDVUkTZ8cGPEKgLLHLQffk6MSRgMNtSyjmZaFho3WxhXTKZrtJqmwN6Prirc3gUSWU3qgPvpVuZPnpgBy",
  "key38": "3njzaAbNMj6q5zKKYtXvUiKH741eZY7wMDUMqePRj7VDwyy4oQsRetHz6MpyZU4zwthVdZ4ztn8fmD51GqaBefsk",
  "key39": "4PFoYbAXFTJHZ3fPL2mEPNLL8n9AXfsWoB9YstpJB9Mu4vmrfJ6zAEBxyVfNFk6U5bZQ5qqQ3vyHAh5KPf76YnqD",
  "key40": "3Gy6178Nz3EfAcrsjYZKRTbyA6QJErL5HRTWvNyDDqLaEUdjDtWRNVjA47bW6WbW7ZJeKnvycyFv3cxr7pWtuyqy",
  "key41": "3JvV84h8QFWFPCjEiAkcMAFYMjPb8Aaivbqh8upq47oeqwKpzttFeG3s9tCMJUtAUKgmEoTtWa9yQwEFdg7nHudQ",
  "key42": "AqJ7YYqAXwGfCTL6SRGn8U3ejK8J1YBcyt3D2RHSsteqibxstbaqZNNE4uwyeiUpvVwDvgEYehcX337NSmuqhqt",
  "key43": "31bFCANDUCSB8n6ZoYBPVK1jPBnYgdoqij12KQ8F5ZEzzi3C1eJJErpZHUfd2GTr5JsZf9c3RbsJNGKgVj53biAu",
  "key44": "JJ5MvZcY74HzGBJQUGFHrDhFyuacjmMUvMBGebrJS9G8GU4niNzm8iNpVQfCKqEuxBSXz3R1R3gJFaNiJ1cHwAE"
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
