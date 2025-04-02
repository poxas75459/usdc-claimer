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
    "3FTcnFiJdjHG2CPBAB4pfU9WngRbsmjbchx1PEpeCC5WAztXsSPjfFBgRrtz6Wjw8D3Qg3qWGipGdMEgtA5ZtQdp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2waUehxTd7rc75C6VHn7T7NnqkbNWw7P6uwktmjz5RaqXVLrdRjHXsvHb63eB1n6EM6veBTTV5MssdxRCqhxqjiX",
  "key1": "3zqPiLEZJQE22Hj1M7od85BCRCBsivyF2XhJGgsPjKYD23XeaLPHTk77XpBdzbD6cTNyhodVsyuKcXnKmDwokCKY",
  "key2": "47B9YMhfbZnEzucFgyQZn9snhzv1Bn3uBAVCCruMEwhSot1bEkTvxhAsfzfSXKgQ7bKBPisP2jskUXYW73rFj4vy",
  "key3": "WkMx4VFjgzxw4JHcjza8WTkmx62aVV7sX5zPP74ggF2eEbx5qYxrPxsFVKoPqKs2YewgQ3Hqhpf8xoR64Kdmjh8",
  "key4": "5We5naP39z8RvfYCmjGAyA2gxbpu6SV2n69wQxwWLuWKpupSMzx3LtPGDzJWBNVALMfJqHJ3FPs9P947qeHmtuwF",
  "key5": "Tin4qgrZ4LehCrK8k6AKGNjJbRiXoYDSmhmPQ7U9uyTXe1LF3qKLo7Yzu4H9cJhfwHAWyFZR1bbByUzfHMQPNya",
  "key6": "4kjTas5F98pN3eS8BpAQbspt8gqfgMc1KwEWLAMTRHESeaXfFfpkKp4HR1ms5y2TRwK84B1fNfjMfoPr1HKUwh8p",
  "key7": "2DtJXQLujRJbqPNpsMsM6EyEJiYvc4juYQA88zPj17ApRLAezgUNn1rYShiFwp92sjpmvgS3WWAWkQEwmwaYJunc",
  "key8": "2B6PT3KTARkkYo8kcL7SUimtS8zpkMNyzrNz5shu5MpM1YjtM1whyWH7BNx8thJgNBXWf1xmLU4fY9dimiU4vtdH",
  "key9": "Qey4tE3iSp9yascpZJrwNs4d9nVUfVTZ4d9zUMiXjpwKmC4R77vdd4DDAE9FZ6xKuugWLHLNcJnb9ierYynR1Vv",
  "key10": "3C98QKX2KJmN7U67C1xERkBnj9EbDrVdgdhbqXmsxXKAgmKCRHEBUWPAkPCoyowtcNZKESS2FkzKGjNGsumTeGcA",
  "key11": "eULBNR8SUpQnPMf18M6CaHCG8haXxfhtZySe2Bc43aXjsdd8wo4vt5pAwUpDfzEeWk9bfgM2uE3cqHmqtjUWzp7",
  "key12": "4YsEyqno48EUWrwU38QBXUE6eJwZ8n3i6XiEzx4WAKsY49r84nqeuYqBTRME8jBKwPnd3TBbMUzPWCbe1WUkSWr9",
  "key13": "34dpxnMuWhHMLa75AtCrCbtFGPF6ivwSrcQPkY7dLme8a9bp4LRR8gd6Apm7NcoRmq4JPeNqZzx6fU5YnUuFPQ9c",
  "key14": "3CgUke2bDrTARWZN6eKfs8UQQsL59cXsGPSmmMG77dX64Suw4Dsi2ekksVG28VvHrDsXvjkN8tbE2t7mWbzfnNcR",
  "key15": "359rRv8T7R6o5VU68p5CbbLiASkhiKrDzdcr5u5XcbfXbVj8hK1Sa97m65gZuGFwdi5cYAzcJ16Lv6x6nrqXrixu",
  "key16": "31B4vxdaAbYDcuGci9Fzcpx4AYnieNQE5NqhZW126V56gdNkn51WzYx4aSP8B9DfSY5rRsezmyYQPPPQkUYVe1DG",
  "key17": "45ZtkiYm2jUAcKqoSPuX75oxxkgva8zUq2jY74bgDenuJUWPAmzUsm1fsqRS1tXgzVbq1swCCYy79Hz2kXPwQTHu",
  "key18": "3HrpG9pQmjqB9iVWAhbGsnjjBYJBBcEF1arJf9HVRD9UWTcmufbf7RcgkJqUhQXXvEkYKQsiEe6Yo9tzcFN8asic",
  "key19": "3XA57RJ52vbcQW3rugVzDvUuFhWcAP6cvxJmNcWSfgygv89KCzV85GuYk9TCE3ttoUJWU3UCkgK1ShtzFmTjYvFy",
  "key20": "5nrEznKhpPX18KPocAfuUchB4LYPX5Ce8fvRpGPmPezWKmuhRtGjpSzi3NCyEWPkb6rwydna8VKsfVSdxqpuK7Vj",
  "key21": "3KYzvZGpyZvdxYg7FTkNM72pQD9gyZEpR2KTHs89WwawBV7Tf9txDXAyC7LvyqdTi6yhrd3S5qWQALyAUiYxLUng",
  "key22": "3xALoFSh2mh7dkrj9z2eC81kUrE5uMb5foKJVf8iAReWYttRMtvC1cvCmcm2sr3KwxGdjVV84dG2baL5WNrF5Zp8",
  "key23": "dYbkvZvakhdP9yw5HWQP9uXGE84cPh97JEyxHGUgaV5kSmMTqP4Vq5Dxv8sGpLMoxC6FASvg6cDHvAs24wry1Rg",
  "key24": "3gZUBC9ZwugpsrJACMSM2dLptMCkb98vLXDCRyibmo8dgN2vwUHm4PQtoAP18syafL3QzDaWVE9veVJoqjrpCE4j"
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
