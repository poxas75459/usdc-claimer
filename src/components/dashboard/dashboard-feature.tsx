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
    "5QsSdqAYfs4fG4qrF5ZWqTB8LrkYGUgidNxyR1ksVeXuYX3ArbxLZkSeYyBAo1FgTxb7or3TyvgcXVWNrJjmcR1A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42oq4f2Dm5n4EQZezgsuoGKrjXRDUByRXLGpPVCUpiEaSnQsqhHWPyyWFufYTUUWRZLRsuE9RuGGrR6TRuoqTVPS",
  "key1": "5DPYbJZSxWBScUcMiT5rSe3xDxzTc7SAeWRuap5EzNtot2ZqCfBeDrq7SBNK7vXBRCfjrneY8H6t62X5dDBNczaJ",
  "key2": "J4GCSUgBKizRQjjxPqgDwnEpfqCdPdMNnwJJgTe5Kth5MDSvHEeNBvAB7Rb93o1fW84CgBQ6gLFgoNAGW2tbroB",
  "key3": "5vNVWznGqUTQWMRudGQA3wVzpLS3QydVRQugLmDwJxWPnw5vYhhEs5uAbVKK4qNG4vAnanVKMZ5XR2Z3uk7Xk9qQ",
  "key4": "4HrpSUmUugVK4EW3njFMYj3FAcMfQLwmY7SbMpLCwKqpfmPGBRF2W8Gcc6FeNkjj9wiF12MxWCNntAT8afuAzUpu",
  "key5": "4cEsqT9E5XZVsZ2LHfLADmziEvYqxQ1kbLXp6m9UHn5UDzEdqpPdp9pV5ox7bd5vpL9BJrTUCxxamX6rLDfeQVt9",
  "key6": "35cVWxZG4a9CFNPTFhyiuCW2KHLH4MBGN4rmR8Bz3RzJ5tpVrqeKoz1V9Gf3kMTLGEzkGgBy8SrrRaEWtsUopnhh",
  "key7": "2aZtYhzUr2HFZHt6BK86QqpRmFCmoibcfpgcJG5ZtTVHGi97FatcLLQcamrsDqjcoTogKLwNnG4tWLzeR16v1bHi",
  "key8": "qVpLnDvLhJfUTUY5REUPmrvyqLBdVxwtakgm2jMGi7puRQtM7fNrehbUFNZsQ89csJK6Q5uzqT6x87GsoNMzMNa",
  "key9": "5hAHEAaihBLJWts92WKDB6nxANT2ZrNKcDCZC4faQTNXs5EE4x29zCRuSd79oexNhNxQjEgU9MveS9bjEKCGS9bs",
  "key10": "4FH1Uxs1MzwkLLQngxkcxx7GqzQNghn9EzMY2MYbYe7Sys1hucVULZ1TFSX27SmeEP729HUgu3ZxdDfwwDjxVcsK",
  "key11": "4AJse1QnjefZiLLM28QXuuCh7WY81DKcQTAVfbS5NLDinL89nesw3B8vztwcHf5R2vxUg8ecL5E3GKJXXEDXCLLa",
  "key12": "4ConL4tt6sq5xaLbML9wnNbaTKdKrPHwM1qNWnxYCcVAxTSNmCkV486iVD8Tb22nXNACPrYnZerZvsj1wctNM4j2",
  "key13": "8uXYUoWqRBjwaArNmpBuXNehRyRMGJik1eZ71Xz8iwxkj7CBWd8iavVqHrtBfddU3HB9rpmKCaSAtuk13uHET4f",
  "key14": "3S5kT9Qrz7PtpuvC4wA3W9WLu5n4KYePqiB16BadNJT18d2nWYteyWpQapiVeyXZg8aXqGK4ymx12DzpoaGaL2WV",
  "key15": "5vv5nHAYeq6s7y52DE7FCFSpndpGmz4FoWXpk58WugNea5bYG2Hn8cfYGhKqXdXhPWvadr8bY12ogWpznz4fNqJR",
  "key16": "4uSbHqDY4xzguJjbWbJ2f3hJRbwLeNXPGsJoxioXXEpCUD6fb6FZ9KL8aeQBxfy47HUzTG9k6MRJEU6GnpR2Xckg",
  "key17": "2n1EzHYs61XUDhu2ArUiiUJjtrj8g1Ssj41HaaEBYwLVHWj1EU6rpcE17nCKQuY9GKXHKMiT9QdmUtgYMR8JJ8s5",
  "key18": "5pAq6K9nLnYXsTYX4jcmVPJNCAcySLaqjWVqNxwUVX48sQ8AVg13TLTct3v9J4H4rrwJMiCVcRw46Khh23Sy9frP",
  "key19": "fZNH86ydZzyXpj35Ju8Uceq6cQgBXeQpTyzTAP54iAWk8b31NLboo3DYUd84AqPDvM5n9HSMuhvcmbgSn7Jn8rA",
  "key20": "2ceZhp26bMKYbonfqAtbXBLTG737gMh3tTTVqBc6Ge3K8s1LqXuk62VwUkPRCZH2wVmaSH7JZTsUFbnQd7yjJh1L",
  "key21": "4rYjfLDQVHvw77QDuLA3cXaTvajYo9JSauJoQeX4nFCgzNmgGzRPgXGS6uffk7NNnYUsFhGiQ8dDbt276VyghNqu",
  "key22": "5GwjqhErTSu53uKwq3VBBqPdq3eekUbyoC4pWnPTAhEtgGjt8jFNkCBsTUaiAMn4oPkPPqpxwdoJYQY6hPiyjeRn",
  "key23": "UoZNE9VLJRniVheKoY86EJ12NxVM8z3JXwuUU8BAyLyKntkb89R9kH9h4ywr1PW92ZXo8rCmFG4cTkSApMMjKuA",
  "key24": "5DcQVpGrAw7nncHNjrFTo9AN6G18aMWGoVLTeHZ3eY9LV5rufrVDeN1yXjPeBfuTkGqh5rrUkv29Ld9BMwPF3wZz",
  "key25": "5QorGhH7J5zrnAFc9agTCVXXENn7nXGN9LhvxwvTt2RCJEi8PBLaKoSa5gzkfc9fY9x5nxCEJUSEnnFB3a3XoSzb",
  "key26": "4Qpud2SQo9BkepJmGG6emEDXTK9arZuWcSnYXPve3twtFSupKy5soNKQ8rkzgzQbqhbWqiCAFiSaJcC2PPDBuCAK",
  "key27": "3RU6VzBziCXRUfRd6rhWFJ5CBE6MbGJQyfq5JhCvUbTRyjo9SzQG8Ypr3Gfz3mQf7UNnabH77BN9JJkAyavARGfJ",
  "key28": "57hRgabgCeYQHvkYznddQrmabvqd156qA8eaczk7NHreVAdiCHq7LZ4LfawZRxW1X58hFTibGuZqRc9y9Sht6ACT",
  "key29": "5YyB5MxMYAsbSKqLg8Mp6QHwnCezpTzhqjZ4jS6fyk1k5iLU9TXywueebRrB6qtQPM2cQR2XjoHLZiWsfSyq7G8G",
  "key30": "5SpRjEn5ziTpFyVvkqKsTiZ5YFQHU1DnwRuiR6qKwDSNL8Lp1sP1Jxta2YfWTVSA6R3ouhJGN5b8CY51U6VZSwV6",
  "key31": "61Mf3bCEWWzvXrAZszbtQpFgkgP94wkjgxAj43E7xYQ7WgsysvJbxLQdEFaF7fZUpRpCpD2FwwnBrkdedYhFrP2x",
  "key32": "2v23ugpAUg7u6sWHAP3dkG2kP6xkjVgevza1Ps6m6z7ACRLrrWazxG7G2pdidzAAyMzNe24HeVywUJsJtuWRF8xx",
  "key33": "2VWPga8SHLnNisLosgz1cuVGRoVQETVBFQQNsZb7Z8pwTLCRoz8iyKxC8DbzDSxJwZ9er77kqdu1LtJ26V88hyQs",
  "key34": "5tx3knGRSUdXckCAUVHa5dA5mRUZgLwuvHjyzzvi4Z1fn2LQ3QarwvNjmyw2ZDS665tqXMniANHiCeatxX97sV8y",
  "key35": "5VMTXhUfNM6UGxrgc2pZqQws5isJsyu7M3XbmjYnHsHZjcjeF3YzzVenvqFaQ2Rh3U9uNBj4JBCzHr7VrTbBUcSF",
  "key36": "5JVwNADab5fhkArExtPdx1kmqaZBgz2GkU27nGGWSThrbi5NtA7ZQA4UiAkUFSj88C4AAqwg7H8z8Rge5Yy1DJg3",
  "key37": "5VNpjwPubQdgbS9YQGKzZbyBq3towQYJ3r23sFsn8Tsf1baVvkLStUdLw7229kmjBzm53sXtb2j2dsm5SRVXva29"
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
