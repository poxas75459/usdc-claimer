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
    "4j7Bs7TaSs9MrasRNqN7RfS3697W9SJdgYVArQEV7tqQp3RnnEVu18kdHXkadzKhveTtceHgMNAQcgUq3xQuBazz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52ULDdWwaKG75XfTJj1YiMJRdkEeg1r2SMjWx8PM8K8EXVFQGG1D3vHXXHKaJ88BBUMvAgQqee9qKFDPRZhPzBrx",
  "key1": "qxPmjtEoCfB8WxVvAPfPmzRQH5DVzXcPpdeYhtX8sCQqzwT7ghxjCBw9jHhVKB24JAG69BnbonrDmSztCKX9uAF",
  "key2": "3kuYbEUMqScEBhKrpfmaqqFopBQnXA8KB1TXU97QUckRxonJkKdXBVFZ36v8X72sD198mXCrABBvTS5rwH4qkbbN",
  "key3": "5JKqZp1owE8fcoRZasA9sbYVfReQ8xjJSbDvLw1TBmSEhWzKiP4GEHprb4bdeyzX4ewVecM62buRPRa54dizdLiL",
  "key4": "5QXi1Rht9Y9vFnvWeh8jSL2EteQsEdVDECRi18uu7NoA8UtPEni475BzNs7LxSJ1XXDmhcTyUqtDBqHDEoqHro22",
  "key5": "4E6CdC5mvFPTBfJLmDFH6jRYzQRakVaEJLNkBMcYNLrUwgZKBjJrGgxRE27e2BuxQpJw5abvFUJ2GYubVx1MnRg8",
  "key6": "5WffdNRkEYrwmmfNwVmRXKshT3pqQLEoQ4h8SGnVU8dGHEYydVRtykPBnvdKvrsm2M6a8emhb5JsMZFuz63cFTtx",
  "key7": "4BUDmVRj8JwnrqwYrVVZAZwf5XyF71S6jj6GbgrW1Mub3ecQW1gFp1atN9en3uTp6oqnqqsG4CKxNoZbSCdp5N3X",
  "key8": "2oJpq7BnSpzNJobLm6Xg6dkP8J68eTo4WtccSwCdNspXvioujd8d4aPjEJD47W82FaB1D6AvLUtffzbEF28y6J9M",
  "key9": "uuearcuWPmN9GQU1YpNbu6TSZQJuh6ngT44isQhEkgLDFzDY5uucBeDy7HWHZwuEUadny31h9YZiFZsDTbZ26G6",
  "key10": "58Y7g3pNoxNrvSxy55h5gMqmhhiVTSjwAFz51eFCXhKhpAgaLokUETaQf1ca4fbLHh464wwpFmmwoz4nqDp9oNX2",
  "key11": "3H2cw3c8htD7JaKdRPh9UNj9qjQprQw9vvJa1im4AMw7ZV4b4ghS17CVbPhhLoUkZqctuPZcdZ81rwnpGvzFv84a",
  "key12": "3shwY67rKfE9F5S17hZV5jezPasxtipqRTzWGhH7EhaHERtrCnPVCfSX81SYFjMd2Fd93JajcyrCeShxgvEQDymo",
  "key13": "9V1j5G8ijKjNmhdfhzoc9BVkRe1hTuNokMaG7k1xGZm9tzF1WwbRv6Y9UfL3Yuv9tyfwZ7TXd6JzjwcaxEh1GSQ",
  "key14": "2vNku3YdHiV8Tikbn2XZfXgKtPbHAqed4D6vE12FzVgnwwvTnFcK6aXUeThZL1bKBUaULwp59PwkLXDkT6sVAG1n",
  "key15": "5vq5KteMw38BwWxgV97BkMyisS3eReJtKanqKe7RVsjB6UyTf8rhyKybEfx3w4imxvRPaJAXM6Ke1DDrC3xJUdpg",
  "key16": "5DXV36nwPDxojLs81FimoC3zeHDu4zxqfNvkaZ2M26BxstPLQd5sMbqDXT7FXNNgtxJ9NY6tYK1qNqfAohstzyvJ",
  "key17": "2CTNMmDMHrKebDbK8no55Nm5sh8V2YBNGmi6rHM8ZbCbMjso9vuLt1pRdE16kMFKprvoNc9VzYRub1XCCR7UndzK",
  "key18": "3RztENKsBjgJJzHFkzk8kJ4Lkn8J3kUyBfp2HQUSuAXDUwjNXvNP9y2wGsCtQq6LRxT2MLzH3prwgeDiKx2eEb27",
  "key19": "5e5BGk2nZv7o69Rn8GKEVoSTXqaE7c9FZ2srEMxgtgD1cbVeQChMEo9B2nGrxY4acrGgdhi7pNJHsMof8bcvA3rS",
  "key20": "4bM4bDExhsHmi6Qwm3YemnS8gsDyBVzsxdGZoGRfbxnQTdukg5Mh3EFpkqbT8FpdNaktwRipsGbhwvWusijgvpDE",
  "key21": "4NJgrfGTYgaV5mttgK9LaiQcg3uK3FGist16Ss6Z1SHmc9F2FgRVB7RxnnjKuJXYxi3h4Zy3fUPKqtFLiiHJMMQ1",
  "key22": "5KnLx8RyeMiYCvztwqeY3RUjvyr21AEznP7EJUGUiR7j4TaKCepeGRdPBVNum4sivhDHeTGPDenSwvLrT8TF6omz",
  "key23": "4Lr3xAx5Ty3v84q5s362H3BoqhX9hcx9r7irHZrtNVr7oFBJQc8ecnm4u9RUJdfr6GRUQaw4EiBcvofSponn9YzV",
  "key24": "HLfS4TFM7u7JADF4wWnQRwYErTwRC6hJYNeSAbj8DBABNAz93Qt3YjyXttZCiw4xXRmRJ2wDSJWsXy24w4oHCwL",
  "key25": "cW9TMBDAW5aZwgLymha6D5JcLZYx12H2X6SjmXqxBMfGNvohhrkuthiza1EhbBJwhtiGuqHGksmEMXhKVhFaZJY",
  "key26": "3mkPXpFrEttKKADRbrqic6Cm69X4Z7LHdkAFxG8dTZP1oNDMftnbi2vbj7LqPic1XPjzDdsdf7K74BmvjYHKY8ox",
  "key27": "3FHQQf24mwLjfEGpENjtuQs1nqnb9HT8CDTUWujh7V2Lq2pRBRARJicsB4gD1ywCcmVAUnWx3vroF1RxhQ9RCm3r",
  "key28": "3d4WnmxxadoD5Qk7ihyuNsDFQCG3RPoer2Uk8W54vyi4RzWRQ9aQQMPgNxiqEJQr6Z3eVLFgbTJwixJv7JnYich5"
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
