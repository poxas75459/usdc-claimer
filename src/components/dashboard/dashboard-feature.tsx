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
    "2oWcY4X2DVMxmjKS1LG6DN4ZvzPVET7dfQK7oVtqr4EjGqzYZUvWDvDH2nkJR3MYFXj3AEzx6EtePacbTMhSEuNp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cTw7rZe11qRg95oprRifqSyS4r3rV69XSzJYEcbvfPR12kQCNQQpE3i1soQ6mNjJ2EqfUHHz2mZLEbxzPjbGmxP",
  "key1": "3Rc79BV4G7gs3immP9goiCNydBVFa1mX1mgbaRd9qekUkTLnRnDcKkqJh8ovnzUY8M6vEu9bKSy6TVbPGQH3XdTR",
  "key2": "3dsfwq4vxBq8VHC854r1Lyusuay9FDVymTPYEMsPs4QWWxDEKCbskEC9HxjsWyy7Yod5NpA2ZTiYDmJW1yqGs9AC",
  "key3": "5upH22bziArda1SCaGw42GtmcysTgpR4Nm2CYdv3hw98q1NkQ6aMb19ZpyKCnuaKvuVK7mdFDmmH3bfPa3LpgNEv",
  "key4": "3MmdC7NsfbKTStVhoLmGcZEX7qFZH2Wpcrn58UGkaGU6SwZSdDwxtkGoMWChhXwiM9VBAsk2AMtnzsgV5e13qQEg",
  "key5": "3aMG1w4WcsCwtUH9CtKseUotWVfEH5bPFzdNFtC9iu3o8S8XTn65jGc1SEj61Bncuv5kKevzCgjg9SiV7wWpgrQs",
  "key6": "3YTJvBFJnEh6dh4PiR9cEnPWsgfy38BbpHk7eMoocT6dnbL4zKHCbKxQtaa1VS816gD3RSWtwF4GwLqT76kMbZrL",
  "key7": "3hC8D85eevE3QJQMSmeepiJLJCamPEMPzmdj1Tk1kuvsna4n4S19w3k9UpfHuuniso6CD1PAro6Av15udG8usyMz",
  "key8": "2E4m2f6QRtn17M859RYL4ADDD3txeAceGvr2yTtqEVXExK4bzKEcyyLhmtVLezW8RT4iWHUBr1WCpsyZwSLDrqKF",
  "key9": "G9MNBcwkPC33uVRsk1RAjVmrSVY3fLatMeZs3hyJyqGBLEWZ5vwtHvva3k78x7r7fKZMZxd7N7y9Dw9u1RECsBR",
  "key10": "4J3Dniz7L6kNaDmNX9cdsciM2ZXvuBU7h3EmuVXkj41gUQjZWHnYV7TwT7DPBUTmgo4Ex1wQM8djkrPUwvDHdeg9",
  "key11": "4346CKL9uJH1hEQZwQW6erfhP8GiKUi75bZc7EWqPkBww3VTLAPGtGtY41LQiRpT6oAjny5gRksH7APLniitVmDG",
  "key12": "WKRPKWms5HAPxnBFNV8kaoR2eHfkJuu3xKJXy41BCSk6EN13LN3k9LqqgHXzxeKCx3L5gn9R9vN66Dou6bh5hXw",
  "key13": "4snmqHMwVcPVW6XBUKY6uZAiukQD9BDZbizjAMkGNScJrjWyh2sygjzhaKsQp2GBvZvQCYMNsAwpiAH9sScFzmrP",
  "key14": "ZMjB5H92W4Dz2AWYAZhqCuJLEGukv3GYcQY33rMMNQ8tTUiWuvN1FmNhEhpSS98HmrY8SNQ9kgorotun1FNKmh1",
  "key15": "5JQX17ehmBEer3M7yHwJuSz4hcDUmKGA3VUq4Z9tHVLxNPFAHVUtuAfaDuxHQ44HcjoEsPEVMpXDGy9pmhnB3Vnc",
  "key16": "3cJD2oyx6CYxTjTW9AUMLekdYefftjCQUJwyWVxiqcd2sZtr6apsnm6AhqUSAiyxw6P76mgp7rbe3mo6L4ioufds",
  "key17": "3Kuk39JpsSMvYCNtxdAktfphjXgHk2ngRWkDq2rpEYWWEozYpJLoCQCqqpzDniKDQHYBY2zePpyVptwEkRBqUwtd",
  "key18": "67J2cDGYBqt9FF5SxzADDywu8FZ7TCiwCqG4QuvgcGBeqxcMNinnosgdwLw23JjUSydr8qe4gMiRSF8iAFaVhk82",
  "key19": "2m9EYAvdtEC9DPZUTcTrnrvi4bJxkqpdnfysmRrvMC4SKRwN5ko4oPDs7x3GEiYrE84jhsMEQRa2hs87rNv1ARvU",
  "key20": "31uPGDRMSo2p6jFfNKsD2353MH8D97oNWswHfCQqiYcoEn5gzSG7iCtRgnnfnjmJmSfPwYNjnegua1BM1GqdWQWc",
  "key21": "41664Ei1oF9t63Tcv7MkdmTT2qqDqwFmHSKiBenSnRYWMKTj6tZmmMxNyjPWAGMg2mAG73C82muYQdQhzKvsiCku",
  "key22": "4PuAyiLwVyavMgKG4pfcScecjAi9xHYF34QAiB9hWupaELZSFJvY86b1JcD4F9keEHtPzCSTt9niJ3PRJ7Nyn7VA",
  "key23": "3wFck2AmYeEFdniV4ymBJV62QFQhyym7bdNsSTHz3Tij8ZeYBUETQjr7Go7ivTF9QEeDZ9i1omFCwwMdncjs9nb4",
  "key24": "mt9G3yv5bvuYrG4HiTSRKkpvVUCzXVAuxUD8SqmAX6kV3nkTLzujgXfsmPWaj65UkTrT5hmoSahdSE6KYK5b5Kn",
  "key25": "5LnMikxCYCmPmfJxNtw8S49G2cwaK95NBsqUWzaNjg35DCMr9XnTCGUDaLoN9GiSHQHGuVYAGpuHYHc4QdVFSVHw",
  "key26": "2WXqzFWJXouanjYnFWRw6Sq1NXY6YQ4biWtBGgfSnnNENvuWUMnjKSSWDPvaeYxbfRkMaFF8mtGbmrvhnNzjYnS9",
  "key27": "3UWMa3F1SEa9nsNEjwGD1h5157EUWhWFubjYB3DaYVbvKm3W988jfA7hdxioC9yPsqpcVN3a5xBqDUN3qXuFEuXg",
  "key28": "UVSDFFgFDAerYGDgxo6tDetCxJTpxJZRc4QNjejFjmwHWGRNu2scTWixh8kF35ddf9pYSaD42jPsEEAfsmgyEfr",
  "key29": "2MyAPo6xEWYJ1MQTnYvf6FVFzQF8UUvVjXbZQuezzeobT42MzhgjcQL6ivfrCcdaPfAHPR1dLCVBaXNKtpt16kkN",
  "key30": "eLXRRoebVzQ6yMXZVRsZ1vPYMjJKEocUvyWNzJmwB3atiBPNUtHTVzULSvGDwETqjAdD1XDvpu6WxBGaSG86fT8",
  "key31": "pg5ijsjQYuGRRuEVtDUGmo9PdiJfYGupy1ZLTBEcAnWM7k1cMZfBfAry1yHxfGreKCByA6JLffirpMTWHD3TBVM",
  "key32": "4FyAqJ6UBrJZCzznRrG3t6cDo2fA8rE1tyUDapLaVLyiE7ToqEKTATvCaeo8LXiAiPzrEN8shQyV7HGt7yVLxGh4"
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
