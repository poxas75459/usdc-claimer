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
    "5oxzWMcarXmsRjHUrKLo8Bmbx1E8PozC8xwzjNqB5NUcL2FvMMJFFXvRSQSoPYyds7e2uD7Z6jRtV733DcGo4xhS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XHD4hMSDgnY7Uc1DS4WgVzTdzLgSNqFpxbTWZ8wK627fEaJvmX4YqrBrR3nrLXnXBA2aJgaWjApFZksKpDZACPV",
  "key1": "EJvPDjbZbKnnuY4yPwkpFFYAEotwFKWZBV2XPgWP6bJLLv8n5FSk3ZnVxLkRj8MMYZHy4QN9uDj5yyVLP9ixxQw",
  "key2": "e2Qf35FH89tWiUjksBG1CpqzWozjhrLRgYA9EXspjmYvzKAeaPoKLb9SCqnafTrFic5AmXKwR4YGGEqKoT4j1t2",
  "key3": "3t18NHAYWPe4D63AxKuUx9qeGg7UML7GshXFrhXgmgJ6bf8nRpKatgGNHk8WsyXwSdWkWFkWqyNsHH6QwTvQ6MWg",
  "key4": "5ArwajsLiNY9Y8S8iKGeoYNfM7UQdMsinFCjDUaXZyC7PP9L3kwcuBGjv8ggN8Sk1eoF8cKvWht7mpEj8CGVsSn7",
  "key5": "iKQYQUQEJXMPZ6yo6FkzWU3cVCzvpuoKU36hjMZVtk8wnP1SzMcpji6mAWjTgQShHraidZDVeczxdwtfxz8hLwu",
  "key6": "5Zwr8isWKpDL9JePVWkZH34F2fGSKQnRLYUmeJQ1udZCSw6BNLfA3nmKSzVs5WVuFLgWbgiC2fdaXn9j5TqCfzNX",
  "key7": "5BPXJmYrd4sZjWy5Ktba6ez2oNkJT2qF8gZxfCs7VfgatXbBFJfcxpDo9D4vQSmeFX5PXtWx2geTRWrdkdr9js6v",
  "key8": "DmFQjStrYiWHQnSQsg7cDKjXsTedZU4CYL1bGHu8FCiQ8eMC4tUZ9hZQDhsxBWQibEvPfwn4jhzV75VGbuE2piQ",
  "key9": "2Ntp2VbmMHG7toVUBiRGCH5pAMv163WkQy1s6WcZrgNnAaZam9yXo8k3FCDD9hkTFBDzqboFTzw6LNVTY1Kvy4Ss",
  "key10": "4zWeHtvEcouwBWPj2EZ8crLFbYwSVgDGWt9mBH8H6upMBFqhCRuCwej4fxNtV1ya4Dgu2pLuxEDMF5Nh76WJxQ75",
  "key11": "31M6yq49XEfm15jex5wEaCA1yD17yqaJX2HuJ7JxoCwCMNs517JnrzAbGDVoyVwasMCSiCXeJgGKGh1V1jRBHsmE",
  "key12": "3zt65e35hfQFnVNBNPqLAQFPafWhvtNsjtvGX6UWNRTfoaoVjKEV7tz7GAxqHXXrt1MgJwhjgTbUFeQuNYXz3CVm",
  "key13": "5S79TBS2Zq6JBevoke9mA7LfNrrimD5uLxe5S9462NNkPN2mwsbRJoQURH8DR1FiBKaxLcsd8rJ7Aq7fb1YWdNqj",
  "key14": "U7kgjVpvUGMx6rDXTU2p2JTsF9Jt3H8KWnAA2gDk3p2dkW69HT3nCUb2RKgHoJFd5sriLuvTt7uee4qicYRPWtm",
  "key15": "5k1mWC9b6LYUVAuAFusCMNZebvLyhzSGXwR74sEVKkWr1UrT4Rd6Vij5cLya8b2xobVCd3yMUVrjdfjSqWjozszB",
  "key16": "5kkTuLpX6R9uHRddQ8Ya5GSJtgCoFK9fHRMeFeBBGGMeYj614bu82Z2qds45kSQyEPwsQ2HzLhrJ2PBANfE4qt4x",
  "key17": "3jayMpPUbv44T1gNmUXXwghdZaKEioLLNEX7cvveU5drRaMXN5J769hmCtBLE3YDcNavjNAxbFSmdua5Uh3x3TC6",
  "key18": "54Vm2qTi3g1xFuUHFQvBKEMxCbvhFLdeCV7GfN7zRfaw3WyZ4PprHSaR2rByf4DwXBD1nFZddYrhvawSAHkMAHyg",
  "key19": "3xoCcGx9kEEgr9KfgR2DeHGw7EgfTXG2doLcGuJZgvjyUHSKre1bKgfpvYW1fR8CAesjXydtKkGY63UmswFRySwy",
  "key20": "57dMA56Pjtd9X8Szj748881LQMRbzDoJHjGEBGvxBBsvKJ3iTLbR9cMN8tKRo4JfXVH1gcZawTtpa98pp64aLNXL",
  "key21": "5E1DgmmugtGdrARyWE7Q1kPn2ASMVTgY9T7hXXuVcbxh1aMRbzpeascEzrJTFf3wY816DMz4Aa7S4HFutCgkFWMK",
  "key22": "3eXEMzUkyzSux4tBxwecCJzJD4rw7tNDRiZ9nLUUj8dcDffUhvGxxGrSWQrxCSRcbDr7YKbaJ9H6z6RuaA1QWhys",
  "key23": "3PbwRENqdtGi3HpYWFnD3QtAGBZXfhB9KCGjt5WeA3N2EMqYS5iALfqEuxyiMndfjc6oEUDbHxHHZZbewzjGFCt2",
  "key24": "4uYMfzCBhLTZAi5DsYGAAKbo7u9bfADhDJRDwaqxtaSMjzjrbNQM4YdXitt1X1NFobKgcjAa1Hy6jVJjBhYMNKwF",
  "key25": "2RkqMnHqW3GacspxnUuKvoo6VM5Wo9F79BGfwcfibMUgmnJzw59M9XtufSL6wptD3V4oZwKkL5vBs95rPqtxdvv",
  "key26": "YKjNCraeDC4E8hb3aHdwFUnPYHfBZWLqBfWPFtbg1Q9yLU6Vq6npmgv4NEfMeqTeu6J1qWUuKw9MceRCcHkWQ1N"
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
