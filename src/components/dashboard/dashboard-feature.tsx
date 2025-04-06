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
    "42j2MSG1L8xtuTptwxt4BqWy87ti18FGwLYmDvqTrSLpUVJ33FoSpfo8grN6ZKrvhaQZk9GKp6kwgd1UneFMhKmD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w3HFbqgTmMLVqgwNYZuijjgcykgpVMSXE73YZbQqhKreLqJjxe9kt5HJVrGzDAT3jtF2E9mdTp3BXpEj5brdRo1",
  "key1": "3J3DkcQiWv8HkdY7DjC4DXC978Lw2kdLB28MYTHHHtn8R7xmf3dFSPTkTQ5QHT4arSZJcXShHnMPYn4mgN2sYcjK",
  "key2": "45FChf3qV6Ero398R2a4yxQD1RUK2iqLyKCHPxMDdKtbxE5pw3v1b8M7P3vJL3yeVXjduZQVoYysKdpEHcF18bY5",
  "key3": "5fMzvWWcm5c1k1tSPhzQu6a5fZF5MpvUp9Ctjha92NLJepc2ejARrFz2g3ctQu4poJ6im3MudP5Ab6jveViyMEAs",
  "key4": "2uWvuf47g5VQhCF7T1ZkLL6PTKZ1hYkvjATCbFzpmxy9KYx6CKwp7F5CeMAxdRauiE6y1S6Nr3cDiWbMJduBSn1j",
  "key5": "5QaRYpZQYLRBXKG9M5YSNtJTuhKLtY9nckDHwQWV31qVrToUqbZrtWqLAhypqiMrfDu4uZ5aXCWccab94NwGzBtH",
  "key6": "2fgAUxse7QrG6X4eUpqMBvfyhhX1YRLH3NerygnYevcLLVwYNbrQeiB5wbXFod512x64E7S9CfPyqNmaYCChWtGZ",
  "key7": "2UmXgdZuUqXoCumwh61aBt7nFEkpXHrD1KKEoBAwzu37x7jKN5q1TyTc8in7Tacwh7XnCyCxSd2QkffHPH8DwRJC",
  "key8": "4uniiZA34ywdPmciwAM2kub1FfDv7rL2rGAw9Kb6U9Rr7L8z5PjfbcdchuKxK1aPDjqFo4H6qS36qXztQVTrQJX7",
  "key9": "395UwEvwcf5KfVjniHmVD9gTx7nzhWd3piGhKuVjbToy67a9HZvMAvU1Yeiv9rEhp6XEA8PAf5bojJs7pmSonzuy",
  "key10": "t3QLsaLwZnRjCpWn9SLYkdassUTYo9XCNsCk2RuPWTFRi5L5hpZH8SnGMuFbWvd5jFHQxzNqUqmDeN4TDzvgQ1H",
  "key11": "4TWBUdL6ne6996V62wNAqZGBSLPJhpqvQ1UjLuv74WT3EFR2eGGKFJGYEUzSW3WB5kyAVCX9E8tEK9tLR7wEYiCa",
  "key12": "67NZYBW7DyBgSt4Eb449uu89N9kEvhFfqxHcRV5EbT4Z5eZir5smbV638sgpD1fBJ289aZK1igxuJgEiSGoEkFpG",
  "key13": "3qZWHGAsqZBZe9ZFZMo5QHhsME5ZYm1umS5wYu7K9zsdxENrt3pmL38dfAeRpptaJbdtMuF4cYpLGwPMNnbHwVTg",
  "key14": "SZEoYu3dU9biABVfXkKDdrXo5zst7ZfSbXMC1GUfPWN7MNkKGzY5kHZmYQt6H2nbyZHPnYJdEqew4hTgvRjujjj",
  "key15": "48j944cJvphGYEDidhRZFxMcFtK5KKCaN3gJpgctK9xtvqsfj2wyyY3Y6M1hMZyZG19j2QgeLqdWBRigcYxgRuXW",
  "key16": "2Q4ZGskJmHgiS5rYY6u11kbt3zcZWFR4z5BeYQRjbGuVGXUkU2bk7xG7fCM2aKk7KyydeYJx7uGpBr8QLJ8XSEdV",
  "key17": "2BBn32A9Q4RSx7rhFtkvECoaY1C3gbGa9b5Te7XUUrKkupnVTPCy2LjL7d6Ei7QFwXXZrk7NrHWAERtTwDLA26hq",
  "key18": "4k4PptFH1xjs8BptfAudFMAjqa7YjDek91QFPWX9at1YxwVtSFB1nVavQxdHcSTMnXfDf4wykcxJLrsunuijNjpk",
  "key19": "3jjMd3C7hkqU38XkLoZzVrLxFYDmVRYjgrAmvoqyxzrkWMp5bM42em2KtAbqK8yKvDnRjtvfMeubZExfo9XQNJmt",
  "key20": "5fUyZ56zf8pYtDh2x9Ut69aUkMvHTZvG65kpN1tAeJUHij8uCBrURZiDmtcUcWdN1g2L7Pjg5ieEKgHaYwEn3zNW",
  "key21": "2NkaeChYiqAeWtxcBRdNfKMTBLJC7AUbQiacE94T2SW7advVn3vNj49cwwE2xTHm8vX4mStBu7QiKQmxv3AxfjiC",
  "key22": "2HypJaTP9C92uc7yRXkPCwBTj78zBhmsygfJ6HPC5RrY2ijpTLBS93UYxzKpbzWYU1ZnqmTnEdQLkNK3VB4WJXK7",
  "key23": "3TstVdeR469u4v2R9PzfmGyC5H82YeHBVWYCTjmqgtTj47YYcYQB2DHeHqrGqiY7X7inWfhDp888MABWi6z6Rxaq",
  "key24": "3rz2WZ8paKyKskP8MRK72wB4VG2614EPvBmLQwdRs5HQAxNQj1dzvBMcraGUiqdaG3ADuc8adczqcHhzEDRdy9Jk",
  "key25": "4XTdk7WfyWaLUZp49C5etWWguEZc96RMgg8SKraff6jCdquF4HCdApTKFE2ocBmscUU57YFtfUvL8HWzZmhN5emn",
  "key26": "26vdxZfX1zBWju5zdpwVooKjAwP21ChQcD9Eu66KRDzQcjCK9mVHmE5qTgVYRkpC8b2HdpRVPXpokifC7GvWw3uR",
  "key27": "LhJKPaEmMGguKmJAFFMk7eEAx417R1w5uqxSa4MsoUYcvU4u8vh81rynQayAqL9UoREjZGchXisoAEP2t51EzDP",
  "key28": "28hMf64kp49W8B7DavHF1k5qzoRJy3VyhH64Unqh9XEeD9fqUb6H8rfjnzhE8PpE1zhrW3v8g8K9fCQew1yxe9Cq",
  "key29": "4pbEz8vuCdswdeHejsy8qKPiY5afzHhYes77cgrmyhJnmSM9jKtcrnAkeAN91zs1Ayuk5Sy2eyDG7Xxxc9H3o6gX",
  "key30": "36JhBX4DSK3jgfudmq69kjbL2w7DkHKobg8Mo9HDUwomseBejicfoWRPP67s2cmMxuJHTNgoBedmVaMsfTQoeDPZ",
  "key31": "4gAC8k8Fy4MrbEdQzFtApDfmeHuDUuuixDmM48KZmRaNZ1Tu72wAVs613svKuzoiMRMunHhbjuGYPJfwnZqDXkV1",
  "key32": "5X2MWU37YDiNy6DrjGH9J48rcLizvnuQ94ExCfhLE5rAbFZmjyD3tSmT38FpKqXfrSMFnkLJjS258oargHnTirD5",
  "key33": "4t815BcgGZ2zgQTmu7VJ5h1EpjHM4hG7VfVnHV5n5xymoVt1Ti6Eag4E3eK6AvWjawW7fgaT1Uf51avV2nS9knk2",
  "key34": "3F3MsjBUyqKhuoYX4vtG2SJ8HXuqQ9TnCtd8sNsnrxCHfZhzLN48WGKfEPuLtW8AsQVBN4oEwCZFcpdQZ5jYboRu",
  "key35": "2dj6AswGjywziFTXKBfUVmsozUDRpZn6rr99Ery5nHZXAXYv56XzufGC17iV8C39HANz6UR5iD1X1pFeka1vmrk7"
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
