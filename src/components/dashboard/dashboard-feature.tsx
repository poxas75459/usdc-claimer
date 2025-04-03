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
    "4CEeKtcNudHkBM5rvVPF4bEn8CVBqcqB2u66aDkj7BiPj7VA5ivHUziRvNogjHWw5xQUuKgjG127ukhZ11PQoKXW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35oqEi5DEZoUmtCFJGCdeLYcFTQh1r439fPXEvEsrchQy2wny5eCQetsKNvdJX3REVJv5ZdaDkr5Ag2udgkTwezy",
  "key1": "5oye4sc8xWZ9fosCVQj7jjGsDKdzRLAFkAx585T5xe63NTeRLDMtjKkw9h5ytMnqcdyGWQ96iS7Zpk5vbd1VTkwj",
  "key2": "483MbHRkjcktxj9BsK8qraXv7qs5URKjMfnirq5Ur98Cw7qqbD5TzR18wRVWRrxigiYLHZsF2HxD6yWbqCu1M78C",
  "key3": "4j7xzMGvMb6mrYdGh6Um14d5JLQCYnMF2X2XeZ1b5HMmhi7dLPozxih4mA8G2v6tdrzy1MFWTsJabZh7YzgvF24z",
  "key4": "43Fyg9mPmNiiwLmDXseioRtPhLUd5X7ANpJebLd23oK78a2Dk4nfj5BhngJCRojGHPYuxL2kJm625L3J9G5Spg1U",
  "key5": "LNavLfT5X4bbhNSWSJKTuAcxjYwLH4McTGwzrHWVrVZ7R5ju8xqoiEt8ere1AEhExHNBd1ia7X2C16WBxZXKrwG",
  "key6": "4WkUrZhzZFPgRWY39DYcT5w6jM7tc5CYAUY1tcCKdwsxzjgWNfaAzpW15rG8QorperYGDBMdHcL3ssUE8yJKgQNy",
  "key7": "2UJrc7ca98SG4APLtzmwuDKRksiBUrDGo5EPXYR4c3FGQ1U1jeFhtjNBKgQsgbB5KFPDLJ2isoZVLx5Cz2PC9CaG",
  "key8": "3qrAXL3GosPpS4n4hhYKo1mVBXNBT6eUXcHGifxDRtKoiQ3C7wkiCuaaC2bxFZr9KqvqVuGWp5nunYUqM9Mxh76E",
  "key9": "49BqBTtNR7tQ28huo18J9DExukxDwMugasQvfP65KH6wapxrkYN2kbB7PTyNEdN1fTK5knukqxygiTaqnG7Mkfon",
  "key10": "tB2bUXoyQtqVApnUnhMrnhS5BX6QNYxNGEm5fMxgHgwV3VcuVNvqePhhQwwgjaDnT7WFTs8VY7h2jEubx4Kd8DU",
  "key11": "zfkzpma6Vybbsg9tTyMWpGbq4FTi1koHQYFg6V8GZViUCkrFiTnnaqdY9Lnm8GmsK4gaGfpRaazoMZMuLyLjfnY",
  "key12": "3X2RcSwRZV6A2gyrutco2JTi52oVGhZGDUFq5EWzTQFwrRpNaNT3g4UA3WkUq6SCdLhvMnvtN2SqG8v14CfCRRE4",
  "key13": "RCk8UxP8yLNiDwaT4CD9sJWcfxk45vz76gdqn6hCwUGDpS4d64BpwhdiQuT58mref9MQX8RPTwXjoE7sXYKXvm6",
  "key14": "3Ff4hphfMAWZJ9dge1oynkCwUq4mWGFhjN1sJh5CmXj6PxTitebzki9Spdzus83qhdCzdo7YenD9T8nurgfNH4Xy",
  "key15": "2QD2xZh1zCUwpKopeGRCA7neY2u7esUcwVDULwneHxXD5sC4vNnH6nKFDXCGyJmk12GueXTzrc1SVPzW4aeurK9W",
  "key16": "3LzRU2WmgPLRsY1hbkE7eGXF69Cki8FvSYCGUncYxSKJpkENANbqLvfM4Sze68DgnzUgTn4hL6cphXdmJqcPpxkA",
  "key17": "3hjy46zNo3HCzksv7jf217KQDZpGFYNtcLoR6B7cNkuPFmkjMZg5AfSTykAV2BWFvJ5a1X7odCMsf1DctxvFcGuP",
  "key18": "3Uw46Evq6zRUja6foUWKPXD8qvUf418tAk4WvATLM2NLzZ1ynaahbHtvXRaLAVhucVh7T5Qoop186dJkN9RGUfBV",
  "key19": "5dXMkYncdjGvywRq2UT29LhhD85Ya9FxGJsiNx68Fxx1xt1pq2r7ActAK5mnhVAqMzQ5gJjSGBi88vUtPpnbLc1z",
  "key20": "3d2yLfS4MrhRWaAg3ya12xf4fDzogSWYEWCB6rrhv6uRBHxn5DQ6EhFsrrozmvcirdgT5As7r1YfX6Vunu6siBEE",
  "key21": "5yQfZoFn3oM5gxrhkxRjSecJjNAi14KEMay9KctMMhf5UV3boiWBfHr69ba6daKvRNcbnRwf35ZnpVSEREzXQs4j",
  "key22": "3VcjrjowtN4AfqfgCEs9hdErXjKa5bAWZjc9ZoqPrP67yDWgnyUwhnsLZvieFJ3pxV7JhYPv8vGWo4vfCEqFJxra",
  "key23": "vkxQLe6vWnYYjWV8mNhQMxGMu4xrfLAtXBLk8HRwqkKmmtWwKjnGcPfGWVKThHWJxxS9df99RgcDVLyBedanxQ1",
  "key24": "3GGSma8WStpWWE8WtjiQgGYoY4HNhALSWntE7SQiK65NBX5TNPuTH3N4RXAz4YcLAXCjQxNY4P56mZKEnF5DVuBF",
  "key25": "45wM4DvkXCnAAAbmBdkcLuHuQx9YhrmsDB5TUqJTHEXUxqzeEwb6oQw7eour2QqZYBSc7eaZxvdKDP5QM9aBfs6n",
  "key26": "4DZjFP19WcDKxCuA2owiWMgKZM4smHJpDWSriCzL8CeoaLyvW9qPr3yUMWNxaVcGfvitXugbdSHXNE1uXJffYZbG",
  "key27": "3ysUHnmasJAnL36yqH1Gmz6UmhjeatcTXjnx2QTK9oyB3fb9yb7usC4j7yRNDvkorEmnLEwK7nTNakavjzzMiodc"
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
