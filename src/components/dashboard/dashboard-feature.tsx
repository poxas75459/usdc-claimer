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
    "3gQDfdGDhadWJQnxc9epu2zbhJQsxX7y99eW69shpYVmi1EKBs2FpJ7tbtG9UVAYRdELQAFMTen3Pucynu7pnubN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7AMoXX97segWBv2jQA8WDBt9RMA8iKncJsM4ZtBeJs6RY3pYXr5ZVPFHbYkzwo3xWjzcrDYjsyFNS2KfThUqJ75",
  "key1": "5uw2RaejUqkxLEzcgQdCFm9Y7vQ5LwaEagpG6ay3BT8MnJd6JTjffVEBRDoZrrZHN3pFZjKzgwcgQygX7bdrhonF",
  "key2": "4SADaZUtEwLnAmdza3hnGALRF19U1kxxnEmFGC3StWDTwRGCkgNP2Cn6Tncw8r532CqY6JhG7tsD8e8StcYyPCsZ",
  "key3": "5qv7pakMCsqpmymM84Mv5Un29QoddaZ6rYWecL1zfFgbXYt4dk13GXJydmSfoG23oPFJniPCeuNSmnSqZJLGRzPq",
  "key4": "27aNKUYKVVtGJBiPjfez6rcsqreMwyE3yVAp3xLeQdXHn5vfhknnU5vS7DBKdgYQyE5yDEA18K9ztP3Ux4c4dvVQ",
  "key5": "4YihKKHAwWPJXiSJWRaFJMubCBUt8m5px9HmS9cycWbWowqfg7ZEtg9vtC9NHj2sq8Pd9c6c4m8jsapVwSQr5VCL",
  "key6": "5ZW2DjxHNKm9hJQ3Ksg4rNTRSz7Q5tRigmvRuAStMtj22TV5KP7DuuPff674aD6QwdY9vrEN4usXhfWo1CdXroB4",
  "key7": "3PFAoFZKmJ7U5Dv3nkkpWaq1noDebegLhu68GeUL4nw2nZAVvLM2F3pGCYkdQQ6zpL4c2yDSKZDQjazkxNgshSFQ",
  "key8": "2Lz6DU97Ld3Wx7HVf2yRer4BvZPePt97zDjUoVXG6k3Hvccnxw7H1eS2YL5kvP6QGrwHLc63ydh6PbTSNmf8RukP",
  "key9": "4pkLvrKijHD4hCEeUT3WFDBv4UEVWFwgAnp6uuosxgSpQe6LaWPZUtMHJGtxp6xJ8NPwjrCLmabf8BL4bw5YbdT8",
  "key10": "2arXZVHb9NU5tJ7MXUeodqLqMXNPiwNGKpBwthpDcJ3jXrMs1mHidB53evdebGpWjaDdN2Fp7d575MA4yAsmRAAS",
  "key11": "4Q4S8oTNZCGDA5rNwzxwgDDAVJG5UaAxoeirFsp8tyo4tzstwAmfsABBedTmV9jpfzRF5SUtDdBAnsA3FLC3BgN4",
  "key12": "4EMo7pLjTkLrVSQ2yFasiJVziCjrCYq56ov5ZDNUk6mtVkKj38y8zTuX4S4uLwa9rmPSUeYoN6PJfQCaU9HEYocF",
  "key13": "3JdLooXzFJXXjXVby62utXngBGikqzZDgw63f19sRsictU1Nn1Cug7RGRN91qesYA59DKbB9iQG5Zu7bc8GqQvyY",
  "key14": "3AbX7enFZdwkDMnf1UTyA7VV2n7zLtf13yGcJ3aC1EMfeXi5ZxMnyjidsdrhPioBTzVY1zjFJAnrPmXzPxFctmZ2",
  "key15": "hDS4YGDCUWqhk2juT1u2Cvdkc737W7FAcpVEfFBiQhSToLvKkMpmfvUNYePqLtGmkgRR5hqFF32NyJ1monAhopV",
  "key16": "2a2kJTWX9wJreCHN5iUDDX8fSB2dzQQHDNRZNLEPwPYrZgfXr6x6kzL68yeHXJKDGnfHQmFZhC6hoYtzvUUV7VjQ",
  "key17": "4ugCv3CJyCP3eHMSXxwjDZ3Pqdzs9Xasf417kcmdjSL1yU3UPJLdCcMDKB8f9cBprJPJri7Zb1QGzzCUhFkSS8f1",
  "key18": "32BLyfEHQQrtoSTp7Hr1VFfJf7dyCuKMZhERZhBBxNMvBu5Z1ZXhXM6DkPCtGQY7LjmxhTncbVmPQ93sKjDbuwbA",
  "key19": "2pjzqVmV4ctuTN5cbEK1Q1XpV4gSoRVKhCTRiGJGM9qqRR4mXjeQZunZCYj56EjwjJuoDpjMKw9JpiDnfhtzP7aE",
  "key20": "5bgGbprqPJhsDVx1A5GbeioHbuU3P5teYNvXJ2DJx7JjWZtYZWSEzfcnyNi2KXDeYgv2GUQkQCnoxD6zbsRMz4zF",
  "key21": "5E1BHGkTLsMZNW3tLouRcVGP4Q7nNgCqQvJuydexcxEGxtgRnMdmFS9irHRM5EfjNcTyW58T2LfCKBcws4k6inv9",
  "key22": "q4GDzDmihLDgRnviVZ2QLUDfDeBhUZ9eBDchKS3Lmcz7tAGZNbDWPSTZwrdQ8yjJsR5ohfgNvjSPeq5GgRsspYG",
  "key23": "63dgSm1bQkyRE2DfrbSxsWjr3Wrh4oigxmuYQ2yAbqddxNcwe7ycg91cSsdSMfaUysgDVbAiEF1w4bnEAspurZ3J",
  "key24": "aF14D5eNJa7PMSjsqJuarXKaiopRo3SYbzvLRhpsnD7Lz7An1frAw9ktENGGwBr7zBQVB6Ds3pcZie1WoyLnouU"
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
