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
    "47NUXTGBQRYMiKtpEAJm6xVieMJ56adpVP2eDJT2HMkpgYdCDU7AjZ8dvZMRa3wFtFFVBMSwCAxUH1vtuCSa32JY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NvPSQLQMASPEW7A4NoEa9QvB1za8vgjQUJjcbuAhSbmJ5a5Wd7SXQCou87FKtKeWu88ra1FTui2UULbRLd4ekfU",
  "key1": "FP4ynN32JjxwkXtDmKxCL5T3DaGr5H3c16hJNgux1NbcAAY7iYaJz8RXmtyuHSWpiNLTXoWx8bADAJnFM8CYSUw",
  "key2": "5THrotVf3YzC1vWYydTEYxdgjy7x47ET23QskYu56fsHpiLcqCGwvNVAtv7CxJ31fugYZSYMp5a9qjMF5Jpk8aGK",
  "key3": "5ToGewYJQu1HJPPG5WRpJuxxPuMSuxCiMc4uNXyh1q1oGjWXnMMJeEkwF8XEQHQARB58bK84Z8a2NvHFRto1P3KR",
  "key4": "3HtXxx8y6ACrC5CNvfzs7Cz4pFa5LYpcC9AbtGmWLjVt7PqcceCRYawmf4FrL6dQybvptPUcUUd1fCfszJxbqpB4",
  "key5": "4fV3oLXPbQE16kWE3vtogj6rt5fw42zCSuV41rFVxCLTmGStVm47eaPTXaxwuPGZ93b3PM8gPbAVEaBTWLAYfZAU",
  "key6": "WyDiQJPDPRANm25uC2b73sH4M4eukggg4BTWuN3yqhtVsovMGRy4Yu9zqTwbAQj6Av13dKmVZQWtrnWc4nXzDgZ",
  "key7": "5TvxrqRAM4d4w3uxxHJ92HqYnEGJisjFx5km7jPxd1pJkCbS1XaP4J1UoQbbLFtNNhALJxqX4GuqDzU7AyNcuUyY",
  "key8": "3mJAUcULPwxtRoCYyC126wD2QwmB9ffUGQvet4zzBahGbTb5Jq6R9ovy5XDHvuycyQZs8xxYgH6oNSurVyAwU7UE",
  "key9": "4czvp2Zt96xmN67RLJWh9PsbR5gLnfkr1aawfHVp4fhuJUPYFCnNswqoin8PLchwQ7aoJjvV4DGgrsmf3d2zjjBE",
  "key10": "43Wbtxv2JXATT4kGQLTe3rqvJZF4a1mbWMptGP5eJG2hyL5y75JcnbfZFX1wwmrDh7wC2KvKGiMCrZ4P8h5e4wPR",
  "key11": "2iX11Js2wFeF78k9Qh7pSgrtAHKHb3dAxdC7rqnNoVLoYDJ58apCyoUN4WwGJujYJ9nfGxzqsVNEQrEYnYUB1zVb",
  "key12": "2iYqMAVhSEbWMHtzCg8m4GF8jNu6HnnQGDt1Cj8NsUpA6C6F6FvCc5rRPPkytbrwugwTTNr2FGEABrRt6ckHuXFm",
  "key13": "2Uwvc8E8Dbv4xCdP2y7LoKzsPtDMdbFb8V8o1HNA1ZWPDtJ2oJ99FWhKqyQTtXAVQUNBJmnMsdSYFLCfJBjdVWgK",
  "key14": "5hzFhXZPgGnLLQSjWMzprU5bbjxdijcT2NJXYqtEjQhNgiD7tkTTj95dRfUeJa4P6aM2iqjXkumeH5U1MeGG75Tw",
  "key15": "3yku5w3fP9xL2an9VAkshwhGvymfuKWdv7TEj2x7pJiEzF6pPmWaYqWzYq89o6rLK5SjUa4vBVhHvWdxYM4hp9cm",
  "key16": "2CD45g4cpjpRkcWXsvYsexUs7cypJYDfSDLQksYFwirjunxZC3A22e5DyFiZMsgkPKURMRAuBeyiMRqh5Nb9CGs9",
  "key17": "4Fq17fLNH4srJSpamuYJVZw4k6Z1K6WDSpmagGL1eNGezu8GbTyPiNAo7UeXUQDEuBhvMmfDRfa4aid3Q96B9JYf",
  "key18": "2EfPWgKcsALUqNL3k7vEDjPp9QYAeZuUJJFUq7o66T1T6qE8cnANqMQrSz2Nj5fWNKPT616wycR1B8QmS2DQRnLB",
  "key19": "5eVFioLRwLQV5ZUKgaHoWRYaxCXyuEX51TBnPjjX8MpVFjW6wwyTvASyXgexC2SdcLEa98kZpbiRyodJ2bdyCqGE",
  "key20": "39ugG3PXFVJ1UURRPhWUQBP1ehUfna1fZVV9oTeN7J6prxApaUrErzUMd4FoXiQuiEcYQGux3Jb2eAsx4coGEndu",
  "key21": "5agTSj4fKJ1ucV5nX1PF54jDXYKFYHQ6T76Lrtqn31ZhtTuEBAfkEPs2aqr7AH5mCdowb7eP5rkXJLZvuhsq3T6Q",
  "key22": "5AuxyKjUm4CztCTySqhtd6TLEzV4UiDatb88EyMfbnHpggik8kWFMF2ArdBBZiSCVEbE9QjhFPX5E9EEZi1H7eZY",
  "key23": "5mQZ1mSpCK7AWK1Jnaf8F1hcNDCnH6hYBwpQyBwSqfGaZNtY9xKTufRuESnjrGxc1sxJ2EBzF6teeLBvZ2N3wKT4",
  "key24": "2YD5VmHZ793SCFiFawViSGSEEJmuC9mCrwaoQJTXMNGQSiSN9niv3HczPZcGSTq3otfwmgN3YWGR2QeD12nfLBS9",
  "key25": "2pUvr57G1d4QtW3Lx6M5yr17QYSoHqg5xGVsUG3KyCFZRSJ42EYbEgS35nEtUFbCdDkP4Fx3PBN5zpvsFPzcLe6R",
  "key26": "KWi8SYKdWxesFatKwWc2uCVDeFSSnbefQcHcRPSyjeV28bG34nBzncpcTsUohzTMjHFsJS13Roqp3QRRkpTiMvp",
  "key27": "4jNGYsD2pTbpsheRd5C7C4pBZqvL6SAvSBDboWCBi7wNmrnwpeVvDDM9WpsZe1dWKKoi3R1tkNUKntueNY8cbWqg",
  "key28": "3gT2zvZqdEkJjkCdoSkEcdmPLLr8wYPNgMnrkvmjo1U8oEdTaBEsgpPDHc2YnbmPQ9hyRMJ2UNc1kFLXm51dtDf",
  "key29": "5RwH9S4WSbyranzzmYjDfzfvMnRp5WtKgcxNCYbZkQDZcu5fsmyqWv9qDdgBMFF8k6Qf7tiqAsdKXpU29uxwH7f2",
  "key30": "2nokvyKkYbwJtN9Bdem8mX3LQ1DJoPSWKqbzj7GXYd2F5Udjh5RNU6wzMv2n3qZCNhB6CGiuB38a285T1e7ntKHD",
  "key31": "5F7CMqMo9WqKNXuYHnkiywJh1J6agZtnxwjzuHLjP2jjyGqCsLkjDxddpQJVa7qakJmX2oUJe1kKJ31Am5pPHyKH",
  "key32": "CvcKzR4sY39KCGopn5ujyVcw7QCWcpQD5hhDkkDMRjeVJxwo9WBQLshKvgCh8w6wtgSMuGkkCr77zXUKvvpk5HC"
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
