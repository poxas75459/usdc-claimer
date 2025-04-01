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
    "4fzwKY2Mcqnu3iEvs6VdFRM1jiaCHpQZJxp3jib4LpMKDXyEgF7tMa6Be5wNNVthk4HxUNzBjA7apjTs615xLCuL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gCV7EXszgKHPqQCPFpMPaZnsz5fqk3khjRbxh5PHtsAYLNJ6viintG7o6X9jnFhX3SAtSi7kUFg55S2cDTmPywt",
  "key1": "3Caf9Qd3KBS4KWFd4ZHZy8jBxRMMp7ZryEXdvbKXp9joS78SeQ4uKEkwz94briurUf6fGHT3RFJuzj9758Mr8yiF",
  "key2": "48S6iNQcAnX33Enr7wgqirb1LD1fNkknUwVXDgsLVEHS9TY6SoJdNPWAuyQN4xqbJqtE8oQGmF4adG5qRbeM8G89",
  "key3": "58aewNAm1Yi56k5zAXGEuvcM6Wr4qsWuM2tBciNu33FhfKnuJLMujQkKsCCgwpEryDhsoqSXY5t4JD7YtYC2i15a",
  "key4": "4xk5UVzwHZTf7VpMixWQUSMLv3btJ9XhXvauzf48ioYKJsE9J6ZkFTC7Wy4CNWg1JStFVXUq1j3ZPrLCgWnSRF6V",
  "key5": "56Q6EWmjmGp96FHHmZiJ8DfRBptyvfF4yextLLCt4GNagesBtFQGoUHaqiuKPVkiYTbaeBBDZjYkYNAWDXfZXgHf",
  "key6": "4Cukv6WiE1puQvv7eJ7uFUnLgpzPojTeCd6a18Hor8kgvu9ye85y6u1oP7yPDUncTY4MbW4WVL32q9fa3SZqydye",
  "key7": "26PqTz1aVyUHG9uCRQRT84WGH9TYvBskR5puPiWBSsNRsm5CGCQ3HBsRrWDyUsKUWWUcLuXRFRiftFTiKGP5SxYR",
  "key8": "28Cy3rrLt9yztdYHzHfRZ74TxnqvFpJF33Bty4Y5h1fUzvEDzcrt1D2EDmB12fS7zbmqutr2cMDsmLq4qyo7hVnz",
  "key9": "c89cSCXbfWTF8mtfBk59EvWZrjJqeTvsd6ixjHFm2odTgAHRhSdgqgAoKpdMZhkxG7jW7W6VuMR8irE6UjV4UjV",
  "key10": "2cFgP6wNm59bordUvQA1HQcSZYM9uuJGE3a24eUSAshrGhRsGTFDeeASetUAKrzaV7q3q1kVpuqxkjn6LhQcR3K4",
  "key11": "2J9LYhpebsXsiEJ9nsrPjoL8nGTVVx2vGA7ePL1T58iXb9keB1fabPi3upy9aBQDZrfcCffg6UHj97LH3LkeFaXU",
  "key12": "532VBybCZPacHu5kWZ3xqj1cYAkmsuJALSTt7wC4NroEEH2xRbUyVsYaDjMx4jVwXEFpLyBMrGsv7zwHVaiTPdrs",
  "key13": "5RkTA8SVLtprzoApy8zZTjXgpMPY9s5tJ2nfGccoF7ka4zJ8zP66KXSKaZkw1ZZJFKLDNAJ3WmUXUMttoJrhkwzu",
  "key14": "3heDTVNV2P1pnbC7ZtTiZJy231sfXhcJxs7pz5yJTaL7bi6cCWmtNrFNky7SNWUe7oiHpcNQNbBPD8uepuPyrGv3",
  "key15": "54CJ98oMGe1WKXdfJCtFt5FFYAJcn648XWb6zsnyxkFkzHJG2vZxQepdYnoYdnKMYbcVqm5vtfEHxwY3aJPrW1vn",
  "key16": "y3C1yWvPbjSAuK7oLqtfrDSVhQxjyu8hX446Knw7qfeB2Lhabh2HcHEbGsRaVK5mAhR4Mka1YKBMsfFSnVvJ8fb",
  "key17": "4WmgVU1C5Pbx4wf4qsd7Zn199MdybdwTxpePKEtxu5UByFxREGytNmuuL2hJPG3zrTAudfgvxoWBz9zZEt29ibKM",
  "key18": "2Em1X7KDNwFPSQnoqvmd4jBq3EfMA4LjCGTny3ktDfDP48zGbLScCSF856iJVeoeK12TQyohaCYpy3WyNMg34uVe",
  "key19": "2F3msh5G67nxgyRx9zx4bzPKX5yQQE1thgPp9QX5cUzv8GhH8KaESxWggFkaBPQZupbZchXCzitpg4tEqpnUkBTh",
  "key20": "2YxzyRL4UmKEPmbjga9pDEqbqQE1TVLKL4Q87wQF1qUz1yx8fMvnRcgSkDT5uANqEuQM2aZrFuyYYU1y865EWNmo",
  "key21": "3DHBWWkGE1vKeuTtbY4khEnSv9BUtLgu5s5tGBRtfKTPD6311rpvVKSEdrsbFweBkPgo3FuewEHGkByPL6WKhYBs",
  "key22": "5Tu54affvBwpyMzMQCxaZ4W6JmvnVvP2VxuBKAU477HXPUNFAihnqVHCrmtb9amMbrW4aHmXegVjeaw4c8jh7xYH",
  "key23": "4MLvKohe8zCWV7DauDiSKNL9QKDXfXiwB32pf1yUEHU1PMY4vVtUUYtE8SZJQ7RL7wM295XpXTJhGwzs3YKLkFmK",
  "key24": "35HyiVFCUCLjUH6E63uVoowCwuvys46MVqFanGnVjSCDAXdBKD9DY3XdjjiRs47QiYG2mXUw9MhNXJxvuBUpBEZ5",
  "key25": "4qRaR2HSDhpn2tdqgjtnHtwS3QscWKU7JZzrQchp4XhKmN17SpySegoioUs6BEEUsdnX6vvDHZUrf5TzeTVPXHgo",
  "key26": "5byFDjBMpL1pfw16eK6wov8hJb1M2Fw8FnMoQWuu6VevhL7xhhVjFcAPpcmeKjGqTdkweQ17yeTeLYPjJWYtx5Fw",
  "key27": "i4bf6WRvWZ3HC5aPTZwPSXKGUrS9R1LUnWMJWkDdArJsAfGDzroEB3WUdTnb6muTabUmePzvMLYgZZuDUYYofCa",
  "key28": "631t1GtKW3WSLfBKjDcxh7vPL4zVDyecM1aRA4PeWjQWuBLh3hDHjbfU6DGythago8P8fkJSQDQ99Ts2hdc8Zd7t",
  "key29": "4ETssCYdENb5etFL6HEd9uNKZ3a2zBeuHweYQGCr6iQPmiKCrdVUxL96g5aJAz4GK2BXCQNZgdhsSyzZXFPoZCZP",
  "key30": "4k86S83HYLYtGEcjkkF7AZ5zZxBBCd4YxvZqcQRLhKBsCjtPVoJCw2yD8JM913GwjW8WgZnqjMR4Pko61waJL8dU",
  "key31": "4N6gzPpQ4VbbG4n6AswhyBdu3ueaoWP3NxoUZgZz6PzFkSHwW4KAksq1MJPmSNviS9L3EyohbWaXaBUbB1Sfvwzh",
  "key32": "VBeyDsootbco9Gr1YuTjHXRH2e9UQcGtxAGQ4gYjcME3u7BQcQTSyb6mLubTnRZLcwVcqKUQhoT5nLsWDFLpRmj",
  "key33": "3xKBmdFbNkgZ6EmzmubzSGDmDz9TT7zywhqk9cgR7FJufNFpwEcaW5epfe9fELxivJiZbNmJtxUxyNsViRTjDSLm",
  "key34": "2fbKNamD2My8MtCG8o8u8Wfn6wVXdnpWg4VXeAGUDfPniepTZRLjwcPgAErPLGQ7UFfcGjzD15NM1Vi5H2FadYaQ",
  "key35": "2W8erMfjTTsAFvJm5VZPNiFTpxeN4rSFERpahHkJFf87hq6Lhf5eLYPnrA92n8QzPZaqRAPUoo1MTcXmTAmjP3Bc",
  "key36": "2EcAfu4VcLZYz8MkhUXprNv9AFxiB4C24MFePuPMdidEkSXVKTP4MP35NAcp34Y97Z5vzMiNCuCb7wcW2GZUroXJ",
  "key37": "27YZHiLzEXyd3vzWqwo2mdNw929gJoQC9BRxTM1XpSUEuDwUpq5g6gBrZ5hDHPY3sWtagUFdxpae7jBGbQE6aw6Q",
  "key38": "5jceRjXQXzEAYoRQVa6BzzYoCUByuJxP5mHN69CzpNWkC7wdEapc14NGoqArDjTYUjWT9wun1qGAuuNbi8f63gnZ",
  "key39": "5MHd8fwUbjrfCQsKsb98VbREbT5Yb9n2B2aJkU3PobFkbi1u8Y79CJ3fufKGSLoEsDLBjX82jPH8cjPnUwSASR15",
  "key40": "bSvbNeNmgkRjMJRfqSsNgDZQgKdB3LYBnp9B4WdTE39jyQJDZQ875uNL8kX7egdZNAbXEgvrprjTBnFSasoiU4y",
  "key41": "4YWDdgaa3pjXcxdrDCkkgSicqUkV1he18yn1ZPpeNoWeMULCRaYdWdV3qAEQAHmEF9qHPj73rJiBnRSXwKG1Syme"
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
