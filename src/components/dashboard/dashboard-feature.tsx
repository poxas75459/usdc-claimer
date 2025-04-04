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
    "3veDPRKBJE4oDvMNN7dU5Bq2HWj7Ua68ZMQmRA7qFYBwmvUo1Q599Cuf7ParFqA4wBAvLC2EKXuCWysnAV6ZvZcq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "485o6nDsWeVLTduHCgtYFDqKPYo5uCh5wYBXvCRmoM1mnwyeXVVqrKZ2zDhKx5BGykoHGdPbcogzyJuKNATQBA2i",
  "key1": "3sHXwzX86sCQKiJboby5FxQEDNTCVmsa8CBSX55Qvn2WC3qaKtjzHKwmrZRLWHmPhWWR46HaanTj1oXAvy4SeAjh",
  "key2": "3ExxJTpfinDjYZFknK3jEK6YooN3awqHPNDs37GGrtkSrmAV3JiKAj95gzpK2xw72baGTp9rX3Bow1D3CPgFNYou",
  "key3": "2QFAB98swQzKEZD3ob2pdjswHv71xpVSc5FhSm1zFTBg46YcTk8htYBgJqPvyA3vy87LZZAYMzJ1PLDdXdnw3Tnp",
  "key4": "2keuef4EFEWREajDHudTEuGaPb3Yt4ECKvmFfj3AqdJpGJSV7ZyYKmvhM2F6JsT2CMHcoyxVX5UM1bLxi4enNvky",
  "key5": "3Qi5Msb75dLjytx8dN9ePsMQdEQqmctyrLGPspZ3TAmE9MrRMdc1PBRKaah9GGGqhTroFSszWJroUb1HDeBNoyyG",
  "key6": "5nLpqaLf2YJdP7KrLtFEWdXzxA4rifsF5YC3vvYotgt8R2fYn8zR5vwm84iXCkktAakMLEsXa3Xvc6eWAA3YQpZ9",
  "key7": "4iv1cQN7z6D82PEYhpB2zn7wCaTPNhb4VPz9gNBU74o6tht7Fnj7DVFJ9eEACJeWohprJTNwGgwjdDGjfQA7C8sy",
  "key8": "2zJpcKRNNfiFNhWAjxvkMqGHYHW3Gm3VPXmYm3oF2Bze6pxxM9MCJ4SaCRwVef8VJXs3StzHrCZDLCUiTG65fT9S",
  "key9": "d35LBeQqYJksEQt76uzJtZ2Dk4o3zBKZw3eQeLEEPnUejqyPDp6wuoDbeGhzhERJLm71i29xdWNPZL3MhJps9by",
  "key10": "3uVh9nhmco746pU3WQmsQo5nydnziJMuc654oA1sFCY9aiPbZF76heP4duFVPoSFCY4n6rMDVUt5XFM4kCrVf6Bp",
  "key11": "5WZwg2934oTHDKYFnhS9RAQHmQHiD2nKJxbbaft3VKqovUFRs2UGs5FFRotyyxZURtmx6UzrRTAcEz5qx1SXphhQ",
  "key12": "7sY8owyzpkNWxViuxFXATwrTFiiJtLvgSauNjnjzz8Csw7GZNPwRrMjmtkcj7vMsUV4jWa7gDHdpm2qQLqikMXR",
  "key13": "3APLkwb3hsyjMVT9dDfLm2XDx1yf37P6gYdCUHUCXS97kQ7pw49HjeECk7CTGrrzkHJrm39GXx4oFzs8fj9iNNFQ",
  "key14": "TVvuAQwrqgDkXxf6BrJBp5RmHx1TJQh4GuEgLzNVmFBLzztEv3mGiddvfTS7Z42UMjiss8PULC6pu6tzD9yCPL6",
  "key15": "679rmjoUfFWY4JX8FwiavRZmNS9wsdFCRnJ8BUjHq1YHwaHuWrd9PYgVgCfXajZmcm2GuiibAXwKzoBcoYMLQJcJ",
  "key16": "3CRHYnicdciouYHFFaM9LgjcocJAftkihnmZ3Vjo2Ph8FvonWxcX9sU9xCdrwVATkg93uW2Qw3pdFUYM3gGvReHT",
  "key17": "2DC3ais7k5iUHEgUbtgueueBYvGwcVPQqK544dShNzCwqvGgkQAaJNC8n3kZPvzvRhqLUEoq5djVTKkfN34qMWkC",
  "key18": "5wwctGfGmZfHuBSZxZdCYEq6Cn9UKufzTtQcvGpK5mFFQQTf3xinrCZes7hHaUV8TfNUDPJaQ1ZzotQVA31dxYXp",
  "key19": "2PPrNpEb2L59ubHWR4CQNFqe8p9Z3SuBTrinAix4uJWjct8JxzC5dgQ1rVnpcdxDoUR3Sv1ZUU4no9GgsnhjjrXn",
  "key20": "2uD2FCXYU3r1vNdxu7kqYzQMH3Y7GEgg8v2kC2LsA7CgyuZRs8ByGnRbAp1gpvETpp22WCs8Anyky1yzda5iAxsa",
  "key21": "3ER5ejB1SxrX73JfodFwYMwrqwpU7DJF9DMYg5uTEFpCoNyNZy7qtK76Ba1KxJkaWmC7i46xrzzzJjyUmakzbfEw",
  "key22": "5mpaaLawUfBM1tSSKrbPbf5wmnmaayRLjkCt7aX19GBW3nCgwFmgBxopkUW8ac3fNyKuLUchRc7jrveVCxCdbN4m",
  "key23": "2S8mLKzwynu4Zp1nBM8MFq2Gj8FkL1HKJSTvsUrzzjfPavNgXYywYWCRJz2MTkM2RBnTLLTgoyXjQE9LzhEcvexH",
  "key24": "sSAwYLyWy5carcpjGvaWY71FMhCxQHkjtnjyLuBvTmJzq8RELpcSMS9eNpMcvec6UwRbT8dukmdf2NZPMya7EC1",
  "key25": "36abUa4bufoYhyYGJq1FykRKWWzeM9EukJR35zcwEaTXnqLawxfuR1UPFHLcAmiYm5jhE8Q6sMycm7yBU93Z3Hsg",
  "key26": "4z2aJU9uUQKRmnfHMi3XooUVwhwPe6wN5DufxB6Q77SyEcox8HpbH58dyWyH4MwwFn3BrNdj6Va8vezJXWTMhLHu",
  "key27": "5G4rNGFTipSNgA9UssYZ9wmpQstYkS7ZmzM9Ufy9GifMaTBzdKjUhdHfe67jmnMWwok7HBDQmXjVb9Hv9xt6FUPk",
  "key28": "sjBgSn2GvNhCMijS7f9c5sPB8aPzXKvEpkyMNihjPw4yvbDwTthrpSDvk1S8o9UVe8DyJriFN76eNVed5M5rquv",
  "key29": "SKTcjSnjUFUwqYeA49nfVpENuJpNKA5PpXrMiwFSdhfLcnCA4VZqhVYsj33SJbC6kXYqr71SyAmRTaqvNSbHRK1",
  "key30": "5yroa91fe28WwdRrtdYbkx1t2oDDTdujHNmDPEb9YpBMpq9YFEpMZ9TKZnnb9kBpCaiRXujkH6pFiNWCUdXHpfVk",
  "key31": "3rWFTG4QnC6Thum8H2nPmDLkVVZ4X4GMiF4AGowCzfkBnogjDbJHVe6NTuskasvVb9dv5NfH8fonZ2MbRfeJzSdP",
  "key32": "2haj55yTUKpQQEZsrfezZzd7Ho9gzfjemXbY2Sc6XH5JzCf2gSAYZoc18QyhMgAqJp488hH1qbRfS31vhBxpjenn",
  "key33": "42uQ6TC4RJLCLvYqBJjzCxmH2JEct4YRc9Xmj7FL2a89Mjv7idBypHJ77FDCTmq2jKwdUjsCmvLQWEApmMfDttFx",
  "key34": "3GoFsHrYoMAMkYtZ5MMZaVWR9mr5aDgyVRToAQyTLDee1QTwY7XbeB7CPpAH8XbKFWgpyGeuQpyvgePEw98iq8rt",
  "key35": "5zTtUzg6i8tsVCJt79NNzSTpP1HdygSboAD5L7ryDtwuHwwoPTh581WcnFDZwkHHCah2V7vbySRZPKptvypWwLe2",
  "key36": "36bUQo19fKwyB8ufAYLuQJ1yQ8yGi2yj1F2UAFpkiKftZuSQBMucfkeRcWk9oZxzSfWP7NRWHgLfS3jujZ6L8Ndg",
  "key37": "2gbxJpSrpR4G9pC5v4CJkf9dcHb6qw6hmRrbzm9uQ2LsUijBRBusVnDkcYffPrKRaxRPwFaYjHjsJhWCZ18MihyW",
  "key38": "3HytBwV37BoxYhD4Wsr1L1Q7GdbnzCfjXmm22dZ9E7GBaXQ2bvLxJ7wVAMRF8323T5CPYQ52RMjp4rkAzh1evmrw",
  "key39": "YSHpy3MpumGDFftmbkmP9fsLJRevmaiWMneJ1X9VnPyBanCd6e5DRAcwerwyPWqjZDXVCGnkfziJWv5brBw7joq",
  "key40": "4BPLVCT1kbB9DDLyf6iwHwLMhwRnhAJHX6wBSwH5gceUGA7qjZ8YyBmSJXmiCJXNSXGQm1BctjRJjfHfcG1yLiSM",
  "key41": "8mC4xFRw3XGSUrogViMiE7omiD7jzq9Y3TwBfoiurYqfwPZLvEmXmfNJ4eouCXVSUEFtwXpMrsm783xQv7NCxbR",
  "key42": "4AJJtJkhjhQ73UHbq936Kjfe6exdyUY8VTDhudMEV2KrduJW59rcUR3Hr18wWtkNZtUwdPue3Z9DivTGKDyuPpEP",
  "key43": "4skSgZTGFqrqeafdpiHE9HHopEjhM2JD4B48tV936pv6G4qZsH1braoAh2uLnvBs6yFv1t8fGhbURTfGXjgi2Evg",
  "key44": "4fVzrEuVj32gtYxdgYwGQjyRZjGHS6omiWEh3PEQkrSjT4eyFPmsXuEudH32ozJqptkNNWJzsKsCvmB8yAgePDTj"
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
