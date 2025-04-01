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
    "qob1ccn1ZicEfkRhvCeDTMbostBMCqtVgBgz9wxz6vD4YUtULkUFBr5rs4EHD9NjgwTLG6Rb8iF29BsWTL24hDT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c3kiwUuesNdUR9NcTKgAbvTmgF4g9mywQnWmMs89SRLk2yNHfY6uE4Ja5YDdTaf2i4hk34qz68YKyWM4GTnGacQ",
  "key1": "3rkCFB4Jn3Uxc4MaN4fR2GjczEsxvq5Ym1LUozHW3z9s7M1i9uVM9DVkUtqJpQAgymD4TiixK4c2GKSDoBGwkvyB",
  "key2": "2LLoi5CYPTtUdjh14N9VzZZ4siV4yFS1BZsHLJkQw1SteFRuAiggNqF9LoMwm9aUAJWfNvRyCHo4T3hvHEjPVf5K",
  "key3": "5UAsykhnyUzqMWqUeP7BtWLER52QDGzvycvkQsAamdCicmBgKkgypJRGxjpDJguXk47nLGCZwZCojSPWHteeP7sS",
  "key4": "2TvrdjcSSu8a2UymCWAvybaQQZrgbTShaX2ExtLCd5LzCoMFT2WiGVc7kbjWqgECmKNinkqdSmpgffgBFRvzbUrN",
  "key5": "23cYSPkoHXyZ76YHn1BKLbcFdu7aVfsZ4qyL197qDeXYGHvqHVhHFuGL23Y5Q7uKghcme6bfuxpXKj6rwserjd4x",
  "key6": "jepFpP9XkDiYX8NLWFa5suxUFomPYKr33mgfPbicXwe6Mntv6SecCJrpegHAsFaUVDwNrZC5meuV7DitocPqiXZ",
  "key7": "4QrqNwVLX4g1Kvkr6qD32hq7NssJHHmJnzqBgxsCdTxKM3kcbBrdAFjGh7kgQMCrKNyHHYjH4PaUSqXVKi6afq9v",
  "key8": "42DjdJt9x5dZgqBGHLUMn4znbzxSv4SNEwgCTex22vAtmkUnQ2os89ANGsZenRL9bePq5BBHzDPFETht5aNio1ND",
  "key9": "PmRuQgq5rEfLVxr9Huh6JYhRwatQbQoyTdqVkGKbepyogLsHQMRwv56fmzKkVvAgPRWTBwTUN25LFpNinEo9BoT",
  "key10": "4XMjEiRB191ok6D1eFkQXviovhXohyWK4qJWCQ1BHiZenZMyRxGqRQw68ZnbtZuU5w1EjybWrWgTLnj6cSd8YfKr",
  "key11": "5fHc5fBhEbr6uBCWMeRdPVCDuzaiGKXqDFFdciktkvyQ6UHy4C7Q7C6o6gNkJZx6ka79rjyvze1DCN5uz1K9Xm3q",
  "key12": "cur7giKEqRbLN6nvwvXPAkrKM81pGWmo5XpX3rUaN8WJ3nvhQXskZNcNKrj2seZ7GKPZxzv5yT9bc9RbMuiBZvJ",
  "key13": "4DVyXpZgTP3xVRftsdNeE9Yabr4gmqXG4MmirwoauaM79bZAQZJfMrgZeebg1ppfm8WH9nELdmpnKnezpd2mYNY6",
  "key14": "5xmQeJaHNBmZfm4w9Ar1K9t4Mk5tGE6s95EwmSMB7RSoouG55FvPPvoVSUgzt4TCLQcNGimGrXe4hS6ZNivDmUbw",
  "key15": "3ADzuR7iXTb4h7JUVuMm1H9nmWSjVyTHBDrszrptzvrXhuyC7JWT1CBGRGVjqW3HfBCBADmEKt8mxeunDkRThX7R",
  "key16": "51BYtWwtswJo9R9Lmw6oShHb4HwpLt826tX4uk36WorPcuBJXTHfAzotBWX2fRAusu3vZigEWGhHboGSWRv7VN3D",
  "key17": "4enLjPBhc2CvG8cA42kgRqmTQdcxeMyaV5kPJWSXNGDNTwhcjtwbzgQMtHu1u6LCNB2pe8cW4nYJkWsEmpmgDoQ3",
  "key18": "ZQiTZNo3KN4J8KvM7BmVz6ULmUbrd7aSZ9xWrdStAjQz7W1WgRnUSHkaF2nMAzBpFQSif7K7taGyhHQGQrLaKKy",
  "key19": "42EDRrGTsafaMqEmwRMb7zoT9nju5Y6zMu2NnB1DGF5JBgrVFUyB2jn71VmnnXHWL7TtZcTjJrrzFuKn4wbZuwwr",
  "key20": "4etSVmgpvMcyVrSmn5nAwsWw8JYECBUJLA1Vyb2ksvnBes3oTyj53m2FgSh59xLk9wDjjjM3AGo5wUvKmmrVYywL",
  "key21": "671z8MijiFb9jQpLH7rg9FLFmFvrc6wFUtkabhhP4f3hGMt2A7r4WwprGB9VHaegDcguve1axV6eQeAFxhXgR2iK",
  "key22": "4jVhnjm95ss1Z2U6W9TtULdWX8r8jjgv2ykaNJr4bE6Uf9jGdsqvzhKt4CrMkq6jGb2sd1J1K5mbuUFaD2BMd7ai",
  "key23": "2UK7zh6XKCZoeHvb3BUou4cecrmMz8WdxmnyQDD4P2hhZucxbExfA8QEaUDA5iVwZhvssmgXx4oLkTr9kdzc9mkQ",
  "key24": "4DcvDA3zjv3RY4eTGBN4DuAKVdFP3PXWDW3cUkL4xrisDTThuACQqUv4PgYehMoL5V9YHbsETwY5zWe72j1ZwTeV",
  "key25": "2KZkQQMVTYCwtMhpGgfmzNn5CbKNKjaAdvMf4coNrd1Raae6x4aJq8SZAV8GFLBuVwGbEYSoNpbae7EqfhPgxRL",
  "key26": "4CfbrcqfDQtMwSFrHCStMta6E4GdHUd4hWfAmiao4AKmGfWGHchjqn6pSdSfCDxqn8RoQmjvhg678oMNczzWKyBj",
  "key27": "2aHN1FvKozUyUQcCmi4J5nM3aKixTiLtPNmdx1UWvMyij5a3y4mhvJpn83QSEJMGMz9Z5a3ZyaC5qqXCTRgL6CJ5",
  "key28": "23vFg9HmuUvLCRfAhCWGC1vgQTruuvwpu7fq6g9zprdpypkW5jUgBGFhCZH1GLpPdxomZ9F1q4vTioUsomrmAgx2",
  "key29": "2aWJCSXJpMZXSEx3JodKWWRF2vHPFPKhsbEEzV43xcpYrw7xZUmam6RJ1AXXXPndLRKJ5PPspnCfT3sJmcGSVH5a",
  "key30": "pApREs41RkT37SXJKLC8XRWbRfEQwLnfc2PKwX9VykjpFzdnZUbHrSzKksu51BkYHPKhap1VDyqnt1RnHdm4nrK"
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
