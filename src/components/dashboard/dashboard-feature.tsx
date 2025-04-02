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
    "4qBfNoSagTGxuJmDjBgvct7ondHFfwJn5iEwMYiWoqMnp8KxUbcjgRgW1CrjFUZMBM4FjS2rAk8r4uzFtKcFz7yk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s658pGa5NnfzGJAZ8SBRURH7SVc32D1yEZx3bsTA3hAe8KWj4hiNndX7tbxHQQtQKRJoWcsXpYeghN7tAcoBHFL",
  "key1": "4KC4zWzPP9NwJKDtCuYc1H8nFT7q2Cid555BXgHQZr9GE9Yf975XfsZBnk2xgt5VnurKrTXxdLyQpV6Ss4KpjH2w",
  "key2": "4H7vKVtYukHanfcCXif5pgUknSp5EVATsoenyX849bp3FSb6w9fxq2g4htMBBeahRQPPe6oCgMcmS7TBiin4w3QY",
  "key3": "3Lv81PvyDdFxZifxZe2NchLw12TUiqwk2QGpyZww1Ce9x8AyN67rAzTim7PekpS6iej2Fb5tjr3ZU9Wv8h32jdME",
  "key4": "5rRsY23SzCxLEuKiWKdS53ZiqESa2D4DtfWUvGKr6sk9a8a3FnKGE5EYVrEQWeWCuSZxeV8hGbQESmA2d7W42s9F",
  "key5": "4WPkZAuEWjmKpjwdMU5tJJyPLT2YcQWdpoZcqZf8VFaxCZZkqTnEGW4id5LKtXkn6WNbH3sQhVWmBBQdqrEf5Hts",
  "key6": "3usYfGPw1AsuWpT2AncqTQsn1fyNuW4HZv4CQAvgukgY6AkRtP1Wd1PG5VndmS2PzV98QkBD2PEjyi7mbfZbBXZA",
  "key7": "1HAJBe7XHf9aE25FvMFkrVgEZZN4JoXuNH5VJVhYtKYAuSHPDfx6YJJg3fnucqwt338S9YoGVmikRPgCRLFdtLo",
  "key8": "5Yr5tr3FZvVtTv2varjxn8q2t5vRKTbvkia9VyeBuPyypsuZHszRNanPfHJwZ43QQvNDEEoVUKsmrL7T6gLZhYQh",
  "key9": "29PDR4UpXkEbzE4GpUZYpyo6CPnEYeJwkuUgsYwfVJd1tpaSaQXtgDcRvDcwXwG61iRRBxiwf2cwRqhRrzMxUS8X",
  "key10": "4kCQQHvrrcAkqoWrzJKTbz789iqMVwpZWMutEYEoGGGk9JREcUGDnTkK4LqrtPHrdeEDSgVZNVra9TT3ZP6TviED",
  "key11": "2tSKyYsf4B8saLFqzyU5J9ZKpgzAq2PRZ3oiooTnMbYBqJE5rt6hJRDKMLLoQmSypNArT3KEfdCCuTorJ4ZX7aHY",
  "key12": "3rTQDyhkVPkcozmhGCffNAvFA9fBinHW2mugJNB3zEtdviSsrAmgpssd3dvo7xrqiGhZbdruP9aBuYkztsVfDCp4",
  "key13": "5RgQGSR35yfshnkwzV1CrotWTLeh9LkBqZVkKNyvWVR588fWjpcahVAFrv2K3EDD1fUrtomWMLHpJ7VKSkrRQvTE",
  "key14": "26ikvLYCw35jGCqDDb73S8r2Xj1HAhznmFQdnRJHA6BrnGRp8KvCB5HmMQWGhdYUE8F4U7J9CibqFGKA7eoXELFR",
  "key15": "63EKe4CANhXt1LWGLFECDCXJGAdFgHx1gU4puRAd9dNnpgEqzwzf8WUDG6fDC46UYCY5TPvQDi3t6pmK2QNa3iwd",
  "key16": "3orVgYSVgJTBHaeZEGrSp2R6KFdvxsSUgKqXWywjaFdGzvqoL9vwQLS22K2ddTeDngzCYHNkAB8HnwJDc8agdw9d",
  "key17": "5uAysF1dFP1UK1jZ4URDgpo1eSVYWwwfUayLzCp9zBDPDLHgHdf8xjzmZJMYUSihU4D7zinfbxsmZqkPhjP5dYqt",
  "key18": "2JLvbze8ekQH2bBVN2LrSScMEXNkCizpnL1K7srav3j5sgGoXvdMqwg1SxhUMr2eAN6HXZ3UdMe2zcTtF9tBjtMp",
  "key19": "4qDBBunvfb7nna9182TmvFHt7J6QAZ8dx6tEWRLX7fs367FjXD85wFimUJFF3aQsvHrsWw9M6G4wjyGHvmBS4cWk",
  "key20": "4JhRdtYwZjZuugZZe6xhbR255KDSDUhNwkZ4NtamB5S7BwzbcLAUF9x5Yh2gsd2dUXceBq1aS2N48BG5vDjJepD3",
  "key21": "57BYLEyuZP6TLyEpD8yAj1f1CRZ5MHx7LjcDZzyumXsPKwbZuHYTwhr45buebe7ideaht2fxWWHKbNjMkfVTQY3c",
  "key22": "5FiAfrmdyjsY3cRayPN56pAPHw7QQDz2sopWd6f1Yt6sZuqnsqNhX1NV8ZfDGfBMJM5ff1iVqyiUNPJTMPGXTSmm",
  "key23": "3mh52mweU7W6UpbvGHqDQewwivKz1pSxkAMvaNfWn3zt9Ww8oNfgSkic9iWpfDZYFiZy3jjVxFgtnUYjUNvU32yu",
  "key24": "2oXreXcFLLeiQGreYkM8UkdXrpUKpiHr7WAGnMS4gPobjWQTTDcaLzxe9F1Ent9QtCgYjbxsA6FhiazxroV5dqgc",
  "key25": "4WMchEoAUECx3JqBworrzYqv6dFbpL5Y1zz2jhVd6gDB48evsBf9M3qRe2BFPof8Bsx7izQFwjUPZ5VAZLdLibrL",
  "key26": "2bN9TRoCFjXFUqbJk8P2WiGobPfi5yZYWXFwTu3jDvs9WPfnaK9zpJN3RJyvech4PWhCQe8KKZnYwfdqU5bNtKTw",
  "key27": "2GNRfBFtApx4RMRfuK16zgvN8f6r3saxgBZwoCN9Qz9XDnUa92aNVfzG9REsZD2TmM7D3j2mvqmBPHPnsWAmD8LS",
  "key28": "5A1wYknMGzyypnWnb6Mq7zxT1Vb4e8Dw3AeWBWmdrszRMtmdbobm3HVt39bXc57mYSymiHNPHRBzzUFLf7ccf7DX",
  "key29": "3Ubj4XKifDFyW4LQZk76Ey8hjd5qys4V9xt6px5V4agL6Ge3G6i9M9exn5ALm458U4S9fLohpaGiRmREFBXWDWok",
  "key30": "4kgVmGWPGXaJ7nCwHFQ1ToJdoYaDPPebZZi64bCnkxYTQCzekGa9wjYqxoyJ8VexSVZwPh5k2EsM7LAHG8nUU9SS",
  "key31": "xX41aRW2A2HY1GrYj3pv6Gko3WuzG79uV5iXm53EZAjot1FmtGLSwPLWUTLrikghuU9QNbvNZ8z19bP4qMCV4np",
  "key32": "oUzbKLYsppzeycmVSdjsdTLja5o3GZxJvdrDLnKH5kY9sd4WhBnainW7Vp89RpqEPkrtWVSnM4UWcWfK931U23H",
  "key33": "2ir8MyTgoztkcTSvZYPjmKBq4MDgMW4dp6rFgmKHSkpSz9UToC7gATvCCSXkoftkVKs7KvMmLwfLswvsmsKGvSpj",
  "key34": "4UR3iGNXmJzmvtS3paHeVCr6w4djNmGCnFZG9xoqZpjHks4NnTWnzNoBPMN4E4AkvdcfWi5W8cck3ZWwvEZ8ewfE",
  "key35": "474gmT5CWtGTWeZ6XzfR5dWSCw51xuPPGSr7PdchchNVdmMjdDb52rDf5HzdmvJgoipsT1kAqJnksrZSiUjjsmY3",
  "key36": "2E7wUruMENRURXgASYmmke5jdtwmJugYwjU57oqPkdxCsL1TztLmGZTy2rp7PJESRYgKWM3bcR1LRywZpaFGaZAA",
  "key37": "5YntV2Sy1B7oziGPgaG7iWnTvCWkiXBEzMiFPygk5MCZGGcLRvyomuk4p6seZhAyXgh3uz49AsaZ7dyyu54Cnspi",
  "key38": "3inAy4gtZxyGwuVj5zAsy8GXDRLGbG5hPLwNaEhBCHEhajBwAXBYGto4RosdZMftUxQhoiHYGCtdrKmNpJpuJrac",
  "key39": "3Gg2k5zzpierQVkaJ5Mxx9TV1EUycqCRB5JrNairRKaJTijGGSaubySbp46y4nRritgekuEgaNxSVDYtQmg5H4c6",
  "key40": "5gcJrusdczNqZfsbcoWd11eoUsePR4adhBDpC7LXtJ6uEdc8Nw5PjeuQXMghH8sHdLmUJquvji5vxgj7P8PZYgki",
  "key41": "3MGHSw4pVRh5xMfTotjBv3txgydXHmZfzTSw9Epe7jrMRYf1wqaJ1ZfESkUm41uuJUrR96VBQAGF1q59eai9EZL4",
  "key42": "CVZWTYZZR1T89qtoDywSA78tGS32r8iR662ST6KU3DFJ1hfoTW2tj5DtMBX7oQhHovf12D9sdi54FsBzPdBpH8V",
  "key43": "3hYzivUU6nxDAh8yRqHZjeSGTpPcxhYVbGRdrUDJBaaijLA5cESfPjRVgyDMCqcf9xP113PxTBV2EQdmWyn9MEDF",
  "key44": "4XWkFtNNTGgi5KpSwoTKft6NT2Yrv9CvoAmwzYYZA5vuvdFbJWfRNTkRNwgn5hAfETnytNZ1UBRsBqqSBRcS17r1",
  "key45": "5DyFWCjLLGxmuWRSttNfSUudg8bxbTHU6zJqv2b2gFvtSUagwZXMGpJu9XWysQhWHVCXCTVPrweoG1XyxvG2CRZ4",
  "key46": "5Kcjx3Dy9cAWQiXiFpd6NrKqMhSaUwCx6ZXB8bkysfLUaQhdipc2E6fv3LA6XD8RxpqPAoGFdNME9rQ64dBwWPxW",
  "key47": "3DXhbZjQaPkYrMfNsuU2icAYWaAJJKetUrQBevvxrtu5FYqEXmkEE7b4Hj8MLDSExX7QVULVQqeGgKiRTeauKv3V"
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
