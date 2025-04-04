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
    "4JyL44isamWQkn6DzLH3MLKvBj3w9L9dJw1Y8gZnrz5JG3Hrepjz9d4R798WRYDHHrWRBDMvXk48fryJfPyheqRS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43r1wrWXxZbmXeTeNyZ1g2wVs29uLxc3AcTUEFY2SkH17qANX9gkX5Cy7XGso8tBzrBcwScPHg9TgdN6NjRiWSii",
  "key1": "4ULqsMdhFNzLD9cR7AJRUC9Diivxzf7KqTLXZRXPWVtVYd8cNYDu9sw3C6mzfdrb6EeMxjPfBSg5xvnzsRMzQjRg",
  "key2": "2Zxmb4KgEh1wYsQVTkAujqhHG3E4NETz5vBhhxwJ7hF3FYZFPcxhPbybQWz2tYEqvBk3vZEGjPBhTsEU7gHZmgPY",
  "key3": "3762YwoWTGxYGTJ6RVnxbEqCm1eKzKHY4ZjituoRGEEGecY6Scc9rZkjXiy7EjBtU4GaCHVYJNu7B25169P3F2DX",
  "key4": "2Sm5QBZs9vKsGMw7oVemRtEafLcqWJKbahxAaAaaDBgAtftAJD7arsK2icpESbVdLAegD4pnvwPDtT46H4wDNUK9",
  "key5": "266u6w92Py6SkpDPheVZ3g1HHWizTkZDYuF5XmSLdA337BJe8CJaoYhkom9etHoEFLRD6v3xf6NQJQpiFou5En1t",
  "key6": "4sqGAAf6uuH7rT8DciBHTTkpnZcNdJ2L1HBjWbPmv54q1BR52fms5KgfDCg9Nvfgf93P5P11k9sVZswMaNjuWZgk",
  "key7": "36vkPeiDXDvXoGvwEDhBkerKnQMYAcNVeJv4QZGugTjUeYtzfBNXw8Uh8dCA4PWumyzgUeL3R7widt6yvLvXJkp7",
  "key8": "2t2GPggs9obWQajZzQYRxzEwSd7aN6ajmX3ABrikvgdXAxAGeKyeAwmzzWG7mDS62Zt8rB5aqaArwqimLkyZ8ygh",
  "key9": "CEXg9ZhaD4VBTkqhqtejJhRkTt9sxdxVqvMcCsgZ8vPcxLRLqxpz9a7wXhpxVR1tRedrXzLfEuH91YZYcqRzZxw",
  "key10": "23we5PWWLdPYE6mfPUGh1GES6ECLQvi6Vmiyi3eyabi5YyyJQZxupW9zGYcu23fPusYpgtQmEJH8jcCboYrfLDEz",
  "key11": "3R8ivWHwq2RTGw3vo8JMYR2oJxkeEx9GsMeRtKoG3nvKc6TjpZJdhbHd5WQVH3BL7iRMxVGZr2bRVzWYz12v3p5U",
  "key12": "2LsS23ASww7fRBXqUK4Vo3xuuyMnkdoqGwgserv9GHzUR57gPgTofnoEAC7mE4tUqt8KiLmMyGiTFcGfJPeCE7S",
  "key13": "fAahevKdbxQ1i2BBLhrLPKLZvMjBppc1a2fuw2Mm4bFCabYvn1M7RxmbMYZeDVcqfNuiVhcKwnznn2uvwZJXGfG",
  "key14": "ydk8svvnUqCtCEC3WQdkgRhRPYF8PRTvSa1A5x3rEPckbAwKcuD8HnFfzFxJDxV3Q4gavWzCWtKrG5LHMw7sF8e",
  "key15": "52wtBPDyfiRCwDC18mheaveerqQ6Hb2it9bfgjmb9xFUQKsskoh7k4cs2XJrQgtXirCy3qzmvJ1XogkXgnNLnLjE",
  "key16": "FVET7SwQncsmqLvBvdD4eesDbYrEEzqbxaEHQGkCo6UJdev1sRAkUixQ3VEZ9ZXdGdFDB8dLPFsqQM1RZwWp4Kx",
  "key17": "3sFyhBBwLXVQqrufTT4rwDDod6HS6EHLtgcD5VNpanYFU3iK2DZrKBXwFNXppS5rGihHEjdH3nYHbaEUcYJLdPi5",
  "key18": "3YeBzRRUBUkCyqxic6mTm4ygsk2fVurDUbQcyL3aRDVfypHwHxkVdnGaG15Bg7c2vurbZd9gabE6y9EkZQM3mvxn",
  "key19": "5diWkkMbfpYMYj3UUvvZnrfj76X9wCUd6aEVeYnQjKcTsweSuvK8Ud1jNoot1eAYr8wCwAa9SJ9nGm8uAByTrn4K",
  "key20": "4SSshQ5fa4MYuJBA7NUabFfUTRN9uD3VnBxk5r7MVdw7q8KPMDGBJuU1SZHS5BnrM1XBpsdLgsnJgyqK5DifihyW",
  "key21": "5gUuJtDnFtzsRXKukvz3qsbEoRY7AhQEezvYKmWSd2R7dWJvSGupSZPNaxyKCjms9uY4EMToVUhUWtUU8FJWaXBu",
  "key22": "5veFKjGXsUCsPngHs3gRUjG6vTwVw1RHjbf7qEGkxRDh2dSyMTbooFyZYg3xQpTZBJ5AVfJcVvAJWdoMfiLaWRDq",
  "key23": "59sFabDoorc3KqQYGZU9QAchC7wv1QHFTVtcbt2xREuDALDBQe3v6qvCKpPscRAavTqFacRFFBjHrCfrhF4w2EmB",
  "key24": "4hs5JSZQZYJVVyWddwQr8YLbPWQrTeHvVCkptZbXzBvKHNkruEsox7h6z3g4ttwusm3g8nGKHT6tfQC4oFMDVUpM",
  "key25": "62XFyNMhLk7V3X4butaJtnhkts62zAszN6TvaEouBy6CTkdGmZfH5RFM7rj9uLihwUU8D1ncBEvXzC85bSVe9LS5",
  "key26": "5ZdSCyUeS4jodbuc4xPD954SN4unb2wVLeihcMvLwEgqNcCBG6FQGTMHfZcnxVoBFZWTHFHpGaHUvaccUWJbc2mr",
  "key27": "4yf719mPTnvea4uUBpeGdz22hCSZPaqpyai7pNPdqyWk1b3PSRxNT4Nq55MMUVEVZ9GLHkrz9TTynYt741RDiMSx",
  "key28": "4PkGSeSMsTwCmTgWt5r6wgp4wX8k4K32wgyfWkacH4oCFt2n9nT8YmfUC1thmbRmifkoPYUQBgLGPguzb6fF4HTG"
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
