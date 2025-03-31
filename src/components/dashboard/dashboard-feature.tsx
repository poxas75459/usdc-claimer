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
    "2CRQqhwrAtZ6T7Np93w1ujD4HGvwmGLS9mAcZ2QD77Ti4XEmsYmky2d6Wbegvsp8B49kaJZyRVhCnxSyFDdUFEMW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qcfzwSJCF6rDsqmsUKLuEBLS9wHk7spwPN735sL8E5HusKEasE11oa818roziKwyguqtbZkCi3Y5JakWVgrYXnE",
  "key1": "5grKZjRdbi4Hs91ELF5q4BrtpVP24LH2fxiy3ZSdL2qHBZ4TEwFnxjLaA2SfmQ3PRYxfvLSrhrhgNNtZMzy1dFqH",
  "key2": "3y4AF2zzXKrqjJUHVffVcDzyXiEMr2f3qE5V4smAx7ArrGsjyZVpzp3MCQYSbmPNeWFcdPw6b8cPjPh1X1QsN2ru",
  "key3": "TzVsLWJGAbAFRX8XZMh6ogwmwx5ZSdXRFdRYppzNGXtbscWCjH2thDNhD6xKfjKfUcGfuWqydyq2ncqFmvq66xR",
  "key4": "35iig28baZWsW84wLz7xirqC85ogiFabf4mV4yocFwE4YAnHbMw7kfcFkadSBzhqfmQS4PdpZ11GrqQZwT85pDNZ",
  "key5": "5yzU24mzQU78fzfbr5nutsVUUtuEeC5xqvi1KigiSnYf4QQ4vnmN4XCfqCjNuCrsfKCHAVrdLnYbTVKimo9ndqC",
  "key6": "56PJcfN4pZ5UiaiCBPV91Cxw5UypirKyPG1PdeQx7LzsbqDWc4CuzddWisfeLHio1HUNBxgoVYigACtudtrHCnom",
  "key7": "CRGeC1woP3AWYYTKNkTikSsRYSLvXNtQooye52rKdmshYR7fYeN3S5PuLDewN5Yg9vgdNv4pXT19RGXa8hEfrHT",
  "key8": "3dfaFoU3dZJmHmTUH37VuK6mLk7qKL7mBFQ4YqX7QR9gacABKL8ak3SJfYE2dnjs91X7PmPh2WRsr2EFS2LGRAY5",
  "key9": "6s6xLq9Hf9ps5mmGA528yQwcAv3tbTZAXhvPNvAa8mAeqKEBJ9Y7jhw1PHubcesBeLmPDpfSycvV2pcfY7v4efi",
  "key10": "2n9EiJiyDAE9KmKFkQ3efn6R7DSGjEVvP5mXLA7RFoAGQVYsBnFc6QhQdYro14sGJf1SgzK9DQr7hEpdBTaigzw4",
  "key11": "ffSaWaKkgux6e6ERqU64a6geLvBPGECPtPQbpE3tnfXBrosqXeZ1HhrJtkPSNkg9ZzAwDRCcoexAq8XfRKpSQZR",
  "key12": "461fWZpELCyotibnLVq5rRatjhHwwyw6bq1vRp8PwJDgpbyg9kPggs2py3AHZqjjfhJESrVz1KKVGDFgcmkWjJKb",
  "key13": "4GzS3UDBJfwzJGpcjWpWoDJHQacm897BAXKx3VxmV6Lsas7Jf4Fy8YXyQpbzThr4gN4sk3xqwNGk8Xv7fyPTDV4Y",
  "key14": "3JjBZ8Wqd2h3btRUksjdt7xikddG5KUAgoBX1DwrhgcDxKi9oDhkUtDsnSRWuMzsS2vkfBe2MTUfbNWAxCp3nxdH",
  "key15": "5LcNaZw6c6KUBgk8BVHaRxrAYvDQqNXzscjFx4brLqbr82wEwj5J4HeEwqnAH1gXTb1x3WqDZtCLX7QXaGrjLCZ8",
  "key16": "3M4wd4Fymi3RbQpgkN8hjU6d9PWS357G3P5hpL8AdUN5yHx2fS8VoUFnCp4XPWczbGH2N3ERf7EBjuQnQqqKnBuW",
  "key17": "3XY7jxuG7daGJkJ43wWniDAL9huHtFvw3FyBa3g6g14EqjZsYPQS3RE1RrxDeazAvxSmUkPRLj6epJna7oBeT1pD",
  "key18": "9jTV7JxexPQ72ab96YuyQyXNDKtLRyhApguEkQ1yMiroZg72Hn388EboxouYWU1zEcFEMvdM7K123wZ3cSjzq2g",
  "key19": "3GXpuLRPKUXFxzkhdsYpH43fq3weEmzBgAgvYJKCugtcDy8C5GJCZ1UcoB1jB8NASPGYe3EA2EddY3iPmVHjLWxQ",
  "key20": "55N48ck5QPjTsh4Kit9QAkK5vnehMj475xCQ1ws9dKCZYyQK7nzxCRSnR6nUqQJqViTwvmmVyxSqkBEKHkPhawUQ",
  "key21": "WSHPQDUzJoGxHB5YyUugA3pB7a3FeAoktPrxU5NgkTG32SkZYk5CkbGzRDhgkoevAaENRvfCTe15WE56zre7cCT",
  "key22": "JcH1L2pDdw49T9s2SoMXt171bd9h9mFMUtPZG7zNqN9Sw4u5uNdV92wFoiL7Aqkm4hp6VSmMyDnYDbaiUYiwDrB",
  "key23": "4V12MAr3fturMYmAjB7EjLUvEw2cTBtc78p49eUqPSzTanHWqPmeLWbyR9rGswpWZjcBNSkdFyUwnRrYF7NzYkgz",
  "key24": "4ZaHgBoaqKRNfo3j9fo7NYHFnBh9HdtyMTL3fJ7tXxNGthXUAcbHDJncgmNvg8nKztURTSELAgnRVuigKu2FK3Xv",
  "key25": "3CMUWcGcAXGdzndDp87nbxzZQs7hzSK5vMWCdtrDKHXCJhg6TJ1BnmjPfvnsNS5ZYeMuTXs6bvrZ7oAHsV6dzy77",
  "key26": "dtjTbea7J6b3axEnY6bB9D8Hu65X51z6Rf3JkKxeW4JWSf3R6MYuddL8eqZ5WSzCjYgiyF8puEabDzg9UgTYLNX",
  "key27": "5XeygJXoGbST6WJnnVuxEsWwwneMkMZ2GYzeaAsotJuSK8g66w7sxwu7PPhTGkTmao5fFk15sCZu1XNXvS9RWgFe",
  "key28": "3fsCQVYK4jNEvmrBVGDCyvLNEQJwXMPpzTgLKR3UV2dmvAXrpiKBpQi2hsX6exRdcKhtsLkDP9aX9MzUA9CjiKAx",
  "key29": "3u7CsdGQohiSUyy5DhVXN8ME5FrVCtAoaMR2Ypsof9PdkpodGxJB5ZLF4twi7M8K6MQvcaw6aCi6J2XHkamBQxau"
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
