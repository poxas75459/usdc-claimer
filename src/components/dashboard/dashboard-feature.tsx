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
    "5WCsJdKcha4nJPciPbN5vu2kbUPqAHvxinhmMzoBuT4oz5APSv6YRBqERF55wFbadoU1J6iTcbyvrWwen8PgVixi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i6829ruAuUWd7Am1seJGhZzZTsyPiZ3XNPWfQvbJxWP7PaJo6L3cm5jYvUTYhrj977cJgTKPjxkfGErX7jbhUXg",
  "key1": "2aNSPZUmUYNtsr1onba7FSQCnykDKztY74dhfAaa78NuV1osgHugQjJAV3gerH4USmsAAtRtrfwv57g7uVYZq3Ks",
  "key2": "4d1eQzVZR8QWsMsvhPcdw6zdmJV6j5CUsE42JaCWpsCq3yuPxWJ7SMeUTPrTx2MgVjKk4eQAWAVh5p6eahvdoBn1",
  "key3": "62sovRaeZYzfmFR6iaGNFx4f9pECeWF1TKyUfCzaKZ5keAUnw1fSMC2FvRBGoLKTuCx88JgUoQ4tTekrvXm3CQay",
  "key4": "4hmYzEnXKe5T7M3kaKQ52ctaeoUesgBVgjiCJcGXG37r8EWHyz6TvJS5XctXa3Ah5NG3vmW5c14AKy56suT6P5eE",
  "key5": "yxpX877DchhwxhnMvnYqWJGBMqZKUrUuyCetNxDHx4CPtcXE7cQkMzFFgmQhmRMUBSHXoqVaBHzLyhzWHHc1dpH",
  "key6": "4sk9wdjesFyBtxw8EDc28cPFPvkweFmzJTapyPDWVCppv74GmTp2jKkZa6ExvjJn83vYVZMj6EqC9DomGfcCMFbu",
  "key7": "5axuhx7SMUKxdYiKCvLSsMTvJ2f1CAK3UpTPjF6y8W7P384CuuzeaWjGSuVLVLuyeWVLwY5e3RYpn5CjTL82Dhxs",
  "key8": "2YseH8ymb1HunZYVVLj1AfweN5v8y3ZRmLq4sr5RDP6hwLLHqkJkQDMTHdfkdynGayhkHmB4dm1xxsFGRkGEx7GZ",
  "key9": "4rKLtLaHMTXc1SAchxaLc6uwsnQmmrJrx3FbNfpgHsgCx47yGwv3oWmPJawviUEDvXAFwFoEEoY7d7c6PJogNWvv",
  "key10": "5FZEYxdmTp9ob9RCKJt27B3k75cLWsKsry1CwCfeqZUtdCWg8bzM8MUNpREgiWtEujKWpQjud7Se1474u8gjZ1cg",
  "key11": "4dZpuv3NQNFZ6kxGYMktWdVrwWNWxb61PpwbHpD1hj33ENDGheK16XZCCRjbrjykFwKMtwaSegn7i8dkWfi8ijfB",
  "key12": "4vzPviR4Lj4F2HmL2RZrU1qsmhVQC48irLTBSjaP2NZiYgafyR1MgW6jqaEBhA2EYYneMaUNPsdx9usZnbUYFuG3",
  "key13": "5yC7A2ndXMbp7tLL41icaNs4WXV3CfSy9TBmfqydLkfRL6yyDCzWVJkon7MbmrK6j319FwPnqeDCSukQCtnxGh6L",
  "key14": "3GFEruWjdVFR9VFnESevq1SWM8XknoozdsLQrbA94WqVN8xZS2R8uQJzheck2rUqYdWBLVRG9Rq9crLMWNvzuz8v",
  "key15": "3NFFfjYhabnbmMTj9gYx1rSQ77MrHdAd4N4Nmigwm5kCFSTvGHNe52aF4MAyauZTZ4Pyq7nLYFWAZFvSr3ZrVYjU",
  "key16": "5DXTinpGxyTddMKkCa3aNKkqKSrT8m6V3xn4woc9mkH9B7YDFjUMPZoKdHRun52fw2AHjqk3c3Ma65djJG3pyU1c",
  "key17": "3jdwYr4i52g6jM2dSzpM2zqH9KCvD4AZXbbmBHvtNPbBtDpststsHFGWwFt76CTYxfCgXntEc4Fz6q5mEG576MZq",
  "key18": "2VGwXQ2RpU7iGMsjkbWqmvVMWN5Zzb2yQiaWqCmxreca4HYnmo1BE4C54gygJW9jAdf2qN8zKkYD2SkJuykAsun9",
  "key19": "49n8vNnRsFRXQDEWPYyxkacfNM8UGX319i3PsEkP2FojMWpWU3uzoVqUCJ3m1i6EsLjSrpcSrVu8Q1XVhgFxQ96v",
  "key20": "2Y2qWKQ9KqW2TpmeNLYvRdp8FhCMgg7Mw1bJyoeJaWprwjvHBuCK7KmUmAjyGgdHdsUrbgUXA1dvtkVoJ2fp6tkj",
  "key21": "53Nz5xgWSaDf3NinostZyzSz4nfsVdPku3PfcWuTJ2GmBNdQK1M1AChPASNttSEVKM29RA1a7KbE49YJYtV3nbKT",
  "key22": "3miRx7nHwfbfMkvG6qJ8DfMs3QsWF7auuyBEp9UhUaxsJe9imoBAyrhyFXfPRbwj9FzAi7368yubhEiAjWNTLqtD",
  "key23": "TpJTtH19uca4MbPy3WMY9b8kDDyuc5BhiZjRmY5uaKC7C7Bnvw11qYV16JjFs42oKARjtZZBxc52ECWc9RxkoyH",
  "key24": "AT8zECGZa1WrWggAcV3QsaJTtii9snxNyrQpEPudmz1ASrYSa48JgqcUGZFVZYB2Uc9ZyyAVm345vZYhsG48AN7",
  "key25": "pzykqKFxBiyFtQ6LasPuhLbVgsQxzc9RcQUqCr4JGFo4ipiN3D5bmw9EarekirrrXMD49SBm89jzpEZrR5j2nzj"
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
