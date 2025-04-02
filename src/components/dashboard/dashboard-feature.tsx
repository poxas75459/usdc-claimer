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
    "Pt1CF44d4tTpFHhDQSrRke8v2vwAZPsmjgqwtPHYJ22Vvr8XaBpvgjXhFg5U8k7rm3jMX19QN1MjmJJMFbVxntS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TNtphoE94p8erfGhLxqz223W7p3dij9W9vVwcD44PRgyy3wijbQ5SckeJmCm6tGXigLNtQZRM37BzWiZdFEwArn",
  "key1": "3ZDjMoEhrbqsv5R7fqBVuP3v9p49Mtyt2gG857PchnnKcCSCYnpR5ZMUmmrKXDM4v39qfM4UprqKyFKK4Jv18d4K",
  "key2": "4HkNWMEGDCUsEUBnF8pEuTzohveqSYmdKWhQBJoa2LoHHcTvYopQz7n9jc4u369GnnoirNmvW5WsBqrQVJiXjMAU",
  "key3": "2oozGCk3XDfB3JJ3cJ2bEizcf6WoSZ9cMtEMxSLhGGFdhDDsC5D4FGiavdA19Q1HqBwkoWh9UEMgdqGCxdpRZq9R",
  "key4": "3XEdVFiqnDVqmuMp73hsPdb9AxEMWj9Q4kJhjsw1wf7LZLAV8ZQfLYDfcNPwandE5f13nx4j575g1bqZkyR5v2bZ",
  "key5": "5pgPqhsbtwCxLe4HYoYEQeLHp9a2BevkoTA8sWaZLWDsJxPKivKqP4WFA7z5TcxhJHki4VdVyAc9Zh5DHPBxaLEY",
  "key6": "5AdypjYZwKELEjFeAUcpgtbhqeuqGm9bB2jcNpjvUCggshK1tCZa3qEtDbQbSq4TCzwJCLxZY7TQKASsg5bPsswy",
  "key7": "4WJVw4KrBXJWamY4xTNmQDKG5tu1cj689XTjFeBpnyrGcAxu4NzHk4QHwoHzGHNWSRXYEnykDL6Wdn41tYp1JqHP",
  "key8": "2q5FenQ4NeXNB356uPa3HRGF4du77fXR6SS79gZn5SkkYru4M6tHapYTGr3WDqRUEhRyD61ZQ9KNzyrfyeecLHV3",
  "key9": "5wnLG7ph4VQPHNvHTMU6vCaEJxY36w3bTZe34465Kssd89MhnW8iNHtTnAwCzrn8SCJMkq2hRSS47frg9uLDjKxD",
  "key10": "3YfLxwwf6ksE8UaSXM2k5HDVyZCSJeyx1rKBQ6gqPDBsUFbgVGLNjggbBri4bUyYBsdW2xEpA4K9L6pE2HQYhxxJ",
  "key11": "3FpZ17zCg5y7TAVphTwkpzYXbLYDuXeVckSZkFzxFSEKHNkX2xQCavn4hshXbnFHGDQbtE2mS7JKtZvDJuwpzGs6",
  "key12": "5oHRYCMR5jMoTybMGABHCf3UdKn7per9ChGk4XVfvGnnZHQ4tYS8EErt5JparvPCbcXoYidqXvdrKcszqid43Ps9",
  "key13": "28yp3wY3gshxQywiW2PEtcrRWTrbTbhMg5sUY6RksbUWsXmoDyS2rt1CKZKvciBJaKm864BQ33dUGU9f2cLaPYie",
  "key14": "4wKYr9C6Y4d88TwjBdDHKD3ujWpzuLz5CkPfeRKcbHpnQZMYFj6NCAtAyg9V42XqfCG4LGSdLHQUvaij6zbevMJ9",
  "key15": "5VbKCbzWYS87BN3ctPp1NxWGLjge3UsNAwgB6FDKqNf3FE5e5Qb9sQL1Ap2MsWGSDG5FNPq6x24EQwuybH45MUU9",
  "key16": "64AekjFxNy5CAXdKui9Uffsiq2ZfbMAsiuHDCD2pthN6Epu83fLQ6jsVbBcM9wgx98g22xMr5a4PDv53tPZik3Y2",
  "key17": "3boSYYF7nvect2n7QHEKTfgjTuEHpyM4Vt6oqXsjDZZESU1nWhKDvyDrX6GDe3XfUJ9foEctZDfVSia8AknqnGvN",
  "key18": "txkbYX4wCtP9hJNoRtXQ5grbvMctAJ7jQaS5dZ3DjYHP85C4xZ1zjrwmsXmFcb26icWuqxvwd5wqYA6C9XFtvEc",
  "key19": "5V7KJngrr3gnixGuvV5ZgrgWaGfPupcfqCyyhos6bfsU36Ncb7p1iuQsJVDDfoxhFx2TMDLWJTorRtW42YCKRhL7",
  "key20": "38vRUH5Zp47DLtkSPr6bdWB8ecgrwSJSCLUt1Srwpnuu1YnfeLaBQANHsBBXuugKaqCGG5RqjMQWcuKzpiyx2ocG",
  "key21": "NCaBB8SpLYXMK4Kkji4DwZcrqMQgbvxEMpc6RTXCfwAoABDWNhRAiR3x1k74rjdvERrV24oZpPiVUGom5dPSL8J",
  "key22": "3SDjk4gwnAkNSeJLssfh9ZwT15zz4DUvx34gwBDyZ4CLRnYcQ2rDXswWTtL6yFMAMvrHC6TV5z3X6CXBuGuHvkLU",
  "key23": "mXdzsnvvgmebtw1w4RaHJPG2eUSKGVUS3oQAgJPnjt9rnJ8wJvCt6Nd68JgWJdh6GSjzADqDirpMe3TcsTbKzkS",
  "key24": "3DfDp5fxnj3HoqMGGeW24sXJCneGWXsB3FC4bddEndcAT364D2eGRiVXHZRAt7ftNoAYFXQQgRx1TDMhfhnmX1y",
  "key25": "25u3p4WT9sMbXsiURraB4d2JWW2e6KS97eJNhA2diyJ3w22exJr6ZFp8Ufc2uaFTwBt31hSfhZKqikq8gbFFCMMD",
  "key26": "2AS5tQhud337irsa6kji2FJNwCUc63bB5XuyMWThzNHjL8fdx5hdopbythVdXXw2FdKUaHPbkBeo4JBJEDKkhWJ6",
  "key27": "2AqWstg81js23a6PfDqmjbuE2r9s8iyPSKPHpX4SznSXqcqhgVnf54mtawoy2TfdrC49pgs8vfHc62qDNMxbpCmY",
  "key28": "5vgpYsMZq82qtZCw7iRasN3U8A4JrLZhPYvXw7hqgYDUDeuvq5GemuVGwHjAn3MHa9WVXxz1uNPBS6yq73pe1crU",
  "key29": "5G5iPDMMzdQamVhHFJ5gZZWNBS6syYvRVMkDmFxZ34ci19ZKn66Xz99gEpYAEEuSnLskFZFWdfmbUjzJMxExQqmk",
  "key30": "56cxixUs68m48Q2tfrYC7ffEiJP4xtogzAZ7T584DGrHZ9Y6JVz8aQp1LYPwiRhKXTTd6Pz4CbiJZBxNCm5jY1RM",
  "key31": "4MpU4D18TLio1Lgh32VyDecU5rMGJvzDnxCnRapJ64xL6YykGRhBvjS8yitHe6xN6HgY8CHYPb3kDmDrpfcDQsEp",
  "key32": "EoVSNQrqW5qjbBqvrxkX8oUooyPabsgKPCrubXon86PaJPnwdRZYNLX1cj7DjmMDZ3XTcyJnJWSuiJB9MaHpv8k",
  "key33": "23fAM6YGktYXGB3sirNbYuM3acccYtucRgW5nCyN8VCNwvJc8XsvkZVVZBNkme1JmbxTWqTJqwogZ9KNGFstqq6s"
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
