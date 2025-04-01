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
    "3JD8cyidmMwmgPxQ7fXq6g3G6YtxkynbN3PJXzHNhCGMsoKahqK5RdeWzgF9SZzyS27feGWhHSgAxkG49YYTZgNe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XsLNKZstE2Lmm4TPrVm1zExmwbheTewx8sJHNVPvDKCxA7yjfb6gPX5gGzNiacrvA2cwk7m7p8CZBh3FtR9ZZqJ",
  "key1": "36Lu4FEnwxtPDv7FQLqqniQKZPshVigobMVFb5ctU78P4mDNLEk9HcH2nTm1E2bNVbGRrqCdehx49znPsVoUA5Y2",
  "key2": "3WsFgr3fo8pTSSaEvn1GpMw346m2FzBXVZwtaKjixnteC4bio8yhjBLnaWK3xnQors2rKjMLFdnbksyAoTzmEjos",
  "key3": "5SF4CkPFF29z85tarXftApPEK3FD7HwBJqHuLAyKcN2F7Qi8T9NdLzTDpPGcCMEJxsb4nwrjh2xa4eNJVxdXxDTG",
  "key4": "GEPEnqmePU6NvSjrCM5Z1Ku2oSDKtyt7Ph1i6Lj2u3MK3o9ZqPyz58EwGxdnTUF4HZNcYfRoKNWtTEtPmhc5Fwi",
  "key5": "5owA1R9MNSZn3Px84S6aLpt48Ei6hAHPSfnmWB3JzXcRNijbq5RqxAYGEEsNtMTcS4Q9UtkTZetsLCrLkDothj38",
  "key6": "4jqcaAgqt4pCaTtWAFY62hwybE7WJ81ktNeCS4ZW1NyaC3z1PVguVxXx5Y8GFUBDV79xi9LBq3gptJugBwmRGAoV",
  "key7": "3AJNoNKyP7x2YokfdVXMbb8kPqZF72W3E8NgHmeQ7vTD8ogtZoAbhKroCdDArVsPusVSFAKK7bQC6PFGSmHMLTWr",
  "key8": "62SWMWhvSznrzfEErKrzYAyv2wDNUk6dUQr47gc6p66wSn5bU3nZ6MkqYdMF7aBwUP9QHcGam3rTu94sFRAj6RSf",
  "key9": "56TN5BbXaoW16xbWAXXwx5bo5QGPrELRoMAqt4bDjAeL52a18fhe8PEy69CF1XFTJu2DxofpMKPaGMrLtjBsd8Fd",
  "key10": "E8JAggY61N8rw9PSmpbGmosYYk4NDdZLTaDVXQWqWbSWE827DUvx4gyeAEcf3hC4qikd7eau8F5mof6BHhx36g8",
  "key11": "4AjMJ8yt5YSQXbV28ojDGe1DTCbFhswgGc32CPQZJQETZ5rLfzKypc8FG3X4Nhys4hq9bqvYYodo2q32Ykz8pwS4",
  "key12": "jKe53SfxjnXD7gZzx5NKnXipDYRN2oCyy38n19qjaXhmaDaEPvYWjz8QXvDKx6dT5DLf7fxrA1jApUjqMbgCfCK",
  "key13": "2FERopWde97LwjhuoDagkFH47qzJX22n1XfspdWdYLyWdgD8F5PQj3H73vioyD8bsNhSmuXUYrGQky5LyHtY4hiy",
  "key14": "5jRtkVNxAaN7JUFrD1TngUxiGHEt7cZsdXgCEiKksV35mrqcB1TWRnxkcRbqz6FU84fMz8bFsnZV11xsTU5JzQVS",
  "key15": "2GbH82qMdc9Pqnh4S3NaQ1dT5ey56NtQwcuQh8npYkQQSzZippf8CPs6rbeHL28Tr264R1ZdzNAHZkXTVbY7Z2tD",
  "key16": "2NXeZquBMuGMHfLawF2UMbjAxBBdvCMAy5MJwkd2ckX1FGaXpj7sJQ9HhYSiufP5oK9jAUMvszX2HGQU899qSnBX",
  "key17": "3R5mHzMdPjX1GTkRxiQPLmxPAqAU2haFvbahcakbRxER6Q7Hz2S5E8YjEUwP3oW1UGsuzZX9dAUWgGS8FyCJzZih",
  "key18": "3DLDCDSeeYe5Jmg6NUiDBrrGjEW1DSX9vnVq3bz1fc3Vfa9VZPdFet2tELaeHStfbbwqjTCH1yoigZygJxm7HbB",
  "key19": "pbcujKDAaRvDG2jMVMo6Hty6ywn2HSoh5qBsK9mB7mSxLEHWvXQCwKoyCa1D8Fev1mfMHS7hKBagxC38xpL7jTa",
  "key20": "3WZ3ZJ2tNCYkyWMyhepHoSPRGQBpbQHScRnzdL78F3Kw5tAgxHrV7ugJxEAZpjTkZ64M9HowiUsVVHwJaZErE3AL",
  "key21": "4KumyHEdPvnJNA7QiMVc7rHwT79s4FuBCoyaqAuPEFfUX5zRju7mm5mG7Lbed79wsSZxWWrkELWnzX18qKJRSXyx",
  "key22": "37Fg2cgAXddVLLnDQpfAUt8dPzuSZCtFsPRsRPvg1jSDb8FksWrHhXsFqCNbkC7JBLiV25ZfWjQ9nT31Cev5WFHB",
  "key23": "2329jApEaaEfb6vWiC8MnLDTQjbYnyNpV5SH9hgCR3BLHCR2FLAKaCYBM2ZmT7VB5oYv8U1CQQXsXcWWgcr87xc7",
  "key24": "8YxzkUurSPcnkRrBK5QcLwfiJvyQePojjiTCW4CskuAy6EGwxZE3CgZtLoGMnvrK7e3VKxyGKEtwFvgAFaztLs7",
  "key25": "4FE9Bg2QUdSkzRbMqWVNqKA2QUdueboPvrHuF5xxmvsRYmB7vGv8ST7M9YSfrhafys8yaRTBhUoJVNSrdrKk6bRb",
  "key26": "3UJVS8J2jBNe6B46K8xY9pUh3yNTwSiBnKgFUz8MVhKzJEPyPzYcM31Dd62ChxWaNV36A6QcQqMjC9fExA3Awqma",
  "key27": "BJXxwbHTjT193bj71RE4vWs5o2whGdGRRjLXNNe362TbveJG8WGxKgn6U4TeeyZ8Ef3jCbkB2mVH3XJX2H2qYJc",
  "key28": "6btj68b2QQW7UME2z9oCXPVS7K4JJvPBFDCV7fgH6ubEZY6KLgHUFihQxm6F9guE6ivcCCDbQ54EuV9EdqxpxSB",
  "key29": "313AAGLRXwchYA6xwU64Udef4SNRArap8hvkcPBoLR4ZBAy8P9RoySXce4ZbStyQbK8K6eQ87CeJN15jmAsG45es",
  "key30": "47ifcQgincreoAgAFUJBDCyQHUnpCYLhd1AmtPFTYC8mKFni9HqjEFJ8GZ7Cux84JFYrTx3oZktt9dFC2NeNvjn3",
  "key31": "4E7EJucZQ2AfLkwbWg4xfy4BAdsXuCqiuPLAairtBQ5NhEasWcGqxuABDuUGRa5ak54F3raULw1KwSbY2vL5arpG",
  "key32": "4Z8kvoMuRLc7ryE2tQZ2cc5rCmcUTxdSokSojodradCgEGh5LDf5oNV5GPVjMWFjdj7zmS89537fM7yQehqb7Dg",
  "key33": "5SyVnJmMF7fjsLgL9UHupc2igJAZTP8xjhjCb3VCFxqHkk5FN7PGdyfLXGmyQ7f83nXCF92PERCzEPUmhBmC4i7i",
  "key34": "5DEn49dK27WhBfiM2rRQs1MKukZXBBVKFVeACncocPswTwmgt44Cyc9RUQVH5f9fH8HokZfcAmEpTuzk9N1jH4Js",
  "key35": "4XcBA5mwzzi4GNvpJQpTepWV1hfibLPfJCc1zywjQptCXz18pmDEhMMhhEXgygf9QoL7ueNiHTxpsCqhsFjy2pWT",
  "key36": "G3hKrNkwwHf6WR7hBon4RpP6mn1nmX6cHbsYFgAqScVeEuUyW6TKba6LahoV1WqwW7AwBp3oDsjWwmfz5ZzLXvN",
  "key37": "3kz2Dn4P7teU2b6nuJREU38n4E7mULow3CPaxUSGXKpzuNHvo3s6ajTAFiKYA3mNeMcL5FG23pGFL1Fqsj1DJdcS",
  "key38": "m4eXJE7yZmoE9QQSbHvBck8w2c54y281vhFePfEFnRtsY1sukFVR69si79aUYcqfL4Fn3TK8LgmuQF9ZWFaWf4b",
  "key39": "31UWiD8MdYFWb1QJRPHZvmV8C79TLuxRALFE52fWZa4ncGcPfQRHvnUgbeyktc4jgskiUJBnb9qbxe1d5nVfkfDL",
  "key40": "3wq1hyGjCUhnNsPznM15J8z7xwY1YXwie1RYPricvriSD7C2Sc91X6SspBMsJpahwgU78mLk9NNCTwCHjC4gZJ3y",
  "key41": "3LiSKhQoaWjYxLwtDxyC2Q7ifUURFLqzAFPgDL3QRaYSiFCf66mXw1jxaqCMSpt46E1SM9GXxoYVLDCYYSxo6ZM",
  "key42": "3VnG7pNVhS41oe9poEdF2aPp5uZWYa8itJFgE6uJqDHLRLdhWJJMaCPVCrrhqMsSSWxTua13hXEdMZKYhTPHVF6z",
  "key43": "5UWrpDZmpjbuDLA9qdJQdcbZtBkQg6q7nFZvtmU1BT2984wCRiC8jsLSTgzHmfDZhoZEU2EDGpdk3vqwcdJbtKNc",
  "key44": "3vtDL7ziFh9gnyBZVgKiHsBtTHZnwRvxR3coZSyrwNuFKHryyjGS5q6G9SVUzYgqQYYWZW4DqQKHN2F4Gk2rMUtb",
  "key45": "2KLApryEvH2QN1Z278zBVPVBw3xHCfJR7DwPbHiLDReiwD8SnHyCLnJhCC7DdroBMrufnJYPH2Zxx3CuUSnZpEe9",
  "key46": "3UtPsE9bM3mLBP9K7Wg58u22JqPyp19tBL7Dnhgv8D9p1NiEanYzod7efcPoWAjezAaZg6wGeUy57XQ68HSUDTxv",
  "key47": "5p7SMoAKcaYtppBLTEGWYyMAmc4PQAvVzfSHKEfoHDQVufQAB85r41xFytyM6YhJgNHMDEJqQA1Cd4bFRFyW5vPw",
  "key48": "3GyTHvEdoBBw4qvHwApEzvV3B6PgSXALTnc39LYVxZsUig3Ntp7D9ZUgfGQ6j7hq3FnBcv9u84u11FDoMsYJoyiz",
  "key49": "5fLbJU1Fhns4w6eHm3gLuxCU59UjKxYiMSksLFfhqckNya1zd6PkkhaerbyvJ5MbapCDgn1qv5GjJWi7GLknsa5H"
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
