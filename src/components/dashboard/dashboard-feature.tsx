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
    "foZkpmfC3CbWppV1n92qyXNLyj4SzZpEM3a95SLafAuBAbwZeuDjoEL8kawY1ohqRFsMHNPHmeCs5DnuEPtr4r4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vxBBMmF7R1Jec5n9ebgmJcaJ6hc1gHtuvcJb5SNiMGuLLLJQpBnjMLtPYk7mtGxR9ZGceRtBMJ5tMhPm61ZF5wD",
  "key1": "2Jnmwf1LgmRyXxjoi3B8XMDmj2rn3hVBUxFgjRc57XheBuJScoYDi63fZZKuyuPQuKtmtobrZ4QjhfbudqXwLKUF",
  "key2": "2KoNmtRrDfhDQCdNJSz7WJQ59Kj5Fn8amGveVe3K4qmyUxezyiSiJRvqz98dvVa2wT6FWgDEtGTXYVmSoz9sUfpC",
  "key3": "4vuoiDLpoMapPEqhGGFRkhTFmsvhd8jBcjz5CfWFk3ULrDRzqywq7BByUkisVAmy8SdC4RGvReMmVWU95s3QA6zr",
  "key4": "44k8uFsZX2gADdfpUAVV49UEQJERr8qox7CJp5YxPFFgxWTHvUNGixy99u9XYhXw1cQjTxhpr9TSmNkHzjQPxusW",
  "key5": "5QzUMW8y6BRtk2EPYhwZjYhoh1gsYWdkuJrFYCVmWnStNBK8DUhPzhzYbYwNZE9nHNxg8iQ7aeqMcBFkTAmbFc4a",
  "key6": "3XU13YRLcymePjRomVWrfv8zQw9gfN5C3czne453pzuFbxEXBJK7ixkaBXv9g1CaQGUhmpefgqpdcbgNPxJhfAc4",
  "key7": "4b2yiewi8qd4kJYFNaogVfn8PkX5YCj6NTeRxD7Uftvo4xC7oa1ysQsSVSseNuxYmW2Ep8JQwGmZFxT3kRk6W35o",
  "key8": "RY79iffayfKeXbgaES2a9yDSpBepLECSTPp2G5jvWxYstULPZqggXhcAULCiB97MzTTo1pjHM4hGHkYJAmtp6CL",
  "key9": "3FpDXfF9WjzTAAiaTiREp9uvhGZnrPpPvMQThLuTMnYYAfdrxDbG5PHJSH91ModQ8vAJpzWx14KCSpxvd15dwZaa",
  "key10": "3VoCZUxbGBxxtybvgZycne2NeHUiMhRgo2ayePF6LUiq4ivrqeZVMDVNUaRWWR6P4qh5Z3tnadiYRgeg41ZSF4bs",
  "key11": "2usctPx6Td9UGoSEB5WFQdXwgaXSbtaFBU3q4HsTSDD9nLUKpUyLRpFWCeacsBckMYrX7Ltmr2SPbCGN49tuYHze",
  "key12": "JaVGHaZW83rtD3fZmT1i4MAahYgG85VmYisA7wgc5AAX4pBRfCyZzjkc1SQwNFiTcnamZHMbkZCivf9EfavLDDP",
  "key13": "4FGiJswe1UPfUiMguV5XMqceqhvyVwFfAMFgW99LAtjksP5pEsWxM7ue1YZ3rU5udy5UVeq84Z9DWGfCkHhuLF3c",
  "key14": "4XiHe8J4rKiSVGVoEhfe3CYyi1JnANcmRE5wF5RUsE6xyGQYVaKT4149wyHr3e2Ttg3pykwva4XiT8tSeqQNUeAt",
  "key15": "5DQu6gs3o9Dm6NP3FocDoXzRrdxewBaNqUoarDQK6U13BGtpxmEBESYpd36NsxiwRFwVoZvCSjZpdaWoFwsKc9UE",
  "key16": "3yaFJJtL897mTx3XUXMmNXU6mT2KfjnJRFLzoRhrWVN7ZKhD4LmzuSjXPSYr1w85yAPQ4DqPzNc5ckTX6wQn1v24",
  "key17": "2t2qZkGtsfUvJezqhLTrswZSGKnJs4W4MxUtVZJqhjWHU1W4iMtzbLSDCbVkUbPAx9VBndkrkSTKm92WVtz2Tiit",
  "key18": "4UaC3anH7nRQ7CoUXF4k1cEzRhxuu2w2pC99sXoy3dyVEc3rJzy3Ea5yQTRsPnYDLndCoTsYDs3zp4794rXBcQca",
  "key19": "28T9gnHgbSX7V8TkkBH9Cqwbph2ztHoUXd5wtsQnkZmFndbQ8XVwQnANQ5o1FBtA1QP6RhWKJj3pmvMZpr3WDBow",
  "key20": "4TcqFU5Q4tpYcL6XYkoadjp8x2k4HmsY4Qfi1cwvQ445fohVuCBTbEiBTfee1kHJV3W6xLnoTyeoEoBS8sm4Lmpf",
  "key21": "S6MiYmXFEEUzVncY6JF7Mi138oPmi5N4J86wtsuKv528cAZHW6azxz9py2c6a5p26oUzyK7cQ1hNZDvbEdQzNAd",
  "key22": "uS8QdhvBEJPn3dBCJNhD9G3A6PPNDR7WDaBnR1zo7oLUduH5a7N9rF7ZKmaDgCoSkH1CJCZmdsf982TBG98WwCf",
  "key23": "k6d3yRFNfKemWbXi8QCdG6Uj9MPQaYnhHWFHtNU1Q58X567kyvtNjHHmx4ZQgcPtxvnzCq19mXDVrxLDDXg92r5",
  "key24": "23AYtCy56x45n5aCiphbRbXbQEGi7Fxofx4xRKyMBcSNV8T5bk82vQwbEjVadxCqNqVsafcRkVNERZDHjYRoCRaC",
  "key25": "5QLALJdxuMAgQKw87TqBWYB88BpbZPKeLPNHhJtAEmT1Mz2zgLMFgtwhY8puWx4VLzmZFB1UAbnHYAkuANj5tVWb",
  "key26": "2SSf2XwMApq3yE6C5EnhpoKidYjhhBW8aFaDgBQTFXrbKSaLnp7RZncufaLzPnR2w6tsueXzVD8isHYXJK28KLnW",
  "key27": "3J6p4TiQ9z7fvg29qBDJ1voxzhYq8EL9PLmTgk2E8ta8vTgx1etiyDYotpKso5KjvMywhoqs5F8DBDy1qaatUFe9",
  "key28": "3uswfxMiWUazmhURdWEFZr7ds2BgWdArnyDwJmfxGGDYEtAnTAGjLxTTThCko3ftvevKkvDpg6zYDBsrenhfUYLr",
  "key29": "2K6VnaP6LtMMFQ2iyZg2jdYEjP6Am9idf3jzbbtUEuVje9rXrhozVpaXWH6Qu3VvgsSGGseUffMWvL4aKnXiJpax",
  "key30": "2PzJHjC71Nb2Axrivs69cW3F7n4ua7vjjKWsLPozim4NuKB442zD6ZtmtmFGq4tgZb2Z4ybBGirz8DLDrcFnirAK"
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
