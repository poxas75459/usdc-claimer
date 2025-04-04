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
    "4VhPUHed2nFU36oMriJ2pkqvdd5FVRUZevynRiHwLmw37sajQfrtPzxhFhyd3x29JjcFJwgjied7gWvdwHvChuwK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26JCKgyrekdEentAN6zoymGCpQXb1nQxorru85548xUAvZ42sCVz1j2fys8hzQBhxPRVLK9uj4p9W6ZZCaVMTsqr",
  "key1": "36JTMDoZ3jMX1sHJFZRHW3TxbuMjfhUopjiZP5mrZu9kKyAUvZ6oABJ1URQdZCoPWeBb9zY9jEindwJuYn97syR8",
  "key2": "57feafAAXggvgwBpSdZw2SvjtfTDaCRHxaFczm4J74owi3YGjtnmDXchgCEVA5YVniZ5au1zpyCPuXsc6go85ktY",
  "key3": "3hrvjQHvimiYnYxA1YHdwgBUbAbhtgWKYWFYfrs4uHKJGr5bRKE22zbooQHSPomESqWC73JeVrP4tcFFK1b2ipLr",
  "key4": "5UWyepxhWT177wuCWxDbpm2Cvh8ejwaEK4F9rpi4voRzJzXFd5GGaNwbGwKyH4CEJMPaKUF9zDK67isZgHwMG2ko",
  "key5": "48CBQSKmKeARuBS7FrdDy2eVJzJZ7Xom6xfkSALRuoqNSL5AetG3mVWwJx1yRmtxvoqC6xKbKFxvBwbUxW3Zxrt9",
  "key6": "3hWyhjnRfkUBVQbCwfuAp8EF226H4mBXjcZ6z2aiaRwpEt7mE6TGTM3eBM6L6xGKVivcm8bfrymv6ruyrP65htn1",
  "key7": "4kD8niCdwcTsDseg28RXnnyYeyxBJxx8VzpSdhxqANAQkdnQPSv6AqD1aisMkNgNa1VSxry9unvh2J69t2pB8SBR",
  "key8": "4yqgn5JyGryX1onhneEGFMNPSmQMiCt86NiwqDNTNL3CErgxjrWCzxsqEdsixBS5fRyiyNZwtrXJJGAor3jmNSfr",
  "key9": "rKfKHyLgtVRd2xwTJvfKmoy2Dg4RoVughKxg6hi4LqEqu2nm6ZSvqzVRUfD2HfrLksF9jZq8wPp6zh1ZcCkaDdp",
  "key10": "3QMjwkDEspA8NDLSBn4GATpaV7LT1TtAFj6nTvznfnqk6JPMvtEfQGPhept1wwzEjArznYmcsj3AD9n6U9ghMVAu",
  "key11": "7PxViadp746Tef4SkNUb3ija2DP6jSW84VxgGKmyRjeYp1G71cePUi7eMhBEKHErRaNJEQPTuPwX1waJW87sn2B",
  "key12": "4fPqYrqHAcVDCnQPEJnYr2Gk94LkwoZDCjtwXfVHbcSHc65aJTh5Zq5DGgo3w93n3fPALHTgZ7Q8P9ndFv4kPP4Q",
  "key13": "5JfMhU28Z8LuMsKbHfV2MGE6wJ31VX363rmGi33X2LqfLpSVRd4Mb8YsGthuiJqhrQbZ45ZXFK9whABWvSkzdmNy",
  "key14": "GoH7cimVYsjcGTmpRrEohJzuoBA5itBy7sb5TmiSXJdkhmigqng5QZMCKyCuNhk3LQ6w57PgFDXENwoBVaKj4xT",
  "key15": "iEX2TorFuaWLs9TgaF8pAsG4iB16cHVvKTMoGXFCthiaGZdkc1VQFJa8wSaj8wbP6JLZEXkM8pQzakUZtLreoTJ",
  "key16": "21ztpv7E6tZgrqmqqBtykk1j1VzxxTt8tmGtZWrzvWnemF4sV72kHbCzb1tiS1SYFH2R2no5n4v83VBY9z2NF9gM",
  "key17": "3z1Psc6x3nxtJf5EB7NBhv24f98fkxi5rVdmeiX5BD9nERszASmRHS8V4jsDp25JoDAzwPidW5k7oKTNEsNcyJHk",
  "key18": "665DsfgPdhdKgLYH7yjvgbZNVuioZ4CzdYCTwqaB1GFacwED8FRWBCxuZwBnPnTDgj8Lz4AuqYmSpn1G8NJWzk4",
  "key19": "4yvVYMYiTB2YokeJwdvp78PFAyLeV5knEtrVbSLKtAvjF1HHjTAJ4Z7YUDYKu74W9RjNn2Qm9SF58SJ5mTYFkF24",
  "key20": "4EQ6LjDXUk5fgVsT4QDQigssBxtvhXuhq8ztCvBvzg1Uw4vnry6qZ4gkLgfZXT56uuYarqphsTxX5fSbrrL8Bgew",
  "key21": "22JHu7rGsxzHCM3GaKhj4j3P5WH8EyrhS1BoK42LWFcPsmBV2PwrE2cpV176wTCgaQWXTY1wbZ3C34Vt21Lm2PQz",
  "key22": "5Z73kdR5YfqTDMJxgWsESd5XJcXyrBF4Drjo9nKbu8J7WrR3pR5bAWzdCPig43sLAzdgVA8PZnWJErdbvsvo1j5k",
  "key23": "41HCH674HmU4AidSA9BccUuuxGnFhnR1xq2ic39fnSDtmtwQRSdNvtzoip9Jv7xR4t6rUEVnf2SyZK8Zi77yXRMh",
  "key24": "5zvewoyZFGMJAMfMAhCkfCo1Ko3PmkWscYS7qru17WDcT7DwXJr94oX5wxuorJtfGutZDNPYMj4njEz5xEQmtPiF",
  "key25": "kJbk681bVUbKAHWdnYu2PxefKNMEs9diyyAkhSwUWQUDS48m22Ke9Jdy64VRCtqXS5BLKUALx31h4XLWEEQuiWC",
  "key26": "BmiesSmxu6uvhe7sdTxKHmvzas9e1ZFVAmVK5iSQAxDwj3hsUwBuFtaKpsKxMHcwzpyy9BLcTFcrmCgc9jdeWSE",
  "key27": "48RJcEkNsJrp21ERkSwLPWJpPHAX2M3kTdsQHTfDiZcr2czrd3kqNjsLWJXPDi81GDtZ1HnQkjQeke1J8tuCZ4sA",
  "key28": "5CigcYUA1Pc1uRE7WDgx7TbzZvdjNtC2FdtNixjFJ8UHTViNvDe1sJyWLMPncTNjryxqqw1LwTS96dd5qDCA7CPu",
  "key29": "2jmkaPnVVoRUW2MXeUPQ3NM7cY3C49v838fi1qXKdaqbYBfJknj6SodWvqWn7qhKhD6YEetnC8wjfSaca591KMG5",
  "key30": "4xrve4WBb8bfErKfnBRQobmNhwUK9vHAUwXs5i4o7bijJQEBHG8zmkwL6PmiAT81KtRruxgfSwnttQtyJ2AGcjMH",
  "key31": "4dq9FonWfJiC9s3DrEJjGKAD3Smf9pfzyQSucxgMhcobTtnNsCtuFsaYJkuvBCcWAEtwWRG4JupcA7zNuu1ieUCM",
  "key32": "2Kv5uynPpd5bbociJM3cs5XT7yJ37BJAR3xQvaeL5cWJk5iXPh1oKrBir1zN4FpDTsqRvwihg5jjwzaD8n7bbmuy",
  "key33": "4ZaNsageJd8njvdQ5Bamxi3sZAbwXV6LWmBn31iAAFuBpcwMX6VQ3MngvEGQXXJVpCcKzbeSZ1AzkTizNwBndyQY",
  "key34": "2zB9W2Fnv9AkY9G9en3ZQKv48ZvYP3XBFQVgXpMkaDXVz918jWdpV7rAvFihRZMPXyZzhP428FYt7XqzWDJyHa2w",
  "key35": "66DCVGnc77TSd7Ynb4KEhnXYD4FTCgkcSJ5hjGdXGW9HuMCyPn46yn4saGbkvXbEGGYeHBMTNNLFsUocYeQ33UB3",
  "key36": "5edav8bEG58wc9uLWj9Zj2opTUwETBWmU3Fw5k8gedkvHuYUcycdDL613BxQgwPCrvWPJdzekKUQfRR2D36GCay6",
  "key37": "km8qiWVPcj4c9yRXVmpUrqbSJuEpcqJ8PgFAzsj2A58fCcu8s5XWdQnbdsEQH1AeTPvKFShNGy1LdUpU5wyoFzr",
  "key38": "3JQhFueygd3PZHo4NvZHDvW5puWDasCcaBraKCnDVQcdDdLoWcFXAx8Mn5qgQnjZtcdd32jRzer1WWpEupiXpYUn",
  "key39": "5RLpNaM4ZGzVDkhHQJEcB17iiymWmhwV9UMdavBJkZMLAu6fVPBvFLnc3sr5tcp8sgzYSmu74m97j1meE9nkvjHW",
  "key40": "5p7kJX2gMDYufdnU4Exr7yxgRJgXvbDqf5czXjSPvFg8bZHwFWwvVivmDgrDwtmNByvaA5f9djVft9zfA7sGJs3k",
  "key41": "5bAzpZSf2u1u5Kp94scrkAsNEcLKHomGHnhTvjAmZ4P9APscHhR8CuBZq6CHTgfUti1piPtaQty1zFTo91oERY1A",
  "key42": "4b2expyZm4m3gRsp5uy7fw4nbq9j5WTfDQcBFK84shP8dZpHeEfzzV1dUoqviFVEpHJNh8ihuAnSeQ8CP5oXEMrm",
  "key43": "3xNUtKiAuf42wSZQVEAsHwRtk3Us8a8RhuwXofvadyJ7B13F7pNFwFknH8pGBxaRDctbbJVPaneoQ2CtRvNAXGT9",
  "key44": "2HNiMHNa5Es5RkTsxiGZ5SV4By2MQU7wPHszMHBmEdm2jnSMUGcnWAXvi2ut7J9xVoF5QqYAAeFRm7LxDp5EGx9K"
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
