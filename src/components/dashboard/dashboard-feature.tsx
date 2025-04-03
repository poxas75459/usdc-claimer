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
    "5VhvJLKMbFwbss6dHJw4AHjEeVL2mr8fZeRFmfk19uxK5gHQeecEpXFPG7aWTcfaf3z6ZWRkVTNVg1SrDosW9n5v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iuu2KYmV7eGQFnmLe2Tr2J5CeQRp6JeQ2NbVjbzhTM4vBP7h9WiHsSARWeNKBBoUD1RZb7gW8SfLd8HDzpEyk1p",
  "key1": "HGV7FDbHYV69a1L4fuF4ymEdwnu5FXxezcqTqLWFU9sxy9d7VkLyZDpkQRdSt3kVfXzXhV2XB8bkSKssqfKqytw",
  "key2": "4uw9CajVu9sJzqtyMoFgWfp5PFXuxJsfSbM7JWgoTWxG4LAjzgDFKDiBpfi28eQGtJSyz3pn7EMp2Br6tsn8yzx1",
  "key3": "bHvPBbXBjrWTQpNncm5xK2NgBx2aGHMLf62tQJ8RFNY9yq8a8zky1Abq9qBCmkTcaVdspThKkrWuwoi8XEtXpFU",
  "key4": "3j92LMw8hTYaSfZshYNrwAx6iPdBMbC2EGp9mbs89PivDZR5B9GRfTUX4oyUedH7FeNVKmRgREBRzjrjnDBdfm5J",
  "key5": "64MWGX2VYwSLj1MGAVqTGvvyAwzmByLRhf7mztpxNDVwC3CtK5Rr6Atr9RVG6kByqQnPM2oYhtwXY5s2b3BqLxVz",
  "key6": "5iFj1sVzAB8qH6gen9TSMSh49m6Qd38JTvWsfKekeUxKHe78E5gsngwutsyJpEkSUCH5z4e3kqaKoRgVYEqzhihL",
  "key7": "XSPtwYy1K5hsbkcxZubKk69ygYgDrdbigJW91sxHXyrHPY1dzYLCB9epcJov7RtaXJ8gqrpFvhDNvnuc68dxmoA",
  "key8": "4pMhfinq8TNkUQ8xNskaryMNmRoKPPFkNs1zCaPtPwPRVgF1aREX1SDFAuLcVcZVymGkuFMrLBuHzzLLgwTbS29V",
  "key9": "5z6qcpi4oCvZk1815ifXe9JCV4nk9A5sm8sJZFQ4E1qXRup5vjRtsex85qWcDHHj6k99qxFEjmK3GE5wJJMg8qek",
  "key10": "3EphdHfnw6ZxmouBXdkX9oJ2pdDv47mdWGAAHyVxw1YjPtdTw2SKA1THwDd6huQb3SGxYWZFHBSyDQnJQV2R6Tgn",
  "key11": "Y2aqauvqxX8JhqEhRz5osVPizNJPuSGupiehoAC2jqwxJzwHQeafgPPcqvHSx7CPii3Cr9bya5JDQmCWq2tStWB",
  "key12": "2WHvK9gToBKYBeGoj1ap2hgCPxYER4ahhH3cNWkPWK4mfCa6XSD2AkihMx22pZV966QedZck9SD9paPJAcAtR456",
  "key13": "64W7UJQzvwPCRzxW21ADvqsMmiN192PpxeKrgxsmXpitq8TKFKKATUsqe9yNidMz2hK3rimqHGEX6imUZ7YUBNd7",
  "key14": "2xCNEUd26AYqzSBtYk6NnvxFPK92za6uFKG3SZBWLFxutWuf2c3ookismdWFUsPTgA3kdtQTEfxK9Yy5gHU3FHte",
  "key15": "yLm4NDF7C3CuHAWY51yGah9oSsgiJtExLwiRvM4SybHVrUetdbEbpHh2sDwJC9EPdvVy883VKoSLbmLv9JhLdPw",
  "key16": "5GniSagLLiUQqjxcjTJdnwtBD1gsBuGBoAB4d5LkBSKbeNC8QuGCrxkhCrJtoh7K7eeKLvTV9MgAXf9pnr8i73oQ",
  "key17": "2hKbuTCHtS3tSKZrUtL3MZUiriKSLQgdJPi6cFip9jBZJuhrsZz4YM1SoJi6nfHEDWfSzpV6mWwj4xLGinMC6QtV",
  "key18": "5YYxZVgYyKrTrqTnaA2N4nvSs5zgQqagjJM2nQoJY5wdVQQLVnBgZe4LKQ1RUamZ9snVKvnA1o1v7QmyEYLvkGWp",
  "key19": "2s7JTRh7RbLXhUFBMziDdDLD1w3REyFAEXk2oWhVk8y1QTPh3YN8hKz2xFB29NAq75pKCyJXypWFf7woh59ga4ni",
  "key20": "zTmwZ9JqFd3z1FX7xGa6VEGpL5SUx89yfu2BsuUcVBqgyDTws7PoLSUgVEq3v61gDdWsLhkF5YH8z21Z5wZdMGd",
  "key21": "5G41WkqK9GKR7BNqxq5SWXCkdPVuQxproJQdUjTdgz3NsxwEg3ecmYuK2uGQpQydPh91AcraNKYsR96h4TqC4NVm",
  "key22": "3HJM58WxXsVsB7oZzq17tHHnkDQq7hSx6XuGud91y7JZsWFUZtyH6xm8nW7JMhjQyoscx3VuasguGSZoLVsAaVHz",
  "key23": "4euMwWFRG3rXSio2SkHyvgZT3xG5FggR9gdNSrPVKweBBvt5BzeEaev1yhYcTVzSxevLx5Dygy3jdombtm6VqzSu",
  "key24": "kn6Hcsx9T9k6r5G2aQvPebr7pmR5c9WhLvMH9ErrVhL61vyHw8FEMqHsjCijUD4vono2gbw1ANUmngsdCQtYQqB",
  "key25": "3MSKrXVBp1Ar97rrv1f7LAJ21qks2rLkvvd1n26obE7w7ZditnHKb8sWzADUvZhRBF7c9p6cZzNW6dCadSZ29G5b",
  "key26": "3LWH9RRjCkYqt2dK75sHTgKmAEJCcv4KDo2p6N9N3f7CCYS4vaETmoM7KcKKCYestSn8S9jvPRF3C4ABTixBiLXY",
  "key27": "4ZuTJ35oVvWcLdfwQxxpWeoF1XesgKFs5MyZeUFLhsToEQmEJLXjpU9a46UxChbtR3VLGSm5HjrRcmz7VLu8Rr3a",
  "key28": "3aXpthCcs5DY7QwSFDXXMVd4hvDESWHgLxc9qwPnsFoVbEcZnVtsvQUJiic8csAiwKNVeGukSEGKqeRh4RbvCTKg",
  "key29": "cvffZJRtkHfW9vBh4A69bui7rAECLYXRHcb3TnyJANG36A8pwLB61Cvouut6nAGM4VVEPZVXbsYT83GHVfUjmJe",
  "key30": "44ib9bqBikfnmFDMxno8wAy9YtHKpRjFgxJhbfKE2M6yYEp6BRdf2zzQ2NKftJcfmHzfkVNT7sFa5KiJT3KqHp1c",
  "key31": "4vjkYHnE7PDTr4LP4rr1cJjocrj13UBCLsbPFZ2gHEBw1KVAdVD8MY8TAA51M8FFqeugiBXrm1eBTh29q4fV6ghb",
  "key32": "3eGFNQkk4K15CPyoqzz3SDBASinCGPYs3vkX9cZRJvCBTvQ1unscYcj9xsqTLryvoXi78D5M1MB4cDL975N8jTNh"
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
