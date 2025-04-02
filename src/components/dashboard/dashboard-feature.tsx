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
    "4Y2xkqXEAZktbrumnzsqZUyTQ9qzvRHpPQhmZuLmAp8KYGzf2qfwLTmvxtuEw25JmVnKGkT5MTFGhfTe3o5S7rUx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2csqKHM4SaU4o196fb4rsg6kfgrKzABsgrQBJQkRDwcTFqLsEDe4MggC3JRvpvenMRgBLu6YvNT9z3n53fvGmmXr",
  "key1": "3KvCEsAs6hfWeoYmV1gw55rrGcVDts8fUs1sJXes4bNaD5mofhbqGnCLrn9LGuoobwX25Kt4v4rQKXmdzV4KbxvW",
  "key2": "5WtCHiYw6CQiigfsBN2ELgB9HasKyvVzbTuBQFtXYCWwXJVNB5eZo5E1rT2hetxuXDPoszLHGsDmLcQRiajh54Ph",
  "key3": "26AE5JJBWWisSq1DFnDA9EtFPur3eQ81R9fSuufDYH4mN8xhtgKd9hXQCdHGEBTXs9uzyYhFcNsdNmB36hXiK58X",
  "key4": "2NuJXQFJ9sv6RVh4UsY1MjkBSS4frjjYT2KQabJwcE6u4rVekkuGmyqGjdwBoHux4Lpo3hFx5M5bdkAkNFFgrR5v",
  "key5": "7CeLUNSWr1yvt3ChCvyUpsTVxeDGbQQjgyVy4RL7c6MFS2N5ZvUCZu8emN18xJSARNXAuG8LUWSh6FWotm67pcD",
  "key6": "4joz9HLrGh9xBTFC2VqKCyx8Fz5DTymtD8rJGp69EGinfoc2Cnn89H6dDNCdaDAA7R1Ci4b42QcStAeGsRjXQcJa",
  "key7": "2PJmcHxxGh7eFnkVhUTwdq2Gv8rNSJyfCvWYo5TBLFPTXSkevLyQLXF28oNWiZ13G2G21v1nASZRp9goS2STjLBC",
  "key8": "2MU6vhTHUp4DXnbuaQJ7gg28c1vzbgLGKqG4DrsM6unYSHeKqmeqCPcEpnky1KBUxqQDgvCdxU3WcmXDCTGvq4eC",
  "key9": "5hnFsMV7E81FwQyMcwwEceGeWGbScmWz9GgLBp74a7sNVhW1fAypX94NXYmb67SBS1JEyPGdsrfePBUzbnWM9FXM",
  "key10": "2LFuW9ppvdAhSr1iRpGubmNrkrbEkJzNikTShnoJjz4HpjenjEn7Y9Jcr92eTEdZhCGV6GjgiRhn7aSNwDkwWvvt",
  "key11": "5HMcYgGnRXHQTD7u2kXauNfAkhRsUeandf6Sh28udqYzTZmh9a1uSGFdwLxPFChNBiDiekzqyz3WttweQrzShp9h",
  "key12": "3toGHaYve7qAUBFcwvJ6nBPiBaBnM3zfVqJK4o1A75AnUXvjDBc8NkVirSVHbrPSyoQPQToLiSXhSKLxs9NmVskz",
  "key13": "63DQwainSS4w4iRqn2RkQA2xF72tmemn894NJLEy3zuRZvUF4DvVD3tA23py3dP6H88oTRbMM6USffSdK9qFs37J",
  "key14": "4YzB7XxqZXCWvZsvLFWGY6YEnBTAaDCpTMsSb8rhTjQYqAjp9evwqJNUhtv9WpSZt2PcGJMLLRUZjRVu6NBjRGNo",
  "key15": "5xfHdFyDczNbjrCthKdpkpJLxEunq8Dj3RaUKDnRzntgCxAhS4Xy1kzgQaXNokhEgHjDh4G33krayjEw6GfZYTqP",
  "key16": "o35iqqrFitHrWL8edCNwQn4CUzSB5a99pDF6EuE2zCx1o7J4d9tNCmmCTy6WMku6MiQBbxMf1q7zE3QdbWj2bLK",
  "key17": "42qneGeDSpkrhaCMtGNdz3Vmo7vcNj5J9tE7a2RZQVX4ANyszsPG8haWmqphGET4BC91LfkWGKEeqjrDp7bR9CE8",
  "key18": "enPynQT2D5vYAuP3JSaPU6D2iyQYeMCZ89wnHZ48w63LbqmQtMSJ26ziHzKCnctCkzTowRRNkeKkToTE5DyeAk9",
  "key19": "3Nqa2YpHrEtHYfe9MRKUF3iwbnEcUpr7sqYT1uXfCpuhrNEVmpKYPEr9zJ8JX66ZDx1KWoZB7K9ZyycCLJbg7Szr",
  "key20": "5YWKoPEBPSH8Atys7dndHKSErmYFz8fJUimR1QQmihAwyri8XWCMujKa8qiJAWdWtBUeejS3DTguSNRuQFmqy2xr",
  "key21": "5hVutKYt2WU8xajz9qP1TwrfZ7FGvef8M9nyNFMp7iVMMnfxxKs2HS9faWpNrrNbHrpLnmySAu9uoQ9k24GqAuwE",
  "key22": "3v4AZMutL3wMMGxjEhzwRBFq3gr6SLavvFN8JongTuvcFQ73itCGy2JDzqZEE3SmB9KBYBeYgdY739dR6iie8yeD",
  "key23": "37mMF21CXi26oaXfUPzX9T5wjXuT2fRuKgAsU2yUTEa5WG4t97yKm7jkzKAj7Y8FoVaDd7DPAsnrs559pWF1JSCY",
  "key24": "4JLGniB3Yar9pd8hnuSad1NUWNwJWpyqqdg9SWfsFkofnHNsXdN6FT8u6jpHJd1sVrq1H4eaa4MXLYMGcLvz72Jt",
  "key25": "4zcpigStJ8zQuCxMcgkXsBFbiVZBgb8dEcosowypuAaPu6hbqqkzxSRpfBbmyh8Nb67E5vSapZtE1vVbca2VoMLU"
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
