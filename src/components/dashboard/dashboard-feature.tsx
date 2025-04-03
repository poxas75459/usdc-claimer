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
    "3rW5QmYtUtb7ogRQ19Qin8QudNT7BssJsrQV6LNhyaDKY4tri9Gi5C9t7TDt3MgofZCrDD5VkLtbJjmvuaXSxT8a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66NzHfxqoSWiskkrRC1HU3J1bkbQ1BLU1gyh9UuNMRrmZzXvgaUdPb9gUSqhBYwUVTgPyyTvpiSA7HDCcedQwEs5",
  "key1": "SjYT8dWQXwCRB1Gg8GwofCyD7DB74tEnC6qkWY6PYzxDW6YtHbFZ3JuNsTX9FGqNLaMqjQQ9GwrUGf2srqge3YF",
  "key2": "5PwM9yPq1tbgMCNxnZkoYtxoHJgjzs3cB5mGfoyzR7ypngNysqcjJUsB61UbRvpshcXiSDEPN4oDfbqfsQpR6tGZ",
  "key3": "3VRGrUZqkjosUFVn28qTtarpq5DcuPdEUgJvNym8dgPRbMqMyfFMgYi3m74AWr9EGY2dGMxBKmbXACBtgRhC7STE",
  "key4": "434f7jDwZXG5MXuDk19a87wruCbXZ6b8bw965NyLGq3vEarBu4ZfkswJJBsn74NPnZVWicwFTBwJqaUAUVnAMLV",
  "key5": "zpkzAv9mXjuXWBLu2JiqGqfY6V1Vw2JaiX2sNsv1wzPKRvwWZaNk7QsugTMUXmH87bKRKN28m8iUuoXYUojark6",
  "key6": "3FhSXkhwBv8x2nNZBfqAmr81p4KYspcfZBqWrFC81oQA4McFw7qDaPPBEq7d8NoPTgkjieCZqYfJbDbxdfpjgoHY",
  "key7": "5DkLNfJetMNUqo3Px5nKxoxQu6kvX1pupWvDC65X2YDYVvRoQTU9ot3HgAxGAmJEJ44KA8gaVuAxeGQ2mNU7dhtn",
  "key8": "4krJuxDqiwAEbwZshELGUduVtgU82EhABoPcSm1ouRwMnzxiGKEDNpgUpL3uvZjUn4TBPciNLt3CDxm7s99UzhY2",
  "key9": "4NJgy2N8UpPX1dPPkLSmfdPV43tPxu8xwygzYrKHnwPKZDAchp2R2PQidFcpsEzQWyFHP3qK6wprYDWwYNhXsY2F",
  "key10": "65ygzxRqL3te4psEwfA79CNjUrQFQhLNJ7yfZzqdPMqUPWESdvF9MChhq5ev5u91WkN5XCAug3efird9EFWqWHL1",
  "key11": "4FoSEjNJKw4EzDHFHDp8USTYEPpSBajCGjZUrL38y6gVR1c1THwQtkwq9x64SBRL4SuNV2dpiicuFJxUT2xgMQzD",
  "key12": "3oifC9wXt14U6ECJV2Xgtyv3WiTVogKzbAVTYSuKaet7pDFd1TiH9VorMJJ5Bfeym7rhM8KjEw54b4uXr2ZPPuQU",
  "key13": "5dpF8bgbBrv9echFaJfXipxZrFybu1x83W5NzV46H7Z8B8pCdkTyQ4XRrunwjFW4B7kUJ3Kq9SRyZ1wuy2rGJG5z",
  "key14": "35rQaFosoWgLNSRtwUt14UFq79pzycyxHBC73vS3jWQNUeMX1wsFtrRiSZ9hKnvGiJSwTS48KPGs49RBXaRPSdX8",
  "key15": "tTMJDY5J2ZnMjpARnhRyiCyXXPnYtPt8Pi244E45NsAdBmyk2N85HcJuY9EDakm8oSzDeMcWsjCQL77zuuivUSd",
  "key16": "3aZSCpmEncj486RUp5TFoqfhjo4sJu1z5FSQxdiwFWEGdVf2DSNjN7tvU5VjPPkHNZEQa7GVhFCVayDbwvarux1W",
  "key17": "62tjZeYZ74QtrssqWiDneyp9rRVe1qh5adDwzH7Moyp1G4h7vWSbpfaFmXTZRCfLUD4hUGwZiS8uVmXkphS9tFxY",
  "key18": "2joFrW3Jq9Nk56dGzHSD5n7yXTPngXoXH2wHU9u4GYxtWm8JWLxk6S4KcGcGP44VmCoCdpzEiqgi9r3uPdLNGDEf",
  "key19": "2FTHBEYvgSF4UXt8nLfsKgJzLpMrFsCbcYEVKCRYTubXNz2y41F5tgXrHgt4dUST9brFNrFjkVWFTXbVajSStkrx",
  "key20": "67f61mvDd3169RLSXytiismGdbmgn6unFgys12J56x1SfkJVKHHn4UMjNXtAyA5mr22Tk6j74UauxK4NYvL84oUX",
  "key21": "wvveJhrYvvG9VdVkgP3z6GMEx2cNNTnkqtrPLh1jb1vWBETLCeMfzwMZmZfwJZcx7UxJiPhKNvG9hJPN8orj1EV",
  "key22": "4HD5HfQuYw1qEKuGUvoZWW4LeJmNjeqNTG9jvc8BHnRhJYgXT7x1GHbvXQijSZJUkweT1sA6ZWvP6or935mmNq1E",
  "key23": "4cmFkaTXQTseu5BtdkxjHx4j6FsvAjMGfTbjPAtezJBNHMGoM22rkg4yVng6JUAz5MYSBTpZRK14Rvu3xKjbSx4w",
  "key24": "5Wi5X6wTrH9PPrGtozmxJ4QjSRTfdBYKHyLYDQJdr7S3H43SdnEF6Ykct9iBRgR7uZ4X191M6R4fKm6K3pMAdVZi",
  "key25": "jxgAQDVWHx3pVYWnPYtjFhZdtPwifNRumh5VzMmUoE2TbjRMBLe9CoxbYrdwZCVp4Hg6hmxkRpjk96DikVnkidi",
  "key26": "4rXndSDmspQWQxfJpRxuXzQX8HMSskdW8aYf5WvcPLRsydg7aJNCjfbuTNZG5cfWa17yJ3hVVMEtYGKLj4hBjqqZ",
  "key27": "5iK1B5UxbEYgx9brEJA6rDoJ4whfAHYzcxtZ2fwtbuvJGvZqSsZpRYzbxzDEVn8TPzMLcsu8JLNYDZN6DyDTo9dv",
  "key28": "UgnBCpKkMJfEp6F5HUcmhN45wPfx9DFGywoadtrcRa6jYahpgF65LvvJyN6pmvf4oafnVbZopXknnGTTkrp1Tvj",
  "key29": "5xYFv574dcnRyvf4Ct1RGndUBN38qVNyz9Cuftqp4ToN7SXFGeMYkH53eeWUznJLDLzBiijctdcZ1z42GVdJpve3"
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
