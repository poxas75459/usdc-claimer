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
    "315pAfjZ4Dt7fNRryqzCR8Wzh4k5yLLWySVfnUW9Kzn1KmQ5AWvwjt8GU4adf8w8oDydqw7uB8Tm73qTWG5S1aFu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ShsQXLvKjyQMwCa6bfG2poZix8RWkq1cUVr1o3zVGsfNeEaahogSGqMHyiBS174fmqNMNPeLLF8ueMP21Q3uVnF",
  "key1": "2Y4eeQT7jyg8Su5WgFnfYhqGcmVr5oaW6cGVAD2WVANciT38uHfa4hisDemCvVuaWngLQ9wA5XeXWZhiEZMVdSvF",
  "key2": "3MJCRhXNfFDRZBVHyTQAmLVBJwjjgazccvcHSSwJEwWixmNtXhDYKNseN8LfdCinaSJoEoCrM957LrLP2epzCESK",
  "key3": "5wbMnwVzNPyxxKhUFDvGZpXptPeqKo9RMJSUqZCmQtWpKuny9kcMvbZh9bv1WAGkJwCzkVufa6rmM6ZMekx8kP1J",
  "key4": "5WD9BBDuBbY51AustXwkVcwoiUWTgtZZxZwixFE8jskFiKJD64jzLpXFKHLyVhtprz9a5GS7dzgajHF2PL9dqu1a",
  "key5": "5EajroGt2mRnm9fnriKiUjR618hKShEYYz57UN1szqy3qiApFvFzB9ZvEf3kVHEhZJMfCYN8VyeEMiLj86KAjnWF",
  "key6": "5SA2UDrgA8ogHiRmjEcor8NXMgmqgcTH49xQXCHfmw7wwuwvx6AWTs2EMwRpKW7RjWmQ7e7CoD7VNTq3tB7wckJQ",
  "key7": "3LxKhF8tNLifH9D3D1B6L342yc94C8vtaXHNHbNtJVSC9m7TCBYPyLuU2WDdPVKxfYrrk8JCyLbd4oZWcMsQX2Cw",
  "key8": "2AVUrnEftcsZUBPLrS4i2EUzKaezw8kvFtBceEChU2qVdTJ6eZdadSgVqnaRg2916FGDkvDj7hm7631A2DYpeGLj",
  "key9": "D1L8cr6W4gqBsavYPhzyjYyTsiuwRkRqjbaMnUKFsMaGaHDd8CLH1dKQwnoZyyyopE7p9n8apeFj4weRc2ucx7g",
  "key10": "5pqkzDVmYMtkFRRQxdswm4cZ5nT65bonXzgqrQfy8XCQWDo9LnBwyhrypzcDdFDJyVGg5big3XUXsFoqSNe3w6rq",
  "key11": "4Axe2mYMdLkCgsx7V7gXFzL2LMJw3GhBBYd15cZpAnPMwMs3tn9d55cBicQ6yDtkbwRYg5GMvwn7E8kbdf9tjpTf",
  "key12": "23LtYvpH28t4e74pjAnXuupHgWBkCDru4pmWRKbTW2ukafRWqxrTdtK4KSTn4ka3MBJKoixnd4f99pMzd43AbXFD",
  "key13": "2Y691KvGFV5R5Qn5CVoNs7TAFLVYqxkxVMyx6x8Khjpc5TTNHw1bXJWiGHSUpY2mrxPgQ3pqQmGCaUhENgbawcqk",
  "key14": "4yA57nKjXkeVuCz1mNdnWEg7Nsoq9zsaTQVG3LUoRBCXstkN6h7tt6xSPe65SnzAnjkhguYiv8KSndxrr6eRbpvW",
  "key15": "2pAvZyMrkafvvoz41mecEbuc8j5kdX8GExNdMyHrTUfLmVyR1Ek7uoUBTCNqKEBf1LKBc7NAgpCvnh2kj6ZKL5nn",
  "key16": "4w6GYXWx8daGWGLiN414GaGr3BFeMDNoPmGsBSNQqFcYZCnS8MHD2udVSFjWPMGtYt6569ZmYTJHDJ3wLojauVuN",
  "key17": "2hit1s8N1MMBxRtqSjQFdJ6uiig2xX7ffg68efDbvCJToc1im2LHpdEjKhcRCShsgpziU3no55G3KqfXgzsXf16S",
  "key18": "4Cut7iHybJMe1Vq677fzABkXFrvjq7UFAjoCgJaAed1C6pYen5TV4Rbu4QMYvmxwksuMbAwjEj7oDTPNfz8vuPnw",
  "key19": "3BgoFpeS2wXg3JBGqNkMPNDwE6AdExV2W7qpnW35xq9UgcXaedM78tw7tX8dqaDjNT7DTNUD9Sy8Bbmy15LMa83Y",
  "key20": "3ebJHbDDA5uEXb35s6YEtXtVYfKwUfXp1CoxFAZzdBM3HTDzsLS1APRXg38HbwwYESytKnCyk1KaoShp4RSPddQr",
  "key21": "41JVY35KyEPTGCXu4Q9nkYJiY9EUuhpqh5vbQpiQZnCSe9KpsusNvkpdhv97po4vvFCaJ4T9FkAyHxdD8JCy49Kt",
  "key22": "5Vp2N5AFRLWEN3dWhnF9SerqC5PGA2YTsz1fnztk2mjx5FyJJqP4vxkgi2UvTCs7AjhfCDnoP8Z9HZL5hBfx1mCL",
  "key23": "3apCbFVDqqnfHh9q7buVV1DrCzws6KNxqEnQSeVgr7yKvH8nA25ztFpNBo6MTiczCKDvu3NoonTTziCcnoNbLzkQ",
  "key24": "57xUjkp7fnWDWhkocMoQ478WYH8f4a6YrY1HWVajftPyes97Rg3cAQ6HT5gvnc17xrCAoWPakiLKCnGDvAm4y7rL",
  "key25": "4qboh7V4TCyVasuFoZmTquB7BPGu4VwXVeFDfEhqS6BY6dk2VBLa4vLFxPmLBsEoxQavyTRgCp5ygRryeJNr5PQU",
  "key26": "2SYpt77iA9mwW1CjT2Hzjw9sWNnuiCdXdhq1GkE19uPpqANSmchzNPKP96R4j4hxCgQpA7yZzVCPp3BWbEwRnWSP",
  "key27": "4BV4isVGBC5kwbKz2MYkk5qcHoopVJp8U9cWQjJ3W6tjAN6qSgXj3QxUXzrYdMJFR6FpqwrwqdYGU7v3UvkTGCrt",
  "key28": "4cYg8MUJ2nLgcyyDW7yPx7uwtRzWjmtJF1ASHfXreni5jkA8GJWy3WxGz5JF23jAkhCTzSe3apS8wWdXXwNc23QE",
  "key29": "4kKiTsYK8TqtJJ4i2qYZ4jC6eib7dW9DRjCLzGc1x7yzUoiEeXmyis19X6cYFnxtGgE3dXF5fmhxs73RY43iFgT2",
  "key30": "5yghUgoBRidRGXYfdfF5hGFqMGa1CZqokqGDBzSCQcjjnFFqKbKyuGyH2orU93EyQrjrcGS6NGrZppdBJuGsApB",
  "key31": "3RJ5dSUAgW8TqDqH3zChr2AFTfJuKyNbWcV5JDc2YgDRfaYDNMoghm16jq65PDBtyX37ZS6aXNWeFoJdoz5Arp5G",
  "key32": "24Z6QyZpUtdq7Fe5N9NhpjUkLgiEmfgQVAsm4Rmd5YHifkQ1rWkst2V32FiS4mmvoxg59jBdmzNyhG7Z9h6kEUnH",
  "key33": "3RGSShMugTBXpeAJ99AC1mCcwv6a5HAkL9tTLEuLdNSmUeUNsq2um8ZEytjBL8cPAbrYN1XrjHw84vSJcCBGPSH2",
  "key34": "3sVrTmpuVjdp7pBQuymVJtpvdmjC6vzKeEizuy3SAJCTU6qxZ59BR8jgqWaFWhh34FaR7yAUozpWvihw1qnAJsMW",
  "key35": "2XeEgNExA5X7kgqVntvNkC2S9ZLWjVWxSNtEkFDJiY6cSTLmEweP9LjNEo1cFCQSZF3H57AM8NWTwCXjgknApK6a"
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
