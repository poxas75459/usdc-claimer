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
    "2gYQwQEuQcyXq2qVjzDPq4EdHmSkdQcYMfCuUqSDNCEBqLEbYpaH1YDwKCgViG2i5akcibFSnwx5K16uqDECM7Vk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5d9MPLdP6HSBBDZjniDXaR42fQhss5s8cguh3bZEtD2Fi5KKssG5y5Nm1iziJ3D7bmGsjRsaix2mVh6eitgx1BaQ",
  "key1": "4sFu8tMy2jN2RkteH576LWvriWJeyGTVVEVubhpBTR9NjyHf5vXhSmxRYYpR1DVWUdKfsiSN8vqNHBxXTTJysXVj",
  "key2": "3zoAhtfZ8mUYiWgmnHjxfgrugthefCnrdNai2PuMnv2Rgi5NWdKHWDaCvN6cUswpH4EJRZJEj9tyMqzAqGPhYoyF",
  "key3": "2HsreHCGhKJHotnuWWjmHQWiHdHpmPMQi4P5FC7Z5pxpeRgekMiES2yUJ8yJrawzXGntRiShMpJZ8TU3bkXxnxP3",
  "key4": "63SB2SqW6Nqr8edmSNv7wAGdC6CqrWknDKLAeRGHAPDcFNhPZv2ySTUZahe5Mnd9DbobMguJpJMQXxyAhrHazN5t",
  "key5": "3RMpdntudU1a4Gc7btXGMAZZSvwNPugyXXim7zH3APwYZoMA8XVFG9hhDJxw7mpapS6Nt98eFuYxuG1pV7LTGzBp",
  "key6": "3qZiDHjVXgycFKL9SMSwsB2houFQ7VN6nenJyskrBDVhHT2QChBHZ4zchCS1YZvrSgFUBm37tfzP5PMAj5H6hU4X",
  "key7": "RAEfjB2uNax1KxJX6DKtRvGAgQATFJjBTkBKqadTkcJymLDGDNzPVzjhpReptVcF2HwZFtCgt33vYjRoGCXN8YT",
  "key8": "5aFUq86CbnzRCwYcs8aVHFjm3Q14V2wBkiYV463Au4WMpzVxxRiD33Hjw5yMTyggusAuLsV9w9ZRbqfjX4mSMNr1",
  "key9": "5eEiUbcPRBCsuBEnso393Pfe2yqo5gX2kZPhntMY9UvYiNL5EgPkxuqi12RDyXH18GgF22MwfyakKLHcgqADGkxZ",
  "key10": "3XhqVUUbYJmdyHY2vebAspczGpKUnBu52ZdZcJbAfur2CyrMfiLgPUWZbX6hy2bHqkZfdVwurhFmnFS6VfDzQzxH",
  "key11": "2voeNUQeqD2X1Ln5xUfUU8NAZztjKhGLc6Ph7S2PHvs2kFkbfTpAenNYFWG7dNxw4MDzuACLvudGEeM2ejkn2XHX",
  "key12": "5WNNX1U2oSNsg34vxM5FRBqk8ukohtoTrWp4kUdVKuVAXwuMe2hCnkM8da6zm8MgP9iH2KiaSvgqGjh3cd7TKLQX",
  "key13": "5tpiLT2tsgUcoiwRmxTjg4qeCVfr1NCGWcjRQ96Nr8fymiN9jR6nFDg5NquBJLy7jP5wXwnuHVMpgtNfEPqwVkra",
  "key14": "2fj5hSTjJmbe6gbLcUasa91bJyQSwTbRiAu2KYYHFdi1fKXErBpw6chgG2X86RowKgeyPeyaDC8Vkjtw2cHeXHYq",
  "key15": "5VSodJt5xe1Qtu7mgvNjP7BvWXH4Wh3reHVKaa7gwSVjQ78DSqMjWTQsfZAoc6qoWsHJyq9dQFf456UUxqQs9NzY",
  "key16": "pxwBqgCz7PZtBe2my1D6DtDGLYHbGzL9iZ3DHgE7LQQpzpr3PM8hmL4nqUnGSSeUP7DSMAXoQwqXDgRdTgDXsyA",
  "key17": "2emLjUoXWPemnfw2RWnt6ZtQhgxRrK9jSsQCRYgFC8p9CGsBvScj5BuDcMs7jrwhMourdMa2Wf5tPHYrZ2ZAas35",
  "key18": "3o2d1KgEzvHmXqo166JnYvtpfDbbhTV7WJDTbkuyH4zy71CmEpVsNVckajeof2RerdQ95KqrsdhRxPtjTBkg59vk",
  "key19": "56HAWznqGWUHfSXLdFrsqvpaw26LgDYeojpVwLbT7K3LNdxupggNAsbymH3t4wwt6A3RULboDjNaEepE4cpN5b5J",
  "key20": "4uZz7dnzEB5M3JBju16kuYZbPPUuuRk92mpaVsSpZrWf7aRpssaZqDHWngigYU5oq3tTzRzqgdRxfWssbN4twjHu",
  "key21": "2uprAGCRi4WpXf3AHZV7zhhio7gruRpsdixpfday6Bbfo3J8wF1yLn2sc7DFFycfccnVrD7FbSFwtoKmuXDTmzrP",
  "key22": "4FfA4AfUTPRSjuDdURjiW178V9Q4jb1hJmRMgRCewoFMUnmCq7srjgU1tzExW3r326bzgBcDqPHwU4HMhw2GQuuz",
  "key23": "uBPjjKXc8iYfduwrvqCQRY8Sm266F965T3r64X9F1rhjgV48WZpQm8VsmF9DPtrk7wZKtPrTsV66bKoKyi49bov",
  "key24": "rcVVf8ZCQWt3jSqK6bn982fJnGxSeSpXUfESGt3F2ERfWwXVDJCVWAN6LhX4RPGvxvdmQZrvbdzcVL3TAsFmeWb",
  "key25": "2fY2WePZ7qHCQn81CrxguqpbfMznQ1N2Sx6dbUvAwNyYVfRkcG4vh5gkBp7kRULXCkczKx3hXHebhAgU9xfctdYU",
  "key26": "3QoUjaApHKncQ6ZSoXSriqWrPzsNfHztkhiVWj2JTFBPeRtnbCVGLeZzaKs5VpCbxzk5zvokMf27TRXiErUmvtvh",
  "key27": "3KXkhnrohaveLmkxvBQa99DK4Nn3vWRPj4yqRFCNvNsJw7rh5TuXC28gUs82JujnXqN6FLJFm3cmqufEPKJuZLes",
  "key28": "2QKi8PTCsRvoW7DLn6mhyDtDXB2Nz631k1dwNnCPaqvSWGKeBakapYjMkAUEWH1x7AYcSbhLtNUrFusSmdLzhrrK",
  "key29": "2z78rtncAist4MiJP389bktRPUMMcE7cvviru6xvdf222AxKLjVQHAVKBQY4udAK3raipEcLTUyW35RZD2VouLUu",
  "key30": "4CnFmvvioevpLrMgTktc6FgoBRdo432rJFVA9h6pHQetWZukoSDXL5RwpbqJspqFneip2wtzWhRadtCWR2i9EsPw",
  "key31": "37kbmg7F1kmEbqhAnvjhCt6p67d71ukVX9pEE3MG5NDnsS63V1TBFHSSqmQMjZMkLV2Ydb1kCtKBvWDG51Z48D5Y",
  "key32": "22WEDAAGiRCzPoCXLjxFcWMMYyNHsE21HFTKUfpBGYPN25XuU8eenqPmBiDzEfbmaEdYskxSM1dJdxFZxu4KgU7j"
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
