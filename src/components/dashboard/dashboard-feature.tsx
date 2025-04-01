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
    "36EsUiY8oEXZB9yXiu3YTnomGBbedoTHg5piKh12U6hHKyiGJ3X3tXPF2qWQzJXp1qm76bWFWUWLVP5dguGNTue1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qvs7iwwN2vmUXUHYYDrff9KbxR7j3QN5jcwrTQSybmyu7B9aJM7AbM9FGMobfnPb3AgD16ykuLesaWzYxMx4PFe",
  "key1": "4raa3qvRms5VnfcqCVk3YpTVs3igsNzr7ajH4YGqdg7HThuaainAHekR6fXptAHwnopYrMzpDuafmcJjxUbdfUKi",
  "key2": "4mXyY5htUX14dsrk68we8rkgVDnbwW5YqRUqJdxQEi1izpjuXxZ1zsKsFKUDxiE7jNoEsGwhpFQHyLMM411iY41v",
  "key3": "uazXuf41ZRHYeb2btqgoyEJ3qQJe4QCtF9C55v6jnrcE6x8ghUzoN99VEGU5a8LDWR5WEWgpSK8PLnwpWhnBy9D",
  "key4": "sCzd5qhE3Mod8gzMUe4qPL1FLY6WQhb4rD9r6JRRE8wemCzCXsqbLk5zmFfEEdxKuBXMky5aLYxpUZzbzSqcXeL",
  "key5": "5rbcv3ekjNbwDhHu2sur3ZGx8X7b57PQH2mZFC4mr2GXgXNz9tWiGVJukkj4xMTRVuAr2z57VeMnFJWDQMuPh4z7",
  "key6": "3KGuHxiuRijN6U3rTY2Yv3cwdXnQbvNYL1CvpugndudXUkxdYeZkruQvjNbwbMMY66DyazLs2uhgDwbEMfBU2Znh",
  "key7": "2axxh2Fw6RVRc1o1RwNsPH2rq46Zv85D3vAzheufmxeZUMnTmJ2NLVzKupKU5CcMto3L6oK48Fhj3KteNx7JpfCC",
  "key8": "2hoMoaY71KKYrbruM8qLjHwC4BwXtrPPupNTVkD9EysGi562X2Gbv7a3Us6Szt2CtSaP92gshTqSSx4aqM3jYXdK",
  "key9": "5kkmzAKS8QtE7jdogfTitGVfze3TkaXwZyY1Gv5uXRkJ8cQf8xxy6KtbLxPfUfZqvZyu4CWmVmwFeNQrjDoeZKth",
  "key10": "26f3tLFsBcKm5zHY1dzYWh3qBuEkhhDTk69VJWE6hwdc7ZjAPBXCV8uwdhrJwc3Lmx87nNnbBEp3EexGZCRD8JHv",
  "key11": "489ZSmbE6DqHdCKovjUiShxMEB2D4D6Q2ms2kTEuov2amrKUtm3CDE3LGeUNFRhvM75WGQ9yihRpor6uc8FffvDx",
  "key12": "2kM8juXDnNstox8etmopghid8UJoVw1FiPdHrvseGih56YHbN3QeN5ggETCFPzXwdztT8S1youLKLkwKeULcZTRm",
  "key13": "5BTh63avRyefDTewVSnM6zfDAcHmCmJQKDSF2yYUQS5LA8wpdsAWn3dc6FCNjQDS2Q1xuzu1XCH2CXurXDHGqwP8",
  "key14": "86kq9K2Tb3Rs1r75qDk1t6kSYZ7g8o3598RKFfve5Qk8gk5k4nvKbDBbhZHUSA3qTzYi2rijvfSL9MSe3PDXavT",
  "key15": "5BicsjGadwUT8Hxn9eQHvozfDKQSotB62Rdmp632d2oeNNWhwDPpGXcsTJh6Zb8ASZ3Zm93rFdRqftkb4JBTV4sG",
  "key16": "4pMJDgRcRFZSBKim1uFfnDier5tzsv1awMweG1s2Bgyva7ir5ubibNb4H7dmQeU78tr1C19tWkjFus4FShugMVPr",
  "key17": "5Gf9ywnAND4skDMnoJcvGZ6JpDGdfNwr4Bwmv4LGMUfEFyhmK13CADQdDYUEVPB4VJMKMn6XispHCUY1Dnzmhm7D",
  "key18": "5VCPw98TNrXRzZLSTUZmkYiq2EpGtjBnzLmP1yGTyKUgvn9GTYLchnpdVBHvApp7qtG2s1mv9nWv6U7WH2XLcEid",
  "key19": "47L6P7fDZKUoE8Jz4bVaCKRw6eeHrEdM9Ttitvqwc9nqrPgvk5MggJR16VF46eWiuE9VVrtbmxZX9SBvkgeDF7UE",
  "key20": "43CPfeFtt9nrqxzyKXqN7SUEkz16cGXVsvQc8ehvz31FSa4sSD1npSzhfCfxEqfMWFa8aktyauz7PrCUF1KZ5axk",
  "key21": "2D8bLvptwgC7RP4nMwLtURJw5UThJeoQBQiqFk9paU4GFuQnaAUNGZQ7V28wqDCZQAgBHt7MSXpLGzYkeRixsFX3",
  "key22": "ybumorXstjDAPBLne77XznPDc7Xvzn48yvhUEMUNMd6EqoP1xiPfQEwi18X6PaQ1JRWyj5K7noA3i75HjK5wZQp",
  "key23": "27hzVwuDc6wYiv6JwCbxxyDiUGmVfM3ehjb978pdwLJuH1vMc7MD3VrSt7YLFLHzjFSGSmWNgGC2ZHh3hyAHZ9nZ",
  "key24": "2KLqLpBepTgG6inXhAJX5ChSbj9qgik6MXi8rjBbMFN5BvHTBsc5G6tSyam6bJ75XynxVgjGA2C7gLNfiGwmyBXd",
  "key25": "38GmNgT2o49iiZaxawBWx58B2p1k1Vrv8K1GK4cYqCaUX8JjVJ82S3d8pCEEQTgBRddbYWzvVbqCMd9cFVxtPRH6",
  "key26": "mxbPJxchUvN9ZSSmwbTBquPz1qqDGbB94jDv5nS6QFE6UPAqSrDrf2nJ4pquHvLeE8sW5T3CxHEek3R9mH5Bdvx",
  "key27": "4Wm3xhKQoRkNKNtE88FQLbuX7C1s5zatPeFwH7NHPzBXAdUzu3Zgdu7GqGG4aFopvcGG1NFBJaSPywHUzv6b4Art",
  "key28": "2nGzFxY7hiwRdDoWNLJCDguY1E9neaxCx9YcaRDUnodFUt6r2fPBHp3FW1z6cYcS7VY9mGWCD7em4KbfyoHtgmte",
  "key29": "2Q7C51ux4vzJErXX4kYcoHdyt6dgnPCoUKFL4N2NHek9rhTWsfknwBxeECzLfsYMRoeSnbjnPaQuVXMPhGESZCRp",
  "key30": "52JWgxqGeDcWFKCoB6a1gBQayefAAsEib3QWV8rYGvhLGJwxUMiSiqVdLXxDLSSNEe3d7X5JEGTQ81dqS6gUe15",
  "key31": "5JnU1CmpFk6aA9AaLRVZSipTttKWMHjbR4eZSiDyzekS8zvEo7753dcKPEiCy7t1ttwaftKyjmZgeMm76btMFD6H",
  "key32": "2MfnHNNXes1jZ2C4VCBjiGhWnPQhG9gwwbNQDWafceXDDJsBJykVaxynts7inUcXGJmD7anPpaFg7gHp2ntQPauA"
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
