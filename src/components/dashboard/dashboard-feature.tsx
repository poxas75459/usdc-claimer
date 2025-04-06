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
    "h8iYSCUwKoyyfX9VWGycnBbiVBdvjQpiBfQmtoHPPaN3uoMiQqUyctAp8zr1BxA7egNVAkJyVi3994ZKKcmWg3z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s6pry6kr44Cfy4uCGvFZzbNwh4T3joxHhxcfnJBxdhq7v6SJbdwttxYCVHoy4W86xCM5F8uX3RzTAo54kpRNFVe",
  "key1": "3r1TFosdoa7jaav5UeSYfZPgLYPCNi5dyJBeU4xQoUz9CjXDefW8pERjib6kyyyj4KUVSaLyUWdoBzXYs3xnWz1d",
  "key2": "fDe9KYYkWameVWcxU8m9MqePsKhCwkZBsNDY3SSrfvwhfDJzhvjiKRdvQwJQcTDLhD29QquGm266Y2jbm5Lo7KL",
  "key3": "vgawZn2ncnQpbPpdFGQAjUmZwJoeHwXisgM7Yyc7e5uARXQz4vGZeGoW2TfcfxewoPd2ncRTFVsMoNmKoGDX7f4",
  "key4": "3oHPeC9Rq6BB5ecJwZNqcz1S7GTzHJmLEp3HcwFhc7pVCwnCr1HMLZiyKUBMZzrivaP7qzi3hn59YNShNdWmQ38x",
  "key5": "3iVM9gHC5o3wEPmqWzWNUVGtNCgbbWNC1ecST9XpQXfgFekQMPHj1ihTCwQej7YPhZEEkvoTHAEevb9VgUJkBXhY",
  "key6": "45p4daNZC1aNUF9DML9EC7pfiWyQcAd3s6FUUiQoZE1iQsLoUec3QpidDC4URwPaJZhaVBNZwDpsxvCuhnhDXvwC",
  "key7": "bPuTJEWpwEdXi4N8C23D5riRqgqaKTS8eqshXdAsS3av5HvRCorUw18aKWbHdjJgHPsXvnW5Miqf74zXwHrUGZz",
  "key8": "56PkjLKP1EezxJWv4MAbmc38CqKTM9GEPUZ8opjFngyAj6uTDhoLQoNF6wYM9aKp7s2wAY4G3LowJYkzh95xwByo",
  "key9": "5D5vnToPMGERrgWAhDrR5ygv6KRZggNwxh1udEmUi3REMzWFggQs6C1qVZiPiT8EF58xg1cNifqV4PCDuzyK66ht",
  "key10": "5FPMq8UhLM8mPN5XeAEgdvFRCwnGn3xnzRdo1JyQkigXnw66u18ZA4EW8yFDx8zT23i2JKEPVWHvvHggkYmRbi1i",
  "key11": "35vfYZJdL2n4tJFEkocmHZVu6LEYXJYJWKTob2xiEXQ1rQapCquGrCE4PzG6z92X1fCMjpHasJzKRyE1doKKQnex",
  "key12": "27ZMf7BN4ovAayrJQN46xcayiBgdWaRjyDTZeFb1zddMPsUnTxRcngNygd3LEzNcg18ggUCyGdpHbXfXLbw6cDck",
  "key13": "R4e3bLUGxGo3ipuCk1wBECbbA7vQJWzH6HhhmBWRLzhSDPW7UDcZyJhDUVDtkAZMhjzH48pZQqZfbNzAQ1F5Mpa",
  "key14": "YuoNcz2LapCHjntQ9GgjKP9RWFbdiwuE9sQ6EiVkVXTo8vrTajT1TjG4SEQXatpvjiGYUjqZm8HnsAJrjLKoQR9",
  "key15": "5bX9hZ9Simn76i29hU3CD2iKtgAZYrLAKPDmD2LngGX3KAJhMgFLtDy9gdoJLfKHizf4PhjWgpo1yik37ckvYJaP",
  "key16": "39fLyqDsVWp1noNeZRw35zVRvBbqdg23ZgsrhVTjfV2dheMVwfx6Cysv3NYvwH9tWLpEK4dGKzmMS9fgjkWxHVSq",
  "key17": "4u56dwVcJYm5BovcCfKMafkKfCm15hJEG5ASjWCenJzZrMabq4VDtQJqPjnRXFE9Jv6SLb7fRneVjir899TKACf1",
  "key18": "4Y1mahu3Wns26mKTPy71eHi9YZahsXahSNgQUeiFYTSsjxQYB3bzyvww9ncrh4DXcbiQWFKipYi5soEg5vRh7pY9",
  "key19": "5F7PTWuR1uDR2YiqncpjWAYyzNmAXjVTXXe9MvwE5LRsWEsHRngiGY716ogK1Z8d6nQCHXy9pZW4VgGKjVUuipA6",
  "key20": "5bJ4rkgkYinxPxjeynr33Zj6ZX3D31eyRQhniF8hcjPc7n6xZMs9rgjsezWDkpeWjtFSRsMEwVxTfEUacFv2ZKn6",
  "key21": "2CZ48fvWVQmeF2iDogcJTzqTUiR21ZSQ92aA8137K4Qgrn2QdxNFX78W4gT3jDZKRvnN5tAgrX2Cbyi6BWceNFXd",
  "key22": "2Ga7kTtKykUJfWm9b42uf1Uk2GkCi41yEu7x6VXq8p83FprhKm44MJKJxV5caC1mqAanQ2SmibpWrQJy95vqFcTV",
  "key23": "2s3CCSxEtcMU76xvGx56A7vUVFktR575nhZdWbxJGsJ6wGURfxkgAVQP9XcErJESAYfT4BPq85sjLmXzAHzL4QW",
  "key24": "2q31Hetmi1C7XZ6f9BvH5vYi2HwP4e1ouhbTP2PKtP7XbNSNocGGBqQ8bFE8sqqniyJgsMqTAxwv9DVoaw6rvetE",
  "key25": "5fcysA3j9E5FNf8RS8yB63Etm3WTWFhDxALsm723bS9ZAnaQ9yDEqG9qtZbSWg3TYvtd8kJZ8pS3wXvdQWaN6SZZ",
  "key26": "zxidu5ixsfKVTNv6Cw35UxCVauidvn14brAkms4rsYRUPKrExV3KVXtqpKTUXA47VWS8btScH5go4Ei3VbVDnpp",
  "key27": "3t39V8UsnjBh4C2nNggJpeoSskX1H4sBcqt4YmRhaSekvVRj1iGUVgaMp6Nt2w6p45jZT9Dr8QfGXXjui4DpZ5Rn",
  "key28": "2NdtqzB7Y3so543BXoHrdzQ6pU8DZ11QWKWuFS32j1NoXiDDi6oRCBeeHnKqGZsq8YtYHHpZZoszrNDEJHcABJs1",
  "key29": "Fj1zVWJmrUQJ3SY8xfaWCcsVRqdGw2cWrD3nqUAVX33MCRQNEarMhdGUw4uFrZw2t2nfwaJSaCYPKGZgVfS9tAn",
  "key30": "4e7aifpLq2s5Ei7U1vCver5gYDe8T6eDZDCRyk4C2bM2YULMwBp9kpbFSouJtJzbrPboxBMR7dXSeEo1E8YcvBj6",
  "key31": "56b3mg8u2qGCMU6oaasCbunjNs4CmDVfLh1kAPsm7VyXm9yQkoq858Q8syh3hxcjEzghMHwv15xvuLms2vWy3X2s",
  "key32": "5CvVBu4aiLyHMmSLtRDTQ64ZsNbSSHjBJnznESUj1ehfvE2k3DYbRow2d4sBCLdUuSLe3UUC8zJnd3j5dYruTkWd",
  "key33": "3Gih774qE2Ai6m57n1vdxuL6DKfqEGqmLA2e6CijaS3XtURUX9Kuk66xo16s1ZtNBS7UxZzhXXXsrCNJ96GHZKbm",
  "key34": "5zu1CXdvtVEYGw4pCjmc9mBoqaGD6uokXrUazLFhtgueemsffRfKCm2ANMRPhxrUt69nta4DmcLFtZXAyGPajYeM",
  "key35": "65WoQezobtjfm5TeFo2djvJSC2mkDhUg5vKMck6MECV2Tkrmv7UjJ9QBqZGZrSYhDBHEdEVYXtWkA3MTCzVMqCdi",
  "key36": "5EPJ8jZfgPNLiJhthXsJa7BBaXeaSUAdpwP43sMSMkEHBw5GJE3dd9VNeFTu2CCAUsxGvANonwL1gHTuKmymj1yE",
  "key37": "2x1UTRCsTkjmvtDKE9Jh6nGABGfWJVJK4vDpgswTNzZ5785Muj7BMJK5qrL7sBMYd5u6HqSvYv8v2EivxyMyjsJq",
  "key38": "2Pzi2eZSoyhP8eu6JKh8mgbkGXaYfm4kHd2pBdWaJF4ktc2DZiLvUUrAe9DnDdG8Hw52AumkUgRj2MtfwzD7GqbZ",
  "key39": "35TmpzyZkqdDbfUrnMS9UoBeqaDshFZWKfGCFkC4q75tZjRyb6vFPDZpTqYmNgi8UpzJqdeNJgxANkxARomUm8JY",
  "key40": "29mRTwv9BvXW6vgfhxJAs8E9mwVQ7p8Btg8aXt2UsWUugX27mUbHAbkFtSu2wYNA1MXJNysSzr8NE551F4f74bk7",
  "key41": "LJ8qLxxZxKeP273smxDsJpcU5YkNjwbfGsL2uexTkmkwnUnwfH2pBvG1E6u6p7o8jMd3FnMPNQGxhAbWGbg5bnr",
  "key42": "5nCsTr239rM5tBJdUrU3UA7c8SkvdEbdWxoghowTiTFxM7wTEUx6BqKw4fwBFUxQJtB42nARsVo2sTMLuqADuewu",
  "key43": "JWnxphJ1L13awdFWB5nbWLkrbFsSRWKF9dRH9RvupLGHYHZratzKzZPGQnE7XXLe3oz6H72u5mGzaCjZpX6JPWQ",
  "key44": "4devbAkoffqTncPETPrHpnmAehdBB9PWiBmZqZ89PGZAqpgohF24YZEW58s5N1cfsT1xthnT1fkCr7jjMHTiYJcR"
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
