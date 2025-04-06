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
    "zuMaUD4LfgLmxa4BLit34bYrqxCutDYzFrkoCLYTJiGcQKPZUmKqg78SEDWHQaKyu7HrEEZRQa7jgojPX3mQ2Z3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rjGznAogeDESL7hzwbpNUCDLfsxSnPc7Keg1od9pZpv3KK3L4BKXrabUjKrERhhDufSuKNRpCQhBa37gxeM4tj2",
  "key1": "54EzYW46eggUxJgxYGv4KsKMN9JqZi6he2YKmDmNmjnJZR8EaHEr7dxvCUfzK1BEG9LXcxwtNxw4V4k2KnCwCWwA",
  "key2": "3FS3PZ73cW3vDtG1SLDG2PF9VVZVtuPKipuUk8S5rhRMn3Z8CyY9c5x3xxujbaoq9aZUQBdAzSs6XTTKJsMPFmwN",
  "key3": "2ZqAurkgW254aRbeTzT6sLeNoYaYNbAxqxx6DXrZFTCFAYjcfqkk5TLfrD89esiAWJbdg27pQfcPgXNVTUoqbrP8",
  "key4": "4ybNiRpvLfQXWuesb9u3QKGS5a12WQ6s8tauLtTr3jwZSV5jryZZorb4mLLNeFrkCA62a7J8Ax86Pabtj455Crnn",
  "key5": "281z3A8nUsq6fySoN4voWtwynJczH9z57rWQx1SsWr3iXGMMtSuqwfAQbn76YT99F2KSZoQ5E5qRg4QWH4TxbrhY",
  "key6": "2nJgdaZ44mayPUvVoTSV5BMYNN67p2jmCmWmFmzubeEbubvfpYpsKN6prxPv7Vg2NLRzA3FPVrF1LLg6sECMQCaD",
  "key7": "3r2fmtxcPFbDa4oAUvKJ5cUJGd491XukyfJoAGDkSyMr8YbBCnufgi2F3ZcXgugua77BQFGYZjNo78TV37eHRDc1",
  "key8": "2iAQ586uVUYNrCVe26TrHE22psCdb236gfK4aWECND1UMjhcpLnaRwuwa6CqKjQizex8jhsGcsf8JJLzLCtLYrkH",
  "key9": "uYhyRw8VvTCFBWyf67zdantBJmL6i9BJ3uMaeap3sf2RdZrrCWYVFDWynGDdhnLiFKQQDoybNrsQu4FdiQw96cF",
  "key10": "4ib3NYsD7Fq2hW4T82XCuWgQSSSnqJ8WtELMucPFrZ3Jfm8o1uJ5SV99Qd4n5ZCzGWkpRhC9zVkTPthoRqpHx1pi",
  "key11": "2cWaKBUqDuRhyZ43xxt13qTxbiXq3mtbHH4JcCKLSD1QzLFadhqKU9Yvzz45utekD8LXyZ6Lo4bqkXCA2rzD5vxF",
  "key12": "5nt1oaGx9CjtkTaPyRbNzwfrM6zFXwHrUng5VEj56c79ydLgsGu2qeEbAwjsY53PCe8Ec9yGrKLiZMxBiRjYZuqT",
  "key13": "3Hge6extFCW6gxuNJgu9nLjLiMCjVyG62KWeQgDBr9jU8Gz2hi285WJw8aj3bWp6rCUaYJoUhNyvUVtzGaRvUGb4",
  "key14": "5aJeLLfFSecJ2vpw73Dzfa1bDGqhXUeAZeF6r8PVTWxdMYJN6bfa45pH4btNEpCiweAxQH3FfaqbyL4n4MbLus3E",
  "key15": "5E3UhFm5151Ga8CrL9WMfiptYDHx2ARscixyYgsuV1LrieFofTJcs74xVNVbQbSFbTnxkYX9VRPaWe3KKygyP4X4",
  "key16": "2UNsBX78n9ijXFgdYetaPEfKmirngiQaX48cGFj3qGfZV8NWiGg2FSB6CgPXo2eN6Gu2j8SbDUVMKL252DmWqw8n",
  "key17": "5o9Xx6EvchoDReAgum44Bfz7fBzGTHKLvmy9GoMhBfY2QWKhFnTQKEjZV7UuFFAMnTwgJughqkis6EDLrKoPbpvN",
  "key18": "ZvFSHvfs6fZAAHg5h83ZruHpYWrhZGgB3YB5yfTdGE1vEDM2BgfK24rddkGLsAtkmoyvgnJ7vMMNoeU6gmgtQpi",
  "key19": "2EQbnvgphw1eyh9xH6YHeLdkB5WsHnXEHs754HYRMEQQZeGW8arPH31EJPx6H3g3HADKhzfgUHJNNAcjeJAjQiZL",
  "key20": "2cpapRKNz38daCrWoGN2s4nnKXgx5vTuwAhYoJJJwdpLDxv3ngrrbC6jkV6uUMrqvKGRqTAA6ydjN7QAZG1vA2CM",
  "key21": "4MonRrxepERRyLPnSLEHNAoKjXwYUqGGq7BtmeYxodWtg77AgsResbkhSPGud6iZzawWt5ypFpx7SSwgUKgkoCBG",
  "key22": "49KpwxUzxTueYqr8cEvpcsZibA4yetrw1Hj9BxbhLdEYVC2TNc6WRdoP7dnvGTje9tR5dZXPtdLsXc4WRfze96ba",
  "key23": "4u2nWQiWXwRj28EHHuWZtrkdmcWBNbRF8uRhkvfT2Kkiudecuki7KCY7gXLKKCegGMHKvfcGaT5pAEBpJYg3zVMB",
  "key24": "5mXp3VWG477wcK7chf8syoBPLH2U2wi55WsDTMLgDyxTCb7wD3X66ydD3hDTVaZXgXZoTJbgPYzx5rJnUZp3UNjc",
  "key25": "3Zgrbqm1FDvNcGKkyogc7yqqjhaezq7KtYdyvbNrNLJMLFMYPRpAuayA3EfNY3kStz33NdzkkT8eq4RYmV6A4vaj",
  "key26": "2sUaJ1HFycvNKy4RoLbkVJyabruAvLWhSYsUu4gnmoXi297M3VH3aFM7Rg4BXyVvu8kiNfGUXjsLXYPRzgbc7yGW",
  "key27": "54ZA5LjoVKj1uNt3HwmzpoKqzovdk2HczeaFeMB2eGaaJbTQHZ8kbN12UiHsZAHjT4QZVppfJsey9whVkA3dQEZz",
  "key28": "4yt4kqZnWQJzA3ArhAoY2gTaDP32iZWfhunEuVaggoAKRRPBixwdf5hBDuw1AZawzATEgDBHFLosLkbq91e3c4Yh",
  "key29": "67TvKNgABm9KRPaDh5hshGp2tkfMaNGu7D9nqg4K7Yp9uNgKcP4TwdivNuCrDEztU3Tbk9XwutJXDsZ94SxRQvfW",
  "key30": "2VXSM5nCBTtXMS3gnu5vuMUg8JvhyMwJj2ia1D5Vb1MBvsnjcudXW2hh5M7gM5kcrCxzVuufM6wV9Jz1L3dJexjP",
  "key31": "4VcWA4vBw8SVihG8pxCY4S3dCMKxqhaLoZY5syCQo1WSWP7ygxjh6te3LSggB6iJAhQHMHHUK54EUt1UF6RvD2Cz",
  "key32": "xQM7UA1SFkSssq78ZKftJwErBcm2TjCuPr2DWidRfsaL8MGvcxafmpMsttDkCFaGuLf4xWmDEgcntHZU5PBjHck",
  "key33": "vMLKnVLW6vrHdLMX6g3BwAQG8PJkLm9BneKSo8Tob2425gZhNLGYDonFWt6VpqbKP3AZXHWx6zeZpUxXBsaZLm6",
  "key34": "47C1SkDSpGk2htoLHHT81FUsao26uyZCyDg2nj4uWnmuVhAWdrTbrTbhqTuM1UEabHf5QkfLpAsiXXHA2auoyA6T",
  "key35": "3d81e4aoVRGnN36enWxsSrLP3dxFn6AyfKtNDtXZfrcY6cTYs1ira7CWSnB2Ds7PzYdv4djRfKUjiYYzWitkX26h",
  "key36": "2RyVP62kEGa4hHoFwLygMFKFb2QiCsvhtRrvcn3AoJSbB27zN6vpRt75KPipoTuWZLSfmMtTQ688f3gN8uqjrtGf",
  "key37": "45VF8exeRoGN4hWpuz7E83Sk81GPbwK6zGYXmp8fqEF6rWznVH9bEDGjjz2prNvS1Y88Tqwm9hjYsifyzHCywmCf",
  "key38": "5nnxb6J9g2M5UcCnw9Z7jZ9zApNwsaF3zJxEA9WU3bLWbZsWdASo9KjDJKYGihwwdJQywE6Do9Fy8UftvrcHMCkx",
  "key39": "3CNHm7CeN2mErGcyRn3QpMvVSVPK9QfynVDVNHDJDfJ7MY92qePGKzjwhxTwhDuKn2RG98oc2kZRxnqqYZVe6ddJ",
  "key40": "5XyBdLZbjj2wuzczjDRTALywBBYf8MJHC3LHvCUAUpDzjfwjEudz4h8eThUj3WLwRq5RK6xt6qUviBrzKVYVUf4s",
  "key41": "2p1uATqbkSuySe8bcGjmnBcgpkgwrajk5X4Tviu3YtfbaHhPMJvWyfs2FFGJuDmftR3BdBCqkx8PuaKXCBDAttbQ"
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
