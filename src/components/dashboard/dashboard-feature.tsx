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
    "R2jw6KH2CwRuHQr14AmPExd17jJUifCukCeYws6b17QNiPM28SxHN4wuenQ4pSuQUXZaReTgTYEMQJFyYR4edoX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ovcSDHs82HWewN2U7h77zzPTEg42PtbuzUNSnW2RPJKEu5zb5uYveFJGPeDvjUY4SME4jWLBLxRUFadGSk9rc2p",
  "key1": "k7YDQbS7WUx9kRkvZV2yuRxZDu2mhbJ9NR6HUq6VCJEM6QGDB16sSQsW8YR138sRv67xgjyhj5wuHfmV98sWvH3",
  "key2": "4DpVcqy89GgH9ADjM2SLVQPmoEfjs9iYh5EJbdiQzmgAopxdEDhhy7LWjZB8VJzaB4hjCA5kbu9YPQp9SdCe8oPg",
  "key3": "3nWCzEtzzv7Ce9y9cwctGUSki8DSAiWx1BsPEbBD3LjCwysDQxJ4LAphhMnoaKfPbVPLVNpesiEnvo7NcHa3bDmg",
  "key4": "3suGeTXo91HZYvebpEd9ciLG934MBevvMvxKh3GDBxSv3Vfm5CrNJEMfksdsqcYRqsCoFvh6x6YTuy5z1atVNrbK",
  "key5": "51d1ErRPyiYfrSGK2MZzb7rs2WCSMRPMJLziv4nA6kSFBVUYDtJNYutiuR3WG5rpvoVQaJcf7y1eUmWUsnarywFZ",
  "key6": "5Kz36gdRdCeawZraW8AjMdvtDoMRSuhevWpdnyUxz89FsGpavbd6JBiXvbmMbQNprQnJFHJejSpK1vfb28Sk52nf",
  "key7": "2PCeUTQQNe7gCHp8Rb2GzBpSacMp9Yf8Uk2Wb8j75okpgwPHcqpK4FwqczBP4DKAfXJz34TNgbzHAZAeJeLHEoqQ",
  "key8": "51q6LSXysvfAdEjPMaQ6B2LfQZhvBp7sx3fXcfjgnHEE7LciGBeii4Xax2WHV2MUGE6aaYZ8NoXgQnNwHokchr5t",
  "key9": "4ZmCRJHzgiTwe3YY3KSNFHagDQ5X8rKhAteLHKo4ACz56qynyVAnH71LwMAqyU954VMjotELvb3iDWBj1oVvZ1XT",
  "key10": "2CLTfzuKiHCK7BvzwPkCoPsND233jA7NWhy4PCMY6ENWd6D7AZtZnXxPLDKcCcT93VDZGZz2T8ChyxhcgWsJHnZd",
  "key11": "4k93i4UCm5wen2kaYHXC1zJvhRxSXhVM7V7CntiyKjF2qyjqLRLzhkYNt5o9GfAKBYAcZz2SxpX3c7NyucNyUGLE",
  "key12": "3qDpi5cGro5XoJC9ZtVAagyfZvVvBt4puoMeKB3G1oDqkkjGHDtaXJ3deoZkAWAT5gEJfMTz3hcyj1E4CZAFrbcp",
  "key13": "2eeqw7DRJP2yxvoTcPSnQH1JmdHhPr3wP3A4qePKBBjJhPnF2sKr117XVKFAggnax9KECEMpDfC34Q7RCf78oSY2",
  "key14": "WVdByCwXABMaQ9KUPq1pEgP8bkGCX8bzgQ1XdXgq3XuXsKzGgB6HxNZMvyNxizsTSWspjWcDm2LAqQjCXFvA5VN",
  "key15": "iJBto1zwY29EHjPa3cELUEJdQ5kf5fhAoj9p4AvCpEp9CrW4vPH6EkgR6umWwtsZjiT4hSjP6NnhhTygJGugfk2",
  "key16": "5hnM5ocRZUDEBhgbr7LtSS89FKTLwwm3yZwYB5VeSKg5hdLNr49XsoBap9MXktgmZQfEoLV9HFwDT2jvVyLN6HmY",
  "key17": "3EZSeP1gZuu6JBKzBPGuDwXgmjWjaLpKHMzX3vtdANcpkCCB1hpqUKkqEwBQ5SudThV6qhV8FXiVEXPCJDN6u3FQ",
  "key18": "sBDJ8cLJFHyt5FnhvQQpFu6g6nPiMM9Q6i3tVh5SDBBwvYAzr9EGJP37Q4dEWuCmK2EgfFv1q1fsZTKDPiLcSTG",
  "key19": "3pmhvcKkL4qc2bHrQQC1JusqBx1WTVFX9dZLNQNS9r8UFUxNyMM1L6dmH96qHD269bRfz4uP2iF9B8fdsXmv5yzP",
  "key20": "2gBW4vR6muYRVo7CcJoeXcCjB7khCspZfd4Zgnrx9tuuFLc7VSobQeZyLqQgkUzULPskPU6jrAcW1bZ2qrqHFNSJ",
  "key21": "35k7CtxhCW5k5cSGqCkd2ZUW4GrzuXHPRGE9jBTzVU3nr6Tttov7Hihh7sM5WwFE6s2e3vHZVxPmiK8jCV6zU1pe",
  "key22": "5Yqd2NtDE3Q2JNGjnjz3HgaEZMGhS1cNdvtbJcEC7MMMYjnQyfk31LULA4QvaYMyxTkgwc4R7hFTBmoMxCdM4vFP",
  "key23": "2y1t1bC6gwzVaKtsgrZertZojuGQ19jydbDPGFsT385u4cGKCZjz69AcVvNjbLbNvuvfGFEFb9w6X4EcNuyon6Dr",
  "key24": "4KT8UhvBQy9pR6y1f3T3imfqTjXB4njJL3f1Emq3bwdRY79iJp15fQfzSzUWobTGcEbgoFF5DMcnZ1GL1nXnsC7i",
  "key25": "2pMhHwRegGsXQU5P7hSEgKw7QGzPC2nUaJrHAy1v4BSvqmfnsctEdCuVt85nUrVcF7BQpUHkAzXJLZwaSr2v3Djb",
  "key26": "5y7956r5C8raPEpEYmBL4ap9Adq6aJsZUiBQPcDtqkcBJqu8UawddF639ardbMS3Fmw3CgoLpzGZhNwCQ1TyPcug",
  "key27": "3xUhTogJ2CeKptTu566Tinzodwh7CPfPrzm9osX4G6RnqLQqbbjDYmFy45XUzdfcz6eQUJ5P4rUtcsXqTg9i75er",
  "key28": "2HQ2JuwNmTW7kvD4VRwTykGb9euVKicvVmYkdskHoWVPTcsYn2bZyXz6tdjf99yPmQZ6rg75FX6TfBRzAS44J529",
  "key29": "2NkaFjwW2FPyFSTLifD7phTNqzYv68bpYpbKArgTBQ9uv6yV23vzskVMMJZVDAU9Gc1G2WVGqC536Mze4HbBwSFn",
  "key30": "3dPC5TgchG1r64Rowww9YAMF74r2tSWPGc83gzFTLcCZX7o4YB4cfZ5EStSo3TMq8gUXRDR7776Q6Zm1cBPU6jX3",
  "key31": "4M5U2mNTSqYiJe392fwsJpwndfWtBk7tk5zixc6qUgL4UA4NvFz9VKe1qEkLx54nMRo2sCGBmL4DU2vd5e4ALivP"
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
