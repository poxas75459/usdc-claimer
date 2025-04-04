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
    "56KCS55ag2ppgCxMLuTCnHTBoPXws65whemupmdL9cwncG1FodCSKGbNkWLHojbcwoHZ6YEraL3JKeMMMwHZJMia"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kg985xP2o4MEF2tE9vJonfs9ERmJb9LczgwMraTaRGR56ohUM8pCfSn5TQG5uNGFXdULNxghT6JcnRqP91yZVJK",
  "key1": "3dLXxoiDPDSXUZLVx4RBiGZnb4D24HRSQY3J64irNiEx4o4j7Ykk2R8CBm9BoHpybLGeVxPPeyGbNqzpYfe31N8T",
  "key2": "4jqG9Wi7mA9riP93TNNNbnGKxUt9Ffka3S6RJTvpjZ7z4q2pFhD4kUtgCrqjJWsJenTtkquXcmGwdJehEid1KoCJ",
  "key3": "HdipYF66apdYKZtvs8AV64CEuFqKUGLnB6zfezvjeBzEqbnVUX8xrD6X6kq1bP5mg2itF2nTz7Jr9ojRPP7eX5M",
  "key4": "3sgCyBnpMsuCkAHYGsMnQcNBkiD9SkuuGhVcChgxzaQWcVtbdCmf6obnHeTT7LPNxiAsxC8nXKcTV8qty9zp8iEb",
  "key5": "3Dg7SK469oRfzZrWhy1KZsBXJLNFzzSPZ1vMMmh8ZeoEE7bQpf6rpNJzD9s4moDLRFcp3Q5myH2N3cgWUF27xj7V",
  "key6": "3Z1AJGQFvdK5k36rMMiqiFqXM3eQXgeKSLzTCeAhJc8Eq8H3Nr7UygDamKzD6ptKTfso7HHpZGXPchJwvJkgH1wp",
  "key7": "2iLdoKApX5Mzfk29j79jtQGhTjA8TepJDmKXw7UrvxV6FNcde1UVptAUdyp1ZDrSeY14T7oKGgL97VdsGJ2gse8h",
  "key8": "29uhzkK3CRoCB4ij5h8hNj42ekmKyDJPMfgGRfm3zim819NdT4p1G8wKLRHStwFw3gPkZseP6CBSPsNFCABfV5HN",
  "key9": "67AYTwiA5Q242FFR1zCnvFyZ5o949xxfh4KYxTNxVnznmhziVT1rkkfNAekeCoq2PnGa58GhBmVM4x9uYd1JotUt",
  "key10": "3TY68jocLzMP9jxQMqUkEvXJoGucWLQrHkQKRuBMuf6HdqaJwi2aZ7SxntwyUmMZyqGisxvpZuwS6mLugq6DRhYM",
  "key11": "24NiEDAre4s92SvmPL3rxaXk3rPTQdeRJjnq9zK9Bqe73gfuaFvaJYpvvSx2EYAqHYhAuaHooPRsdft1HrdrHFzu",
  "key12": "2dHR3pjXkrWXkZBpAZw8u5K7VhQSvDo8u3KkwUnxvP553LgfDj1pJbp5UyxqvBAVYnoxkXWqzNfV5s3REpK3Kg6Z",
  "key13": "2TNSrAZLpdRXV9ZCQ5i43jE6Dargvg6UDT5sQMfGqwWDUgvKh1voXwUEZWhUTvmDo7TKhKKyFg5FVivJBgmdgBUK",
  "key14": "5ZJrWxaqppfQ2Zd8n9CEGon1ZnBr5bLWAqnDXQGFbcV9gfWv7Wq16gL3VaGf75qjNxvyQ8WGp5FVxG25u2m1ZHRd",
  "key15": "4WywJKRuY43Xx5ZdTVQAz9CjrHHNyUyQkXy8kaGujP4KCEahZBtcbpNUCtnSCfFTinnxykUu18641GpZt6DLpLNo",
  "key16": "5TKNJndVdQDaXW4HLD8hGGiDMeVuqfapr1eq8CYg42UjGUnz9H4wvA14Y5ACiSVw512mCPaA48Yhf7VTwDHy5mFW",
  "key17": "yFHVJVtYECwUs9doWhABdjssCEwjDK1733FgaPzbX8nxPaHUCganQMhWNAdHHrEnEoDCRtQifbLCv4uSkReuFdw",
  "key18": "3Atjq1yHMqbxwiAmgtVGeYEMzUGV5RqDUX4hSSDktXA2Hy6i4pYECC7ffAmGUr1cqhvBVEoDxTFujHmKBxcgfuXi",
  "key19": "3bcXkAf18NcywAQfAngAQjDYRtBnB6qAE5pVrmFc65BEKPQCboWTWBSthpZmSyq7PF2uy8LCy2V7SHVgUDbJz6LC",
  "key20": "3bhCnjKjEMMpm3uWAdHqe6Z7t1C4bFt1qePvRkTvQ6a63wJot9oiKjs5ELEVbVQ3YytGsw9azU2pdqHBoSxrAi1M",
  "key21": "25DbymYKL23gjpxJsA4yRRH74VvSEfDebpC2biCgjGxB78VMbFehzZSGayXuDzFtKMd6pko7mfSTzyYD4myTdhUq",
  "key22": "2sYedRLnxFM3mX7acwc89mvoPPKTExnzPXWAjDBNJ4JxkobVjZosyaEQwJeQnvJvU25ExEh8Rq1yomSaFaTdgFXw",
  "key23": "3xg5UGD9rJumF2r9n4GgiLLBGJCff2xMQAmGeT5FJoho5J2Wfyv35ooLWmwoGeoenLr3aDC2i3BTyo5R7tSZ9zke",
  "key24": "6SNtMZdBbUJR3uEV5vL1kacav6MxPRwJb9fBNhV6RNGMVmrJsVUTaKAToKeY81B2yeer4uDiT8vCGNhimK1ZHNo",
  "key25": "4huwqSn2ajFz2vVNEBEur7wfGcUfn2SsvVGuH4gGvxkqEUcFqxgRRAundngqrmBwH4hgTcqANb9mEEEs4aHppkes",
  "key26": "5sJAHnjAwB2myNXQk14fWax1KreQKWe1a2gJvBcVirn2GzmsHBqkYZKiBZkKMr6dqyP8mkHUNubiuAiKE7ntqpBs",
  "key27": "1japDnZhD9Deht1LzudtPNg1uMxBE9RYocnrfSYrpsZUPu5t8uHrkM6XNiWFV9jAeb4QajmSNZ9h8AQmw1Kob9S"
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
