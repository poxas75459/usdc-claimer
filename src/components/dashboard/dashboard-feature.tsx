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
    "5isfEP1g66vFU4KD7trjHj3SWXWL9CWiXUYxb17dzodM4sxiaC4QErBUfEGmqgYR6FtZFJJyybgXsVQPURUjRxtn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nf2VEZdjGaE3kHW1N2jLY6oyiQU9ijeT6EdY7d6EhoZXXSWxgs5piz2GVvawVShA2BnnV66twzz3GfLLyjgNDCr",
  "key1": "vzMVfRM1Z9am7cm3wVojBpjephfhgC61e8QUtBJfYUuuCs9s5xRm9JqxwgrCNfuXfh6N2n1do9eyMLca3VNj8aY",
  "key2": "R878fKjh64UawEBfcA6URrNyxC8wd6SW7tuXzB9CgpmVVEuewLhM6eLqcstaecomvBDMQqquZK93vsYf6NQKm7Q",
  "key3": "3ipvKspo4vDQ1xjUvsWgTPBwWDzKGZArhZnxUjqSWRaxNkPNqjSjTgTkfkBvefJNRZZgwJQ43UgftGwHyGnP17pm",
  "key4": "5r1X88GyeQLkAWEBASDJmiuLVP5sKACJmexYGQ2PGKPDXbJPMQaXySSCNkurS17TPJ6RhPZEBuuaQUTJqXfcgPnc",
  "key5": "5kYphGB8qDq4ry5fTtMPv3Fix9CdnCBuz4m1AbtRwhWHNWiZQkiPfSipnMVXwutS1yAUbBuL38ZZWDUCVKbDmtj1",
  "key6": "5jnwWzaJvg1Amgv6rUKRsG3JkhUYdize7jCNQY8ZsmvEgSV3vyGnNSbTo453aAXVFEtERpbMtGb6Aci83HPjjSBw",
  "key7": "3mGjsdx4hioVDyYyFHSMFSfJhzQgpH8CobRQdxDFirRA1ye69U21QGiEJCv74rVYEjGAxExC93r5qN1HSeegM6F9",
  "key8": "41qYBPiKxedXTwAhs7qTj5uQNhcdfMpHUu5P8oAzM7sFUJoCPzanzEJGdQbmQBiv1dbmSxV4q4NtAvaWkEsDnmNP",
  "key9": "b2a537cvPLZuW2zT35iniSiaEpaFY3EgPte2utykDE67YaLaXkbW1rJ67pqQhLroUVaA2XdR6zj9dojnnCshkPT",
  "key10": "3TuxmEGDVwZQ3a7ZJuwAcBnuDfbnEz9r9oM9HcZcKMqdrevxV2zcYwiqwL438zdu6BM24r8mEfNoiC5fZnffp3YF",
  "key11": "5maZjkAp3HS8EVM3M22oucCVyZ8rPu97T3FeSLzF29PKpXqEg8HNXGY5CEcKAFjGhUXYsgZfVav6xeGBvS98mShd",
  "key12": "27yk8SyC8Wg9iVPg4JH9EWF3Nm51w8PoJ7VUemtgrdxr2dq7iBmfZMAytRriwQsmdhtJt8s1PrWBk8oKhCq8mBG7",
  "key13": "YBxx8K99HUM6B7Yau48VTvodeSNXQAwoUBiA6VQYLg8ADkwFEU5vovnakjYrsp7KktjztndyFceRjkL7etZbQn7",
  "key14": "smZvmwUAW6xof3kX8hNRQhnB7jRvR81cHFLMWYChibXptTmpXfYbuxHh25bahKiq3LPv4DCbgMLULxarjwiHfSj",
  "key15": "39MXdWnaT46BXuFMffLUVkuZnaYNtRshvqTZvKhyVtA3z8Ee77SVey2YodNtEJecBj6iU7WBjcF4JLKaFj5EApJZ",
  "key16": "2DAiqGmjxZ4GJzzhM3eR5CeBpudsUX1ZC3wdt2ao8QSgHoUeNQuGE8f2PCyhRurReWwqyk3PWtaeeyzByTTqDa6a",
  "key17": "46DvnoG6xB9RGEhVe9UT6eCAVJtbBkf6JtGmQhKR7AeLkYtMy8VdTzCpKKMS46YRG9mbuLLdscCQJiGX3jDxogiT",
  "key18": "35rAEQqmu2LAVFhDUZqiPqvJ5sPpaYoYXSvc1B5AVeE2HjCg5ELJnVTv4bVtNpd5J4Yr4TzrX7qfJ8Em7P3d4F2U",
  "key19": "62RnpejMVnX8WEUsTDh28rTBykLtz2LQFAXJgpK57JHvrNUc3zeBQciLMFZtRnGARJ7j4gaNiffdY5PZ7Y8pVVhn",
  "key20": "49JN6PwZ7UhdjMV3pWqLugNpU59fQUVXFSq13NR5xVCcVrDvZqnmz7dJAHPcntsmJPgeKX5fYtRS89tfmD1eCufg",
  "key21": "3VbiJuSrUY3Hq7BmKmPDtjoJbaXUHTwfPMNKgtfG2LeW7c3JbDgkZp7Bv9GEeiLwo5mb2Fpp6435udEQvGJuhqcU",
  "key22": "2Ld5PoFQvCjfSUMaYvg8s4BkRZ675GWWrveTRNy5TrZCCfQz48vmC8dgNHDxugSQCXYyCxee4vudiUodLRg9nBjU",
  "key23": "6uAnsFNJ3z8kdF7X6jxjLXvHjGEepT88p1a6p8HRMFtikrYuYN3hHLp9EGo6xvaXpx7NuAMaH88Zs7j2g28RVaU",
  "key24": "23m2kaqRBnA4eoeNDRs6Hr5LuzUY9E9bqG1qg2w4kvo18zif1p4L3gu9HssEnR8udCYLPLTjzGvGJ53fW2D5DBhB",
  "key25": "4RVdTvpcY1EaUXNree5ZgjtTGe25C2DERWtBfKXyYAfoV9712e5kKh7Z2e7x3eSezYLGi1iqNqMPK4fLj35Ycvre",
  "key26": "4r5kFpWDLmFgjDdQkcRRK9mCYWnTTRf486SW1uiKpYiDrU4xVGvgDDiZzWpAJWTyfJfK4YDaedBa56G3s47ZWmMQ",
  "key27": "4t4F9NuUUpHoQFjr8mzCCwFnYYhLhuibizzh65aA5MUCMoU5oRr9Q4oVdfHF6FM2QAhMpntydLAGmDJMnRvCDMyV",
  "key28": "4fnwz1imkXsdxkEgVRQ6oo1Z1kYtpfc68EDDEWEtj3tDMdKLeC3L9EFu3LY5mhCm3xP54AvP1cfUcPGr6TSzJKa1",
  "key29": "3B7pdU12j1JZMfrgF5nHP7Xa3hpN3aYdktNokJC1YCZZJi7jJ4mjyxKuhJgZKKq6rGQebMoC2yXC2Bpix7XCu3aK",
  "key30": "28CqZ6r9Tq7jWZJTKyLL2ZxGpL7EanpaYP6T44qUQ7pJoMpc8jRL6bG1EpimQtkchVXNKroVYKhNE7zh9v36uJFJ",
  "key31": "EJwkMnRjsGja7JnBhFBYZY3pRu2ZD4aLfVVzMVdsWKJiLbiKHGkTkVQEwuzVEVt4PBXYQNo5hRU4ToFkSuS42n8",
  "key32": "5KGXV7DRZVZYtQZnSVPhsHDDH75YjmZ4dphWXG8Gv4nZhvUTLt1EDZhao357kCb6ZA4nBJRW3LkVv1F3fZGGqbav",
  "key33": "73ZWQV9Nrv4qFf86dfqGNzy8LziVjhtg5DmpfW4RDnkcYjzA1LgchVVfDGEVQETmCTjfYZD5xnVVPVNZGA9sUCv",
  "key34": "4VyQy2PiuKWYKAf3UPJphhkdWGTpK79XW1BjgCT6274LCR56skB8wrPh4BvY5PXiof9y9m4X3Ane52tFxCtFJMsC",
  "key35": "4khj8TEkHLt5zegZH6dGqejkasq2nRVg9GCQGusCxafKrsjVKaZzyy5U9F4m2WcEgpox3NKkwpjDHfUZMBkJB9aY",
  "key36": "5iVFTbQT8EhBNFQHQK2GoDrni57YsxMcufpbZQ6F4Lx7oZYMwTozUaCGVnYirb4Jbffz1eGadaVvZyA7zfKYgiV5",
  "key37": "5H8jCu6psYTGRdEQVjq8cPSUcdDU6aoiFRdHjxVuEGw62MiZidq52DgENRTKsWo8mdk5Lt6oQKWwetZPLiSdWdEs",
  "key38": "5NLf7NxR3qFABAkE9eG4uiFCc4DpZgwaLw7XqeWsTtr1yXhkbZjPLCrHwGr4XAbjLHT5X3Wr4t2zrwsmJ9mFo8RQ",
  "key39": "561vdszBLM4LSTtzccaQNRdWZMpn8ko9p32fuoaW3G9eHoXRL8sj6UUWXA4vPK7saJaZHqbUVTStQqXdAX1hUPmJ",
  "key40": "4ANw2m5MzKeDRxxz1aN3FzXgr3FdyRpNtXkgtxuhbYT9vgYHZbkazSKu4ViGEU2f7K682bBQcQb4UVuctoD95YSL",
  "key41": "2LrA8ZLchU2w89W5cktFcPxBqeHoP53hjZzX6ov7ZJW8bBeLC3PvaNuNfbsJ4hmjqfZxAadPg3yiv2NMsUQkhJ72",
  "key42": "518sWegPYnq35xUNwWXV551r77gy72irsFPXmbN7mEQWgfkVXbtcFxxLSaNbDuLbMxCBtM7VrHiDw8sqNHuELa8Q",
  "key43": "5Gbc3DnivpkD9iD1QXRz3KWf5Ne1zTupvtVB4XX8e8wpfTYbxLx2kFq7QduJhh9wYXNbjBSYBMxPrBpawGv4gYkH"
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
