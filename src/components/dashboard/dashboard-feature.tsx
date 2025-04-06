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
    "2ph2PHS24jeipN8PpfG1ta55mJ4DfpvWFeGsWgjFG1Ysp8TDcPZRd8qCnzKZPerFvvgANnJ9HZGsrckk9C6FEeL7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V5JGWsyW5Ufxbjgr42NcrAaHBhBrd1KEwoHsVdYMdfSisVTfa9oK1D9oNpUWKDgkLv2k8Nmg1wNmqnQiMD7cuop",
  "key1": "awqxwC4jKM4Y8FEwuudfWhEofoCbeQjxbYa1KitpZN38qgNeNogS79xUosXSP4SoGJvBznUAiVCu68Q97zQ5QJK",
  "key2": "5AEaZ6vyG8pbqmkjzmN5TpkLjdNFcd2UuNGJeLP1Qdd4Y92xAk7ZXryZtYYgFqgxxeGg2zH2ZEGSnXJFkVR4jmcx",
  "key3": "2QBTxHBv6BPQHo1WpAARMSsjTnmHrzeT6Lp1jR1aXTZxEkdVNVL3pBzvqhEENxH6g1FXQPNm3pqVcfujjZJBinq8",
  "key4": "2ZKc1zNJUwSVViQ4deZUg5Myg4J3Gp43NftYH1FPxHwEjyVHpDvC7nhYuWdPHuBVwpfCvWsexT266JmTDFHQ4B8F",
  "key5": "65LtzE9U9TCUmhcwhMb4uB4bZfWK2VJ9AA9cATXaU9mKvpP3kMBFzoWHhjgsoVY8Ha7MTXPJwDtRvSCroySHUPxb",
  "key6": "2pNdLm3PhV6pTTxGNA2ukquhKicQyKYZmYwSFWy1SuWw4Qpo4TXjQ7o7cMatQc3GMubnTjVaeJwwbjAC24BVoiCK",
  "key7": "5uYz5aLg5H87L5DEd5uN84a4Zz1qsXqa9CziLXwoC2QR21fnw5WSyQivyJbHaLryvpkaC3Rdf66qHd3iqr5UKwUE",
  "key8": "5BhNK8vSRkhjeJDbuqSgtSvsERTf82Dp8FcXiYgfRG7DFjPbYhzRRBSQ7chBbQKM4ixji3yH8jyzJ94yowMC84ty",
  "key9": "3vPhd5McwoFNvrbpVGGwJQ8NZcDRtHNArQjipCWrQAunTvC3QMLUgCcTVbtxHoMwF8Mw8Gzt6eFfYCFcAVFDFWzY",
  "key10": "5d9z5bJ3i7PkRQw7owSr95v2VJPQPsHX7KQqazzdDazSeFEDiabC6k6QJBdd5nKuhD9MUa6DFST7eEHhYA7cbJhR",
  "key11": "xvrXwHpmRi1ZsP4nZKkxbAR7ea9ELuLMiJXYKWgTuDSfY7pHXiJJfuKGVsg8ggQs7n7CUWRMtwRq9HtnUAD7BGx",
  "key12": "3q6kLykDALKcQ85qw6BLSAJRVY4MGTnVwjWNbANXzbwdTEBBt2QSvN2uUTEYSohVCMLmh7FL75qJhm4Vd2BzjBFd",
  "key13": "F6sBeQaQ53DLiNRuHTFpzUBLs8MAzoyfKchAAdB5EAUy324VyTfpQ2eiv9PBuH5VSYhYu3NkZLG1t44B57Ctqvm",
  "key14": "3f1WhV7hkBaeZKbQ2CukrrggDWyipKRGVSTorpwuxp1XhQRrXvcXs8uF5pwXvohcbd9rNGoGLJuquhpYSbCP6wWm",
  "key15": "5FZjYoJHyFUX3y7oxqiKn4d6ezBny3PGp87EjxH341XQ28wmfxMyMu6sT7ndWaLMtvPk78NKfqLavf4MttrsJtxi",
  "key16": "wg4Z2mJ3jWaaGpwrKz6cJMLVzafaQapNgNiG3AZFYzRwrH8hyLPgsri9LMwWsD1a8CzcQGSWN3xy86ZZvxpDusp",
  "key17": "5mC7RTAPFEgUdTUGdCTLMCXujPfPZdvMS8oHsXWsp2o5e5sur7kJ8TAQtFacHmS264ZsK8PoMzZw98aoPDc3vquM",
  "key18": "2jaHM4VAVDjAXAD5dS18W7TSYFg9xYEn6sJUujHXtKBecQTnohiKJDhkbLiNJEKzYAwKRWzYKPzWBRkPW6Ey5zZk",
  "key19": "5SkwdHi3RHoesFBtHJVZw4YLGNgLBHVoBXRbR3Amr2uWehq2YReKbtfkuVmvWrWE2qbafsmQMXLVFf1Jf5WpfN6T",
  "key20": "5y5QyMoB5fkh16GxsGpfVFzXW1xPtYyT3G9cNmfiJMHiQDQrSFFX1kaivj2usjY6F3QzYi92Q1wJFEPwrEf7mwoW",
  "key21": "44q4WrZUieqmwWwPFsyv3ULAv11upFzAD6dZ4pAaNVyCtQPEF74V5LPNAU2SKoACcAQWYaz9eo38ejoTVpQGsmtw",
  "key22": "mPedewJqUZmg6VAmDQMW54j6JHViQKK4reefHffVgeV7ai7YQwdszdStLAHosfYrhs9ftavtxa4wv5p2DhbSdSW",
  "key23": "5cCWtmxcvANdjcdd6uXoXwSDFY2Nvfdj95Xv6BaVeY9tvkmiouekPymyNovgBxh4DNz9EiniooCzdqFHAJFS15Qb",
  "key24": "4qHZFuW3DhANQiNK83DV98u6jVEnrXhpni6aSUCsMcPGHEoiBMmNd8JhbSbJfRoD99vYPQMV32QUqk8E9vs2WFNA",
  "key25": "PDzBQVTAEn5ufzsB8NZawkahM78XHEnRsF5mX3CTDtsBfmBgT2tR6nSHN7ywm4SjezX3JPr1mphNWJFGCEzdN1e",
  "key26": "5XQfxcbHeFNgGzaGhsMjBPm563rY97gkJDN1yoaLZm2Ko94oXvofj94M8F2wCDYNQiieDhNivj7eiDV3XWTxZ9CE",
  "key27": "5K9PB2d3gsbZPVqmC1Z89h9zoSUC7akN8kzUvKbKa7g94YCFGMoTQi8DCs5KDRj31ytMwhiTyjWB5Bw9UxVEyKkr",
  "key28": "4qLQD2y78oVnrbnzCQCnX5nUH9heFpusTDXxHQwVxC7TL73XwgzRiW9EctVXgmLRvmwjamQQTYdrx4XeYv8rqbv1",
  "key29": "55ZgUq5AgbF8HYuH5Tu37wDHSRVjSJeAyZLoZVbeY69Bmyg8ykUk8VJUkmgzQGQZRBGV2GEKSwwTRwQH5LhvNJGP",
  "key30": "3bNNz39ZnYdfxvYDmPPYX4KPcPD9hY5J73Wv5KAbjBMdaBFnZw5QHEXKa5zbMgLCfMciZmRmdvYnJL1rouZAVSmj",
  "key31": "4D5WopTPwTCKnrvxjTJga4Za7bwFmhAjqeXNL8Hmvs9eHiEMs9BHqqYQeUgumBbWpPgzYZwzvU5KCK1ATHKDrqRv",
  "key32": "5gWnDhHi6r57S8ENfEo4duhZdMkD5Swkuhbcnh1KUqMNWm1vjq7BXqcxiYjWtWtCoBdkxTmAJ6GVWtcnzneLQo2M"
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
