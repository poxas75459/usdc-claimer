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
    "47Mudbw97cgDvFyW7ztwNyf8NDrGDjkHqmF2UD2dVbSV42sfM6xUi6fShWgLmhRR7VzKoFA2ridUiL8vVfUiudNV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PsFNu5tgicJE7SPc5y5yFpNm8ES1PBeGprbYzzrpbcgLM9e1ixmx71rRj8oCCdh3yghEYUkXKnWgidZZ8rdUawd",
  "key1": "3sXHzxfRGgntnBLiNMXi5rLqntaXWqgYRB9eBgb6F8iTCnwkhCbJyS3yqjd5aHNt5LvihKmgp6XLFNyegsTT4ZpT",
  "key2": "3JtNdz89udeoPosvXYdT1MVwgJw8po83a3hcgetPYWzya33LtpSvZ2QnsFqAVt4E73zdu5m6kYH2XJJd4Hef3o9B",
  "key3": "2W6qnF54Gq37KR6qM6m6BLEjpKZAQNGYRFbs262AzFbWvduLDFQ6kD2iQTwUu69PdcgMnyd6NRoRZqEFCHgGiQdN",
  "key4": "B1YLn3uUK3nEDZSqU1Y5g8CjGVH7AekbG7rhrvJxLAoYQNUECE13cj1Zmft1XeQ9pL6xEKETVcpHrhqsy4xFkas",
  "key5": "b1Ko89Zvp2npf7WxtWQJ1r4N5gHo5YPCBmYDmdczF2SsvKqka7uyfgguFchpSmUCc1YEbVpjvjFFhfdw44GGppJ",
  "key6": "24yN73GmYrAg7drGp3fArcLmkgU8AhZPPhDmBQAU84ksZAqWHdSzi9S46CwNrFTczTnSPqR2PcuSeZxQhZgvhunP",
  "key7": "mc4ypwdoWFJas43QVrj5p7VdJQ8hWtbp3A7hNqQrw1p2z11wvitU61N6QZMnujh6RiQwKEFK4ojowzFe91b4uem",
  "key8": "5LcWNf4ArABy6eG1iemKSVhQgYzSW8UaLxBUp2XByGUndqSt9Uf96SYBf1sygoh726n3STwEswxEeEwLDFiZCcpU",
  "key9": "P2SioUnaPfoQfCC9d1JjKz5RY1BdZQiTCUCPYCdCzv5b1FcmcZa8yaWd7FWWYDAFDdjWi5b5SYGhR9ULs921pgn",
  "key10": "5nbzug8C29788QuCfjfKQaLt6iiVVxeZV9aJnS2uDjjKckNmLgR3d92bkXtx55PEsRZswaHzdQToz2pZnNed82WA",
  "key11": "4RiTSdw767uAfyg5xZJXMLEyjXMXc8e3qWoxWs4TtKruKN54HQU7ZxEZ6d6ZpuwWPQZsHHCV1JdY3kUNViwQxFWh",
  "key12": "4KEVy2my5Ap37uCeQBbN1ThrAYQNMCDr7yNd21iNQfDzoE6cbcabD1jwZCFETQ4bsVzxbdihAE2DQUx8rjKie5L6",
  "key13": "3HvWLnF4uYghij5EVZN3XJUU4oA7GW8LRMmsnSLQS1Hep69awL3bLgAN4JnMGExSHDAanMH1DAvE7YYsvrknUCKq",
  "key14": "qmYoTZf6Rb26R1uEwqPtD5t8apLBDpz2mL2pjJ86kNSnB9R8ifKJbssxQJPUCWbde2HJLvHcDrBcDWEy1Kqkb4a",
  "key15": "56aAZNcmPvtEdaxLuh3a1DBVNxkA1uoeWN6k7GVVx3rUU87SaUSQTBH4R3jT2L7MQ2kSdjtXZf5mSWtve9G2vwPp",
  "key16": "4bW9nbtjaLd5CZfiCo819a5EzGj41sfZ4vs4J9MFZ2WTTtw618Y1B6tmTdNWHFv2DivhUDXJzC2geMvL8RgftmY1",
  "key17": "3s1H8fcCLF59Ws1X4Z5PvT4N3U4j3S1Jywh2ZSqJdmap7qZASkTycmnzY1rD7oc7ceCFw1pvbp6ua7PEVkADGt63",
  "key18": "2BVfxrxvyBdUnwphMp2jMKTJCZvQmUUsHcyYZacYMFchBpMKX7Gn8oZJPH7GrUP5jgXJzQfvG4u98P1UFJmXUTQe",
  "key19": "YkYkX92v3jFQHGKJ6s2Ze5wPkSWH8A9Mnmdj6621pmBzDUGrQe9shNhbfJ8WWnE6T4Fg9qyC9bReCMwUotmBYKK",
  "key20": "KUN5fixf9LvcAF42k5rPmff2WiYe9cAzye2aRovHLmuefodXMsfv9wFe3dNv6E9JJbjM4L3i5KjZCmYdW2mJSW8",
  "key21": "4W8GCAcqswkHwqSKHeHZnunL13wZjoeKMVcfo3tZungtmiZs6EdSpFJQvLCutL27TxEvWXsnzsvs7wWdEEbRdp38",
  "key22": "5LcSeH9cRJ7XotmEkhxFymCU55Q78YV6oZHR5e4EqvXJDG5KeNKL7ESHyDN5iXZ2kTQwmu2nmUXcHpEDtbobpV1X",
  "key23": "525wb6FRpK1UJov3tSNQ5nGWZ8DdewLU2dbBydnwJdTnisuvkNzCsDEtTQkAzdKEeZCCMQtHhzwS1vQwgLzzwTR2",
  "key24": "559tCKa7XuVePrbbWArY2xtzU7QhffJt3texyAdj1FhzzwajH1j3UCj7JDKhig4Y662Cv6oynDzs5srQojApGJa1",
  "key25": "2h93u97Zdfpn8iEo9GrdpKPJ7mppXjqrk4wtYcfJpwym4WZUSeVpxXeKjGj55JMDSnDpF2fJkzTGFUBEvnyKnwWH",
  "key26": "CssgymwbyESs49CvFnHZr8SLYQWmzRK8VmzGHB6F2MyBcpkeaQzEBpPgG9Pu45tVZesZPitMLsvtaY3mVA1sMri",
  "key27": "2UqYTEfmherFsT2etaNgCmY5kw21WZ9BD8ZiBGKbyc6YhSazveu8eq1LbFJj1GBDoF13CxUXxoJH9X2o7xjUuBfh"
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
