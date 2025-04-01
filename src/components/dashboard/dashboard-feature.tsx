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
    "m1dwxHLMRLS4U9z3Diz8vuxt6czT3E1s3Tw6pbGCJqAJPAbetf3RmRuGRZzaLpzrV6CzbePe1LJQYGQzPrE1tpW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hi9cwSzf2nQMxCAvaGwU7yfj5HurFdYp4sSd3m3sdLmZ2pwZxwCBp7jMaU1KsD6qo4tvwy8NVQxxvkaGmM4bbux",
  "key1": "2sUFBLAXuPCdhnKK2aLZqJHTSzm1kyYecgNg6LL1WzH5YA79VFi6BYnipizqAz22Do31MiEoA5so1KFBJdJ4uSfi",
  "key2": "53LeXNAawEA71VzZFBdGLbxbknfrpV8FuMzg4taAhYJKNT5rJDXyadmwgNAAwMr2mKmpdxFbsRJU5dDRnZeura78",
  "key3": "4f3CAQt6LLFYHvEH1e4yJVSWpoTN6LUncdjLsvWCaQTzBFMuWE3Gy1sXuUs73Mqcv4owfWNgG26nZJNBGUWtak91",
  "key4": "565aJUxziHa982kGjx8zEa6EtbrzMtgdMPcdK9ziJvqfNj6J2N1c1DorvxCCZNScfap3mNcJixAbEu49zhLbnmwm",
  "key5": "5TNASnTEFWvWg4fjgkUcZG8cmyt6vNkvxpebJLo5BtaYoNN6FQrG3EtGJuRTkSSYRFALvbrqroydwp6arjFzziQ7",
  "key6": "2v758eRYLYSQxqzn27n5ty7z1dK1ra1d5ymoQxGWxifm1uBbBJdUtMNSR8gsxNERFKuiN9iq5DEJpkU9uftPS9RZ",
  "key7": "4phNYJuiDGxzGp4qqKmDzrkH4vTMisyE5nPgVkvC7qV4dEpKcMGHJz2bJGuohB5fxxti51ksCwvKF6SKHEajeA2K",
  "key8": "3CybxDne23EuAYprxXCK7tgzrVbHC4UMJ6bh6rfTUTSmjfWHoWMX15QTQJ1oj5PpQ8fbfwfAFuBjzmHzgKzNjoX4",
  "key9": "3mwxPPurZrFRdtQ1fqwdCzaPPwUknYhfxX2wd9ZoYbiFRfNKhKmvseiBfi7SobPRkUKZ87TnceW5zkNp6TCEVfrg",
  "key10": "33QnPPHEuRaKMbYmbSSRgaD7SRt61bmkUT36vcezYz1WTer25HVQDMQHW9JZ9r6cnPr8whmMMFTJ6WrvXEjq5dUi",
  "key11": "2X1UiFRpUdyhuyfxdr23rCk5hePDRwnZs9YxMPzhHcvE8m3UsaCoB5AjW63zE2muQJzMNsoyTUrb2u2ZpGwqMdvj",
  "key12": "5sKAkseTR8SJUZ3AAMpWQG2xJPMEMmYkiPhoAbF7NwLpYkQZcyhPw3NsyXZurKYkeRTWk3z4y1qNKbbgfYmximhE",
  "key13": "44ZHFWSfqMqU3j775TJ66YDZt722gaosnJq4wEKVVvf7rrcFWaxeBcNFV96uxQBCArhqyy5o82XaQ6xd2U12gQVw",
  "key14": "437zD8HSdfb7oNGU1PZFBwzpmKbiwN4ta5CdEUS5F5qajzsg6izhA7osaRBj33Pf5WF5mAAWr9GyndbNbnZnWYPe",
  "key15": "4NsViVATHyF9p48EVV6G42mrFXEwS8XMBrxzxivXQBKNyrNMq34Tj3EuUTZQfV8gBxM9PryUpousXov9fbU7NrZN",
  "key16": "2LSuEsvpjDzGCit3AVnYiFsn6BbVodsp8WLqLGZUCnkqdifiNDTurwxwJCSBuRRXhgsBDaui4ho3sWB3HKG8GsAm",
  "key17": "286CxaVfTshZ5ih9mpN9bF9SJvsbqGpYY3SkyDEzMQVoGL8fycs477pFRew2U1XDUo4sNFq42MER3Bp28iG7Ed2A",
  "key18": "5WFYJApNwzDBpKzAUi5FMXsC2vt76nSpoaBCS5rad32otMAbmmNj6Hgruvf2NmU8VV9sQkC9tFXPncGDKLmMHmBJ",
  "key19": "vCkF8jtBZy6u7x8sk8Zmi32gMGKE2T3KRCTkdC6pbMPSEX9xNiZoD6gvB3K3pMLfhbkA5jKfaqTVKpEWXjgLTeR",
  "key20": "mqD9WDdneUfpgc8G5RZ98XstUqZNBKAS88sphpvR7nJGAer8z2TbACMLhUAihB47pVcxuexdVfZzi5jYVcERJyL",
  "key21": "3eA5THQ7QArW84os62H2y87uAps51wkzMzUp6q9ac1SqCgkDvXoVBdY9h2KBivmLs1WHctRcZYNdw1rKoYD5RfBo",
  "key22": "335orGVQurmf3bs9aq2yE8x2SYfpxL3DqZKJ1x6tPQyz8BJb6xEj6Bi8NYwJ6md6kMYaafwcUWLkxUq9P4oGiYJr",
  "key23": "2iAiW9H3RrRfVh7tYuQCCKimWN5wYtjVUtdS84QzFcQJnPC4jDLL8nfABLnGGYG7vdotezb69Vo9x8hJCRV66myf",
  "key24": "2zY9dhjfcV4uEXMDqBTNUhWouDHCU6HAPS8DqMQtTWrgekNaHUPAugVR4U4Jtp8iPYZUgYrrMwBDT2WacHxc7srv",
  "key25": "4MmSFjYfSpckJzAKniDMcYcLNtYfSptKJQMuatYDtFKsQAaNxRXp3kCWQg67tbpqEtVEtAn3pvwAAM9PJfbYcSGy",
  "key26": "2rnbgD13NafU5QRwXgvhpSdkgT6pt1LWvMZBLFUT8Ct7BANWTUWxBwhoAzPGMnuUGdAH5y33ziWnVnx9r64kcFEg",
  "key27": "5CPvdfGMbhpZhTQa6aqBe91ZiQHmX6W4CDajtX1dciDff3X5tHdtxJ47Pi3dXjQfZCkCeYivDEnNnUu6FaJwRxby",
  "key28": "645rMLbKxsW7FD4LYHtfocrp5vApAZFfG4Y6ZgjjywaPgkdJhM6j4Mv5L6VRQewE2p4uGiinRHUb4XTJFtkK6wLH",
  "key29": "3qZXxaWC7cFYybC5oWGsVxWPQyzCYDWeTaMcDyHX4dTKSQ6gL84ymZdBsabZGwPBXC9vbi9G8JSzuqmFU8QySocF",
  "key30": "4Nui8S64ccpfkE96oa1vDLLbxQ1GEdGEDkqGkxirNP6z8Lx4tZEMw5w3WuKmRVyoGEydtYsr3rYigR3dwaUhiaQe",
  "key31": "bcn13EDEaSCKbaK6z3Ng79L6L1VoVHQYkcPRJkjgBAeqArcPHD8fTZLaeWNZzzZZYh4AFcC1MtkH4a51L2AmEro",
  "key32": "3B2UwWCMamcFhWtJvsX5NRa2we9vXGqKPVjZaHhXbpDjioa4JsyCJiiSjm5XYo4tyLEKU9FoE9ySJXRFHPF9HrMq",
  "key33": "2YPTDXFTgZ6T7DmNBbCDRbFei62u8UuN5So8HwLUuN1MzoVckuqmenKBikffZyWdNbtVxVG2PLdmPKTLSXv7VriP",
  "key34": "285wPH5fC9GrNNSwpTq6G91wpPAftLfjJT6fqpxujZHeA6U9PfZiEQbkNNMk6Laj4RBR67k3SEPMKJYeGhiCPicX",
  "key35": "5sG7E5EyP7kGWejDo75fCVocoVfXL6hHXubYQAJQikMKRW5u1gCPkoCv4tJ2ZKfmwMm4m7XR7L7UGCsDpMUsPSVd",
  "key36": "iqqBimYgusKQyUnVAEyJajJ18WAUPS9gwsdct7RWFyJ9CwDg1K8ieTt52kE5966AW3rRpbPGwdWez6Lq4Nhat9S",
  "key37": "3WBhx7oWq2qADSyQaLcZn8YHmoXtb266Apk9VheaS2Z89VYd8drUSBgQhyxSFLg3xTZUm6M1pi4xsmkNnHbKyymf"
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
