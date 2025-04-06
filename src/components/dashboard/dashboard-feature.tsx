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
    "678dDofdz9KGb1q9RfWNJErcT2kZYVYJA497USyCMZxXBTihG4rM7eFBa6sVWSb8WS1Wetd9B9dGyjwPzM8i6sQg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pxdh72SmqMC3kdUSYdPL1UYwat9p6mgTDYse9Ty7GcaypchDpqZzbUxjupLotJiqGFYtQ2htwukXLX3hQ7boBBF",
  "key1": "yqvX5vqeMWD59CtmmCNWtjv9LdLLrzgMWGcWWbt1C1sdmGsz13biCXX8RDQQiu7ZjXHYvEj4W7cW2zGasYqhaRm",
  "key2": "9hUxpzQ313zSdaS2qGQDhWHUU1iuwB4omuyHbgiigAntLN3c9yCC9NrgDikQYMKMkVbmin43sU6w7WZN4UdbWn3",
  "key3": "2bz8Ke9uM2XJHaGmEtDkwX9BnbLtjjA9HZBcajzt9uPcwuGtR2XdHba1eF38ZamyqQCj4TjRxASJR2VT6fRua3Cr",
  "key4": "uC1KQpNdN7WDxngaAamAXWNdWPeX294X5hJ22VyuwJpFPHygYPzW1h51HjjSgBWjGfNqomzq1TKiQc8xPdDpdSi",
  "key5": "39iNGQe5PKiyPN96Pypo3DJbBNfWFVfpqN1P4RWLYmsCoFcwmH1agYbPsKJ8sED8P67UH7kjFhBVVbeeNEa9QuXH",
  "key6": "2jmBnrLgdpTFR263VzBs9QoFt8R64sGzpzGDvZwETniGPUoLfPNUhRCfYMxaRjF3PZXyJKs3KgNdRNRzBNc4GHmW",
  "key7": "4ciMC331gS7yLtL6MSufYA7BKahqSLNHB5mvYhAFxnB6SAVSg6HLdNCHbU28zDnsk8yVTEPR2KgwGyfAPbYYiC6Z",
  "key8": "3o7ycwxivYdn6DP19p6sDWyqpRGpsLKQDdMrriUMzTEftp3Q4qufNwkRiQGHWhcYVUJJ6GXaf1Ub1tLByDiifNgZ",
  "key9": "5BozmXhH9Hvu28hZF9Fw2GG1urbVQw5HFirJtQoD89mc2TtiSbPrA8ba1LT3D9kdXMdffwCpr5aBVnREWtCspQs5",
  "key10": "3GZzMWUrAQn2eUTBay52K6KEiaFeMHUQ1zxGGQb3inPECu99rzs1k3g48SfRSrcqfhpX4SNQngfcP83xeVek1MAM",
  "key11": "iLLH9QU5Baxb9ZYUaDawjUoBZJxrqkEzTNKmziYo8k9Nzjj3PtXsuE8skjwYgekcfTatdir6nyEt57QsZrFY3Xf",
  "key12": "4UCRk9HnmKof2DiyAgG9hFqdzZU8WwsdHbU4YZfiC9KWLiE9DGkKEAZbETqoGjFkKZDZmKSBQ9wbg3bYvPy6JDZB",
  "key13": "3aTy6NpBatZc9WSArqmyF3M3aizyS9rwki6iXHBbJQjoRtxc5w7QCk6Tw9Vn3nR2whNPfqXHWx1K3UkjEnmNcXiK",
  "key14": "5cwvx9Vw2C58qkemZF9WPJJKnMo7BKYCcyLrd3p5i8HYWwa64kZYru3yWVVGyoVADCaMGYJBGpZbpAH2jkE5rThP",
  "key15": "3KS88ivZghGnXPr4tX3BSUcsGBgv4YieQxMz7hjGnzGrepNobGRqjCdnFjYYuPETuPxSv3YMbeduTbpkeUi1FCxa",
  "key16": "28qGcwr77wcUcFrBFX2rC9JprG9kB3xpfwbX8avwTwqbsFHG8MVcij3oBNmG1keqvQYq1eNTzKhNee9n4FaBhqv3",
  "key17": "4jTYwEmwoRVjghXP1zP7U1EDs2qBBNWbv1bfe3z8ayG8RVHA1szb3wZMG59LGJexcQV4D3q2HW5Zz5VmKSJmaXKz",
  "key18": "53WhRT4yNgqUkXjJhfRZd4ig2WPRMm4sFjN8d23Nb3eZygnrHbVDMhTGknmbnxc1DTrG6jPR7XPpKHGwuYJZqpdx",
  "key19": "4RQdkp6UKqNtr36iaS9WQbTNt1n3zGTHNcNPVQGaz5QWRKa1wgcgaAAyTqPX6vKZdujrgYtgkNocW4Rp2o4mzuCp",
  "key20": "33hCix9hiGjDsctVV3vfiNGrBQQXVoZA1qqFXbvkZ9W46EbA8sk6DqGLm4Ray1BGT8XAfUSoa3rp7AqaeJei6BSh",
  "key21": "422ytxyxhidRwtGhwM4oKVjV2fR21ZQidtk7FHzckJRC14Ao6yevuBFL9jFmiRQGGUprE7w6VZosLRrhevfT26bb",
  "key22": "m1rqR335nWMMj2skNKU2EjB9bAuk37EG91ujEK2kYSvmuEq2YVwWPeBq1zmNGiVLqA6W4c5ZWRyCWMJrMyXeLtX",
  "key23": "m6bJqjPbjVS7YRn9yfPtaLXEye7XQGgvc64zb8Bz1t41ZFW6kFAuEHDANSEqWVRqb99hcufLJ8SYxFp5AWyNrCy",
  "key24": "dQRGTvZCHz3CqEcrS8xprapn21oTyekNEFsytAtuyY92kwJXSg9MyqPj4Kz3x3tvs6pA2kpeR7KRyTZFu22rhKS",
  "key25": "3PyUdtnFyphE5JW9NvtrGJ3VzLzXu7BVMCbdfuaLXbAwsCq5N7ULJ5kRDMSxYPDWgQ7rZUUUTKyW9nrwJLTer8Ho"
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
