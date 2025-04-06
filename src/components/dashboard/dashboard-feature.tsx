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
    "4r5KXGZWDW66Ce7RUWKMQzjiPvr1FewbJhCuT65NTdJDtdH6iY2Z6ZSQ3mfJVTGYxN4FMK7vFG5C1ZJowDw3Lxcf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eSD5nYzUGGG5GPyhLd8RhLXMGEQUL2StiXzNqj3z7bub8wN9nnH9L5nBcgqNpimiPAJyk4BvSZ8jM8ZMHoGdsAY",
  "key1": "o4xaRevWQrkJWLTz9JL1Lvwxz4d26eVskJG11krC73YTpJZcpEMe55FLNbKeFbwV5ZgkGeMe6Yy2znjpG8awZ6P",
  "key2": "3YhqDerY7MF3gHBP3noGaM6QSjdptM3t1xeRSWDrQZcPtr7KYgQoGiebVRvL3htTWhfxWKYNXHj3GPr1vv1J12U7",
  "key3": "2f1owoKAEwY5LHo57gUG6HadAAUd85KEBtk1xtgsnqxdFquMeAwyje71JCqfK8P7Lu2CownjigNiUnuXxyAzadHT",
  "key4": "4NAvm1fQYGsqvMQNKvEZ2tsC7eQ1gKEhfqs8CoBNpgo9HJCwz99JS8RXjTVRocapmcE7Xze13k8vk5cPddNGjgN3",
  "key5": "5xBUijZZupizpdnBcFqqcvFV7jze9XivreaeMcPYR2B3SwXUMfrBX3N2zNQ7v6vt3FNieVCnLYzCvcEmC5NHPNtH",
  "key6": "2LnhswxTudfCNctphUpeykwG5D2RZidz9fE3ijTfCepGrdWYZhKdMjZsT5yn3ZyRNtYNDBUhNfLLyfYZKErk8ury",
  "key7": "2qE8dpLpweBSgxErWC8SkrfYeXGCVJKiXsGhBrk8BUYCKC1TMuDGWmDcKCyS6LGTB88o7EWxs4DyV4t6P8Q8J1ik",
  "key8": "S7oJuBSCSYPBe6U47zgQnXC9RWtKNa3PQgSaSWbSs9rTtfsQxdW3UekggygTXqnhJzqYS1WC1ZDcncU57ygPP2d",
  "key9": "5oQrQTArGTjExDPprsJTRjJhtogdbEkXGjia3xVE7ZGQCVQJioYpexVEnqNxxttN43Qo9Xy2ScQpBfVMdrhhMEkq",
  "key10": "23BzjUkgFkupX4SRU1RuVoi6uXurBRHuKnS2Gsqnpwzswd9HRBqAMAeYaoDbfnyazwwtJ6MTYMSNK7J4fmPdUGMn",
  "key11": "vNLtfwsjWdyMMD42VRSt5Mkwo3PavLsnN5KSakXiQpxSgribdzH6BryejMUCxzSQpnYktqSuKLFe2JWhvqcDMPT",
  "key12": "2Kzbt5wkFbGco7hrPx9YEjpsWHCxfgbqMDHED99HLE133heJXiDUEquBShP9sQ2eHLdQb9DVRJ6BrMaiL3WdB7h8",
  "key13": "SKyu5NpJXuD7uuNT1N2zqqcbSRygFa3DMuxgmPw6u89KGuMYrgtB5jFRvtqUkJnrRXZhjojn37t9ZpiVqrd6Y2A",
  "key14": "4Gnvb65yRYG6cyYrkhq9SKb1EYjcoWfK8r6AbxrPnFw5hoMnY8cDXhEPeJUUspRUrn3doFG4HaManCrtn2Th8pAJ",
  "key15": "9QioGYbzL9V5yAsPr1A7pCSDB5TD8gk3rJq1MXtySB7wT13TTg82bGgG6JYZTuerWwhXEmbT1hAFXtdfrujd26r",
  "key16": "4hi6GFKUPJWHDh2w5m8r8E8gUuzEk8tAnvmk9QZmjgSaqfxoSrte7tBu4FSHFquLgWXDNaWkWJfVNScTiRadb8gK",
  "key17": "3iuzsTGue5KCtcrvxyqvaqh5xSd9vBgmUx1JAv4VqAMXNdm8wQuFKYKuP5sA3jAY8snDDsDcBRNmb7mzyZNZhs9U",
  "key18": "3TLuZC1EWi4cjxR599yhfYRTLWn4Focq8FQSK65uMoRifEzZiN9ZAfZT9yWhhWKnEgRbEuMRCycWRLprxm2pNVuz",
  "key19": "447fheF1LdvQTKwxKidms1TGuZr7Qm7kGN2B6n5jpSWzvqHRgS2Uo7qPaRDMBQUa9AAbDQwLY61iGDsuqxkFxfx7",
  "key20": "4vZ5k6ReHxA1rpekkRQxBq7JhSx7Znry2CecCm6xKHCr4nCZUsMLdeCuiWiUnNzhAhDYfS9ikRBQvbk9n3j6tPuq",
  "key21": "4ESChnxGCqCKySGTLivnDZhnYQTF6nEMinFiUSp99dUkq74cofF3Go3vkcjD8uozHiieSBaHFJtA5ExB1bNRWwoG",
  "key22": "2CfntyDzzsWk99sRjqWDY5JwmDvDCmjY81wkpWn2rap6APAAsfL5tsuBkyAe3dXLoAJ5i78LRfxckT9jzbatvS6f",
  "key23": "3fnPvUN75eb8QLEGYQe4KUQtYJtVeLD178MA9FL5nB8Uu8j8txbvddjW55E5wQFR1SuaB3eMckme4isNG9pDitxy",
  "key24": "3qxStvfCasnqZN8tGUMC8ti9tBMTPrBYP7ZZCoW9Zm9mCDqhk5swRkUW6A164joY71sXSok1dad6YCXBLwn5ZRS8",
  "key25": "3tcSCThDS6pVBpU4m6bVJnQswy87hgSQATNgY5ooprBcd9B28oGs7gGdeGjeN6UFR8mkeZXCPr5u134nUyzNh1xi",
  "key26": "32u3qswxWcXMY2HXxZjmfKWB1Ec9BnnP6KdskuBWoKASX9jq988k4wKWALRmNszPGmdmgfqC67Nnj1MYVtwZNJnJ",
  "key27": "p2YmLeMJc9ZKvAtPdbXAbAPFycgwSBRqA8tWciLixL8hicMwxvZoJxaVqDddH1SRKGdJ7oVDLyBaUvDiZKA5Rho",
  "key28": "1BHLJB6T6AHBh2Gm41WSe9VRzd568Xc8g9wzwcdHw3LMf2FHSmq6qcZcEazT7VaSbbGasvmajMhsa9jWViQ2VRx",
  "key29": "3XebGQMCpJSTTaqtERr4bCQ3r5DBZosNdET7CuRzQKAsN8nVUmV82mxCu2FWoy1YE9MQsYjSsaAhHieiQpys5Frj"
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
