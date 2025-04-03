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
    "3xTNWBPnHBtiXraFkxYhsgusnSqosE31JW1n4m1eM87z7dzTD98WWiTPdBomNxXnX3i83LX9VyAYeAyJGQ7Gmhq3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UmYPpjADmmpuFyhDirqzbwZg84E7pEzWNxN8ztdpnb9yZvZkUeHQXdPhCsCupYw43kYiAjo12V1VXTuCCGkVM91",
  "key1": "3pxbrbfcvgDzbbMByM9rd2VYQbruJ5TFrzbyCTBZ2bpzMZV9v6eZqQQpeaQEZyyE3TYLqvjkjvCf96u8voQBNcat",
  "key2": "1DDeg153xkVfmoNcTqRiWKksEKuqF6X3iR1QstgfsADrCMe9GbMPBAxR16joQDZygmkhgXuhYjuawEkxYrAecBb",
  "key3": "5TedpMMAZoznnEuzJJeShEE4eSYQAynBcTuEJ6NJfEFDrFigqcZxV9n6TAVVXTXCZs5vsRuQS8sDeamQZ3aXTrWr",
  "key4": "4sHCZ4HR481WV46MzUWMHzes1crxShbtCx7sxP7uQppU1pq2VQDEX9XYERvBTyumoFgB3fLpw8oCSJPBpFdjWWdu",
  "key5": "5uzddoDJonRChk23n7yJ6T9mg9wpN6mS4butr9M7rWuP5yeWVQzr8jRNC9B9Rf5dyLJEDNbUHPqfnh7Zf62CdMT6",
  "key6": "5EreYtAu9TGEoQZ86w21jj1DzQaycwRXiRTXt844SLp9cxgXQ3oiQpoSmBs3WmFCGTFMwTim96fBJa1DZNc48erJ",
  "key7": "VgsLTpWaX6e9B3EiXATJTvzUDLwrS7tXHCiAY5UMWj66V5asWNcCD2KPQrFTs9NihLJpg3hA3TJcDWbX4wvc8bB",
  "key8": "4akUL5NSSZ46cqKxde2WYaiiU5vSStftsP7Z6J8a4jpwQZVGyyE1TqS8rAcF2CMxvmpzfAiULEKZjUMDQWyM9HVq",
  "key9": "2AWnbMxMuWUdfYjkAGjcdDaFj89tQU2iwMBRk4AtrNwDzYnk4sqzPE2FsbGHbMdVCdfA1XP3MVMeoPYZSnUZcR2w",
  "key10": "4sZeBoyp6izk1hv6xSKDyzbzznRpnekTmAmv1NKbkuooR1Pjmijq94hP9geDd8Dmbd5Dsj6uRprWiSRGAVSThxsz",
  "key11": "5ogKT7pF1JviZydC1SMFiJMfHfDgCzmozDtqtt5xdzQdgYg7sg7kJtriEi4rzqY3SkK5fXye4KgEqQVDgySdRhyy",
  "key12": "3gAgVCnPr2H9nGAFoNsf8aXcA5EcEhfEq464KW2fus8rFMVLJkZXGX3D7e1K26A7ppu4DU28H4ZuUQavybFcvUMV",
  "key13": "sGDWMfYrfZHabCN4sLKsTn5LcSHSriTd79HU1rxADLZzotQZYod2yzW4ainiAUiaV8sMsrk4EvvqV3hsEyMXxgd",
  "key14": "3C92h1PJk6A7AmDbRXuWvm2tTSMcuCR9EXDPV6q4Cuf7jZBVuoom2g9MdxppqWxAU5pXapfEPt9is66FxfmCpHac",
  "key15": "2VRH8a42PAf1tiixYxgc7TKvpzREWeFW5LhifADeLw1TvimQ26EABgm4yyp3R7Pxibk8hNktxACKEeQFpKKigZ2P",
  "key16": "2ghqFAj9JTXciPhT3QrPiGwAs5mW9WKoTirwyupH4udQpqfPvcpVpvkUEFeVQAYmaFKzqgUUrqeUTiwmSzJP3HNs",
  "key17": "2LFs8eY3LHPxiENukSWSopiGJnEktrpJaeMomVM4E1rHoqPpDQiZe7ich3efMbDqc3JDvmEbrhhHL6dpQq37NKpM",
  "key18": "S45YTFReuPSnianjiBB2rFYA931UFnsCbxRopumEexSGZrd49eNxeCizH4jreNm661yhYSqH1TzZC4FTEsBjoEn",
  "key19": "7gvjeYcVgD4gCZ5L5ormMHyxFudwmi5RhYKCvbd33AsYFrR6a6qenw9jY2u2jZdznRPY3FVeCfKzrwdYJRojS9E",
  "key20": "q5nwnsE5xRtJ7BAA1frcS1tTrGE2ekmBuhqmAJXCngHerdxsaxqNtUyiAs9vPq4z332U89SfDNizDB9UNsitm7j",
  "key21": "2nYWG7qcCmjRd59fpSyvEcmijb2MBJAqVrgt4MGsTYEZ3sHnH14hEV6GNYkLR1zxPRhFh3yuiTHDAB7pwHRMHgWk",
  "key22": "4nvs9oykYJKJTAQq8aE8b8ogDB9KLigoP17pxASxZkW7pv68T4jmj6QWmshU5zsAqAmoMcsng5sViqzjB6d8St7Z",
  "key23": "42JSDdPdM3p3EozWLAhSyGs2HHjgPNnXFXinHf2xrfuGjZwtFZ7gt98caa9K3UQ2nBQ3fg5BmTWJEtvFhFHxWPa",
  "key24": "3gFYNom4DgNSQ8qfuYjfa2oWjYmRLnXsrLmy9AnvQQpW1JT5gAjbbx5wPZeQXUCN4Zy42cC6G1evgT76j1jpdJrX",
  "key25": "4He6ys9jdoiPQSgboyuvTYm6hdcaLXSMARCpqBFgVpCqcj3JRUpB621ZPB7bvNvZUK9s9adbfscJJkvSAhB7MhyM",
  "key26": "3ee9WuW4vncPQ7ibbSV1YbrektrgvHZLGwW5uaFCfNuF1N37Qnt637aCMRYJQosQ5VgnvS98Lp6ae26Yv4bRv51B",
  "key27": "2CKwdReXzBWXnLi9L1XbBAq13Z5sCT4QPVXfSkSk7aN65Zk1i7SXsLjFstsPnjtQ7yZ4AsVbQ1XjwKVJFi9HuweG",
  "key28": "2Lv38UnArmGLeP9ep7hoAU4qcXnaqRCLmS6UqLJeDzLgo4TBYfrbrmSFdErChSGFEP41bEofxCPKqg2c7fZEzPXb",
  "key29": "37dWsoqFxdJh7Uz4xeFhr6Z6YKpeQRanWpegeUCoREytSJF2fkwovojrYPerviGp8wrZTaX4axRRmDGBe5Ed9f1J",
  "key30": "3JWLMAxJoxUwMcFWtuLgvjgmeWnVboEk8kawaK3gP8BJiKvAaDcgkXyC9qjU15rF9icrP3UmLYUZyhPEYLvrbozn",
  "key31": "3SELWXJMSoUVgDH6o5Rem9LMbmoM3Nbdiuhwjv83XBrW9gj5sdaQASqNXHntUsAptog5EuSNbYxWD1FAfnQtgEdS",
  "key32": "5WDFW2sKzdTfWnSu3WEoq5TZayF7SKYMRJY2LNWf3zDxwmGTPx8WyrEHvArgR7kgFhH2h953ekkFwxRjpQ6EYeZ4",
  "key33": "4dmGLkNJNSmJExBVxgSz3vDBByWacsqxW3HtWfiF54oQC5p2eVUWyHPoroYv1iuiibW61N9G7n8wSUVsKhzv7qPd",
  "key34": "54xCVGdMwEsykFUqX97JRzf52PP49JqyKGspMkCdJFHZ1BewzBZXbBFbJm4Bu7o5jFaddr55XzTfnpqunWDHhGms",
  "key35": "5nrxzZhusqeh4uAHoiudQBjgbA9fxdmjBa2hszAiVhug5Uu597BPPMXiY8QZVi3q3YAyEASeGcyf4MRFp4hY4Gwn",
  "key36": "3vzMdCJB96zdtuXz1f2cTwGJmCf6UsMkk1SAsLrA3sKmisUK1YvB2L2Bz8idJVw8Ym3Am1jpioWvnaGUc37Qk4Ct",
  "key37": "2ie6gAbeiiZ9DAut4H5LwfLkWB2Ukj1AqqsrhBQk8WW6jfcp7Lu1MFRSNbci3rcUcwPzr12kmzygmUNyHA3n9Jg1",
  "key38": "2Lor7YA985oCudCrfL6VPb8W92edwZQXKRsCy3hksM9exQbQRPj2z5S7QBo5MZydt8UcyYxTXGXmXFp6pRrSoGSt",
  "key39": "ziStXv5jygapRxvgbxh6QrBjxKE9gJJo2GuNPkyx2efzqKhp9zfeGweFPkvgpUuC9auqF5h8dDK7A6nopJatP4T",
  "key40": "4r2QgLWBvNPWKxLF9ku8V25tqTw18x1t9ajxVTpAfdSXvzmk7SJjbEzMLjo9SfawiWTMpKksEvMMokdrDqL4Qtwi",
  "key41": "eGEQgTqfSfH4T88vqW22ZCbDXjkC84CK9P2CyeTtJebfmB8sAbXD45K6pnYUEZGQyT25fa3rhPXC3vZEPGaHf8W",
  "key42": "ZK6CYVTZKWbdsf1noTkE1Hy7FYH1B6xduCjZ6Q1qVCW5qomyGqbVc6LkxQqEhKoMfryqGxAXJZGRf7jKcuaECrH",
  "key43": "5DQcwPG8BFDSjNyjgLksHge13xfxFbHJySUuikRw8YyRi6q7v69VUqGMsmH4KCyQHT4mTqURgrEhhPX92GA3NZHL",
  "key44": "5A9PLsDTTdC8m9FJQLK93TtpfAGHAkne7XSDxbMu2i9HCKrEx9zxGk9cdnbVeTixfJYdLabppym596zz4pGs4dkd",
  "key45": "2imoLiJJ2ggk5NxxaK4Va6QWkZHTd6rXabJLbytDEHFq9xGePRwB8AnNYpF5AgYJ5kksTdtEUth2MeRWNR7tcqKS",
  "key46": "4kuFcPoqy3QWiLHaDKyXt2vUCyEoHMnkXSPLyfaAfdfkKa6xoxATYyFWbtk8iw5fxBZRDvMfWoMba3jS5SAkqKGd",
  "key47": "52eAn1JKMDBxn8w3jWfrXo3Ee1srAd7YAzwktV7bHhSxrMWZaebRkzFPBaHSCQ6MiEEz57Fdftahw2hi4T63dGuG"
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
