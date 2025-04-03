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
    "2Z8kj7uJ45eTsWQiB3hEQN52oV8ihMPnyNwHKryrGhpQTCsLnMwjEuseh2W4RVJxxp12mA2X3TJ3HoHWsyPEZzu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VbaW6pJNnBRoDU77FhpSiRH3vWzVWgtbLzdPevuhqSCfKdBeiTSRAafyUYF4vxoccPyNoT58gbFJY8yHYaZE1kP",
  "key1": "5v6wExrAePKgWgzWeE5ipj3SAb2JZzYtLWwVmC7aF78h1vHbMMWYpkaAT3u99Lh4EQMeraXNnvLogGtTHyMRucCF",
  "key2": "364GXPtowzAZboEHHGpo3aiwPwSZeVFSabtwq1VgRummnLeXvkkP7iPTT8iRAZpqx79YFgGcFcXivaCdXWJTQ2bZ",
  "key3": "5Cb1LLBdn6n5mG4YuMBbBAnEJgdz9qt9FaAZ3cPzbtA98aXfGDVV7JT1PetyDq1T8HuqmREAZ6f4VxCja2qRimLo",
  "key4": "4HQqvdyJY61Cucbq3heMixSVcxugPS2zSCHQytNMQj14RTwFX9tVrVicP4siNaQGK1cvkqbjZbymHERxjN6V8Ky7",
  "key5": "3zyMsXozW2ctCWw854KaFVhf5MefxK1hTHnV1YCjQD4CretoHKBJJEKnbpNyLgQUvQGqavcr59iZFygF3deQU85f",
  "key6": "5zHKiT4SdUN3Yh7GnqQdpydCgFVnriLJvUNY9SWvDYNbebpKAwBAQPS2p6qFvBAxqRqFQJmxmNrGDMgGweTjReh1",
  "key7": "3wJjnSuz7c8Kviq5EUKGH6XKXwrT9NE7ueSHp5p46LSNx4x9n92v4ZYBLMFXsUcieNRzNrXcruVpCJFb1VTFfKAh",
  "key8": "4ZmsTNh7fSLcXydsfRqYE4rcwmeKARPgACuPT8VANFWyBnxDceiW14HXUyyVGf4artgJLmVMyY6K5YHPd32Jvdcg",
  "key9": "4k4sG1nneDLK7FRLCRenV3SeoqzdM4hiJJfpCPZftc65xJwJeSqdRTr4CiDuoHeYwQ4ZUcLmfnwRKfEZc363PpQu",
  "key10": "5AqWXyDooCjeFMfZEoazH11ZZ4PMTkTo7pzEKoqx1K4i1SanwqiJ2FHCiyLw8QJszx5Zv5aUGhwEAh1KnzFAKM62",
  "key11": "21cNtmmvoTk44JgFqvd2WUdDZuBAx1c8kethYwqpJgkDd3zXf57sRvLCLN7dRbYz6pwiRux4yrKoy4NDyhrAtXAX",
  "key12": "35TTD4QXUwfM87V1yk9zfJjUFHk8KYmhPGHCVPf8xFDcwM1FdenxoB3Ebwac9LNud5pubXGTfQSqE31xwsoZYhPy",
  "key13": "XZLBqUR5ZCNa1Wisy2aqhsrmSLSqwFJbnkVWDpzyjN6o6xfeVGyaZdwDVppy9BFNL5xbuiKy1XfvhbmdjPcvt6S",
  "key14": "56ZZzmBUTqGP1629FadCuDUyzy3xi9aoLR7u8SzJgE5eBg7of7F6mrmugfsiLRfrbRYtEw82WFmu9JFJHN3t57Pc",
  "key15": "32kctdhKfA6GxW33qtfxNtQQexz39jtZ3uUym2Zd77Wxf4bzxXGgkA1MP3B7KkJcTgH87FFXiqfevaRUcWD1gDWz",
  "key16": "5b5RrbENSg2cVLniJXor6g4BZrQiR2aJv34iAyyEUNiq4tJ7qAecoK7MiDuAqJkiCdTDpTEtakacXtRVddHRKTho",
  "key17": "5uTBe2uveamt6vyuwjesDpadrmFrozfk91gs3TZvKCZzxCVXDAoHPe5XjXC6LbiM3BN2tJ4ZQbcV7UPrpDxG53Dq",
  "key18": "4giriAK5ogbMWjz2iVthm7gmaLdhAskpzfMgdJDqiMeoxcqhHVqdCMeWmavuZ2fQhgxEDN2dfb2UuggGqdypjX6B",
  "key19": "5ZtxGTSpHGpwgmkSzD1D2HBqvhrw94FKKwSqjxbUbbTdq1jbSezvJLbQEToEq3HaY5n643YWKeeYCD2BTgU5Uput",
  "key20": "27pTVpHS47uLnbhmCCaMmdKM1UBfhJVMjLB1tPPBeqn8aHBY7EDB8MiWRTyqagUaD3x5wy56FvfL7rESvrRQNMcb",
  "key21": "2E15N34thns6ZVgV33PjzFDnZwUuEe8RPQ8Nf4oYxqhF1TYpyJJkpmNqSgwN48KWrswxzCBW8JnVzRjAMZtriSvz",
  "key22": "5gyo5qcvE3Cs2auJjeU6wugcEATLCnjE47eAV3RfGcQKjkcjrRhN16326DnUsEkF3H12H4aFL51tnEMUzdcYSGuT",
  "key23": "2yEqiW5wEbiUeg2fdaPhUTuYNyUYkYr6BWwffFt1JF7aGvHocuGR6q4U2nnLoGwnYPWFCTVx48EW3WkwE45HdpfW",
  "key24": "3VtS9FGZrt41DD1kQMhmwq3wq3hYL1VZszYPjuvuwHeA5VW8NSNnqmYpeHMBu6cwyw1thLaij9u9dFKquxYovHL5",
  "key25": "2KW2V6LGQfBt9sz5L2QSgNaoyhpNceKsKpna8UNLfU8LWa7dv8SoBw6w9Lcja79hcypJq8MoQxwjstPBJooRbTud",
  "key26": "5EPjGrfTLUT2bGGFnvaEeru65f5UjXMASLKwr7fqeyY2mdJDYyuTNz7QxxsTjtctzEdpLcjoWzwHSPQgqTtXU3Zs",
  "key27": "Kwn4qHqKaZ2tiUxpmyCX6UpBsVcvpRPaJhupQTDi5UwAnZ75aNySPqHbZhSazDDzHYga2s2jJJsvcxxQ8J4bndb",
  "key28": "3cdeTinQaPZk34zNoXBUmruQDxNiCDXnYhpyLD5mcPrxDUMt5oZ9iUF7aWpLH1C7KgKHLkjTuSwi291FNG8DR86H",
  "key29": "7bZyATQNMRTBHeKKJmEK7XbJMs2C8VdSy7Sq6zm8F8Jr2MqyZdvnX7nnkdwcxr8ZtYBiQTnXY34riKRA4XKckQK",
  "key30": "264xbitpAVShtN2Fa2mCsp8Jw6ApYC38mV5rkBvzTnBJa4UVZCcD5AqMfjjA7ZBNmZYjFtr79Fyi356RXwtkHtNN",
  "key31": "4FWe9Mgi6deoM4BLVxLprhbVYZgMFtLSvpaQZK17Kse244iiut8JvtZq7GHkmqbcXvvWKjiNvfZUAieUokj8ZQZZ",
  "key32": "4fU4ZxQsVimFnGLdEpQ9mnF8Q6B4Tnzi1U72tHC8JoJ11mFZWoDSsC5F61xExjzr1UJWxeBwzkw4UPFMFzBxniMb",
  "key33": "4vdQ3CYpXZK2dibEBNzMLbp72Ji1HCzoc4YSK49C3dtdREX6fWpZqJWoBM96waVvqkqqiNzSK5bKjSHqfW3ZmUka",
  "key34": "L8EJDTcVmZFDZfu9fD9P9cpHnY6YpSca14wZrYztcnWaFpmSFgyewjzCwRypj59v2gaSR1tSv1fZkYrBiSn2r1X",
  "key35": "3ERpirZ9RFaweQDZvGLARaZ9jzXAy7pfj6FRmtL8AxTcomV7CDb38afiVZk9f3PUybUvVea86D6zDFRKgbfZuNSQ",
  "key36": "2n7gFKuRU191Su88gyYTdxzibF1GvcJrhMjiAtsqW4ScFNszjnh2VPGaBMZ8wqcoNa9twosq2y95J6HN2rpu4qvB",
  "key37": "5kLF2rXSNWSuxP9EeBxyPAF6ypVuhKpeCmpob42V5tYMz346cr2oddLauaQ5mQLeL289r6em1Pa4JSovLU1Jg7HQ",
  "key38": "5xqkv1FowE4RV3CeZHGfPBHEUu8C7AsLn8iz2j9H4QFyGBVbbZ6MHMVxHJaix7jeBdC5WoZWtQwA65L7LtKXo7gu",
  "key39": "2dzRCaBDKj4JLi1kDaaytgCKT5xdHXSakZMPRkeLbARYg5NUme3jRezngKPn95M75SiNh57w7GjCfrMHjLBsB7mf",
  "key40": "5MCGiRqbYtT78ARpajoytAJiVLRCjijPF3DG93x6mHpKfUYJ2VDfa7aRxEyWAdvaPCDftcR2JEJBASs22T3xWnSM",
  "key41": "3VWuzLMDwv8GTy6RXt1ATMwBR8pYdSWGDPSm6mjnamKe1pFqrQF6CaQ5GhJyiTZw7k4zP7tSyg72EXfqKGEXuTnn",
  "key42": "3w7ET7LPQCjXRW9tqZenR6hjMSLm5CUnB2w8VNpj5oqrVKQMyFMEfPd6AFXBNGCvsmPWqBzVxAeqCCRVGEYiZmhj",
  "key43": "53V5BrSEzmJoyCWniKYTgsiFBn3U9WqswpdzamfrHTbDH7W2qRep9QpTm5sSaL3sG6JMkpqen83vWq1wkzpXPgty",
  "key44": "3yvV17zdKdSmeivywPEnqrQtuCK3B2pBgmKim3kyHvm2Neo8ECTZXtDoUeoQWL8gJhDV1x6XBwqyh9v9nywcxatx",
  "key45": "364Qx8fuMwNjhbFTuy116vQZCvvSRiHhqUPWiNYzS59FybxjYNNLeHZQx7wqfo6m6YL31iLXnFcASLDYZeSRFnHp",
  "key46": "3t6wH183BmHQpYMAq1K9rBSFZL9721EffW8vTRL3GTR4c2CS4kA2u159uMCbbcAixmCpD7cwpi6YUYdLxFC9fx5a",
  "key47": "4tXFYrM3jykNgFqmm9Gga1gjvHqhTKHtKCx4Kq9g1gsFZSwmzsmwD1fPiFmB2JAfRFL8brw9vwrHNviBfHMXujX4"
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
