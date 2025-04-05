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
    "2fciW3xm2V7EkAPuwbhNatPv3LhHL2AXsbv1LNGJpGDjApVjKjpE3gxvqKHWW2kkkWC84rE7wWww6kGU8VRiZ21w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AcBGsNtEyDeuqKBcqjrR8aefTcJSp5R6xE6FeCwax3ycruV7LK2sQtW7uy3fXRbsmFcS6ohZVip3jP1iCCRoFF6",
  "key1": "3EDu1g1zERT8WBSrErJcBN1tGaD57e46381EmZpqaGZL1mveXyAek4TPRFWfsRUsJaofuJyoCUciinjc7VFKbbAZ",
  "key2": "4GYBcwwa27h92ftGr9Kp9Fh2V4JP8JNQzYJUWGQYxPr2bCrdVCGxvv4znZ9uFEXfYJUazYwFvDunuB2JbvCinocq",
  "key3": "4vXHJhopqbsPEQzeNTBpZpprvfVmJfYD1H2RnK5EBQ8e6VfywxDgkqDqUmabxLvaPUzrUWh7RDC8iAUmtvKSieYf",
  "key4": "3adjaZ1uULbE6NDnS5oEjXzJ7mtzW3eSVqZHVx9mYXzA4EcGYBNuGneeqj9jR4DZvrKwZwLE7ABfsMaTnAfmzdEf",
  "key5": "3BPE3MH5WzafgT3hqRUfcUepQAicAe6qYkpsN59RJQBXuFpBPkRBZKP1isWZRaMfiNZiuHWqJxV3s7jKKcJC4yo1",
  "key6": "2uh9oqxRbwhsoNLG8CC42z8MWCDmH6VAouc1fZKRWDu6QdnGCKkiNyPX4oeq8Mj92TaAjkBP4bfoeRqfRga1ZX4i",
  "key7": "5YzqGaLn5d8CDUqfDi16fesvvb1GWKyHMSZZjDg7W6Je4EkJj8YZDHun3RAkbWZhtDPDgidcEf7EvYBhNYuC71Dq",
  "key8": "cwmwS136S15SXiLfUX1f7WLjzEKCZGR2ZUXSb37ac7zJrUK4KGJCKDmohcnVtZcfuaPHYjFMThCzEz9KtNRijFt",
  "key9": "4MPfRAHyc8i9CMZY2JYcHZyWY5VgQPuRtudvhTeKhceSjguR8LVMXxAzHzB1vrLfBmLUyEmX78yd5T7EhokcoLV4",
  "key10": "5NzMSm1kuiPajZ4CsdxAy7pVXYEGURV9Q9ga6wJbW7KyV5fkADpqisQfVyKVsZgTx9Go4bc7fGYofZiY5euRXhxz",
  "key11": "c1KbRvhczsMZTSdZoXdVB65LM836fniq48zN7vdqkZEEtQjUpBgRP4qVghyyofThYAHXRdJfdiGHDLnKbBBd9j2",
  "key12": "3gaL7t6r4YCyTbNmsVFtWXtLGsxhH2SeJ3thcy2xNjkttpYUPMQv9D7R94scYXWufcsMbNEsPnUX5bBrKuCZmZBd",
  "key13": "5C6gQz6QCF7fN1JcHY8LYPNAJjFo4dirzf2Xkfh1RhjaFae3oxfF9J1B7uaqwR5RPSenRT1ytBb4NM8pupEPhGmu",
  "key14": "3ofY978N5Nv9fTFARhXDsAozNELHQXUnr745roGRvKHynwizL9RXbMiCotYnseoVAMh1B2L8zk7ExAfqitwuXVpi",
  "key15": "3W6BJVKpvste4gyGLCW4qkfg3MtaFatuMroa8DPzuc7aiVHmqMSZejWnVEYjQr6o5R7YhhBV3eWE5Krfxnen7pk5",
  "key16": "5aJjTQEAVm3sL6T22H4g1CckpTdNBWwFWJYMGCfbatGfuUYeKGToVmtvov1tK8sHGZoo9JCZhh4rKnuHLckxorNo",
  "key17": "3yLpkHXbxvKGSjMJbfY1du5TgNisLmFyqMm76TkamhdFYihXucHgAJaf8V4utDChq1EVz5iFtvDrB7Vs9Rz7bmZC",
  "key18": "3hmdsXGYpY7ioWm7q1VR9d8yviwHgbs8Ansewgww5bWzKhu9w6aNDNNtfZRkdXxvhc7MMw67CkjdCy7BHoEURSsU",
  "key19": "4HR3ATBGRPpKiSPyrCZUHp7RYdXYoXbFJZdF9CWZRbyG2o89BxWjkuTGXfBQQ84n4cs7cVnzkTkFabMnBxeAWxq5",
  "key20": "3Q5b43jsDHRLwj4QNvkfvkfuTmp5Ufp77nXi9es1JJf4kF7tEzgVKNErrzkRdJeizCd7JNVeTgpygT8UF1TDjrry",
  "key21": "44hfaf2hGRvuNY3d4h8EAHpxgYUi7immjhnk32VMoBK7XV7ia2mm42E83Bj1KAxHDJy6ZJwFTXX8pB3WWZS8SCLX",
  "key22": "4cxcrKjGGg69LzMKeLvn7pyP9vcaiRKpxqryMg1qot26R6L4EcXmsSPoPKFRJz5ABRYjUxqKNzxpBAMrQCGsDU8V",
  "key23": "3HxtSrSoPWd9uMkVyXR3n1Ui3j3Ls9GSt4pmpDchKfJBEaefmQV9oAKZvpz9YkUDSyTpJkX93sxms2tHVPqahW66",
  "key24": "3tyC2q4RTSPUpAhiYFixXw1KevcnBwGEvMfBvL2QW3xFZKa23v4B17o6Bo3qkYz7wwDLajpiKPBbWASB3hMYwfep",
  "key25": "3Fg25ikWi343z62C4HPtofcuvg9vy6gQ8pAyGU2fPrdoHwkDPeQyjNuqVsNYxyUGoj1WxGbS9Q1LtRropE3cMmpK",
  "key26": "2agzNYaHY7kZQBuZ32ncPX3eDQsUh5myugZoQ8RWjFZexm8YKVdgXY2jH8JsHGetP9n8PQ2vo25XUoNvA7qGDLcg",
  "key27": "3R71ZPfvfDnyAiMEkZ3jfnmMP83frTNSJgoTMTq8LbXu6jaD11LVqsghhVodEDtvM2PuKgJUgxYzh23zroFQSsEP",
  "key28": "2JNpBJwQufEwGLG9bu1EvahbsXHXNjPdCZCi8BoYEBVMD748BnotoLK18jXi19r5nBdnjeWFeehyosHqnuKrcogB",
  "key29": "2wsCyzoadPzHaaCSj7QxAstrcAdkwT6U4MhqvENDkKyEZAaiUZ8DLXxxZEmgMEfJf7Dw7mgPSDsGvrbR5bV3Bzaj",
  "key30": "3BffaoHuE9W1iy5HwMkGydcJCvgEpinshxcnUeBMoWbe5ncX5UBWxGbWb2sb9ovb5ykHmP3JmQ5pF6EWA7R489a2",
  "key31": "3ZQEttN4LDTXeZiBVNh3HsewZDTcTYPo52t9Mzpp3WsNeQqpHQs7oXBbZK89SdkH1Uf7c8jNdXNCDiwgypfAfq6f",
  "key32": "2Dj2JUtoA3kiGVWdS5yvRoirZymAbpztvvLuxJnFDwmqQnLnxis3TrWtRCH9u6jzW7hBkWrMdr5fc2mL9WmP924r",
  "key33": "2c2rhPC8ccgtrE3H7U2ApDgFoGapiHWzRR1VyqY2DN977RTo4Hx84Q1TtMApRqUjzxNrSHUngorHMcvzZbNbeL3f",
  "key34": "3QxTeLEneccWpHGL4ktzK39p17baUDFUGvgH94fLqp4TGWDBDYaPm9A5S6pnE7DRWCLVtskT2JoKcuVdR5Jmotq3",
  "key35": "gJVWnXb8PAT7GcLJLtPmLCiLuAyL7cwzGdhSfdZXVQXvRzERZuQQ7SPrJd7so1Sgho8FyQESgj1djEkvp3vGxp6",
  "key36": "5rRFzZKCA4wyknCLYUeAaUKZCEYDrGpivh3EEo2CVVcGr7fbT1Zp7KTFi7SEwy6pL2dFukokwzN2GS15x7u4v8tz",
  "key37": "sbJ7JL8v7kB8n4dQCJk1tiQaeQj1a7abNApEHmj78s4k7pmt4gwQVTiX6XrTPegT7SsDK7WrbczwGv6pCNLHRH6",
  "key38": "2ur8MTU9mjRDeWaC6e7zgmHQvr8zmJJjqDTPi8RcPFex1RWhw8zUYWfJtv9dk8LiJP8Fi7sWV691ewJDGTvSptuL",
  "key39": "59cTExXuc55xytrQVfoW7myctNgtKQbDikP9kZuRx9Ku2YrE4HkUeeHgD4DkHMj2NQHXk4AArETuun1NTCtfAKgq",
  "key40": "3mRoL5F5jrECkEepX9F4fcRcamTsVWWEpZ1B5UrC1ZFGb1RgUtqg2Dz9TUXrJJiShQH1YTMPKioBS3qxKz6FrGYJ",
  "key41": "5Y4ehErxzJoTwW24rB9JkoCptmXMySah3v1t1pkaPsJLXUPLPZfKFbsLKFM2YZoHWp5y7AkPVKw4dnofmVX8keWM",
  "key42": "5vkhQ6SMK8wSmUBFvqJ6w4poXcPCkGwbYaUp68ACe6Npj6NtZP5gYqs6wHdFvvq5TdTnbiSKbBvAKSjkvJsv1a2q",
  "key43": "2j391uqkrMMxLPhkVxvfdUFdVbYHbdhmmrZr5ikvW7mvN4w2Wd2t8MX3Fc66KbdCFgPX1yeCQsUG7yyH2eTcS9ot",
  "key44": "n4HnMe5yDQPiqqawa4URiwkC5TDaoS8GpbJSeeKFKEn9gikzxr79oYrbboPdq99in2QB5FeWqEGur3DnBNkHqUa",
  "key45": "5saLqnuRczyD83JgHsin1EV2LDS7pc8R9z2RMfTvebvz5EmZCfLAG1yH7h58xmFZXm172g9MwLfTAE5LJPUCLMSk",
  "key46": "JSR5G8UzAAaZo55p9iVMeyf5bjtexqZYHNVQ5HXvAezURA3rzmUVTgZ97ymcFhcg4ovwfmtGuDj9WeWzbVevRfn",
  "key47": "5JUNS4tb4jpaJiLyHuPoEx62So1wsCaUxW9Q7QB8uZiubYsxeiqaT14KR6J8D1HxjiAuJopBDcYsYFYY7BURn9BW"
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
