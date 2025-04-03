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
    "4bA4uhNFEy3GaSNdGwVzArLPB7T1ZL5qnhcioKmWvzsqTtZNK2TzDT97swuukeLcMF5QJRYn6SxFd74kTmCoYULK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LJFkcXyHosUPHNNzpNFxREfpEtHV1XwWYNAazKwxE6UpZCD1LFuT5HdcvbHcAnZ5Vi9yBkR37uLTVMh8AevQD9V",
  "key1": "c83VZRF4ha7bmeNdkgLuonhtDXqBMoKb3SwPVgR1WCXqwv2fjGvdfUyHQ44GkQ12KPiRHwPAsLQyzgDW36R5RQJ",
  "key2": "2NX21zYFyJPaCnTLAQCDBqnPWhhSmF9EKuqbeFqetcQEUqm9pA6gdRegVQX5jxpqQqFEog5a8LZewfawSFPcJXbh",
  "key3": "1Zn1gp1HHq7rG4HUR3w1owuDqYqQqtRktGDHy3tuABHifrydMnMqap7JJtf4tQTM383m4JBoCxcfnv1TT99egmt",
  "key4": "2x9rFTZHusRzhaTt8zTtW3J6gAKETuJnQTuWcT5NrtASCqRYw4vNAziFiGYkuBybRscdqourcX1hNWeAaexUhS67",
  "key5": "2GyLhjxuWvuTbmNXpRmLCGkyGs8yLMsBW9iQLQ2FeaaNw9RKT26kaHFrGWSSSeqsAMo2DYmNjM3Bg9vXz2KErnAE",
  "key6": "5539VE1x7Vy4Z9mhUcpamJXNaNiWdFXoHdFuSAbBJ3CLmC6GQB2BcPKGhSvceaknoQkzZATj1oBDGSqwoiV7Y8At",
  "key7": "oi8N78DyPN5B59F4GeTJfjnsFDScEqhnteBx5svun3aqjyVneDze164MjScNhT3ji5oywHdouGfm8EJq8JJrAAj",
  "key8": "67n6hdzvPx9PfTG2H7CyizfR3YXYc2pwz1pRY8Uiis6cLbrPteEwXzfWhHU7Bw9f6RaVTbDXKxh1kRAqQQusXdB3",
  "key9": "3RQUQDCWQ3DAaWbFjbLtEBLDCFEMBLsuJSNoa44wFG4x9uuAn8AQv8HpD6HX1cwK8hwgA4sUASjktM2hkru8srFj",
  "key10": "4VqacjRVP78sqmvb8d5YVtt1nvicuT9vdZsJRH6PnDnnPC5RW2AQneLAWq7pxaSAU33VxgHqnQK7pDtt1jPXQ1B5",
  "key11": "5iyQYeL7ph1CBeFXVCrpJ9mCi3A1Fx2uV2jhKWM5iiCRj7jrQqP5GDGmYg1Hrn8TeKSmgxC2omS5vLHQjExHxNBs",
  "key12": "4xoksppYfVhWGEDR4n8j8jmSZVtceDVNxeAMWs85skWWQspjwDMioZ3BNbMmbKGcDBrzyq2GgFobeuhqjyEPG9DM",
  "key13": "5iXwmXXd6cuNyby7mg5k4LoyTvradN93u9euCbPshzJd53FWAncd6xfrTtJRVPmPvbiD3eKN8YpWrUadr1tgfRfT",
  "key14": "3eLAyiEQcDPpCcGKaA8cUXugxXZCW5jZcpMmQuqweeaPGd7Tks3HN6pDQYMLyDKkD2fiC6nzSPJC5HMmNRLphqCr",
  "key15": "4zzu5dXCBwxJEJhDyEMbbHmYSrCN7fKHWAgfiBCtvNUeUWU2Ctb6ELD5VyaqPTc9cFHT2p4dKQueNKaM5aMQPuwT",
  "key16": "2Ck3jJCpHgvgn4E3gsPb5mQCYcwRuWEBxmeM3LZ4rReJCA93xrj8aPg4gZRprHyMXmfxbmidpsSHRep3qgBHrxMP",
  "key17": "3qpfxwLcezhaBfHsfQSZjKCp4cQgmHaJQEHNTEaU6FD4exFe2GF45odB3NqXd4AJGHM2sZeeCByGNhUmrAA1rgpM",
  "key18": "54AmnitvFNY7amLTCRT7rTMfzNSGLQqrkAv6eoaNsqHFk4AQfmeJWe4MJc5765oRymXNwcMg1LxLHWkVz7KfgTXB",
  "key19": "2VBaMkzC5qWu9k2Uf8wdWEJdGXe5PiaPBbYf2i9z2UXHStGtu2fcVoHWFmLbWsou6tLM5ENgMkeKmefEbgqFTaP7",
  "key20": "2VSi2v7yK4n62RJ7dxocRJV68YdCAE5kgnxnvfE6UwKTgtHLQi9mmuPLV5bP9HBVeKXaT6rHMJYH48FpG3hM4Wcw",
  "key21": "oZnLBKGK2JwrYwAghHACXukyyQECbqW1VnauQ554M3WNf8qiF1jwXH3Adner1QEEDVH2WpNRVcP1LUDVf96MgqU",
  "key22": "qNNRAxmuqvuKTsV1wxx3vpv1rFFFyfhzVJqm7EU4WrVnS1Pg5YLsBYnkT85bjfUsFdNwCfEzpj6L78VZQAeXRv9",
  "key23": "2tA3xevPWgA2cE5aPmt5Yzi8iKmjyZWtGukywMpU3cT6HzVB3DfApDqpXmoGLnN2UrrLtGoYzYCoxanYxgK7UVxD",
  "key24": "5H8zwfw1riNx4vJs85XXbBVN9EmjLJwUtEBet5wdyZoqW8dJvHqd1utCiF3XTAAVXHd47u95M1zXsbPJ3e1qayw7",
  "key25": "5ZwTy3cnhwXaptXVepM8QLHk1k675mLkwTrwk2dVFcTvEwhwzzPSZbZqocmJRxvNmzXkTwVj8bb4vForDmS3MLfX",
  "key26": "qDHt3K9cvZy4EhNWi8Hq9EEuHMsJ3TzDhHM9oreBobt6hUPnd5girrGQfi3RF36T8eAHNGd1H6Xgr8Pa884kXKX",
  "key27": "Teru7qKbeGLwfiGpHH4XKS5a18BeQZtSUNCBguxYoFiavg8E3LFGkNWZv4ozBUAstqjqKDMzHoAxoZRD5WshQia",
  "key28": "22MmPwnYFe1EEsXtpHBdPj5jwWg1EqBhEyGgcqXuFuKnPuTfi4hFzVSVRwhqCBKNwDYxbVTCDzLkUau6tAFbaz99",
  "key29": "44oWdWcJXDcAXkwk6Wya6mYtGHB7Zye4Ud6HqpLkMqT43WFqTJpfgnN62myRPPa9pRrAHtjgA2P17fqRe8g9FDZ7",
  "key30": "3jJ3BDEUdd2Vh7RWhxYXrDWTNLwPU58UR8vFw5BhAWmxX9ujmkw5WwdDE8hYpZvegcDq3SSjiHXBK5tHTYUHhKwj",
  "key31": "saqSEjrJeubQSUy4iLCrSAe9f3jjQbHLJRvyfjKJwbiV43cLNhuYptwsFbE8LQdYa3H5N59oFDSFXoyTG52eWYH",
  "key32": "SbnXXBFkCaAkypfwdvE3sDtST1Q9dG14smtPTNiYwzhkpMRR2kEUS94uXXRhi5GbFEBptwaJby6o3Jdz2udBztS",
  "key33": "5gd3BjGheNGPnedLY4iEDkLkMSbnqU9SR2RD5gGqPmT6RRr2RzgrR2Lq7NE1e5zwreAMV6kuc8fGrdENcdYkGDkb",
  "key34": "2wFvitUJJWDuLHYcP888tJVKvipMYfXXkJTAaVmAeisT4RbGNNY9uSpzXHTqvdaCKJWMkFBdYH3tefbtprjFMeih",
  "key35": "4yP9kuthcDGRsHoCrZrfwG5NzhRt1dTLQ7SjBL9zeq9gEvDfYgwk8eNEEh3pkXzxkyqZGL5S3biyQRbKzkv6hT52",
  "key36": "bFeAZdtZ9LTYFT5xBaYXKWfMRay1xPGiLKHRXDa3eqPwdnJvNHZfKdtbKSGr1zA1h56EfXXJatyTidhFwyzAppF",
  "key37": "5NoNW5dAfNpyJoD7MfyW34z9pbubLNYRUn4uxkf73HbCrHpGjfzjCxJS3EUnqfztZJzGADiKebVpwbXLf6WSP49W",
  "key38": "5gv5z2FensYDAaEQofKrCMcjaBNRyDbQHzEVYkPyigVtFZekd5k7uCGVkrpNoEr538n6drmJeCDAU34CTwCtx7vp",
  "key39": "xhnkK8B3ejc44GAiLnVHUtNC4m6YNnfWYJAWoPLmxjdxdmEzpekwiATyzzqgap6pbLs1eq27o1iHZnbXKwNr3UW",
  "key40": "2khhH88LaXrd2gFoKgrcjd5XiFVFiR3C4vea7x86jY5AHgnRs1VLWhL5LrrLvef1AFdFSsyA7Ps9U1yiG5WDXuCC",
  "key41": "3tBfm3TMWScsnSiAXRynUrn73L6gdVBarSiRLCtTRxZ4ZWxkn3SoaBtfGHdcbyHxJyYrzLk2vgzWxuRiDMEcUXEL",
  "key42": "43VpMhv6cMThszNLtij4huGJUoLdstgTEfbWozjgsQDnv8tSysXTWaP4exWJDvEXwMjQBkU37ZG7UcHYZhHDzm6w",
  "key43": "oFfy3RkVwd1FGs4vxnmVR6nmJjk5uzDMQSc2HrNzZAU8G5ec4haMi8ajXqQerkkpfTEaz5WfymidT1mwTGx5dv9",
  "key44": "3Lto5E8mBAMnwpC82Gq8LdmiE6WaVSVc3vdNsXNorpnDp63rrijHConQpdADLpfQpx9FHMS92p9ZrHqbu9R7RHwU",
  "key45": "4peYsZBzDViAyS2z9Y92FsuTnFZVcTaCxcLVEmhAeyJQPhenH48PzpPLFcvt2z2geZu9UPsNDV3H1vKkox7Q3ECi",
  "key46": "4Zfw4Xpwb4pCNLAxtFn9XfswyUHHEiq3SdFGTzCHmJhWjDoQgJCP5REnd5xQMr71oVovN4PDconLAStkwPPBe5xN"
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
