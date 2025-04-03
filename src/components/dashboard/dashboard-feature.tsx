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
    "4iE1Gru6nwU83L75etjRYfavbEHF9knXwNsMJWCeHgu47nHn5MZDKPbHjdSasbaDHqP5JjqZLc66xppxAX7AhcqK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Env3VJTwac2oWB6kbJURtfeLutEXL1VvjeEW4HrNeJJLpMihYwQYA3qArVXptyEmzN2a71F7DoHyh1SgkfzutUD",
  "key1": "3EyE2GH7pVgAvRneTeQvSTbwjKrwFacqtoiqqYCj55ZibXomT1DCTLGhB9ji8S1UUwq2vN335rwexhDGL7CjRMcz",
  "key2": "3xBoY46HqMK4PuU7zkba5wDaqr2pe8SfqkDRoMv1U9WkPnYPiroFT4PKZKN5K1xYKGgwNfPR7FtgjtuqXM5y79X4",
  "key3": "3NbQV6jAAnx6eZ4Xc17h4t659C6qpjEkqqXPkiPbUgTgLyVLLSbtnAoGhLbKayRa6qKGWp2rNmwGca6JC19FQ8ZA",
  "key4": "ApEKXRZTvU5jFUmEu16KRMYD12MKF6XHJkGfLZy3xBAbhZJZNC19UZ1oDZF6nLjDq7whV8CzPHqbD3GUCztpjfX",
  "key5": "54jELK9YRB2LQbiGbNF2mSKVEcip6qcjZiUdVRicvMY774XPRLYnGAjP8A5mPcHXV4ukPZgfHyZLWc1LsmA5AL1K",
  "key6": "4w5G2Ne49AatKUVQVsGtDNCLneSTM6QonpsRjwhykkc8t5pvmyidDNYq2bBmox7fTfcadf9qNJF9cVSRRveYmxgG",
  "key7": "2tJRoGiEJ8J817fCwAANo2YXWujxhnQWLvNDQ4AMUUx2QaxQuV1dsP9whC7Gog6EbFYUBLqSUEhRFVfiTq29rxJR",
  "key8": "2RsbpF8pDx4ZJrHUQBtfa4YgbKZZi145vyfpGpEJBq4aYbiGSxtN7gTEZwWhdSCNg8o8mPiSUQDMMvHjMUUrtRrL",
  "key9": "4iJ7keaZyCuGHgW7pyAz7msjksfb9HM8amJW4V511QDcsxeQxuxzNtcLHi7kCWmyFchTiBgGaqD6h4T4EMgFvJwu",
  "key10": "39YVjBg31cZc1kkeQAAnTd4KN8HS945DRXsDXjfQArovnz5X2wwcQmnGQ224KXXEDvQMamJ1ikgFtXnPxn19YqNi",
  "key11": "2pNqYgkyZRYYPhQoH3SeiSVPmN7MbFxxeavBcUkyyqZ9CGK4J3W2rU3fvWymsrHuNGrTXyBPSoUGoDK7ohtGHC4V",
  "key12": "2SSVwSX2MCrCPNWVo62yojsXNbKzgVp3qZ3F4jbRG5Kx1UxmcKEmsAJV69UaJysFhJSf7UP6bxzNXBYZFV6zH4t4",
  "key13": "56771rQgkyjmnNSBJk1JKMG7jSD98wRUqQGdLHUhr2u3Q8eMY6xKDhq8JRaooMXuDcYJj9ELvPd4Du3G2BvCL8Gh",
  "key14": "4w3qRrNE6sHxHBVE7oeU61XCMcTmTgL5J6MEo3LcHhWntTzNLptRUqiEoN3yfurLRJxJnPSgBEU38fLaeE8LSik4",
  "key15": "5zpFcAuJbznUAJDHgPzb2cCgKowyVsfu1CdJiEC6FuNuWgpq5169JqjRtcsFru9nQZB1bjf5fnbbCnzWofEqNc8J",
  "key16": "5aND2duC1aToVMJJRiJeawQJM4CbL5FtLVLgUekafdoYZaCpcPViXQcssX4geXkPth4ZSYX6Dw4hkTq4rZ5eNRji",
  "key17": "5v4oSC5SjUvsztRYQabj5tS2AySV8D4xYzhrXiTsNPGYxBxpMZyb8Dz5jWW69Fhunu5tqmpBTo8v17C8m5o2RJxt",
  "key18": "2ZFcY7hkkKkiCUMNVC5wTbbkth8m5SWM6hGo7EZbREXmshvQautnX13PLyR15sKk8KaL7nAxLF9aqi5UecvkusoV",
  "key19": "5ZHZ9BrR3uCVkWePy4V7wb3cwiQp5h5A9tJVNghjMs1UF36P9NRP3y9eJbRioN5wE6bCYbac6gaJg7Zr6VnxTjeh",
  "key20": "53bBzfjeN3KsGFjbL4xNBK9grD6oT58zwH1SD3SQ89Tie5xd2GRe5GGekqNRw43d64yfisY4TG7xVBGWjQBmyALT",
  "key21": "37X4ZrwpAB2kytvwTHwDNG3GtrTmq3XJinL334uW6FpN4Vv7nchQomRyU9EDA7P664NfCJF4d8U2oWNi1XDi7i7t",
  "key22": "dWmRbo67Dg2uBngNDVnqf8UwZrB8QtBeJAoUQv12vnN5vQWAj3Xa1HfvnzpEi61KfoxAZ7s3Y8rgy8ayvM999Ri",
  "key23": "3mUB8kWGWgukLCGsAofNUWUCXHuB3361NNiAQLn3THsYefqo9edCmAz7VZ5qXE8FhWvWL2Z31vw9FYM9zCAjZSsU",
  "key24": "39EiVsGkyCHnu1phisMwSnH4hUYsbUBxd5ZAkkxce5LYURMKXTh4amCA2SEkbbuPuLyDn2fVg3Jy67XV9WYUfhGU",
  "key25": "3vNPhoTmGFUnsogPxGthYCgp32XnSH1xdkwJuyMJqwpEq5gCLp5PJGRyCtQoqgcbWuLTew9NtRTAacTKAzTJUjPP",
  "key26": "5cEodU7u1jMHLmA52v3CK63rfZxJ8zXmQx1uteMTfSB24KCjo4TQR7U38ka4pXogoyCWLiXAWsfpsPkuuKLHaPee",
  "key27": "411hrP2kVxDXhQwkrUmN9VPu4H6Y9cHM73PNpowbv8vFZgkJGWaCQLEPDCZC89gcurQEwHCuC5Vi4bxVLCLqEfYu",
  "key28": "3jBU8vC1qeV2kZFLu7CMX5PmBDc3QEUH5h9ju414LVsFCGh5TxhPazws9VuWmYAYoLhoYkDdmBRJc7L2zDrtMEaa",
  "key29": "4DVSjNfWssKrEMyjKTWCkxvS5nsBzoHacikhvV6dRT5rJsA8LLFiS9RoKpcEukZ5CmeGVz2mouPWrV4QJrMvdSdS",
  "key30": "2o8cgLxrVyicwARBScGypVprjCCrg957tXN91N6xgY73qPWvqNEfYquoTUGyyQxwgNLCbeJkzcSiTnvZpp7HFfCC",
  "key31": "HeMWUMsb9Qo7m7kR24rhkhL2P2CHPX6tKEbLAYoKZ2Nd8Ms3EWY4AXmVVPeARTj5Z71d7eA6hCursbVQH9mk8oD",
  "key32": "4DZ2vNCeku1eyngf6x63xQkfgXV1f1zUVRWByU8X4tZuoaiDWfnpTheSkEAbLhCdzm5LiTXE8pk6c34nJZ8P6NwF",
  "key33": "3ps1dA8gXbvqVJu8i4ygnfi1Bn7G8ttzQvoMQLdqaqtsYvXtq69oqtpsvbHJDeXWG6SRHruEe56ijhu9dsXT3C5Q",
  "key34": "HmmMHAjyi2RQwyd5HfcvQtxE2VhjvNU89MfdJRLuH44sceJPXbvu6yS56Ny7ZyUP6FgjYS1yqQ6cprjzCSbiJrT",
  "key35": "Jsy2kSUnGfVa9m1AiDA6CdeZrcwFvPe5XEpb4D4thWH4FRBEMnB5BmbfDwtbiq2nzS7n1hR6WL87Khpv6Ccm7Ss",
  "key36": "4MWUR7VUwgdzkg8adewb2LVyruXaVsMjq9aXqZTXVVgKdbTii3Qsvmta8q33mwWjcJfz7yRm8MwFzHLm4XrjPDe",
  "key37": "4tqe34iXmGH2Lixi7QCKGKpibA2Bb8Cx7iqvg3p5nxurYos53AAAhQX24ZziNXefAoJqrhHkPzyhKP6xNTGXaqVi",
  "key38": "358LvDZyLK85TPMPWD8jLRbGZzv8g2amboonGvFkhn4XNFEFDyhS4t57EzNXUMThLktGYrTNzJZU87QMzcVHzE7G",
  "key39": "2qpaqk4VF2MuqBcKJYXNqAkNvrB9ckjoNZGELn59LTkpY3Qnp6RmPa4qn2FFRFkwmsGLVLzYaisQeBnB22yVCBP",
  "key40": "2AaW1ysWc5kvr3HpomouGipVtAVD4cVaUTXhYt5m4vUt5GPmqkJH8LdgctV6dcLDdYoNYbCm6ikvJgLBTJ8EVxA3",
  "key41": "5ZRJKRbTnvb8FUdhvD9uqew8yg5N4DMDk7Kvjo91mv7Z5Axdq3G3bpUN9UPHp99rzsP2dL3622Uzp9xeFWmGvqXa"
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
