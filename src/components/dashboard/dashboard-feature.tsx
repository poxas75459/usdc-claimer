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
    "3gaeQkMHt4dTuyUj92dCgPiRBjwdUERxJXaJALSLjbeGAVWp114CVhu3dP95wAH5fDxKqh3WDTqA8kDxrQTSZVq1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ejCF7uewsJ8awc5cLb9FBLM1736dmwhGEsqDzpjLGzCEZ66ee3nRMQsWsgxzCr5wxAjy1sUjGVgrdKtDyWkh5d3",
  "key1": "2aY8Q3J2WmbfHtwzF7JyLA4efebmTeUnFmCvLDAD5udHWRJZgjKeXefAQm3hC89e9qaicUmqZiXpEiurkS4rM2CW",
  "key2": "5QwpkiHvT3CuGcxwPsodqot7G9y76Cn4VbfsaJE21AFrRwzVHVZoUEDWDgfL6EZpt9MRFDaUtQpiVpp3iYBkpGSb",
  "key3": "5jaMBKAeVLNwEiNNx6grgRYzTKg2uqRdQtPnjpt4NjehpZyrTvuWYDfHiefNrKNNbUUwXi9RVsKjitSgisXVaDtF",
  "key4": "aK2sywLJyb74Un3WN36J8zf2s7qbwDPwbkEWRnusnbvrCtpSDkX4civvV8m9diLLNcrr8sCvnBY1YKRa1bRVjvK",
  "key5": "3p1jHCUpmLBLBHQhidXsSdtBPLQwoReimoskcmS8v9ZpKA3CEFW989icmehLZZQftUZdSLxKbLpbtcdkfRwQChW2",
  "key6": "38ufNAQDRjJ6YP4avuJ55uA5BxBKaQqbut6MbCo4kg3H64FA74iJw5c5A8cto5dMQS4oyvAEcZUcfxPfYUYwJHfs",
  "key7": "4GfHPNFjJ8J94cBBmkxDMB1CtqLjV9FY4dCARZF9AakeymeV3d2e4B9Fvg1XbrnMgnbXwTgAp9jvk1Cw8h7pwPKi",
  "key8": "2ACUZd7cyNZwdsaFjsSZiKm78MsaMQyuu4obUJMZG77T1Ad13154dgjGPirTh6yKvvbbCFkzd1DwtnMxzxD4HHkS",
  "key9": "5VTtinzXp1RDsBicUXF3XRj4YXHwyVkL4NRUvG3yP2sQuU1r7hsMAL12MoqESRDPrjM9xdUGJQYi2ca5cKHwP2tk",
  "key10": "3HG8DLuKCRKrX4K7vsNQ7cD8woeZVEttvuZzAG6SRQfEFhZsaJxeyhaxznzJq78Am4ZUSzGzGRhzBtKC91sUkmVN",
  "key11": "2ArRHrMRNocWbTLUF8XwDypz6BAhA3eiMWJ32B9JaxFPmvZMwimnvZaMqteHYgkPF21epKhW3qQgqCsc8EoJatQN",
  "key12": "4sQJCDspa6KkeZSc8BPepuagb92e8hginuq8D1Wcc3pdss3RGc2zrfEMr1CPzXrM2A4wqXzKi2VYJSxDYUNWaeMX",
  "key13": "3qkoe4uPHeBC6PQrXoWNY1aJmm9ewKJqfFNVhr27Aucq7XT5cgDEU2V4jMJERSnAesutsLeRM1rp9RoCoxo961ov",
  "key14": "5Wsj4UMnWvJb5DeCRgZ1xZGe52EitxWkRGjm4hYJSFSjCcJckRLbmygK5Aq871nidWifXXhRLFfFoeYURervkHtj",
  "key15": "2PcCx8cnhvzP6ubSJYUVGfWeuBdPqYxmYeokyZjNrpug9ZZQY9DTHxLF9rixBrwcJz47ioYggy1E3yFa7FZVE8ew",
  "key16": "2BFxXxh27n8oDTozLfXuJ21kion9HrT8ZkCV85CNcPyobVxXVUQtnaYQF5Lk36Le7iXz8CwhxDX2Ds4RqCGCbuqM",
  "key17": "4S8ehXhou6N2EubsEtAK7T7YHU5qJpqX8WFtqSUD9sEWxvWYqhqi3Rffgb3ifJF6MxPbaBZn8KvaxCkGF25QqVis",
  "key18": "4m2JuSoA7oxCBdiZd7MrSnyMw2YvpjAUrcAhBg87LJNbzHBp6XgpJ9xU4QY1YFzjLGWKVyCiL5uCaBqTNXmzTdgQ",
  "key19": "5pyHRHTQTYu1t9Mar7ahGC4TZ1nvQFMuzKJaBbwbHGSVddLfmQwKtRA1mkfezcGzhi5BH89D9bJG8WX2Qit8wwgC",
  "key20": "Raw27yg69nz8aZeeTMGJhSXcUGvErfTwFi4vycoRjicjX9oM9CNmc1sxGUfC5zmu4qVagTQqgmz6jSKvP57ZPxy",
  "key21": "5qpKFFXeXXzGAR59wTCfWyE9k4SBcnngR5oXMudt7HGWiRzWw43p2gR1q1j7P4cU6FFSQKFzkt9LVfv97mw9mwNg",
  "key22": "qEN6LHnTVoEv6WD78Jkca7qECKuHRTtNBke2h4DLEzBxm31pVx8MJXP392fYJDQKg2dLMVj2ERQkYa41jEzCoT5",
  "key23": "61nGCJtC7vKbT7R9qrJ8a6X1NsdUmyHyymhijiNHUP9HkdLvUvA8M77a8Qy7k8d9m1kwbaUssDcq7242kEFBNjaV",
  "key24": "4H7TCVLMztFXuCENvqoFax28Y8HLTWtHhJ4tB5XQ1uYvRvTQFQDFA4wY8eWN5Zq1BPEYVBF2pKJmijPTJJd7ZHBx",
  "key25": "2jZNsgD3Bm8E1tXpVVSGsAXUhtS328nMrMdX4koXNPgdSPjEZTxbrCw9iimaJfQHBAc8xV9h4geGojxn6W5zmvUB",
  "key26": "5BGUWurD6NAgR7f4JfXauBzpmnpPFcX6qost7HAYVoJeWbAZthzDgA7vVmjuMVDgwC8JkcUf495HjS8m5M7fYPBx",
  "key27": "4nihvnCX4tRJJCKio12BMES9ndTUBk66PBZaFeQ9RQsrv8GT6JMpF6CqLHA2fqnrA9VMvAHXWxqiWN1ZH7zoV5cp",
  "key28": "pG8Qb8DiAoLSa9vaixhJJzAxGRNVZgY9KKHsWFAQ9X6o2ZfvmMjPSPftyZGKFg66wmk91MFaSX3McrxMuknCr2B",
  "key29": "Qah2bqwL2JrGFV6vvnipyiCoJK9hP1JN7x7gYUm42QYvaTyrR4i8vBryPLJQZFpVxn9bHWhmisFW2oGqkXWDWtg",
  "key30": "2TpZ88DzHpXqYu11staaxC5SApcg1h1KvTBnhj5DNtstZkHd9H445bW14wAjckxvFbgx4NNmQHuztuCF82xa8eSw",
  "key31": "3cWyvTneJDu4wbWdxctQryabVPu7NAoCzzdy3fq6PuSLo1aGZeXqMgBRjzFK7uBAdPgsr9ftUQBxFSqPnNiS3DiU",
  "key32": "23LoiMmUcyAdoj9Nrqu9GECoKgqEqYUC68AnBZfbuhMM8ryCKsD9Mhwgn3SUCoWcsxjrfRzwGPVzWTArnpkgWsTZ",
  "key33": "Hc5rHPcur55HBZJ6isCbfqxFGAegUjGHsosqEMpqxpM55f6pAHUAhzvN39QxrA2Eq3YemUvjrLsbyUkMghWUsUs",
  "key34": "4SvhsCtEQWLQDEie6skV5VrKTPcDLE2yobqe4B4VvseeQN4WvkrQvzqJ54iSMEj5Jj8SsGce7Hf9ZSHQLptunRMW",
  "key35": "4Y4RXzW9LH4s1bouU1aeWLTYaay4LiZ6DRJrfsVxitNxXJWwCqgZ1mFhTSzVf8GxAi7oDR4GyiYAbjANyqn6LWgU"
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
