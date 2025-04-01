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
    "2cojM2MNDg8z87UzEu5ySAzKBEhCHEXyzXiM44c2KHpeEGgV5j2TCebeF29e3o1oxR4ZgEFnQexfbBxYNKyT7rPw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GQza2wTwXVRgGG2t8FBtbRmLhFPzYt6ZViv4xDLYsSPgdPsT6NPR1b9vGMXg8NFe5fqcSdA5GJWkgNEk5n6npX2",
  "key1": "3nk3yJax2qwBz6YGr1aCLbqxHPBJh1hsNhMKRAa4n5xusScYXW7ZxpPNBgafNDFRCNiLFL26mH7BYHybjJdp4Sin",
  "key2": "5AcD3yrxKuwJQkpAuTrq8tHNUPcc8TBvaWqR3raRW7mvRAL8fZ467NrWiKmoQ4SxnLtYtfRBMSxbyzsChHigmBFz",
  "key3": "tG5yGpt874s3J8FAoCSibJUBFdSWsgcV8VfaXvbivfqAHbutkuzHSz2sWHSkgV5Y29f751oZfsWkxmuUvy9k7X9",
  "key4": "4gedcDAHjVDrTumz753GEFEKrgHsJyPJyVvBoXoSsKNj88TxkccAL6dQnYgkQCjmMubrizPgKyk37XB5Hv2m1dBL",
  "key5": "5yt7j1YbngsPWH1YwWY2HYWeHKZ8NT9Hneg2eYxveNVNLbHUyE8UcTEy5UbqNRKVdpTHnrVk7ER4ZDK3EXi2bW1N",
  "key6": "26FWSVm3nJUkzbFKaqziNpSr8rT7HWXpRCfJUUu9xut9ByAX4Vugh7Q5Ub7X9CoRcFdUfDcfo4RctX7Yg2Z2mLvt",
  "key7": "5JK23yzoT56GFWbwHYQVYr5hYcx9WFaQWnxd3YhmYf5UeZb7iMPfJ5RgdwTKQJvbRQ8VuKoWAm9ppzyxn3f22Qre",
  "key8": "46qjJNfG9BwmsN9athm44ogcTY8RgxKAN845kowLj1NaLV1Pcv1UdU6QD5YmU9nXpdCsjVgRCRxazTsBLjXVUFPy",
  "key9": "5gHHRNTahMCaiNPenSCCXqihuHwVvsoadZXvRPGXFkrQBtSvAUxHifSLnFS4xqXkBKK1vpk5zux7W2yqJdjwxwea",
  "key10": "2Kp9WnW8HCvnACmUHgx43F4A9tXeHHhAcLi7qQW8p7cwrTtRMo5fiKGBBSbXRS4KQR2eMhPtdzwrM4SW5wUbHVmp",
  "key11": "2ox65gf7wEbU3Evtox1hPnuUPZHdovEuRri1U3a1zMurDAJThRUt52rpn7FFpKffm9TrHjH3FCRBxLYfW4ELtyej",
  "key12": "4cRhUtvLDkBoeqsPjQ8MHHntHbcAUYcsfE2byEELEAJZhvqWfJzPqtKRK9hXVabHz7z9B8fEyb2UjWgfnmiUvQhp",
  "key13": "56MBJu1fkYU5majkwSFzqjfG1fZzPbo5dCnDncQp4Dz5r1KAvpSFMGzJY2THLBLXe5RJBWmBBA5QtCwRWHh68d99",
  "key14": "hyiETPZYE6bN68K7apMgxry6vubPXHDjBWuJkgLwjSEigZy7szufjNeJoBz2JYADTpy19whC7zyaYGDHukFHH7U",
  "key15": "5kmkMQNqh2xeFq6HSXx54FCNAaa4kCXGVBZ5VGB8i4YQuLXbkrYbB7L7H9WgZsr5wvVbd5qVhT3t33S7CWJF8cuV",
  "key16": "4wqxhw6oLw4yy3ZNKbut8uZ5iWz4cD4Nmai5XoEJCQ1aWcoSD17NT4foHshKxWFxFV1L7Vn9NfrG2PTiZPjtxppA",
  "key17": "5kQL6hAXU7JvNAFsSGgLWKnuiXfS8BKewfoTwGQuFBEUvrarSyKiFqrd1idXJWXorxemFFbVKbin9tctuAqkeX5W",
  "key18": "4s3K9FDrApAbCQ2JFBQoGxbKL6KFjbwuJx7hoN9FqyNDpWKfQ1tBZpxtF9dECLJtBRbRW1caZBrhVXWJ7ZGvgpwk",
  "key19": "4GhbmUudjd8oEH5sbTHAJrwRbeiBYFint21KMwR7mZagFf3DQm7JkwM6gtD5JdCMPYaHnorn2ArUK82NNJmDBiFo",
  "key20": "2s8ew1QAYEUMtPf2kLeXztkQGScqa3yNQRFPdfGqCUG2HjW7nNmtriA2NgRnojAxh74K4KCcvsEZ9iWwg5tyzEoN",
  "key21": "56ZD5uxrYm4sq82LtQERmvP8YTbWZDj2wqEg8yRuHwZZfghEwbkzsHHLXG5aSsKy2P2Z9GwEBfFAPZXpdowz2FdQ",
  "key22": "4aX2RrvKECYHee6j7Moq6Rqw5zd43ffGHc3Ceifz1rigK9XLkeX5EEKw5CmQKgCmavVVQ6FiRBVHpGicnUTQdWz3",
  "key23": "2ERrdX6uVX7a2E29KcvjcfkwBTDP5yVNXqAvBCkgpdcTxwa7sEDMUJ9iPUbLDQdv9MCWqVjaC4mszveVcizx1w3B",
  "key24": "3rQhwnwf1JWSersQekia9vQ5mGwdzXo6FjbqAkcTtsRSXfV4JGvm3o1AZ89DobLPGzTxL9AMW1Zc6pv4VPGmAeFf",
  "key25": "35s8TUudjS8rQR3GsRwMHJBFzYwtPLuxxGyfTN9wCJN4b86bEH1YTa1Mc6rqCUaGtBaaPe2FAQyb5piojiHzYjfB"
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
