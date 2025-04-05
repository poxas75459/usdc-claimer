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
    "2WRskoAQPfv1gLVDigCprRq2uCpiy8ZP7YL5vGHak8B1qTKFwZjZKndY9nKUZzKRvnGf1ESWotbw4ccmk4JkZ8TK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47w8HBwcLsCiJcb3ZF8SApxjiZsRbvL329ywhdBAn2WcDgxMSUsxR7WRc5UW83i1zQbJbq555NQEan3UVkgFDLtp",
  "key1": "5X8Fig2SfcqxTocm657BkdeyVHfzXVLY73yrc1fzqCuwtZMxoYwBx7sTaaXsMmsxGBJnq8msiq8Jqr2qW67VPwLF",
  "key2": "3iYnFJEqQEzkmhbwFXV9sMJJRGWe2CbZPUTXbVogEQfR1kb8SraqZahYrzwNaqKUYAPquUQShAm1DYfkDFKdWH6E",
  "key3": "2J9HeprfoimsJMNAtfWxtNoUUicc4qS31BtYy81Ae7DLcEm18C2vWTJkwGk73ET5bKorriSahpHvLKpJdA1kQMx9",
  "key4": "4DvQwq5tunfNCEeznUccBSB6yCN1kVK7hthnNhDBDyi1MEMeihKZohvuwkDJF3AWWD7E66BGPj4AFTZSe2SGvuo6",
  "key5": "4kZ4VaKRCFpYtcNq8AhCSAhYxJCJ3DJHKe3Q6GXA2vvMEoVJF47MuHDCxM3nxoquV4fCvAp67qyQMHE2WHEAwtku",
  "key6": "5yJoNW9S3fwGqAjYfRhte7bQawVCGKqRwVZZYjmVJkvAfCF82vyiHuYEqg472WLYpcRbpGVhcG9Q3yqxSjTUpGRP",
  "key7": "q3o93U2WCP8apFqGbk7E8TQi4b3cU3ESQkfPCA3jU2fnzaXFDEykQEJH9rLctzi4VS1SqwL3yPriRN8dSyZVedE",
  "key8": "3sx7L9XEkcH1x5nQ52V4mEyPykSQjyJvXo2gbGGZpEb6BAnwX5XRygfAFjppWYMejSn5t6AMpQEnTMKuDtVVrAq8",
  "key9": "5cGR6GWwijwmLxRXXcYLLhUDXKUm7KutmHUvQQDTrfPtLd7nzmTqVDmQc1nriHouEnkkaae1E9ZxPPb47JPLUcCn",
  "key10": "3xarqeqaZZGCqdPkwsxuvm4CbF5h7q5WF2EtBKEJxZeiwhrxMxD9sa5h5sYsUCU3RL2CoqSpPX9xtxtKofjeCZ3a",
  "key11": "4wZVQDRQwMiLrETusMq9uoy5XDPpD9iGP2k2m9MB7Ms3EHtsSRRoLqxVGW2pXBvyw6sTb2r75jnFpDTJ7HUSR3P4",
  "key12": "5haKA87DsvgQ5NCtzr1Fe3JVXQkjr59nKHs6HMkrpitFkU6A6WneU39x1s77ViENUvk4xmDqqGDLSozXzVQ1MbGi",
  "key13": "5yBaYWdahFg7kZWZUyf49Mqj28DohefPPTcT5Cmt1KgGBpNNnMVQBLzqHhauWRvCvvYqU9cewow4cA7YLV2a8rsh",
  "key14": "5yZwWg6R5NRjRvxaT8BspYMT9x9deq2o3t5scRndpxdjF2762XdCDs8e1Zgu1nZMYXs94EZ4wxuwts3yDuqK7WVe",
  "key15": "qnnUdVqoC1XrWVzeLVbcp3ueneQgemrdazTQ5TD1BorGQNVNjSAMevCKQ3YLCSNDmL3MZi38Dm4V42vZeGMJK68",
  "key16": "4ff17wt3U8vbSx5diRsB9Gp9f7sgAZuEamAAUKZicZihSFzQR5CCKJ8aMysQbNRp6H2YhTamVFbqZwffrymaQUeh",
  "key17": "3g5a5NjUYRH2AnHgQmhT4xtonapCVNt67tizk9C1Wy2qXLeVEZ1f6KHULiFTGLy4SKBgNZdfxiJcXtcR8Aj3rqq",
  "key18": "641G9HLUiCoWqskQBdHp2LCFRm9tieiP1TgaJXFt9R4j4mHNSXjeg1R3DvdmoZFjKVnnoVntAT3CGnVuLkngcsnx",
  "key19": "3pKNZUFWNTc8yWS7z1vuuS4UdJHvLDybYejhNYei7QdEpyH23Z8vhxywZsXyV8k31HtKyKToXmiaazoZ1gTbsVUU",
  "key20": "39Jeq3tqXSiAk6EF8fazPpeQPiPKA1hqQEKVthUFRx3X85BasrTdvPUGodBCtH9t3GUmjsoUTArEMjTTiZAkFw3r",
  "key21": "5oDApqBffUdtEhU3UFNYXwYU22e9EekvHZUwFGp9qPrFf1TpbxQmAKCbryS85Y2xFtAfqfN6Vt2wzkxSQQVjneAz",
  "key22": "55x976LaLLnVP7ukJHhDJ8fyH4pmCuNFRi9geUXDG9hUt91B5t6PYSPaqCffAZ27322fJduVaLqv4iohErRYq2LY",
  "key23": "3Ub3vVQwVvbJtGgbY4iizSVUDgVQ9vpmmtLXUhauDcpVmAMpC2r53KHHTGYaYXPukL2VMTWeZdwzwBdqy8tEF8qd",
  "key24": "5xMUwRdGUZw6Fe9RGZt6BmNdXNfNXyKD1ec6AePrrwfgPa1cJsMYv4QdEGtCq4vPnFtGneruxiiKE94MmniNu7hJ",
  "key25": "4ktsd5EQXNq53WH8BF1tFyFZaZuWwHefRdjkX2voLd7vJiRbToc4onseQZWrWeBZUkhJUpDbX8PVrwsVbXRxKeqG",
  "key26": "4D2x3yESkz5EQ6aoaxP2t7kttqNDGTDHUwe7icwLT1W393CWR88rirE2vjx8Ewxzm4AAukPnuKFzhNzojkWjde9T",
  "key27": "VzR4D5x9DXV8CbbXd84qcimVKEx8YxowmqXVeaBb6avkzvsbxwHjo6SUMqajKexqSMQbmAHCQc2VfGimqHthiHw",
  "key28": "5EKNA6iutatUeAdkdM84KdQc5Q2ueKtAStWGfWZwEYjj4pwHMBnPJGneL1SQpqTt9LHzWbZBNyQbfNoRHPWNLTRF",
  "key29": "3FSjr57Wircd1iUyTKbkbRypZhvWhoo2PXQJMRsmNkjkvUhyMdiB8NGYEu5MBVCS1LNes6dQqvbE6p46cMWfi1Ds",
  "key30": "4Wce3x7zWfHFPW2x9SbECGYEAPBDVFUZWnwL1ogETGmfhev9GqsZ9wvyG5xibTywNtyUEj22ig54U89iFPFaPuXe",
  "key31": "5dPGS6qRLL18GoBUp2aqDUgmkRSQ8hq5duQErEmFhSyFXFoGohdDLPkP8qzEyDRnNqxUP12Xna4mbLFWhYX3WSkd",
  "key32": "3cTmXHuFU83rLYA9M2gRGRX3hWSQYb3KNYqt8vktQLViAegbBuAVxGhTE5z9JfGiduMnDE2zJNJbGXCcw1Pqq6h3",
  "key33": "2wpesgUNaPywVt3LGg1SzzDX3miKdXGQU173inzkM8T9wdiG8riuoUkHh1iCsDEFzoRYiZPZPjv2mKYnVurzrkGH",
  "key34": "4TaQTQG2xVpLhzvQhbAkZJHsGGpYEX6KDeBEBwiqjHdznLMCwmiZuQVHJiAc8kpSDp8afwNm1UDnJ9pCjDrMabCE"
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
