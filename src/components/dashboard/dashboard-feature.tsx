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
    "uGZ3pqfZ5dcGVm9Tj5KpkjtbsUUvDDQk6QuyDc1ALaTgLstw7PFva1LNYwB8pMDuF4oKu5SNbaqmakVgJQKq5zr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GkCrSdvX1fTHye9XQAyDcdkJP6AMEfLhGXn9upsyLUrHG9cyLqV9xXqq7JicUBmcf6bbaXBMakrRAqNJ5HTzshn",
  "key1": "5p8s6yhtzRMK2qfGisUdGeQqZfMnRy3SHsvqTApi6cpn3jybYCujKaM5RHvQYpvPT3FKCFD8cKtUrZmGsssC84YH",
  "key2": "bbJXGaUuc8bqNfgUEDocN9AjnxUyWTrLGFjHxTC2HGCazwKcVYedP3YodKNK6izNw6PyyACGpzFqA21gSS7Zqen",
  "key3": "3P6AKBqdq8V7dcXt3xBbTVTY98jtPK49yncdxRMfuSWxv8rWtmGyAscHYvAmtBZLZXoTpckwGxyBUVDEJGfqPXLn",
  "key4": "2D18irE8Ypb5TWssKaVQ9TZx57ygLvT5DeD7dqtDt1ChLDQ276hSkMAtqEpjKVPngrCjLKHGTcJgsNcxs3jNdit7",
  "key5": "2E7L9UQeYAWuQKbD8CNGfU8ysxRSA2YjLZUfuP25gx4j1PB9FuzRz1Eziwfb7NbD3kncBW12cHAGWaJoS79nMQGH",
  "key6": "45rqqyky9oCd5xYMXr9M6E9U7Ei8jX4ZXV8iYex5ZsyMLRMvkm6yWfrArwXiZ3T4gj62JYvKm1kohbCwpnGXRqmr",
  "key7": "2YEMdF6j4rmczdqdBXccz6CJp5QfmPf3wyMduD5Eg5P43xeoTwyf3kTNyQq8LEUaqmgwpemkLffXq6ZCXaUYrLuL",
  "key8": "2K6ZtWeRBw96yNW5Hs3GmK2u9kJ5XYuBXPEUcJmp5B4RKQQ3ZRyzoFTH84mhEXfDvsjxnrKhDt1aLNPyzUmPveVF",
  "key9": "8vkrR29TGeuFUZrNSdgBiGvMSTsFh9nWRuVvcYUxZeytwaSuPBdzt58qr4o98CgPi1mbK1dP2E71zvgVw5Biybx",
  "key10": "4vL1bi3y1zdZeX89BE14XJDkCozkqkSSLyyfAcD6F93n8eUbhzZVwZgufmK4rUZ6H8UnTiEZE4ECSiAM1FvqQ7FY",
  "key11": "2NdyqyzfPuTzmTi3apktcNfPADQ6j3ay61LgNUCSWLpsQf9Z5yhJ6GdcK1sX57oW2FsCYoPwaJqVmAXjMefN5grS",
  "key12": "32L727FXtGdEDphcisAbWWB6d75htaFYscpnRTGbyfkWv8La4qMUPfxFJmWVkSjXqTem5dXkrcJ8g7PZY4G9HLtq",
  "key13": "568UJbka36kXZcmphffLq2zKxxjBAwnAZF2K88NRPG7bVjezVLUBJux9CTXmF9HFkNYPjENyayDs485Cvv6aToj4",
  "key14": "4qLCaNJPRSSfGmUkxzzSenymjVkftg22z99mvoZ8SiJN37nNzPW3cVZtt4KJaPDrLbZYsJbeAQqGaZPex6Appcqj",
  "key15": "4nkzPR7JaGCJi6D9EeSTTPM6xQ27XSotrLNgk5LiosaHRnijhoCzUkpKiuBGYfhQTX3WcUJ7Egf4m3ZWfgKWgq3t",
  "key16": "2bBZxreRVn4KL2u3a7oAFquzxcn51cAgF9wGVLPShikJwVbxStcCZckgSxRRLH9ngjeS8xaZX4jtS3xb9jKpHcCw",
  "key17": "AYwwX6KGmjsShqpdmcyP9RUHUK2AzhVrqxbPqrDxzH4cohx29Duxkiz7Uy2QAtvDY4qZAbRzpRh8YD7YzY5ByYj",
  "key18": "3ZA1Y8sCjicYd1hsWQJLaCE72EG3S63NTELJi1DRjLYYZgSwAaT6o3rFGfqZqvSdyyHnoPf9hWqdMPcdsdUyMCu4",
  "key19": "4oChiWUofLAkxdCRJEpSFbm4rF5SCUAajG2Dj7neRwDznjLPSYSZBgoibqpU5xg6SDRCuu4j472ErUsFRy3AEGog",
  "key20": "2ggsR3kg8nLXveQoKyQk2eh6k8xv5dNed5egx36A8iDyVbJajATCPEazWsSsgEeVbEWGGZJ1SwT5aNTpDzmdG1cn",
  "key21": "5kJRZDB6rfHecTxuKCMY2ThxciomVbADTsCr8N4wVopxjyo2T3WvnHEiJMSZ4FYTFetFSSLgC5LfGC5NUa1BqwTY",
  "key22": "4Awx3FLwmCqa38qPwFMrwALgivM3FAYZBrmiaTi2x9yU2jEuYuVgv6Fp2uVYxR2tyhur94Broemap3RnpdcJBPSS",
  "key23": "3rVCgwVEkRefzUegwJmyK6YMyMbveuxhCP38AiLavvDDuSth5t174aku4idr9Ga1mKYEJZSnBJCgWXnSnUoFbivr",
  "key24": "5mScwvuhevPsJN3x26PTCHzFuVWoLY7NUN8HhNzj72m6Ypr5KtPXwtZe6yijU8DL4xaqxUWG6FfZ3CSoT83ViFcW",
  "key25": "8aUKE9yH16ZwvSJGXavVjb6n8UR1dZgtJDyv26xQiXduXBJ1QJvBxWUbF3ENhFfz2kYa4GWHs2DZV2g2ShwMkH1",
  "key26": "639EqeFpzBbo6kQK4VnTyS7icSPsqsiQA63T4CrYmFFWEawzHWbpDHY1SimZE9UhPYGZwCfF7oimpj6uhEqpDxpc",
  "key27": "3xR4YqYMX4xFGWUHSzaY33qR1ohutLfzPN2Lk6Wxtsn8SsLkdiniG3Heqv1X9jR2kCtpJUhbe8ZsswwNiokzgRMh",
  "key28": "5L3zdBTjFU4EecQeW3LcdatVjk9u7aNA16rEkG1doGqxF5fjdynJ7MwhDCkyZtuuH3muSawpdLwR2sXM8XiFVbvZ",
  "key29": "4Ma57ms5CgNaEUgq4dDDk7Hr8tXxecJSvkX6uDfUeKt4zYbKaDFErYY6C7wKEBZfK1G3PE4Ms1EUN4R4Jho7rnhT",
  "key30": "3JoEen2fohVKyo2HjeV7YKzQknPKH3une6z6QBuYFLtFHrkxiyfLfB64hNrkWd6f4s8F37gNt9QBckUpEw8KZAEf",
  "key31": "45Hyuz6hfB1r7cUWYy3qhzWFTxLTcBN2SPZi31YgK3t5Ue9siQUXa2CafBnfRfrJrHWX6bDB3L5anECGsEkCaTr6"
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
