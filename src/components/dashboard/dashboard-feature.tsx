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
    "4Eyso1gYSS73i3wCSAjTy3NnadSzBbn361h2zZJmNpEWZPrUHrH6Guw7sPjx6sr1QNQ9XYA4Fm133ziw9VeqJq6f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QwknoVNx6H3269gCCTA52e12u6kFj7KrbRZ7k9iSwbjm7euiD4PizaU5SVKi9B7MVuu9ZdDe9c5daQoPvsdZ7zr",
  "key1": "5FwLfW5tBR13brp4PZNWopKFJcEzkgde2amfpLdJvbKe3ztfv3m8FoTMn17U2LUrDhiyvatCJBYw1FwQ3Npon7nR",
  "key2": "Eap2NBuLVmJ639EuPLZPvoAfwkReq4U1osmUpdoUGoGyBknb22joiiUQLncJLCQZD2KGNzwq6AqvaWDRETm34v4",
  "key3": "2RVMY3VeiJiVVozwMPDBiWoe6eJCmTpHpwiu7LUZzmyzpLCkVryDPqgsGdhJ2MwByC5q4qjfrTVCikrU8TadutU8",
  "key4": "5ugMAdYNMcjKa4kHHxbHRc9TGUd7Rf5FkuZPG4AethzUoYdJBrZSdMAxo8xM31YbURqrCChE3DnHzs7Gfy72Yjko",
  "key5": "57AVZmGDCAkHFw8WhJa9LfS6UUbAPradPbXi51zF52U8bAu9yBQSanMtzEyacZAKcNg9s1jg7EZxCLNbLvh6YscN",
  "key6": "2tyApuWFqzxzen9Nupf9cuZetyE1LmnsANHgRZaKUm1jcgCou1KMrzcmFySc41Y4LfPFHD5si7yBSUMm83kiPHTk",
  "key7": "aV26Q43q2gqcoKg7DnU73mVpk3vsZTXfd4CFN7oSiGDGbGcjRbw6EHNzFZvDn6nnrJi4GBz13dPnGSskxPKQnEZ",
  "key8": "3UJhSzbkDw7Mm51QrTMQR226yFwXiCcGaAqwnLrNkjAcyfh3uggJji8nvsmkJVD7pwWK6CMUYyF3r747oZCJeHp",
  "key9": "3hKUmoQiBd85grJv8ovMvLZjgJxvo5RfBGXmUUE1dKyxrHguBQzetCAhmW11vGviohgaqYNj9Bz9bZTnaRWn8iLe",
  "key10": "66wxm8F5FsfAdfAyTHt7p5zTduBU36Q1kzL5CFFufzq56vPvabxj1U3oWwxo2Kdkd3n57CLda7f2yp8nN7FmpJoe",
  "key11": "Qfr8bWzhHA7XxKX44sJjXrZb5Uf4e9QnvpuLrbGDTNXi5PNRJyZi4ZueBrmERVKjCD5zYbeVmdQVKZg9yNRcqk5",
  "key12": "6TQKurr4PGXNb5Jm4KkyAyoKcemmDwDkcc4Qiz9qyQXoZ2rGCNxv2xBzTvpRTc2wQ2zKwGBsSdvchhZc6P5GoDe",
  "key13": "4Me9Pk5nWdnZMs4LtN76Q3vjapDZimqBsZEHdTbmPzo8afjoDb6PUxy8R1PyYvUBeGS66ihhWtUiZdTaLJWEHaEa",
  "key14": "4dLsD4QCYCaqkhfSsL2iZikc5S8YJ7LRWTZ2kTN8QWa2h8k7nyP4kMQt6N1155gLoQMEh1QpQWA6VeqGXyAb2ghL",
  "key15": "42h7HR8tFbhQbVdHX8RotnuRvs6HWC4fEKiFMV6TKv3stzWV3Hv5iQKsmFdVpLFzHqRQ2e4T5rniyjv9tZUJzfRm",
  "key16": "2fZEdYLMMDNXRQUyrZPrJe6ZATSRAAhzWkw6mpq6TrqEt7JNdkB1Tu6A2Cnqge5VR7cvnAR5Rir13a61Bp1i1ZKE",
  "key17": "3bRDHpBSrB7bNUbTJeBLQuLM6v3b3S1MHfEcAbtdJjC5PK86PJNAoGfKYHydMgEkQZQ4kf1v3qANY1qGH9rc5Qaa",
  "key18": "2tKQGvsZFCWFkrTh7osqST8upr24tVXkXTzmNFzoRCS3qjftwFaWDFqchz44dAYmjLhBhzL9ED58znHzE1shGKGv",
  "key19": "FfjAFkCrmGPNEHwp7pyirihbgd7QCXXBkCAobbV4aoHeZVZsB8Z6o7PNgsYHYGc7CwuZkMQzH5ak5DTSQByujoN",
  "key20": "1kpQZsjV8W5A2DpbkGbiFA5CfVi5r7zj4nqdsQGaj2kfA9a45MAxWDRWPJ5L3MH4FXRtrbsirpxcALkqHfoWLr8",
  "key21": "B4XzdGcQomoHcEibWBRYzxxN8SsLLFyaM5NoARHiTwh2TVTGiM5Xcw2jdERCu7bfw9dXCV1cHtFZ298rhPpBT3K",
  "key22": "3JEMDSfqjkkBUVk5CciUbBgcQZgotypZtbYZUi2zJhQBc3hUaVP1Y4D1PeBGxCiEhieD5QJsYMJRx3vEVstcgVax",
  "key23": "2V8FAdW4vGiXs47fdqZ9gStyH2upHsJcmNzP6ypmAgpsbd3sfjJmHxJteQzE4XWq4SJMmerLrUBLMPHTmDk4jNhJ",
  "key24": "39E3YVdwj789Y8oJJVzBoj4XybLHkYYehWFPbXjEhqxtM6i8JAdjxd53Gn7j1cGWWFzUkud9J2QGhuU1beHA9g9r",
  "key25": "4PggZxfuhEbsfNaYu6bao3Vv9CbmCMykTYJeJ3DHiL3NMo6TkJbopPUqsg9mhUKb9Y9xDhDid7RNpmNzHgXC5K1R",
  "key26": "ccUsWkLGcMG8bGC5u1HVoT2tq4qw7zU4Ab9EEeTYpHhdzT6n5wQWwSQxVa1NUQkJYcfAsG8U3nSCMxYYkA58PgZ",
  "key27": "x4DwjWM7vxagjWDbMYmhmPiFAUpu5v4BZV59pHNEzQsR5djxyzGMJneyqFWoqSULk5zkjvWsxfCmmiKYidf2mTQ",
  "key28": "2yB6WeUpDVycEwMjXJQ5m17ME8xnZPNwfJfjCuB8nnsmLBgLHxTsMVEFfEeoTthvYGf3htfQgjWXdS9KddWMKxLC",
  "key29": "mpAz4hYPJfjdGE65u5nuXeiurQ7dFrtjXHQ8wkKjXsP5xXzx97zNJozYDyXVdEA5g2NBCYa4rQ1qfPr3kXT52bd",
  "key30": "24fU6xWLvM6GNX4mdgMtijbmTDQHwRV5D7pZE7vcjPbXvL1LFsoior6aEEnQzCXhBCQMocDC4d25pSC1v4NJ1QsL",
  "key31": "2ZWzmrHpwigKAmj68XnGxkqx35SMpfwQho4RwPVnyuE4BYdkUafUGs5KiaMLKFMy7DAE8JXMwuxnd9a9zfH9xrGv",
  "key32": "37NPZyue16Aim2z8pwJr5HpJRQScLWgLiqSZ1k4948NqSPRfSZGs83a6udpbrDjtRfWkDrBmpi7Qfp1BgasUzgjx",
  "key33": "2uHnUtdrW9KHRFXiid1fGeoNAaK5RBn5M7osAcscREb7bF4HYL1PUrG8HarE5AHHwUzDvc8hqsXzs3XxkzfraTEd",
  "key34": "3THQkagDjPMurZ1EpniQ9zzZmG8yjo9D9Yn3ZQr4zRyun1iRhtJgD8jXZGYszcrYPeXtkJSDbXNj1oGN6DU1cebC",
  "key35": "555NFvTKDiq2Z5g9SktdDXPx1QPYihpUqZtU4qKTLkQVAwB9rkvXVhGxo3goN1hVU3cJXQmZWgGaZvrQTymXo73q",
  "key36": "24c31UQrNuH255XSF7e97NMn6MckChBLMnvnWWX8efa326CnX5jBf7ggPPHJRrPdzRZxhjecAT715kciemb4DLa9",
  "key37": "2ejSdYv1n2hthFfPs3EknhSTtGBP5nwqhS7aBTCHnDQAWZqnjSet4DaR51Efed9NLsy1A8mV9WPWkDcTHPa4VQay",
  "key38": "3BhbVALzmtdSBJFWVDH7jP6wYkSn7dK9W3DKyBsmvCS9Wg5FLzAif6NNBb9iSyEaKLXVhtWZPECNR4fJjqBF7G2n",
  "key39": "29crKW1pFtdsCRncE8e6joBBFGZ1Bf3MFVHQvJeg8ZJebH1seVd6ByosBHi3i64teUs8dJFs3G7NB4rdTXPFzpjr",
  "key40": "o4JMSJoe4oiyRDTSUTTwFxtphUiUSd3L5AmUSbz6ENgwmEUfbGNuDyFcsCfUUPYkrFgtnizmyFicjhgg3CApr7e",
  "key41": "5GijnZwM6S4x7UMwC54s4iERZoJrEeQyV3bvaEDZww9Y8T5h4mTxxUs1KKU41hBTtoKiEKR68Hom7mXyXvMu1PvV",
  "key42": "3bDJmyr7Zv9TrjVACGWq7kQvHAvdJ8qJ1jJ84sMRd3oHo5KNWFACMVYnfQp9hytBVMbUipT3EKV5pA4q8a1iRJwz",
  "key43": "2QskpAEMRYyhTj3X58yMRX75PMdCuEXgHopLnikWm9PtDFqkQo2bZfLPf1FjjjbsoXzbDJwy87jGsXe7puzJGpKm",
  "key44": "3JncdV4xRZVBxJom4veauvHsoFZ554aVhJjhdLAUStyybLcxyb4iewS2dqawUaDhynuS2ETXa1xbdeE1UtbRyBc3"
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
