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
    "5Hw6kG6w6437Bby6MRpq46XM3jHeJ16PBGBM83snPko6k39k8C1yNU5y6Dahwk9n7WxB9YgiXjtY8Nps5SBpFPnj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oCNjJXBVwaQu42V61v9XGHtXf6mztMDLNaZwp7JpzsYxYWov7h2ZVAFAEVq9g1xt5EthxwhR3EFnDR6nQ9q7xp5",
  "key1": "5SWUCrdCqEitTMJYqDCkBWbP3KCp3BSD5DemSWLjzZvZtzahW29wbf1oTr2YqpeLhZj1ppAWypoQ1deGpZqxhNMf",
  "key2": "8rNegaw6E2geKPJ7PFR8EJNbH8GCVhuEbpPfMgpD52QKMpTBG76DSSP8JE5mwSMFX68CKgMPSQFCHu1phE9VKy9",
  "key3": "yvBQzaeuXzwBDopeQLXtq5jSQWYxNddvxyBMfnAXfBsfYjUfWm1BiA2cqJAKihzHTCvYeeyRGYXoLwtfoyAk6FK",
  "key4": "3zVQ5yw7ZnsQzAd5bhvT9BNLeiT1wRtTUKoLwZMLmZ9UM99rHFSpL7YzZUsvAJ6PHZwVynF19ytMUmAbyYpu2nnx",
  "key5": "cJRsdTy7nicKReTDdn4KvU7afsw13fapHEF5giGa6tuHguqCaJQrciEPYQBJR2yzGNafEoFTF2j5xrMU2nd3KUV",
  "key6": "4cX8KzptRnABccnqthXPQy8LfBuhrnER5qp6oScDBZ6nss1VSLFotxwX8qRSCZhZFGkEZv4bC1pk1Xn6V33EveGr",
  "key7": "2vRg7VjpvdzcQpnrGnQbafEUDpRcBNhppUcBLzGkCPgt9yU1aVr7vR73Gt9xEhKKpKERuTzPdVVT5FEujWTP7Qnw",
  "key8": "43ZLsUqe6KvjAaUWaTgCDugGCM6k2urtiaPD9STJF47Trp7W9oTknMUTWR7htgfXxxTVMCM4vCddwC9q56L6q3EZ",
  "key9": "4CC22jwM9fRf6xiW3A2sxTHyyaCBSUKz4f434a3oumkxLGVXdBAUfvC98irZURd4L6YCjcguvQHz3jh2zBBSDFQc",
  "key10": "21rCCd148RT7iercUMbyasy9LXUcfXX9Wiiykoxwatd9gGLYhjYkuygxtks8fCYebjo6EaJQB7G8uHL4JeVWVhF5",
  "key11": "2GskqHSBgyN6gPEEbF5wwMxxHjUs6ArhT87VJodLXbHmaAAJ924tydYPLFqycCH2wADUNGZLZd1CJHHRTfbzn6xd",
  "key12": "5EbnZsKza7WcPqXwBMpjC5MN1SZMDopqw2Me2em5jVLTAnxXBRenXqpdHEiBiwVDq21ub8w6hj1SVsVTb9CBSQ8V",
  "key13": "2Jkv9oQu2GMXAvFv9QXh63CKb4kB61MQu9u8iSptxw7CmZ2pWhFJDCa7RVNZ9WQorDoxgkLCzgbeqq3mJRkTSHVS",
  "key14": "2zqyVv5nipA2m18ufRZXC824BrM34hgLa7yif895C1eEpvzuSxLaUXTY8toLEMnPJSS2yk9jBKykmCgjMRJFiCBq",
  "key15": "5qBcbevxHPx7aGfQqQE7bY5JusMgx4115kPngyrgZpnM6bDDZeR3kwV43h5ziBBXVqX9T85nB9aZQJfjVN1nwo6R",
  "key16": "wGkRefyL2ipJYJuss9uCzWgyn62nrA4RZxEpDnLUUeX5F2L9iwhePPrLhYfx3iwE2EjQwBvF6i7euTA6mXH5eXN",
  "key17": "5GrJ6XEb2Nu5em36stSxyUhqh2r1xb1WiC5RLAvfKDo58XP3YzQ213aDWSpeUPNu5THRgED7TBo37rBrxBc7muJk",
  "key18": "3Bf7H3FQ7h4MdZsPwwosJw33ZWT5LzU4BA3FaWJnMYjRwEtPxQvmhidzr9m8rqzZBwJiL5cispuU4ww7Yuj6wiAF",
  "key19": "3s4dpMTv2ghwM94Tw9uALDQH3j9UcmfJNyNwL2eoL1wEJB5SwrUds6jXpLpTn6vN2XEkbfVY9WP9F7YjB25PdCHj",
  "key20": "52kuzDkPiKXCccg7Jfwpa53AQv9DDLD8VGg3hwpfdjMu3aB9AbaEkE5uapsMCNHiWDHTSstJ6fBXmsdFrB44FWet",
  "key21": "YerEsNUAFAoErYtkaXeFaaAwpbJwF1EQiBytCtv8VPLcMK5gfcVzeqmovo8ZfYC3aVEezEEKtPLq4ePKbeyUjLD",
  "key22": "5iQ2PjPApKapSdSFQxzhL2a4VCQk3DuSHhdyAMZ6gVmvV6wFk3g2L6mRLKeZp9fGVtmedG2cY9xVm8f1hMFswAYn",
  "key23": "WPKEjtDpW5w3Y7uKzswLrGqvpTf16zQy73FqT5uBmGvPWDqfyJUc7e7omKjzgvwEjWb5zE1DMmS5LpYMEFiEkNw",
  "key24": "DKk3z4Zgdc4aQDLVJtctKzTrFmgj1bokmA42yVVXepPLL7zRXDMkRgipy8r9rMuUJaw8hZRW9PGdMr9QqPi8okP",
  "key25": "2Rev7MwCiKeosznsz6FeWyG56pMuQ9qN75faSxDj6jVWJDEaUS7DA1vSs1NMmEk7MfS25dBPMwnZM1c7Vf5ZFYUU",
  "key26": "55pypSF4DgbQTrt332ArJJc6McbW2c1A2Qs7xcNP3MXyh4TxRCFHoGwLM75XwzdGLo4z8FvVSyHbHyZ8HBeFQ8yE",
  "key27": "6zCdeVdYfRxsm48xfKfB6MFYimqPByg4Ms4wQeRn14yCBAGRGCqxBfEAbujjiJMM3TXjscWTmoGRN6h79212ARz",
  "key28": "279XDwrUjsVNx9aZAMLxMToWkiqEU4t64beLNTbHWoHzpi1Hm3Zc6sJs1YY9VVqeeA9y244sELaV9wpDC9LofVRn",
  "key29": "5g2po8dVJpmUtVGW3EGkioz5xCBEw9fmkURSJxcF4zu9y74FPp6KvrgGQoCfrnyXGb7BNDLiHwxCeyFZMK7WVv9G",
  "key30": "uU4zF5YeQ6QVoDnz1kwHY7jrgWxVSxb2RcHDZVGsK2J7eFRBXkh2KFQqtyHJVXmPWKS25KDuRF6HPVrnYzufQst",
  "key31": "29MdpBJjA243PRRoSedMJYMYtsfGqga7Lryisnub8NcXm7nSXRmtnSqzjTUZpxfo4D9ZMDCvuiAyvKQdKDeFi5bx",
  "key32": "2Jp6yAaYWTDXFPei88y5UB2ikenoceTJHVAiQpk4sQr74XAaCwnNBcMN9GMxkCQ33FfD5qsgDek3owYKNuCKVXfy",
  "key33": "2X9hVmTLX4bJhtR7Sh1gNad5ZsXipCEeML9x9QrTHV8u6GwivDXxK5Uwskb5v4MkBPtPgcYhvxgKNMDMRjmoj1ow",
  "key34": "2GNkzibNgnDbXhtbdFHJnJbrkmMjXsqcjSHZF4DWLgakAQPWahRsQsExKnUSnYB1a1tM9gwwmrQUpozK2mTTMHHU",
  "key35": "TRbx65hgre2JHqDaktV4BEyPVBr8JGF4BEzFf2qjDAdLf9VL2hs2wHXqPXx9bE6DM7bHpbcVF2ecVcK5opgkkCD",
  "key36": "3XDa6XFtDvmRc2t31hmw5wCx3dp2QUL14y8PJZYmsjPK8RiHVfLWyjvU8EqHae1zFdhngZ69Je5phYyryDUEd2KX",
  "key37": "4x8M4ao31XXFzyjgndLmMs9NboVvuJCco4UYagyhE4Srec6DW9af77bqSTT5UdstQjru8qg1AeUTkGgcha4GPMss",
  "key38": "36jAEowq5QMLFfidUkfFFk8TVMCjKdJroBcEcog8XFVK6KSyS4uZfa4eGF8AUJyRbGe2jBT3ppKcdhDy3UNwJpTi",
  "key39": "5znTetoB1qw8QaPbHGi454KGbYJ2qGpLiuFD7apjDnL8RqEYiv79Dutwpcp87L3TghyCHGDzvYVhX68CMRsc7q3E",
  "key40": "4miuCULbQDLgud8H8xbCgR1qwPKtFy2UuHSjYVDYbtXTLCXao4mj1K4HbeuyX8cRN2ofHGjdQGMQtioB6PFXHDg9",
  "key41": "3Ch8mruLkyUbqycj16RWzDMs8ohZBvf18F5BEfC8SUY9bm8i67P7LMLvjPG8WkDTpAXdrakFfuKMDqRsx5kjxqyD",
  "key42": "5jwkxJAFeycqPYujZTR7VNponaMQGhtGbEZcfJ5YsdhK6DD4FKQfsjJHokdTbDXxMogbJ7hSLSmFnPBo2ezrnFr2",
  "key43": "4TjDmnMru7SKM9TKePHdJojRbBahntKXnYbarnd2uXh2yoCxYSH3sYRAUenncQ1goMG4Tzun6udZ6bbNhkmSAppu",
  "key44": "3se2ktSYZeZ8X562z4zrP3xT96SKuWHJSfCcbG1beJHR3QsFdnmv6ew1D1EZ8UFJUUXTxYLWKsCuwuF7h77xBmpL",
  "key45": "27SS9x2dxgAkCrRE2PYvHuThyCpjCQ1FkS6Rc6VbpXEDnArvRLJgzUPEZt2egpzwfCovG8Rk9S6m8s8NoZM5EzQ1",
  "key46": "4AyC7dn6GfncXWajKGoocAnSJnTaDJAKyUN3iXLZBnnpJVeGpmPt3J7ePJSyT4tjQiVq5wBhKeTFcCYnyagW1a8x",
  "key47": "35hJioR1Hfqt1kLHa2immL76GWFdkAGTRPruuUaWoJiFJBkUD3P2UK4X2JamBHVEbLZqWEa6nsjf81d4iwGvBXga"
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
