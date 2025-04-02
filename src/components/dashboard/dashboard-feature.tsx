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
    "44HoPaqqJicsQ8zCDzstVHz3hiajQifXVKZcyZ8Cne1CkfxywZeKBv2yhHv25CXuMYdmPwe6aL22ma6RbH5xi7Lz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DRdugYqtHFLNDkfFpPaCySuMEbXbMjEZ7vrkQoSwDNXbLmX84kBgg4DLgoD6DL2VDgY62o2etBcnTzuSUVHEQbK",
  "key1": "2LBqSi5R6BEqukKEk2A1ALDpDW5E1TUKiHLKPY66kdwh3eXFCc1UAC2AsVKh4zBUKSJYiPEs9bGDqNPtsVGqQ6EE",
  "key2": "4Qus2xWcDiHYfvG7eJDYoN5UbzVAeK6DZ9khxs52UTDVsWtxjsSXZmQiRwN3LubhWWWxDaKwJ5b3Rkc2oJZkDBTV",
  "key3": "4DK1KhTCU7ggRGSzbfFPEFYEqRnomGWHndpLRZ6QWQE68GdMyNVBB5z9kigHMr9a4zKAFYUWpSQd82Vfsm8XgFFy",
  "key4": "3gVSCgtWWyzV9hJestN3HnC2zhnPaMshbxBx1ZbmXDuzy4DbkE6QRXDi2pZeoeoJq43CM7uxfg9FWJrv7hsQAr4h",
  "key5": "4A7k5cTUonTdKFiVGCoBHPiSuizmfxVChyAkqkwfuqWuKUj2epEBrQpMXFxpWfmcYSNHqVx32KAaj5Cg7SkwYsUj",
  "key6": "56okMjkhy73DKoMzAJcPa6uuipXrs5GfSzngN1ZgKh8TpUNtXcJG4z3qKVhCLURR1iFFswL7jTg1wzDu24J9gffW",
  "key7": "3k7YocDTLNBvv1cjyAA9Y1F6uQo2V2YWiAhi8zMbgnHDTbo4gsGJH7oEAoe17e6NXuAg4Xw6BiQrn9SHE3tbEX1",
  "key8": "EvF88cnPxgviW8LM9xh3V48RHSkJJemyGL9irmRrjkF6TB5Z8QFGUkHStT596G5QRazmSoDUHRFqAyoHrmXiTzH",
  "key9": "sjGBEZn5tCinkYK9tdTH2HFYCg8KRnTgPqBuv3uQPa8oazAMSbydYSJpihSB5HdD6dbzsE9aAwd2SnSxPzPadYP",
  "key10": "2Tb4dZBgWsQ6WXV5qgBTxmqf2b81FcuMHbPXTKk6VMdALvevx9PXm7Uwr4SSs8EvSRrxjVSFLDbyCZT94R977v2a",
  "key11": "42cucQ87U63mZ7xJunBRYvTWZcN9VkhYftFANi5M3rw4gJiZ3KXJo2Usk91CZQp5gbTd7oDZm2K3kyNnFDEK12i6",
  "key12": "4nPMjd8xVejxEftpKjGhB9Fk5wEpb4HGCCXdLtPqKJhQUVaEHx7URJSes1fG5PXWknFgbfj2ekVNqA7gaQ3UGDBQ",
  "key13": "5hgM8umbPZLQZ7rWaLkEtmpp84Z3p8ie1Zyv3dvvZc9VSfL1wYTgvS6atypicGSnoLc37dh4ffFzNz3PB2srH8Sm",
  "key14": "4PS65fhaBypoEmxPXmHEFjpgwrKUSFaxHGp9KASKKFognn3cxWfkJ3N14wMi4BTcZ2swTUdghG8AJt7RMg5QtyWq",
  "key15": "61UPxtjeJd1KQXv32hrjRC9zRiXEKN7doVpYSt2pxz5KjDcmQUoMfof76pNBuyCzjaJEpJQYZNHyt793TTUqsw6T",
  "key16": "5pQCTZLdRYoVUsj7BdSAh5GgmtgvvNhzqjEi6p9b6KqYBPVMPHdTWJAmyKZhbKyXkq6iGLZpVszxS36PWSnDbPKp",
  "key17": "4PTMFFggZNTWerPNDZrESkEZEvK5h3Qyqf6jEdnt4LazkFBNQF3YrS1AkdSnTmUB5rWfjQ14ZfDgKJ9EzRWUxtKx",
  "key18": "2ZzRxgy9PLfjPP8aMXaVMP5rdBoCNiNZ9jaTTEhMMfZeXPdYfMpRvsMSEkQCBuWpFoMKCVuDPPX7DTZL46xyg5Cc",
  "key19": "5366gFjyzkBX9Vi47cNb5YZpQY5mWvXAJE2wzGCWKLRojb7496i44TvgA9XzrTCNtVtPEG9kHSeRcyM8RwLxqHkA",
  "key20": "46sGv8RQg7tPj2MXPsVHR9Kdi8TY1gy3yP2cjxgzAcgtUfuXoeeJhm87KdVDBntSrXT2tVZgHsjdaNrSh4NBxKmH",
  "key21": "2UKRcVgJMSAzrwZghWssddHAiUQznZpXQk5K4YPhKywkUwNo9aNQH9b28wpiRrKJXNXtthf7jkxh1aGHtqXSQDrE",
  "key22": "yVVenP3vQiibdksNYQrTGSC71PRF4cCXka9Uu9at2NXQs2vSUabfGBAifdvWuMCFoRAMMeFHB7Kg2GiKdoSD5bk",
  "key23": "5AXrB9TccNGg5s9PBJhEj5MhimMZu6wPSyfzmWSnzhiDshxzV1o8ufeeAyWEbCdPZQi5Fy9rkj2S5FvYghzw5rN7",
  "key24": "62HjduBh2uvb8vhvXboK8syo66BX9nNYWnShyxgMfPk9aRaULXRitWR75cakJyhjyTkEwNJeD7aPrdAg8cXF3qPr",
  "key25": "Y8WrtsYQ7mDBh2A3hEoAy2x71kZCf88VuqM93NFt8r1ubAz9EzVfY5iNUsJcmQMdzTXgTenugPgLi766mRhHJxG",
  "key26": "3Rm3935FawAYPxnQvcob4KRw1bXXCC1YfY981of3V2P63KHi5gazEXRPuSPFaUch6WvktnNNVt2jD6eGSR5KxyWM",
  "key27": "3utKLd2mSKTZeor33XsKDR67iMFb4nFqqPzYPCoswfTtj87SVdiqk1PGF87sV16AorFDcWqRe3SNUnt1Gavj7v8L",
  "key28": "5DSVucNvEcLo63jLVz9aohboAYu97faUpj6qi9V7JWbkjQa9DAbSuwjHPh1MeJvLGcYsuCvikPbHKRwGFMsmuFLS",
  "key29": "5mW5cdiYmANBRGtiYNvmXZc4EFprAdtytL6CatNMb2mCBcczGRg9RrUa564NvRkyYUnngZ1CgX2Ti4SpbquQhLNq",
  "key30": "2qaLegrZqUCJf5XMG7V6ugWE6DjqoDVeHwH34CB7H77ueMTppwKjv4XTS7so5b4SGrE7eSee4Ru7QwmjA1GEH1Tf",
  "key31": "3LnC6jPVyubdCtPwigXQvLbkhAGNeybtU5ihGLikuCLDJnM5dc1DCKtKms9BdFD1Vf4N2xFn4UBXHy31JyZ2yYdC",
  "key32": "5Ka33MzoWgDmtfpYBXK8pWhDJf1GtRxmoGB8VsAUwCWz1W5B2c3hFQ5Soaz6KNNsDGgTsujkA4w5zaXrkG42CCCp",
  "key33": "5Dd6UtYHRm9TDSy5AZLDc7PL6ZY2sC5qTdqxW7AFDEmE95U68fptnjPoLxixKES4jmd7QQibjsm1g49Lp1EjvYFN",
  "key34": "2joeo7wXJRi5u3mss7fUAzy31K5kmTEUiW2UjcF4kAbNF35WT66r556YDXiVgkAyj8ZW6iSpX6T5CLHiD25iiTWQ",
  "key35": "4xn7Ak8vdMJsDK11qPwdnuqtYC3yWZjDHVxQnDxaCjNWvcJYikLJUVUuiqN8J4tbbZt9tk7hPAjUbmQkzXyKBh78",
  "key36": "E5vwdSGLnTHUyAAVnyCGz6Yv9V7EPrhqVDXUCnuKCkv17uRCED3vJgJEkmcvjQmyWH8JvWDdvm5CYk8JZfguHCQ",
  "key37": "24aRPUS4xvpSk3eUJfdLB7dSAcrwU1jsDfZJxkC1ErjEFKyyBkYxQKoiH2DTd45CREnWwDmr5VMXGRFV8j3V4kJn",
  "key38": "4BxSH9aMPcMxgzLwZrPMn1HsfAK1VTjH2pMLEhJKUXumFby6oJzmVjj8i5b6Rnycd2eCSAdaRxMsD263UnPt2GVN",
  "key39": "4n4P3gydp1ycYfnZHAUpgjMDaEzCkqDnzLmt64q5Gjw6JNXfdoVWKcz9CJ9P2VKhoSqbGAC3b813rnVfoxiLHZmB",
  "key40": "3YihykMnonmr5Nn2vyRnCeuxazLGQquNJkWLh3yxpxgBx6hXZaUMAEDzouH79ZCGisedhwfoPmjyMhFaxoHwxtg9",
  "key41": "389UYUpFV739B4uo3zpuGcLn9yM3X1BkZ3edLiEzTvra7N6kiZDF5qeyQfFX69bJ6gRGH2jSyeJxEYW3K6X8fJ4g",
  "key42": "4v7Lim3udgwBxGvi67E5CoQbkFS7bUzFd1bxvouVDuF9oaKWGqAhfgA5YGziYoErXrQXZgDXBuzmXWzm7tj5U7nb"
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
