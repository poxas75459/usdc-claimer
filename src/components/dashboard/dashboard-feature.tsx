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
    "5iDUPEKkNeUiKui8PaLooxXkwxNh2otcsMRvcUbSLBFUX7oWUTMPa4u1HPmFKih9qFNN7Lm6zyvdyaVj9epGeJ8Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZcrQgYajyVhcrhZEV6tQiTUcqXXf77Wu3cQQmXcMLQy7ghSCXKJZYwqwmkHuKjNKkyiMvFhqX7mb83M8LnFeB8V",
  "key1": "39Utp1p9W1MNZfhEmA8ifcbrK5Dav3nL4i96pQRvvUTUvLRoUWCiTvJtadnGKw9fpPp8jnozWFXc52uGqVjTb9QM",
  "key2": "3C5W7ZF4Bygp1h555TWHAGjZK5HVBt428JVNksDRa1qzt1vUDRJXTEXNQxVs4kmdmCxoycRi4goJVureAgLHVrU3",
  "key3": "3WKYEg3ae2vurXKwj4nsfaiRKPkhD9CESVD1NSegWckNu92aWbHvpnBBRcsw8xzBJZZTFXrhbyPSFpbLNYJdnPcM",
  "key4": "xd5WenEExMVcvPe9rZSWKn4SiohzkRqdnEmEqmQkpgaRsm3yFChZcaLENtg1Zi58zRaKq3GYjkP7skqWT5d2KfZ",
  "key5": "5KabWXDCsvo2psM1YbD7Tz5DGvW4SNt9njuUEajtPjmKqydaovD6BH4t6sSRNXLbi9a5PwQkR5V3Su36StspSaEL",
  "key6": "4vgzK9CajCaNPJQ8RRNMsVMqCGQfZwu8r2atQoM4UEY743qddmrGYT1RgKmft3aVZYTHiVohaCNXZLTkrvdJVr2a",
  "key7": "8yhuvdKnvdZngbuW6PDqosKm8NfnRux5P6KjhafRwQ1oycL3NyeBRDTCLyKuhpqV68Kc2P36jxor4tnNdffB9Lb",
  "key8": "39fDypgFjUNKqD1UKLfTDHMPWtXfF8D8T1xU1qMYVNV2cP19QFV4MqSsUjLqecWrYzJxodupkw7Mc7bTeqDVs87",
  "key9": "4zca1Aw3bQoeMJi3FYVPDnMN3m2RiVXm9cTEB3FQiEf4mFymNriRiHD3hFQy1aDsWqxs4oc8UUZnXGSJGQi4g2Ri",
  "key10": "3AqsnCDaFZnVfi924Kd7Vxukg7YgWhFsT6HtxKPyb5MjsTLdpF657z2zx22D18HmM3qQRh2aUjR5NHWV9JC6VT6a",
  "key11": "2HAcXr36fGZquJHmz7Q9b6guJahEzKiUmPVcSzitFptptmTgHEC1Fwm87G9RySVVBGKLACAKK3qrfSgTLem2UUFm",
  "key12": "2zKnk4iH8qrwKApA2HwH81wWagkrFgdCLKBgbYrXpzRYUVWTyQtinpWMsbBXSiKKo5V9THCNdgnADQmAdahCaGMs",
  "key13": "5s7iWb4QfDF4Q7FFTDdBpXYtoKYtabky2Jk5TUpPRzF2Kks77GCP4Vaj6EZAiTfVxHAU1Z2a2guYubvryntShdve",
  "key14": "5fX4xzgphZdL8ZctF7gkuu35iwwayLymJmj46nJLLtYofGw77mqv7WUQwHgauw8BqKs8eSmdd6Lopypbm5SciDxK",
  "key15": "Fxd8Tq4JPxJB4JvbCwWNWyypkapkAcGWzoDkCyYNiWzRTwYgK25BBRxwbcVb14BE6Bj8ii3TTjRNwoJASH7Pa4x",
  "key16": "3BJJjyGDZX3g5UUadyobFUS6nQAmXheq2Y1aM3yjH2nU2QjmzcnAexcoipJeuD1SMpWEwNScrMvkU5JRckoz1cZg",
  "key17": "64HrxiZpkHv1C8Q75FXKYcMHPkKpm7sF2bVZWomNEy3UGPkUS1kbGzSb3ZXKdnoBbhnQykyro45t73tcMLzt7oBy",
  "key18": "NdZdibtE6rA7s4tnjqnp2ogF9K75X5cK1ufuHXRMW6cKC2Qf4h4E3WtGoQzb4cB8QYVtskkwsyBmCADcA9Wew7q",
  "key19": "2z3XmtBNAJv1rmiySoWVFBNPgTFfhzZSbCcv3RLVo2HozsVmcBLC79EcJaF64hT35Db5ZjmwNXsByDPUCKtCcmCp",
  "key20": "65dkUuukLvE1Hwg9ZjSTemeuzr9ASzt12cLqa8GU3gM8GzUve51x2xcuXwBVoueuNxzU6R6L57vv2tn6FfrJQhSY",
  "key21": "36KyzuzWURZZUxNzVicN8BSzfXDJRPCUcKCxAjDxQo9bteEwGKEKUBBXAJsb7zZAmCXJFzEVQ3sRTWRzU8nPy7rN",
  "key22": "ivbjzQjHRJE7oNPFLZKcG9neTN5HF5mhxzVeswW9G9bL5ob2hBSjf4WPtQa9Ha619EHohuVCVWe9NUDkCMpFFHN",
  "key23": "5LoSCE3XeMC1fyJw75Soj7XCFLH7GMmzhEdadUAo2eahFPpMZNZVDPqpMDUtRmViQxepL1UjwyMhBDuLZtiXLgXH",
  "key24": "62e2xFete1kxS6pnswoRyeshD2XQq34L2RboRDVRXjwtruAuSK3W8D7oQZSytRYExgU4uRZuWsE1U2Bk9Hm3Z1KS",
  "key25": "5j7rEizCpfX81QbezAERKS9sPHTWVzqQEoUCeDS4auaqZxKwuwubtS4ohHSCqAQTWnspzocWhSsPhAA8arVc76Fj",
  "key26": "hFToSufKkS7Mypyw3Doy2U65b7hccypEm6YLGpdjge1bsQZWg2LV6tRxapK3fs2f5HzHPJAoFKAG13uwuDpxNdK",
  "key27": "4HWBBfQbHXVUPzh6U9eQusBNW5rdE9bxZbWUXHacwDRzUCYf8FovV5r5Jyuy2E6hmvwcDDR4854QUHtRx1EFY4Zo",
  "key28": "4oNda3BX1yozTJjhZXJELoDMVvyFvatZK7nGoTgpfdtFC6oRGWtiBoVDostCny5LcEqRWk5yps9wfyigHufwZTh4",
  "key29": "45KN3pfTXswVE9eR2529pMWeLibhb1mekK6KiipC7j9owZCTpD9ubmp423zn9UQWdn8m7uRD1Lkm2ndbJdmmyt5N",
  "key30": "3ggHxitMsu9oTq4m9RFTGkDWmojQHjkhSdoAkdSsU4qYPAPCApx1HgnQQoE2z7QgnSydUTVXy7exbMhSdAo87j2N",
  "key31": "3Mw59P9wzG4zpeBchQ4PKymehDySxZMRqEngJZhYneMWG9auLvMB1wq7ih33zpQPxeyhCFVr2F2hBjGeja9mtmpP",
  "key32": "2yL1x6RxBwMUZPHA6xtDMkAQZcDxrkHP3hK8gEmaR47W6nyQYKDedwVABjxbHHzQZxEWuwNkUkTH2ARE1KnRi3wU",
  "key33": "2LPHmaT5xp3kEmHrMSWHm1WoWHGKB5Sjnqm3gaJNPkQMzubb1gRbo3DmEAXyyPq11aYYQd3bEP9LPZYAutWZ4tmb",
  "key34": "b839hjFAmTV4rK3xJc5S95p16YvUvF2iyE2snBc5gNZB9Fr9fYktWRDCzZahsfzeFz81RD1bcYWivE4oPoV7ANV",
  "key35": "3cWDqjkgzEPE7zVeKQnB8Udpub8xHRrkvLmykk6inCSQexpRYSFtfNa15XdpEcQPHrMVebiziPBJGgUgBeJtkb5v",
  "key36": "49ayrS2VfeXMJNPwNjULCr1AKb2hWuKxGqTjtPomVPBwpkLDJnAgAm3w4mTZnntSjEksmss4RY4EJ3HHSPzsjwpL",
  "key37": "5XGUwnshC52xSP2oHwsw9KtDHMqsMpeGWdHwQSBommUE3acWe85UMDrFnya6xhyDGUPKc548VQ1yiUaovSHp2HLc",
  "key38": "fZwRoh4TkdoDhEzyNNAy1NBBAsuL29WgUEGD3ZYczubkQbSdGQe2fXrGRimkZsz4zHrRJfpRwjj2tc1VyKsUMxx",
  "key39": "4yXZZtDEknx2W9sctSLy7jS9XagZA3zyZbjDnocPeCCoN5ENQwXbdtAUJPosigHXtbzbfkd3dpcY61NLMjhYtiLt"
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
