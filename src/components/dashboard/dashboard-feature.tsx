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
    "d3BNc7YxA9AbqYYLd6gQ9GE5r8NAk4DH9AXKwEGANV3w5bWyUGTsryRGnpsBEdxEjCswUBiDXDPWKQGNew1Eokc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yNYFfwKDZY7xuXCpE2GSTz2PtVK8SA4yXTz7G81p4TuCQ6eo1DvYyDQV87gbY4KHkF8X2VADT3rLd9Etm2NAjJW",
  "key1": "hzwCLAT3SQneqPdubDy2Hw5gop4sStDuozqXJCvvWmaXjUYXfrMm8upeADWS73HzJg7H3uKv6Ntwswpok1XMwYg",
  "key2": "3WQ5PPreTEQ8R6QJkVkcmtHJW9727qDd5ubajnyjDANEFShaCUk5yYGhr6rqpwwWw9vsYPsaYHUiiYHadKTQd2um",
  "key3": "3cJimWwE3K9dGpGdR4R8Jgvwj6qVPzgzSLfb32HYTpeL9FdGedL8775ymosntnHRHPKCmjWiZ4kpB2WuLwcNwXGH",
  "key4": "4z1G3yRWUBmGZ1yVdoG4q4egvdMwSBtWhR35NVWu83r3bTJndeG9KvzngWWbw9a9UEJgSMizfPytGycnG7i2avYn",
  "key5": "53SVChni8wYYaFHg3L8xndeM7qtLfCQyKShwYYvhN1NVjyo17iLxx3kRCtk6rhpYf3EFD5Zn1WuxFtdnN5G1fXKb",
  "key6": "56KVHmNAqiBTz1VtEZbmdRap1V8yyBjEZoKZhTXHkpLuJcAz3EQ57JfgmVrB3CEzhM6XSY5st7MravDJzcvEr9Be",
  "key7": "51yphEqP8AyyRqqbNWH7txmW77GvJDzsVzoDMz2iZAZW3dUBfZnWBNFF6kx77tTxcKC6b33vTWMS2ksYn2pgvXoL",
  "key8": "4agFzuLC32GNakg1f9ASWpkQVrjuHZNhNNzzLk6GdZbtUqpriweDyWgd9gCCexfajQPxB7RWxawkVv6e2pvd4m7L",
  "key9": "5kH2iU3WArfphCtTR3286KrRfTQp9g3iwp45eTJ56DBnLYPML58SowuuDmUQBscekYJ8Z7dD32g3quhNJnmZjbiz",
  "key10": "3sh13z4SAicdu7EJkuCXQkLtoSX8Sae2z7LtoQqUH2i8AazCNE6kWCc87jPASfGsyEh1i7YMfAtB8zBJmy5jRdQm",
  "key11": "5p6Nyvwb4tQh39jWJS3S9dKx43xD1B1biFamyQYgBTBimMcs6rg4qNsyYQcvF3WfVywFEdFREacaVmvdqtJ7E4r1",
  "key12": "3f9XNmhvLUmUzyHS2MnL7Fvev7TFWH2sTGcUhGEwm9KZKaP9cRR5pmmzsFTshWDdMWzTxa1P6M55Nk6sph5PJjdK",
  "key13": "3sPcgvQjzz5Tp3AixUwEAVuquCfPePJhXWYubNfzNCPhMgAtFiJc5aBvyZXsXHnpkqsWSZc1W2rK9WidQ9dn3NVZ",
  "key14": "3rn9HaKHHtXok2PQAmVBXhyF4qjM6nJmBazWU4YUGTtXYp7wsQKPXYVJb1zMLCChKNXBCtd3WQc5uqpruPUJwnr4",
  "key15": "5pYpobkMtbankXgjYmALf4ggaob6ZDXUCnai4Jogpa5Abr5QdoBKndAfhCGse2QdoFFXGaddE3EyPFPVjLSoR5Gp",
  "key16": "27NhPAuNgHt7U256i8QSoLY9qeecVodSmvboPQNtSVpVxBgXUBoZYDDA9NrajCqFoNBHzGNmGutFqn9e3riZqwmL",
  "key17": "4Rjz1ZABVZAw9c37aCHidDQp2Qv3kBSkbCnXQN6CqbUKcTFaEqQWiiAB1jamQooXJdE4WRBnYVHmY2bShwHoNsQg",
  "key18": "5JrPxLdQ49LjbsFMkhfXo5BMvU3rxTxBoYP4GJr2Fqw5j6rvFzVfU15bMVzttbbDsd4fJ9wBUWQFrkm1gmLUvqJG",
  "key19": "4ThnJ3NmdRa9DZHPqMme4cmXy6sZKnUi7uDdJgAmY3tzPBEXnYDrV9FuszsnhtVPakj2LWXwvMnXqzpe9Z5SG11T",
  "key20": "4SFtSSENwyWrWbMVzWAgX8sePGp5wkNQoQQpqUjNswwx8zT2Een5qFpyYjmrpeuPFDGtSQyaXmQTwunuz482hisS",
  "key21": "5nxicMo4HTaENqPk6YoXbJMKDVXM9PGRNfae27k6cW3HTDbxfN7iSEPhdpNiy9VqbLaPCBJnw5Z6mh572bD7cs4h",
  "key22": "idbBMWNAqBvtvxdZGa97SM9B8n7PLMP5rKqzLHuptG9QwzK3tusJfNQ2hGYnyZbpLo72UutL9dYnbneNjx2Fzo7",
  "key23": "291gzoUw7B9UBWX2kBg61DBKfwX21aCQbMazuMyQFdoYtFV9p4uvncpN575Bt8dvv2xuok55c3KBD1t5Tk74rg6Z",
  "key24": "3yyKL931MNJ9UPV9VmAeYDoFPnTiLnS8JfExguAMTKXTqXPicGVQKLSHvqJATyZG7dGoiHZSg6Vo5vEwGSKco9qL",
  "key25": "2qsuF8SkjbZyiUkyTc1j9GWdARZda16tHxLh5pVAsviTxUe7xWnD4KhwezniQtjwAEVk8JcQmufbXVmaGs3Zv14W",
  "key26": "5ozXcuYneRtaHWMdcQd4HRqT9e2ZmHprFf4xUw1eCAyJKnMFeEUgAMDRjoGNhXAxbWNACq8txnW5URBeHJnQo9vo",
  "key27": "5ApX43eBe1gLJ3L9DeiGizpNKKVK5K6z6JpLCtWNqV74XGHtVR2LJ8Ls3PB68Uwdpe7aWZ9KHHGXSpD7jq3MBpEU",
  "key28": "2g7sKqE1LAiKLcx98BHienEXXNwffJMW1GGee3x9ctmy3R8EpTpQXQ96fXG1oU9Rid6gjidaCQXmRiq6ctURiRwj",
  "key29": "3GtuAkXQPTHTgysESjJk3jpHrdEJRFKBYb3niAxhDzc6poFWhMehR1CdqGnQuf6MubxWXkbPhTe843Y9h7wjT5LG",
  "key30": "2dWscFkwxq5EUKwFEYT7u4FaSh6kvwtC1Hqqpw5mQQsqQV9fsEk1P2tXH1emJ4pA5eMhAwzDJDqnpHUPiChch6sG",
  "key31": "5tmEnqLSvPswUBkhdHXYEiwgEdJFGWJwarjTeuv1ddeTXUeEMukikLNVC79UjA3dWQU3MdvTSxBDGUY6VVXwGaUD",
  "key32": "5YD51tKJnFH1bRve7Li2yJrppxrbuKysqGLNy71EYDtsgJnfqTo6pcH9gfF2rNXnbGu1tK7JHphzq6ABox1EuFBL",
  "key33": "28sNVA7bL6uUCN5Fs3XctLvtnT6KVf9tfX4G9jCtdLGfvdPDo4t1FqAy1CXyRQupad8cpnWHdT3Re1xhZwbvsoTe",
  "key34": "5mq159e8MXeZVJose7aZfMURtVdAUJP1BcfodphPQrpXmnTQarjjwHLjMhwU8mpn48Gv8L16j1SbA4dcD2VtXqMg",
  "key35": "2Vmd8RoQfFpgQz3vNLw5Gx1chs2pjNERLYikyN8kP2WeB79mBVhRT7HH1JmPpiEgSPePfvWrwYm9MRNet4qMVcvX",
  "key36": "3RweiZTwNgpa8QKXdPzejWSTmSY1PqC19cMtuVySfThJoxBZr4a5sdUgbFJgMomiLGLwAh7FXDT7r6NHfVFwArHT",
  "key37": "2374xE63yRBey6mie1WZHF3jmdqxrP3CCjkjJEzZvdZ3irYZRkGXaKQ8yqbMDthJCoKSpqNMFRyjwm45P5EoYpmH",
  "key38": "3CiH2m3e1XM2Bz27RMzvhaKU5BcNssjsSGP7PCVzVgpvHSCNgSVkyjMhBVPxkmckPiwuvENGuSVSS57HfYqMGp8h",
  "key39": "2xMYwQ8EUMJKz62QvnVBpn2rybAzuw75XHEnf396sbm5pyu4GtvtmqVUazN6s51mBLXjt89swVedX9TCAt6xZSTp",
  "key40": "3gKd3yD9RTSLJ95SXNiyP8X4qiyTKBxjJwXU7XobBk67X4RDwQWhoEpVyXH8n8qTy9MMRyh86V3uL9Ff9L9UVv3D",
  "key41": "4gh2d1cods5hTapRj67fiBahcmBnnXHED97St7NfXA5Km9KxKGuSdLpPEF9mkiLYwDhLrpzqUeerPw1CEQobUzY3",
  "key42": "3AMma81iXMjafRYdHZNPXXChJRPLRn7ip8x6UTN2Z65bqFLbjhPSJJTNvEjrT3XcvtHAHJu4JxWb9fAbtZ2QfjHk",
  "key43": "4FZEuG3L6vH2SWjcXRtCEMtmLt66ckBJhskqe5PAf9sqxfXtX8qbhYwC9jdZjFZmWpKEnLoJKzFrTozmu35zt3HH",
  "key44": "2VtEYPGES9kBfWB5XSAVNg2BfJe4Kh58darHqJx1avaPRWiRNX9E4eWKKgxgftyQJ4WeBupeCnKapmGe7drFqnXJ",
  "key45": "UrLLVHTXv2k1598PugCZQzmwfFFx4s72omUbL4V4xLExVin8gK5FjPfXdcC63xZoLRCii43Hn7JzqAyKo1mCcQu",
  "key46": "4LVvdmCHv4k33s6HcdYpH1ndtfizupGPyH3CbmJKvHPVV6FsexH5C7K7p4kat3TVaqWMyzWArfXDzYby6QaSnyhR"
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
