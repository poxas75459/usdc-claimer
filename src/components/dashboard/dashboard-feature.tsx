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
    "44FZfZ6TtD9aHz9Gpbdoq4FWCEaX9B77ptK5kHDbMbSFDzHjxfyxUcmRUZS8QepPNbKBbEPiAhKBxgbsAv7hS3dX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FKDGQ8b61cLregwBP6gaYRtN1DsHMTADqxB1gZJWg4P7xcubz9qRmnJJ5UYE2yezssNhtR2NBsPdpEAq8mg1Xwe",
  "key1": "ArpzVKXcJtbq3DLpNGa71sGfoEjV52wPb9WLyiXDsVPD88QrKrJAGMXSUStbMDm8Z3wn797WG1QLgXLbMxPF38E",
  "key2": "apg236uzszbSgwhX5txjA2hoGAKvsHC5aDCkyFYRTrygErqVerHAqbuS1MpFVGKZ4ckjTP77XceKWFjQouLFqE6",
  "key3": "2osJ4Sw5jKHi4LjBJrnS4GQs6ETj3mJc2DRMGe2GhxFz8hwxcD8KUgshuJHfcrPYdM51Wf6m5tJ7ThKchmW9woCJ",
  "key4": "3Furrmsg1owkM2vLetRYVEZTqNUHiVDeZN1vV3sy4WXPHi1ADRsjLQsamBCy2cgcLpq8DVsnnvm85C4W6UPdhXjB",
  "key5": "S4DRwaD7tn9EZhFVAWGAgPafCACfKrjGykbUArxsvkPus323uegcSDQg7RjWP73nBK99UtAWgmoiC2S3fTbUgBm",
  "key6": "3sNMfPMHU2gMmK8n9uG5Z1ZpGGiW5x5ron5BYwBNximCvRE63vxh5ZFVJAWs7iD3qAi9hP5uAQaunJMQjCK5Mfyd",
  "key7": "4mpe7EWAF7To2Chx65D3f9jkkdNp3XEfyEYV5K96hY2MquJ1Cfpetxx4YWY2BKZnkDxbFum9cqeTQiSKHpcNvQUt",
  "key8": "2M4Q3sgKHQgWZNafZm44gsTgTABSKUb31ur7TmEQtMx8QAc2z7wo9V9Y7hdp5ATQN6TpP4k2Uv9Gb4M9fxnVUr8T",
  "key9": "MJ2RZfndNzS4PbN8y5i41cBZ7GKJkSkgZzFLMeRe34K6PQDgsDJtTjQPsYWjcbCqUgiRkagrM4AXPX86Azn3ZRJ",
  "key10": "4JozjzMSLL6x3J8iBxncY6kNbopbGs87bupm5rRnwSmLXRrPkAxh2DGDdJWPy9k4A5GUfg43KubgJ5Xq1dx8E7cx",
  "key11": "3LAjvzS1QpJQxY4w8XLdfwxeSatca1sabCh14JJwps4MgSqDvNj2bbQnUMjwTcXn3U9cWwq2xjz1KfbCN2GBAg35",
  "key12": "2ezyd47Lbh8ggf6SnGxNpfKo8PWiEmvEVE2XmbiDCjSYexSk95b7RTfhRwP6QF5KgCkYpZunP7AtMCvKpwdNjWyk",
  "key13": "4gVvK8DnM59xkEnxX6ZZf3AQ9G9Qoa3hXyux8CHZBoBoB8nobkoXjNq8m6uQvNEbqbmksdXc1iAjRv2Mqmq3haVS",
  "key14": "da9hbf1F9B6nVegVbu87QMxjk3i8rMGCHsVsdNe6nKRP9C8rQkVZUagzSMbFx47f1zx6qWfy5APDaJ2fAagysvJ",
  "key15": "qgYBA4ANxrX12P9kYRd7jmXd83ZsHEELCnwtMjUv3o9d1gVied7iDJdBEcJzZ7V3A54enRabRE7iw333e7GeJsu",
  "key16": "2zmifHV11vf28FLZLmrNZa7yM21dKLDxZPq2F1sNqhAtu14KrsHidauWvPgXM9uLtMjhm4jrHzTwTjgd6heRooJr",
  "key17": "vdtjamz8X2cxY46fkzJ2QUzvPVEFBNNheQNpNDa5XFAbjLrCPYPDe7sPsLnAsoGEKeKCDRmSPXKYD2TPy9V4iAf",
  "key18": "4CfydZ52XRrTC8NnQWrDPs4fFspgeaTEn43xedsBQAF2Xiqttx5gzq1B64CXA8W4KbjeQdN4mjbuqyVVgnGN2WxN",
  "key19": "4gj72SygENaqSMTcaNKwphwmzMkJjUfYWSheivWsRrDNPBAXgYFpwQVJexrgVcvKAoBH86vMbM3he5oj95toY9uZ",
  "key20": "4Ws33w3hdcfLipS3sdP5E2eReGGoUKA6txZWJ1doEK8j2uj7KPMpSttJ8cqtytPkKuCNgp2Da52hKFNiNEStpxaM",
  "key21": "44dzhZ7jzTcwzvwmNStfRjxso3DfQgs3iEqui4B75ZysSBFjP3f2jPFgGRFkUQTNZNjf1uRtDwo7UvmS5d91aLcj",
  "key22": "2BPYakX8ywm8XuQtDZ8UorahUNMMHHogkRZe1reQX3YKYGfPx985mkscMYPWjFRonStyMiSFjMMPGsztE5EmHTZa",
  "key23": "4orFnNvnqnwuiCRfMo4sQS5Xnt4jZfLR6PTEWKb4jJkd43STfzSP5rH7qrwTcVytZ61jneTNS8h8BGGv6ihJvBZZ",
  "key24": "sxFTbq8xXKZSD95JLmF65LP4X6Z64qmwhE1uko6Yz65PjVbH5R82JXJQR4WV7fThgEnkWwpUfZKLXHoAaQeoxee",
  "key25": "2RHGzRub7mz6ku5sYpL93gi8a5HstdXdKtPErLHTmmeAfBiAXVTL7q4En1JgxDFBCHP9xh3mxn4NbLmaLKqWJBzy",
  "key26": "GTEhm3wXnFkXjNexzPYntyVxAWG6ofVNMcQNU798VnqWdDbMn84MwWryFoNU5SW3AuJqg8KZe6Chk3QMEok8sfW",
  "key27": "Ra9pUeE7aTpVhFBxPDr58Ge1SgnRRBN5JcKujLDiJCFLUiNDVA1BA6TtgswttP9UNEjTbBY8i8SR1QXTicQpdrg",
  "key28": "3Zc9JqAjUT4FqrQBQ1yEKnPAhs5dyVCaRes6FzkGqDQ33ngnMctSvQsW5hxJrRiCtnmGHSrx8NKNXX791ApEGpxJ"
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
