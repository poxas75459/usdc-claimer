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
    "3JCXrLuoDMoy1GcQgaXJoooSdi9VagoEY9GRdxA9JEtAWQH2PRTr29mLiLiRFHPqUHJXjnZ9npNqKomXBrtC5VK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6nj85UEwQWyHYPsFuc5Ehuhk5NSsKmXpuUqmzySFWcEMhgCKhTi4tRqXWLjL5erXkuXD7xtGosXaxzE3U7iwCvJ",
  "key1": "522tMSSC3VjRHLqhCGbRmoh1rWQUQ6wMTf8sew8dv4PoWBoPxRuREFm2QXxFhfcmHDSEY8qBJrQDkJcH82MR7bxQ",
  "key2": "2g5AemrJjdk747LYDDppTX1WQBvR6b9ztskJP1WS8d54QJqH1zU5r2WHZ56u97Dc72mxjMGvLZhbnp4v9bc83fxb",
  "key3": "51D81jAtAwcaHPY53dtpAiqNpJK8ZMd9P8bjLLfGbJ5w2y1pcHicNzh4J3bWatPtcmMtNbNFHSEa4Kv56Tfnpipb",
  "key4": "5kdJeF58dcEGhdezL3bemQj3z1JyoNqKy4PRV6gpgaeH3cSpopu5DYXc9Hnhh65VEKCygYuAW5LwtxPy5HkNHqLc",
  "key5": "4HQspFvm6tFxvCgTZhRJeykrujMRfMnaTNgUJZPCfBLmmaqpfAKWpqKdgzsmR2ntYCPcagk8jcZHPq2oDQF3nUA5",
  "key6": "624QzhqmyDANTWc2dZehG4NBtgdwvY9yE37WDASaBT94fqcMzAsPHRt1BtMnoy2iCJU1k3cc6H3zsDxDPnnu5eCr",
  "key7": "639hfiJSDfxWEFd9p7FFqa7v4MrhUBDPoqzm5grTZ232Rwirr2GFSTvvjLUbdqvLL2PXJuyJfYcz87cAtp9dVxgX",
  "key8": "4AjKtQNzLMzDoHkKEf3QEFM8mH7gPsKpUetDiZGdfXGf3S1cR78VGPdjFHBE3wFKnTYw6pEVQG8fKy1kBeAUHRE5",
  "key9": "2uGBcyzW3MjtskLRG3nNQ4orLuQVgKwYm3ThZKgdYg3KU8YxRNjRoS9GPUys4WBNtWinkPo57B1q4Ky7M6PqpUp2",
  "key10": "4ibqPbmwbza2PTnisbgV3BghEHNbwg1gdjbgnSdAsTTd8TzWLA5X4Jcw4mBsbvveY5f1m3eqhE2kj3NZ3zKqkozd",
  "key11": "5xQriTiEkD8vct5cJusR82h6M2T4Qdqap8ze5qpC6U4KFmZ5jF4wA3SL9F5eqdpfXxVZkoqwc4EKjDhcEKye6VQU",
  "key12": "MNuX5dQbSJC4JZ21EQ26xxq7ovDnzURnuENZaxhNL6nt1BCrYvRrUMV3cKbLPJrqLuD1EQ5kS5ASv7XfBEAaxz3",
  "key13": "xSNnBCmuDHhNtRCy9eLhWJ6sPVcHj4QMb8QuNjHSZYDeDBQo57LXqEqiwiAjDQbPwhAnCupBfBsHXEfb9EMh2Wf",
  "key14": "4ZaCjAd6sH72L5kvTS4BfY9Uy6dJdefxfFrwgJd7uVe2TnpHCGtpGrQzdbvQNuS5svRiGayzR81Y1gNuY6qHaX2Q",
  "key15": "3XvRxui7buZgjoAcQFCrYC1LwxXWDCR2KYJg1xDPMcCaJBGRU892zTXvd68tUivLg9WCJ35mjJy87TUkhHXog2Sq",
  "key16": "5wuXEYo8oWSy75aKvc27NG1e4sgkLfMBr73QXigz13mTVVMZpraVeg2NBuS7RrgkSHBM4hMsaN6QQDsx7GNXDhnp",
  "key17": "4CK3uLYn8EvFdQs1uCNj7eQ93X9yQ9DAZCvHR3GZfQSzR5yPA55ScS41m9CTZL4jkRfDM1jJWXf6nFeXKwHz1Ykt",
  "key18": "bkyM75UpPsEeTjkzRnyEBamzheAR2k1zqDoQ7ssmEDbZfK71fUQrzZjBotce7YpBhasfQ7ZPZTaDiLuwpw27aci",
  "key19": "5jp4cTvsRq2kdx4p7Yqj7nNHQiCLkNjHuX5JXRMSgXoNeq4FqxaVuE2Tuwfz1LY9KtBCY4XjWakDK4mUtGCsdmsF",
  "key20": "5cQZNDvP4Qc1Zkoj3kQVMpnxusTgWH8qU96R1R8gFvRt1Wupm5uf2cQBQA6tK7ZonyaKT1HXbS5DhsRDghaK6XAR",
  "key21": "5frDiTVdEnWhyKoe1yVpuGZzBSCR95Ye1y9sf3fumTgS4Z8bmB1RDVAvLNr7a53dyoUjeyqXXZ7TugKQv2PUFXfb",
  "key22": "3r5Bn1GgaX1bsBrn39deVmbGzmbMZYb1pYwa6wDXZojcDa6WBADHX94YgVbfh3xUC7vURTat389RhyGwdgxPxU1F",
  "key23": "67kDxVGHNTLJ8MTQkhFZRVtDnQrfb9ytm59jJNMnm688rJSaahMp3EeE5eFbZBYmTQxSPNpzYr2UFGyp8iKnJBnC",
  "key24": "2Xn9dR4jLKV4mg2eFyGBehpDRdRwepN2qwnBHp3hroVezpbg4VRmJJpEthEfEUvmT5KbhPLsC2XKWGg6tB4oTjf4",
  "key25": "3s2vbuntBDPCvVKJXNKjuv5uY6oKfGMCCxeWyuphUHhXb6E7TEo4VFegdc12Es6VTwxrCCioLLV3bGFES4Ckwz1E",
  "key26": "4bB7FfNq1irttdxBrs7rrmTtU7RhwDcNH8V7etjTFM9UaWrNFwmHbJhZAf3Y2Hz8u3d6PHFFZxAeEqSMyD78i8Cw",
  "key27": "3deMcdTyBYLQeJGRnjSccb8JCTX3EQShrn2VyEDW7VWNwMVhUY5MFg5xeXJFprWujggjZCtT4UihJvqCfmxujtcW",
  "key28": "5tSuemHiVWvUCNC45iBSjdkcQng27ca7iSd2Ajq8rEx24bNcLQHnaaxMpyJpiXivnpqE2XY87z7cAiRD1DuCRyo7",
  "key29": "5wnAH92SefXjhqTNKhjJtYFizcpjQQKAep3epygjxHVNZfHTFGQ2fpKMSmJf3FN1PCKpUd73LizjDDcjzrE4G9n3",
  "key30": "2aVR2eZ44nC1oDLg5rfPpw8YxEpSVbxVYRmJYW2TarCREg9az39vhg5eLBiNMEGxVcf9SXNAUzk4zQU6943YF1xT",
  "key31": "3Xa6x871dhcvD1UeZEco2AB9dhiP3dNnAgz97ZEb9rKSukRCVPt5tuM48qkN9CBFBE1HFi8Z4n3KWPuEv4CTK7yz",
  "key32": "2JDJEZj5GZZ9U7Gaq8tSjL7He1u6o3LHwWt4vVHPSMiEQgWH8LFVdkysMCctJ4G3p66Zdk359jabM3pN7FM6pJki",
  "key33": "3u9wJrJ8mHozmBxV3E2fmcXtNXWKv54W48Qw1PFB234ke9g18dXojKRK6jCiHvRa1wr8vX9w3ycsdd84cdWSJAKh",
  "key34": "33o4LD2kSyFiMnJPwserK4oPLKmqBCuopuvnft35AX9f3o8jsZHhNmbQYPbJiVaiDygs6cY3i44iFcC6DT7uuJSF"
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
