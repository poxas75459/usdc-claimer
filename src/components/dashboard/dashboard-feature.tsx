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
    "RDgzrwf2cqS4SV9y5BdcFEXTwDLWH8Zm6AjUV2x8KD6iuBbF8vAiVrdTx493bbrhntuHebMgDTjbmgJ7anQ8gE9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SqqMH9MM4AKDd2pUaHUnSeGseJR6p3GuZkCuXumjwKtZzVTmtxZHco4dD3DU7eTnphKDMjFFx2Z8EqRbJVQLeLg",
  "key1": "5xgYeqwAKdCsCJTyGCCLRGVdWrGr9oM3QizSXh3FytRs52bu5pmQSUR2RnbzVus5ZZSDDBPRdNLtT3h9AWz67jJR",
  "key2": "3P7KDqFCUj1bepBaJwgS9Dm5H84DTgcS2pRAXsV7hx5MzvnVDH2wfHEHV7ygSHE9jn7mxzmW6RRKkY8bjopqDWBd",
  "key3": "Zhk2tSvii1K9CVhv61Wnw4WZugYmNC6coguwEihCPS8xSzX6M4EFGBWcfGaaTf6gME7d2iPFqJeQQnX2krGQQtu",
  "key4": "2ptxtrdTqdLVsvEGDv3yFifhMQBTUg41YSkTNAFc7HJD8HVgRZtixU778mdoPC5uWk41A5MCxXH3wSTQ5nyN3fsh",
  "key5": "3L9nBsehLqjNSRqgrxSVvzSDxjyyscF32QXsugodsGaJZzvuoT9S3BTYHuHuN597qZDsA8i8GKNjbpfhUeecxk5V",
  "key6": "5B8r13bcJCcevdhRuVRw7NzYCRfoXaKY6PP4RN87JVrGHieFDysbELsH5LsHYY2xLNhE6JZMutco5iCFu1kf8hLC",
  "key7": "3Pq8bejE78aqvfgxkvQjkVGSgxTj7fsbgMBPTTSrzfvWxgq2pw6i3tMJ4VyVXnzTZjk3baFDw6dzaKhq4Hoh96UF",
  "key8": "5Bkgtm4xGrXHqLw4Q6yBQWswS9hPz5qb2vmpHMxGqkiZnespEJvaCXg3eMChW1DWhSvDsEqusfACMbqKDRuRpHcf",
  "key9": "3ybX1NrQbduJtTWSZ8sgjZsVB2ZhsMspY8S6NGM3NZTZ67enXtJPVtKZfwCLhWRq5GnhCHMfTPpUxjhxezTAbqVK",
  "key10": "562jqC2cfNG5NZLo26y6f5TqM4ch96pSGasEezTE75evQ882rijDQQdm2c9QjtVLxKfVwKEfzsZ4FVAzzvz7uRr1",
  "key11": "4VRQqXLsYETKW3rk5SUGdM5PBDofMGMZNZD3xst5Do4qF4dnqFHAuWqXgkAbbpLgXx4PA22mdQ1NVK7UPJeXNm37",
  "key12": "2NPQZDkbRc1CD82U2sxBurWaDgxz2XzgYgvaAiwAnag5fMsgHBKnf1AHNsUif9r8bFVmZzYGbetMZn9wxwVmoUBR",
  "key13": "3Bpa4Gz2fRCkrBDtkY33Ztn4bwET6gwgRu3ssRUcLxRSxkd7ckPWpQC3TtsUiK26j2cDCn5BcmVFjFW2DFkLXtPr",
  "key14": "3GH5cVVAG6QsvDo4hpP6tLx2epFjn88MrSwSgwoza1Mw11pkZagWnNCrhJNNe1mM4pjU1UdkJD2a9xhc53qBnuEy",
  "key15": "65ZmUHjghKbZHAEdsUxhzCDi4gddyqhgU2Qf8CebKnMW7t6eN868U5ZLDhTtmXZJsj6AUQAyeGuTy6DedJ97aHuH",
  "key16": "3ynoQqjPdJNR8gTQhkkBWRZqdD4rrEKGzCG7M4v3M3ZKSNo8wKk1m28bGskgkZczBsm88VBnAqWMfX7TznHyGP9C",
  "key17": "4A4abbJPom8kaqniuPQgT3V1nW8z7znHWuSSjSuWGGhRxRv53Ev6e3SzsQFpCsuv5CHkYYbi1eZ8VT4mfax9y9kz",
  "key18": "5wTdCzRgAzf7BnHvoj6rSxoihhqEpfbV7jXvsZHMcAHsrPqT8dG5YSKTthYQcSj61ymTFBNft96E3kxswaUSDvfJ",
  "key19": "CjqwfGTx6Eo1HDHC3hDfSSWsxC4AddDcpPa8vJoCHHChzZ2Twr7ZcTpPhWjpa4mKgcryqLeBDGahqLmikNeTYxa",
  "key20": "3PfpWTvidoFAsagz6NtRuj3hH7sDnzKw46y5zQyobm9YRKyZntKpYs7SB1m3BQZeptajpe56sSMGo2EnEzraEuPV",
  "key21": "xUC9fxbzHRSZq3U3REnV9bfC5gExzKXYKewF98Fw4dJtCXHWety1t2FjvbQyEc7AGc1ZoNN5YKzswy31iiby2bc",
  "key22": "2bH7YmguH83hrZtrctpbmuZHcfMpQxRMJtd98G4ndUfaK49PSkscUSXqVRxrMQpUSwvjc5Ps5zm26aYu55kBY18J",
  "key23": "4wHJLyCLAoJ7bASurQBZt6uvv383fE5FUXk2BAqyZzLxgurkbsMGEet2KquqynKx2LPeRGxL7W2D3UBxCM5iV9dq",
  "key24": "42ueNUnjWXXsf7kqx9if8igMh3iznpvKQpYFCoQjMbfUgY8wS26Eg9DZLVHLniFFoQxxcKhMttM4nxqrL8XobuNM"
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
