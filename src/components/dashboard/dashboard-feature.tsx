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
    "5ZhaEiPpkdnx7o8deuPBcZTM8aGuoxM5MsNpTLzjJRUWCs2v1BVSqjTY8YTLnBvsJLPj7RuDmuUD2qmorMamAWrq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kdxpZP4NXYQLbe7iFafknTGcK9K33REK88bXKRKdK4XwZnFvgB9k16PrQF3ZvxK7HsYzg9TyL3QCX7qYhz5TiKN",
  "key1": "2qYWkaW7xADbrSxdMFDCi9BDCqtYXyKgjEWKD4va5fLpXmNgcbqAhdARJpDgVTasW7tzhTef1bSHZrRbPqCDPCPX",
  "key2": "4Vr8uKcR2RMEnw15S4bPJ2fphD2as3XtttWJSDwbT6zs14izxeWvpuLd8psbytZFTkiS4jnCqEP9JgM23tX9idcy",
  "key3": "47HyvtMfKNAaUKdKgEpbAci1qsLrRrPxqWvJGeukHgSrf4DhVZNzSiehqkgsDd2fWK6go5bnAFj92FWH5fPBY47j",
  "key4": "5kKsccv4LqD8XzoTB38awedxeMgCbuuPCb7VWZdyfRE7qNYWBzo3jCYrSFH7rBJjLqzpyPsp92Ajk7hQxptrqDLC",
  "key5": "59hGjw3qtQdRbVuuHEU4fnjZGSQkhF8nqCxUBmJV2yuYxzugnjhvBGMZTotuQPSdfhb2M3cLD6qQriE6MNsmnZK7",
  "key6": "otvFM4vU8L2LJ7sG9Ja6pUCnAQufS7YkrPHiApTVpJ8UxKWJSd37wmLroaTHmthMmc148qLjmKQvUceMePUZN6f",
  "key7": "5nVVmk6HGF44shtBqQfxqvth8NNB5T2GGD8MwADjPwNSuSWgrhmXqh8uUzZS6W3oshM3d1T1vAKK1dEMS83bFhZq",
  "key8": "2MCuyunxg4NMnMVGcQY316WSbLNmH72FEFirRRZaMRCA2gZkMnVkMZtQciFToAFLixrWMk6Xm2jKpvf1V4RknDsy",
  "key9": "5wevzZGsaukXPMrnEjV1a7kZRCi5a4Gs4kYgJSn3wcJ4kShdyvaCvKhUN6RFBcTDuVRhboUQLbXW42jtMbNnsb4M",
  "key10": "nj1ydFNUopvM4DFmYatE7P5iWpFqTLswDeD58CVDwKoMStTAVPTMvtkSpWjFUBHm3SvnaEowCVvqeePKDUkqSLX",
  "key11": "DXshnRRvPDA6ChdbmUcFqfKWpFjpELKfuX37CBWunbDNwJRAVfaV15w9d98zTDhwv912UFasJAND2Vh9bqV61gY",
  "key12": "SM195kAb5izvRoLnRR22nRZ9rkH8rPQkHbaT918bbvn4eXuPsfLRKUudjZKaWrV8cxUC2nAEP3zaRppb7mXrLo8",
  "key13": "5cfgJQQb7eiM9Ac8qmw7eyf2PJEga6LCJbHNoeWuSynBcWAy96T8GDQHDuXRZ1Cd1hrkJroRzTgeC7i5d4YF32md",
  "key14": "2dZpT1EnZVeiLWrkCPAKdUuCQCcoJy4ggru7nW24NmLhHapQyRwEPtHZS2p4Vf6ukk9fnkD5tnT7nZoM8Fmo1JQv",
  "key15": "5mk6rfkEWLdYYKQCs76Vtayhz8PzK9cRJjuG8ioHRnZuHJoC1HsMfJh7AZm7HHtK1WKGb1QS9KXMeeq9b7QEing",
  "key16": "2JWYBG189hPraVPbpvGMdoNjqSS2k7VfUL7XPTJ9Hx4PTRdHAcNeRZdV31jTWhroxpfGKm1d21ufMtx3XhSS1m8w",
  "key17": "4D6tGYnrcmqPRw93vG661ABdearsUMDygrQwgRXi2GecERu2rXH46hgkg1ramEBkLMbgzScDxh4SCrnh6FAKkbmA",
  "key18": "2t9wBzFbvNpC5bXMn4XtTSoqqpaYwL1dC267D5Z591FNwWHz4sAd4xsVE6PkETTLjyMeUDN5wYXka2cAnEBd4Kme",
  "key19": "4QydivdW2zUHa9uQVZGG9ZVLw4JQYxd3qNPQtx7xuzmYFe7aewhgmZ1KfC32XzHQq783Pj2PiqaRvrD8a3bmCE7k",
  "key20": "2f1wUFiXSZyCYBYDkGtFn9wPFV65Uag8simHnCHVBSfdNBraP8pxxAmH5LMdezpRAsi13ihe4QxdcKWUi1yXeBRq",
  "key21": "5t84ssVgcsmAJbdRJ9pwph1ctNkb7imVe3amJrCdTiQbhTZYntcstFSvhPo9sKWFiNbHUeM131AaZvy6r3SHbLBn",
  "key22": "4gSiBTZKsZpvHHbqyqbxxpiyoibvPBCiTts4zNH4CMfYVB4Xf2oQRWCku75hKYPJu6YT9BRMqw3ZERWHBKMHctMF",
  "key23": "2Sd5Uu6n3xV6xzk3mpRASNZFPAV4EFTFZx9D1HevbCjAJw8LNqbKRTb98yGgLCf7pxJkZcVT5httQoo5HSmZjPHR",
  "key24": "Qr39TkF2Au5w1Fmei6vTLQgYAsp2j5BoKa2nzm857k7njRUk6jqauK6Th67JKN6F27MyapBEr3sMJmSiEYjeDU5",
  "key25": "5V76rzUwfdqeJC1583zW8jvfd9sWj8sH9L17R8mU8DFbVNfZVTfQDbAHz5KBkmZN29oD7dDSBdDbQd6FWgPUqwUo",
  "key26": "MSAp5GcgfuCBoo8TowpwbBig7gsSZ2A9QFZgSJscZLLMj9mKRoSc9oWjyDE34mSPFP4UxCUNhrRZ72WdG8uzPTd",
  "key27": "3UW2uWqAPjCP73WJKeRyP3Aim25trvq1JXRBpzm12wUrzaL254y7uhBnfkDyXBqHSZhQohheyNr9i874p7rT1sP6",
  "key28": "5ox5Msb7WfJnvLghnyptVGhPREhXdG7b5ja8oMRRehJizJPTKueo9vrnTjy8jSHnCeUej7yW17L88Mzf9zVmReRN",
  "key29": "4aMHbfAzetiMQX5kgNppFaJTySP9zSqfoXH7ds8CiqE9TNLYxMGwG83a6P2g2qvViNnww5hx7EsMKibUJFntgkn3",
  "key30": "5rgCvks7xLCvCD9RSKABham19iUUEJGAZXZtuvC2UZxB633GUbhTEWmZpjui3QX7tAnBEfgCSB1CK3bn3gwGHbdV",
  "key31": "4VBctvN8XRaAhekzmjk8HbUQJG2Y4yEJ3xE8sBK1N5yrpaBS4gNmUf4vJWSxDpM6GLiPkX68T4BbRB3kRA25YV9K",
  "key32": "3Di2jRRrxiQFQMGLGNQJVUX1wTfuFhBQuB87bq6BxJntDnUB76mNRJgUuSgCUPsRKLMEeEJzev1BaXrndQAUCECR",
  "key33": "2Xt2Z2t3NbiXjpN5gg75sLEwCLMMkz3phUbG7igjNyXLXT47Hxt5m1gY2tKr7vPswuDedoDDa9GELCgHaab17fcZ",
  "key34": "3qdKWmyfiJ8MtJTE2gLA46eodw1WjDiWVRTSJgDr2y5289pv7X4sNtPBSzs24u91K1a7aye1FffPd8CX28ETie6K",
  "key35": "f8WS23V3w3F3LbApEXyvHXCSqTtu4bFzRUXTnxsKVuU7BM5zoYB8jeoRtjtzgJTt8P9RdNR8HJZ1q7r5xFhyZwv",
  "key36": "3Yuw42f4nd1RhwVnY1NN6GJMZfGVGABPogpGiK7C6FMBYxkT4WVEJwekhv85uzumHnt3ykLW15BF4XYP3yLmhqCA",
  "key37": "4qVSqZk83azLFw1tKYehwuiwSnXvFBbUh1VFQ3PV9L7SH5Tm5xqjnPnPaWhn3rJd88j6uwQr7XLxxAJHHG9BuyfK",
  "key38": "3w4H7gs1XV7hTyHpLiwV2X1VbDjis8nLVDMcS6GD1S1cspaRyPRAjCXQUqXKJpDUAKHXZPjiEz2Ux1tyqhT2Y4mD",
  "key39": "4SebTniiHNX4QvHKzed9iEz3rCWSRj9owob49VyakwesL33LaGMMjcHMS3zxCJtGKGLoag4RRMjPFEScbz32rneK",
  "key40": "3fwJaDRRfy2gXAEGGcSQCJu68AHnKk1cyukzfyrnxGgRtpqqsmsD8G3FFKESroH2rNcq3wYM3cbTGeLmYhM4MsN9",
  "key41": "67RwHeuR6tXJGycwbJaNKcPe9BSKdHcPCuBuAWjZVpXeWpZEMjtY2iGMWWg42icyZV95S7BNpvnKBnB1SvzJTX4R",
  "key42": "3Czx7fgxQyr58pMkCXrWKYngTEVAtjCh9TeyR6mEtqiYNPGn9SwQEEEGvMt5aN3ZxBC6mTchY7w4iMDZQWFTADsG",
  "key43": "3VdkDKmpYQqdVv9LYuXxaCswFdueKT7Apcz3N61oTfdHTEnWduf8rxpNZHMKQLUmbt7wpmkAjLZ6nwXVFUCh7hFD",
  "key44": "2Xe1g8keEzzBBQgXgRgNTe2WLQPCqGgWK6iFdduCHfeRosoN6FFa9Y6wLooKFYCMziFN5L9QkLS5gEYtaSLSKapX",
  "key45": "AukFNmGx5p9gVqW1tDsrdithka4AHi9CJhL9hQVd4KiLW6NJX8wchbcA6kNMHzn9UQcUd3PbLjRFinpCRovD9QH"
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
