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
    "5aUERkfia7SrHcAhegrUQcgK3R27d1m3mU1LwpwiUfXiiFU1h5qWdEwvJQMSN6UG6oSwxLV4Ao5aMrWwM5iYvzLe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Z3A6T3ovfPPYGaPR2xJpZo2K5bcpydnv61nvF6ddnArrobFrc72EwstwRHCvD99kLB1kjQLBQqsaWzm39Q3PcDr",
  "key1": "2ZEYiFRwi7dmJ64dh6B5XSTTDHE8bZUvzxER8yCFB9gkwphKq1xn5xHkFNyCn4uG3bQcNGRpuJN3MUCWqzC3NVu9",
  "key2": "3HScUU4Stj86g5crjjYZbFfMiq88FiQ53ZdDQpZPi4x8yTYtkgD9mc6jcSKrZoW2pLR1QJorVdAmxCAHLZEwV3Cq",
  "key3": "mBU98nv2fF36W8PDap28XH6nHtKEHuvoGRkSQV7bMwKce2ByYvt2g6q8RfgsyYERp6JNbdPkX65PKDmySqKdXFD",
  "key4": "5SH75j9iQ59zjoScuVTwCinEFfCC7fKQ2zBkYZQ5MiTXtP4QcGk4Vm7VweeC4fVxW2WVhonXdZTuEG4eSXLZ3i3A",
  "key5": "Gjpii8smor2Hdj9PckdKxH44vsofbBejP3uDXPAR8JXXUdbUdeHBhefXaFVyWfK3vzNDTEkQTmc8bJzxc4rNRrH",
  "key6": "2bEbbrKxmdrdbLvLx9Heypvt8zrbjwkKRoyZFrTpFd1qnC22TKe1HgJbtUrVjyG7Pzic2Q7kibgY25GZRcvmNmQj",
  "key7": "3k5wpjimeFysWY2xYwVxJefXLje5w6EjYKqA5QknMzFm86wiNLefuTXc4FUfUGkRGN1ysZb23qbnCYAhcm37iLzQ",
  "key8": "2k8TBrLQ6K1Q9rkm9FBEZexmGNu9GTj6stGr54QkFYN9w2aBR9cr6bZMtP9daZCo4F4y6KhNSQQyr1Ct4EoPFmhz",
  "key9": "2i3iwASJjJo6MVExLWAeY4zEc8BQxs6G5VMNmsQcPYECZq3FbmyBP4HffH5f9comBhqrCMHmFaW3cuBK3NzK7Frw",
  "key10": "MKqbK7FVt2jmMhphTQZVPfj4bHs6xfeYMS1ucdFY8q72mu5PFa4YgeMMbU9bdQ4Y6XcADbALmVFwmrnkJijJrPH",
  "key11": "2et9Bvvt8oHepVgggHzwqBzsLYVMUUMMnmJckQjprCHgTGaHGQGskX2LtSyApBAWjgyYgR2RJWZLYd5UZ6E4NcUk",
  "key12": "3tHFc4eTdFwaV5cxBEUFzqRAKoXgik7woBwv8SYJQ8vcDbWHtNqhBzMEkVi3m84WB65vHJo7J2UEKGhtKAukwpGG",
  "key13": "jt7CrkAzSE2ejpw93aW4qgYYM7X3PwXN2uEQWoG2oGdBEZWgpcE8ENw4kZvDZfnN2h6dBGE326r3s2ad62qrbXj",
  "key14": "djXKXuPjTVvBy8vYR4UJb2znDSPdZGjQFdrwxKMxYHG4QnpHXMkFwxLqp8GyAvU1G1wJWq5uacVUj9XwNgcjD5A",
  "key15": "3XYJVj42cC9T2r915sCgZKDK9bSuXFZo1qqkoE8dES8dxk5LyNfL7KNmY5ebTx3R3S5TXLrkWpj8xZ1zurm5ihfJ",
  "key16": "2XEUJqxDBFBiTaT35uaihFQy6vTMh1wPDxAHFJwyU7fTHbnJsqRqjjNyJ8tYaxXzGKtq8pwPcBNHB7p1ofCoJcnL",
  "key17": "5scu6P5faZntUZoHR8TpE3TNobGmaW3DPKCvPhg721XVYSUSjrNPgpmhLkKBvidapam44XPSQHuYoho2fqT4Qp2x",
  "key18": "3dyiZJ6dSgS4RCwu2YAnAUrgDFHG8snPRpUaoMdANASqZVZRbmdsMjfQVuVVgxQrPNL4o3kcv1bRhbn9S9o4JAcT",
  "key19": "386gt68ay8U5BtikZquiAtBBE7Q9SyhVtTA1yX7Z9j6NaMeDNnSq3ViodJ6oUuDXQqWK9M8Hyepwgw2kTuZBFxZN",
  "key20": "5a8of6KAydwuRSMhfb2iQHGf8uVEEbn8kvSC1Eeys9x3xA62EW1Y1ou3yYoNFb4NUdyHKJJnQeUbe1S3C5qZRXiV",
  "key21": "2nyXWAbhKHGMQsoxXAXqNDEMnD3xCbdAjW73iJDvdWyrcPsTYkdMh4GqBQFnfZZRAdzP1M3L3BQEgeYL6tPur5gS",
  "key22": "5V9zXoee3HZpJj4PnG2MJn4wDjvfPWrBXzkbwfFAHMAchZhbWcc1e9ACDKqv2bRNvJf2wzT6s9GH8NHTAo2W7dCD",
  "key23": "3eApBG6VGRFzngGBbSaRvgxt6VbbRgiyYMbMoyeKhAQeKvMwjmvTyin2egDMDsN7zurLu73VAen7chZvDLJVfXXs",
  "key24": "4bapibFKK2RswSg798AAwJUY4oU2G9aLSojeAjTXgMrfPq97Y4dE2q3MqonWVXkVBngbcMEkgQjZdR6jkPQhTy1H",
  "key25": "4JVQZ47ihmcXC5WAq8HW32ArMdiMAzAwe1HX8WC4HU2nRonuwEj3XsDVFPRyuDJnfyjPg7USVvm4kPeNzn3stVwb",
  "key26": "4qpYV8nQABGBceuQm1wtp2bMLGthaKW6aZ5NPZon6EKMCAGzutXighvSHHmNv9WR5bvJMPp8tbPtfU31RuPas4Dm",
  "key27": "2AHzBJTEKD22tkEVe5XPY5K9YgjYp6veuNgU5hASXGqRsgTLcN74sJNKKN3Qc88bzVY214mCRAyBT15NDge9E5jX",
  "key28": "d26WDr7EL6JcHLmq3npQkTDTY3czbrzuVDHgzZVyS9TrfMj6mf2rVYE8RUMXawPC3N3bvUuPoDRBVqfQuSnoHMm",
  "key29": "5RAuxsZmw4fawrjqu5U2SGGeCoUZATt6tGqaA62p6oVoaVBupnt8qgKpS7zmkiYHRJc4n9tsWpfQ5grhkoBRaPjt",
  "key30": "7xpjUC629Dff4ntYTtyH91uPQ9LLRwERTZku5uJbLbEtwR2dP88g8fB2Jj29JA2R9wxTAML77kMix6owLoHQY9t",
  "key31": "Z2TjDeoTWsgofKWYhoACyu5xdRwmHVfEuM6GimaNQLn51LM6r97atF9PuE8YqqEumHppiTh8AKjxsYV1qG5zgcK"
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
