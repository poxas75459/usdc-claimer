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
    "53QNGtUiJThtsX94BwcA1VPBVMqZg1FoGVyL3EKsvg44fBsyjJQNfq6s2CNcGCHTrJrBot7T9tSVH6XWhKU8nwQA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2awncgVmii2a3XjKpdpZTpnsY5Bs4hqXaXk5f1WEtCcNB2Qb4Fopwr1G6vS6LJNW5vN9tPAz7Ms9JL7pDrdqHw35",
  "key1": "cJukbvGxgWPh6Y7azd16b3kRyCyg5mecozhQiqKh9wumV8bGXQBoAePGRsmLSNFCGjmZtAfnU6QGeAA5mAc95aZ",
  "key2": "5CZHi2iGAng4aBGjhc7xX2rpRzS9N8E9CxS1VRk4fP89FyRuZ4LQzE3RNq4gATRNVxLbvyY4ih51ssaiAsnpegNM",
  "key3": "2cgtQnmi9uE1NE54AVED2zMRzgjWKg18AqrPZ1uWbhruwhZKnBF5Cnsuk29nSkP9FAeroW5ZL36bkZAzS3XEf62b",
  "key4": "5MJ9pHd7Z7VLbbwkfdd9PP4wGNd88GERCBUN213jPb2KfzV2YD1dxSNGK3DC5JsmTL3ifPjVQ9m7Yig7XyTGoego",
  "key5": "Yz5w8mniGVA1vj7rFF3U8bUvPf9oyGqMPYgeENYNFW57cnkx23wsY7NBvCpFddVHhAUZ5x1jX1qDS9UyF3vobRu",
  "key6": "2bvfGcVe2beXEBGDsEhrjkPyYeAPmVQiKJLcW6vqtuncNJercnSQ1RAbqsjtGwwTEiaKNCDUiSgsnrx7UezxkepT",
  "key7": "5F6voQfhyVnEM1eHvCqSDf3pCZQVQtgAGBt3ZFfhoQuCB7qzh4oErVkUaw9QnifMBUEjdYgQHbT2QtddoHXCy6vc",
  "key8": "5CXcv1cHvwdCSZ2kMpsPdkLqMZpuz8h2YxZVWJ5djJkoJjVdRQ5Lp7SjzMEZyBPfbzxj9YhMwBVnXP1SWYd4R9SA",
  "key9": "2iZqEZLNZDGzJwcrhm93KtysHzenK3VsssmtfUYbq8htSxe2CGYovULiL1xYxh3vMoVqbRds9sBKKra5nemezD4F",
  "key10": "3ygbRvoNtU6Xyyf96PpQ1Bro4EmZ9BQcqXTfXzmeXskyM7jYjYwXSUABesToSVdfM9EhHX7oPQ63Vk1g6gxP98B8",
  "key11": "5dFwirzi6J1oeLvprmsofMLSLYiYPVL9FKibSKcnoXoemPuJ6mzrWxnNFnBPS3HDBtFs39QaAKhoCn1WnPqD8LYr",
  "key12": "5tc3YXEXqFbGTeaoqCWt4DT46N4Qkh7wNsD5kjC1TsoCzXrvR33cTqHSGTvxYN36FG5msjDFvRX4xRA52zKejUHk",
  "key13": "2tviUbJFGcG75Kjuwe4NSxfvo9mpVBPfutohL55mt3ozLVs36Y6bLJSXax9D6iGLV5oFwW1dxaRngTRbqdTroBh3",
  "key14": "3NfVcNKBjdMiWa8FXhd5cqFmhtjiA4kpZWhk8rxpChYgDvm6Y4QLzV2drMcQ1Ua38yGYo5wpqXLGkfqaUidNgxPg",
  "key15": "3MUrAcQEGkHLZSCd3nnmZUGoyUNUh3Fz6cd5mcM4bs4YszfikBXNAoWiMqmSzfpHzXD6PCF4GLrAHp6Mi3usPQ62",
  "key16": "4ruEKBrHWjnZwFhDMNtsgifwE5pvGehCpZYsnPGqZXbx7Cp5qRv99weLJmbcpqqroXS5CAZCN5ywCTcpcvdtLsM9",
  "key17": "3nhejTJrrFtRdir768thH8Vd7a1y1ny6Vbc9ttAu8mWkYQWVc8fkzChhaHQt5K5oP88HBe7adMF3WRYYyLSk27Le",
  "key18": "3aEzkU4zmnXjaZfsc8y1gzQdFNm2z87uo4q3A41Rog1EFAm8h4hWAXafnkoKGATRzcKL9KaFhNVSPZhnbWpNZoLo",
  "key19": "61A53ZrzRkwTmCWtsRPwqsgxeYo98gREoqpE894tUSuLC8qAUgakJVEuq9b665FhQQCcofHsfUmxnnaZyW7r8Qzd",
  "key20": "33mD8a5DMtZXzGsunPRPa6B4779m9gW2A35SXshyNMu9miCLbSa6Htv9oGMR6C2cnGfV4Q9jyAModaNm6nH3GeiK",
  "key21": "4FvsEkqh9VBa9YgHBcefCHveXuB73BSWrzRZe4KkhNGJS1WVE6LRhAUc5UtGu41W7Qmk1mxWH32LAgJ9bioAD2AY",
  "key22": "2Lr9DyN4dxkaqtFZr1XY87sK7EoyUbbHeLpiR28q4kyEgDyrDRGYSd71gc86dJFu3qerDaAwiNMKvsFgjQaLJ8Ys",
  "key23": "4maSvACqfc4u8QwJ7H3vnFAzgGHZRcKHpHFZthREcBPujrLTu2Bebczx4cLKAa4XFsSxdeHF3A2wKyMHZYCztMBe",
  "key24": "2mFmZeM2F8xAGGUocGhfKDEuqPch4C3MQ5cB1MocTmGRHia15QzHFTQ64tMAYeAMfmzbJAoRea5Dvz1rT5FqMzpv"
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
