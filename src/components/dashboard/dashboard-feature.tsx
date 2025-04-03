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
    "3RstSwCghn9aeEbDmViXvwj6TH8DoSEuWfFTKpwWYVjsfxMLaQ45d3CPVK4hg7oyMiB9UuFvN6uLrwmVPUZypTNy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BKY3PwSQAScB1q2jnHa1aXBMERgErkDVkGbExFk1u3oEcM3TGM4os7CE4cVU5S68KEPddcX6X9eQH8NJipFR93Y",
  "key1": "4XC2tN8eCkuEzBUQmVasqvDC7PRfvGGGGizbyGwUbWYnpf94fiupAmKdh6px2XmKo5xJ2K6tSYevHF5rSu5pkw1J",
  "key2": "3zoJbdDBTyDYtCcsDtTQgZq8sMZ9umNg2L3DrvbCSep9C1eKAPkQYuSvQAmNjFzt4yDEfRheL4LJboRqp1UriCuQ",
  "key3": "2cRGenrRrMVtBSCEGouQQ1xQVtfEoSCBrBbcTN8rYBqPzt7VRQyqqsN58vUMR6T28jnbE4PH1ePhQpU9A3hB8RwS",
  "key4": "2c7GyEvJLxZzcezu2mFGgjs4BBcAbi9LEL2KAwZ1zkkz9XgHVosKiRBKFyaWXKxJnEfy7pN2bECSYbpSJAymhMBA",
  "key5": "2x5tf8oQUjQ5CT3ccuiteiiuCD5igfY9xZ8NyySneVUPEWke3qzoPTnZfNeFLPmvovatchqxZTJUaNUBDTauUMAL",
  "key6": "49E2hNGB2Axy9nQMaZxt26U6Dj8j9LPNvw22M9W54VAY7sqAZCyt1ymh9nSyFs8AqrEJ3yXYTfiZ5u3CVzJGHHL2",
  "key7": "4tB9JdtaCSi2qygSCtbQv1xRsjbS6Uhr54XAULnyJD3uPFdfLszQ27xa9GMTpwnQSZ7VhmZAX6DDgv34RJ7fgwy",
  "key8": "etPtMoZg9zn3mpf33fmR84WPsK5NTXJnCxskfoLENfjUpXAQ2p5M1uan33keqSDkZN2NuMZ3dEiHEe9TUVgkx47",
  "key9": "4YiT4SSCjoRdMpsyZBUiQvRi7F4fsTY87XeR378uPFiY9Ckgd2HLJSsUhXToo6gqtEib3XYFwZ4dWogfYZGnRwMz",
  "key10": "2FmNXGmjuojzNPHqSFkywBzrEcmHsArmhpMW1NNjxvffCtC4PtuvoEjqqDC9nHtX4sQaZaboyHHkYorvvTZqLxCy",
  "key11": "5bwwivg9H9AxNHDbYGqZXEozo6ZsYA3ZN2q11wzKsBj3zwtticrFYuesb95A9f7xsfLxEBpNx4HoYZjhq1NprJg8",
  "key12": "27KWmFEUuTyon6CiiKvKPXPvU5tht1u9RRgJ2Z5MDd42DgY4g8niEW6uaFD85mjwzFRBQBVZSdMeh5GDbGZSHWNK",
  "key13": "5Y64HcZb2ogph4EdYov2P6N3coxqGhCaALYRimCJfHAnDSvaYQeJfKVA5mrnn2BxTdr99am9Dnjn3YgvUZg9x6wT",
  "key14": "BJ6mnN9vFGNHTgQpzDg5qCpDMcEzDoN4BFp6diL8AC7RQZcWwYsqoeD4jHqFkhfRPpd1LdMdi7STdDUpy1h6YHX",
  "key15": "3oiCo3qyPStf2QbNrGaqSyf1skjnM3rBtQULGgFxofpiTW2Hg8UifXk5R6K1ZHPjXyAWhsVHAedHnDHMaXmxvAMP",
  "key16": "5GkYAV7Li69rNE1CifHHhxjkHDctBi9NaMHjUPAUSMWRRyYH2fZT1Q1VY96FEhpmVL5ToN348hQMcYtLiJYnQ1jK",
  "key17": "24yhfAerMjrt3BVc6nte2BCuFWVDKVRkDurd1pPSZuct5XC9jebUYTFBn2EBVhSUjcUxYxyJyxqCNvp46wDKUzHd",
  "key18": "58Q6ymqYoWHRveWeV595mjqzrfjtbLCx8Ub4V6bPV2JbeEUYwGBn1HZhvBk76FVBSr1krBGN8ZZkRkMfYdFfaMqe",
  "key19": "5wEeMZkVtTv6K4oWjvucvtipgnjcEMTVtgnVX43YKTyhVEfxpDiQtXRSyPUGmXjdZCxLDpBaa6UF4XTKNFM1CCVd",
  "key20": "47K57rpmUUcNwCP3KUEi2BckWtmfYk8Wedm4QZ9sfuJAaR8ETHKHYsUNfuRCdBD6SE4TjU5wefHhScsWXyyhzQSQ",
  "key21": "4UBgtHiHnyCGPb6jPvMNCs1mpaJVtKYQbPup6oz6tmyrGfnBWY315SEJz8juLnK9HstHTW4hRH1YPkht1JSgVozt",
  "key22": "3TpHCL7na5RGPiUXZ9413Mdm6U9c4nUokPas8TzKnPY7WPURaAvYPLXW3vKqSHMMJZ4nDBGMEciLLpsmJ39ohEJG",
  "key23": "34ND5cM8JNehxmgQGzWn6nQppFcVkv5D4LVaVL12izsNc5zEGEtcmgWyq38qwtWCv1L7cVrWYJBV6tCn7koEbVAx",
  "key24": "rF1woEmm1i27UdxYsYseKGPXy2y9K42UsfgKL5sUL6toXuuWXCy2kTmMphD3MDStDRhrGKtaRFuVoRY61ZUxpTm",
  "key25": "iqyBADr4iamcmBxA2TjBLRmnu6cAwQ6hgNWLTufFskQTr9LaS6PF1mczo25aPrbCHVhusDwT4KBy4RJUTm616tc",
  "key26": "3mpWMdMkoeqTcXtefyHSgZVTjoHsiazGkRmZXHpSwYKFsa8n2eNRzJL557XUd8sJaUVL6GeyQeKex8z2JBdUrr8L",
  "key27": "P8EmpWQxBxJQ4kaxrPAxLY5Hcm6SrPtxwYqZLfx35x5AV7xACjwm3pcDhjJFVTVojo7bB6msMPQgLT9FZkD7DYy",
  "key28": "2zA4wBURvjMFwXwp67ahCuYizS5oUGVqA5CDBEdkmBCzfvUPz8C2QQLT4Cor57LfTg1DFwSSpPL5v9YohCFiKokf"
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
