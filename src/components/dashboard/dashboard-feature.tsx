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
    "2jjn9HmBp8NzHLkr4DNzDDNoYeUzJJQyRQGZ8FvriYbtiv6ZVU5iKQArZFb8bVritAnG4xTmuaqpPkNR2Xj8hm31"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Sk2XrU25aCK2p6zScS8GUdLg4UTdjGv7UsBqdwyifgBCzCq3EY8qiWRiXFCK3zUxmQm1JswTsRMHxZvLUW8Nekt",
  "key1": "4cFLwvffwP9iF7UZP6h2W8Mtck2Y5iDMs4o1FN7Ut67SbZyhbYhYcmPRvUChvUYz6RFKgCngpJY1xZBZgkGP1WQa",
  "key2": "5EAX39ShdbWrchkCcDKoeSA6DsiLDyZjZ3Y9S9Ku5m3zgbtyNxttA4yWQR8re328iTjomfsHWf66yjamXgM77TES",
  "key3": "4GWkJbdR5Dfc3hYTCZVbfmrqwM1pDURdWbD6WgiBKVye46UQUHZeFo61PvfHfjjg6kGLpAmvYq1Cp6jMPBSVjmbX",
  "key4": "5Yp6auTBNHjnoQDfHZhX5kUTg7uFtAYiz3pJsLuXEJehwKP68o6Eucnc75ofF6tsvBjBFjUwLvwhFgNAvEdvYc8i",
  "key5": "41cMvqGWVjckXGMDkhAnXqEj42H7tcrMF3vM67db1yoKpDSLRPxdEMfBhSURgzbH6m6XShQMpzkDDqpwSkE5XQ1c",
  "key6": "3ZbFjNscCpNZeSqUUayXAoCfmpChMc7SAA5ngDktdF96WZpr14hXRHBVuVPwBpLsfcttinJ5Ds4m7eLcuXDVB8zA",
  "key7": "5fHvQjaS8j8HFu4ZN56PCDJNWQxMJYA7hYhwn5GfHEvYtzuV42fuQRppruq99iwhmWAQksUqg4ku15zoXRnpYusY",
  "key8": "5TGPZ26yjw8N45EXuwsrcnjECdXMYhHkBJnwY95qsPqhriPaypoLRm7Qi9gKPQ2Kbw4GfCm3VipgfNGbfiCgc9XQ",
  "key9": "3dQoyxnRDyuZ8RA4dXQEJuLioRfrBimfkrra8oeKJy7zpdBEwRf6FoUs9ttrpsNuduiVH1CodzN9gpLtU6gYrupn",
  "key10": "28oranP2jqdK1MXizYfs4WwJYp8r6LVqnLYywajsMb1m4z1YbdsjUezEizMUHN5swkwUhwtkMcn4w8Nszcc5PokV",
  "key11": "42VySh4nvUYPKTKjVuVCQ5d9aHh7Ud95m8ZB6ePkX7YUDEDmm28vULSF9JswxVZ2wikfzmUPryvCxc6dWdiCGGj7",
  "key12": "2eo3wuxnD9tGi9QZVJ58RS471UviZkUSEfXzNZ33cXDAjMmKbZEJYHESQeWoxvdUWKDprQ7ZbVQNijwYN1CxfRHu",
  "key13": "XUuchaDDezrwTVm3LF4JdZZr9exSdVkfCNQbqhU7zyLG9sDcEFsVuHrzVGcQm4sRCx41eJRpZSjs4WvYy9MzAWn",
  "key14": "24VXo1oTVyguWo1mUo8pcwVa5RHTyWJTbn9QdNrNwrQP9Jtfq77VpLYJv8UyBhviZqT9RD8uwGieFwgEmHn4R2tL",
  "key15": "5dPD74L31g8c78kP987q2EnkSh7QgAxg2ut8hcZFbZyZP86FhCfXeTuTNuDgjXCTWsKsML4Fbbo2nSVquQ8Rk9K1",
  "key16": "49cmpT6XJN2m564PsTfwHYpBmHmTSwux75JWCxWwa6JWJ8PhiHztBzi5DgVdL4yE3YVQbFYNFYooER11SKPk6hda",
  "key17": "3PHC9DShHTeAbsgS1dWT1YM4UoJJ6ktnKvuuUfNcu1qNswCR68UKio5x6T9wmY33bre9jcs34ZQhXFZgXTmtVWQb",
  "key18": "24fEanEuk2MbwzBWeo65SPeMPUagVpeoSkS5ajZ9uv7HtSowr1qjSjfsjtjqmFh4AjbQ9sFtQfWye5osH4PdtEfL",
  "key19": "5xaSEyi9g8Fg7arHrguNVbDPTmR8KsX1e4QNVBiWt6sSDbdJwrMoi173zXD2fSgQ4ehoFKrpD1Sg2o2XAyaTpGGU",
  "key20": "5NqKcXvGbVP2R1wxNYvq2Bxa6X5LXU4RHwmxyY6VVSWUERdXQrwZwvuwixUVfDxwMRK2pY747UeaRSsaMd5N357R",
  "key21": "fcBZTNYdv5jseQrBatg9kT39AmDq55SjXxy7EvUrbVdy1hyYnp7j9cTe6QpjGJ5Gr97cRyo6hZuNgobmaPBf18N",
  "key22": "5cww7j3wRBHS7qHNGkKG7Km7ite98XMKh1gHKPeUR1mnJMB5ptp6NSdFWG76zM1yLw2PhYxXVnwLXaMqYcreqPij",
  "key23": "54uFVoYzspH6kYn7fpdhN7YaakioxNAYm2uBD4GfBWRE8A8iTiTrT7oUc8vBiEFT4dj25HicvopcZEJoJMMSt8WJ",
  "key24": "5ARHwhPcTe3AFVLuU6oQDFYhUNf3cn9HVtPgAA3RB8mKQ7McKjAk1XepxZfTaYdbsiNpwjHW3cAFfwYp8Wsb2YXv",
  "key25": "zo9fivG1G77xvJPfJaqQbGRqJXQ5ubhLZqPqJcB1LXLcz6P4tMQGrHi76ij8tkvZvCeJwtRokY7jNKrxhn1DVer"
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
