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
    "2WhE55aZPAjbr9su7fdN3xSgWabrwU9dSA7kYQXo7VTAoFCEkrGXThd68EoUCXT4gpiTFt9MD7CiRpC6quyNVifT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BBqM1DhwYKnXsGMUMiZcTY11XyQWZFnV917Gs62DFcfTtg4Dr7ntMbXKxv3vyysj4t3UFLCo5bPF2iixTHR67mT",
  "key1": "3Fksyo8Kf3Z8ouVhzXjZRGwJ4hxx8gDv4gLpFRiNTaaTCTYbx4tQrP1KD1g1HCmyw1ZdJZD8MZoQUHiX5RpTLgwH",
  "key2": "2Fz3qchi6DAXoDhwjRxXyK5QKc6E765bs244wPSeFCMeV6HwKs6PXKwTxx2FT6byqWMnjcJiKjFLqwyvuJvQ51GB",
  "key3": "5FYKgRA4xzcqcntfz8zWm4NSX4a5daufVssQw73p5fa4XtHtPy62osE9LuCE3usmZ5QHoADZbGPQWmG1U17qbxnU",
  "key4": "JTrhwMjXZigr4LYxdFnTZczffYnfcjLTGoKPyzVkpYRZBbrgrveUuS4HCVJXnFWyZN2b6bQYKtHziLFueZfSEGE",
  "key5": "1RHagCbLJ1d5Na22Sez3gSZam43JPiryhLewKomvC6v8XeTfmFPvdgMQMiPc4DxGv2iXYuuztmR1EFZ1fPYs4m6",
  "key6": "3nMgX2eC1RXdpdtGoxceY4sGNwgDVQCc9QEbYPrS5Uu8FG5bNFbAVdbamtmF21fKVrDQL5e92fb6aGfKtLGi62uH",
  "key7": "HCzrv4mzYyFohZNuFRk7oEQ1DdZkGc6GkMcmjxUeCPqYQQqwy9DNSu4PeHPV1A4bYQJNeQWFdaBEjgswmq87uqW",
  "key8": "wXM8JZaB1hRPKkN6UHSADj6wf1wg1QSH3VxsCgfuaE6KZkyqo2dRCSRZQoQiQDuiUb5oj23PeHH3uNZJNizWPdx",
  "key9": "Pg5uar6NFxuXZeFWCG8StmcBUK8RdnPXMF9LVXx5v1ocsNurxNYbzgrjALD193P6wqX2WLqfLxzkQwimhjPvqyU",
  "key10": "4XyAgvBh2tEmzmmkB4fHm29UqZmjMDG6a7Hu5GuPyPc6ofi1CWnPUcb2YLVTocUubJHCmScaBSuAvYzbgDaAedds",
  "key11": "2cMAfPFoaxiTxa6JdsEu4mF9HWfWrin7YCkzmnodqqh2oxhY5R9CA2gkG7MEPfrgMTXVehGM4F9zcsdnPXfmioeY",
  "key12": "Kt5dmr544YpMoS7PNGvvdtTbdrrUjWdEm7zPfFuPPSGm1dUkx8so2QEaEmCp8NShcTjYAeRakkMK2NUN5zEw2dF",
  "key13": "5gZ5dy9GwEqXevycvtWzBnKjX1tFMPgwxLkNfBD7CvKtRQEmXFUErdjvuhqBhj37omJ5RgJY1vtuTWoBHH31vaYK",
  "key14": "3UL3PUksdRDBKb3CzaBLtuhMXJ5WVv7FNXBtEKgnYm6BDSyrpuLFBiNkJxJHYgbVZXMAZLnvCJvv96ZkUpF44o3N",
  "key15": "2DVvMdo7ZansPf4FSwQD529E6gqQgTaVFb13VdsAffGDYDpcAqjBQPGkbVh3kLqnsmnMrEDy43AD1oUQfzVqcGDG",
  "key16": "5Gar6KaEJxgzUKL9ee543hSt91KvGs28bHzKtYKjUz8yVSQijQUe6hrwyp6a42Qebx6rExkGejL5LETb783uaE11",
  "key17": "53DpL8NqrH8vCAySvEYSVS4CGxsFevSAFtin6C7zNbUB8JTkBJp5Z22cz2sxhn6wuJsj8XghG4LdowQL4M1F7o1P",
  "key18": "eMvjJ6qk3s2xJFRmWdR8rHJfv9CNes2UE1o6bLtCkYogEw7oTUd7Pxp64VUPUugSmryu7TUxL3cCF6Qs2ELsdJU",
  "key19": "5FvYonAKfSgc3jRetbAYsatgi2Vi5Q7T655xY78nyRa9p6SHpsgi6fWCfw344FXWJnFdZ6GWxmV6qWSEAzVCm4Tz",
  "key20": "2Qq2uytbqoGeRPvJXfsYNHetqew2jTYsVChVkqj1Ah7e1mFnSgSvcTyL7c6D3DnR3ht6Lus3eEs9JKbYv39CmH7q",
  "key21": "4M2rgdcHFZpaCqoVGnkxLGqyshZjDWF8c1YhsEPuzULMagzqdiifujXK2EqELkGwxDb9YN4D42QhA2HqpM8QxUaJ",
  "key22": "5sj222M8JJabiDxh4aCmQr9tE94Mruvu9u8atw6Yz4Fet524MMJZwoD1biUt9hLrjEQiGNgZxB9zBo8rVdpStEnM",
  "key23": "4BxdCZL5zE5omsRGtf5ukY2gQma8uR7ryZfUWaap7kDnCHv2FN7qexZXxMfYXqfq9DN9QFZWywtPhhftP75VTD6E",
  "key24": "484AUZK8DVyDPY1urR32GhBy25X1Z6ZsKndwv2e5qSQWRGDUvX3eXFQstmpNCGJNVUBm6aGH6UjySzMYA8Jfsypr",
  "key25": "y2rKF11NJvxNQcvaT2gHhLujE8aE7AR97pKfhYnx4aLErBdCJfUFEM4JdK8CzVeC8BhmzqfM9CvLvK4M2NKp3W9",
  "key26": "2GxuQFTEsdKHf7KP2u7kRRDPMs3XHgWpkKvKTJ8VsBmTHSc78JSHUdMdG5PkWMGo29JVxYHgnbJ1qcXoPcS8VRmY",
  "key27": "Sj2wQgANauDnHhubeaL59aZfozV3J6Rx1XoZr3Pr6vfRdv2PLkcNhAgtHhGJmeGLPZhtTEcyPacAjdwDbzxq4Js",
  "key28": "5AVTdzfEUt66KAoXxZNE27cZgDwdNxzFHTEy2Q62Zy5S73r2BXWbLSUXkVNC6kXLduPueNzLNycFkEMBbmp3httL",
  "key29": "4sWkPqDvRXDWweStQDvWNUnCNKsHwqMyHcNa4S5RiVYFAodbThT7h2AGqgcpcFKEAYBb8WG4dFwcizybexTEnZCf",
  "key30": "4ToJbRYi5tjtskNvXrukkoA3f5ZRYDfy3aLY8WbMBDAXWHg7vA1VRqc2i7L8BFMLa3iAuvsnmYvHZtabom22bMmp"
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
