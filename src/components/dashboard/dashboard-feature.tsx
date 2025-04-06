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
    "5kLw4cwdrHqaJp9JmYiBWKZJNjKfzPHBh15CXdB7EBRShGkY8LpSZhcLNQiBFkvebTK1JNhDUQt5hy5HmXiigCdS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qbnVJhSQ1NfUeJbDLdLpPtZbZES98kLvG8TM61k2osRZtNSmJwMmh4eNCmGX6t9PzsMzRtbAptJX1dqrv89JN9w",
  "key1": "2wTQ6QUHYjHPTiN7YAkjkcyVFA4qpB27Xt8uZsF1qvHV3mjoATcbkrYB5qYuohANhaeYUexK5WHFuLH7PK4FZtzB",
  "key2": "x3d4aY8MwgYFktSkpqoQnUUFymBi8ge5pERFFZAPdv9KQ2s7Pu8eYZcuWwbQPrYStbDdjC61zyFa2f2drd1SKgJ",
  "key3": "2g7Xii7LpjWTPUAFDjj4hCY8PrSrzEK1bsygQnLMhbXELxZqGHCPRwWedLRw2F7PjNq6S58vntTbcBkTmwrkSpcu",
  "key4": "6kJxTEkpzSLbKPuZYibiZH87rnzjvbW3unn7UCvuatHieAqwwN35HFJEV73AtwnBRZmMaSnSNY1xw9h3QVN6WN6",
  "key5": "5kRZUehmZeF8V6rxm2mxRcdWSaYQ2zJJ5dicTJcH5C7A5mp7PdnrcFcGLWQkxAnTtfvdKpGKHcg8uDuTzeiv9w7e",
  "key6": "4YZ8K4cbLJwCNp4ELsYgDwWR32zkTFW6ZtZGRdqYCJ8rh59576gphtRE4j7jPMWquAFLUKaJNBq3P3cif36AttQb",
  "key7": "3XEKsfYtEETQVBosu2esv8YkB6qcp5qtWhrWj88Uc5ZSA3ybnD9qSwFfBd2PzKycz9xQmCfnPuosJxhdURL9FFeE",
  "key8": "2Jj19VoitEWgQLM95Gio8r9sVCx4abL2L42J46y3hZjYTXixH5BghdJ7q6UWFC28AzCGHBwPv59Xeoq6xJnX6jMU",
  "key9": "25MkMsCR4wzeef5NrzXHyVbFVAiKZbvM8ZmjJBgMYU6koqRyhcPFSr5B6pdqKU9hmybntHpq9QmMTNDo8MRGumZr",
  "key10": "4oUdiUFjKVWQDMVCmbcjir1TMgxJ2hgXTHupHU2tkTvxMYtjxZFuhsy35dyCfdXedWa94qQeSqwBxH8T9t1UiVqk",
  "key11": "55pgZg7q12sY163dvT2T1NVJM7HMwCb5bUXm5BA2AhtN71kJJv8WsU3VUeQ9bHDafxpuHL6gy58hA1uaZ6LNZ8tk",
  "key12": "4DeitcnxtwtDc6G4VC7RCST8cJ6p737QiTS4RdHGv6PUAwL7KhHcNMVtqk4wYMVwni7vNSHgUP4KS2FptR4qVdpT",
  "key13": "5QwChQeHE5JtbsCEvdfuEiGqXA6dqh8kohJK3EaqcrvyWPVnVnCEH9YsDNkr2tJv4v3CyAnxLn5PrqD637Cft41U",
  "key14": "3C9YGfo7d1QjLKwTcYPiR7db5vBQLJePtGHhfxarhRuXiuZnCkfZqYdBD1mtzCxNRQtGi46DKgqdKJkyXb7yp2WF",
  "key15": "37GJEbX2WzpvQx4Wj9NHwEBUVPg5LKKWs3XTWriWCbomPuCL4mP8vUKKsugWgof2fd1fEX6jMeq38YS2gzwkvsHx",
  "key16": "3BkAAKSD8yoRiWSBLuWL4XZLTnN3We3smbv3x4GfWioFeJ4J8xySRaUv4emBZ85yNq3qyGhw4rjgVEh6sF9Rvnf9",
  "key17": "2hehZLHUSdcu8FiRse8zswHge7X2Y73x6pmBJwpuN3TWojajFDYTAeak1443y6EjnEG14TSJCG5tAiHXABWZXF7R",
  "key18": "6fRfxCQQefsTBgNXxuPtC8AwxQy3H3q8sFGzNCe9jSdYRqb7F6ihh36pY8W5YA71Y8jCCUNzLWDdLKoprAd2o9A",
  "key19": "4JFxCzMbpcXSNNULFdaqAd1AjGbtBwXouKZ1BZwacyMYVZCJcLRh1K9L4NuzicP3U6ZNNy5H5fkcs51VBw5saime",
  "key20": "4b63yWQaR5ib4vutjqdPVJg4sV2F9fcfPmW1xrQJmdSeqoMweNgBL55LsugKKHaQQNVvkfeNsViUjb6F3oTLQR2i",
  "key21": "5SkcgDA8aVpQN2FvxBg4P4SUoatLfTK42kaKKjqPKW8AvyaV1JLb6HFrJqRxnydfdzBESL8NHeHxP5JBqtTVZhaf",
  "key22": "3iL7HmBM6z3hFEkVi22zfX6eyMrr9iBARXH9mW7qobBYJZHJKmKLGCxkEaipHatao1WCBC1FFtBwLWmQqz4FPxSB",
  "key23": "3RypeeNGVF6EG7VrJGzS5mUGTer33nbfrVtxytxxeTje3LrXpRgtfD3XuLmLSJ4ozynn7CHPUBTJExQ42gKXAvCd",
  "key24": "5vZ9pozFhaf4N5NQ3FHg2vWdL5oksCMgEti4ocTaXMcx9MWpW9rDCZv8w6nm78eG3tWSEb7fDc7Cu5VpVk4216rS",
  "key25": "38ZVrztJVzr1B7hMKvzuTkZKs3jLMXHmSArDJLMsNMTd62E3XyrYysJAmqbfpG4K9yPWZdhPBqDaRpBnSUfTrKA2",
  "key26": "63QR95pephf4ofSfQfsVphojSk3MPmyyJRZZTCoup7QRPSd5FqCcKVwBgDNJfLVqp8DPqZ2pFUu87BuJxQPyVAby",
  "key27": "4apRLH5QCTU5qzJox8RnUXFHqFk18CAhwwj18cAZ41eYLq5UTQ68v6ugyDkcT1Y1RtrJGjpCWyt9NT6n8eSonmRy",
  "key28": "ssoywSULciQC944rNsVKwQNZKNzhkupMxM6b7tGTKJuFk7fQkZQsfH4rCu8ZBXhzv7CkK5VfB4N1LxfpGsgrG7o",
  "key29": "EN3VdQQRniaXxM1CtKvKFkfpfEUr91rhURGJyRcMWpMcfWtv8Wi9YAPkrnAEWBC6zbUV3msZUPnRZM9GxJwsgcR",
  "key30": "3TZGrMB1diDXBmvw14jreLyJkALREBpCsnJYPmT5r5mA3muBDzSUe3EKSUwExRxpotprHR5ibyp9HZVj11Fu3cmu",
  "key31": "TaLYpxyiKAKSkmsyDct7U3kGJrrvi9d5Yc1Q4RgfRNd7M9ywtbPTxb5Lt99m6Gw4qGptEyHzDw9Rbc9JeQtHHMF",
  "key32": "SVLvrysW3JLmQirMhBnjZqdKwA3wkha1Ag8ZuANBxNF2UBtLQqwKkiBvqzfg6RB86ooYx31x4jzh32yZJyBRAo4",
  "key33": "2PMMNUFXu8irxrFwSPzox2mwpLtv4ugmiaA5ZXuoS7aApeoe5rtet6AuTSDq5wMxZh1XjMonY3qrgvCQgCdig6ky",
  "key34": "5MXt9QTTbmeszv1PVazmhK7raFj9C3rcPZmRScNj5XW64JW7FAbb1wNocQf1BxWXpTgu9qSxxsUX3EPF31v1oJrP",
  "key35": "5zuPLgQWdt1sfbLLor9kNcWCX23SWcjugx31itDc8xYUjRLDeFdu8mvLAYhCT1dfvycjyWqALxCb2bUThMxhDrz8",
  "key36": "4cRKFMKZw1TGJM7m3qrb7nn5x8F6A9DP2qPsYJVg75mqCfuB69AdeVC59iGvfa5W6Y7AoKGjMijwEuziGmecKuwA",
  "key37": "5oUwhwPqQx78S1B4dMbhTV3Sp9NxFwqmQ26pXujbV1nTbqLEaAsnWyMatPyRM17ncoJUYGuu19gYoNfAGcgnthSS",
  "key38": "5g6ELRx2LYxfBTJz7S1Zcf9bgDMFCDMccz8C5H3h4ou5iKhPmkgkfMyEmY8juxWeqa1qjXpvdxMCHbf7WbLypnd9",
  "key39": "36deLjgeG26sfcQxBEbiZP59buF3k14aoogAfdWQSnPivKv2Q4JzBY1uxypYpr3aZgtgnLLaCH29bdCSBUDh5P3W",
  "key40": "5EDehTMqRpndRjFfh3buBGBs3j3dRs21g5smW3x8xN6exw43WdTZpm3b34nHmgQbaVRc3gKfBWcoAgPAZp4hMAj4",
  "key41": "aR8W5aGNhxN39mV1ftDZXKsPuUDVTxW4CnRdKysew67ZUL9GzbjHacG8Y6Fntx7umSgxS7W5kBSzvFUYeioMCzY",
  "key42": "32Jxd1u8o2n5yDkC99JCrLbpTGCxomzx5KfjeAxxQFdEwh9dmmW4VYgz84pUi93Jy2j6Cdpj8CVKzZeDpLKpr2A5",
  "key43": "cUw4VAzyisbYJVdqA8NNBJU31xbeG92KTH9za4gzKTzkV2JKpwWBkFiePmGSGBieziNSiXCPRXb9BgJYEuSo8Rb"
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
