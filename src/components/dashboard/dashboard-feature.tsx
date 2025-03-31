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
    "93edZU5X6mcznMcxHXTvLJ5feoCPTjjYbUCoPtELC2SHzS2Pe3yJ98vf3J9g8tFAjjvrynxJ5ttyknUrnZWexxE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "575isrPsZyYu2CCVF6J8pYmwkJeQs2xSv1u4weW7EDnKzkQLfr77H7d3oJ5h1YJdsvkZjrZZy5b4snhZMnZM66Rw",
  "key1": "2JH99oGvkbVd9Dsk7MMDbjGU3wvsDRWH7nqoQfQFWC8acxid1KW6UaW1DJfy1hh1jMjE9hGcLACXaAm4r8zjKwkG",
  "key2": "4odhSFSmLFggVFzSBNwBfEAXgehgdvZG2fa1zhsBenHRSJ3ubKECaDHix7Yr2sgudQFAhJcMuyQ3xPvgMfJ1Gkcb",
  "key3": "3QqzZg3FvGf3whGY6owyfJbdLsKSD1poKCcqGeeTDFneqxTxvUAmTSkw3ty8wc5XzRZ2UJVAqzmFnmS1UVmeQJZQ",
  "key4": "4yr4gNkPiXUV6pooHwXGbjXJzvUo47nrVgotjtiDZxPwsrCeMx67rVxpAKGxrHuoVDTs3p3ANz56Bi8W4XTj1137",
  "key5": "49gSfEPHjkmHk7bsLYzcdm9GtifFB84eCtGEBUX7FynAE9Yseq3is9GebZE9shJwd9edTFBP3NAjMEWsBCSJrZcm",
  "key6": "4SwP2G2ZrCncBxDLMZV3mzQoUnB8Db8qytc9cpAkKrJRs6Sto36ASS9PR9VtFMgPuxuxTak2f2zMUCDW2fRtbXjR",
  "key7": "3L8SrHDBJ1yNHZdbByGdBHwMDa9C4akqk6hbiDw2836ijBDrwHAhSqHmTKtWmrajYW9548epjg2RcCB9hjLWc9jf",
  "key8": "F44MULdrnnPbdTyKdpHJaAkYvRA6V5D7NoLiUHE7w1iLDpKdF3gKkxL2Spn2UMSjGkMgtRy1gB64wVUbtvak7zx",
  "key9": "3wTXtpUU8rjjRK6zidJFd2RjMwXh1hnkeK5dUv69DbukSny5q8bfMWGRvmJCEX9QJrbNz4esCNr9RNRTK1RBQjfd",
  "key10": "48HLDEhejwDZDmrtwq6sQsavyqbENv4Dfd9LwKT8VCBUBpwRdxu6UxBNZh4zyVkHbdCxN9EKomYe5VrADVaF3kok",
  "key11": "LyBT6T4DiL86pxNjW8UWUtCz9GSm8wfR97arWvWv3ckF6FmdhDBe8H5hFCpJ2Bxnu2gqXJgDdMefxvzmRMP7j5i",
  "key12": "2onvqeMnRMzZsGAWhi8psUkDg74w9rSraQEWcpQiuvCNyHf2E8zgZTMu4W837syuGcJNpEebi1aiHHgFReTFNtmx",
  "key13": "2Aqm8qkv9B7jGkdtHAEsbzQeqkNiXH8BW13zZG8ntbm8RrtRryvX1Cn4XBHGvoVYty5zhA2jSfKgh4h62dTj1Wzr",
  "key14": "2s4g7hbs9E7StruYNRoUsnAaqqGV5CMhuDBwxuM4MZMRTNsjzyfKrUSTb2moEzkV9YRrVNA74AhBhme771BGnZVn",
  "key15": "5Eb1vRq5GiTW3d8bfyBBBArpHma9w97r49zwLMPnqXS9bRvdjQSF39RUHh4XxSYYKaL1awgYrXaGZQQvh8hPancx",
  "key16": "2wkkTBgJFyLqjiPKuiWiECLzmfAVxeVr187PQJGkCXqZhHXDaUzWj416eVS6EXFxCM3akSkDyqmkDvyD2HKiqZwP",
  "key17": "38ijxG1n8giQXsD3bQ3JkF4f4Ljv5wmxDNzxkmyvkfXyuXzetNMUtsgNXMZeppW3XzN7rX3P4TtC7jEEeZk89JD9",
  "key18": "2xxGZGBYPBrA41iLpgVX6PL3Lg5Pzi57GFwCDjJdMznA5Hn115AQ8ntRKyPduvTVn884p89YPgZ9JUzV2kUMCfHc",
  "key19": "gZo337kxgnhHLMRttPQccXJMKAyKagWu2wcEP4baK2QhvYLzvL6sKD85naRWxSQw4o1ATBGpNXpmRGX8o7QVjHU",
  "key20": "JFL7uDKBu51sMAaG2qMagjBv59RWhcCbxzmT8Gr9r2RjqcD8QfNzJVByoijGQCGtvuFq9SGNsfovigDtSDh6T8n",
  "key21": "5Amo2oogL636YTUNGipTqY4vsxHmtDtJQbbPSDLPZ4AJAg6k49fyRUjPHGvxV3QNpy1jxzyJrYLPFMYmcec3cFSy",
  "key22": "3K5hmJywken3dYJNXDgzj69DsurBJ9MMygmU6GcgbmZBmhoy4biQEe4Vv9jKqwkCBXjwfwVnYLZD2yEaSLSSdoGw",
  "key23": "ZhpD4ZzqRMCjubsWkK7NfBXydTpPYtiEVAMGKbrgnwDraVN7ik5xE8yFQzTU7xhXbSNbSx4QCksEgJCKZzLbNJd",
  "key24": "oEthTzgUfPhk6bTE4GQMo4GHiKNzc8tD2nbK1hcQEMStVtJcc6RtGpt2oDSxZBsm4RmUqYUFC2nC4gtPywab4vR",
  "key25": "2SLNuVqsPdcsdkUcT8b7YgR1qkfhJXk3f62sa42ARn7ML6b1oh4S4qUvzHZ2HgNBUKJpTGArV9A5uz2hV1UCqt1x"
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
