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
    "4qVuFzT9s7NNxwTi8v2L1X5gtB2NjbcHeV9obVK6hNZMdvS6spwMeRjTb8MvAwCxwPpkY6wokqigAdBFLvpMP8WK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LaGGsmcz44BcXnpZFcoDsbwQUevANLUmYSRhBd5jb61ecLbVLV6trvEx4KGauwB6B8K6DipvgXURVPNGmN64Mz2",
  "key1": "34oM19QGs6yvR5iUcsEWGb2P4qX7cYVXK6bmgYyDZon3KpEiuSfrRVr2qKPPGgFV7Pq5TfMnrhNydHAF7uRYzJW1",
  "key2": "5BDT35LztfDQuNRmtxEeD9mCYfQtRipZ9YYd6nfN2CdgcwNTUnAoirQJYCwKmgYj3tkW4sGDKVB6RMuVPzHJJbze",
  "key3": "53HwviB8oXj1xeJP8Dyr8Wf6ugooC9MKFJoCv5YMehBqZgFMyvcqwnoA4St2HWr5fhsDi9LSah5VEzLihuPqUykW",
  "key4": "Hzpj196TQNPDhDJU226xuWTrnoJBuM7HxVHxsZSz9CHzNbGtDFpMrHaNxiscMya6rtAq31DPtyStGZKgUt8YrvE",
  "key5": "KkVPNF7MvJEpZQnMLqbLNDr66aF95VB43jc7Mfd5qLQQBYF7DgFyfTAw4puRNFpEASTdWT5yVFaSFNvBcp3rBBS",
  "key6": "5o9XbbxLdvMfUs1K7bb1VPVcuuv9qavwbhFTW3Tn96H3BWPog9y4QxEd3BcqCiTCRGBUvYWkbcRbq32Gjj5sRuVU",
  "key7": "5sAw7kSsWtiC8ddiePG9wJXGYx1kQomegx52q8cvYRNAZ1YnJhAVQiRWwtn3PETMbQbo9s3vCKmCP69sbM9Qn3Re",
  "key8": "4o5f5AUzaKW2jDEx2FbRQVMp5J8He3NiSUQgTqaU5yw7rzRbvJFG3bLyDckqSDxz7TKrKQwPEkJL4qkRb6x44WtT",
  "key9": "5p8FcQNmir5TYADmv2g8oi7S23v4UcvBsxMD53US8RyqB2ySwcgXDuCC1LYQicSUKzRbV4TxXzu6DKQwNJNLD5G3",
  "key10": "4MY5AYTSfLHuj2mefbNK8Jz353DK4JZScCixtAwgGCk5ncMxpBtSYs1txqvcfTQCRzxSHVLqyQueoXvWqe9PFnht",
  "key11": "3zX6i8kPmXtTmgpWB8kj3Q13fX8KzbW2NR26rDRHjQiZxAwkyeJsMS59PH2Ybic4ZU5g6faLaHY7BEXDTppKvWeh",
  "key12": "2ybFNrncykexbZad93T7ko1Yfo9c8sfPwUWb7bhztUFocGC2biyEsRnHzxxzjPkZiMZMbJFKMZz9T4B1wLzinHej",
  "key13": "5Qsq6QKpH4NCDDMX52gN4bTkdcfG2XPKpu7iKQPYALxWjM1gkYagNFaSmmByS1RSKWEsQDSrha9ZduyWcjDQ5Bw5",
  "key14": "3b8wPDGQzx3ck7pNfJ7Drb61MVq57BhZYVPCwB4mPyCzxDoGApwF4kbjqNnsEBw5JHLzhWnNfVZrQsBahf3G79mB",
  "key15": "yX3pafFRbQuJEDwiFVZ97A26AaCUsqtyKZiMkPBX7TCJvWfTdVc7FeDrgyZT6vetdz8SAnbfX3rEB6J1UARsnAj",
  "key16": "2V7W41FhQM6Ld24mT75LShfgd3PhX4VNfQytRrddyeZWUaPa8DTRie9dCdTodixHgT9tmRpGq5deJC2mc7ckKLes",
  "key17": "xmu6ojsjpy3foKGX9QP831XgPq5fpsK8ADuKSXE4Podzo7fX8sRLSR2qhZTsWd42tnDfSGUwvsewyTAjK7HKwnA",
  "key18": "2dzyxgRKTb73k6B23CwbT1AkpNdkB7saaQVo9s77eA1ToPTAX6G73qPjy5mr4rP8Xs2qdsUQgL496Jy5jh8Fzvcn",
  "key19": "51yKkgy1GGYSCRjWL42aFDzM2zLr1y9iHuLSJA8rLaVp45vxP57an2nUGNpzzKnEr1kt5Jm7WjXgXTkuqeQXF1cJ",
  "key20": "CVa34o67EnFsq8YbrTctVa97iQiPoycs8F3Eahqqo3Es34RXZmGjP4vcbgeVPy7uLxdAN4Z922654zVDTW6aNo8",
  "key21": "oAnJv1MNqtZkQ3XCrQN4xY7E6dpC6HYy9LyMG2d3JY7oKjinRcAgGkLDsrP35ieoSY1srfKqku2SLa7koPSJU6t",
  "key22": "43udyyk3oX7vKB8HGs2GbXUnKAkDA1e7DC9ndWhJCcKM8RUpmKjtQgV8En9YY1s2xqVDduD5VovAUSwaGnpcu1pV",
  "key23": "TsQ9cAzfRcpPHmdqZ9NMG4ofQChbuZhcx7wpyLYPM63ybSm5uXG2vPDPdaV3nzcsMP5WPNWiF2PrBpqG3Q1FDNt",
  "key24": "2AdWkmRDuHn9EKBGfhQHA8CF5gmCkoKrPjcc3bRNBT4grhpsVCoA6TEfRJiExPqKWbQMNGCPBgVD4ks8yQTPz739",
  "key25": "2Vx79LwcN4Bd7RnevKECHJSqbbbPqt7SdFgyG51qHtGZV4nFEGYgMv9MY7x9WtBCcusvjdTKRN7NiRwbRGp1djiv",
  "key26": "3rLgCDtiVWGNykXTrW7fXTbuhoLBkri5Xtb9H7PggtorM1hZjTvL6eTdyH2BbGCh6tHEdF4nurpS2VxkGDJwvCta"
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
