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
    "21ujp9DPZho5m7tVqGpYyWfYtJjUb8b8zusaEYpTzjYSaUXprv2UDFrVFtMGDeHiJqxSWagrnYDpbMNBQFQ2YLuT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RdBhNSCMS36FaZ6zs3329HA4nLnsW4KAHecHoyknYoEWjN9UYVdQxQNseQJRuCFX1QELiNnWhVDBqZsu2eCzxSV",
  "key1": "3Py5pZP7RQCbV5FQdJxgoRshJpGoDoJJ4Vw4ihT2WHsCFBhpL9VfzTgNoy2y3wZhJqGSguEe1Tr9aDr7gDmrHjFg",
  "key2": "4E4tkseARo9qzTRY4FhkwYNupGgpNYoprr9AkacdiNKhagPHE72Beg92GKsLp8rv7XqftutLVjC22VjaV3EUo26M",
  "key3": "hBWdW5sYZpeWzE5E8FqF2H8YEga36sLsbKc2vPGBaauntsByu56SqFV5qDqqW7xaZvscXLY6ett57YSVANY75Ya",
  "key4": "3NiKczdS3iZKLT87RC1WBbah7pF5pFTvUsXyhHZfaXHdchrN7nmCuryF2jYQzhioKrtV3tFTDyhwhSKDguxjx5rT",
  "key5": "4Ckka89SV1SybWqqdQ94teNCXLFLyCsEUTF98mvjX3CCFPPujm5aNBxoWFWmVEwEkhe2VX8XcKwdEVvSDS125xct",
  "key6": "2A3Bkur5G7hxfTzbduhUQfJh16Db1FK5BUAihdRCya3G6UBVaAwBu7S6cb3L2ume1Ef8TLgUGtRn9FvjFLd49nJA",
  "key7": "49KEDjfgeQmPEQmwGrV1znEZ5qRoa4mgCt1hMCLbQF3YX8zzc4AiWsrnanvrggw7xbGatQ1TdGFLrhFgBPkKYatL",
  "key8": "3mxuWpqCzBB4S7jGkvmSTH8npQ2BnPAFkHWW6Ljww8XYGemPkHs9TTLZ65oMqWwcoB5SzGo2QTfXTDGj8DmJnwNs",
  "key9": "45Kh1yDKjtuBkkCdK3PDnm5JoaMXBum6qqyshfJPm9PX3PenMTWf4f3rQ6b2MdGrquq2E9xJ2yeggJtnX7yEJcPt",
  "key10": "3ABVqNaB3fdnpWqLJ67n1qEAhmWUxXDHYVVaQHm4GnYurkXvqYXz4EheuMyGZkAgyxEdXrfMVFigwL8CMkqEKdWR",
  "key11": "35UaxwPWRHBdd6n5r75oqGLeaq4PYnBVXmm2wDXd6WXMDx7hfHJCYECmXsGEr5YwisLYroC6YmGCiaCu5uoVRAuv",
  "key12": "33uqG52pUGHBcrcTmkpTPgagmrcpxzVtTiGWkajo932aPrCpUwQHfu3VZa6E71fDjQNwRT6Z3KdPC9ozjSwTpuGm",
  "key13": "2KT4yUpYFRM4VgzEugWxiSdwp4V7b4yQbMNv58N74wmVzxX1xQTddPkh293oAEAWExmaPK96zjK5mcdtnt58QkEP",
  "key14": "2y5uGGBDjDbBYMuRxSvRjCW2zD7HMEVe3RtgCrZUv6NfcwqTLy6JwcAoHTBbx94oPQHEDT2kvQrCi5U5k8M1LWdo",
  "key15": "2upKsGNWagGnGm2vkYXc3tYgoEJ65BgVYmYJAwb8QcELrPhWQUoECUwy2KhAmrMyGfax5ADQExA1b7B8TkgMaU14",
  "key16": "eaDMGu2Aj7PX2tf92yy6RYAxSyrZqMii8dRBVLnWnTabD4T4RUkNovfTKmMkbvnfK1BjfkSgSjjogVkXRWy6Pcs",
  "key17": "5s1KRE3o2nDezYRv6uqgnJUEvWHBBVuNnHVgnTKs45PRuCFnVT2V5wwmLCCVBiNooC96RzLKewXJyEUSVzVJtSBz",
  "key18": "3kMwyDPgCUFwsmQ8yBasJNqXVeN2mpD1zYRW7RYtt7Nj2sBnf8SX9ep5BoUg7ZVNXFFwvSwdd35xgLbkFjA9Cn3h",
  "key19": "48Z7Yjg5sc8uwMLiqLdWUS4iKBN4RvtmxNuXuZXnVsD1DkVsPuTMQSMVFb3uecBLGwY2EJhho4TjPJyxmiCAHkX5",
  "key20": "2PgyNBVQdB4WKs9F321CpW9NCr64auCzYNTp8R2nXNTA5D6T34fDPN9MFvs6pziZ3R8GrfRi3BF1ZfXCudY3tbzU",
  "key21": "3akxYSczU9eNvfZGw5DkPuKfed4axXAVPuKvh6wonTz3SER4xSoDcjZ4X4R1eqVYUiHYcPD6ixiCeHbL493Pkdbw",
  "key22": "4NoGnQ1mcv3sefS3cs1fMGY1GPJiGrAzwUUKnv5SKoyWy9T36pDWc8QQnp5cXL9sjrwwyB5D7szRbzQ2suQuif4S",
  "key23": "2S714Rh6kiJoxuV9GAcTi49hsXuMoaZ1j3CC7SdWdvP9FeAzgru9ZxTF5oiX7LtusVq2ppia425zodLWhQNiEAbM",
  "key24": "2J1J2a6DQfm3Dmy3ABUjwsfcsiUTeeTKDP8u5mMUBWSG8Yi28bHnjGf9WcbZaYLSrHKwMqjHeKuHLk3ryxfVuo16",
  "key25": "3t4N3Q4VZmDgDFUmYSwom17oRmisHWkThk3XuK2VgWTKjcHKPGrU8txM5coVVzhkkyJFS5ZDJYwbaPd1BNXxXSFV",
  "key26": "33oi64i9yBicDCsFuNf9NWoBF6vechRm3DhGVL7Bn3pyKNazY81iiY51QjSPDY9MJ1nBMQPXNu896HDgcvuPn2V",
  "key27": "2Nn68RKurNHqy3QNZYa4ZKrF7HkWyMzSbEPgeLyCGuL7jHPhzWG88CCrNEfYEpjAjCTKDzAdSKv7iYrw16Q3ZgnS",
  "key28": "5NH1yhJzqYbCJyeXjtRpY4ARsrHuUvuY6Z7iZLwKCALwc95QHAzGQnyhqXRRfetEKzwtWWcem1FBFAApSgs7zp6s",
  "key29": "3HH6BB58cYsAJnKT5pQcMCaTtiKSdro947jHkoVLFndoDMVMMxrJWhNn93ffLyngUVdE1nragGQhBuNjmWjrustb",
  "key30": "oD6BoZGVgTDaHpTsZTuu5VJxoNAZ2BmuAN5FFWtMxmgXPQ2Pkx7dGmhP2McCneSkh76rvD9F5eb8ukFz1pkJPJH",
  "key31": "2skq1gX1dgMJjeYZ8i7M6dhaiMji752yjBWuj8camg3hhTXU1gjVC42QcvV5FyXsPrTpfAmTrZY6WdvF5a75MGk1",
  "key32": "4Hf8rx7yE4QQhkje9fYfLHEJ16oXXtfD297dxpjwRocUYzHdyfSHFk4UGdtzutBQ1f5ujUanoeF39EnJ7Bf8QaMD",
  "key33": "4r55mNktVFxje4XoCbSGps1PjntWzMnpoJj9VptbN4VEkSA9GjxoR4WDQFv1Kc9R3eCEbQpAqB1efNRt9NDiNdjW",
  "key34": "3Qjb8jWMEXGjSHSgWKPti9oj64R1LCCHJP39DtBqBkgdo4cjrHYhnP32dyuTnsHfsyu1BbjcrhDSiFxRK3CMvKZJ",
  "key35": "4zn2mJwEB1dD53psw5kLJAb444B3z8V7cDTWmeUKyfwmVjgq3bgJ6JSJMLXfeb7eVdqMCXUhJKPfqZgkiX3yhy5T",
  "key36": "x9FKWimVe1YWGeSanafGjZjycDwsUHXE6EWtWpyjnftWgcVkoxrzf2Pk92t8owT6yDmuWCMZdxN9hcK9JMujMby",
  "key37": "5mufb9hNuCjP1WyHqXr7yoqg5x7nLsfFHE5BMRsSVHMFuTHxZcRJX4MQ6tNmLmnEbrDKVmtV7GqwBXf66RvS83qz",
  "key38": "4NmYw11JfaXNCzDWoH2WVCEZrpp3MA9CQM6DTWKegSYxa6QTDL2PoyC2iXZqVxBiCLUeV4UzWh8MeY5vgQUZziAA",
  "key39": "F7s2YF6WafsFGSqCf4sb9aYC6uhayKvRiXvhZBH5h2u1db5QRFmEQ5cwgGmFYFm4VzRUmdQyRYG1pFyRd67z9QJ",
  "key40": "8itJB8MSXpJk7CBrud5W4pXAcgSdhMPefbCEfMvNBNtsTG7Hc8yHY7D27TMtCZMEwc9uHTWAyFyzs8N2NzUptQv",
  "key41": "3dEPngmaEqU8QZq4bup3ZG2AtD6T6xA7yk3rL3D7Zptbv12x7BzX8S8gHFgo1vns38Xrb7JjH5hGYCn3wy92KrFM",
  "key42": "3Y4hoTJowyoswDJKu6K82uWid2FA3B5PJhjWDBm2NB6R3yabBc41vTxRdi4x81Yhjw1yy76MFksWEdaVn6PErwU5",
  "key43": "54aLzhHoZ4crnrqkeb3WNmvgdVML95Xr34gNp7QAsCQLbXjvgFWhZ8fzRnhMwbd3pKqez95GekjNQvWhynVwio7D"
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
