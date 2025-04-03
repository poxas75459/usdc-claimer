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
    "5QsDpRLDD2gsTSWuuWAJenL8cXb7SAtty4kBM6GxV7kggaF2GSmY3eXNyno3cU6M6z4aG2pYzHxkS4o6h88wUtZj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j2Jy6g2RS5pJQAnAUqFNrYKKdLEnZPgXvtbD77dVNrUKUN99Scap1DVDhj3UF1T51BBzMW8jpYB9xA7Y7SzTf4",
  "key1": "61xEAb9DfJ5xfeAq68XkL6bhsHk91R8HCN8M2Q6Piq7Srds8VteDnHWGSRjqYV66GT8Q2WQxv2wwW9jEs9d7rKjY",
  "key2": "2LihGJhdCKaCGccsB2MRPede3zYfkiixEgRxAY3xE1f4Wu8cWUWMnwvTrwz9QEauqknvJjGSxzUBkCvHy3uwqH7b",
  "key3": "4N2enjeRCmScUppZExCU1p2nXCF1utGm7DF51Q8TVLRKxgR2sJRmtmxC6W142LAuT68JLeYP3NMvNNfddnnmdBg",
  "key4": "hrLGmrEQvPvMMRh52DAfwEDr7TkuWXfcdPWbvTzDtHau9wU7tGhqWetf8U1skFvXWxCiWEGQbrcHfQx3syKBmzC",
  "key5": "5f6o5kehnufmNKjVcuvEmWz9mWBHH5Ps22eLEhtQM6aM5rrj4MfZXE3wx2mA8EHmHPJkDKeCsfdgXxTYDu57Bjfo",
  "key6": "MMvodrsG3u3KT4UrDhov9arVJCogV5e4XHrgQxPBsuPGrQDsbozZkcGw5kjMx2XfcLuDMnsJPj7SRsWE9CCxsfr",
  "key7": "7p34ATJqt7UbVus2Xz7x7FqvzqtDBkg5JjgSVbmiosBt5Pgukpdz15k68a1iqVGU6dYe3rWa66C5mcXCRvYRW1b",
  "key8": "4UAgF7Fo67jWvkbo9LL2HVkGRRPgrhEkyktN3fN65NMYLVLRcRZP6bNKHxyNB4gWfNd4gFaovtPTvbRzaE3PVhYG",
  "key9": "2wEVUgTPYQFBoJejgGCo97SuSpUBVW6pQxih9iG2xhhU1mHeQ9giYdBQhRjFfMaiREKvPQ3f9VNzx1XiFf2uXgDV",
  "key10": "Z4LRr5AULkQYEw9b2Qrxo3wuMFy6Dpr9oF85UsfzSwCiiaa4C9Fbov8yMk5VBXLXdonr4e7UbAKQtUUtErE8Uoz",
  "key11": "2AanYqBEbsxSgVGeVZWEryNktcCp3hTtz2bBxXxUQ1eSMffumYvfYFcabtvPRjDDZGSKpLUJzAFThTQoJmDYt8Zq",
  "key12": "3ZHBtLvp7er9Mt2dEctfmFEzktwoBhLq4FECsb8aEr68Qu9cBw9fT9ETN5DQxHtmtjBBkM5CJkUFhf19Kp8Jr8t4",
  "key13": "2U5uwnZjP26wTyLNxiRankm1r535EPWmcJtdhfywAzMV6uTjddAKbvdJNquJ5hzkkr76sRxsaDoLpwDchY1NUHkB",
  "key14": "ctMKXRr7MDNwsHc4Bg1Ux4tzgjSsMi43YyKfhpPCjRmSWEtdDM4CqxT2jzKE5bcBZwzaeVCW5KZDAryRFt9unFD",
  "key15": "2AYvG58WRvdYTtCv1A3zA9RpEdu1oDWUUSDHfArkVWVfK2N1ApWtBh8yHofLdepzhWy2XKzJtgCGCEzXZqVnCr37",
  "key16": "38L3CERP7ED53pPoqziiVRo8sN9vqhX9N4nNGntRaK1zPdh1VzdtqejAtBys5DGiNUExkfzhtCuWobmNFKMWh9nt",
  "key17": "3oZqFkV1tYEodESw6R1NdbnoqCXkw8jPBNjXSeGsRo44moBw1sgtnDHybiWpN66k26wU8nei5V7D2g5QJZinV7Ba",
  "key18": "5tbohMAMZf5YLBJXfFuitG4vj2X9cQfmz2oayieKKyPdbKZwvx3HUtpnAYC3GgPnJevZNkXUXKzyrsk7c4LoDacH",
  "key19": "MaUwCsR43aHmUp2timByWPmfKUFC2hCX2aDKYoLAhTkxECqZKwjVchjopFBoPokpK9GNipjSE5QXQJGr8bHJUxJ",
  "key20": "4if5SudiEx8fst9QRfSoXCYVq793PtvfDcRm5nSqGheKEcC1L99STe9KrFsH7n68asZHbejkcBUGNgW4jMtRuPWb",
  "key21": "42f8UzdxbLZiUeV4cx7i6meFSwmRj9ZgoZoByTXRPseqfJbCx6beiPYFY1C5731M7dnBzAhv8vgTA9kjkYD3RR17",
  "key22": "4YU2gVEyo9AqWsEvFeZfToukgNi6B19kEKN8Dk8dz2baZgwTMg9qgGeukBBUC1DDGDssYp1rHUNfiYC72J3VRPTP",
  "key23": "2gKpebqcBWVCGqytpVNHoxYcvprrA3y5Ax9hsjbNPwBSeqbyrWEocWRmTcDKANkwaLGg6H75sNurXNe3hwds2Tt1",
  "key24": "3uR5UEab5HjquCm4ZqoiwJxyKAHNatQMqzAKQpbucieRVFhaUY8QgGryYo9EFBtNHvZvnMktAa5pWew2n3MfBAj3"
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
