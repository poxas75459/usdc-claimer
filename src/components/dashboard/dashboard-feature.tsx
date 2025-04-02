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
    "5qqtGHMiNbZ6HkH2xeWpG1G6wawxqXiCwq1W2hRTPxxEXrGcQWhN7NmMxWtVgrEwpxwKzFKFR8S2WhNq5YNRPRWk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uxhTpSFtAW7wuHuzEw1CraMHGWs7outHT3KcZo7wSVVuaGTiwQVBg7i7HA9y2qS9efNeWk4S8Z7Swhz4gmNBeFb",
  "key1": "5C3T3tbPXu2NwRQHqVHBcHP34ZVghDdDbnFu9obVCFbu3ux7BbbJRpoSTVGqPNghmgASDyNAw4FLmd2beBeex9d5",
  "key2": "5rMjctQF6BNmMxw8ENBLH8iTf8s48orcrL44vea5h25oKkfProvjE3oJZxAX3W3VvrKhAGRvcJmbouMK6jevdh5P",
  "key3": "47qpUCd8zMwEFobsCR5vR27ik2yocFQgr1z83Eysmch8fp19zuevboAKm8RXMXjqJb7AYZ9Sat2HHVnVTYCDeL8b",
  "key4": "4vvy9c1UVWLVDHuGM6tcx9qNksHwdBArVpvMyEFiDdNC9JCijaWEnauLHSn6hHRVNHafidF9EcyuvY72ySPBgxwt",
  "key5": "4CjFjqEVcAaRbsmsM4iMQRV9RZS7eVbNTaYfV3xyh55qkUKX7TGdtDtJr3S5fTg41nXtYNv1STnny8eR92E63MGv",
  "key6": "36LAXu166CHSjQux93R6SxdLdQenfwxfF6wDDYnfU4pP7mvVtz6dKTJpNQzZb5F3Qws88x2KqeCRsswhdHDRUKYc",
  "key7": "RS7gCHZiSAN3TEwaA5LEqFU9kAW2Lb5cEEWdZsZCfAKDHwAEU5Dy4Y3xqGyoYu39SdfxXwMm8vcG2cuVn1xZuSB",
  "key8": "4qpZSxhMKt9xNqmjvapNpf7jyBCgsPufDHsrz59HQWqUbUKVpnpVnkWieSq2W4h4XZiyUPLFffHHTHY4CaX4GNc5",
  "key9": "2zvr2QXLfcDfSmhmKF4bxEFpzajPa5i3rWknzThGCQLTUedrwrqht9WjB2KRbi5tonqRDwUETtpkXYLrU7c273t4",
  "key10": "2FNzVQBdM53fgZcLdyFpKjkBoc6FafXWaWbAKzHF2MzTGxVaFpRYqhYPU45j7iGdyATW7uEBZ94rtg4zz1qycuvS",
  "key11": "y8R9rD8dJJW1vbRoFdF5vZEt1yimPNQji6Km3fUWzb6LQe3fiC63CucVD9xW8QcVCLC7Xx1bPsWGkeqzH4sJZeA",
  "key12": "jWFWy7AS41kpKdUHhmCCPHUzcSNSuKLrKmiFnYerSBcUkVS1xVLRLSmbBRMCYequPbu9NKQL2SvM898GcTWZ4Fz",
  "key13": "37NstZjJkp21apt2pnamGs8Eg2qsLxJfPJ164eZQusqkhrxyNUB5rWCWDZiqR5rvUrpZrtNWmkgAZ7PiTZfHkY8i",
  "key14": "4T93XxLpKGvhsPJ6ZZ4K89sEuoVwVcLTzipEuER2E2KfKFWSzdnKAwZNtrkCJSDwiqLA4USuHyYCutfp5TYEsppN",
  "key15": "2R2rEMKEwcu2oT16pgcfWBC2gkmD2vgqe2F3NEmG7mAu1Das8Jntp6NUDmUBbjEX5Ft64fEfFfvMz4QQHnpFFfuw",
  "key16": "2fsDFEJG8gjq6FLjJxAyzuoguae3unu694tTFH2cANp62ykHsKck39jpsqPpXQ2Jztibdj6yzQsUetLszSqQ8BFD",
  "key17": "5SVQbmGZ2w9Hf2JqbLbdfbfSmUrm4KjnAJLtReJRueHTKcmCeLsvZ3B2LqZtSEFsUJmVUKtzVbpWNNc2YPer6b1C",
  "key18": "45FsqLRJmpUFcs3qkNFS1PBUjc1k5w6HYGL58MbMVYDdoBMghm3NKvWJeFEzk6YSSxG8nazKmP9sVPaTPEjH6UfT",
  "key19": "zqh9n2dQxDYJ6pV7MrSw4dch5P1inUQtY79xBGAHVGjp6QQk3jD2UaaU5a7mer2EQ52VNTHv6fBU4vr7ynLenhF",
  "key20": "bTgccFP3NvEUbaTCTnWfceaaipaBxSNZug6sWhenCrhnqCPfnxgXTuhouxAjqKeiSx7fAK2X99WAYWHfu7s4tBE",
  "key21": "GYJuBu1mZyZni98uCe4fKJTfTBB57tUJC13o9Nc1hfgJKNS1jqmx4GByNR7XJqrE4Y721pjS2eADmLVxauSfgVX",
  "key22": "2K1WJot9RQ57esiUjT6WFgGshKSm2YTbbAawz5PLwD2NMVt1MwzX5ARnZ5U8mum61vykUDj5qozq249aYTVXoKg7",
  "key23": "3dgg99ucmmUGC4YCmpwVFcj1Hq1c1ckDBuXjcRtnD8chJz6vcu2THKuME9JZoUhWDXHAPmQvGveTd2apviZGNb5k",
  "key24": "5jnY5PV1NwppepaJ6w6qayWy3Bco6vUk8yXc2Kd43yBzsHbtnUWzGD2Kf7f4bAysgvJfRjr4LEJW9F9JNr14p4ZH",
  "key25": "46Ze4hrFf5cNUVreiqGYAsKiD5PUzA4L5oxqZaRoV8VJ4EvLM3TMzQ4mSVNBm76db6dyrFsUzUEQsi9FHpac5bdZ",
  "key26": "AgzPXQD4wUryxwNqu5YJgXqQEaMT7AACbPBLUL89CrDZLdTUAywohuwMNaXPxrakcGb25HQjJahNoeYAupxdxYr",
  "key27": "56AmqTWmfmXxvWrTyq6xX9RGKGfSXbZ8NcjymKQoesjJVToKQBBdEekQ2zveM1ebGJh32ZUc81SGSiMrNahvYfXi",
  "key28": "5m2wvREYMTsstQ9snMAGGiYcxTPErXfeEtFGiwpZZP5BYGKLv3UjNpcco9nPWLZMvUA4Qvs2yz68DefGTXd1kYUY",
  "key29": "2qSkV7sSRfSezLn6S5Cb4QcSFMAn3S7SyeqUqy6JKSqJ5XPKRnz4uH39u65tqirsbx3NdYUkobbRaE3agkTird1U",
  "key30": "Tm38yYgfYkjLRSSzMW6Syvrb1CuBRGCy2HrVAB4863C1Epo5QtebAoxxYndXGkEx7Jj4W5WnRFU1V5yexyRXu8U",
  "key31": "oLzHhVJ73FLVWnEPSJpScA9nnErLLRZy7qjeUfgAKvtHaWCXJxr2LDvzSR1pmoNTFPUto7vdq597kaAGKVqap55",
  "key32": "o6a3cuPZEnan9vRaHHuNeaVXoAewfj5yx7MANvwuHLAoesFq8GGNyj2vNCiqvzCYBAn7RQ7vqgjF6MgbKnmhoqi",
  "key33": "2oMZxrz4VwUcyp9kWpDsfhcDZdXA62rE3qviY8jQe9stKewKjH5VWpP87rKaVM7yy9Qvokg4Dbbokpm8U9BM3kjn",
  "key34": "63rDpYo2SLgVB2npTCxsNjULHNVrR55dyHeiB79iMrvK3apCThyYZT1vgitvf96SmsEsH1iJ1EsZZsq5dXtbDMf7",
  "key35": "3S5WPbkmy8wdCniHo9Xx18F23tErLrPK56pv1J9bbnQLSPgHGohchRrkhxf5ko5p89XBfGZziwk2vvz7EjwH2oY2",
  "key36": "4ksR8eV4dN4tNRUNHVuxT8VN5dv7SnFx77giTQhAwWfi3WWNkF11fCXBVzgTuBtxJZ9jrwo7pn9LJjCti95rdAaj",
  "key37": "37rCBwWZK5oWXmcJLTxC5LH6X3BwGXU2yCsHDZbbEJhVsFWVk5oRF9BL9qEnKsYspKcFwEsPgzakfr2FjuFwtdmF",
  "key38": "384SyREPqKTMbiUumWxeTkVHEgzUku4xc5uHhMoX3LfBbTem5d8qhJhzBnwqYEVzgK6TYTo92sWxnV2EtGJxPUrx",
  "key39": "5FMqkjgXB44qSFWy2ZDScY1SkWVsgnawLSvFTFXcbWx8X6cMVEKYzEUmAjxYok9Govo49AsZosQ3gaF1nyxYZFw6",
  "key40": "63hVdnkJvHUy689JN5qkWiHYENZ1KdnKyCaCcv4hF61EYTiDKw7dpDmNSPqJyf68yUqn9iF1YxqUGYtWpuyzXhv4",
  "key41": "4HxEuMVNvhbk541Aywkmzvbvg6ssdRLpwCY1ceXaMbQWKV4pkF2gc7B5DLA1zVhgpbQKohW75dsp1fGtrJx4oNa4",
  "key42": "4XSVHCPizzuTscs7vb4zmiWf32E5GAwSpj742GLMJyi5pSvXkF1N3NkaFqL7AhXgKrK8VveLPjVeWMatWegxmEfj"
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
