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
    "U3NgtS6Z6qU2tRHVDKA6heLL8pb864KmsTWDoYhNPFUUh2JPWDoXtxhWtEyCYv492ygGngQsiC5t55urybPCD64"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63jLgKoh88pt2AW2PWPfWm4mc5XtVagEq3DYsxfdGP2hZRFxyQvoDLoZUpmfVtURm1wsvvEYsBWc181L5VG2yGUz",
  "key1": "MJtzeT1BTvmyzsYqdcV8StuKxxNerpLGdm3Zqi2LbaXXTnjrzf3d7AkBsT634oMqmVYRG5hZK6dC9wGez2BZHnw",
  "key2": "3stvxmPANfUptvgZVmN9P14uv6Cinn7qCPZXcnX4YiikF6MZtAvqKqkgzAEhYDdvB21CNyQL3ST94oZ6E8XmAXY9",
  "key3": "5AcXCisLoJCLmqBFLnZfvHvognv4vpPJ8h7vwMRPM2b5UuponuN5767FHHrfUZpie34ivaRXeeS8oHcBaezn6H8u",
  "key4": "3KHYrynBy9uY6ACkPEZd6jyuibrefHHW6zQ8xhEoLC8k4PNVdSJBry1V35dvezYNxNQKxz5SgbSCHmAiE459nfXY",
  "key5": "5n8SfGy7idv2D61J2VqvxyNaqjPMxPiftyi2BhgrfdEZSBuQ9BRecUbhcj7bdp7yCK3CSNT6NejtwQKtYpGr6BvT",
  "key6": "38jcyqF2gfUsyHrMgpGCfMGbQK9EqUFVaYyvVUYEm4Z2moboepHPiGm8iZ2FtMsgkPR5AsUpEoVafFxsPtbtgX9T",
  "key7": "35S6eZmUbsqMu3eXYUDt7PF9FttyVuDmdtFonNY4ycyYzfLCUCrgSEfiiBbysNm7faypQmSAt7usvKqPoPGN1WZU",
  "key8": "34wCcsYDLj7xyPnProptj3iGNdcg3XfaWuEFXW2suKFprx59VmFYdfKfKLkTBuAy89yruDUoW1ntsAHzahZSahQ7",
  "key9": "4sk7vCdz396nstJaJG6A6VZznnfg9o3vPTimojEqvHcdHB2hRwdjVyPYUdEhFXyGuhocRTkwhvibVk6vhL6YtuzY",
  "key10": "gkrabp45jTWoVBFVbVqDSVeByVZGGoieo5mV3swUDrawFooSufpGaUsTaoeTicxmQdQvootBk4p2szdbee7aWG5",
  "key11": "5WfMyTiK1q3jML1UWRykKZnkGrefUYzmFmbsHgWrf7QzgNmv3YAYTrn1xWijtu7mAgzrXP9iHUHqDMF9EvPoWZX7",
  "key12": "5DYC1U8SQpXxRfVCWLVLNpruDj6gds25KrEiPc5aHXsumEX111CMrBaxUPq4GBaEFdToRGSJn5cd3M74eR8j58hT",
  "key13": "2zNp94K1yZL8rhRf4YFcdHEvcb7r2QiQnpyvPN56gpz5MwzvYCH7P3bMsM4UgEf3XFFu87QCVpTYxz1KKTBhdjem",
  "key14": "4PFTfMdvBtG9TNu9EnDBJoF7tqYBVQBjMi9ibzfWJBESf6TsQnH6Mgadc2TqSYfaMQKooYb3bfMae7UGdkh9yk9N",
  "key15": "2gnRzgQPqmFtC4U7ZaWJg7J61c8KzAcRwWwgm1NYcKADywDMpPxandL2CsxKMPfezQZadXFNhVEbiLut7Yx67sbA",
  "key16": "5RD9KpD9GkhPtU8gysvuh9pu3yLWjkQm4qD23Mzh7KryiY3EE7cGkKwGoUmnrhqRyZZAxdsrUj3W4hf7VkwKdt39",
  "key17": "45qSVwMzTptxg2XrQXmNjm1oRJaja9dWh5R9krpKeSraU5gvQJges83TsiygDpksKJCe8mJmfq1xjUZwRy14D3no",
  "key18": "4a1kjvhvotFoBrkiCVPmXhRLq3YJRrFrG6VUfNzYric3ERSeaCPtXjFbLX82LPjAzKNdpsiusGKtdkuPYUxgAgsP",
  "key19": "4owa3XGURoL1MaGJu9AjfmYkrXpFV2Y8giauT6nTDuMa81QRUUctfLDVwAThUSKLA3C9Xmr4d8ScEcKidBmrf9M6",
  "key20": "5ykbBAR3zh2kxJWwTNB5XV55TZmJ4SSXR8hwstNYgmadyFpKmijCY6NqA2HrNZ6F8EQqtA8FVo3n5X6YQuMnQ8ad",
  "key21": "28ETpGuYMVqiB5KuTWvGtLkF8ifD4CCgWWNi9ob2cupGH9HvwCjDD17pRxfWkCsPQ2mNRzZ1yg7XDT6fK6KGuAk8",
  "key22": "2ovBRXc4t8otD6NovHfuxqJDE9DgCmrqSpewCeE8AB1rdGwdM4Egtqedy28nb38dLKKmwzDBTbzJy8WCfgBHqB7Y",
  "key23": "57HN6Lbrto3SVcT2Uq4uFjq5z5mbMeJAwxJu8bL6nFbypFMU5HvcPzNQCMSCuStsf4chQo4gbE1EnfG3NZ2YHbRP",
  "key24": "24xczEQNa52UJfHsFYVn9DXja1Bz7XTYWr16V2n8AgaKiWvfQP36EEvH2NoqQgEM6mq4KEBgxkbCMudjjon3khZj",
  "key25": "2dhnPhQVsozJwdod1iAeruGEAbVShBpVFR7Ck3Cjpz4MbSePX7Dn8RCstYhNDGbQ864A5fSb1qHNNunnrrPEbVsC",
  "key26": "5A7JesSFsYv1cLcdGoFpZrkGzMsZFHxwKNUtXpbto9wgEUc1QeFFgbcBDEL8VrMoLMDrGZXtw4jU2W7Yvodhk9zT",
  "key27": "4i2R2cpAReKss9RJtm2LmpJQ7wA3tKxLEjcEH87zjreRVnm3pwJGTDT15ntGgfAhhHcej9qDGoNnUXeB6dkBmweM",
  "key28": "5cMoekwc75Dkoyj6hJL7MoSVNhDoCAReJoDKaDqSAXN5RX4wK1gbTQeyKGAjZxtF5iCfy6KZEbzZnKsjtJNjcRkJ",
  "key29": "4m2qtNrAkwBoRUCtgDiRQHMQ22GX1aXG5HbK8b1FVVYek8tgm1oAsLdNkkbzTYaL2PMezozdjp4puymShqLHes3i",
  "key30": "5Z4adm2YsyNzaih6sPWNLvfsEvNxfTJuKRYFovVnw7C95BHXhyjUzNv5yWdaghfErs4PcnjXjsmVVt8PNnFhqbNz",
  "key31": "52GfGmGejn2MDFuE8r53eEZc8wqZ28x9u5orSWqU9NzwexQP2PhN2cSW3z9rU65vQyu7suwMqVqhrUQYFWxpZiLY",
  "key32": "3NT6KwJcg3SKAXJPbZzLMSustm59FdpyVcHDndRTeJNMFZ2fz78gAbSL4jqkfx8ihkQYQDQNLRkoCDGXu7Hfj1po",
  "key33": "3YiWE7EUZTB8T5tEkimsCukDk1WvV48p9TTsovh3YV9z2gH89bZSURGc2qcAddRiFBN998rVcRdTkKCCPLYH2WJq",
  "key34": "8f4j3Y6n45V2eBTvQ4v8gS4fB38w7e462JCjXEG7rUtTKtsnuayFdqxtzYr2R7Cf4DE4PTamhv4q29Wt2sBH5xq",
  "key35": "55LJCgWitoZA8WNxojoYa53D6XhbXHjaSD2BmreNSMCgRdmAMM4ZKuwtfkRCMGNSp1Cdaobht2jei13rYpiaiGMa",
  "key36": "Bw8w6xs3xnYF8NZKmN1dFGAtwjNeUX9k6Qq4Ju5Jvq4RrFerbauaTTGpQxzk3KexzkY2cs2wqT9E2bW3q5F3MiL",
  "key37": "2L1JgASoLcvGjRUShqj14TMTAPprhoDRfh8uzYdxHaiJk9wRQjLmYKjA7uZFYrvfUyheAkKrBoqzzKENxVpKWE7U",
  "key38": "2jw2NVs9xqUPqHikwgi8AWq9giVEiqWPNPMZFHRtFcunTdd9Nj6dDhaB235NxHDWm7nCKCrxZYQDFqzU7FdhLTYt",
  "key39": "2TwJx1n7b5jmo5Z31hBPFYikCCJ3uEn5CCG9DmapPmjX45oAHVup8refB47EbK2Ww4TV9EDwgtPzvbGNzxMbHghw",
  "key40": "3yC7u2PKv2WNZCRJrYzeVZVNuHMrjwwpA5F6p7tqEFdFgGAFY7N7ezMrnbMztd9KDWmrA3SG68QpJSgreCxchUd6",
  "key41": "cfD6k2Zgvw3WkJY8YHxR3cuBhuDdHHtaYwydysFHcDPcnD6fotdnJFLyushLFuxkD5nARzDRhGbkbxrJTcanpsh",
  "key42": "4iLw24L4PKMDN5W6bC1QPWxiWybbKGH9SWNwpSuTe8XjzehobdGL7F117aFNemjNryx8zyPUmQ2vJebaC2Nzk2mE",
  "key43": "2B127otvyV6eVUFDgzY7xygfGmvYJRQjHFXabAw92HbJBrU3CfJPsexYr5RHtXrUxeeSMBLQpfx6vuT9tzLwNS98"
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
