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
    "2DE9vXgsgJzMXV2GRkNDHgVvHsijy3peuAWbBBuK7aabNk33sGz4x3YJhcT1mSmVmH3TyEKUjpRHeobGpcKWbZUL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gCx4goak9xmcgTL2w7Vb7yvpcoUpUoA1FvcxRPQ53gAW2NdqoCvSs9rWLiH9FmC5W6PpRBmErJUGVYizbA4Evx3",
  "key1": "4AyyqbH8e2p5Vecc8ccgWwUvxyAj23MHEMx9c9529X375QrwJuU9oYtmhVRkkF3YT2XfSpaQRLxzhCh4CGn6r9ge",
  "key2": "2aC4hdePaRGSAr3BGKfh2RUh6grdpLZqhBevjEvT3HtoNpHexMUaPSaBP8vN4J2wB3p1v9aUaF9PxRzxBjvRnsfh",
  "key3": "4qX5ikLKfhXmHdcAeNPqKx1F4A6m5DSuAZDVtxoBo74JpzpvDyncLbryULyZX1VSKhqrLFFnvBy7NEUcEmHhpHDi",
  "key4": "4PSzRfp5bV4c2zSqV9aNSQSgYfDixe1FHaLUQqKXjQovEzuvWZwBMfhwaf2cUwTp83UgKcCsgyipr5EzGyisJmvQ",
  "key5": "3CUEF7wqic5VXshXE2vZFrQSGVm5zjLSzo5PANUnaDL23kYw3LaueGVkTka6qLSno7oV3cPi1E6YUnYYxVwrQQMY",
  "key6": "wLCTa78wXz2mb2frdcdsuFUwMzVxzXzGpamEzfLF7NMzekXjASNkrrcfZkhBdP8eEtZxVre1jmCXBeKELyYYQeF",
  "key7": "61YtrAp5dAUbGe4WAf4GzrQS1A5DaM3YkaQCxEk1DKZ9rMXcCLM2YTBCJXKKbXMcNFqjAf2PVu92GQ4ojBDJti4W",
  "key8": "5nnrfPW7vwWXecDn1BLNCteV7jcd59VcczyvErwZDeE3oMYHtu92fuXZ57ifddexZqhMv27fUsLBqjGGzU4Dw1zA",
  "key9": "2QT2K8k3CL8nQf2kHiY2jh3cjt3NCW1FYGk7rnonHVMCsMpjekfA2CCBccDkA4ZwTYAf8Hhp8WzEJZP2BcouNCzr",
  "key10": "4AQyTmru85A4XN3iaUi3JzHmwXEs2hk85fGWauFZYa4QuNHiLfPuGh8g5GXsHdXHsyqqJsHpVYss1o8rDQecmtAL",
  "key11": "3mbJAZeVtSy9PPPWiCfLj3CQJMH4wEnWGGDiiqQmwGQDdS2vZdAGg1qNNBPWQozYx5SCG1BqLXYemdZ5PByi9boj",
  "key12": "33wmQQ6o8ChVgrTDVWRWGJQ92ibQXPuPNUasoD6ntES6E1dLbBzGZYM5eepKygaEejLZ63Ap6PtvS5Srrx8wutdT",
  "key13": "5nBpbF2qCNBwN6B5GdqLKAhF8zZozvASzNZ6Kngv1E9ZvB6Bb9owWqkACmeQhHAdsFxtQmTbZKBufeeTzM15kTXt",
  "key14": "5CxD7PwxEye3qohHdv6cnBVfeDibYQeWoMSgS3UY2G2tF9PNbqMViN8dTvKVjW9bFx7dNDbJAX4vC9KeeYB8Zdgz",
  "key15": "ysvP81kbvWMjpgMG84KvbVzGrJbJ75GoRDshBJiAcJCW4tYWzAEdnpJB3k9sS3waZCUGhTHaRFx8fsMBJsPgNCr",
  "key16": "5sW2ERzXkkndSiLU94omeqF6m8ESmBBrYMrUiyuEkgV8oiXbyxF8jo1uBMt8kdogTPeA3E6AcZyqbdJV31MTVcKF",
  "key17": "5k7PsbSdyvrXogyDziCUAEAKFJunLqDbnzXkiPCVqMuuBdrF9RokE9zA8RPVMDAHFWHbzArwX6VwriNtPcqvfPUF",
  "key18": "3jtF4rgGe6kcngM31NeBVuWXEAyshLQ3a9J4NFnko1AZUbkKQSMdjYicjV9YhpZvsWbF1TsdgRXouyNxCxzVB5KT",
  "key19": "2UgrnHtyvadG1naTXmKYxjyJ17RfoHYTKBcf4SjFqYFGyeA3r4yqZaDXLLXmDecXkC4QwQocrowhWxsdhuB6JuQT",
  "key20": "JytMhKkRhCXqbhiheuCqeY8zaMRjse1mpeeYhHm74EtR4p3RvoKimasUKMb3dKqoYEjUTWKyDAB8ZuJ17WCLxu9",
  "key21": "5cTRTYY2yM2RPu231TjvzJGdku4L6Sjm6FxqduBcSMvSYRnpkb8CswqGi1V3fAQmTksRZhaKGPUphYZ8izVwQH3t",
  "key22": "RCTQKicU7WxxEK7adk7gospgVoZWS8sQ22y4MgYCyZGAv7kFoS8snxbLN9aTynTwSPUQN5ENebZALSuH9TMY4GQ",
  "key23": "2hwzYeDarsAPxvKFDDTWJsCwkDNrsjMwyDV2vR2Kv6hJvHZJxXT9X2zkZ9AddJJ57rqk6avUDWq7W7jRLoGLb8AD",
  "key24": "2E2RDdC2nZUS7c9pxnX4UQjCZsx9f4sVArysvij9esKsvLLPizoXHWZbQFdg3kaPDafo199VjEE34Vbyg2dcWwQn",
  "key25": "ycPQvZy6TFrZVDmPxLEn1J3MLiU7rmZv1bPLEb6di9iWcLdoeMC73Fri5ND2bx6HAksquKJJpTEfxoSMBEoto1n"
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
