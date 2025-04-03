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
    "MQXdTwuEC5GYb4tDCboD2a3qv2y1D59PsAGGDoGLRaEzRwS9cy2pnkC42DxxDrXfkgtzyk1P6KMpjoLWvuFsXsA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hBr8MxGwS7Xxa7tRryVWEgcowc95mk7CfWpFmCBUKCszfxXycTKukhkpU5sWMbwwrzGkE5YYoxpNjTu4tDb2Pbp",
  "key1": "3UdF9jGhDdTJDaxJQnTcq5qNj9mNrkJVEwf1hyrfi3BRErPNdyGgfQfh8m1E5JbABgbogTfq4GLQTFC1b8Hr6zE4",
  "key2": "47Eeip9dHDRPxqhy5e1Qi2SWYKW7iBNrXbCKtNFfijEZBJeAG9aDNZs7vBhA8p4FMPsW68eZPmnbSy8GvKZ5rknZ",
  "key3": "4cXgFM8h2e8QeBRz4Zp3E1aRN5DGV7mdZPJuerjiQ2enuFM5SSJnHDCpNiyyffChznEgqvrBqWEQteQCef6H7wWY",
  "key4": "5Dte8Z4e9KAY3ZZbM6FocEVDn2qASdsquhtADTbEt2w7H6Cku1F6u7ZijktxfbE1E9w5AasFroDS2Bu2VQNo5GAK",
  "key5": "5Tk3uWaNrpQdxRFL35fo2JE1uaj3E6ocL59M85nXgfGqxFY8HuNaKu6EU8udeiQkLu2oRDdNA8KwuEFjwhmogeLf",
  "key6": "2F19u1Zqq5J9iAGxirXD9oSkaoHRVKhxsunypLXMdNWNGXFDbbHe6rEEh9SAb2riuHgAn6z1PMicLCrNieTVwoYf",
  "key7": "4tifgk3FGybSVeZm1Ne26ZvekT3tVUmWNuDdzzFigprgyBzcaG4yjTnobPwvSAEDBmRKScecQDtSdMkFyGojn3zk",
  "key8": "5duzNML7V7cKMsHpjbdkrsNSbujrHExgPrWEfQBg6cqcYfG8BgYgiZjoqK9wUfdej9aJ5NpooCjzoiiNmJTVZE1q",
  "key9": "3FGFZgzQKxhbTcF8nsEFakyxjY9wMzhATpMWzh3AsvyxFt1LRyVdxFjWmtmNzNRWSL4YH6NYZFV2vUUyofeNDMQP",
  "key10": "393sW4zKSRw8Jsk5y48xhDqmK3yxo5aKSgxma7NEAmAR85GSVvZ2AiMKw5mia85J9hzpqB8t6AhqftfLFumXS9db",
  "key11": "EEwVSokEvxvgdwvjyskmC9Vu5hYbftoHHz1gzX7fNvVjZhEt1qLPKeMon9Lg3NVzjHQ2SdiiwPwMyfKxLQcLj3X",
  "key12": "4nwgKZGvJDGCgQu55kBP439CJkrR2p7fnuVQt3BtoB9rnkFeWkr8DengjAaSQbmGK1Kh2EbMWadU6NQQxNtmLYWJ",
  "key13": "WvqyF2RWnR1AszJVAfNsMoLLrCAhTAN2ghztdCt1ZwTYCpby1pvHYxH5phZotzCSASce14muaAivJ47J9sX3g5h",
  "key14": "4Wv8QFb5vEVJ1M3k3apM21CeUJcRaQXo7UUY2L8wUXt4eHjgMeNK6evZs43rvv6YCiPeZsbcMkJeNepxSB9Ekm42",
  "key15": "twgB7NjoDMSF8ExWNuaKb1HzZwyfHxSdww8QZby8x6GHvHMv6SuXMEGJy3PU7RgaHYytzxyFEGzTeXDxuZPNqHp",
  "key16": "hgJ1fiK1B5ukxrweWZceEHMxLdWS3H5QVWrBm5ogme31zvC1grinGyLQ3gE9wKLwvehBwDax8pzVehtyntBNqAY",
  "key17": "4G4rNvyBBGLmoGTifoJirEvcemMpGawpL8QSU2ZRPKgg5WdPo6drPLNxvZofNEFBLim26FScmYsSfkMGaYPFpPgW",
  "key18": "4vnEdXKwyejkFfoCY9pjdsnKZnFQ37QS3u4x4ugP4K2RoocpW3Db5GbufGDnQvnKCXxvNMpwdeHDh4erv4GWaB76",
  "key19": "5gij2c3p37LrjisbunijJPExCJquPrxR72biNmrbCmbd4Bb14H6vcvQaKwuJT682XreR14r4juK1myV86z3Nx7bv",
  "key20": "5ZiTFQgpV8ecNfYezt1TSUcqB8REMmxAnUL9PwXTW7AdJ3AYEpuCZh1n3UBS31tEhTxsbeHK8D3kzjcHPgTVnpq3",
  "key21": "2uJwSEhmp8C5H5k3Xj9UQoSrz7oNaZSakzSxyP2HXBMVj95HARNALJmo2xnK1Gxt3DnMjvZnmpyi6rHz4G8g1a6U",
  "key22": "DcoYcVLAxpdXMT3MkJuFqNa1afuPXC1xCjaGmnj15L7KPNVJrRFtioYuCp9vjNpDXpTBPsmnFWjWHiXLWKCmfmH",
  "key23": "2gxhFxcTT3itzkpK26BURjSSy8icbU7tSzuG37iwWPWwS34uCkn8yQ7JfqSt2ju5BdsxUUBVmDYVHs2HxT4oqtqi",
  "key24": "VqkU7QcHPBpuFrcpprc24BdRvgZi6CBKE6TtAHpFTg6NS1EtysFuBkB2icoZx1iLhw92dkZtRZWk2QT7RHEJ8ke",
  "key25": "4X5E5cqgY5GTgj4oJhoLjV8dccMwCYAuNiS2o4Usob4cpRQqhCzXgHjgZ1Dfw5La45Npaz3VGikVFBLyN56nmyfd",
  "key26": "65LSAgiDTJLYKMqLHzbgmRdkkXuVRriNtedesgpd8fXyHiUa8FgHNi4g7x6xSAQXupwUoDnyMUzSrMwp7cY6DYyn",
  "key27": "azcEhVKF3RTxg5D24yU6h5cPUcYYazJVDGtDMFjLLg3bjUpMKcQNfrNpGSUoLWk21Hvr9aEpQARomFtY8LV7QMU",
  "key28": "48g4DXFcgG3GXdrNQ5GfBGAkcMRNYmi4KTHLUX2sxvV9rLtBapmbbL6kUpEENWB4PC2hAoQESpxpUf7eqTmK2nFw",
  "key29": "uAu8iq4qAVsYHJUYqVRwBbpAAUneZYpuDQx8mxsmtDvmCSX3xvEEBjMFZL7yzZtZTKtMxzFdufAnVmoc7q3UWTj",
  "key30": "BxfXqdSSpV2fkVxpM5ASmEAZ4LVZRCxjouHoTJHPVHc1NZFJd3d8PfuUL6DN1UunKaSSyA98qMgPxraBKynjVJC",
  "key31": "4n79iA1jPaMLHSHRJw6Dd5bStZLBvf5XuTs1xK3smwDrozEciskn84UQojR1ZDivXZ6DKGR8NUbZm1r8DYxZUgFE",
  "key32": "4jPX2ufQntTC3fVDpoz3bKAkrXkyNSupwBL9BMvc8Qiv9aSuBPR5193nWBZ5rnqD9CjWbUWZzb4dnACk4as95ELY",
  "key33": "3zRgWXKjKGu3TV4aNP1EVC1GEsKqphnhGyFJ6fNY5ChAQuceaZpmz9QoWconKhpaxMUHeVN7To2rtVpycspfZ4Ah",
  "key34": "4XMnQ5gQcRqaLDKPsUASqq3uhuoDK8Vw1mMTwFbWAu34qApK3ZZKbZLD8VaeF7CSpAdaZ1AxmBFYC4o9mxS7fnny",
  "key35": "KdDVjVCW5JaM7wYKDBcovXsNzd2P8LmUTgbwe3dLvu4KFJLSPXFZmqmeyMcqSwJMMww961nZaM3N4tRz8q7WrzX",
  "key36": "3a3v3aGLFTToA32fgpPzYnAmrs4f7kBXBwSNjKgdWU6cR9XwqSUjFLhy65JR2By3DVywXjfMZn1N7GNMjgNktCcg",
  "key37": "5GUniLtCFwyCSyUq21mEKstpU2Z4qL6R8sTACJZ5znR5pE1FfzN6b4Aw68kA5fKmj2q22FCQzD7BknNz366PhzM5"
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
