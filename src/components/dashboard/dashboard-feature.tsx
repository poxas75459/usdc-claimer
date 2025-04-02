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
    "25iFihYbVdu9QeMaikSoiWVk8KTQ2f4ZjNZ5nzKUmgyoRBKkJAZsQ8G7Fi12H9kZkBQRiof5u6ikoFyFJsEw9M93"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DSnS2gCjfV1JChAXqqHua8gBf1aua3ka6ZCoJqt9vNLG3y6EZUijqEQuwcZkf3X81bD4MQqWHhh48bNbR1Yq1Qj",
  "key1": "5icpJJXfxtswY6L8D5wt3V47dsZtakKZGynoMfS5agt7LaQhVARnkvXHikKvP5XF9FaYC3FRZaEaZnPcTFreAdXn",
  "key2": "2vwk1acpCj6zNt94yrQGsNwQLwZHbK68mHQnnSXWCQRaXnNqXkmzp5v1rwQHdGvBtRwZMd3hvr2cztBxc9oSeQuX",
  "key3": "E4dsPmLnSzGm3Jse93gUpjUCHnUZKTMSUm25zjiiZaRKL3zSLXihMHiMc1pU1yrJL3HQUKpiwNEA7RWi2zoPGBz",
  "key4": "497uHNGDWDnhf5xobxokFFH9VAqs7MrT6fXUStuH3maYVNsoGGxVUcEg5KSnNqpzdFYR2LvCTb2Z7oQhAEFn9TMx",
  "key5": "4fAQn6D6YohDN9zD7qdqbYsGh6KVCu9nAVjvMkwffX8CW1oMegTbHMyVRXhAEr6H6R7zZNW8ycdBaFAvvhqHpVn4",
  "key6": "W3WagCXMNa17WQHkjGdH7nw52P7nbSQyGmC3oSRchkx9fczg6eFmvkWh8Lh82KNHZG9ki53kSd2nrVSZUFfYekb",
  "key7": "5mv9u7wJExUrYbmNPPdMoqF1WABDcmtTdzJiVgZFninTSV7SeWh2ct52RcAbPfJvi4SCbL689ADA99eAKufwhKmo",
  "key8": "3CsutUEL36uq6PsXYbhNqomoJLZKjUmJnXKj2vEEQqrNeEt9JrHY4BsDugpQCKMdkGqgfeZeXbVyrHLycDx6vka6",
  "key9": "35Cexx78jtCCRLm2YmQn2tWfgx55d5RhDb7dmokeFx1bR8M41fVRbQKCbdZKSmwmkmZznzakLGi7W6ZEub1iRZFG",
  "key10": "Lo4vWcpqgDokXkswToncqVYDFi3t7WeZtKeHuTxV42r77N5bxavs7bKTC45DbSMiLpEWvU1KiffgTAtbFpYgXz1",
  "key11": "djHwABbz8jcBVfqRPNkay8tBzr9hEL9rg1muzC2GsxJkNCu4yGK711xT8gkKCAJvaPhuqmkFGxPBxB4pFBph75x",
  "key12": "41hHWuvGLCu8B3q5pPyqr5fK94bANUdSaRv6sUNKZAcmrC5j6PYrCzpj5He9gQLBdShGBQ4ta7ZaoTZPTuWhxUN9",
  "key13": "4NYDtpmKH24a3xLtKXYmUP3XpkoKQ297XSpvNGnx8JEC9kcQU2wvykBQ1Vx35d8DwDFvXCg647XZe23HNhEwJzHM",
  "key14": "5WC44rcEAV7M58cD36FvVqeGeJD36iCjdw2ZviUG9cuem5cGrDQqKBdeqowkc8q2Z8EUDFEmiX127HPNQ3jqiXuR",
  "key15": "2TJzv4Z6B7oc9Sr54eCVCWTbRRG53VEqNSB53cYkU2YSWheBHBohJg6fzP81DXQ4CSKA8fC1GpnTxSjWjmKboXzK",
  "key16": "2H5B2racP6zvD9vAE6Y77anbHeeNxdjWMK61xibowzgBGLLKRSDaJaYDoyxMKeHR4CazMqD4TEKBpBsLpdGAjE48",
  "key17": "Mk6rbiXPrFpWdqNuVLEqRmPjkE9D83NeJ9GfMKwR9f33nRLDu9S6unXU3thFg8uBf5dKjgHpvPFybwLgnixSBv1",
  "key18": "2tgpSPpdxrtsYeBk6n85zkN1cNVvvbwTSNyfUxJHr13sKZKfcvGJzeRWA1RecYLTSHMu9586spChZfsAgLFeTAhN",
  "key19": "3xYkV7m2S78GPQ3A3Y4qbt94yYv67NjQyAiVDH36Wsui7cdsrdWtcjFKoMgeYTmtTcwWsK6jW9z27t1huPKCvk51",
  "key20": "3aDaUSLTJuTQh27r45eA8prhkNb1jMV1GiMzAYGhLHVkqzJedgjxnkyuinbFi5H5TEmPi89QTtYsdtLwxdHa5ezY",
  "key21": "2y9NA2ft6XLSY3kgARooLbemZMV2e35jXvj3x3PmhrHvuCA3LK22PfBF72mi9A6qqa4T3FD2y5TMkfwHfBDpG2uF",
  "key22": "3mo4vhsTyVbEnMtCJHT4WDS5rK71yoU8CZyncgCTA9uRbQtJFWZ8ZH8f971YvcU7FJuBVKp3Ute16koCLU1pTD3B",
  "key23": "29CDGFqYoxHmorqae9WDp59n1vV5LWfAhzoDu6ZFd34sGdMLmQ33M86jWnZs2Bf3N2nokdSPKchAJHTQ9JuLmiK7",
  "key24": "54gJLTwRi9NRuMjrimXVybqsaW2USjdmowkD1h2Zibuik3qcL2gUeoGXk4DFiLr5LLgyuzXi99qRsM42hgm78uuS",
  "key25": "4V2JbW5g2GF6JVpNtkpzicjotTFiM9FHbVM2yEFYXeMWTsvReiJNemzoBvRBdZfniPbjASGBXPgk2zhMxyuUeDhU",
  "key26": "2XcpkY858owyjs9sjcfJibdsRuR6Ycgq6cM3LULyA5owXRtzGUm5bxkXGwyJvez2VvP4RF5vdzt5xrKFtB69yoiu",
  "key27": "4T57xtHJqcyV9xjDnByHT6Pnbif1GG7vMpTL8hYxTixjZPneyDynjtDr6Ea7V3i7wVycQTWVnnvQPqEAjgM7voLo"
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
