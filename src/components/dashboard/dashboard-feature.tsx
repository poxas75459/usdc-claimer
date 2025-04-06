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
    "4vFwKYAFJPog1pfodjtP1tYzbyueiuV9pwviyrfTgujSBT4SYiNRoecVxNiZBD3fPZf8K1S6MHAR8VhvAsztCTis"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YPGWrQHNVfxWMEwPnBEnSgchJ8Nrv7G6Fjoz9s9QakSfgzRUvzcTq1WzSTBLkDkRQoBbYnFKPNW9LaHXy6cyKLd",
  "key1": "5bb4Jxcw4uMoV7m7D9ZokP9uiyof4ibKwYkbajw8Wco1RkuDKcr24oqoGZ4UGyDfSCFmthTHBCvQYSDXuHg6p17s",
  "key2": "5cXFHYUiYMuyR295XG77jKd7RhwZRbmALCm8G8UaaUhbwbMMFFpWPYL6d9GCGWsL7EAGLxYuqT5wtDVHExBFofoo",
  "key3": "63N72XQpTnc2AaeiqDowYYRKiQ1LJtfX8jwKnDa3aZzKDc2suPSUvDfz1xnkPrxeGtbFatqH3ymRFCYZijuU4aF8",
  "key4": "3scr2nYwkbMVyJaTj9GpGhE669WTQcWsSXbrU17nFCnW38RfjqMKA4Xga8kpB8ndYuvybVmyzNqu5HChZHjvEtKM",
  "key5": "3pCNzKPBgkz7vWuCH9hZwcqBUDfpghkdzduoj1cAePJs63SVPZeC12VSnU7z72Vub57rNFE4yb7geGQjF5v4AbCA",
  "key6": "3Lwcz7WnChofUQuj98kdcWUUR4xQM38JUx5XezHMhuieDDGendhdKBF3DEVBy3PAFSKBzGh2xUmtdj8rpM3AJF1w",
  "key7": "tSnLpYJmC4xPmet1RxBk9WZ5Sqy5AuoPncytQZQ4xLSx62WAf117o9anfD9gpQjyMPp9Ct1PwtvffVTkxKJGPwm",
  "key8": "2rYUNPsyejjk5onZ2ZatdttH4hArK3iVzWLPAacmduphnnPXTqMPv3Vxm8Wroi6r1bWgrgVCDhjUqzrtEup9jioA",
  "key9": "39iWCE3wZZZFoXaoeDVHf3SZS44SxcDZFMxmE1pymMRuSLrEXMgUVXFsH6JUY964teoRVE8fUmBLmmk1LiByd6ea",
  "key10": "2z7opytQMbVczYXYbrqYku8y6DPgomZWUcjyzAFRkGqVGcxwAJsyVWesUSrrQbZF1mqeN59jesBdbjoTLpbf1wR9",
  "key11": "4LGZj8s9WPiDwgkZaLz6yhkwSyXBUGC4YTRSqTZzMGy5AuHFtQ3DxPC3zws32nAmhXVjxBMCUExJKgTKWfm3BxtG",
  "key12": "2koixAzPBFAgepqqkuatBqZMSBY5suLHvB45mVUf1D5KW9DdXtf5U6BHRXfx1WXM9rod6LvF75Q7ZQ9Bab3UMUbJ",
  "key13": "5VTYvaJiymTEUY9YKDiKK1VnPvPyH4DADvCAz1TXEtEXj2mveqWGiFAxRTmGMhKgjqMjHaQrnSbUeGoyJuLALL6k",
  "key14": "U8PA4pLbb2SdM6Eqejn1gShbW8U5hifGsk81LkkH5cSbvMVr5C1Ne3sPPkNqTrvsQL92JNbwKPPd8cNG1CsHHs6",
  "key15": "2HscRFyaTF5uG1SBpKa3LiFAZBdQKktGbtewph2CjgMKG7B27vozoAnSmYwaLe9VUYsJ1HCmFhzo9pHQa8BHFx91",
  "key16": "5QhgGqJEzKYug5Vem6DDNCBywHmRS4SHdckoXVDhX7ScyUSoiLjLDLiZ4kCDumK9PDYzFoZDxyPcF4C8Z29fnJNt",
  "key17": "2VSsphyDsmmyxWfR82FmWCnoMjTXjtaK4FQuNGhr5JBUG9dALsjLuXBwPC9BLwUFoQhuGE4PvY1McyszbTYQxNFB",
  "key18": "kimiCRgsHUXqcRpMa9xyYWV4fbZYbDf5Qg6ZwarkQ2U2VXe8jJru8kEJQ13GSedJxUBJwYkTTtxFzm12sCjVdSj",
  "key19": "3GVKJgtzrCuS49cX7Zyj4H4jAqQzrRnf1ktfrX7dJvRcjm7qM1CN8f34D6rL4inWHCB9bvtfSpWkoY2J5DFkmgrZ",
  "key20": "3BfrXpoRRz5q1hX7LfsZUdz2g1uAos372cDvcmfgEYiK4rrjP9WRfyQ8M65hKFmcYxq69LXJUwpFBZTBQspYVheN",
  "key21": "3qpGiPQPxy5oU51yuGNt6tMBaunr8xr16YRzmG3j297y1eHBnZYYvizJTKcYPvA2xMkPVkSBdGva4KP2EcaayBDy",
  "key22": "3ahWBA5Bf7115arFHhL2P6VTBbmo4Ry1XTqcdb643jUeoRk6Vip6zt4S88VH9qBquQf6kbN15w3j5wqQeQQgNek6",
  "key23": "4D789svH2kW4AUdvLB7ENauQvGgSbhDj5RxyuLhMCXMVwpsNPKQbfN4WxYyjdtbmWniFg4GsjVukVZvVDWZKgvXb",
  "key24": "3fJwpT8TFZdGeayP7JBoUeSs482aanVbjUENZsYqgGgRdviXrudPn821182ppi75buXTucxy232hNp1g6oMqSxdM",
  "key25": "3tozTSS7xEhAwNezr4uWCvzQ31XZufLVFBB4iguqAKX3hzSY65f1jMWT76t7NZ5ck764o1JWSQiBLRcAG5zngE7Q",
  "key26": "jD7ppGZBaDAXnZQ3dCqs1ra7jFYtqHSKkpBjkLXSPTqkhMX776opemcM1VLDhkbexRYjQxWae853ZPecSWuQHkd"
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
