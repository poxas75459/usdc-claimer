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
    "2vgufwe1pER323wkyzczbFo46QT8c786dt64vbQK7rtn4UWcmZN8vL9J3XkpGirdm3xDWn5GvN7cuh2UgUNDiNNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jpLzwsuGdmvog5apT22fWeQebBDpePXdmR6T1k9gHKHxjvjMuTpG2xTUCJ5gz2L7RTsERMLDaBFhFnxvaoT7jQA",
  "key1": "44rzYZ6LFArhg7GPzqTDDvtLg47ybpK4rRGwrzsN44FmLbMUQgMmWyNNCx8rCTFff4H6AAbDcrMeWSpj3jKmDps6",
  "key2": "TenuWbkq1uSd1tZCZbH96JeaagC6p7fbDaAxa6iu8HsK1Z3FG8b1qcp4NfUf4VW8fWLAPnmCdbjU7RW483D9Hs2",
  "key3": "2TBurVU8yG7cCe2WJJNEQwUXgg3gPkQR5L3teh6Vmiykb81oPmXm27m3XAijsVDDHXje1bn63w9xAxo57oMfs6re",
  "key4": "5sENWQ48jAbCU2o3HbeefCW7PmuPcFRup6ux28d9wDbBnmnur8NYryhzq5SQLP5SWGtEZyQF5fTqLG5DjZ3MUkXY",
  "key5": "5dunHbFiLYWiZWFaagNQGv2v4vZRYJzoJBNq6c7rtf1BXbazjYnx92EAmWQQmT95Nqk9ZYivACr5V8HpyEbXvUEJ",
  "key6": "24aEdW8bdZ4ydfPtT59YDP6bk3BQzsUscvEpzBc1ZrtP36EcdGNBEgokYJsa65SSo11zacHr9JrDXPHa8WwJbA37",
  "key7": "2euj6KgNYnwR8V83vKTYBgv553HBduzGVp6j79rT5F6zxkoefmq6DGmdWRkeYiGKPotjF4jVTux4Bh1WMgzUkwm5",
  "key8": "5deYyLhNkNwZEW9QrqCrZVAHU2G4QF94ULQuTm7EGJiGekLqqz6qEwiNymunyGmby2u7CvfkE7uPQD8VuFzidhew",
  "key9": "4BDrT8mrMywSKAVcxL2rfHfyHmTS55BJnDrw1oqFz1mZcWn7uEUazw28Zq6WDKNEvLda9JeeFkpunwdjoHXfPM2s",
  "key10": "651ec32wgiKxu8DjaeUSbyjsYxyMzUG1KVL8k4wGDYqJZwSyFc2mpAxZNYs7ukiNieU3g3LGg86PwASK6PomudoD",
  "key11": "5Pg4cQDYhDvcKkYJK7RJmsNyxaK6tgXNW4eLtujPmaHRRBcTSuJ5vjkq7nAVnKE9HDWCL3jfMYYBX3tzeAiydyEM",
  "key12": "4wAgd479Umb9AXTfsot74yQrbxCGnqJ2ovpA8tqBTLQ1Y7f21Jh7p1T2idQvn1mW1VEkBrBv92LnKrKbQxQF7tDn",
  "key13": "5CkoijedPgKJzb1oNBjvyEaQm5WnAUEBNDmp7qExSezcLZrdBqJTqEA9rtgJ7R4LutK5MDYoUtPM2JR9e9LoQdhg",
  "key14": "4aL3STLfSSf2EGYecHTLVQJHgFBPjD9phPDnqQLV3pvHceGvxPMUNZavWjs7fhhohtk6e9cRH5W6C25miLo4YZ4U",
  "key15": "2t6NzxKwMraaEaLoSZJZtT6gGF7UHuEBxxa5KLxiH2L7c2LHYntSsS2dxcWdP6YPQTnWrXNMavWDXsmHYC5xDkx1",
  "key16": "4uJTc21SEnAAGivf4axrRXSbUCzHp4435degQDpv7Mndka2kjRtqsjxHDG8kF8NWiJbc81TMA3HmiJTtHQDFd5F4",
  "key17": "49pWAfU6FEnmz16ecQ65zJTtBfsdZeMJPRraCUxmjxTNJoP8A1VW98AyDrLAQj2bh9Kr41czELc6b7UBBPKno8Uz",
  "key18": "5rhHbcapvyVkfx1YfUZB1CbipuZQPDBf5xGivwZgEWPhbb1xjChJkoAJ4x7ipxCGWLXYuXmRSdkavFUShmpLMHNn",
  "key19": "5uLS16YhKH77NGwxoVdmKv8rbid9PJQMV22xYe4rjkA4RFTDCnUwMw4YDLshE6A5UgAgQz8hWy2CkJEwb6c4LGaq",
  "key20": "5LcfABKnoHP7uNpNJzRALBU9h5ysUnACXQsQKo1aHzPWXQdZ385JnnKuwgL3ivSxYzuJ3HKBWSyfuTJCjg7qCXVa",
  "key21": "2SKiQyJWohMuB7HiLgAT45awLXwWqhdZwLYnGbdMW5PWZD7capuXgTjjBc8cxSjbFLT9rZ1JYrfKTnDLuKjf5zLc",
  "key22": "3gx3J7zU3cw4dGikTYuJmqD2wMki24QgUS34xGcw4yTDtqGm5uKxBER7yoMS1TPDuX5TEiBZQNDHmzKLoVNovuWn",
  "key23": "5xqsktW1JoG35CwUpuae3ft1RsLwGPuNy8DNGDEeyjSGCMggqaG9uj6gNWasRefuFf3UHZMNspmRJw21NDohgxT4",
  "key24": "4o6SCXkRq7M4Tk2ut7aWRSDYEHMX2y6QFo5xyZ5GiEjXMwPh1V5x95c6DbLsmZbN1KbzfsFDjfUQHxvtwxcthL1o",
  "key25": "rump9FWj8RiMo4BMhmpjxqhgt4STvbmhvRHpXKQpi6usRXJ8f3f9oRsb8ZfsRzpyNDG1VAyM7UTgRvfRu86QpZj"
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
