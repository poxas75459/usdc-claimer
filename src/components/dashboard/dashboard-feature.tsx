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
    "ueawGPHLYYAhLYPc4im98V2aADcZpJFxa1KBgAM34QcEUj2AA2C73Q6C7JWtwUwEZz7ba81T9Wn2pY7MHKjxV3y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tysPa4DYi9BKEiCvHjdn6ue2WMZPrMuxx4neCf3W5cj7tBxQaK2v3VjQkcNe8k164ibFTGWGYiepDwhFbrgete1",
  "key1": "3g5qtYKvmhsHzi1VryaKdzWLQvLKWc5tNWdQYjPqiJUAZb76tod7TbHdFePMU5tMbe1K7DpCpEnRLop55AKamEA2",
  "key2": "271Lnxv8vKMSsJ6UExbGhxP6TJ4hxLKvnwr8kr11xzgmCikcomLywBEB1CX5EdNLfv4FwVtMjKpRc4ZsxpRTLjZJ",
  "key3": "5885jW2baLiRtuwwt4qq8PPP5KCRMktPkn5oKG3XxH45238ptDomznZRzKPzt8NRZRfL82NH4a9XsG817uqrPYaU",
  "key4": "3ts1eK8fxnJAhS8f9VsHkVR7Xs3QoqMzYpsomGAktYSqfLYLQejGf3RjwSqXi8EYhw3yhxnX6LTQYS46h3FuNobX",
  "key5": "JBtqKUerY64ZYpPnojeVMMHHcq2X6rYz4mT8WQgTq8ADGzZ6mcnp4VX9pwXfcv7piYzvw9kJzyU8qDYJ5usd6Fi",
  "key6": "2sncsNrz8ZUarpjy57WUpoVdymBsErJT8gvEA5Uqor3EvWceQBg5jBSTWnjF49hH8wj1zuE8tun53Vj7uxNqndaE",
  "key7": "jMAbJPDTjswUUzmhDh2pronjWTGMyo2thrR1s2aQMbSPmGYRLtAUv3n8NvtdLZ2xvg1PU71tmoD1nfE1ob6gBA6",
  "key8": "63nyrjXa3VpFdL6D3Bge5WeQf5iPKB4wTkEJ5ekfFM7QWxh5PWL8GNTLcmsjpJjVeZCjsYUuosFY3dUN8tpbiQhj",
  "key9": "4azyFhrVy5pwXdEwQWHT52PubWrwcgT28Hxy4pSJLBTTdDyEspH5ffS4gdCsbsZgd1AyBpFiKfKwWFWfpSBAQGup",
  "key10": "2C5sfiHZ7qtfaRXuMMJY3YqA1ZBoo5CcxdqvZHcrq3wJj2pbmiGZ32BeNxGHTXHVLSJ3RhMQABLf37zuU2gUMzdX",
  "key11": "31JVZteYC1smSYyk1U9puS92vBkuCd1Z2xV5vzPhXTUb1KVhiV1MF6iHRctyDpZCgdRNsyA9bWXqiBftT8uSKiiy",
  "key12": "5j8BTQTDCdYKPtGreNKSyKqRMJArGYBfvNb4pJUrqHpFZQhWNqbjeB6vJKxU23pD3tc3s9hYUBbUzJHHimwnvcvB",
  "key13": "2ArxVXu4veVAWLUXX8DV7nf3T7kudXQHXh1qF8MWv4ge3UNaaAr6MvVrsuKzpZWLJRyr2VttQZtHvdYrcSX6aaCx",
  "key14": "4GpQZWT9FcFmimsAfBgmJwhBBjBS56Ur7EMsSpEzNZDiWoDzm8tQXsDqtsnHHf9Z38quMomnC52yvDZXS7AYBGsZ",
  "key15": "3fMoHqR75bjDwQWh2WTi8rbtW9BgNj1EqQQEPotJoThNRqJLR9183j1M2qPSNts5MDbpKsSjPBRVTwGBhUVMUkDT",
  "key16": "3yaokZRx5UvebVgrzG8myBPMz6Ra3WazUPncyDycEGnDwv4gVH7DTeieio8NzUFEKoje5q7x538W3FYPDyyymKoN",
  "key17": "5D8KuxzaLHMBDKkkRpsHoARR8umFw338vt7sr1WeMHhFPyizzRfJ1GaJuaWYcLGjwJVrddFvnPEhotYMLsvKbwUM",
  "key18": "4PgKQx1eUjhTzUicNYyWBDjoXHqjeijEUaABTepVfY8xCNnA37wJ7BTXt6ZhCXNz7oQbQcRv7xzTxxYnbnMRMKnF",
  "key19": "4QutXe8WRtuc3MPHChh1pjNXjU1sZXAZz8xjT4cQyBQdpWqa2QaYDuhMg6ppFjqs4gXU3hvv9r9WhXdp1kGmeG6w",
  "key20": "3hhjyb5FPtsypeKznkvFqwKkULNHJt6WMh8iwRtwdyiWatAoEtRTMrAUszpK2G5CVNR6A9C6Wq7rD9K7Hz6VgKS5",
  "key21": "WSeCg88mtuXwq65cA3AyGjwVCfM3dg88BUnfUkhXqoNJsL5y16GzxCzDsN531Lo51unMxauXt38kSkkabKgvimM",
  "key22": "5iQpo8DGpWGu434zDPP9YFwAK4i3yJgcGP6sRPwCzPVz7HJFXhiPuiBb4x82UXJGao5UvVR6TDf6e3deFXgm1Uwo",
  "key23": "4yd6WVXHF3BGcW7JZ7cWvJopPZ1rwc4zZaQYknVRosBCJ8y8EDAdAfb6vm2gUUWgv4stYt8NMWhruCDfovrHwM49",
  "key24": "5haU7BVfnCqqsyHHhM8o7THnwYWhZSiqB2rNdsSgCMsNsUehKftvVx65oyHUpnnADzU8VKUKQDXQ2LVTTNjUR1xx",
  "key25": "47Pb9rGv45qVW8TqX5dsZoCTmu4Z4XZNZfqsC8o1tJ9qvzYdu9hDwCUAgMrEDcwmDpCqvbH3tdnfFBvnpsYSvpME",
  "key26": "2bwABiqDqqisYvnUaNHw8CEpAmAAgS3ruXRykhdCaZJGKR35aJ3NHeXoZT543Ej6vMcSSHspEd2byZrSTh3mGBiK",
  "key27": "3btgK6a16yGRvxYY1L9WvYm5Fq4otXHfGa6opd2cvy7E22GkYQ6zQNGzpA5YurAiGvgCaAKfELh7ZpEb4ZDZoVX2",
  "key28": "5MqoWXsTAEZiZfzJWXUgqeBKvnnq8WjiGhcjmSv6Bb7bTqAcbDCEWTwq4p7KSqvYA6YFU7GGZoLRqJJWfhEkEKYB",
  "key29": "53QHjaYnHfiyHJjN5ccPAu7zEPDDxtn2w81GCuRCE1ghYJwoqP5fF63U4Ld6d1fmA92WmckunQTTtfD4GD7jWXo2",
  "key30": "aKNLpFnXEaP9J4gfxoiFm5XZhU6FKYnvGvJifbgocer2QdpT6z83SCeJCk2L2JFT1rmNTn5UP2zKynmEZrTEjtM",
  "key31": "cWYPX4YHsYGG1Abi4CsZR1uig6gGmaaDemfawxWUY4SFHXvkXTk2CCrYfnFETsF5vMYXnr6hbvt1JCTTJo4QDMd"
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
