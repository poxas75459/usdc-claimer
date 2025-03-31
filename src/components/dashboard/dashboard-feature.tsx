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
    "4vkYqjXYvU412TUkc9UqFauqWihyM67cDuCW88i5YqvuwdvXVETJstsm4iLZ4LxvaqXnWtBQY1dDAPJG9WgQ87sd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3c6tfDxca9mJz1r7wprSbb24aRFvESBgcKm8Y3pUuzBx9MPbNaEbwRotLnCqMemHcowdUtkggfBu1QPtevm6sgGe",
  "key1": "rUc51kBJLmtHf8YWpJUmpyZeiMFYAo9tBmrZZuQQiYAnUoqucCzh2q81bWupsajYvJiAyRpwLeVeCVTwAxN7fu5",
  "key2": "249XtGbvti4epNmpamGLG1e8WW8GgMXReUVctdvZdkSkJ9332wHFtU5UGmQfSeFUQRLuo3qtKJ87rqvM7RmrrDhq",
  "key3": "gbabABjrMRLqzMHh136f93kDnWABvA6pyfsFX68bGBzDCGixGKhFraJ12WcdsjtQu9PyEDiqDFXgBW3TkbHpWaj",
  "key4": "2LGBn8i662CHX5HSdYBxzvhNQJ2mHmX9TJDXEmE7P6yZRX2uhfXqBkXPYurU6H6XBi4khDe3aUdFy6pCDmXRe61M",
  "key5": "LXpmxp4FLyxNC329wfSc2YWx12JsHDpUYxy5Um5yBmhRvwUSudurkkY5ndGDuUSwZUvua6UKdKtZ2r43DZAKw4R",
  "key6": "LWrMwTEVifE4yk7bRzEnwWZeXsuo4iGj8sXFmtMuHS34CpRCzdrraZE2S6CWy9QADBJMkhwmcSGy2c2WwK6DTaU",
  "key7": "2crbBBMfKuvu41LvACNsaCRwKpyKMCL7WMo41CH1y8oqth1PcWD11i1wr5RBio51z9jsX3yezJVXN9yZjv7APir",
  "key8": "3drtUsKb2DEsgErHRis22d2eSuR9cocWtcT12ADjD4DrhV9nwcCxSPJnEBaHsUMjYLMo4QzYtCH5CHv4GxffLsud",
  "key9": "2CLNVQos14dqGe8JvQ1QUvUNWh8LNtrGZSerYkzefrx5zWN1jkscJczseTFeNLSk566t5h3Knx4vNbZQfPubTGGF",
  "key10": "3fuSdApEEAdtEg1LjL8GaV9c156ZvhxptWTxRx8j3G9DZesw4R5s42Zff4HXifb8j2N9eCVReHjGrETj8Qefkbmt",
  "key11": "2KPxkqFi6GW2chqDtiwQfeNPiUFuSQuFBJMjrXZmXgaRwbt4c6oogE7Su6egU2JZT2SKHjyNaMHhAwKNub6gjQg",
  "key12": "2QjQnFq5tgxSCud7p5h8edf8VkuKeqgEpFVpbkVszExU2opdsPxSZgzxNBSLXtDekqaayYMUkDqthBwT5Zo5Rj14",
  "key13": "rq6j8kvD3wdyWbhQeZKXHnaohB1KR4k8SEJrAytTVJeGTnaJVVoiQtg1aBxix8pfEupZFa6u276CPf4XS4n43Vu",
  "key14": "5PBKXiXTbquiN6kNB59MtKFTkbLNCBsYZoLi5QRabxRTr25dmksJiNnWLbei3J9dr4C6UG9gWRQhCWL4RCMdm5TW",
  "key15": "REebTUhcfrkrjp6Jp39qKA8LpcEBvqFNo18HhRmFgiswW4NVvhZ34fBPwBP47xX2QvjaiTpdxaUjGbz5CHWJ54s",
  "key16": "5fgek6fXCCUpk5ZWC6PnEs4uCU88uU1p1xStWaczikZniQbhtz6JHMQTeVYQSzbXtusiQCbsshaBCihWRMnFp9TU",
  "key17": "2Xm8z24KrugpM1X7zEkX48Jw3qV4Yx9UanB6Tsffm8vKUgZicK5yWzBDMXgd6WiS9GtbbAtyq9NbDvLzxuzqb2ca",
  "key18": "51a1dsBGPsXfgg12VR2ExcLaMj4WSEkpRnNahHZv5e6Vn2nwekwpsizXmTPDc12jDwrogEeszqEhjmJfPcCrkLur",
  "key19": "5LGbFecMkpTv84hrSnp4iNQDPW3TvLLDSsfq4QVerNZ8Gqn5nvx6sDQLfrstQQioyZSJfePrTgZX2UZuh4SFDbrU",
  "key20": "Co99nS4St4PB7HckGU2riJ7Jg66icF4ypMsumvStjz519HtmfxKwKgMWpNkvc15mGmgw8xHZ9QEWXGa9ymUv7WD",
  "key21": "3Tq74NdadrRWkFGxLvWviarwLexHXJKwwR8d66tfCxSD6iddAW9rhAtCuJsh2VWsbgDiwfqQqoeayzmodYRVzEsk",
  "key22": "5eu5Jop6nX3AFLjSinHvG5eu3MKFfZDqHT3ADQEtC4LaYDvNGQwSTf4pZAdggK7J8gwGmRjc8MqGByiGZ9vMnaX5",
  "key23": "3TDrKFnyWwSSML2yhcXJHppFnWsQD9RzoQhQdS8S3hagE7pZCfGR5soJmAYdzVSri48V4vfRUNxxhLdK1rtEqBLF",
  "key24": "5tmRuc3oTzvGvLdptzDFGUiFbLdFbmTk3oovh8zn9L9E9BeTuEMU1RWEDba7fuXw8Ag357dMciiAqxWTkssUF7gh",
  "key25": "3UJL9nrYKo2oWRqrvk9oNaohFRGh4KnLVau51zsbrR3dG6esSedHyRfrCNr8p8EoiqK4HCXtjmEXhF2rei31fMQb",
  "key26": "oVzy4v8avMNdQuttzRH2p8WHG49yR3huLvdZ9vJjfAkgswgdQZaZamhyMgNjU59fVsACWTwN8M7bcegVKPY47AE",
  "key27": "3uhdrhq9zpXDsd8UhsmsEqNFdECM8WyPJSvMpz5tUYBXd4PHkmGgWLL4rUSSutQr4pkvTA2oFjvS5NDwuCFzyvpZ",
  "key28": "2be45jdho7L1fpUuLsvur6qB6iRzi6xNokdNg3ZpPMgepvFQG2WNuucuqJa1ADvjCz87umAP6di7354wW8ewvCu9",
  "key29": "3H4zNKEsbDMabJ8PpDGPYDp4ATCFuvkp24M6wKB54xf4B1NfSH6VSH6sWTT69ypjukRvKv6agnwBgXEb3xhXt9Gf",
  "key30": "pFFyRVYtNa7Lev6GQCB4z4XLV2UAnBxsap5CyPf8TjkN9s8Q1dYFPQsgt6TsRHoS9WmgVgD4k8z2oEW5kumZaou",
  "key31": "2oKV4PJZU8Z8H8uqRLWhJTGRvwvpEDgYeQdtpoF6FYQGvT9ViJLoW7HK46BY3xShBhYGTnMF6ypUMWzJ6aJ6HoMd",
  "key32": "3tdLGutHxn7JNpu6aoPN2fD5ZSkzDJfLY3unkNhCNipNwNSkJ3smhKxspMk68rK1oT2TSAhvsZjqgm4gHQP6LSL8",
  "key33": "3r96bhLsfYrBdk9hqPjLCWgZaZwWR4bgdQ5aoqVyFfeKDXHhQowWmrhmpQVqYXcuwgQXRY1E3toDHgKZZ4jUUwS9",
  "key34": "68YGvXtcgEK6V1PJ9r37tDQrRrhsuDNgRZFrEeutbtGGx16Gb36FHsY5puKxCrcYJAhhka3EqD7EnnPMJHiMZHr",
  "key35": "5EDkHFu3riAEJ5hmW8RMEbXagi3H15Dvg9EHhmeuRthFmZbTRHcC873VQM1fwVKKxTYFmLMjXdnZCncuRh4PDM1e",
  "key36": "2YiVKuLqpDs4p2TScSHvugUqqSm5XY1XKUNg2pKbjMi6KKHha1M6YBdp564TiGA7dh5Jdo6ByouNtNVhevLKAne1",
  "key37": "3DBJSfFMRSrWD61s2QQa7HuNLb3FHUwg4iWF51F7EHhrudeJpFd1ThLnyfXmNYQZx2AsjKYtUS1gXup7WwePaUgd",
  "key38": "5hmpCYbNYqSjk5vzkCKJuWUJR8ScNb9XiHQKxRh5KbBHj3VPRiDkJy2Z6NHA48JzoV7azKmMXQAyx4zQ6WBX4Zpe",
  "key39": "4nddxiP631CBro21fKuwBLNJdRr12DWuxiPxB1b9KDReduujf8QHNK3oTBhMDDRepB7fpgvCTyEsau75KgDRVM4r",
  "key40": "5pNRiZNwn3XGMABTsPcx8xGKRNJZuvq59bikBGhB4iTjN131ndxFsMRqX9cnGtyDUEMbgmbHtfW7wwhEQ8rYMjWy",
  "key41": "MbNdaQVTSkktypmZuHjnWHoKqJSLpuBLDUH8BKqaFrTmLwzzvNNKvdqk2wWhRKeghc5bMhNutz4VfknPcvHLHVw",
  "key42": "ZTCS1BLG2JMzjwy4EwQ7FAfy6cuBZM8ehVgS9SpZsiPCB5PhcvpFK5TjGVTpKVPAc92RYJoNXzoXZbXzVaDA9Kc",
  "key43": "LbNrTquncyXoFSfkgQs2CFvUNGRWhCo4gUZoc4uR5UCeswBDGcHF6bfLWrMi9ZqUQpJs4WUFRzNwqheZJKQb7QA",
  "key44": "3ePdiY9ghXMgVNELXLUforZEbuz9pXjgs8Gxzpu7x372qHKQBKExGs3hkvbxmqtNTNhzuHWg6RS7XYGRuDKZKZde",
  "key45": "mfG86Y9FNMwXw4fqkYKkaWkLBXdVZrTvLjNUtvgSv2YrK9mEdFxEdhQVmmP5ZgbTPM9TnaCPWNnpePQE8JDRHK9"
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
