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
    "4vr52AL5PFC83gT9W9hnZkcLzUhN7Lahy8DEtWHx13B23EPCxb3WygtipzPmBbu5SxRoemCRpg656NKcuhkAStvk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ysrStSNPVRakR27qjU3ZK59cjgxAJj1WXnFoSRMvVN76EVBwe6rnwnDsuhS6gDTb3PyaevtUeoJHN4aXvL5skhx",
  "key1": "7uNP2dkHvhfz5YabFv2cKC5csNgPP3SdcPRT8UwhxUReFxzRGx8w5xa2RxzLpfCqQKNrUo75EJdxr2XLQTmxpJK",
  "key2": "4ypr6hMSYb1N5DA9wYT6KVApUcnGJhBic2iswBu5TBtZDBFLyKvDLJaLHMqATBzZnDDCQYCiE3bdTMka6zs3tKZV",
  "key3": "58Pss1bTWwtqWb3iDiSxLWykG95iUSvKPg3vEFhEMEPjKZzJNtdbwsf3mixgq6ZqcRo9WTZZ9DJ1fq6stzirVXfB",
  "key4": "2zqHBWrwDyDcHJaBXzMpfDJU6fnvoLtJ4BexnP3HeS6ehJLRfyUVWxBeyJUvGTTN26EWJqm6NZD59v7zpHuy4XMy",
  "key5": "4VWxJokDs2k7hMjTohsfd1kwB1bW1HJV6mG1wv6k2fS7zgETC3ckDnTpGiBAvAKDa8k3ZdNmYicc2wVimmbtjNGt",
  "key6": "5dDMT2xXdFFu1Kg7Pn61rYQPJszEMU4pKA6n2Jjs5KhpRpWsMVP6jLjnmNCPAetA2f6mMyeD85n93qBirk6EUQAT",
  "key7": "3t3rsqKqVyfUD3m3FgY9Z9yboAv2sYLTMWcGctycqv8tn2mkQXtxwoRYF7ggffvAbTuwUFYXXVh6MGWTYxNgohWH",
  "key8": "3kJ2YbxY5WLuXczYXMKgLDTGbstNyG7Q1qj9emw7xsZ1mKoN7BsPj5mB6AcBQPDjC8yPEGGEgGtD2ChQeNdgtXcz",
  "key9": "5YuzCZdWXpi7RoCVTvSEiLKWvrT96ZUDZvpAEF1fxBjZ7m7dhFKKgp41h7Mmvbun6KZRvSSzjZevY7qSPLYpYQj3",
  "key10": "4a8f7wHfdzebSScDTJ3A3L1h1518SzUXFruFkBoT17dvP8sXRfMHQpDyZqqviTcNCmVLADDo7FiBRUDCBQeYN2Hx",
  "key11": "3NJR5XNGEFMAsPMSLCcNuiLAEwuGxSPToZcBpKmPcdAqCJ76Za4kHbZ3z8kJ6Aj7rbn37UW18k7toKZsLyFqauaG",
  "key12": "Q31TJwd5wnUyxCzoGpH9shiwfm7TwXSWnKQXkXZtfA1rYcKmj6J2374muozAVP3UfRXkLHqfoCjRjp5XkYo2pWS",
  "key13": "5y44Q1KVZjgQVwDNubt1twL15haiq2svyjP7kgdatXis5JVwNgRzmkU1JkTZ8TKq198qcztoWtL3h97vKoim48XF",
  "key14": "2N1VG8HFMyQ43Cka6HNoBZTsEfazwJmLQxpG77EnXuQUThxmGAdoGFoVMrKX8Jr3w3eq5CmN8GTBWbe4ryLFLAsD",
  "key15": "3CqkWJBnin6NxT2Snm15FLjXB6ZczwagJymFzmuVBV4cASvkiacswcjivuJXqXVuFehuAPV4cHWhBjuTRQPAMaqE",
  "key16": "56ceDZEU68DpdWkDFiJ4uDRiKb7XBfhc7nP6kmqXbodZUsqX3kddo9144N5HNPdQ2mfb1Z78gvrCy3RQwhUDdYp1",
  "key17": "3ASokziV8mJpGsy4NXcrK3M1TtXtJ4FBkDvj3otc1DWMsydjgavGEKNHJ9x2gvRN4MdBFNkEWRpQ9RacPCMGCvx1",
  "key18": "3kFpoKPJWEqk2AKYUMuwqnNGpudreHQNq42Nvfd7LADkZpDtk2Njxq3oDny7iuWEM27HF4P5TdF9JcDe1m1w2FT9",
  "key19": "qCP96odKgsTnrixBH9nS8r5YCGWMNtCm8ZF4g75L4sg8usLXec8MhirnVVzdduvPfbYETr1xJUgLfcfpyXZ2B2e",
  "key20": "4GzcQLLMScwEVxzr2mnm4T8NEASuiQKxRwJXhcMrN12JMUarzQ7UNa9u8C5tmhHkBET3yDtj5K9gbZ8Df4gcjhRQ",
  "key21": "QNXp2nCHdfCn1gDezhnR6LautdiJjmre4eVzj3FYsTKtPk9aVxmN5c7FDWhEXoEmwQNMFPdvL6j84PaZBXrfSAK",
  "key22": "2jj47kW1ZJyRn5sKS89iKaTjM91LCNsvM4zDkuRNUJEKYAngS26BuBVAPMrtm5BddpEim5E9dS48wggUGmFbfZrD",
  "key23": "5WTay44urBXWkDB8fRUcQVuknk1DUuhwQerxWXgzMYpDbpPRkbPfMajM17uqcVnjvNci8jJUyhKyQ48p6eCMENNN",
  "key24": "2Qc7NTLJ81PiCLKor5GRfdesVYXhyjbQQcoD9TaWLCWWt5wfiR2rK4VcNfiSTveSTkBgovSRqTcogKBpvhPjKfGJ",
  "key25": "5e7kdUgWw8hGaG2h5gUcLPGs6khFJdLxLLZ1ArTLvhQteKvdxma3b2P4KEfYYRt2FkU2powTnFccR1xBpwBtmncz",
  "key26": "fsoMY1GSnM7hKcud942SFBBagEhxE3PaQC9mF9NyGSj7SC7vGSnk1vF6o2GjUu3STRh5HYaKVUoYMjpUw6dhRfZ",
  "key27": "4dstEUAJDX5viDMh9nj8fcNrBQdMbxCZE2HBh2bAyXgak38TLxGQz5vZWRvtZYZSctaayWB2ovEdQC9c3qsSszLp",
  "key28": "218Eib6kPNUts5yM2cGW7z1AJRNzasa2zE3NegkqJBwDcWsGMwcZEgrDRWsZkdB22ixJEbgjidR1XQZ1FH2Gez6j",
  "key29": "5uLtUBdSftN6LTUbzJxhC46FqNHBZeFsNQpcb7TjQ8KRchqqwYH8APq6LAa3h9fqBb7joAKBhRe2SDKcggaxdokA",
  "key30": "oxT9hCDyvqnYLe2YsD1GGQg7VQUXofHySKWv7LBYN3Hwfhxxu1txWSfjQFMcQs9tU2hDZxDZqwCbfhTKxdoJR5o",
  "key31": "2bAHChcJU9K1zngkY6VNyqw4RRVBXaQmqAUz8CaiD9oQpSUMK6cn24N1TLzxNAjpxSgh2Wq9bZ3Cm6JcLBfNKTLK",
  "key32": "4RfGt3YBjgGAQwe89vWxcnyp19WZQGeUupDnJUegefUwg9pv16E7Gg6GRtbFGYqEnCahNejpvHo7BGRcFFU732pd",
  "key33": "5LqU8hGoWLH81JwuVFXDuadGhb9JYmF3crdDbMqvGoa4SjaGQ2YLqr9sgRKmhqAS3KceQpuyd3KPxMU1NY9rg5Jc"
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
