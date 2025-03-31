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
    "2j93XxqEHNn6y6Ucnt3CC1sBKxUao3t8LTfc8aEWW5aovAREPhCrpkYe7BeKpJUxDH4pvnjtCKv9iu8ux7q3VJN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FD8nUzNPFiC8XaeaxmL8fovkNizssoJGKgSrukj1P8C9ttuwC8JjhHiwCC2smo8JVhQrHGnunNn5Bi3W9GuWLVZ",
  "key1": "58oPXwzvxf6SN7Jd3qRYshnxV9JC3W1H3pMN8WBdJm3AfgUXiQL3xG4JAVRQcdFofy34G7ueq3a7yN6g3FtbSDi2",
  "key2": "27w7wfPHcEJBE2azPBhY8uq6pCyLukJfFNKtLvyT4j4vCQuNPXqArpY4V1Kfd5nckEuq7zHLuDm8yok3Wq6xW38r",
  "key3": "3ufeAnFUkppFDvi191vhVUZm6wk3Bh1majkSAQTT8DjQYsbtRwWitRZD9HVd8BxnGmDmsHBYgCFwSXcJrzryV28V",
  "key4": "RBgzXFaZ14R5iuxgeFZPiTCK2vpDdd8wJRs4tymURqd4mzSMo618egSJ797RwUEhn7nC5tG8MXNZGjh1yPG3TiQ",
  "key5": "5igobG7BWwT1Kbc7g4r57RvoiyMMYZ9CRWSH2eb35rrtAHXX6cNhqFQR5FRYsdVuAQuHk1ZCNxDdGkx3qSdRnn6n",
  "key6": "2CUoQtw5DrNKxKdXD1sW2eziKvWe7SMJQ7Ue3ffotYCJBe5h7Qh95q6fKg6aBo1aJgBWKtrXE7z4tr6ZcZBPM5jZ",
  "key7": "7Asd2KEyLWZfumGwKXoh1zbsmibvtBKW2FLqeS3t8yRAFnW1Ad7cZ53y5J5ZrSBEiEjTU5k9NHRWKQAvbRawZS8",
  "key8": "5RCFXaP7psWiaG7PQyzhBwq9KQLJKW5rzLSboeUHePkdgyLcWesNRPkXX4YE9swMGQ4zAVzS2FRVuYoPxAuT64eV",
  "key9": "3WxmTPL6jiLAdryBsCfC6RgngiFLwrpUahcEo25UgzNAYSLiaRKMixD89aVxEmMtDdQdJ9twLJFNV7CrQSKoyoLK",
  "key10": "67T1v29YonRCyUjFcKrYZSzou5hdTm2Dc2y9hHpwHwuH8khseJ5TXu28GAGXVDypiuuHBsx9xwXAr8zTmf5mStGd",
  "key11": "57iaGGQJ7kJSKouG5n8kis6QfxpcYNk87dNufpbD13Y53EW87rJ9MuBGJ1ekSyxmeRBeGxKY3win1wTLcuwCWNB4",
  "key12": "W5KnnamXgQi9mur7DC4nSrJBUgpsuZ1grsfKQYizXdPXPVg7HBfjfw42kdtiF55ET8Tpao5yUxQ4YPcDSjpjYQJ",
  "key13": "5EAQvKVpLWJBZpPvwLnAR3ALC1U8yZ3YvHnomoWeebfWx75aDeHkf1JYyWtAvxqGm8XUNs6DzjXKkafuv74FrK94",
  "key14": "4efyubDkqANXc7FqHdh9fjXt8Hh1w1RsUWDAfvSASM8pdBUvWdFyQFvfTUnNQcUqykN2TtdimirVtgU3uV7BChCj",
  "key15": "2oJS4swBC1vuFPKE5Du7JEqkbZjHQM9rdDozPWF57HsnBG67YNqx5NJYEoYYA25ZSuHpeRQPPwsFqBSGayqoua88",
  "key16": "4QH1vF1tvYT78tagVh8sHUWHZP9DknZ44X1vFdePPeeoXJUXHE2ASQi99y8tUDW6qJ6X3NkQ6LkQzh5e75PtLd52",
  "key17": "2RhzJSZAJLi2HS2ApQC9MjTARMX6bJ7kQkQfV4rVizH8YiwsKhVor6xDSoF282JwYRXFFKKo5qf6yxZB87phouNt",
  "key18": "2Tvyq2CXhsdbB4Fvkgw3qhr79ADZtMEgjArrcZKfxDd6MTkSdAKKEGi1f83s6rsYNWVfiMHmFDRKGxZvTSXPVy2y",
  "key19": "3C423VrsAeHNPAUHLP6PzWoduqWhKSUFthnNwBQD6byvbsSNbZQSTLXktf3dCBtoSfFE5LtKobpouBdyLkFkHeHa",
  "key20": "5N4GWZEaafFHR9mdUmBabCNLGX67fyqoB63gid6pXH3Vcka1DKRkd22DvhJ3VyhzUdJWjZGC14ouKCtbn8BjYykK",
  "key21": "2ZpyHxFJ1ApKP4WgwdmWrDGeJ15ARZCwBkrKCuXS3Yrgmx7KasufRLanTs3KL6ge2LJggyHeviTZ97r4KCFEfNSr",
  "key22": "29x9vS6m75qQn6XkXMbki5NRoyBNqMcXEPLuSNn3wskNKUhjQ6KxpsjZDbwYHHmwHxwBznuRheRdDHFrTNvK8ZDu",
  "key23": "2RUMabA5DAkTUMA5xq5wCFueHdmcU21CSzxDuvmphPQxDvM4o2WctFWTKJDHvrnbL7mXcju9uAsjcbWsnogKqLW9",
  "key24": "4WREG6oqoJyH4cqvb2kiaZ7mdZbhiKNeZNfch9FJQKgvhAShbyevW1XcvB1NHWSUvys9j42ebTqQyffZWBj98SjZ",
  "key25": "3kbHnvw3UBvucrPvYFmqYbNR8GfM56ZD7skVrz7RAx61H6PH9mKrn7nrqvk65qp2UNUeZZvH8XAwVcpTGBkjNviS",
  "key26": "2EDrd4rTUNCHYrVs17k21EF5aDJxCWQrZqkdUNL4mVhqRmGmrSEK8UNqwPodoHNude7E1hcMc4HAaRPqNRzUcfQE",
  "key27": "2pUiFM6BMiPy7CYgP6zeMBAgbYseneRv72zWeiCdTsZ6mCbESFbaBhb7tFr39BbYBAGiT1cmWjLZKVTo5hcUuXwP",
  "key28": "3PHmugAYRcmbkRk4qHuCZU28db4CHhU2342d1TzcbGtSy83SK1WLbm7UEQHgHCnPa3QLoGN36WZz17TeK15wZ2y3",
  "key29": "32HCK4yMHoKydRusRVBnyVR1BtgQ8AsWw7YGqLFd1PQ7aCf1WNPgCP2Junb6hKnmunQWQkYMXqLTUY7bUV2MvZXG",
  "key30": "3sLUJugEYCqwLEFLRSMPYqXRqUWXSzMZxkCyENwkJNBjWhBuGectdpWeJns7MvxMcb18vH1ismWSuxTXhxFi7QNT",
  "key31": "3M6ZAT17X4SQkbRHFFTHQ8popYowNPj2gKzmu66c38pR9y7sr7e2oeY2TEFDgpTtk8SUjSchpyQ1RXR5FQv8zGFj",
  "key32": "2aQbvt3qLi7mwWWYykZEoeGoLBKyA8ph38wepGFmN7hGycpyc95ZcsxXpDo5tqeLLtNVBBLXwNPsbDZ743fH6nui",
  "key33": "2aBq4PZSYTjLjjSfGwDFek1wvia5HHwRfVqyJynAPnMyqUBJZx29VQ3RmVhnFKT7wce36BMUyYY2MDYLCAvxzAic",
  "key34": "5gnbPYB5bxshKDxdDBqvSJ8uPFFkvjnSpDJzaVAyFivWr7erfUuM83LZ7KKwiGsHKXPP76TE35WCGByG3X2wte2",
  "key35": "2aFCpzwAAcH7aQiX7K1uCtx47RZTADTW4hpH9VH9Eah25HRzGA496TWA8UqLXYsMakJ3HRiuJtMNyA6PbZxY3aDL",
  "key36": "5C5sLVnUDCZCgivrXS7o5K9Sr1P71tVeEUyiVG3KWXfSkSqxppz9CqG6HXrAW9Nv7zoMKTHa2K5iCtGhSVDBT8oB",
  "key37": "41Kxj4RhtBtn1CWqcyWsm5QgBiwkPR5Au29wGpkWiqo9k9sXyVDjCQXnqcxCQTP25EG9zE48JuBpnooYAL6RbjnH",
  "key38": "5YwK48jQKCkRvvREDz79VuWKi4ugVgzGMk13YHfSr74RorQxYvxHmWfm9bCZ2feaReE9M7p93cmLtKciobQiSWwN",
  "key39": "6E692k1nMB22ZSAqtEPWAkR3TvPjs77V5SqY78WjyWcaAGM2JzPLTqazqgZJ6C67wT3soiLSifwYWS99yzbMUGh",
  "key40": "5cPFNAhbNf6pdahteRVCxrnUrVwT6ZWEcEu1nAtH8KxhATDfNu6ZqaCzPyYKk5RThmDGksdm6nZ5cHmTxrHPhkhE"
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
