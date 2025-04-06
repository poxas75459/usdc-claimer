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
    "ZXtNV6oNZ8a1GeHkzx2Yn3cxkeaR9QBBjTXFEQCpkkUppiniBmWwRfuTzco6YQYi2fuAPQvopFiX89Hi5ThwR3o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V3ZhyEsvzLTFzMTvsibWrGKyE4oXCn4N8bdQ2HFcUH1UxSRnNwzDjmTYNVNKHkiw32RugUHVBCVqgNikfmbmmh",
  "key1": "2Swii43qwxDC3k1XUnicWfwpcuBafNbdKaotK2zhkHQKjWSCvBck9wjr154cgh7kgujWxYDLppLEwpVurSRTvJqE",
  "key2": "3giBG1ou1F4j2CUYkaz8ikTvwzi5a8pn9ibCPuHNFUAvveSr5ov4VaobHBcNTJJ3TT67HpHp9xGCyW18Va73d2SF",
  "key3": "5GHrsErTVZx6oniKbdBoha151PREqQMrJuGrebijkkiKHPiUrMxSPq9J7zKxNMhUKqM4RWY18FRbjZHABJVuHmSW",
  "key4": "54rrSJWp5mc1GCTRdmfJWeS6Yo9wZZLFhvKsS2XV1sNg4oLCkoApaQGC48vsnp88oY8bsYNiqGMTsKK4W2u16Yw4",
  "key5": "4NLZznsLt9Rt6d3cfpwH1z9oR6DsfTiQibngQP7eDdtogEa27P92xdZTREJr6PXVzs2ZZti7GBuuNJfbFdqsEkpi",
  "key6": "2WXX8oKC5ziwf1KEctA82wriTYLaebaAcnmi4ruUVEEAbP2Kv9d6JnkL43z1CQigGUFAbVc2WsqfopVfAy55Ui8J",
  "key7": "yNxi42EenMtUhyb3Xd1pcL2EzN3uWjAMFYXKPxkgJS94h5y2Cc5JSzuLEBY7WxYfn36mXtr8qqfrdYScVp4HPik",
  "key8": "cUqcV86cJ3FPEoYy42mWdhmUerF2SLj4Eo2g34tzekPCQisqPsPoFMUoTzFVTSAin2zoGwZujiLSSiQrAigYMCU",
  "key9": "39RuPuCiBYqLafbLmD4AaefT8bAXkbTdF2ULvJNfs7f9Xkwja3cr34YkwSvHVqR49ieYmfQUuzutPpiso6Jd8usD",
  "key10": "4xfo3ZefFzT712apGTNvoySMShHZQpHrmwK37oN5M8Ec3Rm243QteCHZMDsroQzChiWksYwoVA56CNVGPWbwad37",
  "key11": "mMdYWXeLfw3dPJrRs4jC9B8AFyeYRVkt5g3w9otK5y86Y9vsZunxhH1WKGhxY5ShDTqunfdwaGCq5dg8bf3uKnX",
  "key12": "45NLv2YZRciSXG9vZE8BZxrpCYUmC46WTJN14BZMJ2EZWMkoGbZhctvVGyTsridTzuZSJWovdHwKoPTP9hoUBnhZ",
  "key13": "38vHpQKaP99fJq1ohHYKxEPmKMe5ydKq5J48SZY8paQTH4p8HQtLVUNnVEtcMcZGct3WbWL5CZHSraLz7XuGmT12",
  "key14": "5f7wAs5ZDGzMwbpqq6eS7Yz5vmNjhdDb1kyNiht1XLinQxNVkXDQ1XYcfQRiPYfKXaGSkiCn9dq5v3G7y33snj2C",
  "key15": "23DHbxsRJtj2a4zzoHocrkrqgFGswEmXaySJGJzy2wJdMnWa5FH9shLHkmqdLaHEU7kztY8bRn37sLMxBbnuzwmt",
  "key16": "5YfYN57PvyjjT3SeYAgN1zii34ebMJAsyvjb944rQwpQaX5SQjfoitbK7sP5Qdm4ZBwYfHjypRu1KPZWeq9ZSkJA",
  "key17": "4X49HVUrwiMSdKQffTYc8cKGfrEpu1swhs8cFg1copt89dXrptMh1vFhZKZHHfAfew9vyGaroj7TBQ8AQtWfo6Vt",
  "key18": "5BuN7TKF5Ngankh16tFkTwYWbRnHDXiHnnJWMdNCaU5TLqgahpEu4BfNg7pxUwoM48GycDVo3LhCJtTDjyr2umGM",
  "key19": "51zKdKmgSQwPQ9apuisXu1P3QcvKqKDr1oACUChMNgjyzTeKsS7v16vAiULAWGxDyGd1oouRi4aGRukHRqWDFNRo",
  "key20": "5dFdzk77bAccuPwt6pTUQLhbrV5Bap7S7mwbH15mYR7yANrGLceoZpQvxbk8gyywkcD1Y6jB9sgqPBX4YYVgYpZK",
  "key21": "fYFET46dMK31d2xCs1fSTqEitBharGFsFJfW2YrWC2HvD1gL8mxrxmmbtotsaggma5W2Wx9FnG54cQTNahghLuV",
  "key22": "2ThquQAVhc452oth993aQb5N4rwgduzbuW5At1PnAhxAAytJYmQjoMTdc23KVc3AMobYXAh5JNNYxEWrQNgkvoao",
  "key23": "5TvRgM5HvtNyF1BZUFddW7kvjzs7c8fCkBEtt8LMBG7t5eHrMXFCP9cfcRPp9LdZg6mmxtKFiMSA11mbtM6yM7i2",
  "key24": "52aGGsVDKK5ptnoogtZigHtSPHC2umL8sMJApSLeKafdnwcSnsWsE7Q6H8k76s5Kz9oyLrU5Jg3T8ZiCWV8azFbX",
  "key25": "22QPonsCtkuhHreFYVTxP5hbfb1qEgqNbGU1L5YKz1AAFC2ckDNwaDH2MSLGm1vTXpcdKiRagAVYY6Mf8cT2q639",
  "key26": "4ukWwWNoTUpLDyHKmqdAycWp9TiqQdPBGgZPa5yCxQoC6JpwhrYqS2WQr4coXiDZBk9AwNMbvEwdCys4McMHGa5K",
  "key27": "3ZFJV4L7n4oBfnL5jXctQFiwjS2xf5EhxYJyNgnBbumWtYMJ1DcEsUpzGNHGgVfZCSeeN4YJRycdztLfWZn5G9bY",
  "key28": "3mWcNPChfVGJnDG9PCKhtQtGYrJEH7sWnnSppzcJg7a8UyA9SckCP8sB8RmY85Zd63BZxPdCcPwVBBGjbMWcqZE9",
  "key29": "27uk1PsTUtiR1RE1SJsPiq1MSMRGfva2onDfUdp4Xhrkvdh378fzwmPXUfbQhS7DHFKzWAntrKxVM1x8Pk2Tyaji",
  "key30": "3PePmyEceMdkWXvUuqFgbqNoryzwudRFZVFQWahK2JD2QFM9i89KbHUKDFZPh9QyxvHncWJ9oxiHFQuoffsxyZXj",
  "key31": "2RuWW4xHhXjvdAeikh45hA895qc4BeMYumKFex7iDcxbgFQ37HibJHqcTevZJP85pyx7RUtb5QKJsfVHNkWA9PMP",
  "key32": "5JHSmuYBadNUEKp7ZojsWdqMb2QvvEM9zU4TT6nc7c8LdCmAwusAPTK4s7FeaLvU4GcxNLWeaCWEQhLGhhs4b5rs",
  "key33": "61N7Vad5d3xvbmDZSiuiRbvVboBxhc4JDQAgdRzDDGuc57Vre9mY5aWsL81rGeQEue6Wb2rnVh7S8koLVzhzc3Gk",
  "key34": "2ZZuACnNWsdJ3FiAY5jMrLFa7H4Jnm5ce5f9w7E61Yebqcdt2hWrxTm5zYSgRNNvYeYLfAU7pff1NDhu4bQcaGxD",
  "key35": "46DQxYjYcRgM6KjxCdLTA5bSB8paWFpvm52CBJPusTiNhSKsVWDYvq35XvJ183Jj7Yxzowcp5uchf4ATBF96BkSD",
  "key36": "3rk3zqyRMKm5yT8DdmFFPZdbjBYYHaBDzVGp2LxQZx6Wxe9ZdS5Ds3sFvzZdW3bqHMmVeZKTSVoqCXRMfju6ZLY1",
  "key37": "Zc7vHEvFoXwTkdb2icNDyEhYZWtAfEr6d5qvVM9rBvTmCLSxvuajdF5rrbyUNxHmWenN3uXwNyo5eP8fUyxPQnz",
  "key38": "4V9sieCZszbqDivcKmYfTjKYPKkNJs7DNGQSynorPuFNnPcf7JDauTPxCdgoQHidwr27tfJb4mZdj2TzQHC8JnAK",
  "key39": "2Uy6Kgm8bgeYqZQCqMbT4DhtVr2Hs3psCFDumfwtfvWYBDdsbVdhyQcMKy4yPyQDvnwcwhPdNQwdgJ6tqv2t3r7y",
  "key40": "2zWgNEX2UUNdz9SAuCfE5hZSp9wQUGpjEpYGz2FrM5ZYduGMGuC36Zh9fzbYYMJEiGhmSrQpWngEmpUUyD1QNjzR",
  "key41": "5vFQFqAtneb8Rde99Sx8VLVy42q4bpHGkEEJEfEqHaS6gpzj9y7rbqmoksDYfmbnnz4puJxtWVjF4mrEPFu74QeE",
  "key42": "5MMZz8cdnyoEE79u6xJBmeJCvYCGDFbChVet2J5Ns8DYTSbhCu3GX589omT5C3NoRNNEUeUeaZsYrw5jxc3nqUXV",
  "key43": "3gdPqjQb6eqetPcrDmRPmgda3ftG8x4pkmyjeAG5VvDyNPyKFP2eZwdqieEv75gUqrFMWxEh8C92Ag3qo7yntNr"
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
