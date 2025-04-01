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
    "34rjfR6vz7qTzXNF3sEsrEVqCVxXNigEdybrh6wPjgC4jr9RTYkyojxXX5UR2ZD9dAZBxSnES7bw4aAVA5uEHmzW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dGw4r3qQ4Q1FBJJTtMSruE797sgqtpTJQMehGvGLCSP4FGH9ZoxJbdpyrWUQf7tPPmtigK8tYXBPEXRXkBP5rjN",
  "key1": "3PBPPE7CSRNhgEDsrLr65SD5a9cmrBanU7xyHZ9vYFpBx6qwkuhTKzUPzMohkhM3Xu5hxvbySHsiQMzpr6dDnNFM",
  "key2": "2gEw1Ep5eFAxTJJ5Y8GNTN9cSLTNFZqafBVmH7xzo5myfo45g2DRLRrQMuNE7XFH2wxcXfk5RC3rdds4miKfBHGm",
  "key3": "2QTdixMHTu5cTdXDAeKugA7whHZkDZ2xb1Kas3tUni5CMU1XYFsc3FGxqPcVP4bJwGQNhybwP3txr2WNsS2ZX6ng",
  "key4": "4ihqTjL8u2xMz7KgTJp9EpvYSWtchfrANAunNrHqZN1ZNtec5PcKoGy9GKtMXKw4cfFcuKnkymhmeEL8f29SN8VV",
  "key5": "5DxquLrbGRULM23hyQBVj6B1G4osY5uGdg5LVH6JJSKXuw7fxqwHYDfUp62efVQidT9X3ERLouXjLBSpMENgKiPp",
  "key6": "5Kx6q6RJTu5JWLRFUQQCn54NkUo7NNeJQHZ9LDTqbdB5PiGUCsB8dyCwGhDZnJJhikDcScrfTBq7225wZnpk8dpe",
  "key7": "43MfSQQ3RZCgoGRnCPAB2bW1TiS8KXNNGrSnHit9XAVM4TbuewGZU3RCSN25eWAnNvg5rJysaVb63xiESY6JpU6j",
  "key8": "4nnEGun3n4rmoqKEcgqoTbjenZJierAhmQ8MCnPkgMapN627JbUPEugjtVdidBB3fcWwhx8dVpzQqW171np2uwmh",
  "key9": "318oZ1rno5xPutAqzuZ9MFiDRLQnzSxRAaeXinvsKVDnMxaujNY551uCkzaZxcK8xkPF89m8DaB85oj4rSkPQydY",
  "key10": "39WQ8xj9AfXFhiTBNsUH9feq821NbFDxpR8xKtFM4brGAR6y71piL7U1PpVqzEioVgUYnhTXK3vfoqFpN3dWfG2a",
  "key11": "54FtTLTo9NBBzwVSRnuxo57aebMdXFAzRBWEoQuZkLAK16uKA4px9K7LEkdr97a8azj1RPTt3qz8JfKE2r19Tm8s",
  "key12": "53tyGuwRbh9xSJdKGXnw8KsjaKpzk3AkP7xnoavNsLf4aYkshitXzW9EgiPE42Lqejfx6xR2Mz1teYxXXrLYiNAs",
  "key13": "3HUfzuAAKUC7kmyS5LCssygcZ5aG8V8MdKwdcbXGyNht6DkaCrztnXDURQbk49Y9BLP89DXWQkzXdUp568BZebxS",
  "key14": "4zAw6AF99LRFLYcbfiSrdS3sZAdAfq7Ev8MxJTebJFAep4ALHMyvQtfQn9hnr4NtucC2WQvSkYPSVgSuNBQqCHYM",
  "key15": "kenjzQ9yturmvSW3S7K6KMU4BnpCFx3UhF7fgtiGoF88YP7nUbhgiTvKHJYNgg2eDWhdb9XX5wA7cJ6RxNjFXha",
  "key16": "4qz6SGEWimpPjxDTCc6YzfVY9wkPZD3rGgqzTeRXFA8vXXjWAoyuAdGUyy1S5E1AWx7ZbA3cXQpaxpYNSsajYFQo",
  "key17": "4wrTF8gwj9NPD6bgFzytbvWerhy8TFudNvxJuBtreKpW5uBZWkUph8UfLoXdx9VR6dUyYy9GHgyMEwFYtFnjsuZL",
  "key18": "4ppB3wpj1sHQhAQGccBXn4p3Hv4uYkGJU4b5LGgNw3zSDW8NxVgMv2QjRZt115Sg8g7kzmY9QcNEYvo9Z1cQyZt9",
  "key19": "2FiriTcgoXsQgtAjXXTgECmUPTDpE85dGgMJUofPwJNS1ecCVebNRemwFHVXgACgpGtdpedGDMVDA29ARpxEjUbW",
  "key20": "MtyYrMEfMUEEyx9dj68jRhW2iR4Y9a7Z8pTQab5pnsBQS75WGP9ybZhaPVH9P7GR5XYep9ZNw3XvEooGug7vys4",
  "key21": "3eCjtRNYnip4exaFz1czMJhWZGxyXtXXzeMXNDSw96hSMAdMJS5eh92B7HBRuqqqELNqrHf5poc5BqBEh1muYSau",
  "key22": "5jxPjPx7gGUdLzXwrhbXFsuPpbZ7BXEBLtZTvJQqragbARyY9APMjtZ9w5Hks2vT1WoQYAEu1Ex8J76RagUZ484Z",
  "key23": "2HtiVWriqoinu4YQmNTeF4Kbmh6xCXC66QAsLbZ3aMEuLVNwGviDTkoE95Rb7ZJgZEWtv3RNgDHcA3MS1kREWoUH",
  "key24": "3BtZE6L17L2iB1RpMq4ftoPdDog1A8jg6VKgbNgmRW5xmsy6csSJE8g8UwGtU9Jyat19AYS1z2rMtFUzKogsgYC5",
  "key25": "jUChPGWmpZ1EFJ1nxfPnKNiMbFL91bCwbixvLQir5HFCeZPAPRr6EM1gP4VXwUpes4cmp7Hkpt5LJqM6rC81nWf"
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
