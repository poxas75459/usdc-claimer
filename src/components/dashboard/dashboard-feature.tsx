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
    "2siShdXWnRnFuABJPJtzKPNFAzgL1M28T8Q3ejbebxdpZGPDh9hZ8LGpEhk8WupJEdCjkC4YC8DDgqwdPTnRLaNQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nSVCnP69SXDVY1bkupeGLNUxYW4D9kBhooEHA2fRfwB1VgQGNcpXrBi3t6Anuu5dVCaroV38TXTwFM4RHm5XGqc",
  "key1": "3Maz2H3pW6afyv2JZJaw96opmWqKSquARwfVcvFtix4VnQwaBUEssYxGwEWeeUa4ocywsNjjnzzwa6MknkFm9fHv",
  "key2": "5xuSuobd1zMSCmkdpJhRYMsPagZ3pXbkeEZU3eh6TgjNEu4bZq7dzaY9e7nqv1kdYwC37TxKcDBQbZnv4TbeXVqq",
  "key3": "5xpmpBJ9aUNWCnNjNAuKv2Q3RM98TeDTh8L7S4x9STfMxYrBdm7UKVn4VphqpA8vKM3PB9SQQxE66aF31hUu5JBu",
  "key4": "MJSL1QyRc3r3NnQPJqigpKBd6G9un7CrG5rNQcE1p6PNdrAYk8qMjFY2oMAiEiLUCBPtDEaR37Wr1XLSPURBDuK",
  "key5": "5AgbD4EwBd724NuhBNHJcqrr9J9dUC8y3jewrzSuF3NUyG1dKh5dnenzRotBdGdLKP9z7HoCbKPepQhToaGZ7nr",
  "key6": "36UbKZd7drnJeZZNhARd1oqApbNZcSSGywXTADUmab3fiVyR7rZpMSBDyPMu5cPaKzo8YCWJ4X6rZpRHYPDVVDfg",
  "key7": "2vY9xbEwqBzLpZPMwR4onfx4nSxfocNAWEyrfqRneWEEejyvdEjZEWfmyvBGU2MNEk58FD985JMMEpK5QYoYv2CL",
  "key8": "5AtbDq7UbouLCyq66zLADNxtkeWVx7JMGHGsXtJvPntpDWAwkXiaqGeHFWGLYj37nkopWaMaVFhVqRXWgo21AUTf",
  "key9": "2aaApFvrUNGyxyFPDykzyicNQzTEzmjW49MNS3AR39GQCh6bxSA5bj7RXaWhuwujskhtAPwWV9eUnxMRQpymcrMJ",
  "key10": "5wv8HoccCqNNJRqCYiwmeB4FfE6Dbk4tC2KQYxjLKzEAECPnnVmMDZFNA1YEye752Cs753gVMk44d96JGXjpexZa",
  "key11": "4XJRLsa4e38CgF4hvQNVzLrsY164898DyPwWkJCKeFCEabpq4Mvt7dDp3PF5HBSzHFkVnafHrsupSg11ctRfn2Wn",
  "key12": "44cfZV8JGzqTSXS7BpsMX9LRTZi6HMqtFvbUTmHk6o7BiF5LXvkhfJYJZYuGewWcgh5b45qPCqKQXKX8tVDciNaH",
  "key13": "5k3dZYFLaH7rxEVfbJAdhJSRpSCN3UbthCiZxJFnK7AhU18Fd1kZqRAUZzQwXZ9tgCk9GPB2ULRGdf1jiGEJhp5Q",
  "key14": "4azjsNfBPe4LX3KY7q5bmnHkE4EQKyYNxxnbz23Gj8D7RLtMmrNyr6UQzM7FCgRGEzjLA6dx7ops6veHMyzHGuEh",
  "key15": "4W7G9sCxWSxaNN5hkZzoe9UPYjeBczGMtqEjickyxxQHUmXptPfByP6ZkCMjjT5dsgC6KkY6kN8k36nAZuUm86ML",
  "key16": "52FDiVAzvR78ULRQgYb6eq9ghhxrvMWsEgYFCK8aNKsKWAEdfTuXyRgjVys9yGGZBzDED7pyWWTpewCFYJNcnJQA",
  "key17": "2ZNtV4i5hxxLgxsE5vKvXWwdrNiATSSvoi7yE7C7ZJVL5tmhcCQkhPCdL53ESj4qfDqh9oZ5v3GU5biNK1nX5fqv",
  "key18": "5QvNHbdHpyFQncPFmDTG6kBVzwCD4YdSVJCtoTPa9hov1QJLPTJhpACxyjHkiP5LFLEjR14ateULociE7R7cyDmr",
  "key19": "2FNKLoVdfmwCbry5D9ZSp7NxPZg7fphQTxBFvMBa71g9nmGKbyhMTF7gdEenJpoRfMErMzR4uR6b5bemkU9jtrWG",
  "key20": "3Lg9Acx6JJznh4HcZieLCDRNX1xu6LxTaUoLfoKFnzpiuWthGgYSh2Lv1bDrLejozCS5iWjbJ58JvitS1sTvNGBb",
  "key21": "21YhpLxSdUy7eUAp46QxNM8oggMfmBR59rVJZU8wtwd118UP8fb99c4U2pNifEMMhyAAT495sTP1JnbkNsqAjpnX",
  "key22": "5WHrsgKG1SrFLVZnJuPB7ztd8L7dWgf5vEF6uwzJToF1VBhhSyXMV7AdCa7zwEQPeuMfNzvodvUABNn5ykpe4a7N",
  "key23": "5BMn9X6a5LnwH2RcxGYM6SLRiNqkFSffySmNQpV1nuhTRhDLmJ4u3SnTkfqkG1U24EcN93BM2qTKSvfspDQJ7T21",
  "key24": "4mbXgBLDqh91pCimbBgJiWcvjLGQQQnxfat3RmTDXeghSJ2dcFhDjA44V3tz6VS6qjQHNM8tXpXtzBhxrFi6CzdV",
  "key25": "26wY8ANuM9KoxVYp9bReLjrPxB4mag4QtuxhRQorcpXvERqpaAfsvsgtd5vGvfpfMetf7TXrQVLjtf2SSqLPHVmo",
  "key26": "34XQ97PmfGsRZj3tR2au11MDaUQCJ49dvWtQs5pxL2x5u9m27uDe8xDCgy1gbDUVccDhpcdsriHgygWDJLiKDmqx",
  "key27": "5ByfpdZK81GzA63rGVpBfTJRZLape63Xvvz7g8Z2yV1uxCPqCHZs5PEwttKDtUdHjb2TZwukCpppc5JjAw1mjYju"
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
