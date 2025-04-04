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
    "TjjrLAF6zRRLuLMrtVbZH2wXWrVMhpZYg76WYjnawptFLLWV7oGczZhKqYoyorjL6HcULd565tvqnVnFcaaZprB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BH6CqW9WYeMMKoVz6woNfLfuCLVmEsYdzgzR29xnzDkEzb1JCNqoEkEHrnkf2wyQdAeMDopbXgiKCkuLa39D94s",
  "key1": "5kAepkMjkNR8pt9FkqB2RPsdeYVAKUUGsw9DxqKemPyPZz6J8UMDsQsMWSXwvVWJwJPnGvJ6iid72zur85Nurt5s",
  "key2": "5igdBZ5cJkeS5zyjhfcengP1JmBxdHePtUZxqTgkux2oARRGSvfcbZpSqHxzQfVQkKWArpCH6W4PWU1zt8NwMrVf",
  "key3": "2k3WSzRaU5W7LJDZL5nwr8qUfem699SP5EEYCCYgv11J2cE4C6QirFvcmDUdtLENdgfjvkjsGGgNnEAN3wGcjw4v",
  "key4": "4kXqajCxozNcusx9Fgeve2DHptRuKeBqF1qVAZP5VwYnw4J8dVX8mRVAv3o4tEVGThcCJYSR2fYJ7JUnHeZJkmyh",
  "key5": "4c7yodKZthhyieuV4CArChkYQRK8XkqspvkHxswhVR2hSYRjkJgQCY8bRexXea2bGyaRiqKir6ad9ikikhTN1SAx",
  "key6": "2Xh1KpavUrpamPR9GK7Co5voxb8QWg2fNbVHL4SjRwy8SCcsV2hUVyBnxfzteKz4tu6qupLHZv3SLTs48Px2KkqS",
  "key7": "PYZHvNNgt1rnwWor5MAJXKB5orXsBssw2N8isVAtzojW4hNxUAXrmivrhPcnFZgyzJQcKShc1CvPRkPB6Xtn1Ei",
  "key8": "2Xb17L9VCk7bsSwvtfwJ5SSm79wmyuNfonDF4aCbAhFMunSXk53HTumipR6Z15gmgRB5x6m2WpyhyTNSEa7z3baU",
  "key9": "5rCyWXSjtLQKg7xaJbHfHbXtk9vZub2gLfWbJt1vjHGUdhAxRA2RFiGNL7nTcwnWwJzYC8NkcREZnXAiDh3pRsik",
  "key10": "2SdNm1BAUinVJ64wx465LnS5mb852buiruCYn3hHupZM7E5eVnhoKbbeUi5Kqhp1v1Wtd2MJ2ag2uh6Dn8eLR9p1",
  "key11": "4RBWKa5h8ri951RRJBET319YCktduWGM1eZjWPo3L5d9qcKrfzWcs9qCL1yWAbcYJfxBLsALDFuLm5qZJbNTi1ua",
  "key12": "5XFqQTfnjuUs49T4xyJKgNeyszPCGZztZ9wxg9nH6tPAuvTwN3FnHu8wJgWrGyrhuDWkff6ChpmxTDeu6umKgyYg",
  "key13": "xDtcy7ptvhELQfMYXpgvcAK4u5Pe88oLYRho3b9RazkApSXSFzt8VtgMHHyQn6RHs2uVPiDZ9QdNERFdKce776H",
  "key14": "5CZfL2s182MMkuv8VGWt21Pne4nVTvbSiNjWhNLeEoD7QDQ1WgiscLjpPpA137879YaSEJsQvXLGUDZUDE9GkP6i",
  "key15": "44t6hhuS7HpqsQ7U8uQVNF3M8xXrGJsKsfGbU36fQDpRBjfChqNYLJa4d72kQRXcB2RfTcL6pQaQq6whe2n2NeTK",
  "key16": "5Sx3UTMXVznvLy5MyeTaarmj7Kj2swF5LFAzNPXALjXrd7e8HoTEamgFryZVZAcWnC8qrub6CdWip8S8vm4gac3X",
  "key17": "jq78knvpz9aJ4hYyZeodKK4H9BAaxjb2U68bMrPoKVCexghFXTw29UmUuP5Z4A1NzMJPmq5vBJSD3wB9k9sTYj2",
  "key18": "4pTGWwUfHKRfvyuBcZiFohiPpypiGBzPSis1LhD4eVuqreEeGupZhHnJuuz3aYA8yjiAki6qbJCceMe4tELfAmyj",
  "key19": "3q821fHGkw1HWsw3BNiVkb2npUebQEb96orBEizq2nLhRkqaTU2u1zktWzppRf5GEireSSHqswqsuPYXbELXAnUZ",
  "key20": "VJDEdioy9Gv9oedfVVK9R4cCAHKYiugA2F5UHTUMUWrhTC2jn1HM5eV6z7dWHxrfocU9zfbvdJbe4XPpHTg3hT5",
  "key21": "AdDXmH6vRcbYDYq6Xex8aLe8Qwm9PQPurPhVX2SGmHuDqB75YgGdpUkBDATA5THpm6kFNfQkARE54auPPXBiqxS",
  "key22": "2apKmKbvBB3CyKuf9sixCc7WBUKE8akFpDaxb6U3dSCPypkaiCZtHsVm78MekTVZuZ8mc9VV6czsdT26EuvS5QC9",
  "key23": "4JtwT4yx6YhqvwBmtHFfge4ag5bb6Mi14msg8fQnACbJzb5YCYjWLDvJreRtjR1b4Y69mXMe6T9bdLXAc7i1bZuW",
  "key24": "32zvT1YBkEtr7iVwGmwToGMDMuUgKXqHdb8hcfRYzUQbEvHz54aKL3Hkntvakk4e42c6abNG8sj6iJg1C7Gyc9oq",
  "key25": "5NvWLJ3JPLKs8jcoURyWKhs3Wec1SxLWWWnhUTihm9ZZyEYcZj1LL21LnTav111D99mzGt5uRYTg2EZrcWBgfwp5",
  "key26": "f33q6ZYUGKfUr4PPUiv3FMfzCRnEGonhwonS2K6Pg4j3VWyJykZDg15PqWW1y6c9GxW6pJKCGjeRjQnBVAnC6pD",
  "key27": "AFmiTAxjaCGCvj9gHmpjocivYgiUiyF9AWZatJDGffi1TmFA7BbgngYuEE4wspibBWNFzftq9QYcB4vQx2uuWXf",
  "key28": "5z5GemZ36BDPDRqv2mhXEzkBYWPGhCUWJu38CmrhrgciqfDWKpGykZdUr7P1XuL818CMhbBvgaXETsyM2ZYWu4fJ",
  "key29": "5R1x9A2THmeX3EAy8tZU3KPG5XdQRrtE2UsQ3KtJZHSirq5y1UdQEw6SgRyjK6Kt2KonX7PXYAeFivMuAzHNsKaL",
  "key30": "ovLMYmMaZHvrBCFTuUejqxFtQM1h3xN87aJJPckmE3H75X5ygaRkSCP9knF1Xwjb76guBedzpL3URm9StcxLjZs",
  "key31": "4EXVvBPyQQ6QeL9svMJmUuVd9uRq9WxWf3R2N6DwpQLjQprVh1cR9RtxzmiRcJmLhxiVNXUgUqEbKQbJUrB8u46X",
  "key32": "4JhnYjCrr3PahfuVa171VyNbzZG87ARfHQb2f1jWaBL6oshd1fPLPoAgFbPkdeFY5Vm7ZKWDFj12nzq7ihaCmvCy"
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
