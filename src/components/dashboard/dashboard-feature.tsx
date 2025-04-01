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
    "5TmmRQYGNGntxDnm8zLjPc6f5CLzJoxkCQV6L8bZH9S4uneBVRt7HdHa65JJoRusQ5fmactpvtsZg4WHunpTkwc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hoA6vbMVz2uJGgUQipYh4XdZwxPo5dtGqbWNxo7gqn6P2QC9yVufrzstVPH8AeG8RX11mx3mTW5Wrq3MU1m6Gm2",
  "key1": "VLP7cxU85gmGd2749XLxCYA25UWsQPFZSXGoFbnJAiRtSfNSKCBuBbwXFRAFf2wv66BR2hpLDDPsn8x6V9NEDNX",
  "key2": "2nGbN4o7WjTyaT9WgNtikWF8XYivfwgajRL1ih9yS1qsTRhvZGBp5e7rNkiVe65QKo4qmMJi3SuG1Z9Gh599siMB",
  "key3": "5S6dsR8Vdj4U9Ei2Hisgw9gKxYRRPPR1jS3FQYdyYCc4JtWNDhN89PmrwwP5bMXhDx5vsKf6ATiF9xUcdnoRk3K2",
  "key4": "67YLniHThUpWLtVmTiPpqVjUVH4BgCNw5qn3BnZGWTcvF4W36bge3GRAK2arfZH5ZY8D4HrHmAMz8kih4S6Jcg6v",
  "key5": "6UGvpPzKiuTGrJFfr1dn6KawfWgJAgYkMPMrm3zXRStAziTnmqCpPqWi1DcHq1EScik8SmSRMVK6Dv6YQj3DLs9",
  "key6": "56snD64Z4CbRBHRe1WmJm9zkkamMBU5eEeJduuyV1eyd4RFCBnrJqkUMiuLDLwYrDeCjkvJaANckezQWsyDfBssf",
  "key7": "4aLA3e6itK5YkVA6hkv3ZxUTswqcsyYPspwidwVJXrkjXZW5bkEdx9csnMbXVMqNJKJYKxYLF5cRwSM1bxHh5ezN",
  "key8": "24MdeFSppYz6fundyHv22YsQVZrJGFmnL8RfVatoH2pznFeZXEHBjC3i7LCuZvXDURjFrwpD8yC3V75S4cG5w6BV",
  "key9": "41H3qvkatnCBAbZ2iJbpiZohdCYsD4yUCjYmKJDowAgGo82XTysGN8toyj41c9nphG4eTDc5KiXFhCqwxkSzWER9",
  "key10": "5BV5nmvDn5FmQ1hhX4YagWszQqaEbTuqLw9MKA8AdRgkA54ABxvWoW5UtUWdmA8KzrEeSGp4oVmzt3NtwPKM6P2D",
  "key11": "2TM9MtXPbx1xGkpjaiuWqPpX8eEdvMeUaFoMt1pgLkwH9L7U9xTdWb1MKmQmJAnvWLjZEF7N4xAgEZnBmSEAMBbY",
  "key12": "i1CT996Hz7pt6cBqvFHdtwWKH16PMwqrDQ53kgztF7eyQeqVicYLQDq8gWsDuceb3nSps7nLW8rgyaSqyGjjhjf",
  "key13": "4Gf3pp4DCTF4J52YNYQ4xUWsheU3dMruBib76gLctpL7dsrR1HWGLyaroDQKgqfa3UMXix5WnpfxhRhrKuQEsDF5",
  "key14": "5isKUjMEoEgaEfpDdPwdwVE7GF9xWatdMDeYyimEvS6p9owQbRGCMqeHqUnrwLtkMHeWiZsNyC6nM8rsbNsGNjjm",
  "key15": "44jDdDrxMSx9Ke2vwGCB67iXYQxGpwijvZ7QferVQysqi4aAKZ8fSzK575DpkwtRvZTXszFSM6kKUV9afSKknwBA",
  "key16": "5h9sbrbrLSYTzVfk2SbShMKtyc4TJnMMfo3MmQG4ts3DnpFhWQNeYrVJFN58SYPbKAS9rS3xRyZZA8mDzkotADEg",
  "key17": "2cdyy1XA83HJoiuZnTHvyAFbFzjBhpN9NG18QjyweWMyu4ZvdyPjBht46W5W16yJpxduxsyFYBc4ZNgXKSMiqjbb",
  "key18": "pcredRgySbVrTVm6qhJRHT5TAimLHKd67iPB3fpBysEwL7GaZ2qqLwPRJtiuu2DwbDQ7kaNW4WoPaJVcmP9rTw5",
  "key19": "467paBw2HFD51SCgdTUvq8zKayrmiBJB3Aws9yf4BBq7x3vGnoMA6EWYp1YFAPBEDernVb6tZuEqwzuVbfvirpCy",
  "key20": "2Y1a1MDL1f7iuiaSF5bDrzT4sLt872hPsWtZg7z7cRhyDuyUwMQVuejuUEZTkicM3mjWS8MSxgdt1PKxDsPf6sKL",
  "key21": "2ijpiknBf1sThQMHuh9mhmeVwdKz9wPDDA5ANMbYAT7JUAD24MpMmEgUs1RjZ9hU3usMwLeUXvfhCppmpGKC5dYu",
  "key22": "2UbSuHYCh8pyjP4YAwvaQkDFeWCQwvfipFNFHPdaT5LLcBo5PjAXuvxpuMzgigHyqw5ubMqAT2DnFzEF8jF9Af33",
  "key23": "4F9ZWqPfcGJDHvo5zengLcHVvAe3MB5VA5fDH2nbVQRwXN9kfEFXkiwRVL3YYNLwoBTecgwyzYq8PD8URpQsM855",
  "key24": "2hCanZ41n6mrik6VpmLmLguDsqmRbpRXHrhyVMPk6UCuvTNmv3AUsmcatdxvDz85qZhtt5USheCDdu6JtT7znTRq",
  "key25": "4xd4R4ahA1wqzVPHVBdLBNbwbgNARg3D2P9dCcULPTS4ox846se8akb6wNDkFvjBjKy6ZG8RCRhWSBB6HiM38SkM",
  "key26": "5GfFE4jYvZZ4Jv8tSMvyPWQ8AfhhgNZhdpignaaXbpNTMr25KsdiFSd9RdwGJXhm9z8hDUfKLBHfRyApiP6dMDKQ",
  "key27": "53VXwAQUpUHi7FNi8aGzYrmAwBT8omteVxFrVmw1CqscNLkSzQtVm7fkbsmYSUDRADSH1xCHa5TcH18S7kf87CPv"
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
