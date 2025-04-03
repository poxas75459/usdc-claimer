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
    "4qbor9HxeEi4Ucc5E22efYXiAVD2oRoZKvxSNtfPskeC7d3HuF4uA4AAWQBCfasRvvNPpjmocSrZizV2edzKiJwF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R6QJvsrVUp4qXWU5Htk8iDyn84BinFbAdwTHh4RkvhWy7fQw2Q95C9HeLJVKrhyvrJqBLgXK74c1XYUNrEtxSPy",
  "key1": "4mn7wVJ29fnDt7y3daLk745LmhUpAXSBa1h9EvyGyAvtShKA1WKc6P2yRhMZ1wAYNA4byE9qeepr7i5h5CvK4K9A",
  "key2": "5se3XiPn396L2nJfrU4nbeqhHgVowGQErqDH4UoaEt5hnCHsBXWpRptbMHT1aDJnF9m5pBTkqMUgpADx2mXKqF72",
  "key3": "49WgAEKMJxivPyvZFzFMSi89xK5RzEyh3QsoupBiEyrhs42DWVtTa7ZfXpe6SkZwNz2uxq2VcaykHJWAj2PMNq86",
  "key4": "rSTyi53CkSmRvgwvPcGv2RnWcELt1U6JfvYvkkEFY91S6Jxk7e8YcRCSimV39wyEMdUc9Y6W6xXTH7B6ye2pHe3",
  "key5": "tWzBYNEn7Sj1Nrz8oQBsjbpoAoqnzyb3LgCyi5wVANZ8JDLw7YCymRtysCYw8wYJh4TYcZGJBPo7RyTSSLAnVoo",
  "key6": "3TDtd3rzYYCDWXP1Qs6gxUFSsx2vjxYhkGsy7b2DAZpkgw5sYwxHDUXtG2WGjMxyZ7ZDjaPeQVth8dXiXdhZpa8V",
  "key7": "5XqNjkXHwHjnZq6XBhs3ox3NwiYf3m4T67XTGDnTNNdnWVF74SyaeskKpLmYvFBenzjoEofXNfxj6wndJihBH6Rh",
  "key8": "2jF5AY3TZAvovNLzSbMuXt3sZKbPJrsYzReiMYqps3JyCHx3HdcE66AaK8FSyzJCnbfTuLHEiy56oSSs5ycsqQAs",
  "key9": "5w4eiATCnyCot81SsMrtkJ3fDTPA1aP7a8ftGKd2aigkMCbNakSAw4W1qpQrrfyzpAmqo2T468R9oVG5aC4yGwAd",
  "key10": "DMzF7gav4ESSymS4WZiuFXYdD7bQGviw8FnY2N9z5zJaZttFRRTDTxDeFaZzST9cECvjEkjPR9D8daeRyWdKcpx",
  "key11": "2TgbfXwnKU8EBQVMz8UFZdc1CuK3E9W85SS7wchUP3fbXNosaoHrxq8bApNzbJmS6pVQCHQAfsv73kGanFKGK4jT",
  "key12": "5Z9JeycmKAkgF2fLstMPivQuuEyYpjxyvoa1JQKnhW89Ws2V5tGj5kSv4nATxHi5XY86zkNbFdJRueZPKWk1bc8g",
  "key13": "Kd9MLqEm1Lz9HZSpNefFPpFMNgz31hvR6dTTCJ5eX7QhxMHnshEqyQvCXyLpixLoAV4biJRrxhTQrd9veVRoo5v",
  "key14": "4H7HTV5KxPgPerkFE25yYPm5kNffU6xGefBzYv8Dr479wYt2bX6PsWe6uWsNKxdpQUqRzCXphZMKkJZN79aWPJZd",
  "key15": "5X4i7MsAy72rhKBKfy7xQ9Pyq2MgqRnhG63DSEeYJtVv9RDEHyS2B1ZQeCoCXYUjFrKp99U4fhrwXq6xADuj54Vt",
  "key16": "4fakXmveYutSKeDFMRca5znskXHitTWyJNEkKyVSB9Sm3n1R9wHtjAzM8pKymN2mv6ygUg1AMHe6eMYZPHvEcwLa",
  "key17": "XmDu3vjgpkd7i5biCA95Lf3Z5iNPTu3E2ZPUiAhG8ok1SuzyUymAGxH5TTo4WucKDD6D9xBsKmThzg48zgpNJnH",
  "key18": "2eJP61rDm57MREJ2GoVrnC531PiWk369wJhkJkX1RGCKZoBhazNTaDMs4x8LrGcE7bDjM82Bo3YtaiRo4UyGM7ab",
  "key19": "5hpEKw7b1kZziNW5hHni4J97jSB8Uhw8rTQuD4uCser8bTo9EdQQrFMVYY4usX6fAeA1eMKKSS2GiQY25yi4hdyj",
  "key20": "3U6jEcBPDTcNixNwZ2L1YKn8AmrJuxnEYdCSbietEoaMzp2r1vvXoeSqG6jmSGsx9xKY53FpfT6KaSBs7HjDtew3",
  "key21": "5h42veu4RVFeHPXm9ZpCm67WQbMV6U7J2aULMDYdrpAeoaKnFMU8FydKTZiNeQkZjF8B8ZmA9en2tSZLw86M5QxM",
  "key22": "3BhbcLE1Cbd5JcdnKs1G24MAv439Gpwb4xHsyMUoghgtK7dUADQ18rPgQF8JFh3c2NFd27qVGERy35XZGVkAaZQG",
  "key23": "2599C1CiPdZyDd6GQVvbjx4ubheRuuLCCTqtJYtJ1gfMMaA4LBGDq9v8fjD8PzCo3RVK9KdWvWK3HK7EsmFU4ze5",
  "key24": "4PWwzh7N5x2akdfx7QuQnys6Rj8vpzfxaNN9Rmvsxsjt5nYYUw4MYMAWUwPTvkE4NH4p5EoE8c7d3iHNGybrXx23",
  "key25": "2mZwXc476RjUHQ5RqzcW62CcqCmCkyDWR22GkWHDpDpc5BiEBujefPpuYdoRc2z5X1hRucvfGhgYMUEa2sjKr6qe"
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
