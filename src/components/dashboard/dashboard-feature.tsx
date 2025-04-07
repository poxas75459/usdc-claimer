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
    "5rTV8Pm1hc1QV3ybgjeetRhocdu3HybzHYXJ15Gid3771KtJjeavTSQ86it76C9H1JstqmxWVJQvns8nq4uvASei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "atooWxrcrjgBaE2bcD5EgaMDJuwmrESaMi6N1Xx9HdBTT7rdjyN6JmHoyhWQ8rYEVaS2qaWPE1ntMrVyuEZUNso",
  "key1": "3XJqKaAHiaphZzuo8zXChXCBKuju1yBJtV1UEnLzxLVseEaKNoQr1UJ5RLWsnYbBww2Liq6ZaEEcq8uHnwEkszUr",
  "key2": "4fBVrBoni3wb7tdwW1VQoR3MCWpXPQ8HQQMpqFu5HGUNJCdgqj8fjZgWhmEXGAC3KiCjyW6XbCnDARM6CQoiHofd",
  "key3": "3E6FsRVrda5cYSWVZwVdSB6Jpirp3ourooc3xWwCfcspnV63vxEdS5rhpN4UisXramCfZ4MeatdVTHrRyThAvWyb",
  "key4": "62PciyryXmaYaNSDUXmxt2rtz6DATqxjZQnVFuBALGXpn3Hf6NSvY7j51hMDJMzfiaAdn8xnB4MHBMq8zRp45bFi",
  "key5": "5X3xGcR4tb4J7RE78LcfZKothiWnJY3NRBLu6QpwraM8ZEEVssq5HWu1sXxmFCUTUriPo9561HJVTqVXkvuc2skt",
  "key6": "297RRgF4KWytkT1rC6ArwiRaUTbcTpeTzEJwCySATLfBKjSaapnc3N6WDvUMbVpzKhRehwA1rxe24VSjRGhbBDuL",
  "key7": "3Q6BxeqtMa9KjTFoLv15wWdUxLv2CQqZEfFKorLqCPEsofhXN78c1NmeJsVqnP8UcE6dLykn3gzATmHxFaFCc14h",
  "key8": "2KG9khbt7bFuWn6n1HK4r38LsnY5YAHnNmBiGcRgzWyWh1E4DKHBZfVi7JomEykWVhQbFUDCtDoTDwLKtneZJ8WA",
  "key9": "3DSAFEfrzR9hGYH5PRsWaiQruNQZZi3vRgLisDfgX6mEvbJhMRiVuvSstSaVF9E1EvkLR4sJZVLuvFnT9Y58VboQ",
  "key10": "W3BheZzEGEwVLZERRfFh4egWHgRyheM3iLsJ4kyeZ6YqzHYjtoAZ1y9Xxrx4wPvUwF6EaMTzyoy7H1h1fAJgVsR",
  "key11": "mLTYgQmTbrF3c7Z8cYZ1Mm6TCiTJhWWWGaMXtJ1QNVaJAyRKqWmyRfmeJfUaW3FmE8o4kGaT2ReUt9B7EBoeJhh",
  "key12": "36LJyacPyFoN7uxHpbTkcuuLtQQkVnu4ecHxqAtWnddsJsuW2iZmGhV3n3Zv5pgLHmRm3GoR8eaPrFS14GkcCs8d",
  "key13": "4NHzEBwQH11m1bnZDXcF3o8RtyAHwPx65FcGzimRUhnNEVoDCpjCJ6EH71gJgVuuA5wjvTwBFF1CFF8Jh6dZAdyu",
  "key14": "3q3KbXVn7vGNKdB53RVK7H7UtMY9eSvSH4qZWV7ab7tJnRaga4CXWqjFK42ZJvT2k1KKjWhAEf5yyFmzPBPAUhca",
  "key15": "3LeWwzUEQyEFgmBA4U8wRgjBKFFkkVCPhnYmNtYJGf9D1UTxRuAeUjTuuQGZkMnAza3URWpeGeYSbmKDhMGdHrCU",
  "key16": "5qem4akL6zQacMdkyjcCC4zMomxEciUq9fJPvjJkgJg3aWQxXfPcYmseUi7Nd4Mvu2f8r2tQVs3JfTegGcoFLQFd",
  "key17": "3A9JTveyVeVdHM38MEZxDphFmAJzKcyXQ8r2po76h3GL92KRJftNCwp2Rb8pYgGxBHKUYPbPbGbC9oG86Db7Hn3y",
  "key18": "9rpwH11DUgZLvf7nHWvt58Afu9tM26sB7HdFKkauguu3yUt768AUo2HAj527Atb8GuaKry4QCpS7PFw5dLeUFNT",
  "key19": "3eAPoPgP4hTGnH5N1ayNfCxdbambCnSQE3CMosPk591CQG51gm8e2KVPdnxNSJWnBQUFBjhJvrCaRsLvK5Wb8c3u",
  "key20": "2Be4uJZb125tv8J7FpRFnsQXCtzPsy6K3FR8wAjHURCmPuNvnTgSgMiD9p8ABv551Ysf5wKxechkcr2WEd82qE6H",
  "key21": "4tXoERaSeb2DnkQyX7nruwnSyiFrfTow9p7EhukT4wsyZZm2bdsggcY8c8UzLNAksNmD5MEY15YCLEAMbhwTuCxn",
  "key22": "4fcEr5Ps7wjNYFN5QmjhbjUEBJLP5mYkQc2bK9ze1AKNuaTC6KuqweLKnT6R1zgRWLbzqExxUssQwEhi1Sn2Pha3",
  "key23": "4heYm6N6MxNiRhrjXxpkyWb5wUH7dCzBqqYM3tQikabsuQVWhMtL2C6rZnrq96MpCvVGpxq7jJJUT5nxX91BHdxT",
  "key24": "35dyqSu5mJj6oQ5HWrsQcH9gFJZVEX2o9AcWAnXmrR84q66em1M8WZ6x9q1pwt32tHwyNtrYbf6XSAwEjcka7cqg",
  "key25": "uZjPECNdjZAhGovSoeZ2Txcfm9kPtJHBNzq4aKK5HERGBPkTsRmgEayP9chWwYzfi6y7E4cJjtSvdMc9irSJTbv",
  "key26": "4kL6EaLyW71MLr3eHWzUNDWUMMb5VBEoVmLUVEEMar8YtJq9V5Mpgt8BTUXJ3dEmoGp4eDcdyvxk99UGrmvpf1ZH",
  "key27": "4Eev9haWMaVMyRAUzxYGuZsGQePndCeYK86gRq4EgxmPAiJcDVY6msQtBiy4EiKs7dUVcwqdBV4opE5Hvsmcx5X3",
  "key28": "3nstZtctNuGmUFZmRv3oPTUiitxvKq6NDKegB1GYo9GdBuuoNaSgiue7bmST3Hc2FeE5ir9YKLhKVBpZgvt3CK29"
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
