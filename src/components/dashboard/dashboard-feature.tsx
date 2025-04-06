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
    "5zQpXE3qLgG4HCFrwzDMzG46qrvAB2WYysT9Tu962cSAyKZ4oCMXtHSh7CFy1y33S7FsYHjDxpP42KAAS1TDHX5G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RvFk96i73nc7piPEcamGgAB1UzU1om3fsD5NoaUnWiLiJnch7EaV1CRdgjGWKEqxPCthsZGH9dP64dP7bu4qwoU",
  "key1": "26UxDe2KFgMExKBCSSovHXZPb2PVDe9mCGXn4pY4ZRVuiZLs8DBjJvBWTSB51F5rWRbjzv5Fnf7kBQ1rBPXjSbAc",
  "key2": "3yRZ3hGS5udCPksKaTmgzKvX1dkcxizNr5RGGwhFH5sCbWq6XrLcsgpu2WCmvNzkJkuyzMNZxohQfkd7F3Bckfqk",
  "key3": "4H2dxRaJh8YPhxdwuTMJzEcnFPwn3RCkaghsqHa4Mt5UeJoNcxGZX1qV1juhGPqoSW7JgEWcr45md4jfWwzoMA8x",
  "key4": "2nzdMPS87CL2FShWgjaPUtNbTbztHt2AN9WuGZFm8yQt46xFHqTbESjtXuBTHzPiURtimrnCDiDosKpPhFJhGBRu",
  "key5": "2HszbexvQKhBgwVnLoyK1YxrtyWqmcL4zBkr9CJNM8rk3cagPkfWuvkRirLzLok9hwupCbo2fMCbHkYftgkPSm62",
  "key6": "2keXSEVPW8B3LRWgqgePzroHmDk365FfjVBd5A6t6tQRxHuBaAMRubgpK8aks5aywfyZ8HECuGs3YBAB1XF5fkV6",
  "key7": "5gdt5GSsFy9aRcUBKFZnp7SVytDAHQ5nRZ9uwc7fv7oubKixAYCcyTXmiffJtq3vMjiSscWBisGEKevy7ySSFeF5",
  "key8": "vuM9JPSag3XqoDmNeyhXe91zse2mzxNTB2GTmvZCkzVN3ZTWDcnMpCnUUiU3TTiuBqfueZKTgzHafZsBxhHKHyw",
  "key9": "31yZ4tFPFYUPr6Wxk7TxtGuunuZpqhSBzDdfJaSv5ns4pCBm3H62qn3Aw9xSmaux9u4axwXJLSpyy3sec2rZfnCC",
  "key10": "4zdq6ZyAKGE47hciV3PMgfV1pLMVTxLwDL6bz3FjAfKVF1eU5rpYmYBURza9ARYrDoZK4Tq2ivndWGGdmGcSoh7f",
  "key11": "2Mk2DZ2SXws7M6t9XMMxU5fx7ULYjg2srKFw3DLrVrnn12ZA5ztFpye1Hcnd9JaB3NpmUEALWTtFm4aW76GsGfF1",
  "key12": "3pDK7xGdY9RcHuKP89BbxkykvWRRXoEUr8PT5KozkWqYa9hMw9aBnAfmp2giw8FYvkm3Eovux68iyJpWj7nCHikH",
  "key13": "gNZGA9r1DqGxaxjpPGqayLTk3qBNspzQ3Zc8mKWF2USMfKfDR7QkPP3FMjSbzFjAtzfnXLEwZPCvNryczb8dVGZ",
  "key14": "34PPiW8gprQMGiPbxnque2Xtia16fBewiFiXrvswx8C2xEZuEdjfv9ZPoekUsMhspiVuTg8tTit1a5AJSnTEdC6o",
  "key15": "4RgjnUUcRsag1gW9Jf4fVggZScoxaR76fp7ZrTsLa5AYHzwHJeLWZwhzrdFkuWyeFCxAxEgnKBX1aX4QvbmcmPEz",
  "key16": "3njMKH11bmkg1cB5cmh4NhdGx3MjKgTFzz8uMRCzRxprKSGefbNaC3MVeMR1dd6NUg986GBykGgQ8KiJdwHr2pNb",
  "key17": "2w3TM9mFX53dmhnREmCmQ6RBNEJuBLdoSYMYCeeAUmseTNNdLQ54AKFt2TS15DFShhbP8FxiE4T9AE2HFqBa5ph6",
  "key18": "3rumB3En8yWPNfZCMaYq7QdrMYKUqexiQwfvXr1binHmJBWRrJF4LvzMuVTvpGbT4d4SdmyRGs4ib9EHMfvK8Ums",
  "key19": "2wmZ8V3umYR6a81eUdX1gauMTHwib3W7SvyWNaXM1vmZsiandDfifCcMjMK3xXuJdKAGGDEysGYSG9r7eTkP5guD",
  "key20": "2kHWoJ7nQa6Xsm8UkADLuUyj1gsQaa9rWz7w51PZNgPH8nD7JeAUAijX1Ns5VQ8FYqEuJND83ffVuVF2vnGAhZP7",
  "key21": "56TBr3S3QNB7V4pDq9j8SZgYrWwrZsGSaGWXEyoLdCwuLhBtJ6sEzyjdH7feJaPjrYRb3yWMGhXouh4e6TcrYioo",
  "key22": "5qvmSg83vJwU66YSYHD9axgwxWHBR2jk97QZSPvunyQvrMT9Td8bTvC3qWCbXa4WRTtcNuzQDVH6rWZK7B5Kkq5v",
  "key23": "ZX6vSn8zz24GiBmXo6X156p7vXiCTirfLzVKjj6QVXpvjUnNw8fPeRjR2rxrvxJfBXDRRMZb924kmfPZBgYeZCF",
  "key24": "4Y921soJ8fE4v8Yh1fitnRJctRZ2eoEjYUGeQ2TfJDUwBozzRT1EGcdc8FDaSaGWiUCaARLfb7PCF4spFy5dyb3B",
  "key25": "3ZSSnn5i6RpiJ1UbFRe2A4FXEhmdPpdPAgiYxex1QebwfHidZQYtudHdUnmfi1XpXRwMWiZ9tgJC8N1R6N1aVvZK",
  "key26": "Wzs2rCBNoet9bQmt1aL5TMEZYtiNeAdbgAc57KmczWU8S3VVsziagrqTsUvpJzRYb5JnMsTfdcjg7Hbu1rn6JwQ",
  "key27": "5br3yVRRWmajpws4VUqfbqyZEtHjaaq8RwTtBsFACLK9H578JRCS7ut7LYcjp8hLaSLVRhgTzimVdECK8zry2ceH",
  "key28": "2r6WqmW9eJku6gxMBNg9SHcf93j3R1YESQoaLXB9uPBGZgCWm1NKtpMAximkmFd4W78Ag9G17KmbFRxWTNLPzoek",
  "key29": "4VpUqzwn3BPzG7EUuD12VpidPY6nuFvDxQnfYZbhHX2BYQn6UCBpSWoCndwfzniyZEA2345wcJXkfV91qDB1gicm",
  "key30": "4QydtFnqAB4nZezbTTRBUAkhN2x5gJ9FWVY2thKkbZcGFG5sM5wqq5Nfk8WzkdyEodgXmnL4Hf6ewr5XRTDwWAqf",
  "key31": "2socDxYHrds3Uxm5X3RNqJYKrwESJ8ttz26Uohdwqtit5XqLHczy58ckZgC3iwrcMFenwdPjiCngwwirrZqShUjJ",
  "key32": "bq1tKHZcCr5WMP2rK5PcHSTpia4tB64nWtFfr9voSn46JnSQiLQFKWij5PCWuCqk4nd57mMntGCx3Eta2KTaHEG",
  "key33": "kMwfcPTpSKYqxdfTSW5ZcpLwomJuZLHp9xNskJffSUS9SNKAMfNSWX4rM186k2fBcC7xKY3dFPQUqKGbfgNV6W4",
  "key34": "2DWReFiSjYWSQKpJUyrqAGshJVN4BDZwuqVj85DX1J78ttihGLAoyMHbhBN3TKYWYv31sYSfbJsFoTmQDk728Y8e",
  "key35": "5aq7b9SzZK7ze2QsN5fEhYrUXcPN3J7JZRpkf4AG22Mf1tkomVZmb8bzifzUvbWU3mNaFfWvvtr6rcoNEi94ycY5",
  "key36": "3eY13Em7J6YSDHr2cCQuiRKKupqMgyEwKWLeh6C6D9cmznKAqjQrhXyrRSWT5ieLtLt6vrJGcGsUj5taMxobi6f6",
  "key37": "3kUJyiweQMugqL74xRGTyYu9hGHL8amcGcyJrKWYag4eJpLf54bKjBMM5EW4S3Wu5d9UDHjWhgRjHvvCQErz6rGF",
  "key38": "4YHHeo4Vpxz6HiucrtrQq1QbkQb17RGrpSP69sgW6b8j1CwusgVbPPYLeGZzii8qP9eKq1Hn7empXJVg6WP94ycj",
  "key39": "5imeLXvVDWHWDDKbmMLq2UDzUaqim1FfuiQS5iTDnZBj9KZB1k1LMo8whc4hXPURKp5DwenqGTTA3oxfHPRZzwGT",
  "key40": "cZAbpxnm35TMLdXumbTVtK579gz3LGv7qCLZwN5wGU6poaNHpnRfeXmTFtNR1PeS8dpGCRB5nsEMRLHfu8aMWaC",
  "key41": "26Ddk22nJjcqn6jcuqgRiUZEH8GFr2V4gEfxwADUMo2HzaRGVrnRNTdhZASgCQjFLWWtHPikdrsh2jq3AxmpcL6k",
  "key42": "VncoyFCBSh8NpdAbJ9V4RVuqJRAtprUw1ZgA2vdpYU5cW5ZNRK5QAyqSJFc9nwahvHcE1JeDrEUGnjCR8hAT5Pj",
  "key43": "2oBv8nyt9tcMr8zJFQLtYx4W2V5AxGKebMyy7BgwJrdRS71MsdrdHrw47yYoBPt4hfk4Ah2YB3vWpQ6qXiJenvsa"
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
