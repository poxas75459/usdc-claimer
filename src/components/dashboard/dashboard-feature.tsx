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
    "531SnGJpkidqCZJaqLAdEkQTBw6ZgnZDZ8UEV6fkqwpMTAWkfk1iNSgEph2Lse291VnHzaNYVLmtimGQZHCEw7rU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35bi6JsrCNYEtowppDpENyWZFKXS1gCBWf8SrzvCJurAb51Euz28Wbacq8WkD2txbu2pBzPjvkGJrxq8sLqMGzXf",
  "key1": "seVeV5pazV9wawzqJ8khLmhg3422jvaefMvqzjKFz6LfMAArpdDJdEDE33rNwKpP6nVKqtfmradBHBcq87iZQGu",
  "key2": "LbbPW6RBH96TffqHMPPB2WtfGNWk8Mv5BxDTuzGUgBycAfk6cwc5ZfKuupQ3YsMc7e4b9DKpaxB9JW273rs2p4R",
  "key3": "25bhUvJDQMp9zdYssQRfftoUCpCeq2xXEzBfPf4pctgAbvz4NFvczQWB1WrM72F9hytw4UNGjwpQb1EQqghk8ENj",
  "key4": "3BTjgHjtiRVsgu8CFGLursJHmEj2hQX4ns84ZkfdvrdhaBfLST1j3cgg4GjeFRyKdg8xVvaJXNEmjYKCk9YrdJiy",
  "key5": "oi5BFSi43QAU3o3VrDDJvqvTzzu38UHjsYqUF1VcWm7iiedvn7fTQMgGfHBsn5wyy9gzDoLc9VnL4AxWc7aAFZP",
  "key6": "3CQnk2EfLv3TpuDivVLkuDMZa7GCmVLzrVLd5hDQRPUFz8ZbBiVqj3fW6tiBWpLXgQDbsSkiRdPgzPF3AjQzkmk2",
  "key7": "2tS3So7ZjqYiWS4cQtd61MNgVTEJUFLv9heazFRpBqLiSAESxfMjD34xK4ranPEh5CT9jBjCFiN4u6ygZoduPRzQ",
  "key8": "3Z9v1wgU7sqAmMbcA95kyMuWJ7BbkbWSc8hJ3993TNBuAL7A6iQpb6nFztLSqnJnsic2gLwnEz4xcTNhQNNRN3g",
  "key9": "25W4xudEJDzyHQQ7jHQRRyrQZMjs2JcAjT9EzgtXHaWS27R5DatEm5BkmGEA2CQ79G27Gn7aKCBUyGVuWykzpH8Z",
  "key10": "3Du2VxadRFTHabVifWN57yTWxGazFV5PPeBhkqqwszsKjg2BbLudNZGyS15hyJCep7PuxEg7Y2A3N2s75n9Bh1h4",
  "key11": "4rKCnSWd1pJgRLmVW3DdA6b2kStxdKPrptN9M3hoQMDu7EcvkohZfKCqyVdoRPdfr5WKYAaepkboabUsM96y1u6j",
  "key12": "2BpMV6YhdMfHtzd4wJopCLZb2tynuDJBmQJ81Q2ak99DkmnFpFuUZMgrJRPwiZEXRcdzEAxTr3Wjg1FaCxMWBwTG",
  "key13": "55Y6pSft5LztLocJm2EziasPeA7KkEiYdF76Gv54YsYk5kYsCTfU3yDbfHEouwe1d4VJjaUULnoFqRxNUq2T6ggC",
  "key14": "361tBzcHL1rwWF1Pg42QL5PFMmt4rKkiGqLgY257WWa4jPRM2aCNcZEQhg5McNNcspsKRUViBd6wN7Aw4qNXpnVa",
  "key15": "3fNCGqePN8BGmThRsMbN3m7XwrYb4HNfoM5CSfxJjAmMMTaJmxaxmKEWCRaPvwhodoRxQRfgxCGPrRQZmYHYTjgc",
  "key16": "3bHmhwY9ntayeVZqRKShikFEt1wRWz4Mqt5PsHARBZKgFkFTXvCHhyUkaqpUXxeX6UeWctx76n8eEdELG5kZfMvg",
  "key17": "3WJmHdd22wW9p3wkMcvhkfto2whffT9y7SWPcLAMoY4ZxeQ8QTTfjpVfnv5ws1cuKcRt2NLpFXSUS5nvKZrF6AXD",
  "key18": "5uPZugtRxXpeFu7cscSc4m9sj2c9waAmdhD8Fcfa3ACWeNFb3Ae9tGpRmpzMw1QQVffbg9bTVMwyooqXa5gDJovL",
  "key19": "3nks3d6C4nLEgruY394hnQ3PemMGvJhwpFUDpEwyNUjGsSSnpFfqoN58BNTpvsp3zF4rBmCgoqEP1xarraccyiDR",
  "key20": "4NpqLTiuMXEBswmXJhVopkKc8zrFafCcs74Vjq9jkoXJFMn8995eyQRVRBdaxJ9yDSvHc7JEBVenpTyusxYKTxCx",
  "key21": "2Ltw4J1XH5wWs8HuVp8boB2vC3k6SzhkoYkZuCWMyfGg1fMGXj3heZ3z8K7apTwRTJSS9eR8USCkAaHnyR32JJ8W",
  "key22": "5PpQ9CyqRVsbshEUQsTGacjT734Pw8TAxym9ENrcUoXgRCMXA6DB6NBvRGZdpHh3CYeLQuVGkuvf1SVtMH7TwVx4",
  "key23": "yd7sEgnLKiNbkXcq21CwcRm5HmMS2ujrc1EMNPDfxS4jXhWPCTJEd3d6TLPuWDvDfL9CcwS1rLVk23jVHZiBmHq",
  "key24": "34fAwWP2Qu7qWXhnBx6X5cMpd2uiBZcd3vEEr4jPL52sXJf8YwqP5WPAWAMua8GdED26yDdAY2RvmMSk1yYUdjMe"
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
