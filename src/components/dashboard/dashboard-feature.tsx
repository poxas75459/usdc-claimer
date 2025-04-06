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
    "5NYfkr4gCjBo1aNNG9py8143dit5f6xkY7VLA2oNXCG7cUwDuSGLLiytgw6BeZiMv6ZrrQfHkZ9G8oxBUxkHWYAU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F8CtZRD9RDQPvBR4gqWQSZJY5AytfMNPTxyJTGWV5P1S72efX3KvP2rG6V3zcpKEDKamhvCECiRsgzd5MBZe1C7",
  "key1": "5des21praqKCoGJgREDFEu2Q6pk5FwQEKQbMhuLGCXm1rE767kbK1UVkpVMEd4ksYnPoRjmvTsEgzcH3VbhcMtZw",
  "key2": "3hUznzmRvf5sojUGHC39YJEqTrQbJTPzrYvn977hrr9R88y6nzm7HEGXdjLkY8JTqZV7zN1cdKu4FDxXQymEye6f",
  "key3": "3LCosuPpg8WNmp4rB9TxLRjYwoA2kwYPtmekwc4vYXNXv8X9RLYfn85tx9T2vUkuvyMrvVBdYt7Gm9TySsy2kqmP",
  "key4": "3ues2dVFat5njYUceha39zmmmcRNmipMQSQCy1ZBgVfbbqy982EVwhZbjYV8ksHcZgrCEJZgMar1Sns277sFZi3k",
  "key5": "2ZSd5C25cmDmWzGMiMhPvEchpuMRyLB1N2oTyAJ2Lg1WmB3WSfb2J3TKqAk6UpS82BUAu4QYYsNfxS9YxdfKPr9u",
  "key6": "3XpRTBeGxgSXfCLR5uM4dLYJQgY9swLr9XPTW3nXS8Q9J8P598Bu5XfBzpEv1HXkezR8QQfaD8Di4WAbFJV6213R",
  "key7": "Ae2vVSXdgwebYtWSjccqxXZsu3GnB3V4yNdGoBtzz7SPRW9n2xrrkyYLVcs9VCSWTkPuU7PoAK7jgdkBRqamCyt",
  "key8": "fff7wnNv3vfj8Q7LQWAKGn4XJRyGjBhTBhUJMESBajP1Efz6958xhjnKbuk3E4jNLwnTLxhP1yWAfmuqpPm7J1L",
  "key9": "59Lo5zZ5Qf4brb8RUiy92hXM2ryNaC97yAcFfVMxJcW8mKdRhGFUz5kjAjtxfBxKPz5tusLQbTU5PsnoPV5UCmRv",
  "key10": "26CiQ3jqpomoYmGPdMZYkNNhey4W3x63AD4JqGVQsE3okLymRbFKtGCWpxnvsU8W9psR8JWHnjEJnkJMov5Z6PRP",
  "key11": "3Rk1VdMHc3U2sUSvgzKQyRCGun8nxT5v6RzEyoPBaLJ5K5ywXkNVsaAFrfJcFPXxrWGPiGSbd5iDcaZ51vYr2YzN",
  "key12": "3PfaGn2dFpUcJsBRmpCKQPxDBDiFFL25Xem8YHubLGLDEWTS7evEzMYM61UZQSw77MPrLAEYnmCeEnZkBYnmUgDY",
  "key13": "3ff9BcV5Wx4i6Y1y3HReZArjciEbZq2V84s7iWbmAbtrgSD5nJuC82the4q623tsB3xv4sHwC7AvwqkRoukZisH9",
  "key14": "92qgsJiFvJBkcXuM2LBgzYEVS5fiquSuVa8MVXWsjmZG5bVd7fQopmZC1f33NxVuXb8QxVeyY3qPR2nJMkQ1Ezb",
  "key15": "2FU5fK6CMAmETW8Djtsk79tnsPY3hFt48KbWdattaGqTDjtBZsG1CXA4v2bBNCPNTD4AMbfHb6SATGw97utM9FWv",
  "key16": "2jmFS1zWgGZkJikGg9NJosRX8QudQoDSnbeSJPg18R2YcisoXUHk5AviJDxVvGcu8wVxmaAhQSTXY4hYmLvVFHzw",
  "key17": "W6QTYu3Ap5FcEMXyfyi5TSN4FqekYk8WDAKBBPrFasMNAkrmBACaJj26wNz4Gb43qTp5quGiGnPhbfVYuoXJL5e",
  "key18": "JMkG6Tmh7KacM482jaomXL2NFocDevZuaJ1htuF8gcsYaGBsVpr3iWxHTRnAPEqcCRg2bJ7WfFxribpTd16x7YF",
  "key19": "4BivmbcH3esBKvTcs8peChqbgB4BwgjGr6pvX72Bdd3kUeEBPhwqN6AgR92TvTghUL7r1FmgTPkUJVX834D7g5NC",
  "key20": "2PWSmQtH5BiYqycHAMu3EXYHUc9VaGczzc8WoBLMiMCMwhLFPShmVp4qDuxeNH8nTvanVfYwb1SquEoFRsgYzfdb",
  "key21": "5JUBR4Y6bfxcfpgKbEBdjiZGES6c9owroys7Pt9dnYhWZi3PtHk8LG5K1u5gR468jbkjCs1MhsU1hi9Q3kHjHuwX",
  "key22": "5WhomVDSRNRrCfgxWECsG92FbrYnxFJEKbm6TSxoyBADXxABdtVf98GvTkktbqhZ5DoXwwNaT9tczwd1nEcLFHHU",
  "key23": "3vpr8Uz8du34GZ7xTbkXPkKfiYiiD1qt4HEDYh8SayP6wL8gLqNDxP1KukvTbo5kmAQHwKfkHuaqTqVBButaQrva",
  "key24": "3C28osXTWVBqhp5wrAKVRPz9wyzdDKpY3dgcqGD2V9nUHmZLqwShjJTiN6Q8suzsknDpMpnSisFbGbj7g7jEx1ae",
  "key25": "42XtJwetbkGupcmUswBXosDQaeZbPyyqN3nCmbopXE3e8CSFa99ikUPEqRtgdarsWhFyFvGrpJ8DkX5kQNmHf1xq",
  "key26": "21qARPN6LZzAHEhNTebodV6fxfr2VPfH21NxrHjbR2stzUMDKSivrpDJpEkyZRTTQpYJkviWiNcd61JBUwenijHM",
  "key27": "3N3qsCeHs31UNHzHJUVUihyTQjKDpYKeDeFR2y9ikvYBghyQ5DvYbSC3BjXsGQXqK4ppdyo1sv2EutcTRi2zwnU5",
  "key28": "3aHLX4oLVhEMUdTTLHoRvtjQaDWfmZBn4dBegw6wDZDmKEQYPnBpEk8HYEcmtydhxeCE3ZMMKT2tGHZkSugedkxV",
  "key29": "3rcNDvBv1JUU39c3ajzMppRQQMBFCvEjdkuXM581G9tZKgKoW1fEPMnv56rMe4SnYv5zu1nSCDniUsNoLS7g4b4P"
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
