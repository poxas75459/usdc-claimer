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
    "5vJ1wufUW7FsXZMisfQA8auyqW5TirjTtJHhWqei7bCT8CrJU3thnW3jHXKTqcciUzymDArbaLtMPQ2pQmuRtgj5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37izLjeY8ryeooBFhKBVp34hDS4FTa17R9dXCD3aibSzsmRQkzaTLhfDF1nfgEXatvZ81ysNJrMSZVrqagmdpRSk",
  "key1": "dhuhGwdv3WwQ5QRGKZzVWPi2e4wcEhT7uqHm2mfiV6LLShnCuWtDj2jAtsrabUdMJBa9RdB8LuFZM5qgWRALbQu",
  "key2": "54vXqWc6y1DwisY2W7VzG3BXDN8tnqPhKdaC3jydzfQcnqpyWWdMJeM7rceQ1qmPEU2KkPNwhQN2Lf7KRfDjLJHZ",
  "key3": "3TaMBbXGxWn6qKbTAv6z1zaqRhqKLKS76rTAtkwNuHJoeR4MAVG6xFWVJ5nLUqdg97PeRCizUs7WgHCMgCxA5wcq",
  "key4": "2FnA1dtd9tQ7R7Axk6d7E7XH6CzTvVNntS6iJCmpnxRSnRaJQLhii69ZGeg9rmWJybyiAdXNvNgDeogVHhFt93qk",
  "key5": "3TvfUYGLSMUQKKXqKWHtVYdadLeySXhqmThmvbtqGszYZPjxFWYLPRa545ytrp34gqRjT2MQenhtn6q2PWvjhhMf",
  "key6": "2yt6PfbaxHBZXmuu9KbB25kr8Y9G4nmh9i7EBaKsz7wtBgxNpzXSGtmKLDBYrXUCqJgAwaxQiPXAKnXkxx7PWf4Y",
  "key7": "34YQZFSjhsYaui6Q6q634inB7sqJ8CuuazvqFW8dX2EA9q8aSuj9A2g365xTcwEh5mjkAvHe8YCkUJM9RFhVVvrk",
  "key8": "4cCH6CuZSpSW47S9DWW1AoXhEmbB65YCDeZX3HaFKmaiGWc1bdNxRHiPAH93eT6Qm5iwj7oxrSf7Vqmx9Ky8G23V",
  "key9": "3GcnD1moebhbkEZJqfBatsACnMBaNvXxy1FiAEme4b2MGmhJCcPrzdUkXQS2mB8qQrYuaNHDXKNfTTA8ka3RXP8G",
  "key10": "2T7UdSCfdhhndhwW1fbaYx2r7onhbx82cFDaWc9Yiasyrq7YYZ5Eoaz2bhV9nTfrqsPhcfdUrPMWUp9yR8ZyF9qH",
  "key11": "3TawQhw2QfMTbeqBWai2JJ1vctGm1MGehFPiw684btLuYW9yT54CTy1goRy2uB3N5xqLfRbQC8tJxULTaRfvoqLu",
  "key12": "DKBj1B88pieT1v7CUsqgcY134uT6CurDqyUcos8Ebvnbe8u4H7u8P94Lcgpzpu85zF4mRecu3EDcghhuKeYYbN2",
  "key13": "4p52iawWticMb8od9rgrFSzgFvVjNrtWD2dmh1wYEzJn2XX926hCvA7P98XHAfEvRA4KKEdrpkQyUhzZrA8DHumA",
  "key14": "2DFByceCXW1yr8dVku1ZKvsMxjfCprhA2A4NDDU1sUdSYNJCguv272CViFeVq1Fgy1yFHXeuPa5bBRD6cugHieZ8",
  "key15": "3CzexdR6pwPTSSrdMc4oCKkT7hLtoc1iSBobXUVRuBjoTyqmsBSiAKkDcVFyEvojH2SvwedRUSUMg4x93tvJBvpk",
  "key16": "31mdaZn8Vm8QAYnWwfairY4xgVESRDz3NmS7FSyKkMwP2S2FZs48yu95qiSVgYkLmbdTNYs9uivawJyHvqZZErMM",
  "key17": "43SmLRyqAVnNxa3NVCqtujDCu4qSeoe2zhTNKyrFcM2pz5EbeU8vcCVMPFEmNt9cnvGu4pYzJvTX1kMfu2hKRpf",
  "key18": "3zyTrNiY4CZ2R5Tipg3MSi1xwb5mNJtZsQv1Ljv67oAu1XTugYNCPvz4jqjDsgrUVuLhHjQ2hSgb7fW3XmFxLc3H",
  "key19": "CzWJNaBT8rTZ1GST9fikL1baj9RCFzP5hmVrywSZejmCbtxA2uaBYeJZR3GyVpb1Y2ezmuNzRaJUA9LxXZCWmZV",
  "key20": "3dp5PsLi8GpjtGj5SHSZHkd2ar4nMKvjY64JWXBNMVYG9gVC7CfKvMBTZSbfy4jRn5frQmWs4VqMHjWCe5AmsazP",
  "key21": "y1NYXCV4a9K3poB8BNqdMkoU7g8p3LdxLoXXBQrpQQbreQw5tQNtedZ8qKvFA1TEX5j4pHV1dA8Z8pXvAYnrpkj",
  "key22": "5fcTD2qA9H6a9JfTi6CAVqYhSob8aWrwo2qZcroWuK5JBwYKrfsBVk7ua2nd1qYQSiiZoFGgTNztMNZFLf9WCP1N",
  "key23": "mrMvCsLoc3DLmUdoxj57rggyZ6x4VtZgLpVjFpxumPYB8oYVinQPEmGhqGFQ6zvVb6qHZ5sk5QcThGGz8ejVPxr",
  "key24": "H97hXoMv9im7VZGgHzdNFypUmui9hiDRdm3GBCVCAX8Aa2pxRG7GjGTEE6m7ohrcbk6Kk3xwjoyPcbfpW5XE999",
  "key25": "3orizC2aS8mAuENBnn77G8crXTL2jYisQgxkCJE96vqNBikVksJtYaWfKT6628sEz8JdfbuRCYa6jzyXiaze1m5k",
  "key26": "UekgBW5T64WxpRYryj3kM3M6xWP4nCXvGCj86WaTgrCdbJ2BD48xL9m6k4pakUyVw46xhjpR54yddiBSTTVGG1p",
  "key27": "5FJyoJrA65BUpbEMG7tubjYAhgozWTpyUkT4D1xamz3j1wpiT7RxQ3pJFKfXJdNPb7cCQuVNp4SzZtJd6JfvUZiv",
  "key28": "2TzizyM7TP1VFQrXGCBESr2t2GtfH8j68Tz5JP3PksGB8aqoR648RDTdCqjwYk74Qasm6YfkDdTSCeTs3gvsP7kx",
  "key29": "5WSqZZFgdmNiAw2sT94YCP13woPHDbQ5B9RK1Zm9o5F5vbLAVZFXWZbETgj39PnEXjcyh444AC4jdWsnXNPy7T6f",
  "key30": "xnuQfMMQHPSfGVrveCR4zK6kW7HqY11zfK4xKxDDmtFKxGZs11AGBmGQ4o9V3DXdrpTF9djoPF7C5CPLqAifbbo",
  "key31": "2Va5LQ24phngudaHmxyvQAErD7XF18L2iL9nHSfRR8ETGGJHmRNT5U8FoHHzjR3RXvio7dUJmyJqcqXQ796Q5kzp",
  "key32": "4CjdfhXFvQLFzCNqQujhiPqBCAgJsFZPwT5JcWQXcH6T5jUpiTWf1ZahrRDanTaLPQkN4bprU1aHUtCPTXqNygZA",
  "key33": "2sxR5W3MefNzqStyxEQS3k4zpYX2VptaGJtYkj4ptbKnm3GGh9pSRvbHBSiRzHorabRoAFJyZbRVXAXAtqcLqbyW",
  "key34": "3B2vbWipxKe8pcRaodkmWqR7JB2TnkpNW1B8VdQzJDqkfH4Zy4pRYYHXb2LC9iEst3sWEj5Y3e6dDsY99jMXBXmf",
  "key35": "fdXzcJP97ZkBM4zbSgvZnFKgA4pqpS1RY4pjsRwLz9pPh7CaJJsxGPZoTJ8mcoVwFAGzCRKqG7QtbnXdd8SPqUs"
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
