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
    "44ASaHRhykKwNtteiP8zbgtmRiskETpeDieVEdz33mwCNWdtFQDA7PBdTk2PpcaZppEn9Jn4vwiVmmk7PfMvXXCb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nfEyi3Ui568CarnSre991pWprL7WxiJrCf2ReerkmUkDhSUWADMhpLXtoec8VZ5STCiowF17sTfsY44JzHZZMQ5",
  "key1": "3PAwmTpHdEQJNWrPJXcQ9s2GeWG4vEKASbL6P6cemjnmxMwJhAidUXdXWVHiHzq5BvFpKNCdqCQ1yc8dEKdjer2k",
  "key2": "27dZLnrVM5vsRhKBpe8TG18gNThgHTohaS52sn53T6j4APgm77nobpyMAMrzqpEE3XTRwf2nK2LCKZBLe6rDnKiy",
  "key3": "31KF9TZe41sgUyq53EcNbR2iagM4LcUpE6cXm1rxhipk8qmKTxeBJAf39aYofvLTiLWsrVguNPdca1txf5CnEJA9",
  "key4": "5JFv5jXBJ7yDti1iA6rjKmPsnhJ8TqeByka6FCz6d6ffERE8rrCZhE9XqVWjwktFeSxFxN8ZAUxExCWLRUXnPxyZ",
  "key5": "3fEupCWDfsWHsYFvwjZ1NrEGBF8EHF2YdgfvVJbGHX5UTCKuczHj11xMb3dfq8Q8Hf5XocPW276LWqfUEBey57bY",
  "key6": "5NsEbnfekkxnNJWz2983oM3pvTAqtcyfDu6h4o2fGA8iZnUz6FgrJ3fSXyPHdLUtQucWo4MZugrFL9m6jSFyaWw9",
  "key7": "1hjL5wvSEys3mzVppJVRJPitoA4gJvFytShSuAwqdH5VhxAN39ABftw37y6ce7CPqsYP3nbmNRMYPwUrvagrgvs",
  "key8": "kbA4UnqqTKZf1Mp5cuw48QfXh4HAPV7RXjf3WiKuCNb6JnqoXtq6dUujDgZigXj2BJtLBr4nm1i5JW28BwtF8uU",
  "key9": "2wV2s5XYBNkYQxdGK9VRBPH93EkhZyreNssqA4F2xGvprYddYHuu3v1d6yK7RX667VyF1hjMi8bMQDCPwv5F8vrY",
  "key10": "3aGKxZQH57SB5toeA7hesfXq9TVpX8bAsnEiEb6gf6EuhC8jWMPKw5kwLFphHadqcoBegkt9R4gbTZ9g3HFKCXuv",
  "key11": "3CmstRq4jx3Aomcikni2wWPsaLEov7UeVW3M813RuicEFG9NBdLSHmt4k9unsR8bGxo2pJBJxpc7e61oDFxKhG25",
  "key12": "gLx7h3Sj7niKVRU5aT8qhNNsSBohRXUMBkmpMgcR2KzzEWmFTQP6Rx6EgQechShbfNM3GgWZhaqtKZbCrYjGqUm",
  "key13": "VVR7thm16ZNrECu5bAwBm4yBz8AXp7oXmHGTqza9UtVbUmwkoBYqqskvNRY5N2MrgS4GZidMHND1k4Gf4vHFrQ4",
  "key14": "4Mfm2GK7LsFZk88kgA18t9Nt11KjWA6wm2shtjpDDYjrMnQCAP13USXjidKR3gVtLBZ6HFqmJz42CF9JGeHpALYj",
  "key15": "2NWfcuhu4BVHfFSkdyyFcqQYzxaz4CtQ27MvdTLDEtmWD8bhcqAnvjTxJmZ1tSkSBYNFHK3i5skfrbewWK5Tq5hX",
  "key16": "44BVhE32L96Nch5JhRyi3EmhEpJvDpCoKsBEbAK6NaYDkhe5NLk6tickd9Cq7y5b5DRkqnGo2wc7oacurFyWMVS1",
  "key17": "5RomCMsGFQuqQ5ahVqo2qfTGNbPANFthi2SzBW1nmHu6VbvsjDxmEwCBbbXDprAftFTPcJtjGrBF6bnhChAeLKdu",
  "key18": "5zogQ3FokqJg21JUoTE1CvS7eYXCJjJ2RrTWGHTkMScRDMP6d6SRwzduCmuMXLYjrJaRcah3aJjUe7yUrKrKKEtQ",
  "key19": "3qHgGgePtknNHaoKmbFCCrwaNfE6jrMf6cvfTDBdwBQ9bfxqkwSwbHvTc9HkH5nZ2ocbmQRtdJr7hd4mobQUW7bu",
  "key20": "3KZ8rugCU5FTbTUgAS3zSQ23uCfvUvbcKJz1twvsK9hjLgVLFgeWbpPZowjZXKcijY3VMbUGdovKBUEKQ6L6Aadk",
  "key21": "3h3n7eGKpsjk2ipTcByEd9MaizxtgtzcxkzsUQeNMBwBEf42vTc5crbUsuKv9BnLiLpw6NZz2ufFravNzFgHGckU",
  "key22": "5MnmPQ2A1YYPC4BShsji6r8rhmxHgtwMzh2Ceo2uFwHVwdvGJNNqwwWCP3WuSZw5gJQKFTLHoFGmsjf7TkwtFrAj",
  "key23": "4iUfVvaSNgHFUt4Z4AgJ8jJ5SqPfqdW7EkhLhp5yx8wQ8sgaQ3bWxToRMiStyTjRQnVTYcuu2jLVQWwMEW6gVTfg",
  "key24": "bF3D6v12jiTkbfvfEmcAjYyq9rQZpbhUjiPFFyGqorwxLEWNwmFphFLZLb6bdJttKRDpixmSHiBBaehfLJwPsDo",
  "key25": "2KrJWBw9hAkp9x7yuwfUBj4c8jTjCFQSjH8x1Q3VKq2VaxhHSPNmBfFvAT1245nub6tuDB3ZMXWVmujAUTCo3B3s",
  "key26": "3KHxqqaFWvGVMLkHP4KoXfht8y8bYRo8STZxcWMEuJRHNr55jFUxE32xC8To9ggcQ16pKdyE68nibaZfTbge9e55",
  "key27": "3hpGEnqmvuJBigxDiqonHBjFMTdm415ooCtVv5U1KVqPbwdxwyFtYZfx4czX5oonkJNEfNBKwzpvbeTx1pXLj8j6",
  "key28": "3sYj14BPNCMBfaCiXKSZkBm3kA4He6JHZrMCYdLD4429zkcrkmWuM1VGYmuJMu4LAsHuT93vjrekoKtmDJpaXZUf"
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
