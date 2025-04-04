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
    "XwRYUpRm5PV4PFqugZLcY934Vp6yAGzDM84Mz8LC5eSMfYt6Bz9eBB2izYVJaAsUH1ECYHEUK9dgHWNe62G6KcP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TarNqyuLww95t7Sk1YALX8U33acMTptL3XQ9zqHjKkibR6uFCqenQ3fLChXVZDunRdDvbDW4MtZ3hmqXUzVkUSA",
  "key1": "4auhBfHsZcszB8iH6PMfNqvrAxzAn3X6K54uPs9sxvRgRbRqfgxMGiCzsbeAGxDh12gJEEED9oHFPRvW9TndmPbx",
  "key2": "5LCrsgLpLD6G3a5GArdXUNrKofWK7c8Ru7VRe4veFXAvcN3TJFCnjfRJkM2ufAfPy3sPJVDzSCHCLdTEY4Y765wi",
  "key3": "3zH1Zw8uLFqNVE3PeJzwax8ppSXFdtwQi2jALZyXuTFLMgLnJTAe9DLPCmiDGR99MMYWXTKep18y3gwLH3rkMweJ",
  "key4": "3dX958Tq3BkGiQ3tkanh8AsNXfNSinvtjw4kyEtpxtWYxwMC71fDewJDo8B1pY3x5pnJgmbhGjNxTeUHninn8z9R",
  "key5": "49VVFf1zN6WPt5YS5YtKjRLr7rznNazW6x2M3YNU35rpQtJXNpRNZopYMk5bCGT7uPk8ifwv6rPMoT9kPm797p73",
  "key6": "q5xfu48FkAB4KeSZacHnbJPvirD7qMY4cQsS85htq5wihfM2nKBoFrbf2bQYuem37arTorUu7ErcvVevy8RHZom",
  "key7": "44nfXGxgFWdWLDHp29Z2sBNbhVRyFDSFAHnDYAxVZhvaTx73rcEKrTyrijaGAy6WzC2w7J9g7JaLVyQrLUgFzczB",
  "key8": "3bw29KtQ1fGpsXHQ8Rqh7tmaCA8vSks2jNxZK7UGpKrHP4CP5HajsxJUy2gAnTj8yyQbeNBS7dmrN8gMXNh2ju28",
  "key9": "64WYREEmx97MJmrHSvFTE5zRvxJ9TJMD1fA8Bi5R49AuaNuw9BdnTLGkcXHaLtsVE5wGQM3njDxKndibNowFPydx",
  "key10": "5RePzHUh9Sp8M3BTgEJie1Nr5q9hsNciUNwpVXdxZ1dc53LHK8BPeNbr78qEpBJY1q7PidQYUSAxNdMErMAJoem9",
  "key11": "47GN3RpC2zbcqvxkcfF9AaPVsn2bR9Koxi85ATc3oXSiZwtgERSMmTBn1smfBCgnjWLT6AX1xt2BwFD2UGqCtV4e",
  "key12": "VnADsFqMwMrGL2pdDP7mLkH59xRMm8Dz3ZTD7ZLsD7YwyZok12YTv6b1hBsbCGCk68H5VTAm6zXGToxtG3VGbwF",
  "key13": "4dLwCyFfwKFJSxCwmNpyb3UtJkqpG7SemMHLcQeWPxsLksbnUkibXcKignimQ4SZwPQeUJuKvFdgCx4X7jHPEruV",
  "key14": "4xMDeP9MsyV3zMAF8FcVJR8hdAF9oXUm7DkMe2w5yvZXWmC52LoZsvaGcghWQRUFFcdiC1mrLkpHx2k79aHtFFUU",
  "key15": "2WpVGtxJojPADJVFzfYYs6s4R5N2GUKw55bg7WdM22hKZwRzMqLYKgCYPobgZ75GhCMnR8PRJYyMbr97tZscqe8K",
  "key16": "2M1EWrRcL5XBkxgZJesoked4ahskHvrR1giWxVYh7CcAhiSDLrWrPqGccTECCFmpQERyVwpGh4G7JXFqqkn5vu1o",
  "key17": "4DEBPjHwnC5uYzZaLmtDsLYJoBdDDjdBDZZn26kmDamQwned8MoaXhpSTTRrBKTRb8dNKSKPePe5z7boAfdSLjqn",
  "key18": "bjqLq82uTg4A9jTEHGsyH4XPARRKNsRLyumXANUmadN5yMp2vRig4wRao32ZxzubRC3rwYWBNHPvmUr28pReHz1",
  "key19": "5tunDqDpzTLjj2YwjbCK7n8iPLik59iWrmciVWxoghf3kZ9YiLhqQWCwDAsNLmEGbuHef2yL8vNQuzm9VFtse8hL",
  "key20": "28gCrwsuokJJjne12qZ7Wney1kA45HHCvQ3uiZayJotremubUysmGTL3jeue39xYmvnFs4CRN9PvgbsJJgeNWBWN",
  "key21": "VU4ijBTBk4HdHVuKkCyh8K81bw1Ha3ARhhkKhSJUGhj9746iKhPfHojopu5Co1eYBE8b4foe8VExz443qyqgrt7",
  "key22": "61R5SS9cJp5inymRZibp1XsuACcRLMoqHz5VqreicShDCNaPYFKYLVUVqQ9ecKoASgQbrn3xH2pdPGaCF5pigjjD",
  "key23": "3bWUN4hJX1RQGaCgt1ErjQzjB77m7iAd12v4QFkzAY6BCaR3v3XuqG4Mi1VQh9MGnCpzavSZ19Bhj3ZZcTLR9vAZ",
  "key24": "48tU8KiWAJ54NkvCgMzvZ3DnN6EQrJVRZ8gTQmM4nXryJUEnPJmuZcxBmctKVcsmC345VpuRxzENoj6a6UHJBCHG",
  "key25": "5T4UefARMgibcyXWh1mDjcwDFtYacqTp3J42fXc1XjE7JwcsN4RXVFHNwLCedLPdDRDLj3rBVMKfpfAvPBHGabCZ",
  "key26": "3xLwuyUvJWgN59xmbQJbT3eiMEwA7QXomdKb7Ht9ZLvQpUwm8qzojYgzmwzDPJEbBWD9SghG5xXQ9zbTkDyDNPeF",
  "key27": "2gY5UKqP27aU4pZChRBjyu6b1oxJAePL5uSuzyDmPWrSxaXJrx77cTVt13uqvzS9y4kTeSAcFVf6bKG9qxgodRyK",
  "key28": "2WcQf6bUwSBceiTStGMPfc7CDEd2Twj1YFDbaEk7FBoL4Pyo1uSB4sdXWV52mwwSFKZMhZpb1jpE27EJyHDmPS32",
  "key29": "4BduJC8jhUvcaSXtjPTfPHMpY57Bk9WS1eM9HmTYLYEuyiSvvvx9uE2vK1Hrswx2WqfZ8z188QG1Mc7JDcwB49f5",
  "key30": "2RyJezKJPwP88iAazeEdY7P5NyRej8Sjz6GgPQkamdVEqVPL4dWFNJAaDCEN5gA7aN2Zw9h46TEkfh7b5sEhZDY",
  "key31": "4JEAs4rWRkf8vxF3TK6nbWHf1sZFfo5hZwKw95ryzibPmVcA1CrqYqGKunL7Rgr4A4MfH2MhnhgWZq151yuYQkWv",
  "key32": "31V3h9VkmWkzHyVGFRURDPYQuui1o32myp3pniWLuDtz6WqzCGGeNccwZRJGzMvA34qdRCpnDPcs6KHeDUDMpsNo",
  "key33": "3iKvUJw5uK4nymKLxgQSPZuNg3acrn4k9tTJ3BekyuagY2LCMPVnG8r36E9D8D54jnvrEHb4ajHvEXPDud7z1XGy",
  "key34": "3L5wPBrVoYcqAWfWPdBiZai2WXKCofLBZYErSSriPzNhbASawSmnM9DqrexaC3g8BTWCUw4peavne4WUdJKVTLFN",
  "key35": "21ferukJnGBzJqjQgUyFm8TMXsWmbbEKvp4885qNWSmnhoNRn6DaZa5kCfFHGroafgPNbLy58U97jiyqbVvnTvzx",
  "key36": "3ejFemgFNfWTvo4nkq1GnfyPbGigDEAGivGwU5vHikBnbDsxoB9TUgnjB2Kg5BFZBNkeZABrTwW6exDYSGdEHfW6"
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
