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
    "4Af7a9aauegk69UrBE9QxrCYVzPyyao8b4ifzidmAVFXo7KxnVz9Z85TXzLCmeF5K7WHLMnh9jyTGEosTUhXeR3J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hAudKdKaBpoV7xoKf6VnmQBCokYjej51dJhqiyb9uoPsUopqADVsHuR5SENxt5foSUqpZUrz72PnDZNa85FSazT",
  "key1": "2nxnvKcSXdceWpgKPLigmaoiqjeiV69Wvpmccmo6hXg8nk1S9DvMJoHzFv4zo5dnbHFu7xDDmfHGrVAnHwHBZst6",
  "key2": "5D7GZbhjJh8ZPJP2PZbPe3Qs728Xcro6N4oeHUFtR73bcrQ6W6XKnbFeCLg3wuh2zpCiCJEfSrQARL9sh3VDxZCF",
  "key3": "66rUBmU6KsuUkRhDtp97wrwaFjsLp3K1whpb4SuY9cwb7onv8KYM7cqetgUrExqcfVYRzPhghMmGJXMChPeiYE2x",
  "key4": "3yfrooLszZndErpxjE3oaWYLAn2jynSkP6aj48KWBJYZjPKagd7V6CVSzeL8aYKXtQQKeRajH1scCwvdDLg81Y3",
  "key5": "59kptgMZix4MyTH8U3F5LGeUfMSP6hHahBQM7b2zhcoSp9ApT7KcoGJwbdciui2CKceTWsmE9h1MoW1RQEjuvY8u",
  "key6": "5pZgvNFYE4DUFh43ECNdkgQUcXKyKvGsSs2yvSgdr44AA4wgvVsK3DT2Uc9RkpVFqeZ1dxhiVHrrCFs5J8w4cDQp",
  "key7": "dRDGVqXfieVsTf1Y3mWvpU9fEeMPQ54B8e8pYSacQohNDi5ivNagK987qQeAfAsfgUM9B8h9MpBNv2NNVovKoX1",
  "key8": "27udfgHcXGEaXkt4AX9mSmTXXNts6bozXLpU54mC29bEG3YW1ZTXesyjP4x1SAVFFBr5UKS9dHbbCQSKQDFnu4UG",
  "key9": "3gX97AEVtFg47fGVGYuxTS7msjvw17mhhQVW2BExjGFtdekCderevJBNwggkb933Maqt6P9c7B7bocB6SzTdbVno",
  "key10": "4sWeXHpFP5Dv9mKUYkndBvSgD8CGTwHA5jjVZrgJUh2Us6N5bTi6hZvtGZQGrPx9JHm23WGw71jZLvVWmeTRpynf",
  "key11": "2kk6sgnrDpPreL5QLCbnqFVbAxhj1sacb6JJ88onGnzHn3e246xLcRCaucAm9yodqxbdMr3dtQiDcEURmz63V8DV",
  "key12": "5Zvrbujqe5qjYktHz8QAqqUAxbNoJMDm8rAtWs3Q7tsUfmtyxEP28EVTEhj9trR9kaMrKiErqMXibYLD3KDBgJcZ",
  "key13": "3GXP4c2yGFSg29VkTiXY3eefV7efBK51hBHJWU826zcdy7y2pa2Sbb3zvRx8Ar34RfNA6g6Uf3D5kjtjv39AovYv",
  "key14": "2Yhnmmi8DHvibMnv4HmEpmgAr91mnXRw4jin9DjTdaDN2Rp7DB8iHa94R6U1gZ6Zqr5HEPQaSByLwBejKAB8Zpwy",
  "key15": "28hxwR8xYR88qRXHBUjr2QyagcbgByMvDmL4zooi3wbRTCSRRPHvfAEPZknKDDVjGRffZ5fbbfHYzzhKRPh721BY",
  "key16": "2KfoNAwEZqVKathEyCQkaaG7kzgnZGkwDswfRMFZdX9dP3ENWkZzMo6dZAqJf6GFTVzpPUC5CMCZZsCRrdajD2Dg",
  "key17": "3opYG5zZTuwRbX4n5tkdiXapDXowTt9Vp3FUvCKjN2isv9bFof9gS97djgahPYWgeU2cxDQXxtvv3pMMW8nhrLPA",
  "key18": "6CY2hQRQ5ydRsE5tjRyGCEF8buQa6LmPQzXY8BeUf9pMonPmYwNqJrbVWAxyPs2PykSGyLNwURK4ZSfXYRDgzG2",
  "key19": "doje3ed2b3oMwcRU9wi8MmHE9W2X1TwTZAgS5MGFpb89Dn7j63k3rUsYLyeepbE7ZLYLFFZYENvfdQFq9GgUmH4",
  "key20": "3z7d2BWzuLZAoT742Q5XcqCsGLwBVzNkK8csVbnFpbVroCPRsTwJpg84xt7o7y3gm58SMdAe9hDBmFjLqHVS5B9Y",
  "key21": "3G2jtoxuYekYR3f3y5xfcCdrLJPx8ufkScpiPXezFV8omaE48tbmYTz9QfaTSYwrQ8uKy4xwjs11m1evp3gND8Dw",
  "key22": "4pvgM5u6u7WMHs113mU1hsn1ThFCbN9rcMEAhcxDNW9mAnGmD489HcMAH7k3KLDLpbDRJVaNamXffWzTXWXocaRD",
  "key23": "62BihBeBFR7QBNva67xFJxitXtZQXWG7XPTLLz6oZdJUpnMDqdCuTUKL84ErmNqKxEF1aARkVhn6zweDcQLRFxLq",
  "key24": "3FwSu567D9BqJJHqWfJDv6A8fwXm1EoBLU4j6hTs72QGNqDV7aV1M8HAeiFtbALq8JjiKcPTD1VJXTD5tiDWVAbQ",
  "key25": "59EEyCMT1153xEwEi1PJHSjqnc2Y3hsu2XdNU7YkMdCp2USXMr7eWdyUZ7Ted99qepFUmcdguKQeagbWUn6UvVTX",
  "key26": "2WDJGxFfmy5AsRJwSMFuHHm55RoSkQ3dHmLe4vUUoaa6VXAvvWiELXsof7zgNMxzN7ZiyA7mjERoqqkmAZZKJsnX"
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
