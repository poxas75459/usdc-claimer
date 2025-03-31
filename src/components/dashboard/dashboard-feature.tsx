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
    "2iDUAtMg1tk9ua5qSTYAxHTMkMLEkfQ2TDvnj1mX4cfZJUTmCuN2CP9vQ1xBLEhdL7Cys6h78VBe6oURsg3iHAKE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EVcdH5uJVzUKsMSRuADgm9z3ftckwHwqyUioB6ow5EnfPU57Zg8ejQnnuHvB2Za2cuY58FZvEgf2QmMA6yVVYib",
  "key1": "Ay8Dtq14goxK3fSNjAeH3QSzQQDYxvsD4BP1ncGPBm2Aupbo3fTHB8a3UuCTorRSxGmAtComxCJBN2LU7Eiy35s",
  "key2": "3Zrw3u8m9Ue5YhqyAFw66jthoAkEYCWZLPKqBgPtXm8EBGAigBNE76k4uGfpnzbrDuASvGHEqtgvhsNN7eFBmsfe",
  "key3": "3xNFUoia3c2xnmeemxDvCjTo9R82yRUzw65h1SAmcb4dfDCYh9iTdKnj9wGd6wERHhvDeX29P9VDs7XW3LTvqqyc",
  "key4": "2b7QhiBMi3PVG9xjLg1EgNbMWam6hAEEZMBFhKcFYqc17akPx2FTVModSMidpqtn5mmxSbcBRbgSNnV3Hben3rqe",
  "key5": "5evqkw2p9hJ7GTKthT6itumY1FVuY7F4Cc9krWXB4qq6uAwAFJTJdR2kYgcYup6NkVX4dhCtTWdenY9Hdt2fCj53",
  "key6": "5GMfwihoUaxBeutTZPAbSoNMGxyTeE9cVKfcZqJxJHp92pEAmydJmZ5G9ED5hZpZrMEhc7eVXbhQDyW6QvWycAMx",
  "key7": "vEbAvEaBo884Jk9kkic9fruGjQr7Lu2JZEyiFwBrxioetvcneBSMAGfTKxD7dShwHt1DeD7BtbNgQDnYMWTjJDm",
  "key8": "aJireg7bJB6WuKJDCNpaGZXmTF7fdi1P7rvYHKW8N9CWLTfRoqSV5UY9ZRhwJBZ8B6F5fnqL5t3NZSgJSt68VhW",
  "key9": "5obBEiy6XK4fR4x7eXoCWHcZb89hahzSuGBh53ez1NrE3ZQTUqBzUFpwsmpBphVTmrBuTZTVGCqGkAfoJiaMCnH1",
  "key10": "YU3uYhmRTWn2XnC8SRw2poN2LNaiu4QJjzGtmvaBzn2E3GC3F6fbTs8k4MQLaf8oxdH6WR5qzGaKr9p4K6mCWyg",
  "key11": "5dS7YXM5joq1e9sUC6KoPezHuVe6RrQPgMDa7pcWMqF1QmMDmDQecWLKixa11aThgWbDicshrsAuyfdPg9gZagS6",
  "key12": "94QwpYza7ME8oDVu8MatqRibfgQjaqWuLBPE1oJEVeVQ5Ae32ouUBHpQ8EwuqfFARYc2VY3UPD2ybRa4DdLQvdV",
  "key13": "rUpbutqgGfhNFk9zSDSuW7p7r7afhaNXGMtzbAD1dhYJzMwzZLxAwXBnTb9kqC9cEH8W115AivrRMuu42PqXRq2",
  "key14": "3iQDzC8Wgk4FSF5hSATEToL1fhRg2b3uzDusbQd6QYbvDn6nH8zR1LaEtL5WmGNQSEaxbMaWvFxc958G4RrwXWqU",
  "key15": "5aqwcSLrsH66wBqXsdVjFGW3DtXg2oLwTaxrBoEpaYXgpCFB4Xjd6dkSwUjBavpQXNbf3FM5Qxw3nDC9NAoFSgoS",
  "key16": "AbpT9N3cUQuKcusjMMsvgRUrpXYGG3XnTtHUFmEaNAYC8Rib8E2pyVDBpNW9VhC1AxpBKygkqmqz13aZgCYHsqk",
  "key17": "5ZGHiNUMaWCGEHn8UQaqrsGE9wsWn49pmjEv1ptEZ2aberi5Ym8Mtyib1xg8298kd2xjq6JwYPZG5suZTcfxEnRM",
  "key18": "66NDBDpJNvaMyqmXj1YXPyqm94Ko4RrUmgeGmKkxmeKQ8pT1tziM5MXsbML5VU5mRSXYuKcmthZSa1vzZACCQCMq",
  "key19": "4DUVyZCELhut6kQw8vmWJddf5bsEysRPM6gkY6wkxCYrunwNjokV5yR3f5MiZA2xzpF13QbkTuUdQhX2WZJeQJvG",
  "key20": "4VcpGaXuAqQ6g45ajYHUQzm8gSehN1tNCieY9ww88DHt8DVsQcGmE5SugrsnjKL7MUChnUvLdyHiobXM1Tqcsggt",
  "key21": "3SoT7CGqLcaZVK6p1k4n4xhc3ueCQQMnTJMSygfyXQfWUopB7jLsRygnmHi9XVG7Ly5gq7CawEdwefH66JLn2t5a",
  "key22": "5MK3FMyt3MDpyLqV6ngQrKNus22h1GitC4JGKmD5toz3LK82axaDMENJStaJFScwa76KBZX9R9Ahfyp3TPDQiuc4",
  "key23": "5LZnJEUAaJd1MVgLkH6FXh7nnXGNtEvkx8KXX7Ss1H6pjXbo2CNg1x9XouvAxeRDTA7DMmsaAWZ7LwQ3obbR8E4H",
  "key24": "3iK94oPKENDfCEAGTdntZ5oH6a4SVFiQqHodyrfu1GxHBudG5CQc9JxL1Z6BEnLEhBuaLzyPXfcvDz8W9zYMpM6P",
  "key25": "4baKfZmkKk1m5YXv3nu7ZUE5HuK2jrXmdN7JVW4jub7c82A8f7Ld3i8M96EsdB8j5gbgvSP3BT6sFJbfFzH9Q4f",
  "key26": "4NevYXhZtk56AWH4Y4Rox2L2mShHqCZioK1UzXbQePR51t67PDxdWfnhM2Z4JgHbFnaS6cgyQoPHgTSJDCzZBkG",
  "key27": "4PMcNzcxmF1dGV43pYCSgCtNzRLtpoTbDg29JAGsY6co95n3dyffrvgsY3UL7JcbuTdXo1yoW2Z1GF9hd3gn5PKi",
  "key28": "22skZiXkJPMweS2Jdqh9YJpzseAffLXPLaQvwhCoc4yXC2GmUukqCzgKeukncmwzAuWsVSHa4Cu6YSphiN7Y7uea",
  "key29": "3RhfxJ8kdpvVnr2frNPF3KQzjnsDtafZ7WurJAR8KvpQhe1gC1WEHLc4RMMSgo4ophpSz9H1ezdMSnwnxp52hZnL",
  "key30": "5UAjnv3w2mQqoMpWnXgJdQnDU9E8VXj3Hmu8QkMo9VG8kMArvgMnsA8hwoH5HtkC5qGYy2deDGZS4HBCWeP4PSvX",
  "key31": "2RTYiR1qakK9mGESaoHXtc6hxJYF6TWjpzMCBTmGVr4hoYyWvumRZPJBhg4LjaXn3Aq8HcnU1Eq7zn7Sv7QttsY1",
  "key32": "3xpynGehv1D2nQARx8MxPogXXNz7BjcgcXkcPFznsZSHfCHT9j54k4usztjsbFJBeCT6JxstXBiqXCDdbvH9jW4F",
  "key33": "2MmWmPUX8SoT4mhyeSpoFqxpgwcGdsYgodgMaKeJDpe7ogBbPhArdBH6MgNgNQZHkrDVvMYN1jiQCLRiiTaBWuGj",
  "key34": "4YZY31pLTXQhauqgnMx5EvDonzwALTXXzkjBwZsuNcwjPGvWrTubbpLc9WkzntSH3Hn7N4HJVAG5pfBGd6KkpAPo"
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
