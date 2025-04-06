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
    "435veDNTvsLtYpbbZWHfQwzdX2Lao7qpb7KuvmM5RpwdTucrqdXMz1n9qRPFc4BMe5KuoqNWQtcW2HL5qvnoVjk7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wKV2Gxz4rmV1EBCeQqrkx5Zw43gNF27D5S3hP5e4J5tuqe4Dt9r4iiKHK3ohT54VXkEJBuykdkrz4V2rvGQFWMP",
  "key1": "2Q7yf8PSNe2PAe1Yj8rj6GMMQD73VHjUQMAoaFEQQcFNnuFAB7SVGi4hu6vodSDQF7uAsaQwFBTEhgvs2kg3QgmZ",
  "key2": "5mdstU4jdMkghadApUi2ur5BoBasF2jKHLySy2D33BbDjRXeKykqc8bJRBhP9meVTWTJPPxBYeshBXa452uf2ePm",
  "key3": "kcP1r6VVvJgFHCG4mG4GPYK782QbLAvZqPbXcFP7oENnTgwTswoR4XZfDTXzHd3nJcxEPVL1qHVQ75sigzcgSp8",
  "key4": "dbfNaSPddCarBcVnpKhL8jYrXegjcRJYC1JJsvJ62VcBVR1Z2EjzRaPWgSmNMsa1wo6f3CuEj9asrg7shemr5JU",
  "key5": "4tuCRmtzDXQwFQidGA42DBPpaWyRESeRNfEKxBCgm4SX7MKbb31sVCmcaz3xadDeiSeZv7ZhvPj1FDSAQgAa4CLd",
  "key6": "3DEAmnsXXXcWyFxzWMPVEXSnLaGhtZtbVAc5EhesAyox97Dsrmz2WKZnUBomEnWqiexDJkarC68dAshx1osRLNj8",
  "key7": "xQ2vCwogVtzbyv8bfJe8YpLHejdheKfj4tAgFX5qnomdhdX1TE9oV1RAekVDA3hyhZjZQpZKDhpjwSE8LksvkAv",
  "key8": "2aiFBh9zCSzDRLJWqpJURR6dBRTy9Ze5rD1wjc2r8cvSLzNrxJMpRdTFH6x7KKfdS9oq3awUvLtr9zdXBVkUUmu7",
  "key9": "3aMxFqDe9o4u1iNwoPmv4cNvFXhmsd45uGmf7MXgFmqbQ1pXe2MtRw6JYx5i2TJ9BCMe1gzs9etJxanXQsKBKVsS",
  "key10": "3UF4VH8ztHUk38pt1B47XiQ1ppcb2eyeDCq8i6joRFVBJ2fRBXKM1gzRgnaLF3NicctEnMWc5vzcASzBc1DVREtg",
  "key11": "4e28pFDRVfSbWGaTkVgRtKtxe7EZbnGpJaxtFd5QiKrkBktfDY8seD75xxLQE1JdvbDjdhAsVBeGCGM6kLbpj71S",
  "key12": "1CpXZVjeYwBjQFR5Tt7RyeKC78HRqXgFZGf3sKgELEXUhoxXtpSMZKcrNorKgYkKLZnt6id6kFY2nixmeWzRqYD",
  "key13": "55na8YAXgNNN7rmTEVyqTEDPXfomEBZFsLPTEYkzsfJuHNrG5yeE7dNeRxhbqUdEL9M4DqaWrcqS5aNcKK6AwHU5",
  "key14": "3tv9trYpQ16jnd2ugRjLVv9AMKyQyLwFYy8nwdTWrUkqUbhGd1Kub8y4dkbpVebdFBReCJg6GLEypFBTt3WeatYt",
  "key15": "pJcgSPBLVWSq6EZYpRkgE6u6p9pEDVtZMEFzA59Ddj8Jpn7CTYVDeBtrRno8N5fBpvXC8Die19VW8y7KgJxeF7V",
  "key16": "5K9no8uNS7ZnvHT8LYSxccRYtCnYZFVF2hgVSg91LUyfoucu8prEn6XGn43NjAYDc1ZsmR9sZmuMqModso3qs8dq",
  "key17": "4BDnKTXirC9f9csDjUPyXTDyqEovjVJ9umHew7fFhDEGxLdPresJ5z78EjucDBNLgnLy3S9yVGUpAk6i3qVceqZA",
  "key18": "4MKqxkWuB6ddPVgXbrkhkp3PtkRsTAxbcrUTy5PWSz84S6ZVbPaA7ZLwqPApAXP7KHoH8Y8GPftnwjRMzXS8HFwR",
  "key19": "43Xmr2yTBdyo1b4pK4aBHJsC5hUNgFmmn15nhpDm33XA7Dx48SxfWdRnyPEi1pxCGzzmtwPfcX16VjrzCHh3RWPK",
  "key20": "kM83Ai9EuJTdNjVxb2fvEdYGWBV45WV7K68uJ6PZAdeCpGDN2Y74sEMHsS3ESiNHdfiNfmFpWbP4oR7TFJpjotL",
  "key21": "UW2hiaNKi2ayFusEVNHQWPq8KhViNtpZx2Rfi9Z2wj9PpbU99TcCj6FaHdz3HFyAxcWqFVsVzGMjdtuowybLmDt",
  "key22": "bBmvGGpwHyZhhebKakH58e8VvwivxDyTyxBBQokGrt63RhSShCNwCtf1RsNPGzAnDUDroy6vV64AChKQ8J3Q8JB",
  "key23": "42MuTw9Q9xAT82Yd7UHaKJnDceyPMfJEhzaEvD3JZayuk7UqMdV9Eeqd8rWYZLNEryxT1G57D5jZF7wxXfGRJbYp",
  "key24": "38sb6AKSUnHSuW8mQ31nFYZmqY5RqLyyZER3rVQwn3tngpLbizJfsNYRhUpnNy57nnrw6v8amHZHmrX5HxSx7Jgy",
  "key25": "tLQmwLqD3dNXoxFqSEvxKKCQuuvAwKvuRw9wbuAao6JoNeUFYWQjb1khKFG9yXxZBnTVfKoVoemDkkJE6V2SiAZ",
  "key26": "51avgVAYCfBBGmMRr2dPHUJ42Tfi2xrE4hVBbAwjArbkrw3ppWikG33jaEfAs85Jzkjbq7WvTNo9cyteFsgUCocW"
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
