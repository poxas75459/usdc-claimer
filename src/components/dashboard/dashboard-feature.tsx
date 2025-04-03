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
    "zfpCwLgWkVQMu2Y7d2K4mZpF3p4jKdoE2E146XN7xhfGFnvFaQNVo7sMnYzQSeVMqveMkNcjY8v8ZmdEz7bkNGT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ukQLLwMpGchXRem6KaZ9ijHaCT2sGt9A3a3dm7MY6x8tdZNATvFzKEz1S7Edx1Ls8VAJqSuhQmdt9UXjqhC48SM",
  "key1": "9gQWrgo4iL6sku6ooGDn7VymRmQRkzBnLVJ7EX3Du9iY8VDapy3dxavmb4dCwpq1zS4UD4mWo272LeAWdNcTucc",
  "key2": "54keUK4kEFfYBihdqVkQ4GbsmVVd8nE3tGb87eN9USUhajew66Qni7uKas5rRfiYENtbw1udNxV2AjSmMC9BS2gL",
  "key3": "5UWv4T8FENSw5fLhbtPyTYDvfuAM3X16ExQqcEU3x7i8SCLp3XYEPfumFZr4c7QUvso4ZbuNxkyGQ7pAehj1GXf3",
  "key4": "62PZyxh5La7UXuqGos4N9Cj8Am2cqABLx9fJLCHRrM48Guf2JbEaAWkeqsdzzky3gLG4y4ZMSUqPUcmwyT5iZnQG",
  "key5": "42mt2pZYkYnoooPHuRvLCxbCRmax9xxrNruUGC1fzvr8S82bjoMin1acjnmReArD4bQw2n6gSKqqFcUJrNFzAN6C",
  "key6": "EFHCwW6ybQ1QJNEAFuHeQRRRAEB26KGrwegMkUS9ocMPpiQmTqAfZKBAAzKJsvinvNz5DoHzNPxsViR6mqH73AM",
  "key7": "Pt2h94oKyoZ868DzKvtPVZxR5D5gThu6TcPZRRCeh2PsC3pPaHQjQhxKSWFRUEZzhZYE6ULQDXabtvuchRa8co3",
  "key8": "5QSo5qhJVcrKxoTe2eDtE7dtrfb5dPei5YDzZQQ37FNsPCDXaMMvVbwh1mzth37r6JyoQsLDfQvgk9WqCFEEck87",
  "key9": "2cZXBh4mCu2FgSkSYqsbC1MAcQpZENaWEh1aivrsEF1Gfjq3VEzjjkshp3LBAS7oNoAb4VcR47U3SxX94DDBDfyc",
  "key10": "4pFUEGEis16HXKsu1BcETWurwChEqsddJTwZY3ZvJRHNq1pVdBGgYkFq2BjoeD3FSyMS6RabjA8b5mbnf5UTp4LS",
  "key11": "5JBwj5XwvAtUpjSin8zJsDHZqEHemeYGJVmaqaPQpexEeWJ2hmiWdj5zEnY7HabD2juXrbvC1WRjA71YdhZJcm5d",
  "key12": "5HXuP1BFYmpH2QfvrMaGPmjhqXci31YXBdKh6nGTKnKoqswzQndjQDXwLu87RNk4zF6M9kZCwYrYV4bid2VCG9zb",
  "key13": "36kCyqPoFfPmVWF4FWQpVJXpPQ5h9XpCLRcZP4bWofqYGgew5AgYwbGgNZ3AUp39rZHVxfTtQuNLo7MS52ieEzuV",
  "key14": "29odrH6gupViDeBM62DqH3utHKQ2cLsRboHPwPpwntv1fx3ccWzJTn8PboiiwrKcReZNR9xwYDQrWGhNMq3PneMz",
  "key15": "62HgnE3TbSySwgjGGGjcYrtErQKE4gqP9sqqgfEbNBemsAX1hypQAnjfiRQ7BYRFjdX58LM875t1YuBgmWeaoGpr",
  "key16": "CfSmRMHd2GrB4hMRrrd7NmMzUWEkV6x1Gu3x2n7HRjPgoAPv1VxysQ9xK3oB9aYAMVQGY9AN1RHubswz9JSZPxR",
  "key17": "UDnk439uRo47ioQMcj7oc87KYkNKgG5ig9RwVyUyH82dG5B2KJwmcA9aYkSLKpLN1hGk8VkPYBqHxiEkY7ndgSc",
  "key18": "5JPSnHuYUR9VyAhVwfs577DyksCDw3PecqNcMQC8Rd6Mh5GVyoAfg9pJjoCvzmFkArDqREVVKQ5M9L1S3hQFoZc2",
  "key19": "2u1K41B8QHUd6k75hQYhsvE4rTYvFFT1c2E7SrdVDWkbEJm6RrvgSBWBD3eZKTCBifoswePZRvyEt5hVzLPjtG5z",
  "key20": "4sGf7finE3FM7ADmp8k1jkGKYaJapyq5MaFATMmMcUQJbFTiekFWcNxRDozrXzCk3gyHvoGpAeVFfuhoUTAe1SbC",
  "key21": "56ARCpiy1aj3HWwm9XuYj8iZAvn2byUE75TKcwLA7VAo7xhF7i8twrFYonsBmPQbAz1GU4YsbXwE292yozRPVCgV",
  "key22": "2pS5siPAjwiQ18WYPCRz1Xtif2NYMrRVKasSQjF7LrkNZuGAGhftuJcVS9v51akJWu9iNfTgWptgRPetiSHCNcBh",
  "key23": "j589NMHtiDHB7v849YycEmcqzSeYowsDvVeFtVgqABEKTVroDmwxQukXvWvFxkjwTniQU4Rd7yMWPjQdFogRFy7",
  "key24": "5jGkrS1bJgVKyF9uKawmCVxmRKpkN7VzSmmLNd7ykTTAjr9FFV8wMSkFdJXR1xpxs2RiMfYZmguEK72F2fiJaDBW",
  "key25": "GCV7bnST54ko5nTTSBR5fExwv4fMsoTUV9SDGLG5LYuqopiRDaSjtsR5yE4Hk9BADCRSqFCdj32zKFyiBTe4fRi",
  "key26": "3vjyE8gUjUjtpTizHai8kTV92bKDLzvtdG5K9qw7Txsn7PB1tKrG64qP9KLLYf7JZFRmiHHffrD92M55NjfHpZRB",
  "key27": "4SmMqJwAMqUZdPDeU3DoyLar5Mm8219mxY9vPTgx6t7MKytB1GNaKKcEZf1AEut5MK84xcqPbwurdhRyuCbMCXNY",
  "key28": "4nTN76tJ3Bnt3yNZEdMPwuY3psP2LwakTUJnvtrubTCswdnACJ2jp9MBGBq3eHwDTrq1Qpas5x4Led41wvxfnZPA",
  "key29": "2KrqkzFzk58FyHsnVLFgjfcFr9mWKLQsKRhN8tCXcunKLxqNkBZMvnkjYNnLBFv64dM2JSh9LWfZHUebqUmC9pFH",
  "key30": "4Hw92rp8mTsXPqz4psEmvmJnAypC3MYA7VEhg8b5iBzkdxCZjMXhG87uRHPQz8Mfyn72Pw9Tda46jjBmszmURnMK"
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
