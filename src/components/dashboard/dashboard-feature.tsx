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
    "4bKVQzrEYcKGDtgUeNVX6a2DbqcX7L67yjKKXYLpESsjBjGS2YmSz71SX1bF2NVqvMYahnWHta9hX7wh2tGQ25iA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VBbo6Dq1JAqchynicJNpU99BDAC9TzTLcJzTLkPtkPNnBxFNq18MEAg9BBkBgh3ToNdZTjtirCRawBc8oMr9bbR",
  "key1": "3u2X3aNGLw2oqxt2Tyc6oeiqvavAv3f5jURDYRBeWSnW3pvq4nrDLx7mkoHujkzD5D6wPpGtFUdjqjNRucpwZPfp",
  "key2": "YXrbMFDEyT9DmW2aVMEbx6k7Z178RNkPiHNAY7Vz4Rddboj7sR2HrdBXLeyEpcA8etLcF2hNWM9T3TNVFpndAH4",
  "key3": "2j2S4MTSmabXHtVVKSLppmeedUrUoT3ks72hTRsoETj9HhHVyyEmS5tBxdWzrFbVVHuGCs1h4L3XnsbvQmnyuF5h",
  "key4": "4aVynscArLDQrs58e5JYYnAve8FD43UWYcSxGtDnX6y9XEKseBGorm2AmVGAeAcyb7ppQhGnNQHVBtcknXyEEyLK",
  "key5": "3ThxCJskM4C4PMDcT72BVLkS9CEoaRu58BfTyhU6B9EA28C49XE6X59X3ZdkQuA1F2uSDaeELMAoyETn8WjG4riM",
  "key6": "3TiXFNWHqdtP89gXPbYoUzWecs4nW7FQN6njLSKAfM9xcxS3KoY5r9Dk5RhkM395kJUPMG6cpx7jTPADscxLnjcF",
  "key7": "2dt9TDiCAabb7eJ9HBPVzKauh8AuRuS8ZBAaVrmpPFop8ywp82ukZc1pPoqVP1dmpUKFdd6h1FwAyaEQyp1XJiZS",
  "key8": "2SUsJ7xDmvKt4zX27iz3Typdwa5gTMmLEpTZPY2gd1J6Aier3PHKeHU7VDRMrStcRUVwtATZzKHvtMPYm2qemMfu",
  "key9": "33PYXoFBaxHrHSFsBN5pvFoaGLgvijkbZpnLbHyvS41EeNB4RaCukrSRaaUAuEMAUs841haNkxSm9wLHF1Yq8T8P",
  "key10": "7pqtykSgunKGJHhh9BFTGQjsC2TLooGB3W6fYagTfF7NLaXyJKKoq7nRNU9CQRqF1FogPfNERQ44usqwwJHHYzM",
  "key11": "3aoiQqVYxdwdgWxFnQuJtPSt8sAMU1YYtEaaDYdxdaCDghWzEKUH9wM4iZXvGn1P51mexb67SeWPJm73NwZq3bnu",
  "key12": "4HBghvjdbbhpSgBDTTunmSTSKZdFaERYbSuPFwJuzPhujjmhdM5fsA6PSzchh8Zzv33tpD1d9dfgWVJiBQ9kom5j",
  "key13": "3yoQiFEZc3JitMHJxFGXMdwSDu3osRV6L9LZnm2vNuRjdswcQw61zSRTxPV34EUixJUi7Zpsf1WNhJyAmwABvvxE",
  "key14": "3meomosT4KoDDud7uBWni4Ur25r6usGL17tJQqXxSFR3V8LfAtn2ajoekATTvs9d3fmmFY7HkiTjqkZivHjYTAwy",
  "key15": "4Ez7hynjt1AtWPAsXL15v2VY5pdwiWq1x5fkMs9SurHNGGaNw3F4PSDagd1oLgVNmuAG11PhDzrLb37dtzmxFkhN",
  "key16": "HqeobDMxyGUymYxECNp7D4LA3B4N9sQr2bEDuhns9TvT6zGe2SVKiWgp6iCbofwbK4q59s3QK6KbZBwyiyrrP3W",
  "key17": "3giZFwoLiRgpbDcwTma5apSTQxpaUGcADbyBhFgaFbgaExuHX7irMhfDhgvAzwbRD8WxsBkbqHKNMxz3r6f6H57P",
  "key18": "3tuUtKmXYDsCKhvgog5qCwuS2YjDsVwEmzfrWS8TYm9N4enmhQnEZCz6GSeApi6H7AKfFReSrqx6mTr4FPwnKLC6",
  "key19": "zHdkQK9mHh3KZU3oAX1VnhoasQR3euy3j5JVdMJvpmimwZ2X2jyp1yoHPiRnSyxFGweiJGozAzWW2Z8yAMM9ZX8",
  "key20": "4We2RmawuYj7H4fugYFqw5TriUbjawjW63GQEZWYAHDbjTdCd6jB4q3vjbpHUvFWxMK2mLD7Yt7iDr2MBSbEWpCY",
  "key21": "2WvQaJXmQimjEHGdqJhtKeMdsqtEbRMjFvfSjaoW4dHrmxKuy31dZNVDFNnfaKySxMCYrL17d4SRwCnvueXUVA1X",
  "key22": "2prrnJpM4oM8beMFVQzL4g1auKXB9B7xmgnzCCmowzy9EV3qzJh6TQq4uovkoaGpnvukbXsJHF4vgGixBewrSuWy",
  "key23": "3XKkD9icBsKDYXkPujZxD42aWWkZp5wFDPu4HXEBtxmWegm4fnu3z8e1xwWD4ZfExhjGjavyvQFYydpWWeHVVKXq",
  "key24": "3uEa7wggi7PvNJf9mvU8Z5UX6dNu4Ze6qxeoB4tUryT3EwwX9menoX4hH2PMALnXX7MNDAbWgo9Mxqp88jBPyWuF",
  "key25": "tezggY32y1d3wUiA585SQ3QGxTMGn6Fb3528zhHcejUK2ZYDFMv78XezykUAFtY5XKWNYE2hkHGiTCYvo5PRrCL",
  "key26": "3UXVe1da3fYhqC8CV5B9zcAyEQzGKrDjEbSdWisDuSxojmwvcpAFZDRgUBBkiMpc291iu3YZuuUjyRCZTEPqizRf",
  "key27": "3Z8XVHfczfhXQdXNz8372QcXkuSFpAuFQGCQ82LY6ZDXnbcKJQopYMv3nqRovYRNYzrWJgUJnKfTFzst1szTsDEa",
  "key28": "2k3Yf38eLskKbmK89PBZtSG5yy8EuiZANhShZk9NQRtjLpyWW75VtgaU72GotaEywu3fjPwDMdwW4JUYg1wL3D7m",
  "key29": "4wGqDrLxnzcvf56otgy1VoDLGJc5tgjWaf3Q8dZ4F9qRDqYPMsEfEE5GQNcLT7YbyWRBNgnZEB23TLyS6qiu8LtS",
  "key30": "3F2UfzSSS3bcsHTqTZsKvgPvaoU7NLDyiMNtfYV1y943qboyV5Mt4Xcx8CC8yGEhqEB9GGMS3iX8AoqSu6bR8Cox",
  "key31": "4fu1yPVZpoEsWVpyL1XJbECUmWpNJctM6cVnMKgYuwHyCDP3nYo7w1aJ6BGDPLqRtPDTrJHncmkGXEfYNvEPZ6ed",
  "key32": "47Q3cjMp9VX7noAzTq1fksiZJez1qzG2RPnjT7U4TinRGMz854CqF9YLTGxz1dHYWqfbAe59bwsaoQNEA5pSyFRm",
  "key33": "RuQYkWyxYYq9LdhUz1tQLhDvNvufnSwMEaZjEqwuSgp334Qs4yh5PTPT9HQGSZngoowBiQ4ssn1uCje4pvLjPyT",
  "key34": "3KiGn93XJvTehUcD6ciCX8mXFYnARQdpULSujSddt6h9iBqstvKt8ZhiUKU5kM5RSrmupb1wiLWXPejF3UKSFUTj",
  "key35": "42JnWEpeg9beqUYNAVxQ36BHJRZUPRQUDCKqi9REConZiMzCKekE646aMWaoM1gDzVuSheuQ5bYs4gSpEWKhxARP",
  "key36": "3PL3W6avrg3Xkw84CkfR6J9aca2xsb9BEhJFgcE6sQWAZFZdYmt5LfMXwTzacrNWMFnQDmYpxYN1LPzA1DESbaWz",
  "key37": "2PN88BnoG2hvo85quh52nD3kJhQHdv8GQkySKPCBmfJnGYFRpJJKH4t5NJqzKwy5beVWhuqJkX2R3znjCnp7WyzT",
  "key38": "yC8WhfFzAiYLwdbRPAPG5ZJS9APQV7h4LuEpYJWtJuXgWnkzWFTUvGrfXp7qutem7UzCW6ByyGvPHadyRQVEUot",
  "key39": "2KM9ULP5yRDoaCiKaAdUBbCMtJEBB7qqzXdiWwWxaeUMqJeLERXEK81zrSm3KqQYL8wTX1UZ2ybH2K6UGaSYphHG",
  "key40": "2fedmJJina8oCmkNDqtnvjCRua7g5JCUcfUz74qV2Q8FbvM1n7QJG8FvPUTr8woEocbDJsyS4GUB9SrALije5d97",
  "key41": "41eiC8buZhHLCnXPndZwnmDkfmFZrjF5tDXcd8t4oPhwqeQTmey3DT8gQQYuHWRByyG1X7cnUbQauWLvbmg21QkB"
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
