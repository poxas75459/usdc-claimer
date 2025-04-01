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
    "2mcG2NtTcdL4U9jtiKnsLJwJQUKgnbFVT6k22sKzzvQWaEh7tt2HuY8KKLiqdvd2hXgkcLR8XA8U3WEAhqVhbF6n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "359eZoSZyqesF7EmLvrMwr4UxwuaXjCMM1QngNKTF2UedMRoZBqrFK5r1JQx38xms16vT2XgPtLBBUTkNzuk35RT",
  "key1": "4SGDEtAkovcgBL1s2zADdnSwFf8skX5pjjbwpER1jVbNKRt1cYK8G6fD1Hn88Lh6wJbRsJqAZTtvuEyqcya7uaVx",
  "key2": "3XWFRews7fGwL2X7UPPK9oEM7BuK55Tga7xby2QNstdDugmxd4VGXfKqHa5yZoieJH89MwSgxXaGAPbxgyF2UQGj",
  "key3": "3L3nc19S6HmjacFragwUW1WbRJZKAUqv8zSoWDDsooWmtR4XxPdvrvrSNYt9uPaBnwiKqi6oXyYeCqwyKJtyiTrq",
  "key4": "3S5vrM8isKQDWWEqsLLMcoehdssNSrocUP3LRKKMu5AsUc3KF5iaoGo26mETRjPAPNxygrzGVaiWy8ZTQRnqnwYx",
  "key5": "4VWov7kptM7C4ddCDMgFciz3NTb8neTfPokxtmoWZeBCdPmyCFto9ZzM4fWUaquAbURpMA9Hb1127rhwS5Fw2SF4",
  "key6": "5ZPYXfZY8F8xvDZwDrhhiQtopcCqpC14NNGGy2to8UYEDaNXvucpGmepdn92KyqpJomTTVpHPHizMGjxmhTTVaxW",
  "key7": "4grFi2xwfMZouohr3DeDC8eDDycP6qZBLgZfmzgS5KMJdKCv5pAXzFK3d6daTyJ5CXs9rArjuLMnS2XEecQArqyu",
  "key8": "2VkjLELCbMwbeBqxJ7ogaEfgFtqi7cAEWtF3e9eKvWanwsBawnkrn7cMxPNJCuEWvWqucxwGfMvgJQUo2tbksdEh",
  "key9": "2EWKKzpXFc4oaEZDRBS4cgdoSEnQmLRxWwmqvv9gxBRXTuZF6PvDUqZdrfGTfeERVQCiVtcffWLJmrxdEntHG2G2",
  "key10": "5cLCRXaA4H24ag2QRbSnSxkGBijNfAVarwW3mMVuXnBY6puLscNqTYnhckYupHiuB7FQHynztnHhFDPyXEiVvWXB",
  "key11": "2946hGqoCKaTuLAcepaWTVFzFT3FdBVjb9WhqwPDyrmQzmpGbtoREhZLC4cEW3dJgCgrHBCfP1GfvH6RTnsRY9CP",
  "key12": "5BCH2ngJ3UYXXddCptDA8p7QhWppJUd6wycwqQjqxCTWrCrv7UCcwQvp25dKnVnJFbN8thgxvaPCrC5Atpurikfn",
  "key13": "2BcwwEEjezo4DCYrjbsTzvr4c3VD15LswzTYseXnfBabP7VaSkCtfd1YZDWeB1Ky9nRFrJBsJgNQZevGjmDnWBgN",
  "key14": "5jqsDudp6hyjUMTQQnnHHAA8vhAxUKY8s9uaFbjBfG3BqpeducTJxPQqpv13fw37FKvaZazBfAxKpJCAPxGdTJmR",
  "key15": "2v9VsHRvBiaZqMUQvb8pdMb2BkAdSFzgDygE4g5Pv8PYZySpxjQfvVmDbtGJ3t73uAsbZ1jQWi7CxyCMzcYEyjqS",
  "key16": "qspWVkRspTdagZCohERC4V2L2BnzhevmHbji6YKMinmzjTWuBZJNK4QS8j6xN3BmqUCVBqEfC2psiJY8upJ54DR",
  "key17": "2sNuLpYh2VqoK1Lf9A37qi6u6Ju4opCUNF14rSt57riZ35XkkpGEYG7Jr2gNf9CfAAfT7uaprvjTrNVL3XMsJNRd",
  "key18": "5cYG3wFeuXBYvaBgEo7D4eUdc76EFj3dQhUYEpVWBUcdm9oMKJhzapZ1ZvyYjdkuUpkF2aXxvHMNEZ921A3GMh3J",
  "key19": "kwukUeWpLtg6CL3aWfphD54WFUqwb7Ri2pdSuH5gpZtgrLG1G674nD4S9ngqcDTxP9VbHEkTeoMb61HfPP8dcbS",
  "key20": "3Fs4SEDhazSJoh4ZFEMqUjMGCr1Lx1FzX975ffRasjsUXMhocae3i46XUxdWUJGQFBRVC3ozZj1zNqWRJfrNMkJ3",
  "key21": "faXHN9eps8uyDZZfvFrqnLfEmHN7Th4b3K2TamtyZ6CsFMitEE7z9Ji6o5XYTnQdcXMiq3EGDMnrwEHKnabFk1p",
  "key22": "4PsxnESTnQNypGvAXpuqYpy6NDys8F93bkz9forjXwNT5YSwfu5EL68xJQZqVUkn92cDkgQpruXoXxLXAdGfK4YX",
  "key23": "2EPLUp6ZFBYv4SLhRqe9S7QvTkL8UjS75rpX9E7TXLox1oPNvh3PPFjq7eKRgCtwbNi9U5EUyX7DHvh56gq3HTCJ",
  "key24": "USTaQPaYY25ABdHV5k4Sx7VVpFdsACaQhPG7bbr9hBDjSv7udcKbw3774HL1Q6pLw6FgtpkN3395TonHWFkCbCq",
  "key25": "3iBtXKc8JcAyzzLKJS2mjf8kWMFWtjfyssir7sf6uF9zPvCvBbTo876YnPo9EwccZ9cHufyABp1K4RGM5vJM5Bsv",
  "key26": "4tik7AVVbogxE9iVXStVH6kuGt9yRj6Ga9rBeDdMN2HP1huBSkemvwXVCZGXSMrNAuqVMBWTHMzMR5YYTqgxHNmF",
  "key27": "2fBzHykWfqiwQaokoHhNuhAyZTg3FesxDrpuQHupm9hdD59NNdspcQ2vhfVRLt6oKuPhGk3KwizdGwELTbJsUbvN",
  "key28": "2xn54xeDqqxySEvJqvJqJVBMppUBySeivTDmVB41GCSuMx3iVJsUe8i1WSth33uXip3KubLsGwEDKf519VEYM8Xp",
  "key29": "56XW4qPyU5QvK4gANunyHnefwg18cgzqqVhyvYt6DyZRz11JnFAjdRitoecY5bsafGyCwfAdRm81U2VLkiAswzY8"
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
