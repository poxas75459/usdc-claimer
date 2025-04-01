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
    "5qnLsx58pRAMVg5Sd6KdFyifXCZdFBihZVCBto48Qiaj4BfEm8DqjJU4SJjhpY1zbfiJYdmx3BKoEtrNoENyCPTX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gbK2ZVfFqVDnzLiCXJ5hXZiNwuoNgYGrC451rPt1LVv3Gaie1XVVXGx5LHqk7NGz2XxkMKjhgyeDvXtp1jFRPBm",
  "key1": "4hvrEaGYD64ZFbXhVxPi9zQ1C1D3z5GL8b7iH6MiGicwMurriwHhthC26JWANSxMUTxG3GvdAL5TYtyrfpPRftXj",
  "key2": "2GnsMaZepFUDS1wVHena5oEd3aVp5XGRHawTV4ovYcxAot2iyiVWwL16GgMiEsmsLbGrng4yJQKrW3g9RttBfhvi",
  "key3": "49piiHtueg4qLZMubhBX2RQHRgcFaG7SoNGWqTXiVW3jNn5b17swo3Q9qrypQNCJBSP7qc55vGk5CCRaAYTjuDag",
  "key4": "4tQDyGm4gcw6jeRAsQu8i8zvRA6jRmkgpTQNvLZiBZGGKH7qtaa2S8BEvCHdtzyKjodEjys6XDxUHovrcXkkM13N",
  "key5": "2oUhiUYj5rY25GB1q49VrygjayEErmZYvDCLqAxzWQJHcdejGfZXogh5Y6UJ3voTRDgXtha44RZY3Jm1gmsHm6zJ",
  "key6": "293TqLHjZyYf6JcZbdpku5AFUiM7DP1k6wdCo1wvDJ3NSEwEBqptRdFRDWUNyUx5WB8nWfix2GkznDuX6rGMMFeP",
  "key7": "3DjSiirGvbNU8zy56R7KbS5qqe1Jh16VTbNkJEYbvTZz7pLGQzrHLsKGY2PbdqhVVCx2gAKFw6ym42WoJL7N8q5x",
  "key8": "vdeN3LPemb7Y7AnvYQS3f2rBZ6W5gzmnnfssnHoc8gE8BGcEWVep5zpDBWMKDhK1YA6w6zco78c7GX2MKRPhR1H",
  "key9": "66WgyHucEczuce3oaqtk6cbH6J4hgtXuYSPWN24S5iRa7UZriB6f8E5Sbu8zJ3zpsKgxhyjVrtFtfFCbe8CWRpct",
  "key10": "5tiNYTpyud5gGpoCYPPUafoCLKqM5pSMbc9NaXhfWEzqotnqqWHgsL81xt1xq9J5hDWAnea2ht4uPDdcc32pr7DZ",
  "key11": "2uLWRCCztZEx4rFJdE3MFyczMaNgupmwum14sWbc68nb79CatVd7wzv2CtR3LCGrTRA5FZCXKS3C9igD7PMgsYRq",
  "key12": "5ubqxfaqYJ9cusn1vyLGiTPWwcLPiSpkTTxBCR7i9SfqS42swxf9BpTNqSJmnnwjigettcCRntcskzfdmWMNe6vN",
  "key13": "qcBxfGwGMGW4p87v7w2Y489cd7aPNXpK851xFLe2kZ93WbxSgBz6akE9D8cdnA8khTB48cc85hrZpZeQZHXLrNB",
  "key14": "4HXirmybSt2Q4JcR5ju13SBf7EgG1MhemPheJotE7kknGryphkynrqqVLQWQduKmrPosTfdh2GrhNAPZSLsuqHTm",
  "key15": "2gi8UBHFQxWWtRPhZDNyrPfURry1XABa5uujYjcVeob9uhrv6hhPwREvqcfQPNEAVSpVmi8znJRw6kZoMk5AcKZj",
  "key16": "2GXHtiuzvVC9sCgmVAF4JqV3dHzfHmXmY4Q3h9CBaVctRUwKiW56aFmN7mff7YmiUdP9pYbfcobf8NpkbXcjhrF7",
  "key17": "2Yi7YyUttD6HMiUeaqeDkDyA6AKj6PNVK91FYaLheR9g1u2ThneuagyuPzJEE6W3DQKasvEkciuhUSH3kZZ66xPs",
  "key18": "5DQCU8tqL5TzYhHRzw1LApWtyyd9zfVrWNes87sqbipbreLxeH39eM75YJYFdXSUibxpaw7ALVXt9p2izwZMuitB",
  "key19": "5ZvKr4d6eksPhwiNX5VaP9T67cBYaKN8vE1ge5iQVFyaPdJVGXtrndBTkWjyfCuBRFr9m7QNbZapmguq3NTLjrop",
  "key20": "47dWojv36Xy8RntsLC3W7VBkC7PiqgT9A2vcRQ7a7Leg9uhgtVfEsudD8J1h9tRfmLV4L688uzjqiWdi6ENiNxKY",
  "key21": "5AV424Aic9MrYVLrHEvLmLtUgXUCJBVw9BU3u9sUDfKC4yQqS7NXTdx3tRc9q8jw4AYwyoTixWLrAR2ZY7f6675s",
  "key22": "ziqYkUynfyMXs63ujZPZKVLFNzQ3B7Wk1U1ksgvuQcWCqr3eJRpWpkNPtT5FrK97SNhrpXkGyKEsQ9juyvAaky7",
  "key23": "5sWU61iRRqMbRZ4dHTdYcN32RAgc1RqVbqXEnu9xeJgcEYkCwx5aGBmSuWu7AqSX5KkQFYahwvT3JRu6RD69GfvQ",
  "key24": "4jGyv7VaYY4BoMRLBC7uBhJJw7ws7NPkCqv1UZ1YiNqWWHoQGs6HSnUeDQHzkAnFAv697vcdZeTaDR6NgcLSnzBh",
  "key25": "54XoyfTETvbvjurGf6c23EAAF1g9EXWgYXKZXGx6NEzCT1TkGj8cEadtUuZ8JoiEMVe9ZYha9KHyCHk2VxqgAx31",
  "key26": "AYXmvgcd8nPgoYb6nBy591jagaWKauhaXEhmJ5VHChsEL54cWpNyKitDi7fmJAH36PZVy77KLnWeeEXs8Ebiwxx"
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
