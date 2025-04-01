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
    "4VVMraPorwdBRmSQCBv3UAoFFynUMN4RWcZw4C28jq2KTMPUW1gnj4bwSkedTa495eSDLbPKsaJDckEnAdFbF4fj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pmnv7hnrbi91QbrYrmrZG7zHrLLB7DcQmhvRnyiHPc4oEM79AEdfzT21LFBJxdLxeFVg3pTV5Sy54YZ5DMTYs8T",
  "key1": "5uYubQ9mxfnpHMvmiL2Pc3qXjL7hYKF7zuGC7ZXYAcfYGKJLQYxFZ9bubo13x23jUtEfvFdDNDA1DaCzWPSQbWUP",
  "key2": "5FivT8vjGd97YXQA88zcHPkHsyoumxgZhdue2pMLFa7XhHdCWqKTqxbuqghKB949yGZiUsucFUG7fRt1AiRTDREd",
  "key3": "5XCHBTAYSVLa1vnZ8xxK4PJ7zBanVcoe1VDjSNUZ6PCwrdsVDWDRD9yHG1ZRnBC1KyrPpzoe9Vw7vMBLEwqPjMMx",
  "key4": "3qW692zHsikTi1AvgC3f2e86YsEh19YyaewEA8xcmj4TE74MPh1yxKUkA7E8aasMPMqivP3sHed2iS2rpBo6CQkj",
  "key5": "2Zqt7geHiYw22QmswywfSfDRZD1tNGR9xu35qCPsDnWvQ3i11A4gG5NoAyFdVPfDziKtTQLKhfawudK6jnqYbxjL",
  "key6": "3H6zEkHEfjxzugecfpRGRnfny2Gn8UXP6dNq1xY1ocQG4rvwHHSRpRqPFnQZjSJ1qR2K22i29GXBvSpRwR8b4xtW",
  "key7": "4Vbo5rAbUKRXx1n8wphUqwx1b1sLPKDEcsoXQpc1odTavenSqjrYqQQarRc5h5hJMJ1x8JFCGDgVGWCdMB1jzzyg",
  "key8": "4coNBq7AvBzdbMCkKdscUVeW4doZhGn5ATCvX3smyhCakpLWLTuBpakM15Mfh8EHYWi3euBbRT6S9EYGWrdRdUEa",
  "key9": "mY7fcKo1WQQyzE9PjE6DhsdUWz3sFjtcrDXR1ktrCpqiVyw9wWvgvb11DBqXVgPimXwZSACMZcZbihL2Cdzy7kb",
  "key10": "25oWVjuz5q24SVxL9cGFoJxBa4rMW63pGMX8g7FUBwa6wJqFfE3dEm6KABm2NBoUjHzUT3yNFkbyHnxFXJomNP6P",
  "key11": "4y8wiJ8EwoCuKgTXZ99FixwDMbRtmfxwapNPE2qqdfSfquqTopptD4ReCihuS4b5Q8ho2rwT7txxUMCUGRe5StZY",
  "key12": "4Jk9W1aH4P7E8bfcHtnEaVgdQ7P3ZfZMFeebMuKvoRL1nNt4viQqbWkZKXXstUdgsQn92rpuds4zAPjiBhUbKYgs",
  "key13": "4YxZSQQNXFRYjXi43WPQXpG26vwsxTfM8Y4ekCKviE8AczGfojS8x1ybEm91YStDVdrfCXMCZqSDPJVq4Eyyzxgs",
  "key14": "5mHRYq9LV4kjr7nFzcjdAbeLbB8adPtMdrPCfoDtGWETkcFP31rxoNxL5Ssooog6vBGbgSsj3ugdkzWfzeND5ZgG",
  "key15": "2JmXJ75M3nD5T2aFYSoas9yP2yfJdJwCGGMdqT7a1pn1NNQRysb7hUNteZUfEecnZ98GGCRrrXoZtKzPHThLjXWi",
  "key16": "4ZyhoEjX3mEqKxJv4oqpm2NzmZSrw3UcrUiCfc27RgCvJ1rJMemshMU13nqJB9RETc91mYvsWxyKdpRT6c16bbxA",
  "key17": "2Cz4e5phPYXP72jg525qqYQG2tjv6yCpfmAjcbAMwGKe55LSkEoHAUGDBL7XLFfj8qFAcsYxnw83A9ZZutSMKthm",
  "key18": "PpcZDrYqbAuzrcXRaYwG1MjnD2SNpDpFFMBsg4krdYJ8GxGmTzbxTHDECgZ4eJrPqFwA2DVcVhbdwLynnzabZbG",
  "key19": "3RjC4h4kMDSp5foitx4KrAZuTwhVjn9MYd8XXCV3ebUVBuC65g1Cm22dzZRzKgvbiRWwkiXVhnbdjVQbW9tK4da9",
  "key20": "ufuNht61my9ufH8qzXNzXwPhEYk565i7xAi8fEFW47Y4t3TDMtCcG6JZbmvf2ksiANBCEENhFLk2QwX4LRXp2JE",
  "key21": "5fTzv4PvuG3Jy8qkLDh8ijkMjZ8G5yV4ZRB8dYpMXNhkw7nmZWkiYbwDDMWekPa4paFgFyrpd6rgx3beJiRccyHr",
  "key22": "4gEgD8qJ59A4oRdZtsfwJZHbQtNLcekZLVYarM6vs28DSdJtg9rQ5hojgqQt1xaF6NQpog3z8mG6kbgSPMXXCKNA",
  "key23": "659AHDP7iwcnHMk4JsGpssQmUA6fBNnHuAxbNAgrcPcnfXMp8hcRd9TLwTkM8MpimfSZ6b89eEBLrySyWS9AnQpT",
  "key24": "513j8hNEjKHadro9ivQwUD49kHH8hrCWnWeo7eVQebtbjm1hbCyVfDmKnMZttNJph1FJ6KZk9VscB47brDmkoaak",
  "key25": "TSyQp6B73CgAZ1xfBh5P34WQD57EjomBVVLxiiMVEhmFxS6HvhxykwzqW2yQn5eWs9jdmCkh7GR9X7kwMkkrXbd",
  "key26": "3VzkpuwMvniJCHPxhwyvxXdw1Dp6ydPEB3BsQQVq9M6tzHmmZKvQ5bcXaPpWBxf6UyXctjTUj26fLTLSRBvDCNdL",
  "key27": "49ZJH7gneKpo56d9knxQ3ZaQH4HkBpEMyL6PNvHPZETNKQWFJuJzrtgmeSRtvThtDr5Kaqk81GiHVihutgjaQ3tM"
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
