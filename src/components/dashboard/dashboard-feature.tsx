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
    "2pACbmvZvrkN5WwLaFXicbhsNj9Cz5Fe8xgnkxbfi7wXEFvarrLzY82iWGg5vwtJVB8t6sw6b4w4XfqS25n98SFq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t8UL51WpoyR8qfbyKLEvJonVWJvumGUDM7LsDJKPHMTqVtCZPfzpXaZGkgGCgA6ingMZzwW8hdAQ73jPQ5j1PvT",
  "key1": "5YJ7Xcs1iZakWVokduVrHDevLWrKR7s3zAaT54hdHsmjWBe972tTNRZA7G7LrjtcTJeAEYFgJLBnzoX4ZDTYNish",
  "key2": "HwQmWFa3mQu2B7Civ97yT9VNUWqW7at5ygDerZzn7L4GiysDYKxq6Vx9B5X9YbMSh6dnNuEKXaxWSq2JhNjtBJu",
  "key3": "57d4dfnWQBR9SsysFKJcJaxxvPLmmoQjjgL2EYjXbZVfQRYJgymq72dinQx5AHY4ij8aXd97DoiRvxA5zX9vfxZm",
  "key4": "34kAC9UvYBmR71jKG9vHDY2DEoHxAqZUvHNe99QoQZXBZ6p3Gu6xEppdxUC2q7Qi3JgMY7T3zy7WEki6dR45jjGg",
  "key5": "3Qh12WKijrRWbH6peqnEt3BTjjqKwQRNyB65AgG1UT9GEMdu4ym9se9gyg5gg8kMSVumhLpED4ZvwP7sRv55KCTq",
  "key6": "4c5w8Ug3tRWK9jxDvYKfWdqEQ9oBodQFDyVDNJaDvDXoWp4rSVV9tUNJzrnxJCZRw9x14JVnVUyK3KijabJhP4Kc",
  "key7": "5GsFHA2pZDHzpbWdViTDKYXXqBUvfi3Ed1cKzdUG4ZXgL7WL6Po4fw5Pn7wHLrwqSew42eMipjPJmRQw71fAQst",
  "key8": "53QrkVnTMTF6NzEUNYDnuW9qoUTMhDnFiqTRUs2VU9ksjABh5PJJuKBXwLVFXfL2djtQmChPRJS8MN7cxU2K8qED",
  "key9": "4jcsGjyikfrmaXMMuQHget1aRELseJVcffsdUH96ig4dzyrnh4J9S1YvBfcncF9ewLqsDfEnU8ABYGCPbnE7BmbQ",
  "key10": "hPgk9AgBMG4oyggWBBVHQXtdXPWQVxsXvUNq5PDRjxHzMjdViLc8iTgn6AuNZHFbGSrqBpBUry3Kf5N3ESjRqcJ",
  "key11": "3NSgdnCMeSiNi24Y6wuzmzUuyqy1Y2jAxxh8pYXiDrqi2YoAt4UxsCaZw9Wb3zWnSiggzxNJTB96s1FRKG5ptjND",
  "key12": "5CYYzMdPgJW6cW6rMXB6pvevDcCQsZuW2K65nfL4zV3XAQUNYy8nUQkBxbyidqCcgGXoPRLmPJEfeNbpkx3BHQnU",
  "key13": "4e4ncqEhwEASwtCwwpEXRriTvfB5LCB3NsMSu7xJW6ssmzHYxYgBqSX84muk7MTpPJPJSDSg6ARWFt2NkFV59o9",
  "key14": "t5hyA49vpfwjUhfpAxKyRz23o9WCPQdwyMDh1FFwcYTb85zHoD9A9JtkWGHeqZmCTFUfdpa7ektzbfeDKsBEEPk",
  "key15": "58C1A6QXxSC7qUkVT43SRm4adv8avKaQNzLyEKDxfGVa5qvN2JTA9e5gwffVwX6FwzJ3kpz5x4auNCoZo338WyFC",
  "key16": "4qYYAdsrYZ1PdAqW2QcP2hvzoeYCdZ4fVvJoBJA3JruUEa1SX6khxyy5pQY5HhyEPFR5P6ACxZ5mhCoAgDd2mr9d",
  "key17": "2bMUcKKAbWTqCfcnL2NV7EXSEfVyBBcqfR8Y4ZwY6Wj8JyZMjLnsMXtoN7nxsFK7WXKyZPxqrbt5Nv9eND7uiguM",
  "key18": "5Rdm2XAKZXP25zzBbQMobWBE4sJjMwmKSKiutVJHg82oFnaB5hzQFYAU5QU4J49QNiURABbznWYioR7Ps14oH2tF",
  "key19": "3dwvwTb3bx8MnTxagbYKjgtSCYiRnvL3ETbN1KqdDUf89heKuh64g6HzoHYJ3kqQNWRANQ3Yo7XG76nkDxwymcXk",
  "key20": "4ETvXgttxvhuT5Zaqzd7YkYpZ1rDpjoD56DEiJ1Z6Kdp6z8ADVH5LGcxrQEZJxm9xCivCEFqizQuhL7vN4Hq8jMX",
  "key21": "22RHNLVHSgrGowpNk2Fytn5sDai4EWPM6GzEcf77EUGoeX4k7MKc8Kqw2PWLzPBLYJxGaEBzTMetpRcnQ6mDiUSQ",
  "key22": "4Vd32rZQPoaevXnTbvoikVV8c95asY8wjeFZrTTm9dUaWzxZ6Wn1DmiNHPhLMatsX8kexysvPvnkbPDDTfLYfiq3",
  "key23": "9vxTysEwAH3GNGf22cKXd2ZfPNjD8rJtt1LiA8mWJjzprmc4hZ9uXnD9U9ZpaM1gets5biqWBVJovBW4Bb8o1MA",
  "key24": "2vx3KbSg3oRut5zeWg1xRh4ipb3UTLqjAJY7r5oaQccC53JTVuDoUhYEbggGR1zPRF9xgvL8Jm5uqL5aTsbz1sfr",
  "key25": "2iZxsBkPstM4vieHVEnVYDmVCEjafa1RoEptGDzvShNTrg9DrPYzs2o3XNokW81nQ2MrkjkEPKdwux5wcYhZnRko",
  "key26": "4xxncX4k6VX3yRP7AJxW4UCjHcvCoxBGvtwugaFoTC8kBX8Gg8331KtZBi6S5Pe3CmBEsfPur3zropXuJvvJ7Psq",
  "key27": "2JEh8Me7yQC44WisANEQWVntRiSw6vQhBoXrMQgxoevJX16m79h513mGkbPNErNSWWcLSMpoerEnA73kz6ZzAP4t",
  "key28": "4rkLWvzS9Cbu2iYnWMPq6iuaCGC6vm2PDYdp6unPrH7dhE3Pr8fMjDSyLjF4pmxmtbF6sAEKRqM97L711JhFeNXC",
  "key29": "4Th54GAKC1ha9GgC69ZfTdoFKxsjKq6YxqtRJDuXRJb7fuL74szoTphgii8FnTDqPGmuGQUFKLasrBeWknnHJnHp",
  "key30": "jsetZTUGFSrGsTJXBsDD18PNKbGMNBgmD8aRhoVuAYGf8VrXJCmLcNGKZwvQ53wSG9xKyPxbvZhR1jaXUmfXbYS",
  "key31": "5MzfecZPBjviV23a76rz2THe6GwiZZTtHrANGQwDy5mzSHYqRxvYyS9FkjLXVWwzYM7awZHXF9qkYDH87tFEg3HB",
  "key32": "5Hth38x7iFuLT9x91kuPer1cHju2uLKF8ZareHmxJriY1MJwEsx5vdUnjTqd6ajTE354ABVoBWmcdkeRm3tBsPM5",
  "key33": "xxwWSQKV6nBXz5Na3BToTzWZcr2kABhs6LT5rDnu4aj7Vz9znVTQ2S6kYGcWi16KZN4P7c4ueAmeUTkYMNMg9da",
  "key34": "4y9R77avt9gSnSg4v9XTPuZeWs2Rq3CEFQuJdXp5svrS5tuWZEVKpyfTDZiPLLWMaSPZsSuSiqKNyjpb8WpsEXiq",
  "key35": "3K1WDmB5V2XeptMb2ocETj191Fmu6a1opwK9rRCnx5GhF96GgYRKQQwXiUehSSQx3197r5BxHcjGigPkvzAq3ikH",
  "key36": "2LRDJZZYR2nBURPf4WZox15tojeX2EMRXntDXhq7ENKk2SMPcC1ygd7npvdrcEujdw8WMhmofn89xRV41VzEnxna",
  "key37": "3s25tSxWdgXKqY7CvczhEkJmgsYH2aKsuqWHpoB4MwUCSgZSXRFWwFELSfC51ifQrywv5tZqoqAerjvUTArThkgw",
  "key38": "5KAqDtGVBkbsdEY5kjNdEvtME1YsYMutLTvWJuLHYQV2gwZysHkdvkXNC7jf5bA5Q2c4ybS8cPvH5hoU9ddv83av",
  "key39": "tpeb8PtYYwnEX18ibPV2iKYYJCkB4nwCqLkrxuVEc5zg5PQRp6MPmPcyJbDyB7WuyRYvKGyXX1LprDSbzBx9q3M",
  "key40": "2QPh5t55Fwk2CJN2DBLKuEgN9MwTkUzP2TuKykcT87UTA3MNPHSUA52S8gjUg4cGLY4ErngxGs9u6DWa42GFjqrH"
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
