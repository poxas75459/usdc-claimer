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
    "64Foz1vWFEvukyScEUAWJ8hLjKGzuAFH9cH39fE15SNubQvUpm14RDwDK9bpC8qyboNyCc16kecK6HnFC4ciPsDs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wgzTi9azDwjNDYQMoLCq1Q8iV3mLqFdnFWbiVaZPqXg8Sgy32QPnzaVzibE7JnktxtvRJvzy6zWsCyHQsS4PKf5",
  "key1": "2JKwXStoY6xmqRiH7nWp96rctryg1ZZx3XnLFNrqep2WJynNj3NJ1FM5kbDTZsFTWeGrc8kbC6xzRThZvNhyoLK5",
  "key2": "5ebr3r5dHpDYWQLyFnxiDxrE9ZmKNYkPiFsyqbxZDo3tGRMbyw6HVreNuy3BeYGdMcNfFNk3bjtZ9Z4rqZyLCDST",
  "key3": "2TRtTUkzjMvaGT7JAHgG4gJ3Xk4YDYJFxoyi1EzR6gXr53q3LsueSro8GefRUJUztVVbySgTcXfAXrMWfCTtH7As",
  "key4": "2QrmggNkc4zcSxcFqEXg8GyqjzpbkJwxtTdPZaGAh38GbtsTHdVM1DMnhYwD8sKEE2iP28BN2V8aBuyurQDFgoXi",
  "key5": "63inSxHoM5VoTnefVban16iEdoS2mAaR4KY4W1zko77SVc3mFd9fLfagUkM3x2BxsZ3anHDwhToXJA4wUuv2zost",
  "key6": "2cbCo3RCHtELfVefvjBSQnVHYzNuzQyayJ9PefEQUmHTZqQ1oexpTjFHM9K1jBcAEsWXFVicftKPEgZEb9r2QMDu",
  "key7": "2r9xrfK45xYrhJA9yH9KYCXN3mkvaHuVYU4LuXDgvPoZm5pSVdtxgVKMAJsP839XgqodUgNbxZxS2GvQ4b63cVDL",
  "key8": "41GoAYvKj1Z1a8AyVZKQnq3J7UZTsGVHrX3NDznHMe6jX958dM4Yq8khzNTjwE7vQwzNwCxmtzfSUgZfQ9fbpx46",
  "key9": "BkNpUqGKwiySgZASahw4MeNvztGGBtvptKWKVQMJSpCDqCcUJs6gkRPx799MGVpUzpVrWwccpkxBAxSvHSD561X",
  "key10": "asTKoERsViaJe9YCT899iPdpqb4Mtm4Ld9yoGLudvAYvukuUwuruXCWePN2Eb9t57WiJVwwF31RSNrzRuYmxjSZ",
  "key11": "24Ebp9RPjfMH5YxM85R3oxYaSSXXCX8nMNN4Po9k7hMZPthH1A2v3mfgA8C66jf8u82C1HBge1pNM2wjXScyBxzC",
  "key12": "394AecucDivnpdrNAPmX8WKP9nCmxCc6sakqLiqFcznz7zhByFXimaLW787KC2vYBuZFSnyX6tGGDhFfSV2RxYhR",
  "key13": "SCQxt5JcvWivfXKGGBPP19Pbtn6cP6tCbPPUFnectEHRKLjDQ5pQyLpBUujzZVJKSsUmdndTgJEW9i6UmbDw48W",
  "key14": "5smrwNXfKwGdyMngnarAxhRyfi9gtiKnM5aFvnJ3Q7z6K43pSzrCdZz4fUuaGEA4PqB97d5QVLfJNqtkmoBjRRES",
  "key15": "5xQPDS2DtqEWbSUcjdDfnsHaBL6c1Uq2XG4apunL4JrnGHBETZTaRMgz4puk7KaoMVM415kGh45Zr2RxTDGv2Fy3",
  "key16": "67ZowtjwoNaCyrUyVn6jiqtdFRa6j2SMuzmFr5PwGNQ9YVo17qAw1w9sGkJUUdw26QzGSYPgBviBYVHzb51sJMhS",
  "key17": "5JNmETV9LDp45SSNN1phPJgdtKJPGXaz4saHTvF4oH2coCrDF6i7jpZWfw5W3Uaaf5yrbdajtWcR4ovFcwoiKmL8",
  "key18": "4iQAdDJDnRGj5zSZD3dqd7CMHV4qRGdnbcSa1ATqB61J9q6mY7Ls4LiS16EMdZg7ChW7rk1Rw3dshyJHeFE1y2zZ",
  "key19": "2Dus98HooaBh6jkc7RWBpxxjKUB8rQ4Ji36Mx3BUcsyzkScB75xjtRRE3aQfHPqkvaLekW2Q1gzh8FjzUE6XTmmn",
  "key20": "5iRH9ZtU6jRvXR6UHCjcrMDiFNjBj38VNB2hkFeR1jAh1T4CRCHoYnabzM7LJJuR2jg68evh1tYhWn84TjXG9uEt",
  "key21": "5ppUrmkWDZv2TNCZZxu8nY3txFfXmCJDA25yUDcN7QUyUfmdQs3T8eC6jKceBrp2b5rSBXAsHzhZ4tR8U567UdC",
  "key22": "gpgoGzKykAUogJUAZEoCdNTnxdAAgZno5cJryEYz6oz7QCjbX3WjPJa4J3HNDuUdpAA8oj2QwLDdJwWZ1agWzqr",
  "key23": "fTJmE3Ngwnbe8P8PBWfrgHVwWEDLJPPwyMMPJJRGYX7wygw1y9dTCGWTbpaY1wsimmcJjp265Ujj5mvtJTZJWve",
  "key24": "27DWpMUxBdzvVaG4F7gGqEPLYZnNHQriNLQUBaQFfGSpRqYrmFyehzqGLY4PiTKXjtkQoQb1hMkDjJGSqmsJXx4J",
  "key25": "3FjyCyyGtwB9EcXCArFHhuoji3PvM4TpeMEdgThy32QLWYBAnpN9iskrDQC3cknP9MiSSmv5t2CLFK9EAjdqigiq",
  "key26": "2HDZ2JBZA89FqBjbh9qSuzn6412xBG55TcR475QqVXzY2MjvmPfyP6tDJkSu4d8dFzcReccQbDa5cE5hMqaEAUaC",
  "key27": "46kKwhzPHJisoPm2tSeZTDn8xPxqpw7BHL4U76ZLqQ5R5zvgwMd2JyQsPHWdx2ff3SWAjwrH4tQU8VSVRAJogNrY",
  "key28": "5Vx1DFtqywru4JKB5dXzRBxNMXWoGJ9Qvb91p6LsFmCHCxGBFpZ25AZGJqK79jkv1VRuHjeCa3xm5FkmTp8gAXay",
  "key29": "2uc2yKpZ6ayC9Lff3F6zocEHFKfDExrdCxT17Ltfr9mdPx94Y944XQFGtRTuPmJeYtDJSVwuVHZVpTqpnF2tPSwP",
  "key30": "3aNpthp7sSscfGyijBZPgdmE2y97TXrB16HSQJwvVngNkjFHXwHXSDUsbZDErkwArbjMmhPPMHz9Pkng5kEm74x7",
  "key31": "2uDhqh9vLU9vJnmpudSVBcE2779er2gAnuAg3t59DGxEqMvgn3HmQYjWw5xsK9tP24cyr2pgRrypxj8k1FuuVQQq",
  "key32": "54M4ZNKp7ZLBh674jyoPjYPqUDsc9WdhSziKwS94XMt9UZRsUL1GAAsFB8ZbjdHfbhVNNnA5DPET4nJ28toxDgJ",
  "key33": "49VuCDX3d7vt8wmXcCwYEwZ29aqEG9P9DKk48fCyAUiUH2ZSMwuSXfVoJoTNZQTx2pbSRsxBNdmcFiDnZPPh4vFo",
  "key34": "2kgy9GSAstoLhSnKJDgjBfde8ge4KtWFBMm8U8KmhBWcSVgUwxpNK5DrQvkRVyKeqSuLhPXPWZEYK9HpPCU4YDij",
  "key35": "RhxtPkLXmwUjcrF9jhpxCDQSmXHMdfWJ3WdxcZM3MeL9VTX7umrJR2BxVbUdMsmxLBdNMCQoGfcQYwxJ5h9XxWs",
  "key36": "27T5wDLZLd7KfoRy6FRsR5p9BRY83eEoTJpcmDz9j8QHTy3nu3e8PEk9atTiDr5NAKiqSdrcXERYLF2WAxNQ7a4x",
  "key37": "2Xt6GW4KbesXWfZ3ZJiHAkw4gyZGQBGmaDJeM57FJzCCqpenE9nnB4VzSP8z2XfQ354NvhA34iU69DNm61rFfzYQ",
  "key38": "27AX7w6RJRGgpX3gt9v5X6hXiAXTLy6HFjNrZb55NQLZ4LuCs2XbWNMDYa8SXFjELUi3gq9LFvwoE2avVjncYytw",
  "key39": "RQZAuvKuiB8M54Z1JQNEahJae1Ma68f9dM6RFqQhdvU7ho6n5umiTQSK84SyHhbecvKnPmCitSeB3C57RwiRvmg",
  "key40": "3xicqfDHpthyK7oBF9bHws8zXhwZdt77chbzmYAKu2GqBybcZbVff8QjjUcfdPMbek1XN4joPGJJyfhFK4EqKRqb",
  "key41": "2GNoWsig3ApC3de1LC2fmwgnnK7oTsUz7dopZSfNqoTGSaY5zrVKuChxYSjHfgxuKEnmJdSCV2PiW4jb6K28vcLJ",
  "key42": "4z8vTWfee3M2aCdfJXMgygaCo3yUCJ1tpBhuLZWk7k5W6ooSs8hnbRuGMvcV5vRkb4MHW41i89dVtL9bafUmr823",
  "key43": "22ggEZW6rVLbBcCPiT5C7rPE3hZt6hMDpHCN5SjuGqzxijRkDXCx6K8cagz6Ck5p4Wu4BT8MWV6FJABe7yA9c6X1",
  "key44": "3yWZeAQ2zcNwGiaeeHPMHS1diE2QUx2yLZZbSdYGpE1guayS9ZY2S2KAZNLraiLsqoorU6qpg5mE786EoVjM6dfh"
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
