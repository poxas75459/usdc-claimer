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
    "4uAEv8EAA4tsr8yhFNKdEgCpHjLmryJAQDNxhvSXTt6DJqM14E5x3tu4Jnkgf3oysxvTMobrs1JW2jGD3bPyDMp9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v73EkKws1ixa89LAbhTpeDFCEvEyVWhTnpBFtMT7rAb6j8ieitnvmr2pEecmGecMxAKKZFxJKdk1PqmjRRvgQdC",
  "key1": "LN33hD7Ek8DNTSBge856zDk3PfPFmzphiEUjt8du2RVVxZC1XsYhw4gJD9uSHs2q85QaT22MMbNTN368FqPkhjr",
  "key2": "3MZe9aXmr9VimnudC2PvS7bReWW11fLPgdnbbi9jumsp2752fDGQY4dEag92qsGR559DJDjA1E8xAnyf1NjLAgFG",
  "key3": "3KeauNhNy6QpASK1WEvidDJ47GVD5JMKGTbeKRseR6qs6DCWyXnp7jgjGiHk9qUyXBMSHL5xcWj9nE7DkKF48HC1",
  "key4": "28BTM1pEWjoQ2iw4JDrPCFWRnX6YN1NT92bmcPN5br9ycg8ufDPv4bFGkDLKyNXYQJrQwm7a2BRQmryMihXYcpr6",
  "key5": "4GFJpdRjMicA5curt3PCYpMDEZuVksUtW2P8rURowQCA1S7SLFLdWKJWhqB1Y8sm21zieHYT4LCK1BN2x9NDaXpx",
  "key6": "CvksRdEQ76YMvn8njowN9bzcotaEa3xprCkbqCo6aHmFdvVpQVpbqB6MLFoJbKecmaz9LCdAk97WEzmisrLJuPw",
  "key7": "QP9yVzjD9WFajhhyqbmaXWVh4dgqAkr2p2R3uUGUynEybm8Ac7qdda8C7LyHvCoAdUibwY5kFwVnrMPsWtjVpmv",
  "key8": "44ZtdeWZhWdJ9cjbBcw13gUN655KDkxr9NF5Sxtpk9b6o15tSrR5VBrEBCcN7qzMsAczX2Kv1ykkkAXNPfWh2ohg",
  "key9": "5U3BEaGjod9qsA79p7diG25nuoStNzA2eZm2MBJWVhbxJig4kKxxu1stiVvhwoDqnDTMazK5vHJeWqqQBPhavAWw",
  "key10": "47vKc4xhEh7mnmSqdNRRx3qLE2cANGQDsqkv1EaTVYwCn8K7EEu4GxVLWdupKp8CYJezTCRN7BA8mww62qGTxWWk",
  "key11": "5yWEUjxZfpkdywrWGjSTxFPe3s7V1ujUGiK2ez3HwQv1cnFxofvSp4atPuaUoAmNWjq7jr1xCy9iNBr5LRfvALSw",
  "key12": "4akgLeQNpdsKwM6KRQrL4DSLs7doCu5sv2VtprSDe1tvS89HWN12LdJQPNBGH9G9QGhz6f7PCJW78kXvoBhFhabL",
  "key13": "2BktSJD6ATzm5mwiHrd5TWRSQ1UBwPECXCgoyxVdF4KbHSGymqHRwPJi8W3ZnRStbgELdCkvPhHkF8wvp6nxFPXm",
  "key14": "qywL1MbhWyeGBnrPccMQe2nW2kJp627kTpu9DvviTHPyVFWveyVRmzNADBV3YsG49QEGKZ23cvaEu1uFtVdvBAr",
  "key15": "a6p14fFJYdVVdcF5UjdzD53o9PNGz3B4Cx2iC4H3FZXZ9TgMuGz32QeGFmoVaJNL9WoMDWos7GYQUBboKhJgTyR",
  "key16": "4dTPh5jjJMsF35V7rpfCPhX8XtwwyXtmfaLewiKxh4pjC7sVSwaEXa6vataBdtea5SXgNbhV8v7BLvVoANzNvT1x",
  "key17": "rJ1eutMT8UzucaTDM59FF1f4j5EQ1zop63YR1fpfakfpQmhK7SL4ymfsMLSWCxPQkB26nwU8aadkipkpc4qx9vZ",
  "key18": "hZvuzsjGAUCPfuyRXvyaHHrHWE9NQVEK4FvxN2T169SkbD8MCgb1eaUPsyqP8r4ovrx2VuMovS4mMF2gChGcNwu",
  "key19": "erzwUWHXxou4n8sBdBMhauqZeTSMJBzAe1S8w677qQHq3r3c89kYgiRzm5FdFCTFF2JyQ6QLC1CYU5JHjB6XaEe",
  "key20": "zTNR4uNUuYBW6xLL588cgdSNhy6hxtVNiaFuuvmbG86qV1CbNhfUtmv3jPKmkSHTyf68tqxzFpNETo59BQSFSfa",
  "key21": "5jk2NiyZPe29pd6LWzo3xSPNyFHk1BSBVWbgncqT1kfBLoKCJdbvaq7rJhYhgLn2iocXyypboun9VzgcPGSqsETZ",
  "key22": "2Vw9bDsdSeYw88zDdtjVbuHtx8iHGLheZPRquiL7h8RMVvqpDksH1NhvDrcfwZvJhgPtBunRf9pz1M8X5T4RbUGb",
  "key23": "3sQUWMZo56tWTwZac6k6PDo76HTFnrjMqHWXtG1JSrU2FufY7fFLdBXzioDEfQGTtDtatFocjuHsn5bTBqGx9vdv",
  "key24": "3zprTYVgMvz8sBfkqHnpuk1Ftt2rUkXBgcBXtLC61ZpeRGLeQ3GwZoiWBgmhZLyv9HwwW9MoH1CXFBiXM5xUEwQN",
  "key25": "pbAjpcepN1sR1aQjmEmASWsgNkQ4mp7ZfZTcRtVCkLN8DPC9p1wxNbg1SEsBTsouEV5NdMPQ8RNnWMXhCPRwNxP",
  "key26": "2GA4o9jPuhpdgwDKYBb4KawAYZeTWYNFjrvb6jSoC7NCeajTaNb6wQQE4Gwz12Nhn9eqwzj4hrEVpDV16gBKC6mg",
  "key27": "35Zb9dmN64QrChQE836AKfx3oem4hALBux4JriuiYs2SvLcCzpSZWw3dxbeqzXujRXipSoDsqExbs2syouGD6hM6",
  "key28": "4ESTMrzVif7NzV9Ez3g5reHaKyyoG6LEvb2MzPySmghKaMUQD8jSEbBU3BesoudncvEZvfWyMKyNuPfv1rdxeg1N",
  "key29": "41rNfFVcAxz1QV8RtVxEGWqEJtaUn17CLpJHxQUen98MWC9iMpEDkzhP4vCVcHCm4f86Xs2xFvdgcSLMZpAU2CUt",
  "key30": "4CSp64AfjZTESbZ7hU1fmgm44LDqAMui1TwowKMEYFcZ8bVaAECxVS4spV5X34m7F1GVpQ21zGhenyKwLc6gqkde",
  "key31": "2N47CEN9QzscGwbhDKYLY91DLxhZsV1H24dnY9e9UVFf5aAvfgcVQT4utDhi8bpwFDjyuYcAa5h2r57SN9DNV8aA",
  "key32": "2P95uZq4JrBB5RoT5qSpVT5L4fVLKBdB86dV4Z48auNiFEx2bz1WD9s7WrqBeCvNWL7XEfzL3DNPFngPiFzfgziS",
  "key33": "4Uh1BgdRfQkqgvhC4CKehzQoBLTQKCHN6AF9u3ABKk1EnJLRKDhpSte3sNeZbU3HGF7b38jKRWVdezyR3Hpgct1a"
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
