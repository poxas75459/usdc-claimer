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
    "4MAHd1EmYcN6qsqwoQRLNrWJG3174rXyXz3UUYXJy99adPFGHNMkejF7VxRedJnVcGSPk5j8bJFwUEYsjhfjkUeP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JSzRvsDjLnxChxhUf6SCDXT3fdSyvK7JNSVD31HZx4uWbwk5h7AGSKuCk1LbNjUG6vStbKmKadatiU39B3Wo6Ag",
  "key1": "4eFHC1a7Qth3ick7fb1wAFPs5FNmohFJDtWjzeC8mZnX5Mk292DjE6tv8yhuew3GXc4GGvvurG4M9JJMT2McsmC1",
  "key2": "2Kkzwx3T2vJ5HVyJJEQVwYywCgjw2FQg9aVnurWfkd2taLfxFaTdtu5ZYJYdi83QzPLyoeXi65bF2DQX4Kpz1Jyx",
  "key3": "3hKmGKu76C1QWcHqUmbnv2uCcA4xHv5GKH2BabQ8Vi1JjvqqyoUX4LGJKpzsgmDqoyc6WkYgD7htYKA7ppMWmYuu",
  "key4": "4jZxibGoB9QBuCGSmsYL9baok9U87Lhipzv7TQ9Uv1JxfFo6Gdx4wKcaqZdnciMsFxfHgdsQ4TPWTJse7vFwpHMW",
  "key5": "2ecA4XXESobrTcUSfcKJm4m4A8uc2ThTYu2PMHUcwFQLPHkjX42EQf2pUvzfZXSoTUnVZwACS4pAigiRggjQBH3E",
  "key6": "5WA8UrGMqShS2KjWLVLRFNoSyg5VshGTk9zT5G3DiPXTuu7s16ivRuvVDNUvtbFeSVr4dw4P3oXSKuLwGv724AYK",
  "key7": "59GAwCBtgEReXfM1LRVCc2JBSwn2cAfwJWUeJUTRCBo5sLuv4bAazJcKNGjnbBMupbr8L1ipAzZZ6VaorhdZxveG",
  "key8": "2cELsMjxB7rij7PMEYJQBX2M8wU6dgBTozkTwpDRuDAeM75Awr9KjaageJZeqx5SDAMZUhSibykt7UVnczdrTcm7",
  "key9": "3LkRmuya6deEZ6SZ5nrsq7dwAFbCcsouMR6UgQCZPLiYMh3k9EHoY5QDtxTmnYL1Pc5BwKSCG3pLKzNggEMHuntV",
  "key10": "4kL8e3V1txZz4osoBreR5FZdEZV9ceYiHujGJKqfeQkKE98sLYYLcNnTWtWbedDb96Cpo2KiMh9wWsboGCRtc5AG",
  "key11": "CrJKVmBF2rTDYbCmcPw7dD6QHz7mSuZbtwm4zgRdikM154qzbgR1MfojNkjopbrMbdJMLiT3ychKRnB2ii2mYEt",
  "key12": "5JDU9iAWcQMsmDsB2TtgEov4gnMDj746uwwKop9RXQPHHr9SdoBYDAoWAXbJJoy3EQSxEe1fLp8F53CFQFMQowLj",
  "key13": "2dnQUrZzrWnsvRLbd3kaXCGsMT3niNb3PA99Am4VKRxw4EgvPbT91oKd2URHFc79PYZ6LMajDKHdikFDCNxnqRGL",
  "key14": "4HZTwdj5LD1fKRvQRj991GDVBK3nkfo6sB87iMGmF9k3ieA81xKUCcfa7LjkHAs6hKSAvq6KKXmAzip3d4AthjeC",
  "key15": "3DLjy6uLbwzkR1RVfTB3inVgjSBDScJwa7jKsnwH2C8c3EH9Cxo7kURsQLd2JzuDZ18NcGCqBvzxsUrxgU6Tz4om",
  "key16": "3EdxxADXsyzfE3414kxotHJCGFHpvuCDkhYk3zJV12dP2gpt8Yc9BegKiRjrNYAdzet27wjK8JhvsG9MYeRyUB6e",
  "key17": "cVvDdahJSteUqqNAgRCoMVGaqrUShdd51gzqfpJcopP38cAUKr9T2QYQEqfRqB28KqhRxo52gcUMakhamnyPTAP",
  "key18": "4tZkT5FUnJY4Bde1FxAKJz31ZLHf5QvAufRdDZ7S4C3cNxfoEvmNxmZSpmf6yQrK7EmUgEaL7qhuUj2YLxPxKxu5",
  "key19": "mYCDtBgGgLb4MYxGJDNVGcRW67mPQ49b94CW1KYxDjV98EtfatFr7vWE6yHXQzJPY2TKo8bnXZ5DwmiSzcBbxVR",
  "key20": "3Up1JJM5mpkQJvmo3iqKa5BFVzjwmp7b1Hj4Gf2nHNuTFBj3t3TPMiUxfV1ex5ecsfQpGfLLmmCReLp7NSxJAAQx",
  "key21": "kikktSgnBhjoRuUu7KTGZKWeHzFYmjZzFHvn74xSVzST3uYGcNKH5Po6Gi9LGPYRRmdfrVXUsHbrEBsdXhEXDQW",
  "key22": "NR8ZvgKgBs4rgKbxNjwb58cRLETAjJGixXoUZfWCPhBSvZetagy7onKwsmX3fFx8asvc6p5QmCtLpwaKwnyLU61",
  "key23": "NpG8wxHKDUdYoPKeRkc3b6UfLBPgdziSFjB3zfWKFqqfaccYMpnUCBTQYUpHJpDUi5appAGxvq3EKdN8B3xsP83",
  "key24": "3DRXVhADx6g6refwYjaCCNmw3SKvah86x8zBpN7qwNhecjKE3XqU1yhmdnWocGJr7HeK4mCHgpUCtSZaMv1c8AD7",
  "key25": "3QRXmRMA1kvF8C8sbFf3mW6jUhbW6nA6dQ6YrNfAaDrBSbD3a1vsnBg5fn92ABvDNkTFsLQezCGnZhJQ4vWn7nsp",
  "key26": "3NiiKEBebERvoQ1e2SqWigtR6jMLUshna38bQKeNYcQEbcCVi8TuvKqCAnDJhq7LPYFEEaTSDfnUbdPwjuyV6Cj4",
  "key27": "49e71jWDyqzbZguQgFapZBsQY3PZBoisjBoatK9JKGEXU1bQVDCTQaRaiyYas2UYrCrYs8ZhvBC3ATXVf6PeDsRM",
  "key28": "5VKe4jCshF3QwQwFDAWyXz6hkWrYTYHFXSBABYWZ2VetcGqnz6NrTvYhhKF76n9PgXRRqEJsag7U4ANVVEu2rQqs",
  "key29": "5qRF9c16MFuZmgbMTq237YVmRg1y7hSBLFR7kz3m74UFEhScuz87v4z2UbiQJeQrxHjDbi4g7StJ2mMSNfjnT76M",
  "key30": "5oUaBj3cbBXbD4WBq3HGKiRScqqWBybE2HJLbyeDJeVZLQ3bxcn8Pjf4vpTKndcKB61iAVzajZXBDkPhSa3A1kbS",
  "key31": "5epSoo2umf93NHaXJ4syuY2oBr4ZSrcvxKucRb1K7fURGQpoNLxkHh5aADkAbTUe1FQTV6ekHnZv1WcXYRdQGAf2",
  "key32": "5p9WPqC6gK4Q2cjTgf5z2eJBsMkzcD2YnXaMR9dJGJNdnAzhFXCaTrTSfG1Z3GgpUa7wvAKNgzb8VAti9uZoucJj",
  "key33": "WVpSQwdFvajVScg6PzHjeWKKZPYW17WRRgV1aBZdyb1hLCdqvcTgQsKPpqPRsNf4TmE3aXQ2rfL8LnVp5cUzoiq"
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
