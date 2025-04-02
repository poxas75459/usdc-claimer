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
    "2gq29c5CBcH78m7mQQVk7g2ScLyAFAoHBX8cTvPA8n9RD9q1Wm1nV4E16b8j9dxp4brHwKGGve5ameapvjbi1dfA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e56N7YoJiRsF6WUHuTroUGkECZt9BSu2JwHRmRMs8mjF6LsTuJ5pJfjKQfQZfHC3UPMFn6L9rvcaqsVkSex9AJk",
  "key1": "2pdz1XTHHodAcKddqeyjPBqhxtVqTrGchpSfpuzEmneqiQd2eFF4kZBrqybRASmKEMexRwnUg2Xj92qp1wALFCnL",
  "key2": "5M1QsrywBNu72xMibDQBVBG4zFGkqxY6uqsBTNYSXKqH7k5sgnVBFRBZCsSuf9x8LGAuLcqCD55cJSWSYnWvABrG",
  "key3": "noKPKEpK7EiZTXwfiTcwXSz37i7RSJ63hxrLAHoc2h4eXX9bVNeDqz6FDUT5qHkMgo2y19M7n8ipmwmeoxQDf3n",
  "key4": "4YDQMadRvjZb5WUNpKrs6vvFQfQgNQRdXcZUJ592akef9oQZ7vvH6b43avmaoWiy3nXUSvbyakq46J9CvvGnprUx",
  "key5": "5u8Zx4y36T4poKWtiJxC6Hwg5C7dsbYER8r1ufspWiwxqJL3HkMzbUAdNzmJXMcWtrsowUAvGNX4HNWzCr9TnvJ4",
  "key6": "5YdMdVMnE713SbUZpMdAHtpdara8Vmkz5sfLPGb2AwR99F3GjyBtb9iNiigDueroBXskxD5ZEe7PnjZHy787tCAZ",
  "key7": "3aWBWvRfSYUD16TTux1TnnfKrRcioVAm8xRLwNKpqhFVezY5hEepwU9s5P9mbkxJzW6qmCdrNFGybuWCLjW3rmmw",
  "key8": "5v2dpPxMjSy4cirrkCYnUkk9pxr2hzZF46USBq6peCjp2uRirUiL2cZVdJUvVMijueMHH2mS6w9B13yXcSNZdAfh",
  "key9": "2EyxHSE64Jo86kB8JDLjoJV2LMWJt6D6ZX6tuFPNpZGMSF1JX2PaLvXE4qujCfLUJGMQLoziMKgYLwL2iz8XyAv",
  "key10": "2kh3NA9g6ZhToHRWgjvVmrfVNRtQosezDsRRTgg9mSSVVRinzBQo6qV23o4oZcmhexNkNEsK9KnQL8ceMiyS77Wx",
  "key11": "5TTysY7KH7wMiG8PXZz3gU2BNbi55s2LnTv1uyKqP3ZDDeJmBrqHURx97EVtUBRZyAHSfFyMhmYbXukZPbYdbZXG",
  "key12": "4wt2p3nwgxJ1dfcDb54a3zVgwWnbazd177xqkm8yRt3zqygjD83eM3hD1LyVwae5rwFk7Vk4eBWtyLm5guDnje36",
  "key13": "2pDYq7qRr4vYD1Br1BaeZjpqnWS6QZSdtXW1j7qe4wuDAPLqNipkLxhgCFf7qve3yJmhzaGPHss1qXqPjCP7ndud",
  "key14": "36iSkUMvNz8tGxqVbNRvQkspyjrEtQR55gZxyLg6SBgviiNTH712kPwkfcRUWHmfsHYv3pbCmLVKipNUH7SRq78f",
  "key15": "2nqtDkJobGQEqcE4mXYowXeHoTxrLyYqXbjtPBVoFYMFioMZfdSGNYo2z5B1TiGouCTCRrWwjUnropWUpnGDrJGN",
  "key16": "2cLTyYe15uDqPho3j7XSRRpVE6j5HKXjRCQRQbxBRs2kqkVjCJBkSnCimRF1ixbY4aJBmh1eJbDFaa9qtPmn94W7",
  "key17": "5pmKHbQNwVKcxfWiNFY7ixfV8dL26cYbCnDeR5zjScYHwzgsRv5fmmX7aSvLyPSaYDWQe85aeKT5a4uYBDpPaAcq",
  "key18": "4Z6anCmMN7wtArsBFM1ayeEVGpUqeqUGv4LseqM6EmZQFdzTGxBhByFU9s3ihDsPmts6ZjFsq5qLPmkxZCaJ24do",
  "key19": "2k4jKXfep3ZvbXyLvTSphjpRqmrRLaabkysJDaEYgtpt9JqF5BZtWrZSdzgRVTtZsANacKAL1xZXk46iAg84aVo1",
  "key20": "2cFyEAV36dqnUVh4ivLMuSgmwZwhcKBdLWA8bPXSy4wsEcRMAKxeA32fsvoFcZ9mKmhPtzeamcqFDAFKZ9oRuxxS",
  "key21": "2FbBbYtiB8sNYAW9huPoDk2fyjQrxM6ZRd4kZRZ9aTepK7NVdVpUcgAaYUvs3oJVVmBb4hv3Ppsm6qBdySiRHjEN",
  "key22": "jh6pYZmCTnr9JUY3CwxFAWucrjYMfaXQEPtCdXFkUN1Yw4oXD5nUXp8vMbzZZSMUidmjG2E5sgC3AgVfjTY4jXy",
  "key23": "3VKsknN5yjdhQReTmDT1X6XbQmJ1LRFCRcwbTadGQ69EtAohH6WhaLRSR2nhypToSaVWTGUmX5gXHJjcgsu1hfJU",
  "key24": "3JpG9xztfroLwBhPwdnS65iLQYusjYBtv7TbAtqAvLv9AY7SWHdSWGP71y7zGV57BDcMtRpY9zufN28VAzvTGy9q",
  "key25": "akn8eRe96ywNUcmCx3Vg7J6dVtyGagoiTdMkJe9PsVGF7HTQctxCUPyY1Kos9EdapX5KtzHNRb9ssGYDbrymngh"
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
