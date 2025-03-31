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
    "6HcWezBsxcTXBHfz84nvHPoY994wYKurfk1NTf7NjeQdapMtzgZDZxcjwRxioYk25D7Z7L9P2bSpX7fFDHZoPJp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AGCLCywMCbavbirWNYccg9XDp4hftFy15bQf5Ex9Bbq48VW9m1ccBkV5XMRzPs7699o8ngCK1eDtsM9e8nMHL7q",
  "key1": "3ccbGciaekCL6QDUHJGQBoX5d5Hj5wd1AW525UPxjh7f6GNf8Spo3bteqf4KV4KsiVTDLxvA7onkFg1sQ3vPWQh",
  "key2": "41oqjRYFwgrkEh1xwe76fvthf5JTWSzG9qiUSrfh49kVkw8AKe1tKLzeqsimrAari8d7Pu9Twz1sP7bsWnNhrsrk",
  "key3": "BKrsBNZT9mrSFAtUSVJisbLg8k9tzoV8Rd6y53bLyBHjqB73WU6QQ6bVwkJtw98EbMmx2VFCZ1tSqVvrMNAJsc2",
  "key4": "26HhovtkNC2BsA3iEb3FKdCSmRPw9iMUSrwvPNTYLqp2Pk2UghXSfw5vQGuG3YnEnaki1neHGmr7Qt5GTUbDD1mJ",
  "key5": "5ZgjSffttML89hqev9yo1bM5wyZro5qLKJuBYHU6zK4vLShDp1rYzjGst51wZcGAZC7NRrbiJ3FrfkbS9JkjnW59",
  "key6": "38u7w94ZYkzrDGAVocoBBQ8iNFGDFCjCfhafCUwznFRXJotDH7UoEWYrpXJ49W19xBRyvZkjMW88eoUo2GbzN3nA",
  "key7": "2bHDafzFxtpMcF9K7yXEeaFoKpDpLCcmS9ZihAkXY7AbPFuTPCDmxU8dwvxA2d8LjDcmnqbrERaYtVKivKkujyfC",
  "key8": "5pbfthzEEL93y5YnV9JoujszjsqP3b3KLBuf7hYVymZh6zumJupPEy8ngkHwR3zfr3HNqAmWEcJzoPBnj4FM4VC",
  "key9": "67PJy7dThPpdxq52a87aRNvgYS2D4tVSM9hYVrsJ1Dow8drVtcYjZYX6W58PV6ii44G21Qik6Fr5nW5u3Zg7HY9",
  "key10": "5fTmnejWz2GFrVM1BrXviLsmyNVd1Kzdun86o2pxkTrf6JHLuLDtCTri1FwDUgYYRvVgEUJvbR9rJi2K46D4WV2H",
  "key11": "2hrpvBLzHy1LZtDwWfT7TjmWakZd1qubQwHUoG4gAtfJzR3uVifN2NTZrKkWkRwDv2jF2nRyJ6tRoi1KyM184Kmv",
  "key12": "3kumx114JMFXR1mDG8CAUgvTjj9AVtcYU6D7qPjJJnSErH3LNqhdFJuWbuv7BSjM6DPvUhw9upo5h9iVg6ThCJ8o",
  "key13": "1xWB2KRDexFwNtHztmawa6utrFVemaaSSweZgMA3FCdPt9wEi6ML51YfWVL3dkqmqyPKkoy1QvbxzZYMSVJGyVA",
  "key14": "2sPJf2xaXg1nitXrEwnTGqsC9dixWUQvTZxaVjgVBFJ1CAJkLkQCkfgzYBCjeed4G2jCW2QaMMw8CQyFaCcxG8Qq",
  "key15": "3VHonLjxktn1jhHpam8TanHikofWPoRbxLn7W6XaKuT6rz1svxo1vgEHnXKL8JMwVqZ9rtChcpY8WNPzuRKavK3W",
  "key16": "4eNFSPjwMhS8YSVLnTxUnas6NfpfYNa8NhazTPvJUJXREZZGhbKHVxPMR17PihrUVEaKab15gcs1GKkZSuW2BY99",
  "key17": "2oXRJ71JocGkGZx6wj4MSi6xDEQnHVRCX4v2xWqAGRTjC3SaEwFEnbP46A3uSEfLvhUkW1VuS2WMc2Ja4HcYztww",
  "key18": "2Z2CNJkWj3KKSZXopbB6RwzjNN68fmW6tair78Xu4Ad81tTLtcoYUzS5sCbQ3pN2AFAsVae7S3Cf3Fj8rtRHzqVo",
  "key19": "513jYmVxzwBWKtMc88Yq4kP74NfYRFsQF6uSWeFwdFsCumSGNZHwUEbYtoUoUAJhdj7uEDYpPkxQzyoWxUzEc4vL",
  "key20": "3NLZtPjxAFhdzhm2TT6v9jD56mBwgpAwEZwv75ZZn19TQoL6VuVieDExJeLj1vdZdfx9g24LghrLGL76isKp2HFu",
  "key21": "CGH3PGuGEU2Ebmuwym9tTUWeWCVAxNf1wkZQeLTVRzdy9ZiLPhy5ktV1ZJAYbVPqPw1pFMT5qo3SonHNrApF1kQ",
  "key22": "GQKoaaub3cJbWPCfZ9uXDVjGUH8QJzF1TurpqeVdgHnoFfabu5H7Pya5UtTMegAcgRdPGBdjHd57gCAWvHVuEnw",
  "key23": "4FVxYupJFWAJT2Xs4W3KVaggQUXoNLp8qQsNn7hsJkzVrVDmYghETD9Nyy1NZwiJGeemEoa1nWmM7Zxz5a3ULNgp",
  "key24": "6XXEd3epSvwGWU36uaFEdby6gPEoHaFfjxRDmUNau2nQGvqMNeZWLSgayu4d76gZUB4uWg5MyuJxQAxCS7SUxWC",
  "key25": "v95b5VpQGaXrnrgLQeqeo4Ti36oKeS7uAYXEAikQg7KAPXriiTVaWXWjnrdQtooeBe1nPPiiYm9cDbPTU5uTcY7",
  "key26": "3VkzFUREcnhzVmXWUS5bqSJkUsHnDBDtvxud1vhYLNUcdx57jNVobE9MifGM9fXas2ZKnUoiK2iWJPtYQKeNLvid",
  "key27": "AbfKGJFjwWtE57Nvkr3WAAmjiANzjQzWrQ8UyURS24ipLSoAKe6Y7KdbQLsb29MZ6xLbW295Xakk63Np2yAA2iF",
  "key28": "5LfSkVScrZNNGsauUy6gPREQW4dwvbZkXbgT5GDZyZYvLeU697baHqZWWFGL3UEqc9KMzSGbfbM3xagiKnjZj9Dj",
  "key29": "1QUStS1b3zhSNeaNFQt4AhHbZhdK52NkGt4pJrWgkFuUSWvXq9Z6AR8wbQ2irxkP1HZRZ8ZstRKSghh9ZeGARuL",
  "key30": "63XLeYXdtAonNwH5XWD4yERc24CihUEBtxHhc7XPZ7ejH1ojRGkDwEcr9DqgHzaz6tH3oQkf2Fjyhr6yZLek2GNi",
  "key31": "j3pmAWtmgEc2AYE2cQJecwGAjRsQKEykAXAxJh776eb59tTLvkKWHa4YrXsrwniHEA6XA887JjWQcFVgHsWVfXm"
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
