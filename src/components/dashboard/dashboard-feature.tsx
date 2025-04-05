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
    "3TrK3UqGJk7SVJQX78QS7WYTX72zFf6a4igGGcNguk1xNw4aV7g7qPYYDzHrFXvet9Mkz6Byc1Gp9HNrZ41Kyg1Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xBMu1ydhZavcAuPsLn3hNt624Lh1e94x2pHhzx7WCzjeXvvcRNpCTasZeNT3Zcp8mP3Mhi9CpayVJQwr8Y8pvZ1",
  "key1": "3keq2hspDpH2bxYtBvmZL13BthaXkodSy2kfUczMzUVdYzd91w5rGswq7uB7ifapPhnCe21LPJ8T1UCv4q7yyvVe",
  "key2": "3bSjCcNwMXh18ro5LchmJoGz9QQvttSMU8hUer8defsyvw4Zu1u4ZsjgmXt72ZYapHQNT4gH1H96gcX2m8GiZJRq",
  "key3": "2KHroy6BmLdQbqCGkFDg9Zz25n4qXPnDVEbMLL8HTVL145vZd1iWUCyBjJudzm1LgWgWhe2vSuocuvR14Ld8ZaeJ",
  "key4": "3tQ9oncesA4mfXHjGrJD3cPhTLSyyn9mVs4EXoYNtwhFh55gYrLajq4r7KSqw5qfR2S1BHcDfG2BNPay7vmuZxPg",
  "key5": "5qDmcMsQGhtaCTc9iVGUa3Epu7fxhpjoVFzt1j6tQ7wuazQ7GySSeCfT8zuxpPGU3rwhbbSEZ21svv7RS3xgEffc",
  "key6": "pjp6w9X37w6FzUc9BAP8eaBsA8YqJ2PyTceyfEP4DjxKRgnCMBE1REKR52GYLHMdmMLqnBrA28hGXR6LjcfXntJ",
  "key7": "5ccBWYngWfpLgtA247d9mY9u7urQZY1BpFFnFyAkqTbQDcAprsuhSTaieb3yECWdRqVAQdXwHGCfzcSgGFTtj2ZG",
  "key8": "B1bGp9C93Pi8DLfaVzBFDwijTXa9vKwjt53oj9WKHw7pcRxAXriwbRsGoBmRGVkvmWMrxu6xRApK24EmhmuZf9Z",
  "key9": "2DRwQd7Htduwme5B8u2wDQgixxKBLKBunA8TvowUhJcExjCjS6TzinD7JEJQ7cfYPX8gAnq2gk8TMUWwYUbQiWj",
  "key10": "2qrQgrnJEqSbeZGjDZ3oZmwVqQrgBaCTKKNnYRDpt14tGM77SFpeJtM4PNjeUtG3ZWWGeWGiFR1jrPf4VBEj3GZt",
  "key11": "26bf1kW4gYSHX25b2PkdbCFoJCe5Rta5XMqQDHop7CC1U6FNf2v28stuxpGRqLQmWetYZn2q5toprsZKLEubC5KK",
  "key12": "4tq1T8YHeqdVtBGvUu7CY2gxY6EEDLJ9m1orL3H9xKoddu8Ubc5uLx3DhwT3Z3P5aELKyVpVVxvKxjarSniePAqd",
  "key13": "39kH2sa8gZc9g8KFkhREDRStAhgq94RgEmbCZk9dWNLv7JRuHYYnq5boRKLYTrvJcHWJroqjKsf1c3NbYJmQNgmk",
  "key14": "33knhrydZ81tW4EDF83eRMCiiCWEpkwvyRmZbr8hWT5aeJ2MKmMvwKWnv81ZP1V6DAaV9PTCfnuRJwSGmvsc1cNo",
  "key15": "57K5e2KTRRjX6utCh5FDMGfyrqefm2jHanL1QKKHxHBEoMt6uRdf6kRScCGZGL8EygaY1z7Pqfg2B6WoBUjNaEsr",
  "key16": "5WZNw4VLQnwkjvYipUVnmQMJUgynhm81Z4tktzFha8SNdA9Jm3dvafFxYvGRpAqB362qra1Q5s1KgcTQ2eRTNvAB",
  "key17": "3YgwcHwTgaMhD2jPPSeURNnTiF4c41L8hius3dufCGYCKek2QZCCxyHuYBrqMawLRpMiL1y8htvHhY26Q3HK1GHe",
  "key18": "5ys2tvNyZNAtjPMhh66VRGLQGWxtYX8GXeXsrG9BZWTbeEEQtwWVmWqQVadQTxuxxmkWdfVhfcVdR458Ea1nKWZH",
  "key19": "2vvDzAcmZuEvLf7Sq2yrjDWxggXXX3kp52jbb5g7SxUCZqbqV6boEtL6sg3yhqNKn3iGDidDFy9opWv8QuqSorpx",
  "key20": "kccgQDgdzKbjdwkr17uGkm3yYiAqPxcxA3mPsmQKVaesxiVCCTu339nSKazDdvgwwffcjuqmtnucU4HmxM8iMxt",
  "key21": "5X36YKK6sdFHsZjZFiiWy57p18ZXDp3smbjJvK1d9WdLSJjnT1Ew3CdmjAdxmAeGPugcVrT9GReGjkLxyjAYDsb5",
  "key22": "22ASXjzeK6C9fwwPLQM9owhHbizknC83YSq3owCFVAg4sj7d3Jcq29TfhocWsvm6ij94ywihhbxVcUNgmS5cThW5",
  "key23": "i9F9yaSskZMMML4amjwQqDZd7nkdyc34ULchjkFeXxHGBxUZmt8M3Vi9WbtJgW7DVJJg8XA3n6R4VUVQiAz1Tox",
  "key24": "2HX1iyH7yvv3i81RqJjV8xjWmy1m8z7Y1KaCSrbgqHgvq8iasYKhmbhUF2Ad9YHL6FdCsvnNxwHhqJb4XRj4ppRs",
  "key25": "3ULw5z5z2Kvkvwvws1KCWiVndbtCFirQTr7LEZo6pW4ZbuJHTura9YKEDkHRJXeZbWasfLP87UMLdPjk8trqZ5EH",
  "key26": "3wh7RPAjpYf4Xqa1xrLhPuCbt6hTHeXhpsuxtkKUWgDcoZssECxJBtKVokryKycywfBED1YLFTN2CXcg6T4PqAFh",
  "key27": "RBeZ4zmbVPaQ6gacUS8xyu8Lrk7QXxydvWKV2yPEWLzbkmjvkEzMtH4vZcomVtxH4itUF6BZJJpsPvGhiPsez6R",
  "key28": "3KKu8SW7Dh4Nv1fvMeevzrTSdkEnfSHWGox3pweyyNSHkkyH8eKQ2yob3vaKnyknZaRAh7Bq73NNscppB8zoSdwe",
  "key29": "o67rU4Yq6e76ub7LFvhReScJA4RUMBNnhwnprz8wb4Pj5skz5WaDvjmeiNRS7kBRUFDLJvc66rkV3kg74x2tqAX",
  "key30": "vkdqYhpyUPeK4rpGrHaTMHTmdd8BbT93w1u48Em7KUNa2NZJ1L7g152dp5FDtp6nNCyk46HK4SrdJooUPq9yUb3",
  "key31": "3TYP2aSUUXqDtaGpJbGPtsBBSyVooA6bFfcG43CCPEqxRPXTqGz7C4uUYgf8KDuHDkATLwLnqhtbUD4dvzqabPVA",
  "key32": "3vCLvK6k7rYXk9erV8esnAmzRvUaQPkZV92nbS1mrhskisKnyGrvCLrkc6bWEG2GsRc1kc3ugRbebiphCF9norzD",
  "key33": "Ha6ZqFmr55TgdkRArebdMKBzqesw2TQoUYFhLRrhgXzXvAjugJxxunQRjJi4EbPUssD1jkpgrmy18HWymHvVFDJ",
  "key34": "2EbwuDVuJ2So26a461gbYfVvGnYKH6849xi9HcWfvoUj5BsNJ5nmoNwAuN4Uv2cgbCNukFiaCey1sM7FcEMr1Qem",
  "key35": "3zothi43ysQXT5wZgjc9xqhD1PyEc1U2gL8r6ggZA87tZwGnThqZGo1R9un2xBZtricyr61zTRMq6BQJsWj5Xqpb",
  "key36": "JNWbArbyko4tbKSyYq9ppKew28QjLwFJxJJ3SD5YgbJ9zBh6FTKHDam77yTPfcyYHSNLewQMk4KppGnac4Wo3DX",
  "key37": "62czYoQWSMn86S9RfxdyRnPqWMZcjY46ep7ta6MYDW23nJ4jWVQYg5VfswwNCyDEC4BkrWCLDPCaDMzXLaLELsti",
  "key38": "2RbLqdPbXaqMTvUyjtRwKkxkg6fHAk6uVPmyz8L5AK1WDaGASkqnErx9F1xPwConru3eBnn3xVw4zmeVYeGGhuvG",
  "key39": "34wYAb8yr9dKnGxEUN43XNyyzeR4KNWzMVbH7MwsB4JywNF6JFULyWpfv2s2MeNkwebjGtPcsYJ35ZytTVrzQPcu",
  "key40": "SQHShPNbBktB49ib7pxav7iyqzFDvp8v9CpBy5LEMFpUuG1hCmwi3bupE2aBMGKEx28mqqbBdDgo6UeXSDvC26N",
  "key41": "2uSfou7fAiaLRZZivq8ZhcwVyp6jMwBEx13oU3f8Wz9SSqAbXXWibQtFjrnjavSPhindc9GN9xr3Mb9gj2rEhZV8",
  "key42": "4nn3NqEW32tZCHViqx33zAFN1NPdimS4K3awBBy6zAnhD8sFxFZck1i5PkLcwdSYHujgo8h8qAEAEBLTMVxmtjPc",
  "key43": "4VL2UHvBpVUEtUdZ3Mu6PDyNvjFaseqKqdE34xo3kJzTJkG7mZ7Mu2rV9Af6t4skct5wGXUsPPXNHsYZyR2Th3Ug",
  "key44": "4V6bk51P3b6pQYBqxsP5ajViWsoYignZycY19SCL1JQ7Xy8Q3MzcTceKUPuwHNCALWZJr5opLDnEHFPNtZAiVEkH"
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
