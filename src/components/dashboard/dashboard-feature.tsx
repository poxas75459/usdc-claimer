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
    "3Gtm5bJup1RyGZ81p56suzp5DGzLF6UCMN6wXDUXgmfoBAaE5dfayFXRBTNAiGAZn6SRNBUChAgmen8QTiH8YWPw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iibkP5LRGnbQz3oUbK6MnRyPNs5h36k3taEzw6PPEKgfqTWfTve2Qezckvgh4GCnhZMcq5Xi9Lx1JxAJhZ5YfRK",
  "key1": "5cR9cHNRsUGnyT2NYZQMmpexS9wnYr9HDMw1BSjNmhFQKkqxLk5ZHbdNG1SgHtfHDSZZx3yCtN4N9qSD8VSEaaim",
  "key2": "2s4BbRjf6QgNogUbos9EsJaWR4ds5ucw64r8mjqKKEMgeQhc79rFUFYaLiqV6DHVZtYyd7ZYgNdhFYjmEn1A1AFV",
  "key3": "AWVEK47s8KtiZuAtJxE8aahVeCfBCUjdeVXeeW1GTSSm4nMAdDxsS286KsgL92hevCoXmWEvdsRziYNWuB2vpzX",
  "key4": "2oKKnmedZtghRADsiMKvX1eJqgcbZmSVzmx1jyWJxELtCS9FsBGhZkonuWA6jxmmSCZuevvq1v3AmMhTrKJT1pKb",
  "key5": "ExaPQhSKa1xsMzZHiJ94fxQg4uNHTe7d5Yya6tsih93cRSiptxbYomZjhrS8io7z5tiuKYBjUnMsapG5tTR7974",
  "key6": "4vWFFkYHrv19oWVdETqCs3RBLaFzBtGy3TTHJXubBuVqgtXda982GoAiS9KHNMZjfNfLUMXD7V1ozMK59uxCxRuf",
  "key7": "2YeAFHbuvkYMcGZqGc3cqqk6R4VTKYjnfionH6t8Vs1QbYgtBNUj7wffFf1GHyYkiM6FY5CKDUPVuVwEZhXwfWcD",
  "key8": "yj7sWrDMnUU9JD27aKvxELC2rYxxDHKKsXywMaKths9Bd3iuzw8Yj1jzg6JgSFAuUtZQfHYJbdmVjuuEjaG6D5B",
  "key9": "vVvBuT41ZEx99svPYhrMGYm1i2oqXyDNYv9baUN5JG6wTGabXoiBVETU6U7etv1Nic66etMKpehzwCdjGLJrxo3",
  "key10": "2HVNPAnX2Zw8FJnyuoMy6cZEv1EkYTErhHfUysyXQLBdRfVJjKsEXfUSv2TNXLQwuwYxNb6KiKBDcLvmjQKVN4ea",
  "key11": "5z4Z8LzBHgYdyZnc7QmjVWjcPyXDF7KxP9PcrAmRiveSzSUVyUqHnWnKYHT2wsYbipd6Wmek8pEA9DXsWDAizpZn",
  "key12": "2KkYgaKoE5XUQ5AP4vWtT3Vkk4bUgMEKCR24Z4uTP3oWQtMKivGLgoLJoN9cGWCAaEG6zRXwnuJ5RSBWBPuk93PB",
  "key13": "3UfEp6CHmoq3n66wGLkiEAubgKbTLeHk9F1a3K7wnqAvWca2YcwZWzsDM2tFobzhKCoYx3Su8QCURpr1yuUqgT8M",
  "key14": "3xtrcWTDor39FLSkNVcuZzME9P2UfxMbsSPiHgfVfHeKU5UbVE2nRF35bXVXtbydq13twrPc3ZMwwHfCFKXjGxSJ",
  "key15": "i4e2pJ8fWwFZPiENWRfN3WGJZZ9Uhg88ada2nd82ygFfPMqeg6QybEvVuXgP3WW1TpUkNtCPfpJXSW92wV7cPd9",
  "key16": "2ndzUXSCsJBaC2ygo8yvfVuc9Leu7LuwvpFjcdB3w6edbvLaBJVAwbLRk3FEKH11H9rj2Vx79mL5J7fpmac2Myoj",
  "key17": "3c3S2eWX29JGepniGSrZaWfzhPQ4or4bShm4eSFsEjgDrmZkiZYZ5SQizQSXiJKSwMUXzqQ7zgsNC7YmmQJPqvDC",
  "key18": "3QDNfLa9BTuBoWbC8QyiKA3uu8aJhL8VKhKEjFAELm4aaPcn5PTiHPQi2CcaDpxehq6bcaEkmFBj4HaLkcx6Jk1p",
  "key19": "5JCBS9oet3CKhcAVQ4ZVDWzCUUohcbjbQcGRbQnB4MHiHYfLsh7NDhNV4DA7x1hUnv3vwr59xy98nSwrwEzwFp7m",
  "key20": "UBtDEhd6eW6Xm9cXBWkn37xJYT4qF1UPnbAiP5dFZY3LAh19nh1UJG3924X7sveSo7wN9G28weXW195YamNdhS5",
  "key21": "4PraSWMRwJTTvvizf5z4UEs1J384PtAZTL5Ti15RFyhm6juqT7SSEEQKRQfXDJed12g26Y25bj27KpmMA9gt5t87",
  "key22": "5RwcxxiSC2Vx4pqnLq5dFW8UbnFqcz6SYzF51rmhYTgKitgkc2YttWsGdqkLwXtxp1w1ZDYFtF157FAVMorNfype",
  "key23": "5mYLcxf6DC7wTkFZaCfLXQ6UQjbDRyxoxXNa1fRdCVyUpR8SJJwyks9axJi8V8bUc23imELsGn6ewgNqqZQfFELf",
  "key24": "5hW5YHgAD49EwWEoaW9dBESvT6HyZ89yyHwYj6AWoaWNfTY94iGQyseQRskjNBVDmuagWhSZ4LFCBc133JP83LVa",
  "key25": "jyoz8qvBKFBTVbBMYFhxUWqZCiHW3itAyDRcnDoRe6QXTad15KH3pQv7TvmFYn7uWauQinYm9JAfmE9Qgw57SKL",
  "key26": "toUbGWHsjyp6XxgRnqVkyts3wVaicchBxyzdV8i3cCYZjWcmh1EtMboBZDWX3mtwuynKZD9JaNdWPBkw74skFpV",
  "key27": "26ntWQ4F6ya2QLBYG2BJUH9wcB5sqb7CzJ6fKkLYUtU6PjQAhFpd4BJjPfgMcrSQrimWZgWvX8VySddwGAswQXhG",
  "key28": "2gQR3kfPnjcp3Jn2EoR4JUULPSXuX8ujQxCtQMKzZyZ3ZCYkKqE6jACCFGXcqvYkJbbYZuw4X8NvrKskfYEPniUD"
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
