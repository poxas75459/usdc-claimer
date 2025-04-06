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
    "De4zpPUQwbijLp4VSt6jCYgmcr9wm92XhMHfLxzD94uQ8o4UX48D4qApeB415rofEAdCGJUnPfrvjFftJDKHv1j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "omWfs5d5KqeaU4cC1SLNy4kaTxCLDig3VtMs9tVnPucJH3ujb7XdZ4LM6nCxk5eajsLTXErVmKh4YGUnm1BuAhi",
  "key1": "5JPzpv9TbxaZ4uAGQz7zkmJcStvLugSFCbj3iUjHBE2Qx17xh924XNunnbZMApByx3VnVEfTbx9j6x4RjGiafiNa",
  "key2": "3f3JdakFJN1idfKJUYaesYb2YZ1VuiDj9iBF5BUKJhZqyURdQLUqqzwuwgzRxWBG8qSv2TR5dyxRfzLbAg9zXnGY",
  "key3": "462TYzPbnLoyMkcQqUJDsBzUUZ5ypcnGh3Sjda8kg5w74JaLToD5EvvFwGifT4YMaXtKUnnZ3qqNGDm6hju5q5kM",
  "key4": "4qiQuT4FQBoD4yQyDp8zADTj2ngaWwWUUTp8KDkvtXr9xwaV2Qi5g1hAaeDxZHtTneK65YCSEz98cAmCEFx3xVV6",
  "key5": "zmMgGjFymbBZreJqdEFVMsdc4DvCXhXzwGoPpgwNm8h1KYCpzVwdehkeM3aGQZEpJdtYor2LSNgyzuzwhKeZQPC",
  "key6": "4xKmLoyoGWo3hXLxYz2fwiE4qi1URDhH7g5cz72rUEu5M9GNniWf7SpqiYZ2MU1zjW3Tdh9mJWv53mHdLJDLhQBd",
  "key7": "m2enjKB4CP94ebxjsXQqVnNH8hQrWSun5tZtBywp3p3wZmsUAuJnyYqFj6JF7i7UYWoPBPorf55DyxNeDng5BgY",
  "key8": "2cBGrsTXkZ9YziCUYDFd1yZdHVMvyCjV4cnrvCQ99xSRtu2AxjTuuFJXrMdXMp52Hxhtx6CGHKT2AycwFLfpBasp",
  "key9": "4xvPyQ9F6uvKDfbPrfsjmMAsvkSecQxz6Z5akJor4nbumnzzrw4W6fh9bjzb9fWwoGw8HoFWDP35oaNtqxvt9V5f",
  "key10": "5v12vaXLy1eUfTwkyzRbyBPj2H2GAJwU6cQY4YJS1gwJE9JeoWfGM4k9EDiH1QXQCyKrd6W1GVNaT5dDjPY6G3cs",
  "key11": "483eNYH2dFkKW6wYuU5K823pKQMQqY8JZfeQDgg8d2cAyz9WWZjGXtaDwmcm8R5z3ZDrCYR3S8XPjEuU2zQb3YSX",
  "key12": "54TQTD83LY6SXADDaTxKbisABemca4nQ4XAVK3x3h3cvbYuH9jHCKmTw78aMoTDK3t2iAe8cDZHJucJh1n3QKy6E",
  "key13": "43QQefKr6qeWV8MchdhSbcXBAxjKu7zuwVveEjvMK4epMBHrdV9LfsRskqZmC2yhqc66x2Q4qXKtBfu2DoCfUryP",
  "key14": "3bf3BpTCscL4YmTuL58eo2omTgZxWg5hHJaDtd2J9sbam6p1LESFw3hHbp39ynNKXv6ymTMWa9XcmnT8di33FFrA",
  "key15": "3KvcnhDPKvmddWL1cwMG3gbBNfFyMp44PjSU31ha8UwnLukgoQVr84yhKh2rJs1utz7PhmX2kHafXPbacjAotxGd",
  "key16": "4CQvK2SjhXTyaUwR2bGJmgmabuoyWzuuyZ5hUdXzcPHoy5eWRiRVqM29vXBZWNR9MdrBB2jpA8EgCzttoHtWJ51Z",
  "key17": "3RXdZEVKo3t9hiopvA2qGCZKoLBSNjmPrB2X8Hy9g2vJFYrotACfekq5g7mHtAuSKWCGJ13g6rZX1gbSpB5SgvCf",
  "key18": "ZdTyUL31LcFQWPiAoWmVspr2FaSairsg8kE2FC1FGJNcEnAoc7YYbDC62TZQhnEJ9yd8gtNtrjsjLw2yFhVkjDW",
  "key19": "HHwJyaDCYyaN63sZs79dzJ3a1sgh8yXdhUZByGqGzRfNEXHfYfx4EcghwYH6SCEAeesrnWgSHFM43Zan2ewvmCu",
  "key20": "3x9cotXBRQAK4LUvZfczerDNbUQt8Dcsxg13S49THjNEzLrA5dQ75KVxr8FbHDvNJu6aJs6AmzC5JgimtkUEM8xu",
  "key21": "5Lq5wwuZvLJX8erEmv2RQzMFLBQeSyGEJf3R652BFTPSLWbC8J2i4CKQTqsMULYocnoLdcFTVGqfdZQh4fqDbgBp",
  "key22": "YFhZPLMPSJtTWKQHZC4VoGVmDef6Px423tTAMzePcz8MYx8NzjMT7jiDawE9ZwPXS9RnfsfKsjFX5zn2zu2PYmC",
  "key23": "3DK2KFvcAaDVhdp5HV3Nx7zw7JWZCQgmdSE8EVH4FPKuTB6GGYzxEp4n1C97fjz31Zv8CrVsNJxZYBPz5Tjmcw5F",
  "key24": "dXhKBn7mGwNt79F6nwM8UGfi2Za4VrkAEzLV5kaHoLZAkwZHmWd4eszaQUQx2sy7tVYdT81AvQGGJg43nCjeaci",
  "key25": "447o5fSEAgyvXCW2QngmbygiaqsEuiFddUZAg3vERcwhEvBJhEowLSZaWwYWfP5XEbn5SME7ET7tjE86Nj3Vzame",
  "key26": "3QiG5HKfWM986Ruk8PbqqoRnNwmiMHuuDR6HZZyRHqPsyxfYL6W8hfTX22MZi1UjxxhU7nEx5RDWKmjaAAnhibvL",
  "key27": "5NVDNBMnE2pKFxbw315vxyzNiAfhMbBTULHKSyxehBsSStwXqVtXT76X6AW4CxvUadDWeJ4Dr7W9ih5JgN6YxxNj",
  "key28": "QUSzrmYkKcnNoPAoJu8inhPx6qhnj6cDcvFUcL4jCwhuWMQYfRhBgN81t2LS93oohNsyDEJDzKjSMic44AQVkVM",
  "key29": "5qJgLJBNJXpscqVQb9x6LGyC9MBp9NXYUjsYSxC6YabpyzGasSMHjbaBXqWwyPw4MbWBoPYnnG5XYjLq8H2RRi1Y",
  "key30": "2W8d85268F2x32YFg7Kx1LnDf93w4dDke1RXEKpgR1UZpx7duzNTvuLmkq2KtkKi228cb3PEoyG8986ywDksUXyS",
  "key31": "2CPEQuwGrEDGwsSwCTKe2u9c3Cjk1Q1qWxewRAhP49unEFfj2z2FoWDX3grGKfAuxoZeDkDtcbsDQbYk8eNAnWyQ",
  "key32": "5jk1SSAzDWdGwknG7Nnb4dtpm4KWXFL8DXRcrUeepEToGNXBfyaR93sHptTrYYSKWvPTdxe7TJYwQzFAwXEtccUu",
  "key33": "5wXc21H3bskTxvDvJksRBEoNo94QKSqGur2VreHTmBdqSakfW8nnPhryUhaiFxuUV1rs2CU5tsCGzBNgk93pZgNU",
  "key34": "36dBnDgnc7e2oscMuoJ3W23yZt6Ag3iXNG1QtZMbs8snntSzdoAN2TZGrboHcVvPVVTf4J5uuLWwdWAXiz3PvDhF",
  "key35": "4c7CJUeYo8WAwRCUCgGeEcVLmbuX6AwygGhzsqxEBumsLdtpVpq7fzQ5Na4J6fB2ZpyqL9dTdKvPZ7YkaE1bi5wp",
  "key36": "5Z8e6mTriMsMrsBcbtk9ZgJzCqCZr7LFo9PR3wzjSrN6WTCiHx8AeXAJfUoGMEUtK1kkkcgZ8kibWGn4BMcjsUat",
  "key37": "4suPfXFZ6jDtsKJg3wcaP5f7xSQTTd5hXZnRy77aT14FKbRj3mDmG3wyLV9iemEHmbwZDSYDT65WHby6a5mAtYTz",
  "key38": "4PDN8PN9XKDsUfSGhwKxpmV5RyhUXpXWFjtNmXcavWBGEKgdiJ5Dcn2R19jh8F8ftVsBsYojcV4jqwYMKz979Mhq",
  "key39": "5TEZpZf2jdhmyrM7WyLciE5bVrAwRZEFRrBfBvPF6a6jDduo1ZGUTr7Zocj1TMGNhnmoBxkaYr6AF634nBvu9shz"
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
