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
    "4EQN9k3yc7jd4vxbtQVR2mcKotEaL7d4Hy6ktYrXQJxxRsMutbJUHTGcZkyRjtu9zW4NpAVC2idQv4qbGJApMPnU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YsGd6hvZwAwGYz2mBaFAjeziGYZRnu7hLJE5W4XTLcWmk7SdQjJxqewNpsCUVXo2Kf5dMcgGee9v7ScMgdMCQfw",
  "key1": "4FcN2HzT3sho9Q4EhSYBwDBQXTsygtAyDuo5DTmmxPFXuGSMGVFFck3c5NAza5Efacq3DGGvhu6GQ1WW2oBDpiWD",
  "key2": "fYaoLjHe4dhweZHGQoKQwEuJQLjErgMxGc89sSz8bVxtTmEESxd4iJWPnePsu1JhJasxVLJR5WrGEi5zjmM1T83",
  "key3": "57PH5q1BEb2wKmtjS97PWbrHbKtkVdwpLR9D1uQ2D375xr91GXNu88M2UvtJ5eppaCRm5FiJ8n9MV17nbmr1yYqo",
  "key4": "31bwQ2Y6QNenCeDQqFHs7esd4cnY5Pwy6D3Rg2bJZx4U4MLPv2XpnFuyv4xNXU7fMrgybp72HPr5RaD8FXRfS6iY",
  "key5": "4jfRUUURTnQeN5rKZdgUwKu6FyEUGffDxT2vhcod9BUNSx6hB3QnqmQYbURhXGRSsUh1t5k1Mid6yPyWjUheHaMo",
  "key6": "2CHUDZEC4tKPYemm9iyUdtRpTwgT2zYju1pshmiT6VWn4hPX7swWheVJQix4uBudNU48LZLQtKHsQfKErWMNzkqP",
  "key7": "3ewdXDVWrQjqCc494srMNWBPKsrW29p3r2k7bpXMxTXXWu5rnJx8qGqwqXL9GAWWG1GSdzdzL6nkNbCV9XmKWmAz",
  "key8": "2tscQyQZbrUjsRWHnw1DXaDMtrzUx25HV16B8CboBHcV1r9gqZGWuNFrGV2uqKaXqbBzqktbEWKL8XXdMTMm4pJ6",
  "key9": "a83rLaZfJHZok7NTyjMoWfor3TXcjH7DBVZ8bUmjcJWx1hRaDb3iF7nEnWrQbcY5xAiYMhNB4hYcxhg3HE2qEx1",
  "key10": "5qvLgPDVXuwnPNFDnaED1ZSrKNw5uabNnpktEv9up4vtQ7GRAMdbVz7mZeE4WuEQEG2LuW9iBu2C2hvTsBaJgCXn",
  "key11": "3sSi8npMzEKePNTMd1tcKpuSv59M6navVgQNzNz26n5oAzoVPeedd9BaU4namcsmLHpysDaQSo6ZAXm8PqP8YZ6y",
  "key12": "6VRxyRH4iKAds9tTUmU7FJHuwycSRaectPefpkYayLnMLA6sacvYcSBPoKhf6R4sNKyPV5iHW4JvcvrTe3j7aES",
  "key13": "3T8ZmyCD6GhHao7YqTUki2Wm9bf6ZrDA3ocTYyyTCdN8tEg7NdmR1j8SNDnQSBBqm1aoA8GrbTpEi7yKkttGBVdN",
  "key14": "5jtbee8Apt9MYW7JStcw6d19NG1GhoYKFnM1pYWcrD31yibdvY2r8geEQbegyMqT2NUgFpqymyMmK9Pk5FDyCqvA",
  "key15": "4rXM7gx7VBRgWG2TyLMkUWnAAQyg3siiqSYgAHvzS6JEBtWC67KnA1dgtNfRBEkLtGGKjUKeKWAUcNj3U1LYtm8m",
  "key16": "oCGcjjkDKPJ68LqP5K8ntoXR2CVX6LeHBXBbGR6J5BTSGdyeVGBjqMAnfxCKcsAzWCxZhHAtqMFnCpuwpjgV37r",
  "key17": "47hqVyrf2ki4go4x2YwoYfiCjorP9ousN9hM2ZmYMTeHqXePps5pLpAkDPeyazHDKsB6fyYPNTopw2pirgi9oSHo",
  "key18": "4UZadDzCJSuQX5Q14J4wzciT4jkr8CUpcTXN2rzdKjSwsqDQQ2fNnxyoSpDEi4Z5G4g1ewvC2droA8UvtXdK3A3q",
  "key19": "4tFsFUYv2eQEGKsiDD7WvVkJDFX91cHk88oTaHHWEUJCrrbTPLV3D21qxkjPsDrmoNR8Wjm5uamqizRKSd3QbiNK",
  "key20": "4CiH8EYtRpDHXfmvPfDSEVtA6EGCeZxgtcZvVNUenJsKfVEw12rXNxKARTnb5MFQbvb7dxaY1bow52e3Bo2NLekB",
  "key21": "3WdCGKrAfgmkax8SHn4sLdiitKPZQjCh1Jik9cBP9UvZLPfcTqEDFyrBx9gycqSd3TJ8nS2Z1zpJ3bKKtAvL5e9L",
  "key22": "4qSdHgpyGztYMLGELPDHE9epizMo3JcAFcnrzoohr8WreyeVpNuu4rraSNy4TSrfEzrCjthcnb2d9U8r2TVea43i",
  "key23": "5VQj9zj5qBFH8AA95BtxMK4BpFDhFRjoav6KbPmSZctVtbgX6sPLAZhtQU2Ab4TrZBDJbLd3smC5qSZ4uzGZJ4JY",
  "key24": "3iPPEYsjn8ezwZggmpFd2hFtT2VYUDVfsVekqFHRuUbWgyJCxxw8PrsiBxbkQQn1523hx6FQyxDQrYCiBybs2t3o",
  "key25": "YvsVUK2ycVuoo9LPAnbzB4C1drgMukBMuVVLCbVfbz1PuZD5G1HMeWXsfrZMY85Z39b6PFnQEeC6Y1qXDK25Y2m",
  "key26": "3wawCvQVvJhnRq1K7HVuKAdcjyAt3jjZFUNB9MPYViwFDdYKDtQk2HyDhW397JHug7BxSNLcEpG5rJ26rForGEWb",
  "key27": "5RswZJbptABWn6PZj22ttBe4Xr2VvrKmqecfHM3i6Ad8aKsDRwYzBgoGHRYs6eMtMfELy6FTjVZXC5YdGDTwUTeH",
  "key28": "mAgaK4WnY5yRDU1GnJtmn3k8zcUhZdrSwo3Yo9L1kJT4UP4UWrriKjFcqWfRzoPwzky21rZVxUTY6Tp4Ld9TNNE",
  "key29": "4txhuocGdCCYubmp58C1B5GzZfXKSAw2Nnh4skZVz3ZEVSwyt1hQmQhFi3PT7uuvXGxLQo4uhDvsqHjFok9rXiVc",
  "key30": "W41TzeCNCH8qd91SV1R3KX4D82d2sX8MwxWyQ9syoV2NWzbNZRVit84AYGNHsbnBCaz7UDwp82qm8Sppec5pugn",
  "key31": "5x4LXwWtcSMK2pJEnrCSmWAv4A8o8A2sNoDWDzVJHg5HV94g5CQhskBPabMkgPKqP9zFFcLEpzcLSfu7wCd2dRsK",
  "key32": "mgDAKHKyd5ri4ZtUBbRVEab3913D3kBX1DzPPSBx7iAEupoyPodYDwZ6Hv74JCVNxRvrQcQgRyzhq3FpxJJpXQx",
  "key33": "65YF9A69M4dMWt7bXm6sWktTJkLoGqNsRw8ov4cbiHFu9GaeCaF2TH5X8BmXBnyjiig86mPDj9HjDtDmcWowiKAe",
  "key34": "3qip3QhrPaPGfaTbmHcxZTh13knd3EWqQb3NR5oMazcVQ6oNdxJG39ibRQAKFwn497nWLhsYCgnFTrikMptJXYtH"
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
