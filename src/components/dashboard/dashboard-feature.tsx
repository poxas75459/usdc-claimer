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
    "2AhgfKkomVjsxoMq38uzwtU8yZE1aVd2v75u1dHX5Cwwe9qu31kKXs8fE4k9ECJJZS3eFMzVfMfT7UuiWPDeeMfu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CXmePufj8CjMxwce8F9VkPkrQ9KMN4aDTyqsueybiLsMnS1ZcauzGJkokWTxCUy8sSroM4eiFHH8Lb4hitU57t3",
  "key1": "3cPngZS6z3PRq9jifsUmM8tA8nzaUDaG7LsinkeYsE6VfmG2856mMvzXpPfjU3mwAwbXYVaMxLgroGY5ku24DhBY",
  "key2": "3oKtqcsz2dQWod8YBgMUTW8CfUjhw7beskAMRxt8SjgmkR5XujmD1yc7kTzZT6L8batKPotgDfaHSBiFnWWxpAia",
  "key3": "GGaYksghZJ6zwjKpHF5DCpE7EC5rHnm5fYkGYaR9zmiMoxJQRkBEhXBnwT6SbJQnoaCbeWh754Hd3Pv3rnSYiLh",
  "key4": "FDpr8iUi7W94x1LN2sgaYUVWfYMcM4uW6Cr5VEGPZmHhAYJ5KiKWEU6AnB8qQrUngywVKio6dFQWDxpTEED1jdY",
  "key5": "3fRmvqT9ZpYfZMn2FCDuKG1VFJSmzd78UZAuEX3BkYJznbAWhduwga1QSx2XBUvGTwziazs25smHHdd5HtYUM2s2",
  "key6": "2Ln2Dv1dm17bGXWMQ3mTuCZTpRkeR4864dZkckPxqxVDKhiiqu8h1ycxBtY455qr6UJ7zo6uhyxrWfSi8m3dEa7g",
  "key7": "3BTNtsGsXzejZPQPZ4nMJsC2w72PyBwSFq7UhmdUHd1EvTSXgCBkmZgaS8HdbEEQbxVd1YuRbSMDAdZnnnU6Rwr8",
  "key8": "5e97PzDjkGr98EPcbg4wbmcqREu2GaqcV8yYC8bmbhwWA6BmSn2ZCizzXX33AgWTRxw692ujyxcfwkyMnrynTuqZ",
  "key9": "1GyCZbQ6HkFd3q3xHgsuxrnnxFVTLyYhnh6rZYASNWn77fwiPr386CUxsXT58EZpdAxr6qQM5xsQ5jF4KFmWhVx",
  "key10": "49wnvpfKgu5npNcRiujGqYdUPrFLgx7XSiWrH7JQipCY9Kw9N7aQLo4WDkD9KQVYrrhAmQ37uLRTrzivUxsjLWr8",
  "key11": "5QupNruYJFZV5DDqv4VS8oykZXxo625GTzzS87sjz9w98yUWunYpFedAeNTb227WwBw9aLnXxG1eL94uCZfrwsPd",
  "key12": "5CNTg6qiz6PA994DkvF3spo5jM88TD6rg2t74mEzf9SuSUbgHayo8Qz2pTY67TUwRwNdqw4owtLEXRNbQZWxv4Ti",
  "key13": "4LYQnP5XQ1biLPqFBLvZjgVZ8hrTdKrViKp8TwKjX74yAwLpU1e4hW53nvmkGpEWPGaYa8j2UnjcLXaZhFLifLGn",
  "key14": "4tVxCK4bZ1meanPg26YGra9aQ8PkMbxneJbHoqLu3WbDfTRTuE4ynRte7kTojDutfkf7pTG4vxpGxTB9P3NNAwJm",
  "key15": "5JUt5EfuPvLApnBB9EVM4Ld5ZfNXMriRWhBL3hiYnq1yZeH2WFkWQS82zn4itZo3LckbiVo2MKjVCi83Sn5jPkXX",
  "key16": "2udpdqFVPjMTa3K4nfHEFVuVTGwnKconbSew1NafC9gCiDvaHavyWHxoCi4qcdtAHxrUnuq4w1AdTweTQpdnrnZ5",
  "key17": "4UPBY5iQcACP1cufisAGiss4zit5SZ3NfE9JfGWfVGURbTCj282zeqbMq78xxoCjLLRsM3mobzf637p46DtfgwpR",
  "key18": "2LM6ESfvEDowXxqjXKQu7ERVZ3Ge1PaArFewZyUpLXd6VNza5pxbor6zrTgyono5gvmfSvoGdYyuLtWuVVSK7WvR",
  "key19": "4AwA5LMc45x3711cTEjLnkJohCprRuuQ5fSU7Ze51vgvmXLQcZEdEY8VbAEXDB9TqMDMaKhEns3KisoQjzN4NEUi",
  "key20": "5PnavNyzAGywYMatz5RifjeJPCsmxeWXyo13B7n5pr1r4Z9SP1KKKApKWQR3k6w7TjtwAW9YT5sXrHqV1WpxwNP6",
  "key21": "4ygjssUQDBdZKQTARzKzJJZwZAsGx2ezhanjunM9azzQozFuwNcmtiijevNoT3jkAuq7PQxfvK8oWwJCxi31NUfY",
  "key22": "4xB6PyQh6n5hmfSwq5UHFCmcNnC6ENEqRpGBJcos3u22goA1Za4mgMrPvKDf6ZAAyGrk3d7zNjy7bk1hofX5sPDv",
  "key23": "3AgPZRukkG2BRD9fCAmWbaDs2vkD2gbYmNpVS7NNNF2ts4cbZLp7wmZ7gkXPXLFSqeYrBK3YxGyBtVEPgoBK74Qa",
  "key24": "Bm3kq9qDR1HkAAFW1FvkJzuNy8LGULBMLMax1KdB2qUzXoK78pRxSdbhEr9ZP14HeXauuWRBupSrSDmq3nXUKzp",
  "key25": "4YWfQCarTQ5nLm64et1nVWYoRsF5bR2bL5X5rexp9h3owZ7DpcJxF3EW5QZ9xwcpNM3RV32ZVgB9EBC54PGrFNte",
  "key26": "xWfUNP2jsonXzU9C9aL8R8gfHP5eQVRhb5YsgEStQFYJjX227ynUiFu4aqEcPpLHH4q4Rr7pJ296LAZfbAFERTZ",
  "key27": "2BKZGyc6NgfupwwWbJFbkZrSX9jwf8oKwt4FhdZw3KszR1RiCpsKNUEGW1if8YDizCTnb7dQJMPFEHoBQo45NR56",
  "key28": "4KqV3SWZ8QMfgGCeNSLVEwxR2GucFTbMdv4mH7Dh5nFiFxQZYPVupryFzUbePvfkFrbE3YygE5kQtZgK1oVBrCr8",
  "key29": "3pHNaS92VcEymjH7awpgTCVzTeJLXtq7dXHsgXDg7jzg3pXWziwKbN97YuYLXgpiJiC3UgkYf15b76xpcRh2gsHR",
  "key30": "4nszKPQASkmv1NNweSF1n5hvqf79Aq5pacj45G5pkZYNSR2CkNae42pgDVJkH1RKPrUuF26vnxRzmEV52iUxErXR",
  "key31": "5AjvJTqX5B22kKQSSNVGmaPQHbSR27siVW3bAL5CSVXvJUoDShJeJ3qEkDy8bwTJWPEKu4g1HQXCsRdWQrTX8tUi",
  "key32": "5b2oVPo928MT1L7SgvYmHv53KoXRV4NTaxgNY1rVi6BTiydXggrYdUBz2a7bx9cvJ7LGFrV8Y7hAeTiYzZL9mhbX",
  "key33": "3FViNxsiEUG7gVFAAZ2oWDuTQMSydtTaoXFbez34jn3ti5tJervaCu2TBU4Q6nVFCexyrGENoq21Ld3s7M24tS5h"
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
