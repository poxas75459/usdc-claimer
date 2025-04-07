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
    "4zuPcA3KDUXnSs6BqZDh4txYSaQytjsns2Uhr3E5zJaqfB2uzieUTShKXB5qRjERvRBfwJCMiqcM3Lk3BAYJaAf3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NgPpckt5Q1bFA4SZ7pc3oX4BvQg9G7DK9v6t2mfrPK8NsYWym8TgNzJmA2iERXYmqyqg2yZc7ie1CGnoRYnS2MX",
  "key1": "2RAFWz1MY8EvoNKpMzrX7xDBrUyhagRx6VEan2KRPyS1fx72Ji52NCzD1E41Y7co9avA4NEXxbuL4SkiURa5Z9W3",
  "key2": "46RdKfkjMuyAH8RF37yWVLv2wo3dvqrTsW4cow1pMJ1DuxvbRvS6CgyxTFgTtrDtQLY9K3CXa2zgZQ8om3Uxr9SW",
  "key3": "2DphbzU9vWN4uyPVP8SNWU6XE8Zjb3n9Efxby761AuB6zKiMskiuWiUz6Un8tnN9i8f591dRsknyzScb37d3HDTR",
  "key4": "hAZqUws1VigZzUbF66XGK8YMmqMLVaMZiD4wWW6htoKSZpdMB9E12SvLsCAje4xwE9GQyBeK4teGTxoSrSQns4y",
  "key5": "2pJk7RF9j64N3aPFxHRyWEzWRnEwY3Z78tNpBgLNs6NbBG3oF7PadM62h8mbFP3k29HWmqXz3PzDk5uSFMGzd3z8",
  "key6": "5V9gjKCGL7VX5RGhigPHofzCBLSptdCfW6rZnYCnTtCqomhzT5QvgZLVEtLyDgBHtbcECo2Db1oixWH1DKxG4Ls6",
  "key7": "43oEd9qPaX6UED2sb3x8bLuxj8BY2EbPzHUCfdPtUemkoQu6cQPLUkBHV4VNkpzoxxJDXtaN1bcRTvgbDbBcE2cf",
  "key8": "psAZhC2BRKB9BahMtNxzWpuRfd3MjBcTFBaVz3ruDc93AmC45tnNqD8rVuE5ZkWqezhfwbtneBcFeqhncrY4gKU",
  "key9": "5N1AiVeMwHizpdDSRUwgvu1hbytUPksX17uDgEPnD1UqEfzZtW6gAgK8TtkmG9aKeQhHbfpKvXuZxVh5nwaPBmBi",
  "key10": "26xBxKCTRyKcZTZkD5tBHUHrdhXXnyJqee2DUXeLMLQFTqRrVwmNu5siG8YqrE6aGc2P7ckM3kCKn5B2Uo5UZN6b",
  "key11": "5xjvVqNjRLb56kc8Yh3Zn7AHsyZmRkSQZUzkgBBs6EZNAbN3E2F2nDVBTKiRoojuPTdeeEgWqWvNk8JBRixnniLX",
  "key12": "5p4w4BSG1rCrQnHqZ8gRsf44xZ1Tm66CczQ7tgo476PrYBqRMjgg15jGiMByGfatKpoJVUMW6thjruS9rRDnjW12",
  "key13": "KkgXUwZJdL5uy8YATcJLWhuQayQZDVpPgLQAqTJ9xE88jtfpWqS2LmKUmVcgFhCD9bu3dxANqm7rdi8riZoDK6E",
  "key14": "NmJ1XXzkj1ZnXJDPUavTf63Ggow2U2JP8LceUMh6gWaEhRiMz28oeGghcVNYZbRZG4js9zhmvLhP5Gfnib6UNo8",
  "key15": "4g5TFBKyZmR2tmYVZPeTo35SRvNN4dEY8j9Tu3G1dhijoQNLdeRXdwoMdy6jKXH16mrrKAj3Prwuv1v6UxoWiWV",
  "key16": "39iiE1PXL5ELU54VYRyBdA52Sx7yYoanvbLqUNngpPgxWMT5C1eVqRXjbp5cZT1t4e6ZxiWPff61PuGj1ezzUSBd",
  "key17": "2PyafyoCM7qCzwSD1emn2ppsXGJ2iPXq36muMLTNdbRwDVahXjBGkWKdLqYoHi92UwSNqdSwW1cFuJqzD1j4FmfR",
  "key18": "3ZsRxT9JKVqdy2tGHteiLXFr28YJFkZ9wZTaDef5mWrGYEQBBPokx5xDMMnJaQ5rdemcv1QXRHikLWkebvMPUF2E",
  "key19": "33BzuzgJqCPnDSVqiVfqaQk7csUXSRTupjH7TKtHbbz7GYAeS6HpUeBT7t5kaiyNGAQxjXBV42jVQyzvuoEntSfy",
  "key20": "3SvUKWyk13pMMcZVgt2QUGKEAZtp5Xya7qmpjvxw39De8mqPzNAFAzKuEokQG35dDNav9T4RhDbxVgNPtvrWEot5",
  "key21": "5ju3NuYqGSDAbXhoFQeZnZMajr3fEp5szq7MtSv3LGwmVNJ9nrFrfnDpz99UBuYkim8MGaSLt3oJn6179e3tLaAx",
  "key22": "4BmKCVaBZZrNdjX77WCcXTnG9LtekWMXeAhL7F3AWCq1ZvUtLLUPj1VHx6hxmg1dESeVFDSVodT3ARFZJeHioLpn",
  "key23": "27E1foomLd4GtD4f8bbh7fNe4rc3JaXdX4LGsSDkPR4efs37vd5Pae5u6bbwnjmqTcgSRPNRvGmwch69P9s8xUQS",
  "key24": "3ZhzLW5mP5JmYbaWKPPXXG2DdW8udr5W8eXPJHoUeWbMTpJfMM2T2QSMPm19H6Ukt8ioQkzGCrvPhKUsFCp1xjiy",
  "key25": "5gwYDGvNSd8biZppaLRuoGZRRAptLCDneaMbhveVbmCfocapNGNz9aNuXh9uieNh9zDGFpwUfNjD747RrGdvXBRd",
  "key26": "4d5uQfvXzbP1SdmbBv8CuC5aoJ9TbJkcy3RJbeh6TA5bRtZonXDWK4RUvzjuHnUCPYKfRCuKFPhGzDBGnRGaJPJQ"
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
