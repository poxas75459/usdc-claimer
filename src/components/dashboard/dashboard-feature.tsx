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
    "5ZZHAdDmNuwdSDDT4p7N5FXuozEQn1EmR99q6gCdTMeWYQu8ewbXduqGj1z1DWLzfuk5gPBq6mGranKRCjPda89A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TMjizLt9rriGQMRStCaB5CdvqkKZveYDf47yPxpx7UqmjYEyD7Z46uqsAFh2WYhmxH8brdQEuZQWKCDNCA13xZE",
  "key1": "3aDyKihdnJRuyQWx96Bvfx73jRscmhCJx2g42RjeG4xyS9AMDSCNCFRSnbN933vsYG2dA1M4sz6YFbuiE4RdqJoc",
  "key2": "24Mj3X5TwprruD2gFGvu8ZnA9eTthU2MS7qmy65d61UwjTmoZRWNmneW68uToBNU78ozAqrE36TN3UEfvkCp71Km",
  "key3": "4S3HGpwjJUhwXvGDQ7XJ3ryoD5rUGPTNzZxBdQh5DgqsE1StfwqYF8pQjpsdcKBj87QECf3DShN5mTiLo4ZRSLb7",
  "key4": "4mo8iJFT5Mqx3nq6aHrLCt25YvD1YtGyu4cmbgL25GEGjU1uU5cCHEWq8RW2cetRgXy62TsGzRT2kyFhVJpRXz9d",
  "key5": "RZyHAWzafEXLvvWfSA2ETecUoL4tJRWzE6Xii7FXouj7XYpQZi4ABMrnsxUVyNLFCZyoMe8suMUQgb87znwaYC4",
  "key6": "hX3ptHDpVX6n8ZLproFpzNeSwuRhTDkYHbPvXS8s92UY6HdVJQ8BYWbPn4jKhpg9AWUpAv79HtZB7om1R75PB6Q",
  "key7": "4cB9SPrqB9rWQQ8guyGfEfxR5FPzsoG9eeM6xVABhukbtiCvusbKcnnoKsPLaqpoqRbKCBVFZaXJpXL4ZEqbyENZ",
  "key8": "3xqgVuFEffKhbGEpgzwpRtFbTJBxAbyhnLmw7ZfPTCfdrCbCrxuLgcL46BAysKEr8ay2y2LwKhhufZN5GpU24Har",
  "key9": "2GG4teMVkywbUqDMGnys8KCKqXRirFfExsnpx78aLrXWqLyTcwymVYpPCGiawq32NbU8RmCUpzCguC4oQSnfDaUf",
  "key10": "5qtF2HEzZkzWVVcobjhoDZYy8tW9euaNKw2jPNzNsZ7u1GeYnDK1VTvW8Sr5V7qxbtrFCrPKdjo5sGphXN54Gbkk",
  "key11": "3t52etpTjvkZZ5mimQ3L1Nd4jtaRgyVeQ22v5c6pRTGpTRHiEmZqA42GWxHP5UdRtgQHVUET4M84tnU1egH4sKom",
  "key12": "2eP3iPfMht7LrYvoKrPzE2Egp5Xmdyg9uWM9DxoCCv6iY7bZLzryHG2vefXRmyRFJXvmvcx65iENmc2tWKADxFg8",
  "key13": "2Atj3MJ8QrNkLfrwuERxDPj89M6ks3R44MTefZaqa5fado4noRuP5zWCk6iakfpxQbbq5rZ33aRmRiF8U2QxYB3X",
  "key14": "ETFDFgEENYzkH4yjFwYJerBB6DZSyrEXQKXruDHJSbtuMSNFcApSRMzV4CMjtbpYmWLEZvpXQcaiRZWr1VgeKDH",
  "key15": "5mNUFeEyS9yEr8dXoGogER9qyjq2WU1iZrG2YfLQkidUDQ4icL56mmb28KgXF153nSrkL4BUsxroVceYjzhGPKbR",
  "key16": "cZQx1KNkMZBBRfREhPFP1b8qZVsLSXQzCWp6KoXXpAFcy7Qn5KqkAQtuFzkQC6Xrc9QuoGzbz4zPUgDA1QuE7p8",
  "key17": "2ypaC6z4xhm88Ae8veyyUrriSxU35RPzw59rfAPDvpCRqrVvmnbxg3oDmcJXK5wynQHZa8HQymgXhmcbMgyQNe32",
  "key18": "5tm8qwAE4P6ST86PRdwSP9pzKZHJss5hHc6Uz7iYurJJdiHuPGyiyCVS5hAJVw1indfQXcLEr81AEobytFCpTSJA",
  "key19": "32QGsZZXB2rcKVYGWPgei2eDYFTLTXuaB5FFvXqSnokSHhwUtqaKgSJHFVMwQR87fkPE71g3VP4GMwZSEEFh7PMJ",
  "key20": "1etd1gyK38cwdHpxV3zFRmKkFH6zLDEWLpehcSBpvcEuDEQUSTnBJVZFAbq9bSVbFSr9r3Pqb8ydNLdme6hX99d",
  "key21": "BsWvwUVQ7iud8oRKWAtm1ASE2Bh5GHXQJ25YE52yxHMi2Fzh8gVS9CfyE5hmjx6dtc9pAg9sP3GmXayoRmPAQuR",
  "key22": "5jARAEH6kEfBR4a8RNCbnMka7KLSWBRvhBb3NgbZB2B5JtGNfdujr7kiEEUWj6y14xwxGskVG55xZaM3Ag5evQ8D",
  "key23": "2eQSWKtQsDtRPpuHRhnBXCp5GhNeh4mQDcnPfsXRkEUCpofquDZ8rG95bWbdPNU6tabH8JqJJYKQBm87GHvCPJ63",
  "key24": "5QS2TnmDGwQohdu2botz1Rb6AdbiPussJNZAfgUj1Kocb6oKJ8sn1oSFXEa7xP9uDfWXM3Td4YS8FP3K6kHDwTft",
  "key25": "5tJz2ZzUzF9xvBe6SWFph1KT5GBLq4rT68XK2j7PZiwNFtvn8XdTcdeXvtM1sdBsoeEhi8TcorQdUjMHSwot6omx",
  "key26": "zL9j4CHBqyRZp6S6ecgrLz6q75qVtCjWmMihhpDsXwSRqYjnTXeAf2JwVWUmCUosAzTji3ZdPFrpnCJLQwSveHf",
  "key27": "5MuC2CE3EMz5y9obaRHyHuNmmD4r6M9ho6HUiXRAquuTmK7BCFoaoBe72LtnE9JyFMwTEMYLtzxDeErz61Hr3VuK",
  "key28": "41x7w9PCV1e1NsKaT1AwTKaNk6Afc6ZCMpVjHpgXGYwj5dqVpSwshAuRkX3gwvEgjvFfY3zJ8weq4AgkEoebSAm9",
  "key29": "48eDrMd7uYmSQUCTYENp1gXqVwUbqGbBosLVM358QYgC1gogUDicPZ4Hr8fmsNvUPSJoqm7JSniUDs2ijN5yxsWZ",
  "key30": "22rKgYZGEX24wpovAn6WpTv5tfX1jpEbVgWjZwMb4sJaJ9eVkiXWjeEVAygoS7ufdVwwhW1Pu55FYt8cL15smTH7",
  "key31": "3SPRQXX2g1iTYhR7r6AeA1gcmqmcHMWaF8mqmBVDrh6nPTnHoXVGw5iiLWkGeM4LBNb9mb2B6vYBwpnDU1fSjbNa",
  "key32": "ZZRinhsrNwYGbfRa77ytKqGHN2K82BRivZiJJg914428gKCfBVDNQCvV3eBEWED536SGYvNTZajKDMCjsvs5T9X",
  "key33": "5Kc1Dp8wKXiRst2QPC1y6ev4tNkLMZTxdAXkAsqRQBRDMfdkdQ28rJJoZ4jUmD3V6PyhZtJDq4ZWcPHV4n66RWwg",
  "key34": "2nv2xDTQJQahT81ey6EVgWHivUfKAsLcQmkUDsYKoKGczFGqvT52Et1NqrMZm5DAuv3Dg3QMEU7CubpMtRZYhULx",
  "key35": "5LoNcgyXKwzvWGd4EbQSE8T7MsMn3pc1hTuncviXW2whWszucpdBXd5nhGkFWVXuz2iU8rNYtezWvhdR2tHSiXvu",
  "key36": "3FhvyyZFRDrp4HJwWhu5X8K7NowUWpLWPEXVXGpe885h2EfC9wtT1TPR7jRfg3Exd4T9ycrGxfJp8xTsTxWxq6HW",
  "key37": "4b8EgVxD7nZqXNTY8Z99xv9rdeyGnScJGJFstHYXGVjxyeTMuuKCjeygzjM4Y4TpRvuQqrKzziannwVhm3gd9d52",
  "key38": "rFTUSeumHP8rfhhNMK4MvZ1PRVqjQs2Li4W8VmqeDMD8rtLA399Jc5pDi8vybQ2Y19z3aqV7RF8i7TR1RKeBLmF"
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
