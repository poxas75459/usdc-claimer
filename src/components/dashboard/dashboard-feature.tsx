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
    "464isXeLzz2ptspN19R2HaUfLFYGkmQAxFqgZGP8erURw8hXBHGLNEbHhc2eC6oYfYKyygodQ1SgUfYE4HgfCkHb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mXEL4AMPuJWANr6wtkyX1auA9RCeZUiWhmBvAYNnsFtBz5vwdA3JwZkapZTr8vHywE8BPs2KXPw94msyx8UrgLN",
  "key1": "4faYbNth8t2EJkmpDLoNuJuVhej2afMT4DBqsBj52T4fdukTSHpbsDEQ7FX9bNCkTS1i3fDa4tTkviWtqntbFCTw",
  "key2": "4MkXRYkR6LTSVpGevDxKZuHZWY458VQeWUMtzqyAKgMQ6pb6bXSENthYf31jkZWLaeGUMWjmwqZqQuMvrgvmnRk7",
  "key3": "1bajwmtefEXMwzqsztstLbdyFXtJen1MeFQZSr32WbBhuR5rrFFy21DUvjYFVctBkz9ENpfBf5t7c4miA5JkHxD",
  "key4": "5JLkAjT38h1d2Cr82vGyLGRtE9QdEnP6fDd5gG1Qw847esH6vDQWhkAzsyQZ4SvFmt3xU7yC2UgUF12Jjv1kXHXY",
  "key5": "3KHtkoXy4mzmpA7BYR95yzJZomNfMp3qAmLMexQ3NTRSr3wJMJhHW2o4PugoebRkmEvLznTTBu8iiChCx1kmsAg1",
  "key6": "3QoSEGqnhErBTxTHj3VXXRxAanDrFXzdp2j22NSqhvYtrgPyCVA4jwBWmQWGJVPMyG2Lsqd3TmzHNh7SnF9rbpKx",
  "key7": "4mvznjvxT3RDTwo7QfZ6s9Pdrhfi1e1Md2ghQ3UfJBCxuqQqZBYPfbJo5pU4tjqVrg2dPjkqGgwaV6h7BUuS9Rdo",
  "key8": "2PjYFL4oz1i4vtQMPzwRdAiw5aSBdgH43TrFK6LMpgL1iBo3NC3omxwYADTHW9w3kXccCmxm4uBEZQACcwnw5ExL",
  "key9": "woeR7vqv27qEwjoPXVV2DuhKhfSS2H9J9wYzvZwomNhRoC8W3Xsnf5s63sUL36VRRzSw3oTioN4RJub9xJ9U8Ah",
  "key10": "5XmEJYnR2NBzePRzQDNVsfAhhHMctxMjmSj9crvYpunR9hKhEWpEJoRvQuUqsSR77UidZxxYVHZnPugw9WHhbbCg",
  "key11": "5pxTvAgbt9LcC23EiqukAPVx3BWZecoM5BuzBjfyao6JLgKFNUMCCxXqL3CRzwawwbYsVGW9KTavbbJEmW32fuq6",
  "key12": "4LLibJ3fL3EJbfkL9Y2PYhVeXJ7Zz4EE6vjwnxVePWh7eeDF1zRpM8uDWJVX7RJzCXmBgBEzTqGbxBmQnegz28pC",
  "key13": "3dJ72gx2qVb4kqHHuPA5Vf1rpFVbkKEbzqPawwVAAJihQyZfdJa2E8KMXVFWnpU7s1qh8aigALHzxbhnHa3jXJuQ",
  "key14": "2xFoFxdPHeugfHCMQsjcptCPbnwbyXqPPNsSHaAKHPnsShuMCpGwCBB4W492xHUFUXTy5BCERuh1VF56rcxs3znN",
  "key15": "34vs8xxtPFz2d37PNzKFdDy413CQSkPyD7ZhhgZtxWRc2CQ3h9Rot51EDQZcfkWuiKeht1fhyKpadrqfkDHmtKXy",
  "key16": "28j37MKk2q1yp5SKhEV7e84h49oUkf4HBHMJ8ngR8nc4RZg3WpPk2WtdT9H8XUGz1SFZhNGnMBb1zGjwYFdKpgF8",
  "key17": "4kHPYXsZZhB1JAjgMcWbK3Vh3Ahz76p8T3A9L6t2w8vHfexggkY5NTkKEtRNjm1DkmreKNyn43LWEEAwqdCiosh2",
  "key18": "hEBPaCRGAEbLmUTLSJrMpnK1umt6oHFBwmnSAeJaV6cM16fB9LxiFha6MQT2YGwSAj4vTnkTZ7c7jTTxQCHRfKD",
  "key19": "3tChunH9gq1cFLM1oBu9ENoCMtACg2r5pyx4uYWH7YAqWPpWcKSoqSFvkGzqviCi2gTD8f3PCafE2Ci1s9ZytXvQ",
  "key20": "5Ei7LYmmXffXuTveQUzwzDGKv4LUyTFHdBtpGEjHYnbK75vJ5XprFynvUd8pmsjDaSPXeMYrxvV8DJ2wJy2SFc8u",
  "key21": "7jdzdfwqfNK73hz8uqngb8332YSWfMBCkUj6UZjA1qi38ZP1ZGF5WyKLdCyy6qsFKH5KUweeS7va81NaSZd7w6e",
  "key22": "cJ4KYHVr35ixW9QdwE7gkiZtEHXj4Mvhp4MQWGcJzVq7xSAqiQDwaXhqBA1tyoJJdFj1RcbwNu56yYVYRKS2KG3",
  "key23": "5c7Spgqqf1MPBQcBVfBxtpBdky9UEQvwCtrUV6E2aNvvjG4jeLCYziirUiLpUWyDJPX1t2XGgftsJ7LpZcSt5Ds4",
  "key24": "i8ZoxEXNDvccEdnuiVt5qhptT1uB7ZwbwzDJ3VpbLt5MyTPER4eYUVUKaZMJLwqTUAqbWhuMVCbRSw4B5gMGDy3",
  "key25": "vCY56tXTUSV723iecAZhLZb6QM6Jq3qLF9ATBQJXBDstfYpx47q5CVGUU1ED2AfMVF1PbfWpoMrQseWMWejYjYN",
  "key26": "3neNcTTtxTj1cZtPE8axSbwFJ2Pb9bhPEUqeBYT2G4Bw3QXpSzVHNiy2sGgpn79iBC58iDaULtJWqTcyTn7NfrtS",
  "key27": "3GPtmQcRvKRzTNgPEt3RevWSND6vmeDKzcANuA3kYfgkTzRHu2LF9bRPwuGzD1FApUGyjHznV5Vx31ESYHY5Cnfs",
  "key28": "4mFsf9Z2N2yTB12QzocNcHnwfi2L8nhYNXnfUQ6x22PCDBUDJkQtziKnm9gMztaEGCwdw4WiBdSGCgawjAGQfnbW",
  "key29": "nPMSd5fmsXzdRPGD2QgCcvrhpRKvThgTkCgJxk4h5YjbvWpx3L5nVkHoN9YsxdaR4YU5EBQ1kmREPNNMd7SjHgj",
  "key30": "j7yMmS64p16rPzmdXhsVvKLSpzJSQsWorbQRVQiRqCwtrYJcYRBppgFWoDU7jLxyLw5WY36Zy32afGFFhHvGEtJ",
  "key31": "4UumfTMXaKiUKsvxSMTDz7yoqXJms7LTAt5e6Nd89cJamBjWH5aUcr7knC6cdaVpxHwjKf5QvpPNicXKKWButKBe"
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
