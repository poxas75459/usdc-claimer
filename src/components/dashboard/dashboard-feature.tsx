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
    "3KuurNqtLtj8LV4KePfe7FgvkHUVddJqFJCYVN2qmfRUSF6h49B95NDECwLVY5gj2JMKodgSJpbU7Uafji8zMYwK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CZq6UAqXUMhFRJ2rk2FVYqFxoVsNgkkXa5ga6uNgHuXgmUi1Y7KStvFMnUjpSiALy7zAFsqic8yog4pt2A5P1dr",
  "key1": "3A6yxEwqzmwncYYZrvUWL8sBxS8FM5umWJrqnnwh1t6aLn9KihFBs9sBkeWt5GhBjgy4jjgvheaa8oguduTrJfRq",
  "key2": "5npggWE2dHnyp7yZgFoZpAKfQXP5kj4vUqBebHGkQWNKteBGQUgjza961fDh2nSXUShm3jBLbXByk5bBjjyp4nAX",
  "key3": "5BYmYFyJTBFcsEiX8RGK5MRWRd9hGhMcDqQ9vrwiXKmAnVAAbXME5yUSP4KCr2rVZy4Ya9NWVV6DzNq11Wx3tb5j",
  "key4": "4cN861VjweXfigoyAFe8Ve6DjzWdcJSwbQcpFRJEnjiFPcboS6VUfuzeXMp1SrD8QLhQqRAVRtiHsQf7gBhpY6vJ",
  "key5": "5Zbux7SfcarWaVBWarkyXRAYvG3AmYTYAZyw4kTybjCggNBGMUruPaoBvEopYLDroaBznGJTbagTWTT4jfXCPivg",
  "key6": "2FZBC7gRuAWZMrnJGBurf2SJdDGz23DUBJspRrEkAkW8Vzhrd4aFjE7p7ruPtspoCFQJhE9k3isMpLwcM22d5Qxv",
  "key7": "3GF6f32L7BwfTHcLQPitiuawbt6A1Gt4dxqM6Drd9hRE5J6BPRjVP39bWrkRSUbFUsqu186zfMDmfv8ScvuS2K6D",
  "key8": "3Jh4Dt6SmM7Cst4VX1S4ddFhFiHTuCfNX4RNtz6JjaRQDDkESAsK9Rc4zJcmswL8m2tGMH1b3e913acQrkDmbvSg",
  "key9": "4q8qvze9vX4iTkkXe1Ar6hyGKHRzstiqHNWmFXPzvoAP486SrDSA8wweWgPQEdkaDY2qEroK3DJJkuWFcfUPSbEJ",
  "key10": "3EEFmbPgUD3w86YCY6ED3oCNyEHL9XetRxApCJ5LF1Sy9pw5VfhTHY1u2rkYX9ArQxUhmmkNAHcG6RbAF3NqewWN",
  "key11": "2g4A2isgzekuRXHpxEZPLFnGXQWXQ3uMtqWR1wmpEKxCNMEjXhRN2u12vWLx44nTFqY64ZqN5MCeLZePZ1g4gi5N",
  "key12": "64H4GbKRdDLUUyjY7PnsehZJs3KSx4kiTV9NedYjEUeZt9PPpffAoEzauB1bd3zdcuhCwiggzTv8B8DQXwoS3QTu",
  "key13": "3kJB2gL63WnD5LbP4PrMZfzJZnRDpAaVqjuxTNWgnuPP5EnDDTgA7Wp3CpdWMFbvYaAprukKVTc5LLjYbSSEbH9E",
  "key14": "2vqU4g6PtF3e5kpDBAmwYrhY2LG9dXZJxGGEM1TXeAL1imBW7J9Zm49wythU49HhEzkEvFgt67MyQiocqqxdC12m",
  "key15": "5dvb7sbNjqU6ddweyhfDy59CWVLjM6Nq52jFh9TCj86pvUoHiqWUwUgEmawGETv5EVT816sY4uZgpDnp4ScrbXBD",
  "key16": "3duaGMmjgvzqJ53LNxmka1i6tNM6bHmtiVtWUr31mcpqNNsYDjqZM35sb9o6mzCaDFPfkGwdm75yYKK52bo9HzNg",
  "key17": "w4si2N8u3nUiSQuPJTp9nqnx5K6pyu4NXgxVoeh3w8MCmVvCeir6RduRsbAnHhbseDWgarkk89AD4JnipFynU2c",
  "key18": "21ywrotS8YZBY8DNabybasA5tNTv3aqTp8KfnZaKMwdPo9e9pa4bNHYLPLgex1bvJkwPZV8XQVeQRmvPumvxZzeR",
  "key19": "2qsn7MeAenCDpdptryAK7hBtTA8A9mxj4Aa3CeuawoAPFtSiYP8RwH9aJiEYM7TuvxGncPtaU4t94iMFm9txKZME",
  "key20": "3c1j9QyLaLJ9JgfMfY7aFzrt1bVmR8WjkQNtj7cg4Az16RqrY94bFLuEoiwdhiDLkjpuaQsf7TgntYo2Agwf2bvJ",
  "key21": "9Fwqgx3C81RV64zDnFWEtLoaCEgfFnyXfkpqSFYNhJ7mDh8GU8LRJqSSm5BLwChmsjYeSneanu4c2RTkAvjgutF",
  "key22": "ri39ZWMhqv7Rv1ryMWW77JmPpApnvdkpKHrPxeYQA7cMFJokR76DPZEX8WTNK9hHsEiUN2EcGLVZxfMKqu6Q5X8",
  "key23": "gVAgP6XSAn42tPgFZuHr4gPDn5dJKgseSNLJncFPoa34dVVEMKV9joM6DJznJ1W1LiNf9jcbATobRvteaZ84Zz6",
  "key24": "2XowewnHm1fAQWJyXxAxJ4gmYhMkG8WSte7ajqsWQeAqH8DWUqTeaxhavMHddTGcgEij1yFpMu9x4mx5TdVKasdd",
  "key25": "568xZGDAq2jhTDuwbCkHx3CxPZ5mLw57oBkz7Ge39P7sUv1UjTMAXrqwfFzdUKaHLw7kobHfbDTa38fzpqN149ra",
  "key26": "2SxBtLETNEH6Ps2i2P2FmX4DT772wpZow5qXCYkxCBLTq6bHoyQ29dYYC4R7DHvao4RFjiKTTf7iWoJn27SiLHgE",
  "key27": "5TRsAAofyj8xGspyiSnABZPE1aWrWHPsePYmufQAWGa4VwLDLsqsa8BDofYGuw4giTswm25EZiQ4e6Rrh5xHzvFh",
  "key28": "5dtQaipaQ2wZ7yYTaP4m4ehg7BoVcLao2hPzUMGLqoL4oDYh7UQvY4WBV9CFywj9HEdXvx2MzG5Qtq6nj4ggMAh2",
  "key29": "4yM23wHpVH36fwBji5xokBkSBRCb48KNA57VyPhQHbzdCni8PFVwV2TUuyfBpjSznmThYwmFE4wU9ffeqziBddxY",
  "key30": "5rzRPVyE4MpZAoGqCw5ciBScn51oXFxvyzykrchsYRofHSmNWfVFcbPD6pG7oYVSBJSYgd2gefiP4JjURzPviwsa",
  "key31": "5Ub7RViKrraBNFb2q6DYpathKraov27HTUdjLv5bmuZqeBkgW5nqyrxZ3JV7YHrxG65CVUDpBnoEjs45GD5oRyuq",
  "key32": "x3kJAY7ZS3TgvMmN5PsiZfG7eVzfvMmm8WQVNipEnqsFmfMxyK7U4kGMUFnC6ctBDyFzkhaw9Vj5gnDfBwMNt33",
  "key33": "m8hbTcwGLAqJre6mEFbj1JfUpd5xC6JZ2mvhnPZQKoM6GyTsAJwKBmPnxWAFxrMzKdJ2FnGV48k478narqU4TqV",
  "key34": "3ayEHKN7Q3zyboy5jYffUoMVGCJdsUe63c5ryemfgH29GLyLfiiZ41yGdEVEoowSKFVr6WTDzBUJmJhG5KFnygN2",
  "key35": "vppfM38XKHA4ZnmPHyQYELw9iG98Bpdgsw6KkLCAF44wokR9AroQAHpweggAmHqome8oEsAZrTPNt2LNCTR2vgq",
  "key36": "31Q2GhqhKPojwEdTnMLdAyVPovWPbB6pxM3SHcNdzhyVGq3L7SRjejXthcJyxRTivhGUfXkwcN5bvWgMzGmFzU3T",
  "key37": "3in7iPfejmDW6pBpErGpm2zLwESswhLCeN9MgBVuhCa9rrWYqvnM5DpFKd25DvRZT4vhA98xDWKMsMQ3yqsZYYPQ",
  "key38": "3uJJGSouorEM7q7iUDFpednuY8D8ysD1n7KsJfCjFkY9srsLJLZ1uXPCNspEtwDsTKSyQWzyDNpQAjsDieedSGTs",
  "key39": "2uQ56Sxy2eq5QNz7rF4BA3QgvajRQcPB4YDiWZuPHJKkZgYjRNiT511zZ2oyATXdzJ7v37H743mY4kG7g6WJTqs5",
  "key40": "5PED1jM5v5nUPFFGQCBuWSqAHNdM64EBEbppS8pU8wgh4BJUD3sNXaamXqKCRNNwbVjfqyHuvg5LVfed5e8PWvQ8",
  "key41": "4StuS5EDjwtAVbc5LgTgGEWqjdkGV9quCS1wxrtqk9AgxtCv2vEE69gez8sqRY2DAyKWMsosge4QvT6iLPxPr7Qp",
  "key42": "26A3iMsnzg2iDAPrYGg3Q3tKAPgFc32wyyessVjxrn7o9MrAEAMDEeNpR7Tn1QZ4ffy2tRqkbN15RMrqhmKdviMK",
  "key43": "4qtnm6DxeQ78rXA5upAuRhXLHPqjdbYP7kCsQXeMc3zZPdspqtqHSCRRNx6eFU2WkeDr7WwL2ZdMUURr5ggnvczq",
  "key44": "55dyA2mMDhtEwcUowUz42afDrbXnzjacsvs9J66iPbYWsDtGV3bAkCuESxtvtnQMUCNjVRdMJEWdX69MsLP9FY9a",
  "key45": "eHwZFv8vTQWifNrZ7yDPRCBcbHXXtjNSUujQgHi1SsLLd6Ly9PNLVLF97rJMR3eRqgt5VsG6ynT3ZZ8vHzipYXj"
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
