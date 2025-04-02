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
    "44sAjDLyuf8Nfd4gQVd9KytH8CzJ86kqwdqhSbnYwUasaevNsQupeCMjXWdALdVqZP6UuSnpkn6nkUaGjwnMzcgL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GSDQ3SEvC8zfHYfX8NG7BtNThyouteztg8oJqa6qndTYa3xmKKT9oG9FPMnNkH8Vhee7yYpXGsqhy2Tyt3M2RPL",
  "key1": "TGucNuu8awnKvJzF3LSHZpSkM3v3yF2kCqUZhNgKdzXxzj5rLWP1VkDzCCN1B45i5mZs48H6kwiKobohqKS8fBj",
  "key2": "3dUuTdKcRAtAUHjoBMzX5Z7aaZiWDYx4Sn8FSW2qv9mxBYUzvZFiCW3E25YU9ha1ugFCPMzpNySCAjbk1AXF53k1",
  "key3": "3YESrbTRLequUpSswk36raSkm9m8y7xemoLwAUpKheExLgcfdC3xTvBFvetTzfWGGKBhuGkd4TJ656XRa5GTgBfJ",
  "key4": "4Wm15WvoTkmC2n8MmoEb98esu1nvcyNcQmJLRcFqG6NZJAgFQxFbtxTPNFZwTDr1vvsCQW1eMig8ymSfs8wtyiXQ",
  "key5": "DZbrp9wZB941QhEr7W7G91mYxWrTY9We25vvv6NPYR9Mr6TwMmamiHMmdQMe9APbwgSbKoBnoe4jkJ1oypwgraj",
  "key6": "3UaZ7bMFYeenfoVTHrYWT9BDD7LXkRSbpyoL9gPeeZF6ydES9S3CmfG4YzL5A42JobdPzQSFb8RvuF1ibB6fJWdC",
  "key7": "4ZfjSV7mGDQQowNjG2nXhP4Q8X6tu5NfuBNbxg88bd9PTZkqDSE4cKGVcBV9bg1BUnyWrzcNbrnREsvUVUveM8H5",
  "key8": "5AVJjk4bJ8BoaL1FUMCmzZM49fYxTe9uw7ASejztB7YnU39Ew681GZLpEXhg5bEA9YHze1YUH6vfVt2j7Dixeav1",
  "key9": "4f5ZW89JtqAd4huyVpuat58tfBwJh4h9BcDjbeJBHMz23BHkqrqUudFxe4phqJEoJkyRg9d9YZHJMFtDcfDQ8aEt",
  "key10": "tNt8XZF9wrzp6cE1GN3d9kgePZNFYvPsMg6DFmfyeJHpUTNS6KgJKZG12J8woWn8RKakLgAZeHbBtmPmR16BFt7",
  "key11": "47cQib9kh19inwu5xp1nSr8XHCcQqGbni7G1RoMXXwrGh7EB9XE5NdCUgJyshTRGEaEN5QjBgFCxTdQ3qJJfQK8V",
  "key12": "22X2XVCpt4WEZ2WT9xVR7dhYNVRdRcMrUXA3aWPzYxghWLGw1CBowNQZfx6riU58YdSJvmdv3RgVtPUx3r7AYWmb",
  "key13": "31XHbJih2uVAViq8UJkvr2DHiyzwHuiR8fsNErUR93vKNNpv3RVq4M1Y5wMFntHUvrKTEhuefBtHiVdEbabCAJto",
  "key14": "4Di7DwjpVL9ou6ybfh3Mbu2GpARfLw531YaDXYn7442XJv9c9fxmKmQfnC4JBYxh2xMy9Ubraj8sfKubh9h3c5pt",
  "key15": "A4CpJUW7uabhviExap94pmLEVRGez3drCGi3T1Jkp3kGnAGM2qdeuakB1rftEzqCDqzYgu4wu8DFEZ22oyw6aMt",
  "key16": "4FBHwqevP9gaERhEemfLJcwvp7wXB2zR1soBR3NemsZhDMvKZ5pSBCQ8q27oNjPKiBPg2hNZGupjWdiGqNXoF4Eg",
  "key17": "57quG1bM3iToEFj1WPUGEiJYRvzFVAaWiiRDma18u544Q43ntPkd9SCPq2z1Q6vumeAtzxXk8UL4X6KLHN8VNqj9",
  "key18": "3HW9uN1LMaWxdZeGq3cxyGagfUrppVf9fnXkLLFuQr6C92JNn8YRdN1dJjQ1vmoKHRnGTDKEL5XRCYkdpkQBBYd4",
  "key19": "3QtisFWdgoJDQP5B7mvz3CunGwqHUPVHFBabdBQ6o9pdTkbQrhMPmQKcRo9QXxYZS4S8zeXK3vScZjEqNZXPdiZt",
  "key20": "3ScXDeWh7WEmUbkWNEzSyG882jzHpss54sj7FTRWgrqbGcqtgPBRwtwk8TGKEtd8Zd3eDgUXKei1RYnBq4RDjWNE",
  "key21": "2Zug7e3N1K9Z5xKNDH2iJf3xmtE2FUffjJYs91sbqQi28JpocpFRdW5uGGw2W6vGXxUdu9EZvi8HPD9Jhjjv6gTz",
  "key22": "2si2mj9uPY3cXLV8mChLf1iUGNCwKgGGVKHrVnMSVCfXsG8wFPrvKiojjY8p37Qf3TtpxBto2SXTPBtjZ462rUo3",
  "key23": "2bTQveSsCHGtpmaeK6KTCJc8qJab6HNnkYzkRfjKhoKUcC6DdTHxrvRyw4ZrAaSaxdfDVy3SswGNifAZjN1CT3Um",
  "key24": "2xY7QExUWZ1YA1c7a4QjUTi7xNTfQ1LTnAGhNHeVR5yJ5BBJDe5w7iAohTTU1ukFiag64LDUzEXDjPujPd1LYbcG",
  "key25": "tGbzMxQzWyKnFyfzYkDB3ejJ3zFNjr8yfWzc3Qpd7BbWR6xeWj3W1R7QaTzi4BNeKfNebS6QboLoNSB52cDDxmm",
  "key26": "5PVk16v7z5Y3Wx6CdFWdZ8UBbPmJk6rwGiX6tUBGGoZ9qXm75cVBMy8iZPuzpB1dxWCmeVZsjYzLue7xzBVaeh9E",
  "key27": "5bDYdrpZK8MRah8Bf4htfCReAtSMrKry5p57SZs4fMc8Q7j4eSNyMeDda4VYJfkrheZWRJxybCDsS1Z1hFKx2Rej",
  "key28": "4AzxoY79QJmTTZ2xUxpvSDf5HgcHrfvQPRUk8kE5UUaj8irWNEN45FX542FCvGmkgCu4dn9Mfa5LxxY527uCLswR",
  "key29": "2M62seWvPAfHZdw1vtXDyxCUnr7aabB8xKNfxhvVZDWAJz8xs5mLXRUsR7QR6RumxbutGBe6fDd27k6dWGw3LWZb",
  "key30": "dfprA7VLrapxu14qnrbMVSWhRyqAPHSW4JgMX5wFn3mS253cofYBMixXK9En8RBM1LUSYh23vKvCGfDv5M7Gnz6",
  "key31": "3DjokJErobPyEnoZsGT7raUMKoC9BAbRqmXj6nCdjxZ8fZW8ASKSEW62fTzzkPTKWYqiMkLkjPJwEFxv58Cm3r47",
  "key32": "3dUz4w3iDWCtqCyCciJ5mDEYY9oHnbPreLbd2TMeN56PYiafK98UXZR2TcNAnoVgsw9rJVt3jtEYboXFtkFSr3hd",
  "key33": "5XL6Egc28QpVuvCYaAroSPTSTPN4QotkGdY5Tx74RWo7TjFqjt1BY1C9sAbdnk4DHr72Kusr6DX8QUBJGKD49PbV",
  "key34": "361x74JQrza9qy3jcutBjYDc3M4LWrSwB1ZoKNPAvuj3owJLSSRUn8varjGKLTVx2ztuSriz76ig2FoJSwcCzUbu"
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
