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
    "3zHggyE4QuA5gZE7fv4dMWVpAtTq3iMgxn7A2NMud9PL6KexbiFheVbY6t1PHr9DbaFFt3fzPjYmrrjor65CedqW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bWkPMaJ1ntUb4WtHkpnRfhtS7nFXCiCB3BwCa4iwjRVkDvsgGmRZ4JfCTZwjsFjqZok8ofswpxwoJ5TdM1MkjCp",
  "key1": "2XJv7H2mxT4KNURxkz5VcP8fz9YKMsdEXErfuLY2FV2WkdgrRJAkXaNQ6h3SYYnRFXvkk1KER1Kdg8eva31AXzzi",
  "key2": "3T8wja1hsaW8waHZZAxRYAWwdKo2fPtN8byWvJ56XcohimoJvf31ZMtRi96151GcTCBUfnhMb4X2fKdPFhRnUyiw",
  "key3": "2niD4bNP94H4zkVidUndKHxaFDn81XorotNmHwJ2HagVWb8WvCccWw1wT6YxokmSb2QbyuWmaKEnfgwCRNpeyaUU",
  "key4": "LLxp5Zkj7EWvn8Mfpm7a7oNqtEyqhKi3SrThYgpypGyZMCnaaHW1LWhXcVcbk2L5Au4LdpuKGdWdHShKna2s1Th",
  "key5": "2izctRxepffwXsvSM7F9b4Hd22PJhkYaQ9CZBsGXVPyZRpHzFevSid87mMnMNNaCtoKR7shu4Ybcw5Qr2hGFZsiu",
  "key6": "4Nq7AUXWhJBYF1TL9G91nUdHe3cx1DvAJjiLj9kXocPnhB5FNTVCbxEUbUmFxoZFuCta9WxBtEUBgBKynuJ5YfjG",
  "key7": "4PpJRVejncZrNMTUiUcKbQsfP5YmQAhBoFHwdF7HKppf5VzDokC2UPFpZRsprzpYs7d5iJ4Zmf6jQiufdCbkjrRG",
  "key8": "DTN6YRhFoXfVo1QQoQhH9FyGCLrqPRgeVh1XVuRSyS1dTHP99AqYdN8Lp89famz5C4d2iAE2hHCwgdyfaNAYnP8",
  "key9": "4mqGYqWvo4iFU6B5GyQea8SyKTGohRgbTW21nRrbJ2dxhDRHFNTQBvNq3unaCfetfLJqizdx7gbPLYMA517xp9uj",
  "key10": "5Uu6pHQuvkS7on6EJwJTZvk9pCaeUhpgYne8C5xCPSFgrCHmrB8fd28hg54b5epFvA7Ntj1h7fwuWcCMxX8sGxWV",
  "key11": "7h98qvsG6iCkyLoexL2xW1x2SpPEVcZxWcTVSdugQVwHqfYuP4NNEvFJmHhKWD1YZ8vmVkFy4LF2ejw8Z5AkQTc",
  "key12": "WSNumgVDvneRSvPT7eovj7tr1KJEamAtCAE8VN1oLbfa7h54FCWjPmD6pQo4L9enW7Jx1MYqWXPusaWong5xvsh",
  "key13": "3rZZ4Jh5NbHffYptzcHHg6YuKRHRSEXWFxxtk4r69tcKGskxeERbQvw4XNRtxQYk63PUqbyZfTQcF62DZskkWx4p",
  "key14": "3duLyeWZYeThbzq6J7RtLNvfZ6tCmJCUujrGzP9XiuUvb9PqN852X8FExiWY8Z6uAhZDHBZ52jRmtMw9rxAv5nth",
  "key15": "eKcWFGw1dnWW5A7uE8ALzduyEnxks3ghDoEJWwN7fWr8JuBtpv8JDr283RDXYg4HFFLmJ746SV3spsNBkupJAvG",
  "key16": "3UeE2NTLFcN28RnWjSRNrvUXufcsPWwouMebZDEdKXKU8NYw3UwMfrSQmzEMkWh7nKzaeDJUMec1ydYuiwNvb56w",
  "key17": "5P61YAdTdKHZjZvnsYxTWuBosWsgtBY4pVkbK4Q2joN4eKCa9grpszxQgXZj1sh6rCaJVyuGVJSeUTxzpdbTTJpi",
  "key18": "5ChMoy9CBT7gwpjs3ExW2h2Qk977chdEpKEMnhSy7G5zzmUx6kqKYrsFkPi1w43bZrWzm3c1fYE7gXftym3s64cF",
  "key19": "3vA5xvE2ih79tpjjw7USN6YWZdzCxAnyDxUZqj4xmmajnoLoezj7pcuW43rhgd1SYd2vQWrSBNQNJkyiSVwe8SnZ",
  "key20": "1nLVTXS7QmfsECoMLQsBXdcRYPyXgPaT3D6G5VdHxgKjSChAWTTYKi3b8Q7sPK6Edhb4SC3mh3zQ2zu8bvGtt8w",
  "key21": "vPyE3UvFyb19t1S5LUbptPLBbT6MUQrMvYRVX9WGgsr64pKCSf3idAuZXveApWDDg6RRgrCdBvHH7qbxGd64yCY",
  "key22": "5euqcRVWaNC1KPkMNhgDfH2zQEoTTu6BFV9X91UKaBKKAJRDwLW5XcaY1hr5UBEmXmEWAGfGjsVmDvvhb4FmAyfU",
  "key23": "5wVeLmRB4T8hzbMqCGQVCH9KAfFYshFxoV6gQ3UpN3Sk1YnR5ZzoVpkB6xE9AFhWqV9x4DMbbn5o7Bw9gdaY3B16",
  "key24": "5z9EuKobMfda787M15VSmUHKXaRVDeu1mz3C6deFThXf9T2DDRGum52bLAuBzWXMWjksRhAZrkQQnQkt1KajNFxP",
  "key25": "4yDNGE6q2zyGNykWFuNxVgYduddoKgG5w9imWdsJ5uoEHFLStztsFsLuDmi3usJMUSHaBSCGw4zDJVSvXXegr7jf",
  "key26": "LKvLfvP5sdkuAaKe2rWsAjfwu2ZzJbprHDygWLQ9VuAn8qdT5azgXeJLqNthxRJ5yDWf3FyAfe8TgwKmTFrobTd",
  "key27": "4ecL36k8spj5quKQLxGm11hHP3kvvqnQmYxCipX9QDm8MP1hji6DPubaGSW3SYZq9ENPDphEfhYX8HgNoxA9ypjG",
  "key28": "34A9PkX6CXFoVz6Zrk9Y6byea3S1jdM3qW3Ug3JeYvyvQ45P2PeF6X5paibNwo5e6nTu2z4nbmxD5HtWty9rShnJ",
  "key29": "3xFXakSTY2HGzaM1ziYbFLsk82MxgZDYnN86RU6TvS7wip3htpXtZv74McJSW7wmgQdsLurojzLdcLGu8xkZcrCc",
  "key30": "28o437nctaXZcYFb8yawAr9ua9iKGPiUKQycu1TvPU6n3JcNM43G3JFt1cRjZVmZvCP9Jjow52wjdursVhjkfJS9",
  "key31": "3n84m5jc7K2E4vEG3rkYkQ8WaLU227ep9fXNsnDVJFd5ZorgwfBJx2cmdKNVP69jKENgS4Z79T69WCmXpR5VCW2K",
  "key32": "jh1xEv5N1tAupLtU9RUdNpeP1191BCsNbQmE6i4z4Vw4sjmTqd7CfyvHVazf3A8qPAbto61vNa9feScso2kMV1p",
  "key33": "54YdmWhVRMsZ27ga2cRZ6Z48ur5syPtY3rEcCbVMg9iHcaiQNVf4wryxxKYZ97pUUHhDYvjG6B8DFD8nhULCXUBT"
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
