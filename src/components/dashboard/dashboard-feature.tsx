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
    "5ihERXxoJXdihBqLmG4Z99DoHbZZnVKctmEdNaRGhFoPaatyJW2zzyLaREazjxFesR8vgwwcdXHmwSYh16WHb6B1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pBjuufH6JYPLD27NnTDt5GwyJBj9BcjXuxh5h5XxdpJMW7NVEQc74uds3d8jPsr6p24ibsddA1ofkh5UhknirY",
  "key1": "4M93i5rCDbSV15tyit2ByynHDjR1RxhRPUx4QSHMAn2EQC4mEHHvQoweUGrh69ty6FP3GqYnjxkYAL5J9YM1gVgN",
  "key2": "4a4FeZ9J848BPmZkJVuXwkc55sKv5TL9vnpWqVA9RjUmcneJSo3Y4bwGtYnc9Mx5uuUP2W2UzJapCbdiWQcyHrZ6",
  "key3": "2uaZSS3cDbZvnpGgvZByWFJ5YNc1T15zs5i8ZBsjcGaj4pyUXhd2kS6r8JrQCXk4DvQehxiTv3aVpABvfTVzMeUu",
  "key4": "5SxihmjHvX8tA8htaooFvXhEadiv7JtKtoMf2bC7CbHre2SEhsK4bCwSNHhjjNaPUzCzocXX5J94sVxyshESuK9i",
  "key5": "46FVc59nfxAPXQWDqQntYFVtduW1z67ZD2fDGf3BhNBj5UAs7Z5BAUPXq3thqvojAmgaggQmAGhhkgtjaPoMmE2T",
  "key6": "2cdqJpw6yJLQuZ4TV3qQNjHhu51Adiy55jdQpEHW5zT4kuyVAe7ZcGf5y93gCynXiLURGiGqcuY8bDPa15oTcmZs",
  "key7": "5WNrymF4QQosch4SXfMysZw7qfuuxrRNZUZb69SB1JJwE5uRYcDp7daPBEXzjRRr65J9Xx14NGpZjaaTGuRXeh5Y",
  "key8": "2tUAQeYbXBoGrzKwEcmetB277kcaZidnGhdqCYU5ZgrXqp2LPWZBNKnL5YoyDnNv1uAaMUegGKB1MmLBgscuEbPt",
  "key9": "4TGQnXohbBd5NW7fNrw58iZHVqC4rbERNzk7LknWq1FCyxjXVQGuiFjaL4RGKgsukn8cucNGykCjCVo5hg8jKYwD",
  "key10": "3rTRpjbJvmVkrHEsv7b8xWNfqLUB9mKiezQGxQ5NMH27FEPyvPJqKxEMuzektwnnRckbiTtc7fshfCP4w6KbhYBL",
  "key11": "3hFCswnNn2mdHpWeWL9sPZhtdqqFKXT41P9F1TwucV41QWxxVbyMYiymLy19gq99Y6zd6tyqwBkcmKZho58MogEH",
  "key12": "5jBfYp5VBuhV5kvSz1YY3sZaTbkUG8WSmnuBgB4u3TpQ1GCcJsFCGUoUHomjUQwvhnnc3RXKVRVJRyX7hNDFPGNW",
  "key13": "5y3ZGWgNUuosz6HNwRNH7rzQJ5hc8wpXkHNYd35Z1fuSKbaKbEsjZv4fYyRkh7wY3jBH8FkNci9WnFBG3dfN5m86",
  "key14": "4kjZZGngG9LgDLmYpapnWsKZ9zTnyW1VutShKGwN9dinf7RXtC8jhJHZoJHexvv8pERDQTQLxHAkbYvAyinn6cyC",
  "key15": "2ARFEDyB4uRRd2jih945yE6YBxjuApYXNeD7EEuoMDYHS9qWzNWSoAYvHy3tx5kHYP8whNxHQywRvpGfGzgmGCXt",
  "key16": "2iEnc1Tse98LVggWsyJuqme78FV9Ccmgt5ybsaNHFnyF3jLHhgX3B23A5ZVER6EevUr3vGSvbzBkoqq6yujcqy4V",
  "key17": "5Usz6TRgRUvmoLW7vbmut3Mx77pwxhbK7sqyKoGkYJZPrAuWD3fLNCjdfjk3YJv8WjvKGbJiqCwJAkt5EECg3RyH",
  "key18": "242LW4Q4KGpHFfGXVDnm7NBifV5MyjNF59S2k7xTkLnRQ5nNbruuGh56cZbzoHijb7wKhv5GhqUQSg8JTVn4AxTn",
  "key19": "2t5FifGTuyia4Zgh5BoDGuhXdYEahgKaJedwLeKtrW94AkkLc3MJXYwwSj1KdKvzpoETPhTmNDiKbvbjPtXbut4f",
  "key20": "2A9uS4NAr6rtAYSvNKtn6Q1sisCgYovwtqf3u7hDBcpdnoZTs5uh3xXGL7Eqa8mDwT4Lj2Ze7CQ5KRjMxLqPMnWF",
  "key21": "3QsKF99DgzpudjyuHxjXbhvsxaWnUA7aqKur4biF7sVvzUnfzn83LFyWLjEQHvLkxYQ6g1LrCEFivPRuXxuqKYgA",
  "key22": "5Ai2NHtdnTVELRj6NM8ZWEPP84h4SshWpTB8MjdNiq9N9TFjFvcbp6v7Ext3pabpfxBUsyS1vgRZTLtxSZekQSHZ",
  "key23": "4CEifNZdkEbYdkZER5PnXs8TyEbYLoas9j1FJDKcFAZeC6fbV34LfqEPXSZZtrzFY11qmHXHd4VrqkXav7FbuQxz",
  "key24": "4FHCRN199Ckzqe1yNvdZYXQ8vPtVC84tkm2h78PCe2NqAzs2z2yaVwYWHSqBFCixDoNQA6s699BaseymL2XDrzzP",
  "key25": "4eu33LcFmWAbKUNdkRF2eK6trGE8JGwvNLCqXJJ2EGGV5m7znPfstYDHjep1H8Q2wcXEKbtdn1bAq6XCz2jnJJiA",
  "key26": "3c5SERYvwMNoppPTVw8vMUHtc2qruNSTeLHbZvEmxsRQq8MdU5QSvwwN51ybh6JuDP4bsBx8DQiWuXtax8ntAJhu",
  "key27": "2niiTzRq22yBc9K3RKdSGBWBgFZXm5SxB2nbozTGrcGxPeMFc8xJ1o8f2Tz5gMQCTnifMP5N2ezzeNGyPsxyRd14",
  "key28": "4mJR9gHeGk5mMjpmrdj2m6rcBN8wgF8b3smm8VUMu92gqT9cTZ7afu5RPw6tYR3c8xVngezoZb8bu85PYqLpij29",
  "key29": "3YMpXjk2HVf156sXs4Tq6A5rNEruRwrioScpLq6VQPVLS61j3uj1QgT2AzEzfNf4pVAui8e3ZPMHbkU2GGrrqQ47",
  "key30": "4ryM3Tvnhf3UcjVTSPnufpvJPu9a4aoMeur4FfXUx3YdGfjiMmdkZidbZRZyGPWXBnNrE4rKzVXqm1CTin9Yamap",
  "key31": "5ucHvYoir5JBS11xs6M9KsfVgY4Lz4iAkqQ34Cm896jFnMsm7aNhcEkJ9SchHmC9aAXqnTLLsRU1pJUMMBzTtnfK",
  "key32": "244tryKuGuBf5FGRmcBs9Tnzm8LqeT3Kpmtk6JXrcavzZpmyqMvDYhSYG2JkqnsWwUUUHbs7DQ8RpHt8Aw6DS882",
  "key33": "2ZxL16eja4bWSaawQVqbvhJGRJpBgUEgYZuNQF6jUZoiQHaHWdTQ2jwh6ReiqX7FiS4Rqr9RYgnAf3osM1trmTSZ",
  "key34": "4fwk3wKpkUhBaNkd5GBgtzhGYzSXzb5BMDncizW9tZZhNuyJf9LvKo7XcGy3ifbsqy3tkjjLok8h7vjfFdSRW8j4",
  "key35": "31nGHqVAMhemRYrjBnCin7axZ4LUehKR7sCNBVkmDJPQ4CBE3pHK4rX7ZNAUc668pgPWSeNjyQyTpSzkBr2TeaHa",
  "key36": "JkdZsAaiYFuh81omrHXznN1HJquEvijysGqBLFUY1nR3cwWQmKLGVssAEKBXxSgt1CgQHUMriCq7qVYTRiKPeQv",
  "key37": "4QYc3vn7DWdwyZ4dY6RM2owntRP8Da7MvKQgwx9Ag2NgXmpyz4jHj3zzAHAU3PEMrXDxdcSSx2eYYAP2PBiw2KVb",
  "key38": "4k2pnxhXwzJtR3NcM8P7u54XhtkFS998ZnS2kNYkuQXvBfBCvNVkBeFeFdx5rCJAvFhZxH5uGpoyzJQDPWdXubjj",
  "key39": "JHgDCDgenjr38s5NFcvsxxiLBMkni9dn67CPrqhCwGaiUFcPdunuQLLW936bqPSLVtpxbj7TEkJNPVJhDEU2K7f",
  "key40": "2WScRBBB21mjV5Cnm1ApvhTAEdvm1tBMhyxdEAkPpSBrJQdhehCKweXT47VxbAzezWzJ3khmsH5DYeFmSWUXxbm4",
  "key41": "56ido4rMqpeUdbxLzyMne5tNERVNXi8jByLaVdKyxNUeXFP5ZmD4AoBW6RCoTSn7P2wy8e99rJ5xRrmpmQ8UjSK7",
  "key42": "54cwV37XnDwGui5qFMr3BWZDWRbNqEaSNGj99vojaexZLBmFDi2RwJtgccuZ2JeZpv2WCxvKuTEqBx6hLGECByTH",
  "key43": "4gwR386nNFkMkq24qgTfbm12N7PJ7eZAFhnudiRKPgkJVqCePD2vyKcihF61Jmaw4YbhJpTHZdEXdCQ4SiLLt5CR",
  "key44": "4jefPUX2kpDUoRPBUFasbXrn7ba5HVcisxBq5AUXtGdjgvVJPSorig4Js5HSvxALsYkVKFccrzUAzLFXEvq7PA9v",
  "key45": "36TasEZcwgBvTp9yBSswrKbU5jvkwgNQMCEtMASRxYz9aGGMs66hVC9JGpiYrXU2dXzGkZTbnZhQ8QswGgteNvU2"
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
