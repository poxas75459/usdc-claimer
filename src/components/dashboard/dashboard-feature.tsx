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
    "82czs9djgLHPnLuV9jcJZCzRyyyDeaqQHjTvRvFTq8vVo8W9Py5rB7vqyeHRM6uxLWsuY3tHCTXkrBe8wJHS4qF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uZ7Q88tjKZcra88sTzx7aLdkB2yjGt9fVzoTbpk6M6pMiv2jPS1Xkauqnng5WV3uHdVG1sqrxZAPTeL6UpgFtNj",
  "key1": "2eYkhNCDhRmTfJ4Gksyrp15mwKwvv5feKBNoe6ztTxuMegfKkL5y4qM2kJfmGNCLjxKiCmX96pBtSyHmuqmdxeDC",
  "key2": "29SkGWeHkgf9Rvw362aH4ZYLW2DmUgj3njvB6gkUXQVFvh5NJU1xxhGwTVBDNTs4YjYNFH2JD8z8pvBMWDQtpgS1",
  "key3": "5mgQca8C6aA5NoCSJQ2UzDbYTKqZR6EnwWitJBaSJnBebJ8hcbefpkdHneq53MAEF8Z2YqmSy9kZJMD3LygVKjXj",
  "key4": "5b82ioPxvZgy7ZZadmLkcBmwXyQzEabjB8tQXHh87ADTtxCCwXi9Jx55M2zpYP8iWD32Sx7uNUHoS7BZudKfGWcM",
  "key5": "3n8iEc83N79hf6oLykAuVW4PDYNsRTeJrQs6x8GoGkuXnDgHVo9oKcA3ZN4F53mUFeCeB3MfWJWJmSZQFjPFsuBT",
  "key6": "2QAY23YCKkfcEUqKutxEKZCxs8U7CWjnjHMQDkou9gdNMUYYWFpgMeLpSTdNkEw98UTynxv1spErRd2bJp7Aai6M",
  "key7": "2A3r8ZW3atkcgqyVLDChRNHFHzsiYpjXvq5SX6Lp3h3HRPWvQcF4vzXDydu2bTqBokb42qLEMZQXF5wmk6JfX5S2",
  "key8": "2j3wf3i988P7MYQsjyRAE76eLuvygGJkrJEP5UPeodrmNa5Eks2fZRgkkAaw4DGmdWV7a3fjY5UPDcEDMXLRg6av",
  "key9": "5xkQ2smRGBKQhChYEez4F64cEA7FS7S2XLtgGdcRGdhWUQCUESztxS8KFHuio5mD5j5CAjLs1pNphXmXjHMVF2A8",
  "key10": "3AUSjtNrLkBerUb448CrU1kYJ1Wy24eWq4ejDyydXj16PVevttB2WWL8Hepr7iu18TZJ85uvyxY7njf8Qj8r3rpE",
  "key11": "4435EuP131vT7ETFm1B9vQG94RFwQTjhTdhJAGVcRRkfRY4F1iNXmfrCHHLbGW8jTGdLeFyAyLpjPY6cqo8RcuzQ",
  "key12": "5e71zAopNyebnFrL37iReG1TjP15AsWmwT9yYfXfZBaTS2JTiz495dmNsTxYWus7QR7osJZDtLQVFyA42TVCBDTG",
  "key13": "vzETvkT3rC79g2LPFw5y3svuEQLoveYcYNRjFSkh6jJtHV4yE4C5S1xSxYE7mjKbNXMxSCG6Mtsk84f3yLhfDYj",
  "key14": "P6WneaPGdd6K4qpqcgE76EF6Xdjo7jPL2AFNqLpGsAHARS9KDtiS68fT3XipxvpX8D8tZURTCfePCguwp12AYhE",
  "key15": "jJG5G4poFfh5122UR1gBN8v96xYx28QyTZpJo8pHNUeY5VTfHRNp2VURaa6GRVr7zNsjN8QmzEnV2GCAejJqRaK",
  "key16": "5siXVeDiZZGXnL1hnFnjDXuArEeVuVhLaQffArQ8sortuFu6VNfnQqhwNUmS341fxN7RiyByDfbAkKKNwJbU1tSm",
  "key17": "2Y3cm7m46a6zAyBD3nbqoyYzWKFaZ7WY3UzTc3sk4KHSVsMYSFeQYCkhZhhSHrhbgwmUVaACo5grbf8np9sfezu6",
  "key18": "3eznjAeWzfxjtubkhLEvKXq2U3shxXdxQiyyHi1dweiXAzeXRwSsks8to28TwcxxhwEjQcVBdVNxbDV9cCBzgEBk",
  "key19": "4iiXNaEXyVgz5zrtDUZTYiM1smac6htZeHQm8bzQX3LxNkXJHi4ngYnFG8zFctCKvmRDur8PSwtCHhZKSHpjMB4Y",
  "key20": "212fBdByEVKWjSZck88oDN52QaKTKvKMbxXUWEDFP3GKGtXNkcVY6xEWdavH1Z3eD2K33HuTq3CKep4pXEtszGij",
  "key21": "3oEvdQCMm9dSLkFH68ne8zwjLbaSB2YRDyCXJmk8kjZzqyRR2HwQrFifWYUBc3NNrVd4rPoADpJSW5eL9oAgRwLE",
  "key22": "4LatbTXVsZV5mmCzp7Qo6wUVLbjCmD5ETjauWWGDZx3iQkBN58B4eDXv49f14s6ggjXNTvkg4sLiT1Pz1bMjxJ1g",
  "key23": "3ePtUuZAHApJK2DbqN4LfVksye3xfByrYcRanRnW6gGUSAPihGaaf8DhxtcYj8ewpbSE9eCS5mbjeVef8ZpHhSWx",
  "key24": "247RBCnGLMngxnpPbUVyHUJ5YDK2L4yRJyssoSeVWw3VJowXBRhEEy2kzeEFoaGsr7txNKJ6H7i3tWx6cxNg94Y4",
  "key25": "3WZL93KqHSwh1Lgusn9Sx5sdatKLB7FvdPPQG4BfNqdFFK3pdVMdFKLR2iEtwAVvaFwuoCRRNNxLd4ZMMPjpqyBW",
  "key26": "4UodzxececQqBBCjdXbkxsAgDqx4oGoNykEMvRtTMM9HGMRPwkHKnJEwRscYJYQuhd4Ui7Pvqp31VfZzJEeHo6CW",
  "key27": "5qZEtweWMR5tuqjYBFfuJk7qcXNknFWzq8NnaGcJNZQw7dEMNRhnLb1ArjYnwkQ68oWpdrQC9mzdDiJBAmJFGaDn",
  "key28": "5EY7zy2xbJ1eVqM7L2uf3TANw619igBaibispxEbq4KU88Y7nH2J7TGgEfDskxRZ38dTU2RmQDUFU83JPaBzSDn4",
  "key29": "ehDv5vCjzHYSVpQ2ZhmEHukDA8Zfj2uUwaL4AEuNuKtbxir69iXKy4Zp8SSrqU6WEo5vzsjV7s9xeLgQ7y3ungD",
  "key30": "4zHJPetePF7wTbXoKicZtoTRDeyNfzt2UKrREg2EwCUdzcj8Zi8SuyvBGbDbZ6SN1DZCw2G2GVyYSt4a7S3QcBo5",
  "key31": "5YKG4ywrCNxXPSzDEcoEBgWF9qoSaTCk1ot2eXdtshjAszU8Rtbzn6Dn6r6honDbVxnxSjwkf63ujyHPR7px7tTF",
  "key32": "o6cdMyf7XoAQnCXzNCCpMbetfg8JmMS3aTvTdZoVBfWHGTyc2MFiDmtqDMcLd7GMoYksLtEa6JUWXitwjtj3osN",
  "key33": "456ZBQM42K34wWC7KGUzTqzKnPPHXWVcFX2AwNWLEC9JUj73jhhH1kKrxycdFNnq1Xp4gTKYFHgCCuqdgbrgxXgp",
  "key34": "47GcGD2mEnH3tcVpH2LsDaZ9VbpS8addcLeqVJVYrBRQQ68N8LUWqGeML2SUBJXd5uBapMzN7pBsAY6nxTnzWAm7",
  "key35": "4qLMANybA31C11hYryhE8YiSog2BL8QKVa1EPuQZdZ2Rq9FRG1MdYjSgVjnfr7uYZFYUej2zi9TQE74TsJkJ2m1t",
  "key36": "4nnRK7KVmAVRMEWGdu4EevkdkUAA5SWKSVgiJD1XwUa6UehDdGPKNKhWcGoGzyjGiTG5dh6FjG58Uqo7LHRFtyWt",
  "key37": "5qBrqpUPwJGLduDncvDNaDPjDnwFJXLTRxFpLSQm3eZLWCPuMvasMMBN7ettpTaFmWwi2d2jeofE6j3ddPvit58Z",
  "key38": "63AuTsD3rEht4vNMAtfdz9cgmMeYcDw4S1zD4jbkTfQcn58reEXJuatVy6itwSatFE4QJT1CmMseyeYFmERJDcPk",
  "key39": "5FY2RaA9cMQt9Hx3RWUB99WmiouLWW9WwQLY2NRrV2CWnbMbhtBaGAwAPYVvzsXoUAt493VfbaVkfv289cp74Vqz",
  "key40": "5kzUP9S6SoP53SbDe9GXvhixA9tSdAbcBkxt5Djv8Q1g2Z7HMZCyLsNTuqHLJffFUarmTuRSvDJGVxHgEnkFLvRh",
  "key41": "2L2Vy66ynz1DVXb2W9AtHe73xRuUxYjmUHDtMfxdwe4sMJHQ2aAiCrdJoL5B61gHiyBtyVhwbnVk78kzSZibMVnk"
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
