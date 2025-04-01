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
    "3mgGXSjWZc5eVFgynD8Bzq9bB2bAXLYCQq2s9YxxnbjsP8TmjLY7vY9CJBEUCbMJt8YEPV8JgWBneR5L3U1Gmt7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EqMMV2CPSvJbth93KXav1VQWHPpyK6vB7ezaqrP1QWiTGByvbK5rF28zYhTY93srfhc23ELpqT3hdeb5FhiqSXN",
  "key1": "5nur93MGqTKFzLM7LcNcrbQcZfyQNYgYKCu4p6MArRsdxSVMhSjJxR87tcg52qvuihNgUPymHVg1A4woXMQxfTfb",
  "key2": "bkpU6YGyXVucJtG3arVunANjfPVRkm7irToUDUg6YSozuq6uhS8BVrvCgo7E2V8YJpzgYpcVLx76NMsi7Aczbt2",
  "key3": "2v3zqVcVg5uwgdfa7dq5WEjh4WaEzcGy7ivoLYhTnQrukRuWcxby9nBnPqKAPgyEKdB1VoxYapRm89YZeN9W8WZG",
  "key4": "rK4aXXpA7g4xFM4edNAAsZqyqyMukVTJuYHfqkZ2x98grWFDewKp9CgsGPRCEnmdNxpWBUeDLKpFZmo2sCGRFhw",
  "key5": "3wUwrQDiYC4NEc5LdGc84pmhe7GEA3pALXyETKVp7x7Pzfmq5FQeSqq7PGoU2Fp4AA9pK1NFMuGooi5axBHXFzYJ",
  "key6": "2R6jXYZorWutovHHugxzNoj8Cvy7DctijYkCzX1TiVs7FyaerGMnfmGmmoVLAL4To3jZH8NMiWZKtRc1wSsfypSQ",
  "key7": "36y4Q91WhgCyzWGY2DACkUMNFgGeGm9SN6teB51SmFo6jBENDNJAuJjs49PFQaxYvKuAMPwkK6YNkAjVNHYxyV1B",
  "key8": "5SQHwtppLSuUMGxX5c7y1bm7dux5pvQBNq88UqeyKrbgaeTSqquGsF3FgxbTXeYt8RK3m2AhkkZvaiT6Kvq5Rajx",
  "key9": "3Sh7wYo7jMdPSMLFHcRmEZtbC9j6UtBZdL8WQRSJXjoSm26ghnVmoaN1o14fRDtFeryJm6BefWQ94qTwCvrRZDhP",
  "key10": "29G1qfkpvbRayfpRn1TfREq68L97xootdsiw8dXYmVnB7LWU3jqzNoGNJ9yU6CCBJjJxLsrG4F6um45AtSZvXRgu",
  "key11": "4CK2UyeS1DXRwcKLRB33NuhQRddU88zKJxxDTnP37VLy9WQFxiUDCsxTkB3Zj1zAqii7z2drF3VySCryxj318xgo",
  "key12": "5hHmVrqD69qjHMWFjMVe1K6ovsaNt26FHQQHNSZRZ3roZvdYg9pfTudEdkNmpCXfPWJjVdM9KazstVv7eHfCd1Hc",
  "key13": "NSTEViJuoV38LrwRpVTAQ7AesDmBuGAUTFMSeeo5WbemsUPSaTSD6wVkbFjjXkx9vMYzHFAtXoHgi7bxMArt8ED",
  "key14": "5176bk4WL6p1eLhT79dbmgcaznCTyPrNgVVLjDdXJwfFDGzAmneMqPcZaZsTHtNYsKiJA44zrtnP437jGjMP6FCw",
  "key15": "36DvvQ6mgMGC7zTvFCoFGLDqB7PE3CEYka5mCRaKdrSwwP6ErsAdnYW7M4QN36LHY7AugBsGeZ3HLuy57WX4hVzF",
  "key16": "5C9QsSPJyceVMmFJteyQGEXdmJ3zVdHy4hUa8JgRwT59gxRVcfV2QAf4WhWfPSXCebcDRb271s1ZvL7npv6oJQCw",
  "key17": "yDHgZFhWuKfEkFTxSYXaYiAVqZq4BYuAaNdErQHsPRfFDEE72Bm2TFwFHdPEPLEK9J2PkikSw4HLWGuvqXmheK6",
  "key18": "56vbvWbYNgSTTP6XXUr6QHUJiymcjcBDRYukrxnpAnYGpqJ3WR1X7FAwMhx2fqaiuBwvAM6naPe3hNZukZcFSwQQ",
  "key19": "4uArEPzEwYcXbaTis5SQxVgxggKz2M4o4P1AtAhFcfE2k6dWmrxdiLkbe4fsd3oEmzqnsBKZ7jeJ28o1AoWtA899",
  "key20": "3KvRfHFUxSizhyHcQMdfNeRi977C9cvEgMZLdf45GkzaD5rRfcJzLijmuD8mzaK5TNYKACAGCdhQGvXrUob2NoK3",
  "key21": "p1hvhzPo65fUPbqR4dNzDCx16aEV2NffrfDW3Q8nTAM3rBVYHTCPgLb3BFc9p4ExbkrEPPMqMudpPYvch31cDWH",
  "key22": "aAd3RQAPkcbeK2YFS7Gc6GBgiiv7drLPdX4oDVFyjwDbfUyJrKYZbQkfEyii9WHtJniuoDTQMFVYYuq99iEKxwa",
  "key23": "38e7X23r7j6iAoi7bqf6VzwxZ7r9VaKSrWa3DKCeoy8xv888CAJ3AznHou8ZeRkfckVBfy6Rfuxz7DoC7pzZUoyB",
  "key24": "4PHGVXX8kDLd1hsEuJVvC9tLmaUAV5DVE7Aub4StygG9hCSQUeWiBZcQMeXFL6FzKHLoL12W5SGiCitfnqSMjJWP",
  "key25": "3D5VTb5M6AU5zhocSJ9c7kCQvkzxXa9Wsm9BJ6FfG9uRsdhQTSTe6v8X5ZPpsRoV5Gf3EdyQ2q9umTjjaE6bDws3",
  "key26": "5hxagKhpTWLR9LyzQoR27HtjGxRZpCjcU59dv1tS86FEKTPxrvEjZd5CkpUbr3Q3p8VJzGKvzZNX1HkrCo5BP8mw",
  "key27": "uq5sU5nWKpK5mm2JDwCCGwBHsGbYsFwcSWynVrvsBHiT81fj8jxqN31zRQCnXMvsUP7BuVdmCWdDrBek1KKPMxR",
  "key28": "2C7KbnTwj3o9r5Q1mZarqJhnppBgNTL48JQf233Jw9svp9m9YdobmhvjQSUvRCJxSGd8pMwEdKgTS2HK2JC6NEbw",
  "key29": "2jSnmywNHuNFJrrxVeVDkZNgfB1eaJzMPr38vJLrQgpNNC5r1wp6USPRz2nCiygyqEtGyzY394iv166SDKDm1TwX",
  "key30": "5y4d3rgrPtXyvb1SWFsunzcUpJhNFGE93yuVb9djUeyRj4rEFfEm7GuRQNyi9xdW51whhc6CoKtbURVcidhkNgUd",
  "key31": "2KL9FD4EmVgciCvZnzfJQrfWR4qDkA4r7ZTfGDM7UgohS5EqFzJDS688JTkR7ZyabYJXFs3ajgKRZnmWCHJyfSW9",
  "key32": "2WWtS1vU6jBuHWr4LhsjWMajkSjBGRgkKeUeZRepmJv1utusuFPG7e96ntr8gytNT9NfE6T1ZeUvus1gBkoB1wZy"
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
