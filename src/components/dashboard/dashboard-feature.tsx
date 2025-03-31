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
    "62mDyUn1E5T6MehMriSY9MpVjeF11nNap3LNnr6tcHyrCocAa9dGsEr4nPkVFwt6t4PBbKkG6838XMVrJkigzUhz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kG2MayipL8pi2FBDp1TFu6X1ZmKPqr9rSZWySFuq9RTVfiNpoxGA85ZMrPMuKj9kmUtAieFC4QqaqTm6mRbu9ou",
  "key1": "3X6zAGuvMFtLcvhwaJAtv2VLq1a3v4AMbmpcES2i7uKhHxT5rckDvHMmW5PfetCkhEG1Z1rkkSFcyauvvTesChbB",
  "key2": "tH99MrRxNQwVRW9naUk5kPp1uF6dc53jfwBgJ7QLfGNrXBoKEq8gh5fDKb45DtWtx212xjdErJYxXtDVTWPdLhb",
  "key3": "64CwtQ465oAQc319vk8MkkCe55fPo4vHgBWEMmw6CnejBTfuK2BP4z2346xrG8x9GKPsc9mVmNmh7jpZApw7KMK3",
  "key4": "3a1U6WM1VpvsSextbb2KudEZRNxZpnsjoFbnqN2CFaEW8BPgFtgPseQbxcNTB4Dq5nTT4zbTeDZnF8SDzxZEXzjt",
  "key5": "4ENiFDGBdNTBAYyUP9QE66jtaVSGZSTMTJauoQhuEt877MYh8cA7xPLwsGzD9Uw4GFfRL91ZFnzZmua7ZQKCDh3p",
  "key6": "4q3j5cyS5Ue9Q79Bu1aXhnTx2ikq2YN9WfzxrSDogpVD9ZPB7HSJThGHaWTSsqgPFFyMHRuK9NzxwJ7tjCPGgY5q",
  "key7": "4qxuWFydhrsfTAmTC89xuNaC16r3edNwZUd1mr7ALJLVdb5XBcm6jifpUwg68SExaj3zxsAThGowauy38LxMXvrS",
  "key8": "33nqRotT8WCSD1KeFek1sLZiHTf2Qa8HEdYufpXY1CEkfkHQJZMGmncVQvUmmFGEDgJMhDM8eXcK2f5FJT2Vom87",
  "key9": "649Daj3EPh27uUwa7TNyCodZcXVgJPKqT4AwZHuKhaSQTtS2qw5LThftbuLxWAZhN4d2Yptkggfnxi6ForgFjn2J",
  "key10": "3nptmSUevexz9XrVrnRXDSFKjxaoZ7qCJTea5hzFqRVFhKfZHfyYmXdVzR1n8YjwpEX5Y3dKbBQ8CYQcHGz8ir9e",
  "key11": "2VBxtQnm8QeG3FfB6VRPfojg27zDRpEtoajFXB4VHsLjdP7Yzsgch5QYAedZADJ7cnvAr5y3yxszkngTCg8SqEWs",
  "key12": "2NrmhVwhv8ZVZ22wi8bWaV9RgxKb1nRMJBFb8R7AfafsrjeQH6xjyzNkAH9VPHovtsG1MMjkTGG4r1pfpGdw2Xf",
  "key13": "5kAZSUTQzhPxsL7gm9mtF75ftFoTi4f12KZJGFURcrJwTVNeiz3wa3XNQBHR7cfpqmQW6w2AGFuAqfxsuHpTnmUK",
  "key14": "5eYbt16vTfVKEeGCy1aZuYoWJQmHEvgA3auupisjDrKHnKKjSTC6dB4GRG7hAacNNkHqwqFwjuZ3yj7GLq5wDCyd",
  "key15": "58WbewDxCSqo5EXcFioUP1Yj7cAs2q6MkxfEtDYUXygaEYRaUofqYXajsgPMGQMaNZV6f7TYspoEpa8mKJAWLVS5",
  "key16": "2v7CzhH28BcCBv31RoiqCiSj97ZWrsKqvKin4C83ZZnJLvVWunm8173fy5ecfeMzBF5D2YFSgCd3rmKQKrkLLoSW",
  "key17": "5j7ct6rrHUKuMvqx1t3gNqdkgCRjZRQreJ2DV3QnLUqxhZm4X69tSva48mTNhMGBvf48FsRgTjTiLondDeBX8AQB",
  "key18": "4WYfzRKhJz4DjJ6hAUDtmFeF9eVRQ4iTAW97qoAWnXTGYVqzMS1AWUYfG3FEDFWCijsy33f7tpzCgsEEaMZBLoaQ",
  "key19": "5BtuG5RGyqxLzmKuEAa6AhLUG8dRLUgoWXdw6mktkm4JTsmTWPjeEdMXckkPyCvf7neccpvmY3ReSWbxMBQ4z3uY",
  "key20": "2BygbYkEUvQhsh37wb31KhejFA74tC2ndyDZA4Abbv3ZutteW3d7vum2m4yrtDsAemzczCuVfnvuVKauS85gHXFr",
  "key21": "5h3zvesMmViBoKDrJ9nfNmyD5QRg3PVgpfnjYsECkrL1iZQWL51S1XCJn7UvBuzwMwDKzqfgXsVQeBt3SeFQaCV1",
  "key22": "2bKrDwnsNvz2V3E3vgD1ZsqeW4JxmxKkPAoSAdQXqsCLZjcHk9qeRvZFpWVHYkhxkMbJSTgZ2v2m6Cb8kqqvEcyJ",
  "key23": "2VFeMBY7aKeuQrMVQEwr21WKhjTc8F6M481WPMkBNoZwEDoBw4kn3AUQtGTQck9sCAeMwt381eLtDXDzwY8W8cRV",
  "key24": "FcyGeqC5QgAvvxsnYUyU3LjwDFXHMD9tkYWXE3eLe6YsYrCs1EMJAuK4bMe88pE4G8NaMPKsrs5RCpv677sC99o",
  "key25": "5kvAzzsxWZEns5Q5xibV63vUHrbbQZSkF8vsjMuJrhmxZTqTXaFfffjuN8tuGJYkpeM5N4MK3SB1rg98d6w5oVTb",
  "key26": "2pQNKemibKTyEdC1dQjyqsLvhyYtc8ogv93poE7J4tFmyk2Js5aq7kPhteGKfGSxgXq4iVem9LwZXw3HsHfFkPKP",
  "key27": "4c1g5qR1SZLdBXGbkCFd7ByUwMgjaiCkE5rnMQr8G3gRyEDHexjvsuSYaAPWPJP65Lz4fLc2jkZpKTkFMmcZLoGL",
  "key28": "WSQWHi7Na6swBT28bUFtYNxrQv83CjJrsKTyCw2PvNqjnnfygbLeSiML79NGqz21kam6BRrzLBGwXkK1NSoBoKs",
  "key29": "pdNhxDLxT4M9BqzDZeFirwneZtVu9wcEZWyZsB1eCKtNVQ6Kdhu7Hiazr38sM72uAY9WKC3nhWsDmpW8Ekqm31S",
  "key30": "45DP2EH8owgknh9R53FYiHV8uoGw7TzCYCh7qGMYVLrY2sAe7iZJ8rzhNRBLJUHC77ZU3CL2mqQcHYMWARUACTtn",
  "key31": "4TiwvYBf7rQwKdCaoaaiWeUjGgDJvKdnyEkmsASR5PNAWCsjZzMfTMv1g1ioL2PVa1voyktnpHVnpTNmpuHF1NUA",
  "key32": "oae3a4PZxeyTzuGQWxVdFrTnAZnszWh3zgDgDfhKNYtgYnSw4gQKojR8cv4GSoxb4N5eGdYGbQPenpTVTA8etWn",
  "key33": "5VSBSwcPerCAqhDve8skBy5bFmzqXj2RFwjx5DZVSQuZxTpwUFcU8nSwT6VjrSK6sLy5YgtwNsGWejA5QHwQUtfD",
  "key34": "eZ8PakMEC8286LUCgVD2NMa7KnV6J4mBWxTCoTGimciqqFoB2KUgt1rPg35iPFmxsKbUjQiFNdmpHRqcJYENKsB",
  "key35": "21P54AkebmZ6rX7CD5wXvowUG8BaFuR4Czi2q7sQnjmTShLaN2jatpsJUzXErpy4X2amFYfwmtzbZqSbtsi9vrfu",
  "key36": "4jNTZrgwrQ8gNyKUJgm5csgE4Li5umhNMrkNKMx35jogoVPArHXBY2jKEuVHuVxu3PM36Apor1owWsDWJjJr672S",
  "key37": "4JDMsCbyGcf54kpJchUdNgSNxC8aX4tKG9pc4MKAmNnMKmma7LUPpR9Jk5f6eKevVkYq9DkLHHLgLFnD6LoACdvy",
  "key38": "66xZg7coeoXsaxmDk6BrVy38DJzcwQM7Fq3A8zNiQFDTNW61cJrYjtdWcZHVg67JjfJJX5sJtFkELPp8DezC7kCC"
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
