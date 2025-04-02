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
    "4u6XGdgqeyuFYfu1hLD4YRTr33VzxYQ2zPXnR1BJsTYnr8prmqbbxGxysJ1fqBBhK6JFQhUowR79JyJEaB1kkHfZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ycZLt19VAcgkzwjfmGaf3pgdBFuYQ8JCjNRVUu6eLuvocZb1DdTuKoUfWvkFYHWf8jh3rbzmLWfB7PYL2qdboUi",
  "key1": "pBs6YznMjjfTjEwbKN7EdhyegzGmrBxdv6WF6hJpqhRT6jTPnDTEgj7NiUCSm6RWbxkKojqaMyFEdMWVQXygVeE",
  "key2": "LtF39TuQTwQWfFdYzJu63RxwuQCMhZz4hyNtmZLSWkx859w3KLew1KcvJ9BGHgjZ3u7rmfYPYkNJM4wMu8QqWDP",
  "key3": "2u7Zj2bp7EQisZjp2AzeYZbcANZzYTQhLbZjQMc9t17ZvwLeHwZkPf9bVg6YxYdaycf13Thwk22UzfDbJnNB8ekw",
  "key4": "4kQJV2GrPmU3D8qhhcc7L2pp9SsKyiWPkmUuu52to7NU1S8eKZ6HjpZAPVGXAkrfeQL7HXhovUmS3cGkDWVxSWrb",
  "key5": "2nfu8CfNsmT2BnTtLQrEbYVaWA9EQqUGDFTTnxosUiraZBYtwAtyTMFq4aLbZ5zUm9f2U32HDWCyC7HJem2BGpUC",
  "key6": "2Jt7yKtAtVE9Mo2rSBKDbnuxtWquJQFu9aGmoWm9aBhh4ay3nPBkFJzY8FmK9MAjGYnfZDT8vjC1Fd9iwZwdzRTh",
  "key7": "2z5HCEbGcU6RtnnY6qC5PPEfJ3XHbzyzquyGWduCdsmCa2QHDVt1hnV8eriQW5jNj8pvHh1scF7NEfti6C4jJiHB",
  "key8": "4UJSthKm1yj9iamGo89uuEUP7eYXKzJRQ4sHBjd99jhUpX9j7yT9AuAqdLRqcG1TTk4TSNVbV6vQdXixg9gdCbja",
  "key9": "2vGVmrx6BT4XQ8FjLTfqj23wLRBUFgcVmefGmgmZFiiz6KuhrhLhUoaSrosjvDr3BY5e7Cy51dmiCcsbRTA4t4KM",
  "key10": "4A8Aq8rmiY6gSeDQV4USFBH1jvV4MHTS4on581EJcitvPEjhjXb6VquQfuwutSoFFuc7rxSbagBxSxCi27Kb7Fzj",
  "key11": "4jB2A6Q5ZqhVyZ6ro59jqSg5Tcrgk96bXLJyFXA9fJ2DQHUvLbnF5X4hjPmFR1NKx8xn58xvtgxiFJYKHDHswjNd",
  "key12": "2cvTmwmBUi4WJg4PBGQWAzYLFNBqi9em2a2K4RG6A1TLcYKH25KDLz7rdjiToFo95Z4PvuWNTzeiFofnhW7PDKPx",
  "key13": "63fFUmVSPGvvxaMV9NUYhTqikK4gumDWAagQTk47hLCm2dVCcJNgUXNzZ5vkQKh9eVmzs9s4C8RwBifVFkfEUUa",
  "key14": "5x2VRo84gTiG2SnQ7is25j7ZDekzPdTUea96BH3t3r1DDtP7i2XU38SUZbd7sdLNNUogFGJuUvVdGpSSMtadBFHL",
  "key15": "smiM5p3rXLwHzKLbP17A9NuADeVruRMvHSXNzjWVRKEhvV987ahd1NVThKSh4U7HjjdAXG4WAuhABpj8B9NsKdK",
  "key16": "2CiZhZckQB192Q94gEdTs2JFc9uwHRuP4mwSXjm6CpjaT8EPdWLd11DDvb4QV79G9NXnef4SghtFvYAHURJM34No",
  "key17": "2YByQ4zGBASBhVprsTbEdbBiEqrGENXG4zu1qKXrDrhgegvBWwBgQwgVvMACh4zd5mjyyUWhLBt65XaabQUS9fVn",
  "key18": "5oHMexkcsaFgBvumHnqKETFV2dYW93ZHCajZF7mbFgMje2ULfefByiuE9XAnmai9MHDykpcAog8HsNysVLpwPxgC",
  "key19": "iK87edkoHVARpB3H6rXWBTq7jyGtBFHx5SW8oGX9NXaNQq6hkULwnYRyYWYcnpyAfGVTEcdAomPoxbVABwhPFNT",
  "key20": "3Wx6UDNyvfREFzMhjQo8HNKYy72KBi3xT1HSueCs6ycNxCCHYd7KmCc3gFbcKzX9LcwfeojySing1AtqzaeQ9Rp7",
  "key21": "dGZZE9XDUrogCJknmuR5WJmjwgVkpKmWvN69Kc6Umcj9oupn4cuqyvaxxHL3yRQ97s9ABFAwzXrwyKSVN44ibm7",
  "key22": "53KH4o9ANcrq5iSiLButuQ3nEPE56E9KAJCpJhMyAT5rT1tNPNTGQpkz8EQuxTPzzARuAPee5zwTJFsTunvWcdko",
  "key23": "66SFS8pc5ad67arDo6STXtLPaJxXk5khRAvnAedm7QzPA4QJLi1MMq7epQbm6fRiEFxiSdspDcK7QFC9rHsnDgXC",
  "key24": "3tusKdXrum1pXnWojCcTfkqj2BE8e5FGQ1T6H38TfYCvKMivL8KvTTVdHzvA5SKT64uEiATJ2oKBpUiCQ1D8ueds",
  "key25": "64uEyrabkE1E4s6VL4adFjjrrAr7vh1yw5MdcDBDZJLnu6KyxDUTCyWHKedEsDXVSwMEZtUwmf7KhbStd5rRNFfH",
  "key26": "4ybC3qtjic2uhiz3Pm7pnGjvQTk8CDqNQzq6totQCSWrKzLXQf32d9ppv6w3chbWKr2wAvPWzZ5obBcTc42UCHG6",
  "key27": "3x33PZTUtjKE98ENtT9x6PgftUixmM8qXJE9VY9mvo8ckaAnUWyAauRvSXPegqhfzFZNYm9GgaZY8M3V1bBjq5D3",
  "key28": "3VgBAiSaUM3DGMz5Sh5Nxw2bV9ZkxGp3RT7UcPXujyNxESEFxWnd15wqTXoBafj6Sr2oXTQPwcprsWA6JdnAbskQ",
  "key29": "2gHnh1Yhq8iiFGF6upxwFpKMm1ouFEtdZTmgaWUDGW6SFSN4TFmkW7HprNLdgGtnU128eeUJxszVFrQmM8fDi4GG",
  "key30": "3jKGZSryZHeyiy2bXXWLjBoGML25ZKXz225eEx9gnM1BwTX14QCNuyBHBYNHMZdBSzFngNCQFPWmkYT54gvsS9vr",
  "key31": "3YBj1ZJvimppNi5xvtJV8KX5RnWYH7agAa6RRg1NENn5YxcAq7Yq6ACjdQ5kFxa7vehtHGHsGx6zfDBXAwXxni4X",
  "key32": "3nV2gnSqxowW1oQiu3xVXvZfxavSHCkUFvYp3SdMbNF7aqqQGeY2iv4z88JBtr9qYJmUt7qvXbVrWRrPLMfnutEK",
  "key33": "38PoztD2oXJBpqJZXcP4mkfwuqC9qcKttCcfKU4TQ9z1m5gf3d4ATdjE8MZL13y8jS4nstpg72K67LZ2js5U8viQ",
  "key34": "4v6kwRZvCHKj8nfNfkWCLFCRQpe2L5w4fmxgF5vq5Veq31qw8sHmCCU8y38gqpjFGdYDLt3wsGcaYBKpkVH9xWZX",
  "key35": "2UBXEPwEmiu84jUc84S6YqoFmG4bbbWkJ51GtSCc7cnSUuvtAMEtSzEGXJAAgAZYHLDdbFkURgRJKRtXcVqEykoT",
  "key36": "5i1qEuKkBHqdu1kvg9tZy2fouzzAfkQdyEULcBEjYjyoVc4DAoPVPTdc4d52NrHMMaWQURJ4vHJHTMovqP5LAkBi",
  "key37": "3rAfpcVa2mHKvFQbV9FQA9Uj3YEY4QphWt7urRY1FAGFnGmhd5Bt9V497xZNmFwScBwxvkCBeBiL2CMD2Rim5XER",
  "key38": "5NrTd2MH2DZoyatNR1h29PRjkQpsCfShRMzzoLe36tTgZCawu3fgYJg66PCTJgW2ea15Z1PHb6A7xWobhVyZLVoB",
  "key39": "3Rw1DGC8nPiM3L8AmJt6iYpicx4FBsucZ5AJqo5GNsX7o2bA4RcBuPT3i2XEuTnDGnmTRQnKVEYyjwX84WGSQaWh",
  "key40": "4Pr23ifzRReaLi6KNQTg1CiSmEDsGovdbN6uCeDWuH2ieadcx8x2X39cTp96P3BGRGyAJb6JkicztGoZ4tLGAJQe"
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
