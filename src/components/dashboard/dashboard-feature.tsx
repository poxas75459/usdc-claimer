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
    "2SEv27G9Hp2J8G3cKvxHn3Kv9N9DRkcAqpb3YZy3eh58a5aN6c3nU2esjFrxD3wZHnd1tLZPvhZKHwMJQ1gXLPGo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M43a9eozSyDPv4VRoLzWLjnyzFjEx2XSQLEiotJRpRrCwkobPjF6NykEcekhLpJSmwuRXuGPF9qWthBAc23ffqk",
  "key1": "LLjnnZqNrVPuxfj5ZscfjK4uhY2foWBRps63YmtoZDEQNb3XhkD6evBgzz87GLGR4zEhPtQBoFDaHmpmPBJjaz8",
  "key2": "ijAKCBUkvvKJZrqwz85BX4T5MGue5wkrBwDMqLxgTS7s4PqTdDmY1qHcsPKzwmme8czzTTiwRAkSXqpiY6VLzby",
  "key3": "qGCgmYMRvhgqY9TT6TwQZ9UrJij7H7SPpqq8SwBFqdAxewY5cTgwvk41JxrwqcTpFHZcZPDqvmECGntRMwE4JGi",
  "key4": "3fFCx3irqv1GJqkSNiu1Rzg5PW8cYuFz69ETvNn6PJnNtcCyM3eSpSdKP4X2jkJPSdf9ytKiAmSzxcBd72CeuRPM",
  "key5": "3F6ETQCgDnYASEu3MoziLTdbc8NvXtJUgNkKhxafjuvojJGGJRymHi9sgxuh6V4oa2d1rmdoz81sBWre2vGQFHRM",
  "key6": "2w7Zpv5Wr1kYK3MvRtthqZkYbsYSxtkcR9CrdwGnjhvHP65H4Ufe7uKDPouSwCmkTYXLxok4wGBicZrA7xcTuKFC",
  "key7": "4JyqfmizT4hQmxyxRTauBoFB5p5HSmULVqjZkmkxaGfwEVCHHZmQQ9F94yAtza3Wvxof9MXYXmKLxzRCuR4ZcRLE",
  "key8": "5chkmSr741mq88n3iZv8D9VXpwAT6W6AxQvXehWPbh8QDu6ZKhVFfULbvnQDzA5jvcNAciJRAjLVUXWvoyfqGNiE",
  "key9": "o4Donvxkv72z6iZdNhUnDnmn68ueRskhTYgquQ92XtmJZhfEMSuHGoEjWeZduBaa849AShMjffBeiPFWwZWFbco",
  "key10": "5oeoBRRYV1fYw91u4J5xLKJVkTw2dBvsCEwcnq6PgdbyEG1m9xt6P2otBnqqNAw21GEzYGcJfnjKkFknu2DHoruY",
  "key11": "5uxUPDUt1TUVRnj3WYSFwqLmmCEQW4CAkz76CiEZdDdsDay23TtVjNiVqrBVRdDLFuqpCNswimQL5aD2G2paHodb",
  "key12": "5LTbCvgSDmkGQz1oVR9yxJhQyy3FLj3fiLTXxE5TBtDtd3asQtk348WJpYQphyf2dTaFLr9WT3EBfPVcmrWsuxgg",
  "key13": "4Q1g8Tz4pn4JyLSvHJ6D3k97sBv2RbQPGvoQXaxST7joPi8KKcu9vbMmMpfwbHJ6rNB3mBjcknkPjMsBoP8vu7NJ",
  "key14": "5Bu9bcTbMQHX8HrrQX9MFxucC7cvwVDrqpyLRHPykWYUJZi6SUVJDKp7sqhSuvoW1MpbXUMYFg5ApZJnb4fsmcTk",
  "key15": "5EHhEdc9sD4bUps1CV1tP4hscvi7p68bM1PhsmHbGn7in7t2VmHvR8Urtsa7k2U4BKnpEk4Kw7oiieRTQVbEUT3M",
  "key16": "5MhPu6aHhJMPhDsodmu6kt6CPgBcN1fVAai9nY5Lf7Bk1nWjnAwdqsPGRdvne6MftprpM1Y4R2s2eKrXLccdxp2i",
  "key17": "123nic2yY15UKJxmrVcQiWUPXxV91Cp5xvXzPVm6upqX3nyWBwykMkzkjYj9oz7gGvELWLsALLnUvc3KxXzvfHXa",
  "key18": "4NX5aziWynnLpdoLroJ5A6g3X1g3htAQpJ15Ebke2MJt6UfecTgyDF74JNrXG6jYfB4UsArxwVGkHViq24hex8p3",
  "key19": "5vy12pN5G1osJLUMsawhYPuw7SmMwZH2ggJP1JUFKHfobcik96xXawiULFjDFw98oXNP847MGJmy246FR6o4Vo7q",
  "key20": "3SB9JrCminhetrWwafxiWgATbhHRDMWeQg7mhGuJbmbC3KJCiF9V4iLXZDs5VbSHVbk7HeNPddsoCGy7RTyeNXu1",
  "key21": "3EQ3qPJjaJYJ1xFdfnVgQr6NJBRM5gVrk7ESkuyiBXUdzReDfRrgJNydz4CtfJGdTBQCGphQ1zKrSjMA7rfFxFQz",
  "key22": "6jzxtUJ2FxAscx27KQ7occiLZKzztihJS2pUfGK4H6XYuywH85fkUFFjhiYSKTxhpbdRLMoeq2pjzV4Hmrv6Ptq",
  "key23": "b8oB1t96zSTZGq44gf1Uj5LNyRqi1iayW19BEXa2DDaiA6Zw3oGH6ATj78U4hJNUbC3ANE4KRLuZEHeg1pZXMee",
  "key24": "3ZpMS75aRjrGPB4RkjiidbFsN3ihH9KkyQsb4p2nksqgXwJA6cSzdPtCwUBcCpwtuZ3bWjekyWv3UGF77pnzwPNc",
  "key25": "jsarZdkBT8RDWEf4zeFd1e3mkp6XhwvRVmJGCTt6mU7Lsd8PkupDX6hG99A6NNCTihJCzLUocBNBDmrCnzNbBxi",
  "key26": "265PT31mqjvArLjjeW15GFTJz39w293rLQZcqWnWGjrS1LGokcEqdG3W4sPVXp2BXwsUxhtAWrBqpiPhjNdgm5hD",
  "key27": "3QVTHGg5UbBeFmJZn47RozkbZh77P7WVWp2wf7AYYD4SQ9qoW9RmJ2jhK3cgBqZEBciZVQnc2Z6sBsfACkk3uxeL",
  "key28": "5JcSkdwNmFLcgaCkPJSLWGN5hRvbbEchWffgDZP7dAfvUpZtgg777qKrQtZZpNctENobFa6vSfmcViujvFWBHk3V"
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
