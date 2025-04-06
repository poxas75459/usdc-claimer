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
    "4KkoiTq7d5aeEzGTP3Qw5VrA675xpeoxPQW3TYSzn1fe6b8SAfWvKgXbN1MhKNa9wUshFhspTgR5aSxHXNJgfe8o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kdh1Dwdgyf4E3C9ogVGzhT1YqPVyi1vPy9tqsCf9E37iTQa4u5rt8X5mHDPuGNtmsDo4n521qjX18oQx1Wpcw4E",
  "key1": "u6q4kk2J5XwKwiDX52gkiG4WBwJBxrga7T7dqJvSbNy4fY9VYH3tpGKUpsTjydLNkT6yEZqqEPvyjn1KQztsTnf",
  "key2": "3cYYKhBJxSbiYr9w3B3xQU1nz8b8r3XCUuEj7tDMiJtBfxYMxnCsczTwfSeWH5oKbETd7HXe64rnacA8xyVnFShd",
  "key3": "3QHtqRBaViu26BzkS4M3RaYc83cXZfGM7qW9B8gLKYPM5tchLR2XQuq5KNim2rvhkhdHwnBArdJtBZsrpBhMbaYQ",
  "key4": "4yvWMQxACziZG47RMN5MJghQQk5qbFosMbHanAnyZToHRiJXgw5cvNizoLVXiRxsf2VasHPDicJXs7eao6gfAvfn",
  "key5": "2HPS2AP9V9zWd4yfPHDNGAPXTe6zLPgAACDaJNcNJ78Vg2oGhLr4FVkX9zBg7Lsz9kPdgLcMEtfR7BVr7a1YZEs8",
  "key6": "3voRp2jk1A7zBBJyxYZBWwg31ibxe3pbASMnRknPjED1ZZwZzvVYVB9kdwDSkYCrdvq18BREu1c6yjE1Wc2hjFae",
  "key7": "4ZbdPYmTPs8i1dzCAaDg575ZAP1r5Xiyr3H3GeZvkjgqtkUykJfdYR1M4f3wU8TbH5SNu44WmHU3jyic5jddownp",
  "key8": "2CSe8p5hjY2Gt3kSx9E5RSKrkPwKs2JVqEeNyasZQMvCMnuMXNsH8CmH9jQjBhubNnugBa4zVAFTF2Dy9cHhxmij",
  "key9": "2T1gVaS1fogMrAmwoBhX8zuTwekS2dY2T3NyAuf5ThMnRbY6Gjt4ZKBBz6iHuMXKpY4d5X6G1foRxfBW1HhG3heq",
  "key10": "f7kbZis2aYYPRPbT3B8W6c6qTVFs8BoZNUY2DU5skjUC3hiNxLoKfHSyWBtAaVyZK3xfAHBWMntD73jVwZzYMsU",
  "key11": "dHFZtenY6XobVxnDMRXhd6oUPZjYvWRSGDEL8UQr4d7NfxPueVVZSrcZym42fLb37WSfUmVQuZAKe9SNEjFNTxr",
  "key12": "YXDGRj9jDC2VCYJfRi8t1iYg8EdRjgMyd7xDS1dq9tuJZhVBAxMGC8kdSrk4ayLVUwcheQXuHWy11w2BQ6yhTu6",
  "key13": "5YKdQ1ErE23dvRjoiLLieMe6ubvLKuXaz19byQwxgtb6x1K23A8n6vdtDjsLHjbyhNJpfQDULdmFx3mxx6Jxnvx3",
  "key14": "5z5cNDRFPrQVFT9aNjuq4iMP5Loz32zANa1LKUCmD7LaLESp4aiz5GrC1s4qaa3ADK4jCCVXhYc3TNEFKbVaeFwJ",
  "key15": "3a54Ff3EnkzFCmTLycWdQ4PgaxyRXPJXAd6UakT6whcDo2o5Wcss8eCNZphbLGs6YdHnP2c3cMZdTyS1LfZDofiY",
  "key16": "5AuafeweTznegGWJXZydnY5Xr4hVjLU3fA7f59ZA4jZGjiTRaTXTwrcs68GoHxV4HyE6VLdP94q3newzPiA5tJqf",
  "key17": "3kuxhyBwSDEcCutg1KV7JPzy2ARL3SNAuKLnWPmmWZaCwGTyQoY2avRoAufJh2eE9N2PedSojWeaZH3H9HCAS1hW",
  "key18": "4tfpwRRC6GLuqzGwNSpS6oCBUggu7WHpZok3TYw5fy7Bw3NHXnV5uyG7YzxVWTra45gTpowWfygqq1cTebDx7gK6",
  "key19": "5Zo5CZAC4dDJ84sEY3JDqwJBT3sFccRosB8XsbrWXEBtF5gCrN6mm16qkN7iobLXZQMvtQhHa8TAoF53XMLecT5d",
  "key20": "2puRbNTvfUzAj49zx8A9yqyHTeFQUJrsLM5bU8JjNM6Q2JxYR81fBez5DvG2zJpwXnFSFuiFQ55EsuNCqcDK4Z2G",
  "key21": "3fiCJTaqYPShgTT5VBxxPHnXE3HAkwm9uRNdJD5WN9h52t21KV2RkAtkpd1S7iH7gXDeQqMpshfWoJdpFhU3oDhp",
  "key22": "276wRHwoSQACYpvkoPTmQihVnNbBtBxzY2PVaBGDXXDc8JJgbjeCfAthZj15wAbWCPob69esodKd9ueZHMdfbcEb",
  "key23": "2Extc5pAJCqSvhY2umRAMRr63wjARppg3s2Tr8HnWacUp7CAWmHPD2qNTo8fzYqQAiWkGp6ceWciujRyLRS1Jd1a",
  "key24": "YP6ZxFLJeK6fb3SfKcyVtk8GEuujjajvAwQDQuasmGqXsasRsbtSNtiYbD9wy179NqBh5qiUEQbzKr9mjyAhssu",
  "key25": "jXStQhtVcSrznSNBoyFeJaxHvxFT1rEY6HYc1QPD6vJscd3Y1cAxLbKwqj1y25xz89MYYCwojfGnP8zL4b5yeK7",
  "key26": "G6mR1HXbdPWqH1jZvxs7STGayDpqJ7AQqnNkkWtsKrPKeZNnupB4snXXecsPxLAKxbfLN5HEJcwJ1mZfSFghcFS",
  "key27": "22kkXgbDYWaD1ma7JC8X3NFLbWWzkh5GGbGoYUDn2pmED6nSbdVubYfdRiw4hmJfpgVecZk8WWs2o5LTQgKqcxnZ",
  "key28": "VPae3UzYyZQWpgfnbdd47Qv1eprLfEVPMboK4WHk7e279cGTv9o3gVEv8hXL1eEKyfrKBpHp3a4SrckzG4ipXti",
  "key29": "21ZPmpijKRCbq741HkWCSjX9FhuvVbTJQAPdV5MbbBb8MSEbykutTTJCLSrLzn4BRerrUUThtbfD7uMuNoZFuJP8",
  "key30": "2yXicfs9Xu7oViWhPnHeB5w17HU6C4v9Bq6hRofrDGDJJTN5HHA2795cjDWafEXjrJakRHUULdLNkqzYoas7vbub",
  "key31": "3rz99fEWxC3BAuJyeQFQsCYYMdowkRHWjQ962RJNwUg8RjtnDQMpbVJZDKeqQVTV5HJy1mJUDEmqstcT3QZvDdCt",
  "key32": "4yvxdLsoRceQtNVc7u9yoyjUuryooCNfEFsWtmti1uWct87EAvXhocPAzjvhR34DHoK4MLmcvXPyMjJjZpLbXYNT",
  "key33": "2Grr38ujktuEQy41yBeh8wuME7A4gpqwrvx6F6ozkgDhgMcy8f14inCG39U5EGNmv6X5gemFC4PHAA84JPvoMh2P",
  "key34": "5o8KGkYigDLLpyVnat17kjcqv6EG63PWC2ZZqudi4iF7Jj44bLFfqPcNfhKrZXBKD18xUgd4MyKXg3FzYLnypVJj",
  "key35": "4uXPnoEavuZMvmNvrvZjuUf64r8ZsD3e8wyBhWgziSqVF8h9zR7DBZVTuarHfcd6cBGpkFsVFo2Wrnd3feJfZgng",
  "key36": "J3cciwsobjFyp7MtkSFyttUSvypQ5qRvbKpZYZNawaE1GWpjqoJB1qHQgSmM58aPXyfxPuk7Kipx8PVA3XLhVqc",
  "key37": "282jVeZETXpya5CwHhdT87hWgnGmYjLTtoUKc93KMELE2KCvrjufQWfMRGPG3GaxQgWxYfgQPNm5LCTQPzx64dg1",
  "key38": "4geoeWTMYdYavuTSZknkarJa9XbV1VdUhmq6dQeJuLnGQec3njFcDvaCFC3gHtBPPEA1r8MEzfFKJi9goC3irrDp",
  "key39": "3U4f5XDjN4cawyBwnEaGsy6Q24C3GYpehABT4FivukZvvGF6QsXeWXkanX4thtzAbEL71KxnREvjkekmcb8yb7eC",
  "key40": "4BGXy8DJPwyHpFjzfqbsSZPonFn8syRF4ncTBMjM92H69xc5kgKcpQZVgA26CgRFMeB1396h7b4zyf78DS1P7pVg",
  "key41": "4X766XQbx24b1F9DJfSiGshez4Nyz1bYueGZ5JoRdjbyBdjBwnxeteg85ogTzXNzeM5s8wRLujjGjJancKvq6qMS",
  "key42": "3gP6om46GJjGVNUGf2Y2D5kiS5U77vzM9vH6FdAMi7tUQbR9YthvQFwwrL3Sw3bR8dqH9nsQG9Jat4sLQQuwC8yQ",
  "key43": "5NwoPYxRk1m5QPqVU64dzRATNRofniKEc7LLJDSu2jtAoQCQgSaSUaqcQG7kk35nH6BbZn8Fc9aEuVGKTWLbW6rD",
  "key44": "5e7mNEHcUY1oYc4ciJoaktTwMWEf7Sx9syRCuTBKY4wJwewdguzkSVz9oKcfGUDv3AaAPHPkMb5gxUwjGrcFVYzW",
  "key45": "3AYqF5fpsXi8JenGfp5gkjobJMQsTSkMB2J4drvBB3ZGKipAJLd9RS6Lranzn2nJ78dT8YMDBpLfD7dY1Mhuu5bC",
  "key46": "4BYftYbJPYL4H2AJ8cQ6KeGPHWfJchYEbo7ugCPtrPYF85xXEAJNKCuj8UzKDaLrhvsgQxpJfkckEnkFF8Vb58TV",
  "key47": "3DWmmB7oygZvJ2duv73DMkbAwAEuZG1vZryUmXvkMw4ytznmU1L6eubYSvjcLd8MbBtUN9YCsyLENHXjbaUjzE8L",
  "key48": "5LAnxmgyc19C39qBgwQ8YioAgiyWVT8u64qyZU1FxckCi8A1qFmy3RTefzZJ6NVzh3bZNTRESuTmm9uUd5h6Taso",
  "key49": "tZXQ2vQGSApindp3vdxXtnfDmJfjJd4hjPahsfjGxjMMLCKsPhgWrYf1AmE81DeGfCLgLMGGExyLXmT21Hhr2vg"
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
