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
    "5zXtjuTrezamrrjM2HLfXckK3Xgqr77TY3ntwaVDvQ1neLpU5CsyFhRuoEFux779HevaJH1TkNifrbsCXkXcUtP6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YFkMWkVq85FcgqPVgaqR2WZfBEi1x5b4p2jQDeKg51SmNSndKU76HiaBu5UHibxGxXTZhqvy5rSdMMuXjuZv4h1",
  "key1": "SjtjttmabuUsvn4M2pmaAnctrnURF7TZVY2idLeZe3CZx8o5EBpXHcvMn1yfYHpfSTmCv1iCXKRULk4vYdgUepb",
  "key2": "3KZQx7A5BTRoyYH9QcPxVi3PXGbcRYetXbMsMbeXnmPbYM1bzt7CAenXmChsAKygQee2UvD6fQ84wDR9KgmhT3ra",
  "key3": "2MpoamQJFhJetjyzCzvLY2igG4CaaNXCqdikR9d7qSzhoYF9jsidsHhJT7iqC2wsVS6yoBL2dhPySToPM7r6vzz6",
  "key4": "4R2sAPZke3oDgCP1Bg1U3DPYmioxu8C9tE7j7wEDQUfeHi34mSYmejdcKRtcER1bL9MGCio34tppc9VXQgrDrF4x",
  "key5": "4KpgpQeuegi4ChCohCfxsE6UxLXLB4yVqAk9MuPig7fXPUWcKz74KxV6RGYTpQLeVVJH687sc5FNGD7Si9EMrqFX",
  "key6": "3QVheQB2NqspwRWMuECy23ax9xkeiBLTycgcWakWxw2RoDSBqWL5LWifWGCnhkwzvyhrDS3JGT8RtWRPGrqcAoKm",
  "key7": "2TAJVnwpar5zwADu4yo6pwg7mw4qToD6uR5w53VxPXm4DM3jvDCBQrZt4De5pfYecHJkvNkSiLzkG9ztCZm6zDWm",
  "key8": "2QSht3Hvb439W1uyS9vAsurMZcx4qoufzEautMdjuTCWULnAYMEZeHR78V64QHKJLLvuCUw5b4AUkvf5UmwAbene",
  "key9": "5ANVBV4ccMHwhJ5c49ZVepm5p8MHs6cBUDLWmLt6MgeQeX8MkXhwhEa5fBjHpGREC1inDw7NEtMKv3jAK3YQcP8C",
  "key10": "48BYDV3KYPNE74TcuvUPnAG5smsbPSQw4FjF3xLzV5Bg7Gyix8LxWRgG77GrSpB8dV9YsTMZS4QjHnCpS1BdDcX7",
  "key11": "FjwkLrA6Z3KrBkoctWMqVbCEWrBdVPazN5twvSoSKMH4C9ARr25J4AnCH1D5MY1jTNcV3bVErr1VfXetfeNgHcF",
  "key12": "33Gy2hFW1pEwwiRGP4EN3mrHDHm1habsS2hqM3d9A1ef81PwLyx7sQcte18cxem6H4UYNXRayLBVqKQF7ZfdKUyU",
  "key13": "4Bf99xEoSQsYJc2a6uvi9ZS3h1e3Ka64EZdXGLhPDAi8738ct5M7wYGdv2y4WhgtZoMnM92RgYb9hHWA5XioAKbP",
  "key14": "4e6F8mb8f2FA8xVczHHprqZru8Cn4LVLi9uWaL6BA81T5tpFeAXZ4cLzCbocFGThzns7CxFGHENee2Q3h8STNept",
  "key15": "F9NE5h7qUdzKfxcz114xhCgQfLPffC6VBB3SouPhgeLnkqFN1ZaPoGm9QMzq4ESVa9to1BqEZHJCXgwHngL1FXc",
  "key16": "28DLMtLzo6AWwKrP2MekwoxDbkEq7j7k8eLN92dSaXPiNNstY8UWMNBt6x6apobXMqnpLtJtpLz2KfGuEFDcJy9y",
  "key17": "2kUC1DDEiP7sG4RmNQDrPTbh9dSTfCzFNNnWYen7rAHdLPgwvmfeB41mr3vLzqkSdaBNddnfXGiMCCzteimomBP6",
  "key18": "5nVJ1ZeZ1irhJhsfeXtS2jfPZ5bQez26tcVxtWhYxMZVX2ot5WWF9zq6PsLkc54TuKWyjULbSS5U6dCAMzvpwqmq",
  "key19": "4wWU2RrmAYGcbckBmCdMT5Nuzk52fRRHMpoYa9hWwp23LVuTzmYayymzW7zUpmeCmtGUy37eKnb1aLZwofojTGWp",
  "key20": "4vqdcdwPWdBRVtanqVa2jtaynP4Kecuh4PARp922ejN25pRVkFgqovV5RjirXFX8hA5ATS3PyGTqGJqHg4JuBJFR",
  "key21": "4tnSBeUR321oKBNEyeArcowPkCiguYPFgrupsg3LuvjmVrZwEMfQCy43VULRS4M1WrGWdWhFYWSXs9eF2iX3nrw5",
  "key22": "4Xb2tG5R3J7JkwH2V5WPZyBpsbEHxfHnNMSTaUBdguzBcpqqxNy9hQoWHVqLAnRRXmoPSfr9uqJMFiKRqphGEt77",
  "key23": "2F8FHh6TVd9GsVEMrZoaWUkpS28yWSTzdX9rjaJCwwVLtNanXv9Vw952vMkU34hBe6QBDW5hVtNv8Raoo2hkTjiG",
  "key24": "2ftjLoE3mhzG77ToTMmoQD6cpSnzZGwELgZShAEGqEXB7stUTspjdJeN3TTMFhgmnJ4CyaQ1uVBCdmg73w1xtxmt",
  "key25": "5CBJEo6ZD3ipu32w84Rs4ZU6vGPB9N696VMDKAfYFBawGwFzM878dZUwFRHPu91NxqAhQ1qbf3cXsLSLXzjMMn3m",
  "key26": "54CLMb9yu3jbTosqz4T3o7Vw9ZQ6Rwme25Y2Vz2Fg4G9dHmjdhLLSFyxQuXzbg4HGPYpeXLe2D1EwyVjfqihZ4Nx",
  "key27": "3yRsSEfCzuJb2gTnMmQXgEXQBAkdxEfip8TGqBH1jjNu1sGoTcVM7G7EgooCKkvkhMFtrx8wE2MbPEYSPzD4i3dx",
  "key28": "4J79L4P3XgCxranndYTW4fEFxkBSgGwCFYhgyhkoiaBxCPQxe5jxy3HkgWDmCW6enekd1cyogsdsMo3FXHCr6NhM",
  "key29": "4vmUdNo3oQbNNZNsip1JKonyXX85X6M4t1yF7WKQsPRe1JfsR8csbkniJp1L8m1rHBiaetgYNK1H5uGvEwBjTBxD",
  "key30": "27DdybgNYEL7RuLNhF2tMjRsEiVyYC3wsh6twmAMZuxGyeVjXZY8LQyi4d3HnZzbgnyDDcCicP1si3932XE1vR2v",
  "key31": "3XULe6jAD6WmitLqGikBStQXqXyMVFTTkmMvZZTvtbgUvtK93aSnhYZsg7dXuhBCzJ1yEJZGa3vzK16toojeJvfJ",
  "key32": "5ewSgiRbww1BNiGUzbo3B8kyLAyKvj49heJnS5HXjetJUXB7ze3vkZkdfjBSCqwNcMu8iTeRpsZVCZHvC8LidiHk",
  "key33": "2RzjuUHUrBYKK6FdQZocuoLVLSgg1shjkyY2A4kfBX8JpUUvdv2eQbmq9QoyHNAJmNa45d26Eq4DiJA69RgbaHZJ",
  "key34": "3minGy3kxff5E7wxBujnAtsgcrdETXYeUmZ6ECKauq7UANyxYQANLiUgGcyAQprn68XRUeV5StdPAPZb9pb73sDU",
  "key35": "4Vcbm3iHPNPuKg66eohtN5k8UnEGKBnbLxq2DJQJrEHdqsntgSwNZNbdzArANbZa7ojdzbmxxx3Yp2R73yfNDeTN",
  "key36": "2WiUK68g7TnsLTt6sSsGP2pPhn4DnWXYFMcUULJBVLf5o8jubyfCu57MYYpjcLfwxYt5M2Z9UoQjjdzGjZp63QTa",
  "key37": "4odZdktyMKBKDsomiUYTHqLZmHBEj41ZTvDEmprxDM5y2iQjB2UA9pp4CEJmMh75p9LdPJ76sszhKuLt2VNasq3f",
  "key38": "5HyhTSRXkfT316sH2D65vJS5NZ2Af6s7xU3vtFjEKDtgri4KNzzsjUDjmL3BnWnUADszCQGqJ2BGzZKfCFj2bhbv",
  "key39": "3Wc1eCi7xG5KgbYfWuG477jf6eehMxumSgSumTWtue4QfD5RbJACGVxAKvq7RvoVV4GokZNfZ7ccyNPQjjvgqaVU",
  "key40": "4a5DuGXqDnbfRqYx5vjc2HjRGZ5zKhKGj1XzWSCFf3MvFPpkmSMcrLPMxwHYKvs8RnGrM17YxEVCg889ffmKA7SU",
  "key41": "26s9FGpcNvnBaUK73XmfqXXZkGv7fs1gWMFRxM5vsYm5VPdZXuEHMPLZ1dsDcqGRmBngbu4kndCbfyAYprxn3C4Y",
  "key42": "2P4td5R9pFD7ci5W4DvS8LmwVaxBSDwiB9J5vAgrdXxn7WkQGR5899pHSybwfw8XX7RsUg4LWNL5N6o4Muoj6k1B",
  "key43": "2zsb6gkzYqaGasCZQHzZfTjsK7LVyqKdrUazwr27EtKtV92tx5dRgoGgA1Ex51tmf68vNCJo7qyF1FCeKtxVCosZ",
  "key44": "2GqKKGY4Am79fynMQjMivNRyyPu2hEbFpR8vkE3Xjrjco3S7qpYEMTaeAXCJT9FoRNAMPStMAdMGp77BPY3oMeXx",
  "key45": "5BnMQddEPxe8e51u2d5YjsgBjsHfqRXAhpKy2VBibkSTpMwQALGHBRXyPnsQpq69oC7F9Xjb28EoAPd25mMXour2",
  "key46": "2Gc38zruySCHQ6gy36jA5vnrY6jmDCJd8tnZwdgvFjKwtYGCkzQt8AGYpSsczdVr4KGut8r9sNFwNiAC724JH6eU",
  "key47": "4sF5w11tftkREYTHVbs6t7Mo4cDhVUSd9P7UrCFW7afg52TpES7tseb5bAnj7B5t7wfgMrdetkYveNZbB2L3Frfa"
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
