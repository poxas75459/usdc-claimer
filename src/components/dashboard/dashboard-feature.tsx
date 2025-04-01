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
    "55nXWnHDAugkYBbj2cgZQeQnyGeRT1NueCZ7dG6bdd9khWRCyjQx6hKL6oigHb5Y3NjZGbuDJsyNWKxozqgvzkEz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W6n45vUSsEh38kzdfNePSc2mqheo9sKZn3aubcNCGRfaUYMCTotwpLABAYvsUu71isuFNVXCrCgmo1idV8TexcL",
  "key1": "2B1kNihVxRJUjycBDXAEDeWDsenmjbJcihhKZK7kT7ubCwbXdK54VMYootSVXneBRLJg6MGkm6DHqfbyUrwhVuat",
  "key2": "2C3jMnkfckdft9cUjuscBFFU1j3rucjuCEsVsjADaMATp2iFRN1K5vYMyYstNAU41FDBbDyvUUGwLDdxYqcD1Vvk",
  "key3": "4sGwnVuTHVH37jq3Az9Qxygt9RfADpqDSV7C7s4fzdixYWBNDGczcdtptpLK5eqLjQLrUgtrRvZ5V3kJRwkNoCM2",
  "key4": "38iSffEtUQCEJQjgG1dmiKoMbM2YvcGBJ6WhJpBginw1tN9LKUArvCPDcaaMzx5J5mMsDdEeeA3DQLurmR4fsvPT",
  "key5": "4hSxr3dR8XA3BFCRvPZcZNfKoucSv7FbRGnEXPRj6k4ffPTiiJ7s3pgtxuz6nnMAKzXgjF7gDupchhfB3NEgmax6",
  "key6": "2J1fUCoepPWnZhBcTTLKN8tgEesvBtzbeuKe5PvKd6UV6z9RXkBZPf2PH4f2NkJnn2Y3iPJ6sSyksoiVriroM61k",
  "key7": "voBUnTr9R1LU1gZa2GGST3txfLxWc6Aqm51NkahL5v5YtqNkFB9XVg551BxWRmBsjKA9JoiAWACrnJ5GV8u9zsA",
  "key8": "4Ub913f6P3kPgZZi2SLHAQ9fmwxB4oGV6EypfQXxKNTzAzDUrovpPc9jYvmnskvrcG4kF54YgcJhNVgjfspyXao2",
  "key9": "2zttthe71FP9AsP2yrEZWnMHS3BKZ7o7P5BXscLrFaqfJXEoeMXUiuYKdGtWrWe3PdMu8VvSD6KX8xdHgJEdZM2N",
  "key10": "Duf9MqXQbum6MsS77Yavx12TBonBeyhUJ8VohQYPn3ft6op5DWgge4xzqD6dYcD21eSDdYP4jZJs9AH8gNhRh2x",
  "key11": "HzBZgSHSfUqXRbv71zAqfihV8LCpy5ZW9maFWit7RTwVu81QPpyRUXbhdQp3xUuRN6upAZoozMUCaAWc5DCYLtV",
  "key12": "xkCvTCc7pcrUh5bzfWPEdYkZhoQn4vP4pCcRGLDp6rzopTwS721Qt2kJ5qjTbyV1q3wXtKMWACVdpNzEQgR3cXN",
  "key13": "5Fge6n7nzPHPv22emBYctfWkQ6mDzrMi4ET8WKeNCCaVKPD1LhZMYTdk45eaYoXqAmR8GT9fzpjcnQ8up14u8iyV",
  "key14": "4iSYy11qSpbrqzT2pfAtdE4NeEZkCpikMHxZyxDWpac9BeNGWPgrU482JgZaALVar29NFgCy5MPhnMYfNzX2FLkw",
  "key15": "22YeFaET4akX6BGCFzkDsYgMR2Jhn9xXcWxUYqyEn9c4YBV6S2rBNpZwrdPGpGkX4xMht4hbpMUHBxbMGgx31TtW",
  "key16": "4dxmDPjdGoYUbbTokomg7aoSzVRVdw9JvvHjwDVZejXgVGf17gRji2C28qhkKxaPGRk3CDJ8pgSA7EV6b6sCmby4",
  "key17": "5TBopZsA5jUexMEaDEzvobPAXdKuGgfruQF9kWCu4L5CezjcBQw5RZ8Ypbb5RFprmLVkr4nsZH3yaa9W2DvHmch7",
  "key18": "26cjzrHF7ShpATpoK3S8ThRu6uDFE8Wx247iQLPdTh5HTvQc7p6vkJNbQo4SVyBSAqyxMYiApYFcDqXxEkYLMCpL",
  "key19": "3F4SunJMDbESKHVEuwLpRyTRVAFMCpur3ASYn1VrhFuDRSH3EGyzrEGowAFkYJr9E9BtawJYenpit53iSiJH7ruh",
  "key20": "r3gkpEA2a5g3fHeYg1yuaC9exP82QuaELAdWNhWJhqzUUiKATSaoffykWcCF1WSvp6V52nF3txQgq6dnjsPhhea",
  "key21": "2DJAtUswuProzTufrULuGmnT4Ms75Uk7q5QUuiQpTvrADw2Zww8SnT13d9CDQ3WuwYTZretmFLYNL5zjZ3CezxxA",
  "key22": "LnSn1bUfzyXmefikNpntrBdP2Urd4a1pujv1HeZdLiVMYCHf364ZbdP9LMqsm5mhSrcheNZiikkfGNurnKd2EcL",
  "key23": "Xy8k6yfA98jSxVXptbDf2ai34fEh6nkFDjpFnkRAchyNXE7mDvhRNMDRyv3A1XGT2LjKfigM34HDuKJAnja1ZwA",
  "key24": "46mgAnYebRKWME3XanuypEFSYnCNs72uZpd9QGmaPrxRLNGmtogd8kfhAX6xeja5R2S7PVNuGYiLHvnN6ghsoqPD",
  "key25": "5svEqe3CjYZnjYbuCE7YaNCsVpkddpnn4fiY3QMYxf4HWmDKif5vN3ATfFdwci8PRg7bNBhbcxXQw53Td1MJ6PYJ",
  "key26": "3Fg9hkgQhF7Lak442ZGSGAsH36Ha28Ze3TpqbnmWBZhe7duHhtHc4Er3RaYwwei2rRz59qw7cSXmx3eaP97WCMsj",
  "key27": "dJsqWgySn5XwE2XL2a1QmUTEyMn2nkL5TRMh7yN2cQa4xfTRbDcbn2dWURPqwU2sCiAwV8JWeWxCuWGvaYtt3mm",
  "key28": "sL8mCP1sqE3NBfnzifj9GiMVdeTkTcx9tWfwC47ZwBPWi9wN5GeEJmbF9GCvwZpcewi4NqENv99inP1K2fxzpXA",
  "key29": "3SCFWgjeEoGb3iMX3UbsDneynLtohusK5emD5nogV9FnRAJyPyUyCjwawGLhYwtpkchJekV3xC6VMpKYdhoVYM1a",
  "key30": "2KgtRZFfDtsd2RiVkEpPMvU2hrXh9JW7PqbNKFRGkLiohPqWPw3jCHSBHrB9z7DXgbM4mThYtCLjQEypBVuSD28W",
  "key31": "58xa9YjyePq7mWjU9uiVgQKUgymN6tfBjrVUuvhHTx689EqZKJmMhgcvKQ1gaWwLSHBcS46PG6DsV4C1GgorPMmZ",
  "key32": "5o3cAfBPCgKHAm66Q3NqLPy7GeQ17DHQjUFVdikBZnWqLZZmHzYp5FCQjzTMZ5JjZAUZjkrqA4NgM5Z43H4FKicT",
  "key33": "4BpCGuqmNLFu7a1zTJFZtK5g5uHqtuJRGdobyrj2uANXveWGasHZABQZx1Gr1xADU5rHGe5GEv6wf8BDhdtA9ovc",
  "key34": "4RfiK7P1eamXiVwvMRNjKsNWqLC9De98JaXHwbnCaDfLHtuhHEJVrbGYjTkCmh9fw7PCoZ1wezgkyd7iYpNeGmPa",
  "key35": "42jG9L9pbv6raTV4Z7gwuNAW2nnFXUWgnMTsLzMsCvPVbawSHAkKa7R2bDLqFDTbLbbZe52D4waR6wawX5rF6HyF",
  "key36": "niZb5vYb7H2qD7YZnqFoQzPwNCGiy7BV4scEycaYuJZyZ9kyEVfgrxxUWgykoadx1MCzfqV599GcTPwLjt7NYEZ",
  "key37": "23QKHSRhASY8avEUG5ive3pfH77vNCgJXAGiZhiq7YAmEmmWb6a7aEUnjeAnmQA8pAEvVESBC4UhGYz8CGztCrwQ",
  "key38": "jDG5snsoPMuocm11GGsg9EuCh6YwrBXjeT28gBDTWUuJFNBxuw7MkBFAE4gbVNajJMX65APQVknbShwurfB1JKd",
  "key39": "5K4Y4HVjc87WGGNJuxi7nEBTBCQAVLsmAYdgYZo9cn4KoFRZSMcUtFAgRsWXMP7do7j1jD1pcvtQj2uZajtkd23p",
  "key40": "uNqHebinSz2JDcPgtSQP5gCQGM6rHvPpnVYaGACYzteeaBMMyZSsuq9KPQhTyNDm1xZrktgvKMJna1PqmYag6Hv",
  "key41": "nJERbH8RMhbrM1ETU87cLGUNKQ5jpFfnYGuGjmzEKb76E81WtQ7cqpPZtSYgqesj5KuBe6x417ANMYwVZkK9Hes",
  "key42": "3G36AtdhozNSe4r9oZJ18d4Ea6weMqqoctGLjXPsVMLX5aaRRL6ttqvVTf56WTbbkJGZXvPTosrBsQgyqEZFEwYx",
  "key43": "5KZXe4mtG4N7V2vFiRzYHghX44Kx2BDZGQ3qAkLmbDEupD7Y6WS7Cj21JYTuGKqYNUQXZ1LGc27RQzXSNWoHfjoo",
  "key44": "3SbWkW2jDhy1MUP1kzQLw4PXuSVkaVoLfrGZboMJQfK8KSF2ahE59gontTj4AdDrKikJobbbSThjr4AEGV6ryGsC",
  "key45": "8PYFF5632VH72sXcH5pvrtJucNZJwJDukSBsgwxf87FEJrWNQJQRkzTYd42kQq2NRF9JKGk42aW7ASbAMZ3FenH",
  "key46": "5uYUbqhaacuKnvMbb3C2ry8AshQkf4eb69fhVQafxvDzZq2uWDxMTDrjmGLBywiRh5c12hxzJCkHKEebztxWNGod",
  "key47": "312vq1B63NeEkYDe2CQmsiZvoY9JWK3LPztzto7mQ1UwYAprYjtJJA9KupCSWzJ7jmKRbRnrFPm28W8USZ7Me48f",
  "key48": "5yakFHQdjZF1YUg2Zd5ztBZLHVxQJRVvcqPipPvdBpz2cjRhMX4z6J67ygAiF7xgY1TzmbBwXH5V8TXCaC6Smnyw",
  "key49": "SszLPXy7oy81Y4h8PcSMgohSaYZnRgWSEJnJLEmbTUkZTFnycTtCZ5W2RP9qUJFBEJMwKHgNiAQPFuPdoNxpULY"
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
