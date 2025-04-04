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
    "4CyfGC51FPCtomgLDVNWCJ898y9jzBMuxJ3y815KbyL8H7r9cvz6BywiyDjT4xWYBkwpbhkSVcLPhLRZq2MDKKxR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DeniBwyKDasV4tUarRsBFEZF2TAWDA4bNNLSKsw3eE3MJHo9UBYPPPwUZLWaFgQcHY7HzPKGWmJagEywCfNh98B",
  "key1": "4wrH4Nm5L2npe7JVzNxaohw6fH3j2QRLYAFayuRUzk1TiqYMRxE7BGb516hifoBcWAKTQw8EN4K2wCWf1Nn6WxM8",
  "key2": "2GFJK2gBZmeSWFHQ4LY2sMmRPvLtmVSxqTnUnpzJCWEvFPJuHxViBqFxSBuDZqxiPhy5wB5nNhkzbF2ktnd55Uyy",
  "key3": "KWkD1AqgZhdwziyiVKWW6TaeeYNbYeEKZgKknc8vTfacDBnj3YBDnvKZo8gLc3XF4macigS2akVWBDuq7MSZkTh",
  "key4": "3PC2exyXeVrGGvdze7Tz9NMCuD9LxgDS3oKiMr1oarAyuMsvCMeEuBD8Y3tvs3HJrVTJhsqdn5sUzPrjSdesoJjA",
  "key5": "5osTmSeafF4gaqKz8bfULpJ8FRNbpCLZF6h2YFFQXN6DvmqdHW4gByxxKjhLrE1DgBo2Fg1YrS3744CAs3FYjWnR",
  "key6": "3N6G2xQVaWybpcoYT9w1Px1NEgZnR4SngsEueVZRxGhZn1eSx5mw7VRobkdMQU2duyWJ8DLj6ypa2tWeNCJJ63Zy",
  "key7": "47RiMWQFAtg3fEQxuHLAPvsQd15VmLfbD4xCW1xmdu5ePAxfiyS3qmxdKcWtrwbrpVCFrD7dsGxRvJ1WfA1ggmEr",
  "key8": "4LnhBJn2q4doRgkkAUNV6AdKFRr9qCnXxvkZNyubHCcoEBaW1dYzsMNHRLUAW59Cgk983n6qUdP3eiik76hSDerm",
  "key9": "64oGnrcJfxAFKcSWMkjSjyZz5RHhBLhqX2G4HLuUSmkcztGfj2VbfN5Ep38te29pfyzX2R5pVvxYTuTu4e5g4Urg",
  "key10": "5dDXqJMxGRd9ygehrNnnaxCvAbkKwLxmRcQpSwho98FxiCGB9jzBr4RHzmRhqwhDB27XWuWXvVpWDJosPVeY8Vh8",
  "key11": "31KawrcXiJPZSiUHpvkt88X9jJ72QMkDSC1MH41Xsv473MBNDdMqmGsbpLTkoeauRnQbDjzCdb7mwH1Bg5VBKSBh",
  "key12": "4Bt5QMGm3DCEZgEseWmDvVRYuTbUaNPCbggUTHvame9cWnbrEhkzRxCWvNgjwZeqEwUdvbyMt38At8kLCaPvSyaE",
  "key13": "5mLuWXWMXWBEhSPTfVFECpGPHwQCYHdvKqaWUSjYUvLrakxDDgCSRFEebU4YMjUTCJa5ChWENsnv6wzRmUvS6rHp",
  "key14": "3gfrQcHmA7YYDwHREngD1mykmckPRg2K16DxZKfiBRrYySP6XVtGUdqF4BSL7HkKZstGYcUEi2PQDGC2HqHzZeRU",
  "key15": "41RWt7pv6GFvf6BCi5JoZPgWToCYnsAt2VMqcGXW9NPx19cfdpVyD6YRH64QxapAcibgfdJZjmAfPMGKeXwNHwYp",
  "key16": "67R1ktC5ZJhhv9fhndWZnJd9kofHsFmTWJVEYU8zm6B4JFc5EQqXbbm3sWEqHyRp7pTEWaspbXJrELEarN31aeXu",
  "key17": "ePYzvzNJbmELBC6iUBkwbeZE8kXWJW1gn7GJGKNpce26gaQfYnpqrVdcGS8vXVTUVZnbw2QGitqntcCSxqSUpyX",
  "key18": "L6yya2wA2nS1m5LzbKhYJzpCRPkSYtpEgjhMY1NdMYp8nGTVCTBnNRLHjkbk8Le4LyMkFQkqeSLGVtb66ZWUcXe",
  "key19": "2qBWYcs1Dnc39EfEeeXb9Rx5bUX3MCp7rwRcFKd45bmcJsfQHnNGzG9jP5pvYtBTdHzjCcHgzfhaKm6SfZhAE1Dw",
  "key20": "5pS224Hjq7rA3v7UpvPrheTAqxJsLt29SUXtDLHUm1UZmq7oFfmwNpAzxnoxhAR8VrngkPrSEtoYS3SFvSXRnFkY",
  "key21": "5vL8nfEzi6kCxK1Z1EzT36dhgiAxFrvwssiZh7WyvgFfv7wV5CMWkpfQfWUGVWX6ofJRqr26EhcuCVzgpd5AtTFK",
  "key22": "5aNB6XLBdPZBUFdqFsTjD97ueJEMSTSwqwwJXbxjrVXk982Tt9gtiLLN3kCtELuFjvCMPgMaoACd2AxqrUo1J7Sx",
  "key23": "5gZWfwptiqeStB8a4pR6YXuRwxPSjYLWSS2fjdHsjcV1WRA7pG5meRwxPggeMKH39qEUbHLjkN8Akk3ZXZf18Pti",
  "key24": "3eQNovXCEyDzu9Thih9wNV9gNbni2F2EbGNY55rRokqAwRT3QPFD4fkVqQAf7oJGxpmwbnexrrT7Qp4fQ8A6zbiQ",
  "key25": "2b9oyeJ9JUgJUVfJMkF41xaidjpAwRjRR2jo66QYexsyqKk1AkikZDcXMJUfD8EYZd2knb6QKYAyd9Mwp4uFP8Z5",
  "key26": "5CVp52328TGyQPjNzQWX8vumrJACp32n1EwU522AYBKrosxRjDpMmHC1VvoQggWDCBB2Gw1msN86g5VFCtsrnFNy",
  "key27": "5RpRwyCLyCfyQ1VtwSXUjLGiEQUr5jKwpGRPVW4A7KcatZXaefz3eCCZS2C4cLdESSpmXjCMVDz9CATXH9g8VjZM",
  "key28": "5aDbQAsE8xD8UuX2Gbw7VrPgrUgine5AgqSjEdFwRHHzHx72XdModvkBVsL2chdZVzGv7rdM6oeD4Zht5sRmTZuN",
  "key29": "3iHzfuP9wRQqcHrFYBtsZ2KSsk79V8GeVAozmG5GM8NqqiLX23XvWyVDLPCDCYpeZ2Ds8jKiEFUvtYkhKFUvXHYF",
  "key30": "5357KcR6riR6wEWCxvnFydcJJTXa1QpPsGPrAkgYpHTurewsbs5DpVu6z9PqTvHQpYhXtZzqqmH3fEJDMeBGmpq6",
  "key31": "4uVJ6cpGNSN2kqqwT97i178bLf2zntRudVthck4QdMduKeLwtk4PYLnZ38cRhvV1RjtYUexJdYbyCTEDK4WQF3f8",
  "key32": "5iXM7Ekbw3NhQawtRWy6HQa8DkCuYp6wdYpdNHLCKDjUbcKLL1NcdZKcr4qDgDoEbPwoEVtPNbNoC8x5U8G58crG",
  "key33": "kP4YGYCNriEo61zxUEwRERDb9D5kSzAKwdsy9XDL4j6eCJz6pHVeaTGbnuVRXEmZB6CX8njbdL1SRnZm55Z8CYi",
  "key34": "3GKQQbye3CU2usgMvWLtoNs2Mzb5b296p8mhfs2weQQqh5XQsM7fLKkL28aQUvANpwiyJf2eNhz8RDP4xjQq8BMp",
  "key35": "4UF7g7goYKHGnyR6F6MaHprAdjPhDRqv7UCJTxgc88Kr5666DMjciUi6udYsHetTFsktabNzvg9aZA6w7BQt2Jy4"
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
