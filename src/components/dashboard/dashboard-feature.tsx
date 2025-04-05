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
    "3tB8tCKkYrEuqN7C8EqQu284Mkt6obPHa9zFS1ujPBwimTSw2EhvTbpULhmBcJ1u5BeHqk1u9L7vDXiwquhyec6D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CS3AyXKmeBvufitnRXHpzWuXRiqymr65w6uwBgC4evcPXggbvAVHPku9wfBCwCCAMsYnfAQHcxH1zL8JPaQrD6X",
  "key1": "3rz4sx44AYe9Yas7WFrbBhGyUsWAtTVz4ARXvNXQ5pXeNNcZjMg7hR5KW1QLLoWcwx5np2Jep3SdeA52G85DmydZ",
  "key2": "sZvVoFdhQGdTfWDsmqRbQgi8GRj4ZeZuyn6D96f6z5NqZnitr1Z1BPcg1occJhk2pmuDu3aq1S7F5PyAqwqvx6r",
  "key3": "3XnNWnrkVsv8URdERCfH9JKagvxEd9FBN8ZzfnSbxCKq8SKjY3RcTotyHsg6JjJ1S54HGqUwNG9GFntrPLkGBgg4",
  "key4": "32rr75xKen539rkTAHheoZHUqwqZMPKMMxSozGhosyDrQf2s6pjPa359d6VZxrbmNJEGMuYVwH5eaqyT78bXKYFZ",
  "key5": "3rhUWJcshcH67cFNvfHuGhEG5rz5hvV2RfbkpJA93i7UxW2ZWAWFNP2YVh8CTDKpusgKErChEd3vv1GWkL9zM4tW",
  "key6": "3yqH4gdGHcrYYLUQQi2XG5NywADRQb6buSfrwpZRDbpgTFv4dXZPo6p4Vyvo7iHFZp5svFC2aJgjxpyY3pbVnSMo",
  "key7": "2Vjr8ofLtg4jFFdHjdn7zACueTcLorkrVp41fm9mw9QiRcY9fzPYXjBYbfEKS8HW3V46JY6eDb5eH45SfFa3MxaW",
  "key8": "5Xtvur7gxieuU53PXsBwna9WxRyCTMw7uSAUP6UKRYQsqbsYn3SEsizvf9kQARCEto1bLbJV3TGdBiUgwAMrNsHY",
  "key9": "5NzChwLb9X9XaWWk5pkUvGopMaxehM7uumSQRpzgURZHk5EfE6g8ZSKV7BZA6BVJfubJYMe9jSRzRXFvaj3VsW3b",
  "key10": "497SSSLPCRd18JSGUUPwkNong2ckZuVUy9tdF4m15u2dGWPPnptRCJHcckVPsyqd1t7EBUwTCPjjxeKeqBb4KPic",
  "key11": "4nU1aVoUbYQo4H7HbhqeCNX4ztcKfF9K5nSSAtCXnXVmrxAg2BQofVTLtMCpdgqUovUvnjtxSai66616cHf2e1RS",
  "key12": "3xSVyhHEJhGpo8LwBdCvBqv4CrWUJi1RFg2CpxrePVaRwyE1httLcvc3YFHVtmc7Kvs4LXwEjdbvASnQY7stogdn",
  "key13": "5hfZk1p7nRCpmRZnd8pCoFzEfGtyWmKGDvjRRseGokSoembJqj7wr2hG3soKTbNTpyjMTyzgzKDm8QKv9WADV3im",
  "key14": "57ezKhfFn1GzMUhhHhzBng6rKsbxifKMQPqHHkGR9vYJ6y71haYZQKkkZeNTXRP1ak4RaYCgM1RERgVVSMRYPkYd",
  "key15": "5XzhpJQjheYVaMy7iPZVDPduXUwwhp4b5FZGpWaABRashKaQhbkTJCRaYroXRDe2t8R2bJjD8za1JgsghGWtb4Yb",
  "key16": "3ufy8AtSFVadLicZQo6zYhrxThwVYfcZWfBDtMx6AUugqw3qiNdJT4nXuK8GYBqVjzm5NuXsjB3xugf6oobB46Cf",
  "key17": "EA1Qs8RtyQLaEwGhXAFYS7goFswjf3tzGXVvdeSbDJU3MZr9godSMfoy3LFWmFb5Q4Q2rHDckdve9zc31KJkbMF",
  "key18": "2uuxdpQLdctWGAeaNrToTM9wrnieEFzgVBFaxhwN2sQ3doXfLCnCZbn6TpKyZGu8EUq5wbcnJTDhnJgTQS1xfNNi",
  "key19": "21qUF8VEQKERu4bDMwvvST2DnTgeYvGuEhEtS7xis9pVsD346QeajLb8jmV6pLpbggkBFuYUVzWy1cydpTVpDuAP",
  "key20": "38MUFfNQQcTKayvcQShYyYbiwJ4tCAwgUknhZUKhG4QZeeAGk68ss6365cHhqZmQZ5kZ9WToRDSzG2RsqXguSTeK",
  "key21": "4SyT8rzhnst9PwRoucDpbSzHEC5x5YeV7KTnxur3Pp1BY9Yby8fgPHWrQSemLKEUVkjhLnAQSWUWqLaNz6fTZAE6",
  "key22": "32dvhicBtGFDTWmJQEWQ11YpYDy1AycoDxZky97jW6JUNUU3co6t1wXDUaZwfVaBVVqtbpBBbKmVMVmBaQnaxynT",
  "key23": "Egy5R1b6ZJSpQHxJptPAh7wtYKC8LSWFiWcLCX4dA2VcMZycwhYxghAiXRSag2WApkegeYqTkTtXcNGBh2RrU3j",
  "key24": "2mAnhsmQQVpjtwHxGESVP1uqHFoKcFksRaH8ACwG837p29Pqt1o4atRQuPNy4iZLyL3Vpemoy6Bn5tsE6Epgscfa",
  "key25": "4EsDKg3NBsAxKvwnhhsh2JEEd64UUtjP9Xr2BMhBeATp9qou2wMronvTbqk6mCVxLZ27kB59qZEWv7Eu5yhgLNjm",
  "key26": "DGQwTmdch29J5FVtEErYWMqrTTiWWPcTT1tB2pX5deax6cUBaRF8PZgBtBEZsGNA9aWgdWB3aJVyq8goCgiPL4n",
  "key27": "5Tggk9WSYYA47oUyPPFaA1TWtFJ14fwHUtTRjdduW2sQtDwm99772W3QLZFh7apyGBcFWcfEFwHJohaRVAtGHzH3",
  "key28": "4xB3HhNvEydRXBGTa3i8LAyTew3aWrjJftxWwfAfJau2KTFaZVY9DeGH7wmQoar6fQodCUu3SzFHAF5MywPc8yt7",
  "key29": "567YRmKebgT8dLemExATDyukXVjosSLFbNgstHSNYwyyC4PMMLSS79su7JwQ2L5nmsKfLPG3t37SyGvPeJK3cqod",
  "key30": "4XFwZH9fnxo3PJwU9DzfDrPyTsdtRD4vVYLvN24VeXfVBpetDPbcr1bsYQ1iBV2nxrGMLQdVoBpoSfh8jZ2NdaX5",
  "key31": "JtsHLNJYU8xXGWr55Rd2eThGRtXTxwTBQWBVFE5zLEiwATGLbKqjRFAbRdPLcLHKnd9Ed12LYvsA32g2sTRu7jn",
  "key32": "2RBzDTG65Ntc2fL6Yz5EmQtuzsXt2cpfWppNKR71hQK6gbh33NeZ5rmAzFV7feZoWZS1Y7YEkRVdFgkb5w5hFzDH",
  "key33": "5EA1egXgaNpF88ZnKebYodEVQDgbWsm2QTihbsv1XHJJaSV3pQfYXvgLXfw3JsnpxAmsz69UW52CKCYXCt3wPNix",
  "key34": "3prawJJgaYktxq7aRgZJgW5Ysa3nyDGjBL94zFzN5M6YuVvjdbYeHDcdGh2jyLUP16KanqH9zE7hemmUZvc2F6zj",
  "key35": "D3TRbE8c2UqZFFCPvGk6isGXc3A9yhGoLNptPHksDeoN2LxgihjRvPoMyTz1kLop5upU1ePnx2WegrpSa4ss7t7",
  "key36": "2gVQNH4WsjuJAtEmn2vnMVXvD1qUtMBsMEZqkR8gQtYEyJLJTExTwg5AquuMPzQR1nifdJ1q2pP8Vkq1eGAymc8x",
  "key37": "25hSNKsa3rCmRJ1kGkftRzhtmVakwTuBLb8MNLspUMB9H1U6TiHyRX8VsJ7JrM1LuFdqvBgRUfQd9xFZT8wtGqhN",
  "key38": "2jnGT3MX2bppB1K9HWq48zbouD1yz4o4kKiXbrwpTbU8MeMJPtN8NhvzD5Z4GenCZFfnGm7VhGaPgjnDLfUdANzW",
  "key39": "4kMVManrrwvqzqwES16SawbPfevTSow8Z34yANiZXrYskF9FCnTmTshBKbEiNYYSBW1J6HBBZ2N4EpvCnKF6gZPS",
  "key40": "2mFxYePXSPCP16i6zTvKo5LJagid7RMEBRosZMJ98dBSVmSqspxQDCFxwtJaMxSmgbG54NFpbHAQrTLZohwcd2yC",
  "key41": "4o7z57NVaRTTrZ1tVpcBNiQ34zirXK8jq6euqaorLWiufuL71tL6NRc8siQMf3PV6Qv421dneabViTwZSuM5w8uC"
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
