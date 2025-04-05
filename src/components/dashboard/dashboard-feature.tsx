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
    "3NfznVdsGwBuJTtKBpkGhRTbfESYoL4wCEJHR3sUVP6JMVm2RVRCF6H6T2H5uXZvPVr3fxbFeTp6GjhrkHqVSJGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AECs2TyxmxB4PyVfJzt6NqWv8wgBbVZo7H15xsC9TsSbCsqjKoaYNNmFbVkfquUhZzpPiFudoMDHqXa3sknv3Yi",
  "key1": "4P1ZVquRB6UEzBPYhLRvMPpKJ26zEbV4uQdesYyiki3Vfst5BkFTCEigwkQTaTCodg5KSXaSsNw8eV2aochCkfnk",
  "key2": "3LiMHLEPmePzhS1Xux3dHRGQCfTiMM8PUYuJp8PfYGtbp9Q8u5HzfWu4KSUN9cSyZwnA1RmQuvJiinAJqCrPzP8E",
  "key3": "ktqoG8hgtPtfNFZB7hfNwHEMLcyq2VKVAbNNearp78b9AbS9qnKL6khFJyEwHjFJFYQ6NWJhraNyvBJ4KBTSSE2",
  "key4": "53db5squ6spDgMDkXNXcE8z4TmQZZMNPKbZVb61DqTpeH2TjJqFJuPn1pcRridqsx9xTfCsZnRf7vmQTwiEEdhUb",
  "key5": "5k5RQYA56cvxH96TCsZqxZnJdNe5KoKxyDbgFHn7eGbAnZut4Fq9JJMyB3c99f5CUCgwvRrVfREHpKzs4kMRyzff",
  "key6": "4eTtcU5hPe3c6BFjhnPHKDi7g68myo6F4h4Czwstm9PukfMNVQJVFE9tfE8pGqwCRe6KM6EBw7hRJQpmW7RTpeR4",
  "key7": "5vaXKdD4bL2grUka5SyfEAW9mTvJFB5bWQ1VNQKWuupb22XLFE8jZA4SWedRxypKhvjRpfpDzt9fbAEhqw97DnC1",
  "key8": "jdcSRLKhrVcpvA6MXAWZkmE1R7g4Ah8SsKTsUkyeQT4v4AGWs5Ut4PNeHXxmuKptiVD2K27iUrgzRbAE5DnJCgS",
  "key9": "37yrYWejx2cRBg9uQPpcoSBnnfM1REXKkjoryibrM8ReqE3c3xsohGEiLmZaeu6JWHRXcijE2cPbfcNvHP4kcyKn",
  "key10": "38F559QAFt4wPDEmgRve9j1C9qftJ99CVt4Cwrxxuxt4AAPvXouvwXPJTfXFMySsWawbfmYZEvN44eVuheWWzmGr",
  "key11": "5tskHGFJVpDkRRmDqEhkyApMkKCsabNsf36f8YQ5dMq3HtvWVxZ9WMTZxi9yCs7Tsbyvt1XmMQcBTvZGDN7Y33ju",
  "key12": "KTi96FhH7EAoEK6HyNegYAt9YWTTXt8h3L5KwYAiG5CNxYVpKzA57CwfMLryv1cnTPDKGcmxYpMFEANeBoQCcew",
  "key13": "64GHMbwZUst2jU3DsxWnwhY4bDscWt64AravC1x2Y6eRDKqZqvWo41UndiM94YLBKhLqQHr6m11cvuzZ59qtG1aK",
  "key14": "33T1RCTZVPa1GnPQCzBGjjfbNA1TvCELz4qfFfGiCw9ue9euN2FTKBn3Q96wvRen7aitYJeBVsGTZaErMimx6zxm",
  "key15": "45Y4K8qmyQoGf5fg4Fzz5GqMoX89mZP5nGNkWZ6uUCuvbVFSTaUMmCp2jxZPNRCpCRkH9P1hFZRPwVgHsK4FEmUe",
  "key16": "56ABrFHtcsezsVzJM92ipE8wsasjmuUL6D6xm3abj9GyGBe9xB8bDsytgsttof79nemypHt3pNizQjs1Zsp8ECjt",
  "key17": "4s2vAVrXuMmcSLGq3fwrM7YboVvfpLUDypdb29WEd23Exbk3ZgC4aUJrVYdoiTcNeTN2Z3TXx6kT1ygNN4fc7e8K",
  "key18": "7113Psj3rNjVtGgJoraFYCC8uRtfvdN3uMKiiJU6zSn8X3uSA52dWoCwcJqzczfFkJJ12Y1w3BsmcnuLFSRjDEo",
  "key19": "CtPpFau7bzqnb1tukqDxm3wmP4Zf3ro5hC2qAcb9zpBYtys3uActrdZtdQ6vTKtPnhUCWSWr4fur2rX5aqdhnPp",
  "key20": "3us1GKo9ebcDwWabpCk1RSuVS3T1pmujB2FoRkQuiAeYYVTKGVmMQqkjfWRervZFdj3BmAspFMWZYmCzoLP3hxW5",
  "key21": "2o6Yz9RoL5oYjjQBHazZ7PJLWRnNG5Q6JAQsgxAFEiTkRtCswN8iSNznCpQnE3u8d3RG7eUspAPxXFgyuvreRjxY",
  "key22": "4JfDaUgr1YTqtkeGitR344rdDHLBY47NebUTnZVCSfFp9GLAnSvvTAmfKkc3Zua42GJYBndHkTZtDNiVm2mgC66g",
  "key23": "eN5xphQZ7WxLQRdtVEqE68iXMrY7PSL37r1B7N7nLhzrRt6PfFCJcV1qXqG9tPD78rpferGFAJZoT51orSDCtSw",
  "key24": "2QQ31E5gA6wZkUbvwNjUrD6pUFPMZL1UBiFUTaGTpCuFPsdB7JerVApAbe2sUvNZSnFeHPkQhz2sBNTTvouoyZax",
  "key25": "59mDgbqBKwpoFtQttXAbM33qeWSWk2f7g3vtbqHL1BLMsduHno5ftnjZXQxzCbZR4gHnsfwKwWKTGniiPyoUw2NT",
  "key26": "4z8EUapGySUbpdRg8oSx5bbBHhs9sWmBUhrRF1U5DgeiA1b7HhGzoE2b3NfP3yfi28PZ3YaoHCm4CjXB7KfpAYjt",
  "key27": "28sswbHYFeUnybHjpECW3ASq41ZyEpRJYTdXw7MTMMzxuQd18JJTD66VGnwnAZSHcJGxL4hS1mMAuNvRToffdnY9",
  "key28": "2zgvRUs3TRXxHJkwCixjzqd6YTETKwTKNWCayAW7FniVAiaFAurAGVjqrK9LrpePiFYVwgZ7Xq4xhiFbpAmTQ78p",
  "key29": "dhPDzw8jXjWY6E5XBvkgSk5XqaFQ6zKosZ7tpUa9oiTyCiixtER48wk7u1FSK667DbMgwVjjjak9StdHsTai5nz",
  "key30": "4F47arEuwiLTiArSDQyPthrayzqA3bneZQ4qjWRWhr358VVHgwUefnXNBBDGQh95UpH4XPpKDjNvqbPKGJGyegYT",
  "key31": "9Vz9vVG8tmwQqopYh3ug7yhpHSwL2WzukDtrSYcTxDnutGSYwwA8suxEfvG9oaQ98hUqkLhrR4HcrKSRR8Ls5qV",
  "key32": "51MRaYr938qobthiorLVmb4LpMMt6M4uY7w4EgVJEeeL1hBg3kvMNrWksdyMpweU3uFXbJop1iMGKP16JfgDQHJK",
  "key33": "2PVaFNno8Y2KyNP5BfxqFJhhbe3EXQyf4bcVT3JvHVmHsE62EXEYhHSKHVH44m5jm4JE7yvHyEtZFNhdEtfCBVQt",
  "key34": "2Bz3DSB9mFVw6GkLaHbyodAXhjzukrL1dXZ1sB1X3AwikvFC3u4q7Z2MgC4tNVY56nGqWADh9cveWRJ4vUW5gXXH",
  "key35": "2LB1PpqNY6CEYm7rZ9TN51GZc6e7NcdfXYCUFwHdC9GAnHtBbvGGPmpfaED3wwFLM3HBUj4tJpKDkSefC1QZJWji",
  "key36": "YFJce2tat1BU7nBkLFJmuXc5vosKrcPRdtr2cGySp8ss9cQD11RkmVZNe7oLA5jGyEGBApAxgYkqBrt3kFZzRdk",
  "key37": "5m6f3mFHp1fUEJsoBwMpTZVM2YNZyGRFro7o4DkMggoShvnTagKcFVuUDLUUKKsEKv4A3MFC3fqa8X1yuDT2KCbN",
  "key38": "38tnnGkwywRMGyd5PYG4ew6e1bt32vVSy7VNZGjKDKRrrnZBsPeK4Q9UufcQRLp8AW9qPT96FUY6xCaWgaBzUEUr",
  "key39": "2aS5BZiFMp6iNrYWMTWPaiDNMn62YsiCZxAYFeD99j1Vpr5J7FatHJEspK3UDv5ZXKRiR3DBVGFxopadRPhoZoNn",
  "key40": "664pgg91MLJAs2H7ATmr1HTLPa6gtsAh7ei7nYknrPnbWRzevPwcz6tRMAXn3mkXqphVU52pgudU5a3zwKmSdTFE"
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
