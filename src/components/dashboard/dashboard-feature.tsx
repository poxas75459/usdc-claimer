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
    "2wyotLAogmySLQ7YhBMHGEQ1TKbpyZ79S8q25cjsTGVoH7GU3S2SD5Bwt9vd6aK6xwJLSAbeuaCypMqsRKmgspaF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39UwtL1DjnFTzRNFkCvMv92tzDc1azCT8VAR9qaBLMSUVsHGcLDPnMn2Rmse8yiT9ZqacrjwGEuT8n8MjD9WHVKH",
  "key1": "4fCqx1XMPcUJr9q9TmNc5rCm2YSxFBndDqbmGKp6Q7pNvPYDoxhyuYYgRzpxtFKCQC9KMsNb395V2FPYJZr1D4Ja",
  "key2": "5gBGdbmk2rR9moYJnFSibBcXZfwRFkNrB1xxxBoohAaV8swUAb6iezCgNXdE5aL5tCcJeS4uwwU6Gn99wLe3D6sd",
  "key3": "3WsdKQdy2aS9zLpF513X4njDZH1zR43Td9YXySYCdzcKp1cyEva4yHrBqT47EV14pWABvsJ7jRyG7Re2bDwHQe9r",
  "key4": "CRrBJ153x3QuV2wam2USuedz27UEZnymRWamD46KhdLejtrfnpNY16iFNQnHJ1ryZ9nMiBSjb5LMScMth5CC7Ze",
  "key5": "2bxkim5cMvtsZK2ri5YEfFU4mD1iY8h8Paxjwv1DFV7a6TCZn6D87EqSSr3QKsywQyFMdrpg9kvZ9Gkr6tTi4B3x",
  "key6": "5ychah6ycY3pW6xfjTYXEr8GhkaQi2jJnHmE25gMDeafzTm4Xpk2PVWeB3Cro7QJskzGupYvcMNvueqwovRoFQPp",
  "key7": "5oTYXSComQNnbkQubbcmy7ns9ptKXa2sVSnYN2btKVRMQDqNhnD2uFd4e5kDKdTNkYRt3Cceia2y9NXro4iKW51R",
  "key8": "4z1cxmVvxm9H5fEkEvt7686EVppnqgRQQ1cW5Dk5waQWX7GSWkEiA5AkCLuUenffR1W9m5YJjUKQakEmV3wNmpN3",
  "key9": "4Gp4hTyN4BCuwPNRjRyovxBaFPBS5B6fjbXMpHNJKGtVufv6tKktr1SsbzAro4es3S2wc1YAV2yCBKkxYt838Lzj",
  "key10": "3qu49N5zyuh8ECHCSyEZJVbKbNUPB7hCAv5caHqZ4Zxv8vq1RNmCzMhTuQpcM9F45C3qkUqF1cVnY2M752MZ5CQV",
  "key11": "5Vx3sQbaXctxGerfSTmEu1ZfpL9BKfXNGfaT7xMEZfv3g1kjLF6n6ohr8VfaLcttv9UvRrf1h6KkshjtCgR9FdhA",
  "key12": "32wga8ztdynFtCCxHmACgXE3nMJUofCiJTi4gTxeKuhd1yeGJsvyVTZN9D4Fy3iovG5Z16t3tBd7mFkPpB97zAwy",
  "key13": "1WusHyF3jxDs6fpCTmNiL6wpcT51fj64toGn8nmg7QoqxTFfZe3v2Q2x7VuQW6xeLtnoWpJKRYZbRDHakMUxArR",
  "key14": "4eMgPZK8aKL4PdV3EBBXfTSq3YYCt4QdgqR1rym5GZP1qWepYDrnqU7mKSm45xgCbHtRuP9irRG7NHmNTpCzkZyQ",
  "key15": "2owzPdvTFzSq9vZ4dvbLQ9gwpf6itEsVM4aU94aXgGPwTCogviP97ydehGfFSWmo4GbFYRBhXfgeUvYUbnqcZbyg",
  "key16": "4pPk3si8LmTzDYsZx2EwM5xutgxWKFfQnLH79gGpfdibLFazEjn121cxNjTAYXkDAjykMiUsz7HUUG3wg7fqMEQC",
  "key17": "2hKUZV6cgwtmChKz8vdcPmkhJvJF7Pjcwgaxd4xkyzv8Q7a1zTVZMMR2U7hsghMNaiSnhwyVPudB3iFQtGEX2yFX",
  "key18": "4YyWcMgBa9aC2WV8ZGNp7fd7ZmszVPZog3rWGBXRyxbne1kpYXqWDR8TNiL8XxwbJi9CcrKXErrA4w3yVHvFv32d",
  "key19": "cK7a5DX9zrCTdGmFUnR1j1Zzo1Eq1bjravXuA1bx4G4xCnW5VzXqMcv6RgQhG63P6vMHco4yjyEGor5oAb9KzFB",
  "key20": "fUZwpeMqg5YxDycrFprLYCCmLQ7FjokeKpKSrubdvs5RNGwNsLFkEhinBrWR7PEVtvMRUZVNhMJTz8FiG5S2a1e",
  "key21": "n14gAt8NyLmpKpktK1hm8i6P99sPcxW8WZXHrdDHjTjGnLTFpKfFKTbX7kQVWfsXKpukL3ydUoodpmC6PCXCdHr",
  "key22": "eBLsDkY7eFvmZKqhiHM5szuE3MtzpH8P6HmCGBgKLpqBvyhWDFWVoAcacq69sUvLazZvwpxAArYgBGdmRRyWKGM",
  "key23": "57aPLXDrZgqLeJfdGgg39tiXukLRgnR1H92UoEhw6QKMGHYK8LwK52gyAZ1t8MAgiGwMVxWCCEER2d26G9qYCitR",
  "key24": "2u1rekXKxtHB9P6b4jP989PKbyZxTWpjxTcQEZEewNyy82yfs8cnm446rBo1xF7c2mAY7MJjH6uhYEikAFHGuWNq",
  "key25": "3mrzSLmQydPYdVrQYbzgwswYdNB6gWdgR4TNSJAceA5tSuB7Qgs3nyXa7A7bzk3gZqPtGLqar2V9Vp11mQDURiYy",
  "key26": "3pi24dzBT1VF1vVvHALAJnhYqmM3PKQdvsBvAfoa4N2398B8SSZCZdso9LzimJqR6HjiLZvbk11KvhdXdGoNV5jc",
  "key27": "2pffYDudtf56xxxP5bfoP65PCy328nKg576C1r1MVkPojK7chLgNoMmieh5P2bMGfrKQqrW4ekSfYe33oKtZiqEF",
  "key28": "2UavuQGLuzTKSSTcaP1joywxRwCwpbtJFW6qYzfL2B8RZGJ3j1UbouKRgFWh3hHq7inZf3nxnfccTgyL4KTsajWu",
  "key29": "62aCnUFFmoEo7ChXVEYbSccFNHaaAnW2c61ScVJw6YMnnhzVVpWxoHMYAnmt5Fnd7iGJJxYjXoQ2sToJ4T5K7iS3",
  "key30": "5knh7zEaao8ejX2BxBFGQCSWd7nDSnCbvZns3ZkArGgztEE5G8qQDQiBSJXJ6fA7JritEsX9oa3oKBPEuDbWC19y",
  "key31": "4djjGZuicF4zXngW1jbfJkLP5WB9yFhvadryL6YHB8L7WWp8CgJAztAinJucmGRJCgPQEHi3JB5kNePLHEMC1KUy",
  "key32": "eK2rTpuWDuNBgH6S9SbP8GZhYSPe47UN2YqYHSMFzxznLVoj77YmhqAYRyZkdXAL1dps4cd2Jbo26L5t3ivifR3",
  "key33": "5sNhtqstq4NtjbUpT6oSgE41X24N1DdG4rqcD9PuWqxXDKjv3SjVPXLALBZw9JHq7RM6HrJaXGrh9U1mHoSFQFrg"
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
