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
    "5gLLgWvV8s2wPiQesW7FdqM57nfN7kZqr1ud6SQwj421Cu2qvhzccAcFAfVhbTz9tAH9zwJxFc3eg7V3ug92nVAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1GYKqWohgNZqW5stEuBjKQmpYYyNQ1ZYG8E1mhht43Z5qs2iqQvzfm6TYCtcXGarM7mkrWFSSnrFhVFeEeu1Kht",
  "key1": "61uRxzicSQSYFaM3c46NtCfRcK5jpwk6tskFEq7Vcu1hGzGpb1sGg5RmZ9rYVsHRbtdeptrYcHbRtkxFLAeUeEQk",
  "key2": "LRGrqEC8NPtnpHm9G8E96fJ5wrREvxvgFueZBmopGZCF4Vd6BjhHXnskVmMhpSbjZTNVVvy5ck6eVy2H4n3drHu",
  "key3": "2BVXjpakVjhh47JSA1w733upUiCreoGv7dUVyJTY6aZHihzUPMUJy2LruznDTkMfFPgknfAHAsPeBJ3GJXFxQFPx",
  "key4": "u1vysDjVcaVdZwp7rXYdjEEA9ie3xuP7vP2f9QwRkNeMuwvQ5kn5ShMvpMbZM5GnvNvbuYkXeEyX2vat9VDuRQy",
  "key5": "5vQmg9AtYYQ8pgdKstCqwCPtgGD9Gcj97ZgwuExGWcA8tsZKrYn53nZzDGDu7mq6GNzf8ZPV1M9AdgB3P2dV2mUY",
  "key6": "1DLTcJR1V4E36ZNS98rHDPYLwMLpuag8wjxWCpsCJ82cj2XXFTK21WhzpRrj7N6pWFYwnJX4wfgtb9AGR253B6p",
  "key7": "4yAV2MAdU92RA27dPujrHmAbC5otgnPioJNxgKazxUPG7QMTS5mhNJH6aMYWvtofzPLh2sivEuXhizyFRzEBpKF7",
  "key8": "5j9nLwEXEVYBZNoZvsm6gJrUBEBP6NChd8oDakZFTSNstgJzkqb7EUFTjh2qCxm4pB9tgCJmiwXkoh5LMFwZjBZy",
  "key9": "uNCg43CihYREN3VuHkB4urmw4PXNrvAvUAM1Cg3oEb1tHkvy1phMQfvwsBq95hNQJBZ1nxdpMzxRox7fZSGAK6q",
  "key10": "2W7Lg4iRiP9ZLNoyn9k7VEmtamKkrUBj7CyazGHLPxAX1rzYXkka58wYYBuyErvuVgtHTit3sVYgAaeFdX33f3mL",
  "key11": "3GrbNk2zaQUMUEZMM4Eqfxj1Z2QrbVnsANWfTCTVhgLi1qxH3LQNG16dZUAVgNp8aRg67JxYZKJdMBgy3QLBYiKT",
  "key12": "5Xibj3UHv1mhCutizSghqEJy7z5H2Jc2HBU3QE16KifW4b4XszikcGgDJapyLfy699o812gt6KCWP6rrFdjcWaMq",
  "key13": "3KAFjPLxjWFfZUk7DFsc4soFRwRx8Na7aQ1XczHZvdAgYtpQSMU3KZCtiznSZMbrJP1MPfVq1c18QVdRAEVBrTR1",
  "key14": "28VMeywVHX5fu4jv4Ac1q93o8JdbMryNh2kWvumyBHB42bkDg7U8sGgNBcEt5R1KNgwaM7izhkDSDbuC8W7UaWRR",
  "key15": "2gipvFw2umzZsuuk8gmHjJReLQzgmqV3H9NfjRfrp4hh59ctU9jL8uaxTzLnCnxGBfGf3d5FV88g4YTdd37WvRwX",
  "key16": "3GKTkp7X3PstC4X8bDjwWckmX6fjj8ZDuDbpFGPkELwRbtLMJCNzH4WudHtipdcGTsphwWj8HfQ2NQiHXocQ5pNF",
  "key17": "5mSUmR3329a7tRFZuukb97FqLUn3HiKBCxB9YxnyXzhcczM4VBdxi2L2tXrKjVWikSaU8aj6tDWcfFoaWp3xnzhe",
  "key18": "3WEukaw63jzt4Sf1H4ZumUcH9KkiPvUc4z4yhjjrYUE8B5qXRDHnEg7CB5wQEcBSKVQS9etn6GDyEvAj4iXAPci8",
  "key19": "257ryBB1FMzH7d59jrfcEFfoDFmvuBj7e8dyHw2PRRwh1eTS6H38xJyhj8nZ6CAR2B57pfZrBFUdw2F5Aai9hizk",
  "key20": "5TjifjfGwYfeDRmLTBPixQqrGUF9Sjbik25HAZChC9U8b35CDHaLGB6kD6tBiPGtTsrQRtKwyFYRsypKXVT67og3",
  "key21": "2hJrC1TacwBdPiLptzpBZWJJ1yNR7eZKdBCReQ5bvjNQBy7ZDWt1Wa2vZr3TUMcYC2TVMo8YtN2AwFojohNLLxzd",
  "key22": "4PDVnxsfzBoqjBGFFLtYsqfqxPwmkrHVFsLctY5pnk2JXDwhiVWBijTheGnTtJ5eqkj2YX188hroAmo2j8ymBMm7",
  "key23": "3VnkrqH1eQyGqY38oL7SQ1KLhdMC6w5jf3gA1NYCs3KoMoKfL3RRdK8aTg8DCukrrWNzSWRpyxLd8JReNVQVeHzr",
  "key24": "3XDtpMpNqJFkXw2dQzpTzduZvvmVopZnKRvQzXkFkxndS7316YJtLegnKtVpZaB16MwYAY39mCPgPZiLfBW7f89H",
  "key25": "2irqcC8upUAHqu7zHJdffCxhJMe2sMDhsaX3cqoSVvCveWSjhqo5DVzTXrXbgDyAwECuzNYsfKdGDknEYZJhazD9",
  "key26": "5LLwh3zQR7TvdbYART5qDR8V5bbQn4eYWsTct7d1u3vT4wmS6NsSKzc1Kr4FzyZo7oMacH3BQbEs3k6HZ8pXa6mw",
  "key27": "36NAzP5SMfwr9QdeRU4MKV3cAsRWXvFmuw5N6mXtC1wzoBREni6EXVRUfJWtCdVZRzNeRjZqiuuLdZC9jDBLrZbf",
  "key28": "2XxuAPjzBFv5uw76nZGAWKU2iRhupYMMsCayHsAkcqbabE8LgUTtQ3r7LxrsHW5EdycjPGx7CRbGaHYUrQsSiPEq",
  "key29": "1RizZcB84M4bMDQtCo4q3y66Z4mL1e7MMqwkhjCSPDnzvJe33TqKgyHY14Q8Qgk8m5YYMzEXFJgsaEU7jXqfMrM",
  "key30": "3xN7q1tL6rxVebi4UZYL1QwckHVJDV4XpvgavtHZyPRHaMPYVEADCobxtEB5ks8MfyW9EZwGZSM67TAYinwCxCgw",
  "key31": "g69aFSPx4AAPMtT7eLkSBnDSpyamM4sDBNha1JxyDew6Q6vq38Ednme44dLcSfDkDVraAJyhRKT7uiGBJi6Ez4o",
  "key32": "L6NuEm8SKs1XPkivg1xCxWZ8e5Wd11y7J1NvJ9bWZGYuBgHBMBYsxgyc7TWwuB8WeTdT7a3SGXB5r8ZXioe8EFp",
  "key33": "4NK4nf2toXytaMxrmaYdghswn3abd7WKDGt84hkxeM3AMWH4hZLaFo6a3gKPKhXFhTWKYvR5xD6xPEsge8dGoyzv",
  "key34": "WuGgTgVHTinms9gKQtcpeRfVEbV6xu1HWAfNtNFAf9raYXWfsT9ikwed2NQ4bLGmSoCqzL8AbS7bxkNrurMDDEd",
  "key35": "2sBZwF5iYC14R9P7sQELCEK2Gwq7Jk19WzYxy92Yj3EymY9HccHT5QHXaf7x4wN6mbSpNkgRvEQFVMd7oBCS8xGf",
  "key36": "4sDrksGYSM8qPr6u6qkkcmifLEAgL7e12ngXSbjoXP8LCpC98QvJ9g7CVC9auhecvM535GbAVhCAWcSCPbGfzdqQ",
  "key37": "5poJ7SaWfVoQjDcqvATA3aHm2QoyPXU4Z475uY7D3U4prBZY4EDAUtxh33xk59rWZhAPydwu9jnAeDoreEFsr6UW",
  "key38": "3Nej6Jkhbx1Ke8WZVDEFkPJHtbxsYgTQ9xyMZocu88QgwHEg7H2DCBvovtcHSePBGH97g6Q8gf5k6Vkp4KBJjf2M",
  "key39": "5KabStRp5UtVF2DDf4LitRBS7ecWXPXmvYVragbLhnwukCRP46LrYCxgtDMhPFaggqEp78y83NFyaLpPMq85sJiP",
  "key40": "5HcgjxEaEmBDtnKy4dBQHfDpjwHs1ZK5bYv3TD17cArkGf76xwiEeFo7Aewy72Ly2X8qZLcTCWxbJsL1ma1idsSL",
  "key41": "3sPrgmaqEsUSFEkmECgYF6j9WoB18AqwXttH8bYdQ462jt9udpbpfaTAgnKH4ojqtEf1ZQrWY2SYEX4JkAJq5nPY",
  "key42": "22jg3qDxpw3adWphnXCXdJAmiqAcVAVyR8FeV7WAEKCnRaQ5g79xL5pJWowsrwUHa7gXsGvMczCHKA5WMzjBof6Q",
  "key43": "51qScJAa8SJiMroXi9qWaPG1438AtH787L447MwAgDyAdVnagPpeJs2R4KUe2bdKU7qLW4MGtm2M6F4V5DBd61DS",
  "key44": "XEvmYCCoEmrVumeDQPfjCnQZvXKdAtgXPHQNPv3hhy9Vg8n1bp4hDbdbBpMrQQGsMfz7X6dz5dWuhw7TkTnqcan",
  "key45": "3CLMnEUHDGEfiByettfLwLg5wsQisketAixP1z9qspzUNECS3cUbZeMrms5oYYEc4wncEiKp36bWoye8LqCtBxqx",
  "key46": "4ZZ6DR8iwuDR33YrsJ4AmDKDH7mwMM5cergT8jbfFTivCt2eT6qooh4s7BRJEmp3NCJvSdCCVC97cSae33TUkXtq",
  "key47": "3FeaBDyWNYfGLcENTTJrBBnyQTgFEnZTujksjxbYLjBHnX8uUV2x7bzAVZoPCLZospZEoQWoEUwDRNa22Je5vnCM",
  "key48": "4Womr4sRGKKJiH53wyYRJzDALS9ZjALXskdnsowqc3XrL1mNAgPbN6jDKkDEAcXcZh4vddBj3QKDPcT5yhWQGZYt"
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
