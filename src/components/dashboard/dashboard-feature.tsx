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
    "2WKeJ87DnVPMeRD56pfeG9EaxE6PuDeevexCgE9wdTHX63UdWWGxvmA5pYz8KMsa3BpydmCmgCo5SX5ecqQ5x8G8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HxfoxEkJBBNCJtgcHoFWTbdLgezDRq5ew9NA6dsXfnFqYAn2VW5a9DKzfVUxNNrHXwGJbXBGkEY3ZaxTuffJYfx",
  "key1": "5fMfNmxkX28zMCacnySewbGF2CNg3erdfCEdzh6LpAGwdxGstd2JyXHgpZ7Hstj84fhpWkRBtC7YpC87AvmkVzkF",
  "key2": "4sK7J41ioQPZtawc7BQg3cftsjSrLjKhgtA9jTpnYYzdFjrwc4pq7y7KoW8nDsMEvz7uFkDGiVQmAKhpsbCLPUCH",
  "key3": "5derATcoWddXL9CJ89NoeXjh7XvovTj4spDvSLE2QXLLQx5JV7y7tn7p4Uy9rgGkCwiqLnfmpYSszpGBBqTsS8MZ",
  "key4": "4eW8t8wX7E8uDi1x37itJSy44Eq4iA8EfEuGkAFnhr4C55AjxzD4k9B8ocZ48rxDUikB91bEkBH8RkqbehqoSScz",
  "key5": "54g8BbtuJohPth3ZsDXBCL8qknGRc5s9KJFgbtLrEioxosehhftBFHTt5KEnnuTGdtAX3y8oE1zZu7NxkbbnNbA9",
  "key6": "4Qqts7xae5vEzVvcBngSf8fU1jCF7Q5myUU1xBfYRNYJ3PcfqMs1RN48iMCB64aFVc9KPxjGnrYECv1hZeZicR6e",
  "key7": "3enzUcEWqdVKndLGtD3SbfJ3mZ5ekP1TQKLQH8gNjKHrrp1EvKVHsUsQWhDTAjxG22nGKu58TgPxxaH49LrMf6k",
  "key8": "28jLpm223jpd1L6DPnU7C8ZjQFAuhxf8mqqhqcc42qC3hYSTGvYALNFqYFRrzbL5yFqzVZu583u3Krd5ohMjpto9",
  "key9": "Y5dNK2LYpPUvdA9i836n6p6pn5iaC3WuvwfCwGP3Hqo33cefwni9qkbaiLER8YaS8c5Gj46nFqhPuTZrcotVYfi",
  "key10": "48wT9vpESxVT8afoyyTAxzGRNvZgKHibfqwUHxwTfFpEQdbWV8nZuTHgjVA3hnRBcCqi2QHGS8K5vuLBaGE2ZXMU",
  "key11": "j5XxzfNhSZCJBoBFxSziHSMvMQBPHUxgCWL5ScnfHUVWwE6vK9oZoxvYzDYaMFnNikpvguwZwwamgV7xquR7cpF",
  "key12": "3g1f73PRMPgBXhKe3e9jfwzk3N1b9xywLLyYs57zMDDC2mzrcfQLnsYfrQ8fX8XyUfBAVUrERscM5kDMaeedK2L",
  "key13": "w69TVpDCWdjitQVsxNV5BjBFEZmidv2bSZpgD8QjaX77brtNZ2NFQpf8GZMiYLiU435gf3ebHGuoZ7ZBbuVV6pJ",
  "key14": "Zg8fKafTJomW36c8WbiXB5C3menfCXokLKA3ma2SNgte14riZzomy9T315towWijPjhfKTeHozsu5X2YCe6Hcd4",
  "key15": "2z2KwfxfKxutsum6BBaEmRkwRW2CptGyijkJEAntU7kq6sUKxAKhNRT6qghZTsopjWt62av8xBgHZUyRJS8EYnJd",
  "key16": "5Yw87Z7Tqdrm7QFEBhVLeMtWmkPb4JxsnfNZFwqPAVFwhBsghVaThYeaZzay3nagPzp8pxucjSfmrNV82ifE87Tv",
  "key17": "22LMvajtCzZbykXqQwpqQpjM2xPJmuzo5ezbRNvyNBHoysSM6e12McJbbS1UB2vrC8kMAoFYM8DJbYrJ31Vhg4LS",
  "key18": "4zHsAy8Po1jL9FdvQRZCwYb5jdafgCEdGNGnaSepdX7pVHsGx6hyWVgniL56i92ZPHzvhgZCcRYqA1qhTSbyE43U",
  "key19": "4DoVkYskCgH7spgTJHc1GkNxxGUBCcKwcrcoRRqJMUvqdvrMyKZgq3Yz9wrrPkBgxv2TUXtLnfa4ztzWWQ3stNnk",
  "key20": "2AwwRk2zMAfpX5DG191Qitu7TuB1xciYvfvZwhHnBqgifVDDUtfyk89UGubtNwwdAgi9BnV5kBG2U9Z9txmyAXf8",
  "key21": "3eY3LQg2j89MQPFQKZZv2DyHg2ojy3eMVHj1G9gGSr1pAyeLw5QFMtagZvhCAJYF5Q9gC9egcNG13Q3SCk1HAhLk",
  "key22": "3vAJtoykWJacmBJEww5YBzEA8Kg5s1FfXiDzcFXxEzKojWf68ScL4rSWUW5Q1zWBF6jPEnCztXR9M2Uv4Wq4apU9",
  "key23": "o5erwZWKsds7bYke9FZGYRhPZnBPerXhZzm86P2nthqLqfwvWdZiZxXid6BE8UEVMuewPDX9ia7FpoMN41yBZjH",
  "key24": "2TJw7oc3ZZLc8Dni8Zf2bpj4BVUfda2ntavY9dY1NwbHPJw63XBSeeG5RKs6dQFubdYukrAb8tFd54eoNFmyqzQK",
  "key25": "5AetyJZjTgR9Gj65xR7oqGhvZ2uvAhGfb8wg8j1KM16VrPLm8UPa4iYuUFPX36Gy8fCcgiVLwpKfDxc1SZTqdo5d",
  "key26": "5McoU9PLkLtobEv3ePY9pdHD1C3pi44He4RVqpGfDEZBdgnNpfLsA95NnohmQoy1XwmadtxdRwpZ1cmwDnchsMEf",
  "key27": "27WduyB8eYqKRB52ZxAQMeZ2vr6XWUJgvWAuynejdztnf7KbcNgPuThx8pv29cDRJ1ceAgqrpQ42QWNaCNcqQNv6"
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
