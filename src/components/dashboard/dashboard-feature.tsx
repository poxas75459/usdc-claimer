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
    "43r4LmbTd6aGKdKBCxPMdDfMiYAGSeE5DNU2UVG1ceM7QzgmZGnZQXHdh4mCariyG8u8vE2XEnW9Mq2qeEWUFbpc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "414hcUbRHKNTWd5Gq8LCP82m7JzzThfSsaFrHNyZKc4e7ANXD5WhNB29QorGUTiiVBgb9tQE6TuxFRaWoWHJUN6t",
  "key1": "5GkDhyvVPCg33XzEvPzhLs6D4cNZzmWGFUNLtxv2w1pXjxSmh9mtCncFCPbQP4qYeKBhUUvPZpnmczznf35GaC9C",
  "key2": "4us6hsV5iM4WS6EkSy1sw21QzBUtS4aenuQD4tJM1oEQAf9dM9N6CiwFwRFVGtetLe7dtsHu9zq51t3z9zV6UisE",
  "key3": "TapNsvWQzmis4gwdcGH5JZUNX1Mhnnh8fZAY583WiQbr9QMC182hsjT2BACe4mQ1BmB7zhRg8oRbY4KtHGknyTn",
  "key4": "29Mjo6KXVuSnh17EAzZbieMRdr8bL7iZ3JUzDsU8odcQaJQS1MVaL4WKmnoS7QEa4VNFnzV3KAt86egfEejXCyMB",
  "key5": "4LjXpT7iwja4YsStxwsEJuijSGbSCWMYHUncW1zCc3ZM1SZG4sE9pxAC9RCbmtUUJCVgX26p3qLdxiP9DdS5vpbR",
  "key6": "4FVs6jiKy3vhv4R7PurHCGFt5kL8Rt53CynsQCZ8E1bJ7jhYekj8ndXPhg8yZvydFfaQV2x5Z7jsTNVE6JLnJPJK",
  "key7": "3FJwCwTSSeaiggg3ZZUukPJ3a4H7fsn1yNN4uVAAX3kiXbwpdTThmLUChgeHoaXKhFQFSTK6Keyugme9psitM2n6",
  "key8": "4eGar9pA2cnE41oUF4KYP7JEefqUa5vshD1KGR5T7B6eeMUDVSBLZeoCuUYNRoTXrzbL9CVbFfFsEbzBLYzAhPVW",
  "key9": "4Qvuvpnb1XoRuobdpy2nNkdwL8GCqbrC62JZTfv3jAioq5jQtt2XCygJrHYBQoUVk8CxBYCFXCBgPYwJUQK5GRWh",
  "key10": "bETxQpUWVLo7E3yWP71eobHypX4uhCi244vanZspv9UAc6GKD4eUNhgLi8KAtz7aTtc8P6CXQ7kzQ158WFktVhv",
  "key11": "51tF2wJ3GK22CN4btrWyLf341V9AoFgZeibvmR8qPFcziRvLSAHnJNFaeSMAfTvkewD25wVP2NTQoBJnH52YwGRW",
  "key12": "Kn95adNtc3c6vphNnyfDkDQTcxnFFiQmN6gWaGkqhhkeGNYiccYxtPzsUVn9AP4jMVoKLn2vSdmNRxuR4pbQE6E",
  "key13": "xELPp5yeYV4dMYLK3JRtUwuhfeABYocodouf9QzXJ7VULfzAjTqVh59PRoVdQWbru8iKC1bUHBgjZWzzRsXFSff",
  "key14": "2nJMUxGMpTkvF3c5ViKTQCi8Seyx9xRtAaxx3Nfw8zcCwbvWU8m8m8iDbip7qTZeMVyQSSdTxheZDKta6zF6Vesb",
  "key15": "2jwcZY4iWLvtzZqAhWHSVdSTwpRhDVuoxFHYTonkPJb7nqEGsWgtP6BDoYqapuiiMYg7Howy5SBuSUTWnpABhfqa",
  "key16": "5nzcntPXuokZaZUuMcMqtHAQhNpHBXNVh9THTtxyEXn84LSYCjA9136mYT2xqwduTCy4C2eCpGDJQSAgyYov3gSE",
  "key17": "2eveGHuEDboPvxDLffGJLfvE7WPfGToUfEwvpcbx3dtAFoj9yMXBsm7GmSvxUPo4EBDrjFTGDmgGrHvqgdosWUgv",
  "key18": "3cf9oHCQ7FxXW1YgMhNKhdFPhvErbmk2PJbKfVNGcSgsFcCiQ3xL9CBadKukkML2spkoqvTtjFP2opoP1TBv6fG3",
  "key19": "4G4NxBFzKrepBKu1HZKeSMiY8B87wbd7qcayZyjN7rEU7AcYLZWVDWagGhrX1Gz2whLHAsMtrxKH8ZCXSBMBtD9Y",
  "key20": "5EozijrHn1iH2pDjULQfFjkpPqvm4pSHfsv6SQSMjHn1gVSrSEPCfQr6CerZVuRHLrCFw9DAtbCoW5e5Yw2ryizB",
  "key21": "479vY49aE5r6zCZuKMWUfPQg4Sn455xpyYLtBFojaK9aMYc4CLVbCEdPBTSpXxgnKtYyJ9MLfpyiemsYCHvU2RZJ",
  "key22": "3L9AL5qZRcnGpL2ntXRNFtkhKH2ti6UyXvE2Upb2Ahdiy9BYpFe9sxFqqPnFw6Jbyt8E5iyoeGvR2S1AjJyQ1HKt",
  "key23": "3zS2bq7sKaUEsPc8yGgvMCimr7QRh3vaXrwdao8egjfKZrJbQtwg3mR1Fs44QQXdyV31N31YNiKUdDexvo99DRSN",
  "key24": "2yMSxiGZ8AKE62X2MYPe4oVH5xPh4k3e4zGAajyhXgM4ZkqAfZav28ZdMSoYtF5JFyuKAY7eCrusbyynJpDfUXdS",
  "key25": "3Wq2RcrzmDK311CE5QZvDzPw4D6ukaGuAKvev3ygAzCwA4sycfXiUg9cvn3XEGfsrtJM8DoSKtP372xctYBHkMMo",
  "key26": "nfpMWwhJv9QsXHvNDyPASrv1qCV8pFjcNamSR1MJsgCNkjQH3Mw7LZjGFP4JDLcE7nhzjsPxwZGFAXirrN9xVTR",
  "key27": "65FSaiVkHpGEjm9ePKhY4Ly1a2vq85W1cJPUXQzsrLERrqwJJT9nqSycNZkfnGKHm6vsLZ5RjP3quLhswWyq6qc3"
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
