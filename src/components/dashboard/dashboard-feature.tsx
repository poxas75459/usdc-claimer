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
    "48M3Y9ryB52gScLpgpZiPs25iXWD6mMyxL8eKPNRH7cnEkToXo4fMQFYH5tjwwgvhHaxDjWK6niv668wuK5VkZWM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AJy5iGLpgPocAfvnpnTQva8kEk66u262aZkdzZZDrcsuAkCpZ1GfkuH4xEEzsX5nyRbsBeQn3wCvdggmNCVycfp",
  "key1": "5HCP9xBVQbDZM4TftxKmz1xg2rkGnCVp5Cv9zCs1hyXMg2uHYhVgAps3X75Nx4bNMu8epXTsabWizopo4yGARuKj",
  "key2": "HmhT19tEr21DdrcgiLLcSkGKV4SmArw8gDWZmKdjgkGQoie7LKSrR1zHRDF6TV7BodLc1cimcQsFLhLwDCRCQk2",
  "key3": "4MMvKX4eafTVLiqCotkiZWeNfrhshshxVxjwsN29JnmFbkp5V7nLjKtrWY5Jqe7LH1agc87J548u2ivo9f3Pv1N7",
  "key4": "3VxFRQ5x2WZ9pwD6vF2F3oPPeu7YtgZVmoDPn3c87aryp18NkUQWVgovVSddKhy3SsSS1WHjorv2nJPRBhRZKdrV",
  "key5": "43rb8VqBWoaWjYAMoYQtTThZjwRNzukeGJ13CbK4jZNDEGsubZ3CjuVSL2a11ho1aHoxZCfHndygBcaV7wVTYuw2",
  "key6": "2TLZ8sYjoFQzFRSv8NrJYd3iSNfFv73Xb8eyzBzBknAS5m6LppMEKf8YfmMy7cpr3FJuPyAoQNZftBzwgMFGEErS",
  "key7": "3EnVnZDeob3Jntbn4UU1UYeaNYgNHNqMjsKwkxDT2yvySpwZdS5uZSF2JLVXqFiHcxwDqRSzjghPB1wXNh8EkxAH",
  "key8": "4UiQ2z1KdSpfAZ4F7ZYXf4McbCm349CwWNN4ZUTJDedxr8ngpWj2NtBNZkJi6upRsBZqxcSJf7eKhwHMBJZaMPwM",
  "key9": "Y2yungGr5v6BBnUdywyDU345RgwNSpBjtDrRfR5MCi2QD6az3JXAtVfF3hQbKEVkgxeZzapyvrkGo4z4ZQS85yj",
  "key10": "aNEviU8pfbdRW86MCK162yAVnyL7WfzarrixuYnbJc3Rqro9tTAUU55iKK785FuBHuMo6i3FZE5GLA8zz2YGdcz",
  "key11": "5axXMkNecwRtz3RXeR3oK5pLW5jeKuKKJBcZ1ebVVPYBiQLJnDiFaG7UVKK2kmry4KjPW9Q8R34Y97GjBUjkEP5i",
  "key12": "5XnzxSVGwyvArFUvdWYK9NpFhEMoc7XLJaqvGVSz6Sd9azzb5ojriFfhoUbfTqQd567uQL37TdfgiNAAP6NouzMW",
  "key13": "23kf4gazR32kbsFopPh8ZaZiKKMBxpBu1vqAeYcbqJ9TzLYyisZRCH1DopvLg7oEn1r3j1cx8eYVfubD4odEYwuz",
  "key14": "3QCAEgUBYP8JA4RKQLCUZ9WDmSLHyAc2HK1Q9gwZAAEueoijziKRjGrCTk6gCqu3iXfqzAbU2Xtna2EeRTmipF3t",
  "key15": "BZKd5GeUVhUgirVQg33d6qmtqAGxestJnJCDyinoJdCjm5PKTpJHhWxh3hHzhrLkGFk73GJLDgk6yLPnqoNr7wr",
  "key16": "2KPJg8NwY4RHc9whiGDggfpAE4BqcyiXFHEZnwY1Rsur5SrcProdZbNxiVRT35PRTNvdgqtixfJeUtk2FmZZm8cC",
  "key17": "hNEd4Vq6XcWecZMaD2aAsbSNRwdX2YCneBXeh2cusUHfC2vdS4huJR95APnnyy5qSojNpSpfijxeXduP8yV1Qqj",
  "key18": "2dLJtEDHhU9Rjm5ksbnZACSWh5fWgYvfgyBuAuunbj7jHGV9PLwWuWJ7XfEYjNkJjqMibiGyV8LovWM4Vf5jHiJJ",
  "key19": "4B43wbH2XxhHJgx9QjTPMFSUcPWcJ52VECMfA7EDhR4Qu4nnN6CtvnLxBVnrZdcW8E8VBdRjfwDPh9CXkS9C62wg",
  "key20": "mTEHwrDXNq1iC5baVLrBn7yPB3Deb4v7q7cc3VwvV15m4jeBEqCd5rgRo2X9CZAHAAM6HBbWPQf9iEkXtkCwfCw",
  "key21": "5ZbrThGqGSjKJcwk2bADkd39w7WJLaLcoYAaLd7cWjDYtqhGoUdARrD4vaFy8Fb8dnucrbTfsu3eDfhMuTMkX1mb",
  "key22": "5ohCtxet2ZHmTq2Sa9zthaNAeBPygXr11wPqe4NjfDKhJrdkvcm65vm8JkrYu75ZwSvbiR97MK2uYLSLwmJxndzX",
  "key23": "3pBUJnbGLUftS2cPWJVvHDVVwd4hJ237irsm89NF4M1sZZhfFQsf1APygSkUDFbH3WMhkLUpPMh5FnB2g4TEdBMX",
  "key24": "5x79r7VksgmxCKNskTLzC2Dv2N7BFj2WiP8VoN74QXu5bKcBV7Wbk2hhF9KheHZRc7kGy2hSNLMayYShBTfHYG5g",
  "key25": "4cGxq8eS98FtdEH2F7K9NbCJ3eXvRU8N5KdRQ32oFasFQgwk9Cp3mtnemJ6aSPzzTivxm14r5eZKrKa5xwSNFW5N",
  "key26": "c9MtrXqoFHSWBRtgVkM2QksTtjiWC5je5kQTgBJkMytYSQy5urj9ZHfbPFp4mjn1fZcMALhDhqqBrjV5XkP1iNQ",
  "key27": "3e3GQSjEvHQxbsKaUPmUs9Z5aw5w3PUBboNJAnzqD2F98terHkfgD4cn86y5xnGLiYSQJG5pSmCsoj992UwK2GT1",
  "key28": "5iP2ha4jA6aCirf5TbyCGSLd8dfCpxAQMR7HVNxD7QgUbiSDSxraafaX1avkFi8EakK7VHhuoZK8sE3Be3dZXVav",
  "key29": "5Z8Mvzp1jb1YcQXhsGQEhNNdA4kWz8WZ3TCxeZiJ4HzNAR8PBm5Gd8dgFPRt5qG5oNUPXWJ7pVMvNDafSbzGPUfB",
  "key30": "3gd6nK8NmGRg5SpY1jh7WZsTL62AQ4STmnQoqxpwrGWbcYEc6Ms2wDZEG7M9Y72SWi2wK3x3F4q3McoCzgUJjshW",
  "key31": "aiUEMRNysLPahDtjmZKxQkEry6kVbCFZwqZJP28v6mDBer6bRpDD6a436XsEnFGZeRrLGQ2U58A8YLGd2pxs894",
  "key32": "4yUS3Drvk3CQUts1DTKQDN1iwzpBex2Jmjrck2Jp6jQuDd7WxzJgGV54A5QMnGdEVDyLFx2igT7mq6y7mJyLeTHa",
  "key33": "58xdVmcRx3ziHexWcpYFXSifD5J6UVvWeTMhwWdQc5425fam8VGJocksbz3dTQuRVcn7scKFwTQuKZ8DiFuCMycF",
  "key34": "5tVgnJQStYM5PgSnwZEBYtp6FzPEM9Z31G99zuGZmiMZRmHrLZZD77C5VKigRFNUTnP8oP4Bq8gpgrXqKKufjzx4",
  "key35": "5DXbGYgpGA3LRDEvPyUWgaFmf2Z9eRRXh3dqjTLLrMvGWbJzokr7nh4rdhXPm5kFZnYgTauKjokYSywsWBrf5iTV",
  "key36": "4erJj83zLprSrGYb2RJ6LSok4RtHKyr4JpExFJWPE1rdPQZjcbR4i5iiA6XipBhXyXEhyjSpFFckiRJXJDQoeUjy",
  "key37": "2GB6usNkRLBdZGas2DqzqLHkUv8hrra98nJCnNjisU7LpAFQH2NZhvRUMNRqnDnmP2dJCJJM7NRZRaCPGwsXvqrP",
  "key38": "2MjfsvpFo2qP4eBhCk4xsQfYFiEGmmYemfUPGKyrb1jiHa6Emx15TqS9LKRNiL3ZzyMjHkJtJHoyJNfSz6iDMjDD",
  "key39": "24CWT2zFxLnmXE2rkvYNfN3Z3ScWrXGBuLjbi6fhwcExy84x7keuMFe2za1B9ciwVYhGk1UWbpm8o6gqPnq4RUuR",
  "key40": "2CXnPpc7kwQ6jYhGFcsJz7wpbmBHXYKLiUVnH4CGpd4qoWgUoeMWZp5NC81CtTFSJhegAF5e9ffEKCnuMMGeGzwk",
  "key41": "5sy6emJdpskzzZ9BLQ6d6pT2voC8vqAg1rTTPJRqeKTLps2iTzpG42XtEDkWqGar1mP7YUaTFnMFB3PTsEKL8Boc",
  "key42": "2nZgU7dxQQq45YKD8q4gJUiEy8PzTrfX9kPAvdNrfRQSwwsRPSVisLFuqp9uH6XXhdP1LBm8easFkaomN2fsW2EN",
  "key43": "2APV4h2ndvAzvzkqacMmJR2aMxWph7tjQuhsCFmQVovtBmN6ZY5Smj6udZrV8scAi5U9a4vSWajg8T1BeF7vTYFa",
  "key44": "wB6hzUEBsgeAHcDhC7xcUP7JTtW39KewtfLBjKZMe2bQRMfJnxJrcCr3pgQRETUf4sJEu5tyVbKDXntsyfqRYb3"
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
