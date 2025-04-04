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
    "dgMFduwkE2Gahrenu9mmbKoVMdhsdX1iD2qi8imF23CAJNVQxkjxi3PJV1d7rrQP8XRQXPzcdkgFuwSYRE6nTRV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dvrMfz37C19G8G4PUZZHS9XpiKqJAPDiXHZ1qJkzTofWA2adw5XWgyybWLcTv1d14PiEcrATf1BRZrq3Uc1ahnY",
  "key1": "3egSvwgYK3vNGQbaYiLvNtxgMeHJuSBuRBH3fTSdBzoREZewEf62Lh5yTR76sALDy59zyxJFptukMXhhDngqy3XW",
  "key2": "3XMQ63J6dfdeSzEL24JohGMu4jCj4o7X2QCMRiMX6PktU9RExQZ9WPotpTXLCnf747vqpARwg9GagDst2FiQ1Rsr",
  "key3": "4NiWkB25JBBvwpVuJr7wYb2gHRAd9RHx8TstDciSfTRFWe6EdxR14uiC1r72RosfjShQC1iDcD6GdDk62MywRrz5",
  "key4": "2qJjycuEVZkW6LwuBwUEzvPSBbT8n8pVXenYgxrNwPFmzz4EDnHjiAk1kjfrqbgQwpNV8BgMCsZ5trauFsipjzwh",
  "key5": "4ffU835ps8BiXwiwUoX1tDVAkoMv9vSxbzWuhmiymCtn1LGr9Yqvgi7fDiJFpGV1ErjorZHE3fHvdBnxBRfPs6V9",
  "key6": "MVRMPbo1fMtGgTj6GfMWL8hk2SscNCkwW1xFtUemPVtHvf8ukwwrvqQHjKJDiLarQfGexicbek7ZpwnRcJgMW1k",
  "key7": "4tBeuHCJM1Rx2PeUDQAbHs4wputpshSqzrXUit7ieQFJndwsCLX1nBPFyRcPLo8B2tAyXy5PKFVJ5SWS7MjLGkae",
  "key8": "2TuVDEJcHjU2Wv4eyXnU5ifJ6sjD2oYSfYjrmzQs7E3VZ2jtVTpEewcXhSmAyLEKNfsHGuVAwZPNvTfLVkb2TApi",
  "key9": "2YzywKKkU6crydMZ1cF1QxMY4qJ5qrtx7Ea5LpXrg2padTGYZjNU1r4UKyQ75bpC33LV97TGKt9DPmBzPSY4nuPg",
  "key10": "Q1AWP4NYZ85YCv7ro6yAbteAqnJeUUz1dETFTjactALpFQ8TvoQZd7SawuURsUw5bsLxsX9bqk65SmHwmUE4fKx",
  "key11": "5k3x6r7ZtFXPknxsDn4F27cnGQWMq2Z7cpDbCgeBxqz449WNngyecsWCaid9E9HRzBhAXohs6dEdBGAJhdF9yFxS",
  "key12": "4dZzxSPLfo1SSUj3XfgtTkUsFFQRJXGfzr1TDEs3i8KxPtKP1yJXYD1GYnnq9UouzobKn1kzpAvbErjJb48YQ7RN",
  "key13": "32ZDeoxG46DfX29oxsA4bnR9VAHbuAGm7U3DyRrCQNghzhGGbqcRy6nsXnimTqskmjVNHRPZsTEe6Cv9YspvMe1Y",
  "key14": "5nte3r7XrYFgNRuFyiFR8cNhJ28o1LYqz6zVdo1NWqrpRD2xZ8mAT6YJCYX5ueEey9pLo2twppazg67DqE1U8iyH",
  "key15": "2dUkskduAX6G3nfCQNSTKCvMaj9mUX4v9qRqG836U4aYjk1LTb3QFdboBVx9bdgHBBRGVha1aq8s7VQ4hYFDC54C",
  "key16": "36HNSwRNWr6WTLRWC6L9K5tGMmWsoVnMsRWQ8X8jqnLSbcVCLFVouHBpq5c8aGEAm5xksB9Us72iBV7wknsxqcVr",
  "key17": "uVGw122gZKNjVdnhXoR3ix9W11CvZZLSytD3xWwL46zJS3g2FEYRcAPLgHsHnfMWpgiRpot1CWnznWcrVmGfrNX",
  "key18": "4mory2rzmsVCFEmDCz3DJddaaQvbKetkzutdwxZnuHxbv33xGj9FNh31p1MgQYSro6RY5LmnfjUgt7vSVRkuiAxx",
  "key19": "4KjGNyJsqK4N9XfsjuUr9fXvKYsGFGEt8s3k9KdEEycGSyCckB3V7HoUr1C8QNKtfMG1UrP4xsodD6GkQL6d3Aye",
  "key20": "2RvivJaAqMGR4oq62iESZ4MNSwBnuMgcyq1gDrRShgKK9X2E8D5xqj6qHTADKDyiezDpunyQrG92P8gxk1iTiaLp",
  "key21": "5SzQVfZfTK5FMMwSDTine8Kkhay6uYHwn2RCoG2As2dWP4HYjrzk8sggzVEReWi3js9PgD33DxLTMh31qH36G9bP",
  "key22": "5e2vRw9ADzxCMVRRnxRZa5irvEoQzeAqnD9MXZXBS19KZG8XtoxrqhBzZdXUwkZkzbw4tyxKfAavHC5VWknzcCZE",
  "key23": "FZQm8DY1UHvn6Y6oyieF9T3Hu9kuUxBFXwgXQnjp5fk6TMQuYJ3H1F9RYSfiPwtMNdk6XzmCvZXaDVTRMjHouEP",
  "key24": "3U68iLT1i2b3S95Cb4K6dZvnFVscAHEpfe59MW8bDUHnqebC34r4kTJZvpGqpDHaEYNrW7J1rKhRPiXxYpXDe7MN",
  "key25": "4LVXHDzmuDH34P9R6MCBXKqNRnSEYAvhBUCgNyWUiqN2qyne9k4iqVtn59nh6yVa3YK98pYPfagvKDcHLzdQ3jEN",
  "key26": "cxPtkEu3oFR8TS5RXDX4jBU4ERvLHbuGMCRRrhwGRkKp9q6AsXwtj9qVqvtYrQfqp1LotTgUTmvoDEQGrUD1Tiq",
  "key27": "2QUhc4WMRnVpE3xCLnH6cNsnBv25Heb12YDArT1Tc2mMGem1XBeBJRW8xXjcg5L2H4UpFRfxAWkpZBihvhibfBaw",
  "key28": "5iarLPbtxraq7wBm9kR9QyPNcr5ggBfq3Z9WVJTGvnsp6mkWJxSkMTSDyn2CKn6honNWZC3BvjtqUa7fLJ2mYFLC",
  "key29": "3xHqKiz4BNodwCisei3Ej1LYUZ6uK56MaXxzszC6nmjesgKy3SLzu1xfQRfEccthuVYyqppjcWkNSvrSeu182q5e",
  "key30": "51XeieKWvDbQrgXZLTUTZuSRwZxRLZCi3znHMPXpQjTbNq3Dtd9NnEJmD9eHgMPWheZPUruCaEXFsXv7fJyayuAp",
  "key31": "usoTJw8KCsZcyK2fjzB2WB9i4pfbcEsWEJDrguJV25oaEepu7UJCcWMpxku7341MmWNs8oduYgVoXCpC2BpGrNR",
  "key32": "36RDddVF5pRbWKDZbDhAW84XC8KrVVyAAYwdPN9jCjtE6dXqx6cT7P8jfcc636vKBnx2cigrpriojWJcnbxquMkw"
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
