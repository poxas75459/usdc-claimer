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
    "2ioG4wnyPoBy5TyjxSyUByeCJ1TNy7pQ385XZoEKxUC6GhumUSa7uunWwV3EKdmTdB9SgzLrpbqUTZVBsSyoRtUa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7jGMM1SGJ5kg2pBRmKaDZ3BBNcSjQwpaLByupe5FDQ2iAKutHbP1q8CRSRSQNU3WmiGN4QEYWrbCJetT92EetNP",
  "key1": "5J9eya7hFtKRCED1obYqTuKaCgE9bXK875aAZsm9nszPkjcWuChbEuGwWV64ja25UHwtTiM4fJWr8cedw7WJfB4B",
  "key2": "5Bv6LN9gi3T6n6tigrMRGMXh6p7gdZgPvTZ3FrnMPxgheeRxFHW39FrCNUBumtobN8B57f5t13ojWoBBsYwNzhB",
  "key3": "5YtnEyo5g6daZtGYycWfJ7yqf6z2h6bGft4n4N8Bd12NCa4eg2nPypvpQZYrw5taZcWmpc1vsKkgMGh2TKNyS4Ct",
  "key4": "677HMmT1A7UksYRUKAi5FyfFbHNW8NcKDW5kn4qeTWgPzgWZjQR5xuGTY1DUsaXEYV6A3rP2oUi6F2oEpH2csErK",
  "key5": "DxoMqwxpiZjq1SBUtbhCLYTJtSqYqy5MUGKRnjgDrGGAVF8tiVQBRUP2ZVtfhwYKqW6yqEk453gfa6NvtQ6AHWd",
  "key6": "2TevfeU9hLG7socV5Vejx5pSVaDBMiagpJEnQLsvB2BWgydZtS71tPhckXJTZsAhenrMYbV4n247Cu1buL9NzCEz",
  "key7": "3DD2hYkKfZKDqJWRamdn4zwt6fXZsfsCsKn37cLC5ZCvLBvWjpmECX2JrJNMvP6jemjMiuHsMguLswhxSp4FWQtZ",
  "key8": "4EGSd7zat2dEnfSCDZDgNy87ZiHkV8oi4VvMmhmen6N33iBi92ZewNNmsJqrpWW6AUrrWagYynhvCHnKj44pk4Nu",
  "key9": "XdDpVhyFDsvSE9jX8jWDeqdZCX1Y51eoYgkY2CDvJAKT4uw8RRaeShcrNYSioT2KcUUdzL6K5GwHTGwCBNcwhr2",
  "key10": "53RSGBz3tECuFfkM9WyCEY9RBEoiUEwh9JqXnTaa82RwXyTFnALdqeRKK6ULrESkcdr4x73UNWo3UR8FCEvv5bLj",
  "key11": "NVbsKHTErZtZVNm3g17WWqFjWTPP8U2oii55oBimQrWDB2BgGDdSmwbkjJus4L6kUs9cn83wQP8mnVi6SkheuJX",
  "key12": "5KLH38uNGsMzKwizpXdHN5uXq6SUuBVRvVqcMnRBwnPh6Kh8QnQ89TyhLWwn331f4qp91F6bXcNfjyh3DRBAjbD1",
  "key13": "36heJp9WHXfxtd4iqmw2yN41KtXi2N3MJut1H7Tc4RYjCyLcZpSYahjb9y5sVmSH7DWKKoSTh5k33bUnYiFMnGD8",
  "key14": "627pDgrQYpva82ozPqpnveLRFD6EocYuNUCAhckGcSCiNPKhidjnyAhVjnCFG2svYPwoxafHwpBBXvoJWWntzxJo",
  "key15": "38kK9BqpdyWHUz52kd4PsbzzEzPNEzpnJRGPW2soHisixZuCYyZCg6aj3CyuT63cMyfK8Xj5J815QNKcgPws1abx",
  "key16": "4L2Ui1JdMd93KnHDn4XrtaFdLDZuZrvCbnMwHEhwHPw1JyL2Qd5LULfd2LT5TSFThyMPxWdEcQjqGgCJJM2D9S98",
  "key17": "65a6FZuRuf7iaB1RVirUvgW3QDpeQxWitMbtJ7cLtDBHwzHbCHL2MraMqd8qnuFowNNAHfLKyBMMVvoWi93Gg3LF",
  "key18": "8Nj3L4Vrx3yjtqAacpsRdRhiKYoQ6dfMkvKbcFFFqog42a1vqnDpQNNqgJcGQPycVbFrJg9ou3nZdYDjQzwmY4i",
  "key19": "2bkikPDgQE5JBRRtnF7xqKqzwgtrzAkX2MHzcX59VvFgZRCKKv76qgY65ABkAT5sMAhNFgRjfyrV78Sqoa4hAfih",
  "key20": "4ktxEnugarWLhe2Lv3KeTUWZhR2AtTYdS6r3xkaeJLGVV7oPgBZ3xLCQRt6mtpc4Rp1b2tygU58yptqvbUd1LVNn",
  "key21": "539Wz2cdhL8RgXfsLqHX925bLG9A5PiJijgDWXuatUGFhjotTUtEuZM45cCsAcQpkJQuSBsksa3Sz9ZrsoceinjQ",
  "key22": "121oZxvY2Y1MyFvKuXbkrPZqVr2a2kM3nEoxHFM6SinUZDa6VpVAp63f4oqbSyvysujS6KerxgF5AZxv8y3R8UP1",
  "key23": "53YA9yexZKs5N5LPvP7D1dHvKCod8BxEAgb5Mk2tMYED13AG4YtaaTauk3NWzKScPd8HmEUXfDrjdMuvSPhz4MFa",
  "key24": "5ZwkBr1uMV4gybtpF6NoeH1THZqsF4eQTM4hTwv3NDhAnqgqpimj1G11DZnCkqEmcA2RPLMqf8fvjRLQU4ADePWq",
  "key25": "2giigUARERAC8Eh3biGvbNqD4eRzjUZe66agmSPf3cYtyX1T8ccHFFNNmwWpEWkqFQWyARytb2BHNSXaHYu2Ek9D",
  "key26": "4WGn13kuUnv1Frik3tqzU7XUqb9EsFsEwM3ABxDg1GGQQ6fqsorUeJEuQ8nvD1YjyYUAqqZSR3oRhKqUVQTrnMB",
  "key27": "2zrpPksD6Z4QZnNieKc12V4kr4FgrKgdXNqEcRGeBgMiMmUZiM4sG8cqjU59EEGDd5hUmX4LEWUDAPyJDYkXBzPy",
  "key28": "2Rhh7M2PeCw8TRUbv7K6eqaxU8KA2NcNYdgBiTCrRLdLGnDZ1VKaHhvZv6ZawzEcaoGDWUCFFQri3hxQrSwFrbm2",
  "key29": "2fSMBvuJZUjVYQi7du8MLorgXzZbsfUAN5Ns9ZX7b1FjgkBjp8KuoH4GcaGgmkr13eBtvDKFv1Y1nvk5BmWEMUQ3",
  "key30": "5r14Wmhe5Q7C1KpsW2dCz2VDzg4QGUjNB9ZSBVyBzdjAnhnT1C4XnXTWVp2HAyWwRFp3KLkbs6JgxdHLzR1mSqsG",
  "key31": "2pgCy8TecDp9JFv9BopWdkxQe5SkUmEWAJ1BPAuSLYnfuwBe8mChKVN2vB8XnnBnAVPUa4KQTQr2u38yKaDCCJyZ",
  "key32": "4BssuvZWDMpGJcwLfs7Y5wX7ohziuEyxdaWiZHUHP7BErg7AehFLwEeoGUSdL7aaAcJE3yUpPBppTuNx3hdqsrH4",
  "key33": "5aRAL8HXFvXyWVXtV6btHNxEm4mQR9sRCZ9mnwtUeZ9TpsBLJpGLTsab9r76b3VciToHbxKvPzpFVUPQcGR7WJPX",
  "key34": "3hJBzgQUUGqykUDAX6BAk8WpyJdkNRYDKRbWgWR7tmFmRKxjLEqZBhdAXBHwsGKq5XimybSZH4qzLTmkSGpZ9DpG",
  "key35": "27fuLE8LCyYmJv6W1eRzrrB4rJVDiwWsETaThCh8xMhzsqZjyhe3XFRN2sxeA634nCNkXYFyT3ECpC2d4AZVySzc",
  "key36": "3yhBqpKcfzG8h6pwzJkpAuuDHH81NQ87BPxAzD9dv7aGR758DMEsAwVV34HEBrzFBqUkNhpxWby7Ghrmw1pmgP3n"
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
