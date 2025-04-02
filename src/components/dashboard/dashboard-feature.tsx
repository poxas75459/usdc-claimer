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
    "CEyxkZWe5GaWcDTbXJGfB42QcZ3YJvwqEidDNNeUbjdEE8XR2LM65cozH2iHEd1XtsvJmMdiYnsCKYxSCcS82U8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9i5nn9TBCYzNJzozPPtAaCB5NUQN6HdHS5qPM6YsWGwLEoqRoW2sF7XVe2pNkTEjR9cb6jEKWgcvKLgsJMJoGPs",
  "key1": "36Qgtu7bavEH8CXiK6hdR9JZSmvtNc25ZFrhbK8MUw6ZA4u4EZbPGSruKhc3D3UdxsYAczZHKcZY8cMwTptniRgT",
  "key2": "64UkkPuxj3o6m4EvcwUCwceuMQg2J2eoeyJ1PG2ecU3t5Df7A8SVUajHBUhFXBNANZdHvCCDtrtub2weMCKKQE2f",
  "key3": "5LBQ4Hv5faQxX4gMMCg53ygBBBi7Z4eeWwH9rGv41qaXVukwZmyAqPtv57WaQ4Gc5rAyo9Lowfztvg7QqvDCLX6t",
  "key4": "Aoa2o1tHcsJgiszSHkCeJqhbJeqGMtWiFM6wNZUZr5DWkWhK1V6PPJMitvv2k38eyRkUDbgXadLtGnVqFoxSGZF",
  "key5": "4EmU4ASswHXhDeP1D2TJDjkWNNpq3XyrWmu9Fa7ATVLy4HVrfzFjKw4bUUhof3CPDNZGsjgfZ7DUekwcE9XLmA6j",
  "key6": "ujEhSwHH8SLXXiGPhpXQzCyHTg83HGQCB1u6sWUVgSVzE3cBFrB5beWhi3oqBdsCvVHSxQFRhb9ozZ4oQFZjkvk",
  "key7": "URSaX5w83v1Zm7SFhuwFu2aA9hbqdF4z36A2wazgyHkFSfcDRHY5S7ahhG87P8vkfwSQH1zpPiry6oqyM1L5Ud1",
  "key8": "n794JkFJD15mqRGRGihEHDQKBgSrXLFktcZxHdbqYzXTq44BKZvt5qsQJUSgzsDiQshsX3LEVsUy8U5FZYbCwRh",
  "key9": "67WLdAMHrsddVmF3ZPGHvRaAnfViDBjjPB2oz32R9Ak9Qp7LLGqwQG27rpVGokvAwqwzCuomUXvYRGdny7W1b6nU",
  "key10": "PaMyU7M45DDdgLUVnvVV7n5mfUxLRMA53Zt2H74YPwNXvdXFSjKmuCzsp64RmhixYEh16TYkPMP94RGpkKAEt2g",
  "key11": "34TDR4eDBD9GwCs76yXE1U2v8P3ZKM9cnWoSA2J2LCmN2DDTPv13psra6xuuQF5ypSZ7JKBoFdaLZ6a5gDpPqcsH",
  "key12": "DAbGRyaFzv2vPSm97iUmSyrWZfTotHbcCSjwsiqVmv3achiueGrNMTc6ZX4jBERD5srNqH1iqCSkws2drg6hvxn",
  "key13": "5vnie22Q65Gnft5wYh71ouYPRrgWCNc32sVNLXktFVXmkkDUXdc49H9L9qPQ7JcMbU2WQxAkyynvGTWCHwBeBFbM",
  "key14": "9d8cVQf5HEd6Ut3bhaM2Hg8dkd9zBnBsjntcD7ZAU5k8dqPBgVSQLBLvf9hVkZCvkviVksqymFV8wLty57vDe2a",
  "key15": "4ZNogAFkEXhHPEZ1HHL7qVoWwFA4roZaLCK7fwhb2FQyLhVeJ6nZBbbYvRDwT5h84rRspoSSSskv1EL7c7915MkV",
  "key16": "4UckPdKgUYuaLJRMDPRWumJgrTtSngCTbrBiMWCXufQM5UYmAiB3TtpwhdoDaekD29ZEWND1tDa76xLsEbT4gtBJ",
  "key17": "2DBS9LCYL9YKQN11AvQoK2XjsF8cPtMVJc7FnsPB1op6LnsdvwZjQEzisxMmEQaNawkEgiYphJcHKXUtLL2wR47Z",
  "key18": "3F11NpcMU21vNbYBqdTxLSfSy5JGmzrZBm2SrcQVocumdmwcqqUERnznyMtxmsv5cw4nisLEh5S7YgojUzmpqaDX",
  "key19": "2j6c1ZqY9ppCjMrE4ygVKGLrg1ee1KRgdXYkW45WEHkGBrSwyChCMAY9kxgrT8sG2HvuN8HrnUdaQPG6oSqXDHAu",
  "key20": "8pCMJ36fyzcgbhTDppJvRSG43eC67yVSuhAXgyJTBa2zx1Juwaa57U37uLJpZCjMGWVGDnGKmVWHjYVc2tjFej5",
  "key21": "7MH6AyQqgocFRx4DssfzhvUi9tmCAq8aHvW3o6gqLi1SKBKhxUEJan2LW6TWx8btwhspYcfAGVgDSFf8J6H6PGi",
  "key22": "36dvv1wb4US3heWHkDXRaDVCm2Vn5miDEj1GZY2AwEzG8EjVRyuYQr8bPB9iM4ca3eWksXdWdMaS9Pdw6RUzndUU",
  "key23": "492PuFdTfp1cyFU5C9DqQXmr7MWoXuYfG2yR7BmQxTkrb2sc9Rg9piSpvwfxgAs88EM4zZ89ACfBZtuYbBj9GViE",
  "key24": "3LJYLwYuZQhPyZnatidXz2Sj8PLxgfKZNTDx7rsFjf3YSkKmB9PgaWq5EjkfepePMXn7SDMhh7u9XYFEmgtiayeY",
  "key25": "2hP16gTrBrZvSXiMCvMjD6T2fQHia5mFLb9eMxksyLYxRAa4as4Kw8sihNwUuD5sg7S6kvfD3fZFgBNGTigqFdJu",
  "key26": "4KwTmZTMFbXgt5XydJ9giDgEnCSejTPUG89tgstqPN9grL4p9kUg8f5PwUzkN2LzGHnjtU6RWfVLWFL2h5JZ7cZQ",
  "key27": "4RHG6DUw7Bnq2cCgf3m66bd5ZZJqre5vxb98xnp2mtWc4w5FBfqg9RZR22QqHpo4W441VHqm5JmaH6dXs9zSBLFg",
  "key28": "2Ke2usFbmdo5B227DnV9GS4qpnhkifgJfid8KQJ2ZNE6avHBfgXW7fiZspAFcY6ALXCZYJMTpcRyPRYPanb35iqG",
  "key29": "39UVuWBqaxn4ucz5Uc6JWVGSGUs8qPP49P3BQdjNFsmNCeCnpjT18PqaLbPCXGsNDpVTrdenqZEF8PS3XVgjMbZp",
  "key30": "3m4Uauc2m49fx9R4ggth6M52NDqrifG7p4WMjA9Wt2FaskLzRo4AQ1xsHGzSKzYdmFzok5jzQruWSAYyjAywKdi",
  "key31": "4V9wQGZs7X53VJ1vLD2oUpZWMwuAtXUzbGcjZTsHikBXCt7HHzNCFvnvucVuXYiJ897vBFdvnjV61Jx5HCqqV3TP",
  "key32": "4zYevZUhJ9ZPQF9gscgQL3ZLFtDoQJSNUimWD5Cey7M9J1D379JtKaegh392JpAUawc9Lu4FvPoPBMEovoZHRVt4",
  "key33": "iqsBSLF8pjHh3GwLP4EuWTw1nct57Bc67C2zEkbsuTPRs6i5mpnqGfK3BRfANFLztnuV6e6ritxV4r81L8aPrcJ",
  "key34": "5qZETfWwqcXaixD4KKXY3vS4set1TgVQE3z2i3UWeB1qn9G5WMvzMrZ1yrUnZzJCRFSaGtoGuZmv6dcnjf7QY6UL",
  "key35": "4bMTAz2hd6CFvGmimpoMVdFrr7w4KiJHwj4AjaKJCBVF27evbX6ww648pv71ErrNkdorFgH5CDLh2ZuhLUd7Xn9T",
  "key36": "8LdoZJEhaFRxvhFkCuezZHXJJSdoqtvDJz4Xgz1ryDP9P3nET3SpMtdRAV4yUu6FvX8xFRvekZy7C9pfbbL91xi",
  "key37": "2wAnyLsCsC9zPYwsutQPFXMGCRtSnJqArR1BmGnz97WcMRuMzo1hXUE6UymKf6yzGzxyByZcitjXhjARdet7s8Zx",
  "key38": "5s2SRy8UWt2Ah2rCSLhcujH9EAsPbMxG8XEossHxL5Jmz7oQDTsmpUDCLwXPph7Zpk2r3DDFMqadyY8Lnz9u51Fq",
  "key39": "57DdWvpBhNcnZewogHEX2sFkKwNr1am9Z8eKfUT5j4Eqtqs6vgg2PFgkZHC85oaAc1tc1sPCLvJhyRfqSAGJr9Fp",
  "key40": "4WDjCHjdPE8eaTA3QwsTwgvm5dSsMP7UPGtWLpg5Gb1nsww4ZC1NjyA58V6Mzb3j1Dv65zr1ok5PxXGk2mfxstZr",
  "key41": "2TjCm1uBWUEyW1ouvhzfoEP78JKvQCN6Bgb6LygsGosnr2MtsDRMauRU5qHmYS6VkNo22zaTKY7U2W9qXjZUTWsF",
  "key42": "2c92Tnnez7fhtm2MJbghxx4ssF1N9oV8dzLaL3Vpnyu2bB9iJHHpES2sgEJzbEy7wzNW6Tvj3PGGD3cUHJUkmoo7",
  "key43": "3q3mnbq8xDE5trBcBCsAPdvDsXREfxztopL2DjFLa99ZLQZQSCcGip7p2eALFPyEyvfJad7RynpbZ6g4E2NmWVea",
  "key44": "3emGLew4yQC6XfSxi8JrTQFWHhrnghZ1hgafEa3RuCektbRcuDVSR5aaiompsmdh7gNbrErCvV83s3JXgCsMLm9J",
  "key45": "5xfx7zbP9uT8NRoNjgUyAMGPs48rjWcAemxZZPDZKimRE2F5a6srXjNBTtMAbpQY9fvTDmy6r38UKmM82pfdjX2G"
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
