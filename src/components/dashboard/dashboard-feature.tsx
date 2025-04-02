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
    "3axvSCsCQWkpo9mSWDXzKQxt78RAW5EJKbmBtUHpExiFdH9VxfUqzhW8r53Ar1Dt3CpqVSbGBiv3JTsRNGQpYFwg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vKEUPbTHUyiUKQVPC6Ce7zUza74eaKRBUhpYknSckokjiC34s8TXYpVRJiVhvKMYeZKRB6SycVqYA7K4t5uPFvY",
  "key1": "65GwvDYTY3mZWVjopHzYn6BRGsBL8coNo7R2vix2TJFspFBNwsTdUt5BBPgJa84et9b4Kdho314izUbaJyZbpXCq",
  "key2": "59KnJFKq3T79o7k4APfsiJDE8bNtVxHjQf4EUuEeZUzEL63iHPHxpj5YUBe8nJK1mhmF5hWLETyx1qAyYoSMP4ik",
  "key3": "67kXh2NbjrsMBBXqvDJSGKLacafESYWUbUJmdCg9bbEdiRoot9eSYGeXG7iYxUfTXo1bLBLids9rJfVPZRxnFySw",
  "key4": "51eJVdqTSjEcqhTrzYdwpaZAE9ZoJ5D6Tq3buNGcjeC7pgML9g17RYEVybYTuSSdCYDhhAvTJiDeuHkHEfPhkoij",
  "key5": "4rBrGhp9ZHr47QRsMfu18uBagYdxHKmzFvR4C78PG7XbeiJtJwsBDap6fVxVwNWkg5v98cZGqzjGDWtCsPMSi3aW",
  "key6": "5Kx2sPs9eg5jaA6qmmniRxx7XeMqEpCnRFhtQRdGykSjYyY4hHYpHveSrE7fxL8upCtBzdMQmiuzwnEk2c27ZBRm",
  "key7": "3yRGrXWVoZnt9jCvtwYFr48GGdwFrKVCCJiAn89AYLuQm1VHCkRc3hVScdh8hGmP53wY6m4peyHq6n74j1dRTwTk",
  "key8": "3FgG8nibvtJXgBHvxT48Fga52DBuTzKY4Gf3SWWibr29htLtMpJmLndvAbKPqBvKKy82sPbUnCWxdnnWpbPVTcK9",
  "key9": "3sFu7uwTY3N7U7u7w7VZh4UzzpQr1EGJ2Wsfr4BBY8bS7ERX9BXQxEU6zPySNVHxowkeoQzXyCJyunJG8tRoTBZ",
  "key10": "3bbggzXRYAuRKdu96e2jjxoKKYc3fbr7rA1Ph3Mot6oPgCX9qBLC2AnP9BqdeU9pBUiHhJKz2KuYa7GRty1ordhj",
  "key11": "3bqvgTm6wdesNBTLUCgEsxAUTNbUHe7AWieiPuqJxtEpNc2mj3gaEACHmVgSjMRgx2UNQS1KokULdin6bwh5pkR1",
  "key12": "64E8Q4Qdx4X2jWxxEJuwtenpCL1yQ44Qq9EtKtHR7xRyuUrPGjgGwGfGRqES1cPhY41QyiX7cnmDVTHeFZ2RmNkG",
  "key13": "614upqZwzXCpTfSJX5nMtviJAN83YEA7X7HC6HE5W5GnKknUteaKf3egrnHUCp7d5fD2buarG29CkZHdRhZC8N41",
  "key14": "3ChoENYjkmpyZ6dVRD8sk5vY3Ms4dUwj6mUKAD1rZzG27ub5V9JjgRUcgbdTkusEoQvEkzDMYm7jE54ZY9siteGr",
  "key15": "66RScjw2szGk1caYavySgk3rWwum92DxGPXcfx9MWerBY64w8MjfCAepmbrFe2PeyjEvXsySLzadXhrZNg6ucM7v",
  "key16": "3UoftaqZ67EofH4196KawJK1BmGXjpTQcQc6fH2gjXBZ87uiBRDcnwA33tbPZ1D1izTJhfeXoBek6DmJmQtEUBSP",
  "key17": "25naY5pVaKdcHkfrTeY7YK6SknUi8LwEuHrB1M4Dh3oSdLvriGqofKonbv2mzMQvh9AQr5KRCWyMwTFNHm7oYJqq",
  "key18": "3WSCUSNMTo7rriDZQx68n2HB9Ydo7eUfV99pM4CpDkmPvsuUpvmPFgk45cVo5NYFYyZeNJA9rpkNR1SUbpAfycwW",
  "key19": "4p1hLNXSgpdfXr7LqcuZgqciVBaD6i6aPRqt3t9D3amKYVNVMXRAP4K1msUrQ6Z5kGXxADs3hZUcCT9fB1m834De",
  "key20": "2VoBEVmoVpnedNxQYLmmpdXobTVak6MiQWx3BrnjWNmFKCU7PYMfx23Sxve921oeSp65SUUKqLFn2mF8UypXZ3T8",
  "key21": "5TJ1b5LL9Pz5fMvfRm5vVqLCTpNCnaqXFDHBuQNAVTG9xhEUqjp6SxLPpZbY1NTETDWgocDz38p8MepAhdqfaCGs",
  "key22": "NWfXzgAk7UqpJFkQGnBctUWSbiz9DdZDXScL7tTFS4JJifuc4dcuGXXB6fhz1Sr3p2KYmByoAM4KndREU92YdeA",
  "key23": "4ajjXTxgryHU4nssqZqjyTQ8hYAGqtWPsR8jQJz3sL4EV1XSnJefXLEW1higx89tv5dfAbpzYuKaHPEJXyfZ1RNs",
  "key24": "2g7jHZ61JSg5YpaHax6PKAM2eYK23PMp9aVEhoSRP3r8gJ1HUWjUK5MnsSfC8axhUFd8ihCoC6dTnR1XRQvW75T2",
  "key25": "4T2t2QMsHZqq5xK41w26FeTezDtmsh1pUHuLDotNHqLnHMyUkkbVvetsrsoN5EFFRXVXGE2MCXwwuKqNEbBkLLci",
  "key26": "3Lw2h5Hq6s1PYDbqSXfEN58VRczJcmannyTA6UpYoHFb6tmWDT5VmByoDXAvR8BzGABDYjWxRNwjpTrsaescDRUe",
  "key27": "4nUeBncAY2TGYabYet328CN1xvSC2tAFCjUBUF3iNRWtiAHHoCvew3Kxa33nFDTYHJKLLbjBprgkruZgGQHrm1PB",
  "key28": "5uwSqrpB3HzK37VvDgDo7wDecqe1DTLQGZsNX1tExJR2C26q14qUGV8PHng7EMEbcwvXvhtFGjWaXcj9iEsJM5sJ",
  "key29": "kKPkhmmiS4tua8KUE1RGfnhHccB5mSQnF6p9bmpbazeQ3bcrZwKvoNZw3DipkJeJQyCLxAURyjxJP8M6vt4wT9S",
  "key30": "4r8KanPLNQPsKqgvCTHJfBLMcTs5HDKUkbJkrPH1AUiZa4nwB8EuB67Ne7Z3vctH1Uvosn26ARL9Qu31UKqHsw3W",
  "key31": "4rsbsier5z2erDuYatZKrgFXv1xNhydffGiadum6ANTdmjD9xDtPSmR5BAqqGv8bDbNJaDR4fuF5DxvY6Z1EBwKx",
  "key32": "uXG7Mz5qMhpfzCuz8tFAqf669WGjQhc94YZbdAhvvinjvAft1dLwnqZu16Sjtb5HqcmXHPkux8GS51ULHFZwbb3",
  "key33": "2rdC9FP1yfReL5cFsuLctV4CeRho2eYyfh48CavqtSEX1yhXPYfMdFwrp8qr8ENhubqXv2ehvuiFppmhZvFVYpxe",
  "key34": "qHmbsiKhqasVh9eC3E4MsStpVhsDj4GwBRKjwCLfnm8HKKLR2GFLuM6FmZnCLJ8MG7BiYctuPJyDgfAcJiA3xVW",
  "key35": "2KQkUVrrnRP2a9WScmvYuyVpaiYMrTWru6zBeSmDoDgzQiTZTXHWenkLJNuBqLqLQbP9Y6u8T3Gx9dm7vCWeozYS",
  "key36": "617fixRp23EKrP2sW2VktpZ2jbqY6xRQgHLV5Mmg4HYrBbsRXZzS3bTkoN4Ggnb2wQa1HXgatapYePimdVkv7TLh",
  "key37": "5TpymnqGqHZ9pHQK7EnYFf8zHb8cSdqLPNzpxJQZR2Bshp2j2JUXMBtfUAc8Qf8HtG78RcDLumUG2B6FEs47QVhH",
  "key38": "4km6PtJVy4Jn9ex6y2n3uoRQvAPbFyYjrzBK63Fh4NY3A9nFNuUQtZHA8rz1zi9X7VswjRSgd9xgWr3NnsAhiHnv",
  "key39": "5bqngokXa9UtPsfkvGjwPwN4azUFDKcYXQanxNCiQH8WWsg5yzjvvnfS6USH4vtUtRBoF7MXW76zrjdnD13gkBRa",
  "key40": "STvrzGKc2Ta8wP2jBBa6Aa3Y33dTczMgx6yvknDLPEQUim9tRfpfJUk1m953Md2yrFVq1WS32EQp6Uypi586v2s",
  "key41": "2c9gbeUMHE9NiST8c61Xe9souGzK8wGNsjChrt4mviSrtPjbtNgzWRxA8YXuACruHtFtLqTwqVQk2t5fbHFLErsd",
  "key42": "3FPX7MBm6kdQTZun5EKyQJCGP8sCt8r2chusrXgeG9vivvyMXM8wMrPp1kszxCQgcWPTnzdMaACfsyRmTersfwSp"
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
