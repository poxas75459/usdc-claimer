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
    "4nj9yA7SdyNy4s4UwPNKJGHtis5egFA9UKhryg14MHXpqaGX8Fcn8oCYkhPKKELjXhHckbRdNpJezza3j5jjbSes"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SLheQoU66mKFFGmANMbkVPxqeMVXTieezGvWQQyxhRuvR8dhHcPhH2cR1woRMCaKzQaoTJUR5UDQbbrKaPh5XFi",
  "key1": "4gsYvCX9MPYEqFy8CqKWLPXkm9YFpDgVPf1Ro77Atb1Y76H1PPQ6KuCAJiZU5CUiWL5HF6NJ5oTf5E6tSzJp5T2E",
  "key2": "62oSwqoMKiV48TK4rS7qXuS5gEGDnNZYy4pnA9VymS9MJyfdu8fcUduYxWLvoYWNPB9WZWkRXVzWJRc11aJXmBGj",
  "key3": "36u262yiEssxSuniDPYsVA3S7c27xTcTcBYsCPqkK1658LpjKBpXwjSyh2V2eDkFEP2gDwEfGJ76KexM2fjaCHYH",
  "key4": "VLHeJy2RLqu8sFoJsmCYLDcGxvfvQYoeL8kRMRvj3emZVLYHyKwUDdLj5Z9UcGWrqenEZKrYgyvw9n6E3PEsyUX",
  "key5": "229ownFWt6miyGWsHZtEM1K4Zgeuqc9dm4mLDRu3W4DhD2cH7414b7BAzuAdzasYP4epYdGpPxRT3MJkp8x9WbPs",
  "key6": "wgQbQi8YVTTh8eX5aiMQkrCW59m8a9tN1DiJXe2QXtReJFwXNwuWr4PBUecNsc7qMY4r5qChrHNmj5sdctgE3Wv",
  "key7": "2MLpSykF5qYWUAd9H31vxysxVd5shZaigyFqNZw7c9TR954oirQwZBPBktwmmGsaFHGrx1nHWvGi27st2V2U2nbe",
  "key8": "555oGfkSk8ujNgrHsJYGuHZNQSt4NwT8v738VXBPP7pUYjW43gnf2LwFuqKc6whpRtYX95vAyKySmXxkGwzWhh7c",
  "key9": "2XxqtyqCpJoYJsJdB61LWuqjEQ3uYTAc3nngYGKcdiy9LYWj1w16q5gL9QVfjeVMpWQdJ8fEicuoY2oPbLVVVQ3v",
  "key10": "XbpDTtzsQ49oiwh3DZkPMEiFJmx4XVruLXaAnrVie5313c9zibk5mgjv5MAKCUrbr3S3YAPUjoMamhcBdA5n1Fy",
  "key11": "329k3tkf7yU7T2Np7iqaSfbpaZ3Cw2fAK7gTLySqK1DRDKrA2i7WyBCB8w757cf7hK2ZWjvQDkro54Vjf2Ry7VNr",
  "key12": "297w9ANXjhs7AkqfKaHkcZWEDVqmaRNVNpQKXfMiMMkNzFL4L5qHGEY3mSwM8ajhxMS9bKZpm8JZHpGiKLgCeDSn",
  "key13": "1LayZaLWdYhrqyCP2JxSbgWNPGH4moFw1QHw2mNS4Qgzvgpa5XQb49XEmFg9h9Y5hAArs5dsziwxGniQZzdg5Se",
  "key14": "5bxNZBXRDD3r5Pxm7SehWd1t9PvC7otTFykiur6kaDEB5GLso7XowbgtHGAHWgEr2hXgpDTQETEftTTfAfzfzuHs",
  "key15": "3TPySZpSSmDibEYS2CR2n8Vv37MLN5TEZgZyuAQjG4ZXjERk8tdAhTheEjFRYM7r9uEKJHENmaQeWMrUaiFfrfDC",
  "key16": "Y2WFL3BECNEesbnAgX1S25XCoSu4ARm3795u8xDQ12nqD7sQsTsNLgLQSCoGm2wpr4hdAWe8EoddAhQeM2bbrkt",
  "key17": "4aFAdnmw96GCoKqTH915tFnQs8DSQqNmxzhpQULKyVu6MQJKKeQfZWP7iHxzEcYNEzQnKcZ8KGQy5D8WzirvinLb",
  "key18": "5CUVN1o8FCVFLtSZnkP4LSizzLCtG4c2cJysqsft7f4FEmb1BwaPvhdUNQG2EupTXN6iqXyG5zCq784GEoiJDWGR",
  "key19": "YANGjMuBnWXw81K7Kku2V6APDZTbXfFoiMzXvBUpU2HQfWbFm9qMCW6imW2atyDQM5w8K4SNZPhPFNAPCtLcn91",
  "key20": "tHmkXHSW8GTojj93sdW5QKUewg6ULmgRodfH4MehfmUSCtb2VPiKMWSLDv1XhX5LZKYX33E1kMSgBmtT9w5ZgvL",
  "key21": "5NVcdcUj3bYsGTDVzhdyvci7xBgu8pagjzDm3pZQvDEZV8t42AEek5R5tXBM8SnK3eeuQ5uhgKVF2gNjDKSHbsrW",
  "key22": "52h4vRVMmnNm8iVrR8XMhHHq7QCiqNjQmov6tvNaqCW7cPyrRFTQfEDzc4tKEpiLBhCet5tpJCbn6XDcKqjQg6pw",
  "key23": "6H8gi4ffUuZE7bJU66zjRF4M7zqMkEGPhpv24aGkGdEAJyKQKmkm2QA9bpyjVWCsRJtctxVpNXmBMrzqcCpGR5B",
  "key24": "4nbFJaE83vqKPnV2qXSDYC5aeTPV9gsAGJpxtqt2qxeRtr9ngWcKyjUE6xQTSbYPyMtFuZhjCq21dyffKfpaCb1x",
  "key25": "pz7nBpWJEHqrjAiNHjHTkkDBAtwTm1jmsjSCbdg1kSpW7fXbpkSQc5KWaJ2xdvxAj7PwMuUgzQMWvmHuJHB5grj",
  "key26": "5nPLUqe17dfR2ABFNxvPvM4f7qjzYHuaNd2r7zzdhqud4ipzVjVhMskunj2BPE6udqjLeYWMecPkcz2PL6aqXKJa",
  "key27": "vm7UPdeLxvLbGe4zPJWR466JrPfdZptJToRsrJvu8GKY7kxqmWR6bnJEQdnixQxo9iXeKrffUyCSzTjRCGLy7Qb",
  "key28": "2PqUpXE3GDndfaKoH6du7yE3o2hKj2LtEFUsyRbjEhHhMNUDNjgZXGP5nRrViEZyesVU3frSdbM7SQyZcrumByWR",
  "key29": "38H8Bsy3QHXfiwrU2yeUb9V8fi7Xw2UcqbWoHcPH3wacUVF28Dgxjhbdpoevmgr2yLEB5ozxwuTnaAghTKTNMzjy",
  "key30": "3JyAUUbzqY2FgNa9xgmX1mwGGcPBZwBbKtkYPPo1CuGiQccMwDQCdaXK4Ef1Z6YZUG5rjS1quYZ6ZmUxZpawho2z",
  "key31": "5A8eyNBoXQQskRcMJSinABARQPsmyzPbcUGgP3RhtddmhAvjuipHr83jZ3pPHFb87ogyUBgCoe48HqK4Zm2TS29G",
  "key32": "3ZFCe1vzQHnrD7WhRofLk1244btJhNVn3ehyixLSBUPycvLoPoCHzbehAgD9cjV6pN4UYJNtb41NkcPs5bmcSB3x",
  "key33": "38p2MPP4y6rEWbtzESPKniF6QKoaJqJT73ax4LC9Cn6H6z12xVU7FXpjhvx1Wt5JKQXBikEsfP4WQ9wCHpH7xbNT",
  "key34": "2B9JekXY3Z3T2Fgm3QUXGzbctJ5EK7uX7RrpsMaRH3dy9q7mt2PyfkTEKaCky4neCErrYdd9CU2752ALbbic1GcZ",
  "key35": "exBDSh31w61WLaeSvxFHukAswdGu6Y5f7ffYFjQ7dUT1vKiZG3ey89JfuSm971uuWveqqQ9G7RA2288AmPhoYSn",
  "key36": "4siX6etTMMKY6UwUH6pSXMPdoBr5LQqbQCbEsZB9q8gPxbcNHYeWQzzQfUkTKZuc5pNhPin8MSjDVMtUHeiHRbwA",
  "key37": "5mui7tZqbALokNRq2bkAYDHuiaMBaM7dGV3BzqHKXiHMfreaBQJFXZp5e3VR1aG8qkwuSzhbYKpxasSCLnzubDy9",
  "key38": "DhFkUpYnvcFmEqsRxczNhtkXmyd7KxvvsV7ePsvqoLjVaJY69a8ZKM9vwQgM1aU1CnsnnPSUV4f7mBKbz1CNzWo",
  "key39": "4muCHpWYSfDakzdWvaKDKZrak5ekBZXQ2crdA1ULhWhFqxLXConrWMoHKACtvb6r4tt1s8DD8dWDGiZS8vtNXNUa"
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
