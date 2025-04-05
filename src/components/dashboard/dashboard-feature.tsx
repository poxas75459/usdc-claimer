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
    "4QEg21NjdRjVRLp66CrpA1KFJbB2npcc5mZkvaihSqbCA1z2KeDorjiwAFJCKkVZeFfgTPQsnBC1Ld61CTAogvSu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46tzxhQVFz1W8pe45oSLRBfuPgmETmzSrKQUx3tAKUo4tnBdtT6h7kFaYaLPjN9Utz9WpDQpJESY2tHKk1vTuCEW",
  "key1": "5Pz9KKgvUEnZ1mrEFVZwsKLhjvQB2KicGZ2B6ZXfUGofqXaX4sJwAT8xeQvRanSsUdc2bEmPGZvgFSAowt81hKpe",
  "key2": "2tE35Y8cRNzkhzhtpdneHdgVzDrzdmJEDwu2DCRhiB1iTedUVxJ2dYniwyCZcoeUkJsaLDmgrvgtKP9d6dqLPuE6",
  "key3": "2uMn6XM7SHShLVK5oc7ufQC3pZp2MvnHCE5usvq9oVo2PFNSZLmsNaVRtzyHrGpJh5dVxygomHuAaDFxck36wbMj",
  "key4": "2jih4ubMpmSZkgTUZepn1t5mSamaZencTieDyP3cqJT3G24AiDDFT5ccvbtULRofF8Qm9pj5bSdEEDfRvHgNk7nm",
  "key5": "48K4m6vLVz8C3KLTteiZTUkUfwor8AKXkxzy2yfMP16qnAoTqqW1r7bR8ZQmRnMMwJhjxUVw4t1p1DHG1hNnKVQD",
  "key6": "BEWzTCDJjrMqeiW9J5ukj17jXHGLwQUXMUwazPdMMSzCKNb1mMMe7tvkDaoRepsPfTeYoUyQZtketpHJmC74hYe",
  "key7": "55GPxWkpXqqfvjoMyoe3cb25MnEwudEWRSQ8B6PofEiDKTSNscZ32xoS93uoBwBFwMxLb7XAqxo5tMKdBJRqee39",
  "key8": "41Csx1sPMY4CveRHNMyko3VrSofvnznZqNgbpX7YqK4GRJyG6xK6aoqUFKUMgSExmM1xwFTh75ZWFyhMH3QqYTtL",
  "key9": "362Qt9bzudNicSx1mZMPJc3QpR1aNTp8UncpoG4C3GCmbyvVxiJmzvXD2MuxSiUMtoprn5cLWABLS5cDbCbsQQrF",
  "key10": "H3TN7VV38miUT5ncV5vDyjMAnAAdkDpPYDEHeQjEmnCcbrX9XzkDXNS19QJ1KYZT8qr4aJWfyLZy45Tg7W9whJj",
  "key11": "64kKbTCetCr1ms3YHzz2YMB3M6ye6eQmkQBaQxFMcSpqnxGk3iUdHb5MSACCdk2J664x8gYR4hgh8SHfS79mXnJe",
  "key12": "2pTADUfTTQHZVB1GXHwGCde8zgSgjjYppnoWQpLP5rLidiyzkwSyACsG2HJjxPVibUiVzvWfi5XBUJDnJG4zrNjc",
  "key13": "4wQqKrtLcXKYv3iWtCvCtRoSKerRbNPK72ByXo7UPWDaJLqY3bNZUumcr3BAzp9rmSjFinpcZgM58T9hnVjvLbH1",
  "key14": "2SLhqTpsFsmAX4LVYK2pRefNeFsSRDj9Ny32644UV9AM4uAtcVWFAbfwtyELo6vuZfu34AmHBMT4Gvf5ijvPRpcm",
  "key15": "5QKGCc2WVqkEVJVhHWdhEnxSUHLKrn2Mayu65wPKitkcApNDgUQRE31D16ZBG3UqFTFz7Wur3Vpbn5GL8mAa436W",
  "key16": "NRtLHTt1nyYoLouRf1vBh5rtsUSshWwoZ5Zk97soVnWJZyGVADsf7iVSx41wxpQVeMWENNYruRbFNcd2SrXkKw2",
  "key17": "4wTgKW4QzcAQWNw4xeqHMdjbvR8tRnv1WU27DsD7np3YwoUBrBo22q9P6VUdq4yhY4DDekJKSBLxbqMs5qAGYR1h",
  "key18": "LBE5xUvpqhsNnwc1c86kL5THmfyvyi4gs6hSMaxMRKERxhV42XZrqvCmoJXMwUTtYWZvGu8fs6FkV4u8fs1hnT9",
  "key19": "5pEhmZR12MnXKgAgHNrGvrZPDgnLP9A1spmVe2PNy4MbUGtYqtozKJYR67iUXjbLZZ7yBmBBQEoZNQakwgi7vN9H",
  "key20": "5fGKpFFFmfPMehMQugSmVdnfJPuN3JUggMWZokuLsh62HCEVubzL2WvvzCUiPqnNfPHTYiBFSmmG1ib4QFPC7mRg",
  "key21": "2pu9mHZaZfdMBAmJ37gN6UL3Mz7G29fCaZaoazy74KUZKG7Jyb6YTc9rRiWxMGafLXJzh3SXjuLrjXwBCVxoqpMZ",
  "key22": "4jK3aAWeRrnFF4sKzafNRgDftzK4UJeWawahs3DQKhtbHugSEHyi16BVj1DetXBMAh7Hc8ZAe7sDFwd2yoBNbuSP",
  "key23": "2yhfWmzC1Tu971DsgFAfkKMcQumkPpFsKmwJgbkvz3mmwqrSx9NdZjE67288BpKBPJ6hsXsAm85MPRowtrjJTPZy",
  "key24": "5F4TML6MyzjoCv8aEmHn1r1WTvhXTLZ5FjFyRuuHXYXgJj44kbZZk6FbubSA9vFSJsF8hFgkEyCd7uMFs7n62B6V",
  "key25": "3UZcHqxc6HeuqE7wJC7M4Zw9YZsFDg6JturqWwpP6Ec4YyEQD8y3Dr7cbxdgvJyNEbPt7VvyZxmQdvbBVmwHrJLr",
  "key26": "25DoHxc8tYPur91uf4qtuzTMpqQBVsMNMoGoHAHgpdFZL7H6YudccKRyTMg7jYZ6oDVbwzjWZPoAEAAhhwhpNoP3",
  "key27": "5Lt7Jgrnx1MaZvQtT5HDP4Sft3JBmCirNHpmijq9xTGjxwbYDaWQKHJnUzVHH8EWoV4pJjEin9t4yrNnswKaMJJY",
  "key28": "2patEMgYqEydUCvNK6rdLYHJvpuNdFqdoD6Df5vEG19BaYpoqA55aCNj566ymzRmH8rAGta3jFPbvR3R9wzBHmZ4",
  "key29": "4sGVp87MqhTcYrcCZ2u39F8QmWXm9pH5G3A1VVVakgURMyJ55CiEEQBJB1uaySyf669MrFvS7ok5rFrkzCSaK8kr",
  "key30": "5k9Y8Xm5TfksQnYNNTWAEwUBgy7mwYM1kQKA3UoMbaY36VxGdoqxB48w6hzkjaNA6U8bpDLRW8wo2jE5wu8LgCBZ",
  "key31": "3m5Qp5fJFifCnPjFFsmpfzg39zuoQGPqybX37W8ecmPTsPN4bx54UJJg4xERTXNVQQ3jxxrrXs7YqeaAF5qxpz9h",
  "key32": "rZwDi8dnwSmFyehykEBJ9R72Z9XZLUojCcXJRfmm5R6oPJzw9TXnmAutPwdFoanwseVfHys1ZGihzSQs3psFKb7",
  "key33": "5x5t6DS52GyBuFfDuPjWrRf27HM3iFgMEW9itxy61zXAZKFQipEhEqBV7jTjwvpYGmHaJpkhXpBvpQ8jEgpJ42JV",
  "key34": "xTfCtBAJChwpodPKTiTN6PiG9fqkDZAq6oQPUEEfAJ8xP9AtkuAJNBt6xMWtnLGGfYRW5u59iNpJZ78nLtQLCTU",
  "key35": "2HyLQyzdUvZVXdr1Q6G7X6RuuWbRzBDoMgX5QEebcbNvw23XfdXvwSL4iTNK9V7shxfzsGhDYc7Jq3tb6EX4tqJs",
  "key36": "4dARcvow6T6YsNdmzWZwiQUr6TYGgHtqouZADnmWhrYMsuTiyKXAjmZGZ6mJWZ8eZzRZYyhhGt7e9rqmGUnbEReC",
  "key37": "5J4VK6vC1yot3x4ffwjLq4HZQsprediN3FbM29DSP9tSMSr3AHj66Mw5k4hQZ38JTVjFSKcbjWaGL5yapXM32U5B",
  "key38": "5JeNK5X28Nmd2JExyDi9mPEY56iMKMCfQuBSfsmyZWHrH3jKgMhzm72B2QqFWgBgsxGhS3yqSAfqGZXhLT5jyu51",
  "key39": "5JjmDgYLTU25AoHCBKJyKsS7ZiEzrikGweeYBD8h4SLZ6u88NqvwdJdDEXFDqN54DN4aGHQjvAJ4iLeoQ9q3VjB4",
  "key40": "3x46EZCfVVnBsN8sGptx1kCYuwPtodfstUu2ppUB3yBExKNycHsDMu8S8TDCAhutAkKaCCmcgLoJWtEuNZz9orpR",
  "key41": "2TAxjF1KxeYXGouREw5K2kqEem5qAbsqorXCctvwM1CfUgxz9SHtTMfVTqbUmy1F23g4J6fmMvbsyfVLqqmHAhWv",
  "key42": "3L9y5dgnQhQc5noasi4UTzAGGwVXKf6xjYRocRA1bWvs5cKaT766ZmVJfwMqSxoK1ADpf9TNZqk81LNo4Jcn1wso",
  "key43": "44udJhL2vs93HQJjEUVWqup1RVukCZjAsLsiisG9C3BfAChmGE2AW5qhcZu47rNubLc6NsDe7TSgiEaWtENZZgaA",
  "key44": "3Eaxveug2RF64F3KQGme3df7XhFjjEhJm6HmL8YLkBuGMjaomyPMmuozyoF14gjHX43tWXHFWwt6tMK7LvLse1xh",
  "key45": "67Tx2Xw8tgoDShDKMsNRZHF1vgFybyGGf5g26C9JxQe64x6FYWTTrruFPKqB8sErFx5ByTSrZLogi5Ump96Eqf3b",
  "key46": "21jyZQvt7BQsoEvVngAYRNUj1VxGYph86bpU5vRwCSHDszTZu6CsiaWwrydPFgZKRSqu9kw7ThVYbHJqXn4mqcQf"
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
