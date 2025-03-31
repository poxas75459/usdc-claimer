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
    "3NvDwpc4cftdHHXwpu7Jqw4CoXYFmHB9qdkCeMmPy9vnh65YzGUDthEzPkPcUrEXweNLwDzFQ3VhSEEs2CF7E8Jo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62RtrTrp3cPPx8t4sjRRwoFwsU4Vkb3SXTv3a25zznTtaug75NjTHNkvRmM4yxZHX1ZFnykdH2BfFT9c5A57R5DT",
  "key1": "pRPnVu8mupxzcESaPQh44sX4k8aWEDk1nYKfCQG8ufyg5PUQKaoVXBw2348AmLkjYZ8ZQanSJK18vnoR1BgTFn5",
  "key2": "2FDmoQ2PkyGshKDGp5xRedR7iKmUaUXZHQs5HF3bcfN5hV2cc2z4jL9W8sYiMaoojEFEsSXfxYYhEtF7cqdhvYHj",
  "key3": "5hcJJgh1FRwk7ZHB1bfhMrV3Q2Bod1mJWce8VwZhZQcXWDDo6vJPfWWoJyZUwbWkpNmkE2sXJqK7NttD91dNdCYG",
  "key4": "4YGT8Btkx33jYHHS9WBcPBNZEtLBrDQu2S6Jj8w8xuuKWrTB3Paci1VQGf9FmSsWHird9GspSLbE2c99qvtZHr7Y",
  "key5": "3Fa6mDekjjdW68P9exBi4H5gPYHSoMXWFTzxusXjocozXhWwEk3FV8CJPx2PNYB7G5nLWfStyQNk2XUkyZa7HJb1",
  "key6": "31HfQEi8ZZTDCzkX5mkeaKWQQJsKB1B6hZrCVYNQrTDsrYsdSxqXnrntKrniiCbds6ECerJQkPDAeX91EUZoSSaG",
  "key7": "2W9mb5XWarrtxu5VoJkJsSmBmXQDiXBMPMESmmBS5bNhc3VLmYLdrLvtkSVumH5xuTK92Y2ALPjyDvEQCkECHeo4",
  "key8": "Ldq1X2wD8XPkz3ED3YdSD4qekBnNYMwSUJr5pZGsRt3na5wUWxZrAChg7b2M9Gb4Cx9i286aBpGXtkeQnmBmX5t",
  "key9": "2uk6B3L1RdWdUHcnJ3YkNDnfp2Wf9dpGL9g2kNzdhoXYvXT6xs6s9C4QNmLkEgx8hFbRPFbDutw7KBPH4vXkJTrc",
  "key10": "5wFCRbiZr9mnqgUYMmv9oQ9KyCztuZaQZ54mV7XPRPLJ3ccJYMqkvc4vWBJYeEmFuLEgwzX4FqqRT8gxUAs6zVyU",
  "key11": "66XK4TB9uuWaqdiXf4nnmQzB2B2SUN7C2piYTtcwHrPNFhEvqfVp4vdJpi7wcsEABo4zQuTVpaHe5rNMYVanZmt7",
  "key12": "4WdMmc5cZCANpaA5AgxM88uVxz6UWQF397AcuXjg7ApfxvSNdnWBRYwxyHQ2u9zcw6w2t5wyuZ8s37FEpCRQmdf9",
  "key13": "3bCmdoxMafrbCtNFHff1jRQpKMeszXh6d2BotoHngsJbFHM7n7zBpTQhiLg1zbdfgPTmhXcCBNj4rMBrT6TtK2Lx",
  "key14": "5TUVWTpVs729tFQtfCAuhQECdzjdGgEsv7FkcQSByyrFHG1zkkAugb8kvarvEaSbwSy9ivpwMkxcUbhULQNUADqs",
  "key15": "3bfnuCigbH4fUfoDes3UK6aaq7RvHM629XPeg5S8jAp8h2zHwdNgqExZNimVSGF8Wbbppx9oAL3MsXWeK658NLa2",
  "key16": "4AWTRPprP3yasQjQRn2fmoKPGZn2ijRecUNbcdzCkssaLxfvCBvGktGmsgKYLb36VjZTjK8CENAScnETYS5FmGBv",
  "key17": "59GMXtbMecqxkHkCSEGZSCjeKtLMjzu6s5eEjJuNS2pxxveLquBUwkf3mXFvKXXabhtxM8D3qPoqBXXYiBMN7jJf",
  "key18": "5vV3ZrMyuGqSnABUmfJ8qgU9hs5SNMeyrg8BKeHyGBTeiR5Pzwp7Lg2ed5gC1r8nMwUxd1FLTYBwx1YNtGPZGf3k",
  "key19": "44mFvAk29qseRDWTwtXTU7podWLoGYKs29kGZAXzR4REQCYz9Vey2zovpz5tjA5EMZVwCvq5XqtW5xPmJztyQfGK",
  "key20": "3HPDmAW4hZcXLXyRdAZ4eXJ255WHVLgewDMoiyJg6bzGeqNdDwvBUTe1Vg4nkxHHs4RisBDxSkrYEyEwreHfaadz",
  "key21": "ar1Qnr3iKU5vD5Wd3yuLhR13aewNFWDda9UCSy8osRSChxajjnmnR1B1SJdZv7QgASpMbxqLs6iLnih7MhL1BFv",
  "key22": "5o8Nzmy3tHENPUsQkvoCkki5jJLiN9tKjDQWMAoo4sssfczh8hNzr4wGj3R2yAbNieznMZBLf7mFXMCM2LLeKnMV",
  "key23": "5kDECSzcaEd21Coq6gQxCr6D6D73Y32RgtBtstcn7192zW3oVxLZF6UUj7a5Np6XsE5qN8vsibLfqdhDNUBFFgwu",
  "key24": "62d8zEQTFrun3cMH3qVhMrwekoMxWGcwtrkoUzG5bt4KFYocZ2MwBVL3NdJdN1DUnzTenW7c8WbfRWMAXuPTWyAS",
  "key25": "4ALKDBsaouosawZD738zCRLsDB7sRQGP51UXnjfChZ8nMi6xEhiqhBCFCczag99k9Q7exb9ptNNSmUp8xYb2bazD",
  "key26": "3MsLsuGRfX2c7oFrmHTmTeyHhc6s8oX4x1ZvU5oKHN1yvsRpurrVqvxTj65uMnnXSodsM5nSQMatKJt3N7CcxTdB",
  "key27": "5hQfkAz3wnMQmF5kmWTyzutcFv7Ebg3SugJRVJypZUhsXgpby7jkQn3RiTB3Kj1RwgGsYdxmVaGfvo3GrA4mwogY",
  "key28": "49M8KzM9BAVF2RXfnRd9eSBvdBvj8oW8NzSh377MH1bnGu25QrBbTKYXtSFt16fj35qddEFWkXBVhWceGNP48Wr8"
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
