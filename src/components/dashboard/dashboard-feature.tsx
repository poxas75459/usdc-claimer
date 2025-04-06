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
    "UF4z2hn9mLBV5KoqkiU4rM7hL3LqxRNpRWXR1jPYXv6sBZxmuwYvebGzkdLicJ9tPdw6oNSjgGZkKkJFmhYYfqY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PqpLGzFcHRpejTckf6vgNcoiPkZhkYAit6U6F8Kx2Q9MFeUPnfwg7QDAQKMjwHHNYt7djgY53yrMW9p8xPcz5gn",
  "key1": "4koud6s3EsEFoqcHhWEjwBZjmhDDQakWK3ycXuRf1kN1Gh8aAAoXbmLGD8mMQhcBuQV7swoghez187QwA2Bd23Jv",
  "key2": "2pEdAiVtzwtruth1dKaNmsnQnjYDyTotu65HVPh6KqRfYW9ntQTNwjpRzPDyAaYLdqfVFHJn45zMtQFEkHNmM3ZQ",
  "key3": "2iiCKofmG3VFWc5c8S76VXADzMB18DbQ5EHszjWGxY1MtJdJ5XuqtUyuQDTozbs7H6hHgvQLSFtou2zg34eP2Go8",
  "key4": "evSiGXwh2Njg7kN2vRPNFSSAgU5H2u7Np3GpRzngjBz4oT12P2CNfHqZGGzovb499Uhnm6fYjtHpCsjg7zrZtY1",
  "key5": "23yx2DMNQeceCeNq8LMQUDskUGWkQqehykzez1JhiXQ5rjvswW36v2wnashH7kBEp7cTm2mGAvnBiEse1Z4XLZbF",
  "key6": "2bgJU4eJEZdT8pKiNSLkR9rf6XqfwMdsgSWRSu9QpBBhuQXigCZGBV44mAAUN2sHjf5c5cCANffCzuZE5DgF16uN",
  "key7": "p3PjoaS3Gnvm5YyWGRxtkago2ECvgLFnDSiyqYAukCunXBeAgNBTNiW3g819pqm46EKy7ggyihZCKMBxf3KvRUz",
  "key8": "ijnD4xUJikmdJT3D8pgTxBKo4xjjXmKzvbmU7P9wre9YUA6N6fTW9FcebuECy4VES8sTX6vuBgYTrn56b1ZdRHE",
  "key9": "2fcsqsozuduRC17Z6uWFzkDJ1m9WPnYp1HKYMrTm3hFp3t7p7frdMfVjJQfNfA4KbZ3hN845iFGya74pK1njDe7d",
  "key10": "4XJfJGeDZSsthapdeRKiJKp6XPK5zpKxgYcdRquT4N5FgfRhHbrpBckSnCqMLBFuBw4rPc7q6sGGWQ8JtgyVYEqY",
  "key11": "veki4WABBUkDys2Q2YLsYg1EG8fxgrXr1B3wrHJZz7QjFfmsp5XAVgEcucijSkvTEsSVamVBuXy8vrtnS7UFR2S",
  "key12": "2T75QgpjyDGEGiURMNLiT1bbT3KcdZU387e8df8vYX4VKtRbXDGWRu7ZVz4TGpfG9ZfZ2os7JWX2vCExxnP1DDWR",
  "key13": "2yxt4o5sxYvar98ieUuWtXdRWkaht9fH5iHVt5yA2VK2JC6EPqRq9cdPJiRT8VYvVvPV9jYY9b78rkbKs9MGczTt",
  "key14": "3Gy75zJBJGPZz2WMc1USM8mdCP8TbeCjbdyfKBy6SjcA41QzunMRivZGrmfxBrJaucjC3RmE7yUrdXsJ5DZ9ow96",
  "key15": "2bdchv4wpGWtTUTUbPh4ZTudnNeyeoNCN4LUDJWLZJ3iJMmai84apuXSuE6MEn9M5bPddRHwCvY2dM83w6ko6JBN",
  "key16": "4kCz6B9xRy1ny4s7X8B66dfr7vYtSwdE7kK17k8iVgue2qtJcvkrAxhT6C5sMeLpFJwyygUDQTHf3TRsusZuSFBF",
  "key17": "7c8JaQ75MiTLsGb7U6Gsr9bxtWj9ubYK91Prv12XuxyD3yGkoT5MihunquxCYe5MNuTLqyKDQqMMfLXhVj399Xa",
  "key18": "2gpxz86NijgQU1j8FnjiHGovTEamji4QxJGXZasiMTvSbPx42fWHCJDYyxvV724XCD22FkNDVEPb9Q9kUpmDx2mt",
  "key19": "WHQFmXwck7sKfKQXks3G58bvEzc9WHkN9xirjrBjdf3jEuCWJN13fqoA5EYRLkTBci6NipxKzVBr1kEfqUiKgtR",
  "key20": "4gieCKtA4CQ6xGkdge7qnNzU6tNdVPqYHx7X5AdS4MoXZZR7ZQxJUnh4Y5yb8FkMEW95zT4Jkq9yMQp5GNV8UZP1",
  "key21": "K8xv2tmJQqevDf4csuuAmDjTmhnB9N87UCCHtm7T1fGF7TNgWjdGTKvLttZ1PX4TzVmnPxEq5oygTudgtP1a966",
  "key22": "2PjZobVYVCcv8ehDVJfCSGGfrhVhK8wgFoVZYmaduzsTqxVqSCrMdmxayCsyhiG5DCCatiZmj61JEQqk2H9DaD27",
  "key23": "5V7xB8jDaLQ67ZSqVWJE9nZRxuoCjtiqCGHGsXDmvDD4cxCybdp8jRQ19Pygh5FSURhk1s2R8EB4ss2uH4i479wZ",
  "key24": "67b7F9xZNtwdnZccAPRpyrFW5KLAfexrbyvGp4rdvnEVqE7bjW9wDfMqKJbEhiyY4gvdnrK594Xwn9tcaRLWhRbq",
  "key25": "5njGYt1PqjJEE1KoD9bbXqAioHfxv9hMrCRUvNPhkeyGyPqQUsRjj7XDQWrKZYUiyRaie4btkomgctjkWA86pPk",
  "key26": "5Ceyp4o4LgGz8cCcF6NZ4sDiTRrL1niRBxp7bsMfQRWWZfTDZLWo1fH4pg5j3KJwYrS3y6hkTzgfGGRuSwwamskQ",
  "key27": "5jM7WunQdPdmecRpnVYmdvBigZLqvyt3WEXNhAuQhgUT5E7vYMNDP6Y3yq5F7d56Fhgh4qWR1T7mHbkqEtrvmFJX",
  "key28": "viwFSqZSSyyz7DaphJzA8CX16cKwL4sLJjNxSwkTJvwjaxf1eKBC922wNjB1DSy6P7twPvV8TXY37kyXfDYhymE",
  "key29": "2jrVeqhGW6bWmz6nBWHopoNWxzFxZajhQT2KxKN86ShWTpWi7F4ivU9cfaekYRUKjTV4UUH9QiymVdMHQjjvN4Dw",
  "key30": "24fkLxv35UBH5k283Sp1cPBRFUjW7Nv67FBDbELF3R38sqnx9Ke7DxHJjeMtFdRzFKYFn1VZ2dTwZyovDXrnusKP",
  "key31": "416fBmnPKuKsUsDViLhBFNztFESsUppyYokfRLBfNp2kNyMawraj1yTrcZUwtBebuXjQa7bdiQAqrGZ1LrhW9jde",
  "key32": "55ebPTXYRY2TABzGtF6fhzJGsAoUsWwxgUsgVwhReANeovvKfWPd2Nmw6ZYJjtSmoXrTFu3UGRMkVFEF89VUrtxA",
  "key33": "2re227WGiYPMDd8ZMskUihyzpFAkxDc84jykHfMXqQR1u8v9i1uSLVGhZsNaAM6BKYSSzk5oy3aKUjSqUtQhChDX",
  "key34": "66qhSvLtsksatn56dJGSxBapXUtWsUaLpYpau5FGDscxLwe8K1WYERQZZr8RNoQayz18biy3qKHiSht5gYbatpXe",
  "key35": "LefA1kh49HMmkcHRFVdKnA94bXeVNb7Z9KWTL5d7SPzdFDi9ivXDBEC9eUgBqRd4kaGpWu1XRi25gdk3MSGph3L",
  "key36": "5P8sSktcV8CstZAzaAD9HNwdC31vtqrMXi3L3qZDa7juyjHvbdvW2M4kzQHTmw9qKZVwPBsfebptrSGVJHw5yfQa",
  "key37": "3k5qHErDRqTiEU7vLstbZJQkvpAFg13tcL7vFWDXjNW5sbm5otGE6HXQp86c5uyWBUVFyZFXHUpyvSc4TXdcmtW7"
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
