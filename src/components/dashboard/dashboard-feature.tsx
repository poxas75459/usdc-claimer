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
    "3G2NDAcecrSpjnUZexkGnWFQ51oa4hGJ5FXTV3WV2M6jKwsr3Yjmoq1Bx4ReosXGEunDgC2jhBN97eStTQZpjryp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gkBAyHvMoKmZrsbBwxBCLe9ob23kMMFM75d3X7FBvkc51ykA1k13KJVAdyPr4VDKksU1pdX1iGUTEaL2Uwto8pU",
  "key1": "2x1MvVgVBg8JaQ93kCHcAxdYrxxf1txWsSGMG67HY8YrGEb6bu4V3begDR6Wgk1XNaWTnFKCzKot4WpzJTNUhdEi",
  "key2": "2gzzT6PvNhqCXLcrVE4bgEWTFXDLnwJbvW4W53tYVdfQHVoM7cadDxXx3Rb8yqCvMromsKTBUcVkC1b5NyxMC9C2",
  "key3": "27wZfBBPDM6jFaRnpCnf6nRyeztwKnypf592VsDJuZcz9uCvqBub5gPKenaz4SNzVX3U64Abx7duaVaipGzAgLU8",
  "key4": "3Ur7pMffTLAfirnxpeZMbfuxgcL6hpwDXT9FSJDE4hbxbyukDLoRnefFnaSyzW1MQRa6khFzow5RyDc4hVkQ3vsa",
  "key5": "4UnYQtJmQAUS38v5dgzAcHKa1VZJ9EH4SdNgMmsjsdH25y97Xbwxmz4HenB2Hh7zbFEAVFfxXvyzDdfSc91NpU2G",
  "key6": "2JrT4smvzNrFgE7WP6D87qPPyCUMPDGUQ6XSsy6x2fRkabuezau1PwdJXK3nQksYUnWnjjY2D7p1dCaNXhiqVHKk",
  "key7": "64UUCx371vMKz5fJo5hWYduccsb75bcfNUVxYJCL7yx76xad3GuCbqW8JkvmHVsV8jmzERhjz8CwLr1UGt2DsRLA",
  "key8": "3Cr48zzwhXct6xxw8if8388uoGChT2URKarsCSDtHuostQocbk8hoe2aMiytS5tpG9EHug8bnUYQY4NyfsZgvFPw",
  "key9": "2Ue3fqBcoinjhX7ybBL4aTY1Eu1bBJcEePDSuMnNLHfhadm7oJKYsuamXphnaKSdN5Zo11LUHMfDbZVnsyzY8sUv",
  "key10": "33xuKNjKHCJmVWsPxJ3SDHptERkvXLumPQ42c2kjBAtzvuay7hXoBUPtV1V22Cybh5Rhr4y6srun9rYVtbvM1wQF",
  "key11": "4G5AUMU8DEX8S1Lqb3g8DLNu5MMFYEqtsmSGdd7MTaozQMVrH4BXz8sKUYx8i1VwZr7kSVWijsQcfCzFKuzPhq7n",
  "key12": "3QdVSkhP4JDwAKoErTH79mxN6EPatZPPcMTrBiw5iV7gHdeCH2RrZ2MjF34rK6XVGoEFEmAzmWECZ59hMkGeQN4w",
  "key13": "4UquHakD5KRABgrDgV7CBWCf27dXuX1v49M3m6SYq8HRc8KoJynAeBndREzZaT4sAcp5HHJDP31FvmvjtocSFy5u",
  "key14": "4dusCNCc5HYWLKtMbHZKEpW3CcHRtMmWw5SfuD4FnyHF57yGr1uKJivbrrAfQhzVUm3Rtn3w64BRCTgRMCGsJ2yE",
  "key15": "4EwzapEM95TMrAGBfixvHN3EGFRvBftC96i3ZvrGQy1JnyGq2ZqJEW5L7Fy7HRhMxY5n2z5zBGpZxHfKp5hUya8p",
  "key16": "2Sp3KGAx5eX94D1Ammx3XoRmjcgWbJSTqSjRbVYxwwii6LqXtLUa8gvvvrAyA17T3wicbCb11VGgW1UtJRaqRhw4",
  "key17": "2YS4jwr6nzwK96C6d21cWDUUvW16PcFt1yZgum3kNdaeELUbfHXJjLNnNTSxRjwTUR7Xz5GKr9jaxHkGgNZt75vh",
  "key18": "3QY989ScXDkQnk9q5995aXmMvP8PyyFr4ogqQscy1W4Q4jiSX9NepQN5FvDPYTBWDbhCnCyVUpMHLJGuXEhSXVAp",
  "key19": "2DcHLfjFfTc8mAhSM2L1qPtQ2kW1jvWX8rTDBfv4HiaUf6DycqihLS7uSrYW9Eo3JgwX8LJtP34TCUGvSBUrTUMD",
  "key20": "2X9Szgy6RTbj1S6ZYQLfZfY4owpVAfd1f2tgBs6S4Wu7So9w8PvbQ137YsB5gYdXRUYPfrBkz8Z9HeLpiv1bCN5F",
  "key21": "3yGksjqPSWnVkyipGc8JsWDeedLdZ5wkgyb8pxNUaQnoASwY3ukz46hLSFuJfkdeb5wAeauHpfzHJ6fSchr8cScn",
  "key22": "23MsxbNDW39BieYoGbnz1jn2Noab13z89AeoEcAV77q2o6Myetb7AXKHirPM26gFf55yCoLjKdgNGVsyaFm593CK",
  "key23": "3TUwLH5RhdJJ9tXx8cGmaWV5eEgi254iAjhY3TatJshemNhH6bhTDS8HSQcExNyUfP1DygACCkUGxZxAr9qvtnrQ",
  "key24": "3YZQJiSZkCEVZaguNg9nz81KpPikghW5A26ppcD8YQnD6s58VCj8YKy3wcesCEwc1hBuQ1mn4CJdvPJFa3DpPzmJ",
  "key25": "4wATNNe73fGubgM8Vm7D3ZoarRPDNatnfWhHefT8u2vTkWNzFHVWoMo3adqB65P8KWmACifrp8JDnz4kXDCNGiwr",
  "key26": "29u2RQJK9rPXcCaM9AnTbSydj4ZpMK8GVja1KSquikFjQQn66P2633gYYW6pSvAeBqB8mPtCHgtKYWtmEGPtu5XQ",
  "key27": "4PYXKNJqaZqWzY6V9TohAyqzscypfodJQZ9fVpHq5e8kwq5CSnSfg3SZKbK4FDj6RkUQbsaRk7uBPMqg4b1iyVUL",
  "key28": "3iHTA7Qs5zMrXo5U4PeJSyiVLKLgEW5gupzNvNBnQu4ANWSFsu3obrtXwezt5ZmTVnokqNSbnK4dsuBZAAoQ16CS",
  "key29": "5guK55DEcNALTVuVZGoR3PzeSBogQihSRxzqopS62BdmQw8s6sZpuHG2gcUuisXhhFS4zDyHPHbWaubxNbHJRKXw",
  "key30": "uXELAA5EjqY2Eds72sPT9uVfUnuXXjaZ2fLhTDQSVHMGB2aS9yQRh6xRhT6BjzeTdZE4D8QqujiYRUnWAm6VgaU",
  "key31": "vbjLrBuVGLhh2wQ82pJj7zi7oE9xEeU7o1qqX8sCUEkZPpdyBE6C9JtRD2p2x9F488cHpAHdgxBxuNYqpEEfLnE",
  "key32": "2FoqHKsfSw5kjUZpVaZCsZpazqhYXKkvRCh5i5UTtswgJkKhF5XLdrakVQVphEhKt83i37SUUJnDkV4bvtRetVvE",
  "key33": "5avXSKqCUZe9wc3KNvrHe19oNUfSYV5PCXvjBshVSCQTL19HwtKWUisNTBd9YMSdF6o3DbMuGcMj4T2LQG9fbLU5",
  "key34": "2Pg4bdHQXHjQCD2nwipL5mq7T6SehV1Fk5YY1TGrxHXfEgcZydov7sW1SifVWao1RArPov65GMPfQJgcgAjBhkD6"
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
