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
    "3qaQKnHWxskjMyNQ8QX3EKoJ2sGvtbhSdCzsK68D5bFniwda8YCQ5v5SbXnRuWxyedvwkBggbehLVjBN1RBJbdhH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z1txirDafiyX6rsW8iLFoWEY8SAwXqA1Rc4NTtziAwpB2619icdExczQFxspdUR8UoPa8BU8ZEyhfsFGp4gwQZK",
  "key1": "3uneqLXMeNbEiDkrfDz77odBSTnvPZEqpmxo3qFjvSciYGuUX7AgLxibvC7rRTHEGquN5uauFTLT2xYhCA9RhP2o",
  "key2": "5jMxoV2pJ5AGx6w3tyLTZStGAw1UWfmKR9qvhv82he3UmWfyXanXwcMMMNJTV8t5B9WmagnqvVXajpDoAWa4SgAA",
  "key3": "5QiEUvSn7muRLzW1qCxD76x2WTQH43PAUhZ7cQe7n6Tneo6yVG71G5PZdqipyTvZmeerbXAa3qJiwYS3X7RRQ3Cn",
  "key4": "5LyGJ6DqN4bKXiVdYQnbQ2o5g9K26MESe6NqKHN7RbhPy4Ehwzge6htjhyu3Mg5t4pitm1rcSCWMt4eZj2phZ2qq",
  "key5": "VFwPzicb8qSsUvdgqLmveax2KAdD56K2xbP8VWywRhcPNAsuf8JMibdNt31gsy69QBuAf85aFeX7Be7fqvG4mbF",
  "key6": "38J86aMLxuNnWmNmuTiQYHgYR4xZc1CcjqbGRXpVAGNWPejPqh28PojuEStAEyLe1bX2Gh1UuATPBJMAijY9dWmf",
  "key7": "2Gjbf4c4LdfqUWaekQi9jhbUVv3H2r6EXRhRWhYfE1f85NLgW8yzvdMGVu1PQ5wXaZ89hba7Gm5Fbx4KEEK4QaWY",
  "key8": "27xoLty1ea3WMaMh9xMg1CPD2FLoBMi5VLqj5APXuu1aRkGfxfWvVYPBW2gsU36NfPRobyVPspQiNjH6pjxYKU8d",
  "key9": "58Hwa1FVKD39GqMMCvMLRY4qfzDcrmszt8H1ts68wKhp4J7pfhjMK89vdUS44uQctp6edp71yKTbUjvLPM1kuiyY",
  "key10": "NmKPXfVVeGBE8KWrDsfCXczCtkXmGzM16Hpe6Bi9P3DvBHr7y1j2vuFN8jficzozBzPVttcyLz3C7imCp2TsN2T",
  "key11": "2Aw8nHZRn3cthPXEDHJo1j2YzmS4xvvvSZZSQvb3YNFwwiKwgRBqB1LCMzr5vmqw85CLHBGUoxQ6uJv9pvC7cfrA",
  "key12": "5KLwm5MECbAfP2cDxLEeFgTVM6cfEGFwVEQVhy1VvzZKQwo7SYAbN11fgqPFFJyG9qGD9KUptbtS4bUJwhTEe5qE",
  "key13": "3sSzMKzqfQDFscJgAscE4wWF4Q4WjbbscAtqK3J8KuY18aAf3W74QzjwJYpJgggtcskAxmA2NcPmsVSZh2JtxKcG",
  "key14": "5wiDA6JaCedHpttbSNwMaHuLfc5P43JHYQYXXJm5sfw7RyaXL3n2R234dETTzHc5enmbrfnToJDPgUCznkKiKDAx",
  "key15": "5XeDc8vPshcsE8PrAzseZ2Jjom3ME6KdMdWNXvzrmV6eCE2iYQfj23Dn3esDtJ86WwGASVFUupE1wKKgDEC6Cbee",
  "key16": "2NEU4oLU3af333bu5CJmQfWHbxnTSC5Pu4VnCLy1jTuvA9JrGWZehQAm1VyrRHgRByUHscPR25yWJ6GD5S8DY8tc",
  "key17": "2m1vZExqTTgYD3qZjd4cfCPJvh4npfKdt7bX65Yg9WRi9RXm6jmMLdS4dNUaNa7QbeQSFEZ87a6FBSj7XdLCpVy8",
  "key18": "2VP9Ki52iScK3Jxacvv49ZWC8C7naSeWeNK5UeAEYJGPeBNDnA55R7uoXFoJj4aa1P8Hd5s9fv9srGojmuDE4eDJ",
  "key19": "5iqXRb1mgFKDe7vsVQV1NjrDMZ8mJYo119P2tkAycKHRjtZRTWZ8tteZTYRYmFwG9Ps6HPVneYJVzZYJuqWktK2n",
  "key20": "4bJ7hZ1gNxwEJaatbpdF1G4ddM6N2GdQbioGrertdcW9dhFxVtFpbs22g5Na2yzdga5XGdCYTX98uWUbEVpgPf4",
  "key21": "2kps7MQpyK32K7sYzMXPBekiUXZtZMuKXSoMFTNhufLTQs6KydJQ7CqRxwSPVv5118AhydbQJJny9kmmqpE3xsQF",
  "key22": "24pGb6rWg7yRiyVNLdKk64PQKq7w7neZ2phFfTWQZ8AXmoxg5zWp74xshBcPKxhxUGmLd3cniZt3kGHysQVFcZ5D",
  "key23": "2epfe7s98257PKNy8tVbktdidhFYgVcHTMMjdD4oUBYpqUdTiXWEcYDuwWhsj4qgdbTXw1AGt7vND5nyJzYiuSh1",
  "key24": "4jTa2FWZay6zwvtCbpQjFdEzRyYejaMHwWKeMvv234fnKErbnAvG4gW6aVSMt5DV4Uh8XxJ39txY3eQDpTUjfkC9",
  "key25": "44DEp4FfNiASTFhKo2mZNAZFwBMMcD5iBHGs8VSouzmnoELrQMHqeV3TKqdwgMHAHRSJXJeZepwqeCjtETiAiKcS",
  "key26": "5epnDfDA6QLV2HzXjzwxwEYj3nusHmmz5Qn1TuSzxf2v2fH3TE4FsZZrc5xrGUbDMxNd5QQ9rnkr1qcDSTsY8HBZ",
  "key27": "4dyjr8P6T8HvFCLNaRSppR8mrDyj8yuKwJP24gLn19xq6wV74RVzsxaGk9R2wavFDKoVry1k3T1Jio87ULC9iFcn",
  "key28": "5TEjXfYf8eKoSrwtuSRt6C8mHSdvtVnxKLJhc9wJUsusY18BKeQu7ssj3UrPGtAeRqnEUMKEkPFNdMxmhT4v4pSr",
  "key29": "3xUcakc16y7L8YfPKoAXidnDYj3nNNk8UUUT9CGJQdp6iXHvawXDMnDQ6xeshccC2waPEjNeLq619CH7UJyc4w4B",
  "key30": "63raUG7NeEEuLrP6Gydcxffa9oALcn2kshBaVCMSdLVccr2w2GZv1p6oF8UvAb7SGxfqRwYNZDvPj6EanaqyPjnU",
  "key31": "39abnQfsvffNNYfp7aXfYMKyUXy9sF5aeasKZjGjndacBmw1TUVf2cGEms349Pv8dPJBXz9uND8P2RD3pufrUba1",
  "key32": "29WFRgDrkD2j72cfWvdHqhCJrzCkrcU9pZRPz68QF1Y5fWJNW5oabZRJ3eH8bZ6ifrtPd2BDSVwxSWVRVpTkBu77",
  "key33": "4W2DXTUq2edL67ig3EZ8TVu59nZ1Hp79nirsV2YBJJgYrr1Hhf8QAgNLEN1cucJzryNU18yyYWkf96RqPJ7EmhKm",
  "key34": "5KbdkZ8pSd8fe4CSP7sgJbHZiSLhCzuL2TzSKNqzN67emiiXgX7q7dJ3pPDi97tZbKwNaYQvSJDmAiRDXr5fqVxY",
  "key35": "2TFLRmuKqvcPBA67cbGR9ZBvbM197f8jsH8PEbeA8qset5XGWaWcGB8bsxb9NuAii5fCS7fqHqnY3nTtsH4Kqrp7",
  "key36": "DZPCSt7LQQbC4xHeVEW72uYX1W4tTPYbvtFrYgnjuEgzmHJ8nNZ6NMA6u5FSaSq89PQAm3YxAFnrt8N7gfwCBj7",
  "key37": "5HJxnoxovQ84p28XDNQQrYXd6oiEadBidk4XyjFbXW6LDUscLYkho3CG7L9njv8DR3MP7ZYGBFS86YQGU3bLjsos",
  "key38": "4yL5axbKz69egGAAduaXGKPS1CJT4jh8T7RbELmu2LpDzVEzK1hB1ZrWciwDNM78npTZTj8EnmCvALDLEHp22yqj",
  "key39": "3fZR4fcsfpTHdvy6zK5hTiUYuEdZtw6Ue8Fm64KRRn4BZyz5BjP7M8HYYoRM7dJUzSHiEDMuxPUb3WfcV9ZoYqLz",
  "key40": "3tJpYuf3N5TsJpqeat42qY75wnGqfNVZrfbYpZwMNQwzYBmKR7JxDJgyuGwtxMjVBUuwfuW4dR5bhU5x1rFQ1r77",
  "key41": "3NsQEh4dZrRogk2PW7z3CbXnQCFWi7YBzGPSmknf9nzSsVnn6oEEu8nDJNkhwXKm6HF369u7uzHvJx1UJLFAmVtU",
  "key42": "4uqShP9Aw5KuCLU1vigWjjp4eWDCNgLmfH6kH5GvsuvHcCfs24hTvcgzZPaaLPgLANHfA1ssgopRx4W6MQ4QwwRY",
  "key43": "3aNPSsyas9nJvQLD5bn7Rd8Y175wmJifn9xwMNh1bQCpyredUBXTXNV9Zc71CWLfirVCJp8W7kktMyop6EypoPwR",
  "key44": "3w9bCuqx2tHQpVidGfNsf8J36VLR987BddfVtn4Ft2FQk4vh6SduzjgnrW6GkQAHJAUzXNmvk2fo3aYbZ1NKF4HP",
  "key45": "4tJTrEuurQWxDs1V62nQG9Z6aiVh4kPr2Uv5QmnApmT9EBRauLdjXXErbJAfbWpngCcRm4bEYmubkEnv4A8jrcAN",
  "key46": "2RmNWBfkfUqP16Bt1dJ9L4H4bXeKXQRcHykqyRbeHcpoWbYzzVppXYCuygzZ6xNairN3j1pRsNsWeeA7xYqpQiuK"
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
