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
    "4EGSPqR48mCRAvSBq2cDmeY4hcidH69ei8udhRhZJ4Rz8WbP2jxhBeoJ7JkEGXZPN2HnNP4T7LEYit3NQ4n3GSyR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qsq2RAAMRkcDjLr5Y2dto1VVuyjfriuo4rXFQLKrPNz98EZHhATD9dfghTu6Wuyhzv1ATXhAqXq6Fgk3omq1xTe",
  "key1": "38XAosKNrd5JBZ8ekWtNuVsfzvT6e5WwBJZ4VqYmc9xo2f3K4ktZRgW4vmpZ1wYDdp7LrakjmBQ5NHiqH546BXfX",
  "key2": "4acxd3aKVz6HLxvwfTzYjoWA13Ho942wFX9NoYKcxzxt4EUECaG3odNxTmQG1UF2cdb2Tkn39zZC8qQAHkqqQpNX",
  "key3": "3aJntu9w1FnMUz4ZR8P3LJXoLrYrtC1Ns8KXNQydUwiuGDsxXAhembqHF1wMxpL88UPHJcKWJEc4iDFRRTJRafq7",
  "key4": "gHv9pWuAWkLQkZcxLRdpfRH7FrYNskhKkk3ZgmWckEBYHzR6WNSAmDv4H6DAYXZYHLFxS4sVmNmFWZmdg55MmiF",
  "key5": "5djRFS7bweDDcVqkSBdqwcFJYxqvC1z95iFvpY8y56uV7RqKVgGymidkkTdj1X7DReq4RGwEKaPKbWpiHGYKU4fM",
  "key6": "ujgnQwo4RXTtxnQ6geXeyixuaTcB7afLZNxN66LPXrQV3DQVAg9wUsAAeFVkH7WeqHzhAvjAucHj5eFFYjo9Cga",
  "key7": "4QsD5smYGzoTRnHLgBVbNxGwAcE39n3jLrCjYXdTPRYiHoDVy3xEArbm8KXwET8wPAfSBgzcCH4dpcA62DhPX73n",
  "key8": "4jacQUjPk7g31j1TSv27mGDrjygZxnNyD2LcnQzy4VsURe2iRnNgpZwn3rWdkB1xSz8vJEZqjTZqF7YhEqosj8wi",
  "key9": "3LtKhdJ1gQt7cQbgVyR3SCRczuk8xULdoaCmsTzheqTjSwEQJwzEANxjubQ9tqAGV25EbGktqmAdzp7NV6AYoHa5",
  "key10": "3pmVKunAzkrdae27mmHWM685JwojBoj6Bz3rMrEoJuzj7nNkmd8ZpVjqkFsghxAKWBDNywo4vW63qwG3GXgyRh2z",
  "key11": "fwGcJ1u4MZVgTVFbMLDgMqtuV5R6AdC5qrjw28mQqFyqGtNzec9azdKrmMaaqwSgmzDUdAYri2MA7tjVFTL5Gwd",
  "key12": "33CocfaeHiy9k4w8SkzJgTKAHvu6h3cptQ344zGS2izgxsSRvgbBRQBAqW2FHykFtJ52tXhkhaatZvUG7Wc1DQYn",
  "key13": "3JjXCJ2req95nwVsU9rn1tz3JU6gZ9qrpcUMud6GPzFnKFrcVkwzzqnaT6AvBr5Dt3HX3AX4kNi1h1f3MsHsydhH",
  "key14": "ZSJN1fXp6nq3MiL68JqMLf3jnzALwegRV5KGiifTm69rzJcV2eaj16tLyXxfbLSm9ieHpCbE5VRYA8GGeKBVhNb",
  "key15": "5jbepCNZRhEsqbwvStVjtJN7SZ6NjyvhgHGL38g6FUkZ9dEJPtMCHBYiYvik6wCpeJntnQpaTYG3cX5zDS1pHEfF",
  "key16": "4wHrAvtkQAPSmFkvzEZmpe6nFkMPA4veSW9D2r9VbVn9e1oKPfNzEjE3thecwsmqcZDmBbhH2oXZryKbqYT2sFbf",
  "key17": "3rpAojnJZWphuQmZgLErzbVYhu9nzUyAG1bJV4G7yxdMM5kyXuieHApCrZxb2f1448tg1MPyzpNLPusPthHyQy99",
  "key18": "4hkggkoCLQvbrGe4civs9Ypdgeh5VmQDQmiq2gBPaFUBRwRsYWYp54hGyy5HVhqEbnCAtzFpPuNZPKsKVi7xJXfP",
  "key19": "21jVuM7BYLQxXUe3hgTJb4ge1oEUcHRdeMpBxfi3sw4UinRDA8LKunNAdhH6VS1PtRRhHMyi2yJKvtQhrQ8CxcsE",
  "key20": "gAd2CJ41FBRxGHtimNaSgNrxCZJGpw5c8QF4UW8qEdZePKBB2FeNPnuHZqUSBNXXhA8xW3Fsi9PUY41vtSF4aw4",
  "key21": "3rUfpogSSf1R1syE8M85iC59mGZTQGL9n13V3TxZYDp6KgApXE6u23q14MtgPEygBwym2hUZn6Sn74X7dRvZCsgD",
  "key22": "28WMg27vido72R8RaayXhdF1C5zD9LUSCV56dXJVos7Xqu4d4VYa9Uwbh5dGQzYtPoTCwcEm98VYZ58v5g3h53px",
  "key23": "3oLa8WW2gBQ6Sv61VCBge3XZncYXGQTG8T5n16aw5U6g1gZUFAqf9fPss77tycwwM9G6mFGvEKPNa2koCYXAhiQd",
  "key24": "2kk4BYj78NsUzWNaZdRBRdkLeMfAoEmcEbSzXzo3DU4xmZP8NzCQYtqFMahttmfyscGypmXLxRtkJVdTY14nLiho",
  "key25": "3i42ywPxvP2KJ925fYX4Gw5eYzrY4YzroMLFdsRBad8qRiRhYvbMVr41m9DsftSJyRcnPMNvweNWPt6kf3QTzEBx",
  "key26": "VXmqrqQvg7cHxzw43pMBgZis3Zq6TrsYV7vFuZkze6Cfvpfbhot6vuFquv9tMTsfXh5sWPyVA959raZxe1HHNCW"
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
