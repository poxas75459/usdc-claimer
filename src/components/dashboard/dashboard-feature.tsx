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
    "2fdf1CcnDZocbZ5hntryBAzSAD7RsznW7Cz6pcWsXeqydg6Wvh8GNaDXswizuBd4CeayB9Qy2mgjRsQ7GazSEuok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e5hJrYJSJFi582RzBZ7hyfzDUm1CqB7CCWTDuJNLx6ksMK25DUw6vmjegRXYruLhddyG9M2P1nYRuhS7cLxkEkV",
  "key1": "3uf15PpMQszdAuxxT8MpfkDbcwSf7eW7qHc4uDXejFKvJkLm4rEqvN4FzwDkKHqxVTcMGNYKoSEPdV1CCUuBFg16",
  "key2": "5amcgP88w4xkUWg18oUvMKu6VFhM4nDRaVAyhX2p1nfQbku16mqnXxE7AoVtrMPavg3167BWVof4PmhcL8yPGAxT",
  "key3": "2GrnJGCRAqzMdsPipJNHh3AwohaFP57QddE3ZXD8XAHTpTNAFZDYX3oQdhKJGoJX6Nupw1CtnyRzyooUMpCBfCda",
  "key4": "4REVHaHucgE8gGDY3GZQJsvcYAF3Adt7jwAGWUDgg3BroqfAhpEseTSs7jXnMWYnjUbihhjKqf3EzgEiihtisUP5",
  "key5": "4xB4nxWGNkiHBCKG6GYG3af3auuzkDCi11GoedMD7UbM9MzQg1FxNNmNz1qacnUhXUCtsUrGtJRZfAu9LnY2au5V",
  "key6": "4ZaG1V9rViMQdZUMTm4ds3EFNHRQAv6iEcTmczoouRibFEYHWEJLTTNZPa9zoRWQQcaJT6E9tWSKFVL7NNYNBq3S",
  "key7": "S2vVz3CnbYVLgeftu63SBntjq3a3hPHYVBokY9o5Pvfm9TEHAth9pZtN1f22n5WtLn7fCMrWY9DPA7ekdG5axm5",
  "key8": "4GM84XR4uzK9THXxPCm3JsLuwSbqGPh5aE7QZxyJNC6Spbeje1jkR5qiwm8SJcva6yAhdAJ3JYKA3WN2Ru8FD3VS",
  "key9": "3miD5hfPShhStoJ1AxqScmwzXeReToaiyGxaQWEBBLevZcc2UP4wNU7UU5qTbiyp9cgqiks6UvRH59tFEnVtnKic",
  "key10": "VxN9iMyVetiZc8osr3A8K58sU3naXgMQoNtCpd8aqNAnQYzYDEkrHPMeUU5L6yMMag98Mr96NRrd1wNBKgQ1kEm",
  "key11": "eHXHVV1PhbL59GTdiXZKbpVi6DRD349oemSCzypwHDfmXJ6YPDtNSt8yWm9Sa7TET3NR6muW7BBWVoqbY7SV7ZH",
  "key12": "3YAS5YMNXhdv5nQW6HmsLRUxeHS6pwirWMU9bR4w8oPz8EyAqFna1aNyQrLgAs2Ka28r2Jn5zcCnyMNsMp4qyRWy",
  "key13": "2gM9Q3myuqicXf938zUNFvgN5s7BypUrC5QMP3W5XRnzvagHC2JWRGg1QxMfnenQz3QboMZZhbADumr2voAsrqrD",
  "key14": "eCeNTMwKPdvwas24oiz6h4fRBzYdAyYWQahQjmbK3YcBxqLHfn72bp1wc3wg2ste313zh8nXNyY2bWufqFxA57F",
  "key15": "3Bmj3KYKSH78NknH9K8mRDZNV5s7MtKUykqnZj2Df3BQ2w6UpC2mXaTc1iVNerQz2iZzJYhexK6QSHYAzg9CVnVj",
  "key16": "5t2ud8LgFhBKUih1YzLiSs4vRaQhCmaS3HwTvZZSdBbstLNKE5AD1xEmrJmqivmFxV4cwNMMfXPU4qsEBuUDFuAt",
  "key17": "66xSp2k9jP7oawbDt4Z1dWXpA5gbKGfWrY7hctcGNyziFt4BpWVBHCJ4LZNW14UepGaS7vYELw16R9bzGSavSsTM",
  "key18": "BfDm6TRamHpwWmmWqb3nqvqP8EfTTnqw1rY8a2o48swse69VpcLhvLeaXHPYFiPSrcZEvhJrgxYnPjr57M2D6Nx",
  "key19": "3LWow6GcaLwkZtNzvaiZVKmdaraZPcUC3w5Pt4dVFgEgMTXQePj1dyGHoYmR57GbUZLeaiWbjKgk3E4HRvN9EKq6",
  "key20": "5d5jdJuzithSCTqtgAWpzNUV4YAtRzKCo6ctyoZJNupdr3gygn8LfL9HPEAmrKrpCUcs9UmSj53XkxGvBLgbi5eA",
  "key21": "5hoX3ZzhfQeYqgZ31qAJcmRB3j3t9BmgDKmV1mYZzijmLHMRwm3zpw95EPAo184f4KuTLiD3ht8VY7WBpZsDy9nK",
  "key22": "33tnYxMuFbHJMA4Pji1v7csXLfChkgWBjLx7nTNxagQpq2DFhX39Gom7PETKGY9sUTfn4UyJoZhvNwUYWNJ9fNJD",
  "key23": "3wKW7xhEMzAWBgqUyzjyJjXSVw2ERTjhFrNTvmdN8UwLU8bRqJDM1zPUC63wPe9LjHBEDojTgpQVpMsoGJAxkp1u",
  "key24": "5u9dCSNAvtSp3rNC64MEWpuc62BBbz5o9vj7jrnazcvVtZoDAUYd8KQq1hZBkMgtUYjrB5Kc7R3q5fuU3ddtYSWF",
  "key25": "5kUeFW5RcLqTGS4xW5xJKxXYr36wJJ8yacJN6H7BrW5K5J1TTEbP7pupiXtyPAGMoX4Q7Mpw9vEhCG7Ntu16wHQq",
  "key26": "49rkrENpCDdiTpo1r21rfr2YQDY726B5KnA5UwQ9xwZqLBro419zJnDq4ruE3gHhEyDsaqmdBH3VcXRkVXgwQDzj",
  "key27": "5XqdwDe17zs1izdWpZ5wGBZVyL4meTCtiVwh3RcuMZcLiX8514rdRdjQ27AAgR3S7DpkMdE5HXsYaq4qAw9ztpYT",
  "key28": "3PUtcWUm77rgjhztPCLts84NFzYAG43eXfS28vpbykYYWYixxb3cms7vMJyXhdTARW75xiDU5MzmyM1fqyphqTTk",
  "key29": "HJ61zjEZrF93cCeN5hNo38j2vAn9amC6AkPRXJhtAt3p4c6L45gKMVmpEPYWH5AyGdGv3VLtCoLrxCwfaYFLRGw",
  "key30": "3WGrpwpcczhPg7zaMpd9tzXzfSHucMzJDZKo8dRxdnhmjMn75Hq62uCFh4ErKRJev8vHrYiyohHvLiEgBBGx9Uxi",
  "key31": "4riWMXZpLEvyFc4CAqhwHPE56sHdWpBXzSxgHpPsUCj5znYoUeBmNwxCqqLGNWCN1dnvML757uqJJNJruDeMC1Fv",
  "key32": "J3aNXsA96uwpXghBaQkkNhp8nLRsD8xmYUkHV2r8WCaDe5G6TjSmosnkSnidGRCZjYUqNQ2LBqYQBopYpcS3HBm",
  "key33": "3qVGAFotUBtnA7BGtzpfPW2UQBEjE4n1BqFgWAaUgiB9XGVavboGGuSt64YamQKYtGjzhkkRvy54EMBRjhAdopis",
  "key34": "2gRG9hbkKVmXYGkoGS6vH5bXYx8DwjbwcYxhjwBM1NmFEXcBXtZptkrr67GNPE48o3spWNBHUVyAckDYJGu3tPfv",
  "key35": "21UnigQiKEYmFK8fMyKza453u8pLPuCpxFHS4qzoMn2CbJCqdSv1xASEAfi5uhcRHeWPFBLQoczY2YchcfAVZjso",
  "key36": "4NoCLuUQ1UVck9cDjKhNgdM2dypxR6ysg4yeXuJu38Ct8msUjdadCEXJjerwboo9iQn3Dq7Sy57jRdDBoAGKHWWR",
  "key37": "5HNLP1qt2nXcBoPTB3LBcuAtPF8asMM85AwerNiWVknfmiVPhArJYMRJgFm7sbLNJfjyRpRwkZKGsVnwQmLeSiwN",
  "key38": "2vzLmMn4a99gsobuJHdJ4ta6S3vm5dky2zTBECgcKhWGrhD1X6jLXXbc7vMm4qaZQUj1FQA16aqPj8sW6MN7zGuJ",
  "key39": "32URv6QZnimRyqUwRpognTckJMc3Cd7G3K5c2shv6KG6vd6YcxfdEst6NcEmUh8qkbjt4gsJR5rS8T8x8ufrErrb",
  "key40": "42jeC97EivadEhst7QmZ1Lm5rD1J1MZqnZszYHqqgy6vC3TexUtRtquffH7JdCKFQHzx1e3ZCdNnCReSwK5YhZQ7",
  "key41": "3cp6LdxDwPP8bVzvCZ22Gqn2VaP1FPb6j8i9QvpSta2y1EY1erDcLupy5mKvEGQLzf358pzV2Bt9rhfMjE1QH9kj",
  "key42": "2ZEmfcrXt4xxrREFsQ1zw1MKLQXtHz4Z3RSjpGtbWQZxzBWezu7HkNsNM7KvrXHysgCkHUCNbacupr1HmzQiVekQ"
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
