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
    "YAUXXcsoEnr627k1ewvzUnUK43EbUW2YFkLUTe4eVtKBxkz2Ra5C48fx5FXUwebHSunxyGpuLsF9F8fBdVckski"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uZrN7jzJFZr7PYm9f1ZHJsEz7cvGRZQXXy8BJcGncuTBWnhxSZQLatQXESfXKb9RF7siQP9vxLo1hzHapjPzda7",
  "key1": "GDPT7QxZa2LCp4vaJNppLkKWQmcMcAbUmNaWiy45KJ2EMbJ9vV6JSe44kh7e3orwi6HU3mRUnF3RBBoxHoTjRAL",
  "key2": "CvUMTaCATSgv1oWVGNqWNM6KuV4YrgSCydmyBhTx5YXbptiuMuRKVvnoVYNV2yzDmEe9gtbc63tFX6ns79jnCJx",
  "key3": "S4jYgpC7JVkM7XTMYLQFxHdTyQ4pN7EhzDExaUmr5ttF7AgFHQuCreLdCSnjfkN35mKsUYFtgBSZNwnSgAZdEYm",
  "key4": "2eeTowaPMkEkj3NppFDbH4FeAahH3nNGSRd5gMYRkyq5ducQRLfzuvoR7bqocupgBVq1gWNffcpadZfjdCxrtDyS",
  "key5": "4CC9dd5Poy53SxXyKRCWEkCpStFf4Wwvkh2dui874hNUCENnvhN8HzBSyQCjS66HwS7FkB5saZahc2DvC1dbKm8p",
  "key6": "2EMrnBmBX6ZuBu11FXEAr96brXRGvpyLC3e6t8LW4DhdzG1fX5mk3CaSVpALdkw2r7gBQXGpvJV4MXJvT4yWDSzC",
  "key7": "5ffJGE3qesojhWJGa1rChAQs47CsZ3FRGba2fAY25feReo7LbGWW2vM3BW195jJ9LKwk3KMiUzBitL1TMGWmA39r",
  "key8": "VDtL4XCMceEsHBT6AnDPq7QvFBUFQbcMXxRkaCxHPeaBcRg1iefzHz8qht4XD7RGJQJYn9mW1dNSrAwT6m3w4V3",
  "key9": "59bGq1Q33hbjtCSXkYM9JFSqtPcBNhGydG9DawjEnwdhGyEfsLzLqvx1j1jvknMd6SPLveabHN7D5sUnT1YBXpef",
  "key10": "zo7nsV16nPLcet6834BtN5c6gryZSkJqyVQ2feR224Wm4AdxeFVQheYPUnRNegdiswLVaCaFzd98qmANBM6wi6m",
  "key11": "ctCG8tEF2QJivKHcCmH3wdoSGL5yMfj8zdxkXNLJuKd57Y1cyabAVD1UV5SPzjZYP2Piv4adByMeCL24C77MAxv",
  "key12": "4qFdd8LnfaDjnGqfT3cF1jSerHidcyvkWTn7V8a1KFgfxNKCkDVXdiGQB5WD5J7K8y6zSpRM2ERz2XSHVyMzrbcf",
  "key13": "5eoj5MBWh3YQSqHXQXXVHhf9tTwX4wuYRCZep2SX63pZazToEsv55dYkPN4eHepmchAFrayTTisNkfaFMfZHRPhH",
  "key14": "Z9wvRySTtdazthnCyWshLonGw9eDtCCHXbdfJcLQYN75EocEb8TzPpXjziVjP7hdBNN2JfgV33daWEodBe4TxP9",
  "key15": "5ok1iAS3TxFpEioU7SUPY5YajkS3cAC8k73fJzF7nPZfqJTiATvxy7aoKn1SqRqHovpH7ravkjxgDyumANNpChJq",
  "key16": "CQoypESDPhjXF2Mv6zjST4RUxdrcQdtW6Fnw9aaJQdikd9PYP6r5emb2SZmyT5USLyRYdnkN1ut69RPcNW7Tn9v",
  "key17": "4mY5gJTkPYqeF6GYDBcQ9k1U1YHBjRrmgTMuv5rSahYGpGq88qRSbke3YVWgrM5MZFPWCbdFCedCBMfSQ6sDGmeH",
  "key18": "5BiQEECiEPfeHiFQH2Lyek1rdBpksWTPZfvHQPeiQTGM5HGz9kdLLGkCivoocCMd1fkioej2ozD7S2HtfCGLbikv",
  "key19": "4Y7C9cYP7WFEYjgdZktuSidrxmLiKexd84QSrMcLCduSZWn1fjVRktX6vFua21P5MGcgQyEcv86p6MCkJX9V3Crx",
  "key20": "4B1H2is28mibvBggW7uZLyuYgAfW4Ck66pEo49EMrcpRkHVS7q2n1eabwEcxzjbmVNFXBBMppudqZfkoTe7fwvGN",
  "key21": "3q1rkX2Uea5RQVFaSQUQef9RrupM2iLM4Suj7ztxR6dZzyqkQWHqY6ncxk4EsZBERru1MV7NP1BthF7NL57U1LdB",
  "key22": "4p65KACbpzUwhb3PsELfS7CzNwAVDuVf7s24r2j81EQbXvupoHvdFKYDssFSZbWfosBy6dy9poET42s5f9gVvhFG",
  "key23": "4a2FGmj4wyCPBVrDmamYGd3b3JRNmYmzPmwpjEt9zQ146AHfUCH6EaWxdrKhup5ZvE7P4GEe84kEwZESqm6FKebx",
  "key24": "5ksrFyFK1dVNNnUMx9oKbwvmjH3ZFDz2YgnhirDfajqxqzkuqEar6725r4rhNruXxEBpMFTjEVfhAtAv4BUYJ9x6",
  "key25": "5DoVotcoBUY4bFgQ2TbQhppfeXWTWMGE25svfVJLBPFp13oL7UYo6BpeXQfJan4pn6MWGQ9ANVV6N93U8jS5smVF",
  "key26": "2krrs9UGt9kkBLQGayXzW412BBr4rSLyCi2coh9hJj2dkya6kGf4aYgwobn7aXCUrbN3LC2hSGBr7u8uNj8orPNg",
  "key27": "5PNVHrezDRDMGBuPMrvtiCeSviFZCLUfGG3HEwnK6G2khM4jMHLdhZjmPr8F6GcA3koHdGoBEoeFivPtGfFmMHwc",
  "key28": "5ZrfT3MAzaQzaeWyK3MLo2Vr8KNqVUJsa65wamUTp2Tnrp2FmW89FqqXmQLcGkokxhzx1XAHxNswqCanptsAzebj",
  "key29": "56sGdqvwJx9sFXa3xDV4HSLG4MQaGTN8km8jjDJtQBdkBBk321cSbSw7ciEx8iQJNfbqym9i1RQUMwreqr7RZndd",
  "key30": "2H4sdUYwmypMpXrjJBCoBzzZ9xiimQRg8GRvWGW5MmVEV7aaPjyetfCMh4bXDQByFkZhncNDECbkLbuwh2Z5KBfH",
  "key31": "2X1QmBqdHXYbAbnLv4CrKRcpmUHDo5NA9JMjxd2DbGSrFvY22hB8TzH8X4p8UVKCX8D9ciSJnA6MDqrLe1HPGpc9",
  "key32": "2Y5iDAh8WJ3zzAhmG3oMand6ftBQoj6SKW4oYioX6Vgu5ftYatSNEoNAdsM1DxYmk2rLSUGrKSPwn5xHdbmuVzx5",
  "key33": "3fsD9U74fkeiLXQ6L2CcMT1R8pBt3ikeN8qt6pP2D4ohPGq8dQJ8APCyoG9on43RVXgUfCPL3n8G3gytzDBnjU8z",
  "key34": "4VxwSNRh1qWEsibK3caYf6HNKYkpMuLD4XTceDK6wu3DuWYcRuXo9X11dSCLnrJ1ANpdXM3WihtA7EBMj6E6s3gy",
  "key35": "2FqM8qV2MABX6Gp8wjSxgkBTqBjjjbEn5FXeLzet6XFcdMvN42nem9Ym6BCKymFmDF8ugocu2sALEEemTdcr5yZH",
  "key36": "3FFbG2hW8bWj9bov4fTZxAXUyKSZKVYKY63nD49fgiKVd8fm4AiKvE93LF8Zy9NV1F9ewgwahRonM2aWobAGLpwX",
  "key37": "guhXbMstHpxErVjRGtiFK1CdXVvo3ASZrLH1CsfSKg4pM4R6VQ447PoYATvMGGDVDjSMnJgKamGdGmFe4ELsAX5",
  "key38": "3JXASkv3briP4Bv6ah1n7Dv2T3JF96gUM7gV77tp96tphkn45KZqu6gihAiNjtHooeHzQWBscAtgFYztWNTjGEsX"
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
