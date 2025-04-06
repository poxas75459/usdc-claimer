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
    "F63XuPZdQxpCgehJjJLVfPC44gyhHW1cEnNSaY9JfXRgmhGKTiA7FdQPq4J261CTAZziEpgBcduuCmZjEkUm8KW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gipRTVEnnG1JScv3amLKi4C5JxAtjJqh3dThRLUdRbtmSjyZWkgJbRuSrg1vBYj4V63KC9C9WJtwY1U2Wr2RSkf",
  "key1": "64LBBDrfsyh2Yv5wpQ7s7aX1Jn3XtavEstnG72M3r2WeJHFi4CvUTvixZb31cnvro5GgcKkEAGSkV8tNSz9uSamC",
  "key2": "4qBxiJWgUkjLrXStgcvdMBRuV9W1Sejo2imh93NnRvCZyPtHLmAHeQVKq2aBthe6YXpsEtpz8h6QjmiM3o3bBaC",
  "key3": "4DohmDfYpe1EKbEvC1Rz5TXiRqE6AQWaKL83jGM9qU7A3ppcuriLLKGdBeJcNaUApEU6yvmxzbhiVy37rUo8k6w8",
  "key4": "3oGbL6nD6XnmwkFv7bnzBiDXeUxLEYRuVfaiFoSkQwqJeHSChmbeWrQL7bRjvBwY4SEJtLLEjgVjydJhwF1sCNsF",
  "key5": "TzqfDYsuB7g94cCegyf5Mhu8XUCCLWZST2L1UbQ7MmWADWaQezkggR1adwP8uiwybXxGCKjjJjwoLZNZt3dxrbm",
  "key6": "2Jux4hkzkkB1Zn4JDgxYMscG8nQXxKqDpo5cTSjd2tZKzzKUFHAW9PN1tks9t8Ti3NrLLXgSATrdhYgQcbyP1P63",
  "key7": "5YLComicePz7iUJoFy4Cno6HzBvLpnUPMf2umV95vZuMAiNXUUV9NGnyTngWtmndN6BY31oV7FtUDkuUr9fA7HjZ",
  "key8": "KPZwbou3oH2qpsxpGJm3rhNhjw77VwDqxaHf1fDSeBREPob6BEAJyvv1EgLH4vxKmckozYLxkaKCb7BS587se6p",
  "key9": "4WzdiGzVoqVA2HPfSEoyuNkt2NyBVjZmPEuTHT1cegWtnaLL2PLh5zb2WTfw2FGg9Wu2YbxMmYQFhUTY7mtYZbSh",
  "key10": "4N1yjK7njC4z8jSbMET273jAFb7YjbMLzYXgwBeFV4qhaJVnuRg3q5yUdfX84Q3QTfyi7Ng7PPCHw9dgpcgSitgq",
  "key11": "4jA4wSgzn1mA8phKQnM4BJhRnAcZj32VwJKyqPcqjtaF9kh9iS6BcN48UJL524BZU8appp1na5QkFTiYKCquUsTT",
  "key12": "5AFvKNKSzTP7R77Ss9fAuiuQccvtDjPW7Jqhenwai7fsjx7C1tEx2cBkjNuGF7ipPpD3hdj2uxbt7kmcdSTZ1svP",
  "key13": "4bN1njercNKMBAtq4smvGrdCnfcoHcPWuxvKxKtwMRPh9wJLFW9jnbHH3b71RJJW6pqKGWU72ogZoveYgC6t9os3",
  "key14": "3JUaUVtBPAtGeVqwrbn3wRZo2U6AAqqy5EwTs1BHRKLMTT1r6VHApvHCFgvn4CQAnaQYSznyN6c6jLhMcH2mpgA8",
  "key15": "4GxWZivj6V1HEqhwE6WGfBoY238jFGyZehn5qe3mRHhha3KS5B9TrdkWv3SMHR9BWEuQSHkcKx6J4LEnLDPidzoY",
  "key16": "4Q42p21xeTrEsH6dYm8jp1zNmXwvohftTKJCYSAYtaogVWcDMVAPsvdpYoRFaJMsW2QSPgE9DUZdY7WVB7Q5tUvY",
  "key17": "4xNAK8nLyjmygc5mEuTyETR9egYWMepFMd9o6Gx1veWA6ViHFcGBy2htvCdgLbPTdDeF3DFXWLi62WueGej32z3Q",
  "key18": "229ZB6whqrwMcc4JdDKTmKq3ABNiX8RG71QPNghPDo4HGC745DPph5bXu9d3YD1JhtYRL9EkNCTmBMaRZPLHanB3",
  "key19": "4Y73efoB8F76Nhg3TBtBh2FRKseS1gCTkCxx76mRDUMddyMesekewddn3nWFUBSafCUJ1rTWQX5WVtqhM24DnJhd",
  "key20": "X6BwBAMotPrLYfMbZGtk4jFokZz6d2N2nD75zXFTP9MFScqgt68psNY8CvqEmWg9c8CuixbxoCM48674Kh8nZnT",
  "key21": "4PsULa4Ai22ZRUFA28rVgJ44vFpeVqnRWF44CPDLgcX9hGrWoK31qHTKzJ18GsHxMh4Tijpc3iZYGXhhZHn1fxj6",
  "key22": "4Ko5VUbwBW6aqBH5XR7zbUXrYwtjspPD9DNaU24B2cDw58eDXTBu1YT3TKBdv9PtmyDLs2qJUhrjCT3NzakwMrWg",
  "key23": "NJAm6v4UYxoaxUqqS1Tj356vXgiSUr18N5eGZvm4iVoMdyH1mtkLsRqgGPDMpV7feR1JpZzmVQJt1nG1ucTETkV",
  "key24": "Aj86DaAdAwYVCSdAUQ3cTvb7THqfpL74Pyn9GeHxoLuRoLQp4C5XBykQBgWVH9WFrUBFLJBbqzeZuPDa5mP1U6J",
  "key25": "4weUhLuAQsYYzke4DZj8uADmPPgasAu88i8TZQkVCKi4JbkyFocuQTqLeg6Fiows1FJPwmz3SPh45MK7C3ixdYfy",
  "key26": "Cma9oBUjFw5ZB5nF65i572G47wfAHJebAH9ESbLwwmCQd3TbNuttbLiMsFXeVxJovY6zf8vEuTQQbg1zq9CQ9ZX",
  "key27": "2ZFFrpaSeUYGgnNwftSgz498TCuqywdh7N9bdZA5uW3G4RWTxryaxn47aYsV1UJjtxDT96h17yxjAGrx1rnmuS7q",
  "key28": "53BvGGT968TDjfKdDDQZ12cL4qvTRaME1wBinaXVmVozWj2Hj94ka1iXjTKKEigXxngpCQ3McdSQAG61ANnmHQKC",
  "key29": "2TUVNv1Na7KpctJz4QFoFBcdvWbKAiNpW3xoW6ZYQKn1gEoytfX6zsUSxApohoMZEBvVRQjuVftgCRZxSCUQBTy2",
  "key30": "2MsxC8SzAoKQ6R1e648gPCF36RZztmayCwSgqtJbsmrUSqfd3gK57vFCQtJu5bWT6X9snYDZSDnQekxUXD2FiiUM",
  "key31": "53P9uPkH5AuPyxyXCiSGMapiWQGMqB4eH4X8d4uYo5SADQu9xPWSyKeWvVVT9GEURaTwDQKVNPdwZ5M6XQSjFQtD",
  "key32": "5KHztcm9GVCkjYeCzxpfjZB6sz2HM4HG8nb7YF2BW9JVHFxbGqxZVp5DY3kmEmkqMevJ4f26jwyRVDZ44k9JCGh6",
  "key33": "3CTXKKCzhfXvKQLUS9i6zTDHAoq3L1p4v5RztNBaYkic7HX3NU6yvb6R1vro9zzsN2NJ7vuuRn4rFMzwJ3YQqkWh",
  "key34": "muuGgpFAAFnT49tZtBMT9gHujkWhv1KrhGVcBWDHnHSMeUVgtpuZ6845Zd7VihUGouL9eqURQMsjw7FKjxc4Cey",
  "key35": "3BM3MKdx6PQMEX34sPnzgPjeNeCgLqMsXAqGRmYtWfwimkagXsS8t9uGJiVhvcCJxtNuk2EzGVCkk2vNrGURt693",
  "key36": "3JKncimhZWaCovjNhN826zUHkgVNNbTbKmSWzo4JgvT93Eg1bosCYLjgUmcF1KyKRA25MqBBtaP8kCyzLYDKrJhw",
  "key37": "4uN9EbMi1CLsKqF3JYr5XoqDKZaRvhmVzGJ1SeaQtVcvUXekutzuNBBWGE49ib6cNQXkC7DAP2YcK4zXz5YQqFBG",
  "key38": "RaWKkj8YxzauAy1LoSCtVS7jj7S1Kkim6o6kpDTpGbBJe7dSxmR4PV1UHBigkEjEwjWcUAAVGiNLaNA7dxDRiag",
  "key39": "4UCLcTRiLeaLxZzVYcfMQ6BKbZGYKUFz6eE8Sb3ufou4HsM4L9jFT2xmUdeH9A9Aeuf6xT1nUB36L7uS9AorgNEY",
  "key40": "2uxmUf6z53xiFKC8AJqMgpmmxygefRfRA75bVgexrb5USEgLVt9mu7ojP1KSaVbp7LAZhkh13kqHcvU4Af7ZovX4",
  "key41": "4oMG7rtvDSzrdEp1Eh4SoTj3Nfpv2rSwAXSiVCkrTkNQ1zW2Men5XbS9bpAXpYkVkPzQSdEADhouqr7dQEFNCfvM",
  "key42": "4RJJDmAe6kbx447MZNK6FEqzch76c1UKtCd8SPBuxNVAUpvaQG8BeBxLJDxt8SmdCdtrVRG72FZAjobDhi9iZ9SS",
  "key43": "4dRmmc99zktLLx1PECjSJtUJVWA63s3wYMSkGLA6bVUDExRKHD8F5GaxTXKfcMBnwKbD5jE96k8aggp9MKQ1R9um",
  "key44": "8KqiMubKfGv3cAjQqb923aQipxBtAtVSdm5Z1bQkfxkPht99jd8ekhgwAJCZKiSbSJsdLy572ebmZh9emco1cfP",
  "key45": "yj4YcpdtzjPhpirgrCqFhfBmf3ESp25W6AV1M84r4ZGpoJGtfuP62CLkazgNEJk3Qm3K33xWasKxbKZniJN7ERB",
  "key46": "3UPedQPLeJq2vGazdz88fHcs2mHZttfg4Yvkf73FW1Ba7NwD8GzbKATmrzN8Jtua2JqTeXdyri8nru5HVsE2xZcq"
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
