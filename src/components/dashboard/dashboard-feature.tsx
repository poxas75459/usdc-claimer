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
    "2upBfRbWeTbsvL2SnzRQxiurCE3QXbnWiBYoHuaAJARmfnePCkamn7yjSoCAkY2heoF4mM4zz336aB8h9QrqGnPz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SYwJgDub2Yn6vQ4nTKhd4UdXoCPn9kwzhyPBTua3xd81bMRYm4nX1Ff4hxvyJk2Nwn9qKWdyJLBj1CtsSbQFYgT",
  "key1": "2ipj6tVu7xnF8eUF8x7hZVUmtMv6fs8hB43JwRCGWZcJnVnwDPmeeY1sgdPdhdkodh24pCcJP745LCKY8PZ5Esz2",
  "key2": "2MhTKFbRCfMvhJkVKtcVBjZNDNhF4Svq2xzw7927r5kXFxLFV8cHf8upsbZWg7gCiYPWy4WDGvAYKDjA3Cw7mEfT",
  "key3": "3cDjKWbhWBQEaFyeztKtV88fZvJShk7UAEPH7u1r6F9EZNmfr9UsNK3R7ZEzvbuZ1HphYDFZmbmSuUcoe2ei71bj",
  "key4": "4kNa4p4tU35KTckc6bizP4aStS2F5HUAQ988eVrsoprudDBc678E1iX6TWLXaGodoUXSZWCz6865dg8uqHGW7ost",
  "key5": "xUCDixMfHQLE3oxdD7Kd7TyCGnnQ2roaksiLNHcNzcr79yfzEGG4HRXSMhZSjvwz5fF36BgMhd6qThqKriRZqfH",
  "key6": "actN5EePTkQaav7SHeANSnXCFy1oxYeUp9kKWS9kRSAfUQKo22XWavc27Wp2Ljda7T3xGUv7G3Mvr3SagPhvYN2",
  "key7": "5k1TjoykffzaXJ3kRaCVYrQV9nMdEmFFoTkm7jLc5LVkfT41uz6RxzCqBYmWF9hmQhsWXPUz9wnt92e14toRGWtk",
  "key8": "2D4udhyC3JVAwM78HfFu1oX5JPW4pgVc3CWSRtT1zdH4DAxcjz37xhnvk5x6Kn6hpMFJUhLxJLJNPEK5UqAuGQzS",
  "key9": "46oefREnBBs9j96DAQ1ep5umpYQUfrnsNcJPbBYZdnq2bbEvpkKikpULJXoUnjPFeyBYecvphUQB2o7BvFHmBmbZ",
  "key10": "4XMucnWZonhddQYk6S9EXnJYhvzLWZdwNBd1AQwZ6c8ZXv6r4ZPaSrgXh61Q7Pitn5cvaCKknWARHeRC1R1PEseb",
  "key11": "65YC14ctyacsaRz5wiQE7sWGGJcQVtUsoZeT4gJb4f9eQAQK6nPGuQq3zZ3AzeUi66GNQLkyZk8bBEjwWoNHjdZ2",
  "key12": "3mtXz5o4E4AUBVd3U1Z6JUvos3FtAzCRq6TWcWGw6eqjDJZG4pADq7BCxknYEJiack7MCsAJkDiK6iDq76XgqxrR",
  "key13": "5ed1KTBLMvoKWCNxBU5TdRQS7kxxoSYuxKkbcabMDimoeZWqb3U36Q735jRS1wtLXV24o4J74p1jyvsKkPnqia8e",
  "key14": "3RP8p1HmYJUwHYHDYw4DsvisG3hSXyPJ5o2W7KZqYqFWw4kwFBmMkMU3GNfNSm7z8qqudLi7B3N26DBLvrQvKmz9",
  "key15": "51CA78CEpSpJdzP7psgfm9wbSc4SPqLbKoy5uHd5QYgUxHzMhYZzSj9QazaJMFwws4pcuNqspq5B6NZedPMBGqXw",
  "key16": "25sSGTJ3EhLEQBaoQRnCDTMoe6q4vv9yKehjJipzBHjnS5RZRAim9Gq2wYmr33y1uFf4rwqu4PnYsg8n4Emh8n3a",
  "key17": "46uBC7LQHeT1aCJ9kSd6pRCovmYyWEQAZ9qm12UrDmwj7DjJsNzuc1ST7bhfXWWRo5H7uQLSssUbbQH2GJJvacoR",
  "key18": "5fEcb42AaW4XEUjvXFmrNLK5KqLnxukqUE5CzdAvSgFABKTpDGg46rmeuKCTcfQybRwNtKDtKTgwTrsHipND21F9",
  "key19": "zHLBXqEKETsdpmD99igoqps2DsSDL4tKt7sKpRnZm8Kw73dFWkxE25dTSG7MufCYufPzk4Ft4JE65x8oEEo13Mt",
  "key20": "4wJ4MHwJDqmazSo2obPJgzB3dznDZjmekzqeXndXyxcyJUSz24QW24Sr7u2vAkHjLZX7HXow4fhL28FvEoTQdrVy",
  "key21": "5c2ZuqbDdDjVGHPpkNjA7tmqpjJXWbBvZrbvGo2Xs1Yf4hth9ff3WEKWGCRbpF7es8pQxXDXRqSr38vab69Py3Ru",
  "key22": "2Ldh9zMCQy4pooukt3HJwaFrnv6bJaqMutMUaPoY9cnyyANwNrvEqnpxCVm74i6SNGUcd8MqBihYujeCBQtL4myg",
  "key23": "2JPQtm6Nxd9TughpXZ2udtdQziN21C7j3zJKdPv5oguwbuEHw4FsH4Ryci7ne4xTaaJ3YhEcttVZcT7JQBgwB1Pg",
  "key24": "3kAhYu82xSsYvXi5iruouHvZrjVKnzDpVb7VKkLbBhPf86th42u4MiG3pMStbuQLNemMRuXAjAgGwvtvooy1RevN",
  "key25": "2gaDpXjEL5ZDAM5VsDB2P3Vcm44PNPxBagEQ8ka1KBi9xuixU6kHE1XhMnVXvPqYVKn5oCGo8xvM3dte9XicdoYP",
  "key26": "3kPzhDzPgSS3UBKnLnPXLdDLSYBecDBRu1AdwZL5Qe7WX1yE71zQnTLPdbYC9mo4yBLC7dX5Qe6zbM9WtYWH4yYX",
  "key27": "2NGhe1axZ4FCNiTWN8eaG2NPfhmvJBnzLPA75dBUcDnCkjAYEwYALUNB2QqprUtbAHBWwXC8M54jqukMEe1X8FME",
  "key28": "2aNbayJ3srAMABAM284ie98grreK1ph84Q63EZmQUJTs2mCYBSU6b65A6uf1mWj4UTKfHRjuMm4oKG3WEEhCxMwk",
  "key29": "3eutDETYy2CxKtKrno7jzgCyV98kR1ssUg43m4kbAGBhuLWt4h7ynv2PMLL6U2rkwNYDJroV7bvgBFtdv3rjL9Sq",
  "key30": "3PzXsGovESTvvpLLeUJmQ4B1VRSG5ewPRRTn14HdCyCvHX5WNaspeciACrZwPa713weQyVyLxLwbu24VsRSFxZ1H",
  "key31": "3nwgGhb1Ug3dAXZD1ES1t3jrYCyszJCRA6L7hknmnh2exyfuobXxccAwyJ5i9VSZYtSyyj9kMp5WMvp113N8G1Zi",
  "key32": "a83yX67QqjC75WFoxxodkKFnanZLitnrtkK7ModPNhyFDN91iPqHC9fBccWDyY8aQ5NDhRc2hBJBXVjhoehY5U7",
  "key33": "5h24gpFEgsVkz2QHwdSSQFweBrSn6pkkshis8kcjd7atCwD4ju55WD9SaCjMpWvYeGJZYsk5dayyRAoLTXyWzu4m"
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
