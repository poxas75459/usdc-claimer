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
    "3TViWfeGKiEAu9fd2JcUW4F4SidEWQ6q92ZrxEm8bKAWzPPNmfLLLfD2YNcizkjp9rbCKDPouZ3iCdTZr5VMLY44"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yNfhTmmyG8HSpdvSL7wAgfja9kFR9tQVymQ2sBfjmWR5FStLXEXb6U2dhJdUSUHKwrBnNAFikS4gJMH7k24boMc",
  "key1": "41ZuvB1EhYAtC3wvtckoeLZBzPFV3KZEDW5mUPxuAqmRZtGP9YrzaFXd8FjpbiccEkvtPAJf2ixGmCi5qL1PPuMB",
  "key2": "2FsjSEX15B7Am4o3eeecpKQwpnZ1PKDWSvWqSsyig6qrLP2WqREGWLq4DV44XbPMofZrMHH2dF9XEDeAZvr2i223",
  "key3": "43j9kTy7aqQJBkNB7jUXSvRGN354HBpdiHosWjfJ53zFFCy832TnDZva53ouA3xR9iHGSX3HN2cgRN11LtFXTdP4",
  "key4": "4zfvdvhotp1E33gKQxHKX5ZnK4ZBWAXsDK3ERBhUXMU8pYvsU2mveV9A4qQdm3fjhzwmjofEQKkY2yq9Ffeimqtp",
  "key5": "5qpfMEMZxYXX1sac6Bi3PJGXty5GNEWsjZvqNeogBgXJ2umJxJQUezx674Dxh2225h4HEArgaDoPFswLi13CRcxV",
  "key6": "5jE8SZw4BiEQTFNYQPMLKNxvs9VFEhpHmzoMHYPneF65fVhzbqokbEVud2tqoQKpDK48UtXByaUeakg4BmbYSGpP",
  "key7": "2AuLhttnBGDjATg8rxgqxz8CD1pSZroGxi81tDqENeSQr9iUhPj6AeNkuuh9cypeB7DyTjCGVTc5fLVDJm1Nqx3B",
  "key8": "32F2wrWfmHAZxQE8dox5vYNvoMRpvxrZUiyKFTdTre2L3gVbm8YUZgPCJM5SM2CQbj3PkLAGtMxe4R2pCBGoJUpg",
  "key9": "5cb9VPTasDz6KTXp7kDqoPPnVcnn8RJgUPps83Arz3pUCAE3P2nQRpaGkyyPfHQ6re5RWPYABrJni7QVepkZD5vR",
  "key10": "5hJqAifGo5WVGipjpKUVnzFFQ24EjD5yrYV5LDtLQ8Gq7XnWmokvYzciTNibd1n3jJcYHwANw1ggjRF7XMV7F3H9",
  "key11": "4g9oGRZJLXpCkhpK7BB3o2ymYpaf5nSfsyHFntcraAaNEdh2uxUu99HnsXVcBWayNyoFC2Z6jagGDXBg5LdFHxoZ",
  "key12": "5pZYb4XTCG2SDyr75hDuckogZoBdEXwE9ibVaypuCWWZ9BtQCQjEXg5rLgShFvTjf1uZqE6MuG62sMxx8uieu6sD",
  "key13": "hTJPjPW6c9rQcZRtpPmF15RudYZmthGZ1cyoZ7ax695fEqjiQky2mHA9SikSRvH4bzjpdoZ8moNrCQnG8dnjso1",
  "key14": "49Y8bFFbiDrikoB75Pgaa4erN1HeMqvKUemdimYqf3v7j3S8oF395E5Mu96i37D7T5VbrKqMJTfqrM4pP5kFogE",
  "key15": "b1ro3mSJu7cwvcCWEzud2sXxhWedCtaCH1TrEBevaPy1FyXtsnG4WxywyxMgH8uoEC3xD8MCqkLBMsuYZFvuB6c",
  "key16": "kZUKYXVbazfRNCzUoYKJTwcmNcCoHPdyz6tG3bLbRCUdyZsXpvW1pngaoyi5nvXuzrWM8z7AdZXaCYTdGiVHkWn",
  "key17": "34Qkt8vcxZMwdWdnRwXeEUWMstEKoeX21sT48UeBdzQNDMyJMAbQQC1aoknwJ3xPKKzVQyLVrmgt3fD3wNio81bV",
  "key18": "3xEeYUwG19VzPgy9st6YXFqS1gehhV54tb1aEdZ5Ktcp8EbxNaniCDxaWZbNJanuAArLmZidgspgnSVJDeLBmiUA",
  "key19": "31LJCvzMMFvMFALPuNyBTnuo9YvPSVsFy3bNi7ZSwfXw27aSAEg6d4SgphztDwZ45hib1ZtD52FTqwmf71NuAY4K",
  "key20": "4ujpyZ4FoVXQdMWxUoTVw8JLC3FdvLMp3Kps5y8DNeUbStP7dxXSCwhwRxW91g5VCxTv44e3sxpM4QuH8ARGrQGk",
  "key21": "29tMWGZ2wShBbyQsDbyf7tVbVDNfZ7SgibDswU4D8ubvtbRWHuDSwcMFJ9rzGaWp2zcTsXkgwWGF6jNRnwpEfYoA",
  "key22": "1v4AtjG3AbX6aiAwxKB9BSDjigYucJgHGNq6p56iNCAf7tCBRidjZDB4cW2yagEZVwr4GfBbLu5ZBQZbo5vWhvF",
  "key23": "2KK319LNuk6TX7Tc16ef5PhrwSqZDmiudtHYsuTMjFXn5tm61vyzawfc28NCwytpGcAZddwVGtjVqjNFhyBGpifc",
  "key24": "4DktvfHUfyKqA9Xb7J4748A4HfmUX1mWnitpEcgbNoLL8NUh8aJCrjrQVMDaVLpF8yq4fAtRp82zTTAwXktnyp4B",
  "key25": "5vr4gXd1K6c2P5eYqvs5qTU7phQxt78Jm54kVPivPUdj5ka8AUZaXx8NtWNRph2Ve42Lo6wmzFxHCU7xxTdThqEq",
  "key26": "v2Bp4QgcW1H9CXEYMqEtXizUKhsscqQcvYPzbdwzc4n7ad8UbXsAAkwdkDtMf3DtQY8ozv2JoaDYm7DYyhDGtKe"
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
