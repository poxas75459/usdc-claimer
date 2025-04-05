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
    "4L9CYXn7h99h4tjidYsizwqXeSymA9x48UGxvN5ZE37WaFwSK3KhZbB6i6fZrDH5BpBPfm9gtWAxgcQT8HiwCrKs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GHwyMuX1rsmNPkG5XkBAHKFoEaTbD9xypr4Wa2n1P2rg8WPuVSMoY1HFRW5dyyKSVSXAj9VNHRPhD4NAngsR5DX",
  "key1": "2VMZ6J8UkwcqdZnXpA2jdWY78PuhHopgjfpJLvGAb4aGHjUo7c4dMuuH6LZBQdNX2Xu1UHYh8gA2TBBNWAkTpDQv",
  "key2": "3FsZQATPaCtBqjbr4FdKwmcucYk6iqfVf3SS2Y8BYmkUMe3cLY4Taw1vV6scGVv1kwZshUky62f58k8exoBQg7fa",
  "key3": "41rPeZyEaTJPjgP7AMmFcqU6qSESnhnNb2mRmWubu7wisHMv8P3dqKM26QCP49LSSgwCp8A4UcHyXGMnXA3Ka67u",
  "key4": "4bduAd83vJw8hXuSzCe4DXjRBLoPopijEwFF19Xf4yQYVP5fnrZey5ioGw1mkLAeZWitXx2SWygndEm9GZNXHwsz",
  "key5": "2YRmyJLNJAYtCq7Qr1yBBHYZWMSsTAJrToupPjTLy7zkbyAZyKsc3NUte6MNTom43pnppereHunKphhfeg1LTXyb",
  "key6": "4i5omDsNGo5z4j2hkqzL9HuFUCJaxRjrXV7qTC8M2UDbXFBTX6GkzBoUKFoFvMVoGUnTnKxT8Uy81iUMdjN2ZKhz",
  "key7": "67YdsELVbLddxDSAX5R9LvtEn6yjiksSSKfRraP8Z2SsF5JXGj3E7sTWshu67QV91MV6yoFsFoT7iSNHYbdTh3JV",
  "key8": "v8APdDsxiKcUXwPq748wzSMntgojmVs2Dxg4bVcCwYWVAXXY87ikxpVcrQcLSeBSNEPbz2gq83WxKdxYYzg6e2B",
  "key9": "4AkCm3ovGVKUTcwuWgAyb5UrJUjJaX11zNLrN5W87e7n9vRtQocmeUX1SDsdSwPkMcsQ8zfPxFM6KBc4SbJ5cfNh",
  "key10": "21RTBd9ws6WeJvWWCryqS931S2eyrDRisV3jZF8a4LyWh8gCXrdxeVYQ1hJSoDpGfzrbuP3ooR45UunnB8QDCZWd",
  "key11": "2oGJHHHGiDXrBLxZ6jfWQ2kfKWAhPGEhWqtEc6d7VqYUhh26GbwU2cT8JbFjp1npUTPpFFWh1yfJZ99r7JZiz4xN",
  "key12": "3UPktPyYuQaq4UnsFQWfLBqf1FnqMzhdRKimws2XGYhajpoEf3DDfmfUF2wCsQCEqBSmgpbgFLojA7ifvv9G6oY2",
  "key13": "3XcTJ6uXEg1ReStLRuxzp1B6fnZqNcr6CEc7phtwyK6ZJ3FrHcjhdRdt2J14Zm3Ba6MjCuxDqERpfwgfqhciHxvt",
  "key14": "2BJkjGdRPGLUSNafGjTYSKoCkXhR5kce5S5hof1yrSLWYkDghDwCD2dkwFr3niDj3M4oC6xBmLeJw1qLoWok11No",
  "key15": "3GmEFcYCkmFbwdFx7sB2bB6Lm87BSTfPxfhZQZnRUr8NVpoDcwwz6ob2fAJ3aKTngSLSwW1t64sh6t4XfgwouLY",
  "key16": "2NcQvnvtKWvDMY5k8dVT4C2fYFzdYVELuxRXosbWuguXzK1F8qxQBmJBAXUMbiUEiQkRoDdmye14D6uk7xsDxXeu",
  "key17": "5vGXZXXbS9rq6rfSzYCYehPQYWs9LphL6kFQsh6PbqjtVLNDehoz7Ci79vunomtQZi3kA6XsrvfWPRC5Dme51w5v",
  "key18": "23yY2VbPd97zVKNWF9rRgyHvpi38nywwXrYwcdjbBApYUG6vCY5aDPpCEQC51ktSFyUpk53QuGqSLUgWYY2ften7",
  "key19": "3bVfZAEkh3ftvwwBJLNo223dcv2sXXEcZqhqXNAUqF3nmbnjLRFtz1MXdVofqwhHSjMc1f81PgLg5BTmy4drkHz4",
  "key20": "4qXQB11sCRh6zSeRjGkyAnygWbDSvW5ZLShjZQnUn8Zuu19vtXJpgVN3WrhxD1nqBLKyMNVAq3TXsTpGJQ3BPqQV",
  "key21": "5TutrpgsqwXDcMEq3RZJgM3oZnNJzyxDUcgS5oErXNR9o2bioLLqzFkANL2k5hkdUxkiYrAC4dWF2BqSyy9QcXCi",
  "key22": "28TDqJH8dta6kKFXXPECM1TGbTGUsiFeCYne8k4VGb6xyYDqHRVCihAVcoij8en3ZtpsYESyBwrwCJYEvWkHWXor",
  "key23": "5a9xhviB4DopdegUSKDxVbqBWp5Kwrdn8SdeZ3zQbhe5ug3Sj7FmMo94aKA2zAMCsTg8zkWs34JsarNXQwGEEPAk",
  "key24": "2xwHYZDvTcqUVHuqiHMdw52nN8Wg6fxEE4pq3m5pMU6njg1euuWdhqGE91C4i1b8cuBoBDTZxvgv6othu6FAwFbJ",
  "key25": "gsMkR9EegA8trkVKci2gp6eavZ7o2p9qG4aj9TxToEsV1mW1We58GYbKjJ2ZX3trZbx7Df19HojNxtF8yBJrGWw",
  "key26": "4dMV39sanost1bb2yBaegF2WQZ5mcPW21jBP5BreZFp3wCMVkqGyBA33XXNkZFKCL68cJyQoiSpHjSQgrbD3Uy2h",
  "key27": "2JPSeTrYvMtd8GDKj89fFNHwMjGuggNQVXTazhvz59DparFj8be2gBuburVH5EGtN2bDJaAr8WSvG3HvaCdCe4cu",
  "key28": "2csuuVbQm3w3doD2hxo8JNS4jwrmBprW25bssEBhUDxZC39iMegKD5negTFncxz28tdJMimp2XwC3Pdsmt1RK6h7",
  "key29": "3ymPJFhFjpombQDsRoewBPfgKRHet9Fac1ucjfcXRp83NdkjT5fXS3XuFBUiKxFGHRfF1PtJzCfUFLHoSnmjYUoH",
  "key30": "653trDR5UEdTHSkmkPwSDdJxh8bULMQZm4LJCmj7iRDuPNKEbymqveREGPSebMmnFTvEfQ53qM51a3NKSVncbJLS",
  "key31": "4vJZsivWn7TDYfSD4pApU8i7exCmzm6fefdzbNHXG9qwXgEEpqixHBgjYoaoCuZxybq2D8kXTyXp9QrU8UqwAU4J",
  "key32": "4Fq2QR3sdPE3ancPgjgrxwho7kEwzL4DrvCxUezwbvUebZTMixWJSU4vS8DXe68vFMRvecLoPbFFdVmheHKTNuHP",
  "key33": "2zXppoTCeKGgwy8P1grKmYLyHZMah51tui5BotGebcgfkDtsJoJT3rsdXx4KRgSfRxRmPLmDCRur8ToKwkZCwGuy",
  "key34": "3U5xJDbhF5PUd3bfdr8PzTEqZctq8CttqdXPKki25Usx2BEjMo3i7osg9bbCkz16K6RW6qoXc4qy2jRRDxWkj7RU",
  "key35": "2ANWnZJqp3kMESMshbGA7gEAGGWwJpfw6CK8CQV91Ky9ogLVK81AccDBFLxrsZ6uu9pXACaaQrQkGJy89cVVZLmi",
  "key36": "4LbF2WLiaewrxspJUg7EGCPK4QX32vfXhisX5cjA7GikthwREbrGLdNrxg4RXS62ySjrnJcVWESSyyPxjoqBJ9oV",
  "key37": "5rPKEWUg6hdktbgCRoLoDPWcK1XJQ3Pn332EGbEmZHAD6RETgWWX3G7TB9NU9jk2zi6KU76yC9F3CRd7uHjVNZEy",
  "key38": "3HVic9k5pHCmAVNt3zhj78MP6LUMtT9U4jhLbokoigjKZodARHEVvkQHmJD3r7gXRTNnUAoUoPdHGXZNxkbfDnBc",
  "key39": "5uaCcGKiPLmKzGq3zxNwu27GvnPfRtGHwwWfVDaK1xikbWKBAAcJDYcCWb2gTUANEGPBbZup8vQefAesKyTzgUjU",
  "key40": "5iEaZT56mApSqYaECTJW72oAPxmUyGxgNEGAWBkkifYeLm9wictMbsXLviZTMVygDoZa5X8tXbVN7qM7GNStfSHp",
  "key41": "5eP5yK47U3ZEbYy7aLAHRnwm95BjHWwPqxgWvX8rQBBV2yZdZx3tFyfoZqnieeT133dke8o8PTuKPo6MZppgQxYp"
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
