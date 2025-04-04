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
    "38J8hcwZL8pn81qtqbMiWzoXrYjyJ4cyHPqUVNwwckN5Ut3Hmdg26GGQoDpvMBRW7yXUuBJUsXUKjk642dEz4gbe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Wf215Hk95iv36dmoesELVYeVeKKNSR6GT3ccqGZogMkKXWT63ZQ2fmYQPTZZqGYx6K2jk1NkDhQqKWoAj9hBET3",
  "key1": "3zvKmHP8v73XMjynYghnY23xnEFUoU7MrRopNTgdNJf3ZGS2QdaDSDzV9f4MRRQfRbijmuQinvu8M11kHMrcWRNy",
  "key2": "5JphMsSqtH4svAB6j1PrQ6pDMqeDkFmoyR6UAzZormU6XreTz3FfVifKRj7cU8E5bcbiyyNmtKuPg51P67FR2atE",
  "key3": "4J8gJv3ExY7gjxiQ2fyDXUe8XoGAmsyaDw9onjua1ZkhRtbJTjzA3RQ14WBZxHyotxc7Gya69pd7AmjCLXc28Hpy",
  "key4": "36BoKtb1scq2jWa4F6PiDUrungmZuAuZfti8Ybz9g7T8BBbTNtS8Utas6PfuRrFBSBDgVVEHNGmCanUUCWdcPrU6",
  "key5": "5pfT6znaTo4o7BgdjkN65u3Wc6yMU61ByPvzUKGz5ZzkUvunVYBBQWfx7n14b1dEfRZmCNcZ9UcAj4qRefpqJa1S",
  "key6": "vN7KC87RbSv1bWjYM5ZVtMfTCk34XK9yhMu76yKDiokmD7gGYc9NBaW9FfLD77afnVVNaBsi1jv4Q6CjyiCZ4cz",
  "key7": "5g3qTbXQTQFV9S5SbR9YUYo9FkVeCNw9D3LCmD1R2SXtnfXWFQ5Wq4mqXv5h1aknJbdZLyr6ddicqh3AkWcp6DAt",
  "key8": "d5jbLJzfFzih2kcSebzCpEDbDT9VNb13gBz2aRSEGQTcH1gQ3yPeEpuCkUZUSNMXXzqqa5oCGAD8fo4sJbjSKns",
  "key9": "5xGssAAH8eLcqLxFExtMrw9T8Tu7bwdNqpUuPsRGUHv5bLcaxywQmoadrTBG8d4Jb18AyKDmQQFAkTEY4usyLgop",
  "key10": "QDkVnU2tqyrzNr9CJ7heRGdQLHR93MTVfYzqZF4rQjytuvZKFi9nMh43hxFMrVubgUBSPPeHsWhBWtUJkWch9pN",
  "key11": "4rWBpJMP8zYUTY1QcN2m6j53aVohzWAJGRiiPBGDGx81MRARMmBFN4P3RKyzJaNLh45idPmHcjHkfTcWCqZFRMau",
  "key12": "5m5prHvh4J9iD2vMyFWTmodkdHe9mJh591JmozX2NuRkuqYTD9rSoTKUh9VjHYpVxL1BWr4ypvR4pvnNmJy3xqnW",
  "key13": "rdV3n4f4DqhrLrzU7PaHtP72qbDpqa4DwNYkJse4Dz5bxyRKwnsdN2MhxJjfb77noBifpxek3YgxEduoYi3AdzQ",
  "key14": "66et31j6AZ1aCDZkJKcbJqVLHnJfdNLYtgxpsRWmEpSqrN4ysNreUiXU7ePhPSYumrbw53SzioyPSUCStj5W4z7S",
  "key15": "3Q1HmkSgrHxSHYPzJ6o6UFnSEEP9jpdyzDJ3dvNsKUtfDZodqtFLG1uHPG1yshSSwkCsxy6FPaopj6byN9P1hj5b",
  "key16": "2k7Jbbq2gb6CzvJbzpsU5db6kH3HLTY83Nhi9XCdeeC84AkhvF8pAPoMPJHhyg141gis7wEyNBsi1pnFEEy6RjN9",
  "key17": "5eARU1mNfnmzEzc1uQ7pq585hjgCFweRf2put3PZvHyS5NwR25D23TmaXWeLfBwbW6L89vaEDDcdMvbeRQxqEeis",
  "key18": "2MVivoH9iKn3hRXwh5RHjY3aaPQBmNrPV68nN8XjbpoU6X5WQbo2xLkvnBur7buc2z4vDGw6FpFPwGzH3nJhsmjy",
  "key19": "2Pcchef525cS1WL3amVrmfBVC8HsZVxjZBXCPrWXMShSpVhw48v9dGtvHfXaQckh8YsPA2qNeHzFGxUPsyUsNYJv",
  "key20": "4Eyp3vF9MuVN4nvDLG9CQ4YZ7eAvNzuf9yioSdWEUPAj37CYbTokTx6uYH8B6pL91s5o9yN9nHif3WonSYCgEtKq",
  "key21": "UdiRAkR3ELNQd9UyBaYPV1hXTFggNiAVy7AV49mHSEoKMLhpRfDLgz3vKtQnc8HPEkLxKjMvY9XZ7dUsZMxXYbF",
  "key22": "5b5Tiddh8EswqsyzCfGEqQJpNH8Ed3RT7TtMVzqNETJea8mBtzgveznenDzPiSdeUwR9AaB3XjD5gp9pBCjVAmMF",
  "key23": "2MFp3EhxXQ5g2m8tSn3qPbuaEGkDM9fB8BAwzGV4UcQRFKaT7Qrz6PTJgLPv4mHjhjwrHUjBZVgQDZZFkqC6ShVW",
  "key24": "5wvmKS5EanMFnd2Ad4dbbyJKSMrH38BmPs1opG33WyovmRUw32yfCKHuejt37EE2s7LNng2QsG6riyeuW1cQxGab",
  "key25": "5ApAbjDQnSYdbBWDd4Vm6T9nx45PCsPocjd3DbP5dhUU43HJHmLCMpioQqXE5pcXqcRdLVfxG5XNjmoY5h7LZvce",
  "key26": "5EAnuZXFx5FC3CjdattLnCU3cXUdVHsEhY9Ew3WaPzU2QiT9psbSvrX1R2H2rQFjETPN5MHwcXhzTcQqyswzX7Ej",
  "key27": "4rp4Y3CpSUek3xgqAx8FRusTb6icpNKxeLqHaWwLTVyKfXmWVNss6cUpL5eqB1TTHjnPiym4UaFa47bvuzWDAekS",
  "key28": "5Cs13GmbxbZp4rWNr1k47ymKAcSNzomHmnJL47LW4oEwnBYnyhNxhs4eP2ZBx7MAL48vBvUVv1m3y7Q8wtZH8xCz",
  "key29": "2CV71mswo9VbVSo2fZoebAfVgxTtmhDAQum89fh8cBtdPX6J88YfazYwqn2L5yYcTDzA6aETjacEhsKnyW5oAXWv",
  "key30": "61UDFyPb3Pc1nhGx3RoqFGjFtw1iawpzR3aCRsa9xBEthGSAV4TtdgwVcrTitJtDWHqt8zSerk8XwbYme9ryftR4",
  "key31": "3gsLbGpfdbxdHpUAejWWh37JoQTt9arVMGhWsVppgivzM5paArWUBcs2VpJx1tajmKJJUeidyqPJSYiyK6JM5Z8n",
  "key32": "2vAbMkNURsvGA4pqqyBFtoS2Frkq1pfC4WTPvbnq2mX5eKCcvecHJQ3TvQ7Czod31aT87yLV9LJPpoMbToPCcwMC",
  "key33": "5847sTfZSLLymJ8sDPrNsYJXGC79GfFcnCSi3DuK2B7bFR74RFSX34EPgFPC42Rey5KLi8oVroCxp8xBEqK4wCeY",
  "key34": "2Eqh3DtGSTvoC6UzbyTZoyxQRT3nSKmNUSkuonMEeLhCz8EYkUyD7VTjiDQyrHeTc9CiaBUDPpXtwn3nNUuwj27A",
  "key35": "3bYYdLoNxD7VZ2xK1qwg6octeRgeLfeWSiAVt3K8Z27YB8MzmCG5HnqYQgb7oGqA2apob8ru5sHH6z5yRqwtFTvN",
  "key36": "23u9f71zPwdrfpx6DKq4NHLdJHcCnjCC4XX2rjNCKUMzNcubSoSRHY4d7bWqPm5WRfJscdHFz94uwyLMJXP29LC4",
  "key37": "56qQH8xd68FfP2cSyD9tzLRFibDAmjihC65eyqvnx543uTpafrx3dWvggz4zjz7idDU2iAu8gYJzNMA7sfQCcmfK"
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
