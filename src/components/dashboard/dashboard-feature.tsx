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
    "5YrN1CciN2VA7TiZfwmd1k6d97T6iha2RKM1cWya3hAvYTU9cgLvCHNSvGjmk7NRE4SmHXS3Eq78sHKosJVsk5U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38jaq2J7UJZQ6gyA15BXg9CtuXEby3nqHkhnjod4fXfwjreT5mCmJUmAqQn4Gtz8ux2VyC6HBPawCyen9UKuSPtP",
  "key1": "2GzTqu63ypug6sU4KpiPKVY9BzMn375NgnQ7pMmeQxitKzAe3YwpYCvkMWUNTfnMBwSRyNwVJ28WxHXqfYZNG9Cj",
  "key2": "3Rfdx1q5xHFJZvXnx5tG3gMUhnpPmUokT7Eob7xLSVpjhGhLubW8mZdrHbuepLk8on9PyCmhYbD9EeSWkCKH9NUV",
  "key3": "2wJ6Dt2vDXetkLmRyNhyVJTPqc4CniGeqSuYofvGn3X3iv8Cp4dpU3vvBNaY5srCQQKpN9wxZvYswrhuTBJsC7G2",
  "key4": "65utz5na7VnMrAeoj49bzAkHPsbXGfc7LV1oqNG5ahgmpmceGQWPiDe7vKZ4R1HfXjDVyr4e7FLPt4aF9dizFmUn",
  "key5": "3zpPNytFfFxXbvwnMsaXnXfTpVgmeAUsSA5buJ8Rie82TL3WJu6aSadWK1dq6s9EK23fPo8K8AwcuykTanfZsbWA",
  "key6": "ijRKC81CeR5v2Pod7LP2fU39CFxFUxyNaDJ9JUvyBd4SwTUCLiCJGGUztDU4Ne5ZUnfbWDvtAbgWZ58yUhHoREX",
  "key7": "8B45bgCWJgzrhS4zNZ16mPEe8CH19xdvLkTywjz2zpnRiZU4sWHius3ntkmdnTSh9usxgsjPmd8r5dmcsb9if7i",
  "key8": "3XhQootbwdz9n8f8S1oCMdPbxf3oAJqxABqcsLDboeyjM4BjiMhw97aQoXPvXkgNieVjPytQsHfoxcjb3rJZT7HY",
  "key9": "5FVs2hJinsdZ15ZJm9nK7T9pakqYJvgMYUhEUXrRtEi6yW8u61Z4giydf8ptqehCJMsb9Dmjm9RkoHF4Fpx3tbi1",
  "key10": "cBDxGLuiMHok7UKayJaiUHfqdfZ2hre8p85CuSBqWpnFFofytvxkSgwfDi2teT5Qr1y9MjKhcfP9GDRk34nKWrH",
  "key11": "4AYXt8hFsS4KawqdsPvuss72L39iQ9qrjnfQGqQ4Q3mvCLmBES39FkAe2XNPza4deQHu67hPMadeKnw2HaWmrAxS",
  "key12": "4hhQcjzrWEBM6KXgBnT4WV4K3UAWugVR3yzbHsKZbFzFfPEsGjthD9zoW2ipYq2reEZXzmew2SSVM942KstrBz9Z",
  "key13": "5FBSzZ8FaYr1p8u1paA9mMYXAwjCovGG8TNTBtgCuyHE5F9sL1fBZaDZbcLVm5yUKgMyRg7NGwrivAQXeZVbgLmx",
  "key14": "2soEcotMZjwdH8vLnyJmMSwhiHKGrFUTR4orp1kperhQsatzRbUrKH8h8CuWhc4VhFUKn3fBVEN1s1vWj1jKZPA6",
  "key15": "5urVSxhDar2xm2vRvnG6gsfqiNQwi8YBcFDN5rNg5pJL3YbznhnAk59yUVNgafDtkWKokn7cPajctH1SkJGumKCp",
  "key16": "NfuomatysFb3hZcb8tDhLoLtZ4s1cMXmNm9QyjuMN2PQ9ockLGvgvzC9fZ99NQzRfxQXQ5dXLoFtmiVxEWAffWt",
  "key17": "3RkuYfcnLrnewvqepidrKGa4vq4jTjQ8jFECrdZsunMo4Qi4vzVTg8FYs5ANyJSWd5U3kkNF7H2t5j1p4w3ARUbc",
  "key18": "3pgHh5pZvKF1PS4fm2kCi7Td1SkJ4usUyjSyRq5SBHTqBH1Uyrfmz5iyBK1CdsYVFQKyJjBidquPE7zcxV35Qmvd",
  "key19": "2cEw43n66iT6jdmvudrrsMh6GaMrTMzZq5b9rXNAwSdUn6XoenhzsM3PtF35YGktj5y9nv3E7SMdWAwbAo3Vq4ME",
  "key20": "2zmoQ333vkDNtEzagCvyyQNBGcwVgyntKhtWRVVm97qGiLBpT2B9NU2xfKt3KDNHKC8FKFKb7FdgLbk2Q5Hx4QPu",
  "key21": "2pDkDh94yL9sh1MhxV8CFXUWvmL3fhhbCBnkdrw3yUygZeRmUhdTELSrqFp84wvRBbhWyazqNvpwHxXoXZtLftVb",
  "key22": "2iC77zRLQBNgQjsnTnQ1b7K3i9NCTptWLGzkPG1acsNnk9Jz3gmRsSfbtbJNw59Nu4MEaWG33zUbdHp7mP9fToE5",
  "key23": "2F7Cwbthug9Wk8UronVJbcbg16KqmuL5jXZffaCaAcaHZs1iow7zVmdwrp8wp5SUtN5JcefocoEVjB5zLx9M5Pic",
  "key24": "2fMDZjaZaYwxdFTr71EkQK8JP7n6shpzSfcBXTENSBjqCrAayqSv6ZBV4ApFXuzo1piZd8hfdsQ7c8by67Atsok5",
  "key25": "2H9NDdaGZhU5FXza6xYuWB9HWJu1b29JyQzjb67E4NC5jFhCB9Got8gmztmomHVPWmB76RwgKFxiLB97SVoGDzz2",
  "key26": "4HYUMacoMQp24H7W9CF2Um54qukFQoWqKS31sS6V9zdbCdn5hHL3nzXsSTaMMWrZa84ypvEDjsJbFY6dhHUYr3cg"
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
