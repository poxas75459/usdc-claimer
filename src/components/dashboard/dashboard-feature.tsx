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
    "2Fu1U3ao8gTLZM5uc2bsMHFuQrJacP3ycaDEt4iHtGUTM9JtsnrJkDWepj5bkUqm5Ee1Z7xAdRMgJLRce1djb2c3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oPxxiWRUmSr7qGgdQQQofyVL776ZQyoYTWEDt3nUPWhicFbKxqGwGW6oY7ji82dV9vJcvmhwJB3izuAMWwV342V",
  "key1": "5EkXnHasUmVZeFZgqwHULhygPNf35yRnWoftUn3tiNnQuiC7gcg22gbBgCezjGNtUp4iurv5b6ywBEm89fgMos2W",
  "key2": "2WbLYt3bw79xXkvd4QHUr5cKpV4cFZqnA1JHrbukW74EoXxFLgtuHDkjiWqygcPpU4J1F3ApevTCBATPWgB9tu7c",
  "key3": "4UFC95vejER948WieL8m1F6NiAB5ug2vJKzFzJ8BEVKtLRdUsi6LL8YKYbKmukRQdT3ckd5jF9bW7ooRKXgLMzj2",
  "key4": "Ez4RssmvDWAWbjergEQBin6Wh3pVy2EXGC5kT1zDXzw4kkF81hgSPg6bNCcgmwa9FxGwwdgkYLPbp3SPY4Cp2EZ",
  "key5": "5xqnzVqu2KV2kp98Zvuv5o9bciNxqZpPfPUQSnHshvAQohMCPEzc7fSqe9jun4zVmJazB3EwPMVrXEt3UGAunnRR",
  "key6": "4otA3FKnQdnxPuVKj3V8fFQq9v3pE41qfCuWPeRVGw3PuUT9Dn3zDGA7x6Ly3GWsAhgngWWnTwTLaaj7LU7qUtw3",
  "key7": "5yTBhgEiRKATNqE2PyvipSBRdd9Aw43Ly4BpSu72uMTZgxpk3YSz17s2h6hjZKnDr94sPRU8W9sKizj8tVKBa44t",
  "key8": "r2N6ghU6ZUwEWYZuckMbrYKhuzGfbfrD9Upepo2ypGphup1VMzWGaiZD84fBpiK14nwEm212M5gy4TDzaAeXJ3u",
  "key9": "Cxwu4rFmf91ctCf5kRTuJEdbvZZyBnEZZv5NFF7Wn9sT91CQo5u6GdmSPwsmf5nbo5tUgkeUoYytKGKxgGduSqA",
  "key10": "3sgXvFxhzAxeubeTvynU7c6WuZBwDsMPXm8hqV1nJLUnEkQSVtMo1UjQghUFGWrjZfDRRjfrDDyVXK45U5PjRnW4",
  "key11": "ZGunQhMebEQ6YM3HKzftDzz3vgPDsVuv7uJkxXrW9szscePuGTCK4yCgnt7GdSMuuZMKmxA6WBRAT1aXrb4FqLy",
  "key12": "iEuib9cJ3VTkzt8m7oYm6Kcjod6SrTXWsvv2dVqJ2BHZaTvTDVo8EBK2P1aHC7QgjfjqFj3Udwx2H9ETpkbbeoP",
  "key13": "4r2G1YPG3haeu9iWw2CfK8XynrozrtBTNsvAupWvkvGLK59Ch3sMKVTu4oTpySGT9457QnUsUzb1dwAyiDzEVRJo",
  "key14": "45J1qrahVvKD9aWa7bRG9gYQ68pcgR2ZaRK4qg1NCLrvq9RCfMzbBdtodMaiAX3MPZJ2wLtoCBygfsk5Xja58L88",
  "key15": "3GqPLdQvnnQEPTgBFDmQhHRNctwVGtAEByxDzQGqrrXF7UXoHtyn5HBvQ8aUo1VsqnpMmchWwCo5tbkQ9DWyrfbU",
  "key16": "2SRTgPzkiCSPXR2sxYdTUfvFKQp5tqVFUQhgA1WbubUXxEwAN1ToZVq6EXF4uT9WnLgqej14R4wnjk8tNjUKZPYi",
  "key17": "5Q3mXWuXVqvjCxcgT79SvWUGKz35RP1gJnzwSpHi2e1sJkPU5KAcgimbNNpVDsQiY83vmhaA78r51tEP3G8Pjh6M",
  "key18": "2FiyNKJjjZijB5mWCDDWaTuoqJSxhqhnKWsfkWMtGhvjuJo4Bme8ks8AYD92xiJa5YCTxfDbrF8zH2V22h2Cgf8u",
  "key19": "QuVukdAQxHKqPMoaSfXbFtK6hs533xQ17voFgqww5jmUJQZ1C5Npo7xNJ8NNxNCtr1CP2EtURExY5ey5NipNMqN",
  "key20": "3VWmFTpURdruzrP1NgyhmMNmC9m3wCERmzGd8GPAg2pwNQFFs43BZkVa71HXAk3PG5GkKqqWPK6XfPCA34EzTrDz",
  "key21": "5FHEeFYtmYMTgLV5thQSgQkNdF8GG5jDWJ9kMwWUZdeFjytPKz6nxF1rrZWKUV4jZ4kjWECs7f59w4wHEneTcbdF",
  "key22": "54rVnR7MMygor3WbfAhCMctqqeRR3K4nHFs6EPaPi8R17ptm9U9BajtxMySKkCXwKG8TDJdWhHuBE8D8d1ybt6SQ",
  "key23": "4GR1bWT7qyKsu8CW2TVMNMqPAgQ7r4TsjGUW5BaaAZRBGRQD2sGDEg6PmTPQxSPazKAivDwJ7st6RLDqySyUuLdu",
  "key24": "4KY3WFgXx6b41ecsJj12vfxdMCn2ryKiDU2LkcG1PXZhCBNaA2sn4sUUXYTKrtsLcVRhAyuVRaiYyu6cu4m2ZDwf",
  "key25": "3huPPr4M6qyzGnH3pnQ6VSnseFSKW3sEzNF1LQYu4Eo7bLsz5VceLBLyAjvttRup8q8jRDvDehcetN5CHqR8trc7",
  "key26": "4t2ynF6LhfYgdVSBQatTn1Eu6ZgrgFecF6JQxc7pDmEqC2Hth8MX2QKhwaBQ6do57sCQ7WnnSQFzovAb2o5cSN1D",
  "key27": "Jgw9vXgPsMqWWxzM67rGNUyAfZ2sTcVEqdjL35EtPTtecYpCoDTozTkohCcvncnMDR7wP6YfFbYwBuN2st2Z6Ve",
  "key28": "3nHaJ1YybVKvAjEVNSNgpwtQRjigqJY4indjfAqxfdKHRKvoD8oqyf5fVbkNQKdwSRdLppHANvdGsev5KyfjdcsC",
  "key29": "3iLmCqkH6GLH6vTAsRJNanTfdvw1iXUevvoRzVrL7amKaXxm1nqQit5r3EgqsaoGEzkAsaahvbYugvJBL35ymnQz",
  "key30": "2eRweAGfKDbnoy8m5Mm1npAzYKufg1PF1gyea93fiq3pJCHipVjXB7VNgoKshMhYUppjkYSZHP4uyBU8J8Yb9THm"
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
