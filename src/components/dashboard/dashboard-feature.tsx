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
    "3j9YiJwFeoTAfvcoGj2dtPgPDa84mBGiMerTrK36KXxv5hQspvfDwfJDt7RGCZGmqo4LVb7FzST5EVzpBMojP2a8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24p3NRxB4gfeKUtCRtEcZayxmLN8yX4pBAW1z1tTxTwM6gXdrovhbjwEsg5P6ZMGdBo9f71jNUqY34RSdNxpMxR7",
  "key1": "53tKeHsS7RArrpcBzhT8xKG2DCvN6Fj2mSwvgcFoB1kPwY6R5iNjXbHW3n3PCs4yNGhkdA3cZ1HXYc5NQrffYn6M",
  "key2": "5kwcFo4JecRnrxxx8WQBHC4jMGxeeuBC2fqLA4JJNrnEtzEWv78MLTJJsiuUPavKbeuX5T91mVu6C8ctjBdRRkYY",
  "key3": "2eLDUjGHrxotY59t7WuniXfCycXn4VQ3yPwNPQj6E2eqA53Qd3FNpoipU4SidfzojuEWgjM2p4e5xp2y6sbrgdAp",
  "key4": "4Adwdas5svfCMRNfuvxAzN1pk8az9e5N2V7dgha1t7CTj5xM4EjTFgJdHpXQEWtkCbQfzDTEv2pAhrTtDqFNT9Xj",
  "key5": "5dQZz88MLqHbp54enMSu836kx286qZUC8tPdFjRSMGcaBwMsofHnpic9tZY6nsum4mS3gwaHFDCRszBb5MV89seP",
  "key6": "3MCELPbiD2kNFDA1xeXWBSVp7Kg4q5fhcLkGcGKvezJAiRBvDwybvjo161Uotsqq1Yrf7GBp9gJE4Qqxp1udVAmb",
  "key7": "53Pw5AzftxscZLVLYq6EjjqD5PQe5gQ9WeFu8JttiC3V2aciKWLTg6T3KSSoZhoY95fFEpvoBFRohBy9CgPTaTDP",
  "key8": "5sTDwSBwm1gFVaN9X3UTyj2vvsd4rSQZDTrkDBaEgo9rw1u6ZVjQyBAdpeNruBGqUbWFWeBHcyMGLqB4ieQnZHge",
  "key9": "4Yn3i77Af3B2uc8nxJ6U9ed2qEFbENmR4J4UNeVReeEMXMaVGFTcxdGHB6kruZjZg5ggC4g2D6PwPJSvv52cvLf3",
  "key10": "4esgfvYgaV8Ms35Y5suCZ6EMzEQUedse6PKvwx2GoQwfvHztb8zGVzARq9sEDqtpXS62GBwB24DoQ6BHN2DsMnqp",
  "key11": "21Gs9YWayUceTy6dEc9qX3ZNL7hzHPgKpibksLJteiQPRFZkXj8FEsy8SqYU9RBr5cAGUfap32kEwpqvtpb21CEe",
  "key12": "5gr26v58UUX2JTJnTebZCQW67Ghky6DFdHwk6Y19YY6FzCgmn2s4FqXwhRj64ApsRj2TBViQbJmuhycKHC92TTj6",
  "key13": "3tJRxGUrU47Uj6cH8Dv5f2SUPAZZEyG5UxjTjzzYcoMtTHJCLYbWkUjSE5PGEu5PJjhZEvii7rDnBqX4cUkmxJ5S",
  "key14": "4emVK1WVi8gPy9s4MF2TdUNgZQqsGashVsBgnh36X6n5rCsAExZDduJ5tba3coBBR2uAnBggSnE5JcMkfanx7TMZ",
  "key15": "56NKxVuEZZUU1BEpseJMm1ycidQmkEuLR7Pg3KhMGd8kj1cVxr5hcVJdPzfaTY6dzNsPJyreQEjBvrZhdBVnVK5o",
  "key16": "6yCkQWXwJuExakAS68hTXUwmKGxfgrFzwQmxec8ZUnYJEdtcQRM2kTHnms4mHJ5gMAEaMeie4X2bBn55RTVqkjA",
  "key17": "3BmvCzRfjAk37phmM3mCXXnoRCgoycsVVLHHUDavSUhgrG6Fess2wmLrWHink8ZD43ijpCWVXFwFtx7B2JYZqUPK",
  "key18": "2r9EybTtdB7mmQbJeCFRezfQMMKujqLVoSK51tEb71Dcni5e7aBpE7gqLaKnyocUpUELWqBzbzMwBdjYaPxvg9jH",
  "key19": "4Fy2nQKpVwkEPkV8eWCqjmWQmfwek5VdDbkW7dq3z1mVyTi3E7se3beC3X4XwfZTVS1JpKxnEXgSBbEqxqzX94e8",
  "key20": "5zSHecS8NJxa2A4T8hDu6EdfGijs9cRt3kYTaXqkYSKDKbEth7WbAfk1CupfgAo8H8YkVTy9R17b27VK5SJ5putk",
  "key21": "2r1HXnBKRbp2rTSZRP5Ne7SvYjNavtCxnTGHg57WSU3KNgaDFSoMNTKV4gtK95cwFGAN4hKL4MG5QUsSERZfoEh7",
  "key22": "tAk5AoRQoXNpaz8CbhZ76iXdrjgSFDRWaghn1hpRZmmcXrRvxmVaWX9HJLc4UngGgm2RWSgJgFu1Ah4tBbLPJtZ",
  "key23": "4igEK1Ue8EUZuQA3LY7y2dKyksS7oEn73YYXx8MvVvWXx8morGhjQNFdXSeB7anvwud3u89suovCEQHNXzqxeWrR",
  "key24": "2WtKPDQSsssmR1f1wCt11gfr3fZjxhQSCAnZyXLphTnpoegvoAiYgs4kjksjsBGZacYio1Kt1Qmo7ANpwWEfV23q",
  "key25": "m28faPHZmUyvQwVPJB3Q1mLZmEj7EkSeTdGxmTSDKtxqWnPgAWSBed5Bg4fsRMBc8zYgBCq8tNJFNoH5tqF2Q2h",
  "key26": "5sjcHvhPdSDpzWEBvxzxbeAvUg5BpEAzgqLwTUGPMsqTez99oQgnABJ8dK9C8iFaEUhQGsJAe5cgbZ4deQNHsWjY",
  "key27": "5yypsmg14XPruFPGPdcSrNFwetgrw7bB3yM5cGMBcBPGmU5aXJN2jLXe7f862MUkoKz9Sa2RvzR4Fu8JiDoGq2QC",
  "key28": "uVUJRiC7mWNZY2LbemH2ZmZckdGPJMHym4762sPZNQSZzGe7dLNsLz745kyrhupKKghtNkmjoAvW6GH11uFtPKb",
  "key29": "4g1WT1stLrNLhpxSbpkipKxFVX3nJUNsNvgZBEtzekkm4BKo8bvoK3xwfawitvLxe4w7GJ2JMw5fk134CdxSwnZE",
  "key30": "2kPXiihiLPkyWeZd7YxsQM14LCVQihpEbcm3zXgTUfwFP1yu7E8QvD7QGR7QqNEJi4ZJDMgP2myCvFwtu4XrpPwb",
  "key31": "FYrridokZt7YG5fE7rENM1Y9N18G9kDkj831vBLoHZZyxrjn4ujcmpvCLFyD2Mp4x2ptH85TBAMA5tRLAwus4xi",
  "key32": "u1TzsCmZUdLro3Nko7mQqD83zXco7kRgNFSbGDUsQF6UqL2ACNqMvkb1YURfpVaHg1j634Y4ypaL6X7Esnaxdc1",
  "key33": "53oLAG3VeK7wP1Z4drNC13jrYmywrHmeFQCueue9MJufAFww8ecrxS97rSY2MAFYbz9tTus5i7Mbn67DYSAECce",
  "key34": "5ReZd3CsviQT7C5jd61amcrgDLb9mCSpoLiFW9wTJfyxSoGCgfHGiL6DvsQxAmj1yyQ4Ekoxb9thH7g4xoq2q3SU",
  "key35": "4FtMGZMSRekVbVQiNMkmGBafT2nShKLUzzwhUW5U89mRiq6rKiVBGQfiQvQNwmUawhZ61JeDQ3FrgGcTgvSZrkVo",
  "key36": "4TD6S75ukR7TV8nbLGCXGcYmm32f9KWEfVJ4vjvEfsiyWXNetXKT3gTdfVofy2KG4yLRdsYm4aqk9ARSUGQMP1Te",
  "key37": "5HF59e84zzdXnFywSNcJMAr9ywJFCWHLV3boDcSTcQRDT7RT8VpKcu45WBrg3VnHVdNGTKxkWNLXL9QbXUf61pqv",
  "key38": "2cygBWC4PbdfwXQaAzPwf8JVySTUP93ZbqJT4XjBVYBJmMJ73xpFaLSMcXr4hCPupkmfDShTmCXPojKory32g1P1",
  "key39": "2yNhEwkQyz85VUYucaZ7iNTA3SZipaShFHM1VKp5wjrDWcCUttyLi5bdByTsDv63GVQhn9J9A31veZG1jNdKfJZh",
  "key40": "2o5YoQnymjB5wj9FruwE7sDAmXQEBRfv1hGhUjKQ3PVuhKC4m77XPksGFAZ7cWLfpCVoEsnzFqYGTiDYTJym49Ca",
  "key41": "2w5X6oeH5EzoHwEKHLEaoC1RY15fo57aXAKPj7qq6m7wx66pWnCps3y1CpRkebEmDJiMctcL2cdnPxczWdYroSWd",
  "key42": "YyLXQmdvzW4HS4hxiArBLErVpSMnnRpD9B1XJud7zCzJseiDk9FEiYvyB9k7zwaB4AwcgmdmtJuTb6chJzq5bHj",
  "key43": "2mnp67udeYpY7kaKxZ1aNdHoTWEY9UB298CGSXCR1HgSkqvV7RUkbTQH9Trok4P6K29sNtmUA11K7yKxUbkpM5ET",
  "key44": "CtXJJAbZJrtT1j1vXKriVhdAsuVstLBrxa9jqiwtR1Ksea9D2YmeJBaftfqBj9PmKrXC8Y1NNZ4Bbkkfh5PM3tY"
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
