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
    "23ZRGBCHjDu3XYfusHde4P19wEDvdbT98ZMJ59NuFUxRepVAPTBH9pfwHMZiiVpbSRohykDgzhMy6RFkio7XRHQr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PF6z2LLzTxZanZErJt1TcMaRSbP9yVsFMTHpK1NFEu8PXd24PVLiNDX5SBxxTujvd2ndb2XkRghMh8UZHsdyQi6",
  "key1": "5o1B2cq7ZikgwxzjU3foycd62gnn62G23fjWENp4B4n8C3LxViiKcJqbS1zQR933QL2c3YuTKWvDzjfvMAUe7YZy",
  "key2": "ho8Y695hsC7xtyuUYDeDwjJuxJQhQDiQAKYZMggVUjvqbMNrcxcBuzb25sAEhcom29crxij5MZrNkbpV48Uvefx",
  "key3": "AkVhbLrjQMryP3zd33sphSAukv1EMkP6dpucEHSbjBxXcWpkeSstbZCrege5mHxvDJbwvBqjwJWUuTvxR2PzYBX",
  "key4": "31Rz2rqqq5528eKhUVWz71ZbYP7sDeYFrmyamLBNfseFGn6urJyLqPGEwt1LXiJmHYWcNknBt4MUYA5mx9YzCV1",
  "key5": "3vyFKGKhfJ48WFUTwNjJA4Yh1fZhGgD94MRNkP3cUt3ZD61NdA489hWczPU6MwP2Q2aUK5hRWeANhHih4wjJ8RuC",
  "key6": "U2UqcKJtb2CP4gfRFKWMJeiBgcp3T9WPF8pgZrVb3E8cFEJ5adorXmEPx16qr1jr4EfR4ZAfdKmrGvCXKG2MM6i",
  "key7": "4E3R3o3VmWUycwp71wAeU8EQxWgzaSvEZJdYhNEhai2PyuHAzacZoZATPnVQjWLaUVvtsCCpJwBP5CTC1zZrNPbA",
  "key8": "4mFXEdNcecbF8daMYiJhZvRiGJpsV2kftcXnqaXtBCYNPkLR8xuzWVwK3w1pVRXHvgPXFXufEji2wEJvN8yvXsJ9",
  "key9": "2CnTHfAD9QQ3LPZcH6p4UvuU9vAs44d2en2uVSz3YLDzrUE4PGs4NrKxSfuX6M4ka493zKcegd3NZsSzMuAqnNRH",
  "key10": "5g64vGsMJjBbX68QZ88oM4JSKzXGsXeSQJ9ogGZrrAM5nw4qnBaZT36Ku77KVDfYHGysyohGaznFrQSJdi9zYeKN",
  "key11": "3uTPMJa1KRReoDtGB3MyjVvsE9dn4M46GP3rMARaYisDYetZfvGzWR3xzkQvyYYkJR9d5TkGy2eJqTRuwexF1wTt",
  "key12": "5AkJaLMfZEuRMXYHTNhnWdkpqCiFgHfnktbRzCosP99MRJ1dTN8yCYq2tAxzZNrY2TFooZbRYzmwBbkL6TfgLUbT",
  "key13": "w9aksTUpvXysdaeGHddc4P6EAfMVA4PaScgRK7zjTzyZo7aX18qW4AJfxfqDed8Tzd4kEaAd2R1mzH7vkDFJagb",
  "key14": "372apxb36qdnVyDmNuYgdxYdMtdYiUzY3VkKT11HDsrPqnA3gVVLoMJm449X8zMA1v4awcGfFyQ5hkRD3qxStq8u",
  "key15": "3gHjMd32UT9Chbn4BdCvdNNGsgg47PpcaeeikK5NUABtDo34SbWxwzwpDwJWJFk73oQ33xWPtc99nwZDPXzL9C2D",
  "key16": "2EWzsSRokM33QDZfXkPb8zQtJ7HJSeoqcmTnY3g2Mbnu1EBPQXxGwWA6idj8HbaqCCeBNDMHisaaRYuhssWVxJvT",
  "key17": "4NdE4ctJC1g18ysXyKXTFBc2Du5dPKs36ztJuvSzzTguGhrGA2LxzGnaXXQQu9e7GjXCxV19r3FJSK7Wm5s1wq5",
  "key18": "2RywsVbPTyuzuDBrHHVSyB4V2vd2t98xvAh7ncJZuxErx7aU3XogEsTsATzvAQ7kc44AwVWfTh2rMRrYao5oBSuX",
  "key19": "52GtRNi9bbb5WrKYKP8AYfJzSEfnQDPMKsbe5oNAyjGXRR8CKCZczSCaNZijoj1gTbdS4SUmaXV7NJBLNXkxTD5D",
  "key20": "2wN4Q9L59fJ7RmhMmBJHbqJfKMPduUe1ts2TBeeCuWWvWfaxrtNe8D2x4krDdFhquezbidZDP2ojGfLugEig4rvM",
  "key21": "5yySwZoJFC8wiM3F6T5rL27Y9jSSLjEHwqAZT5LdC7nDNEzMy4WtYYaRPFR7rPVtzJ5VAHMrQEGW74jx3dX4qgE2",
  "key22": "56Bx8CTsxtek76ESCR4Wy83LQaYGpXSGQnitkMmZg8iwdnbUXTRvexGJp9auLBJWaZo2YDsTAQchxuut9HNbuGLU",
  "key23": "2zdpbnGz774M5iAtydC8xficQRWd5bPKzuwFj5RAFL2isq5iLyJtTH2cuZSermcQEMfBCkNbdfbZzJ1JpC63HjrN",
  "key24": "fdc8mYYj7xTxWr8Ce2GvCXmoo2XKHCbyAGfRM4AfjzN6PmHsfxdTR8KEYAjfcPXBTzQRFVSr76efqDCxUPp5EJK",
  "key25": "4Ywyc8gMjfqZvgoMv754mHCpbvCnKB2RSDBQZFf91QmTZAqkvwvbP9LpLeuLUhSaZeNFvAPM6Zj2HZXTYrtw8tSr",
  "key26": "zicvye6SBjDwosYHmHEreyohfC2TuCLnZpbMDDfyQNo8GpWMD5TF27zQevJ5C7FhxVQgbDAZ4bsppVPRoBodPrL",
  "key27": "Pf1hhPgBD8UQXn93JrRCigxUjbxn4c1UieyoZ8bVmuHxDMuhx18v2k7ZFxaKXQv4SfMNiwPBhM7d1ZGdSA7xbxr",
  "key28": "5uJrR5MvXMfZunzcmJ5rXbdz2vStBB8SRhR2kegq3KrZVjX8Sk8x2XeGSD3KndXiPnNJtzVxmbLXkFNakSro8sFq"
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
