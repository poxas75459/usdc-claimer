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
    "2SBppTBnue3W8wUtbcd6KTXxCdP1pgc2XdphWTXX6RqHEBDrAcNTCD17MwAnfQK7gtL2ePDhWXSA6avBm8tCiW1u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2quSxWGqf4yFj7QUu66iNEAhnuMLz6LQwrRuT9YGsPK42kLVssvXFCnmsTQZ1drUi8FR63zY1i23yTRVFTdRMzbA",
  "key1": "3doZRTdmLc5jsmbST7Y12ho9YZZkiXopWahzCRQz1CgSknJSGZMqfwAnxqhcCmnVqGUkEjqrxhmqn3RTeV6dVMB8",
  "key2": "2bS8e6w3uGXEm2s1pz9tPWKoC2C9Bysesa4YHwoJHokM4JpvvJYhXLRekQhV6EAVcNswXUHmh7p5W5uLCLEz6ZRT",
  "key3": "QrSRkocKbQvd1gnuFebPV48LkVMoXMLVk6t9ojDXdx2n5o3CAkpDMyu1SAGBFYG9oESygnxe664itN2tQ4QndS7",
  "key4": "2qk9TZL7JQ599iZdcgvDozKRRFnmetQmjJfg4XZpKGLMwmEDVHiqBxZfq3Yn8YZrnS1Z3WXQ1yU264yUo3nZnQkm",
  "key5": "4616QqnqUuxaVCiPtWuHEhEquziAoGytQvb8eFyMg9rRxyDtAfHzoMSYfPQH7jhgscRLTmv76iZQ9dswa9ZP66ic",
  "key6": "2DnuSrLq61ptajSqqdBwXzHdVAZdNRo1BobwVfH8dm8F7MidPe57ypTzCcei2vsPpQkACVi5TTYp8zTv6Vq9xKQx",
  "key7": "bmekccysqk5xJ2TLtiX3skv3x6ugYXmawjW3abUhF7s98iL8yCVyvtfqstHr9a8RGT8WYYpEFGow1LHjLRHym3H",
  "key8": "3avCcsqBHqfCRcNFhNk265kEQEmp7STMiFy5iXFrtWyw4S7Y3Mypkh3X7wQDszMSNTso8MCvqcQLLUSE4BMe2SkS",
  "key9": "67EzhAtUqr9E5CjdnhtaFFn6GmQemsYiH3YZLG3PpnUo3mSirLYSPQFMCZ9ZVRNhXE9e9heQn7iZ9u8oq3MqHTVM",
  "key10": "3feLmyesEe3FtcvYfXNYDbThubVV7L5gWdAFWTAnZJQcL1N6uGtQjkZqDfiJZHwtBEhqd9orJGuL5ifS9X59iVkk",
  "key11": "4gw8RDFKddnXkTEr3hmqqqyj1N2cmZc4T1KHqEo8ucmNNRfkaQAhqqzhrxrQd1Zi88Y1qP3TaKcvun8yMa2aVtRw",
  "key12": "4HS36DAkaqcRdyndU1uYD5Shw4J1VTN8ftqVTKdEzEpgQq1zBigfFb8Vwiv79MXCNpeaJme6WRELQJiM6NdstBSK",
  "key13": "5fmpjtVKzzmwPyhvWtep92bMxaZvnrhSZPQuhhfFZj4r5R1EibEhWKoqrKfXQFn2mEz7zx2b6cYFnEujhX9bmki3",
  "key14": "HPtBSXkJWQ8qg5MCgoSwG8sd8VBWxzFytGyGLn2GfC46m8zfhS3rhSK56dsWvtJMq2ycT3R4ERF8ZBBg8fuVoBW",
  "key15": "3DbzEM5S7wS13jou8kiybnCcHEApZCMaasHubETySpD3dStsgtPBznvwu2iWJEbmNz6gsCsxtMdaGecUVdhxrub5",
  "key16": "3qNwxDMkyxQixMMVYG7L5XPmpw5waGpzpZaf52rcf5NZmTSVXboF25fwFjRtKm9A5DPBeQrHwqZeHJQ1QwsAnHHd",
  "key17": "232iPZKws6evB2gqKwZ8uZSjL3qhDL3RWHFH4VAcWDpcqTUeNp2vt7yKj1K8C8SnzNiJqovUocNuMDo8y9dbxcGt",
  "key18": "3PwQn3YH2PUURFFeFjCWwNV4TaTowqV9zvSQwiwgQVLEd7ZSDMuws6gtzXyduQW956bAodr3MhroBaUSuoW4fYxc",
  "key19": "5ZKrxpebgby9b3iN8NLQRSfV5fVoYivQuVuHwHyhUVek3PJotDa9DLbtY8s8D9GRDkKbvPsjp187sM3QRw7vuQPL",
  "key20": "4JaYd3jp6TwMKJfWgnFpb5vVyz2uLvMta1hXH9ucoTuMrnTDSPAUnWwLR2Pq2XA2DzrgxcSfWma1ZAXc5jKyjnc8",
  "key21": "3QPHEDHCVa1jkY1Ptb2AMemTPpsMLFgQMKeJQgaGXStM9yQzU1vrH4pq1FxZMvNuQmxWudLvYGbCunh1TWr8qnyb",
  "key22": "3mJmn1djKXw7NSQTawYHEwhMB9j97bmfdK9rrr7SSv1XKTieDWAxbjQSc4aTE8VKSAPsbLD3dkZtYBvV76Lcyy73",
  "key23": "3kkSFB8nw7EmWoVK81dxXk1YzyKti279jSU4v5DwJxL2ixpcPUhKSaVLG4iWoNapsSjVyCpV6w3z5uRJmFhJkdmB",
  "key24": "4uc4LGDT8mCrGH52NkehaSvui1sM9TPR8N9UkZMEscSAhNXzpnQx53TAdncaN8SYcXrq9C59GYfRtGhixGT1C21u",
  "key25": "K9UJCZK3P3tHF17n6e8tVbvxhCmj5v3XHA7ugM38jGt5CKyd85tHcig1aypM58V4j6gzHHbG6FXmy1A1AVXBVw1",
  "key26": "2TqyjeZPjyGssSybQHE2vswmaACQmhobG46cu4Nf9Cb4WtKdH5Xxa5RSAZtVnKhr2kdyHBAkKu6XNGKH7Am4PjQg",
  "key27": "4pQNVzxPL9qCe6tbh5uuR8UxgajmUtNf2BShS1XQL7srdUB8aCQ6drUbergemv6zHyyRQtCLgZJRDUi3Udnd2wJ2",
  "key28": "2M94tnMqHPKw9wnnrjTPAUthpF9ds2ER7SyR5FW6an2U7FMNicwPDhNuCZ4o8Z6coAN8PkJbrauoS5f9m86tqBd4",
  "key29": "ery9Ef3zSP4F6e78TmBz3yenJz42TniJtH5iVMCPu7mhkwP2mA8cjMscuYNAe86eHM5k5C3WtYusRkGU9eGcAFa",
  "key30": "66FAGU9zc9kqSonkdLHD2kuvYZqGkKHmWRCxoTsHTAAqpYSxnk8h8aJuMjkWTUCsVhbJE7bwmhP2j3j8hsy3HZsw",
  "key31": "5ZMzHWE9i6HYbdMEdugCARZiS3c2oeWLoY8ot5riuSykYpEexymw2dcqY9RrzQYbcRy68XK9iEQCBQvb5CfgXTTe",
  "key32": "21ycLVurEDGQaRaaeU8dboficdqyAUisBvHmo7NCkgaEM2En7UjfgDXb7Bs75AABDht9vjowZpWKsA9ArAK4sNLc",
  "key33": "5A1RiXH3eaxkEnT9eTc87SUnvmp5RSiVXJPmqcRX8cbDbKC1GDzVeZeftvMmWtgePTtqBojtwF3ySdueRZ5NsTHY",
  "key34": "5iJt44d6U64rqtFXjLhGDK51uakm7ccpdxjj6WnsUch41zpVRHiiz1oK61baPq5ehz5xCj4fs6MLBeEV1WQt3P6v"
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
