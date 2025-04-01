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
    "4i2L9PtWSFfJEbmfMrkAmD6qaq1WCDcfg5b2WEGUZnhZJ67RUH823wPmTxzVjFircxtogyCNW6GPAbKfDLvVKT79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vJQERQjX2QMtmnTweHm6Pt6tB5DiVfLKDx8hUh49AxGAV4SvJ2mMcQ6EbQU4rSy6eZSgzpHqmaTyHaeYXGR4tre",
  "key1": "5FDTzyVpFydGmzzqqeWa4aJ7NDGZoWoJ2giLLx4qNpzSQB6Gu26XdgvFUTFPXejpLHX6TgSXitWZosSfDy1LDbpa",
  "key2": "4hCnpKd7k2nmBbubV3E9AjfMBUpncz9hcfoxUXWZYWJnFBkiXMarcx1wvca88Th4KVkgjXJNXzDxzgBanRiwNxSb",
  "key3": "J6bJ4qF8jarFbzafvz1jz2KDTPHo6L5ESp4DSNA15NUPKHB7FFJcQDwqCK9whq6SnGo3f9sbtuJ8zUPhXLBeoGi",
  "key4": "5XSBmy7M4ZqF7fn6P98egNzGfFtcwWP6qWJVyVW8dMAM9DfceH2toyKf63uwL5BWjwuopfMDnURaFb9S9eJtTbr4",
  "key5": "5hAycArUrJt522LnpKz7cgZT454PuW7kRUNLyDYQw3vQUPtTsRPXbNA8rqHJWLzvkDPFuRoeKbLircenwdKToEhk",
  "key6": "3Dhe68RXRC9SNkRW1Hf4tPTRA3H9anCn5Rkf8itSoRAsRfH5Rxzb3hT7oVJ6AqG6ScefztAqGiS2abBTz9JxsEbq",
  "key7": "4WiuuTdYtt4vmUSpPttKdnAA7hNvymx2kf3We1Hja5764WWWUDx1ZCArwpDdcvM9JQf4z4hEff4QgfsLFduhZA4Z",
  "key8": "3xWiXrWDkwXAHpkezG3Vfm7RB4k7TaDB87UThp5RTeKvvVYbMZMkFF2Xvg6JtECRK54oCMjE1QwTVghGCvE4RLpb",
  "key9": "pmKvUaiYoWCSwbKZ4vbs6yraXSo5SRuMyJpXGrnUxf6tqtKSE1oAqhLk8T9cGwgJQ2KzDpsVNv7tCyZoBgMYDdD",
  "key10": "5ZrALknD95LB9vRexYLxCJxtNjvTx8D2JeNXNfrLmC6QG1ipXMd6Q2XmL1b5TFktZaBiUj3jXna2wZgCm3P3i9h",
  "key11": "3tVEXWvak9rWjsTWcdFPRDrkbtahQ2FpdLedNv4W6fZAArqkwjHywxMJRJWuEvVn4w1Q5cLAx5GzaHDURhn1AhNR",
  "key12": "2KUFrFSHFBAHQCdb4gCkSdXNSnkmUgvwK9C5WC7HSNBAT638vjiirtenzr7eGYzcKBNFZTSLMWbLwdGMoEhri8HF",
  "key13": "4iwPreJBsphCjW3SZ6NW65hBXMovP9tHTDrmiXYtMzJxwEzPd4RrYgz9jbbHUigyrBkpRfEaLsuxLTQUoFGx4Pwo",
  "key14": "Emn3s6RFn71865MZkqECfmiYnYtGtWNQbA45SbQo5mi7T4v9oVGkpj1HW7GAUoJVWndZBV3jss54vcqowzg9wBF",
  "key15": "4rWyot8HjLmdoUed2bwcSiRBELFcaVeBsyhaY2RJ7Mmhu4fm7hNBfh5grGT7pAHEv2W8zzKUNAxu98HJbBr55Lih",
  "key16": "3SZfsaTgXfXhGs83mzDbyw6do5yiVnXYUncrXQJATiDJcQGudCSkTBJT6jxN6PmLYshQDqaWszU7RVE4ATLosuz2",
  "key17": "5q9c8hsbvtGgDtjsFjsWYsipwW7PveRDH9JBiMaZ1CyrMCpxxgMYqhnqGWr8WUAZ7QcfNhe3qyFPYze6582YcdNa",
  "key18": "2LdgV3od9mRSZAJh7zeZzEyEFL5xNUMVa6ZZpabyfkUwZBsjTjxomqpdsJ7JP5tHX6Nmi2bmPtMJNXMqzS8Uh4uS",
  "key19": "mcVYSK4WJwbwfHT8znPG94pHN5CgC8WeoUF16aaPyr4G4yEAgcUbEjbjbJ7CRzvjXoZ1ArfA4k93UjJ8Bb1FNuE",
  "key20": "24eXP7UjBoBTzr7L4D4S2tyb5AH6zsYNb2WQ87ZRRnyBESewAJGD9NZpk8wwfJtbnRVghdmdV8T6tpMUSpPTfzwK",
  "key21": "4jT8PSZ1znVfj5tsNgGL3ju3NgGCdiHHsAnJnr5tsCn3KVVqT12M48heziNAPkkAPntiYbswmNJaNhjpdi7kYowf",
  "key22": "2twSXESTkwjCSbKrnsTC6E9PzxFhcFGs2oYFsSAvhAE9qbBvUzpPe5jQbKzZabzayrGqpqW6xJwYfSqHQ8C3UYcP",
  "key23": "3onf3yKZpSX8ba1Vxv6nTCHZeZa2K34bUTNbTriW1FpEepPAqd8RAsUPLieUKkHtatW64eT4M6PXUY2PGaYfqBgn",
  "key24": "3d2MsaKPwsafX2Uh5U41NyQLQd5SMmfeqnzB85PinC5416T5x9kdPHM3Dwia3NBQQdyakzbsgHMT4k2uJ6m7CpXD",
  "key25": "253TdKx73URaWw5JvLWjC2rkDKvz6qdVfUZ1tZg5najs9N7FziT694LvfemKN1iEfFDdtz9TwLod87SuK5ip86nj",
  "key26": "4HHGz4GkFb9gERRczqrB6URZGCvLLaPJsnknjPXghWdezkTRHFPnUPtY2StU4GCYQcQ7ukG9oH6DSHy9RHrKpkjJ"
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
