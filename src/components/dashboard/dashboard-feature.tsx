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
    "2MNgEwVyA1fagRWu8pgvaDVaZNjpdnb26xjGokWwrK2R2yxAYFQGTWN2urMSheCKLGTVo2mX24oSkY6LBEuB499B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55zYkBecYpajNsNVX29GP9USUNgD1KKnfHpTdgMAcMhDLjFu45yNV58KkD2kZcd59xbD5SMfMTzhns5kJR8MqQkX",
  "key1": "34RNiTN9mUFgA6VDsYnG2We7askR1ybRML1ZuDtatGg9dQYH5946g7UdB3ZCBgfM1axqh7ebp7Hqr9Jespy61vmv",
  "key2": "4sooCpahY36tv9Scs8EBoUqsDULz2kPHDhAPv5fcrQZDE75i9cRjbkPZRGAaygzc3gDER5aA7rSMafrqsLyh7VMQ",
  "key3": "5rL973tMe6DmcjxTYYR2PKq6W6b1S1VAcGudxpMqBivCXGBCHp2P7MRcpHfVhfT57reeBBBZJCLZJAnjKZq9f3gs",
  "key4": "dkW9QanifnvGUMGn4WY15D2hHjysFotK4EPwEZHaiU1CshUC4K4TVwDvKiE4wqq769xfGYexftSsLcuesSREFAd",
  "key5": "32fyc7pkZ8jpcHNCsFGeB1W3EDDvuD4UVd3k3kbiRH1ftGDTYUcpvNSUhSpk5kVXFVRpunKXAbUL48zcEc7EaxJ5",
  "key6": "4NrGCC6ddKFSXJ6N2t4GJ1QjadXLXk2armNXEEwfasH376m528keo9S6GypBE8JZqBc1m96PnczgW1RffRdEaVS7",
  "key7": "63kPhD9tCsdcYyQpwUMJNeHQFAehCnaujoPxd46sa35D1FHRW6iv576fouQqmjG5EmxAvKZRcT4YU4CH154Uy2ic",
  "key8": "2LkpVtGrggbgPhFAGTRDTkBz63HeS2fu5wJhYKQqzeXX4Nv9SNFaTAdK29VT5LTSsRmFAJE5bA15PWDqEgPere7",
  "key9": "4JWQcDcDXkwVAmJZ3sjHNpNaARMf73n1TK2ydDNpB24R1Rfa4Wroww4xH1HMcNGGW33dRQkCrDEiQiuiZMW1Uvt8",
  "key10": "2fT66r27Tzd8WnRPjXC44hhVqqwtVgXbtvCHMuZ4GxziFDvyLbHuCMmPh7wYwZt1Ewi5UyL6HsLyuWELCaiDp3MA",
  "key11": "2k43Q6qAvuVMBzmjCG1rJanbHtVBhTWrL6KM8ELWztMss5iNeMrpxgJiQuqybWzsGsDvahaoyxJKHNh1a7FFtGuZ",
  "key12": "4x3eCzvWZUM5U7jQYFCDoUE2HpfzbZeL1SUA222WS37UDHLQBXcwV9WMJymCmuDDXAHP2bZQf2VARzVuxbuADDM3",
  "key13": "3vn3KjC5TNh85h1tkauLvtQ8ZtndizfbDEDHAMWZE5gZ94x6cYmMxdbXZt85bsHQwgRvRgbpJJHUpb3cCsk5uq5u",
  "key14": "5PvAy8Ln71Mv8zfQzuC3gEogcBCBw3KZQnr1F7VbxLTLaLzHoTsgVTfw96tTtJVHjxX6Jvyy9TPaWYbPxCxh44h4",
  "key15": "4MQX8sYaYU9VBPn8wDDzspnHVxvZVNHzXCB4srwqZStzpg4eEHvEYygumAJ3YhTf5o53chHNC3CZZbF22Xpv4uHF",
  "key16": "nc53AHSJ4QDRT3sUfSbJXcJEZe8XjMqFnzMFrJYJd1EEgeSFzyb6trcPc5xDjT5BtPJv6rie9qnF5MPSQRPyK99",
  "key17": "2ydsL1E9mBtKeG3cYAXWADQsD2im2tndAfTeoZoGAiZ91UJL6EnH79r8HnXSenPNAL4hyW4hyjCRP2P2QczTJYuT",
  "key18": "419ovaxApP5jdy85Y1ChS94T24SYQaJWLPioH2e8aM5R5EPXWnL1SvWkZ3mgNdTGMMayXuYWKAp9u87sG5yAcAXE",
  "key19": "5SFp2iW9UY4e9x3uShmJcD27UANqZMmXukSEeqyQtrvHZ86p16XUvYBEbhCEnf2JQTEG5xcY8XNbWHWCJusmwgnf",
  "key20": "3q6J7GEaBxaBRnzfu9uJDbMAsemSRxPjRxXFHzEighQnD2VibBscDEXBYJ68qCsE4UMB8vj1532cprvWvzin3xpg",
  "key21": "3cdi4vBLRiQsqmNMgmWc7YQN6d7G93n4wKgMaBuyToJXCrLoVushE2gY31AjZEsSZTidDnmxQYo8aYTcg3cHFBtG",
  "key22": "5wkSFa9VjZVNgG2rke2KryvLh3YARCb54JKfA7RtvgPuRP8GnLDMTjJ9RujRWYdpFWCYP2cNGPUSskcJSfFbc5eW",
  "key23": "3QuPZjny4bXUESJdnYzk1zHWa3LC4nnnCqGCoJptpi76iQ9iBKvoR7Z97CMD1h4we44jbUdJERfDCnmEtAVg8Uxw",
  "key24": "2Qr64KWSaNLYAqQmt4YQQcvTrQKPAxG6nY9acwirHhbjZzgQVim81qqSQHKiWixnQBTTPbRWmB8859uV4DHoRnQ3",
  "key25": "3BrpckxsySFYNs3SnsrANURpzWAZvCL7ro6uJ9YRi1f8h11bGN3sSX8ngFZdZpjktquoiZfobzVx9eLqa2DMNZSR",
  "key26": "58viEDEdohpDj4vYt3djinRscBpBZtMNvf9ydxnxKzYnd3qTjYg3oY1V3A6TCPdBoGzQgRGHc9gfdbFxVrDET552",
  "key27": "5AVscDD5YyrWMSgAnhurbAGpEic2XGzRQFQW1wPEALzrKWnWzpawTy6rr5mX8iHa9a9L8WeJfFzUo36AemDNazpB",
  "key28": "4qzQFEZtRrtZDEKkoXiZFR6KBUnezprZsz42VTuWmtyGTSxTqgxvkh2kn6VacXTfRxPmVe1iseNbta7A37dpXsBL",
  "key29": "4oPSrMn8fg7nE9hAHcjQzNgBmCXZCtb13BfS5dqheKfLrGWq7sEWhgGPu6Dbg5w7Hqfy4pcCRQYY2Sz6VRX4T92n",
  "key30": "3k6kbSyz4f3SEBffjZnQdX5ef5RQsyvxPBwwHxycS3786NERX7tAhUYzXj7DWtVnZ2a4XrYZzggWfwMriNVv8r6R",
  "key31": "28UZoYro7c6mtZdnT1TTsnz46SqacTe7TaDdhWLu8XdQChiuimqf8ZgYRttqV6wfb9BXfNioSggiW7T29QuMFpXK",
  "key32": "2tcEWS9zgJFuvCaKr532YTN9wmiA7s7FnDHrQr6Gjm1ddMtAChs4pG4ewH5kjr8N6nhuVdfUHab3kC1bYWToECx6",
  "key33": "5dsvuzVqPfJNJczKFvfSe4MZaLz6j7uhbpMNYyZqqG8LaVaAxjGPQXyyC2YGJJKTEwENqU7iqgFqkKVi2THxqypg",
  "key34": "c1wkDXGqcNbdKDZtYbGTop91pxozvg7xWKCsc69DniYaAS1z1Zoa81uMhpSpVWFHuoFVpRnPc2Fn6DTpcLMrj1F",
  "key35": "4QYEJBhLjecaD7imDe7h6HM7esVg3Ke9ZPxv4zCnxHFqsc3abv1h9vzXDa3CVbPz8X3PAH2oiNTbzzXiN74bS4sr",
  "key36": "3P2VycjTPsAYHtzTHmnVjyCDYGciBF2UbfAnBMffYyLmT2aT7S3cAGzX3aWM9QQRFF2uHdhBbKn4qntaBNekuygC",
  "key37": "4sh1sPw1Wp4Hsed4wDNSE4fh1z1juWz9z1Y67wjTzxqdJpCYP7kJNxTw5TcAgp3FqRDfVpoqnNBSKcGA7Eu1yNBY",
  "key38": "5Db1M1bkbevGMECp4yjxnJhgyE8DaR8YjUU3W2xXW5H3UGtWTsyUoZubpSkyQZJemiZFUy6apDn1ZaZWtfhCpFeA",
  "key39": "3trLorpAzWCq7CF7TA5XxH6bxkcZXr6dmWNavECZcZjbSfoYFNyjoubb9DWWmKiLDXnFaDVf4odVnJaA81dwHLwX",
  "key40": "Z2UaPS3HZaJv2MrRRUGxGbvx5XoBTWpQs9yvfLE5vyZwGh4dn28NA36uTUL4QRUhKZqAP2eETztsDnXKNpf8nQh",
  "key41": "3WYcSc4iKsWibYTvLcNwbFibGr6wcS6jGJ9AuNdiEzyusTXwQzzCYDU9N5xFigSsZ6VKodvRYh22tC7jeCD42NDW",
  "key42": "2zNVzrekJRHz6EnD8zd4apmgJz9dFQyDxZXpxUBmeeLowbiHe4ADZSDL9pt26CzXdCx5tmkLizThfcfdtj8eXzPK",
  "key43": "4Yq76a2ag6N1VoYYi8hUzwQSj9UuTDiskKfa34ZDFwr9BMRYs2kWiZSxU76ASWzeojTFrois9UeZ4ReCns4NMKVi",
  "key44": "3bvzXh3GMAAygugE28XahuBvGEkGqPiddsqqSLYpbfgKxxh2VqZBQ24jReea8U1EUUrX8z88qTUeTvjmR64BsRRM"
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
