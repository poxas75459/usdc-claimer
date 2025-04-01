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
    "5aTz3yFViqFmLJRcwwzXYb5s4aDV1tnpeC4c3BnMHUmTaetX3U3uPNnthdg2E33YUXUDLtwN55kZxoZYWoco3dd5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J8zR18ngVyYTdC82o4pBZ8upxbqDCPSvFFwi1H6HsP6A5rM8oPfXS6n3ZmAse3u2P2fZkQ8D6d5yXaFreFMbh4d",
  "key1": "32ve3Lii9tt5ZUrfmJk3xiFXvyH4Age563b3e7KfQnA28zTFJYcQvhJVwuJiyh4VS9RYHDeZuQR7qHbfX2DNu8Cz",
  "key2": "53zVv4CVsdiTW7v7kkpTfpYVNTq2HikjFcNpit6wZT3iyyXxXiDQ6awZQMuN9CGD8SDoHwEwNZ9TafYJPwCcHDXm",
  "key3": "5gQLkTJdSKp7xHzDjc5fADgWbgssx9hKUTLGSwiBeCs4Y715U8syNGsAR69QinxgaoeEeJdUVDP7PMTqukz3XDxK",
  "key4": "5owyYi1tA48HB4osBGakV7ZfGTuXHpRrjqfGCpe2gcEMxiAYj75aHER98iexJxJWdJ4N6PsxaHgfCF4yuESMsDHP",
  "key5": "wBuF4AofeJ1SGmwzwLm9kTmacC69YFpzymFJZPnMb3PMWCWCrSdNRg4LsuXpixG7cznXP8mYCyL3tCZm2njxJ7A",
  "key6": "V7GexdH6swn9VCrMFzHSHtSbRj8k6d1ofjqMAzYhny1hseKg2bqHh3DS6HGXBcHFySQcFJA3etGYsj3gMKMn7dF",
  "key7": "DT3XeadY63GiC42wWTxcFkEo1bHqLZdqSjSyNL9pt85tR9jWX64K3zMVtkbVKrvh7JqQQWs7Pqmkvgi87JSLJmL",
  "key8": "3FfH9sM38parXry9RMcK3dtm54shg1uEo3tZJZLxLx8VK3SYR7z8pazgBcZxgdJmG9WyuCPRxmYo1KbdJAq91Zj5",
  "key9": "2KCobd2jioQZLtC7dKeBg3Cv3eQCuYieKGCHNESu7BuYk9kPKDjrrTDUdCsTgUGsKSLpc7A6jYj7VqjTZuqWmipD",
  "key10": "3XSdLFn9CzYWk2YetQjd6TZDqvFyxU5rYHes21HQRm4bkpJnWxgZ8myDqZs6LAVQUJBLAkcdsbGbaFsUgebGWZZJ",
  "key11": "4nxHBcGq3RoCTqJaYkZAKSh3XViMjWYtMA4zihhq748iZW4wHhxKwCaAvxLsK8dwU1bCKf53PvjhWymSr3UtAp37",
  "key12": "wy7pLkfXq2mxN7KLTr44ZJEFoajRbSJkCkbMdj3zAyukxUf6ruQjTbH1mBRETGyXXZB8pGaxLLKjQiWJWGgKnWY",
  "key13": "3RFSQgkDXU1WHaGT3AWL7Q7DCEjBu69FBjoMMTvLt3aFXMpgmuRP7mpvPvGrq32NNWy1eU2FpGB3nwDdn9QVb1zg",
  "key14": "3Trd2Aihv1diLSzkBrAyX64otK9YU7Ko5KAkCJ3qmc9NiMfPmJRdKATyVtR6Qq5v2GEzyU3jLVmbkxRow3ejJfQX",
  "key15": "65siEeELisurcpYGNTgN8yCmHumUKjHr3bzkZeKGKt2iYpVpiHsaqqNbboka3nXTDqgoKRyC4QttsDMF1a94J93M",
  "key16": "2ifnpgyC35NEdUXhfPCoDHJLZUo7VCyXbSHSjoqM1fkdKRkrE2YC5pCcBkx5MvDGFu1c9WcZqcMY6aJspgzZRoWE",
  "key17": "32YWEbtbztZrM9DfQCAVZF6iRTNXhvM1CxCwu7eFWLH9CzBSMjsHJeMg3KddBVR7QyAPJbqBgUn7bWUeSiXRWU9U",
  "key18": "U3RJqfPF1JWrrXyz8rSS7TeLqhVmYz5kNFewM9XeurwizacTYjqrLZbjFJcHDF6YKyzY8a8j21HErrAfprG7S5x",
  "key19": "2Esve9wdk9ZWRJHF1c9ajkyi4kTbZbyWaXcKXCVsbFtWFJBqfdN47pc3ofBJFyoMFnRDdq3sE1YoJeM2F2hHJSXK",
  "key20": "4VvSrmSJnpmo1d47GoC8zExXS1oakKfjt3M7Tx56ooB2Q4UF6pvxArhqWVcV1hvKccDSTaHQPTz9ZFohHGSJEVPb",
  "key21": "23oFUifbLarMfkJpdEnwAnyvceN2jD4zRQEYNCdjfRu4JBhajraK7FuxhDD82giyGDYfK3K9XfmQu4dN6eweTRQQ",
  "key22": "5KEVsBbrAAv286bPR18aNqY7rk2A6iXKBzUKg4x7y8uA3EjmNwXqV7vq6nNmoJAM57d392puFy2ytGCuUcv7uxEB",
  "key23": "5xKobmTESSDQwEuDCZ1af9HUCQgeNwHvoNPoc4P24tgesWBuJaRmAWTammp1NNPSkeAx4t5K6RD549L4PkdctEqo",
  "key24": "2pKRBuV8Gc9bBgGEzqZMCaPNATwNmqi6McsM66MFF9f7GsoAVexTFLjYMApp12U4265bGCQmSVwLdhzZYQUibUsy",
  "key25": "4mrD4bsDyxJzEoWu1aQuAnGn8iDVaDnrmQhwZDbQCu18E864WVRfYFzcf59qmkn8NKnQjDptj5piuNViLHmrCcDt",
  "key26": "2KiavtpwksK8oTJdfbMtmJcDp8AdD8YakUvprarcRetD2zVqr5tpvLFvNSqdUFcQHVsPknEkoLLm5pL5goQwghNm",
  "key27": "4NEvTUdhbBFWDhNdaissA2CWyw2KFHuWjkfrMewUPbUYUmHmHPH7fAYfE3ea8nYkf9Nr5FN1k4cGaK3XarQSCrYz",
  "key28": "5i7GJ2Kiw1LmAdkxWSq8ygn9jancaBFSrCQLHt8tHdjq6gNyW2CMXEP1ctTAdcuK6YmLWvqt85jLC4frzBCGftSq",
  "key29": "5LoL4yAfo5n83aBPCpW46EgTPBSjibGF9wZdz7kRESsznvhkwreXzRXSsC7wnLckkfqXdquvQkugPK79aPZiaEUH",
  "key30": "3tviVRtBLedSNUMxmLz752A65VFtxKvP8M7PXQ7fnVC9kPvHPQgLh88Qvkbw51K56kReRFLiVViq2m7eHCpue8DL",
  "key31": "41rmwve9ThQaWKxu6XhTuZvdMVkqw6LUbdi4uKxSQtgqh9WETRZquSKEShqGFgddvDmPfymqKkPPE6dWZ6PMtNu6",
  "key32": "Uedy61sUKkPWbTBsH3wfZZPK97gLqjLMgCygK1miABD3zm8nqJ99xQokeRbuf3nJQJQPiosHJLYLg2SmdBptFxT",
  "key33": "4RWXKA9FnNMHc3Mgcp7GPXsLo2HUQMkao4MbU6m1SUNeChFavCKjgFQxV1LHMFnpZwPzLGcdnYhj9qfNHP64k1yk",
  "key34": "4WWDk72ucUfHixV5A2E4CH9PmnA3UmJPuGQ7LvQRFnPTosCw7gCnzdHGhVCAGxY2BbgJ4pcaFoE1bKxwXqrj9CLf",
  "key35": "37TCxiamk6FQ5SVsHnuPvB44JLie8DRhfeJNJnaUHCUg4ouYdCtFSXFgTXbbdQw7aFehN8Gh3AS2L3Hz531poA2u",
  "key36": "2HjofEnW4mdNCUPUWNL4rkUxx9jdcuUJS64PybnkLvFt31fHHGYMTi3iK4GKrWMbakFWUr5PhQ8sVSNKZ6utZbkE",
  "key37": "3KGNhxLjRuw3Et2HCHkv28kYWeLPp2SzBqK59iFQhn9CtXSaBYZAPva8hrbJ836b5T2rfcX3J4w4WkM6WzbkNopJ",
  "key38": "4gD8FJ5AZxHsMH9u3KcBySf21RfPxkFZWasNah9p6iop51RsG4zGFCx6jQpdujtafPKXLYzYm3yTCWo6GjTijCGq",
  "key39": "4T7PEu6osbFhfJoJaY6gVAVFnd2W2S3NrJAEh1eYAg98pQewV1jjhVJxMocZUxManaVZrsCsqTRSFctephgxwkCt",
  "key40": "4omt9oeRuWaTufU1hWkAjizvQWgAV19ms91JBgsZs7UpjtxayGX5kbJi3kuP7AiEx9CTAsgZrfyw91CgcGekvHuS",
  "key41": "37jZ1Byfhu3HFWzFYyx9s7jqpBy2sK7agaoo1P7wwZSFYNnSguNE5VSxxcpgbt4T84zb6S6fMkqWpHn7xSfHriJ5",
  "key42": "4VfwSAN41SNjtuCHM6Ess4urACUXeFRrhoKphnh2Zn9mSGrbbetNAwQ9xFKLiziYG6tArSELxnheS2dCZJu1544s",
  "key43": "Zyeqq15ii5p6pcLetn3EZnFG4d6rct9ZNuXEZGTwZz7U7zhG8zcXJowErCgyx9dLXYKHiNMGwnvqNrAyGjm8kEi",
  "key44": "TpsYJHzsw6JCsLfWpzH1e6GATetbcxXyaDZc25fGtk2Kh93LnE2d9WEZZS6hjLZzMNRKZcbi4B1j6eLzGN1ZrZh",
  "key45": "2WigJKTQQA6QVeSSK2FrEvG16oYfNoiUT1oXP3hqTNd2Qits8dLtHbbRYeR7Nx4T8ZLuZxf1Wh7767MEQek9nv8a",
  "key46": "5zQo3Drv72YnZ3JMstozMX6xF96TzvqNqG3mXUL5abz13DGEkhM1FkTbTP5QMg79WS7eo28Auqu8sumvnZ1yh2uz",
  "key47": "4gnvzA4C9MkRcGVuKMqW8RExfiXq6bLUiMKiwjNzR4mKM4CtTyY1dJZkrMxGZutx3eKhcLasZZZHFKDZbtVkfTE6"
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
