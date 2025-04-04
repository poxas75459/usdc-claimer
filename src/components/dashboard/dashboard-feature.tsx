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
    "56ZNqAupDjbmHPNNsi7ChMSb9sf8NoJcH2KZ1vX1TEXytiXdgG4MoPCzLNfi1ZXoxC1s4YNP1qQUgesejihz9p6s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HuCxBarknMHBxZnCiG52ekyWwdc93xN94peXt2ghNYTbT2fgXBvW5Lkn3NVEjwgcq4CaYH8XepxUsyrPrweFgxi",
  "key1": "5dNh1KEyPBckjs3QzifybB27TnYJhTnEFfmtbPs4m22jVotKo3s3Xu4vx4CiLMcUwtYrePjf45GJe8Lu3BA8Brs",
  "key2": "WyU1Cy5EXBYKPZc6k7LbCQdfWn8sTPDyhcTJ32FYpoV7nPCHZsfQ5zT7NR6nGcFdcHP2AfQLmhjgRiJfFt6aLKb",
  "key3": "2acGoTnnCf1evtdew6msXUFNHf9ygeayS9h1wFipMw2ofYMMxxfHyCscPn8AfTwYseyjkVUpY8x13Jezm1YH1LJ6",
  "key4": "4LWyFa5wmGrk9ydpGLxRM7EwVkNcT6BBceEda2g948oZSy231EE8Yv5ppeDSd6FhVY755ddnjtsmcd8EihEsS4tC",
  "key5": "5hZ5jnUAJ5WDSh7t4h4ujmA9XSSdFfgLGoKzEUh9wJob6C7oAy2DvZMAgZAMZ46GYc6qNqFSn8SVcLHvk9oHbc9P",
  "key6": "2KdjLU16A7ZR4QZvW5bRQgV4iUftxPUY6uQkuxEe2RoRrnHinnEYAhbw3CP28Tpm1jrD3uLyZugMSTwwbbsGt6rg",
  "key7": "49BLWccsS8SYawSTP7TaurjRefApQnwXPUG3Jq3SufnR3BzsRT134s6WDoJRP52vjK8akDqhnKknZhrXrQjs7c4q",
  "key8": "4P5huaqyaGcxu1PsUdKjPKqPKQoNSs14p1jXtiBuj1CtPqsey63cDyLAkxe4WvPTFwD7Dh9Q79xHFwQK3nSGkXhN",
  "key9": "NiCqVAn7pDFUFpKdeiE26FT5C9y6R5DddHjgcADMz1PomMjmF4jHA42ZZaPWHgMEtonWzJM4oNy7NcBgj9JxTnZ",
  "key10": "5ZMsTu2JCvRxBns4HqvZ1LHpjezkGUbn6YACR1MsErQqcUWimwNnJt44NrySzVQwD7YHP2ZWAyMZTegXcrJ3JADC",
  "key11": "21ome3Eki3B7qqYd53gdmmvBmUrnF5FEcoGF1oFfy5RLKPsB9VyFV64BNwgj6raTYNoruuMRYYA9uiaL57DjxPAV",
  "key12": "4zzNVkv6635WsvFLNBAZmcpzR8vC9qk4GecL6vaRUMARLpc8CKu7ZxTzhLChtyCr3NPgAuwTSAwUCuy6L1QJrZch",
  "key13": "4p4ucSFcd5cxb1y9XQgFL5BVpTqE5VewaBsvBDeeEcbJNtTwyjZyLueLhJkQNQBLS5C5X1tSN4fYgwZH3oBXrP1v",
  "key14": "L9TghyJYUXZXhqYzNEpGW6YiqtWXP5jESYwEzdPH88nknrmFC4ExW9rJYpbrkP3Rv8T2GjDFk7cLkZm44CouSvh",
  "key15": "3N3Z6mi8UAE9cWaFKutaNtfCLQym4PwgZekZ8MmMT3F8bqVjKBPcHJ54V3gfcRBGS842Uc8p3Qq1faQhA6DvBHPt",
  "key16": "34smZVNCsbwy85GJN9hD4ThgEdZt9e3dqJqqTi2xZ5gWMyJaEa2RL3wGxNpFfNqWfehS7cSnFkUwWqLR5kjFmd6X",
  "key17": "2eZYrorVqbbMqAjTaHwATyKH5yCHP678FindfX9HU7PYuZCXycv6g1r89KdcGa97CHNaJGmoRhLjXyQwm9mVNm2g",
  "key18": "4UXtYZ7GDdBPD8MjUdx2EgZfkjRH1U1Bz2qh3Wv47unxMKkBr2mEDv34aUz247RQFzNLvSBpQc6kXhaDMTStcBWM",
  "key19": "4p94UJwHGhX2EEf7nKLWSt1URr21WAxbWAjuzgHVinmTr1d4VddfTYoPXHcPrm6QMewwWZhzfnMtzMhYVFcK3VBD",
  "key20": "4asVEiiuGfp1AGgumFeSgfT7Ku7UZEY4HLv9X6qmPad8ZAaMBiPrVL2e3hmoTghVFVHQPvUwPMZAqjuvWgVN9wzV",
  "key21": "4aDKSwehrjKdWwHyk1AaFff8P9YL4TtQNikXZ2WJGLhdaAch9711FoEqDTnY8pWaswUGSiHcKjVJ7oqsQkvwxbF9",
  "key22": "4T6Z4DxbecisBmN5Ea3fgypSzFQfKkAwvK3UkrTWZjad4vRNiCziKB5wnfRhbSup25DGAZtbncmnEefdo1BeYEFU",
  "key23": "4PsXriSkCe9dh58c2pVXFLpoRgz9jwkqEZF27JrdqVEcDKYdS5vFbkTQoabMisQLvQSgT1cyf1TURhwBJpdjNyEe",
  "key24": "59tZRLYHqnJ1tDFDVJZHmUZ1wMfxWwr4ctGaCXRCT9KNhVGgnjbixvfaghYogxoYcHQ2T4gkWLWbjCNikydYt7Hx",
  "key25": "2TYKStYCyAhuRYi5uMsuz2Dr6emZnVmj52wQKFNhygfgmxoDhT3D2ry3XyerepTiFNqn8cdEfehH1pJjduweKaZA",
  "key26": "39PZhkQLwxsNfbGRGfNY8KR1mvyhRrbXkjfsJHW5TLF6HqnkJjbKGLr9xFduZZBTvk2ERKxkPyq4EKhKL2o1sNv9",
  "key27": "2GjX42x6wxWAPxuMMyuemrNKvsp59D5muA4w8oLMPaidVFu4DcM3ydTgDNuHgRNZvqL6zYSeYGJfrsBXHcMwDV7e",
  "key28": "3vWDbMDxJsZfjED9zNw5RzRb1vtqCoUgUzscLkYRKmWS9Z9BvrjxYowoeLBP9BuxiXYgoNoongc9i45PtCHndsoe",
  "key29": "Akm9j99q8kQqZiDKukoZPQ4mLEDtK6frMGCPXNFAG318k9vnyPB95smJP5rcdnQ5dQMP8hdDEkaMwYKB94CFzYv",
  "key30": "3ZZJ72veqGupgbvG7qTndBuxA9sEv5Uhbsd4ArV9Vi52oLSZh2vxKE8LkaT3sbWCgv9AL5nFiMhL3NHMcLr4HWR9",
  "key31": "4DgWde3as1g7dLF8wScUu9uAtSL1gNDNxFcgnnVT8Ggb2fa22TWADGUB1t7eX1zfh8ajRbEyztgFEHhgQEru4Nkq",
  "key32": "5qx3EnK91QpzB9mk23yQQKzgenW3UeBy9QybjUnQHSonigB834cHRXoHnb8A7znkGUDAHhgN3pjPKtWEBFUQ2VWF",
  "key33": "5Q1X4yEoSKcDpMhuthnbh7z651HGmwdxtgVRrBJaBuDnvGQYgFtQEiYN4HRUFLp78oBQFWkFNR2sQsaALtidfCxm",
  "key34": "47x3CaVvHcqj3iphkSWuj2Ws3V4c37kH4T1hLfgopZoUac6o729JxbiQM2iEYaGHvXyMhx9iYPtK2Qky28CFxA1d",
  "key35": "3A9KFe2GYdGvPthCN2hXj8ojnN7sYrcVgBTJ7NaKUX885fUNpnt9RLLhAnvRHQsTyJTrTBz1XykeL4JVYRJdpQgK",
  "key36": "2K1GikaDrDS8UyAxoZtMqZ43jVACfPyPrA33YDm5SVXE7cGtSSnbpeuauGibGZKNHE4P9wmny9PfPNwsix63KwtL",
  "key37": "2DMAyrdU4r3jbhhbThwYWV9ktVbfRfkX6LDjWiABAqih8eN7NyuzkiCx3fbxmRPN1T6ZQGrkqn5VGzSZaprAowdL",
  "key38": "5jbLDSDKsZ96qLmXBouKTrYXYMVbe4jD73HWVjkw61nix6z6pXSFZac6fUGGfme4Eyb4djCLEYMDawjt35DkKV89",
  "key39": "5j67pc7HpdktvggqSeW88eFp2AJrnkw9NAPfkD7v67CtaFeNfaWPGbGQSeKxoqd1btsc5L4RixXkhKn4LMyYNAXC",
  "key40": "WpXH1Af1msVzETuTyYVH5fjYZWTna7kuqXf8C4nVoxoDSf8tSToFjUpAyizYxiAfWkMp7TbZ2gbbQyp1EuVhmMp",
  "key41": "57Fc7MLe4MFBdpj7foNe3j7hUVbMicEQCzBHQcXDZVmdPUJbkrHum9kCEXus9PZWRUPuXXtUr8JGLSPjECiZVdUc",
  "key42": "4J83FJmXZWotCjKk5mYsAfiCKgWMBRFxLNcBNHNCZmLos57TDTX7hR3Anmp2aWASoxxhAQM7wjHHt51jc7Ao8xmz",
  "key43": "5nwhSbNNuzejheK8q356Q969PoTzAvmspEu3vEnuhn3mFUybZJ65Ngx2uodsaQnbKr9chdihfeXRWye7o3gcxK1Z"
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
