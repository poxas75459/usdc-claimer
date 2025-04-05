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
    "5adexbLRT3DSdLbt7FV1UsAF26JnKpfWmoTGUU1BkACKk6MEat6ctUDJB8UXA5UwnyrWMrwanvmWTRYRe8QWjttj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tDSDfZEk7hyfJWKxvkTFxcicjhBoD2VTof1qfHBKSwXMpAHsUY3LzaCWCh9j1suigS8ftXhc3WAjbvXQbXQg6UA",
  "key1": "4isZbtxCtQCDoXvZq4yWU3bW9eyYEmHkABeJ4VuQrqkV4b1SgZLGzfuifNaCg8EfCwD1wcgCPkWUzaeEBdYk2baP",
  "key2": "3QE7UAe4GjjEU8iCcGYunUwaUrBBQ2QDar8XiQk16Ci815MMyTi2uS4CyN8wwnM5tqvQxsdexFFvMjKDDWxLwL6x",
  "key3": "3yLicmdZrYrEXyDYkPDhYhHBG2a2HYA47fkc9twHFHiUaqQCF2w9mSw8t8nigCFCrvpnAm9tQujTZ4EqyETXd2fg",
  "key4": "5DtHBSLWNpkf8zRHwGJJqMsoRspvi86iUdVptRHrg6A1A2FuPTqCMd2o3Virq7Sps2a7RFBSjsWPU36WP5Mf6Vqu",
  "key5": "4Ufi1pF3yCUSZkSeCXRCAX2vmdDQ6sDW73VF8diYGXxMjMCYBjv17ibBwP5MGj57D6dygkXfdXhgu6QoqVTjMZ1M",
  "key6": "bNY5DwS91jrh8sBe3MXECu73cs6atkj7PapEr3bxkmxynH3SCCEutFo5xB9PjCWJaphFpLRC1ajnDqbYn4UDJSt",
  "key7": "5YS1mZCDasG32sh1ocXXQhmQ9SMw3122kraxqpmxxtAed5wYWco4yVjNcVKg4Z5QmrEubWcsoh5E6RQx2Sxe6Qmw",
  "key8": "3dWt9pyrimF6Lvk3yYRQ9KdS5ZcH3A6yAkj9uRbbDs9RmpbifdoRq1CZjYPkA1ma7sedHstuBBjB6TRMcjbef2hs",
  "key9": "4tPX9MQndBojHenV5CpoZkGZ7iTHajtx9Pf3feHAP9NUWTKqoHGfmM3teTRHXZjHP8k35qra2raP4b9szV2S9hGQ",
  "key10": "37JKkyCiCMeh5ADj1vURTc3TxntKLC77CmSTYDPZBo8DqiA2d3c6G9HHqhnLKqAADeihTQRufvKG9AWAfaBvNA9y",
  "key11": "4zR3B41mTdpLVqDdWTHAFL9PRKPguQQCEusFZicJ2k1qozgmdFY4j5mtS1VqZx4ZKS4UQqRUG5a8U2Erx58t1Gx2",
  "key12": "2peEEmhWbRt3y39HydhTZciYDTXVSKmFR43it2c5TV5gC7PQcUHcKritzt1fPttQbHwd5xVMR7o16bqV9gRU8S6A",
  "key13": "hk5b4TbMG5p7kLThUMpgJYBgE6gmmkCifMCmU9iz3F76kg15RrNd27ftZx7Sasod2ixXDjuRcYiHTPUpVn7TsLj",
  "key14": "4PgMYMQsFRGhtGdff7TcjdncJnnjiKTNhqsyLgpFopkqatFpk33XNZ9fe29JHoELn1SpX4ZEAqadMbY9VaUXyWfJ",
  "key15": "3hmRRpAFQeYEPBP1anKinJhpHWPV3xzMnWc4gyiJTxa98SPVzQ7RgyWZwTFdqSDnGqC7yHfpAQBrDcdpQH9UitS1",
  "key16": "5XpXbDhLkJwnDgEDpiLZKNjbtPXRS1dVuwjNby12cqE9kNG42FyBYWm64jaZMaT61whT5dQKWcDsgtQQNGgDJ2vY",
  "key17": "32rZLy3vw5dCTUKUf3ZfesZFakRZSspzH3eu6XVd9rHhzP2Jf9buKCXAz875YGWrMfKGZLYAakH18sFwrmx9ZSXW",
  "key18": "3zuRuHtissLMnBYpYSHAVcfQStpU28wwn2EDJMbQ6AvShJkUSsFNAfz3Pmdj7niDkPGDZuncMkpUBmFAd3d172GZ",
  "key19": "5hxNYfJaBc33SeLin36RFuGHg59p66ix1rhLoceHkNzjC8fUCd1TUjnSvgJuNyPCcQe856xrKaVG2ftjw1n3CoJS",
  "key20": "5QhV7xFmYzUm3yJJG1jerPGvreYPjWSubBx7vVF4xUHYiPLLWNJTS1y1jVVxTPfXgnQz3hz7UEh77bN4gTCDTbQ3",
  "key21": "2pNyCQPjZ2Twgcm7JQtMNahYDRKSVJsRXNsHUdWyXbYAhigP9E2dXit6MxX7YeXF1JYPwZHN7jxPWwnsquJ9MUjs",
  "key22": "KPvUkRBZrDZrUhJLEieGujdaQxSMGZj58yDTW1dHHHxoZ3ZqFhkEBrpPgffmj4QkaTwGVtLC91cqoWTEQVu98r9",
  "key23": "4PJapYv9w1NLav1A4xgvFVFh5t5HyzjUWEqdbvMe1YvN4gZJh5jcxxJ4JpxmKMKKDZ7rZKvmttHirMy6P5Sp4ruj",
  "key24": "5zNxs25xnitLEmew4k4ferXEDhwxhkj58AnC219aLqqLQYWo5gMgtcZBRWDB1LKU4S6yJqyEnaH22xnmcn5xcUvR",
  "key25": "48EXuupG8qVpn3CDGw2d7cCyLemJEzeeMc5NHWfqFJhw2ZsebqmBbBgV3KfhAybGnWQ8cHYthSp1rxfULntefKDs",
  "key26": "5vQ71seaQCcu8VPWZVLy5zKAkZSpV1dSGt6C92oqxoCv6njyLbc9H5VmbRBzSypZYpAhPXa4J81UMYEXjLT8iDtt",
  "key27": "2w1d6z7C2DCV52V6Xgy3kzeN49KfiffGvVxcF3UQAH55CR13YNn6m8opcohxY2kEjpxYxVX5oMhdFi5FkuWXyPfu",
  "key28": "24pHNrJ4oMZ9Vxy6KN5ARtBDEZ7kKUvNe5vqbcd3ZcKFgBLQzKm6z66fJ5HD5WU7SitKJ6QK5XfSG7GcLgZbHzfu",
  "key29": "3R3wY9CHq2ey9w85JAwiSjxpB11gek69cMefWXL6vHjfQp4jD8NStJycdGx2BktaQzzP4YfoA2iHeeduCL71h8Vx"
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
