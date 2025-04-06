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
    "5NUbmfcsjzwX13GFCESBMiGfsb4xC4XgsMntkLEr4e2fPwvWfP2QgZzxga3QZF1qRbvdzzY5tKCj84rwFUGia6Uh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "577NXJK2uUhpkyrCkDfPV1UmZciKpCDRVsz98HebPbtZ2nZX2agWaPBbGE99cn3Znkd2ca3E5LJdKkfU8VrERHiP",
  "key1": "5hBGCgARa83Vo4uaExQCiAnheTqiZeGxvg3BoprHMN5pp2hEpieUrpZWito6z3hMD2rjQu89yYXNt99Sqos75CSY",
  "key2": "3qJFj2VqDkmqWAiyg6FxUobEQsByeU2q1QpV2PmyjCzRrCAfqRDKz1XLx2rouxunspxXFVBxkB6gQZu2RzQDJpYW",
  "key3": "3bjsiD37vSzYZ4UuHTcLCTNFY91WqLUvUZFnyX5WYKQAkN9dpzZrpdh6MP5SAvvWwq7UEhw3TAsQRnKoXLxEXSdB",
  "key4": "4o6DpGcWj7S6zJNSaskJ85FdjofL43XQNp5QShtMPPwCTaLxVcMGnWt1ZnjCgra5eYimdrAk52UTnt5x3VfPQS44",
  "key5": "4FqvKnY5quHgCU6mp1ntkjNUjAZsbARpkGvFBDWJhnNjWXzu5M7LcXgdd4cEpnxuf7e1NMQvApNjrzm43DzjCFxQ",
  "key6": "2mhLmUfJQX49euoKi1cn5LDgayPHS518gGmxZhvcXofKyzxQLSaURXExqNheP9RjUor5mXsQrUkuX38yuSr6Gsyv",
  "key7": "2UzJApcqcK866rUFEoUvsMJ6RB3KmkrP5yZsdAFRd7C5Qihf2aVDZQhGHHde8Tssupnj8reFNnb72EgjbKbiFEXP",
  "key8": "ETg1w3Qa7G9JmXgrfjtmMPvmdRQDpQAGeMfJCWQ4NCdiyLHUhaXmvZB4Djp51zgAWHVbGadnNf5JAhwNZ8vCjTQ",
  "key9": "2hsGvDF9SX2iMtjhXSxAbSbeSHLYKQpYURmNsN6WCdkFMDmvqAR6KCowkxwvBezGZPAn6qBTCC6rzrF4zNNScx4g",
  "key10": "39cuvTTSnJbcubdZHud7WdqUx6azgFZddrPXu9CmKZJpy2QFai6erRhDvqo8NntBXe5Zr26c1jwiCi3inDjgbRYc",
  "key11": "4b25UwrvjnejZn986tR63MLWz8kMyLfE5QMi95HENZUgvPfp8FmKMJcpaHne1QPAx1XXWH7QaTqQNPScxeJuEDML",
  "key12": "czrpUiSaTEw3Qsj1ergSQYmP4m3WU2rFEtramDCeC9iQmo7aNT9UTWqbEjumrKG451cYr7CZBQo3mKo4L7txF5A",
  "key13": "31usDzy6QVfK9xojfJ11bK5kh3DRF7s9fXzNPsbsnd7yJAvEHwKuzQXRFAd6dVRiLrfrwRUftrHQ4a5mPA3395uj",
  "key14": "3nWQN9xxW1FghJYCYNrxvnEuU8MDzpYuXdEJnZYGitSXBvBo1G1cietsX7ueDP7gWz5EDvEEE5Hf8ToK71pbPdee",
  "key15": "52rNnGRt22GKox6MFb5ghs57cJZPavMG2Fm8xtG81sqRY6GLVJQFxvMAt2bzwTgeSMRrAkqhrFM83jqjkyWZEb9y",
  "key16": "5gFs5XvYaZtkRt615DdnvtwJLCS5cXXEn85TF5auMrnkAzi4oaNWV4y5amQ3bkfyvmfKoXPUs4bnqtbGLwqXLbz",
  "key17": "1ZkpcipzdM2YuBY8N4cSPXEpsgVLXLuCaG55wyYStpFYgW72WwmraYqxobFBSiCd5qrc1jeK1FGgs7DrXzwqWgX",
  "key18": "3nhrtoPcHgmrY6kBcEVLS2tQ1yVyPWGHPawuxfpbczyhxYtC7VphYtREjhbJqtjxxFfucm7ytYoSRpmbqQEo9Wih",
  "key19": "3365mdmcGa9sHJZgvkjjzehD3NYW8h15sRhtLmb968sLGz6j24DXm6HV2G7P4bWmbFDirCPuKKcyxZcTSGzeQvJb",
  "key20": "5x4xZmJXZWUajsweU2jhFhnZg2XPC7Zdd2kFPs6Y5PnnagjfjbyBdsN9nuJdZCtUBXAxF3c9kRTuPcLzXwQ9jkeW",
  "key21": "3bJcW72ZqfF7e25feVkP6etPJg6oRxKSqf144AbCxFCoyHuMCEmKAM9rsBAiQ2T4CVRJHU8SAPyoJx8vdJdfmDZJ",
  "key22": "44dPvxx7pzFCSXoUeHiPeB69GdiMfd63RC7ecQadBVb98a18EFwy6ysPwVJy6bge7vNYpTeDizXDyEN2SmP6oMMP",
  "key23": "yg47o24p7jiRo7dcra4kKXED71ZH9hjC5EeX4icEDEA8X2WYdETqhWUYQR6ecnsqsaLSDywKdQ3BGgRPF3CneG9",
  "key24": "4bjqVADY12CzePWvXSRirJ2G4EZpKCxsWGTSGAJ7PCZbycDiNogtLqE2sT9rfzDomCz6XPKwLooZwS1KT9cLqo6B",
  "key25": "AbnYPKuSPHmrW1CMXZCP4adQJZ7x6AAMLyJNs4msfmtZ2iJ5HxzkR9626PCrrRdniiCudz3VQbGBW4UzDVvNhKG",
  "key26": "23HsXwTXHYWMi1vke6NLy8Y78cVBHfhGXom2LfFnRtcgk3gPVpZ9WoKM7Nq8Hh5asHJcZdo1gG9DwJUvRGHZ1p37",
  "key27": "2uUbGqquTB3J6ev48XmSMeZZtAgLcqmp2EeRCzsS1iV73m26ZZqBjFSpjNmAacrn8zNhnW7VsGUsaH4k2x8Er4e7",
  "key28": "2oXV4QPTYdgRXS6MzGK4YzZDJMAhh7uFwyhcMFP2GdeXzchExhMJrEx1KpoNgVBVfbxE5uckrpENMCvKkSKMV4t6",
  "key29": "5k7c47T9CWpyQKobs2GBrmPrGJVG57GwES1D6KYb9aDJDZudzyykPmRaDmda4FNSM8MA6xhz6mUkRNxo7Yt9adrr",
  "key30": "2Af5dE2ifxKJ9gavU6z9GrxauFuxRP4dHSPLHCNNBSssibdAKnv4kVyyfcZ2QjiWMeAFhd13JKZ8bBBAYDu6QT19",
  "key31": "63uKmAcuNjbgcbMiBqDNLakBruBJS6kaqYZAe6MFQVtezbshnSjC2GSL593GFGHMANUYE1k598uWDnuUbnsf5W66",
  "key32": "tDTgpeaQRmXXfr58VNT5tKSbEE1oiacZAXfXtyzttsXehACXrRBAjxqh889JcuFgTyYF1s2HEpDrphNTUdURqpq",
  "key33": "43E515xryMQWsY6PGkFo9RG4yyL5LL3cPjj2XoZ4sEfbTsiQpbqd9oKeFE6SB8pTwXY75uMg8jPcNN7aPRjmRJpt",
  "key34": "3v4r4FgCb9DTwCSdBw3HcNF6nJTmx9ibWTXzrMXP6zVTUe2MGnVFMGwxHyj9GCcCdzt6kaWZp1Xp3MATwBkZSNvj",
  "key35": "2iyjTYRtcJtcN1hMX2RPqkkpnek5LTRH3V6TtxjMYuY1ZNskPwYiuxLzPS1M7pWgJ3yrpnZH1pU6y54fiwCAyhqL",
  "key36": "3ZePe75RG1ShDfPr2ZDjjXj5KZKXp2QxUTHRRECbmVBaEuAKdwmLe3nZoavNJsHQDDhCZuyUjvSzCDxws42mLvQf",
  "key37": "jXmiixK2EYrEDbVcWwfhfJ9j5LeXXw3QxeemG7VPzK9dTUnXNGPzJxcKQTkqPEnLat1eaym4kPos12z4VDSVrBe",
  "key38": "uxtDBvU3Ja1uYdetpxuUjcCwsBmS5qJ61wDRd2y6jUzyAsffzfqJ5dxQozGbZzENWG31byBvakJbVmo3SqLAU7Q",
  "key39": "5SsjPgkGEWmGeewTEpDPKSXLmn6Xr5CejWkErqEtW8CKQoydbMnWbtwXXFGJBAvWEZTNPT1dXJtW8RWk7h1xk2xn",
  "key40": "3ZXwSLUnNtETfxnyNrGz8ZzqcUyYZ8uS43DKqpN36EmGYnWTeXVNTtXpr9HU729LfzxAitWvZLed2PZQsQFkLv88",
  "key41": "sYV69BP7iNH44WLjPTCqkRohBE96zum5vVW27fkfsX76Rk6j4TGog6TcNdo8KHwgf1bmbk4LjEWcSCsov87am8y",
  "key42": "2oWHoau2KNoCWM5TrPHuJb4SumsNrxSW8L4iZ1QmGoXnUrQag9mYZma3UCKPmQp3Dk4JSX6k28vMwv8tgKSH7EHN",
  "key43": "23zrPcHeZzbuj2CdqLMSawEY7VFKQoekNVT2qKVzZPujDFasv3pQCrCn3dPmWQREDh15kU2kJJX3yRwFyJzK5kxS"
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
