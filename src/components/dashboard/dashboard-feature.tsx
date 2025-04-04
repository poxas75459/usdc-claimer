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
    "36uj9f87Zo7TqMMtp6XuEAmNCyMmRrjfm3FdjSoosXDMdpnfgDVnRfhXSUMFaeeHsLYkkbB7HqojEK5NckUDQXBd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8H1mLpggocS6gsfhA2aeK23sMZvDAhgQjXpj12Ez1QVVNHnttqFtMN35mxQXjjKvfoKw1XWRSf17FdPXgtUATWS",
  "key1": "5JVJPx4PmcAtUWutWR3cwuMkBQw4tvZNqAYN9MwfjTXiTwGmzyae9bysSkiRhdgfWc6oJ2VmaeLH17d2bgJQP93D",
  "key2": "3eZqwQEvSr4w5jah25RX4aLsFjRUWPSCyKVEYyQdrkEwUeGaMVn7ePCA4yeZetNEAgMU2rdQYdqCDgTFyFioRvSK",
  "key3": "2APQjEu65cYz6D58VHNrykcsiMrKcBC4StU9CexasHw9ow2eoco7c4FTNwjGEEFafVMZQMBctxNu5JHHWPTdb3kw",
  "key4": "44445crmJ4cRvUt6pdHVib43xscy8U4UXwAg69xGrf1rGwRjXY8U4cNFzNRJ1jqwJQXSuwfTiiAobMMpE9WDfCWp",
  "key5": "4dJhcCuPQQcJtqfHcZinKttDfiEXmoTe8MHZsG9NR2kBQnRcusdLptpV23XB2PYaAsbLgG6W8GqVNMfEo9J8Dney",
  "key6": "4yNmWxCQKRy5nTrKmyTaUCG9ZVz9egS41YmqWqwuc47aGN7jCwy4vPpisXTczyzdwvANM5wxW1L4n3yZZhtNcvys",
  "key7": "fC7RETAW9GX4LsGfgThSbvGJeq3UfEx8dCJYeabdeYvXSUs3bhtNsFqx8YWxCD13hWzi9uH1WNdqAkTXcmBWzNR",
  "key8": "24c4W1WowiFWifj6J1sBr7T85kYmz8XwLYHUj5jywUZRthPXzLieqGGqdaWs5ERbtNm3xrs6jsJ8npC2M7VMXYGs",
  "key9": "5DR67t1KRVZmGr8UbMbYs5GqirsHcg7SFeDcEybH6S424Ke1sn8zKGRVuPSAyZTuuTYqNHncAra5nb5Ba4iPhRYY",
  "key10": "4BsM1C9NhJSooRRm1yNa8uArjZcyypBcQ8nDmq9Hz9Run1GKANP8YSXWW3s3Bxr1FJZkz79AXV4GkYdQARfHEngv",
  "key11": "3N7DQLmt3t5bD2DVvLbjKgUBGm9sBg3Pf2CU2bQfvSaSR8mv5y4mJjdyk5UAyqLwcNcwKfZbRhdiLx6Sa4byfib1",
  "key12": "5BVMoTQQxd32S8ahhBPt9XeJtguLimU1vXytnt8NzuGFLG4nSn1WQPqrXtmxFWp1HrFhxttR78cFM1oxgbDt59jr",
  "key13": "3Lbqvmadn67RKExzZHipA7KfhMxT1z5tAUQm7DdirYgt4RbGK15rds9bfeqi8cxLj6MfC5NuHGnYruBYsVodXXQb",
  "key14": "2YxF7YUrLUWT8vUgvgQGfmRTzhZBEQtExv57CxM6VEwE2UZrD1MwbJDbS6GAE2aUbmFMZcJHDiaq5ZRVsoD9Dw1L",
  "key15": "5pyzrVnHLgDbkhGNHdTbgLcdGSmspzaz2K8hypJVk2RYtnodN4VebThyDSP1LDSKEukFeeWk7hsYWzhtzTaZR1Bi",
  "key16": "4f1pKxWBPiCRg59kGkrYyCno51VtKnbNFm6x9beJtH6vZm7QrJL3b3nEdVB3uViY81ov88oMnJxiPg5oEhnWHc2U",
  "key17": "TAD1HRT4HVEsWwTP8VmePr4SDjCwzbFx7x4xd4rJeosE4mFFPWDiTpF2S9tVXJ7RKKeTBpUMtX4jaoixambCXEn",
  "key18": "2EvoV3uZddy9s5W3TcpGeCjYpCFhMGPzMK5CNPnGxFYpP39tCcUTdjGed9DGTpCzBarbJj9aSPLgfrTzwV2gPMyX",
  "key19": "4FqwdaBJQD2Gt3YXF49VPsq19DnFFaae7dmcddFu8K5mQSQVcKSQBadd7zkzs7LL4qzK1R5cPfSb3RhfuK5Rkidi",
  "key20": "2CU5bXEYmhm2umB6rk6ewNAGzwFTi7wSeLBDeqhzrzhLQoSeisDErmuX8QzGEF2HTY14xRbGJSkbFURvfTMe9Z8W",
  "key21": "31Shp53Cg9QC255UB6LmNNUYkC54Sv2eKvBTRh8v8AaaxZojQSex3wCLLftFrcUHcxegn4Qhsi9xwMrJk36yX7Cf",
  "key22": "3aBn8opH2tY3FNtsr789tmsJTujuuXiqeN8YtisbkbxyEzMBdNFZXWZddmDDmPqyk51n1baoiK6grcD5ceohjqYX",
  "key23": "2d97oiVgNpi2tuNNSj5kW78ViwtBCbiS4oDjWfHVYinUcxdzUJyhsZjNKra3fu6fKPuH31gyz8Byy3sDQkSPzuvD",
  "key24": "4o8gY8Ez39DGxLrrhH2fUYttFargVaAFB6T8VH499HNh5eBphGNsjzGh94buWQ6oFDqNxzXrcEbx6MrpRDQ775Vi",
  "key25": "3Ab3xM32HRbSPfG6AqFhX6GSqSSpgm4JBtMRNx8bptrkZkJz3uyMvzoTmaX315tYrRBCasa1K9dhq8EhKE86DGF3",
  "key26": "2gztBitUgnKhv4d1kDCVbTHYYaDjicy5kHHK5RtxdBAL5U8dzKQnF2NArYE7aMEceiaxyDcwJXJfqbyb35KNfc92",
  "key27": "2qwmSLN6kKjRRMyQtSKbe21ynmW2T8XqXjjyEnVPwEayFBV96SYYyPUrPj5XGUwrXNYnMzQ3JC9u1gXLNtVjrnj6",
  "key28": "5jAxGHmrAikhjnmmdFTGkfQpS7ShSKU7V3uopZv248uMcGswiysBAkYiM37kPR8YVokPpY9o4p9SE8sFhwt7zeb4",
  "key29": "4QGjPEid4MTaTHvuNxr1SRrF1hYi8YGaeddQUHVMeyUQoUQbggMp9DicmhPq7AzjxCbB9S16h68Cc47wbqyhQWMK",
  "key30": "5xsrALDtzsJGPLLnfaEEeSp8SYfcuXjvM1WTn4hE6uAs9pC9fDhDRiyEYjqVw6JtcdRLM6ZnSofieJmKJy9Dk7RY",
  "key31": "ikrD78wMFuKZCvYjQdoJrqxcvSpBU5XWxWQxRYJS9PPsA6v1hLtjoxazAcEEX6hf28DgNyEocyxEeLD2ZnMGZtB",
  "key32": "4qZBsGP7PcaLNu8HFck1wzMxvaztvBgmLytdmUpzhF8JtMyCEckVfA3fWkbF7YpGd1RisBsfBExcboKgsx1t5d1H",
  "key33": "4RWZ3XN3VqyRPA1r9niY3EfVMuJBE2DeXsLxJhuYbZGTEQcKZrM8kVG2y2gNNhFpLgHc6SjYtxtmfpS1Bki1hZH7",
  "key34": "2Ch6bGnXwR34AjKsmT4QV4aVrhRTWWKBtDrdgb2pdPQ8qyr3QQgUhHecVEUjjRsWwDPpgJqt6Rc7ZEV7FoX9dci6",
  "key35": "4X2dtRvWaqX5FhXYhYJpLULzK4KNC7BmaJHXFAt4mCVJMzikBqPtB6qwVkodAMKRu2YfQei8w3twLzUBBHekXWeV",
  "key36": "2hituodJBr5hvruDXNFvxwRdVJBj5hF81WW93zesxGXNgcXg5PrzEFCFsXTyySAkyktw9b2Y6VMoxXwb3EH7N8Ao",
  "key37": "4hz6DkTosQJQvmMzj7M96A2sTH47G1mPwuo7Y3VcxRfNfGiMBpZhZaSpktAYx4ETecn1gc7mideUp4k7nCk3L2BQ",
  "key38": "hLXX1Fe7KtLAVsWt22dYpWeWu28g92nbwLhMnWp8nWUsrfFkdU5MUBSgnTetzizeZcvcqYoVCtcCZRs3qZdyoYr",
  "key39": "5H1NmdhGjUd1cUSQTobRUB5q6EKcUJT2oBMuWdHuCkD4Tkf2MQoeBnqqVNV9TeA38gXPikp5C6PQxkEhjY1xWnJ2",
  "key40": "3x19dGVJVvtu2qp4Co47e7ME4SwKsGNU9MHg2UPmUsnxUU2pXgAZgd6LAqGdXDxvYc4HKqWW5ZoWCxFDXczY2Twf"
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
