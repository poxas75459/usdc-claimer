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
    "442C7qHW6Nat8tBpbDaNCBoe9JrceeKJECZ7CNoSsTBi9AZEtBjB3jNVQf1nM5eUDdQ4zDX34LGP5DTm2XxX2qSf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LLkjP3ECTADtxCQFbF9h1TS5yQFPTQUu6X88XXM1WFwHx5pq9dNaZj1JKS4Y7fKcFEgMHf2HGT2EC5GC7E4Th21",
  "key1": "reCy6DDwn5r7KguQd71syToDXfoCodHFfmFsDTRGovrgRJsjkWBriEPBvNRxhni33cFsznEUxHXwo3kJqvA9epq",
  "key2": "i6YTPurKQ3STXL75meSfZjDDf3ZdhfBdEjb9NfzKEYTEsFZp3TkEWUH1Svt8cbCKQiEMuRMRY23UxSiWS7wzE6i",
  "key3": "5Ly53NhHZpQAbgWhQEQHv7uvscEKgquswf5rQQx3s59e5yXpG1maufehqHk4h3zGzyK5c4jTkMX7Lze9ZvL1516D",
  "key4": "x3wXe3E6NifRv82zPgjErrtnbuvDj21TMvqV7VzAEvx6MFpKQeshKNgGV7yFkdpGhh2qDyUGVA3xAkX9fbFG4rc",
  "key5": "2ja1F3qB34SkodvQcnGoHagUQ3mVzUktetfg5hHTpzE5DecErj17MFosdHGkA2s3z12KpQM2uSRdo72RxLLz5F7A",
  "key6": "3fQfacoM5mXS9yB4ob5ummE2DPiGnVBzbbLaZTXmPWroSY2LQKjRNDoM2einZiMFkAJA9ZkiZ1BjvZCQciLRJsmM",
  "key7": "3VBVzFewfxSKoNqUHgfkdEMgyrqR5KQEhLME6btdf1VzSKfLRpyK8DuKPQzWWpgy3RMA4RJjsRTBHmUEhrrAyhQX",
  "key8": "khFeYzGv9kVrf3WiJWz2EUhs23AXD9w2a7W8TabDPqq2nTSRSBzNF5ywzobFgEF3wRketBBoYyrkqt1Q7rFxLSC",
  "key9": "2E3xS7yMQiB71WgGnZf4hrbsNipvB6cjNTzFZ2itF8yzs3nMBFhwAyyGuocQyozdiRYtGocTNo5j6jeJky6qZfyG",
  "key10": "5TXvtyrYnqeVjoDXXPURAiVzk5u4UwFgP3GKYBSUPnNkXZHoU8VVoGraCTXZTNQtH3eAA7gw2tn2oLE59FixmpJe",
  "key11": "4FZk9b5kqZrvdRDPiY8GZSRYzmqeT2bPkcmbakFE1oG5H6PYnT33URFWaKrqcT5gpnKNZS3omXodMK9BLyzLptXQ",
  "key12": "2LfcjQWssSL1JPMRPVpRLTVgQumQG3JSsykVpox4YbBBtnCjmQnfAzJibnXte3hyNogWQd4CaYHmULBymtHzjDnW",
  "key13": "x45X6oQoci3zKb1j9hKsg2Et2yDHb9LtDzv4CwY1HYcTRo1oxvkUxZYt6Jjp9DqWnqLGQcKiNe2nHt3msnUx4qv",
  "key14": "yV9BHCG1rwUaWLkXYeFhhwsszKtaQc8T3GQR2PSogN3HfQaUeX1CJdyvb2ndFa45MGVznLr4WXaXPbDgN3jFo1V",
  "key15": "5FkYoB2eiiRWP7fnSVQq6YYPcvu9WiG6Xjhn9AkDgEEzhJFKfeWzyQA59eRaGP5EXUxtwETPni8Wb43mQ14BaS5C",
  "key16": "pfbLNDSZDh3rLzbgB3xnNe4FFkUVGTWzuFz93wZMZd89i2ProQzc3om8p4dqhHrGb3ifUT9yVsJ3aus6BRSBxpD",
  "key17": "y9FeF3hwGbV9xkX4cPjD2WcaEeUr8THCWQ9E9t2QAFVMpbmE1Jb87ZzJxN5RMs29HrR4XTj1JuLmEojzfvKcR76",
  "key18": "29PH9M1ugFRaRQ127jWrK4uH6QRqoBeXW1n6ghjNRr29or8S4JwzVzAxoodsgYg9dMonWQ2eFPfq8ow7ktnbGLAY",
  "key19": "2z1MN5KshKdbkgFcpBCTmZswk38adhhfGPd1XQsUsdHR53FCkZJj2NN3FxDu6KePVim3yMdKTpMwt5m1XjrQYSJB",
  "key20": "3xJs3L4DmztYw49wUQ15MAN4d3JXqqrCve2eEc8qqMdKLuEwaSNzBfRHknBwck2gfKkkEJDYWtU1yz9Y6B7cBwTJ",
  "key21": "665mRwpZMwudvu1HDypdVNZD1jLFu1QXSBhCH9SCfriSAfdFTu57gmS2ij37rMDFXykac1PHnTYoEZ9bS5GXTJSS",
  "key22": "xpKkquAFP4fzfVGcG7vHTPm12XThFPSVhmPuYGzTBVtDa4e3aK8QsCCgEJiqwS7SkepNJnb6zDRdzXqRRe7i8sz",
  "key23": "2LmZG8Gi5mDufgwFw4NfbGQXKiWWenUK79xAcNdgLa35qt8PMTW4bom5k7DS2iiobkXDKm4r8pyM8kYGRe4aMeoW",
  "key24": "rr5kiPmRXQ1muHndnmX8UTGcJZgPUtvsqs82txj4LtuzzeLEnKcynxGGnFrVXTuVCaGJGk7jaSgDfh4NwPoKgjX",
  "key25": "3Ra4PNW8wNiwzcu8P1DoNsygwX3gf8tKG752RRePy8b4hjxTrid3zjeG8DZfeHDwF8kWBnd9M48a7yb8XWouTifb",
  "key26": "2rhcNsuVpq83EP9UkoLc9HRAwa1hoTn5wq57fYJZ86QuSV6Um8QXdo7yD1amDNFocZ6zwT54vAidR7bTb8QvVb31",
  "key27": "322F8nzCNcwkoVGHwWUGHtEXTmH3sgKwCZocJ1HXzrZWKx8rg1b2VUkBXqS2PyDt6W8mPQ7vJJmCt9sxsQCHFV8p",
  "key28": "61Z6UWuqZ44J88YkEHwNps8AkP47TtHkjZhyDzxuKXeXFdPFbK12Ry96D2uqLZuwUiijjwd4GzwZhLUd6sCM5wdB",
  "key29": "3cMnYFKTfBSLZzYGLdo5AVeJ6CjPniXjeXvfikVaYrRgw42YUfmc9nRijRoChK3xXQE3yANwSgzY7VeucqgggD5e",
  "key30": "4nRUiGbHTqw7pGtLmwh7qajjeU2QFAy1j9JyS7bYubswBLcUFyCpPniSt1CUJcuC9RC1i6RUb4ZkJ8KZoPVuVamo",
  "key31": "278xr1Zqa3Pym6UqsrASvFshHiywjn7gTSTt8jfHqkhd3gHUKivCHbEByQFZiKJsihXXQXFtJqL3oZ1xhrMHjRKp",
  "key32": "2ZpsASoktTQFuceqovrCEHXogsAkkPUeLf2izdHVEvrfPevCcGhppaS4WwuJf3DdV5VpqY6fBAmj1SeCBQ6fpTCZ",
  "key33": "4hHN1xU5E4U1w9FSTzXKQJaYpNVAERHuai4itacyja1X8aNjW7pi7ArR8U7ZgJ77PVgn33FYiEbTZLWwbHQUH6Wg",
  "key34": "4Wg9JAfzqTothB9Z9ioWXFvWrvuwC4LRUaKwbdTNBkCfdx8gGjJMvzez41VdHpR6kNTP98g4c4VwaqgkAnd9AJqU",
  "key35": "4LNPeZFqQuR9PT26ZT86nvf6SzzLaPoG9eHNJATFGuUioMgemqoJ8f9qJfhMuvbFzhhJutSwWizp9n3FMdTzPqSG",
  "key36": "csyJVCKFJ2KQFvwRewA4wbsptaPtMwg8qN7QBEmoWvoLGdY1zDLWSdBKzh11BLTApqhvVXr6pbhyRh8RZTpA6Ub",
  "key37": "t8iU1rQ5Cg3PtsDn7wCwNwDhZ761YYRetXDgp8smkWSZNr8sJDEKoUYJJJWCgBm5ndLo3rZfeWMfHtqAZkWKmzo",
  "key38": "4eUnRkfrVhpNBR6tym8dJrBYuWDLbmEFZKxtqfsLPbtgTq3UacUqSk48rACHwQzWdTkofTAHJag1bSdfyLKz9dpP",
  "key39": "5sM53dQ6TyudWvX61UobS2itXv2wJEM1SVyQpfkZ1TsrAaQJ9CfbRwo5Htf9AqzdTsSZKtQaLtqhiWGUsBg6nqk4",
  "key40": "4c2RZD4iEXdnRrAJdBpPH8JzixqFYiVsx1UgWTe6vi7q7RSCYu6TTJZGL2e4xNmSQ78J6AXo3iqbgnoCyRPbvZeb",
  "key41": "5hMWxmwzx5SwmmMNbggYTZgCoGDh9voM1oy191axrxn7dhyuePPJf5Lge9MbmbyTKu5dNBUmtby41MnkrFvChM8F",
  "key42": "Z36mPRQp1T23abPnPZRx4pvn7ZgPNgr47aFeJvUMKLJFth99Qyj5HHQrWTjLcxwwEoGmh3Pchii7JPj1wRVqUAX",
  "key43": "3opCNEHSs9e5wqnZ9JQopxVB6nP9DddDy6sQL1fxiWH8UNavSq6GXSmuBAJgb5ePCXhZfdw79EZRXJ6UTQehkRMT",
  "key44": "5Verc4mHxc9F9hVqkLHXV9Vj2G5nxFqpjjVZDg5sjfnLseVq7WrfScoPeQvLsSdCd5CWd3E7rwrSyDRcHDP3eXRW",
  "key45": "5Wn7texhSL6tb49awaS2yekuxyzqAUzNMaFP445jsKz8AYuugcQbvt4vaxspvToGtp2p9aA9dKyCnxVAermnLkci",
  "key46": "2PpVB9iAbVV92Bp9qNnEb7QSWMx2akkKFhTLK4Bwe5fcevyB6bz1Za99TojmT2VMHu5Y7VQtYCY7HUJH1QvPqvtz"
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
