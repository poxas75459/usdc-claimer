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
    "5Fs5xzdTUjTFj8kRXwZP8EnENEZqtuwai6R1pkwPf91wwQp5JeBXTH9ZjLK3371pyJLF3UcU79vFyW8L4UfD8UGe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z47FveEv7anKLBE6UZPyxnwYZfKwcLYV1JpmL1Z1EJyB6bkRBWX2bY1A3qjUPbm42qM2wfCwcLurc9DRTcJbmNp",
  "key1": "37w7expRqnmWu2RRQvMg9Pjn9q46tHQgGa8HMdT8fpLU2pcud37rLTLQpBj1zhB2mjnr5ZnQ7bEfGPeD5Xp8Wv56",
  "key2": "5vtbDPJ2JoTaC6hoYnocZ5RBRGN8vBkgLtda9rKzec1eDsQEr8r4T8og7uNvxao2NF9UXrVWATNDCPRSh83uvK1Z",
  "key3": "2nTVWxoVG8YFJ9Up3w3YvZLV7xuRmrqJ48eLLcHXrbBiDFKcMg2gcCHF3vNLX9xp9ti533oTQvYVDVRaNnPcADbE",
  "key4": "RtBy6sg9wME66tFx5HAaBt2jSoH2fBbovGHsiGrX1VVNJnS7egJ1KbN6NE5vKRyBEDG8eQibNhaCDpdfFZFQdfb",
  "key5": "FX7efdZYdMNtRmDTjgbid4yAAfpcovhnUUs2NKxY4fbUikBecs2G3bqPmEbdGJwCaP5kxQpq2APMjz1gUY8Swos",
  "key6": "3RRXv8ES2xA4NUhRucJfPrPh41TFKtBadvo3xwC5Q8Corp7LnMKKoodxSbTbMmasubfxVGsnAq7foxGACJijRyYB",
  "key7": "5MY3VMmXBR4bGRpZzypfbrZVWxmkYHQUWtYsh2JrmgGC9LbbJ1qcMcPMnhE9wAYAZjs7XqLteMzJh9nAroFGpEp3",
  "key8": "34da8MEMAkCbiZqRM8pmUKVx8J9Ks58q2EbRdYioTVhQDk1e7R4phdnp2jNzgtfcwqcL8bXnLHLtsadhjmdy5r4G",
  "key9": "5XMPcZqoqymaj7kMoebhXuW7o3pMKPUn1dyiE3p54XeLxiG2yoceUzuskZd45pJfKMCV7yhXr9DTbEwq3HsBGPdE",
  "key10": "2tJUAopZSDRA69FhV5aRqSuAr82GSTbMxqC7ZwhQhEJbV9vD1PEsGfDR94bkhF6HFfTBhMuzctfdGkQwHVs2zBLz",
  "key11": "DCgM63KEELKHpykNUB6FhmyEGRvDUTaaAsMsCWUZoc2ifqHYMGkeWsvtnoS37n2MrS8ABXcpKThJPfB5GPN8WaE",
  "key12": "4B9JkZFG9u9msaoR73X2ZxGTVgDXabK4cgNTVv5MfXTCYhy9HpMN2ZtrcttUAjvu9dn8omuCrWNE5aY1RDcNnjaj",
  "key13": "chcFDzLRxSKLDwZXCyc8GkRBei755BK5xLnWfobfHjo4w1YdYhx8jNNjRn7mEQxGX78Rx6bjDmaH9aoS9MAiTJ6",
  "key14": "2y323gUW2fQbsQVZRKZeA6ssL9q4nuFYonp4rYN5qq9GNm8UgpxHgNZw4XZHXhbTp7q4cU145zMFKcVtE5cThnAB",
  "key15": "47FFdrzHqwRFHzbK1PrrFnxZAarU5BpqiXQcmRUAbB6bbZQxAbbjWBXss4s9VufFABoQVH4XK6FUdt3Q1eKrUmvU",
  "key16": "2d7GAdHdFV7fQXr6agtaqTCkticoDSWJ8tbdQ1eASMbvZRhGFi3tNHjuGS3ETrnBTCxDCkD5s6ouJstNmah6cHzm",
  "key17": "5aHhMewbN2dZtjz3D2Jq9eZJjHMXK2zYqAzmtPnewTw1imHhXoXme4krD2wkPHv8aXPpQXjTtZTDmLibWUSSFRAL",
  "key18": "49kn8mHseaBM9bc77H3g91U4VuAQyvMbyokTV91ponCnvnt75yqFAEY5vqjAyLNqcDbCPkZ3ViRQ8j1xqmUsCGNb",
  "key19": "52tbbjufJrC1FeCUMmE2ArP7e9r3JHdJdCVzf2LGDcr45tNMSqd3hxT9r7xdyiqSrv8zmNyVn4nt3vr4jWMnRZ5K",
  "key20": "4ahcyG49JpwJwsM3CzeBnVDcbtWb9BMJignXaxBsJ2qzxDagzob7hecPygnRxAuJv1CF5x8SVJdsos1y8Rgbvioe",
  "key21": "FxL5Bnnd2A7VApQ3umA8LEfLBXcGABEdot57cYYiKEfnkfe1mWWJwbZ8rbjtrQkvDNEbjUcSJTf9QVsjfrrU4qP",
  "key22": "x7fKDZvRFkfonnDzQ3iSCzd2qouB6p4kv3oQyqdv9wJsyRdRzL33urWnsgttW81UMbepxghMooNAM5pvcj3quYy",
  "key23": "492Rg9Fe2HmKbyvY2xtQvEiGuLxyrk8uXV1GBNLShMezdFQTaxmh5ZWGkmFieKaM4yWnKq7iSWkJdYYJZff5FuHy",
  "key24": "3aXhAXaNh1HkgaztT8mUC1B11AhBFC9dbmkv5CtxkgJiaqpRkdZB3hxAHRGrGC4aZbuhHFopQP8UtKkT4FJV6FJK",
  "key25": "CkPSU7hi6NxbA8g51vrLwVW26kKNXVt4jHdX1ud2CH5UKT1N2axfVgwirgrERNs4S9a4U4kMqvK25bvpFqyDS4x",
  "key26": "3TuvvjTZ1mKBdz61EsZLkuDZkgdR2xod6MbXVRrm8ST2wdawSK1fmNTYEL8UqtqEHH5P73qoFWGStVsvMYgBqWuo",
  "key27": "5Z5fnnvEBTbe8zjr2nmr84WXniY9XQ69YCiqwCg9aAGxYKjB2bWKki565ZJADSktdqqKiRmXLBCEzHAhUhmNiFEM"
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
