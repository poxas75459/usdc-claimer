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
    "4fsGSpdmYZoTx3hDUspWJLoKwQr1soPaBRQfwiCWkFvp89G3wrxMJQMNEJV3YjsJq9NSP7ReWRUs5JtDa5moueVa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hyaPEqdqheHgyjPXW8vYAGL4XQCRfosnBtpggQFyLtHwydcngKrbz1qKguPJ47rTdbN2qXAsT51BAwUxEXHgwoy",
  "key1": "33UFDdqn3pk9YMvNRBuWp4jJE8poQs7HQQ1WHo7Dw8vR8r21ZnvPsMheEa9KnJiMG2Kw1enx3NoeXg82uzDtNyZA",
  "key2": "43smqjUBfXZz8DtqxkdTrENyzdhDsYJ1kSVBGLUm4SEywUV1VjePBns1fFpnndJW84ZK4cdjSMFoq7neZY65rXgZ",
  "key3": "dKwQeRT52dKnmXWYBGFjwxiq3DcSerisnr1bCfqWNyeznkVMVYftoiNNkcg6zLF98NMVzwnPkwSa5z8D17nBGqo",
  "key4": "3VnpwXG2MhLSGMF7T2VZuYaYpWDfnajLxZfD5mkEdMqDvGi75LDrJAa8JmsM2njcdtyb56QVEhdcQtUKMACJpt6y",
  "key5": "92hFahExs9Q12KFSBQWXFcAye9AtXTScywDi18VxUPdVE53v5Hhrha9YgsdYHsBKAWYjgyedX3QqDHB9C7BFeSv",
  "key6": "u5WJ11gcvVidQ1d7cicsfsCorKnon4C4RfiPWz5PhSiunshnMde4R4x4rYG6ETsjueyUBxm8Tgn9L2SQWs7ynbq",
  "key7": "5EDXdxfeor4PNcmU892NdjwiQgutqPdFNmS2APV1Wd9s7GHCm5Fvr6J6tnHLjbPwcWQ7S1mDsnpFUniYn7tioQ37",
  "key8": "DsisoULn1XjtcffhzwMLSAdWMZqrBc17WfGSdq9Gobk1VGgv6TuReE8bhm71vSCnhPXfrVi5e1tjfMTgsgjTp8u",
  "key9": "3fwDYmFmPHAvnrdsidaXwoB8utx9zkeu51K7FFkMDeZvKpQT35x5GQYARvD4RXFDXb3e1av83Xnz2fU1hnxNfijx",
  "key10": "bzFGDVtPrcGzXKDyWSMHJ4gghjQGs42YfeiqtKpYzwtig4oAzVmofq3Nrh6HRwNywqbvuNMPusHaRrioWjEEiuc",
  "key11": "4Hb2Bwpp8wGeET4KSKF9usfPHrMCNEDwWxC2FG35oJBLkHuA8XvQZ76kTCSd8D6N8SmBF33YJH5gDmjLZkVXdQyL",
  "key12": "4MpKXnY3btZvBDwGU7B93JBXPWJoUABiBroWBSyxLzQSBiFun3tYVKzfv8A7YG6GEFXrRjyS9PtvATNtJtm7Gqw6",
  "key13": "64MQXM9iNtb1hsJgv7E1xh6PramdPcK2khjTUUG8NPK4srrs3A8KB33y3m2YdDwYhai7b44ZoBthH5wUnZZXTxB8",
  "key14": "4hU6wjpFJ9dN9XT4SYxXG6LSDKJeQ6KWqHNR4ia6Nuw3R1ZLQTod4bJomwPTRPftRHMQpuwTH78BK46NCWpDhuxg",
  "key15": "532kfSuHDsmCKPAyLuuMqRiduC4EBsydjEDGn3ka6EgRXcJ9T9KBfnaHsFFof2xPczjBURUuVM64V36SLVtyF4mU",
  "key16": "4iYza6QTNHX2dhwUDdEye8jp4iTFAwK22Rck64KPYQGvMuB4iDhiTzHAaHRniTuPUC2754igdJcVf5qCyWXu98yS",
  "key17": "3JhNXn7jFPA4NLjGfbcuCAL2HWtYb1NcLbfverEnZgf1hX6q5X1teB1eW8z8HgvaV1mMpMwfGJBBwQSVPcNxPTcL",
  "key18": "2xSKvXQEqKWG21ko23mepb1eC1tHBq15qwRDu2y6bN6dyxBFPntpsxF6BtyajF3pFPyFUcymseWjaWYASB6xKsL5",
  "key19": "4dnxLPVTeiTqLBdiFYWMuyobJQj5yqUn3fDoJf9fQtkDi8oWSMGX4dkaCdMQrWpQWQcueCDx2KrFd78iUvQ4QSgd",
  "key20": "5KCE2xFExb7nFqpkkCwtmTCTYYdH4XZ1yExUcd8rP6oVEKcsPaEarBqGzvvdC12M3eS7C8U2h3NsEmdDobAVhDpp",
  "key21": "21AzwGduTUochq4tb7vheyDfCBtTeYjYGDdczyTbqvphHnRS5agDKDWfP7xmq6zUfuRRwp93yN2eNGwdm32MFqsJ",
  "key22": "3q1egrifqdzKeyc1ny1q1htunYRS8jfTBZ85eoMTzc6Yy24L7xgZkQ7GFuStANEEL9ViYnvjrKw8k9uQf1LkiAHd",
  "key23": "3eXJuihM1pqDZSwPRzi2hWRgbdV7Jq8e77NQ8TDRj3vkscRx2CKkyJmn8GjDnmoG71WxQqyFNWWpv27veoJZqpko",
  "key24": "PFxCMAhgwaH8GNwQRM6TPt48zqZM3LyzNx6qXtZ3iJERUcV3L96C6GidN9tHegBvtoh1QsqCjGDy2xuhfnuKBzM",
  "key25": "4rnBQTvYXrktmDwZXNktBdp9UJQvHYuBVNTnyxRJLWjQatAKKssXxYvCinaQ6FUzBt2kazA3Bja9oyUH7ex5UNwb",
  "key26": "4UmBGkjmdQw2ViZDrDK7zsswUQiXXYLV2Laz6Uw9Lg3NsP68agfA9Tvg9wGaTZJ1gyDWc6kfKX6Enaeja6ogi7Ja",
  "key27": "5JzMnsof9RwYDQAoXryhr2SkJWy3J8GmvHGfif6fLLYjPgiyDqQeqgQNc27zgf4k3aN4PXqmhmX2x4vitgpQMBqz",
  "key28": "iG2oquLAZKSwWaEZ4gvXCCUK85HFnvZxPNw6NtNvFok5XzvUyC3mMkG9bSdos1QXLYGJsQqjTMVPeSX5A3NhzhB",
  "key29": "5gmCrFgeQE9SfFz5Q55yPdUzdgWCsQMg91ZDWNNrvm6GsUVfTewMeUdDYKqqm73sq74jiTWcMmfetFvFPZWX5ZJQ",
  "key30": "ve5kgTW4nH2La5RstC54JTsgc5q4u9PU7qkUcn13nn16Ba9jhtBDZLmZpepcei4QpsjoJC3DQN4ZWz8PX6yJFn3",
  "key31": "4SkqRovDwuCTKVJSctak3SEF4M41CNnTUJcGpD44kJeBVnAVHpSkDrairH2XUkqvD8h7moKzZRVgucxz5Ju2ZEj3",
  "key32": "BcNMGxQTm5R6Mdm7Ryirh8F8hgpD4pdvgM7q2Ssk6ViJhsQf4pCLJfF6HduRkG4JwRtEipavbadLxZGHPWbToXS",
  "key33": "2rUKyRBZARPdMor5wtQvkPN4jjpL9xhLhQtwwnXjQ8MeCn4ZaCkgTCC7WZCcUgmFWDHvuMMym59MfX2oDj1PJ44C",
  "key34": "2jV8AMhV99MCYyCuviJ8giwZFMGD5pmswDb3MBcaz74JfpZf61DkpovVFFvjf2CNm85nfKbpewQUcHHQ14FRochP",
  "key35": "a3wByNrZzi3ke4teJ3boC7kw5eJNFggkKMr6hNEnodMUBfS6sr7SiXcsevRMFM4tNohyQ1bTJyiUNR9fZShKDXj",
  "key36": "5gMz298NzoaUtAvSXqiYxn5V1RomWeSuPZF3oPbi8yuVw5n7ybk3TdugRkibDS8VEWcyzC27MJPQUgwBw14BSiFU",
  "key37": "675mA6R6ULXdj8mg4JhKVtRfpUfuRwgsxCVnZGZirxGFe3gdaAgG2KwHscy8DG9uhC7fiQCVW5Ki1ybZ4AXxgqe",
  "key38": "67bi6L4Caru4RkLxcX3BWbukTZgbNf3VTL5MM1e2n3desSyAnQvTmJeSgWXUULyeUyB2aSQ67VtAAKhpTbeTizcr",
  "key39": "2TNYU4w4YFCBcBUr8df3s7tSWHVzLuwSFxgT3RNDEjyS5kSxcTine6wVVhdHrCmvgS2TuARXP1KKQcj4obu4Hp17",
  "key40": "NW2BXxxVV4iE4noxmJjyeY7o36m9hL2bfo5Bd9Mz2KmhtVnxTNcN2J6sguvkm7PkpQ98KMVz29XYgcXsoWTg9Nq",
  "key41": "5JiNXU9upn3fRE2quaiKg7g1VcpTMkA5ZAf2duTpaQPBTVeEkxtokYtSCktmsbNvAFL63E8Y1wzDtkqX6LbRcC1B",
  "key42": "5rExEMxGXqLMSazo64uzaZGLcuQgd4HGcPQH9BGQPW456b37qk1nWskknenAt3xbYRJo2nTVUxbyykxmEco5VdPX",
  "key43": "4pPFExDKJC2u7SJZDtVRtFkJoNBnBwS8yz3R1UUKBysjEioYZt94Yth7dzzESbXgG1hLJEakK6HzfQzYG5m6mbf3",
  "key44": "3z5bSXbU8uEB7LwCsgDyrbGdMkW7Lx6LVMTHfFec8MEFgJcPNwFfW2ggu8TeL3PoF2LJGcynWcNKUNgp3Vz1F2WY",
  "key45": "3QGpTFhrjuT3GsZtQqwfPNyDERADz6UJFpdrvgorieD3bMnCvB4os7N5GrtR32CJMfDPcZrGMS8KsovxLKQHw6Gt"
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
