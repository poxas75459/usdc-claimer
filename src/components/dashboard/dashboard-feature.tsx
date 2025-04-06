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
    "3r8LYxG6UwY4mwA6NKKBYQfTQuk2Ck8xytMH87LVdS9PZxzZiX8WnKBK4YwQM2UxiLaEDxcyFzXos9xcXxuBwcjj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xuTLDEF5EEhbtbZMoCvsP9iskASzXBBz7yNm9k3C5tRdrjNLGrwV1w6qjiBGqyz2G4YcC7n1XLUxcD78RnqWf59",
  "key1": "5mHK2ymW4q4pyN1B1b9oiovMrySykAiZ2Pm1cVS2uGBL5aCFWJgUftGmUMz5unvg6wzrDEz1APTRzEGBmMLvm3So",
  "key2": "3nrUbSDWz7y868dX23uYpBsJYfX5J6kGqfLQkvPDZ81gFww6LnoZ1WsePTYCf7S8EwWkdrqGWpmvoLJpZVssZLpZ",
  "key3": "48UuQshfFWLB1JShJgKmKU9d9k1L6onZ4xiLoDUm5zjoqzwggtRcXpSi4wnWqcSYaQBK9tB3wvZSLuMwnr3htqhW",
  "key4": "2LHV42Esnd9YKdaMRXFdETqoNAikeMeicLz7pQcAPr2ZdUgkKnywsyQN5AREkdwfrPoiPDcZey6u3sSJTLkPNmdQ",
  "key5": "YZU82QsDgGAV27j8GR4atmCktigceDgZwQk2PobFEUJZf1pCv4Tw8PziE1xvdMSE8R8SHsmZFUjKSLA94YzXnid",
  "key6": "2eJ94T83esCDtdZaKr79ztgf1n61c1j5431q5CFXNELDKqLJK1mz9DYkFzDfA3AyyoFzAhut3JC33ekf97cUyfk2",
  "key7": "3a8KynqqpDapRP7aYLyrpYkbz68XJpNtFCgBRVhnYzYvgdADiKKHxypsLA8ytbhK2tLnVpbtDgVT1dEpmpKvYiTQ",
  "key8": "5HeNn14YWsNUc2JJbF9PzLRaNNaD4SmyFf5Z3ZMdumSLgKHJEFFKoecspza3JZrm2rwWf3CsTbLkVjPPtiyEB19x",
  "key9": "5VohBunnoufvSgc6LmzxDR7qWMqvQV7Mmoo3pM6nDGwxWxu5sW4cAkpSaoWWZDPyUj9hkWgQTmkW5hqMNSxELcSK",
  "key10": "4rNSveL4YaTAnUK3Z1aPEJxmkCJgyzSFPJ54K5XEmgDPNoJB9qwfVFx8prphFYRvj9MvefYMYLEUiDhzSb2hzsyp",
  "key11": "5KTjWLFYYSyW6vrbpD1e5A9TqMRTTVcdNaBekVqhxvY3zZxc9RH6GwKttqc7kyvxCnk5swSvpD8q4Cx1HcmP2C7A",
  "key12": "344vzvzEcphH93u5XGCk3H8mE83e8N14VuAuM97Tg3rARA4vLeDRtRF63CTa6FPt5TR9aoW1wK72EPJqWKsBMeUS",
  "key13": "2jpw5SNtNGSWWhbMijv6U3yajx3pnU8srZwLHinm6Yfgqf9K2psLnGmX52377HShPKdw2ymbenYkoN8DHeL8QB31",
  "key14": "37EKgT9LVitqWWrAp5KSWNjqHRgsKC6iBrSQJ9qyLvap7fvowZA6n7dyZPrnCko7dqpARbZoExtMUXSwZsoAYAHc",
  "key15": "Ynqd8otTbRKicUK7dRGLGqAc1AKrcA5QfxZ8KCLpGPGB7WyV3h8ecy1p1gAQsheNbyfTcjTXLVAjbTRveutF3TC",
  "key16": "5UPwFzVDBSaL8qZqSMtobtozz84JYqdb9gNivPc35ZwKioVqB8UqbK5tJoN1t26r1gxaSBTKrx8jYCCfNboCvNjX",
  "key17": "ibpCqZRUn4P23omjAvqVzuNZfD1szs8NSiXVYapDPtHMRTc3ev4rK6kPPnUdjFWJrybjpLbEVGA2B6UUPMgrg99",
  "key18": "5AgspRBxDvwcwsmLUYkhAJ1aSkDxNz8Et5hesBQL4nWirvZabxRMNHdCL6PGmmSrAbe9M9n4sUT2fXjAxRSyZimy",
  "key19": "vVBaLYqjS61c5Gv6v1TLgR4h39iRMX1iG2jRVdk7UJqWQW2QJuZ1kpdWV8R2UN3qp6f5PX4za1q1P8ySMz7QEqG",
  "key20": "3DxnBq3gBzTWUspmmBwD5Tong51pYoE1XjycK1QK8CJfpzj2yk39JkJ39afqrFDGLU92NzGuL3mTPUVeFfKWtm52",
  "key21": "5UeQFSNdQzo7eKZ7pB1iRzBy9FYCmAzMb4edQKYfdprZUFN4Zkyd9rChTLaXLAKZg3XTWWGWNvJCBdFNpEv93AUE",
  "key22": "5TGKbyFWtrZEbcC4TT4JyrwzJvByjRmPPDbjSpnyVtPnxmMA3HnRmhL4dvnnF2Hq6feMzvqYCbjWuvh92qVf2Lg2",
  "key23": "5Suu2cmKmx9DrNtfXdaEo2SSNiFJ7pAQqLimtjF2DBtN2E3vnC3NQHM3FUn168nKEZvSPx8KZeKv94x8BWzh66vn",
  "key24": "3EfEQK42fLt1rj1Azc629dQ7oPLUHkNUENqoC8WPzbM51m4suN6NHpXXrqxsRCJs3qQWRmyricL6EoevyQVAmai8",
  "key25": "5pvMC2spsZuufD7WRtexMe4tqmxbaZdi83uscS4V6w2tDwM2qiM7K9QADsLVazRXVtUJaput9YBmgZ3YkQNsCthB"
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
