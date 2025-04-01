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
    "2Rvc8FijCC1zAVNP44bkuXog2MwUsgsvj5bKsKzh7FGvWCrWFmZe8b1wCfU979GWR1reaVKHVf8Wk4eWJeZVjRDy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YndVJruEsRacqpUsiciyyrT2MU75ByJJF4ASJPY21ANnmfocWDuNSKhSjkRAS7UU2P9u2Jqc2AhjJLNaUhfYzi6",
  "key1": "2vu9RX7533A1g8Xo4o3FDtynbT9odxg2Ri5QUTABpTzDKr5gcvsk9MneqVdKBoUhuDirqxa3SzhfW7iKsMvNBJhT",
  "key2": "AgMcGCuZQHsRRTNLAYUW7JDxVPcxe9HTknZuw7tuBsf2Qp6uU4yg6weZuVhuBak17CL1xaDXaMbBxqMm8iTimFg",
  "key3": "3J4XSowWSXA39J5pdVgKcZdduB1AnHNAUcFhbmJBJpq5oMqGc6QSGpnSEXZf5pNXxpXdGNz9RsgXs39dQehJJAkU",
  "key4": "3PNhJVcoUXLvhm4VJDdJV9xGrRRk2UAnhaoTyJdKdTAxFqa2TtvsE2nczS8ZASZQiFJ4j3MRSB7Fcv9fKtQjaa1S",
  "key5": "rreGe18oWSn6fRNDgtgbHsrVNcrYmuu47C4iRahBfThKntwxChbMrXoq4728oqDb4zVzSimbAHr1BckmNatM71A",
  "key6": "5j4J8QX9E54gSMB3nGabWRTs2bDbTZb6ueJ1Gxf7Zx5F8VWUSHEDjCyAdarzRAJ6gpGmobVvzygWPfbxPrqU4kU3",
  "key7": "62Lgmowz4t2LEeF8qUDbHTiogBNp2eC8iqZAu8tNPgx3nxEJ9uEvmLqXYcrdgtwxL2PPHC43QHLQmiLUQe5nSJxN",
  "key8": "2CVuZWoUxXEHwXSb1HFA5zzakCNd6abrrsmaw2etpyioTH7rjbhWW6NWRsAWv1o3MfnikcGmAooH5xdQ15v3tMwW",
  "key9": "5BqTNyjPy8PBEiPyWFsxAQu3nCBMC7HoLtHTSe3W34sVtb6VKuUpmenH26TuBqXUog1qw2kj54mmALtp4HZfrDbA",
  "key10": "vdfaniikVLKbjL3VxUsPG2vWE5RyvP7Dkf6onzsA8Ztujj72yqfj4PXvHTj1rWLPJShMSNb9x4dSLDWLeQhpT6p",
  "key11": "3YVUjau3TpZNjs2CecHknHZKQiyPXTVDnwPD31r8cRZskkHQqsaSQMSnSHwt7yPBUq1gJXWtfdJVkGrHXfvzEnnY",
  "key12": "3SmP7nejuin5NCyRYLoR13Zax5rfumENCFmyW2epGje7y6prU8dBYJFFx95PQABxiLPhcuMW9YEFjTbZM89qVmKz",
  "key13": "o8MKtNWMKywbFYxfSi7KMWGskYCYpSjbpKGkRSLpzBKLfaqnZf9PrgoRvcSXwUDdki2xtRkrn3qhE41h3iQMmXm",
  "key14": "PASNMKp1drz2P76iJ3rZfShkKagLCdfTRWdReKn7PDZzjXJcSDUNgNH6pvdJqHG5TvPzmTpdSW84pRgeKmsk6wz",
  "key15": "2KQ5omU5bqS9dr37NNNcTxX9oFky1EUh2azwbuma2QXVZMZ9A6Lf5y58XnnyDkC6j7XFuuoSQgxYEDGuyBhsgZcB",
  "key16": "2vEi9APrvcEn5oYoZjMTH9Az2mkuJbr3hcBcm64DV7bLj9yNaiVe67bmHJtimjxtszjJo6Tiw7L1m3g58gLvCq7d",
  "key17": "B4YAj5byJigrLt61Ps1wzV81Bg2QYP5LathDa3oFynFcxAFh95qQTsNBmKRv2z6sfardBARYgVRFdBe78wVf4vP",
  "key18": "2txmnR8kNf2ZrAFaHbwF8V8RhXsSawiPyDC6gKhegbD8tibbTmEC1KAYwKnJGNRXxwKSmgsWTxvLLFcWVNGgAHxy",
  "key19": "3isZDSDgm6vYtDJYZWqakMR7srnDLbYZ5RZfbRhSBChGFEAVxzC7DJnzJHxx66PtdgHimhVmACMggBTRcmgGGxe7",
  "key20": "4L98PhxrLZpMVeu4ruxmxnw1Jm22Q9THitp2r7tG5y57M2yZBGALUH7tJdx9ddcdFDnJwPwwY1QM5Tr1MWK8YCvY",
  "key21": "5NGd6AYBkkPi9o38i6jF2LBEussjLoYqFeXbL299JTsvPKQAsiJCCfLiotQgJrj6EQagkzu47Cw3MhGYZUHpMQi8",
  "key22": "aZjRGfffLqZtatDY9yRQcWjNwW29wCP1t7nS2gwvZFrib6MosTB9DnzGRiNs83M1jVVPQ5DwmCs6NybpXdRdBb6",
  "key23": "37CAa5rXV7FupvtqiVQdmGsZfsVLxbG1eusdVAq4xc9debXumrgBw1RNDpJ9bVMvkg7F4Bm8ybw4P31dY8V9o37S",
  "key24": "2nSNauodAvBx8p2BdKPbjxjEcfzHFG4QiDU8AyJLx8WecU4EPGKTj3SkCSwe1XuRQ8RdYuVeR8ScMbwNJB2ft7Lr",
  "key25": "2SevJE2gGshanGiwAYFWYpw1XBz6T7YiyVXYZ5B8HejpnBhkiY4Gt6bzSoKwEmLqCRefJ88Z38qp3KxfvNLLwiEK",
  "key26": "2jRPeGjqJvpMKNeKXbEh5jLXKBC2PtqpS6LJite8QkqQSPZ7RprAiAJfgwBSbKrn39LZzCFqZRbdjubhhk2fPp6d",
  "key27": "3dYZPbgLyMS8UqRLxkP71PzS3cRQCwCDrjwnmapuFKb5yN3vtVZXgqFm5oFgo1qADNy97fLLWG3QUh2j67RKS8Tz",
  "key28": "4WMh2xstwS2CNR2tDHijny4XhQ3nyTjvH3pznPPuSGJuAbtJbdtcVxjXXmdaPJ76Y36CfnVmhctB9ZomUr9rb24J",
  "key29": "3WgAPPdpwaezx7G9MjsLR9TE8824isv37UcLd2cxPtKoDqTqePsLNn7DXYccFTqCtBPXMyDza29Bte7YJG77EXiz",
  "key30": "65dePJrAwoJsuqJiQGRRkQL5Gc9Rc9ajzkfsS1EpYr8s13bjNfBKztAf1iHYa4VFLARtDJg1RYTR8bhR5py4gsTR",
  "key31": "2jH34Hfwc58ft58C164tzYVfY9comirqam9TpmcDnHiBaBHAXdVKywGEApR9KVDQ5vmX4FFXwpTresemKPYJkYPf",
  "key32": "2BaTWE9wiEvsFwpdHsXWWgRHauWua8ARaFMBCDDvYMU5MpTMNMDojS2HizkTeLvEiZrTNs6vduFPSxD8gq97iHGd",
  "key33": "2ny3YpgQ634YXg8YUVNjbZffdxaHKgQ74tCMrJRUZy9nx2YJt8ccB6Ho2a6ZTGgweiGuKSQv961SJDozXc7BT4wJ",
  "key34": "5RDx1tL6Ej9f3XTV9ppKoeLQj34d1DLCT971i9BoWXW4a1C7TqfHA84JXv8UAh9CKq4ySUPhMt8idojH2eyQcacE",
  "key35": "4zMoa4Uu9MdqL4F4CmcbcsThYLP6ndXXoF6rbtw8cN6L7wmWZbVy3znunpE6FMxoLXibKqr5GdbGShup3Ecfo4Rt",
  "key36": "3LkQmCwsAkq22C7hizBTQ3Dudev6EPebDgDTtENehCegZsoJt2KXLEJZFBWaWyxZTqvEr3A91vqGeF5qV6Ec76wt",
  "key37": "VDQq687iAVA5w2wuep3Kjm6XPP6HiFG81qwDp6nnLwCs1S5LFPwMbSNmQZmsvGQWoQB1hoTTLay4JRec6Pnrhy3",
  "key38": "63zFiPLe3Zpx3WbVyGnSVpLQsx7YSsMnNwMfeDZEpRj1idbfwXK7ixu3RcFBSLP2KNb2asL5yWfgQoh8tRZZvPPi",
  "key39": "3UQ98R4v9qEroZpxvunQ27Pu5vnMkaiN8QT83KoKKh7qULEnZmqRQReKknmKxPJe5vgRznEVxJUFLnGxDNDMoEaF",
  "key40": "26J9t64EGKYEmu6qkiBm9b7Ujnr2jxw3RhMt6ieUHXUqMpgk5rBhYkofRsYJsc4YiNeumV4AeEnSnJYx7ePX5ZNJ",
  "key41": "2NCVt5JoNvwGULDs9ECT2DuCkfUYcmh5c2EaT5aouF4U3XAkW2jSnkSWTFoyD5TE8dMM4a5fvW2HvWvqhX9T5y6a",
  "key42": "4CKuHwfkqgBMBshmCmPkUZfuhqHjFpqUNEtuhD6hwwzBVEeVwaqjz62BDftnNku8CHPZzdqrSaja4kETcukSa6Nj",
  "key43": "3Jq5qJH6QRb3UTzRVMC1ytAfmem2KzrRhMiuVka6MREz3oRGjbp7g8RyPhCAkFvRH4LD3JdFNwaoTrc2ruK4b21u",
  "key44": "3p88zUcLj3VEYP3G4PNtoFVqnD4iJrvKMVwsCmJg8oPcSBFHKtZgrUxkTroZ4YBt5zqFTn1o5bKkhaVg71weMEs9",
  "key45": "3Zts6WdhUGmyzN5rLMhyv8EGvqdrHZE1d5yxLC4JLmbekkVtaRPhjQgq7cPK3cszFQG9mPYT8d7ddb4qBJnctA9j",
  "key46": "kZ8mYniUf1ip34mvkPYAvJGRvXWgvZaUZZS3rnBXos238jHXoahk812NqwojZkFVa91Yv3fvQnLbMtmKcaxhYWr",
  "key47": "2A6n3ZotUPiVgxNwXzDj7iwd2YVEpPNmFiUDHZH7djVYJqx7DkkzZLQ6TGyvYUXqMWqv9KmWFuZB9UfSikDpNw88",
  "key48": "t4P6v5dccSoLhSsnvk5Tac2ffGBbvXew4WsgqSuTVhUtUTU5qSh5zam46zsucrYqabmghH8ncqRc2NU6BaNfAe1"
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
