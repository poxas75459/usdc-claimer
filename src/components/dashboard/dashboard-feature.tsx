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
    "44oa9xgfCTboBHVzKyUyAmSASzQvSf1S1eHzrPmt84QENTRNBWkmCCaLJ1dPHsWQg29oSFHTq8ccCMg3GpkZJKaB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ENcu8XvkwsJhAcVHPJJEHFAnTRiogizY1XNkDPXR54PwNiHNZJShqdZnd9qcXLjaGbzNFDYvam7wPpgL7ebErUT",
  "key1": "27eiwvnaKqkTp3Rwjj7uiQxpj9yEEYuAWyUEwwiVCmm6yw9daJSAy1Lh2C4P45DvheZ5ivJgahM6eiGDHuwaTSUo",
  "key2": "3nnjX5R786XzeJfY2TgbR6NR7SBfdu4knN2abMQMcszoq3EgyJ9FNuEpWA5qwjrsmAXhXdBXYDKHwEgrDxStCtFq",
  "key3": "5mf9ZYPBg3FZGzifH4DNuXsBaAkMh6V9znbigmVyrfm1w1MZqqQtjhEbpnkzztEoeDyhyMYuZSAdWRNmhWwrrRun",
  "key4": "3vgVcMFvhTYb4EiLizdQVnAPpgQAeERnPc2fry2tv7Y2xj9V3SpwAkjfywreUdWwP84rvz7DAfB5Jd8akmKZK6nK",
  "key5": "3TwTBzVqsb1SRS8msdx6aSYSQ6sq9gDgnjH8XWyMo5k6Tr13NogTXAEH7AMUgTtjuNT3tK8psTTRgj6Aatv1pnFM",
  "key6": "5Wi6qLSfdPpX79idW8c3Mof99RB1jaU9PMnMpHRYP9U4TkW4dYq8SnHfoT3a2EZAnxzodTiyyz7zWibFCmgDQJSn",
  "key7": "4iKYVXvvVnLZ5vC1AJ77DQu4xKDNTrs7EswqdCPvkqKmF9ZJHjdzq3U9saFFosrbWKrgLbhi5ViRyG85PQ6PzAxd",
  "key8": "2m8FhpMBhYUVHmqmHgbwhyVDNiGT11ha1seFay5ouPwpyC9vYWHk2LozBS3JbXtbvWGLqN92pgL78s1WvaxZBcvn",
  "key9": "njGvkqP6p3erusjk5sEYXLVtnZgCUx9QmsRpkbB7v3cbdoZM2KYq2JPayfgFDBrfRcvr3DqSrMy5iXZPuqtLZJQ",
  "key10": "3t6FmrRXhvhq2qTbLWCdzMgpXj1ppXjxFULMAxrXyYpnJKnGC3iN3SXimYA8sTDWfYr33MiSUKvsLTNbPcNYh4mz",
  "key11": "MSADMGP18BPGkn3Qrb4zzVtRVXHS4R4esSrVG4ocXXY3htnUmQMj45wTbLrjLhZxDC9MdZWHXJ6vRDzMr9ghZVZ",
  "key12": "nRsSLWRzC8ixxuyMRVhsnFdbjErFvG7TvDkF2rsfam8LhHbVGHF87tNsdrwducr5FxpXdEscMK5uprNAgFc9WEY",
  "key13": "41t2ai4gRq5EraJsWDkJMZCp4FsSLF3cDjRue5BJ7KJqE2ViVm7ZgERB3qPN56Pqxe72KDC2J2zmSDQ8tncXE6zc",
  "key14": "fD4MNbgiphAtudsjDtrExNmD3KdxMe2Sq78rXTbiW6fLcQsmwairVyMDhpQvnZoW598N8HXbAqUQuqw55zKKW84",
  "key15": "2N7hqD22PXdB5DrVhU3tWsKM7avjshTwPybVHstgQcbYGMENiiMX1G3v5zKxuXwapfWD5en96fw58oLz3MHwWHvC",
  "key16": "3W8b2nNFWDdEFQdF7vMUUXtDXTdKGpLhGVZoVsoYvq2NUT7FqAw7SVPAvHZgzkVcBAUwaNktU7wwLSCBSi8f5Lvo",
  "key17": "4BszNMJRZPgn9TSciCqzh5wJeQvQtvfPHzGa18iiH4i3nqaNECiHmUztwb6AEQGuRmet6eQGJKJ8nfBZzimrAALX",
  "key18": "5ZKcu1FYghTCQ4yACSs8VvH68QhybCEXDeT8scGiMSogTwAnG993M6ErJNqvJrwZLok3FUH48oGpPdPzzQjM8BPo",
  "key19": "2VHxEwM1YRdYu62WBSqMdJErdbNUxvCp1H5wPZxdhGzmAyAXHVMjMqHC41Mkb6M5GNowXAfuJi2jzo3NWFYswiXY",
  "key20": "5nJs8BUmf3Vbqk1v8jSgUq1Y7pik3LRtVSpH2WsfQ4bueEW3YmVEYYzj4eYrhLA2DgjQYCUM8cVXZ8cQyggb3gUs",
  "key21": "3wrcJfLYgsKXQw8Wtj5KbxLAGtx96hyDeYGxiYKHTzmiydCFoTYoHKiRsb47fjCHjLyhknCYZSCdsVaBN5vyeLLG",
  "key22": "2f3msHGQR1GYAHgJukgR2RoBoVyDhngPX2KgjoxgxhzJ6uYrwJSTTwLDkKJeawVStRvwaZRD7HciRxkCF24BAFF5",
  "key23": "2UT7rM9n7NTynAZnbeeFwtPTkDknVjf6bneCR6ik5FTmLPCnjfVtvAYchtpmmeJzkRZ4r3EFaH1nqSx99HQnf1T5",
  "key24": "2ebUNraE7yLKQqSKm6GdMszkjBCi3nm1EeAs5b5NV3VjT8eWLkYbMYAtjkjty1R9Sh1UTaL18vtYkxfhpWLHYMSH",
  "key25": "2mV7ghEMDHsq3ZifT2dvUZb5aMzi55YFnokSHQFCFdE8EU59tgq7zs11jaz57JrsCyMTALRwGRZuxTuqL2cxc95x",
  "key26": "TWJFcG48p1sZEhq9qH1dDBiLrhtjSrxwnTA4PS2ycXtzyEBN2E9xyzp24FtWp47QhAahwVgrv8jZvNcYi7BoTqT",
  "key27": "57bSpyiUfB31vYxUj6FWHa8oUEKYGMTJpVXh7RNVjvPfctiWo47owz5B9mPnQ7dMV581zmAgfRFi7bEBDRLB7BST",
  "key28": "3T5fZE7Uj2oppBvJ1X6yd8sZ4ceKCkexQwRohX5NigBxuheKgGMCDbGoaXYWwn6GdWJjRTRaekLLsuiBJ4fRyre5",
  "key29": "382MBYuXg97Sjs1ywmYF76zEwgpwG5uVREXN1M131uQQ5qm4oTqBxthns1czbzNB96QHXKXBtJXnT5oMpKsxsKut",
  "key30": "FbD9bxKXnzaxhRwidS4CERQeTN2DaeBSgC9HSqbCwyeS555z1L84bCQYsEDbd8zxteAW9YCbEXFrukRTqBU3R9C",
  "key31": "3iXW1zXFFkP2Mu9oxXZ6FYDx55K3UvqtxgJt2ziVE6m3VesJr6LteUwdtw1B8MhK2nSYcYzCfSaerdKzWVqFbYFp",
  "key32": "HhbA6XLrdQfm9GZmSkBCMtpKp26jfqWFHiENtGP6TR9RLXjWA3aNhtdr59Pyf13fCzyByGRoFYHgVThQUyRzMiW",
  "key33": "8gKVCVEVEcMofYRz4VEvvnh2spTYi1Wc6s1MJjoBdKShbgvGLYVXNXafHq5GWjFpMNEvo5XTZh2qVeChejuVwyk",
  "key34": "36AgBFVNt7JSH6q4H9Wwp9g2vg7vNdonpCCLGxJjN3WTfTG1PxwPDdHhM6PXmrbHD8oPq2oa6JCKEmdjftYh6ojT",
  "key35": "4qrpT7Mxaf5tNrUGYAMTffkq86Ek8Z7HojDL21HzcfZ4GmsfbWEKnMbbozZXV5hyWbH42LwjBpgtn3diSfQHhwrP",
  "key36": "4ZkfHhNKznMAiUdzRyQtbqrrGNagJgJX95oZw6G1Gcc8pSK9PBk7nAzTCPZ5YJLxeZabG2EBqMKyjsG87uRmKzR2",
  "key37": "5SSVQUdXTNMqo8995ocUYpWCt46CC8i5ZdqZhbPRPrQEopyQb6scmBDabEGm1nsLyKxvqvpnirDBnqksa4khgkJA",
  "key38": "4hhD63quQveNQjQuA27dEsNpRYam7ivfGcKwLekvaBYXLXr1EgZuFWsfvX3MS6RWnFYTVFcQkNWQrFvWdd9g4G3T",
  "key39": "64XgXkRJfuGHveBK9jTtcFFWbo8nPMVGsr4KGFZHSX25KH2RQt8L7jWaFrhNtbqsfGW8rhkKeSs3ac4f3en8yPFC",
  "key40": "33WDLWvn3kC6o3GRHnGmBQSQcMBoQhAvmh931byq6Q3dfFgE9H1R6aR1P1Tkayb1hrpCczVFxXZSWV7qgmWn4Rh5",
  "key41": "34sXVduyAVfSLGL2oKkaTkLYSbJbanxjudPSVUxG8wtmVgeLsP3EKTYWPFjqzfQXo5PLdXQjKdDaKXYMjR24LVk4",
  "key42": "zHxw1vpSixUZBHwGdv7N9ze9aFzdg8JrmftLvUjLSs3CrJ3uiv8YgXoMfGFiobjwdFTscaN897gCD3wn3SrESWM",
  "key43": "4WR6DGaBtQK2aVn5MfYzLZYLpYqDej3jGnDTTL7zqD3tTj9D2hiVs6MGvHXDLPMCLmGvNYVWbty6SpWepTBEQkug",
  "key44": "5sjbFabpsXNqJYFa5CeCG3tPgAzzwigyuqq34MVKj16c1qACzyboqxXRqr6iRLntU8FW7TGUfCyjjbXyk9izLnrW",
  "key45": "5nG6h2rB3MWXCCCqSDfvUf4kdUppRLhy9kXg7McNefQCwSPWuye2jyWG8YEM7wmWQ3w5akMCJyrqgA7KaCKoENva",
  "key46": "4dNPLtDPsJ5fhoQQr1YzhLhLw71AztTh2JS2o6eK5vtrQzpVuofpkLyxTVrrhUsKN7QBz6BjE5ztfcHpPBR8Wj4H",
  "key47": "3rA4rS5q6Y19yN5mG9qasx5TfBie1DaTTLnmW12o3d42k6er2GGieP53JntGsFEh8iThrXcpmDnoGFkGVqxfQBdr"
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
