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
    "5i9pcCwNgDNiNime9bokTDYZJwyumjFpJ6VsTvgenVv2jE1rHGStgjakqa5fRTmx46GdsasM4Sqx99t963qcPm4P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B6LFY1syU932jzr2QPURHhGJJunQHcuf43H64Hhsm9Y5YKjQ51jbTFQk82TgzSSMfW2b6mct9ouiw1MdxN2n4M7",
  "key1": "2yoJC6gz4kXfvQfwURX7eD3ANdgmUG7tVpd5nSf82SKCNyvW7M6GAvdMUnDsa7V3GEXSPo2qxGSC6SLpkh6VFB3N",
  "key2": "2pjSQxwkPH7hd7TkXdSa2s3Qt5LGTZgSmEXNjCN2oT9Wu3G6H1VELj5mJUVzFshHP9WmH53SsRT9ok3HD6HYCwdN",
  "key3": "3Y9d1GZyXhYa4QS2cFuC8XrNUVwkbNf1BsUjf1fQfYun3kYHNQUUGkkbZivSHziZFhStppnLB7kUJuCUTdz7h8Ri",
  "key4": "2tmNyieKBFuaANhyrCnppY2Nefj17RCg1bSd2ef93TB5X8sVm7WM27FqcPkP8STDeG2WyitdmN8u4DsCygjW3gET",
  "key5": "5ojP8SM33MbnVKKTzr4MNNQqwYidPVAaJmSUNH1Q7GxDSgTMomWrFWQxYCzJ8T1eJJ87PX4ZXvKyn6SLFEX1YrdU",
  "key6": "2NQ2H5DqFkD3WBhzPoF1hoHQb1r9o1DudEwWKLEj5V42BUbvaiGAkvGP61dkHeKyW1WGdMxm7au9azZv85HgmcDY",
  "key7": "CBQDY3Q5WSYVrUzeCDXE7Ky3Y7Nv9gwFoKfJUhK2vhm2BABCLbz46VZiUMFpm3m6NERGuwmo68CkJWuRxm7aiij",
  "key8": "3Crs2izYCF7AWYfRtuJag4gPMY1FXjYM5nFoDxsgYYYuSztE8RPsC3MUW38MKN6JbU1vUAV6PrVcNqNufwgzFWd8",
  "key9": "YZkbm39FqvhVA5XQ2ZFZP8kJJ7UU7SqSv7NxMgwe5jb8FZZyhZHZTUDg3gDSi9srs2VUzfHbJp3BB5iYEJTpxqm",
  "key10": "6uKPzDpx3YmaNRr9xgMWtSn8GpXewg1JJk8HrLhXw1iNkYcXccwPvV7ZvrCZeEW9FEbTKFKzaXDGPNY8GRhmnR4",
  "key11": "2oqQv4xJTAsDM4UUsydfpmvmXEP3tfiJiaj8f3pjH7knHzi1pwfvMrUzDyfcEsx8sNpnCgPaPnkQF1PdRmBiNdru",
  "key12": "2qz6EN1JzV8MPFo4fpHzF1n4TwyLZfrW5mivkK99YoKVyypgnYH1GFhVpLoLHaTpX969FjA3nWQsYNKpyKbbn2iU",
  "key13": "3XfcMpGpHU7vcuNaK1FCCYXFBgMV5rp14vT1eC2Gyb2RmtWbJXebGnm3SK3wzbx8hVPWRvprU72Y1PGhdXyU9cnA",
  "key14": "62d2dpdPYPC4Bp7XmVu3yAcSqdgdphMRMCpm2GHR5drXnfTyjxzvaXvxgF49STjNnMBXzy8t4nc5AbBYjuLvg7Bv",
  "key15": "65RBVeogQhmMnLjadmJCYHmpbYzNSoSpVbaa1528t891N3EVtfaRLtMXJRueQcg7cESgRwb9gFdBC6LBw925Vxbf",
  "key16": "5QZgDa6DVHKBWzH859X7xKKkfmvQQC8NGoteTohVv1wz7UEuWpY8kNMfMR2TwSDiRxEXtWzH4ga816BwT53Ypk24",
  "key17": "2ZyDQa3PFi17vQ31w5VFinyEoKADYiyfsG361sSVtERfWfnEtTSNADghX431abib9VALFQqUnoxDEucy45geWUeK",
  "key18": "27YCUhVnrVycW5qerBVeVkBQ7rCHw13ayy9mc4Lr4BN6yXrTkn1aZC1adwRjzZB4ezCTcqCvJF1Zi3nJdyM9fGqx",
  "key19": "he1G4HXoVmxwwLdBtBFVDhHqghLPP2cvRXNPDfTBZqurQQcqcCFWraa1WCBMUPuodQGToGHMTa3JCJLWJkkiweN",
  "key20": "48ebEHHnYQBeKH2xnamcMz826ct3VuTWydPiih7TZG3ESRJcaLCYSVfHMXyiG5n82FtJAJsGkRCVhPHBP2F382Fk",
  "key21": "2MR1dwR6wgwA7cooqtTrvpdAkx2AEVsdQDZCM8CN2ie34s5YNiraWYLqaCxZTWvinHLbNTTK5etkgNeFxKCNbrSP",
  "key22": "5oDSdAdgP4pLbWXoGsZW3bsHKSKKoQ2H26DyKaN8ZYmLBQjPWMMthQXoHSWukd9QVstrBWmYPkyzLXSkuepsHJ7K",
  "key23": "5YdqPthnxAV3uYjUnMPkPjFSqGWmtHD6nKuA3ERVvMgQFtixeTVNSeLieqb9LArr9TTafKyAxF31G7HPaDzyueTF",
  "key24": "5S3HjyxfXFoNTKwhh1Pr3AYHarsUZdAG4gUEGmRFy46NX6sLGE1cx4Q3XXUzCxmJwAGG462W5S8A4JEmX8mc4Zkc",
  "key25": "4FjoYKQUxyLrty51cABsqxmPVKEeQqB7m5Cv5wn4NHySezYcBx5CjgsTJA11EK7SUWngX6AdyazKgugfPT5mZGEy"
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
