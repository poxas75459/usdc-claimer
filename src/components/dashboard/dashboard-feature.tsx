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
    "3aLzwLruUincJBFVAz1VvUL4jdCVvhh7BKjVaVb549SgpyT9JVaDQLWmyG1XC9qR9fSzGd97ko5i3KjnS1fektwd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oC2RaRsLUXkD4XgKk4CD3Q4ceqFKY4hdGEeG7Kvb41XJHRTauFCGLPPLnwPciTMfXarziG2YzJKsaDzgB7XoKh7",
  "key1": "3xWNow895bSFekEwjyfwF7o6fGKKJTvS5iGnwLRpBd9jj6JdrjbcjKENLKh1xcUfeTvy7PRECZp48gLLiMXKUqGH",
  "key2": "3t4sP4eTLAX2iJswEY3hUBt2ZmRuHyrbtAxhcxHznBSSRLLRfcmpV4hnXXbCWtDMLAxcb6STMPBtKNJipyaZ9BCJ",
  "key3": "EfNtd89SuKN2YvnLASUhPsAcP67XPgrcosQQakFT92DX5GsnStuW7U2JxaYTDdu2BEmcrVt5zJ1vVkPHL519CsB",
  "key4": "5WeaKk8kFH8zMnNKy9HuUs6cikfdMbsdsgDnAUX49gXdXgDZtQX4RP7z65zLDeVFqPpoVZE7cdY3jTWp2gLshNW6",
  "key5": "3M3hnwbA8gb6ohqgCKHiRcP9qWaWV1sjrpnDiwnSJ31ADiNEDPnQvdRw1QAXKLMcbtt94pywHqHt3EGQktJefLQ7",
  "key6": "PDVqgtmXRKTUmwBV2uNXQSQc1c31BVByxqgNDQW7V7R755Aiew4he79Jvkv6XvZBFiPvytdMfinixsiSmmYDm1B",
  "key7": "5k5s9GwtSNDSdKtG3VBgwEFYmWFi8aHkk7zhdSDEfs5mQsGpnyUoZcJ2QumVs13zmSRCUdYXEfaYksUzF3qLZaEi",
  "key8": "3uNnjTJBYb91hiozTbC7VSXn84XQnqnmpZCpZMXhqeBAmsLGEb3XNNURDui5T4e5ypNKiPikGWvzQ3m7JEzPFzJp",
  "key9": "2JzxZYNRXGM1sew1KqaweU7c8NWXLKgWDPZooagZBBQq1eTx9fp2a6oSgXuDBeSJGNDBuPr65FjedZ1yyU67Tan6",
  "key10": "RpFEXp5LmvVLKpvW1dR4fgra1do34ESTCyoMxquS4rgkuibY9TFducS6e6qinpYc1oSMsG39k4wHxxh97zK9KNC",
  "key11": "5fshv6q5NgKg54qknnqzptpEgv2diZubfWYK86qdjTKFpQheXxQD1Z1faZC1wCxHHHSeRsbx8sgCC5FoLUdoPPeU",
  "key12": "27ue357ozeT7hNonAhgtHnahk1dv5YSYyhwFrhQSQe4u1aouWPPfTGWqbFDuDXsVEu9dD7Mh4EgNB6RttPY2ba4G",
  "key13": "jRi8T95kkEe2vt2VkUV2UW4oownnNtH8gCPNRSDRxhHWEVxQW2J3v4bR5WLgwSHhGiCFQ8vkc983xccvFh1mRZt",
  "key14": "2sQGv9X9Hzf3Dzcs9B2D1kKjoj5RVwWnrKVBJDZiuWoUA1G55ScCfP2xs4s5tiyLGaiLZ8kwNwi1rzWs6FQyNYVn",
  "key15": "4mPY45gPos6Ga3y6ygefD4AbbKB4Ba2oAnx7PG41dLsCuHj2AdMiYUf2JuNhL2WTqGpQw3tGG1meP62iYJ8MgYfv",
  "key16": "3hidd445JLRwf8ef67k5Sw2WudFSC2jGjRaXiQwFmkWjT9wyogzbPcLG2PT1XqKAXpqeQWFmRPrBAcFAuvGGKbLR",
  "key17": "4b4u52gHApdSVTfjZ4hq1FFJqugDqse71kyv5PgCEAyrJU1atzCJ625yZJRUnGCANGJ1KWwyZ7YeoTeyXuYngKnm",
  "key18": "3p7Z6DbHy3wd77E7A3Di52bA2aRZqCLtQ8jFW9r7UddAu8KuJBQnuywo8UwEykmtKij9jk1MjWxTA2r5XQ3JmC66",
  "key19": "5LQdso3va5V7FWvqv4RbtSVEe7diBzeWGh94B7PF3DFPxCWAfs7gHcuTKYekmx4mjfjWaejbtPsLQNUZTRpo35dX",
  "key20": "4yhWgyiXvTmKa2jqhZaoPauktrDXwsMn8kSoBDnSQjxERbYute9Leug75qRDHBdpKdYUn5UVmz6b5AGJc7GY6uhX",
  "key21": "Qfj8a8LHa2qffP5HUzMJshNuypHTL2ZKQYUJeunDqQedfm5ahj4ED7EmKmV7LT4SpYStWQAHCP9b16nSS8AqtwZ",
  "key22": "3FA6KMBsJ2QzEfxnAxQrmCw9DNeiLaX4eSU6tv7cFAH3cpuDRnxWSuERQxsZmmp9Knj3sWUG9YkR98Refm9wsKtV",
  "key23": "52f3LcrhrLkT21eyCiN64zCYGWsu7FqNY5KLbQGKP2yuAQodjp6mHdviMxzGUFPJPHurMNAanMXfACgcRVA8G2iE",
  "key24": "4MdyxJ4tezNM4CKzozsvJbAdnUjedHm6qvTcho9UrYcgRDTuV2oY4BKTRUSvxjbNykWkLxJmm2Tr1QrNvEguQGVa",
  "key25": "5rLvjGiH7aV2f2i9w2tpQwHqkgiNVDNQk3aUCU33M8cm8h1nssCm9Y35E1VV4R4hLyjYV9EPwQ6gJ9PknGhFiR6",
  "key26": "BDVma8fncBVmp4FsF8gHCiQXAvJZvUy2XEV5iEZFJ2gjMe894M6Efu3eneCBzxhi2FXfN7bXg8BLAP9h1UAuymm",
  "key27": "53rhuddLCbnjBs9Uhvk3kCuDjNhuJQNbpMM24Pvvs54xhchccPZumrRSkfr22LmN8SWLMt8esZfeq2zJxVK6AQTy",
  "key28": "kM8Ep5ARKvkKiqBeoWnYY7VevzzZtCb4rE2rLKTzXgTYenaG5XsKiVkjAsUjp4yzV6hC5KELwJbSwaQvEXsQ7GN",
  "key29": "3y3aRXs1BZ2QCE82XVyTx8Kh4BC75wJqstzeeKNmhUfJvdZBuWDuCgojr9AjdTG51sXfr2StGrAvZusfJSMyHvDS",
  "key30": "5FpPH5ySQxhdrbTKUvzWx3khpmHpiNb8or3zVx6YqodrjWdTsUvJKvW9AApeCPmSBwDgzcZLuKz6XLwkTAG2Uh56",
  "key31": "ntAW54P4bH3wZrNu4BtcYu3YucavBQBaDksSZCe47dowQ7kNsMyKx5Tgp2NCqf9dYWeeF8ttGs2CQ3n4Bogo8MK",
  "key32": "4VbjFKZbQrwiF2TmrwrW5n9Ces2ZXKdsTSEUx9qW6z9MEjjC2Yy1HnPAcsMTn8WV7ouQgXaWbpQCHYwZRAVELMYc"
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
