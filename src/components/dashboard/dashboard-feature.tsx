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
    "5dwP8Cx9st1DdjP4mA2rtiLFBS1jVbSBL61DPzAUz8n2pe5dYvkyBDa31Df1MaMXu97BGo9Nxjc2Tt7xphVJAt2H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SePwTkTLNBwJp7NzbREjVhpw51MEEx2DjoWmszH2wwxexTS44EPyFLonasDAxMoCt2g99nQs4rgmMoBuNkSHxKE",
  "key1": "25i6JYWEoE5546BsdpJRNnn4ek7Mxqwqj8EhWSRxKNm3qGYx8LAhSK2VJV2hXesowzJzRuKg9Ajj1TA183XvAUBg",
  "key2": "3Vqhe57rjupGZER3TNGyXo9pxnUmYtTNLs8qKax5AiF7pG2bVhpGSZwpSymfivizGgsPgZv8NX7Vr47Atv6kiLT6",
  "key3": "2QvFWggwCgzFtCXKnpiaacGcovPa1U36qshpSAZpU68g89gmbjqRAvxdGVRymyAdqFtiRUb6cvH3MUwB21p4oUDi",
  "key4": "FjsnPogP8ftr1vhS9SaF7xhxG41LApnbTVs5Wqhxwu2dffUbukNXbdZXD7ja1cwnmYso8YB96wyfjCf5SviMFMc",
  "key5": "2GPuZJDGRNwm69M6RJCvMopovFRq3t5oLvc9Thk42MPX5GfGHKsdfU5zZeWhTpTWG9EAkPBs5ADtFCT2btctVEoC",
  "key6": "aBqWTJYihbpoiGmnttPi2bZK4dQ3ocvXpHrSeeT6k3PiLCQg7Sw7BsvEYz3MeePCtJGA3svXBkyfXimwvFZMByQ",
  "key7": "41kZymkcsLpSd2gQt2UTzhV2EqHdruiPKTVJC42zVJZ577x8zJzZ4vRQyEi5mtMP2MhfQ5QESwT26PcUUy4yttA9",
  "key8": "3raipERNge1CVfqcnL6jPm9TnXXTrcYVSARZtZFHoz5qtZxQk8aV9y57MD1epn9JHwgHy9APLwm8mCsCwKCeYeCn",
  "key9": "2qJtXmfod327Wvy2mdGvUjNBYh4Nf1FGTWHRQmvzjJjcvm1YMZEHG1CrQ8Lx3e9KjYe9XiyTu3RVveemTnxFNBEf",
  "key10": "5HLSkPQ8aJcG15PrDcARJR3jx336veqWwQgorW5JGoP1mR7ev2d6bFhPtWJQjier9PzmaYaNAghBenH1HgN4A4jr",
  "key11": "fnb14mCzSk8RzWzvwvJ9Ki2Ccctr8VU43nJXTU9NdgktU2sfMMQQLhJCdfUvS9Ct8DUze2mU1n88xLofM1XTZZZ",
  "key12": "3KQQcgzhBwmXb1TJMeAasgNHSHtzyc59pwgHMSWufnKzxzy3YLEMvvowMAbokcvkKsbhNRvgt1vj9qvp4peHpZg8",
  "key13": "5SEsxeWKeuqyN66dq9QBxGUKEiAC5Hmt67tgVDzdBRnRZpGUANrXujsioq42NpkLFaYp2QK4wxdbSFfVRWAXhpXX",
  "key14": "2Zjyfog4JreisD1A3kMsc8ufk9ryMgqHFe5998hU4E3YKvShw1q5xBJuRXT49nozi3TK7gxqM5ov8dV5i7SKDHse",
  "key15": "3qzvofTshUNr6fk3ijW2zmygKSWMTAGm9eP1gdxyLqpT8FAT17mTNK6W9WAtuzbRWBLD7yJgBTzUWBHpLEmruDmK",
  "key16": "cUMP3Kor21znZnz1NkKr699p3MSiBBshSEsycypS2UZNg1kD4hpBxD4crKFJ5PUNnkohy3PTxSQx1sdZ9hMYvSv",
  "key17": "5S36FjBsv2eGmwMLvpN6ahMD8oWkmHDJeuiHnYktBaSM7SZnu4RaFihvpuxFCMNy4BZHVRgh4YwPjv9tH3aFo4ds",
  "key18": "3PSztr1GTe6N9L3MgB5rwCx8qxyAsLxhLev4bg6CKdhgVqd5iJRkLwWKrpYg7EXfCRgwLPsGqXp9dbwabcxc987w",
  "key19": "22UTxYdDSxyUrgBNnPPqGmAzzsSi6s1Tx3Mx13hLt7G8Bt2r5YLpiasLxw23ssRUoLUpAHvhFXfNrm3xWTTix3dU",
  "key20": "sJaM5Ky8zi4wfdB7rTMEypQ2SSoqupQ8uAms1db7nbq4iuvehrFmgX4AB4ZpyCvRPoKWK9cE4m4j3gsdGhshp2B",
  "key21": "4B42CVfeduB48buZwPfEgQoGc2LY8o8E6kaAdXCc1xbXLaGUP4YUJids9bkofm9gzJNrETBbTpZ9w9YtnL8759Zb",
  "key22": "uATKuwbYkMs2ZTddwjYkJ8saGn7eDW55MXcmca9PrdMv89TZbmm9rUbe47mQPi7dP3NqPLqJ8NiiPMRj6cg6Fm8",
  "key23": "2mrkSvHPyyta83rGXR3gptNowRXXu64CuVa1JqUeNe3X8Ces9KWN2TtXCRxvepwafFQYdKPhA9PH1ERSHUBP3NuY",
  "key24": "36DSVCkSiGcW76ip9Ei7APhpKHAtpReD6Lu2H7pw6fUTNQZaQjzuRkVJrXHyjYsY7mbjfzW6MjJbjoMf73mYnJ1U",
  "key25": "3yQLKnS7wrL5jHjG1gqv9bNumdddGkmtEqStLFbdkE99gU1MtpxbCWA88Use8tmdZ8fJmtVnTJqkiaDPNK1rNGg5",
  "key26": "5DEWGjTVjs5PuHpCB3ETVwrAmU8u8Mqs6jFR78FgTFP2QCvhKhhh8NSYachtoVbzMKNdWvZLEDoeidpjj4hojfEt",
  "key27": "5eMAGGZ3bJQuGFjY34JLc2mP1KGFPcdRJoZBy3fWNr9hN6EWu2Zra4nmUzTFPqPkCy7YWPqpbWBCcZQHTHoFTeVD",
  "key28": "3ZtN4c7oqcEZnuSpD6vYEyXLGt73DzrRKVGRDMpguaY9VrAe5RhzR3HjmReonLgUc7qqLXwjEdsByVtV32EoTaoK",
  "key29": "4b86Lt9L2v1EF75dNnh21Xn7GqC3uf58yszc6HYqGhGT8pRNf49wuax92FdvghssH6PnNnTS9aQaqtQUNrdDMJ5g",
  "key30": "3LkyVQWek6C9BamQdM67UWK72h61Xu9n32ZiJuZ2HTi6JzCLz9dXT5YyMTEPyS9qJUPtdPwEKP8kq5f8WuT1qM35",
  "key31": "5QBexsPFLzAFSZBR9Xugs6t4bpX35fUN2Nj6q7ZMmyQJn1nKV8AwZCXziWeeaBHn2WeKGWLACapkKH42hxkjDfF1",
  "key32": "5fVfcgRQNXBWSQEVtqaXyDkQjUEHC4PgHVL2QhtKREeUfiZSHU4rgNf1geQkfcs3ay7m62qzjmPyBZZvsgWoAQPD",
  "key33": "irhXGJE3Nc1SVxscGoXtMe6jQYNRLjU33TwMHx1omupESXTEWVwvxBrdBWMvqRz5eygt1A174peVgPdHMYjgXcK",
  "key34": "5w1PDLZEMDsvLrRpNSSqBhQQN6Mr2TQbbPZZsmabZKa2mvU6UkGgATsBC884ggPa3e7jtC12nnXHXuWmneJyXACc",
  "key35": "j5K9E2mJdGKQ8LjZQGf45XgpK5BcXWMsbGprmono78U8rp85GRGLrxZ7Xa9xp4QpeDimBduVU7BSqcTVybb9zPf",
  "key36": "5eR9Wi41kpeqoVk6EdgDYTZp2Vxg6Lq8h55HAgYKRw7NQRCcXdp9ffxx7ZVrMC25Kp6uBYLAcX3ZoXaq2nawYn75",
  "key37": "5p9ajwZLw5nHcCqTdSUcWJpX2m8orHNfsV4uN3FFUMnPHdJTafwe72h79mxS2DQQG5Nd5aMw17jhtRjds99R2vJK",
  "key38": "4j93VbL6oAi9JGZp5XjMyRtcYGfJSapbc5CLycpkYewWn6E8fhjVvFmVp2gj8c9WB3Ftf8YHG8m2yW7VJDoHMpqS",
  "key39": "5niMjUNF6R8Dn7cZsS6ZF1WqBEEoHEwHPabW1dqTC3kXPtm32MDvyfRBbFGmL9NGKfthWx4goC5L23bK63oJZtwL",
  "key40": "5QrPJmsDArRnNc6aF1DRHQM12Edfi5JUwoxCFft1yKefYmUzTihsLw5R1uU5ygRMFZvicYf19jMgBf4KQQBp5sLE",
  "key41": "3kusqtmzRQuPvHJ6GGsxbcMZRnMRTwReU2qRzMtVDzVJ7bnKEEzq7H2jGqPz82wyNUWMU6QkzNEitbAickzgebcj"
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
