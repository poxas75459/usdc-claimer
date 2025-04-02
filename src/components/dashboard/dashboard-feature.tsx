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
    "3vpWSRCNfSVip5vAWtyS2fxKyUEeUM4mrNBFJN1HFTC5ir7mKy9L9WbFYqVNszR94wA5aCSg3x5nsDhmNe99kXBG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ta1BNk9LGBP327ZcdnUsUNZxfsF7fFm5mKt7jPVjeN82yjZhJqzfy1UiRUWXHeMGuEnhjjRwyxkyE9qELkWtRqW",
  "key1": "61DDz1UpqYZian6kcAoGGP4c4zkXCbaCHWod3iWjnJS8oBMCax3EEDtYe8HmnCD6iDTXYb2keWyHSqzMjy3uwhN6",
  "key2": "3zSJMMF5Dz4jnWLStZovZoKkMF5vofLsPUopVSq4y6CdmZgsqhqxe9vPVwyNwwYPDD9kpp25LDzLtqG4PnrVcPsn",
  "key3": "3TWx1EYWrmpzCq8BcxhDTCXa7oKGrb6zGvegytXMwZ4tfTbEEAMSTPe6vmtMBXxwHUa4Hzoeg9qdVkEnDFKnrve3",
  "key4": "2pQAvj3dJvzuEncfpvgmMiSHTgbBJRKwfQ5ScDhS5tGJas89dQU4ckTZCZQ9NB3Y2ewQ6Tf6HpTpfzDrdSLoenM5",
  "key5": "5tqGUCwTpiYHp4GGuYPCx8hs5aarKA8fr1LZmRg7tpyqxfaY1ZECgn5Md4PyfZu1vuxZ5xvMKmYDX7XSA2GT52ef",
  "key6": "nHZX55GiSpob6wkUCW14WFJH6jdYqq2cwTzxpEtH4kKxRowLxcvBCFmyQAUqbcHLHbQMQmgkeV4nN2aRxQusd3C",
  "key7": "4KyCcHDTwL3czs2DsByvrU1pQ6pr3eN1jVtvgXMD7dhrqVzsrryYUfmThYJRsiU5np2RDyGxNCBngWsfzvhoBXBR",
  "key8": "3mtcVX2mcwsNSanowdS2ZyFXfDJayMKiS2y5Hbneh43ExgjQmb3CZqnrLrNdhZug2ax3TYaYTswddWfjMqM8SebB",
  "key9": "45orE38PmAZMpQC56g8P5rUNvSdBbFPLKpqYZocJBRnGykF6fgtJDb5Hft57CTp1ec3g8PDTdatUutcWfXKuHfJk",
  "key10": "1eNDeLtudDF67jy8CN4zbLaAF5LrUZ8PvH1q4o8KoQrwcjbvYiC8Bk3j4ai5i8rCHH3XTeg3x7SAk6GfKSmwaTC",
  "key11": "5s3MyXw3UijSyrvLtZvm6SAhsoPdfJQz9TrrqpFWpwetCYjGHzbxNi6okHZcMzwSY2SEJKaoGFmxWAPsRfrwgop2",
  "key12": "2p1i8Q3asx8ELvaZ1DE3EnEJMawXfFJfavwyjqkaGjxu1LZaVP6pCVCWf3UUXVKyhciDV34Zwe64PUcb38tUcLYM",
  "key13": "2s6uaGg3KXFhcoeSBajAnXh1HEMpxo6wrTieWXtgQudvjSUef25BneAupzWmx2ukvrRhNozBM4e6pwDPDWddXeGb",
  "key14": "Ypi2e4N6WBrDf2DEuJBsQEFBwJWNboEgd8yDU5V3jygocmZJDkdgkEPfpfK6uptadFWNe8aDwwWUQivLt78GWo1",
  "key15": "3T8dJMkTjqTDTnB9ETmBc6bwwP8WFFVpycbXQPGYwR9Ku1zgtDXtFZhgVfrFHzkFEgesLFj246aHQhzaEXE18tGn",
  "key16": "5YFNhtavSaTG9Uaj3Ebh16tTqjq5euDJiNW9XoFcJgczfPzJgR5WpviKuBUTsKvc6xGHgRaDhKuVAMKi6iQT4Uoj",
  "key17": "53QC5XoXKqvX7jPsGR4378oh9pqt4ZoAdRnDTAYpQgVmM96e3oMWDj9mDU1xj4iDshNh9wnSPt73Fbu2GvDyriLs",
  "key18": "TrnGi9eFoK2HviCPdpvWN32yB9sXRqSWFyhYr6G1VtUk8fVrUpC7xmJvx32AdRaUQVANXscAPD7FX2y98pBRPvB",
  "key19": "5HRpWiTJBUZfXuBG6wDfzqUqhdgLPqoeNvh6msLWyxKFe1ABCuVKhdzJtkX9aihrdjxqExeyW8XXtn1tjub7vswM",
  "key20": "iqBS1k9bSXvXkjaTusqSDnN12AgRsgPtHtehgkkWU4KxR12n2rUvQRudwo5Xz6qGjp1FV8JFDMuryDQMcCGdvzB",
  "key21": "5hq47Y4vFpHRb1Z5yQyZhQryHpWMPc4xyoz6YUBqJFCHAQVg9PSuNd1st2Wu7KPT8UqkqCEg9e2D1ZFFsEYXX58",
  "key22": "2Z5iMPdXiwN5JghBUVB4paRNAHoFytDcaW7oqFk3oSeBAYPpWdh6HDEkvH5MSk2BpsiuPX8eaWuajbdZMkuUKbTK",
  "key23": "2XrPqwoPxwjRy2iJxocvhWgSgmaozL46MucmwBrxLvhYr1Uon9c6HNZGk5B5wUp2P3uphhWoK7RAmpsRSFaSD5yU",
  "key24": "5NzCcqm8YWXy1hjrRT9HVcLQhG8seULdXPFfNVqYjwozHqKNfAyA21MDR2zkGVXUcSfGwnWNiLFDPqZhEpkjJNRy",
  "key25": "5TpVhsoSsD8RcJxFo82y5wy5CcqDsqsnpg958nwzk3kEC7X7Vr4g9xz3YEvDCyJMDQZarL24fxhmLfE9qAJdyLtv",
  "key26": "5hKk3ChkhERYLq9iE8HL4ipgygQkVHUCUWqHwh9ULRb1u9ExSBP4uUNQZEu3ZAV847u4j781yk9ZuTBp2UL939LU",
  "key27": "3o7GX9mckNzpeRCiJPu5MCYgZbKGoB93gnTxHMRftkzqqRHCcjwdAkkhsBoEjbeuFWHpgD2nzNsPN19EaAANz9f1",
  "key28": "3YyWTSzawko1eVcVUMSKCxGfVA626URgiWkqo9wQhXUxjAubBQjMnXWurdQQjdY7xC7LHKgwuj7HYx5CPjCGs46s",
  "key29": "4EaKRLortfBA1agTxsLx9vBTCsGoV2tohPGgd8vKbQNy62rZ2e2nPHLmKeqRMjoRKbjxi6etvWEhyNvGvdsPkR6p",
  "key30": "53xphyVYRqQhtbfS5nUTH9UqsBoSwLDXHYrQEADtoBapNHvRdrWMNJxcTFjLvBVwtWwqP8Haca7132nfHdPTDB4G",
  "key31": "5AjFJcEmRggczt8c3pQuz7QjgknT6pUhD6QM7vKtHhWxCKXc3mCetoZkrCRwFnVB6sZUkYXxjLSCp2DgSzRTqVSV",
  "key32": "U5oc3G3dqwVcXFSrSk6dkq5XC8U8ippuSbAFjdUBuiWma2hpQJwAawB2QtgQ2EGZNBNBZQrJBNBCRdocV3piTgT",
  "key33": "3Q2SF9nTvdZRHJ5WHA2rJqYyqSo1tRzBhHW8UEYtXzdFk9qEPfoWvogrX7NDrMHjTUN6C5vnWm6Z6zfzZDkZbpVr",
  "key34": "3n4iUDPgghYpZnc11besK2VEMHazt9ZWyzyGNyHAkT9zQdGnfQP6tzTvmcA55etPhQ5QpyK4ccTneMR6nNAHJahj",
  "key35": "61tfVLjy3Wa1k66JEZAjbVbxu9nVoN5qBM7uBJzQqbD75WBEkNdr3xqrNW7GwcUW7qmmQDW1wtWFPJpNCbK66eCL"
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
