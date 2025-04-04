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
    "4G4DAjHmYZXV4KqAvfx2XWmadaPTxs6LDBy65YKZdMezBTTjkx5hVg4GMHvbxeoG3aux3P4fva4wb86Bk6YN9iXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RSnSAEHoGjhv5LScfVajwjyNfdRgHgkau5xGsXwfof6dUF1kcZXC1Lie3DxfQDrvjHuRciBET6TmnXjiJM2FjoE",
  "key1": "EwyEPrMZNFmY8C5UFqpWAgLkvkK8hTNJxWwpgPsETwogziq6kgR62KcoXSLVBpRut7Suwx3xXwuEsgz29YvtK2A",
  "key2": "2fCqL35Criqs7YBNE9GEnZmgUBQSorHuEJyNUfYBjnNHY4sHbB1y9Q8WnwEK3pmUw7SrMwTJWu8XM5GDsL5AqPAL",
  "key3": "32T3XEM5CD85fWQUBvSpZt1tGRZ83GbbVWu1tEB2Pr94mkZHKihkoTk2VATx4CDALkH9Kxtt9izRcRygoWbEs6bS",
  "key4": "347sSJgr3RW1PXdgtEfFHuYqFjoyVaikHhFa9CtXkQ1y8D5pKQzyCS1XKqUotyjXrCq2HWnwpnFLCb3YfuJRjeAK",
  "key5": "AgpNFvn8QrW2Xx3PDbCYTMri8kVWvrVRfMgeGRUVFHkN48jQXfw2SxUc6ei8raKuPJ6cT1N1Nk787jbg5x2aZ2o",
  "key6": "xsBhixNMGzCumiLvJNuocDvc1f8Gj3RUWvHMKVivF5vyNzTQzXpKsKoPNiyy3nmuS1HxdvPD7iwjnLJwCBmJLr2",
  "key7": "5roTSZT6Y2JGidQZMSHCQuQVV4D79JbchYuT7E2o8AQcsaSPzfcwUzHm2mGRFeDLbs2UZnye5QZggjqRnxaTznSr",
  "key8": "389yy5QuByejdxAsJTZCCb1PPHZ8TcmP8KLTzGThjKASzz3XVXP9A1pfBBRWtJwMC3gPLkuLFeYMoX6iYoKrq41A",
  "key9": "49CpEYCZPwxYubV3wF5KsvXFWMavyKmciA6vQTwL1fgd52fK7Pq3PicTu3bCZxERPyS1cuNXYtuQgb5Xst5sHscJ",
  "key10": "5WjFLtpGFegjPjYpeZRE4L62SxZ7quuidRUVDb4UJQttRDe6gR4axEkRHXHcHBEvoN32bWJGDPc15ezMJ1WmhmZQ",
  "key11": "48WhJYpWT5HpwaeD6ysxoh8xijJ2WcRRqBxH9nJZeBQAbF9DW1Psxp3J3dpiKiDAuD6NwRkS8QX7qBChfE9CgUAW",
  "key12": "4Go3kw5g3UXy5ByAmhttmdCkSe8bSZCa93Qx2EyNS75bXKiT8hpiumx4o5qx9DCyRRHKXThspf2W9L8ry9FS7UvF",
  "key13": "2FPCC8V62kzwfkEjCh452jBJuYNFKSyMGGrgNRHZnKGT8UKtNjxaMFVuoNMZE5UwarQDAvMk8iwYxZmJA8xWTJsG",
  "key14": "66tgA8GEgGsAmfKPULEPwa2JFCp3VVDFMLDcweBgBJR9w1cJJd5D79tUz9fjEEQKwJdX9xycaEudewC54muEYrqp",
  "key15": "4586RxkFhfRkg38uvzLHWqf4L56SkDaD94Xii441NMpEy1ZipvLW6k87XVH8eastWjFeWeBe43VdiKzbFVNH31gh",
  "key16": "66NmrzatvTFDFXzXiHPfXdXB4SNZSjPXmbhv3N3aSbbJJ8jezFLAo68vCzpCNmEgMJoBjzWtwXPTN4PWJjLNamJV",
  "key17": "3xjNchaavx122oj5pMibT2Yk7PrLTVGkPtV7jqhCy2wZtGbN9DoDfqiiouvpiTuypwwDwLfMZVibJ6KAZ5mfo4qm",
  "key18": "2yv1GEg6HkiatpqGEuwVun7hAfut8qMs3hcJ97uNMAuDKFWKGQxrCtyjVmn58ThWjXLyaHMy8Uzs3s3hea22vPT1",
  "key19": "5DaT1tS7wCFbyjQkmx1e22xwVR5PuVixMj1e79XSzY8nbfnpt6NXXocrxL9mWTJXWT2oR1dLcTjAk3ieUVcFqM5w",
  "key20": "4gRVMr75bvAfB5FKgttYKqGvkYUhREx9HXPuy6eX66pVp9XGS19khhDb9iZUE7swtjunoNewuPHDLng9pW5r7HUV",
  "key21": "3hvVHAqJtkRiuFmQEJqfgT5jiZkcv4i51QNuWfUehFDtHJT7WCGZY9oFqjUDzLJHjMYRpqsWCQJtAEfWCR7NUdy1",
  "key22": "4G6xH61yLF3uRzLy8nFTqpSdGbjnSTfDS2ezuu4cBqmUuwuBJyqDogTX1sVyzz4tBxTTKRT8ZkqSECDUCr6vEVNP",
  "key23": "5LgEDimi1uUAdQTg8nRpH694w2KL8pkN3qzNE1T6ke6P3D4kZm7KXgQp2KaDTpisqAewKwzQgTHhcUz4GFj2jwer",
  "key24": "HrtHHAcL5nJ8bGFD1hPbCdzeDcCxfhBp2624awvsvaTG2vTkvEKogUNUHWNL27iyYBZtkNd8jCx8Mr79AhNTuvT",
  "key25": "4sLaN8AVQuAU1JUbz7bVStDxqYAs3JibypfmQDqGaxGbtWqVojhgiNfnRp6YY7DkB1GKJYP4drb7gdoW8QXGtzYS",
  "key26": "4fpir5Hz5GieELwYTiZPRvHrkS19mbzPxHg24HxshFuwZDU6wn1nJoMhotNJi5V8ZPFRGRoBP4xzvogJ45v8AmUQ",
  "key27": "5NSdR3mF9CLKUShGC7kfv7qXsGNaCT8AQ4m9KQLnkYxisongqKyrK1jUV7Uf6Bxr75jE2JQ95Gsa1imW9bAiyYcS",
  "key28": "k61XasDSinZ5L3W7qBLWwU5baz5hVisRHYS8UwpCmayR8UpsLoLZJXzkz4D1hdNpPmU8axyzSK69oSQqb6PeibM",
  "key29": "mLk2mMK1uNd1MiusfnMVYZ4h6nHcGWBBDv4WVXw7GGdPME6YYAH2foWahiGPWAv5GSKTtETXjhtNfp87f4JEq2e",
  "key30": "5ijEy7eUdJGnXcXqpqV8SksA3SiJUmnrfUuaNQXhDY9umHgD1J9iw6NMVvwsfLgnCr9svu1GfWajCmjQhKxGwzDW",
  "key31": "2eGSgPGTh3qF2WsqNpHGZJNmd1SDdimfP6PwQP4wqBCky485VvzrVLYN28EcUKQdNdFHj5LHYigQyC4TMvvfXvjd",
  "key32": "59PoySQoyFCjLC3MyuYW8ifZEwhRU33DggQk8SD89Hxgq5dv6KKZTHhNX1NFVaVYVrjSt8up3crX7S7TxvwuSCUh",
  "key33": "5f1c2sfyuzQ9tPB6xHy9keRo8f4RWFcopLJDfgvR9DHsYAB183DbvywPXfF31Pb6M8CfTkrZJXYy8vM3LV6otHh1",
  "key34": "2cuJs8YoWHDYpCxugdcq1DR5Y3HSkCELpQbuu1HgFwYW7BsvLgUq3kDA9NSWKi36yfVGAp1crA7NzHpVngemnxwk",
  "key35": "AaRLaAK7N5kwck59qTTVcbiURDbFpHTwa9q11X3k9hqf8pJPYovLDgCqez9erRDNsh1YaasJM6ESYwQYcb7CwA9",
  "key36": "2668EqgX2TiaiLSBNoy8mord19nDUtd76gqqmiezR46CMP2vobpFdQF98nAb9r6qaLsdNiRi2UcBusRAH9pfy9Vi",
  "key37": "2w1CntTgZdeTdvXzYNvpWWRzynbHxDovskB1DF4yNZPiw14P2GWMi13qdbFFBnNTeawxE8Fbqhic1PaPppkJLJDc",
  "key38": "AQps3visjQE16MtnDYn5tV9DnK7VutQ9f9eDpbf7yF1kpQLDuinKLFeYfeotvgh6GSYGMFEn2Lkjvu16KbcmD9Y",
  "key39": "4VTFRYVqbPpFuFQ1x8evNHrLBKGwiT4m3YSdWsncgDQVJz8hwy6NFdQ8iCeTriAEsj2W2tcFUQno5mGkNTJGWofS",
  "key40": "8ia6VHFibQjsi7vK8fwBwFUrdHD8eFrNLWLEHy2oMeJbA5tUwCSESg7HwdwnySuo2GKu6R8taQNSpChjxPfXehz",
  "key41": "bcNpH9nt7b4jwoUV2LVYNDQTE2ssKujxRewGLs4ZwgoWjN9jyeVzM3MZBrCLHdMQyU6KR5rFsxTJ6P3vih9raDN",
  "key42": "2k3khz7MbfKWL5AKZ4z39PXcGKnm4aV4qWxQbwEQztTqmtUJkMbSZq8ueufH7kZutyVXteer8hrYygaztTTHptd",
  "key43": "34LytbiDTSAwJ4Wo32Kd1hqgzukMEsQ7g7QBeApzKUahhdmAcNEYnaKhTVDLCnFgmw9yYMjLNTdya9UJofZMKpHv",
  "key44": "2ATS6ex342tBHSBKdks3PEBbbEWm3pS2GtLNu97jKCqcX15SqGkk1q14FWi3nRPNDRURimHdELU94E8A9U5UVqpf",
  "key45": "5aHhUZSB72yun4aLSAAP3u9HYEeYoPNgmSWviaJ1ZTHYBKpwcS8R7LAxoPuyTa7r7T4WLnw2G8ZAJhiavyE1RSs2",
  "key46": "4fzjeq2yY4HhqAw3p2uEV8ZJPKeJmn3EDdYwnjMpMmY3BX5ALpdnEGAc67Q6Vd5uLQPj89DG7kUeHftGpNKmg6wi",
  "key47": "2GyqSwKqFCEuk1v3rNikSL2wnRMRMaoXdcvXBSnywnEN7raAYk9pgqgEndun7XFNLLaHfxAbSNWmqyTRmx4KQQSy",
  "key48": "67MpqMpScsdKCGaUGYaiAnBum9KN7Df8QHhQNihJYTU9pSVEbHjcUEYAQqgFeBwvvWgXFoateDEcZeUGxEZ4g9Yc"
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
