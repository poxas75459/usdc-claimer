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
    "5YKpodwBe8sc7kcevqzzhLASdpVjdVk6XgmaR7nrdpCjtHARbjKMkzECai6xP92L6LQnufYs4pyUDRLy5XooUhAn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JWF4Wb1t8xNeFkiN4TEZYj34FaYeLXyVF7ZrLtW4kj6aNnMN1frbV5Y5fPhVgu6xvYMPCEpAVhuJtS1xd4LRFxC",
  "key1": "PjoWnrumz2GsF5BRJyzBYuLui6ZrMmJPA7DH4skSSSHjXNGfDH8qG66EvzGmqmP3chGNgT5HDUKfYwmPTCSryw9",
  "key2": "55vbyEf42MA3JMXDNZLsKaVCVA3S8WRV7UPtuLtqRRynY8DQik3GfumViVSp5vSfgGEdr1MuBocppd2URTJ97Gk5",
  "key3": "57BnzkQUMPKHtULUhn9mK22X86g9h6sSWXro4bvZhdzA6Et8FrLx1HQyTsdX9auzoMB7mYvL6iJRuhcUWtaQNvnf",
  "key4": "3RkiwAKJtus1tjvQJKHEQ5hC5sXxMCwPm6bm14iDj8Ke5yuFxQXa7kGewBkQTCT588FHX8y4W3He4Jco33LrSSoy",
  "key5": "34CHanSPdUg54CNqMf1Dj85yVRKAKXAuRpAUssyWJSo4uEsyyP1WZjy8TzH6BPAF4Z541Uq3y57cZNykcgM9cnt7",
  "key6": "5BUhg1bbuRmXLs73XwXEpHxkHAxWrEMjxPspx8RZF8Pq5FPsjXwnT1NEcvnpCccyik8qZMXN9QR74uDZEreYWzum",
  "key7": "3qejYJvL2PFHDZTQGtDpTWDSc3RmPkzFZQtUCXGPARgNiiHuXDeBELYJAHBPYJU9QurK2k5hzRbD94vxQrH8qh3F",
  "key8": "2ybmYH9zA1y5DiDysMoUYeeq57vybjPABpGWzBYhjXxKCE1k13EADE3Fwq4nk4PjKYoeiSVQY7R61a5h8nncDDYS",
  "key9": "3oqHXiQefxZ39uzsYnLeH6ctdcLxAvjCRbDcX69WirEAKgrwPxVDy7FCK2mCPJ1htd4LRVVpSDytRVX8BSFZRGBZ",
  "key10": "5yU8dQjnA8KnQqjYDbB2rsmBN8WvkvYcF1qzx1AaRYJE57z5UBpGmNJk61V6BPqN67WiPoF1zQjVMbrXZhv11Hr1",
  "key11": "Hb11X1S1ga5nCNvpUTiUDG5h9WwLKk1wQMjjs1Xde5k94iehxZRR5yuXTSb9rwqjU7B9jNd8cTs6G7ZzQv1aMuF",
  "key12": "3PAED5F69HTj8iFgm3SVm1ZbfVZGrrYzi7Lr897paUKwqYpNx14bsBbVbN7iSKSFatG8N8nup93HMvLfUJVQoESG",
  "key13": "3D4Mq6MPBqaCWA9WTZTNmrNiN74YM7sZ35MBk1AndRuVWnLraVXgPhekG9pZe8sp7gSoKWXrkM5j1KPk4wroHcd3",
  "key14": "qqzgaQ1xQRFTMoNEVi5MiGwWg8n9WbRo9WPmpHZScmZUpKna2xUcDKsawk64aFHaYSESaXxbs7MdFkJiRQaEkwt",
  "key15": "4saRQZDBVK8ySkstLMQfY3LmXmN3UhkyqbQ4GZ5n8JtdggLjbQzyDeVfL8UD1NRxVVRmF8tsZiRoaSGJiY3Nfekb",
  "key16": "25du6NPfbDD7zCzgsqFvsEiMWTX1rSNASGeCNsb8HDJR49VwVjJYN8duyaETPVEh3oLEn9o1HHrDKg8vvk86z51G",
  "key17": "5nEhQGQp53ziFdmGqX5KUpzuSuPT1TgLJhv58xaGohEHNLStjVuSTZLW72SzRiEgM9HXMmKRvoTd7e5bTL3rVDnk",
  "key18": "3GntTua1aqsxpBTZfeDst7u944XFqP8Wz461a246iAK1bpkmrWdXRvV3yfzuE3KDfCwrtNnr2x3UFRZfZbE9c3qs",
  "key19": "4dYkMPSxsy2jZWdJs4KTtUQ1nwtbWQMXvrCYnGBhxeqAjBvnt4hgqFMJ7BqdYb2J2kPXfetxf6j4NexMcDTcQWbK",
  "key20": "46qAogiAYQNYiUvBmFqXVzCrNtcR5wTkBXW171yzzpuRTWu8nBda3WcjDcu4WvWQBoWhEyc8fDWVtGvhXk3cRwiC",
  "key21": "42xpUmQJ4igaBcwywZG7EpzRk1Qb1hovyC8XFRSrsJMX5ZD96aYZsaKoAuGN5k8Ahiw6XfPj8CUJctTqTnizex87",
  "key22": "66Sg933ifQ4H9NbbzpQmvMWZzmoxDh6ANNTvB16RBixXQ6wsBGTvJ9yckCfzk8wY2cF148ArE2bynbfUtJ8oMpkh",
  "key23": "ABMKYh9yxUo3TgHQisXjvNpsAPTdDs4UsnjW52XzqAVCjrRGyiFgH12Gw1ZPqeBAuj56UCTBcT72k5spkTznNk6",
  "key24": "2M5aRnskTGdY2h9r2LQ9u3QEqc8j19pi51hYEzKtgS8vfWfUFMLchWVzE6S7qQFFmDJJy3Vm1NLUpt7sbcgfaAuJ",
  "key25": "3jj6ufgsxGUqqiT54mcKRzJogDmzTeBggT2NKWKYrxsp9nmzxYphAa3bXnjchdoXnsP1yUW16Q1ayazd6Z83Vtc7",
  "key26": "2xSjsQsdXxoaDRXtceo3nFFr95ANfvTBZTdaY1WpamttBGo5b9b7mY1XPard2kWT3ndHwG7x5MdVjejBbxZZDrJh",
  "key27": "MWX85wktGa8J6kosmBatGCQ8y7PdBSxBmATxeJLacvQxk5ruPtFLox3bdn1tQTFSJgpiyZ2k5dSuy8WNUfwWFyg",
  "key28": "5dnnq2X1iYxieZVhVYsNoZML6QBWkBAL6oZeZmpbwmRyBnPmN7uPskuaRGP41zKtZ9SXuaf5Gt5tEUy7vDGaLrzZ",
  "key29": "RK6oFTDwbSWAUyfZ7GEVe9VmdPMcMvZg7KYYfRTXHpTpbreJVEwSMfd7e8ei85WL7DpZ9h5qtfKsFqGtbeukEvH",
  "key30": "5w7THRV8G4fPE9hRsG6TGYZaezKR4Svnv9Gjs7agmEZwymxSaHj62ePaKDALcpMqwHdsQJqR43p9k1mzpCcgZvtv",
  "key31": "gvFiYQuR9EYdDSCeFgRXTjiSTTijG2EAWBXg8KzNPFguwNiLdikxdPVLJ1yUW8QrzACsPCADsiM2B64APiSuz29",
  "key32": "NvJ4CGY6Vw2KANrSvgbcwiSM3MNDi5H9XSqEnSj1d5iFrN2risG5WK9rdDfSa3H4LSvU2cES5iSW569ywasqGiw",
  "key33": "4bWDtqJeKX8uV1NGaYnoR8Lv4CHjMFbSw1uecxsYHzpmEdxRGaM3Ty78cB88Zki7YXQ5BtkrxSTiHSSQMy8dWVif",
  "key34": "67LEsQvvaSm7JLYoxmXgPBBPp1NHk7h4VzJLGAn7VdcZ55LcCivg5YnKBUgfE7jp8TwwbDxLweqhtAJEX573wPmG",
  "key35": "EqjvXSwAVDWNTMoCuR14sFvZbnuq1bozo5RhvQE9qFVHAgF8sjgosRDiFPmDVArWAchz2TwynTntRiTXKy5QGNh",
  "key36": "TXSdnfXh9ruUk4hc6no3wCgmV746YjserU9nV37vjS35yK9WkcC4sMpJsjaLD4yQxh9e7iUnjVpF4rDBWinvKS6",
  "key37": "38JrpXNuSSDgYzWx1VnMivxBsiH2eH6curg4aZsd3bVQWcNPnDX6oVBRBBnH1suKoENsAYD2NFS5nPcrPvbR7T6M",
  "key38": "34m885iuzRXEQTZ9AkgroW7zewX3KwXQcsiuYoDhA7SE5sV8NfgYXYSAiQTPbpfgBU6F4ZkyNHUkYCm6WMgTiZy6",
  "key39": "5Ni83tedbxF4Ki4VHY9Lm6ADpEBpvSXGwn4ifaMsieY4WnnRFB1VhTh8ahont31wVrSPvPAPbdQK6gqaVDBP5ic5"
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
