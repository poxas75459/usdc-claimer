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
    "3ax4tpbTRdVa53Bkgh9EBPqftxFNMnB9hvWGcQGvzqvGyC7zJDfkSDEhK5yYPDyBF6bmRDkEQVyv33w6KWsQtHHo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iEGajuSmFdyjpBJJvxyyQmk3mhJi8JMfANV9YN64hnauQTSRt6uiqUzvwUVLMPgK7PYdUvvXXQ8CaHCGCFYGdgN",
  "key1": "3zno55guH7ScqZc1L6SsjQRc5DLnv7tzr4Tuty1xwYiJDTNHE6q8T5324aJPniCtntbxSkCq8enVsXwgbBaqLdBA",
  "key2": "3V4J4cR4x9NN89UqyYgFw8nRhpYXSXeLGRTSvh7Ribp7YstvEAXGSTJjXGyHvhCZfnqmEcUK9HhdY3iXPmzKGcY1",
  "key3": "5hdSUJKNDfxTeFfdo6qmjuWBJ2i8Ky4axhmF5e2VrDJBHdw9NCZZf6hW6r2qZXFcqXydrBTQqzCM5ManF6msiCnW",
  "key4": "5gzFMpDqGZwBGSbXbdi5wGPcnCyKeLRrVy7Pyo12xG7fb91yn8kbwyc4bSnoRPupgTcWLRRVqEoZWms8b9HpAL4P",
  "key5": "54abSSnq26C78EDEfQaDYtzGBCa7aUWYoULutWP3t3Bj5Cr869rTSHioE5E6Qsds8fu3vCAqcQ5GyeBUHLpyivWq",
  "key6": "57WD87YRtL3P4U3nCCNTPPYnSW1cubDYZhqQRYAZMnUDhLVGabypDBR1775LWoBgoZJeX6kLPmq1BWuMxm1jiU1T",
  "key7": "4qQqHgcb5n14wLYJWc3a2u86V9SHiNRv4CDkHMzq6GfEqV9tXfkLRWekitccBJwhFLQwwNvCwT7g4ex5mgn7Buzy",
  "key8": "2N2SGPBy4M5GvADRMoR3fr8JLrnjaT4ntAMaVuqR4rh3EU4EWCC2rPTFh6UeXjMF5EJPStiU22757gu6vmnGUUS9",
  "key9": "2LcYix7qKX93cjFkbAkhHDieTkuEfGK5h5mg7EKCXk49Lb4huEjTjpN9AQZCpwHby2VmzoMjXtAorWyFpwAsBYS1",
  "key10": "3VasvBcgeAkxBtbDoKLoACiAReF68LBriU7W3TycD4bwsBvDgfM2qnQtLn86AuvnjcZLEZ8Pv1N3NoksbLb5fk5U",
  "key11": "XasSkHHBs8LWhP47s2UtGcA3cUCNkRU4FcLUd4Bxy11sKGhH45cgAdAeW3jVff8ZUWEdUEN6oatcvucAqwV39pL",
  "key12": "JxNhizD1qB2U7HA3apN2h5VpNB6DVFyLo4Ts3SJmRV7A6v27HX1EcepaAjFQmTkTZ5LbehG51x4iPpEcJi1dTiM",
  "key13": "3xchyWceJtc5kQwmELPJ8zRcKzCUFVPcKjH77dc2hUXCbQvYMBxFcyNUrc55A4AhoJd43K3Hr1YE7urWhGa4om5d",
  "key14": "5t2ybiU8qnsyE8htiTVBrRfkLRcLuEPfWiAqsSLLV1d4dcmM7tkx4q3ftSKnYchSj2NhapN35shzmL7eS4umf2VS",
  "key15": "V3KCHVEuyCR136cDCv9nQKS9GEWJh2tUyH2k7cpQ8F5yzHPWn3tiotH4EcpVdeHCdm2sTUrF76aBKRnyZtxrPca",
  "key16": "5dv1EJyNUr7HqkUmg4cn72YNffX928zHKqfDqgwt8kjtztGpLx2XKS9VopfM6WwABkxZon3NnZX2vg1Fx8nw1dSP",
  "key17": "4iYnYQUby7kLkKRkm4zfWS4wWKt7kSDSJPwwGWpxe4VoK6QRNUBMhZHvnf5Zm7ixH5ARKLLyQrGzWWPetYBNasEb",
  "key18": "ayXk6qtwF8XDpaGRNuTQJTEaj2EWo5EU9RZVuvgbgdtazRLHr89Pgm1fCBLXqaDQjSPoa1uDRsdejfwm4BRnUbk",
  "key19": "2MWd4CoFskubPekrMgd1r7Am2S1ACTMyJ9so7o4e4ELZ9BqCw6y89tN8BKFVFFwpCvU8LnWmR23sSWNEMNcuDhjt",
  "key20": "5CT39419qe5b7jsZoE7MzDkyT3PwdZ7aDQ3s7UDj3iaU26wY6ryxrgjo7GRQxsshnSxE8g1kVuHXpo5ipJS5tUDv",
  "key21": "41fB734ksDZEvt3tK1xopDEM7BDgdBn8smEjjsprdyFq4ASeZ5hwUqotsCXL8c5ejGfqCiUHfjqhXAUDdjj6nmTo",
  "key22": "2qMPWa38mdZCaYh5NvunxMbxSsm7MWeYDv31ufCjBNotLJk9zsp2Mm92XP8Y9CUhv3mLidtWRBmVvcE8U8YQ77jZ",
  "key23": "5HDxB4QfJd4DRiY6D2hCQcFjKyruHvjzKJhtfLagoh5zzHb5jE4wTVyrbQMb7S2NB759iXk6THnY3dWkgEYaYoLK",
  "key24": "w4eLvG3V3fiTe4PRhVrGKEZqWJY5mWLw2jNccai9JCTgyM95NLHjnfrbTBzER7zaueRBsSQCUooNy55V1SYtXzN",
  "key25": "32R1oWkGfAi3eCx2bXaGPRKD1snWzvhLQbVHg6XDQX31mw72M8RngKdyQuFNGAzKGqM8cLcxUMpJzhR7UAa4PPbR",
  "key26": "43XAK9iCE31VPjYF8xidLeAAeXag4QubMp1AtVm25Dso2YQvhGHSuxpDnhJJUEKA3W2of2wJWexYFpfQ1D4vgHzF",
  "key27": "4Q67apSyaQA8oRfkz7CJgGfzg2gRSkebxre7dChiRoDqtxR3sRwMZwwaz5vV2pi2dT6i2ctaBG2Sfaww8NYsDL5v",
  "key28": "47iL22MQhGkcN1djxp3VVag5fRpdaxu1ZMj8v5H7uTmpzZxPngVJmwiFTUJCvURnViHMMiNBQJPkj9Fc4LVQ5RVX",
  "key29": "23tNq5KxzZZh8UP9TaYzs6FqoWFAVj3f3BmCfXcAdNRmRSivsnq4ttev14d4hgDQSeTMbF5H6z8x3zdSFURUryA7",
  "key30": "31aeXCYZFW8mtW48nFJaD17WmHZYoApRS4Hx4BXciruKFeYYVeGv3Bu2sdtAqLYBEpEnbDcLukGykQHSficg2HeP",
  "key31": "1uJR9XGgSJK4BafWQTW1kkufDyvYXK23Wqk9UEeeGnkvYmfvGFwaGhhBadWWrLbFveHrgpVDsvfaCgAge6BMvE5",
  "key32": "4VScwoQocTZeipHJzG85Mu5oaaYispr5qija1mi2W9kRLi7kY9BSrkuV1KAYU3bN7ZSKxGsFD3BgaBgYT1sjYKMW",
  "key33": "2RYubNMmaaYN9LTB938PmdQ3KUPYzkzvfE2LCs1uxZYfFghDdMnnWHu7HFznUG4Wj5TKcVuYjFykGi54Nb1Fqh3H",
  "key34": "32EeH2PzQupYcEu2yGkavizgkS7DRcnUsNRsHH88uud1WUFaKXhTpCWB4fGPDKG6ZFAwJjsmHEy85WuWP78j2Ttj",
  "key35": "42bjiRx3V93nHvc62iAqsMKtRNr3CpVBUGeo8By8YjrnYLJ4rKmDn3efXgobZDZDBpAhAenTdGQRBDAFHQMQWR2s",
  "key36": "4bDLViF2Ugjsu38q2XG5mH6dapTL2Kphv6ryjrhoqRDPk3m6mAANwixpQ9w8fkCt8SMnBnePsXvLSK6PnZMJLGiC",
  "key37": "4i8j5vcZ6voDMsg8gooEhLhuHH2QXmSYZmhsLb5oLVwFJyWUdPnswmu8hkWVtMbcFViYgpqg64KigUGT851kicZt",
  "key38": "FSWss3QDHzCbXikpLnFMFNfHTsr434tcNESNnp6yNhpfnmX84oZy3wg2dNMNk5qkedA7biseiFK39X7bXvHZ14q",
  "key39": "g98XDXzWfBo9vVbgAkg1hW2sQbz3A5MCyGmBUWEwdYa7BAptKb8C8FAtBdMcaArbnLLBiTppNWqFNfvBNvoqsvj",
  "key40": "2JuTLkRBEnXYSBz9RLjxv1qeNhE9ZPeJKqDcJML7MCUDPAARNmrEiAKbdtAhUBGDAf1Hv3stRCbAe4brApMW3Jwc",
  "key41": "HGMv7gi4FzQLGdSaf95QQW46Wcn6w1evkSvfpeUUHhqq4XpiMrj8dJPqjyr1ECpJT9bBH2Dr1CqWgYzGXAoZXc5"
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
