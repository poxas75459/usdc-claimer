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
    "ru5s1uDUCHhffgNBQPCA1kXmfCMTwxwYLzyeq4wAoeSDVcyMKt4967GYTDWY7mKnUF1XDoG7ruj8TR2fS7nc1oN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jGUxDEmN15afgqkq2o4oaFWSMGWqGeuoqBbJS8guZtT1mWs7vfAPqN9oaarquT6G9ZARiHB4HZjocTgKDtHyud3",
  "key1": "2Dm1SMhXwPDSRZUfi486EwcB2A3QWbaMtNz4hJbAkKmvdgSWhoRaPWf97WJZqSuSkAYkqJNqtNqcu8Qq7Z5EQJnf",
  "key2": "XeZE1HQTYwEdLyBD2CnobwHz4TYDx15qQjjYN34yfniJwY7kDsWYUsXz9k8qinutDohc2pDPaUfRkzPbu8qpCMX",
  "key3": "3jdszGsX3PdU3tteYZJ6PzkCNQcNKVxbaY8aC6y78uPaZX4opNxkZy5cL2kAZ8j3ZhG5dn2eTjwTz3tcHztdaAso",
  "key4": "3Fk67QgZrEkc8H4aJGmFEV9tUyKomBhcLoiGJRLYhsqXNvNKBJJZxpiy3anxGDgYKrBfjwrCcY8nKFsPKPUS98Lz",
  "key5": "2KMJ9LyaCqdMYBRkahWLrsa5RNR3bwAW7Kh8UgYWB4fAByfbeeJEzyvL3eTbq7bYpweCqeCAs7bE7vZNpeJ5thTj",
  "key6": "3ZE96ikwfn6vY6vpoRP6B1bGdcdRpWzMPqMzBuovnRi6vwsjV8mb5zTPTBjQACeKsaU4w56pJrtXxXTgQquSKxJs",
  "key7": "4SYwp6KNixNCwABhuXqNtpz86zS5e373aLTnFh3cek3NhrvGq5vXKQAyZUvwY34gsTA1822CH8LkTLuc4LLUx3Tz",
  "key8": "4BWvwYaSVmpVbBjNdadQVgpuEENL5Lkx4nVFUdeahD9E7q5KmAeRgaMwYp7byWB6sc7bctUfxtAqRbaWkK9PZFih",
  "key9": "z2aLrVSrxJDHt6WAfH4B9Z175jirunwtryZr4tZDTRnngZZdYfJcBRv3XoE453zkV3YQhjnVYEXwmtjGRAL7eyn",
  "key10": "ZLnaawnm5hSppHn6CVXzdUnfLpBKfQWdtu4yF8vqANGz5hvoLY7Ex9UH1xXVnyokidPdcBXN67AXE8uVVF2faF9",
  "key11": "JqmT3iyY5XaupVQESgCPb1rhpZ6PCtRZpVxN7s5mZouC3rba8pLFWfkrwvopeiBEyHHiY1i2txrmfP2BhhkLaWW",
  "key12": "37j3rVHGatpAmFdJww6E7YsCesjEHkbZUP98iQ42Dhw257C6Krbn71SFXwL6j3hhRa6MVS37bT2jUMhexYCA4a7i",
  "key13": "5xdKA5pEUD97mvQFMAXETxAEsEL5bqffhZUgMmAnMQZSfV6aqf5y7ZEd8q8LDzn6GavDcaELrhGdqmetn84iYtWq",
  "key14": "5cFxKVL7YSfaRDNqYvCd4WK8gXAAUPHruvmoRnv1mkUcikztr67As57mB9NQRPuuWLnToP78UyHbKdqqSakAzrvE",
  "key15": "JNxgfwhSD6SQ985eCaQoKsVvZDQxZg667vCA28yruqf2SxE9G6p8KfP7VUixTA767vYwyGVnsGTAzT7H5BChkTQ",
  "key16": "VRmJMbJo6XywFsYtQLJ5xCoCjRBiZhY2B7nFSCPVAAf9EgoRQv1sStpbmRbG1Yr9Q2pgctU2vJbjTDEbdL9MjnL",
  "key17": "21rim7WfMz3wGQGzy3mnzHYvhApdRpUE398GYdcwtwyLPy9FZar5pqQPJXtxAKQgyAq1Cny2rer4V96jJVNS1PQh",
  "key18": "MJRhTM49CBn1sq4wwHLYy5XUVjjsZWQfYigDu8WHhNavZG32i2NBHiC3jhkdubnyCDYzxpsNwTKk6ziy7pMVzAx",
  "key19": "5cCQgdSDt6vWGEfuM1hgJz1CLyzG64vKBib6MJpy7uJPZvUGKm23kz5cKQaiRibQuoj4vwYBYPnXmCvo8J3pdMkx",
  "key20": "5vJxW7K594FuQm6t3VSkwYbnz8jXRUc33Hxk4KmArXtvcXFr1hrA5sWqYd1WeHUZo4aJFjkQXL3K8j8bMWhddmD3",
  "key21": "59jJs2N3vEZzV5U3CNAPzpDmbjRP9ger9ezfGSpZtSTa7tRqERGTVcwVWcz8R8MpEeLdj2fsH6C3kmKtZVGo8Bac",
  "key22": "5S1KpopYf6fbQn4LqqUekZYMjqobTuDuZCkTHoRYJ8ntaXohQPN1n349JzJMh6BFYw3XPxouJGA7wDuj4m2dLkpk",
  "key23": "5tozmHSbZpQyYTs6w5VcntxN6uqctF8hwEyFK88qmoEkEynCASXTfU8xvMnhkYrFgCcWfA1rtSHhm9H1KDtcBWau",
  "key24": "4xbtyvsuE1idB1cY9tNGA5DaJV1p8ayRdCmppCrLy7j3Ps65AWtAW9ikYhBt3iGbeLL25SFs6yXmvBwvUJ4osBqc",
  "key25": "53tbrxPBQJbEdsE5a2xXgDd12FjskUEvbKszyXRSfbbHUXYHcPLMkxRJySaufxwVHwdmHYYFT3RPismsNWAV6FJg",
  "key26": "4FJvtBbA7YGmmhWdMY4gBBQ8a7M9davGeWj3zXQbdxCgnWbnU5oZh5cfnbjAMnRdkCYxEPFd4N7aTNFH8EetgQms",
  "key27": "5aYYQk1RZGipyUNTggh2cRmKegQ3PC6eA1G4hubwdgo8gyDocrA2JbjUN6X1QxZPb6d8kaFdwvCoYgKjhL3M1NuK",
  "key28": "57iRQzdg2WL5vqVedBY4oFsbDJWHSonsp3WTWmCTF6sW23cBXMZP2bB1ZNPLxmnLmZZQe53Fwcuv2v91o2KmZwj",
  "key29": "29gkm4MrA2uPH3Mg6wjmYmwtRqS1FhJrnz17t3tDC3cqzPWA9Q7RmRYGKCFfrkec9tLp25tDsXDjB7ShRnggaVaQ",
  "key30": "4THny9ghjeoKFj2XcE5XGLX2opfZFigxw7y7BMWSFFiDFFu9wZ3wgdhkJXYgxae5CX4hqZBFzkSjcvSqhcqkxjRq",
  "key31": "4GxyeCi85gwCwqKZnRmBHdnYCoVNqkEvNDyJLqBSpdpZdyZHMDCaKw7WrwirvJFXSrSm8EEtxW5rzkfj7KmXAwmB",
  "key32": "58CKiA6YLWDL1YZUmn6GAyyjT2Sv2Zide8rEGJsBz3SvvGN5Gds7fqQoiCcdCz6gLAvAFxmKTt4BDMPsZRJ55uDy",
  "key33": "4VawXUvRnXtAMzv5Ea9BgagEf7AnLfa6vDhmnitnBgC4t8JNMaNaFjsfFfQZqD7i44u1weFYV3ArTe3Tbpw9rnxG",
  "key34": "uiQ2mnS65TmkLPkCZKzLkvskyXww8yKHCoDVCqtYMaLLzKuxdmvq8etYkatWAauUwWUh6coPou5wceqMnKUnXo6",
  "key35": "ohWuhEDWg7651syoENeq66aazY3cVxuZaUmX1a8QrTpkAJRKt5rtkb4UuDWyRxZw9qc6MGGGB8KtNDF82tSsSgF",
  "key36": "5dtkxq3d6LKjGdycT3JF73CBQLaRn8G3PdwSuBimfH97YUWsNGLFGRtumvipuHuQdYxCbbMB2ey37fMUdy8ozAG5",
  "key37": "4wKBmcLgmzUtix8JHZ9N9zgZwATmN1gtXB5Yu72zDmhtHfttQ5mhCzWmWzxsKUFirGn1AGQusDq2ZXhRA3qoyy3P",
  "key38": "Ye5CMyN3tDnS7Cd1ezVZxkjio2Y19Lco2pQZWKA4cbZqfcwMot6mkarTbc9sWr9HLb1cfkgKDhkFemAms65yv2N",
  "key39": "2GcphrqQvMD2LjNDn7Ao6DmyP95nckKL5xokXYdL1ZDCGgfzpDL8FL3oMEWEZGdnAjk6ZAnmKuH9eQ6oLYz9RMo8",
  "key40": "xZC9khhabqUhjgU4pGY1H8ESNVFN7JTxAJf1FzgTiEVZLMx8RkG3faM8hmq95vexdf7kY1tR7EuG3fo2UMoWYgH",
  "key41": "4q4ADAbFgR1CpBFUK9zatkt4pN3XG6SWj1K2jibXKyuL17WgH77PoJKKn8bYt6PcLEuqk2k6Z3NFAPFDRH38EC9F",
  "key42": "jHJMqXhrpReVFj1Pe4gNELV6dvpFyPTYy5gVmD12bdGiKC3HQLQRWHYUaV2BVnaBH9rwC8bQQPrUYYFvmPiNRxz",
  "key43": "4CqGuXetPYTbib6VLzhpAPVmSjqm6VGhGQAKtbST9Y93RAN32uowSkdg3TjDzSf4mpjUDMSsd6E9oSpBAmWpGoyM",
  "key44": "x4Vkc5MgaR8f4nG4ddRTDGu2k6pduDnqLHUGG5NoEsskhaTxBLzY24HAqP5G8JxtZjKM46rp2Wti5cDxRPvJjSd",
  "key45": "kR36y4vQmVyMrv5VbqHH29Ewstu2tV73dTEuNfEH8prs8tqCtP2b3whwNUWGTRvjD5sDHT9XNe11aJQmjSxjq9r",
  "key46": "2Yn4DggXA1Q2B7WhmWpYu89HagAhtfp39SuU2sk1vioJMuE4wyWmF4EShGioC7FzGfCzfmfTf5WDGcRV9qx3Bfpj",
  "key47": "wX16QjqR7bSkNo8jK7z36ydNuWzaHW3VD2i8BC3dDXowrj1r71XSsranhBk3jmrWzgEvrqquRGYR1mLprN8iTz8",
  "key48": "4tk9PwKwnYw6sqfX7QzbfYJUZJ3Gr6dKnwCD649e4R7iaakkj63AL7w8ixNHSEbF3STL5428kooD9bPgaobrZoNq"
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
