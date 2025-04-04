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
    "vjLAGP8ZbWznw6ydeiKCc5aGenH2T96GJXfu2R1Amk2QnLuXiDduZpJiiwV8xmpZzHK8kuJ9tHbSCi4S5Zpp37S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qsW6fRZ2XwA1sVd1S1NmzuWdffXyz5yijrNYt8gExJWof7zcqDeD7VBtzrWVnbTHxjdCAmzxKP4hxe9An469LF",
  "key1": "5VP8PhK8cF7QBv9wV8vwQzya88xwUk2Uwojb78k9o578oV14F1SqA2vg2rFWM8zy87sAVfqRj1U1YSd4B2R2CB8s",
  "key2": "4sWJ91hqSYakErQcEkuJQHJMCcxpVYu2jqoBgfeqdUjRGZxPSn79TDXgPnAuM69g1GyDmuBjGqccumEL4XHP3h6t",
  "key3": "2CW15HeQoJoKP2qup2pcq7jRuFhCq9MNZ6EAGXzmiPbDJDTGtJS1ShPgvXY9gFpkxovG9DdJkzzFD4iPHUrq81MP",
  "key4": "3JReVG3cXUgLrpp6PGwYVEfhUTaZjnDMq4yG3iamavGqhuna9UXdnxgp6rYeMncKo8hQiGCGLJXafDGKwTqWuPmZ",
  "key5": "2XTXYx5GrEW4jyzxMijF3EyEg1qToVWm2SjvDwnt4eWqtF1Xe9UuZ7PY3sdyHD3xv59fBk4ZTkhZswJ6voPM7pzT",
  "key6": "67VnD6VModEFDHDnW2DTtmRBb5bNXJr27PWBpRfd9pg62rAuaobPEb3tafRHCx69c9JbL7eKSvxmQXZDT1dQuF1A",
  "key7": "2UfshCYkyXKwedBVF5J49jmH4jeABVN25G8PSqxWyKXoPzotHPszGSAcj47QrbU4fwHKxcgtEDLnJy9p9kDZhefU",
  "key8": "31srhLbH9FFotmCdwctr7xe2vbiT8dfUmwwV8dY72DP2dyLZbtv7UbgrZXDYFxxfCPFwKGDPpJ7inDSUSHeCxm21",
  "key9": "4d3X5rM1ALGZPyyXwmoAY9qVvoBLPs6UyjqL3WTeXgGCPnuGZcuQvCBfT5w4hftcoV2YBZvj4htJtGW1MHrmP5cq",
  "key10": "4WboCwbvotdBDhxZwifaUAUnu9s8RT9wbFn9LLyA26DXwrFjx9YUKbGRVBEHewYBQs5F5KBjCutJravceCbBFsBU",
  "key11": "62dFobVapo7TdrHJ1ojiJ3teJSyRAbETwRweoBxxiADa7xoQgFamHBXUAsyXKxv4aJuGK5QGtjzyK9SPq8xtRUDP",
  "key12": "2na5EG2yEUjX8K4hMo1vSB2wTfBRG8x3YFXuibUDapnmirdU8s4qfjxC3ZZB65HwBnPKAmXE8qLohp6Qo16tj1UL",
  "key13": "5CcnvFSjc98LM7avCbrdjkZ2NPPMKPH19pPrGNg26kdKU5nwCZuQvAWeZhKXpn4g6zsvKyYXy5KZGK8XrWnsKbbU",
  "key14": "5Gkf52tzQWmqbTsTqEjLvvZRdgPs1HTc2eCYnTq4WxEhhpVqq58hTWuiCaCHqNVgn4ct9F5ZREwotZpTE37X5w6J",
  "key15": "2WFSKLyJHvdjJUHk7TxwAv9XU5yAdP7AA22WvsMNWwfpsfXuZb9FBuK9MRhrHKyWas74DQU8gAf8ZcXiQNZCkb3V",
  "key16": "ELLs4YQAr8cxfKMFHS845CCfg3VAXUF2LByz1dU4PcCb3NpH1yv8ucp3KM2LBvMX7mj9t9XqNUood3jobrcDnke",
  "key17": "2YJ2Yjj9jyK18BMjqhRRMPbxAaxoDRRr7z4uDh8NBst8Xs5zh3uzEgwwbC5Jmqnj8GjJzvoPa6MtzXqMG6khgaCd",
  "key18": "4jvMK9PC9t3o6Y9v6eHp1MDjSnJ95B7K7trSnJU4yACmkRMqZKfRgswVRnD1J8Bz3NmtNfStPYjvo7uP9dScyAxj",
  "key19": "4mJKpppToGjLXAVQF7UXkrwX496yXnXybS9im4L6BCVotH4Cvy3NKYrcNG2uMwdF6NL2Rbqjh3D2dW3nRBt6fmgm",
  "key20": "21PdgtJHei7ePaT7tpJy93xVqy14PqTa5oCkHeoRLTRih1GaYuBLGt185ViHJoWc1MpVvfBwqeksBf9P9DWGHg1Q",
  "key21": "SvtxvaxnEWSTJz3a9UZdbgyR7YxLeD81QV42cEfazqzE1DrjQKYPmgS3JCJDgRAV71SpCv8MSM8GthPp2W3sfdJ",
  "key22": "5s9VZquxwqoMKf1vqsCuqpwL56ZUsP8rVSoQmjjjJJz6F434KdtFFXqjoZwArN4aM6eX5MMUWt23YweeEsarwZnn",
  "key23": "b6ErhUnqsH8uGPnqDQb64wsKBvs34Cn1jpBTa5KDZreEhqr3tK1LBWjvtMMeEmP9urv4eTzxR4JfJ4HqhpgJN77",
  "key24": "4CMwM1xFGaT2denmhCVTdF8e8aMk9XVfXk5rZRBYAHzeANDsnbyhBNUUm777gdcAV9ddJjv1Ze1BA6f7BSF8LB6i",
  "key25": "5GkrAXFuTmG4raJsaLCxsjmqdisLEWiC5wX9RwUEPRK1vYTuD15KTcEfGfSZUgAeXfsEiSufu3gFkgW2w6yxzYXj",
  "key26": "4TDAQEv5SNdF93ekcjZCS25Cd64J3kcFHgqR148yXotNpJLs8VyHYQHVWPNWzhLMamJASfuAXgByWa57QVXpVFT7",
  "key27": "5QBrufAbS7VCkL79yMDMoXUt92owcU1jYF6gvzDas3uA1KVBKwmQMCchT9VFr5tiFa7G6W5p5tg3iKrrH9P3S1e3",
  "key28": "3oEaUh19bBQt93jy2a3pQdNV3GAofxJ7NsEwjXK7FMubmPgdmrmVf33e7J26T1MLyjSEeUsmdg8dY8XvCo5mz8EE",
  "key29": "33m1V6mYo2dB5WsgQvsErTmwqYraLKKi7G2FdV8XCbshLdg2DdmmnsVygumEFQv1ogcoetoxx7s5GNuq8eDiqBC8",
  "key30": "2q5rLmD9tt3WucHFtBSa9y8iCaXUfybSX2LTbZMYVT4X9LEUpEMHsNsnXfDGFH2DvR659iLXyLM52Ntdpmu62Yum",
  "key31": "5MJcfhqpmBDUpa7yid9kyx5YvREGZXZPNKAgJWkLvg11cUQFMoYnvaD5y1WG3jUvtgz6tuujUcjsEfsfd1vtGhaz",
  "key32": "4KTk3S9Bu3AMvYf99jUywZFpqLkqUAeSPKDuo3XaX4wtaEhLNRCCE95ZzPiSd3c6wHUsYx3VD669ZUDJMAJX2vWJ",
  "key33": "3KmzxYp5SsocGG2nzmUV7D7mXNFUFjfrbtoVxeNEKmVz94Rx3GjGJ3hpKisDhJ1yrqfxHmt2bLbtg5fxdzUPfzu4",
  "key34": "39tD1aQsaZhw953PAecHTeGYxHd9mbxcT4Cey3qeBEQG8HE34aEdqSBWBitS4tAoD5vYUVBV3MTKUGFdzfrKCvgv",
  "key35": "4tunWw6pbAAwk6fVSWmxVM5tSB1zStLAGXqSVftJaLX32SozGVADSzJFb5Kh9hd6b5CWwJBAeGyyi9sHTK91KeDH",
  "key36": "5eDeWTAqFEYZpBLC1C3y122uWsTnjnnLFBYoQ8aH1fYnBahKi7JzXoMKKjEkJpQ232NT3yULQPhFSrN2RuCVY7Nz",
  "key37": "KRpY6bvFv3gakgP7UR6buApS5sVbj9UgMkTWgiBj6sf5tNFhiGdPigN8GUtojwLQakqg5FNVUxyFQbo61g2Dmxz",
  "key38": "5RXHvpCcoYByd3JTxkE2sHckPGQwZ2TLv27LBqywJshZHkf8Uf6wh2ahmRi9Z674zjVPGpdsJtkGU7cSWMNSiWBV",
  "key39": "3obXnfr1YoT5gBzkhoKAwMxU1bVeWYpRwE7cnttn4jykBMLKF7CTUTVMMZ2XAAyBkfFFXVj4KcwfuR3gtfqUsqEH",
  "key40": "4WtUHj1aQtVv6pAjSxFGP7pRRVJGey4zfrXRwxVwEX55rgKz8gc3bFxcUPu1rRgzciPP5v19U7deWFxd5zXKtHb1"
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
