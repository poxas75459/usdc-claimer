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
    "4BSPxxcR5rGkoaspgVeQqwUaWkDQ5veFwjBhrL55Zd8RYNvN7cGqSLQY5bUiveMcRAMyWcnGKTMoC5wKTxSpejXq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LwG9DTcyhY7JDACDWcepvmUty4viMENCnhub7rvpwMu6kskvmAzdFDx1iAAuQQkdVtSRH7KjBKmTkdEZBpEm6qu",
  "key1": "64uDu6pXZyEodQNQUDMkpf4ATWXN87rBt9mEu1QxoqEtAN8Nq5c6aJv4J4JUxzmKLhpLfsxH8hmb1Nqax3WKtUZM",
  "key2": "2NdPTDH561RnxhypkyZYaGX5XYn98HmFD8MH5T4gdsouwFAyEeG3VY8PtWV22x6bVt3NQnf1xiQfWugfGwkC9HvQ",
  "key3": "2q2Lz68wP4i1wdwFxwE1CTWiP35yoYU8CAJMZp6mS5x1W5g3MEfa6TSnGGyUZ35LPYBuKn7KmSGeYzQVpS6e6LFa",
  "key4": "5aMS19JmWgD2DsAqqrNf8jz3PLPzzj4Axd1zfpwNQ9x4jhS1ydLvYD8Ruc3LDzSz1az49WiQDLKsGerBfJjQCoJo",
  "key5": "3X1mwVSg5sYpctBdTJ8nyLML56uuWXVVgAPN6YhhZR7RbhVWTtZwqEXNFZ8DkP8RpmZdPBiXT4gFe49atotr2kT",
  "key6": "3CHkv4XX1LnztiD8xYBgRaZkRjdt5BF2bK62QTyUcJxJAmAuzL64L57qwq7buQFarjav6KDoQXPyeCSCigxHe9jF",
  "key7": "5BgvQuLicuBWALumthUwxZvkN96FKevUzQcX8fnYFi8VyhLTodPezdsttt3ZjbvqLxaQwud7gQNX1Sg1VXT96Xh6",
  "key8": "wexx2b4GSsYfQy4QMxLdGmmKLxoXz8kQYf1pPh8F7BXfysxXfdAydQZRp7btQ2YxeV1rKTurzx8SjLz8qaJYEJk",
  "key9": "2taQreneKercAWrQs8oUsSTD9iima3yVBnWf9M3QwkhYju2y1U57XaGbiqFyNKuWsrpzoCm96YgdpMpxdKsuneKr",
  "key10": "5z87A9Dz7SLvtdGZaYGrKr5YfyeexBZgwW4KQFAEvgQn7j6fWhBHWpjoM81yiCrpXWLwvQGw8kmnMoXVqzvQopgS",
  "key11": "5Uji2w7npHS5GR1CteNcM94rELaRrWCCji2qxMootZrHSDaZzFFGfcSymNUzvbzD1FqeBTJMjg1PB73jdjVZxsf9",
  "key12": "5r8ZVSa9nR7VFR3gT5iTcqgo4nQUTo1TAXfWVXXcuZgdDCb2NLtFCFpKga29fwrArqDfkVMhHRWswk8wGH2rVssX",
  "key13": "tV2WmunWrAKN7G5hgrNc9hipBeisi6MubmTHNm4z2hybQJGkvBF83SUNo4Aq173Agb8wwmGXEwpzzKe4KG5DjZt",
  "key14": "2kbpg4RR9Y1z2tCzx2MC7EixCvsth7paM1gdyeV6zPCZREs8fq7ahix9rVYiYpqyYe7bMBogG4abPNZQAD7qGQV2",
  "key15": "2oFgK1RQEGn38q5syrbrD9J3ih29JCQg7R9pEqCMHAHiFAwcThQAjpCXEpfF3LdBtux5MojhRtXudZshJiZLtzG5",
  "key16": "3e6Q1NrrTqFkssVdNkB3qZAB9XyM192Tn8K7373QXCwTSKYFhivoS83BYe97fxZrqh4J25D79LXn6HHcH3d26MM9",
  "key17": "3kx2Lg5LCsvzoW8DdRxRavDzvP28pD6K6a3TavTnP2k9isQFveTJt4Js5zqHxUnmQMdJGeuaXCtdGLvKi3Y24vpd",
  "key18": "2dd3QQgRwahdCNPM7hngjCnvfWiXwfmuWEKw2YDnysqG3hZoXqsXHWotPkf6ya3JHSbFTDu2N3LtViLV5fAfdtet",
  "key19": "2Xj9Aq1QnKVkpcVLqhHGUtYXnmPSBMr8GXTT4YNrApygnsjMVVrmDXJZuR41B6E4DB7a9zqeHTpBr5SWWAuiRusd",
  "key20": "i92VTK1vNcA5zbfwJ8udLDrY54wtGML63XJ7RJu9SUuCHRzACQvbAi4jCcxyoihTiJhUJFPY2NfpmLzWs8ueGWD",
  "key21": "4XqU7BpsLBKDRUT2kWwfairoRFHrUi6ujcCFTDUCwrrMiMehNuPi8iw7W1fxPXH6D1U1WVs2cK1WK8z76roBaUK9",
  "key22": "5ApXrno7fzBQ6koNUxjhjvezfW6ZRZEKWU5p8LhX6B1Y1cBD35FnNuvmYRefnxpkAfENpC42dQDzTxJBmNDE1ebS",
  "key23": "2covH2SK44hLXR4TYuYoxhXTo41ozoKnPDCnbZqLMnrBgqq3XCfmMPcV9fkHK7Pn2mwLBwd4o7MU6XvgsuxLpVed",
  "key24": "JNmDzZ2CRdG3sPhRBTaSG7F9Re46Qni1C2h9GmRZE99AwSLvHARXc5HGM8ivV41LNjKproEHxTbCn6ThngHp6ce",
  "key25": "KUFjK8kNKkxUnRS4EtzyMtHRgvHLfZAZ7p2W5ZdFyvHJT6rAqdPPD8pgHXWuQ9GqwQmHEvnYgZT8pQZUeAn5WvV",
  "key26": "4NPpHXuBUMKoLSsRyNeE6sTJWH7zF9ps6zSREkTwqzP6jSLf6XXT7DT2ucz3GioMuMe4Hg2J2Cq1es8Bp5zrqpZ2",
  "key27": "126moN2pBK6RFdQB2JpoHR3Ve8XaBPeKfFkfLRozmG3o39nyWeGHYDFpAVAZ4A1x8Qt59YPcpfeJWE1hoyxdc7o9",
  "key28": "5YHcTedsyS5sdFoCrFDzrzPGU3pbVQWX9DEY9B9Pi423VRSQ6aAQiBhaAV9XvUcePCZVmXky4gUZCwu2r2XykSYG",
  "key29": "5DRc5ieQ7osypZsjQUF2nMhKt1VmxCGevvijYq78gqiCxMwobHiMLmQrS3xWcqe9UJ14gfxeC71iuYhqe4RX5avh",
  "key30": "iRmKwXouvDs6zD8pXuhj6cvHfmWZfk1S46fmaAjwXVteKZrA3qwUssQLimu1hWtx7pDu9bgV8vqYmznPd1RdWDL",
  "key31": "5xTEQVxXqhZG7JwjzKCdAtQecSCFR2XYubCvmGqAmQ8LZkDkwW2ge8KoVDMx7tGA8ZA7NvwFk8HrBwwCNRMfoVXa",
  "key32": "22C8P4N9dS6poc96gapjG4ocbRavyko1ysmAWAnZ25grWq2g6sZMi9UoZyQXWHp4CXZ62GdfJ5ro3WNxbonk8Muu",
  "key33": "57WGqroxLr6zmWpsqcJYF6FtHG78z1TewLFXe4A5t9fH2YX5pqNvHHEo3cVPWusPugPZE6YGDozkeeg5UvRzyAD6",
  "key34": "5cSyZa68Fb6adddQcrFE3hYgnEz3tw6JjqCt1NuYSdizkd7kmLefMFtJEhTNZXXe1bLUSfJoQTPMyDnaDQzbEE9K",
  "key35": "UtkyXr3A6TiyC2zUhzzRzs2CzeWkuBVpr5p7QZ3JZ59ZuyN8yDXFgeyGpA6CsJRQLL66FZ3qbayhL9sBvv4cBCZ",
  "key36": "37ouuEHzNp7ttxiML5w5tU8RzhBudyyd8AvdmWhUH2U2N14dqg3G8BBPGXAbpvPxV8ypVGMMAPjdkz3z8xfB2GrL",
  "key37": "34tappc3gEptyDvFaSVWocUojgouujB4LKafZAc89zgtCAbFKRJzUD7bAHZLExmNJVmBfaXyHZZkivxKMgaRNXTu",
  "key38": "uPpbCVv1sRstvzAHB5QcSC1qajoNSR5c5TUnqJ3VzANFMEgr5N4asWNW2qkwm2QfX8hLTMxvL1FpzkgvyZsCKJG"
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
