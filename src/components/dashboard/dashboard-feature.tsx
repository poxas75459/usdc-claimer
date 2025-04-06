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
    "2dvMitbwSZPMuykYF1CqVWVGxyonsceXpsr9uwn8uBFyGjvYXnixzbRPGyHBb8sVPV7m3tQcuzji11yJEVVajXcZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A6iUdMGdH23WKc6R9YXpW7sPC87wDwuP3x7H8QZE77bbJKovtJWGz3v1Azs69cPkJpEPk4fZg74yaLCmdU8TNkf",
  "key1": "5Bq9o29GtPfbxqmmbo9aiHRaB4L3bVMG7WSYkjp467bSDEagKvysFMLdkLhDGjusmqrQJMj72LyUwyhMnu9JrKZq",
  "key2": "2v4pJy2q3d3fkANr9da2gtQRki4FgCUpLak96v9t5etXRzC2E2AjXWKnvFnYsA24A6Ywem7h2wAwn6iUY6GvHdPp",
  "key3": "4MXXVN8YYbhhzh8k9Z16nj1aErbZ3fY8aTtoGAD6SHqq3hkNQVKd3UCpFvuMvcMCpA6DFqZuD1oXmLs7jcpnT6Qs",
  "key4": "4bha7GzGYNZv55iF8VJBmMJDQGJENtQe14ouPtzuQynzxBFRzWzLNCiCBN3MS5scdLdVVZ3exP4Q75nRjD1nrhbG",
  "key5": "3QhUVFvDmcH6vDEnVXo1oLYh1PG8Sq6mtRbWrJdz1K3YmTMUhRDanoqGgfjEMhVwu7r8CyChMf26b6T5vDf3ZKAs",
  "key6": "zktRD6NT7kcALvaeLRBJJMU6PbwRfcNRVQ2LDX2fysB8d3RpGPqGrxbkWWuYJVibKnFS8crUaJn6CaLu8bQEypv",
  "key7": "4jyF8MuSTS9v3ZBzFM3TC651C9e6tL2s62nyJZkxgbHZi2qgontp1jpRuxF2rx8VCpFZ7gseSvaU8ug5JWFtutxC",
  "key8": "3Ejzi3Lyk1PfRM21Api4zy8qh6rcomwQFPecmxCpNVGdcnrhmHwFeCPoWPyWuzgXfu1ULtG7PL3Wq7AdPPMBVQQQ",
  "key9": "3hZf7qLYqXmdR6Kr2K9yZ4ZgbCE1HVbiTbtyq1LtGFKvP5iwqN8YYbQ8q1S5zWdtfrnz5DyYHREaogCmiW61v6TR",
  "key10": "28J1GYgQP5qwZK1RffBhP5NnVSQDCSAeo8DB9zoymFfbnmxadLkA2VUxFf6wKCmwNvgf1XCECfeWozApwjC6PWbd",
  "key11": "2z4mJ22R93K2XMD5pJL8uag1srZxKzPKaALKoVURgkUK1tmfpYDWrDJwHyjxzGvQZq2U5ESsyaSdwBVwaaTXJgdU",
  "key12": "5srAEnQAAhT7jSWGVtPo8H6qxkDw1mHkEoZZcHN1k2vLJBjWWgjjfMoWbaoPmpBoTDT9T5y1cBWyVKTyC2JHEeM9",
  "key13": "4o8gVGm9ALy5r9ViS2FdzqsAmtAcN24RRuPfFiuFhkN3EMKixk17YnmgD6qLX3eVvoCSUF76f5ik8PfaLjMFQYVU",
  "key14": "2hnpz8jmEtCLTAL2GsCagzc1X5XqxHtyfiyctfRu7Bn9ProXqkPFPsvKdiPiN2ZdQh79PtBfoFHFdJAjeB3Wnaau",
  "key15": "5SWxD8iT9P2YZR9HzjKtjwYbnxpuC4BPJNVyKuqhmkV1cP6hRrteGgJxpw5bWobNq2eh2y2xGTM5Fp4t7gPmxnGq",
  "key16": "om7MFfSswhFaREfoeaDtbGBAUC1prfZ1YfbPRYmfyVMEBpFkeWyhNcB2kyBRFVR4xZMaE84XLU5xrgZYVSyiKhA",
  "key17": "5HasqQ2rnMTsFFH5a8PEJxBzoCHi5E4uwd5VaLb9YMKZYTXHRWP7zMdeGpMbo6XGdztUP7PQRV9UaS6yr11QqtgP",
  "key18": "5fAY8xs1ZTYtsy5S3QYTJMGGhbGGUDXs9kEqQSuera9Mwb2ygA9Y4v4cbDFRbpFPHpjE6fXwGJZy55bozB2xCGS4",
  "key19": "5vBd3pY6Lp1C1J3xS7rcW4gMcSCkabAfAKhPsJqK1aKSSBqrgQhGcEPMnDQjQZMHRS9kwf6jMZQ72ZLcUVUpY3Xi",
  "key20": "2Yo9F3tHc5fQeMnu8b4ptzGDb5oUhFsA2grU1sGMVKQmLM3a1h27xzXVx9gnpWrWbd1hvhrJaqupZAv4aWEPbnMU",
  "key21": "3gJw3PhysoUTrnhY3AWEWXCgqvAF8PpzJmKyeKSeUPWVQ4bYUanqSp4PtmCLrfr5Tr7bq2Y6WF2yQz8DVEKczL6T",
  "key22": "2pNyVKwofSTzWNUH4hwKGpaAM1SjUYn4ekjkFaHyMenTNbJyGnxqo1EpHdxAkVgnExbLkBUC2X673Lx8xFSumfpj",
  "key23": "5qFoV8wkg2abUen6q2RjTeor4SJ1auSkFesVJfFkne7EYXimiCXGqVvGEaDGfpPKmw8UVwLzGCx4wU8nGcYJcYH",
  "key24": "5vPPqmEdTsRSKg2RtbgRUmLxuyK9i59pmPvBYLAYFKxizRT5nfQUZX3AM3aEaZ3E8XcBd5bT7cqkqshcTd29KLxy",
  "key25": "xNoRQ7jHnv1QpR9jFwf7tUUWvYpm3qSfxpCPq8h2Kji11r3wzQwLGC5t1L3vFEgUpowNmgi1UaVfxFLRLGUsVUn",
  "key26": "wDSZNotvqh9qdsc4tGMU22hr2k3uoDczBPLzgTfRca4mwsLp9FRGAJJqWM7BNTY1oMpPvZ3GYpMre4kkL9WQf6Q",
  "key27": "47piDp8HdWn4efZS5SK4VFXsNLxrsLZCJdSFKaHBVgJ7jQBxVLHtBCsxdH6akhZ6ZPiqy8YmNm6T7J3ZAinMV85A",
  "key28": "4WL3Hf2y1oxP78YpiYRNZWgyq8J7rCp8wjJYppEaqMykDE6BZ4w93zFN9oa6rVbVes64RKwJWFXkh8bMXSJX8nCX",
  "key29": "4g2cUCbLMR7245GxV7RiS6LQbgTEDdrqu8ToSZ8isustyt5YPAAZLVKeW3cvemLSVKburuM68eH8jCKu2U9qq1wL",
  "key30": "3XFUooX2LpEyAcm5UNtBUxNM2B54Kh5Fm5SnMwAc7wZKGScaH3z7Zui5iGLR5AdW2xd6k5XocPyFa1wiqE14hPq5",
  "key31": "3NH1jRkcMbf1ZZj5fcXBom5HfcJiJCTmb2ZPbXjVjKhVufLZpyU5xVVfeCqGMiTDDGB939FAaShVjG1rUdy5EiX",
  "key32": "31iMbcEPnjA4yFUhZZnAPQBiqebB137yByKgbFquPEPghyU2A3sZmGgqT3EF47nbDz99uwBpSuaxL5RvTaZHuU74",
  "key33": "4tGzMRbZpMKdnv8T5MGrhXU4VB8PC4V6ceDK3TGRpzygorT2sZrGQFXqEJ9bT3a26S9zKruYbea6yhLMNkqeLsmM",
  "key34": "2cvmGvWdXy7mKhKWbYWTj7vvZt9Lasb3GngjXBkaF2DpmhfbWmDBr3ynUzS2aomtEzuiJWyRHvNcgPBGLFfRZ2dk",
  "key35": "ZJ4KccZdhqbDNqJrYzxwhugqcWjbLeXDvPhuunjJEgo5WPbZ3WBCceEYUE6jBfbUcwBB1q7JDe4NBm6vJX8R95G",
  "key36": "4nmP9DSictRjptkuLNArBWBNxjDvnXGGGr5WingBNJk3LbPJYK4Qxh7xPnR6Zyb7sibvvgPS5HDkpWmtL6zGfVXh",
  "key37": "2aWtu6zyECdTqJecgddHP2KSof94JXCFL4qTUTYKAkojZBMYaS5oPpQZ3fQS3NJy7hMnLfh51xgfaBfoQFPYPRis"
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
