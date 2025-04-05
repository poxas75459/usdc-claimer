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
    "2GK4y6W2jxMHjJ6AqZ6BfTmThLaHZ1PxkHnuPAx97eudvGshftur5vuVPGXa3AnzkxfoU4g3Jec4f5ECCMAM55nC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xjWUVnGQyLdxCS54q5C8oHwJwYM38ZoLednWxcK4bQLBUvEXv6mbyZkA1zS3oTV2gWEC2534azyoZ2DwhyfdC9W",
  "key1": "mr51Qu1CyTqTjAJiajpFxChkLLSXzwZshw7JJ6u8yXTVBPiwHJGhxTr9mAre8skRU9ocqWRmmmcYdb3exJaPinR",
  "key2": "5sNHDHP1kW8BJZDitvPvpGYzVP33mWcbKGJ1uTiave2eLf6dh8tQeMjU2ACYqJM6sH3v9GVNsmFRauNrXm4UezCg",
  "key3": "ZGL5vCo9EzmPod5rPZqQBeZRjFn2aP9i8AENFRL8NggmCfPKq4otm6s1xCqHYsdUckW8Ai4FXF7bphhjtHopF35",
  "key4": "4vChD9n5t8FWR9XTdCkA6kXPBhi9poJcXZkgngYMbPqTvDEPZHhX7U82NZfvnnt6fv6Nhen5UcZjK7tPBFC9cPJz",
  "key5": "4UTugJn67eHg6RpfM4irvshpsotBNyFiL3MgZehVkSx6rf4EqsME8an34WsArhEG2kgGKr9fA4BUEqws8fa9nzRg",
  "key6": "2yqh15wk8DXf9gK3souZJq5CW7mi9gs4LsvbZzg9ngnRE2fteuyB86Hkbq2NMmGntNpUPxWuSxRwTSe1CwMQXr2s",
  "key7": "27LJtCmfwTyrKADRCoYdTB25oDqhadSyxKqKz6ffACL9ifJNgkkJrWppjqoZ7cpmavCpYF4TuGospHFWFGLf1kpV",
  "key8": "22uNvxbyioEyTp6W1w77GVGBYFeE1c7vDVgDhGfDLPgXGaZEp3gEN6Umb6oMCrDTYPPcDhc9kj1SZBGEhNcSK5tB",
  "key9": "4rq3Q9Bfpa97ZNAA2CKu8YAXyZVKqiFsWaNSVsc64pUGJBg1LLHnCX8TYL5hn3cgPVf9BQkskM56Fn8kNLkZ74pf",
  "key10": "2vJXzCbqZkVp5GhDNFoMCUQ7Km4KEKQvsT6TBY7stqm5bUkdnJXWNpsbV17ZVMvrA7NknTHVRAcuyYkf7vZrbwre",
  "key11": "53zfXfcakXHoCT348ae2jVyQ2P1KMrWGdD443wYYKCMUsLwgXPgSjEqmvkGoZvH49gWapT7YwoMdXgShRjmm9FgN",
  "key12": "5a1J1P3eMjbi34QucNoztkkxpodEd9nY1R1fhdHLfNdSyoioNZxdGyX4HcUdY7FjkrYiog6kUMP8w9abDtk124Uh",
  "key13": "4nfzkDZebTSTx73E3hbfkdBHBdPZbaa9vvbm7HJzccfWGXovs3SamYUa9cuD2PbfxKBNgEzXAvCeNbCTmbnuQj9B",
  "key14": "2W2QwtHE8KSc5pXCezW9QHgSagBoUJY8qXTwY5EwbKuBjjHjNmFEMeFwAg12gLG3nNsB4Fb3CjSxkufX2YrwCnrb",
  "key15": "bstRMqB9Vvm8ZzHMz7rPsuHMVwh6zEyg8kEr3gTRWr3QmCYYsrRRXeC9atMvUV6nrMgF8uUXfC2RXWSLVT1EkEh",
  "key16": "53ww3oWVsd29RnH8J7VY3sVP2fwBXtcyA7ibJocNxuF9v85JuKECVnvmyqnpNeRZynn3WnnY1Dnf3LJ5ATarDYm6",
  "key17": "3CbPGf1UxAHyzVLcLChJK11pMuKHzRcJ8iEhM89CWeWTpoUPCmUCM9EEsU7z7kd8gjbwVfKCvWgg97GfHcxZUCn4",
  "key18": "4tjXTaRFkWDtYXuAABka1ZzrcvHYevEJReyhR82B2k1dDFLgkhLDKJFFZXoPwoKLTu73r6BaxJKw4jZC8KHB6EE4",
  "key19": "2N2p2yygCEs6K6MGjMZnFeR8gukcqqpvqXfJqRo1uLpPpmrRbfcNaS5MX4LYRJxqkZxD8ZZJD5nssRN1ZyyuFi8W",
  "key20": "3wrducCbsHocgVTvVPVZud33vc52m1FvfkpEWALvMFNXtiAxaNH8avLRnJgbPTxzqA9crWHk5auXBxcmmvyXmMWg",
  "key21": "3t5LUiuYqWvrpA7ezoUKuqZSksw2wdjpVtLYxAYaaKE9CkS6aatN1sCcmAVqzDE6jrzKXVGPgL96moAQrZebftPN",
  "key22": "5QDq3tttTx67ca137Xbj1rwP5RXLSWYM55rYiemaCStbcQyJLtxetyvirfLH5aytvTksS66RQuhibZhCRDMUNQ6E",
  "key23": "3uYACVsmgCpEfWBAh3dNY42j3yBnP14s52gYJJpjcVecY9FThvD9mFnWw3hwubV6ESuRHt5AYy97Eay4kNDCZpsR",
  "key24": "4fz13sKvyAZ1cjitgG7xt7gvoTN81hbTMdbXbDZZLASdCLWYGTunVh6Rw6R1kYbfmxHhcfXA5fKSJfbmWBdbGLVi",
  "key25": "2QB6qn6REUgsDpqvvxRrdKi4hYPDo2bEeJFJxxTSt1Vmup6xbHLuTpftUvXdnnR3kKZRrh6mbWyHgPNqbycdsUQu",
  "key26": "4dBaKjPHqgU7oHBAjgoa7XvuxRLUsta49orKn7UZUyEfxKLWLnhTsm5aHAKyx42dzckfwME2a6vmsxiGKaJHefJu",
  "key27": "2f1MkH83JAyo8wPUrY7DZKYKtVf7kq3gauCKzA4GCWKK7BUDkzCUSUz5AH76TwLb76JTpyrXLXgo3NmQsJCCETYY",
  "key28": "4L5h8tKHKnmgq84MVhrbBdz46TzogHeKTkyvLWH9uSbXciNpkKtdXAwBdSzuCn4YZYfPekrmAvPP7LPMs59Q9x1r",
  "key29": "2v9cQiSBZdTp25N3Wca23ddb2fqDjNiZ4uEmMwAq4Qm8mrJUwn1NGRyysJ5nq1h5mM3sNGehAgqQsmBMvk4QeRPD",
  "key30": "gNHkVW26tBP5TV1wn71kKveZpM3Z2GcQQmjPjo65fwPBB1ygkX3arfWAs4crEZH9EXysnw6Z8DPy62hicTeVrti",
  "key31": "4NMe5G4mYmZaMb9snjBcVqufz2AehvSzKZ5wgmubkc7ABUdiDYXTSiNWPJEy9Dgw99EHcVBoDe57HykJeaUWCHq1",
  "key32": "jGG1qTv2zo21RUWWN7dL1PwhZY3KGacxB5nPQE9MBhQmQgh3i6PqKbXipnMwVw9hVUA1xATR9ADji1XsUNgaG5T",
  "key33": "9izKT3RYhcrFqncsfuPQ2vF7WXvumKEmiMMCVSLU2pa2jnHZH4tD8ZpjixidbLxv9ZGjKiw2tW23R3nYpVZbtEo",
  "key34": "2CBmB65Xnmxws1g2gnEPHLxx9ZkGyucWCpfnbb1oqJ3xFNASMeGV2bRNk3BKqFWPNPEKawZLrTsgJiaRWEwRA13s",
  "key35": "2dYtso5PE3J3H6nhc9JS1rmcsG3sjaEuXPaVs8dLHTKazYz3D6ERk6aYhzQKnDphJRLGKfQhyvDQLr3M1vvpfHuJ",
  "key36": "3wa9e8queG4jBdTH44eexWVESPKz1TPPBDRoB4y2oMnHnBzKcqCszKzmgfHRzoGE9cRr5GudyTQZjpdVveRgYKYm",
  "key37": "hbgWbbW6QBLWCx4HyqVwfkH4xvFCoTT3hM64XLPJJiyKXAZC5mk8Ey3pYcoykDZBJptCBVPBapmw51WA5k4Qv5v",
  "key38": "2H2s8fyRgzPjxfCFrajdpbQEWDRTDXaJp58LkirPj4otiMQsLWnemBxxDnhwewt61BXfYRLHRPT1HTGiTRP6nLBE",
  "key39": "4m21YtVGuNTdKtHm2J8Xj22i4DvWgB49MCSNAY42TDD4HXtWVjAcxgG67bBZcfhGhpawZ5AJMZJxUZCekLGFucTs",
  "key40": "fiUvEkGajiJhTDpU8V55UMvoaUrDZUk6dPcvqiYbrJuB7NPtMxzbQ65DxNC9auf8UNsAzivP3XDMueVwfBEMaBB",
  "key41": "3dzFDm91GEgwT8AAMW1onvWZRMemK4goC3azFVfMJgQa91Hp8ztYiURB2kdXFa3Y4Pu5213KNg6GXidLiwokYAv5",
  "key42": "5CrC85cmyS2iKf5gU3qd2Lp434nqLJReUVtZrm5PoaSNbTkg2U6Ym9dQUDm8zPaR9BB79uR3ErSvKrwwfJdmUHGH",
  "key43": "AzYBFmcWMZnTkbht3WowMGUZuVUGBEoAkPs23qDHgyGXjTdVd9oSoRqhAohNWXZxcnA41UvaHeqT7Lrs1CCBGW4"
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
