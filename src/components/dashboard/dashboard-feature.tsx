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
    "iE97wvbFkx48isFYbS7zxbvdtYbK7k4cEdonpDvzJyGhPTAVAQAGiScKq3AmEwoSj9h1P5EphpjFyGTRbFYmiSM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NhNo5dhVhCjMaK9q65DWe2FnvRTBX1rZk5aadfp4ZqQ5yzFm2DnRevgcMKtNsMbGqD6JmkiSvbaBtRL1mRjLixn",
  "key1": "BtQZQQfayFqYVD7WN4wmMqJ6XrHWjSJTHNanFwPUqBTpLCssz31c7tAG7ZuRhyiqAoma5fJniE8BQhScDcMwFue",
  "key2": "2H92mW1Bjpyhxb8v9Pv6Dbe5e6PJdbpC3wLJYwN1PcsZiNqQqcUqVVf4he5hdZCX3XTFQnHa2xEgR8gxYQrrVADb",
  "key3": "3EAFxT1vPqwEPU4yRzmxNtq7hY62su8sKBmqCVagyz3VB6wFGyi15ArzoCZGwPHdJYnuimwaG4LVB7B22yQsCkJJ",
  "key4": "3vbrNbpYJSowepcdyncMyVFMzNg7smGcUrBGyot6iVdeQtAqP49KHTxYMngbHnji2k7cmYEp3FJnntFZYp59b5qW",
  "key5": "3QjmkYDdhHSd6ThupqeLxy3nE5jjhQ6sUMSxDAr3DQm79Nc5wE9tEhcJQ4dUXmGvrDrjS3HDkb9mEjEi4VRpniQs",
  "key6": "3V6hznXRZdF3XoZGRsxpDc1K8Zg67zLsAAAwdBeJfb8G7BKtv82aTnjiGXQ44he5cpc6qi3WoUGPGfHonigcZ5Rp",
  "key7": "5WJynG1CECRJmd7zcGMZdDktCnJaADAwrjJ9bSaYURUr8RnibMr1ETeyvyUKtLVgKheG6ZWea99VQo3NW1SiH16P",
  "key8": "Vs7zU4fV9WnRBRnqYvzF2PbrbhPXkuVodcfUofGcEBZZLA1fyayMawBpHyqi7BvZ2Z8L2tnGKsDhMPRgCU149yP",
  "key9": "5rNC5rQyBzjd36tm3MhFUzNMzTGk5HLbMfasMo9JTvDyqcsdafEm8bR9e5zFQy4E4EeeaAcK3Gx6rmbAfrvCsJVZ",
  "key10": "4YNupr6vyadoc8k4HiwHHf8dKyhL66eSd3weUg6R3sCV2AWLpg4iW6NCM33RVsxpMfX65qFBeL9U7bAnpBbN1iDA",
  "key11": "3uJpYjqbaA1SrhXqwdy9ZJgKwHxSSu52KFa6z2YRV6yDyo58QiUuY7JXtrfvLbT1fPz4KLqoQrL982NYXRSBmEri",
  "key12": "34fb9aD1QEsRY2MNLtXivtCphcDC6bEbpkr8NqhSAZkQdgKGDqW9LbTAWrQx4XMjfPsAY8myF6sYUK3cw7SF3c3d",
  "key13": "1ExKQrNKw582AJy6sGZBDVDp7yYzZTcNnjfZHAaLWYN6tAwU1VU5f9EiLEk2fiCKwX3DqHvPfpegfmuGZ9aA8B4",
  "key14": "2YR7RqZykpQDRA2qQu4hYPH1tR6ouff38x9zmH2yVaoUqRcMABSFMwyVdrTmiBUAP5mozehqwDsaeRxUkJUWoLZD",
  "key15": "5AwSiQqg44WeUCm2X1EHdindN47apCTp3Nr5igAqFsDhsKzwSYSTLuxvX72w22SZpCpqYc1D7RzooL5RsMQkbDqJ",
  "key16": "5QRHKMEDz3kuhYRjyTYXXWyVfdnozKymihY3HZ32772dxcNFMMaAVpG8EP9PstAxvZMhPConnZnT7GoUNAkqe5FX",
  "key17": "2Dju1Ymy3FuZgAKFyN7zujYNGAETLnKnH5s8uGPrRghr3xGMcEvT1sGPAn7iuGXGTjuFXzC2crTpMQ81RqVk5uQc",
  "key18": "4PVqw2mG7sJ9gFD3pwzyzSAaHEhHjn3FTgu6x5MU2iGBgyzH6Magf8B3xKo75XU2AeLmVEZ5JLapP32YsZJfH6mh",
  "key19": "5KMtEsKGhjju7yyScWXbYiDt6fchCy6dSJbvEuRwQCNzybKdmMt8RQX8jXWuq41bXDG1B7HGBpt2uCHEEbA9pkQQ",
  "key20": "5uMXUEvwfMyuZ5wccKMJRdvroWUbiN5tSeZsYL1ixnYCBFvK6bmwobnHoNS2PZ1LQgZ93MzbbEmohnaKUbN7XmhK",
  "key21": "394uiY6kRR6c6cXeikgYdKiV5MKu7TvLAqmLc2An9NaGkRCC2ppC31od3oB3gEHwbHJNSTDwxEAXSHqWVVWqgWTa",
  "key22": "2UUo43ktvq1gzKRc9Z5R2azZLUZ96ahmRvSFkvHKtCp32zYhTtXkZb3PD5fktF9YZimv1DXpiJr64AuZpm9Zy2Pi",
  "key23": "3tWH2osfyEshm5nyUag8JTuVNmR71adDLkGCLr3A4v81AgC88w9UNzHaHi1rxyHgzkkHu1x1fEnN1iVkzCNZf51e",
  "key24": "3W8s9Mgf7BgwPhtkxWJMexUNxCN7YytY7N3GduCbPPYMizjpGUXNAtAdZB7xVQ8dDnyxTVbX3J8oatb51kQk6NBM",
  "key25": "56yM7f1XB9dkTMbV2HgdYEq7VQX3FkxuA8awePwu5hacWzrD3m8q1EC1Y5AoGRp85xBTZ7NDRzaS9Fn5VTCxEJ1G",
  "key26": "Vqh43tv3UtDXKjdULmmgzyazLpoRUpPBAtq166VuT2u6qQnLqRusFyAHgagBQyzVFc53xbSyp71iBv9aJM2Kso5",
  "key27": "3aSnsutT26DRFNbWrutkmaX6tRVGCRXionV75TyfhsGb3y26HYHJ34CKLYAcXLNPA6tPWeKixwDptm5CHPf1eCNJ",
  "key28": "4mjhcSus7UV1HdF8mugCK1ZaWAS5hsPKVbdhJs958aXsK3oEF82dvoRFV3RM5hmvAWYAVReG14PKA81TnkGVNUGV"
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
