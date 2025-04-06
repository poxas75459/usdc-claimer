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
    "gwyHHDbxfCcoEozghi2wPmogem5n2SiVHBuC7GeYaGKgBftWGXhLtj3afbqqAZVVcwnqc5yFL5G4dgZSDRoxo9t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41ufiMZA1MbXLaktwHFc88Q7z1VWaPAF2dYEMA9qkbAUz2QsLJpan6J8yrC9pkhuapQL4maa5qDEhTNcqvpJK7aB",
  "key1": "EbaPkVxXeZ5aRJG1H9MV4v9HYdnpFgyvw5tBBvgw2intsnWc7YHAFHiKAK8einu74Ryo1GkpB1cmbWVPWUgPGkm",
  "key2": "57v85i9zpzWVMtvZoeCpQwmndqmSnpFrseCu25Zb9EVKiu7jvDH8sRBWG82CAWJLLNjuYrH53TE4WXyafDWvPm4z",
  "key3": "22Tj6AVnS7rr63cYoKnVBJ89d8KucbvtpGhEc7VkXzJjm1F6BABnbwSTJ53juX6rMCKiCTxdUnirqPAatnhGjo6n",
  "key4": "4nd1wqfEo3wJPEtXF8qZpq9KTx5EL54yYWPCDqQqxvV7PPzH8FLKUVi6TL59t4LAuV3t8kzRsBLKuu2Ehs9UWnc6",
  "key5": "5nT4GPuq2ZwgVCSx2wLdSJXoyedwybmqZcbf8jBHnZkXHQheEtE79KtBTte1PvewDePQqf4RxjXEfrmtwdG3SWH1",
  "key6": "3gZ9Dq7HA6LyeN3S9F14DpfwWHBAuzzfqxtaF2Q2LFsNwxY1fcdWpKQwTpQrpbdebhAZLEYhB8YnNermd12Dx7zx",
  "key7": "PbD4VsFkmNKrL9F3qHPvhfS4u15gSachx1yiaYfJoz8q67BuzPEqBMjukqi5f5eyToePsiQTtYeewEhmSngVRZ1",
  "key8": "31DymchRqJ3hjoErp5B2QH75d3Leov3sxzBhb71pbTpJZUTBEeBg3bi6FsGfnTnpAC1U45Dih8dPXKQvoLLkqqXd",
  "key9": "4VHyv3mfxJx4Sy4rJb7qVjB7bdAmchtDXGLBR9vZUMfJwn2XRaH8V3kBfyDqW4PKy8ff85kLX1WiZmJdxhLi5JmB",
  "key10": "JiA52rQ8rCcfGysQmDjkpDQVXXDBoP1yLbYWJxR3U2BkFQ2zUK3t8uJ8UmSGSQ1Vxnyse7w7DE1JScRJVxz5FVs",
  "key11": "4FcWye6CR48wgd3FfTezsaFdhw7iNxA9p7U8hAfsSF9eVmwVSoCbac5Z3rYeUUNGpMx8psg4PuGkHMpRUtuxk4q9",
  "key12": "7RWfU5tJoYevYzSAVqr2oKRgveZbGN3kMbhHopytxwrheTaUJ96NfG2N7zaMpBDdcYRs1Dyzr9HvnVHpk9H2WZg",
  "key13": "4JAMQtBNJsYskiTcYgkPZoxQzVPurEZ6m8dQBaZ5ziEZPLvMqFbzgnhZtduZJjDKy54yvDt9EtsAeJqchd5eiWGt",
  "key14": "4kaRUqA8bEpxcwywEHFcjC4RTifNy5bLnDiVP17J4hGamEoCLVyT4Xx95Y2XD2kcsBiLRbBpCQtWWxzq1G3iwAc2",
  "key15": "5B8skWn6fjKhVb72hvAuhj58r2ipanhWXytEF4GxcGW73ZhQ4UusF3MoZi8ugAAeA8c2f7NMZFVkjufngpEJ9StX",
  "key16": "4BudHhkbTUgj4QSg4eAj1gVPzgUTbGQFojfgXqp59Nyu7Tp3u5W3Sf9jh2kWGXAB2VGM1kvChbw85Ni2qVuaTRhA",
  "key17": "2t2oJCZqrzEJuQRYLvVHtRxQUMdbKPXmWQzMuS9rCLgPLTuxN5sPmRnrRtHtc6U2EcGhY7YMB5EuwehYmHmehTXH",
  "key18": "37UCBrynGKbvfiFGiiLYqq2bXDHV979jeMGiohUY9mYZpGBf1N1DbWQh3uaHWrBFDd7XefpqjWyPUmJXkeMdWeuy",
  "key19": "2sFdrqyhgRXoETpbTGnv4NAvoQrx5FXtEZeyveGphjomRZq5pHveUnSeN9EdseWnWmZ6fajLVsdze3SxXizaZAqn",
  "key20": "3DG6dNc93r6ZMEgw6WwH8RUjM2mBW2obVyT28WDKkcyt95nDBKH6PA8Pu7PRohwejajz3mgYcr7Gaciv12Hn1q1u",
  "key21": "4h4QEBSfHtXKq34sXK2JTgZmYC7WmPjmGLBvic7r5jBFRerWTZZ9wCDcZH55rAwcjbsfepfiguZRyq5TdfeEz5BQ",
  "key22": "5m165Ye99LUEqQcya2d7xi98vDKep9B9hSU969ccomV4GvJdburYc6xzaGe4V3TE3BcHVWmcN7fG9vhAbbgJGreg",
  "key23": "4GFLAAudmzjCPTnKcjrQdGBmw3ZRLvZQBEVEcHwL2ThgihthT4nSSgrMU2bm7CbofBqPjTgysL6QSRG1V1YXRomJ",
  "key24": "2CeiKFBQ13mUrWXgtt6EDL39DKmq8Ph8sCT1o2FmajjNXHMhzFKVyg48LZ6v5MZ9uxTeZvAyyqwc8YksvZBydB5V",
  "key25": "3F7ofMwM87EpCUgfPVmdR41GwMjemHKEAnAb5C7FavnrmZJYpwrpFjg3jcUrXqGTP4Q4XMxSis3wqGHYpGLebN88",
  "key26": "2YhZv86Vz3vrsw1v3QREUQBJ5pfYGpf6TiTJcG3JoETTb5wbmVhHbGgXhWfJ8aXsrsQXUMLnsXxTxR2LXMPkWt8J",
  "key27": "VxBcKEamDAyuhukesUR7JCXVvf6ShaFDM2dLtBV3AMi2WGBknSSGC9dNozCs259dKmh82B1DFpjApJG2Etnd9Bv",
  "key28": "5ySFiZiFBEJJYakymj2GNYfbTbY5LSt53VP3VXxeXMrxXWvg8cs1XRk5snvWi9a1bE6mDj52CqtZtap21wdnMuzK",
  "key29": "57eGwBrCJG6uT7H4yzU6RKxvhJaSNnDiUd9qiipeMmSP92UMdyWBMB3K3S4426PLMW2nRAu9ZXasJw5wEzBfCADd"
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
