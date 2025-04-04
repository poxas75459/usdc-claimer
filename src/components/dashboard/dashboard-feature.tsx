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
    "2SwdXyrz1HiQuk9vnm9fWCgtQ2gvz2cdQN8aM55iYcyCxp8RqFLAXJk3wtv5Dxt8SobPoymjXVazxNaRRsrJ6S7D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66dmp95XQL6rqqJMwqb6wRffqXtpmanGgmkWZRn7fZ2viVVw6ohCvLp98BECn1BC5wXrReSt8ijaXGbJqp3zYFuE",
  "key1": "3s6ayn791y6wrMmVJzSoY9ToMjDTyQcywHRuBfMRYcQE2uaDniFVsw78AQYboqhF4C9qZfy3GbexwhDa8Gdh8yBr",
  "key2": "385K5ZZZpRXzya9bRLKa1E3PHojVbbpZswxBsphP8ekr95XvZpB1KReiX7uf49XSL68i4kpGLSJknjV99oruX1iZ",
  "key3": "4Riwtph42sNJtPzt8H8uuEiDJSo9HhbkYE7jt1U8VcWhPQzpdxvaqHEyEf5ZmSu32BG8H4DeK2MmPCwtuVyHdwnS",
  "key4": "4AEzGsnnpUvwCxvMM9q1VuWoVe8xdTWWnCAzkJ7gBjkEoG1XGPcYCg7nin1x5eei97WTC8obiaAoGcpwtfLw2LaV",
  "key5": "25MqxQ3VV1BgVDhgAMWcsd1HExqZSragAcvd2Vo8dTgQnL2trTAQEv7uKBkuyAttPMxWYduGFLExDXyAidemQuW3",
  "key6": "2R3GZz3Ed45phi9rmKM3ZqrGssY7EFjogaEqKWjfou5n93hRFJDMXJj3xXLSCk7YKER3ppko1km692caVwtsc254",
  "key7": "6742hXTRWi2Z9Ftoyd43WfA4p6jwJHmwb1KF9hMCQ4vVMkwvwxgwoYcSncLubek8VAHuGKwbwvqxMsCJPVGCHfnk",
  "key8": "5b1qfoAXxegfCgz9ViXw7r3joL4GjmXWLB3MDN5vRJ27DkoKdER2Np8anDdPKsHnuWtksMtAqztkQiWaCUpPP1y7",
  "key9": "4WhumsfDW8ZUuKuvYNL6yivpDSuRqoB8s4iQg9trpLtfErMs6thfLjTRsQGZtV4xE1QsDCoHGCjKDG11LBz3t9RV",
  "key10": "41BnyDaPDSBmnbPwXRTcJTtTqio3HjA6fVPSPQ57CabM9o2EccpoF1KCfueLkc1evy6LuQcZ3qcooixJMQaPZA63",
  "key11": "5rbCzyJ91vMzSbALJwTsVDny9mudNHe4TC4NzpJgLXqqxRZUDrd4gtRSVfvet2zRP6PXu28X8dmh8wQBa32KJtBT",
  "key12": "fwawNEqFRdzoE7MgJZku8uZT6aY76XGz771dx3nfqSzC1P7FDQffpWiiik9N9xyUjoEe9uwJUu8cRipgz86RLXb",
  "key13": "JLfS6m6bBZTf1rJsFw172K58TUhUYv7T7mqcQSgvxJbtRRbVW9uHi48RrbSo5VihLDvTW4uJPLrjncWY9nuXpjL",
  "key14": "3t41YfrZrcCCXm6D7xNuuaJRVUjPCYCYnD9PdXQy2BLyj68agnTcWSsHzwscyRbpbTCSzErdxDM2jCJDhjQuySpF",
  "key15": "2PCcfYCEGSdSxafBLc2HMngrHynRgG7vghshNvTsNA1XmhHyXouf5ATytEMDMuMxHtitzkEN8ArUo9J7Zc7PGYza",
  "key16": "53MVeDiAy7wVmrNzGbbeRFnmFn1zKrkMaWPJE7sgpARNC4ysmViebQgRsbDa7GhEhAc1LXfdrEBHjyTXKd46y49V",
  "key17": "2Mb9pDD7jz3YBHi81HXJWq93AcpmRKsBM7bw92xaeszJxB4z5hz65jo9VSSV2hiqSyEuVVpsBvqPybGFEGKv6AHD",
  "key18": "U6kLPC9oJR4vRoT5W86otKm5icsNc969NG5yXVLpX7noaebx6UpBFnKepBnEYezZ5MJE2c4iGX4uwDUJidmFx37",
  "key19": "RvQt5VicrVLty6xAQNP66jd6gpSTN7dqajuH1hdETRR225q92Exzn15ELzB2eANNHAEJPyZaH4LjJ6ADfgySeV6",
  "key20": "K1ZM49UxNsyYN7nqeyjmWf39sUVSwMpRLR67qZSG2UHF57JiaE2jXbRkyv1jGMvGWEMsByJao4b5wHm15RQwAPr",
  "key21": "4NrdBgxqxAE6C9otJ7x1q327k7zUTRLTz1vX1TaCCWCyNdY3yLMthmn8GiGt3z2fWLF1U1Hoi2LBwhFjiMcJkEhY",
  "key22": "km7vNSDTaQWV2fW9bQv2wcEGbvrDy6UQV97afqgDHaQup4Dne9CRrV2kYy8Yb1ssoySSxwZ4oyc6fhAHsRtMFg8",
  "key23": "7RTeKcCqhHZyVVLFGxBR1ax8TLPcUxHkTvQWn2Ez6ZQzwsQ9kFtPWc9GjapvZeutMSUBzZqD3BHLKxpSA7zHkUP",
  "key24": "Knm6k2171uiCM7zCgqBNqaCEJtpa8JMu9rVVzViVHoKkD3CKPDSR1utwC85ECXVPQXEP5GVGNqqTbZh1t1PWLuc",
  "key25": "615RjrfUJURqNZgh3fJt2zfasLGM9omYKPpRwPwCb4qPDfCtastYPYX3WC6c2hNWDkLWCDpcA7z5wvwueF27Xvdy",
  "key26": "4YHHSNZPaGftNXVfnP6rP3ufXKAQqFzfTcPPKv7mpxmUSgYy7pivkEQENT3HUZjHQQUpziijoUEwWFRgPqJR6DEe",
  "key27": "4qmogPBNPjfvUHPzmvVYSEzSaAEEMwrt6XkN4mkPnx4MKqNjtJHCKA4AdFxBmAcshQFdnRViAP2MbJSzwj4VXAC7",
  "key28": "38hZx2cMnbKcpWDmbspBct58MKTbyVZ9UdyNtrZqYSXwKmNYpfNkqWBhbkGaWkjUFeqCZj2A4ccT99wSdGtPFRg3",
  "key29": "5y8cwWYBhDGiTjujNXtSNeaBbQtMavJiByKszZ3asNvrkRgfWfUCL9f9QhTpuLXvZZQhNPmFi1pgymkSGdqPQ1DV",
  "key30": "4PGNokM3zGSPNPJPTv3RaUen2D3ciPvAyXgeseNxcYZ9pEgko5Xf5iE3n1AYLkEz7CpBCyQfCoXoJYAAiBkpM6yh",
  "key31": "4ZgUWxJ383saxX19mXnaa1zmnJ9RMy79oYf2dK7WVzxV7g5KgXVgDnKAVgfKjvCfo39jNy445B2up3jsFeaWuC8J"
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
