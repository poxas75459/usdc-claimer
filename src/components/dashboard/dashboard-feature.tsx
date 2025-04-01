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
    "GLh2qEyURmexVtKs7DMrt1Dniio6BURcx3PAfTRHSudWrsAvH6FCem89ueQ21LomGEefo3q15YrNyCktAiTfygo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dszMYPHCYtJwUtmVwgkwbsMB9ovzVfCWoewPmKVUZdLmGjdNFtF1hdzFjpUBdkCr7JjY3uq19JyJqsSN5XLvYLs",
  "key1": "288ia4UEiSuo298Z3e3ohPYkxa2thQssX7fE6JoQmbuasMmNkG3MTs8sB6xZ1ryLQuEn87vo1owbEbvFuc6mvehB",
  "key2": "5ZJQCYGZVSEjjeSqpYcMaTjFPvjLMnthdtCBbr8GkRQGqHhsgsxDRRMKR5LFnD6gmrprhMTCjnJC7H1FuWoEySvF",
  "key3": "2xnwf8KkhA3m5Tf1fF3pVGXgh5RMLWcSoCzCUqYX4uXiuVhqLMB2b9WVqChS5Zufphs69DePvonT3DLyLnozuPtC",
  "key4": "2ZLpTMWftDVXQLwVG1yDHiZotJHvAa5syobU97wQCUre1x85dTQZAsgBcoiw4LNGarQbdwHLCrWu3d9bhXZveLvz",
  "key5": "4e2hayaVyGXL5zgj9ge7jRwkbGJMWepNzzSnpc3LHk12jhR2cxxLFZgVgB3LeHpA3JmthP1nkaWX4gEhKjXYQqNE",
  "key6": "mMGKhjeF5vWo2pRNs2CQDgw2eRdiDmYs8rdUBkRuh1dE3zsnJkxALpfYzMTvbqkyy1ZdufuYTXPiw73BSVNLUxD",
  "key7": "5bxJ6GvqeMfkjhsbog9XokB1ry2hvBJsGDwgHDkRVyHn5rnWk85MhduRjFEbTrpNLJhZwvR8P5veHTT1amwjhEaw",
  "key8": "5bM2Fp4JdxKukz9gF2o85AGFVk86iR7xg1pFWXaBtniZ229PxggC2bugy2r9WHfz8pYibuZfMbyWL77Ci1EHhY5f",
  "key9": "5sPkWTHWNvvyK4X7EK9KDdRZmRFdAR7saZ9xGFLkpwNEhRXEVD52WX3Lr3z8jnBfDbXaXAN1MqVf9Ftfw1P1GXrU",
  "key10": "cqf5mU5xkfWT3VaVWcTjuptqwbnWPjcjaaii82bpsUYH5FjxPgYZTUvoPiVCd6FycTxEj4wLFwXYdXz9bkUpmSj",
  "key11": "3LN31TexgARkGM32pynzFphwYyyaJayjbPEaixE3W8pdjm4dEBDUUQqBKk9P5s21sbMRsiQaNUrXuGwAqaNRsauY",
  "key12": "5wCR8jY9fZw4DrgeR1eLCKusvbqQ514ogPinB2PCQLeSx1xyjEyVqbU2n6UZc7GzBpBR9Wovdcfe8amSbKocvhK1",
  "key13": "46ThefjK7nyEUGFXkJAPVWaiM5RQVVyt1f57h2epha2UUqkd1GmsXCMi3qt1tE4SgW4v5KQCaXQuYRGm4BhdPFLz",
  "key14": "SxnQnwXbS8Vtvhv5aGNFCyvZ3zr3P4R13p3BBfPEpw1Je35cQKvXMEhjwzihRRGE3rNmMBs7Tu65okU8FWD8bEj",
  "key15": "43KQEGBwWJZmjZDAsLjzUGbYp9rdmTDT6vFveLmLFU2RZ5KTEJ2uLwPhCaaBGmWY9JFxufe4U3wwfBYjwEQMVyVQ",
  "key16": "JzWnpLpVdCftq7QfQZhVQi8YAv2PmSkgnt8UBwNt44A5TQThUK1vBwjE9C4hPZuqBpd2rCXyEyopERsdLgiipKQ",
  "key17": "38g86uKGLXivG4HD7fgVwoZwnPzhNZaHvfKvPctYDiThCeEnPNYVeJiDBs66A5KuKMdxFqAe98pAK5Zva27SKQS6",
  "key18": "3Sc8wzGov9kdyqgPG49exMJEifNbihRE5Y7pYmejvYx6NSMe8xiXSX5xcf2GWqtpk7KZkpatgRNFR3VHdijWwtih",
  "key19": "4geuzPuzaKmFxSUZ26mFBcgS24kw3A1f2SxhryxVqZJq2rauhg2VDUpdhLQ5bDdsTsekkQPfnTskHVXWQy1x2TAV",
  "key20": "4eyEPdL6o4kZUx99sQjp7Pq4xNpZUaJrijzdmfo7hyo633LB5rcJ2SKmnofiMVKV2CX4qVELo7kJSff6r1cYbEmK",
  "key21": "21gJj7D3E3tPspwkG7U35oDmFzDZBvNhafp1P4ybLB4ZfKLmPH9g3dxn8vNspJKDpqoGznyU47nMxAiFBHWaZVg3",
  "key22": "5XzPtvkf7D4NS5UyjmFxDbcGCDvYHGxA2hCETC1CjzwPEmyiMjXjQ9MTEDmbzP3G86f3FWjDdhkuw6Veg3NZfYT5",
  "key23": "55DWCgipqFt2BKvANUD8JZQ6fS6SiyVyv9nDz6ct3sjvogVueziSZrAmVCq6m83GtSzrP7EiinB3ELFWA5ji5uKv",
  "key24": "3rm194sBmggR7TeURWHqFcverQK3nceb5at91aQWKoqmtVPZGY8xe5FJXbsJDe2A5qrHjvkGFPxtiK7JzgeHsVnh",
  "key25": "3GAeJJLAM6taw8sAZ4jq1LEUgCyowv1bziKaMcf4R8ucMV6zCN2KvSE4zGx8vVav19py36SMmoG2EmYQD7rXRvRz",
  "key26": "5hFhJ9aVb9rwxtb9xyg24HZrm7fYrVWfyZqyY9AY739JrwpVtWiUJypzzCTwm9DKY8Sff7Ec21UYTVAoBHf8GhwU",
  "key27": "4QAaPKDJe6tsXRZ5SvN37FSgAZMFopriTjHgEAHH1sy2tM4Ky8KDL8fXs4dxcJQQHbA5TXBPyHQSgw8fR1y3D62m",
  "key28": "4TYbb3opxZieKxNY77dhuRw7qFBrBRPpPiUTLe7Xs4BF8r5B7MaqhF9A2pQnEqUTcZQmcQsw95TrsF8MtsU5XjtR",
  "key29": "4iYQM9FQoEnXgD9MPygpiftP5bkxf9ANCnXiW3MoSWKzx4hC6KxUQaWFdSD36sGEMZ56moxtMsC1aUVQk6HyDVm",
  "key30": "dHzhB44RzqUyahDyfyidrXTjscJ5SHzS56ydeGAMgyDaig7KMhLfCEAcbqg25sEzBSRURKjY1FDFGiR7kQYTwKw",
  "key31": "5duhbBPpVRg3Fu2yNMbH14Zae34JwkZPbfpEfiFp8LSfhnPtC2cbUThC5hLUSVFEmFZ5F75EWb5vbAxsf8GDxF2L"
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
