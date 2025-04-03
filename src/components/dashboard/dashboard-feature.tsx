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
    "67PeR7szuXCqwRgqaX1WLXABtWykLQb3H3uktr2qt86PFkwkPc1ZxS33BEDxUp3xkVSbd5yMGU9zHAnRe586KGz2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53NhRMSyy5XHWxM4bsXnQwHs7wrHmc98AYqYMuRhusB41MJ7RGn8jRSgZwmXnuyHZUy7HDim4NEJ4gwX8UnpxeJj",
  "key1": "Gtcgmo3vdUxcTzfCejWxoCpqnLAiGw1HptoRVVPv37cwjibTdA4LudEkKJ9EBrs9xFE6UaUzpq3jobhk9hLL5Fj",
  "key2": "4Q7z3BEd1hpvNR6kqf3jKmHJLV2qopyu1k4gsjJBSJzCehk1Jk8k5RUGwrMgSKhAWdXe5PktPAgBCUV1XTrRk1oh",
  "key3": "4jdAvLnoAdFTHuzLBusurnkpJ7CgGGzbKr6PpUxU96Zr8Ldofv8Xyh1DbTMwQKL5jn4dT438GnTvYxrFf38PCh8h",
  "key4": "4XGoM5FxMAJZf3zKSx2gJtbpbMZSwB3BgvqiUbvfZQ2h7UAM1PkKeHPLcbRL4WPWv8AD2RjpNTuvTvEqtpGgsL2t",
  "key5": "426mfBp9nngzjpt5mx8CdrqoMmhbEL7mVPqhm7wK4i9rp4VScDV2EhkCy4QPuqbo1ZL2ByyJNiwWPRvX3ybyJVyv",
  "key6": "EQ8oFXxfHEpoNsVeF9VL994maUqTNcdPQhCNLmJSyegL6h13MwwZ3VEukkE62MnaywUnC5yguUADFxhwmaniiXx",
  "key7": "AmVcoo9mRdu5WJkii5wg25P5pgkdj9oZzagXkev9CkPiPhZofKTDYknaKhFvTSTHtYLnnwe4VmBmEuz49rNHYZa",
  "key8": "d4p1KnCVWXMV7oEiWupSBfDZRGyWYT3ziixCJJdxDf7JyXkykbaUK7x59zCHXp9gZkWhXVvGPcnDhwMnyubmyBo",
  "key9": "UGB1GDoBrYLecg7YzTd2ibEVgdEqWQ3cW2qosjjNDv1Cww846Db7AbNoKQe8kVJDGD2HVTMQxMEJtysoW4SBi36",
  "key10": "HPCbAZjrvf4g37eArensa3QTVBJ93d96GXbz1QYMpfPVVZ9boCAFvK8avDb8CFjbqb6L1nwZ5VHUryM6JCdeEyi",
  "key11": "4KGo2mvq9ypUzc6KwFzyyoffgbHUtdKRs3g7upkkDQnzj65z6n3fvXfekbi6CFLNHBRCajEWm47SeLHwnerjaNY9",
  "key12": "2NygidgoyubLC7YzMrNU3EroZ8p5cDC38EXDxUzsEE59UZyNNZS9uEAz9vupbvbs6H6g9dTfUcEedTQzCh6zRvdy",
  "key13": "5GDsnm5rNxYHPms245XFh3KMQnyg2bGuNy7RCkbPUEzLfbjkWKjNQE61bCFe5s3KYjeBzfLn14mLveog5xcHbgup",
  "key14": "FVmzNaj8rgjZy3PbztPR1GCFj3HwiGsUPG6ozT1o3ry1jHrXAfgJMAvYFZVmFXUzLgUu1UDgADbEB7SERWrRGkf",
  "key15": "2Y7fj91ENt8C3ZtMBmysQZTRhPu33dYgbSqZKUs36btjDhHiZQFqxHfrbghUYCTbDSLJqrGEoYKsvALRaMoBSXtM",
  "key16": "4gxe9MN5dBLTJt9zmgc5TynXzdUihTdKbHteTSZVSc4LAPTzcYcVUTzxtyG2u81G4zubtFHY3Fs73BuHT5N8GHMC",
  "key17": "2XM6hWH6X8tptmeqnv5rqvD1z4eMeRZuhwZLiW1AsKkEfFnziZZLa7WuxTAb16pPPMNs1hyfoaSe7AZuYEWQFLCD",
  "key18": "2J6aNPRtEagWW2QQJbtPDYwRYpaYeaHANUSnC9gUbitoQd46DnvTuet7ePNAfkdNTD3CcmK6PvG5qqK6C7SHvMMm",
  "key19": "4w7uDvYiQw7mNUn9WYF2sBwGBLRu42okUEPodMo3133NDpJDo6237AbJEUS14u2JVVAKuMij9MRBzfcj1g2TmQVS",
  "key20": "2Wec8PdHLjLktocQaMountVpwCFABuQr2Tsbrab1m3eDx35JrrGpRUuiVezaQ1SSkAPYCdqMx9d8VuatdvnAndPQ",
  "key21": "2MLGY7VRS5LnGabbXFHn796JgwFvZd1zfyfK4mJzcZBqSF3Y9WKTJRUtBpDLR5oLHxUzgiiZbZoMoYaAmgJLjPvn",
  "key22": "4bU8x84inoJmW2uBZWNeYYg6T8FQd5sqU98uoMfmrq1gZLXirKYA2psYAXEf4Y9RxDwNQWHiagN4n2EK7bUTSpdU",
  "key23": "2VmE6uaAxddiuzspdXN2uQhnon7NSdRgZ6E3adYqAo3doukvPTFhVWchviKLuKSknDn7DXoXC3XunBsNKJT8pigb",
  "key24": "5znrUcbNAMKb3f1qzxVnn6Ks7RWYwfLg1KPkQ8qRZWATGyeo32NuCGHgR37B9vHREukbG7awMik3w7scQb2ufYfP",
  "key25": "2avcXCiyA8KNPeqXtFUazyp38et89cyVqXGbu2EhnvoaaBH2EMpwuuViKk4K5o4G4vp1Vkj2QnrdXkFGMb1rZCSM",
  "key26": "4DSmB8ZfJ8hEuS2TonJDz8orXAKZRyTN3xMhWNMiJZVxbzSr9uBb2Fi9hc7YZx1WRbgwaLMX6RtQ8rijdMSkhCHT",
  "key27": "3kqvg8xYRx6547aHM5XVxyxSrX98RMe3ih8D3ZJP1CpMry7ayrEB1NWCTMcEmDeZjUJU6WRm9dJpk1pbC9HS6B1C",
  "key28": "4jfykoRsHeKs1S3kAn6AM3ji9NcGwZAZsJ7ow1xMmNHS21ePfmQpWfmzkYhgL91WiiKV2qLQ5sn4mAXm1pRbD6i7",
  "key29": "4zKNQevsjmhDdtkx5QHwG2XNch22hk1LMuFuoqo5ZxRowqDDXqnZy29rfkGnw1qeiBiW4Kc7SeF2xmm2n2r82CZy",
  "key30": "4jM8x1hemWDdaebhCHKj2xeH3ERYTzovA1Z8wWNZx5ZT9gdcJr779hb5qPhDZChba611FwUfUeDeXbMxZe3uVaFi"
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
