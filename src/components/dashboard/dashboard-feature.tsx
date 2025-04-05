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
    "4zxWZcEsu1iwTFwEvKsK7pN1utNXxtxrve2Ph3Gup9peogmLAZUebttZLUkCUKoGAv14NRZD8GAzt5DfEJsmRSW9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cicBxAbUKLymFdWXzKmfpTygCgsSiLbsGbB191AcQcdMcDebxb3XV61BbPj5PwHTsUMqeNkJQJvyNvrX4ByDTEo",
  "key1": "5SwwKMT3ZSRmgGhtXdC1jtibHY5BdohhaAXPkUpKMB9QQNVKH92c8oayrZvX85RK3JjPHgqsfVPNLkRZTdaidYvP",
  "key2": "5Ec6XM7dAFHXNKmD7Hjfw88n2w4Acs8daEibwzLGcDT5ujwuAmimmFacXXwkbXh2hxcjVUhC8iPXKpVceGotFHHq",
  "key3": "33WkhfHRVAJEL54iY3SLUK1HXNSkxvc6ABGF2RQ5h6YT9j8gm7ApuNRB39kH1V5VxJDmfxnCceuA3i8CzKf9k3qw",
  "key4": "a3EFvLesQE1vqPKayTSmhmHw88h8MXbsmVp8sNsVYz1DnYzURfidPMyHEXRvGPARvWTfpRRSD1yLBdoCkSu1QTx",
  "key5": "2iKJW4341zX6wbSoBwZ6hr1qLpq2nFWxuSFtJHkxuMgUisXg5hzpiZedY6xeHFVRbosa4yPbinwqmA26Nnv3JaMA",
  "key6": "5G1ocW2zweuFCwBkW2HnYoQKikGCqGLpQXZ1E4XMT68LYALHDP44FSoLhmRSvvW8arHw7x3SHMtLT8dXKdAER6yc",
  "key7": "275ew1NkSPRQeFxuCg6C9hG3BV2rMFyt6vCBLS8jCvtykABRUeEG8BhTmcnLBWNqD5Lm796Vs85y5PXKf1iDdeKQ",
  "key8": "3wTVjL2aNnQznAwCysiYxKC5cn529Jh53458dn4qY213C8TFXUXmNCKEJY4o8T1Df6R6nD5iH6PkPsEXBWxhFE4F",
  "key9": "5HBeoZ36DW2Nput7PMAED67hHeEz4xfQKYKhghZigAC1q6MVbf8dnG7EXif2hZb8hb7uRasgp96u7tmLx8okhfsM",
  "key10": "4rKLYEUeFJdVsT9k6aJQLqbpVK9Bu1rLCCiZ9vp1MBdywdU7ffwTUU7FDhbZX9xzZSKq3biqJUczS79WVzGdWG2R",
  "key11": "2dDA6kFjL5X7q816onXCWy9vJMQZzKGisyUjDih38FVtd8YaNgotPtpVA4SmwJNq2MJD94MApNhBjoy49M5nSERD",
  "key12": "2mH7HtimTBQzaJisUroEXxCUHNWqxKtDW6QqAAKCTd1EVNttQ7BbhWqpvBt5QZwKMzA56CoayrGmLDCxCp5c3Wns",
  "key13": "3wBFxsScd9c7nKCe7XhqQswRCXYqMvqscZtq6YgzYb6CfU9fpzpF5D9EZ2qbc1ZY1o9zr9fBcypcuMY7Do7tgQta",
  "key14": "2gRmrW2r2WXcTZgaeQHSQKms7TfJLMBGcbMowv8rsgvnG3QzUGM7fvhGuotqFasG4uyuVAAYG3Cfbi6vtfXn9AEz",
  "key15": "2ixyFkoEHMHZDDmSMHJPDMKhg3mYaAEyhpjSny9HNfRghA1THu3YYmdaZNdYq7A6saxEEkXtjxx7U2WFVr98Rr9b",
  "key16": "FwycDKauF6p31QZCz5DVyVCeJ1M8wMwjf67xF9ditFZ4Enn9nyYFgLEmNofnDB1Ju8Mn8eJvnDkm75iTVxhseuZ",
  "key17": "5uELXq2b1Aw5LA3GtDYLoXcsoKaZ16czeyPRJ2ogQbLY8u2Tv1pNShXbtnNtUV3xhYCFYvUER9eHhbyJCGFWnsEY",
  "key18": "whZRFfrNY4RUaW64gRx2SPSqVEZryAK5KvDZ2AFExyfeEWs7xYN7PCG2D5ffGNu2girhFnJFzpqbpJgifJ8LXmF",
  "key19": "2smSdUjjPRmK3yVbF1JaEEzsvkzDfa61gYfWjbf6W54KRPX9TpCzMCunbAdTzMhpCePWcRpacyo9kLsC4urSFYb8",
  "key20": "2JGifY5VUDPU1wrgniMrYhmEN9PymRv4BsbvRRey56rb3982rTu2NdXp5vPmLxM9jqk91sFTT9426LdHxKgRck9W",
  "key21": "3SRDmw3kiKtYyMQEp9TaDrEn1rdhFKaGH26JZ9SnkdSfMgmKVtw6AAavEGv26ArUgoub9F6YKF4hRC8JsogGD11J",
  "key22": "2dBNHpU2rdLgVLdyhFuusMGcMQEyn433maXU1VT4gssUz5AHk1Aijv7u5qJvjDaNk8coDco2kcf9abHjQWALykm7",
  "key23": "3WD9WYBU5qVe1Lz5o3vQGx5bJkXmfVYC5vPepPgWJeCCeejEbMpTY76NxT93ZNjzFshPBdh4Tho7uCWzb2pLfpC5",
  "key24": "593TL91obU3CNJutmcBc47zB5P1oVcwMgSE4FCaUpUa4HUj646XMNtJmgxXhRXkntGcwvPjJMRUrc9ggxjcpA8e4"
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
