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
    "96n83QkURnbKmJhzNXNkB7o7RMHty7GY6J7xCGMgnrDhRN8kBssTUKpeCdcRMZfDbPLnwd1knkx7RpqSBQ2rT8K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "644PJMu16AHsrZ9m8RgEDr65Uyk2J3mwFdkeNftjgfhKvJw5zwQGwQ4Mh2WG61M8mEXMePc9qyDUqLyHx7PWjyv8",
  "key1": "5URWo6MP9sySqhVCkBPD6S2hccNpBL1Ki53faDpHqbpSPbv36jTcqvj1eL9PzAhNwpTzsJbb97SkL3bXpa2nRscs",
  "key2": "5uF7aRYZRdpgxXqs9L3UySv2bRRueL5571SrunoTBAS6QVR7UtuXqahDE7wTL4Dm3vEt7C4u9rCSg4Xv7a9tQCB4",
  "key3": "2zeQi815Q98D2KjqB5bKpb3V3FsKnKEdmN4Dea9Hv1fidiZKFxyhthxsGzZMh9XruXECscKupV5NB713on7Xx5cN",
  "key4": "iax8L1Wkz8QTN3Q2qijSRRG6zsD1tgprK7imiGMi4kSBw1BKdBWMKGEiwPpNrRoUAVvepp3UrQhbDcDNfeER2bJ",
  "key5": "5LJ7uTFoPw55nD24irfnqyrW5YpUgNCFVUSBCsKEEnUjEF8D9vG1YK4MMAyxeftw2bN7abXGVdr5WAE9orsPqcWi",
  "key6": "5UzZs6TKHVDhNH5wiBT1GdR2KCLhXHX29zmib9F5PFpsgWK8mAqEx4pgPPj383iHZsAgsUTh9xbqdxDZypfKoFnm",
  "key7": "4uKPsGWRi65qYGqWHgjY7mYB8noYN6fKJY1DjUN3cdTnfC3uEtGLfAdiwzoTeXpwtAwHmgzN742AEVVLNnHgLVi",
  "key8": "4BUXsukVbLbspSvYFc49oKCgiotYQeSm9goVcC4w3b6szZjnkNKscpAP72VpeNVCaBiJcKVcJVCfr3BDf5ZMhznE",
  "key9": "45CnzRq27gtQrJmGZU2Pex17na12xmjuuY38dk8ra62JK9qusV8WVo7PcqiXT1CJSrWSeTrxRRWUe4VZRStZmpvT",
  "key10": "3WsYye8zdxoY5ydQRWYR71pbMQjcfVgKEZC9FLvyh9aNYUZrU7WduoomG3P5mZ4PoWLvJhwzRmXzaFhf2S2LSdu",
  "key11": "4StnWo4YpXouGmeqdrTycF8tjcX8pb5bdxeKHzPPdg84x3oLir9pWpcWWG7ncXhwG6BUACMcPNZr56dEyUoXkUeq",
  "key12": "5WBoGJFqcKBrXRHT56VkLxftvcAZY8WnY4cfo7JYa6zqgXxYLCBFtr9kPiyptwoQwhs7XwXjHjh1oWREUTFgw4wf",
  "key13": "5vyya65qNbENAXMYdCh3EJhRsJf4YQd5xLKHEVNCLB5Rk6ZLS7Wo9tipgecnHtpi7KReavdHF62W9nyaFLm1VoAU",
  "key14": "16iK7WnSY6ahsbvzvnVfdEYTxzjp37rdJVCD3X1jX1tZpPkT3kE4ajpckQJ2yuE2DM2NjDQa1Cbzrmmo1eaUdaZ",
  "key15": "3KAHLAKcj3e4KiyyEwzTRsNtoPYW5wsnyofhWDyU5jMKr7HSq1R1hwa8ry7x7NYmFH55tP98DiQ6XXbJZgPiE1P6",
  "key16": "4PnsvMGgDb27yyompxoMX2dd6ra1To1x8fRStz1BgB9HUuCaQvCW5RXbaX5bZQdSkyHmwxgwNtdECTyCYw7A9Q2y",
  "key17": "25gvQwJTeVhNrqkgX6X2oA3ua8akgk1sNYGztD59rgg7Jknci8TmMRBKR8aHhafbfq11DjDA2vNqq3rNM2YHNFCj",
  "key18": "3EVfFeroRpNKdSYdTsSawgWhFk3Go9yeyFNmNR8SuLVuWwaQv8hu5zGFfDJD1o79CbUjdYeAaRLPsnFjikTM8Fqs",
  "key19": "4wnk7mZH6QmKAum4hGyDuJb8k9pjaWtLfN9Vkt2kexvwcBBuCEPZAwDYR8zHjpzrCPkCVUDn2JurAHWZHCgDrqD7",
  "key20": "5qd5RYukcCtAbMEhJjwYN16h3Eq3EQeYdGhzArfAL9EVNiBMDXoMS513MBGKSV4FSuX77wC2VJBY9TMPQTSdNvTc",
  "key21": "3M2bE53iLniAjKH2RUaGdXvLHzSHgehdeRJ9wSFfnb4rqcd9qeGNgqSam29fSwEtapW6RL58LdkNJM6n6szEGNH9",
  "key22": "4SRdY5e2V7z7WN9kwwXkBMY5WdmpMs63FWK4vrPthGiHE1ts16FT2cvqMZNcRfUhSprfTKjSAUu3VjsZnLt4Si9f",
  "key23": "2Hand7TBmPxx11yYCaXX35RCKP6pVeCeMf1sGGATpLJj5NsWbhC52zyAYDMh18a5gUnYZ4zHsWjVwKRLewL7U5Nf",
  "key24": "2J3rvaFn3snNgVB2g9xx2qZByuwWLECPr8rgkg4e2yd81NCBHyBVv5gj23y1DHJszgkLXCEnCQ4GutpWkQzLNQJu",
  "key25": "5ePQnGb3jVyCbDTyD9Teeq8pXkeEtwRfKBcL4Z7GLrireWEewkCn8br9jrs2M4HgjnpE3KfDuHs9DZEKEX3bg6AW",
  "key26": "3BaPDMBCd9PybXDYBdFsambNomxQcPfy1CjZGXjAmzQp2GRQ5v4KvqbCo2C7HkMFdzunrasWp7nckUPcxPGC9WFN",
  "key27": "4sMriCFLqgnaaVZwjt25avgnxrzGKhFGddHVAojDniWhNFKPodaRkwnnjGp8hjYAoLTJvhnVks1rPh5VrtkZoEwE",
  "key28": "4MAzEYVFCo9beWhdQwjt3eXqdFGkZL6CwptoGLnNmJb1CgwdiZXCdZaV4QNM948goDbR68ZJYUSrrq5wvyH8J5Qj",
  "key29": "644LkUHAq61bnz83qaJDZg8Rusqjm2ovJpLUHSs9W8BXoYZdvRcWZx9WVYNYw3Z596sZBuk3Dw6AfK9VXco3CjLa",
  "key30": "4GDAr5ghRTHPaRfczAmqqpNtA3FyJ2pMhPWe6hatA87rdiezvkarHgadJEvnkrz4qCAKHqJMiTMgDSPKtBemdNw5",
  "key31": "2bLpVEdVcynmHWx33mKTv6hD8UdKBAsJBaVBbECEzkRXAc6Bs43Y13wW3L83c1jcTNAc1hZYCPvVu1n3xn7anVMA",
  "key32": "2Z656nx27HvtiUGFU8e4PwjFySGnsUvbPCiivo1aCnaU58u1ZR7DBAnvQWk59mppREssBwbKUT5UdWTXSPsGGMNa",
  "key33": "5G4sJBQqFpnUvCSpRceU6N3aRckUNZGs61g7g8usue6Pnw7QoLftzZaxhwBPYX33w5aN6Fqgg8SwzJjfBxGR6p43",
  "key34": "2Y6mvj9tiocpPwf7AiyQV4yFpLNwXuPgE8BYLweKxuTJaNPGV7cVmyU31UTW82KdJjb5H97LdvbHZzCQCiiPRu9c",
  "key35": "4sEtyfgwPqkzfEruRJuVRPH6bTziVwx3XMBW9z4XfF6JKt9VbZN74YKZGAGJKNRZZMccxUxdcNL1A4LjL8AjB5s6",
  "key36": "4UvaZ2LHBZ3FMQo1FhR8Aan93QL6Ahe3jcepi4fqg8afzjbK9z4pTPhUFLJgWXLBwPjkd67K2wFKS4hQ43bh1kNq",
  "key37": "33RCnah43J79ULEtxqYqefPzNAphoQfParkMy3iJAtesfG4Mg9EU3SuSX8ZTPW2328Z8qv6TyeB8S2RKS3JqpxZv",
  "key38": "2u6ALAmjp7Xy4wBP8NgCUHkkHh2mtrgurnfUzCvUvVKdoJTsdGa5rFYoQ4nMtVBmPZhCXqVr2vZidMHG3XFG9BVD",
  "key39": "4UMtA291G3CHTVzWyLUdGBDDUesrR1grrRbmsvKrLRQWUNbpCqtaYKNaRFeZU9ChdtnPnw9q5msdH8jrNa5eKfkd",
  "key40": "2FMA5QvudAMfx87RzEe69LZAPTdVk68U1FCtr7j8517CQy2JVFc28vDhU4fFeG6QhY6FfVfSsQtkwwXSwmE66vqL",
  "key41": "2thmXY1KLL6pYCAjgGJREnSAPhFg4y11kNmdZXbCunqiXBKV8tmkmAxRBERC6ro45LZCtZEUWR1AC4nQLf7NTvLX",
  "key42": "5Te1UHYA6k2x4KaP2austFB5TCGvtsCXu7U5Lz3KXBdpwdRzmqHeTJewsbxuw44u4fBw3MrPHc1qvNXSCwbpCyih",
  "key43": "4JparQoiTmWfdnp9TQsap6QZnZvh5eiAoByYjZajksZUx5y8PfjasKE8o8wmJ44QzrEEGon4RNFthLZ5tdS2V8fZ",
  "key44": "5FPnmTabqJRqjHFGj2wyRqLsXkNueo8tZzukG5s85HpkevTmAXQoJjuAM78VVxFc4SqYQQtzCtNXAkPpz1MXupMB",
  "key45": "EELQ8h5xemBT8iwPmHH8deMURW3Ht7UYnNdRKiAj8qHWQckfVHajQmNsWi6w3hhxMqjWnddh9z9ab8NuNLQxKzN",
  "key46": "31TuaL651veMg1QTwEg9wnDzekCMeNLGnNUWdvefuJreF41SQvssAKS25yLrkUyGyccnNNpLCQiLeLL6BiGhhExs"
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
