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
    "3JzNNSvX1ZrB81Ju8UWV8RgdxMrrSf6eppEoyrFpeuXN2Q1sNxvwBsamZrWRgopa4px1xE9CmCSLLDGaStw1YpY9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WWc5keBXumdBBMszgX6q8VzZh2xvQDUCrCPJH16MKChB1FWejwQbsMhgH4AE7rxW8LgCtUAwRKSf3MoE6AacLcz",
  "key1": "4b26ZTza8MNvsrrRPNWri6EE6r9eo1WyYKiDGEhQE1nCeTEZwzDC9fSnH5j4uAYDk58LCpjFfvnJHrJU2Kep3z9e",
  "key2": "YsqSYHSwQufCawzjdYKkoNuojz3WD6LAXEN93YuBtL6NFcQBc6ScUCCfgk7pujdmEt2vvXpR5auwWG2F8o9Djcb",
  "key3": "37BRXiTprSKYhsY2VmqoZjbzPr6kQvKvqGbseWqfZgBfYceoLb1hE9JZjWRfdRKnK7c6crprEpBmjVZfM2LdqLuK",
  "key4": "34Y3p4Lkfx9iHK5RafpyDNU6w6aVoAqzQm5oUfwA8Zw9AL9xWeh9ouVR9k74jAfHXpvf7LGvPfvwohPXUtMFjTtB",
  "key5": "2fLMFDK8LdDUpKZ4RoGT7R2D4xedCz7dqgdm7gYihWcVQLcvz8vR64miC39L4p9VZDkKwwZkPfRwnKiCyYKCqQBM",
  "key6": "4HnE6KzsBqAXT7gfbrzbpwmTYUF2twdnhoxBJxagJz75Cjgr6SgP4tPMzkeNSYNCYSrPPRQsSjCraDD6XE5Ma2XU",
  "key7": "52yQLSVwX1rGAc2dWvv6btGMeYpkYeAHjxpPSiCcsEec2HgVkrRUMtMQYpVHf7J3YQYM23YYHApca163s6ykr6Ls",
  "key8": "5pPhvky34ppz3KfLmV3Fmk2yf2hHAx6qYt1Wv35ZxHhvHibD4d9LcWjG8F3nJeKeotQw9d6VqNsAGqE8UUYqS6Mk",
  "key9": "4UPUiRT7doh1z4za68bckFMdDfBwhHwCwpCdJjxETGuVDRB54xwMeAXA2nediW4vz13wbhu6Eh2WvHYC1Nn4VidQ",
  "key10": "5iY35aubC3HdNHkvRwHA1NQPN4KpygvZ7qm4s28Hm1TtVuvwpKyhWjUuqFZbgYfkFLWn5BFBcimY1T63mSxQB31y",
  "key11": "2pWGVWgs31B8Eb3egrzgywaTNrjjPZw9WkGJhMXZbuxRSe5JT4MGJF3LLWzXCsbp2V4eB92rJ9bH3FnDYebFAohn",
  "key12": "5y5a1Kxt9hiPNN5uGt2TsW5iNmvUFPcB5AbVWyT7wHWEbQec4pbHzybQADPgm32ePvgZn4UzmijhfAVYjKCFeboh",
  "key13": "2tcC6kT5Txdu4Ror278ePp8LSvVdmfdR7g9dVpGCEXERyRUykbzUSp72cpA4M8Ht97Y3221dzsE9BzPUTY13TPqW",
  "key14": "3ByVY85PxJWZpBLjzh2m9gHsLd9sghcAsTEX8DZnKhufVNaE6px7S4tjBJdvTAvWNd7CnFpe3bKG1JBpC2GED7Jw",
  "key15": "2EMki6LHvnXY3FJUf9iG2246h6DHSgfqBYNNej1pEYTXMCGL99bRQdFnfnBGQ5K5QJWm3oUZn3N1ptKfNyaiStrm",
  "key16": "353fgFfCETWSmVoS9TAmhLrTJvoFghnrVeGNjkn6c9o9eaqd1hnYXLuW4heoqHToJsBWLaFF7HkHkTyBzDCqqdMp",
  "key17": "5bDzEar1dhWFUTPpwh5BWRysSosvEj4TgeqMaoSishB7ugy31JHbcJE53SazTm6GizvWrk3EkWUJcRPx9noyQu63",
  "key18": "5ntLVZSG94HLCKUotzY8ACGSu5zFQkRi1Gvzc1GJs8ZQf7Kvmw8F3MpWfsDCHgegAdWsNbfG9AK3RVY7xScf2sEo",
  "key19": "2ekyaDBhoCmv9Soqb2oXhBSKtEiyH6ovhDFDt8KapD3idZMcgp31r4Uawnx78uGcVkL9WsQwDZvESK8j5UiwQRuh",
  "key20": "61dvBa6csMtzaX2xmEkuLjDvF7a2xpK98yrsQ3hK6tSvbNdJCxKEqYG131K8DSzffaPhyam1zAvvBMpmaX6cgmCd",
  "key21": "cRRyE72W7J1r3DxBo95MtsSqVPTBT4kEWCKZjYHZTBrebmSx2T4uzqgaEfeJSptE3iQc85fTgQrMvqpb1nVc3aT",
  "key22": "3hUnWUQUDZQd9syBWqaMBP7aKewS1fgcAwjF3byRSArrpybzd9Ho3cDoRmAEU2owQcanmoXrZs6wv8ZsfhLbKkVG",
  "key23": "m7bWo4yFZxTPnccZd4BExY9MP4rX5MotaV2JQFa4WesPE7r57HZR4gvHg2njAEWzMWwji2jehQnxK3G6zbQTDEY",
  "key24": "37hCY9kqBgJKk3uC7LZSHwmzAHazwSLxqq1GAz9XJ6mhBZDj8X58bB8MZDFoqD6ZqzjaZWquEwnQx9ERy4QUVrXF",
  "key25": "4j8EuDiTDHhM3jMTPe6hFwxG8SRYQVcjqYAMBRoQAFu1kMDw6AYAtcwzh5277Sf3K8EXJBKjdg5L6gZX9SEwRfMA",
  "key26": "43arbGv9DHW42fqecgnrtazpiVJkpLxi4PALUxfUNs67hhRBvcYe1RezAtfNx8RhG8vfW2RyTdMpuLs6tBgsZzzx",
  "key27": "4LGsLLVSs2TQqNwLgAdasqoLUEjr4mRye1wbbsZoxtstJJ7sJoKpvXvn7F7CyjJ6CaHjKyaSXx65Mk9Kr2DJxJ4P",
  "key28": "52rZrEDFeQLKFELdMcxiGafycmuVjZ87yDcScZDb9WTHa5gfunoU9rcuQcfjDtUHAHAAjFUQaKynkaYVWwhaA4Un",
  "key29": "4Cu2ae3HiRJKSLsJuyaZfKUzgk7RLtGARRDpmbJ36p1UB2mMftpUzwwRrhqKXh6n7iZ2cBKwKfMFwxmW6ac55Bkt",
  "key30": "2wQb8zuPJECxnB5a941WZ8k9Dtw7Lu5PYf73GYFaRxdeqX6uZy7oqsEh4zbcTKjBm2xRYqCmkK68YJdFibrHGvza",
  "key31": "2naZbwMTUH5XQdZZgrFS6bjDLpEjt7RNq3YuBbCqi89RN7ce26CD3K7CWm28FdKyfVX9qaxRg4YeLWH3SUn2zgQP"
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
