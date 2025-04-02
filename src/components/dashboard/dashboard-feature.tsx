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
    "6DmJioBPhGjHoYjpUjyhtmjUSV1J5sTpC9hgTX8pQAfKM45vs6p6uPwfWDgAcRkNrpf4qQ5FZcSTDRV8MjQjKMF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o6yUBPci8nSpAmxWnoRmumzRYFWs6kPBNcP2yKeG4mEeqpymwWXWR2XHYsoCDVfZQX4vB1k2kEHntWpVqy1Pvs1",
  "key1": "29pFkPT5Wv2fDB74FkCukThSZWtqqLvSLA36Z6A7NcQ5ddXJgXF1vQERiXZwuTzbdN87Y1wUhG1x3Fnk8jzzQ6NX",
  "key2": "4cZ4316sK37EMtJyZc13PYwd2XayB6C5HjCJNF3UNZnTsoEbNKRNhKHJuGQoVm61VbB8X9gcJ6Kd58xoA3dpgvCk",
  "key3": "2dH7xgz5WkfkajczVcZrvMHsdpuGXensUMsYNuYs73vSE4B3ikpzzVyVKUbmhPf7e27EyHnS8YNygZYYa5VkvfMN",
  "key4": "3XKhPd5JfN35ywLzSuHNt8jrJWLnNk5tfwd8PecSNfJvzuczy1TEkEd3gdLGX6QAeSnmfAubrwHo8rMpfGETVjb8",
  "key5": "dZdCMn4G7ia6f6qjjvXvENggrSroZhP17ZSA29ajy2j29HxukWDK3wXBM1x8oC2pW5XxpYduK8znit71HLh5k3r",
  "key6": "4Zw2gnjFR9fptn7NoK2UDAYoKUJT5kHqnoRfim6zt6mfVs4m6uLvHynhGRhNsjwF9JvsYkZYKm7n9aRJGtYiWsCn",
  "key7": "5N57Tx2NoUEXDuschQTKF8v1EgRBBNC48BXBv6BpG2LqMZ9utbmTfRBMnjqWemAzXnVKYethwtZwYfGaFqZk1sD4",
  "key8": "5HKDGhpZa3oSASLH4bXvc7fneWsik61cSTPQnrXqpZwSidjjtxJqF2du9Tjx6UwxxGqgjZSiFDgrAb3zDhnBj6KR",
  "key9": "3y5v5AN14p1ZC4KhegCvGwuinwEyLpuTriLew5b8zQebkTGsTcVoYVXkqxj2AQR3NkwGSbqQtmn3udLcKKKd5TR9",
  "key10": "4JUYsJ8nFLEQr1zJmbSAYF3yJPWcHtEtDcmDuJ7vAH92R7DQWcHumryBMY67ose3WXykiRwEn1A1iNsJ9bQw5PAW",
  "key11": "2NqCUpTy9SAxVxwW6Nhze82hJHU3mG6jMnjn6cTZ54pu8iE7T32Vi5HVQbDrVt3t3S15RHmBS8T4q99Q8U8KkY8h",
  "key12": "RLW9KxQHqAVkCqicexGreWfJWLCRy9zMRMf8JZMPEmxzZhKpy7DUnXZd26QsF1k2SrVaM7CGLWb3PoYev8QQF8V",
  "key13": "3hre6G8Wdje1WbafsTfmcpSDPZCCQfyBRAMuC2u1uPSG79aA1CBbdWRaULpa5e4cxT6pU5RvAUXydNmit8zi8kv9",
  "key14": "f7p7rWoU5K191XAga1FvEnWc8Fq7S5Arjd9L699fHgAeDmPec1FG12WZjXe58CT73jNPJ4BweSWD9KTLzrfsxpy",
  "key15": "25oddtc5VYnn4fbV877uyU3tvKPNb3Mk1wgTuFXtGyaAHZVahY2cpzYzENwNrRcf2geewqKcRYACNSBRGmddQNgi",
  "key16": "2VNz4SNHosh64T3j92JstAEc8ZJukhm4D4WuhzbptMfHdigKNKyr87rebxPz84f2GksEzvqcoMNKiE8UYT8gVL91",
  "key17": "H2hPzMYJsMKs3pokhdz4spS2E67i3Zs3ekU9WXbYsNZXXGzsJfHVPw9ysr2RN8UZ64JbMLDX2HD67NTctkjemYm",
  "key18": "3UaG4LUWCr5gxu7J5kMh6w9BVueEkzaDeypYZ5pLBV8BiuxoAwPWtzukqDLCUsZGV2Qe5dwCbWEbcaDv2meBUron",
  "key19": "2ppGQ5FkRZPjb8LmLUVY6w1wK776zwS92h7vEQa6HiEYhMNsbtK6KdJZ5JR4u8UyePAoYTRX7hdMLJZqJSyHBbMV",
  "key20": "ToGmzy3HaPhervAh3zY3ja8cGGJGC4TkrqZg2nLmTLLYHWajXG2246m4HfkJEcoUndvYpWJHp2PHKiEuZG34s1n",
  "key21": "Sm2TLBAj6d8VDHd5V7igzsZ6DWNzNYKM8A5XvLb85u2ZgtEHvZsqtKQckogDKNvfk17dpp5T1Z4aKtxyXjdDrh3",
  "key22": "3XXdnj1ueRhTyA8etwsapmQMNRY5yC55Jy4hZRtGskksSSRRo1jtEBt8J1mb4HTFz13D77ZyN4dS8UzgK47btwRm",
  "key23": "61cNP8F5NuNe8RLdGWL8mHLkGG4kuXun3VB8LY4GDNhb2ayuxknsbeQbKgmrmGfu3XHz8JdzhfR42YkPcPoYTEBG",
  "key24": "5VyapSt1pzBmRFYMtzsebX8LjjxhUcnyn7RDhZ4zMsagLCjNqy8yYHehfX5EQh5KY573aUuGerxYmF7kAufcegym",
  "key25": "eG1bJKr48uuPVtQiJB2LpJEC2qe2PUtTGuSqRsJv3wvFGm1QM4tcC2AyRhSkAv9XVjGDRTirRnA2EB5dM4RPvY6",
  "key26": "nqTH49emKxbHTwnKLpmkD9d8UVqirjUMtjfVXR2rVHGfdDKR5vVsDjtMTFmJb6MmN4NULt7HjGNYB3VYGXMCNTD",
  "key27": "4QMAqMkPdLvXQtAUhHMnNuycKWzN8S2SFwWPZac7izwFW8Kawk9yRYyoHer1D6iBwp6dBJdNGTQckvz2tSzbttmA",
  "key28": "3Ae6Sp3EPoNqwe2aLfbcMiPsniJX2CiKsjSrbfSbgBSURA6WhCA5TvPp42G9YiTuJNXAxmwPv2xnJaFiKAYGLbnZ",
  "key29": "3EiSgZVwY9mXi7sSr2B1rfGwa5ECHrARP426a5JD9mpMQAckQxuuaR6tWnKhAXLudaH9KcHq3gW14BvKRcdZqTKr",
  "key30": "2tRC4Q9BgyN8aGggCgNEifXSLjWfTAmS8bxkMdsRNqRDsffyLBhhCLb3NWF8QTGGsWMJ336mn8f3XjRc1AuCMtiT",
  "key31": "ftpwW6tUUHRynnX2uszyucymiZz6MgpsUnki3FsgxGeEXJEvBPacXmXVWL72xTKCR4YQdzRxVb2TXxoJw6iPGsw",
  "key32": "5gFf1DeWVUL8rjExh1MePKCxnaNkpoQt7iymFtCWS3xoAPvrpXTbjQa6CJY8Nw8eMzic7gaFrXbp3CBumGQF9Uj9",
  "key33": "2N92eLPPRiTYD1nYHKssmvfD1zZUaQGm9psQhetxywPUGckqPJrL3nymFSattSKkp87XKyeddjkMS9KJ1guQXMWi",
  "key34": "3o4uZEU3AU5PLjvnFvyf7yTQpgRiD2LBTfYS7aQAgfWtzhz718b1GgrFHpVaCpjb3vt2JwUtehWbcknpyRxMqdRe",
  "key35": "4Vg8JHZTZcBBBVeR61dhHLxVVVSqJJTLWkVX9JFobPh6atboA9EyuhZ8PYZLbDt692CAP9uEeJMc6bGT8RGdXEUq"
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
