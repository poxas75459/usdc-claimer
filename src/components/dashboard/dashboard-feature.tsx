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
    "5GjBpSs5BG6SjA7kgodHjtcTPPwhPB64YQFtvATTZcUDfZAE9nKqZMS9J2FpvrpuEbpsSQWeYJyrBhKk9aTz7NsP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G5Mnq9oi5CcTBznZqp4r79ztU2xNpaw2Xsy4WtMzL99bSt4x4JHACrWGyqyCMceVLVsukjqQpLZGcLMYL5ckfEE",
  "key1": "2K9RtHUdZyoGDWFQ4dRWPizEMaX3yPpeegDqc4VByThYccKtSY8rgiW1jfWsPcVjEsTfvqPci1oEFNV1RZ6uD5ff",
  "key2": "epSA4BCPLuBMJaaVnoNrtR7KfRDX77PLzgPfbSYCWR2LzCYMG7ipdph83uJ9ceA93rtcTb1CD5fjHZpwFz5mg9Z",
  "key3": "9z1d7p5uoHE6RwrB3CoxJYz5FoipeHJkdELF597XJmLHq9REZYtMEJkd2fN3y4yvCMpeAgKCxHeAJewdPhofh5A",
  "key4": "67W5kckioLrusBnTYnfVNG4Z1BFVqK3jgfG18tcTeYEhzBVXvmfVX5hukaiJpf7ZzYn5p6irfVrYw4g1vMxHw9t3",
  "key5": "2qcuv4DkNLCLCd4vjPhk3CBQz9KK18ERWBkfz82SiZMZFfQDJSvWzvvCFK1SmHLENzLxfQcJgaFaS8gNFpJSEs7B",
  "key6": "59W8VVyhsqr9vrvEUXye6Pw2rKX4kKcBFzYsx58nBouGf7wPdg2iMsagQmpN51Ge56unQq9wdrxWZ48c1Y2fTUmS",
  "key7": "7MfmEg8Q5SjmTy554fUeb3z7yNuzCJJonwmjFd7hrcXhSXvzMnpKdURutdMybUM9zEcMKog2ggfLZdoSiXqi5we",
  "key8": "isFxR6PYw3FZHyujRWyN4M5qJw4hxCwZrGjDrk6LdCbP1Kd2n5SecX4GiQffYzrw4HpTgF1khR5boQ9J3gZ6pAz",
  "key9": "g8t3ZmTWWib9n3FSUwPL2GBcFrqT5cjCa16Mdsd4gbPw28hz1aUPWWQdtDYbbh81ez7jAYGdB3VvafCcUZjvxY3",
  "key10": "2Thh1rBHwAS6iyqM5ftyEPrRyeXtdezyUtjn6EybYQfbcMJ1GEo5SbnnkvkwGiVyQqs3JBshgsu7CmernPHVo9T5",
  "key11": "3jy9VY2cYF1uj6MtjvJW7r1y8U1hSNZX2Ekxk3hcmekUkWSFmx2oMiCupigvtp4iMgUxodPAvzktgRTLYhHGw1a5",
  "key12": "5VuW9DgHMWRhjSX1D4exNB6JR6PkRTCpGTgEdhLTBG6CBZ8g4CXPWKxdEEzSpAc6bJRedysZK41mBexw8BpYRb6k",
  "key13": "aVgnArmLJWkjyznfPfHBhbykL2wKcnArAKsjEvrcmuauZVtq8izcqa4ebJpzkHmjn6rCP4CYAmBX6D8G5m3Gha1",
  "key14": "NtYwPz4ZXnJa2uewTDhhYpaVaxbyGnv43J4gzmP4VsKgFobKM5m3Mq5pmqb7isSUxH1FR7ianhSiDRPz7H9ti5S",
  "key15": "4aGqJasVCo6ktAzBKoNfCfgM9hz2ex1erNzfxeG6tGyXKdGgNJGie2VruKPSm65KT2k1Wvz1bFsPDLv4ig3W2Xko",
  "key16": "3cS7VckaLUMnaFpXyKFnMD2ZqZvmSaX1e7Lgh6EBv93kpnbK2M5vDbQZawbSpNZiiD8P8U6WGYwreNW1wF8NP8yY",
  "key17": "xRgNAiHbcGXstcHyXX8Q3jLANJvdoPX8pdTtXQE37yY8NAUexZtg7WD1Fkt9zxEvWt6SLcRMFxTGthpMEEESnAn",
  "key18": "3J5waGLejYxVyrqGRuw4LYM2bfgzmQWJ8bWPyHNRr8E5b9kxcXerJJiL7DYCWkUmvzJ3Q7UxmUVe4XerzzuJ5zju",
  "key19": "2oQScVeVK2NLhhYsU3yZzfJk2Ds1uzGhF9NVHW6wigr4CoDyQN14emHPL2c2hbFCSRKg7pYH7eR8VzvFkcSGVrgd",
  "key20": "CkdY1J5ABdtMJZVwwXopWyXN9VvCxGqKLZoJU9rK3vnz1TAA35HPJ4AkmjRG7X2TLbJ1aBhEgGxgPo5nx67kp8D",
  "key21": "2NBkHzpRcvT4kkuTEwVj2yUjQyYdjdUsayVo7v59QnPzET8rNz9qi7X7ikqpWLDo11nxr63FBRKjoh9NrUXY1dpC",
  "key22": "2FG3By7bZ9ZLFqgSyEcGpbvT2VmLYL4pq8cbqM9mnrCzg9v6g8muCHzghFm5jUCUfGE98aSzdc6DXioyUhHQfAPD",
  "key23": "Yf7KR4wsen83CL6cA6XJrP7mr1X9M8taphQxrGtzUVobD8fFHidQ2U9Vxnr8aL9kx1xvRakRLMgY34bKWht41YN",
  "key24": "2tucYXMywhmB6DvxnXSA77EEviu2TBYCBKE986ue6kBCyNv1UmEXVk4MqThih39kYvUF7xt7rzAHqzwpGxDTVXpk",
  "key25": "2dRVJLP9akurUZYJGnx22RESwQpsY3TJYMUYzNmT9wUjVCQwK87FGM7t6UAHVCeyVe7E9YmQgLVDNzkHLeMg2Vyw",
  "key26": "2cZmUXZ75T49FTpPuDNVRWmSoWuBWfrSY2fnCz6SuokqPAVjRyZpTXQbhNMNigcNKb5AU1ddhaoch6Eydmtyp9g1",
  "key27": "52KvtH6hxdZSDJLhNUYBEdxPH77D8yfMLJzz511wHeBKEEH8LmSZgbzcyi7wTCbpoxFLCkgpiKJdzRZzyNCk6F6Z",
  "key28": "5AtXPkiCT9JX1inZ13vtf7a1NheJ5DVj51GoKN1nrBAufbJgBDZR4kSvWw9YAdMidS48AbA3UG53VfSCtHbjg7dy",
  "key29": "MLmav1XZ6fWH7tdgTySjWWF8pSgzhr61W4pTXN732dc5tzZMqGP9zrPdCmwpMDdvcZs8YY7uJCEeDUXHnqnDTKk",
  "key30": "2qtr8QzbwY72ojY7Q3LXbycSBeqBDZrU2NXxs6rantYQ6X11AFYmEHo1hLZQuywxQKzienUTZKUKVP2FfPnZkY4r",
  "key31": "26HV4Gc37tan1jxGHZwhJSzLaza7PX2uX13CRRqWLk7rvnGFqdAAnxfvgSk5bDA5Mtr6oPiwiidNXgW9cz76fQG2",
  "key32": "4gRMvJuix9HSpB63Lv26UKNyvt8LafrVGcpuf8Tj8juy3msW33VZb2ZtzBq3jBRqqQY43gSWpJMwxDyCRxnDKXVv",
  "key33": "24DjpB23HTV8cXPbGsHvGqvjmJFpf4mTfWQquaEMBVecxarjU7S45uensv8VUSiJ6ovNX4bjWr5HLWdoBsTAnWTh",
  "key34": "3sGDAi5W7WReoHjbKCNmN3bAMW7GaSKYZQiR9RDr7VU62EKkqRDYGvajdKUavtYVhUY3dkCyKsYdR1LrwhHfSfov",
  "key35": "4gkwkEJP1nu8TM1iDdMzad3SJBnm262kpFx5qHyiggiokT8CZsBJVEjExh1CmLnkMB1z9FyndDYoKfbnEvmTZoSc",
  "key36": "26E5kGZpuLXvM4q4yNSsVJbXJo2qjmB41PDk4PrDLKPrscqtvFboK6fAByTdcQ1y2f6X6ivWNL1tDJJv2hqG5Vhg"
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
