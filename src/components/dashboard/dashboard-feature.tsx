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
    "5QpVKCU2Pf3XjCMkbrsrj9a92J2bbbpMRSBmQHtTYzE956kcHLqrQufNbCuA1eUr6nm1BAxErE8XjZaDLgREoJd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rDDrUtSJiwMcH7D2JJX7BEdokRymJuyDGED2kmjoynkjKSzGyP6hQrjx2rEGQtUxtM657bYVGyQf91GGqzcBmFD",
  "key1": "5izoj5vv9aVHDdRxNYFjFoDv8ZrWB8tWpYrq3X5hjN4UtR2eudY8HEn2zmTT3pK61t7uRwqHpDZX4RYKN4JcA42m",
  "key2": "4GkSae7SZJdPSoP3LkgnsUWrixg8o4anZFAxgNzz1Q8nrART4YXnMnGM4zLdAUvB3XgoERA3yJZQA1adSiDEzWNt",
  "key3": "pZN64JY4ukDEqcks73zQKdacmJLqLGK4YUK4LVKVuZxP8F71PRcyWhaWMMJZuibsgKG6MVPvhxqgYXJWWv25V8L",
  "key4": "5PDGL32PvUkUvPbEBhdrSrUg6reRbvoXJgtAY2pZZCG1Moh1Dzq8rbA67WMsFG5DPBuNjxMsuRYm8AXjW6LDNQmv",
  "key5": "65Ep3DJfUBnH7Q2hTpTsqLfnHkn7P18NvpKD8q2Rb1z11W7tA1bdrK3Xy4nd7G6jnyGC3tjw4HqkFDrpgcNXjBuX",
  "key6": "57dV27AzFBihTschUnC8t9fiEPRfv773vvgS24EJr6xp9gPWtAzTqdXpJVPavukN1CpvoP8J4ADowEzzTi2Wv4Xm",
  "key7": "4hiHEArYU7i77ww2ddxfeZ1HG6GVWZwv4cgzmaSthy2YTekBhcM81YXVB2wXheTfFEZhaq7JumgtbLuE9pnPKhB5",
  "key8": "FZuuoHeG9ZTvAvMaiA8XJwd1D2VKso9SBYLVY7r21t97UbwGMjMN5PMofxMKt3tEV9mJCK7f8PnVE4yQRTvw874",
  "key9": "4E58h3NAS3Uc4FMGYFRY7P31rLuDVwyZQeepgQGh52BR12LceuS1dyUk3732cspY8vkA1wah5U8kvHVQivbPvX6e",
  "key10": "5y4ZuiYT2YyN1Lbdj3t2o43uoRDqTHmTi3K67vEXQ1KQAjR51fdweFmtpShKnsRy4X4B7EKs5bfPqYDgQ62rDd9F",
  "key11": "21MJAk56SRf7DV4RXBswKndfzTE1fZv1V4QvUFpEB6MrRuBvepDNQXUDhPhZ85fcnjuBhEBFRJBsjc2mZweBiofQ",
  "key12": "58M19f8pZcEptZo5MDz7gP1omwJVaAMsAw71CAGSL12EpL9du1VHENkJZdxrc8aPT8cg6DSwfEXpE8zahoPnR16P",
  "key13": "5btjoZ3ypGsB8prwrFQZ4vRsXT4Y4WGeuamgJsQCo7fk2sBPdyJSbypkaQNGyQdL7FLx21SED9hsXRana67GMRfw",
  "key14": "4LCLVSM5uzBccZkJdfGPVWYAf6whDCNaQJYU2c2MW1HPAt435yTFKpC9kMXtD34fbnE1RFPvW8otw8bSwvWbk6dc",
  "key15": "233YGGeeq4sF36sLAcAzGvzP5MLYpkULvdTMa1RUH6urEMFjya1gw9fkhkjH5PDmGA3TBPRcUapWuJcLLSEFB8Bv",
  "key16": "4nv7t79gW26rweea6GLgVhPJhC1HFPkD3VfebDhDYMrVgD3hZsCNAhapScguGytEt2eBE2SX3b51c7L8cDxbykx9",
  "key17": "2337KmdvuzRLKUVgYrNu9zb6u9Dis5LpKvh7S56ezBZHv3Qfn474n4j3RzmdR8xs77EdY939FbFksfafbfUMF28Z",
  "key18": "5qBQ3uwgvM3zQUdbRV9PUk2pmgmMwoVvXX2JbrRpdbhkJ7U3ktttYaZss5GdYzXm6GTVQBdAZGBGrDGThBNBBQi3",
  "key19": "4UkRXz7fwhAQYqdoMPrmRey28y9y5tGpGPSrv2Lr5FvPTciD7WY93NVJrudbosH9FAWD4vD6wRqR5cXAnZ3YfAkJ",
  "key20": "42CwmM92VyQkhH3oqBkg9SeNn3cP4wK9D7xXoCdT3u9YEYDp82zsfNpx9o4X56wXKkHYo9ThdBvuiVKJzXKDonXN",
  "key21": "56xY1V9zoAKBm1Dm4uEFSxng46pjyX5bg1A1AESNqf9fK18RJbzUxNNeeX8hTsXmHYaykH2LNZxNTKHvv6tndW5o",
  "key22": "4kv7Mm9x7gEtizu5oy77GSHPFagjGu2QAcQdBJkb2itb1B7GZgnWqJMhp1G27HeuQoDpBBvJrmyDduyJiHMv4xjX",
  "key23": "3LXV7x5UdZf9ooqiG9DgZkb5VMMFDoRmxm9C6t5M4i8fPFHS5RzKhxz6jfEjmWGSfD72AetPyBB8zD6tAtHr8mdn",
  "key24": "4BEAmCZWcqZ8kmDJgjoZm1ZLxcRpTceTwGGSvhtF7VAMRSsxVGfSpXn7U8hK3qEfMbkYvyKPXvCtaTGEX3J7KqXC",
  "key25": "2mXBBBayFenPccX41u7Jkr6PnXnjYM2u5rViD7zcCT3azJsf7QfqvsT8thqvuyWhoneV2fiq6GoQYYunENFY8vYC",
  "key26": "7WXHakoTbnrBwuzupXkuSmvnX1nch959h9zHUv8xZRy6qgJXVjXxwThLD7UrGqfWCuFgUvSY84PGn5PcMfmFoGT",
  "key27": "32fazfCYQ5mUXNuF6aKt14md74rTXR2cmj1T5aRa3tqJ9ond2wfmjHv3UpxVFDtTWQAZy5KRkHJ2gtouc85KpFjd",
  "key28": "2stPRLfA4q6WrSHaVzMWNRksuEpX6HeNamJK6n3W1RSpoocUUQtwXfQ9PRkXPqzv86HNyE8Quc2wEWzG4AdyLGpa",
  "key29": "4HAs4t8zgiE7AzYaisbFvCcaH7mxLQPBnd5cQNkbJkfsz4kxgRQEpCdQgb3ANw3odR464M7vKkyYQGSEH3ckcjmi",
  "key30": "4zim1qgqwyzH6MF5VpUECDS2gmXexEsxskX2193ehjzqTNTeX3T2wXTJc93VRxqtDR9awFNroNiF6T7BxG7BQKaJ",
  "key31": "54JF98xDRZ9XrpdBhkYkC3KMqZ9ZzqEvT9FBchceN8Xa2LHbC3BB4S4pMpiLBQrBhRWFggQqSXC4sYm6BWWUcRda",
  "key32": "5jozxaUypoiGsVWsJ9coU1kFnbQgj5Gcz7BJiZJyBKLzZU6tby68tfRu9UjA5LjeeTHQEu4orRXyKqN1XKkTbx7C",
  "key33": "2WD6P5x81XngvNCVkmeZu2gpnoNdscd2XSk7GFNdpZ6Kpjhhak1JYHeobtyrpzWLDKt223zKJWxcjWAsyM3Mqw9k",
  "key34": "5P9KZ4RaY3LL8kXB53LgoX8vhrePDomqyNaEHBgD4Zie7EWaV4PfP88k2Gpqu1cNR2T3zRXXzTzapmuC1kruvhMN",
  "key35": "4BVbv1RK6jb6eiJaTBAT8fRVL1NMpwdh11cJd2CzNT8NhR7bdcSa6jQkVcusMPiVVvB8wRyP5LkMGUNMUdSzchXg",
  "key36": "5s8gJXgdo84PjtwpWtApiq19ov1kwHEXoAy5MvGH4MoKqBxS3qa6sw2dh41vkvaiTCxC6Zs1FNGEM65FEVzz6xrt",
  "key37": "2GYqmTdUHhp2yo8aKZaKmRuVVHDgXqwwojN1f6DbA718qgsZ7zf7U17HSu5kh2D9wKiXk97G4GP3oVrY2sNjTTfC",
  "key38": "2fm2jUPf2E57Ha6CpcAHdurMvULvdEx86ewM9s1nPrAJHQdXLSFfkADVYoP7NDjoUJMA1WsCfAFEirm7Cs5tsFtM",
  "key39": "4Fx263nNjBsBR376pxeSWyYPXMUsJKCq2x3eSkEoSmNNMfsaRrA1eqmujn8jdhkkz8KV2PxYgAi2cKsN47U55EpW"
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
