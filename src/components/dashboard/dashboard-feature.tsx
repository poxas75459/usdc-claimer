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
    "4F3dnEFCMVoHyXbFAMhksYBhjoaKT76LWm72MMGHMwwjyAJaqiwg1QLGC9yqtTGqiAhM2rDEo358JH2GRutg8ht7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S3YuSDrNYavfWAMY3Yf26drCi4HhGrmjjgqQKCxg3FGf2pZfXwTs8T6Vrfa6vrdS3UF8khHvHRZLUo2MkefFu3g",
  "key1": "29p7L2DHbvitHDm1wG4bj4MJUrEWhmBmvGhDZVAYDDVq16qewPtTkeaVsXf5gcP9YVn4vc9MKhTDWQKNNtvugyvs",
  "key2": "2jH7UTRWca7BWNXGhaBh3aMb2EKjfFAw47aU3LA3NbWGRS4vU5a7TBLFkqsCDUmsciZb1DV6PGGgAHSZ8HiZKwSg",
  "key3": "49mnscLJxQxA2bbXnxndB8nAHXdZ2ypYtN1pbas6q7YkRDGKJnXudcPcKDYJmkfjCYRMvDPaX2QhbBohBnhD4fWf",
  "key4": "2pomKK2Ltnmi2vxBcE7TRGW8aRZWUvsr7dZZcxYL4h6p5kgCzyS1wfxF7x9JD4tecNr5FtHMeNibxr9jLGViLKwB",
  "key5": "vwBGcppaJoNFxvEvuDzeo7gNqkrgrCLhe2CZrmR5ZbLiXbnyvztvdwULZ7W2GU8GQrkBi3c1sNHfQxKFeHqmeHT",
  "key6": "5gDLRYPfqPJ8JfdRbq4i1a42CvRyvJ9aLj2f8F1utg1iaWA2X4TLTL1rfTjSHi1o4ntTgw9KXZ4GyYZ9NXz7zpqy",
  "key7": "AMaUyATZAQzpLBbp1WeFyPPRKC4EpYhVnMM5QPNSPzEhx3GpfBXVXcyynSZFEYoySChXotm8EHC2QKELAVCdRSC",
  "key8": "3vJsFZ4kHGW9EMpdcZcTzZHDmM7ufp8KRLqo9RdsAXgtCY4RuyXv3GoyoR4YHqJYrZb6juwPf2nf93hy5SJuY7Kh",
  "key9": "QQe2v5kirz287xNogrLSjg63tNrkGAPge8jUwCt8G41a7sZuQXycEAfme8xriwX5FxCuqRjHmWVn4Fp9AafUyzr",
  "key10": "2zcVttXYdC4sKGMAZ3oq1surh7z71Andn1V5AvRd9idWbj6N2V6j23hM3pyr4aJ7eLxwo6uo1s34fguakQQkQbJ7",
  "key11": "2YekMEQddWEtmdwwVcnnaiyrbJef82pmLpnHtVxfjSoiHZrNqNtVKxfKUBE1vbvg1LHRrYCe179RqUKzLBcf5s7E",
  "key12": "2EK9ZTuxuJpGSV3xDK5ocDyJcWASC6dKpc3pWc9kkHrQex6SEmPH5MYkFNYvktXrHp1BaGXQFdQqd9kLyY53w3Z",
  "key13": "4YtzhaDyWA3sHCj8fBeJrB1LaR8zx1G19hS4UFGqKHG76dY1tMoHaSvo43JHCAP6v4vpnXNn3TcY1VFtLpEftAMu",
  "key14": "5Yk3b1DRDZWbgeNa4UJLgaiDy9fYczbSYZUQLRqrbkvEQ6CDSzUh47EMbv8cSmYhEhqA2B3RXn3KVw1E9B8uryi9",
  "key15": "28ivmr3WYUHv5AZPGU4KoTZFBoDYtq3uE7AjGcMHoGWfe8Pgp7x99WjoHb6MoFpc5aPQkgygyPusVZ52N5Kcn9KX",
  "key16": "BmMv4i6FmdHnc1QGDP62MxV53bxnZF5NsMEDcsmSxfdNtNwRqZVitH4DNUWG8p8sXwDnPmc1YNCFiwtFtz998PE",
  "key17": "3XBrDjXbfWizV52ByXVgWf2S1d1y43Y44ryV2vKCkNSXdW9nQV2xvGM6BGaJpF16NHaaJDKgUig7jBZr81TrAaKY",
  "key18": "jfJvVx2DV19ezs32UpKnkXmfHA8ooeyWcaT3RZtpLC4VLhLQKgrGFZ6bWDFzaPecu4qUnt5911cbJpUkYm9ehhM",
  "key19": "57c56xbmr1sHNMX3o2GS2oZ5cHz1XpRqDnNW6WnLChsqL8SWf63SErAeDoVywzHnHR87pFwFF65gaSbHWAPu4oAT",
  "key20": "5bDPeRexxcprzPDwNuCjepExpDx5pDiwN6ajEgvfPBXxfBD2bCQLURxZMCVSMPca8GbkFFqjEFSsHEfZZEpuzkBq",
  "key21": "4EovZHoxvGcj9JQJuqQo8hS3mspS7ovnEmAjZrgNPTVFvR7svnECyBjTsQWBRTgLN3mbpwxSkNjAQUoip3nZRdkw",
  "key22": "cx9ermzgKSeG8TFVA7mKXksRCtC8P8Vt29oeRuEjLnJfW9sQGSN4iweHdiffQt98PKmJqsLJ445JD9z7KLihLJx",
  "key23": "tiPa2r4ZsXdW44tQ62NyY7DQLBvEfM7jJP5yXT4aqZaysdRfZVSC2cEn21mC7LVJi3wHNzyqMnp8fp1BSXJ14gM",
  "key24": "5cLkW9C9G6mUxodgx5SGptuUnWkCGV4rBZLaBFJNShtM3r1ViGj7p852yHDw5D3XjmfevHfEcNM94Htb6uMHBSzg",
  "key25": "p6uPNuKH9rNkxCFmnNSiWQ6LkDWrNYG6ELB1niNP2KdB6aofMUiVRMxizxu2uq27TTuezJDQEGXrUboEB4thSbC",
  "key26": "44vaJGzTq7jP3hzvmxgEgcvaeum573GEZMGeKpj3WijWCQN23wB2imsxiLQtz63kNYY2G9Vs2fANFtmNCGESSvfp",
  "key27": "3AinWDe7CteKXJKBqfEeAscuqwRWZRZD1zPwV8HRmDXqUa8KPGjPDJJeor1uBHWsM9vzYpNgURALRWRTJL3bLG7g",
  "key28": "3NJE6fHN7fFfRzBK6Jmbx74FKm1LDh4oYT91y8hjaaEScxGdW4bg4sNY31Z6PRm6s3kmtTtyfHyrKjgQREZHFKNt",
  "key29": "5SfMAEWJxHXnsosGJeZvQDyKL27XFjQRCZvt6gdiWzJSp9RBjzzshgNNRpqc7SCEEqcfioJwGxVbHHWZ1ozGN1tz",
  "key30": "5R5i1u9uZiNHFu7JnGZj26cRwKkejz4acNrkX5m7CphMm75gXTQcswM1nkmey6YWFyzqYvwJpmSebAPH7EsTfbV2",
  "key31": "b6WQgLADowvVdYJnTfUq7MSEuaJBxHWy9QEAF3H5zT97AwuGz8wH2hwD2AYTajtv22LSVDzgaX1ZBaMCQ5Z3Pq5",
  "key32": "61o4argXuasUrA9TyS5v6TeFSNeF3edvq7MXm3bWMTRF2RWEPMwYnrFBjaSE2ewWBKiVmVtQcekMuZZbaMTWfQNc",
  "key33": "2zUWq2YzoV8KqQHn85MD5j7AXKekPyV695gMZLZLPfZvBhu8Cf1fzUzMEeyzDq39eQfG41aYS2Y9nj4hz33TwAK6",
  "key34": "4uim1mz6hE39xsAbALjfFtzZgQEbijCr52xDYtuYzKCVBkBa6XyAB7P8qdgnbUCCeYVkqX59Ee6GUGmuEwKjYooB",
  "key35": "45wKg5dHJ1yFJ6BzwZBUY7fHxdsmc3nTHJEbCrdKsytC1Me2hvx1xuYhUyTzDF7bebc62aFuG75de5dqFM1pPsg8",
  "key36": "3rN5nJbPzLptMsSzpBwmU7eVBgr6ZZXYhzU9VhDzmNdjEuZUZMQZVQfb5FvyDNNrzS33ym6pfjf8V9yLWpn81KpT",
  "key37": "3RX44pfaTESBqXiWdtttkJxpAQR9YWSXgS7ZhtmVzKproH9hLsAUvsre73LLRYehJQuiiQ8SvaHbS7L7zrcgC4mb",
  "key38": "3WRaDDkiEoDstYZNXNqBKYDdzvZUR1nUbz4jJrmB9gWLZbXTr5MK8sso6YRyW9XCU8r2huyQcUTFGqukEKtYdPLC",
  "key39": "3rtmFMpSAhXrgeQGv8EEQD65EYU19CBmNfF2Mj1nkdPWPJ9sQYXJtx5f46yRfWy2i2hc6uM4m384dHtLC4RxCnyF",
  "key40": "3vStGdANzbaXiyzSGMwuGDjBRCBSQayErDNa6m8koCptbDeBDksYbVW2v7E3Daqtaa9vm47DHzU8LR2QAAuukqoa",
  "key41": "2qRqgzE3cApfokA6ReHVdfCPDejDyDxgGm3XjVhNixG8JyEYtprDWgrsCFoyYofv4Zsr6opNGYFf3YW1iu32ntBT",
  "key42": "3M6db1VUFe4LLm1ZUvXYgWzQtyAMhRb5jfkNXdaSnVYS5N2pXSJ7DRzYi2pUF4ymAjsjwNuiwobNUC6x4eouza9R",
  "key43": "2AcH9S2YnwsBmNBDQtnq8sic2BPQvVi3y1xyooo4AWAjLLduyMmTFkCkCAnf9VeJkwmR8P8uRHe1iGdYi915D1Pu",
  "key44": "2Cqs7w1re511Kiu9qeCoAeTFnKixhCKF3fRsYk6xZH8sUAwFAs65jyL7UkM49fVK2n2jERTMq6mVnps4Ft9DtvpT",
  "key45": "5553Ae2FKv9XGfBuie2ZwUGm23QRB4QvLytdR1PrrvPZR75m9iJ1TLstfPYXVhTtevMkGRk4mesZxdVj7DDTrgJ3"
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
