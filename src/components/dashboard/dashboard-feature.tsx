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
    "ejUY39xdZ1xL4Ai9VbYHRinpc618vKM4MmQMNX4cHimeZ7zStNB4kD4mocFqAQU4LVtRPByWmhRfiZHj9Cm4QwL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gm3h9qiCscf8UT39ZjpBq5CW4wJFVmK2WEr2MNzGoUL5WFRNCpt56a7yvVt2eqGDRpVUPbFz2uQiRd3UKeHT4Sh",
  "key1": "XtxwUU4H9GNpYiqsiqbJZaS8334SrzNAJ7XiTUtCEvqX3sfnmbV79kiG2zRVJs8RJX9TjJr7m1XSpRpxuj4rMKU",
  "key2": "29QF9Dj84EydYr7mSpKMb6v26Dg53GNZCcJHsLStCgZCjY8vTimmATNvfqX6NG3jHPQNfDyKu5sUP43jkoyZRWjw",
  "key3": "ceShMT3CWHQRpHMNoXmFfTZQRCfMtpVWNzpcLVbYFrrd2DHK44g4Fp2jNxV1yk6P4YEP8n8tNJQf3aMM181wUX5",
  "key4": "5Wh39RtzW91c91ufP61yHresDRJBCiQ4k4DmJJxUwoJt9MvRBP8BRP6cWWRMEXFvQww29MFwH948r1TLYC8KFKMU",
  "key5": "5WQK8J3dR4Nsd4nuCMQriz2gtNh8bgdVEEh9cxxMbj5WEGUAsngEUcqGNM1P9WV3JgDtsSF5nRtG2DDrpcHeC5Sc",
  "key6": "5tMTDycXLFKqpMafkNVXzCxYaKCkHNfxGT39bEetZcJJ96oWqkpCqSxLMxTFHXH4rSEp41NonJAqjRc6yFpTLK2w",
  "key7": "54oTmEUh9MtBEyeYNomuUvp1QsTRfWwbwNYF8n8KeHWssnFjtQSFNATGVq4CRCa9ALkEHF4sRagTs86m1WcUXr2J",
  "key8": "4FWMLvWbXjEFgqLAiRQSTxQGKxHiN8YAejrGCFvzYrPYkeNWZawpxHLcZmsu3ax819mcRHxoy29qsRestoNMZF2Y",
  "key9": "KGUtAX53NQmpDgDArohkCvuJmqhxF8p2xZTfuuZCnfn4HdQc6QEodX5rAE3qKhK5kvbXE7RMGu6BGJLu8CjGChD",
  "key10": "5pKwc92pkahjhSGscbA99HyGMapCYHb72mZLpcgWMuTn3RrqpDxRqZTeorqcwMLzh68tC3FhCBxJCvBx6YzcXcAg",
  "key11": "2Pavz5D7S5LRkxJvTdSEa1njwRxa5oYySdyKJAA83QyKPipqS8gvJgVdgAKHMy1b1i6uLzrxUuNvjVcUdFxKiSFd",
  "key12": "Tq4ESRktR5nyNWLUEQb2zPaB5oBqJH7dA46CJGGKU8WFmsR72snPjLLbmEXaPT7o8ZAqQj9Z5rGQC3ZMPW3sAbs",
  "key13": "5VnpZUeH9NeY8oczD6UNCstosB5PbSBcbgDJzfC28w43Ln7rDzP6conmuHPDTAcUazZZ2gNQZc1jMxWF1BcHUUp5",
  "key14": "5Bqs91XhdXFDwxQV5WVSgh37aT8iNNzbDsUNjMCyhtBMCYJyPH1vZYi12HEw1Xi9QwEvtpn5ixrC4L1Lt1GJkENP",
  "key15": "2RiFcAo4YC8YATZER9cAf388hYuL7hBYxSg824ZNve4nX5j9KAm3LqWBk2KcYfj8JjW5qkMVndSWmNUXAZn7SWNk",
  "key16": "78W6TpojpfDMkPVw4A25Lf5wVX3ZC33qJPAVEq615EYg7T88GcAXsc7zvQdWoczgN1N6PcHrT9LnqRTGpBCn6PM",
  "key17": "7LxWycBKcamCSfi5m78ZHq6NRYssVEF6Guwxt6SUdonMhNoyJc59FBXQbYp4FNkbxyRk6Y1bGNqEAusphatJVux",
  "key18": "4UyfkibaQtyeeGnNBiVZ8bDXa6VViNSWz3xwT5Ang3tV2TCYw3Wa67LyKLijVZDBkgYD3uYBhrwRnZigipREbpMW",
  "key19": "3yMi89cypijPwWPxVBN8SDcMge7gLFExr28iheLaMLFUCujshFXowBBCpYR6PSRNfTN2tBT1hJTkth5Vf8JUn5Zd",
  "key20": "3q7TVqRkxu35bfGWCSFRXGF3DjeGD1kGtu9F5DcuFoRHvJKj862axoe9aumtqr2WYQtgP34KYeqGHxvQqbnUmWdo",
  "key21": "4eTMPVxwJL1wUyKw9UdAaskcuupkmTkUAQVw5LhC6EGqaUdS5MtidkqzQNZauoqLzVoHxsD9z4TakVFYKaTP1GEi",
  "key22": "2gE3ukYFDQ1GCrjK58GUxNCzVSGD4gm9FB94ug1jDV87hbrPN4p3CiQeBJctvPwcXtGy1efWZzifNjFfeXXMQgDY",
  "key23": "4cGBRs2Mo3f6TGuEqeP7cyguXX3Xgdc8JKeMFii48N7vkHWymzkNnXM7Y9RLsNgvnj49pQnUC7sYUeM9yDKf6WP3",
  "key24": "4DpssHjykej5Xxy2tyRfasMffvFH3m8uLEajKXLBB7kLyKtnWVbyZNf1ThMpop7GpnAPWu6EogpaynCCUiKsrGW2",
  "key25": "3fBRCSSSABF4QbDANLz82udo8yFWHTA4RnCp5fQSb1PdSvzScsyoUsMEEyzwxQeiTZSKs2bjmwXQowy1UDcV4n2",
  "key26": "28oPfNkD9v62dxyQYQdPqcKviQHLzxx6WQ8ehpFKr9NN5ypazVLpypjC6TnJeXJwhAiX9qmckcJZn2DQcFzXCG3s",
  "key27": "qe1DqLmy5hUHd2QBM6RudDiaSPu765zAk8uDLqCKjys42evEoviqSuByYHvhh5ka1KFuBM359cALP5UUpodQbnG",
  "key28": "3HHZ1aau8upc5Pr6eRRfF5Tsg5LW2er9g5toXz2N72sYZWDrVTn78CfUM4HK2EzMDh7swXeYkuf5G7Bf9oxmC8zS",
  "key29": "5533S2r3sbomzKK3jhPJMTzYVwFXhmtV5DmMcgbscAmk3U7Bcukwu9D1m2m5GojD1TpdxJDCY9JoNaZpmQYMLLvk",
  "key30": "39gbP1yJuP7JTimfQ2q9uAFKt2EBRJtTTpCQJWGHfSpVb99jn1kY7UvbSW4rknUYsifKYkveMcmPqEEocYTqDVMm",
  "key31": "3FZRYGAwPKq3h6pYrEi63ZsTgCQ2qHpud1axZMrxorgBoWE73RPzYftu1PRLSuUrW1UwXtXZffgw3JHrAbB1joFX",
  "key32": "62n6icRQQ2nkbgdwp9dqEMEZKVTiH4PBo9XpxhjS9NzvSPz4gMfxHc8G5uQeeL4MbrniBuocLCxo467D9NtyWWNx",
  "key33": "4GDTpJA83LUtVjBre3qQFhZmsXc2Qf2a5yiHVazUzPs76JHn9swMnKAnxZZ1SvYVsPYtMnT7cBZmW831TKo1Lr8t",
  "key34": "2PM53YjbR6fYahKPxpKhLrBgRJdcBVJqLqUQtpUCi8qtdQGrdU7tbmJh1AMMaZAHSfAhgju9RqjLVT99FZMcZuTz",
  "key35": "4ft33Qn3oVE8XmWiBbEVTKRtLdHr32ZgaPMe3v4Fifd7Jn82stMyo1BFpduCqPFYdbSU1RziMHaQjkvqKjUkH8B1"
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
