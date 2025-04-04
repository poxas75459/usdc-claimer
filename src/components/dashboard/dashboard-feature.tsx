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
    "4yuXwETDWwkLWYCYJw6URMjn2CbpQ5nHn62f8nC46KpkmGHC5KGXDtnzSsSBtadPFPtLeMUxdTntkCEfqPUr9E89"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FyW3D7tZxCSAUhYznPBneb2sSHyp7gAuEduZDDaZSE8efgUp9JSRhisQM5K4cEHVQHToV6xJkZRMoE9XjihANKa",
  "key1": "5qTXa9XnhynivvMBLFgU4Kzdok81Yc6zuGzZTpLiBqmB1av3TfMR8wemoG63MkebEyw9iQBkeZkum4UUZzFgVEVg",
  "key2": "5tXWSZUXW4fT8s2kas38sbqHZkpvhJYZd3uKJc728Z7gYjuVXYL7TU5LKeiTwsYn3BCpcSYTHAnisNHMZyPiofyp",
  "key3": "5WZEnScMa4bx4ej6yjRqF8ZmMTwQ2a7NyeRTdoHYhK2yohWQTqUjwSuoXifYrucrksJq9nwHZU8VU2QZLSBLujXy",
  "key4": "hALE2MmjtzfhExZfeQXgxzqN4VnvZRmQPnwCwwGfahXWFA1AyNSKBjiXsRWFEd2o3T1kio7zp5YayQ8ct5MxLgn",
  "key5": "5bk9wRTLhkNaBC3ZM85Csz4zXoqNj45m41GBXwUMwf4RCsAFB1Njbi7wJgPDFeAdfpu5eSxKmonQr3nQSAUYQ3Pe",
  "key6": "2V1LP1akcPuicKw6Y639MN7Ytbh8tdc8APnWdibxSNqqT8Ae2vQr7vDVjGZdjwgWRfK325C1AQyM2NGGRqmf3cVW",
  "key7": "3dJNKpLr4mUhzq4KYqjXmWqTvjiBZsm6q6JFk7SSQSuWopKYTM1HyF9KyMzt9q2QjzEWcdNuCmGrN7Mjgkxya1o4",
  "key8": "588Kojmfu77z6oyLuQw8rvB21L1zYhSHrnipYSxkGuSz1nBfJFiL7AfKB2RPYJBDGEUsjzcc7f31zZmAyd2kmsYv",
  "key9": "4btmdAW9XbCDgU6CYZPqk8y1dhyMpfQo1WyRHgsA9ChQxr4sfH68mvr72oo6XHC3K6g3NCmWGmvopaPmTAqo2BzW",
  "key10": "eVuJhwXAYdfWvgCqLsrMhwgywiW48AaWfbVaW29iU77akAFuPsztMmW9ZTCb8mJ5ju155cS5dSPYTjXekbAVFkN",
  "key11": "67emD35WZzffisoViGKAGihyUkz6ZuCUXBKMEM57p6uGUkydsMKWrcYkoqsFy3C12Ktxe7bcg7sxnL2xn9tsbaxn",
  "key12": "4NzbwW9yFYru8fs4m1e5uh3SUmk4bq7rAtyzUsBv93wEcUQLV5SVFVG32DqFRXT4wEyvhLsPskEad4YSJPYFcUwP",
  "key13": "2k25XDVEY86pQQTobQ3wS1CPheDKL6U2h3kvs5b2VdJA8v3QQf3F63MuxTWj49Ajv38jgQ3Tur2iwAGjkQrQAciU",
  "key14": "3Abw5AVECpsgqjccARmLWcehG12r4wEd77uPdqZQ1xoJgzechZhueXkUKkku4NQPECgDqhoGLnv8vhhbiB34nQKZ",
  "key15": "5rgZtpxvj4pesQHYpJAtaEJGYMaDjhbnZbaZWHoaxcJP3kPh3XS2cP1Ct5afqGVF3c3r47ZQXAg6qbvrEizk9c2r",
  "key16": "48F8VLctjvuL3x77ppYmDYtfGnUsRKLbd3meZFvFLQHyGaLKKZA3jDGBMiHZjWcEP6SRrqLKXgtafhBH9DDJ88bz",
  "key17": "371MrL59s5rnQw8MZEgrKDJnKt4TPZ1PTaSDmh31iGDoqUotDVgPu7zJKEBBCqW5di1hX2MjcojXQR1RmUxfq3TU",
  "key18": "4XX67jLdbVMAa3oet3AqpahqrGXUM37TbCayNZ2CQ7dDEP3fTRX1Q675JbrJc5ccPR6nScvpCoMysTbr5pUV33N2",
  "key19": "mGRAHS9wdkBmw86wrgGPYksCTGYyRKfyVgWFCjAqG291qLDj9Crujsk8rt5y62VaDLPnoCgMKWWXPBDN1oSjfoF",
  "key20": "57sMZ3bdWREftVDoeWmCXLmE4eWURS1uujXtWW8QZ9YAab9mpKnFRCC2VQ5onK67Rab7buXdcAvQsDsXQqdJuTDZ",
  "key21": "57bLHfXcXSb1Gz1ChR9XL3p4pHoqnnQToworiWyvv5s7NMhGsB52w6eR21MPCPEYRnjdmi5qLV9Dgo6bXgryznHJ",
  "key22": "bM1NWKTedLdbfUKiEeTzuSoZegLFGKcaR3pM4daeGtb7tANEmJvFCwa3VanxR25ZQV793nvzwuvsJT73UGcYnUj",
  "key23": "3ubPSJ66cDcc2fFTMgkMLod3tFfUNersjgEoebeitZWmYZd9onNGGp9KKfGhUyoDMZMRk4iM5JsqpkkzSjbVALnU",
  "key24": "7NxxMrWSQ7cuC2YmNhA1o7FpR58Umfrsb72U5BJmWQKSuMGGg6BaQP42mQWEwC5H79V2wxZADiHahq65FDaqseu",
  "key25": "4JuCB2RpZssAc6hz9kZPw5Qs1GLWjsRpJUZWEYMAR5f6oCTX5Ecvaa6EGEneRYKaAbJPHEhk41B4D6AjzcDHACHZ",
  "key26": "3t9tnQJX9vugpf3xRxpEXTQ75PXyJKUkvnj5nFcR9FvhNFHhiBKLj34h67k4yB6heEHnbfiPYx9aqNinBRFmY5X4",
  "key27": "2i2KE7cHTAyUFGdYagTygE1E6EyYqUVbsmrTWmKbeR3KvMZMh9DVtun9JjvL55cPSihx12ejhvYNjp8YoNN5yUEp",
  "key28": "wHZCRv1ozT7LA4e2to6PpuAJR62ToTreJVKgZmh3ifqBWqgXGXNpGaWVCVLLsiCGfpADRgsh7YeT78MdH7oc3Ed",
  "key29": "Pze1PqwqQ55JUi4NJMos5zVfh6oBpo3C3k3jhcbcV1aieQykfUy9rzyNTTHbXwsHqvZNUSDWaAAdVzf5Kax2PvT",
  "key30": "2sfoMpbSQYSascwZhsCGNNNcX9Mzuiq7hDV2yZAnsHPTa74A3vscf5bvoraBJHsk2LDKEEmGKwXb97o7HtTdga6u"
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
