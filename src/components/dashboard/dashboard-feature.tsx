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
    "2J3GL7DZro8nAPxG8BuRxdE6FzNc8d67sWcPMYL7i8awNYcVFsFdH2gBcRmkfJ5As9WWqqwzzEKvxNhuYbzExnhJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vtiTJcdBBmmxb6mMGCsAVyGhR86FnyA5jUcd2QHa4hQG6ufYwttp9kSjPPUTzagswWn6XDga7NEkaA8EGZNAY8K",
  "key1": "4RS5iEf1YAURgLBnxFzKrGgTJpEvdD8ouFsRuMG9AL7XToMc3i6F8Cjs3eew8ZfSxKPapwCa92UZLD6o87HnZsHx",
  "key2": "2Qbb1YtXNd8AHNq6p7QYpkxcq3VaUsiQTZUNm65Fvbg2VL2cXJwdhstZZSCFzuDZLbNZHhGAevajd1ZN1TkBwRdy",
  "key3": "59PFW94uD3Crw45gwvpxQsiyuM9zMUrCaRrteoK5BSU1AbtZLRgtKGdDoJMsY5VCz8eSn7NAVUp3utyRGsX18TaU",
  "key4": "5ML6UCxTnqkLLwiPQ5FGTuAUHdTzZ52rSxXGyZhEsMhBHbKUbn7W7zdyr85QGKh9kBK68xpUp3yP1yjiwmHarKqS",
  "key5": "2TGGVZJvQhMH98huJ8kCPmkWGYMJshNMqFESMnXyeRjXJ4eECNNpfP8FGb7wMWSRQiKsXHSQRyrRtzWxoTGpJ7LE",
  "key6": "3CgBZTHL4kKwefFJaiRCjJZqFqvmEdf5qtYN6xuyQuE3dXwJ2pjP3AWJU9GfKuRMaEuCrvHDhLZ1QWjrzv8YtxXA",
  "key7": "5ZbGnhTENgudR8m9ZC2eYrH1ymY9WR27cLrjQEWi6pjuXNvdSHjJttFadAYC4T6GJ6K1N8UNfXaSHUwrMUMz4Znv",
  "key8": "3gLqwT8dnD8FHXevVMpCTuzi5ZxuzLscoQjmfxSMi8h78hsZMtNgYdL9wHVmpGrKw26spcEUJCti5Uz82L48UjL6",
  "key9": "2RpyiY4mhn9q4PBeyzp2dBaEgmWLyskTsGQXnsEpALxPAgENab3Qw8xD86L85RnCWbnaHBoWrETu8HXAHdSdSxBE",
  "key10": "5YuLL2xA31rrwQiQpDWQG4pVQf2yXRo95rQv8k1XsWMTDkhouzuavHFR8Hv7fA9x8TuKwyAR3iRjrUQ65XzorPBL",
  "key11": "65wkWnmB8dw9dRbuPePqnK7Lui6wSiVxTGV3rUUwp2K3z5w2FUqQ6Ab6p5aq9f14C7osz4SMLJaJ2UVXuRQ1ufKK",
  "key12": "5z6qB2ULyLe8Emfuw6RFiK2dXcoZRLZAPux3KdvM7WuVHFuunf4ncz1Rt756NthscfXHruLZp8D1fuNJttNnXJ1P",
  "key13": "3hqVoSGm5Pk5LJo8a9d6Kux7yv1j9ddstu4DbxPczhbYTJGtBQBZNFfuh6uY5Tk4cwdz6rxhCjf2V8NBZeZpooS3",
  "key14": "4NE3D8PLZy3FQKi2AzhJJUFfmJimtG6wWQ7Jm7zdqYmnc1c5gMdn7ySY3pLWkVLCBHLy88pkjtHngemvsbjXe6A9",
  "key15": "5XQjCQAEaQpBLVznL7eiABRoeUKeSbZNmeKzMB6rGbpvvptJi4QHoBDrtf8zeazVk9nC9yeMu4Ag1f3BTJANSyF7",
  "key16": "3eJeDQ9UB8yGrNR8pKVFj2aAd5zdTm3Uv1VvDmzDM18ZFyXzYg8QDYcCoHwqrMrimRR15eTGmtNoNxDkL2PrhD81",
  "key17": "3j58QgbaVCSoYC3GYPL2AhzcK8e3zXC2mf874oCw5zQwCEcJFRwXWf8UntEKRuKLMtiuLZXzefjccTt5uTobXkjR",
  "key18": "nGSy2Tvi2vZ9pVyyPYfeddLUZ22C9eTBykgLWKJ6kGDfyYv97v1yk8cHets6KGn8rzPZWRx1kTKqYgBciQCbvfd",
  "key19": "33cQY313UmFAfyedpNBQjzkpG3FwsSFLLkZ3TCFCErb22xJsy6MJNWS69MPGuqz59gJBf2D4M7jMLkJ3tcYcDi3e",
  "key20": "4ujdg6D453tKBfkwoLe6ZcCsZbk3JiLmxnXiUNQ2ZTD7xE4GuodLpPG6PKiSRc4ixaG5vEC324r1fDW7nRZGNFNC",
  "key21": "cexfRWzidiZC5vwiayMtsKgQTvFw63aeGQCvA7xmtGhNWkbmavrdzxL8XnwrETMitw6HaBK8FsphdasCwfghUdS",
  "key22": "ea2DkgNSSx4vcNANRVG4wDXvCku5xU1FszfGvwV2m5davmvoDw6MM3hSMqmybfLcCisEguZH81FZUtEMwPykChq",
  "key23": "3bC5YFbrmtvhewz4aef3PghYh7VvdbadeiAxEDrSMvyzSyA248ckHZ7UbtTnSfa6YJGhSFF9iq9sqGxvqLrNHk13",
  "key24": "4thHALvNJQhV7wQC9mfKaHQnZSrH6Yc8ivnvGaKicU9brjeEYLeWH2wfWatTcu1eiJ6C8NumnDvCBmGLh1gBvo7S",
  "key25": "31LXjKZcPA7wUi2ESQvmXbppLDmYpD8M6SwE3MYSca2d4YM196inHafKsNfa4U24KMV9RyU3pFN3LeRKjCSxoho5",
  "key26": "4st9i8MtUfad8Qr5idfbadxD5pQbXdMYshydPx8CBS8NteurFbkcRtCXwUe6eYEYSv6xD7fGmUu2su33esnSetpR",
  "key27": "5K9HadZqcxh47GnXKp5cSPWdUmwg8jhonoBZTbXSe81rq3YoXCU2SvKejvfdcorsC2zDqbXA1UrTWDMrmQmtb6X3",
  "key28": "34o75oPVa5aWMHaJ5cLrR5miv7NJ7FkjG1zSEQbTrEPTZtmYVA1qbvdZGbDibUtpkuu447SbejvYYhpYtPcSfXag",
  "key29": "2mBS7Dw1XiULFfLow5SbLLtCWPEFC41rvaVjBXFHRbK9trDqjLfeW9uChQBE3vRnpFnDuVGVNYjUwCQwK1B6DcVh",
  "key30": "4SnTdYoFdRiSXiaqEvrEXcK3c64oT3PESHJBGYCa6VFxVZrwaSwbgbWcJqFsx59GQr6NoqJMAigmC8qkvpNUWzGX",
  "key31": "3iTRYwdfn8ZkKuNeYrGS5HoCiE2coJjz1JWnYZGK4r3qpDpMnyVxxnudo86KHGHBjgkmWYoue2B4PSGnw586oMn3",
  "key32": "4U7Vbt9HvGoFaZcBs6Zysxrc28FfN5hVngn4FNdQjxq9BDfn5ZJsQqZZJgPqQrekpGg8dRB6JC3S6DXNnsQ3uRjP",
  "key33": "5tkZLxjrzdv4nXS7LXBwFYE8Fmuv7wmtmRFfYAfCC1pc3kFKs1gsKaWgWk56fieX3e8Le4FFso4ob3wBJbJJeTE3",
  "key34": "5TVZDKTA8DVvrfjgvyDWofP99rsxPdUUBgFsuWsMdW1phNHCKsZXN7niNyeXvkbob9mPQEvEThQ6MV5stMWTsW5X",
  "key35": "4AdGFnewqorvJJuQ5b4gv479h8KYwiBcS3xZmKkeZqsBuQ1eoyuxTX7YC8UmcUYcNefQ2mJ4FooXqjGU1eQxCxss",
  "key36": "2w6eVMVwTAfQ2osdWuhKoF3fTA8w9qTypZcg24fn6sMxdMdx4SNwZaiBvPq1acR8X4ssrzqeDKNkcdRUFp76eNbp",
  "key37": "4Yd2Ffwka5WtxMs15qGgcaJnxKbi7zCoCSXugEyxKJg36MgfgW8ATK35TgSnpBTx5Fo7xerV4hMaWxVpmzcPGqhQ",
  "key38": "R7G2dLbodT86pjBp4bmapEuMVmpjSoiDGtkg4irmuwtjHz436fzd7xoNv5JvVK2UDhefzr12sntvNFceURY31Ac",
  "key39": "2pePeyQY1qGHEypYM8dGJngT1ht89bL7V7SjexyjLGf8vYJVFKXy7APHmQdShBGWG45Mu2fc9rPe2DBNfeuU1MXE",
  "key40": "4Q54qjEiJUQHqHU7UfEGExgzytjZo59qQ2NHKb1tnKSAftxPSCJevpybuDJfJjdWRk5eUhMfpaDNerSEsmnNYmG8",
  "key41": "5rXHGrw3QL2ByD6dcMdYSCs1c49YCPebjL5Z45CGEvA18bcRAdDVHt1C3vygQB2RCUEBjEcwtEMV3L5f1sxy8MCg",
  "key42": "5RrSbKt2zsRD4gA4SoyerWK22xRRkymJovQGAofF7fP4ASPup1WHJpifyFSqPtVfAH2uUEaRrx4PYxm32f9xJHxp",
  "key43": "5ttW6wRfXHayhkC9ebZLEFv3n8MQQiJGj7o5soUemJpcNFuAU65cdsADm4dzpcRvGigk3EWR2nCrBoyoTreU3uXe",
  "key44": "5dS13QtZQSAqY7DQeWoRPLtFKLD1shwYXoVpn6RDwpFZtsH2jqK964vEf2C3m86tHbWkEtz9n2wFRcjRLth356Re",
  "key45": "2xfce5xDBAhrTCVk11rx1qDqm34q5BUyC7zFkgojdtyKZdSd7jBjGq7P9xXiXBCazckwQ9oEBcdJN4hW5JszoRCf",
  "key46": "4YEvdL8sjpz8FN3iyEw3FQc74CToULxD6UEYGpuoEi6JeC6WdCQYBCJ6LKMgaEX4CGnAbpyve4qkCLcvrp2Y8y3Y",
  "key47": "5e2c6TaXZpV2BxVWYpLyyKLQ64uvpnhCEqMGnHD6V95USS4SWaHWBN9XXTqeMZ5z2pSarWwiQb4VNFESCMFrWFrz",
  "key48": "fC7QgKJyQFSHd7MkrNsuQvTXRzik6fFgrgaJHa3XL9RXfLA2WZcJAmrWNiBtKGh5no8pMoc7vDTz4eHS49JMeTA",
  "key49": "5F9Qn6F4QYT9uDPxF5EAmG1xW5LJvYKKVghaMAeCtiF3AdPrKi82Xhj8N5TE1g3BWeykvQoZLMhsKWnRvBCtYueM"
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
