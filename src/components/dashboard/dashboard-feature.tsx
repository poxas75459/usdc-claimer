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
    "2pwGBGwH6B1t2hUebCQG6MvuTbkA6bo1FGqSr4TNfeqjXaMTNhM41xxCHMqTfSauCGbcXYVwZMPq6rfd8Cr4EEpN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kgC8PQLtdJ4s5gEPtKLdZeHgyp4jEhJ2QH13nyyWK4bNyPDxwNLCsJHQvXG21pvNobRM6QDhxBKo2xMDi4dYZvz",
  "key1": "2Pf1K8FP398QbDvhVKd1rBWxNwcCzjmjyiooXhdBFn3cMJGWVNj86FpTw3CUxmppXJwdcLPUnxuf8H9zx7V6xesH",
  "key2": "41iwq5SvypmLtYXNrJTo2aPz6v96qqRmpB4ZLs3yPcDKVbFk9ny6bc8uC95rn3tFMw2vc9vDyvZZ1SDaxuwg2Ysn",
  "key3": "2k6Ej5Mk3P4o9aWrd3Kzm9kRj4gQLBxQ5gf3oQrjMhehMig3FiRdngZNNdvRr5vbiyE5SWRm2zbPF3vd499ZTgKU",
  "key4": "3Niu143ZbXAi1RNxMhvhVGv9NbrSYZpe5J6dYqZmj1iXBeBYE8fckaKSGdB37oKyer9eLJuYNA71KXRzmPYmuo5P",
  "key5": "ucCNJaAky8dbBkMpM1NzSLu1q9ze2YGeCFiH1jskwCbgcZUHNvSADTuqR8H9HJCRQ5Fdce7yVZkcT4aANCmw3HX",
  "key6": "4bm3yFRJS5ikwaXQRDUZ6BWgegoCqgkCqBXvRLrHy4kQgmBfNnffak1yiL9g8X3A7SZ9g5gdjXGdGJe4nEiaFdKk",
  "key7": "63HzkCqVcKQHJBYocwib8wXA2jCjBJsuzaQ4mSzUkiF9ZoEceKSaYRYxc97BknP2RUD1JpYMY8xNUQopecULeh1j",
  "key8": "58jBhXpMa1oariDkxirnA6woPT595U1xcgta9RtY5fR4tevUyv1psyuc5kgub3j1QQoF4KmFXyXV7EyHQHP5iv57",
  "key9": "3Mi4RBnr6P3MqDrpWKETvEitYN96EbJYyBzkPSJ5PBwxb6SfQzK53PbUQ9C4kDmB9XXvNjVUT2joD3dqzrz35XFS",
  "key10": "2fsEpQ2zgfJt33xDTUQV9uBvtiaEPpC9vd835mSzAfwi5GRZ7WaUiGCzAnjmo2sAohk5JNCPtJ471B1Pw2HMSXBG",
  "key11": "jMfZixqfNsthRaiagQ4ymQwKT82fhXkmmSNqkq7rSHdsfU73LifTCLonuKaC3ofD3wTyzW9VZCjn1c5VSXLutDn",
  "key12": "2nfQCmQYZtKQzvDSuDESE4tHrt7vkwGrpabVQi1od5Bu6JcF8iTWxvsQdNoFu11V1D9R14jeEj1aGfAkLXjmuiVp",
  "key13": "3kU2p6W2BiLtAp3DQNDcgsNKiqEdyMWGSreGUUXZGHpJrmuY4Bk4HM8FKdeKcWsk6nFqzdEy251gd2a9jMhn1jWZ",
  "key14": "5bsoS2u1mz8gjzTNot5cXW2ntMNS2jZQL3Ws3BSDYjwYw3tdQnaM9xz3nvfJ7bNsJ7GZCu859UQvRr1Vp6BeAmJt",
  "key15": "4vHy8q5aR3m9NEwzJR2Rs5ALiBWc2KbnvKTTCZJpopj7vqhyqXuXmRLMfBDRE5KSf1bqF1uWJFq8BAeTcLWeD7s7",
  "key16": "67AnL9PocTC2mz9AUCGUfuJyh9n1cfXnsKKSwVadJKxy8T5eGeBVTMsjP9uuageQo9sjQ8L6mpDseosc2exUcTet",
  "key17": "4cpFTxZd5LaovSLHUkjit2ump6VzcMZjGuigC3qPDpS4bKwDkbbf6ZGMqa8fGCZgo1pUboEeGCYfZ5LaTJyRojMq",
  "key18": "4iCo9cwAmKX3BNqjdRZogSsDTKntrbKRjz17gAPMGKZBvrbgEo3nBAizuY38P86r14AU8XRZ3NfSdrcpG9U5DcGS",
  "key19": "4EuvSyUbUHpnHcXtjPy77ut4FafGEpo4FDEYPTNRVXgKArAjqAhANkjcyo7vwJz3h85Fb9cSViqxPbrZBq2Tbg6j",
  "key20": "4CyopmgfbRbKuxoNAwPfyEMxC68DG5umLuCB6ebkmvnjmyjt1MNM3mdry9gRe1k2ML78CnnLuaYBDJydT6sMj9od",
  "key21": "2fGcfsFcKFfNFdRibGpUBJ2fXtiTaHBwamR9kqddnQGHHA2nVrhjHM1ay1zwQhiffTGfnr5rgks3wrwRekAo8NRo",
  "key22": "52CbYWR3opAmhF9bF5nHWz79SkrBS6w2P3Gh1wCXf2ge3rSxcMafKL916qZCeMQbyZZD8Wp99dWTBTEtdmL9vvMi",
  "key23": "5MDmknkA1R1K9m7Q3kwxvKQjnwt4gSQH4dQZhe6BLg7fFCHxVsw1j2Zy4Dwx2irUhG6EBUdwXzciZUfwQCx5dDvu",
  "key24": "5gwNc9BgKM6BHfQ5T4PPDFBZ3Ps8pB64ibocrJuojtF6m3G9Uo6dxLzXghBtAvWi5dvx1vAQ9pkzavNaABL2kd1o",
  "key25": "qxY5LkbECQpssWQLk2dDdFtpVavFSkMtLQFGAfzUDRwgxbiaqeZ562Mmivp2j23AfKtYKiAeSamDxss2zfirNpN",
  "key26": "5Pei57AoQw4tek5hejkQgzAYpsRjNtoErN3TifVmwEbi7mgCdNQqTmCDPhXjSCPbnYL6opw5KmXFHBsRceP1yuKv",
  "key27": "1QnfUaxrYC4vhXejFUq8wRhenyLjAeKbrkLkianTQddNmJnjMsuX1G6YtZkPkSc6n5xSCF4NL1RNMjBW8mE4PN7",
  "key28": "29P45hJrXqP6sQHNPK5Y2kfsDoBAxmLQDtdfEvkSJQEvBrHiercwCDSMYToT5GvwKxRRy12pjwimpjU1E6w7H2Av",
  "key29": "5gAEBDs35KEXxwSYJk9BHFQFMHvR9u3zxXxhujJKuD9UFJ5ESqv2XqXUC9PMbCPHYUrzzthzxVa6h2S8CzkB9UWp",
  "key30": "3UBwHeXHAArFWyDRsUggH2oPrtNcR98kNNxwLZVdt7tYYdyrayBQhsz9dfhBQ1bk5Efy3QHsUWyYxfSrrQN5ja2F"
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
