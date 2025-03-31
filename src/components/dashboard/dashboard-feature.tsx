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
    "2goGqYryXZZypgf4RnRk58w6JgCz28WRd5mY6MfvVpgU6mAkLhoxEL6KNdrC2aQxoZBG6DN1Z7oDDRvEpXsRt1bC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cDdFUxpDfASNTkVfnxfJsKToYkVA9jJaRwVSNcjpxKn1F7eBp3Bx3oDKwBztth9CF1MsetYUPqZJLk51oHXHewS",
  "key1": "zaCbjb12koVndMVi4biiVZSwKduSPSpsdsJ2uT5dakBgir1ZDjAyJcNAgGGyPDgRaizKgr3i4dcSKV4VpwbNsQT",
  "key2": "2WccowdLHbLdj6ktnFSAqLp7RqTEgSQsnCVLjWoBgEy2wFMWVxouULM9PVmk7rgp9Z9ZF2Bbp1QkaMtqYvyiJ5A9",
  "key3": "2peJ32biceHUNzN1zSrmAjo3HdnPM4T9PyHZk4iw3TC6x36Q12EmURE4qZcmZXieGZsPhAdHx5fmpzY2QsirV9rU",
  "key4": "etrBMzZ72tegQFCyNH7KenbCdhi2FxgQLM5Jz3AcXUPYRj4KY9iPVjN2KVZiW97BhERZyBxUxDoAPEkqc6etT9i",
  "key5": "5k8QBRexhBCAyG1K1AyaVf7iioMSshuE9FgPgH6aNi4cvtHGcF8UynKcJskZXq8ALwkBzB5se5TuFbfjbpNvTuc",
  "key6": "38Vv1X1XTAV1KbC3Mmv7NyRSsvnb5U4rW5zKYdq8fLF2cfQT9oaiTAWfGGsncJQgU5MpE6Qz4tRT15bGkMCyEcWS",
  "key7": "5TbRtUudjFF3eQ27viBrQjWnUWZ7jbV7iTYsTsz1gf14rZC3FSxGAr8BBbZ4kB9B2NwvkEx75ibyPDmz9isPSb4s",
  "key8": "2C3xszoiNw42GbjpTQaC7frZTN3yUmc8Q3Q2Sji48z6qHQnxKC3hTiziXS3gmqSoMRYxqrekX5qjRFd5ruwrW3py",
  "key9": "3rXbYEzQ83qNX9Nwjp1uPAGYiQfJR1juuoX1i1DTKPp4oevT8BsZgGm96pKSpYTAXfLW6WFJ6wq9HdC78zN6hyRJ",
  "key10": "2ji33NNJj5PQ8DyBgiz3iUQxfgEWzV4rNugr1P6zMoLoZir9oV4pPBagRNTVsVjmoWCa7r7CfaXWGTENQqcEVTW9",
  "key11": "5EQ3QutT8HLqzQUNgwjseo7KLqooUjdSn63p5SKyWJ2iCZfxsoK74WF4PxvWqRo3BbrMoBLFVytMBFWn9TQk2dYh",
  "key12": "33kRRBM186dxxQuMaAtbQHoQcAoqyYKRpbseecNgs2znWr6c53vLyw3gDGWFSf15u4cRn8Hs7P2NSLR7t3r48ZQ4",
  "key13": "3XHCqszCoh95kftvYpoaqSuKPDbQdhnKNXg5811f31rKm9CkJ5eMECyojXtnyCSaz2v8bYwxPsneaU4iNFj4iuSh",
  "key14": "2BMYRstBdTjGHpyaKcAtp2kcXsV3Z8MMs3MocBKZr4j13AoaVoysNprsMaHCHE41bFYCupmFvJXPNPgbzs3DQaKQ",
  "key15": "3eLWUykFMdPrSWvx8sK8zSJ9dB3oqwW42SeNCTqoWMvfjWR9J6RKdxSYf7AKLK9cqRMLTdh2wJeus1pyuvUgrq1V",
  "key16": "639wvUsfJKZZYhkwehiqPJ2g1J5GRFmGwTPWXvkq6s2rrDsG6RvYBMR7GsRDvkuLL22x2W3rAdrEcaMFCy1zej8e",
  "key17": "KKsffaDEJKhCuDWzTTF1hhF5NyiD9kHG74foTXg9oC9KtuBzd763Q8k5g69ueU5GtVUhPUJVjYihL7sKutk2Wt9",
  "key18": "3f3oiBFANeSTrdgUuKHs8uQ1VsadFuHBikx74ybiSj6LG4RjoeHpqr4VHLNWkDg7WdBnERQcakSrzvvEUZfgu6Wu",
  "key19": "4rTMGMW9Ddc4h2bcLmHzRiAxqqYCDx9SWQNRAw21mUaY64QMH8XECk45XSQDzn9nzTzaASBdBqpF55iBLoR17NCg",
  "key20": "2TR4dGjMUo81kTXgUazL4U5fYgAjF5eXS2kxMkDHAtaSRx1sc1grJjvdHgyr6DnnukBMKaWnvjXfWJfq5r2NsM8F",
  "key21": "5b1tA2siBNSEwkDPDNhd3EcsTQMSVRgAnX5rNH76yjqD4JCY1Pk3nnFmwSE8K4sDs8nqoGjmQvrjsARFVHKXzGWK",
  "key22": "2ekQpdAop45qCk9FvQ5XNXQkPVii6oWk2yo67zBJttcGJ5G1SR9utiAyRChzJszwkdZMqAXCmUBLt34KDnB55Xjb",
  "key23": "6V24wue4REhofGdM6zvxgVdz69BbCrAebzuMy5tDKuuYJis1L6tbDUbFB8ghGRzeaHN4cWP9BeLm6LSyNvSHzLq",
  "key24": "vrsXsaSX1PmFwbcdF4EEraTXYVjZMmm8CRnJeKKBYGFhRoggZhJd5DPY8RDnv17otgTCvSWH8UzdHV4Mj3BwHWz",
  "key25": "43mKTdayXGjaJtQ1zvZFrpEzDbi2c9FtFfxR68EffYcE4eBir4SDDLm3A334PqXxgHuwwXfXEJgR3ER6X4QFDEi",
  "key26": "n8EvuG2BX2D2d8siyiCygfdach1GjKgwrm6gpUzDjUsQ4vBjyQkJ68gPrUXiEKwz6QjWL4EY4LbaeeGHc52R7RA",
  "key27": "3dR3T2v8z6bnMPiJRSh3gXsUydUaXJwz3ReafLZswpVP82DKPCaBt3tZmBhecqxpgPKTjgK5UoraSC772FgWkqnM",
  "key28": "4sUkpNmQArib1qv1gW7pr2mGd8vnDwKaFmXBTvSan8DYC4JACHacSTsNtkuvGGeRu4rymwFvJiX1bEkAuPgJEi5U",
  "key29": "3WHZWQzioeWDcGZb7CmoPfHfyQs5qD15cqJLGFXGQW7wc9kZcRvLx59xzCFvzsctHko4iMxSoVVacK4kAjEPMi7z",
  "key30": "1H47y8hbsrZuBJbidmhaCyvqYzfguXnn5Xaa2Jej6FUeWYBAtiYmQCwiV4cQXK9An7T8GB4wDHVTDbgGc9wtdXV"
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
