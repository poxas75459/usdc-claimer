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
    "4ZX5SQKaHncraF4xZTD6cbvwGakx7iJgbJAiHLkmjbhS9etvAoHHRMJ8hogMUNZ1HzhiYenxnHVoc5An5gbVVZpb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51k11uL1GYJhYos4xhaxs8KYAUcr6vN9jYC99ifTwSK6Swnp7WTY3EHtVkv5xwCRbGdQv3omfeQscBnnXMuFAV7X",
  "key1": "3nStW5o6Gq9GX6h12YumsFRjLwcgDXJ73GyXDM9YzjSWJZEPjNtcQ8rcZHzPRcNRyXADwCkPqE1CpxavpQ9DJc8z",
  "key2": "2S72LajfJNr5MngSHHAtXLpKCcMTrcbNHCvxC2SEM5mj3527rDE3gRPfXZFxrzQYCDRzN7sAdU4PhwsRpmUQPR2b",
  "key3": "5KK8cC2MWRTmQYvb3k5gPeA2cyv1J36CBqkJcFabmXXriP1NfQnMpUjQBWTDvUemzFjf8nhfMSxX3ZbWmyA5C9XG",
  "key4": "5pCpRKLSpgXytS8B1GdS2wx8hYVX242yMsgNvhD1BhMaWwXjNjaBvdorLaXwuZR74LybWP7AmSDaqKY8s3NCRevp",
  "key5": "2soBRKYWZk8dm424Nmdq3dKVWH7FHkr8Lu9jF95W1BBka9A8G4s4t3CTDohtq8ctrBDSxoGn9a22LwsZmcJuBTyg",
  "key6": "6XfqxdvnjMpWbV4gCREdgnHE5NPHbKRToZHsPv7c4WDDuujDauFaYNPUpDorU1csRNq36ADqEDTdMpskphGLwwH",
  "key7": "kG74f2Aggn4P6vXbitmWBNpSdwxCxWbRsseXYBdZQENhFcGHrjVhBHpVEFQve3uQWNainLQ4ESj162kRTCrHiaP",
  "key8": "5spYwK7Fs687y5T8CQnzpusJ9NC4M83UEtBCjFpqvu1ZLkeirNyjRaPMPRfGBwmB5fasMMvTgb5PmbQKn95pM4EM",
  "key9": "neAkhchsnuWnzLkAQhADHXnse6NjQNf5XP2ryjZSyFeKMBBG58kaveP2RaBRVizuEn7ux4BgEQJFJhXPT4Hozqi",
  "key10": "oRfVyXnWaTanF6XKWHgFp6tFChgFm7gZWfjMTwEjjxHrAhC6xpwUDFDddKuXwxm2v7PHy3ya5dxyDgWRj8UsNab",
  "key11": "b4pbhF7HLaUNuZKUZPA2ndWNzgETRPctE4UUfDEo4HbfNfytH3fGxVEa2CRSuGDnxzt2tCn66Y4snx9159SZpBc",
  "key12": "2DP7EzEEGT56gZbQ5WkxzFKa4x4fcgJpAHpC5k7jt6UsiaXPiyiDpddMZm7UrR9miTx3hzdd131objTtP41jNL8Z",
  "key13": "5ZqK89MabpTTcRrb2wyBwxjbuHv5qasVngjGEFD5fNVvCimRGs2jnRCoAHHhUQ3TG83yUC1413JZGtphxvCNs4FF",
  "key14": "4kVKwRVA61XtWwhYzh8RLkgkbKaYYPQG1o32dvPZb4yWqS2Wy2dpHc2hkFwb3yKoVEZCC5DQvY6R6UGB4BeFqfqL",
  "key15": "4hwfJVhssmpi584gex5qtiNqeYG3ZTHKsfJD3J5hb7CFUbDDuoZdC6Fvp1ZMLvvQiGbrxShCVZZFrWocLztVQYGa",
  "key16": "4WbSEnRW7NpSCDtkPB2t856u4a53BJ8n2HTAgMLyom5uEq47P5uW1zgxV6zAv88KotrAWCQHKK4P2VSWTpXB2uxQ",
  "key17": "eQCwiTiw7NEVoMGTvpguMtxgoX2sVegC3vhcNX4GY7cAU1MBh4suew622KJ76zRcu5txWazZ8ZTncuBHuGB1pwK",
  "key18": "VnhqNBN28ZghUYfzQUXT6C6Md9BDSPWKyR6bGkaEJBpp6mEnpJ8u5Fxa2Ej5YD8mrezyHhAX5wGiEY6dLH4LLPm",
  "key19": "m67V2nDFiMyefhAesDXqBj4DHRL6MPoiRAjKQcd7d8Pue8iEa7aVbmfvnjSPqVrQSHiZ1sDB7QiMbUtfTxV3mo7",
  "key20": "gaDE9teuVbPooj7xoue8UpW2R2PbbK6XWgArk3gwQFPdmUu9P47wj2MfyE4xD9EU47MEtuYzwAXeymPmVcDbsYu",
  "key21": "4fULy22XoAk4dYxLUeKXZaLbB33mDBpobjvgZnKwZgUzXNaMt3LC5aZs1tpSrtqhQgyuLdcsQnY9G6xe4PeQ4Ryr",
  "key22": "5C41LBkhWTV6fPhnMq3nvbo3yY8FLsUXinqVQBabn7GD8GMtS8HEq8721Co5xqE62aFnU7CutWHwpox9vYNjbps6",
  "key23": "2HZw8ZZxLmWS4htEN44gz6cYE5wcxXU3jMVKra8VnHvaty1SwnsDY36JuXAUg4DF8EYSqTsUzG2fvXtMgQuQfQMx",
  "key24": "2dsmGMZNz1MohXVgYmkrCeYg9g3pzD17zpDYY1rorQcSP8Tgg9uKVT4heyk4PfPVUaqSP1SCBmNfsaCwEzF8eECu",
  "key25": "5Cs7a4N4gsG1jbmUZMcAaHWLsPceQ4RqkYpwhQ1d3AP9k9AdF3VmNejt8aiiEWWX2vtq8aFSrBvJ1RejACFGVYmJ"
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
