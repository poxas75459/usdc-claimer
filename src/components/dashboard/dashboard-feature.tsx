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
    "Mr91XeDdcq2cPfvy7RMdbS76MKqQ4FyQBN1Di1bfGhCiqA2tX98tqT55N2C2n4DDRSM1u17dYYG5P8jXThQQtHf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mtKpbqzMD5PUSPWgbzor9GGMWfHheE439mJcGByPDa6o82TtSKLBK1bQx47N6rFVoThmvCDSnpGwmxd65EQFrmy",
  "key1": "YDrFGuSE9P3mCP6i5CN22DX3BwsEP6f7vHjz3WSrDUaeoAHPHzfjEX7zKoxRpkuageoz799APfEN2Qs1Y9vRaHP",
  "key2": "3u7EbjSZWn2TCkkVfUGLWw6wDtn23i1k1sWWepR6RspwmGLG1F7ELHZnaUiGmsRBvqtt5dQBHufLq6rpv8zeCKEw",
  "key3": "23HPTiuUKEiVUcVFBFPDZEuj26cjAfcp3k4CgznNppYr92P1erUFNcStW5vtiSRfgfUFHbXPVj63LJtTk7dW4dXK",
  "key4": "3eERYyNy9eruiQyPAgBbowQ6yad25i6RdK9JkDJsdQZSDz8bUM9SWEG9i7HnGPVfP5hR7hf7eh6qcpucgmmaPwvZ",
  "key5": "3Atq6xJ8aA8m9qwAuLd3kjz8fmz6XuAzeq1S13YJVGKEYL4LBkoa9g2f4AqA41kWHMkxisDVFhXhf7zCsrzHKzpV",
  "key6": "3w1nCBixPn1gautw97ih824MpMnkzTDA8qnSgsGbmAoj7jdboxvHdN1BswZNprfdoc2c6hX1xCy4im4FNSVyKM88",
  "key7": "5Ce1f2E4pgdtYN6cTs3pTdZN9PaPtsRpK2YJJZTWVdQsoVxKRU6cfFoZeT8xGvictHbrKpXu2bm7P978ga2dj2zo",
  "key8": "5UBaWquAkfQvHS58jQhgcW46FQXbBUrdzAp5TGbT5aT4ymjEt8xkj1aCiP1mddaVmLMEcmXKyYANCvEzw3GuP9gZ",
  "key9": "37fygRcGm6q7AaqqvWhmSxkdUd2ZptsfkcvaDLCEjdpfSo6gKxasa9tGBjjMCWzRpRQ5gxHBhX7W7oMkQoshde7f",
  "key10": "34n4KcSMrU5XUjaGWx7Q2L4zpJ7Lp38gkUtXsEsSHvrvNj34wtVDFcWCcSswASdrNi3fERfoVedfdrqAjPnCcTzX",
  "key11": "5zEeeEfB1EX1yKDD681a5QLg3GPnLV59cayfemu7cXhPu94kcNCeq4bjWJJTaw2oS2AUWQdM2UwMcpGPALqa2jky",
  "key12": "52hwwYcYySFUqm2wp5zUYcTGFntQDv1JTLrDgSrKNS66PrR6GCvpjDrjnARUgLvcxqQtfAfpWGj4Pr3X182bspeC",
  "key13": "5zz5oziB6txkzm7GdM4bTykKPXNBeyRy9CvBAS6QLkrbeE5T3ZteBMmwRoiJg83mb6RircXq2YEZypxgsHgcLCMJ",
  "key14": "kQxypm7vkD5BL99C8mYhemPjZXBbnSDmfEvqXyPcm3X8ht5KmqLxrjsdTEd7ZEaQJvXLng4KP5QzKpF4mvTRwPu",
  "key15": "2wa6JyR1E8UHev2J8JEWPvEFCRUfF484XfGF92TvUzownhFCuUSuoYn9dAPBkioDo1rvjpEorjFpkzo2zZjugJFT",
  "key16": "3hpR7R3jQN8k85zHUBVsXRZ3sLMYoYf4ptE6GVzX547bETC3huLvGaR8FRujUVUnEVnv2ieX34XEfFe9uNMvK7C3",
  "key17": "3MYmmpBqsc5w1zKGs9tTKb3hKc2fwiFVmgQUn7jvsA37XQLp8C61oFMFkcJbFgEmS58eidvQZfRDyv3VshVBzpcf",
  "key18": "546cnqu5ijMHETZ8jKj627C99yLNopAqF52P2jhaG9pq6DurPUL4bJzVyg5Lp7Ko2fioYJs8NzHo4C3qkCdX6ifi",
  "key19": "5GgVSDEgGiWT2XjFt8hKuAJRyVtLVUVNLZqiHd3Thi2vDNsT34KifgcSDf83JxoAetUDbvYSj5bgajZynsTmmgRq",
  "key20": "2KWwYUKcRhfAsZdxZNk1nMtHH6eRKBaqkrFNRhKb3aS5TGKgeMA4kLRbu8vEdqgN6DQQaL8UuFWQoeZvSwSFNLjF",
  "key21": "2WoV7hdLv8zHDrPkmZk7DTcstaeQEjvShVpdauKEAgMinR4DN9t9YCaGfcARQYXKcTX2B9brq9VFAzspUyPMaYZK",
  "key22": "5bhw4onXtcur8QKdVrNYKad221EbP4YnKGtyDTUjqreWb27mZeA4LTP1eCM9Z1oDczZqbusDHnJNszvfaEw5KJfB",
  "key23": "MXCa9pyYVu7w4xmq5rY1u4PU3YPxsuYouftt8Lk5sDt5od6n6PEdmwkzp1Nr1nRRrwDBvDCpjt6CYW7hYfZBvuW",
  "key24": "36ASxiTvxQ7GFfJrFvQzxZ5MeLRPSdhYibiRTnSNDyMX6ZtDNiXozPvYQyVixkre2fRQxogyo98fnMWLrrMNhyY7",
  "key25": "2KmQeupDmvSYGn76cWCzokWpodvxyfYyqPfDJk9AjBfHnsKmoh5Tbx1DVbtehZ1JAoKxemRhefcquw5HW9KowEF8",
  "key26": "4NUz3wEG41MMxLjhoALpbEuEynd8iXTAEkNrjZCLyNYvCV71sG76WxvTxzXVgxvm1Pgrtay2VAqAhR743iYuiZLW",
  "key27": "5bJSwTr3DMo4YbLi34WSAiVd9R3hqE4DKsGU24cVCK3tzAAxisRFZ4cCWoFLqawoXUjse6vZtwh2pgTRMFiTzZuw",
  "key28": "AUmSs1eJb9NYdsWpJc5k1bysw7nk3zAqqZab9hiBVjsCsdjCrsZmLREoaTZFcwN2BWBfFW6q1f9Jd9SkL7F8Kjk",
  "key29": "3RT2eE377hD8eNURce4Y5RAZrGHvWbESxFuEyUp6wsTui5JdtX7VCjjuSaYbcdNhi8rVENpqqa6wo1r6AtbeBcFY",
  "key30": "3rZPUg1s8UBEmDpuUDzKwsLTYfSraJ87aVu2AibsnCa9zDBRG8zVwCivAjqvpp2u6MpJfBHbfYnPihJ6FNT7K3FY",
  "key31": "5e8UbX1dtqjxF1dSGVLPGg7hCgJJehq8jzJ6iQNqrmHqjXfv9VS3D6qBLqumYLR92YvdLYMppgL7hhtUjCuufBCM",
  "key32": "2n83MPjzNoxq5hQk9kQnUMjuZVTXRkdb1PvgJ4DXLuUvKNmPs5PR3cxCPF81SWBkaMmte2fmqCe49ndgVDa88BuZ",
  "key33": "4EmLycDDHTFfos6kykuKKbEefvdDECQBA5Sk52sGWZE8JWFq3reTA69Ho3WKiHAsaEj9rUzhpJxLRXnm3RQp1bxV",
  "key34": "2SMvF47HP6vyF4QCFb1FMtznhjm1JK3JipL341K7npXqoPaV5TBC7jwvaJDkY8gKJc3r5yU1Bp1Noz7pety3BAUq",
  "key35": "5wCrYzWAfAbEh77iJhkkDboPTMLECkSLXd9BXaxosug7jM4wx5b2nZLxuT9fa4j9qRjZQuqGKdEGmfJSPLSonM78",
  "key36": "ctTdsApj3w72haV2LRugBzAN27Wb2UdC8atVa2RLYh4HbVYXLZvjbpjy2zm66kM43bei5RqVzSXhSQPFZvknX3i",
  "key37": "5eBZQ87f57zEyG3xkGmf8sfHhc1EE4fmiTtwXRbLTvbV2iZ8wmLCATZ4zvi21TC9ixJHNjc3J5PaLnk3UGN9RUaE",
  "key38": "3JwftNo2fcDrZw3fg322P8q2fHym8KSNbqQFm2G8DBs6fcTNRtgTJBrFUfwGDhXY5wMmNTQuTBenEATvfAic6RTG"
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
