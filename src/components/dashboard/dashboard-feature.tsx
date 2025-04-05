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
    "4cBoo9gZ7LQRwLjCaoqNpacE63hcWaa8RUxTgvtgNdNpirMsdezBr736ume5ebrm1NM1QVF84oRPrab6NLWXg4En"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E1ebNMDtT957yLUoo2JgSdiehw4oeYJyCxMeVMQrXWLFJb34jPuBNnE6yiSmrTw9NC5K5j4bsHt5jKHETpnqc93",
  "key1": "gngtTcogXxtvVMijBkZsqDMGjSWWUc9h5xnkH1YKEJkJfhi6fkD6XV9Brou12STfSvK2Puv1z76gmMut5x6znsZ",
  "key2": "4zSsVpH91cskbTLtG5CgPU6nVoYpCtahT541T32LKyriepinRyP9VPuqKBFdEvZwepdAfTgJtQ1Ac8tFkFxh6T3s",
  "key3": "4yovtbfQhAiXTEESj4Ya74HtohEwvddPDSSoG8cV7LZVmdvMnhBuofrrrm3K7Y3x3RXp8wBzYV8bjRSx6dLHyCsq",
  "key4": "5Tj1Lj1iJz3Ns6AeSssskx5ZDGsdkReUn2doptN4YrHSfnNr6FAk3uL9MGmjHwEbcsQRe2qVA7Adif9Zo2FD53ey",
  "key5": "m3LCKTSUP4smFFYVfLHF34h3mCSpHY5ivc3GEMGaWbJrzi5fNQuLw2NhQWQoUPNzvixybVXLE8oevL1Ngj5qrqB",
  "key6": "dz4k7oBa6af49wavFk9w87tKJzhtgMnyk4W9ieUjgjmMWT1jU9rXC3NLuDvZn4e3hdZ5mnXHc2rieXYcaPKyMTR",
  "key7": "22tJVcx6K86MzKrd6feXbNPm6rjELAAMJJKEf6bgn7qsgXZG4e2AuSNraNiusrcBpVhY41JcaB22fLw6uYtf44j7",
  "key8": "2JdeejhQs9HascK9PYcpzXJf5tWdMeSynENcnzhxMcFNvcG58VqEcfT2af1sdGePb3DcfqwyEV1rVhPanxiSVFUj",
  "key9": "4cZ2JTUcyz5DGDPjM6eL6j3Wtfboi61r6SBdyvzvpATxsrJJCUUieJDmAZqbEjsTK4eLt6dfaoxmw25WGaMmtsAs",
  "key10": "2NMS9vyeuwcx4sfndhrUR1r8rHbznM5FETVYk68Jid5iphMtUkeqZDsE73wa42SgRFbMXZ2UbHwguLkeDfTWmmk6",
  "key11": "zh93qVNar1yXYWqiwfbz9paWP174gRx821AmiauuaELbfaV4SNGUSzmHL4eP8Zf5y6R7HHNDFneYKfKodjpxrp5",
  "key12": "2xxtXneVr7n6fgQFxKVhY5E3QFgLQcsVZDU1PSqYA1ubsqVS5HtKFhkbeQoCzTehku42PkNb3UqfrbEWHiNDFhsx",
  "key13": "QBsjYLXspjYn2yyednijxxWDXJepsKgaLvtd4BJ6EnUqyHUrPdWQrHvAQq6ddFGY37JweSEzHcvJehmWqjAdrgc",
  "key14": "2jSDmDEPUV1yasbTQh6mSECnvhzrcQErNvygFJQ52nyiNsPs3h5bucTToRUzijWB77c5YNt96diGiqHyyimifM8K",
  "key15": "5s3Xkhj3PJxdiVwyyqC6rf24UtUhoTsNS1Npx7XpMpLsUYsWJ45XYwjoPZTkVb1k6DKybPXwKzhUjTsFLGVd4QJ",
  "key16": "5RaNd4Z5dP2gsw1MQ9ViJNZPb6VFysq32LSKrvyc8H2JfYHV7V3bybdPo3m3cYCF8egUgLGNpPBKVgQMaxCDgM7U",
  "key17": "2CbqnzacAsVYnTqSacDygWDhfQU2KLKM2gZxL2eQwvAxE4d8k2nXP8oJ3ersnEyR2xgwPYNDupBWK5qBnU2yC3VF",
  "key18": "5szDHcWR8JBULNcXMS6v7zp8U9YRNmD64VeLTZMHtkA2K6jiFTx3ZbUqH1vKkeLfHQoLENE6jqZQU3kKH3DC9UKE",
  "key19": "5iSAHyvnpXN864K1ViCtbKoVqGKTerRgav298WRUdLegWrVw4ttLZRatzNf4zhnNacBRCicSDcmNLtYxik9MfH9R",
  "key20": "2hyyvxGuXu8i6s2M8K3jSQmvRKHXhRYRXBWSREsQrdXeYp8QhpBX4io9rozAzVh7nzjEfPK8uFAPgQW7GCDrL6Bp",
  "key21": "5f6Vcw9DNf1cukgoKhhYEPKCaHJHH7QALsKqQk3DCzotzzLZjtWAnNpfsdgwxveU8RTcdaQRRU3i3bMnt4SsfTWT",
  "key22": "5wouBPJYbUUq9xvzNdHjCqsGrMcAubjYJCWKAWiPegE6oneDD9dPpfx6yZvDT5g3DAsPhnsiK3PReC5pZrxEDdmD",
  "key23": "Nt79FNgWbq1K8ssXYzFq6yLbDYY4GKpq5jHL87KrwHH6nPoVUb6snVhAGJNy2p1APtcbbX3wGk8FusXAUdDrDBc",
  "key24": "5W44YeeRq5Y2hR96LLLPt6js4XpzXsF38C9NxBnV8gADWq522u8oJ29ZNAwYS8QmHcUC4VofeQomNKBonDRS6SnX",
  "key25": "63Cd7mvDQEjVkuh5QSHJxaVo1RgwkJzbzsBeLXdxeg42nTN8gEH9UwiaivEagqjNJGeQZ6uE969xwYqon3zTUrah",
  "key26": "579pYr5c4Ze6Fh1QYTmUQ2XHCQC4HfybworpoubsWJxcc4EoykinXA3FpGP8AWLesCiT5BbWg5zGszcUXQivuYd5",
  "key27": "5JHcdjoJt6CYDwAa5hAEDvsWe3d9gFnHSVCz98TXzY3TPaj8CXpNhb6z4k4VmcbFPGawPu2vkpXTXLQXi3Uc89GE",
  "key28": "3tTmXcqaCytB5Kzj8yKefy2abM1pw7cHcPL35JerrpvmmSiGZhD9MwBaaz4nMtFaurx432WhMt54WjcsPz7mHyzX",
  "key29": "3rvRPEJGAdwS9La7sxggJXewcsCv6hViE2jGYKzKmEuqvjvityHtDCCA7RXHSSsd7CELDrnqPVpHk4yBZXmmuDDb",
  "key30": "51Rv446JQ7bT6bkR1EbUPqhBrtDpvruHhPKd8Jx3NvNj8MjpVh9EExTZ8MZmoJMpCvrTybZvHATHtLWRMVSLtpQK",
  "key31": "1W3EKb7cfhWEtPxpZNeXhrqFgN2xwc6vrSWVxrhGDyNHDbXvusyyk6YdbeNCj3QNUFGcQ7r8boyrXh1Zy31PKkv",
  "key32": "5StQYSNijmPpMoEqKNJcHfrT7aVQpMMmfhdshjpGqbuVSCNtNtxXdwsteFr2hrSpTwoig1w6TyNxwbtEqLfKSTsB",
  "key33": "39LWPUJmAJvm3Pkf8iWb8q2wS8sUzoguJ7FGVQVEfgtqEFrt6PTa9EX34HXQJ3dgsyfUZVpQrcgnLYRtFkbjAeeE",
  "key34": "5CPkyLUxCsC9QpHiQ98JiWeoYhSwjhGekJLMdqyX5xpsnrBsm73vbbtVbDSJZxijazzB5wiyC6KtK6QuKrzy3cmE",
  "key35": "2cm5q8GGPX31GYJcSLCatoaGRyCGg1EfrTXemcnG5G3vP7jLVDhyDvhJM7QN9azJcSmvxE6pdb1rwzpAE5vEqCoF",
  "key36": "4cjKkJXU9JgXhWTW1UYHDTrH4CsNbSeeKjZTSqYMo3jMrmYenbu29V3mWFYZd5XkgefpDzps9MbKDr5DdSMKPdZS",
  "key37": "4awJwJBZmMYf75RSX42qxK4qmDvT6pTB1Kuhr7MaEPxhVQZ59ChgF3jsryCR46gvuAZjCu9TJ7fEtpoXmdFW6LLn",
  "key38": "5cLGcoyVbHqmdZbqBD5uGN2zAiJPmZVxE8cJmAQYSxgqY12RfyjbHXFVCzygADWiYRVVVckmiaWTVFrhZj4nQ3ni",
  "key39": "3t5k8d7xJGxfpemhPNtntwGR8UQ49TR3hQZbZzkTpmepX5289mxmVDXvUpvoAZq4URNACd3qqyHXZerW2dCpURdf",
  "key40": "2ACdaPDHVSHV19cB2Sss4aSbeyr8ceLHbinUyKUdnQ7k3CDefkiZ63oF5e5X5qqKGuVuWrkpr6xwdwXkdqUmE4zZ",
  "key41": "54CqvyFwMeGBnwL9eFgN9AVck9VQDRVDHxG7xA76ok7Eu9WEmMS9P87oaLZKZioJqv6zouYZVsp1FqgjGnZom6Eb",
  "key42": "64DsciLTE1RhAm1dyrXn5d2425JDDVKKk1z7DFPcLtQciF8Xpa7VynyLZoMKJ1AyJMVbkbz2p3Z8FTFF22rnrZQf",
  "key43": "3a6rEnb5jmwgjq6o1PynpqwysCyTHA1myQhbSxNCpk1gDtrcBKwAVvrkTT9N4x4YME5e7y2pVFspiXux34qveJm4"
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
