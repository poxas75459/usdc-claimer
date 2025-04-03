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
    "51aJN5whfoyyjuj17EDRAvfhDQ4cVzVFspyT3pH794z4NioE3qWSXAR4VE8SA7p2yHdRGv3KXRR16tAbYJKAV4Kr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H7Uw789bk4SgVU5dNBJifp8xgBs2UCH7VyQSywxqmhg6sN9VjsV3RtHYLsE35YJ82DGSkqhmTP8qm1Z67Xad1Nr",
  "key1": "W1TGVaCmcy5RSF6p2WZjzfZRuw79SoPujxooiAVYczCmiC6eKMDGPp63KcTXwrh3nn2MJVy8uKRxvLfoGoz5vf1",
  "key2": "2rA1n3upnxoLRt9kmgJ9xmkwbWir8ti26dfq7HKRbmYkyT9hyUWSBgSrF2ghb528RduAGreBCCkn84rSecrmvoEM",
  "key3": "2PizNdbMZXeUbqTGHm84mQfY2XAMLPFAnYPvbC14CARXzxTy79UbovRM48D6VgukWsNofwf5PXQEDsvK5goAAA4D",
  "key4": "433ZVQSA8L8iDTtLY64kZQcExLLPHgUPMy2QN67PezUEDc76xMJFKZtr5PzNb8mGKnaY6kw4iVbPeBtKHaQvWLCU",
  "key5": "2HbhABY67QRXdX9tEapbAVJuPm2MVhNYbtbZbB1svwVr5pwoAbjKWb64gDKQmynFiF4quGqvQyg5P6vZHMdCzz1u",
  "key6": "3wthtzdFqETNM69GKX74VTUr9hMzQV6EWDsdTTPmbBMCMXUsoRhi5Vi8Ec5gbuLxhX3JCgLM3Bm7J5BP59siq1HD",
  "key7": "uEWhfkWYyB2kmtDp1PU7Y8Grhy7bjEn8WdDUppdV8HnyijV4gTCFUKTDQiRoGpmzrXGHMGntzmijJqRVyhhGNi3",
  "key8": "3jYhmrNgYiacARTn7qR5Pxk4Yhct3MFWth2AGdf6Pv1Uqas742xHKouYubj3iB38uBT3BS62TvYVTfzPQYKJLJd6",
  "key9": "4uNKLHBCQdZBoMBLWC8BGDeMsaFH3aU773cf9Rjx3HCUYYGyckiJ6gCHS1eiGF9aRQsp7eSEUyevtzTc9tsas4yk",
  "key10": "2UsLpdvM2PL7U1PEpdAuTpgrHtLjJDxf4X5tW8K1k5mjf18rzrMA6BwmRRBdGvwnxzPQARF9sw4JVbyqjeB6egGo",
  "key11": "4JTkPdWzSzZucqSeXdcvAYQ5Nd7tmkn9Uhr4pT6T3Y1ETdxn8bAF7xHLKKySfUhdDrHDSfa31KKwyfdHvaFQ1dnB",
  "key12": "zRdkThMvJU8ve5D6WH8px4ELLLn6RJkZSAZ21AiL4Qw9zhH8XAnQnBQdxdohVVxm9FyazaJgtPkCwwvrWDy9UzL",
  "key13": "2Uva11XpjYypxMwxoZZLr2x5HfEDtcavBTXTAPpVYEePifzyyWt16jPBLpbvbxmyVdfh3RRabq3uUdmPBjUskGH4",
  "key14": "4z1PUA9PwDosegfE2RoAXD1Zq4pwm4ekHCFjPB7hreS8qtRmfHcnPkJNCZ4sSBfhw1bJSr98YDBotJbdutxEqGJF",
  "key15": "2VKu27T2pU8u7uYbs84SsJUHJ65C56nCJyYXWqxbMfMqWY8fc2mxD1gmGFGYLFNruxcXHM9fHwxBvsoHRgJEhAMN",
  "key16": "4jh4MQyrEMtjAT4PZrRXbqPW48vVQFgcjnAEjKhVo5pB4kAJoUa6T9bhUABk6uJYFArZGeJxHV2gLnmnGEqWAuGe",
  "key17": "L3Jb7wVacTkkgGjyP62oFXBU58zo9SdANvCJuVWsKLzFbGiXjW2THf9WGgt5oguEkrSd28gFgWFSEFnJox4oQ9v",
  "key18": "38SrXRJXTGerpwguRiQVpVczkjb1GD2BZhsfHjqzWtnUM5wb6Aa1mq9ykbgg1ZmGN1rmmNagMRf2FJzBUCtXJXzM",
  "key19": "4S5BAxgN5HY7Wy7CnUEAoXcPtRKcFYViNJSnU7b4wa31XC3gwYa8cVySRebSYr1wvDrLSyZAS6r1nufTE3H8XKzj",
  "key20": "5zYSvBQrdm21eCo66zBxgQp2D4jbbk9GTpJkzUPXtDo3GnYEGjN59E8sHhksvuYUUUozDvYh6e4dt68w6bfgp4Px",
  "key21": "3XbB8jiHLUtyRT5ZeBb6eWvmmcEaUHcwBuDvapuy3YNXchkfPyWGDPectVjExpq1HrgitZBghWLnUfgz4gr6TqF9",
  "key22": "63yBg8AvKyyxN9zfX3VTaVYPnJLC9JDD475JBqCLwhMhxnxYhFxHD2SkpzBuNVwMtr6NTeGfnj7SZgUWZmDVBT2t",
  "key23": "TG1NRETLfxxnuy2ZnUe1kpMnNAFKXeKUfDJqqyNUx76Vxjw6NFw9t7xY8Uxcq8QvtHmWMu7Q8RvjqUkGA34bUsv",
  "key24": "2uw96nDvK4oey2mdMQEgb96jBfmLnVg8PoZfkU71NCtkq3GDQ52wwseQ1jrsMyLvXmome23aw5hiDA4nhfByhsze",
  "key25": "4oddaXwjHFEfcayfpGRwK18hVzDufGerBaGRf4yM7Hd6SpsNhcm3y7mLxsLjsgPuTHUsjDs4WRbNKzjfbzL6LuaM",
  "key26": "5L2gM4CKoXEr37ByaYj7M58rDmB3KsCa2oDnczu2EcncjmWPkWtVnqcNS9dXEWZCgw1uWb4Kz4U1FiBtWaxfb3v2",
  "key27": "5Ec2EMucjQeNJsLqXJhc7b3m14XL6md4xktBVc3RAZPzvhirvqB4gT9pjHVpivP8cgNRVDM1d5vSiLwH93g7SuNF",
  "key28": "8gnNuqvMc6N2j3PQxBK2dQnMMsjnVPaBGzBQhpJNjmqGWprL6oT9jwAxo3NP3XvTgmZWiT7A47mrPp7UJVqdpFQ",
  "key29": "515Zwu2SckqEWZnbunRRshh9XbwTLGeMmdE8s9yFwXQL85YJa2mPeyWcB9NU28wExk3V5VVUzLVFshACvqZyaymr",
  "key30": "gCWptwE9ryudnCioiiZw4XE7ZwofcbvP1Ypos5UEE2AfB3LkodRGB5j53Wais6xGmVK9CHkifBHNnx2uyg3opW8",
  "key31": "43xtHNRRoVwf8y6fzHes58xJDm4uCMTyBM78ya2N8Ujb43UqVNLLo4HEQkSZL98GfxtgXbxpiG7gJVqQzrCT4PsP",
  "key32": "cHdC2A2EZj6Z4js42ctdmFXYp3udUYZpW5VfvC4LZjSTEfSDRXgMe3H7NYaT4Wf3TKEEd5vzWUoFas99eKRqS9G",
  "key33": "5SmZopfJatPnw4VDjMPLEPbqUxwAe68fNdWB4cn2cJzvKZ8du1Ar2dAXhajJCemCt5F4qXRoTukdxvLRkspdp1nq",
  "key34": "5L66n58xGbJTkKaBFHuyFyg1Esk845oP65XTkaMTcEV9SUxX5ms5RAcNaBNqvsVxzyxByL5d7WrPVibbCuG2WYMS",
  "key35": "Zk9TS4Y3cygfLP9WdzEuYxmvDbdocWkaRED3jVgByqGMJEAnQKAuSxb9nRf2UK74s34uS3sSjoBjNDe7qndE1Ei",
  "key36": "2Eu44DiCMX39iwmFjegk1yrV7r3EMMEP571hhRNvNEhH1btmmHbq7Nbn3vexaUrU5CR1YmGdQD18B9si6A91EqCL",
  "key37": "67MuELii9nAJkukLK9u5HSbs47MHuh1orC8Q8bK1mZn5jKznqNpMAGmDTaAAjzKC7a3HHnytzMoDoda1i8M7Hjcj",
  "key38": "5BmRP1Cv1Y9T44w7w45BZ8zYaF7p62TBaqpeT9TBszHNtKwqdmg5rru2HfJrgHJZdYXyKQqgwKPdWXxr7mjRsEE5",
  "key39": "4D6WtTgFMCSMiK83Y2XeYqA62dvAu8eomxCKwckcX9ZfYUbZof3veHi217DL1LXKBiBbQd6mEuF1vyc8Fhgn7rd4",
  "key40": "4jkCCC1fZosdUc2HLECpgzAVVTGzfemUdPb9LU4pawroyRFpsgpRAwmzcq9ULUfNdYuDAAjQksBRiqA9fK9dTymP",
  "key41": "41imu5iehT9qxfxHsx5B2xhZYMnZi1AmE643BDYXeETGhyYJaSxZJipHPJnYPBDGZcuxxrxgnAH8VT1G81LSfxf",
  "key42": "rHeyTvVRn9UrnS3gnqrpUWRCBrx9tgdZ3iuNCikxAmgkuWJBRaADwbyTtVAtAodq6SCk8Gp4CaMoovNGpN9cMgA",
  "key43": "hFqvWbLmHqsdCneHPZkiYfGSa6ecDBZ8uow8PPsaMoWNV4tqqQFq1fjstkjV6VUWZZoNTJVTgddRNPFhhAMhWev",
  "key44": "4ydLdDFP5ZHhcK4JDmyV22kVxycpk8w1khXUqbAtwk7VTPqvNvUWHTwUbNenYUBhDyhc8SbiLCkKQbujL2DnJrvp"
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
