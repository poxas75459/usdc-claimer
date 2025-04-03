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
    "2HQh7PQm3SmY7SWgXwu6PHSC27nguVCmDUuTggwNbj1k3xsdMNxx9vp4AAXreF3VJNjjDsymUkxFfrhXrhNXKk1d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UX6fKKJNqH7jQMNBbo7kYW87sQafuchGGnZoaqvv8QwDBFMHVqF1puA8fF2cwLg3rYqnYMVufjyUKpa5ktTCgwq",
  "key1": "2DuRsBXvggF3MCGZ2gpdsQw3j1SdFWoGoUmjRwWwEnYHXoiycFAbC7BXQWQ5yBu7xqZWKH8JRvNzCEFD7GA5bB4m",
  "key2": "RjPJ6RK3vJdVehhW97E9vE8rYUDbDcfbKk5YzCRYocpoZs5SCSNGn4fpeHu2HDaUe23QnvG2he64Bee7Q8a78aw",
  "key3": "5MUAqu3ffAUEJKe2n3e3JzWDZBqfd2XL5qQfW5FBGcum5Sn6mUFvt1MkK2uUah2imME1xxhTyps4A9f24BNhHtFs",
  "key4": "LUSi35232nDDAqwPK5CHExA5EoenRoeogdck1dKEetveFbnnBGCzRaKsNZwtmLnDQcfERN6HKRMhF3Qxb2k6xwc",
  "key5": "2LHYkjoGoDhhC7J5RkXM9VQMw1gbK7S3Ki2h8zNZKfm8dLgTc5SEho7c2TjqqL4HNL6uQRxa4vbSVcPi8mjuXVPm",
  "key6": "5HEHQZiBxWoHYfSC9JiADzSem7D9RCycxgBC6hYbkPn1b1J4ByaLfaPw7a1PXNzEvNx6NjrCigtpuXHAxrcuhtSW",
  "key7": "3hTzLdXUzJ7oEagh8vKNYsUjgH4CmHmwhgF4go5Y2h4m3z2a5o17uLE92CMHnZQ7js24irKJ687JNRco1vafZtCt",
  "key8": "48LyuoyoL15PrbPoo3HHUnJj25YeniHoC5KiRYPrVB5EHdAQzf4okpfBW4mpc9jV2icSrzs7DKimoqFLZoGFZ7tk",
  "key9": "FQN5mP7Br14CVd2Z1Lv9opSnR29qDThX4Ps3zbAEoeF1bigDvMkMbmbUgc9JWGjotFtkuv2j2w5f5joZTNarebM",
  "key10": "3cWpjwfEzEU9892yU57jN1e3nMgQs6h4e9hJ5iNdkMB1LXqnGEPNLt9CM4NR8PE5ZstW1t4Q5je9dB7XqiSVYkEZ",
  "key11": "5L9nmvgr9kQNGgCGa8WL1hJ3HsyQV7s6m1JmXGzBew1JivXeCDCJHs96KcrdzF6rmtui4XavgNAe7D9tHFQw8oxW",
  "key12": "5PsdTWApZdvxMBqAuAh1my9w3DGDAbdbbC3vmBxFoFcw9AVuPqTu5HZgFWfRsb6FcsJj4sZEqXxFM9NbZJ6G7WVh",
  "key13": "xFoYmyX8HuRyyijUrjXbCkKQpeDHHBGZycRK3GkBVjsT98fNzCxnKndG9uH7p5z241yAaVVzbQbZmSC3cJ2LS1W",
  "key14": "d5QuQuzfMQ8FBxKVmxiXZju8wtzecWTpiHNnRDQCZFbDjrhrNkbxL8rrE5MoYhFVbeiegFpv84t8yZRjsNBjNko",
  "key15": "36Xnf3JdU1gxR471xahKzSo4jbjfbbSmSd1Qtr1CnRExF88L4vzzBUsaTc1Y7itUjSgRhB8AK5yoCiK9YghGzFLD",
  "key16": "4MdFcDG6ybHEe4fPAiQ61imWJGTdANq7bhrPF8tVhj7V6wcNHqJCZJuFKPCMzV4z8QjdkAkdmCQQX1SboVnktsbA",
  "key17": "3Cn2FHatkP8GYdtuXzXoP8twWJPqcHYoqb7SoFGMSZbgsqYbGLAQSAsKbUF6n6VGiJa4YigUeLzb9YeQLUbNamy8",
  "key18": "5nzmJvdJrtUDawYBfX6sKfrtTNeKKVp7qqg1bDtZFtNmgYGQnYrN7BLvbuDDFyp7mv6DK9NRsfRjfN22Ei5qppeo",
  "key19": "5XcrKHnUoevx1xpsPiv7VsGiPEGULLckgfJ8PqY3mYZ7My7nUKwTri6vh7afUkeohcxgLpR1FxAWgp8uv898NG2U",
  "key20": "3o3HsXmtbgK5d8CSxb15CFUgvkLw8WAotaTx2h7MrfxLTXr6JVa3nL8i7FzhsbgxE9auwZAx1mkqwRK2K7YVaNnz",
  "key21": "5HkVAMBGivGhTcQZ2VhaE2FFpqvdZgHFtreMuryt1vLyBDFgpYeCqJfajYuTviPymLdXiwCaVvZ1XH2qMeNNuTgf",
  "key22": "5JidsgbdAXRkuZ4Bna8GpSTDesuYm8pk59CJHTD2t66gDaYUx4Ptxh61gvNxZU71yoSMFEDBXoop4zJWHCzVnviD",
  "key23": "4HyXDdL25D5L9EJqRUyXJhjD9Qj2F6XYsaWFApFz4s2E2JqJeVXJ3fPenRd2dXkBts7yrbDyfaDmJLMxnuqgPpty",
  "key24": "5wC3QLAD99hmUrTj6jB3yVTXpaMA6ccsWv39sAYbrBVFP5Q524ymyHf5smdMw1mxmWpxLiDjkJrkXxt8ZRFip3k1",
  "key25": "5DcXiAAQuBF3yCxDKT6z3vEm5WoaYJDAHGv6JJtXL4BFvAkduiqhYoVpwDdSZUMBycFSfkEb9rEGDyUkaahEBpnk",
  "key26": "2f3K39ZKA4udHnLXqTjMckmBzq9yD2sTDEW3mTT1QUMtkDksk2r1BYtyewurbSrC1NVBVVy789UY3EkP7hPUWrnb",
  "key27": "2EUsToC3Wg2My94sfDPgMiLNFhQ4oWw6Bh5htrRKR11YjHQPYo3UmyAoM2LvnPrkM42UxvTDHvr74AmgFBsj5WWA"
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
