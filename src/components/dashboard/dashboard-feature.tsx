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
    "2WUmTBfzeE9c4qbVcVo2uukiNkR1J8U8SzmXVj9qgT9PRT8ghBe2zrJtigUqo9xwNgPfVTwZU6BLBAUnYrmb4PE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M8k668y1Aj4LdvUBas1Jh9B6C9Kp9zwnsBziJ7DpjnZqvcsXFZBXe7UW7BNeTShFEMoVyRnYtxnz6CLE1HiVfcC",
  "key1": "5iBHsb2hVPjQqeTUCFBtTf4ewfjByZ1bhkmzmdFMNvNzHRmvNN7QgtmN9j2YrJzpQuc11FRGSmCWQZkxLFxr7Uqr",
  "key2": "JZ4mk4ERHWMfMmirKxpSLCu5rDAyhYL1vJK9dzxEZ99tSPyXbA63icPB6zTWqE4rHRiMHPpG3gtQdLvaPLFhbu1",
  "key3": "2rbch2P7mPceoAobnJkyzAkgXcRknyLtKgr1H3amNcXzXcbSBpyVsJHo3mmNwW1LQkZuraRdU5E1WqRWfn9UY374",
  "key4": "4dVuJTcu8xx18GNHVnMpnpmhhAJpyS3dPSkVhfi37F4CSdAzbQmhP1B1kdHBQHZtrsLyyqbpZFenusNuHgua22oe",
  "key5": "2NT3wKfUMhpMxmsqGnTk7HDVfQyTVVKAgBhov1Lbsej4JWFmNymDJ7qJjmzU7fZP2uG1BQbukX2wQLUf64cnFvaH",
  "key6": "2npt4JUAXiz38povm3dR766aFohUpujA9LAWGRANfZWePo1xDunvYZTeYTvc97GtoUa5Bomy2XPhM7krxgK5oGey",
  "key7": "3NjWm9AwuY7H5KbBqwyMB3FQeSNXTeSWh62D1pudLi6sR7DJGBB2DUUWa1fXFrr1MbekGsnUU2MzVf4q5aC9c6bY",
  "key8": "4F26PdkDDFid1rXRyf6VakWEPBnmhMymvYVkff3wG56MNPiydVJiisD75upycfKDM2jmCD36G8WoGspvLHHbnzax",
  "key9": "2koaW29wXHYRrSpRa4k35tNCeoeWdRJie1CCVE3sNSWy2gmJErnMo9xNtDZFGWjsfe7t8WiPqQqFpELqkScGboE4",
  "key10": "5WGgcEn9T7QzgvnRTui2pyKbPDFqhsdw7yGtWVdon8FR4zUhekWpw9zQhJcR8Vity9LQrRsc2NS93LcDp4Zi6woG",
  "key11": "5eywtVzWwkfyoNaHShxDtYwk1qs9BysVAdYWFLjg9USCr2tzqctfAMaFtWm3NoRwdMWxz1Z5ESJta4oQ3W37xKEk",
  "key12": "3XKQSjUDK96DDgHQbhNE3fK4YcTMXM7fEY3UE2oAi72GKSA8AdvuQTo7FJG3BrfH9Yc4vKh2Xrd5UBSKQaKKaiuh",
  "key13": "5nhpHKwv1cMSBf1LeNbpSmMTMhmz6EnXJqVp4xCYUuZGdecsmEc783Px9yB9pvVVkCfgTDuhVXQDJZuFT6uWjdhn",
  "key14": "3EG3nJ9jZ38iBFXzV42KiMXTBbR2rAEXpkgw3eQ1d5HKfNB5iLopbGk9bCSgrixRvcVe7pEAgGS3q6YiAT2ZDMzQ",
  "key15": "4dGj9Uaj9P9c9ehnuscso452LZPBhgZzJ6py4NKhdnLM78jA33gKvQknbLa9UxZvcZrap3LAcRVp7Xsd172oWrpk",
  "key16": "wNU9qSKvtjBCDvgKf6NPQ4uAqHncxWHoSUHGmLW1uPKSbGFHntqrts6mB5QQG524BUy9ohtDRpFLq773p6UcXW9",
  "key17": "3rHfQ8dAuW8uUwrVjLkcdaWsSjCVKgZ1j8jFNtPcxBgrSUKdURhbfzExpEHf3SThURJzL5zEPvCQoyypP5u7LK9e",
  "key18": "2o34TnyeNir1ztztZLhiocco1tSFoVWNiZKNxoMAZZqGUJHBaLTH8Vw6hhowcHRnDMt3qXvSuEeWZMMV8VN1YbAK",
  "key19": "hFXz7uMJSjCZLHZNZRmGUJ5FiubzQApDW8tnsEb4TtXR6ixrHkxUUuz5J3aSvrBrEwcyFL7fBzsTDDPp5XWBrSU",
  "key20": "4bNr4zjaMAmWxkWuP8PKXZC5R28jfbTGaEqohQZEjEQhj1BU4h4r9EjqXmJm15eUiL3uiz3AMJDigBAfGqR5go4n",
  "key21": "8f3BuaY6UvZnJDRxWK9wfgaX19MWN8NEGgCoA7JyoMawanksHdwJdv8iZTxRpNeUY1vVPYHSQAsspoKNGAyFa7F",
  "key22": "46wsVYNJVt9NRbT6xBdFcWQj3M6EUq5nGGvQgiFBDiavaRKzQ4JcWshvGaiEhvdEzaPZ5PaX76rHFGngoEQPhgmD",
  "key23": "51QUha6sRHdMM3vKC2WzrCvBgjb7dKwr21jdBkv4RtyN655hHQLNnWs3zBjmR3FsxEHZTBF4q1qf5UTuFYTmfJao",
  "key24": "h5nVNHfAfTnvT9co62zpDdxgvy93A2raRizufHNpWKCL9YtAsqhLpSAbNmEXvwRoFYyc89rztkSiJC1MNMiP9Na",
  "key25": "4mLytpaPnf226YyFCzwXbNHZen5FB1KwYKE2PLisHzBG5hNJrWPUYmSMaykdvcgpnZQ8WNuZhrmaeFVAaiFnnJxG",
  "key26": "VRVBYpFHYDaBFkbozkq8MS6sV469686ui7W5xmQup7XMcvK9ci2t7PeTJhtxrURriZiiVmaEugkKfgZX8Jhro5P",
  "key27": "TaWnK3Wz4ZYR7fAAD4wYgePo45tk9SGiyYrmMRgFJT9txASdSGevBtDXL8qkm4u8tXU6nczqoJJzGFjE1Ep1ZUr",
  "key28": "Wq1s9m2meyxKoqv7D9qJyPVR2eP7JJArM45Y3fPFzGtUHh67qt2qzR6wq8BiRuSn4gqPZykRZXns8mA9mzhvVxq",
  "key29": "3ZvN7P8CPyZUaNBwiFgfQxUFVZp6rexDZbTa6F6e2xYKJADB4d1pFD9YLCYxKPTYNZ2j9FXpaYdThbqRuiZ7d2CV",
  "key30": "4GvRNsndYy9VZ1VcWyScw3R4aSX1Z5ZbNECMNZe7RsoT7K6DhP5m4oeFeth2n4p8FZjntqq1VPdmEatZsYZwZEX6",
  "key31": "DZiQwiao413JJnG3QF6zkpDn9yRSrfXuSRgSoh6ei5tZ8cxDpodYqPPyCDDmou3D1eoJs7LS7tyibCdpY7BFkVk",
  "key32": "2ZgugyRRsHwk2SFEcgCjuQcA47oSwqUw97QSs4QEbnvgHouLqp6bxPSXeGUrkHKxFAB8di9jJW1yTQgJ68xNBj7n",
  "key33": "1pvPSAh8PZhuvVkvhwMKK2KquvHHRXKeoygim4Do2HFaxk4TFJBB2gQyhz63sEYSDmnM75cK6J8pfVCLiYtKPzt",
  "key34": "31bWjkHLhMXk9cVL6fTupYp5tEn6WwHqcsMSLZwuX4VhBMxfomwy1TXFSU8cf5us3S7erP2tjHfeidCU4i4i2889",
  "key35": "49Necn5oZVAjKKLU8NG8HVsHo6ZX2cNe8kPYQUo9Pn14sPsJtKVeNUZXXdrKGWixMctFAYQvEWHFLCm2y5G6wFgN",
  "key36": "ooDKzASqR72MECeQ8U5u15YB6mKtUT2RfhUFJEFhWyoo3QgaKVK3ZzW3zacUkAr3KydEBu4KfnCuygu8BxpZ4Rt",
  "key37": "3koYir1pMrxALvnb5CrysD8dCdFNonF9SHtfeXQDkhdtE82nSFDRrbtiVjazmhDg7pZTszHtTYHez1ir6vgeGNnB",
  "key38": "3y5n1UJA3wMq98mNCvzeAzqANmK24EcppwoqoUBcnmCaZSwMYeBfJyJWBPZvxGqVnZJD62S77VVRZYeLP2mozXkP",
  "key39": "22PXp3NxF4BKoFJ5KKRvfwAafGSbPv3JxATkEoq4ezG8dGp887WMNi3rZp1tpkEfdbzNMbriRKnoEjRMFEU2eXae",
  "key40": "WbiomKgrnUEw2ynPtwQZyMMpFmdUpZYSsc7mENRxkBDbCekpJNPhmjNhsAUNE1W43ed5rXSEotmprWpYEhY4QP2",
  "key41": "2F4DPM3BTv86xV9h2x4iRQUGGKDRGJ6MsUGwW1HQnvnve2rJdsPZkVosERMC8EqfdbioQTVXjozhwrqY34e7eZ4C",
  "key42": "3ySVuRHNzZmCAPChKGefnbJCaje4rzuyZ3yTDVdAR647qLbdaGhr4zJcuiPMgh4AMRZ38FRwvt8TM4fJLzy5NV76",
  "key43": "67nRJLsEzZFEQZq2isiQvDWLp7zeSXn6Sgu1YaJNSmEqGMk8PAdaKXbRViTvCm2qZkcZjRbDd773HUF7XcVGAdKz",
  "key44": "4dXuBFmHJgDyM1p2PKouWP2jicoCoT9a4Wrvjz7driaZ4Ybg5Zop2PAyUi1dmWorezu6D85JEYaFVj77ibK2oQgc",
  "key45": "4T2erMFkJPV3ZDvvhAESwgzmTipBTtRbwpXLMHo6fef2h1GNZYLHGcxuvdsoUWJoKdF55ixDsR8Y9EiUvbWYdRXz",
  "key46": "44eEJhFp7HuAWkmS1h8AMk73nWCC5EmakAMaqKka3BCAQrvbbqTJpocVuewyhHBnUSehkhBu98AEnDV9J21QuKk3",
  "key47": "5FoNsNGTdG44g46qd8RH5rEDQNsmwbUoti7DFmGWsuzJj6SjSk2qLVA3ahVaLajGJeP3BeHJE7Kh3whDUwBSj38i"
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
