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
    "rDocCYAWhDoFbKr7kx5oDLb1PBNBAsnzTzFfEnuiu5x58joHRpqFbNMdX8bCqkjKQtq3JWjHr86zF9KeLSXyUqP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sCdewFT34XMvLDimtK3tLVd8DYL6P8GyivChU6cdyVac7QnsWpWcftPZSFEVs58SmhZ5MeRGSrFwQHBv7GSqa3U",
  "key1": "4qT9exJCCgfVvRsYDH4BbeLBaD388jMyejumoc6i4nP6LphDdsuxZb9HEfqdt5zatKLNXJEDJgEE4u63NXoJ2Dhf",
  "key2": "5p9LzzUseFAAfAbnQqEcZXMCXBHXeyRRK4KPzaEGUCVbj7qtcH5wrKvy4uDj2M42vrBQ8u2yf4MHnfwP6auWc73X",
  "key3": "5BPbRdUjTwdeeaeG4N7zWHLYnD8j1rWPVtuphmzzy98PeUxzxQXzuq3RWnAETNMi7B24mdaT1GD6YYJAXEYWBTNH",
  "key4": "63bmZHHB5u4gwGFNzi1cHPQcFKe3B46MwfHiuR5m76UhL9JnPmnGAH8Sx6yocpVNyucnXCh6PomDcskB5vD7ZKes",
  "key5": "63srtKe66F8SQtmhCrMNkLTitniTWCp1urVG9bCPmJp2T9MsD6D1GwG83RFFweZe4R9ofFtFvEuyQGP7kWWQNBAA",
  "key6": "RawEp8CbKyjC4Kdnn1gHyEH9gTqHDW2cXRGdf6d32tZ4Dshh6vV6HQphpJmCRqCKLnCTh5z9CNb7QN2rrwm5oaW",
  "key7": "uSF5Ct38PjNkvBMd8nsKDqSFH8gDdhobQgAi7MzzGAbv3Q9jccnpkPfHs5Brkx469PuujuG4TgZRSTdyfEEjKny",
  "key8": "4Kgkz9dzzZ8HhGM9kPQV3Wkf2JFWuBzueYcF2yDVRE4dao8fHAYi6qswVMnDqSY7afwphgdrEhkusvRANPsQS9VT",
  "key9": "4gxfihkSGZqjr47tUYPqEJroVSnYqu92Rvh6Kkfnq1Japp6QjGvpnE6KUF6rrTEKZaDqZFecTDc1iNoF7KXahazu",
  "key10": "4FaaPwwPoo1Ufqk3yWHaL1rYJ9NGFZiZeGmKRpKHgDU3icFUyUwM8RaNknevfnPXUuLZpg8Ppamyx1ma18WBRJhv",
  "key11": "3ydjPpG7PyfKp5PuGp65FDmZWSUtYRF6R6ngkp5qK4LkGgnrPPhDzV3sRcLBsn41yYGCMxj26zqcv54KeHMX8sin",
  "key12": "mokfJB4cu2cMUrxtay6Vei9Kf5HdKpuRQbbq8jVJoEvhdmbwSjVjRhNWP7itrWfwzbg4wTtg9toTYHzfsBaLi7P",
  "key13": "4RhuYEMxTW1Vfb9nTo76YrzGqPKht4DSRAwYPbH7TysueMi5wjDqMBqFK7txWU6iZbfedWqbBLhiA69VW9z2ApHN",
  "key14": "5dTW3iowc9isVkX3dZisAYbhcxkNa27StZdFcYgnzC67Xmspagug7AZJqno1vo5QMgAFh8RERCjD2DhPTLE1kzCa",
  "key15": "44pBM2m8w5GaiiVfgGnEw346QsJTuKHEAw5Zdn9jwc2FyPBUdtts46v4uyicn668SpGnK1TdVeqzmUKt4ba7u4gT",
  "key16": "5fSXnuhqUvDSXP4k9Yum5quoKjqJjzfvWEPibVpo79UtskLe6tqjdWkkPgEkb75RR2g3exBRMWf94KZ4AhehGRUm",
  "key17": "4fCkxJ71u1iYz8TjHJqvpBpNWNbZqHtDk8mQK641g8wL4fFRmr6ivF7cJfZu1CpbTPrDex4iMhhEaCHedyjf9hUW",
  "key18": "2Acurgwog9rbmnRV922RKVKGug2YdfZqpdscxzKXP4FN7DJhYWYCtWyEi64UefXLxYm8z2nQV4xoy1A44RrW7s4G",
  "key19": "4g2qAzoB4ygfsSc1RnGQgg35Ni5HDgedo2p7QYKzPnaPXLDuePQ2JhtTq1MM7yRnC8Wo6WM1hHS7f2mhiFz19aww",
  "key20": "49qEVwYRTtcSuHBbd6CJWwtu6f1d4RJMCLVSMzZfDmaMN8beDDWiHpsVNeMJ1kgTpojMSnjiKxfwj3SbTyv3z1EK",
  "key21": "3i9XPGTf6rwdaAzbHt42CESnNsBsene6C33aqXTDKBiMSFmE9wptVanwVukFsweR3VtPHSdmusbc9RZFEWALZid2",
  "key22": "3sVrFXEJYDfBx5hjpACP7M4C7LRcktgtYNfJCQYeY82PPiCgPnnw53pjbQs6aV4wR6zyugQCcm4Hk2fdjn8jpkAt",
  "key23": "5fB1GoRFP9jtqreqdTb5BRBnLWEtdsnaw4sA7z8n5DC7PyPEUjPbxB9x1pz5WGKHGEe72GdCGieAMwnThReyF1WF",
  "key24": "3hjJja6hp8AnMZhFSwVt3oMWv47csh3Np75PeiVjLSATFH5JgbKV4CJBSNQVkb96CjA2ANb6mzr4TNw7mgWpUPT8",
  "key25": "5tpNd6SbJ44nDDsG1iPZJ9nEbJMRF8CNy7iA7DcSpLnC3GwAEThxiVvAUtyrumSfSAM1SbMih3i18HvtH2ZeqNfk",
  "key26": "5S2aAehTZXSQe7GPi7f4rnTj9LXMJBbYuFP2wDH3f6yZLpeubCQbrZ5odGcUQeM892Ydu5W68Bmv4RpvRWv7VHJF",
  "key27": "4rPpT6TMYGewy484BfqspikEwLb4TQvEriQsK7iUAyXD7Gwq3yUBDxEU3Fd3X27N5zN7jFcuS1zF7uTy8jDEB4Tq",
  "key28": "4Sdhc5a3xwkX414VaYGPgQcz5YRNQ8UrdxeuGH6JaZvu1buvxURpeTviydD523i5zbF1mEbadRfJD9JTeB4ApSJt",
  "key29": "ZLgHwurpVPS1ctiLzW5vgfSdtRnLYNpGXCFJcT6hvkE1upD74PvW1ETdoy12L8gaeXjzdtxZKzFNVm6semdHT1a",
  "key30": "2vZJuEiKrwBHNxLkuSKjAW4HRii7Pi7cpcmRSFbkrCE6GtmTzyCHVUyPtd9WC5XmoTiFU22eHEUL7mXonff9Ty1L",
  "key31": "4vjoATkxMTWJBSMGp5ruAT4K3moTDx4Zwpt8Yhsy9gtuJWVXBxvJr9YQF9H888bk4eoHmB4cdddb9Fhvy3vXWDKF"
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
