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
    "54hGgehppckim2YGvktLJwYsW6jBUsLxWyuMyz2WbLKFa3CMgbkW5b31ZYWtpodv6X8vtXXu5XeDAgyX1ypiWLa4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZSBFr9iHNNCkMfDBkkbz9h5QqyckYiUN7mx6mpeKvrYVxgfHDext3gruEjQiHcD9m6X3Wu9HMTdJtQpWg8r9Kme",
  "key1": "57YSbDthFaHtBh2KWkwjnDgBoDeEBnSTvqZkTiKytPJpBogsnAsSyvYeKB4hz9JD152NitCG5wpcL88uBLYWbvmx",
  "key2": "4vA6XUBS5HfYBvxYyCJ7VzB99zyHzg5n5qARRzQZrnHCGZmgDrtR8x9ewzBtk3wCJH197p1nk1nQ9FfasVK6QFWe",
  "key3": "5iYaHs4vBkcidZg4UE3LUnwj9tJYjJbHJEYPyYjcy6rFKb7vUfSCktAKB9zd9zvU5UKeJAEqDhKXapdsxSLvAPiB",
  "key4": "2ydiRWxgmg7K3qEHFdsgi3akHa9Rdhwb1ZsszLwUknqZnN5CrsD3khhN18oKKevbfAA1EDxeURAi1QagcKrxpeRm",
  "key5": "5zyxra3iCtvqGtL4oNxb8gedTJXq7XNCSDzcjvub3BDgnidLxqtc1AVX48CmTowPMCWVTov8TFXCCoqExEkcom3A",
  "key6": "ipNjxTS6qQqZotNL4w8vcPunuSzYs4o4KkLLizrmx2FBnAFhsrk5QsdHTtTAq2THdaTuNxz82iszUTUWbbmvy8s",
  "key7": "y9ShUFJSJocQwE3dfN38GS48MXsBmiz5x2JpkJW1DCSWMxYg4mkcmMF4MwVARK87qWw7spZjEaNyitjTWgzHuR1",
  "key8": "3JE2htNdDdZmxcNihBLDGq9UMtAtLVW1veyEQpAZ29UypifYnPSM4vPvmvhmJCxLt9mCRsZpYty2ZQ8ZLT1oZ78Q",
  "key9": "3CvZTVFKZeKK6dc1j42Aehe3QroYE7JoA74redphwHgqhuXRr7KTpmJHQi6HZ8918awUQvPNVNmCnF2oSVJ4ZKLv",
  "key10": "2KqPxuvnjbJPjjnrJX7whAhxfSUxwBZm2srQyC7xvu5s58TLRtiXwCxSnv52pEWH7RC4rP9x1BcrdVYHk58zbHCD",
  "key11": "4XDjsuEskfMvwd4uqrKvANApZDG79onTeWmqyZF6GoDLzYKgHqdTZsNmTrKCVfdKtYAZDTK73kAJYeFycuShXENr",
  "key12": "4GTxr7QKdXrGPfd1wqeVYkrSyjLUdrak6VqjvNeV9oFM7KhaK5STXG31mkyALuCXS5iu9pKba1wDLJNJRYAJdFka",
  "key13": "4zqVdm1U4X9pie1c8ZUveCCFDZzu1v1YVbgiDNWkef7W35gURAHf9bUuCVKRH1D4uVauKeqhiLMZSXrMoHm31WZF",
  "key14": "6So5RqRdjGmxhgo6exC78ADV7yv7ihqLiRLDzkBSnmcrpAyuyPE2o6nwjdPxqpsxtQPy8dSSPsPppoLhSL824Cg",
  "key15": "t4V5p7kq1cq6adcTPeQNPiqMUVVBrhffwCxkZWLcuidtHfPuhBBC9Qpa6ubAuWi4CXQE2XHag4a9Ue5Ptapgufo",
  "key16": "3YzM3isrepu7v62uEMrfZTzmSKUnmQpKaGRPT3UGLWxi6jrzCEXdr2RJGH5pXcv64NrQ7uLiMWsrPCiSdJvZUPim",
  "key17": "irMGFqceqo2vBEkJzDdhYft1joNkPXoGYmnVf1DTGf77Gw2UEPD72XbvVUSsJBX4jQau1jj4cDHACeNXyJFgUmm",
  "key18": "39KNSJuYKBaZzEywGiKdyKpxfh38wf9CQcjEvpDCwqTR6egURNSUesgoztAnVeB6ao2jNuKMpycLXh9axGhe5yNK",
  "key19": "5pBbgtuHYwo8yqDD64wb9jGTBgnXoZsyDve3Boi8BpbvrWKQiwGcS8BKy9iJ8brjKYeQbQzFeiPSWS2kyRx8Kr6a",
  "key20": "5ZUAtWCTdPehiukd9yP3LZ89drYaXRJPZE3M9pUwCYoPQRzyaqp8tWNb45S9PFgbR243FpBBYQToCKQD6R8YkrcN",
  "key21": "3R5RnSaTv4teFbiTLbhRfiLkdQZjAn2jrNVg4tN75MNUdnPeHgB23kqnikKHc25PeZ1Tg33YbfuxKGuYubxZ3EhF",
  "key22": "37P5wUv2jXjvbPJwmxTv8rgZfdqfWW5km5VPxjKb3fnmdqZgksc28HjN61eJtjUDNLxbhf7b6JC1b91eBGXu4iNK",
  "key23": "4bqgrqyC518C7VLbMypFdFCSochqViU5Gyb9yg753kmHpc5sx9p6GAXBrXaiLKmoFLQadgWrGZfnFJHYz5niQmSN",
  "key24": "4b1N9AM5y4u9iWHYPVc7skZHSLzh9TbA6MUCTsYtysAwMW5NjpTg8X1gmnbZ9kg3Fp9CtSh1NZzYpVUU1SPJJzUF",
  "key25": "261Jdh4A6SewX1KSrHXQXbzpwdgqcNshucz6ypxVSJDzLoBSLvcfBJL2RxmWR4vzSiyYeM9jsXPoyB5a8iUGSbm6",
  "key26": "5dzzRtjhm2xrywpGWwzE91EpNcubScTkoHHJRq5PH3KmkdBQfXgHM26kiinsdaMPvU3C4QP9vT6SJxKo99fESEzr",
  "key27": "56hJ9ki4JUeLh5UPiyKHNxkbXV3cunzutpV5HduBFPyP42mfFXK9F2C4dhoVEnNoGy2otjp74EN9S4LLkB176yon",
  "key28": "dz1NN9YKkub15uqtZzthRNb2iQsUbcd943yQAzsoXpytJL1kqCKbonG5p9xmA48XSzxGMioV82qAuYKBoKVufmn",
  "key29": "q1eg1HX94vACPULugSzpn45U9VsVMtxhan9Fc4ZctEmZdEePiJn4UHxeuCSPMYqPWsgftUwd1UCtMjuYYm1hHY4",
  "key30": "4CiKm46D3ZcewfFmh6fKYKEgy8RC3CCa77drSmCex5KeVpUndfAxYpr2eqWuzNAR2TEYFGXNQpBtVZk5LmwestAs",
  "key31": "5bdUZvb4iP8eFbjQJEzgirPyrC17AbdJxdB1TxSPLnbo3THhNqpZRgHDphdDbLdETGHRvGVYUqJ4wDaEJR8QvUva",
  "key32": "5aMVdBvCKWU2q9nwS97SZDfMCSHkxHeADKy9KCbpGPiM6mMHQhL6xmmNNJWZD4GJjHwyX7Teumcwp6pBWNWaGAXT",
  "key33": "3psCmRYj6SqRpF5HV1f81BRWcydJXAAj9sJummo4nYQymoj7oAgJHoZwvfxGysDFtUmiQMroV4mmXWpUVGYoYVWb",
  "key34": "2eF7LYnmnESsH7CUyGW3QQMU8RK6i9hZTSPcZvrLYakSqjfXFZwBu5c1dVDZ6MgPsiFUMFopL6vpEE6JKJuNn62a",
  "key35": "26CuwAgJDTAqJcGuDeoAfrr5eatRcZ2MFnCJPXUZjBVRbPwZzfhwEK6UGTAzhvexU9JWW9Z53xsuSftFc8HcZsaj",
  "key36": "qJKMzyWQ4auQ3bCF7ofhy84netdGBc541t4eEifNrQpJznUStmtTr4cmAQMVnsztqAsT1Lfz7b7sCxKEb2LhTcs"
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
