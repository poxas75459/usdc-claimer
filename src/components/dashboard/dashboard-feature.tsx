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
    "2YroNdfdyk27bGhhMxUBYSkP3e7gCLthGk9KMjM3FkUjR28NXDrrkAdjPmLXJXFdJa5HDNmZkX8DwQbrkq5Frwqj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AHADa7B7amJWpGAgnDHtdjAJvBzdSHNsUK3z2DsMzUDS9w9RRn5sdNHo6JoU6RYwWMG9huUxwMJeaSfDXn8nF2T",
  "key1": "3MENP59H4oSEaWbdaRZSsw5A67DfCDAeY2mVzZ9USUE5aYqgXhvfAMvxu1xszzJrAbcLvu8VEPauU6VCWN2Qg5nu",
  "key2": "24uzmC8BxQA6Z3mAFCLxZ87ZasYVwJ2dHPjjwRfAY1k5mV3HZEscHjdWN4okwoXsSUCqAqesimbwTDzLCEedNJp8",
  "key3": "2kkx2XoaqSZmJ2pCZjypmbvANq3c4UMrtbJUu3HurEJXYABjbiQnscCRXh736FBaMV8xJ2dGBnLRtZrtsKrnFxXX",
  "key4": "3XMYoXra6k8XFxyR9nP4PN9JBe7gMoFLrZiUpz1gxVhg8tnPradbbZm1gSQbQyT3ZC5Q7aahqiYB9PhUnJA5XNCm",
  "key5": "2rgEo2HLZhi6gq6fmk3LL3fSbhubrYbwiorMVryRk6LWNjjhzCujYVWGw6UadEczxKjydnXYQRxGCrVRgjnaY41v",
  "key6": "3P3vywsvFw68ku7diw95EnXaVLXZdWRrhEPsyqzEMvRBguRYTVAedLKRduGPHD4jBxfpEYipLxuqpx6S546uNoqA",
  "key7": "3DXsWQn2aPzTbWgWEQYywoUdc2BLym8so5vtpMsG4xKXq9uT5bRswmZNcM5BDnakTq2KRbd5ACCLf2WLJhc3yTNT",
  "key8": "rPAuYWjNWapjS8UCfw38cTkTTBwaU6giRp8iGcGbi6Xm4rm2kUPjPpvnMYV6263Tw2h3aZcGM1BMwv2wNqZ6NCB",
  "key9": "3Gn2pKG7UqatSdxeeDmGuPVSoccX2zuVGtkpFuEH1NvYRH2yRbPCkcaiC77FiyRYAJ9GqEUhNfoWXddGVBy8ceyt",
  "key10": "286re3sepvSHPWA22g9uhg3hKzdz2ZgRvTm9xpFkeS1CLqPaZKSN6t74vgNrEpUtzCY4kxCkkrQLikHFCf5jdM88",
  "key11": "2YsoEEmSZ1XD36GP1cRxs1BWYhNamfesbYcXu9tRKDSAgQrDtjL5SfQgLwhfsa65NVxoHdcB94QKsfSgsqZcLYSy",
  "key12": "5eCJjukmC2HQde1CpTYmd1pwLoHKy2f48VgxLiXQLVCa8dGWKCcaqTbdBUKRTGsZWtLAvNCszbiotczjAdsvR7wn",
  "key13": "3hWzY1tMC57QWWwzKg46xu9VxtFM3rhUedHDrxFVrq1uUsZgVGEv9hjTV7pX5agaNz31rDmseztKEJ91KzXVBHnR",
  "key14": "4iNXyp7KhzwMyfAeUKi1oCQW4LMESr31AmH5jpDCBVw246pSUDGFwV7a9v9aV1T4xuvdZQ8h8kT1XLWaBTwnDHXC",
  "key15": "2BeKU5mcShhxiFZu6GymU8AMrknxpnKvPLFdRkxjQ9qM6GL8k7Cvewxet1oWxNcXjsCbVyejzTa5TXKM2KtR8Xmg",
  "key16": "4uEqqw1mHMo17cQUTn6gnw6wjHQxemGtXKaCZtLwJn83Up2muTNGtofUQF9yrs2XHYDvtLFd4Rye4FDz1x4fXGee",
  "key17": "4vcVyuMhyrSkwUPjEDhcz1haeUxSVE1YQXdPFeWYbsogzLwdFdfDxSdtpK9ejegDPF3D7CV3W5gi3CfPTLMUo963",
  "key18": "5QsqP26Szsq3J8UHgkE4xQPxVVbiiEHJLwbBTL9jr93kXq7A1y4PP1t66rE2K1BoZWbevKEz5gnfiCDhx73XAtW8",
  "key19": "2vzoQvfuVH4L5FCYXmfBFgyEh2rGJAuwhuM6fVNY9CDpLHRrqqsKfZKLo2LPzeyR1cY1bzVztSTh2ik6Sf2Vd5Lq",
  "key20": "W8Xq3GPtTnZbPEmYNd292PGi34Hj8JSnSwZtGZjdBSZiB1Dj1MXrqGC4EJQRUY8FBTziHPiKYbZCcbPfHSUy6UN",
  "key21": "36zTUdtmXTWUqN9QhC7DyhECiRRDrWodrKHR6ZCuPAP2RuPtn1oWG5VZXquS2bMB6m8HnfSg1B9NYZj28H4QL5xx",
  "key22": "47m5oKrobmSR8QrCZEuMqo8F3ipMnGMUtzJJQbg8nwZzU6eigTRdb5S5d845pSHGqFLgBfSpx9LUgHwB2c3VcdaL",
  "key23": "21ut29pLLr9fHqMKxy8oBxSAw6arrrCyfM4X5U59a2yqiA6YJrVXa8k46uxyEib3tKSyvji7K5nen7WevnhHd8BJ",
  "key24": "3TcA5TshWLNLTcjc2DfwrikqFFatTZLinetEQjV3sJKdpbrM4pW8FE7PoHL9zTb3ANBAsUn7iAZTfpqtrZ2V1XYj",
  "key25": "5T8bQ6HmHo2AdBDeywVeq3uLGdYjb8HFZSUkLfxUHnY45L7CviE7A3VepqNLgJFXfftisg2duaSvhM2pVYm96R9n",
  "key26": "4WEcMp3mAtXgYtHcjaENG8xK5rc4NEyK9o3yKTnyHwpotxPFgARfhz75tB6D7NJbrgqo5s79bGPmye2a7jhZm3jy",
  "key27": "4WFLxo4zDFddedSRH7PZVVtKYCduCgnJoZvACrqZyCrfdtT1tB6zatYtkRH5zq5tTuF7tHLgmnW4tCWozYhD8KLs",
  "key28": "4pueP2xEnbFMsMjWURQGcoaPTbabooDdUeFVtrrx6LrP6yrPxKUkoDKtLfJg5fpmvPPNUgrmApVA2Cd362wBkcV1",
  "key29": "5ku97QtiqxUS7LVAaCcaNmkDYEPPVVjFvUBiDKQjTAYGs3fYL6VjzqmCJwJoi28HYs8VTQVrGb9MSNcso94yrvYp",
  "key30": "5jVJLkXYg7ABDCC7wTtqeXWkbvKWZcXQS63FMFKSptrcw4cSLwCWCtvdBadzkFxih4UWDodj6WuSdMW9uFY2En3B",
  "key31": "5XjHzFPxAuu9KWsQb4kxhg1Pp1DeJAsjn5st5HkRmfE3TMCTyAbt6kNiXUJXH1RdUMEAj5emAeWmXiA6xbLoc3n6",
  "key32": "5tHru3TqwEq1RNFENZgbYn9BKbV7jsVtDT4wA1Ad7ZsszqAeLJdjA5g3kdVvKQqNHg1KezoLiJrpSETcpVjTTWpg",
  "key33": "e8ogebCvTepnxa82PX6iLA3B4vw6n8p8SPRyyyKqfK245UYqZbpkNuRV3QDBfhEXFmBa2wyUUbAaYzT8myqCCk8",
  "key34": "3THZKZ4ozbeKEtQ8qV74FgpFn19BpbKDLTLZF64F17eF4AgQCYj7iVUWTz6PdA4S58N6WihCpqc3mKabWHZe9ZvP",
  "key35": "2KWS6PyQqnR72cMHQfNumyiwrPtdS3Yh8kiBHn8UM9JZfbmpiTadZvgJA52ETGyDEqy6z3MZ1AqdJ7wqnMzDFYGR",
  "key36": "4gLxkQ1qDyfFswR1CQ7AgWmQ24Nf9A6Xxeh7YmmrvsnGHta9NUiSmcj2cEW5ZQ3dgw1LNa3iHtR4UmeWVsQy4Pkt",
  "key37": "2kkg7Ezc1KuQntbiNqwrvhfWY5RkW4aziVVFpr8zVDNBEYx8MncgBD7ceKZJw4vo2uik4be1zoh3TjDkUyfchJ45",
  "key38": "yxaQHtSGwH9PeZx1EuA8qNvJpvzCcnF55P9JmStyd5gouKdknqZbFCDpgj8pRHeqBwuTYZhRRcfWWgk6kvhXfpC",
  "key39": "3XUvgyH6jcZ2nDLShXirtaCjgnmpgACs3Zb9PinSeyP2p57Kt7yTatBqkjJwXeXauUX4LQg3Z469Ui4QiYpw7bWN"
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
