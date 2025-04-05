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
    "5qgVhwRJcwYPNtj4G9PuWs8xAT5RqeRvAr8pFzobyU9EcnfZXMNQ59cHXL4cQTw1TFXmkckwBXdjYGJv4GjPgL6Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qABmpRpNUb5CYyDi2bi4vJBTvVMHKcAKwsDAGKUVNQjmzswuHZfxNi2qzrx6XLixJKGGBEWZj7FA8Hnb6YjCzhg",
  "key1": "5MHnFnviQyNuRhstg34QCRr7mVgGnkApXUF9gryFHBsEHTTCYHjC369LfFE6DnawvkTEqttbg2Boqh1k5QTtBL2E",
  "key2": "3tNuYNf6uazCnVBf5R2SZgF1TJ7M6SEVGsEChSrFdaeKw4YFuskvTQVA4CbxvcyHFikuvJHYKkGZjrsM49fHDwao",
  "key3": "5rzUQQcgP9o211Rc8GiujJme3sAY5rC14YJ3EZhcrfHpDtqxvbTKkBBEH5w3tpnRtUyECohgST7N66Pu7wuqAPCv",
  "key4": "btsKcsy5G19NZqxb4LFMjwUsURuyNY8SzCnW53hgvgu2jH7YJeeb4VeTDxu8DWLzHnRLJu4jxpGzfpj92htsy5t",
  "key5": "dJ45RZJhRpuZWxpf1skE9W3qm8RMG4ME6QzQLLbkQPj893qmXYZqgq83jPRj61C2SZ25UB1kKKFNsTeYA444jh8",
  "key6": "CJPLrGrZqj7n3k8gQo5DFanv9jaQ3THuDLQRkuXqXLsask4gqyzFM1RRArSL4mJrBwjUwbh49PRtnLjf7yKAtpH",
  "key7": "4nrXsX9MbYVA4GaoMNwvsJKL8W4bNWjMywEhtzpLBsU9DM5aSRq7Q54GznBobDuzQr1B3nQ8qKjWLZ9gqRYBDWhY",
  "key8": "2R4cvVj7Vz8KRJGYfR1cd69q5u7rTLSARr9mbjof6ndo4JfYXFPzN7pU1yBTteUJKGjMsokkXS9PeeFjRAZb2twY",
  "key9": "34XvjARR8njA5G9TQiBm8zQtmTbYeQdmx5zrW9Ppd27zrjxyvnKZwWkyopzMMeafVfKgD25KghWtVSAXEM8jWKdr",
  "key10": "MPziuuHUBZTtPJMuTihGtFQ3DAmXgjV4WQrLngRoiNrdHZfp9tho62ZEyPWVdtiUpsaCfpEETGweX2jc7rkeNnQ",
  "key11": "3qcGyRzTnzTiMcQq8KjwhKYxhoXhd1V3pKbRzjWKemixmPSNebsc5zQp89dA8LQvYHZEpRwSEBJGh5YwYB5xHoJk",
  "key12": "4CroUfebZUXTKYrToxiGuSZVTQpg9Py6LJv8NnQx3rKsa1rgxu3ZJAbdmAiTyKXaQqcEEnzsBrm77ExcpwsWzv4B",
  "key13": "2Aoddj1mpVYDmpKSLGPygFCWDUzVjDQYje7oAgnr2nExtQWzsyPgb8kAuT9TpZjgHM8ptv3GauK8CrcUwWEXT5Nw",
  "key14": "5e7J4NLqBVjguewu2zvvth3D3Cp8RhpmjMVfcPwj9y7AyvYQFeWRMavUYT3qn1cE6CUPJ3qDa3Xm25uJpC6baSz5",
  "key15": "ADz2AEhvGMoiyR4GkugRC1dYfAhxgFJRZ7zcjzgHEgB2dE4xKVkcn2D8mKcGRgYgKsSvAb4u3kD9LmEK1Yzfseh",
  "key16": "DqxBaSz47DK3dohAWEyBzNRvxfBdoQyNPrP4Ff52Gxd4GMaNrHVZytZcZCZanfVVwN7JwpNwiThm47mjZU5Y5mH",
  "key17": "mhry4xh8i2hyfZrZ2PMLNKFSygqVsGNBZJ6hXfz2ZpbHedrCHfU5mRp2fTZfyvjT8tsuat3PKHHbb6v2kDCizNm",
  "key18": "5xGSNM7p54XyKXvpEj17t9X9eo9gGZkuLfu2FoR8nYkvGLhs5hS7eUsp2sD3nDcFQppggvwm3LBGQaBdTAf3dvRy",
  "key19": "2FDnjyJz24E78uPRnHsVrtVdDxFSo9pKbiVYD7mGKQr5KUXJE4Wg9FHc4dNgnPZN9pWw53uaotoF3WwhXZaWPVao",
  "key20": "4MmvDNeGazXMbCuTZARJRNgvi6haj32boHgJLGasexbxuhHo9MorUCBZ4sds3NJzL6WtrkJKgdkFvQUhLEZK2cSP",
  "key21": "2FgwkujN8QkvADuSznCykFzwqtjwJUiNcd4gEJDsS7g7FXcSWnsT6vetZpikSMu1vzaDPuyfwxLNBokniTqamgm1",
  "key22": "5F99hwfT1uRHcfH3jyE15G85KA5czYMQMiqRXeJg7CP647GrqCahxeem6geLZR622cpPkFRq37TCvDqLVNPwXc7g",
  "key23": "54G33KqSgw1XkWhQuWhS5RXbmnjcwKMGmon2AzKH1taHHh8Ywqk31mFFFJKkuyceYx6bjmXAHpYZb1N1LburWDL3",
  "key24": "5zxabe9LNMPTHesdaLegVq73dVUQxMFPEu9goi2rzMqY3vVxrYH3UtXRY1dcgePK3Ws59cyt2Rfkh54knYANdozV",
  "key25": "2nGYgcxtova4Vb3qiF34J6EEjqUq6aqd6o4SCSSFqabWKiiUJdxR2j3mMjvDq8Mufxe1rvUDTFZFz26fHRvT9cXm",
  "key26": "cMGWjEuaGG1dXa4P9QokHCAnT1H8fKSdQeWdeoqBpu1sjpPUAkec3cuP3HRwDEYFwEeftekYfZujnoKk7WdG9KM",
  "key27": "2L5gTeExquopV1bNEQ95B6AFnC99vb9ZYuGNN3XNfumh8odLnbTmga52gwTYskuji2LreyEg6yzt5PvTvM6P2iCj",
  "key28": "5CZAKkrvmDLnWtZLemqrPYAKZTqRf1tJxvy8tRLFxTYQk1XENseRm7kFJQTDT3avwTTMAWei6qR7Sy6uoEM9ndEK",
  "key29": "5oAFa2LFVt5BsWSVF7TRLuBmSSGbrWyBsiE71vjuBnxrtv9jVMv9v8TV75pc3976u2FP1Quxw44pna81CtRxz9Qe",
  "key30": "2cMxeyZhe3iNvZYzkZJrDErG5CdsNQX3GTfmub3gJq2FAqqhbCZTYSGxzMp6S4j7TRRZAxdrfLaNSakmo6JhRuh9",
  "key31": "5wM5NEkeJG56u8ADDSLEM4tNdaAK2oQSHwZFU1PRg62XXkNjSuQvkuepXVzXi44YsFaW66wpdPEFGuZF7c78gc1b",
  "key32": "4fakcw6rVec95wtgAZVGrmJQdBEkTcrs8WudFM2kt8o5LzD1azwn7zU76y2sfZGGnsjrvDKSzD4GWkg1xgFTYsr3",
  "key33": "38pMjGAaUzqcFfnfciFKx5CTTm3Kks3bFnHptdxwLu72ojdD18bsuq2PAt8wbQNv2CPMtaRywSKqjkBJXUgAo133",
  "key34": "2w5HPFRp5MV9gm3FuNxDWxwqDFNw3XMUvswyB71QVGYw1emdipi5rW6yj3zjSNbBKEQWVKRqd1Ms5RmmNfWEBD3v",
  "key35": "3UuZMh7hWNgEXmAStS4i9qii4wWCoZ1WjbAgwpqZeBywgQ7fp34yGsfzb25Yi3TgVKaPRUJSy2xk8qEGAzq6ZXbo",
  "key36": "3qRQV74HpJATUeiKchDtwhjMd18zvVHGGKzHKa2htnxcKcgHcPGtdetUwKyUn9EuR6Azyxau5LNYwDsE3XQWawZ2",
  "key37": "zxqcugoU4AYBzfNMXNhd2BTf38PwmbXXKX3hxMnZg47G8Bf4cUAMnLcuNCex2JWKBB6xZezy5hzkHYG2wMW8kUn",
  "key38": "pz5ch3t4RiZGEp5xS3YsiVtZxZwvBxXWU5om1hUDjfGGLu5aoL7SYmefprKska6eiAS5yV5ERqQSnQ8jLMjD9xB",
  "key39": "3xUjdHWAfUm61nwNkzDaFJLVZ5KxxdkNkMziAQYYiDGdabSd5uDfBZF5QZmUPd3QkbmSyarwGa8z1i6UAC7Gu4hX",
  "key40": "2eaVoT5cvpYSJ8rk8s5vZ2Eg8vt1X4rdj5egQqfyjikN7SZeJGJDn6b1TEtTS8u2XXuzKTtfPgEq4AwGFyXumRKh",
  "key41": "4PT4pmG6MyvsoWtwgcpyXK9wxwsUDwssXxeYEVGKWQQ2r9NHf8V2xDQrHJbKGPerxrvsRCCRw6S4aBDYsnEupzUF",
  "key42": "3tMyevk9KLEBP25JCPrQvVCsGTuNh3rUumH19vFjgo8vM6i3VVogws8PvavsSMbx4DceuESWX44zL7dd2w1NojUE",
  "key43": "3uCyLZ324TWRsV53T69mbK3N2GYdkGNcHgbBpnhf2cZhMA5EcvWjeBQFNJuwQawSXZhsXVDtBXU6NbrifbxqiqxJ",
  "key44": "5mBDdhhGB67KLXE8LF6hPrgk2iWi6NRWQwKjGwVNTxSUt5WCYUvUTMaHp7X7pnCopyt3uzzZLZLodz4ravgU4pCk"
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
