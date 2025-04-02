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
    "2YxgbZGTLHPNoy2cUWALSm6C7Vzruk16t8ouvou7512vAbmNy79RvGFxyi8zr8Rgwn3B3Ep4gCLAEcNvMdqAuGS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fRxb6RXkzfZ7CQDD2V7tosKSfeK7TLso2v9pPMXvoZXHGtfYXFf3bSjtJ6yR3rN1pbuq667D4VUrfJ9vys4rLQn",
  "key1": "53CdAvKhBe2KVzWu8FYNNqLKX2Q6oTUw4UKL3eQyAgYu1eYoKVLS3P6sxRZAqpuX4uthmA4Tjbh5oLxbR1qSFj75",
  "key2": "2SZKxCtiZ1FR9pG3onXCUKRHfxEnsbbALE3aKRsNMFn3BxB9hj9FZs6tf6sM15wBNwARRBbfMTWHFXgcsw5WEpH1",
  "key3": "2ZSCHZNDYY2fW2XgLmBEZvqVBeUEvrGZhxWysspRSQyGjea4xQevH2ZXTNZSQGc4zkhfrVWzFgengcRho9EYGo6q",
  "key4": "34N9tRxSY6kK6H14n18n9hh2Tfk8vY7DqCoKMSp5sUE9DWn81jusuyDAnJPB4cjAgGSbcgQcDGmDLSVhkViXbwQm",
  "key5": "3yYJMw8cqs2GAXnYG1zAvKawULzzobp8d6TwPj2tEWHxjmxY3a8ociPo3udpNNgoWGZ1bQGArMR1JfUaBpz3qRb2",
  "key6": "4yigbAqwAF1hKwj5tDBFkp6PXHUecBAEktsnEhU21ZF8MmPuV2zx3eXd9o1ehZYajinVctwV61bCYeYXNHPiJFc4",
  "key7": "22Ejo1YTV5WNKobjqWrFKCqnVgREy4xQK7BNdMXU2aLiUbzuWPFwTnxVEdAPRirkYayTNrxwWowM9ewRej4LMEdV",
  "key8": "3mewQx8pWTLzZrizw7u1hvFhnY249dwg5yGRaWNVvUxu8RfKzTGGBdiXXXxaVKxr88Yyk8TH2h39HvnohjtfsF4f",
  "key9": "3BVDUxmmSRTGzBNzxBxrTxSYcj12adcUyj9QtAZMdtmnhBctdmvpz4SE8TJfjswV4v6mwxMgc9ML8dpE51iQuSo9",
  "key10": "2QdcMFDHYexZ7DhTV6xHXbyrHWihTeTdaQNKiujiT7hSLbHmrcRwvcJPECGsFRnKGFxue6d36ijEeYiR8HqjAwtm",
  "key11": "mB21kBg6MwzSHPGRtSqhnGLySbqiK9nstzVhb2LUWqWAZJrTx2w41r1BMgH6VFMzvH4JkGhKkh9ezZtrxtZDppn",
  "key12": "4Jf1T91695K5N4jZFGuRuoWYqdBwLXU9iQAP1VjsmZcZmpKfTXUjeJCEwYj5PFv9AWqHsoUpFMnUgwdqCuX587Uo",
  "key13": "3bcRNQSAPwhFMewaWLskXUCygnm1fcafEKhyZfchmJ7dtmfc9EbGxzf1MwVzg8VZeb9ZASn8DU2eUWnCsJ8rFmc3",
  "key14": "4DHzJBWEnS7ArAxh9fQ4KUErXFg1q9xprGLPGNA45RAJmKjrTA56F13eAND4kZ4ZZLVtZ94y8uwraxnCCu6YKpKH",
  "key15": "4fja9MHqBjdakhQB9Z6Qu8rj1HajBvzKKzTKiueo65KsutRbpDez8C8JsnMom9gNFYPNqpaTQ3xRXZiqk8kajJTC",
  "key16": "37jepNjqCFivpoR78Rr2RTKkHPbSb7FGP2hUogUjq3ng9PL5FZnHNm7nNbfnyAsRbURmQ51VaQpYoASGYMHCj2BS",
  "key17": "2YYJa8TUqr6JSDdA8PYbjrNzDYdzRY3PXfrmPoQcz2oBme5eTdzGAsss85N9dEz4U7F7MfMap3tsPkuwo1u4FRst",
  "key18": "4M7SwYiGtesVHr2Pfb1T3qWhJF743YPAZdEB5aYXdYvrtAThQYmdsbLh5XAUCEYW5rP9qUrdq3DhWcbF8bGReuUM",
  "key19": "5XzHDUG13s4UoRz4cHbaAFrrseP4czwTq6X1tsKQuXVuYvJoJ7tfHqJmXuYPVgPpYumJgCJp3nZBMTzZMG4a1WZ6",
  "key20": "63hCMKqeUGxM8dhDbQUtaeyKfnQDeLEBV59uhPUDB3hjRPtm6yUaRZqeKExvrzuuet2KvhTyBFgGVbJudtHFF3Jc",
  "key21": "5TwCDzphdhX1b8hKLVrXQCFcxPdGw8Yc9ggyx4gYmwAcK7wu955GQdRR7gQofcR1D9p42nox1Vw8Yzqq4Wyusprw",
  "key22": "3FD1jcRj87e9PBxNQ9UP5fEBNJx4JXdLL7BiHFuNergXBhFjrJNdGviLsNPKXWgZr7A6rDaHphMjqtGB2sESNyf2",
  "key23": "aCTccQjdZ8kfNXGGsw35bk79dfp3QNDG9qhwsGK3WQeFYqbUFA4WU75Sk5owYigK6v6Tcm9kzyvMnE1FtZAzzSP",
  "key24": "GbPLKEvaZBiuQnTfTYgKtTEaj7fRS4ouyYjGSgLHWw6E9b8xpXkXqHeWHg9fhCrdtVtceSViA1LrmnsxGoKYkbW",
  "key25": "5WbFbZnLW6Cbd9wxzk5P2FUPArZSPLy2c1RAFhZkksK3TebtWGxvh5dJKBhM5DnBMBgNYXiaFgV5ZuQj5pL2vH8n",
  "key26": "2sssZidRjyrzn8ytf7meybW6sDBZ3VhSQwWZsxrunm2NvwUZNUrteWPkbbYj1cHYZ2ppUjU5TY72kMEQP7Zd5Ghz",
  "key27": "27CStatL6FzqpfW97TkGwuLwqoi2NJefLm8sb59kNvw6dd8cLcgsCnppg1pMpEr5werAzuipkwEYUACUfZbDggyz",
  "key28": "3U81MhvRqQaoB1EvkHn2zUFDQXTJ2dQNZLBUtueQejKdPZHHmw51LawaPHwapiWM7cWyoGn7dupxsjvT5mcDrAiN",
  "key29": "3m68awjfxdUvfmhGJm449U8z2WGr53b4rZJc96DiBjRZsgscqgAGd1bPX6uSxbG33EMyga6irCmUQmFTPGuaNziS",
  "key30": "3NMWWrRHcNPMGr65gg8Pp4G41xekR8UsAm3K4dNNFJFvoupxxFgVqJiNvGqP92hcRDjhPV3R9fMetNAuTcsc6K9X",
  "key31": "2LvTR5QRUWc5iTS8AKAi1Sb8SUoqt3dHmHYRtvxxnaProVVeERRojDPAoUgAYbt7dah37UeHB6NjFPJN4z716ANx",
  "key32": "32PLF3iEeosqMT41apEfJdPfFcBBVW4mFoR9LA3wVhz51WKC9xp9EETeAehc5xnrwZ5jFq7qqgTMzXSHg3o9EJou",
  "key33": "4HUxnLS1CXVaJAGna3sKXjeyAfRd59BjQpVw1CEoh77YogFCtrWqpXczUhDaRta7c5c3co1mx4qtkCgobwvSZ7p6",
  "key34": "AGmoJaANYGjVvURcMVWAADgF53m8762MbYTGcMyvsfY74GKsm5josbVVNfuRTUmw6kmyfubq9M7nEiuw4fUJZC8",
  "key35": "2T5iQN9XwszgcqPqeLgQXVkzzacwnsbWcx6qqRPBvsvjdoiFH7joLdh3fherJKDyQW8kSUMJnrWhAzATRgRYtiVc",
  "key36": "5XQHMcTuk1g44qV78e99Dzc8CXbtKWxuCnV8KweDcC2pfjmnGp6KncNx3YnNXCmMUzoFGgXyEgG9A4TXr15xfVtb",
  "key37": "5vHJenX6hC2q6H1vguaBM43qw9YEREH7kmN4oeSi7D766G2WePXzBhHtvFRhNhvC8HsC2AgnfUs1yjrnXj1eDPEp",
  "key38": "4PUDX3csBHvJzcKVqymvsL3GSQX4WU74JHFsuBuiURe27H5jEFTd6GJm9P4ovNSQF2zhMxVWuc87n2z25eHGNz5X",
  "key39": "49wKbV1H6TQRTEMj6jkoPghZ5Sf3S74zTGzu5VhHNZ2GDFmgMbJyxo8F8JNPgNWKT7EgqzgooPt6ihs5yozenLbc",
  "key40": "2P2g8GNCeCnEDq8MEYKhYo8UsXrSMfztrTY4DW147F5z6ThEQCrbyw7VuriiaTufoDVXLVHAvFtiUNU6VBzV4f5Y",
  "key41": "36ubzxLvEmVgoG74FFqpyjkcDVSmSdapGVsumeCZGyDpnSTEW5Bk2fpcZhmPHJ6ZZYbJubxfCufkMLPhn8LRm4a2",
  "key42": "46Nq3mAKF8J8JbQUxgm5Y1op6GkgqMevT158A5gUuddjNEuQgLz1BVxg6tWknuC7QfbTeTp8kE5UnbVQGMYKpL3v",
  "key43": "2gPX81wN3GUuUEdq8fDq37PCTMBso2VhxjDX1jawKjzpxofzY2MTwJgLq77c3FDyiMjjTuV7uoAZiKrtDbAShmbZ",
  "key44": "5k6nUh6tkD8rFTuA1T2dWa4q1oSocvcV9Hycx3yyYNWR5msri5vbcMn5xeZgqHvAf31qPCDxXQtr3g8qoUDRDnoB",
  "key45": "3HmompQcd3oRWqjEdZ9jqHCHVL8jZzt8dU4LvVTQaDE8QM2N5PWATdmTPfeoxBCq1pBftSmb3ND79EZZRExLyLkz"
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
