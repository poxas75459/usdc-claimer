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
    "2eiWuwAKA9b8Jy838xdVdwKQ4cLPBrdi4Bhh8MjpfmbBX6UdhZ63XBBZcPRB24HMEEUMXATGhaVP5unafbcgEkkq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E89ACNpw4PNMLBzL9o1XNma4bNyZhMvEf9vbwjDko12Xwyn82a7Mq2DKdebRZHHvETAVehFTGYZtZDRgn4ufBsv",
  "key1": "3NGQFJAzojD7zWnHEodkK4ReZn7Vk6vzkJGnTFh6Y8PCMvuiTbDy9yu5GYE6UtgArk2moX5uLp1xgDY5pbtJ64CC",
  "key2": "XnCHUsLJddXa3Xq6MgYKDDD6D5SBPoa6nqpK2ca1n66aT36n5JfQdDCGBLBpPzbQHnktf2MxB4gJihzpYBZHTDH",
  "key3": "4r4NBTPrJqTBrmP14dRLyNtAhJhFCe3oKoCHTRSWEXtskkGaA5RBvnbjQCfeosjrZxk6jasuCMJ8nfsVtbNuxQD8",
  "key4": "B6hVQPmgH5ZyoQK4HWee1fdzSy28rMwWGGjwVUco27yAKwzqccLp8rvAvcACWhSFvvAtMAh5Ec2DyrZi9QwA2g9",
  "key5": "2Wmi6BytFHbd9bLLFMZLqq2Pt8uUknA2nyqVSNk41fNrU7WDiQS7gCzpBV3G9p8ANcazL27Xd65BEfBfNDHsU7yR",
  "key6": "3xX9LE2BSDzNEodcKeDhGxb8Sd6VLdFuPmf5QrMy2eXcWUQz4wL8BB9kD7Z7eSQK9MZpVpYRxuTiCaiGZ7vcMEZp",
  "key7": "yJ7awHfJhQLSAAfw4ypc13ueKGx1HhDCegJu7uG9T7KMAbW6U24825ZUZozWzEtVJqzmMf6uGxmVpdSNBs5wJob",
  "key8": "4EYh11gqWG6EcREaz2k4WY5dTyFLSAt7UcUhKzLaCpKwrRxK9RoCWeoYzVvt5ruZZT4UTnsRu1HwU8ADWNvh9nVc",
  "key9": "35xYbBo4FaBsHBN4Ep9b4ymf7oTcE5gZ65jdubkpEYvyA6pWTHk9gxV1BdLjPQRhGaJ39o4SXzvn9JGZsL8U8Hvx",
  "key10": "28wnnZxtfCPXvxb2DAfozQCLmj9u3xN6iKFi9HUVBCuyGixGGNVo21R3kaU22PLbzopvqkC2VPLrhrVMP5257jd3",
  "key11": "5mGWKKSfMzaheupXjgoMEYgAxvww26aUf4GyEu8N2R1wzVW7yEUmpDoUd9VdEzVsVk2QqqMtWWNy9ChN1mvxGR49",
  "key12": "2aCakAPQWNRA9o1pJPXnTH7PFRQsnKFPg6t6FuSYCxzwhQEZxSYNCBLf2PMdxryEcV1NmQCGHYoBHRzXES9vkTne",
  "key13": "y7aN2qjoHM9bYHvehHK1oozZPAaAXoPL2TcWNsk9jhSdzuSiVaWyqNwyHCPY1r4eWYrUtZWQJ5u23v9MfGHTdvo",
  "key14": "2QSs9gzeX7uhwqDEGyZmV7TtgDeVueLyp5b29RAHLs5Koe9nsJxNMrKsNyWETLnqnrR1JZADavdKZAFGFG3Mgomh",
  "key15": "58Qd4avBPNjL7eTfRskkbwDRvq67ZHos9QLxXK3HG7c33dsGF2zHSGxpNqqvraCvuB7fcECPX9e7f5vf8K4X1Ner",
  "key16": "59G1zuA4LAbHMac1bwTu7dkmzejXgnQSWZ3rXgT8PhEhu2qiSUBV6k8dFMwwZAcyvNjMAmLoiKFDg2ik2mwvNWtw",
  "key17": "4DYK3bpzCEzTPUCHnumf8BdEiyaYji95WzDprv6j7kM9eHxFSaGZdnD2FJEJJXyq3dXKAb1ZTh5hkNFdkXsj9ut2",
  "key18": "4LcJpj9Rrd9AW9Qjk5uKva3V8eXCS4GUZjzqMbdQaMWEfuNPe9TQoPRUW6z928gjp82m9MtvmoWcQpz85sifYYW9",
  "key19": "3QkMbq49918a7vtpsfq9gycCC49cs3jJzzWKevThgGc4UADpARz9kiGyKkdfTSLy3CcnBp3mcBMgmxxv6rz6xeqh",
  "key20": "2RPkekLiqHatcvCSxaz2qmCrCRst2Zsguobfust3r5MVRH1HxTgj4n6vm3omfrPov5FCFZiK4njtrES8LUnQNuB7",
  "key21": "6329FpvZMqieNUGthbnZC7PtTTJgtoHvqsirHgiMgq9Jpa1u8A5A9N9dAdG3p382qTUYhHjTdiTrYkvwauNwTF8e",
  "key22": "1rA1StTn1PBY8Tu5nchPyosRZvZea1Sxsqd2R8MBfV3dPpJtqsWfrEyfBJ7P1FdvG2SCpRLS8qqPheqaFtnLd7C",
  "key23": "5Xi6SVEpRVmdJyhrmA8cJMBnSHKwLvvPJLR89EGyNRUJDbc2i1cabQYFLaGgJnaYqaEjVPotBbATvvrfeozZHW1o",
  "key24": "2teL2aoxx8kjyreEsEQpZYyt8Fvuixv1PifToS41XWQwWpdjVRytFeSwY78zRz2968WyTC6YeTjvJaXFa9fmzzgU",
  "key25": "4mvWJFh3XrVSayJhWtCjhWBVwTVGXBUAyK28f6ch2Pj2RFS8CcXBoEQFenjTfnYTDU9FJEsrWSsLArv8HVsLiF7m",
  "key26": "26A2f7ZBD3rMwB2AcW8FAez5HBHsJgeszSUHK2kYyv8AK341SNQGUHHo3CwHJgxYsB3XXgSMtkyGveTYT4MEhEpb",
  "key27": "57Q2nnSk5VUny1588WoGjQfSrswD6ktvC1gfLVPhbXNW9AiVuKet11g43QVxugYdhVjoC9fuFxJYAiQeWEvEv8Xs",
  "key28": "3w83y9AkhkGxusLg5jQMVfnwuxFkvERXJvPfKfN4RFuR3bj62FBAhbpPhnT7VLdBjgUiHHgAd4SqgQJ5XZwy27zh"
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
