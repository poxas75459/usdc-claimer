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
    "3vUMXHiDJYB62x4juwXQ56w1XVBj7dnwJ7GCwLEF25FFe9rvxD25Pqt9so7AbnwetZQWbDMyJTmRe5jGHqnpc8z9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ywaW9bp9KZeVjrPLu9j1zDAmQNx34CBEq86SfhfyEtiJXJ4K8Vt6BpAffD1bJV6A41GK1dnznTj5rnmEXdEdaGG",
  "key1": "3MoYYVkLXAxUezYCYjD6nLJKHcg5rVaGPJkJuJfucuqiQbcHNViW8TTB5J1Nt2kHXPSFJo8fQRwvmgi7Zxzg88zR",
  "key2": "5FsGU7E8QnFETjB1E3wcQZUkXXidLwveC5BgZGTGv8k7HCxG1WFAk1RTgB4sAfA1ru4SsHd5Brk28U4DAmkjqFmb",
  "key3": "Us1eyZRL2VRgyJg2pNyHmc6iWZiEtn9wCEHgnif5K5f5goAyid1ZT5c6dbUqWAxTbsz6hh5FLnekpEVvb3HJaK1",
  "key4": "2MDbWJ3YJkCaq9SpydXXtRsAnqnG5cTNdi756JYP3yZk3agp5a3rnv1Re58g9eJSZeGzpRShWs5i92jBL2eDfs3U",
  "key5": "52FNRaKycRWMLVv2x6NbDsZnHhmTETnyJ6CC7LPL81pG1f4kZLK1XnNAxP9dWMtrDxusD6YmtUAApKfTt19CWHW9",
  "key6": "38yJPDKZPJoPJifbJY3hg9rdf9ehfgTdh8PvvS3ahaX3XvUiE5HtuXSBG22QPtaR2pfdKLB4DKaPGALkyPFRrYWC",
  "key7": "Tvp24RgEREJZSkNikr1Dni7RELypiHCAuhr4LePnEyP9rSDar13cu9iBdqrEnzocuarByhBAkLP3E3833mWJP67",
  "key8": "3x4WLTmgHEakGqkTDBfCTbeMsLybkLuCwpd4TChzo3aPay6HDYUKFYcwbofgq3R24fLf1KPRiNfimGX31oXK1WcZ",
  "key9": "3sr5jXbBHgoy1nhax34TpMQvA9pTi7eD987t8scqYgYrSTaUWp2Er3kuLdjXjbJmF7vyEdoRoriV6a72hCzMBT11",
  "key10": "536BFqBH7kxcrQTQDC2iqh4JeuUVX3nTQP9c3Tp34MyVN4qk6CYeEAxyZ3YHmZwcrMA67P73sagtkkDgNhwpjh4",
  "key11": "5fVbvXveB9LCrkKHqTpi3o3DbF75mq3qq628t7YYm85uZ51pg6kvxsJA3nWWe5VtwwWEyVkN4TGx151ALHAjg3DS",
  "key12": "5pwfnyovJCLcXtJGZaDsANxDwYG3spCLJwUUxkebRhwcEgerStZHrtTrMr4ys7DpL7p8pZYkKpjZ2BD9BW5cHh6y",
  "key13": "64qJu5LHJjgdZKfBeUg2BceWcKPtnEpz1fcp6MfRNqM3rNtbSzsTAaM7BQgHGK2mbNDbYxumBPs53qXVVFoFhUCu",
  "key14": "2N2nVEouZagftQ8za2QHFV26LPbtYW9oNdLMxwL4HnAYUTfFb8VmE6L6m82XGD2E1gmjon121vTG9Qe3mrJdCEWu",
  "key15": "29JriFKDKkiU9iVEZo2TdSpHEjPfBM9HQ669324mM1BKJStHrukdk156HiHiCtoXAGFgtVSgrMSVuySoNJwRqj3i",
  "key16": "21sthTitJsh3MjdrUHqHTa1PFTU12XCrhbLuptTyEsBQUYMqoxN5uP2UCxnGyBWkpJ4HDXwKv2bFaiiVN7mkvoYM",
  "key17": "5dDtcYSYvrsQHUYLBXDjMcoXnhpZeXJ7xg3UhdnRyitXu7PcStvL5kz4e3b7eHd2xufx8eYrJKGA7ygcUGVkUDPX",
  "key18": "3mkdYJhxToCynHk8QR19V2AtrUZXFNwj14LVyLymp29YQzDXsTwr1TiNTGyAwB4bGXuLC265xQZG9QapcYDERGDL",
  "key19": "rh9x9MpWqkyt3L7DZJ3w8HdKJNmXK7KWrQAVLTVYpUdBd1nV5HeVGEHNH2So4TpJCUvP1Pa3WiMdTNgTqu7QGmB",
  "key20": "3VcsQBWz3h2CdKpZr6AUzCXmVsUeuqtSGy7Kb8EJW6TfKB1PZ8hCHrSSECraru8qPBLniYVJhxBauALCwMAsWFPb",
  "key21": "4E6bQjZPj5KCNDfQfbcXJXjuFJDdaTxq7QaJ9DGkBbV8zZ8RcNCYyhRNS6ueVMqwNLGrWVEKZaJqYzdYEhSXFQn7",
  "key22": "2P7Ue5yotpPNT5kYEN4tdcFLFibbN3gvWWSG7FnRf5HnH6gnGuwpgZZjY54Y3jdPGZSgkE4pbyF8K1SjNtBEyNpa",
  "key23": "MP3xv9mUd2vUQg2Vd5w3HnDJZU1vKSFWeGmEUuyuZxRVE2bmVbeJwg82Kqjm9w8zd4Z9NMhnfQfyYzjcqUyXS7R",
  "key24": "53XZv3fnt52zZouQhy2SbWNeLMcZevoUJA5jc7RV5thS6cmVm58KVb8BXVaXgLa27jXtdfgk2DiTxkUhmW9FF4Bi",
  "key25": "dPPDAUWVZoHCYdzDLHyBxMA7UphUUJ4FjwsGbNsWbZSZVPeFsvucYCPRhX4z5pmhQkq7rDyFajXokekxJNZWHvB",
  "key26": "4KECgJc4MvEtxUnJph23p3CdC1CqWVTRY9B9icvi1GrzWwaMDiF5mC8xexgyKqXogFfGSmLfFLZo8HrJ8Z9X7c2c"
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
