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
    "4P3Ps1mP61ddAbnSw7bwQbjwN85wE4Mo1KNhHspb1YAiCPYbngBr5wJZHqnTbdu7GrgCRi7tu38JXKrjSrPspNtY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nJxpVAormBHkvFDhKRF3zv7BfUmWyjSPD3MVz6AneSBzvcJS7sWy4o28YpzuVSwEmqcu9vSBym1WDMeKbzpM5nE",
  "key1": "Nag4j7woPeqt69DSMrqRkV5RoSBFvAeFzgTrKXe3L2HG9vLU3fqnunj8zdEZtrwVeP6KSzz2gQwDNmXpaW1gwvw",
  "key2": "2oMgAEmdSeMCyhqKiz9vTL1JAnVjeMWWrniSJPwiRKw6U14gwwrRhxunodBDoPLm7KRK3oDwtphA1MRVbZ67jTmL",
  "key3": "3w6W6UTWQyorXjy8QsasVP5rkjvxDkwsff41U2e9ppVxATPQwEpjGBBya8Qp1m5acF4VrNVTANiZG6Ve9ZQ22WqL",
  "key4": "3vmCNfpzoLVEH6sd9Z3rTz2T5jBkvQpkWFRdJeJEhe24wFPJ6knbpQ6rR9YE1RPrXpgc91qTMjaX9Wdk4TUTvbME",
  "key5": "2GAKJsP5J1sMMVyXe9pBEUoNzfj4uzXbTNBiN9N57vMU3dECPG9WAESLKn5Mu6EbJfgKCZjjpv3nZCB1wNGYaUxF",
  "key6": "z9r7m4Z3Xxe62GDWzdPSTvRYkP3jekmq2J7avYaZixHRHef2HRa4B1GZF2NCjmXsqUta2AcScZRpTifJuGmStH9",
  "key7": "5GE3vpci1rHiqwNVJA2g7gYzXdpqMewjNU5rBnwr8opP9uBgLHWAiqJvRTavzSGBuHtX3Fvk5FTzRg23eToDpc3L",
  "key8": "4tT4b9nNXyQ72ayuw3tCtSjKzbHmKotfHvdmqenf7Fk7fCJ6fnEVvPKqm8mT3ZqUt3g3cTw9x7unoCB5EG4H6Y3P",
  "key9": "2RBo48aLgTcXbAuBzyKBBWutqSN7tBNTwubkjrwm6UaPXH2ky5zxsRSX4shupXMZEvfcEev2QjUWvFrCXUfd5a3a",
  "key10": "7xknRwED3X97iin6GUdmoiL4B3K8qZp3bWAGsAckZKpridkxaGDpwhHJGQqF7rVXLaNYdLJfxuSn2i6pdPQFebD",
  "key11": "4zxMNkGJn5zV7hKpZLTpiSUSSS5oEmoRpPn17cEosoX2Yx9PtZijyv1WkhroAFHadNVa5c1TcQHgSuPcHdCYYkvM",
  "key12": "4PRWk8fmpxzPywiHULU5E4cNKJ2nHSjWXZwquQRfpTX3Na7DEHnmDGUtHJciNmN5eekR3cTM2BUrhXwXcbwS6y6i",
  "key13": "2dbQ52qY2dBuPxoN17M7MujQwPzr2sogiKgCWfw1oKL2bWNoJEZ1Hn91BnG9WjLbz2UxBCdTjTw2rsxs82H3mE1T",
  "key14": "3Ryw6aEwTNJfgYynnhGCHyiWWkwwqfao3FT4Neswcob2pfii8r5yp8kLNbRB8A217nRKPBaXUndcwCK51P1CR2HX",
  "key15": "5BWZNjJ2tbgdSzv1UiZeZMmB83cATGxfzLAbCcm7q2zioaNyt6QMYzPuaaPsTysJDuD4ehkG37ssmwdQd2AtNkP6",
  "key16": "SFTUWqu7zbnsSGC6JEp1b3n8ii5n9ZgWp2FqMETSW8XErHaG2HDfDZZ4sH3C3urALBdRyuJF9KnoGHmXA3X6gMM",
  "key17": "3JffSn5HVbLriuNf4VAc7J1C5MozKqF3CAe3jgKaYCvn6McQuat7BwEVmd9YFJtfMaGNarNLGEdTwK6ptzt4NsQC",
  "key18": "3mf24EPkwxdfM9ap3Pn6ArvDW7RdJeypzsT8VXLk9R3xf6bmtcKo6qwTd1xwjbvKReP5vKzaqvX1xeQ3HbRkxohG",
  "key19": "62nkuhwqzoNJcFyUzyeP7hG78vBtPrp8caF4XoTSzK9c2eZCbEDe2bEBDeHN63ToabEa1h7dMjfJdf3Hzwk2Q2K2",
  "key20": "2JvHmFfb3GMbtA2dF34GF67rLgYV9ANAAd1kSfKr2XXxMy1BorPviJdMu4iSQLAwsgxEYtd3TARoKvFgdJq2j4r5",
  "key21": "27UZuqfp9L8yk3Pj3Bbott4sbYudpfeMYp7bTc7aWGoQWVLGDW5trXvnNWtsrUCBopJx7SBRpL1muuArK9bMnW3i",
  "key22": "4whdAPwyp7RWEhyhAhdyCQD62Di6Nd6PX6A2MEHY4ydJtDntjBy5A2S7TMcFx1thTabAsDsTdq4zN8eHjJiuDqYC",
  "key23": "5KMnEqjyKxX3mvZHTYyZxuFC8cow2uGQ7nBqhFa7vyKhiyXSkQ1BfBQaDWQvsgXV3a5NXcx38wb1zkxCZMC1mAMr",
  "key24": "425jNJzQobTUBRgS1AJFFha96a9AJ5Bwjuh4BvfVtodVoPvkVbAF5F3MqyRN9xkkFerRYogGzusCqQNRUSEHoPTi",
  "key25": "3iAsi4RTMVE6j2EDzMAnsW1Ljfu3oy5EpQtKPsWmbPCfBhLKzkJFNPf82nQ7cYYGpbw4PKvba81RtAVM1dCxQFtV",
  "key26": "8xyig2A4MeLXAoHBho8davTxVrhuLghsp6rojbL67XNt8AQk2HgCxy7uqPZXGo5jTKdnk6nu8Sqb6tvgvrooTQ7",
  "key27": "2BajLZtedVLhHmH98JTcdMs6Xxv5BRvZFMMe1jj7zmAvSeU8jBuTcmMb41esqXmSiqcMa6kGMzf4aymq5UZRL3zQ",
  "key28": "4HcuVUNd4CGq6UQfpSi7hWZe3MHEo8owF6eETWcwuTEL3Bx7tiFyYwCW4nzPG1qeakEFTd5yQitBkUXJVDxpCsDF",
  "key29": "2ky5Jn24YmXMuA3yTFua4fZDvNKPHhwAfmQabEKxFAjTKf9zXsQ4DH2aJVK4E9xB5WyK6JzLwEcy5w3vVkch7HSd",
  "key30": "MuL2BWACWuC4LD8za4qSnWWLR1t6TY3fPMAfPKuQoCzuc9c6gZBkC1Z93U7z47SMeJi3CJ2xW5SUpTnpfbNvLK8",
  "key31": "2GTWeov58uewER7h2idPcaCQqHhVQ8AuM1TmD52pSJNozHNu3k26S2HGAKKRvGS6CQuwMMoqZSphUk6NnTwbxFog",
  "key32": "MDRmUC174ygBnbzeaf73YZxu8CW8C451oS3FkBJ7c3NpCxxSLWcHBKeBwww623JQJHAjfCWp4NUBx3d6Ngwnzut",
  "key33": "2tTYyxkj3GX9PAENFckqeygzMjM5N2y5uSDso8sNsyCz5nxQNFCsLVeXJHyuGy5Hu9eNnp2kbTa9bRRBgPxKw9k4",
  "key34": "5QtEnmMNVDGzk2V5VwJzm5hLxhifUSPxWys5piw946FQMJ5UVCRLk66AWk31LgxJZ3agUNEbW28PU6r3fdkNbdaw",
  "key35": "4WhYXbv2z8jHPwbSJFydDgpLiD74D6Hb1RbREbzvjiYySUunFcw7XP9ecE6zrfyWmTZAjRPu6QvYKdVZ48DR3Qfb",
  "key36": "5wsNPDVjdaE3DRVNVSBUiWxYyR754GmJGgf49Z1xxv27Sb5VJtqp64heMRVBdDaMm63xLRdKJVpbKQtnyKU5j7SF",
  "key37": "65zrGmvWXC964WEdEgkJDHMfdXULRFZfFfEmkKVyMxPoPAGrHfM2VyqnjYomSbMQW6vz1mUZna7834jeY1teHb2G",
  "key38": "2BbXfFiiLmS3LKEmB2h9A1RVc7TKWnJZUz3hcztjXG5Vcpf7tN6PLzchy6t3Fg3dngUrpoLwVUBhQXAQSCtiFVfS",
  "key39": "4PABYhkZJjPiKeHvHbm7j9br1zcRiEGMQXXPtbnvByqLtHxYU2TaRg7JPSWhH8tKBMcLwb14o3shR4YN7XfVkSMX",
  "key40": "4Ps2nK7j765JLMZ3HXniV7usQc9XZe58uUmHS21Lj94CfvutNEyn5DRz2GbeqeRswmxZSex7fvBk7TGXsUAELhfa",
  "key41": "3wXSuhqMPLYTwmQ6FPb5kgbQmFKDkTHYhRH1v38YXaaBf67MRDPZuEAT7J7dZ2ngyfSDU616KN21isQD5oVnZMyD",
  "key42": "5TukA9sA9TbnuJt8WCtX4tGz2HJuqcXU3u1U7XirAAXCaRHEscwGHrokLsv4D4WYNsedWM9WZM8Smo4XaUQfticJ",
  "key43": "YvC97aCSDCEbry2ocVC8w8MsUnvrvcFGFHH2UP1u4daU2b7bCYTosEZtQpUjJMmF1Yb8wSjL9tygejcGj6eYkYT",
  "key44": "3hHThfN3Hqnx1An72HLGLAz22FQn6YLVEHe7EHEtcGoLAWULHqLoYBrkybJMHDqZZUdH1X2mahL5rjSXuMvndqKz",
  "key45": "2UtNzMFoYRtagFyPpMTS1yVgaDKgBkeMFsnE2iV5PqBTrSwzEfwqxVdX9d6cc5hjb1U4K9jABBscG5BVeCVDDyD8",
  "key46": "4pmVu2VsuQe5d75ppPfJHUGoK4LdngJnzKuD5q1MhresssXk3S8xbJCiUTyZfUGr9bCU5Y3kQ7sQwXeVCwxBXAoJ",
  "key47": "8mM2zJohapLHxoiagKYha9YdfrFN29TYRG22FLmZWRiHULqKXsiBK56Du374ycevRS8XXGQpnzTm3FcmYEz6KYn"
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
