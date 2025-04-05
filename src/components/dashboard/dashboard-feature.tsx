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
    "28uDhZerLxZMCTdwnU2srWWdps7Q6Cmr3C3gbD7Lzfo1fpas8wD3XibTnwJ8aUUTfqDuKd7WwMGgev3ZK6menYGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EGV8kydx2L7H9B71zvv5cEkqaYMkny62SDCCmvfKKBQziNC6keF8rAbkpcLrJrpcRK177M3H6WQY3aZSBY5Wt4B",
  "key1": "5GbjDm5rmnwoKeNYoB6Qz7md79f124cH6RYcgEBW9xfY8ktfjcLV8B7yxZXoWAra9T5vwEirKzBWFcEXXZ15CwFK",
  "key2": "nh5L8XyjShvJ2bFhAjb5dhLS8QVRRA4wbTBWFxq4eUMq5v49j2YvFouTGcNQLotmHaCDUotzWCAMdV4Lr6A4sai",
  "key3": "3fYkDJ9Ki9tfQdYbAvojcVpRuCLdS1m5s1s592NZCmMhxd5j6eKymfoZuiGtZVF49NVQyJAGt1iTrBfKqmZDccUA",
  "key4": "3DRVjQEbR7bxBXdhRDsvKmn8TAWfNkdjAaSzMdKpUZk6eXNMfaGsDrPGaCBwxj2FjqLnB2dQKFtQo5JtnBnby48",
  "key5": "4frG7vaD8jng8bJwFqaPjij4h6XBA5v7CxZDY9eRhyhnc1b8tuTMHEiv9DkNTQKyMsKBa19xThfUURUcxmcZynoT",
  "key6": "436K4qabdw5NTyDVEz6itFECTko8tgPkKDBKBoWWC7y9vLabUM4qyFo27KbCZ5P9fXYzgFNzKcusRKnXdaJV79Av",
  "key7": "27jHq3wwc5Ecex3hKXmitvqezQr3sruGFP9CKqxs9Gj9Zc8QEQT2nHVYJs18oJYFCXe27YSNKQBXKWYhgiiLhnkd",
  "key8": "3R12LB77cA9WY7q5hWM17yB2P6uVvXV6jWS3a1AR4KyCUxwDwUVWuCLLDYdywoVVyWaXMb9aooWYHMAWVg25pLnQ",
  "key9": "4xT5PqvYFxm9b1RpdBtAiauWorQdinrjLqavB3tFp8uGBbaBMpK9GF3aswLjuiBtdro7U2bDmGqzWMJX1QpVWYVX",
  "key10": "559cFYyVcdZiCf9MbJDY1PaEkRziU4MANQbk399Q3YknvSWG4iGRDATNU8djeV4za72Hq4frE9arK7g3M4uBwmev",
  "key11": "z8vwhK2r325tWFzq9QbjT2MSjn5yR9ytT3LvH3ntwExZK85FXgFXzgxF5kDU5E2Ex7Sn3drgpbXGDVSN3cS4kSu",
  "key12": "4638U98cuCoB6qPtwaK4ZSCfBbUeYqVwEvkxi8po6SRRft9brNYzPz9xDc7qqKBYZ6edYtB17EXEN1JPb7j8UpyL",
  "key13": "2mYauoN5JS8gPxMU7a27WQrzntbDJsnDxhKJkRXFST3by4FrU7qNPhchTFv2sjzzPY3tv8QrfUUprCZnXsmMAbsR",
  "key14": "2NbnLrY68xwL5rXdBqwiv2xPzLySCZrk5iyCGN9EVTk8pYB3JHH4Xd2FS6VwZrUCZKx9Uu3VsvGE8vwCrnAvoTFc",
  "key15": "4xEU7y9im6T2gm5rwJuGKccrSpNzfMsiwFDEN4vHudJARGqDqnHHTcu5nwwqMvP6gUCnoyutCFHBaKV4dEyfn4b",
  "key16": "2EFCzi39w7hbpFz9GJxrn8te5ZWrx5BV9SXTjumZuposQQT2v6RtQSMiYBwwmKvNRuNQnMNgstMUM7zSBR9ZmSb9",
  "key17": "5aasEJDh8oovAQbfYKa9X47srEjqyeKksjd5QqKPywYzS27svAa4jq5UeLgGbZbR9zpexU3Ah2EWR8iNLnABXbxB",
  "key18": "2WoHKQ3rYwmwikgkSgw7QhduyrDzR1td8BZ1Eeuw52DaXpCAZfyZfhDmSHEFiTd6BMJAa3x1Qxws4wGRVV2Kr1yS",
  "key19": "3fF1KVWUf7azX7yp3iuRRaQxif9AYB6dgKn3gGA9uZq2xdWYRnXJbSP1CF9RXuUMcXNqDSRSTJtYYic9HXCjk3cq",
  "key20": "2daX3B7Qkt9oa4KQzXDbJST4DcJAKJjAuahBnGNVzsDrU62KhLsEgz2PbrRptfKHgL8iEZM1pQse81kQgyBB1Axx",
  "key21": "2hFDbqmXSq8gNnGBv9SV41eFzT8maYfHsDv99obPm4bzCiyFjWQjaSW2Lfcdvj557PfQhe18wKm6KHB9nkFzSFXL",
  "key22": "3o4Z6YDBCFr3Qpi2fRYmj4eYatEVhkkifPZJwRjcMZuvj1pQcjHJ1u8bqqFFUnVPtg2ybcs5eVySvQsXHAz6nQmv",
  "key23": "3CryimeHbSUfWZShy3zBzCL5zqY2rkVQ6xA2NgQcfBQ8pm827QXs26o9DXVAT5EHu6YqoqNxterc8AcjvW9SEHm8",
  "key24": "3HBEHPJpmJHwYnmA51AQ9vbHHLrQR8M3k73zHxBBJewdUZgTws3y9SKVQgspEhz4rcqfTvkvt2NDpmCtDBNC3Rap",
  "key25": "66k8VsTkdexLYs7feZA1ThbYdY4yAXLipdFqewdVGMbfrJh6AqCJUHrveGpuKVnVT8KAkwYhikuVR9K2kPaZQzg9"
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
