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
    "4YPFHccZGpD3k7yTf9yT9cio4hBF6RjUkZfeBMYjjG1vBrHzi5D9TbSrcypnuGiqhkcQxYmSURVauQLVEGiTDqDf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42cNQRQXfDBt3VKp8SBRRNfejtzvRzdTcaNmN9Cjoskvp1jufZwd7PHazw4VFZry2599Ey5LCm7539ztEZN4ffNF",
  "key1": "2gWuWu3LLMZwzHDY6vQ2qZXQDHSs3tmjT4RiFJvRaTv924wN5mJMVF8Hy9HvNKbtRp1RfgcLmdhPcMxPyUx2ZT8o",
  "key2": "5T5eh5TBUdvR3A9KAFjHYq8WAaoP9qCnvRgxHEauHVkGcXnWd47MCG2hgMZ4HfmYvJtaRHDWYzD2f6ZDcthMC3Xs",
  "key3": "46uQAgQqv98SHN1A9N9KuNyahdggmQHxZohKgQeyjfFEhd9PZNSTkMM3RQPJ4GQq1qmdrJb5ompMYKsi9K8q2oRY",
  "key4": "5PRBvd4HEmwbvAAjNaxsaUYkTv8tJVTuKiM2uEYnsQ5aPytymPwQnsEe4cmS9bs23VVeyBqegpcAssUUWTtxmgZ2",
  "key5": "4fCEr5tZ7fHZsSwi6T3oRvjRSFeLwj7j1EDNYu7Ee2SfSurQuvFrvZuSPcg4vnEyeoW2owRZHUUpFm2shTLdP3Zz",
  "key6": "6g2hgZcS7r9NZtqLCLRrQe3KJS7eBL89XPM13iBzVY5CKVwk61sgpKwkV9TSnYwyuZjTBzCKh5rg4ipSAFq6KNH",
  "key7": "5v3LsQpLaDvbVJ7VbFbCf2NmkL9NpN7cXrt7tDgqyJ77sUwUUJejuuiw7rrBpGDxxdg8Q7M5FVUwDuvcwT3FX9h9",
  "key8": "5zZaM39nkiQ2oweyVHbXiygcCxwZLTztmoW1vakFe3v1NkaGK1k3NHLYoodQQe2LjZYEXytMo5e5RoHCTkQqLDuD",
  "key9": "UALHPvPyJjxEGkL8Xo9Eut7seCtSP9oiuTrNuk1tcTcLWpwDyqk5UfxNSsEjrLbgy3rBJP9CVAaUGHdsh9PAtEA",
  "key10": "2PnNEdq3MMa5rWCsqwNXZaK47ioY5eLJdi8V6NPQjnmYJhVXEqivFbjFxuizscXJFMcpkoAvQ9S7cqqCVCg4ywpQ",
  "key11": "5S5GFQ4UXfHttmxkXFiRR4kU335nFytiLNdjYXerCrFPeBPT1aduM9p1NnAh2BDM6tjowUmQe2eg5QYSHKrar33H",
  "key12": "2FxeazW1fQBqPh3ZJ927tmxZaeRyvP8Gahcvwc7ihuNAv8P8yEJregdh98dv2B6Uj7yy1BaG4kRpBnL96pNuTKVv",
  "key13": "2o1K4T3pvQEwnby8Zz5MokYjZZSKchghqihVyBTdoDkbCFz4k7JjdcjRfYyAYoaTGvmJPshPmgEpc7Z57j7s7MRM",
  "key14": "61yDFZPbdGqUqxREMaW3KxWEjPqNr2BJs4yVicLxstEo2EDPNG7Aa4riooqjjhrx2bDvS89RJWeZCRRpkKFitT5V",
  "key15": "484naMBSJTGCVcVFpp7bu5i8rVQoRCdQZ7PQivjKXJvPSpdMxSHzyohU4JQj3oocVFeMgB3DUhFNXhiKzBCNq5sB",
  "key16": "347bqhQHwrXkRWne4xLkgLYzfyHuzVdFnrrtcdvtxTVidrDPkDxKmhPmtKB6TcPWd2f9z5CwSaiymkomwX11UEDe",
  "key17": "5J89jVceN3nbi4JcdfHCNodTeuhmLPstHbDs9CXYrJdVtXYzWCe6s485jQjkaQGvu7Zy8VU5NZ8Lt12KE4YxKrFU",
  "key18": "2tpZ9ietCgdzL9V8rsUE8uwqme9i34Z2aH5EUZyT6TXQhiQNXVWjyq1kGbCkwwSr3UsFr9bF9XFob1ahtxjVVwc8",
  "key19": "5n6M8L8K6A3xB783LW2pjYJA3gG9aoyMxeHrfCV4ncJLk2t5ofPSP3BtRqpKWzxPsj4Xrfz7Vn3xazdECUm2Si9b",
  "key20": "2CUNSj41Qg5a3d5FBxbyS5QEoKsq1PoQ5kFTPbGAFTGdfEDKZhcQUs5WvFHBgCZCvdVffrBwKaxpsXhgKUv4a177",
  "key21": "3zkG6eoFfVkzBMTuDtXiUjM5DrR2BdN4QdWvgXLyGGd7ytGF4tYMKuWUaCqfthwqd3Qgkam5W66pAZF93zTfjR27",
  "key22": "C1imsg5XjL2VUx9p2KyKGDkfEMDZUrpbAh5WL4bv7uZfocFMfvKVWjLA1xmyyKUEw1ngpgL1bVuHdyx6jhzBU6t",
  "key23": "3vHcDyfw9XtdNfN2BNRShsTDx5zjguyahVzuRVkiWVgC1icHmn4CKhpAmW9r3zBTiqdaEjVfzpC3PJULSqsFVEY3",
  "key24": "5f3sM1YJ1saKiWNczeXz4gXSbhJrooukLhnZmJmecvZg6ouyR4rdhsLUXxhxQGRfD6vJtJXKSsrd7173i9bwUfsZ",
  "key25": "2ewhXC5WTowirTzqdQyThzkWEZsixacV7Sz7WvhC5nS5cuPpJyRGtDxh4jQ9MxyFvRCg6SYB3p3VA1GzKfQcrfqq",
  "key26": "5cazDQeB6trMYWcRcUnkDyoJeQpPDqMSicQf3EtXMX1DbiD7SgmzatwRAT41Q37kHJEQowocAGUe8QMNRxFqqU9a"
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
