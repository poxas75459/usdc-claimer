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
    "51UpFDcak91wuFzdX6oFvn4VcfmFys5fCiWA6P5rp2ZiwVvje6q36tAWGUh8R49GvCPrZhJdyErDgvVEfT4didTc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fU6wMV8d5u6qagaGsV2JLhVLxdjdD23T3MjY7pidaytD3VFpdt6gZVCziTBKthUVRpjJ4NgYTJndmdEixs6sA7",
  "key1": "3Pd4c695Sfa7Y2ibnfGK8T2ncXgXrNn8EHoZBeLjbxDXA8dbW2rDNrc22mFFUZmjFNqYBa3EMhJ1Mz2dPhWivUg4",
  "key2": "56DxiWiUSNCGie1UGLmE1BmGsV5NGoYwyzbHiXvvWaXr4Z85un5G8wZYgfMMgWFoFLxgsBZtYbrvZ7tbCyQ6PAQm",
  "key3": "4XsjSXHJs7aS6dNZE2efu2GSzMHLZeHwtpC5dUhrGmum3RgeQ8a5mi62A15VBEAxuGoKgrNQJmBqvQXcXF4bvYqm",
  "key4": "3FzLncxSsjcE9AGZ6FmHA9CMDsZtkDdEmnQbmjA4NV27rn4VxjCuvr9Kz89HF5Y1y29j6NXCQrD5pLBjECiNpWnj",
  "key5": "4MkTFhe1R1uQYXCL5mPbEjfgpJ3FXt6jEY29Q39oF9uN8CWANFanvoUJ9iYsz4Tz4e1mhrF9B6TmrX7edygRPsjB",
  "key6": "4DE4jJ35BkqL4PyAKeUEtRaefpswV3ZbH7d7AgnJu9zGrmRZyz7QCFCA8cZ7TqufbygqHnyiJ6knRJfu4GUG7vSD",
  "key7": "64Yjg9rTyPF64kUH9VknLpqmcZLmwSQVRr4xHuBhMZWUHUk6c6qs9rvJgAGunWx1258hs9Df2jYNs2HecUmayAxw",
  "key8": "5Zm7S13PDN4urxeuMv6UCCMhiBpYkN8N8sc46xd33m12rdq9ssxgEtj6KUWh8mqAomqCvMK3rZKUj3kF41qZ141N",
  "key9": "4m72PNSnxfm2JvajByEE75wCaKPXpFuZEfLL2SbZGRgQCQwrSne6dohtvrNLBYRt1WP66CBp38N4Rb7rb1ZB6TEH",
  "key10": "4csssA3QZBr59uDxW6RSPJ72R4UVTTW6j2r6ic9XBCwEccZArA7x7waC5S85kBgd9M8TMAU4QfoKZpPncYG3VBH5",
  "key11": "318CD1puS9C8K17YKeWpPDcj2nz3rEecGTmerZSC8MUKug5UmsKaHf5WwBgV2utbSTH6dmhZCesWUw92U8kMm6z9",
  "key12": "3wSsLTDzT2sUSLRciGuToAbq4Ukvawb7umZWrxCnVrbzQM1SxLphQAQs1E94cUAipU1CjeUMsFoScpdZJVqWzxwP",
  "key13": "oENPteypyhWszAU54TKPJquEuBw11wGDGCu6UtTb2RwsgAaoETbLjMaKj3HiegD2sDwSQQRrfpR5DTMq5CmTgwk",
  "key14": "44sjDWAnMn4yAyPhaWsz63r9Fic7QHgrC6Ak41ALmmjvMfvdLzcQJrN9PUAami24cMDUqQnthR9WTohQH3P5448A",
  "key15": "4EPfvqqgLUsRx6derrmH9CGkgXtvG9GxiR2cYB6dYArQQ3mJH43aPE6RiRmENYywN1hrQiqtwgDemaNs9FqTnRus",
  "key16": "3HyebPhNQkq2B4zCXJttsQxtsLkiJQ7S2JY34nZwkQK9Ct4WdXBT1vuVaiWrX8AT5ydG4TkWcZx358M3Vg1rRk53",
  "key17": "5YnfzEvrGpoFFBgLET85PSB3RKA4chnUJ6BMJw7Gy5MBSsCwEDMz7pGVChamE4Ry4ehxXn35LKNs55uZrMRJmbSo",
  "key18": "4gNpS3NuaShvgxK3oX5upiTKJVfh5rtsqaXDF9GFvnxmohKKSjS4cSjaZ6qXYN5wD9tNrPbSuhQeBsHaHz5roUd8",
  "key19": "7Y99amWdSUwJptaSWs4SMNSp185HrdThfPqaF4ncpWayiU5cwXEQbo278J8tkZmuZnk4scyEsyauWBJPZGeSv1R",
  "key20": "5NV4ZVnEScLvmunkUTAuzVZFmhxYkL2faxzSd3Hg8wA1hgcSeSkviucVGQvZvzjehRKtYvMfHqyPBLEAZUFYtdUv",
  "key21": "nJ33q5qzTCtR4ZruAE18rt9vwXFCzypZEha7NKALE5sY8fDpTLkJCwbqypXCZx73tUcxos8UchyrNFX7mWJgDDU",
  "key22": "5cVs25WYhWdFLAxfQjiNL583hEKnkbhW1ZgzLvWHd6jXDXH9k3Gfz2M6CXNojDxJ3PxqsZFwmW12sdmBRydxoMXS",
  "key23": "2XRZ1Z9bZsqg1gsVQx75HZEubFLPT3ZtCbtj6Y1wwxEf5Zb3vx6WdrpHxvH6RHUoM8jyciKQiiE9j3NGXd8AQhH5",
  "key24": "2KHkMoQpJynZvU21Y8zXSvSNMy8nPQa99uCooB9MRxtTndUTUXJHvyax8LLmWZ3qXSMuxybzM8qHkRovVP3aBjX2",
  "key25": "54vUcXk1AAWL8xP1yspDiA1avC2b5YuvXjzAL2E1wdUrgDKNhzyfs2Kfjquqzcjy7VEFmsAjLVNmdKb1A2ekjpjr",
  "key26": "SMntRRyaMJqdqXLK4xbJZswtWwBQ9WcGhJchwCwemT2oATMtEHdiUAabQGQ3UGuvB6KkiETeVy1DFdcRGD92xAH",
  "key27": "2YD26MbXh6XmdLCjjHnuaeSSnhxhr8AUd9EUHF6rD2QaxfadUBkE8LpYaAn66WvTcan5y1jhwPS8oDJmrb1mKh6B",
  "key28": "5qEH9U9aSgSTzWE1sgTX46LWwUMpnM9UEoqpBHD9ti29cbyu8T3U2EFcmNbB522Jj2D2kobaeHXTuPvmb7VTZyFC",
  "key29": "4G1LxTkmk66xq4XEFYVvx9KZg8wxrLis7JS2h7Gjd4NqNH6t8pdaKMhXsbgWJuQVeNaeBNvKyBtszhLQkJEFTUW3",
  "key30": "47esneba4E1SZih3K66bH9wTmUtDsPWfokQoNY7MK2BNnNzHyya86trBcLfBkxhPQxVSi1VJBm9mZ9xvp5vCf3Sj",
  "key31": "4ZrJ8d1QpiarX6Vpu48yyqE4wa6dewSGeBhcorRC1duXkt7MEoH9yQdu3FCtHc4czcfyWDKJsMNr99hv4SVxgDFU",
  "key32": "3poKU3zSwT1unvW738cgTqgAwzTHSpd5Pya5acmWNFsJYL7MtGf2xW3upoFESrq7qnfbQSj8XxGTCRwqJZbXE6CY",
  "key33": "5BKNa3LJNNH9xKSCtf3PxE4rgKHmo9PFWcPgzTUtrHiFJfqt4b3S5FYPRHPTvj4wPTPQFw8dHdPpj8yqSpCDozL5",
  "key34": "3B1531feifESTrp3XkC58Um3CAN3sMmDYDsm5zC7RE7XLkFgE4nT7wBALodfxd6Qcgw9F3NuECWfDC2DC8kfoZJo",
  "key35": "3vnmR7HzorpYRQFF7dRz7eGt3aNSSrkkgSMoW6XPmGtSKS3zGmaRrPTcsQgeP7obBkv5pXd56kBDuyUTb6TwmyAE",
  "key36": "J5JgPXcFGsE62F31ZJzceQCpVK3TJdoVWDxSqDmjXpTsM4uwgPojWJCETtysmJnJGRrc3RJjhf2rweYZyjnXQ7i",
  "key37": "7V9rrpTh3KEVredBSa9HbPT3WBTsJja8y9TyMePxQzeWoWG5S3XT3kugZWeAFeczzB9FQfeUae2reUWrg84p6AR",
  "key38": "5edwV3NqeR57muDZ9xukeeHj5WctYDSNQdLDpxVJCAbfg4sZ8BHP7C4173NwKVkMwW6UUjXGDN7JeapE4ph3NWqW",
  "key39": "4z7ohm34kGEgKtz28ZVZ55YGV8QaRWEUxm9agH5M8AAyfpFy9BL78eXe9i1mHHpPix9oodfUpad1MEQeK4JqZTAH",
  "key40": "3sWpGgFHmvz67VpA8CwEE1CQvsdDDLJjqMeSXFx2iFe3vx3FrYwZM4if5phStuzAyYG6Y44H4By7CG9GJR2Xkqjw"
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
