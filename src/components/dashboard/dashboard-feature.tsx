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
    "3sjrXELGXaGJxXAm4GbwsZJz8KAQNfeSLkGsmST1FQzT4LfRjArvuBBCm8ZVmrYfpqJUvYQmfY58j3GFSijxoQ9o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ioZ7qLEk6EKWzED5bsJqJsU22tHJRg5TFF7Y1WnKEqNpHiGnESNrVvEhKspwoHzHn8bWkjb4pd3CNarDEzxEtcT",
  "key1": "24hWk4Z6hZYDfRFowCtL5t2EoX3d2qbyqaHCXD9qxtcVpP84DywULkixmZZnamZXUAmHhg1wPpkaQNsVs9kWhepG",
  "key2": "3RX7VRjvSG1KsUrFvDU3sXCwa84faB6g1NuhSKYaJKuC513JdD1sYYQCaHLFqojsNdhjCECfqZC3MZ39FgGHbiQz",
  "key3": "39onGhcha91TFit1NdVrB1VyLWw4W5xR4oxqrD3ihAkKKinzSNg69i3VeLg3X1F5PVAKWe6wizzULyxTiw6JZWT7",
  "key4": "2dPs9rmxrisSpuK2Tp1xoSXWrFkKZrSTyyZXogjrNyetrYu5t1DKSzRkzGkWf6EdHKUzMdKcpwrhW5Eiq9WYTtS2",
  "key5": "2euvv53T3Pt3Nf7wrheZk6ApCvTsUMY9g3vpAa7Z56B5VbHCCYa3j9Yu9XJXD69EKTY7Ln6s16krgW6rfWQ1d4z3",
  "key6": "4qBG5kVnAyrPdqy52ejXiL2mLwpxamJjTZa496FcE4aw1rvn8H55zf2MsEDRengFth4SBDSuMfC1SWnDKo7e1iEs",
  "key7": "1aAP9KffvFbe9kvbSsPzyxQCCHiTzUPSk9pk2wa65QS32kAdepE4NqjdWh9PeHhWQKvdD96xhd3xxocW7EffyB8",
  "key8": "32XcAoN6Lf7FjRo9XQZ7gH7rd1bJ6Rk1UmgnidsAz5GjPy9C7kpChG1i22HjtnPSLR91Xrj2LcMDctxeWqVDKsZz",
  "key9": "2p4xBv85zbNtQpwzAZdeZUwnYXSMpG2VXwcRWJ4EtVRqRwKQyu1xdqRVwJDsp4pDGZanPrvJzWuPHVRLSzaEHNhw",
  "key10": "43GPcLWiMQi3L6f4wmu6zQPeuJiCzV9axApJdke4HVMPTH52gEDAJ6xsDoix9XNMtDeHLuXQsMqT8jCKa3bEbKdc",
  "key11": "3jQ3jcdKSVkg7oqbQH6dHLD8s4a2NSbZKJZ1KkkBgaUvHemBzrJ2rwkMuHavLkW11Y726nhserxxBhEm2RqadvEb",
  "key12": "2EkShDc49dkNQvsw2oQdGLgpJybMN2VwzdRgrtSAzHNjJQAgXe7hvBixTCjGX5S5SJwr3Z16XsHf63tzcDnvUhvd",
  "key13": "3aH4AZVYcET2kJ9TmK4TE9Y6z42AnK2x43ez2pbxMB7AKp9eS9QfeMgWX5wBxGYaTEGfPhULfGPZnchmM443B5Qj",
  "key14": "41bQAjae9m93CNY6XCDDSeXNKx4edrnawWx8gnXZ5rEYY4neMFv5Pio1VomTLryqnaKZvaZ993TMhW41YjpGd53j",
  "key15": "2GBCVMgfDM5NnPSPqV5QCLqjWSu6FQKMVvLuZrgAzXLmLwEJUxsVHofZuhkRREtD8nyqx4RiVik6o1MXJjzcpynq",
  "key16": "4kc441eXimem1S3PKv3hkumyucVDhE7GGeHsW7xCPv5MGpxzPoAEr2Si6MonAX6uMB7RstXjeExTDKv2geLD86bu",
  "key17": "3s7kzyoNsnHPrViwBL6vXKKff7RF4QsoMNZi21SysMnGvxh2rt4QULzcZ1syUAfeJiqA9oi5g3GKAMj4nXpKihLj",
  "key18": "2GgJWRxoxfoQAd3GMYpvir1Yqm9Gi6JAXCkW2ZCNMT18mPguMyYP6rTTne23rsC8ZvFTfuoUos1xQJ4ZKK6DREUC",
  "key19": "51NYCgAoXRsSbmLDYo2uzMwutWdEAyVhJzJEisomZxFzL7my8trszFH9cub2t3kS1Q9jrFumkokHPorq1k2wf9Vp",
  "key20": "CDQZsMf8s8dJegPpjcEeihRkyCxVkgfVwJeiHoUrubu1LAA6HBhnHytMgvbRYCdqeMmDHaT9CmFVM8PwDfU3CPt",
  "key21": "2QzgdfZj4W67KBmpC2mSNUCcs2Ph6w9penMjQMeuKFPsS3vYLQsfAjAdAetw3iLEpbQf2kwuq7j98MumMnSjqX9X",
  "key22": "aur7eXaGz8VFg7DFZcepm5GqVZZgKzuC9pkEuFDpKB8nHcvBWUBSs8yY3wQLu97pjb4ufUX7qjmitXgBZG1Knq3",
  "key23": "bfoPjNf67bnpzmQN49UyLkhWVxUDu37pVPEzWrhnN3bbWHBSox4JSd9gAU4PWtcaqws5zBEHBjUNbaYr276tkYf",
  "key24": "4YTMoaoUke17DtF5EQaEbduwCZxJAQGsWrXpe8Tw8dHtuVFJd5hmiMYUqrkW4TnheffBKMYVUzALag1shcufZz4w",
  "key25": "2jXFrSXuHH3Rnk8X2CZDUgff5fZYMh8oEb7J99s2e4Ny8ZyNAHNkLmumteybpG7aupmAFDrhU5fv32gC2GMRGHSZ",
  "key26": "EJxBD6DXtCBF5Tf4SnNiGBHp3jPcHNqmqezU9US6edERn2x93848fXtPrf26uZGFencXmbwZZE6TajQTb2RbGwW",
  "key27": "36fonRuTNd79WnAnT9NfJrgbyBY6EigAAKM4gFpgsbEqNbc5B88C3jDu8MHgxfFRGP1vZBzUWsBREeBMDSmzr9P2",
  "key28": "3xf8RuYo73DFdsrErozFKJLSpVLJcdRERyYkbVtuXTb1oSjS4kZmTH2VQghTPL9iWXDdZV3xynmoMYBbJgumDsuJ",
  "key29": "3xNFaLTqztE3o12LmzT8FDmA47K8oEii1ppNLDLPzXfeX69YTwNsY65R9Rfx2iLpzQhtScLf3qKKesyQjAwsJCSg",
  "key30": "4j6jCSaxNjjSmwkrT9rHub1dLMh4xyQg7LT7x1FSAjxg5Zbt86YumL5giXNWhHJ3gGdXH2UTpxgQDzPj1jyYvCG2",
  "key31": "2m93qopGvbuKXszQ5c4T6e3PdKeC6zWEoft7danxRxJKJTjYEoxTxAj8GTm8jwWdxY6FeLmcoZU6nF83nXrXeLYB",
  "key32": "5C94SyoRnNvAbu2NJu7xyBWZgzqy9nfnU8uXtMZes75qp93yJEUZEaXNSMromjnN8tfKJfCrFuwm3z35hUJ8YTiX",
  "key33": "3ECmGLpjXBngjA2gCzBZ1YzBzb8kPh2BmTPfkCUdAkJvh8VzPaWpJrkNAGnbxFtiDMJu923bDvkECebZQqRhFENw",
  "key34": "2w2uo1ojraWkXcib5DFLE7ZBkzCRfWSWLdZA9DdCPDmjHm3ucKHGofi1Kv8g86LRFjYF6tybvjMZ5Xc7PtT6gKkL",
  "key35": "2U489RHofr8qWAZcTx7DFzRw3YymXRKJHeHsuRvVcHSA6QyF7Z1E5uEEkm27kBPis6xmnvyvdQnorpcntjgitpZq",
  "key36": "5DasM4XpfwWdNzamaMaYGAHKCgy2N8jqsJFEquhGHrWduLySPyDBvxk38ErDiFaYmDcV9zxfP622Z9uPkEy6NkU5",
  "key37": "5wXaG8Ej5ZovW9VZUPqTWhrLXZGbWq7eo6RvYuTY4FsQGTSJodGxraGiyT63Wdi8x8M4qZnouQGCrDXerLoKTxsp",
  "key38": "2W2rTsKnSr1QBtYTFWd8UkFBXzq82avfdW1kzGhjrTnW95jx3xCgnbogXmk3GBMz8aYrj7wyFHpWMxdwMECW9bq5"
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
