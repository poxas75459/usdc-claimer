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
    "3QotVMx1RuaBXrLVPjLT3Jz58Bnck9UPtwn3RYbA9ygTbtoj7RQCqe1Csvpz2V2AXAJ3bGVZf4jan5NG4Gc9ivue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ocBG5h2J9DEADaiW4ReUv8KVCszqAPXav2rdrFRGkUViuNSmnGnpQyyFEHs4gazCkLDr4vTC9VnSRrrtzq4CYFc",
  "key1": "2VRpYhqUa2iBGzdTSrHw1meTB2RtUTqE6ncacUmiKPWSbssBEzBUcWNAmyNTZAh3imqutdsQCGvkw3uJKV7y8Jij",
  "key2": "4pRFXNSXhNCpd1UFHerATZZBKSzn4X6kYTTQDFgEd5tycuKs6QhEBGj27s6aAoMGjvHL9c2FivwD9H5Ma6VdvVYH",
  "key3": "Zw1KPHGSriyUhkUePEQfUTk7AacMn7y5k9BxmPZC678ThMxtVYmmVAMzJJN7AQv1JsTFyiwq98VRGyeyj9DEMCM",
  "key4": "5CGqrmwU9PwuTXxqYVtSxkFy8WMSgTapd2pKSW7aA5pDkdPrHFpbBfhR34r1HrmGnzvTwSyVsWJoVZJjPRNLQP9K",
  "key5": "5vABY7Pz3AdpENiGSVk5mbCkf9agzgUuFvrpwAqgm7PZA5Ubs1wDpdUAgDqm3vxL8TUUx72yyveAE9WiWRRMCktE",
  "key6": "4fj4w2UJ78dncxmyHkDRrADCUdkFPYh6Nn7YkSbopXhaZ4giZP2hieJsVLJsyiQa3pLqiUKM5z6csZHuxych5q1i",
  "key7": "47MDhut3WMDLcqKguYd8qkEK7bZvdJu33t8FuaDWb4HZhSLve8wtZtWMnKYsGB3aQoSdvfcbQRcRK9nTEWsc3NHc",
  "key8": "3CZTcCz9MManxj8b153JMRdYiZi39dfnVC1HHSbeyk3e6BSzefeLNCmvu3BBFJYPu8TrsDev98oaG1Gw1AtmKni8",
  "key9": "k2qLjBaF83L26FVqU66MKdAdjzseprAEsE4cWPrFE5KhtjRPtiDmZYzUrNL8mwBikHkdpuriuthzUYU5592eHLf",
  "key10": "3e29gyX7fDhAcM28k4oQL8F83AHRLi6fwcix5CQF1TX7Scfxxh1KZEQgq4WVM5qKBNVdEq6ZP8aadFnChKSRpwMc",
  "key11": "3cuYe4KBUNtji3fjBmic47bcMJ2wC34hmnMPEvPFeh5RNzJpxMnLd2NtZ6wBRjbXMSz5KxSPBB4UrffpnTkFsJdq",
  "key12": "uEyseWkfvVD8BrGxHBvUnuko2UrRBjEvoCc8dDhcsMgGkxVLNvwef27wKeV7WtWHKRf13de9nh2PuCxexom6cgH",
  "key13": "eeYYyUB2unf314kSfvwyLUEqRqQSGspB94hJDU1n8YY4DsTEEpRXArNuA8rYK6nd9SCEwnkL8jBzbeVonmkpCka",
  "key14": "tntXgKuth6qGEgyYBbYhfmjsQVCU4XtfgZe5tnEvbqE2LBHVBf73PNJLhRLGhgw3uJ8YfAt7pcG7dkdX24FzFCE",
  "key15": "3HcyaWDgR5EoJYpMtbqeeqV5GfrH78hmeqA23pe5QV2cccj3ztvCKorhgbsMY1uDLnwt1SBwknR3DdkNbTjnYtNy",
  "key16": "kCsJqLZyhgrAePYKuaKkkdUw36eRuoPTkjtQ2DzMwRrvbm9xTTBDEs3UJcRFTXDH1kQfeMCrmUWjQLdhdZqth8r",
  "key17": "2UX6aPjttroXMLdmhntfRKyN8oQRDHi3wp8tX6BZzXqG5kcejhV6NSgh3ShDHneBe7gUc3EorUvrSMZuFYtbgHMY",
  "key18": "2jaUubwTBRhQHBouuUnL7A8VVZdPNWaVpiqfDiacZ4WD9KdHisJkmMp3eMmhcn124teqPb6wud5pmiCHCUobVNDm",
  "key19": "gAgXJ2YMkGVVj1htC2X4HyStEnXfJ3fKHgC3emJWcnjfvRu8bTnQZVGjGDjTgmwmzh1avkmuJoQPmHvLtnmJnxT",
  "key20": "29J49BRQCqEkQ5HBqmySWEJKuNRiDYemACPjeTdmXuvXyGeUV9K3n9YYb3jmEgt5taR3Nd2Ug1Ju5ss7kncjmGNP",
  "key21": "366beveyPEbmHY28RfeSWWkrseYYcwxkdRmChmdBe1Xp7dMRVhddLG6YGufL8cfhw27V43Sgt8TRujayf1gNN8Jb",
  "key22": "215A6HnK7aaSGocrNR6Y4WAqiYwqEgj4bosC66hP1L6zUZN4q2qGPrRmmc3XrMeepncKeKfETQx9e68EfSjDLSSN",
  "key23": "5xM7X69F2FhPe1THiwF8q1sJTAhajieTarPSCRfF5W7RG5qX4dvwNoS8MHpVALacaqmiR8ZubLSDfs62qVBVGfrq",
  "key24": "2BxupKMfhhCa9FweqsHYNZNmyoKMLuKAqhX57L4xXndjunr5GEN1hNRU4gq4Z8YkTkR3pR6Kp2sB8yQP26ZmHaeD",
  "key25": "5dZavKoxyMcw1t57Nd63rphJ9fUjaFDP9jwgb9gbPqZDBM26J7KXnp2EUQt4SmXXQesSZpXUzq5dkk18YykwmH9u",
  "key26": "5RfArKo1G2puPDCNxCdn78oo3K79g9Uih2FSquUEqXYFPbCzSWbV3k1PrreEsFNS6bxSxUN8zgQnPJrckB9s2E39",
  "key27": "K37Jk5qBsVsToUfgvYXQm4qrdGkYqFEARdQymy8wCy5esNyoYVWMTJfmsgkF4ua7CyJ6G5w4bc3esBXHFYEyXn2",
  "key28": "2nGsE6YT5cSwFhAXHADdRkM924krHBfMJzzEdkBoVgS5vPgvipiAw4jrq9xgWWC3T33mpH3z4RdBtdAt9shjsmFn",
  "key29": "48KxSQx7cwWUsxjKRggjrJmjP1MKo9C8JqEtvzwE4yNqibZZ5L9S8EbK3yGYJ7LNmbopr7LiqJiqJ6BubaLTTS9U",
  "key30": "xmwDnRVfMiC9vrzc6g6wbv967k78LrP21PuUiZkWw3D1VsRahueXMzQ3GrcFLmZv6FGabmB1agFQdMpugomQL5d",
  "key31": "64Zb6f9NWCj5cHQWqAFTEWnYvqM9SfSrqayXxwtcPyRru686AGu4ZF8xwZeHUjhptZsjEarJyetAoas1rSfyAjv2",
  "key32": "4MXmjafPiYo6sLftXcFfDHSHXKugNXBYjgJEWKe1ny5T8sXB32BiTpgbHcGUDkBZ6x6Dw6Sfzdk9MbkRKgoo8Qgk",
  "key33": "65a6oWCaRs8frP921kabRKA9VTexk7bggHEw2rmmu1vxdmuShQXZRKcnuPpXQUQNegbWHoZfQNxdm9XbLS8WofzE",
  "key34": "4AyGCcDvaH6zXkTe8oe8gCXcbHpvPpEdfbAmpRGebLSMLcvNdiugFme1TVHxxhYAqpyyf7ZBxwurRL4NJWfL5mC5",
  "key35": "59GCgm1fiPE78aEd9SsUuTyTaDXwMDhCiay41zZYEyRzZfVoJnZHoodcZADTz9AhNC3H4rgiwd9dvWLAf4EqGZpF",
  "key36": "2RrM7bevZfEJS7VHEj1VJzw16Rsqky1kdaWmb9Zwujas1w94DLeFEhn9atBNeasAAAYcois1W6qR5ZdBVaPKfdLJ",
  "key37": "5nxBAxXCDZ6kTUMnWTd5xy1cL5wwjNxkA81oAqyxAZC4CuY8gmZUp3fyvzvKPTKoZwmyygKaKi8t3DzirbVqsAmh",
  "key38": "2tNVjnjYHAZqL4nyMuHwDsc9vBTro7DmfN5kLA71z9AhXWRczz51w74VdWjroSG9quGGJtb1V3CubFqaHQXWdhGn",
  "key39": "k6dwoCZAJmdwkyY4WBabLeKHKahAdGdVGEnwJhhUgXqGEWdNKRC6Fuvm5vMgBDPZk3wUUSvjwhb9d4TjgusThTk",
  "key40": "4iCnNJJPeuVedeewBu9SfCEbYfX9Jpvxx3CcxXRsgFVDbvhaHXvWU9d7AcyAys1gXfxvaqNM3CcoaikEyMxNYUN4"
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
