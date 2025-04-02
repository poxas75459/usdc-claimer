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
    "5WWzSfB9kdHCAv6DMu1rVpRE7kDAhVsTtPGxwgmVQyhKo6Xea5nbcw8A55qoKrxXA8UYrYdMB9qPuiTNzmhdzqjf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s2nRiNSNTUj3CmXUgi8DY44tjEWnNKeE3eLnqM6FmbTGkcY4KHCpTugEQx8Vhz9FPiVL7rQ74wEwobD3UYa5pEC",
  "key1": "2MeF9eZfcgAgKkBeFhB4wgWRi94vBs4XUnaXWoSAG6QNo9oao4mRx5xYPVwUAwupvjhMVTQvX79rnDh1ohXBapjg",
  "key2": "3BdweWFWUKnDZRZe7Q2KdXc4xsUAy8deW1G7PW52yZ8aMjZKf6cmCyBNRD81GqJXV412H1YGdDZNLBwxk4taYTx7",
  "key3": "5JqNcDjS1w5S3bkjLR6e9uQhKVgcsu6vKShmcFmWEqbDrz9EXx6PEFpq1efbrEB5nnWBJ84hQskhaegK8Narasy2",
  "key4": "Rb4KhR2ikqWQdDvV4wxYPrecNJ8MXtp2zD4GFkmK1gqrDG5wBz5FRC7aWZpETpx7sfu3ikjPXMGLSzX1TFk1ty5",
  "key5": "4nB4v4i7gfBxFxHTmaT7eEoZ1sBhF6CVRHGhtoHPW9QEU3cAbmWLWTbQp4mbQ6weGxUGCPz1vPC1Pd2S2wBpYKmd",
  "key6": "27dqMYSkGTkbw72u4eTskMJLELtpgDcif9fjt5dogvL7j843FP4gfosRPcWkkGF5YG2c2aF3u2ebF3bmYfWd7toh",
  "key7": "2tkaybikTpEvTbA7yeiBNyxp7hecyvUQSaCEDrZBTfDFvUfCA4sRoThLoGjJnCBjvTTRivvU6wfPu18bhqVU41xY",
  "key8": "4Md7M6gZoAecCUWSL33LqbfNujXTewjvExozZ3X5U1Dtqiwx9xcZX1Fn994Uc16hpfZvXRsztYVA2TKZT3qMew35",
  "key9": "2T4RBA6X7aRiL9zW2kTuLHW9fJTfeo5oCdhBUvYtwknpnXK4saDqCSZNn999WGbQLd4kDZb5jYdJLN7CMVPTCLak",
  "key10": "4bYVFSw4t5qAptqbcDjVpp4VqXQUVgzN8XnYCiMhhiz6dBosyKaiPdyVY5gPWSTrjt2PBj3E5eZgB5CMjokksFq3",
  "key11": "3vvKpqu3DXKiu8WXDeAJChDXs9XZ9GF5ccFFg5SQeh2HR1JJ8jMhDjeC4FdvSKwrh8ujgum9T3gYFzET8AToEZCP",
  "key12": "4Riwa8Wpcd7L3FQmUEK17dAdZNueRB4PAtWFM9hEn1TNCHidD233VEeTfxJXULaJ5mF2eAqecBx9dd8rrDFtXHJ3",
  "key13": "2HEZM5AMZyAzofEbtK2c8gsEkzUhdSdLFSnWNKVKDhg8R6tDYHhXEs6MEHD2DCtkpyNwfVePFtP1XVS7pNAgJeLp",
  "key14": "4Nhd7DTQkJdc9acPbxVVVjqHAD9HyJdHbpyLy85kZKqQSXNXjQvSdQhFuGc5VWSgewmc1PSpcKYVGgeRib4b2NPw",
  "key15": "4EfaN2wgKBoKofrdRqXgVjKn6nVsusG6xVTjdb4NsQPTm5VvRMVu2qdyQL4AZN3N79vvW1mjyYTU9ikXZSf4eVqV",
  "key16": "4DFdeKoJhVdj4vwshB9gAdseLq2TgGQBNR8ZMNngBWFN2ApKzhZ38Yzy7baQKhGGLGCaGavt8gQ81mRe7wU3KnMx",
  "key17": "5kxJEzJHzQwAiyJG9oHRNy2BRq9PFAenjQE4isygzFabZTmwUT1fkNNLLynWnr61XXoJbknxnMpuR31prqxssx8r",
  "key18": "2L8j28WbpnR1uLNSnvkDkzXPoPxDUVA23Lu4zHZTwx9GJHcVwPEF79ws2s66Cq6n8KbvES6FvTLgtK27ZLSvXbxM",
  "key19": "6MFcBwZMV75VTqp4XWRRMSxgJsWnLuy7Pr6M2Q6xSmGa8qCr48XFzN3xZ3uPKLkTEnedFzCVxfVsTNBw8jkDRQA",
  "key20": "2vhp2vHh7mfb7bjMDBRhSGzHaDqHhMykw4Boyag9HCXzVp16wTZLAsU3ZAPA2nCv9veJ3DG9qHx3h1dyCjJrKxQm",
  "key21": "3WkJFWi3ufKb7jufiakDqw8Sezg1quYjhhchtqxsgsQTsQH47Fqz7HmCVTuJwDEXi4rmT3xUVSDCh57KnbFuz6mv",
  "key22": "4gfHD4Z1o9k5o5T6E6UXzkEBWTG4rTTdfQ3GuWftWhPYFcw7avARXxCtXYwZqBXZ7Pw5bkJ2gorKGFbFAySsFFNY",
  "key23": "4j8AoU24hY45Pfpr55G9poLQwtYNq1ik8mnTSzAFPJnxbZxTWFCeAEjyVTMK2K8nMpH1v6QZ4NPU39hA6GPeZESJ",
  "key24": "cZhrQXMbdKAAahhwyHu1L4fxMMJ1usjuLEkZvM2USh29eUbrjM5TTU9bvT9CrfCeAjHNHWVVfXCJenr3XBVKvFR",
  "key25": "3xzSShaWAygGnzV3k1auPWh4C9dacQVUxeGU2cX46dvqeUxuDKb615Y3cqkDDVMrewXgS6Q7HLu4bLDhK5oYKEDF",
  "key26": "qmEDJm6gVFXcuSjxEzEst7Ue29ZVwMeEvfY8p2qcHjDLqeSFRUYe5QWMG8Jqp3pF9Wv7aMZAWCcZdhFSjDV5SkQ",
  "key27": "2x2vNiuHDwns5zPWsvZ65v4tXMSevH3VLH4GFWM7YHDXvFp3xS9DRD3vV8Y6mSyUhXUTqb7iKN3Xx9G3zLWyYPm2",
  "key28": "3rTBFfhayX95pVCXsRwpEz1TsQge6h3vp92GkkWfpBa8sERSfHHdNGtygzmLtg5kWU7gWZ3jc4FJh4mcriEVeXoV",
  "key29": "KqWccPsh3Zb7rEtDU8qHuVe1oDyQQsVFBG16P7MuCzzmHEGrWjJuXJ2vMUrppn9sNoxURbL7WXaSy3v76LF3r41",
  "key30": "2ZLd8qs1ntDeMvUNrXhWiDydEPHNikmjDuz6H9B5WyeDqSDYrSq5R283K6UQQm9e4kWFCQFSL3veToEUBbLqqDyq",
  "key31": "4ZokVXkmfhby48EcuoLXcBVhVXwZdjSEmRKit99AYJQtLEYmoobtfLeong8voHxzoQ9bzgpLoJ3nbQ6pVwkyJ3bc",
  "key32": "4gJmDraApNmNy8sVNbeUiFdp8Y64kasBRL7BkFJs5rrHuynjhRUsDf3uVJGUoopZPbZedd347LHDCU4h14zKCxXE",
  "key33": "4x4rGJHhWXJzKriefGoFL7vgJw4CoPmJBiRLGnFBtcNLaiqp5MbTpems3TBkakbfBbf39jhEDnJ2N5W8T9HLZpej",
  "key34": "4XSsc1V7xDY9wJrDs6E5DgHncmVgcmsnVi9teuGvPJdac9Uuw4gagCrgu3Dw6NFFujTaU5TJ3ewJqU7A4wR5DchJ"
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
