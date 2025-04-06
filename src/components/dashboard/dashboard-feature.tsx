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
    "4gYRSEeaSdo4aoKkfSm1GXTc3mR5DNsNCxSfYviouKQGCPuEr3uA547S7qTtgP9Wbn1jY71SUU4bh72UyMYTxccn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fRXMvAgBE2vvHQ7QV8aukKM1vB6C8o51QPj4tS36M363KUGCTVX2FePWqeF6HFCf22Gv7PXDd9n43X6nL8DvyPe",
  "key1": "5L83yv7fhM3eQeFxAg1STWygHsW1Mr5sTh8Ei1PxmGVbPVHiq7mE47fGnkfeDpBXrCm3PZqFNFfj6W6SmpsPgYrT",
  "key2": "5v4BkKkPXBF2yTvGy23Xfpd3BNy8y9ne31ZydUw9ZCUzxFpzpWocqq8yntKvHwoCv3jjoZmmPUBnqhxxTmuoHP9V",
  "key3": "3mS9NfhDtb9MBwvvYh1NGP2PQJEs5fn6Sj7AC5rxoU7XJTef8Z6zGtXSG9f8bARt8GJQVtzyHqXkN7FYQhHHGKZM",
  "key4": "NiZC4LN2zRQAuzLN86CLYD4mByPJ1xpX1NjqARcNUaLM1yDUGHADuVEsjmaVJQxRiEqwCUwUrp8yV2LZqC6eFCj",
  "key5": "5Csebs63k8BkP8zNiXwmST2NVhtbf1g4PgwH95Zz66FLxJHUBjqcxrsfA2WLRuBup5nKAR7H5eLMfj6M2k5xgGb7",
  "key6": "4U4E2kwzrQDYQgFrBDbbGWNygxeKxQo1QnKcMZ9vh4w2y5neScz6ZzZCS7VANLE5mUa9FoCibyZpRA3WvPtfQfUv",
  "key7": "58T3SqNMGffNekPyYidUwGgjHaddWdsrM6kDdScpSifyUCgu38x2EvjfggEHYshCf9LJgJ72p3dCt2kRaj9dhxQ9",
  "key8": "4hXvnF7JkULJesLYYYWebGtygFRHjjYQRHDdsL6zqdDQv3VERLKLyCMMfCdBu9n5GtY6iLg7SYrQUMhha9oJPmVY",
  "key9": "2UPadXDwaqZnk5eZ11Pci1LWN7TPXCNzSAcQFchUnWeFuCrGVBBfoAkmVu6HAWUfmMVceSzPQKfYJN97WxHnQ9Xc",
  "key10": "TyVLd8fn98Ts3dnjtM7eke9Gk7fjBxwzLgTQQznp5Rv9wGPzKAkcpDKVdVq4YvuNdDsD68VrW3imRYooJ5W1KhK",
  "key11": "25wyDyUtLaCiE8U2FaHCjtcGB3ypGdSm9oWoLfYTXwGhp2ydFjfvFbbtbikxUiDoWodKKHCmMowNwqNd2JZp8h2b",
  "key12": "3Swu9oTGjj1pi6hHbmLUHwCCL5T64vRdyaG3bRqak3NXrEtnHoJouM1rzNRM8q2JABpqrmuZ3G1fTuRHbywdTc3A",
  "key13": "2BNWPy4YBGK7Hn65Y4jabkkfHeXahzYF7GF7QeywAmWRnDdTGftdhCFW8cMPiTUdNFACFKGV7ezijWoiy9yfRiaK",
  "key14": "5aPPSZrVWfKdRHLZhPKfmyntxFGEuEQEUXC1AB59sKGJ2ekqSoUsqcXQaAJs25erSuEH3XC8cQ6WSzDeoY4vq88q",
  "key15": "371P7DmE4G54ZpgNhccXCscAYMadR7rENbSoRBESKMrkGGzv5wHdXEumEsfy8ytDcpH7Wx6jVNi9xWuMvVBcC9SL",
  "key16": "4Pzv5g5Anh53BkBaZgH8j9eAWqPiAm2Jsk3TwqtXuErHyrGfJRNgC1yN75pxToQ99oer5aACpmPqrUNvhx3TGkcm",
  "key17": "4RYbwRv1WwVtvDCzNeBBxWBTJuHLGGjMruTGtZgL5mRjE2Y6JUrfucwyKSJBq9p2GyodfKJEpLPkFV996fQ3WhQ7",
  "key18": "3vVmPZUD1GT2mGBbxu5QZA4xP8mdYb8wQ8dBp6UYkQ5gFRuDsZBYQhGYUqECQ18dFCpxchB3FwZJWW77g1HxXCAg",
  "key19": "3GF1FJ3F4UhUEYgJDTNfgkyCzG1KHXHNrYZsxJVEJtwk6QrgabB1efJ4ACCdh9vQs4NCUh6SPZNJHR6U646GuwPU",
  "key20": "4tr93vBzbnvLXbNqi7P7UK3gwP3bKedQMBcSRLaLjnrYyw6Adkd76AbtrBKaSj74ifya3LcyoagptH2eufhKTbbh",
  "key21": "2gSXopdvB5mAzBGbjpMaYHs8f8DzMVSz9nCwSKhUYicsbH7mYA3sVTmVNw3bK1TtDW2UR49miaq6epn9T3tGq3QZ",
  "key22": "3YaK5Yhst925k72J7JGeSgmkhPMzVrxxpjWZzF7bc9wLLj4wLMmX9FoiCyhgK8jkFPfArSi47MvP9QhX5Pkw6QLA",
  "key23": "d7eoViS4KScadTLKsxJpgw1JJYgW5KDcCmYWYcmurAQFd8BofFf1gwmZrvNDRHKvavUYesPjQjy5xTcFcXinBBj",
  "key24": "QqkHze7JQY1pLwXY7JR8HapSpqeZnmD1iV8qdGyhjmHeYsBrGBkCnZyanVsjcHEoFswXNKxZGgYdhaWEfRXC4W4",
  "key25": "362tPZ5ExUbPfMhS4y1mdm4B9hb7QSm5S9dnq7Jb77eRbm6VyDVtMDBG5b3vBxtNNRv3XdQY1ZGaTM5hUAE5Wyek",
  "key26": "5qA4qnKCHwVvVadyCZDNMsKvFcaakAwFAorWfMijJYL6YDPwG6pLoozbSJeo8Vh6CDdcnEhx3JmkUBd2gYf6K5ks"
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
