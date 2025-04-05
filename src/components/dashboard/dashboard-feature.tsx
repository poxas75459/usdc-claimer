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
    "2Ng9dQAQQ7mmHnb8DmQXJVCS2TfuswHj6KDbrPN2iw6kt9N6JgPcDd6cGMbKszvry6kW8mABg1R8gkH56tA6GWBZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a2DNbvxNdoXCYRC8RzSHdNZ6d3UuXgnGgvXoymL4zZzqG6mCP3eFKT12GUAxA3SaHWndLQvWGvxTBbZpb9rvwYn",
  "key1": "3g8S9HfbjvA2CEGtpCBD3syjRHteivdNHiwzTQ1M64nb6d4igbaV8D4phAchtjc6G9Ti2hniLwcDxE3KeneMeLqF",
  "key2": "5CAWiHVjjNqrBW2Ej42zj6Bh4pH71GBxKvtWk5WKgR326NchCPKyNE2rrtXe8pnGTWfU4RdFXqvrKJGQVdGH68Fi",
  "key3": "3Ss7hpBGhdUjgXma9TMWzHJTapDASeUBAWcWTnvwZcBHQDr5r7M5CqnFmcSMgB5eKi5y1xL3wjc1BY6wwpXWjBZC",
  "key4": "3R9YdpKYHTcSVZRFXCPzKuRx3v8Wj3mL8ZSqoF2skKnTATbw5nLrPVE4VJHCAs5Bydxg8M4r3rFE24x8GhBR8avu",
  "key5": "3fZdX8DAKZYQx2cGvSTnuoi4BCu82kur4MgRx7Tqso95cshnMaoftcJP2ZbnZmbPCfeNvVSy1EFoANbykV925XLr",
  "key6": "3PxFiYM5B2a2jUTtxHAiK3WkkZwVCxNnXAY9duHFesnL8V4RP48YbZxKehW1xASMDr5gpVhdfr2cB194u14B2j5v",
  "key7": "4UXgckf7Ws4GYjos7rrnZU3qCpWyaMrY4gMvghLZgtwEmCSiGEX2i7Gjfspfqdy3LeRndqaEd3YrDFqDVAAEthoB",
  "key8": "5c84LL4H5fasM5G1JNJ1GDaPpRQEv7ZovSqMw95sVxLu4td9XdDiC92KyUDd2iDuUfF1jbdttnFEE8K5WbvLTCxd",
  "key9": "4Wgq7TsjfcBcU2bwnUPEMjLXr9gEAPc9pYNKhZyCKHMszNLAvnRDaz594QK9amHhR4XU5rXk9ko7HcNvbKrfCX8v",
  "key10": "3uhvWwxDJk6xHm88YUAyrwvj51auNQb48pxzAB1smfrHgBdoDtf8JG1XC4LPHbmdPuVXHxTaaqZhhuH6beFvgrut",
  "key11": "5CWomQYhiU2AUB1atLfhsaGnnK8ieRojEwLdVYSfBz11RLowHhw3XjzjqB1gZrNQuEZT9UACJt4RFU4dsLAY4RN7",
  "key12": "4QmVCQF4Vs2qjxudiwZe9K9rVXGZXzVi83ANZUiCQ762HGf7PDZS1LK9XLs1Cjn4Q6V3GMkgA334Hyd5p58oqiMa",
  "key13": "2mF1Md1iVwRyFiEMoCpK7naYTAPSJgUufJPqdXEntTpiTvupgLVHa9vNyqihZYEwFQybgoBh6ifSuNXm1V148et6",
  "key14": "59awDW4Apoe3UVcQcwDAoAMiBvvqECLZybToeDiKf4L6H3Jkks5eMUsfN92BA93wEyJPte8WuNk7E8mtrGf8BWzZ",
  "key15": "3KL2pHDtEcR68Jh2pcFL6xcG3gKBuemaGqiZxhoohVR7F5GAj5KzAxHxeKL51ne3gAKYM9fh8jm16Znqy4VM2hmb",
  "key16": "38CVU77uvh1bgcRJ6rAjxAvvdSnePqZcYdoaJ5T5YceMBGgpbbzqj92FjZ6WQ9XcmrN3pi1azS2Xgco9WZgCtKDo",
  "key17": "4FM9GHdzHBgXPCmfYeSqDJNHmnLCVmJ6oWkyikFKAaTc81x8gqz5SMThuTwZLCJSLHzMM4GYj5JftVsSwpa6NXDt",
  "key18": "4S2ST75acYzwZPE4jDrMHL5nye3a2ptTMvbyG5nLwKWnxeotHUPRpnSnk8Qirkhke6MKQ2i72Zq6hfJkVLn49ZMd",
  "key19": "35hyfmakSZZ53UUSw5ygQks1f9cuhpj9y49UNgCtbX8gDc2mWz8drWR86dVZiL7dKPW6iSyEvPGLPg2n1fMJYoit",
  "key20": "9DSycV99LRF67qP8L7DQpFB6SWF4dACEKxdB3a6nWHfN3YwJnv4artptoV969ZHwrXnWMb9qfi8SAWK6rDkUtSy",
  "key21": "5nMxHayVZUU8QvS6EhTLP9RsFjybqwJUivBE4W38bgSibGdhnyF3v5EUdWBi9hEa7zQJL1vwzM4WVwVwmkpY1Jhk",
  "key22": "5PFxvmJdwbjWoUMVYKV83SrAmHCZqKgMuY7eBbT3aMTJFu3RowvcaJYoEaxLz32i1RBbWYzRbWwGmBimfNTiudXa",
  "key23": "2D3FucstKp5U7g27LJJKQ9gf7ardW5juZufRCRzYQj5WzZpZa7rQLVrmyGsLYgg4nko5txAkvScwXQBLR17BymiS",
  "key24": "34NNMVnT8xbwy7HD5ejRmPv25VSAsWyGENyLQsZhzYTj6ZyBNxK9iU22rVSu6D2uGCaXTKQYJmQtX3S8faZRjtF3",
  "key25": "4yjqGv9GMRhKTYd8nMpJh3izaxoHJMrUiZ3rvR5DmGLQSJRJpf2HVVZDxg4P6XKEEEZa5kEtxkXgoKBY2m2hxsvE",
  "key26": "3b2D7mRoVpEknxB3Dj7zcUvsJvAXaApZ3MJd18PxtR7U9Xdj46npYTcsj4iqbD4R5KcSVokWvWQQwLWProfdzWKf",
  "key27": "5sfYVyEBUWcvnLfnGUFsNW5K57oxB2Kk5kXMNX8ViLF3WJf1wKrtXR6H1gUdjmVtmA6c96fh34qiJNQiUdw2CR7D",
  "key28": "5Y8aKCTTY9x7xXNwVBYqxXKszuZCKpKwgzboVTPfqYuASjGpSSufheZQtiHNQJf6AbaHjX3sVx5iDd89RJdT6j4Z"
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
