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
    "4oiEhpMwpzUJTkJW63zTwfvgEQQNuzPBTQt7TrMNQ9rfcqTwbJ78mMbeYDQrYgYi62QeDggYwXP9h4b1VGcFPSbK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62c2RGYYakiySxxKtKY1gMofXB7aA8SAtq6ugPXkrCrPAEQKNkW5BjyevhgdZ4TnzLJEqRNZPvQ8YQzsBnUM7Lrq",
  "key1": "36ienfDnD6BgBsWko1g2ZqU7PF5KrgMZZ2fGHgojvhwqXjgy2SRWJDdhhS7JQNuuGdFpgf1J4xYg9KsAu41Et2by",
  "key2": "2cbbaZ5p3MbBRVTR32pTAgJ1syjmkKhF5gncjVUsr1i1EcJwNjnAxB3eRd6HD8FEDRrTb9RR8oNLYFFRCzSZohND",
  "key3": "5P8gXVKsi9GkNj9aChi9j6dr4svKN4fwXJLz3r16wrb7epYCkiDb56x93MofquM1CY2g1XXCcg5FgX7Zyz3Xu2Qo",
  "key4": "4v9cz2oe6DpnbwgRKwP26rRxruVBbuWQJq9EZ3kpwDeHMrjF3t6rQZN4DnuC4zVwxKkLDn8aMCybrcS9wbnTMmx",
  "key5": "4vFJjbaSWFWuA7YVAPBZc4ZprPiJ7NfgMjSLPkTv6zVQVpdRLBa8VrPBhSqtWQEAweyKCA8EqcuJAMFqxK22WW8B",
  "key6": "5QYzsuqGfVEBLNGMPZiLdg9fixi52tT9pccs8PcL3UmueAEqxEz4UcRbQAoF4aNakFMiKf6mBMpRpw8c2XHuUF88",
  "key7": "5abQqbuoNmaLFEFk6wV8FVLLHs7A9hHskzfsqZu8EHgNMqRqbzRYr1NHu3jEmXuGZdkRAbpmP1Z5LVKRGhphazUZ",
  "key8": "5eUPeRMoeSNxUr5FEoVAZAbbhpfE9KxsCwbYRNk2PNZ1StGnPGeWi74AGiNvi3VKyVHzd8sqmp3DfBQm1axvij8F",
  "key9": "65cXHCfL2mFgFh2q38znB9gi2vLX5kpygiuehMsrsPVyLkrKCSrwN9spjSwDhe1nXobxB6ruySKB7x4eZTTJZZd4",
  "key10": "2v6hkggcaqE3sk88MLQ5EjzWuRUNbk4qjy1gWdD69DCEMQioc1sPdTV3u3wMLUyFvgGqtpJVBLtHhHD4HQsH7G3U",
  "key11": "vTzU8qSbrDc1jc1Y4ENAbmxVkYAgj452dX1CG7wYnttEwRY7f1R9Bxcje5RSDXPdDquAEjLHagXPwWG7r2XPgFG",
  "key12": "2G6kPWuwcizEijX2qJBuYj1n5oTVHnV7jEjKUa5JLw9Qkh3ho7bJ4uGEXU7JoKZXDZcwZAbAb79Bbqmp1Pk8woNB",
  "key13": "4GuHSShrTp7w7gaRJjEShdKuE7h9SyUmaxWbtvoNi7xkecpXu7Br5PgLvSzSbaQWsDwZRiiwHqK648oa1rWMwp7h",
  "key14": "4gutULkHSYchnfHp7q8q5dm4xKanbrcNbnyMJejhqfqz7bRaQGDGWMJfcERdedFx51SXD3236Ubdj9uwTwaBkLTR",
  "key15": "2U3Uq9udPrNHCtyXAXNPRvJgp8PrpV3qmffFex4zBNBcTxDc4SLDQz3ZfXfgCyaqGMscPTqAwz3aMLNBkeSMGd42",
  "key16": "5fZMiVU6hfZwFVNGpPBQzPcfZNPFuiBZufRoZNSLsTrmTJqYp38uVM7164ytTYu317ofxx6qgHhWmAg2gHgQ74bH",
  "key17": "a2drRdRjJrcLxUAAMoVG8jyUzDtuZUpQPXFF2MYoMdcP9RFoagrArWJ1AYkhivUa7egaaEbW7261iYgDnmYHZ9t",
  "key18": "UQFAAoDrinDL1e1RyuDyrVT1X3BhbwtXXA9bVLZHseMnCesKfhAAzsPiCWi7RwdUC5USrbJZaonNSjqXwV77HoH",
  "key19": "ckbX8utJqj6Yh17NNxY9c3tEhpwXDHEAXYJmBRM7zZuixvDpYShj4EjnpC6D48LzzPEbm28bN6zcdfKAcvSjM2S",
  "key20": "5dhBSp8DAnG36ZBp8sUcKRcSSdYQnXDDqMXFoSdSpRKSJGmQwoRFUyVcPdfqx6cZJx7RvEF7J6KjujVNpe73cxiu",
  "key21": "4Gznheur8jAWAx7EUwRpTF9Z15AD66SBGSvbJeo44iQkc2GnqCqKaCWN4f5oyJic4hwmbTCdF1t6Cmm5skubMdiw",
  "key22": "3crV2grjBVrgTF9aD9zJJFRHMpvV8EMycqCYCxaSVaLAzMXzk9MJY836QJ2zJ2NSe5sDVtLMYa4DtKw8euCFQscT",
  "key23": "hjmzW9A54KeUEi2QG7odXKuh5F2d8Y3wRx1MEHToSNgrMtQd4BBQEsEG9Gvh78cS6Q6in28b743xksRqAvGLrRC",
  "key24": "5W4iCJ8pyFY26zwWowhgWEdRArFxgBANXrKnq5H1cX62azp85h7GwDXGrgxSqUVEAN6FMSkd1DZ45JyU75f9CWJ8",
  "key25": "3xJQhZPeFGmM3xu4tk1WYLnU5AYNUZKizJ9SrgbrovAWhLjd1sacDN7GV4Nb4zk2PFmXJydRDdju4H9d7rL7FbFg",
  "key26": "6jPMKqHiqA7C2oDPKn4xiGyi7fJd4Gwrof6jEUUekJNv8zxsjGULzTT4AyHN5jXTg5faNyhot4xqVWx9TXD5Kne",
  "key27": "9fah2fa13C2Uut7fkmAhe4LFDBEvMD4SBmFqr9aTwtay3e5kMiFGeaRTMTndCxWB6Mtz2TqBNgyTXrhdh5vSvfp",
  "key28": "5fyBWSDNXLj31ivH3LUgnDG2PzUBciKyY2dW2RWeQUyYvxUUrdJf4ZPLHfPuyjBaHe4n5ShW7xzYXmpZpneDs1ji",
  "key29": "6rEyrEGYKga4hgExYQDdt2diTn3tffuZz5MgokCa2dsC4BkTC15DsCWxJWaTakBY6FLw5aa5eF2LkAEVihqmYF5",
  "key30": "zsDNboNRoqNqDTC6hFrAZUDX5gjb1PTGWGJmknWePV8myHwcDQe4sYEV16eG1U6XUYdhNwZyqa7MsXGCDzeUPPr",
  "key31": "57eCzvkqHvgjKH6mBir98z9Phw335nxjkuYb7Rbb5zWbxxozwVcP4kLvvFbms9GyxRWjiHRSNRsz5d17RSVs3fZW",
  "key32": "VrnDDbbRjodErtgTmDsnkxvVo2sRRgrbAhUDUKLdukdwS2feaQuUq2GR4orzni4EEF1FDP35AnQVm2envvcShiw",
  "key33": "2fEQKgkmB9rkMprwCBAqZHxeJLVnz7V3wVHo9TVZET2by9HAcphW8Yca535xCTmraPSFJHzvvReebtaWvkfDvvGc",
  "key34": "3pQs2BKtnZPGgxsdczQfpGL21nNAt8GxRoY9LZN3bwdfdYpC5UwxcojV3sMmSzCGVhRKtqtbkryU2pMUtC96MeEz",
  "key35": "3hnNr9FxtM8cMLdyNbXhfnJBphsT7iJnARcqA6UMmo6nc5GMYrZb5s8T3n7hXHdB94aXbTTavPDJYaSpt6a2FN64",
  "key36": "4usyJYKs6GRXSRdHHBtBueL6iNPXdzqemCqMBaHB6vEM5Mk1gKd3T7fE9uEBhnoJY3F7iXs4njK5MUFSXDk8vVMn",
  "key37": "3if4WnnkWLobRyvdH6S1MtwT73yZ5iVuFQ6SiLbviAx7CfM1x56rS857yyj5qXdybEpkDqBwz3UPDr8DSxC53KsL",
  "key38": "xujY1q57bmBKSKW7WwR7agHdHvpBk77uDWwPJ6owQyYVzEJ1rzvTwp3spBNRkQFUqSqGUe8o5nhmgfy7Msp9m7Y",
  "key39": "2utFuYmsNrLXgBPuzs1zXtkQ1UqWDNtGDcnNHYgidbMoBSuTDZvjroJo81JC1bpeUXqGdMwXoJ4Pz87WpQ3FTdn9",
  "key40": "58qRfxn3RugAAA5Lriu8br2Akhe7SiyQi5QYhFUP3jHE3jcyoZ2NJKC4i1Rg2cXu7MErYBDShfUgHSDdAaSpTWjV",
  "key41": "3dPJdTp4Y2aaCA69edVhSVaRUX79gzRNTnWr5BYVn7Y83NMVbagesVNehWrzDA21G2y8FsF3K4Y7j4DzozVNNbsL",
  "key42": "RHKhvjmsaeCfZmNwEUTsvv4Bqs2QFEtBKhUnMftVoSAfy5Lvs8JhupNf2axSd87m6tepXtc9g7iKDdvEnKPBLZ4",
  "key43": "k4mMnj3DKWHH2RydCEctx3ocLnoSZ2CcnevNMYEaKsmRazHkRq1kYRVe9kACAa2XXrLVD4Nmz6yjwfvpHCEriVc"
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
