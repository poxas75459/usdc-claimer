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
    "u5TAWBPemCUqruvH8hKZTR1oDFPzEt6SFCWKm7ZEu29CQTg6cZ2SGj81wUrqkrZbb7BDwMA2xVxmtPjLy1zUJma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BG2PaGeaibBQ4YRFRs3yxmGrhbbaC1ehrz5Xn1ig5pTFUoyWyD5mCiEnXSXXaoY9DtHznJrPwv9tn2SeCVEyZpz",
  "key1": "2PXmZcmeUVKusbHZ3QZ6Au2MUiEGV8WxsJrFwhBHXL8rY3eLdeu8E78xkoRQzir9s8GVbjCsn4BDVhXAyAPgttc5",
  "key2": "3i3CPUdZmeq5JmdutMg9WJnUMRv6vtiwdofdThDWZ7JJrPdiiENysrQyaF5XaPS6z4YoNRUvcmWvUMAG9bxgWUFD",
  "key3": "2MQfHNBhqa21LD5EoiTerQ1AjFHgLSVh8LkHr2WTKoy2WthtKGkyPFsgzfpGi6bEZodt2w1W1YZynZKZqNbk81z4",
  "key4": "2HGivfD5orfUqm7BRL8wckWjJfG5Hd2SJACKCU874tki2E573kb7R9byXG46MEPMjm9zYpXsqsoahLEtrtUJFMSw",
  "key5": "bCtFGxwGjtpQTtYHMenQUHwRK1hK1YFhA6fgsFgQTyWtW36SkVuret8W2yzLw8ejJBqtGorMS3R1RZZdVxw1v9Q",
  "key6": "5hPK4XZfNhNb8Zsmjq3br26pKGqsqWLj4Q7KpnT8Aokj6LHK9nxXeyrHPK9HVhKryz9VQ6j52XqE46zMBgAgJiD7",
  "key7": "3Hp8edVPZewhJnCbNRG1y56BaxKNgXB191UaSudiWXx6YDB7h1wRDmipA4WjEfVheowvqD1s8BF7RoW6JpMFG7zG",
  "key8": "2fpMEQYKM19MhLLmVKN2YNVKp38qj2msSLdrgJU6QKd4T3QpA8PEsgAwXofev6kEu1aTBCE4mxfekbAY5TfRXjgX",
  "key9": "56X59h7DsZGBFKuafFEJNtKkhRfT4mDobVZ2p3RC3ni9PdsDyGHNc4azhPtWVMgsTBP3yPHQ6Sp6gQSjgrYDLi1A",
  "key10": "3wd5CnGVDpMd85h9RQ25mpEPZkPYzh4RJJCxJEndJadtLohwjFdop7qBpqnjk9Kgzk9XM6qhx4zEvQcbfyZqGSNA",
  "key11": "RPN3NqfPzubTTAstZs5rFZJ4CY1jtefKnTqtFndxCnGQAe7HqSJLdrBXkneRJph6j42u5sTQrsuGr3W8ddsN75D",
  "key12": "2aEm2EPUXUkBT2eYJRdXLz9M9UfFcwfHQym6948zzCnSMAukEzeg9ZmA5NcQTnVLrFFsWEH6ZA1RYGgsPFBMKPTu",
  "key13": "2eiWrWjWsUsAnzWmrnefjwytgpTTY8CbyyoQoZtxi9NxYaX16J2ijbMiJ9ZECPWp7tLFcFyFNwrES8zxowRoLYt7",
  "key14": "VRzV6iEPnQxbzfm8sK8cKsCJ7K2omS3LndYXtrtV6j2dsKJDzQx5qSbFkMN9ci8h5CYNLmNNTM3byA3DxE6RNhP",
  "key15": "jVExgATiPWDq7nehdwZEizexqQsqK9eq9uFayWoXfdJiWLTJyECjXytVD83BaQFJn1X7DoeAvHjsL2XyQKhekxr",
  "key16": "42ffZFzzrB6ryrgCpEHUjrvcPwUHbZjqq9Goa2LA4NT16XhdpWWjFCFZ2YJQ35aiZYfFxAyGuotMKrNc7xG5jNZg",
  "key17": "Kz58wmVY5Esk18FbG8HUTkgQyuoxxjNo1GdUsLH23J9Sf32UkM4faRLYPgrTZmiFrHiXsmoRHCq7ZDqT37xNDcY",
  "key18": "3dw6NkfjLNCzEH8WNtxsezfS2NXW5FzAwo7MgVtSuXDF7WgqGNPjde89mhSiDKkXw8mSo1521Wvk2jpHaebiuuJ4",
  "key19": "4h14Chp4F7Zqk9MptBQ97kFn4uLRvCPYgoQrrWKkTBu73bLyH4bQfqLeGw538EutMDPQpC47mFpE7Q2woZ8fSWYu",
  "key20": "abhPfGWfukSsn9XGJkUguxWEPXdbuWJ3ZuFMBQigDjYQMT44YEYpJPJNPaoYZK4jrDRVguwHdQnD5fAJWRmSLjT",
  "key21": "5M5ySWFkHM2V3zqfWaRWqeBTrwj7Gi12zn17DVhc2vpL8ByV8B2D37U8Eqe5xn6X62UekhVbfJ4snQ38XKxUhNZk",
  "key22": "2hypiFMbf4yYc1ogL5dSwjuDFqqjnR1ZBcaLioaPy8ZohF1Z3BF371RA2zejtbjFfLBYwRcPZFpvkQsNr1azoqcg",
  "key23": "4zqVQaQzWp5VcKUkadQss6UsYBAuhP1HLQG1uVk4FsnXaFeFttGTyC91bBD8ynFH7FMozvHucHArrcFMrwxJwXZw",
  "key24": "2xwor4fMoe8tZnq6MaFH4qwBt6Y5cniSJhFWdTKxL7J3TZwZgnMGrijecpraEm4WBmqhm79xBhU5doS78gprCvDt",
  "key25": "y4cp7DJCNwZbivEmkX2V7JKTnuBUA37p8cg8BVcsavomMCt9H3mdQCqgx5Eie3JP6sg8jWFCm7GDS22RSJPZzMb",
  "key26": "22kyTGkbRbfTCh36nmK67Rxqjp78FCw1Uu9JAy9i3AwfpPEadAojtf5qqxWqRRnd8bWgqNHFXJoGGStqsWQUXv97",
  "key27": "2RsP4LUDB4FqxdvMTCqvq5sJoLbtZRdRHrZ1p2h4tcfxAnHt7HWx3y5pErU2kioLi1bM2TbLNyt2X44jJVj1RW8M"
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
