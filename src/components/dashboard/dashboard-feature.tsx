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
    "4ks3ETK7SyR8rpiCtN52VNLHdMtCJJ4kiadFPTjs2vjr6nc1vR4cBaT2KCmKF7DsMcNoQUJxaAfWMjgMQnfPnxrb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wUj2873ikRZfRUa569oE3G13anH38EiR2ADUMtewz7MsSRYWvyLqZin9odz8FeZpTx8F7a1THsWoEzXpRwi4Qer",
  "key1": "46m2vrGGatN2z8sFcLV9LMT2WHcXtNxVKyHhT2bSWJq3aAtpLcdDcChcbPRBah3Hk1uXV1aEDjLVCWazQtNpsjpK",
  "key2": "1uh1C7G3S5yLxqRY2T5E155ECrxyr8UX7F9RGdF9StaHjtzfqjrg94HEoHa5yumZmKQs5w53iEwE7sWt6oDenYi",
  "key3": "2qiPbAV5WgUmxYo6PReA5sDHcxZsty2ae5LcgWi9BRtihJoac2ESEHq5NMoEdx7aLTLHgpfJmL7oi8D1uX5c52Q6",
  "key4": "638utCMyyvZoM2tuJypKPyXJJcZArjrpaTJdnFBqPD2uFMU6v8xCaKsuroz8Fjw4b1WC5vSEb4BYDdhtfSGchAjQ",
  "key5": "a8rhQdjK7DhuBFQCw8mLJGdhAQTzJ5rcbSH17JmH1f7feuT31ZcbuEuSZDoCTNUFkWZknkLFXNi1CzoWdxbuegV",
  "key6": "3hpANDZU9z5JnAwD7aEtRzb3F11pY4efne4zykrtKhoSNFPdz8wDJXixWeumw3LhX7u4RKjbT3QJvLZEmirY3j9F",
  "key7": "5NM8KQGNWnkKd376WoierdZ4fD4FLCLe8FiQo3MGSzqgW7nqwVJqqDAcXA8pzVHNQYHYtKXMjbx3bpS9YTJXRe6e",
  "key8": "63yHgbt2ys9J6UBiYrALzYgCvyK9Q2UT9HyTDkffRi7rxUxht8YYpz528Fb91K6kRWEARUfg1N1emFXCXoud1XAB",
  "key9": "4r8fd36YwoDjKh5ULJ3ckvFnoLTg73d22Hxd528cCGEg7wcfzxSVb79h4YWdAjFom6ZaSguMhVh6gBLUEieodLq8",
  "key10": "37JPenZHzBBdXvWDfbc5BeKwVTj9Ut7kySaY8PpwKTiB4QAwqSL4fJNQpy8mz6uVPQJDtEas4ff6ocNswQJH1Hzz",
  "key11": "5Dhof57gxzgrp3CmY1DnJ6zuBy55enPnyprtcXrPrYzjqDWBzQBZHenkCNDowwaKeui3kVXEfEG11Py3N7hskJSF",
  "key12": "5zZamVC4EUGVzFjkSt9Nv7hRMEXf5UJ667YGsw8skBQcK4C8zsK5qWXCiaDGGaTJ6MWzeXJqybBGpZoPMK3QWEVp",
  "key13": "4cMqw9oFQUhRkEV52rBshAhsx1U2hELdP8gkEDSMJhNWRQPiywYjWVbt4Rby6amx2Ps5XE3uFnofCdPiaUj5qZiT",
  "key14": "37AtZRbWX6mGYVnopMELYsEw9huHyzreZF2WmhjnKHT3Na6b3imMYAXuQ6FkB3EhFyDWbVgBXBdPdCGziPFzioT",
  "key15": "31eRJKn9ycVabZt5Hp8YPG61vXrL9KFv3Dt8et6BoSrLoU76YKD1HRW1pmRZp4ZfdpLnZ9ywdAGdCg1d27jifq6X",
  "key16": "3rE3ZjwfRVHQPgKqk1RmpHpCottX6wiUggBBGXifp4LxRL2LDGChDjQnJZsQQYpga7EdjUqFm49Yet6ymHVcNxFg",
  "key17": "PunXoHTse2SodKjSr8KgirR4nN4TwqRRYP5ApVTWeBcSAHmJsuC1RuFs5cxDbsW96o1GqXmLw2C9rsDYzA8scuz",
  "key18": "tu1BsP3xJJNPam3rArt2V4RhsKjYwh3GjhCHTqcoRx11vsD13xekha9U74MHrBw5xQ3Apg4hLAKBDDXB1TuFPLT",
  "key19": "3tgZufvN8cKGkqrgr3KA7Gpi9TShBtAtmVtjW44FSjtjMucMtDWhkYaLCjkgeYnfHoHYFJGrCCEpAhWFvdXiX4Zo",
  "key20": "3166akpzdyutDUv1dUGKmABZSCHY3hHuJCwB9vHzYBRCuSqckXz2eyHAppCSS7or2kB9eT6tDbTWMV1Ctm5tJezY",
  "key21": "42GEJmFij3f1UaqZzeYmomc29EkuykK75EGncyK9gg59EtqTq8xQSjsAkEfCuSdGr8yYWTHnqf6ZeoZdSweAQvZ2",
  "key22": "5J4uGLxJ2MCQ4o1oby7LLaonmh1Gn1hqqZWkqasw2mBpVusvD9BXwesWnzZ3Tej3uc5jTi1M9YzbMLtVM8EP41j1",
  "key23": "5eHwgbmVdSDekczWog6uBioP5ew7UHcFmoa3iom8zpWbrHvmHZN54CytYbpcCu6cWyuGoRXmSQD1LKvjZRczu5jt",
  "key24": "FPDLPb5u6y6jqydfcAsHZsGLHbjbVa97UBKo4SL2rR9sW2camRY2qj31th2atiq6XUEKYGdFDZ7YRpo7Su1TCDH",
  "key25": "2qdr8PbAjPQaaQg3RfoB29NgC7uXyJk8QFy6E2ucCYMdMXXKi9LGWutqxfSkS3ukMmTt2BT9qdWBGZLBds1kMc7C",
  "key26": "3FsckqZhQ2YD4FnxyVQEgN1RqRWsBU4ZyVieomCzEvThtyPeewaLmDWVqGT1k1v2wJKZ9YiSg9FmQzz7wNAWNdEk",
  "key27": "PVcuU9t2W3yNq4qjCJr57LDwrQZvfxfHWfUTmnUckFCNL7CfPqe169WhyP6geRXnJMqxfARLVffivV8NkaErHPk",
  "key28": "3jxVPGvM9qd6knVAJJEjrXa4LZT51V2A9niinh43k2YWFavuEkmzNX3Nbq4vzGdqMN6iKoXCNNUMitUWjbAeriFW",
  "key29": "29NneBihogUV51DAhaQDpK5iaXFShDTW8eXPg5YZunrFCp78Bi8abWSbiU5bWt1cnFc9SK3Bsc4wiZSYrdi6W5sL",
  "key30": "8gw8WDt3i6upaC9oRWnTUyouM4Mnt3nLSS8DsAGD3sT9UPo1nyS79Ra2TR85mL9xZL2UsV3XSWyoGSmwqHKdrJK",
  "key31": "5rW38oq8ZdS7DTueqzmGwFymqL2BG3rCCnVZmhdGGqPLi5xvmw7nfcY11uTQfcZVw8yb1rvEoZeLZmKH16zxoA9Q",
  "key32": "TgRFKbY7nwWp3h9DcrSqkmkMNMY7QkhtB9bQTQUsphc9bN4hY3EeGQYfjrdFBr5JcfdSHLQgde2URgM3VNoLZhV",
  "key33": "3c23X4ySGnmJ1Nk8zqHDkmwRoFUfLpEVSUuWG4NXUDhyzHhxU8t96JEHZbBoAuNaWnzoiVu8rBSCyfZGB9XYQCvH",
  "key34": "4HGQrMxKE1S9iiq32wrVpxhYkNjz8Jz9oTbTC1gsZWaVGLZdkNcC7HYjHKxbU96TzWpiB7WzpLoJp3EvjTfgJVzF",
  "key35": "4xptDP7MQs4Bzh7z8p1BzR3AVXdEpL4RUpwc3NP7KQ8bn9ELtbRgMBZYm5mW8vJkQDSZVwqrGxXe3cEtNCwwJoHj",
  "key36": "3jtohp6AHt5GkuMKSed5BXTmSeqFLgpZzuzWxpKdEC9V8fFeGrbnDpsDKQLo2WJpJKnZAakk8L58HSyNsPfjTiQA"
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
