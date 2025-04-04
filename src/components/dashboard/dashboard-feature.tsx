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
    "mvrtKiMJFDnyWP1vvNdTBKf2DCr6DpJ5Zj6RcJLUJ3bTM4vVRujsxvPuTmw2c7c9mWAYPE8xhuRVhSuThfGqyE7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QkdDmjoWHowyLpLVHBRWFJBSfcrNdZyUq9QDTnZBftFx22dJ8oRfGhHMjQjyr2MaxjNgH6dWEVCMAfYfu881LuE",
  "key1": "3B8TC368MXdczerH1SVSLPsGU58ipqPfmp4cCzZiTEKaQsBg9ijQUqmA6CpdPJUM5vz5d2pLGXnRCEr3e6grddos",
  "key2": "3Z29AszPvGgeGcqYhN9taFx7eNLtywDduk8vjV8qG44JEZ8EnSNX1k6GDYv6WewotnFpYLkj6p93WeXu2BXC7gAT",
  "key3": "4mMJ77PpKnTtwPLjnXVZsdziP7QXjXXawAZdf8qYZHKZ1PD36WY6t6WCkb9N7wx7w9aCDGvVUWWXZ27Zk3pA4EYS",
  "key4": "3LJiTmhE2fMbsxC2k6Jdx7ZnFn5uHsxTkgAtmwqNQ1ohWfAXsH3bemT1XVw65z4C9a4e2DvpPm2CWy7FYzwLbQuU",
  "key5": "4ic8jhi5Kh7LC3VQ1m6aGN2QrscfcC8zNmmnfmkNowHUPhswoaT4NgcaMfozpSfu5fTN31Bsh4pcuAAYJuYvDVWk",
  "key6": "3z776JXP3LxRehosXp8uFdLgHxZa5ciP4U59uwhvem4qkZPsHV4HkuKETMfyyuo3pHouWBz2UjihFdG9tRAC8YWA",
  "key7": "xELSrsUZhjD3drMPV67nqELmruxBpAG3rCXnZadqnXZUu3CNXePmAZWKLhHNsMQR5KKb7iXNSuTDS9KvjuxAkJ7",
  "key8": "4qYKjrGztgXYgy7PFEDA2NFQ8wcKS79gcrmeiV1qB6wYS9PXSP5mcVH2nGMhbfbkwLTvEu8mdpwvcpoHyUaPhgWk",
  "key9": "3X2PtWJtRVsx4hdUzQbxdqVsyFiRY3Q8AoJ3RUEEyGoGywv6s7i6uh8878LiQt3DbjDgxVUFxaZugdb94G9VmWdo",
  "key10": "2pjoiDZEYndsWvKtCh1yut6rqVspZaRnQdVjQ5FvQ4p1LoDu6CNZ8scoZxNmdoaJsXzvGAvj7MvVkgYhW9icXrBz",
  "key11": "61Rv2T8fHbNY65VKZRqAoBxbMxR9cGYu6EpiGHk4B7RvAAX4r95zWWAKvAWGek6hQ2iZznRPb4pkPwPFggQ71b2b",
  "key12": "4vAZkG7dvefNufTTkqywGWRk4MGtmAsYaG34gNbcPerur7GFWr4vPj5tWxhtFzS85YY2bTmU8EaksgBJrJxKZBoi",
  "key13": "46HC2pkZczgmVLaPwwN7EfjZsEu6vEH6XYgDCFhErP72ZUtBJbuzYeDY5NSQ15JikgjUUb3yrbBLoqFUGKUmYvEG",
  "key14": "wUoKAohmTPFmM7iQr2mbYCHcukD24mDw3jNj4gr67XBrM7HcSTpYuA5q7gmAY869RVHVVSe2ZMe24j3JBU7W6Hd",
  "key15": "Cx2Hg1FJvCunr1mm5gD6rzV4dnGTy1S5twoZbeYed5ZguNh46sYbesKtUWPFxZjDon661P7Bhjeo3kibAAXvmND",
  "key16": "387FTPcYmXodfxiC5YehdqdLDwEfMB898EFPYpiQ1Qu3HiZw15ffvg6i4566ksiH8LP1PiKmxqcod8XkCzVYcC7n",
  "key17": "4ByMBQ5FXC4GTcUBtSxtqBPgudrfeqZ1qQ47XLRNXv31tP4Bbk1co7v8AJ8arbxAGB6WvgY2HU333wY5mYcCCb83",
  "key18": "3hzrxEdx8x8PWWm1ypyEcSvhiwXhYK6uYeYgYXWLyRVR11VAzr7upgkCDHbaN6NCzGmkLiMfpZ4ZJfVSQr1Sg56C",
  "key19": "5zZy8s6XHmEh9LZQYx7KQMC6LHsTmnGYRBwCPLjxyuAX5fkSKsaE81WYwCtVPfjXqKQSip1vKwJPCLn6fkVuLfCH",
  "key20": "5CkzTFFRS5yAUwnoT7kizz3Jjsbe9XBmECMikXN5trorsBpyiTdxkawkPypfb5N8L6WWnSUTTYsfs3SjcZ7rVJMG",
  "key21": "2cMrjZipdWsPor6Mspc28J418JWW1JNNapFVGi29W2RVWkVqrFgn7LenfxyT67r8dCL5JmA2K6Mhvi9JwU1aep1",
  "key22": "4RgYYyLQ6QRoqDMQNCpq2AfLor1qmuk3M3WREZX2FGMXeee7DymidDTPphu3vLQ6fSKmDiDdHoMvatqmKY7YDdnJ",
  "key23": "2zEWbfCAte8rfCZENSu329aE7MwnGvjogxHS58NuZbd5bQhB7mRRUCSSnirfQQkptQfEeQrqC96zHCeTtuyyBQhv",
  "key24": "2BQENcXBqHMme8fcpbeLRuy8bKLj8xMZoKDvi5pKELPvCxrcefXYYtcap62j8FipajK9BHBWsLSqen9Mq68PqGFQ",
  "key25": "34aozVF5h7nkwqxsEgBG6UTiHd2rmnZweb8Qt7R8qZTfNh6hNjHF9PQyKyKAsHHtWcCygeK1pf4AJPZ214Zm7tH3",
  "key26": "Kyrpunizp9HP5oNVsa1ELcGkYyRyhBund4Knq4FVTFJkrPHBK8GnTMTTjQAjSfHsUmPn8AKCJDwMC2cSLFPha8T",
  "key27": "6eW1a6JnSHoukuaNJBkKPwJP44DgKoRHjfgJdVgbPJ2tHahkHu5HKscDrEVJCpvkX7WLvyitWexjSBGy7S5MV2m",
  "key28": "2ErmMUXt15ZaHHpiEr4kADM213QPv2vA8JNqwnoNzKkxkdqb95yR6KM6R9HXbCvrgkQP4TaEMKRi3yR6zLvGwBdh",
  "key29": "XUiFvTipBoKWo5NwRpGjrtNitxgXXBWtF6WHofvoMoCbvDob6jC3r4H7Fs9v7eXP2PfQhDMkQJN3XnWx3EKG7vE",
  "key30": "4VUkDwfEFZZKfbqGNCD2bdHPmfEjRwYbUyQ5FtJQYzAbLP2chBKRkA3asxxSpbyRnVzDZgufuzCbVfmdwLD3RNMi",
  "key31": "3UQdwhuYAAqrQpDZNWigCKccWx65X6hoz18GtFMtuvrBTPEFrmLZ6ed6vZ9DynJ8UiinrFbPKhrTXtxoi7EoJ2Zc",
  "key32": "37T6548zx5JV45D8agB8nfDm8RwPR3SNmUYmPgzNrCPVd2ydGSkMxJ4ezQiovKHqEYJPmuJ84S48z6eF4Nu8yirL",
  "key33": "3nA1x7HgAriPUtVU989vmUX1d3tmPM4A1Vrd1wobCjr2uPvSB2vjYUHjqt2LXej2gGbHStKrofugzNpgGwSySuow",
  "key34": "2mcRwN9bgX28rsxwQpFSNqtKyWsfC5pSo7DHahtmJeHvgS1FYjL5RLvTPpPe3iUrdJ84Hh7Ecujy1nKo9R8n4zUJ",
  "key35": "5FJoHNYL87zwyf3Q9gg5w3Cz8struhzXrYkrAdcXqikm59xomWgYR2YxPv47qiqTvcDqzXMkv27PRewjZKW1StTg",
  "key36": "33gkywqw55Rj5ydc9njV8xWJTbyjG5jF6y555ZRRYuQj9rsuaak6iYvLd9gkHHyKxM2iAMYfSybx4Rt1e7hSMiE1",
  "key37": "3F2d6ymnRQ6HTLiFXWJmwbVCkapXjsMohX8WvfoKuEpd17CKJCuTTBDbvRbThud2E3KtVrHvYApE7WZ2b2DyAe3j"
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
