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
    "5YKdajodhZSFFbEFzAjneuUuMTTrBtRo5BuwpWVdXqRfeRaFmzxwLsMvpGeA6xytRYVNvXnHSWxpscds7EAgqPrz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "361W9j7peR54DfqXGU8kAjTCGgRGw9ng6NcqVMFu4NX7FaAXoJRp5m8GfaujW1LvcsyqwSjLF1RojVvznarJTPtq",
  "key1": "34Mrtkf8CWLxM9KYgMZ8YJBCyTEnUXNavkAyhN3MxCeQdbphDgMMdWTHze5RDKBZjt5AH4Ut4WVwpYh69mSL5MJz",
  "key2": "4HQxr7b18NTG41LHzgZmvVngHgX15zRFvjjgwK3zWc4cbUqtAvR3YZukQT7Qn1AxMWu3ntAZK4o86Mmy8SbUYbMU",
  "key3": "2rx4vvSbwndvp5m83RHcGZKt8URD14JqyVgZHrgjqoJrfGJ3eDqNSsdNkYfjPCSbbMA2UUNLfschJdFsXe6rrCsQ",
  "key4": "4DLUrCJsSfMptBiLT4EDW1hZe5HtMgC2T2ukPY9jbSs6GYQ5rssNTyrenHxie1yDsjnPbkUP8TcZsK3T4bXA4Fna",
  "key5": "32KVM2V1WNuWfbkBSZ1bECru72utHuHJykBth78em9BJFWKXpjkmhtiyBMNykKfC8THrxFiKxzLXJ9YiWWZWpZ3G",
  "key6": "SpGrd8cLBayJs9GHSpeF3T1KsY7VGwtStHdNqVBaP7gRsWkBxhWTPsuaHivNoPRPStZuQMvr4G61voPaRVgSUiY",
  "key7": "4avQEzAWhivsMZBxqMQJ2Uib51yWd48uu9m9mZyCA2hvdEFwWWVwPEKuKkwxgx4YRQ8Sw1KcQEX8uq9EhdVnLTT4",
  "key8": "SobNQsqjcfBGAG2Fv2EnSG92XSMqLh6MDPEXVVK9VfYbmEKNjf5RPMr5diSEdP5qzKY7FEky5NaeFg2gCryNFLV",
  "key9": "L3qBS1QGhZLYumFdNz6GUsfYJtG5r47AR9XJQmagaxPxRtFdFYkFF7Fi48YCf96NcSMAAwR32pfAU8TVgsUfA94",
  "key10": "5GHaoD5LT2obFUd6LPdNxtoYCjd7sbuAAxSpUHXJc3rK6CQE6UAXFrBn61euKENLEbG4c8PSi2Bcjm5d5b2qsoQk",
  "key11": "3wDHmbiz858DM4Hj3Vj5FrXxcZjz8mygfHtpw55ZxBQpxdoFwjEDSoUBqqrDxaS6mTKKKKk8RWTmjgbwpPT3kcm6",
  "key12": "578tGSbejzhfAtfxt37SiF6pYTF1a4RbUvH9KaRaPWuwo2ErCmkXgcpc4mAGS17aaugYR6q9HS6zYi5PScMdMnj4",
  "key13": "5KfNtzrt87Nf658tHNLWDkgcRT5hbBEGQwQ9tJKXceGrbBJggweNkHMDSoUsnZ15KMbqabMorxftycZkt88cdsqz",
  "key14": "S6wxLTTtmmq8LYJQ84HYXp5PY3CfqsKf54rsjQGiGBuAzjYApNoFEHXXMTtsrJaqz6rdSrnfoCw3q4c7hMcmF8M",
  "key15": "2XHk1f9uLyB33CPp6Js3Wmn8QMA8JAZFYnrDxRuPAd7yJVz1v2p6jtMe4bpEmCFjEyoGcJepPVzx3twyRCKcahfV",
  "key16": "M3uuVMToDhCmRnTJS8rkhbCUfNkgQRhpi5dowLGMfiRKgkCCKWFi4jTkfb7zPYnWe7Q7wxwR8J2k5BHuXSvra9B",
  "key17": "3YChZrc8aYqjz9koKsrRTCT7EWesTYF4DBxJzbCrPuT3C7PykBdw5zG4C1i8PvMEyGDFJCfYr7ErYgA3AsimBsJq",
  "key18": "3XdDY9Q7fG7CwBvkNw4TkiLh3ANpAGVUenNoRwuntQ8JcBiWGmFiEaaiGiWpHtnSAgE7JNv2jGj5r19bvdxTHT94",
  "key19": "PF1YGek1hFnDDiEgrpVRqcYJ6AGDJ7tputkPX1FAepgGWoCRMVXsxjA8GqbCHNH2iXMwVjREnyJasScSwvvEs95",
  "key20": "5vbtQoiUixzRwdgt5Eevn586AGFJu3smXrr6rVLvjZTXSiUcC6RhWje182U7U2h16bywFzaE4AB9HYwaY8UUrYZg",
  "key21": "5RS7W2jtTqQ3mmBtriJ4ANkvTUqPe8Wem18QE1eZTAtVp4T5BHjxXLkcgusNH1xzuqwSZkRzaknF7sLkZp9frwik",
  "key22": "R6BsLdvxjSqr1aFkjeZsMCfiWijjDaymBB3fC3wE8D84BrzBFbf8TA7XUvD69ypm87jGBH4UM9kcEqNsSqm74Wy",
  "key23": "cpj6aw6AtvjjSYyS3waoNgcD4YsUipUUovRL9RB5p69oN5AKGu3wPF9PPVyx5ij97mTT6xZSs1KCdrCftAyuS3V",
  "key24": "2CMmMCDvdDAMmYfJ4pAtS5xTMfXaXxHaf1x36fP4pMhfJgpDm7seHGxax2vYxaJbVskyFg4k5LN94evksT7YCoch",
  "key25": "3L1pAPhckZ954qopC8sK9UyQtWTcySMLbkEygPCpkee16mH4K48zB1dKfR9pEo9ZEG7z8nFy7p4uzHCbCkzYUQeK",
  "key26": "524h7vCvtVhLsepbQ3eWKBWAdKRJaRT7NPBDfxJ2f3ZjbdgAn5gq4wqRz6fuXptTafcNVQWVQ6PjafhFSS6CXf8E",
  "key27": "2jqjY9c4Rva5Tw6aqUzxfHYvxEz98YUYDBFt4snKion9PUe15DDF3m3yQKQbh8P4hYWrDtED95tcTDS8FZ2GdjyS",
  "key28": "2LsBdtk2GU8qfGdxzdbCNaNUZ4X3BQKT8zSDJ2GhooRiXCeySqoHSkr8WW9Q3PhLYke98biGjSJg82stPMxza7QM",
  "key29": "3hmfuRZ2FhKybaxRdPSymdNaAth4A2paGb2nbR75Gq27nUyoHXnp9ayvRk5nTtzFQMnuJ4eXapP4czZc8eCZZgLs",
  "key30": "9BMjXTWgqbZtiiEv8NJib3fj6DZJZZL5h235Y7GRi9wQvw9P3xCpojSDcNz2EkyGuV4XJK9YEPSGzi1vtvG24fw",
  "key31": "2Tmr1Bd5H9zaJ8vbDCdrFYwJFJv4QLMW3YPsRaZvpDiT2swu4QRnyD2kj3HZNS48pK8zdjHbwUfjmDDSvbv7nGuY",
  "key32": "2QJDWMXv56WtSydwr2gHLbEatdrCatdhpAnjXievmFv6JHHYuj5dzkDnXg6bUCMJUcRQMQNQgLMwwrpzUsTiv289",
  "key33": "3pfqYVtyptcJT5crjQPjx4whGbSYXLFtwhG9GLHDugKYAWEUrmdysgXPk3exr1qKb7YvREtc9B74S6adZASV2MpS",
  "key34": "4TgBtqsYyKbjv1MKW3Dxh3gga5VhKbwvs7PCJ8cU73VHKqNWYQEL7kfuUDhABC5GVBuyGkjQg1wcUmQsNkk4h2cY",
  "key35": "39UJQXRZLLsM8qq7STrdvnZvJ2GpobugpwdcnLBjNJsk8carPfSH18BQpsWnY1tzprcytEnN2BjqM8svmtfwDBGx",
  "key36": "pvtvbgTCpYw55YjJh97Fg5nyiPMdBhUZDSoyPsjNd6u2xJT5YjQdAgzvMw5JCpDnJgb2Rvi5Jx6KnUC9wizGKFo"
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
