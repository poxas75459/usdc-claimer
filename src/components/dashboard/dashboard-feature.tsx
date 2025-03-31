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
    "kCmZpHxrCBVmJzT7rEqjfMYeitiL47BWMiEuCfkPZh8NgVpYy47GzW45n6nuQdzyW71qkT8hEqSEqxYpkG7K7JX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aNuGWeEg1nbHceJvDsN5VztKHdWvqTtVHP92rzKKCqcCeHCvCjW24LsT6zmHk83ztcdpT4tkycVWZjny47tgDnA",
  "key1": "2m4E48BimFd3TYABW8tzsGz5XQtq4Afu2VNYSh4cMTzeGxErwqhXVAwZVxAaVYRhpytP4DLF8huNDWS8hJaEatbF",
  "key2": "2nEyV3PKQ8WYc87BfpEbMVMxhW9qY4zN7WQ2qcQegypQjepBFbq3iXjaczogfATa17oWCCfK32m8rrHSF6robhC4",
  "key3": "2nAz8pLBRd69EGG9uj55SKCJmnhReYuWk5AXLGuzGHbjfKFADT8EhBTpJLZbqN2jaxBRWq7DeMKuTHbMtincp1mU",
  "key4": "27hDwmyXx5zWTtWSakUHNSdg71GvLru9S9L4wv75BNyucJ9T4j9S7Z1qKLDZfn5EV6EUcFpEfF2swXdSp1H5mRMZ",
  "key5": "45MmcpYdS2WkTHJZN2SEHL6tUYWPJv5UKkykCXzNZ1AuSFCMpEYqp8tdtNHmrYt3xRVE8NcZLzqeb5Yd7JBDE3v2",
  "key6": "5J6gBw8f5nubU7RG8wxb7RLKDvbRtZpK1YBSZ6ZxHSDs4X6em4Qx9b57MNGCJFRJKYw621D5xEEtbRvFC9aX9PFq",
  "key7": "5fZ5mavv6ZJARp2wfP8rGKboAwUztPodp5GJDCxAEMLqLAshMyrEtvxQf9hP2ypzrxatePMoktd6TGMc1uyGYPeQ",
  "key8": "YDPvL1Tiyg3tshDn6b65Y6xGTSpzoqktE5Ac4vRPeWq2jvfgVijn5U6eWPuUyngXKq1F2P5Mdyt9xjFpgdRpxqy",
  "key9": "3d59bmWqktRqyRbR3VzNkUHggG6DMY94B7hGgAtM4TzWS1cwgHrKz6GC88kFSudqMrafhkNms4hoAbdnXEgSWXDD",
  "key10": "5DohJLqQhh8qDnawUR5Ta2TNx4BrnwZTU8FpaNrni6DVsWjRiYxobD3vfz8pwi39BLUMk2F8UWd52FwLHtwpurDd",
  "key11": "4Txa9paqZwwdQUSbxfDiZ2x7t9DCXErMKzK965heMYkcNPmMdVfMAgJsRw9QBKrVxiQESbuudqseSTTnfxFdC2yc",
  "key12": "4kEAWdZbJeE6nH8jjo56mQcDNy8UyPJo6Ne14s2xc2JF46Q3LqUQ7zzBHEve55iyrMuqbr2tmrtbpoWsUmLycdzT",
  "key13": "2Fae7woKas91gWz2wGGCfqEFDdnzLe4UFRxiAfnFtnovGeaWaergQeg4J9hPj3zXWhFapuDVq3KnrFnGAKbDTktm",
  "key14": "5zUqfUUzeCzdVTPvKHCBE4Rj5ZHPN1o5ADQmBAQ6tkoXGiH2L5V2V5Wdf4KbhhAZYJZMmJJN7trfHbLW9WxvxLMj",
  "key15": "5Wn5mKQSkkBCK3kCKDs4Qa59nRTFyQyHYyCxdvsDzVQq9MVzNnGJBkicgob4RjTEWZ5CvEw73WJCjh17ebwmyqFD",
  "key16": "3at561h1D29Z29tUs8M1LHmhAN4mpGM9EB76YPmVsrxVJi5SqVquhdvpLTDTyMtKXxjP69MZa7yaygL6midrdMGU",
  "key17": "PAf7JkvdqkESmLdxhGY5knpLqcH6WoGLzJUYSG3HSYT8kaSLGnV4zCBgK2T3HTyVaJRaEAcxjSCTudtwdGMnE9o",
  "key18": "3BFGWhNZ3jbdS9rJg6WszHmhv6xvqtQEoX3fZoLAec6x3j4XwhAvHeesUjK8mG8pUCHJTt5wvTJ7A5GcTnAjMWN3",
  "key19": "cNSv1XykDZm8xatxendN4ZknwbFWShZ9PQVyeGTpsvDdF8vtXETEUkaH6k9wWaT4JSno3uzNm1iShUXourNJnwa",
  "key20": "2WsShB4ooZi8rYfPCvpcoDUArB9wZymZuMFPpk6vTyZ6UsgmWoEZnq8g3EQTMjDZWqpm2m5QgEsETPdk8eC2XVUA",
  "key21": "2mfH58pSUM2MJk8Utuk7LJ74DBVgCfz37KvDWATk7zSth3dTBgGTFXGC8tDBBnXXLH9FL2YrBZ5hbdaoxZ9vH4cr",
  "key22": "5oUQmNy3jJ5tDNbA3AQkkG4YUUw1YHdXspRK7jq7Ea8Q6k4QL4H59HMGCwxFTqSrgGJHwNmKbkEgUEwgUvjagNHq",
  "key23": "3acDpVFSJh6KPoFtDGvmjMRT6cMymehkW6tFnbRQayAunyTZPVF7VERh8s5aWMah181JUjqhhYDoWEh9W34esPj2",
  "key24": "3fmZQVsosUdomea6Gx7M8UgUeYpHWRXcaHFAaAZLU9sUFCL8QxmMWrbSrwDTbvmCc893q8jFpffmzVZdrABZNsJR",
  "key25": "y3ocxp3Nn216PDcYdYgcEsPEXz8vUKxHQLsRwsaZhgv9cgvZCoEe29pCmy6kT8gxd3GaBpMqPq5XaM5id9Ft53S",
  "key26": "4uT2gP6pXmmDJ35wZB83faMHSAGohu25PSEXeL8qLFF77MD795GegNoS3DsmUtbUQfM5S8u76qRubHTzKR6oTYf4",
  "key27": "4p68MCkHoRZeQnjUxKJfwWKBtVLYvZC2WLZvGijsA5CawYG5sgrGn77Aabhy3SZRDvZh67CLn5KToaLcLtnzA3p8",
  "key28": "4m4Qbcc6oQ2B5UBqczuFPqxBQ3zjTgaqj8FX6EJpqrVFQoMm5SsvLVyNkoiosDZDJBnf8kvag5EE9twYqXDaMh7V",
  "key29": "2Fm4jMWUL71G3aoeAR75HAmEFkrK2weUgdPMSi2PmWV5cqS4GUrQqVzimCRThU5wp4zYZqEkaEHco3YWNLv6RUgZ",
  "key30": "3qxRhRPB6KYmmag97ZybmyyM1DZHjoYY4sNtdgewiDePPtr7PWKQC61CZVT81DDd1ZyzKdzvCLZHg76GDSuxS39L",
  "key31": "4pyz2CWhZT5T334gTq1gXt446hVpeg9ACfjVHw9wMQ7aViyNeqdWxNjauATZ7r4EYwS978p5DwEyA6Tu22zSLXBZ",
  "key32": "2cyBGzcyB2Eu2RkB1XQy228nnfbdLxb5oCARiLyHKhxBrLaDwf3yEaY2WeiRzcPvHtCfv4fbkKcMj5N2LhnR9bTu",
  "key33": "5QqCzjV4HHs7bkMEhXTFiLR3sHo28Vcgf6BaeY3VgrVQyS6v53hwywExaVm3knVs6vkQ93dWsxKkiRv1zckdC3rB",
  "key34": "JockSoDRH7F7TNtk2Ag2BeDyfTqthT6dRgPFS7qxHAxfENFdZckhZNUPUHgJv4sJtzvmwm1QmSLTxzkjC3An5bL",
  "key35": "5bfZ7V1SH2YgqtUzvffQpNXoSpxzV9FabXVuTcwd9S8DZFZ412kEvn8KbgE47uH2tdT1CCWqyujF4iyPw31LYMnL",
  "key36": "4GY2o2EDioSG9ARc8EWdA7bit6bv51QCrMTqA5fGjpXu2jZD8LFaSHZHfP2z7euYXrqEbBVgfArsjexCypyMTS3L",
  "key37": "KNSX3fkxVo1aPksuYQQbvtavL9CJ9DguBcGSLsFUBFTeT1UQhECxGFx822ufPBeHFSrn3Vbvvnm6ebg2gSC4znt",
  "key38": "3bPKG1XmqjHNWHk9AnamvAUfCWYJEZodTj1dP8hZjn4uEq6Jx825Ya48s5gKQHCWroTqNdF3odD9X7xyXcaKuTiR",
  "key39": "2b9cS3ZT4v4JP22wwJ6UG3piX8Ucjy7txrtQCb9phMMEddHE1TmYVveK2FRwv4f1ULxJN827E4f1h3YDd9X2gFw2"
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
