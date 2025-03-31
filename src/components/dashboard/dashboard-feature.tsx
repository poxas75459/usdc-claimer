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
    "5yj1pqLTU8JrfAWVvfSiykBzFostvZbhHqSGuTZkmprbsRHEE98krjUuc6SFF3KKoDFTSRB6Hvq5RMzwEN52nWdT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S96k6UHZSPdbdZZMEYWsafMtLw1kGoCKNn4rtfBtxrMKWgYqFVVxC9SsXia1zdDtDY84M8amTxUxxD2q5hqtrDg",
  "key1": "4vrvK1ZFgNvz8WKgEP9kxiyVQ8oWbur3nhNGqax9ARpJwRmZaRs1cTqbaueM6cAT9zEaRZ15Q5QBwhGck7DKw4XZ",
  "key2": "5qkxH3AZDsm9DUWJ9HMMAbmwzcDMdFtH2dX8bnvjAFZv8N8cP9m6WTwJiJT1zipJ8vSc3DEfhztUjKVA6zBeEXfY",
  "key3": "4QHUex1xn4tSZ86VsCom2YF6HjZhU24v9L2NJpQaqsNTdpkjp8JRr7qQtqhgFVok7YRsvCsjVm5Ne5uNrQjrDQEq",
  "key4": "3ojiWzXTFnjM26ZqPHdX7sbsYHKG4DXiDJrmJb1rmjT6gYLg2dDgqGERdAmU17HUEs3NDTV3uhtj9MsYv1eg2k4G",
  "key5": "4o3uZc8rCCvJ2aJeAsJWnVT452ezK7xQ6uHyGQdafk6Nsn9Sq5C4EcBMtTo7EXuq5tLzETjkNcWukTMzV7bwF2Tg",
  "key6": "4fqqGVZVi4fJH7xYWmpV1tH1j6mWfGXZ8Qic3kkDAJLGafHF5fnXwpS1vWpxZjKsUmaEpuUmaZu5jTiv79AMftie",
  "key7": "2o7E83qVm4yyh977u1XZsJwastBUvcacwyB3EP38yzu78Jqju9EReSUFDNXccbcWtvu7FyQzceAp1vDPcSWJczDz",
  "key8": "4TQqPDCu9N6aCm6DJ9gXTp8zvRM6B4KiqwUTLxMuz6NUmXp4Bp3iLD1rP3ZNT7XZkbEuuvaPVLt6ycWf7TNC5SLs",
  "key9": "236azP5cZcSoRKiAsUgwLRwVgZfrsggGQoJBvD15pDU3rKbmUdChunBueZ2YyBwi7e7CjEyBfbPJo2WqEWhV1sP9",
  "key10": "3qXsBUE3SAe2UFEGk7ctjjvJecKevQ5imE61TroE72Rsm9q5n17kTykuMyrKSqzCLoqNcYezy3adnuv63ahhrEq5",
  "key11": "4oLpQXtDaKTWyR5GbEkLFp9mqJERaeAprg9cXd9XERsJpFqpRyQZfGzU2wHyLvXYKf48Jy4bRBtHbQCAHC76TipR",
  "key12": "79H835dCCmE9wjfwwQRanGx27hPJtp1cfn7iNbpuehqMFwVNEiTmh3W35EFY5LAYQ5cw3AYM4PLdV4rMMAh2DSo",
  "key13": "3QGgihVmYbPJjUGXejnyYK3ArofZtqpeMVoTBqPsQNe4VU2exPN8C7dadE9ouTSUBBeJsABVkzCikEjCwCba47ti",
  "key14": "3dYiK1areiRD3PnnzrbTnKHfQfM6r89uv7Z7ZnkmVv1SdKKKwa2YL3u12y6WyCubZqK6nebE71WM1QNQqQiqWRMG",
  "key15": "4vNkTpV1kb8tRZu7cdSghXSMxQh9BufXKMj2dcXNhW2DKtdUPXFBtF6BuF541c2SpMSPsUuAz5vV1KeJ4TEXWcRb",
  "key16": "3PDGwZCJq4AU5LTSi67P9JwZRJssYzssKMV5SYVqdpWq1vQCXyzC7iAw4gkN8gApgSHvKJiM7aFeWtb8hrmV6nWp",
  "key17": "48sLjb7DzieTJ6mpV5VPWeb41yWizJ9fvTeVyFJGhq1sjeYAojF5m8w7cQRJde986Hrbqphkhb68u8vgFSRfYix1",
  "key18": "5sDvXYWHjmwkErzFx3TbQHTREuwajW7nuk6ouDpw4jSuT6TYv6LHJRQNPHUsqosjYoYtr4m3Hh3Bw7f9CNtJ27ZF",
  "key19": "5HnTBVxMVKs2oy15V3uSempjCGzFyivVUgUH2ggZBC23nargmPnGvaRGT35Fu3bSZZQwsn6Bt6M1ke2VZ4UvLpmx",
  "key20": "2EFo4iTuv5tD3hUkXNb6XrKiyL4AjRFTmZsVP36kSUyZwnDZos9af7FcLugZwAqxCM76bec7eV4j3icNFLeS3jkG",
  "key21": "2JfjLd3kZpevmub7r22ELubmbxynQDzzQMsNTvNQBUcETKPavg3F99cgH1hUwStRp7nja4KFY4cdH2ztioN4K3jG",
  "key22": "3bxDs9Fg8aWujx57KKTsWcjaRbmFC8LeB5TcQFsL1D4t3C4ykvACS819opA4Dqo8Ks1YM5wT4vbRnBaUor9qySFK",
  "key23": "3K2F7FLUtLV4G8ZcveZwXmvccjAcSzSKCWLBSYE1vndi1kKKoUGnBU3t8wWtAszp9g5e6x2EwekCgptvAWN6GQve",
  "key24": "3X3FMkM97uAbcLgAZqSGUzVGxoFcs9xnmA2jSkHw33SmtFCsEEf1PXoPteWSAMgU9jKnWkCwXLGvAWK8THhPLMPY",
  "key25": "51tr5BhuVh1zRX61wei9oskw8qAsV97UN3oTauer6rVzUrD6k9pQgzDY7zER6RydwWsdCdZhHr8zqokwX8wv9c1s"
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
