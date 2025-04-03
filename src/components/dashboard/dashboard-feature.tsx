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
    "4LCNa6msZuXhK9wo2HmGwTrT7s7VRh9vZjDQepudLYY3RHXLP5GUM293S3XwefucYCGUmcin3ec6S74kRWcfkAXJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63hM1AwK2DL6sFuUedafkzREbucjYgHij7dwwkLdR65Uc2jYBWvEGxLcJtubQurGatCe5tBoezfMRpNKnPGTfSmL",
  "key1": "32XjFjwFfEj71Mbafo9nJCAw1FRHGKQExQ945ZuK9xvw9fTiCZ3xmntvmFjQ5NFXs1RDLGpfqJhrWpTktntsXYqJ",
  "key2": "3TGaC9FG5pGgkXXgwAiRLDyvjDJG6m1tnyB6u4C1ANp47Y1nTBKSXL2n8DvudVJvZBo33c1DjLHiaZZh1xwdYbsj",
  "key3": "3mmtDSGjSR6z39Ycc7jGC9DCXrqzFu1vemQe9URxHei8hXJMV4cqzRhAecmgY2jeWFWJgUkyWzjC27rA7nM7uWnL",
  "key4": "aoAzjH12m1MoQDH8aPkqf8MYfTtPRMB3hPLC52Ai2ExwUrGBxyHofDbMEvyVa4Cpah4fuyV4XMecevNbfRdtZKg",
  "key5": "3dkTk3MiUeBaw1FhJb6B9JgTx39F6qMPQGjbXLDkz4JXx3wMB4cTdLPG4EomcQbVfJ8C3ebN38RM8SPpNcrbsuwR",
  "key6": "4Hh6y5gkfxXSQVxfsZAsRhJ5tCsMbSvPrAspR2nxN15kKMt6ZbNCoYJesUj3fggmwzy7Cg8K5G4JPL2TuZwEUxTM",
  "key7": "4RKK1YJE3yFHQdYqfCCSDHjUTyLauGCj813si5MotG2JuaUMKDdZBxd1M8KqCeyQ6SrZXFjJwhZT7s1EuLxtDerx",
  "key8": "3R4Zt3EbZZLZ9wEhvMY7f1E5vEdVNQvhdwRXN5vsjrPEAcyaqhaQgtpFXfFyUyrxYJNRq7MnNCAa5Baghtdg65jm",
  "key9": "Yon8qRsrJgTCfGkkeeGoQvJdKH4chzkoVFvW1Se9nXwEiq7GYehBD78HBuzf4EsFsMT5j1ELa8hdwFGrgHsfkKz",
  "key10": "4fW1Q3JHw6Edj2JuCWJ7vXDV1i2vZMKfMCmWwi1TAzdrMdgQH3pKbcQVySpTTAWBXpeC69hqZrwSh9jmJiQSzatn",
  "key11": "2aVwNyC6GKQUSZpgCWg31m1hs9uCTKLeAU1eSkJ4t26BYwdygCu46GMFV1gTRieh9S9jG3vhrcyLgowhLE65APLY",
  "key12": "5ei4BUjFPw7zTgkbifkSKDpt8VhmNp1wMQZBvK64hJ9LdSxLaePBsSDMt3wBcx4UCEgV7zvKvZv12sZyY9KBS2aC",
  "key13": "46vbWy3WY3bkDaAuaodBXdqfcm5nKvvnCBG14WJNAaXQYVG2nik1JxtjBuJ9shxJ8sEeE8RNnZgCX7Yc4BzJNNXk",
  "key14": "524FsQTLsZFG6TPFcKiSttYm6FJiLPCK3wFHtKDGtgiFsvnzvm4ALfQSVChVJahcUhn56B1pwfYdBYeniTQFiBQQ",
  "key15": "5cDpv56zxz42faXCK1WWYHXjMzZboxR2VqNMcZ3XwEJHpw5cgJDSG6Y8cmVqGHHY6gAvkotR1aTd7o7ASBFkquKQ",
  "key16": "4urQX7a6gFFgjHJnynJAcWnArBRY6zMZCMWsh7tQdGXQs1BfYFbjgvohnQw6JhtYiwrtvgWnbxMCKnFnkqj1yohM",
  "key17": "S9TvB9evnE2TkiMQai5axwZyj9T4TsLen1shFt5TwMZvimd5ComiBiqYu6pgepmDrfbkoo5yzB7ev6HC9WCSvuU",
  "key18": "PeyonmCtuZSZht7X6C8JzQVScNX94asHvxsAtiQPuAhnMxJ4Ld3nB4vHo5JZjDcFXLn9o6GUTFxQrhvSBy6ngYd",
  "key19": "2zeVTosY8dkwcAtwKXEMDg24skeTRgUngjNtjbch9vSHq686AiPK4N7Ze4bCPZhpaS9qh7rb9eNqPzPjS5eJezzY",
  "key20": "4teATPBjxSgAWm8Rk1Nnp2phr4e5J5zUieVXNeCgewM3uFuXhkdYuWMhHhg6PUG7R6qo1UMHpihAsATn7WsGTNdi",
  "key21": "5h62pFVYdDCWsBS35saQ7hCD9Hh2q9mV8uhfaTzUA1sKPR6UN4NDvFesMivcWAFwjXpAqg1NDDDaCkAxHvtaww2Q",
  "key22": "2kTC1pADV8UwPWpjS1uVhco39FfQjMoTXQw64Y1QesagbewwbPVF8eSEFhfQYWBgDzhwgEhzBTWQ9x2DQTRPBZKg",
  "key23": "4wPBEb4Cypj46fvXyNUsat7gXe56tQnUMdLS8jxCq12UfQ59riqQ7cXvz7ViEM7GuvqoH5oicbPuPcyeqjmYAHWc",
  "key24": "4RPqzXPLYCSAdodHpUdzt2N6JeZX462goK9CziS3euQ25gbAswyTG38ZSDKG71ncNh1wLyMwQzGK9DGaVrZeZW7k",
  "key25": "3Vu358mPnyhhjxmFmNf5J1dUb3uZqDu1ed78SNptnStx1YFLBi2n1HaJ7HcJuAzqZgJPACFmPijEiSdgbmEwgaYM",
  "key26": "3YvcgHWKdt4ug4GaGz1Fqd5Zo5y49t7KvybYcfcUAtmmcHZj3wAE1xGBMmxvFZW83WPqogvnk96W1WqFjiZ6qf5C",
  "key27": "4AWhzrZpKcRdFAAZ9npQZPw3A29Ku1VBpwgAoQjeizxdaGnajmD6MjbNukJSJrF382aXCeZtzyN7gHAycYpiXj9R",
  "key28": "5ZrFCQ3JmXcos51MEj3UVvD6w1BZ6UnG8eXfqxPJat7caekCpGWHgJiPZTycEvdk9zLqtfyMnAnb2M6bemARRo5C",
  "key29": "4bVE194G4NEjgfh4TumXm7asW4TmU4Pm4iggQTNLKKW32vhG8wAaQP5vfos7PrqysFmbyBPuvdRbR2iQQYBZMiHX",
  "key30": "4tbwpk7b8AxWT7nYbQxzznqaK5726DAYvmVTpvp3wnMBGRdEJGoLQPhQLDVvQyd4F7xZNpaYAe2WvwYvvWH6fYsx",
  "key31": "2vWtKSTEbeMcEFrWdACWRdBXwUeR6D8McbE8QPsJYwaxeFw6HRRYEaufvjKqoJkaj3dFc6GCdxCe46Tc3cTbpDUj",
  "key32": "2iFVy4gxtdYRu6zkecWmr913gFVbGKy2ZCXvL1Bb9LEAC1sDowiivEhJ9RfiBRerWswEvoUj7PRz8U242E1ixDwV"
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
