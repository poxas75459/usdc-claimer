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
    "2NrpnzhHUegZbNBEKtywnSNe3gCgVAh64q3QT16VgzUrrAc8MUtMfdaUP1kQGFPpKxn7jphnjnSAd5HG98UiCmKg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kb8U5RG58CFQcmvKfrTKNHTacf5ZaFksptuk5MdxkB631hQfcGwcUuLZsxZPELuvoQs2hvT2Gh3YwqbNzxjsBY1",
  "key1": "5BNYbBvMwF5Zx6nVFPNnFGBPtk4ckHuM3yCdDJbPEcRswXw65UV1WWSTtKQoB1p8sdk6vTtLWENCNdR6feEjFARz",
  "key2": "4DCZXGiRLF93EmAYurcYXiLveVU1ndM3pFSLWQucP47jY2vK7VSyb9fVbq6yPoMJcFkhZSo1prgADsSJKnETfTne",
  "key3": "2m1y9CqPyrmABA48ttmej4MePv79N5udKj6YBjbcAi8bpgwFi5ncRXU8eUdMuskpSRQJD7TXayDjgXv7B27Th4y1",
  "key4": "5tGKz4SWMg8tqkh6MtpDrgMwH5rLHyPsG3maXBJneXTCrERyS9fPsnicM8coHWE1MiduxWx1Skv8Em7B1XzoKKPJ",
  "key5": "5e6oHYu2RheJHcuNTLaV7ZKKryhmw6iYj83iFStdDk7KPEVnXDQaw1sQKXNCfE1eg62PceTDWQjaRigjyZAsQHQB",
  "key6": "5uvdikaM2rEBVVNRRPUeAzR3o4PtkBwGCCguY5yLRzB5gjUcducu83L5mKYtUAhZxyLt7nA7WHc6nmCnXaqDakeM",
  "key7": "59ctUj666dkhJQVhn7YcYM2Dn9XH36F3SqRXUvRXh7oGAjC35jDg65RaRRPTf8Cq5X2kXEiWunjXWjZc4FFwSvD5",
  "key8": "386m3nEGY93V7EwTg5aqvkqzhZZH9A6H3ay9Ss4XgKiUh5rRzA1jVxy5uCvkNrfopUjwBZzDG9v645CDZv2j6MFR",
  "key9": "XdU5ViC9a65Uae9H357QN7JfQBetpaoBfNLcj271p8vcGN5jZPScGwsf1K5eUxCKg9sC694TtjoTSi1moaNADet",
  "key10": "3assB7Dsgd5iPKphxFrPKhnhtq5i7WxrPbtCACb9Gj39517fq8h5BNK8NwvBeb9PsR9dVAcqzqSpJpA4UCE6H2Jv",
  "key11": "SrcKHPGxxuD6YF7qJdQcLeUS93w6FvUTJH8sfBKUw5CbyUrxLuLVAeuX5GhigXPwoz2jmGXjaSUEmDkA3BZ3Lca",
  "key12": "4Juju7eR4iFVeN5fg8CGrbPyeu69s9vP81JEm2L6djDauHAaAG5ktb3Nvv7LHTDhKFULyuo8GbbFxMxo4gF5EyQ2",
  "key13": "2U7UgU73TKW7JxfK7xBjJ87mY7kfW5Abg5c7coJ3JMjZwZAmtfRhV76y3QPAVU4FpYawPbr1DMzHH4GD9PYjBUvU",
  "key14": "3UruHeAZuXs8w6FX1nNFk3Cdhgw94Ri5mj8rjSLKJniUAfzHC2N7yh9mYthEZPeBqwPASMcEHV5wCswLxpd3Qm5j",
  "key15": "APmUvKpHLzCqftd1teEKFoEUX1ks9CZBrok4oyTTX8Fb1meBa5rcGi8yrjo4DysYiQnRnAkBm4fKo6pdYRnJum3",
  "key16": "4AgbXbmhSgFRLpvfRRhcxVguZPH44XiFf3u2f4r2F34rxTh8b4S3TraAbuucDX6GNjget366ksx7hPf2A3uPQokx",
  "key17": "5evdKWRVTgbYUTNrbPoRxSDGi4SePM49FWnaGJihiwZhxDRHDAcPfY4QJHP3w3wp69Y7qxDXaYdCr8MfMmrgBEb7",
  "key18": "4Gh3x7Q63MRnQWHxCaV8LLdLzDquN8LMq1NAQBEYRGpdnCMQ5qGWo9PvTcEYfZkZ4WbzVvtjdBVpX3pkMkuyD6uq",
  "key19": "4VcmzmeQtekTVEpXjbcD3HbuA2iKN7m91x7NRfY3WdcPdg7QZZvnW8ehCXKwNqPsiNUSitqUy8b5mkTbJPq1Bft3",
  "key20": "4fdYNTdkk34GWWDpt4zGBkd3AnhdP52o7nbLYgFddVGyjYpgdxDapzvxSRB3bHXdDEMHtP8SAHdwSfPZByTbTppM",
  "key21": "3vqCnnTEfQLiaxM3nMoj87C4neZcRXG3hv6fpqcsk7LMGvxsrKujMqxgn9efVnX7wNNbu2fyu8Wt6nHk4d5zTBYg",
  "key22": "5RPXjFLBY7XvFYtfauZjugWmcSM5V1qt83qjKEabAaav8ECuQb2x5QLDtL2TCG5JCMNVFES7TrY5aSyfidM5is6w",
  "key23": "29SrYodstLM1smVqoRWAugD8JvxDJC8PET8oH4WRmf6FgpL6HRJiXRALSVa9RWK6fHLHngqhqWBeg6jSYanPTKHF",
  "key24": "3ZtAKN7j2L2cJrZEvDadskqwJpiTMvPaXQn7v3cAbiW9X5dyZRm8U3ne3W8wZ8yESYNaSDhB1CAnfKZhqnU9xL72",
  "key25": "3yASgvcX1PhxA781izkoPmY3r8bVbNfV1L2CsrVuApvrmUFE87Lw46vzq7egB6UaQmdCe5S8gGL3xoGhVVQb5xK3",
  "key26": "3J2AzffbnH2Gohy9a5HCouSWW9Pu3AiZuBGfR8RSvzdKYzvAuRJuhu1wbHgNCPGLWCdejLJ8481pM4PKMnX6GUAj",
  "key27": "8JLoazQepYRF1hN3sWv1Q1qxxSGA8WDh2m18ispEu2YPQqbLMYh87DDzgE9a1s551eWhsBg4DLseLJTawQXpePF",
  "key28": "2Dr75xzfFonwRgf4serVMmbjUtE9fc7esH2vtmeM96LtctqEysZZYq6csk622wVqr83TA4nM98PtkVeHfFV2jxQ2",
  "key29": "2fWe3824eYwNhe851qGCKH2sbUZJWv9EqzWAs1jYAccYXX52K7GEqmzC2QS2rbZ1pArgYdGb9fUsXAg888MoSY1m",
  "key30": "36NMWpPrAHSF2MZZ4e3pt5X1fjgmXGHkAuZ1QrthVmC1kuZVVH8whhZmmi9oPAXL3n8Akaqmn5aPSKu5tYCA8bdQ",
  "key31": "2jkK7zFsH3S4b1DimPwkmMFwgVGbZUuTbS748EgPpiR6nZ7PxM76K1mYYkrtcbAXTBXN6cLhSz1yJPuqdi1YhB4Y",
  "key32": "5ZTMQU311mxwW5YrGYkCqsRQj9g7x6CETeFDGcGayLZdAyjmFGg6HcaftpMHGz2kwMPZVcZgMPyf1eGk639E9R8e",
  "key33": "4QSPcmdbC3RmjUcP3oZSJh5rDnUR1v1sPb65z8AE5wWdyk1jdyp5yh5ksc2H4NpsQJLoXRdXy8uyTm2JqEs5fv1U",
  "key34": "3bthHwheqs6pDzJSEqgs4Qj4kVJKpJLkbJg5k7cKF3cGW2pcJpTgi4pAfQwDmEUWHC9e2PeZefEbDLj9PqG1KFYg",
  "key35": "7WoszEfL7DyFjcZ9kNEP1aickfDMMUz9qxEPLFJg6NkLKH5usW6GkPFVg9WkVY9Brnt34vSjju1VDUzUfUrhKTR",
  "key36": "3Cc9dPTWQ6vfkgAUeh4kPFgre7e5fyoy5QWhRwuFwXrVBUzzP452HCKtTMd1BqX6ntqtD7UNgamDMZrh1q2BabBj",
  "key37": "3SY3QfSRLEmt89TsTzQtiNzefv8hT9UXWhD9AoLUpwAgdavpRrFFqUndb7sAswSLTGsmA9LBVfJ3Ny3Lze4o26Ta",
  "key38": "5eaMsG37JujApQDj8V77f3jLAJ2bsboaeyoqcJA7VhVjQweuYsWpsKh5a1Tt3pbdQCAdvLxo58HXCrPBRwdo2HR6",
  "key39": "647bGyrnX3gUpkVZdCvVg2WkT5QsnGo1asWnWVrjKkSqkEcK2ZEjk1KXbBdWNNVZ7cb2NCxSnGtATukRoMUTn1FJ",
  "key40": "4BztG5W3orN1A9XxjfXo3D3sU62oAizYffgwwxW63f5rRJKNEX6qrr5BeJWuEXBAM8smhH5CiAcyujjJKvan9ZMd"
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
