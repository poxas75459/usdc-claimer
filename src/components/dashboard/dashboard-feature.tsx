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
    "5FNR61Q1FFQ8ew4Mf8F6PdjcdLoTvQDzwgPdrkiawceqC9MiKs6TvXNFnwDdhkRZiUC8rJPqzrzUPMaga2XQfUBy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67Ej63eTXfdzXzRcZYaDxYH33b2mF3tHzhAz1QaCk3HZJAmHAJy12Mp39JEydZN5Bt719BuMaeLGSA1pxn2KRVAD",
  "key1": "5XsSpyqiQcXjXMEEqB8o3Qw5hXC3vdnSmjBKA24SPkBeq7L4Qv8CG7vZNkkfcD66ASZiQcvUL8JBnaJjMgpWz9iq",
  "key2": "48uG9PaXfGXcspCJLU54pFanSYRQpNAafxSjMoX6uqZepaUFe5RhjNKLUZNNS7FJLSAR8r5QMo12mhCH6h4vrmz8",
  "key3": "2BfVTQq2WVivdV4TPtEirgcjsy3QPTmntWXcAn8HPwRkmFHpgo1qMytn3NP1w3F46vgzezevS5yE7FfQarvffpAG",
  "key4": "QWnZAKqjZRZiDCMnWERn5YG9fM38zvE7PeWzs5EqCy27VVUPRKE1ys2dJVLYxox5jC2e3sefrt2W5tarPVfHi2A",
  "key5": "GU8vY5i9BwY6uAX99AnL98UmPuqxLrcj2oNZ7ek1s45AKC7K2Kd6ao34agx8Qhvp7SMY1SEv5uT1CEjpCLiFqF8",
  "key6": "5MMeSkDuJZno5kCc7iWYdaukCgEQ47Wmgfmnu3EkTfd8Wv4bsBMVMUo33uW3MErpsXUwNEh7kcm7eYRnPBWx7R59",
  "key7": "5WvZgCWE93PP2fQgiUaHfGSUSLcKXSu7ThDufqmsqYjwrjSNqCxCuZPHb8aWTiwTBoHoAgPScdfYbqgjMYi3ZNr4",
  "key8": "38DATMTvwKeaL3D7Ywhw2P2ryCRpyvczMMKQeP6MwdGanaCEj6zkGbXinUadYd9tPEGUqiPHRTbMEQpgkJTx99Af",
  "key9": "45DEqZ8mLp4L48L2Liht4eP4kZgG8ZFRmwKqH4GYsRW45BNyGD9JU5n1aJDYUGqJe26wTYwxURjqRFZq9MVVaXbW",
  "key10": "cFoqS1AnNnjo2drgH16ndgtd3Zhx6nebhsLFrXMGwr69Uc8LQwHxYGYJQCJPRiEnyYxxE5quEwk6zVBZkDmHrb2",
  "key11": "4J6z6CttzNxbUHzzHTnjSZwrFbtNx3c58VXvVEA6iUQ4LkfYNSn3FV4qXa2BEnAaGkx9UeUqNWtqr7SW21jWCnHQ",
  "key12": "4uYcK3UJicLttG3oiuMn6NpJH2ZZmpzm4oAcNpbJxqhwMbXFX3mnydu167RfxgRmqikXa79d3xc1SGGFjBTNCqzV",
  "key13": "4VsYurb8uggFc3U4QkBTzDCgqQUJ7FdPeAdsSEiJxHVLxbhWwjaF6KAy8jViY4yLpZWrwQr579Vd6oYWy7RV6dh5",
  "key14": "2dxAkrexfRsYNksFZu72XYtgbeyqUf3uU3sZsqkPJLh2pqYzwKNb1dx3UUdDspe1vKGQ4iyecCJ1zVaTYrGiyMqY",
  "key15": "4Fey3CF6zUcVzzLRJhXsrZnbdy2uemrtURJgHW3nwcE9JEC9BCkB7Dp7G9hF7CxpXDH21gmp1DAXC5Pfe9aLZQne",
  "key16": "4S427CZ6o8NyWnSqHYfbizCq2842RV43vY9Mi4mcqW8NGaiaecHsoPniLj9jjMhwMVpqALyer3RfyWLPTaUxPrg2",
  "key17": "2E5m2SFT2BMWKBP7mcPoapYQwFCnTHyPGHT7tsRaZiW8MVLKRUGSfKoADMRbpSssaxvA3FhQDCzBEc7Z7W2P2xf2",
  "key18": "2uKky2GjzdfgaYFggNCanUM1jucnEwvGuB76VcSdSLrFKFWWofTpFA8UxmFUmxoFrAmCwtzp8Zh8uqfmsKeBpmWu",
  "key19": "QLnqDTzCZ1gm6ec3XkLzkjghDJ7pG8VpSjtPw2WPmFY9uxTmHiUCzHYfYbqifokKprTsih1CndLmAZwKH53pMVg",
  "key20": "5o8UXbEoW1RUHR7pzNKqtJLKCzUHKeHkPf69L85sxb5U1f5Nf4vJtKyHWV7yy6q5S9KgD6ZjWdnRLRVzrAzNanZ1",
  "key21": "4dgxTgmHVMv2VPeeW7meJNsgeUBvkJ4enCJx1Pvbtqn9ADN265fFE7JGPP3wdAiKefpm32m2mn6Aa94TGqPjjgw7",
  "key22": "2SPS8LMQubWfBAMxcXMtRCBYr4LwSUULQCaNC37k1uYMooC9Utmvefoj6YBbt2aGU8pxTZumfi6eP83meJAdoYMj",
  "key23": "5Ks9WkNxT6f3SHnuBXNYDSp851iGgEGyKt4jmQQYKSw9LGHa7z5Ftm5HPKNDtFeyrTW73AVKhEiPXBXph2LdPNDc",
  "key24": "d543HsQEJps4sgQxFA3sk4FrNjzZFNdwXqMwixhPg2BHZKhFrk9FcUwvyd8PU5c3KpYNM1BNngKfQcavRKw7BMH",
  "key25": "3fvoLYx2WWe9iP5aHxt3eVmod6ACUB9sRzX6TJysJydhDFnnpRoFjMJ6mP1neAhiCW4CzaY6rvwxShnwnAPiom2g",
  "key26": "3EhULerQLPsCfF3vJoNnKikG9ULJGF2Ugegz17QS1vMWKyhKSdQ6SMkL3eF2MhLjCofv3qsdMMBNXjJEQwfwMo4c",
  "key27": "3MhPmhDazb2gJHeDm75T5NpVugqoHbEPXjyGhdP3fkz1mL3aFNbBhs7xLr48L6pT7GRwdtgUYntsMymT3yVBYxmZ",
  "key28": "4yduaZzvqqMWd1fd9xsaimr956QMDhFm2CXSaGrnkwo6gaP5QQmix14xnLCryR4UUL9mE79pzR6heLseQZK9PVVY",
  "key29": "3Awaw2yHXsqDwRv715EeWnT9wyp4QcZXV2ZNk3BH2XmvwPdwfCDW7Nd9zfY7n44ZfwJtg96w1yBEsoxddPaxED3",
  "key30": "2nku3KTyySmwD1b7RtSvZ48dnfV5NqbjegZSL87J5QVgDotrR82hVqDh5PEEyQy7mNKUYg2FWP9dSPTZF1CiMJ8",
  "key31": "5QGMdts8i1UTQKhrjvUD4afGoRdqaj1Ay1N8Ah45M8pbCCiQTNXXmaJagnYqMW87qeD3fGotECgW3gUfAPxa5G4Z",
  "key32": "32saRytM3rwEZ9mGJvynmsqJzFAM2oDW78wpZUPfgxANrncaRZFb7JzXpjt5WUrAxr4KpEL29zurc745U9MKvYBs",
  "key33": "2tekAuwt4zskGx9H1VMXpecfKJ9SiJUq1tjUS2nt3ENtSVoTTT6L9T4oVbcck7Dm9Ba5cCdemYcbte93oEWThCt9",
  "key34": "4nR9v3t4ZcAASLrnjoRL1FHzEVB4A1XbGFNofDLXtycjE1Pp3zMzHsn1tdjXwfjLdDqDQAScfKasTx2ad6cCK65",
  "key35": "55iuKYNAkV2CjQvfqDMBAe1SELauBZKpEb6DrF8BQop4ME5wr66A7gCJGYhyWEJqSB1t3xqrNgjqgt5TWZazEHAA",
  "key36": "28N9wSNP8So2ZiQaFm3drdZB7VKzuMpgm6toZi1XACFYpNwLQYUwJZHSsgWyNm74zAaGgb7B8ZCFZoL4CJsjYKuY"
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
