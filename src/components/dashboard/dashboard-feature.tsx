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
    "66BSEXFHrf7YiAvW3CAu8gsRS4iaRjTHBMHY5MZe54LVfRJehbkALsr5NawRAMYtGKivebD5mKng1Mtu6MVP6AHU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Aj9QC8NjnVuv9JUMNcszcPk8oTtq1T8DEGaJf8BKCvJ4M4GhjwoHRqGTL1Gjcp8emU1Jv6sGeGrUuX5J3XLFe7o",
  "key1": "3EE2BWb8kMvScrxE3QU6U5acmXrBfiYawMSZRsHeMsvGj17GdWVHFU7sKqPsdvFdSUpP93YqdsufDcAKfKw62eZ9",
  "key2": "3EjvaovAJqtuH9x1KR9WLCwrevqPUetMkbDs58KAzTkeFAzvqKd99DNW2ag9982x7sYDThEsNpy9UdCFB2AVCMCM",
  "key3": "2f5QxnCqs7tkzb7KhrwCpM567tihSbMqEJ8s8Lh2Bwi8SorRDHyCaaeyzR2NFkdLuDLXBfjX1w5CQgDci4YN5dPd",
  "key4": "4TLb7t2oJYFZwC4LSQpAxgK4k5yXE3qB5mcB7wLC89ccwjjgUGjVVxANRkc7gi71dpb63pB3B4mqVaccRSg4Hmpx",
  "key5": "2uddRLXrDo8b61SL6sDpja3AUQG3MRvSRPGUiKLtKZykD4ABoNxshS6tP8vDsfBrXeJXmnawHPbUtTBA4pt3CN9R",
  "key6": "2QeFgJyqkUYgHthxMhqNnGZxfk9Qj4EPhmDm6YRGSDu3kEdRqa2nEJGHkwVTceZfxKZznPHZoWCRtxuNnxfA3hBk",
  "key7": "Jxxqn5fz3Rcb7qzXX6hbmEkLVzFheSQUifa23RHN88HjmmhQCkiKinXN5MChDCsHJFvKQDFDQQGiwTMcVYhsoxU",
  "key8": "45gViGK32UxP4JEPCzjjEtijQhjpM85kzu9vbuYgwi2ig4RiNjctQLbmghHaSkprnhhDMreu6kW46tE3oWdaxZcS",
  "key9": "2LE3LEsw7tRf3EzYtapDBtZn49LtdBMfQCLac3wpggujNjcvJ6RfFcCVCwYoCsRnnxWDzqrjKbPA9VbyCzvzwF4a",
  "key10": "2PGajwCRw5ebwzBh1eUuXWqMuKeeVPLdGCXxjbMFMVjMB5UL1H44n5M47DSJtxt6uzY2WkEWCAJZfTYdJCjgy61U",
  "key11": "3Ms7EZS9U9bHZWKMB7TmGGY1Ums2CycCt8rTsSpzdWW7CAZ3t3qAwB9H4xED73zvrkj4tA5QrEMfHFrehLxbTb68",
  "key12": "FAZaKnUs28ediVHZDFPbxt2ctJTVvVkz2Lw6YCPfRYMziPUuAAbdn7ZMYnG6FgSeicDJLWDosCMGWUYsW2DhKtb",
  "key13": "33joVHQeciWCjhx53iMDMbkWzg3bdtGZVgG2HvXiQNGf7aL96JFUzBcpWsZxbrtyXLw7jfRznCMC5PJgNMmShpuk",
  "key14": "4HnHzBqEhfkyKAEKAuGZEfQLkbuSvSXkiwcCD8jfjPdS5i72zU5bsUr2pA5vSTzDU1RQbm1reJNhLa7ZLQFShPEP",
  "key15": "Fm2J9DmSrBx8qnUMUmkkf8XHi8TqEetmWTDVTFEwitz4eqeBCXqqpjMfRLQkYuAazch3Yc894z2dZ1V3LdmjfJr",
  "key16": "4qjhSS74Fd8ze9EGKk28KpG6Gd31ZroJG6eLFoeF4kux6sVnoJFSXAonumGzHzcCYF1DKwGyUHGchr86uzASkwKS",
  "key17": "5dN9RXDTpPR8ai4qiar1W3d7rs8q3YCaCfewqPpoMFeJk2FH8Mr2ezbAWAP2mCeCUWKQLjCbqbYEfqNp5ebMZeiL",
  "key18": "2VkMgwotAm22DGjaKX3E1NQGMuYF1cgbMuBTDe5nkSyadWNqNAC2SHNSsEwqJYEQk71XrVKdXMs6bc5QXnLfzBG2",
  "key19": "4NZz7XdjzscVTiUVz6FwpuFHx3u7st9WtDSsH6R87JdNPEoLMrLzgopuZy9B4hMgJAYpsjs9Dm8autmxTiHZPHM1",
  "key20": "nB1ayt6JhmrsyHF8AV7si6fA4qC9XqSPQwvqFXteeEpoM9UuHBL7rDHYwQtGJukgi3tNsUfauLbVsgGUarjrA34",
  "key21": "3TxgnEL9ZSSseTxGtX1pwspZtoSmRcJbQQE2puDUGwFUWy24kY1xL6HCcEQKuwXxWN7cc8rzP2W63CArCbrTmaLn",
  "key22": "9hTnsTibwqYmCpYFJK4zR7mMfusaNeKwgVQezU1eMRKgSizMiohjx7Mn1MtAjKR4ZBhXd9CDC5HciAkpmPDUnA2",
  "key23": "5wiYAjUgg2nSt2RWTzp4kkrSETCTFUW1RTvCGdFwBW1uJKgpaWp2mr9BKijSQY8ncXsQ6FisrVX7CCFVZ4ddcYkM",
  "key24": "62tk6KxEE79tGDhdDiXbTaujdSXmNby2Kwjreo9E9kJMDXBeYUQpGRTcnSRFawnewofKk7CcpWtwTkAKBKAxUu6a",
  "key25": "129s6xmRXZJcu6eFEgrkCL2MUsS3doN9qZAdc5kJDPcXwbbrBwmdJKWDnRAtrCkSfm4qRJ8ncJWZMJwniT5XuvHi",
  "key26": "2FzNsfm3bEBRFiLZU8e8VxkquHDJBWu8TA9FpDyzwH7pq33KaA6DEMFaWdDsS2yySnZ73GWbdzpKq2Wqvf9JLVBn",
  "key27": "5wHggwEkCmLFRMWrzDzawfyX2cTxej8h5dcYbfdAT4FGyCVHWC9411kvJjUhf2udb9ryKithNAB21Bj4CzHwi3hA",
  "key28": "35fmBisbKdqJxFzP4WbyLRcRTGTSX8UN6Z1BoxejjcxgNWUrZcjF31mZTAzge1Xuo4CzDRSLGxgCYnXfz7QQaYmV",
  "key29": "auKZRwkFLxwKsC1arvsbMZ4ECrAs4EZkhSng7AR7LfNnpSgtN3ELawCWwH8Av7CB6DFrGVcwLK3SUj4RsdMUMdV",
  "key30": "29YopWPWSwrVZLksrDGATbEFUb4867L6WvyFiYN4rVehY12TQ2xjf3kqUV3eFSEtT2ZEQGgVj3oAUvF78x1sGTfM",
  "key31": "4VLTfbh8N9KbJCp1QSbVvHFoUnHe78vWbX1PgaZpSvV8edsXSfkS955dVfb2YkKt4WHEMx92NegEP6yWiHc4Qj5Z",
  "key32": "2zkm4M5bAPv3RPNM2YhyWVkmfXexsqd3T9knLjHBfYC9fBBYEnACZ9CeY1cw4dfkVCFxrqdGr8mNeLwEuqGeRhSQ",
  "key33": "2NGw5gsqwm3EZp9gKQneSXbYWnVEsewk7bLTwLgBZS8NqoU6BX8xnixfD7c66K5bMgeDN9eQMwH7deCFgsV6ywbw",
  "key34": "4g9JWLiegjRg3eZT5FiKAhe62GFCBZF51AhvAFsV74hpcS6fM5gUju6PDf6UX7itPCiKaQPY4Q3H21nBEvomwa34"
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
