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
    "EfB2z3TwpqP1uJpju2H7bBcYfPTNMTNt1q6bc1ETz1C5hbQoH5SccsToPA4H3K8FL2MEmg5hx4fJfLRsmM2kRqq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aeTaty3SD9t7TceEW3UCgPFFnah5tZMxE1NKkxKVHWcRhqsq4BHTguQAMeECT3K7pZr27nM66KM93owkBBD4hqk",
  "key1": "5DotN6g8XDKCNQLeNpgbhChnbL1z3e4NWqkJQJLoJTtnwAogiRbHbceM9SazfaZvWqBAn7uF8KBASREzUhg9vGWL",
  "key2": "SJb7Bxprw6SfuNRKv4Cuzuah1Qobu7jywDon1sGtrSCgBpTwfjucxHr3TGvc41KL9TnnkrYJLUcSpWNnXE1SJEj",
  "key3": "e73M5eQ3JQELJaqYRpyot9RHrs7sh3aZcTDh1MC7vJs64kg6jaFfntcHnPYafRtFsd2vDZjEYVEa6yaDstj5kyP",
  "key4": "2xCBoUaqr4ZLyQxKAAP8vKH1oTuUYAjLAyw7HPwx6KVKTXqYmKrACzZdavNfNLxdhm4KVVGowHDPKhjUeLVz7NHf",
  "key5": "47FX3CZmgUpDxDSUtH3hWdHjqZQRSJ2hruU16qLe1UMir6xkWFa9zpyJ1wEWw6HD8umitF1MZqag4auqghz4jSGg",
  "key6": "8eP7phcsD1s474ZTwS4esJLhehEigKVoVNKndHJZL2ALJMpQJUss6agEYbMhd8MCxL8d8LhiDPBB5i8z9pa2ReT",
  "key7": "43AQPDuKvTYySYRvWqCAKzXjqEc5jbvYoxBx7WQkLQmsFFcNfZzRFPvPH3igi74mVBnNAik4ffou1HPe464CQEv9",
  "key8": "jBLUqr8nhNxA9edagHWEGLwBPvGWkccrxNSaFEq47Y4fMybAUtGRQfazoDNgUZKPSbNtXmw4P6cq6whN3Bs3yT7",
  "key9": "4yLzkBJ74PVtk3HgQDZ9WkKyhQQU38Gxo9xYPSh2RVGbDvHtrarScMT9fKHiW6M39MFDas3XXqdeA4ngibWUP8pQ",
  "key10": "uCsKJauR6KYt69B4DqjpFNYuJkTLyG1xH2yvFyQVNkfEfmeXfwntASomEpc87SCLhQDUyuKGfVd5SdwzvP6L4G4",
  "key11": "kR49zE16P65Da4HAYdV2wCUnoMvvv2AQQGK3KyoGhBqTCsxZnLEqZGNudyP1qKMhW1fWEXbNzqcAQDoeTosoLCJ",
  "key12": "9raRMMwmzuiiMNTPPbAmZCPb9asrj1xznCABQYHrrZcXuUekvmhtjY4Vnm5WTf8nGgDYqcDabVVNNUU8dN8G9Lo",
  "key13": "2UPEfdSdfueCanT7EEco3eetrYpChKxEzKwMQNgXaiair7ZZMaw6Q1dU6QcB3MbMDjKEcRztJRgFEwbDUmX7GjEE",
  "key14": "5PjxqBa8ajeUDcFW7GPmuES3oDHyaUJRGSTeEbbgtcFYFkK55vYoKAmniTG5vGHrLKqFHqdhVNuCBCLJe2ykySiN",
  "key15": "59cGoX7xcHQYWRcs7CGUswXaTmNMw1yhbP2aSt1YpQkEv2jGKJR6buzBt1Zn3M2hn38Ly4xra14ZMEtDtvvFdV7F",
  "key16": "5RgLPXpdDCDphwVkR3U9HygiC4CcHuQTqKJNnciUQcNzris8kXosV82chxaYy24R6gyTqAVGtTbqr3cU1J21aAPW",
  "key17": "5L3zm1Cf4e8xev2AsGYT1dp9jhbuLFScADdxerstHf6qwgBYNdH9XSgww6zvyd2ZvNZcAnTA8UoLTCHogLHwbj9W",
  "key18": "2tLuXvzEcspcZaUnP1hUxqvXUevUFirWbpAhavQJX51ZyhsoGGYX3dv1kZjcGUFMFMXtsQgR8nNvQoHiypcTkLMb",
  "key19": "WV4G7jXAcJtrZuPghNjS7aDveE2WzNpyN4uN85YRaLnrU6nMFq9h7wAkovH13WK1gCUynDwhkKSCfiXeG6K9nxQ",
  "key20": "5xwhGWA4L4fzz62QmPaDD65j9HHoeFsHWuswMREWcBPgpr5bEvyoVkC9vK5ctpQGxT4AUAA1z9MjfjjqWyhMTLkQ",
  "key21": "ZVnrVrpeGKzdyE5gLrRZ9vXf6XQPD5Y71UBRBnBzQ5w82cGNcA85RZajPJnc435p36wWvSKy6AE6giLnDrBtsTN",
  "key22": "3mTRdU7Sdjqbz2CLr7z2qKqx945xMAudpbcWAp38FMU49X2tPNXwDnWF33M1dUuKkPs5R2e2KkUc2Pz79Lv6ayNM",
  "key23": "5JuRodboVvcoGV8LX67NkrFYvWEeYUKmr7YPxHB8L9MqxoMfy4P8ZuonnroFXwZH1rvdPReFf2TL4AChcns5DbcP",
  "key24": "3ifZTaRFjEzqXx1D55xM2HrijQJb3Tm53JvgmETWEHriqzQE6Metpy67Z6ezAaW7fWGapCfVeszjk87bcAhyGF88"
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
