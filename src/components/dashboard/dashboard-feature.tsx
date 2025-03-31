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
    "5w3hzdcx34bZuZMCKHs6MKajiZ25FhQoueAJW8ofoNWvefZfKXaZuiJKmqXdwLEkh4m3btTzZrNBETh96N1T9wLy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n9mNa79fQaPv5fXzrrxQkWYmpDLeomsUY2u4avzp2A7mnjf2aSnE7ZvkekvXuQQ7sVXupXbqvqZFna5UXZPzb82",
  "key1": "3wmKrJ2755jQXWhkJHBXYDBf1kmv3qB1g8u5ZK7NKfw6RP9bpcCKzkG2tT6r19Bo8ABzCMFypVsCEouL6DMQsokB",
  "key2": "2rvCvGuqi3TNHoakBgfvGFQxvBQnL7cWcngyMmVtRGjnhXqWCPvuuHiqboiF1NwPurV23yDGVn9bf7t7t9N1MdzH",
  "key3": "2Y3BM5EECbBLgwpE71RUsX9xszXCMqm72qTAG5nFiJodETeNrb9mL2cH7sMK6CCf7ZjzoDfGzFLBkQTM6cWTDSzE",
  "key4": "43uNmtHpMLuWfUxAd9czd6MvRYW3Ezs17ZbVdFsevFAwK6ZCnGTqwYQWUrYgQDkRJUyw685jgegA4U5SPnvC7HBv",
  "key5": "1DEwFiak9nEbxLDDaXBNKtZPfhG62jVWKRdKokN59kk9YotCwBiKKFekzi3Ww2dv7RAru6q7Fp2KaKCaBC5F4HZ",
  "key6": "4Qm6ET1BwuWBSJ5L5PrXFgNu9eeWZf7vANDwAvxNN4Hs34GV1Bhva1TD3FVedcRNpz6A6S5ZsEdrMRUodjrkk9E9",
  "key7": "2nzKVg2XPRtBw5UiTfLK5kgcuofA3P5e4tCu6p642Pj6F9of2xpqeETheML9wro5i84DcEygBqPyg9TJmg2Cbfpr",
  "key8": "2kwGt91PJXbYvWu4BZ5PUAWGE4JQayZVjza5uBEhDu5ZXEyDSejkMSy5tHheQdqYjLYwUhdKt9Un5TDLRKLfZRkn",
  "key9": "aKZPU9JdFhhcBo1o7rKzPeoc4cHrmECP7BiR3geLLKWv5d56QrB6A3j36iabfBKYvPcCsXZUQeAgcn8h9VtSBxC",
  "key10": "4ZovFPUogc2HGrh1kyzjzw1EKR8jaDRy2kmb1eUX2LiKdrcUGCTX4TqZA51o2yioBnHXb6B5MVDPt8zQD3JE5M9o",
  "key11": "oZezyt6jtVzEMPkLobnQomaVYvZdcmJDtpgtRQSPvzbUhC9FWTLAP9WF2ziwK4KCs8DRTLpLhG4BZXFzq9JUTSH",
  "key12": "5gwdxE5wXCYuNYbNxyYv1AEFsbNj7qcuTPgsbKa562ao7djYkpAnEBZ2kN4JyZfCa5HmWxMJLtRFD1UwWqmwN5z",
  "key13": "4L5sDUKwW2oGweHTzpqre69qLrGNR2e4XjowcUx2bG7rsNy278tZJ63VhXWSEV1Fb2ZvPNAkREDWnAfvamudyeoH",
  "key14": "4sYbcsXgW6V3b9VPBC9puAp6JZtP5phsjRsZDYxaGQTJwjdq1FQFGJajxCmKZFarvn19kP9X6sDggASf6kW9oqUf",
  "key15": "2NSAG7Z1USCnhKjuJmbzQXgnY7Htidd9aWxcmhpW21ogaM2h38Lgx9UivAvkXQ2JggLCEMwayv4nFSJymbmZKR5a",
  "key16": "2DCS5WmMUkbb9dRfLtgmepisinywPQPVp4u1bf1CGURLLGEiDU4vwvS2MCse7EyCfHFSfEWThSnBRUtzvQ1MWoSz",
  "key17": "bpiftx2uUopQsn7NVSwpYDadxQz8hVRgzrf8ysnU69htZwKUEqsKQsEEjLwXWKiStpesSu5uJuU964aXL6hHkud",
  "key18": "itANKZMstxhRaGdUBm5JjA8aKaS46jKbtcHS25SzNVYw3jPvPtTcxe4EiYZzhs9N9z7SYNqJ5ehdbYaNytd6bGH",
  "key19": "4jezkucB1fF2rZ31WM4KBaKNjWmDqvHLBtuJQTfggzSqd5125xg5vmB5fJ87Tq8EHJaw6D8CZ1UWT7H1JE1wRg1h",
  "key20": "5EYGrbgK7D6MArdDaphQQbob6JtyyodJT1miQba1BCVmoXWyovEMpQt6ggYFxRNaZYUZkx7FVebZTxbSdNHFpykW",
  "key21": "2Kx48uHpjd1nGcpmh5zkR5sH2AiyRoec1hnshbzsJ3mspo5Gh7fuEamHZ9trPt5VtqjnDVSx3zzAPvzr8ija7A8R",
  "key22": "c8L8B6pedU3zE75pjCJuZmAoBapyVEhgxiyR793zqLvQSUtmeHRciHsPY2NzChojwLVak9eMbnLTbyyxQrL5VLH",
  "key23": "5M1WwPLyRKnS8Rxh2txNFixEEbxE78FmzUmWznCyiucJJBLXZaitptgTaiyLRHUBB7ycX4YP61Cugv1LD6QDEyMg",
  "key24": "Bx9MiooMT7SsSa49ucdRd5JtLD3FrDYeqJFbXckvcrPgdWV4Dgg6Wfn7hu2YoA8CeQLKmMSoLdoSC8NfHx7ptTX",
  "key25": "51UggBuhGpuqALwjtUNUrSZwnWv3S6AQGxn9TLyFo5YfGR9eSznkcbrpcqjBd4S6WzzC78Ki4X5Tk6h2jh72PvrQ",
  "key26": "4iFjtMXF1Dqww8X5xxXbLiEvZBRkqr3uPbc96pQ8hzH3kvAG5LKir5r7i7gpK8FPAnJ53HFfQC2wkJpdBMqp2RDY",
  "key27": "uqZfKzJmhWv68P2NVLQHGtx3AsmoKno5k7e1FfhLWVygY1LZSQgVegyQK7a7pzkWmG97RJ9EN6o7icun4ThSiqb",
  "key28": "5McjNqJag1ERV28uVYUQow1z9X7Xdr5PmsXQvrgCyeRz3nBcxrFdr5oYrfc2CvQW65jELeSLnqzuKo9iCjZhW5pm",
  "key29": "5WNjTC954prBtSEVB46Vy11krYgm9AFE6ojvYwqvdSC2BdCXxkJWVvoiN7yqgFR16D2pr26uraoSx6fnRPuTnzHK",
  "key30": "2LTt4YsFYGDhQDYCMLB1eHvzWsdAncNNugTcoA1aRQgawoET6tEfSigsDKqXFjBMFiNNTRFhcNcMNmQrnTx2HGhp",
  "key31": "4Ja27wXqwoj3ZA6jVpxikobsUkm2tUs5AkJkS5qfEc6XJizNHcbC3cZoK7d2E2xZc6J1kKWpgdBQekSNww3gsQva",
  "key32": "3XQ2wy3cFJzfhYyHbRU2hhKKXQipBG34usQwaD6gAK8fZ6yUz4cHYhACGk1TvaRsCXo3awgMJnK5w9bGAToxfEdT",
  "key33": "38cQVUv7HWLfvCXmGzejUbNBYSDakmApvmLNHh97A9CXWvBRwGAhxJUsyMRbuM6PPK4Hwpnj5QoY1nh1L3n7PS7C",
  "key34": "4hBHesDCqBQ3KvLtqdvmUFH1NXJJuqLW8yA8xziy6UrLdz2X7QJ4rTtmz6q1eS8jBBBJhBmpHwQmzMwao9Nh7HXz",
  "key35": "9uQxjnotHRmE9GV8Fj1bP6WnYodpmPMEfeLDiE9zuxWgSzX4GzfjFU7hm5ecdpED9otEZMy9ifxPawUn1RG8DpA",
  "key36": "4k36y9YdCWA3Seo6mMH9TMhCmpwVRnjX89nLsLQAkqrHyesmKV8RHLGr9o5qSsJ8Bv1gBuvKEj4pZ29BsYdWpD3Q",
  "key37": "3PTF8NtoSByMZMo6Bn8oSuT8dWvQ8Dq8AYrH9bKDD2Dg8G5P68z1MWqgjhNmv9G9n342aZg1v1rfX32prGPkJEi"
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
