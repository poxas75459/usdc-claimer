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
    "eNAYy6xudoMnXJzARm3UdiDnHNcxREMBCFVnc7LquwKb44XPz9NZGzX1vDN7d7u6pz14KKkdLNxSXUFFrTHLj92"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21vh6WtNAdN27LqjgWwfjEuRqbSBnkzzKvyJBn22BK9KbyYgbzoUNdh7sLiavXFvuM2Wi9yN5Pfcbp7szeps4WuC",
  "key1": "PYzHVSu8mGRGDRofxoTNL9kxqDroeHCXJh32D4vgukRy3Te4szM9ByecVbsrdG2F8EhgMBrvWRSZGvuoR2Phnsb",
  "key2": "65VzzaKDrcLfqmCQqYVmhAojbfWkanfBFMUGQQVgTfwspXRXei3n74GgR2UpWD8zVZEkMYgXrj7EVeH12LLCaQfp",
  "key3": "4dVdYD2akFJiucxV3tEK81WY77EnmwzvueVphoc4QU5tB1EjNHjn1CkEeRnKgV84UkTLrxVj2vdiT4FuYnsohHuH",
  "key4": "5mvGQqAFgd1wHgqQTRsuncjDjV2Wq9Jp3fgwcyjqaF6JgByNns6njMo6MGmvxc1gGDfmyXkat4XV3HTUKrE87VYT",
  "key5": "4maBEyBd8ggku83zBgh4rpyM4gy8iDjZUxgH6jvL2WYL4BpK6VxwHYpXLBBPTu4C3FiAdzHNif2TP1kDYDKZ8R7a",
  "key6": "3Q6TcyEYzqqoCramGtbo7Djr9pNJNWRT4M4qpWkiY1tqoaWzwq2mx6xTYnBPeFdj93dvCrfjw7JD1vEpqxFcNCD6",
  "key7": "dYbCmciyh7pSBeM4CbQESQBAoK3jsqjiBcFuDwKnA8YCDeBe9hTjBsF8S47M8P7qBwg7jdLAJJRRJ4728jMrNQG",
  "key8": "VLhNkF1JVf3TRRqAjaoF5s3W3WT5Tom3oJWXGVEUMa4Mnp1P7BsTfAwQmpqs9KnYC7mP1exA41rCiU2fGV3R1Pb",
  "key9": "4B9QcGXZd14do9fZQ6UqH2eLgUsfDSV4Z19hQ1eNysofbruYahaXn13CSNqvBH95RFNXYK7i3gqC82nHzVuCBZQ5",
  "key10": "2TBXf5ciDD6F1RH6P1qfTSjcyKssoumNkNs7dNHctBKokW5exCrdHTGQKXyajynPgYMvEH1RHyLZ6LX7uHBcA6W6",
  "key11": "5Ehv8Tauud7WJtdi4rAk2JwmQfFZavbF3vjDM7d44ZftpyaTpCgN1Ggi4zRB3fguvSwB5CzcpmyHE1Hp5JnRKyhY",
  "key12": "4iudtQFvFn3cgu4CbLFtKLkPHraBBAHR6QkT919RaH7VLBdC1ZhPav5eUqyNeNa5thwShE3CGNaE6zPAF8nt7uds",
  "key13": "2kzAown69SBqqTwLVyk8ihtWGNLgRCWvHtxUj63XXzg8inEzEPN296Mf2DsVJhXYrPpGzA2FGjSEdKZH3rQFZWw",
  "key14": "4dn8jQ3x3gidCv57anEnGC3iATMWEbkvuVBBbgcev7XiJLVLNaep6Y89vFJz5aryusK76kzcpapVmDapLVtKW2jP",
  "key15": "5xraFicDpRR4G8exYnvUKyFXQfcKsZtbW1ME1gvMgqutudBMmgKTqDMKzM9wSRMKHTNEpk9JcPYVUJGpta92xrGQ",
  "key16": "49fteuqiiwTRsSHWks16wAYbq3xzQiTuPYno2kAQ2SCqiwHKnJTWhRw7aSuceLLe5E7RuoVKjYddGVDTrWHW1yie",
  "key17": "5HkbGy27sz488w7v3gwrAvKkvHviK7vhzYVesjU4dyfTDcpyavmQAuRpzL3waY6AMzyd8FqJ3jiwWRGW19p7bjD6",
  "key18": "4dL93BapMrj6VUssR2jQ86pTkMYq2vKMnJRx3pohtmcpTr51N3A93EcetnrpYqXvh8SsvgFKa1f37nMiuYRkx4z5",
  "key19": "2HTsC9ZKoNpQhkxQyxBYfLBTrznA8zs5rvcnMMkn7GXB2iQAd8ZGf2pUTT81ooqNbYTLHHpVAtBCi67Bgxf9WZ2V",
  "key20": "iCWsyiAfR6yjY4ip6jswwevA3be8xcr5N5iAsihJbjdKsKHsU6LkYnoqt1rRgAUfou2fWGkKhHCpCGj5Pnm2y6q",
  "key21": "YRU8CnSYWZmWr3Mv9SNSmpqj5KiwS34742d61afyekLcDKfJxzWLpcGa1QpAbx952htbS2Wj2UZ1rJgGoY7S7dr",
  "key22": "397BtVQ55wpG3fMYJE9LHeL4pqPdt8yTovyPpRFKZBa1ttZuTHnkfZsV71f2sxzikpqZtLxSNVg28RM2CSSDE7hi",
  "key23": "1aMr8YvQXRpV3kEqB7aaV83C5M9pGdoW71afzzFjk3iFeWwrA5ZkqgvhAazAHNxXoFuRLDiUsQxeyn81DWXNxmQ",
  "key24": "3ukKg9uQRtYV2ZeUTz9SdRFeoH5heN6njUiJUvyEoTKzwd2Rb1hPKq6Mh3R4tALfBx2ENVBKQBk4XeLL2Umi7Nfd"
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
