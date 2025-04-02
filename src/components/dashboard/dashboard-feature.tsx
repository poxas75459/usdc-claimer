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
    "2RhwKmAB2AsQezecRiYXLXNia16UjgLPPSchZUWyM45N2Cpnt9V7d1ejSFMLqYCEJAdzYA8xE37DowdyRsLRKxbo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G6aezYqhZ34yM9eaWHxbwJSDazFcnnyF5UF8yYbrf2YDMwwBNQCk6YzFEGkvpyHh5JaMci749YWJGZgZMC6vfee",
  "key1": "26AjEPdA2kvfTaJ6UquYK8KgCoYT1s9znyzyJ3yjjFDEL5quLaNwaughRdQQ7uMqSp2m7XYgW7DH43VK9eXoa2ap",
  "key2": "66mLH5Smk4wKvTS3yYcSLVMtRNuXLYeJGP4KQeZ3BSXGCoPDia1B2vvA3kTSatSkoCyo43mmCe3myZTERKcgBpoB",
  "key3": "4Wposbaq5Ghn8Pff1n6vJwaZcCSXWbwwb81VK3CkhycANCpBMuzL8WcvUudtkyGeeE7zRRJ2JMWxqetso6NjyP1L",
  "key4": "2G5qV4ALy5nJzE2mEGAgECKLxXmvNgXMNCJxv5uYGQHdSc9pFjf9bhPKtqrg8BcBThNvq3As8ooeoA3Dy6u7k8o2",
  "key5": "3RzR9Gf8FG9fwLMQb3PgutNUE1QPNgRSjjwbzYbr7DR2EJn6xoDYePF2CpqdH7oeSd5Rw3tLu26i8cG2nwKrtvQw",
  "key6": "oofAkLTv8qmE6CPgfhCFNrS8WvYstFLXNpFiXjQkXKthhRXo4qKdYvXzAJ7nkpPVWZ6xHzDPVUNQyUksbsdpRQF",
  "key7": "95RDA3Q7ppfcb4r5E51urQg4yEUjATGis3iknKeJUvxFdXZs6nfmwxUebAab2te2LvMtWy3VXF8t6cm3LmDSsgc",
  "key8": "hiLNgMj6zqtLyzTDLGJMgHWsfHDkXtiCPyCo5xp9u1hgWi9Dm4VZrCneneqtxK9CfXDr1K8dqCQXB7FRXBX252g",
  "key9": "2Mkhpuf664VKbAjQk54N8BZ3RrrQsrq6pXgB6oNWQ8avdFRaVcevSLHREiCuzk3UqJ8xEa6gfRUqVr2YAkSfWHit",
  "key10": "f14QWYZ945exAQPfUXS91YwvSuVPSrQMaZBtsvVBaugDqa6L6kmYFBDiz2ep8FkwMB9AHu44YKVXk51uKpsCHVM",
  "key11": "4je8fuRST5Jx9hsFeErnL9dQ4njvG9FrBjjUyzPw2fWaKvYqGjPkRUQJi27SxzBmquMt7Rp2DQUgngSRRH6zJQof",
  "key12": "3PN5FE2t95aF1TyMuGWx3n1o5oQBJRnwwjkvhne6fLBSsiMvxqdKe3wjmMwf58HqAb1Pwo92FySBzUakHxiXfkP5",
  "key13": "2cYR7qjUJBiPdG4F7z9Xd9EHuyxSkXzKh91MCLdV3SHqbBC7XuspgwYPnDgtjsAU1x9tBt8wAHrQNqv9FsEnZUUD",
  "key14": "eNhmrmfVFdhJ31FqkcjFnxonxavjFDdAFaRsFCzQ7AW6MF62JBaRwNnk97J3K4wqtULuuSXoYv4ZJVoef3ozjWe",
  "key15": "5T5ZqRxRPhvURgZoBUdtsEX8dkzizLoCrm9PYwUvFtokQdPwMTe3mAweazF7FWryWwe4cRwZmRGRxfVzhB3zh8J6",
  "key16": "2KLuejRep97JEGdMV6rMe7oDEWsA5i6fTwpmW2SDDRGrbDb8tfb3pdzfEbVm4a966wBo1Hq8P6xeGDXu4aUfvek5",
  "key17": "61RajMofKPqj6Hy5yi1kdocreHabSvze5DMCJBvbJtMdBfVRqtaTg2WhnpscYSz9Ukvuaqy1JLHviGv1tceU23PK",
  "key18": "5yftCvdSDe7dyMQSA3MJKZRpnEdSrUg57EmnchaVGbxJJBRsAUPBLpeAhFCQbzTKhUDsDkCvwtSyE9ZrLu4jYy5B",
  "key19": "3yv7rLUiuiowCDiP2bP2VPCsdeenS87HEoUS78Tpg4hJ9eP1jkqPEvrJSXYto1teWvxZEMdhJoYHMYmq4AgoyfpF",
  "key20": "2fKsMVCVcCYUh6p72yNgtB7cmCiFVLEABJzW51wiyr97tqSbWP3GYuURYSYmw1CrJycnU6veNMFWG3rZLFpn4p2P",
  "key21": "5TSJ46TmJMoqx8np8Rj4DZrHFx9q9rSSvVkgdZucvEoY2AAyBqcsYWUVdrLvQ8CxuwGA4gUMFKn5ExfmRnYCXPW3",
  "key22": "4bf25qAzRECeCf7j71XGcemJT5VrYKprQKNpiAjX3TVdZLVzgG2oiDQCyR7eAooeKFGBxhwH7hNaWZHw8nnNnxgs",
  "key23": "3RwGNLthjsaEFDd5aQxfnfiG5krCBAiqNDeGuFDMwU3FL12zzDnEV4ZzBKRaAtK788yJ7EPpa9cXqpME7xVGdnA2",
  "key24": "2ageNfMGF36a4EzhnE37u8UdHnB4McV2UeeMhkExKHsUj8LTaDkiFT7tZYq4XrCF5WGTao6w42gz76MtXEmL48ru",
  "key25": "JCWLjC7D5BjdzKj6993HozkwmryFStxPksJ56seH84HS4mMKAUXg3MYYPfotykQi4yVEAezvwnhbu3P9gUNZmDa",
  "key26": "2mbAnCvKEu3ogVZJyZuo9Dc7UqHi7b17hhtctAkhtVPDvRi3nzTiSQjSJwd8CbHbQ324HR8Prc8pjzHf11wm3K6k",
  "key27": "3Q6UfSoteG3iRaCLHDvpyr1y6HsLSW8rLd1vu8cEhhrate27FUjx8h8cjWz1yRVZHT8YdEhoV9QfmjRMkhf3gHk5",
  "key28": "43YauCg3bWVFBg3Az3PmtcpwuChkXTg9SpbYtxkyUs5X5rg3fNCtNTLw4JBbPQsyJsxE69nvLg1hUFGSLA2mArr7"
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
