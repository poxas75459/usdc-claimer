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
    "2tpn9C5VotAutf75Nr8ViTB9AHrKxtwu5B333dWiqG4WYDyWPwphMPCNenEUrX8iKH3MtTZoc9Bddt6gK3ppyuGw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RHR31L6AHGUQ6Ldzo9bqw6mAwEZaHy8wHPgAY2XBTs25gDm5EHCsgC7Arp6pD9FQmMhH3zRMPRhnLMca6uBHWBt",
  "key1": "3pismwFyFmSiYAZcHdGbz9SCT53Uk3vMKQsv9rVdUmJ2H83mfd5e7yBb2391EW8pAyBp1UEhktrYHRDjPoAZx32d",
  "key2": "3fqKfsCHdeBL5QzNLN6aUpZxcf5DZddbHJDxAx1kJXDTZUdcJV1TbJXmq1Ud7FcMDc7gGhoXT2LJRouTdzFDsH9x",
  "key3": "4DqxLoWcpUR6NnnpXyUdL8zGq9ATCZwSi1CmT8uAyAu51zrTbbw2CVJmRXDPkaKJVSSQXWYz95Luq9Cms3DfeV2w",
  "key4": "58u8inqjUZeJGDR6ZN1bNMGZxss7LNFPqPSMU7gWGsCXqeMYt9JpKot7sWnobnsQLpiEz3azLTuhCYmEhBN9giPL",
  "key5": "5tnvYMfCz32qN28rrHqK1sc1dTqALqGVX7rRgbCiSyxTx9D9qu9yY8o4Qh2yzSCAGqNhg6pT1sUGz9WDYVgZZoXk",
  "key6": "67T7YMn5eBExFyTKJhxMsdq2yAC4byPzPgWggNjqo4eea1Jx1xUSADs6KKnT8hEy2J8hCRXyZLPxKujX8kavz2PT",
  "key7": "4infhf7uBf45onpmVocWx82dDbRCXAdLNMm4oySJ1jS63rXMkkjN8CuDG27hWtDtfygvTRtbUZVthL887sUS7VXY",
  "key8": "38xPDCBFDjWGMyt6T4GUJnn9yFphpgScMFLPUFCB6dVYmsoTGhkLvBXGuN6FmMh7wEUAb21U6z5f9Tt1izTt7A5q",
  "key9": "4m17z6n1TD2wwoy5NLaLjj5TTb3JnMvuE5Efe1yfFtUUzqZc1bbx3TsLGNQ2qYi3dciSQBMxbQjSue8NMu2wEEbE",
  "key10": "d5bw4vDe9oqYnQjs6gqcsSu1gHTvvyWE99t5xZ6zakhhWbXvHNX6qVLnMoDJg3Nbe8vg66h4baDcCjTTbH8zWQH",
  "key11": "4Q1jLKxCbWJn1hsLKYSZHE5oF4rp7NKoXzmVf2qSdRQerb1iE2CdPADQKrdNFofZAXBMSniXVhFkYu1aM72LD1eA",
  "key12": "2mw6993kA6ZdYkSx33qdetxs6UnXqDgDZwySocFhuM7PdR7o1jYgVfm9veuzatY2NLLV6nFniW9pQtwgXZhxseoc",
  "key13": "5TGKp3jgStAMhPn4pPGPk9jjaeLSqD4iEkZZEyJRhhhG1SSi9qmwGsB4PyS2xvokBgg2dixzHaET6dWAk2tneE5y",
  "key14": "gNwzPB3Wk3kDi9AJgGZ6jyJ1PT6UkTQoZYG58HwVGfziUgbBTR6Zcxtxa7Tu7FW84RP5mgyskQdpdY8e2Y8gkSn",
  "key15": "129SmTB9Jh13ZULjwZSCwAbTYNtSv2mcmqB1YnQqJZU4sha4u3ymr56A1XQnZAWrMTmQ76mY8mpguhtUvHetHt86",
  "key16": "3GbxERaf6Hb6Z3s2pkRLbm4YszLsFZz12hURiUFyKJgmnuTsuDFrho1qWuusUfLnq8MvcUZ9Xuq1T3kBj7DjWbt9",
  "key17": "2LSDb3F5qQWX5td2Y8ath4QStD3MVYLXeDRoRQ2HgTEeDXcNp54twfKipFxyg79L5zi8xBTPFhrDFZxMmxjRXsQj",
  "key18": "41dVYPvmhtgud95cFpuiR8PB7Vimdgroa7iXiANsR4sx2GB54Ywwx8XCCwpPiAGCSS7dMEVXXfF66ty1QzXQCiKz",
  "key19": "55Xt6XtXNghX4iH38aAZMFRhibkUf9yVLDdwRVXyEPiiy6YNvnNjuTQ6xhe1oFGoLbP9jf968poZpKnVwdXvMVGf",
  "key20": "3kTiYnRtt4vw7UMcNGxzGyTfebG9nwuHMFDcuLoNDxYQKxce4T6TWixSyCJsdXnRtFk35RqQW4593RbHELSK3b2C",
  "key21": "4FEkkbBCAXcz4aEPg7st517AXgmagQsUesHxKU1wY8qfPYA5uCAA4SBucY6wHCtogDKqq5rdpRx11wrfixKsBi24",
  "key22": "3KELvJ4cqPi5QyH8hXQg23xryS36Bkz6HdoPhXLQaTuU5co9TQEuPEDeNy4itpAKLeV2BhKQJNC6tz7GRcav9HkK",
  "key23": "2ju7kiTddJaC9WmsutGkxgnDJmegf731Ku1dvWsj97V4i6pGfMhK2fxQNueXc2yJ3DjXZp9nYSPiwwEBewirodk3",
  "key24": "4wEzJMRH2MBJ1H8znDcNAVrwUJcYf14BkWHeihtHwPjn6VZpDL2p5NrzXh4MqpCbUxmnwms6Xp7YtLmzaSpkLsSR",
  "key25": "4RETkpWB4TFKDk9g6Vu2xn8LqRGCbnEWPGyriAwfRUHhCyEDKZDeUqVDNrkihdzTQUMAhFF6htS2rUzTzXTmC1ui",
  "key26": "2NowWdPbZLrsTd8uMDUMhfVtcnnLuMXHkyAnubATWMUya1buFuNiRgrujFWpTqths53nBA86iWiYHkcDNTYuhRua",
  "key27": "4BGbaitMWcienwQZieMFhj7GbrYxKYyYYgw3F6Wu5VENZdyMEvU45gQQxCLnrMwzaLxekRB4LXb76MDbmVVgMdJr",
  "key28": "4B2FoWBYxz6gU9adqMsFMpMrgLvFVRM8ZhGw5Jx4i4Lm7BwC2MZrjzMVVvw8ic4pkcn3JnMU8xvAfjMY11sXsP6S",
  "key29": "2ymF1V5F7rVXEmBpBbJeq3Ds7PdTT8bGRTHn2gNkAfHvBYiwgnMh3sVhcZXDCqjM3TaYSUo89GNLjYan78ERfCAX",
  "key30": "38iXqCr8icJSayQTLfy6Xz8Y399ZhoDUHm9AGpQfHM3cdWA8WUk88LZqaW1TkQg6thVP6MG72YR9Pq8MWpRuMvpe",
  "key31": "2SHVkKumaJHC4UK1bjAvhmJyHq3mL6uQFGZrUxyY3dhoAzCDfWu7UnUDn9grsvUaTEUjYFqWoRCsPdpekuyGZ8Zf",
  "key32": "2Yzyw82dkHTrZxG3vyD2gpuX6W5UQmucdjR8UDzXqj1ACui18zT2qUyiwRHY18iWePY2qsxHygwudeJTU8WizM3Q",
  "key33": "5SfPsywFMEdeX8psYydqukaUyQXMN7o1yu76Havboow5n2ZGAeGYakjMPXYDKq3GHRW3gDGBeSYi1xrYoAdnF1Hg",
  "key34": "5djucPh3uGGo4VPZhWZ6CctaHQb6cVk9UT2HuzwiLU7z72mJBtWGAwtP814an7Vk4UvqiXDMZTzT9NV45GAPjhCJ",
  "key35": "3HCUT8C1qEqti8dfhya7uir2m1nPs8Bvn64Fjf4sriTttmYqd2fJuF54Qes1F79Leb1FSqC3CtZFr93vGiNT3ayL",
  "key36": "4F57DjgUEboffgp9BfToqa6PWdLLJNv2ssQaNiQyCsVF2Q2KJaPEBGazn31LecgLRRRy9NxB6x6YVk3LKEHuh2Ea",
  "key37": "2Z99zLmZfNr1doCDhm1tqXqNJdGPxRC4eNqF8vkfajmd3A32r9TM9rvAC4EySG1z2iyqV3rKuiWJ9mUE4JJtnxpF",
  "key38": "3J9wjRC1D7Yf6C295xzcen8hWhCf3hoWkXEjs25awPuT7tD4hCAcTzX9xdxAXJkWYHkRUvf9qWnn27UwL5nNwMZq",
  "key39": "5MgS3eCBfSE9KDcS8Rq94JZ94facCYdLT6VtAavXLW9YKApWpKgpYns1zPzamYYQ6FgHW2Zy47Dw4psWH5tBrmwB",
  "key40": "4AEBbnz4dvrGeiDu15uTcvSh3Ukv7ffcXPoHtVpKv5Dd7bkeFQ3cEBGjVyWusSxPBAozfmyEx6HwH6ubsjsKZCCX"
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
