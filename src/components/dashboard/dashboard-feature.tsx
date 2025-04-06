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
    "34h59R2imWhrKf5WHSQH7v5Lk5mguswQ34Fby3d73PmBdfS4Hk4fhwn6ZQhyqmVgcdZyzmC8CqkhYFB9uX1hrCUv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BxP4BYKYUWe3g1z7pg1HYYduSMpWvL5QzGv4ytDx4ppopXmnaYk3ZBTQ5bQV7ZrBGZf4YJ8pPJxVaidhg2TRq4t",
  "key1": "4aEZCh64CadwUW6AtrnuodeWdDerp5y7RmLQ5EDyJFUqfccs4U7wcTPAuGHqiN8nrn9QnMP1SeWGLCVWEGZBmrXJ",
  "key2": "4VKSuqSYvyAEVJcovNx9tqWTwbVsNJPtCnda5i6e3ENioe6eDjRmcmcFjeT5Gye7zEZAKb3MrRiZpQwVZDt16HUZ",
  "key3": "56KydpEc1AP8naCVARyF2hJbNrjRV5HA1M9TKUCbmVobijEtHV2knJ12FDvTugfPCu4gZ3Het2g1w4fQHv6CD96W",
  "key4": "48raZUE3rypMby3qo3B1Umu8Kzba84tjFFWinetE3bWiw1viSTSpkJXjKSU2GcEL5Zs3Ebu1zFQdZ6KHtv3Dm2N7",
  "key5": "3Zo7eat8CfqdbUcQwCwhudSaM6uFxaZT4md8xLXSn5P7Dbbc9upySuXtsxA11gHvRV6KqoJPetFT1xktkfR7kc69",
  "key6": "igZBzXxMu4Xr2UBnJcNLx1KPdAMhc7vdDwmMrofisqS5EzM8ggwt6qHHUJxN7bh7nk8QvM7BVJ9CCzJz5Ks9bZL",
  "key7": "5dmqmdTGS9KC3L4KPCcgBJKMBSgcchwKAK6T8Aa1sNJCeWHF49fozxy47Vyom7h6LhkxqjcMBnxuZxSYtTYKsPGB",
  "key8": "2XEbxx2TSdpTANCzvRfwV8fKfeDzpsvTZ5fRiCF8skJEZsoZiPbKbxhHftYnYmoxPxNUk3AXRMFhxmr1qqBrQfW7",
  "key9": "2yTwY4PJX3EtE76CzTZo63suTY4JHuvqkvDF8PbDDdKit3mRW9AsVdBzUbU1Tfgw843PUen8Dx4agsKm1HzDae54",
  "key10": "5tvEjpaHfNS7WLq3kYj2KmaoooQo6mLdkFT3SJTZhhUZtpFnLMbGXSaHUELRm5PAd3rKU5g3CL5BYH9Fk8xXNEtD",
  "key11": "4NNVCync7AfqUUdehHhN3iCArDrA4A39s96axtAjXtnBATK13KvTd1FLxXjhryUoNR3W9z8PZhhvPXuf6ndjgtBH",
  "key12": "3qifJh78GBhsg54WfFiUXXjFGsuaejiTiAkrbEkPZU1eHbLtEVzaetDG6sw5MimWEaVc3VL4UPL5cESoSdZk4E7R",
  "key13": "2yazUB36VeNFuuAsuC5GJH41KQaRGWNCZwdX3PVhZfNxRadtufkkhFtVLuYxHzjFw831jtVGLhj4zzNA3yvDtdTA",
  "key14": "5c4ocTYxkdkM6cufdupZPHSQr3ctCxjB5ed9QK7EgAZ9RnjQDHjpzDcdSHinxADm7LFBR21j4RxYg7oyJBpE4ih7",
  "key15": "4Eh2MAuwqYGYEbhLUvcGr1G8vPg6f7pDicXkFzJWpF4ZHX6GbKkpi7EomHcAg9eKZkKzE8adW4UCuwxs9u747yJZ",
  "key16": "58sKerkUSRh6baQq9PfpaHXRJokKAJvGf8JnDmFdyM1Hmduir5gUo1ViibJ5pmVLuhEFC6vpASaLUPWDR3iprVnN",
  "key17": "3kNQR8NCQ4ZTYHphUGwBqSUWJxR5tTrNeZekv3JWqHqZzzVdVFVn2UhQKjyeCft8TGhfurPYNCj5sYBvRoNWypru",
  "key18": "2FiyHCvqKJfFY3DRqARDoreehkhV5poE53RQtFxh2sQ7iRmhzoAe77ab41cm6vKt1eYcUhp19ujzAtWY1Ns41oCL",
  "key19": "2sWrntMAhSaa4NFMYYxTAdjHX7xpkjWv3rqRf7H9psNfj928UQkEgHfn5jWzrV44hoGQGk8yu2WLAB1hjbN6ybLs",
  "key20": "23oitXF7eiGBSH3PLgUv2Dxd58ioRNnqsa6fC66NHjQC9kBvGXeRzSi3FQQrnn1Jc9q3eajgvdvfGhqr9r63vVms",
  "key21": "5sqrkurWrcjRy1UmYSEbcHYkhB1cb2wSBsRKR7HvU2bomY3ifWV6MVD8MBLQcCKisJ3wZxwTcRNaRHDmSWLETBh9",
  "key22": "2sDbnVJ382DuJzHtL6dsgtPw63NCFgNBsJnDFRj9Zo2Rq1kabJcKQt8saPS1o66W3FKUDZVbMTycFKJBsoFE6RRu",
  "key23": "2TgDTQmTNyJXZz4MhSKedmF7G1yatHj2BtrUzdVZpZscVR7g4gZJVu3TWpoZEbETB8Y1DDu12tZdRuf488WVostX",
  "key24": "3QaBeaXFJx2PQmhtRkNydNe4xDWnUGYBLsKm5SgBaWJkVVwrwgtstH3VMzfxB41o5yyjTjhWbFGAcZiHaC3Kk1xv",
  "key25": "5t5w6def1WQccHBxnKELHWdzbMfARVriKVegpPq45QjbcCqfizd17aAoL2BDHdRgBavSxvrxZxeNq3nkHyunrFss",
  "key26": "4CEqCU2bhwu2XddcjmrfJxtmeVUafmyUMChsHNMqdxo5oY7kUTQCQMht4HLb8YHRuP25MCv83Jtxui9RMC5TznkA",
  "key27": "3uu28ip71bnvTnD9j3AaGSbzCToDW3Zz8HZEtLGFsHVy8KjRraVHPX4SkGNXrELoZZTjYZAPgGDGKERZaHzZRY6x",
  "key28": "34i5dVdQtJuEv1d4HwTDTUZGbMZEfjCeWnxtQDZxBEZnKZR2tQuaXaD51oVFexSuVXMmWKSKgMHSGAxuM8b7Taah",
  "key29": "4XnB6aG9Zf978yA51x8E2e9usmB7u1jteQcRZtoWsi676uFqTrgMU2ZXTGQppQJorgEB2gVVQJcxSM6bbj6HZUDX",
  "key30": "662fRkYSrFQ6zHdnjmUwjcPM23gL9qJNGkLZeCfqwWMspt9fEnDTZe2SEmx8ea4yaVKXDMgZvEHhhKPs7aPGPK9o",
  "key31": "FDaXjtsNNCAb3PmK9qdGR9iUigwPLRpvVN62LYQXxvtnNkZ8gu3AkqbgPSvFdPVfeSPx1ngD6vDwF5KqSVqTPZN",
  "key32": "fqVcEULREcExTKMHSTNks67Rn6v1UdzJTC9MA5oVV8S9Kw6GRXjsYhYm5s7BRPa2B6Q485A4im1bk6myUqs4DGU",
  "key33": "5BBpnBQ5FYvBsH5FU2JhV7XgLcfoScs6eB1M1qpak6nzDtY8GEbDFX365cesPy2Tkigso4hL3yVs2F4WhMxTbrWk",
  "key34": "58TmSTqXJYKVPySoRx3GqHqPMin1yuGjFFedvZb6LNgkQWp1kW5UYPKh9jkexiiHuWTAi8f6ss2urxWMPq1wYL1Y",
  "key35": "pXLu4WjQhjrsL1DXp2cKrjAmaGm8kibuhqwGnUzdZSuVdJTtmtahqwryWDvzN4cEVWUcvZaTqUmsnrcvKRuXx2P",
  "key36": "5xUXqVgnFffTA25urZzXdZRfJMsdgZDg5xhrCEVL8j5RtNRkyN8XdNrDJep14xhbWe1xXgyc7bFBcixGqdhj14wb",
  "key37": "4ZirUFj28rVbSdt8h2ZpiVX65sGKpobRyJavFMPmKFMn1Qr7S451Cg31U1HtFbZgvFLMYR3ofahsCxAamZ9p18AP",
  "key38": "4SLTPB8Xoq4VgpgpeLLi1YLbKkAiW2g3BA5pxuK8NX86Et7oTjoqSUTKatzHE7kvmhe8csi6MeN4UprSC499TYqf",
  "key39": "5Bhy8yg6R6nitjej1h7ZAEisa8R3wyphB2TQLuZ2rSnouc3yGZxj2xS3XZVzxLjHzyK5jXUbSyciBVU2MVRMNQ4L",
  "key40": "5dEZt84rH5uxeke5e5HEEvMifDqnqRz4j3T35bnVKJLpdfRjEYFfsiJFiFgvHPXSUwqQtbY7gj55QMqMeQVUr7ko",
  "key41": "ipEzeV2QpZzp9utRdb2229puVv2eMPhXLWwaG8d13fpUwmhagNBv58Fuu9Bu2zsxn38S7ZJADRhDQp4AkwnYe1z"
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
