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
    "3Sj7eUXcTTELKhHZ5dQ7N6qS3MTkgv5TKzzA6Wkbv3GbPAx2SMFnZk4VUsF1QWHoyhTdzEY51HWshwrjzCNqR1Y9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TuVep114BouRsESyTNkFb9qVLCB1i9cFRfNvRStxVBPR449YYxFBbLMPptfMU5xaQXd9vMy6NmtPDfZ7H8dLSY",
  "key1": "xTr1tqPeojVviwvXGbLDNt5dQZtepcVyeifG2RVgPT8gZRh3kEMMWmaNjB4xu6rc2cdkFuiRV2q7ovSy3fK13o9",
  "key2": "3rsnyDd9dUdh7tNFvS7AFF68qD39K9rbP9DCUYV8Hu6zjAjKBsZ7TuxXMvEALaLAed4ZeiDgLuXqXXkJ6Z1Z7PzN",
  "key3": "5Zdmuh6QWwFUQQRY9YSZuHroyv4heYZzAewp7EfkBx9VureXzHau2bbQenQpufjW7D2veTQPiTWFT8uEDLjhotpV",
  "key4": "57s6m7mhzbHLfAvGLpnD2hVqXPLeV6MqVostRAxdAWS1CwHBGjhaxwhUVBheMbkVccUYADVxhse3arsXGaDCnriH",
  "key5": "5ppD3JUXeH4AUZRMehohw1JWXGgoXcyWcEmHADPSvmjcPZwzyS2WP5NpfmW9v6eKThriTHbE2Q3W8sz4w67QuEp5",
  "key6": "kCEnxvYdUSBVdsj755K6Wgtw4SSU44taeUPp2Fr29aLAVDxS3Ninz72sMbDQsoL6xkKjtHY5nXfFjUgDriRXej2",
  "key7": "4qgE8mKrvsd6FMVGMMZNkZ3EnzA3rTJQgLcS9Kus9gRFvvdxrDqBJcsaub622pzHyfPxjijCk4m5A2YYs5rs7h7X",
  "key8": "25NQXfeXS52DwixhoZqsA2thqXAoysbtEWNKRQnQdJeAN7QeHFC7eXEwprb8KBG9LtLDABFz1YtnAUrxoMnNtcN4",
  "key9": "esYMyoMy2vgKYLnWX9GcAdRhYkPYgySg1m1HEZdCvnXLVxHDEXmafkMrqhyRFzhV2XiVhtggebHtxpeohpv6a5F",
  "key10": "ytno3bqM9jvNHnnMnc2WHBtX4VgXYT3qa42gQ7avf4uxm944s1w3f4tLoXVCAMVWgU4aGJVtiBrBoGhhWd5T8iT",
  "key11": "5VvcEYQ3nSmxPHdDrPQfaaamYu7um6J2x6G9v2mk3DPuvUGhhQnmheiwVU8BCkfcaqRhLEds2k816KsUapcudaF4",
  "key12": "5cMJhbVwXWYXrwrWYLttS6MJd7HiATA9H2ejCs3tNnyLCrDDWx2ddvQE4cPDCcVbtERKZGTq6sudvRnjpMF5p2x",
  "key13": "2BxEY7nSr9LfX8H3BUWmdLD1Aixc5oHqEAZkB6VbypQh5dmByKM7DziwFPrmuvsWBBznjDvVgue3BNhxvyeZB6E5",
  "key14": "4KgwFPen4CD4c8g2A27ZT43UNkytv5wUNbSEtTUSbQZqwYCnGH4PNaBvKfk6Trar8ooDMDo8RUTt382H53o6vPoq",
  "key15": "28QcEgeNwKweWXy84dcunrBp25p6cB3yBMDf3Z4eNQaYzJDXjX83mh6iWhEJPp3oawFQxcMJDXDuxhji1t57DasB",
  "key16": "27HdqeaZX7h8guEntWsJuYCsBCA4PkkFMWH7YMjkFxTqvcE5kypDxJUGB2BcqW7EzpurBoZrgbWuCf7ZqZTG9YBM",
  "key17": "422QRhYeXNuzmCT5atK24DESQVuAJUvFCubvujPb1a2Ljr5otMUvRbacEFJqnkSQy18WGmUzPXK86LBrNrhJFiPM",
  "key18": "5dgXzEHR165S1chFM6gwe2nJi6mw2yHBt6KHYYK6RGWVVqCo5Vk3iY1BhSLvzHKJZ38hR9tpvRKrJkxSH8fyfWTZ",
  "key19": "63kofWhyWTMBdLiKYrFoaGyz9zSmFNt3HGbArVPLE5cRVJn5DmQQVMEDCWLwBLiaCenDbdJvJYRBrsMKBrgMiANz",
  "key20": "2YzhdR9jXYV85FPdszmygT9amefXhZrikt6AahpPjcosMVWdTAvFRhhyKbys2nuNWefDhM2JQczfoHE69zJwVh7A",
  "key21": "iiP6AdSBf4pCycsnmS6QPziAAc7BnzjPzdsdXnV7JEHbRzEQ7iT3cYPz3u3ak4QH2zw17YTjtbbnJXNAhQFpzGj",
  "key22": "o5fk1xDo7Kai2DiqZmf9obaACCyiuiK1kjv2F7FBseTb717jS3Pr6pirahAKQj7EMghYFCtnXiwzXDuy1gNQfqJ",
  "key23": "4bDhdPo8KiTBJYaKWvNegw6pb89hLbRm1ikbT35MGWheuEKbjjSmHfNJXddabVH8dDneMWjtF9mqSrdD1qLnWhEG",
  "key24": "sANFemLTJ1ezD4FLdiRk9WxBEdrjQVn5DNrkj8QSS5VVWE8VrupKjEuPUAN9YP9vKDkXXDhmm24BbxcaU6B3HMd",
  "key25": "2cG1tqB3otU2cWy3cJsNAQm9tRdusqBwiDQykjkEFJ4DVNM7FBWLbcpKsCiZectHP31ecUR73cHTv3XjRPZ2s8ef"
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
