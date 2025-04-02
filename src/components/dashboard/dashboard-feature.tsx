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
    "4Y3GppCdqXzjEuL36NfEyzMK2ySQ7bynhjTbhawtGCGhb3bU1aLAYYkWwPN9mMKQkxRhxvzwo8zyA5Ug4kT8UiXb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LZFWYu4poFR8DfCjVUcH8qSLEptVmCJwf21mMSzei9h7M4EpaSW6RuC9835ASLvSAUNep2WbKcgVemZwuAgTktU",
  "key1": "5dAATk9chkgVyddP8nw3DDpv9Z7E8PCgLQetHjD6PJUUC3YekbVVhnZk1dgBkj6djY32U3HQJhFBheDSCGzcD5g5",
  "key2": "4r9rziwHqthmgq2EfZrCDJw7U5wR5R7hTLyFuQxFWJT84izizdiq3j6vYRpVTY41drURzsrkdGjA75adwmF7Egnz",
  "key3": "5MXTuxzaCga67PMg4TmpLX6dERbecq8pFPHfqUAMfg9EH487nfEgpXiFLV2uXBVUVX8x8yAhbGE2KH1D3c5vbnsm",
  "key4": "2ophtWrQBBGE1nhvSuqRYysomDKo9vD3vb8Ku3GUKSYjHGvEsDdtcCzZVRAx8o3LCTpCbwW9DdkdWDzYtQwLDDPt",
  "key5": "4XCpqecHfmtUZM3q24hHiUwxpk5EAh2tTKG6zsBad2y9sRK9kxiQt7VpmPDBBJrdyuS7mmBwUetDsDXP6kE2PR5M",
  "key6": "4WpC2WVZRJxwiEKX67bJq3ziCRHs4M7VSZmCA6E4ygh2JUcxmPmUWZXBPYSiGh8NvTaFia9bPnuzHoYJKKiQbnnk",
  "key7": "3tgsPMPAak8ihrzgxYfn1WyiGy4CEC9RD866xLLGavLRHRUpiUu8tofqSCNXLJehWqpQfxFXaHFYqMai2EMsWU7x",
  "key8": "3JN9MAbuJhTsYFuwQx3LsUiLNTrSoFfcSnJ5Kgtpgb5p2TpQRNw1euiRTivKwVkBZHZsS7fNCgU6cfbwYnM4xj1X",
  "key9": "3TmznYkawbZXKnHPCqFcSBC3iMTVkJXTCNxzgsysvxJgKkNk77uRdwrhYGdnFmndnti6iTrqnYsMw75mfDatFHg6",
  "key10": "4gbLHrcLe5SjXsuwxLQXZosvDSkVaDvYkrksNd415F7xQZjiP6WzUR8YkDYmSkmwu1eWKVJ2VZTHTECR65Hyv8oR",
  "key11": "3yZUdbccfmZUFbppg7rmnXgAmAQCsgArgdK73cyuqMZhAiNNgiGPjZJcC6QQTWrT3HzM8tDr1ynMaErKfnVAknTG",
  "key12": "43aRerxjZxeNPacNHNsUWJnvcsX8Ufa9R7kSq6ZAvvmYJGRndnMRuds2WjPbG4TjT3Z93sahzpeYhATQWEmUKixc",
  "key13": "22fBtejHbHT7ieQUXYN4Z2PiJq5EAwRn5AvszeYMc81fwSxoYUHB6DAqSj7pzfATq1VLP6Arryy9VscED6g9kEG7",
  "key14": "59aVUtutA65e5JHGg5uxTWGmvk1NHbHEKh6AJowTGDFfpShgY1pCgrid4yRp5Py2f9SKiAgHKQt7UPxey9VBit19",
  "key15": "3PnWahouxKKwQtWG7K7fczAzT15GtNzHcbVRJ7xJDc3tqFwzFh2ynDbGKX4t2psULLBV2cCMz9iX7umdpnFXppoL",
  "key16": "65sdsMcS3dDS2Qg18J1CEENrTbBUJ9wTFY6NhTFWE174m27kafSokwLRSQHJ8KRkLAfMveNkoRrTrQBLeNWb6HXX",
  "key17": "3Juv5T9ZAy81JVnwhM5br3aLJsTgG87wpJav5Bqd8iZUNNQPgTbKWUvDc3B7EtTwKnids73FBHPPsYetvYH4ePXY",
  "key18": "4giocLEGMzJYgZ72vdamM2WzA48iUUXfCGKmqVJrCDi187oe7etLYCgeejcC4V62wPvHK11zBsnc1WaCqEd2CgoE",
  "key19": "3woLR7HrxFihTXBwWPfEZF8TGv4c4N3u1LEo95pXGsC18piAqGLuMwUvMvizQN4RLEFMm3SunLvN3QmaqCkBxgC6",
  "key20": "2Yf42MhdSciqgPgi6JftxWgagbvNs7ve4LtnGH6noMCo5yFwk6dDYQmGoMb9x13TgsAC4AisMSCAKPYHbkVkXnSb",
  "key21": "3arS3CFhETW6kDevaHV8b8X5QVPxLzKcGM4SpgVo1Dqn7DXsGnZkAs7VVLLhi9te6XHmRb5rTNtMstnb6vNJi9N3",
  "key22": "2ivHnuBHhPCDvAVUUjPuizEaBnGP6NVtQZX4NREhcBfntwV9Fxbsc5AfnWVkDVqSrkodHr7QuYmt4XTsWx2rj5Rj",
  "key23": "6114UKuFqPjB22fw3MTUSvYzjvs7kvkMxf5dAiEEUixkWxkyoLPPqZtPhEEu3tKDmkg1kwjzUCppcFPxcWQLT4SB",
  "key24": "5FoXxrLUVPWS2ygQKAaze82sr3CKsn8WfrfGCf5QYEUt2d9Cewd8jR311HDovBiwhF4WarVi2YKzKzWM1RsKT9z1",
  "key25": "x6YtdkF1WFVb8nGZKCd1idq1BaEhF9WiEp1suhzhBVhK1qGk1CPGgURXqSTsxrivhmAFizBFsX27t5SSWYCNcSC",
  "key26": "3yigjzKBwVXvtN931PmGWmqbFM6Zkt6YcVeyMmbUg3uA1c7usvJSpPSdXV4G1zmnpTB1rq1L35dSYTTbU84TbczN",
  "key27": "2rM4Y8d6TLDVQa3hhML9SpQ4WhKyCsqfNj8mNAS5AGb2DLgAxN8aup78ML3XSEnjtG1Jkngucm7Pkth3pUSQzcK6",
  "key28": "5sSArFoPDceuAfpLnpxhTR37KBvxeDNSJsThxF8b7b1uwxZ9YnE9cHbJfPggBAmD7RwCpkmgigf4YaEscLtqNz3F",
  "key29": "2Yrcg3pkYFCQk6YnRaeee98xkbZYUQaKVDtai6uPjJt3ikce8GmMh9ME9L9yDCt4TDroeNVXootPCy69tnG5usbP",
  "key30": "55Ge3ZCgvxkRAoqPZR5zRJXK6HwDagJnw8B5bJy8wyTNfxrkakV67VsvRoNfGQm1D8upRpQAvmJGMXH4p9aeBChJ",
  "key31": "3VL4kWwvrX1g32iawtoHXaFUWZ9htoAER1SUWS4A6anmUozy8hcJA7BomVMrGQMM7o9JUeNeNAXuiPE8raaqQ5xy",
  "key32": "6bik7uqKDDRcChduVbNVet5pkrennDPkCRBN3MPtNo6eNLBFi8eqA1er9QdWecYs21gMvhkgk7dwyhCzMthRBov",
  "key33": "5zN2YaXixx5N8byUWBGTwYdWu3xkn93evN6PjuwCt3R8XBSSfWxYiNxTH1H8PG9xbHgkGnYoATL456CudxyGshGc",
  "key34": "4BegUUtip1pw2dgzcMPa1Qqabocut5kE9MwTBAaLdgSeTdsCXNCkK1cfEJjXAZiur4FjiDPmoB4h5Bg4hbNnoTRg"
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
