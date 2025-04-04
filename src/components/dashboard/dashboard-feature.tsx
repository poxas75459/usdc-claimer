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
    "2nhnjqjCvNqNX51x1HskntJQFagwJpG7HPmEvEWpQeKnEkbFok6ZZmbEp4L11oc6ouSnCDJLMVeV1BxdQb1kBJ7P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tqT9Et4uSfvRrFFD2RFrphL2PpDFqpGTshi4vqiNePq7hPFvrQVbXSdVcrGA6Vxy65Hf5ZSBPjuaYGWG1s45ZPk",
  "key1": "4s2KqTBPu7RfDbtg75KCPnj3Yn8hsWCRkr8x9Lrf796NMgwiDpPTVmHw9XFr5G8qgE62DokJvCNAJ7i7QJhaaKr3",
  "key2": "3HWtghxJ83M81VF7s3KxEAZgB4SmRu7iHkMBT78iLZaDc5QFUD9uSa4UJUVhvAxBYX4T5y7Ex3A7B1imRd7jmHg",
  "key3": "5mMT1WWksgduaKGUaozkuQ8dm5Fp299tZZFqXHzVCZZvHe6ctYkqwGGGsHTp7wqYwhddnBsLWu2U759CMtFR96tS",
  "key4": "3nxxdtb98KLkL9o5fUKaoNrsTXfRN7EbWUVhUk71iuoFNTjwo4odqAjH6ZbMvbP1G8qXDY7VTEq5MoXye2UdivpV",
  "key5": "4pzdGYoNnJr1WMjKaqPxdfPmNgQ29zHfDifiZeSGNvCYi6eAgx4hgjwLxScpg9nVmeqq5AeRHzB2sHFSTuDzV3PG",
  "key6": "5gTF7RGVLtznUiin6CzScmVKLRDCLj9qx9wvarvrsiUzJ5HrEyAVrjfzGxhhWfaHua6hJbNoVbDFRczP38GPMyyH",
  "key7": "2cC9MEwAFcGqjagRCK9nbwH5M2hV9R2rbgh7rDXeTEVJmGYnDjx4Y9pXywkLeLVghnhrGi68eXNzc8K688QpZE2F",
  "key8": "4vXcgWiQHzJpzR9juRFJCmM1H2PvdQeYmL4TqJNKpupZKyfYVm1bYsNKvjmtV4hf9DEB2uPnEEJrgDyvVmm1c3oV",
  "key9": "4Kg2T9LLxCrdGGfpHE7xDJV6aS37BDSaZ3oxr69YCs9DwNue9nde4hq3pz1KzWxsWsTVc7sYz3CECJjRb6YyecLs",
  "key10": "4oGM9Y6uptcTLWSs9n3nCHynp1FJnbH2twE7syNCHCK2yYEf7VgF7A33BcDbFt1CgZy2jravYC87NtqNtSDrpuSm",
  "key11": "62TCeQ5b8rVa6UPkr3tUHHP8EwfCH7UpU9x5QDwEMw35HVry7GZWohhufsb5uEZzU95qAxJ9bNXq1FuruxfGPPYW",
  "key12": "3GFrFfm1XzaHfe8xoJfFMqXHoE2tND2xfE6HvDv5iGfniLTiEPo9dAJUpgByxFjQieQmsrgvqAwE7zFeJrvB46ba",
  "key13": "eivFa1Z2fPHtZ1wXtRxJtCqvviJWvSS85FmZuJYz5XzEAe4oZQR8aV7uAByNa2s2r9tUuw5VmLoVb19psC4ASpt",
  "key14": "3NjkvrGaoAH2cegzNU7GPWrrfDXWj3eKPdSFcmvyHnnvoXoPLEfXrDJoobmqXGEUpmVDtLUhKkCUpa5nL9qB78m4",
  "key15": "6UAHA94g4gNhZDWDSPRekMdLo5mkkxn8jgy6329Bj2Q89B32aPqVXCTNUT9trRDurZpK9vCZ7eqCzR83EKu3QmX",
  "key16": "uz5zigJSsNg8bTqDBQZsNFSrF9JLERGYwXm1nZDw2X8dTduWFqLTQtnAptUvXBrBVJVkJwgBTxoft1QZUH3CaUf",
  "key17": "dLnB61SvjUBzzu2YYHDoDYMh4zpuVNadZh1Me756hY9RdM5SSst4sJ7nnAnyJPFfUVvBTLg968FVJvsTV9XJwwT",
  "key18": "5zCXwdu7FjXzrG8TmVgfHjKi4cxi5uZiV6XznhdJCq31xZUT87UtNXS1svMgsYe5Xe26FDuVTxLqAAYa4z1ykJ13",
  "key19": "6fGjrMxuhnizfXtxk8UzYrheJR57c4CxeUyS9tUcGXxhgcDeq78YiDz7a6Doavaos5dsTzKeHWStw4h6Qh7v1A6",
  "key20": "4b3uK6pGCRk7txBzMGivyfADUSFzseisZzzdRuvUoHq1FxfNtTUyQhfY4gBAMNPzHYq6ANmFxW2CtLRZdaDTpU65",
  "key21": "5yMrxSr6LfYbjoYFZTqRx3ZqQfAJokV9PEMngp9r2Yqqey9Zjwrgwut5FxQiPraDqHYTc74AeLfd6dAuawuAeoof",
  "key22": "5SAynXmHRh3tqUL7BBzvw1fPZWFqCZULCrV77k4u1UaxS38QRPLYKJmCyv9TCXarJwcmY5VG433Mh4VesfDYtvmb",
  "key23": "2BgavzZanFacaJZKBCQdQxFhPLM29avJijiNKQMs8dpEz27A6PBcNuBcDCi7tC8MkqHC4PAtuM3abfnA5W2J57s9",
  "key24": "5GVREyHT5CerdFoFgMV2263KaowPB1T4rayTi1Ynk7H8YYcENouXKoTZgRxHDGV4RWj8YnU1T1WdcJVtufkL4o73",
  "key25": "t6NKSuEByn94bYDdHJBWyHzAwPPnPgpagqwx2uD7vNLv35FRybkrWpPMQuNwLu259YB1Aj7c3xpqcd5Dza8LRvx",
  "key26": "4N2gdsrSMWq78HMEKGzaacEebAsxuGNPuRR4d1wxcD5h2RbBteKnnZNHBZNeFrvDWFuWJZxxPFPX6tcY1XhURj58",
  "key27": "4kmFQxGie8gpraJ8N539dqmM6fW3eSJJxMkmUSqEsjJ5CAXU14gGs3FjEW3QFvkNW6Q3RqQYD3LY8GPxLX7LEcBV",
  "key28": "343FiWRLN7KG5CwuZxm5Y96uLowX1LAZueBLbyVWqAb28NLyq1UUkAiXUB1jejb5YtDmc9ahPSesMGNrGEkgKJ6k",
  "key29": "3LM47HtrYhzk5AhArEicChH5pzTkZ89LFQ9aHFSabMXwQ1bMVytE52toLwrnnbuCHc5XiAx5bK5i7VvrDrhFBpgz",
  "key30": "3uqPgprHT7arYzi5o6dScaManpqn9SjmMyiMsizxW2Sshrr6qHPuUbqTc7ouNRvqZSntqQDiKvTL6kCZTL3ok1ME",
  "key31": "2DcKB3yQF6aGW1dTE4aeqG2iZF9CgdcLc74j6sRSoBiQSNbXJaermkdXDmrm9FoL9pfo2LaZM793MnSz9wCK3rRD",
  "key32": "4YwQmqE8WoRusmz5MVBuH1zKTvGSDqNz3uZNqTuSjeQaXNFYEZZphZhjKEi8apk85kKybkj4Xe41zFUzNbqbwEfB",
  "key33": "22N2zw83cxqXuetEf6CAxYTFqho9nqFvxrB5KT7DrSp3ZPpQTZxniEpqmK821egTFWHxAN543T3zZN7De6R9BQQu",
  "key34": "53gCoqC4XVK2tqJkQaVDkic495VJWAgHjCQ2ZQemKWA6LbEj4xJQ6E5RYJWt38tnVfgLz1QwKW3wUmd8PqF2zrR8",
  "key35": "2hcBk7qhTP3mYrJrGTS1uCAXnrVWRJpbaGMLAA6VJuMu4QphcxYFGKk4YNKKgXkknV5e79qDYRUEMkgQyjVimpug",
  "key36": "3zm2vuTMKbotwac934vZWBd4i7uixnJSTf53cLduawk7LrYeuu8biunKqLdBmM5JDPK4DEgbe7rQyeMprtJRzBm7",
  "key37": "5fXbtR1mbTMxbZ8vWwq5D6G9CUpezwRC9yosC7KunHSFyodekzDRQuDdwEjQ3PydumbDTbgfXc2cCLZp7Vwzhdi5",
  "key38": "vcgyi77FvpHsHN2nkWnRZNQyE1D1D9YWGUxz4bDNMNqhoJepFEjTwMt6uff3ESLmVAbrNB2efAWD3V8vNFx9PZQ",
  "key39": "29MkBaqrM7A8M15yVPawLKVaMa67zVvpEMneJt9FuCGtyJaTJmTieVdZCCUka7srqTVxDqj3KarqGHVXEc4obpHz",
  "key40": "tT62j9rkFzHsWSgPJehWL3setiPSRHUfymFCSZH1QKiQkc1NTda5Dtp626LP6upGAJ8McyhmwDw8bWj5wZWqgXE",
  "key41": "5G6gufxGhjQpVnbgV9orB1wJTAW2CvabEHtRo7dD3daqUdm33Nvs8PVUzuYYQZ5T42CosHVFWDQALEFUxdLK9sdX",
  "key42": "48y1azWm9cQEQStPAGQk1oErFjWpAEVPj9uRJ5G6deS2ieWDGq7hsmBmeEKBMVRT191JTR8KRTcDLFH1hrc5tL1s",
  "key43": "38Rwnr9iwankefTe56hJCUtVYPugPL3q4kxV3j8TASJEKYWejeZ2VABD5cxM16zWMbrsUG3sqQfii95Tc9iMRna",
  "key44": "2ESA4MJTwowACFUPG91XknUNkFALuMpyp7ojVRwmLE9omwUw1LWY3Neqmg8QN2PfEpXaRMTvQqhdJN6VqpPivsUo",
  "key45": "TyYndz7a3J2yoP6PuBJpoc7C7sM9GRiM5LZ9gnvVNHHmFwsZkSrT694E3JQj7uYXpCmi6Fab82EGg1qfq2qDg1y",
  "key46": "3TPBvt2hMF43aCwjC2TG2iyuxyiARGni7Keuxqa14wJFo8YnfVPD9MpkU6BjRVjTfJCDLnQRKvnr6YJdJpm3R7iz",
  "key47": "5o6aANkG1wAaAdXLcSjX56BnbRQz1S8611BecMuvdjcxvwTmDVNcNcuYkFbVybKgdv3ZWTHicNnuB2qAgGLVfGJt",
  "key48": "5CJeUdFgTSxPBzj7gLm8vnEZVzeyyHtdGcpFnGVyk9UPeUTjESJxLe8xytKRn353BdpoLxWCu5U7r49AvBNwS1C",
  "key49": "2L6mh9ffnWd58hkrF3MnUJwmCMXvJYvFYHridNuL5Zc5X72oMLu3wdf5GxKSU6Yej9CvFbvh241JMcpi6sTbBjtM"
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
