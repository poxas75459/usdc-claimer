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
    "3pYyh2TAgiD2XrSeDxms75btP7HpBR7pMXb9bF7ys7a5xwSc3M4CmtDUT7JJeRrouZfJxYTeCftc2ThsmwF2eqQA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EWonYrCW9W5zikad7cMuT5CkagfQe4sRo6eVt9qx4kGreARW5UD7TwEwGWJZ3suaT5tkrBkv3rUfR1mJttJ5A7C",
  "key1": "4R6ZfASDSEyb7q8HJcyuAVz4AgzddMLyQpjYnHwx24zGqPc3Ne8WzfcsPgVnvC4Bf4AniboYRwG2qCmoUV48hPve",
  "key2": "2mttEiJVKaR1RBieUDgqVSYBMLAt9v2XJGwfHGndxkLNgXv42CEfJLTKtixLL5HAqhxXncgmZzNWMiw3EytQwo8E",
  "key3": "4uQJghPmnKNYEtynks8yBawB8DagTKFRqcPPUd9u5gKaLQ5ymQtK1hg4nzM136pYxQjsVuQFsxdqZdLUqoddPUh6",
  "key4": "5AKkcZCQe1deARZWoW8r5y5jKtT8eT2JvFRmV9wkCRLhZhgB5svSbbwHqiUGgZ9gCyBZCN6s6LaEAFBV2xkcKA4s",
  "key5": "3C24WepEmQc79mmy4u5yZKwN281J4V1puC8iF4zL53Dmb8eV3mK5Z5HJKagTg6TLnnv2DzBdPG3J8bbod65w9HGF",
  "key6": "4S55W3mT7HnLXMuuG9kjDFEi1oSSPc6Xhsh4f6dzDYxnqE7xyXGAA7T3keZ89vtGmeruGCstK7SYNVvPbnNXNbkC",
  "key7": "2GSgHgHJtfHcuort1zaALEKkszP6UDoDug3sTiC7FUf8G9v5yUAU1KUtEhDuSLb1jGzZFFc4REhmRWVLyygd5iWt",
  "key8": "2LMLVLV6SgavT5N2mchuJscd6ifUGVooXyuZxZLbXA4xS23GyM3B5wdRKanwQrc6HzQw8JtWdy9Q5rXmR1oJzaaR",
  "key9": "4xK8r72bRoEC3f5AK3QMbtAFdeYDfGvTgpNqscg6qFAPjQJbBNUCk3aVmGgmuGwQ1yNke24YTrTAwWTgS2xdAu85",
  "key10": "kybMXLLhibXUZYEvTPNNHsgqeXsEdUGNTke2LmP128b3J3zMffP9S3ThKEWL3nN2F8uiFaEgUTvUFwG3o7gqWJb",
  "key11": "522gTzv75DbBK8RA43mjLAanqk4HTQVDEafWhHipUJGYSfUgtj6QeRqjbHEddUoyUUzLdXazEo7jYez5YrNjzk5i",
  "key12": "2HJivBbgjcENepagSAgj3FD31fEoo892kBoUU8pY3CgsQYRcD9vjj4TgfdnX968G4f9aJ37FgXZN1JBkwmdABTWx",
  "key13": "4vRV5G1HW92NtCd41YcHTSbVNCkM9vbxSraZYZ2jYvpM1Bae1CbRX1jx5nX6L1QcJPangZyfjEkYRuKvgWZVPvh8",
  "key14": "3cweRX9rcMUr5hH73RgnbDCnoQBr4tMf4tceLHvebPGDVrmN3UEHxWMi3QB8DtzHqFHwhyRTQX2gEDRJiWCyHCQ9",
  "key15": "5PnDeKeygYvuBZCehnbgayuhaxpU3w2tFFJ8bZ8tDF5LiXLrQnKm99LxZzXiNUfC57jurW1Gxp3drc5EWkwFpVat",
  "key16": "3rhefh6Szq82jYxGzHP7fJSUt9jMue6zipTVusBVbvkdNJZLszuc4berJjYtbcvHnMTqdPYZr9Azshi6hkB99xD",
  "key17": "5F7VEsb7ovaPWPuvtg5BH9PbMLR27bVHMSt8jVDPCrkudNp6f9Ebx8iyeCaA2zV7szfSSQk6cud12hHPCAdyRnX8",
  "key18": "2cN3mvfp5mmirgeNqEKAUxPdtifgCbEnqG9ienaVwL6ia67CCwAhFujQCNvMSypLpALHqR5BDjA85ozUHmmiHFgH",
  "key19": "4bGzwM359xJFnXqq2oLfxsCcQTQS8wb7KRKmrp5mAgFeRG4KJkoRpoDBqtocjsX3Gkvq1VjYEqStgXSPVasEwFDX",
  "key20": "4XuPJS2MFv1ifcbRKpFRDYDfu9T7DHNczssxCbgJdSiSi5pVGxwyVprRkHzg4es44f3ECctreA3fBpMunW6evZBZ",
  "key21": "3omxsc5QHzcVS2JP2Qtiu3nnvs5KDT8DZWfKxKskgygSAJ13kaVqSMocirmymEURGbCT94gRwTthptQdHUgu8co",
  "key22": "6749K34mPV8AjY3BdCN1W5gjqkuKZfYVibboqjw3ETbpLhUyjk42FYv252CYzTWYaHA7vLcbSKF3QW8ot3mcztgB",
  "key23": "2gBJWQdVsQkv54eJWqYQffB1usymfk4vzm9D4CGZecoYNssU67xumYFgo8Ssym2M8xQrF1DFya56HPCsgkGb8EWT",
  "key24": "54dmjeTYCCAsSfW3wAfgAYjDch2dFhs9mbkb1XzVGkQPS1eF1aDbDe1ruoraUxWujeB5HUD4hKeyXRM3gTCrd7EW",
  "key25": "3u1Mm6VUHicSbPDCASbi1rUXgTeP84t3vBHrfvEDXN65QGQqjagwf72pL52s6gnFLkKtFjTYqxGMjrHXxkhZVLNy",
  "key26": "3wLZFVmV1NZGEMGT8mtmmSEciRopLXCc2HTNMBJq7wyumZZT4TuebvXeB4U2YE8PuBaaU7s7VpFto8nuDUyH2pvv",
  "key27": "2eDHi8XehkvubSBRzrV6sbApeQz2d4JY7xaZtsYSa3hV2h6RnYyZuHbec178fizcgKTL1ZHSkdtJz1bCpHbSrX3d",
  "key28": "2jYz4cR9C9KZavzXn31qiUsdNV5TLH7d94rRsMhQj37BPytWJdL8irUEAYYWvGR64EZoMR45bkc7yRC7437spEMA"
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
