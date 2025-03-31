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
    "5aF6PVz6qD4GypwhzZZGggnFKxH31fs3SnDiXH875iTkVhCsNbYse2vwpC3RLz3z4DL2YfMa9cdPffmQcoSPKngM"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "iVfZoKD4jtarqGxKmcij6R4p1jeUUN3JJ9sBWHwAh9cLUw7dtAAYLmP1PfvahHoza2u83u3pZuipn2GMC9NKZXm",
  "decoyKey1": "3UvbuKSn6prmGonsHfXT4jR9CDuqdoZX8T3iQiiDBU5UahQL6Vg9MswBkZbYHQBFXAofiAGPf7F72tDqfLXX6bGT",
  "decoyKey2": "4pDPc4cpvVze5TAY2pxxZabjLDt5wzcTtT3ZtTzNnH2eyyJPE5F5e6LiCq3kSVGwxo4nTGGzFonVCYDUy249EW52",
  "decoyKey3": "NqwoEoRYSPow6NgrSsjBGiJYJuAUYPpkkNzj5GxybCvbR4hqbb9nGzHFUsXHcoF3z1rRtrEreMWmVFJ58LZonxL",
  "decoyKey4": "23RgjKjtLu4uBTBAFSxuq5g5xNnWg75bq9xGzWubUbUAyHgmdx6BsNsTfWMmz32ksWMNfUAPRbR4TR56rDTkjhtG",
  "decoyKey5": "EjX2yXZCUEMTEKy858o5pCeFo2xB1JvVkpJ1jzyQQb5kWPw95KDeWv3sdp2rvcgVvvcGBc6hQjLd8gJH2b8KW75",
  "decoyKey6": "2GzcWEwhM5ViTkznnRPaLPDz14vfm5wkzyKWfEjLCCadGG4xSA3zxzAVq9yic4dCA4ThpYtPvvNoZUcfL3YDBmvy",
  "decoyKey7": "3VZS9Uyz9aburJYwSLkjGtGTgehsEftspLeN5Te68LKkH3c9yJtQB2wiprv9gW8Yb5X9VuLtxzbDMcifZZ9iTj8J",
  "decoyKey8": "in7Xj3o7eEkypR5dSRfjdBFsZM5NNEu7xTp4YBTH4sCFrxQjgDfhBk9g68Bkijz5ohWHByhLFypNBk1XaCSNnUQ",
  "decoyKey9": "4bDEbVsWtN41jcp1JSGvAcj57nVAtDFQyJbm2z94UtsCN1myb7sUg3goEkqBBrVxV2mhnYKLhzhCERb3EW5fpsPQ",
  "decoyKey10": "5eUQLKraKpEELKSAVCkCtEXUV2w4q4JfVCNkJSCjugLUyR2fx8rRsF1T7N4KmBLf4voyyrhgN494pgBGu4Ciu1U3",
  "decoyKey11": "4B4hxPhjyZyeYT9cg75jN3KhWJUtL5PEjY5eLasRvjgyRPj5Q6MfbKygs8DZ8Yo5nR1i8Zw8Rm7G1uAJGyHcThGj",
  "decoyKey12": "3ppwtqafNLETeJuMqnwNiALaBeXvZiPcvSEU6N15QdGBG1JhsZYNCjsGwW3yJ1UBUrXKZweyZLxEdNvV1By3Mwmg",
  "decoyKey13": "5EGfsPDoq9gbnAEgJ46AkGxrJtGUR8TXrmBJcEavm4FFUvfQSqwtrVMbkKdYZp5X97iUp7zhQRoLw4wgSkcS7G7E",
  "decoyKey14": "2PpfxTdoJpg68E8B2RxTAZvxAJDAwbczpjKmDhV6SsqV8FqEv1uvXFp2TBG8ateAnmNhNu1MGcUNhE5dm9ANbE5U",
  "decoyKey15": "5xWVuo54aKv2tcgtWcZgP8HM3Z1aHAc2P3PKjvnemJJ9yDqLVQWVFXStuLdJbfvcWSoszSSkyxfYefyubMocMkL7",
  "decoyKey16": "4NX7s5W8wjAKfyLhi3iVvDBFG7ngEohNnA7aX7B3r8p3FFpN5MPJDHArX3UnfDYTQSwY6gAAiUAkNKt4FuRkGjGT",
  "decoyKey17": "KBcoL2M5AKWWPzmMWu8ekFx8rxpubXYNBV7uiCEL64qrwgP8aaaQVrsNEpduT5VmnuPWzoTPGB7modbsVpFzbfp",
  "decoyKey18": "2qQXwrqns2wRgGEkSZ2FhA17z2kAdoM53oRXQ5sBaaT6Knmaasktpo2ihLUezktm4vHVBZgMyrVfrFcYYvUwpPdn",
  "decoyKey19": "5UkKvePHCG4y4J1p2brZ3TJWr7YFMQJz7ej4nJ7RDrZzQYzmyAujUvceATRxjRbzdAR8UGoviAmdZKEqMugvo9AT",
  "decoyKey20": "3UjibuNKdtUZSkcoaRfbdzDnJ4Q4AHUDNUu5Jt8tgN6A4PpgECbskSTXT4pP8jWMFSw8FCFu9GQMKgJszCdkiEMv",
  "decoyKey21": "5iuhcidBMpkFS27bhdUabUStgRJMkrEEbo7rwsdFoeEjowUuhUd8aPZfLDr5uUZXfeGNES8gAPar1HfUN89Q3VeT",
  "decoyKey22": "49DmHNfF73d81Bf8uvMXiTNDEpQJJbcHKYfPT45nKSEVjh3LyqLdQF1NZaq8V2GVaJoa8qezSfUk9CntR6dPVAV6",
  "decoyKey23": "3FFpvmWc5w9VcFrBtDJFPqEKjsgoUdF7a5RcEAYuA7738JRVb65rue17PcsJ8S2oBY2XvtdYXsT2VTeV3vMtDcq2",
  "decoyKey24": "5dzyqnKudUFNYbrNyyoddSHjS2n1ZeYSFwxfs2wHuTS95mhZrZ8nvawpnNMtt1bgG2ZuRRW4mPzTJP5ZXreBxqno",
  "decoyKey25": "CAmNughS98CLtxw82VgJd4xR3Ha9KTgZPWDhsb2XyCE9iLD2dbmBR8MVvdiiEjEExLS24e8NM5F8ncrP3a6iEzH",
  "decoyKey26": "5q36rz3W8SWwCinvxRck4zc5FNtCAWUouNc3A5xo2U1UpZDGvuNFqj7iGiyjB2YeCNsw4tskCUyKzBXDQ7Aoxs1z",
  "decoyKey27": "3JbaGFUAFyvHnD2gBHm13X2ZGvUGsdv4rvABH4fRV4U8U6YUFjZ8WFwemSVid3A22NCP7us34o86ZYqyRFmzRMyc",
  "decoyKey28": "3mRMRwzGXpMyh6s46UMKcFfM4RRo4RyBkdd8PBPaPPv3cetKmpBbHArzz2oETWJNYbcfeqKsaVnYndutNa3ob1z4",
  "decoyKey29": "4zExijxwr3Z8ZnBAmeTmPghdLwij7PGMpTkwqfGZpvQ3XMmZwba26QX7uq3vpK9jGR45kGDNhQpSpNR1atyPrFKo",
  "decoyKey30": "pr9bgomBPpPCF9XTW8oho8apwfM1BuieneTnWAXoeroo1xGGSbNgcDKYTFn88aY6rMeRYS2sCyUFayhHj8NMJ2A",
  "decoyKey31": "B23SRtdyRiMRTTqwSXKMP7GCq94SURYawJbwrWE1p3mntwsmCjXUDved8KynTfBntPpn8aRFUYbYUbwYbcdPBD7",
  "decoyKey32": "5tikSqwLJg8DpRLmmNvf3s8Xk6h4F81yQivxPQC2L63FXsoDPtox1CCVTqrTbzkDE1pdoXpUAqzm89jFEQDg6FjD",
  "decoyKey33": "qQnBTJv28Sq2NHp2qS7yGUHdUDC7ckyHAZHC5ajb4aNFh9uNTH23bN2gtdFEffAT3ygN8jT18vt6go6Sa8rzgjd",
  "decoyKey34": "c9V8R48QdGGR7gVMzTscvNTeCyF3qYUi6MqCb5adJgR2KHcovGK3fUJike5tijSSbK7Vux9k8U8SdN9vragP11a",
  "decoyKey35": "3gSts6nYdy6Wv6urYqpnQ4vTiVDx46xievyub2Ptc2KT3P4R9EWdY1kFBrKGd67QWdq6zV66AQvuaSBAjCNRkbFR",
  "decoyKey36": "5eZ2LWe2oVc1cosBCBgVvAU5MWDdh8owWPxp6S6k8ZBPavBPdhQEo4xtVZ9aPd8c2ACMPjkFHhBcXkDqWXQaLNz7",
  "decoyKey37": "24B9erzK5fZcfic7pEZkQL71emoey8qf5UeWez6A2nYyz6BgP9yCgYPkcPm82ubxong6igtEyTYEPGe6SjC8GupY",
  "decoyKey38": "4pAcgNcE1xfYKgRWRuJfndekQgTjqGZZ72wYrZ916X7wzttrjcXmzWz2YLi3sDs3r4MEw9Fb6BBf1Rs4vtwbCnBL",
  "decoyKey39": "5x9nFY496h7RVW4A13W8i9vMma8KyLdtF5KGaHAYFWc2EA78nBEgWDPkEvbfdZuVLv2rMnECmae1rb399Pd2hmZi",
  "decoyKey40": "5EY3XNnUmjK2rpgUqJayo5jSYj5KoockALqqfqhQHjuWTKMjRGTm6PhHBJ29LvWiZepzUw96N5iZ25SXYVjohBzy",
  "decoyKey41": "GgJMpD8xNLrt2UMLPwLMtL4LnuANv1dPEGpGffgvriHyGzJVbm1tCgsJsUgjCBZfKRfU9BrsjmM659ku7VNyssm"
};
// DECOY_KEYS_END
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