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
    "2tcJ3GQsF1cf6Z5eM73Gr8x9SavbNUobnibwzwjCnT6hAUNKp2TT1krmY7KtapeVicbNcPHPCEsWgw76NSP7TYkQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KQKAmk3VrrdbXcLxWd4WDZJUVUSaPjQskQdzMwACvJdETdnKgJpAkTsokab64KyqVXgRNGuB9Ebj9SDbPj1idhH",
  "key1": "66g22uP4jmiqoKVDPKXYjZEsw3aejHrEV9RnWrFfNwuuXiVatjiFf4bfUiujT3HqnGbgUFjbMkeRt7ptVaexjnoi",
  "key2": "2MFTkw7ycHxeCcswTXWwp7QupLUJCAFmxRxW5QQkGL5Ds4imVTvntpPsyHamtV1ZmoW5tQ1SmwkSEQcqxsrRmmYS",
  "key3": "4Mxt5TdbAwm1f6xFdwnc2Ygf7uxGNkBU6jZuGtt9bHksBKAc1LMK4penGpw4DnrkpDYsGQZDbnww7nYsn5uPYEcV",
  "key4": "HzZSVPW6AJpNpDhL79ANEZfnRHfFR6jiD5hhR7w3WCfAk2NR5ZLa932ESzFB47MimEj78E1rJTwwqfncL2qjka1",
  "key5": "TobNYp1vkHFaszoNYh4v2huvrbUPsvbzBCxaV7qnpxVShHtD2ouqgu4z2wvYtAjLLPAD1S1aSV7hMeMm4uf4w8z",
  "key6": "2bBdgpQ4rEpUynysKVqoSdiNTiL9dXKMFiFcM3d1QMX3FNxcij7uTr6xhAzEd7fiYWXu723yyZNe7BiUgnzimnQY",
  "key7": "5YxfKkftmkc57wBSGsza7JbWfjLEXEsbs8hPzrBHwS6rKXwFZL8ccv5Y4nWcuahcwyzevLN2zrFharJK2K1epsm9",
  "key8": "v7J2wh9omKoKD4gTV5ztnmgy11oN6hoejNN3e2CEuXFGBaq1BovAZGJmbnr6BS4SDfsmJxdwXbYtz5D6F3748Rh",
  "key9": "NSvjsmf62oZ2n9Hxtz8ELEBXWXGfH8yXVAA6GmLTnd6UdoAGLyitZuqV37puV3KwMuVE2q9xT93dTjQ9Uo5EnL5",
  "key10": "2byCxWNfcFqbrjyq3JmEZyU4tpuJfifPw7dqkY4yrNfiBw8p5Uw3FFNsaKV4d2fXYs9zaz5sKMBrrAb3fSAmTxJ6",
  "key11": "2y9fAnj29nuaNyd971g7ZLdbNoCGLx4Q1w1Aevgs8cjAhEP9oXxxpVqk38r49Tc4qimjVfpDB2aqCz74jpajm92v",
  "key12": "4zG4mobrxCVnutbT3KzsgPCCTAKqENDDqrmpjDh2nYEeeS3MpFCxR1t426DAzLD5nRHR5XBqAQxqzKMtz9iZGmVH",
  "key13": "2K9B1HHKHTQpYuUENqRdz2vQ3ZW4PjUUbXhUm6JNt3cTFFxDxBawjkR9xxAwY6MoJFCYBQp7TBiBeU8ivMJaNUYi",
  "key14": "4L197WiiQkxjHoi6BTWJeF3g9F7em5mdzL5q2D8dTT6hwiwq9qdZMEbSoaVVmxkCki69McFfSyCciL5gJSBvmR7",
  "key15": "5QEKdncp2V6o9j4F19k53fmvqCCfzoN2xr3fyUAn4qG8i3PGEXFy2MQWhHm9B4yWRDxrSAGUiyVxe9yWYKRGYdkb",
  "key16": "4XSQSFbNcFUMCmPz3DqpRyiTzXFjHReYRCbgnxPs4Q3yKSPAjjmbqCNNiG8Gxm8bmBUHDzUw6RTnuCjfUJrVU2qk",
  "key17": "5oeU4YYokyQ7GWrAw4AcBA376kTUo3GQVYhNEA955DUrZVHTyVcfb1G9o5BtVvXwPxbiGUjmnYXA5mZWGpoDHRiK",
  "key18": "39T86o5KA38eYg3UiokVMiiKVrDe2azT6rg1eu1BhDPd4i9J57sHJNDUkJmAqu4E4kiJvZLmBSMMEqmKDAK3TLYE",
  "key19": "hBQTRoFLF8PNfNUgiiASqXJ73EpMVXrHcmGNM7zBza3j8pMAvsW6B5hdKJocJzZ6znDAMMbUH9fJY74yDzohXS7",
  "key20": "4Bt5dL1qyZ4oKr7bziu7ztz9M8TGyUKFPmyUx4eeuAGW5fgczH4XAJmKDLo35Yt8hbdCfsr7EYTpf4Hx6wvpuKAx",
  "key21": "4i1JJtQp8uYVasMRFbimLfjnXwoTkXNMGTYp5pamiLbZF7vChrFpFRgojtvudyxSzjxZrwE4sK8mt4TCCxHTtnp3",
  "key22": "32jV4f3wjLRTh7tpRSKYcxVCNNRhQSLeYQRzzS6H7pw5oFYiv6nLNsmzE7GuJcVzahWxf1KTkDpxUDh6MddN3LQ9",
  "key23": "4sj8rkuVn8Jfx7Fe939bDF5wLbfY6YEwQkW8XziTK5K8fLesP88yxrgbCitPFRybXpiVAnfEtxfzHpQeRyRgWi7n",
  "key24": "5i614wq7nMbyRx2giAC3K5k5DqN9sQCGBdvuP8GMLCN8L9uKgqMDRcDQQLB4EAhJL4YeDEdb8w4PVxmCLtHoEKin",
  "key25": "4VxtKsaNi23nWVRoGeVaG3fbZj9im5MdV51xoytnjVEGhQaw8CgC8AvVgbcz47XxXB9mVM8XTqjtveNEytsqgWeJ",
  "key26": "f2j9AW8j2XZeqqBC8Shc1ktNdwtPmdjMT8UGsJSQ7JV279wA7dXRkjRSPquvjGruXxt1JWwzA6aRkzudh97FEzF",
  "key27": "3nofMi7z1yTg9ztvupFDUpGTm1puXbdqZwemhohAVKp7g3rRaBi8xbzv7icyx2SEgEkKDVUq6CceVH9YHfhpSZuV",
  "key28": "2HaodFvVsmpnfZBzZf7aF9HSDJncTxw7JQXKQxPcuXZ87cRxVQiDxZgP8R9KvuzLSuKwTywra2cSeyroU8m1p2ne",
  "key29": "tzLrCAvs32xdbJ5bw6tZRHL3tZML3SyC1Q1V26tTsogotKT38ghAhc93zDdrE76m4eLbB6i8EhUutYjqYef86Sn",
  "key30": "4BSSpyJYAsAVczka8Xm6wAusEYfC7DqhEGd3aXbS1s7EMFR87DLxWYAdnNaBZTEsZavQaPiEK3LVdM5qxvLzpHXn",
  "key31": "SP3Niq6LUQZa5QAtbUXfFvgTFWzDV2BrcW8QAccHGzDEqiYwfUVMPtfTJX6fjspTrQ3kLM3g3d5ZYu3DERKfJfp",
  "key32": "54DRiaMDAnqC15FS8WYup9VSoZm6fCnEGFmn5pKjqbkEi29oYMPW3iKPyasJWZAzXy9756eVibSspRmuYmJxSo2y",
  "key33": "2wTpw5VtS3TxHzyM5rFZBo5B9UCCuiyfhBunF44nfRRJopYRgiaRewayo2ZSXGnbfyR2QV32bJonWgFBEtuTrJv8",
  "key34": "3Fjex5srCFLgeEjgqsLtp6wD1tNNiYZJLf3egdZpz25on4ueTpC3bNvzek8AU4ex8iFBqHhgj5MXEHd9qAW7hQkU",
  "key35": "E1LYuCWynmfgbygE6yw1iTAe4DFphT8hgkDpzmjzSV9yubB84XxD7wWaZ5oRqRzX6V3ocbJkkAtDXRLj9k6QRkK"
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
