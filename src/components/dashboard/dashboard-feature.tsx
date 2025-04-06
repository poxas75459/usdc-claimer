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
    "3YDqMz5uBQ53wNxYmaDZhWEpFppQxV4VRkWCHMy4hbJpgLNrqjncoVspey896rJ8y7joL4U5bo4jqXNyN36EAxLk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GWzUwwNrtgTJe5VWNNZcSKWQ4cFbwPsbddfQYHhe4Zwj8UqBV8vK2ji21WvX7PtnCYUR5LEfM2L2h5D6CUFqM1b",
  "key1": "66N2aqPffNwGmTTSuJHpkdWCdWvtjEPfEBsRuTozcZ8gATqgJBnowfHa6TdoNMC3J3ixfwDidH2WaUyKcEFaitpX",
  "key2": "5zL1bGqbed6xX6YYGiQMrQHw1bJzf3Gy9pQf6SUhHjRU7qfaMKsTPPvfUiCsUqYWe4ob8RJa13g1gLNcocjDDmpX",
  "key3": "3tQUnbHCbd3DWg3K6pgTSCtVZrN7CNmEWUqsupQKXjjzxoNcQcCmLSLkMkfxvBjjFzjWE9gV8cXTxCqCxhaU9TZV",
  "key4": "23RKNDwtpQEUnManvk4DZYSi6Rve1bFWr4xVRHS5yeTrYEuHwUwBaFyfyBdbGgtkATzsaHAy8pWY9rPvhaRbaERJ",
  "key5": "2ccQQNVtiqyPz94mXpUaLc41bETtvZohdEszTSfq8qL1zLkysbjhQVJEqPrTqgpyEYpgtYafkX3FuLe5Djg2Mymu",
  "key6": "2EkCeDGAtwsyq91fQEUYELw31MsKqGgswZMnQ5P8px6ahitqZdxWY4vqJGcfwxWnLikJHYshJySxbXm3T2bfgWoW",
  "key7": "2NdJqxxMBtXjqb4wAGb2iQ2rgSGc8gAtxBUnp7btQVWRBjriew18pKD6u5vyqZuyvTtH9fywZ9P2aBLRbmAtkZAP",
  "key8": "2cAio1E5Ndm34DAthJtDEschPq2Fj876QsigtNgPVcAuRdvsKrcJG7dScJeaV4YmN9T6coB6wprUbRiVHHw46BR5",
  "key9": "5q1gKmRLwaY8s1pg6mFrAX86pTizAoiE33uwtJ163mWRVZQ2LZu13DwSA1NgAhmhJzA3NkMQKA2zfBv6yzfPY3GH",
  "key10": "4UjjW1uyigdjAs74EE6Fk6nzp5Y4EPzMLPQAUaLqJxJpbiQSTaszEEsKYeQwW4jSyEUCvZsFZr7KjzLMDpgUZiVD",
  "key11": "2Nj3GY4FeiDW3xKy2X8nmKpgPs9BDpCbav1sQLNVhPtHBmEVPKKJqvu6tK7kQJpUne1Se5AJ4z8rtT5ez9hpeHL9",
  "key12": "92Gr262ebvfemmYv7XfTbRPY4wSXi6XoJSUM6173Yc5trKfWHLN6rtvJ7xLn6P6PXc5cyJtSX73mKjwCNfyMVRL",
  "key13": "5UJoDi2e3FKSe2XbiQpTaYkvP9bubbBKcXQKDbtsnAjaFtQ8GZmWBVovbXeRFPE56LhrRHvpLyiZ6eZD7LT7ULwe",
  "key14": "5E9LokYNazU3HXAwAcXdvVwPBZ6LU53TXKRMGekm2XiZDmbQBDc4j3XqfaPiB5rNHmXaeS14FsaAcP8BahrKGjz7",
  "key15": "29e427q3q6vk5EttME2G5W67nX9WsutgHr2KbbbuE8SpFdsjT9euBiAx7AEk6X4DQDJP4WY2AHVnpsnvWvW5hrT2",
  "key16": "2p6hDD5W46ci1S7Y4c2vBiQp5g1ft496vyri2YLFfPXUa4Kjd8L3nhybfrBuRsr1Fi99aL8MFWBBTUbGP5quQBQ4",
  "key17": "4qnmpBgm9sdtzJ3qqHQUT6itK3LqcKG1t3fBpoemEG5bkeM47FtmzepRvcnYgBG8bpDZiyHaqFwMcyKxZzJ1qJfb",
  "key18": "3u7Ay1Le1rox1ngRXcskkSXEHMPKh2yZuAM1PR95xpCEBsBYgteJheHm3VrbwMtK5LBQ84vnbBDVkgb1irErc2Eg",
  "key19": "3KGqvGTNTWWf28Vr4YJTEEvQf5888RVwu1TiHc3LSGzbWcBjWUk3HASxiNdF3iaWiM24Mby4VbcUUQwuEoB2UXQf",
  "key20": "7HiwbD7UwiJNKSoconxLEhvvuZoz4LJABebynr9ijCoL2PNq6tJQqKLqJeLtXnrETZaFTT3cHUgzAHZ9m3An3wb",
  "key21": "Z6eCKtDnUAHndygK6pfrfiraBS3oqnhAyWqeTEqngSAefiTRqkKVTyxo2nMmu2kKN8dqDeRsqhLpAa9R1aNXmYa",
  "key22": "4dzo4rgUrwwacfuB93KXorv4m4BfsBfVg46XPwExmYRp7ji5TuatNPe8xwCqAiaTDSk3xA5FUXZQSV5HFbV2di4b",
  "key23": "4SCa6PCZFDoMmoKdtzNUy5HUiqrWyxLHGd9GPojbWTKta1FwUfMDjxhDaQragn2VwhEJGEnmhK4B1wGEvVtJM82P",
  "key24": "2SnURbYB82EZDHvFEj1swiQXUZm4Harcf8zGM1xX8Uujqd1AnwjB5sHVhyJLSAA1vGbJJBjXfaxWWJXBddqqM42F",
  "key25": "2WSF4modd2Mn6x4PLcB8nivmJY2PRbQmPg8tzbwLDhMy5bizVqk1cCKgXD5ndxP3UyjhBkqEPSAF33okNzG14oCg",
  "key26": "5c4peNzdJLLEUSgcWuiViHG7k3s7HVRAG61frK5GobeZrHQfjfMF1827uC3boijx5VcVLPzkPjHVu9aPqbxvMv4C",
  "key27": "3HEaTYE18LLLkLxoFcSFLjwK8MUqUUt3WqXkU1V4Jucjb9TVs1DLgqWb3t6XwPXVEF2R4VTW6i9v9HWBdHnNzbZM",
  "key28": "5ZjyCWkxq8Pz1dsYkGPxruTGbtZU8QBYXudfiyXXQykjKJ29xBZdV2HKeRZZe2VvPLr3oybzxo7pvvLTazuXVtR",
  "key29": "3i5NemQReDZtcniskxPsw9At6YFfFoiso7enTFBr96pKZFxjo4jCb7vbi1vY6GVMqkZKiH7QQ8HZA9ZweEFeULvw",
  "key30": "57dCbGAftDoUDFkbKgZs5nXHUxAgBDYa5PAXDdCuwj1HkuztPYCPj4nVkcWfokR1YcU5uSZZc9MgEMiiqbtePUzw",
  "key31": "61dxqERMKVHCw7SunagkYBCb7W43rWY2P6HHxrBR8UXvHBB4DoTzRRPHPMx3FsdkcnVUP4ykTiQLgFwQgmBTKudh",
  "key32": "3eGftUFH6yvovqeYCe6mAfBJRgpsj9HtyweLQ9dwNfvxzsgCiwR5k1pK3BEbFJMGrwSUmkWK99YjFjzWqGoRdgNL",
  "key33": "2yPjkoiLRQrqggAxJcnE257EEDs7QtXdMWgMUYwBifpbd8rPeZSKzRFwn1pyWy4FasePQNAgAcEni1bn5S7GEJgS",
  "key34": "3bz2v9dsG8UcfPa6jRZSSscrMef2gXbssyj5GUZ2FNhXKzajTfucKB2H1YYmAZwnodBRoE7fgxmu36SbT2xhynFm",
  "key35": "4kSK3tHYwU9j8bKpsqxMYR6dURWMVVnApXREVXxsWDF7z5Qc131xF1s4m4rztYZCQoeCxtprjkAKQHoFELBwq68z",
  "key36": "zMXjUMPYbR9f6hqjtSSCVUMNGSz6ZqPDTsYtvXEZ3NZGw9mpowdH1ZsLkr5e7WJsyqnKpN1zYxNsJJWSy3vfSAF",
  "key37": "NSGoVqRzPWWRgqpz4ExHNG3G631ADbzXQDChi43AYMQjRYgv6a6EEz1WifQnxocC6FnRKMmBTWH8RLwsd13bm8v",
  "key38": "49Jex8MUDrmiq4qiouvXmHsM3ATaeH1wvgzaQ9tjZErMRe4xtYgiPJhiFF1yS4nJ1va5iuB199HucatECrX15FB7",
  "key39": "3jR94aT3N5UqCiy5qzpG3f9jHaUCBaeqeFh6fcuYmu97P6yNqvKVYRsDroJJynES1Y5anJc6Pz8nrbzoNaPCMoSA",
  "key40": "5jqshgJcvjyyZ3rxg2qTAHKWvkrmdYAjeb6c7szgRB7Xbz89XVB8WndoowASoqX1sePT4xWxoysYrY56VN5W8hz",
  "key41": "5KJBhMWWxFii4vxvrkoBNh7qBHBRQBv9aybHWMbjHXP14GmEt5NQGFYLsDQqDPoMri85Jfd2vix4Rrm2qDc9c1zD",
  "key42": "8JiKVeZ6SpW6so9uQG1etUuyarB5rHwN7M8HkQ8wXqouM81uCdis174vHQ7zf8iZ6GbzKrckMe5Fokx7hnfyK98",
  "key43": "5TtGgsCcUEnurvAV6JARXptrf8cC7Ffkm61LVyKKHRNjmQpmu84X9upKUWzBYr96jBEaB1pZqy4hgKwJBFDdo3QG",
  "key44": "6hH6hrfbzi4TXawbEabx3LyrxjGwoUA5mdNJd5Gn6fWkpAr8cNTmF7tLkD9EJX5CBtkCTMgpDTAi9cBGZFmVbcL",
  "key45": "RBSQYrhE4ZoyCaRNrJqUncaRaS9yvmPGcLsT3U8ZVnjQNyyEP6G7ATSWshoBYAkrK2aHNcoYEi6A1VNDPkuxAuC"
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
