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
    "22tx8jeGtvH5CiwtSZbshqx6E8hf3rtKk5o57aQvcdatTK11McXE7jWCayyEp1gXm8rFwWcHfswc2toNR2w9g3Kj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "G4C22bDHwtgJdGTy79uhWFoNEy93d25KEYRpH1RujpuEYXTnpuGzsp4yKBRczewqizCeXbqqJRwTMATmW3gu44h",
  "key1": "e7PdBNhRahTfDtQ6gYKzgu7iDxNN1j8oAqiuuQ15yMFLRw3ypJH1h7cLLSJQWqgZZQ9DDPksKaoRRyr9soSancq",
  "key2": "5GZiQAiD4iibNG2uABQ3GjgrKLSkhJmwgiPEvnKxrBaoHKTGqCsDxpwEEH4AxL9V7KpBTKFsZe7d3Xcc8PFQAjt9",
  "key3": "51Vo3ECC1WvPNRMCnVBab9UBJu5grCwxcEji12ZgssCjsZY3ZorQYtTJbSzoVM15tNFoq6bj1enJJyG2QqzJf9Ay",
  "key4": "4HBY9BHX17d73mLo9ULNKtYo1VgRsPaEdW5N3kmaEPnpLLhJgMHj912VhhhQKqTz4gQnUbZD6rHWB7NjZtzq6tTb",
  "key5": "4Q61J4NmGLERq327ktd9wgJMVd6V1ML6ZYcMQELLABnjjTDpYCFE9EFFv8ahYDSUZdfRK1aefRWhhCTqs8bKUbJV",
  "key6": "2RnR4eKWWv4j1Kg9gQGiini3qkRCayJGZUmDk9Encdo7EKw3WdDyerHJhVpzgHGFszfScoPBB8MWHUtMKQmDtWBx",
  "key7": "pb5tMbYwuuEBH4EZdX7Tb9qZJUTcMDY1UhvDakpavpp6YhRm6Kust9yfQ6vL1oRdduZcMuNwCpcj8ySphvtvMAT",
  "key8": "2wPC4BuVBNCx1gGxcq49eFZGbu4bRxAk9L9QEgZp2GqFQRaZ83DNM2kx4dbApikzNHLMPHUXXwknzWw164y39gdv",
  "key9": "2EkC7VrD61F6vikiajS3b2zyD2JtqXGeQc1mi3UBL8GEdTUm4LxRqiPNCD4WoiriZqAZcQs3uoH2tofoq7pcU5qn",
  "key10": "26dNydnTLw2FZN51pVPBRbCvPs22ya3xDGCSVYpNHdoctazQQ2ekQuzZgw9UWN7WPRVMp1bjoZcADdvXWeArkBjR",
  "key11": "8L5jM3iCPDyWVwsPnx4b5q5TkFEFw93YBD77GzJmaj5w4b4dKwpgMFam9Muxf8wxJrEV7gwFfDJnT1iejeXB5f1",
  "key12": "2hq8MKi6tumA4QyLdZbq6dZxAjzL9f62vsQyNb9fEiQie2Q3UNR7J3HViNHcSt44o9SCa1DU3JJkxJqbKHU2tefp",
  "key13": "huddLFCXykWyNukTi7Pt19ZJWkaz5KD65VHiDGXrxySzRSebuk9zax6m4DSwJaLWG9awfiJqw6s8ee4VSUBBq4N",
  "key14": "cXuu1uqTkLeGTmxCEJadHyNcXUjacHc68f4Qcf5NoC2jA3D32PruwsHNu1JbE8jRuYrkf5pgybirc3HcX2eHp1W",
  "key15": "2RCsoAQnLDyjt2g5YKiBLobsFtSk6rT7eFZZwXRR9vn1JvuYkVsm7VaKSGqmokkxP4JZtvYNRs8Qiq3TZAi7i2vz",
  "key16": "5B3aMd3tRwrAjzyumbuBXiXWrycKHiGe65R2BkSFxvCGGT17XHjZgwba4pWugtXE9TBA3T9fsjutPG2UzuQSFFC6",
  "key17": "39mNXtGBejKW2RuF6Zh5hZK8DaQ2UiFbWGEbEihJjdQiT37qELNaSp8UrFXYpjEQC8AfYxWqs6vxgtTUMnETNfk2",
  "key18": "KzZFebebX938nwFzWnM6TfG9jQ4hzQCu4TXCy7GceaFLtcr35CwmVpsUzu4PRGXvGdyojQkgQCdc2sgkqiGWabx",
  "key19": "5E9EsVp9vikxh8qHyG8HppN1Z4HHSz2DacYsVTHNaZxe1ZLKuj85ChyoY4gvBXrHLLR2YenDnzuGWjNqjfRELnTD",
  "key20": "4DATgemcw6rdScDaxSYuzoy1eDvKu4VUDPSB2J4tkRrFjkgFUWVQiavrCjc3XEaMXrhxoXQqyJGSbrC1cyL5dbzP",
  "key21": "j1YXR1PqyQTKwRrCuz55MJi7hXMqJ4dWHBdLkB3cWquZJNzxCTRFRTUgfjzdxAtKXQsGTHH3uu8s1ENr7sq2LSq",
  "key22": "5Q2pbmi9pR1REg63KeT3DLnbrUj8oMX27gGSG7oUBwrK2aaReLcS4D7hGLe4k1UWowBw8bzJfNj8PzWevLKc9G2N",
  "key23": "rWEDiAJEFvoubmu3SjVMyjuUCLmK6JKSsEcd3Xm2Ma3sxRRcmHbkeaC8hUf4G1aJuoUEJRPb2fWhYM2KGwkVWVY",
  "key24": "239poKiw1ei3Qf6rpbnYXv4s2LFvUmyXYCeehmv3TmxUX8cRhk5gCHW9GRxNg9Bp4eQDp4bDtWHK5Ex85onXakHD",
  "key25": "3ejJKULnzYWK3BZZRtmJuwdqmbwNqtADbbFyDNrXGMXxFpKRm6Qu1ng1Y3g1o995xNNkaAVwczAEZTrChYQ1tUBT",
  "key26": "xcL7FU5PcLGQayf4Pf11RiWgSbTVvPs48VkeVDJT7SDvhJ9KgdD2VhQJHGtyXLT8C59oaj5jBQPyrUndFeCMDeV",
  "key27": "2pHexunTaYXLYRbpbZzKEx7q2xXHRoTPnMmbbWzKt3Y6MCNHo3zoPg3ZkRP8dHYo64tqsSooLRZfUZTCfqp3PEMw",
  "key28": "fFJaqMZtEVSvTKV6A6cvftRXDDWhNkEL6idDL6Y6P6yWEE7gm1JQHcF5HsVKs7ANHV4qcXAqxyyjY3rA8KMBKCk"
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
