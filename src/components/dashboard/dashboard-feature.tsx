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
    "64N4cnkFpPg2LQte2y436QkejnTkKaEQQiRe5fsnfeJHPhCzET2ArPKDkErt3B5pNWQPjgbM8SWGXun57mHUpGUX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xoePRyfa8ha3KCxiteyaHtouzKF63m1tcfsBWSTtimg1Zv3taZSrMk6dqgcUHqBYi2eQcfskXkrZiibwFurxDMq",
  "key1": "PPLUbx5He1mewrupAsttQid5P2Zg3BAtQaSouxZDjkFYCqjpCRNjfdt7jjjUpCwzPyNjTHbiNBG2aNGRga7t3b1",
  "key2": "XB8RbrjJWVB2uAfwxw66EzRMTNVz6an93TnoeQq5PD9kT9ahtfqScFvriQ7XVne3K2r1c45kdnahhxuYF6zfqqX",
  "key3": "ZnmakS2RXJ1HCanFU4dh8cjEaMHt4Vf8B4rNv5iegBmZe4qm6Dj7LwqEZKEKedZ8NM7BnbCYtTrpMdMJSd5LCdp",
  "key4": "8Kmu7oaiVFuYiXBTowCBeGRCrhTFJPwr1AxTL9gvCZtjT9ZeanhziHckBoiXFFrZTXL6BrkZJqqpYTvVQRWMMwB",
  "key5": "ZBcZRFsioLwWc9odNtkFoXyGaCcTy1xxXGzF2837dYi5DpQByjDm958YfCUzb2MiiC22uk5vPB58etMR45kuwXh",
  "key6": "3vUCBQqtsx3VEgrGYgygVi331xNP1L8fNGag3KD2TiWoCNjpNTVFZm3zHTKQDEtJg1GXJkBowCZGAPmvoFxdmGEW",
  "key7": "64pbsQVqhRXwGAhaq4DjBbhW6TdepLgXpLvzfs2JUEWNotNFhumdei41zD5Q9Gv7e26VrctargYYSaTeAaps2CRh",
  "key8": "3wReNK3jrZ4RZs5usiTxJ9UCEYkWH57vQKPDaFbLVBWef9wkbGypVKNvhFTLtpM2DoYVpfZs8QLmqs6MBX6x7Y1E",
  "key9": "5oWcsEjNLBhnmzWL7qspQQ7ebJ8XXzh8urKvNBGmRTTv4e7gUNca3AioyZhYY1csH554GvsSaYfVvvDiaFfw3ReF",
  "key10": "3tLfNQSomrURxRyPqfFNeY19ySft6MrU1BBfHLmWhNJve6jSjyBG3qycRyo93TJJY2ceWs333UrefLqHmUtALJ9d",
  "key11": "51foQipSxkgiXSP3SoH5iMYYz3dGjWVMbJX7u9avWRLdrwZH1e7YRNX4B4Y54eYUBhxqA5M16vKVLzrorwSAJ64H",
  "key12": "4piRSuciyy9fAB4J49cBMptS45eC16aNrCkQeTsfprRQjhR3go6Cxid5f4yhZiF3Xu5zZahf4SePAFKuQwcV4C7B",
  "key13": "3K2jovvrHvL3hgreY6yEVL2NqbeHXvtKZnkM3n6bKnoLCMrhSAqxgok9t5rAurF4CTYKbsCDs3n73ktozXdz6PvR",
  "key14": "3fAHqbuFvfQAXFs6U221FQyom919xq32hf7U8xj2yC5vTAQ8WdbgPh2VL4cFmVGAEiEgCEG4u6wxKrFaav6zrFRL",
  "key15": "3rXjFt2FUzK9m1j582y7QUQTnRN2DP3DEdYD2UKJKWZqnLi89cpqfayWNjeqPjddZjA2L19UbzMBWdimNF1FWPzq",
  "key16": "2XQSnZjWEbLLhCvUZ8FiC3ytnEhiM5F68JwQW53uFReGR49UMJPJZW7ix3tCLHQApapRZBCuMVPf6hDEs9phiWNz",
  "key17": "63gcCq4cGsdrAeCP5WK6kssh41QCFLMXpFtTfivziwBFb5cXSRxMGhLLpn4VzECKHCWBH72af38Ns4xUypA5kebg",
  "key18": "ZSthYkJh72VxB9YPAnAVRojVkzL11grQ2A65S6FFcLPpHgBT7ZuwntXYkt7z5b47KRtveSMXAbVBTupTHgsDHjR",
  "key19": "2k51uSMcXoVKCZsdo22eaGxWtWgi6RHRmVGUSotrXaVTLqDUPDHAdGfCdBYAy84HxqxwS5peVx25GRjw3S1fFVa8",
  "key20": "uNAN7914tfkjk2HbDHiwKtytTeo3usQD9i6ai79BJkb6Lbtmk3nDQcRptXVnEpSzyXWaiAqKsATucAuzs3puuom",
  "key21": "3LnbcrevzLRwkyRUzwrkKqeXSBzCyfvbYse4Qu61j6C4jwFsPaGAJWuM4XV1c6Z7yq7u25NXKJ8bNuT6kEEv2TR8",
  "key22": "5bgrDBmjRuZiVUyfsDvrMDBSQDpXCGUsQYnkjUdXFawHZkwrnUzB439frhiUNVzr9aURdBh7pWZNP3DwDuDEip8s",
  "key23": "pzEApx9iqkAM5LZxscrLU5txCUpD8P3zioEpBqkNDRzEaYVM7jdUxckofpF92TUodBGpyGqL9i8pcitdtLqRYK9",
  "key24": "4KLVCTehjfy9vWAB6wDAk8P4PzjYjMABQ6r7TCErbUskJGMU1asftqvQZ8RASGJzPWRajBDihLdF4g6xCatx7KHh",
  "key25": "32nifyLvixYEK1K2j3oqW87V3ZskQhfUU677ehyP8MgejPdG43EFPAwxXxC915CvwYtWKxSsGDBmWf9GM2w2ZRqB",
  "key26": "HVEusTzfZ1EaRFvku6zYmXT3Te2Aq8WSaz2eobCMi2kaLp3jqf2zhAdSthAQWsoJ6So2LeLipiXZaydSDCba433",
  "key27": "2ckAX5c8b6kxJ9Q6gRutzmDjPQuF6ed8vPYrb2rp3jmYpSkLg6WWvTRLT56X3vYLuoDEjT8GmrGMPX7Wyj2N5ZvR",
  "key28": "3JfdtKmi8hvTkLCmJzDuQLehGSnP17se6hQn9KomeSUkJB21MFLJj5qTqtA3ABDbeuhmxt1aLpgfNvquZGdauhJZ",
  "key29": "4y8Xk46aiZfp7ktFctWdP9x3ZJ4RMYnbKgPcGDmWX9ef4sjuezyMr1JZTgzuexdyd7UiWZ2EMkEmkk9GS9rKTCnk",
  "key30": "ygeEhK94CkYrG154HAKv65uNq5a4AQMoFwP5o2tEoBW6zp6C1APe5wGkBs1aP8mTV2hBShb844J5pDSVESUBPbp",
  "key31": "2S9KHG8GgX4ejDG68YZWzTskUfNbVSUsUU8duoZNX9uJXC9aNnTUbmmkcrGii23gwSwqs2bBKDL3UBAzuXhp2kjb",
  "key32": "3TCgwtJSHSRP4Mn8tkQwNPaYKip6aAcJe47ttNG4nHMFFW9erpasPboUCktcr8nfbbgGu7P2oRnv87z6KHj1jDLB",
  "key33": "39s3f8dkCqXAdmapMJ6kKPBaufDUwcgxah5HcnmJEKtrqtCkAXLyuG3JuHkYFNm3yvzCPiHDyLCCX2cxkdZQDKuN",
  "key34": "2vnr5SZBvQp9pKJNUKf3gJzTZUxZXwwff38D5vigtXyPgXmRdH4Yx6aJeDiw2nfhF7JBZm8qdJB7CMorq79Fk3AF",
  "key35": "531iBeb1JDmLd6kC9htCSKvU4NFakWvZZHkdUAknrtS1uZuZ8NP5W9dCjX8B2Ku7MCeFtmhjXmSst9mdeQ3VxhXR",
  "key36": "2yq8k19Ew45eLffuUay5sekNa2rX2LMgdr5ttc5BL2ER7ivGV78HNbL8PJRN5kyEgQfZ7NEpeSQKJmcKKMrjUViR",
  "key37": "2vrtMJqzPRDo8Nb3JFByRLLS98tU9K6GuLr3j9NaCnLxmNDdJqLJKPdekuQPtsQop78cURojkeBbCNaetcfrUtQ",
  "key38": "2tJhToNc7kyDT6UqM7BTZ2BY3kwZkUJUUjtwV7SX5dNsbiyyfhAMCB7ZUNsWm25dmTP96ndjuRziBLZhk5iHmdEc",
  "key39": "4WndrTh9BsHbsk9kNbJs7yY9uyNpHpj46jiV5bEYFouVkZ9vD5p2jHtq4y6E7odgHgCHAeYhAFCb6Hf8gB9pWDyC",
  "key40": "4LQN876oGRv1Vc4drVq6mCFdNFGbbjpQwRfaDRXHW7yzWioQYYWRByMRUjCjjX6oEK9Gr2DWEheP1dHuLZ7L1xFY",
  "key41": "5Z7N7Kkgy6qkEqBuMXfRnY9GHpRiPEjR1oprJmcjxmbu1oPTe1o4kSHoGBCBK8tseEUjECmo7LKo2RYFWYGp1oiy",
  "key42": "4VqBVZ6zoU3mHTkBMpewUdPNb4G3aZeysen9WMDwrdUR96TykcG2Nrh8WTgqdovAR9eKd5UekmKmJRZgsYVLpoYk",
  "key43": "27F34LFe6jMd1xNfEbZAUiJxBfVWz14bV17ta1TLmAqdDy5ncQHX7jFTNtDXe2asc4jFH1dUZxDZ918hvBE9DbJH",
  "key44": "56j77GbQLCoqSANW8osBNkAXrCVSPWBgPWSBvjrvb8iAiwaGmHdfJ77ogt22HNqYKjadsAAsWoMinMnw4oabywk8",
  "key45": "5z7caJ9GZBn9WiLkzcoK33J7pQbHGGpeANLyFMwuExDyGSkrSRRM3ThdT6UBVmbk3NyoB3mqDqLa3Lp7zG39ij3E",
  "key46": "54Gdzcrk3cUYKf5kdSHTkVBbANnuN36sUPAd4d9bALXMuXjUGekGkoGzv4jW1Ff65quuQN3PZTxXDjdWYzapq5TU",
  "key47": "3wnwkdcsb9S6ruPK3RCDZraWjHUYmRy7pxotjFN1pNhhiFwcDkHeQcvcnqehczQo8uttBzyMZYHmj3PpzjBQ4u3G",
  "key48": "3sEwq3Zu8b3d9c6hah4zZchDFaxQrGBApbuAxWtBcLxYqPwm7scBDwXvkDTyDsShpbdaD6Y8LXtWR6E3RpBC3t9D",
  "key49": "3UiVLM6VEeRaYRctH6BtkDKziermuKfpwi52VUnDx6e7NEe8hoeCsRMuStRC1v3WNBateou7ydAfJC36998f2qri"
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
