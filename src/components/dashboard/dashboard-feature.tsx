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
    "3joLdoCGiv4H5bJopDy9cz8bcA1UWJXP3KZuPq9HQZBmUKX6iaJFjhpavhdSK2ASrEWXhK3TvAZ26Yy6hGNvuJxV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pnZpusqWHA7ofsK8qNbLrBvXjXAWwDs6iaY2LaRczMKYqxG7qQWE6MCwgLDn5f8wWh1VEggdAcetYaDNXWVautN",
  "key1": "46uuKieqBvinvcY8VAwcTUiduYg5qru7ZA5STBzMDmFKhfXbPRX32b3m42LYv24G4JNgFyAEWMHYWUEDG2nDDGFV",
  "key2": "2Tga7FhWobby9HhtbB8Jzwtifuz9bjUkkLCj2TdPdVAdCE2dCuuAw9pbc1s9SWzfEDaTZsx9JtSjVXDd6ZBnmV3B",
  "key3": "2bBozJP3JiLbzZko9Ck8QW3Gm4HpBjapns9K79pXv5agn4ugh46H8ZYvk4YUCfWbmnmUi1VjuA1h472JxghH8kV",
  "key4": "5Vva8Waz8EuYvW5MiCxMzWhp4CD87BWCQ72D21cZSp3MD7Jpcfbruu8ZHzMpBpvLnLgJsZYgr8mXMEvUTeqqFzyZ",
  "key5": "4hi6o3yaQUgPZbR6YEoJZN7FMUu9T1Ptcy4hTJu7H6vx3Dv91JqwkqkUB9pniTmzyAxacWpJXbBM9H1DLyXDzGt9",
  "key6": "2Ls7EQKgLTAodzE3KFuQ6Pd777CM6PAkyBeAVVWcnC71xqTShnmLFcqsvPZxokyVaySSj5KAmbLyo8whxVfF2Wfg",
  "key7": "D8s3paTuC5YbPu7TctNpEYeYBZjBbLNigBGCZBDdJRCbgrHE5c84DjrkS7uznDfKEkmBKKhYvjDDdFoYCdVt7UK",
  "key8": "277sLSDjFMVBvg2a7eH3zGrktDKE3xg8NMimXJv7awv7tGns8a7Yr8HDmvMfga1KUqCwe2b7Cip5LD2LNN6fgQ9H",
  "key9": "5rohVgd6yVBFctv2fmW8fS4je9SiyE3Pq7p6WJmwwQifLw63LUbCK4bqfNsGjTvJ12mzs7gk8yeWogrCq4hA2H9U",
  "key10": "29WmvrJ5KLRZugEZVXMVSKVg1eme31H3M6EfUogNksYHLxFgGZJWmVWRnPAZTasC4TXJMXn1HjwwjBgdrSnEknM9",
  "key11": "cti6rREqM8ejew1tRP9BFPkZ9iRPid7uyFUuGaACxT84GuJLPHtYTvqZkMdTp9rg2EgPyjXE7siTSRtMPugVEBy",
  "key12": "36VSAv7iRjSSLN5bhHvJREqSsMG1i761o43vbRahuZJvnSzQRECrURyGdSgZm9PmaXCChxQvTDcCaeZ4voJCraLX",
  "key13": "22ji7GtCzLZuLkxHthX5jcBp7nCvhaq8Ra5vuJ2J3csgQyLn4p3VCsiNRxSdsuvSbL6P7rGrPTCk4vwh4zEPoVyJ",
  "key14": "5KyeQNxybuMYKPB1yF48J5Vr2anfr61TRRTUAE66StnsaEG18s11kXJZRCkg4dr1FBWKHjbX2esX6dAMkjn4yadk",
  "key15": "Ar8pTn79hGfY9v3k2Ytwpm7HQc6qMYJ3k5NkzR6kEQmfVvCsrgUdBD3F9SbwdyyCaCAdt4LtspHvgtfyZJyox1R",
  "key16": "2tZp6jtkEpCdNWs4KLy6AMATkAYNpx22xhvFUyxW3U5YBEHttzio9cCGm1LK2m8Jd8sPopxiE7Bm8pqeiqHtibSp",
  "key17": "5HBCL6DrdEVi5Y9pDQ3F8FHCyrobPt3FTSvyaZMLiJHsyDbH7PrtftiZfgcWw7Z1cfQatvxKQCRnDgJjNchUUjsB",
  "key18": "536w9NCRen3kjeMCSsXwhjw3K1wE3oTSXZhChHrND48aNZSGJf6cgZCwn73k4dzSrAntHzdASYX5PStBvQWAU74Z",
  "key19": "RgETAx578vB5hLbizapxqoNYwieNBKVArn2Pea2N5C7dJJwT8LX1Zk3UfWc6RwhWYhbbsSmw41KZuC3GemHSfS1",
  "key20": "4GXuVr29GS6jDMktxMFciisb5iBzzoP6WnyPFpgYJoJUC6TDAPofkghygQKtYesvMXDuFzw1YFX8LNFtPDtN57cF",
  "key21": "3WMWJJ5jT5xL7vuufrEWjNj39he7z6TVeM6m98pPsjJ5W9jUPqUyUxu6aeGvDwVsh67bZj3n8mwnYeEUmFDB2gjm",
  "key22": "5mXG9AqYt9fLHLuwQEHxme7v6NFVp6uhBKoiSPUb2c3h3VvdjDj2Lgcm1u5HtZqfbLxugMSNZB6Zt4JjX74ibMRm",
  "key23": "N5umJ1DB1uuqdnU8VUtfy2pnubbV2GYphb5oc9pQicRUkPLcNAou7dCTdfr19MKmgt7hHrhLAdK4Bx7R4hrdjcY",
  "key24": "3ZkzkJjS4XEjedMvjwYCM5M12rBKKceWMEfVmFiNpb9cgDYp1cHdqrQ5NULAYUBm6GFT1VebfuA7jVR5e6z85QKR",
  "key25": "4bDP3rNzB3eubs4CajwMPuWfGMHt45ugZ9RApnEhEWmioqneRgdF6ubfKkNUSdYGPVy4LJWHjjBBL58TMYC1saaK",
  "key26": "5DeGo3DvQ5fNJq8ornaziA66k96oAoBJnd9jMqZFFprs6PxnwGYevvMJCBXcGTAtkBd8yVxkkbZSftLvHqPdymj3",
  "key27": "2wGAjWF2UxLXyMney55o3CBtCA4ksqNKTGLodYCLxUdw1sDLEQFc3FmZcvYhWRRAUspBCSoNrZU3AQ8ijSouvUGf",
  "key28": "2xhNHinBTi6qAmE4MzAzmAjWGakTm6kz4yBZLQZ9hes9BNHEmTxjt1LKpQqojpCPjiJLjrdDrd6sUtiVTEfPtXr2",
  "key29": "dwfsXej7eSv183yPb2towMwzoXdpiv1sYLUuq2TQcsStCPsiDYiu7DjEGcxATps3mVud5WMgtNaWqon2sfY6hK9",
  "key30": "4GXNJAo5FjpMbNA1mdpdoi3qHAR5mpkiAN3PSfJAVLC7Y4wQpyQWRyjd4fPPmWadYdAUYCDhFUkUCCbTZKQ3fE2H",
  "key31": "5LemWpPh6FDj8pnFLMAZcyhxXPtGunxD1bTCP1ejcAMdZNnX3fk1xMpqXZS2nckh45FvZ7RuyAzm8RCDgLHphHCA",
  "key32": "4Lag7NxqKtq2q5W17kTPF1tWpHCCvC1jLuoUzUajuJYUffGyLLLbJmeuE4TSchAXChg8fHxmDTKTZEtdJbFBFsMk"
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
