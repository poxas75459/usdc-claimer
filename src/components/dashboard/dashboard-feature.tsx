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
    "66GUESKcU1nvSpXUUkSrF1fByyDPq5cinbE6cZ6bWWEauy5SGewx3wUUKdRCVeDA2tuuq638yG3J9rWc65Nfu7dk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zKcvSDVaV2mVq7Wc7b8a1cDCS2PXwUxEcpjA5KAkPqgGKgnnbvaTfduXA81HJUcaAuw1s5ZD9gr82Vt8UdCSohH",
  "key1": "3L9pHMFQ2WcayDzTRVZt8wwuY5nwWh1Gw6dXQLCZeeqkfGziwoHUM6kvbDeJH83yKbiXzR5wyRG6KUjRa91g9Jfh",
  "key2": "2a8wmqCcjuifNAwxMteF4qUAJSBRzdwTrcp5GiqmsCvg9A3rAKF2KwdC9bACx7V5GZgpbMjNS5ELRV5mVQTwd9kM",
  "key3": "2oEFYcD35m9dwK47gR3QZiLNQbexApJP4tPME1PKhvPkXBroMQTzVddzh1NYauaUowNv7fnJigJ4gUtFR2hNmbz2",
  "key4": "2e5xW2agiGWnpzDjiQYoALjfH1BRfGNc17T3wFkavNLKiYNytUbXopXWqXn7G7xcYkFYm1UubcrgRqGXEzZS3VY6",
  "key5": "4AvVrmBgQVZSWnVdSBtG1PCKuL5kunjaHVRzqiv2Suc1uPzahm2mHMQTTS3jjUuRgEB5LTyZMQDi6nJTmM3awZUo",
  "key6": "5jYkCshoXVhT63Ea9oU7z5PJcr36c5kmBdfBF1SCikgPFJXnmmXHvxxmUA5xuC4C1EPS2Qso1iEwgPWcG36opsQb",
  "key7": "4rhLK9DuMMQ6fdUjh7wnNf2re2Hp3MPSZa1H5TRH7p85pskePLzxq1TtsTrXEmKbgXvYRNt3DQ58U8tvQsrLJKAW",
  "key8": "39g6rUubpRhbmpSN1JDi9vBJwvR4YAcVAavwdP7qZ53BnW3Lt6qTXBBtYPkKQxJsYRFNxmto3iGRcDzqHfNxxUUX",
  "key9": "5vLHvxDRBmt8zr9GZX8H3Cnn2avKzjni5SDhUYyQAhsowqa4Qg628QhYJvp2sQAaPXqQ28vEqhnpS4kCMAwNSJxo",
  "key10": "D1QcGS9QGwViUGaLye3pDgCvxbuPayuP33XmKVmo2VmxsyFRGGdknCUhL5pgSZSbftk2E5uWeaFFBFvXLBizZN7",
  "key11": "2psW6p8ZNszRMYZAYi8uYrJgvwrsNw8dXLd7zJQjhPv7Xd4bdJeDWaCvtXYRXbjQBEmaXt49op5mrmWPHEvw6w39",
  "key12": "5WBt9TcRk2ufFS6RERzXohPawXUnE6mz1NWYGwvyuSpsnEfVg6siUQE8FRzmKW6FjJSZcTcVw7yB21H1MUSW7CDD",
  "key13": "4ikATjMv2MBkE1gYnL41ADpcCYnz6raXASPHGKVxeHLWyTmktmxATXtMo75pdPH7w3AgrNe7ExvQX9U7BhC3RKgt",
  "key14": "52ijD9tWLxzAVoupCJU2JuVigKkVVDwteQqYYseS5YBHwMrfgWH6wJm3PpVaNdcCgd4q93uoF2fyk98EoCRAFt5X",
  "key15": "rpsiVq8jcJGPRiyQ13KDgWPtNL74x3FdqLfixU6oXT6PcgWrX2nFe1JSSTzPxsBdvpXSiLVtt6fQefNRBRtfAfG",
  "key16": "2y2XhhPDruDEQytrrUuiKtu8i4xNmtzh1xSAf8jYGb6h5QQqKA7WNVpF9trju2FAGFPhc8cvo4B1ey6tjH8NpNEi",
  "key17": "4ChPh7GMCMoJhwnaWDJWLRR5He2GWq35Ttbt3hqspd4EQ2tQ979U7wjP1uAbUs9Qypq8WYQ3ZDLADg7icZjfLLnD",
  "key18": "5sdqLy4TPM79snSEgwLsGv3d6BMr481TpnXsajFzT2MwUieE5tHRThn4CcUgB3tk6mfBu5ht9zGHsdRH9eSu3Vzt",
  "key19": "4GgEP21pdBd4QoGXLn51mVbLnasznMUj1RiTcb2M2ntppyDjQeuxrGF1KWny2pzaE11gUoLFRWx1DovABht5FnNq",
  "key20": "5oSWVtycYAFqkuTGMBPaUBNdZKhjd6DwwwYKzqBo4KuzWUKi68HgQfTFsn7VtMcfy2HprrnPuh6gcd9HPDCQHY9X",
  "key21": "3ST7VDKp3UJWdxadKririEji8tpABk3YsfGHSjtPhPgTt57tNDSQWADgoBu1WFxAhaD1G7ZXnK9eTJDJzY4rPVuP",
  "key22": "2Q3aR5togMf94MfyuUbebeC5wQY1jGc4owbjHQ4xP6NMmp6xFYPhVgw1goYM3oe3Nk3UVfMgoVuE3ZiY7uXf7f2A",
  "key23": "2oSqYEw7dL6ofz3heNwngKx8kWb1cWbPqDKK8r5Y7oGRLJibgdfybB1Nvuq4YExkF3kJUtbV3XzQVXW1iK37R4yw",
  "key24": "4X7jjPXSHwMwfGceVSzHHdeUAr3UHxGGVaNkAgP7AeipUhX2U1Wb36YE346bZQRdY9GXiynRNEzfDidUBoZLQyrZ",
  "key25": "3suSfxdeuPNDQ4dsRaHpAchU4siSuBBjcsFNtNBiSkgmzmjCEM5Umqua7sxxf4h1EjnYQGobfKGdfXmVEZPaRRc6",
  "key26": "czEXXggEK8G539s9cuhsojDqdoMDt8UqvtgStmAfFibZJdPzN2AUPxCmvb5VD32vwDePGBif5xvrhE1qfKCdHJs"
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
