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
    "5WZsoYPuBk7AW7scvqTiA691NE1DCHfJTZ2SzPcvnT2Q7NAjbfQrHXU59ruB6fQw5L1FiE9ppxnMax4cpx1Q6gWN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YmRicUuPpJLyoXwFrbhDUt3wh9Ztf2aYokTThB3PsNNR5xc91SiFUYV8eyT9CmTtiQ3Sjn1W5XLLJpM7gEPZMA5",
  "key1": "2dtEdYSkyQfruyAMt3yyjWbTVYkYRRdpcSyTdqmttC9P9STCMNtbyPLazTFKghFQurG4SZxatmG7mvhLGG4iYxUK",
  "key2": "F15aeSBttU9bxYQ99mgq1zvXCKE3dw7kJzMN9P7jDA3xnJ64CXiXD8hFXWW2ayoyyJqauRa7toD22LhnfdBabjR",
  "key3": "526TGsJcYUuceQWgV3daf6GutVZjZGDzwgQzcoqjM6fZuRPgczva7Cs5UJY8wVh1kMvf1eFa2mkPjj4uyVerMxNq",
  "key4": "33wVJ3GBEAB8KoMu19mwwMT4o85ajWksirhbEE1Cqw3xr1AdYKyXP2Wrtf4TYkVcY6kSMvFtC2biP7m7HexZX1Qr",
  "key5": "4AvgCbV7BqKZwoK6b6yCbsUhWk1KswXphaT3qGmWHu8Jo7mRg5oiYdRnse9b2kP5GpgnRq6byB9fqdoS93hKfsYK",
  "key6": "2VGqHso6Lj29TzPUiUSsHhLgjEhpv1b7eUCuNwgVU1aiX2pvsV1qsN7yaMDL7HxkPU83CKV2KE9hPXkg2n9ki8Tj",
  "key7": "3MKbbYJvo29QUqvxEyGxMSF6aajCyFPuL2erhLhwj4TWYeoTYjoFz1144vRwaf3czLvvTF7yrchwCmusjTr3KkDH",
  "key8": "3itgu4Zee6gmEz1C55ZbNS2Lv6b3E9QMK3BBdmL7427BzyHWkaxBa1TKG6UTKcC2MvRr5A4euSKnHHbwk3mXqChV",
  "key9": "3ynC3iLA5Uf3Cb5uz7i1fkBvDb3wuwtyquuSgkcxPw4XyAmLoPryE3pN269s8AqG9Ve4jEu5MBiRAwTATqG6BhSd",
  "key10": "cfhBwffn2pEg3NNSC2CyWXVQTDDTSv9u2sJVwY1qTBsngm1GJH2DTBUipiedGUkZydav6PDhzCvtijvAkLaFcpE",
  "key11": "4Uzpt1j8ZPKdyxBFPf3jhb2k4S5E9GsjrZZyLiNixcq3sZVw48tRracQtqajdVNqT85tMGwRZWjv4qpVDwT85vBH",
  "key12": "LUegaxTFaNMbn7TJmeqxr7BwWAkxVKoWszMAjgBzKniubHT5fQ9gxkPYWgx8c7u6b4hUk1VVR9CiyjGz88yDkP9",
  "key13": "5ysuf26od3Reo3deZEaCVxKj9jaTsGWK7Fkvvr3MhLMjfbGvwUY9TsJuZrzWvXzs1cMdPMrPECr8jhyXhxkYS1MW",
  "key14": "4c85kqYNzPVWPWVBmK7roDySatAvSisgXptrZgZQRsvhA1urXufZ1KhT7Un7gRJFLhJMAD9jVdFHMd1L5X4hPXqN",
  "key15": "cGzkzFckfwKSAKjS32ZJ5LCZHymft6FuimoeygNzT9kW4gvkngUWsfiZpGP3gJwUVaY6RSJXiydfCAEbjVzXDbv",
  "key16": "3byyAcFBUUQ1H8FKSPXLNmewL6YVgiHibhuX7ZbuHuh72TZQrHouewyRwcgsmYZpsRSokHkrANDX1mqLf1N47rWC",
  "key17": "3Jz3SmTXBdJCsct2j5DWBXwUBe255eS9NdbB2hE7NBxyNeBNYLfwcUytBHKQYSaDXqNVS4cLCBerZ3rv3mfJVjFe",
  "key18": "PrSiqbkHtfpYyWY99oyb3bvndYhcoe7jxK6jY58B47ZvzoAUgHFknsGet3Mgsid6da1z8R186wrGo6LWCMx2hy9",
  "key19": "2uwhXgg9mEuqneuXBoxjwQUKq4SV7QSpX1aQNiq13sCPhyaj38xVrPzGxjwbcXKe2cd51Xmo5ftgP1wj7C4bxE3a",
  "key20": "31AuGXfaDJf63wttKWaXTdUfZAJW525A6PLuZY2xyaPQt4kwVxAwFcboz1hF8CWeaeXwnSJcMe1DHFMAFKgLPY1n",
  "key21": "4PnvXSB3T89bJYBcEegmNgn79SaXDgnvqfso68pXD1qBPiAU2aaFYh5pszdwA9vu6DWBk7FcCKAKvMPoTfsmjf5y",
  "key22": "ya2QebrYUSLi8mRpAT9mRPfkqeizgUhgZ6VAPtddjuh72rqSbcf2TVAD9xB4yK7a68jkgWG8iepcHZQgDptZqbH",
  "key23": "5hKpr1k9g6MZZKd8E92csDGG3AX3qKd3XPy98fGmBGP8Yge32CbWUYSv4mbWRDHRSXVY77AGvJhGyGWsx88K2rQH",
  "key24": "4JU9k7YKzLjHtRDunicxEGq8NmGmwJooQJbUDvNBDCDcRgQWrxoSRea8Jce9DFVEgu8hX2q98vqCcqqeVgEGFFZS",
  "key25": "3pAmokDQKUXrgXWYoYuBtpdUvw4ME1Q2jZmVuTgnm3n3VLqkpKK49VifQxFpw2UxYMvqGq172BarK1zvwEhYG7yX",
  "key26": "Cn4qAP63GJ6Awu95vgWUM9a32egCLRkYHgy16sn4Tz9n8dFLdgbYCQZNLtBXng6nwbeCjfqDTGK3mR4WZQVxK91",
  "key27": "5d5YTTC7by8U4CkBqBritXzpfoiGbJJfcyBGMe5bvnRGtpCentxzbJQVRny1PV4iR3qd5wVkd6FJp9sT9XmrmjAh",
  "key28": "3SQnzyJqp5no5LzzzsdkipwdT6rXvNKkcCftS4eAHXaAaHz1UcbmL5VZaC4zoCG5avDf6BjQqMdwcL93ZJdfrb78",
  "key29": "2zoWQWU6HyDQH6pj7vARkuPRrk5dkRUTeHrorT7CfugTWYxsB4HYMZUw1KdcPwkHfJB2tJPQJEZw1tQj95YT9mVE",
  "key30": "2CpRfiXBx6fpemWzev7XqctFrr3kpdZKTRvPT6mx5venhBr48k4b37X85rYT7RgdPEbXfZ4cLii8o26vYs3FSBWM",
  "key31": "4KWNWBk22urpYnSpE1HRB791NqbWtX4SeuYLWe6oL89L1vCiSkn1gJjLe9dthPq66PF5zKicudQcJjekfby25ffU",
  "key32": "5VERL6eLdK8pHYvbiZx1Stm4HKdiKjGbHd32rfYeS5aQSxECDjvG6s65a1tVgA9z94CTQHiBEL7NQNsXfcqji5gm",
  "key33": "3Q65hvhMDdqA23Burbf3e8qvXSeHhy2U2pgBfGLrGP2sfmYbrQcmatFD3AwrnrCvriFS83rQ8DG8WwakMBNYt2jg",
  "key34": "3YCoERzXbXecnsHyR52EmyCT1iUWgTs3R4GrFbu8NeBGM9ahb6d36HAaXPnUJ2npuvs9wP8MMs8orVGSjG9DHYaS",
  "key35": "2VyDUS8AeJE4GVsTNB8xp3jH6bB8Pu9Rn9tcpdkgo7QzybYKgvFb3wSy4P3kLdZ3nBR3W7RELX2BrR4c9vhgNXZz",
  "key36": "3jYuC8ZWeBqdGNxbbYxE25M6YQFP3UzJUufUQZ9gawPfsVW2CgW6JPYx9ofPkUBgLhDZRUBhs5nEzUhEMS6JgJZ",
  "key37": "w5envfh3tTVmicvESnxn8eVB3r2hHAqWSYRjMZEQgBBF4ijw5KCE2du2ocSRo32ZHFgfPRLmmTqWs1MUd2W7Rps"
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
