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
    "zJABDLKvUy5L1ywQLCTSH4WfzET4rQKcxFFobQK2Gn8jGCnWQt4LR74aZTyATVYRnK4muCiDVWBzxeiBC55BU9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DfZFKsXyZuansFbnhTY9M4h26kAsxTd2FGqWxYLzVFBpgbjfrVsJgmrwVcSk96ufKQbfEcWbkiFQpFud5X5wGP9",
  "key1": "3eLR2LPsAcCijtq4J63gZ8jtGN81mHNnsMYZyXjr5B2muVvtnr41ZW1GsPG1vKt4j2kiYEiwfWJiyhnzuyQoqA2W",
  "key2": "4xAzMsgftrXyJg2EKVrYMzrGuc7FKA9Zu8QLi57YHpdRBHw1WYHBwygyS71GiFurytB6JDyX8C7QKAA4ZVgoNGKg",
  "key3": "4XKdJMK5an6VtsnHz8nqGvqsdDkEUfFxoGxkTYFTc8WppYTwkhTmsbWMR1C4GsXYhcjpiw3FxjWUxepvXSVtUBt8",
  "key4": "2VFognacxfW3HQtqpErm7iKy2qFnQJmhkeGSnz1XoFPpJdxuzwQ4z46grne9PsxywUvL5qZQPM6s3VnFXc88gZUR",
  "key5": "4Ny422z39QK2EL9kjzNfd1ChSQgnKJi3PTKTyHMQ6meu7igRi4baaKAVohfa9qQBoN1qgxhFEMPpkiR7Y9QFD93V",
  "key6": "3Y4WZYdhDHzxMStqV29jkWZd5psiQWUZiywKfT37nJHhuy1bJYbapHZdTsyzE1kaHyYyQNBTWfuEtWg7dYB3t3M9",
  "key7": "4RCBvFhZDqXK7op5z4zCzNSU14SjvJGCz5qfC4tbh1YXPBUz9TgxCKJmaEEuvm8hWEdB5wYtwmBLqFff2XrNgxUV",
  "key8": "L8JehXx4gFY1tUgnBNXe8MJdVYBnULLiB4SnUdYdtACq4FE9vw9jwBULRLPy9UNsTbBCJDV1af3ERg4XuQTHrRX",
  "key9": "3WbiKbEXAbsjRyZAG5zHVrjEayZxDJYEep2yEj8hLjyi1VczqNBodJdthj9XFqMwShZTjQP3MR4SNVpPhAXhCnnq",
  "key10": "3RshKxiJRakywoYN1RpFGFGkhFeUTrpWqWWSxRqRfgdNEUogzuBpUwJxVMCXJg9j9RxYUJy4tdUyxnA5N4jnRGS9",
  "key11": "Tc6DzNM6DoBLeexK7rttuRv2cs2ERurfkjdzpkQUMN4Ahwm39HjHbHt957r8G2st8mWGALdE9XekCXAGGFQb48Y",
  "key12": "4adAb5J61rNYXuotUvUcPfThWFmvvAkmyWq19EUNp1G9zjN4UUoF1hphwaF9mxrU7BvNAEaccCU5Qee6ta9fCZ4U",
  "key13": "ASiRQhHyrvRyfDFRVMuUSNbHVcruNYL7PXsQLkEPbKd5p7Xcej6QozKqMpksuJcP3pQrUh5UNiPJXwb5kedjLX3",
  "key14": "4XrBYEv4Zp9aAnrSEbiVg8YD5yYjj1GPXBhp19qEwsfXbZuveSKytyfeQ9YyuZ9MRp8xDyPTJvr3dAQYiuQBqV74",
  "key15": "4yszGioQch57Yxma9GMcgbiWrNQQtPftN45c6TYtBwwrMcCcAEwiX7B1mkE6i2Q2cteEHtuXy6YZ4WiseA1F3fvy",
  "key16": "56EvbKc7nZHzf785JqPqHaKJ5m5Txh8pFEu3tcNkjYH4bRWuK4bmJ9GvNaKZdsgYxXG74EVMdQTGsNuNLyU96UCb",
  "key17": "3An1Xzuq7oPifPtSUd3cz6MbV4oAUsMjciGZzFvEge8MjK86FXeM2m6H4MfvcmsdezHE8Eo374ujA3CMSjeVkdex",
  "key18": "5Lh1wVJVkPncyeMMdrgAbx4xx96xPffwT5Mr8G4GbszimNYHqkL8W3sEcGrCXgLgAQFpTrSTDhDWRRj4Yq7jNaPb",
  "key19": "4QnRYv88icqxu8g5ppnJFeKkYHTPN3b86Bv3U5zi4tbxyQcNYo73qKc14JUpyy31krRZhPJN6hCmuk31ECxTBWew",
  "key20": "2MKdEYhWy7RVEUk7oi8EZkPyWTQSYA2LDBaJMZChFM2QwfMJEVJtAzqu1mRJBR4QcEyp9UH2sQrnSLkPsX7eQTNg",
  "key21": "3ycbaksvSY1fNgQ3BxwyuaUm27CK8nCb2nmyAaUtLFEHR5PPHuv5KvdgZxHtgXfzrKzbFD2nf8odBSpKNuKEB3io",
  "key22": "4JDKJqYJj47m8SrHaPsvxaGZh6QxZx8d9nugjry1SMf6meBQVCmeP7QpoTbkA2xt5uLybp67ovF86MqZvZnbaiga",
  "key23": "3n54ntnTDsnD6zHi5h84cSkMg9jmBvzRju2tpYzkajGWn1qaFEbnufXjEPDwBr8gvboEWDUB6LYXcZmUpE12AXn2",
  "key24": "CenPsV98LnWJwraM6EPH2YDSmKeGRwDmXvFLTkz5Td2P4QxcDYQvsYCMa5kfyaNMPDVpsEXeXGZvr9Rzxe5NNCz",
  "key25": "4TeQ69BbzmAEbxaPESYU44a8H5mEX4VvC6g2nLpcPMsG6VnfXVekso4Fx3p6aeR3YVrf1mWWRd6ay26tePfzErz9",
  "key26": "4XEo6fMa49yhjJzYams78m7qRYgbgdKzKWsgEkaGKQ343nzdVDpZZ51dWZVXpqWiBV5yC3mHL6hysEvEUn7oEjuS",
  "key27": "5PodARxb7L9G6NEoPtpTxVG7J3T6G57kEWscFAxB4D38cxjYRiGeGm3HJ6gKqHZ1oav6cVKjw83ekgSeR4J9BgHt",
  "key28": "3g9n5FxTii3yZFdDt3X3kxZTZhHRhx9w2HQMQYQoF47pvctdnj6j1Gj8iLZ9ggKbJUwffnSA8uqtgEPhzxg27fPk",
  "key29": "3j2H4w5UsQ4n3xAcD7L1nrZdybqA8r6ukjMwpmuSFkPUvByirxuh4U6VnhytuQDTcoAH9UJt8jcEcK5sjH3VXbYe",
  "key30": "MmSNqgwnyvB1UbdZ4N7U5TKm4Pf55GPb5RUany2HLeUeo3MX3s74yBWsSTi9pRuiiRZteotz6vkRX4UcHt5yFou",
  "key31": "3LQriQ6bqjk9ETqibJhs68gvwptZsuD9G629Czjii1JQ9onXScAjRA9imaqW3KR7GWRLG7cUfrp3B31rwjmyeayx",
  "key32": "4JsV8k5Bpb4gGsLAvXsdtqX6HTQWwc2qCKQYaHRXkBdtmEqQsjhQWtLyr4hYCqD1aA7PwGUX8bZgrNFaWKMGM8Hy",
  "key33": "5K2YdMuALKJGisSWMBFFAapWGM13pXZgwLevBnKqT5ei2pssbt8DpNXTbXS6vzHQbiL7dVrEK4nLNvhCY4yHYK6",
  "key34": "5HXc486RB2nfrvFNo31JLaoPcVTFws3vMg63euj7QmNo5GdFGmDbfE1sCFWL6L8CYexWUbG7ySWs6cTjRnzMWzux",
  "key35": "qwZCcaRqaVocMF4BPxEaGdMQ8EBwSJh1Tv7FRuN7hwgp7teSaKauw6zg7TtxYLvp4mhPpkfwkQGk6mzpoiuKi6A",
  "key36": "MKXmzx9iBh4ASdin68WseTNPcKmmPX8vjFMbuH3y6Np9PMi2Yj7kH7c8YPqAs3ZzLtH1jyUa9LDnoALvwK2My6B",
  "key37": "2oB6G3xsGMP5Ag9y6HA9Q1PkAMnUpHaKwcPGn8ftBRt66RhtoZFu5RNR9x8XEstiSdc7BE3dsRpbdt9oThHAou3W",
  "key38": "2Te2mqRyPfKAL94ir6XfHa91wH7A5SNin2cbZcE8oTXgUTSnWJZL2AMapUvsxfBZVcvt8aBQHfJB4p1yjfDddBXA",
  "key39": "4CbosYcWhEsekWpBgi3HKuULod4oKPWNA664V59iRCDx4h4CS2fvyBa4KaASxWs1TDH8tMbmntdEfNEECF7sxUh3",
  "key40": "4BkVsKFVd3fNrj9apRwn26PcCcLGAczneQ1iThcedaBNhm8pRtGvtECHqWTKGQh9YZqAE7q8oyvGhDxtrdave2uU",
  "key41": "2arVbpSKND34yAp8m3MY5p8ZbnaLa9XcYm394ccvBmWeuVHu4GswHCwV3n43UcUD2q7j6NroQid4terxz1VviWic",
  "key42": "3fNPXdaFNxW4jxokWsuqFA4i66TqL7kD6BMXdjVz57zh46Qhwm12Ja1Z7BcZyWfpw5ooyWEYY9BdQsKfoGpsabeP",
  "key43": "5Yc285sqshTsdhE6Y265Rao8s8j3bWJwHoZ3vqVTxtM8jJ9yDFGE2cEh2xXQkaeCyYNs9ms6bA7bMd4fXvv4fgwR",
  "key44": "34s8Vw1RGsC78AmVWFmXnbEbRhwFEF4zTagUmJp4SF1M5Jtc3gGEaya7E5TqyZC4n3RnFPA2ymAiFKo1mayJYggN",
  "key45": "qYe17ynJyaSiFCAJZtM4Lb87VLK1XqrvJUwPQEc4p7rjPmwXDbDcMN7zaSvk3PkiJ4jVpA5JcHaxZnHfqGir4dQ",
  "key46": "3dwkK9nf3yZvdEivfMR8edvjYmpVBfSgxSfFhuX8sZoZip3C3gRUDa9YtgsMqHFSNV2rjLyuH4VP6gm6qvTA3RdM",
  "key47": "4rHcST9A4o1oWTs66CPus87nZipraevqHdrJpx3R4hjmwYVjeXNASkjfKRWao7BNZrKGKDkFMzH51gButyS97Z7K",
  "key48": "5BF9PZwt5uSc9HjwLXn13hFabwbNHmpss4H1J8kEAz7pkBmnupDJu9YLyTBBftxktMwasB8BhKJXEQv1hLxyXioW"
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
