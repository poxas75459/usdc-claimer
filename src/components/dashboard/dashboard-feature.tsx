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
    "3Y7PxhcZtrH3aYbEVeztZxoVq4cY9A5fLGxEY9TyND12fers9UJSAqR3wqZG1AdW94oc2d78x3R16fdMewxtfpcE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xp52GMcgJbjjTCXAoTJjZcW2vfFRMSjvitGqnaf7duDoMpvedjeRtYBZXEvn4QaxeWvL9QnC4KUyt1gwDcgHotK",
  "key1": "uFEHHMdDd9Af7SfrHqku1wBkGvvt5PM7cYLdWfjRkaif6XX3PYskHVJwEznTdFqTqXzQmJuf1Ra6qvv3zMbgvcz",
  "key2": "ybSf7eCmkvDuSxkq6aMEQS8DbCodfHcLSmrRSoomne8ymHQHbTd58Rgtc7ZPb3jtAXX1JTv8AnkmWvbSao2bnCv",
  "key3": "4ucei7JiVzrSzTJit6tpHw9V6qY2U3uFxHiMKGddf2vLL49V3wqZRq8o1u6JNLaZ4zxdS2onPGc6bN5cD4V4CW3W",
  "key4": "58DwjSsJBhzJfKb9H8uj9MvtAqNg5povW8pCufUQsrM2ZWPcki3EujyccXbMUZsydB9z3oP1BLKwmqFFyFvvd8Js",
  "key5": "4yoFwVWUsY7NJESvUnEaJcDBhD7LgJ494BUbAPXzpbbUpsBMNyVDbpGpbMLxkVaNANyhcrqE8WRs7EL1wmLF17pj",
  "key6": "xGbHSiofC6XFdEUoVsMhbotxj9Qh8APwLpbHYcgWoW8B27UTLj6v9HgsHpPFwrzT1bwbvL6cwBJsaJkoHBP37tx",
  "key7": "5tMPQpYPnsShRkT8mvyZSCMyzcMADsia4HSexddaAGpBqABadaguf715afp7GhztyPfuYFmUUEjkmiURX1PBFzdd",
  "key8": "4XhCyNnsr8xvbBHmRhj3z5HmcH1WNzho9QSyURD6rTGRHuUrXzafH9CoaRg5Kduz2AtYBZ2SUDeQgRdmSEFKWSaB",
  "key9": "4idm69Ed1xqgBxeQ6g2BV7aNyEUsULgM8745dQnH6sTAiJfdgzGDNK3iBancKRHHgfdvGGPSDy4Ms5YH32voNPzr",
  "key10": "Hd638eP1AAf4vJdocZjNsKNZXpQvJFr2GuFjuL8GUBMcRjMNsujrKPxRfVCGP6cGPa941ziqKrZf6k8JsFg8owW",
  "key11": "98CktybJYYLi21reEzJzjJTLocoWpUcoQwwXswNFwoa8FAornimmsBH7bUuQpwWazNoBAtujLcDaHn6Ety2tz3U",
  "key12": "5PkTmLFt9dBLdRo2brv6o2LHiDMGvWmfW9tH132YEeSTw8KHz2NeHX6xpd1Ne1YEGpZLHy968U28e7V5v85u8e5d",
  "key13": "36LQ4obUj1rZG8VPowNTwGfk4B3jKTQDNoVVWN6CQH6dkqrJhs7Lnsec43onuhEvAKR1JgH9vcG8Wh2yKus8qmLD",
  "key14": "37og62xcSJUNCGsvWymj7dCKnGy3YRLkXcG96DadVVfQLav4wNvGXK87GGEq8cfPhGgsTNWVdgHwmKEbTnU6e3Q9",
  "key15": "44sp7zb1bPj42zwMNDU49hruts5M2JS55cpouYYYVVkDHe2AjGSrPMwtbS5Psf8eYUrwgg42HfdsFMzyYzweo3Gp",
  "key16": "3qZ56xHddq3hrh221KZpV6eYHwBm3xjocKBHvEpoyqNAeswuFzm6SgVFn2kYL13GmK85GNzpNVdHewg7qwM1sEQ",
  "key17": "3tb7sF9goW5KzMohxcQaLdur3QnHibiaHyrXwNafpojzRMctF3Y5bk4azgVCvckx7zsaBwrCHpCBLkPu9GzFrgur",
  "key18": "5WVWDombk4oK8BT9b2NbsDexDfWN2QQsSbfzcE6c8JZu2whRXYB3b3YbraH52uE61QNGYWfdSGWdUyiJfJDowhij",
  "key19": "34i5FES8hUKEqXGA2EYs3hmtJmL5K9ZZHk2EZLkoGX1RKxhE9JGwFkto4DUrQjW4NhsgbWxxDRVwxriy1nz2xARm",
  "key20": "4EWQThjZ8XCUoK4x9efASQgiKGr29EEhRGKdc4h4gGo2VygUyCQErqrahLJU8957C3wtSQJ9vf7cfSimHJEcWgJw",
  "key21": "zK1NrrnWvNAiQsHQPy36tjyVhjxk6cBEVFrhEMYk5VE4qRP8LDvima28Yx9QZhHEoudM8oskWLXNg92oX4oodop",
  "key22": "tMwjJwZrZJrAF1kztG44PWsy7VSgnxuSJDnuK5CzKRsQhUetbNoEy4fwCn9zz4g2BwQbFUzpXutMq1SsiGsG9Ba",
  "key23": "2zUQEzt7gfZ7Us2F9dprN1WB3RCZKV8TfxifBJ12zFAp9cwQwZAnm7exiKD7DPACA1avPJiLCGCVCXm6i7B6ToAj",
  "key24": "3peJtFjyErYqbUfg3tGoupEGWqyVpugNidvjpHruPxjw5PkCmQR88gix9vf9nUwqQDM1QR7pMnagfESKabv5oLKi",
  "key25": "2VdearEAFFWH32koke4BKhhutm7wDwvdzvg1sPfGBAtQpk65QqmpzYsHn9YrP2cZtFL37X56PoSS1LXLfQVBEExt",
  "key26": "2jdCZkVz6E3ARRySjsc4ywRnvRuqd6Hdv5yWZ4jZ86ieQ38tehePDmTEWu7zMCsKBT8FdqaHJNzfz8tfzipT1voH"
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
