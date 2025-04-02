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
    "2MvfutALKRmusZzXkojN91yYNQT3bozyZE5tovsnFcFshs1afgGJQZ7Zwas5s9gvCwNa3hBJv9KGEVQWUSk6VHFH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4K2ngQywa6QCJTGDDi6C4MYe2AFtJPgAkKhEY9DG6H8g7mqBsjpSwT2HC3jP5w3WVW6vdTHne56W4Cd9DG5yyciF",
  "key1": "2scipz7jRySQAKdDEmHbPLA9m2aBBjndVfjgTi6cRgmPzNR1xGKBTRyarZ6wbdD2u9xpqYxcgpu4PwMUiXHbYp1c",
  "key2": "EMvbnM4Yv2eKJxcwS4CkFH3hdXCkGRDVJam9jQXh5XNSKBMe5VJM4Zp3MR5728EAPMwMijj7HLKKN6mgogwx4rM",
  "key3": "4PqE64vNna2L99nUobkMhAYPoaXLb246cor1EiJ1VCQaYzcMSS6ggSmAFGmQ4CTUidgnQKjVxY9jeLCzpF1Gjv4k",
  "key4": "55AkFdXqm26CPj1NvECJY6PfzXTs8scCMfJQJvMxWqdQUJVVDsnPKD1Mtpxvv62Ass8bkqJt3pUvdGFVYZJQbUzv",
  "key5": "2gHnXg5RkqoXa7VHn1VxYaz1XGuUrPomaLJQpzkkfBtqtQ5w8MVd5n7eVDozAcW1WCve5FpZwYmfXfBMWfgKAUAe",
  "key6": "4CarPgHPGisEdUgovVL3H8pq38Zwk1Sywft1h897FVufi8FbyawnwfE84LaWALhtyd35uq9FCKS89UMHLh9gEr49",
  "key7": "24GYrYmTsnNKXCjASGWWVsYaEnY4VnBTbcQSsKbdXnwQH6vWvx1VNVERr5fHrNhUsmiRYxsF4ZvQLfSx1TSVGGB4",
  "key8": "5ECjALaVeomyqZrdRayWYMwsEa99xk8AsjGvnhSz9qov7bwvVGdS5W23z7AjzkC2CxNZGLTD64F92ZmnzbJZ2HSf",
  "key9": "ruGKa9Zgd7kbZw3tseJvrsr8EqbNeiGBVrbz5AdZhUyjicg9fPCFYanrTgtTSfbtnWaiKPTqC7c8jebWFtGqPJJ",
  "key10": "VSAPj7H1YyGqBCyJZh5RqzD7NrJ3PKPQcJ9XbCPaai5rTCAFJ2kXRtPc8ZFQdz8BdbfpGBWvhymHunhgz4QPEHd",
  "key11": "2NeisrNfKsebFYhMToADZiXufjseHBmnRQNTv6qXAcKAt9sq7AcDKRTVegF6wnmB4saiwQMamwY6LfTJrngSmj4d",
  "key12": "4r5pPydYyd4dTCMpwaRqKmCfacxmFW8n286VKkjSu9KWcKrM35Z88TsJBbHaBySVwh4dgFve6eu1TZBiJBQxYQ6A",
  "key13": "3eX3pHjSb7BZBpS2WFCJLwxPDqMixzMSSz97siEe48PCGxPZ6VFzBobynQLUcJAqa8zTJsfVs5V57jMt4KF4ixs7",
  "key14": "4F54GVH5e6bmPuM1vtktmPWaMSGj3nBLHLEknf1JnxJSyeKhPTco7Q9mqdZUfdnRQKv2g1c7s1Mzp1NAs7PzynSh",
  "key15": "2kCYGAkqhMmUyoz6cZHcemF2BbAmgsrajJ16Bv2FAaKRKYrg6CSxSfZkVhYmARnmuip8B6iYyjVxkqUxNjhcEQpB",
  "key16": "4WEcmKWcHgxeYfoaz7VqnNMEfyEaGcxfSr2iaF4y86RjGfgA3PmS8B9DkaUEjPCQEAmp3uU76BUZqg3za5QxDhPq",
  "key17": "2CNA5iwoqMQ1LWJafHmUm1o6ekkU1Fi7MZJjmb1hPcUzmgfKZoKEDyXQgdULge8qWFvAqPMdkjGARAbLZJVeHtG6",
  "key18": "5tZauLdjksHsM5EnD49194KP4TgEgN8jw4JK94Nfuk19qF7rYDemK7sVUazG256JNLV8RuxSfEd8QRPNNp9nti6y",
  "key19": "45k52JgFbqiJkLxnEHig53o4F3LoF8iNouEAGwpE8tsdjojh2L8cMyxtsWjdayt9DC6unGgocBcJ76dcYi5VDFxa",
  "key20": "5zFYLGpe4qoA4kPz6hxTCpPGHdHgBGQrXyQDqznPWHgQxAYXGzb8DXSAwukCmdPSp9NoFRvFVihTdVFztX2Y1pvZ",
  "key21": "2vLdScVBndTQXdB13Y2yjs3n9i8DUBaSAWLe3tXTSHojT9fYVzHm4XshTLjiHjjWduuSJbNaLz8giAPoGGh4NTzS",
  "key22": "4wMzdfn59MjDfPv3L1iaFNaAmv5USTcWrM6nFXAnu2RYxzzUVmAqECSCX1jY2HmbVN1puUkdq4tXbfeKxfMic2wc",
  "key23": "4Gb6WXwWoe4ADTN2xKRMbAzX5w4mFAnP53KBifHVmjEc2UtQafaSUf8bBYqVDkVm7HttmyrRHbnbgpmr6iUHoF2Q",
  "key24": "4ozvKn89zhnMfX7TLPnTkEvodBUKmy4TB4L74ZLzBSjt8mTHE4ynSmgNL2Z8HmtWp7QKEVY9CpiTj5oKZh26Ksvm",
  "key25": "3VChg7v5gmfTaXciHcowbvQGbqbzeWec7NPxC42na7dGueVCSnoQo7XiXhjAkX7amC1c9Bk5L7chUA6iX2fXELzD",
  "key26": "4m3ctSvr8r77f6g3gJVt4zVfnZsj3Zyc955cYmUv1fdBdo1bfocCcSDevyX9214gavfyrdSekGHXxLGzaLeS3ZXV",
  "key27": "3WavwHwtqwcCazQQ3hcc8HLDrocMeTKUUP2WJRnjHu4H346S8Lv9htTPQDPrD9gDZTLnstwkhygNxmWDUQwcMRAP",
  "key28": "3ogKqNvVboJjSbUWyujGLXxm6a27dMwUVXHG6gAwnagbnUThDC3zRfg13Xzs8S3iCoBKx1oJHf3UU7RT6wDHnTm6",
  "key29": "1oWSxpJVstsN6Vf219LbpFZJc6Pc6gZESGYjjDCpqDV256NdRthDHYHpyNa4b7Jpd1WRR6jwic9LTWDFMr5jMd4",
  "key30": "5WuvGnqJmj5nrv6dxqxj3zsbLPff59nd3NBAmnPv2NT87j1mWdvHCovQiaexjJr7U99U161KH6jxoVMyouQ7dsbr",
  "key31": "65Mz5Ea2ZcJAw6NeRFfLcubP8CttbRceSgqR3YMrLbKAwJYCLgUJihs9QUkRU96xbu2DPqhkayG92hNkiM1f8pG3",
  "key32": "2UMVnusEuYeaEQAu45GHykPnsPcBR2cGMYxdotZN6VyXzerC3MQADvaGjiiWfzxLbvNSZqykkpCPdjVv4mJZyLpX",
  "key33": "1QERm14mMP2nVGXE2LZFJ6A4qmpXScBQNbPMTo4CH7gTdXN4FUfTmS3unyefJtHnKi8mFAUE3vtZ83zb813Q6hU",
  "key34": "5nEE3wN35w22Gbuw55X1VETNoXJhHARQJ9N8MenAavhuQJLEJp69VWkhLC4W2KUP8VTtSWpJMR5mpLSTBi1kEaWE",
  "key35": "5SgF6Qzy6DGfEjK5Tzq3xZWfGecoRmp8a5RMb4MwiWeacrREbp5D6wrNHwYukmbWpyhLahLdjDj5KJpyv2oUr8wx",
  "key36": "2kQg43mAQak1DJBqFS4aizo97nsN16P3towafKQ7YpouVmePCAR84ADnG91nHdr2StZqoQc7CXM5LsHM2PjaUc9U",
  "key37": "4A9VnweT6eUGXXJSxShFr1cTbmysQBKVj87U1ZQpAtp2cX2Qux597583bZdzzWNfsiMFVWKyrZJYGCjsZtL8FzxF",
  "key38": "3zqiRbuzUuVZrjonnbtgxAmJ9zaRsmFHXdZo2ZUV2Qz6HRoH72UhgoCJ58ZuHfgkD3PqDCZC6c2qXYoHp168JwGs",
  "key39": "5gyvsvm2jRVF7cQQrc1aFYnYG1xcHY4FXQ17swoKeCfiKSu5wD7GRNKKeCd9TXMWB2nncEferrqUdbJn6yaq1uN1",
  "key40": "2pweTPtLwYkQKi4Bx54xpPLvjqpRfp96oyAeVJqJdKLSjb1VTGUs1de6xizAMd62ij2Re6zG1rN2g1hbiiEJbUCg",
  "key41": "t4ShMxTb1KGEjE6e4W3SzMQSrTkSiS8CTvXfqbLpaxen4o8KsyBxoS3cKC633vNHXNs3rYSJHhBgPpP7oim1wBP",
  "key42": "5PUs1PRaX7LcCdUsoXyoQJKxMPwCpJRBLFgkxM5nq5cRhvBKWYxr8UAtibCzXpyeKeoopvaRZ3gBJJi52dDrFz7g",
  "key43": "5pzAEeJtKvfecYRg8XLszSfTshTceHLik8r8g5oeeLjyKEYvrr3Fz2kC2M2BCCgtDDVEPMQDDEVMzGoj1n67umLF",
  "key44": "2vrSRiNAB1stSPPfYAEMVT1ucPA6yMauZ9zj5At4Sub5BYeLNSV4fmzqrAmdzNgPGvsREfzNe4Bk7QmNWw8Xke9f",
  "key45": "3ukEt8SUfg2gpEZwDb8mRMsLjpR5Ev9myLtCeKegkM6Tucd49DWbieBo927ayVkWuY9d1AFtWL9QoXUcFUwG14E8",
  "key46": "2aQ1XpdVuQYZkhSM1GBNxT8rbJkbCx6LBy5ZKhR745eHL3Dnwgh3TQtXTvwuEFrrT64bCCvWWP1V7bVbZdhX2LNN"
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
