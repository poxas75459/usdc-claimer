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
    "2Yd7aPATVUrDTVUDZHKC895pSvEapaTRLZWfRRdHUBqm1eS1HdSXCFijNLQ79CuTseUtmd1egxnr1kdVSKRcoxQd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6ffCKV8ze4dFxePepamMfStDT1pMxSswKryaJ7CBceUhw2EC9jXDNcexoepiuikhGsobEMaK9wqhQki8rqB5Vgw",
  "key1": "3vWKVEm6Y9Hd2AAn6hBEQtmXrEKo3vc7jSnLrudzcjc527FYCGL4JGpfTH74mb31n9eHU1aMbatR5TuT7cDsQaFV",
  "key2": "LnJb2uQ8Ag7VbyFEuvsvszfdfPc5Ex3PB3WdXY214nVPdukRPxxsbNrHr6CEe5Yj4GVRihE7z4aFkqpyF5EKjz1",
  "key3": "3yTQvv1ySHRCACdbZCxf43Tk3N2E1M9ymjsHF6QXyKVqcbk8T6BCJezsyDu4NKg4DrJwpKy1HQhpF2jWLpeWZSNF",
  "key4": "668kPQYQdof7vmFZiUN4gQxZjQo4FWK2xjH7uBbPxrvSi8nHxXFwq5vxETeHQHrykf51qNpDSxEs38RFx66jtjAV",
  "key5": "xDr2sP7x95Byq28xFTXtT9nCL1kXq1xwj24RWpRRtNM4Cs6BbohDa8tj1AVmp7SJGTwa1NWPvQrciCpRV8UDR38",
  "key6": "4UkqKvrghHPYEbLFDEostprY8ApXgVhrV97AEz5aiEsqUeq4y4vFPSwLQTS8FZ2krynRkkG7W32SdppPxoCNArhy",
  "key7": "5SoTGjYaWitSrgDMmmfW4MLb2Rcbd6YtTZE8cdds6BuEXG2ctEC2t2LQU81Ys2H1AUqzNpCJXUy3oE9Ys2fb1jAG",
  "key8": "5fEe5wevtyyEmmdD3iVNFtD6hHKjwRj4PbTF3fomMPHWTBkpgJ6Xgk1KLcwfJ8snTefbV8ajDBKKruTizhgoRTHE",
  "key9": "2W7ReRJRWwLXvJomwgfieCQEPVDeCZ6uTJXmgiTuMYae1AsKqgVyxeZwuWNhE9J9GNbp1S9XupWSHAK4msET3eWT",
  "key10": "2HhKDrrFc4h82jcyE6Ff6vswpakXHfqbsJH9PqMQ8JWNd5hjW7ms86LGjDpa4NSujkr2Eoy6du7z67wscAgSgsNS",
  "key11": "3nkazhC8asocvYofRcF3HkYYjwngaANrJ1TTLz6r9cSEHeWsQQfC9jWUub9kRB4aa9hEcQDGk2QHvmZ1DfZNtbke",
  "key12": "2pAfdRn6DZ7WwDd4AP2dY8iBa2LinwWmDPsiBMybEVKfwzLbEDBzgiL1zpgCQd16yButY5GW33ooQjqCq3Cu4hkT",
  "key13": "5bjTNHxtY4ikqYJLoGuJxJ5guYaACfxWY8qpzhhyQUGpLYzo94zFRgMc4Z8rpmQUENFwTRpXQPuYD4Wp78ppqKKg",
  "key14": "2ya3tV8yU3agjuh6ZUZQfkL5CVu1qreLwcrJbgiDV1tZA3m5qYn1y5wdQ9RppbQJ3u3JyKREitFkhS76gd1wc7Dg",
  "key15": "67ZyDUkvFgcdvDxSf4gRAF1mfa12Q5DU7nJcF3q13eHNWunGjPrwJRYajgBbmj3yWuuwfndynRFMhum6MEUFS3GW",
  "key16": "2adYDp3Qok6shLiMdb7kCsMgrHN2q29UgnUpTvTBgiahmz5ZyBUnjPQaeYLcUDhW6NSMmrigmNVuVGyGutYNfNg2",
  "key17": "2hQPrPoi6uGREQw9CaPKbHYF6dtLUPx2h6mdw4yWTqqPZPEWeRgZv7Y9J19YyiG27GrmusLU95Va4YRtbKassNUE",
  "key18": "2KSrH2P6kYfSpqngt6hrPNa9FWfEA7xjKSsrxvcj5JDiPPiRdxpzuqku25qWW7KCpcp9XtAyzYDKn8iQ32dhNj3M",
  "key19": "4hLM7cdT8tdRjGBKFxJoeYRVvjisUBC9HkUJwujvUYaLTbCkdoyX8boFM91Faac2oxksVDqWjMz1Xxq37g1unADH",
  "key20": "2PzsgKrVJkghXCiMC8Uajv8sX6a32bBmG1TVYVjBzrEjhrWV5PPKDVHnxZJUfJEGe18LjXgzakwHyno7m3Cgm8GN",
  "key21": "5UALKkKnY3URNtpJeSB87qWViKZGggTJA6sfYzdf3sUWu9B4T17t23EXuKNeqzHdSPBJLTfnbb9Wr4foXaPCbPS1",
  "key22": "4sio6o4kA3JcPFG5XTXH4PuCk27MwGW8MxiFgKxffmU4qi5hnT77ykYreHqCcnSVk4wFj3q4oxdFMEXiF8jbZ975",
  "key23": "52SkkJkMJn7ypGntkD6h5sq9Y7NWCT7GYrL4WNPQXvxqWWqzbERQhYkMGbcS3ksULrjJoa1N6RWvEWws2wekMzJR",
  "key24": "42jrPqpK6VZ6SNAvdbCEgUoKu9gVEzEptVdibPnaB7FxhY3mkrDPWy1D9dkeJENccCSFjX4KQwgFqmeh9uPHZ9zY",
  "key25": "4Nhb9mePRMoxEg1C1W8JuJjyM9Cb4oNmFPQqE8Dex6cpbf8A2Kbxjb9FhBA1GBbtRzVx6crmyz64paU3a745iWr",
  "key26": "1WLAAz3xs4sV38XzP24SgHPXHrrk8GSRZgXNzssuyprwyHbf5yRVHgzmKXhKX6kMR8yX9jQSyHQRTciF5pfG53A",
  "key27": "2CrvpD31jjScFKgu8naVUhvdvs5PSmuMxepdcRQSJhBqxie96qknkk85CgAZX2gCKgZW68HaToKfKn4SB8ks5wd8",
  "key28": "3pPfkd7y2Z3ajLofei11trpLiVoUqQeixRiF1EywWUWo2uLGaRVQdAiQayZeYWHQjEbYhdv57nBqj7VWDRHE7Geo",
  "key29": "3HAbi1nDqzdfdsUwr1K9G29vcWSfivrMKDTMXD45ijhfLchUVDwkR7u2Zgbexpo31pZ38YijQUEueWQg8Xy4S4AK",
  "key30": "3Cyyawo4nD4GrtUNWwBFT8HQem8REZnPqo6gRC7L345xonNjcYmt8N8fREEx2Aj6ZN5WC7mmCGCqCKrFPkC1zaG2",
  "key31": "3qBkb8s33KgvXBPd7oXKKNjSqCjyYJpsVKhamCHzR7JXkYMzdq5RFCEzAipJNdvb3wg3BWtCovcTtA8kKXbYSftt",
  "key32": "4L1ksZWTR9KjD4d6ZaU9GGJJMzRYnZThMBNcHm7PHiizmoMFZL8VuJbLTWTeB51vWSZcnRKVSf5e4hRLSDE97AdG",
  "key33": "2CJ2uPz5QsSKQdqBqGJnQRScM8eULU1X2uwT1wNkffzW3gm35xonYg6dExQ3PHGUdJ9JgH2mGxfUjuE1BsBLRuM4",
  "key34": "2pW83mQkGsX6TXGsqC9mxyeZbaEGsAinYZNQNRRLysU6jhq67SaBDrLE8ypMK37hh7A8qHkoRmDT2Rnvk43c6tQQ",
  "key35": "5jdHp4yeqnHJsVqpbxZdvV7f7zR6Tc72WWHrEMdVgeyiuyQZMX7Qpn1RKw5JR5J2WyDJeY532rQ9aSBcceAa48N",
  "key36": "3gRWuozGa8qiyoh3aEApDDdwwcGoSzVU642iUzjabqUxdyLYPWdJ5b6XUT44s23N3U8dEQHBZAsKBxu9iCZnRQn2",
  "key37": "PQFXZCSViboi22PcVi6fBFHfX5JZwN61LbePvNnBktqBN7vR38jdF18Vn8xRAr6HkYk8iS4ouQNWYZeM92ASGL1",
  "key38": "5sm9aZ4DbAhmDodBi4FS2tQiyeXWtihiQhKrik3XKfjAn6PucwoBvArPurnao8UgprQVbcF9tpfNKgtKvmURhkwk",
  "key39": "3Zavvn5XNEYbYiqfBz75uCEtni7rEB1AFqB2y6VvfGdbLCCbz7hpH8A6htZXpkzAtKEk1QiJBj1pegkiWjC8XQj8",
  "key40": "3XKhvuFLYbfcgTzucqYzFMHLv1pUg1FAxboaXKabDr1uDgCxQ5hQyJ6rvM2JJqzgdPiWqgrcmk4BfriFduf28e9u",
  "key41": "2sYTYiWwgLYMeSkbbq5zhikzinS2emZUFSNV6VGaEY3Ld6xx62AreQRmy79L51GrLtgLf4BdvGWGCxcB93Thqo5q",
  "key42": "by4AmfsfDrdQT9ykJigGuRJNmSV65sHaAqpDNJnaJ89KcNzGSjgmS3phRfJBiYPsfGjhX6Mb5UQwLrPBktDQjsm",
  "key43": "CZyvkig8UCwa6LM2g2nxoCLZPT2ZevPJvYtCdtFTDvQhGVBDsqveiVuMsbro2paDMCaoYmzRnthisfq75CrGwgY",
  "key44": "5W32Ni3ggnt8q79XXbegfBCxoYfSgLFbhYKgqmfGQb4cNRVLbwurrw7wzooDusrNun44vKuTf6TSEkbGFdDz75Pw",
  "key45": "3MgbgQEr1Sfn3LS1Ms9JweL5PG6A8TQJnyQV3YSndGxNZ5Sk7fDACX8rqezVMJxyVexRw9SxxaDfbiaR6AtoA9Te",
  "key46": "9h6Pu1561NDgxsuYs3DY31MyNGmNfNzGoU1krFVdv4dQKMJdx2jm8H6JZj27r5RRPaaDNKt3ycGC1EmKYrurLd1"
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
