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
    "5zFypWpLCmr9xMk9S43AoPhdF1zAV8bpXvSqqmzEVaEZy5RRKALQky7FstyJffvztaxeffG7ns1uuYE8CcZFKQfj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JDdTQaXgb2EaRwUhG4uSpq8V2dvWbZ6yfd799zaLpTMLtVAgear9QRSFukM6ero1Rsk6YhiJX28EhdztUbB8Lv6",
  "key1": "puwo6h8sT8MEe84nzHPJSykBvoCFMnmrVfQiLk1ZAMJULEkuswufZMXz9xWVS7DtxNzUhovMvesJS5zPkr1nBSi",
  "key2": "3Kr2uwEJ4qmmnk4yhyYt96CQttMgXHPA8f9En64rLjYXTrEy9HTJ8nrq2xkubHEkZSYG1BziMS1DbZmxfvXHqzjp",
  "key3": "xEPUF3MFKHjUwkuhHzTpnxcDpMyAfiw2K7QprSduP8sf53yc2AaiVb4tqwXUTYR7262tub3vtZFvX8p2CJKTZ4o",
  "key4": "3bWMUNxBHNGYnPisLpNXwu5u2QCrtY9zAZoZfigV5PuDhQFnAB5yVgArga1CoDEcdR9VBsq3kVscvf9iyjJEVz3d",
  "key5": "26A1TT1Wov6ZSeEipd34Msncr2czkQk2wgQS5ZpBCC8wMopFR8AvvRoCydfzYtuNatqvegL3QDhShAsYNt58UtrZ",
  "key6": "3B8u5yXyiwhzdBF7Lq3qmcEssNfjKNpZzNov94YnPvhNMj9CL6mpjPCq4WJGddjhA4frEkMERU9gpDNeghjRVLDU",
  "key7": "zQPN2cxAajoBo1w1iwRDQXExJt1e3qczh6o9HH41Ht18D5reUUvowcsigrCRCcyhCGiZby4W4e4Aq5bBMTo9gwx",
  "key8": "52ciuQz18oy7WJy1tsEYUzeBuZVUFYhBuFTRqwKyi4VMr2zQcf4E6DV6zdBGvwbdpdFg1RfzMnF2mtHXoeY2p3B2",
  "key9": "5XhF2c8CsZ1AtZco1M8a7ASqhKzHSe55zFtbAQriyYcEJ4956N1WuJZyBjnKJUGE8VK2DudAeT6oVSWhpBddCWe2",
  "key10": "5DVgR1MxUGsNCL7vhUUa8j829eKxCFfVRrcEePMvWS9neFo62hFURNSSURZwq8Ka1ZM9FqNJLzRUz7F8GPqPGSjF",
  "key11": "3ErgwEZYP1CMuhECMcM192Ghhun4J7bGDMsohCH5SS7VwujDQFgJL48EXnKtF3yyWUvDQ4fuBFjAKk3EBruYJk4m",
  "key12": "44pQWayECpnPYqL3tAcu24bXpk9cKkghV7dQG6JPwikFJVFMwXhe1Ua8ysRsBCbyFwqPnQUzyKbfkxwd5TxDFWPJ",
  "key13": "5fnepH41fm5HjTWjmDHAVZFcm7Y2Hon5hvV3rfrExyzjd8gskBT7sPS4PrwVZQ9WyHEDHxvSopk4WUdMDkPTLcEU",
  "key14": "X6ewiq2Yk9doZ3d3bzcNBsA7YuLQ6y5fi8d6mnrbZ6Uv1SYybr2nJbQbLSrNrh9VaJkBN39kaK4Ki2ERrcPh9vs",
  "key15": "qogGYYhNdQEGP5KjUYr71tJ55EQQ2eUw1uoEmunHu1hLDfkvTsKqokiW98eprwMQrj5ezUZthXiBY5wetS8A9Le",
  "key16": "4qBrEuSc4c5PignVFGhRctpFaYnhPaTUU5EegQLpUWA2sBYwqou2Kqs54GnDWsQwPB6AmjUR5XkxaTfBAaqsMCmL",
  "key17": "314d8mUUfW3Z3BPyosLEv5rsrKU3rCc6NbNPXtJFGJYHnaCivf7jQcdLiCNrtxH9MvcWc5VYpL7K2tWkx7Bv4J6F",
  "key18": "3hSG6xRnEDEitsesSGtiih1nF9SS8fcBHrsaBfnWR22c6qiFzpdWyv2KsdYAK5PGMZq3FEaRzFUyfDM16cT9FtHr",
  "key19": "3TEX2oXGP2p9wKWFNEsYPpjxJbPDomvtU8BiFJeDBXTJRRgZKuFdeMYZWG6DssHrSQVUvmdYsWWdHb5J1kRd2JtR",
  "key20": "3n5ThPFWBJW6UsvwLZuvz1eDSEQDwb1CgvEin5cFkGEP67ked7T1GoEBz19YxC1jmC6HhYC37ta2N4HWbYREq5ng",
  "key21": "3xXvhB9upGWv5ocQzg9a9HM1RXp7AoWELz2bCfx8meapX6QoHjTWTqpNSn249Z8aj39woFcQQapVEpqDunwTWhA7",
  "key22": "5D2zrcWMSLDKzoVh831VwEoQGtqxvxz23cVNzXm4SdFdTsG8K58rm4Cpy1GYEtGCQgxBu9yLaTRzq7K342sg45gs",
  "key23": "5dC4oM5w9GqhtP9mqBYE8o67tpkxvKxQve9dwyj37biGZnyvjy7zHL2GUBnxVzFFecbyydvaqLbBQST7mwGuaEUz",
  "key24": "qy8oSiNXUYhhC92xnd1RgRZqEBJoeTBBqK92jW5E8f1Dxy2pFYrGbhDxcEboyaszHesdbFr1KMU9zs1UWDSHhbx",
  "key25": "3Tm7tfa42EWhkPeXdnHjRURwPMUr9yk27L2CKqmmbEyy6arnQrGmz8kK72seJ6L8aG7oEDPYFBEaaDjFJyDFGwRV",
  "key26": "dGve38BAA4sxRtcTMoCBdsdBaf1jtPTb5LnsffYe2DTMnpvpQfmFuEL5Tuxgwq9vwJZ3PXRyaqEikiZDfNfyZzc",
  "key27": "3gPrzrJqmXQbFApqzEedRFNVmjcKaTLktgvimywLPDA5qDbwicoHCH5NGYoDZyvBfC9G1f9dEMKxcNfFdPkFDteK",
  "key28": "67K3oVS6H9STfkseiadnK1fQ9XgJFJ5bChnFqvbhN1A59ZLeFKqF8ykYph1CoCDEkv5GJLKVA3BsWv1YCoWL5StY",
  "key29": "LkS5GdFuEGUwow1YMUTVgqYeoc1ND613zzUcVop71tTorTAfPSgayoLnF7jAnJnUNV84VYwyMzC6HpT8zPYEaj5",
  "key30": "WPLMkCBxtHPYLHrhmJZGUNZRvCXdB1B9VdEaiUPYfkqccyVaFNAsyfZhUHQjQ4ZEpyqNapSAuVN9xWNV621EP1b",
  "key31": "W4gjtTVzBv1h5wWSKiKvJn2MGRFFuFW8derwLhCupkMApFokA7mMP5wEe7jAepuGKyeQAahpiqNPCSd5Eh4dcFt",
  "key32": "fo3Mw6NAk8aUmkUQ57iH3zLVZVFDeLzkjLcJHwWJ8YLRewHNt38fjo2R1bk6AUzotHmu7k5bmvfcPTsW1fKEUmS",
  "key33": "pnbGooUNKDwZyJDxKUMwRGMSiTND7qiZ1cEvg8Cn5gmS1HzNSK5GvUwX5AgR1XL52XRvddhUyfJiCj4KqTk87qU",
  "key34": "2gLN4QDA8UUU76UnZmLcLGRZektHJv1KoNze2opS1i7uHYZfgYYGBKXTSzd4LHGYNjszggu42JM6Xkg79miQkA7E",
  "key35": "654fVA4iK9ErygHSoBdveUG9xX1Kd39ypQ4Jtk3sTKxyb8f6vxkKk2Kv9rZMRW5Ua1YdkEKhVvLtucH8SSGkgLrV",
  "key36": "4sGCcSHJDtAiZtpxTxDKPPmHLz2rxz9XrCgLePnShQFdf2j662sLFRcu268Xk6XgGucN5CamFXX1bfxZ9E4HZW3E",
  "key37": "5PqUTxNnUrvX8A1osQf67k79rp7kq4tmqHkHJY4MDSbqwBUZAaXYECiRVn5kYcUtSh6RuTbHj7JY1VvkJuvPJ6FU"
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
