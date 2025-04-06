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
    "3zQXznFihADNmV4hccRvq6SPg7GyJW78LaKnZZfpAqJK8CRhUmgktQbW9HKyNUzF9hBwaTQKVbiUq2fWZznLdeNC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qR461HbiJqfUmib4R3wGQ9KtY1r9UriWth4YuvEGGf4znq8qorgYPhPPs3HqBsD6gWYpDDtRJd4JTgQBmHkmqmf",
  "key1": "363BDsF6bdQL4fsKTqpPBAYwV1MX3TKcWsgX55GFYPocgZjzfGF9YGePant1PCrnyHMTUe6zbMWESK1dsKKvQHNg",
  "key2": "39DR14FmHftkEr8G7BthjvQpsMs2pQB39akC9bskH11W5ovx3TxWi2NGCggirNRhdPPMev9vdrZU2ND381zDbXQf",
  "key3": "4MyoGn4kQS5YEusv4qJTkt8Jhocw1a5Ch79aZdGp2JD7fx5TghqAf54PgP4Sgg2JmpQ6XS8uC1M7yC4XzZWewjqS",
  "key4": "5acoPknRxtbCW69w5NhQb8vEvUwrCGuMoDCn8wvYA9XjGAA3EqVHnZw5JN45cz6fhyEYHB2cp1saYstMWAR2ZdyL",
  "key5": "62WGqPfYKBhQ3nbPaYgQ9Zy8jHL6MkTSntmTy3S9usmgLhKbxWCwqAqGnb5DV5KgSNaH6pxY2X3igwfHaCyV3nG2",
  "key6": "3yEp2ogQ7Mob51w3h7Ca9fgpwrotLp41Uw9bCXZjHP7WzZcg8yz2paRguwjDxGeHALhAHWNkaQiht7yQtzt9rqKU",
  "key7": "4ynvn5EUJPLr7as7mkC9WtuPTxEnry9pXNnF1VFwvW1zJ4CG4H7LD3HVJCQ7EMbNNaCtSL9PQ6W6FkY3YDn39fvc",
  "key8": "3ipyquJgDVgWEZ1CXaj3a97eZLQfvogY3mjzLioRisJj2goMKrxYord11zKMnoWuizKqfWXWLFdFa2GymLvW9k3v",
  "key9": "FDCDpeAkUyazTirsL1Z9Gqaq4bJ9sn5AB3Ky4sA3nTzfmUPiFNeobmoTG2FZpGbXGuLbGb3SdZeuKkHfqC8jYxw",
  "key10": "4UXJDn1NWvBcrdj4jyMbZ1w9GSYWzGfCnyNAvC1u5Gpo2hEvQgbSzQvEH2wKxXdiY3bmt8xZGYscGKmyH6jtzraT",
  "key11": "4emBwF9s1f8bqLBJF6vb5H3PUf4LyFNhmR1mZN2rCH3n9W6Xz18gULb8HGjHNwvASFW61tydmP1PboU6Tf3ZWPvr",
  "key12": "rShp5BVpwFcroBknAwMTsv3NQjPhABdqvUpy3VjmeU1BJhm5d3XYGVcG9efJ8fD4rExrjbqJNtjzKqmkQUhJbPm",
  "key13": "5V2greS5cNuThkYR7J1jFLLect1kMfrPhTNLNNhPrtLS4yDccL15kx4ZeNPNioZQ8MqCTEGBgqSJ34qGgyTHPkyC",
  "key14": "PCeQQ6QLh5zTuRWgssmFSewFYWCKJwtCKPPWYhfCv3QZKTtccVTymZULM49cRffB7QxcqNJNt9Mrg4N3XYfvRbU",
  "key15": "3fAJDmZ9z3tf5F7Dw9CXDyc7yUKeFqYxU7iKS1E4AHDTJKQ7eq9SAFsUSgDymU3kH26HuycvsVg5pZbX2SRZVUBH",
  "key16": "4GGTaexfqrdvpM1dgZHD6YSqg9gtrWayxR9iLcM5mTGJTeFYzHehK7sUML9KEt5srJqdsAG7ADVFMsuekYQoqvtW",
  "key17": "3HJgm2CoyWzwRW2ToQHnJoay2GX53doR6Qkcf4A7dKMxYnbEPQXm9pBFsjAcZP5xZRDmFcQ8df4vK4xPkXc6GVYU",
  "key18": "5Sj2vKSD8KreVmcdCUcrf8mozjLp2Xs3ZLqwD15n2s1yYMnqPvDNtBVxpTFerJdedvXHfuHV8Y9Uin2Mab9zTNcb",
  "key19": "3mQr35wmoF9C7Hx2Nu5hg3ia44JmKCZuNJdT3oT9icTVuKJgzQPHvUH4UyyaGSdFP1Tt4o8EgEeKeTLJLhup6zAA",
  "key20": "2wsui4ivTStf5mQMaEnfKLUtVr9gXQzci7rKwPYQWLafE9ZAZhGVJXJUvGwFyUjVQN9YPtHZPHSG4vg5nWKd4aX",
  "key21": "3KwHpVytP797jmdMFdhShkPxSkZ69KgMXxZVAZyYVnBYXDbQ8zhgqWpzSFUm8zqpWLECvHZiWcYtCEr6gLQmXvoj",
  "key22": "Ufir2YoMNhDFWWRgBnhfPELXLJr9Z7Kwehd9PfVx8joPzrGQcEGKKzJwHazHqEBfMF6hvUqeDBQv9X3PPE7WpJC",
  "key23": "2derkUhYunN5WzAEunfu2iE5zFkLUXbVYr8rE8EoD2Z7oVWFwofVPLnPD8tq1PTgJTCGK8CEZQNhMNhzXfVaBXpe",
  "key24": "5AWBk8Vr8UYxKgFUxmeBMXbs7iCnUbTAqdSBCxM8xge2TCwYKiNLegLgHbqL3KnLLJ1MReox9d5BFPJtEtJsTYE8",
  "key25": "36TTF5NctLXRzqLTdgwPbpdp6thHDe6LKNtVaxY4K9d4bkjgshxd4w3jtQwhEYTzeyNo2t7GDT35ZXLNue8BARac",
  "key26": "2DDFrVbiHHSWm9XzPbLLBdjwHkEEUUGNc7B9ANBsGXUVEvXw1dnbXwgYnYCKHEaysGtnpwXxGKimEguJc1aXzG1W",
  "key27": "3NHS3suveiTSutfDmsp3zvEtUmcvduzE7AMv4UN2s3bHhPqzeb5jWLruv2DXZYqF9FHw3pMGtpmDvPVWcY9FCEBn",
  "key28": "2J8bPbbUZLTUiUau9woyeQEpnoTwbpHbucRzmAT5Kv2SWq7ticxruN6Rb9B13SXujNwQkfwPjoWSxBjNrJp1d1p7",
  "key29": "5gmYd1ESpiMWEhkJxXJjcyNwhmYXCVg1uwaWG7vp6U2rP9auVhZVCSqxBTjNKUTQUh1wtZJDvKv9LWiSTLoGcWwv",
  "key30": "58L4fwGWjDMVu1nXHtFRSYpUeCgn7ArLfKZvrFxoBqBXvDuN2mvNJQWzau4UTDnQPhnF5bTkyZcwYMNSTPhVd7gf",
  "key31": "5P44BGsVoHDgy7n2aVMC5Qn1ZULNvQj97Dsokr95WRLy4op3GXtHG7FT9kJ7gmbMDCs6BMyhRXsAwsrqkjpZzMHh",
  "key32": "9J4uB5LHhhy8WiqMqZBE4RaKsT7bPkrAXzvKJ8ZEbfhkNwLp5LdNcFoWGtDL7F9YB6HcPhp7oLhhpk7YMgKzgJL",
  "key33": "cscpDiyNpuvZEg6wAHKRie1iZPjEg3M4CqSZ4LuPhZ8etvNmEbGsp86MFqqZXHdHrpCr4CSttmLimc3ZMgLVQYT",
  "key34": "GP1hpgNKAx9JjEZujb8Y2wXJAwGe2wXYV2XKoxAGBToZMKmLdJKjCSMKxm67ne4R6ebPoGg8nzFRHrQqShvLpCe",
  "key35": "3Q7LLZWoSL3QpQvcwEMtGc4zG3fWfSv8jJkR4wS68YF4xpzre5hSpZpXfqDEr1DE6fHjwZaLJTKjuxiepuR4EdqN",
  "key36": "3QdUiGbf7V18X3XVPYFmNp5CvWS4FwXQbasUB4Ucv3NMmWkAWBaiT8heNujFxnP33G7DxiRtx8tyiwotRE87WHhK",
  "key37": "2TVSH8FHdF9tUv4kZQf4Ncgeh5WYgSpsoboZHPTCLCfNpwrkoDzrLW5qTH6NtUkyg6FR2ZU8hvXpbjKi8qyzgoku",
  "key38": "YBykLPTENecxTLnzx9HdFPphdbhRfSn71UhkqN4cF6Y6vSAfmmnbMu2s5xXnQMt228LgA9vTvSTZ971KnNipzyj",
  "key39": "3tUeDRtTYZoaMirYnWT8QMBMZTAuV7dqo8u472SHzR3CzYNsMt8Je78yg9gsgqokPCu964wciUb2kgsBSK3AF9Vh",
  "key40": "2cEmFNZXYUzTidmPup5yn2fst9ndxJ35p7q5uFbuoY5FiWX3x9MekjUNybwGQiQpFxtEcY2VbVhPCJngmhKE3Ycg"
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
