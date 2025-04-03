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
    "5nqdioSYHXG3zT4wpPFr74Svw537MhyaKagKiEz66gw739ujAC2ZJ3X7xKHDreNszHMQ8z5ERLnVQTTJvZNZCvXa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mpor1q8FH7K3S7pQLSy4fSCKbTMoYVeUqovSFd2W1NmxmE5J65Kh1CkYzMQczBfkUmoaLT6TpMphJ758jZJSX3T",
  "key1": "oRmtUBgRAhaEpuwXsXTXnJ1KRvnSC3yWtYa6uX8Qx54QypciRREGFjWgqJRSADR3aacDJyKthgmHEm7h8bfy8hJ",
  "key2": "Dsub6kJ7VKmXPMYEkQ3pR2uRpitGTcVt5TjWrhZc7PGtqMCz7VcETZc71xoRDzegVGKAihv7tk4NEGsnzpiTLZk",
  "key3": "giPbVhWUVN5Pm5d7XcSEcJ4qFKGpc8fmebD7xmHpb2tLhotFqRrodoh3Eg4MTgDeRVE9QJUSjtCVi4C68siDHgp",
  "key4": "WwjjpyNzgmdtBNx7Zo4FiU7n7F8kvw3uR4cZzxfbPpEsgV8qA1wGDN7pjEyhyJ2wJXc8ctydUx8mSsGZ5U2GTZL",
  "key5": "4qz64WiGzH7G6tyVGr4GJARnxRfvttdgo2DQ2uXox8gtHSZTCTaD6bYnrty9HWnLrtBjMgpdvjXFnBiL46NEVe4L",
  "key6": "3rydQZpBgGzhPST9LVrfwCFjNKj8A63w9a4mcTEphd1PXfP3za4RHDjhBKw94iJT5AXfvwYvK8htxgvmFKLmA52K",
  "key7": "5mz2PFHEDsNRCnuXs84jBoyubUqizZ9Wp5UC3PUzNEvMV6inQgLCmPC4viBUv7Pgg8pyjkJxizXrPxphJULZUxTi",
  "key8": "3uNEzgaAmuQdUhA8EcAoXPfAYLbkfwDKbnjjo4A9xgRxAwHkM9TywmZPNfKHvUT8pw3JHpVRa1uhBbqKnh2TwfKw",
  "key9": "5T8Z82yS2yVCWWEUWT1rLNkwPxUD2fq3jmcUPSUUuf7vrxUQppkod6KYFp61NSJeRxr9P9sEgSak3ZLvyzyqqJJs",
  "key10": "5LmWDsFZCnDNam7FZnEAUkCVvAEoapUs9twxaYPvCFDDQiv1d1aFL4mfeALL5RmykfACtHiVvpNiocEeJC9VwFA",
  "key11": "553NESx6MAGrHPJ7ASDJPpsUnMNq23HcgYaUMtysgjedAYxoXvcLPmiGHa9He396SBuz8Ra3PRzZxaDbnPaXHwG",
  "key12": "5w91QWcMBZNgH5BXsboY5qyE2AZE8QuY6NCb1j88kYxknsxszhfieWCdLAkHEbnmBKB5uxaR4f8vxsGMC9jWTVe7",
  "key13": "4VhoXNXajqNy53GoUKFv4i2Q1FkxRVXpcik2BZZLzxn8stciM2uKKEekJVEmXTBiFeTPwgLEFmDqDFzTAoid9Aro",
  "key14": "4eZm1wjok1fBtYadQ3NNtvBB5E5kt2NTQu8KycQVfUfBMzZDZn69achx4C54pz3i4sQZh11ku4LH51ArvA38Q593",
  "key15": "hGSFN18NSQwiVA8uTpUvFnLCPFLPHxs1i6jgri3ftYgqtT25S1ovqdZvLo2n3D9XbLVNu3dvRrP7xnoQ37y93VS",
  "key16": "416vKFeX18jmrjSfFSkSf93bVeYFJ2m6ARkUvmCMWhCQGZzHsZxYYaVjr8bBgtKGPZwgrWXaCJBf9Gx35Yad2Vtp",
  "key17": "3PJwV2YyggytZKMCHfnGF8nqm6wSbidETKYzdC2vjT6csEwoP7dYpArpfM2r339k5Qsqh8LwCGDxF2Zdf12PN1pV",
  "key18": "5eUv5X9w7EUP2GLZWN8CbDFwtd2ThnN6WZCKnQbD44YJJNraKBVZb1PBk2UDntHioLhfnguBEDX16M4CJvir5ewS",
  "key19": "51X3gHYjhtJoGSv3HCdke8W9FMUAd1g9FUgqgX83mSNbKheTwv6WZ2csmE4QwiFtyajfNT8kvXPDVUrTK4eA81WF",
  "key20": "4mbRx9wJq3T8ZcAxGMfV8D6Xojz4zbn7eaxs88NPrNdwd5m8TuaiRrNYnaDYuR9E5m5RxDfLC2ymLaW8wd55TXn8",
  "key21": "pQGx4RNFeGkhNuKZtWWsSd5daM656dAgtt7ntksN8M849gmZQoMPcorvN2Q9zCWorDAXcM8VsxTDziSzbXn5o4e",
  "key22": "LabVb9Ak9XV5appcxMGa5Z4PL5pEnr5UwNiY2uL6Q9hUCSH4h5Q9toY5yTDzQcHWEGiDiGYoJ5UY8HsSLHKsMQm",
  "key23": "3ge1GY5h7LM2aZyTrugdT2rA8xLqti8Xf8UPwFbDUTLTs3xEPwPRPfcjGhcRKuAWYsTZk1UJoC7zsVZpdh59bUgd",
  "key24": "52L6VCYYkYFsaNjgZPHMxbQxoEqBNa4ridkRQBABzpXLZXwt4pCP3czurxiKQxi7Q354CgH6suNu1VFdgauEeNav",
  "key25": "43c5sgV1hLxgmsYpTsZ8YkJKZfefD658JJyMcLhZ59WG9xZYmnudeNCBEA8cEU7FurS67rCZVU5zM66M8yL9qz5J",
  "key26": "3EepBGzek1aRfZy7N5tQeAKge1xCjfKXHnhAGn3WBM2mWKXb4bFKpXB3hg2X4VcvM44ueQZ5Ghy2oeGELELyebSV",
  "key27": "JVPFBdSC8F7gNusrdza1SqNa9MCPSTviuLiy4d9MUhP8Hwhw8sdPPNqKyM86V5M7sQrvbkQR6KrcZu5kt6cENVG",
  "key28": "Zr9rWz9sLnS2FXBNgSLmbwqfZHo6gu2qKaKhdFuLUpRNUpqgqGGCp21CqKi4TrwRuRn4GFjnA2w7YHEpTDEzBwG",
  "key29": "4mPnmFiK9gv7ehYnmGrMyN1DPZFTW6Btr133mpwkXSshsqkpwC3NgWruSRq2LsH711G6W8DjYoFrFHnwUx1mkbCC"
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
