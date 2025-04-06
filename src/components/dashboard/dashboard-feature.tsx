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
    "3LD2h66rMhjTBEAcXjpfA2i9UmXcCrD2LeC9Ngim4PeZcA4t8FcSz92zmxKf4Fb8oCvpRCTssCaeN2nkthjxCLCz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LUp5KFwxk5RRKi9c2FGVrVm9pyddte7JhQop2tTWPMhn9zzpFA8xLgkLZzS92mjb8Pj7xK8y5eP2EpoVnUZsoqu",
  "key1": "3LPuCvH26FyknsTFBZmKhv6kwvckZecnDEejh4z7cFCzitscewCGcHCFsjnU3W4r5A7LtvQPQadEf4AdhSmvt8V3",
  "key2": "49AhdsAHQbNpmNCVTWtwX7VckNeMbpfjrpL7BDpXP5uMKYmoxd1j67bXqZ8fTjWU4ZzaqcDQYoeBSv9oK4QQsQ6c",
  "key3": "3NzLfWAoqGEU9GBCc8LHz7kuZxWrWvVgaYoCvdHB5GaL6iLhaGVS4DX5fDyB5BdLfuM2hR5hVXz6GSTx8qc7YhDr",
  "key4": "5RTUEHCDrWtiTjiS6q6gjcGGDr5ANg2Cd6hTzRHACNRCnk21yB1Fjgiryq1VZ6UctVTpC2o4RJL95JTDuRAipM6o",
  "key5": "4A5hzUPPp25WpMBavd1JrhyCwc7KvRbgEX4jfN9haEGkEhS9B6vbnUJifVDSxyxBg7xXxGLQM1XW4GHhaPxbC755",
  "key6": "x4cNZcor9zfsnDv47waSWZbh825zEJy9j7zFzHJj7xqoPzpdghBubMBSsfHfBzLrYZ5hBrH4m7uHbbJNLBhe6da",
  "key7": "27T5nBALNMtZdNLrATerTVG9g72Q9shAap2ijk4pq5T3nCKdnV4s8SiADtZP1uoUTuGwqhQPNoEm6eZT8asaWEsP",
  "key8": "43e6rnL2Tb2jjRWLo1UF9UBFz4RYnZTJzcC6j2BwGp8LMdXtXS6CyH5bv9SrU2uoYy3iD8DzTLgZB3xbFuN4D1Wq",
  "key9": "K476DctTLhx8h2EAwpMoovoPUYt3fgZyUzJMYWtrRZwYq3Q3dj1TX1aZ6cdJbi5QXBzHqkPrPWZDQZTTv8AbWAX",
  "key10": "3gxyFMB61Bg7ycsVAPmS72gm2Qe42Thwjaqv6xYmzHrQKgsAUUMboNsiMuRQdktfCiWfCUqJsaKMjtNRuzNwmC3R",
  "key11": "42zhxQMro1qPHcWimCve5Po1L5RT6rRMeXGgYPLvdvbPDbWHL3FzWVHKM5S3iSUA8YTh7xpBwsd11KpFdFFKSC1i",
  "key12": "U6K13aYK4Qp2aYWioG5fAa3wmHZkgRKoKbuyF3ToC7rqofaZWU8zsxQQngBZFVPfTDccHFcC5zf83JkBsNQv5v5",
  "key13": "2f5AXwDYwCwR1wnb8rE5rRYH8G3vUVtsgxARWQqKqoGziBBF17ZvXjLrDFTNLnY58wceuNr2SybqNhgCmLPbXcx2",
  "key14": "4UMCVvnGfrynqqMo5bccSbzov1kEg73ZDQP23RJ5gMj3mFhSdCkYvBzLqVazqgVsqzZGh8foArgEPsonCpHhbahR",
  "key15": "2nbvs4yHJvKnUbDyuKkUtEQo3tBiZmHJ9oidwhHftTFoLj2Ej9zr9L3EwYi2iEZq5d5XRVosuiS46y3u89Lh6Z6c",
  "key16": "3iymhNfKB5R9ipBwVrv6FXt6cdcPQvo7XAfABidhJKsK7AoCYN6XkC7jnf9FyGCLX9ixHchDht6y2Tz9B4YRUeoB",
  "key17": "4jKn82H5YAed2PZdynEp8Z5Y56VX4J2jdQHLQaKx2DaZiGq9yTztLSBALvDCbnqdgfEGwSgHKY3qAEDZaS7B3iQZ",
  "key18": "34R1kjvLB4QUib39QSBN2RdWU7f7op79JFQ891yA4sotnvakJLdP2nDaGscZSExZRhbN9QknWLSKRQwSQgHa4zGg",
  "key19": "2qfVJFB5XXGRtAkT9EPBTWjsU4uNeb6WNAjCKbtWfUwsnqidv8D2BhjwYgQiMYmDtbdKmBDHWLHVddx19HaPeur4",
  "key20": "PVRfgBvjuv6My4w2JMaBfc5HvTxyjeGHUzTopKhUKWEMUvaFViHH6xNFQZy9m8fqciWEaNoBrqWy7aUZzSfGhQ2",
  "key21": "4hZRrebX5FwK38QZmGuqEChMNTvEpbJZiaDZBTwfgUNuWRMk4PuJPD93sNENrhF3WkFyJTSJUYmmRGGPjeR5qSJw",
  "key22": "3UPJjjauQ429MVH5sdZnWTXi15MSnUHXSLWzban7RfshixSDVmRCJQjQTvNKJmCD844jNn38MvishJ91MRJPeeLb",
  "key23": "2SoQS8xUreVHp6cwVFqbY4FZFLpLNoZPFS7yWFz2uE5oKHe65Esna3qJTk3EeLdWsSH1V2TPaPAiXpS2XTQiZu93",
  "key24": "67S7RUTZsgJtkAkzyhrcktqAsoMRptrJyqq9REEUY9hzCuUgCagkbPrxQXogp2K7GjHH79gJmVXvKoreiV6aVtSP",
  "key25": "46rEsZuU8HGNwDbe9imsqABnVUiPLnEmDZbNnAewy2tebuGzLY14WAcGMkty8xMh3KeizyXuZZfGcuNS4sSSF3hM",
  "key26": "uMQ1jE8m7UfP69MbaarW4Ro2TMpVsXTxFN2nJTPqJaEGptA2AWxxXtx8QyDQELi2Zb4d5dyEPnsF4oQDwgz7ayp",
  "key27": "28krVwNomzEdCSE7MooUwneUrqZagPAXAUW5bwvTCUyoTfBCDGwoXbK3a7HJrvy8syAVEPE2CZPu47rjaLeHHkQp",
  "key28": "3n4Rx1e1fdfwnC33e3miCGkFS7TgKcf9T34cYghaD13VgHegASu2ECRzPM2iHCxfS2oH9n1drBf5UrRmPZ8YubXM",
  "key29": "2QNSHGVzY3MHQuDJi2YYR6aQX1J3YtJrm3L4EoMU9MG1R13ag7DUp37BTwQTkGWXgDx9rju23Y8G7d9jZzXFoC4n",
  "key30": "8ZVwQTRq94N1k5BUs9EouduSdQWgot6zwimug69C4mEBTgag8WXH69zyKHn3BBSvPF3o65qAgyLCsYNwCnfa2vg",
  "key31": "5vB34bQhwQRKZSLd6XxtatJ8WZ8mn1ao1dVfoyLhi9ua5LxvfBiWUqGAz6ucxbTyw1CLPwEWW3DuTqJdzdeJVRDS",
  "key32": "5W5trqQSQeFmy9PRs5B15ReQUQimHa2X9XJZGC1T75ac6nCrLE48qnyyN23Rwv8V8pFSw6LCRLNREszoQZVisgv",
  "key33": "Carue9dsPxBdg8DQATrZas5t9hDJGAEsZK5Zr4ou56idABarTur4Ujx9dAaRfyVo8rbgWyfcnqbbNyFXriaVc6R",
  "key34": "3778gK922brYmhrddR79dgvrKRkuD7T73nDegQFskv1Qr2S1NyTbACgnmbmRpEoB5ZPqw3b18tEjk2NoPyo4dDb3",
  "key35": "2iXhdopHDWKDbKs7qPDCRS3sXbbbGfCsMx9CMPgbSmY529p7ahQARn9r1AasRkvTMxZMwAUZS4qTRTcS4ZuYvc9U",
  "key36": "5BBDLgStMzccJNjAyyV13DFeNmuhSzMYw94pZURJnb5d5hzwtfQ53dshubXBFoA3crGByxfgqY8C3Kh22H5b3vCn"
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
