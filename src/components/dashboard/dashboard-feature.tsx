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
    "2KfvcCgpKyBYrzKJqBYLnaRC8rcF4rCLJumbMUJxg7P5R8W1g59kCU4GKzrH3h5c4U5VKvevwGqZhepHijH6ibcG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6kXpNKnUx2iSGC8u18MPk9WWiJYUt3cATTx8ViMvLpTY7Kw35NRD7doD4pcgvSQHweREDKVtHYsGKZWHNesJ9XE",
  "key1": "4kP5kF6iumGtoaiFwKJi2peM4d4hH3QjbGrTSLcUiPVecoTTCYT3uTx2yxnQWeuRJpMvorgQYQ4c3wVhwM3EF82o",
  "key2": "4q733mRpfK3N4aP8tMEwWmyw7CoKvVfEuk34ari833uTsZJhQGovGsi1pzG7rg46eUJ3AAfa7kNSdmVrHzirbPCn",
  "key3": "4qSNHeoHPv8Kt9djQX4XHw3gnGbiGTLBz2hMSenSEgsUKWQ3s9BwCnGSAua62TLmzfcyM1Lixgn2QjkmSjRQM5gT",
  "key4": "4k5ELwvfkSJjh6sHcsXXSoN2CCDnDeA7cqSRSYZtrPuGAeqNwx1Gd5s3v7rA4j25Na5w8Ww3RRStqY3pbmnTBaKQ",
  "key5": "3KEX5QhBsikBFghBvciw8v2kr1AJX7K8bFaghJoA65HqqEfKgqJina99nu2HEx8Zbe53PhQGYktiMigkMQTmyJyA",
  "key6": "5b52RKWY3GfbhLGJJMzqq8XuL6r2UCWK4sf2PJ78Prizqv2HzR9EXrTqrj9tvwiUoy6Cn6Np8UZkZFeYznh2TkVM",
  "key7": "5gKNE8jvZUcr6bdnHu34csMj8H2HzF4ky3oJmKhtwrqmV8QFPBKVd3bWLkuVZjaMzDwd7jd8TyVKoTAUjZkWKWmS",
  "key8": "4eT3vwXAcusgzyWZef8uLUPtRR4ymogHmqUa7vkQwNfwuWQd6hr91gznAjsb4UusKPeXe2M3fbFPdy2KbZ44yywf",
  "key9": "5uMakFgVQHpgGNJMvvWyrnPZTqCQxJvDPZnix6iNaBzGWCR6PJPbLRvbcr4vEUov3tvtMzKgjeBquX6kzxHgsPH1",
  "key10": "5aW3R6KNAMaMaziv6kZBuWq6ZdpW9HRSJsvq1BNKpvTFAYFBUCjDNtfCWXLZZSzyXkGKEkQ13wATVBVbbzshpeto",
  "key11": "4Us5A8LoNr4aoefzLiH89C4gr4fFBq5xK9pr2jdxLw1X2tyGFz2wZamyN1V1XbJGBPSDPxrXiukxCc4wDLrYgHuZ",
  "key12": "3VKnChegsyUUmW9auDT5bV5Ku8HRvtCBsr5LkmETfmYnZVhwQshttuQLrrd8D6fkmtezL9sh88sQ1n51Lqnae3hP",
  "key13": "24gGoeLxBTuEcf4gXNqeMBAqfgpiaxjYB64YMEPbfS86Mr7kGqpw5uaAKwJstJM87wugxdYosRfuUXx2RjTjveuZ",
  "key14": "2yjurcKhEjZZqhcrT6vu1Kc12oPzJVtPXNaYmnq36Z5fZweBGEwLvExqqr4UyVbj2hs1T7b4JjTQPoCPa5ST3AjA",
  "key15": "22PVXWUaX2qvSyLwJ18a59sHJKAFuWxjbSjCXuPWBsGTmtGKogfcUrjKs1r78XMMmGfuRjcJfMJnudD6yvsHtqUJ",
  "key16": "4zCmGAiToBYvh2EefXPMqfNvL4urJwzcovrhDvDmUu3NU2cySvkSUmahroesxTFoVov1oF7tyTdefYyubA5wuWJJ",
  "key17": "29Wv643HCtc2gVcGDpKAnZx57jnotx7baDCPHmuvvbLgCXtXTGDvtVGvFrCDDD9U4GiTMw4ATvRhSAhaPFnGx71n",
  "key18": "iM18iqbgfFgcgWbTtnhxckV9FamU6tXG8XemM4cfXkDtKSJEkxKDxPdQ6fbA5FPZVZxEXjnuacjQ31AUQW7hmeg",
  "key19": "4o3d4Vn9cTVTMN8Gwdjs8Fv3WXU3Qytk34wYKG8X8SghBUZFGaberLHLBxwJ4zwAvZY3ZxdVrqC33t48taujf8QS",
  "key20": "cGT2nmTymiB2Vk6pse2yMKXChaydBFGJqjANnE3LAXfhbG13vrxFbKT83V4duYL2KbnM5hMiNfCHJuH7t2LsLYS",
  "key21": "5ffgFrAmDh3xbXebAw3ZgfxeXobLeEByb47osYv2SP3k6YDnP9xpiCadkknEMhUx41tuxVe2qNDzeNwZznmJWNYX",
  "key22": "4sjufPDys2UutuFiHNtw3fR4P5DBNfX26U44FAPTkcrUcxn4irY2XqcBtmftYfSYhdww2AGnncwu2nLs2puVvghy",
  "key23": "5ERP4oiRw2SnzaFGYBT77BCMhCW9PMAcKTjUMMVvuTUjGgmkxBLADoVScTUWvnfTt8TAkoTy2FrZJaTnTqzQJWs2",
  "key24": "34USSHCS2DWnAQUmJHSHfnXMJBHT4z7AXUKnmLWUJEeJToH82ZqrKMmgpecQ83dVdpoi9CEeqRDJUvBuynWMropK",
  "key25": "uJxiMfbprn1WZjaZdtUi5cpn4AerHX8uG3yg5tsgD2yuSjsojab8njhkmyhpyDaarVKEfugiHTujm3euouUjX17",
  "key26": "64Cw21LDqrxhhGX7BMReUgi9BDoQebd9eKW2MV2muSEgDQjvuZCUJhMBAGSPYTAPzfK8GbB5E44cwtTstBN9G8bC",
  "key27": "2g3iQcUvXe86V1P9s7qRmEDcFTkVTpLjQcQmak5qHDgWFttnZCu15wGDtmUy8PU42JafLYkeanPTPPqQzotzkpxS",
  "key28": "64mppVZufaQenZ4BRi8TqoSwrfdUzKL9mrdQZdTyW3DaEPf3dGGUEF4h6pT9c9j3BGTf9LNswDZiu1C6jG6yVSZ",
  "key29": "5QrfFgSmL4hkTdM6jEh5N6nFb95C6B9HXGTAX5mgEQCYQN4n6DkHnmLdyUUf16CkojiA2rE1KcL3Ns2b2PqeAJRz",
  "key30": "5pvZhbb9MGRvK3czoZnynxTTxaiNRrwqa6n2UdnQxNh9bZKxxNmy342i47arYgHXcMhYRAdtai1kCybaxmMzKYoU",
  "key31": "3o9R3bumavJh5GRfu86a8iHoAdKA1WZNxVfEtKg8o6NSXyYwhkC5zCMwpTf8JcSSK3u1xsQzHHS6N7C2VJ9FbmBR",
  "key32": "3xCctvhZ9LDdWebYfUnVp6LtXnDRcHgXJLXAZf9sDYxPQK4QkVzUx3NHQEDdzJGryvg8NWhCzbEr6aj7mBdWPdnx",
  "key33": "4RhMBhLGDTczJQv2j6zpitKqYXVYQemGFk2eYtFxJBmXP5nnA5qpkiUG3s9brcXF8rmDupQJwpuQgSCKHq87N7DU",
  "key34": "2cvjymzhMHA1E5WE8iG1X4wfu1gEu7kSxAfpRoZQA7CjX1f838tpCV1oNtCkEd2DAo7BLuLJVCkk2UXBcuZ54YKF",
  "key35": "3eXsYHSfYr6yoC7DLzBD15p3QAZ8CFhZgBmsCCbPQs77gxhYSSxCxXPJhHb8AcEqt8LsqZHBdNuaAJvoXkRH23Qs"
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
