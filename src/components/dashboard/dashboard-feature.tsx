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
    "3rr4Bew9NKFTMkgTj1RBAWF6NACNTJCTk3VyVnUrb5T8gJ1mLnKwSHbCy6McmcpF2x2dn4KaATHexYDSE1obPRkF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jPEZscua3mKMRRxuQ8UNBzmKzv2LE6KVDHUBosTFRGbGgt7cFn9dhgtTWCUS2SFXoYVG6fdprbQkJtoDJjc7mpe",
  "key1": "2FRp75EVMoNC8QTXZW8ACn3BvFJPnmufuZjFNpKxHZfGtjaB98cehC1NdoLJ4oqarCXzGZxNbmUsWVzMNc6jurkk",
  "key2": "4ocjtLKZ44Haz2afr6ckycKhRBFgKhBiLKjB3Y2UgzmSMt8WgYTRnAvScwr7tjgcHpu3SbN9GZgEhaTRPpg1GCXu",
  "key3": "3MMdjjVsJF8GNAAWa7nDE6uZF2vKSxw4xamaCcbVAsLKcZVxfDUsRjXQwo3pKcLmWgPafK9DAmvrZ4Td9be1LmuS",
  "key4": "5JjGX11mzDDpaUSipd2JMHYhMiDbKffi7Gu7Fq7TKRu7uAf3Sis69dEkUbEvhTcbf697yRyznvDSFX4h9k3CTEkj",
  "key5": "5aSTbDJUFdGj6rTmuYpZ6jGP5efVtiEEDZGm38AP8k5YJwxAjv41WQY2joEzdu9sMzLRGDTxfRy27NSjgpxp5c1F",
  "key6": "5XjVo1fXud2oyKkMuBeha2HhTSf7nsT8KauRkJfMAwG86FQbXiGKbzMh173oTvqhysnVhJMrwCFqsbcYiA6JFNUo",
  "key7": "dSdhzVtnBKsGgcpknW8As3yQCSU2a4MeBcnXcxyusf7nH1ZS6qyWczqLQAMzcV5ZjRVrYkmafK6pEmTRXh4WzJF",
  "key8": "39bd8CGJbxe8Wc35vj5QVAfeFWZb1YBZKmJkJhvkxnZToQTW5kzZYPFXr3D39uqUVNthaQV6ReBesFFXUxvgSa9A",
  "key9": "PNoqiAWKPTBzigZPWW4GqU7yBZqXox66poNej8Wm7Kb6vvViCzJnHqEnN82tPbftsNsDisWUhacuGUJN9jV1QeM",
  "key10": "tWy2SAYxpuq8wWNi9yukTrC4BhsvWcW59r9BVZmxxWntiojYbuEYSLSVQantxfokm4o3DME3CTpSymCTqKRW9Qr",
  "key11": "3D7ZVTtpZDjE2ypaTGkjctyP9HF1BJhjSsWatG5aBKNEKcznsm7FEjR3UFqBZ47sx9vqkJDrRCQiVzzmZdSik33D",
  "key12": "2ki7sYUNas5Y18CCKJ1QsrFnKNyWSokgGeBmBMttRJkbFW11NG3n8DMRqKQKsnsYpMFPVRYJ5QijzRvrVzTvixWq",
  "key13": "iWeH74HRNrdo9n2JR8iBXXmE6994hhYxHasWqfiYkJvfxAMvn7VYPtEkcRmiPzQqUNDhLDVuKbHBSbNKW4juvgG",
  "key14": "4iPTtYJqppc495JLi53JNLFF83tqWY4JJo21VBWeLrQLNuKtXRUPXYBGMMmYwaA8dehnF57FoqUdrzKooRTfKYwT",
  "key15": "VP8ZbRqwXiN7gaLAf9dwCgwAv7APpA3zy3piXJMmBk6vq7ZHKzPoCYeeaDHQCUfcG4CyNVnVUh2jC7Pxrg4CDQc",
  "key16": "5yhtnLP3DGMaRzCzosGhzpkueaCSDTDuvDWY7Wmq7JJhDBkobqfCJScVNwkrjWWAuSZUfB6qZwHC2TJYfDPfmTA9",
  "key17": "38Hzi64L9161MHqNqJcY9xPgYLDJajmVFpHX6QzDCk7QaJHFz3BK8krJdSkUbjZBWgSwzjSqCxDhfn4rfXEtKmRw",
  "key18": "21CNBQEnumis3PoTUw4NP7RNoshG5JNMoL772ndsY4hQYBxhMXDLCaTonyXnUm7bF5zwE3iMeQJvJQMTTmrHpcsd",
  "key19": "5qgb4tEXFv7E1DXGFj1ujeZwBtrU3kqx5WWGT8eta7e3ABQHDtWHGoKWjtodRAYv8dTYnqbY4wE2pRhUiMzPUMxa",
  "key20": "3pU1xbB8edBi4g1n8cv8dmWDW6ZiyMyVNLszQtUApYDsQFhHJErkp5fEcNK42XFGa7Y8RFiEtcrHEAmQDzZU6wCm",
  "key21": "3zc4uboU86ksDQaHRrUfgKb3iPX8e5rdK5WfXhikF9buEFr25iLfAoL3PB7WXCFvXqpiBATvUQ7KchUf2Fg5gFA",
  "key22": "2uuCKBtt1CuCBBScGx4HR7Jf9TekSejEUKLXXurEkjU3kJYZjwPKJe481AVYQfV4DvRYK4LzXyPh8NEhRSPufn9",
  "key23": "MzuV2aRfTMN46VcUSJE3nvY5Z8qekaXuQXnUGww7ioDwci8g8pmDdHMm3s2Cwtabg2RKfp9C86pzGvKrs2shByb",
  "key24": "2hrhWDGVREhecxUVABEUrK9EHeJ2NUPpS33SvJTNHSxQ4Vg3gagmv3TH717itFDycKJNBZ8mpjUq7N9KzJjGoGKQ",
  "key25": "6wDTRUzBwbQBpyG9EbLXyc3W8hjD382b9sX2eiCAdJWnDxsqBC5E89ESTx4LiYqNK3DLFrJs9UgfNms1XEQVKjT",
  "key26": "3Ga4ugYdyuigvRdPXmuKDaJK9pUZjvk4Y49wtmMybuBtcr6ditgoh4zhC2m7VCGisjBHXazzT5EkWq2kZ5tmFQYQ",
  "key27": "2i8m56xAuCuVz3amMQ9fBjxfdpukQ7LjbG9tbYYXERRoYB5Cq2x5AHZHoKKD8USvL96tBSfjseEPXpYpGqcykaNS",
  "key28": "2KJxbz5vymxXg3yeQkELxoitQXcPqemMQ7y5piD4sNf1xqqaDFxCwNEBcbjtcGFBXh9kzPUbwUxvcgRL2NuhYrWD",
  "key29": "4Pb543aZK3U3AoJL4GdAYjLPztjSovi3X1ipPi1wgBb7ALHNvhSCiCrnv2zrhbWJnZZVozohrC3VfSGmdhiry4fb",
  "key30": "3E4TMuF78JvCFXsyUH526mcmqigTeKdmVacVUCWkFb1wvnkZiPbAtgGJARXgjCRN3KUy4GLjDTzty4JU7NhiL4jQ",
  "key31": "2x2G2smzZcrL9U5W411PVRYLRW18xjSg4BJtC2YajHjDTxvwF4PKEo7EBGPDGN827fTrFLHYJyC1SLegKL126wYv",
  "key32": "2WXLrkWmWDZWjQoTiMuyYRYArRGZDjJfDaoWAQzcJjQYVREfj1FN3Y5usa6b7xq1kvDBPvqWHcS4pEtL9PJAoZDq",
  "key33": "3fjwrSpJbPXoUE6QXourAPDTXavaV8FsCJJmGpP4HGHawFjmZLZVmkgKzwRGMeaTRuSe6JAXJDTL1NFVVbJ7Yozt",
  "key34": "5jXteSoiZkNsudangqXCwHrHn4LzRw3W5MXSikEktUddiXDuuVB3RKcaPqf2TwiAXheaoJSGrLtnU2Hc8AeYXjVR",
  "key35": "3NDpFTo281sdHAeHfVSh8hJn9hsfXprp6TyATWL97cZY4z7sZhyYLYeFoBSGruk9DMqMCTTHwx34USLzq9dgx4K5",
  "key36": "2oWxj4VexVGwiHkmizqXgYNK22Snsck4C2cSUDJ7GepmDwVwifqKmp2GyVrwArxP3HbAM6QYH6LPkj7Q6YD4E7VP",
  "key37": "3jUY2aZPfraZnc3XSeuTVgCuwPgg7bNKEhgksFc5Sr1ygaw5LYHfvMPei3jbqP1EmQk2SNPw8dRrdD5bS2jzyqK8",
  "key38": "2xnsmjEJuMeJccW6FnHT697yEqu8UT19zRgeezubGUU52v64N9Mg3DzPbjjHyKsZuBhn1Tf8SeG6bmj17vKEeXFT"
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
