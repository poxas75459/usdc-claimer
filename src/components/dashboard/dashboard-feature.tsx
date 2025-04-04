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
    "BcsiNAxk1En3u8236iHCJ5RSP1fFhTZaqHbu7sssgTjbbnqARZaLYK6huWUK1rAjM7aFgQHfy8WdJQKmLKc16PM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yizwZBSy88Canc5N53zcx6NSf7RhWjM2pZkkirkEooTjwbgQ6qqXVhyKEhtMz2h8m7ZMFEjXzvzuPWvK88UNvrt",
  "key1": "4t2Uintw1bGrNXTU5MhSN7BRKwasGkBBTkuGbwkgSkJNZEPoPTpqwn4AQrUCJ65nksk67RLbsDP8ZPq4LRJSWYrE",
  "key2": "nZaiJx4ezr2JoCqZ34MiUM9ZXzQ19kKSmf6pXY1wZEN6fKwheaSa13NQNtRJMgDC8yvURp9QpTDnXCn6Ffz2K79",
  "key3": "5hmLgvbNLgh1xBrrVdi1cifxEsWAKveNToRQGABTsJhBAbuDpHVV8WtTN1K7Dc3WaN4RJFcE43eULt8zvkc3kTzM",
  "key4": "2j49rDQMQdFqHzoKTnRiRLH81TRrj2GNgi8Bfo7kBSSKq919vCrCm1Fhm4X6kVYYGUoaoBitT9TgEJ3FuVD6MUZ6",
  "key5": "4smxC3JXwKm7B8UCNWYjYz83TSxdrTfWThaSSgbu6bxi24DdoYTYaSGMvpptktqK7S4QBkNYRxmzonMf8njHCKgs",
  "key6": "3Va8uBYDrHSUSCSok1M4C761ZqtYySzMAMRsaCxfmdJF7iGFSnfx2ZEM2tgwBi1F4XqtfszsoFPKMACsyGBV7j96",
  "key7": "4eGUHDYKaZeA6AuSAAJgPm5CPAKxYASbdw8BjwYr6bkRc9KDCKxmUx7L5ziaVBeaeEnBdDpCoogXf8k3swP3xSKR",
  "key8": "4JJsia1rNL5zecTB2PQA38cU6FxdCnES61CwoYKM7MmACXJX1svBPbShjV4bYcTvj3CWAER3q6TTsvkaVxQhyRTV",
  "key9": "5wPstcshw7weKfHswLTVeQqvpejMSS9hcNpYssmVeWiUMmdrdJu9YuY87bTZYCybaieQr17c6BJe7chiqZ1dBRjZ",
  "key10": "2JbU1kgP95vXRwx2YpHAa7t9PAdw2gKkrS9pQniDqTbYAjgK9m4eH1qUY17SrmCHMyazdvakk1Sa92MLz6MF7es4",
  "key11": "4bUnnDEa2UkP6Md28KLE3UZzXEyH7CMVB2Wr4iZH4CKpqp1vNehZTbmzedfvaZGert41oP17bdzTwoFpAsWV8tMz",
  "key12": "5qRYZogu9d6oDMDS4j312qyAdA5J8Vx4zVD8Ng2se28UD7uDZ3wjL8sh2EMKx8pmG8Z14Kw6pXSN1AFt4vnW2CQc",
  "key13": "qrdyvfWpQ1yXkhdXhFiWDNeBjjdaLGeXqt7qENNEcfdquivyrF5DvjxPqPc5zwKpSaf67LRCQrNi4T4ZGXWm9L8",
  "key14": "5a8N95s6pyqL2GV5u9HD6dZzA9WePxneKeSPwBm5DdFTJBN9q3hjq3izEM719pCR6F9kc2VBX1e7dKWWX4JQ5RAX",
  "key15": "28XHvXcyhmwNxBxy7R2YjMnaSBhfr7TFvEUPzd8iVyN9Jg3Rf7YSMi7dcuLNGSHsHEV5X7yZViJHtSNS6TLYpzor",
  "key16": "664t2ZTboD23CYaw22CVzGfncPiFCCP3FaC7foKYVEENnLgd2eDPDhaLLr8uGiMALZuNMe2SUFTJZ2KCy9jyh4wA",
  "key17": "56A9bw9gHsKd4PYKyDDcfkbjedwD29LvgV3Gem51rw2zKUoY4JSt9eWwmJEVcQKXW9Pu3pVdiSbX9uoeYYWL5wP8",
  "key18": "4CS4R7hXhswqqTSFKhyKk76BDNiRHb89LWxn9FNatKBQqAg5XQSQgapC7brgr5oEK5nVnw83Cc1wF6SuBkznkLmV",
  "key19": "3BqjbdcY9MocQo7bT3redSPsWJbgUjw97KoLhYhaDPkZucFJWqw7ca6iPYZeFh42QYS9SQFyUvGVYowPSf58ZSPK",
  "key20": "5P7TG38eSWchF3LNHMVGa7Dh9JUkBZFjJgxmAQV8GSaq5zerPBZSRAJ6PB6YQQ7to9DqyEG5qHEmxazzeeX6cJnv",
  "key21": "4XRVpnT6P2z6JKMxhqypTQNfJKR2xwQcj9keNs9s5LinXqgD1uGXHiduZ9pnAdxuosWf9BZsGDmyKtCLHiwoYvNp",
  "key22": "zZxHf5R6zxG985pMAVsGmaEsNzx1To9BzuJxtAHxwGSZDELRKmeWyi7WmHN1gM8goTR6XJ58SA87H5Lt22KKGVS",
  "key23": "44y1ZQ4NzMALyrFJ3VAHqUpEZiEnfnR3BzdLXRvBWXn5x3EuGDURFA2oX8JNLY71oyhwsYSC6YwU5ij7PMHbDjru",
  "key24": "5QuPqd5XShULSj8KGqTfBdRELKTFpSXYfdLuZdrGCTKQCpV6J8Php9uKsoPKsUL2vJ57F9s4LVHw3BKvbvZGBdg9",
  "key25": "29B1tqrP1QgvnuwWMxJz7AkH9yCE3H3NSDPmNXVqqQzqRH4di7cdAWzQmG8ikGP6wkySW5rs1swhYqDk2LhxVAsh",
  "key26": "4zKMG7k5bmDN61iSaQHKvKDkhADtS52q4XamFCqK8Bpz8q4RnMiVqzXE6hz9piEV7mL3FakEhLFw1s7ywgdDodG8",
  "key27": "WRTokenT8PfRPHwCacMMtfkWnG1AyRGmtM6M3jHux3FS4mc9fdQ6rTBsRU8YHfjii4FuNJv2pjMChYfo3p9scmc"
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
