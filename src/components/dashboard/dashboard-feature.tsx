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
    "3x2C1tS9PbwE2EszPx1ppmBKvsrfjjY2sJKjW8Bj51kEJqa7cneWHN3W1eQKiEi778nzxKqMb83gQmq7xAvuiAxP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w8UTUtNvUybkwgvZTC7xemGxkhqWDSJoFgrFcSSnif18GSTypAPf3NLKbARFKA3Lefvz23hDvdf3Uw4rN2G5S6F",
  "key1": "cdtmU7LgqFXfL9SCYgFvrNkZz1Gxddq1HtHxssudVniWUuajir6kUpnSAruqqQGZJ5CBuYa4oSRvZwCBg1754pM",
  "key2": "QPB8vfGaKK2Zu7ZDo9NKW84uQw755k9y2LBGf1TZhski5VsF75jXyitEnb6XEeXJrw7P9sZ2YWtcgKtVhGz1Wtx",
  "key3": "tcSnBgDSv22oF2pQ7HeDN2o4NdgcTUhXQ3uWciPmoBMyL86t6ToKVkQ3MWEhP5eJkstcFjhV7dT3iXDnJ5V42wd",
  "key4": "2v6o7RQEMzVe1sAFRNQQjKmki9vnQNMdbcs6d9XPHxWQkz9rDfa1bSCVJzNWb4gzoUGsQYyd8f6LR5qDCaQaTfNX",
  "key5": "44Md57nupL2eTG7PEgMKRM1pSg9yPkqECE5PZtn6zGmbTV7z3H91AwTaao5AxHbVCxFNqkNZRS8xq9rCG2DGUaH2",
  "key6": "26DzxywdCp6e9zyeTSmuxeiTtfQNrznE8rj8hFhVvN1eA7fjpC5bYSkUkMNReTixKEq1u1KbxWMvqiNaLQabxx6Q",
  "key7": "41t2TycwirMHBSS7bJ2CbQE2adPHg127CnS3bK15UV2cdLYMT2bQ3RGbMCzZ2uECUe3p2zm8k5cKRKXFjCBwg5tx",
  "key8": "WoejDFH6WhD4HCPBbdk9PZyk9Dj3TP7ADVCEwb2MN1SkQWkfC7Bb1TFzrDHgJTomnVwKfeAtbK6dWA1HTg6c3jd",
  "key9": "FxEjKndaxNw4dxdixC5wVGbnj1FvQ26u14efcdmhon1dtYVAnXXzvGU2Jj3xwTBF4LYPyTonnhtfKUpGkXGaqGR",
  "key10": "5BH3KxgUU3eZWZ76ypwQGjoPzpyUaYrgHs1MiPKTji36bgmend1apF8iabNCDsdmAYf73KRM5S49Y73Skc266cDM",
  "key11": "3qz2t43KQVapygbcVLVVrppDzGGMQHifsun9KhiRUqp2tQhEkeakgnDXPW8vg7evQwWVi5hJghMtAMuRvvF1ATHF",
  "key12": "5nYW5uiYR2dQZPpqiLwiYzeH1P7KCUBNt8dGBQL9EvgM24dgYCskqRJgHyotr1G84LkTTLuiBWPptPuNtNG31Kra",
  "key13": "5DfHii1WQ9H5s6YJuNs3gMVURHKXCPtkGqhYwhR4D8GTZDmpQ4LhWVvujvENY6v7WbsdUXpniTGdKJfBjNFHxMRh",
  "key14": "4TLW9YD2GASj93X3955LHSig8HT2WG6ehkuoyt7v7BjrEf5m218Mv6wRdwzhHGLvdkMriwNJ4Cxf74zveJ4us19w",
  "key15": "3cD1YTDy89thyyNxxabb8z4rkaQYaDxfFyXmQ6D9wCWVhX2aYjTjgeZjMfC7iAYouQJrJNHN7XKTBG3224hEMFGe",
  "key16": "4EKbL7JDLwPzWds5T888dFLhQUxLwVUPkHZHkBxLTUJ7FdJWh47FP2Q3thKEKedy42eZKjMaggbFUsZX5xcHEjYc",
  "key17": "55kRRxM9jRLhg7EVkYk37Dnokg8svmGkqkSTBysAtjY9DjwSRKZd4AhDBtqhVYWvyNFeUvvpPugcewWWNQdBKeX1",
  "key18": "61rH9py1qwL6zhhoPr5tsTnj51irS6hrVxbm6cxwmEerbNbgESr8DFEpoxx62jD5aCbBpG81C85hXTTbAKYL29gn",
  "key19": "fwsSSK2t4qaf7LXeNGNBZCPFTLAitFV6g3orR8HF5yNc1Awikk9cgq8iAScvTudf3N699CMJzvuTmFaBw3SVDaw",
  "key20": "567yodVXQC316jyeD3tmQD7y9GgZDy9breu9nsxpi8AKNf4628QoEYTuBCHnnGcHWdaXF4ZHZXKKTUuFA4kJceJ5",
  "key21": "uK8dQnkUSjaAhXHK4WJ5rqWJzesH99GStL4pTkHYEFaf7d8RFWGmqX5JS5AWDgMkRRWMvorY55N7mcZ6MjgdKLB",
  "key22": "3roi21GerYeVoES6sw3wHicCn7J2LBnFBLS7dvTTDRY4U3Qprdgmojw1myFEdJAnbhh3yZk4BQP8CGSVpPjwkgGu",
  "key23": "CECwq9ARfuzLkeoF6WRneCgrqf7NG5dFScpJR6fBBo85exT6oxqkKJGvpwBaKqQqFqrfN3jy9AmfwgHiVgrcLHR",
  "key24": "3FxrJPuy8MzsAHg9ZkPCLfkCQn79mdMVNasVgQQz8Vz9j6NkW5hRcLtmNqH75B7VXkp3EgV3NcqSGdR16PFBiwBY",
  "key25": "63NqNXFYCBWYuFtUcVwezT9bXVpHMy1DxwLB8ikaENniFsFNC7FxKhRu2CfTqAXqr5crb3bWm2JnNm15h6ouAC2g",
  "key26": "4db33aKNiygTNEHxkSB7jtEnqY68y1rFHSfqVjeH8zwK6VxBEtokZoZhiv7uiho4hoFndeSebFDLdyhps5wUxs34",
  "key27": "23g3Fy7kXyoWwdpAMm1kZv351uS6nnrL7ZUGtjNMCVa5t2afT8cfuyx6ZKJ6yZ7FZz2isBUvnTZJc3Eh2DxAdqn5",
  "key28": "54UFPqUn5aqoyzTWKqMCCEd1yhB5VQbGW5Ed2gctEhui15ojA4ZxxrWQUqNPhwrcna8u9yEwKMGBQu6i5zyySbCN",
  "key29": "JU5TYxpTiVGdkt7uZmm7qJqbfMm6TnxDquqXVP9Ex5sdAHXejQoyCaoh9NMLcQu87bFmcsCyrrzKMJmLGSjA3FK",
  "key30": "5c4zDw6LSPuJmEziQNcWMgBTrrDbHGxewdEaexarrogmWUHk7Nh4t36ekXgU7ag6x8g3he9WsvaXmjt91MmKgUyf",
  "key31": "5AmkW3ArAtDdcFKcrdy6s2aYaMuYo2a5R7FfipxyNFFvamyYrJhrBqbKthNR9scdDuXL74ArTNc7jnFBkaSwBM1J",
  "key32": "5FFjp2CXyKX21jZQ4cbfxaV1XbDdp65CVJPfEvPbV2g2KwstkPA27Vhi9MqyQVReMMXtP4VaeX3Fj3e4X1d3iKcE",
  "key33": "5TfLwjsinggCpPocrmyKqbK2p9UJzgKZuazSjbqQzNm2ayj8izKmwp95KQMrztBVXZwsJbn2Vn6eyKY7pzdfbEmG",
  "key34": "qQxLWKsS49AphZSBYrXaKJmVx5Q2cw7rssAmQSTYYW3szUVGSNFZWRKaiXm5VyuddxoA2PRQKMiRKaHavVzmSUA",
  "key35": "37k5ofcrP5xRH9bTmQ7GxGkzzXV3wxuMs2XxbiksUf7W494WHFf31xaT1n5hHRgmLBnFu2gkJC6vkoCVpzdt2fhK",
  "key36": "5B5L1Kw4MBqQakEU4hpJf7sg7vZ4A7cAMmmDrt4JgVGoGbva33U486NNQXVdbUk5vogdqRWQK9yBhNUSkJXQmR1k",
  "key37": "smawhRAS8sxYN894Fk4BnrVet2UpWLFbRdUksATJv1qv8QJhorkVwayq28FRtot6rL8uHV4Z4wxbntuh2RiKRew",
  "key38": "4vMAE2mU4CLaoANZpj26rA2dKMzWZWb77tcGzhVbPsAVviNs9YBgaqoToAzZ4dBNgFgtr2xS5aXUGXC6uM1guF3N",
  "key39": "512W35MuW27HpEV1NVes4UnVPzvRNh1VC2hvCjfBsFw9rF5SSxpwAtnCfxZS84mNn79F41pQ5jGirVkWvGg76ASy",
  "key40": "3FMY4vvJRwirJZx1d6pbD4nipLt3dJ9fdYAAqt2fFxku51pUkCqohZsRvSsDDBXpE7RausPm3MpTfhZuTtso5nBJ",
  "key41": "3FX15xR52YWUgKyyTgB2r8TQ8CYrr9cFdnzjAaCihK3N63LYuyTQfWrdMprv9gaYHPzjPuMvBpYUbCjT1pREoGUJ",
  "key42": "2hTVC6yBeJNxSTUZJNQtTgmyVxFHv1xaDXQadBM9o9oQ3R3GqGhB6KuFRbAD88VV6BZVDPwSeqcUMNwfZxy1zrDB",
  "key43": "k6mvW8mhpfu4EhKBzg1sjrKDeULLjicaCSfnc7ae5fe5Ac6uch9V5in78hQV8D5a3TL4aogjufaC8tq57dLE66q",
  "key44": "2MLpbBUcuXnobhzWys1KaQrDudN5Z5ybTCEf2ftHNdnscJAiavU1mfyXduXZ5vGnhHNhhLyYrhPL9j3rMHssv6Rv",
  "key45": "5GaTWfD3f7uwUM7z5Xfx4yNZJ4awFWiawFU5fmLmnjzFaZcp9WxEeiyk27FTa94R6kzUd83BcuxVTtqg2WwCVvZm",
  "key46": "5PHomWxHA2PMJ4nG51RQc74DgX5qXgWwmHxci5GMm6PsrkdfL64JHgCmmMTYuZD6hUUG8RRwJm9tZQLbK46LUe2h",
  "key47": "23gBd4vrZNXWciUM6KhnygvX1UBuRjCsGp7VitNninu2JJssrxVHiuBjQaCwUiJPNqrkvhB5V8aN2FHgMihBgXzJ",
  "key48": "4MQbAuLN4pKJRvLjWJiwJcu5WKoFXmjpuFZBkeEyRoeXndZ8bF75zLkpaXBy5iRRZsSo1fxbwbZ9jH6WnXR3VyxJ"
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
