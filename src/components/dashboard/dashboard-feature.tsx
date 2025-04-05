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
    "2Asxbbfx7jA9jELgLMjmDk8nAEQv3ofx1rKgrv2gWfU2YGSb64ojNBMj1511NQTVmp5GgKpq83SksQLoQcA9hUGN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i7xpzvAmux83w19WvRvMUTChm58LKK9kkHy2pAALy8rWpTihr9KtEXEf84Ea6sx9uKeozbrdUAobzxsDFe8eLk6",
  "key1": "GSc3SygB1QLB6WiNZSmhzEfPLkBZQGFmWXHaW6FmFBnSUxxFn2DPfaVE5bDK8hGiyP59bdH4P7gEq1X1hh4d8r6",
  "key2": "xEhJuXzNK3zKTzLVT3CzX3Wq3xBBuDxQrVcJzR7zCdGRgCsNKLLTACBXWhpjp7m9cghwSi4gA4HRVtdF6KqgiVc",
  "key3": "3kArMWFbwu2GeNdWYFjknJ9NzUr3tjFt8df5MfYY9KYqTnDgYeXpTVjSHGu74z6BNaSifKuckKxc2tGG54u2rV9u",
  "key4": "2CAbPNVRbj3XydkNPcpRoA6G3XdhkjMAX1husuGMKAZjFBkdq9aqUpBrwZ15Q8g5iFvakAgt3NGqDotFR6NXc5YB",
  "key5": "5YJ5bXJHNzRY4GRDuu1BumRGyiMhtNH4z5Qjfi1ebDwvg99dwLk52gLQ6ZKNoojXMCeYiRaEet1rgzM17jU8yGBc",
  "key6": "2hYufcQSm7bmVZX4gkfis5RFj2Fe7cwEud2EbPNHzUPvmn3pPMReG3rw8y6c1hTiA7kTMJCiWMSzdYtcpAhjFu4D",
  "key7": "4di6a9mTVLPVtfMMy7PnWamfnR4NozUR82PDYFddp6XJ6v5jEuUK2zD5LENytbAjvcDcp1zF1mjZNkb1bzwa63yU",
  "key8": "YcKXgC7CtiHQLHFGroQwsaXYH1QFdiZmEeyEHEff6LRbQUq3W4ySsqVBNcoSAor5YJdt8mxfyAAMVx82jREyTBQ",
  "key9": "3dd1ZsyhxfD292SJTi3f7qxULYthZfhhVa8xYq9LUWzbCKmVtseJyVxjk5TAh6iZT8Fd54rZ5JRmYPuaAe1oFbCi",
  "key10": "2tQ2FMHoQNshtDAK3pygpXwg4FfGA3rvoH9DkegRmtmb1BusrWwRmcJP76WYLKToVjJ77n9yD2fPdaKP8Tfvawzi",
  "key11": "4CfxtBaBimPYkUbpfXfmb11Hm7cXVr7MUYGeZUzUNVcZifiQiWJKfjYAZPYiZRDjYY5NB1UmRU1kZJh5rP8bmhgN",
  "key12": "2YscxeKJSik1sbFzoE7tf9SAh9XiKTk7y4xt19TxCdQVJjtumddeorVwcQnboFo24Gh8vmNdNu8AGHCEugbvni7k",
  "key13": "SeyoVuKgEz22L2H9quEBsgNgWijXV98Biuff3QiiGaXN75G6a2z4P7KVvk6HTK5wTDKJq32U45Ku5AZCo2wrEJJ",
  "key14": "4i2BVA9fwTEoY9eWizuWgYEu67QxPzRg3xMifhuDWR7cvm8nkfQA7sAE2fiX3815qPnzJygm4N594KSL5ChcgzAj",
  "key15": "2pZSjdRaWLim9crML1stPygDkpzmoGcpZep1R32PTxiPr1Ey2hmpfLUmoof2TxXutAbAL3inzGrzpHsU5ii6BatN",
  "key16": "4ALNvgx7UNCZYzBWmawEn8vTFuV77sBtm1Y9NRRBk4zWt5o1GSxwA1ABhKvyvZyvPfZ41EAAfXSnvDo9iSqZJ7SR",
  "key17": "2QKvziHfQ35rn3ixCQhxaBkmpDBSAZnTfTrVNaAbCyZszEDsALd3RJfjfasaN1jgS9YugfDjcaRs8P5MAf7bTpYU",
  "key18": "4oVmkBX16SBDE7ScVH1k5xskkkAtv7gE8L6WDQw8ScoEWT5tDoZXV8juSnTZdV8hiagpvs141pVtwTsSBL77zBww",
  "key19": "2TNG5qD5xHiHfEm6QZExX6so2bzafHUfGHbVXMvTjpK9SLqogaxEkbfzkZuydzm8fRbtQtGikTPaYCQT8hio9zZV",
  "key20": "5XvfVtZ7mkg1CE9YzpqVGbqEYGw9jgQWeqgQceQCvdWYqwrYNHLmZ9A9ooMNTUVG8x7TkVoKEABRPHgu4jwETCjk",
  "key21": "2JQGARuuMmFwog28PH3noc5WtfjMe7H3yEQYTp2FSL7BHKY1LMB1v32DouVdoChHB72n6vEaQC4paWucXuBX7pxi",
  "key22": "2tAVhEuJdjLJcrHEtmLv2ERn5zA6nh2c2GAV1JFza2Aviyz5Anqt4RHwN3gNV8m7Bvu8U9ihCphq8mrH8CPLX1hd",
  "key23": "3En4kMK9zPBj2sEm4HcbMf3Y1f6ycFfzyPLeLRMnshUpeJt1BmaWb8MEbT5dvC28DTGQBrhRAszTeA9Nu2Mmz4TG",
  "key24": "4uQTWeBGaucQhSH2bG4pWm7wq5fqFqnVbzwP22Bu9NLYLmuz5hNa4dwmfGAR3rfvDZ51P5sPwAcPTSo6GAxZNUG6",
  "key25": "35cbLByCViqAUKPDMnqU65pEqP6TiAhANAXPZXuVG8CmmrXdiSYqrK62d4j18AV5zCMR1UAXFc7HQ5E9HcFHdBhS",
  "key26": "38ESuKMQGuXke7yXy82Uos5Yp79nxQtAzwZQMgvg4FcLo9jYu7ZeayYxYP4rrLX47k7emEhWioi9XahmBymkWjeE",
  "key27": "5EkjkgvJPnoCEKubz1vW9cz5bGJ2rxfbJsRr64f7bqXJFdAVBqMPZ4i47rYFZKnbkaJ5B9mvQs9kUCETPQMEAMQu",
  "key28": "3brskD7P96x5P6k2rRLywoQxxwsgGHQzBNEAyPZQECy1d4Q4ZBaGgXFEmocAvuiuVWFb3zPkVTfvnSn8sr29ctMp",
  "key29": "5VeL4kxVTZGHZ2VGz5APQ5qerqWaimod4huAttTfU5wcCMwcgyxZbo7h6n7XLLYdA2qY2HkEbvkE3SNgm9xfGqPp",
  "key30": "2qUcai1KU6B1BtpXcfGmuJWwpmVMeeZ52bvzpB9NJBme9CCJWr3LWGVSGrUbpkjDybfHbK9o6F9pyuCJLDUWGBAp",
  "key31": "2N4dn2m7paVLURTFDJw1BRhw3Tfm133eMRt8ChpdPhThE5yYrdD5voH9EYB3o11gvUT8VMKGFVe1XLcwVPdCStEA"
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
