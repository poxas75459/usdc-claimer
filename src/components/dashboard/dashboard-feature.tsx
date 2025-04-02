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
    "U5Q8wYx5UDv2aS85FqR8fQPqZY734u8PmMCRHPpPRCntoH4yeTiSiWmoGqaZs4mcrrhiq8AqWSqZy6tAhH6KkGL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gFNSgGQGHUb1ZqhoN5EJoi6VjMvWguuAYbuuqbBv7JduZ9rF1yvgovdqoTKknQUUM49jTsVp2MLKTxZtaGiUNod",
  "key1": "m34meKqKZLxGcTy3kE6M69pd33FPr9Gn2UcMFv2PrYYneUBv3XE3A1gf5PMUf6u8mF1ezYr3yBGpXHoZhwBwXxQ",
  "key2": "3g5CMSwBrhjsFbAHfLKLRLxPyAtVbGvjJwmw9qRJ63DKT19wuxDrnFDY7bFhYaY6kAMgTAM53zbjc9awhn9oJ8vd",
  "key3": "4hkijLBq8QhJmF53vPorbBVFExqLzw4dNXNZ5P5QXVqfWiCaW8PaNPdsD4zvfFR2udsBUNCqbtG1xXK5LnqfQeum",
  "key4": "5F3L2KoMBxyBVakrhSF5mrLj8pCd23LyAmPVZbJkHZaQUjs2d5RnxtFZu81AFGwCMrhmXHFKdpVtBiJHnp8PQBNK",
  "key5": "nPzT5go6nBfjMLP8VSLsTDjrxkP5wVHwQ7xEaCWX9YXxgJGb2GVMSTv25eecdchR1Fnha59uLypM55XqywCYngq",
  "key6": "2aGQEsmtucrhXWtnE2hesnxG3DVMLCWqxAztPnVWyUZiMNHDY588McKc2AtTx4Hpf97Rods1GPcZYPdzmm9RPHnk",
  "key7": "4UkUcCgdSPq8cbmim6PcaseSHuqG7n5gihHpWDuyJGtJyHGK8iytBJkydaex1rspe1uQXgaxL9MvgunHamn2T6qv",
  "key8": "2igADbPQQz6zjoJfqGoNybpwpV56h7s6toGMtmEZ8V2PQ7NRaHgaaZdSMVL48tsJsRLsJsK3wxjTjdtWjzBRfiYp",
  "key9": "23o4WMeZH971ivto39xxDWQJpN9VnKCsCHpYduEKHkchAdoe6MiWaGkKQEK7CgrNvK69zavFP6P1X2vGd4AEyP1M",
  "key10": "3KRo2RTHAQDjkCGQpFo2B7UmCnL71hD3zn6QLWR6VyNPnRQ6keEfJ7GVVMVdFMrkE8JcyzVP1QAmB2YrPvVuAh19",
  "key11": "3KJPAfBLVLXC6KUX9hhvoNJiYdHAnrBRG34RQ4vdaDC126NtQjVQhmwuqDcxVDsiR9TGV54uzsK3EgVzkRbRWZvY",
  "key12": "3aDjqVQrm7jfMSggrPnYByUdXzVGARYhZK5KHGecvv6JVVTn3q3eawyLgeqzqwNvRViWQ3YhF8RKkSNwD1AtusXF",
  "key13": "2UmsJLgvL5bJT4mGjU5xu3gsXkyN4JQSAgNKQr6iM6WvQcxYtJuXibTjEjRGBUU4sdAmQohJugASo1DMy9MLXn6G",
  "key14": "JtqqZhZQuyv5CeCCKc1ie5SC2xueQVBufqU5rPEw16CZ4AFsidajLTCxJdAKSoWVGpHRP6fVG1iaDYdCAhqLgF7",
  "key15": "3Sr6LNLVacTquE2P7N4cEy7YYW6pu5bCGhJiLoTdcQEB5fhvZY551APp4TkqvoabGpzDeeZrZHxem7VvKhMT26Vy",
  "key16": "tCeLxLuewNro8oqDTwuU9UMh8wn1YrFb7NX9r3tWPWnbwLciWfbg7iaGQeR3ttL32Aa5PyEeqceen5dcQrE1r53",
  "key17": "T4t4qay3srqWcm8Upr3ZQuXkqwrbLkhCugSuEcnohSsgnk4jHQ6byRW58836dXmZ9S7nuR6HpmZc5ZbprcfmGCP",
  "key18": "3YoyjP9PiDpDjHMcTvBq2CAdUn1UXtiHqY6XdqQDYbfnj7xmxAFP1vf75erw7aJDUZgcpVake6Jp6FKUQqs69MvE",
  "key19": "4ZXrHcRkDsX4zguEP1zj9MPwQirgemoEUnahg2foJYtQPjxxP3o61kyCSGzD8CqLkHmCijEqG4uphaewoSNRn2xa",
  "key20": "44sSWGfs9ZsNHmTVCi8jdWAjhDavtm9aJaHVqNbdn9y2AZ2XAE2xZhUvAGJyaGrtbF1zrea3LwutYkn3Xn1VVxGN",
  "key21": "5VCXvko6qVZrAXr84PgjVdPsc2cxJ4g5VCcKNTyKgdYtrd3YoWLundDqUU1Xiu4BbsTBwRG4H1QkPcQEsoed8Nmu",
  "key22": "2rqPHcXuHXRFQCwz3tviqDH82td25tgdfULiDD5zMSBch6f7TzizaQCktg3u357D7YCWWbbfvCngYjJvjZZdq98X",
  "key23": "2c3rRRTuWYkEqK56QSgkmukqBGU3Tfpe2eGfQ79sUon9RBVwkk9vvRYNV1FnjeWxb6LAmVrdi9VPcJhTynAkuNci",
  "key24": "2CfezrHkVxqHcKVqKKStNxDBmJzrYHtVod4LH8eSgoaU3weaYKTDnHKZsG6sXMA4LqM37murpxZBMc87Rcu3P5oc",
  "key25": "3mVNdrP7TiafkrANm1Zy1AgmngXwVPyFs4bq9AdkBtfEDxN19fC4bYV4pptYjnAHuJKxBwuEDj8Y8KDbCwSaokFz",
  "key26": "3uJFvAdzUs8pFy849gzkxcGPSqRY9sAwiM2rFvzKPWTGZBqBXKuwbFLbyWicAkgqnTY4KJmQt1uXUjYPPcxGWNE3",
  "key27": "Xo4ojAfvDy34Vkfvomm31RTJuqNh8xxZ7fSZPx4xdzo5KGCYBBe6SHohqnZ24tyHA3DFbpmrTe7WQ4UEPnKZAn3",
  "key28": "2WWAgnYzkrftMJtZUcZkWz8YZpG4Gq2CTyBUDpvD4Ee6ZV61HstEVFBXRPUqdXHqQyC1q76jNJCVaXvN4hzJ2B6t",
  "key29": "46qG7VBMQNPVskTJtBzM2a4YNuyEAGsimoEVaXKccv6FS814LVkiGdfNFoWKGXkAZCjFyV1hTuQ7hCpucm6oXdAp"
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
