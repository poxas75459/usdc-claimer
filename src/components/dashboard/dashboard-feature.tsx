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
    "5djAiyMPbDm6fsfXmoy7cj95GakEjWAxQWaExit3nffBN4CAncY5DtjHeNweJPqxKJHarbvQMaV4euNRKgrDMWvf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c4LMj1qcfAkBpUJtHxGcPnpPDA7iPT8jgxu4pKVDbHq8q88ZkRNMMkjygU9V6dJhubtaHgmCz4n2MqK393ZS8Er",
  "key1": "2kzX2JGZ2GYQsQqZsNLiZLn5xGCV4sPhE5yay8kPFAvck4ThfrXqW2v99kDPK79QfzN2jyHcN7FrUNaqGdRog3qe",
  "key2": "CyAuCbKypstR6r7SXNcY9WfKier9CzVizRyKWFErVDGMWfiNoFtu8GWzjmsu7ELwHMwCMRQj6cLJkPibbaqevfJ",
  "key3": "55kPMzxf4sceMaxUZr26VSMG69KETnn2TtppTYdFMSLRwf6n3B5iFvR4TotUoPq97gTV15tWZrU9w3PvbBzMHoBL",
  "key4": "3BTMAJXQdfZuJdLQyP5bo5hUk4XW1dw19bonGycQ34Jkpai5VdGT7M8ymTafKV7gNkPmwxXqqgYS39uSHAjQG7DE",
  "key5": "4HshDNFQ3Xax3wV7xubtTvFGvhXG6tHPk79KDzQTdAmZ2Ws2Yf6yhBtCwRaW4XcbcxuWJm6aaDq56DswuLuYeqKu",
  "key6": "5A5pLvH8zWVmtuQfYMrN7Ts13ba9oaJNPcpZANo6dh4foe7gLTXP1m7FESEkWgQgHyaYe89A7P9AX7Hqm5NxHTYS",
  "key7": "3d6hnmBEfRZVGFBJHo7yWtZzud7BPGHPjTXSd7wgP7BsySjmwpinpxktVjj4Lpd7aGmiagje65YwBTjrjhnvJRCz",
  "key8": "3LBvbEobrzesLoViDyguYYxg3jt8Y12FsEcR95DXFxLhLEPaA3PtHvUe4vPQ14TwRKczxyi6msXznD8157XWFJZW",
  "key9": "4LAW51y7E5d2a2p4vVMRHjpLiW6mez9JjZZP78PPTNenSt4gi45rSwbm17a4CbshVy16tatoeaZaD1s8upZ1F9LS",
  "key10": "26W8cRpGqUZ9LzSmosrxm5KnAp5EaX6qTBfMn6d6zicVv66aw1nRyAfpPb88QgkvHAoR58YDujG7g5cE9Gkvauzn",
  "key11": "26b2XdDxip4Ru3tpVJoDLb1LCzodARkbgdtsPBr62c3pbmbB4jx9FRZs4ysqA5jqbGKYiRHMP3nD3C48KR1yFgjT",
  "key12": "3pmxMS8RUNEPt5Q7NuSW2CWMapWGg3qVbN6xZTV99kPdgzRmFnuhGUPGJJFUmvZkKSRk73TxtgsBWhdAW59TcR3B",
  "key13": "4DWYYojBxXN4gLxjCLKwkr1UHFoW5HQSqMS4FjBnA3Kr2yhe1TFnBhaXBqmsZns7FsWhozKQssPsqE1JZjtt6oBd",
  "key14": "57AsrLRgobywtmdcvqH6uKso3MCHcgubaVDvGZ9xVPM9sjTrJiCbgrHRudLojoj9xfvuXiyZiyAeANaYgTRCFGAQ",
  "key15": "ocnUJFASiF6RKUcbJZzCY93rsYEu3CjVArBVTosCTpiSFMxLuuvhTqfNyC5Tjob32x4sBW3a2Yopzg7j95aZ8Sp",
  "key16": "3oXTo1TafumnSwP5UrLveAZ141N2uKj4MT2V2KKE59WRBSSznSszMfp2CZRoDDrXWM1tfQStxgEXf6JiXeraFqW7",
  "key17": "5C7vN9cgZPHmqDVwRSwvvjJEktnAmcZYLnmzEJ4ycbDLwq5qQT54HnPZjhihnqbNxCt9ZvpgZC6mFrnbJneqXp9S",
  "key18": "5aHL2jcdyZtshk4JmsazrGwuiwpDkKiZbVfiSmVnb7Vy859pZCZSxysiP1YE1ymT5BSVAkgLD8UHA7pdX4pKmNuD",
  "key19": "pEmg2krgAsAMAD4wMhbrq8e5eAJN1TrgZ11ae71HcqHiRs3v2qgyyQvkc1WrKoxsZsJzQUdQe41aBvikqWpCT3t",
  "key20": "3qdg2Gu2gVpd6N5urVaQGg7z79S2SRnVbXhRpNypXdG7Ah76zwDwwzVSuAMQWyLhzAVsaKJQf1hoLea7G6woog15",
  "key21": "5WvgHE9LpMdr1jXbJfAda4ZaqqvWD2MbdH9pebwQeeTJn5kJG5aJ6NFWSKPTZiRAbsCJBLefH9JDoL5VRsajLs9v",
  "key22": "2G6JtPv1HYXXx8DT7tbmC6QJJ8kF7ghJnsXqn9FDnAmhHoWEv8L4vwoh1DokXzVzw7URmaMibNE4qkWV8knFvfKQ",
  "key23": "4cuSBYXW8GFnCKP4oQAxZZBpRHPvYHAAAAYqXfMitm2LNfGSCVzw6VviTqW2TZEEnunLdiQpYEZ8TXHzuUNW3wPp",
  "key24": "eARuyvyPip9VHBgtLT6BwoX3sm2ghv5BGakM4K37dtPuaHsA67ycuNzFvQ9PtPeyx6q86BUAogDu4nuK53GzCQW",
  "key25": "5P4P49gVW1bqZmiWnLXmzpJuAn1s9AF44gYAcjBQGL26YwkkDXvWgYqyuM63fLLPduLmc7u7uu2E65niCynwa6qm",
  "key26": "5rTkDmK735BXLo5cx2qeRJnvmKiMgkV5UKzTfHE8gK96DYugRHtMXnvjGmMfghTW3jxV7wryGnDAYySFid7ncWCr",
  "key27": "3vL27eRXC1B6hoSevYAkZrnPnscKpmzaTTC14fFsfX4GoixCmRekVU6Ue6ywPVq9QZfNEs1pzdhDt2gVnTAezohA",
  "key28": "4P4i8PYWySSd5Qk8xDq9onFQNSTp3km9yRXKtwsZmW4BaBHxfALrN6dke3qSiLsVxkEALvKpLSdswJQ554AstCr1",
  "key29": "34Yg4Tjkki3RK2x7LQ1zcTt8FbMFLRXXyx5zrx4aHcMNzfb1Djg2Z2cAem65AjTiiYrhXuX72MLuPxJCCuvqabsH",
  "key30": "XWnDGMKaysKvcP9wWa6J2QLxbsqqTwbXQLc9TdCnvdaA9wXvXX2UsCTsip8KmsnBco5M8CxAodcCYM19oT2Lwyt",
  "key31": "4MS9dfYmqPStt9FFZCW3kC9g1QzTSjwKCM2i5aj9QmmkeaSUNXptb5k7ZFXY765QPgjFnwfKoGg9XNBtfiT2sdQZ",
  "key32": "MKM7cwLxMB8ZwyAEAYgHmbMzXuCGwhNF5gR9jHfv9qdfWqerncUyuF3n1oSNkM4wYfgLCqw7LSRGs2iRsnHRuJp",
  "key33": "3VupwLp42u2dB16m88tugHN9W843R5g7YcGSdjCuGXTeAckSLJXnxuEZ6AJ6NsCPEGHfwMWRKJ1eWUwNZv1DMeG1",
  "key34": "1joDDtNi3GpKZZwX4jqcbf4X4RjZUrFPHuWk9mSoFxDFAjjYvACCzY5ESZG8fn6xkfZvm2F23DbbJorYWwqTb2v",
  "key35": "5yTrx3cGW7aEtSQZhDgL3rvdTNfjEfTdCYXzxQf29pedtyqAh1Nthht1U46kPBGMALB997VsJVM5h1GbghKGvJMq"
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
