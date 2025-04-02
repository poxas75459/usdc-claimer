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
    "36LdPoMNhCSzLVz3V8Txq2CRoqgPUG8oGZvqXAxP1ehEwqqFHJsA7cNzFvyeXSYFGmkRRgUipx9432xiAz1Zbq4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mDmuCZBiLEZ2ENebkmQ67bcov36cvp4XAiq7VnC9yStFfEmanRFY3t7jWB9AN2tRQq7B67Ju43DLoAQKrjJWQkS",
  "key1": "3mMTZZ97UZ1RCNEJqpr2xUDPMiYCiYiuuRvdafSTC4Dh6pnqaJZSYD9L4n3vPt2GjvHSdMFu8MAXqD6dZ2fHSr4i",
  "key2": "3UTGSCvwjkAMM8YhjWCaMjrF84WC7xQFPQVy33jPaZtQxBR9YvTQubwnUyGzF3h1Svfkm6ZMo67ju3RmM28ha5J7",
  "key3": "rKZRMJ4GpBQCQoYhVmEN1e6Ytmu4iE17U9R8YvQewvNEe6mgdAfT4ZpXc8iSgvdEeXN3dVYXK64pP5cPiVHJZin",
  "key4": "27nyZfdmvFiUBJwT8iriEXksy83k8wqXChXsow9At8aDtQ594ngdaiySAyckcLijaptnXYoC6WewaQaUZpWenixc",
  "key5": "tqrTeBdFCFLcfH5mWCnkWFMJpdzHXf4ztW4pAD7Ab1FcbytZQvXiGg8bo1jMNohCsmnrEFMu8JWLXYf47p25TyY",
  "key6": "36K6Ln4ewix58MSrpLxGTHG2eSN6iuAQK15m7USVDXPrvhPp1ocqSpgHzC5EvpcGsANsxbJRCX3YMqjKY53gUeYX",
  "key7": "55JqfdWDQtXHtFGAvNzCcx4EkA5XJ1fS5rHtacBZAy745dzRbTwgG34QEhAU6G7wGdB3aoqLYyuKkLjATYtnUw2R",
  "key8": "5GhWDnydgnqZwzdg5mL5pWdssAdnKmqsd6G5NAHTmsZFPq8Do9jUFwsN2kfWFD8CKVWrjCst7QSsRyQUkKnt7t51",
  "key9": "2JjsQAS3euw8BtQzwnG6L9JfbTssUEkB4RtoxTTfdd88Uoo8QEz46NmZ8QT9NAeuqDhy46a52LyaMNdnZYcWf4rn",
  "key10": "5yRpNA81ZZhf88GyCrQ7KjwjYDYQG5Z1ExD92fcj71H3E5ZknE1BfsK7S35hyaqHBFwXEFEHPqbLb5badY8FD1pT",
  "key11": "2jNQT8mMYAKB5jY9TfKFaRHd94SvWBKoePjCsPjemuFm2nKFpP4u7FVyMwA15jgwhkFMv7AsSpfqC2Fv6QGhwfv7",
  "key12": "5reAvRYiTCyG2JVwnojffxQ56rn4u3vVtGkcspvRj5wfDdKE25yePq6BcF11gZQxdca7vSHRjv2cg2RR6BVkhALo",
  "key13": "4b5JiQgyh4mPASa3AcabM5MRoxzn4niujT7uuRp3pukhiAVCnkPaVq15RifceXXavx1bcs9HrGh9nopSnjbbSPi",
  "key14": "5j8T1PReJvfPDawoWWMn8r6q4JQr6bsx1gBVC51WG9AShL1pitjua8y4BH2Pt87WhUhNuhRCDjEomzMc1MtcVoz5",
  "key15": "5PhADg6k9LXfeG2S7kQBErBYuo8nVzcenEDXmb7g8eruvJujJqFu9g4SaCkBXTyaQjJCoXpiwVsdwKGzpiuuq6ct",
  "key16": "D6XwLP6DraaRhYZL7dJbAJ9VXjBo25Yk6Sey3Tp1kPkpk8bx8TmRVd8QDA1DdkqgqoY4mP5dn6jxvUPu8LvnaNG",
  "key17": "2Lewf3QYApRmLyTx3M685pK6pep1mqhoRgi9jqLsC24A2eZtB6oPt3k9LSV4mMTshW2DQ8cPMz2ia2vpBoQyskY",
  "key18": "34fcBLBGLN1CSY2a4Ud1fs3srXzWuzmWSrTQqKfQXqBqqLpfU29WvqownKUTGjimT2i5PEfTNXZyzwjAABJjdRsX",
  "key19": "qeUVUcwvTphRQnRjJVU4JwFE3tC4ETHp5D9Fp7wyuyPr1u4s8aYgT2DodRprx7RcQ8xroCEdEyZFB6EDNaohxFd",
  "key20": "5PkWtWbFYAaZpvh5hsTAW6Thgo5gLEWPATsHBX7nigJrNtfhrdCGoyTyowyNty25zH5Fijm6bBPBn4vnsQvErY6m",
  "key21": "2NqwMuUuW77bupPr6bjTZjy5HKL1Nu57531fRjfuaoPNtLbCFwr2GBUdFtVdRaosVYAbVqucg6xv1RpiRdPV4KoL",
  "key22": "59xjwZgc5u1PbNvvsC5wAxh48FAi85i2uNQd9pbDLmptkMpmadmjU4bSu9oLgEueAoEKnMvo5f4UzgaLvSpfrCi4",
  "key23": "3aeyEaSRRWLt2iv1Nyw765KcujQEEcrmXWqkxVdnD3yvF4DuW93HmrYa4xgbnqhJAiUfXWVQnhkpfwqPVitP9GV",
  "key24": "58Fp4nXQaEz6zjvEbftvh8qcvjsgaUAkgShf8xqdnkezLyApLvgG2k9BeNRNmGac4CQrst3ooPaBKQ9Er6QuqsV2",
  "key25": "51VzuJhhyomQcY6KjExjiLDzYAtK1Vxhi6ANLCn1WPA4btWkcMv6FzTsWxFURigxGgkpfNsybeyKyfatNLaGSLuQ",
  "key26": "4AJbmL64GfuCYZCPyLzQEyM5wyAwx3fV8NBwguJRsEukhYpdLeMvdA8hhsvVUiT5g7iErd3uAqGXbJerfKk7ceN8",
  "key27": "45NNsVUAfhQyQjxJcVbxDW4JmE5bvApdUKKUceLUN7Ju79niHCEdMtAJ68QYv3JEQX39ZhYY7dLCo9jvgndi6ciQ",
  "key28": "38fBYpFn6jKjxomCS5JamYVxiHTKMyEFwLKUwTREkXmUYzC9mYPx1m3Q9Qwhh43g97FstvwUtSPTYEfJR6o65SgV",
  "key29": "5RL3TM2ggcPwHSftsoMiYoUkRgiemDfbMy4pkgyHahzjYF5NuELZk5n3hHrZaqrH5vNkwtuYpEiCyKxdgwnJxwpD",
  "key30": "5UoaPq9qyKzjvKKrpwX3uH8AUGYnXgWsYCDMtzktZQVdtfXjPvftRDxZ2G8DpSA4RhsvDoyNcNHNVAit2Yg8fn5r",
  "key31": "4d3bPT39GCKHsizKy6ijtWemaSz2aF2Jod3JpXxyaWDXEGoVu8vymkAePZQb6pUgBfUrSvNeiEfkBr4UJqaGCzk",
  "key32": "3WCsHFqkhNMAR4LEAaLSqyo181obuftJbzYgvoW4kg6EwosKasEysodBjB4Up6B6JPHNQCLWdrgQeUa7qzfykXJD"
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
