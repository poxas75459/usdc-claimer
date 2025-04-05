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
    "3cK5awnPsKiKuULLRydLrork399kSLTNvJ3ygFUQKewZ3exxegrYckYd5Ng51qnRMQsUSLtsMYB8RicukgbH9dnQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CiJduP7SbF9A4KR54e1CeUQDpDf8vJaodMLYtusZ2yp9hKgmRZ91oZMxEr7RfimWR8eYKwURwksA67AGXHQ9m8A",
  "key1": "65qcf7vfmQybDVfRbEvAXvZBf9Vj6boaiY6BrHgLUCTLSx6dHFeuMJVYx7Y3idS6GGoqkhd4FMAaQHiL1LXssbJf",
  "key2": "2RDEbQ5x2K6tioNS2nyQaCfXwAtB9v91ksAera7131Q5m6bDiy6BkQKY55AR8DR167LhDJFojXupD6MXY1DP8At",
  "key3": "5bQjfNyvtTAxqcYoMT7bMgj5kxCQ3FGFs8cSDwVcBQKdvd2P2fzgYvgCnuPYw9kThWWzemEbHJHePdNQhWUVLaEd",
  "key4": "5TwZY8sX9HBmPkku4Ywph7Px1AbgumgfJGvnUn4pKZFajH4gjKCEv76zUN3fgjVXSpQXirPDt5TWFSFukGfzTj2r",
  "key5": "2uZA4udPd3c4mPwDwFntJuMHsR3AL5J1t6AkoNviWzyVhfJgxpJmAGXzw3156CZCfojhaWSsbMt33BbYRwMV9dze",
  "key6": "52RhvEjKd6CPVPJ68z87ncbzF9Bxwd1Aj3cwVErVAxgKeYJfWTDPAQ4zjqaK2h8DSqbXmFbCDMrzYezR32SL8iRm",
  "key7": "5g6KtwdoFVcgo1fEpQaCLmTZGijrWw2rhHqj5Yx6N5nM5dZBZEDgvoVDEZyEgpLMRLGEWUbFcpkKSA94vZzUEZDv",
  "key8": "7ijNgh3axqH5g93hmAUF3EyGSHUjFR6bMjCACWUP782mQX1jX3oAAHduKqabnoQAfFKzHy71WnVr9qaFqM6rt4Z",
  "key9": "594rePRCBKbs8SmMD2opuWbTceXumVfEQ4HzyihWB3s8Un7LuHH4eSZmBTysoySShpM7sQbdcbzzN6BKMmP3CaTC",
  "key10": "XeHWwGQrJM5iSVxJ531irxVC9FWRyNuhZL1mjT3eEGG4eHKakLEiiFNwi8Z9JfR3SrWSeDWJirX1S7ajHfJcmSb",
  "key11": "5JgmNgjVujB2GiLNuCE2ibMVyrmQBxZa19B8nipLA4wMVBYhtbeuwXD85FgVpuyfTmikSzB2FM7rqVBVtV14tYCj",
  "key12": "4djJub732UzAjMcg7PayFj156EMbLLSthvxRNSC2w7zsRbUuirAUJozYrYGp9WEfXFavNrzwofyxyjxTedUZj178",
  "key13": "nbP76CeNZgJVyTUewrRDfaK2GLBujQCmPdrLW9jqFNEmr5aj1PEY3rDoQiTkH96xrR6H9ALc9KmF96DL5BJjPEJ",
  "key14": "4wThBCzv5qYj2e2cLVzmdRMsyVCrNaLQxZuJCEQRSNEAv31X6wwveiMvMY4sYJx9zPKYCiFFWmYd2JVqVU83KgUr",
  "key15": "V8bNdp5iy8yu9JWqWN3Nn91YeL4KJ1LMFk1mjyzPQJqVDu5PKvjCrAWR1s8BTatJWGq1qK16ejFQfawzy8qCsAF",
  "key16": "pJkQbYeHwsHqiTZ7LfXGyRsYX2qMksVk1mK5frroJ9QJFDavjizwxdNdEbMUv2B6Z3DDCQcecruykrtkAQWUQkK",
  "key17": "4UsjiG9Np16LJ2iX2DFtgCcuiPCikqeKXuJfx7dgagWT2Smpwui1FCVCrnQHj6PbhYYBYikLybgUoFjndVYXTbWj",
  "key18": "5KV3MRyqjDm9N8LJnc9TooWtR3tSzFzkbHE8o3qhjD48sh881Lu83qiFVpLVVo1YxP3Z1UpkEVaLPWs6YEvVyeGX",
  "key19": "26Hxf2kyiKrdrugW7qCE3nXrJsgRd3DzNjMCDM6VZiZUVPuCtWgXZyak9DBDnZLKGbY8zvcqRdWYnUxKj3kVB1tQ",
  "key20": "24gUnTWbTqDi9wC4QqxZKJwtFz7GSR8skh18RXJcPKFCnPGsew8TjRrkL4t26pZQ5PCWgr3WEnRj7WoNtz4M1VCy",
  "key21": "5KFJh7ExBnJxc37zmkm2mv6XrAZ9YRBYGEdm1wRUxSR9JCxDirqZk3TuLWBTThZWFkiCwMtCunniX6pd5xqKPB6X",
  "key22": "3oQeykzGdKTpePSwpcsjah976CzSSP5mx4AWeM6xX1ieQiG8y7UaKt48GpqQi5ivTfXVPNkKNaS8RQiC57j97uXw",
  "key23": "2oFgmo7f7eA9n4PTspZUe8ou7kdHwAn1ixxCNKFGsCSPYi4XEGJ5VDuQfDh4jYFYmbUWGhZ5MLfYHEQer1SfogEy",
  "key24": "5mYBKyMADEhA9dMwpDxFMLAEzw1ZxPoS7uy9kRTiWGDciEKgVFzgsEixYbCRUurZvpVQvJfiYM2cXsyBwV963npA",
  "key25": "61sAD19RCP5cd6AUKQW4nE9qZ7NLac1fcqmNhQonvixqqbDV7WXEL8mHccheSEUn7DsNMrv5PT8dXySXfw2CxVok",
  "key26": "VqKCK9ZeLSmNSsCyMiXGe6uoCSxUrQNGUXKKgMCaonnFW6tnbD7edxhj64NTNAs9VXWigohP9NNEV5qkHUT4asG",
  "key27": "3wG4GECLKyxtPf4xbxAPEiMG3WTh7EKyuWgcGVpaJFiq9jK4ngwWRxS5vmHKshbCXKYLiSe8z5MAiJEnx3b4pAnr",
  "key28": "5nht2PtmZyhj6gaFqc8mCN46SN6qs9iaWxwWx9bGTwg41Mxw2zfkEMsfZXfkwRo2pmn2fVBPuRkbt8PooUCREFTK",
  "key29": "HW7TZCkb4naC5TXP25sNqgkmJVQLuTW4ZNY3Agd1mrWx3kxJtuR7q6LpYtwoAQSDLWsMNuvyqbe93gGcE5CySx8",
  "key30": "3rAWY18dsjVoCq4mKDL87xpHpyDKyVSguVqbiEkEVw6YC6kovwFwVRV52bVvjD99PkU8RBB4yvUQ9J9f5BbSmZtR",
  "key31": "5JXmVM5wVirr9CyeBfoHV2XegRBKFnYH54EwbiAv5jtaA262yBSRGHJpuNZUYAJNSqY2WE9PBL5AMSECvBep6V5U",
  "key32": "4ut4aMPnWFNu8qyV59q2oCR9bJri7etVpQzspqDivE9bbes5qo3CxSjcjRmABju92cu3imeMrrKuMBh16VW8g88A",
  "key33": "JDfgJVwhnmYXwQfGmBZBFwzpgnejN2Kw5tk9sZa4yEr5DwLDemYS9uembjpGFUbH1H7FqoSBVq4hpwv1Zrae2Wu",
  "key34": "3vHkGvNjb5hyZFeBHeo4h5TG6ivjzDnR88yjCxR5PGHf4BrbjVvxX3bkUECnrHf3qvAR5qdTNFW4xF3TvxBJFeXN"
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
