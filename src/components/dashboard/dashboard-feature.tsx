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
    "3Ff9FTeMq4xNZ36Z6PdzpqK1YkKyZMfiDU6HTCvXzt2SipqDPnuHAUckK2suhxujtLdrgskv1DUu9xdPjpdBFuU6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59Gw3Txe6H1SFyr3Rab1MMPWbbmZQiho1zUSRpUspburnkH2fF7tdfj9oZjk7og9tr3BZFGipnYchXXLxBaDoTtj",
  "key1": "22Z6dxmDLx55HWvm2emYF4yHbP6sBjP3Xig4Swp1mTNPbmZctWVYAsDqp2G3aVneVhmc3ktbiUVyXUNifjVQTXJQ",
  "key2": "2BT6hCAdYKH7GHF7n2EHGQ4CR9PRZcfYS1YcVoPFvX2ANgueW53nUFi9HtpQVdvV6mgrmiBmFmHwTsBAcu2HCLVe",
  "key3": "2RihYXxJncfhjqET79zwBFyQQZSzs8AMbWkTBPMoH3GiAWdh38oD4SCVH5rymSe3F1MZHt4ESH69hiULgS3P54ay",
  "key4": "5xe1MaKv7RMhgAHvHiJ98kbff2dV9GMaQHjfro8CqwYTTLcXFwLyK3GB3GLeiYBXiVm9TszVoKVpBdyL31vfvJdD",
  "key5": "64YniugU4YkJY1e2Gqa2BPiQGQqCkE1v1msqiGkh27Kb7PEngNgCGG87LUcubJ9aB24EHpo2NZm84ztEr5u1Pbjx",
  "key6": "5KMHf6gqGoLe1ois2DsetnQ3FtgrmueTYG7U2mFCvcXZCuHghUNETXeLE24u7xWspauT6TkF3eZcZbg2ggG886i",
  "key7": "4WY2dxosNnYFNezoeTZyFUmmt22NYBXb17n4MudfMsmE3Cr8jpKzsG7LSxqXLBMmy8KortzZdHJPk8cPHGcJXuAz",
  "key8": "2QRk5FJiW8eYSUZ3qBvRxnG7rttcK8dxQehoifzDYnecSCnV9dgGm4vvnoCtaGKcZLhj8g2xfiXxJPyuzrqJm9yz",
  "key9": "49wSShDNq9qSe6bVJsZZ8bAYeRQU65juz5UaP8N5SKajnMt79Hs67EQ9RSsbD7z422zviuidtKgSptCU7vhrbLZg",
  "key10": "FHTAPoVZVZe1zgpyb2B4t9RcjaNyzCJWQek9YUq77NaCwsekBPrEpMQTtb9KqdhRqZFv2R6Ghc9DV3XPfY1k4ii",
  "key11": "2ZGDTcX77rDaSC1a2cR1SS3x6F94MbjsZyMTrWgnhfMCwfw1gVqXb7zLXuetSdju1DRQWn1bwca4MHjMw3Gs55os",
  "key12": "2cDzPTJyUtobPAseRNGjxFXUk9WWmENyRGUoTxVy7ohBhE4YpUMQuAwESqoLcofkNS5j2tXZeSQ3YezbDVu9dZRQ",
  "key13": "2edhjr5pwq7PMtKtRkhVjE1vLK91ZqYezSHaspJKRf4hQ4Nb2LpK4kHAPXdXoQduA7gt3KymgYP74t9t9s5fmFhW",
  "key14": "3eCcwSHDUL1YowKPr6LvVcAkxVaFikba4KkDKZT9EkPaWXvx2pKXhueg7wMfNQyBB8jqxA3Gvdd5djVpjVj8PRgd",
  "key15": "24YVwNZtKf6SsBH5jPXB5NLpJ9PxgbHAhsBjXgtoWpL6yw84MGg2uMxxLtXPDyMjJVdMKxnRKJbiqCANad7i49vB",
  "key16": "4tue31GiwD1ZDLtKnysVE9owSHWm9ot4BjWLv7ektNzJF4LkmQYNq7FJsWxbVNztGw54iDfk6AKhYWJyKQK8Pfxy",
  "key17": "43ptEWAXAXcqWryRH63Rqu1dVi4o6iRKELf1XQ38FmW5tAepUbpJMGYZ9z4fftMvNxLKSSmTabTGFAgiMZ8vtqJN",
  "key18": "A6hFzg9VS1r6CsKk5HxH3AX13u8S3eWbEwFonYd11dVujP9bbPzcnL9xEKLy9zPZNFLvvpnVpzoPGZdH9RvHpGv",
  "key19": "Hm22CYBRdq4r5Nk8JUGRkpmQ4W7YBWz4PVPUDjKzA7HpE9G6RLaYN1T2CQ66bS3uYES7ZRVtboGwSKiN2PtsWw5",
  "key20": "4KSA7HuPssfn55cCKz4zkabafykwYuGHWnc1R5GFkuACySMQnpLAEe8KJ8TBh3xU76LHzdW7Psg49xZk7a3PFXGR",
  "key21": "25gMDWkJBjKPNzJMNkDyWdbRam1Ly5PgzsHb3YjBwAmnCf4XQYXoGesXK4axM1Q87NyCTsrDgib7fMBaov1QD6xY",
  "key22": "2RKZzM8boWCUXp56GpjTxqkiBLV1qxKy1V2vvcveihe1XHQ6RMDuu9fHewwnE98yGSE4UqoPQUG3hDJiw6jPUfQX",
  "key23": "53WAWcfUVF8wGmp13dAshyVeGkELKgh5LTdDJNB2yUpe4gyjBX5ffeUuhF7KAWK3LdwbyjWEYJXs9Q1nV35JNzha",
  "key24": "5YaQgzXmcm4uafDeP8ANAJ4DThNuZSUbc9ViEZy9gbuv7zpmQomdBsbtfiQcHdCJXBUpCnAHDpXzzQW4wgDLd6HT",
  "key25": "23pyu9kUjQGxsdU8xcFhTt2EH2Pfiu8Ymzn3wcCLTJ3A3CzQsKXEeWP4jfXGGqX2f4wy5oWPv3gXeZ6FAbNjmAt7",
  "key26": "2Ez7YLrCmAX4QvfU3Ho8sm5zipQbdjTo9osJZYhkA8gPFypbTarMUoBcrSLTrHEfHEsq3eDGVL8M5Zmd85K1cxMn",
  "key27": "2EadUar8wo6YEybaUUwAS2XRb2hTzWPuPrEgqnkVLV4eRHCWF5CDwu9qLxVJwuzxFt79XBXTHnpCy6uKsr6qL6SY",
  "key28": "3WimsYcKtMy6MKdPSGK33ssNRv9DiApHtfHDvYakRhbfjja7rJVnT1kBjbTjMVEnMk3s79qqUTMMjwgDTJM9krkn"
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
