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
    "3o3Q3fPWapGKjzrCfQN92M42ZPQURFLAQA38d8TQuM9kiVB7vpnhr8pwQLZRupFusFchtdkafdsrXdDmLY9EKpyr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WxcBdXSYDr63v1cNUEVEqmcpqkcAPxLzBUUP25B8F9W6xka8UW6xNKwjEZsa4DGe8VTa3tUJ5RFyXSw8BQsch7h",
  "key1": "34MqnWxFWLqHL3aVkyjEfkuvMFFbvyftaAxXtLboz4AWRDUw2V6bPmmAP1HGwvHPr5d6GhUoqf7Jj1cZm3AGnUbw",
  "key2": "ioKVxk5XKUo9SzeArx3XjbMwPbya1uy62iSHWDbxLqckjMWfaYiQ6mB8ect17oeuYBY7qFprXsQTm5tGxYeiuMh",
  "key3": "5fpP1HMj6LHBTkzJLNFqJSdCCkiyLzJ1QoEWCryNgnXftbrV6KBMJkz2PyQNKf9DPy98HFJJoWeJ5Mw4tbpVoeS9",
  "key4": "4wFKiRaWFw9aenm6qm2n7pGXqt22Ljbinw9Gb5cm46fZPTa6goYzTLrwEiJ8Zsk1PxQAUPfF634UH7u6saJJx35M",
  "key5": "51PWB3tYw73rwGbrdENJALha5R4PDhWEMoovmZd19uXxw4VbHmWpUPi1JZNhNMvxFMuynBatjQvZgNEehQgzP24S",
  "key6": "y91nPRpMVtFgkz9oJVFfmZoCybY3WyksCvT5UwM6pFN7Bco6bee2AKNrBnz4SkuAZiCtWoMSeSkDmWSbodYUpji",
  "key7": "DhLzUZ6tYmhX1aQ156vTjN5wF8xgsur6y8d48d1aAzPZ8J1aB8oipPKA8DGM4jk3jTMYjumsGMjUHm68bzDZJrR",
  "key8": "3LNZxCwPLTz1bynzoNjcFMBUQHD6G4uy6YUHMGn5sWLsTetbALBUA13VQeyK3295y9VFdoqoHfQq3QBJ5gSExisP",
  "key9": "5GxpKvCXexGyxLqsncDZFKubRECuxKFEtDeQEyTj4Yp3Vm9gUYk4H1tyjoRbfGjwrqVdZmUHALRK8duRAfqnX3DN",
  "key10": "3jtbvM21desQWDcFkzmcUvBeXNXBSQtnLMpvciSahNALyLNES3n7VMRyGJ2TCmofKWxbv6STt8p8jwHCB2mdKvbb",
  "key11": "2oTnbtngi4pSNYmgqN9Vn9ZjMM2dZbz8ZJ8HqR4cZi9TPHxs2BEH2J6zCmzKgGcDBtLx2RzQd6MSaJCvVfoeNEPR",
  "key12": "5vLcFhJkMVHkCCoBgN2NupqaKEcmW56DVPkAfHRoV8CTbUGKvYPSTujXfFSJzWxP8e6ivFsjaB53RXJJTgCYerMw",
  "key13": "2hEfHKEizgGrCJCX1JwdBtNL6dJuEHsgsFutWPYtR28DKoXvUQt5vKTVhqYzPbx3WfF9kfu8PmMiD3eJeGoKzA67",
  "key14": "4JFfBxuCMxhxBe1FbNHqi6UMpYCEN8bsxP4xGT5ANvpsBSyG5q6qjX7NkLBmE7SjM4GoABF7WLyvrEEhikFY34VF",
  "key15": "4ayw7c9KunCjK9YH66ytrgNoVX2jgdgQB4SxF6W8Y2gbhotgJ2N9KQVvmy4tg6FV4TC5LMMZJcpuPT4HY3WoHYbc",
  "key16": "3kQwkczqevupzDzrtfehvDeu6jjst3M2d5qn3h81So5ZwGuAFBrDCjs4TNWRxLqG171E2VhX5A1QGxcBQFex3u7D",
  "key17": "5wFMmRwuK3cQuCQ9tmk7jyVE79eHVWkyE9m2DLKRsy1LqXxKjmSAUmED6DnFP3sAQGK9Dy4ytygWAHHp1qWsyxrU",
  "key18": "23qCzQvTayH5p7aJBRH6ArTrcm1Na3GJq5HNDT4xwgDeFqsC6hpy1wkorqnDdNdUQWDWGUpkgRQVpJQiCooduiys",
  "key19": "3XA5tAoPMrenwHxCcFiYAkVcDnVYwYo2nNFGb1nyWTJxHX76WJg9pXNCEL5zckVJMDEmSi9TgRvYfK1b6P9ggiB4",
  "key20": "4r9zpYSB8GsCpzRB5bKTqCgj1V663xr4aeXcU3FQkgbVYFgRVsEWN6BQed4iP9JLgQAkgQWDywjJp9F2aZwx9BeE",
  "key21": "4sMRpUPsSBE5AZFpZo3M5WggdeGopduRxYSra6CuAt7hq9ExECVYWdgV2Eyj5QLiUY3ckife66T9aBmZfaLrELGt",
  "key22": "37KxKYsmwMMni2phhn8n4KmbYaDJt9kmxJrkcjc3ioMRwYNmPvQ5tLzkCeZdfvRuWDnfGeL8Kus54bL5vs7N2DP1",
  "key23": "5w4nB5Ev5F9ESBqFp1QTeKiFFoYMfdkZQzJmcmFNRCnecixKuKa9suFQVMwgqqaECcd7jsGjLaCBdWv3TUAWRMFa",
  "key24": "2e9KjF8bDgbBh92JkavsHLc9N9BXHocgWgvrFajcFZzzEZFszXmJVNV7J4XWojpEj54dyJVktaYL2vUfYZ934bNc",
  "key25": "4ZL18F7pTLUtoTGiLk3EwnV6Su2PFa4WXec9UAuFchbo1n4yEgmrFYhXUbh6c2QbsYyQAVZEHpbBWUP1rt6AcZvU",
  "key26": "5aEMZet67xb1BLEgAREeq8KowcZrezey1aPmqcrpXTbm9983o45LQdgJtvsMA1Tyeet6JDyFncgUTzodfCtZCz8n",
  "key27": "3q8mQqSr1Zo9XDREQyeQxAqkv5qD6vV9mJjuUhE4CfPvnq8HBzniGyvN3c8sZQCy3zEamUjgkaadJUtxtYpGaws7",
  "key28": "61LAkAD5JDP9ErjpHnCRswYqF6tqJqB6fDVdPJNsDBSn9rhxLMyqMsCeHAdg7GKytXQTP3dGfe6KkRN3JmSofmce",
  "key29": "534c3AYGGfpVao2bBRS8AEEsKAyjNsk9M9LefpRM1PSS5v1HDoRLnmpBuhiH6p5Vy9RTNoGxjqzQRjpd4CQ7odVz",
  "key30": "3oVLMdxw2zvr14rkMyuYRA99UtiVEuNcmijEP7635gKuwS7rcJ34Jm1CKtm1HbYmkiopAC3Dns6fiyfeXU2FD9Fb",
  "key31": "4oL3zxhxJU6ZrGXY3W9bECy7moAQrLF4SXxaZmnLdKJmwWuFJ8fjMAoCQNbcajvxcq7VpDCDBqhm7cLvxH6XBGV9",
  "key32": "3RQroPLheSvPccqUoccrosyFuZUrbdvqFALq8m4QP5w7pzCN1hBi5cDRqyA8vSr15fdguJHuewMJHR3SNN5LzYuF",
  "key33": "SrFqzUiQWa9AECVErTbq9UpdGWm5zn6PyNvQKVZqYHnaddJSwEaY5Csg8Rvge3x6uYcma8y5eWvwoAkpeK8y5xS",
  "key34": "4Yp88FWDFhejEA3NANdHeDRZwVWzZw5kjYaLkApoNH12LKygdSjCaRfgY4vzHqqRgSwh54wK62p4P35kwzF5Fvem",
  "key35": "64Bncjz15fuTUFXw1MQgminn85CN6xndoSvM4y1RkyLZjUketTsXgRZiAn1J62x5UXELaa5Xyk3tazcKixWs5UFA",
  "key36": "3aFptp5pBJWdHiWJ4MUu2vD66BzUSVG9uLcnFAps9VtZnU2DBA4QaxFoXmasKU5ZQSh55RHbGXxCkoYGgak4Dktk",
  "key37": "4dKWVWy99Ysmr526cXSPypQp3fA3oZ12tRsBBcvX1k3scxtCYwqSLcNP5iGxcG5x93RrrAYzAokjQG43PSdEwo9c",
  "key38": "5PwSY31SvCszmfncX6kQvUKAfXgiyenndUN3CazT3fmXCwyaEQJBZaAMRoDhKEKbn5HDY8apSKoddntDzbuCovQb",
  "key39": "4PTJuW8ZUtuPtWBUdd6qA2v7fvJm9snvweRJcxkXYCQPCPKR88BrXEdFDzd3vXnVaiqt5HsXF4ffHDYbmr43efCo",
  "key40": "4b3S6wumy39qiSHxKdKSViP5xJ5WyQ54KNft2UufQsFWRVkb4S55YgEmbNjUwMGnDDpMyhgrcG4o3ogm5QoLD6XA",
  "key41": "4jRSX2kggneV8bbyCxmACsCTpRTsNCUwY3FeckrCvKrAmubcTD5onN9dLzftyMjGDwkssVvhPrWriuv8ckDPzdQf",
  "key42": "XRnV3YXqZDSV8dtGZUDp4Yo4VTuGnr1CuuYFKYv95FmpDiCUzBbDCK6wY4abQUtgKK8EAy9Jm2dXMRuDfh833gt",
  "key43": "37ohdWy8tESW2J5d4QGWxs4XiivW5GrX3WHKoUU2wBEbtyj7kqqMyrD21knP4MhgsSar64XhnaHqeMq7VCNLyn6t",
  "key44": "5YpCe9NU5u8PCYss5C4cgPvmMvvY8yDRnJ3q5YFAVXgzPX89ShPCs8NPm9urF6KNy9cN9KHcqFwom5tj4H35hVNT"
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
