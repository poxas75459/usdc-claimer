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
    "5quzfsdVn3dZTruSQ7UM8viN27BZ5sDUzKSwyVm1Rhcir48LkJ5g2oMPxstizk4Mwbr396evSzshFufjLbiCbAFP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26GrRBHEZ4H5u56Kg7WbZDy91sRmvTdUXGDM3zwdPJLYy81UaqCPiBjhm97SakcHCY3VaYg7pApqcrME8DZom1JE",
  "key1": "2WzZFnoaDPFeq9Se2C75t2CKyLrdg4bFv5H6KZGmW4VMzQXRbT7LMstgvPa9iuctz2KeN2YZ9h9xk9meqmou7vwt",
  "key2": "Ks2ZyxDnHdDgUvo2AaR49PRfboRwTyX2ML9z7WirMF667XTjFmDNdofRwbPNgm3FHrVXyqLbfEFd5g5ENjXAFTB",
  "key3": "2pw7c1WG5CrRmS93jwNcUP3VQ9MW5n8Buvu8AJue3inWpmpy1J1erkCjeRDicXmzqW2kWTGYmy95RFUGSYLDrLZy",
  "key4": "3iMwc5iDfWkDMXKM63GxVCCUPkCzcuXvsaFvr7SUNH6YjmKXufLMjUTxdFQwHAoGd1vPDahx6yPf7e6sGNE5dH9J",
  "key5": "51yrBm1gELxzkdn39o9ouwfULkhAix6mpwLAhUoRbHcCVCYFdap2JcTYf6mNRgR1tgXRV9EftxiZrkmYCuH5JDtQ",
  "key6": "4WuYwet7ojYLewfMpWNFxibAvUoyyX8VEmpPwkgrwFtp3sgF9yTcrVWqfaMpEwZXf4z3Qrx6J9HRwdAZgEKvczVt",
  "key7": "2PJCAmcbdMQjFdHLgrA5dpZcD4GSy9bR6y36SoitSZRraaK8DBeuE8Kw4DsbjuS2rbu8uN4rgaQvFn1jYp4Ys7VU",
  "key8": "4yijKDg8ZGNxzM4EMj95qA2iN6CioYjsj7YEYCrVTjVEdWKvnuq2RTbN5kLP5bEVciVyHD4XcjYF9eaMjyQRQPLT",
  "key9": "45YgNeRUnQsAxVHRzFzmdV7djRZFaMa46xN2hJ26stCUF9PLrx54s2ms5oJVCTWWguQjEcARNvVEwoHh5yd2wPim",
  "key10": "4LXJysrZ6rrGw9Z5MrfUU6CWyGfxS4TVFdPgcepoL4nayGbDHay7ovYnEiamipLLeB18MKzNSWdx6G89SD197CD6",
  "key11": "y2rJ42aENHpyqUPYwQmY6nydrFMxwn3DWtD7wKvGyZWCRd7BAyMooxx6T7YnevcrdCbupkk5PHCuVhZwUKoUQaz",
  "key12": "UBRsMCaBekECDJsHDonrzxZHaYCQ4ykkygtxAFkQrtwmaDeGd1AZjR9KVz86g9zDVK39XdeFdzjzEWqbdVBESoV",
  "key13": "4UEN8F71tA6ijMQ8LwfvAJZAYgLtVwtZafp3SeeujEQdnKm8H6YNc2drqarLcpmnnrdxaVkzbqmTZqrGdDHjKW2b",
  "key14": "3RczfSQU7aRe82r6U4n4Z1jnprnpJvF5ezdhoAFUWk9rJoX9kusi5mikTVyg31xa2kvUu7qzSjZPkiCdsVj7tRvg",
  "key15": "4qTmqokYW5wDPmQBuKZucbRWJtYwzBeVfX2USqQamoTN1ab5fCkwe6tGnjLivq6V7P6mULCL5qzHjQQxHLyVexvY",
  "key16": "271bgqjb3qYo87N39ztdnRG5PE8Vn6tAJXYGCEHR2t3KYqyp5T9LkEDGG8oXe1E1hJwQgxjAo6fduFsU4w3qdeMa",
  "key17": "uw3er5pYXm693zmvXu6sroYoqMBN5zVTP2AzA9NbkYLQZsKxzg3q81VJd2mFHTh1bAcGoNe5CCF2cUuGkfMxWUt",
  "key18": "3CuPR83JdJvfS9W7KsCToHkTNyxeBudDcfARyWr33t3QiobpK36Pp7PMod8PWSVqd4iVgi34KqW6BBc3NeCc5BJj",
  "key19": "5chvGntJJxZPFSQAsWYmNsPqQh5FL6s7wbvSuWogQpK6UTGkj8KEMuPj9ejMRGb5m1ZVfX5Aza3Adq4SFaiRjox4",
  "key20": "5DMidPecCS7ncXzPrJjEhs7vkfUZiaN3ifXDxfzY2q3F5WEcph1Vm2dAH8b6hYvDUsPuTeNT3oqyugTpPYYfxBGF",
  "key21": "2HBgN2aeFRpMHUGHJ1GQo38kA4LyzjyRVKqTSFcx1ymzBvD8CVdRT81a8niKqTjHypiw6wFjJvJvcrUectJ4UNkv",
  "key22": "3oqnpSthKCbHxshebyJ6AK4CuYfuHpdoLcwMw8QQ6Q42PJWkMyfomEKC8bJx8YwtNxnwtzVmTFr1Dns6nwmJHPg",
  "key23": "45w56FGGycJHrxSSXpvWTS3dfXsxCMxBCev7YwgzRhH24PL1vy2pi8dZHWJ5nnV6T4bi7v3f4dBe3oVLHkPQpxkn",
  "key24": "2jSC3wm339NBTrXL8p16bAGkT4fptYtVPkdpfAWrHrMz1fKtEAXWHK9wxsM6rmBZPXrZgyDzRRj7BAzPYryBtx9Q",
  "key25": "2HeZrAbMhnATmShwaUupND6i21ijeN27j1E7QZRma2e5sDkpiDRCfMvkMZGq7eo61X614uQ3kAYK31aV9AHN748N",
  "key26": "4PHGwgMbUVvy6EBubySZBCoAuJhnxW9EoH4i9EURyVKr9fATVDxDZxe5WtyrnAQPJnF8jnkrXhPvZSwpUJ5mnhwC",
  "key27": "aTDL1w9yYhJFg1qTPJmYkUnhvYhodCAkPRZ1L7bEmBjCuimYxdq2vaKXXGNqMrj7AMMGshtip1zCfdAzoVwC3tu",
  "key28": "3oBzBa1RN1eNrhRn2uczioFmBL2dtQhvG25UawoHcmoDsw2b5GX1mJp2JpLgDyo2tj5PQbmX2UggrarWTyfts4Ke",
  "key29": "HUbcEU9zZYNKMfDjm7PXrHFuguucCsrJv8TQ8ZJguBsqk6hrwGK7FPbdEexPzqTMbsKNXH2KxKvkr9b7uaXM2fT",
  "key30": "3UExJRZtfekzu9dM1hiLMAcH69r9izH9SsqcGhEZMovhxYbptDyGQ4qny4gRridLPNu6adQCV7Re6zvmVMGp3Ta",
  "key31": "gXJo1fsMTykPKUCUo5Qw4kZcEA4jqwUh1PHjsMEemqyE6VZP5aw7LKFVVyXY1eEu6KhE8rcC8v9rp58mngxkxLC",
  "key32": "2syk991yh3Baq6VbxFmcNqqEnyfCPyvCYVYnCeUQsQ5ZciQ7SxFSHrxfoNAcCD29kjDqriXAMB9vfBHoaJTDRS1M",
  "key33": "29ATmDnd9EJ58jKJ9kDTkEkMyYQH2YnozpAQ1TyAHyavmEcWp29SBn7pzHEgicDNznKf7XXba9JUoCJxtMTs9FGr"
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
