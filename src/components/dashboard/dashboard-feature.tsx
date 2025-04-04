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
    "4o6HM47r83Adf1TcpjYgaePTmbHobG9K3iuzVEdxX9ivSoHMn937o13REq3zW8TfxZazGgyLoYc9Z3js9ogqETsw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NkSG72XrE2CUbSe2LNvPJ2hRDn4Ls8tXinevi5hpZ4X92ADiTHbBpuJWQeExW1sYA5a1zadsVLNerFm6Z19Yd1U",
  "key1": "4ju6Ger9jy5X3aNqrxgAyPnBU1wYc8BdCYqycwLB2MWxStMPPNHot4LAMPUwyBeAEbrMPs6df2M8NqGUrVgowgjp",
  "key2": "4UwwSwt5atFnYQmrk2tnthHSZZNonYZ2D1nm4f62wW1exoiKpH14U8X7iucRXZunQGbmyfgWRq4JK4Vh6dQWMaxx",
  "key3": "PaoAkLCZA8aa1CJVNYznq4BpcZ7YefKLTDh8hcBXzp4dwhnjfk1oNyb4sNwcAHXMSA49DsjMfESz1UjBzrEsfdy",
  "key4": "55vEGkccJpRrbX75kR2Xk9DjtJqk8Ls4owpqLAyyfKmsaDpgwJvaMKWyafrcnrz6EDiWZWHnWWjVmXk3r85oEyjT",
  "key5": "3TTj72mu8VBiNE2Rp4H2xZsMrUXLXBosJAnz9zUf9NHxjDtfPjW4pApWtizVea1uRj2tgRKCTt2ZHB17DRUtwYMC",
  "key6": "3n2U94DcxwZzRF1H2ozjvtx82Ny5DJKv3TTr8xo7FcNSt3yUJF4jyScwtpsvscyg3PibJBgSwaoUjvdYGVTgTjj7",
  "key7": "3Ju3boHTgN3Nx1rJ6hLSsKB7tvsn4Q3kbo3P6FC9kZpSYD1ksKHvpXDHKN24XFHDq6mR2VrY8TCnV4x6Rct4i2Ee",
  "key8": "5q1zwHzhbFim6KFBLbaYB5mBaSnxX6ENEiERdHx9pPpRCNgHCK2KLJjYyDwrW1d9DGKCp3SQUZot2rvXPrvRvRRA",
  "key9": "3NnyyDgnVQDFqRcotwFVMpkpSRGEK9AqWFN2VjPNSJ1TMd3cvp9n9iRkm6xzf2szVgrgdbdzvhdB5acKummV4aTF",
  "key10": "5aFgeKiLXqGMvYY72TouyuDKQDWJwyKH8PdsXmaSwG1K7UgZeZaf6k2FbeExMbwVUWP4rhuJsGLhJGfpniY5sLP4",
  "key11": "AwKRQYJ5anL5szkqBwQazxGwQXXfTTkRNRsJDhVfgsJFFfddfU7d2Ct9tntwge5GATHHZzdxU32iQf1bgHDhH3C",
  "key12": "4TPG3QuHkPvtdKWdJCxgKBYDK44CUBg1H7vKBnmKaUXmpU8h4cA8Tge5wf4tfNP7p7ehkEYsjp3ryb5Pj6ofU9JS",
  "key13": "4vXg5EgnRAwXzzDDck2C56mg8YAS985UjxM98JyUp7L7KP9TccTtMgP2rqRzL4xFVmdBBUEPnRLZQz68H6K7qkuH",
  "key14": "63djhP3v8TF6Swmxm8H6vvxQS2YQK1Srefx6kkiUCS1nYdAR1BFR5D92ek6h7B8h4hTkcD5FKuU6GHuCv1YmaBLy",
  "key15": "5A115RYQUWW9APFYMXccsqr4YEzheCXcUG8qG8VxhCdFSQGixUYpvsDBeQjuLyqAUNfjP5RXtrk1poT82be7GtiA",
  "key16": "45dMZu5MxAhT6RCkAhTktqcUqzweMJLRkesi6Jbp2qw99Vsd5BnWKMmLb8oDVSXj6GMaCejbE4zeTkWCe5FprJzX",
  "key17": "4fwqze4wn7mt2hVMvT1ewrNZ7DYopwCRSBRcbvua4xfW9i2YpEmU57sxPR1f1oYFJY6ztBJLAeznU5ESCtHDy9tL",
  "key18": "3fG6j46JBbikLZtTnttVX4XLF8vsRH2WAs9U32fyFYKFxYRKafrZZrQR4Pwyga1d5UtCaWqFQp6r2hBe18PgTpoY",
  "key19": "4eK1jgXKZmCX1ZnUWBtSsmhvBUbsikF7JncSCShyNZpjv6zdV7FvXMnVZigJ3EsfyLoAUuaeTux9YeffCbaCdaKa",
  "key20": "5gPh2pFtfNxYLNasP1WuEvsVdDhA19939fu9QQyCqPq1Z6Lui85EvnbhDJygXGiSqia2durnVM9k4nnAGFCsenJe",
  "key21": "4H5urJMZPaQBF14Na35uhFN1cJoPbFkDMbCjo4tZ22GdmwQhNNmhYzQMbQ4FyqceoNyFyHNzRZ7TVB33PkDBs7hm",
  "key22": "HFpbdGjnGhUQDLdfXhbyU6MC9SWTiw9kiwiGGg422D91EzUeBoLty6cnChDQeb7PkHVStb3W5NncQdRwKc1fMje",
  "key23": "3UvvqpVSQtwJbNjf5LJ75v2CAADkKQRGhNSqct41oWjzbxEeds2kaXuJDXTc1WRWkG2ZbU8JFp1Ndi67qwbSwhzM",
  "key24": "3nyWzoJcPsJc7PNRp965xrQzb2thDQkRKvMKZddqfSghc82RWrdFrfuPPE3qw2kPyJsfYqH9pqqxVYgraEKDLtKd",
  "key25": "2orjuo8ZHi4FFe1YhtcBAAawgAfnVHfK8QJxf8VugQTS4DJHAKvaGPZr7UBdSadjrEe9ZmnUo9T4VnLB7pYwx4Qz",
  "key26": "ns8SWMj7WmFimpgVoKquSkRf5Q1Bcjpx5FCPRaCDREhqhJNS3pZdjD1kQ3zRizz5GyGbdZPxN8md4PLUNf3zN21",
  "key27": "4cHoRDUtaRpvzs39h5HoJrpQfCvMvFNV8423yZw78bqycLDZncodfiouQxfB51aUCWKBzTPX6r8zHb5giwnSmVhL",
  "key28": "2vP5De7zR7P4CANkLFAm7dVzSzZYGxsXMbugWW8xQxm1groRm1hffrgS3wzTnNYadgmr8NVZHnh9puZNKdcKGbQp",
  "key29": "5SpZ7JgRkVinQnZZp6xdtLw3fK3hqFizxhfZ8KBJhaznM4wVoaRrbEGtqJS27sDj1S2dsdBSMEMngFYnpX6d9DrD"
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
