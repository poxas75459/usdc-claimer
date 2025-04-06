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
    "sAZkAmbFSFbzsxM7yTnfintzSgRPEywQgGkid7uRmW1GgcZVwLMwetQj2XQTtvi5C6TcpMhJ8sXFEHpe5gPeQwz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3im3d2FE5rnUPZCMZMQD7RRAFjwy7iE87ayuHX14uZcK3VfFAQhqV8EjmbroTEhLi4BKqFLQ7eMEvsL6SGDvN6nG",
  "key1": "4esRg4YeYVaDs6gM2U3VcGbD5QG6rrv3vbeiQcWj92WJgPXauaxmN9e72hQGSa3bCZUseT5MLAnd1sjCaBNeCaHG",
  "key2": "bFFGJo2rKH7nacAjy6E73uQwpyhfwfp5ZiwKnYG7twUA1t57NwSAot2KvfWr7SE3p5oPDuS3hkEpBLcioQ5PoNH",
  "key3": "5JRnrW4QkC8xkwqFNs8ioZghSrR7uRE7GoD3osMBposj6mSUGdZaZ6YVnUDYqui4f8brT7cypjNsaiUs8jRDy6go",
  "key4": "4RrtEaRT6jAz4eQNyRp3qifxQw8oz2QRsovJzjr57uHBbj27PEe1397MK1tmawkW7A7MezEwbyzQxersva5ndRLM",
  "key5": "2tnzJituB1PEu989mnx5SWYn2rsNFCrgxc65Qu8yM7zcf4EWQE21cVe2h9Tv6hzzfhF8zNf21qAZoEBvo6tLsTVc",
  "key6": "fopWTmcufPgrcE2RZnsaKmhtcfZktRhNogV5CT6RSQfjMnzDwbPavEhgu1Y8mH6XtNET6HhACAKEJx8qavbq5RF",
  "key7": "55nhZjGj7gKYGp44FXotuFQsfaUCcJJmmhKE1XAF5dLPQ1rKjx5wxDZoRrJwKp81B5MvGJSAPxSSwZfRK5iuZBWb",
  "key8": "5vdaZGKhrqvKvmmrgGbgYoW8GgXYR4fx9FfPUrUD1LsotGZBiE5XTDjGiAhj3aCiN5SLkbumxHHL15ZRSR7VHFLE",
  "key9": "5JJqqi9ywdstmpin41vQGdaN7fzUXHdqxJ9ZefpSxAv7fELeZnV2AaMu7xFo9eQX2XvtYT8mfqUndPcb3pJ8NmD5",
  "key10": "5DbVZiDZGcGqSDChAL6oFFvXJZADJTS93r8DDuwbXEqNxBBF6rMykg4ZDkgEbuuVTRaoZ458e56tKX5BjzbUqi1h",
  "key11": "aUDtsEV5kitmBj4GAb1NgM6KoZwcgjcCZ3xgtpJAPDputzimaMz78THxzwtmNYtS33VFtZVuVVmHLjMTNewvTXx",
  "key12": "24PGBFd2PFLXtU4ov2Jz2Kehp1mYx1Ywd3Zb9kUwuLLpxD7X9B4ypbZzC2mpZNyACbkQmrTGohL71AtV3XLSMX1H",
  "key13": "4HnUrHH3erpcbn7yFmCgjo1iWK3yLfufuJa55vPKCBJzVnn9TGeN6GFJMLoureKYVKSuUGFapkXthbyZa2EtYho5",
  "key14": "5U7vzF2tk3Afhdbba12ZM5MUWfdM6HMUiJdeZq9wyjGVivK9NpuX7mYgMGv2EvYeg8nF9oSctAZjAZLMFZo1A7uY",
  "key15": "3s87APw6uvRgx2RWriaBUgJidwYhBkcJR2iorrmTUit3Fv5sVncYtfTqFoLC7hiXqBC8VhWXZzZABCBRzM5tSLgx",
  "key16": "4Z75b3tSkLBPDD96UyQNiHWkTy6qBXuQBMmr9mxiEe7E2Cmt2gpspuKA2oqkb4pasR9GZ2XWJ9EmdqnUtn6xS7hL",
  "key17": "3VoV9ENteDKnzjvhERfJdyadu9pqwdDshD4ixLCydQyEvdmUqLv4UP45Ty5WPviaZszGbDWaZndRyBXE4pig4NWW",
  "key18": "4ky9LA16mJEUo7KWv7RNh7NG7pb6coUb3esX1DXrQCaRYdiPGHfTWW6FEqNVa2Y8GXoFnD36rJomtwCSMWg8DBMx",
  "key19": "52cGrcP1u7G7WB3C6WVyfyQ7nM1PxaXw3iHEgrhycR64ViuDrfbNEmCkKo7ajNFRGeTrSPegWd3HL8UELVdCQCTt",
  "key20": "5QTs2KdEJVJqzGis8MFbs5W9dWirfhU3fHe3yypHx3hFMZvTv4mseoJzMk2rfCLjWcHFLhLTTeDRxu1T2NGeN44V",
  "key21": "51a99fyuwDk4HVBEtq9jiJba3Mw21RFX49Q9Hq7R15LJf5NrFR6MKFNgoYSrrM1KiFuaRBBJGUJTQinyKDhE5EBs",
  "key22": "5vEB6UyEPtrjukeaqvA1VNEFQgWGc4PLB7LBA1FyMkP6erAkhpAgwxkqSRjnc3YNSq85r6uB6k8vJZoEzoTmPhUV",
  "key23": "51fJfD3JU6fba9HfxDvTQGAYeJwVZjPKPFLX2C9TxCCmaZ3M7aCgV8uSfdwAKTVRydnYNeZpaea2VKxssagLzxae",
  "key24": "nkybCzJmpDijpP61Ha7fPHUHSgmW2RZM6sSRE9rUT5RcHmSbeeioutPfx3erCsid9PBzpwVRY198VWuNRG1Bx3V",
  "key25": "58km62T7hNYA396e4qwMPf8NEqubM9hSQrp2jfMx3v6hbtuU49HQJQhvCBaSbMemKLnBij1KLjNhLCqUEiVY8bYq",
  "key26": "2SoLg4M27FqaicoPPXNY6j4K99ptwsziAynSfMH6QgHLLsL6gTQotktDmn76nHyLqTs7KAuPLe2bg2M7Tet5pizh",
  "key27": "4PHVnfyxCAEPaCribEzHguqxSZCdn27frfXZ7a3BYNJ7a5kZEHCgqn4skHvrLLtaitiKD1Fwqig1W5npmNuhmA99",
  "key28": "4dsgMgKMZe2FcrQaX4mtj2xHEcEo91n4nRPnZhXPhWu1NckmMedfzbCuxZXUAoeFzxYNoHNokjtMS9xQJ7jVxi6s",
  "key29": "e95o2qbz7hmBu7XBNyz2bxn6Z44hr3cRjEu1QSZktWFYQhFNg2dSf75629XfEyyPCZAhgjnXk6oibRGCmVugnT8",
  "key30": "3GRAsMo13qHmT3McJuU4T2Ew8D6w1tpFrz45PRq7GYsDm5i3AhEqNBp5uYXGJWK9JdN1CcmKCPk69VS8RRdcNrMk",
  "key31": "43erTfUJAsmNcdPswizxjy9xkJtW6N6Nb8zD1ay4iBDkj1Dt1Wd9cEmNahV51i2hu77bpKWfHkJh72ogi5tVDX5U",
  "key32": "2NBnb5DDrVqRHDTJFtCMMvsf9wtvmpzWWBT5h4nqcY1BJ6w9su7UvhbqcuAcgAgYpXPCugtZT3Soy6WCuAc4FMvR",
  "key33": "Sf5u4QGu9qZ7ux628A7gUK9YoG5RM6kW4QzD8iDCSXD3qo5h2oeww5c6bVMkC8k7kYSs4A27XZBDtgyY3yrnR9H",
  "key34": "5cGuNsv4Ycduaz3uZKZiWhzRQqk3FasSv39zQsbF7buYevGGFsaHPKAb87vQqSjaGvGRdkkxvAGMiiCvPKFYDmHw",
  "key35": "5ZHPbcmEWniXNfkqjktaGdjHDxsmfgtgh42qdyh1see3qc16qYdx6qd5fbYU5NaymYofU862K8VnfPD4BVBnpybD"
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
