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
    "5zcaySpR1oJZbXMkwdeo2oTx2rFFvygiCTnzE2o84ohnEaBmzuxqqX8F9i23AhfZQ5H1mowA5Ykqf77Dy3uaUNXx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g9b1qW9fdn3ayaRQR5yfL3bkae5sfV1Ytt4HsyBPBa5a3gQeBKnYvx2MgqJSvGtsVnAoui1ppJNvQFwsGH3whix",
  "key1": "5HKYDPviN5UHKAC1nCuqbGhZuW5R9pu8Si5W3ryQPEYDL1NjoANtKAoB3UJdTN12agxQACXMTuU2YTp9pTHrPjuW",
  "key2": "5tVAX4t7XHXv6zFV9WgfHAcZSDRtjY62XwChUAKEvez1u69nkauVBexpsqC1uuSojB7rrs2JLqjbE7hzRDNBXVJD",
  "key3": "5ygssFNsYiMrDMTeZTP7WuAWDERHtEvrJFkswUc55dUkLXppYdyf6s5J7P7LW4weLbDGCTZywYrwGx4FXk3uMv9q",
  "key4": "5ZGU1Rvpzn23KhCJweo2xy2cpTAkuopHXMjfxTamZjXfRUXAV8HbPCd2aAVQp9vcFqbHNvr9jJGwzQuSp7xx4LzC",
  "key5": "3QR9HjBn4TYNFvCJvF2uC6CdykuFb8z3f8YHMtSXh2KeRGHjpgj6DazmMNCkSTybMrWpTLX8Pf7bm41fgZPcJEZK",
  "key6": "VoFVgsTkudGoWs76dF2e2FBDqbQBdmgtMhUXrGkSAuVRVowpYzigjuewa2HGfd4Lkgf1bCgsWizkZN1F7BerCM1",
  "key7": "2bGTFCZ5s1daxX8iV4CPHM8VwinbgJP8SXy2qmrsihZFoht3MocUDSibJCzNSbzdi9oe5CRovWzFNuW9cNSNbAJR",
  "key8": "4RiCLJisKhFNbb5mo9DT1mHwfmNXrj2qVWJnyievbsKdj8QP55FwSRkUu2kuxRVnk5bCYq5cCC4k4PZULE8wnPz8",
  "key9": "4uAZeqrPMXmUYsvjxmjuAgAb7VSdYpNsFABP8eKUWwTWTsY5S5Ex91QAASqhyFgF89JrJkYXRjh6YBssWCXfXStr",
  "key10": "321iW2udmchRsdaxFBKe6GnDtEgYbB6FzssyEc4TjQCfzLmJ9WWq73XEXX3ytVYVqzFpPpjUeepMToxFfYLQxLHC",
  "key11": "2zhPHwRjAPFUgksCauNtPhNC2um2nCvLY1wFJYycBSGmjdbLFCBM9CA5v4GbZZKN7tL7EfoxCNL9cP37VCQ4TDpn",
  "key12": "FwMHas1aFKNSF7ixAQJdDMCK2ES5MfLjzVow8yEPcFEh8HaTcughvszZ7TmHYnPbGo1mEWd6bqg4Ds7QQHARqDu",
  "key13": "57NjhJRgJuDkGriGvBhGTf55UNtMuhf1NwWW53YJpyicwhmnPCXAXetbZjaTYyDWGusmNHhJm4NRUHR2QAkRAHUT",
  "key14": "5Z3uEpY1nErcHcUdynKBoVN67JgLvX4vYQmzvECkSBTubZ62z7A16rsFgzSDSH17MSy6F8RT1Cw7MTzT1spTjMU7",
  "key15": "4xbSLPBnyaT5iJ682vsNuCnaGre36R1F593bspmPfoucUBpjtEmEPDC4azaC5TccbSgdoLMz5feaEUtxCotxrGgL",
  "key16": "Z5ekFad9y8we3XQg2MNPArpBnazrMF9KpVgbnWrqSBe7TtNn7rtWGUueUB9GSbxobmGSW7LM5FjALNUeyLNKsW8",
  "key17": "A9oJsxLrpTha2yDP4NpVRrEHQdkPD4eznykH6pni1oVDhfKbjpqttaTaADq4VVAhcn8ev9aL4Y4jeu8RiCTjiAC",
  "key18": "3bAUxfB2kQKyDvbkyhFysBwWT5qSg4gFgtxdY9tDayzhYcxDGTqjrF6xe1mogrq2bWgiaY4tvHWykcpXZb6nuz7F",
  "key19": "3T86tLnzXiNRnw2kzyHpy7dHwBuV7xajZjisCtPDwt9nWEhrtVEVR4ZmeM5vLbRUZj61tvWNMcs34pnVRCMSA2Wi",
  "key20": "3HxiaYipvomdxmXgPBwp5hhzWKpAMwMRgfkVzhsW5AJ2LfQdNzrbufrJY2Cm11q4ognjXEoBVpyWHzg1bXKSXq5Y",
  "key21": "2Fa52JpNS5DGdjiADHdfNEWRvnXe3EYotyj5AnJyCYgJkkdrowtnx7jWnsRFj9obYJRm1gbERBXGMGZBUx8wZLyL",
  "key22": "5sf6p8HMn5xMu6YA7X582dW271hfxeCvBXnZhkygF6U11y8ovTWHxQriYyhSvFXnifL2Z9xSPoKKJzwbbUq5MHJd",
  "key23": "4kb6VjdJjZcxhfEmcf8kvmnL6UGdcms1zbp6yiKkrfuU6pYBX8jAjzUkidTFi9BrSFj31wRt9aJAX1kRw6H6j85P",
  "key24": "63dfJeXEQFzZ5Lmu19Z5Eid7jqCNxp3d5suv8rDBvQRPKxMCm1hxFHJ9oHYPxVorjeTjHNDnjqm55LKSTL44zc5N",
  "key25": "4c6hSg1JWP9QBL2rrnNQvdxKde8DLqFrd6EMWnCi15umcGRLMDc3KJwsPmUunCnWvXxvZRT2BX9QFFMebyTseNF3",
  "key26": "jSs6rHZ91wHbBteqzYXW5Nt4RyDzVxPwuwmsAAixaXFmTuCcRTpdDPpLudnCbQFkxfwWrBQjwC42j3Zi4McK2gz",
  "key27": "4Cd8KW4TzDm9jbZmpJ6oUZeXmCMFhxWFK273vHhbhcfW89e6SQxpPrqCc29mvdRyY7Nr9yq1uiTpPkGex4PCTitb",
  "key28": "3hnMjs6yhxDrUHq79xpwqwnJv9KkHz3joMaBbyzFStUKfZXgiMh7qW6mpYoxisaVdUfL2sWiHGdUqPY5MHJ3iS4s",
  "key29": "3xNeXA9Sk4z8VK7UNy8NdLmfp8k6mAJFReLggRBf6918TN3SkV7PuomjJYJEwMWCjyxiwKw8S1HEccC4rt1cJ7Ri",
  "key30": "4JcMBjQAKsWdbqq8UfMRNe3Hemf93vuFqMwpKzxjQCURjRLSD7sjDZfQfRHD2U49jirUJu2UAGXaV5F67nB4Gi5p",
  "key31": "3254djigTeyWsDFpi8uYMB6jBeVL883minGSWremvwGqnZgigiy34sbFUAqtn3XcSBoUUYyi5aDBvZfjKxomRD7x",
  "key32": "3Em1q2qWHdR8FZXSHCD4vq8HnCJLbDAVFKBHq3qzJ88R8fAZ6NkhaTcuDGHTgZaXSjALLktj3qXHgarPtMmhDCNJ",
  "key33": "4i9ef9yN1Qe2Z5tKfsUkcq4DQSxgqvJALtugZzBz9wm1QxesHJr1hah6YAu2UydRFL77ABHxwkb1RdNUmLmtSu3H",
  "key34": "2HMfNxZKTeP9BAXbZThNR4z2VbMEmsZeoYgDpetWsxcSWLosawa7fv5Uf5MHGfYE1kFjbB1FuVdNSr71PNrVxL5w",
  "key35": "KVQxvLG29BdLhDRR9n1Pjt8n9HNwcq46B2177oo6Moygzz3nwhnDSBjhMra1wyHUNsaKcBMBQRbomKaHiDfgYnt",
  "key36": "3hmJuEHNXfKGpdSa2Wmm15D68czREHUkovLd4YZRLiqrDHWbeHKbFUrbAA2AUiRH355aM1wbwap7qi4jr5BVEiuN"
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
