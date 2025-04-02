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
    "3UqrSikG1sEQyfzR237fG1RJingx6Y7wpe9SxuDRXGESHkyPnkTUVpTYStt3t9f7sDLB8XB1CRJzHnozc4MtE6Yv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ACeBUz9ruZFNNLzoHW1ydyGLAVrcpzq3Ecs63BMKxRtJkBLk2XS7E9iEZGEjkjBUr4UUoyMnTUpKKVR8ZVLefwR",
  "key1": "4QQPS5MLcNnvg8N7DZXSTiAPpiJDpJJGNbnZMUjzf8jMdg5Z5KeBSAZX7G6qcuAVBgaU8d8idCtoHoZmBqHSJJHE",
  "key2": "5anoGdBrFkW6GxLoce5VJ5prxdBQJLbbp22wQ5btn3xjWMte8wQFpsw8RgSZmMxRhebf3pUzcH8UyCU3681Xh5DF",
  "key3": "3rP5cCXGX1hheyZisivz7imA2DnRTWkg9E8ozmABnBQYrC3c3bue6fKFJUARz3uE1yuKsW9v1QQ8yJpBhSKDp2uz",
  "key4": "MvQWmo4fBYvw9PNyu6cz9W1hVHjEBoExv1ZsuG1wR7Lp4i3saTGn3DvrsALgbWgAfgRfxRySKfCuZgJdCnQfbPS",
  "key5": "2uA5jPZoVikM86v8iRj4kkBznwBSTu7Tm2KPqdcmiwBkNnZCMrGhkrLJWWoTYaFYD2uY7TRj6yahxXBaKPhdrPqo",
  "key6": "5rQA81UGb9j1aUWCN1H8j6GgcNFWqPf2Lj3ifdxbWvC3JjktwnZp66VgfhZrbTZ31HMVD9F8cWNzBWDsk84Wgtnd",
  "key7": "3KpkrcMfy7zp2p2bbjd6isG9gB9LPU3Tmi7aTCGpeJ8bM9Zyz9MW7vBxX93VW6EZ1erYPoyay7tcqSFE9dtc7NEm",
  "key8": "UStPFA37L1XvZgYdMKmktPX9YvVjCaaV6TVSzEp1zt4FSk5cSsQFZhRFTZTgGnkAi1M2oYTWxaDXacgVFtv9VmY",
  "key9": "5cYAA5YWx2KYwDhcC3dL7JGSFRCyxcL6jW48ZLdWLtMqVhe4rGnWqnjiKDGQqoVa4jLsX4ViodcYrSe7Qvcssj7L",
  "key10": "38tmZiQzb8Q62A7bnKcttdD8ZEwFGKQaKX5FYod6DFx3WmkPKvCLpjXDpNHLPkb94PLEDU7tfYdu3XvvLBX9YFpB",
  "key11": "66rpZPUbLH6M8yrfay2WE1RFyKmt1VpZiLktugphuh8jgXRSdrtYsp67Gi1Ygv39ovTk2rEAZuaAF4FMGSots6F7",
  "key12": "2onwkEquVZfgynt1BrVPZqiW8HktYHf5J1XZVg4uqRCUWS2cVGmQ6wTW1jDtuxHHsS2UE3hh6Z5avCFvBQkpzwsu",
  "key13": "2Gx5X3TsrRgTFp87zaekkGrCjdqipasfPXYABw3vrRSosQ1xiUjLEVxNaYQQcVf8Yy6G4FuZxQjPy2SErX1CmvQN",
  "key14": "F2gbbjTsVd1XF7c6DpuGMwUpqUfwHHX3BRWqPkcq8xVbty9hHTVJpg3oTiYrUsdpohT2e9hk43YxNWcv4em1wqr",
  "key15": "4wvsphLG8GfEugA1V6nFZ9wQnhJEpcjkHZHzkpQPpnhTrzqM2B92W4EZSEN8WHmuMAMiPTWrsCybSAL6QTFAsjsB",
  "key16": "3X1T8Vhp3dWT3QSr69ruUkKAZcQaHeSMUafte7JVSHt7huWd5ZGnkGWQPt2zzwN6bw6rvWWkRAJQ13Nq8ufheWiV",
  "key17": "4U78qrsNQ63CZADagPJaHSZzmZGftBHHwShLrABBfZjfMAEi9vvDQhHaXW6cxQxgpyuyPx748DVxxZzcoLqua4ZM",
  "key18": "Pxxd2XY8afw9RMbTHaBcV1527ePyys2RhJFY9CbupQ8SNXi62TT6J7udNbTKhN9XBgqWjyjpD4ud2eauAE4Hmek",
  "key19": "znmfJAGg5JjvaHQepDwxrXe31YFz5WiSJubYVh3Kko7DK4MW4WWxWu26BWgYGetxwTVjTkpHvubrtng8s8WyHDp",
  "key20": "uZvFyMewVaamLwjiAZEmf3CRrCyhpxrwT7RTQi1NfAkpgD3mqRorsw5LJaBnnKzz2RdvXGVJ6jVjxkXGF8eenHH",
  "key21": "3vTFmgGtkTQYg9nyP5xYmxFSo8X4vhVitondjTaheAdiJmH47PoqbQEB1bgqeq1vyYHFLYi4npT2DrGzMWV2bTao",
  "key22": "q8XFDrxnBjdYkkysFMEgPk6tsem92mCj7pzLaEZVfMqBLENNsaqhfcVhbaZTMb3uyKvEtkezaf6XYMJdH3CxLjB",
  "key23": "2fz73txjKJma382gHxDk3RvQAkwGPFsMTf6VZWgo5anpmfKDnzSQsDMKCvjvYALsNSbs5amrPPXxw7TWtVn8b359",
  "key24": "3TEARuuGBCCDtUA7WmQbRL5hiuhurLrQaDT8uPrzf8NJLmZWkp4UWyGAisckQcfnZYbttSLBdRBAfpsxodC7vrhj",
  "key25": "56RkHXN26eJndwv43Kiq61cWZRW6hJxXkNTbteUJLKMf62wCXQfRdkkQNQDam7SiBFRdPvC8DvYhrNyQsdPPUSbz",
  "key26": "2V2U9fZTmoG7DfdZMQKgcsZHCPtjwx9juKVcNsMJeS1CWwyC22vXeRxmBFwv1io3kPkMrKjoqHARPjMAgdcuwMkN",
  "key27": "2CMrypksdbsD8K6RFfzXfKKq8qDNtfDEyokAwG9o16WgZqaT3fb7iQrUjKGqVunhKpGoQvLqRLzDaHezdepUSyxe",
  "key28": "5sThmF7a7HhjWiWk85Uo8qWwNzjwR9hJrZqZJU88XncWtzvuvxvsVguZ49MJPJjK6k1Sz5HUZ225PKd4GH3Kr3G6",
  "key29": "5UixAA8S4S99AiXrDSF73NpyC1gLh1XF6K3yiUvN3cst2eP5Xearartpawca1WMgwwNZB27EEfg98wo47EkpKHm",
  "key30": "4hYVhyPwN9Rrjk4gPPCJJ9cJVLmZvaHmVhDKfoGY1fuyHGeA2X55VZNeV3gzFxEExCnDGcRgH27CZvDki6emZg6k",
  "key31": "vK9vkAhptYhNzKtta1XY3vLDNjmmyVBiNV21qGGExtsUrPMqnenBfG58pc7Cy29Nxc1NxN2dt2YMj3X8mUZAKv7",
  "key32": "EDdmAFoErzLZQzNzyJ7DkugDZJmXP5VkjU5md7T2dAdjdu6XKxxgvH436nkQLiL5pG5HkKcRfAu3EbMhEzzqDo8",
  "key33": "63MsPYmxcVwurzF7ZKzxahfxLz8Bs11kY9b7E7cqTBmTCLKYjPsvmf2dPX9Mm9kCm4D5gRTFdjqGqth7TABNmVom",
  "key34": "56pZkY3uRSwW6hzzBkkq5dqTRhQL5qiM41tMrPzctdGdz7k9bSj9KCjtFacp6gby69xUtMuv6jLcecffLVKd2Cst",
  "key35": "hBTGWz89siCd4BLZ6EQ9RKrRq2sSAPSez2V76V1o1iQCAk9QxW7EnNk16H7Vx7SasHXabJ1hvgYDSMphTzm9Hx2",
  "key36": "2yssFDHxbSZvFpL4JaMBxNgaFSEVTpMfDxes5uBqeAe5Ao2mYq7ecgzSsthUFugMRpoAUCBFsyWFct6XKJJXCqAG",
  "key37": "2BwjQYGgSyCXJyNjYV5UrWGV8UovkP7aJ1uAWGaqNVMZqmdnxwPAfWDZ1SvvQt1smHUKTVCS1GYiq9bZHPzYMkbq",
  "key38": "2x2zpn1mHZU9gCvJ8uXuWXT8SFQZrhrdnWWeaAyhkgZMdUXVJEtkVhb2Bd1A65YJoTVryGYpJmbNWKvWvJ3aKEAH",
  "key39": "5NtSypJsCMuXghcafN971eqfuC7WSHQ948vLicfWKebZAnSttENr4VkD6xEKLV6gbv16kaSbUaKkJ81o6UGAiNkL",
  "key40": "3EA3dfLTULT37F55aVcmJ5TRz4RKRM2KpdVYJ2LgeT15JUuWcfLLc9kcto87FCcJUed9pSgMy7ayft8eZXb8DHdY",
  "key41": "46o7jYsJw7j9NGcoWwdpzzd7M93zYtYHERbVBjmugBtuuSaHJSR1hefcQQ66qQiyFAuNJMj63QkiK196Y7ks6wAY",
  "key42": "4RaZHrY681HKysZbnZjVZVRdWiLxFBabcZ9DVnYMB8EqGZheMPRPHz5DX6MqZQp8U4E7RzqJ5Pw5yMmipn2RTvc2",
  "key43": "5ZvK7UqfNRaKneMK1kiX5pGgoVawYK194H4ibgDMd3yEjmcFrp8fRB6HjHCX3QKsBmMbAEthZaFGKsAAJmJdpg2M",
  "key44": "4hgVZwLW1Za2r9YhFEYrSvpykK5a3KduuLFzyXMX9SJXJ5u8vc955wrVN6VBWGYMJk3buoRaWFAiCWAfutjvh2FD",
  "key45": "4xE8aygNNcg13Fotg352dYqSBTTh6Xa7w8CiogAWLQ2s2VCGrseDyoKLq3oN6dtqm34GexiW213TV33zmpTLjbKA"
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
