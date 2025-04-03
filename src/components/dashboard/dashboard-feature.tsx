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
    "5HuNgbm7gTThuNHkts3dJ8FjA1KqCRd41EgGYVWx4aD5xV2EWT6hdav7i9TZkaWQz1Q3BnmvVs7QijxQJ1MKLxDS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cgcBtNSgrTqmmNJCX9v4wsKagRf16RpU3p9eZYpWwUmFnJbaFS2iQwr8zerVupKzZwS12Q4jo45Wo56nNFArGrQ",
  "key1": "42T3YcNpmPchDG6o9JTaqezCh3sfG42Z7t3imMtybSUyPMjHeisNWxYp7nAK3Dof3vQYc8xGQGHVNnLAJnbh35qT",
  "key2": "5uGjDZyPh8EK98yAqfWfRJTkdFGJVpsLir3uVVr85bzyLxC1Z7WtxSdjuc6SUmBP1X3QydRxsxwT1nL3NgMi9Rpg",
  "key3": "44YuJSQ6w2cTVFKqBytkpeCpE1kJzzmgPsyXSFra27wyofHGgfn4mg3XA3EUuiSNbDFhUbarR7iH2qs97QVZLUj7",
  "key4": "5CThuXVfJ47KnzsjHyw2y3agTfoUiZxXYaj4SkDenaWh8SGLUwELRPXYtr1nPtz9gdCk9yRj4Rduzj5dnBDvbbb5",
  "key5": "5ythipD7QAtt3onS3WbipQstdKH92LPi8VcS3RxqH5aMJiWvEWPfg8hPDMvZPCwcc2Se1vUfyWsGvaY8WCnv8M5w",
  "key6": "41CfQ3ds4t9AF36Jk9YHPFBssKGrZimNCyviku2BktRvvzWy7bGQYLNhi7zFogP6EsUfC7MH1LCtVeoAUGtCokGQ",
  "key7": "59NtLFh7UNjZ3WkmPczpUjrZbusoCTPEMQ2aP6KMSZm81Ew4sMHYFzL2LUxuEQnWChXQEEgspkw8Sda19ob2wjJe",
  "key8": "644NAr272WudzC8tETLoNC2gcZ6Nus9XdroYLYNnuVoMekQ6bBBnze9FLATp6oveAhAQAgTBgyJPACZPuMxSZV5i",
  "key9": "2jXVerMvaoEKKd5fcdufXLKnn213xFuQuGewgeLr3apebqCogZnU9a7XnFZnu8JrgGTCi536Uc9PXYLez56aHeg8",
  "key10": "3GVDgwhfokr6U7pRYJsScFjdMSuzGQta58NRXQsitNycMQyJwJLJPtfJpSH3n4FxqtArEyYRoSrCFNaetCUe94cK",
  "key11": "53j6CV1D74Q88ipGdjaZmymn1mQ7USe1ZKRiHxucCaDFRu5WAR7XJCCpCiXNpLtyvo1bFGpNhu5MhmgeXDoUsJxT",
  "key12": "VyUhHQMmmn3v3yq6BCTM5n79VXwUefDg81214Gffd2Ch5UxUk3h8N8gRDG9KUjUW7Z6wz3T95U5kXZvHX8ENnC4",
  "key13": "45zCVAgJ9UjPFS4vsmnEUgoEb9D15FvnAFSWY8XSKz3vNSTmugAJCHfqqbpJuSU8imxmV6TVF4kzoqH1Me6AErjH",
  "key14": "T6kzoLAiYcPwRWoED9Y6K4cpDVdmDSPtWPxuzqCdpt2rwDdjxgahnoYxjn3ycs2riMS13jaStm2SNhW6FybTiE6",
  "key15": "5FkGhPKfwdZSjj6Po3c38HvfjApXbFJ8HYS33gqRH6v4fLeCfvedyZuyVcE5LjxDcssQb5bAYACALWEJaF7gR5oV",
  "key16": "u7pGmq39pgxbkvF5wih4dze9ercPpxXRXnkqXxz1R9aLauLt5xiYXSpJWZbsXPEmAcHeeyPJSNMp15dRPuRDUtc",
  "key17": "49oTRZZMBycQb1dhfuwUoikpTShvTzWF6GK4jYaTmgb8NVbayRATgFH5YtpiiKREzSVEtUGnJ6wAUwwAxYoqZesD",
  "key18": "vqD1dB99jYTWwe3TRPoSYkJLPPuXLQxoj1ctyuR83x9vCH7kUzdomyLXTCmNQu6d75aDbrzvTnkARoK15UNgMEx",
  "key19": "5KBopGuiKYLVkjZxJCYnnBWXhyHe1xKrX1wrFdrxeQ7qPq7eURxdVUEQCSQLxTjpwAKYvuNevzV71is8q4tqET1o",
  "key20": "2cALPa7SosKNrf5q5hEnstUWh6tk62pjUWMTr3tJjEEidYRythnCtHU7PbaX5cbFKKntfTgJj8A7YV88Kx9NC8qW",
  "key21": "5RnWmRQ1tRJSgybwXPCFcNwctBd2pNYA8EpZG6GuFv8ufJHHXPrtUVSgHLPRjaAUMTTkmyZKMHYQhaQzt892hCPS",
  "key22": "5Ng4YVUdVfvRLpm78GAnLtYDBH5ebUfHU53XpHjYLY16iNH8B3twef8pTq2UDazQoAFq5anCTRG42ftKNJZAuz8Z",
  "key23": "4PGMo5GwqZxnctufTsJT6GnREuUWme3hjPJBkWGeKB5rWkgsTyg24DFBgdwWQkrVWbnpgwMhqLhDggHVdz4TGEDq",
  "key24": "4q2t6VqLvs56XWiqR2pCNF4E1dAxYqGr11zXwnrT9sXjS4YaDNxDtBkuu9wdqM8ojnAEnUM8BxVm9UCMiZ7a5XCU",
  "key25": "3R5N9s7h6R5FaN34H7QoiAJgodyFgAXi3X9jWffRE2K3wjVZnYkHRMtCh45TWUQ9XnfxytLZbLwaEenbv7PT4ECi",
  "key26": "qr8h5hZRsgVhgqQ4VivQjJb4mDjwQo4ozrw82qZDRdqhsfzSqS9KdQKBHcbn1sCMb3KYYeWn3TwtLMEFRrYEaMz",
  "key27": "3XLWKXRnxffH2N9eduNL216u4XZrZy4j9wRR6gZsPzepMEDZi5rSbtoxHUb35JukDmLsjUg3ZHNfzgSN3QPAW3rn",
  "key28": "46J1mjD8XCfieriYJKimwDr9Rg38BakoUBE8SifoaPph5XV3Q7iymr9J4sJTwFYjMKejj9fvkPuxjocYB46qQepX",
  "key29": "3aDm1PBR39fQRKAX6jsDgbKzbnnTDPTDhDP4JZahbr7VMHRvV8Ad8wJPft3G8AKPod5qZZfDiMjKtLb1Yj5ifRKz",
  "key30": "4GEeZ4WsCapXyo4BoJFGEHXachQjFG55j1E6xGjiRnmLogHU5FjbUPQiDrtab5HWWoM51yj7G3DN3NoB2m5MG98Y",
  "key31": "2m5vrRcSVxNRxEHc7bLvWYfDYprBLDTsnmhfSaXwMQZCrqiZKiXM1f436HztZo1MTubkhUAnkkFaT79EeQ2o6j77",
  "key32": "PW2jC2gv3GJXpeKK5JZNuSFmc4dgJMmnB5rkxZEpRSYdrciVcDhAdPxDVY8BfgfsypGQLjfBLd3UgTtimuSogsr",
  "key33": "raBHDYpFzunoEkzYy2HcGohQajaoJpxrm4tado8PJXCHWWELJpDoZxprgwMdnvpxn7H4ngWsJp3W2pc7bvxnZCq",
  "key34": "4N3FLAufudqh7BQoSh9EtebTveqRrjPC5LRwTaePybEAvmkoUgeeenui2y7cvzipFbYs71gu3zKDfwoZ2TM9QUAv",
  "key35": "5fdeREQx173fRum4buberg3JjrrNhMKCGdxXPqYR2KqhrsV7KheP7NZbzouv1RU4SkgQXoe7146ZqUeZ4vd5TRUX",
  "key36": "5Tt8s16Ugm2Hc1WohABM6vX2FKyExggFbUMjP9S4eV3MomZpi6MhyjJv7v1HdnVzRk7bLFtxyxXH3PGAzWgxZUHo",
  "key37": "2thJzhQLJXjs9Ng1iwvTe3mBfTiauNmBarBSDSBdLfFBfeiZAHQzcFHUNedsJyg5pcamUGRPmAHuAQNRa8ypAPMY"
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
