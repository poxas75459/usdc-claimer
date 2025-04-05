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
    "3Kf1ormgsZ9DNpx2cbeU4S7suP3p1SxVgVwaw37PbxtyBXYBz4j5kio9i7twjRxE12GiRVWDxk1qmhK5Vc9ZukFw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d2d37kZ1inQDUxDhJ56W1ECJJULVds5nE5BEwSMwLAHpxu96Gt3aiUZv55yP5bU836cEsoKWCy37GiYneQN467D",
  "key1": "2F2qJr6wg4TpWG1cNcrxhTAeYT86f9LunNTKG75nNhoxdAMsoF5c3UeU6jMWAcRZCnkBq6JNu18nhdoAEXH1frue",
  "key2": "5wA7Xd6gSMaGc1K4uTRhUN3krwF1SiwodEcf4aSEv2odSnvHzxzKy6qWHNkqb8rYawekN2dVEFCSD52XHCzzMJRY",
  "key3": "52AmXF5FqxPeyEgM1R68j2b9sTtwkpP2AMJMez57qANMUmR1zYTgoRyvFf94TbvTn5mqiqL1hdNHcEiMR9hUXr5J",
  "key4": "3LJZA87uys3hSPcGFv9HpU4dcA5uN9SGt5v5p9NtDwsVrP1ybx3LovPYVUN3WHqJcMv8xg9bfLUmF5vvxvBheG43",
  "key5": "2EmQby3Kq1Ui6wqaER41hPgtZMJeafvsSZG5RuBeFcWsmWFFUbyghrdRf9Yw1pQUpMYq5nePyWU9Psxe8V7JvAaZ",
  "key6": "5TD6mNtCnzVCdnCrr1QYrRaWfnYxNSufayT2pxwBXWFFzDVsNjEZjpTFGPdGDBGcXpPaoe8HcX3TzndnpPFmG9Pd",
  "key7": "2or25FiSKZq9rXm2k8gMS2JBR3HsmhS22qfcTTiqozfNNX38ZsjRqvdL6YKc2XDRrEscVRndH8xBt75abNLw3zUY",
  "key8": "2c9W6q8cnzvKBTinv5C2v6tyUNWaKxuvarSy5aGGLQ3VKvpzfp3hQM7jYMQ1QCk6EsPxgjSLNdJpytSZxcFqGAu3",
  "key9": "2o4ESiRg7GdNY6tv47boNX3omETHrdkWBL3S1oPzFbpi4R9xa6p5Yjc3b8XaE5uNhuJA6tW22patUTVDJuuoAXXL",
  "key10": "5SETgsyRimrYsaMbg7HUeitQkkSNwqz4PDBiX1Hx4h3FfM6Ug56hFxmT3rk4qiyXZwQUS4ba96KLhpYqkTauXLU",
  "key11": "3zydnQ3SVXWZ7ERtv82uDSMBGGtoZJGaERcQQdjW45nSJnHGBTj236boTBQnRUWepnMBK1UZ8FEhHTfhKXY7bWRf",
  "key12": "5PCMgcWA843imzYifUJZfxmsvAqtMREkhGNSXpViU1xHVjoHtMJxGRzg4cr4WWHUUMSG6wY5u5dnV2cN7bVPDGew",
  "key13": "4tC331hNRX8vuUY6jqmAyJGrr3wk3HtcBn2iW8dNGjctYbs6GahNoarQ3iTz2PQmfCXo5eqf9GSdaAhH7KpdQFAf",
  "key14": "5hQjEqfPSxtCTS794ZT9Zk3Baq2oauPoYJCxtXo2Ztef8v1KYRmQxLH5EK6UQjt9KWq58PTjCcoRZhWysz3bY5nx",
  "key15": "4SYAcsihJRR9vRHY31ARaJ53wHgqY78efqbF1vUqcAemZxUz1Tta1RAj5HB4nfrhn3momWHpeMxiVs77C2mnUXC",
  "key16": "3SyRMcLrfx3KzpbrSmU8n8PMuqSeaSxiJQdaoGSATyuBBtsZgoxnzJFuFbTMgpKmDfGzFMwvQQx6VQnRb6fxP8gT",
  "key17": "4UuHptJiWQhmYpkKJ2kNB1i5ToNn3ymsBJRLZvXxhKVHL9nLKZaFnWeUHrPB8nDfcrxYhjt1HbPhEoysjDnkfwVC",
  "key18": "3gB5CchLCnyNSRvVEQ1YTPBdbCDzPnb6vEqv7ChzPBLC4XS429Ybvd3rC8Ja496gmaF3oU7tXSkRyEtEYhJc54ki",
  "key19": "24sxT55cw7kFGFYcMXXJdiMpVHWjRBiag8zJdavpZRyDHw5DjwV6UhGMLh4ksBJymPTr9ck34mgEYmgDpWhC14L3",
  "key20": "3rQkzCHgxkknyBJ9Q5TAW1Sb7Cjgjta4i8G7ZwEpxef9s9TVWxyuPXcUJLhNWGJNcD2b5ExHoCwyZnhZbH3xwEX",
  "key21": "4GwSRKCkGg1tL3gAuTBZ6SnFnFowFGB32LZkMQfRZEtBRjqZrimR9hMDy5bkbhG8GYM6ThztWrDqNjQBrEJ5bCsf",
  "key22": "2iBn4jZGDfJKog7pL2L7848P2T96ZaxWGkAjVaQbApKjJy76q9WNDAZzS8UxWYsWJNY8YFpKxiTpNWCkx5CkcErG",
  "key23": "3gBFkkYpy1rTZDiGeoyimENp5p5S272MScn8tCpbxpcuR7ECpxxpKmbSbXTCQP4h8hV1Fm3rBVTF6HFBmzDnMC5P",
  "key24": "4mZR51UGg4fCjLzFXkB7c9r7zKkcDdYeVuTjwhi2XreYVGJGqtD44K2meZ2HU7fjr76J2q8nitWN2zjds5RfBQNr",
  "key25": "2Lb4aQGYkYizbK6NSucbnjydimPzGJ1hEKJkgzrcMo9MkHQPVAnzLARbGBWFrCHkrjzHL3r72qP31tXekvVeCeHa",
  "key26": "21xM5osW8bRZ9spfRaMPRoWYJpAhaWEsaBdQxDoaGxEKEfhTXfMJuBsWTbdAb7okSbfNAi1T75Cx4EWJPthxxgGw",
  "key27": "5nxxrTecFAnEeP9a4WjDbyrfg922NeWFB1mAWQG9naqsfMNEqVzPBa4uj9LAvqgpqDwNCsTMehEkVnPUoukfRLZ7",
  "key28": "2hSn41iC7nDzQV8eFp6gkLkgFtwLyySKNfPVp6UiKYXiT9YyDuwG2FdyJXWUhwuXRmWqE3JkzhFvKMNo1yYQuPbu",
  "key29": "4g2X1FyekmE1Q8JB5dyLeDeLPr2GbeWnR1Fvi4vkKT1yWsXhdtnzgz1RfJeZCo8uPm7FYn6wKvFNwCTprYCUiqvS",
  "key30": "5HBzS6yrfDkyBEQcSj7bFgW8ATiSaRcvXwzLxstLr5sLiW449K9FpXi4YGb7N1RQcadTejFZ2Ra4Wo13y47W28Tx",
  "key31": "22LzrWAyyWvznEHpB8PtwBzcTHQtdo2ecUE9NXk8bUDpKv1YpJNzif2EuBfVzQme87NQVRW1qr6r4HNv5JHXJELS",
  "key32": "4UNViTbTXADzKfxxE6WDjRU97zR7zzC6sDP9uEDV2cJpnbssc6wuSh1RAweaQAHuMyBt3DQowT3oaW5naQSuj1M",
  "key33": "2SMMvzCwvcsrAFRLNxy3YUQEmiN2jNXyfiD9oyhLGEiEAiaoTj9puaoXdkDxnL87MZV9GWQ72DrSmrxBbUPXVSUL",
  "key34": "4Wg3wNgijszXySBuj9fwcT1Un9paZ1Xht9hH7EvaiBQWep7G7tSJenpRpGanGgAKhNj1yiNRiTGp47yJqtD1J6pi",
  "key35": "5FQdBeWDsUAYR44S5APeAJXFDBMyukASZFeJ3tjd8PR9ww7jB5mVpGJFJXxzB2wMLJnh6LiBvD7kMati5nk8txcS",
  "key36": "4RAJTsdRdaFC2ebcDdTJFEJH3qJuRwBiMnuKfMmkwZetNNfwfyx2bto8Kh9s9z2J8eqddwyR7dGY5gtDK7Tg2Huh",
  "key37": "3TR3EC7oAfdDBZp9CvivU2v8jFyTJgJDBPwqFU5hL1JtKCKy8WZjKRVMio65DqCpsM37ztzK2dHazF7C8kA3GdDG",
  "key38": "66PKbtMAHJJcPthhhnZEwpMhzNBWuPLoxKnRv5RBare1gmYsRT39SyMuRVCkcVpjnXTTFjgCzvTUMvnFBTbkDkMv",
  "key39": "2dpy8eUcoitqvLrHkRLYSjFmfaWprnStHRxTgHa8HMkPNLvEyAHpGMDrnaFCnd7cJHwGBxTes3aFKBZFXomJ79DK",
  "key40": "4Yb8jtvXmDneTML2z4uWoQtFxdc2sUm8ayaCt1HqXu9aFMKqvZZXwiVmriSjmXP3kNkZXdJM1NRW2zM1n8YgfhzE",
  "key41": "3ZVhXFaTKMCiXLzvPQBufGwWsBpowk8wnucBMAAKL7pnE6NfAjngLS3CSuHMcgTHD9c19AhURFLby7PmePsssFbj",
  "key42": "JCRSBbuyvba9TxCUyArP3sHF1pgVTfxD16UKgspnFVU4Ue3YLG5fdSgPgaL6LgzrHjqSCYbGNe6E2SwwuvfBHWi",
  "key43": "4gFbpmaDdov6PLY9tpFVSNVt9kWQswPiQ4rjXAdvMTtAdGaiFwqQospThBAsXeBqkQKhpPGeNn1ndS96WLXHZrgA"
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
