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
    "25KHXKUdr2T1iyRpiekJU3DN2XGj2vc1PWfNR4WcSpvo8XGKssyxR6dVfwruFa2Bjgp8y4Hm8FfBh4phJtZKsg38"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "398TdmcwoNdZ9ukCF4vpfrNyKRFPM6h8d7A9287KpqCekzUaDvZwPXRp2YhRSihH4WLwMLjNNSBGiM263xGwxhgB",
  "key1": "2tFcjSk4cbqFkLx5oMPqjU9krTZLQVvHRLJpBWZNR9GQGsNoLGpK3WWvYAnGmJX1RkgVx1Rj42SJELS3EUw8Nmwq",
  "key2": "52aKMxyMyEn6zLTWEjLMhHfnn8ohTcxkWzNRQdjZPaD7MsTtLoaamJ85kxgKz8N8uVPrMZ8FoDZiQ634RUdPjTUs",
  "key3": "4cy8jboga1BQzzhLDU6VTboVGL1Mmb4meDYBc2vvjxTAfAeVFU9xwo9whXmD1sS2yd114SkSjEXHxvJn42QYJQS4",
  "key4": "4pZ1Qr4pd5APVF7SvDA8SE5KUkVQYvqqeijER5ZEemzcUKeALiVDAq2dc3LcxY8XYFVKDUvWge9PXB7vxaPEGwhZ",
  "key5": "2MNWncP7iD99oKd4Cd5LpjqGQLi4RTrydwcsENprYBoPGW4V8zw3Y38YzvCPMenypdd7vyunn5FjnDcvTfXGavG3",
  "key6": "2GSdw4SWzP6AzKoNeiW1wJEErQXxpGwbevN8enQmGTB5nCgpVTnz97NS3qvgsng9vaiH9GnmrbtSfFqt3yvQpAwY",
  "key7": "55cw7GTFCF1BCoWFGV19aJ43N1kn3fDXZJadrkcmahvPxCZUbaoTJPLQ74feagcUvQB9czBQVAawNdxQC7Grgd2x",
  "key8": "3v9p94zaJwgrahwxnM3A3Kh6E7DwBrEPYed6WM41LZj22iYo1Qhv61ESCZoXBcK9ZT9SXk6tCj1sP9FCtL2zRq8D",
  "key9": "yH8PP4g9kkfyxBBgKiaogkgxboJ1SRyCdahdkYu5RiREdd5RGKToTKkqvFAUBkVMGuNtmruVGVc7hKCwFLqd5Ak",
  "key10": "24ZdF5SCa9Fx8QyB9WJYS5kovGbmNW9i7m39KiM3MgPuEotBjFys1mtK8MYMmaEfezj2PpcqWeBALULCxZewY97k",
  "key11": "4pw4VvCxuPiiSvUyjYxpk3ECrKF2uXP1zoyADvEdNE6xH1UkS4AeL4JacY1EFXzziBQoXCGYu6pFREgcmymFfF2j",
  "key12": "24hdPauEveCYy26RudxUbzK1Nvkh8nCwm87DFUHdhaJ74o7wGREv9AmvG15aEKFtMG7qg6inwLLY4FuFwrmFunrz",
  "key13": "531XytLRcTCTJLJRADin3dx7YaSmNHuT6gtdpTaNLSA18a9PgbvBpj3p4DJzytMp4AyuBFqDHKyGH5WMXEVeUCvu",
  "key14": "tdi1zQqEPfrfprjAbC1YSVaF866w3EEVuMaq2c1LgZzuqxLz8s6Y1RyYf9seW6w2NzS5RJjrZrWrm8jSkfjUiyP",
  "key15": "D6cSfe5LVgum9wMMWztwLmmWQC5WtKWrpr9AuW5rXvXSJnHWMT1vxywfUtGxdY1sokvLCxbXS25ggMSYzDW3mHq",
  "key16": "5feiZMrnarxQfKbnGdxArMSWoVB4eWo5cMpoph2YdnxGy5HFUTHKizfoy3WSm4JNKcnRvoxWj5Fh4ejEDieqo4rX",
  "key17": "27XB8wKHSo7jqHBCYm33vRd5Y8XfuCKoVYN3Ge9Ct6AGuhmYj3SjXJTjtpKPAUrDprwBdeL488VNG7ywnqsRA2F3",
  "key18": "5nMd4dN3ZE4TfcAXhkVG5crfScYrweMp8Mxz4KVfVoXEJ2fhfBA3eaL9eDN99qdZMhi4J2q45ZFenNkAHmwXNvDh",
  "key19": "RczBFiBetRJP212JumnP7EwZ5KhPGZi8wwJaXpYMZpQ4piuHxoqj9SRiiu8a6z8WJde5Dv5TmdkT7Zii1AseF9G",
  "key20": "PqLyT9khSsfzLcmhGHpdu5yYvMqJj6wN3LSfkCddCeMQgSCSsGCHLJSRHnQ2Y8Kb312rQU5zfG36Q1LGtkZMipE",
  "key21": "3Yrnv8YHgvQ9HfVFHSEagF2Ca6PrGFdc4YzrVkWsXnC6t51qqign2Zq5zky9oXtzQjzbEyuES3qGaGiWcV7kor1A",
  "key22": "5tNEBcTHzZap8Sy2DCazkuKCkuyQXGRuNRrZ3j3fE3tRcG8Y4zTAN4NzLLRCcWAn5GwWBvgkJpTdD8WpBoAfzS8F",
  "key23": "5KsL5yqsFSzYyJUefNX5Vgom8Y3ZD5c7PbbaohbrYkoi3Yby4zBLnVnmjJscuCe7CND18GmxM9tBpCaNd3ynGGXt",
  "key24": "2Ps7DwRf64hf6LHXNUHpHJraxEX4xubUv5cz3gTbwkA9ypiMUozYbdopwuR8zYWiTBUcfwYHo7EvoCi3zakM49Ky",
  "key25": "5SKRjXdrgW4ZD4RPPsFyw5mTfJzvBY1WQha8DqLjD3vwqhm4qBddLoqEfmyZ4KsKDTdtSqMUVFr8m3qUr8ov3TQy",
  "key26": "5mXPGCYBhCfnAxAmuBaipbxJ8vsGZRujFpYyqt9H1qa2KETYN7J8ppj1oicWiyV4w5p5f8kg4aQZgA383pwxRkUV",
  "key27": "g8mzVnFvCznWpFBRY7fmRmFkdaXPgdU19fSfn1kxJ4CyXz9hyLgpXuTo65c2FdZzfHHya7j9oNLDLtuBoZK9C94",
  "key28": "2XpvaP25xFBNW3Ft9ZfEf3fEU9X2R3BeqN7yzNJaHDYHrXUvgyMCxTXDJrjfNktedZzHor1atTpxGPfHadGuWxMm",
  "key29": "dqMos3bJPuQpXLQnDrgbh4KYKFvw5fHxTCaxE3NRie1mrgrA8SoxckEUb671RXJDHdvYoMKT1BpXT1z8BaWioM3",
  "key30": "2k2moekCbGU7sHcqtBiVbypCY1zS4AL8oT7a8iBYiN3bYwNsMu59rsgmaFRWfZeCurvZvX3zkadLXACiARxPUDs",
  "key31": "29WUoNdvG89XP3cYWFhWWb3NBvb6A3LCG1SBTS2kqJHeyfPk1m5761RVDnzsK4Hz1zZQ4PNLZ4BB98RXauQ8QyX7",
  "key32": "8d4J5edHhpitkFNNt4LMfvQUBjdxBPz5aQmXASd14KB6YuYNMkdkKvgYA48fz95vhzUagFZLcJ7ZwJv5NqDP7Xp",
  "key33": "372mc7pS88jqYLfZgmkbFabwTpB2jfKx5CwgCZNPuUdCRhsJkGiE5nXM4BgtKw2fZ4T5pVkfHYxC97qLbUviaEYb",
  "key34": "4AitAJa97GrYFFPj3AeuEowVtQWXiPbLc7m9DEKMhq19Erupd54FgQoGAj57RvWWgCrwdbxpYjJbrdx9V6MWdHGm",
  "key35": "eAqNG6kJsNKcP5efaMWJDyEbKM75WdaShXtrpSwTanviW8uk2Ton98wbXt6vuNLtdt5HBupTRtEKTMyqA98WMmR",
  "key36": "4Mpjbpy5wX3JDkGmPYBTkYxB77NvNmLoUBWZUnv6hLkKpX1X44d1RSoSL7PMstk2W4yJUKseVUfSaQMdTNcK1Xsv",
  "key37": "49eaXTkJQdknQ3reWDovBpHgo72BBx5Vd1GtiyMT5qgQd45BgRotftLGDKLZZZtpaJ7vBFhHiLAAUXVWQZanaqs7",
  "key38": "2163upNNSCZc34euZitfeJk8ZWPBqd4rrjCzJBfeiJ26b7ozfN2YfXouwwgo2jsqg1B3Y3A4va9u1Y1ynaK9ZBxF"
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
