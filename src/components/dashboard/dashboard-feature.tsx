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
    "WxUNrDEPcnC8SxLeS8s5hJZrRGr9ChkD5NxbjUfZf4XHKHUJ3AM11hsg7RwHHoqrKcEqSR4TagGqnY2JuTHCqor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VvkU7wTbWznrtJi8qWxnxMVVpXQR5NkToctTDKAFs6SbRgmxbAVnxU1GLe58oq89E5V2EBm23AxNapabKamqFzz",
  "key1": "4SrUz8tmYJ6n8ySmsM3xqvR2VqXm14u381nscYeHj4F5dtzietMEGHTmVA2xbWGu1LSNGRyBom5NTRa5PbtiXzkn",
  "key2": "ziGSj1MyPSUurugyhsPL5kJ5w6DcJLXprsQ8MWqnmsPYzo2R2rTcKM7qd6cAMAHttxzs2wqTE6iBUEzY3Z9wETY",
  "key3": "ufwDa9j1cLSEgf9UjMZbdSFR7fmthkDaAkUQtecLN5Fz3HdW4rH7FvKPMfjsKt18cN3XvoatX3qoaipg3JZ4Wpt",
  "key4": "2nNxKk5g57qMSj5T8VF89RUdM3nnd5Vh3kq9XA8Pap5CNLtPs2SVE7xAn4saHknmSf2uTRfNNb3R1LpRC9MSw34m",
  "key5": "33QwPFogRg2cnYLsZX2xuxL6wYSt6QtSnJ1ocPZqFjMArqu2uCrxSGFqmFmfFYvNdhqSoEnRs856J1ECeviG4cVb",
  "key6": "2Curdb1bKAZ439JyJEF6mkYCJ8NT5kPyE6gpFAoAuidkMBfU4NVjEo9yQriuKcHUZSkCBz7yACC78AFQTd5vRZEk",
  "key7": "35gZv9HfZaB5CQk6vD81eJyLPphqYu4Ppqize6vn9bfExt6ooqiECSLR7XKuw7xkM6LhAUy2K4H1nN8MahkHH4HK",
  "key8": "347nTJtLKggJgCgtbpHrK5hkmudu5H3mwQmCpqcDpzd3airWrgGtKiaUP41cMUwLaCPeuJCbT35MDtTg9zzy5hsJ",
  "key9": "2mrLrkznqKWeVZe4NAQBvovV2pqtgtooZJsyqTWDRghjpsNBpkqwQ5PgNo6dDQFokCxCNpdFChFyvrgAR1TMa7bN",
  "key10": "23vk395UMMCbaN2tzjhS8aJrGSeXx7CQyqwZRik9oa2wohbSLVuf8oMSXbcDq2qY7deQC6U27dnGhf5fuSbzi32M",
  "key11": "3Ugx59o4kf4P6xY9a1xiVGC9D2S4tXSuvGk6QheewV3uLh2qZNjGNjZ3t3SNNLftSQ6wQwLbFkHTzXFQbDDDMWry",
  "key12": "5XVGZPCK6UFvBrHKyQEFeCnjQXJPfQu9iGW6iFcwvcmLjMx6rT1zCkjAAsbPnUZPtXXmK5f2WCbmSLVFYxSi8mMP",
  "key13": "3tru5ivVwGRqFLYtgQ1Ao95UCUdDJMZb1nypnEycSmNM57ARdLxmXGUxKobpRkFVLMkr3qMWzMuGZJNDKhHc3RTH",
  "key14": "3mn7cNZ65EbpwJR9ntQsTmLHnXChFBUFzzpR1PyoQWBL9SXdYEcj9XdWfRe54AjrR92YTj5RTjeSj81bXmRJaZcz",
  "key15": "GAaCGXzGPhAzfJHEc2nd8Dsauad1m3eKvrx6vjkkV5Aso1Jfnjhb9iJJbfjXyRtYUiESd2jPLjWJkCY1CcfwtNv",
  "key16": "4kKAQrxbtYmFK9RcT3uYdiPYRauWRGJtp4a1hznXrUzpRt4eBUBm2WTnCSD3tZvezwhrNP74yNUiiZC9CUx9gE3Z",
  "key17": "MwrHtvNYWcHXiwRBt1Uw3ZNoZxgSj1RTkUE2DYL5p7k9MxRqhtCMmTyEH1oSVfTqfEUqoy3XxTAqtb1MWvqtYjX",
  "key18": "5KTezcEaVdDnxz2FJriBzjbcXMoDQ2Gai2PY4JVcfCetDArpQAQPFdHhrP5uxP7dpbPBHyCWrQLBtZRYe88JG84s",
  "key19": "38cwErzdLt3MgE7bYw8y1D3DujwvU49nChF6qusaGDMh1WWFTUzdx98dyKLEjp8BmKFyTR8eHgzLpNnKeBQfCun3",
  "key20": "4dBRVHAEji5ZnATGThuLhfz5ePjn4oHvyh23nRrbwkyoRCJrBD311kAsRAaBrMJct8MNR7AiE9btE15kJjQJ3GDx",
  "key21": "5SkijC7D8PvhRYWKJYMNJyBwgP9p4f2qqNsuFASAqRAv9RiLPgzX2SRw2RxvF3gYuL37SXyYF6CUhtTv6TaAcKoG",
  "key22": "z2A4991qdWcmk7w4kGqLZo25smTPQF2Y7NrnEqnwiikyGboqsk4TZCkrd9kRtf1RgJN8tmis7h1NNxF3fZH7fgF",
  "key23": "63JY5NLe1VPo2kHpSN11CS9AB6HwXAYgUUrRLRKirazAqjSsNHFyJiaqcprsbodtk5dEr8AoEmuE1v4wSHi3yfNR",
  "key24": "4fbrgXk6wGz3vYSbXd77Gy1xibpPf1A3Jb76RJVyCtCXpnDBJdgEiYenDSFckM6a5zD9s2gD1ZtxFWPugc9CmXpH",
  "key25": "4reboSZTvcMgqwNS7YxCKtYu6yAeEksLfWv2n3JhxbSdyFhLcL6nvFU838h7wGinhpke7vGsqreUZwU83e3u9CAq",
  "key26": "2GyFTRoKi2h9Rdnwk8gi8PNtE1eqmcfrbVYo8ugz6hkEL59PsPKH1gaM2MvoJsNCCmsS5pxTbqcECP576yPddPim",
  "key27": "CTVtJCNhEU36qRa4kQ59JzEE2ocxtHZqbTD8Qsk14d8qGwRBwqKGc9P9jeVjpftw4Ue4t5S3fnYykAr8kTCF7Rs"
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
