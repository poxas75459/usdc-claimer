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
    "49k5RyDyHpPNz9Yht5Yx76oDs38KYJSWT94G8pn6DwfwfgdNkQyVW6ABysLSFmLQG3eKGsbdAxPL3FdGxdgpfPgq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MxC248n87ctSz3p2ySwJ5eonEngfre9ZYezH9xCrEKrEknjAZvpJw9mTjLhWGa1E9szPfJvDkXp6XcRyiWxTShx",
  "key1": "4C3tFNe16oH53M1xgFgtKHNrSfWuYveP7djesCUGcvikdvEmN8zHMbAQZbXutHz91EpjotKV48DjWU5Ri9tfamub",
  "key2": "3pKW6b44ME3uthkJHDaB9UCRPPRNgexibpa1rChZnNdLVhbNJGFZRagfyLc7bNewoYecXV5mRehNXBYmFJa3WH9M",
  "key3": "2nThiLZ24bGkNtqmbPXVrA2xERC3VWobZCAWBZAhCZoCNJhZSLVpZss2ix41iE1AJqjSCv6uqSsLBtb4yQQops6c",
  "key4": "1ery9kxBTcWYJCtUPxxFtwN7rsAPuHtRtFvoywHr7JL8ygy8ZzZYNUNGmL3BcyS5JbPYuGvvBvCQxA5jvjjp9vm",
  "key5": "2iedNApb9hcnTetTv73z8YfPMjMr4WrNXCVB5Dsu9a7kPMhq7AooTyNddUe8htBHPNLrka6wSXWMye8HjavET9ft",
  "key6": "4iCNVdppur5MpuPaSqKm9PoGM9UfRLX7rfyXCxdnKBhTyEFCVo2BoSVhr5hevVftFGhqRmow75ghPFCqbeAbppv5",
  "key7": "5j8XafHmoLitV9BUrogqrwoCnfxf1GhonDuiTm6N2rnsFgm7qUJGZJWeMakGtbJTNTRvYhkUSBKXZ8MxrwLqBWr",
  "key8": "NMSDbkrgGc7j3W92kAvzQNpxfFhoBMub3zhgbDc67MWy1YX7fLK4a4q3eKHXpDF9XWt4rQypyzYm98MVoMF74k5",
  "key9": "3YTAh3VFkMe5sRKwwyfEY4WML2ujej5GVYERFqsq4vN45HuyxMyikA9bS2LqmyycmpDeJ7x16SFSdf2QVtiar2JE",
  "key10": "52WdSg2ym82tUVGo69UQJivs5mw5qBk5BuYxLQoEktFLseXP1WR1seb7pU4ej6Pb5yrZTgk52VYB3vg3svAcKRjY",
  "key11": "5FWzu9i448nY5xFt8fMMzCFyMVcCYHSjaKFA9fyGQ3BRv7hdV8E7EqR25jFUn4LtSK1jRh2QpxjetsSskk5v56ze",
  "key12": "5joCcLi8jPFFGZ4maMrmGbkDvx4fhiJWFsXJYRM9gaPyGzAUiZ1MNewDEEXA2VQpheCXoB8EeiFPaapEaszrNfLe",
  "key13": "36xE8RRXysMGb6fdfRGxgaTUVoiqjswBLW9ed4qLQtZmitR2UbTKVnKTJNotyuGQicHQsGFguqWvRvQjb1hGdo6k",
  "key14": "5e7qCmvmSMBLHNX7V2yd1AFTwYVthdyGvTm4Kv4nZ4yjKfnbRV2FsUzS9Lz9M6WAoTfxVFsN5YSYWD8CFXq6baeE",
  "key15": "2e1p41p4e7VT8i4MmUdZKETaLgL9CvgKg5Gm52ABCvAGrPdvhNRSbmL46S3HGpwLvWntu49ZPB1yDBpXmhcsKG6s",
  "key16": "4htispvJDAWJUKNiQ6TdTs5bP8G24RZJ13PZUjC4ZS2AsiVSTREdsWQPQB9dVbQZYegRrBJHNPoV4RCsEjZWwdyH",
  "key17": "4iRDZ7kkQjv6KwkSAuvreF2hr7YMduyHqq1fqy3BNHiekZhnUivDPFV2U3KNCYnrQwC9eYev9s7bzpzNtAio6Zws",
  "key18": "5jTQP6c44Ts9zmDZ6gnijgLuM55sw3b8UauTGPdxnTPYWiieXdXz5S8wtjkiCnA6Wzwkc8NuHfsea4eWbjr61fKP",
  "key19": "4cSg6drip24f27ZrJaw48FFcof98KbUksJKuZokZQwq5AsVUVP7iDU5UsyBG7H2ji73EFRfDzrPUuXQ6skdhJnJ1",
  "key20": "3CgDZXBftysSWWit5g3611AznS69weVRkAcU9yzUdukYrswnkJpQpMC6atgD8mFaeJ53QUZFgQf5CfKpGWAQ8BEg",
  "key21": "bVycy73WQ1QGrVCJN6CHY4FwVeBf1bmA1BS7PmygRQjyuGpMz4cmdhGvBZqDqNJkrJHxuNTiiJcf8kJpXMH85oE",
  "key22": "2aGb3yUFCdvTm1CgwE5CgHd5TNE7dTGNRj9dMxvH1ajVr1guS8bqowgmtzVQangLfuL5ZxhsxnLMk5JV2jaTES8B",
  "key23": "3VRmvS57vCRPMEYW9U4RDKavWepct9LDBzZQZjoaanBRynu516MM1RPtN57DJ9gzsNjx3nweMy4XFUWTXXRfyj1S",
  "key24": "cBAE8dWZ96riKjeRbUye6kfQmjanZ6DFq6W5TT6MFtCnNpzQ2BJGAi52CLH7pzZ61yiei4ed11JHjZPgQxTUk9w",
  "key25": "8J14GuTk29DWss18cgEgwkUtkkup8CnkP1bnuHkYU3UNy35sKf38xKzFvDXN2bFDDQYn3PXCeuvsBLWfMVvq7co",
  "key26": "26fZoq4adj646gSAFCEnodp2RbbLo9KW997hk5nRYrEWoDp8WpBuMNqWr4rkhPjdEaCdfnpz2LGnYWQhioyFzA4N",
  "key27": "2CpRSU6twNXsradjVGorFRQkLiH4KeCDHjEwLEaivrG8vMCnhJxcLnndoH6mTtocAa7DKSkoGUUpQpGZJnYMeF72",
  "key28": "botVEAnzSkeukxrjcFH598y6vchjQPUBE4P5arWMtE7viVSgrF1ZYZzCzWHG47DQJpCLRd9RaGojEGemN9AfN7X",
  "key29": "3Y5C3dmk3PWaw62wvvktASmCmHLBcPauvxT1NeZPQiS4mbg3dyXEsQL7S8AsGYYxHruvC3f9jHkWWxSpaowQr3cZ",
  "key30": "KR5Ec7T24NJAMunbTm3MoAbqhTHkmweUe8L97xiPRBAwUA9L7xqTnMv3xdNwALNAnVwaFJiRiFALPk5pKPSGnJ7"
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
