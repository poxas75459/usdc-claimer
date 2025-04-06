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
    "4cXWeRMVnxRtadKNkkkdUkKowaH5FbkMcwEGTXVUqPDxRjmbKtKPzBypU8NMs63LbyMWj6JgztLy7St7qukzgJTH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VJ8LR2qjfvvPeguBV4VvPmG3TQgtMJCQ6DttGPghYvu64sSNg9xSWcgbXzbwFES9nw6uwbyRRSKjA8qnkTf3s6F",
  "key1": "xAMCfTByLN5NUPLStMM29hABHEn2zMjcncFqepjvFJb76Fvqtz9cP43uX93Jv2pSnDkoSDJdW4AB4aCFqcNcVGi",
  "key2": "45STFA1qGsdg7XwRoJ9SPnm4pyhrCUEUcbqKxueaBs3bVKwXnm6WJMwMvMHD5vQiwQeFSAomgWqre1kYZwF6fgC1",
  "key3": "ntTrFNfwkxam8wuUNBwLxJ82KX5c8bkmHoUs7zwyzWnZE8ZUmCJ7AgGfxbux3f2V3Mij9kSKy8hN3BEmmsokWcm",
  "key4": "3d1cPVGo6Q8956AejoVdGQ3TGwue1RCrRpTy96yfLHucbB3Vz9HBxvFD4716ubmXts7vH1jzZMgdpkPCpC3JZZ1D",
  "key5": "2qg3jnsBF939fPqJHby5jQtkgW2yVko51Gg5fDMdubGCWSYRgtZ1hCsCVeCQ6TTeKM2JYE5Bo9ifBVBkUJFvcu8j",
  "key6": "eXZb6kXCWRucsb4SwtCvZNTUyjb8LWHMVQjGce3VoHV75RkcyT78RahAouCchDKUw4YyKd6wKu6eJsuhp3RbKXK",
  "key7": "5dzQD34qEBjKgQkAaCoi9fFbAUfQc4WGVKNTFoywWaJbEbvgKDSVu33F8FMF4fEbKtP4Zi1fL3jhYTtA8gWDu5uh",
  "key8": "x2mVMKJSNRtFQ2Yyyzm3wntUqF8Zh2n5i6PVzuzTsMbhE3EDun1qQS9R6XcnfuHktrJhcmgEJXzPGC3mFq1HNej",
  "key9": "2S7TtDpn6cRVeszTWdz349fSRYW7fujf3HQjXhrMuyPdyd6djab9Jo1EmXQQsEsA8ieffpF8iPWM4KNYN2u96N2R",
  "key10": "zEXsU2ZxZV1KTS4kaVQP5uVPBSQ84nH9h9JjNzRqXJ8nsCMZUGC5zt3RqtGKxtKxh3p3tdXLTH1c4218Pz3HRGJ",
  "key11": "355RTtYaCSqnThKU2gocBh5ojEQwWRLvRZN6E3sxKKBU63pGkkwLFVCahu61v3DcTRECH9p4SqKjbbBqP1ZnqsoV",
  "key12": "5jCYeomYMabqfUNEWVhfHB2mdcLDLW3irLAdyhAZxSP9QR4Kn7xtNBqYGziebW4MjN7vYhL712Y6JVn6pkDakfep",
  "key13": "59evG9kr8DPYs3AWvBdFqDRTRDrv89S2STFkvziyVkR6XATuCvsoHs6MCqEDrD2mHydWCb8nAdzd8kiJV2mNnjNj",
  "key14": "4md88HmpWbNiPBcfXzhuasc5VV6dMuUiXK49gy7j96dcTJXyjccXkDZewih1arideC4dESfPpo1RW84rtvwNhvTw",
  "key15": "Fkn4rusWCNnPrS2DuzpcnbeCfwg3Wk7n5GAjwJ5QiJ5i46HHAEdP44EeMY1xXJxTHetJSBqPTEquB4YqUpeWGdr",
  "key16": "33awEUKM3huvsjkRFdyXP8mZwSC7UG39zitHoeSc9NuTB7MoPzRJ7dtFeWERwCpiDppPT4v5kXMZzoeCQ5a88QV1",
  "key17": "2FdoC3c2HtSJzf3fxgbKoVf5m2G8VDreP8BB71otsMjXyeyWrjXw4CQZzxX22yqEVKx41NZSCrHk5AdTJpBcUEbM",
  "key18": "4rKp8TFBrq29oFnDYsTJg23kyJuU84iMkvfPQWJ6kqjt3AM82X35KCxYi8bM5rz5EFNeiD6yuwwpNFcBVSxMvwLq",
  "key19": "2Qg8YDCqYJfjEkcBK9YTrvJ76PcbNFPRyVwjKDbHw996QWVdP1Ds14zc8jFoLqcXqqiwf9N3HVXD2LceuiSkRPvh",
  "key20": "2VCqX34K4KbNgQ6szwRTANx3catzLgnYuKZLx1dmbpyaNss3XHNfmj9tVoFbdTve1t9YikQkMzVcC9JwFkQev5rt",
  "key21": "55KdFiCZMA4NKpTYZV6QcRErb2Yb8tph6om9yppg4SJH3rp4earQjMSQASAf95mYAR4o2sw93jt6RBZmmuUNv8kD",
  "key22": "5jCKVCSXgD8GuKiH15CuDjsFDAZ9WESRn3ei1Tv8DJNGoCUPNzLHw5jkRt7LixqMpwNRYWyBDCc9aTKipWN66BH8",
  "key23": "5Hrn22K84cPK6tsxmzohxfGUiQ6PLhdXRsFeiEafbTRkYyo1UL3Vw4SHu5js29T79Wy4XfEfoaRpGfiiSPhE6F5Q",
  "key24": "2bbq96pJJyKAKyfSqsY7GwZxcma9vGoWoUwVvCr4bV1i8xTSmk3EktuupFuNFaibyQgM91zhVHUG3aTKJ9DnnjJ1",
  "key25": "3LCEA3HC9b5SwbACBeKTjsiBjoNioqn3SmcgGdmRyVaE8YeCNdDfkJ84dKuhVNLe2poMdTGpvAEpaSyNEWNimC48",
  "key26": "58ZD68YMmk6yPcHEJ8K7cEw4MSTkDPoxD7GJCQ9wQbZJ3XXteiiDdfPE4RoXhPMUYNnUbWo1mLBpjyb2JjKbbAoe"
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
