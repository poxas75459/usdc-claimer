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
    "648fvnCa6YMqFAeh3LJNdd9owkpbZKTXCmZCKj3HT2t8pLyQJ7vwTXsAZNagK2D6CZqTatALoskpuSwsbfZe5NFK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iMg5GbfNYUTdyPWBigfX69wnwKLS17YM2wpyefJVsGhUGPYwhryAqJFMKqzeaAUGShhiALtNbCqCEs3SQfpDbVe",
  "key1": "5ppzaDnhRQrucovKsGTCqTs8uEzF2ykXycKHoqy4DujGr4fo7hABGmHmRCHERt9NSsSQ4BuwGrxJ5v9U3HvLtL2P",
  "key2": "5TwBow8SVwAkduGuauS8FaNGzYveQdJZYBNZAtTFHwpbpjMDtfeD1NW6j8zqvcvdpY29uFzatgRQ4MamsFKVGLap",
  "key3": "2m2KrBvRbytQx3JTi71ChTkNWsHVD1TqGBBbeyWEwBfpebvVnxNUkscQueUvHfuJzM7ENfq1NYQZHDaddbaQW2JU",
  "key4": "5LPbHfju6UQMf62Tsd2AKAMiTNCjvq491Pf8BeeDxZXSRqXheSSbysi8pRagEgXM7bLfTxx3eqQx4DLvm8zKiQyB",
  "key5": "3XwjfA6Et3mi8pkA8zvRcqAaVyGeG2f9j6uHYaz67vArLkoZsyP37iN2yHJUQmThxJ2x4uUMuVm2PvXiPGUnpTiC",
  "key6": "3gGXpAfvufGyKsxkLM8CtRtAfaBVYc2F4qQ5RkvcYUFU8xhowvHaLAbZbXDdddpapVe9ZSCL7eQDTfNUH5ugksRH",
  "key7": "4YUKJqRU9yeuBZMqQPtbn5yHtQXyViuEpB2UUZf6c1gkCsKqZrFvjkNxc1SuA3eQRR1DXHK25DaBaj6eFbR8Zj4o",
  "key8": "5PZpzvdh7Kbty2go2QxKvPB7MpYLBbTpRUZVNMGRWKktFiv4pMKF3Mx4j6BrmM8pCs9PDuDaLDfcXYy2n99hbxv6",
  "key9": "5mzf8y5mYRt1soKkaWyVTyE8pJGDxMEEmPwGRYvoS7rfqSsZRnRiF4FxZSzYqJHzjRAmLSk2HNaLqWYqnAN8vAQu",
  "key10": "2xhgyEgpsqTNxgnaTyvyTzSbD4tRiVSWY57yPcLDGzvVwDmJpoB77KK7Zx45pmJn3dYmpmMAXKdDUxyvR8GDLHjH",
  "key11": "DVdCFSeFqKULuRtGCQnfN5p29CwahZ525DSpMs7bbnJp49PDG99RG36FrZKRK74jfoG3Bvygktv8XDJ6EHRc9C9",
  "key12": "5KXoeqgdUEaTLm6agSSwFpr69kmqcLdRQrUky4ELwCXPamfx1jsqckrw2nXNqKubX1eFqnE3EUaJk74Mm6kTBfvA",
  "key13": "3eEEJKP74E8FDorgNoeqmXPZye39XcHpoWWaHKS1uG4zjNhDmm7jRvP9w5d6WErXZoZ3xCjYAdxHZjsdVmedcjc1",
  "key14": "5u9wanWyJ6ZS9LnqbZuU3fLkUH2W23uVSag87qzveihH6RsuGCfoDv7kZCW2mrM6tHyigVVeKAuj63ip1VZxWued",
  "key15": "3s8SSBAUMKs3A8hkBvZeeprAkKkePQF9mhrYsiJqkjtNUbVAD9HZXiwwT1f7fDWx3TN2z1TiZY6awCvzkzCxmtja",
  "key16": "HvPbPFVgjJVo3bF3i5kgH5MQWsiK1E7xmjirBCA7esDVHpEJLYiT5ovQvZNakPwGkvV2yHku4MrPWfBLWBwVk3z",
  "key17": "f31F52A1efLBU9jrqGynoT6u1VWprRNgCFeHeUo5YGWLVChhupCSmU66XG2khP2sgZ95G5bk1NSExiVAozc9drA",
  "key18": "2dX4T6jbLiT2uZcsGXomp8m5NCmhGZwNRvUDMiyaNZkNyC6QXUH3QNusYz6LbBv4haVJTLzgnQGJaXfFNzD8PS8E",
  "key19": "5XqwgAdukbAPHV1vGx3S9tznMFSDDyYKDWiE9hThSPAUSQ5RWGZ6BD78fguDTqF5GnB4DwZzMQtQfQkK7FLzzXvv",
  "key20": "52KX81DVJdEwzP9gSiC8jbrLVdKB3VspUvBEppN5ByfcMH1Xh1sHJRBJri3BPpE6fBSpE6ixHXK19KvuXkUo3mZz",
  "key21": "4tBNKWmjSDyncTNCgc3qdb74Cq1f2iRA9DKBbjHnVUVwRthr13JSQ2MnUqNtT3Kwpu5k4uX7czNQTHfAj5yqjUHk",
  "key22": "4qvM9wrf6xeNUNX7RddoTfmio1EqzS3hhmJmwdxrGAETLNnbbFTebi6s8onvagaVQCn9dwGuRKeMqJB9b36E9RhJ",
  "key23": "5VsBoh6XCvvSV7WdbHkkQy3ELAK6qfAk9LaUA11hyUKqna53y5DLPtX2Z1t15mUhuykKN4fZNZ5z6K6624Dhj5FL",
  "key24": "4NYzqsQoDgcrscn2VhYgkvEg91EUN3cevhNGvxVJ5Zrk9e7bQB9XkzjK5zPTftqBtwSGpQd2yuTdQbJsKGkBthVY",
  "key25": "5bCRZimTQiFBrN1BwNZfW5DsdYWDXTAY5r6YDt6G3jAdPWVLtYxTqqstBtLDYbVLtp5RCaao9sEVv7xtDgovguN",
  "key26": "5B7pm7gycwJWybj1iNgppPvMHUnbHer71iDZ7NR2Qs45XjTN6vQDDvwUEZpmHXRFkK1A9STLeokrtMsJGzTjiwzz",
  "key27": "3s8LJ9rBWUbhiNX3oCeZpGfA5cW3Ut7P5zXKsUTVKZophSDtTR1qoxXe6me5iHFs44E1oWgDWfu1W8zsAFAdTg8C",
  "key28": "46SrCveBFudaeucjseXBEYPzgAh4nviTd9sw6emFDwJ6Bj6kXZQ7vSyUFS2SnYpjGq9wbuRZgtrF4jTnSap9jtxo",
  "key29": "5Ecg4SdWiRkhiR5GuFcBjEYe6BFojcZXE34L1UyrUMGsEVxLGsyia4PKvW5FacpU8RMN2UtQziT41PhHHFUd5ceQ",
  "key30": "eVD3PkigvxXzFbmCF2p4ADststebWnA6fWas3G6rDb9bogu3iRDWr4RkXjWwgWiV72WqitbqsGFtHVfPUy8Ta3V",
  "key31": "46QbyvxiEE3nuozFpkaxHBASzctb7FtiW5SgCVqQnXnYnsvG7NsvhaWzEgExnLu9DJRdRwZGrZvLGKA3msJeewK7",
  "key32": "45HhfWzjwrbL8T8yp6LDWKgPUkp7wExWhniCWGEQMspyg6VLqPMJmwg5oXHYSkLvD9coAKzqXCwNziTBpuo2sL2H",
  "key33": "NThNjRdXLY1YK2MXqd4jKzBp8GZjeuMLuRmA3eBgasNkCLzstv2VnzZCCwQzq8ZqyNRcMoNeYUwfgX98xtAhNMP",
  "key34": "2gXR91ZnQ2VdLc5CdPRJJdbWrtbWWaRCUc7umUoRFt4VqYCD8pFnKnRpE5Ku4vi5DiQUxegCiQkLwfzFza77jaDN",
  "key35": "58wjcVdcGtzx86wnWqHuSAnWantzPLcu8VCEqg4vdApMveiAgnsAdErifwnJAWKfmL7tLtTcdcyftrBVAvE9foUT",
  "key36": "3hJofjMfty3nD9D6sGTN6XygnTPeHCporGLdHiNYBxV67UA5nFyCBqvkaGoyU8uuMtBcrdAdXYHXAyWbMtbpGmW8",
  "key37": "58GyrtiwRkCY15AZhbfQLxepjnwvQ9NiFikwdeKPwqb99WcQrkUagFwP1DL8DnxqKmL91EX9Y4xWVQ1KNrWJuu6D",
  "key38": "5xHdejmP2t354LosUpJ44KmBPnRs1iZjEGx9E7Hpe5cMAXNmMbMZFcRFJKtgXELizboX73rcvNhPUCVoKBCyU8Hy",
  "key39": "4EpKXvvLzBTfvk7SCXtmTN4gVr41RbSNpS67TE3fH2aKAGozGirx7a1ZXu2cP8N2dR73sM2kdVkP8GJQeiXLCy59",
  "key40": "21J6sTdQikAwxg7GxxBm2GA2FCG7GmhE7Kiw1yTzq18hF5jGbibH3bfXJamddzAGBDZuhLh8jh1YSCKCoiDo8tnk",
  "key41": "xEusUSMNC4AfWYU65jBtmnFHvX1qKTbTMshFPomHdrnDnBX26U1GkAXnuJEPT5hTD17u3aMinGDp2qdtDbEmYz9",
  "key42": "3XU368FRqjXxDTuVeh5fEhow3wTSM5F1Vnvm3x4BTasr7re32Qhtg9C8HyjpAQY8JEMoi3CboMNjLbsddoiFp2QJ",
  "key43": "2VZ2vV4177RoBbs6Qims87jj2L5FYgG2KZWthQDTZmzac3cjHqET1cdeHu81EjEaQKxzU9a22giKTdKaWKpXYZWc",
  "key44": "MbhWixyyMBpRkDuUwSX4mjybNXSknsZ5CbRQAKvXLZvzNsHvA4U9DYPt2tqZso3Sdwxe9r2kqMQCHbJbbDpNThg",
  "key45": "5sBFwjB1Tr6yaVzDtzNhMgvem1PkyFYvnF6tGS98zU1cChD1NxAQy9b99nQCZv32h2YBKBkA7soj4zwz5Te21hRK",
  "key46": "5EAKf8q1uKfEid2repgWoTeHf66qffRzykBPTxHUqvg5EArqwksDjqEaH5CMJc1eKqTETXDsc28faw1S3FjDeHFt",
  "key47": "2QKQFoY1eampQXn8Ro4ahtub8W4h7gYJfBcuGqG8HV8AXzNa1E6twhrVtyFLHjn13bGbhpwF5mCriXyg2Scfiybo",
  "key48": "4FC5i2n2jtTru6BeQJvYByCV3KA8Jy4srMLqSauESRaRhbHB6R9kNfs1UNWqu24JKVq6U1sjxMLW7ReuHtW6AkJH"
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
