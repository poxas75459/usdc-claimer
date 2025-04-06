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
    "4xj5S6YvCjXTk2WXyaznA8WyyB17cWhU886aTQL1RoKK1kVsshFmw5LhkYRr7ynE6MJtA5k79A6NV1PQGv4ViLcm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HvKpibNHAEAxcP9MC6kS6iz8Ct2eTDj6SjYh6zHzTWEHrKoNdxxiZwKtSfuDDo3Db1rbgPThBs9rD64248hrq29",
  "key1": "xoGPHLZjr2bym6rDcJW9XkaGB91yMtiXywnzNrPTw2JRbHPjVWZnpxHwmZ2wMFMAbHWcoXwvkCUCd43h1oR5L2m",
  "key2": "2J9WxgPANeY5gcUaeWigEtG6MxXBQvVrmK6yzWPYfNcqo8xBKdmS95P8aG8Ba5bXB2KRQnNEBxEUYNFkSqe2UvVv",
  "key3": "3tHUkWnyYZNvykVbXdvHNzvqrvtsZnYLf2Ajg8u4YBv5kD7ZdqvAjmu8BuoPv8CFjgZTqoyHwG6H3TqukDQNq9Hx",
  "key4": "2xT8wjs6baZsDiC4C8ZGsxvEtXtjN5bdQakA9aBh93uekaQ4qhJ9GG3K62aLgFWSxcvhYa6h8BHAyR5Qd4VPuWWJ",
  "key5": "3AQ6NXrfoftvwmj7VDBqkfoBB719nMTp9PVTD9v1JBGyaaRusriQg3obC4YaTeDNAUs9UDVpDmGtQ6WmeJBMe1U",
  "key6": "Sn1VuL8QSnZcFJ4655X32XDh7piJXmeAmsQPevqtYEz5QPL9tZ5eVjSEBNSTQ4yLhFoNHhW1Psts9QnWvutTLv8",
  "key7": "3LExkPN7y5YfUqreEjbmrmL85u7zuszXQJcYcAGDRfV8yzog7ibFHJ72JGfJDDhd2PQ1vjkq1nDT6nFVKBWiivFZ",
  "key8": "46GTYAuT1yrUchQwdrZBy7br4dSikfcdpqJoQHs2F8zVyN8rxHcGZesVAFMrTRZWmKsSCBg1gJFis4ALrXGCBfao",
  "key9": "34gpDZW5dEtGuCeyzxuvy163XSCRdDxLsUwbQRDvuBSjqAG2JMHR5tGqj1AxWUMM2wLAEZxWpAPX5XN65HSDT6gT",
  "key10": "4SRRMGc8TuV3MUTAQT4XtcRWydvtZpwaf78f7QFSZsgGQdh8AzvEWkCh9UJQ3h56JWj2hRykHYTKEHFZQ9eAy17P",
  "key11": "4J1NUrx6a6rGvrzdqsaDGoAqmsJ6M64c3qMfcYARTF7Dat2ZGmjeHc5cYiejjsxSDf2tPanYjGw5eS3Qo19Y5jv3",
  "key12": "3ujWG1gx9W5FwbxGM7fd6dqQB68gWTjc2ewzLkDeVwSVAM7waaJhmTHc76Nc6BTmjYAZExSCdYoMrueD8cTUfGB9",
  "key13": "52yq7fvvJE4aGEvYXqun5TRxvEWCi8akjWao8tRqVHK8waaHxNNE9kCNqB6XZHsbDYzvBLENohkCv2hW1wc5MWWJ",
  "key14": "3QJWsCvVB368NgdFYKoYyH9s3X4m6KGezoLV2S6i7udjSa4HJ2meaivifvszsu98jEQ5CCP2x9YFZ56u1fNvpTXc",
  "key15": "2NfMD6wjLTyfxEo1mAdomQEqBn1mLUkUYiUffSnVdSWjYpSiQxqqGiBH2MfUR9cWCeBhoMfJsPy2KbK9fD4ud28d",
  "key16": "3bT9giB7Vumzx324kvYCLT6jCXbonDd2bMPTuG72JoGHVh2kScsXt2jAFVXeUKfca1yWvoo3qih5ATJ8Gv6T1P6X",
  "key17": "gKVegtHzsuaP99D656Ux2as9hHFBrDx42E98rapcSeTAsbGYDNzepnNpe4L1R83CH3sDYnm9JdpeEb2UnJJUzMh",
  "key18": "3sxcoQuDDb6a1EYVmkSRii3ASeyhHzWc2fGsS9wgUVD64gQAdtt3u4LrSiRecSWhwrEMn8SBXroXeun4LfYCrCKy",
  "key19": "5TKihXwc598F7qoCuYFh8oZuakbQxG5kRsALKH5CJ5SoSh6ZdThcapR4ZD8ZxJtkibjxQT5Tbk5dwDPuoxT6omj",
  "key20": "3hxXZuRM6dsbR7XddLAQuVG2thrBHQy5AaUFfVVbpckYNkh3gDraHEzsLZJ59QSL8zm7cv8P9BtSYzo7hgPADtK",
  "key21": "4DECCvkVj7wGNAdyP2bHLWsHvkyiFMZdCBPWyu6xbgs6VXp4vCWcAaoogZcFgN2JPocLhiNUXrr9zHAGRG8dzvFU",
  "key22": "4t4dsj8iDQpC8NZLZybUMucKWVggmVto2oxB3214spa9m9Y5esPy2MU1BxLYWzqUPzgQJRL6a8HjwgRho1Hq5cQA",
  "key23": "3Expj94uFDCkPXJSmqgmD1pgAW8dkrJFaTdjhd8bZp4fDcSkTjghjcZRKYsFxZpq6GqvwBVgZb4JF4UkDH2kT7cz",
  "key24": "4MWBNSq3qPqumKgJGGM4pKbV9xocGi1mpSfL4eadVdc15BspKwuYFFbaS61z3vLSbri6Pp7CyaYzKauAJ4oinWEy",
  "key25": "5dqb3USvGeGDFzsRuNdPsHVewLbgYcoLWHz2DQNTrLYumjdjzT3xwawv3qeQk37f4Jy2sGGMAexnbAZa47vzcLdq",
  "key26": "3up3MRvmc6hnX7HD3FcAw3vhBfdAVat4mfAjv2z2tY7WMH9EHC4JaZYRX1G98XAnjgwoociimHmZZNEJG9AXve8H",
  "key27": "XitnbnTyL8995Ee3v1H1eVUG3PEfa5Lu9efoa7nCNu4bAwseKQShLE1HDheYrtnSbFBLiDqZMrW7KgCKdgNniAA",
  "key28": "4BBERww8RuQ5dcXRk42YuymEN926D1k3HkbJthk6KhZHko7CjZgHjEKcfZ1jTHcQ8gqNYaufQFAMdSrxCqmJYxUf",
  "key29": "3cHF9YTL7ELynfwFkj66fczVAxfteNQUErwcoW3EXpVmKmNe3dSgUmqQY8nAW514hqYiu41oBqmziTEfL5JrNyFu",
  "key30": "5fmmV9badQ5gm9jLYnocqSAvqJ1bWimByVFbfV3tqtLxN4LJhQ2y9dio53wSGfmFRriAaH2zHZB1UnwY7ptEPh34",
  "key31": "4BvX39ZiH6VR7Q2jFaAZgEzC12RQRJ32yFbGNAH2BUQCT8PZtdZ2bkwKYmLbaGsSDqBKoZ7VeCJCDTS4jUppWV2s",
  "key32": "4mKsWCfu9c7NhFKogn3YGcvzLSQirfE2PKM7om5Y7AzwXmN1v4Ry6iw9SHoAVFttPjGXquWgWcrLaZBbhf1g9Vti",
  "key33": "2439PL2jnrqwdNsNeSqQT8WeiRQjrL41anykBFGzmRi3AZF6UJFGrjT7si8PTUzHoX3FW5kTQpViv7afo33HF27r",
  "key34": "4VC64C7GMf5UqzS2jcZ6mfvbgpuZgFFhrqftQkSJtQbXbuGLirGW5fYg8xYmJomVps4r8xTgfpXpHf2X1zHmtAjb",
  "key35": "FtFnvNBgKmZP1Hk2a4iDPdh8zLRbMXFvNRf9TQe9s2SbxqsXmNHPn9x169ogEirmEqyUo749LhXepiL1s7ZFiCi",
  "key36": "5QpJrhE2cMd9FrPSJM9ufukMLp6ucgbkunG8tuuiLqYc7VJtK6v8d3qLvGcSXxaTjCmUqK792hJabqF8AMiWHsCN",
  "key37": "2bSzPDfohS8RLVhKjX6rQiTcUCy7Lvd7R85wdsMbmeSkBnVomCZwjD4qgNZkvg3Cak6iEtfBYmoK5UDqXJHCF8uh",
  "key38": "ZJuUm4JKESrRNoxy4LCasSUxf2USMWxUK4thA6K9PmWk89HfYVuerMZ3xxWVJV8UFFfFNzzNQitMmEsonFUwSxs",
  "key39": "4ka6mko5R8nk6DPCwwXpUcJGDTbKGB65p796KTrqY6Qwa5xVDSLm4BPAn4X4SECe4osbuTWtTdJ1CKtRSSVL92dt",
  "key40": "hfcdv7m12o2J7jy6TuTuigVYMS2TTrp46RF6JRECN3Y4Ga6TKPzKcxuEDNFv8T11WHNfDmLq62Z1jE3uhidzZH1",
  "key41": "3pWGKaTiLLyFEsizuD7eiBiPRrCbmWzz9yLFyTgviqSCWPgfZbpv2YzzQFuYw8ZZqXYLQwrXiNtoQ5zKJueF1EKm",
  "key42": "5NKeUg2zw8uB1bebc2ujU7rg6x7uvJMaMzZBM9STPnK2qb8xLYUBcPN679pR9w311RZXkvuCnzE4eYTMDpck3CRD",
  "key43": "61Rftv4fHGCjusgsTmQ3HPYAwyLB7cqbimLc54xwssrvyyiZvqqJVqYPaujqYS6SiSDgC7y1THXXditUkwoo7MEG",
  "key44": "3i2TtCZnbMhNgyUfoRUoLJ48ov79AuYEGvFZgdqKhSZR1iWUgEcwvF6VdHftGdz8UbPLcecnCbZrXr9HkjmenMxr",
  "key45": "ZRhP7XtCJcvrZAYJoWtnrc9fqcPTJqt5Q8iFicmZEEmSsFj5szjEedoPipTVUoodm5MfVM6de3AvKpS16pHCwSM",
  "key46": "5kVhKMjsY4hzhYzTk4xgpUCoCjNW7XRxiDnb1mgjXAtAoXAXCbLVomtNAZv7iPAraM6bvCXY9TYPhMR5TwHzuqPL"
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
