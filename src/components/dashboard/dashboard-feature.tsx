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
    "5aAN4qf4bTHefCEy2bKuoThVzBKdV2guo8ZRvGjcJaYbV5aYoQmgyVzj2V31HYDJzC7uk1yQu7T5KHr7wnsgzPwH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nLFXU6t6giLW8qbAJt4kT2xTZDQ1Mtucki33oE6y1eQehY9J6bHccAwZWQhvVcTuFogqNrBYfRcnT5TYSTdEDEx",
  "key1": "4D7DhwPnT2T9maXncfwgskRAhEQoLaJbgEmgv3Lm1HRS8SwCTbrNmweGqtV5JbtSvLpeVwCLjd6kYRKfPez7UBPm",
  "key2": "9Gw6na7GGiizwbi1gWgB5UJvRg8FHCgtjnpAgXHoKWf7pf3X3x87HtWiHFkdPZotKCX3PN6pB8Gr1gCzM7pVhBC",
  "key3": "4fwEEzdv4mR2iAgpVXQQiDp6ntv1gZcJHnNeodYjbbSMstbcYaTpnrHWkc1FntSmBL9b5Ebo72esmo6kwote7Sd8",
  "key4": "42cZDUs51d5uEgqXCY6rtiuTQkafszeyoEnUTpRFw3YJ9XNitQYH5HAB3rEa89MUp7Jsw341UuV8hJCbY7urFdxY",
  "key5": "332QPue5iiHVgbJ32dGz6xj4Vk33DLhfrTwxs4AJSrTSje39btHUnuPD7tN9N9FD9CUCPNGA6pL53DicsyqduiUN",
  "key6": "5TtztjdJbSARs5BKFuKcbEZMNXJjXdKKwFPLjJU6ureremo6dYoRgSG5pp2pGqK37cwAqmQZmKUJySAfeCtMzg74",
  "key7": "4MhvdGzTb3xGfS33KzGPMUutC1J1yjGM9hmvoQ66MZEt4xMiJoC7h9sVDttdTza3iUBJ8GN2SVAmnmbGcrCLVK3m",
  "key8": "2d8sXWXhQL4z9Fmyab6cg16Q9Naxc8C1X1EWBjNhzQ5bZmzyKY2wzKStjRBF6jxZRJcU1t5qpnMw16P7ikqHaabD",
  "key9": "4kDSsBnFVzxkYwuEW5rrc3wS9ktGU2M9XmtKbx7VPE67xejbRQnEdxGsdnuiL1ojYV3UoZVkBXArWxyY75UU87Tq",
  "key10": "9F9sYQQMMzSZo58WtAaofwfqS2xmBReaTgQ6eu93HvY86SDKkc2Yf2uvsEB3LEJu6tGjDAXGBo55tVBkDVmxZkH",
  "key11": "pFP9cxbz8P64x9komCY2jbrCc1RDmd62kxvvEA8GfqLGfkT4uxYGfUyQ59sTFUVxoW7F3JesYnsqiSC792K11gV",
  "key12": "4XKMJy12MCKGDdj5PA3q1L9dYEEAo32NAfKX5a46QhaQ5F8ocqGt7L8MHDaLrqwZRDfT6rKM7SSSd4B4xEpwgC55",
  "key13": "Xfu3nr3LoY88gbMQLeVrMmbqXznMxmyvCqJNWDcRvQZttMoTCn3YuCLoG9qY6Mcdtx2H7W5CKybKgdhUM4QBEGK",
  "key14": "5rL9CRFMvDc4PrAYowcfSjnKPFLu9TK4UA6VqcUSqLChx11KDcsiqrAAUBV1BGg7M47YGN2y77yu25uDTh6eb17C",
  "key15": "3Y7LEdja7ht4jJcZ7jFaqZVf9GBwmcLPUDw5HfdFmpzAWKVTqXanr9N3DPoqoxJeFuaKi1cKTnSCM7MqhZg62oFN",
  "key16": "34qcvjxdEVMvpsccAobFd2otyBwj6msx62KhZP1DUukyNWUe8pgr35kaEu5NB2G8qBY3Bv5RVciuuo4a5rMXpmxF",
  "key17": "27X2Xe9BMgA9S2JPnkGQVEAHYuW2NFrSFQtY1AST4NnSfXeZ86jx64MmQjM1AfvX74pXMw1hv4n1KMJZVgRGjzi7",
  "key18": "58Pjjqs1D5Hk9VtE38uLPavj2hpiBa38JVdBJN1LRkWFT4httxXGNkEs8haKNgNWpDK4TyNbUmaonGiKfqTYJjaY",
  "key19": "1R2tQURHMudayMrbEWiDrLWgFCtHMbcDy6xCPN989fmKcq8V9xoWMrbmitsNysDXS76mjmYM7vHB7ErL9RX7amv",
  "key20": "2asyvu54meYLAASkGUviwxh5vw9VXG9zCekcjGnwPY9sEkDZoSdydkDDWb2dWok6U8yBDJE8LgujuQqr5D6np1K3",
  "key21": "5euyTiCJNQbkvcm295g3C9b3NKLNvZLTEZqEge3bVXMnpnvWLrQKCzMwntEYB8mnR8op1RttnXWKGbk4QwtGb3c",
  "key22": "59zSiq827cE3tubtHXWSdxJb1khMCWwAbKFFkTGBrQBpq1SgiQgW1yLiw87ZJ29D7DXxdQeZwBJRV5yzK13RrQiG",
  "key23": "43162R16xbBtw5tHx7RoCf5d5dVsjUK9g8CVtxqfxntgWVf1Fo53BmExbEXqGtUhVdsCouJxHAJgE4FRmSsvQQ3L",
  "key24": "w9qymkgdLkVAWH3s34p81F6pVaBbE8VZb2vxWYrdcF2tVHXTrT119zTGrRm6qaE9EKdYSbXXTZDtnsZwRKSxt5D",
  "key25": "5hWg69SAt6KKqwnNsngb4maLvVr4vE7m97rzvdyVxdzf7cnhJGYPpWLfhLWH7D3v9ViLh96DT7qMJ9gm2pcgyRZp",
  "key26": "3NohMSJvshtTinA8waVodxfmGNViZvuS8dfEQPnmcCsLCkQLYqLxrGX18yYHekDsdCPgSnMzSJTrszMk4qPoKm6C",
  "key27": "vkCQhoJbxPob38H7yjAiHmbaogJ1Vii6LoxFUZb4XshETYKZkNyGUBCWw1dURxWoZDDCGS1Fn2dh7vAxcS4rTRn",
  "key28": "5Yy8T9aPbhkLqdmCiJA41nyjczhHgZWmKPyfqLtMq9PFmfQS1aiQjb9cvv7fstRNYbZdhjj91td5fQz77pkkMZnH",
  "key29": "dAnMn5pBSfJ5PMgCYq5o7knNrAyctm24PA5hcpKuU9q299ysP9iHyzQ1LwxQYMBoApDAcQDsvvSS4ohGvD3PwJL",
  "key30": "5eUJGyvabm11Cf77JChYEhGH8kutvJ2vTyu8YstzjCYQmsSsSxYCwFYJ3GGsHBcPPQsdJuSM8guj6v5zVcpmyVp4",
  "key31": "4CWxxiL5ET7vW56RccQWSsPFcYE1yxpzTHMWVVDsyHF7ntor2cHdwH5LghFQvicJc9xY4xDTPv82UEcBKP6gQnNS",
  "key32": "2nAvx3Aw6VYWxKJHh7v1E3iBH8CZnA1WZeWFF1jGzZqq6PZ7JaLznLitauptPwaHqgEntoZ73Xn8RsJ3PeWNukQd",
  "key33": "2XEAxuGsAidGVA8gN964U84yPq3UsmwYHLhfTLWj2WYLMGML2psaDdVQbvVuFPxrCpJuCtgcdvKY23AmZxpjmMTv",
  "key34": "2rpZKSGUZFsVigJ58pccqLbVFSGbUfTjQxxY3KNy2zpY3YvAixCzbgrBYUztmaNAqvUxMT7tVE1xLiWDn34FvFZq",
  "key35": "exHae94cCZsbCrgn4UH38TdWHpzu99C1dbL4YA7ckPuGrZmSfKKTiqHBxQxP8K9TfkJKbFSfETVkTeFZDXeN5ZA",
  "key36": "5sBK2KNqJzyubXkVWuM7rFZmibiTp7TXFNmaAYo2kDXZJnDqMgZjgMNqBCYf2qmiGmtGT42DsbcSKtubLzTTrmvy",
  "key37": "3JVFrRMSLg4HL1Vn7y7M45goTdwBZxVUyqNrbY4vMzne5rXpnaDuxv4zjdMujwajLaJyJV2Nr5QAJtY6FYZNfx1d",
  "key38": "4atwzPkBbyJKZGqNEuQnDW3SVsy6h5cxKK5fVTspTipH6vnChfY593rfaqQfEtjxNbnpr3Ax221TBGpAMJcvJxed",
  "key39": "3xLzMzswVdH8GVb43n6NnxGLKZeTQuwypzqnBohrPb6D1A14edi736dkVv3WB9wDS7MitT58VLuiP8Zt9wQ5MmYF",
  "key40": "2XxM7vCdC1eQa7UGZ5NpU7tCXKMwueVL8aKbS7kLDch8Un7RRb6QFwz9Spo6XbBFGeY53FhPBp5xWgPWtaNjhVg3",
  "key41": "36yUH2Kmr3XnZ9jv73WiNgrVSST2CgXVnBXMaDnd4KAaXQGvHqH7axZWWVRB8GXFQD8KYjpEtaPbMAaZJrK9tSHP",
  "key42": "421cTzHfBpi93xQc9JYpwwRZkB9QRWPLwbwcaJc93ZhECj46cAz9smPnbqFfBigTPHkznY9SEkuhB9vatshfJsxH",
  "key43": "5QecYH3pvrso9j27PS8KFhbgUSYC7ZyBMH98fKS4Yj1gksNRPSFbGzqDjwfsRLHZZmNc3FQWguzqu1YBizuoXBx",
  "key44": "2veEG12sF2qjAhety7LWQKRo5JjL7Uc5MRWyMiUN4EqQ5eWf3595zeTJj6DMxRf83TyQ6cAfpvVJGwMAT1YfPkFP",
  "key45": "3z6QX7FodbCHvTpTBmFi9A2WjXysMYBkT1SqN6bjM3W6iTToLMhVgHYDmfgu2DDQKHGanvfUy84UBVF1b113j3Lq",
  "key46": "49mhrfwQQdBg28DJpDMfTXYTA2U5xuoUMsb6RZNJxK9bJQFxum5Aox896Wnv6mJSKL1DmbBihwNPSX5pxApDT2ao",
  "key47": "5hXJLZsbaSTCpe3ZrKEvxSht2d15jGcaiDcjnEdiq2NXUrFDbF8mh8Ae9Ab3oMGKBp8CZNCE8qeUN6cq4cgphJmB",
  "key48": "CWXoQS1mB8FcdDkQGVWNdKgXRSJW2smtMKry1w7osmcL7pkDuuFgMuGAo4axY1dBk8sdXSvpk3QziSz4xo6JXEf",
  "key49": "2S54gtkETQnm6jtkY3XsaZLZ7Kusj1rZ4hdiuEw8k39aRwsTyv6hR8ctDSXwBEn9ALX7wtBwPqJtWms7h59SEWn4"
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
