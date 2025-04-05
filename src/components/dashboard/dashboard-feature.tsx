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
    "2KWaFB9GHHzvvYJg2RLHFSJGNZjaR7YXdQxPqPD5q2d7mmeQCRkNWLGgJPkYHNGjF9yUodPm5KqxBxqxgoaaDTaG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K8quhDnk5Zvyqa12tpyQaodf7sU28vVwBvW68hPbHco4rFdwSuJ7AXPVwTUeHwy6FoUcTv2SpnkUeXMWxwuEgWQ",
  "key1": "4BfhZWuc57tVhQURNt9LGmAx87wrvzV872zG1HBGqEhPrQVMQkC4oV7P4DXVPuxEqePmHUtNPyrYJpizWrohAPfT",
  "key2": "5TiYZCYCP7QUvdMGHs3pGBJhH67NRDL8tJ1PRJ8zKsbHKDAfAc7QCzCWehuwu7BqLgZ3DFQePixediM4Vctce5Ud",
  "key3": "3uN5RkMADq2WL6MYzZeX2yAGwGLkjX7fuJjmpwpuMZysiVTivsBN3AfVZbfUPLBaWinKYkkVVVg1Db7A6LdKi4oC",
  "key4": "3Ydo5D7vgXDTgtBHPb6v7CRnWe3cYHBotakAD1HqzpHoxLM28wFSXb1cgAwq6nxwhMFU9xeTzV6fv5dkoYT3krMp",
  "key5": "LQs2RsHsvSfhbkJkrm2NZATPR5FdXzYhEHdWHo8s3sqLrTGu4noHCgjf7m1UjyhcBGGJduE4oTJfVSv5sKeENdQ",
  "key6": "46GGRo6DLL8BLvntxw3cgMeYna51LFQCax1g3VTM8LZyQ6BJ8roDF721nqBZtCjx4n5qSnaXv45PmU4E1vpZTnBZ",
  "key7": "2mMtjzMjSFGsu5Hf11UM7p8yNDvq6wLuMVRa5EgK9v9n8nrAsbkjWbPyDQn6hqaGJhSYSEdvHhNmgK9LxoEi73Bf",
  "key8": "4epUucKRiGmFMBTD3StiaPtPBuTnzSVPv5JZuUhtB9n5TAxSFVhUY2i8h87BmRZbS2GY74QHbhenNQ1wA4KXuUg1",
  "key9": "p3ssGLZygnodpPN4uzYrdjvAQiDC48BKxYR2GQVmXokQhT5HtYsPAusCpSXeXyfVCP3Q712kC1M1XK4H9TgYLfV",
  "key10": "2xPRCgq58sfXLnXmMD5bnUpDqpFEu9pqYVBu5tmPve9tA2umfKqMJgGCUrwFrzK5RgnxfNfCtGKsMTe2jVFRF7W7",
  "key11": "63LJjY2EKNtVVuS8nD5v4WAYNPFHU3XFNXt88ayxmRhdjqKggiJhuJSppsQcZwYSc7NoxoU3JeyQPBebbw36HPJq",
  "key12": "2qjGVaTPmL1M5eCzunHMVggK9AYLme2bWbvFUb1VM7RDGZ6vwSxQciYtzoJrWcu5ws2ipFPtYDHLNtVx9q7Z3byy",
  "key13": "528qZXfoWytpFBC47VS66jtAU8husgr8argcpvz8gjYrrP8tpQhyHdWQAL1FqTVXqZb8edYpv349W1U3Rp5z22sN",
  "key14": "hoEpamdd4rgKNDqTWgaq42H1HGahwPAxh7Va265DphWRvg6dfnQjy8D4CuucPWbrWhpB81S6P2ZM6TouWawphgp",
  "key15": "2kKXS8rMUw1EtyDgGeuvdgnqxgyk2R3i1KfM7SGvNUZNmzwPpv5cksLzZrbMysTJ1G7Ex4Uu5aDDGZEG8ou7fSSJ",
  "key16": "4Mn5Gq9f4s2EDqUMni6ghoLLkRzhG88jqdAYFhL7ZCes8U465WhYTHN4S4cy89yreaEdvBDf4nSrf6izcMmDGEZm",
  "key17": "3iS37SeJAi3XyD8MKWPmNUijHoAXCGpafs2Qbk28HSeQcf6hT86v1PUh2txJEW7xmNqeJg5KvKfdze9HcwZ4ozij",
  "key18": "3vNzoK5AiAS3vjZTJvDFx6nPKY5PxBqncAUcvHN2uSU6L3sawdtzBFDDZj1za3YA6FZsQS4eb3Adoj1ft8cm2Psy",
  "key19": "5PHatDLfmXFTWpSLfid6pGdJa9bksT8AUpBwjtHoVGK5BP8MUcwZ6NC8evHgw6eLUDTUiG3a4VobxdsrtgJY2VEt",
  "key20": "2zyLf5TgNEpLrGhp9WgGyuy5cG8jkpqbXTtSp5uroFhrqTjZBX5EX3JEuLfFNiyrh7UahHg7r1kKpaNH2YPbpivt",
  "key21": "61mVXKNAxyPXpdKoEFXWR19WMbxD4LwiY2M4etAa3KoBgKA7g6roaBfkKAmEMkjnSrS1hiJ2stMrkE5wLJ22gj2L",
  "key22": "28UXVisigGWCVLieK6Xk4rH7RCr3GTfTwSTbdGka8gBnEVA4n3B63mCZzkdXKd1U9msmC8mV8jg8mR86mVAgkkKp",
  "key23": "5tr3gwK1P5g9yuAftqbtaTo7XbumTEZdxA83MmJSeRb6RPG485xkEeMYCfjvu7dQ6UrBSfavbtHToDNN8u8DE4WC",
  "key24": "4wC8ZvjhCqANgqLgVyFooeVHSKZ4NRF8wzFLa7mhqs2X5oYdxcfz9DZqWVm63U7gumv8hxzEpVnC1vv3kFyqcfVK",
  "key25": "YfReDegCBTXWvTtHATG8WuAfEBdCqKKZhbAwdtAxmZQb9rLriQyQ3nGC5rEYFrbwzcxKkScqNa7U8U97DavKXE9",
  "key26": "5Kc7Fa7xE9xCtpnNdvVptEHExVqF1Hwf2gwYDYAKpP9LBPapauqcY7cnvAQvB733cGbGvCfM88AGdMAGhfzgTaLX",
  "key27": "5uqKiBtSugn3n8Y3WAA1D3d8C8mpHniyee3eDDkpkhn3V9LxFBRHpsFu8LwWGg3LMRkd3tweWorX4zqEqQgq1ydC",
  "key28": "3Tvr4mTh2vurR5xpLyQ2S4oyrhDwxCx1QABuz9wDY6Gz5vyYRRoVQ38bFX6RWGtCjqNdS1Mmh5KLZZrqicFGfA1b",
  "key29": "3Wx8U4XG5oatCBYGFc8V7T6pxeotVZKFTBJDQVwdbCbWuTsvCsf3VhNVvNQjRjAoMyf7JXbFFwr4ofJU2q2PisZD",
  "key30": "3rynhqHAsbS3R82watRo5tQYuWKszbm5DCyoRhvKGKzxZ792JUn95DWyfvQjJMT2nEm3NasBUn16PGLa4bCSoDpi",
  "key31": "BuD3pwyykjH2a3ke9rqJ5kEkuRCPMKvMDmY62w7vjjosPzBcGortuKK3gRKwNpdjpVaiPJyj1rwXh1JNzizCcjk",
  "key32": "444KukVm7js6vnF8PES8jwXgevt3dH4y1zCfmbtJ87qaWgYUMLMAc6WwtZx3AYjD6VAJgDy7eAwz3QRs5nqmvo2k",
  "key33": "5AQVQ8sw4JfcgCDSyRR9MAXnhpiEazsFvD73SvyMiRr4fJ4st4BmRPGKL7Kx2jG4sxm94yWdbE3CFGkyoEh22bHv",
  "key34": "3JQ42ECaG7Cd3hfzYZzMUrzqxvyjH7zqLBJHQL3QRpJWN58wWc5mcprvE4xyNYKHq6nzTLZ9B4GWT6TZ9T2j5Kvb",
  "key35": "5MMLVJAyyaNY5HiGH1am2zPnDWmBz9eri6LuWWCr9meCWTomZuqYueRdsv42Zo5LXSoXu5sziBGGpRAh5E4xE1yL",
  "key36": "Hmi1DMMZb2k2S2W5Jy3MkL9fm5yCv8dfo9MWyAvUJfbnZmySNeN1YTHcrVigm6iQh5KMrQkJK5Sm9kErt921ZGS",
  "key37": "3fnu7n9g7RmdFy5Gi3i54ZdvK3XA5WoTtRBKhFsJXSVzPb4xfjLMfqkrXgMDUqGrHjX8aCKPPDHSm8Mavf2Y9W1b",
  "key38": "3CVe4nn6s32fD5BqF9H5Mqv7A78mXwSoST8r8dWLFHTd3VCMUrKJFVm9wdjErjyb76jLXURQrSBWnFjGr4RK7xoV",
  "key39": "4K3kuRqdisTEgj5FBNKbZbwc6PBUmbwCTEfhTzSnZULAFDarqnHs3v62aV8Nkq23hq9w6PSAFu933vXEhRUPiuGc",
  "key40": "36PdfQvbneruS3KwsJnQruotyb9GahUxePGSPa3VbenEfvxZ4hbjg3Hqz9NCnmHcqwcEbLfRm39tTJCryrkWxBBd",
  "key41": "3RHZ42pYaBqXjjKw5BGxVUP9VXfode1yBAkC9BMmWsySWbhxUr9LycGGC4La16F8vg5cgusi4e2hfayWQPa4Poxz"
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
