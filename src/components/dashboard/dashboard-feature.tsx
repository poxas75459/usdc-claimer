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
    "3d2EidMTTpTe8FJtxkBrq7jp7F1EAZGFbsb2uw3DDQrySNq1GTaaSHqfpSuPWRzdRatvnPrbpjasDhAjnDzb4TQM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yFQpc2jbxbG2LzE9U6zkfTPMbgYDW8YhVZy711Qw3NxsfJcFJj9gRpNhSvT2sbHm9kbzX2XCT1QWAg373nQty5g",
  "key1": "43JCSvwE5r5iDz7AMSAT5LDGXRB7h7gWSu4aDqL3qJLXWMS6AQTPGPw9E97cUgXYdXgjXftqwcGhozT7ncXN7FcT",
  "key2": "2PFk2ZV3eLaZJeT5C2p5vbsWmS5smjp6sGgzD6aNSseb4PXnZd4KWk9BgQSkrpq4B9xJRL4KqbDDe31Ud52aipvj",
  "key3": "4KuMyJWKdNjkwk7wwXbijsj5hdTgr5WvuXqN4tXB45vkYRkCfWbXNvEk6yz8wBekZEhefFCuDoRvhbxfCNgAWPNr",
  "key4": "58arMj9s65oGiZwqohgPBSjh54YonV8dCsKpUpTUUK4cn6bNCRrNN88Xe3wDU8P1rtEFfXRuQWmS9QkyqUviKerR",
  "key5": "4hZorEwYL6pY95r7dGjKJMGRHrZfbgbyvi9huWJ68rQgcSA5bfUX45a64LzzUEUnemzVhY82Rbf9W4yVTq76UzsH",
  "key6": "2PNZC7KmX9iU4X6jJDiSn2frge99t8NfpYRbL6xnrPCXnoz5eSPdBzuXbMn7nNo1SyCsXyHtSh2ptuaFDTmVdttK",
  "key7": "4uAhaP2Zs7c2sZcehaXpxewZMCkTrQ1e83V6FpzEMSvEoibHvebutT7zyHv3L413z3MkGzcokjfNraoRK9NTWSDA",
  "key8": "Cn78BnQ6opit91VRJLcefykZoGR5soXAWD3LTxcYuam3kMdZUQ2ePvBL57hf6dG815BnEkx2TnuRhL9Qk5AZR7N",
  "key9": "2LnwaWD5rQyw4JQXu6LuSBDaAHqPiB13LvGbrxMz7JdyrjTrM29VQkFrihEB6qaFF1xeQSTrGDiJ36RccYK7xQ9k",
  "key10": "4z9Ga2vcSzi5okMTyDrXLJahx94ZLPpWeeF6B4TyVKaWifGyQ2RUDTSP4UF17zS2D5GfPBHtdkYRyJ2eKx4M7rHC",
  "key11": "3DZD8M1KeozQtudnkE4E9vAK6Nir2L3VZHqrDShHxrfQZju1cLtqQjFWPtjSxunGpxXwQRoqQ1A7ebrJH1Yus79D",
  "key12": "2yXyRvqyTuX5DpMLF6D4mrqfrYEFYVwaxGKFR1ttrpgkPVVmaJF3672yfHgih9WdhMVhLTfSZbSzFogh1uqorYY6",
  "key13": "3rNV7pQb1MzsRFDWPPK3bwh4ZjjT5CRxa5xwTC8N8GzogMmQso84W5iDYBy75yzX98YpsWDT6EYXGhUEPh7WtFU8",
  "key14": "2X2Z1QoVLjsQBzaoHzXCN88frBYZtmpMVQFTNFgwsDb4cRZpS8mBqXQQV2QT8kqHLHFXdegSeDsPgLfGMLsnPDqe",
  "key15": "DqKn2Yg6Wb4eFAdLaG9dybk1XHvXaMKpubM4aB4DuQtHFqwFwdgPZmGTHWpdtbTqtvUBCHQQ8hMEttok4k2uxqV",
  "key16": "3EE3QexuwXND9s7D6MjzGJamwrnmAe1hyidmLDj6oBmGKxD2YzaqdLGPrQhCUDBbn7BZghpCS59cpH9YPamzy4aU",
  "key17": "5gKLbBtehLwLEkAh19HqqsjHo4iFJkZKY34a2iExtoC1wQE8xWcfGYdXFRcFc7wL3dqtQqrJEUxxEmY6oKKfzBsj",
  "key18": "5t449pSAxHfcNPEqoz1aYmTNAdg8ZzbRmEQbvuGjCAG62Ecp67eBUu4XfYJYQ76NbrR9KX6aCiRNPMJoe22Yk4FM",
  "key19": "4CshjH2Jq4EK5RbSSbtT9ZiqrrVFXjwG3m1e5yiKVGM2fGvUVeubKrmTsLiNWpKGEy7SUemFCLUvdiHmwZkTZnK",
  "key20": "47Kh8s3rhmJiVzAe1toZ91f16MduNy3SUPhky64YWfa1VZs4xZB1dR1wYikShiFdYWddX2Ney5XxLTMptsq6RJ18",
  "key21": "Jd2qApX8NAwk3uisjBWGBSkFdFykERs1HgLkmu2StPSE1rfC7pJ5PCbLZVi5p7opTzBEgJjQKsAj248RHZAMq43",
  "key22": "42vM3tyg4o77sEJDvFvivgjLPgvjbTX8GGUcLCV5w7WsxibygkebDyfGud11ExXAnFbLYtMmQj8ddQbGMpkFbsZV",
  "key23": "3QzEU3adLn54Ks7dH9WSwv4t5VzjK6EWeDEh9ywSCcqV8jpwSbA5ZiRhK9VMfXb3XMoX1oHvNC1YZ7wFFPdSJcPN",
  "key24": "2Rhuypfd8iDDogYYay7V8u5zH71ooDtZBwX5ThniEgJw5TMKsSBPzriEMqxnpcNsiH6iwbHX9nmSReT1ED6qt6Ry",
  "key25": "5RVjv7MGGLbtwfzobsb3ahNhA1ocydmWYz7gzXm5jrDPesWisVLbHokqn2Tu3rdJaLvHUsktksEvqHXCjgPL4wT3",
  "key26": "QAgXftB6LxwHj6ByPZUQ89wHzSQotp5TxC3KKo1bZrjnj5yVjBMPnaovQRqMSj4KZwJDkh5ve7JkVHfKh1zUxBG",
  "key27": "5rYYqkVKLJQSE5ChgovQ11thJJN9D5cTgrEd1EQGDtkNUcKLR9p6YeJaP2TC3hfGVLiyoD3Y61WjsJ2cFHKKKcou",
  "key28": "49rntCfCJ9XTJbRah2ZGvnbGcs674kmihWp8ryNVKzZGhxYxE3oGYAKthkUNJjeLrtSTacawEnPMByCMuZw2Cvny",
  "key29": "5EY8oDBz3nRb8ynQ4Ew4F7ffgEJLkgjjxBKi6GRFgMqzs6DwF447UkSQESnh5Nhu8HPJBSNmEWLgzDM3FDDDDNAw",
  "key30": "2s8JbPgYGHWusDUwEPXRK2vGKvbhjBKDF1YaLJN2t6KjmJz8jxEoVAoWAgxaa9ooPevDt4jv5qmyXAD3SZFhcJQ4",
  "key31": "UePeFNFdcsSZP3GdPpj9e8L9AngyNY3HW6CxMJebaLhRiWaT2YejfwVRj3uTY8oH1j7EFFZE2vFv7JnwjHoSW7u",
  "key32": "5S3Yw1dn69JRKpUUJf46awMxPMqVdoNwwZDHXAk9ipC6RKoV3RAXNEah8h9F9Z3eGKZsujkSDh3VVoLbdWDN6hLY",
  "key33": "5R8fUUFwQ1pVCf7wZhtwuxw7i5W1BMGfn27Ne5qmQLA8ewybb8J6Pra6YiuHNMk9eF3ncJ2tgih1nFNEGv2vgUqv",
  "key34": "5cwrXHXbUG4Uth89JCydyvkxGt4guhhwKQowsmUeqYUJZTFBvivgPNPLjY4C8f2hLgWLea6LhRhBwk9Mg2ET1zuJ",
  "key35": "59LwPiDh9yUuawY85mqwp1oXsHVqyR6Lip2Fjx4cxhjHUD7cp3t54AdfqcydV9CQ8qBLJDmDr6ZidLVAW4MHTo3Y",
  "key36": "2ETGX5Pr14kVKguKPLhjETePaUiUbismg2Pzsr1JNUXqF7ahwMA2hEHSxsiDfhA47dsn45YPxLyTpqrX3ybNQPRU",
  "key37": "4Wu7faRxTHXxhT8JnzRikLwhS5C1a73djtrQUveaStpoxYB11XJ79zCn5FpyGXfaWsgsSbiwk7UcpW7veqHmM1MJ"
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
