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
    "4M7QRofCC8X5JMfczJfhLsiqpp8qtPEoMmsorxisezhPbdzddctBGQUFQXuLsCpNeLRAmb2ur3gMk3zon94XGiL8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xvpxp9rc6gnSBEUYLivSpo1dyPdxD76ivN4xPoGqmFbt2jYZgPgYmTv6QVVbafKr2Kiqc49pppdCaSoPCWkbkzH",
  "key1": "2zuLh5L4ciDe45UwuD1QsRG9zyUvuC1DwZGiLFXnGSiairQbcCeMyYVmaQcX7LA1gqqyVP9qbjCD6hgqDQ88Tu1X",
  "key2": "2kd6aRywyTqyNsbVp9HCfhu8LAAA8s1Cr7FeAcRLxBiPFqKSMGBS1DPSKr9Zfd2vk4u7P1BcPMg4mERpYzPepjae",
  "key3": "rVscFqFDBjMr5EmFEvyxGNvVyJUdmNRDawEm2QdKPsz4UwAAiywxKDc3DkWwVaMkB43X7H6xrQverghjUwngTLZ",
  "key4": "3B4dWqsiiJKcX7h9k9G9GvzuxBC5V91vvH2DMR1wD9VThGir8hboJ1Zj6hhdmV9TacXmoEZAhP8zQ866pZSnA5fF",
  "key5": "4weatd9XjUWZjf4sGRzMfyeGYiBd1iPUiYCPhH94aTpBDPE8QDGFDKbpCqRkbvGqaatAJTCPpz2hYFhnuWavnzHR",
  "key6": "4yzWfahg6eMRch8EX67YdQpfnNzpcRfswDLT4XDhBmZAxy4QozLHdKwZaCZcduywom9XRgwrb1UdEAJwHaSiZ12C",
  "key7": "4u6P7mWJ1FVKxVDNWPDdjmUjUCqw7jMRRNkd891zT3HyW8dcSJGpVZ3BwAQrtUYuXWChueEuqo6BMmKcMHzS5mT7",
  "key8": "4Hm1iJqwzVAGhwxWcyzhu6wgTML6hDNoj7ZWHitxt4AweguVBxcwBrKMkyuyg3jttQW2APy6EgTTGNiibNaaAG3A",
  "key9": "4F2yJcGZ1enMafoDMLUcQELV27JgGeQzjJj56GqgE9VCj2MRoo95vPfDbUmTdFUHNJ31KHS1yDkBVSi1hkSRBdfc",
  "key10": "3JqhNNNHXXESx7a23EUusdHFd3GNsjRJAuSCX22qkJRDkKK1z2nHpqnPG8sgLVFLdtkgLSq8tPj7Hs8LnNXLbLam",
  "key11": "2P9gVoGMwSDuW9qoeGcDTfrrniRCN7fqoa5hhgkgvGYiqQPUYkKZcUxPQ91HXW3ERthXkGgDBXs1W1cJZRYmoq4f",
  "key12": "3gNkjpVUVLN1GxsN4XUEPv5MMpTatic7MtQgoyZatrERZYsv3VrW47EuXHVC2LBH4CJvrX9dPwXy5Fz2dnonTSbj",
  "key13": "3nSBoJEH2SeWhHN3yYwW5CwvDjHNJpdAwdGmkeyKFuWXQN8wiHzaQpTCsLEX5VWsNpDGnMqUv5Vm4dzgF4YAZdmY",
  "key14": "4eYe6NgbZV7cjmNnRHG3F2q81y5kMKDtUDJUtTCJsAWWkDdgqAL1xwAVaBwFoC5egaS2RePMT1nFRcWtSNvXEDJ",
  "key15": "6pEbHU2kTgVU7yLW8HjBzdY6tZDWzZsGPUej4bRtEhTi9f9Z9cZSohbqVX47kFHTZe3YRjTuHbCQz2PXEXRHpQm",
  "key16": "2ybhnj7Gj5bRkbv8nPu6kkys2NdNHWMr2k12xUGVQ3fvamxkdm5reHmgP89HsqK4YeWzfGXsn276xph99Xv8zUuM",
  "key17": "2ANCpX98aWRgRtAr4MxhrKgojFXWAZXbE9WbvXCoMqdmjv3vVwnAusfP4kkXajSLTqojTDsS9qtbfUZ5Z5e7aAkY",
  "key18": "5tgVtdgWeU7zLXKbehHrDXmk7Mho6bYyDXqLZtmDnJwFPpaszkn61dyuQZTfFGnqsFrk2MiQx1wR6vimhAMwkTNd",
  "key19": "2XEHed1jmedA7JNG5W9jR45ZJSgrkwxGNuTADKR2ErhTZEUoYpWLJz9t1oaH3WhaTZvaFHi1zPyH5Y5gaPTZCtDx",
  "key20": "wWeUL8JN3hWb9sUGh4o8b5hXf3gRwmLjSiUTQcVppY9DTacG4Z8ufkxSbzcbCLm9x8D98Aggpxo9EoeWskdHTea",
  "key21": "3WzrMG3Mp2pxSZQKGe9NisSAoqKY9gd8e2rDmNzg8akyZs8gnwse7hxVDTUFC2dow2JVSnxkNGMzDQx2fqvXnvzC",
  "key22": "3rcHPFDZvaGAPudF4frRkX29gVvuwS9PtofEi9T24t8fiBQaqxQoxniuCvVFaeHhce5FzgXNg8T7FV1QmnqtJdrM",
  "key23": "vGm9oFPTY42f3h7UWMqfq88yzhuogB4ixfo3fcYLFv7NEuG8E6BX7pAYj34TotZPX6FiDESuMgLQLQFsgsbcG6r",
  "key24": "25U1eXJswEzaKz8NePQz9RFqxEzsd7LFGZAgh48CwoR6vN7wrux7GmvyCWjK64zv53cvPJroCcHnjTsrq77nR59V",
  "key25": "64a8DC57dYqu9oZQyNFzS1N1So8VRNZmKLhGekXBiMRUwEVnwH3FyfoHoieEvk68vdJHPmQPjCqhG9AuA1VQijY1",
  "key26": "C9dJ3MXKHZppoyCXAKoF6BpKdnVWUjA1Z4SmFB8DZxGGiuZWjk8Vf7nDG9keQDbtNjGpX2ytmmP8pMtf1vFX7Qf",
  "key27": "STS24dFc77dPqEauTdqZfA1hehcwEZKCE4YjJbuCj7MvwkmHnhTtzeXmJaJ3PYEJN9PCFP7TdTWLY8tfPNdZQyS",
  "key28": "3REBim1GJABLL3PhyYKxsGGdp3AQnG5m5urb9w1DkAQmG6F4RNuof9tTL5V29WpWcUHu5gHvZQJWiPHKrby1rVkZ",
  "key29": "4mC3Sg2C9NQH2H6s1XNCXLV35nnNd1QkrHwkDgV8BofrDnVkUaxQ2gwXXUfD4xPcwbH5Wxj8yscqt6vAqEsjchiN",
  "key30": "27WDq128VUhXESg54uNun5csajGxYeKLXsR6MJmPyEEarAZ4bBeewCeJNWrorLeQoB67QmSgC9aoCBKmaCAjLj7Z",
  "key31": "526ZiRFXK7qNMyuVdmSyySMBrRrtqs5hudLbzSupgsBx3qGYZpcGTRzSDncYDQUu93fV4NuFNFTf7jfPNLTMpDEs",
  "key32": "2AZcjmXLdxzcaYptUNBobFbSVLsLbAGnEYd3116MB6wjVy6z4YXZN7bNndPBarFuSCwTK5LLMRfjYdFD3wS4sP1k",
  "key33": "6HfoRK3GaR8CkMm4KbcZMoGmguLqsCCegu7aVRLBwSxosQFfhD1a5orBT54y25b9YmnnJKS6nHrk89oScffstGj"
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
