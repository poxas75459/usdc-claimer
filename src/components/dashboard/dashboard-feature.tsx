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
    "3ThLfCSCny5dXYn6zKiYEjzAa7zPcPgECS6tVEqqA7UPtKskuyhDGTpsp3gG1CypEViuLMRVedm5Cnn4CLSLzF3E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hkp4yweUYWbSsRcfJSGs4KBeWkihftqv5cr9twVRx8qEsFQMYs4d12pfk4bNiA7KaMYcEZAbCQ1KyTsss2VXgu7",
  "key1": "44vd4zoXxvMu7jDwB9d4oiSfJCj43hHTnJd1uvqrNDSxrQY31JYjqAHVUuhd8JLU2uz5Th4xfZxhN6y79doyAD8y",
  "key2": "4VRUNobkgawdcJHjr6xvH7utvCN8NVZp8eAZKtW731GroMRwN4zZ7X5nPcybiYFC91hx1r2D54eUUVPetrZ1khBs",
  "key3": "3Na7CPaTjZitE86gwok5NKaSqJabiFM7rscrNLUTunjb5fdc1kPrUEyANyTRPmo19FFPufKFeJjtF1QtEJ5w7gpS",
  "key4": "BakWkDJfdXBPdqvdbsmFjNZCrNsUyU7Dewy5CyxRWgxQcSiZa97zAZqXNKzfAcAWbdavYogLZ7gg4oiBoZZxBaS",
  "key5": "2vxMcRLhvXWzdot6ETUKQKqkDBWVoZiCMU1eWWYtNd8cNtvTj7vYcEc34WAec4E9hzd2Xor3kfmuUWG1K7fTyjcb",
  "key6": "4u6hTwuFwLkAopHt3FaSu2bPhk5w4CjoX29oaNj6q5GpJ27V7PwfWxbhc7wRT9w7L8Hqr6ANJkzXWH2D4PsoFG7y",
  "key7": "29fDgHL6omRpPo4LfeAPCUER2X8BYpfvpACxZV7HRGaUmDHHRFo7JkhkJ4JbUoh3jfp4H5umxqM8WoLzJXwwvvBn",
  "key8": "4MM1AXeybpqGVZc2hYedA6oC5AdrjoPezpaq6zhtdGK8qYKcRy18B6wNYwbeTGzhJCNzhh25j7NcR2oE6t6CW42A",
  "key9": "38PEVqmSQschnwji1rcvhHxQe8gi9j3D8MNqfUdM93xWRqi1ZpQNoAUjJkHGMYfcyct5QPvb4xCqeqo4eVfB1zUM",
  "key10": "4iAJr1e2t73XskGcYtQeSheSYEUki1eaxLxjA1dySqx7EQeq5nWTjove1eeeckKQxHTJcNvH66M2BxAeqtba6rGf",
  "key11": "4Zj3yRBn2SFLeKySF1G4ayDQu6SMDPpLnnQW38T1zgC3pWB71EjtHum9MwSeJUBKCZBXzdQae15kTpZfVdTzzfro",
  "key12": "5CArSFu5J3zgmpEzzdk24Hbmfxsm6kmLBTLjt1grtdKuMoGHN3kjNJBowRYqM4ySgoGqX7iz4e4muHQKgjgymd2y",
  "key13": "4ieCwjtX9k9FodDwwbNbFztxSweiLT8dAYfJdSm3igLH2GU8FcJPFewWDjhGUSPGMuSiEZTNhyHDvZn9kQb8mG3x",
  "key14": "2dGSTf53szngPBVJVHvDjvsZyuDg5i27Z1qCtW8Ebnx6phe7fvDAGrWYHggaLwmtaKtAy15wcqBB5M27GPLGgBEh",
  "key15": "5whELzhFQLwT1xuPN3s1raJ73y69cz5jYDqHqHcJgh6AhKL35opiRjMg27nbwoBPRi54ErmDY19tNThEiR615XSN",
  "key16": "KFcXjq3oNxBoxWfV7Ezg1uYXNPnxvrtj1c3vJnHh7Ykf3ZQxtNpfNkvrDo51BbNNhiidxc3URVAjFrnryXoD6wT",
  "key17": "37pkKZ5AFY7mCMkTwyVfADZT7C22po9vRtmRraNfDyKDoFzjxGQC9sSQDcAdxRRGcAaLi7Uocrc2zbj3PHdrxgjL",
  "key18": "2rg1BbBBgV3py1SYu2v35sURy6GtZyTPVoj2fcFNwBKXzgikqNWK8z69AbmX67CuZP8ALDSUvAdUf2J6omshSfTb",
  "key19": "3ZBHrx18ui18Dvek9ywn5okdjhErHZTmJKbDr1wTa6736r4gkXTzfBfhXhHmhX5iVKKUKGCDP2B8ihSgwPcwvySh",
  "key20": "5YbwwkpCEkUSCpvJ7Gzhp9FQ44zcG5sk3ew2ZcQg15KVyWNPUaPWV2Dr4syfo5nW8tcKbteHPMcJaA8awnpFLvkU",
  "key21": "45eDEwCULCp1u6LEAee9ofoKfdvBSLvjoFVgjZoJmXy4obG1woWEUrqXTCcLLAccvAG8WzMxLPbyaGQLKfdgGZgU",
  "key22": "5g9HXyEbBqPxzf6fht3d1mnkfhKudknF85nuKm2A2hpBcDcQdUjrDgandmTzXRuvTERA7oe57UmFZ53oieDV3Xdp",
  "key23": "5EFwtCyDTWJy8BYFDgoHhjeG7RqhyFfkN1WkFGiwxYpDcRg9HkPUa5unijr1QEyY6S4nfKihWHQyHEFnMSXNs8E6",
  "key24": "3ccbcqLcDoaXdCGxneAuw3Uaa39n9FVGRxDh1ULksckSNuKABwiqcWR5gvK15gx61sKYo1TQs4G7uWd9XcWbm8KU",
  "key25": "2pipf44NspAccK5wtBnYeJg9bjJbTVvok63xrhkf4ZJ96YnVrP56cEAjN23r3UKezqYSiCcp6VhsE5yorRqS6H9z",
  "key26": "2UyVLjiSfVJzj39RnUkCwBp6MJ8wd4yM2167tbHJCiN7y5cMgP4734RbEse9oYVbaPKudeiV2tEnu2ydURApujzM",
  "key27": "nPqq8qQ3BDiFc7JqumPJRAhEEGx7ZHexNSeVv9WRWu86ToYJJ4nAnFxrBp251ouz6i5WiX4JwqgFZNaNnsWdhUJ",
  "key28": "4D2eRtjwpMPQ5qRmK5g99udjwSZusNuHY5YDqvUgriTDCfZn7uoXpir1yUeVdGZGJBUBrsRxn2UaP4fLRWBhtxjX",
  "key29": "5P6vWoqgkDghc9KgjxCzU1ouXfnnV4qCwJeYhvdi4EXB4DBKRurfQf4NKEXHe6jJ2jnFmTEJ6TJmbt2oy4qJBQSx",
  "key30": "4nnFuum8HQoLD5KX6gf9oLwWnVr6NChvcQjw99VMXw2NjKQDejwXEQPTPQN5CWZ6WqTmsiXvPvCJxNjvX4Q2ujrV",
  "key31": "5bG3j5P22mU8bfA4xmiETa83BhsudbXuPjMyrLksnCGh3881CoQUnSzAVzsYxxKtcqcz9r4xhGbfZDZNiJuzDaqV",
  "key32": "4r7XR4hKrEfkxM9xo5pX2kWPcnQvxqzEt1fyczeTvSTpQJgG7Rj6dBDFGAy7Noq2btUg8L9efvTzcuTLX2XJXX7S",
  "key33": "3wHcy6FSmmT8xuabdq3UHNQKNZxvD6H8i1EPpxskVQ8M5xLRWEVggHqrkePoQxk4p4LHHqS5ahUazSSLatjvnLpE",
  "key34": "3BqYsjiNxVeuW8nvAsQvJ18vRM5cGoVy87a6sDnYP4xAbWmRLKTPMV58yPWpxh9FBQEf8mZwSqBBUmyUZm6pMMGy",
  "key35": "4UgBv6JUyoX3As5kopHYQCe8eRwZNRZzKc41oV5f5fHseo2ZD3L5mxouvw6vpJK68HFT6W2WRXuWJvdideDkQi2Y",
  "key36": "3E4KJmt7rAC3qWXAyfKqcfCCcTHcPrzhgSpij37hyYJ9cdykAxqEr5jFS6RnWtzzGbAipXURCruFtDhYygdAtjR7",
  "key37": "E2HLJKQFHe1KQnmKfdqxVQCfM9btuFBJZqFDC6YNTf94U9j1ouCWnhJPrz2HmjbGhibTn39TTv2HLE8gaxiEb1T",
  "key38": "5ktPpeWceM28uhY75PbAsLaeCHcdFNoeFt1Cugu2TAU3KrxGwBs3AumEVWBLuacicap3rMThK4uGqH6HenT85QUC",
  "key39": "4xx19PdzcsQw2bxTcQKCj54SCFQmYSvS5rLzWytdM3nigsgiKovyehcnov7bfenaR3irAmjTX4J6fFrBgLBPVAih",
  "key40": "4GR1t79rm5erKi52kWhBCgBVHVz7QXQDohCRxgAq2t2p2Mkj8DxQxV74Pro3v1im6vQmZeevvY9vPTLzzRAYi4w4",
  "key41": "5yJHHVZYTjJT81oiMJ2RbPXYQ9BazvFht1tHcUj187kBW6N3hG12kKfodYkKjpQATVXLdKyHN9HD8ceSS7418HJN",
  "key42": "45QXcExovEt1kRZS2S2gw4fHvu2BSzFcHqMid2wCo8ib3e3Nyw1re53RV57ntoQzC5NbVF2UwvxahE5mLW8mCR6B",
  "key43": "51s41C4AqNuWcobh66Dngjy14VtAY6kzCXHt2j8A3MA1qFccJF1rSAdQsghVCjimpoaNXYsU3UDHkGVoT65pwZyD",
  "key44": "589wZcHxLyr62ArFzBPacCFJxhTHXktZLDyZHuV48rWWhvaLYiLEAR34MigF5yBPZhXsuPrsXLaeSwJaYDkFnwgm",
  "key45": "28xZoG3vB9ArX6K9zdUfCS1gfuaoRsa6hk8NYkSmwv8xDjVyc6rRsHhnnm5aA1WPXJjP5GbdzatR8RcZFocct1bG"
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
