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
    "4SyifAtY3bMCXPzSXDrDidHTnyXQr89iGdVWyszAzrufv5ZCRo861SbwPSbRMiPqcLgFiWaSvxdRNVKGNHeKy9Qg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ocuj359PkYpnsAkWBJcAxf3AjzjzTRAm4MPh4V9QKWZVv7ynVegTYasSfB3efys9KBZ73uQGSVqTw5h4pawhVcF",
  "key1": "5wxpuSU6ynweM8DSGahT8yDUcvC8RP6yKxNN8Ziw2JXDkxvZbvZMYnCoWUS91ZuZsPEp9cjrCsHAcLLzd8VxE3gt",
  "key2": "5Dd2j4PvkH6H72PEEjfrM6grZ7Ti1124jdFQmZdnqToRQujmdo6SmhKmREV1nfLdnqguLTgRzFKdT7gg3bDz4niS",
  "key3": "4PXH721aAFbwVrXoJ3Afon2yoZs2nTtWjfL5qRoWqwypmJQtnXMNNyUcX7pM1zvhJtBEKCx78rg58f1WYYhhhXMB",
  "key4": "5vKv9Tq9T1By1NcSmpR1nf9zSibsydrBZrsHuixW9mr5qDuf2N7qA2EpfkFHehQQUAhXfB5dp5PQLwDhLVoKAsht",
  "key5": "2CNzS88utcyZWsTmgucYtvSaKaMHahHnwXS5MZPbZKVMayzsQyS1ye69mFFXdWW47XXaT5c7VQQtrcdjeEnqJQ3t",
  "key6": "V4hLJPQ9h7Xq3FmM4K5iEeAS2EMLgVFhwhBMKPBUmarQPxPp1AhbvzDLeEnJQFh687HPPNwb6HmDWpZiNdBdWJL",
  "key7": "4dUqP7r9NHo9cDP3ARJxU5HDBkvJjicDzsbqWD4aQ3teTgFYPejcXWiGrDkHPm7bmNWydxzxY8696n5e4wLux851",
  "key8": "2LrhLNUqr5FugVE5drgBJwTz8BKJ8XqR48uYdTHrw1Yv6RemQA6vUkLAsmwJuU5fW9gxKKttKx3hzGVC6ezNSvZW",
  "key9": "3ckZpX3tUyMnbQZVxNLR7EsDkbZbgSPERsG7nC9yDqEkwsKbDkMiajwzhFeHJHoVf5SyNAjJ2bxFGozQ77wpZi6L",
  "key10": "3F71tQLt5CyXKhYi6iUmhWtnNwuDMAWu9eJovGfmTPatFxmhkX922zKaWzVMEprapa6UX78oaKEUu8SbFma15xYo",
  "key11": "2pLM8HHibe4Gfa2xPihM6xqx9vyyMgDicGoRK6ZWnJ8je1S5m4vk6XSLWxpTTMzQAqPwzB3vH3kjNSbKJ8xFp9QF",
  "key12": "42YhQZ2eD5cWRzpvpjNmRiCcneWgnqaT9AnhdSPXypcErMU7WcqStzrbeH19xvxFPjah4WmnZzKuLsNpr5HWzFQY",
  "key13": "66uGJv1CHzVQC5BgdTDNtNbioxy6minJ72ukxNeiwJRgbKqPYvzRVUGwUaRUFXq12ER8UwSHBkCrubPLET73ubUg",
  "key14": "4UxJ2YW4ebskxKM72Rga5ANJYH7RF3UbLkCCH9YMbvw1MC58Rave6m9dXRaMec6sWNdt76UnbCdeGDPsLeH7A4fX",
  "key15": "3G5W5db88ED3d8GurmuvrHdb8zG6eeLYXjatoog471zgaSm589tYNJBGUirtrPgwpQnCFYYEJ5cnBDhAZezKyF6p",
  "key16": "28scJuV6tqmAATpxc7uXZH7LbtYjCriDATZZ4Xuu6qeH4Xq1WdcGJBCKE2fLoVTstEipZdm5jDZBMHN2D42yDNhY",
  "key17": "4PjmLTuUCUMpunpaQqqXFJFCR1Ee3eknGmZTx1d9BndcpTvvmJBFu69BqCDg5AwFcTb6wsMu5wSoXmMBhLpQj7dQ",
  "key18": "4d7ZfUWEaWeB4V2s2aZ2daPDfst8AhDfgyZcVGtgiGJWLeqF5mbrfw44xFKkuKqsBQPCmHv4KT2gWvxPMh8DvVbL",
  "key19": "51NFNzKGnyQhpt1HjrotjgQJ8e93B6eB5K8KWrZE9UhRjvNk32bTRo3htqknwwZMpyZeg89M4vWJg8F4xf47Csr6",
  "key20": "3vAuTyS5zEo1FpFHVBUETksUBd8DiyZFtU4nNUNtfAauK1K5feZy11x9G1FkDotNpWiouyuYtqXBxYww7g4qV6tj",
  "key21": "pHczhEv1XUmFvqpJKJd4FxMyinKoErH5yCK4vjekFUdHRuF3vsoy61zhRH3PT5unEcJgUtGtatU2u5WximwYfsF",
  "key22": "62c1ySq376zLcFXYoMSs79rcaTpxx48J3TmXoCxgn5NEcS73T3skaAdh29CtZhVM3EDWgwXHYtX5DSzddhZnQw2C",
  "key23": "xPaeN6hJaj6zSBXiZ2t1Va5D8BDt3spXJrAVhri2ZCmD8yXzx5qudhFknt5BsfE5YJ5D5CJQi9VbQFeFmQTVo2w",
  "key24": "4bzqKTViFHRDUngJgnrLmBuJC3FW9K79NZRqJTFfstw73yEVSdnyqpgnw8UbxsUwsHVCLYcxuW878B76KHETEQ3p",
  "key25": "2o1iusp2jGUEyoyJa7tX1YVwtBcUZMX11TgxfzuQ2feAetAWnMz2mkLcHjz8GJFuFJLFWYMtFeo1dUNZ9pYottLL",
  "key26": "31ZkwTG5SyT5yQRwbBMauaeEnGtwi2GMZxPZ5NQzdZosordDnx47abj1j1o2cKYXBAwAEaduwmatKC9DcSHjKwtp",
  "key27": "n7mPB9ZfrGsXn29aKVatNDHQuLstwhCHE6cqnHawfxZxic1cwQQkXw1YpSBY2xEJoXCDKH19k5untaLhEePUeYr",
  "key28": "4kR28ycTSJ6XRy2ZEgbsR6oBvvuDNiA7MdBMYsEMTQW8pfBrgQNruVsPCxppKQrp98sgZDa6HUijVwfwJy1UZJBi",
  "key29": "3hHVEX8cuANZy3yppACmL5Tqu44NVhFojx3fLxaDk712FHVwdouPkAHVzEbUbkB2KNPEhGmepeYTrviTgvCQQMRF",
  "key30": "2DhCdaMAd2Qrxtpt4FuTkteRoebnE8nowELarVLAkU8egHmxpMmQD3eHEps43uqbPjbK28YpjXbvMaXozTNBiu64"
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
