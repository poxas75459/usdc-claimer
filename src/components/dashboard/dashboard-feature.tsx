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
    "3LQA6rLjALy2MCQJm5HMr7QNYD6HM3JZVJZqGPGWVad55yTt2246SZrrKWCyEWdeMStUgMxJQUugbmRhNYW4ZGD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sajqhj6xSAqe5eeSiQfMjPnAFRfaxRf9dnewF66HX2LkfN7qfTyzARe8Hg8RFmVksG96j9voVeisv8YY9pjZxEe",
  "key1": "2QkxqNLN69ioTJFSvCsndWQpeCrzPWoWBRsUDdosBH9qui1ASMGKR8grFU5Qy6dyvaqoPbu1bsTVcRfQLH7Wygdr",
  "key2": "21dPnBcS3piE7PxBTEQq2KLSVaApLQ7rcE6ZN5nfsbUpu5p1fapneSo1g9gcJBHTecXtRvRUzDG6B8zbTiyPwijD",
  "key3": "3d8fKR3sG33cxTc9rEC5Kz26jSS1Hf9TW1NbPpwPSueX48qT3E78sjPb7PGSkTfy9xxRwKUEJnGE77dCV2ugb88i",
  "key4": "4yHZbay6hrtxvPMG7YRie88hTJ1QRPY1Uq2McB7zB4jsKL74w9jzPkdpJwvYY7MdXBRxzu176LB1awT8uwe4D7RJ",
  "key5": "3p7s2nyPgmtc67eEyqTbZTxP7LHWbTgH8uqYZv7fV9gTqXJ8Uf3pvKUEVqbJoQk9zb4t35bV7bgtbBTJjmnCsiRR",
  "key6": "3gSHpxkghXkL1sLFYHWJ84JjJWYUvxNGfMjZDexTcAw6dFhiFVZbTJdQ6Rm8rBYPew8mD2YGhpNiPty3SJMF7Wgr",
  "key7": "37pM87eFokU7zuEQUZ62CGF6n3i4Xod3Z3sAVCfnhoucRPx9zB12cHwbR9XaS55b6gDqTrdunVLCzDX1NRGM93ug",
  "key8": "5ipEGHUb5YDWTigmGoVipDWcNR5iWpoVpEKsKx5YSRQT4nBYKZyZHTcFWSraGszo5eRDDGgHHb51iLJRZQ1ijetJ",
  "key9": "5UBwDQAVn9LhMs52bnkBDCcMXjgT4YkPG4bJtM2tPywBSgq4otpbrEHLhwbcamJ4NHz84BDTKez8U7P27Y8UXXmN",
  "key10": "3FKA8e3jJHMKfdJWHSbFHNcdMb6FohaHtHEe3LNQygtjRKvzLzdyNZeFkvZCasfCXuwLQNQ4nJqBp8DY4r2EUD8V",
  "key11": "4oQXnHtPuMDNnh9cUBqqzUwnmQR4Y9HEdvPeNJcf1n2Yv7wq1kZpWVB8iDRRFDT3wiKYU7KDsYgAMg983wRmLGen",
  "key12": "k6chGBfmTMT9JuZZ5CnYGym6y1ssSCGE2mLGivEz3SnnRAvqY3WGHJPNcoHVU2mEL8tLii41bNufLbetXGrwyKX",
  "key13": "55poyzuVSUW3EJsAYdoAYkqv1MYqcfD1V1FdXeMZrmwnx75eiwv82kFMSusrqCfat3B9pssUg2zLg95REoYjKC9H",
  "key14": "4yDwzTLDc7VS77QtnrLzr4mZTgarSVw4wYStHrBJadz2HcfFvVFrSvVdv9rFAqY8QARVqxFteGSgz7WvkfnAt1Z5",
  "key15": "wcGiaE5BJZjSFcxPuus1Mn5B9zPJUQQzapGA7XNP145WTaXxw1ukJU4YMhMBTWrRJYhTvG6W2raz4z7ZwLTH156",
  "key16": "5ktwoA3meQF2UVjg4pXDEPy1G5z6GfLDBnKWyxsWt1hovzxCeZ4qvtkYrUiVM8p4Zrhw1hkVc83YMzcafMnQRTPo",
  "key17": "671TsB9ucmC2acsyykRoFNQC8A55H9ip6MnJ7y1ojadyEN1XzRrTNAAugMRgmn4XbXtPuJjdinK8ThPpi9naG8VP",
  "key18": "4FaybPLZEUrrAxiwqP1rTnpDKhq2a2TyhEFG2CSdXADzcpGRCzVwnUnFw8XLxtJhaaFrtmTsYcwcwwvJu7ytGe24",
  "key19": "47yGmyt8KjumrobvpfKgiGNd2MZZ9Hgr5rrbCiU7hTDiHigJvZG9AcgHa2xJbv8ZLwqyGw3ZC9pw8vcEWgdtfF6h",
  "key20": "4Bgt74MXWn8L755rFdPZGs1QnT3eZyueML4jEaD9tkUi6o7MdbNeLFyw2ygLsj8hmjhndVeSJHg7ykFqzMiVPqsH",
  "key21": "4LGwym4Ni2drCh4EHbF7oSaa7QmznvXDZxBQ12oRpwLuGQvnDqbK5p3g5dzpYmP39b6jrkeAJ3oJkZEnXypcVE1Y",
  "key22": "t88WmBksiSgFctYfUEwuafKeAChE1orMWtDPGT2DRVDWMA9aLNK5Fam5DG2pzYi9zJnAH5wTa4ZaPVBSiCXyGpb",
  "key23": "5GVh5ZC68rZjFBVnfPLEmHAUSZarYjQjskf7CARSiYmdsbjUAP2E3y2cfiMqbKvZ37nGdSuc1cLsdAXTpbEeejbf",
  "key24": "3fmeRG3jcoNSZp8ycuubYEB9NVSvthTycfphrfZhRwNaUfjA8QWFT1ZFh4BakUNjVkunxP4iUZy67japQAVGjppT",
  "key25": "SX6MiG6tcun1efpSJa4qxmyRrmvAMJ6EfTYnhjt9XN3AUW3xSv8F3YonyvuDbtFWugG9xr3L1ftsyQmhUAeygeK",
  "key26": "2r9W93uHMWce43LNrQj6xYAsZ7LECxprFXeQedoFNnm9CyWvowmvQUmsg2eT17LsY5CvcAHoERT6v5XFC26SsKkC",
  "key27": "42qUtzW1dWwZPrFUuA2jqkwR4TF3xzg38NeHo1Bg159ikuDRF6V2K8MGVJxn3Ew1WtM3KReBES6n6i1JCXc7wxmw",
  "key28": "yAyLaZUW2iGvxjdZSz6c2SyvSbcQGrKnUJGFQD4VnpMf7VPpSS71sPReH36iseaxP4PQ1uURpmjmeagdTz5B8QX",
  "key29": "4GuEUJrW8MTDrT8vc4JxTwpFH66Twbc9K1nSoCyT6Vd5MCS15CwgYToUHfq3mWTJiiNPdabkxLYQwtU7hBEJpx1A",
  "key30": "iRksxgR2KLxNfCNVs6WaeNZ5DvM8aydCrnLW6dbGWQAhtS89eCuGb9BEUkqh2HTuauWZqnbptnP85Ss4GWyqrrt"
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
