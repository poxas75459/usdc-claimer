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
    "5etqbMFjMK3G4kY1P4abJfQ12BHV6Na1oFQidSTQMJxKz3rrhxxbDdcvwwy5T9QCxcT8zLjvu73xZ7h2nmeXErJg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48zZC1c3Lmdv82d9tu2rcPDTaJcYuJHSBcSxAZ3R985eM3YeKmeaBUtkD7E9aLr2ytFtr5S8grFTEJWmaVru4QzL",
  "key1": "5csLMxMSJswJRnjikbonajSV7kWmcP7fdSyBMu7tJjoCbiVvyvYQGnEVBPiW1sJdNDC2fgFHrobLiLZMQWGVUZtk",
  "key2": "4BNYpojm7YJN4LpC9PhX2Yfq4wtKYrbp4TTRwjwxUHHrSXLiiC6EXVXjfjgTcfNPNcRTh32kteR93pT3Xdf8J8i6",
  "key3": "5vtPG9XZJNXjxvGFj98t41Ci58CysWiJgm2LxevLvnY25VJsdsTPcpczDfPHaFmJVUTGuYBBMtQxKFMn2XgxYTm7",
  "key4": "4EC76zXB8UUYvP1LRe98UMf4EBrpwWoETz3Xrqaigb4TirgTppjadDcfe2uu3nAWEwgvNSZgQ3tRPvRgPGxwBAio",
  "key5": "5KSRRoV3qGYYfPyLQFfaLCEv2RG9Ak541gHCGNA1ACKHbpGFPvpwKn62Fg9aTJjwSsjYN6BGX4XqRv2k3SdyddqK",
  "key6": "3gS66X3zfJXqfMAdSguuDekpaFwuE7SaFgpwFpAosNuoH6P5rujMmoLbpnw7SPXTe19Eo1AXExVJhb72sQ9UcMhe",
  "key7": "2LWcrpwz3aNCXwPpGdXch6fKi3JnRs8VjRA4GTLZJpv5k7aUJZfR4XP58q1rVvKCiDbFTBrHAZ4azUKV3kkroAgN",
  "key8": "Zo6xZFuFQdtAMrDqkhoytFWPH5ATyifLwHX6xLcLcj95nupXTS4uHATmttQvb7rESULwRpSv6D7qkeM2QpHdzMn",
  "key9": "AFBsTjUpr5x25QjJBQNuFGoUQ23bv61w7oXoL2L7Yk4EYSkundLYEDFWWr63s8H8kCf4aA3NW4r7yUXTd6MrAiV",
  "key10": "5SyWErbLHNFC6WB285WAjhkuPbtxbm7bU16ATSGLjwCg35DrgGrTAWoeuFrTWWqhe57v3LdqfTjXqGeHREjRA7K",
  "key11": "qPpBrVdQGA3zDK3wtVSyiUda2SzKotK5CNkxrrbtXRKUfJYaRYJ7nW2nsVtjdkzrwH8MmxAM8cgLXgMxtMbDTsU",
  "key12": "MWjwUeTVF7wK2RMVFbxGfjwGJ3AHxeMpeQ9H9UWWm3JVPyNpAaMY1j42cGaL7Rr3wWX7F8sspewGdBdiPKzn8cQ",
  "key13": "4a5XbEnKJeGpQtZmqRwXAS9rkKR2HZ3pgQhcjCVgkXkCTGaUt5LKxPxB1WHnanjJ3om4mZPF1zVyCxQXh8VPWLtg",
  "key14": "3BWGQ9mcZUmNMbgYQSrSQsCs2FaFVh5cJ6XizQ5YZdz73AbFKhX7qmzXLQzrYbEvXcQTt6Q1uAzGdjdJbS7o8fpe",
  "key15": "3Higp9mR8mx2m4Fj7V2WDtcqhkRv6aony1SNRR5tMaBYz1z2XyRYXjwFsEMNKC3uybpsbVhGamLxxYz6iWCFgUGF",
  "key16": "5EdvEduxnM268VuiBwTejZSK47CPPYTQLegENyiHHuKkzTNKqN5dMEWbHtxJG7BopfY4QkytPBaQgo43Ut3wYtCF",
  "key17": "wZUPAgE8yvrRQmrWWbP8FatQF3vJB7UBNSBxBvhEtPo5K11cswGzZdgqSABR4aKMVDqhHUXy6Tb9ZP4dK6GCy4F",
  "key18": "3fAtT4t14uuKiTv9AYusMgiPPpKTM2XydaoNodALm5wwqBm1GrRaZUdRkEUtjKoRnbG57ehXdAf5MW2SCWx3wBFM",
  "key19": "5QyAs3H2tV8Vxq6vtTEdYcUVoGtW5tLmGTFJMKgYpWS7wx7qDdFK1rXdaFou4PpmBhgpoQiAwWnA19CKYy96F3e5",
  "key20": "PGNfbb2KCBzMfmc8w29rZvjTKsrxZuwczvidUYvnKLccKRYS3tqR8zRKaSmukMu6ZnumE6JT831wPSqSmhMt5jn",
  "key21": "2tr7Nf7MZxU6of86243vsLPwcwXzcFBphzPM9EwMutsaNRdDHKtkn6aAYh4afyvrJXjkuJqCSjm257SUPjrpBonJ",
  "key22": "4oAXp3JH3jCcoTheZDbtkW1X68fX22H62ayDXCr81c6zrbm4MdwHjEecUAMb5AycA6NMi4cZ9g72ZotJ1uCf9F9Y",
  "key23": "YJHMKRUs8iq1dUnNiEpAct5bvcpodb5XKzm69eTPcxWZjjafA5Xhv8LVykBZs7MN26P4H9PUau7b7fwAvyGH698",
  "key24": "2HMyrRxHyvroj4vAztHNHg1PJdv6R19qFJNZkmXXko3suEmf4c7cfwGaZJiFihA7rQH3dVBjKKXDuLtcuqteyjXP",
  "key25": "4MqnwBY3EDAydJtcF5mAmFusaeTDb6BgM7P6BAzyGTXEESRmGJt8KaNpL9wmVDXf3s1JkE2C9eeqGeQ6wkXjE177",
  "key26": "5ubyYXsKqtQnoYtbHeyFFz1hhMUW5fXn4cehETaGsGqXZdqrmKvtUbHEPMtc7SwyxNtjeZmTQLUj6EaXstciEWcR",
  "key27": "4vrRKxk3neMAbWp31qL6faDJAiacXvzGdj1BSCoymWgnsSu6M9dwosqLx928G8uw7Wdx8pXnh8dNLQyoK835xxgQ",
  "key28": "5nes3mChBE9CxPcTYEtWdsCSkvKtAL1s9sNhq4vGMxAnW2N3t4RymTNMqbv5nTdQBdpLMwpLP8iyNW9U56TaVsiP",
  "key29": "2W6ewtef77k3JPETz1SADG9UnYPgx37uzNyLjz67AmPvmJHzUSpeH23Y88t2YEVB1nBCe5AgPnAqu1RU11KEicbk",
  "key30": "2y3nompfwLHyGCgoLGYfqa287tTuTXVos8WX7vhRLhogiRL47NgRLEzJG1prqRmGRSYstbFFvRC1aGGXATguLX1s",
  "key31": "4tapZtFbeLJS2AAV5ZhWcqxsoQsubaXTWNX9BMgXjq2WRHwJsyXofpZ7SfovtNS7hxQHPTkS1nXDFjmQq4YL9YPR",
  "key32": "3zu9P65P2LPJ1Yrmq2YNfc7p388pv39uK27uwQmid2zHhVyUmmaG9caJXS4jeYHnxn2jZ6C5mJymBV5L5hZwkhDN",
  "key33": "RGkbh6NPCAK8NHUBLtkh2Rek3VfF1MCT9BSXHhyLejr2Ptj92eTToSd2H1g4LW66QACrAk4VqeodUerjMNoqFVA",
  "key34": "v1VAXx35XAqpn5JWENtfJLKrdnKEr7dAqWQQi6G1Fyav2kChKQHPKaR7GzzPtUMeZ5h4MJQ69N1DFaAeBKPhWUK",
  "key35": "5T2eYEde5UfbNZX3LWoRTT81SXQPL7D7DLErzgebudyRxcMhUT3BRZbatRVJGX2fxjBUtcKMHwD5vkcnAxRkkcgf",
  "key36": "341767G33X6mceaE1DaRhfXhqQfijz82f44rrayEzhQDwASEizc2FgS52UaptVHZRQzF9cAuwqpshBBx4emh4JJQ",
  "key37": "2htwejfsJm5Arjt3NXduFEt1dHGGZ33YLcBbgxmGdTiynCtgGSjtL4wXr9eTiaXPQcAYPTebAzQmgTEp1DHwfQLZ",
  "key38": "5p55439BRjjxx18bZEEUcyQRxbFPVYYtQPzBSjkwD679caeN55LUN99cW4fMxkkoCiTw7fq1sygpfupYwZpFctJL",
  "key39": "5QisupX2g4LqwSYprUnRZSJFXA1bc9p38AuSrMfpyW1vApKXFyTsHtVp4k4Q4wGjVpTrrf4ZTdfXRrAX4EZLLuae",
  "key40": "LF11xL3fmBffCVncqUCS7rTeDYLAR67LxFcaR8m9TADHYjuFgxzNaA6bSNsGcchFN7ZPSsEdhkPQiBKxQxp41JZ",
  "key41": "5ZatMNFXBTyWsppZyxG6RPY1CNFYtieu4cp21ckEVbVFnSmwt6EF9Ct3QWC1hkbSdXJuYFoB6vD1ZQXuhYYdGTdF"
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
