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
    "4a8bM8yWKbDkLUkVQahdP9R72dy1NfF9trAHiy9JoqJqBwsN3ccbm1E1YyWX7GBmPBeHqY3QMevzsHDJJTrceW3q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z3ufPvFtcGceEKzgfSwa5pXqHYDhVJir7wRA2HRDHZ8WPFjfhD8uyWaEAC2WkmXL5vQqU6rnPR1PbFJnNJ7cf7X",
  "key1": "3GvVLSRNXinn8CTAvVynReqJmRSkL9XsnyhqW8iFy25YxUr5dMxYEWRj945jex1e2FBM6fzSEjGNNQme2ni5Q9bz",
  "key2": "4JxU1uu1zrSss3cokNrtt6CFjRdiHxgdvoTL3b9NDCLGqxrTqHMswcoNLWKiXyvvSsrCj3eHmBdWpGEagzjScpGu",
  "key3": "663n9VPBKhC7fizjEi9N2tu9up9RTfoXVsnqbjiCEXLX3L2nMs1y5bRydPRxLFtm87bCRHZ1f4V6eaaTq8dZazAs",
  "key4": "3Mwibt1TuMCnWhzyLZ8TFfQ1ggNN8PK39hYYeqJtJNjhUwcSFFtpwXHxdY7WstGEc7QFcVSBBZGZJxRogw7TirxU",
  "key5": "5R8X8Jp1zi3hM1vg6zLP5wds7oU3NUsT7WukiZeep5X7YMpTsr3hy2hmH2J5E5cxjki8YEBBfifKe6MJawsm5qE8",
  "key6": "2HCQr5uUod1PpXfHC5ZPxcZLA2dLYg7XFyNZytkjspBtENfUgAWcNJKziNUd6bkwbomUqVFEQUWA5VxiLqTFRYB3",
  "key7": "37U1Ykoj7qMpXzo6j4UT2wyA8Eva31sFo5SRX72Cn19GSHjxrRasufQA2PAVKKVLE4N99DuCDFjp6dkdPLBycP2c",
  "key8": "3KgsdxZzffHUP9LCj1qh1zPhDLc6FGcr1KCKVcv6biHJWdhz7fbewK11MFGu6fV2RgN2XNa11BAFtWGQVpbauBT2",
  "key9": "3LDwNWDxzsmBAYpjgLmo1WwMsGun2VEjNZ7XdLw3i3ULMc6ERRiPToezAVe62AUQeu7My3DfN3bNqFCGS7S7F41y",
  "key10": "3116D56Mobw671bbYVyYvzxU1P8QkUbaM9DXCmuW63epN2z4VudyhNnxq1tNAa4Zkptkxtswnuy4WnYnABfKBt5r",
  "key11": "591Z4ebkDrq5EwTEVniuEb5LWHr72RUupbARzfkkzF9SUJakNG3wP3SFM8oNNkSgpvJvpHj4tByi2EtQeLi5ukJ1",
  "key12": "4oThKXt6hQMp2aX43uupvZ7ihxB3RBoxSdysJNxVM9EPaNubTpxxEa2eturmz86S7STXAxcstMegR4KFXDiHkHRJ",
  "key13": "iR1sTZQFMABc5ZfuLe7YHxmMxc5qkM4yyJnJx6JPXW1yU4cFfAaUeeetANaWfE9J55ofh2nHossUd7fSsn6rHMo",
  "key14": "2mmHS2oKR6vDCr1BnXjYCrFsCewqep9TizCZ86s3YwgFBXa9jEXRFUss5HUmwSp6ozHQ1E6jRCbF4NZFMAWm5sBm",
  "key15": "2iPmsvvKrXR2PVPzY5dRaaPpfgAy1yZA7CgqovRLSo8f4S72LNhVPmVVbgv5SSdmyP9CrzRJs87PsVokKUzey2RN",
  "key16": "2g9hD8xkLWfttjN8KGwL9Pd1qJNRGC8N3QLysckz3S1N6XGt85PuWiZVXNYvVg5FUnfLU1jWQouRMn5YPSthR5W9",
  "key17": "4GiCAzPfLiTitXzuuy2qsKBRFe9baQ4YSxc3qedAF6kgcM6k9aEPmybzD5BC4cLSsn8vt6MUs5VKfQ9Bu5VVTx6B",
  "key18": "56vxcKQzv7Nf1faDeGSGhDmkJUjbtmupBEgn7yuxiE1wu1o7PGfMqB6MkwksiP6jdtCvRpmVqM1Gm9HSjbkXj8D3",
  "key19": "2FWXmdQBaS7Sw1BvXc1cGaoksyntu8S1Sau4jTmNbBVyw3W34rfDS6vMovmpHq1CSATrXVtBCMX3ZafMvyJMZ7Wx",
  "key20": "4kbkb9vpYHBsb62JmFkUhZHSviZrZQbBSU1a3Rko2EATKcx4L9ozPpopfeSCroMHTqUDbgi7XZEsXDcj9WjRmVee",
  "key21": "2FCGPzw34aqDEUDJxMx8kbVXX9FcaHatGh9HYLvSSRfLNUmBTtozkvHpQtS8p3VEKk4aMUD7mqRGAkh2kgVCeqz",
  "key22": "56QzmdkLBPuhMMkG4rfYKmjm7nEiC7kWKLisZWs9nuwsee8szT19fAgCXoVZAhgsXh17m89LvEo2pRhmHBm84SSA",
  "key23": "bxZKj7Ss9Sf9XfYJkonpySmUUD4GhMXke1NLpk4cz8N4bDXYZ6yGFg5WEEhXZfZwdPPJjCcs4MhzpP1VWtCSKT3",
  "key24": "2SGiXvQKvUrc4GoKaL6A1bkHdk2DhVG78JHPjvJmhbaYkhWay2H8U2uKc1JKuDsDacmhxuJKYnuugn8kbtoLacaG",
  "key25": "6455HgRBzSywRG2uTQa8WeG92HLCVoM53hPrQoZH2LfuQB1S6Aj8WyKCbjX1sU6KCow8GBCoqCNLmJftKq2YgAr8",
  "key26": "265PYTPiX5Btr52dWNJhX3jPyEN7JeB5dJAHnmom5puyUjpoaoVh5sF7bKZxVocXpbUmjSiREjKXAr8gFSqLBsJd",
  "key27": "55kbqJd86WwfMbFnHcd8gieF1FLZMQCPM3y4taCSJu3scPFLCeLSiPw8JihN64PJFpFzcvAhoW69tFgGMrqnt4v8",
  "key28": "3gQ22UnjdEbSUu1q1p8cXozPLyB7yaXrgBkU9ymscEkyugFj7wTLK7ESpTQerbxKRqH5zk9zoinhYn4BEhaS87B9",
  "key29": "3DQhUVXaKCqA6JY2uNEyj5HDe56nty68TmzX52q4j9JkPHAnnSRWR5iDN4k4jFBYFcNyxxESaERkcxThfNuTE3sM",
  "key30": "5frAkF6nnqCuRdb6Sk7SBHBA3WGKQkDB7r16gYWphguG7PbkpueaMwfZWQiKH8TSVMQQz2tKJwHvdpwgircn1ayt",
  "key31": "2o1dZeH5NPMhp5jydMRui4kdqre2gHx8eTAh5SM1Uocrrkp9skfFxHATmV1UdGQiWLnqRhRK9ET2bP685kqmr9UE"
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
