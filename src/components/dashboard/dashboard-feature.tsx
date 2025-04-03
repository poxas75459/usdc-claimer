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
    "5inugzTsYj5HAGtnd99iBFtn31NCDpFL5Z4xxUf9F9bCKZpENZp8JKhNhEKTgnbN8uDbLS9idkRDeRR67DuiUfPZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VLYbSLPgqZEKUUodvFXedvLVps4FcUxcvMcixFUNjdgqbNvFozWPAVT9Y7DgdUpvCbAmFBEDmR88itiKjU5iHiZ",
  "key1": "sag2bE7HfNPRduAKoVu5ca2pnr6EotS1rGdbj183P8uDGSq16767i3xHfty2DpLhuH7D343vXSCwBB6CD5Zq3Eb",
  "key2": "63w74brPTg9QZiWZkxgJXuKsEEBnnNHew9yrcTZPoK8NXnysLqQCB22uzGFMAkG8fVXzteB1pH868wAVWes9r2De",
  "key3": "2xecz2oqJX8zjYB9TWgMMGMVrksYEjhhedqqNBNqZbXfPsgnDVJhEeaD74BvyjpNrZqDUMmhdVtiW1pYBAYPtJG",
  "key4": "5BPrjM4H2FzXMECyw6KciEyJKXqkdj2CGCZGu6i5gaHJHXVhu2UM47xnjZ3ASD3nhUWibVEPZ2fypChYQ5ncbHpx",
  "key5": "2UtB2uyiJV2vF2cDVTzx2EjUv3hrch5ZoKkQWRjnP4gRcEqbNqELkBBAe15RLCYrU5Yk6e8CdbPgaMLrsL5DJwYd",
  "key6": "AZCxhWTA8H8im2D8FZqQBvDvUbYw5gyxwNAXkyi3rwmssioj6KERHMXpg4GBwoZ8TJShELRTvHxxoxWPDA4XRd8",
  "key7": "217HWp3mxW4oFjCamzefz9xRZLhNP2vARf9H97XVCYyCJieicBkZPU4xNc6RR36kprM5z8tTho8zN47tWiqBFzsy",
  "key8": "Y2Cm4dzziU4iKNXnFEn5KP15TghR6sbzjQ2ySjBEQS8MsFHJoJwJhKYm52a2z6GJvar1AmcGSFcwYuBcBsMCH5D",
  "key9": "2u7VmwUpm1iAsytUHTApJVpGWq9J2JW8Ard3ECuPTy2bUAqG1ZcnAmCrrWofV8PvAgacjpXFekVJePXEBJGfUyUx",
  "key10": "FBoPuSpkjcNNswB99L2M1jHAynYVwbEkENtaePLRDp3zBV9ybo7SBwa95vgWo9WzuhhaJuiiUceTgKqk9xSVCFu",
  "key11": "3ZZLez6McTi52haiEiGGKJsdjP9f6p2DbJzu5ANmCSW7umQ3rwUDZygXWut6DausyH6kabBjriVX2dzNErPzVvsm",
  "key12": "5dMi9VCiVNrRGEztZ5nj5N7xJTKqMr5vcFQX41i97PzH4J9Sr6MZrAY2Ai99vgpJ9HeX2siPefUy2vQyoZRGBYgy",
  "key13": "4y3fD4ZogqVX7Q1GUCi8kvGXor61hRRdcLurTfLY7kcGneDLt5JbucqQYvMNGA9wdo5cLEXsXC3k863Fp2tob5Pk",
  "key14": "2ckYSfndEwuptLtpYu93eDne2TJdSH37m5zUhiSxAxHu1hU7qx8vpbAeY9DrW5u3sTR4Josr4VsWCF4Bf4UEZDdp",
  "key15": "2jajczy2USJx9SdJ9sPjRtpVEDSrBtzeLDojsNBdRgU9h3QdT1JW5BKoGyX489BzQxFQaB1yBvpUqSJMT7TjEkeK",
  "key16": "36ft8WLuZ9xf3ehHybAf1Jkj6YpGVNxdN57xaUAnotfCGniRV8iscxLtEGF7v4RWVQv4XSHenJr38DWdjE3BHfRL",
  "key17": "5U4Gds3j2ALVURwn9xiwnufaPks4ndHCCFakT3Y5xc1YPEd7J4tqLFR679Byv5AKiYewUvaoPDCNbH7nnpyY1Lh",
  "key18": "59u4A8UqXsGkBicTSoA82R2r7N3dkEpvZYTDY5CknyHqhKp8AWk4HfZob6NcYgAvK4p1ccgw24aFwvojMJdqSUrS",
  "key19": "Cn9XMT5ffYWWKM1W1nB9z43DuaCf1F7E5YeeD9LLsQQxthnK3b9hAdk3ysryrwhY5NAWogs3TkxUJHNYXKP8cwk",
  "key20": "5xiHmA5YmATuzJ4sW35Adp94H3zmkrZ3FxNwAoRYS1v9Aim68gEZ3vTn4A8F5uW4J5TwVVx99CHapiATh1CArDwV",
  "key21": "P87ojsJWwiZZ2gJbN5KHQBLByvz3smeph831ciEBSQrtgWZUwVNa64h2ApfYWh5q97Hq6K3D8PVCTWXzZCkkm2N",
  "key22": "osSsmyM1c4HCkAmMpLNA18PYVWrmiRXGPNyW4Tp46ms1AoSMHQwAotjLNikBKNPQoDyvTneDYQJ8g1qTMXeBc9Q",
  "key23": "2gYapnotj76iMhWSKGJsY7ih3wq6hSAQyA9zvPjMacxaAzPmez8vtTjq3hpdoCBUtufxtxdGLsJNbn6nXAyJvYyD",
  "key24": "dYmu6a8qU5tkezpLoBYgR1LPFcuhTukQPaVCkJLqCxeuy4sct6qdALWfn8ywPmFoVHpy2hRjCwHuMHvG6tjigZp",
  "key25": "ZrCwFNTthxkn2BNHNq7kx97VeffChAKTKWv2mTm5f7weCkk67agmM3FuF9Vpz9e6hGkorauUzVRv3HbExuxDKp5",
  "key26": "2ezK9VcyXj72wdVmE2MXUqtkTb7kn3JSoHuT68vyfLFdU4RW983c85HV44AgDuMMBZVT9csAshnYNHukQViA5qbU",
  "key27": "6j1Ni1wPXu7oySY34Rck6JQGiMguVqu1EBukDiUCR21wXEz2CyKhAXKJAXjR8PKTtcf8mtSeF8pQHLFHaQHHwf3",
  "key28": "5XH4jto4bHuwUrtLUV5ksMzeiT6rMvt7XEiek7utezq9EMiW8yPCQ5TbX6HfgiCoHiwvzSAswkNYxFJHD4jVg9bf",
  "key29": "48mNSnDKjgoKgdwckkBjfRkAqYiUXG9sCNZGBAbX9xTo1yv5sHATXfviWcjqn5mekeBRK89o4tK1R7MTQV9f6hBv",
  "key30": "21S45k5PN4uw9HZXHby8qbYc1kCyJBTqz6oZGs6XXJMQth2eQ92e2FwWXwiwoAZf2wEfvsNJ7inEVTzYtq7YevYT",
  "key31": "5XavMBpBRH6DuafJrhetDpKrkcHiTzsxjo1cSh9tE8PH3uV2btDjLTFPKTZSTFVUj45aZYsc8ZtYb8vyEzme6b6f",
  "key32": "5LqhYvsWHANVqD5CzhDW9emg5NDyDbQo99c2xFyUjHikxp8PC66WPAi7FXTcZsN6yvidTk24rbyEYr2sKYmDBQa3",
  "key33": "5n9TRtbtZLittJAAPRkN7tcCyMpcCGq8RspynFQhwmBQLj2XdXRUTY4Mo3DChMCPeTA8V3hcyaB4oZSGGbZpFdu5",
  "key34": "2RV4Zkghg7SQhx1RUzP2LaDQetRR7p8Hmw3e4KWuRMST7Z1mRYkpwtS1Gw2Fo9XL89eHDbMzm52ft75PY7hziMAm",
  "key35": "2Rn2JeGjACyqtLAmQjXqZYYXS6M78MWk5wZvyz6XgbzAq3qjhCPfx5EMGeWWwrQoKnLPf4JKGXWQ52KiqDCji9X4",
  "key36": "4cnB4V4BRBP1iHi8Y2BFNBB1dKUrweHbzBgsHifT2yS9x7nramqtUyZTCWNaU2UgQMzehHTi1BGrh9S3QGUHTTaA",
  "key37": "4wGjV3ZwvGS5BrsGmw1ctTUNRgjzRs2r2xZAoQKQAVSEN24ppaECkSEBRJEhGEshSXgZCXg4t3u5B92b6y946q68",
  "key38": "4TEvzjD9c6VcrzpaeViVu4BJWSL6bkaNPPJwKfHz3U2GNAVEAs4XwPsXoACL99rtWvmHQ4Bqnt5xzCTrnmNzqZyd",
  "key39": "7gDqhpxKMCd4jh8fmVgfVzG9fETZmBrLshchN71VhhmogbiQFD7RB3iTGqJQoauTvH9u2vTyRaTcq19LZ7maU5Z",
  "key40": "5F2LCpCMV1UEJfJySn6Vt8DXGrsu96kM5rubD5zuXQScZw4TNe8vkgc7CgzkYhfm3jU7CeuJPiFEb6CvEbXbDM7G",
  "key41": "5VisnfxrJmZV2LrjdEfSzy79UEsnwNzD4R9DT5pCG7PCAkcUhZGuHKPMyHcWSgxv6g5uwViUZnAq9PMRCrNvEqHK",
  "key42": "5SVP5agaDHNmpZuP3D1SX1x6Vq82CZAhKCHD9RFSMLt1bXTrjvCUTe81GkYEtytRPPMiXAghzoqmGg5i5G3f5Zxy",
  "key43": "3VYmkBCa9N2HMdVy3VHLavSVsdbNb7mge4aSPYDS4p2ZvJd4svEVMbLFuh8rgrx9kcEogDonFmHe9FPsszo7J4Kx",
  "key44": "27SyL3NpxJ4DK9uoUhRv9anZppCY2mKG3PCgx5J91CpjGmH2DqkMtk34HELGp4VPSxRJocx9KTLMWd4WC5kVQzD4",
  "key45": "WByBm9vEzSq6KSkSuJBSp4NqSaMZZEL5NsiWMEYK8T5UY3oEQnmKV2uAWvYHdLmXRDeYJ1yGPoEHBevkrZR9ay4",
  "key46": "3WgZWQmf7rEVVPzNHBdZCvudYD3eb2SXdDr2i5eefPvPgJkrbyLo83vAV1ATHC1C7Qj4TZsM9qDbLPRd8CPpHf26"
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
