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
    "4qg1vXvGSSuxkNUJSF4y8E3tNiYYLv6aA8GaDF1jC6bVUK7YH5k6em5th5QSvvfLULQ9tkDtNTf8wX14BkagVWiW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AFKZU8AfUYYiGP8UHhKHUtWUjf9kobDGSfs6ynmR82aD9occijFL6MY2QH31ud8TyG7xJ9P1ZPFV9wBVzPZ2Ks4",
  "key1": "4tKaE5PwiK8MiwkPJBNgVSmJM4DVTwbrjVkoEynoKqRkeocqT9aGwSyAf8o8pwJCcPJQfcWTgbzrNUhMCfoKqGni",
  "key2": "4aF9uSkmgQqkWWPJDfDu6Qf71K3Bz5ueW9ghHr2jRraFRu1NAnPjBFuwubEKTZ3cr43KKdWAxoAJKnwBUEfDqaiw",
  "key3": "3SEDZ8kZsY295aU9hPAFUiFLyppntjB9XC6yiQKdSw6Em9eGCnFfXvAY41UPnzKTJJooym6ctxbpKSUmPsrpEWTJ",
  "key4": "SN5j1sLkxJA4KwkN3bXmjF7GREgXJKFUVURuRCZBVW96gdeUoqFmQRXxP4kUdcRPeoWTgSXJte9cowTba1JKPfv",
  "key5": "32dLfBUa5FUH1iUdmTtBiPNVrVSZUFZ9aMH7yHwMY938iKX3Y4RRfLn52JPRoMv7iCyX5aCkdyAP9zz4sSK7TF7W",
  "key6": "47mtSeLqahGP25DCc6ju75ZTguv1JEB7Wcq3eF49ySCgoo5VRhBSUWtSJ3AmmzSsFnR6pk8rYyKQDR2uFvnmWnZX",
  "key7": "5CaVL4MLC7yHToiNJKFXtKUfqFnfxkjfo7QrbxzemMruydEURKWfM2KdCEtC8UxgAtZQ7pQPcxj5wkhmq3J5njbB",
  "key8": "H7o8LvvzaW8Ja5rF6MU79zQJcsX8dLBfGp9MSsmURcauaYrbKim1Nhfh8sWW4inGRhJQ2EzehHaXQT2YAPGgM3d",
  "key9": "4oGp7orQBMRbhca1MpQi9tS2pe5rjhaJan6QDCcxPnERt9uZEEnrYPjVjoXP2FGBSgaP9Rcr8SJcxuvvzik8L12Z",
  "key10": "3dCwRkVHYfWGnYeirZqmZtVSDCZffMgnBk38usrLX1mFUiyajTmWYYtX3oLx3hp3ctBgHp8Gdah4bzk84yMHDQfc",
  "key11": "48fw2vhb4dDQcsXHkydMPAxEJcGPbmoDT81ch6afwQSBScfDCEeDqTsgAfqwgT2NtvhpX9bjxxHLauUFEEpDPc5T",
  "key12": "4KoxTMVjwjPdFRZyENdLVaMEiV91uCdRDXEMkWXpn229wExRNtGRJEbWuEWPmKNUxEA3XWtBxZTu6f4KXmf8mK3P",
  "key13": "61YptoQLKTmsALcdmEgitjbe79Uajd6V7xyfvR7EKNZdy7ECVRneGBeu4FfXdYLzvYk9Ne4mauMyiTvHV6efnPWy",
  "key14": "5K2zR98oUrremXvkTPxZRjG5tVAWJ535GbDHRRUFFqUD1usmKth9nBiiEuxPpd2Wdg6p3UHuCXhHoUEDuKmgxDJW",
  "key15": "3XnCUJNwdkiRg6RFkEo6JHM9dwaX45otmDsrsVrn5p9fUC3GKqeEKFjzZospLYgJzzWKgvA9MHyUSkQfQZQNpkE3",
  "key16": "22eMXtq9jZknuKeruJR1bm6364qabxj9EaSNY5FaiPGr6RPVBRXgod3VwniqMjFaZYBthJadNKLwNyXhBVs1HPQq",
  "key17": "5MfjJeJyAPqwmivQWrTVSWozFaA2mbwzhhpw44yAtJxmeAGBVyBzwF8hQoaKTh9xD4Mn2CwvEXFQ9uvsfoLiRjS9",
  "key18": "48bu51ECGyJxkvK1fkdrJ7pAoA5mxeoZJvieyBihmqDTHKEBqs1x8qHz7QenRFG8hgUL7AFUDCQpFxKmu2cVKSM6",
  "key19": "DWRqwGmrvnU4GsxKzMXXWfPJ3ot2EcKG62aq6FAcy354d6aZA61C23szoAUGWnsEaZs1xGCSXc8nS1hrSvibr8r",
  "key20": "ZYvyDPisLagQasDate5LgZDeSzDmtcytB8h9aRnJf1EFxgQ3YmMHAvDJa55Bkwo2mMTjti2pwVfVQnQPMXGXGYG",
  "key21": "5RpWzmAsNNP9rgLkxYA3dHUFd4XtGz6ez1r9vyAeqNJGvtsC3Lfs95a1zrsJWWUnFMYQRS1uVEvFp1ALxEaJXVeZ",
  "key22": "2UUXTmsCBstsNKDrKNNbYRQbuEkw26R4KSkYYorSRPw62TqYPprPsb9tKmXgAg2LdoNY3hHMtW9DY4BzjPXTsUZy",
  "key23": "5uWDM3t8HLQtkvQzn2Gzq6BiqtJ3Xv12ZtWFZkVoSsBLMna31t1PsHT4KunaDGxncgVpD6euZcfxQ5UchE9Pcji2",
  "key24": "2jEPbF69k4qsqfU3HCjNiqdCDdLinqQYesPc7nB7bW9PtEKtTyMcsX4DKqSQySwLxWmPVHkii934y1WcGLsXKaow",
  "key25": "3KKoiuf7rWkg1nfHujCxic2dn4KoYG3jWqd3q2Wm5yzBz5gsamBiPDXrwSRok8rR2s3WnRnUWwQTawKN6U4fB51F",
  "key26": "2gQ5FfnFChLoameQEmLLELvnaqrJXZUd6TSHLPjHreBHHP7B41sEWBTxXppTriSjG7CAiYCzMjrxiF9uVYmowWmf",
  "key27": "5wH6iLB92mGJ6FKWvRPwUW3cimca9iPcP9Rjf8GDk9b87MStJvkBvRS1jM5pkUnTHVAANzhCUCJaTUexSvhDDe4m",
  "key28": "3iBriSMoLcUPAKAubZoUxiNL22kouTgBPHnQpgipuz4Ynk7MkLPu9ZwxXWuHjYFepNtrshyu4AhjeDZ2hvjC6nJz",
  "key29": "65GcMRDe58HVFrHGXqPMaAkng7ukKGmVpiTU2cvEHJmdf5TQMuRAGG2bdWBegLerhHkhZvzkuhHHhnCa3cDhiUpy",
  "key30": "2PPTCDy91QibA81xeDZXzQnykv9KZ13yZBmdFkdNPwnFh4C6PX9b7c4pCEgq3yY2HWVydYd69CZgEpTLZWdHVQQG",
  "key31": "fDQtoDsHKpmNVB7p5dTqsaADGRLc6mgy9ZgyYgxLm5rHY2LJjN5FSNHmpKCzoWGzcVco4kNJZDaas3w4UTfoUya",
  "key32": "2k5GmdrQYbiEWPCB2UiMsKgPh5CRYBUH8yojrbETDHVddFzNE2ykpkg3KBNw1n9UY13A35z9Kpr9NntF1rLT5CoA",
  "key33": "2qtpgZhxTbArLy5rJfXZtfpv6acusRvGgN4TgsUrJc2QA4nnrrpeeeHvjHYC1JZp1HYK5JiEWgc4Y6hxdtsWh6Xd",
  "key34": "2hV7iKBsWj8yVwzYye9LzUqMRhRr3DUTScNtrqjYtH5TXccYKXeFBMnuccjKM2DeC4i8JaGkS457pbKaS5WZdxFV",
  "key35": "4bM3aBp4CEFnM5toeEPQd83bJyQS2Xwju5y9DWyNBU9LqQzRvAaLUDrQHUdVokR8CygzzvG2c5t1uBBS1BorYtrd",
  "key36": "zB7ZnhMirmFx5jJTKuAYRuwd22qtpK8oCTaxSJ8WSuDAC42aWwXWqCTSmR6vXyfe7MFrnEnozUmph82oaojyX3s",
  "key37": "4KVA6zPwj9w4D1mWoSG5QjTTSvxoyyosizvYuehkh7XPQzStKHdFynsLxdTR2nnPN2pXnZaoz9ba6iBhC1VqYaCF",
  "key38": "5EiVePtbcstUDaNCT1iuKgPYJWMdS5BxGB8F24mtKcEQAtnEGT651M2i7UVHbCohyuHN6PBEjd23TpjP3PfYASDE",
  "key39": "5vC91PrBFqUkhKXUhvMWwLV5MaPcBXg1uwXPLzy7ayP6jXKFiTg7q5PmAo6qxN38XD1Ukmw9yCK34Ymeb9heiFM7",
  "key40": "3wijh1nUQN7KR6fPZtAXKDakh5WSDi4qN2D2VffL1brCjTLfdLt4UfFgsE8onL3VfMHQG4sqnzFPPg4PX474RAdv",
  "key41": "ipRtSbgxGqT5EvTV5nse4Eivf7w4tfMhnNXEoVyf8AyrcRpcMH8UyfCBpZTfFLanub2ucv6ZFmtCwZvbAHufAbg",
  "key42": "x8U6DshG1CBf7CEJ9bCEqa5vhuq19pgwqri4PKLJMFsbhxbSMonQ9gNbmMi3c74XSwRSf4fZ25DHhbFqVRNBqNg",
  "key43": "2fR6x4KWnGVKRwhzg3ccSQePq421GTuu3DL24n5uRK1BWZQvbHyhUQAJtMgz7Z77N4TAxfxTTGruKrE25hsis3Ep",
  "key44": "3axoNGjyR9p7nYcEHkkHxMpGqGC2xDVwsqXWrxPWSurjeUcMJyBin7zDqMvH4DuSZQQQV2u3TswiC6gSwuerHyJ8"
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
