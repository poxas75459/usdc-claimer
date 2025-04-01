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
    "ony1ZT5PifM2SKsEsdA8BNL3BmVmhCowNsUHmn1YF6dmH3j3QVJK5NfBse7bWcH1sYNR9UiHYpwe82bdS78jFTf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4efKhpf2RDd4WJexSDvycjusgRJ5B7LdaJbMnes2sNzCfyAbpyEPHKZPWZHYR1cQrFij4DPG77VgUiQXJyYr3BPf",
  "key1": "3UxW3dzZGaQ3kkpY6Hb1Np7o4p6ZsYWc1eEsFxbtgFYMy4QnjPpgcxKP4vcnsh25feGTwhFDhcN9sATMFjUXP6n",
  "key2": "5PYAYSywFSjLRiPVbu6CesL2pKt9fukS22p2fVESY6exzyA4X6YaV9ixf3qmT6fjDmBkY7wRXWHXSu1JNNRGqKv8",
  "key3": "oygPjUrTBfevFtZ1o7GsF3CkRXsBAi6TwCBu9PgUMRi5ipGhGG6LAZ3UZjWp7e2ek6dyStdbCcJqUmdLhNNvrD5",
  "key4": "4PE1UrsYKv39H3kJ8aUZWG8zH7G9fHuSQx9aPUVWjKPoEUihhBoAGYi9JGPNNcvhiPyTyGQaMppknLErim9gUdkL",
  "key5": "67B6UHr2rcUSiD1r7QMurvYNkDKebZ2fGqTaywmYYELYa6Na1GRdq6yZh9NYbrEDpzLxxGPUi1zkWhHqoeeuzGFg",
  "key6": "3jmvtRjv9SDWCDryrSby8LG2DhhZCRSV1bph7hQckNU4Gj3kBGgQ73yTpbp9Xtrd217GkxKcr9wEt7HYuJBoK6Wk",
  "key7": "22mNfAxdjimSosHH5Vfay2t8G24fGBjnutLmSUbgKqtmZ1wnphAHknPwYj6tf8p2uRAVyBpfrcqG9wrBf7vUAamv",
  "key8": "52dJAFiUevDAvdkXJLyEapEg3hqkaXKYBRUAA4dejC8U4YKmWNDshAPsFJJVApoJ26csZyL8YFvgMDjvUUfnw2s5",
  "key9": "3ZvWPmQEFKPyNgzxaggBJogKhiayBaCzsEUcm9xVKECWFHgqX6rf4uCTvTs5CDigoejDqiZGY9JjFpnukdF2JKS4",
  "key10": "5UMgAVdd1NG85y3vhyay4eToxbSeUaXzqQhPWyciLGY1RXPb9RpoMB6bm39aUWkUpLnHfBn1hz3LprWSXxZroxDE",
  "key11": "4DmbaCJoZZw7r24erN3jaKKMP9wQzzimhtCXwGemzPYyhvkDkSZm3usSVkN9EJCj7ZvcVrGJ7M7aFv1iFLfPi5sq",
  "key12": "2JwsnGuhoz7uCZBdRFEcok2hPQUqSKmmdZswffuDBXvmV5Q9qGmpLV4XqYCk1bQse5i2VtcE8nH6QJZgJ2MH6VLS",
  "key13": "3zDkX2PPNFRHHkUe8E4HPfrmPNE6rsLKsKi29gNrmmo32R7uZRf5mv9RW8sHzETWVU3ZckGNJdPqbSrFW6rURciD",
  "key14": "5EvkngFKp6NywFkVikySgRRHbQiTRXBxMNMQvNEDiJCziUfxBb4VF4ezbtyg1vmiGzmAxy78nKMt65zxRFDqn8fr",
  "key15": "32x7Fc5fjZheV9kYXFw3Nk74s287Jfh2DJ4DB19FZ6dif3qShyMUkHcDVBHunAFYvHndvw82bUkiULjTmSerR4y",
  "key16": "2EiCwT2ZhqTQkTE5aX25eqvFENtjeu6z4w9JRjPj2GahhcVMPHWhuzEgGi1PLnsUhehFgFbtr5r1JMpPpexnjNx4",
  "key17": "5i4K7oe61THMbnVRtB65CYjD7edxryu56GJjY3yBTMQQSrDbxj2eVDJGaTarUSU54jcy361KQx7oRZLsoeEyHR1R",
  "key18": "3MgE26746qKm7P2TELMsnsbPbRjJjd6qPt8A5Vhaa6U5fQyE1KHUHSCbHAiiwpQpBNn4HrLYRFYqx17LC8PuGuQc",
  "key19": "hYQgufAjHWtsDJiGNxEZTDxZ26av4Z4k7nRGxHnrysihU5xhPvUWF2FCR85EUNGXDUyAXgxsTF8m9gDVeoZ8ZjZ",
  "key20": "2nAwiSQZWtGu1hV3DGLnJTv3RnkZNnyrVgZFs7788fJaT7M4z3FdZu7eNqZ4w8sjJTV82kEP1dAEQSra5532q7V2",
  "key21": "o935yeLobkRbb9RhKu7GJgmDPjMzxToPgGuUYSSgXJZdxUeotoc1UQjWVcXuX6QoN6Y7b9YJXLDYJGrVARK4xbT",
  "key22": "2CoLcy1noCQpU9aXF9jTp5n2YgCYRfCABi5aHrsvpLV6XmGVrNKkcYtuKbApgrxCCzfnBNxh3qNjPsKjPFtp64wE",
  "key23": "245xL1Zb2KXPtyq5LrdW5HhmQSptXjNPNCz1Q6U9BzisnrdkQAtdZpVsT1ywx4iL8XGYeSCrLBPe1fPkFzkVhjNH",
  "key24": "dqCChpmmMyyoqzCNk4uDdT97o1pmzw55Kj4ezYmL1KsnNjGWh87Gf7PTU9LcVkWCS4gtwfDVeAYt3ZPe4fM2FPY",
  "key25": "4UAfmn6du2N3qxyzYdeBXVzoAwg2s7JbAi6wZw35qsRy68fkfM15D5RvQNWgXhiZb5FE3XeGmhszzH4bAW8czzw9",
  "key26": "2FGUB8WFPTFDNw9Nx9TCWhFMz8BRtk2TaWhF21Ea1JXaMSgmEt3sFkMZupK4BQfLC1b26EbcaosVNb6zvSXymSZw",
  "key27": "35LBMECq6ksxubkVdtRmhfjL7y6iVDCNsvSs3aTTpoMto3NAzsezfBEtmNaUsZMhNQ1nXEhc4WDsHuXMq4UfdTih",
  "key28": "52qhUCxw4aJnv4o9muLCLh1g2v78yXcZXTP3GgZPVdqP6RRa64zHj8eFgUd7Gp7g9CkiubsuBXhqSFwLMAvxRxa8",
  "key29": "4PiQSG9LFb4uq5C14rcWRDeUvVzq8xDAaggbNqHkxm9yEKhSn5uwcMGiWHjhVo1N9tHtGYX9h8KSNp6sEFDpP3gi",
  "key30": "25PjmcmFgRsH5RFTmSDjdQQeAaXSat5PQvne1yXookPPn4uUTdurLv81o73x6kUDWaxr1jTk6p6qzppaPx9DRuxt"
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
