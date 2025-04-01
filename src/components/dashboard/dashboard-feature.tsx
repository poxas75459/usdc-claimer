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
    "w6byrebmqgDVUiK6ZVok2BxMvwp2nDFsF3pd9kpTn7NeUwsZFbdiVAnt3iReR6M18dbskH8beZzsZ3sAnKNKVhZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "637YyUpHrpt6EV44FHcVzKHgWe7n4UGSrVJM3Zg7Cc9ZWERn1aUdtmLDfgzjJLw2TGep1WZHKLSUVFBy9chGDxEr",
  "key1": "5eRjHDY2KsTALqykMhyVwckfWVBsHNg3RqRjgJch2fupuKJ9xHarbdmxQyJtppTTuyMYaWimvriRLJc2688aKRY3",
  "key2": "2WXqSLcwudmVAHJ74FYfVfMY3KhAaYXtZkz9Jwk7AVrqC4xZXGzCpFgrHL2cHEoJQH3puydASnrU8ZELrPeCUF8o",
  "key3": "3nKvscJ1B4NtQ97hCvCwDHQQn7TGEByD95fP1otrRaieLQjJCBMB6DnaD4wZR9NNziGQMaDvLuh7D1WP5PR9Hc3t",
  "key4": "2v3Fy5KULTdJBJxaWA8hRdtQ3xHxjzPNcitGFhBMv4uPF9RuCwnqJEw968tzBuCQNYUhcQMjP8YYzE1QiFcTM9BK",
  "key5": "416hkjA8sRm61rovDM1SfiSxcqCywy3cdF4bcoJ57TBDigGeK67suSu8QYyvyGqd6A8ogVy1x8Bx5YVuCEQzfrrd",
  "key6": "MnE4C341f7v2deSJavrx5fEPBTN1qpp9ra6Y6e9tWYqHLnqo9vxqndZugCFJSDc9Kq5yZ5YygdnikoCic1oYfb7",
  "key7": "4P2HXLovHzNvUEV5qbehCJyER5mCcop84bag5Q3Khh34jn5HXUZUWGggRZuX3GTvCsxSN9mpjfkiiQjPJnPmUTyn",
  "key8": "cLVy5VRVTAdDEth3s7MB996nLnA1ayqym9pzWYg2gfot2WvhEfoCPgxWvKpg7TukYxr5SYMaSg6wQD8JEajzvAD",
  "key9": "4tey8qw43ycp6ZptJwwU3CdJLGc4DNpLfLGNm5X54RPtkK2t3TjtxxKwSKa7YvYPaiKv6aJkaQXdQxKMz7AcXz4b",
  "key10": "m54L38xm2R7wFoHc3aAZcHM1dx6RkGeSsREYA1UuhDHVrtjeyFLrASPqFshPa79FCgVv3zDgxnn5JEEhxiaEHNA",
  "key11": "5Psp5hAnthTEVmTyXsUvcC1AoAzj4dNHU64Syp94p21c7mQavtqFQAtYXVmHDgjisyyAtRoZdNh1k34qTyyCvPTL",
  "key12": "3GPZHPFkBJkLCFViZZbYWwLU6WwFk29yEjqQAhTbSoHGBZqWSqsL6f4ZddoAS6EUou5WN3pQwQ2N8ZnAR2wJcmDc",
  "key13": "6468FYYCeFhba54w4pxjC2QJEpt3FGVDqFuGaMeencFabM8rQhGRg5Gnqq8F4hkh5xzGMxJF6AxWXJgzy6BKjiMH",
  "key14": "56jii3ii1k89jim9P4waL2kkUVayzqk5uHxNonMP4SGf6i1PBjFqDXJh7tn2UBzhVNudMdChNTkrzovC2ehHBC3Q",
  "key15": "5NM77aA1b9iKtN6MjDntz3jfvrbJN5sFH22kxdDFr9L2EevGrb4kxW5BvGaTAdDkCz7p45feiGaYQCn2jqhFneba",
  "key16": "55GFt4RpGdeXaPQ1SsRW4LTWsJCgBq2aaX6Vv7tMExU9LYgBrYyYJjsuHy6rcp3YHTDtrUtWd8u1Q9qGaxSdBdtJ",
  "key17": "5hCnbFmWhMYk1wtQfKTmn2YyUsDUf4Fc1oXVMHmxykiKL1bKyeMUCJMNXy6Pe4DGbQHpGAZtHRG2ufJY6sD3kpne",
  "key18": "4TmTJDsxctyzMFbKmxSxZ6Ds1NrHKPW1VkXNSmvXjcjwFzuSSfJq5ktJ18ULRp7Ju2xHVbu3TSr7cAJ4Y46Gc36B",
  "key19": "2oH2mbRiDPjKVb4azpcLH3uoE3GxKCGL6tTpFHPNuTHkTDM8JCzsPPxvAw4xt2P2r5KdtJzgK35z4pWCuLsXrWAx",
  "key20": "5CJCy2qsui8zuFofBVgDawVdX5kxAenTd8zeD8jwwjzxegvmPGweiPhLvLf5ALH8T2mKPeN7N9cnqG8hMcA8Nf7K",
  "key21": "5SWrdK1ZDtnd4MKh1uDGMLbpw7aSBuU3oW6vzaoxR195jko6xXt1CugQvpuJjEqTMz89Uvg63Wc2REMpvnrUJcDE",
  "key22": "5RWj4PQCR6Zys9M7gH3pfY8jc7iMThKGenx1TsvemeCMtKy7A7fud7TdQJ7U7wgtSGLbFMLd5evznojx55r5zJne",
  "key23": "5zL7a1RwmH3PYRGM5NKAsfpANPzWpxGzEQDQfmq76nAT9MFibN5bfFPEj9EuCnxb27KfQe4RU96R8Tc5pggnypoK",
  "key24": "2m3rT36D5V7QTySgDKYk5qadG7aUQD4qfTtP1GbTXNVrkS7o3K9MvY6afomcGtbdZABckRqfSjsiR4rwcFoTGtpv"
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
