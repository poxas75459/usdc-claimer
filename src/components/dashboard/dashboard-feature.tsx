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
    "3hkHJVnWqx2xanG9DGt8gVrf353a4FSu2pqe2WTWKhwK1CLm476TombbvjtwAyXNQTUnqkWh9dGyySmsZ69Ke5cy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ALzQq8VcE2vB51qcVyCrEAKbpvEaNM59wPWniVotqoijRRBabjPfvNtF4vRj8eCtK2hTUTTUXes3N7reGu2gb61",
  "key1": "3e7NZeVJb3RAjusoWDh3XF6S7dkk6axfrYLvEj19FwP1KoCCVH8AGzbF58Axp3wRzNxjm9akAcsvMsxeMu4FvURG",
  "key2": "2QBWcPEWMnukmVr42MXTDJhGTkKyhb4ac5CgAYSDu9KfiqVB9usCjwucFaCXF3YgmGrhwCwrJ29pEsppgvrh3P6v",
  "key3": "QdQBmH69kng3kv94vHqeNADvatBAwbExzajMvrKa6AHrxNTaA8ffoPf8KeqHLwjAjPMQXb5SVg2d62NLSDNxJCk",
  "key4": "2yVuJrQepTkRZDqcDxSX2XGgwoBhZL1TbW4sKnWcGbDfnDf7bQ6A3RPzeyjiyoV6dnBuNd1KkYZy2v6ivjLVw98L",
  "key5": "2XDBoVMY2R1LZ6Tyorx35q3r7fkEbCM3FAmKr9bz21ofzUJG2hwZm83F2GJyxFqd8U9HVbVXPu91yM4ajpuHrhkw",
  "key6": "4X1sxXEkqLL9P7EuYZh8nqYUxgu5XiLY4ZW4L4EYER9j71tyFpWU3hMU9ZxeRs2yycZN2zFPDc1Kre2mB9wekUGv",
  "key7": "4RTTVYdzjMtYhqNrPevB71jDHhcnN6abp1yZZzQLx63FoxJujaqbaG5iyLouRhHUEYcr92W6hfAJjk3EHVBLvYi1",
  "key8": "2QUpvikWt13mggskaSHE5imgH7s4WuxdccAVBvT6oUKNLDM8X5VJTWNKj3fDY7qWgvT6gAZPHacUxtaS1syRHHbc",
  "key9": "3Az59GfX7ULotaByuSK9sdDpVR5EjdcsL2Jmr7HvvgEFAxAxndpaEvmL26W4zN7y9TAbScogsdZhAYataCtcq8Yj",
  "key10": "3MBuPMAL5HUj8F1JA5EWrSD4FPJa4uz6MjqvY3U1q7mnE4RmkCMxVyHXn2hFxDErDrq4Veu9RP7VpTUhnAeLLAGu",
  "key11": "3SbhWvAAk8MrZLCPKGhc1h9yk5FWGd4vFQYpFf6LjoiAquj6nGA1U2tj27e7pqwop4nVvbPJxG6URgisXEVHwSqH",
  "key12": "4mVXXrYg9SmMEKqk97BFCiu2hYJFxQzoCP8qvZduKVxfq68hiS6MzwSoFRnJhPA9XhU6YZujLWs2ixd9RTHchkRt",
  "key13": "2SKHoFBPgKufqPNWmdWBbmT5QHax2FAqQGVu75o4M52C8zWd3rEAaGvq7583zXGvy6ezd8nWYaScapLkCNxwM4un",
  "key14": "33P2DHvi7wNabE2AtTgMb6kjKGbogJxSwVCFvtvH2KdiQZ5sd3q3KDweWYG8TafnDJx8jXpesZ7VAWJ7BM26Q1Z8",
  "key15": "5wvCJFxGQstUb4hNVu5b19eQp1Lmn6KziF9NmESdWWTDmfXCL4aSTUQQzseApj4ToWrnktvMhenCTEfZzeTvtXoh",
  "key16": "2AcgUZP1deXxGiGcnquowdpnb6cimJehmxdL9EHzgMSYjtmUTvHqfpmVBHEM9xDtE5g7edkmu2nJr5DLWUZCe6C2",
  "key17": "5DudA5siXBc4p7TK1rXn923tXxz5rZdt4ufVwbW48pN5GnCCBSXxroSEV6CSvU5e7GAH4VtPXgLSbSkFnaJZk1aa",
  "key18": "51vwYsVvRgUijmkDBuCKNiJyMokPNeJ3qps5p165tVcbE6pDfZNRnX25ygWM2WiZ74XseZ3ML8idaNhzoxJfioxJ",
  "key19": "5J4ur9EZDUv4NwV6szQzTVCFdcCJkmF7RKputb29KctVbx1NfBgqtpKDbEca7odVPa7X9JHN9Fwn8z2DtdyvRFSL",
  "key20": "45m1TmK4UZ1BbFE737jCqcDJzQi7pbiPwWkp4sDH8fdKRYcTdo2Uo768YsGDPnLMMjQjPKs42JtdM21wnMHFPXj4",
  "key21": "nY3WxSwnqpS68KdFCzKGrFmkiKU2BDYPxSDS3RTaerhuUQMi9VrpLLmLBSwsLPepcn6hMT8g9xAu54qvnAy43en",
  "key22": "3gvpayH5urueRFnJ6uwN5aWkyPGTH1mTdCcQe3cszHfxGYDBwcGEhA8EZTXeoGtxSbu83FGqjJ1PUiu6mfXYRJ8E",
  "key23": "TZpTcpr1nmr6oG8DhpstSVWmyyHRfJwnpKGRVcP5rqeLrcXTswVNm2ekmRUHsER5KW2EuQwpzuESdZVymHH2HZf",
  "key24": "3TRPyPgvTHr9ULrMdjKAHurih12VKrg35RfnZvdre2eXmvgksphcvKPDsAt2xbi1SLnRp4f81aapDC8YpRND6oVr",
  "key25": "4MPwbj2L1cBUfbtWHDQDELMsf6zxmrJxBkfo4zVCQNNW7Wz474VEnrTkShUgxfLuCNWz3nXc333JgwJhX98871d3",
  "key26": "3Tfn7MDKVvWZRVtnmJnfc8M3KsnwxsVXSMBX1wxaKDvyfpvuMzCng2DD8c6JKExd2ouUvqypCPqQpSnCrK4o5BS1",
  "key27": "5fqQPKmmQCz5zi5Nj9MwWu9ypC5sFhRJvErwSX7rZHSsUGG8mKpomjpX6AkFiup9P6SvnEmFXrA74zr1Y3MVNU82"
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
