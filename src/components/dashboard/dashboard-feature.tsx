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
    "4rM96eN2c36PfybMLMbfXVbaC2h3GLZmuZe1CkMVzpYcKg7msxYWwE1iCvCaz6cJTLdX8xo2ptBqtBGq7nUgCkDX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ar9oLAbikhHpsnnsgDHeCzprKLPafhMY3ERa66dxaKVaw3pcCGR2SEgmtpMRGK45UT9LtFmRsEK5AjNnpsxfYnb",
  "key1": "3jEWssA4D6oK2XUB371Gs1eKpTHbEXSUDEwhioctQgWcVMhDXZ1gReWLyUVQ28ZqoDAj1fxC7tj3xEeb5RRTfAW5",
  "key2": "GkRQsCFyctzEV7MBZigyVgc2p3y58rUTxxYP98xtNRZQ2nZDZT8N5TopC5EsTwpXbc5WncRz48mdvL1vFzZjz6m",
  "key3": "zrygqXmxSr3GAvFd7oWfza8sSacyQFsJNBKGd6ohUN2NvZx8P7qT7LLQcqk8BCaffk4bouWptbyBdaYZC99N5X1",
  "key4": "Cmn4tZnRMusubF3oSLwtp6GFakJo3mvMbmCCvVCsg5tn3u2rDA7AjBA9KTHwq4DEn8SDnWDdcbMpFNeR3gucgGQ",
  "key5": "2FiHUT7orqqPZG6MKmHXBgmiaUmpfCm4RLRgPbBcLgSv63wHtH9ieE5f5VeCe8EYmCZmg6sQp2FQqvLzWz8NEqoZ",
  "key6": "JVbNsP7FJzQWcD8qgiznQ9Ng4U9xpamM7VMfzpExo9TvjuAGc5MASmA84xcDXYgUbVaSqFVymmjkdWWTQbkB354",
  "key7": "5YQohW3BLG6MXiWFBrFexc7r4fVo8oNnQ7XCyg2ychKX9H4QkiEbgEK9FDnRWgsm2YoUsuWwwXQmvBYzgwXMEsEm",
  "key8": "3z6CLbMQuAn2iBND2sgWsBh236WRACuYSBRWt36T9meEzj3yF81hMdsF1a1dScY5oxF2PpqJjPdkR1gGmHzjsGyd",
  "key9": "FbfdXpyCu8eQrLMhfp7U9LQN2cK1QEnNAmx94ovwwe5JZNvQ28isSMRjkqP8a25iSNBGFymME781gxdfpF2z2Pv",
  "key10": "5h1e2SAQN87wFrfSqzHhkrXra3BBnHndLRk3wzFE7yFB9g2kT6GvTFY7ZqaeZozcXCj9VqgzsNbRH9DcacwSq2WF",
  "key11": "127HFiCthohmj2jAdUMv5DSfqvovnPxQWWq7HrxsaWpmvLw26X5wsp7BWf34d4Lony4wG3ZhqVSudRK5fsCZBa6x",
  "key12": "y4dCeyDSpy56RSdX7TajtPz1KXFUGEYqRJoXV5Do3Ex9Rj8HGyvqadVdsz2RumBC586EmGzaRheU8fzDweesZUK",
  "key13": "HdTqFgAMKhg8fbNtVmLeTX1sqJsBdYfAchXv844aigmJCz2MVeB7Uhr5MNZMGKkGG3EqrGnYrt9X9rSZk6wriRK",
  "key14": "3L8RyBNraA4Wgmn5vP3AgyY7KTBTPgobdhJPpNGLMv5R1ziaTrvy5KQoLPmNfdHh8QTKxjL9jwG9Y8MdRwFQrxgr",
  "key15": "35o9hSqaNup3w1GfNYPwByNsp1ybKR2VnikEeTLaxpN59tWNBHkchZp78xmnA28jV6AojhabN4VNsH2AAK8Rynov",
  "key16": "27QufVdUkPiLvYTZZ5nLHBYJxPuWWpZKytQc5kLH1XrXPTKuuXrRSFpkwK5LaPnc3bjAma3Z6aHmANKuMqbCbpYp",
  "key17": "2w1RbGkTV5ADZ76v2rKJp55kE65hsWCJLaxpfSsMnfiVaPzHnWzAB8FDwx3dxx5Xb4rzMP1YvhJAuzGNBAYbwfcK",
  "key18": "2ZBTo3veZeNDGP6FaCzscQP9aPgYTgypfsG3JqjGigmCgnjqot546o9sbaJ6hdVy4mxqoJBkhpgtnqfMHo4tjoFN",
  "key19": "ERjtLeR8tyodxMqqmBM94sZBXMJmYCg9GUcTtYk8CNazGziSieHqeuUoxe83F65JadwGF2jDziCJZ38DTpwM4BB",
  "key20": "2VDScXTWtZVvqDHGQGskdiHtbaWyHebyo2VPmJ4CicroZSjvUo6w4cGeP3E49ebazghn4TW1Zmi3sQ2phfnpqNbE",
  "key21": "GZemWCXee53Qr5QgjsRoBj3FynXRnSrwkwMsRjvntJ38HJxbbQC5z67TRXXy8gXumiLxAjboFVSdBDX1UkTpSo1",
  "key22": "rbtAJnsvUNpfFzrJAPMVv2Taawe2FDaJ1iffdCyD2GQ8gG6hijztXZMvN7XAaS9qDfEaxCmxo5Fzh3QkttkMsVD",
  "key23": "2xDZQQitjquJnmN6SDXp96ahEYe7Jqbr8imH73cKtfDdfKuCAbTfxayib9e8xz2RPTNQxuPD7siTcmgbq27KhV2U",
  "key24": "jhQvqNoK2PTuPGXjoiQKEi8cCRUkx8D3t4HbD193hzjYKKWu62nMmGGrAJWyLoE2g8deMYxm8mLegxzCX3DhTcT",
  "key25": "2zYwRouor76zDaKVcaUovdgoVEydqxN8pnEXWAZQxQmNw21srKLN5Hsh6bNofMnQbmcLvMAXknDMVM9YriqSgfBm",
  "key26": "b5e3Vuh2uvCf5skDh17KHm5X7z7VCdV3nUkTEy565ow7q461uPDK5T5ZUR2YPBBUgcggRptRX3Bn8RgxqBU3dUU",
  "key27": "2JdveLncSwLuoGgPeeJ1XP7zhgCSKUe5FQNxKChyHrkV9MdJSHvh2dwBp8oSyV7nvd23F4xaE3rM6JA1JZpUeKFZ",
  "key28": "41e7hMk9cLrTHKXsHfU66Rt978XVZq3wwpGwqiUGp66MpKxK7hWyMvTmrYGF32tPqi9FE7iJKRe3huskNrxGdvje",
  "key29": "66gsbw36CmUcbEfnd1aTyo15cXP2UqtnayQfZoS2Q6hC8kjXf1PFBEvBP1BMCgRCCU6tkTvnmb7T4uHFuPAkkbJV",
  "key30": "5pF3EtYL58GV7mddx9gEVRST66otMsntmwsnj3gMP3nZfo27DmZ31m1NxubbgegtYpkcKdTXJRpjKn9WaQbx7ofJ"
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
