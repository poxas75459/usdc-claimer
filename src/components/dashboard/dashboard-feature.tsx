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
    "6WXDDthefrjEp2NzJpXBu9ogUFhTnijTWi9ULSaC8y3vh9MQSqHe4EqxaVrpfFyzQLsG9HufB9bYCFChZVQGmof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bsGTU5e9FY9EP9fdXYjJwyt3ZjAgfFmzv2yxs3sbmqwxsNwVTaBUhwQVKwJJZVZ8ZxgDMbkXLJcvZt7HPdvPEpd",
  "key1": "2xh61GFyZWPasfyVfbSHZCnhtaJkKkcMJSnA5yKNeK4r2dGo6RbA9uzQexvEyWUwCxMBL4P6DhGZ3GdnD83RHnnN",
  "key2": "3cZxY5Mws9jyNW1CfC6tNWpu58n8FJcWTgiGYPRLc9pis2RkeWcKMSEpyuqvBZ3KVecngC8iq8NRSgMnta1BvGaQ",
  "key3": "4BUGzCqbYyxGJP4UTg1vaJDzMPEtWUdBsURHJAGu4Ffzwvjss7vhggfcVvRjyKLToWYczgm5dx62oviSDsnBxUDt",
  "key4": "28KZ4uzab2VvniA1UNgmeRvjd8kZaKPZCVbS5thEYV559WLQEGZ4yWweLGuTUYKaBeQvBxF8BXJq4wyYLqhawhX3",
  "key5": "BdaBycpsUyoJNv6wQuD31g6orjupWDa4FfMt1x6FoPqUWcGrrwfwFLNpdcQmtPRhZr8kdcM6CLurs8Lc1xPGxLg",
  "key6": "ZZZNQmuxyWFYugPyHRvG6ofANNHWRGEzKQZeUHU2S6yUEdFSodym2kU1wZcPZdDDaJ64PDbNM4iLWZ8azunb94T",
  "key7": "NiHSE4HRdEY9UW1QT2qqL41XWvyf24iTz6ZQSSHrZy4AkXoEpBeVguNACwvXgfnu5UseBHn2Se77re1AWJF8DgQ",
  "key8": "2gLP3a1fmdwKzsaEe9eWp1ktwUpHr5V9rGWc3cv8mye1QBqHYBqCTwB3VKWtLZVttzzeinw1geMXvrFUNC2CCuHT",
  "key9": "4zNmafuqdZAByRNanqrF3R15HuZUGiWudWhsPPUpuRqeyiSc7N8rd4Zq6Ac1wu1TA5SdXs1PWkx43qAjdDjyoy4u",
  "key10": "45M5YWGqsRBdGs8sBWR7ViwMgZR4c5kvgbMd6ig6ZYjz8w4feRU4fQN5fsaZb9GWAQWUVZDyg23z2E7RTDQF6Q8Y",
  "key11": "nVRpSJ5fM4wAZb3brPzgLxd1H4mukPcJ7w6x781uyUc9SAwwpLoCiEuFBykBpzhgsn1Zvij5bLMdpF5wDDC57RK",
  "key12": "49qSNcvLkKysULWY8YyQGaQg7oheJixj5b2SLnuvoeWPVMVzax8nbxCQcPnBYXYpcTug8HJYRCFgpqNYwJmnp6E8",
  "key13": "5kwhskdUEQtDpNBe88JzMYzTcaGZr5zW5TnCVPB794DfUWLdWQnwDgi6jfrC6mmBjGPQw5ELcfr8VNqKqGJspqQY",
  "key14": "4TuwuxT28rAReczhvgSjRJw3SZYmxPE3uFjQS6QD8Ma6ZjT3JL1YHNRYoSX2wny2SLeUz3aLbhti6YmJwxpsKwMA",
  "key15": "2Zxcck7FA1Dkm8TQ223J1uZLAcseyCaoH4enqTMNPmoPDh3Mn5qSZt6zmv8YUgddd3CSVUrcbk8DDZxJAKczD7aC",
  "key16": "537SE8gYHduYahtRHYKaCD4VJTrY9t8fsRroMGjcnpaHMrGTYLzdLG9PQq7KxK2JduGjp9YiYns9HfqN6Yfr5pAJ",
  "key17": "5NrV7VDYJvnZHK51pVHxRocjp1M8ge8wS1G92RVS5e7AxkXqeLyPgMmKRb9xoVRQnpGmw57cBbfHmxyDRDgGCKvM",
  "key18": "2c6srEcG7s2VBosGFrcJuJMqn8RTjsi9LPfW9sxc2wAhUunKrpKDZ4Rhcv1y5u3PJg7NYrx6ncphZFZkdbaHasK3",
  "key19": "2ejYRFMZubTgk1weEMGsuRpwCfzrCuL3Jg6Mjd31jQQCVsxqLcYXV62AAo5BSWyH3sQGYfP2orsZZMCjhF5S2BnR",
  "key20": "2Wk8kDyphYsiwQy6dw7KpGzgfeWnTKBGasPyQjxD8ynojio8N4SyvaNgJXQSe3rrsi76u7yuKnw74wEgX862jqsP",
  "key21": "5YQ3FovdePLZWBwcdya8UzHPYwvPEqGDFoF3GECGAZVA14DuMfYn9dGd5JNeQByanPuimTF5io3J9SrGnAAAqYEY",
  "key22": "3oiezbUSFKBs3D2P68BeYqfb59WTvtEXuvu1FHrca3ctSoSD6Vkc48cG7RpGo3DWbA1TekuvsRyZVupLnHU9f7bb",
  "key23": "3X7pXnePYDSbRftAaTLgw8zQiZ2YHcPDfAZCV9BWJRdn2Nv8X7ymU1MUh6UEiMVfrfr6NTGfGFCLbdDHwVWZH5aF",
  "key24": "48UTJfiTr13pVtX37dCVe7fyghWc8hFmaCt2LJ3bbEVVjCrDwhfp54GiF4e9rNjKktFErL4s8zB8hbkUA8PFMjuo",
  "key25": "2CUgprMhQBqVLiHm5qRLJLW2P3cvvw8okjByznDyzKkXW92Nwqua89aDwyVGvmF11Qz9RrYivtAUTaJ3ZMAofjDZ",
  "key26": "3Sz9a8VbKnpUJQxs7uCqKEjPEt2rnCdPtjoeVdN7UQxx9iHuXFmZAnnVkFUeWH6EvNUv23fMUbqw5FLkVm5iKvdG",
  "key27": "NVEw7YtYpptuNPzcUAYBvBpx668pbRA4xfawLQq7PtnDW4x3bJhbEh9r3ny6XgTxpeXhhHdKLFku5P4gbLPLNoy",
  "key28": "Grtbr7kirm2XMrNdZWXRK4C8N5f7E3aAECJXcsnjSWTd3gNq1hxmnMYezNVzweZpaUELMg4HLHrruuv5HqxfNEh",
  "key29": "PNCKEmLU7Cj9dzGmCCx37BY1McJGX6fBEFrZAS4wzHnhYEzeXUhbHGzUJvrfmw1th1qtkVUszEgxTRgsq38LcGY",
  "key30": "3zruxz3L3itZbahXazCc63iUM8st7wXXZE1kzLRr4MjGrkvGPE9c44f426dnMLk4KSCSN1NmZwQE43wAGNgy1yaA",
  "key31": "4GZFUU6tFW2c6NDPJaJVBXJnuRQaiQY66eLdQbQA4cyGFWDoYmYCjTQR6sABCVGcsNqmSXUrw9xSezkt2HbkCY25",
  "key32": "cCgf4E9Kuvmhyf9m6tpgcd7TaQamzp3vdad1vQYdk2oL8Am37Kwe59xznrTe31Cwt9GEAkMHEEAhUMFLAiSDKEL",
  "key33": "ry8wXCJvEo2Uvngg7ePQYKbXRz7C6nGZX2xee5ft1AXLBwuntkA25KTNzTwzWnK5SNc45usoC4oT2DTKMDX9Y47",
  "key34": "5TpMcArKyGFabXV4Q9W1NehJusfHBxW1Hwcr3nUxF9Z6oXj61NgNyqYNfkwigx9kBmu3AbbkWcH3ggsYBfrgtakt",
  "key35": "4Kpmz4exfXr9WG22jiAq8dL2Fx5so945LsPkFCShdctcpYX9XQernFWoVj4N9AHm82xLeb8rWrD9CsSdxZ9WkLPo",
  "key36": "4qYrYEdivAmt3fgYCpHsVYgdnKr5A8qJHSp2yfPVEvpn7yGUWi3QPfr4utgCmg4F9cNuxkd9Uq8MqrJuAZUYo2tv",
  "key37": "3K1L83H5TKjZRp4bvi61mi8ZR5ttVcoLtB8fU6fjiLHHMTyApfuGB1XK7SjAtymhzPV6DafKcpbPX1wHoSKXmFL2",
  "key38": "52qzxiNL81f8UCrq92iHAnF4Yi4LtVoakrrdHWwhUwaUvwz2i1FHLSMtNDM7BNjia84BULDFnRH61ccPBKcYd5yz"
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
