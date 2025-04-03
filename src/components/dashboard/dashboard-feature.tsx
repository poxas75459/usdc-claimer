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
    "4kZcB3hmZTcLndpxsTL1nysaE5LrWAGQPjEvvZKSsN8BfsJbdRgWhzgJPSPuv97MFsibegj4aQr5FyTGBicBtJSX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pfZt5VQ72bUyf8dKTdou25Dz8wEFdc4fkBCW7dPqptK8TwFSWDMsjiRxLDLBLaEEXe5bwk6SM3mBPwqTfy3UMMu",
  "key1": "4G4mbjwwCxsojEpdJUaWeA4NgDnX9ib6ATBkiVzJFt3m84Gbk27SnR8CgMuNyHJqk5VGA9yahRbPw8fW2dMrWbxy",
  "key2": "4w5gsY22EsDDwvgDmnjYj1aqus3erCsBPcLNVndjazob6eTcioHZh1bayAR3HcaD5rUtrW2UBYmddgC56oG6qi7R",
  "key3": "4cSqxLPRUq9o2sdqnLU7YAHdMEWnLpkr57Nnp6HUxg39hKDU97BLH3xfHsXBfqYYqrVsPB7vRbF38LrNTJpnU1YX",
  "key4": "56FvjYJjCVN1L3GwpFXaGQb7Kfdo34oKbwpnWpFT12ysWxxGE4Z93ysZS98iHizbnANFNyeWgppDAobh2dyHN9ZU",
  "key5": "yL8UPkeLniQcYcJG4EJaqjGDhm6uuQwEqDWVHo7UrWLefXKyWNRnzV786FVK5P29KCVu9wQbuQAdrgFLEFgNkkH",
  "key6": "nYXF1AXZAfXEzXkNVT5izCJ4WUd2fpobWSxJbWcz1eEG1GvV9w1Ven4qHtE62RhVycSgZHSf9qCAvYK5HWzgWyM",
  "key7": "2bWXN8q8TH3yFwFJ9BJq1UKwWm8GU6iDqwavthWaVohvRXz2w8xbuPukebkTkLDieP68VQYfej9PShUv8YqkXoDG",
  "key8": "4pUf3kZVJ9eqcApGFLJgDJCBR7uSD14w4NxLG42K9Ef1hvTSStpipGTyaAp5D8o9tXh6mSZtAFAPndKWPAGypV6H",
  "key9": "5BNeJJ1ABUq3tyWi5b3VHXzQU9ShwaSTrLEmUDhTGwqXdEq8hHdPanC33MKtyxqMj7qyPSnouULExCebichQEGRd",
  "key10": "4zfvEb3NBZaZEZXdGWWpkyHbtRf6dd17S87ZMzLW55AuwJzHaX4udmTJ48MpWk6vhNnUktudNGuD97zK8FcRJXX7",
  "key11": "4hrkQm7wShcooE7Toexi9udrsHBTgAj2hDxAVuaJtvJCDcziKpNkau1krcCXYiWCTPk6ovFi656DzmSyK631vGg3",
  "key12": "42qRRPX3EiQktvyVG3wfAajaj6sctoUsiAEhrSkq9ATxZHDp6GkiDSxTniXWprw8WPGfq3KAYfuAUf11NpAsZRAv",
  "key13": "3pvNzQXRFNFAvbDo2eguLa12K8dmtngaGKaYBgWFLnmMCQBvD8WWKV7385K1nLy59tXRaKpMtG4t14fCcVLcSoPC",
  "key14": "yZXjW7AdSMumg93Qrq4BQvQjaFADrpgqrTxZztVxKkg1mUeXc9JcnEh9hd6DML1BJZxn353xdTcj5E4gsquVrGu",
  "key15": "4ft2gzktgXw9vrKSjcDLMtB4Zm2HUioRS5cXbEc7UiCcNbFtn6HttZrpNargTeMdKubLMHDnHXBFmNNJ9t2TKKhz",
  "key16": "227cLcpcxyviqu93Y78VNqEoMcm5648pJSyXCEUBb1jueuwujQsXJsh9PzcQN5b7WSTwNHSpqaQDRnbdKcpT3asX",
  "key17": "c5b62vfzHtNf9kQBN9S4z79Pg28sjxaeQyBSHUUzTCE28QTv4hT7w7LL96kDszm1zFAg7YdzZFH9rv9XdKztsfa",
  "key18": "41obPPxspbocsFRwqHLveXBfztm2APgS5CKZVKtNfEprxnC8BD3VQL5mD9WGZ6btVGtkDz9aDNmtyGhrT6UeZPQ4",
  "key19": "QrT6FJ2W2uCHUc18Zoy1SqRWXDzuwTqHuYVRga5dthrMfWBH9GerTRBy34KESrned912BJK3YzYWzMxu4B1uQ8X",
  "key20": "27wigfSAnhfU4NUuFwWi6QQ8KXHS3mRzCggaU4ynJgtXDGVcUa8GkMd7nkA8voANRxhZE2oTGN72rZgwQfLwoy6H",
  "key21": "q6chugX1hzGXqi9yCcxLYEMm94vFA6R6fPiTwS1ZaojXCPrgZGpFga9YgS56RCxmnYBvdoB93ohwuZLQLdWxU5H",
  "key22": "53nHys79Z25nYYLuUwwCriYi1FShtCGXd7Bm8256rGiZd5rj3xkiur7Ba2bR83bZpjwP38F4sNAHUC7Mjfw3cyhe",
  "key23": "3cA3ubatr2dBjayJ2hUGEHQB7kwEmRMzQHJpbUC4MowLdkf6MBGXJZXRTkoBmitDZuGi9rYYhtab5ZWNwR7mC6e1",
  "key24": "49P2Ny9B6w16ioYTn7gmPwHvn2pi7NHv6tB2iPvzG9wuYK1MxzkJFMnNCTn1gt9yhaZtXNGUo5c253egBgDDS8fa",
  "key25": "595ZPyU3CKGC34gaTigqkncXMwVYfKKzuDXU81kYrhcthsfzawipdx1GUuUFqckHfUEafvLXWpcFjw4wJuU2tbt5",
  "key26": "3HdMj6QL75xEHgRnNbsQ5C7Qs5znrhdNQmhHP6WeqB4wxVz5EHtoG9MrxWKKQPHj7cCtgZtjkUdz4hqhbPCE7Wyv",
  "key27": "5qt1yAKr3iczPk4KtY187uXYBWAYkLNFqi6pJP3cboHydnpgN17HCy6kjU1vUeu4Dnf3xaNoWS7iPrPxPYyDAdDM"
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
