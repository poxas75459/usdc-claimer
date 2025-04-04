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
    "ARZfmrKWr7vygHTwazp5vTBzMEuax1aWDtWVtWv4BnVkrTWBrJeAigJVesmiEJ9tCYQqW6USXCd7Wu7kaGzxFSb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35hJ59PwuCfamj3SHX4d4MjsrEYhuEQUeomMseNXa6NuwoFB5gHFdhMk9PBzmWzRAdxo3hiCdjMbDGgmmJGXjU5F",
  "key1": "5yQyKdDQZuG2fVcQTwqwt7NusuPJFKgS5Mwmipbv8wboMPLiCuydusVCKdkDc7NkQZVtAwPZo7UVqrr95zUgszh7",
  "key2": "hPGcVKRopM6uXvZqMsdr7di5yzpoDGM6YdzYZwMeeMKamKfa1gfxWSc7v7txo66Q2K5hN2u7GtwRmU5shRzb67B",
  "key3": "2A6UUyQaADLJAeBcXDcYn4c5S2rXorcNWht8eZyCyj8MhG5dzm3Qu8J6rCfL2zqNKXpdDftbqhVKWHegkkfEC5VL",
  "key4": "4uG1H8ZQkwBEGGaA1T1Q3xF1EztYoR1xR7ZjiVTTZm2BfAgPYthXdNbs7Tuyks2QJNdpRUM37Fd7p8LXZkv4AihJ",
  "key5": "Wx8QYNBz7CAG7gr7oQw8nXQWVsPdGHM6J6Wt1vGkAbJEaJgwq17RgqM1SpyrcpDGj2Aba2DZhqKxAgzdgqHJLtR",
  "key6": "MdfAQiRVSHpxijzE7D3XZ1a64YXG1oqmgY7bXmasn4831LmjU3tKQzhex7J3TaGW4GhfJJ8Rkf49FxWwvcFWndR",
  "key7": "3NwkTRciNSPdPPALKDADW4aBuwxggkviLGTAFT8zoejgzTucWTnZepdxZnjy5bvuENhTFzwtFMHkApjjyooKXzDJ",
  "key8": "26JAkj6P74ihXBq811p4ajgV8wDisXrcvj6skpYoSVvYEQxugpJ3s6meRLtBoLrXt4XaoJEb2jKXwuc9Q7FKCv4t",
  "key9": "2mbTSUtpBacMyMNU3VhzFmSfYtyxj59v7egy2j1pdk67BapunNCyyDjep4FQG8qGbm68BV33U8edUAPf9kTzeheV",
  "key10": "4ANiPAFH277o1dfqsumCtYCWfuKAGoKHR1btjcBy2yRgtfbETHMQC7Ssk3sTBv565oq3d3mBms8b9TxU9GBxniAS",
  "key11": "5ooUwXVXEy3cFBjQfxnqLSBc1KjSGdENeQpHPAC56c8dLsqgdnToC9DEJ7R81LCabpVsty6fNpURbShdLvfEBZfE",
  "key12": "2rFtzvPCMxTVBYJUPdWcoMCXL7RGxJnJwUhqdGzma7y7YthETNrmMNyrbNyRYxHP5Hy1cLnHs1h3iUEdK7R3sf1d",
  "key13": "4UNBWUzwdnk1X7gk6oM5Ginv2pG4dfcDdycijrTHs9MKyZi53Eks93c1bVCmQEZEYsbxsh6aA1TSTZ68Q8p8ngef",
  "key14": "5ssKFqQ7Fsuah4msd3xuHuobtnGN5aKGrSStcwgY1kCspL4eqkF6mHQUf8QGHjMHrfvkszPV6zxCYqirJEHYnA6r",
  "key15": "3E1dNKTaVkoUuvNTmq55mpERStWDouKGsZsuATfxzBDp83Pzj3yRQwgei3cryXnxjNQhhPtYRdey38kLrHEbSL8a",
  "key16": "2fRobQ3bRLaaET1fdCsTywsMFnt2RLGTCL4BNjtUUNRZVCH7HFxN2rhZPXhGYj7rykh7fdv8f5KvHg39wJ5xf5kN",
  "key17": "2acVx868nJj9Q4W8TwLVbd6qhUyAdMw3X6s6qqFFPQ9zHq79vrs7HjSbWHXwJpbtvQfgbdWjRh6tovXfitYnfoXR",
  "key18": "5B18JivWTVXb86EckCg2y1gmCNhXzEnR4t4aV1V84upan9rw5p9izz71JCCzjc9xE9mntkDavgEJXnsT5Q2Se8qH",
  "key19": "HTFS3Q4uvLjCEnbk6yVz5eAdJ6nwLGL1GMQJ9tMjhT4yJdiRWG3VVjjyzc8F1RU1XgsnPQYsLK7deoSeJjD94DZ",
  "key20": "4eLnHFzpUTh9qfxxPpgLbbAzJKaMnpdEiz7Jr9TEtBcPpKnkMD7LPAx6VwEhyHuyQSHwDB38PE6TffF1NCcYLBT2",
  "key21": "ML5CLAijA1BiKkTg86GVmyFziMBHG2WDCNNBYPe4NnSW5dakhAvWC1kXbdNJ4uHMQ5tTZegUxRZ59dpdqx9w8mR",
  "key22": "5Vqvts3hP2X1RqN8bHqjrA3dV7X6LC2qbW3QJ6zxeGTvFEBnayddV1yJECKDkzeNHvkupM4nigazk6q89h9CC6TE",
  "key23": "5MqGDH3L7xKhf9BuqXjd8e7MBMkZEze58hCE9wFUz45sbsEJpM3UGudXVQVrebdu7eiZfg8g49eMhjGetr1jwGX6",
  "key24": "ApaReZAdSyrda7S9NRB3vv2F8SDmidotDHGb9Z4ZKhvC97i4dF6moqBxMQFSwrQ1VywXvWwxWBGuBJuWjsN84UT",
  "key25": "3kuBy3LaSWDAYZDcG4AkVX6ZBF72ndUQncGCtJV6CAroknsrFb39nC2g2aEJGxH5t3wnzoPJ8Y17LsD2N5217Ry9",
  "key26": "2UPB2ZbNoG4KUpZPB8nm7xerN6NJU3eTC2wKayv3S6KYcAhkgsPSpfCC5ezKR1bL28MTf8BzwCMMUftiepWVn4Fk",
  "key27": "5dvrQVX1Ksi76aXvpr4Uz8x49zEoC4doHJW6GMba3Lfus4NWo92CELQo1k6Mn8WEkf7wA7TDchkvzntmyNp45FRJ",
  "key28": "47FWBcraaxvL8LJYHBRvsxZGcGarBZrricXPpA1MM5P4TVmj2qP3KhLAjGY7PJRQfj8Yz4Mzzo66Ps2GadR6mUuD",
  "key29": "nA4PDLwVXcHCdseTwj69SUgG5ecMDka6VcmVFRFaAz6JnXV6dQrVWT2gB8ssCwnNN7QobbHutzi5NPCLzHaeTZs",
  "key30": "4aSMSVUb824mwgTvDQCVVsz9gr466JLLo2tAfpjwkTPcTDhrghAacAHqYJfhkF4YUp8WwSLWkeNCNY99fBGuuTZf",
  "key31": "5B567duT3p7LoC62nDFqtukaF6s4cqU3orWR8mHYMmfiS73PP79eFjDaEZ8zjacYWTJLaVinta4136SVyPDSaXkm",
  "key32": "4mfsKhMN1cfzsbPVcgvBSRVo3GDnFjQ95FpQc2YBCBEFVBJ21CrdHZJSvrKwXYBermXXQg3KSwXbAwKfGDpBHvDQ",
  "key33": "5bqtm11eAcBUQAgXwL9iegu8Y3hhr6wurreepgZtnjLSJNQ9n7j2baBV8ZnCMc2SFCMeurT9VGfnqqcz91fnPXY8",
  "key34": "5xRXBefxCDXSdvQMXn2TU38Vg3JtvkmNSsoHzqaBHg3RAAXGfSJFUBB76KWTJcCRdo9qSqQuztgfm5owPUqcZp8W"
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
