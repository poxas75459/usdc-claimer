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
    "4aZzPUTbq32uHQTNcd8tS2xFyPaW29SuHnhDH8sEgzaiw7ZvRphd9QgcxMUin5TAgqD81Zf2hkKNmnJoptU7g7XY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o1WvSBWDVvtsxggVDbJx8AK8YSyveZqb2V9HJMDREJyDLrHrzrKiCfuRnyQ27Wg3EhshsWRfT3mhd86NJy3cG51",
  "key1": "29ngz8EH8sx9VALG1AtMUMNQmfsTmcCk1H4pHvJJrTCyKnNyjRhtgnwrXrCLqEFmadMzAqmro3k5TLA1UCPwZk1u",
  "key2": "3wFi7X2KvRBtZjjc9vbsZnLnmQj4K2FBQrjsTH2H6h8PETu9Uoejgdv5hS492Foxtndr51sV6jv9GHiWB12jDRsp",
  "key3": "67WG218NBUdFje2KhLEAemGkyLSFDzKLfw4w7WdYFzH4Rj3FxsbLpN76aby3KwMD9wx218n7P9myu2uCJRQYL4Kr",
  "key4": "5EgEbuxTAMxahtfE4ka491928VcZaq2LbQmEayEFgfd7XhLV9TWZJtiWw4RVwiPNxBo5KrKbeazqZ7VKFJNN4TqE",
  "key5": "jYa7p38D52xMmYJE5cYkmsCQmQGmqi6KfM6v9kXLpiPZXYw6gC8fkDvvP2K4uK1ELVV5Q2uajz89qks1bSbe8n1",
  "key6": "4fkciPDa4eByb1KVx5Ymgdyp1HtuWUpfhDbp5a4XpThFB3CHkdcDPhHpChcCXDMT2m97NvtiKSb1VHHHPQv7QrLB",
  "key7": "mNxEHnLgutUVNmEAkCDjMpDiDGxVMUJa21b11d2rqq2eWNwQVGnwocUnGievVvVXqe1wGwjwB6sAPfaro6HU2Fk",
  "key8": "ZrJtnicqpwv8rcA9a8BrAFt7oTwUx6JEYRkYNy3ng7rfrfKEngMUJ7wbc5BuVcN7fwRxLs7p4b5UdLCRUf9Jq41",
  "key9": "4jirYqYAbtExirycDhBxy2PtfpzNk8YENpD7zhwkyALosGCJpcRbDvTqeYbgsKgy68tZpc1uyPY2Gu6VQa8KdUxo",
  "key10": "4gJe4wTkTAZa42rbwR6nDTXu1q91MZk7RJk4i6Y6Adpf9vZqc3LznSUayZ8WjVYBX6S5p7L36f7W7xxtBe56M6id",
  "key11": "5NnomSnCc96tH8xK9pZssBeD9YoWGgHyxEAnNNi8FxHn5Gwf1GEe9he88SQTU1qrmRzeZBRqPzAL3sZDY7sfuh7o",
  "key12": "C383gMt8TRMfiEAUwUEEzfxCBAh5i4heq8wRcKTLta7wEBBWA48bZBA9asdDCw3stqEgCfSo8FRvq5cJeTuto4C",
  "key13": "2Z1G7tdM34KrSZc1QV9ZT2V7gGWJ6td7Av8aRpQSosmip72HAMMf5UMTE92EtU6frrSD1DHkEaDZLmWKf21rjKiU",
  "key14": "4snEsoQqTHnZoe5p1KW5iFHRTK9o99qYFURb9kQ5yJTF3CmYjC17dHW7CUmJYysNVLn4wLF4KhruSsakHny7q4XY",
  "key15": "5PFm78so8FhwYraGeAfKd3Pe44YChBr8BECHi1mpsFmeZkCBdX7vBQK7MY46L1gc5Dgdmz4p1kzpTR3yRcMwthRc",
  "key16": "5ww65cGd8FAZpkmqnwg9EcUiHZBjXiqFRt1t91mGYqJNQY1L6MBCSJLQMAob9K9A7sKDhG5jstMEabDE9ybqCqxh",
  "key17": "4wfQuJGs5yq8UvHKjV4WBYf3w3mG2R3uLdAtpbMxyq4MJSYyoPJB16MXsK8xrCKHhYwA6JE82isb8Rp98YPxPDur",
  "key18": "2txi6Jgw9zT7kWnV1smBeWPNXmbV3ZSLAznsL8o6rC3dEwXL7gtrTC67d6J9Aesuk4Z3uyE3xkUnKy5JavoH4tiS",
  "key19": "4tEfLuASLCYHKF55z6caxV7XANqFPqUuPwaRRcj3Jd6dmm4JDYKuNTt1661ybyvRbHZxgw6NRocserwYvPjjDh87",
  "key20": "myEoq71p81fLYJ9BXY4kz5Bk7eXMzZQpZcQ5LRiULSaDGgKYXEbP1xKXthen2sr3oooeSo5dSjhyzg7ma2Tm5DQ",
  "key21": "4mt7dU6ZfSYsE3hb8KHwn3uxD4iDtDuMEZ6P869iqDbaMac64BtzL5JMtJKSxA7Dx6nTW5jyAyphLSm1kPWUocBE",
  "key22": "3QgeDXwxUjnLhP57p28gNH4cpr5NvvE3eJGX18waSetJ31A4kHimLRkVeDqYXQVHEWTMKPCYhtNcBgXFG9KpAgwk",
  "key23": "5gQJaigKBCQwfUPQob2NVJ4n9F4gkQmbMEuXkdrPZ7BVXxWj8EsPkgJBDzWjoQN35X3oMuUsSZjzGrsh9DMoTtte",
  "key24": "4mrqEeNCyTMQne5oac5aLxpWGt5UJRoFfNcHLXJPQqRDATdPARvajheQsynvChG8dBHAeEXFbdWuPgJdwfdBSQDg",
  "key25": "5kD9T6rroypwHHBDVJy8yQvNZ4tMB2L6XLEBPnJV85uNF5hQfnCN3mnGD22HAdzJcGSaw6jmASBHwxoaFTeAzfyo",
  "key26": "5hLdNz1YwaTPGFNdb4nRGqnG4jTU9x6oyJqiFhjazmjpmQLzCjhTD6ByBDarJFbu78K4oqkdiKutyoyyrbVTjPxQ",
  "key27": "35FwL77JCjdCUQJZNzVtDkc5FZMb1mqgu7nbCwTMxzAfS3PwfAjdQsEHQnAQntsSkbETNxNagHKLWtscypAuzgqx",
  "key28": "3ZqtAaf1ZyyjiN8oV425JeteRvDLpNBTsEfioWHQx44uWH8kjF1vDSzS3hoW6QvNnp6vn5Y2ketq7KC5GoUQkNeH",
  "key29": "45EvZ1yXA9SHuDhc9ZqeQ4getuX49qr6PcD6BCYr3243cZ9EtTaq8SsXwx4NLHa9eU5erX8nb5NfHuVydSqQqB8A",
  "key30": "5v42FcCLGj3dgz4UikbtRFDVxhZw66sjC8AhwjbzQ14pMpjMPK6GiFg2Wm56QB4QHh9Fz4q2MHUyqCwRrHZJurcQ",
  "key31": "5Y71S9SWbm7rbqzWJw4yBp8FhjDrWxGb7WrynjPPqFD4XcwMjhusnJLPJJzzJRaGhx2PJUb68Zd2DD7TRcVbPBC5"
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
