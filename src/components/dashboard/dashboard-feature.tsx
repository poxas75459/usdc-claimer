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
    "2XUxTYyzyLubagctDMxLbCenopNmykcDCft44WPoEd8tZsVLAawHqTm5ufBSbb6LzGyy15ndVRJ2dsC6BU9FdHuG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RXaAWYccRP8NdjHV2ozUMXpj6gR4TvnVQtVYtDdvx72JV7ptW5tRbhfGFbK6RtTqjdVKZPeLEr1LcwDSTWyeyxK",
  "key1": "5KjXreLG5H4jtyNu2AnkbrcTxph1K4s9TeUg2YsS9MsfKEujPLRYY6H8m1NYgPmdHe5LCcHoHX9WEsjTi6a23UZG",
  "key2": "29ZBqF8EhMzVZcJhzLiFYLohvVvFTV1VqkFeSQ16QdjD3yGVBcc2JQuBy9jvgRqR7NV4H4dNigQwBTSU9HZiWJYA",
  "key3": "2sK7fbhsWTC5N4zgwNrLC2NHPL2vNaTakEWLiVzdg8RQXqte5iUaS7xsRJw8tUvLftrjScegD9PAoSYQnvWPmh5s",
  "key4": "25yb9yiwgjCDhypMWtzQKiUAqWqJnpgZofTVCbS4fo5NGvQxxmscSLp9JQaZBUqNEv1HrjjDQTLHrnep8SW62ixQ",
  "key5": "3S7Uf9B1ApCPgUH5R6EDZK1e6UkhizuSgX9CrFK51DWUzTJ3eWqu7oFbDsgMiFPXqhmveQ1iXwqRACHMN7YEwMhU",
  "key6": "2A3gF6jbVz88WeVSiK24vbY8ZijyMKgDnEgeCC6dMdXDM6rqtvJ4NK8jUF5uAfT4XB42XXs2VzAxohBA1LGDkhFB",
  "key7": "5aaeNc8KRNSTV98LwTwoYzog7zeGbxvqoM4U7FSnL7bcaQfN3kQLvtjxpk7xSfemoe49NDeUTVw9fm8YfEwDj4dY",
  "key8": "3SRbk3F9phbYeHKGS6cHYyJnPS1fCeiexsC5tusnFhTydv32PHPmyojWwDuiGWNYKTecAXMby43EkCzr7FDKTGF3",
  "key9": "3ZdSj3jPvS72d716DpsD59Hem764mucAoTad24iSXHJMFTAyjrsM1rpTy1bsZb5DPphAnuUDXWonevWXAGjhFQ1n",
  "key10": "2UHEa4muSvbJjq5HTdKn4ZYXjWdocCHGcqhDd1t3MbfzmsrfAFrhJGUTz9BpCgsqBpE9J3rxPuwyb9gB5n943Kqe",
  "key11": "3hdWH7WLg7gCZwM9wHhZSCmCupfMvZrH2KHXtcTUMYGQJoAXZW2zxs664d9B9VcWVpUNVsbjJPLoU4XL7myo7pKN",
  "key12": "2zrNpks8sEVahedQUrCGgVhio51ktUFRaoymZzNYYRhL69hWceJG97k8JjeXuWPoFEQcFb345x2yQC6CSeRot4RT",
  "key13": "2YFoTgdich5ioPbRN6nqukAf25YpTyQN8sN9GeUAmkP7pN3bc3Xmcr133jiL1vaN2F279xNskRj73pjJCaJMzCgk",
  "key14": "3QHyCLzCQabgQme9uaYRfYwJHLE2ruH1nQEAdkQXNT84LoRepbhFYTZxXUok5GA3Tn3ZU4ZHFCFFPZfAQnRebH4n",
  "key15": "4Eu35vrPXeFHZ1QzvLtdcQYpFRoDPXCc4xEngsny2kob7Y7VFDEDToy2bgd1ZXKNBgHKYzonitkvCx2izYHi1yhg",
  "key16": "3snEwR5aiZU6dmELLFqwCK4NXUeCLVfbwb7Pykf3F1BUU9jx9d4eDs6KZhJ45eU6Gz3R1iVWvvSj1GXDmYY2xo4J",
  "key17": "2qAyURupV5Hshb6Dp4DUGtAWN5VAhCGW4QY1FuozfXkoyW8xqrtXeKTDLjfTbvX8K4naUJz3PCVub6tRT8zfhao3",
  "key18": "LTGHysxztwtE8n7KMC6PsPhZ4wMfGpAyTMzjQnzRXKdfcGEPvkgNwSKLxYoTQMh2cxoXJChNvSB96UG7CWEBg3r",
  "key19": "2JffrWrX8q3dReaX9nFVtU6B7AR5M1MK2yohUTB7yudxP7VH7m1fVfCKShnZd3o4d3frVYDiXobzr4LJhHVFCULM",
  "key20": "5yzBVzodDVB1GaLAW7gRETKAcKEez8PupNcbYKcQrJ6Yts7ySJGYkVPWfk1oDUuAFxpLkANwFzrSyJ3oAhKvgFsA",
  "key21": "4hGPJuarCkbXRf626Np4MYLZWhjAhf9wEJXGT7bbWQDcYifFqqXJajShNroVy82vkFmVASN1s1ZobizcAc1VBLAh",
  "key22": "3L3eYnEkNbUgpprSmospFesNoRQY8dhxdxvRTpLNkzXT1Ttzmj13MbpCav2V4krHsfrzD175PnyQaQ8yUSn2V1wW",
  "key23": "3bbG7QkzZSvvyD7u645Jf6YRFJaEabV9766Ge35yvZ4awCaW99t68byjsy9uaDnGZmtHUn1oqrWjKPRT6KUx1KvC",
  "key24": "KbfPZ16MEPkziHebgqwPfLpYZJswuRfhPi8Fr56DDcYzT4Tf9rrMD8WQyGLLxTu74mMpCHbsg4wnVBV8FDWHLJy",
  "key25": "3hSeidFf56iF8q6oEgoTQkFecTWNZEc34SryfqziYGu8p1CrCwfTNDUXPNGN1iLEicayhybnLSMwKBQj5ZQskszo",
  "key26": "Rx2dL9RUjiFvgsrB3sP8bXoANifyiwmErEVm4mGTBK55rSNFdjTvDAHczNEibCcianauc6Nz5BK9siBdEMMxaNz",
  "key27": "5vkGA4W3RzzusHTYc3jses1dcmDxNbqSbs6NQ85EYp7heo7PRLRK4DtebWPF7k8xmMjytE4BPpqN88jTmaYyAyKG",
  "key28": "5SgFKjHBm7CijAMYsFCkTP4Hx7V2BpQBqJ1WuhK6t4Q831BWRnCbwatD7inqB3PGxZTrHBPWRxTmnW5W2wZUuCUY",
  "key29": "2jhHmCky6YhghuDePZwCzbfrxwMcYzzdvqRkHyTv4uGQCz67Fb9MRBU6UYiH3Y2N62zmioMspRc73hVLifW3khZY",
  "key30": "2n7DyqRrVFjhyUwFTdW1v6qFjUp7FW5hsTa1ik9zpsDHwCjqqyh6ShLxmu34jdaawwcWP6gW1vGbH6kmHcPVFaFk",
  "key31": "3j8vSDVTZUemMJrArb8TgJ9QpnBc8rxqFvubkCdQj4ufMMB1p6THZd8AbaQrq5w4yybMcGaU2JVCpdwaVMTqPKrF",
  "key32": "5FN3X8Thtat6S2inG18UoXVhSkjnfSNW9S2hUpzSfAz7KbfTwRwJ8HQZpuq36S6qMqYjjYogbriDg2NsPfYbpSd3",
  "key33": "3t2eA6zGBT7GuL8xZ7qS7A8E4VDQuUkQyZekRZqWBCpttpvxdcro6dhmBLM53eNgHeuxvzPVBm2EDNLGjMP4Jc75",
  "key34": "3Kz6ef5QwifvnFvtNJDwKwDYry864MvTfD7KLfKfmxYVw9mLeFvrxmuK3GLHCqy5gMPK2RkWum3yG3cw1kiWm7xt",
  "key35": "5p89P2YT1fTQCbrY4Em7ENtBKUS3L4rtq5grwtzwLukaMqfHseiAYVmLirz9eLq1BMYrXw97X8RdYiPzCRaT5L4w",
  "key36": "2koAtSFK9qmzcjrusiyQaxUrWYkLTJNHRpf7ogCunQnTpcoWNQMoWJXprHpuM1KWZCXVVYFHdvFiwZv4MQVKsPaj",
  "key37": "659X1Bcd6HXKdUhCpTkbTEofmiYtiWYJ5y6pcWCM9jKXriy6SeDARzBL6hcCxJTrdosvZ4Vx4FJAhbCEND2NExQV",
  "key38": "5agFzU5redHLXRBQVj96TRHG5i9VnQkRdPoQ8iaaN3YQAK8MBmQ81CWfm2ZhYrtPkRWigtYNPi1kWqus4VgUPJ1x",
  "key39": "24RbCY2U2NbkmJXzokXDRBrupYSot6WSZaakDDnhH4ysJh8HkNQZdvMYA3NNUfE3MCNRCFcwDw4ft3HkEQa1k2LL",
  "key40": "4FVwiyeTCvRvJwkJL2AxqB8k5utZ8H6RGVqm71ejX8WNL8TiMAoc1pPTJdipAsq1NWrUuyk73qCXifwNR4eTKKms",
  "key41": "2KjS7q2jYx6yXZoQuV9dwLJEkphJwmDaHbvSsiya6rSSaqN2hW5qSYBti65VdSt2Uy6skHPdkrH6gJa3besLjn3r",
  "key42": "4UZkFg8Hdjbjs4JU8j6UT1o9a3SiAzKaHAGEwCvWdnoSgigJu4MniGHwngUhWcyZvxPPSY58LiAkATAk59DLsyu5",
  "key43": "sGhWSNuN95tm4cxRTLnRzQDmWXstPwhFFnsR4y5NDHKDrapgGi2hohcyoJ3ge6XT6KfzsjcqJEfSmf3t6LLy1nX",
  "key44": "5yerRUBv71nJMPraXrD3yCf2NSg6SAfuxsp6MFdGc4c1nLCEe422LxeKU5G1sTuyp4zTWdLRq1EpMF2wZf2QSuH1"
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
