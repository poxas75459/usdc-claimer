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
    "4FMTE6xGPbWtfERVGm1TJSH346Y69rXnzCQjGCc57ndV3QbbVTadDcpRDWWxhGZxboRMGvFNbMweDPm3YXSuohp6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tbknjWaWxmWKmrjJ2isxZsBYNt1HVWsPXQjEtXMX5BwfS9EHM3DLwXEEoW65PkyxrZXKybnT3Cz4Gbc4tqhPRRx",
  "key1": "2TaD3kjRGcr4KVoo4BTRoLZeTKoK8WDLLPbtRmximbV5Uq72qDFUBJQPySAEJDANW5cLuAtn8KpNXia4yD8jbN6D",
  "key2": "5CBkxoUw9rhrfRRBxUgJ7h4oJpssYVFJ3ZwLgbdjsSdJnwPrXJBWqn27QYHZsE8NDXJqr4EdTVB8d6GWLEpw6R58",
  "key3": "2HV6jChJso3GCpKN7UwZxXWtUVUtdmCTV7vX1LNr8gdTZV4ULyvP4fmXcA1bRsJc2T5NsZg888PuKUVNjusLo2m5",
  "key4": "5xqxNy1E1mqoVeENgacdCRjjUQhkEFJCRTCVuM3A7HFoyCFbL2CKXkUSRnLqHFqhfqiu2jbLwG4EezY5pVW86Y7z",
  "key5": "3PQk1XLs7JLCJoEHMBJSNKWSHozrSHzAmGAJHGGVBXowBVQXuyhMBWCexzAnfxKjc33ywaBCwV2wCAphuFnK5UPr",
  "key6": "65aoeeAdW13Lo3h7LE81FPTxLbafTcbL5xiCjosZMmoGiJxnyvjjBM8mRAk1mk54AfWrB2tH5SfgVdHs83gKvGm1",
  "key7": "4vDWVdcN8y386vEWuvnvT98NJFJ2R93BRBz51eWizUaXVHEyLzv4xsChWxMeuGWtc9yn9MHHXSTstGKCy9R4HpZx",
  "key8": "2GzeP6d45rmPCN3abtsRWrGJPhq3AbdWf1Xon7FouFbBMDFZFFeaDs6EbqSED6imineMqZG5jWtYdr3JKyuntBWu",
  "key9": "JhPgkAMM6PYNQL84F8jgX2kif76dqe3dDQeyDE7aVLQWnTaHzwyMTudXfVpBgeDSueLVheXe5WrtHBtXFTHrC5A",
  "key10": "64ufoyzfPwe5m9LKBmA9HxDrrEeqNUJUv66cRYumCWraCkqKZnozPYaRUz7jaaabgZP6bGjiENAN5HGXVV85FD5L",
  "key11": "ezkd13ncr9KpB4PWuQZNK37cNj9h8c33ArLrFVWPo56Wn3FWQbvim3CnKe3aiMWLF23A2q6ZNPBTpCK3SqRreS7",
  "key12": "5qAnkRYsKk6WFXzVYDRFE3uWAaTJkmMofruWaf6c2JrduBm4EgAoQMdVrvHcpcYwVyhraiuPBF44sEBhMjF4wzPR",
  "key13": "4PUw33R1z2XJeW4UF9ET5jLHh6CrYfuoKGd3mL3DCV636JpwSHATdmVguppo3Aw46EwzzNddoncA8nsFWxDKk2qb",
  "key14": "4xck6SRKTfFHV7Ni9tA3usjJL2N2WU7jczgUCQURVaoka6Gg2gTTv5phBww2p8kNT78wp3C3baKQgPgeJLB8F5AG",
  "key15": "67S9EAVGGvahnuDKexygnEavQJhvSR2bxpk42bRTh1vkFqwjrYHnTppQeqSSoj65p1VwjEaXNqtvVDpeQaC197dt",
  "key16": "2UWzg21YkNKRvazYnJEQcGbva23gEVMsWxE8wh68eTiZe4fnHFrdYYyXGRcu6pjScWevigYddzoty9b7SLzrL7Zk",
  "key17": "5tEym3NLieTU7swtoZ44jvQcVmTNu8nXLXPtWd93wLxrDPFNoz3iZUZUVtGPnAv5iRJ9iaoHfVk53V5Nu7Ap3c2w",
  "key18": "62moogbA5oD2crq6j8RsvrgwHjek7nF83waYjEep3afEztsNaenzsXzxEM9M5oayF7JyGxKKo6Diyi3Yo4mFugek",
  "key19": "vrGSuhe27QZYMUYqu1XVabVytkyMzE3Hajqsa2jpVnSRkCY6B4yWxVik84XvPVnro1wjyGr28Rt7Xr3DVA9mUrf",
  "key20": "2EFCtaVpm6tjJyXpWHWNZc6rNGdwFComppwEAcZkgxGSnKUAqZvx9bMwY4JFrpRBKS8DnZStE314bmcM2FMNarTS",
  "key21": "qAa2niacB1CDCbLZcxdRwCsZTNAGu2u5nxZ7nZgyzsfPdEnwbsfbV9MAiGAPAXEkYL6w5xGTDPk7ryZy64V3Ryf",
  "key22": "fjZgGWSAX1ttLbasjCrfNpuKvNUe3L8MvnyJftVHMekwrx5vjoF5wVvhJLUuzmg6ZMbgaMcioc3R8UeavFS7KW9",
  "key23": "2ApRQmCjurhTbJBsf97GAkSZ3NSDAivvxzsA5ygysJraBUYP9Yajmv5UTynx4Jn9uf67FSdgULWmJs9XaBAJvDY1",
  "key24": "5SzDxmXveEzMpFMNweMcsaJiYMYQX2xBGnbnoHQWgUCzea1CBBG7gHdNQ3YucGX9R7m25B5zcveQeCLhSiuuyjPX",
  "key25": "24jMtAmsCfMpWYk9oTzRGanh3aYk5QNZhwrfYRzghwi7PvRi7ChqmeKa4PVEXFAeReSShRphRc4kmR2RKVZsWncY",
  "key26": "2HCkH1ENkLFXvCZtwFo9mbBWLcLmPZMfcKKpfM7hE5rThYZw6AnyswjoGsCLijSP7oN1pBgyMg7KicNUiKEohPLV",
  "key27": "5wRpahdS7qHjAAJV4UXVLa5sS6CR5ByPTFUuKmkWyD164V2wcaWirUguEPMVyP63Hi57mhhmqCEQTJec1CCxPySi",
  "key28": "3VHSPALzbYApvZFu2Vi7taYCKmR9FnsLgA6qZnWZdGCrZQFFr4Esq8wqjYwm9Rdk62ELkA2CBWqspXm4d6BVZJnd",
  "key29": "2SrFXMXjfjV5PUKZdUNT54LQ5nEaoHMMLutqBap5tHgabzEcWxYC6G7Ezzpx5d52VyCHqUUF9r2wakahYLweF7Y5",
  "key30": "fmjetRVoR4Q5DXTPquUDtksDUpBF87UrPj9wXQV2bqhiX1BsvU5d4Xx7gMeMDqGvy4V88Qd3GyGXuHZiJqMQeM4",
  "key31": "ej4bka46bwF9TBPKzpovGqeCHAARE2xCPM6FL9CwLFY5mG5Prm9P8CjjsHMZ45tYmDSqiXFpXuninbfE5BiDQaf",
  "key32": "r9diUQTzeBALNtsStRD4frhVt6FDm7VmeeWSY9E4xHAcLmRf7yEVw2MdRZdoiEGJQzjVwdWoDemkdPhKf7VeSz1",
  "key33": "4guWXMc58MhS9tt5Ad8DNryRrHDbSzgf8qmxghuy5AeNo7ZFQzHEsTcr3pjYfu16zvwiNpPgGic9ULaCpNo9G8TB",
  "key34": "4Wi2ux9xH9FrPwy6GvYgwXDArCovoPUsM14kWnTeRGL7VeQxgmJBLezu8R5xCcvVai7nakoL2d4DWxjqR5bYaK6z",
  "key35": "omiySpSouqrABcrbZ3Ufe58hWSfkG8CcFddQ5uUVndhkmaeY6yx2yEbbqwjg9eswJRb2K4sw6VaqCmSnL4vP9H3",
  "key36": "2xwga8jDK31eBtu7W4EGuqF34uCfJ1WDbhza5BukgrgQcvSgtjmJdmVKRRQ98rWd1wiwG6Gre855qFGF4vwGH3xe",
  "key37": "5vqupQKEP3Yf5jLdvHyQrhz6vhhjegsM1AfD9cKk1WDTc2wMWxxnerXucFCKUkGqUG8D2qh41mNywbps2iLpav3r"
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
