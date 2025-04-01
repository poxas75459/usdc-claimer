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
    "5Z3FZb97e5Xjr9e7Kac7LnyVEW3LK28Dk8cXtW2455JYU5iVbxJcQAdADqFzwuAHSDbcGhAMy1wNrc6KvTPgt86Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hc9bRkmUGFSGzoa4pZJQMDaJkWCA9YcM2wYm8knGfD6TyNgm7N18xSCf1CVhmh3F9jApBuXrA8smusgHLs1R4fe",
  "key1": "315K84JJhV3Zso5Zxn7LXNQh8pL9BmUuYvzeduU7xDNbwuwea4ZauwxvnkSaRbaGg89ACzbsenjbZQTfJRDK1ycf",
  "key2": "2ZtJyAy8mxyLuhPgSEAjbr6cRHpB22VLic2y7ram7HEY7u6KVoL8riykSkxgzPwWBf5dN6kLBedyATfFHju1A88a",
  "key3": "3UdVV5EZNQqJv3AoYVhB2RBYEFTdC1wqbKmpqh2a3s6gGqNbDr2Na7viSdTj1TUPwoYKe7b9tj2LDmpU3pvsiBFh",
  "key4": "6aHDKwdzc2PG9JgnWkcmt2SRmo2Gn2XTLywGijz3iA1xBB2UmDw5sp4AWm9ZTqkLz9322W3Mh1TzwyMZoLFnKEK",
  "key5": "PU9Dc9RcTAF487Tzphi9hNBgP2y3L6nrL2iq2qWzx8iT1JZoJXXSumCB9U1AyXW4TVur1Ro7HhJ2cU4e5ehmUgj",
  "key6": "49MVhW945aQttbV3RwatKY66AKZqAYxrropXBmVq4xnPpixRy5HqDnAzXUdjJ8kpzeAU9kGAH8ykxLycpcNYv4Bi",
  "key7": "cQdDH1v7VGPfFikQFJAvJ7GuxorVxcymPLdpPpuPcJE5Q3VT8Mm5QXmbVVXaz7CkzgBvv9LqwyhAVAsLCZx947C",
  "key8": "3bDGYWByuCP9JRPHiKojrznXS5ffyJzK7GHAfPTQvghPzccUNJKfDZxzt6qWFYa5HcESzAok9cLt5CAR2cpMFLRD",
  "key9": "3dNS44PCUeGDq3P2JUj9agcShWSSuEuuJSHiAU81QxKuaeQD4EQaadYf52CiC5Xai3o2ZXAWUEGgYoC2584GChLd",
  "key10": "4gxPbHK4Xe2f8sLYHbK1ETvwevttAx1TR7NhyaUEXZdXyEwCL2ZJcFmbP31LRybueGS9Wcn7P5bN8pbugK7BHmUa",
  "key11": "5EVXYbzoiRaTr5uU6CKyYo8HqytFm4Cd8QASpandRiW5Gg5iUQogDfa2dS3DLVVaWkaB1XAX6KXYPkoU1SnXzRqN",
  "key12": "3jRLcmyVYyZnj83WEvdvZxEFYsshWroCPNBdBnmTGT5u16D7TqL6EdYtGRt9uCnSXaR6CND4cCezs8vd4UAe96gG",
  "key13": "tuRdv8GsG1dC7WSGBxFyrxMNEmQeM29SWgbAVsVisK4DkznPbK6XtoKsEx5KQ5xNHkVaEDuZRQSKiBJ5zGdyeSC",
  "key14": "5UpgpASue6WCBZ3TYtHyYsdD2uPWaXyMjFyj3pk4sZRNZdnpRSNBFE3ErjkrfXFywe8yFfny5fuXLCmjSnF5MUGA",
  "key15": "aXsdgL9Q6HzrU7yXoQh6x1Q1RaCWaaMsuxRWQYq5s1c99c6sJmomx3sDJob4AjYMpuQovXYvJzmd35nJqAxTxeN",
  "key16": "ZFyUcPCMsbUX1JvC5qbp42WHWpDBufThr7Hb7binfts2gGtcTfDfXn79t89UrWiN62bWWobQDYftKSKXdsugUsW",
  "key17": "5NQqtn2Uv7pTWkdVZXp4jc9r3vMoHCdRrFLTXtSynAUrpVsQr6DccehQDv1x7R6QkQw3jaTKd4QH9i7u8oNAGxLm",
  "key18": "3mhbrE7Moe92Ji1uKCmrqDNaCNgMLum4xr3MTmVnz7EBDCCdmtokGNSUizAAaiNo3C1KEtSxfudoieVLABFUPyek",
  "key19": "dELquobdiF42LJxXuGVaiGs45zk6oUdAxtXz6EMmiXeRK5kQDVtf1AJmQkdFBiWY7Q4KptUpiKez8Lto7v7nenW",
  "key20": "3Czmer2d98VqLK69Fnm7191wdhcgucxU23QwxozGbbXBN1JPMF5T3K9qW4Z5weqWxHheK6AuDxxFVSAomiiZfZwV",
  "key21": "3z7s395PyBAqrMDqFFxytX1EDevX5n8E4rH3jd8H4DvroLemte5QHRK1VfLU2y9cdimHm7nv5Ft8i2F3vu8euJZn",
  "key22": "3Vj327gyFxkwiaW9pqd361utrKRRE1St1pY76VU8JygufQRx1Je1J1RaooTuWrSuygY2pJKotVdWmaRPfroiDrri",
  "key23": "62pQBu1w98o2NMbqnDGeW3cASKMeXw8nASX1y4bcsnYUvZf82TiWGqz3Rtz3PQT1Qv4vWUu2Cjeu2aTDidGHiPjM",
  "key24": "2YiYBP6A57fL3dBp5TtWaz3qtuH6xBPjkNbjpGNJuXaB8KRVPp6BaAtTVZL6AHVmFfVYPr1VbtNHgBAw9Y3wVsXL",
  "key25": "4jRBZT2oNLXcchUdEyVoV8zA13d2fgYoGUMfdxU1QkFTWFrLqU9ks3BZqNLKsDepGy3xm154jtCDRWnXsSSXc7BE",
  "key26": "PKXAh8VSmWxCPjj91zBSiEZhLbHYAgcAc4JSUBSQzoYdW9nVcvrDRm1Z85PrwSc2VADTPY7n93DpEiH5asMPw8H",
  "key27": "wFM9wrATLCEkbfzMM4SQu8JSC8nXX424chqRVV6EPQAHrr6KTY1gv9r34xV4ysTyRCKHnb2DnMeyFu89tYrtEY5",
  "key28": "2L1drcPxduuLZuTgAxHJb5h44epovrSL4ARgM81uUrHzNZi7L8f8QznFbGmpS2QryAe8XHvTjyubQZonAykbSygq",
  "key29": "4VkySuAUSApDvWKDjzWhJz1NJzX7NQdDNS2hYroDYEnk6Y3sBi3byTZEqFNrYCm5xU1QF5eKdBn7vJJXdak7eCj8",
  "key30": "5xV39i71odbKUr1za9LbyVv4EfHhqM7XtP3gPHQdvaWWyrzXeMUuF5CJZAzAK8M8JxVS93X8J9JBun59T1eLyxUU",
  "key31": "4tnYTNp8jDqpUoeDY3bLQGvfm5aR2RUyY18n2W6f2cRFLsuybE2TaSWAhqc2cXxKPNwjcnesEznhF4wFFZpYpZVt",
  "key32": "2DcjCcJwY3pneietjQTG4M1otFvcd185Fam6LYFPoHXt51E46t4xmJ1CCza5LkDCmNuLUAAyMybV4Uv7dJDLXSEv",
  "key33": "5TLD2QsLAbPQVSHQfMpc5BYXLYzKJMwaZrjzQzqQhxe18BW3cYJbikLqb2qUefBtKx6s3Qq3EoWt4WhFhCr8neRp",
  "key34": "jTkxZmzLP7hRTb44aLDXWDADcyyEV2kar7UPnRrjAuM2uXnszKmtAGat974JNqzp8jiKAvwuXwrkZLEbGySVDen",
  "key35": "3EJBf87zhHkW9sKjsDYN6ehzf2NcGQYbEphN3483dC2tQanjdcAdF5eoEZXJBTMajb89aL1ZzUmQYpprWF3XEDT4",
  "key36": "2B79uNeTAk8NL1eqwS1ubqmqVgD4oobturkYS9bMd8GpFVgFZqjirkJiuT4KG7c5cRKuViZ3imkwoVygvFhRQEMb",
  "key37": "XSadQ1Z3SSGgU2SAYayStZ8E1QpMDYyfZ4SxZiFdCkLCP5fB6BxFt7pSAMKWFy2EhhknJ3ZJK8wrsut4dHeFsJL",
  "key38": "5CRrtH2yvhsKCpi9BqHgo1QxGDLSSqrNUvFXhuyPHfqpbXyn2fJdUQGqqgVJwKEeY9XcpP8FY1BXhjDEKhTKxjnd",
  "key39": "4ZFapmGCiCw3gVqT1Tyi6yTxFWjkLL6UMtua4RMGTSUFP8YzxoSSU74PgcAuCZwCcim5U6GfnQ3rcZPSwUpqnHt",
  "key40": "xYCB9yo1EBsQDBzwYnLaieVat1wfgLAKMBaMGZSstJDuj8TcxaXpGdzqEH1Vd7wEC6vB7DArivpvpgfMJF3hf3M",
  "key41": "4ACL14tjmMgsajWrvtT4BPvcUSnsMCASnRR6G1ot9u4EdVz7c7T2oaR4eMpseBK2jTXY4CEdneTKmqpCFTxY1nAU",
  "key42": "4Tx5Ha1Hq1AysF1PxXwPeDRD8TNX1RvWWdJLof3tEJ2QbJ3DsQyfVmocHAMifyF6WhsKzLc2snjbBpV1jpQa7uZ8",
  "key43": "66rDGfakSizzzaUbVjccWCdKFnEAFCvN7CguEeBJWNbv5SZwdsQubQSPRzinNv67eGrYG7dB8kV7PykAgAFyWf5g",
  "key44": "4fZSToYZBfsLsXfvryphw23peH3QK42s7EufCWzbpBLH8bzeqVt2eszUryskxZqxtgAjWqiU6nGssiYnuFwu9CDp",
  "key45": "3brR7nfk7zqEFLcx8Pa7GR6Efs3xR4ueEYDqh48pcJ3DkvKhiFUD6dt9UvSF1VeXaa6JTCdz1rtSKcZZrL3rLR8v",
  "key46": "5fX8AuxSDsbhNxBD8dxeUDbpKHVjDZL7GZc61vzGLwyzLHb9FuwJofFgZEzq5UGBKCeZ3BLT9HjbzaGywSBfRPoG"
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
