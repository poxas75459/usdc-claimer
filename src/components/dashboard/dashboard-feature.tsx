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
    "3J16EPnJ3MZeH78hiM71KCS7HY8wytJZMeVQq6eZxfmjuYoL6CYKtgK1iK63Y14L5dL8aqKajMrHhGsJy2mwGc45"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "428md27Nu4r7QKq12yLSoeD29764ysZeso73YpuCPPg1VVbFBcXWdtKSDUPPk7f6c2DsY4kP6wMjSH6P6uYBAzYc",
  "key1": "3mmXeGD5cWLdMHXXEwv5jvh52qUK5hiJn8AnVe8GQcmzRKCnssRqNKP87sHqHJtgdt3fGKqGRvWMVEoA9S9hGbr6",
  "key2": "kqW36us2UdfuSaAwnVqb3TrX4rdzr9c253enKDQdqPCwmCjJ7vANYQtS1tDe5XBHwPSBo8uKRfUd7t4x8hkPAjh",
  "key3": "oaueg2eSGpHcaK89yrCah2xK4krWxs7zLFqxK3VHkn9eR2xHy4v5q9jL35tL7bUwnJpUq5RHXS2vBS2NxjjuSJG",
  "key4": "3DkqxrM6mTKsda99r5hb47V2pqwar87NS3JSjJPpto2nR9rf1pZV1XqP2RGp6kboHgo3bHe54Q5h5ypMfZ3aMQK8",
  "key5": "4PCLD1tCJX92CQut7QQJnUcriG8z9dbfQ3PQRvrgDZrWNUWTzx3tL5YiMd5uitE1twARtFosfgurbtGaYL8xf6eE",
  "key6": "4wR1MCBrpWpxJJFd2gXMb82JyYVWkP9HKxTSxjbFREBZiG5PuJomMHv8B38Uomc1CEqFppTqujK5E8BWo2Kzihru",
  "key7": "4zspgsSRGP6yjt3Ecj4GHCWKcL3TXKEkfRPoW4yAvoDdRSoXnNoRax6nj7RhoGhLjWZWPVoREgeSR97MdKP6gDxx",
  "key8": "5wrG5HLZWUhPNwf8gcSkqiuJyBwP84wGdQmogqFpAQPZZy46VW8ZMJfrA6P5YYjmPPxyDqug3MpoowSb4iPqHMt3",
  "key9": "LyRar1ZeXLKgewjdM7vurwP2fXjXyMo78dmK4RiQw3tEKgDHpwHbo57GHBgJHKfgHSniy8R2ermTAUj3xL3jk7M",
  "key10": "3xLBsojybb7JoPgPUGGeTJanUC4x7SYP1wwZwegPXuV2c5PggLepvEvCT9KGM57yX8KXsHc2HkEXqsvwPoEwGVxU",
  "key11": "5LwgKyoiRNHg681KK6kvUhLr12nQUkWGy8uRKAtnpqhyLAR4aaCSpHQAK9P86mLqUQRGsjG2trUFtvMdfJeQYiBp",
  "key12": "3y7Dr9cFTkCQsmhG7uGNRAamKJW7ZmUvM2htYdRcrSNNw2vBxti29odGw7uFVpZ7xpY8fZ4BWELAkRan9EyDRt6G",
  "key13": "4AHyHQssGZp3vPdHKagTA7ipqAR62kbtfqQnVxHcJ1XQPbXpbs6rYSDFWShsfH6NbQ3Rd1dEebY64FmHX4GSg7L8",
  "key14": "4LbeaXbGbvHY5hzZoBMevHe9okUVAW7CEJfNWCtZU319AxBoGCtpcbQucKX8c7DghCNR9mYTqBJ8PWffWDGnjiiu",
  "key15": "3DnSctYhb1KtUNa8J6fsMAfdKTSbX9zY96qwphVzLZZ2uinhEoiSfCtoU1aQHAZ1dVzX6opetB2QXvXDdQW8aHT2",
  "key16": "2BZS3Unfy7McqExWEjegsg59fZ5XcUkubtWLGL9NrfGiQ8zPYr3K6QHoDM3YuStSLBEcKbz1HLkrsZ3iCEcu1ra5",
  "key17": "r94j2FmWGrpyy23ijiyaHC6zhGT8eu3iGamnXxFNdECsdgokKCPUhQMaG6zi3gEpz192wFfzFCXScU957y9sSQi",
  "key18": "5FpFwtqboFWgHFYLNLaKvcFFNFBY2fJuJPP4wXLAje9oc1hXRaGz9axruze7fqCY7tkJJoFobGe14iP6hrRtx1av",
  "key19": "5UrXKvXSJGWB5BWQVtGN4TnhXynFY6wVtvVLHu5CU1X5Za2QSSn2bccyGeQt5LYfRRqDjcNRWPVUSPe4iX53eTG9",
  "key20": "4XM8Ntni5dyr7qp49xuWX9rr2uXxo2iDTD8toYZNRpzpymGd7vzCxSAVNEafx4dHbLxH5ARrPsPsaXNaswjpPUxH",
  "key21": "3eLdSRXcaUHYBzrCe1PUfN2tSBr47xTVJqjRdtTwhj3od6nsMiGMa1VDJymo6QLozuDFKRqsCt9cK6X8RpBNvtB3",
  "key22": "2Nmx1aAi5v7zzGfYXjafYhsrR7gDgtDeYyZNvr4eN1YUPSWn15VkCYP8pdazjzYh8UPuQdKsTu2cyRUzDN9ehNN4",
  "key23": "2XBGK25tCxEdJ3JkQr3NuB2teefbuLdfURXiRQNKEWrmnxS6uRvhvcA6SXrajSauWzXU88H4udmSXPNqs1HSe15b",
  "key24": "4qZssQjG1NcNETnNjgFeHPSq2RYv9SiLYCzQ55MivLQxNqzQMiVTGi16MkcLbDc7iVDtH4yCdnmgCezsapQkk5yT",
  "key25": "2btikjZnQCGx5Pg8kWjAoZDGJKiu23gLpnnbB5vihy3Tf6vpPdXuq18WHPr6TfoKc9ZSvkUkzGXmSCnph6sytxNw",
  "key26": "3keAVdfw7NtUUwE73xXaCv7i3qMRGfsaUV7h2kKu8gqAk9JT9U3o13TBo9otswtotDSRzkhUTUgXf4gimwf745Fv",
  "key27": "Bt97X8WjDaZCAFNKoUuxUZz7xgdmFdVdFjyk61qybyyyYPzg6vUCA3Cs5JkkuRJ1eKvVZaccpwBEdZGPzHnKMpf",
  "key28": "5JuVfsFHpsgycf9hdtM1BoJ7fxcBLzqJL95pKPuczDoAraWpp7GFjhrwAvjwtiTMymosz6QK7QgDC7Kns6oJEf7M",
  "key29": "oiPfxbD1DAAxQFTd9i1WtXj6LHojMUbBGG9zno6eZ6qb9zMfihCHVbeGha8Eoa6K96GCuuFJFgMnx2kH6FHQqcZ",
  "key30": "3SHR7Hsfu4N4y4Q8xoynn3xEwC2dXXSbTGmgWT7RWjwdEPpCWyYNBE5skiwiuWfURHCyxe58CRuvdJEqXEpc4yix",
  "key31": "2jq5JRYSm8iiNjKSEDy4ZMng1NPYvvV1YbbgyNHk9JN1RvkfyHgs2f1UZvZC3u91wZ4NK7JgGDbdA8dRt29VRRVW",
  "key32": "2HSwF8GcmnCxAeVk4BDAWt14jchPRi6Di1gir9E4pbysKudiY1Fx2LHcHpX24jvjrvtnhpCzXQ7jU7M6Sa1m62EX",
  "key33": "3TvtEsoqdN5TRgwCwcYsT38Evhi3Ae9sYwHhHaxxGnc2ZPrHHNKE2v7uYevUSVXK2GrUfPN1JL7ntmSo5fHnsaKJ",
  "key34": "2jzM13oBCiLVBZSLYF8c7yuuV53qKE6jwFprBGKtoHduNkPH2WuY82XchrggfYQ9LyGrj3JwDciNjBUtoiBqzYi9",
  "key35": "3Kg38f2KKEHE9rCWhC6RaWCbSkJRw5ZKdnytFa9edohPZbn8oVfzKZgexdssvmVCrVa67Bc4sitrHkV8W7xtP6zt",
  "key36": "63c5s4s3eru24mydCPLP2G1QY5GReRHJJj7RZFnBD5FhWK9phcpYi1gokmoz8wgVoCAgqqZw93L4GU5ZwBkwsB4J",
  "key37": "2CoVQfWxt3Kd5UGkvgAd1G1WRBLx2N8bma9TBcEv5dH5iNaPG33xcZ94E9qhtbAsEL7fw6eQ6UVpkkb3HdyyiRmC",
  "key38": "3Xzpbpm9JV1ixzSXYCVfTqXTQ2ErPA4nB5UMPHmFrHxTqo5gNtred1BJkw8LDm3rS4g7xXj22tZrMvFNtD8h8cjv"
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
