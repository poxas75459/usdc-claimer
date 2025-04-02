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
    "XwgqvutLZAPzCBoyJJTbfLhLfBpDrNmbWShJxFB9SPcJEFCPkBN5gZJdrDbnjKc6VEBEM8zrVbVqXhQxX5gXXZy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48SLcSzu2RaZo2DR6wKTbS6FGeEduU8qGogvpoMnWAE2mPwqhQ8yo8mzMuWztYZ8xhyR78Lhtqidt3tbJJSpgJAJ",
  "key1": "3P9DDWCsDArxAxhiGiYic9GR7DSx5aGLGq5A5uQTobpVdygLJKioqCXmzCKZaWXyeZYGJSdW6fw9qBoDBEkduGGP",
  "key2": "4ZTrzvCNfpATJYhVfEJpAZy6SZxupvVduApKPo9xzXKW6MtW1rE96dmyeKcJM4RTjp5LpbKJiB9oSrDXTFKpNo5c",
  "key3": "2XfyPwfHB2hF89QfZWpF1zK2vYkuzcYZbSgo5wxxSwzU53KrNDddtHqwvaaBSxfgtJwqz9M9G5iWN655bbkhvhMX",
  "key4": "3XhdYSAEwn3v4X1xAQdem3kV7fstWa6gy8NPFj3gojHL9ksB2hkKG9BnP2BFte8BAEJ1tjE87o6ER7shgLopQMeg",
  "key5": "3QK9U61KSMDW3sUpVvK7nGaJJVBko8F56agm23SXvmnBGCCAM4FzEw94E18K99zseRSxExQNQi1swcq8R6SMzQs7",
  "key6": "45BKAoY7mhMzan4Rdhbhgq6aAeWhXw8ch8xfomH56oyt7tqX8HwYbUM8Zigq5CDiDyqYHdSnCJN7CB4QzKG1AvQM",
  "key7": "21Q62cuGBVcfcbbjmZQcdFZpd9zZ8FDcES7fpfsc7SGzr6rUzXk4uefp1fhWp2u66Hp3gsZDHhkibFda7gbYX5wF",
  "key8": "5tgyTLV645Ytji8McykdfxStSrbLyZzf1PkLfjQEq74eG6xb1p1DZutr5zGBMgibfnbcPHqnasFXG8dhDLh7EoSb",
  "key9": "3r4hLo9LfghEVKABCxPHBP4Lxwxd6q1drqJne2uifshuenYgV13dkZwMX8o6tZAmAoyuM7aufvrr1C44YfPnaCw3",
  "key10": "4oPwU5yB45R9BkAjb4Mj1oLHnSYn9CJVWsp7V2QgPGjWviMhmCaA6xqSFhy2UqjpLSuc9ijmpV1eMoAx3Pvzso8g",
  "key11": "RKMLgDWZSLFTdbkfYSgRkeKeifjBoYcckpxteKuHWAGt9neqoYU6zouHYacU1VBPSLxzrnAajQSs9rUJ243aYwm",
  "key12": "5hkvTMsBdV8DTX1EcaPFTiGCtCr5Gx4yVJXE6SSZuJUMtb4Xdosoheqhpzz7LVMHBJ25bjwqkKRfcLuF9gcBPVU2",
  "key13": "LCzgjWfQDRnNdouBXo2zGcvCGfLGJ9CLR1MsMfVNz56cCJ9aPqJ4nhivzoTHLEE2XTXQCmqBRToLKdkzPiUxMwg",
  "key14": "9py2H3yPK6ZnGS34EV8Epq8QAkQ6LkKCwfmnuqMRJSXTJvJpZ4KHqqPGZ1paC7QjH3ouYadDGfmddZ1CTdAJg8G",
  "key15": "2YVapwExGdsDunwjW5o1L39CLZdBuPGi96XS4nsChXr93BpBfx7bgGMgbGT5SNW75aUkVC4AMt3GK95Q6uPCxvxY",
  "key16": "Am3vYY8q5FQ5VfePiMrofkNuYZLbcEfPKZwtHmhUKhbBErLuFZg2am7Ws3yKKuCRrVwJnF3dvw8ffzMDU1MM8Lm",
  "key17": "5PfgHhfQK5SEgxZkC5XNHdrgZK5biX3v8T6mbV8MhYBMHLapCA2bY1kPcLJQudRTKmHQZ37ZGnHJXUXiSiDX6HsK",
  "key18": "5NWsj23Hbkvat4VbUFrnxwvVSEYnmHtVPQJmqEKn8ZfJZm7MV26ZJPUZL8jZbwgN5EigQ6uZyYPCbF2w66Edvcpm",
  "key19": "4gpGtcRXWtaVtuNoPxB17iwCrFFSyLjfJcKg2knmMiYAKf35mycY6bRoqyQz6xrA5oKaE9SKdEi7weEG4zbm3mF",
  "key20": "4uCahLu12prE4EUm9FPywKHXWu7eMbZx76gaFJYwfa92yn8w7XQ8395FZcGyn7JQyoDLrGjXZVVjaS4U24kPCaU2",
  "key21": "2h6pEpjBwJLs89jTvFoRn7L9pEp5XssjjZGyVw4YNFchUhi68pNf9oiasNXcUFUC7Yhm8F4nunGeYxuGehvYA9qG",
  "key22": "5GMJiYQMVsk5ionniBectmPX29g9NWEG8VVHLiSXWkjpD9sPXXdk758zKoYJuhi2TjhHJSfVw2jFb6ickPnyJHuA",
  "key23": "4baaVWqtRQJ3scWVNSXor9ccKF9kkTuagp299ZLBdeKfu4xmkmjjnps4iWoChSkY5wcV6Sm78f4RQYAGF6ypZWRV",
  "key24": "2Lirhie6MgpDERQwg82PiHJT2btBb1DtRvZgpRC82AfQSYt3aV6wFzBEmzgqkWoAALC6tghafJZJiUR3VqBTZEF",
  "key25": "2mSPJTdaA6Urn7BLj17fm4YNPaquVdrsWG4dV2K1kfDK63KkMbGzZiRMM6eRhRTtmmojDj2t3MSXKWWbaCdhzP4L",
  "key26": "5nFHrR3RtA8RENotBcasChjj9HfG8uUV4CYcAeDJHeh8WkzntCGru7giUDUE1PtXpQgxMXJrkZpW83dKuXJYRVc5",
  "key27": "4NhLFPAkMwyEZ73F1EUQEpBoeagBAf5kc98vjWZnaxVAFCgSdeSC585venBooFpVLpR1cy9QpowYy3646GzzrfEC",
  "key28": "2LdDGVZQKDRPE6ANBHvPNNW5RKNg5bMwBM4m5KCB8CyPUWFySbScQ6DKBY5ythH2DS7k3kZ1JHdKZTVbRtVxzn7D",
  "key29": "GQiSmKiSRarfA7BD17VDinksFgxunASCYbYBBMpzs1nSLWqadJvaeto8bQLGDAFTbKAv4Uj5uT2nQHf4YkhGbB3",
  "key30": "3pRLdWzSLcoiWKJSf2AXrNcGYTkkMQygNt6vDPxXm21EAWtBqhct2JX1ZAugDoXTpRVWQ2xBrxnto1ZhurKJ7uDx",
  "key31": "58zQoW2mCL9Wo5cxVwv5h71hTjPRwaY5vQ6fwk8gfPZTx6nX7xvoFrnG31d8NyUt5PySWRg4jhughNnNkv1S4dDq",
  "key32": "479snG6cxMNcN5wLDm4bK63jo5ygLuUH9PSAAhnZb5a2Ji1dFWimS4RK9DzGY59hN8Tqv2o8QkjcUQNjYKssMVpA",
  "key33": "65wbRxG4dYmG9ZpZEVaZNLB3VueYXewJD6nwbfUNHwZN4XT2Mwht1Z36kUcGcbrkh9cr47cA6Z4FjTojAUeoNo4S",
  "key34": "5A7cog4J5mJ3YtwpUWm4MXYWb5gis5WpGgfEkojy3a6LQKmow3s8uohZboyhxht3bkvyqGUtKtpgSHr5yVYzujtA",
  "key35": "28E82Y4ej6qRbxdSZT9J8M2HAgV1uHt6RtiPnPFRBhkG4fK3aNGja2CrJJVC1sbcvDTuqhna7R7bxoBujXrHXq41",
  "key36": "4x8SxWY8qCverc1gVfLrr8JmrXBGoTQ91X86AMtVxex3dKNto3XhTEoQ11zsKvquHfU1Bn9wHHGZciuAUAdDE8jz",
  "key37": "3ghbg8De9dsrXcWMZ2KXnPKPM67N2nLCY6V6wZBYQhn8G1nxc6jC6Zfr3nuPsSr4ZqH9b2d5mJr8oG9CspCnGHeX",
  "key38": "2yJSA79y1rcLahobyZauHJcAS1S2gJHxZmvpM9f8yZmLsY1eF7mx7WSs3U7KvaoyUBt8pw4GvmuoM5w3RsiyQRCK",
  "key39": "3jJnqeukUBNy3HZU9eWDU1rtWNfBfxVLSJYeDsbM2cKKbUB5JkiewiNTLgsRrk9bJsU5NzqPcEckG7djhL8UYncs",
  "key40": "337DQQPvvRzeU2R7Z7Tk1vkNVK4w17zQtugqVm3UbFGpdryYRRrajMwNLsWEr74NkL53J98aBuTZXyhv7YvXoWZV",
  "key41": "qLZZ7cXN15xeayHjQEvURAJDVbqR6Rx4jyGM8g6uXVgnKpgbcsdg112fyG894CH4Rb47GPht5vQ9u9Ws37hjAf3",
  "key42": "5TwkQha7ecnCtYH6CipdUmZV2jeUxaBj8QiYiLqbz6j9JYJxSMZNy8WSihKACsfE1nusEAEMNKx3if17u5nAebD2",
  "key43": "3NuYjJSNPVE3QyDb3v99HeT7gBPmXFnfiTh66CisfzDg5rmswU8TRdMm7kyfkDGbkruSmSgVAvtkSucyGiA9xtSe",
  "key44": "puaKRQLa6wUFkcjYzSLMiUu2xo1DzRXG2DJ2W53QFd6N37wE8E4cfRVZrSdew5VTB1ej6FN8tQKHeT3NihiNR7t",
  "key45": "3JjvFvL62hKNHUwCRLNjAJEca5CKReQwqpsUetHgnfGSNKswwYUo3EdeSKoX4BynzDtgAg6Ko1fXfy4giDY4mKL8",
  "key46": "2prBF5Ji8RHMY6vpXhdUtUfbfmquq1zYBcGwHw1LepTejAYnjgdX4YUs2oshqRdeUAw1Veyrm5gLGH1cczYR4MBb"
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
