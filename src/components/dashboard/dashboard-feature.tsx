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
    "534vcYyhMC68mNEDNY1CHSXwrPLtx8y1FGzyQdUHzmyD1mzpuQMZxPmxpjCsZdzn1Wt5Eajf64WpVTq4pbVSqpZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mNwbDtL9UuwStGGyiDTfyNMXsDfzrBXNeacxPtx7dmKqNNap9FiTV1FhXywrvoXL5az6pBBYq8uUb7NSXaUxjqA",
  "key1": "eNajSKGiNAzZNUm6fJ1JNHeudK5W51zyAtTcyb1GdzA36J5NF1NKR5zpKr6cGunRZSe6ZUddscZt2rLJXmhDgAU",
  "key2": "2muS4TnKhin761WVVaBHxBFkn2b6StJ4S3dKhc9rRQ1FQBB2Ua3fVoZWejS7HbNXVmfikN2DJe1VAZ1w4KmcA3Pt",
  "key3": "FBMJR9MwHZrPL5NwFFYxAxpk4C46c2A6L2BvdAZtAkRwn8dVxbMUdb44TYK7PpTyR6psgdkDGHCpKdELGWLsx5f",
  "key4": "vV8BwzVPfgpaRHd2uacYxDAm2j9eXzT6Dt5fL4tVhyEbQQCcXhifGVJ7uFNac4pLBeU1BDJBX3gi9n8Ag1aGL8K",
  "key5": "4wfHvsQvxfVitCWJzkx3huchkwh5fVmhyRJrqwidAsob72vVqaPzXnRyeLsa6cKQPNVqFGM69jEqfHnefZZuZTs2",
  "key6": "4wLQ4VBpx6aULXgMKKTXwYvcGcPuuh3KN4b7c1RHvG1Rnu5p66fAoaUk5WDqvPvtoNTUEp8FJAePQmXn9VvGg9yh",
  "key7": "2a64wQt1W1TAPbLwRzpz4KHhD7Z7Lj2VpAoWtVLWuePx5TxgEzAWGEXmbYdDo9zesCaPkNMKnGaUfU6HsuMhTs9L",
  "key8": "4bbe5crztP7DAAjpGVTfV97krPo36rrD2MB5jmC4TZBqHyyoA1YKjLyuYhFrEacJjC1vYtpx3BT6x3B7wRMeddAo",
  "key9": "3mmUkoa2VfUfCEHsGymxZrnToz5FEJNnwvHsfYQsE23M6sD3KCknXouzcL1KCfZqRNTmHwdSrcaSvtsWrB2kNSyP",
  "key10": "553A6mEYpU9LYsLkRa45qczB7A9MwnZsWk5PmH6skZ2pcUUWNXNZXwNDXUD6dHYy2TEL15abiU9tQqs5BpM14nyv",
  "key11": "21DJXAC5DUEiZmua9AdD2z6StbMskFrnc6y5QS3vsWaFyKr7GHPqy9BhFuJQ8zHKNdRyq3fsVUr9yvVZ8eUBZtV1",
  "key12": "2G4WyJJSFE1FSVuc2SFkd99sDzL7yD2FmHWGyU8B51tyvFAfbMybTW4Mx1CEBSWYpC6tZoZVUv1h46Gtnj3BYxAJ",
  "key13": "3pKesNLYP4J5Wwvpcaf8oxzSWsUbTjWoXPC4gptDgihAysoTFoLBhxi4ndk3FUbpYJh3LgiwTpsEjvXR6DFtSc16",
  "key14": "2evV32QpgJ8FozxVeaJHDoEtUzHNHJveZBRA5UgXL9HXQ8XYGUJXaRQchqefjv2iXxh7scS7fDXmUhetMg46CNn9",
  "key15": "3JefcQMJiv9eE8vD4aqeb1E4BmXxZ71M8xTVS6bmebD31zeaoMK4jEgZtNoYsfSq3t1ovyFSEKajLbPCAqx8tD1N",
  "key16": "5dk4mXBy2i2WK9dQ94Pkrbng5nL7XJtuUgvtxR8KhaQQWg8nowvMUANwMNiuScansn3NPbQdNHvhvRv2oSJAZkAR",
  "key17": "2WQKqkYVcuy9SLBjErN3AKFxJ5ZrLWr3yhmcApeohYJgQpBcETU14WGkgXHbeFfUzF8xKiYvgCPbZGLghJ6fmHz3",
  "key18": "5ELiYFEVtaECxcXZEvBLN6ZT8Dm5GQkXaT4jGiZ46tqf815MHqXAPE46bUPuJWtnLrDu6pGKGX93XhnjS8yb9h32",
  "key19": "5a79GuUrtY6H6iAxkqHoBeeGn5ZEnRj1dweBmyNuQ78XJSi39dyb41csGP4rNfYxc4zNMCuToVYoX4frmyMnzLu",
  "key20": "3YRRZsqaUf9gHVHsUaGaAmpYjNsTXwYWeCmqtKM2XuyvPy5hN8GCrtE34aDNhtejYzqpWMBg254iao8sfpX5r3nP",
  "key21": "5zKJrGAViD7Aq9TxG9frbjjMajLoHksckErvnQt45WiHT4X91MgPJRGrGptMUe47ay5sRiDhYg3uxeWVEZBXceyU",
  "key22": "3K91FGNneFeitYM2FqDS2eEbqSEwTwNNCBMoEZNhL2KgTMXuXAm7joTUwa4o3NNP2QVLK4ce1JDKHZLFNwgXExpc",
  "key23": "63twQoSeVzWvoQCnmYr1KuCn2G5wsaaG4hCyikEM2NXhgUTANrutcQGHS2K6EYhjCuwAU8AP5vm74VT3tVHRWqfm",
  "key24": "5JWEfEzsPpw7XhAXmhLB7Nv2RCR43SWmFH3E4Rhc7p1DqVTDk7kDzThsXwWnsyN3N47dnqF9bLLL7Wsjhn5yPPq6",
  "key25": "5QVNV5XTsGg1Uj8rSoZ44jyvnVHjCZF5yDxNVihV6nYFkT64xZiZUAi1Mh79pPeLAWpjARC4BumY25kWRDVpBM5S",
  "key26": "42UzZqLyXCpLqMcABB15FAwfHWss6rQS8wPuTW2smY2RKqT4ZJtusoGX9MiEFt5PUtiFMYoJcdHaVyzoV4Tb5Eq4",
  "key27": "2hztmVDzbsCKTYycqQ3DhBtDhqP6jif9uTSNzTiMtGbtK9DEkajmPNV6RZ5yCKDfFgXmPbK7buGrg7FXK6JmPFB4",
  "key28": "2uRJDSdjGFWAWDcLaQ7QU33kTNAqJBHa8QzUXSwYpQLX64THgUCjq4YGMWWjhQ1FTJa5cjnCF9wX9VxCbsvwa5Y7",
  "key29": "5NF6uFKtCLKp43PPpfxP7ZEuHfRCX4bTH5ULtWSzS43GkUpxcnh6CAqXfGtwxEQL4iNyxK17JfqEWjSDipFbxArA",
  "key30": "3h4TzXdV3h1gyPanyJLXiUQ2yrxAMZDWPZWeXCoTLp6SPoQTeG8ZbvYvAba4GENbk6vQMLxFoZwUTkLwHEXpKbqe",
  "key31": "2r2ZLeizRN7jW1NMEqNpY4VeUKjyipgewJZeWYWhdcKEaEcVJZ1Hg6bvSqcBQKjCPjLW4YuU4AECE74G3P6k4MJe",
  "key32": "CGcT8RKwrAaYdxZkhtJ1nSau42G5JvSUpcy4cV9D2onJUrGZUS91Lsp2zZZgorfVgkiipHJrUttKzMuw8v5BR9L",
  "key33": "2U4sWjUK1Y3RsQwH19XLnREyDttV4AvoSMWKNJS676BeXfydSzujiJMmaPxKqjn63sjX29Ywaf5PUVDoSGe3Ge3a",
  "key34": "5kAPKNBVUsFJRdnKe9bNYb8XcvTjCBu4WGScPLbLDG27TGfFZA46PfKQYvCUuvhkZehgGzjiXHfmPCsJBMfA2167",
  "key35": "2t6wtPJg7cfYApNFAsmEJzycUavrjijEJekeCdDpvxRerM4Gx8FSuhgtfmuK3f4dqdoZds4but7rFQ5wmLhzqd2n",
  "key36": "Wa5hi1QnkFeQtr1ZtggJgXuyDFPFhdv37eXKDPuCXc8PCpoe27V6siXYDrwXRsCP2CPvsUaqqnqDorB5jQuv315",
  "key37": "2A1BM1ykKAmrCYQgWSNQsXysKne1LLvivqZqBrSNEmzKJC4LHzp4Q38CMQj3Tyw17f4NMegZekfGztGHHBpjbsVj",
  "key38": "2kY5ntFFbYXnvAjN8WFmjeKu3cbx4fnKwoHFybqWcmytWMkRveYNQWQy8Uv8md6qUqDNezmQg4WSyNiR8zzbndZa",
  "key39": "3sVYqjm7iFovym8iQ5zKUSTscheRVRr2kPXiMiGhRrEG4HTke1sjhjZrCabseWsohioK9XaHnyWeeAgac2wpv943",
  "key40": "5sYperNLy6W2XJk4ts419zts4SseaKwikcEPakKeXHPETW8PppM8vyCEBYup64QhmsqcGRVEzmAo9rvKDrt24ie7"
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
