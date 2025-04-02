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
    "5MwJr1c6kXhokAGWBAJ1tZkdvPEzx4roLYg2py4bST5zSJTuKMBCBqZaSxKgGiCT3oamhwtF8Wb1otSftih1AhKS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fTfppS4HWsLGCRk9wiPCEPsU3Zw2GvRqRBjhc7FmhfG6mjiJJM4kVhdKjUA6acj5tP8EEkrdD4j4cGxYiEewJWF",
  "key1": "J78N45moGGKkQnGUNTu6BS9b69XakiEVDdabgBJYfR4R9vue6aHXHW8EoCVRhQeCPWsZsMmkmp4d9pJS4XrLxN3",
  "key2": "5UZYJFbo5sAfp4dhLqDXtEGWVZKD6zH863oP9pgpBSeWgbmXU4Tje9n42tDcZ6xAbbnChBn7DungFq8QnhGD7b6Z",
  "key3": "5QRYFUU29N7SWmuLCfrneDs1mvKYQ2DAGgpztF2XjaBH8Jttg3c9NMbQzgzCiC6Gx2Fdrcy9UXryQGutLfEEQLbe",
  "key4": "49HTu9wdSmhBSo5UArzozdZsPALfPNBG7w2rqfb48Mw7vLtTSWR2NszESh54oem3qzn2BdZR88eSRuMYwpJVrzh6",
  "key5": "4Y5ypVxvRg31wmh4Axh8HwJzrXK9NsDn7mi8DRt7hXfmYYDavQAtsfBfqYmGt6TvSSCaXrXeBoLfrHKm9D3PAx1f",
  "key6": "2qwaiFtELrMMSuxb73Grvh7Xp8sdcKDbtPdns777EZ6vnDYpydQ4voZoojYqhmcx6zLK3ECzaBEnLHupL729n2dk",
  "key7": "5LauGSAgcR9WBKA8Ej59iByqHaVKT67eSdG8uexTFvZ7aoBewdJnNhFtUtrDpfumbRnjbn3ekLSJJ6j3isvoUPpm",
  "key8": "62fynrrRD28e158b6rajk8YLiDbkBbRy1TBgiyxTQ5UTd6YUEwgymSPULfaaFa8YQpeiGRYgdUKjnJezPWhFcn9X",
  "key9": "ABMA1StdfiULasUDoXjzjRWAzP68PsL1bfS4qbFGi8W4jjsMuh75mRnbvKQpm8QCsVq6ngCYTZLge2Jzupd9c9q",
  "key10": "3USBy9EpExB2hRvScJw1KJkYUumDvcvG6vx995DYif6g4phBGcRhesZULBsNp1iAeRavupM3fsSrZzhH4QKnMCDC",
  "key11": "JJELzfRuq9fPQJ6856ysV29dcffqpQJhx6UFqnCU2qk5VzkJ2HiwFrWxWJybsn23uCrinymHPQCc2aCHjyyZkTL",
  "key12": "3BF2wRX2iFiWbmizWG39321k9vrfoQLN7bwmzHCWMDxdfufnN7DAbr5Nk5JkAaL7S1a3L2rCaALauAgwHPE4uuUY",
  "key13": "PhWMEQAaCZfP6w3iKxtAsvFuwUBEJPnCJNj9PiXLYbA2z4FRPxYKA3xRvbHpQcXoS18mMq8C4jNe5RbyJs9FFRh",
  "key14": "qZhRHaCTjGj1CVEj1mWywXbkFut6wQ5AhxRz6VXRPPtjiV8XkLdwgW7k2Enxn8oQ9HAqFDTbqcpCvGkgbNYcUdj",
  "key15": "2TrVL2uRcDF6UtTkrQCnqbAhg5DdJ346CNvQR7WmEVTMaAZyEKFqkc2EJbV6wpqnsTVFPCWaS8DvsH4n57FDpKad",
  "key16": "3DVNWuBNYrMU6WSAKcHmwkh5EeJftEduefocVgsrgaoGqpyQT8VQXD3qYyLzbFyx2tVXXAzt4GLCcCS3Uhiz6ou5",
  "key17": "25XooQLky7fSf3MiHpf1u66UpXY4Wn17ZUm5FywTMCcrAzmTVxaYfuv5XDzH2aGWfQLQhuYw7r98w1Pausfn9VeW",
  "key18": "4XeRMAcKLj7rQArpXnfKzo4AZZtHMVPPFFW8hcLnxdqmVGgfueQ4g1xQ3GpApML88p7Hk8qm6vhjRPWZZfAVLjKp",
  "key19": "2NVE2Q3phrmWMfk3NW2s2i5tJU1R229xm6dPQoENMrKodiQo3zBNx1miANTDLaQ9XDDa4Dq9YFbrFc3qvZ9W2pky",
  "key20": "5tZwRnvx2XpfvuNeJzSb7RvqvKGZnfyHeC1GgjU7QyzuKFA5u2FfaUwMGnQd9Xdr94KTwL6ubiAgh1kXbnUAX5JW",
  "key21": "21UrijsDwT3NLwL7muE9yk6jR5ttq1Lepm4z3yn2n5wUrGW9FoRCzbK9Rst3y3jGmqoPbbAhwX2KzxrTCyDvpDPs",
  "key22": "22yJdkWWdPnidEpMZeFyy5AD6xuyWTDpbuHEkvamEzjSKnGm5YkvgcbGpQFugWfwPAdDdpBaSDezpLAW1HXknXd1",
  "key23": "4FWD2SMH1RUgaayAdqrAQSCnc5JXDhi3tPMVkPzmkQKRyy7rzU1K2zdHraLuw1sT6AArXEc4szuar46oFe7kT9mr",
  "key24": "UfQVVpGNMJqeSmWmn7Z27HosYSdDon6dQBjQTXczoTTvK2vMhbjtnZFkHS8TLovMJzMhyD1eU6ySPbXoEN2vfYj",
  "key25": "5sD96MkPt1FzhyrT1LwxfteUPUKWag2qLu8BexGVczCYZZNn6E4J2ZFsnbdjTjN3dTg18wtpDtpJFENCV1jENruB",
  "key26": "37USFB23VwmQQFcdLJ1EaLuQTyreZd1QSZtsQwEVuBndqqXmct9CR8kEaC3pVUZqF7hrr9fmmzSjRksi96dnFDYo",
  "key27": "5mEDx5qwcTXB3bE6FouKBxpi9UxDA5y671iT8rVAQsmNh1iCTtvyp7J8wPtPncXUZzuAJVJYWTBfp92bjcSd4Cbc",
  "key28": "2QnbdYYENHc6251zo98wox3wGuNtxAH7Huw94V3PtYL4QKa3NNJS4LSMjfmm5GkmSceUNphNey9VkZ1nxvrWa5yG",
  "key29": "4CBNdAX7VyYPxjy9Vf5DsvjRU8M7yuPC78vNHrxFyeiqiSoa1CKYv3q2YibbTd8GTe1FvQSa2Df1drmYnweGQaFG",
  "key30": "5fTMGyPzba27LJDrF9nJwY7x6oriLNxACCB3depcU5Y8aYbQMBHWJwAPzDUiNRfEgPTVMMy7LtZ9Lb6FGRR53WMz",
  "key31": "2xfQMukLFYfCdvmz2rpwGqfDMAkLTz6UtGqX6Twxb5qrCqayKaS8SRYYkmmDWG7QVLYDQZDERHT7fEmcML56XnJq",
  "key32": "5JzKwJdJQ75fRKs4mU8TPdT2uxnRTxVEHdUWmQyixoLePEwv3iXN6zBtE4C9UBExBBiVw7HbuAVBg8DrAWeT91sg",
  "key33": "2vXzGmX5nH7uWUzp4Ak8Rw3z2f4C71KbfDDHYmA44EQx8JNJ13W9217y5D7KZNxa1TuosnQ7jYcTkmjCjeZtSDfb",
  "key34": "4MPC6tuLpZQTUPCC59JbVufgjrj8RQC28a1AzCphDwcynpT992rhwwdNHCB5cgioB7HBySYdVkgLGc5faeDSDesp",
  "key35": "4GDunP4B4FfEhhtgYwUkCxTzJRDfoYCWqYd53ojV9VzN7LmkDD9R3SHE9QCwhkqDEK7tUPKsVUFaCH13ou5BZneT",
  "key36": "xkx5jX6Br8Ly8pytGMNxDrodMMZuPxJG7JtBeRRhzWvWPzfRrkDdw8YLxSRN9rSKuf4u2oTk1X1MffM1qfNXYMQ"
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
