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
    "5FtomePiQxSQyh2dka3DrjAuFfwkFuSp59W8AF1JdyftCvZMoTwAzPvCNHTTySwwdoc5MqcAWhWsGumkx1SbhJeV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iu7JEEJgJPZpEC8Qw7CNWPuukZ1yzSCsrcmooHhTPKhGohn3qM8m2b7UHBAeYPXNjna2zo3esEohYU4jGyy38HF",
  "key1": "4MhWL6aiQRjZdYBLkRDQ9qaXVBdEAAtuz36vzot4s6DXHfKQ3UAEDRqvJ9LzuBr4PMJv7BiBTevRsNc5GHzgPgCs",
  "key2": "2cuMXAL2zpWUD6KDHHaPmueTWZWXfjUMZqNYb1uWfFybuKeuCiWdQL1yo1LhFmmZyufkaMtU1ysti8Utt8yped3L",
  "key3": "3tMH6FJmPxZZZXCQfYKJquoNeL34WoR2YX8H7d7eDdD3Ei4BtbqcBqGyhqQTUu94EUonEHptb1UM7L3DsTdfzEpQ",
  "key4": "UVPPdNiuZEMKp6Gs29V2opnzcfw9rW2jHEGGmYeHRJAfjCTxsEkY3ZYRsiccpK4hy8z5h8uGm2ZVK99PFxZRSuX",
  "key5": "2Va3KzqPsUJgv8s7ZaR5zk3sga5akJUHCiNHSocxnaYNW9jA7cA3RERaLW3Daqqwc2sL1kBX7wjEojeeywdzkebr",
  "key6": "2ACw3jce2nDySsAxXrY7HbGSgb8g49QPS8QsXw92vZJymMRAgH2T6vMT3tmjSPBHqZvj5aR2uccKh5FLKtN7odsm",
  "key7": "5b3fq5vCKmSwzV3WVaRNbMLiRvEiznvcr1eV6ERYKvoQA1JQBWhSunAo9cxJmE6oE652hZX89LjHDHwjCYgNBpV7",
  "key8": "xJ4NqXS2XGpAJ7rM5hevbP1bwHzRnUPBbS9KRSng2qURKGyB9Dk2BXSGi8n4eC5Xn2UXGKnv3FTQ9cHX5Bd1yTb",
  "key9": "rqDSVgB55MthfEPx7EieCtwhduiFnp76UYeEteD3omCuSb3AZAz9Tgi3hTGChmh1AxQNCSrnzkixB9jo8icRpNR",
  "key10": "3BFVB3ZZxnnRe61dPxyjSeeRRjSvugB8MjEDKBd9CieouzCvHoAYNbXAz7hHeyyNBaNQaE2heZaXSJ4YxpGux57r",
  "key11": "SAqhL7f2GPQkpkebz6ZMiCWyJJNy4nikPZV6upk3RwKUNT21gnG8Ch5ZUaZRr5AnHQWS8jPuL5LASScRdw5ZvgU",
  "key12": "4NcPpkndkmN8kqhHfQozWu6iGB2j1EZ8NwdRsA6yAQLcMRyvq6UHCHZ2K7hrSevXnptbfb44afjE18xNyEBohvA1",
  "key13": "2gAc7yJEUKj3g8WcRNF1fxWsDpMbGKrTmnVY6xVcNYzSGM2er3XFTQZzuZhyjKYN6wNJyMYjnfppmtfR7e646E2X",
  "key14": "5oteYB7emaTBBj3yBxtKN5PgdJ9hkL8yybiKA3Yr5VsgRd7x8VBxMuYTfmdZYzWzzR7MQHpnfJnXBD3LZwzma2pb",
  "key15": "3UCcyZUzA3Uu2B3hzUxJnVAPpaYKTt4cHbds1CA8fxzWgznJXdAuuUNYx3s81HLYcBxCsZixDj2N5G3pc8ckGYVe",
  "key16": "56Cy7Zfp36XcCy5teuPX8rckjbLwm98wya5irKXQfmF9ae4ri7Qv4eL6bfK6c7egYHy6eAJ2hcgnbPf59AtPk4a",
  "key17": "2PNRfwKcV8SAgtJPAL78FGvviXZBQkrm45N8x2CChuksEknnGHA84NeLUEHRibAytmgfoF36sew2wnsu9VdoH1o3",
  "key18": "2KM5jj3u5dLR3uv3rBbyFsN2NZm6s5F63XUJFUzzvccJJM41Lsg763AEGyJrw8qyUqWfoz3ML8V2f7t71VgegVwe",
  "key19": "4eG22BLAJ6AocnH86DFqkfGXXwiapvBL5kvJG22acWbz4V3MmaKmBuhK6sETmBvNT6y8yHahmeaqNuNUytF5wZAA",
  "key20": "2dowspHRy9ZuY7pdSWsP5FUAvz8bwmi6G8H9DBhU5Uc8wWU9bQy8Smcyp41goMMnHYrJaQASGVQX4hbrd5WDGqs",
  "key21": "5ndsz6g5akm6zf8XtuU88eyyPuAD7bw3K1pShKcSwwabuLyEJYMpFDnBbQtJotHBLxvZbiZsj76oUPCwTMZ8kBDj",
  "key22": "5nQyAMVT6vtZBWfGRCwPzdnt8NELKZcW9PKbUSTywTr9fr6j6kKr9GRGQDFjRnmRdTTkcvbk4SRGEW89WotWAM2k",
  "key23": "2cBfCJyZcpM9uuub9gya9oL2xE57MxwFTkDvFvadqHGi8MitoeeU6mqVnwHJxsA6gnEGicc9XaXYXxwMXkT5hZCc",
  "key24": "4Czh9p2eghuqytyZWhAgDKAPb12REZe2daTdDHyajhRp48NS5vuD6YQASi9QkFzSf8dqdvFufRmea93hBZsFELbe",
  "key25": "3ttciMLUUmU8AeQTsENc3W3P6HumVCSfkDf9uPFjAYhEuiNaraQF7SapCAMhtrGJWWnHX5kv8W5QvZrefwFFH8ZH",
  "key26": "wuX95k8P6Fbp8FZCE2PsTLuJPfkT1jNXYM3paGkmW9VL7DTbikAnGHC2zbRwZ53EokAhyixPuC3TzPHaoucDzwU",
  "key27": "51gd15Mm1x4ur8T9btQSoHuXgUicoqjq1BbPycQRrTciVioxijtSpsup5emNP86CbPEURVATWR1CKgXvHPdnXPWD",
  "key28": "366kPjShTra3CVArUvbiRamj2irDdtEToHyv1KG3Y47JFVGHADJWKVbaNKMkB4xBP9vntgmG41QsFHMSb4CB4upT",
  "key29": "2pyMab3Rrp7TCgPEkzcnqDP4Zu2qCD4VE4uG5FM3bcWXdUgArLbJQEyw2hqxGNHFcPKBGUP187vQbyqeDx6VfA1U",
  "key30": "2LNKg9EraGAB7gF4ZXPJ2V35xkCfcjJDSyeTzYaP6WYdvjHEa8NhepNijKt2mVWZL2R9uNrvtjsMXR67SfHLfCjK",
  "key31": "3NELnDWFETKcBQTq6VXadfhquoCtP6BSt2NKA2VcS7ac53FC29Zet4V93Locrcr1zmzigtygHsqV9uqh7AtZYGUx",
  "key32": "3x5HUUKWXHi9z3zQvZJq8WVSJDftj1xoPPSH7UFatTbU7oCLReDWG97bBC1RLzSStBwDcX3WhDsfEmU5ZemUDZWL",
  "key33": "5NuY2kAEyLzPhXixaCRZwHzPtPxW5Qv7B8iuGd5DK39vQFnnnCDW4vdcPksUfryC91sG8bw6aGB1yGoHLeRTEHiP",
  "key34": "4dXdzumTrYE7mbueuhgWKpB8QDTtHSLm2VQSiuzEkR1Vp1dQmb5SEVePXeTLe1htCta1FYhRpoguNQymwwyvJFMU",
  "key35": "3CfQCPVGEERWfnjQG9WjcLrGF67zLYwZX8raLkvLSHcFmu8rTnBwP7Apw3XzzadE2Qnp2kNkZ3TNwcRqwEkkyGiS",
  "key36": "5RzAXHSjU9aSBaMvmUh5dDkubxFFX9wXL5j66UzQ755tZLQSq7VGemueLRYpA1RvZL3euS4GVN11jspBQqD27X4S",
  "key37": "4pP88N2z3oGCVjRgTWDkTsKGnQ65t8FNjchEWptFMMYq3t2pveDpsMnu1oCX31mC242kBBxSewRqK7Jk1yHt7s1e",
  "key38": "5D8teR5GWoTT3eqsniGY8FuoPcKcAWKniJRpw7Dqa2U5f7KqdoiNr13B4ac59f2PifAxoJcZgxe5nmrsEm68rpb1",
  "key39": "3zq8MY4AMivHhSZvEQzxwN5zPa19SyZAT2gMoweLyXSfVcv5Yx3kr3DLALLkYVuENM6B93gFeGbKkV7A964yvKMT",
  "key40": "3TydZrFNHKKMsKUkjENLhjHJtykhiizfnA1bTRqH2yFiqwY6pUEwqNfBDLgeTmMB6Bk91WUWEGmsYUKL4oCLMndn",
  "key41": "5vzNZdw5guxJD46KrSad7fE7dPb67dWtU5CofubT9uNZkRVdszDptv8YdceHEmasAUbLVWknEbsSo5YyrQn6T7Zb",
  "key42": "5FX61Z8JpG7gjYrjt7ec2Lyji2YFP9kW1oaFmgMPDoaYUs3BRrJtHEqvsUGBSAjjb9jj8B11oGwm8bf6ukYqG3E4",
  "key43": "5zCYnDXzTFmGeRA8iWAVVs5q3Q6mNSpniDoLzjmdnK9o5G3kquZfyEncCjrcFMuqBcC6jZPx8zN2sRFExgzGo5Jb",
  "key44": "49FVEoBZ8coWM36wmLS4UtKxjqhcGKj8QMtcoKR3Lhw1qh5xvzAjrH8w9pF1krjWkUZVLbTmfQ93dTiB2MhCNiNc",
  "key45": "4trFXeE17hFbXeuumkVgghfqsjPfBJHU2MUFHwrF4TA64uixVjXys5nbzChRYVjBpj1HHByHnNJLRsnaYaNhEGP9",
  "key46": "5nvPeVVp5Zf2RGpUFbqPZK74eUeQ7t5n1K2CwB4BequS3Xmu114wforLa5E1yJbTWJHnaFRJJUyjPejZrnM8oZfm",
  "key47": "5oWenS6qoRSiNGSSChv1bJ3EAnoCHoJNL1fVNfUsbbPdEpW6Qu4J5DaytHx4aC7u5zU9tutraoPEkqC6WNSgALc5",
  "key48": "2jcsiLUWBs8noabYuJvSpyAMsM2Tn8rDqisoasAgMV4YD254KzuhS2e9AeHVKGPpxdtvrd3n7myZfN2S3RbrhjWH",
  "key49": "65Zx42QEp2PWFh565mJNzGmW4UZZ5vTcNU4cb8TJkzn2JkzYwEgXLrMgnzwdJysgitdUmq9oem32dq8ZUnpDnSqd"
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
