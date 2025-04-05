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
    "4hyt3hQDnyM2zRexa9uCLppb9TxjKmCh2WAJEGXHejcpEMRChGnnFzCe2G3hbT5s1vfUSTm2YJQHmXV61bAQjtv9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aj8sHdeK9nJ3jBAhNxk6pbGeCVQMczfeGgc4anWS8Qg93jLvaH28N5yQf9U7hBSDf5T37i3XMJC5nDwtuWcxQfU",
  "key1": "5pAzdfBF31tvkEhR4nzhXbbgWvXhfJnDaeBoTnSekBujkCCKEes142v6bK6oJkYptc3XmqTLetLELtQLrKUgVn2W",
  "key2": "bYbzg1S1w1oma5fn3Rw3hs59Pn25u1X8hu1PR1Hbw66qrqZHDTQCQZKxYkknrcTmATVHvnwzCeyHDNhsgbmS51k",
  "key3": "4iVyj5PbG98gMTH7eDW2RMjxJ1RK4cDdiGWm5QATED6bazfqcm24tGbmw28Me2sTaUd7asDbbDnrEMYyqSPD2rmS",
  "key4": "2HavFb2wSrfsRrEZ9CZ9gQwxPSK98VUt1BSVgkgKeiZ7R4CQUUjiqdBczWLRok57Vu2jeUbG4F4FXdx316XxjxE9",
  "key5": "5dmiZe4syY5SoxNTJszhFmJZArR6tJxxh1AsHSZWwwmmouN4vALaBkahDCHYEfkmp6rk8AvJwpY6C9cpPK9Rebeb",
  "key6": "2T47aye5waKAHGWihWZSSbTLku8qfFqa2v7uAg8BS36z3pC97tPAjkS8QxuPpDVQYyuF9PGa4pj2N9cXQJKPnGea",
  "key7": "4g2KZp3e6TQxNYz68qQUTU3sSwbmCpPNnE71wsiSL1xLWbFr1xPk9JNLxeih36JGQqRgEzZQBNL7KS3RJcMAj6Qx",
  "key8": "5N1uxqxPzxfiArqEFCxcZX4EukegWMw3xNMfrYsJZrmrDeFB3jyQ45hdsFcAJD49VDyLtZ4AwiKddhcEvYpE9FYa",
  "key9": "4e19GLhMpgdaX8KrshPSSzkAr1YnY7bKaeS3LNY1Z2rs2sYhzs2g1g2Dpf36adpQsJjWV1dE3tT7x5M4GuoQQ1TD",
  "key10": "2525qQ9YESEyo9tDyQJfKQjTb4CuZRYsZsTZ9DAQaA8ufVqfJSpytfsNzQgrizuY8t9wveoDRJCaivderCPTvzxt",
  "key11": "49Cwv1vkrqBTevHqUqr91t2DGtyZ4qkYvcdhEJyUr8cMmQquWvfwevprv6q36QpiEtrAVca9T2b9qXMUey1vjcZg",
  "key12": "3YTci9RC5LE4MDsGq9XdFtpqHeXDnA2bye4SCUx2cqzSHARv6cpQ92wpChoR7TaqGSLrt8Lx7rCzMc8rPJY5a54P",
  "key13": "3HojFBVyH3HhunjHq9TH1FZXXTxBZqnjFjwpi8mgJpoRGS8HcyTQonm3PJHwRKPPhQPahL78SMeqCe1Lh263fmPh",
  "key14": "MjyaZtDEpb9VFkCup53tsTMkRdmqpCM3wg2YFsPkXreFr3S8KcURoJYw4tcRumMat4TvsjVMjmQhi3ahs1PKyoc",
  "key15": "259T6s84AcnWYiBA4TMWNih1UBgKyXmviBUc2RKZ4spNFWwQHNYhp4cywiugGvev1ueez3wCpx3swsgmxzUYbwS9",
  "key16": "QhUrfmg4pzFc9r1VWbcjZDmB6XGuY7H4FwyZ4pSe6Ffh99VumbUk6ZUb2PShUPXnYSCcL29nrW7LUfYHshB1tE3",
  "key17": "49tHwLY68BDMde6tE1FzkV4cBEJn7FzcrLoppmm1zQtJVMR4Z6zWLexjhNhU72oW9HRB1LjxdXNMmcdwSB6F3nV3",
  "key18": "D3VodjcaSytJT1euVcAZWZbSrCjkaa66diYh3pEWtmsVNUX7tNqkRUsBQWHSGAGFN738CGHcJMT8Vkm3CMaiSy8",
  "key19": "2MnFLhYc4ZmfsDQuGQkHbKbB57Rope7UCwJSeTmJTutEPnFZrM3ss57viLuPKA1o4P21ZoensvSZ82FgovboXnu1",
  "key20": "2P4B7LvRsWdSjCwt6MzUvqaH7SagPbGe6f44GHkrHd3v9pTbPzKc2gEQtFMB4SRFRgJhBwaiu7K785ZtnftENSc3",
  "key21": "4VVHTfEA4BTDTxgCxPPshzJNPrYoBdyzYYxHjVT4wme87kPqK19HJtkvqngo75WJbDZ2njWPFVuGMzETtARdFq7c",
  "key22": "2sACmRDXFzfH7KYEL3rBkY2NuiY3nit5xYs3oZwH28tjJkPXDa9EuYs9C2dsAuGwpd459HR3QVWybUvg2bxLkCtg",
  "key23": "5qXuMWJvRMHMVWGtcD7MBBQYrpLUsrq6xNsqkJL49YVvYdCbHJYWLV8FvPr9uYmQY1PAGf4HtMJ1bLM7tuMx8paa",
  "key24": "2aiiK1UXJcEtUnLe9i9R4d6Uc9kqamBzY56BkicSVn5QBUinr44RGdw3LQAPPoTjSPVSp7BS5ZYFBh2Wsme7inZa",
  "key25": "zMFgF4k8MyzM54Xr1hXVYQEtgCNPD77fM1scpXfGvAwVsQs1aQBqTU2hadgAeTMCEeFSqpzzoKzS7WKGRvPGr16",
  "key26": "2GLtJt8WPjNLr9hjaKquy8nQW4JKQBSNQgodP4qYYhUCAesHsaCyCPs2etkRgoRdEefCCX7x5A4tYm8bDbasw1oa",
  "key27": "2bQBegm7C2MhQpbBn9FXQCJQN4SYhTGBnvRkfKpbxbJifxuVQzn8JqFvXgthWbTht9CCkdCDu3WJUudmPnZgaBXz",
  "key28": "2mnVWNQNQXSURqVZb1wwV7XScgMdwvfbiuAD3PvgjGweE8TyR6zk6U8yndRruB98Pjmk8ak8qbdKw6G9RwuHJwCy",
  "key29": "4cetqHWKvMEQcRcy5AnoSVHh8bmm9TZ1t9pgfERaqtrxTW498KbBR4GycxxkHxi7VaqoA1c5bsAnUzxbU1WMEy8Q",
  "key30": "4zKUWGCSK56iYFdX1ZBj7zN7ntr2DZPJ8Uc6PJ9EVtYA7casKSmNrqBTXdY9NYquWMFBsjD6eSyQq6JevsETCzg9",
  "key31": "gLbpn2zGPwkPyoAStAbWoAsyq4Pvst1uX6tB9J9p5NCjarGZU5DfFhagFmWNKdQcdyufDbxqmp1s17tLVPGJS6g",
  "key32": "2MUifEzHA6SeFPupVmA6QGXGiTWTchwfrLFigrmFxkgYgnmmuCUxWmrkEXD3D8bUcGmndigNSk3vEpkdGuTLArhd"
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
