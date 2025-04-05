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
    "4smqo3uBomkMPQHWz8W2LdgSkuj9vuFau35NkLrJ4ZWdAjuATVR4DcySXtR5PiLaLRgEkEPdGXfmCqTNeKBJJpuF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iV7LNNnArUpPtfr5HFmTNGSLBiyRzD1APWP9bCfurh9VHBiqc671DkdCubZRuWriEfnX2tm8hPKwztLM5pPkgrk",
  "key1": "1UCatw5vfEp3D7z7RRzxAscBesy5KcXjk2jescH9U4kbKnyowRNvGQ5K8WZHe5JenJVqwDdRAHZ2GzkKjc2y36g",
  "key2": "4bf3CQSo5oU4sdbVus35YrWZYNRhF7dRX2Mry6wqkUMGUurJtiLXWVTzXGCFsDy3VMAhNJQR9JAUHbGho6dCtnCx",
  "key3": "28Lq2Pn7KeJVKw3HfbVAPcNjDe9PkVhxpRvM9s1YAc2dXDYFXVvLedQWa2wU9qWHenQ4Nev2M8qcMBwiEBNCz8bU",
  "key4": "5YrZnTwga1S9Vx6FjHNAkivQS3xLEXPq759dvEPmZkyB2YHxDa7J77wjDPT9bhQTpUTJFMV2DQtUb6RAMLCk4ADB",
  "key5": "236cCsBJ8TeY8tt1cTRVRrShghK1NdVH2wU49no7FovZqPZFnzX7bqDq5uzYKHkZEHUB7MGPmQSnpj7MSqEp7AGD",
  "key6": "WVRP4c9RHpqpxrSqGAu6bDzLmyS3X6UEtNCWC3fDx1s5hm7vgbTvYx2gSjRyhn7xidetNpQyqeBddHxNrDVgDRS",
  "key7": "24B61tb38WfjWmKddxKJ6Zy7Q39uRjpQtZWHrUx7TnCLPQPLrkSWBfCWzAKJAFzCfhtNZscMJS2cXchQqFT4uS9g",
  "key8": "63KYw7MHaTd3b1JRpYXskCA3Md9iddHgWQvkwZ136Wx1TAbPBH2ZAKesdwAeyKQV5NPwDEVE6JXZ1Wai6MCDh3x",
  "key9": "Atu2TVgrvue8tkhYn9pXzVBXy3y1NHaUSLXi5zEdc2RuCN527y9WbwFW4cYZZ6QCSCX2Xod2FyEG7nb3yWjG9vF",
  "key10": "5KaBc842pQk8NtNa3ohnbiTUpRWciLzhkQSbA8TVqe4FjRf9q9E53zHPc4fyL5PYJ31T1Pzi7nZxLodP9J9sLWtX",
  "key11": "22Lo4QCzrQpgqKtjZDvMcYpyKAiy9dKdphqC2agmMKZsbTB3oyxQQtC2s6Vk7VGYSUm4cHtDVafRVK9ChSP98PxR",
  "key12": "2i7H9MfsZKmY1B3pTzjHQmy8uHzkpC3UW3czj7fKekYLKACAQZVJUxpErfxJegm1rn61FpvhSdrPfxSheKEYNxp2",
  "key13": "2RXAUYUfHSab8c9yt8vcr4iatwv5VeT3i9pPTUMKVqYPRNPPFZ5kwTviaKCvCN4TbBYzmjzHseyVM86zCozSKsgY",
  "key14": "2AoAG3em3Z3D48ZdXKyQRfnbiT7na4JF2HoeAj9ySToCUL2ngXf8iS6s1jidq3hcJWvGPtbCgSWT99hcZLfsfjsN",
  "key15": "3CpoBHjyXy2FVwFgYiBWRZZ4A63UfM2Mt1WS51Q3C5c7fFkugWsYswcNQUrFeMnS9jBrZSPA3WzPN6Pw9ARE6Hyn",
  "key16": "32TQaBQsbqcR8pMQ1qZarUHr58euL4eQYZAhUYoKLFURAbHcB2BJGtpHBsHUnFWTRApmusWEg1sLSz9P4gRTWnm9",
  "key17": "5fPKqVLYKT1V8tQQ3ndTMJKVZR8mriCKoiicjzS4cqXryGGsrbPejFGMfyCyf7Bu8356wx57TnRcAUFvoBppbini",
  "key18": "3YVr5hi13RBy16H6ZgrHzN9coUw3YvVkQzri2wCmcaLn4owAVMAxTMkmMeykjAXroDfzybpPP6E2xNGq5T4khEgM",
  "key19": "jj7QBgZ414e5pC6CtepXBkt5HDTdcFjtJmFxHiNhds8qfiXqFqaGy69Wb1TG2sMU4i516ErVxVqQjv2JVNN2qiQ",
  "key20": "5fw6Asxn1zjoxNehdcu4qChM2NZ7C1TJkoLi41kyFsN4ZNe3PS79zYqgLdEofLGgceoEeHqyoj91JjXQU5SdwMdu",
  "key21": "2gpFRqUiJmTd15CmPhUQpX8ipEsRfrrsKzwGBUDdKqsvDrHPuNYb8jX9tYRGTFrJRyzfKb7Tq4w9Udkugahqt4Ct",
  "key22": "2sZ72FnBtfagB2hDin6tRcNpHaDVgQrxaZr5fjv9xVJ9Hk2bqUnCkX8rg93kr2pxFj33oHKbfmH328g7xkvMwkfr",
  "key23": "4FFAGV5GNAuhKRq4ZFiV7B3UpqTkUa81AR2UrNzSnQwu2MAnFPzatXmsDEJXXboHLxxNANS5FQftp4BaCMom6suo",
  "key24": "RPoovMbMXURatWLt7iffAqeW5mtLCnnzTpm9gnQfpEimYTxUT9aGm1rC2uYnGfHXmb1Lsewe5oHzBFCNXttaN3Q",
  "key25": "3vF8J5FpXjpgoSFoqq3KHJPQTMWvLHx13Y7z2i6PpK3fovyRLtARCiUbzHY4eFVynvBJP8LsNk5r41tVDCJ37LU3"
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
