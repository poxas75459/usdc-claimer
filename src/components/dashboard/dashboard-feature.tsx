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
    "5CtFyPEeoF9JVps99rsCRt3WpKjLgt2z3bPa69wZ4EoTWsn9AN66JF4MYxVzyDW8kVfpynWwE7wELFbBag1gX5PF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BL4CQQso3kNuaknCc9xV7Xij4LbiHKGyBputXj2XzArnEse9KgqSpmh4Prtfg3EcuzTg3DUmRfsUU35p3a8T1u1",
  "key1": "3XwCPTunTbuiG3mkuugtABWU5Ev7sAoRvPXJRtMagftN6B6zJfPbiRoZUCmNy9JVStLiybdnNrVVtza4o3TKjbiA",
  "key2": "Mq4T2N3PWsZdZebpQwhB6Rppk41EUwEti7ESwXQKFUL6nAx6XfdjsSZTdH1B6ZLBVzQB7jL4dg1XhJ8SmdsNKgg",
  "key3": "62s6EzRZdtWL5dicW8czPak5DygtRUo5RqkWkHTHT84YYhhGWaaex7PR6hDr9L9Mk1xM9e1J3845w2EjuMhy3GUz",
  "key4": "2Knuzt6Kranyzn1pevGkaLgUDmVSQ2Mwy243Ki5Mg2r5JVJzAwZJBgHFkZosDJ7cwKeG7P5Vrrdygi1VXDUAGVXM",
  "key5": "2uDVFERUpaYfdxZwHkvkDLs8HZJ1PVu6gqcXuY2YtHWkWpLt9p4DwuTfbQtRLGF6zzAkPZnthGsbGHeNriNfzVpb",
  "key6": "3TfnDvjyzqJ6iB2WGuAhhcWNdrRWxWv7b7oqnRX4shRGSfcPXHBoMiqyTXMMpGhtd7CmhmHMGeged9f6iWfjcTYZ",
  "key7": "3F4ScjyScMmH6nXCUt6JgAbAUHSL8UyJuEfMCuAwrfuUAgLr2VQgeHE32SbcnMoUbpfNppo7F13cNREQXNRqfBwL",
  "key8": "65XFfZecvxn9CFQqMKLq1HTobH8gkNJbXJZkLnzAcUm4BNYWt6qdbEKNeYQ8PL6GKQegY9UYMr5qfZC6hv2z9UKf",
  "key9": "gmqQfDSbzCP4Fhry5WY13H5No83EQn7ETTzLiU1D7hc91x7f5ntdvPSh8H718mzk2xuXYmMZzJNfEHzDRRpfiMx",
  "key10": "TbqVGXpVMGmTErZ5qidgXPWX1z1oH7Mu5Qu84HFC4LMYChiEHtDd8am7YRe3tPkEdkGKV8s3e2n79xF3RnDxbRY",
  "key11": "44JrgayfjiPsMYxfzoxMZjdZ51zerZLMNv6cgi29EoiZrtwKD6Dzb7ko82YjAmBV6HCxiQHv2dWk9tUxyDaQwmPz",
  "key12": "3UEMXPwgaU1AocVB8HMX2qmTBfCpCKi2US67KYn7qYJn5Fz78Je6tP1UsVEHve8g8vLK3c1jEF2BV2P49aPoynjT",
  "key13": "2TMENfKVboGx9dGcsT1K9AzWMg8UQFJYiUsu9u8t2fn9xFPmcryBZLnRoNthVPcqet49DBTuYVt4s55u5aTAgxvA",
  "key14": "5PF2Dak3uTDKhqnUTukKYmALJU5cy1uqmurmAVc3GrGWqk2beZ6dMeF4TY4P3bduMWsEgLBJwdujuHr29GUSKvvQ",
  "key15": "2nrAKkEM3Ta8igXvygk8F8CWzL7HQNECzkKUiB3eWrELJ68X2rnYWMo8YxvksYdeAiaAyvr9brES793BXeMfjvMw",
  "key16": "2hd6Eio67ck3hkGoq6zVDPi6LR7wsbb8ZMSDYvA4VgLZpMHoZ8rqTCj5kByJ4KmaBMQNRVuVRK4zLiVgC95nZ7cj",
  "key17": "25rN1Bx12jBoVwrqruFSrhCMofffcUkcHTa2xKR9HpUs9kwZzL5e4cLQ7cDTMNNVgVaEGX78U6GGfTfQiaM3G5yM",
  "key18": "2oRWpg7tfsNRndEipeSw14NnQUqGoyZorrdcqK1KbuKGZdhSsP7BGnjTaWVGuW1cMvXHYgbkpSwcw2VE9gRE3KRp",
  "key19": "5gbzo4V3GFqhtt9kSRArHLpvVkyFoVb9t6PnsTD7xTshxYiWgRSW9DZrMpXmA5vbQYgoGRG841f6PNXEpFJ4YKrY",
  "key20": "459ezfjgUTzxHG4RzKBCPGuRHf6pfR3hFPosYYFYCmgk8gZeg9o2118nfuv6d4PNGoXTL61FepUg5bRDBdNtKYho",
  "key21": "39w6xUL4pvb8wvqf1cqHK5Wradgr2b3izzaBmjJpEAtpnsSAqktaBFzejadyp4TrkZK4LSnHJi9vKMx72UiotZUk",
  "key22": "459EffrKJr1jNYjNdowy8rzAwWhWJkqq98zUe5sXWZHuJ5ocTQcbqH2NG2HtWp4JWrU9jpKHggaDvTcQFUPeNpSk",
  "key23": "5ap3aQ36aRKe38Am3XY1zcA7p7oHXbTS1SyVUVSMwzyKZfUoPcRqTKCSyR3kyTfaA1HRZJoz7k3TnX4arHpKKXmp",
  "key24": "2tq3oLgspt9Jk5faDLGVvsewtxW4KfUxhw9XAE4x4QeDWfFpJfgfBWrv4LGnTQWdb1Accr5x1yAzBEQsGsBZqXYA",
  "key25": "4kkyZJin5MtcxkQsPhZpPuX1sBRwbACSoQE4NeHm8b3Jk9gGKzya8j9AnZji5G2qqkeZy4UNVY5NqkEpk283VL5W",
  "key26": "3VdEaLwFn9ipUyo5V9xJJRnQiMA5gZhaxf1DKteRx3hB9YDbi3vyL1fZEtASYuPrs4dAQzN11VeYQV3VCH5xwJee",
  "key27": "4r189UHXbxCWcQt4yMzSpVNNyh8mNxv2u1V7X8b836gPhUNg8bQybemaQkywdz7wfhzM8YzYLVb5BmeqA2bJ5Jkt",
  "key28": "KPHtnaodSdVnY8hPXkyK5Ekmx8yu1GbGkUbEBtgn1PpxRmU9wzAPqGWRB9Q7wTXHr66JDHSPbNRVDQnDB4hfj7e",
  "key29": "2akCsB61wiqpWooT46MC1PhdeMawibYFAQZaFPyoCQ2Q5gCY5fqWP9NfLMLmzxMRPhrtnq6VkcUoHd7RFgeFAine",
  "key30": "4CrGbmFfs1XAh3niPmwheMe9Vbhgi8VQj3tQ8Temx25xqvveW1UPckZ2qKV7xfVZtWaB8bjhE56tGeA9zoPq5AFY",
  "key31": "398vYauB3ij6vG9mc4UDbeqSE6SCPW8DJLoZKRAwpsHjt3AaiUqRBNacyjChQdzHRcEk77EF76WNgA9nqCZ5NwBP",
  "key32": "ZTCX7hFu6F7mMmzfUuUBwutwqhcTrAm6sNyfwSYohygv3WzByR8YvgiucRuf8bmzmg5s4ARPy1naYGX4qXNfYxS",
  "key33": "4J4TtwYbfW4r9rvQmzqCtrcRkJx22PdzoZTS77FPXeQfwRRhqosQJYAba7EySd4EmDwS4My2ZGbZ5MghKSFW5EgD",
  "key34": "4s7s439hStYoRt182TGn8cLnAp8tgesnuVc1wYbLhMv5SsxQnP8sDcALd5PsLwwLiSGgzRoRHjDLZhia2MMu3mdu",
  "key35": "2VHwnndzPzYBM6gbuaKhnTRe1Qy1xBKcb6osLN7geV8P3J7JGmvHiagxbeQVE6GiYHEkEnz9hBycm9wZxbqiHg1A",
  "key36": "4nWPL5ovqUiJhEhUvcNecHfmqYi6ctiEuAhAUajCt84P14NXxjA31SjCQszx7TWb4ppb6iAtudxkWN9kGLBMHnXp",
  "key37": "3L4iGvGyej1XgpmU3CR4JsgnHULhVwrR91nNwERPXkoZaRv9EoSKuUUCR46EH3Qbn1zuydRAUDzQWc8on8duijsJ",
  "key38": "2gemXcjJYKiaotxwXRek5ak41bR6FUGjVjWYEav7m7oHNLtuyNJ2QkymNxivLUrKmKJAJaYserNGUJWKLysLTeaC",
  "key39": "4R6MuK23xKnSeYYhgb43BLBJPg9GMzwrGp9d8vfioLm7de3QP6QSL8ZewpJf5sRrnySK2CwYJgbdjP6qGiQsabYA",
  "key40": "4qdk5h56NPmb19JpvEW2XwGZCueEmZ8EYuK94zLZMQtNgjK8LakK5F71wxQKpZeLop6T3M9i8tdK2KiXgGYA27Y4",
  "key41": "QvAzN3hv2pVQHiKmvYEZVYt2ssBPaWgDbSjbfHb49AVjZ4PdTfSJ9F1Tv9ayRgf3NG5riUMqcrbfesixuPCiyFr"
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
