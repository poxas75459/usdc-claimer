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
    "23gCCnMVhQoB6Wkt8jwkzAeMyLwT7YsaMYXMkRhUmfpmSVQyGYffUXK1xzC3nibiEsTrjpAWRABXqvk2rT7LqnPK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LSSTiLohZgJNuF4iLTBKV55sq2xkivpc8nLRQyne1GiFuEMNXkgD4PAn9pfwkGYHPFjx6j8pqT796UHoG2nkoeu",
  "key1": "4uqNMsdRiyLxTpuYG4rEskVfQ6qMkDyGRZQbWyUvQitRSb1SMXCW2tBYfhvrKeAam3PPFfgg77RXNjcNPtfKLbg",
  "key2": "2gP6jN3r6xav9viNu87CTRJok8oGQagSXPvvWXSz9bXEqw2p9ZH28Dfu2NWhRniPVdbYZfdAc9ZaXDavd88QeoRQ",
  "key3": "52Ki4uDMb25n5rTuqzRcD8uRizP6cBX3XqKbr3BvBACzNnro1BqH5fjwK3FS9cDj5cmyNJcvfU5ZRAMsRFXVHcyA",
  "key4": "2dHktjErUT3D9UQDCbC95L5vCE459q111WANuCS2th8phpWyUU1Gu7H4W3btvPoAGcxhQaJ9c5YFRqPoVSQjsMdJ",
  "key5": "2Sv7XMS2BSc3BfBCAh6RzhxTzxbfjNsxgqyvJ15fvX69pPmf91EFe4ZENw8im33kpy9mvNDEcjujHtDH3tvCNtrm",
  "key6": "3mCFjSq8pGJEszNYqV28b3T3cMHBZrYbqRZiKtyXSJJt5sw1ZdkgEPYB1nRNWGA7TBZp5TFEFstFmShMAB3zFGby",
  "key7": "5XmGHwAriiirmfYMNmhpyugDvDYfcWyPhnwnxdVwJFxWRDH7ez4xsmwnyL5A19aRt3sXgvwGjQGQgBKxYPgR4zCj",
  "key8": "2pPzg9KRGxcAKDdxhrdKJgKCniuaL6eYCY4pNm4uUmmsqBAXLCDS66M2FpbvU1xeYoedokjvAi2ZVPg2BCBAqKMF",
  "key9": "RE11oVJfyS67AQffBVyowgr4gLyM99eU5RPbWt3bJBQne6yfgB7Nner7zSnHXg5MTrnG9qVkwqEUCgApZXsec42",
  "key10": "4fwa5BwxNAwkR7RXyaizsWsoSDnoW4a4baiiD7uWHbQEnJKgvs3qcNc4AMXrsU95QHRSiQCUe1zh3MryR8GnrXwB",
  "key11": "ys8iQu6rKLUBvuajBMh2hQWC945a43N6FXD6WpPTaQgU2AyKw5potiZT3z2JGmmrSrhQ4zX7WrRVDi8ekJEu1Zt",
  "key12": "yiZZcB53qkSQN142uvsFKJEu2AFGjAHBJKJG7BCnAiovwN8XYLAENdtdBMQy78EV3izmHysziQBCpnRdrP6bxjw",
  "key13": "4TCU8qBZRFAL4wUGBgt4EUF6q58Bn5WPfBGpwi195y9NVUrsm7qaLgB1ACuEmBRCh3fRhoD2WLpoWzvMDTgwK1gB",
  "key14": "RrrqQRsv9w2WsMEHNfkV2Zhj9ij56JncKsEnFwbgWrQ1S1aTcAEaJcTRgnnuP4W63C6GhTUfSGZJq7MGSvLx9m6",
  "key15": "3B5HvC12nifzprhqnYgYvTbYMk2DHVSYtEr8d3bKq7peSGM7bKZoyPgiuHcLk5V75G8eCqpmtVL4StgdQ835cTMS",
  "key16": "3hVBXvZxMSkG8KUAiHYGqDtg68RLTQGKcG56EytcaTAExZuuNbhASsmq4DgneNyje9YVZpNe37uS4PDtUzNJqoeD",
  "key17": "3qp9cLXYGcNj5yLN3h5TJQvkV65tKtwWcqibQV82Z2GWvWGvujiwj69Rsi83KAqL3kuRf87ZnvRkWCPKY72pXFLG",
  "key18": "41wLJWj1AxV6x5NAodqoVMCTytpVRiyCV1HjGdT7Ywp3jrDtH1bND3ixkL211Et7UGGS7uJvRchPwRTgiJid7FDr",
  "key19": "5LGG45Y9hAq888JuCMCNQUFJ1TPSv15G9TJjhVE9E5BK9wzMFUwfHKnLBhnQNpGLj8RUnJK3JFvRjxuT1AzPvELo",
  "key20": "3C8vmWHNWeNMS9Gr4eJVbLiYLe7BMN9uLvyu1JP5adyQ1oEHXrjfYMG9kKgbVGUMNqYwmNqPgSCSSDAaMRbhJq61",
  "key21": "5xcxbnewUK9AKqNcLiuhkvzE1j8GgUhGHKQqZ2VRSo9vJHunkQz5jtTXiJdnEQppNiHacQaEJDfwQVPZesZse15K",
  "key22": "2W5uuQKgDkyxkjA7tjupczGYLQ7CMmdT4s6xmwmdRacysgKMJoRvxtZ3p6RRfMrpEArH9nPoRfFndykGrcCiq4NE",
  "key23": "ZZyfUWS6CQ3UjvhPsThZRyhBE4iEXrVj96YKS213BMLxwfxnVCcyjGVsHjiTyS6B6uaRvQsAoc4FkVwdrSN3P23",
  "key24": "2Zvdg4ZRUnY5w732kHBZ7vPb9623m1xUJCs65rpWqwiCwEcRtcRe9yt5Jbk13STAYwSPMwCEDjVH62rGNyDSvUai",
  "key25": "Shz4gTmATWeU7LF9Ux83844rfybFjM5GfEEVrELN2HTM9GEU6X1zLYFhytqa2yEhpSzwzjkix8GENpLm2UatB9S",
  "key26": "jfqNCXQ8zGwpe6E3CAkoVYWuAFoPnUFkpyERgyHmmP3y2RiEv9H7hVdLnWyHxL4hiMi7iQpe249zGwsbU5ZixyJ",
  "key27": "qdktC6gWXJGwFpMbo2tCS1s2LqF8wGZMSdy7N5thKz4na5eoBjVcFNEqZfZYjsMS6oPSrScSDPdnnfhCNQqvbAC",
  "key28": "33QCV6ohLAPtxjqZHq34KZs9FAY5PJjLgagvUsapt4d31S7D2hvaJD3B4S2QCxrzkyfeNAjxoaT3F8X7S2E2fLWQ",
  "key29": "3DzNfZU5pV5dasc31SwnWpjtTzFXVfpk88uyGgGNQMwuDM4JKM4uU44hHR2gyxKyLLKtoRYWEM3HKKqCgbXADmJA",
  "key30": "25HbbWaeHarwuH7GBX2cBLicStT7Q8p5gABo6a4kb7gkXD54iyVe5gGBKPJhdsUTTqMS3353V7xvpiiBUVZWQ6xk",
  "key31": "24SCiTdQfTYPTKW1Wzu1k2k9rLhUCS3qs8d9s7Enmx656sWfm1SB94veXZdeuDADozPDQsVLSQU9AKq9KeGU2T4D",
  "key32": "yST92Xgg1V1Dtr3j36csCSHVFfpwGG5WcVZXrQ4GFNu83sCpXHUp9EbdmEzuGLouYP5feqPznMRASy1RMfyKRJ7",
  "key33": "5yhsxkic1xS1mwgFwrecJvhYMGkJ8ewb73coCJbxUbmtE9ooD8XxShnV1JjLsisbPUXG3vbXPNrbfaZuFXqLiHkH",
  "key34": "5NAPX8idwH7zvrdgVQ8qDXvmcMGMq4BGYRD2KHQUHi8F9f88sRrJmBvC9uBETYYAL8N73DJKF7im5iY7n5B7zp1Y",
  "key35": "47gnwDcyEhmkCTu4myfvyg1HWraJujXc9Ka9dqJFnjKjWzouXHAtQCzv2XvmsPGHqnPhEMkDsNB1ZokitQjEKMNE",
  "key36": "MuvNVUBRwvBqQcc8rbfYis4UjCHfcmqBJq5WHygXcvLosiqC6vwdeFD6Z3VBFUAeV6JRrH5buHRuSi8xSm4zcNS",
  "key37": "1Sepxvo5FrCJEvSNokYo4dfcUEbmCG4roMGGgMsnBj4ryqz6hWexKo3txGZ33dvTvkmF1XeSBuWv6pBZh9UEn7r",
  "key38": "UMphGPZgA3RzZjQ1EbPEAN4kXL13YXWEqQiywtRUQGnPGkjP3HzYJgoeSvx7KiU2YZPshZhWJYc3WyFmcpiRZzZ",
  "key39": "35imuK7arNJg6J4eEzehwjShGjPhrkbaWEb4pJ4SCcykvScPoEUmGAzxRpqxtKpbqtrsqdZsffo9YcKHFRhMRMVJ",
  "key40": "65KAs6jHnxkMXzhDvbYhHJA42Cr5BEh45Jo234j4zppbS84vE4KNyZasaXCLBdB1ww6dydXg5KBHRMWSxZFza1vx"
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
