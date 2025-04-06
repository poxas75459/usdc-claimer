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
    "5dQipwM5VzBb9yzkM7Gp9wMQxggi6zuKHqP6EfNUTb7ujCnAhrauhLTFx4kRfdSCKrsG2VdqzwE117zDm7CMFo8R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KVuCViJzzsRaLBUDNHytxzhiR398ZHWzsZjDRAoTHCUkivC34pUJwtcsEQu7X9SzW6kvjRuXTsRAEe34qKz8ciF",
  "key1": "45d7Lt9yBBSTnXoNtCJs9VGsNWWuhazfJXfoSRapXodZJ3wysf5n1uCEExqa7ieKLUZrGzCw3MjCdxLm1Guqf8hy",
  "key2": "2Tz1XjTy9DXUtbbPCwkcKGU4fmxhZspQ6gR3oHvKT6NLNa59T2kGwHTB7qgv8WQCgoZNXUHvMfWEHSQ7TWXeeFkb",
  "key3": "4CjbFJRF29M1JsWJAEwnvvENgjvqJiMRNUvgSqXXJ4na3SWtSkv27k1faeqNFngCzzTGmhCAxnvt3fQSCfE4YkPi",
  "key4": "3c7cymedgyuCt7GHBDvKdcG5NW7TeuGc7raa4bMWb1VhY887viLREKZqibzusx1xqMDwvJxHFK8tXq4wqXNbooNu",
  "key5": "hhjGUBp8oGgrcruxTrK62cfTTmUp1iYZbrz3QcX8fH2NryadpiS9gyiSiLXm9LL1BYA5XYLFnYfEs6F8jrYBfdS",
  "key6": "A4SeYbY6YHG9vUzjviCPURy3C2sr9gGMQJk5iUZyReoyku5yzz6MobH12a5rpb2LDJkMhvNmENQYcGYp6qYqvY5",
  "key7": "29Yu6rDf3wWXoC3NNdmScUtnBxAw7yQsmjEqomAZhv6rP5yjKxdMWJFWTm7SZC4GkuFqUz8WFZSiNZojbZFgsBdN",
  "key8": "5Bze5ec9tNQ6DcXjb5WH1avSTsyeEhsUsBhwTiJBgZ8xTX7iGaqQKS8k6ku2qhDdzCkhwsMYUoYFjWWpWDnTgBZr",
  "key9": "4Sdx8jVDLRVBpMK4XbiyUcoUMbVqtcFvqAiW8op7zZNPPBynj47Y7pyZGseGJEHmpJ1f36oT48unGGWbydRq2MPr",
  "key10": "3ikPG99oZ2X7439nAFUurBawUZXg4PQFijHXxLf9t7pQUoNyxprWkc4TssRq1CkYRDLsRBZKzhCXb4v5BcnUHJRM",
  "key11": "5sqsp9WzEU6mPfLWuP1YXbFd5UiYoM66LpmX33oD9kuzg77M8DRz7rH867MzumF61GsbTQfWbsWFm88H6J6a54bU",
  "key12": "dbBAPsSdarkH7RKnKekbHN59gGmn7cNbURpeDvqCPmJWB6zzaRt6wyZEzSiVF9Gcv38ickwiTnvSkiopWxNz9u6",
  "key13": "3yvrMGZ9jJiSfHofbDYhKLMieVucKFax6EKMfGHwHePC1fF4GM5VcQEVoPFR6rc92ZYaadQGWKmYLssaZQag6RtP",
  "key14": "5kZtuMwYLTbJxbjbWeMQA7JXKyAXiqFFSsGRJLotdaTp3dtWfThaRiNdJ5S34yuQxrhcA3Zmayy814x9MtsAryEd",
  "key15": "5ZALSUJJryM85dwKHjcB988myaQJ51pF3ArWDsPqAwyn5zTktzNCieSJyZCMNVVNVhVXRw3r2M6FYa1gb1frPs3U",
  "key16": "4c8mkWTU7dJq21TiHK2W7fpP8SDbq4yBTt1TTCBpukoQCvkH5b467jGGdsk9YZaSDXUeAfiznecGGYaFv3hPDdSC",
  "key17": "4QiUXa1dtFhbhqoZQUtj9CD62ZgotRwreSye3rEWUCcJEj6LtD4L4sknGiVda2wQQjkjZyr6f7svP9EM1WrNxbdj",
  "key18": "5vS2MhuDkJPCh3jY7RSYfSzXx1Rfr67RwDASkNcTfAAxVzhJNpkvYvS13WyPS2XyM2LaH8koD8Kswy1qXpf12vyi",
  "key19": "25xman4HSKnrxfzSFU2UYFizm1isiimDQ2bXHKuMRCSZCsKDXqCD8Su34FikPSBwrrm2SR2ZyXJCfNf68VLfFfGG",
  "key20": "5hJ4B9QXqasumdR98q7PHVDPVmBE1tkwm5uEwpQNVPmDFRDJME2dQJgstM5xRrujyzn7UBtzYcwqtJiN8emFQhQ2",
  "key21": "34Kwe2LaXhR3tDoKULKvwhkr1yvutLssAA5yQkTRZLrcjcvDc3LVnXuNprkKqA3kZGhK2ZTXJPoGPEjJ6VGFSNCd",
  "key22": "3iFMG6taUt7aoSyu5c9J5hiwLnf95RB9P6TywNg3Rh88oS7BbYk4YMfk7CP4gMpcfiZaa8asZWMMfBHwjzx3Hh2S",
  "key23": "5Xzgixv9muB1cCdTkbQh1qN1HHRb44gTVQQrGHgaQXKPfXDz5zeJvQpj4NoXgjn8qtsVj7Enf6EFL79ufgGWFNZ4",
  "key24": "5M3cmp7w6h9Zd8WksqVLQuibZX96tfPMqkH9H51FYBaHK4txPXaGRihD7F18oUL8uzkFxaKw2NVqfy5yWB1z7YW4",
  "key25": "EYztar4arpefEXxzhhU5rH5exqpP3Gp5fGyMvuUCfXp6sFtyXtpj1rQhqd97mJmh1VMCiS1MoN15cMNT63XELyT",
  "key26": "5VGkDxazmhcnR79im6ekC1p8gAwxqafym7y3stErxwn1vYw6jnCdKxDdtBT4Gdkapq2c5GVqcBdGH14EUYk4HBj5",
  "key27": "4NQNTp1jVVoLkFyKMVNBAtiMWbzqtLMFJUyUuMDiCj72keDE6MrhgBzcWSP29mJjoXShD3nQvoqmuzM6SXaCbq5o",
  "key28": "5Y6qVvMVaQRFx2Z37ZsAvCjYkzre5FUv68VoyhDmymLD4TNZrTMK5wNyRNdxRnJ14fwYVD4ddgTV8PdJEihMosdC",
  "key29": "25VB4j88swfKMDjmKYXrpMJoXgftv3RaqumZ3jmMrCV2QTAyQzWLp5wC7Qa5G7RCfNAXeUrGrnanWUCjmXGESJxk",
  "key30": "5Sk2fmzx3RVRtuz11vPCnhE1LYedzzP1RJ7ph2Sp9M1W3cysZKpRivNbMAhihL1XMULwXBm1seKBseBuKVGeryF4",
  "key31": "2ELB6X9JFExYgL3BgBuQ77kN3FEgMgjn9GW4Jw51Bc763EhCkcrrBH4zqwAYuapxKb4NHCExFfmjVvV7f8GWFUKR",
  "key32": "5VtUNZp6e2crqwhc6EiWPbH4pGWFmGHaWxTSNAKX5LkwLrvM7FTUkCxfJWVPftMgrvahwX5ZKiGsmn4tZLzvWfdh",
  "key33": "AYbEJ5GJvdtCAjHAhin2fGnzfbs4qhGeGRRD8h1ASnTz4dnVGDwMqrZoKub8AbAq6sp3y8sbdGUeVPEcH5KN8Rv",
  "key34": "4kcUE57oR96Stct4Nku8KuSBT1sxnoVEvE8qa57tn52vqSEZiJ7BGmbEGPD8vGk37SVBTxmn5oM8PgzNtcJCmXU1",
  "key35": "5KSSjJXkQgbSLdDXyzLxVHLMy16zF8rHkCSChDsYJCjiUCuijmCfAwbWeciKeq5ChgoscjaFQPsMpCnGiJxenagv",
  "key36": "mwWowsCovqZgFSRawuSEGRooyJSCUR5Vm3KDNG5da8dKzkWLHxszriCPJqUDyra7fAJsPJzLWK4SSSyapgiZabf",
  "key37": "5rPUe1HTCRLFkb22rQKfGSbFK2nko918EAEog2x138nZjtJV45ySqkXyvJ1Tn45bZ6BUNTi1par5DQBYHjJj2E7P",
  "key38": "5ubCdkkHZWCkxYN78t4qBYrFJDCaZ6SU3zP6dBU7CKT3Db63iSMo4RpuwFC2mWPbk85dygCWvf7FkqbSzpoSUubL"
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
