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
    "2GcanH6noEvhZVAFcYBYfsKyP6LPDDzJkZb7MDpXqdBttkeCkmZC431XL1vUocMErRzHYDxMnDzn4SiXEBQfobDo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZXHiAYwGd8NAbYqjZeESPULj8U1MntQu6gxUue3fBpcxyeYZACEHwJwSGzCndEHLpQXAjsKpdFTKsa4EpuWfsx1",
  "key1": "34jA1Cw4NLxf1jPJyqk6MbsBtzatS7cXvg936USmGq31BYEaDm1NACJYdHAbDk7FsxhXdzy6B6M1T9zcQ67Z1DwT",
  "key2": "2AdyL2xM1kFxAmYvnojxSAWbc3hqMYoFLkHEiSAAPpvitkmchWWSYBcKQvfCuBzz2po8hD33bmuPaq3QJFcfDwnW",
  "key3": "26aSMd4QhrWkiY3UXERxHKaYXLCbA4fxe1m4HLJmap3S5HupFYkJyr9YVyA8bthT2vVgRywYZwNMfXpBFB5w9pux",
  "key4": "JsjQHKQ68z9WvHvK7NWZsnPhyjey2rkJCznMKDkH2xQvnmdZ77ZWjQtAyu9eUpcSVz7we612SEWhgDtigKzGsE8",
  "key5": "5GooqBcGDde2z3zAcSkiNYrL4WUsK5b47iLMP5ijR3ZGXEzK5HHZKHPCczXNNU9F2RefUvM8yy7fGgiTBmyagdEC",
  "key6": "4Q4kJ7LTBsREcttkXQdyvfShyHUdZPtkB94gqY56z86jb8hseUsVhooZCwDgdvyRRbTmdSTyMwZRChyaLFugckp7",
  "key7": "47tpS23p5YNR96JWnnWXajEgLkbUR81fpM8c57Zm5sNSX4sWzesAKF6a4ByWksvsMUFjPCbucZ88Xn5b59eafYiE",
  "key8": "2FuSHsrBnzNjpt53SSuSkETgtiM1HSB694iqfU22XDssmJMk9paeuabbvtutxRqH9YLncXGXS8wmGQNYvrXBmnRr",
  "key9": "YVhrCanQj669L5CfCYxu3PT13v71aVkjzn6P6wLwnhUuLMrGrLXzQwRAq39Fu1AarqPmGUW5SHMQcWxUbBsiHvA",
  "key10": "3vFLrytTv4cjnJ1wnVe5SHzGMggyxPYJZiyeYPm1irDozvfMPMB2VkshpwS8936z4SgukpWs21RZ4sK8CMQDfJAH",
  "key11": "2P4x1AthSzXA5zyiteuMrpDBF99CtdqMiptfd9972VNmQJdKNtcPqT2GUy6Dzt6T5vrgSU5FvRsA67Nu23ivBNxN",
  "key12": "34oCpj7MeG1E3xoX38oWosWqURZ3yx9dCf4HES4ebdzToX87oNqqZZzbx75m7VWB49csvZs6Zknj51wN9UFhsuhc",
  "key13": "3YUE3oR24FRh1kgyHZv4D4CJBVci7bUMHC7ppZXGnNu4BKiD5yYiWsn69vS7HMndCVcdfG9gV4yKzQuXAYKiyDr2",
  "key14": "3XCwx3AEUStpEtqx9TPkGQmTDL5pM5BM381cRZGaJY6xNoEzFeybaCoSL1qHrKqtbgqEsQqjk35QVch88J7g5M2d",
  "key15": "LPmXy8GvxAUbfpJ6nHjj4ByZu1zRqjvB9ao6Zh711882CNt4hUvoomzPjiwZ1MewabTEjDVHgNexepq7sfUu1D4",
  "key16": "2m9nEY1oTTYBvnVQns3g3gF2XkdSYz8cj1mWuDHgvgS9aSgsUemVM5r9RqacT9qyxqzFPqN3AbSNUksrh8ZvTae8",
  "key17": "4tZoV7miMA2Q6wXZNYn7JrbUTuwB21LbEYk7Q2vWsAqVr4y9L38vDiZfWfey1oAPAoMvKULCf8tDjvhfo6B1rTnQ",
  "key18": "5nqE3Mn3wnU186WJ3zfbK83fFw3Xmirx3ZxjLbVawyQgmvruMCB4FEtDTa3Ai3PQDLqfVKEVvYmpFKAEHxRNjQag",
  "key19": "4xgGMnR7CEzBYMtAk32ffZvkKtxAeCdmY9HvJbxzp7XnawYdv88dbTFqYbRdBnm6d5PR9FejJwzhk7YpkYAFSaAZ",
  "key20": "2dHBSRhCpXrKoCfZ1V4mNXUz5RKUbKKasvCpwELeQuQwuY4qgbajiffnaQBecbeMRotGW5rBnLcJUGJVRiWkpzkc",
  "key21": "2cSgocWSPpY8MgXj4TupfXpZBNx2ic21h4sZDRGMMiYfyCf31HBmsAduqTGykdTQqHE8cvW7wS6CyfLyxjXtzwtp",
  "key22": "DcgScMKTRQtgDbmx5wowHKQeRdgAopYy669jLDfmQhYR7hFoCaVpLxa3219fxmLhetr7sknmJTFTEpRBK6URzvP",
  "key23": "5WEFc3tsorZfr2ngajXmYesdFg3ERB4mkfWbPBmaVSsVyX8JPy6RX1KG3UxKbFSeuzwsnFhDJ1eiUQYsTPeXfD2n",
  "key24": "4KaNspuxiGPCNoHuTpxCDZVnoGxhs1FQkSMchiWqf3m3x2iiFxyodFHPouYoSc2FSMjUKXxxKdEdRfZZtQevpQMt",
  "key25": "3nyFLJDaGK3dLNSFVy3jy1YawSpGXZKamhYZDs6eMPUquRHE57PoD5XFXAPBpGzzUeR3UWDjJLi7LRj5bYnHHFY5",
  "key26": "5Zt13GAaQ6rEZ63HqMF6P3Lwt7TmBywGHTnw7v3JXRfNDHzGJQq6tgojRg2YfdQA2nZztHTXnwYSetmYpYPKoByz"
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
