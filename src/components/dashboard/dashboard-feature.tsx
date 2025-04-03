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
    "dhpB9U9td78aZ7SRkUQHdHCERKwR5XY66fv5vbu2FXQZ8aGNC45MJrHF8qpRtCeHXDZQZSZNuGCjgxbmQxPvhez"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21yFDiw6CYJeX3htVywefsmHQ2AkCx1hbHxBsfMSeDJzibx26Kqt1topgERamzfndNXcPpwFYTmnEXpzneQ8fZww",
  "key1": "4XQMBkx2rCmNFNocC9PsNWu134mE8PNGLRynCTh9cN8DqGCGe8hjUPdS4Lm15LdafW5UEmpVeXbZVCeaBFpZYU6h",
  "key2": "4yKhka1TXH7rTr6FZ32U5LUzorx3BcgDCz5LFtYYyjFBrog7hPgPx9ivikKbYsdUn7u9c6No4QmPfgDBEm7crYYu",
  "key3": "TTHWHnCijniESyw6yN4zdAY7AxJz3sJuQgbjRPf2obuGBsrm1dVrWpZ8jnYiJXj31Le48i1zhawPvdG73a7AD6x",
  "key4": "2KdaGJn4sEnj8ybAA4uftz7bqrJkGHn2qEWDwwHTUrKRWwVpp3XTQsCkuxVvRoP56DkKNtjF7rXHApFeGLGRyTVE",
  "key5": "3YpWsujLNEkx138c2YnkLdwGtBvau36FqgVUvRNSrML3B9KFNxKAsN5wznCq6Afuy1L4nT5bXSG6DcAcjY7tFw1h",
  "key6": "3fFEFiWiTN7uL15Hp24LBQuh5JK2aPvydCT5J2cCSmDDtFGZ4a4q1YnopjDCyFv8WNv6sRxoGoDdLiTL4Lmd6Vq9",
  "key7": "ZPGaJZwV5Twvne1BF5JqGNrcVxyqP38s94a2sqa2LnL7zsBcj4NDmoeJDYkTPV8UDKraR9Z1dDzxd7VE35g6sGV",
  "key8": "5HFBT21YgHXvDAMFHbAbCJAxpXrSd55GFXd99C3vxUvvq5CAioQi4jV5MhTDJhGKCyGk5CHzTJSP4jUMfMBWUBda",
  "key9": "4HJzxRRbPsGpoF9qV8DQKA5cEtKRWnsBYyA4fWY8CVemi9CbA3Tdmw5AkAfhMDfoptW7zGrSChUDbcCwsUoHsviV",
  "key10": "3nBjXaTubmDihc9BRz4w9iunjq8Rw5w768CQMALA9PPZg1kEHvCXKHGNRsKvmrz6TvYHDHJuYvXXKQF4FK6QijRS",
  "key11": "2Jv13dQHfE7bQtQixbbAbK29p9TfXRG4WRBiVnwdD5AZkAPf7dzTx26R1MiyFXzYMPbS9VoQ6DstDDbzddoNkZsM",
  "key12": "2Ratc5zeobYN45ENvAEBHTTcPxaxJ99EVmYXP1JpJzMY8RXuhdVfzjt44saoQ7BCQJmGMApSKQvpPPQgskELQfjv",
  "key13": "36d92seRo3JYLPVx8RY62J5UUt5H13KLvUzRiCc2ZrqMsNdoZ6ttAJLDgqyS1EUxworbwiWAo5Xz2SDo5x1QLesP",
  "key14": "2i5Zj469qatbC8bp4G8nyvYa9oaHYgwEjSsKkKSwFekxubNUYAFKry62WvdpkXvBezG1JagtyUu3G2iV3EUtvZyk",
  "key15": "279LhCQJp5L29Tn6hBkkeWVjPNM4WFUycdfJ7b5dHUeHWdYyF8JKw3zdL3SfDD14DUStC1dUz6qnuSSNnWw3XB2Y",
  "key16": "4ZZJfDJ4N1QZTKorbzLJ2uf2PYBfwHbKmGDNj89P9CWdRGbTdj54PUc8z9fZeP5VAbEr252TnWhYkLPwnjN5gTdU",
  "key17": "5qSyB6CcCtxxaUxeRZ1Ndqv35cpRGdEesVgtz6rrAMRBVdZpookW66B4cc1CuGtduRG5btrDjP25sDc84qVYu81P",
  "key18": "3KArsSejF2Yg7FD6v7XPfdFSNBAjtyG17h1ic3zdGJwWjcSRsTndNSN61RqZ3ENSJJERNJmMY3yb7qcfHXE9yNHs",
  "key19": "3PpTC3HQ8GkYYmyfFUxFi5NoVY2wFMZQE8vdTVYLDJqtNtvziTFxTGap5sbi8h9ZwtgEWnKnByep3YwrbQtFLoaK",
  "key20": "5u74t7gHGE4H1G7hECWmV8Zz3JpqG6MbfS2T28yQsyzKe4Ny4kCwkq5fouRGg6bHMZR86PbTMfYXtbpWcq2HDc46",
  "key21": "54UCZWzuNgVsLmcnxsmJCJP2DkoaFTvzpxq2trhyDnw5zE4FERoUcoYbRXiUSqQ63oVLb6ekgsbgxZVpr7EQ7VCQ",
  "key22": "2A2JSAYECGyVKc7szT4NTe9i6F3FKpefav9gg4YcEtWbt4iH4x45Mu9thcTKnfpnaKRrDM5AhHL9eRjjJqVt96Gu",
  "key23": "3KcCcUQi3JZWE3zxKePKcGYvQmEs9wy7ztSsi7F1XrqGmAVPCe6wEA3HzjVBGQiNuDUPfmcGujiH5Vit7ju7o2v8",
  "key24": "23dG47cA9VXxugzAWNWUEsvchu2mnMpWDPxCnuTKjw2g6CLDtx3REG789wuQimMw1EDN39SGCmGNB9S9NDXfT6eg",
  "key25": "3E98Tb1rD1ELAX2MvRFe1Gr5iE6oESZfV7mVkdP7aRtwf7V99A4fUgXoHxamckP96M9uGfYL3LRE6K3HBgBDP17r",
  "key26": "3bUvtJK3GYfkKwJUd2xEeuGNJaLfgrQGPMTouKRFa2qSbzUuLfgcrR4ajwdN54SWq5DGSWz8rWRSb6bztb2CPzvq",
  "key27": "3xRYCHTU7Y8NvmDHE2uu7KBVuqwNGipsXWXxzD1AeXjcmEmNuyH8XyAMssDoZSmujE1jVcNXzuePE694ERiXBY1g",
  "key28": "2Sqqip5hgLh2cmFQ2kruiGmjxSpwsXmWpxSVwTtQCePMvePLcd1hdjZgxzinobx2B5kfWdZqUJBLUhRds4YCCXrD",
  "key29": "5nS2rudEDFcWRuFwPgs6zk8P3tvF14jJCec1dBSmynRGWa1XLYt9z8RNzXoChrGkTEXF4o6zjpTtzHtqxPaxENP9",
  "key30": "3oRam1Pe5PDgLTyvyDxzp9XcoFuqpXJf3yjBbAH4qd94hhqHBXnReMfM1P9sVLcW2iy6hHi9h7JXR3H3himox5ph",
  "key31": "4fBfJZC5UNCc2iL3F6QDTDcqA3UKsggbrRVG9s6o7qr1gXXw7gc8rrLbztZZFxphQtHrCVKQD96mj7v2LTgMUMKc",
  "key32": "4QCCBjZ7zd8MzWrzp7DqvmbQyQAUJ4aU6nwYpf3WrVHifuh2d4btBom8tUvEAN3QPAmBtsEEaG1e7HnSr6dnjXQH",
  "key33": "2HTd8rDkZJKfZwFSCA73E4X278352jiBVtukX482RLpNLCJi6xeXnihQtVFcYss3YqXJgZPP6ykEwoDrjTRNzhgt",
  "key34": "4Wp3aYdSn1m2PngMknr4bVKwXiKh4ivYHWGsesahzjKBdW5WHru8fXLt4Z69GtNwbL4B4YC59gANjusjDFRGJMTV",
  "key35": "2fXN69tPBDdFfSAvfZzosL4B2GBKZDWB8W5Z7LXaM9iKeskrQrZdYQcXgQGrqZ5uYPWfJ9Me1LmDoMuyabyfB8qH",
  "key36": "HMR78muiyfE5SxibHfudeek5er5i2mrcMGE25iTczToU81B9mHbzE6sCsBa9U1v4mmfYyBzAtDNdyRVvSxvqWVn",
  "key37": "37CJbCUd2jNeHxQD1BxXv6QemboxwnSkcssoS3sp13zyTzSPqdqhcCzn8V9BKnqT7tEQhxMXZcUui6g9Fp1hJcdY",
  "key38": "4uXt5qx14Yo3uA9KKZvMVJHyocR5rym21Qru9d4beewPt9npdArx9M1jPNDF1BTQq75oE87Tc7aFCsffgns9F5S7",
  "key39": "2sU3tWA8V9w7taPmZ8thpzGvTV7zCSnUFwHpJ8dHRxegsi3xiHVACZvk9DEifgz4a22fGQiWepFQtBNrXtf8buk6",
  "key40": "4PDHmBsNt3hHmTyxEhvtN11p3hm3esnofhfJW1S7Pe6xLqJpJvouV4jhmfoMbJPfmmemmjkw6dNh5vTm15Zotu2g",
  "key41": "4At1HgaNiwekynsSq1R3eoChm9rQTo2iqsUupRqcGsg71hpg2ZJZQ3fFXmTqM4gGZqTw5K8fqv2BLNmd6xKL8FGg",
  "key42": "55k1eQXTqrGQmktXuuUBDNdbCuzwjxfKKGkaVwGK519hN98iKrvhVQ29HaGmHxsCGFZVavDbdeSX5TCUvV8s9hM3",
  "key43": "21RnMGrXkz3k1ucFY39fhZUHD14x9MuChyjTMfjDMR3P2v32tVyg4TJnV2BXYWMDNknkjXkmLU8gN73dRtetYsn3"
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
