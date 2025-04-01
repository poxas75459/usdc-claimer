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
    "2GgkKdcCBkbxegfNYsWtpZEV6PqZEjaUQVPnq9LYwJ5Kj11i5wkDqrUgKoYrLZGyyHoPqs4gFMpJFNcVjmJW8oct"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BLJEC3EwSJa7jeaKzwJVwP2YdqM5aVEXueM82KNbC9yAB8XjfMvqiGLeo9nGVAF27DuRzmM8C7pmd2qZ6hL2x2e",
  "key1": "49L7is7HZUE1Xztmqi4CfRePnQ52jCdckwNzYqKNQN2zHUg49r9C9qvAMwJFUkwCzJBiehtt3B12aLGEysfUNPbX",
  "key2": "5ah62fKsWaEroUiPZbi5irYmaRwzF74yni4C3Yr3i82UsP1xeD1yNWWcVyo2pmhgMNN22VntogJ6qtM5vxnQ4qyo",
  "key3": "2BgXtsaEVHbjeqqPutfc6HPLhAH9auuVZ1SrQmjy6MinHZhxvCfryzbzCsyxFtuWdzp3QBD1gRPonwVqSDyJoHUq",
  "key4": "4N3PFEq8GDeFxwLa6mj6zj8oosoCuJCmCg1R8UEtcKG926V5qYHyB1cAAMMpiYwWtvREsBmQmaSdXVpE9X8szNBu",
  "key5": "5cPTfDMD6Chk6yYiBE4PyC8ero1cEJNmeXNAHXsMfnx3dqBSC9GZaKBz6WB7pdN43BPjkzJXa1mCoAUdZmSqPXwt",
  "key6": "4EpXrWr4gWxyYKEpDV3HL9TSQVLDVKvHR8d7LtTcaxJwizrRoypesE2FKY7enyZ2ZwSqx8VN9niJasWftSh74Pim",
  "key7": "QP3B3EQQLWgKaz1oeuRgWw3QgdWzjZY6oJj7QbcsvNFDHFLqsWT2eMtbc3Ge39iXJV5F1fHi5jActozdkH12tDL",
  "key8": "2BoBSwjNBXKHUAgXBgt6im9V8WoSZaA129uFMqpoc2kNUrVAXFqFM7MBwwqeaPEinMVh7vqeU4XNeD5dW9P4N95C",
  "key9": "2nsMN43AhdGWLcnsWAzkMNHk7nJQQcmDDdZecA4H6cAyJSTC1uJZNNSba6B9fUEjiAG7tXG6mxHeeZcUUSKCqWa8",
  "key10": "41whfT5qJ1u7JQLf5BNXxVPRswSLJwyeaM3FJjqcyEqYvMe1XoEXFT79V1mcoZ4fJgQZJQUBqGQZarkWLAJv49S8",
  "key11": "3Xu2GRMAyMAvXzDkh2SraFRcWM7EHqv7UBanokjSRHBppEo1ZGTgcwXC3QxhtUxMPm8DWbmYyCmrtdZE8Mm7nNX1",
  "key12": "5MrYRFodkSxeU9kB6mDLgYQ9VC1q7uwiqXDM1rpiW6tRjNpGhrokAkaqUtWLYps1KDPJPbvgr3pNuePTX2ZsQ3xj",
  "key13": "2TwEsoZXEuvLmnFFVaPGDgJS2RuxGbM5wA9GWnEDRiminAHkJU8oog3GMAPYj99TSj7hFnV9tYe9W5kf4fCr4rk1",
  "key14": "5YCiipBSg5oDuKPggAdUMEaUwL6EGcgWhzqp96oYkMiZa6GxoMNKjb1H6Ak5BuKQUubRjyoXnKN2cYF9TiQNApeA",
  "key15": "2dRsuYZppscd22xBmYMLVApXMH6LkaKdMyby6yruyti3Dhbs5aPsaadhcEoBotK4FjoLtoLnva7eoV1kVUgLeEth",
  "key16": "2FzpXa1hmotrLZecC5cdteiJAJotoNCwBeNepn62AcZV4kR8iU336jtmFoCUBpvrSjxhtUpS21fPBHGWYKxCrAKP",
  "key17": "hXqSdqHTNZxiZzkLvL6uk1izPLPccjztt9NgRKm1ofqHgZKxT6G3CEro3FDghn8ishXHYJm2XXDm69TS8Y5sgGy",
  "key18": "4wKDkjBWXbGyj7AWvvHN5MhRt11TmvYAGaAoTpAxnq5RS6Fm1eGcm5VyNiPsMztwPX887aAkRvKsKSTP5eN3D2mU",
  "key19": "3E6unyg6F8in2RD4NuQkTQoZfxZGw8FRXcHbtAoR3XPLD8Tc7ZSrabX6bAFfNqK1j8sgQgXcZCkdr9KzvNXRJQ3u",
  "key20": "5ACMcxaxSKcgY6ZydUjwMsxRDPKtQnWRC4dWqj9V7gYA3oMN9CXHDega6iCSzVhRk5QjG37c1GiAPjETMQmesKh7",
  "key21": "4cj2yQmNCnijGWx7t6CAXYAugE6jKcrgE452NK1wbwLBo4DdSNwwSGVF2TjuRpdirmN3Cz5JXqQxUSbkMamiTvME",
  "key22": "5y74fv1ebf59ka1K5y8dDjBQAdu3MKdh5niijiqkRTzYK3kmK1CW3JbfagvtKd7WjdQUwEoffBN9mw2EpXX8ahZF",
  "key23": "3Hs3REFje7DqYu1CWgvSf7tnXpxK6S8aQGGggP5uTM1yCsbc1bPfkJ3esRFjn1zZT7Jbn2pjVxUBznikRhE2dCQs",
  "key24": "5uJat39dTunVBASCq7X7FHF3tw5jcZ6MhRaJYwmC3dBMafMumTCdso1xWqxb6So6UuP45BBnztXREQ1HbgMPPZ3K",
  "key25": "32SVAJH6YHpEXZ8Hu4mPY2Y63PknNHtYNrwAbrnhhKxBr7ZbJsS4xQyvBshnFDKSv7gfrifyHx9BJDe4NacuKJdF",
  "key26": "2DkaKxjnwMfyBjX54qCbsLLCsynKurCBpCGqjTF4tdzjajQtjywTFfqRCjXGHnhtwXYfHU7M5vaQ2gXg9qZ5RQKo",
  "key27": "D1fbx23jCzpMkMHLKSPJZNxFo3QTAzKgbj1jyojefkSxDRoE9qSd3MsTLgAGex6QZxUotCxwY4vbwQGisPJhdQb",
  "key28": "m5151dZPcz1ZAjHNGUBkSvAt2tgLapW4QsNNasQb9m8YStoGyrWEjsDiGCjqdTokathbhDSDNe6Q8GaSPgn1Ncw",
  "key29": "ZxU4CsTwcwGpswVH3CpXaveMUE9CbgSEGUyMBFjQHyvve3E2bZwAnKKQPnLL16yqX4DFNXMWTVXQ2wUYq9eetYL",
  "key30": "5rG96aeHbmzhgJBdFkgPCAyyqM1ivnG5obLxVmJ1cRNhvHF57DtkXZVWc6iXHXjpCe9vR5gZU4RVctCjkaDrRMfS",
  "key31": "3odFoCRV3YkxfRQLTV7GZUVJqLPKqNRfGooRKtF21XyMMmRzVUR4VpYn8xE8A2XMRjKZBS1ux98dQYcqvpnKBTAb",
  "key32": "2tMiv3FME2jZE2CZtVQ14VySiPgt9pacegfB821in4PLeAK65SR9qrDSmwBksLHne2ZGK19YrvKkZUvqeyq9oPHc",
  "key33": "5AzExdxSvxEAtMxhJeHjmGSYyiJ9XJjRqjpdFzUzwtBPuwkS75WhACc33pukiv851DHNTWTnSw63N7pKsT8UHN52",
  "key34": "5f4HTn8wHtvWZuSPRRh9PeYMZhPuFJJJsK6yPktiW2hHJ6Lgc2WD2TVYrMeqDMYDYZ8Q1PUmqXQVvEFYWBbMQJot",
  "key35": "GwBsjPNHXv9gZVAhWWGb1eiA7PMKehyZx2omr7dDCHM1xB23e5JZsNmcKZL9mnbH6gxmDJRLdfMAnZR8M8KdzQR",
  "key36": "3hCsEx9i5ZBjKhJv4wYvTzNDY6hq79GnPEXdtjxQPGek5ty53HSZMdwAQEmp8zREMwW1caVrAcisME55zo2a8Yw6",
  "key37": "J9yEXdg3SxWgbEhQsmiFnxK41gKS8hDZG95KSxoDzCmo1wQtWbZxHW7YRc5FAPsWyUBbV6PzgSLsy7DnkMD1joS",
  "key38": "2CMi5yBfF8D3Q81eFvPd8n9B9vLsP2Pj8EsLQ8bcTqFTCVZ2PRHz1NSFuCYC2K5ELU3iMxM3VMYRzzEkZzstQ252",
  "key39": "JEMyt2XYRsJHpAG8A7sm8rcBcbbkVh6GowmQx2PHQLbqupUWcVR7WJsqjV2nP5fcXKqLMS3HdDREGNjuCvPsbbc",
  "key40": "4bDNCzXRx72yHW5hoQ1toj6hUcvpkt22PaDvgWPrekPYZKwfEQQRCiCVCgw3QbNzjLUK5bUTt65wjrP1EaHGHpK7",
  "key41": "44fVUGJqob2s59F3s9DmUJiQCWUFR3vwmcqMN5ipufyAA46GcNiVmvp7Pp8UuL52kDpzZx5EnU2PYEaquUrAMfDF",
  "key42": "4puZELdNCKQ59r9TjBpxj3Cj3UXuNcaMLCiPCpQGpkjAHxkkfkNE8rvRnBGDHWDMhcB2R2zVmufZP7hkfuvAvr34",
  "key43": "4EP6ootEvJc8v5MCpT6QnN3GVmMWzjhwJjozD8EgRp7SeRETTQPkvfrdbv5sG8mR1J5VzKPqFG9imNMC4aaE3ioa",
  "key44": "gRr5XWgwYpG994DVH6uyHHte2nbyiMrXq7J7JTGTWE5WNp36ymJBEfFtFTM9NC1aWvBJwFc5Mva7gz1XN4b1ujT",
  "key45": "42jcWvgtBqA5GgW1d55DiioAcTcUMPW2CmhJZAq9YcXhp2Kqc95q2jMs66mXA733RyJ9rsxewcStznT3by9jULfg",
  "key46": "62jfkfC6xNdMUAM7LfamMTNFRgKncUMRWP3HKmMvjNaeJb1DX9xPAq6rJ4DgXUf4dferoMbPSbWzL7VvABhhzzXt",
  "key47": "G8LPFx5gXiSGQ3rZKS9YF1YfTbPuE47w5CpNtrvf1h8U8QxwFvWNWVnZtDBz1NugnjMACwKw551Pr3WSqR1XNji",
  "key48": "3smAXayB1GEpEH4UrwDGzexwtaE7bZD7eM5YhnPSHtBHmaacYgzEigSgueWRK4QtynvbjCvhXtGCGWrMLG9xCRaA"
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
