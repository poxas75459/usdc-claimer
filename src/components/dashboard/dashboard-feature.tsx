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
    "5V26tCnRMjhwC29S3Cs2VcSJc2SF8LmSSnXedQNXwo7LaxzZkjXvSAHkUQfecyqgkdD6RwUNMFUoTfCFqLJido45"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RBPbE3kTGjGeLq3CisHzMH8wTSU2VnfVTD8tn1gNFasswZW6MroPNdwexSyKe341fAQESZ9zVodb4QtRG2zr4Pe",
  "key1": "5i9uMaW3f7igAExRTd58K3FGVVJ1zeB42jLXfC9vHJStk2dn2ibxBAYkqaG4yrKzS9YUCwUgtaPkg5Na1v7mYjKk",
  "key2": "MdK33QzEB2spdkV6Td4BzkidT78QcfMhWvADqPdBGGRbT8zvDJMX35963t9hEotEVmw8eGbXPRmtL6aCwXrQnCy",
  "key3": "YWSQcQ3EB5pMr8twdYynzkLawo4HK3Rvzf7cMoQNr3asdBN56JBLQJEs1Jd1xiiLf9K7i534UGrcYRaXAmg8Y2d",
  "key4": "Lt6T68vHsfkFQAwuSyj2nzkXUCrYZxS5tnjmvSdT54eHKikVXC3j43c3hocDzePyH3xnjrrsfzMv9q6pW6wQtP9",
  "key5": "5ws4j8GsUiMKnp6XwAHwvXenoJbdAdAeF9u3knYK3EpLPrjg57mab7J2wagME9uum8H3nohHF3i8YUi1fhwB5poG",
  "key6": "5dQXbjQug8NTJ1FV1M5XrZkjA59GcDuXtT5ZL27FWmgBRBfipyGiGzmbEZTyfknbRtfd6rKmc6DjGXP65JK8LvF5",
  "key7": "jFGUCTkV7rysfRnSG2y8e6oYtksK74L5LHvtsqCy7Ky2YGRK8s5CYWyTwWCgh9TwdRbFLS7n4v3fjXQQeNR4zZU",
  "key8": "3UZ5nBqYzWteFG2aCZfFXM91ABUELh7V5sh42ppGuNUGGHXWvKZv9RXrs2p3hhT6UwVu2QtLX76qX2N2fzxM3d3p",
  "key9": "2gyJBdTuzx3nFQW5MpYHjJYXARjYsnibJceY9gRrKQ7ymjruWEiMjBVqGW9QUYEcUpPVKSxwWf24WcqMRzpGpAms",
  "key10": "3N24mxtXTww91tjRQ9Zr8KTyimGi9To2YNBZHKYTGT4YRXphaWUMzw1PVscuAJ1tC1B4bGACpMrM3L947kYJZS99",
  "key11": "y52QethmfRJ3F3A7Cfg4wkhgX15U5mPiXRptBg3XRgygCK76PzZG6hE2L6R2RpJvLbX73PxxckJDMvH4aqfCzSP",
  "key12": "5y4QHhCDVKX1gRhetHbosuMEKortXfdaSw4u9G3rSLTdhTPLjwu7tdbFaBdEEvW68fm5cQdm53K9944jUWZbmxqG",
  "key13": "5tFWghk7NeUw1pTRBwWHfNmrwYfWdmt4byLCkAXW6XDdBsmaVMExws46gLFx4pHeb72vZFdF5iPaKXxjhChVfWqT",
  "key14": "Cw5HxufRrGvtj8Q98Y2rBxEZvaGdo3UvaTJXWERSmxC8nXHe8Rgq4jwTJwJynNzRh2atZTWt2G6ifyAivuwDrPE",
  "key15": "4B9cWKJrENsRZNb7qn1TVfRDCkcVwv82MEjQbTJsC1BHrgrHUDLdpK7YSpjSWcnsrytxzsDS7TGABWoNQTwNyimr",
  "key16": "4qJs87EoKVCq8EdNEGXXj58nu1PUpYXTmwcZ8pp3sh6345DNGoXfDtg8YUGo48193ANY8Lpa1J4kdceByj3M9dcr",
  "key17": "3nAfhkD8Jkk94YZDociE87QkWmcK6WuL2FpehQzavcBJkN2ebNpSYVE55ymqMdeEkzourcFaUCadtPNicVpp4uNs",
  "key18": "4nTkuWLjCUFghLAgt33eAwbNrvG2J4SiHRp2Fc6GiBPLec7kcjBg8G1nNMriQtnXstwKqCs8YRnxTyoJhSCfgwgm",
  "key19": "2XjwN7Tgtoh3gegYc5CCuX3zNWg5vD55zqohTcgqvsm3StHpedLh3LVTB2bauJ13GLSMYoY3SdFcE84QRMuzT4g9",
  "key20": "49BDichAobCYjtEgqMAbSnzdEGW5cv9sfGYPqRxCt1Hj1gxqA6FFAvJArwADHrs93QjQrDQ6wRbNu9q7kabiU41P",
  "key21": "2u86CmcqhiE9Gjpypkj8PEC1QS84Ygpf1L1FRoMUxgirfzTYyknCkemtEdFwjaFiB2e2fAcvfXYF2WqUw5HX8Dyc",
  "key22": "tK3j12zdwKi9jKtgHEZXWF7Qc8pPZ5zN3otbLSXrw63Bwz5jGNwKzwMaf6LYSUSCLnfx7wdaBVc5tfZJNuiC7fT",
  "key23": "53PtaXHdGTkgV2gpw71MqBUqi1WkpVyQpJ1RDtDSZMnBDaaZrBRMqjbkjdyvK5LY33Mjr5XZZPKKQDpqCb3vfqbZ",
  "key24": "sPrrN3GHr3M2XGajwVCrYK94gxprmgqUzvyyq1G84L2Uv5Bt2drHbAW9RyNhpL2ncsm4x7BuoAx6FWujKrjkKBq",
  "key25": "2yGz2xb28Vtq44XprAMQsSFk6Ks96VpdYXeDhKu4dagwXWsxmxD8qcwgCtTCbQpANfJcMk6DZ61YK2cHE3MqAZGD",
  "key26": "3YEyUimipHXXhZriFrFsF5kSyVagSkq9Ce3tDEEkDDcprTbpQNcshyjtrmQH8hu4CyyMPHS8EfZhLzmsr2UhZLJk",
  "key27": "5GLk95PbHdmC5WCNPXCTKhqHeEWFcaEzVvoQuR31C4AfBUq7R2rPfN7bXLRQryn7PKMPwutDRMiyjU7aHeHUEA2p",
  "key28": "2DMZ2M6aSiWjxco56kWqjYA2xG8hbVASke9wXWT1uXAbuVeoqntjNgCpr4fYngdGJZ44zPWkRdNPyS4cQ2MryeQ7",
  "key29": "5bJJ3GYxikaoFw3AzH4nGnGPBbm4SXTQkuhcGK3WcsZaj93nqePv6qYjfDoSgVjk4n4V2TZWPfTokFwWGmURVvZU",
  "key30": "5u1tDUEAf1mat23VSGRccWCNctao4twDSfjtQ7rfvn1sr1ycjxMicJfCwhestWWknPDKmavm6D6SJvjgDsadLUVz",
  "key31": "3TQTGKHWFx6qEUtS7vtJmHv66za5ip3NirS5Tj7knKrcR7JwWazVJxnTSG9junjd9pwg3tT4r1wjcTV43ftGTZT3",
  "key32": "42DysWEANzsvZZGTyXUNmZ3QCUEuoSuH4Doqw11h6a7ZkftEiK9EJqcgrAxMMzgc3m7XkLkd7AQTt1goRG5wV2cH",
  "key33": "5yeJK3ohnKtGcDGUh7vqwBDY88T2pYerQXoWAq584zRV3bAWTBFs7AcJybhZomct5jZKHQdxqNXRG6LW3kAWBU9o",
  "key34": "55SVKSxowLrHBNQvNJHUUVHdqxdytH2dVnFzJ2aZPaCYneF6xBJFoP7n5GwP3HbYmAJxY3FuDtpBXRRnYL8D82iE",
  "key35": "3DMojmKoVFJDgbZQP4FZtgeNsNPKfixczMqqmwASdEHv591bvroyw5cEMRuWikA1obfURJg86KuLsD2zzqn6GW5r",
  "key36": "4Vii6RdqrNVouGVi15bso1a9g5Fq7cvDtEM2vNabooe5kzZATXaZj3WuBdP1sctLsvYRfGD8qKwUaq6ngXKt94Up",
  "key37": "5zCEsGdmmFg4QLytsmahwnAQpWA47kW8FFzom1qA3pAPVHmFL3fu3Mc1Y9fBSVq8hmsD8XKvHy7oBotNonhxR38M"
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
