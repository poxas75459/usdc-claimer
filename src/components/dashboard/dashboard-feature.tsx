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
    "3ZKLfK8Y4t35Qf8RDmu8hA2titVxVJ5xHgjDcDVuAp6inP5yzZ7FyDwa6ykaTCFTLga7bJ4BHqsfahGJAwZSKebN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oFCBFfpYtLSnKWduJBesxN6VvCZZRJ2FytHJnLAyTp6meRVAyh7nwdnqe1Z9WHmCaQHqGx4TH3SGiqaxN8rYYLm",
  "key1": "3LQi9xC6dSkfxu6rYumyzXXfLsvzZRP1GwtVx2SWBTW8Us98kum2uC8dNAo8pU3Qev89EuiYYJ4QvNSHyHrcVvND",
  "key2": "3RqyzJnxEDXhzzsWb4Z1FVqhx4XJMskcRukHmjx74knCFHFimQhNcduP9aX4d84cJ6uMaaMThCZsxmnb52jzq7xN",
  "key3": "3TPBNBxP2HSAp8n9zuz1KAgf37cq7dLtHUGQr8M7XNJcTgmaEXSsZMETEAHQGUTPfc41f9REgbCPJTtredgsKSkF",
  "key4": "4vhgacWuDP2u2T45f9vN5yPEajDCQZpTufEQC4h7VYWwNFqq7hJRfftxwBt8GuVdHtaVnxbTHGdNA4ntVCULKbXf",
  "key5": "4FsarqvtusDp6A7SdnEmnEoYTxbQUe8x3CimmdQKS5NVe7Wttyc4J4esxzDCanhazNrXVKWqRBsVCu6hNHyYHMCd",
  "key6": "4cSh8izKcuDUCiKxZFEpFZoZmK8uHekgLD3Am9YqmcRe5YT4oozimKWCfXMQqSsUD8uB66BCQ94qrb2HhAFZsUZp",
  "key7": "2uCBKWgrabLosLkkDvaFb3zerpJiywnLZnKx61eUWuRtmYivxHAurqbbbgBdef7x8VGuMapVfVoZjnnGfHS16prX",
  "key8": "3Vp4pY6MSGjgY98DgU3X2EZHQNTn5Xhf2ivFH4Vu9Dx8VCTK1mYm7Q3GWWt6Yz2a8R4KKApjqqBz1n1QJuUXh6QE",
  "key9": "58LwqUDE6Gw8yvA8C3Anp7Nfw8FF1DunZ8TgJdrWqcNNhc2J9yZnqn2LLtkHyAQCGFjLrWhPh3zr7bARcAiqrHVD",
  "key10": "1ev5DHaSuA5Npew6WqPLQPB2Ghzve9w4j7GLHZoD23NE1wvRGiLGMng4K6qvEZSqrCpBiWDw5vEVExmFDrjPZyX",
  "key11": "5p36cZNoGyuR8j8wfRA2wZ27m81tA4CkyT5u8LTZ9YdwvSZhQWRc5gejCyR8aEBdyxGvn8sqKg2p68BK6Kp77pyj",
  "key12": "2mYQBqviTQ3b5r7BDxXPbufc48oFJGtnsR2ByEJR6QKQwvdpJMLC986uJfHTiHtaGH8wdCPPoCXnG9XA6nergPTh",
  "key13": "3hbLxHKQNkYMkyJbxQxzEeaKnwJtLYpbR5b2tnQ9QmowPDYtKhyq1EyeUiFraiNSno7HqvUXJwpTQdLbjDKtDvFo",
  "key14": "3WixExHHoPaggeKfux5tkAjhm92gc9DmhE3Ymoaw5MdHz247d5R16NJjh34R1ugDTvQ2sBLqXMmskvgU7Bkqauy",
  "key15": "4X6vcwaJdyEG6a9Z5aVCdruqW5jKrVZvDyihYMjzuuzcWijMA6kNdLWG9HFvCCTnWk11P4xnnZTgsppd1kAMFzvv",
  "key16": "55248Sz1gHnFEeVEt1NAkSDNUSGDEJBkzNP4nqR2b2PY4aqJZuSPUwkeSwYpqLm7rgw3S3KeR2m9JWmmfMLUYfhC",
  "key17": "62tF6kzE26UF3aLFnmxoHpZNryTKZHff87zEJbH2b5PAv1nrWyfFYQZEKttLwYFzB3WB2PKC8suHcC4xRMfDC7fQ",
  "key18": "PvBzPekrZnRQBDwvXttskgHJ7GReoDvYte1FQWoMXALAFQN5qtgt3rnBCmTgo8SeT8WSQ2fxNNrdZ1o4r3Jeux9",
  "key19": "2Eyzo2V85D3bju1YRzYYbzE8WQcpPWu7qHFde25JtQ7WiQwTjRJwDog4HuTfU5wVpqNZ3oDydGQHRLr7HGZE5eSi",
  "key20": "4fWZ8jmKzAHrTi2kD2yGB1tuHSepUKAfSWhb7wGzW4MmJ5r18VPqtYfZXH4uZJENkjp7CCsZL6btF4VW7Qg2xLaB",
  "key21": "4v4iksxrrW2AF9PxNDdAi7UdPcoBQw6XsFsRC5Vtx2gnJHxahCsYMkEFsTYaQyfkpwr1gjXSiBWqpDe7ogBdEYU",
  "key22": "2G6y13ZPjCsrkoTGtFBxEiMVjek8eND3a9NnF9tcdzEtiB8tBy8672sfqkABagppfsfp1t6MoqppgZBwk2GT6YZa",
  "key23": "5uZU6B4FMq4v4KyfkSgisf6UND7voCW1aG9oyZ25vJNHTQN6hgXPqo8q7RiGKX9Vr78Xx2SfHSzP6miN354c6Tb",
  "key24": "k9BVNwvm1gQbeVaw8oAqwnD7saU7qpbCs11iBEr4CNCMCnwRDbRxCDdj5po7qUbPSFVZBNgKAnKFLYq3u3KXZRB",
  "key25": "Soa1ueiXBnp2KJw1LxYM37UxbrbChBSVGGxYZWmonuPA615qN23vPYxcPzCeAJBzFNmUx5gLiZKnXVvdoojF3Va",
  "key26": "XA7M2aPByYm8PhUX7ywrNLnL5LPqVupjeB8X83D2J4hJfTfJfsshfyCXoKsxaytL9T1FcwJ58HbbdQWfyZ7Xji1",
  "key27": "35SnhuC2ERJaNRhbF6NfckDoQy619FmNCSARjTfdgdH9CNki91wu8UWZFpXTiF1GmRpH5LmWB3od44dUfwJWuheE",
  "key28": "2r7yNsMnZRBnAxtt9hRtz8nBTX4z7WHHCbFfhcsukHKwyssxkvYFdcrToCGkTwDdq38Xd61s2nthLvhDgTzDv1vz",
  "key29": "2h2UQ5fQRtoHCTJu1v31kshp2C62Ue732jjwGYAMFD3mdEdsqdniz4bby9qzJs7sWNd54MafdNxxsV9r5THFp8MZ",
  "key30": "2b6xWL6BL9RtFxd4TnTHmygoHzsCEmN7qP3vNjNECmYHzNnYbtdRzgURbYeVZAJgYRC3AdSVvDBY6nCfLhKt9wf8",
  "key31": "5gM58PschTtWZKdQGwr9S3mREB1TckiBQ1MJNPDoa8X3Fx7cRefhwPwzUdGpy9w3WTUuPoM5LTenTnWExUYnvBVa",
  "key32": "4mLaAd52pxtFwsfpRcA87r5GT2kQnVLzvH2iVSCNTkAxdUPnZ9NLuEkstz4Z9WZF9rYmPk2ZnnZ5PydhpYAWi82F",
  "key33": "NySnp2zwEhrrktFTjXajd19GEy5Pyvp1y3icQPby1CzFvvccwNCPkTADMc8nsgCrttXNNFVH1bv9doCNtmPDGvV",
  "key34": "5DP98wP3vTMqoYCCK9XHLnPs5xDnENvzYRoAxa8PxPyQENZAuJxQnqEDq1xLLQF1m7BQCtKJSAP833GcrrCiBJBv",
  "key35": "qAUMKWoL8s9Tg6LxhsnrB2yFJHY6x7vo2ZkPjAU67XLbDKDLY8HzXNs2YNJPgxGdoucnWETeuDBUsEKA7m2xpkD",
  "key36": "675jy4hxv5yPPWELykdSopYsgmzMdP2KiKmaoeM8Dw3Nnq3s6Lrrm3ozB1uFaj4Y2qkx8zqSrR4DBf9vt5oKgxQX",
  "key37": "21Tr4FZVvz49fH2J1iXM1C7tPc5Le2qVDnAJMCpifRvcgRByC3UvLnzFaHfnTXPDxf3tLa2CLMJrkEJXytCZ1zPm",
  "key38": "38Dap1MhbgXXrrjPDc2Snq8HtjAeytPFPLMgffvPUmA76Eav4w1Dx7FK5amrRZK2pFLTTmKMfVyX2SbdLow6xNcZ",
  "key39": "HsmgV8WBq1krHmutDru9XDfpUwnbggb5bQgu425py4afQDUHWxNLLZyu8sLLAVr7e2KSqVkCUTRGNXPC6aKMnHC",
  "key40": "rnyyoF4VX7JZUTMwZH3cEpGkQBnrA2rzCoeHctsG5Hhe7fzsSKx88pnqrEv9ZngGk9NpFW3pZvM2nCrTHBMqNm5",
  "key41": "4o4EqY2YxTP32Hwu2zNHcemytDhfqMkJgkLYKBPjXw4FhvDJPwtaGYpmpVbCyg8tKnZz1YvjHhsF8GwU7ypnww5r",
  "key42": "4hED1RHrqyJd2PNh6tcbRritEwevFakB24wHYwPgBmugMqXwkw3QRYzR5EQdpLBgkCcn7rHNELFBHZ59NUmGABK5",
  "key43": "43acBvW7D7FAMinFnvK8dJ75dJHD1rEfqsSnk5ZBaBMpcmjSCjkK46bhpQhfmdH7RVWVz33LuTdAjQ68uAaasuWy",
  "key44": "3mTZdseQ3oMy1pSeAFBMPHYZ8mvUGLzpg4jpyFkpPQCxpdyiLzuMBoyd6zEqmp1f6NScjMoJVqsHe6e1EcsGPaHP"
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
