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
    "4LkiLrtVCZn71RdtCR89ZZ2i4BPkd97M7E4GXfU3rW3gfDDdcAAWTEsKMGnQDm8chdT1b3Q8F3quxzyCyaBsyAfa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pfKYgtXJBtHiAzZBKtKUP7Xmp4UqLBRdpTQkKjX7cZRTxDLSoPYpMLDq65nWD5FioqU1Qja7Ru6gPS9PR1HmDRL",
  "key1": "3xQdZs8f3rhKGX9Ao9W1ucfjB6RzSrEouydxHsFsUAcX5gaj5wpDqCBNko7QbyHmLN59Q9DcgBVCJLBN3m3oYpRJ",
  "key2": "5PYW1f8JWfm7UHR9bGm7bmFk8yEmUNN4qMTqviBDrf6i5LUneXB2e3k4W3HSC49GuXhPbJnaLyGHpSgGxZyWp8b8",
  "key3": "5DT5BMECbvrmFUDfJ7gsBcbDr9Hhb1N69CLQbq1ZmoMkr8cn1d332PLJsLgtHBgoRhkKaVA8sK6MsZTzdGbZCzFT",
  "key4": "472yEJUcg62KbxrLmpnxSfxEJ5nFRFrfFvKLDUQCVQdw6CHFQ3wZJxS9o8WXmkYN379AeyToFc1U2yGNaonjQdkw",
  "key5": "ogtS3cE1cSk4eNMoZenJZmHWxdPd2h5bz1gkaKZteTgWsME2wNEPxxKBWZ1MZ4Q8QsEFoQG4eHW6TobvQboawMw",
  "key6": "4whW7zr2syjRoqSjzWSJFt457twkhCP7JNBLzBWRvEneopgCD9YaXc3BmQ7YtJSAqpbuYT7yWiuSWur6krNHGwAm",
  "key7": "5KyoBcbzckfFz5RXwQsC7tTmU23xW9sAhFNQW3myTuWT6y6rhksULGUvmPBmkk4f6sALggqFmTUjVQj86ethqEUC",
  "key8": "2GhiVy9ypJNxHNbDWTTSvRPHef1GiqjfecHCn8tyQKQv54U7J6Lx8fnmegqZ9WmA1C6Y9NaWteA1VeWsE6EuRnHF",
  "key9": "3o9hVjUASyKa9xWkqFgMySUhtR16Wa3fpsSSk6cgmDQHZvygYYgQnmjpy5H3kVUgutPAmJV2Kfwhv3jpyMiTjf1S",
  "key10": "3oTtJtL1gdZggvHciZfmaAdHoXVRsg8qUUtpcRxYsxvtPzPGbeLsFcSJLsDGuTDk6mX5ZLh5ueip2XNsa2rzoSDY",
  "key11": "3B1x4rVK3VGuyag8QcDoXEkk4VexrkF2WCtNqyPijPxqwH7tDsjAtCjmSFM37p1g7hGJEekVERUZUu9jnw3GiuRV",
  "key12": "6Zjo2ggAvu46kxtm2jtB8CgLRD45eSapVpSPVrdskh3LHZrB5SdsACoXSv9RPHmVXLxVUezTdmSvBGjbuuHaaxh",
  "key13": "4Bd51szAx3vEpVhSNLM9PQQiM9WBjfAzZmTJUt7HTCLqft4vza8WcxGVxWGFqFHgy6yCbpNvfpZzB6cSqVgrsNBU",
  "key14": "2gaEzdziLTnCfZR3JdfqeSWn64BhUnHf9iDvX8KcybACFxQR5Qka8fx82ekiz9asJUzqLdNSqJX2hzqmTG9vZWeM",
  "key15": "7eh1i55hSQoqPqW9RjaATpQeZNfdD6KrznbmpTxGu3GSa5pT6pidVD33UL9AnqpeqRWNK2Z8fxxvUdcVmN5Uqx5",
  "key16": "3TeBNpfVrQ6rwxKHwXkfPmL2BDq1yJBB9m8JLua1D9xPex3o3Q19EuUEDpAczD3zf4P1BYn1y6jbw485YNmiCifW",
  "key17": "khUmVji2opiReGa7LGBry6RhSci8xTrqUBZafUTyrn9z5B3ZAmfT3N1MTJPdpLR3J94n3Nrjqw3VwEVg2mtMor3",
  "key18": "2GJtqRnGEEjQrefXy4FdHaX1hg974UdStwymcG8CXsbT3D4hgaHFHgFbbFBuZPVESZE8sCTfqwcxnZB9gNNMbDAx",
  "key19": "B648qUhVsXiDFtCkZbJqGwhQiEXwjRN2uYgW8puZKWxKDQzuDFF341UjsAiZk4PvsKxzhYjZLmGmEM26vcjbJ2B",
  "key20": "NfqcZBmYd7MZfovWMZR8fGSHSN1NKQ9pB8rEWGwCzDHuSwhATWgVL7z2wQ2Jhtm6gRxbEtvBfEnfdoL8RFCPeF1",
  "key21": "41Na8vgxdxoGW9YMekqd59UwhX89E3Z1RxWrmedogqjXyZ7yhW62bTWYjvE4Hsq7ezKjizmuViodJsQ9UpoNznsZ",
  "key22": "3E7Tcvfw8BqD4eqZrzgspYVm33wHGMbeaRhVQexuFqSVzf1jF5HLoi3dXx1oWrNbyjAt4JBL6GNBiKP9iUatgLi3",
  "key23": "2RdG5yiXFc4MchG18wnvwqY7yiUYEHWWYpEp6avVjQJ2HF3A1Lx6piVHGDmVnjN1xSep7YTPMFuhdh86MtvP3Sjm",
  "key24": "2DfvyiUH6WeDLkVeJ3o1ZnTukoy9A8pbwkNb1GtYTNF7AGT41AwfPt8AFuuKpT1TPr1YEJi2Rj8hTLpphTVNh29N",
  "key25": "381qZ4r1YBJkktrixoLFqf92v2FJHU37oFoDjRMiXkvTDvaYWU1LSaDzLHNvS9PNM3CM9TpRdTdzKfB2nBMcwdYd",
  "key26": "3pN7izh8Sn2b1RVE4CcxEG5JnUvp9spfKmmChrCDbuwJt3iXPqZXPhBQT8S94mLWZMZwcPNV6XT8AgfquZ5REU4h",
  "key27": "FETibZ21qaRcD5cMPU5FJhTFqsNfkpWvZ1uHDYZSGWVc3waYn3kudFpD5uCQYX138V4LVDr1B5S1fDsuEpVneKM",
  "key28": "346qNVPzCPmkMCFr7FaDKWxrw9DmfKV6vfetVE31NqhnrtQCGj8A4Gwh5Vn1VteaALMGL4ymdaq3MRJkb3tB7oju",
  "key29": "4HzES1iFNQHABiFcMES825XjLgRaJSFsSJCaffwD8E8KwXQLGrDGn6jZcGXeRgiJRGWKyUNgoEoJY33TYoCEyXaW"
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
