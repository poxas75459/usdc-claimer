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
    "3av6zAVoxLZp5fkcuCicqbsXWR4uYaSj8Jxe1jghByn5fWroHgyXF26ZrHvz9krdfBcTj1Nw7uy99YKKtpnKsGgs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SnLL5kWa33FTE1t54Ao4w9uJwPexHkwiaCBrkwrEa5t5PmCX1ANd33jwwMegnRMCHzJaqQQzCoPDjCCRi66sCCi",
  "key1": "Xna48H2JNsjsRTPDeeE2FTHeL97CTmDdmrc3wMq5UwxkiSitjYqMWSWiHQYzaakN6QrNdynactwpfzGhmm2Z6xD",
  "key2": "25L5MMiRwFqcGqaW5Pc3CnCFZumatqnhm5NrYYRnxm8xgS5QE9JVujCeumw6FXFdwS84g2hM81rscB3uhcVDCemo",
  "key3": "3veW94w2RKkQVgPaiDRoEyQ3iSAv47RYWh9YMhWWcY8u4mnPp3WdRYoimtfyiwPj97Bwy5BmXQds6TkJ6y6Xc6gV",
  "key4": "EUVJXz9yVZh2n2mM264m5rWvy7KWumnxDy9xK67v2W8P5Zwv9VvF8tLXX1Bbjn2h5HvALCfWYLrDrio7sDs12KY",
  "key5": "5iucJfJGzyneYtsAZkvtxEjvfogFeCXcUDZxzfrritRQxf5aFRYUbN4s4XB6iVH3LVdByEohWGTEHCsph4APgZzF",
  "key6": "4mhPFe88BTbFYYpgSQVrwyt9PugGErV7KWPHBr1bNihSb46FwevUnTS19me4pNsJrcNphwwGfQBvfsFBvdvJLPYF",
  "key7": "3h6eMZqnXbvrkDceyQNLBzCsiFjau9juwdCpaYwwA7NTEQfeox2sbHXcjyx9wcoXLhCF5HTvnsyQZGaBZzs8LY3w",
  "key8": "3g8rGFwa5ZNRaRZ4JobNovs4rSR7DdPXSA7w8wfBNHaRqnw8pDvuJUxip71UQysSUi7b9yPp8LGGhKgMpXxr1sF2",
  "key9": "2YEchacN3NoRkMMPcHiQdz3AQyLQoe9vX2i58H7HA1McUmWvy913fKU6n6xTdmenw1aVysxxkvD1ua6oDAa5HnPg",
  "key10": "4zZnSsK7m7TyGxeGhF3zoQG2y8WqfuaDZjAxBBmmRQpA8ARrXRjG7t1r3DLorgTTCct6CcZdrcTwcFxutnM6dV3r",
  "key11": "5msoMP9qdSVSABRUN2YqnqvxzxspgWfr1kK9hK4VjjeBPRxqei2w7yUDRzA9rmmQqCjvxNwZmgw1LaZgqsTznaug",
  "key12": "UVqcX1B8zGYVrbaoAHK961QD4UszhKpia59uTRaBuTRikAMQP8fT28RUc3UmQiCTiWNtxxh1MQ7gSG2RHWS8wwq",
  "key13": "4iGEZwikwPJgXxKnoewKjqZrX8AwGryre94WBSmsQEFY27EoaphwTNawJqZFK3D9KCc37UrNexNiS3yXbZZ9ZiUB",
  "key14": "3zihvCQSZ5yyAJr1hrK28SHTavsTeSFS236XYtvXMYcSs3VyEqs4UfoBiwskEJTDDyr5MsNDViKnwN6ERnAHrFrv",
  "key15": "ngMtYtTtAXKWGpfATWEjmdHyr5oKWgX8C3UsKQBuxRSmm1d6xNGXC2LCz5vBy8de9xChnSztgVaQHdW6omFFd9L",
  "key16": "2H4fNFowGLv7mQTens1WLqRS8vi5FWNShBPvmoMhEeGwKon57GV9wtREcUfmtCg7fVAVmBFuw4rUVz4RUqynqFVa",
  "key17": "gFNz3mh7Ru5N8oB6YLnjzFgaReVQ2NRj2g7KxPZPwMNtjZq6z2djUKVgSBq8yV1aTY2KhnNd4UjdksqxysBGi5b",
  "key18": "2CQdxwCNxwz7jWpBMmybYba6ALPh14cU8REFVDr1FQzjRwGcheu1WQPikvKeWmmKWMowkZobnyqoGLRgYaPY8yJA",
  "key19": "2551Ejz2qVqtbWniL9myew11hybPWufmrMYjRtnPtTBifKbwFjWyE6KkzbKwRviNbJqVy9yKPRVX2MudFkhqo9aU",
  "key20": "5XXeiGb5BcPPH6xKSxaPK4xpqymyVXm1H2F2DAr9pmKDBcHcupGeUHxuY9hyqaKHhqCLdMHZnAQ5GDAAcpBCnTVh",
  "key21": "44fem7uMThkCX7JiJr7t17JnG5ztEFoi2n997PNByJxojofKxKLJmLMm1iA9k7aH9zsFFHY9TPwDXBgMZJK6oFUH",
  "key22": "37hKiyfFM1TPM2fxFkrxVAmsKzLEjivB81hkDDa5YsyMFfHSq3JexU73JHBwModKejmym2Duy9A28xqPmtuovM6i",
  "key23": "2PphYA12Ged96TFqHtWNzybY9t1j442o3k19C96ubNLjaGFm7tK4kNfjLwmJ66QqqCPHfiQBQPW8B99VU2paeu6c",
  "key24": "fZ7VRMwVtdk39A9fDVb9Zxjy6xroPbUsmM723sHbj9F71C3cGXvcDsjJ3jegtBVVKNsiwTjr3ga6ie3Y4c4ZZWU",
  "key25": "2vk4JcwZehPgX194FXvVFT7evXzdHHcUSwurdLy922rZay9AoHMxrdzsttGrQjqfyR3r7GZGAKRu7LkxyEDhUzYr",
  "key26": "KrmTm1CP6s35bNLjup98MauWSPceohSJ36Ut5A7XV4NH7eQGrJ7xoChnQXAm15MoG8ThCihxp4hdRTESGeQTTGZ",
  "key27": "2pNnNC68XoJVvDJ6mzQfZRrc1b5wLeaRQ7GzGUDbiKWidmSXLCJpn1Pc5pcZvCoZHr4Dk9sivGfi67KLBSTHJkf9",
  "key28": "3naEn4izk747EjjmnWcZimnnQrsGur8DuZ4MF5rMxJCAbZDVTZPtJvrNRTiuPiVgFbvoeWiScUpMXHdMxtBcLDq3",
  "key29": "5YECpKCrU6FnpBUzjBtkqzbgNGaumiSorPf5KTEtfNpdEGtC16wqmDmmoetKbJB74FoqCjUD9eBSz8R4DeLT63o9",
  "key30": "3B7udqgpDhfJpfWwvkFcuq1QEeEKPoWvGnZUj8qiG4wrCy2JY8Cxt3wiYPeyXm5rPxEzCMmbp1nZmpWFRc6sL2D2",
  "key31": "3r5FHnbbzXtMhNhcdVZyqjYjXYe1UckDTvVRZN1d8X1a8sUYMU2o4ynW3RXMWW6WdVxBhpcakZnMFNva9RYsabX1",
  "key32": "2sgrUyK9wN2LHBoNC6SL5MCsXxRZadAe8e4xFnZ3pqya7wWeuLjcT3TF8Me1G8nzNm6LJ7vz5NFaqFChph2T6m9m",
  "key33": "q7dsA8t3DUeJ1L44oSiY7oBd7YXbDWdKfRQGoTieVbcUaWMF9mFmfJ7vwfBLNFFqHaPLmXtjBJ3DtChv3W28RNs",
  "key34": "3LXH7HM5VHLpxWQmByUdWgENtRuhuLQJeic5DJ7scPbNC3A9NdWpjWziewrMWKeuuMpTFnNHqKNgqJiptfVnPi2D",
  "key35": "4FNc4UpWkutNZgXFPpQev1Qbr1HHJ781ipszw3JCqqzgvtxC3RdEYj2Ky9pPv6J3zEYutXayMoWRS8niU6XagVS5",
  "key36": "65JNLX6R2TdsLwruQNXYw5wptMhJAPT1iKfhR5Q6iFQK8DDctVsmPzzkmGJXV9SiT3Av94GF2VeMtiytbLg4PsQ2"
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
