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
    "668PeFQWvM4TSuPdVXyGiGrnbThWYL8hZYjjXVvUfN66pYu5dnNGMpTFmQKVhZ45JRAnphASerREL4kiU62zAPGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c7yEF7VUGzoFWAXxz8hkH2aes9UjNBTBrHh5C4C8G4WbySam4o6eKbnwXpX3yAbsJ5wf6aP8HrCHEjwKqNYkqMv",
  "key1": "27tnYSdeuwiF26trT6pAfVzVd2BTUs65CTPKo7EbTR5BWZavQuJVARbb8Bvprh25JdKhUAWYzwr3FYnSHUcNa4Vb",
  "key2": "5kZojEbcRsfxyHWnGy8bMnby6DZabUKiEruYtpgud5rh653nsWJ4YwJHR9kpjsVdWQKjL86DwidLfKGXhS6hQRwc",
  "key3": "5N93bDqKQQQbXkxhdkFpxbSBwadbGpFCQfmLNapSsQsChYcNUf4SAstUP7Pi1PLPdXXdJJCPmpgSRWmFGB92WS12",
  "key4": "5aaqp7Nb9ZNDqM5Ju5185PANMw4zzk9i7SBxbg9yFfqAc7nHHSv6mMwSquRAg9iWQRm9hgy7udLqjwtGr7vn3jWZ",
  "key5": "47s83mpDZEYrh5ApivJPV9pVJ5yUqY8r3rBYDpwiXgfkQcHbtJECSuuCavt1hC1XKJBpSLDhpeN1zi759v2JEAeb",
  "key6": "27YeW28nTrsgcg5WCKqAmcoX1YnjiuZzTSqLJgNzLFQiUtVuoBV7s5CuQszNSAkMsbqG1aCTkhRpf4qQba6z8zZ4",
  "key7": "5PLCXPZfxLTK86ppirSn61fHM1qFq9rLagtZdR6vhgECco1eMnibpYN3eGJQKafa7jASwhwFv4M8RfsdtFyfKxfB",
  "key8": "3ktkLWQTpvpv9aakHkiZFA8KjLKyPWLNRoVFZJQJXNvRgySCzMz3k5wzV7D72SzLp5jHwxeD7sxvk6VEMJvyiEwr",
  "key9": "59ioTrqvwTRbbh3vhmvm2VJL9aPj6TK5fn5URF9Y2AHhhC9kGeaAnb8oAapBzaDqaiMYkgc3QBUqRK3UcUougfhj",
  "key10": "4kp1tKuTYqpoNyF8Zt7jwgAtaSEnCuKU7EFm67P2gYd1icX216CMmUqbQTdKa3mrHrn4EdAkxzw3EJPHxxAXANhi",
  "key11": "KgjcqbV1uQnkAsJzTufwLVFbmBcv9btxqnzmaq5muuPKzWxiFTxFirkQ3ZpBMzDjCawnapZV3mwB1udc9KJqcCv",
  "key12": "XtJAtCK7NnPfr6yhamyZBRhGhb4phfP3QcrFhjVe6dqoHLmWqFeEvm8epHNRLaxyDBWEzwNrgvPMGwX5rh6Xyox",
  "key13": "4KYagocgQArS5deh6De2sU3cW22QC4JBfGvkqbRi8dxfWXX5KxS3F1t3Wva3em7ZYNgcuseN8XsDN1zMkZAh8i13",
  "key14": "5HBCMjV92bEYXKF29MnqwaqQ8U9mCqKhdELuE2ZdTkhgLAENY88J9RrZH88gpuGYsPWFzfDjSQuc4G2t7vwgjTcs",
  "key15": "kggJMv4L2SiiazdMGV8wywdN7h2UPrLaaEHRGzFEoWtXXVqQjZfv5CiiK3n82PKqZSpH7tnmfm9rMjuLiY1hR5s",
  "key16": "4n1YkJaWXTQ1M3DWgofa3dmcGtiRKoFKcgBSPREZzW77J1vDWdwxSPpMbmwfoFVDSpL4uT5SvFQjuaV4HZ1ceFfX",
  "key17": "4vfDmkgf5qUDZ6eTdUZKKe4FJ5NUvgzxSoTpdS9a3X17PxsPM4rvsKqJLsMuvggGaQhSL4vcZYZdub2UJFD8QXRP",
  "key18": "2ptBaeGNFWQvpMWqfRyqSV17mR2CRoY39uXBFyroj9p4qzqXF2ZtU6THmcb4XrUxoHDXEQmYonU8fHsAf8TbcFR",
  "key19": "3tahMxikn9CDAt3YXcadVmYG1VyR6vZ7cnnBvQBGR5Bo5mbrnku3xAToNcpHFjKACgKFjpbQHPibW6dYAMoiA5XA",
  "key20": "88pzta2Vzr5ibKRvhquepych82AnSkyuCp9k4NtXQkT47MjcofXfepvmHZNx5jey4cMGENTEczWK8bqzdsEajod",
  "key21": "6x64JVhVjuEhSbGTTDsbFtJwtDgYLK6LAuWMK4jyTWiKMT2isa2Lii76Qthidvj8iTo1cmgpxTmKbnqqRKctZAo",
  "key22": "3KesnzRgdKPb3eub9iQNpRm1HuMp2jUbcXA6bZVxtttHoifmNEJeVvzzwr1VRZGXKDVk2MQBXm1ri7Bs2utfKN85",
  "key23": "2iwH9Y68YN12EKrHt4bawAZZrZdsYAv65VTrGgUxrZpHWh3zX3irmnQAY7r8NEfFJ8nrcHKpoFP665ZArDknoaa4",
  "key24": "Pw6VjMGZh539iW3qiS32ZSHMW8GgifdkEeSbNZHCkbTGLuSAiCuDvDiUuSre9wLAmiKNqVu2jwaJkGkQ6bw3rcp",
  "key25": "4DbhkcDSzwfGh5V9u5YD3DsboVWLxbhQBq7XKWFEoPemkDwQbjFiqDd7A9DNTtGVi1FaUwLTeZyazKRv6knq2hzY",
  "key26": "2C644AfbkQDpXhbbPPSZLSUMHBKV5n1vkiTMApUT2udTQ8wVxfNiPdErYrGgGs2amQG5Y1DPNFv5dRhgYa4GZX2u",
  "key27": "vnG4ej3t1vz82qvkzxrEi5JvtxowbqYAffq2CbnRpdjBE6TjXsv67oBFz4tDEU3GcQprvNYU9VJKX2bXhvk8eF7",
  "key28": "5VumgSuJyD2T64X4tWPtp64Wsc1nKaXDe6dx8WXcGurxYP1tNgYirHEepAAQnuB2LWzRiGKkSdBppk7SH1ssw9jF",
  "key29": "5aeGHjekV9qdiqaJgaB9AtwNSEoi9y1nSeDLcgg8E98Ag75qtTPYpJXTk6qW69NAzRDH3mPDngE6cLsqV7RinYMe",
  "key30": "4UT5R4FXQKH6n8aq3EkvuvXNVgAhSty28c2NaAVzpRdrp92pdWYzoXq6A7JS8ftm6JJEJEs4ghY3aX6ios94xNVy",
  "key31": "3MGvXTeUUP3ETza14et7sNo41NDsVeVkWgzJyMBHHuDTwj4uQBaQfnhFoHEE9ed9bP2KHVF5v3GtpLamaUiJqwDc",
  "key32": "3G3qKcEdQYJoc4puoqLoqYfsaSxjURLZNZHA1HRxYZKX26vAPiWknCAgZBet3P7SCyMRYzosv37j5NyGKopn6Aez",
  "key33": "3EnXwJ1pnH2Piz9MUcXiKeSuWxjdPkdEdicGcTYaGsDUbHjtBgzR1BK1SN4d1UpQ2wsLRVRzkfEvXUtcas2yXnbz",
  "key34": "5Cu4Nau4MizcU36ccuYUmKre4BjGWCPJBb6yGXdLREBo7ixYTjtshqEi5FSSkB2eTieWFYCXAHnYE6UWxFyMn1ey",
  "key35": "4jQUmHp4Wkhpqscmvcm31hJqMTXfYXwQ1hpfHPJxa3N6UhVLUb3yYdEp65XkaRjCsNWqiZXTiGVRNUDyF6M6aM7o",
  "key36": "5UGMGKpfKW8ZDyficPbLGLAhcezhqZwLetBQiX7TcgUjySoNHfbo9CGk7awLxhecQQCXuiBsWvFoznNZgzYYCRAn",
  "key37": "pbR7ZSigiWQqPE4C5tQds2QEt7FcFUUuaFfBgYAjQ6DXwU2vUJrEiDM4BubdPB9nK559StRrB8uyR9U2FUx52mS",
  "key38": "4YJYA1og3wRtXWJytzHvBikDdYLqDZ6PmwoYVzzYSkTW3WywZDUcdtPLCWTMVbVmQiazmGS6LdGfZbknE8QRM3pr",
  "key39": "JuNa4yeUAg5xLQDnPJbxaePPLpj9Nr7Eo6A17HdAVmCp3uCYmyGZ4xNhQ6J63QNM2Cv87ZL86yJStzpjb91uH33",
  "key40": "3rQtJ3gpMyXJB5KGa11p2tAvGHS29yKbwZG7AAdaqRYrPek65ziBiqx7tNYWEGLniEnqGgEmoPGAXfLKKqxQtfSt",
  "key41": "584fxNkWwRtyDos9Bwo5hLsVadykdKQJrsaiJENThXNwVN8R1k96xBnzgKYEmAvXKE4vbSMVWcH9Lbk11SwvSdQy",
  "key42": "2XUmsz7GZnZFMB2uNYDtdncB6md6vxVqNGJPeDvA9Y9QwtCi4H4JmiobtBtaUwfmg4uSDjL4d1JmHZgVoaSBtXCi",
  "key43": "5LwYofjLapxkuNx2znSbiF7SVeWB87Z7aMgw7zqieBZy7jXBJLV67KXhvMajDuY8GegXih5GpnxDrUKVFibxTkwf",
  "key44": "2naCikxJxh78Zy4W5ioGiaDxisTkGfXTKxfen2tmHKXr2tVJWyWAaThDrjjzhFdMhT8VYyzXeyn7HDCAsrqxeG15",
  "key45": "5icUubcdLSbMewRtkg8Y2FdEvAEiuYDJHZaFrXhPAh26fYPF2f9DWEiQqbgfv5vufyZQbUYARdmpZamxdBTihYGe"
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
