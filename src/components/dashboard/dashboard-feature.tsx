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
    "4QQrbhrNYLqkVcQBAUKfUn1Fyh13emMP597NxxWnqqN6Z2ztkMW7ESApBd7BPF9oAvS8PfevAPNCAR4ugT9Ppmqx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FDdCm5pD348ieA1qJ62fozkkTVGuWRYZXDxESJugFTUxX9XtYXRBoYe8jFY3n5BYRbaZSjj1kEFa16fViUizPAU",
  "key1": "3pqn9hFB3rBmzqLK6fBhQoJpFfDquqz7LJBLPqMaLaCymn5bW5RPskJgexAbon56qhqaWyutGbxWQ983cHdm8bn7",
  "key2": "4vaSUeyNdKv7aYxQ1vTveorHSGShZiLX7NynsJ9M547FEJJ9diwEVz5Edgb9Pb5tgXVzTMGpWsdUXVgXwpbqZ7jr",
  "key3": "3FWWhwLHjDbneQFFMZ4GyxgL9iEYibZCp8L6kPBDvhWNbfbemyeH9odeaHwSENS9pGcJoEatS8D5G5ZQwb2fQTRV",
  "key4": "4eE9wx2UaH9Um26XyQqGHkP6XKxKQuZ45Yw1Pt8wnERYXDyWMy5tWjhz7cih7Bs9dATmHgv69kqrsNsPZSC7krfJ",
  "key5": "2UCHkciPmHBd3eKEAzR4BiFhZEfoGDW3AbCcbDVZBDZDNrB3g7BcfPBUgx2quejeZ79GmNSZ3QH2zhXZ4VLbX58H",
  "key6": "r1aisUxwzbBAihLswahx3cSAR5W7fLveQgLWgDTuAkXF4TB24NV5ByooqwMrp73brqLuxQyiF3fFht376c1Y2be",
  "key7": "2EC2gKfMLDiLAGT2eTjGAnoEHqrT2sxTjq7FrrQWCcTLk4ky9oqJHs8Sh8HiDsqJo2QoocnroYZz4NSp21yU8bPk",
  "key8": "32Bk2SNGw31TLYjGYvCAAvT29Q1bGCgdAQtsx5yftS3wJEsiDgGcqnpZrFKvhwaQyE6VDGBkky4V2HM6gECYdBfm",
  "key9": "5fuRg3LN4BDo6NLnDukPRu881jLXVKJTJhKEGujhUH9yNJMNMyxnEUZGi9Et3Qg21VDdVxJ1sn7AbaZJqV8ptSiM",
  "key10": "7LzKJskJrrEBgAFhywyMZP6zTi1afod66A2MBH67r4LFuKS4yQw6iEm9cgLoG3oJFRioz6P7D2HKdcjYWpjYAtK",
  "key11": "mx38V66hyenHVMc9nee3HLqY3FQtgPndv62p6Xx6PJpoL8wGKUxqXz1463AjWcBqzrXbATW8axVHTSPZ9kTjueh",
  "key12": "3eZ7nY9Nt2UAU6z4W2kCQncensnTLkFsGftkRxw435dpZ4aik26zeR4WcW8cf6N4YZfgR66Km8PdpbkGNmDq5aRd",
  "key13": "2yXmdzPvEkfpf9t5ZbBjDT3godHZkt9MDdhrb9inSs1BoVv9xgGmLnPJaTYRjEGGAzMtCoJGvBfNaZN5qhC6Bbkp",
  "key14": "33ZddxwscWPNEvhm5ABFt9Jbq4GycjVSkDHF3ZrGpYYTapEoFi4XJPvf2JssSGPsqJYi94iQZjRCDXX4hLaYbQWF",
  "key15": "3tChMUqfT7gmN2SDkGchbhrJnxEuTc5SyBdtdJpmd2XTqStjQiZ6Dk9zcfaTW59GuKDoxg3EDrPtumnVSFDQdDsW",
  "key16": "4vVryhnGdSrpKSHk3cVwzjcv4DGQPDSymMnxLYCRuNK1vEEjoNFQfHatm256V4UWP4mKCbs8d7jGeCxsW6Qs7E9C",
  "key17": "w6XrsZZnuf8bMRHcJAcbdAKEpRG6mvPvDsxxU9ULB5ZNwSYqUHytQX86FUJUia4vfxBhbUDgzD3GfQzjHuMqZoQ",
  "key18": "2ZHYwvCQ198YjBTAioyrgw7naywC1LeuVhJtdQAg7vdXMDJ6CpnH6X9MMYkia7LYgXAaxzqMFqEGSmTqfr451M74",
  "key19": "5CqeDsW8JN6VWebfa73trbQRfKYgCd6MtVEVuYH31TjXKVcJecsgf623za76X6yh2UgFof25KRLUpzkJvViJVQhU",
  "key20": "3yRJ1XZ1cCrmFbMXXtCMorvKDz3G7pCnwoxnaGJhhi2hC9BydL1jToLrBGfQE2SVoAo3EwHCPbwqDuSgssi8FGmo",
  "key21": "3h1xEqeHVqtpmvZhPgYi4GN6Naicy9sacgiMUvEviHXHd4NAw7pKJvZ3ehzXET324bknAKxAH5kgRvMvdE3mtCKH",
  "key22": "5ViCb6tA1WPVpQ8PrsGpK3Vckz7QtfebpR7VxdfetSBzZK3yUzuJtYNFyFj3za4m4j4anJQwKun39hupyZoGY1ej",
  "key23": "2SHteBK45Yq5kiWKhrPMueBs2mSayyNYitKs1y8jDxqQiXUyBnqeD4mEDJ5onVUFxpSW8BgXkeTTV1J4KMwoituP",
  "key24": "5LetoZAtYhGFFb5mE28twgg71sekCZZX1jdQzuUoCWZHJ1oT1cc1df93xPETjTbUSWLuM9tAZHo1xLXKNx55mRwV",
  "key25": "4oThWFVpQNLkULBdNZiw5pmKe56T1R2iUyXRaUJFiUW4i86NcdJRHPZRFvD2SFPxRBS4ux3qa6cJ2M6Bpv5eKnTb",
  "key26": "3qx4bQLVves71YCaioDKf2PySxFimYRF3jjmc1Xc448oC4AKpsdUNif88rrnUPhgQtWw88znN3erEKZzkxmDQoTX",
  "key27": "4zMyoAAEHY4EcWX5k5gDbunHgAcjcAkvu6zZSXnHgQkBgQkpCJy13PcmCdny4sE6kq3zd9Z6vbcxtfxCz8hunKwd"
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
