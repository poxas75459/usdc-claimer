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
    "5i6CbHSLcwihvrPTVBSC51c8shydXLW1cVCGDk2jKeLgpSBFdSW3Yrrk4pgZom8YXDYdieZH9J9apkgf16z5Kicx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wi76VsVs7eTDYbbH8e9EPgqVNsBaJ2uNamkqDpQT7pXsoJrFsfvKN7YCv6MvkdH9qiobfktHnwktvEnJxRUTgvV",
  "key1": "5wWePQaRHVRxNotq5sFyPLcF24gpR5HGirr5C3333Medi3ge6Nu5wHW1SyCWno5eEaG5PBcX83YMPb4bApX7yrmx",
  "key2": "48T452vFu859udrdv3ZTEtj65tJmpn4aSqVAazopDgwY7xu7XWXaQ5i4m3P4p5rNP8nUnrFpb7aY5mqN8XUFxALb",
  "key3": "QsA7xkHTf9dTmWUL2a1Ru5pb765uzuTLnfXRtfUaBQtXXNmUMkT77Yqx5PHefmjpNeGfPCSZ5ANFEDfCgzjTHD7",
  "key4": "4bu59p8KHn33naE5HLPLyfBZHJ1mPb5GCLng2ooHEBr5uLSbmnBw9pxMwBeLn1VFjkq4ZDvTHfhXeUmprbJViRBb",
  "key5": "ummW8FQN4Cj8FTkLbmA4UpknN4CpGDR9jYmvGLNR7nUyApvp3gqev6kyArHdqba5UBxjWmFRa2Z79vVxEGB3vFy",
  "key6": "3FBqW6Tsw3xxfBWSU3bznH7bQoqBiVENRafHvMMqvKcRV3xEws8xYKWUgfAL8ZvczZ267pf8WHDWVv2JNkcdiuFs",
  "key7": "2ugNYZ93HmxHbinCVtijBKdE4nfmWeD3JkvdvJUwpDc62wcTGw3W1z1KE4Kmuw49RSmJbKMA4KoVZemb9sW4wpha",
  "key8": "5qsR9pTU6hnr1LQYLNy6zjyf3kQeuknpLggRmxMobmdnPreKEHrYJ1fwFKwwyC1eucQLMVeHQfzxBDMysJUMegUf",
  "key9": "3xuwd7i1iQgeqWevHKjmFu7H3pBjRvVMtaVuuYhDBkj1b9HvfxPdw7BckXQjEzNmxAyQzKNJs1ZSh4bQVgrHXAZH",
  "key10": "2bVT9KkazwZyaPaJiKmGFE5k8s6ghmp158RtRrYf4kGmtxegn6Z2fUpDYZ6n34thKDC1SGLAzsBfiMMNsBwteLHj",
  "key11": "3my6kq87TdrcuctZGBNRofvPxQWfx4XQJ1JyhxY5Qf8v3NeHPE97FeCHEmf3bhDYxq9NzRgakvFEUFPcdRgxaMvu",
  "key12": "TspPxDnCwgchKGz9MNSedaYovXwWmkrLcsPxRiWSXpo8HnNkJokwKQUqnm34fwX6hwmMPdefkfwt7aeq6tGRQYH",
  "key13": "4i6GJ3g4QDKtMGinv7We2GPpDBtor9d7RxKUSNb8gS55TUR9LvJ5a2G9XvjXsugSLtpMSfPxZopghioKm1JV2HXR",
  "key14": "4MUiXFzTaJAxpwryqHQYfdASZyYAGMmbytVAnAoPqF8JuqTJFSRQqgTePiPGd51JPCvGq2WQ4b55efUSaCyb2pnJ",
  "key15": "67PKRyUiHAoJF2spUknipwekJaL6FsbAGrYL7ABVX2JzsURsDCFXCd1yz1HAY14sdwwz47N6vcMBvCBbSuKth94a",
  "key16": "4JoVTYCcYBv6Pug7Nc7rJFi1i3rooNCq4isSXsniVvTi23RDwEA4TJJFoQr9pXLjGzeZ7inA6yRB4s92RpPpE6uN",
  "key17": "2S3Sj6PZDPcAbmrgTZcoi4xKfWgnvswXPg64aYB47gbxTHdRKU9JMXaovVXEdmf5S1WMpTjpkQL7wVw8hNiKLE6R",
  "key18": "puQtcL1891SbAqUEM2NZk4QxJDtBZXFRSa7ejAwyB8ZwPGxabkiYToBLuvb83E4K9eUGe9mKEh5mtftypX9yojH",
  "key19": "2XbtFUEMByQBhKiczHYcMfQGYTbXkCE1AWGFk2jU58no9XYByGWkJA4iPnyiLrG3X3uzYdgg7DhvZiQ6tjJaG9S3",
  "key20": "3cUUVtEw6b6krX2E1aZccDUxXUGVDaXpZYHWPemteGxnE9uL7REf4qEJ6frTfRZf3xCceY598ZJs7KHnMpZZMWe2",
  "key21": "4CAA32k6qq1Yy2eLYRquitHMgdxMzW77kWfiTkQktRVj8zmHFdi9brqLUJ7Vd4xTcdWavUzfp9r1Sp2NWJXSCuEX",
  "key22": "4CdFum3KyahDSzehkSHZQEunUFXMyw15UN1Af2cnujhKFJPgombjub8Bkt8wvg34FHnpit9GCiUeZcfiCpLJoU9J",
  "key23": "5V8QV3EZCTCip7VoDKRd1b9v2nX6kMojPnC6wrWAiNjg3FVg7fXFYaXdxF5Hf2Z5MtA9r6camxkeoxhk23WPVHAB",
  "key24": "3QaF5sBjcyFGhu91bEiSbZHw31nsFQBxVWtFWBtHTgtoxw8Pz7XkSQ8Q1KEiNpsFkHCbs76hR9f2dh4FKhHtiZM",
  "key25": "3kr1eqv7xS5BCjk87ckpVBJgZNEpyUWgjpD2ovB6Q6qry8H38u3BsAt6x4aj5VYpVEXKYnvyiFYsWNQ8AyHvUjqe",
  "key26": "26U2A6FDG2nuRXrdVAfbZbrF2FVymrU7ioD9D6EotNGruTNNePRjSmcvL2sBk2bBcsmSmCDhUb5DwruuxteP75gn"
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
