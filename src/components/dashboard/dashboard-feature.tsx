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
    "2ChFCnbcmDFHvkKPfffbNs8kC4vkT9TnpQJGoBAoWim1pQ1HsDP7eKkbcUwb5EpKbjgnDoPB4cNN3SbctY6WjpSP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jYQdtaH1V2r2wTQNEfnTEchRPCbVBUqSUu97ms8XwCCYbcYEpWhcW2H5LDi647xej9B9m1JCSzoFQ37gZqxA1nT",
  "key1": "7TxJfYsnGjxmprBCss8XW5K1Jkn34XoWYq7W61cX1RcjkQtqBWuzMuvCcqqcLEQL8ypTuKvsQwxsmNeBTUyCNfN",
  "key2": "2voDAbxZGK2BsxpWH7qLVzfhYf7dDvVmZM82ehrNWQkW7vAKtj5hh472aqqmybbY6Ti2LMV4pinQrQUjfhGhFwhh",
  "key3": "61H9vywFfDczD6erUHKhRJZ9KM73KvdjzUqeonBQb8yxFAgPZ8KHoisE7JHTs5R46GFEvJGLP6p1po86S6LcuRYT",
  "key4": "5ryJVeFMAigZxy4EU4zRweJX97cg3yRMzMdNQf61VZaR5FM66v9XHBCtnSV5UxnopV3C3ustiarPYcv9RuWnmFyc",
  "key5": "wjJHvDLLDDVqeztyTqhGAvfeXwdR7bLb7akrC8jq6Uyi5CZi3D1tfJDaRR19pRmmT3fC33mYVVw4gPNH1N8sFqN",
  "key6": "34A9Tm4VZQDcPZsNJSpahoQZS2kywWoirt6AQ6eAgZQGDdqZrjaZy7op8V34YtKtJUAQXtaQ2BWEkW7FXi1YpLRe",
  "key7": "2k6n1iG87VJ6KTFGpzKH6fMRbYSeCm2p5JckxnNJcQ5GRSacg4kro4qzx2nKwbTpWimzyCXZWowThBHNwrfAoHNy",
  "key8": "33AhZoGJqY1QogXu8dbw47kudnzfMRa5csgr8jELxtgtQuPxoQDQ3aSrPHKki5m8N3GXBCoChHP5X5bNUrqmSnUk",
  "key9": "2EXRiA6G3Hxpj3uvsBNc9TVutaqWp4CgLxeaB1Pr2tK78d65xgAEkJimLgWYzEWpcLUTvVTEv2rwUGE6Qb736USH",
  "key10": "46jaFAxABr7GkUjU6HUux4RQA9kXKryZcihzgj9NZPvugdb6Nqy6ZdrLDPb3afQP6hCLbFyxqrHE6uda9GPzRg7K",
  "key11": "5aTp1qLogrCTkyctavEn6NatXpMAk7XoDKrURCCxRpcsRLBbCZCz394YwuhmvgAeydZTCCEADDdEc39k57cpj1D9",
  "key12": "2PpaXWmosdJt7vWppm26m1wPBf2EaUZZXqhLvDtnhP3Zc6i6s7eKVEix4MkRC7FMkNgQjzD4SMY8TXYdWwF6Xuwi",
  "key13": "5uzSuPXC27391shJqTFDtQ7BibVutzcUx4PkUbFJJswxCxFULn7rNB865jyM5nnhP54XckBBTJ5SU9zMTgQwksy1",
  "key14": "mkibjnkY7Guz7qQWy5UcUeLjcgZizumgH3AReqc6p9ML6KwAaxuFNef2PdXkwEA3t7Sdod523kMDnMGZFmP7d3a",
  "key15": "2AdC1oGw9kkJG1v6cw2DTraZjidB3k2XQ4Hgg1nveqcKEUD16McXz4KetEiXqi8NDmjYDN7zwEStyrnSHoNDgHEJ",
  "key16": "2aJZ42f4kHqRiurxACzACNRVYQom6cJDtKPzpBsJ3mAMB2pwkHWajsqhCo776xWYZQ5cDjzRePda7sh5nTQx4QTw",
  "key17": "4FDkgEgij4pMJFiVv2kvmpK9ZGfQfzocMtL5dooA6B31GzJg2BQD9GT1XJejGK1Kej7TPMtCgbbe1xvmn71ofAPf",
  "key18": "5hxvtXycQ1zeHUuKJiY39MPMzLNF5hYugqM1wN4V9FKJFrrbfT2i3jWJq6LRrTGk2P837aEQgWWtHAJFEvNTg4Vj",
  "key19": "2aEfUQTrQkZ5GmKNGwA3hZwE6viHSkHUmqa8PAENe9vjHSGvTE25vgPUgNHq9ofkJr43YDGrozeFtMtZ3HMjNQx3",
  "key20": "2AFyApmFohL6af5pU2kToRoP3HjVZypcJdbQctSP9SK4r9JYqRCggZ71Eif8EkvJtvtUq7ynFBwYFQeq4WE47UQv",
  "key21": "5WCUZDrHKaXNXYvfruZd8mKsNaM53K4PNeTHcRmN7hpdgujDEwPoQ9bXMAzi6PXrYUQXtd5qPM7ZiwMYT6gfww7J",
  "key22": "51YD78ogf1SGCiHn5no79FFsBaHDaM13cUTaQMqL5gTsJi9V4EtZNoxRLfsReJCJzvr7roy66jEWYG4hZRwGoXTJ",
  "key23": "62x9Gf7odZrXoCgbYKuDYbRt4P7bXk3x2FWpjijdfWCbPJh48k2viY3Cb6mzxsM7GaVXrZMNrLbEHNr4dBcaqbcr",
  "key24": "oT41udFRRwyBdCYR8RnNRSerBSCG4PHsGJmrDzw99ksb1MkAktian6ocQJQrFYHSANg1HRVPi7Bwd9pwfmx2R4E",
  "key25": "2Xu81ozJWkdgBntYc4dcztVfKhy1HUyJnzTWwNqZGXGnwKJRERvNg7FaG7Unm5y6k6e1qkjDoZpeiiB549PeqXaS",
  "key26": "5KQDLxfLSF935XeAw8q4JY3oSc4dBedxnTCQtmhLo6GhenzvZha4KfKKzNyPNtZc5sPPancT3x92bijC4Wci89z",
  "key27": "4CAG7rwFFERvRC7kS1iMf6MkLdQYvRfAdumf51KkfhmJicHN96nXhBSstirz9CjhRndAAqAe7kxJisA16CLUYqeK"
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
