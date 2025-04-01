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
    "mWF1j8Gk9bTpaEiGAhiUMkhbz9sigGnTB9hy1BUaiDe6TD4fNmJVEkvRjFuwKRsbUTLCRtY8nZLPgVmumcLttUW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hkrjsWFE8gmKSrKGYkQk2VxGRFCKyNBW3oLb2G1wcD1DEr8PQhf9bX4F3Nw1G97MENnFFMXd8udSeeDXGEAxiie",
  "key1": "3qLPhYfJQqVYhtfUmZ4gEuqmSQWB5mw1KwBUePANus2KQcLBB33d14pfMya4wwwGJ6nd1f9Z2iokgJciipjUHah6",
  "key2": "GsnL5XB2mR5ZCJ9seonbubY8mk8YMKxajeLnSVuZstA3mMbichfaCwkVMwfvM7e2tNJ5t5vdoLX8ZXEXVMHfZaJ",
  "key3": "25DNbXMHSuenBErDRuoCB3WBVLzBdqdbiP6nsSqvNUqEfNV9Br9emJmNgPSKLxcX7CvyWfEnTZSbfgcbpEVgtVgj",
  "key4": "sjSLRictYWKE8VobBcTnHWEquwa39mnS3bD4s9yxGmdjtebumd1JCDA3AsbAs5zP2Co7RoKrR4XhtzqBVkTKpx2",
  "key5": "46wm6JmMywN5E2wCFtHDUCiRwcU7WsyEBWL9rJFpVDaecMr4mrtm4quc4c8ZTmajQv8qqSuQSUWZDQ3MuzTWyMTq",
  "key6": "45t5d4LLbm9BkogSiTe8nyoD5ydxjzAimmdztm9RBVAjAy8XtiE8izqBFtQNvD9ePw9gm2ce2KgCVuJXeABZQKLV",
  "key7": "5fnUwoqwP5uNbP9NMHtA5hK7DrgRfxWte2s4eVn8couBZv8xR2uHEkZTmHuiJD3x4qCwNeJcNKxVP9zfPUYJfTqa",
  "key8": "4XBT19gM7xRvqhuZafv6WvWsa5kKAL1TgztpKLp58L2HP1xCgmSyQq7st436cBJzSFZm4Yh6tqpRABp44rQcDXT9",
  "key9": "bhYnFzbLc2EU7qFwbJVJvioa3fZCLSjVLewQwkhG5EYTZjg2XTPfuUJjs5hP52GMzweL6GujDwANUTjEdH7rg2K",
  "key10": "QyNxHz7uVZdeX6sAFh9WBhL9ExEQM5nnRUXLSGybtChjbyM6VByAGq4vSAhtL7XjtAkCqqKfwERfAt5pBx4j25o",
  "key11": "4MYf5FqR9QC6jRibyWBavhDoz1SsBWmhXX7ZVdR1pg9fL8i3DW14kx1mxKSayBhnQ7hPpxo7j6KnWSP2QDBEsLjo",
  "key12": "5ixMk4ff76zd4uoj4JtdC3WgfU8UPZb6Ff6yWmxdH44mLapjYE5WoEc22DtEGsvtxFkb93uJHQC2JtUpjUam4hTn",
  "key13": "y8pWKs4mSAzABzGxThwQJY7F759mu46hHhCoM31HGyqnCmLQHQpWkCwdcdfYE5mdrDMrdgTUyhCeryvgfmpHkBc",
  "key14": "2Ewes9u7mnbt1mpgMN9fz8TCZdp6uG2yA92k7XqxQx9xBWhYCVwWi8TmxnXZ9ea7oXnuEwBdcQ9qUdtzXVvhSuDW",
  "key15": "27uNyWZesCogb8Boo5i4KMvY5DihTvoEUB9GBGH3hZ9zoQFmLQGBGWoXLTij7A9VPUi1CfZH2GsdQu9zECJMNcLm",
  "key16": "2PZ7mG291ccihGTcuZMJP5zMMQR7Hb36tBakTWQLwBE3HkDuHMUW84yRNaK8YHbpBAj9XmKBKpfyvagJYm2Jwtmn",
  "key17": "2ipBwrYENYKiSLVJeHCNFJTGsmyYhMRnzoqaAsh7t1PCx57baiVYszRBiyEb1nsKVSfaUS6BTD9DMDRooS5CK1B1",
  "key18": "5UpHzHtz1FL9TMY2RAq3aojouexZ3Y4c7HzHKJvqYcDyjmaNR61n7xMyQudxbncfKrNV8x62gDSw55t9t41qEu2u",
  "key19": "2wYU5XUgPJBeq4md5CUKPZjQtdMPGYW9DPrGnFKYXuXXyVeopts3Di7bkC1k8QmZsFKM2MnuNwprvQERqACSsX3A",
  "key20": "LFC4CoPe7vVe4cdrgeVBPhDhBuMivFj9dPTMWb8FJngVPPpTks5sTWbPERkwxA9Tab5sWeF7Kd113TcTPteNY63",
  "key21": "5vVyyEamHJHGPxQZqnygnRm9W1WoLP7xthEQKcstGiFggSt1pK5xHfsxyqvywni6bNN864r8PTC77ZP7QAanFYQK",
  "key22": "Zxn1A2Th3usRm4MYT1ZDUMzXvTJTZmMRjKtar4tBH5DMmgyFyp9UsWcL1ejjAgZ4eAwQjpJAvgfj5ahmAYumQb3",
  "key23": "tsqBrZwMrK2tokapwvY3rxXV4xRLQMxZe2Tx2TywehzHN7bavy7gzYDh11nmaeZ4zLX6oUmXLaoKdj4X5jqYQNQ",
  "key24": "2DhpCxrsJCsBcf69rjRGtoysKFUgXf11Bcahn8H7VrcSK6Mad2PaK37QciBF7osiPy6jQC2EuEn2vqNSH88E8Txc",
  "key25": "4xgSmcjuypM191nRfhGWCeFHkPPeJc4jtsNbT68stVVvvtbdsyN7xpikwnpaedfne7egtk7YGXAqTZZGPCuGWCct",
  "key26": "4qePcbzrihvKi7t6FXRFXxArZD6PGbHuRzGkNfMr8Pfn3Pi3chB2G9CnNG8SH8LbpYdE2tXCwgpNYDwwaYoTc2MJ",
  "key27": "5TEW4tG3M6KaLDJr6xBE4TutALs8LVWpPumvGjCcKuae92RNrFsEedU62TXQpEpao5akbWB897QMdMgZAK2SKdZk"
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
