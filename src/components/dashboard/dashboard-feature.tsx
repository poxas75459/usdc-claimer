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
    "vJ1nRkyKkk5Sg4GmycWZCYWyRVcV8BrqukikmCfGYTH8vjTogqf5TTQChwzEBRSCv6uaYdzm1bway5xVZtFYxRe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kyA4jdZrtdUrU5qsCaneXuvjdXjWNHVn1uszfjxX3dKBkVqo4KDbgNQQgqNeDNQsAhdnAkz1vLKNR6LChc5JzUf",
  "key1": "2ofBPnrbTTUxYuJX66E8xTM15VLjbEyvGyLEADeeUNUoQNQxYRn8cm3ouriQrNPVij7R4RU3o59yUHYwKVmLWQxH",
  "key2": "3QNDKmvwLmczXKtwAdT1WNkbFtwaQYvuWhoc1gaer5Zy7c6foxjSL1d1Y5m1xWpeYvoNUgd7M5MsShctdwnya9vN",
  "key3": "4TKj6gYutLaCgcHgar5TD9KYQMEGb1Du9bc7JZQ17HuXt2NLZceB64owkjmh69KdaUpioDVtuCWUErwXcgvRKk7w",
  "key4": "3LxhUZgSJnJPE7a2Tg1CHJMAeWNFLSrmvFSKB9SgRX4BZSZiXiEQ2tRTaHqcExxbVBuQwgNxm7fxgSi5RTywACrZ",
  "key5": "twk2pzqdd3tRQFCwqY646hyNhdsa8KtfzpYsu5st1XLQCm1Xn5XVVS7KLGTanksEzdhUQq7tBLpdcCWzK5DSerG",
  "key6": "5UbkSKZWyjcY8zcwx9MFFmB9tSCDZJMHj71EYuwZTYj8LyxYCbYrYNY7NkEcutjSCtFDe3nQvx7M9V5RvusDhoEF",
  "key7": "5mTjpxeYK9gzPqdpLaMS2pcUCmimbCfcMxLHMLxVtTLfcWyDM8hGqPsHo6U2WNcjzyVjZVMAhrbCVqTQs6tBKcvv",
  "key8": "U2cLxzGpsUoTkZ2FzDgwKE3nH1De61zxu9q64dkUnMYs7iAsXSstPrw74o4sK7ysALzURKo9tFyu3E889UqQuit",
  "key9": "234rGaf58FUwBLRKtjKGvSfUiKLqbzFzcfKAjdLPkCEdA1ZjqYhN2eSoFgZtssRqvuzF365iiGA2tpiniwZ82513",
  "key10": "4ZuvbMuxYJGi1Ht7csvGM68kwUmunEwMVPzzjNzawZcMbR2dojmSP9SGVsbw8ifyK5nju9DD8q3dztKotZndfgBs",
  "key11": "5GiuQs288PpVTSGyEmXTT4uJNjU7App172CfD7rsRDiGAW2cyUVfw7t2Gzcr7FTrTpe6memFUeTESqdUUppq9AvX",
  "key12": "3G92EJXT8La78eFUbtDx98UukLfBqNWsL53xxb2WJGyyWvYNCqoaTy5dK2cw6rMpv1kB2b6KJhSsKqbdRoGgYxBm",
  "key13": "5bzVJzCnybhp8xu2m18LpiELBSNp6e3JwN1WwazTD1ExyPmkKzdFhKYpnEtX23rGF5G4FxmPtzssXHuZ75CrQPNs",
  "key14": "5K4GNrQiCWJ5bkha86486Lk43xsitRSp7B6GXB8FTkfiay2X4XPDvLB6s6p2JiVCymyUY5LK9tQjnTFFVXRqwaxZ",
  "key15": "2hnpwCSKXzsoGAsD3sbwBSUJ6fRJmTnFk5LBnU2D5VQApLQDURwex2NoEmK5x2yLqHErNZXnaATUZxgkKnkuuA3G",
  "key16": "3WyYNSfjm6vQCuDRtbLmrhMBSUbviB9hGxKvfPkwuCYvNqRqvXGyccSfpGaNFepnw32bY19Cv5rXcgeKbQagCALV",
  "key17": "5gJgau8QgByiH3Vk6SJadj6foP249bJz5BDcFT2FstyQcWkmY2WS6vCN8PTh3Au32rUhSGTYrYHZdwzFLnXmeaJM",
  "key18": "66cSSu83oodzM7jx4DKb4N7cDoVpEGgETebVwXqeTSr5ZX7ryFU4kumtFJNBmGXsGzm3ZGhiFuk11uK7yntpDMx",
  "key19": "5NzqaxHUsLmo1m62b3ZDvjh5461PizYL7vg554KAfQ3cMmziTjSwUZwQukmGSoPdv6n2MB4NX2C9v2sSczsBQ7Tw",
  "key20": "5KYvm7gT1uj6XM7NNdmM6ny45encMgFNR13M9LAAPFnaXL5qgnaAF9knAeva1Q5M2ibmot6mZhDC336oBGsm4g4G",
  "key21": "3n3Jf27RAx23HuBVfytKafDZE7eLXLDFP9pUboUpYpKiS6PKvtXJgicrujF2mQxmq3KeAYoacBhvXaHGtVDwiHBA",
  "key22": "3frQCDbv4MwdL8iaaGxMtBTNVuf93uXvmpjKbA2qgYEu3nUVxZ9YVVgzj4nq2GE3KVZC2TiX1n6MDWcmXebSKHwx",
  "key23": "5sj2x2uXUA6vMGvFNZ876fqzj92MnxwPe5wPYmnDaXkeEemdzTEiuWUxZjYV5gAxHPxZfAd2ZnWKRtCfUZMXN5iq",
  "key24": "4EiWNNgsGKVekhLpb4VdWvQ2yFjT1WufMHtCzyH9aXXuJzx2wnv28Qz7gKm1AjBxQ1C4bBgBNq1rB9PEShn37PpP",
  "key25": "2g8RkcrJ3bmQdrr39boqzNgghDQmdizjEsEu4nXwn2pKjCux5EFUjyZjfhKgwfUR2nAU1VPmjWvPYAjsqk1VMoB6",
  "key26": "4ya3D6QhfNuuipVoVXrDZandWjq3NuCGBBmvL4vC1n4LGeHYypNtXGHLdw65xZAtPXdVu4w7ZWA6AVaTfc7EzEJE",
  "key27": "5FKHRgqmefruK2h1eS4Nc9RYUM6GyvpbpuaJtSqofpGqHdp3zuSckyZWBdHtP8a7ncnSxmQXsEFHaqaU8NFJqNGG",
  "key28": "ieMJdxo7NEDCAxFHLsATEA9wJbeJTmh1fK6tbm59upaUQR4qRrDHcG6S1yNWkUFBa75MaoeqR6G8YEAH77XVJNY",
  "key29": "4LuAqUzAGEM9qUcfnEf8mVFkZ1BX7adrCu5RRjdBjexXbBZXwa8dGcXbAee4vC6pGypK2LXL9FGE3ocXjZ9i1by8",
  "key30": "7YJjQp627hB7CKSKNrpTEErpn3avdC1DZirwrDztWhEXFioEXkdDhmZQaMU5wi4pRKmjeJQCdBcM1qxLihqW4oj",
  "key31": "2PGYfGGhDbghPPbQmf8PbKzXw5jXT6RD34HPQu6xF4csjtTg8sUEXjK6QVAZAdPCDq4UNUde4xvePpKw3RyaBBy9",
  "key32": "5BySPmyyjsUgLU1NdWWTR9tjeJ6G8UZkyvmjGcvDhoFicfpCDb98su2zTfsifuzN3AJcNVwaFRADwjQjH5i9L4tv",
  "key33": "29dEzVZcNSoqFwenE12LnF2DzFHjX8oQhN9Utvr4SweAao5VCygZJgA5NvcHAhhPfgshrBGzC7LAG5vtebW8VwaY",
  "key34": "54G3wCnmsdvUb2LTFTsWMwUmBZGHrPHV1buszpsWZyRakLt1R8wskCD2XrdVKGurACsSS7vkezuay3qsaXPM1eFa",
  "key35": "5gnwyK11vecv8WT6674Wc1jiRYG8a9tt8HKPRQtWqdYrgsTpK867mLzGqwJXT1ztSP4URKEHxewF3Tm283n91SEv",
  "key36": "39sxUPBfDXcHF7ZQSMV5BYUJMsV3Cu529Vxugq7cJ6Nqb45s8bcPYomrQqvxus9pfkxD8GrVGjWHccnjbyh8v77E",
  "key37": "wRMq7Hv2QRhucXZMuqPoTn41rPcWkjWjB4XKfXXZCPHrpk1AEqunwgHpJrEWwKRRukeW6fib8RTb5LKHi59eXrp",
  "key38": "2gvYgcQcmTULuWKKd2PKc8m3ugp1s5bojeRQZ3QV8Eb88KNa9oREUNfmZq5TZu5i43RArQ9EjTwiH9u26p5NtUSt",
  "key39": "4dAixRniat8HnJeKGjT1rm9n7wwSogK23UZqU7hLiGJjU3upcUcUCPTB17f1oGERZpDE9JtHYk7KHb1w6YhHyQXW",
  "key40": "27ndBrcF2KYxGvAiWt7Kf18GKn44yeHQErwTUkgr7ZHmTARtTMW69WqSKaogLEW2o6y9DDv1izdrWera5Y35HwQF",
  "key41": "5xn85CvjvbJnfs2hRRhzMfn8Kz4TCkQGavhZfuXrfMKupuM4ZYrKavhXg4Tvyxhsp4SggtnpKrhS7Le2GfByrLWW",
  "key42": "5ybRndcBzmwh2YJCyp7p998xy7pDjcdBqYYv5eiRJxrCHZQ5in2pfEvWCL4h2RhfDcAff2EN73pVJPw2DXEK6F1u",
  "key43": "MJWhC3f9mX3wmXYMbeSvrqvVpru57xiEoctNym53nqJX5oJek9BRxNcNNZpLZp8o47Za2Sa5dc6udW5taR1rUon"
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
