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
    "5vLvp6HwihT7QErBws3xkQvWWcVRsKERH53N7z8eFfARR1TVjUwSoqtSWs3JgECDnJWm8HGSgHA6tnqhpWUzmshE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WKDPMne2n6qJBKjKfEtDSEL4QkFvMPhxqjHZx88d2dXEv52pj9nJ4bAm8L6RHdBaVnY2iZ17kXw2xM6he6yAwk",
  "key1": "4epXezV4FzbZExH6SUCWtAQhyU3FeWsj5AUV4DVh1xbsfQ2dfkUYo7ho45q8YPR17kHJMouTzPJAxweq47rbRoaj",
  "key2": "37LZefoaWF79KbVjYP2PPGQEh519EAKRBnRiqGhEQHsuBQfHbxVgxX4rNFrRH57GXZG3nSMRr5N7Ao19uvj4tJBR",
  "key3": "22CAsD4p6U5K7v9sS2Dr6N3enp33h8GtPhHm9ygTQ7stMHUejeQvpy2h8SEvYpVKXL1rJh6uV2g5vdkEkhhKDDyg",
  "key4": "mVC7YEsX19zDfTFmqh9BmMdYBuYGoahpPaytPX6Ts9Q12gTQZWmVkGQ8TATevyeeSq1R2HYDhAFuQ4WxFosqy31",
  "key5": "56ZLbgUocATkyZkrcWDo7XMgKLA7bV2bNqbBNKH4N5XWauXD58ZE22k1DnjmSN9gsJmbJAaP6gMkt4Bh1GSNeGTK",
  "key6": "kVKM2kz8NmuaZHaRz9n494hkr1NkvfFbmUTbjQ7HgsULYV2WmA65ciFM6eHkMAvnHpLv1g7R5iAH6evdmNcfaig",
  "key7": "xdSmCY4U5gsFFVCfUTNh8thNeSomeXBHtoiqP4VfQoK7pMRGPZbwxLcv7tefVgnyigKba8BsyXoTcmK34TFdrjG",
  "key8": "36g42GNs1UuyVe9SAnifV7p9KnnCCxXaL531kmnjiYLTLbC7YBEojgUy5sDxbknBJWcCRjU8Jt11KFYnUBzjVdZL",
  "key9": "4zD9VVrxvXAgV6e6RmpZMrBX2FDKA5rE36sR8jEm4UoPjnHb1LWzhPgJ52jW8hnQEhWP1wgmoMeoVhsUZFD3rawR",
  "key10": "33bs1SivePYZPpm9nVRqSnse2VmP4DngikZRtqTrKXozjpshU3i5PUNT58HmBKm6M1D1eF3gGdZ6mnke4onUEZfg",
  "key11": "4Fd4Esj28MVDTNXrqE6CeQF7UDj5AfGDFBypdFRVKMHZGdvmnb4LWsvtpMvfVzyvCykzvi6hPyT99F8Z7UP6hXvP",
  "key12": "j3WcXxmZ6tjpSbNAoPuwd6sJnbG9udFGwRTrZ5DknkHs1cDeuicfeoU7LjbNdxPsT2aRgYhRyqwL6QHobuiD6gi",
  "key13": "QGQL5z5VbDajnVY6C95n1cyNs6zbdsRU8maRWpEkkKsZ9MbzhVocVJGQXEjsFLjNmTMMLNLdRrKtMGfp9MMtsbn",
  "key14": "4QnNQCWCmVM5T5Vi9SwxcWnpKBYhVvBoWXFnvBDF7ZwXzxVS6tfyiZQTe5cnsMBgV7jqosrChfSNdvchNTLsWrsk",
  "key15": "AxUXeEfGYxCyXE9zkjmB86o5ps2BCg6sMbjwFGcFzR2P7ho3CbB9r2oouP9gC31HzUjoe3onSKAtHN3MqJ88pQZ",
  "key16": "Gj95FXDt5sjnHyL4XCAWFTC9ph2TLBzTqQqGBea42eXGtnpQDQn63fVTmpzEEVhd7QKFGfZzs2aWHKwSrLcbtJA",
  "key17": "4eJpEPbxAw1Xnzabx4JrhcpF89GeHGYJm2g6gvEcSXLQj47M2WXQgUbkvr1sAqaJpB5BtCpiENfogT4mNq6ZXo4D",
  "key18": "3LrP9KJyqFheeNDTojLwufvGhUWu3MyRKjmAaw16f9PrCPDWsaYUZRhBAoazpaf1awMfg7yt838a9ZE7GXGZQhjf",
  "key19": "2H5B66iHckqsoswU268dFKq7eQmhcJN46tPu1aAXKgFR952qRNJWYbGvsXBQo4GeoWh9x9fbz7hvk8daCWqPPUXC",
  "key20": "WMgjqnrtZcFvzoeTzRAsy4WDDwVWRxDdVdXt4gt8RoqcR2pYeNpQz7Da86Kj1hzQ1nkNSVJfb8Ks1h9TVGRvUmQ",
  "key21": "5KVmpqsNULpeMdnT8jdaLJD9WMzhqouWUDfEa8LHxaNpM7QFpHPAdXLoPQRBb2F22hidh3rPJDKBVnJLAkS1EAEj",
  "key22": "3e13CRduTRhCPXFR4gA5UUFjvog4iQjTSge4xC7fiSVu6iGg7Ut8SP1o4vWa7FfK27ZxFSGa6Q3QCY1QpdfcHVtQ",
  "key23": "5RTevoKqw7yC3poLGFnFqTpKMaL2jka8RSFPjZg14bEsApzhf5xeXu4AXfFwSoic66RC8xNZ5MguqXwwYXANDrMH",
  "key24": "5ADB97YyqdFjGQ4dHsHc8zWUutT2cUPT6PswMfv7g4De5q2kk3JtPs75fk2GK3mZpM3QyLQEspaUvkbWx7NkjSpH",
  "key25": "3VA2RQtCRiM2FBT7HbgUrW8DrkUBfWVgrz1qKVEheqC6p6wfKePyTuqr3SyF1k2HD7FgSbP95JmjdkiJnacKD8zv",
  "key26": "4iqEGaP1uKSB6WU1uisPWsRJU6gahc4qiJuJvnTN4zifTL3ePBeFarbkz4GPz4DGNU1weWir2NwBZJrXAZwgDY4S",
  "key27": "2WMbJg7R2yuNaBEJkFt9ZZdLAmkVhDPd2LPKpdFweiMzZ2usNSAKX9fwFx4KrQUMoCv8tYQUxaPctfrMKfkhpzgw",
  "key28": "MxQQiDhYX8Wp3jHm6fQd1QFZaUHh9jYiepsUfRQFP422MhW1oy6hkzU9aVYBXxErMUX1bnUKg9Vwk8JRLcVipCJ",
  "key29": "4xuB3gsZnSkFfKmVyYW47T8Udq5JcM3NPEKAqcmoA2khnjVRpLiHYFBdEqD4fixp7NTKbsmtznoVjCux9eyg5ne3",
  "key30": "2pnrATspmSDSq8rCVXbmZEnSbbpvPgh9tmjq4bjx4Zp7jc9boPYn3nTGC1UP8V3i9RmSX2tnoeXaonVt3NMrpLwH",
  "key31": "3su6FANBEekChedxGZVV41ogNrGDFcUKAr6ed9VZeBU3nrzsKgvQmrEXkjXmhbX6a1winjGjZLJ7hyD5uayMK6nb",
  "key32": "2PaYDpu18c28yMMLPhJzXwzjNRwqdrrKCDn1P4D4z48JXzgDS7DSM6p6tKtwTQicNRafmYs1rEPAnr5wpNCAE1AP",
  "key33": "rCKJo5C5k2jTv4puvUdXyhvh4bLQM1gTAio5pDj3kiDmbc8vyUZNttdBEFG895959LFpFfNKcfrGqcw9PzPoUGc",
  "key34": "5CW9cBqNgv1WBt5SNYbVX2eoqvMyJUgbeh2Uxt7wRsWMy8vE8sZR5ccSTFhepcMwJ8sPXkC2YYvfacm5e135f3sU",
  "key35": "2KaL7aKyLStjeHebVRsyMYoevJYPAw2ymuQjH4rk8oSrzYW4uaoAaH6DszRAvTXgfknG6rcgix6CkNYT9fbYDqBC"
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
