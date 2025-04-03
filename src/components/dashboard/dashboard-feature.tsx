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
    "2oddndGTMnavRyr7YrWB8f56n8N3kGkb4LFyLmaRmbT2r4GDHsrP2sgXsoUM4bk6RL2YsEBViGPqdNm4d1DB7RDo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41CFNPBmhMVPRMpJwJ2ZTM2yM4XrHW6fCmHww8FjqmoAaEw8m5dnD69JuVcZsLq1Q7zWhyZgE5yRQkKBu9b4ERLR",
  "key1": "Sm7yoJe6jeugjj5zeFtbkBv7bThhQK2V53F8ucS9a1yBH6CMnW3fG8GuXEtH9h6Avi5Z9vf5Mh1kQqSDC3mjswH",
  "key2": "55upJDdk5VAk8SR5xguE2LYRPhz4tvJVXenegq96sqhBQfh22GQsTRodREBPdi3EXcFh9ZhtGQts8hwmyL1hJahV",
  "key3": "3qAPVn8DJFPsS1yZjskje6YRRH2RxLsDCNzaor6ar2zJcUnAWsz9JhYvGzejGrJZYLr7Ky1P45LbbZaeJ8fkxLT9",
  "key4": "8pad7PymxUbyFtQ865mepCNRCkZ8ytp5qCtkog2hYCdsSXRx2rhimocMfcH3LahchVCZopAkxhFZwTKX4WUjxS2",
  "key5": "5hMvZccy3nuuKeJxedf8PdoLeej3fGk4af9WbhzzQqhAwsiFtfQFfm9pt74Cj3bmJMzgZVzZdSZ3a2rMenvKavkh",
  "key6": "28BeMShhHmJxRWtQYovHDYKcckLi5nYbFd3D5HnXN2ixmtEjrSsBCuwWS8vpavhCsvKxy4UV4bLzVgko2Dszrtq3",
  "key7": "9R4stGq6VuHXFCTMnLYZpXw7EfheMgFeik2xtk3KxVSYWSeYeJMvrFGkGPApzJAZYDrUBpGaVziwaD2CZDX7ems",
  "key8": "bdhp3jLDLf7KAgopdvAAMiQpjZNEvmmfGGjFMzBBif4aDMy7RNo4EhwbWVYLw45d2p2z8Rr9TFUMCmLNxU6Nyvr",
  "key9": "48Y8nNTotDxYs3RXwadSZUoUctV8SEHhBwxswrkZNtqxsYtrgy4VUMHbgme2mE6jrvzTV1kHwG4r1LRWGvk59VRU",
  "key10": "3vjRKumQ9VWrgxkEW94YCDsLRfozkVv1s7D3id6VzWV726EUjBA9TKC7C9jJGGBScqyU7Q87V9PPLJcja6etCFEH",
  "key11": "3zw8nYcAqoCpV49xZevPuxzTkwVELbABC8MzrpsBM1q5ceNoLHwpHNBvPZx7z8tsRYNQtVZsgwqjc6VyXyYF3goG",
  "key12": "2pvUZqVCSimnPMGrUz2TetoyqCyfrisZC1YJ5GuCBPJqs6nh76dHwa8X4op8kzFGEzcXHuCwEhRcG2fm6aL9HKY",
  "key13": "4YFyzFRJTyZnS4s9jnQyv9wRDYtipNFysjjCRZ7vVg8j3e9tHiNm76noxP2nubGoHSDEauiyFemvRxkNKpEGUmhJ",
  "key14": "31VDzUA3jJj2KhNTfVEZR5M8adSoRTTNMVWzb2n5onasHEGy74W3nWL5boxW91fvZUV6wXdpbhyKsAQ5EPB5bUsd",
  "key15": "2ou2PuqrXfs8FzHKPz7xJvWQ6gR3TFydhECLKgWogpzVA3AE9cL8Pau41YfFHKkLDPF5UUNJx4SYEyd262Tp8Duc",
  "key16": "29sC8g53ipDQTN8pGN1Ny8DjT2FYv4Y4U2ETSiu8mMkpYoDhfRsmqBpqXnvDJVweA6H1aYSPD8ZVnkidCLbpwr3A",
  "key17": "4J7RJd2NfGMubevQapyDcpBkDRLbM4S238BdsQpVZeGCrwVxa27x1iK4D21jwmVNexqzs4qLBrgE2ZxMqo6c1KD1",
  "key18": "mxCy19yemA9XrHHVU94qfSzTffGjbxUrJYtG6u1pWCtAk2E3sozrbPPFs32UjujYshibuAbqpVfRfaaWFNyGfxV",
  "key19": "5HxuBSDSiLhkqYBNxGCy86qCN68UnmxMg1GU2uonmAJ5BP2mGt51XHpFHkvu4ihuZVLTfThEnibAb3sSrxMK7RNC",
  "key20": "4M4WShVAADzWnnYasdgy3SYNamsZqS6WYmpbCH7zCF6XXCXAzrQYBJP7CDTSQMzUbd11STB2CCBCvxUXXGFqggyf",
  "key21": "2vu9Q6Qxm7dsG2ASJzsaEohoD5yJimwDoKsnXer4Aghdva6iFiCNGnqURhzW7eJAeXcuFbWBp3TnX7ZvPYcyry3S",
  "key22": "2VHxstm6CAxVwew6PAi4urW9yjvdbAdfnAd248z8jVUs9xMDxbNVqBLkZxYGu1FMX8ZYWtGBsfiodHJHgeBS22R9",
  "key23": "2paVQEPwhzYdWYwrFxx79NGwvpZ1XF8W5t5j5TGcP5jwnPkjuW5G68imh4F7Ly6ZtxK6JEv6NXjc9d2WUcwhgBw6",
  "key24": "39hsSU1LnxWufq12L4FUrLpvsUE7RitQrCJXUegkYo4xAKTYxUCG2DaMfe4xyfjAKo6aAraCCz6DiwseNmkrenjc",
  "key25": "2LdGZt3yVUa5HMFB6cGirYTwwBXCkQ5Gky2MUaj7FsrucFhr5emfxTqDpWqMgWyqxCRAQgHpg7F2mYFC5zpWYJHt",
  "key26": "4JTHb6e14Bf7LZuNomqtgq5sAHnC4aanrhRcyaCmErZ99HPAoJ5SeRPHEhL7cteGNjRhMpcawaqoGNs4AsRqkEiw",
  "key27": "5DLqLswJdmRdPRXrkaXULa4RBk4LCV2e3EKyTgSc3Xo46CQQuwMFYkXpkuNnjFXkTZEoaDLBe2PWBt2zeW33YRUg",
  "key28": "5QpdzgJEk2sof7ZgPxVzhEkwh8mo2rc7TiHfz1XquGW3SrwGsW477uWk96siMabjiciQw5unBhFwH5nQU2SaXTZ5",
  "key29": "ank2hFReNCFBjb1XXch1cLNjpemLTeY2ZMtrNaV2N43GG8wU7F8W7B3Hgwk34XdBXWEsnXXToYS4cjWSoqaiccw",
  "key30": "4FgdpHKaAE9PeKcZNUn8kpPza2MfZQTWyJ3Wpaf7riLCKeZrS9HnjcBC6w1VQg4v8C7Nvk1bNKUQvNUr5vQX5WfK",
  "key31": "2E9BN17ykFs9THPrjyaB5k88csvD5YzsbnCLXmSK9LUeznwQ61pjXser9BHoyJUU5ZhtSxqP7ASdgU1oCjC2YusS",
  "key32": "4pLkD48aAL1YN2xc81Jf594u9sBDynhsuMtkb6FngHJPcbTR9seYFbRNamUSgYBBoFefhHppeoG3zK2bY8roDpkx",
  "key33": "5Dg3GL6VzWa658BoEz27FZvdF8T1AgqbvgkrQuwDhZT6goPusJM7Zwft9qyT4eNMHrcYF6gxYM84Qv8opjpZVN8W",
  "key34": "5dNhiQqYFptmBypk3QmE3P4kD2ySd3A3SCbrf9HjSQUN39QETGc9cB5eMGr3UUeGDFo2wojvfWNH22YuRcFmQVHP",
  "key35": "4LrfZrkzcsCrwzZmj1kTuCsT4yu6vJFs5B8ayWphESerS7BAJMu6xwrvo9tBwKBG9JMbowHCW6sbJ1dNJuqtdw79",
  "key36": "qcjimu3KhDWTUG2kTNGGZKzMWZqB2W7psHjYwSChTAYjCxVycavDLG5RBcAHK7pZQjPL1CzChWq3JWm9d85fnHv",
  "key37": "2ENxNfuj7DbAj9HAWDfSJwncT6jyHMTTSkCuQL6RWK5gor8sMmCTUyrrmX3AQiEcNEiYjBaeLbLJm2AHFbkoCSHa",
  "key38": "52UpbQypfbagzGhr1JRwvsHvxxFx1BaWCFttnNokmvpgvU4W3YW5Sk6MjysSTPJJLA47VpADasgYevmJ2wyhqzrv",
  "key39": "3m2ywrph7E4emZTvSv5BPf7M864KUC9HjZ96zMm5hSiRntaQJuMXBWrJa91oYgXzqQNtFJJaZUUuchcsiMw34qxh",
  "key40": "2VswYosrxbwz3xS4Kd9e2iV3cVPmmpnUEogiddaouzWFtg6wTcGN8EAcbUqHTveLJuoePkcP1WVgVDA8cSUars81",
  "key41": "2D2LaXoS7eN4FNMTvUing4rfNmJUgS3axk8wW7egMMdiFDeXAdGp5HBZCNTCUCtxyhm5asuoSwu5JkDmjmkJVjNr",
  "key42": "2MHGqwseQnTpLmz9gMveSuqrhP8zox1KB1Sq5RNcMR9bwBAryNtqeDwAXXkqfuM498eYtdE3doKV8hcBReNTin3Y",
  "key43": "5BHpqmwDjKpjUtgbrQPDiazMpTLCrS7J8eHSXBULqEmFp8qWNsRhDWcYhmBxRmC3QzWLrrCT1sUrCFwXv81uRg6x"
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
