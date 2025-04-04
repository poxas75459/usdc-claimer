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
    "26vfq9FhvukdyZ4L5BRT6iK69EW9koPfPjuJ36mqXXL9aXER8BDhj26b3zABkAPEEcLgYuPMbcEtKnMb4QxHvbUb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y3qzgURnbVoz32NEubcfPVPWBpt5awB7ezgfUHtD84SLYpR4VrNF31NNkXTexNs48D9f7NyGQjUJkmXUZctM4Nk",
  "key1": "2RyAaU3ZHeLjuMDJ3BeqRu86LdfAioyPG9BifhpD6TLnT5T6f7bqNU3fBdh7fXUtnzxbXF1gerNKDznCV9FE1qMM",
  "key2": "29hGetrr4urQDbwXge76ir3Hr58RUG9y5MbznYeV933vUJUMqUrtWqqNpEYomaiR3shTbnmyF2p2YfAqpdXeRApE",
  "key3": "ohhs6tTkBryhr1vmovk99wngnFwGX8LJ4Uw5xxReoG9gSJ9hKLVLiY3iyycZGQHMUTxHEX5nZk4KxCcF3AkepnV",
  "key4": "wSiVU52rSrvGqfsDsCu7NKz4UnMN33WmaHxmGHXcULNT3BnB3W8gSm2LkxCqRGQD9ksiqfPSADkPDxarw4fZqg4",
  "key5": "47oo2G8qRrwnd4rZtUpDwVNxoD9LF4JM1nnFoCCcHHigZ18mU7xp47e6q3WGwKhHcqvYTquZ662HJotvJiefpjf9",
  "key6": "4UwBm4LowbDANGPRRobh4KWv12YsGqTwLPJFGtAvTtiPko4BNnJRVBzNQVtPjtNTKMHw3mEmu34XLRH6T71s61oC",
  "key7": "3T1rypmyWYQ3cAiiQXRsCFaVN4bXre4deUaT6qjTzHCRXcNp2JajNBEErs3QNfrujK2gsiYAUnfNn2wMbbXWSPA9",
  "key8": "5Ep9E43aN2DE6CDSPK2x4rRRGtSYin5pP5u9JKkWMVcb4xN7apyz7jSUM3GVTLGqYch7bAJ7hV725CYLUGtqULzj",
  "key9": "3AtaNoTpXSX5FVY7gMHdYrF38q1gW69y9TCHx13eiBnBthQsK3bun5wY4dH6V2xwVN6AZLt9axxDU5apzVVdH8Vu",
  "key10": "4Ss9j8EV4nDzSTuvBVDTqf4x6W3zhGPDeHizo8sVB1DtoNTX6pWixMJo4FchZAnEnrfeBXTM9CwbQkeWGH8bovz6",
  "key11": "r3uTgzJJrBjkucDXhAwGk316J4NkXRpWF94wjwzFDXSwAzM2PDZvQKXFxCmoa5uVZPJpYiDKsvJCa9XHL64Di9J",
  "key12": "NME28T5pV5eS1ipZpdVVL6xZMarMeTiNhweMq2mVDcKB2MHcUBwzH1egEvNyw4ybjjWZVMiez9Uv6uBHxhZ48YA",
  "key13": "2WnXd8ps5G3yw5HEz2cbDetRbwCfaL9p5e3fAKD9ZGTPeyacmUm2wxPtTeiaQifm7tbeKEjWfzdNAVfCQHZjWwHe",
  "key14": "2n9RTmzEiPo3dvMHkjBjFYCZWUyWJyfysgscXaMHqQ8X29YGyZLoSQLpxf5jFdsDGG1dKX1fhWKcPVeYMHkSkamm",
  "key15": "4DbApbVynGWH9hcxEZHW4pQ3qwBtr2CacvjBFw4gcZDv7Nripg1HBLDm5Z1UASdiiTEpQU9UAMLJnsTANv5TL2vN",
  "key16": "46HR3rgAnjZCRwsuTAojSMzYDGsZSkPYCYXYGPn4GhGaBmSPvyUvHDcEQ5o6cSqSVDXDbSu3C7xLwUCaQi1syLrR",
  "key17": "3mckRgRipAWQRoNpCXTM2KuYAnMccKjEWb7sfhTSvKJEgkJfawHz9Lkbw2ndzfJEEjZuEgLRsWQZUWDQN6k3nRvZ",
  "key18": "krfiCyBfj5HY5vELEWAUxw629cGv6RvKUKkWmhVrNmdC3qk7aVaxudA4CiYL1Rhp4fh6yB9N9NyjXtH7hBp4WVE",
  "key19": "5jz68uRxnHCRVxVGhxSfg8sjFYPHBo6w1x1WMxFiYCXkREJHCRywBmH9Nr2h5gbSpZgD6XMXTJ2QhgpMd9rWTwf5",
  "key20": "2r96y48QKpxvK3Ujt84WnVQVCps7ZvvGYic7Rkasd3fQaS7t7mA3gMJgQY2PdCLkPASM7a2GraCAVH8xvfRk2Z8M",
  "key21": "3p2uN5VnAjWvHdXPUa8cpiiFYohH1RiKPyncjy7rufC4RMnFV4wCpSVHsrCVwJ9E6EKrgM7Hy5GZpNBfpsDzkbyv",
  "key22": "4ApxVvMFRdksxkqnPqMogVWL16jqvGzZEDub6suTyUkcL1nTcxxWC6xjpjdbCwbMQHCQhG72CztzgnFi5Tfc8w9o",
  "key23": "3mnZUUDhdwF72k3AXVKeTLnM5JqKLjcf699tLfjxLQsXwzYrDWg2rMaPkCNEutDgPUcJoZ76ve8vpvcg7zRBnH46",
  "key24": "AGB2SuP7Z8vFaTigvabfkv5vAA4etTMWoBi8TCFe3kwiGxBKZQasFnnwEVe7SUy1qoRnAHkvMTUeHCMhFy4wQMj",
  "key25": "mcYVGYNnVrEUims2TGmAYehSpySFDW8711XNo1tbQEnw3acE2r7jiQJa8UodfvYmj6WCwAaKTVCdAubMP5zvFvY",
  "key26": "5iFeQ7sJTHcB5t2FA3DmtRMAQpym6R2f7SQMuiVfxhzdrjgkuXMkuAfwz6iB6cPPacQ5ypUZGjVwVEtkTwPP7X7x",
  "key27": "3XcuimDQeP5jATn1YP2J3EMBy8TaVsRN9Kz9AjAwT6VvBF2aatK3ob6FTaqPiRfJUH6NveuxuqgcukKx1zFF1NrM",
  "key28": "3RPZDU6ZoXeD3NMBbyJPZ2tLjH7RSRgLYycXCq3EUXrqVmoTWfCgu7fNkXj6xTb3LfPqY3fpKzmmgMJAmfmmnQPT",
  "key29": "47nsyZc7vAZ8AyStFB3hFid5xWNA7auE4E4nS5myHPFUKSY1n5n5FhkMVaNK76K13oMUfnRWWXqexpTv5D18LQT4",
  "key30": "33BPsghUNp5cXrCZfoPyA44NEk33tA8SNw4xQxbuubdmDuqHtcKcsQ1viC6mE1qwciDHV1kCKWHN5y41SJtnLRrL",
  "key31": "5zUEKfo5HuoeseM2bcsFoYQmV7uLzyNbbPfG1BG3MKDtH88Y8NZnqZ9PYNxi1VpXR8n4WCHzrjqKVFWxYBrrHCaS",
  "key32": "2LcntzCECz8XiGuCUBPvr1a4n5YSR3Av9rCCbW7x8ZnqcahKoJv1HVNfc9egxtnHsSvjk3Dm22isjkwSkgeUQRit",
  "key33": "3yLPrUPmRZe3qAB1pfcxJUn1qUEpvjK5RSEjggVkStNU7ZiCnTHY3sg6WA95CDsxmYhPmeK492iEGmb5rBaYHAS",
  "key34": "311qdXrkY4zE7hsrGN8Hcq4aSaBaexgH536D5RqchVdKPBG6ivJ9PDZSfFLWndaEwvGmMJSn8mRQdoGFDQomKHYQ",
  "key35": "4K8pRag2SGrHALbU1TEoWynZvaQvY9e5eZ8fovAKPcWwSFBBzGH89XwjwpsrUSJ8gJgDJNnqW2K27VcRvDajUYKJ",
  "key36": "3wFzrPtY933CDkxpNDqSyct3V5EP83vFoqHTJRgec7ywbcVZuxZfFQNJ4DCm2rPdXeP745pR1KoR8F9ppwTz2wBV",
  "key37": "HyCfjacCd2mwdFUXoAp3kWDBJBp9rJKj75p4QfrrEQ8TEM56uGuZJmeY9nN4mSQHaSyUUxJFGcxYAWJwFUNF8R3",
  "key38": "4oUXw7TsUgqYuifE1Hwa6adj2V8QZ4L8ez6QjBehLwECg89ygkjWiVmXwnHM7SgKNpixCYUNHGzyTWLV9yxoU5jA",
  "key39": "4XAygWdf9w5m8zf5BUGvrFC3H4AkXngXDsBy7jmbevNZnTMHkiDrhWx832qYVa8Ve2Gs527eoBUfuwCcCXPGm9Zx",
  "key40": "5VZ2zuyEesPFXdBRS9PiFMWkrLX1FU3iM8VYJ3qCSjsAgBgdqrwo31jEPcYhCDzruWDcqbAGaus3eiSC6RyZeRjE",
  "key41": "2vpFuuzyoEyz4DXqJcdTQo5BbCq3SvB3J4FgBvp1CmLaD3M3KKM6rQxeN8fUGkhJu4cvuNw2MLCAq6WMEHhqjSuC",
  "key42": "2Cg6aU99qdyFtfngFzmbUjEUs2sZguPJEz9JP3nys8gAkEGYxdPrJsPrZDqTACQAE5DnYLagtdEjHEQKLqoHtxja",
  "key43": "2tvfXTE74aRFnvNam8DqKp6B7JzdthqRFQtGpsRfikfUTV5e6Kq6kaKf7gM7YpRCMQZ2B4wYDUYiwkK6isNSKmFv",
  "key44": "y6kuQzN4PQAzGCPhSRzuqM9Y6sv89qDMyvMjiW7SsFCUzkH2YUpkdLjpg3yZhxxR2iftAMieJZwstavjPftBbgT",
  "key45": "3oPq29XWdXDnUxDBd1MYiPfgiFiRbvxojRZtFp3fNYgGUwHRmYDHcwwo2PXt1aaZcCT92zoSSYMSGB56SsGQaye1",
  "key46": "4xJEeAnD8DVcFuSXtsbLffDQ8Emf69L55etaD7eLRRSSQkJorMq7h5cRrWsYUVuTGiCG8yv9oiQVQ1qmuERu8MzD",
  "key47": "4ea8v6FTgSnf9Kcu35GXa4QSMSgyL6BmHxwq2NEyiL9jrLRkQX1MxD3kGLAMKdWnVTtuSFd5a8krebSor3qAw7tf",
  "key48": "3nubmdfCyxbxzruKQxivjnkFBRHtWfuLcS4QaebHP2TAdfK1EHkocZuoaTxmz44SA5iusoaePQN3MtdJ2VYDXfN4",
  "key49": "5vCKnQdKrRzwCf9JfTePih2BjnKCtP7Re6J8anCX9N8pFExTe3Un6sawvx3YhqNUDbPzpfn7s3u8MJu56NdiaXN8"
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
