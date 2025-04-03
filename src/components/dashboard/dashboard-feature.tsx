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
    "5MVbxYjn1hQAgufkLtxpRwW5mZGan1zhqkFfyLSVK5BdSGrDnnWiNdQrm2NDwdgTs1sg3B4xQ2EChazpXi35MJYY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H6QTvWedSnDQhhiS4gthF91uYGk5sFr9ixvp4K231TNQcQHn4rpCk36iMFZwHc68jxzZANNT9nQJ55mzSeQ8RFZ",
  "key1": "3bahejZWZVqd3BeWnDjwtRu6hxEMUhtiUYcvEFw7SobU1wgzJx5PfV5sNk69Hsty3bm8AaPumNacZT7f6KhrrowF",
  "key2": "2Z8fNKJbQBtHUT5GSMPf9CmkiMrp3gegy8LukhwFTovJxJwQ49Q9oe6CQuaTXWdV13uYJHs6vKhZYwNjKMnSmjnw",
  "key3": "3x32wwQ1vJAwWwmWrhFCTHJ3ND7AMZhH2jrZChstKutHUH3b2HRdpAK2Tq5oL12ZRJBhwV2dVKyu3cGWcCQ6pjoX",
  "key4": "u8orpyj5Dkpd2sbZMDBEcYbYFwKxUbFg9drWnSKWBZvZxMJMCzq9aYuhBeHZNy9gfXvre1GquNM8TzkbyqCCDQm",
  "key5": "X48VCP8sEmuWRasjsPxNzxZAs1EeTPCeAxvJ9wXgtfyaABPSm9pGzn8kv9xGEdcDuR1BmJ35ZgzRToV7y9Sn52V",
  "key6": "519jNoeeacGfRgr2HVRzvVxiSh6RPaPqsXkkVAh2qeaoHhDrsWEuo4ALkVwuwcBxY6GGMxuoaMxnivGmTCmiPH1j",
  "key7": "5fQxHNVh8G3FA1DANvFNvkfuFsUG3fF3ZUwqBggEqTFeMqtnzmhna2UcT1VuGL1gy5RCoo7hfvfLkNXxk4SP9HSr",
  "key8": "23yYJfjAz85URWSE2jMMdxLQtGcQm7xeLjayLojE8giwnsdvdVnvMo5xWKs6mGAjxreSENKacnnPg44tUeWM71Mb",
  "key9": "4yjV8X7XQdkBaoVCpAonfngv4uhRiyxpwNe6Rft7e4dynvwRB2nVfRzbxsmZGAk1ZzRPAN4SzNNob3q9c154s3eN",
  "key10": "2sgnCGyacdC5F8fFyGjkeSBVAcLs2yRFah6tQif8jE2e7KqwkXxk7faDDQXQZ7NKm4FEhN1v35DVajqjsqS1idZq",
  "key11": "5WTrY59JujXjBu1xkemZ7ccka3eMgbeV3Umjpp4KE74TLvqkbXsatDJdwuBxms1ENYoDHo4XBGZs9QWwSiCng28c",
  "key12": "44XLA4RX2Lsix4RXrdRdVMkDWNZSTwWthnmbsJ1gAu9jSn4EmT8vTePmUNW8i6MmQo8EouuctJpXxYneFQzHEjfH",
  "key13": "3b5xdx9qVVJxTWW8APgjTyRnSACA8o5Uan8z9E4joHkNLzVGbHSLxZRUvukeAvx8aDVig7fuppsa1iegR6n5KUVr",
  "key14": "58YbN2NqJ44HHSjJ5rjQaq2hzdLEmJyW8YUD2ERxB9kefD5EERCrKAAE6dtDK8223HCsY7Pz6y4afak5KmRLzJh6",
  "key15": "37UorWmjFrce7A5FGNKemsFfdpqbTvVm471tJKEVmdp521cAPiHozM31xbDHjAG3N6hN84MXDCSDUajWAvK7UwuJ",
  "key16": "4sgauopBfLRP8282rjKxwK35GjVwCYpednTEL7MQji4zvsd9AquNbiHeHRrKGjL8UqiqXLxohewvnEQfyhiVrbYX",
  "key17": "3K9sXyt6EHvDiHPNzd9d62dyonbgopaxFJXX7vhWMKapoKdKB5diVEVVv4Y4g2GGJc4V89w65FEdpvUZrnZEwLAi",
  "key18": "3azzB4YF6zL1S5sPkn8XZGR342PrVeghsKWxiJmMTsBRBChkuPijobuWUtuXVDeMd6k6WQCvAAhC81MobwMWLWHv",
  "key19": "icdWhuWU7pdL1HFV9D2orTJ5q2zoh55XJvAtcyzzr8zc2ShzqknVLPGJaoC2HBJuvC32Wy9RscrAQPZgrGAqWfE",
  "key20": "3tcQJSAPiWp3iu9ENdJiqBSiXbvPRN7iB9J4L5JRELhhdtGn3tqAUB8xdBfqdTvR4VEBVEkipC17BNz72cSa2DW2",
  "key21": "4X7kDaGb2XQuXzSx1CHjEvcyDxjPd3Nv6nML8xcxCU4S42NLmB2thoqUhmEsaWP1cXHRtdwh1C6nBHHHjQJr2oUe",
  "key22": "8rRGiGhEqPpHnUgT3LJUd8Ug2cKW8ptTmVQbq4fjZGBhXerc1HS3eDBFRSB1Ks9kVU5nopNjn1eu83ZjRmwx9su",
  "key23": "4dQqduVxc2Lqt444SnGcsZoqFfzSTLqjL6UVUR6TE2Ak7iN9DueF3ZLnVTNmE3WmsXhqK9rsfZ5fsPxiSzUEb2gW",
  "key24": "5XcW4oT7XUbkSkLqu9u2p4CuJgtNpemqonU8LqVYcToMHqS69WaL9sygjJuzn1UBH4s2TmYG4VzDgDZ8s4D5AwaU",
  "key25": "28Tq2XapF2ej3aR6dkfgEoqD9MLDFvWMtANi4Sq9ZcFTWcVT7EotsKfdeLJYTst8f3QNQ2BU8UHVi582ieXdjCFY",
  "key26": "53BWEpw8ZgNEeNPBjEHC3mXNyZFAayoSQnVVANtD9eCWHMTkfPKKyZYZgMcdgxX757KoVF9ugkDaWZkX7FT9XUX8",
  "key27": "spixkf7SddbZdRVCwWEYxYSj4hhCFMMhdFkuXJ89CqY74iMaX3RMQ8Pv2tpPhiDHGpbZnNeAzxMgFgoiMgTCQQx",
  "key28": "55opZoKGTDt4bgpcbkEscTkAZ8g4PcjNuEfEtnMSKgMHiSjBVXQFys9Hrm3wkZeDQ6uJqPECtecy5QyvcLaKVGmu",
  "key29": "cscUAB7tU2qdzEokkACqBrEXiXwX1L6FeLNUSqDmSV9rZ5FzKBB1QKwBBuFQLhb5x9dBAa4xKfkxr3SKK2xYKL2",
  "key30": "38tWsGuuDyTsPj8n6ZahGBY61wV4J8MfEYuR22NvH1zUKguNWPbdsq47EsXmerkcc1PZQkGamHyyEpQ3sQe6vMah"
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
