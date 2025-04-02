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
    "ko1DxYTMJr8CsUwxzi5k2H8Kk7Kvig3DLhbGKPPcnXUw7oLu4RZNAy1xejCaU1NmazsyZtR3JUeVeWbmhG6cTaS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21zMVQscv7qY45Nx1KEatUnnXX4fbXXHDG9nTHre8rgy4Rf5kR445PCY1eXb5K7mEVpN9o6ravqtctjs12Pd8yFH",
  "key1": "4dgFxBzahvHqWw3PEG4AmVRdn9QLZaj6p6xguRTsp5STrNJzaKYs2krmVYTtks7tK42SifcEENDcR8atnWASY63a",
  "key2": "2GKX3M2RydmxCXr4V65bCMYDncnijLZSTCdgYLoGofDPu79fwWEcALUvReyN6mmpMmFDHQ6nvowvRTCWHbKCKNkq",
  "key3": "3AKs6E5XsnM8cruxM8Ynb2QDVG2B1govCvP2Jqytg4trNvuCCCwSEpKR9NZPuWXXLH92MTFSQkA7a1VDgyo87YjX",
  "key4": "1afF3VyK8tDkTSMVHLttpX8upDFsS5JHzpzGwgBYy5d7Syt2nnNSatY2yY6BHJPDdzYnKTE1ohma3hPYyJGJ7Xz",
  "key5": "mo8rFrLVrrJoBP2i8739TKbWyytNBpZW23vZR5LucMwwMNgWncaA7TqCAe9mJ6URcxu1FUhs3xwfvPADE9hjx6m",
  "key6": "21gDAA7R9s4AvYePm2Pi18KfKEncwbWc5Fe1gAaiuBt4H7endMKwkS1wFQu67kEyQY2STA7SpPwZ9yNj9UWkxZRN",
  "key7": "c9m19zUMHAkvVDpmy3CjgmjpE5KVJEhLXTUqhHwWcp6372vMb1ug4z7KGkrTQYHVF6LPnd5kcGweytBBbRQWMUW",
  "key8": "5ax6AMcAaz5TGU842aVU5Cbz1F5CshD2uJv3tNnAKmCww1WZydkRDTNZv54ZESBjuvDUsqtVSkXzYNRwcwtQ56pz",
  "key9": "5JAeu7KUsqunej6sowqMmNpoZE2VecLpQjGy687VArPtW79fWDTJaQ4uKrh2epJDzLBNCn5jdGtudo2YmuNkVP9C",
  "key10": "3Y5yyPmidNJWKNHqnWXFw7zT5y53zzbtrzyZmq9mrNE6bB6xXscYVtUULNRNfQVDzLFHxt6PfP4AXTJtQ9GyoDu",
  "key11": "BmCBSmCKZmeLwnS59a4NQyd8x7tdUZMkk1mkA2UTuacsVeFWHnTjZapAimfhPF94bSFd3tXZEAx7Rmyir47DwPX",
  "key12": "589obNxkm7y4b7RjP9jCp6EpaM5rXK5Pkw5PD7yJYCWw9DGRtpb1hF2C4fXtM5CvGhEWABhz36zTMdU89n7PHGso",
  "key13": "3bcX8RuGxfxUFEY2EYZ2K3r3zEMJGmPhRvG3xKCR9nLytUHsyoVaVqeGZSQaazfvSfAFUMsfdzgVG5WCo7qt3Aj9",
  "key14": "5gtCxpu9yQQcwY7no6qVR4RXS16sZ2YjC6nkTgLSydpHtKfRR9LWw32hMg9mqHZVRUUCPhkkqDa7A2uX6aAe6oKf",
  "key15": "AQgT94QDBpsvhF7VTTvmz3uFeyhoCM8hgCgDzgZETXgwjF3ZttCrVNRPWWH2UFhZgwSfmmbwikm3PfqXFLWvYCT",
  "key16": "48WhiNEBkvoF1EvhNj9CXHSiYcPLHcgmsyprfnQwsRikCkG7jGsWt9zD5akAALn5sQUm7Wxh9cZFVzSvQZw9k2nt",
  "key17": "4FNxBmRgcw2f3PSWjgKvPaRYV54bFJnEnuN4SeKb3j5QnM82vyF3WrEDeN5b6TswyMiPsLNbfFwE1L1BntUirCzC",
  "key18": "4DEbwwwriighG3pmKxGSGCcPNCpkWpg6aw2AUk92nhrWhtHmAW3dsrmw1s4rx2sPsp9jvMqBSjHFvvpsWP3Md3hh",
  "key19": "2g2PNa6CzW5BLo2NddnoZ7nY1iygpb1FuYLpYGASUi2DjJmAADFdjr1ApZ83rARFpWWxxfCoZBskiTLgomyt9TB2",
  "key20": "3bwwfadNZuTLXbf2qBEN4dFo4s1KBqhZDcTWyxD3QuMHjxeT8Sk9Rg7QdFvebot6iFVWvknSGCb7WNNHL1p4XpkK",
  "key21": "2ubXKMdZQKydYCftqA5dXarDRmzCmhN2bd88kbhTbNyQ4SQC9fYS7PU8rP9uAqb7br9ghiA9o3jwdG3rHSn9XBwo",
  "key22": "2qfBw81GmRLfAHLCGTtMdmPJ6FPeHSmx743JDVFHhUjpaXpcHbS8BCaB2rHELigRS2MJbRcvP6mTacXfJRBN4uC9",
  "key23": "3JUEjRFpDPnYwJ38xtTBvKudTaqgqqCVpRPg8aXjsvogPL4UU6uiYfnoo6CGMHbw6fw4coJPubNqGsYnL74qe3sq",
  "key24": "4JChCKAtC9PbeC2FKbXaBwfQMsXMRjEvKBULuduAMrCUgY8th8JcTJhnyJHixLAc2Laq4ys6sXyfwvvAYqwdGgye",
  "key25": "5NWGCY6uDbMMnjq9YDQs4grd7BrC8BMvQPrBtjmveWaAquiErCoVDohKQePxVGAkF9ZkWsjDFwVskxrT6d5XdQ77",
  "key26": "9j1YxxrBR1fPA1BkaiceH6bHTg4SB2xxjE8p6MGkSekSpLDHwsWLeB4gi2FbHSRRtZbrP6a5gzU5azFMvAXMLqG",
  "key27": "2RSDyERbPKjDg2d4MmCMrXohU9GviXNfY2jznZzDA4YrDThHCeamLhVy4ewiFe2gENQTxHWcCbBeV56e5F5zTVNK",
  "key28": "2AjKYKKz555WJBGrzPdQnigiLoMk1hgSZ1ecX3qMgbQkG29nvhEApQo5JhSH6iSvFvm6mTGTk5TNFbdxpybmhD8f",
  "key29": "66NsDQPPEdNBNBHnEF1FyrS5wk3j5sUUv8prbGy3QuSY1Usd6cYSQQMLWpLLSZUVVjtrE1174FmS3gngDcZdte2X",
  "key30": "2UQA2FPTo3GdfAqm2mro3UBBpg2cDsnXS1aeg64z2XzdYnwTw5kjEcxZjfVfqnSzvFPDcmfJVT8SF9VQF7uph2F",
  "key31": "4n7zXT4NkogAUtzgqdrkYKGLTVYKRfnWK4vdbQrPEutg2L6eTzAs1MMKRCn5MyZSQZydv2Xb9pq4RRbb4vvsWwMz",
  "key32": "5H142C32bsddwpsm8YzT7i7kHHxaWf4rd4xmVhtX1z9xB8Bqjr8E9og8wEprsPJaRosGkRRKyWHcQZ3YZFc6Pws3",
  "key33": "63c3c4gEfenpo2UEaApiwjqzvk8qjMKyNMbjytjRtRJcxmMZzrS8Ux9zuTHiK8U6iiAfH3eC9g3LU5SiU2JMMc3E",
  "key34": "dWkiGBYqAoDompNXRuzEzbvTnrGQ3xRmP6nitktT5obbMvKjtSozbYBMiV8Qo5e46tFNm8KVVnZUJPGZmUbw9JY",
  "key35": "2Ye5tRxDNj4zKcdibC93DSxusRMYci9ezW7wAuP6RWhvuGhtpjdoXzsbWsaqynG9dFME1c3he5LnX9BNanSXz5yk",
  "key36": "2RNe9MJQyoYFeLn8EcK3JnEnhWGKioyBkfwiYEoLWHnSp86hBDVDqrCRL9zSunoQqRWwzh8mPXy8LhtcNhTva5R9"
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
