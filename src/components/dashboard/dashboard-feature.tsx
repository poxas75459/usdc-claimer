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
    "swzDQSWmoG95jukuhbdYusEkyUYti2ZgAetX1MWMJe1Nd2bdyHe6jS11TFd6EeUCNLJNhTEsicX8n3t8ickXvWS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FpZN1yEpn2XxFMNeebdX3ujcyjyQyPvDmXwSpUv7yWsvRqZwRcmJApGX1UxftcXdScLsLjUHWwitYhh3phWKZmV",
  "key1": "SFJuGNbyvS754DoSNjhL2NrU4LZ5RwHfShedqJjsmVaJ5UdgZKq8D28jBNoMZbzekBUPbWz7UMr9DVgEdeV11J7",
  "key2": "EZ5FLTBM95RehBKxNS2wMVMmiCRtjV6E75FypTfzrpwdmdECKH5kAtdAMSBognixTEecve2maM2FH6J9QtCCUyV",
  "key3": "5rwmHfQKM4jR3nKsNi6mUiYff7rxsd6VKFjMhMkCYmMhYJ6vWUV6Lofy8DxKVU9p6njB7ns63AvJKQNZ2vKmHbZn",
  "key4": "36pRgmTVXuARby4fdb8UGr27mAMXtvTWcyj22rjo21UUQhY81Npw4mK7PWhXzsga17vCE6HKRSJztJTudym9sU1p",
  "key5": "2EYdJhXxafa1StwZq4sk5fXLLMM1S3G3tnDLAaEV9KhpnwmpssX84bCJt8t9KKTrCiV2iYPAmcqUUTa8BwuAUUEp",
  "key6": "4BxE7R85ybcUXGZk3yvAoGewTZihiURVSEQsPuKxr6X1a42WmkYf5bDPAh9RGauBDPmZtLeDiWa6E1irrhYv6rs6",
  "key7": "2iAMf8BYDdLttqrqM2kHcgcHavrHqvGhrnbRFfee6taUgQVE7jAvNCpEbukodSiEMkjPKfuJ53KvEvUEbQ4LjoAT",
  "key8": "5Fzf6kUAsZUPp1JwLQfvcNXHnhvxxNM6YkWLPY4XsEtdwznJZbsoNXbnwyMRN4RYKF7yJcYz41XjwujiT3N2Lwkm",
  "key9": "5Bc8aXasvLPVN7Wa3x8LHfThYrcdyqYdF94UW6gqAYRDaQfyCuD8T7sK9ex5cwaRt3uk5YkwXx1UYKZCKCQWeReh",
  "key10": "BTeLJfAUVSgVba74xHjKKaFG1z7rf7UT9EawveZZhJyio2uQSV5nRGqtXUJB6w9Ga8hPFYk9b59DYScxQtG6Ayx",
  "key11": "44qePA5vW95T5uhsF4WkPgPKcTcqQyjc1c9PQaiTLuMLvKY7gVfWUsYYqmnGAgBAVDaPgwbLUHSQq6EuB2EMYWCB",
  "key12": "2PEnhoXfwmvPYeq7HYVzt5AafWPCYHSq7HRNLaBRxVfaP2TVCoxTJJgSrZKNmGRvQXwaWwG7n9TAt9V3fBwGEyFs",
  "key13": "61RzmQpPYpJYhrfeV5tiar2AH7ZYj2PALeRaByisBeqEcXvGJQ298JCdhdDjGF7bQ9baLsYnVpBaoQUCQsp9wqDp",
  "key14": "2cDWh1PMmTKZBuEZZP2Rcbr9hKT6WjoEo61e9wGy2Nzh4BSyhEqufEDJ4nNag7QAbrprwSJj1rx9iKwmPtmWYwx9",
  "key15": "4RqueyQnVXpHSfkbcJ76zDRDxPgeoW3Mvefxyx7nFyCdP7wRSCPXgYshiguurCcQiJcEJAG3Ft1JAii3xnbp4rgG",
  "key16": "4ibjRQadNHbh83Y5aBQPmvXtjWCdk52ee9CbtemSWFfQi5WtxtPi2N4dWE1CQHQ4hPz2yZzsX2ofHwipbtNAmUrU",
  "key17": "CTiXeRaPiTaUGAeRCjfo4hs7qGEd7Vpvep9zziXLVgMYVeDRE8nwy3PbqBv7FBsV4Ne86jLsV6scFjmaRnMZm5r",
  "key18": "4uic8jeutMGEoNjifdJ2T5EG7GM119PoHzTPDd71E6EthVKcdSJV8hg15AhgWGLNqJayJaWbSAQuBWyUpQHZVSNJ",
  "key19": "4Fg7M1zGHBAmoBJqeYUw2Jgamkaayzy6qSP9x7MdTDcYhQqFHaXDntCPCeRYmk2TeDVmgNn8Y96cx3VbBvoMRDZX",
  "key20": "23SvmbLy4TLvYx6PyAosgRuuwccm6HFncLhiiAPDr4keLXvyv9nSSComYc3BSqwPpSsA9UDV6izAojYEWaFHwjF7",
  "key21": "4LVGtjJqqoAsq7AH8EjCoorcb7Y1XQ5XtADkNLdL4KUDg47TGaH2vKJdgo4BztXNPARH5ygQ7qT1umC3H1WtZ5Ue",
  "key22": "5eXMppzDpy9fxhS6rqmrwZ9kEXshunAPXFiQNhUFwv8YWU3315RvNuUQxoAYRaRP11ykNxWk3yTQDpVyZ1hdW9s2",
  "key23": "44y2hUs5DfKNzjfMtzL6CzBCXi7isSCStBdTUcLr9knGbkN9vwTDsbQ1qduw12nnKn1cyWaNaLmp7uJLCfRvZtrz",
  "key24": "2W3B8hzXD4EDNnrxr5F5RmdVCa6Ws7kpgWshbb8G2SFADw2nk4b55b2aKHBJRuMYJEvexrax8BVjt27B3KA1Zfp",
  "key25": "4UHLv3UkLuHDpMPhzqvUjFrEefSErXHVM6gv2YKa1VeJhvDFWFzyZ4oJrAJ6r4wXqQHYAS7iX9fZRHYCA7DBXAiF",
  "key26": "Wit3g9oDWpGNHcLVMYs5KRB8xoE5Vgw4px71zxDbD5ewWApKVho9Jxf9WhziswUTgk3kHKBxgiu6xsy2d98KRmh",
  "key27": "53x7yMDYwKoXHdHZss8ENDKD2ee4FqweAApLiuDujzmp6QZ2LE4jnSpTYkhWrqMGh2Cis2YscTFoiR1WHuxCwiWY",
  "key28": "zg3dvf8SQw8TmKex7FYuUXxZYBGEwDr37MWAu3sybU3TU8Csjfi5GMzmziZUuRk6vH4ocqjYjhcR8vxmQv1QhkX",
  "key29": "3FPKaDxuuvs5VL3F7E9QEw6cCyDJRazEVAKuH2C61CNSyMkccZ2U2SF4e1NtXhKfFLgfCP6B1HW7ptJr5fUxZMs",
  "key30": "rbsDF5hjNHXAMWq9Sj7Pf1DFNPB46BBzKQEyTdstrcrEbz6GAagsymhJEudyUurErQf84rQJWNpAnmfJvKV2tmX"
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
