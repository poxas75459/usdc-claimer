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
    "5nV2U2imxNMR48tjbMn3DnAYV7wPGAdQazwA2pBazYCpVSp6W5qgLXaNtt9Z1vUHcSLYWAMcrMHko4CWboNHGnFu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HhzxmncmWeJaPxY9fsHcinGpRH9QcUV11uMwFTYXrApHUBviqret1TVh4rJjNsPbJGhMNy3hhLXqAHs2wDnjNh6",
  "key1": "585H44DKcBBYckj1bvLjq2nXM8Q98MbbmeVRR4YcAwohpHNPbV9MJecVzn4MBXHpxyDfprQEuaC1ZLS2PP3A8WuR",
  "key2": "2cPStHw66k3didtomga2hve8YrAptvc5mEdMqEiAy1uJZfvjdTvdS8to8VTSg7hMBG2E9YxXK5k5u8uyvZsHjYZz",
  "key3": "3YgQ36ikxha66PjUbMsc8s4Q6kJpREg7EehWBUmJ1EciQ1VDHMsKVPwSq7aupCY4gSpWMjVYApVQ3burFJcxLSqy",
  "key4": "48DDEh4mnbR6Swbn9APz8X3jvT5aPFAckM8wXfFg59t5pJ5tQZUvhj9ecef5DH9hofEXhm3ViA36mDGxwLzpgpmm",
  "key5": "36dMXQzQNVUwAHPVNTcMg4y9jQvQSQjWkQjEVJtazym5S5UYRYNytQfgGMtZrpGunKM7j22w1BbSqP35ZzkRgNzR",
  "key6": "3f6FfMjGGx46Bxm1kaPzQvc48PV3pAT224QeBvUfeNUJErHJHVHwmwBxqjbXJhm1BAKEkuofLuoVneCbs2uZnz9K",
  "key7": "xtax3FpQNFcW1wZnh9mmkc4dH9urPaDqLRg5EWCGsJdpb31FopT3bQGapQZyaKabCCXcu7wYnYTK6q5bQSfEE1i",
  "key8": "2QBacxwu8w9ELVbmv2FwXQC65neuS2DzRFHnz7DLVtHVLKcVk5RitnUVhBgEJVAfWkSN2y5aMKmoykUP2yF8Us6i",
  "key9": "3EtS6ZSo5exgMo8NT7wnmXoJpxZ2hJaFNxPCVakxjJQWTbDCEfU25sWe9QxARdmm15u12xCKzg1uc8Y1xJkhztej",
  "key10": "5GaCYMPbHhJ3e4d9AksXD7LR3FdCCRJxSPkkwjjkCqtMpTzSwiDVCtibwcE3TmSMuJ18YLTeYRdWRVKAwJSCEYUD",
  "key11": "5Utko1HnprDxZP5Pz4vHFn28Mwx2C86VCB1hNFhttSJXHh1Gsh9HXj9KmfmPAYeYKc92SJSEVVfgRauvbqi8EUct",
  "key12": "3FVpewdUfXJJJXCL36xEWd7t7Za3wmeqA6PTGq7J6fFiNUDajcPa1WLJTspHnP8253YWUFUgHJX5MuNcnV3h8UsF",
  "key13": "57WVBZEtRTtPGCXfTYVmPWcSaKfXx2a1r6EocfoQDyKUwNWp2pdxCqUeMVqcj1NBjXUyaN4ttYxLqeaCTJKw3WtP",
  "key14": "33h7C2YUK93sKN6tNss1kpWt2iniCGa8kGA9SRw7vvNPFZjRXyPL4L8C1nsZBnxyvrqHiQCh8mvMUnngcRmBrd9",
  "key15": "jDETUTse8ZictkgV7rUnZkJtA5PdQ9EANLmS1NKANhDznzREZRbQRPz3p4hFdzGfQ4wUQnbGgyivjmj9jKXjsKG",
  "key16": "55idoWPu3mb4tNcw9Yguum4e16me6Gf8eKdycg51ThNhrFPzEfyqjG2982qYH4Ns64wnu7jyEnEbufpdBoKK4mMF",
  "key17": "5fYDvQvyupdzPHQAJqXcPjDaU1NRSrbAwu9FnJEZ3oAhnLyrue7vYwL2FTnE81H8dBmR8jmYDbERSWiVqCLF5RqU",
  "key18": "5Jv25EGGhkakV9Yc7C3aL4gTQS2a2TM6XsqN4Baqh77wM5dFqWfG7TvWyyb3trBmXU17DubaFHjdwcSLbMrinYwC",
  "key19": "hMmfSTWZkcg5avZbpvkP6F7BQXdK7Em8Wg7bdQnsCWxhDKEGqVbfaVNfX4vY4utL33icgBa41pVUHqqEtDyv7xc",
  "key20": "3RkuztrwuDJNoJWc1szyCUpibJF4xw5fmhCaMPunN6PRRC8VhxfLRX5Nn7GSyEoeZsXVeUL1ffQwQ29MLVWFLqiT",
  "key21": "3yxGBMcty72ybDFVRhPjEFimboHpoaYR7WYhCjbAR9e2PRdbUymPk7inCL6rkkcbYjWR4iLXPuAC7VzMaEyGvrBV",
  "key22": "5ikmgyqjtTGjYqMBFgxJ5X7hFt1sWAcE8PvQr7FGArkBdQz3TFUSLhjSTimQjyAd1dp7SMCme8N3yxyis2v4haWB",
  "key23": "3TA8ByfzRVGeJHvxe2yAc6UbEtjc7BCfW9to67aZLzNLPegGhy8TL2TdmU4Nk1pbV9nsZspa59CJna7r4HsBXcyd",
  "key24": "2KGUNAdRwg4csh32utzEz5AgDvbDSh3o4iAMK3pyREC76WYFLFQjcV4zAm8DzZQTDby5VH4pYihxrhg9HWynwgo5",
  "key25": "4rtaQKomzityCSQocQikRPSZo4Fr7Rd3Ne7G1DLiJnthcLR3zdA3pZYzabR7dzyqaax5j5TrDfurHwgJaG2fEEP2",
  "key26": "51PCn4H2Ya93g1MwSqoVsJPRGPocBf2KwLiyq9cZx3dvmgyiKt7xpBy6X7DqWXDa9sqEViV4AJTv6DtBbKLEumte",
  "key27": "BdQwvfUnpdvEmQUK1GqCki5F8rtm8jq6Sm4bN37ZHdB1jUgL45eqmDAFBGMc5g4vVipcQjqjp797Swi8ZtfEBmg",
  "key28": "3iR6VZnUHEZGP9wfVgQuus9Lw3GKZDLyAyZRS6zSp5pSsSpMRw7T5CuVG22qTXMd5bjzQJJgZNGCLFyQS4PHi4mz",
  "key29": "3vZ1qXtDJ45ZSukdb4KZn2v9pbkQ9ugojJwKSKEXguE9LEhwcb7hE55SXDsTKdWGKGUSRrSfL5kBNTZvuMUjQ7TW",
  "key30": "4pUHMakhvumcPUah3prVzdN3JghN3PcCHx3rUbaKDYsRwHrm9Wq9GDjsiwKFeDsCAa2cggmQbzQ4fmbYR1e21Rm6",
  "key31": "5AgEqBw6VW1HSqPmxWoe3RT5cpGe5joTA8xoLu44n3cerm5RQpvi4AfKBzwDNYji5D9sFWneLQWD4ThyNDBJaeqK",
  "key32": "4hJNx81MdM2FArt7JX266wPnN5KNtVZLAeC5eSTScVUihpF7DVd276apcpyUpKTuPhnUMdcZhT9dqhP1RuGhgQtG",
  "key33": "3rF5XWPXpv4v2EjtjRiLo6vhCJiPquL2vh2KWxxP1qgnqMLeJT43mm2MHq6KJZVHW9ndmKN2Fugyf2gk4Suow94M",
  "key34": "5Ue7CPxoth7bLeDkMzXEfPiA175XPaZPDaPA7qrayMSNcBppQYuuGCAbm4coQHRaV3ncHwc9RFb6Nmbk8YdLvJMg",
  "key35": "vD6emmaU4Cc2KNjmPntx59U1e66hi1bmHEL7rb5exeNbjEb76RYG8r1CvxAudF5qFsvDzu6rwhBiSA3rUaKzwW8",
  "key36": "3Ys8k9N5HydxNQwgzRzE766UQ9qssDXYYp6oimQVo2KvKLAwXcAd5gAtiWPzCmtWJz7FcKBvvd9HAVaDtPrqgvLg",
  "key37": "b5fsBXu8b1biryz5z3cNg4Gp6pSi7AxFGMSNb9cxsVtdhKWSvcpLLTiARW8ULL6R2nGjoAX69Dvo7wc9QZVKwMW",
  "key38": "5nzeLhYW1VPD8GBE691rPorfN9rN2DTrxnyvk7SJCiP4YfExPKdRwd5R3QCo2kkJiFHnhbp8H3uDX8voWAXN7a1j"
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
