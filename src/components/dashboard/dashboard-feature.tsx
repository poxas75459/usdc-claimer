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
    "2VCnaQtUFQSEEwji2h3o5dyUKMXQkAMaQU2QfiJXotTYuvZ2KurPDzmXJrv5PrVi44tWh1oyZLPo3rVrvHPkKQRr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VT2jGEyjFbhCn6eq64jTdNm8a1rK8HVhZA4fuPCYDjaNCzdeaH6L6kMeeCedaAvt1GrVASKB6tvad8aF1jFoncc",
  "key1": "5zyw25MVRCz9TgfE7WUwbKxa7gv4YHMvGJoDhfSBzUrHFpNtb8DTULkrne9JzceF5FAfbG4iCX2wvhob5ior3wdy",
  "key2": "2WbMm8XPnc2eXwo9HeQ3KSHg7DQLNM6u9a4qd5orVFDYAF5SXZ4EkHJ8h7Fk6Rt5ashgucv6Wu36jBYVJjRpNkiS",
  "key3": "2Q2ehqJwNbvWbYKCEzikEkibajRB2oYYvAaArwiTeQ6eW9FmVpiBSN26TVH8cKFSLGY9Mvc3jkrBYk8ZRv3TTrBd",
  "key4": "52zL3UpXQvd2Q7NiMXFXgLLvDe6UD2jGAWd1HqrHkY7kvUxtDwndss95YCPcQBYvmwjP6wLw6d6CLuaVXEMPmYTp",
  "key5": "2Jq28syT5GmRsgE52sXD697toWJcqk9xze9b2UtBszwLdjUycztZbDxmiuDwyYU9cF5iZNmS8gNBeXKzK16j7chf",
  "key6": "KtgQ6SVZ2kRNxn8hjs36WBL93gupP27RPAWYB2ktpPYkt2tSRTctxEraoD84CiBjvRXZXK5whRP9Qc7sR8Q9oZe",
  "key7": "416mFtG3dmdGPNgGbNUY3Wme7BKGGSBLhbhZeiPgCqdQW3sJfwBBVdqF1mENkxprk3SKq3fa7vUvaKMgio7Qwkko",
  "key8": "EyLk5GEmVn73xueitcAbzkNDGAUoEfiL3Rk8PmUBK2aPuQ7AePdWAwUSwPrDtL4W5qJS4WPdoyBphrMKtcSTzEg",
  "key9": "23f1VFqvWvsBpCgoER4js8nRZgQQGY2qPcdyq6VuYXtBeTq5nCU5MDyV7Y4HGnu52sXbJge2to3ruNXiptM19KLe",
  "key10": "4kEFj9tdmVx7pGzbPBvsxspp5Ew5TYThkt39MV1e4PAjx2QTXkAvacJ6ZyXhWpAMifZhDNpTWf9vAGvyj9KV4fKW",
  "key11": "4XvMnP5J9qwaeo8NvxiqrorrG8267H4Jt9u6bEumFwa4vvFVcwENEzwgAPUhxzMTGQdtiXWEhb7768MthNfKgrzn",
  "key12": "5HCyJoUmbGzwdZ4NyB2T352gin7ipzfz8ZXtm68PEEEK2QAMGQhcozSsHTBjmAyUig3SEza5dxcokrsxoFqKcdms",
  "key13": "8pb6D1pRRgHcTAximryLfsuNzdnJ6nkNfgBNiaipf5f85wZfTGVWXEDoG4AQ9Ne1HoqBurmKnEoBzcR1BzYAzJU",
  "key14": "3aesyeF8EsdkxcisrvWr9ndpbAzrzuBdGE3JBRrQwfqyFAVZnnYD9qP9HkBLkjGxDYko2M5KgEp1tcyxerpAwP5p",
  "key15": "2aKrMR6jnQd8FJNM6gFNkhHdfEen7FywqrdB3tEECsS7hzkzKuWTnGu6PA2QRFcbrRbBhWjiwJgQ7ERF5FAzamkA",
  "key16": "5YePDMn1Do9Lp7a6SpjhokGUPaYzZ2DUXBoerxf2bG4u9TcPE2EQpwArCdhumveExaNgmUohmAPQ3tzRuJ2v2And",
  "key17": "5E9DLm4nCpwC7UHiqpiwZzQLEtst2NrBW9oGtXjXTRhpLqvuGF5C6Nx8v8sE7GtRzMYnCcsR3z4gM8NwevhkqFJh",
  "key18": "3UmzJiGoVqAUyXpSsRCLqBZwnwvWfHA866RREP4hRF63aJgAWepkn8Saz7KYPsJkCv5UXqSPJ21zvZfhhFqkkgu8",
  "key19": "3ZC3UnKALM9JPSn9fLxF8aNJxb2nSsX2SAC7aR5yaEBvpLQyeNdQcEfixvacpUt26SseAorRa1ScU6dS5rwnSa3F",
  "key20": "4YrtGiir3LA2FGz5NKm8Y9miNn7wQoGherjVvyJMmaMmUhCqDnQAXFR17PKMbdQwZYbtPhvnRNzLvyCFFJooRcgJ",
  "key21": "4ztn51GUomErSWhUzH2abqWmXHZYbXhw1nC1qBCLm9rssLcuGWTNq63o8SGvVuwBWRwGnwVstQ8NN1fxLFfkLdBm",
  "key22": "3JVZHyCt6ooCMcacxUoYNk6F3FemVwDg5gdrraJYff1LZUGyYdXpgy2Hodvp3F5adEYdVWo5MtXDhVg2zWW8BZKg",
  "key23": "NddzJx6g1fdgwrNUAryHYuF8YWaaBtsMUgmmatagyJ77Hf39A1EqPu6jGNsLr4uMdBXTPvecBeoUFDe5sYqd3L4",
  "key24": "vK24c9cEYDwsSXdYAJuBSUwUim7wLJJggpSGC7ZN53oQDFsgG7MfFhyKRVFHCUM44Svu6toutjJr7BufNysh3o3",
  "key25": "311a9E4gfssqiYjwkCyurBQVXAyCman4hm2xxewyHUViA4ce2gAoWKDfA2tEDAgmUZfPJsYDMU1BogTkXgHUBYzn",
  "key26": "2jkn9VXR5U4teVt1CXw5TDUqJ72NPGoecryzkuSx1aMwQ1mCai2TjC1RAG9buimezq6zkyn9bmeJdU3Z12S9iBd5",
  "key27": "5emHvYMdmZg9zfJJARHUPamucEVoA8HanFcadrkJ1BEy13wAMSPrX9874pfr6F9kxikeBX6LPpHR6pnKy1yPo3AD",
  "key28": "i6NLxahhPaSNvH5nDs7ywRc1o4GQY7bSMh5ZTRdaqBCauRfDHifPi8Kde8q2WgJAtgKYRtQeQk9SswHTRttwwae",
  "key29": "4NxjyMpyjELzdUL3JWZFxVd6UwxGKhnJDpJF2e2rCJZDbmTNBdmDrkFj5xQXmQ46yD15jmGazJm31WtAZLe4PitW",
  "key30": "58BnRzcDvHpQXZpHC8ao8FKCck6BK6QSNgfUw759Nr7qmbhasYcWu8iS63DXdpBPuTcvYtCtpyLmyyrXKY4SUMh2",
  "key31": "3YJeDh5mMZhcSsjtbSSd8pqDxfH6ztA9qo44ZsWFz1UhsCMQe6h1VH41bNLwmoivBvPEeXLVH5q1STtByLSKj6ht",
  "key32": "5akuDabK7MiXntbrkzSknBMDwZyZWPvCpoYRT83u3RrjvSH4A5KeLjV3uZQUHA1oPubjsamk6jze3hDSPnyr6dLz",
  "key33": "4p6HnmZ74hjfHh89QBfsruf86qmBdZWJ8J69zF2dUbeqw5AGDxzyj9Xy4VeAP25c6SEBPbg5KoCaiw3KsZnFEiyt",
  "key34": "3pgZVwinCEbpVAxJoagtSmKMZFy11omBN1g7D7f4ZS2QPobQSF8Kzq5MegPnakoS43dxawSfYCoz2jjif67Xgnuv"
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
