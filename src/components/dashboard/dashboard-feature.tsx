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
    "5WyW7Hp2kms8htiKVqCTTQbH8rsmXuhaVBwNxjWEPyXQT33p6YKzsKYhjZPPHRf89BCeX8gPJK3UVH78XDvGjbLv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Yoxop7qwJEFDrsWUt71V19d3kuYc6nuAxqURPFPqnNcHN3MHfBrfZT5QiGKJ6eCUVAkRzdp42oEU9n2xRPkEmeM",
  "key1": "3QyjVtMgL1z32Tjccn54eGL2XiSGXAv5VE1ji56iBndzehNoph76DmEuQaTK2uPsRM7MdDiWn8kiCcYmiPZYUCza",
  "key2": "3Ez9NH69MVJ1dXfhCh3oCgR2Z5dLP1KmN6Pw7fAcgCha9eq8qCFbG4kqBkkZaY2SbrrTu8pguzo85sxNvC7pTpKu",
  "key3": "637BRWsKQddi85y6UUNfKYbNNJybTranHtvgE6Vc9JS1e7yTN2mnm75fCJ9eo3UsJKYSczaYnAjgVmkNSENKsvLS",
  "key4": "5sRn8d5Zrrd1jPjhaGSKZDRvaFypEdJBcSXFuDCwUXAHwNg27ArhBFCg1DUkxvHEorASZT57x9dWYy7j9HV943Hx",
  "key5": "CD4kzn7JfD1NVQGFbJy1knKjkLo4Tn6fdXQ5wjVbQXVLyXyw8Tvfqp7njswStkSbFKZJD53FC1EAYwnN394zD8D",
  "key6": "g3eZqx3rVngLbyryLKY1n97toVUWZbeVQf9r5i6chCHfM2byC9MwXbQTodZBSiwjXj3ZWM7VVWmjbLQNkgQu9jT",
  "key7": "5ChLj17F8MrCRgHQo7m44UbiC3W7C8gWoFfX1PBE3Pe2LdPJUVRH9TCQR3LsF2oA3UqNJqMxtyczBVyoNGKTdKYY",
  "key8": "RfpKv2FEFjPM77vgtdvfsqZKQGm46Ak1pLpswL7LtAgBdRGAv6A9oJk2MJMSHAVPqxxqESkF7sysR7DzRs6u9GA",
  "key9": "3zt4m35sRyBJpfj8PvWtMnEgnC8TpKkGJCz3rZgEiDSanXGm5cx9pPXCqETVS5vjqNcCNBrVXceJ7krrPqbyTNeT",
  "key10": "38PeUcCPZWnm3LPSUqE1qsubNaohtJXpi1Ur1KfovJFj4hAr2d1rYpNCC167xdSGJbvERAhcje179JsRSPs7YYep",
  "key11": "5iJH3HoWQYPuAoGiA4k28exRL5fR4234gcrEGbjTurYXx9azJj4XZ9N4GA1dV66exU9NCcj51ck8du8QW8wzGNdJ",
  "key12": "49A1Ry2Jf65oRQzMdjJUSBMDPXWjXZ7Gic8dd1QQbaaM5vnGi84xThUhPp4RAmcXh83o5XmuNYtECJvfCisPNHV7",
  "key13": "5gUM6JNQCfzEY7inVpdLq5VHGDcWAUyMtHBspAyitcTKnaqSG3MTEBQbzT8qEPosBmSEJEFHNhRUYHUEX8zcMiPQ",
  "key14": "4EPGE1tj4eSmXuEP6Bfbx9GKBCufoRhbQcjELhWd1Qs5M4Kz2sq6h7fReuYtussKEJtBPX1WmqADP7NCZjDbnon6",
  "key15": "51bw3WKg8Vjw5PBj3HGHCZxSNfVYMGXfHExGu3TDbbnQWMt1mJBAijkrNYPMy1q7chatRm4ysH6GuXSWz4g2aDCe",
  "key16": "3nyxDFkpG4n4bZoGruHVvowbturKnUqtVaw4EF3RAxzcA5P4yspEwzzuupiBtom7SKLBDP7aYjCf6nADqqAy16Ur",
  "key17": "3hjgXboQZqAmrwrptNMS6r5PX2iGbKmxKVSVeGEgrP1SBkEZRtRckg78BJUFBRHnYfv6QDYZU8jvehHKbFfofKb6",
  "key18": "4SN3QKnJW8nURKzNjyLFy6dWagFMv3Y9J52UDN7wK5UR1SmNnLjiPKVagEz48hiySur1Aqbw97SNqZBYwfhXdB5n",
  "key19": "3evYG1buovx9SpJy7YgadA6jrcE9pZshpC9mB2kTJPocGGMBAeEQWK2e7XUztxeYiAVL2w7CFqgWBbQyKhEGDASY",
  "key20": "5iUJ11hmLpyxjSxu2DcqcyHByjZqN4tv5MHDgdNezrZUEwQNXXKiBB2RzRdPe5m6akxsXKYNvxdZsTARiLQMpiR",
  "key21": "2YsZ7e1PWXfRxZT5nh7ssrZjen3wXiBjZCWsgTXWBpDtkDRVF4hMeHfVtwAxjM46PJ972cpvJu1ZXET2fxZZYaGF",
  "key22": "2iTyigceT3rgdNAvt6ec2tPjJmDSGC6PH6H5952HgeyDWUrej8aEiy33nigW9nDts1MRYZ4bNrHjgwVe3Us4qDSB",
  "key23": "5yUSkEXJJFM5VydGMwKcqi6wUWPES4BarrfbbBpxgL19C9bY89ZvkB3mqP9AMh5krwUX7JuAbj7U5tGPxvxp2a1m",
  "key24": "5R1nfeN5FbFhkhGubch7CYxpnUDVEvYVa5Mv4R3LB6SX3VNzsQ9VSERihsCHwXvATY9uk5XE7DxvEheXPk5wAHhX",
  "key25": "3hgzeh9s4cgmrCu2u9fTzUL8KvTgVjXTPzZsxMkqEHwM8FbUNC1zKMUyctWj9cUPar2e7VnUcithxibLpys9P4xe",
  "key26": "34fX7MdeMuSnEqyPJEYgqRNf5N4NW4xdNXWu9sCnwSdCHKn738tv87avQKXhvdWFPvqzNJdQrVd5QNBG7BX5TzDA",
  "key27": "4pwLAUQhwSXwM99599EaMVjf2jCLZuSFEVqoAZofVN7NFJJ1CuxjCSAFz6fBtnZvn2psEsM8EDpqzmVSLP5ZPaz3",
  "key28": "2ZTiCdPaJZDRpenN2WdCapjKhtd3gqRNzZ9DQMauhsrB7DwWJFeteKgb2HR16upSMWMf4h2vD2FWd6QMuDpfwEx6",
  "key29": "5Zhsrzwfr1pkAi1R7X6WDUxjaRwVxsxBbzXeqvcqkw4Knrd23tAwTAetL2F1yFxGJQPb55d64rCfbubAx4Qd5MGb",
  "key30": "42grjYgRkMxAfMeBXvsAf5WZoVmKmRGfYMJdGLqw4gC6AFYVcqrKccrVwrQX9oLcervYH76Wvs84jejrYHXXbRmT",
  "key31": "2fi3Sj1KJU47S9SBqdVNBvXVAyyNhEUMhhuL1VgrmzBMwdFbDeAE9XPpomQaMf51qycf56DkEboQnDfh9mYrLCqB",
  "key32": "U46DDFej6ZJPU8SfiKsjcePL1gHExjTAkj6VF2y6JZ39C8E35CH7VRjxpaMZMhDYGkeUb6ARVTVCtN4AicyyYqX",
  "key33": "muv5fTTyrswS4aB1ER7yehcYxGL8yGncq6N1LPbrNkTCoYmDaVKitcinbPmrHvoWrkbmubvSpkEfDcJ8NDPM1o8",
  "key34": "3dVYHgQSV83EPPNbQDLtJcdPDbDUkTWCFV4CAVWKifEBoTbaAtMyi1x3eZurVcvYWC5G7iz5N5Nd5LjREjdhSSrS",
  "key35": "5mKbhDSQudGB8wi35XbDYwwdEw3yY7DAFt6HRoyYzGvprtYn34MLw7geFw7M6XytSyWkVV9DUbmeLKo1fZoZ8zTd",
  "key36": "a6dBsGSCYjmP6KmWBZm3dZZ6ebidbqRAcjniroUBCDMqKoDrLZrqYCUDRFuWfqqrzvqsboYcXqeSyqW2z9rBhbJ",
  "key37": "5LJyMfHAkZcRXXNTzKGXu9Jtgt76eJSZteKyKmhCput6AgUNTVA96nofrdpmhCFw2Gsk4EsVy7XRyACK746onUWL",
  "key38": "36p16BMKqh2xeNcUYLJynfoDxk9QwmRGbrCb7Jns87VLP3Qjx35MMpGMfxV392e7rTcsWKj3f6bLGcxhxwsXG5UG",
  "key39": "JE9NuQpgmpVg3TrsMPyKNVfzBhi2oaUbpcB9zRosg2PGNehKLBDdhhR2bQUi5unoUP7DCFVkxsG7dHqyRPS59C5",
  "key40": "3faNhi57SggtsMATEVty8Gbz57rkYQQEWNL6jncnvaisqGmTLcpb1sz2aBEu2YBEx2SvfYL4PubtAE1uR8LDF7UQ",
  "key41": "3uPHiRs2kNvanSeGwreB7G7zebAtnwC48QD31HT3PsyiYLRizoZwpxQ3GweKyNKcSQAT3yF7ZSy9Fh5YY4WcvNsx",
  "key42": "4o8qKx58JN2W3abv9ShtYynAeGZhrU4xx7rqgYqf8PpKmTXrGBE2iBNFEPpfwKHgZXb1L7PNezLaFKSCxb5mv7DV",
  "key43": "2PzWUdktfAgLhwx8ywqhCBHpKwPJwxCX9U7r5RBJ6kr5a8uwSQz1Nztrwa3MdcQ9pSBnYj5czjw7zxGe79L4ShnY",
  "key44": "CLFk7iDdQzMHHBV5ALUQ1apGoYMq5cBv4UjExPv2MZUeCEzBcKBRAZs2LkGDYRhPxyr5DSeY4jkscwyiXeRtysr",
  "key45": "5Yejpg5YXLwbqHna4fcBvpJQTg4iZts4ebQPTEGojGXbMciRLwmhYqKnobBBeZ3hyr72y4ifvfa3Z46Zrsq8Q8Ay",
  "key46": "2vf1dU6Xms9AKdEQszD1e519GLHa4pie7KUMns64UzNzBYULopooDnLErro9uqMcqGABGgwFbSdnDHnM44mAyNef"
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
