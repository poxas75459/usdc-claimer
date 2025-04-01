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
    "2KehSvDPTui68msnZsWpMVk2rxEp2BY1LP4UE2qUx7SRBsyYqmfbVEbGGXEb3TjxMMGW2W9cZNB2qFSxsVM5bn1F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nspqaM98fxqG8iDA4HNT8C9kD9iaXNHHkXL2vE2DnSs8yq8KvpLbbdcNxhzsuwYTAYoiFD3zg4FxupD5qptzLEA",
  "key1": "38C6dee9hFeoZpFSsxch7bpM349ZrVSvNhj7K7mmWjUvFz5hJPJUTTnY73qzUi1wLUYGZ6gQDSdVKUx2fJSwh54p",
  "key2": "3YGU6PyQhS2vR964bkLmye7crQNe63FjWdDavKxvfiKdTR7woCfvLKoT1bQodLhPUfKFDPu9BTDFfUy3gXj1W6tf",
  "key3": "2xqaAqyezT1ZwNwCxJGfYRLTUQnUqPamXZz9GBhbWNSbKBXijyB9u7g2M1ZDUTUZpzPpfuVHpBQj3iLsX5utSAhN",
  "key4": "65HbCznwAciXSgbrf5kbc4umbqPKBZqeRnr7ffGBMxCdkFzPVcpcJZmCY9CmEZcuj4eSrvfo24A1eNTvueUzw4z9",
  "key5": "2yMwaDX2CUUC31C8NXLJGG13CZyXwHXQMaCgg1Ku8mnxJYMQrPwb1aMiKwAe6HcM4ghaGsacwvtUrkF3QHPMqXXY",
  "key6": "2Zte2cEnZnq5GuRv5CP2QuBWo6aPjwEeQ49XwcsPiwHLm3A4jYFXMiViNtTafbSPt6b2AGEwPB85Y3dzXbebFknK",
  "key7": "2xNJENNDgjqLbqj5u3crzqbJ8C7MNvq6xaE5jYpShEV86ohK94cQw937bcXu5u8wX4wyTv7rjL2aqTqE6zBmKcgd",
  "key8": "RbWaSLGaH3fqKCktPgfEuGYcvgt1uJrMLD1gQdkfggjJF9iNGsE3h2RyHj6EYxfH7cBpFrm21NYKRdMWHUJyysL",
  "key9": "3dXqn8dRF481p89VVQgAoCBEDznqj3ig5UFgJ4e2zUC84VhPok4RQ68TJqkXduLnEE7ACTmFcHWQAJii1uffsJVs",
  "key10": "LAybRtPCXm5d6GyGaGMkXnJyAWkugaLgWGZZDRc9ur421QN1SAgtbmGnd1QmRTK8zVh9GS6VZfA1wGKHy8CHZGB",
  "key11": "mJwHFe5QUKTCeQgLQ8jyKWBmrSkmzByZVvzhoE6YuycaUK73LDYGbyrQVe9fZj1YvHadaBwmJN4n17RvmAgqShd",
  "key12": "4jsJ6VjsfCFmYM8Z4hRdA8FjNaegbKDFe8mBecxjymJ8TvidqsKiMVPsHQbeiLrmHkYma2GE2yq8ncP5GBmDPcJG",
  "key13": "4e2F8Sq37atzRZtBGCRhMK1L4qjWF9pBtmC66rRgjVvyVZhzrzriQU9uvLZypT14x5RGra2wncENCTmAjECbDzCL",
  "key14": "2ioic7u2f8hF8V4K3ztYv63tWnm1w8cQMZE4eqJMcWM8HWjy6S9agiT7q1Q3mzkvwAGyngxDt49GB45vBeYC9ksA",
  "key15": "5dui3mFXo7i99cjoy2r8a3SjYZcSZ8Sv7qnW6H4AaetNNzLP5enQr5BnqKFZppL7kBTLRWbx8m8UxfCMJ4esg7FD",
  "key16": "2aMhg987WfAMYUbh7RzYTbADxJAaQmZKkYtaq4puNprUWrLPyAYvZe9H3gEMajEfvj8anRZ5dSnV6JDW4GVyeCGc",
  "key17": "4JY8nK591TzzDFNJV87u9vNBNgMw278fdaE4q1RUMGyKpCEMPAbrp9gkVcDLzCggsLEM7cXyCKgJKaD5HQQMaZ69",
  "key18": "EnigwiYeCwCfwoamoy2P93wzVVKaBWBKQjVkhHJniYKfAQ8vEjujzT854z3KZQxhcbF1dJibHL3XkEpYPnnH7Gy",
  "key19": "23tQvnsPX5ruedqQkXAbho1oBFrBWNpemQvUprU4HuNh27qdvbc2gp5VApnLvkrs98XbhADuqhi3Gni9czVvgwDJ",
  "key20": "24WwdvqzhG4J4ZkS3gJR7DftPvZRLjeMKrG6gC6FNsMDB5tzfqS7tHEYMjDvYYNzcwJv5XQvV5N9uvv4cgQAbnWS",
  "key21": "2p25N6KxYqUq1bYzonZxTbUNGd31ApD8KAqfyLPdW5Xeu2NsUQTvUpiEjhEWHbQf2S9HAoU66ooDMi4pbhiZjnwT",
  "key22": "48ErhPRoTTbSrfLm8yKB3rVWBoAfWpeCTvYDxuhJGPzo87AFoRGXou9SNzJFV2hHuCnxUMB4oUV1nFDBuq7xoAt4",
  "key23": "nzwv9HQVnujayux4w3uN8vRjw9Fyk9z77WKaTMsz54gT366VBbYSSA3wbJ6siGjCNDq6BtgEdELvJdemc5xAgYE",
  "key24": "otbYH3YjErtTo2My5LNmixjv3SY7AFaohgmBBxJjd7T6kiLJu86WBN1wgBjAGAq7MAd4v5sWr1f8HuCH4rE1X4R",
  "key25": "2qzeJ7XsTxEocwPRdUBrQGMG97DLmKoAMtLGh7EiXhharuCU6QNEsKpYXhzaTfkQqHW9zqaqqvkvBbLSFSvud4dU",
  "key26": "4JV1xThs5mMHpMWkMB7apnRNhqxXj9Pp1Dis7xWaaHpfgSheVd7AW8N1nFRsSpuEF75XQybv9LgRKJX3xftRpEUD"
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
