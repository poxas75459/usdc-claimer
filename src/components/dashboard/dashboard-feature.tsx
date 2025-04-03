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
    "2DFMHCLuciKdpexekcFs8seqnG32PGf8DRfcnoLfDu5nasS8nmfFCNaeGfKLPWY73Q2Mu7mJ4zf4kwGHt7aJdDdB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9YVaLjNe5qFK157n1D1cZpBKBMVW7cJH17LaZuSghaPjNdmKovoQkYacNrfi9vq6BgbWGyx6F7jpJ7upeZ1xXCG",
  "key1": "5S9eSbWGCF6LiqAcjhMiVSt84PzErtEidxVTPxeqpmMde1t95w1mqJgEh2fmsH32PGSNHq8WKUtpSqQSVQFwvotw",
  "key2": "4wcaNbw8TJDrKpDpgx82YHkTUHwZ6wiUZUCQeTaYhYQiiMadktbPwmgyGySqXHpsSVKiqpQRoUAak81coTiHTpbA",
  "key3": "3jUHScRgZ6RmSmQJLL3b3KUn5Tg2rqMqnGDTqLQzp8bDjGrdJgG3VF2W3h6EPb1D2gb4k8oUy9cKfs7V7wmiW7A",
  "key4": "62CfYZsYx2VScKPx4v7Cubr3FZJD2EFxGnuAx9Duy2HoEwT3a4K2q9MSzeRpkYyRdBSyQ6ESshWC7jseihv5QKEm",
  "key5": "5v98a3BfCp6A8SaYCvEYka3bRTRgbebVjp8mZpQo5SiFuPq15hR6TWz5sfzjzXy4kL4CXeR2pQgQaNua95uokGWc",
  "key6": "pK3qce2gzLS4CEyVP375hkGKbHekwWgzVAcrvUVCuoBoKxNPrsTSXs7tQJGnygMttKbYc8wDwbgQYKXFqaB65Ga",
  "key7": "5edxpULVTV3j2mQqbyFKWAS8B1FwtLeTTnvcJWtn5212DGSCzuYBS8RXMikcFW4S1m1CottrDn3JWssXUZu7HEsj",
  "key8": "55Mg7ZRXZcwGdZg4cNZ8nLXsD8jkVJrEhMC5wK5uos8oFFhtzYcbUtjDLMuCpvtsqTLSJWD2FPJgc3GeLUdi3eUZ",
  "key9": "3WZuDzWQA6MvbgN4uUK5r1aDXLnCoi74GTXE9seJ6yV7QgY8xuvAMgF5HeHwkLS5APtCbDxsqFqXigSNzZ4m4FHU",
  "key10": "2tyzbPmKR5x5BNqTgUb8aaKZJFDGxZeoiJFbWs1JaUqYVstkGNS77CzxA2Y3vwqkoThy1hMFjFH3CKm4E3phiy2f",
  "key11": "2yuo67EQvYAEJN94wnJbbxJhBGYLghTZRDgPU3g5mCiLuHdYb4GwDsSLf8zRUccFpwaXXuBfezfzdogpMQ8Rwups",
  "key12": "2RxccVNEgtdrBB9RikaScdNJuG6m7qVyv93oa9yVfUY82zMt1rhWWHRmVncvegWYAMVoCfh713nNb6gVFribquPZ",
  "key13": "4oJS3QkQW93FqWuYmY6V8Ao3JJi2Z5YJozrrTxSZGSVnnzH1oAeA81wniWnbPARRn1yyGPtsPBJ458x2DKXM6iHi",
  "key14": "3hYNszDWzfGQuve7jTyStr2qswtV5JphjCPqqjzAGiXGTJ1Yf5BqTUXWhrPBcwgREPDM13JibcieL7vyjyCeeaRC",
  "key15": "8QSwaQfCTmf6YHnKMkL6KwcUk3xRfL897y9m2jv1KKN5EP63gq8c2bR4jbNMfNpHy5WQSX3fWbNyybLRTv5GSU9",
  "key16": "2PofvDyDHJKhcjBeJkpMJBYGpyND5H8N47ZtrRTaZ9o1eWxjGf8sm373bpgThE8EXTiXDjc9UcJtdjVUsQLtuW3j",
  "key17": "3igHUTjKWxKNmoiEVs6A3u1GCr72F9ahQyttoYqAP6wc7QQz4oMe9gB68mrX16imov9DnqCY3FUP6rbtKP654fWs",
  "key18": "59uX2Pzn4JXDaPeVBZ6dDUGxVg958TyrBbKf9acthx1D6QTfcc5cR3BKoVEtKFwN8YGPMXBMew9uNPgUgsDmJ9Lz",
  "key19": "5nqEQaYvkGvtMTtKPP5r72tXhRWUSVzxpSd8jewPDUV5ZGapJDLcP2QXbEQxU84Tjvf1MH2oGkjWRAg93m8onmF9",
  "key20": "2Z2MKhRrqhrfgKkf1tnUrD89GkkM9VTAika1VFYfm9paBsE4rBiiRzHM77LNn675EvfiQdrXYAEcPZ754tPbyMgR",
  "key21": "3RnuPa2D6Yo9wWvLakYYQMfaLiWNxf8KjbAZg7nJTRJzz2zqwoj7dpgubEmezLJ6BFVhZKvYkyQQb6iuFNneJGQc",
  "key22": "ueqkjuiTZmEK41zXoC7uzCrVA1oMoTbUcJPi95nCugAs1T8EU2iyAYTQ8nLY5TPc2fEFr6D7H2KoMR3B1nEntK4",
  "key23": "57tMLjcE8fyAQgVLxtQPnrS49ETwg7yJQSRped5PBhdwnbPaKA59sKxS4yYJAaAXeopKyVtUD2bSEkYdbjGHkStE",
  "key24": "vKQ1auznWc1K8VKQcTYisT3zy2hE4tcnSAP2a3feia7FdAWK3iRRbxswLT4N1dr4LJNXqVA37CGtSsN9wbq1T9Z"
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
