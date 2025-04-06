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
    "5uSD8WFun8NWTfqeys2LwRNLcEYewqhhA1WNyKsbBVo74SHDaLbkDV6RV7FSVZtTX5NwYW8FGyhRHj6GbVCKgYpG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CgVkFjyDpCo47679Sb1L9nJTSz82qpJagBYjh6RM9PPcsnsT9vyAXUBQgF1VJMfphN4FAYcQFKxJvDKH6aX32uc",
  "key1": "5ZxcE4ardmgwWQgwwQo98HVJhm4vo4CRsQYU3JaxoMYgQqy6pZop4Ea7xZy2QS56GZLvFgTwn8eoVmJihQrxkHCG",
  "key2": "3RVEyBnEpYDyAFWQFWouFScFQEMoXsKTYhNoNDhTzUkLjVPKzcZbntmgppHR7WefscYT34sJ4xBGfvoevwczsE9X",
  "key3": "4P8XJ2yxynRVYiAMMzwaH63hwXJXH86ZySZ7KP856gCbeUopCKwzNbscWz7jp3cTu48ySYt8Xh6FtEdRG4dMjG45",
  "key4": "4UM9AYxjHqpyzWqEqSkk1nLQxzpUYrCYXRfQ1oHLRFYYfZWBU7RU7MYdQAFEMdX4NP7aw9PeggeWviW7sBs6QBxN",
  "key5": "QV81rByxfvin12NmpVJmgoznMMN1d4vQSMH5Dt8WWuiGjVebHqVR8DnzzSwkLYUJwb8kJGF1uHDWWVR4qrtZ4eK",
  "key6": "3zxHHWokGcvMRakAYcPFaigv5G6mAvrNjwAQ2TZgUwgNSCKznrkD8mG9MHf8E3SGiS3tQcpP534ZKqXBHo7q3dtz",
  "key7": "5xcvFXSfnc7stfAmw1WZ7zvdQD4sETMhtjNhkpEvjonoorGKQjvrTt4eotgsykQMCyNEBQpSHW2B3KRXeo3puMq4",
  "key8": "2CQD1jkYhdH7T1U9bRrTT8at4X6CubGbBpnzkgACAvab2Hdop1RNCjUr4KMyswtS8qkaaAypGJgsCCjanhyYHp6X",
  "key9": "23d3cMW3sGwhE59HTiGSp1kxsoa1sJwm1CtU5yzcjhhDUn6uHosEsEoKkr8vbpoQFzxKq2RNAM3hEo3uSA2tvqaU",
  "key10": "5A9YasVUo5GENefC84RWcDHsNsTDCrMThFRWRHiNB64zWSXU1yni2sVb6PA5iN2mwZ59KMhzuXbNVNzqc3A6BCFU",
  "key11": "4jMugRdquQ5L8ZNNV1r3CJxVKrN2wfhRxZcE7Dpj5S7QQGPhyqMdjYKYZk2XQtuXNt1e8Bmn376MEtqcin21ckXH",
  "key12": "85dFb7JaM8fRhkQwemiiCQw4hhpUumNSY1gp74zjZb37xsBuZuDMpjQv9w69f93aMpZYJRhHhstgLxFSgi5wqtN",
  "key13": "2xnkypeTJ5ZeW3GNSuCiHfbV6fozQLUimS5dXe1SvLCFHoafswFWeUfmkETRdvopQXSdxipwMTV9FqPbGWmZckbv",
  "key14": "MG3sH6uyWYnM6b3LnUdRxQGMPfTWVC9tKKF99upWtBGPe7ZJr3Tpz2eTLZQNHHeYxHPZwpzJ1dhGuK3nvNZUaZb",
  "key15": "56mR8WtuHLcUhfXfoW8bpciPEfWQ2d9CD87gNcW664fUSJu2hgAhEAWdikXoPtPnioVWmVLU4Qp5RRKGSrxFJUKB",
  "key16": "5rBRFud2dctGoxdGpndELhjUH8KBGENPvVucYYCaL16U6nHKsAnwMNV32DP2cDXfnxCRE9eR5tLDQyNiQKtN6rkd",
  "key17": "3WTn8ehs88yuSdErT7J1RXhQatVkFeYXujrFGmQe2zogj1ngmB8GBXRzWg82qyXUK49kA1P2CVaUqziA57cUFMj9",
  "key18": "23XgdSGEeq1CFnBHs5QVW4kti9NsvnTj6eNBceUzeyR7m172phPsAyir9TxHMwRP7QXW4a4wzPABeZTw5vfa8zuF",
  "key19": "tRTRL3qTxxxBBzBgosRRNoZGufHBHQ2JHLWSKjYKzif1F4SJeAbQbvRF8S4EXHRyKtUAsyfZfjWaa3ZZhryVWb1",
  "key20": "3qhakJpf3iMqPbRdcV2sShBwDW2J6yNtXNUZgkMah6fr5FTAkNViSLGAcL9rzgfGgYrkHAbMNreS6dt8KyFv2FEf",
  "key21": "yTpxCqHYoLAzymHzSzFd9umRSXYebfNxwJHzje2VuJS7dRTaXqEszvXmDU3ynR3EozUvWXYoair3NTjM7iRmuP1",
  "key22": "2mkR2L7jrHnvxwPKWMz8FfZ7V8RwtoTX2qwSFTsaMVXKyk92SGoSU7ENCMTkCusBBtLjAqfpQbFK9PD8MNXgq1iW",
  "key23": "33aA5hFsmzTMs2BWiYVam4EAdvm7wLLLbA2y4tTyodBJ7zNjHgrGnwyHez56pYHQDJ6UgCZr7rR7rxA5jNuHeP37",
  "key24": "2Zo6ah87a4A213qf2x31FaXqMLhdrfo98KxHcJUixZsuzcpWX1jnyoVUeJUpD5zxFC5xykAnYQ6PPcbfkV9vGHEz",
  "key25": "2EkpaeQC6HGmWTnSK5cMYki18W1ZaQPzj2vaF735oQYi44T8bEn4MRErzm5TKpuBXAbykc3WT2sQdD8xdBsajzAP"
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
