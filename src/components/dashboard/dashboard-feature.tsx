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
    "2VgBgiabo2MZHDCLAXQLsEf8gkAuTmi6Pn6aNkQgojJTafgkkEj91dxwceyiaY8dMQHAPUAhdFmrHWHQn5dpHCFQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35Wv5hEX4DHzSE6cCjkeh3i56FnzUejhzv7hXB3BiTn3b5Lbt8LR8C5f2fCVXLZ4pXbuaeLqxeVkDVZpUJiRvTHb",
  "key1": "UuquUKPg8mjncsuFrYyUcPrj7fdX4zqJwt8eBth8iud5gaZrr7SjBqLiCHQ2owdRz43Vz1WSVeCAheFJEtfYCab",
  "key2": "cWnubuquD357b5ErrMtJxr5vop6sw5XbiCkS5AahQiWeUWZJAkdPF4XLmNaxmhx5BGCF6g4VG2mCNnqeZ4dr5xK",
  "key3": "4mcW6GyptSS7bGGbdFzDfXfByzMznfdtcEqh3DxPZ5KBkdVbRB77Xw1NQNXSn9WBN1mQZGiHBiZqqN3fsx4Q9HEz",
  "key4": "2mom5kK11Deytrrgx7EXTkvh9MXej8q3HfGXqjQpkQUf4RzfMntASUZqX7Snf9mVCh2759vuZBoX2Pv8FnmoUFML",
  "key5": "2uHLj6Ho7rf2M4RTKBZn6BAFj3o3W985QaL33caGYfHQ55WJjhSam96KLXeZ5hJpFMy72w6Ee2bnmkvRgKgSikk2",
  "key6": "2Hqymj7Fuda5Go46xRdse4h2xCPx4ZszaUsT1UKSoK9cJXZKtgzuEfmYQmtXCtzH6ufqDWtBgiGQGcA6PZWZ3hd8",
  "key7": "5X3YjrN2ygvmarmrmKKuUMqUZRLUiZF6UUFpbZJp44ZWUAn646HXZs4CGxGuQ1s9wa2Lt4KWkTCgH3v5cAnSKhU8",
  "key8": "35S1koPfvUs3ZwHVC1M1Rxc5vDYB7JNaNZihWjT7yi2VBhLjudBYdb82LqgC4XGbYkehtUq7DGdp94tzHuztmjpG",
  "key9": "4cdnKqErqznYK6gb8e7vgpnoh5hJ5J8zRw1JJBpJWuNEfnsLQS7AmjdwRGNhGEivSQF5asDuGsvNX5VjQ2SGH2EC",
  "key10": "3TcgzaRnJdP6Y8EUErgmaSR7Fn6yvpYoGJiKwjPGGMJSsrSg6Yb49R2ijMCoCJ2Fg5e1zaYA2E8dwzb6AbFm3gmK",
  "key11": "2Hpyp95nSgAEASPpcVZVohvqhWgc48YwR6YMLp6ETtXphM3Taiq4GFK9RYi91csZEvMCWF4iQk9R7y4yuuZzpB4J",
  "key12": "4U19BERkfpo3HHjT4Ju7iJfmwrvnwNK76gEo6iZRzHC4ai1AmTqzajpH2oZorkszqad1NXPF9PEKNtCpJV2zy7VL",
  "key13": "2eCSo58jzptdnSTKiJmj5N7QPmp69VQDEkRodZ6B5c46nZwZH5uZcwD6xyhyMnRoLkFELSKBwWc58H8bvqD4JNBz",
  "key14": "3hKfDP3hqV4dv1XEwUWuDEXjRvTR1Ek2DreeGEtyZWWCfby4pst2wDCmDXaXkHjUn9Vp3J6MofsWTAwNMjbDdw9Q",
  "key15": "jQzyz7Mn4zcrVJnn3fsXG1TSy3nUsUno1GKKvhV4uibRpNetocoY3UgcUp8rqStTzYy52Mv7maajHQ9dfpasLJF",
  "key16": "JFV9wLeiRidnphEDPBkL9iu593TjYmptZmoykUYGC1af34H9nGoyKid9nsuHoCXJ9xTQ9pn7933uecoG5B9x5dA",
  "key17": "58qpff9jCjy3SnuAKzefKpLKWTMCzVcQYxy4LPFCMPYuMEnEEnk2qx7m6H3d4HCZDchLsSZZcEWtmHP5XQvdJo2a",
  "key18": "R5UBP4ee5DLZpFy6YAyxUH3fnu4i3ZijW4Ynm7QHLBqxZwTUFNJRv5utM6WJa5NHRPRumn6hjf1PcWtNoGRV7k1",
  "key19": "bWT7tFRdRwiDpYU6WAfWS5REpNi26oVC6pyCtbBit9YfYh4DwQif55jmZk9rvdQ818YedySKxrd3npHDGfYQpRF",
  "key20": "59vsXuLKrgGpCvvQWKxySDsoDQUMoPLTBMpqWbbKA3rLDnKjePEX7ZVfD4pQNb5dyicC5c3N6keerBRRHDSaPuH9",
  "key21": "ZcQfoCPWDeYJ8Xp9c3QWiQsw4CiWCrABY3Hp3Nag4g7Topbeu6VwkTCKYWtc2DqgPhLUvihJmyrCsLALSJiYKds",
  "key22": "44jesiSoQRKecWhns8Anpy9UaptSRvgj4s33d8qf8Bh2hALaQnRbiv7j2G9Qx7dXwFFBTB5iZWKnEzK6sZMuhanM",
  "key23": "5JXKGgcUdFRt8NNyh7LbEJfr4yXi64oq7ujxXh95xmDQzmfCFgjSt2F8H2rDrPnakcnJ2VK6uq5hmzrcmL4nJ667",
  "key24": "2ckrSScWACWN879wsRxa47vkX5QwpmbXZfGLDZcf9tkLFTwmeiFz2MU5eqwwcMXngED5ZhKmsPWWjKBfsqHwjDFm",
  "key25": "5pBP6ocnmPLGBbKzT3ztzHGbcSdjR1JF5xLzHmaFT36cg7Xfh4AMA63ccTje7vD36hMWQtkgVAUQBLXHkAyP2kGj",
  "key26": "5qzAoeC8LgBVvv8ukstPaPJBZQz2rhRez6i58biQKxn4FYs3xUMPKS2K7GNZ7DLh8CoVehaz8BzHhJDDa2srqFXY"
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
