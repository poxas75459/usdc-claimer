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
    "4NrJhopkijHGV8o7kuQtE7LHNoZf7gr13Xk3kjSVuNtTiZkuAkAxk4HY8NR7Uh1xjiDrhtLYceYb57NJo1vn1FZk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66teUiuuwps8No18Gsp9pHPDqPSBkYBtPM3U8idvwhSAR11N2ZKS3Xvs3ZKAfBUmCkiAaVWRQuVmL6ucCGgSsPSk",
  "key1": "2WafjU3SyYDMM5siu5EEnpFWhniPaTkH9WTG1EMiLCS5GQGuXfevjjwssyxjJ1EikS8NVydkJWBgS5JNAEpTdHFq",
  "key2": "GyK2gTdb3fhG5nDbXqeKkesoyYEwNTBUHck6HZH7RA14tsSM3RAoggFxMFBVMb8tzMth8RvoEiaB6fdYb1ab2w7",
  "key3": "3zgzAqYopKnLUcVvUzZe6ic6h3aV8RpEV4nFFKTEsmrnC3yXDHN1LKvMinxKiDooFyf6z6cujcHZiYUHtRjwmJ58",
  "key4": "4EmPJ1d3dbot8GTfm8c9Gxf8tLBS2BFMQEZzm6CsVxRuZWWqsaPyWZoLfKWYdLKgSPTo62acDuBBMRaX5zvUS7f9",
  "key5": "3E9RiChs9HPmKtwDBe74B6uDuv64gha7BaueTWYfU1bucyngptFjADDd7vTWb18s4A3xDBuFsbLHtKoksmcwhwSy",
  "key6": "5uVKm7TPmf1VxvBkXWTwfQxzuTbqVwcT5CbhZU3Qg5RuMvbASktdEkTqYb3z5YSfA8Xa9YQ7rfHKsurZZuSpiTG7",
  "key7": "W2FmmpAJqzjtePQdkYt6hsGxbF487YKD34KcMYB2kkt1MmJru32ZKBUr2DVbnFGD5WvBmkmvVzvs32CKEADxL42",
  "key8": "551fHucUCuqg1KLmAeZhwym1iuD95m5DHreCcoFgCK5o8oYom5hFw471ANcWPPv3fUTBKJBRXNYLAm2UzafagvhT",
  "key9": "5NZf33r1M6gocgrMi3oXymHjsWawDwiPAcpk4FVpngaSh8hAijH2iDqaebbcnGhPwx2FYHUSePaafikpaZkVrgXd",
  "key10": "4ZjrvKhMXxh1SWV97hceHvt2gZCER9fRDQvQNs3u6AMTsNpx3V8XCtLkoCRY3LzLFK9hXCDjRFSG4PV39FXhYtEE",
  "key11": "Fp2NjK3mxqN3YYHuNT2eB3G1ZnmW5yj1rTp63iY2dzPVBgY1UgjXEQZ45MvKnKjLpBWWsVxzCWvLFMNkPLcyeZK",
  "key12": "5iH6WjW6TFYAtduCS25ZYQJhHd6mJRv6f7T2zyVkH9sQCkMvyk6TMNfLLMFsTDWWAUQyUgqqMP233nKedoqz6wdW",
  "key13": "mmde4qJTFC9xeuzPv2iPhMzzU2LVqdLro1tWQpBGrvAB6adhkZy6X3tZvFVEYwNFMeapgqcRGBwkWxaXLEKLBpm",
  "key14": "2dp8X8xjV7Pxg9SiTfCUTy3tg894Sejw6t7F8yDSBKjuxP6TXZ1o83oBRcGageD4Vbctz9tPs2BRgEiruE67zJBF",
  "key15": "5M68s3sqJ3vtTKiUF3UAD3N52Ww7hm2p6ndJJRMCaJZCMSs14S4DCcV1mAKTs4gHPemxAAmAvXTxQ4qDotopzpxa",
  "key16": "XxC9VSyRL7ctBMYcdRSh2VzevjMzEqQ9YUnFsDSN7LAYoWVzSmeLyF3ArN66aqbDGCjxnW3o5HoaWdyLu1f2d3d",
  "key17": "4RaWLVKkExQiRYBo4Dq3wGSvZgehYsrxmh7urregkVpNXvL89FecRXMABeZGZ8awXw7adsLUvtRaotG2BVgLtgc5",
  "key18": "4VBfeoEmrvLRDhHNncSWDktWb1GmPwjK1t9yKcrXZpjjKNw3LAcKR3hTZPQzt6Z3dnyYoxKidQtzsZnB9knqLQdk",
  "key19": "vysBv4eiwnmYZHktictWrvvVMma1U9Sre52uRoKvFThXWD1P13qv3HYWn8ur1B4xGGrApTmaU66naMmN8azLsF8",
  "key20": "3QLksxMZVT8zoo9dP5UgZtDCbFCFqBuJVxxSrZcYGXgSLidABpqeeX6uZkMcb2p5KD4GGdxshLubrz5FNtbbeBSd",
  "key21": "5hef986NRS5UBKdXQJcEFHjJmPMbGWpeKSgmTZ92S92aHHQ381jw37ZqxshgMGE68mXQkPNjx9ziQE2gvsgawDo7",
  "key22": "iDinC2oHiQNue796CmjMoDfLAqtVb7KSE5fuhZtL34hEED3RPvpPFyAkhrdoNtpaFU956StExhXfL15XNTcVdPj",
  "key23": "4MuDoQCVrJWFnUBuzX3JTW6SxCTDtC2qnGKPTTmST2h8RaKvJqne5pCpRQP72eQs6q9NxeKfHveRfA2SpsPVK7i7",
  "key24": "3JuJf5GsTnN4XjQ8ZUgxrN9n1wq96JpKAa7dRcckXDUXaRWb1iX5rRSPR1mo3kG3WFGiLAiEFjgvCZZpYZkUaxfK",
  "key25": "5rjr2sxjc8rBS9zigdKcn3fgvP4QQaeiGBvVSaMz2xaBAY7SjnStyY8qpH7dtopoSWtBo1XM35hS1Vcoc412NegR",
  "key26": "4MYDqCRUuZqtkvQe8d5rdUETiunHVk9hw9yMvYUkkGVP1PLzyuhKjMZPSUt1cqAzQA7iJL2w5YzqrufLPyNoakmi",
  "key27": "4j5y8ZkUKRZvcSbzk1odxCAiW2G64GaW6D4CKoPfDTePUHshTnaznJ2PSwB2haanHk5PZvfnEnaNkoqg9BZSy345",
  "key28": "4HPPamFvtNaaQA8VNdmf35kQkv9QDohNozqfL73amSD5GibVr9yQ6xD8sZebHRBcFocHEVVTV6FENzWP3RbaBE8d",
  "key29": "3XiPEafwf5gEpFweauMkEjVpYrxir1dxwYeKrAFrFpXCiaEEz2Ch1Ff5qNLcngUzAp1CWrmYrdnkJF7LojefyvTH",
  "key30": "49Vpmnmkn7apPUwX79WixMNRr6LJCA6zAsn8doHKiAGX6xrktJRKV457sLCWd8YyWhokubzUU6HcNimN3pyhhQAd",
  "key31": "3tM3Qz4giTYCNYfZYBDkLtYJYB4VB5x37zwZ1gQ1jFyECSEkVUZHnfqm2WXedf32DTyj5k1idkWWMrFQz48uaMYz",
  "key32": "4G5uLdXojeGsVinPdXUquNq5negT7HWBNkQc12yMDX8KoSDRvYS8M2EWpdkSWc95FrpTctW4Uv42yvvyvkQDyjoz",
  "key33": "5Ajt7RUkjK3CfqrUfxkMFtbfp5ot94QWhvrP3MBcxPsn2JiwP2PnANnBmwCXodgwWdDGdEWSwJcZmr5CKzruPNCs",
  "key34": "5AgsGuk59L2Wqub5qjAKzGhkNVpq1HjYgQpW72pSpBjjUh5zMCmyEgcX5cR4hxZkTyPjBdhfSPWqj4VACLqp9nsR",
  "key35": "5oieuuXAj5zqnn7nKNSUcEETX1Pptr5CntXqEucBc7af4pjM4AsLZCJWxNp1L6nKqnrCim9XoqjBPjQtUbwGtetB"
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
