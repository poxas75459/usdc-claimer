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
    "61E5VBJ3gDPLW1itbpUveuTdDqsJ5J4fr5rdN1SWxZ4GTPR1QPVxco6u5MLoQ24tmq5a6giBHCBW37dguzBiTUDr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eUQv9ZEsCqXBGqHGSdaZSkyTfvD85TSxrGZqrXuNEKPyNQiVSMXZ7nxzmNK7TN5JWCQesPzHGmVUZwtW5sJfrHT",
  "key1": "Kuvdj8CU26t4ho4CKV9iu4K68iYmjToUE6PKi7eyNdgzKhp4p3P9k2f8Vm739pcY2vJH3Ts8V1TTZTsg61uQ2eb",
  "key2": "5XyBDuxwdeoMdX2J7Co8iVViLsY1G8oEJNF9BQUEqNp7ZY1xPKYJXpPxQuwWngWXXxBQtXBXgi7KCcYEyfWhfR8X",
  "key3": "5576u5dZmUh66YpRnazJtqbQ4qLoLAFjVbgtqK3bqZot7vn6VJju3HxZabifn648xnsbsX1cef9Voto28ZNZ22zj",
  "key4": "4DQCoMapMNLi4xSNsUw8DUEEc3rqmVZhpYNGiG8f1AAieWiWqw8oehW9eLWWoDghF5Mc6FTDA6y7HYCpGzGJ1ehx",
  "key5": "3ucyXWXym6XQDrUc5UGmCweD8TxL1BnMHcSDuWLMyZUBR2k9XB4piQp4AE7nqVr5tToPNtWggbNTgJ7bzzrba5v7",
  "key6": "2NcvriKYL9hnzendEctBfWrELoc1CLBRyfwwvEh6Cd2wqwbdjxcp9mB51HqHapEMGApgPW28ppdH3ZVpt6PpZaQp",
  "key7": "2N4kV1ZpWmX7BkPKoLeQ1y5fBqDns19BLCfzry5CmqkixLVr7XymQgSjhdLmz9rzdZEKCw4An9GyidaArEbM6cRo",
  "key8": "5DFjAASrP2KoCiCqMtH5H1snNwocgPLutDFJtjeWxpvTCfitNT1qDGwifjDrSTfPwVmJYGASxAMKuMAjUcrY7qfA",
  "key9": "5Y7TjtCfLUozJ9a8vZnNxA3zDw6f3SFU748ZqdSMq7h2jWfj6W9iQ8AF9nZhFZR2zmThTUEdDCE87EZyF6PkT41p",
  "key10": "Q6CdXAUfwn34HBw6NL6nxqmbAZ35fEiqKrz3DCHsWWY4VE831N2Tmy7KarEgUnFtkvxSfTCsNxXAqMXKxLupJFP",
  "key11": "ckYiXin2wYbUu8uzv9bYnf6nptgGKtSSiiEdDoyoMzWGiaD2NcT53cjcmr6cFjUXj1sfkoK6arV7dHE18rGsEiq",
  "key12": "4h2wEdWzqcqyttt4vAYc5rYizrxEE4yQ5mguL1V1r3v6YeDcUUoPsjp2JSUc7RH6AapZ9Qq3XtDqV19EWThavKoU",
  "key13": "2nkgWD4eVRbnJwgyHe7dukaapfKWzSnREKiEYuGmcUankYT5jxzfCpRP7VADfH5SsFqzfkkPqBFEcfLuFtds1P9G",
  "key14": "3rNWHJvwF5g6DSWMsqHNbUMrVtjD5Fd83fnUNFPfrVH1hbtqqf58hesURkLqm9e4rhm36y5QfhNKQ1fK3ewPYsok",
  "key15": "4epo79rrG8GFzGGfHowFkSdJZWiCmrDzTehD9pPGZJgCHDmDi1i1TNgWzvawgpsTcyDKGuHrB6zbp6rTaZsFiDE6",
  "key16": "44UTkRjoFBMrE7Pufw1WFuiVuPU1pfRbCo7zomDjAYoHVrb6kcqo9MbDX5ExQ3xj714L6gy7aM3KqcqJM5tEAmiQ",
  "key17": "Y72cztJrMQfs34fqswkPCBnse6mCERTmN9kbeMuT8TYiN8Qbc3xv5ZmpcwLxJ2CNA3TcyAKryB48kGc79TNM13B",
  "key18": "5rQD5bLfaXgBzu6WUz5FfUkjDg4JiXMN8aayueb9esG7APtXyWuqMQkseXspj4Nr4hFgT8oN7NAytiwqVAj2dEar",
  "key19": "2am3xGKsjef4Q5oVj4W22LhyLgAqtbMoznvFSyWfdNszQTzZ5cVYhuLMSJsNLLf4om6dJEGPaVb1uYTXub59AijB",
  "key20": "3UQayf8DZaqABk7M3Y2QftiWssQAUFvuoo4o9e8GVvy7vpnuhyafi5xGwNzMPZz3GLDi1hGXYrkgt94LiQwk2Fcq",
  "key21": "5N8mZmYqchp3zZEJt6P8oPmG4mtvGT97DJx4KHMuMY6wZHafeWcGPcgsvsMYVwgEGnPEuUscWHBpZPkEB23THf3r",
  "key22": "4TBUdo13eyRjfVF3EwHFi1KSkhcjDRKWXqom4c6RmwQwMQJ7MTyvg4iZvUQqdy3P1CFqe8Hbgi9Fwzfj9jBTD5JJ",
  "key23": "2SVpvRdsHd33QF3STgEpKyEwqijqcMEqpqGt4tg75RcC3hTcPEjTck4MfSBtQM6gTfxfg14bFEbe8yhQbLXLdEPP",
  "key24": "4sZfwJDp6zDwdwP168eYFmVvyPXNpdeKZCACDUoy7WrwK3dJ3F2pfoy9tSWyXFa3vewLmJ4YZUThHGPqfyh1cZ5M",
  "key25": "4TUQaiZHdgtvUXrDUGQi5bVfUi86vCJ89DUbz8wR3CXJyRYiuNdEa1nwSZZMae4kSz8Rhb1EN9YA9z2supm6evzK",
  "key26": "EWCW1ePdD4mcCMbB9zNUTYJQF497HpsmD2JE5PbzHRbws3TuerUjSSMCqs4iV46t3bMfjuC3aWCvkzizpuvVzeK",
  "key27": "3EFCxtt7bCZ9qBH7VA5W4FskzTS8HJ12cLk9KP6XWmSyHhn88DGDBT54yELPrnn79WbMdVWJHpqQcMN3UnAb1Kky",
  "key28": "5mHoEHnnNm1eagR3kqDVh5VgQeiKaisZNpDuhzHYFkwiDnmHajKoCydsrbegHL6BkGD7B3aDhwLuFwjLQYx1AKTx"
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
