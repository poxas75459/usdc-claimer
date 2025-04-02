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
    "2n3PyNmZTENjFTUXpYRRmk5utsJqeYqw5KgQcozxq9WyoDARJUEFwpTdjKRzL4rLumFZzMWAfXcKAVvgUGznGtQD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xrGZQ1tCVzrpex5UthULFPAV82JAvNW1oiVja47gnwCfA1PQWD8kdRcnXd8a5x1HrdCToWJAstDohk8vdyR7qXp",
  "key1": "3W3wbeSy3oZHsK2wRGqD2y5Y7vo5pihdyAyfH3HAZNQ6HBxb6XvTyFHR6qCtptFKvQTdgUg1YLicZH2JBxaNuqzu",
  "key2": "2iX2eAgemLNbMaqT1P6Cmv1SM6yw9hFn3V4wkuP8sf2d4tUjvRyzw9UsNaLKN3Zc3L9eoyAoS9ZRtSVcGtMTJcWz",
  "key3": "5xFzt5JW2s1TtPEL2WZPRPkUNNmTaFsbV3MkKDUunTGZDwNrUPCGvArQSUP4KHo21DybmhiNMt4WYsdMXhGss4F4",
  "key4": "4tX7hmNFmZufPEQn2irREhkYfZtNz9pyEY67bDtVjA1TnZWhykArEFoubnmZ4uY6CYWNw4XvT4c3PhWtQ4nvvefE",
  "key5": "xv96udJM9ZXz9duHQtt8myUWnfeZ3Epi69Krfaz6A8HnFtfGh6XNoeqyMJM4r23iqtsMmcgPKYUFxvCxgsKX9y5",
  "key6": "2o1m6S6PQyVvzJ7PHJK8EZq1vvgUwW2R7N6ggSKp4w7XhMwQBYi87U7BFmN9hef47NHgRkWMwaiWrv4iFFoYGJ7a",
  "key7": "DXjKrrrU74RzxbfEecjSa23kHuaRhbN3MhkxxwP9ANijQck2V6zRuFLWxSyjUZj8xXskgpYRRVcLHq5GLArNNhJ",
  "key8": "5wkkrm6iUChJugPeTCPMyetqwLTTzd36tqqpZM9Nmpwtzk1pruKp443L764xDEfYZ585ABUWwe8zKi6yueQhXvFF",
  "key9": "4AFY3Zytw5viRivhNLPDhG3i44fupQbxJNto8Z9FjCm2HRnwsXvZLNmaabPRhd8mV4iZLnsbgJbVH8oviuWL4aPB",
  "key10": "5YkL8iqE2injquB3cEEhNgLzJgp5mrEZM26i4SiYx6utSs8yB8hXsh2tgCTB3GF7LE7knXeuuy94Yftc2j7mfWet",
  "key11": "Dj1zYgKc8NDjNqwKC7fStt6WLLUuX9pdraBBAQspDaUQAUfiGEf3gf7nUMLPkUf91GK7qr8F58izKGzvtgUU5nE",
  "key12": "4nK8TzpXN2Dt1roKBLU97ZcZV3oFRch94oWbVuwV6EypQsv4iEnypfFSULKH3Ve6rpKYksvHF5fq7SsV3b91ddFy",
  "key13": "4iUnCmZSiFJ2Cz7UDSkYu6RjDZgPJ8zkTH5JFrmfhfP7pa7nrFNvo436SqjFST77Q3TddviaSLodtSkLaTVceWDc",
  "key14": "4ui6HN2Mug4KHSTHo83qhQYw6zr6xRHi77t5Eug9vvL3amveTzHT6JyJDn4eKrAkGXGaw8MWXZsBwRXznYfMvxxu",
  "key15": "3BNwkyPJFcN4y3J9bY8r2xspsSVpK5KTNFwR6EBmJFWN3vdkBFCD6mKvCt6W25XNnQu8W93PtfBWysda3VJue4MR",
  "key16": "42EZKkuGgYEoxw3VPhUB6GA4ChfTFjoYxXDDhrbsFfa9VdrxshaVvH4CzUEK7RLGfwwSjK2gE9gMBDcTsaeVzSoE",
  "key17": "29x39vmLJcvWoojKtkqAzeV46oC5bDUGFqGckSXgdcGFM4zuPSfcbv9kAMg1xULuwkdQUonW9BdFaNGtFpi6ore6",
  "key18": "2KDNkSNu91EFZFENa3fiuAQCzVRnBDbXGSJBj2tfhMXYKHusFPT3pyH3hc4mAzA2G6hiTqNuvQu8FA5rfekAdFeM",
  "key19": "39VzLXz6WZZXcuy188gmf38PAHvtLBbtJex66wYyvQKczVaPTpDXhMP1H3wCafGcegoyzV8cBFQKAx9Nj9w1Ciaz",
  "key20": "2TBZSy6iVXvck5Nkg2nF262notfq23jNep8V4SeGzQMTxD6hdTaASy6fMuSR3TKyEgdTNsqREY8xgDZrMNg639Bz",
  "key21": "5VbNWJnfEsZuzVMBHnCsHcrqfSqc3B3shZpr6PD7DAdD3nbcwMfVDZCPS1LWALE5QSxt2noJFhrAnDk3xmPrgLYL",
  "key22": "3Nimtk5MjCn49NFQLWo3aSRxhbF2QRvjTJF6gbFT2Cys6a6w56SZ55r42RbE3tjTvQ75VEtmhV4EQtnPfE7KYobQ",
  "key23": "3gs6LRDzfshLk2QoBijUbCiTYyZ2uSYPubFv1iGrpeRUZhpxVkq5amEqBvqGHRxJqc45JHgxXwmB3D39n9P2AyXu",
  "key24": "sm4DY7fyREkh1K1BvPencssi48tQrBGaduSPLVDYYsLk52tR7cVPxRBW6QAXtXrVk2fKFB17BdJ1DWAhcbNMPWh",
  "key25": "4gGDyF557VsBY2iqvShxBQazVtLXZTA4Qt53AHEqbLp4FnW7aSRveNDHxq747UPsDLPqPBntydF7GmSar6GNpkSF",
  "key26": "4DfCnoLQr9uH6LojoKvjiHGak9tcjdUrav1EC1tce65ZMcM61P4xFk8ZkcZGEr3zXFcyYgTgWxt1TeNMFyYLkQLX",
  "key27": "2niRL2CMJeQ6Xd3XCEeoa5DSvbyGraRkVccFvoBPXtuxBmzx1Kv7odcVAtNhEA1UTpdRfCZStfPL7EXXsMutbqN4",
  "key28": "2X1fspF7t6LEpn3mch7eBeoJFSfdubdRQZyxMvM9oM1UndCizfEvYxxUdHzbUbLJaqX6mDZDwjKDG18Eyv6nzfWM",
  "key29": "4nKBeQZcnHgFQEQ2BzVf4AuxtdpmrA9Xb5aGJi5PxbnketybX5Te5DZ8zBaxTAsRuTNWPPAGM4UnZwM8t1T3JAtK",
  "key30": "4tQTxQbWeTwqJW5B4QYGrK7z4xfDKoChMNxabZpaeoa6KmpZQeJLxQgcALezNyGLZr6KqFASrrWmsfBG72EBWBuq",
  "key31": "UiSHeN4nVWEAqTFTGUGdK43Rcq37GSEjR8AxoQCRPAimVvmYQET86kZrtCEciyPDniU97jWMuCYvkw81xvBdJdZ",
  "key32": "24dVYBcX5HFyHckEjhzbN3wyJxJkvEgBhwbqBG5NWLYYoCrUfUrrDfkDrmk944NdUJPmmQ3Kqd5bJs15zJJyDkkY",
  "key33": "3DSm9kZPA6s1nFg5dSdprM93yC5pph1ZN9t5yDsd3MuNRFX5hN74FuR1GSuuQqdXyJQbNYh3w4UqyKnA9vxxFx9q",
  "key34": "4najo5JPnZLeuk9gqSacBm4mAwN16YFhCtWrbxnjigCc345BZyLDoUiZRo43gtsxxeZhZ5BMwJyRuBB6dpFDAp7Y",
  "key35": "4v2h5CSrqPENPWYa2ZSTKgzQ7NWzSPGxNyyGbjv8NoGUyUGxoCXZyuSeuMcyyyLERRHJvaJsqsWYYcnxkwu6Zk98",
  "key36": "34SDKGCzAAmCz32fFMA1CggZPcoa9BDehUkYFs648e6XZVzNYnhYArnM3RgDqqDDxnrShR5hjpSip6mCcURNEPRm",
  "key37": "5QKEZiZYaBeGPxCUQKVKBijomdhxssxP8sCa2kWhKQi3AcihPwSZvQYaP4D7MzXD2UuBhUZfDE7xH4P3ygeUfh9x",
  "key38": "8HDCE5x4F4K5Wsn2mKJ6rQM5dHEbQSkCXDHwFpYbg5A6QcCUFrUyS48xwWVYv2apZ9NjAQxvKS6UxrNxR2tYjHH",
  "key39": "rmF4cWsH4cuArYXQar11rMtYwgwPgpcGHxZ8bBpgecm1P1BFRDsxRnYquTEiUUVHsKRPp57GSoW2CrWmmHdqmAu"
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
