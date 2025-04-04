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
    "3AvwQ8ar3KhM5ynsWGyi55vFAE6L2n25kjj3HiFc54CQpkQArmFMXoJ1tB1CMeT5T2rBa7q2hUPGDUVR71RQUe3U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22X3HaXwo7f2T9qAZv57eeYWtpGSYF8Vyhf2y1Jj6prAbF88BfVtnJeL6jzP6VgAJGz3mCbF8ewwiekFkTsJpqmD",
  "key1": "5ET8FdwdCpSX7TTJTz8jC8rkEF5pvah18N5Xe5wpinbBnBqe9S7z4qLkeWi41bBdfRPfvTETeuvTjA56krKG8Ggz",
  "key2": "3rdWYnyyf8Ug8Ln5tYvBfSGSFbAswSzgJ9SMLXUssg82ujFwL1A2rHENyxynBRYgHTLAuByZQgrBnJELQeBiCqsW",
  "key3": "2ZLwxBdguDNuQ9Ux3bp6DXCMeVUpAoCKV1dV7uUBW1taepymKPPtFDYadRCCKZN8DC3fyaaXWAnXD8N8ep7JonTy",
  "key4": "2k9WuUBJPz9S6TmZqoGgJgy4fYXtHjfvo2zm4qec7JNwJJ4YS5Yk99c1pfWL6kFKH4W8Mmummcu3CHncGEFJSozX",
  "key5": "4U4pvydVkqBNuo7qqJZUeKn98szvBMAsydxvCLvvELyDADe19qgAk1iN55mRK688ZqP2oZovYRqxeYPn5RarxWU2",
  "key6": "4g37gJvnJTooTeioLFwhCY5SevxTupRYWbVZ7NuzJEkaMKnS8MgriCtGm625HdtueefXFS9rMws6fWYxXfWnKJaZ",
  "key7": "9HMt6wbUUYx7YvkbWiWXk7hT8FHBknka4SzMmk2aAmxHNTt33TYfJTS7ESiHC2RY1PthkjKsfS9gm2Gu8D6jmXW",
  "key8": "3VwPMFvRD2M1Agou5EVHscPBdXTQrmF5M9cb1Bp446GqBNsYFX3aoMDiDR6wabRfdFEsPrQQFkAsUM2EXPzPqrGT",
  "key9": "g8HneiKifbhjs2YQjDuNVR6wPQWtD2NnKhUDHgYbw8WT3Q94QB8UXfkvjsHFNQhLfXtdfF34f3uMn6VfMakawCC",
  "key10": "2suKyesLHhoqSgiJ7x5hq21nUKj3ymGnqisTqfDphGGtaTx71uSHqkrWRfCWvTiMAEhqBNS1Mq1E6z7kJ5th49vt",
  "key11": "BMQ2RppMusNTWoVkSHvkjRLsoNpbUR4bbmzRXxtAeoHNZuoCRQZCcgvNB58XmcahCsNrKZzeN8SfUvoD9FiGHLf",
  "key12": "nYNxKjXjzNwwDJtH4e38DJyxhSmsKhWe9zZyXWfVmRRmKEzXZbhp1AqyhsSMceMW87wchh12zLvSKD8G4meQPwc",
  "key13": "a7qp44riF41TmKJD5qs1rUEKdzv2kLvYbZkVZbbSD2FBXMce21MhTys5Du9uJonSgaFw12hmWMwUqmgqhEzVvM7",
  "key14": "4AmocEmwpzUPfZMjh8zC5n2RxWLfG8Fr16G2dpzqDwDrwJkXMghF7nWHnjfryZBmuv9vPNtjp8BsisKhNAgfPQS6",
  "key15": "5XMFuSq91Ye1m2MhWEPu2jv2xjwmfHY4Ws4CbtR86CYFK4DJWepHtnMQmcQXSQCLK34eiG1b8wGN4QczZV4gMxLq",
  "key16": "65KcpYv6TL89iVLZNNbuhUec8SaKgEe2VwfVbFsZju2S1wZM6hadW4obg8QWVjJhUX6FkzzDSBfxqLtb5oZZs98P",
  "key17": "65Y3GcKXGApeGzwMLs443Hm1uheiPUibodLe3EkjEcZZChSqnbkshQdoDrVhXQjKjkfQHk8Cc4bDyFWek49q63bh",
  "key18": "2tVsb9B1ryTD5EaRvbV3ui7n9ywEPBmW7hVCMA9qNkG8M9n3CM8qAWhQ4G6qbkNcznqS7bSMgYPhW4oZoJdzPSQx",
  "key19": "3j6EULSZqvAsiXxyM9i6iKJJc2UVGFnDBw3FDYdHTXuZTK3gu8kW9DK3fY1PzbwwsYXvpVigoXcGDUcQZuX77JtN",
  "key20": "5FnHcffyRjUvrV32A18KLkXTcGXh3Tqse4SgxJrBCrfTVwHhGEVQBqbCsvSXpQn4efrtC2FGPXLHNDt5iTfw6rin",
  "key21": "tKMB63chTakAkCuD943Rj6VTpsLrdz5p2RdwU8wHFU7LqmTV2RfpNb2wJoA8UJtdCBXjQpbpbuMbzVfCfWexazB",
  "key22": "ZpaUbA7fQFiFTLw2jWgvFcPC7Kg27RAYPRjgzSPKLDDvUH9iYPooqhKrxWW4cUcZMpk8Lk27zjbDPpfrcdwpF2h",
  "key23": "67MMj9zsDXBhcn6bd6QUnkg6oWQE6EGc2NmhfeaXQH29SuFjxPMFM7p9i6uj4nfqSA772Dw1SRXx5jgjDTjVv35H",
  "key24": "5oW336We82Sc4poqPT8sad84Kn3aKZk11J2myNa1LTd7iyY4QFRyT3uN5WcqeRfMGQ6g9bCBkYFPFyJGutfEArd1",
  "key25": "4SeyvHhspAGUiJrDDZZdVkddLm9QK7UnY4a6jU6pKvwbPA4HG1nVcYa7WjGzQnWfvk6R1pHpKFcKzJuubPAWpXpM",
  "key26": "3FAiRDzFSY99vSVd1rnua2va3bxYeZg9hJRn7Uv8RqF5uteVtaZamBETLKs7KTz92RQx49KPi49BnFBqiotnAn2X",
  "key27": "5es4TEVJwk9aRq1fsdj6T8GGodHG4p73299UAJSRWVgThFRgVQdFzdNAfCn5tVSta57voXqVY7rJfx888p3LAVMf",
  "key28": "5VL3As3x3raEDUW6LMBVDcMKpy5qogQii2vebBqqb4tB6ogfTkUp9bLP2qfJ4pDSmUNTUP4NgKdXDNvWUa5i8bsa",
  "key29": "tCBtuDaB4rLMVVCSyfdqNAJ6xy53kuH2BAsQPKe9YWhY823Z4kQnJkKWwAQPm94RbKWkFX1Udgijvy9e6ah7r53",
  "key30": "v9frD93S2gRjaoVpbF7b2snVe746CiX694uxRkzgjVNJDcD2e7PEhTjdGh6nxXE957qZs5YDknm9ttRrdzn7fva",
  "key31": "2f28sKdjX2zVcjLcyZ4ZGzzfE6hiLSEEn9Lr3PFTiuFV7kBtnhh7Ju2WXgT6JHWcXokN9mKrQtTYXBTemXAk5eYj",
  "key32": "FBXuRtjoVboyK6t1bXjUS7pdSyWhG5YFHsXPV5fuk9W5UdTnynYotsVTHWCpCE7jPV1pMdobY2DBMhpmNeyQskK",
  "key33": "xdtinuHkUmrwBeVpZgqv9iggFY7DEpRmieumfFkV7jk7LNukXqaAbxJjCfQeERzwiSbDbzgToAF279Gc7FDzMCu",
  "key34": "5ZWr6exhBetKr4Xs3X3QF8jknsnYomGjhT5YfKqg1TePBDA3PwN6kBzyc6GPXF8GuCzsg8WDkj8YkXb1GFzZWAPP",
  "key35": "41wCRKfHx94V7PUs76gayNp877JvyNKCpe9iAk7NMrKoHo7AxaWg5uNJs172yoSeBd6QMwEAidWh5fXBapRMTQVP",
  "key36": "122qc2pbEfPYyF1nYMpsqKMADFYuz7yHG8wHRaKbLHf9mWCkvyn521xri1823ZKFMWZBpoKsbxBMCc1Bo3Q6CQck",
  "key37": "2H1uwAnwTq32PfXGxYqftfUJHQkjcKFEGbyvWYe5tSypU2VHvZSXwvJHXUp4fAsDeF3ZjLZHt5FSrgXwfjhjTyNa",
  "key38": "47LRPqdN8pzVhq1Hoq8muuLRpkKEshBWFzifXKRU1Q1s8VwwWUSYRhPefcJ8p9NVvxNVb4ANG8keffVBCvAKYvK8"
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
