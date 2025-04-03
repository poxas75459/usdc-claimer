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
    "3poLpa1KgPy1dG5zS289mcctBNP7bmJNKegu8Gqs2e4Ci1rweefCGdHxNXpmcgASMwZA6ikM5LzwpxKgMSS1ykvb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SaxmSE5CTS7CWKpPpkqqgoZM4TUb2ngZf94bBDTWHwsfNxEPCCoEWPMtvBM49onXjqxACr33UV8pZ5nBDGT8RXt",
  "key1": "cirv6MsLqc2fkpHMy6TubR9XyeWMW656bHXpEUTbjo91cMRNcibSrspjxbDoLwpHQqZvFd2HeyFTxYHJ2VdtfRQ",
  "key2": "3b6JC6heF2EstUhQgoPjLPCPbWiks22ccoGLbh7fTTvbvNGM8dzdH44WYUa1328MbCdqdsyFfNnCDpz7iYCCRDYF",
  "key3": "5Z1nJ3vCAHEcPSm4PXFyYMiqD8vJ9RzR91oRet9utVB3dF3ZtCMm9Ar9HQbKdfuR6VThgfhnx15ev16a8rjBTohq",
  "key4": "BwpPJAHRrVirhMQDYEtfNYH7oaYvqUQDLLF7Xvd13ZtcvAFAJhXNKujHLrAvGDqxtKUBvttADx45i6ogiGXqfmZ",
  "key5": "5qSbUUno7sFrVMtqX2A3hJJrQTUNhpWgwSWHMgkq1PzCbXJ2FhTabWDo52699p2EutumzP73hg9EJo19pw6ESEhH",
  "key6": "2VKnqphyPk1AcJUQXi297BxANztsxHhD2YwLiYdhuSfZRgTSya8XGGeG4YThUomZSBD1AKE135v7r86Uoio6DqSN",
  "key7": "55epVnd3xNgiaM4beWVUEThKRA95txBsWH3YyRxSctjnPeEfhoapJvqZDgMEMf4mUmtjHy14RTiZ2BuvGM952vi",
  "key8": "4XPa6npeubXrXJsB5wHcJ5DuVNKzMqNky3LoB16TRbwMrPxyGncbUUCrCSJWsTmKnkjn2e9kPeUUS2xLTdS2Qq9c",
  "key9": "4QTAsJiE5KPz6NppF4w7yt64LQaat54nti5SesUMqQyD5HYeJuJ1gweRUQr6tFL7BezXVHr1g7gksHgkzudduLQi",
  "key10": "4QEuqh399S6bL99ZQ51CRxhhrZvS118ETYKUU2JidgGUy1PBkXVBFAwq9zCYZHNsCCkdHsC1xDVF3WWykzYXgwwM",
  "key11": "5DDFttTWNLCBLfHGyZYPfKcAhqq3edmDYZgdhLTSd2YPh5jzsLiwPNhXLd7jNMECSNfQwkAZjVDQpccUw1U2G7Ko",
  "key12": "4tpqab8xF6VZM6Qa2tT7RR4SSS4hyEczeKHp32JQuhNPYkHoPBrGCPKxrZkagWDevbmtuJ87VQrjWJcqB6V5FXSt",
  "key13": "2nZSAf6VRGoUx7ZyC9aaRJmEc5odrNFusntgUDco4McHwUwxpJUb1zRFbTxrrq8GFEFyiv5Ywrc4bTRuaTBYVBUi",
  "key14": "3dLNzmAKWLnv1Yx93D3BcQDq8hLy7F8njZ5yWLt98tZYuGsigLBaVUPpU6VeGaquHUeiVehksTFhyGitJ2UEtViD",
  "key15": "4ax5yf6CJV1wxGx68pkUNaZCyvS1yfMmA4YCdPJzk24WsHcZ9qhBgxQod2QRwTnLKeD9aArhEyBe76h2A1NN41jE",
  "key16": "4b39fUaZUsh8sUbqTsvu2Z9UaZ1JZQ3GoA4WiWUBXwf5kSaCY1KLdSGYLKfEKAevPhTorXZVPQnGkZQANb2DCZAm",
  "key17": "45ALUAVDTb3NR7zdDez1u6QSKKQLUneENqVFAhxRDzFWF37pwobwGyknMQZajoyzVpKSfpo8M5RQotNYvd8DUqhs",
  "key18": "2PfTzj4YDjxpcaEkBKc9EmG82LELTuoArBVKGnZnVnAaBjdTiuxbiNEVsgfo9hCXfBKyNifHBBV1LkfKY6kGAzW4",
  "key19": "3UbCd94DvtzpHTNQ4Fc2r8QFm8t1putjUdCJVLCb6SHnyyqj8KUMheTWFtsYjgTejE45oGBTPxV1ubyaLzmrBNDH",
  "key20": "2CXtfUqQoxVp8P7LFgMCgoRBA6tEGsRTCYMKGhwdUzdMfkirshro7bMrFCTFq3ty2QM4skB6YRyqp2t4HCwWwZDN",
  "key21": "54PLVppByUeWmExTxg9vjT6GEEiAD1aRNNjQRumwY2BkFiobR1NBkJPxqYAtFv7bKxAVQFMvyGRRgoyhYCM8nBTN",
  "key22": "5kJZ811F4mLeYuRd6yFQStXYyztvvB8dnMBD1GRCszQukmDGVwsnEuXQgpPfukmfTZwQX7DcBWek2QVdTh1nP2GZ",
  "key23": "2JbwNZeiyDWQyBU1pHDD3xWVH72rxaPmfPFw1jPs4ivDC18SaueHFGo1EsS3pCARgQmfgP8PxLPf7Ndm6MF5tQ21",
  "key24": "5n8HvaA8uewtg4AABbnuDz5mwYJCDnpcWem3XCjVNRByRbEuz8ccZuxiuaeZibs3X7DrVEnrzgWqHcrz3TXxRndX"
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
