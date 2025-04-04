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
    "4YCa8QQmjJham5sAv62KSNXGxoTQaNdy4pfPGKmkqcLyoQFr5qBjJse31ZqVph87NUwsW6D1ULMubixi9Lhdjuyr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HJzUoNmcfKHKhvZkFAit1Madd2n8cMAZRYeN5fowrzNb8Z4fh6x3ed67b1kHtSh8VeBsAdNqwqpSkbDfrCx5sEb",
  "key1": "4pQMwNgLtuLoTsBJF5DnSMPZ2yYds6DDuT8K4wTsvSYqeWACJcmS7UPtpHiymRm4nLa1MzN4KH4DG5LkRJyKZUdv",
  "key2": "Lz6xzW779YJWZudLov1sn6CkqrLCawPKMsDzmirURYyvxUfsiRfHBRLsEN75UQybRAn9M7AwGyD8zByTZfTNQSK",
  "key3": "5J7UfXQjp7FJwgqcm3vFYuJYTjLGdeixWg9DAifhaap4hgLjrgvEFcarQxH76jcyKDuwMNmSBBJURBG3qEW2HgRa",
  "key4": "3WT9Z81d82WPHdtmmcF4JN9Dcb1eTotMzsVG2EX6QgBoGVpfBKm49f2pUs9rXDJ5HnN65WLJRg8eKSJ7MDrSe7QN",
  "key5": "JnwAQiBGNpakXzHYSmcsxQxbRbMh8N2DPbeLCZCL2sJh8jQMJjbCuuWZJRw896KkZ4weC7o8SSdeVtdkmhgzW4j",
  "key6": "4Sb86Stoh5ZKPzScwPUdLhVQ5qhnXDFwAgxrP9VtJWKW36ev5RoxxenqgRtFvgoZNB9CE1yScY9HW8w9Wsaw6YJH",
  "key7": "2vLeD64U3aEorxaCK29NtmXNdrgJNHoc6vPGmAeGsyjnbGbNM9RWfaHhbFQRz24LoAmLYZ1bmaeMLBT8JCRw2z26",
  "key8": "5nSbMvAVw3SKibqjwscXwXdGMYpUS6zLwbLfwrDAKR2Mhxcx4uz4ZYdAzzTbHtsfzK3fTBSvJQVwNMGBYnkUd8Hg",
  "key9": "5zUGpzVV2CUpk8sd3XMxXvG5a5WtGQzToYPCyxzod3vqhNPU2G89dhCGV7zEKeq3DqgNCr3eUU9gV5PGfiYfe6kJ",
  "key10": "WNgqSDfMrMdrAQKGSM4sNuhTbKJmCg97wLt99fmTvKXr9C4dmicGhoNLS39gRrUutUDfmPw1mUsfYwC4upQU6Kt",
  "key11": "3bnY5R2oPoMkxjPbgvginkHDQGtwodoZk6nHyCSGn989HEhzGFZco7BFYApPeLNYoL5jxpdNJEfxwRnEi1bFGUHf",
  "key12": "4CQYVaD4rpufNj85sndu9wNXTjtNPvhtTEgyLuUPdcs7jdb4wKbTCWQUUZkoxapxBqnhcAoPheN1rEf8WMN8PqGi",
  "key13": "2TtsvRH4CA9J3NFAiDNJ5szrz23ESCm9ySVKPyfvQwJpweRyYPuMw6Haa5CRLxRHQdbYsxqFKJgLqkyD4wjtAvtj",
  "key14": "4CYzKVYN9MCRAuAAS7MEszFjwTzNFMhDHQZxeML7vK4nQZKRL86f3HKjhkVoNp2Le79E73C5ZEPr8fhCgRRbpzY7",
  "key15": "5iZFaCmfSu1WCzgYSHEoM8yYA4UYK56yVKHhC3JDQpkPksQMQzPHPwV7Vm5bXWtxR7PLVdWiWFHHnbSvnTHasXEE",
  "key16": "2TijqGv5y8eyfbFTFcwym6Z6hMivRkkWUVRUdUchq4VpQAx3ndz4gtnxFZFEqxjhaPcub7mnEKY1m9zGJD6qRLrJ",
  "key17": "4dStcYPsGaFwwsWbkT6fP1UVj8wM3hmRRYZdqnW8uCNjjaqnFUwMrMwYpnDk3m25x5iHhWBHGzaTfnEd7v4jhwKC",
  "key18": "2zCoNo4yDBb11DeRtSJmyhfaFNmeSDFSquKVwoKVQhhy4663fVuLvUvGuYksM95m1NKtFqEEJRBnukYTjvjrTWi6",
  "key19": "5EPGvBbUFaQbJ8ENpuV7KfDk23f97hN3VnznJNdDwTe5G9ffJ7ewDtUkEHQox5e14dh2WFpT78y5XR11aaNz5EJq",
  "key20": "FHW4jBY4yt2mReNvxagaQrPFJwGz1eXxPbNJp1n1StNJexLSauXJQQUkHZY5inT8hxEsF5bbQ9ipsZj5bcDZRri",
  "key21": "2WFGtkGZ6B8Kute8DoABRtMKjcoi5Krkz3QszDSXzDNcUFVWd3YMtuxDZWf3gZqcR6PZcJQRBUCYQGVbwxA1JnEp",
  "key22": "GPU4MmimpSWCe8SxfxSWcswsvuhKA6i3SvnWMk3XuFhcc51sHrDoyeJsxsSkGN9S8E4sEQYEXYWP8N9jvxSSuUT",
  "key23": "4zo3p28hR323QVjj2V4gGjEpyC3JnjXfya2c3XadWcRwMJfpFPEMRfKtTVGsUz4wuc7H22niTnVUp1eUoDFCezpg",
  "key24": "4r4a1w6Lnz974kzL6cFqVvZhfxJFJHc3jnQEm4X1HKf3eP5cXyNsoExpycFeLbZW21wkmVb4DRn7HGJAd8zZeLey",
  "key25": "73DDuB3SbtVbUjfAMnN5yCBPhQkk6bhFx3jSdZu3qDyuJtFEfby4xeTHFPJ4joRJbwyeLpAEMRncKDrNCMUsV2M",
  "key26": "5qH6nC4cxqTc7UBSM6uTv49cbjJmbPxbt8SkzWxCA4EZzB176rwUBXiqo8fU3J4tney5t3aYuHa8ouQ48FHFbLMi",
  "key27": "3oz7nkih7aw9as7SQk1J4JgNvLp8JUh3GutLQ6Fahp27W5nVGnmFDKFQzje8xhgwcX11xpJp4WppmWZUJKffr86a",
  "key28": "WRajrGbJTspL3kR3c9rfmU2Q1wzBdCsJc5XH8iGpY4U88yAifSbQr2AaePsufssnzJYKSzE4xMLZbVNuszto8GZ",
  "key29": "3FP8FTRrgVShyVCW5pwJQdczs3qpsRaEHqj4DRwVMQ6JYegG5Dgj2gvVNBqZxGcfwp3Z4TisBLPAzEhPFhr4SEHv",
  "key30": "3ydzf21AZS5zo5p15VwEgBMN4kRxtsEuUDnLv1Kegoxp4TGqmgFYAN1AaKhftoP8VJ2c6wKm1pVX5PoY1nJkuiT2",
  "key31": "2cM3sWF9mwUCnxy3z5KeZoSfGkU5docp5CbFDuruPbh9g9vcNgPYUrjHowpEMVs7S81uQq62GUM7QkLRHa2fBXXi",
  "key32": "2oJGf8JbhGDUzXV5XCc7ntSWzKAeRNLzJFxGmej2G5CFdkRa8b5T9XeU1bSfoqiw4mSw6dxy2SgnRy4WaavXwc2A",
  "key33": "5XeynSVZVjx7SobrKtRAoUbWcd8XHCas3w4sknoobQPwfNggPBJXXvFfsvZpjargpcDeNcKEeDceQKUEKMLCpFXj",
  "key34": "XEBUzVwgjqcdtpgZKv34gDMfNktXuGgAJ2u3AvkxqbaBNiE6xuAop1THDaLpoQwa6HEMbbKRpqQrsbMGSoLk5kp",
  "key35": "62V3XUxwxApzWUpXa2yGegDmmW6q86YtXBPMeSwDrTk8KgCuuYm4Z9HXFBk1m8jtchmKj4DzRy3NsU8wPrELKyTb",
  "key36": "52yFRhSWuCUYUFZ28QNQoHp5bsqKZqs9vBAHUQ7CboEbYU1NxjFjvfEettqE7bLDzoi4EXNzjUJMTCrLoNyxVAGV",
  "key37": "5JLDimajpj3yz6rU1NoKTqb3tZMwaUuyiVykdwWrjPXeXswqnsxai5bAm22jjFUbAz7yUYkThpZv6rg7SSaTzBZM",
  "key38": "zdpqZQVZVXLBBVmXbCpxHMEwKnUyuUqWjQJi7xiUSnSpbws39PmEQHcptGZ3GCFDDKn9WhV4d5tcEiHsJG3iy1G",
  "key39": "ni41vHemyp32ysDp47BcEqQDFtVAxvFTrB5mJ8B5HfntP2PHDomzXFW4qYtqythLuqefvPdpKQFUaqZkNbV1i48",
  "key40": "3YgZAzB9sgVCwtDvnEUUqEW3QR1oTZqQvM3rwSXE8VTLAwSegtT1G2WV2JJUjwr82obFUG444obHMgDt5ZEGNBt",
  "key41": "ua6o9rdSdYnyQ76QKVvWz1NMpHj55GEvxxVKQ1yMJEthutfWkzjSVayzAzSEK7Duui7uoAVAwq3EMZ9eTmpfND4",
  "key42": "5Wj5rDdZm4nk3gkCZasGkTkmGY7CNibxtaJ2NikGmxj3wHgazRZKVfQWoYqq8FJFJtAKQmvEFcJzq7uZBdkA4xYH",
  "key43": "2aTzitoBrd99mmbQqiJDPex5g8Znb3WQnxB6vPYNv8iywBZVNm1VvWe2Fxv1GTtcSCkDwWiPQszMKnZ2SjzEcAmH",
  "key44": "5tivPTqoyKq7T2FNLTXLqqUWYoX5AwpSRBjy8xNcCdzfcuJQUn89k73jbAukfuVCEqrJTEAogKdFszwRCHiX1qwa",
  "key45": "4HCR7Ay2ZRigPpFaGFuNV1qyQof9RbLhmSEqnYsXbkuowrUwwaLbU8Xj1dJSfHjn18QVT86HgPbDE3Ta9LR3rJpR"
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
