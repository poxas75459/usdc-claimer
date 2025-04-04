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
    "hY2G1b2FyNR8cEB12BvjnUhpD3GW69ZZ3y6rqqBp17htsNaUKVD3CQMmxYhpqoAqp9k7YRh7g7QuGvWnjS4kbfg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KNDwNAMs6VKX5dDfd9sux5jautx6zgMHfYMUQK3enhCx6G4SMA7CfErFdskNPhB54b1j58sTAyK62hmQd2B45kp",
  "key1": "3gUbik4fvfrmPvTREBDcaTEfs1uhZcJkT82Uj4Gu7J3zqKNNG5Y3ztrqdU9oax1pC1bdUrLHxBoC525WHCekvQ9t",
  "key2": "4emhWead6MWGjSMec5iLdUu9noR96kEFzk6RJg5zurujPprf3JoLtU1nh34JztDeaCqpob3c9ZNpTRXW772QENfE",
  "key3": "5JX2fBBsdq3M5nA4jWnPk2pwpRWso45CwPgZhGDdpyug3aX8FQ1pr9QSPwNrtJjyRuJeoUzeafx16kjT1Jqv46hy",
  "key4": "4iupKtfXVc6w8wwaEX2UirfTvhmces5ku4CurUxwmbdmVPCsWEhFRZWyrcoQvfM61Xiy9bXQRoH3uwoLJxLafy6n",
  "key5": "2V7rYnae7AVPBanbJg35EzfDS3XYtiMExWabjotrd9tW28gKkxUXbLZYoDWRvZcfRKyAqCXN6tJ4pi9uKMJr2E9Q",
  "key6": "21ystQLSFCv9gaTbmfFR6PzJdqUcXcUL7kbvcbBLF2PZL1fqYfx9SqmfqfE89Q4HhCuj5PFjvEFX7vvcepm213yS",
  "key7": "2sooVEghYvQuRhCJPuuRdZ28EyTWp42yiyD7c2ndr2n832iX5V5FEqUXLZxsn7FUPp8kAStdgtxQ1Pzu3hyPMk1w",
  "key8": "4KMQjhhMkpS8T43a7KJr7q3ZQY9cp6HPACMHdKRXoRztPFmd6Zzco2UDetAYywaMabcDRmc9YpbzJx79HYxdjeic",
  "key9": "4T2aQ9hDWX92HyxtMWjjQxrH2Jtw5qrtNzEJduA2kSEWrptWacAJGY4126JibKUekmhr9fe7YFycZSRiJctgH7Rd",
  "key10": "5pZR6Jca1EoTpj8XPNhEQWfLuKLC4AXWPQJJwNY2gQRfDyex2WFHwcDYnocYF66FD79qMAdFvXey5Kv2tjzaXVQ5",
  "key11": "3NV7HkpYzviLSNfthpkh86NaxKzpKZSnjG3tyJQVbtr7iCAaMDPF4tPZRgNG3NVdU8bqw877URBR2ya52jLZSXAw",
  "key12": "3wkSzqtJ4cGxGgPbEDspNLWhxrrWxD6rvd5ZWe5jbNoEwJj6LwnmqZQ7TpztRk9vw4zBJCuqT7fCqgCWUkiJ2jfo",
  "key13": "2jrJywNWjyVcriAZ75eDC9d2oYkCdcQfaVWgCjpcosPpeT75woRSHfs7T559jwBMd8g5n9FXGbrE8PinCBhTreTz",
  "key14": "3JSKk9chD9QQrSgMNpkxPjzS3YmCEQ31BcSS7rnSbFPAra7LYgdza3cBQSzYCMA5Df3dk926Ctn17xsuRaoPnV6D",
  "key15": "pE7ey7TwijpPTeq6XiaeQXydFk57N5nVf7XED1in8WfkfAuxhR3r9XXDaM1kigWxsebtgZjwAoNTiXz5AdscUeL",
  "key16": "2DDv9jqeLu4vWJd6J81tHuMeHAvwyWmFFHAckmaentMKBmXbjiDYz6GVaHz2XwfkrWnkcKkhwWdVrG7SYP8JjNfJ",
  "key17": "35F3wqk4kA2PGzWGF1XZmYaHiCbKsxYoHcXekzKkDBEJrxynupgsBGp5pfQdWiKxq7BEtpQFXn9uKGSQeZytFULX",
  "key18": "3ma8kvnrpMKnDS7dMoev7667akV62DRfNYKXTdBo1jcxAiCrriT1r6KEDxXriENv61KYveYaJba8WiXTK4LyYXLe",
  "key19": "5QNZw4ocNdCCYtiGPTZjRGK2cmhYa3aaAYJJBxjDXNtQnJjyow9NHT2CvmZ8XDSuCyCJKiNhsx5DFsmvNMiU1H6s",
  "key20": "27w7MEexLz8LPwvGGPjvmunLAMPMGY13H4FDtQkTw5EMZQLCNuaXURSLWcg2uR5PGQXqRndr5116SjwfLn5MYHbE",
  "key21": "2F8pHGuA2jaup8mUAuTbkKUtTVT2aisRA7wnQpmjrfE5aMRYjbqYfkgNFvJ85MDGiLtfqJzXVvB2cacJVEKCYsdT",
  "key22": "2YmjV3Ljb6oSGyLXWwtwVWLbSEkfpNo5sFj43hdagRT1Pi9EyTE5astma3NsgCny7gqrUdyech2wBqgcTAjMbG3G",
  "key23": "4yubKVxyhWgRTHLnrz8TSEPoFro3Sv61eQLJzjAw4dQ19pFzccpFY7dYC1LbJsq9fDCbTfzAw2djhZXP48RUem5F",
  "key24": "5jgbizr3thPF5qHpoyRcmsNwfDGc5qLkVdq74TRcJCfhJzGVYqqaDeg51sYE43PG7EfuLJ7Wjvc6r5rncrLzXa53",
  "key25": "2mQwSrp8V8ahBnbUavVhfFhkw1xn9gHdvkNzDjFtJGyH9M1UxkYtYwPEsGzgdBNsfqZJ98ynZmSAiYFosUPqkCZH",
  "key26": "4XRyQsSa1K6SUE8V4XYKBbyCafjAbw4hwWHpmS1FoEVjUgsaCy4qFHeY4f3jwR7bKwJ4SMt8UXiKERdMTadXCAKe",
  "key27": "yoDBF73J5yZsVe4NYzLbnAajUNdhyWs7Zdhbh5QSLE89gSfrqMYdBgfM63oEAua7gGzoh4VM19XHG5YnjDDjNL4",
  "key28": "3p5imZa6iEVFwfMkAmwfB5bqMtn21P5vnz7CkQuGu9LkDMkFBjtBXpiWxsLBXmeHxCBPb9LqTuUC4bvcRMt6VGKp",
  "key29": "5cXeqoejfp3G8m4rWiN9ZPTVEr1ecL5hwdECsmjNNNxukANRz2uaMfRtcuuhAwbZhAQk5FXWQ3D1XnSg3yTcn4TW",
  "key30": "51RpJ78YaymDM7Tj3i5ArjofvrgJjS86ZtfDcofJFNjDSky991hTTzWfDhwf8Vu7dquW9K1HnBRzoeGzxyQbiMKP",
  "key31": "8ikJudNVCkqax9W6fHK74UKV5LtfKu95RtVCBg79qqDhGR6C9N8MPGNwJmbhWg7JiBm4uz3cP8Zp1A4wPhb8b6a",
  "key32": "4GwZE4bqzYRooLfG51byi9jBNeMqMnipiGEVYbtV2QT8xpkwyEWuqJsjbg5Et1gTXCB55Egup9f1eQZ6GBAFFFBz",
  "key33": "5hUQijT6DtGrA78YosviGhy2q6LBYkFgo87HLtMb1MxR7tUvoaNBxciva7GVKjiQdvoVfgDLS3QP3p3VSXhVNzkL",
  "key34": "dDmnUSC1gCfFy56BH23iAaJBwyhnsn8snfgqGMmCy3v8ng7roadhfFszooQNfRhoiK9PsW1PtvXR2jUx8KV2Wzp",
  "key35": "2mV9q5nBK4wXMvEWSQ73n5xekPpTwTiXrZq1pVua5poVqLkQYbgpPSc5hkeguY8EHJsAiH9PbS2Gg9x7doiHSx2S",
  "key36": "3FxAxCdzkKhG92ZhW6D2b5Np2W5tLtT3D5uu2PzuG4AmH39RpWkXeXji5RGLodZSz2knVUb8kwwfrfy5Z8QQqi2p",
  "key37": "3bxTjJB4QWSaVWRjcqmE8oHsJWU7TPMv87VEkKFuZoPj3hyUkyKaXpvp52ditmuTvVjqcdQR2mUwk7Cpenfv8AwX",
  "key38": "EcKtjcVwxdDN5E318GUuBDMaMQzVWHP2LiLdakCro9LkgHC1rgvi1LiDravWhLkMryNjopEXAoRzpQzBxkCdd2U",
  "key39": "24Zdkfst38VcbbtD9sc9tLXugs9xGBHCj9aD3N5EcDvXXQFcjqRMuWt73bmoeMMGXjBiUo9Sn6sRLvDegxJNSKQn",
  "key40": "4trdDqN6vAmYUqvaubBhZ8fumySp4DWWJ8Wsr9kDpJZYtEuDykruEezgbr9kmUL5s33mah5jcMEtbWwfXkkV9oEe",
  "key41": "4GPVricNZreRuammfYHmwdJv4RKRccfioQnUSS8za9fMMG2Xdy9azTeKRVVSTNiSMoBxcgW6eaXmKPZ3PhwNW898"
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
