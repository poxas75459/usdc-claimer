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
    "2LXpP2iCgzFBUaQ5TdEos5mMFAb9Ymvzm6Du4gTwEzXvkyB8RpQZoB2FHARGaCexuSXJ9XtijvMhsFgaM1oPwHCE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aBDQRy8JmpXFaNitR5yxoWhFCE8B9F4kJJTvAVWzyw2NrWjVCP9QWx2bFxDJwgSLsrfZxTsk1SU1qPko47kjzpP",
  "key1": "3NyNuSCY3C4EPQCGfojRg9UrcNq4hrNt6dAMmw7XYUYFssXjn5WiiqUXAQ4fnG7yoYfZjxArZDkLYkTRTozD96kM",
  "key2": "yaz84C9jeSu8VLUQ2VVFZGCAQLigev5Vwzu3qJWPZHJtoHUnvZ8RffM1iJ545AMyF4eyiPwYbnr7Ru6okUNrBUE",
  "key3": "4GTcCD1RsTMX4fVNF16e4vfoXSqX3Sd87v6sgEDP1kpTKDuyBcSex7c7nz5bVa2NTUepCJqSfXCHwMKUFPJqTjPG",
  "key4": "wE2MErx86cRsHCvF9wE4RJ7ynfqWSCFtvtAqdu2wTE915PXtRqQhL71c3pSC6kJHFnVxBinXrMN56NQRvGjSsRE",
  "key5": "59J5R1LwfTXXKvdL6ziGm57q4ogJ126rK4tkqrG4ek4xsMZ5kXTZwQ4Y7Ro7FU7zj9ytj2WMmGaNBxGm3d5Nmn3p",
  "key6": "WbTmFB3LcwNt35LtLtiZQAYMSEETEc6DfZ8Wtc6GcqRe6qsu4yk5BvYhN7By1dA2VE9Ycjpci9eHpn3r7RWRS9j",
  "key7": "3tM1GavsVuEw1Jno9jC5RZzTSa86stDjbiHAm9b3wSL8hELSxdHbbAeQhSN1bENXVneHqxbEVKvCHuwsrrZArcQd",
  "key8": "36PttLQPSzunb1K9zqwkPRrzm5abQGTYVx4LBTySowbu2Yvqeu86uJYhkJP6wi8EU2zpDYeCoaTD6UKqYeVMTcEd",
  "key9": "PoNmxhsvcFbkUUhMbim3aW7rgXMwKWdgLbU5ZPdeLwrRhjif2EQunh9mKRGMNTyKA3qaL1tsC5E13rNZnjCDhg4",
  "key10": "2nKZ8upmLQX41ivx2rKCyt3gk5sEb3dJ4eb1zvwNBrUfYEjpk6VACFLiMe41pJSjJFMjzeufAJCe1agGf7YscxBS",
  "key11": "5ZjhtfHtpnyb1e98gGijzWTMesAtd7botDPx8Hhs7JLA8aMiWg8SUBVcvSC2QSmvmvEFnDVXudaKyQbCMrBSRt9e",
  "key12": "3q71orm7dQ9EmwrJ15JVEDUn4TbiGtZR7TWgubYjunXL1yMaZtmYNFhS6rtfizRYXkZqbhM5ZsmLRzAjbS2c6v97",
  "key13": "3kSUwpn77Hz1YmSw4ff8SZUNb1xuzdWJR28jLcqia51oqwhnrSUpxDDQdmgEtiex465iaycPzbkzAyP7rK3975kb",
  "key14": "3y2D61DHnFUgE1ak4nE7kudaLJT6RhXvJuSiAGeDzW69of5d4j2AiaV7d1VKjnXgMkAwGm4nS3mtaSwT4Vw7YER6",
  "key15": "3jyHxfBbFon7aHTUXeFztLNF9bDZFkPj1BTWuogW2jCruUYQCkQsRv9dNvnmQzRLACADLK1Xd78Pf8cuMa5FrUfB",
  "key16": "3cnTEmzRijpYzzitweNkvGyPKqFkz6PFwtYeja6zEkLmufBXV5xb4gqcetAPq141W4qBrKVngTNvBBrc5PTTbRcb",
  "key17": "4FhJEkrKunjgvKLTrTQhS9YiQz1kDZfrB3YY2371f4fMyriHEhDjqN9wCo2efoRHJ4jAoXL84aLBoJkk5XvkGA2r",
  "key18": "2QGQ8GWDzHjcCh1kMwimwzL6Nt6ResDYET9mAZeyWZiuyzt4x5aNP4gQiP4Wwss5qfxQDd455JXoHWhNGLkV85pi",
  "key19": "5X5zyi4nzdwGH4on3uTWqCUxZsnHZ7vfPxXkmvELuLRnCYPUqG9hGU7Qc3CVpoK3TL5Dg2u8CDJa4rcboj2H5Lsz",
  "key20": "5X7gU2XpxAet2fALKpGD2tkmWbYeiecTcvtm9bA6ZiPX1eHg1XywHLQNThhbC2F7rHCtgiCzbBn7135E1TbLpnwK",
  "key21": "3kS98378nPnRM3ExdiinkNKxhYjTdArtRhKaaFTR7s5NmZ3nbEzRQwFxCsR1PeaThyWGdDptr5GMxVarXqxY8PX5",
  "key22": "2H6tKetNTB39APhcVFhvgpRzWVGWep6CENmgAqyU2Rj5JxbNrdmN67uXnEpU5UsrX1aowKq2s98MmsREAYAS4UV2",
  "key23": "3EoVg7W3SjS8gghwxe6iSV9zYN8WzSMf6CHDFmMXAp9M394LNxHdFfcpFQFhxD6yg8TUys2MTvshe1qxD6ScwECc",
  "key24": "4xMMrfAQ5Du1U4rALRbnXc4Fw1ejc3AfTFnKjmJKaHGnA7gKDTVGJwzHWRD3msyYhXEfskXxbk9C4cJeSQbQhzR6",
  "key25": "2RhqdKy3Q4bwu3ww8rNk36fgTh2hwByGMfqoYqjqUmsYdVhwsMq2HFMQq7DS5tMGcR3kVV4p99BaQtFjKqGELDzB",
  "key26": "492BuPt9BExAgYGz9fngToX7B5Pbvpy3vQUL7tDV8quVtRW7StjVUr3CvS6fw33XCz1m1hwhGx3Q8oEdSdmhqC5H",
  "key27": "2LVUjBCSZehfuKxKpXYtye6e4HrfeMBY8SSXeeknMbrPZwv7Gd7NSbxbXsAyvVdoAEJRpwHY8vdJEzaxDH4oXPEK",
  "key28": "5V76sW86yuhN2mFzidBdbCb8iZauuf6hYNroaMe93SRVoV8rhWZMdYbi99kX29UhirekFfwxXPLAYimRmyC24gcB",
  "key29": "4bgzgvtXXzYNxQUCafaXPrhDZL8C6i1Uz5MmV8PLApHTMxSbc2YNQ4MeRmM4ofBHN3DcHqLoLvgD1LYSvPHHPjgZ"
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
