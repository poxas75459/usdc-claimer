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
    "44k5yuA1oKkZEYX1Svk9ik6MLwZnXae2kiz9ScEcjtwaW42BcYr4ZVd47gtmiuxJgaBsPFSFH3YEkgDEkpJQfqjy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SmnMJhfJQ1KKDe8hY6oSJUxRMDjKNDYsSmuJiVX5XHs2UmyzGYYhEJ5HGCL9HgbRFH8HL5AXJsdpAeGSSia8dSH",
  "key1": "6tz3sQHjbsBDdqWzjeHZyjnp5mqaadCwnJg7YDumjXST7adMLhgSd5yhSBPB2Fm8khYr4ET8hF2yWo5pmmVPk3Y",
  "key2": "ZEVxAC1M9Y71ZxHiNcA4idtLo7eMkFMCyaa52guPueYbXEcBpRJMeTt8vSUe6yC3BJZuDTipvGhWo3vUejjbQyC",
  "key3": "25Ay8tQopf49bRiMnUjhzYMk199ett4Zijf2oVN4DFaAALAaoDmFyUNYemLpHE1VVL8GLZ2meMy1PbQUegCKHFzd",
  "key4": "GuNqy5hYeYGxdWNrpnprhScKFiyxtncxibK1B7xNmFrmsoyv1KUf8ptBbrn9eR8qxQ3Lri4XU2ERUSHgHcqKtYh",
  "key5": "5Lds7U5XkZTe2pB3YyVbwi93xHzdwsR5Nx8TrP6DuvHyFAWDhhbMrFRGczividtkwRUu6QKLoJn7JkKwLeycrwUo",
  "key6": "3Fid2RgZquLw7YdPZUEryHJZGQ9FmitsfHyCmTECBiTbMk8sj3X1QjATCTSMy3vrR9NpLZN6if5acCLvhatRimq5",
  "key7": "277tyyDjSqXNYiD53ddNmmfHorzXvZ4hwydai7idZ4rDXBitzs5pYrCfM5vfpXoUQ3LhSDPdy8MCRoyspsMSuwLk",
  "key8": "33b1J3xUb7znpz3vofpMhDZbYPEwUthTRoG8PEjzt6hfTZ7BuTdubD9RPPHmnXgfYtBmYSRrVugAk9a5hbuhFvh4",
  "key9": "3ERLjbWCUPnB7cUisA2nWU14WtCBz2TZzjxRRJFzfN8JAxM3PqoJmnX2PY2xZfCox15wdWP2prmBbjw9YyMAD4k5",
  "key10": "5v1KK6iQiGMaSpHQwuePdru3PWnru8vx2EdnXWY8ARCLp8p56JEo9sY61g8y6zGLbNBQmvYEhsM7Gk7FDQCyH1ZG",
  "key11": "4vvyobd4ayjyQy4RvWJ42AwJVC5cTRkCcnMPXbTGbponYHBfLSQQPRxTCm4E1UhrV2ViG5BPhEUvWzz6RjpAgaT8",
  "key12": "3L7e7qA76quN4muP57uM5qhgy5X84ELYuqZEsCohfvNxhq8bLps33HUrvsFvDNqUgDPNS2qi2A2JP7E9Y393CABf",
  "key13": "5unuKYPNb6FYSA1Q6tf39Y9S1nS8BieEPCkE7R17j7kW94nGUo7MGEHHPeHnPAoLd1wDmRNZkphqQsTmZm5Hv5Th",
  "key14": "4R4oVRpUMFgFVqJGcWhRD4J7h1ETYGbzBvrzisT5UBLTsTL5YsNfHfRWARXBaWFwwg8RGNj4NGf6gVwCG7q2PdP8",
  "key15": "2F9Sq9qZ6oqDTc1jHRaVuUZBVhbWby6dkodFPbQwuEKHRiMqhinTu4c4ryiWuhG7kS1TS43fDm6Fu3Ff3Fs92Y7B",
  "key16": "52Er8w56zDEAkN8xHYu3g5SB5f2tZvvh4ZAB55pL75Eetq72UmVm4zr81AQyyoz12qiFcy7cWrRdU2StDCHaf2A7",
  "key17": "TznC3NaXZg5wQw2sxLTaVTS5JMZ8iRvHESVjqkbU1R91VNvcG64yCdvwmPAf3bU8vq5xzdVz8q23JWK5o57kSTN",
  "key18": "3pCUyJNT1tAzP4JShT2d7qebTGjZXUBPQDmbSEdngfrmEbaAuCXiHvStyi1C9oUtQo255pN3WWxgMsqmDPSyXhRK",
  "key19": "3pbWPerA26mun1rLRvyTs5poTgU72vx3qeqNgt2dP8HWG7CHYtbzXizLvtuxp7TrFvnv7EdNF7PAkEy3GkgdALCu",
  "key20": "4CTrZniHXTZ6FnpPv5DMaErRX7ANLVkxwxGTkTV7CSBNubTRMvYem1F8rcDmTUWMEqPJfVUzhBhGG6UEom7xYpjK",
  "key21": "2d5opLja2GbYRgLzKPojnrfQekaPSYbxPW8EV1LuQEytVDsoZcjwT1EC58WrTyUzamphTB9GrbN8Y9rTR9JGjC5V",
  "key22": "46VwDuxJDt5tqytvouH62w6gcPzVU1QX2tpeXbGiVNWHAsmMseunqc49EWfXmk5oBJtZWWCPWjyTHAPvdNxv7i7v",
  "key23": "3gLoA4nicynHwKDckbBRwTvJqpnf8NA7Pq7pZnughfE396PeimmxrnrqPmsKXUXogFudoJPqgAq4h4fwpYVVt15v",
  "key24": "4KpzXqStZ5hgAMNuAQMK7kAbZsFC1Q9YcS5dAZF5p4cGTCzTzL7jTQ4BREP6mnSrsxyKiQojGamPFX3D86GD4Rxj",
  "key25": "55tws6K1R83gViE6h174SJQ1NQsh5gfKzSH6papmmXZVdYXCTs1gfsrn8SSZUyTeKhrKFF8c33Uxmo4pXBjmXpgf",
  "key26": "WQixZcMpYCUEyt591TKfhBtX2dn1xLNPUtcqyN2sVULwEDSQyCbkeQEKfsNVpWCGVkGhqyAQrMpzwWhWnVtrMqT",
  "key27": "29GBQM76iBWKhP5viQJVvh7UmCv4x81nvuj31iv4iFcV9q9VGyyT5cou5SPEbq13SxnfEn5LXMcoArA6PyGr5ySj",
  "key28": "59NBMSgqjMDHphzSEMjsaFZsTpppxXfRkpXoBEcX2sggx8SzVKmpWv4K2i1zx5CQKusPRDmpVdoLriPc6CWcxhyY",
  "key29": "3SdZNAhM32kFvi7Q2JHoTCQuJjwzZbSBKHmpEkU9U1yfS4V7Azh7GZL4KpZuEt9JWm7EVVcdpMKRF1UvvPJW5x6L",
  "key30": "2S2yPykXbxxuBH3tpq4sBCJouorTCcqx5RAVsVdmQApGyXWgwXRXG7wXu6JtcGcyRGxbFSKVoACuQPg8423RNv5m",
  "key31": "5wxqi4XHmqNRjhLWUTTSht4eZ3Qqb1JHcMTTMDdwvga6YrNtzMAoJWsyJDzSUXmRZ4Kmce6ngB6gdnXtJosXho7v",
  "key32": "59V5vfarBj4KyCfhGsCTr7ccQzrCzJR2kMDGSJcjiuovk83yHVnEtZDMUdmahAiPJb8A1nA5RpRRT79RhNeL3j8C",
  "key33": "2dPjJB29QVAWijcrGkcYCWxDv1Fn5EjtNKmLthqLTuFiQaoXQERYJP64S6jGw9H2TDLiKJZcMjFMGb95RX1dtqoZ",
  "key34": "4YVn229x1j5xkj6rwfPD4dEAHumgmQG1Q73iUXM9gt7wcTDKamrJEkb7BzWfWXGfrci9RV6BvuJyR7yZLKQmhfYw",
  "key35": "2fmQJvqvR2XEZukfDa13pGPw5mVEHWT6RJNx6Pf9Sbx4DXF3jLJXsDQ2sHd2b9gHYzHMi2yuKjZJLpRKhqrPFNxL",
  "key36": "2TqFKJtkJuGoJP6e9eNB6xaZ3p4doH4HFjWGbjU3ceSG61jifM6PRJMCfzKCqsRHMWSqC8LRK3RdgrH5XMUnjviY",
  "key37": "4aT6BR3XL1cqMFuTbDF8gqnAKsiKgQD4PSDErtopUtezjWNwMdLeod8UzGQLpWBqRExJByLZtwFdz8Jen7BjR39F",
  "key38": "2rKzKKB4tF5cMCJw3sCjEWnkUQXKR151NqMxWQSnyMU4jCHYEVWsMnH85xzJVvNH7hxRvVJJgcWsHYbPHCQydPT6",
  "key39": "62sFfgihBEt2GfDxj2SoPJ4FpFb1riQFWnbqgpHZSMF4EFN29BjcnJbaik21x1GGXNTEWhvVKHijmWVQrudUpZtn",
  "key40": "2nGKGxuWUshqDsKNJY6mCKQY8SCejgTbGg1H6D1MhP24xBZXj7MZ6nKaGRHAHsJDccQsWPpzEGPRffK7BJighk6S",
  "key41": "DBDPWqZuLNLR2aVTYrZwVNAtx1mZSwJHq3k8hswF4f7771G9ZKs1QYPKEEVkUmG75WrAhbNA24Yi5DKwYFa29xt",
  "key42": "2SyNbqYkv2VEsMiKQifqZcJVzKKDd4x3v5YSc76JVGQYGXj8h9uboTifyPawSCDDthpXdgN2F59KMqbmKJRJ7K9Q",
  "key43": "54zCVmVwEyi6LYG6U18kfUVBWPBnnp4qVrESDX2eRCtZh3uq1cqnQyzisaHtUfXbES48dYTvtbo7V2rjGDA6TFgB",
  "key44": "58PeNdmJ2JnyRwdMZ5h1Teue1EDLSGLps4h4UJGu14XsXdvWoe3GTf1PkpD4nyoToqw6swbgMvW4JdLLPQxm3xyy"
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
