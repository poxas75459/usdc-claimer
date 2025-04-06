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
    "2foT7sTa4mgtgCd6gX1oFT4KksDSPaGEZq7V4KHi1q4JqFxZq996HCaczbeZqRL1TaEJXabpLLhDapi7x25pzv9x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qYBf1ZxrA12uXD8dDL3Gj9omqK6BwZfr2mxLGc9hzz8fD8LWe9aWtdqDB4F5YiLhsdSgv38bLnAeFntc7fpMogQ",
  "key1": "2o4eYrKq78uU92V23q6s4ezktQdZFTop87Z2AYhY2UycYFJJfxcno6f3jAPVNhGRsoqifg1mDJCK8F4N3qRuAg2h",
  "key2": "65TZgZNGRtDTDSrg4FUj3rkd78vGYDjiNxZWd14CvAy32axdUyPqzXDdC654iJwQUDEDSMRGsETKV85pv7YHSqzw",
  "key3": "5ZsRxAtuYB9hzzjwdz8AoD4vYDhpJhBGnhmm6H1TBsUfGHyYWqSuRJ1bGjteX7hDhVDgdSmK3p9cu2Fu4t22HjXE",
  "key4": "3ixCDMGJuWXr2wmfd8KVCBjdCkLRsU5aPJ8LmKJwxqEuFs338WPBQPzJVSzocfywNPy7MjCTffg1kVtsYtv2RUjj",
  "key5": "4A1kbXiZUFTcqjqTGuxKEvnQ8VutaoZ343L5P77UhAZR67zwfw8qtZeHBKQXMxDykYusTQcPhL6rLisPMqD3ECfv",
  "key6": "2Uv66aByW7vGqVz9dJUFUT3xySktns4N5b1vzcgH2KQSYaX3Y9ZvAxRrEgwGtNM1A92KwNjK2vaBT6FEm6o6sRgs",
  "key7": "3o51VhcnKu1RmgFDkuTaqyi1JjDyj3RvKSUDHSHkNZUkE92icpv8bSSoSvzP4xRaxm4UrahffbqU6XZSdmn7i4dC",
  "key8": "4AhHHtxNnLdkzESrcPQvkgB1eeWD37MGAVntKnZVF7aG18CaEU4Cz1ubSXcJQMRKQSdngznmFJVegFPYkT5JdKuQ",
  "key9": "4Td1NAsvSEJ8oeASMj4UTTQD3aS23Gz8RxhghQxBuD11dRqoGFzUTwsErY3SNBQfE5FoQF3VS8ZM3pMSTCq3wzdR",
  "key10": "5GwmwwLbP4ZXVp2xEC6oqtanRwap23Ut8Y9CTwLRwcJdHGraX18YsgaL4bF4y6v3Whx2vptfF695FSZmTqB1cfAM",
  "key11": "5xX1dM6DAqw57RFGHuyar4FxQYPRojjwhCzgLqtLxJUq8Foe7A9zrVH3gapbWGRBkGNYMrjZXfSs8AjzYkvUb2tv",
  "key12": "AeYj5wzf8UDeRxk4xBGS7oRPohCFgX4ujGQSS3bpCvPo3RHgCCc7vARfmQG34tWZRg2xFBhuoAqiPT3KvSKFjRj",
  "key13": "3hP6NHNsVfZAvda1bFvMv9MLiqBp1rH4xAuhJy9MkssTUd5bfxHkdjeWwwe8aFGbmqp3C3uNGRug8qLxmkVgQTUG",
  "key14": "4UzsYRn9UrrAT8P5qSgZdTeQP3WxATbiNcnCFe8cPKrdTqhWEqjDYRFpPfruoSSYL1uatR4mriA77ZUXet7rveN8",
  "key15": "56JYJyCZmJcoki9vj46rXBy2aKvmKp2boeyuFm4nmbKhaAtjnQHKjdtNL5H57GRgqGAu8AbD9LPZqMBpXWGfcfc2",
  "key16": "3w3Zx17jKENMxiYHvkkYWSyikm8ntddetAq8XCNNiG5oFELdS3pWeZ3CZKc6eBVAvsdcrhvXMjF4geEaUbwT99Pm",
  "key17": "5XErg3cTYuubEBGhzPhC2sv3xqcg4jk86pmYoRT5rj6Nfh9AcA7f96q1ksffZwPm2Fx7ioygDhbSuAmviEuvNrdg",
  "key18": "4Sdc2d1k3RgG4QjeAyPjuFjHUsWPpXdueyVERFJP3Cxcg66S43fJuJgyRHhtsBrk3UCPcmJi7kkSk6Z1attUVySX",
  "key19": "ZJY1PrrLfjo5CApEXzL5Gvfg7LR134Y3psHCFhmaEJkeEi2ELGab7QTBagL1kEPZn9pndCpERpVnP5WKtWg6iAz",
  "key20": "CR48g4CxvcGUuBtRhSaM3e6z8nJdcfXCSFWx1HmfKHPLNWDRK9TEcLzfWRWfEkeWTFEkPsFLjPBWahz55hUKaRz",
  "key21": "6TEAmVAhCMG7h2Bb5W62DrUhKTrourkgVfM4iiGZ9RWTe4oMSDfPZZLbNnVb1mP8xyacWtumD698QenYvvdZaF6",
  "key22": "wY6io2oxDUaQvjJA3QeWcStFL6FBpGbYCZF1fG7THahfzYqQmHqurFK8jARqzFDCGCp1SdJG3BULKj4CssTAKA5",
  "key23": "4mw1NeBzVctcf2XRbcxYx9sX8W8VzsoZ1mxHdJQHuKPFzjWDwSw6LxDbPktG3qrRVcaZmFE1yNbjRyqiessgyrJn",
  "key24": "53xSkZiEFbe5qGQc1iK4M5zs1Sa7cAovhHGoh1HYPyRPXCEyf8pBikYvSUvFSuVuinTesPhEXbLH3RMovDBazx3T"
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
