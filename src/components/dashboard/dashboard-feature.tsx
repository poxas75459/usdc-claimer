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
    "3jiUnWojx7FqvUXfzv2HHiyh2oiavoyUB9Wg6gdkdJqydZmpsKVVRHxb5VNaRLf6Yuw6a8yaXAeEgkvdZqRPBhan"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k8u7iwteFoTXuTrfaq2eZ8cgnPDuHwPF2qv83KnKMQQmD2VSPcsV2TczPcCxfxa4s8mvrkN7gNcJnasjk2WVMSm",
  "key1": "AnQKWcTD83QfXXPrRsUQUbJ3zgvgJpTBfNimLTGARHQGHViaph97m1qNvDY7WvxbiF5A5pd9XAEYYddp1HrpYne",
  "key2": "3dPsTe79A13swZ9YNzjSX5ymjjch7gi5Sx8pqeLPc8tQUQHzgoXqotwKRzjpAf7zeBijE6PqmLaRfmWjN2PPbEHG",
  "key3": "4mUqTqTXxbpwQXcTtdafU1UjLr6PZh6ns8EaAGcV4oL9htQnmwSVBnhdcCrrRL2fWqkWPUhrv4BFD6swuWnjGqZt",
  "key4": "2ivZDQ7G58ZH5yNsiBxSM4bD5vTRpi7Aw7hxTFPcqYGEy4joPSuVUe8aRswZgkSN7evoESRJDrkix4jT3A3zUren",
  "key5": "5SmQivGu5SKM9istoCWdwrUZoJdNfJFNuCRaGxK7gYMkPrKiWuci63KGdECkhNxQK27SU8PtbB6xkey5csJiHiyG",
  "key6": "eJU3nwxSAraEwZoseJedt43ZeKVtbf7mKQ9WkjEytSrNqQ1JTXaRhvkQ8jdNciHBdVA8MLDtyabq2WBB1uKCQrQ",
  "key7": "3i3RP24eGr7bPGNUnFyumai8ChH2BoZYnGbjUfqvKdGPU9nK948fUcq1pjN75jBVTqbnHd9Wmbc7KmXY61dU6kfS",
  "key8": "61EG7QewKXNDEFR8EEq2JaiSz1rBEgmTkATAMrd3pdHcnmZoPKaX6qHEq3jPkz8oUXPqWgf7HgePK8ojBnxEuAL8",
  "key9": "2epioAeo7rjQJhpT9DGUQ6vLf1iN2K2EgqRWnEsDnMHWEzB8SnCRWvZsim6z9fQZmg7sCZg8fPMDYSby6EVrdVjX",
  "key10": "5fbR4dCqkXBJ85QRqdZSU2dQcMcVBL5T9HuAu4dVXvXeThR3gKjSMoc9T4DLf61SeF7tDpXnDaBs2Gr5hxxKPTEU",
  "key11": "4wBh9SxhkssX7k9tqHhT6GJufTNYL465qeRsmorjFsY7G93Qe6HowcVbiUQYyKJrDazr73hKJYs4uPyn4QMmWJ8R",
  "key12": "39Fs3SEAKvFc68NrhrH1xsdgZ7qrH8nEEy4cj2rcKqtSEyHgTytKKr2rtcByAw9Q7SZJP5sHTwMw147FRKAGGTN7",
  "key13": "TNXyfZXp9v8DM1W2EvCPhoripmSqSkxDaviQ2sehVxxarxffNYcsXdgM5zfiBD7mh7HkEg99Z6JxZUzZfWR36k4",
  "key14": "29HgpFpNXRG2KZETNf8cgw1KDZ5YWJ7oQcndUkj34zrABiNmEHqAonDrFLXb68Tw87UGGftFRaHmdd6FSHV3edom",
  "key15": "ZAS67hgKbGg3dkDhaVCAt3YJkd76vStDbz23jLTrBQKFVKC6JhK2R3VZ16yhLHuxmm9VNZutEQgjG82JvPpmH3n",
  "key16": "48KpDj4wCAs1c5f75iRdC3mwHkW5w3vZxBey9SWztJjPYxa61XreGU23KdCbXJtE39Dz53Q25kDf17DpgPqGCirR",
  "key17": "2CLYmhCMhvG7pLjjrngYdLwT7t76tsy2KVm5XgxX8gTLjcrX4aYXgch8Wy5Q7rXmPRiUYkYV1S4EKkR8Hke1vjA7",
  "key18": "4KdJw5vwLfRruHrPSoinKtw1PC16nerfefAiMknMApzzk86RsFHKwZpwHFjwoEohm58SGjWtHrjoxyjfVcB9CHRV",
  "key19": "3pgbrfw2sYCwZHRD3xh3CdnUn3or5sH3L9TSqUy7uVKLHAifN1C9HbR7GpuehFASQLbZzJ8m49qP1R25hHhyVN6a",
  "key20": "2rk64ybFGWCdacqPcayezDhuQZ6sydQmL6MQ8wgDBkb4SKRdFCgANPiM2SA25ZsLUNrsDEK2ANYsp2dqFqY42HGa",
  "key21": "EhzAS3y8p5stNPhgpZhygzH6qjegRVaywefAuCEuv5JfamnFtpDvj7ijRYGcNCpAEY4pij5L6UvNapL5TU9kGPS",
  "key22": "2RDd1KEQSHfjEMKioWV5rhkwhip8fWtReWpkdNk6zP5oASQpq5f3N5Aq2CZ83wJNpKANJFm9WPuXB2FjbRLNzjEz",
  "key23": "3YHG9K1XmrNvFcUTN5E9chrgg1BVKmeQ1a11igJVkpQrw3eamuruoAQYfuUodarwNEzrhX1XYPBpARMsoTYNhVcn",
  "key24": "4YS7D8U5U6Wzq5ggMAPSC29X3fQP6D4iTqt4wJaX1t4Zakt5KUYswEzJjZn9nGCyPzHdDrg9NijDkExLX3DgXVC4",
  "key25": "3nGhkSVNRTgLCXibG2PNYJfP4R9N8mdK9pPRYL94SaZLLX1BdyVE6hqouDhd5H1rpBNmGYkxojG44QCTUaRzdD69",
  "key26": "4EVpYDre3qtSWbRhWrzCWXZ4ZgCNysxr9MYfvfkU2D6wiy39crQ3q4Cr8BYwnmmp8uNuArR9JC5P1at4NCPacnxc",
  "key27": "44n7Z78yvK3kcXrfi4eitSGWY4UY4E6ygKojqbvKaM3SXzoukjr6t7vcBGzJeKEj8ys2ZQzDo1AsisNzhZbz2KBK",
  "key28": "3G9j8oZ5NHKJT9wMMuqurqmX78TWZ928SCMGZLJuhaw7fYApEgq6x6C7VuQu8TvsoMbrqCAY3VYZSPdeF63XFnaK",
  "key29": "2SayGbMhgW8GVMZdH1T1eKUvG3WSFFvHstgkKz9Ddoo4u2k9cKUDKiLSasfQiyMS6q4YrLsomiCnRHUms7BFh2re",
  "key30": "5bouiY2bHCdaAfvzgNkvPA3v4H59fJYTyJkR18AE9Gr3B7fxSeQCp1VqC14ZjQNQH8uc7wHFn6n6gpJdx5CWWK8j",
  "key31": "2DPyMdbYQ9cymdKwatGuLTbtDVk4tz58CxjsyFACCG3PEay65N4x4ejgvD2rkfAnwY2aviu7MnJuBr288BAX8oRk",
  "key32": "3YDoP1tyBEUfBip1MVWagR9X4nZms6WXkVRzhUyLGvESdKbrhPmsS7St5B12verY79Es5FCBqMDzMSKAWDNKJFLD",
  "key33": "2Ycswbn9uRryX52gimC9qQp14SKBkDd3eD6T1H63SFFapYzxNk1zj8brckBXkRjT8xFCYcdTw5mA4DMCK3JeU2HY",
  "key34": "2MWodjjnbfGpU6LyXN5v6Q2hEDT11HfQXzoHCUX1jfwhmF3bbTpVpDCQdUEt8P4MzbsykBTUZQC72xpYgjtxHppo",
  "key35": "4AAMuYERX734GCCisqzrUfXhVvu1hNA9S1D8fDXp1R9n5t4p6N7iKHLEdufYhF7Q9gChHhxfCtQG9yHEJbsj9MSK",
  "key36": "nSw5Z2NY3oJpouRBsZa5F3V64bwLNpjkqoY9GyUgb5gPMxtaCwNGjk82enserV6hwHLnNdiQmSJkTuTKTxMcyFj",
  "key37": "5FCbpdPnfmjyL9PoQ873B2i5QU6XjwLbo2vtprPuJEfDMBk9dih1bi2eej1Z49XzfSFDfnvkaLweMMUeQVyAHoNE",
  "key38": "3pAprGMtjuPWyKLmp14fmYQRR6j71BwVu7APKdApjrFtfknfZWyDmhGbxMJRkPRMqo4zJkek3FfYsXDVr5WoNyLx",
  "key39": "N3zhScfPB1eoo11YjuUXidugBHbr55eV6QDEdvtaBcqrw3sDBKb1ANoJrh7eeE5JkZCYmyN4rChjYo2nW7mEKd3",
  "key40": "4Gt1Gyp1tEnNxjmRiMQwonD2geMKW5BEDJmxhXf1EFX4sBx6UtK7Y3nC5dvMpD76wL2yZWRn6CxwkWnH2oguf9MP",
  "key41": "3BCdBNNbxJfFiJX5CjW4J39W61FodB9e92zBZEB7D78snurg544LsHCtmMmvRgrqUPZvjUSisY1RvYnXp7rJgbLd",
  "key42": "5yGL9aEQ44x8s8653uiEQXJdAP8eeChcMEUrxm1Wb51bmyY1J3G13SJDRkrqaCmg5nhpa3vsMfEQb8F99Fbyvz8u"
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
