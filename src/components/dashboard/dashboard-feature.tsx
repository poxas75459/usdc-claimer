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
    "5hjYJpUDsEUTVGaJ3U8dgYf5tc5sXRzqSuUbrPRUvEZyMPH2hWB971896QGQpSxLmUeVaj7PErBVNKcBCuV1kJMH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FGKiStd9dvWrUG23gmSCoEg769Mw9o6StxiZdv8zHx6srcniWhFY1bCX1Ld2CVKqoN7NqnZHZP1JL7hw4czoPTM",
  "key1": "5r2XSHx92ZJEw93Zb346VVXkUYfvxzu29xPfNRowdVZqybPSiXFWrHBRZt9zDf18UqHFtTScWErXA6rak4z3dNQS",
  "key2": "2h9jkVoAKZ7KD3Wabbra15hxEYz6LqpBVYRDCtWA8tNz3WMnCQVVGvuWi7QiDa2tX6WYrZ65pYmfw4trU3L9Lyen",
  "key3": "KdVK7KBE5CTT8ZQN4yEfuTccV4V1TorwRt4DGFVDm7ro3JLXynDDsRpNvV185t6ioY1XkJkJouFjN3HGwPDXeHB",
  "key4": "5tgzbhjJsSGypGLarPFV9nv1dhekkAawFxU9FeNc5hSXnpbrMt75ukRm6T7n8QhTxR1ju63qgydVVR5hAnM7FeUZ",
  "key5": "367icnYpdxL75dDrhynHpgReVZHfVMAyHscLYaBMq94oGBk9yyuiNd48m13FSxudrz9b1P9mZbokpFJoauo2AjVy",
  "key6": "2rekPU6i8n7aCWyKHB2bDZ7Q7io8E2B1sbfmf5rJUydXwME4iwRryHVBEC4RoAgmRKxqKzbXFqQXgcGmx1wgNQ34",
  "key7": "2R2epJBZXWckKxgCqh3tYoE3TQNXpYpGcGECQY28Z1vk9K9QUfmcXodL2eAvGTzjz78rXCeeYnqRq6y2zdUjg953",
  "key8": "9EyouvvZwcZyGR7Z2mBE8eFvN54EyrHRMGkL56ajy9LmYUSm6SyepkqowXdFEtzoN4VzjAPXmnKp27E1wh2kegB",
  "key9": "3t1g1HnTRxJQXesRS3USZQcvKKXNhwdteFns9MUGvPDNsfmxrKUaKCZLF45syxgThmYayMzVvnUjH8h9m2CdPVCY",
  "key10": "y3vHAv29BL8q6R6CiL8DomGqUUopGY5oqJXHF1F3GsovPSgbt3hKUeCNKBHYowHqAxJrdrF6UFErYy5QZ7eWByM",
  "key11": "2TehwQRE8uSnNP4c8S3bzCxi59Mpy7gaDWUqvUZmiJTcQnjexFJRSEyKS7XS7owgEjkTXXpb1KcABJQsRQh7mj9V",
  "key12": "4fnmPrH29FA3JX9d4sPtB9cLzL1rDmMEusWCBpRGsTnCS9AVgczm1rq8H7ftwFjem1qmFaQbcob3ABvEHtn8FswB",
  "key13": "31fLj96rU6nQPF5THMGkAtgEEPCXfP1CZ4mToLq6UJwPh47JpTyCC97LoAEDdmZWnPDJEzp8RQiCUBD5zDWC7TS9",
  "key14": "5yyoPfMJDAYTscAAT5QWVB5L5q6E6mqDWxqAdLcNbtDMorF2EWgeeakcApmZ5xSm9gy3gg5hk7MXAgj82pD4YHKu",
  "key15": "SHdWDdSSYv89z4uSUzU5hmguhp25Vyv8cGpopezRQH9fSdgjdiWCn6Nxe8nmS9Q4nhUj5PBkHcEHBwkSMsbmd4y",
  "key16": "3zrDKsoQxcxYR7qKJzLBWMSZ3wkL2SvUHqdX5ApGmSsprxsvCQ1qrgv6oCE5KUBnSsCCk6K6KUQ4AobdYk5QaXz4",
  "key17": "3gMoJWXogxohbZ5KAA5v67gP23YiGNhjfbN5rCXaahGdYrCTcgpqY5aUbR4zVoGPEbSCZxbUgBPgNVUb7dztWTcZ",
  "key18": "2Va1VtTMXz4vFmNcfqnkVs8zvNBUnwYBzcMgwGgcVWP46xMTgfEEYLH597phnkWaLsLyUFU3MmjBZGShZ5vxqfwm",
  "key19": "2eFRxxQnqoX9uDic4rw2mWjjcD487ZAn1XxPABtAcbnG4d7FtYM7gz8MqbEov9kjT8qDMDt2hMNaC2Sgswb2DLRi",
  "key20": "3o5SjvNLupL6Cq3HXwnLVMnR33vAQPcdjXZW4UqCFveE2upyTcbPzXTjbixsYSZx2iFsTgNnyqtbER4n3SBrx1jm",
  "key21": "UaWqaKtY9ZA5UAFnvsfUrbY1bRWjUVHZzXRtVqampoWYisioeQ2ukRPxzFLHrzAXBAPr8PjaVicLW29Ts6WRRQ8",
  "key22": "5UdnT5feiLuhjnh7MZRkM2B4TS2R37k1uW74BSemNBDd37GhaWTuKAaxgr9KJESDHw3uRtsHdVTVrYaNgwaXHm6K",
  "key23": "kuiAtcFRUmCXCKXJc1gZsK5LKY51VtkGeZWTRV2yzfRfosJsvFV3bijqhUJLTgYZdTqhWUPCUD5itKKb2pvxLTN",
  "key24": "4V5ydGaYBF4Sfb1KLpEGyWoy99Nm67XNikUA1DsxSKBsrzu6Zfb3tQDWr6EXwGxfrTNrdJxPzuHQ1bY9JbsWfeTi",
  "key25": "3YYvoeHFX4jZZGqvfVdViZ5f2sVDzR8bvj77vNBMFwcL2JfzmgDVi7FuWq9mZy3dDwetF8T2V5U7i7NhjD5FtE12",
  "key26": "5yFydvGaQUEhUWnPBGfd9SVg2qQhynja6tK4NFxaneoxjY4YspL8maeg2SJu4f2UK5DPfLpeUMpdTkeZNvSnNHrk",
  "key27": "wpdZmRKNJ6vnYgNeXLqvoUFK68xXhFvy5FPVqwfjQ29pTDk1PNPP7xhq8ZadzvuZfVQtDNGmr7H45knHAUiaa4Z",
  "key28": "5TdUpgg3GAh2ifhxeLixL7auqQH1ZNCirUrseR4iqXjoLz2NKnnCQsZA5vo7Z7onork3VA7ULyk5CHusPZLEsbva",
  "key29": "2n2Smc4tQQa8y4rJtgrVZqpRie37R4U5b74CcEbRBhAPiscBHAB5hyxrhY2V7uu9KgQMagQ3aJFvmkXsSstvZfmv",
  "key30": "XS6vBUqWkYthRNbGQ75BZavzJaHpsBcH8HPwScMBJQHFjYkeMvy7WF1Xbx1HkXay6hiZtAVbPUaiaKTQPQLxNh6",
  "key31": "5sRgm1yfDGQ9aPpxkm8VSPcNkKQDUYwJFSCLmGqz7uFBjeGJrK8YRRhaM1xF22aEB6X3UohpQ8v9m6Ly8kkVBg9S",
  "key32": "4r7itWdywz5aifFEjbKGgh5N1fddtp1juhB4kAL6mzF2MbLS1WcsnhDoV6gUFPzsThNaRmxwyktPr5Cb8Fzi4PDq",
  "key33": "3TkseGLkUSFFwbH5Hw1TBxbHk2xkGt65oBiUYoH1nQ5tPLq8ydFkGjm5sD7HYrSyti5QFxLM7ybhjPhKRfLaE1zW",
  "key34": "495445tGAh8iVAjzcuLCjaKaDhjbQkYJBsiRKvDms1tCaLrQ1mdkTuHGT6XN37BwzsrBVVrBNE7JCgUEiT6Tr4ML",
  "key35": "T89LS34UUKpC1cHaUYKrS3QDtEKinPcShMSknkA73MSxxy3MjkdKPasztu92hVTS6M2DFYdAooMp8FzMVbqgoMp",
  "key36": "2jDZSbKri5F2rfNyc6C69GmhW7DqbZnsnNEy87iPcFnUd8G3sTzyc5taDQYgtQ7L8BbjVTEjmZcpAYppQPFmtP8q",
  "key37": "5u9br5sqgV8KwN6HGrE4EFQnCVvZnzYFK6XpKQzvJYQEt6reE2Qfxt8EwWUGR1xjArg7YZDJ1vQJtDNXDnLnVtLm",
  "key38": "4kJoPb3eU5rJY37iHyeTNWDjsTJY3DrFVq7QMBL4vvN6Jcmjk1aNUNQZqWFJBn1HoeZutJ186kE48WRxtzvrQkLM",
  "key39": "prBfb2i5jpe3W5XrXaosWFMGhCBz7xeq586kqiHcdMEZz4WgGDUHL2ZLAKQJp5S7uhX8FiV6msrWYnsg5xVVDzJ"
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
