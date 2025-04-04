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
    "2EsVAugWTsHjjusKjGHnocCURgp58G6R1ErXVhiZdThGaC9pKvN8bGNsDwQAsdcc6QPUXKZ3kLvgcQLmZkYDSUxt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57RFswBrZiSgiDQWoy9PJG3ZpYsi8i3wMYoTtsRBTWoyyjkef9jxyzZSkFMuqESfxDWdX5KCZ7QoRyrv5bFp3xr2",
  "key1": "ChWt67sFABQaVWV16o2PSBsK4bSwfvGVUjC4u8PHn1sbrKZQf67zUahomJKVemo55H4Yz772M6LMwtLCs3cZXf7",
  "key2": "4u1yJMPsDxFoKrgroga8EVAEepYK2DfRTLBnBaEz3NUBjFQVeeW6dhHrjhTUBMc62HiCbRwvDFRmai49aicUgB3V",
  "key3": "4ohKJrumpjMzJ7XabFff4LazphkQiZEnwpLaza76UT8YdS94XUkLNQtAiRQ7SBrzfnhCuX1XRYqPqaQFfrZQHWfa",
  "key4": "3VtqqbxtgDfS7PjG3TtreqtQXAYqRhA1cVBtZmySNEE7XzJ6V7XYkZjXwQistaVogG1Z33PZsoLcoSEKZULGrS9m",
  "key5": "3ZZMv6bEwTd1BTBTMcb8nZY3Yb3xNG8gADg37Sbdy46fTvw2ZqYP78XCe5mytkwKMT63Qo4Jy8AnZ7aa7fqZqiLq",
  "key6": "5cfe2kneHzxFkh8Tq4Qd8kV7ipg6PXVWSDrGd3jyvi7y3Pa6Lztw6MjFu3dHGmyPiJm7aYVkkmBFHzxGd3j2xd12",
  "key7": "3FDUMLNX9e4fwRRydFwvepWEcqVsZdYMC5QaZD5pbmbE3uQcLoaUHxCD8XphEo83FXGXKBaxJPr42729HoNGPXuG",
  "key8": "5M6Vt2nSyQbPW5mZ7pi4eMobaoWjjgKATsZEN53YLhAdbWxaKQ6uDi1fxvRq2STKGjvXe374w5FN3tayjRq5zejH",
  "key9": "4DFJNgPhHhXHnuUzoN2ajC72uMLuEBZjkuF7CuSoa5Dsz67ci8dcQyiDaMvmB3C7Q32fE72gvjLmfCpa9ZNk1Uod",
  "key10": "2dZ7KKfvW5mHFCxqCjt2FAYSZoAvcrpVSMgrqxnLM2aiGt6gwFD5gX9vkcBNXpZKvnN21swGVZCwXDxx3fmZFU4r",
  "key11": "5DVwBoNSowQnszyjHkUCZ8PY8HWuykjtDm1FUS7Y64nYhuhGkV7SGFQgGEayqXmSM1aTCKNQCNdZdFLDG7zrj3Ms",
  "key12": "2s2xprAawVwLyqUsah8N4Vtk9KFBHGTe5oRHi56hgwKJaz8VD6kLiAdok3HBsVjpGZizGNTgvsxp656EPvcbPx67",
  "key13": "3azUWBoSK5wvkh4vWui1Vxw2fKcjvawnUJCZXsqiqEo5g3VKQftQ6hbfhboj7NiaCV3mYsQzd59tuWWPsfyhdi4N",
  "key14": "3NAmiRmGCjBRwJKT6bVRBFFgkFCspbt9CLwcMwezpMNGEbNPGtK7WnNmiKCyLTYLje7ESpuhDkbfXQmrDWxQsRGc",
  "key15": "2Wa25hPycbhbbaMnAXNDuL1Bke1195HjZzeorfNJTStJBznJD8G8PqzLqbY7wdwf1V3KJiKNno9W4HHGfpwVCYHe",
  "key16": "2pA5aB9ZusGmaN8fz3DTzyiX3BzDbKoWgqoFFtiMW6bfQPDh7JnqU6vR18p4QSJyCMHvWAxX2i7A3iWdRxdnhBXL",
  "key17": "3pKgVfgRyqizZqNEezq63aqPS7cXoAbxGFsiuo4jH7ahBgbvk3ZCDtfovyUrb3inEeccMe2KsE8thahmLrS3d8Q8",
  "key18": "3Et3obbwwf59CqVzfvHVXr46cCtvVu1NtsTjhDq1KA1QNvjKXyrgGau6WvKjjWGmyJgtG8KFwvUb7uWWLCDcxGtr",
  "key19": "2BN1eSmL4w2fiZ7z9cJ6bJcidNXnmxUYgiVgrnaFrZC49XY8QjeAD9Y8b2RSCAdmAmhvzc1pqWJmvBW2A87BwL5m",
  "key20": "u4X2Hw1dnYpwiHGGCPm1C8q3vDP6eKBB2RTbUekpdjyzkfn7ygR7adw6hR4aLe9m6H6eaqdjgzzbtFTdfEDYrce",
  "key21": "EEtkhGuKc8RnF4V1sBN94QaZiCKfvHS5eL83BV9P7TroVCsLYrxWUGy8t1xA13JN7zMcgRYk2MVK2ZKd4PqkEBA",
  "key22": "3kvnmKhCP3vLfsgzkUVbWcL8JRdueonUbhuJxjoUisMspf2DqSttu4YbhfHy6P64Kfh6qsrLGkC7FAdfMcYAWBZE",
  "key23": "5ZCFGsvimTCxpLxBYfPKCsQXEMXkEqk6Xwyo4pCrheEgkJiEBgVUVzjVWD7ecPiUXN3eA2s5Jo3jQq7kkpKRPESA",
  "key24": "2H1XDDRrx39Fj2zqa3m992vSZR1MX8wJEm5iwgxx9b2dKNnzYPY9ZNVhaxmiCUHaTxYTsg7Wut5gyjACvUnY7kRb",
  "key25": "3qa1r7A8RX784sUHxEKwFBzHFPiSQbT7ABFt82HcNazC12W6PXKh2Xv44smCkiX9VQBVbnBFUpcfBDz6wM8DGoxM",
  "key26": "5mcwXPVrrjgqde57DJ9gbekka9vtc6RX3NMNmG8mKd1QQdF2wPMCgmhX6VyKrUa46w4N99mSy1Ui9yzN92NUkUk7",
  "key27": "5o6DprNTs8NZV9pN3mS7bq2yVso91pHxuexyy5DCcoK9s69bZzfW7Z7Agi2wZ8rNKRAyPnWvR921Dq1mwiTnimT5"
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
