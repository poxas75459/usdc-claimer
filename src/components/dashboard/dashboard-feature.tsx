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
    "HSMeWaoa92mmc5Mfv1HJCjMkg7HAm6Ck3cPyGs3XoNTZPBeK9UsSdaubPd1yz8FF6F6vcdvJw9dxzL5wGDQJRtj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D2kJ9idcyzW5P4RoL5uv9dTf3BnK1NQDBUhQUgnnuNrXP7aEiAWqnZKJNsrU9G95Rffuiqt3pwZaPGT2v2YxpZz",
  "key1": "3anj8bm4txjN9ZhCCbxVJ8U9pHphJKiRC64h8kGAY4pnQLgPzhCBN999hx5pqKtzFogZCcxqM7oZaLx86XdDBkWM",
  "key2": "46UMbuajhSTuy6Wf3NvTAqufiWjk8LvuzZ4YBTXsXLPn8e4xrQbWdXXuAn41yTfZ5GoiFPMNFMjZ2fMW9bvBHNZ8",
  "key3": "2ZD8iG5qks3kcNFWLdMwDPuSKRuAFgc8BWYURLj4ipwNUSX5kK8B43nafaZT6QyYgk9kPUkqfE8jZERvLcXmjuYp",
  "key4": "3dHy68epWdEWKtAZMTq8ieb4orSK1WDduMnDggwh4MQWEgox54eu5iG33txyRutC9CJrmDu8KXnebg5FY9Br3D8s",
  "key5": "2F3Lc8qG7XEkNGmKABYQnxcCTNCapY84HQ1KcPcaB8fkC6Fhapk2gcRZDEiDuxaymnChwPNSzhZ6k3sdF4xLqqpK",
  "key6": "28o5bQTSsZTPNgSRvxFKor8LTPhs2EhyqUB8Ls6Ws4KifEY3pY4niutnF94pUgFsMRLkpaira2LipTE54N8qyjCR",
  "key7": "4zG8QcAyE79s3CWhvhyWVTfHLmJacg4Y8sBJSKWpkmkfyvS4JQTX2943xDxYVm9giGtG86dTkXNAAWwcY8MXJEL4",
  "key8": "4YutDtMdZHJimADGQ2GcMu93W1WA3hfvBVmP6FJTv825Kpo1fmhscvrzte76kuCu6PyT4kmygo2otoh3392fS2eg",
  "key9": "4JYFkHpTkXAoCRCc5RBJqXyhPRSoPtnZ5saoHfeEfPLsJHhJu9mT7fmcKgCo5cV9HcA373NDF9TkVaMW5HbTnPrs",
  "key10": "48ipkBeNcUNDHwQ59oaZ5c1D93Bk7n2mxEpUZKRZ5yhhW7tTPeKUHyX8G3MRuszRYdX4iuQJ8oujBoH8XbxQtdWx",
  "key11": "5hYeaUyFCo9kbWabBEDR2p96v6J6LCSbc6n8PMCzDG8HkcXHrf4sqhDR88RhSbFmNtzfL1mbizjHB7dkookMc15R",
  "key12": "4rBAorrHp2JfPy6M2wb9wFUBjqx4kqW5VxNJ4L7Q57wBwosFRD1DpdCm7zszs53eMTV77EUkPeLnF4A5mKMc9CGZ",
  "key13": "3fZxu6EPk19ZieqZgZ6jTc9m7TXceUDpB6ub7ijNJC7RumyooP6b2F8z1myjpFewzcgP5KCSbHagHiMZsUed6DSS",
  "key14": "22X5iKWSkmkVD8keiwBb5zR5763Scbm1zFQtZ5vuax5QnB8Gi4VbP82dDHqevQMSxhjWtGz1gjtDtsup5eLW5cXs",
  "key15": "5yVwZNiqTvge5DVNR7eDby8oaSTqmFidGDq9HKbrGLeADksSUjaPFd2sn99vS3LN6GLP9yj1U5TcQA142YyLvbEE",
  "key16": "Hszp768t3THzHydixDxTKcNXHP9GT9XUGn8BMaqPDGeZYBL1A1YsqfD3jwAczwoxunKeY7BXfZESTZJJNosvNM4",
  "key17": "5Nhuf3Zm3ipJ9F7NRveG22yy1pShmsNpf6ucqAGRqFtMGvQCv6Tw6WcHAMD5jSBhSp2gdNBvuApoyD7npqaUyZ2k",
  "key18": "5fMqup9NmFfTpQrjbULnfaiAF2whYWpzRo2ebBr8FYGgLbxpNURUinr3cWB1wNc2ptqKn7hFEf8ZUvb7xBvsvkgf",
  "key19": "4MkC48CzGYkMLPS982MfTFg2ihmeCn7RvAwgJ6Cr3f5vzwarVzZLjVa1BHjyRvq9LmuRo3oNBAhgCBveLCCPJGCa",
  "key20": "2azNVStHTtcJ9WEuFSXzEFiodWWYjSoHjK3UmvTZWceC4zvkHkPX1LCCS2QCSmSaGHqwdRxNJvxP8cbVe8UBcbPi",
  "key21": "wifarGUCFf5V2vgg2SzYskT5UMo1rPJ3ckdijPwdzTD7B9bDUHvnvXVMCsmKmUfDqSb4Hzm55keuqmT7NkJgCCa",
  "key22": "4rgxafTNr8UKP6pynPy4GqH7B7ZmJFCy6LrCjMiJD4bo9XH7aFCViS3fTyTAbVovqPiuhEZL7hrDpvZUYPCAe1Si",
  "key23": "KFUhZTxcowoN4H6f2H8RXuGagVmCeyfckhTcUNE59YPKrj1GHyKr326jg1YKUp3TMu6EewGWHH41JKm4ob4UXkt",
  "key24": "3B5AhASvmoV4RE4hAETs1QMFw6sjgQ7FS3xC9UBxSHPLTRNNTe5PymT6W16SZRRNuH3BXUVCVbaSSKq79nAW22nx",
  "key25": "29X3aCpLYopSzZVSeXnzrv3XFjXpLb3uYBAfte1FExvBS1irkuVwgHUvUxAhUCMAAKfnyZhV8HrLBaePqkegZ7B2",
  "key26": "5oZQEDRHLS2DaeQfJoejmqkzwQkCDkPvz4cZPt95YBB6EvwhTf57k62jGqbKtXap62MURP9wcSWooLaNvgDfMPYB",
  "key27": "TdmJ9v6t1N1FfzUvdwE31QvmtAfPS4rAPUr28yZKsjFN21P4wfa61XXwdSwkqtUXwEVLXR2ioS8HvNkKCmRQdY5",
  "key28": "5dL5Ta1KT1s1pKCTJANn1aLe66WF7G3vQkoYjqUNFWMNY1Rnv2vY1PZf6SmvuBhNJoVmNSqDNjyMoqpfJEbLNQUV",
  "key29": "5t7k1J3PuuqHKikKZvY2nXq9iDsFVLqNefsQJ9VoMetXwfdMTT7a1qmqm4LUqNq3YRyy1Ts1axDPu6KiFoGVGBRq",
  "key30": "5SNdgGzWLCcMYw1489wn6H1XbeZDhp6kNZA3tApWsTiRxkmFPq85PxyE1hD1y5ur9Lx1RCrkW4nMmc7FovFPenkk",
  "key31": "2oYQhCYtues9MhWRniuQeomD3E3AhZJz92eJNjv7Sj15ACmY9U3d2f6wiS9b2aQ3xAaKsSUxt1ct16uPPNaeCMMV",
  "key32": "wuU6o2qC3ijApKKGfQp7YziBYXGtGyZSgCGRonZURSFjBVLkqTpPBhP8hvK8maLRsLKcLQqHw5YFS4ZDK6C3PMP",
  "key33": "3mN5fmaxP3o4i7JnRrcAegSFF5Stu8Esgk7vcsEKWbSpb2QGV1ZapYaeFd5iFnX1ob7mdr54C69qDNmifUrCW3Uw",
  "key34": "342Z1NrojwnZqJNuAHGkPUEfCzharYKCvJmwwAKZAEswbSJj3qkd5WTPNjW77pXtagHQkRTGDvwqSSUCWdfo6MBz",
  "key35": "UVnz7sKoUJKvyGkLTGDqDN74XNMyU65fKqr1PvYrXxHhR2XNq58bG59ur6Kgo2ExEBhPw97p3fYBsat6YrbVASq"
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
