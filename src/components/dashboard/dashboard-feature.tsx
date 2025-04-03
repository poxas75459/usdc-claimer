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
    "5ShVjn1LvongeS2eMgZ9cgBW47KfhdDxPTBFwDuJjXABuBrsvYLTchw3Ez4N5x5rSi5CPLF2MZaW9XfAEaCvF5GA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UjPm68Kbq1SgrL4Ro5kVpWxdy3cwKVQevXHHnvbxgy2i6tTUvrgPxjwHVd1uZaAvheNXYr116biXP1efDtEDd1j",
  "key1": "RUcGL65ieSTvx45Mt1FdudQbMUuAMcd7CgpQi9nH34LG3DooV1zyBEQesjvu2McFV78iDrq7piU8nyMyFxeyZYs",
  "key2": "2AReB44gCRZpUd4StkLjNdDaeozQ4QExVMipSzfNUTavebyR8EsTHZCEjJ3ioDqDcMMtBbQpiwmoqtBvj2o2cttF",
  "key3": "2AADaAiFbaVP8nMi7Rz1x9a2aBeVfJtKBeAoPgvfvZxAdrVYt2dfPFHgYvXp6VKkwfJqjSQJG9i8tNT42Sqcz3K7",
  "key4": "MAiasMLxgWNw4DiU5MfowNo1mmazJ1rfsJhwxz1BS2XBzwDfSFqLnHx31cbvA83DGuoCoC5VGWApy9XnFnJTnqi",
  "key5": "rGrur2Gwqtbr6oT6gvVctaURFTMtUwrq3WUEpNVTu67WEe3TS5xo2iwkPjsuzAaBAQ7CHZVGGz3n3sb5KU8FLiW",
  "key6": "5QsLZMQuEV9iJjZ946NvqnLsKSBTF3i5ToqBMtP4qUfEmdeiSrHJVJ6Un8YLmPKDBnzAoVHsVpZd422eH5EBnyHe",
  "key7": "126WP2NL3aVcK5fpgftTBAs1K2zowLvRq2extAeRL9LeeZKn4d7Nyoud7uv9UK6uzkF4d2LUQxs8PF2LcKP1xCd2",
  "key8": "4SafmuzG3m5W19q9mc6qRsBGLkU1bXeecpGJhwHabYB92pUvFhndxif9vtmRpyKvFdm9L7H9P2WhVpNQKmf2pZJv",
  "key9": "5TxyzWHzTDv3tkpGwr6Nr7hWNcSP3HB3ZHahQkt4bikrtynif5wDAyfEXtohDHdCLhK6wxZcTyPx7yDHP2kEEKvL",
  "key10": "X1fjLznohvAZJmqSMhfTWA1Rqg6GsrMJ1GCAmNDnJ8ytmqSFUbD1yMsB37ALwxbdvLRkZtKeUK3Q2FH8dCena1z",
  "key11": "GSYsaEw8k5MCoy5xeje19SxSEoajmpuk6g6LTRDKXm3Xzi8nWj6uNb7JHux2XHNcF8mre3MRUTzJDwX3AzD9mob",
  "key12": "4s7KRHKm5BQDAWmcY8sQpcU9Vpmihx4SpUo4od6Tjf54TcqgJVTcNX7xS8yL5kEMCZmUnT1gKnUJBXJUv551kCkT",
  "key13": "2H6vD8raPbYwRpH1xKxyq7vrHEf8NC6iCp5ByP671LZPBMvXLuANp9fyqXUvrqL6AvbL8Ndi1ddfYmWJ4eXLL7Dh",
  "key14": "3QAbP6AqoSVYxkpZTN22w1auWM9Tja2DDyHAemRBfcaBEXpho1F3w8kBFvmMg6PxcdUFozSKyhvL6pYWRHH5hQtT",
  "key15": "33Vg8mTUXK6wtmXgdcaoDZXigtKe2ThNCguua9SPhmvPv2xxKkLp3Ua1CEBCbFS8LniC5vifkA2cEpCdjW4cT5ga",
  "key16": "3LwzpvkgDzzU9EFnkyDS9HGHwXjc4JRsPJcqHfYNgFD7ATF5d7yXRheSY66QyMdqNJqAAnQBm8dz1oB8cqCjmVw5",
  "key17": "5qsg55XTnqXHrCxuVLoUA9Ns4TfsPB5rACE8Khgxy7vroeW4DxRtCWtjdWm3cjUD9LixYNXWsxZv9zq53DR83CGk",
  "key18": "4qG38B6UfTLTSkcpTsdVFmKP2jm7q9x3JhcKUHtbtqYZrYjDieJ6k42jQvgXE2ytSefRrJaeeLEiwWC2NoZdhQpC",
  "key19": "4DJcGW4guBmT3kWv24D4kJ1cjiUsXVcAzdsUG16SfNJCgBCyu25QRqeqDFWDDNNGg8i3gtYRjpSDWGY2nUj2f5h2",
  "key20": "2WDZsBUtsMXxWY6g24yybg17UPVXwfRyJhKJV9QuYG2EHnokck2CD3Y5LHcQBU3HzGM3gyyuDnUAUwhpMraKqxob",
  "key21": "sbm17PADEtYuFyXLEEoGtcqaRuvTM6vSLdk8PwvrcnZ4cZ1uMuoYyg8MYgKWLqy42hQkDTGmNvUNW4NXM3ofVf1",
  "key22": "2HWoujcdeK4jPMA67wb7gkEkf2UVTx1NHLwJ14J9n1z79SqdErwXLjBNHHqjcv7ycEN1qVKHvimZmLx5Z24Aargo",
  "key23": "3pbdpJDiZhuVsRf3oonFZyADyGRBLWXQmoycsse1nZWZyaUgLzoN8MoXnnFojRUL3D9cZEXLWmUUbHgvdmJz3Wip",
  "key24": "rY2ZY733q3XNxvhjZQzLcBbQjDGDXYB5aVU8BVL8RzGVB6putjNsndcoCunasQeq6BWbJjPKFV8Badzkx6gzMnA",
  "key25": "26LFvMrcaoiKdPRdivy1nDKtbyqJmDeZbtqBUdjGJ9FmHK6dpxjNqx25w8XN7hiUuWJnnFfnkrYuJj9GqKYZ4Mt4",
  "key26": "5fMsCSz4YMhDWi4N96p1rGzyQ2z9E51nf7p7PsXrm3Be3Rs1PbJCCVd9uiQMQLRdM8RyooDFc5aK1ggBLjhVR6ip",
  "key27": "2RvkMag52mFsNnXY6kJ5Qmx1HSGWh1Hf64uuQR5dx9wNFDobss8k6NpraC9BvdP8WS4SrLhnfnkjvRUoaa3fGBvK",
  "key28": "5RtVEutgUGWQKcGvqkfXdGsFGSrpQxN1AEnARjwMFCFKQx3eJpLBDG6PN1RUNBV6QzJ9UrutL4KT983SmwDMmj63",
  "key29": "3YHupEbLRnbcBRdDEnnLNY48UsWKxL5YdBuAHGyfiuQmHSg1oNZhE1F96iKZjbhwojbx1gJ49Nw8mRGZcEFXHEak",
  "key30": "247ZdGPFTVKvDk3aFKsvoeXcwbETd614DdTHezMwVLJR3ELSGwGy8sDxHSmaBSRWUtRqKQNBTE3oQzpDA5PyhgtF",
  "key31": "3kg7F48tUsbNFrKrmKy9WVnCzCg2aehWGLZF1dLEMkKgDSNRjHJxJdPtrZxWqZ873S12XYZsCof6GZS8vPcNwvrB",
  "key32": "TWfoJ1zxLGL8CCHR9pp3KYAYdUDcty9R4SUbSh3EhPuWet4nmX9BpsCNy8WaVJ9TS84PvK8S7CpBQvhTv7zwj7e",
  "key33": "2eQywNmy7nYTpyvGFmbmoARtKjzWdtGJ2KjHHU4vk7tFcjb39Zjin8z9YdD5tVL4UztdXvDsqwXBXdrRzXbQKz4y",
  "key34": "3UHqxQXpkDg6oUUNJ7gZhutbV5vrGXm99LJs7fmoFL6h74Phy7NLuSYJJWQMyjcbwNaaACVgiJmZ4ooi2hyMgPDr",
  "key35": "3C3pXFvjAKcbRRJaMU4qNUfwjsDPCUjS6k8hKbXPaVY3UZPkUFkDN88MLZ2ZSYe42N1sqNY5UTx7heYMetfh9mZB",
  "key36": "5TAjEoFzbN9nybeGB4oTPRtcSuMxpZBVwvcxXnCL1PoJM5icZoxBgEaBJsJswMTmgy5SayPjNEYZxQF1Lw5rQApT"
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
