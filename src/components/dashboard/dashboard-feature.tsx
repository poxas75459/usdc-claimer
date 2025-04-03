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
    "V5X6Bp3bpc1vAtWHUS1JibmjgFr4Vs9bo1H5cVPWLxYmnT1QF4zsG2j42NycV79NC4WCfp1K4xdm2G31QcsttmY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49pn297PB9kugjXUrTZFWkc7E9hEiULadg4xspoVVKnQY9w2nBsy8F7x3crLNZuVH54jivSX3TRapnoGMoTXB2iz",
  "key1": "2UWFQZ1V1mfHHUNA2Bm3wfXxnWQT7NEmoA21nycM3ATUM4XmkHBNZ8bEqvxoodFQLJpRxuJ5yKKYtKvuVYgazYdN",
  "key2": "5JC2o7JJjoQA4Se1W1Rukke6StrZVX81Ujw6J1hRnzPwSUMCESzwstwRwFp3V2RuT87Bwad13jounavZLdszZ583",
  "key3": "3gLfJGKyWfbyzRPmJBorRUxWTLKJrpERu1xCt7T8kD4RwgEXjF3hksoq4myESsfMYCA6TvV1BPk1pzhccL8Y5yCo",
  "key4": "62BWuRTtck3dfgtuuTCnuKz8BUDEbhL1X4WpSWfKzqg1qVUpjpAWc1DhK19f4YKLrAhwddaNLbiYZ5E31ZCtwRc2",
  "key5": "5BfpgQ6TxFhV6fGN7ccWSzLiYuzJ5TuZsnVNgb9v66nKVWE8tXi8eibxrNK8MQ7E4w3A33NCwqyzaKCFnZB5kphf",
  "key6": "4eknaSLxu35wd1JzvXkgmAYpU3CN9y5hFyk34ieZNf8L3ihHfVxT5WAhgBoVZfbnZYygNPHWAGcFsCPt1PaFB8A6",
  "key7": "3cVjd5npAfPW44jf5boQPY4kFvPubpVSALH6i4aDPfU3XK6qF25jA1z9HeirY18LtSFMVGLZ1HG8StA2m5NfzTwh",
  "key8": "2cTjcEvj182vM9BevFxxvbvPLhGn5Zyf9u7L8FRTJx7UUYNKoJMoktHTUyptaWZs2m3XhfTuZG15XHKdWcLYzVgf",
  "key9": "2Vq1hxCSMDh1rZs58kYqYu8n1RvKMDnmDpwXUjccojBMrU8YPnj83BhGiMraHmqQUvTu9neBPmcFmFFqBrZcpWGq",
  "key10": "3iiHXmZtvbSU75EppNPboaaspfCQXPDX8xymmjB1ytmbUauDLRxhwKjAPxQq7CsqfzicJg9brEz1jcGuzsGiVx9d",
  "key11": "56ZnBTfbLKfgVFwjwcrHKz2PRRnwxavgLHh9HCQNm2mBZBRRPZwH6D4GrDoqay7wHQ36FWDiFZiezuXzdGXP8aFF",
  "key12": "3wxtrkzWg1BQGR6wNSoM1bsjqmq86NtCx65P5T6Gk422UuhXqdpATF1dbBWnberH9LWTb9mjvMcpRResv9aPg4HT",
  "key13": "5FFfsMSpExy1qLEyatZaq3hzM2k5gZttnk2s9ZyDXXYKFVUVyDNSbwdx6268CnDpdQsUuDiSVa6uYnP6w5wo7WuM",
  "key14": "2skFUhy1C6J6EAoUrBTb2J4NGQDQwRh8bqWHQiUEnGkEVNoDkDzxonmhPjiP97K9YHK3HBf28QX9x8DMiQHLuJAG",
  "key15": "49mpAsaTWSpLFpfgprhrRTnB6SnNoMviEpAdrwLu7FCpmNKBH7GuUjYiFHLsghFUnmUabFLPS6z9SEhiwfiZmeos",
  "key16": "jDAzLcYppK5a2yUjhUbStSy75x7JgudFf73GURqZwUzG1e7LsEVGzjx3C3aS7KaR4ygRW7BEmBnEUTqXNnkHoN8",
  "key17": "2asHHbgmqhm9jFkHdWW1L1BxSVjDHWc8BnvwLtnketzcMqa34mZJHDncFKEKSSaQ8y1LTMZ1YY3XDC9CMWsTg2jr",
  "key18": "2fRuKcWjS1oMFdxwDacDnx4xDkdYKFjyqyjtXiHTWfZrtFn25XjBkvxsVMmgoeyLHo6WVrVXkUgRWcfkSk2GWoZM",
  "key19": "3gpHvn1RWZy7dm1FM9j7wUkc7rvVsT16AY2W1w6FffPQLir3VYRjiX48LgRhDJELdcgmYQXif8pZ5AVQ6ccMR8cz",
  "key20": "Nre72nnL1D5Crn3UVH7ppJaUHhUQmC9cZR828qGxXNgJctV9Ub4nejGUWFgxTSvdBtMiaaLieiRnWd6gn2DT1JU",
  "key21": "4Tb4m2iMTRejznmtKn5BbPEfCP4qeLMPCxtozZm7x1HfV5pNcW3izrVoPGgC81J1D9K5rJ1KFVUTZcFRo78ez7gx",
  "key22": "5UNLBx6Nx4Hugvwc2bcfn61jVxZ9JvhLVaB2GqdYktLFRyvDiUXncGoMpM1w31ss6HW5WUQgabD12mqxce1jr8av",
  "key23": "23NaUKTwGeh5eoKNRwS1A24NJ3NUrSqBhG2krLBZqhud2HxYiWuKtjXERJmnradZuHaSavVu2qvkwp4g1bRmjaq5",
  "key24": "5YrmTRgxnhwap6nMrVP8Cn6DCwiSMwMvbvk5EbTKgrnXwYACGSmFLdiPjTcUfyPvgfxrsVBawzM3DAR9Ji6fZaGo",
  "key25": "5GJVg5yygJy8pbuvH9aUMHwhweh8mmL7f9VQC4VR4YLsoz3DU2EDiFhCpi73RVTWmHZ7FBnqca5GUd9pbWirtCYV",
  "key26": "35nCXuGpN24i2zb78dmbqyo6A4dmyAmG6JpqN6Fib6SJaSubKVwStsnRiHWbQTTCUNEQ371whEkH3SWEQXVEdGQ5",
  "key27": "nkRWR5SdjkiSFDnJcfAjPx4pbNQJY84iBDqf2AWENEV8bVyFAoqF4PHVbT8hWnqJmRdn4imkNSU5z4GZxi1hper",
  "key28": "5Ze9XRJRHZLMdYnBoYkCymaMZUjMuYvZofU7GUeyJPPjG29h1HA2YQGcb1edYsLmhiqgbxoAeVB4f36VrniMs4X",
  "key29": "3xcNcSmWMEZVnB2Q4pzNoV3xQNzWjh37U4e4ht1D54dxdF9AneNLEEzmgxHksyY9ZaC7D7P3y37VfbzVJ9hnuYqm",
  "key30": "yPiBsmRFHgnuMRGfoHq1tC8WJQ4Lrf4tcaY7uBYFWHGpMUEC12ppxvE5bcMpNDtiMZyKwymDkMdX9sKkMKS8vhv",
  "key31": "3S2mpYgA3sr3nVriPFFfg2LpvR8zruKgz6PD8tvtZmZr3MeYbgpFuaFagZxZdyshQWGxkkLC5bQ2s8hiGNak2Paa",
  "key32": "XuqkEzcDXtqiX6NRybkWS2LZLxHgLcN2RhwkkXRtNecz8QaeVL3V81yXYE61zvajxfEjsxbqEoEeYtFt6KqMSU2",
  "key33": "3Sr8kaVQPJJebyFh45JCup7BzZc4sXve5H4YP94T6TAqp4RofsYMd3UeKuoLTBxqVa2NK5uj4QQjTNn19dXi4Zef",
  "key34": "2SwYEegsft6LpjovWgZpMyHWNACyTpLNrrdtxpfwLcr5Khza3MYwwEc9UDkXPtwgJDosHTkDDTXRgNFhYW55PqJn",
  "key35": "2F2Uf3nPZsU77E8Xf2Cb3cpX9UAEbPuDQnv5iRaDij3JHavzrVrvRiVtAFm25HwXBFxBGyaQJEGJPBvdpTAe2gTc",
  "key36": "5UsLqSR729j6p9HANoG8yQpjQCcmhtAsHF7eE2oZTChuxzZu9EWygV7kGLf9Uua4dFfW5V1tMiJ2bZ7YrshA8xBk",
  "key37": "3qNW29ZL5cV2ZtbeTkvL9Ww2PouFnRkYVUmxo6Ay1JpkrPF3Y6JhhC3VazAb2EuJFQZLDwP9Hn7CyZwK3hx9TqYn",
  "key38": "3DkVLqd8AmjMQTJEKfZrgC3ZDMfyrBT84ntRdJoBWXpS4JJqqNsiyUgkVvXvce66xp3vRTWUCkJdL9FpJpp2UdaC",
  "key39": "3BV16ZMdExp74DUxJnVKqmcRV4NqLu73DfDTcRSQaKwmzvPG1dq59uqcmN7UGtCQ38yRRqyE2K9AoGtxPP3Yi9Kc",
  "key40": "4EYtE8j52FLoDmDUM2GLAMBSLKhzd5CbJhaQop39KRehF8DDjmzZMoNiY9H8P2YEYBwcV7E8SHrLUqrctwsVzacA",
  "key41": "4TBrsovdyLat14UJgpbP8m9DtMDE5enCWWNfkSPcGZuNv2j3bScCRmoa7CejVpH69iTLwyjd4yz8PWbAbodEnTtd",
  "key42": "j4Zs7H4nodACdXf5JQvX8QWWhpjx3xQ8BbnJr6pYFA2p3ASf9BwpuPsHpmVvbAMd7t89vux3WZALk4eqDgkptgA",
  "key43": "5kk6Dw57Xcibnn7SgtVpyFzzTo5yZPaEAuYGyykcmvT3D9sqv2usMsEwjbmf31Dcmsp6mgFsyMePeMEF6nrczJk2",
  "key44": "cRU4RR74hsQtd7ahNCwa9HfSX19KtzWBnPqY9eozk4aBFGtbNXbT5xbYtwK3bKNXqVAwq97eqaoxr9ytYammUpv",
  "key45": "5C4HjAjUKrtUiAjzP2683apbJ2JCPT5mtFgPU25Dpp7LrnBAnYG53Ta22kqv3weecsnN6UAGpPhavnSaQFe2dvhd",
  "key46": "3BVRo1hFXZ41Hcu21YpfVuVw87yenFFTSd14sUworXM4AEf5tHnrX3TfQu3ASbGZit4AGvcLmKC4QBrrhemYtQvu"
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
