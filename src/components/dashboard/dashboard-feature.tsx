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
    "2Nmgne5nDqyLAxXSEGRc7gmgfQRnfSjgrgW5RWrvuAZ7umUjWDeWpCmWpChhqFbvYaq7T22baXnz3XXeFW1UHRhF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ytwZiX8XuYfChpHprUPDaGizU39KG984cmtUiqrcaGF3YjuECaqXJwiKYQVqvtDu1ALMTnxK9PHPu7johimWN3b",
  "key1": "42N2sQRP76fzxK19F5FefTB3cV5HkPtQC75M7sDsH3ATtKWe2CxL9KAzXSw8JkE3qBWQuwyyDyXtsk6bzsyaScGw",
  "key2": "5iS1r9fDWHke1uXw23JtzXQgf1DS223uqAv3DFWetNX8uiNLvJzLzMj3aFjVHuwFgkfoStJfHyF1utgfRH4cc2b5",
  "key3": "2GheNST9ShBXEsZUpG7M9wKiG3XzATk58VRfDoxXGnpfxe9ZW25ZGB29sCToiYhF5VSaiUEjueQAgsHLx8LLxCFo",
  "key4": "4WV91Q44M7Z3UgG6y3tA729vVYvjWuddq3gWL6yuKvRF7U6A2K15xgSWVkmiCaNHtArbB5VkFAoMetxpA4njX3fM",
  "key5": "2utcHokv9ryB2pX4Wc8PZXbMAfXmiJ5a7h4kFnWbAaSYBaFeCnCLazoBKGj1Zbk5pnfL2gfmaZAY453PukE6vVG",
  "key6": "4P2CaUeMgiXDd9gUVXzNUordPdjCfa49h2n4f4D5k3qdaCaMv6y6QhnHLZwHb5rfii7Nr5ekSQeB6ssYA18ZwLKJ",
  "key7": "2brM6xUtx15pwaiXMEK4KU59SaKtYssUSFPBooaSNK3skqqnu2kBxseoudEFwigQMszQzpWUaXfBMDzUMjvavuZN",
  "key8": "426bidqveA2E7dpd4CCMD2KYAwDifwf5eMpRFfWNx6CL5PTHhr14UdD9FQYrTaNPQ56oqZFSnhRYwnWrsRpnYYWN",
  "key9": "3HNq2JPzFDph85gpckpTEY5Skj6bFfJXwc1PjvQ7zzVkewuSFJWDut1DzzLAmGqdZD4gMGRdRJNdcAks1xh1nGcL",
  "key10": "2J7d6aVATGBTTZZXv9Q8hQfEaEpQTFasvsHKDUnNhZ9wtmwG2YkNi6kdzKbR4HjkLP8v9GSkBfRU63cnZQgqzBKh",
  "key11": "2UVEoffZ814quPFNu29iBHLthUZR8vCaeUfreW8rnwbtovzdqseEBL8SoMQpGe4LyD7UbNs9CnyEyU7ef5zgWCLX",
  "key12": "pDs8QX2kBLaHSHUujGn8e66ZBGtQaMGDxHU5QhNLVRTrVsoFktVKnL9yMPbmX2d8hrAGZV4zZQim98LyR6XwPRM",
  "key13": "37vzf5JGVVAXGJNq2VixvMtuokyU4XvVeZpqJpPCpYyinFYuvwuXLzRMkSW9x41hXaWoXePMgwPyCRHsrvfmyaET",
  "key14": "3c4NS8dUZkGL6r838ymXGJuURKxiCftejFoDonNXJNcbKQrKQrWQD1vckrtr4ENrwMuVApP1t2ij7fxFfKhW7NBr",
  "key15": "4BtntU2m2n9S7AHhWEFY7robcNr6v7VU8aUjfnma8rm32F2isqfP9NKeX6p2wcJqCKh31qV8RTCxYCu2nvrzwVdF",
  "key16": "25QBHL3Bigd2SGn9f7EtWsBwsES8jFEPcGzedRqMaTiDfLiU3tDPt9mF7bCJVPaM6wKZE9gLm2JfpTMX9Y6eG1kv",
  "key17": "3x3fNB5kxCQFWNqzaskikBpNvevk6a5eRg6ZHNGuC8sweU9DV7hYmaLCAtSbjn2ifzdeVQ5Vctj6GjaygmZkhd9L",
  "key18": "4tzRtCrAVXEptLQQW8Y5n1p9YCTzegzwEFNAxAztE92yhTDxu3jfH5nRcbR8igoArQJDzzwTMB4bcaVaVMNBQWoT",
  "key19": "45ZqCFyp61LunVnfzEGBFoFuRYFUMeA5pVfcHpq8KVLvyy2UDoLj72MkkwFKn5HVWnXAmq9PmVzL3e2YWjAVLSPp",
  "key20": "3Ni8bZKDXQnR7WzLzi82d4fJMPQSaoVo7AvnsWV5sckgjexhcu2AU2nZji2qSwZxgxXRPdQRq5UQ1fyW1MsQYCB5",
  "key21": "94Aq6aXEKZ927UhVsKTmB5WFffaba2L88M3LiapYPMQvLEaYVWdN9DUcaaUsgTNGM5AnCsqwibuKvtKAUMJHAbW",
  "key22": "qzJDmLzit6iEeAFhgFWemAwTP8AsY1rw6DZxNVAmQfWobUmEHH4pgT8JbFazjq4MwBhqgaDTKYRWgXK1Wgj9qbL",
  "key23": "BzSCPqoWStNRnmHaibcEHp5vYSkpfGwtT6h33trBxSfHAt1Dk6vjQixkKj8CX9diqHpexcJSrABuNunfUoSmdEu",
  "key24": "3fuyzEJ9Vib5KVtcR8JbPHssfNgQpGKApQuTm2zMBzBB9wMhrVQVejYHWb7KGq5qpDFc5GN6TLGizJJM1tdGUZP4",
  "key25": "tPQ2g9VFLg9oRjQsj26DpnXoWpXYY4Lm1L42hMZ27KtyHrC7xP5CMHtkJPJt2s4XXEfoSDztVY39zivDV9imffS",
  "key26": "RbpfC2DjnEWzrP2sVBkDmDCTGDspi6DBEoUEtxi1cH1ub6QLXX2nDGpox6RTkH2AAAjKravHdYLxijeGpVWeeoh",
  "key27": "3WW8Jt3VEHzoG1uDawbzHKZPM6JxyUcsW3aP4GgPkqsKVSiKHGhzxXRtJvDnuGZch5azLHJQYRsjFWt4XdvedYwZ",
  "key28": "3nsbcX9iZ9qZSWqN1dGCeDC3drD4u5ACczDDgtZumr3yzvruVfMuD1yrwSrfXPCZajpSbPbcC99jZgZnpUXDqivL",
  "key29": "621SHQc1kjz6i8R6nDvL2kr3BNJVHzEoyQ5fpJsSg4PKbpsjhRVb8TnPzu17Hj5Y1JEydkH71aHarApp1CRxqqgD",
  "key30": "TZtDh14QRESqPCWjActNKBxrVL1fV8x4KbQA82oqPVT86zPS58bcVfTcd21NxxHdDPF1h4SnvCJQuGs8Y4FvkJN",
  "key31": "4VrbgZeSHVsYXmK6f1DiGpD5scp4kVo8umLDVTGkx298LjkYD17nR1kAJMjLk63S9fRm6oSioFGptWVdXX8xKtno",
  "key32": "3DT46sNNMfWmB3QPt5T71F9h47td1epjRL7ABFKLYBNgnatbHDN3J9iVVUak8LNTaGK67yNhtWXWsbqMphQmxYYn",
  "key33": "2dKby2mbawKm344NvtAEm5pPwPt4ry8mGUJeerVYd2WKGptD6gHo5kWrTMPzPHiEaHiyraaAt4pFJrxPzS5Rahhy",
  "key34": "435XPkfvqbpfDS4qmN7XoofkYn1Yx8UcJYtiB83zYGzBxnwCEe9hZrbzdb1W2S5roeNuSEkG1qXCYTChFwTdw7gx"
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
