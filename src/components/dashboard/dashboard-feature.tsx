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
    "Ge4zkH4XW9QJ7zen72GSrDuyNtdzFwMczXCzHRbHoc1kgpjW5EFCP9by14DVYBnmZMboveArBLMkeP92mwNKWCd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "397ckY5P4GoSTGw2edKrMEnFimK1j2RDyAYKArAG4wBtnv6KMyHj4ZXPD7w4yVXdGrHnQsc1an3jP8vSQr6RgJx4",
  "key1": "3opSxWk65fhVfVmNnEVndq6RavhxtnGGtGA2ZfeFr1Wh4oLoiLgyWmCyEcT7afrAMBNYj7Q9NkQMH2EKu5y5hgXZ",
  "key2": "5ofp55v7NFhsVwFTbGeySeMAY4a6MaU3enDnajYNiW2oLZvGwarxnmhyTKi2tDdoiLJFcKxicPoisUpUvdvUNL4Y",
  "key3": "3Bqd5rmoXm7R2oYi4n3mSxdeGLPdM41LagJRJWcutwUxtpRqQYE4qQAVUTpTNRGCkCCRxXvGe6Ss9cSbrQ3MgWw",
  "key4": "Wp3pC4XJwQeC1YgQZd9MdkcWFVYsXs4Lu7iTjMpNq62dvwGFaQj9fYKpNdbJnDWWSe2FATB8Ujdmn5WDkXv4jUP",
  "key5": "66pRLESJK8efnhe3vPK95mEu75zEZs37iAeosHBswKo4v741P4CRcU5cYMVsSyYsV8peeSF76yyqNTXbNBxT4ape",
  "key6": "59HEhemAjzoJ61CYieMwhJ1nuhchtjYSWNGGMZ4fdaSQ4pSnPrDujYkCUSPgk5ejyvFzhLCyv9zN9aCGHEK2tNgU",
  "key7": "LGFfZCGiAXUKdhXiVJSKFwJQ3dSbhTvMj5zLKUh67JyjheyaQXWaEhYvHmkB5ayEMALYAmdhXLA3quMb7hGUTLb",
  "key8": "4pNmTUjE9yLGCCoMM3RQ73ELV9318jo4sXvQmhyFfVyzLKsp68DeRjT9kYxSv5qdgtKmQJvNzqHD34dxXwwYsucF",
  "key9": "78UM3XT6CbBzt1gNXtAGyfbHnuwcPkbSBL5rzsY61tCTvVzPBEQYTWwQCrHnxVJPfaxthDU6jHRGLV8Wju4o1bs",
  "key10": "52STTmfxuv2F4nU7LhQ9Wk6QYRuTiB5fUopXi2dnkVdvYAd5TxhDEVNwLWGahAHYH84peGLaD1nDjor3fUHCHAd4",
  "key11": "4vA6oxfowQdZNtnp5tnzf4ejhZEoyTukZBPc37SYiAE2A7Cgzs9aFvBmaDWUP1tkshvD3HPqUY3NzNTYsKNoavP7",
  "key12": "3g5Kb1P4nkH9BqRtahTJf8DHKFYAXGrDCVybsewy3RPE3aoxQuWrfBTZ639h8kttJ9UsHng4KFNWsu5Rd8Hxsv8p",
  "key13": "36yUjy7N1DEHC4iavgrCadKfRY3DRvsMBNyg5FvtDmfYTqRb6c7MoDdSZmpDZr1j2dczDiC6Zj8HmzWtrbkZq9NA",
  "key14": "2rLSij4tZ7T6hgGQGUKw9woabRFnrSDBNqjuUW9tadVm9RM6yP5zz2oc9jEE6FGGKoiu5eteq98RTeJZHWzArpw6",
  "key15": "3rGtFnqBdpHFZoo34o2jFytiudrN8Cp7LEib1tNLaZivQDdjFYH7vVY7Fa6BQLm1GkcdeEHTovuR2tmzYqdsd3cy",
  "key16": "3pXaCWZoZGbuMMga8otfLoALbS7D27Xwhe6cDDor6fxDfUN7oDbnb5oC9m76epgdkC2fFmUNgxBTk6tnwSLZH7Z",
  "key17": "5ySnPSFrb88YY1Wox12ChnrBC991c7sxCEVSHucXtgUWvUrjHabbQzwZ3s133ZMz66mLLnxqg3dWcft57wwpdmgg",
  "key18": "4pScv3UCWBtuqJpaKQ95j1mLWU3G7dne5qvnrxBDYbRd6i62jNrjUMLKV2gmNENh9g42pP3neA9wkAKCSoJuQ8u8",
  "key19": "2HMg9H6XAnRMe77wuYPtMVeoyja1sXgkpDP57oh6U1twaDYMqL1MzMMyrpdkPW8UNePJbP7TShr8gSS8jEF4jPLi",
  "key20": "4YFsTPsNfEzj2B9jkKKmpMK9tboeCCShWszYnEy3GsqsKut55v7RtTyUzvcSCbVrz2YK7ehzKjszZSe1uj5vVQJ5",
  "key21": "5ssq4SD8f8UBYZRg7GQ4nyeAGRXAKnogibBP7wo6DBWYD32uoF3vLZNzovQ64zir5xRkmBVDPfo6yFxiu2st9xz7",
  "key22": "5LSmWF2cGCXgfLP4DZfTGu28VhVWu2cTPNCAku1AwgjHy9WiV1zHxWpQTtMKQA1J42m9nxmfthMrV8ghijsMPs4Y",
  "key23": "3JVGQbd1E96nPWEPgLBGmoWTNHF3R5WRFMq2jaN7gfoKtsbHthKbNu9PqE8infr5mKr8DxVWTapAQhpF5M9JsdKC",
  "key24": "2ovDME96b2DrkwxHtCN1cNEoX4fWhJUbs4Qzj2fbMs15vyraAeh7D7h4TnW4TcNTHfu86W3uwbSkvUpWLXAfkYVq",
  "key25": "4DiqZmGooZjZXraGhyDw6JTR9fKb3LfoZ7sSC3Acfw8gFwmjHhBdcj6tdU5KvqBhhJjbWKJBFJPo4gQv52SMQy28",
  "key26": "33TdC4TFUNE6MGcXVcV88vykpVWu8ewFxX55H8ohUYypaif4mWZxFsgMZc9ePVsV6SGNd3DyDNES8CmWvFVsPWFh",
  "key27": "3G1adKBfw4qGWuZcTaj3sBYyj9Kt8uZB2U3oFDh1iecWjGugRnmMkuY3TTHDq5mnazm4gW1qyJLCxVSZx62kwe1E",
  "key28": "2x9fwxjvuRoZ37B6ekz8VDRMeT9yytRym5mV5nDPKBJVp5DtMkwSWXonM1HrXfyWZFfeUxhpFYBQWjXGhwcbHzBJ",
  "key29": "4qPHPKeuHKvhWCsvNZebXXfwQoTTGGHNwXaMfzb3wfEd6ZvZqTvLPBYs7jZ1kZ1Jw3oh1encBowCWYNJigSV9ZUh",
  "key30": "2ZvTVrPbxgGms9iLZ7XuSHmy9ybS9EgiokskkuppmFkyj6JNY74nNm3gvmnAymhhq7LQXxbwwcvzURpZKXXXuweK",
  "key31": "482zaaYuaRH77vPK4Q52uijAY4euJckzXhHtFqNJZVKHUqTAPgGQ4VyY1QyK21cDhHLSJ4FqtPUEQbz3naZAPJn9",
  "key32": "2cQpkrCBBD79bfAQyrm79RPRjRSj1wRJ83X8ieDEYUVBJ2KtPjnZqcDBNzHyG9sf1CEg4KPmpHV9qY1ebwZMH7EX",
  "key33": "4WwNcBcZxr1Pqiii2VhXK26fivCpbc3B4SVNZ64TAJJVrThndipRLwK1PepGgcsypQhhEvbRLNrBvZUGcrnEd2di",
  "key34": "33XgQEXrBXpd1cFNypXiB4B9VVeaN258Kxq2zts1ivTKWzJx75jzZChbaKd1ESjCz34k9WaLKoKLG5XSLRNPfmBY",
  "key35": "39L6SBhVfX98U4nEnNTBsg7qTGYLWs7x7jroQfzcCSKB8bcnKHevDFYhHUiDVNECjgsou8QkQ6uasYEr8wvfV8yB",
  "key36": "kPyHrKSS9AXqMKA5G6kzVSPLcXVWqk7mH6egMMbzk4CAPsj71hisnozNH3oJesrtmnURYze3gcu2cHhuVyLB8nE",
  "key37": "4F1cgd7vbCribaKFS9reg57EewniTiCfmMhp31xY3tCwZgVQZbxtBMnQZgq3i7MEP8LRWpjmH4iwZxSkEM8G3z9G",
  "key38": "yYpkCswiSZA2ZoAs1xRvfXvPATfmHbRQdWNYcEhYd5thX1TVxYLdf5zVUJdS8MoXZpfMFHGKMQnCpupJaeyDB8c",
  "key39": "5SyDX3zA2RAXrvuWBec8bwip5LxLLaRAqYfxidoayRq3QoYWSxJrEPm3do5TfAbD4p418ThabHjGZPgKzbuuHywN",
  "key40": "9mufdF4JmHNUybDsxgH74VL4LL6s53Me1Deah2yBa1P4BvN5NrTARc1hdKmuC4L4BcdEhEdZg1BSJTrm4vMD8HS",
  "key41": "4XxoHVtTV6EVSTRQnKidZkr8asrxpYvLAUcCnT9N4btjyshuf66VAXe4sXCeiKgxoptK912DvWJgEaRv3QCjFGRV"
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
