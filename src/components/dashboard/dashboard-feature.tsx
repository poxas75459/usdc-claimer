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
    "5XcSdkkXK1MtPRwooNWniwXPcnxdAKG99wXLuanm9rTVPETjYak9Uvy6UrpV7zA69qc7q6bTEdEg9trmW5hS4hgR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XMXTaDQxyV1z7WvrA2ftNBFZMAVrhkE7QA1BN9xxzRAJhc8ihwSE5M4DgvqeWHM4hRGmX8AoH4LHQh5MoW6AXBc",
  "key1": "3XauTqLoTZcC5FtUtw3x55BGyapom9h7xWZY8LXyinfKMW3mCzdGvW6DH6r3kakQG4Z4f3f28XihH3TM4B7b4rYi",
  "key2": "fP9aF8e37SQ1g4wFkQcrQHoxVW7KmTkwWaqyhs6z8ZjDZNwKzu9NMkoUBS7TGay7B85xdV9Wpqny28Vg3p8rSY6",
  "key3": "5hXNvuL6HEauBUrjd4ppcmqFSPBFDpzpUyc7y8BAVooyX5iW9ByjfMsSqVB4ansY2UPaiPs6tcacJpa2E3MGAffQ",
  "key4": "5HMJKs6KcFW6C3MHTEcyNCqpfYGjhCta7iAumuzrZL8J9sysAnWVXa6yR2hmxSA7BGxkWSuzWujYXSueGxS529z2",
  "key5": "rWD6ATeQuw5K2fuaJJcRRHEj2BLicQYfzFeyWqvx3vePRx2jex83Kjc1LmYs2YMtMoQ7XGjLjJo7GyjVdww3GNw",
  "key6": "3e3yjtg19gQPTziieMUtQNA8vaKVUVymnRvKGmZpdLSRbp5pFsFFu7Tuo9NYcnicz1Dk92TyqqiKJFBrMJY7yFhH",
  "key7": "3hDmHt1earNUoK8YxEJGkCwZ1DufkfjuoypboFwqSVBtdsCsAUuJjKkVAAGy9HHaCXnYyWgmaYdkMDAWo6QJMzdk",
  "key8": "55oaV9sTnxhTJm52eGHCGQpaUUsuu6yV4pFwpekCm7YorX6vezYc3pqZZ2TYpec76FBUFxbKbPxPZvHkHUucu7RK",
  "key9": "67ST4ALgEsrmvGQqSiqcPcMXZFCytkhJAYJAH7nUDq6zwJMpQY38qieGM651GTTmqCLgHYuEAq3crLx2gMX8eras",
  "key10": "53AQmKCFDadPPAw6sPFsLUsFKDBBmS7Ko9QES5myMs9U5PJ1t3yN48ViiVbMAVd8S4eNDmg1XdPWHyXjCS1YyE5",
  "key11": "PiqEdDRKXf1ejXraKB41KLrkfmqnmHqKCwoCqTgcqkeCkXPMbjucFiJLNrXCFVP3dJgc4gKB1M16hp49TTCrfJi",
  "key12": "4Fv6NWwndTtGA5uinR9CMWrzf52pxWCXbyug9HZuFeLpsrwFmAYt5BtuYAcMRCbG6b1LCmciN3BpPNcPRrmxCSyS",
  "key13": "2dMK9zUQqoWY4cATKcY3Exvnq1diD9Vt73f5AAQS1SC3ZXxu7Lmrd5fB1VBmXZ6JFmqYrWK7j1wB9E4vthybmruj",
  "key14": "5RJ1zRJMDxmNe5G9dBzu7ALW3HzbJa5hG5izcLZU9o9qXWr4zSQfU6VcXfm2JVpP1msUaLmRtPG5u1RtRQx9wP7q",
  "key15": "2EaqJbmp9GnYxenUE6gK3Js1DfFZ3cqZSyMEyVqU94zHPfyq8vehto3qRYXM63iGHJGPdvvAzuvsza4z2QUZSPyz",
  "key16": "2vMPzGbUUd3pvSBgurxgQrmgiR8WiMx2JuMQNQA3itX2gzJgcgFm18qRsbAD9aWPWoRsci6wqttq3GLspBSRCWxV",
  "key17": "66Uqs6P81M3nZQCMbrWPi3ZuYT24cHK3NzZkxkji8GLar4Fz1bhAhXspr5YhHZtvwgUUrFXmfxwAcNY9AmYWSrLA",
  "key18": "2NPcyxN999r8n1QvsGtebn1DhCgqquAjuiDW1vUsBQwawkHMu4M1hRyoT5ayFrtGKuw7GhQRe9cjjkoFGRF6R3Ch",
  "key19": "664AFSimMbQB6oxFsd3RxCKzzszuioZFhr28ELbdbidGx116FCQYPim5rgfAcyrQWWdXTekfkiGd4AMFme6KUB9W",
  "key20": "4JEUS7MtS5uPaihAeSy1eEWTuHQx35FeSEbDHBZ1ggyTaQpAvavgZ7X9pb6SqcE3FVoENmkoiTu1HKXefFoHSjKc",
  "key21": "2Yn5QTLTg1nt6egkkgZb9ePLHfcdSCbkwDs1PHdLXMeNAyBCwLu9cuuwvWMLpR5Bn64MeSBZe7BgsdHzuSgHFxuN",
  "key22": "589imj7wxbmju7bs7sDmhB8da9t9UyhEJEGV8qV2v4Pcz1ecvFfqMc1UodRUz3UCTz29WKp8sEKp7ZYA49ndZv92",
  "key23": "3HEUDL7vzP98u6QhjYi2Qudapja9WsF4tZJSU8mXpQJWptTMMHZdR5Eswm9D5CCjWiANv1grmRrt93uYKjAPKfrK",
  "key24": "N5p1KwGNd8VWEZg8KxYWYCmJEQeviCnpgXyomBVqQ97vYTV5qgQLQQYaCvaNjdCQFiLaDQvJjShyEd5UdSY7Wsy",
  "key25": "3ZjohZkrbUQJSFD27XMExWMt6g2FHSWANyuKhm6WLgFUEG3nSoxRLa6xmctWAZtvQEsCVT7L9An3RYZ4ghqeWJ3C",
  "key26": "4viFyEQPC1NfQ5Pn1XEsfirGHBtgP8LpqVMewzkywLakBfBvEffLkBtdZxdNRLEzTjnbfZGgLUf9j4p4c7DnK68k",
  "key27": "2oFK3jGFn5NHKMPnNRAfft4HYFm6uqpr1RBafJHcisH5m8cGMfmrCNHTphTEus5q4tQB3c2PPWi6Vbqv8U1hoE8b",
  "key28": "478k8yRRkkoNExqLYMnV8vRh5VhWPSvbA2u7kWJn2i8MxpQXCuTfnTG5aHve2uB2ZLw6g318DrJYagBu54vaBypJ",
  "key29": "5hkyUje6iConNC4N83Bw3ME2jWyvbChkt5YrhuqsyikjrsBDpSNZJgjLiURPdAFEaLmH95YsuWqVsFVE2FKip2sp",
  "key30": "34hJsp4P3eLAWGrFc28HQjrVkn2wJDDcowkkzYMSxdqdeEktusEkLfyoCiDuXUT8EhkgCtVbPbyU9KmTEuSW4ttL",
  "key31": "55q2dgngnQtjrrMZuYcRyAuTm4ko1Xw69kLqSAfrSiWfn3tSZBTupZYZ2ZtcNa7ipcXvLDKEajbQFsYzaMFAZkJz",
  "key32": "JsUKRR9jyiWjfE8ZFFTubKvW44bPiLGaRy86xG6wvH9QUQFV3Ny7rCHgBPYtL2aQeSUyWouovy3KVNKghEvjjtK",
  "key33": "5fwNbEhkF36f3rhFXZodvQjLc1CR3HDQ3ESgfqE8bFTzPHSrvq3ZvXVCneLaojWekdYeGnH5ptCJrCiDpQXy5N7k"
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
