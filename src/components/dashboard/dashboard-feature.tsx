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
    "2FKyG5GBPDocfXWuoAjwsVqvCxia7CZ1PhdsVHvuDfG4xD8QjEbDnPpatUovh3DcemLjtPYRb8s1mEQKZdkztvbH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67SdeuXVNdFq5pYpDEQx5A6zqpuRTjJLKe9bzjDJihkp1fo3vT2LkqS4efpqbo17ZUGnTHjNpmfNr8JADQv3Syyr",
  "key1": "5ng34E1f4G4UA2eoUHx9wMYNyvTgXC5QsaV2AcebbnQtQ2o7WAvyqpGkFJUyqhAbe6V2KwEugiFC99WMT337nyfb",
  "key2": "HHEyMyaWVj3FVUspBVyCMyCZUD2XxCiksXaQuHEFdyXHn2vVsBsXEJmD4UmqVhj5xNsb2Q8i4SRqVxwzaNtuCiF",
  "key3": "3WgTTLxrW1T7aVgjBsyHjTpKDJfEQRpsevibh4k166KrJaU95NXjPbUnD5M1s1m9W59CMiJ4q5PsqhHfE7BA1Qeb",
  "key4": "5oNfSxqRds1AJQxnB9FEKxdaCVvZuhd65VetgjfQGpJcoBftVSdyVW5GTUe2NbKXqNjQUCrxuv6Pg7FqKJnizq2g",
  "key5": "64dhsZAzEYsHgeqfJ2mXqkostosQMhSkFB2DQNY3Rs4rH9u9jRKZyCrN1GeE2DYuU8PvMibPCCSpb2ftJRrb5fDd",
  "key6": "4kD4wsw9iSyNhnTJK8D8iCvXmxno9iMdBdjb7Vw9BxRg6JNJAtZNjssGhhaHAfFfmmRqkPfXCrXhvnuU1cRAwpZ2",
  "key7": "4EUoDHV3Fn2nWMEFdehfP3KxoWnQRQtthoQyq63kgrErEPLHCWrQapStCuJ9MiqZYFY4nSUghfiyt3FaFRr3r5bT",
  "key8": "4QjwbLWpM6s3pmr66Am3W7X3gsnZMtvCq7vnCPesJnVEMZYbvgp3itb269o4fYe3ZK9dJ2E1M3up2FMRF83GDtDk",
  "key9": "AM64V9RRsWKemoc8V9oHRYKBufbfaJ4rY5Q5b1eddWGip4X6Z6Qceq6yXrJFjignaVs4jqMZ2W42J3DS5FmWfkZ",
  "key10": "4aPkHY2VbNcrVm948egWXa8NhiuM4ipwHo51puZkbyJsCbms8GBXmQTUyF4fhrjSWNWrLh8nNWw685xuPcXUWTFf",
  "key11": "59cxnZCc43jEf6JWYpattp1bv7HdPwppLzskTm1znJArh9Z4V1gxYrP3SqteNTd4vZB5z4QjNuGCpvpneNd9VELR",
  "key12": "56GozKia1Z6srqdvULRAcrVAddd2X1tLNcKTsa2BJyYU53jxpCjqjFrhi8FeNz5RpXxQDRyR35815bxARifMH4Kr",
  "key13": "uPAzRPyHyvE13afNTHCx7R1MLsqyrQ2i9GrfM1UDC8LfjCPFFEhcTK8LXYkQuadaajP1XCLeKAvKHTSzFed8yfp",
  "key14": "311aUvBEPfdAb3t92p6XDQVwMvxX8vhsfJ3jSfoFVYhdEiHBmP9v3S59c3EziBZtvos4gsABuq6BAiBn8czBJYay",
  "key15": "F1Vy6SFo7RwLyfmKafaAAAfZQkGADFdqiQ9jrgSLJYDhrQo2D38p3zR12NgZpeaX5Vmyz6hQ2bkYtVVcpvhM6Su",
  "key16": "66AX3NgfMj2NXYmrpgUjfSnyALhxh3fgeJaH2c6cyBjCMTZGL2iZAE7pG26vvJeSBbrnvhupHgjDcQ95D5h43w1b",
  "key17": "4ZU9WpcYiS6695RYtEgfCTnt9sMV7kiCcWteEj7iYxjfKwyA413QtUMiaKRFSw54mk7AQsJQBsmk8mrcE13jy5jp",
  "key18": "rBEoMW7kKC9HhveCraeX8AYSgio3UzFvu9hameaiBNJzrMP9pLB3QZjomy1Z6P3PjnX7u76Ffhoj6kfbayMmivW",
  "key19": "4pZaHATU3SvktiFnD6D9kr2MoqG2xJnqemb4FYyZ5jguhAUpuAoTyNpvxFMm7fqyn7Ai8QtwhFyNaELWKNVHvKC4",
  "key20": "5w3Kba5zBizLUFaiPU5tQQfqSCayzZ5gK1M5cvgGADat4tGmvTksy4GmcRejxkcXepU7AekjLHJqxhNzgur6S1y9",
  "key21": "2eX6LGMzSUtZDDBH1Mq7orVoxWeX9R2KPmCFdLowP96v5u66Xx41y1EMnqSCkLfJA8yWbaArZYq64dxdsvXfY3P2",
  "key22": "552uX8iYEGv25BfT6mQxEJSTs96SFYmc3h1zMsVy5PvCaTX7Pv7VJY1uWxyn7V2sipDpoShFyzMyRrB398ia6Atw",
  "key23": "3G7kjapEkLZngs5fW1jjKSLRAYgA6Y1HgR5MadEfExkSwi7BNWupVf7AfBNRzUaWn1Qw2GnqEFqo3ReHDRpDRDTf",
  "key24": "Egwu3YYTvEquk6VkiKrptAaHD1nTkTtPVHPRa1CtxzGm7wMgVE5UmqVJcvtmSpv8yzEUkmZ337AwSkWaHcS63KU",
  "key25": "31ghjSo8sw1moyKbXfAK5TvUd71fDNsN853bKHc3cgRPGasmjue7ZMAVGyfRVRCT64zFNjTDmkR7gKhiXdw7TNNt",
  "key26": "3Qt9VFsYh3bBQB9nFzz57x5DYQXkUSGoufDVwqt8zBWF37BZ66K3vThbraV11TRRq3Km2hL6wkEMB4SxgKGAbW2b",
  "key27": "2cRAWmZSYiWPUoxdjcXf3CsmmvqnGfq9jZfN9kn9uAoy5hheFemW7bKRwZFd3W1n9Tjf9MNagU73bXaAEsiZpQHu",
  "key28": "2wYL2yKPmHAXDvxrYH27gnzVwXwgaopPfVhsUQ22nbAbCt4EEaTCNYeDHpXEPDds2mxkDAfaJRZepvMrfAyxZoAX",
  "key29": "42NhzyY4Y4JB6ubmLomadYZRrJ1BzFQLrCN34haZt6KHTnzkuLbvHecvRjosgRPNQqk43oGqz24p2BZzLyJpWhYn",
  "key30": "2Bu2ZLuyvtLjB1Aby3u2FSteVM1hByFW2AdZK9HnCFerKVefbwcAXM5X8vpEYzUz9AVJPk9M2EGUYCT9EZUgWymu",
  "key31": "2AvgpLEHChg3HtmQFhXwEVZEjQt3EVuN2UzVXPk7vjmynLcyu98i6JL5FkFfRaBbEN9c2xGM8vwtWoWYSEmGVuBh",
  "key32": "3fpFGKWncPNfbNax8oYd2vbXdCJp6Gah7ab6h6vG26jE8v9iTw6DrCVdg4Hnp6cFEay3FBggQaCDnHka9zvf6uDS",
  "key33": "39crmMmXkoZL7ndMpvegakxNPcnVeu5FXLj8SP9upzP7zPbF1AYW8DxjkSHrUPQ81ZaHBCXMbBiSAurf7ejeL1mz",
  "key34": "53JBwJYDvMBD47auz2bCLDCuh41V12ncTVegrP3sobVqTjmNee6546jhhiAcMWzmhqR8MBCUcH8j95ibbNqZE1D",
  "key35": "5Nq3BPJVGqtGjBVpMivAY5KPBs1iDpUxCye9Hg1vjmU1uDxc6pRwCs69JhoN6F6ops1VaYpLTmbi42eRScTRhdwt",
  "key36": "3cwNajERosqRT65RdvHopmWMEsyLMAJ6D8NEuSFpeLKA82xuk2z8vw6Zf1sJNdtVCRXgJ8tzc6LoffHjH2wgfUVW",
  "key37": "3tGUGzT6RkEvS8SAoFHn7FPN3e9D62UZV3gFQHkzpvjAq3Te6qCZGyTg6NSTS7jY9vBYpdCtAGJ9reb321CssQcZ",
  "key38": "25ar8avHELJNRS67qhFXHLd5FitUHBEjDxvehvMKfkHCcttSFQYyZvGM1nAYhXFV6ykAUDSMqLgyJxPsB374tqdv",
  "key39": "4L5bs1SBjQ7fNACe7Nk6P4D79gii3JgUM5UZq4bV18wcZSRnCtt2suMgYDgj2myuNkc8B8tLA9zkwV7rBvr2QAsM",
  "key40": "3fs2xameHYeYhicjKRLD2RPmM9kEZ5Hz8gH8xueQoCRr2DWMXSe6h8Y66RQeegCHVvbq7UGavDQisxLTC1763VKj",
  "key41": "81gVLqRgH5SYpfwHkdnprb3cfjMFhhjBwEtgdt9724ywdeBYyACDbiWuFXB8MEnpSF1koTt8MwUeRaLuFEVzEQ9",
  "key42": "3aS583eDdgJrRBzszRYqzs17DazoJDavyCw2Fmg198aEzviqkWXT16QyrNstwvh6B9Gv48xUbhRW5TQWiV8yW8zc",
  "key43": "4LF5D7PRKyoWHLmH8yyzQbDQ67uiicXe8YM5YKpV2oLG5ZWaAjbtUqRy2RokARkJgZK4Ep3RRwsA2AYnoyDqyMJ8",
  "key44": "2VTfkjEEst6EhqLCqrcNVE4aB5nms57cXZV3x843Tbz6j1FdsfVvTJWz32Qfhd1Z9q7ArGV3EPNq8wQNsExh7irP",
  "key45": "3Xg8QqLce6h84Rk6nS1Xk7PAk1qX19ZzEi4xH3CMpTihcApUaXgPru9enYWwoCsAAHVFByrHFH3KTHH6Wfm9yJay",
  "key46": "3ZR6h4VAQ4tE1M79bP2bQKfRpSas47Qhy2xC7BXBq8VdqNB2dwHQZTaHphchdUUqruUGdWHpjb7T6dhE4xFugfCY",
  "key47": "43LWFAYYY5Pq5faK2N76YhYfn9USqRuWhYGZ54F1aLSr7XHFXtsZxqRP8ZhuL4WHsSND8foDvBGJyQuPBrEhRkt6",
  "key48": "5j3TvFJYbSFrBuamETaDaSEV3KFfREzJr9YX8tf8QsE2LjnEWgqSkwKL1WAoLDHMX6FrfqaGboVCTgABZ4RRdASb",
  "key49": "2SxvZtmgTaBu8UeAMNbJ1e5UYktqS5L71dVpZTcuS1ty12J6xmkVrMYB9KWLRxENmiyNKFZQrczAv9LxvPJ8s3qU"
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
