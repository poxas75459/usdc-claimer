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
    "E1cE3dHMJa8YVpGyu3GByGuXfX1iqx7LTuEPncy2yrYt66xkUQGxFWnf8DGstRw8eK45GjGTbG7CGRLCVMTnkAc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZFDyLjQnKtajPjoPXsCGm9q9VcafdRrPiY9NjJyCBsKcK9gsbsatCubmAH1j2MbUqKq6HSokqbw5277uTWKTUfN",
  "key1": "4e6AVsisrfK8R3spBcN8aeX9RejMKFFKfncPCBaFL3nJuHpznqQbf2w14872Y5DoQkdF2gqbjmWhDC9SrKwMWQNs",
  "key2": "5HvbhWNNL1AzNt1ozUHfS3vE7BVq98xjxFWfovSLsx2mMUdFbdqKi39WiTYVSFDWtDPQWzfDbt4dDJ5HSYNMKfqU",
  "key3": "5izroPmbiMymvKL8LwnzCTFAZLANgACiFpBRyn5qSXy77XAzXQ2BYj3Q9e5tsAjvZQ3q2B26RTk9sGPfRitin2SH",
  "key4": "4ndKiZeUzCtEnqaSytZyYCAgcabHpX28SnwoXbph138wNi2tRV8KWYgYHpyPgRqLkWNJpjULQsSHSYCK9nqkhcM5",
  "key5": "2QKR7PVAseTytWxJHaB2EY6aih6rwynnYyQZkUaqdVkRtBWjvrCyvxNr56RH93WmS8fG93oGPSpFN6LaiRNVmtdu",
  "key6": "2BYDNKp3jhevaP5PoNb9Bd1bDdPTm1uQhMJxwYhZWpz9W8ikaTmMUjwyc4QQwN11Sw4j9Lx7pQeohu37Dp64JJqg",
  "key7": "5vdgTyb9U9ghrA5UyJoPAN22JW6zVcYraPj3UDjvJLCHdT7z6vmeTDnxry497w3biNj1CN8q7MyyKEhDFFDyvfCF",
  "key8": "2UrNGg52VB1W2wCWbo5RXWLfZxA6zF2EFzr7QqbkU89TY5rBLtDefhCuzxCCfTTm6st8Q7o7zebtvMbkYcz7GaNh",
  "key9": "Rkv9H9qv8UaXkdbAyAW37ypPnkjU7KKgfj1ncZvd6cMu5ZxEc1mpdubUSN8qHSiEyHoALmTM476UA5wyt7EX82W",
  "key10": "24ujLvETxNDJyA61kFKWw3oEbTnbrbHJaz7NC5zfgPXU93xbrwa2ST6D61ZPiqawZQfUFrxys9Tvzsrnbc4MCpCm",
  "key11": "52o4qoNKPERZqytLLyccZsd6uMupUAhTvQ1xyu7eSrGjTpodpBWmoZu2wjxNLPQ2PcF95xPDoyaqddanz72HHb9K",
  "key12": "3SYqkRZJp6oWTTWarhPwrL22PXvY7qkkExVd8QxfPERkoqZ8qV3iRM6j64QtxkwrR2NjKWrBvwKxhgUmwQ6QJ2qG",
  "key13": "3AZsYYyMxhiyYyKHLnv5cMrspADMPCX97e1vb47ZUQRXKBTyCJAYNdyH2katewb2rtGcixDC7NpDVv8FtsMW1CH3",
  "key14": "4s2BHjFxruaoBhtSYGs95n12mEfkjodrhzN5aQr1uYjW1h66adFYR4SvXnqqo7xVYkEszgoTtY8b9vS2PnesnqQq",
  "key15": "5icysGMdBej9S12dPM1EEb2p5UpdHvJsfE1TFKcLUokLc7436UsrhzZpAoKAvrsvkKe49ucwAuEWWp2cjM7AsZV1",
  "key16": "WA7rtpTDWxXYXhDF1cKCHnyX2Et3hd9sGQpA22ih6C1R7gonvPWkTWJX6aUMhdcnvco2opEzKuhPJKvxJvQq8J6",
  "key17": "5ir9vVAGrLTfAxHkpdrhTZMuc52wzNgYaGHBAA4qKgFywn82CfbkPysGseDvdbW39VL4djHBqHVCbU9hJo9VQc9",
  "key18": "5hLUXRgd2PTbXcLUB3Wx6fUZQayB57AyEwSHmCuAMmzcirhYntaPqWgbBPAKKXe5Sseojfh8e2SvPWwXD7MTM7jk",
  "key19": "2qqTTZSt9KFjeXbmmbaysxPDRDvoU298obRVcwNfGaZVd8rhAHM4h6w1WcSBE6TVxK3BsBRP69fGVWrzdiTe753h",
  "key20": "aVV7ypPEPvUQZzpahRQo4sP2uU21GXNCKVCiY8jUL2mEoEFpYqpJ5AXYygubQTeXkYhLktqaxu3oJPzHNp1Lrov",
  "key21": "2FwCAUveyYAGfAdFKECB4JWMeQbEXPWdpSbvXaeTwUtRW6vKGFxd1s2VzJa9HWiwaQbTjfXQEsjbXekk36g1RzoV",
  "key22": "57qH6zUvPZG84YEHBkSDpJuzaLKuHaGeQVLtRfY1fRbPnVqzBTTw5FAbyhuwStpLv5T2SUzRRhke7Lfs9W3VYDnL",
  "key23": "4niA9u6vE6vud24QGtCx1MqaqKgC26EUZEkozhbhQjhg3G9bZsPaED7iwNBXujb66DC4pVjktcR8PUK453dypRZY",
  "key24": "4ASKkkWRf2xBbBZHbWB3ZgJanEvRhujx4v9V6EX3BPo2xZZQGvWAW5vx4rHrudmmVkZhhESWrYt6uAXJPGVpbfkt",
  "key25": "66n5uh3o4Rs8RDC2cvnBNWDDKeKPrUBVGBm7ANMwNxc6YVrid7SGZSfZZyABQyXStWaBFSabvuYQMbzpThZFUhBe"
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
