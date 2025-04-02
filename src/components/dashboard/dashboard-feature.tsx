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
    "4bo8vioh7XnnhGPw2YVB7Mz8WLkrnJSXiheWPLU28UTZnCTycM3yRHD1of1n3p6KNKYDEPjy4myAFsVRyLjrDkC5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sVHzes1B9MrwUJuT4YutVGJaeJqtCLTu1ruEu4f4JEALAm5aDeLYFJDErWiaw1FCiuUDLUaKn78qgcogJtFq16",
  "key1": "4WoiWa5TrmGdgDfp8fUShB5ZbGj2K4YLJkYA6b3rJ9VHsHYHSYNnxneEKXW9GBvx5NRimi8tNrvtJamFZsq6jFA4",
  "key2": "rGNDQJJD3vrcPz7fuCrH6g4Su6cyrn1LWuQc7G3Q9NddX2ETmo57Sid5YQZbwFaUBmdh1vgGwukZ2bys3J9XcS8",
  "key3": "YrK1ruf5YqKJmza81wyqHXtw35LLLeCo2GsrcrevCKTLfcGCAVsajpQdcPnThh788LZY4ZiM7EhanPJE9ixJRZG",
  "key4": "2YXewXHfkQThqdju42q2L5264Z6TMBrXeWTch8JixiwJwKPRm3jbmFusSNFCRqRdBr1sGBJpRuaUorbf2a1qezMd",
  "key5": "5ihbo4mMAQNYVyqoUKaitQDP3n2Cs9LnTLf4De2zY8GfJALN3958sXG7je4oCE4axQUWh77RyQKcFAPSHfJ1jf8F",
  "key6": "2iYAdJeaf8zNRwkrbi1mhyTh6en4vJmCxJtotFviseJ7ZtXnx6UMhZQSKBovHKvKVwNFZ6nLAy3gtD1EMFDxV23L",
  "key7": "413QsUd2B2YBpfZdBMg1Pu3v8edgphckp6zo7G4cVjaF4LhTQcwmh6n2KEwC1bYKpahFxUGBdeMz28Z796snnNFp",
  "key8": "4SgFvYdpSPWDfwqeq6bLMBMmsczUmfMt9SQFwnCnQh8qNcf7bKagRuKzHbfS3Ljidt3yATVSiEhSRFVvGAteWd53",
  "key9": "ttkk2zRkLb3LVt6wvC3kTCu7ieiYvEXu1ieXQhWZ9knJiNJXCgdKpzQPUX1XKGMMkzsUmu6X9QcMG9YThVFZiKF",
  "key10": "51oTBVqatGN3Vyj378AKrWuXnfseJKTYJcfVpvwKzfJnvDoCAZvJzbXVtHmZPSpoPrLPtcDxSKB1wK3ChZPCJsm5",
  "key11": "3SUDDm4yS9pxLTBavTm1nq2n4AFqCSqx1TCo8FqH2ZvSAEhL37cftCqSwrPYAxdMuVfRsu6r2BDLJ5h1xEBJj564",
  "key12": "4yT5fEGCoUAgXVRrW26D4z5uki2DXioJj15oCFUVht9uNB1tEBNg19fswXSBFh4pYx3a1M1djhJk48V2rtHtX1wC",
  "key13": "5VMHVzrBxASVktjeTtEkh8HZ8Hh4ksqphbQ6Hknfdmvhb8eSBK3R96qnChJcsZZNgnoYnApDhsYhUSpSkWdFJLmr",
  "key14": "3zirMu6UuAThqvTuF5YrqcCSZKwktPmghZJawgB6CtVFBKfQYJLWAcBC4JRMWqRwBmFyyF7Bk41AAiL1aDn8MaRT",
  "key15": "roK1YrGFUqzL3QBNy5GUxghSJPBEQSm1UWq4Ba1GJxJnTFs4SH5HAkDwjUKZy1qABTjUjgL6cR9rqyrWAb3dcD7",
  "key16": "2QzCZUxoeHLaCye5sCj2FQmxhDxTLNeTbLeFGKpzdmsbAN85Qv4TWmZ8SWVWsThe4NW5BnyM72TcaN7hY8Db1kc1",
  "key17": "2X1jrM3iFYvfsf4rxhYvEv3aU5yGcGBDRLDEJ2CXZKv4y6EjsXuYjxaw9vA79xvqnsxEUJtddEHjrA3vxwndoWLh",
  "key18": "54Lvqad9CvWRuWPs16anc4LWZKK18PmzkFrj4RwqKePE5qtfgB62CBFwGbdyM3J3j7RWWMByaoh5dF88s2agKpWm",
  "key19": "2G5BH4qNhWVX1Zavq8PjKnSntFpp2MFVA5shAAvnDemroaTv5CY3Hy9CcUu3wMrVBnrR2qRJPEfhvjBZzMFFJYb5",
  "key20": "3edm77Rt8za6bjZiBzT6BGbubj21uzPQEs42HxSW4fwkfzsUgnFM9xiBfaaE5PPz4MaLeUFNA9Pekb3RKpzqHra",
  "key21": "4Z7EGMnzR93gQ5FfT6Ht48D7xcUCCKNNN6kRLbmSvY1LbUEFgLHoi48sX8gXMKJbAbjYHdwjz8DMk6pQRXgoauav",
  "key22": "5t5WVhfgDrLJtniDUtfALCV4VF48wJPC2M7wfSsJhe6rc61jF4cazQm4S7bCUoqVDCu3TsGdvDFew3dNWdj8xdyM",
  "key23": "RGJLiPG6M8RPxLeW48aHQAdV95WDHDDxbBEEVb1F4eXj4sc6DpAE6JzFnBAfYLcoEt8aX6LoWgwGFrDHspSL2f6",
  "key24": "3aFv1Shd47RHLqgxv4bUaV34JsBrxCpVxZdia3ibqw1psKtEgMxgMTpkvXotpeXQGBMPLJWEQBKQ6y4HqBUHEhgS",
  "key25": "5vxLc3q98hDZPjYEeMtxAbebGJuVdrTCXHLHNhUatfD5VqPn3EjtA8hxajYfd1ELEar5meU3C7o7QqA8ahtZZ1M2",
  "key26": "3irZodnUtG4m5kWTpM1PFT4yQCyXTSqFD33muMjEd24JgiaDVMFXUnBKV8XEQgvfUgFkSMNF84JWrNYaHR8P9KXu",
  "key27": "5adjQt1kzXoV7Th9r2KFw4ivquuLew3kvyjaqb2JcRrV8A7qHLVwp8H5Np3DmdcSo4gc6wPGaGrGTL776i4NhYqt",
  "key28": "59zRSJRHjmLDqUbk2GeT3ZiGduqR39LCtwpkYhcZrHYxsMzpkMMmB1c3448ZXRbmedXZwb47QhiNiy84wWf4nAAw",
  "key29": "2bxys2iSREGMjxts4QAKE6vX3WbhgDt5zVhiftePUnN8zaCZwvkocyZyeCkPJivqecZGxaRkjYzMPNg9Dq4h1eRE",
  "key30": "293cEqfFtM4vWAUiMaK57jJjQhi9dGuHmfcgpn3T2CDcGZZtGSwbdah9utz82sSFiMQLejHtiZLZCpDVa7jazT9V",
  "key31": "3YA4HLpKCoeozR5GWNkaFKu6y6M7tUFxksxUeMqkkg5eDF6m8C6dMfjMqCmCtopcQBUjhACNnb6Ya34v6bszDWQf",
  "key32": "5YnMFGoRw55vTtvtrN5FRMCs93rjXggtD3yHP16e1qwWjbokWFkFz4MfrRkTvc9jMzdhVMnu3QjuV9qZf1SeUspY",
  "key33": "39rtgSoGEC7rT36yomHH61uDzmQB13pnhMdFyJ5CYZHwdeJFvPXP65aRum8ftSGTY6XSg7yp9hJ5i7cX3nnBg93q",
  "key34": "2T7eNvrcf4rkDCsagx1tJyn28ZHyoWLNfrLrZwkqgNStXvPaSCNYS7NzrDKREXEHJwvAm2ic48pMGqFaccdajsm6",
  "key35": "3gAUz38MuuVwi34qH1Wtx9JK8EUjw7hK5KLpYE8WvPH2MagitZhjkX3EqgMAPRvdfyxQiGDi7uwnpHs9UW8nSTWF",
  "key36": "XbwyC6xMvoryVmcZs6vwxqGCwHrFADjBmY3R3Sw5GqJYvENoWU1Z4k7keMN7zKeKcfQmAU2zeqeFRgpJ5wQPpGb",
  "key37": "4RarHzzoGmK1A3Qc4g87nczocXwKdJhH472Awyjj57WN5dDwefK1N2wvts1Mhxaf2NTBiciK9YhGFvGpMYnUBwHW",
  "key38": "xcVchP1v2nDqV18ADMWxi2VGN1KQzvcXLqQesJNCerr3XxfPm4y7e2mdTofggmrkeMNbcoQV3Jq7ufKjtzwJJfr",
  "key39": "5PePtBB5kxpYFVCEuLKrtuRLgh3zTf6xqGbEu1GNWH5LWErQD3ZWL5E3CCnR4wEarp6vPZri9nqwmPJJbjfK66Bd",
  "key40": "5aQ8AfKjb14gQDAQXFYvRkwumbLcjPWJGvze4AbJABNuYqL7Dpd6TkuA7takkEEJjQvrRmTJrjUYmqgeoLYrnygF"
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
