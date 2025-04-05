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
    "3hyqFkWCN1QyzYdV15vmQcafgU25rx3WW9CposdaQQQKodKAY4VcmYUm36YeZbouHY66EaVkHUwrS8JHQa8pwcuJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ymHSXSGKDG61XhZmKuSTnXFgkvoZM5bSHdQtwFYzL9519Ytr1KPw4UqSK95T36JAnkBnpiF2xKL9fN2EzVuMPP7",
  "key1": "4BteETuRh7Dsr4U7mEMBjvDgeTjXFKGtXMsz6ens1ziFsXKYyW3AAzS8wAqjbW9gSmcLA9i11uxgMmwyGh4XGqwW",
  "key2": "49mWWGAU9ARPLVDWUKd1HzdfQGxabT4PF94qD2EqtJWvE2u2g4RrJeCtPf6Zq7L7ZaR7Aw8uY8dtaiUAbPUzX4ZS",
  "key3": "31uEnrjtHHVX7deTfySkKbNM53WsWhKhkbrnNs3z89utpr3kb3Ncv6vtWdc4eA3FxCYMeV3mnSRoVZB2dFnbMsSC",
  "key4": "3yrFsgTertkirtKWaDXxXqn3rbCki4j78n6kcLMsPd81Fqn7MM1QjQNKS8QxQw9zuuK8ep3N3DahFtNuMhxPSV73",
  "key5": "4c8usYtVLYsyKL3hR1PRuV4kFtMwnk6BeAd9TqVCEcebcsi6iW8PXXn2BEhCTSQvHbMyWs336GDph6VKm3JVEo4X",
  "key6": "3dcE65cGXwMnqT4pviMPg6FRaYkHSUb2cWqRVNxWoPvZWZ3gVh7WJgrUfWADrxTBU1h3rqYKSN87DsteCZJmw7oA",
  "key7": "2vgfPHemDZfSgVX2u3H8Sk5h61CwSMy2zzBrpRBnobdGzMF8QQxZxqCb5vSxHXQQk4V3kPfV4SfpPj8qRMZiaGrW",
  "key8": "4sPbayfnEmRPou5e5TT7BRp4mjk7ruif4P6ZPezuGZPDYdYCB9WBcfCAxSkdoKgajgg7wzVqXh5BUDGjSMoEkzEv",
  "key9": "1ua4zqkmT4d54hg8eatQEwRZFQtM72mmxce55zwDSLn8hyVxhBRCo92Hz1oUvF1bkYZviT53Qt54D2FKSpfcvuq",
  "key10": "4JFcwGjY5xfL4EW9SUEUhmPDRMEY8oU8HMygWmjPfyzG1jGFrBjwCTwVGQgZtyiRZLNL3gUwhW48js14fkDgDK6d",
  "key11": "3us9qNyNbF9tnXNpkFcvrCNvsqgLY7xXzjcWZp6SpoCnsNUFv9ph284s4fbWH8BAfQGDDgtzLFzStZiPRnDWHdPg",
  "key12": "5HoehFzihxwwJW7yU9ux8ecgiFaXfkdCK6cBmYSzNxqz9xTppesmPqKAx1f6TvTHgmnfnq7AFZxjPDPvFZWfM6cT",
  "key13": "66WQwPuDvejirgssVX2NeJ4QPHp7QFNKkYUUHXo31ax5TpWaiLND5cDCqFkatqJTJTUTW5bLabGLjTDfc39R57HC",
  "key14": "2dWvAwa1tUMm7NrztrX41AWPWo5qwZCihT5sp665exWKCZXxmJm78BKaVtuD2muGwh7wUE2UUduM3VpEF47CsHm2",
  "key15": "2DnQuMMygTt2Av5dU8siYusJAwYVRhLJ6Qyd65KcXaAaqHoTX9eAdXJWRLYN1QjgTMVFSQFVFro7swaFNhtyUEbp",
  "key16": "4QVg2fv4HqvsiZqPXdcDXC47ktAHB2pVf72Ld1JX9kZYJF8wwCcwaHBL3TT7MqP3usBFfYdqMNX4Lo5qExRiNEhb",
  "key17": "5ghJZkpJvshxrqaa1Vq2Q5GGtiQYeEDErbqCbMBmhwKE6uapRZ5oy9DWTXne9xi1JbjKq8ZmvvAg634tPVBAcQaN",
  "key18": "3zrbTfiak9TsqugAisgieAdCjhJy9yEXZgFU6CyrT2FdaM3QNumZAE6QKBmdVg4HosFpdKeb5SDgep1D8cmfffRK",
  "key19": "2RJ7AzT9NhkeJabZjbBWfv1FUGqtTJbMnUrXQvD5psvjpM3ERj2uUU4ZETcLUgUPWUYGkj9i6J9pyfCpBFyHM17B",
  "key20": "5GRc6Ci9vmQF1HdGtgKiwegv3BqCbkqYA5heJxnYdXwmysXKnGMffXGg1VvTW4qRWYUHrv2znoBZFGWNYvHHUQ1s",
  "key21": "2qaHp4FWPZkjBA9aGTt8kYBJqmkPrAdBx1Kc8UW9uFYHP9rHhmXpRYog2HiiyujqrjGbVM3EqB1S9EpHVJyvWU1R",
  "key22": "SRRwxAgfpBZS63pu7dHXqcvii4r3WsvGYvbXiH5cbfkAR8DuByEwXfEQFVmLBkCk656e4yBmW1DZQaMZ6uCJw5B",
  "key23": "4Aj1Up9UiLwDzmDFpEnND88YMjrX1PRaLrvim29zFNVVHN4znBoXkBVj9WZPGwj1hKQPjmdVwqXXLcSExqUDcRHz",
  "key24": "9Q9BBasP6cYm8QwNiojmnfsTPdH9bVwmWSd5jVLsBb6V1tR6j9A8bdVtxkYvRESsJjZLzyDFgRWGSEgtC4fHdvc",
  "key25": "43hqY5b9HiAzELKrhQX1JYGMZYHKnz2oLUyTfJvqiVMdmTmQJJFQv8n2tsyX9UHBhpXtve9Dw3yWiKs8PuFKSZo3",
  "key26": "2nqoexfAyWmZMUf51KB9LU5rSyh8BA6JL2XxNbHnWg7gweNBe7vadTwDdKvD1A2MjJgPaTDNtMZgUyV32sxDm5jD",
  "key27": "3oVHiYJP8G4KNgwEa4qUi6EkunV8AUHhpkCNRVDzY2EPL7e2fJafSx46BvGfV4BQLfxqZfTc6ZwM9iZ6vYTjjbjN",
  "key28": "5hHWRHuY6EFKxc46cWMrx8rkctNYWJtVkEC64kpDSGHfQmZQoQDwDx7jGHgFk7MPPz85RAyaZbbGN2N7VHyAgvk8",
  "key29": "2swPgX8JrNaG7guYqbXAyt7ApsJPT18e2qyPDGFTfAKDJ3pG2iMntDkeuKFaaAxPzCCWzZQpXtdHemm7xBh3EJ8L",
  "key30": "3wWEynVirtezFTgzRJxesTqDeJUg7dmgC63JSDfoaV54N2Rxak7Xs97FTRCKvZxt9sXccNMNCgtUZvJN7qUcHfhK",
  "key31": "5DnKbNgNmjkSVemeTkgn5FjGfE1dKZqv6bYGqHtWVjZVPySKkaZ5Ruz94uyacLcQG2TTdLMPAMzeijfnDRBTEAcS",
  "key32": "5Fmux9tsGhku6ZcLpEKokDrRqtZLdRVhcduDxaG3E13ZVhFLx21oWVnBdM4aj6zBmAoKVVHnpZtWfrzWnGLHiAJm",
  "key33": "58qxBcgUFPXVECwLskyjLBnJqkFPjo4Z7uCxp16uR4EdTai8xtLZQD3iqKk4i3poCqu6ZzXYypuxUBeHNezHzrdQ",
  "key34": "4vBbTwC9QrTuJPgx4VPhfvSANdqiKWrEQvPycjWbaAZkiHCh6datGa7dxpiRyhz6SpnWAqrKuzRTazL5bvBjg9vE",
  "key35": "BwFMjCQd5Gp3MMd4qNdy9RDy4996KTonLdCdy7k2c37WAbRjCgNbTB2WRbyErdidbCbnx1GxBDALcH81QBAu1zW",
  "key36": "3r5PPMmuPdaLJpDB6TPXt5QTraK9vcWuv4qGKLMFqwwy93bc6wugo9ht3Za9B5fhCrFMZTUy5xHt5jyB1SuuXYB4",
  "key37": "5sMfPF7NPqa1JJyMxM82fiXfc7HQVSHVFWw95VWW92zGWmm2uT1a8RYMUkfAqQLsff1pvCqKzFkBFPg8y2Hada8G",
  "key38": "3FHY3ZpCR4QRzeY5YjdkktEyQXK9DrH1vZCjAyxVkh2swc61nDmRFQTTCenQvmuxn7fJRsr2xWA5ESLC3jT12rmN",
  "key39": "4EdCQD2R6izALaWbmGg7hBoyh1eRQtrhnJ1PBfY1PDZJRKrtL9F9ci8nkWTWmcsjZ5JXHFybv1K1htitPKE1gY17",
  "key40": "4pDYBJqkjmzqqxoPjZTSet2LuLiz7Sjk1nTTSSLwDCdR6RfT4z3cNswW16M8k2kuEAgBzwhAWKKeG6GtL1GbaqWV",
  "key41": "4KTD8qtXM2exGkVSd67t4xK24Rzykw3KBcxpnCKiGPtsMZEjHxSntTLD4GqeXvf7HzYwJ6RLFFGjh8BuaB8kV5Ry",
  "key42": "3BPttVzneCyPdESZiphPENuVoyxWAqqfka963CTSa1WZUoE8bE2hfbbyB5G867DEyEJUu85PN2XT7AomaaxhqESY",
  "key43": "4ry89QdDRBrPhxYZCMeXNwQPHk6xt2Wjvynbda1hGuaW9zCyDi7p2WSyQzX8RTf9JHCn8A1ZpoPfDWHJFDWriwdM",
  "key44": "5P7fmEZQueQzwdRzy7qGzEUbJHveYkyEhkGUi2ZwfbntPNLwGGVjRWMFdjbzXMfHEpyCiqgfZVe3Ds2RG4ajsCAk",
  "key45": "4rDNhS8p5Hv2axFmu4xmTpsVtTJSQRt3NfqrU8NdQqJj1GX3xZc5XviJSZHYctruYAAK3k1QDyDpbZQ5JpaoYVQW",
  "key46": "44p7Evheh7C1kTmUozaXVbbLCJ4TA6VMXfuubAixJiCBhy5R6QuQgPGBsHx52V4Eio2Z1QryRUmLEcDXZXhwUcoc",
  "key47": "2aMnpdE4BU8pC7A7zFUaziLae91AsxyshAwGuGSSz3WdCAQjaid9nEWZfHyWcPvdNzDKqCChLj8iNpm4wqBxsMTW"
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
