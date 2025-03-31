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
    "2Hkp8eA12hkebAWwvF9quy2bheT3ZgdoPXJ69j7X68p88UcJEBhwG7MzFwcffiDgd6ABqogSv4jLWpsSKyTsktzR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uP16pzmKjEpTm4ULN9kSqxDAVS6hakpmyHBcAVHRpsEhTztbkedjJq5yvw3NadZJ48LbUXGc2g9Vsp4i6EEvQy4",
  "key1": "5GnLmGyAyKkcyvBqCue2aXfvkq4qcyJjF9hxZ9dD7us6bkLiRYTEAyE3L1HC1TMYAvNgEWKENzPQkD1RuWiNDs5i",
  "key2": "3oTx8nyN83RfAWFJt3bUVR4qgG77benznX3Mdf4aEgcKNBz1G78wCQYt6YcPnCKxPHGJxNJxrefKHAkhmZH6tQLt",
  "key3": "5ry7JautPyEwXuGyXg4RbixPBYhKr9kgPAzEzRYFeKMEKh9hHLPTomxjQr6pJPKBBqBDDgmtX98Scv7GV3EoeaUY",
  "key4": "2wHwQ8XagQNcuxThdag3UjYgDybCNLebZfzopXfBGEjLFBiF8d5iNims5eyCmNio4uriJYoT53U1uQnjZXmpC4Aw",
  "key5": "xSeg8YTyYmWsmZJxn7jNy9sreLfAHD1GGekCUpwezKx59x5weNip7SHraBywiSaE7mY427GSFZHrJjSxSVvYD13",
  "key6": "3CeovSs8QA4LZQiwgeFo7AEAGXY9MdAJzFzjLuwPfZ4WKxGwWk3mnbj3o7A67rQNLaWhbLBV6eiPkyJDz5jrjPhm",
  "key7": "5KXopvqTz5EZGhJodbbrFDwGQxqFKsLXLWX6qYnocgNaDeZSoGdTsFEYK2hDp6AGy6NjNmGawf5oLmj4cBv4DpSo",
  "key8": "2UBcprYtVrLNStBx6S1LjJMGRBMBq9kq6Gujishr4WPemetQcAcJr4P2J5o8zwMyB5Qpf2CXD5auRLYKmXkccYCK",
  "key9": "NGhsXyUx4HSTrupKtGykWV4dhPdDapG6DcAUv6vRBi6H73T5RrAZ9yWL2KdcNsMn619s4zFi9tJD7EFhDT2N694",
  "key10": "3FqQknhLMRfsX6pA8cr9VM4xdizLyHxMcp2E31YeH8u2ZtiMhi64Wo4UhHciM43PAK4aVULqoGueRopfWt6sDTVL",
  "key11": "3rpiqNGoFkbbz3xJTN957x1bVCJjrxgFRkhiDfYMP9QRCHxmch4id5A19Qoo6AKpUArboVo6y9KbPytvRTQTbmNc",
  "key12": "4A5An2V8283ZwSXpFbTUTthizExvCnAmAsAymy7oyBd4CB5VZvMYR8sk8pwuvTTpM9MFGQeEeSKx168wqXAeneLD",
  "key13": "PWCSp9gSbuNNPpjwW9ZEwT8dLFk5XNBu3WQkaGTtVgDvaLpJN1rAWZLb7CNwAbUK84S9DEbCodXdoY9CNUk7dBH",
  "key14": "2gTyZSzhfgdNogRoF5Zoi2XCqbzhfck2s7P4qNwGr9zkwNeBjBzhChaYsfk66SdxDTjXEjXECAZxdEqva7BjENSd",
  "key15": "on39MQKmDauqc8nVvHWpR2YUecHtqxjFsPcZdinq1ueUcBfJfybDdmxzaqBgWP821ywH1fQ66bMEjzMpv1vy34g",
  "key16": "2BnwsbHAv1Eu6JDpLq9GaMAhWwu6vWxFA1gnhKURXCDBh3HWq32H8c5ApHpk2rAk45atunAUZ9wJNtPio7QsHbeQ",
  "key17": "5PTLu2LZiAiH3jncVGXBbFYaztEsWJBG79X9CVZLUjqzWpRaHndu2KoRkH9tLxhJ5ct5tsTZePN2zC5hW1G4as4B",
  "key18": "xAgmF446WciXcjgn2noA19xD9Uydhe43xJ8MYXW4MX96D8Nuf5wJtuqbRUHWHsAQ3Aj8E78HuRkfyicq15rNR8r",
  "key19": "RsLprthPGec65bnEVL1iJq4SQLJbELmb5TT67D1nocfiQJmwyj8U6kjXCTrbucskUdhL8vy94c8iVjTjp9iDTqo",
  "key20": "3EcFgjLFsEimhxREpUJYY2nvgLg3JvjyxpSgDBriUj47QaUp4oF1WWps8Xd88ZuLQFw8Ejc8GG6drBH3wFG2dAyA",
  "key21": "4XQmvhJTmtSJeQY5skFb3UELv6uT4UqRBU83pEV8FMMAHFNHTixdQBdjjY5a6xvWom2TMJhqTDUtd9SvBynRdnng",
  "key22": "57aTGAN29mgBnobCYVe557WYJYHRhC9GBLrwaRhHTLfiEVQ4pCMhdYxfYaG5eeMMGepvPjsStYLLLDDLHB217Yy8",
  "key23": "5HsExRUzgLf4Bm11cYfgP5VWZLZxRU9WKhcYsj2ZH7Gz9PBSwU73vaqMthW2oTqF3bZeHzNnK9QiTpPznhMALkuN",
  "key24": "2MucKEdvUEBMYExJ2gfmPMGCRH9D3Y9KcYDyoPBbrRa3SMT6cfJgAtoDDWgr3uS66PGMuHE4JrMzyq1yi16gyDhu",
  "key25": "4drsF92LNqmYAT7jYjZEoroXbGYmcBZCHnMtToCE9icnKFpqV2PR5Sumbxdc7cv5jLg9HDpw5za3xBnY1nN1wtL5",
  "key26": "517tYQ4jBNu6gCYq9fjCuP25MsLsQe4RJ1FDe3GtoBsd6ThMiP5vb7R1mAQYbgaiuxTqWTGD5KRFYkLvRiFGP9Kn",
  "key27": "2kvbYUpLP5n8Qugvm23MX21knUCimYQH7L8D8zux7P6kxG1rb8vqxsEWp1N1WuLFtKK3gVhuPE2F6rvQMMdQ5oEy",
  "key28": "22kmQrBEd5sZbSDzoLLZBJgGTDhydzKATodbJHAQHKfMDHXoZ3NmgBQcYtcky5d9kTt6u1FHtnk7PAMcYB5Jtbou",
  "key29": "5KSHVzf1ETwbFUpotr1pgZAS58WHrrbFxXGsxwuK9eyrhb81aMQEodiQink5BMVVwnjdc9KXzHCK7tjNLBx3u4jF",
  "key30": "22ib24Kke6x6bbcfsYVui73ubHkxj3Z5URqyFYfnxubfbDxEsbYiaVzuXFEswQMPDECZo2bhmZTqKTvc5VqXoTK6",
  "key31": "35sFtJgs6GpSpfUrcTBdRYLHZPQu4mddwriAWSEX3cWqc8GyE6iFLoHAGLSW71wAvvBoioMt5BH2v7s2Q1P1vrq7",
  "key32": "pyNGyN9Ts3Xa5Xp1zeYgCUpfj8ZU1Yb4s2hY27DPicr3A4hafRBYJVkJMfz2dQjDKLDqTUzmgT3g6jaGMir3NgT",
  "key33": "22ojhV6tcDvyoBfhWB7BLnM4Lp1L4kXBWobD3Zojb5kbyPannppV6dLCw1Pk1a8F9T5YhVSsUmoswL9tbz84TuNJ",
  "key34": "317maFCECWcfyibu3KS2BAXQctfAG5qsAFn7yW9sdmyd1DXtsFK9CF6733JQiThZb67WEcwDAZaPcq2VygsHrrjs",
  "key35": "2N6w13o1LkvppBbQxspzxmzVTgFJi4R2gbZW35p61myGUCX9PYgtrkdXgdCgN6nD9PdVNXiomK8M5e92hpmRwYS1",
  "key36": "4fQjYaegc6izPxMfACuZszCfFB4tA3E35J83FqUcepryUmdrsM7ou4SQ9wqaQw3P5b8mBnLmu3cpmbstYcEUBgWn",
  "key37": "2WfpYZbFJjD9qd6djCdcSC542eqv54SoS9jBN2a7ro1VYpgXNL8H7LeJQMmeqMEoKjEK2oFmur3qMeBJ4rxpRnTs",
  "key38": "2XRgr9APwkUQiP89MwKAf8TbLjqhftubbtVxoZpn8JiJD4mZZUPK8xqQUDz72sSLYLpBnZmhHMWH4fetd9dxFrnT",
  "key39": "5GyLoDgQb6e7npWc3rwT3sveEhixbj366iT2sD7otMo15Xxr8Y8FSNkjaao5RHwmQg4L6UdC687NQEQkH2jBPGLe"
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
