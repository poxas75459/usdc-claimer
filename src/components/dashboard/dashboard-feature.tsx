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
    "jwbQiLKeJbLvgHWo8yMoK63wKR2kH7L22eRuHF5Bq4cM88mSRxV6XgzWnotk93t2NwEHsLegx83gUvmAAnGD6cY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sqnDsWADqzuDTSeuMsLvzPDczJyXtuZhqnHzYScVAb9fi8RoBotmcDPEtriQHMSDwGDrm47MDoMtBN4CdXqw2JF",
  "key1": "53LrN1nQCEE3ApMpxTaNa4AxPyM8tyiT6kyEQd5oYU9GsJeQUEfx5Tj6A2eNxfCAnLzdGJNyFEw1GZgBmf4atsNW",
  "key2": "26cizzWELixTenWWf3jf47um6LBRgSf4kp527nTw2dHE1x5eZ4kws7HCVwKquc5Cmh76UaMZ9SK38Hi6oEhxurJb",
  "key3": "vMnVoZX87gwkefTnC2mthvxM3zUvdtACnAXCPtvXTjf5Qky2LgJacmxahaCu8byzYhp1QwdzhP2h81q28SAbfFv",
  "key4": "2tz8MShJMey1tUxWenzuMN2NHq8RnZrQChN2xAvv2G5bbiHGFii3YsZoUrSYy9xJJpTud3zXnq3XG5VQLJAdUxYF",
  "key5": "24K5yRWRVgcyQ3tfPGKbT9tjm7HTGFfByV6LqcbAdEGvR5Xx6o3uiWwXwuhtPqwHSFemJ4wBoHkyFBre6K7MyQpR",
  "key6": "5rsoBf86Jqqwvm1HoGvhtNY1kvWMBJiRowAxBzrTetg3tjffL3wyBbT7bknUDDF1REdbZ3B8gkPZjDsERKP5tXA8",
  "key7": "2ui5mv9G6rsqcg7PFJGXza4WL5FScHq6vekY7RPcSj1c2iugN7WJSQESXVvCi1WqgSBrTiHDXBDsMiSZVs8rFYRr",
  "key8": "4Nmviwn2feXouHrFVEncQ2EU6RvX6CKZPMzvqT1jnpVXXSuXrij8ekDVFw4m2Db9KN2ZAkoyQLf8C2m8fCP6B79L",
  "key9": "3DfxZGuTbNL7qKYcDkn4LNLmvvo1wYi74Zm7eNjo5zipnxNfsES7bkwjrsjmsRdxDj9X95aZtuj49NEtXuDKjxCo",
  "key10": "4xMjrQ8d1RkUvWXw8D5AnYmwXQUP6Qk93GzxQnEnwKGVnoLLrhtHCiXL2Sp4tzYxerGQyR7AgCS5D1F47vkyQdhK",
  "key11": "2zQn4JCg78pWVtmvVMVKSbQ6NYMkwEFXh8wBXwkCjyZ222VXDYQ8o9J8BPhAW7SgVQnomWdPLLzSsqVuR8jvTpRL",
  "key12": "2qMRALDQETnE3FnZCh6ay9GZWiumpkeMmZqcYSkZqFhw5CfGbpByWvFPavdoKmDVh7zsgaXASpTAVCkm33aNgrzr",
  "key13": "4KvZjjVYFnnCjkzFxjWcvowkYbAj2hduabud1N7aa2u7cCMLvwsomhNbBpXLLF2FE5bR6evDewEgM9jzZmEioxCW",
  "key14": "5pqwwQ93g1usvqiKWUW52zzgEaaPmGmtJPPgVhQkbGMtKVfYC74NfpctYW3SzjbNw3gayW26pQvnj1wxaU3GBzn5",
  "key15": "57ecUEZLP3HUiN1Ak8DKtkDy7jsBEBKSVRGzu9SW3XdYKfKvyhthsFx6ujQY149TScyn6qq2H5fTDpNBjXsVEyPW",
  "key16": "4ZG1nUJxRm1sXEUvetcq6CJanVRH77DATVkgmiJKabbe7fygL4K3FUGQ9iNEQHpbaft47nmrBMqJ1JRmhuALcUtm",
  "key17": "4bEbQt3mGDyYHf2ezQdHVSP53q62J4iRJPqFgEbLSnb6YEakdE1JR9iQyiVx4swYTkUPNer8uSDMWEGnA15xAmC6",
  "key18": "42VPFSH8yfzVCPi7osj2b4hRS66NpZHk27tjo5MZuvvaegbcsYgq2efG4hRxrXmr44eDZzqJsJiHVCH1KvTwc9wx",
  "key19": "24kGiR6G9JDakEBcweoYrZgtoRL7QHdPJ5aa79C6jsikfwweh5p1TpNQZ8HWzTn7N4zeSjEhDkiznbWzMrKmmVyc",
  "key20": "5Aaaw6dtapgjQA3YqSBt7FQjAE95UxVrzQo17U3fuiYVpTsatAEDqd4egp3dV8sRLDNs2QSsAx5cvMWwFSVeRyzt",
  "key21": "4NJSa2LMugZ7Q9RLyzHt9rddTrHERMXWqsggdYvyXZ4Rp55fkeWzVwTqngsnQFuVShXHrdGALzWs4jG44A9Utbzm",
  "key22": "3aihJT9sXemkDSPx3xgdT7RxiaigPgpSNvG34hrMFGSgtcv5WVmocQXSuXnVrgELU6fLmAA6rt7hu1dqA4PvxhzN",
  "key23": "4h4yuUub6SN61Gdg1pUXeos8fNmvMFVuJ9qnTM5FSyBpaKrVSgKR8naRXHKphKzPFnBUcvneQNP8ZiWUYMiD1bok",
  "key24": "vAAaEP1HLNWsRMyKL7vEUeEKrnfbZyvj3PHAr4UbgPubjstS14bg7TYh7wr8UswhxFjw26M64Bx3oygy98GPdDY",
  "key25": "61uQZAUt3LBRp2e6EE4pkgjTQbJTNkeGRkKWohJMoa5G8SREa4hcWQgzLRzEdUm2wAd7eioBby3X3uKDU5U4FZQ9",
  "key26": "2Pj7qMq1VsWs95i5ffgaQeCGHGA6quaRSgqCuTkTCUzsxuprSEr4ne36tnNVM5b3BRzvmGSY4uZ3QyzAcRaAr8fa",
  "key27": "RzRpGveY4xX1cotck9ukMueuYpz7gLU5CeJ2mEgTWFT7QeqtsHuXUAvba5GtBtbrkpuwto5MRQimwQ5DX53dt5E",
  "key28": "677MwCXGwrnaH6DFRZbohTkV9fmuT5pBSAYxD4a8HkhhaNoWVok17ziuusXe1xpQZq1EWg6VC52SinCQZ18pmku3",
  "key29": "22UHVM2Y5pZgddANTkSAQ8XsBreAbC6XA8br5YMbZ8F21yJsyFerH8iYYYPXWarKxaitBZMjZfYTJsEuhRrNjc1G",
  "key30": "2ELDmWQT9hm3JcaGEXoSv4h5cqmNXB4KTWYb6Ho8hRnkvS7Bw7MRLCp8dRWQ28yr8yEGbikEMmJAz8aBDyHmnkzj",
  "key31": "46TBZHNGUbpJi1DypbTLKrSuz5qL47qgUABFPVX4TKFY2hxTexjefbivMr4GoATr6CvzNbfBWqYNMawEhUb2uLjf",
  "key32": "4b8n3RzxKPzS8mh2p2ySRxMyqMDEJif8GrCFRGGNG55SSvzpD2qVUjomax1dBVCDsb8B8jXTthdjcRSiErHjbYr5",
  "key33": "4kn5Uemoeu3HXQUmgXEGTbamjsH9snxjicP6da3aW3quBswUEW48WZnx3PpYUND8DHxr24URkFGSv91WM5U823h"
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
