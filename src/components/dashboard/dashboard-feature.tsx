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
    "27FADy13mNtiv8m38qsMsFvSG1vSVGQLAst3XvnQ6hgptqPbSW5PFwgwiwSJDbrrx3uM5y3rEzw2KzynQXWJWvPa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47spiaRUngK2rQQGZdYTM2GSTrWwR34WdjokbESizoSTGsa2aYCjcEubHAfapQ2M4yYnjiLvD5aANx4sNVvRAzCU",
  "key1": "25Aif3mbrZy9V5WNkpGbsh3SvjWikSnH8SdQW1f1SQvCDVgsF7byJWm5eM6GEeMLXRfJvWrgUzuPv2sstZpNGUEi",
  "key2": "45BNYaYRdikypTw1MP4uP7foUSw8BtKb7ss2sbgLPHixFXa3Fq3LNUupiKMF12aWPQaghJ9VTLyYQAA3F42Bv3vH",
  "key3": "3zi5fJEJg8i2oerQX5ZuNPG9DJEzr3UuP2tGWKqY6znEjkdckTEzTppvqyLWVYrJ1VwUjFY8EkG1dijjoNvHGxPX",
  "key4": "2dZfirFm75FAJwjrgdAMgRiVNsEsjp7DtUZme1G6eNzNwB9UVA9mpCrkKfxvk5gEqjLFBE9Hqj9UDGSzhi9ZiiTN",
  "key5": "4bXLCD22HXpARoq8RbSZTgNBQGqxL8KyaRQKUMoj4GKgvNRKhPNYyikeP7LwYfAbPte4CG2oo6hhnbX7fYAVRTLi",
  "key6": "4Y2dfMz1VX653jLW4rBjM3FMi1oTCmSeBjDU87sqpoAvoA7QweMYbX4CPGhnbfgDsCXwyBTMGoR2sjXFRdCaUmsC",
  "key7": "2qQPCxs9xa9vagjfY19K5qA4BYwGpqJTdLyjeStifG1Suh9JjmEQwM931QSDSohLPWhPM6yG2azcFdkSsPPtoSu7",
  "key8": "fZnTJtTtDfQqAr3gXawombTfQn8BDGr494nDGwSVFDeqvqoXoYBW9nFsa2zhAG4KSjVy3sfTF6BHGLgyFVV7q1M",
  "key9": "49u1sbQMmAXcZokhRuiJm2B7KwQ7KnP1TEMqWupZ94PnBbEAjphcBiMJdNM7jP1Q1F1H2PMvSwnvT6oGVYSNABN3",
  "key10": "3wpsurCrq9nzX9Hfgtvm1dKrfj5dC3wWLQuQeCdYvRvrqgNpUEyjxJeyhcY9geXRUUcPckYQq4pF7yc85qxrf623",
  "key11": "5syzF5oQFmQytHJoH69zEJcxFDjzhsvUdn36VyhcgRQMkSSMdKeFPF44rsNxhnE4McpkWuUAVmba5QNP3CdNkrX2",
  "key12": "2AAtXQ5pHBVXh9iH57Se88iCmEovM58vVFWrxiCL61sRjKMm8T6p1B8dhDxJz2W1KT1JTE5TCVicoysiLFEch3cK",
  "key13": "4KNvPDM19UFXrrBxGb48wkeD7TsSaEsmHn9GGjaZHnbLozo4r2qpQQin7fi2wJxaFC5gLWB2pXDxS7NBX5WuMzrz",
  "key14": "2mYJcBTKQg9Ee1kEALNkbd23LA4dSKMkbbqUh6gJj6YtNoAVpD9wg8nZqA2JKcue6PeSbyoJ1Nf4NF7YNVNbZGS9",
  "key15": "2zYy69U2CcRkCQ9cS8hXyxHY5hN1y3h43Bj2pHsFY5MWGB3pMmyaNWFBzEhXEDeR9bmAohycFwr6fQAc3NKBJe5t",
  "key16": "2JBZCFry6JfAWu3Zu7YhEg7az6e3xzPooi7ezp8DFdKqaMPvidsLLhFpzRomrK896HexaSrZEYDKMUM3WksJzsoJ",
  "key17": "4MQpaKagBHHxC8wJig8bcLkWYP5ZuPytpaJxRpj7PhSbtHSZpDKuEV23bnCsvBQqPXbLXG864nrMhukwnD9m51ZR",
  "key18": "3ALwbsnEuZvBTpY9HC4wcKL6CUKfMoyPX4sJfiDMMYS3AAo1v3LfFm3aiBYUvE1detvKpzKSgFYHF5bjc2Q1w6n5",
  "key19": "4yCdCHXXEHVmrLYRFuxaweJZP14poyzUtpqH8q9fpqNtuCiivRbyQsJ5S1fLDvbVWyavvPUD2tpQQEy2GEcFiT2p",
  "key20": "XmxndvkM7Jpfc6iDhF1JT8LPRUTjJxBoxZBtDSw5aGB7WtVEVsnsvCaWkLo76CKJLPWPT9L2mwY2TueUfBARJPZ",
  "key21": "5eduzXpcbJittxQ1vwsaRZazcasKbDVMEwFoQwXbN3giqrXbjx4ovbUHfzb5W1PuW6gcuW6qZ3ErGfAHt8VVzYai",
  "key22": "2zRWNai4jbcHT6DAx9aW3rdP6XAPzPhfiCspaYCYi8ohoUcf2XtnVhgGFtjtoh9CFjpwnxcq3ZpJEdDmzLSCYgK3",
  "key23": "2SXnT8iVgWKPntoQNeaiaoyA5dWJVP2xkAm42U4bsSJi69g8kdgx3EEJoWdN7MwwPpwa9xADNDRiqFisTQj37tWW",
  "key24": "5gHcKiHnn167JUAE8HrQAHef11gFg3bDckZiR48DeWLWa6pZPwRkUURGq551SnkqmWUKQD6stpHa8nV3iaTQy7EJ",
  "key25": "4k8Eyg63qGV9HX2uftTevRUKdcDkYRY2a5amcEgsFi4L1V1c7aiLSw8Xw1rors2uh6qefWBGeGyZ4LP2aWXkTpoo",
  "key26": "2oWNvZLPQKLfVgwC84SxCkc4N4pMbTNALLs5JxMxU4jj8CCEzSJpq63h859qRLb6dLqwMgQsGZe7gEyGPVKqgqBC",
  "key27": "2vNRsPYVEJkXLnh68UcRFed5xB4zCCXS2jq5kKTrZYt4oM3rUEd72KRT7BT3WEqaRv2MfNW9AQZFCjoVZSscMePj",
  "key28": "4AfrpQLrms9qRepMpxPisEztDNDNHVvq7g3BAk1CvujssePmUe5Tc4PzK82MLbw3vbXavFtdcdnBV9u8MihojYHC",
  "key29": "Bz6uphBqjXzeE8SnbbEiriTPqBUvPy3njtRXrGuv9QLsGLBw43dUeKrMB3JDt7KSLjEsDKduQbgiZipwDobKo9Y",
  "key30": "36HyHqRYzXdos38x5d3E1NNKAtWM3ovKBiWdey4s3mnf6uP7K9knBkwLG4sWsLR5Qsi8WyhWESxVxBPqcb2UY3Au",
  "key31": "2REyWRoEEHtmRZuv6XHkZL18i5N12oWQqok69C5r175xKq4rzEe1RztsMEaBtKsRWmjhTFtZYtEDTS3XLN73tR86",
  "key32": "EFd4PLXrDHH3WepizMi4iSNCXZkQnChHdFg9oEAZFdbEh7En9JQ5gQK7kvo2rv1HTGKKEdD8Fx2k6p4xJSFPKji",
  "key33": "3VdXyWjex12LqwqqH7UUNoQVMUSZ3LuK2oGxJGTXRxHif3kxaGn4NAVzLvvF32dxn4mpFWSzEu9PoD8NTMv59TU6",
  "key34": "2WexmkpUmQ6DPjioNqyrHZP66h4VYe1c552XCDRoaaFvTs3edCoq6hwmunjsAoWb1WsKqVdkzSP1E44JNxz6a2pB",
  "key35": "5AfLjjuAL8QZea6J6cT2pjMB5o9HK63a4wimEtrofpcV3WhxvwhRNzFy2BHZZ4mbqhfrpgfQzcawbeSR4hfJgxc6",
  "key36": "2Am3U8uq7JjRdAE4EJA2T7vGZsVeS8RcQih4RhYFDChhCgTGZvBx2BmHkLbRRapUYisJbNNG97ABtguUoaoQYYfJ"
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
