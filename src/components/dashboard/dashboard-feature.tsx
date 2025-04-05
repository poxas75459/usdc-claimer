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
    "3aLgpPK6VVWoyhz3xxve6iyJKXHiCfwyR3aVgZx6zhoFY6cB3y6J33pDHawJQsksssP9P16EX6JaU1qhbxc9arNS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39EPwY27SfXMy1jp47A5NP2JsCXzTP2d3eRFDev3MeFRpePhzwHdJFPfLuNPAAB1cwYtT3ro3DaG2jceKwbrYtmH",
  "key1": "3oUHcjFLxZKecfoP96dRMkCqVGzyLg3t1LuvnTKQSroYuAJXuofmRkmW7iNkXG6DFf2sr8DyfsJx4RQJjUnSHA3c",
  "key2": "gz6Z2LfLZNPXV6fefDjKoAG9N18CC7ZXBZrcMMD8JCE9Q5CuaVKHrzdxQHuyVWZKYjaAtt7BGaho3QQrsLFKpV1",
  "key3": "4xTN4QX2a9m2B7TdMG7RysLnbxLoPAGSandUHdbg7caAQMWnSPm8fb9k82opr82jutWQtb4wZdeZDwsVatUdf6CG",
  "key4": "2TDojcdaUsafHYJoS4uLhAw4uV8R74Bt1jv3m7456MXQcsU8hTiJmaujaweiTjbHtDF4Dzcq88MtEaachLNpuK6C",
  "key5": "RWVLteMW5NhZ7yHSFBgGddXrnPoUSpfKE97HSDE57be7pveaDvDrKFSvcfzDFGxrroz4hn3ckHkjHssCZT1emZQ",
  "key6": "2d2GQWspxXz89hbGRG1MmEUJz75eToQ2ZfvEqkesYYcmmm8sacyDAErYrctkQVhMun86ZW2V2hwpDg7Pc16M5wbQ",
  "key7": "2cpGNX5xao4bFHhoCB2S67qPkAft7M92ZvEuvJ46UeuCfDzJdemsRQaKfgRpPY2ZBV4TvEQsK3hsCaY7wEhmReKZ",
  "key8": "3TEsmHB76gRxne9wcsT98hEcFWfp4UVzSqdZcmeP9E6cHSYk4sPwTQQw3Qa1nXoxDsv7KCPLXQp3bj6gHsWWNCLS",
  "key9": "4oebxBWHcTRHekZXxaeyjJmQjs2D9J8Htim6SLWAAqD8Zopubao4Acjk36FEputk34r8teQiV3pWr1WugVW4kM1b",
  "key10": "efdVagV6tL4hTmT2tdZgHEjQSp8jf7LzcTxu5GWgYRdCkpJCTAYew9x4cgtfFJnATneJScvhjSynxvEbda2xEur",
  "key11": "43hXAjJRpzHmhav6zieFFrK3U3juVrm2PGrGQVCnXQbe6sy4hpiBb5H7Z6GbvkywG2suGt9gYg2bpcMxUd6xLiwd",
  "key12": "5ZdHvxR88SwNfvPvqtSuf2UHQebG5FJdxuqPpp3JeADqVRimzBEV71XNUCEK1AGn615nHMNFpi7KT7sacjidXueo",
  "key13": "4LPyVpMaja91n16cR3zWoDD7ZaGJ4ssG99zEZ4WPR5yb9ZDMGVbaX4LSfZdyNGXE5CBVxZk9cx92J18wGRW89NC4",
  "key14": "3aJ5PGMxUL9gWC6NbPWuE31QJY2F8uXU1QQSoVhWQMFMedMzt3LsuiPyv1cMDw8gS5mKXY5jM4TyPPFEsnZiPsdz",
  "key15": "4nTPA8BLpUiVkTr6YY4TBNayFAqoqznCrvCWCXMqfpSX8BDFKsGugjsHxVnWpnjai6iuUzMCVcEubJPFN99mumQJ",
  "key16": "36Dy1LVohdeiEmtqZ59YqeGz6hVycZm3y8Hrr1ckYnqTr2mseLL3nauGRKb3xi2FknAms4Ga8cY8qqC3Faibq4PD",
  "key17": "66ZKVL2j7LFQiCXnChsrFwh7KyGHnbp66PNCLvoipXn6AwsFzYxe5iah1y193s7NDj1FagLWy4YKTGkByo1h5Qro",
  "key18": "3nk7GPogQryTwgghJYuWpELpSUJqjRSeHukwsyAFf7iwM38BhRVgNcViWaHXRDZEbMmvW8SDj4SGH3VQQ974eeac",
  "key19": "2P5KvuFCqx9NGn9XwQ2Vmpi5GsjJiBzztyjops4b1t4fQsUEqzsafPvPhk1JJ5EyeyJgcqbXRVDTtSirbQrpUm12",
  "key20": "2B88nXwjma1rYfbEiDeRHYP7moLSaKdNF7PCBRKHoEH3McZZCxgNC7GmUwNCQBgT3MG16XxjFL7uCyBE9huc5CpP",
  "key21": "3b89hX7yem8QZyDsopk61vpF1PaAcnD75udA6jQceRz7DMJcKyUiYi2S2yr4msoWg7CBuDKnkQz7HXkQ9cxUYHFg",
  "key22": "2bR5vHFprGdP1jfA36Cwy95x4r4t6VVgyUCFDc93rbFSJnynXBikFMibxFfqurjBqiy2PX946a6YTxabrsWPYegY",
  "key23": "wBCaCX9GXG6FQLgeDJfL29GHKZmvEmJFUkSdaifir2BCPsQssrMAsADokjGHezgJKE8va6BHvmMjyJL43oZ4Wbw",
  "key24": "43UCwaQAWFxFFDHknU2mobRpuVFc6wWQtUVLeVc4W9hAuJVWvhFqxoK9eqopC8EUYnqp6NiLS6S1R4hmx7K1UtqL",
  "key25": "4aoEUqBGztrBPMuVKtwAzJBEm5FTMMoeHdDwT1X15n15EEqzHbYSrv7uXMWb5feaHKjKWR2k3rM6hRkw846mLYMc",
  "key26": "taUmQif3nHn5LirRvhRMPSHYSrdC595t81c5aHxhyssPZRCzEhQM46F3F6e52LJnPTDxqXdYx4pMBiuEkk7RooK",
  "key27": "2mPUKF87qJRc5D8yHA6wVzREvzHZVs6f8m9KyiH4bvMgsEZdiUmWqJvqQfeDjdQJWVBBRCtZ64vmRpH5BgBCWnrY",
  "key28": "4AJTxoow4pUieW55aX672AVaUX2jXiJGfQ3jgPvzxJhZmeBWXPomU78VQBx5H6ZJ59GWwPu9wrZmxNQVbpg48Nu5",
  "key29": "4TbFMaUtMCU5P1gjzfRqE1pRu4xBTqLNdMYF3hs2dLeMvDJMwKUmWoS5ESx6TqyhEuunjid6ZjQbDnqNuCRcaoTJ",
  "key30": "2B7dVc74XKgonNKZufeYamSKXWauE9oVViN2J7KAKAvTF8Tgvxyi5WZM4vFDyqBcur948RnhuPcUvEohWBQFHczT",
  "key31": "VgktCCz4GgbdQ1bgsZ9S36xbaj13hFDxLxiLo8F4aJJZ8rtFzwJi9gC2wYxc5WcW8HKtfKhew3wXYaS8yAzwvc1",
  "key32": "4VHwcBEHpcZTyDaDBCsmdAbChAmz2W8eDBDdhzpRq7ZAw27rCSE9yQmPTzcn8sCdoBtguq3zRXizkKCpnDQrAf2M",
  "key33": "fRuSAbCx9WriFE9Wb1BBXebBC6sPxS9mwvMzzzPuVgJF67QeFaao731iCS71Z4v27nskfPbuPWAP4kBiyH5EH1C",
  "key34": "4U1jksewpVJcHosb4QWuHVzGWmBmLBoiinSwXwEszhm2ZV94fqwd5tZtPk1g5ReRSmYe5SVi9SV84mrQT47ygvG8",
  "key35": "4Cy7TDoc4sP9MsPtsPTdbGmXLA2rtE6J6zatt91gFNKgcw9PSvABobiZEmghUcYvcxVvccaAKmoEfZ2GNtFDRwr2"
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
