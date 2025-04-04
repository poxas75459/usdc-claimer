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
    "3o2g3CmEzrRofmb2dtbv5hXUQo4Cj6JuHNKWNYyNfofJLNwYvpH3Dz7dTw8jN582Eh23v8Gc6YKQkbJC97t9duiz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VChj1tGb9DpZxjMJgaZyrPoBNmaE4tPejAWaf6PsgqcqXrVmKqcNhjGSAiknm8jB81RE2L3fkDAGDCDTXg9tE4q",
  "key1": "3LGty82qKmQRpizjNRMvJgsCof4YBPu1PknCBFCBbfTmf65cWUCny27PwDccksnAZMB649KRDdvsXJgfzDiEJWFi",
  "key2": "5ey7fG8rEGnoFQ27cpJ2H17Ps3TTbWfyyeCAk73AHGzkJTbqy8U8dLhpjr75RvwFgMbxXSep6ohrX6Mgqu5mMm2p",
  "key3": "iMgRHdXwEH5cGzNbmGp62CjVQUnmj2gb5xqGh4nS19vnuEMaaxuYT7uoJBDDFmTTxPV7Pybb79vVJYEWZRmkGsN",
  "key4": "3ra7UhSqaJ2oAWsF69aoDcHHpWktFgxgdkpFBaumrDa8K6FP8FYymfgdC6DFakHw6NDUHX6sYcdAMS4f5G8N52Sk",
  "key5": "D7tWXcJta22N54rMrMz4pG7mLyGceSXUVquTx9eVB362o6vmgEfhAm3TjkfjYtBKqvrpoPPJUuAuhypAiBfaLDW",
  "key6": "23KQBfUvSVsbHokn2kjwFeKfMiJXCe1i6RQ9gEznR65a4zaGef7r5AZoU9vh6C9YEj9gDyJUgCoNP96V9BE8RF9w",
  "key7": "pL58gZrtG6duFsmmLHJAYq4o8RgEMXsCefn9TVzGteukgrJTsjsKswHERJLjgn1RrgiCzXZ6dmpcwwpx2ydkqRs",
  "key8": "3h51NtEfj5nMgZxV5qnhFmMCvZdGdEx7L8gwCLq8p51ET1n5y2Mv9CrEphLDXiGywvZMsuiNoD49s6SXJ2a3Veob",
  "key9": "3DdAoRWFAEQhLP75RpVa98jeLQBPrykEZWEuLpwco8MCjv2jZANw6HJMgCN8G5RZFCWtyiDLPN7siVYB3Db4nAX4",
  "key10": "5XXtZtCDQTyYRuqTq431wvbSrz6J5GWLVzu9ZpurdJWfhL2hhFLoKXT6DEyDsQq3zBGCUQH1kHACroYPikGL711P",
  "key11": "4tf8iZ5gYoDSXhWoCcs1XfiNvVGs8mS2fTdUTxkdBcFYeZ7chQendfLiou8FuwCs65BjXx9ksFL9MtT4hkHuK588",
  "key12": "3FSt7wCgyoJD9abAycLSvSTvzXhpz4b8v2LhQ6otQPBRgnKncwiPEyxzVXf9TgZywDtKX8c8hQb5tSNwAXiY8BZN",
  "key13": "z3k9GEbusB7D7kRQVz8rXCT6TpxoFb18pB3bT7HLapqauPpM7RnaxNQDowQ4oGztSJDbCpxjsdBkADFAiDjUBJB",
  "key14": "gYV2sGgRRgDuk9NJbvkUT9ss3vxhaVPYtjvAx1kYQYpLoTY5V5TPYEf7hzpAiMfCWhEeD8YS2Ekjb52EiPAGxMR",
  "key15": "46yPZMbR7RXrkERt4To2HUFDsmBpAMG9TGi3BsYXY6NdW1aH9VtVdxtxbuYKuFxhFWb2GWKw3zQYPWzg6ybvnPuJ",
  "key16": "5B6wxWiMn5NezBqJRgcKksEFtEHKR7HsXEDMo7xF5PSPneXKhYS35ueugtGwENv1jYPZMKmi5NJYbNNe47pSm43m",
  "key17": "2LcsyALS1SYjPLGdPr2riiUWtAHzRFkXS6AoLV58LEYMXKuL1hmAgetRQB1qa8LDmF9TGyiemnyhaXm89dxwnRZn",
  "key18": "5EuC5hsd1wNMGyp2oofWh185fHnFMDgFXMV8TnuGpdeub8r4zAwR8UCgL9T8SNUCipHGSUpbg2n8UzmeKZhvhDWV",
  "key19": "2mRchyRiJRqDt35JXE47jASDTGGExXZqsWppy33Vw37cekz9zQa6hdCuK7mQC5nKh1tgsNyuJiLYbT7PYB2xdsYo",
  "key20": "4YumHzXAqqsJVSWg3ZknWKEcM9GgUrTVXTZqkm4FAqVv5BP6jcVRmEmiZmWY4xfDtTAWPgmzea7xw2nVoKbXxW5g",
  "key21": "4SGDN2EPTmgVCoXDG2Hdzrxi24fV6hT7qNYZ7MMFwxgwekXX1RKcwCMcaNn8N6DYoFGfRKiet1q4F88pqSVt6tbr",
  "key22": "2pukTYLKEJwcngGjGBBnkahaKzcwzBPDAiciz2EYNm8xxotmaDeHkmDXTpF2uDtJ3xsD8jBqwPCsZ8eHt8iYjuEb",
  "key23": "2Rrg1iiM175V8ykqkLTZGheDtm3Z1GWvGFHefHw1Tj1HbNABtzEcAuWqkCfCzCGHyGBjViF81JaNcSUeenNvudbw",
  "key24": "2Nwh2PkZUTibNu9bgrjHBtiabEb25oJRYgPxfWiEZYUZsE4sWhYH6Hv13LnD4pfwfe8DkViuEZbfhgbpqaMd2iyp",
  "key25": "9SsNm4XpmYWGgMUNjLUaBjSYuJ5Qkzm7ztwzSDXVyYFCa5jv1L8a3CUosiMW5pnFZBpJ1TGqDU9wxqbymgoPzDU",
  "key26": "4wWa8MVYAtxwA8eB5M7idzATaqCuR9Vzt1A9ZRtdaG6tsdHDnodtJSQPUGz9F66nSY1xTzJyLyjP3Bvv3v62h5cU",
  "key27": "2N2swJPVgAP2jgXtuX6GWzQakdRVYBeQBDP7HwGr7XLDx7PFetoEtKVv8jg4NTx8kNL9EVCPyxApCx8ukT1zWcrY",
  "key28": "4dWA1rFcudimPRFa3zBYuqKrqyrXsV2cfPaNQKkS8Fyxq2H1DMyzMKQ6Av3jbhB22MiXMjMZEZuq5GxB7jmuzt15",
  "key29": "3L1tL32iDymzyJ1B9r123twkjhA2AXzckWJWMYcS4438rMXukEMKjTYBgJywagAtg7SLYvmj2mk6dXcHe96CvVpW",
  "key30": "55GfYpUBQGXjCK2EBirNRMFBgNpSmpxUUXammp7aGbz6Wv4HhugbqANd5fvZnXzRYfjWZLfBvYrvk2qvryH1J4gK",
  "key31": "3DuNxD9aZ2696G4Gh7i6DyMhJSMj2yM4xrbcQq9zhEfASttTeSjSUMpnuaBLKxkcUMxMGvJCEWQqYsRG72FyKtRC",
  "key32": "igdb3T7hfS11G51xTxfZNEdzD2MDnLeN3o8Quvw8CoN5fpf3wu7TgTSxxvx81pswE3Qrox17tYtL5F6gaH97mN5",
  "key33": "VWLXSm3kLPmeYyKKXsVvDohHzrA6wDaPtfSgSNFmxE6wmZCdMXo9mzLFCLKNk21qpT7f3K7U8ZMndf61yatJj3s",
  "key34": "4ZXGWgKCZJkuyWjVKG9VjbTB9BHbRHQLni9V1xUhi3uZzNPXfKyCWmoCHWKG6bLpwU9kos6oN1EANqvWzvg2yruF",
  "key35": "2fcExrXyEvHx1UW9Umq3ANeoYpdF3zQPUKM3RuhvUHncKGJXcSmvFsqAgWhuCFxAMJsGVMcvQGX2vNUAxzGYc7y",
  "key36": "2a5qwP3t5X1WpdoMxSfktk3BjSFpvtPzpPvsEZ4xnEWtKSmMnwVfVXDYRnk9A8q7ZniXVPhSgjmhx4hpFbsqfS3x",
  "key37": "44hJSeGoaPdFRvrZPuJ2KewWtSJpD9YjB2GnZepZM54E1mCjnuEJUA11RwM2XPAq2X72Y1vAk6W8UgS3f5JwwkRG",
  "key38": "3xxauNUMBnpyxKLP7U6kj58MEMcai1cW2kvdMf7qW4casdyLpe1Gh2mvHhvWsyAubKZBgN6Pt3EAbQD4tFSNErcJ",
  "key39": "2dip2VumtQkrpH3Yt1UheQZGDYJ4WVuGtae4JQhfDfxsLigborLhYDMA3zMqceT8CYd934PUa54ZnJajjvBdioA4",
  "key40": "3rSaiCBdMZzS8TJiF2inVRCbNg9eofyBMJXxPgr9Hys5V3TYRPjVSdvZ4PywpusxVzSwn3JjMckquAhmkGAvDPeP"
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
