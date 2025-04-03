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
    "5ELWbjCGmhoo1R48xxzRtwpFutrbtwVLck1SnWzXJmZ2tsVfFf39Z4cvP9jJ8mTKRn61yf1wM2oWJobn8FS8rhJM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t2rcCqPVzSac42auCV7irZXUZoZKkrTaKP7A9mbVCXHkhkQCJFRSLqUttkiFEUbg3aooWJuKsKhr3ego1bHLD6R",
  "key1": "57FZQLZ2LYXeZUnNzwfgKdH7ih83eCjTgWJf3u1CfLzG2KY4LYgdVDuegnBWtS3UCyf8byY9UgN85fR8N7CkhTRQ",
  "key2": "5b5niWX8CYjgGm282WeTg3Pfmdvijpfoj6tJjSjSxuZMUow9QVTTP3axgE1VvTkFJhDFFG2Spb9skigbHBih5A4a",
  "key3": "2dgVbDPAXtG9CuAnWiYyvYJkMtZ3FmXpyPP32F55tU9j2ce2PtExwbWfHSagDuNUZhsaNgsKG5mecK1bY6a97zcd",
  "key4": "NwXf9cQ1bo7EjSFjfPppvJhn4sKX6FPX6EGLaqzHm46AcxWmKk3ancWLpXuzoTpgajmBcMymtVJoAZCZQG6d2r2",
  "key5": "3kAqi6MsxcmFLqVWjE1oLPQtiddb97RyGKvKhoZjeNv4RgKsXswvL51ioHG8T29rEnH3sgjLZfRM3vYpmmkE6WEd",
  "key6": "61CmKqG4KnYABRKk5A9khQo72w66NLjPgsaDqd6uAYHLR8bY1QNXYyHsCeNd6mL2e3BThpmRCY4kHvruQV2a3iv4",
  "key7": "4pHjhDWQ5HhGtykEwhC8wxNVgTKDwTdB4et3HCs2DkNvajfi8HmhpXY4BU9ukQrLT3qfcWaoaoCbEKNTDLw6JBMP",
  "key8": "3rzPAEqgCnQGau7PeJjKZwVzCFeLPzm9Fmj22uQxKESNqwLwQx4BAjvhAnL5EGX4og3ait9KWn65ZxJCmYhiJwQ4",
  "key9": "58BYPozLdqWeyQfnBtWGyQKjAVCzGXg8jy5g3uwUo3yUtyDU6NVaocstvYLy5UW1AeDp9ync87AWqbmaKNwVggtM",
  "key10": "566EfLYrQF22rqmK7PnsCCEaKEMJS7PDqXJVYXC2tiDjF4SxDgeQBysVhcKKrfjtF38m1congWhjd8zn96TPRM54",
  "key11": "5BZB41tD5F7oUyyK2VtVx9ntgKJmWqbyMLV22W7hXNXZsZWZWA3WYFU3GrAjHFVDT5PXHNXB1e3T1XgsvBxMjMsC",
  "key12": "6SdKxFmsXj1HzpbXdM3vmJuweiXRBqJLQ9wW8niV9PhyjATfbtuEkvHB6X2PAaZkqKL6SKHryfMK91t1qfbcsTU",
  "key13": "5MHS2Fcbg4X7VYaTrHeTUqkiVxwPZq32GEzZ1rRzP6cN1xFppacFSRhjcdiv4uouZX5iUnidqA3hJnUHM9fc2SZW",
  "key14": "56ct2QpZ3Kb7U74BNNNzw95nPMNfGRo9vvMARpiJxPa6DLvRQkxTaFNHjtv4gVc9AkiBHpYqXSXbCbJAA6DA7LYu",
  "key15": "2s9YfaoGMtjbTXPe6bPzekTVHzPvusCdBLpxgZ314VpbRut4iPrUbrnYGcfVa2mSUrr8TvYcSP9sA1dxrDuBfJbA",
  "key16": "58KjUhmTvcaxEKtdpPpgVgCijuJXWe1aQB9bNmPLFEmzvSXUErKX9YHEhKpi6uG1nBzHHcEwTHL5bXR4Jcsw6oRW",
  "key17": "4fhnpv1nB4ZpEimkMas3ia8DcfV7JxyKrsPpHM6D2ABztTBFQ49KQuD9TQd2RbWLCFqfYFPKnEeuMhrzQcPNzVwM",
  "key18": "kVkduWFsZdUzb85okhyB9BJPhXnXs6Bevkdc5F7NDLjiq1eHgTpELA54vguhTFejvaqY9Z9aEKRev6HiLDSqq1q",
  "key19": "4j4uMNCS9pGwfdG5VfUxsjJh7WqEgQ7oFW8gxDuDAAF2bxcyqshjrt4U48BbJA4KNeuSBbFJGX2MPLSZzu2uRn8E",
  "key20": "HnyzDzT7ew71tSquUH3ftd9eRGog4niRH7FTohpN9Lq54i5rbL4kFEk5HM7Qaz8qA7cGtmAeSUzwuxK9GRW7vPZ",
  "key21": "5NQZ9MNzigM51HWPxBX2pDT5gtsPJCQX1yn4hs6qicafBdSD2xsBU63wWnPLFLFmEUXn9PqPdEUu5Yt5xmwCo8q9",
  "key22": "3KqSJEvPrF9gpLbWJjAU849HyJvDwSRcx5VhngZU9Ut6uxPWuMn7QHjJuvBVzwFGhWPHZTnMo6nb7PGbe2tSVUqu",
  "key23": "3zbj51aHaZFKwYfM7hfnkihfgpJT7xkjzuPFYWEaYBdTsNaTTUFT7Uf3b6DePGwq86na1hMtF15dLqX6DpEHtfqV",
  "key24": "4cK2iEdbSHE5NN2UgFskPRU5K1yhZXepfxipCZz5Q8mmnkXdTBEpmNgYqHWjtLNS8bt5oA5dA8oCLQVAmqgM3efq",
  "key25": "4D8iszw5xNfEUWNJex7gpWQgzbAARkAsgn3PiC7XAqjtyfxZdQzNsM4AUQqUkue1PqdGTvmSEu9bMUNrHfUK3qub",
  "key26": "tKz4DyMK47Xwchz3NcXbjUqKpNVJQBtGtWMCUtBeBTi6p5kWxTC7XJUTqtasuVMfYwYFnggKnUfhBKJYLQXsEGW",
  "key27": "3wkB1CFoev7hyJbqgFckbCLvdtRxem4iXsR9RjV4YKYdEmWocUck3gcoTMDu4LupBgEMBYZ9GDHBGv5UHeDh6wo2",
  "key28": "2JDRPbdkij4ewvCBLf899RZdqFahF6SNtvxAgKHigS76hdMVwW1vMkrqVoKnfWivQR4axbGsYkTBs6wE2GikF1E9",
  "key29": "SUi7WvDK9ciQN28wQKLaBgXTAMenPx9J596H28tJD9DEUvUeRaCjJHriTi9RBsWD3WmXewyK4GLJ582SAPUfN2N",
  "key30": "26aer6j6mtW7hoAo6qbxEpz5yfe4MTxSByuU6HABxuwv3EiBPELT9pKGumdfaizYYQ1TtTVH61BJV6ddxWUPb2mB",
  "key31": "2paCVdjFrLpeejxBWb5enfLw6KXTiF8DhZsYzew5KMRkkAa2Qqg9sMFwunZenekDVBfW7PCZdpckn8jqNfTsfFyr",
  "key32": "54RbSNkqYYKPC1baBtFJ4ca293NEoXatV5G8wWEfFQMoE5ZJoPBSFKZTYX3xkYoGXnhygqXGbyyPRKqmFaGrVME",
  "key33": "37SUmSuoawyiKMDidJ17MibeY7ipUSqvbWhCMHPGmWVcs6Dt1amrvEqXK2yC2KTKTESDzWP6LYagyBr9dfY4Acyd",
  "key34": "54vU6P1U4Q77b28V9hjbHEUAqzD67Um73FfteeXKe1PdNua9f9Ee2AfTRA1Zad2UFHhhq4Z6xjFfHECZMpDNbmCT",
  "key35": "3vXEsZHbrw4zsc1nUP6ThtfN59Xi6DxDYstdJCBFvQbkU5ibgAFrMsutY1d9ag7BKWdBiu8ZBWB3tQUctVkqTQsS"
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
