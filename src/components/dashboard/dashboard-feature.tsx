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
    "5gdXEqQJKvdUV2sJ8gDqw52yxc4Sk6BLRt2xi5a5cybDGjcj3QWMc4ZGQPQWBfrkzYWXygpRcXfdWg2tzVAB3F1z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EPZnqwwkyN2fT2xnxRbxsYBTAKEPYEeFVVgMvHsn2cSwFqArvMM7ajtQW1QFhBfR91DzZghtid1GpeN2TNqKXL8",
  "key1": "3yNKdLrkt6ER7bv9TQ6RmmSs6Cr1LjDcUTnMJDKnc2iVy1yT793JV3HR6r1xb1UZvGntHYeqCabMsUgQDieNrT9q",
  "key2": "2iUtV2iaQ3eHRFyJuqyDakoezcBkcs1pRyiJBdr29dLGpdRAyryh5pupWXWB66yqt6u74xrtmDnxRZLAVnjKGs23",
  "key3": "2e88yBuaLC9jY21mPEWTNcks9h2JeKwPECbe8LM1d6JiMYS1L5ccFEHaP9UfphxSMFVUyQuRTxSkcpfNmoEnhH4K",
  "key4": "2rpGye72Fn5151siH6S91qCuHEYyCixu7HKwmW3XzDjotGNEtpv2Sy7AUaUxYsbF8FEKkiTX94Ya3gAXGRRSXZzx",
  "key5": "66beREY4rMLcen4g2gyahKe51apZEsNLST1g3NychRzrayAnaTGSjBBq9kQRf5mPPBmsoZ3UkmdDHwxH3kNJ867V",
  "key6": "2FYonDW6TvFFNQrLh67ofbd1mWZ6at9qhQ5Liuy5T7jakGR3p3w7UFQi32GKLQE1kG1uS2BJUZafxbTigTGsZvv4",
  "key7": "26iFieCFg8siwQbDMgkAvebcmbwPKwMifkHrJsVeAL5hGCqhsGVe1KbyQFMdQFrSymSMVYkLWTC54pBfeouFuMRG",
  "key8": "4PZUSELZQP61BiEjB14zxMpz7iDUwenq7nH3QStnkJJ3jrXsc3hkDQ9dp57ViAuMCyjZH2pmm1tVsDBGtaMdka85",
  "key9": "2dZriFKi25QRSTUzdWejLLkUfoR2i1CXieVQXw2WEpukXpNgG17ekEz1KsAntEj4S3osGiFpNrPjiUPWhqg8HSFu",
  "key10": "5zhyLGm6cctBtN5d3AaeWYhFZ7VaQrxqySSNHK2A6qRoaL8Xs9pCXeM1GbDVYDBe628smVPdf9RRwVF7BXEdsfiu",
  "key11": "3stAdztMsi3QBfSwnGmCL3ZX2TbrMsahimmF38NVwJkaPdpi8LqgKvJVcgq1urMAQ7wxddAwBTxczzKAuhNqWgXN",
  "key12": "5uicQkUPxukoecXYsB3q8y35cgtAHL8cbkcPnCs5wGqTgaHHji8RrS8UhjeTBksDKqRe5TpsSX2TshsExgEFApMq",
  "key13": "4Ai9CbbLWDTJD8NHfW1BHUCJfzZ1xpdA99CmiD77eL9q5aYhe5rmKjfsSuFjbMCXTafe3owch1mto5Y7TecNhC6D",
  "key14": "3ZfEscCEBahJRQ5Hd249b862c4joy5zCc72c69BfsHGk4dfJ2GRaBU2Eoj5iCbaYTJvCzgiHP3N8H5322H3dXyrp",
  "key15": "2H5A4TcLRfoMBmyf93Dh4Pz375NsPjvMK8VKuoodgUbSFB4vFJ1T4RDp5RAaS8HSPyWcEVg8YWH38pvCFZfr3tNZ",
  "key16": "5VDv1aK1NyYKGsFMGZyTXvhSE8GouM2JccbMFd95zyRz2uDJTZeZSH7eEMFsx6VVjZeFT5LgzX4YmvM87SXj36iP",
  "key17": "3sCpwX26TBcZinjhrHoYuuAmmHo29n63H1p9dSL4A4ei7gfLxEWM31rgU5VVeateMWDXpL7a9zTz2ok9bFcq7Ukw",
  "key18": "45F67gZhymwLSgwzcvuYTep7Ud4taJisuEK1ktHigjsmfwdLNdwwpSrhXNYG9keUW94xtB1WU7YnGwD4aFcKK8xt",
  "key19": "Cq8jGL9VBUNMsaCKu6C2PYZfoq3ALeydsWU4akGDBWAM8PzhyL989CuMc4KWdwx9pksgdSGwGU77ruJJwtPM4kM",
  "key20": "2U2hLn9YiQUSPcfqdqumJ62mx2cNbg374DmtPfULtqKkbQkoQ5UpFK19XwTZ4s54BWMFNjdY1Va3zFdvBJ5emjwx",
  "key21": "47tbQnTWza2feHqh4mrQB1pH37GWXnjWVh8vAvqRgiaTzF5aev2VkPJZn3Mx4ARHG4PRctn8Mr2mQbEBKCCqaeGZ",
  "key22": "29hCcmvEZv3kTbLqGQW41RJuH45EzGHFdWXZ54uw48FMotmrqDeKVWcYEc2zNRruFEaLHT4yKzjX1ce2EEarVmEm",
  "key23": "5md6NVjDSshE6StRtSrGBiojxwYPy8i4nhtNyYpDTpuEbVw73PiHH57T3weBHCbCrF8Qw3voXoLJjZS8dnhRQ2rm",
  "key24": "5KdU79YnV6eRQmizNtoZ4xudCLSphFSUebZB2Ntim7f2UB9XEJTwJy3jc8i89uDfxAKBQn9CTbRwyeJqWyFR3fHv",
  "key25": "2UsTgDG2UwtXTVq2atg4YMiVQn2BumJyjn8Mipjmzx8NzVJmSA1FgN3iaiwEj8pBDr4r52oTwqVQcvhFC5ThDMk7",
  "key26": "4YhjK753p9qffKwBfYaUKHbejtYrrNqmvSyf28wg9QVZe8gpgWt9oy5QTscE36gscAkE7pwgLaeTYxYCwQ6dHUJb",
  "key27": "4cKGYeNz92BWiQ6KbKV8jzD1gNSjefkVK6LLk2SQWRhHSBLpJ76BUUktpDb6vgUKTcYpwjE5j1C9F64rYGtvfFm1",
  "key28": "aNoCq6bGozBCFfFT43zKb6Zcun9DByLxWt3U3gmWukdSJ22Pob39SbR6HKXc4b2hG255zX5n5PBJXovvG3xuQ87"
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
