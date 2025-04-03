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
    "3PJmF7q6D2WNQD45iSYHEy1Qz6kaTaCxDbpywytYGSfbEwTiZiBGda34DV35qsv73Y6n1Cy5fTdb7o4ZML4sqRpc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fhXcJVXW82y3osGfnDG3x9Xg7uCmkNp9nVUEPjKikV2ZVD2J6CmQWXqq7kEMndQfa8JUug39HrYE1HGBDbRTf1",
  "key1": "qVYjnHq7bntwQDWKAaWEh4NbDNitjGqx8tTAc4jJtvVEyGDWG22vApVA7RJd2AD3dJddbaP8ozj2F2y4ue78Yaw",
  "key2": "5jEPoTgdVsr6D3QwB74KHpdkDBYY7uXfoKVDa1cTYhJ8G7RnUvrNvEG7TSAFYGCdcGRyWztasCvrwSKngYg3SgRH",
  "key3": "1viP7bVLk4VL5sHhFHpUUR7tQyReNR2PM229FRQWhovSWy3f6Nfggcmr8Ac7sRLktVRgGuJx5xNhi5KXL1wdr3G",
  "key4": "21umWSL8MxVtSLVva8zoigpYwqikLncNpfQte4dnwkNZ7g5pUEUT86NyNtm2E7uJBihSqMZiZe6hw9P8KDCZGdnb",
  "key5": "4JoPPahZehLmwXYZ4KhUPxgWpKNsRc1mLj4EWBYThWV86Uz4HexLELJESFfDHnjVL36LAw2pNBSaWdgFhzT8LkoU",
  "key6": "3qZc15DHrSPzKVWW9x5h3tgGDzf84Efoe9kGnQLKDbhXyNKCKU2jcJAgjKt5am6VtxaodW1owcYHugW6S5VmptrH",
  "key7": "GuG7rWJ2vR7qmLzQByqZofdKJVK53GpGzeoJcy2Eukk3THh6GB8j38kXycFS64yUZGB4cXp9McNhkrJfunD1ENk",
  "key8": "VD3KDVzTmR2HHem7qBaLvzWkdEJDwqKVo1fkTKMTLZUa3quUqKeK1N4WLQrWgrCC6dte24ffQEFABsF5HCkqaxW",
  "key9": "5zgyGX1P91kV8aeJhAABw2aGr9bRJxYBGFmx4xg43YLCf4Pxfnsy6F4jgQfixeFkJYsYSomBY7cAeY9XwvnghYnu",
  "key10": "HuWJnQGXjkZ3NVbk7Xd3vKrTcQz7aWt4VUxzqbkiJLkm1of1JTTM21G8iXWLRCwvPVuJkUQMv3NdLKEDhQBdJ8e",
  "key11": "2a2dvBTyTf5W1xFXrAE5KKQWx1vctBo2HHncibLJhxvPy6aZhXYgWftHfwojGzAQ8ZL56EQuq2W2ry1H1frZQnfS",
  "key12": "sXLhvuG5njqjiXwXFNuUH6VUkNswYeR2CVmdi5G4TPS8ZzFsXudxTExizYjQzL97y2VZwgoYWVJbxLUw3WVLqYy",
  "key13": "eCdgKBs8CfY5NQE2ccs6iSZBZevJLRWM4WDBx46caMPLRoKkcYVy2shHpt2Hmd6VAE6ingstd2S55dyyg7mtZVB",
  "key14": "3dCgdHDyWtuKsoNiPhJSe1rBQFxNJk6bsoae174dLS8JiXVL6gzSe7dz8tGjquZCaZ2RfoZ8M6KEecK2EMfpggFZ",
  "key15": "5WjQYf43xuFQWyo3vtW9Bnhp48wF6NjbdfeKR6iJ9jbhTWHgmGDoV2uiMxvv9EmfohBHZ1nszYHa1D7Ctkh8DbMi",
  "key16": "4KbXV8eyqHVvoDsQ9cEawwaup6t1jqz4NtdWTtNuF14nKXa8njWDwpz3Dwd28Qeq86a77X3x5pi2APXNgsuo7kcZ",
  "key17": "ivTMMks4R3D5dwj9d4rHc9yJhChykzr8ae2HvGAArf2opA4qeUEnXRSuPssb2Sm4gPLcpsDsyvKNAQs2pb1FR5D",
  "key18": "4SDXWruTsZFQf3TYip6MuCHS19Wcf6h3x3AZCvMASTDWA8fkrbCD49isNpzVUi8dWTjhcewvrpYssHbrQBRnChtz",
  "key19": "3DrxCF4rsqx2NXDZhTd5Dfzp71rfFYPvkQSDT1r2hrU6sTP5Mi7Z2UbK6NyeLFXBU5aaLfQSXZ29fN6rgdE3o8dy",
  "key20": "3vyVGf2ZAzcu34DuSeFj4HHGmWk33MFdKXWFqEjUhkRkyxNt8U66UbDraLPBH5Tf2Z5Xyz2QzUP8VP6xLq9iPdY2",
  "key21": "3FnzEsnqHBbFcnFW2VP9eDrag6z3VG9wGYS1zr1T2gPLzzyNc76nHhayiYHWZzrhcC4oVHtTFVaarAW9TpRt2E4h",
  "key22": "3eDSHZ71qXRfb6Rh8VVwhzxGvMLwoVgH9mbseENxmZmuFS4HU6fxDi2WKutmhXeQRn5V3no5aKQmptSpVKKR7XDG",
  "key23": "2H1NVrzDEJqtmf7fDf8f9tucobg2j1jjuWB7fp6nMhYpH65wnksAPdUALDN4qqbsfvKrnPQwwnyUyuFqVG5nu51A",
  "key24": "4fEc16tEyN3mv4f9aG8NihBDFWAkWpBDHzM6Vh1ipzTdDXSq1qdNnyn1Jmw1m13KCLc1PajW1xdz1rtLXTvmqyPY",
  "key25": "5JGxCKeRmwKtrjx2wBnDQroP5cSbhVL8XfrjSmZooUcoExiT7oNExuKsQ1kQEC1NSHbYvpKge1pHT1TgNma2ZCH4",
  "key26": "5sKwD1KKeQ4H1wtC6hSfNWqFqtHRHLE6MKgLTouYfH7vFuvmuvQNmhuLsGXMUqW8LwsLYpnbGFQTLvYowT5bymvY",
  "key27": "3sz49XtHBF7ztgJW99HirnaFzL1mbC9rCsAxYS5ncxP3tAqsSHPn5iHLWPsP41SBn7saLfzctMMsEhsA6gH5f6C1",
  "key28": "5v49fULqUg5nJDRkTocbDtNCwGwfoQACCLxTq2RnmPpgpNsBQ7qiSKvuLu8p7qXThLMeX2vgzduSGH4udMA8PMmH"
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
