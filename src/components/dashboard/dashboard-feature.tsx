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
    "3T2KtzpE6jANyv6gMjeBwFsiis3ittNuSb7nZuUTGqHoRoeCVhmGEG2bSux2VMKsasG6KsR4qmwFY5FjAhWJjkLw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nrB9HAcYenr495QZi9GpRis8ALSqAAxCNe2wn8s7dbizRmjmdiYBVagUnKvEMBTTXaFSaVXXCytki4VFswCdmHu",
  "key1": "2CEja7ACtFX7iUV6kjXM7tGw8muhBLR8EV1PfEUzaqPSusVUzQb7HHL8GdWpV7Cneve5AG5aCrng4CXGvLCmQsMk",
  "key2": "4gabrH3xtbR7DnVeNf2vgadMgxaQdx1teRQDzFDUwpA68wd52Zqnuwvpw3Yf226jirkpX7kUkyi5Yw3vme4gK6Kn",
  "key3": "5kuhEc2sNTKvRCQgiGDAnwu2SGbqep66SogZfmktshVnHYBJ1edHw55mAsmpgFBoxzRJz9sLTFhZf7W5mHs1SqUa",
  "key4": "cWb3GS8q95H2JzxwA8e5WebMzHXgLu3AgtUwVPf2MoWG6HMRQ9b9zWmLfGqM8Vr6s2uFJh7PEwWaeSUXLPoLaiB",
  "key5": "2AvQ6D9hDZ2vKoYqtW82gzT8NfYUtdFKKptGQL4rJQE4aY6JnkYszAguTg74CjzRjS3qHicRq3TdPkLLicFmWWa7",
  "key6": "2ah2PpBbaH96X8Mk1DFxThdRvm5a72ije9AybHJEsnsXCt71V9efp9EsE5MpMthJ4JgeGxc7ck4AczRqLNsAbnAE",
  "key7": "2hA8HP7wrBVZcGLoAd3ZXEktzuTUdowbPYFYaecFrTdzmoREWe9JEv4m6yRABfsjJow7LKekXTdSLzdKAMQiThVo",
  "key8": "YqPEMW48pC87ec9wM5kyjWfhjU6PHyvGz2N3dE3ZgA43fMsdy1EX6nfj7ofW9eFq2DnbtqpwVtCaqTPQLJ5XX2y",
  "key9": "3vuuPWFfdxi5SfS6Dd29rQgPs6gVqb5wQFECAErXhufhtkrpK5tz9SZWjm79CPcaKia3MEbta9QpAwEnpSNAWFC3",
  "key10": "5rN881xDJLbrdGhpU8pqcjrKuJTpnqqFeGjy2ezVV3CsMWZnd4uxTtyG8U2LrcASo92j9nLuB6t1aQVJbkisaTSM",
  "key11": "2nM3hfR8go6FQRni9QcWYgD9Ha5qYhquPkDewHjvHdGrhM8PCDiHgAa9FAnRMb2RYizGahTcNCvcMmDeUisaLtoT",
  "key12": "53isMGuwpsAQkwfcdhWejdkzwAL6vPELjxT5bkpG5f9vHQtyDhKUrKpFFNi3z5Pjmko8J4vn9YaRCehHuqMFa9gQ",
  "key13": "28HzaFhSoeg2qvzFSfBrBbcQR7usbqVr952prcDtLureN5z59UihrNckvKSjrkH1JbVsHqS8x4Z3VWXfcm2rhCmQ",
  "key14": "49AayMy2AYDoPTV5oLKfVmPknAGbkc6m7pYNB413PcK3RbMu2hm6hoboFEigBwq49SKth8KGhuEm5CbnG6LWX6JS",
  "key15": "2H5FPp4Y6eU6cLRNcPTWsDsqdtjoxWmXfL58gughcrGmAcreL1iS4rKn9zC4V9NVoBxfCXPJ8LVidtBLFUYYWaXX",
  "key16": "4GnkFaT5vJXxb74F9Xx1jzg2ahDsFpvmpK2r6y9CHD4Q1eRqsFXtr54zpjVGuo2GVYGWUuPqaENGHHaHZv4BCLBE",
  "key17": "4azhDV4sZ7f7E21KvGgoxHgD6WGdU1AhSdcWvAnqVvCq7ykdnkMtHLz8kiFc6tqyhXZkyseLZ7qsStsJsd5MLpbx",
  "key18": "2Zqps9EYumAMEVZuK3zBSeJd7pCkMRvUsp7sDizxytaakHAUKEyPBtLpEfGxkdjmyw85n7r1WN3jpE8VUZXbYkGi",
  "key19": "5XSYPVn9tFuJrETRHjMhQWAY1QU3FrqMoSNB5DSmMQjE8rFhAKZSRasuudcvS9Fd5iVQ7EFi1pN6ip26shFLakVZ",
  "key20": "58pKuMdAXq2GuN1RVWxZZ6My78VcEnNHvy49QAQQbHrqSSXWkL4bP5FGR1cRTtbLrnewCTiv7qPaiV726ERrGjAy",
  "key21": "57k5LYNVxaQ85a347fYLuNydGk6uqgUtfheLYQtaXJhzAHfuxzJ4m8e7jC8NhBPPMwSLk7HcTr6gAHSpcjxfttpW",
  "key22": "4H3J26QJptzHhJCfHaPXSd7kaRYj4q4jukywBkaRNBk29BvENgbcgxexSKewVLn6r3tQaNdt8wvKe7pxZRrKSiep",
  "key23": "58AqNub7tLDsXaaL3moyWAJJ6Xoh9KP9LyRyWWoTzsC8D4a5MKkTtxXuH2TRAq1n5jRf4EBH2woJWFZNNpnftzQU",
  "key24": "4Xuq26o3TYz3BMZ3sPA3HKTfFRNZjwTcYKh4k43NR5DPvV5pVZ11yWoX51AWDS45toC3vi9NufBxusEcAqa3Tgrj",
  "key25": "271zxanCWHJPpEavcLSvGqHuSsTtdMUWNaf3NM1hUcpndwWKZjoLHpxpa577DipGZSTnLLaQQgZnq95arrZqByGh",
  "key26": "yVreHa3V3e5fqjbwjsaTXTyp3DYTRBafNd2sooHV397tzUDnJX6WRQ927kRoXpgxc5MYrUM6Sum2HiYF73gbQ6g",
  "key27": "q1bic4uQcRpmvAdoJ9n9HtZQeyet8wdUtAF7tMCrRKiQH8fBC4GJk9omH3i3VKhFg3nejoSgLs9L4XU31ruLjPo",
  "key28": "4gbGYybB3K1sz4QW2dzGxBpRQzxqaHy7EnUx9ZdHjEqDotUMQNr8xwiofkfbXMGmaMN3mQNkV2upr1V8RqbYmmgc",
  "key29": "4Ro5hBR7wMNDhvnRpEi7z6SKmnD5wjokBDVz8X4KHYhyV1Ani7pKQ8CjwkUmne3RfCNQauPHA2jtjcXMst5AAt2r",
  "key30": "2gvENMRaQMSZ5zfPKgTLUpWbjrLLJX3m1msqYY7HuYHwktLCB6XcCP28x2B2C2cYBapQMDPzvAKKNAJi7rjvQzNY",
  "key31": "tHagDDo9dLP3c173RrnGijA7P3665kCfrK9UwbvyC49NxodesCVADK63VnKC1mvD8kbpX5EnP84P47ntqHjsnGu",
  "key32": "3SnfqnS6rB2aW6SQBUqaKjCk8UiBa7WUHGnWnTpSNoQC2rmRiMLT2xqiKryB9J4kreYMPpwy7B7HrosDmTivfeye",
  "key33": "7xbGbxmxUiNLqVR2pbfg5Kx7RMEAEU31tNHPhe6jnFvtpkMLRZzX5rBWyygM5CrijfD4kRmB8UiNEEArgW3Wjkq",
  "key34": "5oGDqoofHuLiSxEd64sBgNX112V5VQCBXSqjmscyMAMfYXv42p4RGZXvJo9T8piAeXsu6NVNmGYp1MFpCToHvXLp",
  "key35": "49pmLa61TgQnu41Df3LnWKKHNXHUPiRVkp6jVN8poEQNdSb3SQsxWnFxEL4eJMMrATuMMmdBg4TBekrGjkAXe7v2",
  "key36": "3Cb8jDWkRcZyWaVYjz1xYnNxnk5Eb93UBiErvL4MmoRz7XuDTCZLoA2dPxHVX2CqSy3tvB14GxvNdVT2STCSri4Q",
  "key37": "5gCNLaWa5r8Q3wtmGUMfet2xPefqeFWZwqtW64DGDRZcCpTnHxeTqBg1Rf6hZNdkbACXCgn7Hfi3wXDhoLb4Y8eq",
  "key38": "XofTtT4d3XCZB3vvURGZx7VEWwgsgT7MQZDcZnevg57V1C6Zq7K9X7Ka5fKBxa3bDV39A9FhKaRwHy75Ah4NTGk",
  "key39": "37duQJt2EgdqYFLG4AJqshms6xP4fFHn2AbF3JYZd9CV5RG1yaK1QYKcewE7heU3MyYfi7MpvnNZV56mEcnZMkDy",
  "key40": "2oEX8qfvyNLuwV4SkJzD3MJoZ5ZgvjFiww9h5cZyCYZXdnrVToN1g4AFQH77iL3N8WX5bZJm9QLSy3Z9iGamUe9d",
  "key41": "642mj3Djvi32w7ZTwp5hqHwzDBcifQm4Jj8BZVcXuSTyE8ws4FZAYNT7yvVWPXwsECaJHiCFkjHUeYrzwJQsvaEG",
  "key42": "2anxTPdXpi6qt3Y48EWu5aa38chGyerqpzDtA72VJR1GtQBhePrTqE27P4vrQKYYMs4iXaigLF1Xo4SU7x8WrnKi"
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
