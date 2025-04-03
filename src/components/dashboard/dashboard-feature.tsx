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
    "5rRWZuMkMmuWWiAcJzPWGbeSKyoa1CXNE1jpHSdovNovCyrGGZdYvNZ8n4KMX3dHaVkButH8VoxzGsaeJwKgj8sW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DgKzcXzEwKwTATBQUCq849oemDnWtiwnURyNZX16ciBwFNX3NySr6rpuhQXqTfHKW2YE1qbV1WUNJvgPLWy77wS",
  "key1": "5u74aF1uy9J2R9fgKA5TzEgRaWGvyxNxhhQQXiWG4iGzSpcS5b7pf351FpUo1Xt3ktPkQFrbAZpFg3XHurYD3nW4",
  "key2": "3FtgRbPFndmNagBNJ4w7vheJEmWV46AGnNCvzVeLGKLqo8YfmyJt763zPwdQJkfACVtzd38x4F9ivRyAcxRgTzTi",
  "key3": "4i4QfFCuEhZCDCkN8zWUkwcL9jN6uVZbQyhE1gZsXoJx2q6GYW8tkwNcWU1GoYGiTKAZQWwQ3yoJquvuLjDVeif2",
  "key4": "4QSK3akdyZwVsc3MTCMXnM8JpHKzpxKFcxuC7gJRYfigjJ83oH4rivLQnEG4sNcjFSP6PCM4D2B8dQf8SKm7765D",
  "key5": "4qX7RJcLNP1yhAJHFa12x3zpp1ycW6Dvba3Lw1omFRV65YnbznuxZxWfeJoYiywt6X5Ni2NtfHtNqMULftTUxqbD",
  "key6": "5QWHwBYr4o6yit6wc1U6KpTqA65ZqHxJepjx8dt3zZnQwtZXbGjWF3jhYA2zB6dahnKvZHKUw9JCdqoocZ37Edyv",
  "key7": "2aV5SX8HzTQnbeX8czUAEJHax6u6hkkvACZVFx4gYDnrsoycVsSH5DSsEzg2Wzk1BxxPZd2GXAYcKySj4u3XURmQ",
  "key8": "4grNus7JzypnCYMSBoXdtr7Mep1jbfGE4xNZfKaa7UMZFcA2sY6WaRCBX5Lej1Ch8Kt783vo4qDXzBRHuDUWmMzd",
  "key9": "4NuNJHVYjZ4Q6HJ4Lx1s2Jpyo6C3Rx51VWi4KbLm3ZJhRNVsNvVwVRBJmixoAwWUkLaH2WbPwbsspBGTyjKo1tcN",
  "key10": "5t7Y4qDsSFRNt1P4RHH96WZ8Sfo7TnLUsY4PCCy3ATb2kwLFGiNsjdSv1mct78hdPCjioK8bxiKAw28WLL3eHu3R",
  "key11": "2vaPvnH8sJjEYXN8i2djRmTzvHZstH3JfKc13ceFD2V9q6onB66oaKwxs8sjgnsETFB2FcxWp2qeef5AhuqqJgNG",
  "key12": "3PZx96NNhD9osBKT3mu7TKiCW4vjqXU9X9z11i7Vfbgfrsb9pS91j3uSRaR54sCd6dHFushteq6hrDygj8s7NfMY",
  "key13": "N2VzUP77aYKKuZcQmDwzzcnxjs7awWhTGYKwGJFhJcXW8dGJB3AF5zGumA6DMpMLuAHoXZjavx6x9bWAfFbzpTf",
  "key14": "5kUKDdSeQ6ZtZ9hp1wRyRW6sbBUcSDvoXbUfGsmfKCKgG1LpXhKottqsjmCFYahodod4GKD7upNUHLm2KtgpCQEL",
  "key15": "FACnS5bCKQFzWKJvYDbZPAC5pQZ7fNXsdnVeHHV3djXLrQsmbqDPuoLR6SCxBJ3uenvSuhs4pBhXNgij3w78FGY",
  "key16": "2spMCCN9DV1y13HhAWMkzVmFjvgWMxUqYMPKSyu7sFd5pv52ZX1gG9T64vfsYxzAssJh9CFuNNZFwD3HPtxww3m8",
  "key17": "44RKoHhmYe7orRzA7FarcLLPUsJ2EuTPDW8RVEkJuSQoLkpL1QqMhPs2pjFDbVN8DaeqpfEzKU5VEaEzHkjcAVU6",
  "key18": "4r3QZ9QthMRG6Sm9nNbkB3GvnBxNL6dcCuWzYeCQDvFQutWSrYfhCgmEQ6dERWAwbr7perQ861ksi72z8cDNrdxF",
  "key19": "Jn2nVASEuodfUM8aYFMEugDGrkguFUXzd8fzkikpzN8Q5LJ5hsvNCkFShHSqqE8JoSCX7m6Ky69UZPW1AnY9suF",
  "key20": "3Newr28o74ZYAfRpgNqXvs63v2HFweNjSEppSxUjdsjw1CsmnBHjfpd1o4uHfjx2JQ5HZkevHCUgdmWGE437dYCo",
  "key21": "4ktGmb24S6noHdCx8aFZSKXd7a3wzKQomAZbNfoxigdzfQzjnnNa9Zt7LEwVVts6QKHxn4QNrNnwgFge8Fdps7PP",
  "key22": "3dxyorfE31iGG9g75xgJm6NE5v5GBdxdUkbTAJZrffetJhKmQHwNgg3WkrKVSmSQkBdqHayXLYfKXxLMHLJBr3XN",
  "key23": "2KnmAkKZum5idzemYcMrDVC5U4ZisfztZRnifkGdxEgPr46jaPYxZizS9zKWPbxnKXuvB2jHfQipN5JD3RRnisTP",
  "key24": "2Y5pznk1UVxXSrKT4C8Ty6HwNgjP8Lfbc5zdPyqXWcwQCdK4xZqLRVxzAtFzSn28EMnUezEWXQavbgRUNT2se3Yv",
  "key25": "z2pePU8j3wMXNNz6YTRz3STq7MoTQR6otrb9ZTnxR1NgbEJN21sqFHRJ2kDufwdVkPsbYf9GVehsh4afFaHmQLT",
  "key26": "5npeucFS4hxcKi8S9kV4eqmRSx7fpkJ9zC6kZD8DSMuniwTJLJ2TExBQpqdiQzQz3ZD2zqjuMrLe4LmM6X2TRoqo",
  "key27": "KHZLLeZDEJUjX3grK7Rwx7HCHsVXrsJVCxizJQR7td8A9R34QgVRg4HfSc1Rnc1x8WntQAfbF4PqBwvtN2Dbi5x",
  "key28": "2DjKyJpeZ3aFdMm7kSTWYzjmAdvuYTrGhW3PJ9jLVhEucNEGrRU8jNBvfC7JSTqKXU9vQkXyu6DNxDEuJqh77vGV",
  "key29": "3BU7an5QcAtHjY6bQvoqxKBd4R5TTPBwmVhdwLmc8cRN2TCk6ykQZ6CPpWzab8bnL3RBDqRfHPVGmxM9fhd1jXoJ",
  "key30": "oH4NEWxRiRei2kg2RDUDg9ts4oNSDDdVYh1F3cPJWxouWxrrYAV7Y3xE4SVNJV4QgkQyQ9NBAcaG3pa7wyuv2jt",
  "key31": "64opfH8dgxzkBbcg3Q1vgjLN8qpHt5NJFBFDWVE5VAazknRDCdLvmjaBfWPsLMiBtDLBCScsG4tg47Sp2kUxTwHE",
  "key32": "3PMtXgPJjVByif14TyqY2XTaGaVaUiQUZeoDFiAKX1oxXidnMm9XVZA6o2jynkhnXnjEA4KoGBrtDPDcm31fJwGf",
  "key33": "61KP7jVod9Ge7zUWg9ta8m7NJ1jM2PB8gFSZBnu867R8yry7Y79P8g5RsJG6g5f5RpYQu9KMwC35JoH9tkNtaU4H",
  "key34": "36Ye1ZvF4nNu22FU9GB1wy1xk7anJJXH4UK3DfJVbZj6xxKbLeRFzpkTyWC2STK9vo6Fybhe2X5QQefixUbG9zCd",
  "key35": "mUHpkMDj14ihSfMPJLJXPN5KwETLNjToyATm4kwmhtS6vMdEMH2id9uLPUgaQsw9jF3UZ1RQ2SDYd1mBWRn5Jgw",
  "key36": "3RmAMArBZQZzvPWtQMmGqkshZ6niMLmMqj7vscJJ6gE6mRe5WB8w55xX5iMhWnjUSbNSH4QrwGjH2yC55Eb7jR7P",
  "key37": "32HcNG3EyhDXsBBV2eYyq9j4C2hji3zXyaHgHGFCKfzNT34J3xzmKWxKQ6Ets6RDUcx57tTggMC2FKfzRvMP1isZ",
  "key38": "4VJQ1sFS6MsBWq1c2KpQy1dXbPyHj88kg86pXkgbby1SMxE7qriVPo86pzGPzSD5xCzC5znmSqzwsCJkvTbw2BNZ",
  "key39": "3GYTnEXom9pBWs2gRPU6Q7T2rjJULARvw6MDjXij6N57vdctyr8rdfAQgN519JpGJvVkpdsaLrx8ruvbxFgiYZ6D",
  "key40": "4mynBymiR3BjwPNxbLhQhJn6HhhZj9ZFhLMhjeZHmt2mtusowtM5PBXNHLBhQ6ThnGuoNxP2rHe61CXWAYsjJtTz",
  "key41": "1Yu3NbhRKBtsJU8EE9SVMPsnWWGBzHxqerhPbgnbYBgfiJx429UZTFW57hxXEz2cJRoaKCFcdWgKeg4ArxbEBub",
  "key42": "bYMX2pMLwnFo2JRrbRBDYWE5PZ1biV3JFrjZ6MRzvwqaqwvFmcePtup7FTNZDb36Z5YNLjb2BRZf5hzBKpHdZ3z",
  "key43": "4J3iwFLydK3KkESjuAuWqBKZB8ezMrFt8c9iKpVCqebDYbfLvq3oECko3zV34dJbbq8xMUe5nafCViAZZKmVhFtn",
  "key44": "4pqqbNRFi6btX361FFpZGRLS5tJpT1tf7VoUmqVP8Yv8MtMqhfZ3ZsCH8NZdZt3jd1MCqu8NCn5f8N3RMH25RaQk",
  "key45": "FmWeCaj1WscFPzAK3V4CtUw5nND2fqc9cD6JkgDuhLLACD2J3WJ55RujBESsLzD5EsdYwtohUZdgQovMaywi6v9",
  "key46": "66Jj4dLWNMD3PWc9ZwzADrFnKXvqkiiU3vKHggDZev6fDZgYGzSYxRRrLA2SNVxwQAwW1zMSrx3JRwv1MtnDS1WY",
  "key47": "2WxKFnRHVXirsjdSU6dyk9ciMxedZbn5NTjR8Aykzb12WWPwefVhBgCLvPSG2555FY1M6RG9Gg5fx8J6G1GWnEfK",
  "key48": "kTJT3Wt2MHG69dNctv6ABsXBHbBANdKhLgPQaNoUoXhqfKUCin3Mxmm27BKGNZpgD2VVtCQjVifLGxxiNy6PbME"
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
