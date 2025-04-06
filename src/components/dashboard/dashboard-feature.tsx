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
    "611jAKERUhLckqK9Qw53H7xP8fRNENWH5oyoPevys4b6zbthUuzntQvxR88NHzxdRtcMGGotRnqnLphoq94h2qSY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bDnxuD1wdSYc48TQ3u7QsJ8aprg5HzFZswuqAibBY45WC5zt3N28pgqWAc5EvA3FucMvMG8af9AoSfGkxb4UyU2",
  "key1": "3VN2tYunE1pWkuEevKFMEwfnag3Tu1aTCPFiDc1xH7FhRJPa7iqzVtAwqwXsyNQtjuK7oxXtj9CxXheNBdFfwSyA",
  "key2": "5e6ry5xoTLMTcEFEfPh7UKFAQ6uSqNrmwEk6r43fKKsLHEQo8ShvnZNBCA4vc27W3zG5mB1MydcLqxF5CnUKN9W8",
  "key3": "3QPR3UnkzvB2nt6RDfwdDvncMgjtoRghyuj9zHfS1qjp1hk2EZUcxuBty1BJCTUBt7jyaov3Tmfvshb2dHiocxwF",
  "key4": "66smFCddR7JTGHYCmFugU4yVfWwYViREGvM6VbnLcQc61ZWzeGpktsQGhVS1yxAqJicnJuSjDdMCn8hiob7RrquH",
  "key5": "4qcqhp1uZWH4qcCHq6sZt7BCPD36HfZvfEaaptLxWrGuFgpAfie8rvvLm37ovtmNb9CFNn8JDKynW1SrgMXeP3Wg",
  "key6": "4KpqPwiWK4QSJzT6ceeYgP6sppZGnpchBYMQ82fRMauen3AuaWfASJmbZLUKME5fYexZHR2xLrn2XfLeeA13jeoj",
  "key7": "51kFStF56sUb1JedUCLDxsdPecjiBC4XpNfowtYSLGjYs4pU4MCLVaUgUfoQbANH7Kjv8yQWLUtfX618WrkrAACW",
  "key8": "9etYoHCRk45LdiNCQmqjqj5PvgAM69iVsFMFGV5QC7wjc2Dh6ap1TFp3k5YK28B4gj5mieBRhNYPFqW7uXb8h5N",
  "key9": "3V377gWHX91KnX6eX4mG1EuTy2xABM9c2EoZvcv91CMdjkEXAgK5F1NDNFpgACmj6hWrXKanUzsZBZ5boPxSdCac",
  "key10": "2M2e2KJ9coXD6TUyk7sByiiU6TY7YuyBt7yLeSQBrDGQMAEK4sgQzyBzHDqViwGWHT4srG85FzsVPuMSbr28Sg4P",
  "key11": "4fGjLt7xoFD4beHswoQnn8uuyTBfZrFQdKPfkDKqwfVvaQS7Jgo337JNPi5VioFQU57KcUjJcFAgyjANooqHF91c",
  "key12": "4oij5VoaxiWDW5GZ3FMN8VotwohqRhTrSYViQa8DQsGwumM6ZNoJ8RTYqKWv2eciWpnfMfuR22hME9GezAMBEq8Y",
  "key13": "4uobZe9Z4YdxnWL5Db1odgdPMGGW1eq14fSymoXgUPUxQstCii7QortnpHWzGywqcobqNBwLwajHnTieM3Bc7w68",
  "key14": "4ZKhRCvWRrTgUwfCAb3P9tgN7zzJm7EN5H1RcVotV5WEXRFD5tGNtcF7c855snrTpvnYZuTQDSJzeVWCxdUBK342",
  "key15": "2frPWVZyi43aL8fAFUofHWoUj4p2dNzj6i9ypBvmu6u8HL9JaSHFALk9guaGhfnc38QL9oSv81J8Mzosbn2puEz",
  "key16": "3MP916V5nYqaMXoYdvMJTZ55f36LYD85HGzsA2LY1JpVqPmaW41hvqjCV6kp4eufq8qaMxnsPeYhPaRVjdKQZ8Yq",
  "key17": "3TnxqE7ybzq75gNi2CiPnz3bdib7it49reFRGCNx2otRqSibQJbi4D66WW5DECp5sT4N8z6qBy3EmpkCMUMuX2JE",
  "key18": "3WSonoqqatwuj1FEQkRNoGsUrTjns5FFQiy8jPa3XFCDppC2Fy6F4p46R8AAiXmXzC7dfdjU9kvW22Aro3QY37Gc",
  "key19": "5Hgs9Z5HpFgtkuKXCsqmftRc7MKoV7qABo69FvuCSDKqNbqJSaDmEk13MCpkQ27b9U4h11AtXMSxSnQWZtWi8pr2",
  "key20": "4PTcxFFmdPUr6uUJe714XgqVjpXcqTsB2qCVXBPdpvB7dA53kmTjrMMn4fXoQ7bZ7N3GouKrYzs5kFBeRL1oqUDN",
  "key21": "4K5q6oTaLxx2mJTro9q9FxCU2GwiJJFMPygSBRa7VTr4ibxuKfvxoNq9qZgfN65RNoFFKMhgkN9tRoRvLDumwkgX",
  "key22": "3vx4HFPNMpR9VAZn6vhpDvCUuxfcMkEjSJGBZD4XqJkPmLnXT7xEoSPnu8SX28foiJdbNeHHT4x6QNf9C2orcvkU",
  "key23": "vh46wzGKnH8CE3sMYZYYhzvJiJEo6MSHdpVdpTPcuwX3iFpkuVuWuQVPtYCFLxayYMgsVdM2qvsUY1DoQXiqvy9",
  "key24": "5zzuipQbWEsoyQgSvT5BxNSfssRF1awbMXmAG5FE7H4Y4x89TmtxeWTDW6xKMqxW9DS9awhwTFBkKyBrCZhYxe9c",
  "key25": "bdxokCp64YAG143wWHaV1noivNzJK17AVYCwTrqmFQ1q6bGLDGYKGjUPr5oS7WbAa3Qy6QU8NnYADzheGvwruzy",
  "key26": "5F47D6JneCevQrmcpiA7eCpkq8dDfPu8zogqsQbhfvTwBsb1gAh4EhcswaWRqgrHqFBGw1DZfZptZLVUAhrBcsh3",
  "key27": "T3uSBzuvE6ihB1WxVWt7HTYCW7ehhNMNFEcWiYGYGAXB1VxvmmtgKf4ftLmMj6KjkJVBfuh7APs5bSTnCV84dvM",
  "key28": "3hyjQ7nwdwbo2kZgoU5AkCLPTH6ZQuetSTJQUJvGzdDjV2wN2BXaPvv7vvZj94BN83934pc5mDtux8erEGQAC61a",
  "key29": "4F4BUcmUfqoew9772BHMaU5B1NTXnw3dcbKCsTrHmFQMsT7s3BFzSdvRMwM6X48BgNh169zwLZYhzQFQfyQrHtAs",
  "key30": "4cKJnyWWKzewn2Ec7imj1vRWTnZgCXTCZ42HKgSCZFWS5AcuVDbeknZme21M4skCQJMkpH3fCcZ7qm7b8ShEEEBP",
  "key31": "5mpvFjE8p7ErMUH2huFxvqo79Fcx6ymhGbe3KFYMHxgQfbQxJXRPKRkbGopqRx5wEZPyZ3eGPbKVjmTn3bs5jhq3",
  "key32": "3tJEGrjyFKdcswnf4Dk6nQbAnUBsu3yUwvz699j4E49zohww6GmmdtFG4zRtaywpE1cNVjMa6j2U38MBLABnuuxE",
  "key33": "2P7NmBuRpxA55RUSaTERUFdUfQxHw7Tg5AH6YaWrErn2kDpnM2AHXtfgueRT8a3QsQNx1GiGU3MWh8bdTn3YtyH3",
  "key34": "3ZMP65gVbvXR8mhctZYc2sUStNMsiPRwYYSubPweeGPvq5C8ghSRVJNJtt9iAAXKz74G55gvWw92Qaf3HJVCGUEZ",
  "key35": "3WXbgeM8Qr9hBTom8xspGkxQJM62cHPX9Dzas5w7RSWNXcqYaNu27o1sTbdEWQahWMsvNAEycMCyBPVJGcLH1LGM",
  "key36": "29buc3fz9r365t9Y1E1SmJX5pFaYwWjHkpHNStBJ2wDJjTvtbaL6P8P6PMydEjiT8kZvMcsWnyjLSTgdZ4kPmsLf",
  "key37": "2gAGa9RfBAwWMFFNzWzT25iHgTbBpp7hWvXmRGKkzQBbFcGh4BwmpYMvjmTnDymyRUaheqQtvLsCABczMydtVsg"
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
