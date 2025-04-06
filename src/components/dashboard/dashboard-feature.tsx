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
    "66HZ9jaxMBfUeRnquyCQia2whzfFdjkCvb9sNn9PiFv8ZoBvzVCEEgVtH5ChLzLMfvPzMvox6BK4SgwBttJys5dM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4agPvg8UWRV5atQYebfjXQKEkPYMR5vnLdXgPtc4b4rhWBhkL3L2peh8ZiGJ7RE13HBnpkGxu15GGFG9qun6XAdw",
  "key1": "6p6bNpq71nZNWjUKUqP331yMVu9UA5hz6XB9JnafyPBK8itGJXgqsEeCeFbvh86XszzZsNqkbKbxXsgfP3eUVeJ",
  "key2": "4ATFGujV5b6y7heXGsD43PLBSgUF7tpnsi1DGYvif4TCdvxAmNTnXkQtU3TBC76UYHQfT86WAaTyny4Bt2DL7aXQ",
  "key3": "qYYMVZSaL9sE8DvwYjLrBa6THatN3Z5bkmTzZXS2ryMc4GrgFneREhzcdUhX4xy7fRBaEVxkGvWJR8nP2H32YDW",
  "key4": "5mZ3EmdGerqRwsoc5wCsQSabd33B5Cd4QtVtgtnESmrEJ533wTFdLaL8HQwL9aNUVLUZoQaKbB2z1gEL5Yj79QVw",
  "key5": "Qe7cyt7GyJpukjkNPxYK4zNKyoxm3pD1Nu2fvfDQZ8AW8g6C8AGkgmzipBjcs7xxE3qFkwbbhsvNeb5WAgAPF9i",
  "key6": "fnqEXak2GrBjv6WAUcmXSy65R561NDTeq2mL7av3Fe7EphcPHVDQCeGY7vNB9bnbEJRcZSiv6qvSBiz8wUPq3Fn",
  "key7": "31JQ54sDDxjZvYzMeQqGoiq4SCAdm8ZEreThrQp1ScWB1uFqUrLoRXtPdmKNQRGt2hH5ArvYkati7rJKovVTc5hH",
  "key8": "45QhNUwVhdbHSkhGvRMAgmoJi2aGKgRWiiiVHz8p6TtDqTaeqHMGELB91RQNC2U8SZHV1B7F6qWcQcsNkT3G43F",
  "key9": "oBAF1nXsadrNPbV7de3TjfdyjCh2YjGzfzwHHMHtkF653mTFTPxbCey41kDygGHDRh2RqDN8UZAGZYN5WcNr8iw",
  "key10": "2fYN8jkCHezTFESf8q2vtSnrbbe7oJmjR474uZu3LHPqmnaUaNtrcuafyV6n6SWkvFvsKmKMA1J4E139kSXqgKrq",
  "key11": "52Zw8DJwK9RPsjMTBM8Xx1wgm6evTiMuCTBmWNUw2bK9dubPSLkgNpZWLdHr3bFvVynbJRYBi7GEMbqFFqWHtENg",
  "key12": "5AuN66RVHwqYXgsAwo7rDTwBVNdCUfNPzRLKLewL7SnAucTMD1MiLcAedsr7MjKCSmYLvUXKL8PwnZ61JV3EN7Lp",
  "key13": "42Fhn2Ts57WuuCSZbWfyKyEdUqV9p6qGkkJjtYsESy53gxWLrULG1HrtUhZrxH1eiRNi2hBHGvykbJc4em8xxPee",
  "key14": "5JVX77bMZCSKpVgnWh6n8KvQLNfrAfbh5wjdHVnwrps5aKrXjCodXRaZAPxvvM2XQE85SySvYopWRqiaAVz2yHqn",
  "key15": "2W1epAacMnKszcQHDRrZfRL86NuonxMGi9aeVDX2GR1MM1PxbyLiKMt8wZYhwJvySMSPQWioa3VKYE5oUMdT8qjS",
  "key16": "5qS2dio2YAMMP6pNfQKrqy12LwfziE2fYiJHHGvL5cMAFb2rLfvtk7KAY8ZxcyRzx91GqEjd2DeYHkFjxmSD1tUm",
  "key17": "22CjPHYXJxjtNnJSZndqyD1VFPaRqjYND46Vw6SHUfBbSUApwmGtec15zhuKHL14aYW6T5kUdwqqzdHXHzEmakSE",
  "key18": "4dDesVX39JAWzhyVvGamW9BKMsFK8AbDKnRUqqZ2QWmJa5HYghRqUZstpxSRPSWCKxN7wkzNE6EsNLXcLb6LzQpv",
  "key19": "4L3PJdAomR8tATbbRUdaLh3VeWsGxbtq4d56puheeTVA7FUoBS6h38oKAZM2N4nKvXSeLZS195eAn3dBfA2AJP8K",
  "key20": "PKeQi8HvSj8eB8r49NdTVUH6VJoSPzrfAsgZFJ7rwiTALtUtjyJ6tWTAd79NxR6Wvt6sRdPhumiMUG5QqcUjZjJ",
  "key21": "4WPX44NgGJog23mxu1HKVeZwpfKDb2GW2Z66Xa1rpqsopxfJzosndvJGcPN9wpiUsniwZqRUbfYxNtRN2rDJnZgr",
  "key22": "GVqDG8PehEdcTJTT1ixbh6D8VA8NVpXzNofAQuTsvAMP13ycdtBYJVz85pVRQVTX9g5qd3yP5KYMmhfJKuXzr84",
  "key23": "3Nx9pMDNwfkeMsAAzzE6vEMwk5KqLLLs8GXcMVFxafTJmtuw7ggxopfjLEdTQabu1c8yk5vfPkaHC4KRrC6yvGt8",
  "key24": "fwf6dhfxRKfU1e9DBRaKLvQooLBxB2fdPHdXvFEbP81arbNGXM1nRNDrg6czLa7rA8s9puqxv8MN3w4kmLYWRcB",
  "key25": "3mtcUoDMCsjbgB4Qc2mUx6Kz2h9k1LFYK9eHn6b4dG4kQKFXZuB5e9Dqju33rQhFXQFaAc4SUDM2HHM4RU3VuaVb",
  "key26": "4vaCiAkepCvz8t9aC3jB2k8nJFiGU3gHf1hwzk5y92YG7rH1mubgYggHd32W4n9j1nckue9Rehb6qoQ5P7N5392M"
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
