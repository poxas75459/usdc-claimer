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
    "2ZB3g6BAY9oXuV8bxWNrjFnq4M1tKgymrRDavVg5rkfbnFFpzYyq9xmGBHsFUAVJBRYQKRKvmahfLhABtPuPVbLZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UWVUfLUEw2XhugKQFWCDnTyJpWDfyD3RiNMrsq3pyNktKhRcL1NK3V7B5ayibsJqWTsECqaYoxp6Eh19rSF5ARy",
  "key1": "4t1NosfQLwxK7nLowGG6AcJQ4Gjjb25SNgEL8NTgorAGeZxBypqqfs2CRAc7cHux27SpQa8oiBNTm6Zt2XQqRPUW",
  "key2": "5d6PS8cYkkAmKnmo968AzfdcDDhTh6R3uAupFy4eSmomQrLtjtboBaWn7i4fqvVCgzTW7DZZWZJ8JTAYcxpJ8KZr",
  "key3": "25U4XiY19W99PdT3sv2p9jySwEG3kSAcjnvvYpFpt2MbkjnRqxiwSbLSemfAqtUsT8jGbAJzU6FVMcJmoGAG9gE6",
  "key4": "4Q2F3K3FBxKhQetL8EdhBv5maPL7wKEGYmMkcUbLrihgRvzCXtEh3wzwyyXjhHgCvSP52737hDo6UqrgiVtzERMp",
  "key5": "dLf5CYmCbjRSSnMCqHaYRC6F3Z1gtJLXioGx7mvjYW8Zo4Arcvt8tAEkC66T87kAgL3XhJoCh7W353TDhHBiNB2",
  "key6": "5D411gTy3aAFYxqcccycf26UcZWW2FjMNAsVBkiEUYyy2i5oEmAz3tLq1RXEy5gRwYLcqpEAxUTqiNRDakQETFwT",
  "key7": "RswixsLF7DSi85SoPs4B2KchydTpaoK8aWkYL7o5NvPkieNe8DWdgH1dmERFBEBbPH566M63UiNoU8d73bAyk1w",
  "key8": "3rYFnQ8K2BQ5B93J2u2moS9SzPkr5ZTMzLegB6ignPLaDjoyBTyzNhQxiFCEmqKvGxFuxTcSSpcwqxAG1KsHqopb",
  "key9": "67XPSAFGAV4HyUEp3p7G7wU32s5WGH4NhvXQoYH744VMT59rzq8tFGi2mHJGiN61tsgmfbGkU6vZfiV4bDPow8H6",
  "key10": "5DyMGiFNKr9JaXbmfnJtsKofkdoX4bi4e3P16BdToJqt2d4nWhMxxuXQhavRkg6zQAgnH2tX5ehGPc2BBAkiUxEU",
  "key11": "2t1oSyjz4sXST3zpmHxhtRgh3NxKqhYrXUEKRoGEoEzfR5sdcAVFo6qsD2RxAeDjhsjA26Wp6MG931oHfrJAVRWa",
  "key12": "zeEFfsSfc5E1sADAqX9cm9jXYc15K2ZCwyPd1eKeGQAAxJ8PbsY9vMkSwXT3DgGq63mPQrAAkmR5Mx3rc9B5zwY",
  "key13": "2fMXpSwpB7SWSqqXLxAknBcpS2dVBC7QezmXHgWXnpSaFDpRiX6uHJkdSiYBirGRJATVWHEQ18BcEhn2oJv7YK3f",
  "key14": "3e29nbRqY1QuXspPHNkJxhNZzPg4dPhUH2wNKsUbhgDZ6AJ6hrVMGasDMMTnWULGKbveiLyAyL4jhPVqnzbocpun",
  "key15": "3ELaViA9EJGxmU1rqhmJfjmu1oVsFzn73QLJjWtnsUVctLfgxTLaCASovmw6NErvGB7tWrc2wQHxoNDUwhmiGSYQ",
  "key16": "5P6eK8hYP4TVJrTpDppV67eeNBLrm48rUnQMHruLuy9hdeSyv2aDiWBM6g6GQ9NjnFt5ZJ89TkCfK7ADVYRLAxD4",
  "key17": "3uGTRWoAAdokcjznfbvwUg1GrYV6UKDvRsSVGZtufsyxb1Rag6bSg3oZBTChNWq1ZjDrnobemHFjHnt38fhtTRQP",
  "key18": "4ZtdJ3evNyaZg3NYzCzTMdEN8fATdLRoKH2ncGkAgN2YaA4EeHAxaZXPBxkoPwc73HsNxR8gh46qQkD3zyveojvR",
  "key19": "5BzMtH3yADnnXEzqEV7z54a2SbeAfy82bYfU7873JedGhN5LkkqxiMMhD1fbPxm1v2XF8UGAcpVHQCT67eSrjhk2",
  "key20": "2NXWDpV7LPXG31jXj6NzZGmhd2wKxpWnEbGyEtrc1EX7cKzan9zBRkQ1qYzf2rgmVH2qZx3KNLmQm4iHFYafBNQZ",
  "key21": "nUmMKQoadxbmEK11VzAobzRuHkpNLLfSuhvEbWfQC8ckQ7qHsNFuVH5wDNYKhVCeMcWiksbJ5HUW6eqoFgfogfg",
  "key22": "5ixP2Dxt9KX7fj8qfzChJxy2z8JYYMQz2Z1Ugq8ATHPwCKbuL2PERNyeZpcXC7KKV3ZXJnHU5mXMYyAFyRy8Nb5Q",
  "key23": "5eTSqMG86E8iVxkLUdjqUoBvgnMNh5stu46oTZpuGQi1934kd4P4xMsqMw26wj6XwMs98BM1BrZxghC98neuvYuA",
  "key24": "2PuAnoJ6zU7i6Nf3Gi41b87izjSsqNppQLarSdoCrDa239H2KY58TR9yDpcupBaX5ZdMy5xeww3pnkm93TGnC3Uu",
  "key25": "4eu1NtHJTF7rLJH7vMGcrjgeqF4U4Lu4LHMQtZ8vugLxdRvR5R3BQoyucbuK51VsEQrmR5rTnXvR1DFwm3MoA6oa",
  "key26": "2xVWFPSBH4gFAuMuTifD838RfJj4iJGXWg3aA45ZBkketLsAYG1NxjiFieZaC3WSDNafzBPGu2qexWQAm3FVguLV",
  "key27": "cBNYNyv9YaPy9cKS9kJTfVzqvKi8cqj9WTjvQrH3ZG1ER238g4erZeMEmpUdaP1CPUnXyhFgSeuZSfP7efiexys",
  "key28": "MPBLvqGCZt9y1oy4EsBo6Mzc2J4meJVwKRhBC1Ex7Ze5UCFuQDeTq3WMMVLAteVUC7VWY2NKDmiALtKQQWkXbnR",
  "key29": "3bQR9o51zLzGjeeqxmXYUQReacg8EdXGzxzYPyVuyTWEQWr6wSohQSZumxrsroQAeRZzwm1XrvtCvW8LeUk9r86C",
  "key30": "2S7ceMRaZzdRDHgwCX9J6ui5auwH75HZ1QdspYQX2nJFLHkiNse2JMTKCCU7jwFhcoUdUyzJ83wq7ufqosuZVDii",
  "key31": "44e2479SC4Vy46YXn7sW5TkEKq7aXUEK8Z3fEfYtntSVj3MuTcKSE8o5LAbFfqRitgAaQR3P4F3B5CysSypffeRm",
  "key32": "nkUag5S47t2GuNbVmThnX6T3jDdsNtd2QzR4WnMcmX9cJ44HYVtpwpxFFT3oibTe3tHGEG8BSE6r99L89pEdKyX",
  "key33": "4Eb5xMufbTVHHtBTFsANetDWFNf9N3LEWUB6oaq6A9t1B1cEZNcoQsknJS3KUrsMdDdHBXzcgUoWCBtpzk55qwux",
  "key34": "3HeCi4tKw4rGXX5W38ARgmNrTADCiXpqf2n4rrd6HqKmrUSQhZCWvXHaNokysbgjMTBokEMeEkrf9MVssJvNh8mP",
  "key35": "634MnYRdK5hAHhGDW5QVHcZVoCFbwVMC9LwzdWxVSwQqqNGzDRTMb3QpGA6PB6Q1diW6D8bqumMPiRc41gtxrbak",
  "key36": "AaNP4aX9ZQ4TuFMVnoXkfbmfiU8PZfYuQycZaZ8oVLuAKrKfE79vXiih861vQ5hocq4gBrBXQbHsK2y2PgaNAzW",
  "key37": "3EAFk76rLnQu3NrrQWM1HqA55z3rdVtKd4Udse3gX6XXLJ3931MuRo7EGd2sZ4CbDKU376j2bv9UGWheY8nNq95n",
  "key38": "36KFmCNTqDG1acaAtzBHF7Xb8JMhnbBfigVS34v3PDNKEeyACmJjpxmTU6nf9Pp2ocouSKhtJRdVAiTvuRuabH2h",
  "key39": "4xqsG8dRyu81wpCPh5Yr8nJXh1ECsvApa1DocRQgo5xodBZGSFZFXR6KWeEADAL6La5ev25M1aoyKiC58sKMzQmJ",
  "key40": "2xr7vTdYWMVVmHGzEzxv8UHuQYEyHzbg7rLotGKn4Cohtfr8RzesWBLb2ZLwqRQViUoLbjFN4AdGtJHGHVYvtkfC",
  "key41": "4ejohPPETF1x9TuNGnQx6rKWCWZ1exHAyUS8m4dUp18kkiWsTNVPT4md8ZLXee7vLFzp3X9k3c3vTftJYdDsoBAj",
  "key42": "3VU9H4J3JURScLMbavynGyu2hhQooveA1JUinthBxbXJdvRzLdKSE6fapKnRkdi565qnBFNm6MARKL2AupcAR3xh",
  "key43": "3tXWmHofMHgYibVBtmkZgtPJqeRe99CNnxE9EaGEEr76FGGUFw9tenGtrBJPEp7aNnVQ78K4JNJo1Ei1U9wqn9vD"
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
