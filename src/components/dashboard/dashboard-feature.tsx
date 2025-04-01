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
    "4CntGGKCAwRnndAFpUuZscEv42nWHZcq4Bd8vVcke46p4hTKgevdjmvbLrfcAMQNsV1WkymCy1Hn3WvcXvjZ9RXh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KnmoHtLPNgyBFkag9yymwSqi5Fp5R3oYKxA4V5XKnmubEU8WiBWjmT6j2jSCc6AK3ueHA9gSpePs3qZKvPGgrG2",
  "key1": "4BScfRpe5CKMGESsYPWwGCcugDR34MpyTpj1EEdxoKuTaG25rpzt3hBQfGpFjRQLEPXpbeKWbzRfwiRsrNPSnRAD",
  "key2": "257rzNXdgVnKVdfNtZy4yxEBQ32uSu1KxTtY1wxSqSVKmCvD9wgDVbvrrZYcv2mky1CVVt3XNziFKKk2tsSfjvQ5",
  "key3": "2dA4NcEZonsW6k3yEicxVzdehgANEtSpMGTFT1hUD26PjRBAoex1qKmyPw8V8ExM7jM7LisjbJbykKopww2cJRCm",
  "key4": "4s1Hid7NKqaKKWQqztB912rC3fKbVv2x8hp8fQcbfbLYDtcR9ywDXLYwDw3VQxRRrftu6Py2dtnqqdTQziYVrEcC",
  "key5": "539vepETpgzGDGxhpFetSXatQpxqmppqjqA8MUoN8RWfYES6oQFX6g8fkUZzKBpN3Ng7LCZfXqxhHhUjqGcFdTQd",
  "key6": "33kLPhy2YPJwXrL8M8DdDP8oRzW5dhfAuk7DH5ZPRccPhrTxTubwQ1y8RrnKjARZp3oTGkGCuGwjdUZbNpYHyUnA",
  "key7": "5fZuqv2SVqrKRosP4j7fRyxqSHNYELuYGtUQw6rma1SRrwj1K3oNfq8PH5rFRfQUbuXf9dxCUVhLvc3ugjL34FMY",
  "key8": "2eJsUwQ29yP1uZUeoj1WSspQZkV9x3iP5gteb7aLgEKmfjXRaytJQB75iybBnVycwnizYCsYJAgCnymyXVT7G39d",
  "key9": "3WiSBvJ8czQ6ZV3t9dPELJkY5TpEN3Y6CDrJRyCFW25BiuVRYyj6wfpudtPEeUbk47BoMY3SbgjevDeu9AXusuS3",
  "key10": "2nmzikb6Z8AA8NLikykTNiHK9bagdQfdKLM3xNuWb6suyPyF4MhU1jAuSUK8Q43hLmeXqLV5PUSPF4o3jXac4q5F",
  "key11": "swAPLxSkjxwrvJx4VT48mL1HwA38GsudzdFNgduhYk9ZS8Pyxpb7E3R9hbN3C84LS76fwoBV6GCgcQ1jncMPzro",
  "key12": "3XXCnqYpVQX4koYjBnXtanDzH8bEddE6pjfBkjKJAVo7v6gtjviKX5yxVN73axZdPSL1nVjWBLc7xHD33y2VgjDA",
  "key13": "KEs7UsQjL4J1ZZXjQiYfDb4r8c758hhB7yKH7F6WznYqm7b6U2pFYwhyEYRsejTg8dA3yrG5kuUreZ9LnANEpaC",
  "key14": "2gVbiUjge6QwUwop9mC33zrxm4CZoXd2j4D2ijmcvsq1nm8uuf1Z8pzHuvd58oaMgyo2YqiSBrvix7hSpTQXfAVt",
  "key15": "4irfvg5Psx2hVyF4bm8QFE5nwBGaBoNrtoddZNJPDFmq8UVZ2QBKC79nz7Qtvh74kZfNXp85t8ceNMJBZbHBW9Nu",
  "key16": "twgMBoV9pkXTE79HnfMz1SFe4bZwo3e5sf5vq6G3nyjUkfyep2drZqu4nkDjwMBZV4StV1g4inf6cytEzwdQLTH",
  "key17": "4KChTxgQBDN2SdvmWqNNHoor75sn952Magf1JMczFtmXobdBQrxgrzrdyt43X8475RDBH4CjfjcST2V8mUK9Cpj3",
  "key18": "4ignoHbCXDs25xG37YUpwSZamJNor6wS9UVcApLnV6coJaiuDgmY4Tob8rWK5wtKfA4pxxF86p8vJ7hCMQTHK6CS",
  "key19": "4jtNuxZ4uBdNGEQC4vdgu2LehuPeLj7uTptfrBtVQonJN1JfSrfDnC81pPr8dBQPPXL2PNu75XDAyoVhyUu5m3cT",
  "key20": "5T1pNRnaR3o32jdvddNzvS8UtMu8ihV7HNpeM4kbmj1DsgrwC1w6AHyXfVBphTjAiQm9T9CyAZmrTwtZMfpf5ej6",
  "key21": "qrHZ6CnugjLnkaEpEdmg6LVLL2iLeUFdMi37TXoj562LLs9qbnZVbif8oLy6BGs4LQDa4w1Ro1Wdb6R7e7iEcJ4",
  "key22": "5s3ssYRkUvRDggggKecvrjnTUjGj7jivh8cRc7m3hrmFwDnRQbtkzDsZQbPJPScaDZWmEaavM6zsjuoLG2UWdgvK",
  "key23": "4xLgHFcVfrz2MKEdrSgTdvah9iedc3VNoBDAjc8S9qGGkekqz1zyp8AmSf13JPatFeZHv2CuiaKpsLoHULsGHr5Z",
  "key24": "3yKTauSraZ14C93PZNz1KzHLV9gwgmjgNvnZZViEhZ3PCWXoYtNvkmA63DfeTYVZPQQHco5Rmn4DCAx4JCmE5SaY",
  "key25": "31Dud7Fj4ioBjpr8CmPMXLQnQ42Ef76SxjA3H3P4oYR5b9PWVgXbn4YhkAmkBsoD2fNyic3ax7mxqBqeZGDUBHX3",
  "key26": "2FHnQhDsz32NfedVZHukFLrh5pd2FhJ4FQ5aQcHAKmHDsAcQkENUxD89rUHW9SCxozW1cbQX4sfp1z8TWZRJDGvv",
  "key27": "3HMt6p5ivUdbByVkuQeXaT6s85QsPPoxVebhrfNTm3P2F6tWd4DaPWUPHn21mxjiPwS9egcsUeiLXE9rN7BU1NRa",
  "key28": "BXgYFA2YnwGVouS122ZrpPUPVew6Ddyje9tzPrjgMnM3hQ5F5vFc123BQa9BLVkECZHKacqrVFYHuAJJSV9cnPg",
  "key29": "2f2eN6nwMSPzVFPPEDtVcEBXbJ6Amueiw6fJdCxdGeQNX6rtMBjJeTtxsyk6szqWJuCNCgMX6KTg7LFhg9NHaFUq",
  "key30": "tUSB7aCaL93eBcz75RgdqKxiE5CEvnhKo3NA97ucmT7nLJDHfE7tccwFDfEKLFn2KzLNmPkjtUzQM3CAV6McR7t",
  "key31": "5cthZwzZbG3PXxD5GVEwDBFsg5TFmizkHpBCoeVtwJVAMdzXGwEpoqB58GLhv8nSRM7xvMoE5dxXDk8zf5xiYLdM",
  "key32": "5LnfUMJEFXtePBWvrTfkUQUQAEhQ5hq5ZW2vM78oNH2ZhAfniHSeSSo19a2EFGsTDYdDJ6uuMM48eoWZtJGFJJXg",
  "key33": "5eJfj26zq7jgwzMKB4MKbPKVTeqgrBxcZbSMizeXXSjQ5xL9YWL2eozW8eGH9yza7MkATNGDbAhAdcUrRRje3Ud1",
  "key34": "4KN3nSxuwhMgZL3cFv2iencn22V4jzmNTVembvsJvg7F9RywVoqYYLansFtFSgnfNBxD8jAFYbpit5juSLmHjvuG",
  "key35": "4wh8pDA4TMSveqWa5weqCJUKp72N81W41583a6rw6StDsti17zWXwpLn5ZsVzHQyprynS3XvsREo5axiamW8Jy5b",
  "key36": "wGUeaskMe4rxeSw4U7QTLZU15uQqHQKmH5GNSj7tY7FxYgFtYF5yeN59Bh9R41xfK7zvRpDeJHG1DJnY6xoWokx"
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
